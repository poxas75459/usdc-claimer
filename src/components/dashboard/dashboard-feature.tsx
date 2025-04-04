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
    "59Wk4ZZsCHKiwdPvPCtknphSCGC6uZqWGQbxL9uTJEyvX3AVQ4GSN24JSnz84X53C9AUgwFWa6d1fgVQnpJBfMpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Gau5aMLimNZEQn5CLu3mjqLr3oi3Ky4pVbMUD1M7HH2o7yniNMNHMdHgjQqSSvWmcoGYuXfE1aJn9cMoRLmBaj",
  "key1": "4mLa9a5oiFExF2ojEsfEtagdvQqMXoZ4EjTFcsw56tdAXUTtVLnvQMHsHzkeE2tGzP9sLdJJehGE5gqp9reewpDE",
  "key2": "25JfcmE9FrpEvVzo8wzDv43Q1VxX12UqLvCG5u8oRqJwQEyVeCnNo1Ee8ixUZUNHDQHKP5hipXcfSs7Ed4UsH1JF",
  "key3": "5yZKk7Us1FWwMbvfnEzjbMJxLJYBLToRu5DmU4ekPkskZzX2bBLboXqcbmExAXTBG3WSFo8f8Xiqym4j63XVozy1",
  "key4": "4eJo8VbSGJVebYtdyMTz3JRv469JsKvrSyUXG2oTaU67c37Hf2y8g2VgXsYAaiFmdeG79crpzp3ZN7iXT7kwTxbM",
  "key5": "4WbT5ZLXj4wfCE4SMceTA1yiLj1pnneSvAx1hS3THhz1QzrhcKU7tXqPV98Bz1NY81tGmAx6cu4SqouAWeon1vyH",
  "key6": "3EXF2AtTUgQLtnFeHA5RaRLvjzfdVoSYCPdfoxptqVfm5LTGXsAeuo3rbnw2Aa9paUJ5Z7Xm13feoS9eZmtPEsP1",
  "key7": "5xZJEvFgniKFkhm1jq2fjb54hQFHzCyz2gtgrzqFCpTFbnXrLqWjVxpgcpQJt5uVxPKQtGRfGVspQChpphUamKa",
  "key8": "47B9QEeStX4AUWuwPF3wVoMT9dUpVCqSQ5597nU4GSVc95A159HaFBx5ZSVikLDYHqByfZ78gQef3xKucK3oK6m4",
  "key9": "3qKv9BWEh5UfFYUp6no1je2em2uCi4BYaEZ8MWpz1YuKxcjGWPZnd4zeCXUXVJuxyTirkh4jFK4jWydpmN8Y5tub",
  "key10": "2zMMM9nbBWxvkg5PdGQoDbRXBG2vi4NfsNjmunpLN6yQBHkpAWMc1TzvPF43bVCLRy7yfB66Qj3wG3BrXGKVUgZJ",
  "key11": "2FrYWctn889xbNPjWEFoyx29CkWTiHCfiTs4qzn46BzBuyMcSfsgyTP6GHCMa6hxgjGoCqowQriYXLerUc1ZPeSY",
  "key12": "4efCM2XxFzJBPs4c6N18AdZEqgmpz59QUMozPL1zFxPV3vWVosG1gPPjJNiGppQJVgmgUSvPxXA7X7w3967dEaeL",
  "key13": "3c7pC9dJtvuUxbvPBrgeQVKUFqa99p2Skenywz7wUm5hdR1L2nBAfuKVCCJcuznxXdnVXmctAvW1dCpZVMpuDYWm",
  "key14": "2PET5j65xRT9TPfHWavUPdD9gFkP2xUKfSA6u4ekwLseZ55c8fbfxxwVM8HPwxsLREWACc1C9T9QQZeUXH3FtchL",
  "key15": "5UVozYzTTzP8n7aFcbaxPmnBUWezG4cbFULm5rKE5KoPiuwDacE6wYG1TCx9sJ3hJugkkR8P8yt64wzFg4xSWV6k",
  "key16": "4DrEuYaRscB9LVA5qiKmQQmSfsfjGBhtSvCDCjvwKfX9aBFpsYnnkxdqtA5GM26WC5nXo6khjamYvMqrcCrZscZj",
  "key17": "5Xo9RC9c1rDJZNonazhSQZ9a73smxYeCxxS1AapprseCrNQoHuehcYQEmkFtyaFDhPzVHHGsYUvzQr6HNV8f4W7w",
  "key18": "4Ug6E9ZvvFmPZZ4RTBMTCsvKiM7M9zcV4cGW5oYY22xFJ31Wfb1MTcYm6426PpkEc6ZxHcG8582u579zK1DKPs2J",
  "key19": "2471z2nt2dBGKk5UofnWU8jRPAHzBTVDesRthgD1fY39wqE4Fc3kAJizg3QMkr8vXSqpuAYjj2qegwwcwWxXYBCM",
  "key20": "4oh7u9LxpoSXtSYJphJBf7dH9ZhCJSgj6aPihhbofmkpSeqc8oGo9Quevnjm9kAxp78DvWkid7XAjPnz2toq6wZM",
  "key21": "3oNhTpUTy5vYnpvb2E6irf4bmbzhqGQf5WZghCCzvq1igD77JJzZu7kenptK4um6XS2sNwYzx23Wq1vdUo56eAap",
  "key22": "33TVdi9BUi3mK8nAZZ4QPCFtEoYVBHdUyQUB4QjdtbctkpZVTiBLdBmZreKNn2iZj3MsqUffa1scbKnuoPx4oayE",
  "key23": "MNjvPkTkxW2hccgtj7x69oNaW4fKTGX7BVoQ1emeU2SFyWNQrAkopoyBkSk4oWBGmAFrsXzUfqCgd2VsJuUFQrh",
  "key24": "3Ficn24vC8w4mVmNadzKcu6uahG5UTSNa7r4eewkkcQbTyUZfzQy9cHTGy5VuRJ34F8pFh9sNaHJA8Ew4Y9kuF6S",
  "key25": "3oREy1Xhw9UFm6iDp83PQa66sFutFjVwFAYnazwgyVfRbHZaxMsSxhaRRVYQvwyqkymnAFSb83tW4x3fL6tFmBJR"
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
