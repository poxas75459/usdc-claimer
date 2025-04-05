/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "MwXcDSqQc6ZJiJhwJhu33ikRasy4m8dbxryAAvdzD1kNR6TWJkwtknUtPEgoLwnxqxfSXKMWVE5tnoysJUG7ix2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZWLSkLKDL7Rz3vN2nsfr2xSp3dSJP2fCg4xXfB5tjr9dtpiW7Mqcv9Q7qnEZDDDQTgFjWPT2GtPZyyem4HLHM5X",
  "key1": "2DBfjfMy8cSqm3CqYTeWh6MbuBmSXuMEASyN4wmobpz9YZfi79nj7jUA1rhK7zcH8n7zBC1YLA9iaW8qEf4zqw4w",
  "key2": "83JByhsx9SXmT5ms6ywU4jssP3YZDhWvHsXKUu5AggptUDtiK2yV7ZGijR7pdtu3wRWpHMogFVTPB5LVfhdDEPN",
  "key3": "5TqsnXhqFVmyFcM8XTpT8fEjnL4o6efnDDdoCJzuGLapZd9fSxckrbhNN9d7bQDLAEqKTtu4LRLkYin5Ftkshdy9",
  "key4": "3JZhmrtUMxc1unZ2nV1jWobnatRyGt4zsBCTKHQ96sue8mW29VYam5jd5SrqxAE8ZhDqPqVui2Vvq56mBfhayzss",
  "key5": "2FJ1FFFLHnZgTviKobqArUQbusm5tsCQKxRsQdKUFYXCPXcxw9QsYSSwPg5eKUjEjJK1ZxKM81jYth25YWVD8q6i",
  "key6": "3L34VMDr6es35oN1MH3CKnkGtLYgaWapJLaDk8FznfvGNCeiNBdNnTs5nSnmeU5EeGBoTpVcrtFjoqCwypUMQqiX",
  "key7": "5exNqe6JAP514DtegNqRQ9qjVcgk3yc5zVHtUm5vmSW7i5GCppuH7H4kW66s4MuJ7iQEDhFfBxqmfUjzJmt83vgJ",
  "key8": "Cx6ZqKKqC1a1PtSjV8FySw9VNB16Pc1XVYhZz92SM7TQbogke6UdqB1dtD2TDo2wCXEWUrr2HBwWEdEQvfdagbQ",
  "key9": "21m2qQYEeN4U9nN5k2Q1t7i7bUGgtaWJaQN1LQCRjBzrbUbhPvN8z81BgoMiRvc5Rk75p3hRXG8SVoDF6dipkxcZ",
  "key10": "24AgmAGM8ubf2KgXKLJmcBwHvXB8hrjrVpiNWPHv6Qp3k7vxfZQM6d5BQiw45xa2mXwPy6WfyvJqPLoPxCYfD274",
  "key11": "54Y1hnj67td2uEN7fA4qNZ5TArKmw8DuAJT99JaCPcHJUmzQee3YhAPinYHK9v75LJtrTY6MGGUgCoPQXGm9XDag",
  "key12": "4ukWQpHYMVYhAFuWFw1cAWUUA5tCfjnJ2fzadFMXRbr73JuXMDfcLgho5BDGimiW8d8SyBJmxZSf3N9Mwh7XYaJm",
  "key13": "t2fqXnZAhe4n1puxYaxdpPcxjMSvKypUo2LeRkguvEGs28civdybLNBTqWVtySDKqzX9ox2vYppmMB91LNQGaoD",
  "key14": "5K4jXk8U39p6A5B4Nr7KXbe8UByumB3a1UeCYuciMw9Pprhnceah3a8mVgAf9DeYXvnY89rKZX2Z5yTABM1inhqv",
  "key15": "58nbJLsPhcLwozNu8wEWYfmZRCVuhqW1Ye9M8PZFTPqzjbi2QkRrZi8tQTZoMAPQccKwW7fQqbVRUUrEXfL9BGuT",
  "key16": "5ny3HoCmYdGqhphXyb2KZpbaKZG5X2vDxNHbgsUpd4Zi7UCuMCHGxwc9AGLgaYpZQpb5GdnJnbVEBciE9mSVk6Jg",
  "key17": "2NXmYsxBgzAwKyPVfHfzecyqfSLvg9GgXy6Vu8ah2YjTnbNDhyt5A5ycuSbfCmtioCnVXUw25LnM6tP9n3igbp8P",
  "key18": "4gb2MQXFtm8urNMSnYnnXmNFmRwajTfTQjm8GmmrJGtbiDBHFKNyVNR2kkUZ3ejwr2d4UorQhgtVTKxmg48dyUWT",
  "key19": "5maC2enBNNoR5QT1mBRvvCAXZm2UFi7FTkwANetTmDwn2MBeyoYZLjoaLN3yVLqfpyrLrXEME3NVsd4H7r3sdFk2",
  "key20": "5TgH4GrCY6cEpDn1Fjsrx2iuFYJuutoZCaLacDVsGYQBngdp5BtAAfHFxYiL35ueV3LT6S58wdhVcL6MYGnCiAXQ",
  "key21": "2tbMoQtmWD5qabKVyppxVDfz18YaBPfieyVigMXCxYPqxocYWfwz6fxiW8MowDX5hiUcxPHT7pMjbJRCXay3VSki",
  "key22": "3hUqFTB6dHcfNxNkTLxypZTLNFFtCPS9fNrvpQaoQs6KcfwZBgaghRmRBKGYNx3qUwgidyAFcjLVUh2ZyLLCEerA",
  "key23": "3iEZvaboGvxEGkj77o7nXcXu4ZG376TbfuaQ2uTuvrzNiyHizNm7csSEXbyLMr1Mq4DD9yKzGWLtSbNGoRT7BSqT",
  "key24": "2mA94YrZWogei6LFy3rigGqzXhPH4m7Q8r1q5vLEtzFnQvXJ95f1VyRn5ULLG7poQj8Syrm4ayPcdvckLDFJU12n",
  "key25": "52UzhpNbnbLQRYuFvhd56CUu9LBbMr51EhD9UyzpkppGuEtb2Z5xi4a2C5ctmhJjKjm5h61LPEpatH7gguFnQPxd",
  "key26": "5qoZBUKE1jUD3XoxHbzyP1zfrfL2KhnsL4hsCRQYg1gR26A5aoLwfedc9XSmMTauLViRCCKLMbvM4cpEaBGSpUnz"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
