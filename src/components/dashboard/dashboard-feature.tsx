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
    "22bvR3VT9xHSGNYP3dk9VLYkKeXif23HuqNRFrTZEkrzS61Zu25EMKnTKpgfjiYhoDwqQtRrCnWuT7xdtmA5JySq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wQRSArZMRCmrkVJmr9dj2pZXP8z9JKJex1Js8HqaTswknERCiVqkBMM3Yn1zs8goRk3cvcwPtpVsotP2K69QXxT",
  "key1": "4uRcFXYGNdofwsKxxdzUrUVDUoZ39i4NibiyHdPR7brs7FCafePtn64HxkhRp9PZBpbkdreEmZs54cZJ6owthMm1",
  "key2": "5aapfDv9oeArhDaWg2qH2HvsGeGBwVF8hSPVLcCa3b6g9HH5bHvKUUXuLv195CYomvBhgvFni7U5j6YQ4whwbSfm",
  "key3": "2hL7r5BTNQTCx5tdmRN7R2KPvy44oF2SCqG7cKeoBwAwzHNv2z3Wgjov4x8yWcXeWAgafABkPoNmM1QN3nrXNdUE",
  "key4": "4RqjpC8yQu67E86eoL8rTiiL1ChAJ6uJSKLdJCQErMEyXHa9F9s3v9VxfUEkN6HdCVh38vMVQUCg4R6GaetViQyC",
  "key5": "5KBwufAepYFBdj1pJEQ92JSxpWwWFVZwDNb14QsY3nk1LLumTkwurwfbNSSUQfJzHnDZJor2RJEwWwpaPgibkobF",
  "key6": "5mzMUf5ZcSrHdPQaCEvKWh64wgHBoHyvtRUbCbf1s9BZY5scmac2AAUJZxAiCEZBSqxX7Vhbg8kwiV5SZFR8bpEz",
  "key7": "4He4mcxBXFaj6Qkb4WRybHuU9d2RRJK2ZceKohHz184u3M4qQdDLnebJePs7W17HMaaNoGjaM9qSPurRxX5zDhiF",
  "key8": "2Cmh6U2umu2vwhPY2rE3vGTv6wmsDB89hmNLWYTFWsfrL1kVmdKH4fJ8B5iDS9PpyKUc1XxhkcpD3MeKTHY1FGtk",
  "key9": "25UkD2zYHKxuJMHxfzuQMuq6eFChEaqxH14gR1SBfTYZ9KU2JJSUPx3QjN4euR1WwRdCn9LZ8mreVBxejqzwsHDe",
  "key10": "39foCaWYu1drfzGBjN9acD7aWViR1aJUqgiLrgc4P6qYC1kS6SXKE829eJWL7bn6wV4qLnKwDaRbaqtnzwEriMAm",
  "key11": "S99AqiXkVppRbCCufuH8QCuanVUasjQQB3PvmnfeWU5pTcJgxNNdbbstHnq7SsSrPFKn4LccrvdBHooSrd2yZ9f",
  "key12": "3EVXCGQvQ5kaN9nQHomhPAdgcgSKpXmYYx5YH96YcGBP5yWqwmuRyLZQiTKpSKkvMYGRDE86Sj1JWryErRRqT2MF",
  "key13": "3hTvz3VqsbQxykakryGHhxoJdsDpuxdFc81yTpeQW7M8jTjvjTYLd1JuQs7K8aBX32cFUUsQ5ChmHnkwKFnFXY5W",
  "key14": "54Piido6hsidLdppJWtZPpkhFpbYB2qRD42afkzhjeg96W6PdKGh1BmwwiC8sKMbGFUxhKa3JshJuV6CrfKruJCj",
  "key15": "2ZQdijeKUPq8zg15Gga8wCpBJANPtsf1fGwvtA4iTadxd5GoKbjw2DSTYW1qD3Na2fVkQnJ336fc3h7HoddB3rcc",
  "key16": "45HCHhgPa1jsEWvXG8KAY4GdSdWb67Vbg2Ut3GYB38kV6cNn25K3sdPAAqsrDBxSJracCP8Jsi7344S4p3p6fc3G",
  "key17": "2fa6nmXXf2FaBr1yKazyhJMvqVvQhFbkmu4Fbrxct4aKGnEiwaMhKXGoZpiyn64ydV8B2BryfRpwnePN4h1sLpxp",
  "key18": "4EwNdt8FfnAHCazbbeF1V9Hi7A49xajqHhWFXuivboZ6nr5LWsxhtvpRpRMDyAVh34gtDs9s1n5BqGocN4UGo6FA",
  "key19": "67Ckz5guxwhKQwez711dCW2bVzpxLiVmgqfo9pR2HdgKk2325CQAmJo2sjv5xgEBAcyF21tLKcBbiKt27ZmcrLZi",
  "key20": "4w4VWFLJMk7amcx9eTxHH3hDzY83a4rAc8bEpES18aTozsbguQtJjBtSygC4U3JsxpWRvgfs6C6cKWfuA6sFEzgk",
  "key21": "5PDVYFAuWiC1hZq9tL85JSKZFfz4ybEqULACgv5G4duY1ZomMhUVJk9SDxGEDg24iHaoaYN3DHRi88v6HCB5BkHs",
  "key22": "2kKknxjYuRBAdcuQktVHDVSDz8NmhgdDt7gARtM5NyvYZLTo6u4Fge9iRCXvPKrva8sRY61YgBGo6FBSppe4P6om",
  "key23": "4rssa2JpbYh5ewxnTbtV3GqQ34WimYaLPtMFyPWoGgpzgXbJW1hjisskBY2dNdj7DyBk5SdcYE5xT1P9qCwhkBW1",
  "key24": "5p4nbzbaiwE3wVWGasKYysQunCCR3zVBS41ArZBZWBPZe625gaGFPLZxULGNMtWqde3mhFLw4Q3uScWJH4cop8Dz",
  "key25": "3qUAGzSfWiyhcXxJKP4L3FEywNDnxYm9rwcuEaUJVZMmiJYYhoFSbpB5GmBN5bx9KynrMHT5wWfPXz8yC7DC88LZ",
  "key26": "51niXCJ6fGiT95GtraYvqJdskEdLzg2u43pVAc8dfJ2eKTNNAhADrA6w5G8WwCBf6pfUbBMBiqXBEWaFt1gNecMd",
  "key27": "47kj11EuLVejzx2nVcoQeci6oEqsGaF5rNi9BAhnv3J4HcySPgpgEtbNCoxcW2k8VB3SPr649q8Wmspt4TR4uB7r",
  "key28": "2u5FVuHR1KfD7pHC2ckFWotkk4U8zxSX53PG5cvDuJ9bkWLZ5d6CfGH8TmJ7WwG2HEf9LrRGXXK9MenQNK63TPWn",
  "key29": "2viAGDBpRSshU4Vc6y494cZ72ZoV6RvbG2wRuUVJbzd2TdA7SYsvxjFaNr7DDX8RTpP2JaBmrwvDwSx2wGXA8sjj",
  "key30": "4JHoiaACUzQgtuyoSqqUqYeCzty5CCry8m2XaTRtEm4ZMHyZ6wqBWnkK9yHLp1FHFw1nKjrXvFes3h5GT8rMBkF5",
  "key31": "zoeEQLa5fSMdW3GbWoS8fHQuKZ6qFZc1KjqHbx15ieytANe44UonxC7yod1ipLV18dnbkuiW5XjFQmEh2xB7VVR",
  "key32": "3SShDerCTcHbSZDFy6C3DqN1a2ZemovRPvrt9bsyZEy3jmZFVR6CjTAh4ZLHQL2368VNegk41gvVVMgmzQmeXynv",
  "key33": "5aZR9RRkukhzkPReB9UeWhx1nyAknZTjcp257HdkRv8sm8XMeZimT7dQDY2bYKyLeGQLqVmZGUpVxh1KG341vgUd",
  "key34": "4jR9Gdk6nszfgJdE8gEQBdgMfjmG2BBnvmVERHv9JUt7LtCD1qcaYFRsF2CM4dt2yYWKFhRvMYx6FBtoKyrBb7K9",
  "key35": "4p8UzvXaReY4ZKNLdBH6LbbRfYXsxpziftxetYVuwq6NhvfoknpmEg73qnuocfnYXg9MWHP6ZXXvNC9NK1Jqef4y",
  "key36": "2PZumeKr7DpYY5WDs9VdJCqRopRQeBHn43AcGWzQvgTpLGrLq9hZ4c9rNxQnJT1ranevLivMhDZ3iWha1v57C1gg"
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
