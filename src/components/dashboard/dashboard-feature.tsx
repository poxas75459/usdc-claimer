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
    "5ja3UcfDwmUQLPLhQPdLQ9vTv4Qo8CNwVL3a4UYMyjM9PEqQ8NGjz5YYazrBLudjNAugG9d2iXati61apRWcJxhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kAz3HfwrhQiyjyauAvtiM9Yn9UrB8xHi1n2c4cP6z7MU1JrFRBVEbYiwDxXA7ZdWXsTuv9zvWKps1qeBicemxdp",
  "key1": "48EvVnXXE5quXZLVaCH2MRDJPU5BoHB4mddG8arwes1iPvdBpzBSxxy98yfMPsQaVZwXJAezojfEvE1V6W9DnWkK",
  "key2": "67nUfZwrjWhdYc6BgX3LizLSfqYSNrbHhx8G3SvXdWTBo1szcq61gbbdpL2qJxxCL2inmi3MX8L5eKTTdYG5RSGa",
  "key3": "D8VhajQVdpvDZF4QVQFys8q2LB62RyLwkX8tfotAQXy7Fa8ZdLgp9D4dUdYAFjvv8VemVDVimWsnXAHvMuKgiL1",
  "key4": "9aswP4bBfb2gzFjr9aJDjEXX1tQR1AdLGZkBGjUjWRmLisrbYZFzjMxNkZ5mSqV9gwTGojS3ZuZ2qYsrhxdaLuy",
  "key5": "4qUDMNBzPA2n5BH3DvGK4vGRekW4V44Qqb38UovKRLqFxHuzrBQxka6mUrmGd4X3o1H5jY55DVtNKvBeqYu4uUYt",
  "key6": "cQ2xcxG1d8LPzjFWfyMMRoJ4uj43hNGZmCKFA6KPe4LXRZzQ4egN4FoBRFxQgNqwdzVDKAPADQf7GqQYeKBnbKc",
  "key7": "325bGuhZ7nvtnxGCVBTPcc6FufoDSviEkB4UrLbssqcnFMpKVHe5K869sCg6YqQ5x9hqJXCvMHSaxWXvhYTvn9vW",
  "key8": "44xNNPZRonrWj4zUsEAFTiKo5DViqtBYdRrcuXSV8ySYEHrnkx1sjSETaRfhzeh9fnm2em7cVRVYjE2FMf7hpX38",
  "key9": "2tiLmVJVUvDXgeqhD7rSD26CATN2w86fQwBzMVWhdr7QBHQCsyHD3ocw5WMTVde1nNN2mDHNXugs7gf9H1oMHRUy",
  "key10": "3nGW33PwF2dfVswVBCUMEcafsC6e5WpoJeavtLaf4hJmVKyJkJumkzDkE7LEMBHYjMS7iK3FE36CzWwAtV2V4891",
  "key11": "AjQq6j1xXTUSWw4Pafp6kG1qK5ZCHqJgZuzqd62VcADbnhjxZSUghu7GkXWywzfLXk97bsg2BsEbMyhVSN8tTWx",
  "key12": "4qBzrhiWXKwys6mSCXvqCDAA7iZpHn5WvF9zPVFgFrDT7izbjVNFMZpyKiHgb3cY7WETvkAyuUQSfHSznDojKT1n",
  "key13": "3cCdQTPQwLJMhKQ21ajxGcuCZSj1RwJghTndJ8RFa55YZn17icGnq1sURZhs8UmnNppgGpfwCmTXUfxts2S4ryXF",
  "key14": "4GB7roiKqxEQxgfhesMgzosMDu3vQ2QEhDLYwbCngCDSqfjSTf1RspznzYmQPFj8wzYS3SY8KzgyfX1giPmno4a3",
  "key15": "VDgxuyzLVuyyhGz9wZj5yNNCgwQdghe44kXwziTKovXEVb6hn9He1HD6vh7WQBtTEGDFxnb7nEYDwuXpFXv4fX8",
  "key16": "3QQaKTQ7TnoCEtMraoesJx3qhuuqRsKS4hntxqD39ERYZfVKLgw3AnJfG1V3uLrJktP2km3PkV85s9bBTw456tKE",
  "key17": "2RzRr9G6tsiL9jQHF1ke5SA7Q9XreKN1okcbYPPQbk2kwZt4LRETiFpG3hkGxchhh7RFqqwzo3iwQYEcUQR2aTz8",
  "key18": "feh8tRAGFDrWaqTTtWQLe4VejhNhaSyV4NWaeKTGiD62muMq3U3NFRNyVw4YxWw36WfzvKrvHxmpXpCafSGbDKr",
  "key19": "3MgVTi6MqnEj9tVQNDiu9eXfVURLD7Ep4cQbWiA67oa3fScUup8SGHnaeVG5dLxBYHqcsNiuYcWHHnao5Y31ngk3",
  "key20": "5UDSFkyRhccHPkUNjFnXm3BpmicAf3Un37upRJgDp7roxZFmi2iF83F6cM3FnFuYLZX7Ktbj4keudkg4cvQV2V4d",
  "key21": "3YdeGPBpyXkmygyW9gBJ7FFZzhKqZkgCCKB5zUowRMhWCRTFGpDLAq8tdA59GTD7raWnQLufPuCrPDUDnP7mi5w8",
  "key22": "5XG5E95xNgTdPRntVEwxoqSzKGxLd5zgNGz5cyKiaYKnoJaWhWbKhtdWvtUfUExQQN1TEDSB2CFWjKoQUvPgyj1w",
  "key23": "9RWDzGqfB3bNFvdcDQhgnpyAw9PxVKBSw3jruv4uqozF7L2uaies7rnhAMG57JUVZiZ9Sn5mRSKbeDR5MQjKE7i",
  "key24": "3m8cp1BGzWfyhnAdZgtkaxU6Mn55oL2RrK5KkSve5qKJW21VRPg8RWfE7LWd2c3SRH8DkzPTdQeCuzPnXrye7rQw",
  "key25": "2t97N27nuonVaMNsJndQxQ5D85A9wHZkNT2b9VWZooNS3kHXG6QWLiarWFLdbU4ytPyGVKwpGdvPrgpU5KcgLTXZ",
  "key26": "4oC7a2DWmhqoV6CgLNknFiz4ZS7v4Mwxsjro5ApWdTpgfKfNkXYLCT2NNtg5UGHHkQ3tCVkj9iM2Vm8RyMcFEz1r",
  "key27": "2hXXYvEostBQiZnB93TmvKbUZ9BNCM4a236YraGsp3XM1ajFuEiy3GaW93Nyrw9Q5pLQPzPoJRNsb3KLnu5VyzrW",
  "key28": "2YnHXv2bh8Tub64hmqwmBnzWo7kAK552hmwVF584CSogvCd1hrm55uPhLPErM1a6c4NDJ1kvVr4SwMX9DwiTA9kz",
  "key29": "5kdBrKDB5opd4ywZ25BiqNN7vQ1pH3R5zRvxrwJLnjRLjny7BqDBLZ841CXrDzc9nebRC3pScQ3cmzEWECchrcLj"
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
