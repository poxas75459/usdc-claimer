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
    "2WadyQsYnRXxbWBfZhbPsx4aJTQFPkqh25tAaQGaJyA7PoQir24Y4daLSjmjV7nCTeFKRaodhBLxAF1afuEFVCqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jjjKU8NR1hsvf49gSx6YRFxLfTMYGY39tZdzHaYzd8SXVi5vYS7y4XEGL5bpSKjhMcPqMEC4vFB7S7iiCaC8yfo",
  "key1": "4wGykRiLptqeRVeoY7KHPirnebWDrQruZe775htqUNjxENJS74aAcHpixnW5VGW7bKHGuyU1y5HcXprxaJRpNnwF",
  "key2": "3VuiQqbdNdbQfLWfZnoAuJjfqMgPYcepFLjc2dqC9SDDWb4Tx7yqhzbGLq98mh7sdzEf7snZ971C6SjiED2qPfKJ",
  "key3": "4de6Sa4opcD7gS3ULFUpVjN6m9E6PGhBeipWTBkJWf8oxUbSQdRn1CkfynpVkjiMrGmjavb6o6tbuCJP9p1Zosgv",
  "key4": "2W4kAHo6kcpPD57y8n8E28BXruG4U5kDLSgRBMR4fKPGQQMwdWBzCQJ1VhRCPjTj5eRCwuoF3QDDcN7ZG6pQyt7B",
  "key5": "WP2MeAKcFEaKMgem97qxr3odNoJnBaURzn936Nii4TnM7dGMKMR1qF6Vmkn8fJfr6YbLE6mcJfGXZZFsTFrFg7C",
  "key6": "WSV1JcsSz8kzqvVjNANi2TSThHnmkxd66j6R1iWefE2XjkaSSxAgxm8a4Q4j2YG5uF9CpDRedErS9HnTuDHYFiz",
  "key7": "3JqcR3Rd2F98Gj55J1NgNzr2iyHhB9UMVhcHLV4jcjA4RJQGd8SV51ZsnyBGRBmiygkPqU2ahwjmCnPaQFdmrCwh",
  "key8": "kq8A4ZPK1qwrWs5YihA4ZEue4WsHkYkXZYo2WGq7QAXRjxvf5p98otbAtca4Y5mSQyr9xzRFMeREqSxJE5uLKjh",
  "key9": "4UCac9JHXaKbdz6JSj37HMVoD9SM8CVKEg4jxmTbdjX1FHJSgivGXbydr74tcwKGVCSeSEKBPYf7ZGz7hr5hRRPH",
  "key10": "4ntQyEkm7UyfPZjvvf71p88TwBYL3yfUiEUvRZfee3HNsz1BvjgcCeM3iLjLJQEUMZdwYm6io3Ww5wpyjLhB9kiq",
  "key11": "4hzKA6ajfSiqPdJMUamhstCYZfJQtFvGRBing8fFNVSutdhA4HpSjvRD8wLBk2MvMuSBwkyXrshEYSxvAeg1JrDV",
  "key12": "4RRascxF1dAumpfYWnFruXMg1Ra4DpxySYFHhAWtKx86uZJUgfkibN2cqkNTLwQScgEEiCyGUtUYAn4GqAZmPQJa",
  "key13": "2wTQSnZN8xKuGN54eaXuqtU9hvkRLM2bE6ap5MHhhy2EgRc2CsngcZ4CejEjyyFefWBJvJMfEcA6vvUHDF2SEGfa",
  "key14": "2mAyBjk6ACLHhoCLECLcnuNq3Zwjk9bKKvZmKZD9qi6ncmyqtNAzxkaaQP8mbvC3xxMfM7mrspTDMAg4GAykwmJ7",
  "key15": "hqbTk6B6kU6oG9E2PWeVvBnroqRprirfXGyitTmqQAwpgke3EHwBYuthfF3LSDPvKPGdw7sefYjmf7t2h5HamLG",
  "key16": "3PeK4uU18hGxUEiGJ2UQBzgKF9uq5QN4QDAVXmJVk82o3wt8gCT6FoEx4y891PKL61WqZQ1NvqQs1iwnaugHNcgY",
  "key17": "VSDd93spBR6cagJeKnSHZSLyqknEBgrFDj54a3EYNcEzzp8P7k4U9oPrcLGsxSqCwPSyR93ALpFYd4h7WWtJj1W",
  "key18": "4hRDJz29cCXJqxLRZPJFJHBcWumm8yRD5gD7W7Wy8ow99ZMQE5weqfmpDomoXxJ5PenskQhQB2mQrdBt7gfszfhK",
  "key19": "VxLthzfV84PvhhdxpS1BRit4Tp6nNBRmMSJDMhRjZUAN6X24TBiY1Q5n2EZomKn4NdomCL6NZNQQTWsz7DELeSC",
  "key20": "3T8KXa964LtZSBVrwt8FmkCjvGw3YZoLLCz6o1YUNhYn7sNLEvcaicWTDQ7LgxB4DTJ7rsniwc5Yy8aKicwLdDWg",
  "key21": "3JwruJBzEPRu96pwUwsH4y8Leu2nRvrqxEUQCDJrw1oNU1hjsGvj91j3eYtJiKDeg574qPtayeTVVTmqv4JNxXyV",
  "key22": "kiCmtohR6tc5ENqUKVVK2EQRHhZBpSqFPww6jYyj1thPU4KQQ2MwrpDVJAyw3csbuUZAaajdsWCbwVMtWfhpoNA",
  "key23": "5XkhF5hWhWmsryFYWcsfzhZ4Pm6ke55yGNiiJ7P8EnWVickV1w5aAEPBnYehr7dHjgUbdeELWsmt6zbXE7xrdh82",
  "key24": "u5HtGXMHCgvovjwJsikDRnZpu55DgQmYRn97vCZDUmEJcgVoZT4eGsXcBPSEiMPUB9bWbVMX3UMbBwtamBYtUXi",
  "key25": "55ZSeUoVgYSeSoeu9ss24aKhPbuo8LxDaxJR4vCTP3w8vypE1wRDdfBVC7vSm5RYnnsHNaQ1C5gSkJ5HapcQUrpx",
  "key26": "4gGtgh3Mdecd42kAqcbR4PDfgAMs7TY2Dr3mkKzf8X9EVkMRzUU8DgbU6fKHpbdFfBdZ3fpbbaW9rTviSFqF3cDY",
  "key27": "4BUeVqV3M7PvkKnnUgGzBZUaxfZcyKMYkxm3LUQjGi45o1YdJMMC1ZbBJcb6h1dEtgMUqN3iC6YDBRXycyoso6gW",
  "key28": "5QtnzWHQWHr9zTKMbxGM2Mq4eQWuWk7nX9BZ4kLyhje63JArCRToyUdj97vm5Aua9o1FK5puGF2hydHMR2pDQN2f",
  "key29": "4u7tVc52U9CwgdHAT534DJtLfH1Vatj3KFWhXL7b76jTW7fWVaS6Z3CmG8yek8QFor6SajjWMntbUkBUWB6detmo",
  "key30": "gPQ3HpJmgYrwXi35CQwXWPWNQR3Xg4ZDWVpBRwbxkA4weRNu2h1eFgCKHymEJpQobLS82KU6xAX6s4vjnRcN1SM",
  "key31": "3hniQXpE3rBRQfCgMZ2fHcvFVXi9QLfHTLSjndRg1Sj5ffxdvVMZXa1kwzQNEKzmmwM4kSKg72cxJqNcaeVLECXa",
  "key32": "4ph411uK1SNg7Mre788cnMZwsZnwkNj36hp9Gms1BBWbpxokdX1osovgQKjM5Qgzy8L3NEVRyQqDD1hdLAm7uEvo",
  "key33": "55XMZnkRLGzpRFJmuu988ypAbPobmtPdWvisNMA3exjGMS642XUjF9pE7Q7bJgTY5Gq1fGuLeVeWk2GztArKgzji",
  "key34": "2VrpGcUJCwFEB89Vm8hJ3JRgguDQoqZvpBGd7t2PJDQvNsTYnoFWji9UhVQrGo3dMGBkqPurPBbKS7FqR87XFzM4",
  "key35": "3QjQ6XeHqGW4h83ndvcVrrNmH7drfCbW6TcytkYbzCncbPtzkBo62Cgmu669dPn5vwKwLXwPjLrrP2dzX9yJmSce",
  "key36": "2tvjU6XptxSd1GUj75bNweVe3zMTaq7CcUaP5QtdXPTFZG6uoqzjFbk9XiAW5NsxsGvyaPLKyP5ke6g26eydtknq",
  "key37": "wLJVVG58uL8BS9fKRGQCm2kRyT9gs4PcLSU3kuChYdwCMV7itTuYBjwsVsFwJ6d6MqXheivosw8vHqJDzdvCSVE",
  "key38": "bUrkP91UMcXZtgLd3yBpAf6zncQgpwQquhmath38XuwNTDPzVx5g2P6Y1NQW2PYVxFEzZCsvhc6xoWXsDmy9XDQ",
  "key39": "3nCyAxctZHiax8rEZ1ub61sJcrSxYn9TqpL8o9bC9tfGedpmezQ9EkfY4fXxoMfUxar3qnLf4hTh3Y6E5VQCcdNL",
  "key40": "2fAiTpmsxcA19dGkYsdpyvE8fVDoJENg5jx5KxV3bkLsAxprWpDj9qnvm9RQN6xaJHZPmCapHUeejCy1Aq2VG3Qh",
  "key41": "yXojfh4xSYjBD8EUGumX4DA8jEygLseCitMLia4eGbCgGeyrJsg2zW7kh9dUrCEHXAY6mSBwCoExrgjFPpaRG5f",
  "key42": "5bGfSuG6d7jxH46FsBT8yh7JTuizBpYVEghU7gH8ZrK1itEBD9YMvTwBeFT5r9Bo8j4XmFvr4Uw2xtGmMVWkphxU",
  "key43": "3Lx8RtMgj27HRV8dhWVzdiqvHuJXtx4gZjmXxYjvCoi2MxGmv9g4e2z56wdtXhjcUvzGN8AAdFyvsut6JSf7qc2d",
  "key44": "5zNxf9QJg296Mu1hLKLoHYdE4HRyDXQffjHea14Arug8zeuozhYABDnmChEnM7sXGQcu44iYLVotSttUrtjGujVZ",
  "key45": "5ai7mG4iv5PoqwgeuR65X9VRLsKXvEzPH6os41Udsx8LELRJJAMfxcWTwssQtjFPeBTBmB6tT5ZJwP7uvV2679u7",
  "key46": "5SHZv7dRkrPyaxCVuLVxBG29PRAk1FRD4SF88HtBtTehLiCXXxuWfLzjABXAGRxaPkvvxzRQcfLqqGeBiZyfxJVG",
  "key47": "2qLs73wE5En1nYkLsuQzTxkwNQ46oRMZVgUrh585mKb3xqU2KKsRxLa7YVDZAqqHvFsKM26jBz1zemc2g5K8NQw6"
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
