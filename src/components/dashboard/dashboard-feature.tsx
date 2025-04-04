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
    "2gvtag9AgzQTmKdkwnyoNhLm9esYrxcx1h7A4uegPjP77Y3eGKbmC2q9xvhCvKUyfs3eWaEGshQskB2hvHmmo3bA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mHDYSLQGFULdbgEdTKPP6QH3UY1ED5HgaLCWJUFBJsL59uwHU2g3jkSqu5XJd3rT78eeTgJR4iVpHBQVqgEkqa9",
  "key1": "44hrgx6ZqVKbW3VHHzzpnLeYVvZqGX3ydJ1C1RM87h8YskgiAzPhc1jMh9rApqvJnzxk4CFr2LQWodEDYZZqaUYA",
  "key2": "4iRXQzPirSgq4u558p5vxnyDCAifAgYbYVduZL2kmbGHFL3gWASqA6paXtrJHvKLqJwgZkxL1tfUndo1Pd79VWay",
  "key3": "Fy3ACweUcXzuqu7XyuKu5hRRQQ8v4DHiV99LMVXXpHTLf4Rca23PN1XXPtd4zd144qRRPu1ED7gdy38Ju6b4NfW",
  "key4": "4hp2v9CiC7AzwBXDEgdEfhStwM3FUg7R55Kwgk3BtdqJPaRYunkCHPaSMF1nx9b3XZHek8w4zPWaJk2EoV3EJs11",
  "key5": "3Jqfx7yW368ny4RujmnhjGTwXGWj5eg2fdaJcGQHXkAHrAiUfSPQHoHjHMSwXSWqrcbHaZh27uaCC9DGnFjNN9LN",
  "key6": "3hQGvEcu1BEPCYoivnWpSwQ38XqVBLDenLwtBkRhimB1q8WWvuApiufeE8CxpJN2X8Kd6HGRSzwMeVdApf8zsZhZ",
  "key7": "4utAwaQfRTDZMM1Rr853GaqpqcBsVc8g6qkXoG493KiQrZfvrgKLwWkdL2TQ91RZtN5ikMfKVitXC4LNCCjMtV33",
  "key8": "4VLFbPeymt8yGrqQnXaxFUvocjsDHezNAqAnDn8tkr8zbZZoi5To8WkVmeQu2gKUcCgQfG3f1LZ6aw194AmwC1aM",
  "key9": "PbJHQvgpsCr5PrNrtvwMzJ4NVPf15k7NWG77JWYXCjeA2efAnXAt9RQNaFiF13j8nPuLEgRiRCU3cDJDKuE5NnM",
  "key10": "2ia17rghRHSBAfhyRnCEmmw2Go7yS3scye38PdnKTGTSxoimrr4LLit6dgoZFcvfrNz4BDdALFRGgnvqWT1X4V28",
  "key11": "432odG61aA5JkaiJypgvY28diS3AhuDMNATXNe7wMrZoShU3Rmbzi9kUqJjmgMTbYK7GtkAQ9hDTt8MpS34CRFdM",
  "key12": "2kdcmU4DQWfFvTYqQd5veGCY919zkaU5s7croz33dKFwsUt3xyr4eEkeNE7c5yZ5retggegL8drnHwLibut9GEEU",
  "key13": "TmzJYCk9d9i4fMHcqySdbmic77cHpha8drMW2Sb2oBG8w99Mf8oM37uLp6wJAL4GNfgZXjwnLMeEAaSApn7UTL9",
  "key14": "3QXkza8vprHzMukMBu2V5G1q8VLpupJiTSSJhZxVQeUFZmnUtPYDz6C1yg9yAs66cExmgNryc4NxWasaTMeBejWv",
  "key15": "51WBtydNK3BkVzpJyqEtv5qQSzvNuaacFhoH8kS1x7PUdtTuU9QdgFGB6zoL1ZQWai4zUbuxRPuFAtcuqT5fonWi",
  "key16": "62zVZ3473pSV8CAb8HmCgEx7cSdXcuNmg1MVYa61yD5NxpWyWXoRMcCRDChr9QzPqJW8icb3NNK5z2uttg49kh8T",
  "key17": "7vq38HPm4ysBs85HSnyM5hE5dkEuWeSdqpuevqTJnP8Ug5bfmHR3A6njjHjv2encdGNFF2GxAoaFBptFZhHr8wg",
  "key18": "3kqjFoRfej3JJ2PYsoTqGmp3uHZ4xM4NrMyhKzuaFXBwuCwZx2Si4iGf6UnWhgjocr3GgYAxvWQAqjUBkiq7xzf7",
  "key19": "5pvBU1nqqqMni1dwzti7hvkwSZCqxWGFyhWxrUeZJk4UNhxKhW7NGMsGzGhycDRCKAtQSTndaxMKpKs6GeanV91H",
  "key20": "4XkwjaYDiTYaGS6UMqaC4np3M2qiPFDfgtaMQU7tjpithFXB5MJoQ7yfjWpx9s6jnFuZ3mQuuC2t4zRFZ5u23CyC",
  "key21": "2QK2pdfNSprATbQHeabKhuFqBqYn5oXyztiVphps6PCTnHgRrfxWgYxT9FGkNKSi7bPZZZrasVE3roN9NsM3YujH",
  "key22": "63tt6pa6WCPxmAMZ3jywZC8tdnvZdRfa3WWwbyxp8HUXqrZM3nfVnkJGny2ky1dN9hVjFx49vFoxowwReKJKmZTv",
  "key23": "GhCC4TQ9Wr9119kHwCqmwp4omNbQCXPF8m74F2jpiByBkuwSu7Zy4xgC797bfdL63p5wHEjs2SFP2jJw4jogCyD",
  "key24": "A46uiu7PX1GTuXnWq6VgkpZQJNjWbsCUZebPFaiCsPeQ1kuysN6NAZwbugz5kB6w1Lt7S2rAs3dxoam9X76628e",
  "key25": "57eRgm4cvPbA262gfohhUoyJ8UzevvQBpV9mayEJSEXDPSmKgbtMHFUcWePFDLjBPXtn5eZBBTKk7nKFBXjd7NNL",
  "key26": "4qkX4t4rseUSuszPATWjTS67JV3zEJq9DJErFLAtBs2nbLsE4pSw6eDx6v7LbCeHvpADcUD4GCX1AwQzhykemJXi"
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
