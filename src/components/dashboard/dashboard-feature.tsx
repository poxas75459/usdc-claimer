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
    "2crT6iQ2mbkpULXMTNt75b3Dk1VDqm4J8sikUauEA6JvX7pim6QYRW5Bmz8osP6GtNBdi1o7s9RwEHoiibsNeF2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yg91KDHQ8hc9asEbtQ6WKGTDCaj1gKHaXd2YeuvSjENgqUo7wUQRn4oMbp3DW7L3aR93HkePtHXjyLhUUFwfPv7",
  "key1": "2QvEzJwdi7EsrsB4pjdCftfKTZCygUePWbreyQc5p4MHkPQa6cx1uEGriQWvHzrDQehYKdqohdav8zc3ytAQh3qt",
  "key2": "3mf9YHJ3uByK9mxgngu5cYisjYrBy9dM1oovreESiJeVZ2FHXapwaA2d2FCnuBtMQ3Vm1fv9Fkm8AYvzynHxmhH2",
  "key3": "2vHPtg2CjyJDxe4nBFpvAhDHc6a6mzFfWuN7Fym378a5pvMJRYvdFe3B4xv3rgdbmdb7XbxjQiCmcZGsJU6tYRVn",
  "key4": "66gEwNdZ4G4Z1V3aRzBT4cDkx64CFPaSd2faLNs8rkib1ViETEygaZx71nz9yuHPGyo5rcZJ5aiayh4WwZL7bNVg",
  "key5": "2XzP17zmGbVV3tfzu9TgYx45cAYuMpR1YsYejyhBGCKfxkAgpTZGhpuqdVyYya3jQPFup6gGP8Y639xEGBUtmFdM",
  "key6": "2swoNzh2SmcmP5j8JDnCGb61LWFJyhH9LFuyF2fhX5auPURDnWfNsvtfLwdasxJpA7LehzJFp6yqPv9sxXoWFDwB",
  "key7": "C3r1XwJmam5zEUqgUZ4sP4N2JK6w2y4gCUXkeRTNXKwBx1Tp3xfDWajs3QkuikwezdxRpJUxjA7WNjtGjGi4DcR",
  "key8": "ZJKzLURgNmeRVmPeAcCgnCMuyYq8vBQGbnoNbmEztuVRqiemybv9rDsRYh89rYJJMNN2tK8fXhsbgJXoAbUMJST",
  "key9": "3MdrMs4dBuTFM8Xq6z3uXV8yUoeqjnyBvmGDtxa2Q8BvCyCvN92N5PwScXphYF7d45NJhBgU3LRLc9KGLo7a1bW3",
  "key10": "3pwxccPZ5BFst1BwjW2k6LFBWFeLwG4ZcCEXsaNTRsvZzgjz3muNVQ7jd5jNUD6zoNKZ9NFatEcBFaajXoaVYWFV",
  "key11": "5VNC3cR5VJe6kxGUXCcuq1Lih8FFGoQ3CwgBkNMQ5o957TCRSQteyDwK5diqiu65rDLUQgH7UjhKuYjscHsGBY2g",
  "key12": "3Nkuge9FzgUJm1j4rn4orscFcy4CeJMJiRM2jRD1yz5kKCDHSCyGcXuvzfj5k3gdMMd84rC6dftH81hu5FDCCkbU",
  "key13": "3QpBAMaAS8KcgihMAqN7tkxcSRXgBi1igkUk3YjaqnWbsH7ttZkK2VD6FrNV1rv2RRQ7BsjQ8q2WUsFAwMew8aHY",
  "key14": "5bksSnL1uF3uG4DS1yiE36JfpBMjrhfLrmxNYCXJPTqx3n2pUxiYoNJjje8Wap1SsrSUG1V58RUSLd9Bs2FEpYJQ",
  "key15": "4CCT2En9ZuvKi9bWve3FPdYSvfQQMmuq7Fu8rj1Q2vWrTtbJcLNKVaxW1iCnnCQRFj3DL8vcYh12MFfDwV57aZbn",
  "key16": "2Yz987zZ5RedW2TCDXfLX8BkoFHasYUY6Fx5V9kqGGr4mJEdZeyugLNWr1oPjfakvJHgnsRvuSZ3vBh9zrNmR9NG",
  "key17": "4ph5AQz2GmJDVqbmmQFhoqaMZqyzieLcnp1J3fHqE16BPRxW2STYHjbAENxuLzpJAp9wtGAMC4EZEh26K7hiSseF",
  "key18": "2gyzWMQNa8zvM6pfx8y2UwXaEsG9yzW2V5amAT328F8marD34Kj9rJwDDUojWqjD7aUnYcJtGWZRrAt1Kuj5iNJF",
  "key19": "4n2TPQbauuaVD5fmBt7wFh4HwVMDSrzgXX4ke5KQJGMYpMKymmXeCMDpHrxdJbQ76LaYkwamfsJDb5SzetDnGD4j",
  "key20": "53tnVwaKQ1BAgtXpqeM5bGVao5w5QrA2rVdgoycBodQ1VcgUBojBNxowxrEYMmM7e49w9L1VhRRprdFsQdefumBM",
  "key21": "5UfXrR1znME2ynSvd6bk9HyEonrm3KYEMznU4joTU5rNf94GeJnQhShVYUjn5fVQUp6EhyDaqKfAupkWfk6SNDJ9",
  "key22": "27kShEuAGbYq8TE2ZgRx6NLuwMRYTy4QfEE3Wu6PggP8C2XL3TqdKe1em3qhuxi412c8KDjBfEZS4EXHE6vVCk2H",
  "key23": "5hjdsQJGf8y2SJszgAWs4R1Nq56zXrsUmeYx1YoEcvohCgq39EnXErCvyvsbugqfH8Vtci93ogRWVVJmKmFArrB2",
  "key24": "JCg2CTEjU1KMZpvo2tWm1bAvyw3Y83KSTKcoyLgBrkHVmuNVViLXVJHWBwVFEkWKagX7T2NvfVcnVUaJcaVJNYF",
  "key25": "3936KrB563JfZFx7UyUVfVpzT822aKcaMUpm5fYoA7FsyYLfmaF1we6u1LNnbtGQfV2SqaKUWQCfYLjrVQZJ6ic9",
  "key26": "44gEYWCdPJ1DkfENefGB7qHZVDsPorrCDJ3p4toExEKnQqhTTUngSU3UYskHBtcbKPMeikzS1SA4Ro7y9D6pNwWD",
  "key27": "5WX59LJEwssxg5Rp868BqQxAZDsoc3LQY3C3ymvWmVyMYKndHNP84BqgonuThv5kN9J1eptZw9nJZFj4Q21oRTLo",
  "key28": "4MnDREK1StsAJ3Dkx9UqrDV82YoHYQEBFdyUjAgbbmcNNFTMusQWfBGQMwu7Pqb1sH5CBLUui5RmnPt6aXyjWY1e"
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
