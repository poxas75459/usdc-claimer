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
    "4aBFjengkZuTCKyhaK2u5kL2dwDWEMBXujsXydsR2mQmEYmWWsqrX9hTCu8VdagiyLLJLp9NFvGkQSwR9xTYxhYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PgLTZFmpihomjLYBBt1YXvGfG1juDeGvfQW4wqjbCPx2K66jphZunE6fogEouV79E42P1aimymfb4rYpNKrMgdt",
  "key1": "5HkL1wjGUvBkgw4JRgJtRqs53QtvBtqecnQLAczNsnRNSzY4JaEXWikU9J5Sa55Yq4uLRVh55GHqbWNsKJC7wiJQ",
  "key2": "2jdskkhVUnh2qucu7eGPREPPFHsfjzuX39pbJSKHcngbRaEPy1TDiimHKtPRmFQ468AiuYwQtnDdQytBByBnirgN",
  "key3": "5dBhPho2hWTekbT5fAepoiT911SefvRSK5gTVDeqnMy1CYTkH6xP9xK1Rf9F9M2EaET5infgWLubk9kxb55s8RJv",
  "key4": "2uzUsBEGAxLki4PDpPhW45NrE1mzqqJpPCyAXqEFjFuxWyQXcJWxgixykgnPWezNN61Lu4KCryLQwi2dfGpZocHJ",
  "key5": "4P9b26yDiBR4tzPJcca29uECRS8NLkvWke1muRZC6zhuxKjMhezCM856suyFjBBURcuktdd2PrKFzcpBiuYY2b8",
  "key6": "5bTKbE8KyEAJQE61wE8rfbppSMkndsmWx1zcp48iKmxR5SPRrAuHEBMsFzkCTfDgoGitboqdzdSbhP4vHz8zNpJv",
  "key7": "3ARPskHAUDQZ5CHjRsXgyqfF948ACKr5uaQBaB3rJk83TZaV8D63Uw7pSJgftbkZAFe3mzJAbiTemPXL9B9bhjx8",
  "key8": "3QTmVNB46JDTwTcoWdRGJ6VYoXGNUjuqbmREShCUhv35FfLT5x8Q8McfLo52EDayvuj5Jacx65csMZfWaJidqQpn",
  "key9": "5eycZ6dg6Udk9ydU57y1QJ1rq4mG4Kmr1xoswXL8Ke6WCDBRFvbdokidijoz7cnNXwd6yKUitJn5JMWZVd7GSFmb",
  "key10": "4XRM16PeHFfAm9723TK32ghnbGmp3QtK8bVGjzV3upFppnmbT7y9URjK1kCSLquW3Vc6aa64K1wRe8rV9GS2MKqH",
  "key11": "3kdCwLno1dzX2CySzAn1chV2sra8DSXFZYs3VAyjJpgXMTEeKqECWYFCS6Brfn5zBnj1EA94V7dFfRuG5EHNkBA7",
  "key12": "2Jc8EiBSajs873nNJcEaq1W1MphHSnSeMaHyBaAbT4r59Lk24sa9nDvnSTLWQcpCPmnzzosdksyojCvjL5byD9Bp",
  "key13": "3k5BDwxWYyhX3YvJWw2PtTs3LkyKc9jTr4BVqxH9XNVS4PaFQZQLvMweXKDoqdYrc2ze7ubUwBCemXySA8bS38q3",
  "key14": "68vjwacCHMfzmxBS3ad95CseAqjSXkX4uzvKQ1ZX31Hnf4NeP3drCcSv7E182n1C4zM8meFYwkueHXpAkmqop8c",
  "key15": "tr12MUty3hwHosi1rMyMghbF4ZF6RGbchBoKhGEWeXDiYTtiiex15FKZXqcJBeW2UKdLGPD3Kq8ev2wqhcy3LAb",
  "key16": "63pG9BaVWm55AgXm3BcU5v8VEGNXM7fBPnW9TmWwFbLsHZHAQ89uQesDc1WdkTu6a1GRehQciQCotMxvy6WUjp9t",
  "key17": "7XmwcfWuephs71afc9FDKmeUTjbLaGEF6ru8UBg67JoZp5N6rgGTYgAaLaivkP4gVA3C2MsaavNKDGuCGupeS1y",
  "key18": "2piR9TXJSqVxBGuU4zn8VCzaZSJZJyNqsWM7Ghr1CapxHqeEFrkto26f9TBiEsWwUP9UB8y2u4fFzzEF2zHnQYy6",
  "key19": "2scGCzw2wAxs9kaVjXGLbraoP4gp3U6MAVRjotaz7AQftrUqCcc9ma4qpomuiJaQXke34n1CtT8o5pQCvHKScx6x",
  "key20": "47eoGmvM7HUfTRb4rMHvStKr3ZVmk3y3kSfVxWGJKtQ8fiFotzjbfRgGhVZM93r4Auy4EvNcxPvj7xXe17mitTFt",
  "key21": "stSzckcUoazdFXVN2ekAyid3oaZDPUdKD53WhesbS27d5gxjv9mf8H1hodfeQn33rgvbjZex23SQDAzmb4X7D3p",
  "key22": "3j2oHTAwfcDCERYc9cRKgy9n8X77Wxt2RRmgvgVavA1HANWHtzukkVpETM4ryq563735f9mBu21EHN68fGwz3GZ8",
  "key23": "4Lzmyyfom6Zo4EZKAR1LBBXh1L3ubW38wSzWixcAHHvvL3o3zPTxwH6NbzVQ554U1btvMLA8JhdHWMhj3m3C6ywU",
  "key24": "26wjTEBGuYuk1ayZHHdnfk5b5RRSoUc42QLtVbunbKEgGM82szN4Keh36MDEGV3mcQ7UkVtGfhbQwCw5GJdCBBUH",
  "key25": "2Yehsqu8e2LK36cZyts5zS8zCSkV3LGwicpT4rfBesVGC7hTXHGSPsKx18y5W9WXcqZJcRNL5YsWySctwaF2xNkb",
  "key26": "2jAaVUHpP3emqgMFtiC2jSx36J89MWLwjS7W6WYYUXMTcjZ1sdCErq5f4P1CgR73YkvXWpEAbmW2UuH316UXikNG",
  "key27": "4y5YeKuMnpe7kqjVTja5ws1k19c9gFQGhaa2ioHcdnjUS7rDgdSp7mX5Q8kNVsfiT9SspzWS1aCZ9wmktTkNmQ2B",
  "key28": "4rTDLi2NnjtBPCY4psTJg5woX2jzoNyAMCD2fiGg3K6mCiCorMAutXBXksoK1MCGrVaQbmZGX4bp78hCyQPVGX8T",
  "key29": "52UeoraKKuEztgffjk9su1YGoknBho5jBj61jx8bNJa2scGY2kSWsKzApeqhRqqZAcPNt3SXhr3trECJxjyndiRY",
  "key30": "2AxYz588Nbm8xjKEgqkkXebj5RFoRqrvitJQoM24S5HBysxZ4CXn3217sMPkLieeeNGezH3g5QaxqCFySatEubKn",
  "key31": "3f7Ts28qBzkfSdGLLXthUBNYuEyQByJkTDEsFcMkLetYFKs4WcjGiXyg2bbuCyCUuyrc4AXPA65ZJt5TYZPHrazU",
  "key32": "4mHVurgwJRhc5aLPfgi7KZuXoRBvVgvWndjBzPQBiLynAQsw5GariQnUTBMyk979xMF1vqbKZd3D4Nk1dcTmr2Yp",
  "key33": "3CjzYv4xoqFjp5SuY9FTs2Bp7THfgMfjwrJ51biVP8agdRrs9MPnHBvmfjSATYwtfT4H2qU1nfU871m1WA9qF33d",
  "key34": "2owRBpsCG5X94bnHhqCP2HSqPLHBsJqnydKoqpr3UmGvmm2Acgn7q2cj4Q8SAqUMxMwqPfhyEQZriNpwPWq2K1j",
  "key35": "4DRwqq9QzCPxj8ybnJ7nP1aXmVxANdR6iTgggSq9YfYhBpzQDEbaMDgpi6hYyaMxQf12F56s544fNnYe56AwLbec",
  "key36": "4arCeCskCViMYQ2C3wsTwBynTVoBzEaQ8kYwkD3VrKpV23PUKJGqFNPLWodUzM7ajbwJcDVpnACGPc25TBBAMEm2",
  "key37": "2VQouf9btaU7FJY5DqFXjcLdMy3tgRv2snydcd6nctnNiBj88Qjoq6uy1cQJhSUdpsp3fCDtJf9hxiCJZmhPNCX9",
  "key38": "5E7roUkQpSw69JKLshuuf7P9bVagQqD9moezXyt149vLPx46GSPLMuwGQCm8DyNaA7GT4EW2sSPsUBowvha3NjAZ",
  "key39": "5UdvMQhdrnk22VYv7hajNwqEkrvxAHk58egibQr16NS2WvtfPp85UxmixKPxqqGpb7HEjD3aPakVaPB7XXek2qQx",
  "key40": "5H9H6knhbedr6j5etDpSPRyBdtQqgdi81XnvY4RGLuCZpVau2m3joU5jsdFGuT4XYFFUYFpsPXjLQuEQz9UyUK1d",
  "key41": "3evNjKXbzLVh9EGk4ZfC52GiavtASVKQ56G4d3rRCojfdFVNaMdcpNUqpLaY6kp1nDLXgbiP2rnbYVTnSrfXi13N",
  "key42": "27RiH157rodA3seyu7AQQYM5FQtsLsGXU8mqkGWFxeu1k12mmxFkPFPvRYVYcCm4nA8MFrde2UHJm9uHv32EH5kK",
  "key43": "5mcrLMGVWrQ5hm759ED1QHLM6i7rhiatu22tuhNAzVvuRQneTWQnyaR5L3ZR8FyaE2nWiug5wXyruFeM9Y3NYFix"
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
