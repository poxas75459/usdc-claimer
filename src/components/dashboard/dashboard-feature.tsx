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
    "5JVUfM6Hgufo1eJXeyMoFegLpWJmvDTCHqA1zgyY2zMUeUwDA3pcpL2rM5W4iULR2EdYeWG1ZdyhefCZEC6DctW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jrrTd2YNesuht9f5m4LCfydhKa6GxqNxRnQHkJTGpxdKs8P9xC7xk5mbxdvaXYjJKZseAJ4Czn4zcFYH2fKaiyb",
  "key1": "3fRcAnhVTHxqJTSCSFGvRyQAcSfPa4B7GettSEfaWknSPiQ3AMkkexJzvWzavVye2rDe1uzTKtsN6pBGevwYaH9X",
  "key2": "3S5fFeP8sJVZE6Vy1LZZn3bjHc18St4RooJzX129QPhCpmi77aEZ2AUWt1EJBziReozZgNRh3Rnus1YzihQzkQRD",
  "key3": "3oS4B6bCEvE96RBSd2Tmwv5hhU8VxHSBnBAYDCTnSKeRWFdfTBbn9xeresE7yuuHSh65y1paH1rQi1pUF7K3m7MT",
  "key4": "3hiqUTwT2Dk8eznvNRH4QSnjyPRfL3k4P2HoJCFBbkuf7KqrU8xDxPZ9GuwSuXrAV9nnTgtFeK5Hu2LY2shqg6L2",
  "key5": "2X54P7K4w23NoeykeCsKU4V1RcYpTSLyGigUPrKp3wfekJm4LxkSt2eXSpbfjVha1sHvA2MtVMcCZ4jo3JY4h6Xg",
  "key6": "2VTMQzwsLvNyCSQP8uMfLp6Ujh7ZCAM8uGBbWHNF8VJU2q43vyLqg7ohckRJagduajPhMT4MUAzFAAiYjqyWaDYN",
  "key7": "5nMyhJZWPgz7ZvMrWonVQiKS8pn15DLW5D63SeJKN13RvYJekbdB2YHkE79Nr6Sk5KGbxQdseZrTicYzXQiYZeqb",
  "key8": "2jgX3NHrq8cpAnhVR1EL3gHnYuCWDDCYzX7gwoLZpSQauxz4UL9nAu6HhbYUuGMxKKswYCfFiSMGAuBoZwjzSzF7",
  "key9": "5CWZDxr1kK7ZuiwhT27JVUEFNsMsYj8JPk68EiUyHwxFbGpXdk2JDD8eGUCxXCpRVLPN3oF4CabJLHXbjcEuMRez",
  "key10": "2UNjoAtG1qSdp6HG8XfbsEME1wkMov7njsNfUXfzRTLMcjonhHZ4CvQSPyMsxhcL4MhaJwTZZdk675PV3ewGVQWY",
  "key11": "25hBz7zomb1g8bGBwQaZLAGjHjLwtc7T8ByvBjUVnn2Xe7rNcLgV2xnjPSzA1WGE2bEEK4wdtYUniZwuhkLAx7xL",
  "key12": "6QWiFZQdA9G4KCZCPSVSbW4wYFWqwsH3ce5vLaE1TzfrDVBiTLrMCpqrgBqrnBmQQtTPf5uKFhwVHJsNqZ3yPde",
  "key13": "2ZQzQgfDMEFNJovsXzKPh9HbdYRjvzXKYRbfMBw1QqWWhGbRH1qhbJSVJXVp3zb2U7sTdpFBBxSv55oT1v4vMAPY",
  "key14": "2mw6t9YdK2tfDQ7JcUEty6GcQPPSKwZ1joEBe9KHXLLfYGUTWzPW9XKx8xXYUXmcbdqjMHAMniLVfeJHcAFauMBS",
  "key15": "4v6A5js6G5giuxKN3SjNMZhYAk4mvkauUVJdVKXXanL6VuYa22cALc3P14GkoPRw8HPbg4PgYMtqHEbGNE9FHpWY",
  "key16": "4NfzfiGbcw7S23e7rUy3dRpBK33RuPB16vit5fgE1ZnNccuwQjDBs1Ekid2QjsC3xywhYeJjrfL1Mox5drVYES5u",
  "key17": "4HbXvhwawHeJfQQ8wL3xRHXJUwfpJ172yj72ADZTvtNaHR2Mgu7PWGxMRCPc65CM6jbufJJSToLHwgcokGHcu2mU",
  "key18": "26iYQ29Lso1w2jWTjAfdY7hcGnnaK8gNFkeTH9gSAnLtw7hmyKwErKegQJLy4cCqTorEkGTCTe8pRz2yw6eiFmuX",
  "key19": "MAsd5HEbNyzq4MBAaH1uEnm4Cj3FTUH28DoPdELqd7d1kuuU72z3Zh56cQhW9odWTrVup3ee87GivSPjGCADWMZ",
  "key20": "3mKhyRXMbxwLQj2ivJx6H8aaytaUDt64p6ZyH7v37HEwpS5WqPYJ5MkuhL197Yekj1wfYn1yT5WbEm6AhS99p7bo",
  "key21": "z8qmHB7w6dvubRcBy9KRhStXuzw6DbfAzVJ73BME8J1TaEBjaGgVNVk3Zjcm7DSefEJVDEoYUns7xNxkMTDqwrq",
  "key22": "4CcQoJsgjAB9yqHiBFYrLgiRe6E6wn8J11ksGZAxYUwzqPbN1X7kCD8fqQwRo1uhLZfihYDq9HtXjgM2vepkofoX",
  "key23": "s8N9Eaf1gYDpZcX29c79HXDKZ9LURCAjMmdUGMLiLnbcomyjhWmHgzjgVk9F8KHY3Bqa9zh5KdZkSWQhKY7kLDR",
  "key24": "3PpiaBHjqLqNKANirEis2xiF5qoWmnxZ8gyevLiecRbKExjmcGZF171yCRQWAtJqH8nz64c9ahN5T8eKNcqNNsos",
  "key25": "33pHh69Rs1gfFToe1MYtihLNeVja3Nu6QnXAFuzVvWnhFRDBqLcPrCQ3ex9RQuZqhNqY9sgRcci4i8k1tdGsLbNo",
  "key26": "457wWqdw1gPhsBTnq5goUKJfcUk7FqifcViwzGMVDKx2c13faVczbVH7iK984UWy1Q1pnfcJA3UTF4wzi7AYzXvc",
  "key27": "2dgWzb2ZMNVebS6NmYU8uRLJG5Nw93FcS796TPXB4MTSviz5U1n8KN869h5d1buiJbtz4eSD96RoqneJ81dwtjA2",
  "key28": "5WaH2rQtSDi4P3oRqqLfhT88SVzUZcRCcSHErV3FJgHC847FbDD8mdmb5oT46QPKHZJzKNVZLxNH6xPc1uxbuQGP",
  "key29": "h8AMREQirfeCpfBLqbUDN4NDHi7J7xy1fqAPi15gAGXwGTyMZP6ACvWp3RjZWZhTeDZy8GBYjeDgeaZVz8iAGGW",
  "key30": "4uz7jGBaBNZ7dJj4g8PZwgRNbCGsCKMoKmMmYtJC3WFVaEQJ2TertCu17pZCaThADBfpj4pjGoCvzJPZooxPV9UQ",
  "key31": "5xpKfagZ33qw8f75WK8CwfC1a288uhUEWxQjDijR3bfW1nCQGfbfMPn9pZ8SJWWRd64YBaXgxFMGhpeAF35LyMi4",
  "key32": "4eJNaGEk9owidYn5kgKxfKhcPgR87s1Hu6FSW8VdYqAQNphpMVmVgiSRnTyQ2YBQzPyyFuueGoxHEpVTCVTGUsZq",
  "key33": "4BDCwzCYRepiVwo6uo79i41NMmzkMQyDT6MurvgNPjQ62DUSACBye4k6kzsUK8vaNjbosBXiHFSBuTZ2wEhxEWxw",
  "key34": "5DiBge7uzNfBqGP2kiWM8fRxbpEobM6ZZNKoCxuedvA5T8FDMGtDgCPSZXziWk7rKEF1RNLtBRS2bkr1onRKnS3D",
  "key35": "31SG31rpHmZDDzgqzLFf2799s3fwMgcP98texTCcjcbquAmnBqpcU2C2ZpbjZkcy2pMdbx6dKrEmHdpJenNPy69W",
  "key36": "62fEBubzpfX7td7iR2vS3Q2SQdcvtTGt5cjH3Rak3LFQn5a289gzciqcs38tu66pwBQEHLCNvsVAdwqpquFTRvZh",
  "key37": "4F7RY1LV6nwnJ6HP7Cz8am3e9wDwu6LAa6KbVoGfvtgtD1xRR64p5xyfPpha7Am3vNd2xefTaCWgPvnora1bTWVH",
  "key38": "56TP1pg7vQ6yi9EGjk8LGU43JayPfu1webEmTcaxa9iqquFP3P862PVd2vMhSA8Epas2sqywVjy3QhZxafVRWt6o",
  "key39": "37GW6QVZrP5ThQCq1piF4aoKJs1Yboe2GMAJ75vfyLRqZ7GvgwLoqjeyGoyXxtSmtrRTg8CVaTxMHmwezirfdGgJ",
  "key40": "4A4qTfv9yBLr22wr445AsNDavvrvUcmNncbfjmvS496jQRXe7y4ziZxxdkLVgqQBk34oi6JKj1gW3V6UEZdDcBq2",
  "key41": "i3vcsWCL9DLmyobE2REoZBtov3ra7wBnykQzf13Z9xLMWJPHJjstDetsdYdhrDczC5RDSyYQGnXCj7LasRW6udX",
  "key42": "25T6xAgjF1Lv68cThrSK1QTUALNTNP9onDPN88RF52psvpyS3VW6YHGiFwBpbdpcdL6XsjuK1pwSSi98vepjHZvY",
  "key43": "434V7ZuhJhW8Mp5EJRYopBBg1FDt8xeUJfryQaXjYYdCcnddks8sgZpdxTngqaKL9GqfjWyc7AyURTRXngjPmWfB",
  "key44": "3TuAGGEc94wwwriQ8dsLHPA5dFipjZz4jQLrfT3rxhvPYLHi2M2q6zzDWyToh1vJ5kuJje3Gcr7gWYVnvtRbAHfk",
  "key45": "4DJAGRTYpY1su94zkpNaCZBHs7bvvYoWYyJ5zdQWcZpzGBqdtLzxdSZxnHFnt8T94fELadNkuJoR3PQcW442HEpC",
  "key46": "49g6QvEUVyKjU92N1DCqsrkHeGcKztY4Y6EKLHSuxqRXaSp1StrNcGLfXHcBUfELZyzRTnXuLvjp9831BrcKgxXU",
  "key47": "2qPn9SvuyE1KhXsxuGiPxeeTh1t9mo2tTd2zjb8BFnUcqSPkfNCSK7xvTiVeLxKYeLaXZ3y7pvuks4HZH9yiZSrW",
  "key48": "44xe1Aq8X8yFgzSMDUgfDtBqC4xaB2M2Xpe2CpUA8ZDcLMAHs1YnYfyEoC1NsdVN6eqcMhRsbSKzxpU2DaJdCA2u"
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
