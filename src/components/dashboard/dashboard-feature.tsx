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
    "3CtyE1Mpb8VXzvYNjR2aWLX7ShBzxeiTDLAFnWDnptnwoHKanhkhkBAmfdFfdkQNNBb7ZDx1qqXgbPxjfhGsSfQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CEZ35D2pvbk8vitwKySsw6Y1fmiYSqnXmbn3RrUgc66zguHLq9CPRvAXSqZK4gmZeES191DKFvJaG9hLKdbMUEL",
  "key1": "67PahwZU58PuJZuXWFXJU4x4WUbCsxsEARzrPxm1ejLwnk5sJrEouuGujKaaHeBUCf9CrpTgtWFzP1TyuQriduVa",
  "key2": "2z7o8DF7euxzTXSTRRrrfDTALNGRboJBCzrv3e73QkQUp2xMcNcinmu33g3JwwA1g3wxVpwTqiNe1oDvDgmEgYHN",
  "key3": "qxFToJM5i6TT8xAYU4zxRMUoD8u3Yf9pzxTFWwFVQyMagrCkdYk7RRiZiSeSAhv7nv9yBNFDCx7J7x1dSnjDfiW",
  "key4": "GRebnSHyiDeJhAQzWFox4v4DXB9RrVZNUFzw4Fy3byAquYgq37v3xwbfozdNau1eWXch8rSPwgGzryDnrVQnMU9",
  "key5": "WtDRptDu9iHEAzATc1qbUWJFQupr9iuvtDtobqZBHGn3jHn6mFk7me3fVEWGADUAdtjWXKARiygpiyCBdAKWpqH",
  "key6": "64CMm9uQorbeeP2CJ2zFUP2TVt2MRMoJPKrmQq4fDYJ9QWseW633MaQRNk7cErDjmxFT5sU3AmhcoyzosY81bCuo",
  "key7": "4QbKwBWHN66J6ENfYnMvPSCVz2wXhnY2pzB8sMgTUTPPV9BF6CxYn4q3Q1XsDqihrq8EdfRto8CvqTcRskwfSFbY",
  "key8": "46j1UopUbQkLRaiDzov7mwaNUxQS8b9s6WyXycK7vZLRLr2um3tWuZuHNgPUSz7yQGKy85Sic4rbvnk1JRP2ZuuW",
  "key9": "5cUUPes72TjPRrTVYQBejDD2dS3f2HD3jok2jPsSKRykvGisFBj3r9QrZuGVEga19qAEH78S7AwWoVKxq87jAnjR",
  "key10": "3PMqiDoxDeM2C8w4jgnZku3CqUi7ducdm1yEL3AkKqNpDkLJM1GwUUuXi1X6zPJCreBZiCncyc4MHymquBtTqvsj",
  "key11": "5ndPpT8qLDeC8oLZMnRU5e2jAhQ1UE68sFFMtzPtxTDjyEz9zEtt6cEwAqmQfRUUwN3jcp6jd7e29g3caAiDHfMn",
  "key12": "4dm9DGfaopFCjFDuoU1ANgf7ZWvavDE9QcgHRjrdyBQd2PdXwfdmND8yKaxztoRk1ejnFkk4ccj9GRLscmDqWJK6",
  "key13": "3pcP5RzHbo5ehAxoM1bnFfCbt3UZth5nbE6zQArkaSNbU7xMgAMpkqh3edyuKNPtC7BZfU429LyaMivuKvAyPRNJ",
  "key14": "3zvYBuGY4C9zAKU4W6QVk5s7vrkh7iZfZtYCNpjgeXsPb1WWazoHiUinTr3iBKsH8VQeiJQpqeAAwb3jxRgHgA54",
  "key15": "2RZ1Z1GyiATgAZtsRS7z9FdsKDgzLfcw6zJNRtLxvj5MFZyLgwA7xwXzkynCmd4q7eRbFJeu5R5CUXm5Q1yHySPt",
  "key16": "5XZVkwaNkhg9AwvLxWcL2nxX6WmTwzM4gKk7rs2GNouqwiDuwnw2J9Anm5efMQ4KN66v2Zj3wEBV3t5HDRFpFEtx",
  "key17": "5i87tr11K5eiMNNuM9r5jLcagGPLCd918ALwBbmNw1oiQfXCync8HiqUQzZKT9YWNHjVTKG3Wi5mUnPxeZyxkodm",
  "key18": "4P3wPUAxnKV152q8A8vtQ323nowzUNfcQ6KYEfiN6Atd3CBoRXvJikUc1h4Af7URYDeGxtfEQTcyQ7ncCDuw3EFb",
  "key19": "5QUuVRUuYuZUFX339kQU8YGpj4r1bmtdiVUAKK13pTWrojFExGvMSLWrKyibUqtvCDchRggE25pUaFZMpczvcLZ3",
  "key20": "2swQNEGBUCcG4a8E3uQU5xVmNr9GyVgHuSjpkAkJtHvVG28EUT953mijLKhDBsqMofwx4eYeHAyB12S6CuTz61Zc",
  "key21": "LhgytjpMoQksMScNwe6JmQePYc1rdTkJuYFWcE4JrxoP2eKgVKbDDYSwRy4Qa5FDhKpBK25xFsz2dHhT7zGTkd7",
  "key22": "uNhwv4Me1wS6shdqYtRwLEeT3925DtqSzMDQ5J2dmH5FDrKdk2AQuwQ6f1mv8FtxZJ59dQTWGGum2VAyT9ozQc4",
  "key23": "5wYUp5gWajsh5JzrtbDEKtoQsLys6izs36uuBr29EAhHruWMMuLKFb7UbpzxdDeZDwih2cvspXXLTaWfYB1GkhYz",
  "key24": "48KVm6SKGrS8T2uZdatPQrD5hsJ21dh7jzLr9H82aMobrwASpSvXYtLqwbad4SMvAxvdhGZjSmhZWDGtP7Bh6Muj",
  "key25": "4ihMFrDqBcwkeCxPg9kc1xtdDcznzT3fdYmUfkvu9gzhnmFqVT2qByK2GUm69sDRJ8oa4v6YBsVEAkPpUKXtRy61",
  "key26": "44eEAz87wuZWaBK1cSEjydtMjZEcbcVMMmYU4joNST7vmppztp5v9QuD8TZn5pyn2SNLY9zG3Wnurr4THi5yxUKi",
  "key27": "2qK8Ye85WYNEnpyzHe9iqYEvBWrrCmCmMDr9b8NDCpg4McoqztUE5wJcWLyFMWsdLCfjZqYWsmD6t7sNVAKWUSZr",
  "key28": "5Coa1J371V8tudwQ5KYTZWpeYCUYkrT9FSfrkDmAQB29w8jKvL4zLDh1h7mqzoKiF3SrC1WvMBSc8nxzED9UdtDF",
  "key29": "pR7RXhST71jEtJWrj8wqda7kujz1wzWZBbeJozmjDfwq7375JMwuW8ua2SvE1jaBTfhzoCkJZbqp2VAnmCHvAjc",
  "key30": "2X4Aos9Y4DtMd4Wa8m2B46FpMGnQkwGDmnBeuRdwjyBsr5Ggj2Rad4MFCykAD1gspw5DEakj5ZxPRts6HhiThz3G",
  "key31": "3ho3ueEUqGEKHvvHFHKjaKUKiF6rwE1SMS9AvFT9qvVw2vpG1F7Ti1UxpnLbU2cSPCdxKR92KgWwhnKMH1AamSUY",
  "key32": "2n3GqaoujJbZmmQYhQNgX4tG9wB2XkqrdXisGPogeHGBfaiM5VZ6YWrtLG3gRub9vdHTjZBW3h6sdMAN9knc2PWx",
  "key33": "42NLWcun9ABUsVzMLLZuZ7CrPpv1aFwC7bpBewzTnF3TSkieM2AViDQ4otJtJq5ySWMMYBdr6NNvw1MBiHJsHbfG"
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
