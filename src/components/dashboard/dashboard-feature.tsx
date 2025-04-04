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
    "4xusAaur5TP9KYfFk4ju5Li1akhzVbaez3XWy8rVUgofpWrdzhjgiHyZwcbxa8Z6E1kHx6JKWGVbktHmdho1SMg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tv6uZ6mC6qrc4P2sxoBTHq5NZT1Z9dbe3MifpQHWwEnxB9U2BWmciwVei5TTUBRykfkRRL2wJdyfXgJ9ZXPc6zc",
  "key1": "4Kxtn8EqV3KGXPSwbgM1sA55QPA5bywbz1fUndsx7qs7Wn4ctJkjpSZJPV15yaA3CTguxnM8jnoeUijXZCNeF6fG",
  "key2": "36JVjhFP7UZUdj3s74gv4ZRsoWeDpr8qvmyVRPz1h38AjkXiSNAqWHSnuDYPvYbrL1S4eFvFbTZeGNfQXt4EMeES",
  "key3": "2xuATn6njK7Yyt5368AP3Zs6rNCEYaND2DLGAm34JYNcM2T3WpNVuP8Zk6pmqD1qQSF1eyfsRRwAL3gq9X9sN2Z1",
  "key4": "2guJ9oKnh8qe6KPv8DHKi8ZjTsDpuhmusaMBNhWy4xM7fpeGuFAEyA1ZVnbYFJimTHnMKBnBQub5dxNTdEbxfjdw",
  "key5": "5tRAKbUSbozJnh4vSmCC2PiJuVDGsMXp2CcZGtZmahAQJnfq5eCe5fog4FfKgKZMAFre8t2voqfuCbhcyfZfZu16",
  "key6": "4eWWqPYg8a82yF8nNtA2cxoHjmBYiVax5o9Guj2myeHTNCn1FobEagqJMjY4Y5FQB5UB9r3CmPty3WV2V8FNDUv8",
  "key7": "4didWphjuso79esFPDAWqDoa6vjpSaz2LUHZvsF8voC4cMGZ9TinV13ghy3TCSMD46imcoYbKrRbN5QVZDZo1p7t",
  "key8": "5moVZgpTD2uWMZsZj2PirjGSHJNZYCAmsuhDQfJqGMJB9rziBrdFjFgdco5YJzUbk6E481cMBF94gY4h3t7xe1UZ",
  "key9": "mFXaEMbQ9fczSbdoLdHWZDVzkhdxMnSxAZ7Mi8bXDryPbxtNKGLh8Y7YFnUSU2Q5ySothPDgC4pRzWLfi81Knx2",
  "key10": "5Mf7JXEMK1uAJGKYuR88zaMAD6SvPhgjLkBubtXDFeu8GT5PGi2WYj2k4faJWpb9dArG8gJedHPrnAoUo9eJW3ZY",
  "key11": "35XvHmQhYWuR6ohcpXKx7vW12xPA2VwDWUdkx2ivGGiLtnnK81Bz147vDdC5cEkkBfBvDVH3yHJZjHBoBMwBXqAT",
  "key12": "2ovGLnRavm3NTuTH8UYwVrjXtBvQzK3W4n264iXVZy7gRZDQahwhaXd9F2QCHuJnmpLUNSXoEDfiKjZ1aH932EpJ",
  "key13": "25pkmYbU8TtFDycADPUCoATC1So7kzNrLBmPUDutuAeEcMirHrPeYdbHtwVnZucJujYz3TjLhoXY2pSjXvxxa8h2",
  "key14": "2NkyFaVM79fbBV9L8XGRjpyqJqJtds56vSmcuNhEszZUp4o8FxsRbRPDZ14ZaG7yCebppcCbrEhDGqX619FmZo9T",
  "key15": "PRxbNZTDY5b273zSNHKEnQS4Xj4Ac6vzMpVTSDREromBZLqqdnQhjBXBD4UBNN5s4Xh7eW32sRCuiWvCELifiVe",
  "key16": "9BB8JbNF8SRcy4CaU8UNkvNQqS2Cm9ZEXW8SZEfhV1B4UKhxQpePQUxmnpVU7tpY3ZXgPaxC66XVkY5BMErCDBX",
  "key17": "3rmVsfhmEm9VVyEgsBdcuBoy3naNt5QDyUeiZ4xMw686VkJjrgVzrK4bPESVENHGZVWagPqHTki8WZQWGLEWigmv",
  "key18": "2kzpmPuyB9cMpg2VeqnALQkkq9957Tspr5R1MiiujbWHj6VjvREtQT7xzP9AKz7nsBkoCFT2KcK3t3cuCnuKEr8f",
  "key19": "2sz9FSPVVeaH3vm8CgXCHKBSbGNJPMwydPnLCxFZWm2yd2R2yfGFEuTq6bCCfFwZor1WVNe48usJz3AEd4BdZ4Dk",
  "key20": "5zmP7mXJD7VDmixnmwQZwiXYQfAEKWeMzxfiCEy1YVg1cyoYiEKsxGi7URE4uv14ukE1JdhbfSfhVrGrW4ceLQGi",
  "key21": "37Cz6Xw9ai2SCFNxsgcc2nuQtpG3x6LY4rY3jzY3VXSwPqBooP4s94vKxbFpdp7d65bqJZ1xc6JdB5zfUjfpZQB2",
  "key22": "5RYFAseFjQk1eLqbaSwKEauNK32tHy1M2LiBJsjz9V3p5izyZS1g42QFZxWobZuCUkNUA31hXV8MouYp6QPBkhnc",
  "key23": "2w3ELGkDzHm883L8h7T4iqMv1mW37izR7euFNvio7rpaj9xEK1sRaLBAobiKSjiU9AX89MSL6M9SXz71Vh5D2XSN",
  "key24": "33P3ZesjB958VAJqaLzRe5g21ow49kFAUsnQwvmEReo92Dr6gjB7LKYmXNsvXtfMXB2Dn5jJ3WyAeg14j8pdzR3"
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
