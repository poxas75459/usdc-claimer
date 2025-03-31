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
    "2wfKWQkV91pcbqZWFGo6VrqtESKFdEN2BzqBC5jAE28sUt5JkuPiXaPc7TQSoZqutX8q1DvoUtxwVjJJPeG2JiWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51SLdDYa8xBQcrxDRyhVqu3bxxKdoVeWFsFbWz7S41Bc6ZBMQ6WGphMc2fG7Q17RJz2pV8cYMt4pYgQZ8zR37etj",
  "key1": "5ZfqHs2PBYDeTCymPR2vX2DYaKnbwyKki446JApTHUDd282cW6h9mUaayHsxqGrWw8VmNaXPycbdpynwXDn9zuuh",
  "key2": "2T6qAK6HGa1YudHvvWdJghWCeRb9HUiTzucnMiqJJwNKuEmrovTGrkgnMz17KKZuLt3NJSxgRaajkm5aHRTzaYSv",
  "key3": "4QSXwZ3PCw4kuzTB64srfiv6KyfFCFXkFBgTSPGMaxsQttGFz1rT7GUhJGTygLCTFLAfjRme8a5R1pQE664Brc2y",
  "key4": "2VWGx8B5wxP6sewqJMfh8hv2oaAthtramgPYkY36j1nN6ecvyuAFnwkQpmY8ActPQnkzjEGMGZAshx8zqoJxjjth",
  "key5": "Yq5B1VWqTM31xzdKyiZE4phfSqpHHJQxy2L2JGVjednNrZ9qKTsJUVzqQaMJRo6gR8M8f158nVQTQywRYtzbaP7",
  "key6": "64yyu6eDFZjzPfgpkJ2hF9Da4uWPEBXwU5gTQDZ3cLV3Ut1AgKyodLFPoG5e2H19Yi5NzAMMxhtVY6PMC5WRoQYn",
  "key7": "5S6nvqCF1UfyfyyxwbAc2CN9VY9NpTExBWno5SAkcigag5pzzSKN93k4FaW5DUxBS3Y19t6DDSpjx97fg8x9oFQJ",
  "key8": "4j4yRQECgCdogrAuiUAat3fwLt2Kc5cz6qXcHUtgBo2w6iZcKAhjKYf4qaF2Hkwj3eFktxTv9oCYSutogtpUBBPP",
  "key9": "31TjuUjHAi7XNbp5RUoDE9gErf2xF59RZAzvFVMeJ8WgNYYYUfZKbtr2zgkobMQJwvAKMZjQ4ZhWVwDUeU3AS5VC",
  "key10": "Pr8AQBhGkmxosj779p8D25fzJawxNMFoN1enrhpL5QgcayiZSRzNzxRVwAWnj67wfu5YV6z5TVfUrtL5ZPH2gpe",
  "key11": "2QiGmM7NTSWU8g2PU4KAHqPW5zfPyrA11vXYaxKWuWvgYCtT83Sqenq81pgZzD38heQrhcHKUSTby94RMMowNhtV",
  "key12": "3NvErsPoCQn2EQNAPJHn7qvhasuq8AvepnDaJuZeRivTyk37uw2mnZSxn4m8JWcvF4RN8CvRr4SdjX9pz9x5RUAv",
  "key13": "zAuZJQUoQzqJPQ3Vwpef2mTxyV16Kfonu1RDAeSPU1PaUFfjntBFdAYiyAy87Fe1jd4HQLt8DDGJgDwRCzodt35",
  "key14": "3zWdM78hUurQyQkVsq957MUgP1nGcwfR2eUhgyA5fbXcyWXhTGFDTB7Lfw2rqQcfeC7kH7burRNjZ37MCVZJHWBz",
  "key15": "gCDJ31A7tXCC5pvENVWvbvsKiwDoMcrnTSyHbMGiMGsRw4xuUkvMoitC3JfqWw3sba6em88wMPy7Uga1J7wKse2",
  "key16": "2Q5ifsVNuE3GaZLzGN6rBjgb86qoiTmNnVyyRfUPofBUtUQknqBSU2XLcyLiRVWafpKkQorK7TUPAuzpeooVtv2o",
  "key17": "4YvPZTUEtaHmrn6LHDxVZVg5GLiHVzm6TtJiatmzCkpewZXhg4s6AmZQmag8eYC4kYizCkbDvAFW4sFuYc3x87is",
  "key18": "3PkdaZpQTagvnUjcgqYzFzP8xwJVzkmAmgfkWrxpKxoPJksxkkf9A64xYUwi5TZh4SrtpyBUxsNR1VuoS8sEVwDX",
  "key19": "4ybpaUdtYbNNqFhTsE24gj9g6DT8Mp42tMKnnZpZNfeHGj6ezHjq1QDoAyAR1N5HZqXbibUe98AnKAnup5GyFDhn",
  "key20": "rCHtFREZFMTvMNH4i96VtbSrfP7ULd3Mrbs3yof3sCbv4D7GttzE29aVCzQ1YUo5KNG3hqYKFQw5hn7uH3rfCfd",
  "key21": "UnHedkgfuz1A5YTfoxHfqoy6SpQmqGXBPipJ8Ni7rw5Tf5KbNQ1fnqyCwuFWMbLzGsCCpQ5YyJw5AbFnieUoWh5",
  "key22": "MSFif1fd4b7mgE6BgLJssnKceTPNguLqNR17m3S4AKrDrkyDcbwjuAWLTPMG2M98fH1RD3Cj1sMSzayC6Muud8Z",
  "key23": "3jeN5uDZf2mmj7wW9za3WCZEL1PXGUQrQM1q81mVKvss21FXAfWPGJbc3j8fcMr58CJvC92y72qJCe4hStQBsqCG",
  "key24": "41DgYNaNC53xcHmWNzb7Qv1rrt7BvPUJVLvmv9yiziWub3JZd8opEifuiXhCoarqsLaokuV8RnnecJeYCYpXFx5t",
  "key25": "4XdKwqEEW4adThjavCrQPfKM6zNweiwqxq3PEDYw2Hr3kLQJFA1pb4EkF9YqnNudVsRZ3T9vcMJebXtAaGqYGdY1",
  "key26": "38VAMAD8RspCeuotRWG1dkURipvWAoG43Us6BgXHEno6j21GpZuMHdRqxu7tTUztkAmpbkkYZm74mPSBKwqszAhs",
  "key27": "5c8QAmJG1tJEx6aZ3VtnHzza1BNg2ZTNxkiZjkzJZ5BFxPRA4KDevy8RZiJ5JtK2BK62UNjwmervBSiHuieU97Hr",
  "key28": "5RnirS9TTFzQboCa2LrQbx2xD2fgh98rFro5ahevUxDeNMPTAocYG1hAzCn9JPxW7y7cBC9UpUQCi2bR45vAPB56",
  "key29": "57gYaM5aBtoBVS9RMbffQfEKAY34UPVNHRQEb6sNaEpj1bCpyDPkyEMvrGwiJ6Y3qVmwt8CFDerGq32vj8ZfK6KE",
  "key30": "5mZnUtuAppe7r1jCf7RgXRbnCDhsGeRRPjrqz1Vg3ad8FtN6NnGzqMqy2n6mfrHSL698k2NJFk77WsG2Q9Eq73VW",
  "key31": "3XfszPnKuG4kZfvDxgsNRmPXfBViwpKG4zkeJMn4UsxSdw1NVbzkuNuFstBQAgTHPsd6eEpniKMEY5wGoyY23XLE",
  "key32": "JJ2PVAHNAAP1WzYBETmvgvhKckedzGRPnWWRhoVGEDHtY14N8HUgJxtBvY9YuMkGztLAY8hmYLLK3jguCvq958m",
  "key33": "3WYuW1ma1bcaPyDZ5P2Y3ETbFmxQu3UTPSMEvw5ef783kznAu3J4Z2Te7pnF44ARPiBTGsAkXGutnGVhC8z71z3",
  "key34": "4Lc3TpP26qczUcKfiQqhrWFPhkRgFsf3ySpFyQ8NfnFUBdzvKcaxoUf6DU7ja1PTb2tK2cwU9SvX9YjjAkc55rUw",
  "key35": "4xzvH7c4oSMPRHXv7WD2jBvS1YQQhMVG2QFZZ9W1MscxoRxtDYFM7xB5zqrH37ULpNWEHyX9NbPk8MyvoTeWW7p1"
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
