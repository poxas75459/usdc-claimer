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
    "5grZ3f9QpF7CDJPPbHond8rv1atdrtdS8iFshr7Yxg31UbLvxuGfKuDr85fFFf4KfbNZBoCJjAp6JdTFToS9qTnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2avQHNkUD7Xm9DgoJbgNKCb2gYxyo54E6N1BHZCJKGVEvqBnAFzY8mBVWy9WBVrcj3e2nHtpNKL94WJvERH3Qcy9",
  "key1": "iLpUxKV6g8E9he8dCYXpvR1ZWyeSaJyQTriSgiUrCvL7ywggb5MTpVrzLjuKV6xiAFCby3PpnrSvwBbQsmusoRk",
  "key2": "3AP6mcvXwH64vcjJTbwSrfd639RqYDjmFY5M1GoeWaMhaL5L9Ha39vAojgds6Ant9ruM3W7TkWwbXh2cpYXmSXDo",
  "key3": "2GwRdptfeCvvoXCXS6yNk3AVFLZuD9goRw2ajoBexKK6yobr74URLaUv2PCkciVUFnTwnk6EDCHA2TENi84ZqFVh",
  "key4": "3fE49X2H9jo92MwRpgRcTwXWABA3oQ7GdCv2L279WjSCnjoJzEhJJ73NqvnRPPFp1veBkPQ7jj5URCLHdNPLAB4y",
  "key5": "5dJpP4Ug3zPTjqJi5zpDtLqYHWtoBRmXV3PCCkUAL9Yvhw5gmTzqNAP7uuPzfUAK43ETPeM9FETAxHbyYyjQNUYq",
  "key6": "jQwB5dnKX1AFtympeG84LXRZt3BQUjHS5x9NwjLVakXvgFhjFMUyGx4tTF1xEf9DJjA4TXEaXuv43H8q9Wzx5Lf",
  "key7": "2Mruus86bTFVxpiWAqN8Nmt3wqTJaTEPaeTzjt1JaAyYQXcJRahqzQCKHA77ySXeMAJxZAL44Yq6p41soBmb2JwZ",
  "key8": "4LUy8KcJ9vFusJ9BZs1zRd8K9srxPETHdorP4G4XG5d2bgJp47DgsVRZxJSQ8PSKfQB1niLbjCUnHrp7e5mVvXDa",
  "key9": "73RjLcxbP4t5EgqC3ftdTp6pMzEMW6fneGzGBevfd1wS6LiifxS87wqcoH3kYw821tHFMniQU26FjNopkiJ8E3h",
  "key10": "Q8YKqcc6DZHE4WFjbEfDgKXdakih4VTpXinqdu3JWS6DCqPAiDLidz88YScuhdoLBgStbxkJ7JEqQ5qD9AYDCG2",
  "key11": "5SX4F5iFtEPVjSPru2huNonvstiuVHjCAaoSm7od9Cq6nThHACzh3CxwNzBUPevwFK8umYuYztS617qG8sVjVbUt",
  "key12": "3FwLHhNcGRizgyQSN4wEkoTU7eR168D34E4z8sYigrAzJm4SWL3xbvYfZZP3FmvjtrCd1iTNYWMGnvE4A44fH96h",
  "key13": "531GutycmgmfxtPZA4kjDSwMPUCZqnu1k3fMoxCrmeSfG766ajr2VeGJ29t898Z1Can8313jJWinmhqjhwtSJFLL",
  "key14": "2h2XxPGjTX13Fej2mXUsjTHs8wrAuVgNT7K22QpLQv1ngDQvGytoStDF9nuYbzdXpc4fK6aVAyzB9uUJMEwv8qEw",
  "key15": "EgmjhUJU3AojMBZrxAeyxJ34kcV3DaMBqGi4uxKri9ce8hHCVGAVoRKG2WtS3ebmHZjsnGteumbD2KNHynkLybu",
  "key16": "PZj2zaT5QqSKBRuvZLA2GeRXUVLeZ8wuN2iA9FjN57gzbRhzPaDLuy5LFaGpiW94Tc44xJLxxX7iSCAxAzwz8Lt",
  "key17": "4u4VFCgmYJRVkkFHtmaLwfonAdwycFj21rkh9mvcpt5JCbygAV9f3Ar3FnMt3Ams4g9resMZSLoCphZXECp1wEz3",
  "key18": "5KResHhLNxf3sFGnvjcoxDDp5XvZo4s564i7ZugAbV6W2QBKdeL8QFN5NHsVS9519Kikh4bNRsDYBrztUJuLnnQA",
  "key19": "2q9PxtG482Nxqw3nmpbQL7HPsGMSXh8Qy9Y53qkgPpcj5Qm7jJdyZGsVSc63gZwYrB9x6CBHefwydaqRBZuYit7M",
  "key20": "61WRfrRUghQv1xnk2rBv7pgFGQE1VwJpDeicKB2JwcNmYApsL6RSAbpb5ZQx7NSLFqtdu6z8MaEq2JZtbzvjS1Km",
  "key21": "PY72wAZPZYjf2iGe9m76N4CXsUa6oQFvaEC1LVf5TftgBbccpdKK5uUsJYz1KMdBKYQpQ45TWxq7h5GN2gnwrST",
  "key22": "2rV9RK6jyyeiNMukkpyBGgqP3hpS2k6Hr8rMCRtjgzGwBB8GPcQrqZ6QuPzND5dijc3pfXGMXZfBpBYG8pUw9u18",
  "key23": "24feyALqUej6JrobCz6FdjC1g4dd26r9BKXP1siTBxMxk3ZywqQ9Ro289esycaCd3dhaYimeENNaC1xYs7hyjdvQ",
  "key24": "3DVkDph9GGNZhDoQ7qDQsbxo5tPXjPHkiv6rJ1Vsofe9HRAX5Ke84Cyy8jEFBhffNpuMxyKjHBEpkCnSEaqdn4HD",
  "key25": "gbvW2jokr5uKnh9PgHqfAuzUkMa71iwRyjdq47txUNYawqB2qKQ5PiZvgY8inP7HSJ9XRwjtHhKN8z8c6Nik5At",
  "key26": "2ySY3yE7LDJAkvYxAGr27qj1PtmPv7pRhspCK94atwoDnxUpZXgAiUERAugnMXmT8wo5L57oUpwRjHw2Kcoti5t8",
  "key27": "2FkS7Z74U2i4Xse3cDQRKoKqTAXf2PxwkoT3WDjx8LBSUDjKH4zHrBP91dAsjVS6gy3bbjSGfDdTGHwcfzeLiHgB",
  "key28": "5R757fNpJ1JYtDZ48sCY6X8grf88spjojju7bKVKa7CBVuW182LvnTYFFq86iyCuE72LEQ2BnF9BFnhPGRwtcyCM",
  "key29": "2mAoYsaXj95mizR9C5pHrCef1zeTtCVqWEGNnuipjQ9pY6XEemVZqba7PAQ3yfi5LGUWwVVA5UxXzYSPJz8XiChv",
  "key30": "63a9nsGgMAvdpCes7M73kdQYqFL8QLRKRjEmKfyx6E2DLuvTWHKQkT41jsm2EbZ1RSVwUh9wtAgqKWzRyBg6HyBB",
  "key31": "3BuShTQhvR6xX7DM6QgvnVaAbMaXQKq2umsEkCyhuYZQRkvaKmMKxXJayb48poAs8veBWW1r6Kmy6tD3HbEYSkMd",
  "key32": "5bP3cCHJKECx2yShWArnuvvVeLjc2UyKeRZorhxMR2y71BSn1y2GY2jdCodbb3UFupbzUvijmp8Y9newb1FjJtmM",
  "key33": "2GGvdmq8HGDsNkiRemNym2xuyeVeZXx7nnKittehtWKt2Mg1pfHSjDCdUcT81UzoZcHmHkKotsAHuNxyikSDSPS7",
  "key34": "5DgDoqeZZAVKf9Df7ucACPompA5itWV6wFBxCyPsD5tq8XSpt9J7xjbaCtEJFjKthBm9Snn43whnoPJw13g7rPWv",
  "key35": "UMCXuCsTuXXtRprsGTw7xP3k6fZT533eFK2wF52z7YjDWrspAzazCoCUn7ag7oFuZfDCpFK9cvB7KSLnvenL6gk",
  "key36": "4Fbutrg8YWM4RrCedqw4EtVpTsXWFJ5EuFmVRE8jA6iLV4KPp5GfZw2KjmKB7DDeAg3E48cPpbuK1jdunoX27VqD",
  "key37": "4Evsm64akKb54iCg1LiSmX12c7yCaaRVbR43dUn4P4fPKouEMH8GEU24PpTN5DhQz9Sr7yogM3UgsKDYUhGgi833",
  "key38": "2vDNkUAuWixyTvtrAJWiGgGKLvgnpeaJeVH7FfJ8ZyzKC1nYxrXWmcVLGqustuM4eRvbi7runswMZLq1VgPtmeEy"
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
