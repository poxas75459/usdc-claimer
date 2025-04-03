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
    "5xR5d8sQ9uoDXPht69gRYAgEAEd8Nz4FH3wK3JDKiMpQbzE1wuennpr5cCKouknapLMErpQNnq4LgdQ8PPKLyMHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iY7khCeqxqZC1TjgBtg7J6DNctswSLmbRgYhRpKS8QcqqU1mbdSWECkazyMcDUYaXRfCHpmdPMc1K7a42L9yvEJ",
  "key1": "4zA5eLXRB487QRCjGZ89GKSDAR6ZhCZ6uEUa6BGQ998j8GFe94KurCz8UcLwRUVjYB2CF68nWHP26jQZtoU3qRyD",
  "key2": "4Hm8AmduWxxgNwpeVDwqxJGyuQAqYbqjBfpPscN2hYAVf7B5tHebuT2NcrVyEcLAaSgj9tgtLSumkGUBKgV2LvKi",
  "key3": "4bUbadBkCpbhY8UKExxa9YpS7KDGC9Cs9oLWpDcC7F4bLnWdXjE96h2XZYTwmEUkV3wNu1UHqyYtAoHzgabwpUSS",
  "key4": "4rFCZ9TAGaxPty8SaZ5u7PyAbZBhQWgqJrRCAkdweLhswK9TdpuC1kAWvJu7rXwEmHRFaXRB28NSHsaAheoQo7eL",
  "key5": "5ZPZFZoQXXd3ufG9mTZNS8jhfqpX5Tw1pCAtuYWr6giU9M8eR1pwmuZfMPhtp8sMoJetRPUA7f3GP28h4T51akzt",
  "key6": "4n7JfUpB24UqfyFwiZ73MbGgYY3Lwh5TMjC1YSoHbYPPbpZpTnwor7hREnrsBdzmYFiMHCsWrRTVUaHxbng3bXkZ",
  "key7": "nrWoyqEh3oLDLuksRZQfy6eBnFsjH8cRAt8kgordxXWh3DdSHPaGjEXX7gYRwpuuiz2oxRzEkHYvnzY4Xjdy2NY",
  "key8": "5XcyYZh1xycDN5JJtgJ5rKGY4wmDhbvvHX6gB72FJoYo29bP4wxg3z2YUe53fghwCjaqVP6tUZBUUfnuxJayJmcq",
  "key9": "ugFqCTxDLmZuHKaTPbEHhmHuPsYtUbYhofUHPi6mbUBPzJbZu1phgPESLxoeqPW5LCKvXUpdrKkHTFAuF65qwrX",
  "key10": "5kgwjqJBs3ryU4KgQVeUYH1aSjsRP9pkrCnZqvhcoMfaHbWW8XwibKgbat654YvYoWs21ejggv6Jg85zMnvAm5cV",
  "key11": "2iTep72c1fbPSg1Ud7Ljh1aabowozD7FjA4UGVdA3nTg77NcKh77jYtuqUcQ1b1Gi3i5RL1MXFpZ3Pdj9VGMRCLV",
  "key12": "XPemXB7KsN7Gz7RA6QyvLktaLpf37ErwPektWNyzmv65Pu9gyzNCEVZ94RJRQjofKJZTMY9i9ntBErNpvkQLJdL",
  "key13": "5bEQ4BhBJb3cBxDJEDUBhspk2U9DN29HcQVcUpKmme1dMVUPjVs5jHo18Jxm2dyY7ADvP6LC1vwgcCZXNLNgiqhM",
  "key14": "XKd1pNUibp1gsrbwQ3xLUz1gKCDixxAB829pnnnwSUAVJH9wV1wzYwRP2egtYZuJZF5ibww4WmUC47SCUTAes7J",
  "key15": "5TTaEE2oZBReFM9KuLXumNHsrDrdhKghVbYC4QbiBz8aXmJ8ag4RXUXQbcCSghSaCrYBTR5NPMrmYPUH4Y3EpWLm",
  "key16": "22PkgpNuzSxUAPEdaiNgVnmbYZk8rkuNGfTKUVhhBxeEgYPKVbhQsM2yTWoiLXvLCYo8zLN9bMovpBMytwQ1U4F9",
  "key17": "iy8nBWY26MjCpxHWqTsVvwsCKHGMzGGPxde6NJVFsPDQ4rbnHakzNm3RF2ghryShE5NKDPEbjPRr31WkJzj34Tc",
  "key18": "3oaBAojQ9Gi7y2pgx4jb1rAawHar4Awr5NViP8SzwRaGNWVuh66Jbd1cmnxYkkUF6WRKur4SU6u1MZoXU9nuRgTx",
  "key19": "5Ta96KqQrCJZ6v36JWAGJUd8yrk8TMyR4vXbAXnSXunaE4WPxWLYvx3oz893jfY6XNFfutbWsHKQYkXPD2ZoMbKX",
  "key20": "4DhCD1nrnuwMrA6ApxFXLrebs255oCahFFPvB7UhABMrMcJS8xQLMuUvDA6sj8vxPRbzrAf9jqRCwwCthEiuY5Zw",
  "key21": "3hwj4U4Pvbv6JUWNUDfvjoEd3NnMSAD98E5XFPgRj8ye752T3PPBY7dL8yrzCRZ4b5NgaQYiWKN1iCxwMviWSmRg",
  "key22": "2P7XpeuW7XnkuH3kMKa8MEXxaAy124jDVmJRxpiap2tJ2qsUy1G6Py7eDcJ81qoakL7iSpdeEFQLNkoppiuoB1fv",
  "key23": "5TsJbx9HSkN6KAubjtdEgahH74kaiJd8vebK1H3vCx2XmpiFNqackdN36x2U1Kv2gkZE8WE7eE2zQWscAM1agTHp",
  "key24": "1P3eTJYzkrubWbCKCpac19v9v4PoMBp18pvGxYMxb5vq3n3Y1cq84KY1bQjQX1a4nD97LHetbU5DQwvv8AG9AWg",
  "key25": "2BJVNpRGzyghqKD2NJcMVGKzD51Wjc83sbSrwTgcE59Bs6sYddBTTxipUEiXZcb3REVvkzbr4GejKYghMmPCZiaD",
  "key26": "2XraiJBGVHkktQ4BEXbT4Tfmxngh3mwDGbjkZTraQpJ9XEQtc7R1nHXSxo3w2XEnPvQQT1UZebbuvYGHVUaCPmkS",
  "key27": "4YA8YQyrvaDgPtGdfoDoWCiu3p6aRsj1fSkk1gQBy6W9CVKiFHirb7JyBmF3HTfia7uGpqg9FEgn72ncxjeeRUhy",
  "key28": "3mf5Ru222o5YKqJf85VZdp7NRUVA79xcXeGqawVwswfCViA1ETvNFS81t5xcc9RzjDaLLbULhVPLqEPUimF1VMKq",
  "key29": "4nx7qUj6AhbbEoYyiV99JZR4D2qyUAR4gdjSjo3PAftJqbHaSaGTdkzTPkpxAimp2ey9yADtwem2jEMtgoJMz4YV",
  "key30": "2d6VXxSZrniBkCizzJm9Xa9vKQbsXsb5kJUY8bXbXu5Jt6N3FJUe2fadV2CsJgtB7abQdmHS5YskpbFr8ihET7kM",
  "key31": "4MVeppQnGAX22yVNWQi8aPVd2ggELnsGBpQTr4kszAVnq76x3tmZmVV9ZFBNFgENiwiBgqppEwBMpsJBx2CkjzAK",
  "key32": "gH4Ava8dheSoZsAdnDqpcTpKE3o1ZkrfuKzx9XEMQQxK5jjTJm9QUCXjsgBaUVokH3e6KBwSDjEeThNx3iiQHsi",
  "key33": "4mtTHVnfRvgQvtF1ZhtifHkVsrxukHbsJECDCWn15bUSKW9x2FLuWJGfFnFvEUy3Rfqp5ysBLezC49y7yQTNxmct",
  "key34": "4FjnKJuRhMHiETTq6Z2UAq9dWA7h3jB9GyRsFRZ9mRStmPa6hFxm7SewgwbVw1iMq71TD5i2EsPVZ251dHbD4RFx",
  "key35": "5EKwrQaQ69ZUYxGYjM254Rqz6i1H3qpt5pUcc8L93ShPPfvLce3y5AgLnaFzvwvrozeHPUZC3Mh4VAxZegKewpxD",
  "key36": "5FD9SEhZi9XWUtWtM8EvvYhi45UPuMfJstKn9VpbVDwy4YWvMrjDm4ojHXsxcmq6UVbqfGGnhrE7gdwJdSKBPzf1",
  "key37": "2vAHBeD6qb8LQEvCAArtGTN5zxzrha768YakXeoEBGoiZ2pHFpemZNdZfvdZXhJFLNMeB1A1DeXoNvkwg8QhY7jZ",
  "key38": "4oo2ymYvo2QFRkm44xXFhxFLbVS3HeA5kj7V4E4d56ecBTJtbyGFm3UkjF1ZYq8v47Dd8DWfBNAqa4eVX4QGA4ea",
  "key39": "uc72CvK9fq96XDmtH2fjRtskgesSk2uiUHnXtfPUJXxRBxnDjyxSGSFD5w6d7Dvfu7nzpLf3go159KWdGoHgDG6",
  "key40": "45zkcx4xhjgWprosXEraW1v35a2iwhtGAnumZq6TJarMELhipoUb4xrVeRHQLz6o7HDZcZmpgzBb7bjBt6HtoG5z",
  "key41": "fBy7v6LXQjFxzU1f2MCG6swfdzfE4R3jfuUUYpgvpnywnrdCuUgbi7vytbbgcRBDj1UUxV88VTEL3h3SuAMwdtC",
  "key42": "39f51E4XG6P5TLQAMQe8hELWry6ME3BDRfRwpipnVDKHEmww1EN2Kp5GgK8pZg4eSFHj6UMuQ8eRCXPWkXoPXFdk",
  "key43": "3WNBh9V8kB6g3ZCeKtcgHW3Vy9cz191hHkiQV71yqteFxUGAWFCs4kiYFg9ZwfCqxD33hB5LBtLsG2PdcuCHw4tD",
  "key44": "ht9nj72KZRwgqB4M9bmBC7F3seQpeXZK8Sp9bif9qF9tByn1EsaQv4Sz6RdjC4EKYNZsV78JceiYV6AMBUzpQBi",
  "key45": "56ZKR4AQRUhjGi9CBR4zFiDfeqsyYjtKMhBGu5oNwx5EA8M86BAVPvaXZNzPiZEuK6e2XaYfC6aLhxcJyNWkP26C",
  "key46": "35a4cnQv1kSwvkwrdqzXhAo2pnt6qt2mVkJHm5DPSneWpvpWpr6mgP7vmniRmQcVNUU52p4eXa6YJ7wwU8PzztjA",
  "key47": "3jL97J14scDXZZzVfgzgzF6Cv6LJa8EekD5yAuP8Ww869oTofw6N7Vbd2wn4faubChRQeGmt3q89pUMh8mhjpJT1",
  "key48": "5P5XMExbeuHq4gQWRooN5WxeoBYwjmEFpeEjG1PxXryZxTn2f9CfH4PFA2kHArRrjzQpzek8UzpBTZVaUMGEZjub"
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
