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
    "2F1qvABzsLtmVMjQeHj3FEwfL7hyXLEZZZLaGaS7PjRBBqLZyGf4U7V6Rt4G9z52Npxj3WeTYij6iJWjNcV2Z4oc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F74isuC4xRPQBQdFs9EstLypvtmR5SHjUVkkTkVXy6Z25awz98f8gcigV5gkRHGEK8oVswwRYedRetdzdakr7Vj",
  "key1": "hi94D4Vfy57HvZdKszzgTvUuqgpS4nkNPu2YAM6Xys4KiKsKtj2tnKLSrdGPa5AtzCepdHeinncrvUkbF9SS3zm",
  "key2": "3NcgwKp3PGUYomZD8ykkmiMHzWENskhPb8FwDB7w5CLmVvuMAj6i9oPSJGAVSihx1AGX8DxXkxzmr612vfz95gpQ",
  "key3": "26JDrYnBJj5NKQWKRU8nuhWvv5dMMM8Pue6f4Xxzy4cPGxPKNnQheQtUBJudrhmoD9kY5N3Yifo3muphbQKXLtHM",
  "key4": "48UoDopJEDFh55APRvuxEwPFxrva6eDhMZLTLkZ2p4irmQtoY8PSjJSBYxTZcLAYiqjfgc89NrxrEUgS56FmJrPX",
  "key5": "5mSyxE6jvdmkhyaFgYAjnmSNvuvbAzLw2RpSDVdLjzC5aUHAPERYirC4xTMBqknCjRV5jsYfYwZSpZDEcYckgADG",
  "key6": "2AVJtN7i1FJesVxyy2wezN2jYSjUCKNUH1wSCtRLMXYj9RXR7c7jJ6Unc5ASpAqtbXF1e6agkH6s9FXACq6uZAqu",
  "key7": "DTSc4CC78azZEggy4z9R6aaQEq6dR8wi3AzfxiZzD4CdMChTr7BTVX9Us9NX1sPNhfm7beWZjG1VZHW2gaxrjj7",
  "key8": "4UoVKecD6AX4xqB22paQLhjZdP1eisKb1MDvuteCc91jLHUijpU4Fydq6z5aDU13mXq8u7fCjayu3wckHS6AUn9a",
  "key9": "4mCiqonYL6AvyAJDHkw5vEFJ84CH6GQyosCtYR5AZW96SDNYdQbUaS5dgwb5zPJxDHTuwgMXohnHf5areDrkK2rE",
  "key10": "krAbYs7G6dDVTbY6DwkjYEnmmRo5k6dByG7yo5vec924xBoVWVkFaKnbzJx1zj7A6jUQv9G1WFmdHmr2G4ZXFw2",
  "key11": "3ZuPao1vufhVc8HHMBaHqdxsTpvgdqngrzC3fsg1oeSwmq8j9RMEBkBFEmuLFS3MpczwFFzWcNJGzmwnvkJFwqK5",
  "key12": "5FXSw4Xv8QupXry6ikTPbPerZjBmHyJRZvuhRW7DYSkaV2rdhN1aMjcURsJMpNw9XSWLpkiKpLvRouHkdYa1Xdm4",
  "key13": "3AiU7bDnkoa7XW3u9SiGz1HfaCPLCxVP5z2CbnmUv4ymuU3S5a8fHYR3MMnu3NeowUhNCdpNkEEhuZd1LMZ7r5QJ",
  "key14": "2Mf7AqYTWcvSs94WjpK1Suy8gVXMhrQZ8qaojw39r5Wu1Ndj1Js5ncA5bT5DiajwbLmeXhPVgN823XDe1ZTcNCEp",
  "key15": "F28JPmFjM7z1hQ6WyfEwtNpwy4HaVFYU1RrHehachdi3cPjrqRcd6FrcP6Q19JyaLdjEtnmyon8SuaXVWjfVuDB",
  "key16": "5tZj4f9CAS6DRwcfzZeLKq7x42JD6wxytYSG1CfgYfLC8RivDRhaAYbY5Tk5fv9q1zo7VTnHaTxTM3CM5qyH7pXL",
  "key17": "4Byd3Wp3qbWTpuyEwy1yoUL3mh31SCUdeV6zsBJ6boRSSC7RRmL6C9WnJfCkBqfA7FxMSH4J8dC2PU6kWV8YHLAY",
  "key18": "dvXh7dQx7KKayeW2dmM48zQwpCZUpFXRtQWXXUrVGii2Wuj6v8hwThr8UxijxmJXeAPjBuHp611eNMpU9MseBLa",
  "key19": "NeJGjPERjybCbLreYBE5mJUkhR2Y5vFiuWgM3Qd38s9DLYtJ5MWvaUSLwRCGof6KTjYVnHEBZUyAE5H8X1QtFX7",
  "key20": "5ftb27BJEPedMMkqXRoyAJPnJ1wDcztF5825LcS7RjveFwjxjsfamAS9y49WiVz3mDtZtaHYWDVibT7zUdzYtyGy",
  "key21": "3TgfSdfSGtszjVQ3cDdSXGg5S9Qc3bpndRiU986TBTwVT5jztoGRQGsexFb3o1RDTvm4Tx2S7ESfbdsDxp69RC6J",
  "key22": "4aKtero3DexKyFga33pjaVkjCZqrTyTinxR9CikweHmyNUJC6QceEbUXeDYd7w4eYuWFEM6dk5kUgtKrukFRSkV1",
  "key23": "5sSXrfAncCAyuH68JHmK1dWXzzZFcq4wfFri8NTGJHDuQQtMv1pm6cEsUfFLL1jzkfvMCekrf3RaquMKUP1yrtyE",
  "key24": "4haQjUNDwLxNEuZaku6f8LukicWRHsW9gtuuR4a5vS6iu4psscAGqYFMEPLBiQ2efwujJ8tg6emmwTX4MiQpKpK",
  "key25": "4ufgRdZDxf62PNtiDTVinrt8gbes5MMSd3PNT3SsRLjQX5XKK8ihgTp5jznkXw6f8yPxmDfZHdRpeyToHMsPMHDQ",
  "key26": "4URQwpd8AF9KU1qVswVTrZsCbxS8ftJBrkHGbdUqwWdtuX2z1Thw8ZQCg8ErHUoKnyhetouq1uSeFna7zgNRzpyz",
  "key27": "2J1YDnaaU7jQ4AFCn4g9rLUEHGXAsMQ2wupAyxt4gFjCrt23QGfbiom5fSZTYhUBBxW1eNFPVV8VTCeVmYR9xTBG",
  "key28": "37VzwLc6dV35XGQY4V2oTo9j31yiitHXb2nRq6c3wGYXLyGNmMP3F6yT7AH29Ra9M8jps49Yt6sKw3mjqB1NijVf",
  "key29": "Qcu3Ltyyi1wmW6BTXsqjq8Y387ih7Vvkk7FfbfQ9LPQm6xFHG8XuSyhhkzFCH8E1x4fUzsCg6HwQy7c3NcQiTFK",
  "key30": "2RxK28qS8QzTCQh4nd4Arfd1K7J7qR9fcLZNn1pGUGejTMHtg92Ays2hRTJs6P7DxvgDSff2k3VxchWvXbKGzSwe",
  "key31": "UUt34baSfJuQdUGJ8igJqLtbwJiEdAG35pLvQcnuu9AjQvf1fH3FLJRY31dMYfePRZ3c1YKwHEKYeDzJJHiMUzW",
  "key32": "3uEGpzjez5CJiGrsNu51khrC9puJnXuoNf1agpuNiqma5uZq6vH4sKoU8wNVuR4rGmwEgo2xaNrEdh5P6oAZeLWa",
  "key33": "2NrgYxPGRK878qTqbL6tRySLvJkaET31x9XXRhYnmuvZcrwDKzu2fPT3iaTbwNHMbK3MDDx7dDRqEvTnNTJ7AgTc",
  "key34": "4seeT67nT7dH2kTz6vLArGwd63rwqqq8VQKY679KuNP8ivbqejTyA4NE4Csiqv2WiwqQvWS7J84hhLPQGsSMMjgj",
  "key35": "5jn6Cv3M2WfFJY6Ma6GWDd5a5CeaBEcLyeWCSwL3PEkQ8FBG9EZ3EuGj6h5QhutLKiEZiJ9ZLCqvJ4ohZ8brvy63",
  "key36": "GGumAcC4if78DEdGLhhhdLZcddwcEjkhx2RM4XdHn2dpAtEKosVbox6T6KDimNVSdMAAqsxNiWkNhJbrWQ7u7eV",
  "key37": "32ickoS5Pi2a43tFH1RY5TbWM3chA6KZr5EDfT8arDDnzkxGp42djUuAmbniiKLunkUgMC5LTjaVvpBqpbHeFs2r",
  "key38": "QPbbrces1w5bKEMwpB2PNPV2Upa4f4cu3iqdU2n2oV42GSoATZ3cYgYt1A6PbnY6tEPGYM6vxNatRvLaA2zHsD2"
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
