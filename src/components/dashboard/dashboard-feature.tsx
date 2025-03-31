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
    "1X47t9MmEqJ58J4uH7h5hyparBViTFP2usbPDhGwf9NgR8vqJeJESkTjmnCKxvJ9Xpkg1QqhwvtjaHRWaeqcNbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rHRgs4sd3vBXXHhsDE1AD2EawzEGDp2BSvTjbbND5xpHH3NM3XWjKDTS29D7RttdjgGV59m9FuiGhf6MbZMKy43",
  "key1": "4wfyKZEwUqugWFwHsRPoxGBgqhYZtVdCDDy8cm9qjWuowZakMkwxhffhR5HrZZNNKzodNzJukTk1T9MUyZMDFRQg",
  "key2": "4fEp7L51wBQShLPfJP3GCtJhvGgSWMH68Z2MxFzg9jTMeUMLzYrkoy3XCs6xDtQ6moH48hsfVRWzUBN1gGU5q3ox",
  "key3": "5tu6DvHtHKpsAGtt4bfW91HL2qBNFTn3GpFSpoLhExzNmYMUPdHxXuYaT4ZeT2Nh1C9Vmagk4gVFwkJ3YgMFr8zW",
  "key4": "38DnM78AcgJ9Ti8G3madeGGTsdcj7efbyKAdvWK9BSRnDXkrfvaFAFPKfMu38KKrjCrEgh4mqv8QHDQK2D12ujpk",
  "key5": "5xsSPuWRLfDk2qDHyGsDkPQ1yupTC9UykLrA8kD1EGufJ2S1kDv2pndu43TRawcWXwssgcyE6NLpD3iBfrpbrxiT",
  "key6": "oBdR5BERZXiUJF42wG5gm7rQMru4vTngjaWfdhRwbnBvGkUHQFyT9RHov6HjKqFFXwTwPcJ3yZMr7yDSGQjA5eY",
  "key7": "2j863311G4AaYqFiJwYq7n67udvM1YCbv16qWukHFtLFHTHKLBNY4KyvJStjNeqpkUdSGMNQF1AsuTGhwsfMnEGK",
  "key8": "5PBjmHLcvyLftjru73S4gAgYpvKiZx9miQiuG4vEPDLzpbYSEWQ3JVWaKTpcEDLaRp3o7Qca9HrVrNYr5ZVt3AvG",
  "key9": "3n1wDpciqED7JyL3LiFQ5hS53YPFpTfs5kitgav3A2u3fpCrRxFaWHo9iScTArgeQFpipK3EM5XaBv4Yms9HF1gv",
  "key10": "5J6irNV7xQoS7VkNSQMUc4W6THWs7B1r9AP8LzHLcvXhCqQMzBNhxkFHFvfEtPoLNys4nhpkN2tDPfKZbN6HTSBo",
  "key11": "3wDcB2nqTAbxiEvnqDefDq9uXMhd8N98mF8nM4S4ztAJ9LVGwCrGcRhrXn9X3hXvjPdreEuL57szgNutD9Q8q1k4",
  "key12": "5FngvUFVW4BwY7Dx9qqo49QdK8R28igt85y84nscJvHQzKLyTnE1JqFLwTbfzsumVMSNFsYZbUrj1wjSThrp6Ac2",
  "key13": "2prt1KJJAJqRWuz6Jmh2W5Eyy7L8op7QkENa46xEB4zmLKik4LNF2VYmaA4esPHqNd84nKkzfSdyWthP7nUrh5te",
  "key14": "3LGpzYGALtwzQfiiXwHoBdifj6vVqwJpTQHcrfHsWTjyGp1DT1uEMQ6XQy5CojoT4FRPRnAKcT1tn5YTq92Jk5jd",
  "key15": "4ru1EUM8Y5TRXs3ryjVwG9s8pfmETK82Kc4iiEE1nEhHtFDT5c5qtgvDEatzYAr1KjtAUbEDheYi5wQKncvREfFJ",
  "key16": "2JxmBv9MduAQdy5QDTDqaBwJ3ebCC72hW1kwoGEhHzQRqCuoBqVNPT47aQX3MFJv7ppDPF33kWyNayDrkm864cWB",
  "key17": "23yqYv4zHTphafS7mMz3wakuTxdwSrD7RRuc8s3k46w29XisKTceZiuaGkWbGAjT8m9tZoySnfovQqmH4kRih5uJ",
  "key18": "kKTfFN298qfRPB1aGiwoLEDPs2AoMuJ4c5x8PM7qzBvx6TCu7N8ERn51DR9szE7GueTxhi8DobLczFcUTVQFg2K",
  "key19": "5Dh5gN1mqFtJzccVB4ovX2zMttHtbsn2F9fSxsCL6eZpAq3Yjd8nr8a8R3KsTExpLbsGZ8SkJtrWKmBNjcUzpp1Z",
  "key20": "2GYSBmXVnMftUoDik5VeEdgVX4iu1yudSdsvx1FGDGmxKdE2SUqANYsiWtmPe3KD1UEqFrJBCUUBqXXxaXke8e13",
  "key21": "5n2qcsdhdNDf8oBhG3kbTYKxohhz6Lisj13dXZbabzH9ia3nSrZuj9ofeoFtwguRaRfK1nx8BnzbjHj6KycHVEiH",
  "key22": "5y7hz4oPQZDKZSJWPMVM1pxqkRtLHSw2JsJPp4TmUd9fyDHjvGWNzjuGL8svGyUSUAq4cACmi5fd52UedVX9Z9Wa",
  "key23": "66FojqPLZPQsQtviT1o5ZqZ7Ep3veih133XQCidG2EBCanfRANEnSBTkSW223cA4AL3cSTmCrCVqA2i7cgxu119r",
  "key24": "5R5vHK3YD8Fme8k2EhdPsA9JkiREfqCGhieCAdjGwbvNsuoV3S4u3Mj35VSAyuRvZiFy9uXS9gUFr8k5z31s27tM",
  "key25": "2D73B4PGSVTJvw9GQG7qkvp7fSsULQdNRazkaMyVGLTdLhB3JFdgtPSCHt7cpeuQ6vh7jk5gvu93QC1Xh9JLmaJX",
  "key26": "owXk2P5oPeYHYzLVWFSerNtFXu9DmZkMsn5Cmou9nx2Yiqs8evwqSJtorqqoqfnGeL2i4XcvCifE6Dicq9Zv1uK",
  "key27": "2YuFKi9c1oLXB6TcwU95Jq7YcdQUMiHg4SDoA4Y2fkeF7uCcFMvL6JRSKVo78Kt1g6fBMV36fX16Z2TM4TgAVjf6",
  "key28": "2jSfpQtaeYevxNgDJ3fMHoZRMSCs6EqVk6CaKsCgobLqtx8WtX2pappDdixc1bPGRLy9ekvReZRJeuxcEX1wsCA3",
  "key29": "2uFaWmv3NqqQvuVjHxocafw1NmoAGkFTNiYLHJgSDEQhQLfraw3GB5oXzZ5VmLdGaMUQoMT47mLpeaFJYADxUwX2",
  "key30": "4L4CjbTRH9VPpUG6zTTzTUMUAdJZreKPL8ue5uV7tk1hGRRpALyz9QdDEXBDv8HaAfEau7pSEhAA9SSX7Q4dYd78",
  "key31": "3awL4RaPchBk1woUXwTHXGT1ynPakc2LUUcgW3CJnEcyi6ErzTbuMNGsA9cUmWhotgYoSd646du3L5b8fgAhEmH2",
  "key32": "paRwwLhdLuYXRzh8VbKJxwCZUPicgDQ7fsC5spgTEPFm8sthvZ9gtdy16SVB1Dh1GSYs2YAF7LQjArdkpbAw1gq",
  "key33": "X8fW5WucmJKvoM7kxW9eeyrMYUrbyLGuhHCNjJcfJV5WkgoN52t1oA2ndt7WUH1BPYD18YhXazP66jqe2vSHcRf",
  "key34": "3x8SS4BbiZ7inoc7ZD8WuBp863AnxM1cQMdiYqYDjSHE6U4SY3zrCLJEju8WoAfPiZoXEaueXnKag24msEvkZa1q",
  "key35": "K92957yzjtyQLH5G2W64mvyXQGF6dbQJPiR6yvLe5HRep5JzdnbB49hZxgd6kfTegBzFAtwysybch7UKgizvo95",
  "key36": "4VokHjZSVPAUe2CR96wwuq93haW5MGxxfJnTNxMrZwGUGmhvDPZQwvnotTFDNdM4oR9ejaocW2GnG3DmAU6FuqDk",
  "key37": "LXinpDuxhpXb4Q6Jmg3qpGyS89Vagek24Vntph4eJ1UxDrD4UMPjRe4oXoYaxzRuNJdk9nesiXLqMC9EXiZasgG",
  "key38": "56fBZW1aF6WAa91qxNMj3bh6LxLaoEt6QDLFihLwCKL5dAgpKHVuFZB2GTR23vCM6fo4fW3GiFEPRD4Lv6VZR2uy",
  "key39": "4YjsRg2rL5bnbTcP5Y1HuGvYErscfdTSyVQurv4xcb4JQP2JzpFTwTiAjxMEZVwMwWrGD1CWGybmBtaw1F7cxr7b",
  "key40": "5U1NSGeQpjahC9CZiunABdz5o8dU95i4azML97Z2RxM56NWMS4LYM4mrHJig5EsE4WxGAtWr2SG5PFMjpdCX1zP7",
  "key41": "2a6KQB9yi4DZxmKFvxa7gXJHtG1gwmpMWjUpjNk5Nr3rK8ZLs2ESvrU4c92oV4NA7Sy4Zx6XuVrJmq2LNqyj9hQG",
  "key42": "2MqXpTaJE1zT9fZCnsiqP6f6uu3gyvgs3b113gaViaz4Qau2r44EkehvW3zvWWSXraU3WNEDz4AuPerUmFdDQMgu",
  "key43": "2PVk4tDzNsjdHweNwM5cf6Wn9ZHDzM5jg61h4GA2kfVMc1ooK43KEqDVnRAAsfAk3rB1afnFufjNaDfkKmfSgohT"
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
