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
    "4Ggid4aPcge8dy3faKUh6bkwMFQLYTEHW4wPGHgbgCcxVwn9pGLP7r3JgpHYd9CKa5NmkbGUiL6xQf6S6VSzvYAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NHfYyCnkGxehqskY28ta1nbHaokZmCEhPF2acWBFoUCRgPfbBDFZJM4nQHDak1Riv7SLhdmz2tWAYQnYP7jgBw5",
  "key1": "NA18HSnETW2kUiMbNCvFJeBxWgEGUWXxf5xtvAajqCfA91kfpdLUYt9zxZ6Cd7EL2wfVGQvXG2v1cpqQNk36Qcc",
  "key2": "6q6LpxofhKVC3kaYfgpL1wjTTBKQdi8gMnacjo92XaotqjvpGMuSX5mLp5q4pAz1FxM72umtK19vYSsAq24M8wR",
  "key3": "2Rkg4tESTnKJMEG9YDkyLMYXsePSDGTayGTQgnQgU3e1cYW9cgieDFwi21H31YaJ3nv5NMjUjjKyVzJV66pjUZ2Q",
  "key4": "DvhpidoawdVnDxApo3LvG5QuNKyGmZjM8Er5WeGvmGsusogdk1F1enF7RUrqjsUbk8UfH2LUirxQfBNyjCaKMuK",
  "key5": "4J2hdTJ8774Yy9yUTSAhjrsgtbUfgm5yUbx6kTEvE4stFsMNazdEk8SbXLgCMRQnt2ALBqyq7WDxS5XK24KeoPTd",
  "key6": "2msvPxTuNESegACFDKQH5CzztD1sbVZDQb3eMzWAFaYGt3bt78UbvdiN8nKw95oAPhwuNrXxcjgGn2b2VSmrVdcY",
  "key7": "5cbHnZrxxu4TRgvu11wQCusk9wyWHX1woxxmNKdYzwuMzmcKTEnKxV31qC5RUZmsWQuKAXyC5uHHSMnoQL6gvWdi",
  "key8": "2NimUg2XxCiJ89W8cfZFUpsXiwzFEX3KNyzLnVvPcVu2RU3weFPGzVormMnbujoaPh8QRNoTcRPTuietrAasVGXu",
  "key9": "3bKW5BaYTaXnWMPaDTt7AFDPQMwfZ9ek3m6ZaWcBmdWD8Vz2K3iwZaPYn3wXBFs7jWs7UcL12exWBgNVFPAXuNPp",
  "key10": "4SrbcJAbKWZhyFLCPBzCGCiHBsreyc63LNR8iubmf4RapbFkZ2BCvqNmHUEyNK5yjBEjJEzh5cYqi5GTGjKiVgeF",
  "key11": "4omDw46nTfPd2nfHWmaTywSMBM5vB8ukQeA9rXvaKqUrJJ2eQZzXatkMwfFjGyoZ12TTVKmZbXEFuj9shB4b6Dvv",
  "key12": "4ji4YSiJ6z8ktJ4UVd7ARG6NuP8SoGwNFEZh6MdEoEmf5ZF4knX1PMGrG7QFZLdzsEKWCndVjYZpxyP5xz2o9MRQ",
  "key13": "tCHbJEFSKeEWX73NU7No9HUEcFNkK2xNf174EWSLgLTj5WHDzC6s7TdbH7Gu7oUjSnorpNNrFRRuEkL5jh2mfRX",
  "key14": "5C7QmjVY59w7kiDFXP1KRuEEGjZoHce6m6KPPqDdpbZLNmukqBHcDDsZtry9qnkSRxVqdvNtMagqUrP4hsMTmpu6",
  "key15": "2ghuzQapMVo8XwnQpmnCfG8tX49LpogePckBPeMK3ym57BdxBLGqreXUK3xeRo9WeTiy3rWKjKeeufSBgEd7dsB3",
  "key16": "DQSzqHbiguG7DPvrPmRfZ4kaFrhKsKEBVT8a3SKdDQ24N7c9kLP1CnwLWEDH81FFRCp7Zo6R6R3DY5VBm8tKPWb",
  "key17": "4BCJsQNNzkxaYXftdCGK5qfot1V9PNrFzp35Wp6SWAyX1pqaecWoYbRfj5yMYyfSfbvgCjH7M7eFyjM5nGWuefXf",
  "key18": "4nn3TUqawyJbdWvvemsVvddP11k4BzkEhK3swsBMxRUZJ3wjWjYrfA1Lcci3kwFg4C27fBtx2n5QzHJyUDPWeotu",
  "key19": "4f9FmGDAneGJR2ra12Yt1BFg18MjasW6z4f4zdAWsDa7S58sh8CzTAacRFcBdULz1r4x6vtb2q5UXoU4wVVb9Jwx",
  "key20": "624MnG1j5pnU6gFu1F98dx2fkrmHep9cyoNB4kgVWwy4JDgRgzYDQKrJByZ8vKDjdTeJeBQ5ZBcUrEopvrhDvPTs",
  "key21": "2UxLZCSUGVSDtW9TQFZZWunPE2kq96YPCSeRCjw5aFNJSGW8ncjayx4T3fqHd2rehVZuZ2ymJYAomegCksPxjE1p",
  "key22": "49JKr7X3muycG2fgQptZnyA3y1VqBGBDYxW1uY4zfNRtWZXhEAKSxoTsi8jSajQsr2P4MKnbsvzid5vrydHqX5Wj",
  "key23": "3DmUm9Z5v6Ei2evD4qFw67UgHcjYZU33cRCgrGsFmxacJzy529XpJjWoGBKAuSbuwJqxR5E2qRsPYuQxBztTD9Vo",
  "key24": "NCJLmUamqau9ontna3oJaYihrQzFYANRUAJKcqvz1JejJ1tvR4cVdngjANKNbTPKkMnptATySpbQWizrucA8mkp",
  "key25": "3ZeLDMikjMoUVVCyZJB2ors1bDvYs7NuEgWNW9eHy4GvKpW9b4bVwxDV5SBSb3PsYgEuqFZ353i4n6oNdGUZgFtX",
  "key26": "3DuQXQtYHxrkreVtMz6Je1xyXcsTv8NghCqR8Fx8rHeyk6gNrDJs7W39xaLRFLjbbUegfHKKKghZWz9raxAPexEU",
  "key27": "HHMBmotBLYVpCJVvDaNEyeN7KB4ERVrx6cfzeHyqsNGG6mAMqTkKCMndHL7R1K7zQB6ETfuzGQFm66DT4L2k52D",
  "key28": "5Q7dAYBBsCPnxHWgc7wEC8K5FQHfTzqJzKMuRvL1Hc7ULvjRKjUatA29M9sAvDCLdTA4qks2D8h8ApaJjAZ5iQbL",
  "key29": "46U4YRGjg8cneseZQpYJUvG8CYwXyyiYN4qdymJWgB2aQCjypwJpXUy2FK75uXvdEpcJRiucowVLS9zsghMfPtdT",
  "key30": "3o2skayr3beruGh2VedJ2mqj5fwCwynWHSGXnogSQm62aqLsR3pLt8vCLbaw6cWTGisbjGLQ6XMZhLewkxRPFD6v",
  "key31": "4hpmBX2gMhF2Q4cJsmQVJhdRLVPwP3hCnfgDLoK8vgDBsBq1dRHRj2foV2DKwd7BgFErREpBHcFzkZ1VuQFbFrSa",
  "key32": "4ASZv6GpaoNLTxKmZ5uSXZshDQZA7ypp7AK9DuztPkTdySVJdFDA6Mc8Mngy2kq4f7jgVu7PyQHM2PVR96B1ZTNi",
  "key33": "4pRq5xoDfqgzQDXurUexDRK9VrN2TSsf3MbcjqhsszJGnpkiVomfhM3oa8u2jJnYFVUJR8qVqNvCprgsD3NbwDwF"
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
