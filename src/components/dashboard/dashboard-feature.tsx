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
    "51TSN7VxhM2M8uk1cU3ESPKqwqhWBpSdBNTdyyDvCeP1rWEjUrEMR5hJonromV7cxoS3mupGUSpfqAdpyJeg2nis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X9V5Fkt7dF2fp1UJpUSgZboEYxTbNDTCSSz1RjbMV1aXnrgkQQ3XwAFnNLiGbGAmPVoN2aK7fWf79bkv5f4W3R2",
  "key1": "GA9ZJ4izgCvKXWBTdNHyyBkBpuMYRQbst1s3AtTNtQiCx5ueid3q3duUAndcNsmGueKPT5CByh6mmCSV9u927eP",
  "key2": "3zHvxUt9Q8tG676ruvuGrn6wAam9tt85dzYD6ohYBHToynWPxzvHJvRkS8taMD1RArXaygSDcbFVNrdCY6ZhjWYL",
  "key3": "2FKgcwXdzMNUJ9r3bDioRiK2femrSUWinJ5ZsihEyTPEH3BRSAvqWyUsZ4HsXc4ZBHbEZoqcvHETxHMrzQwQgSeH",
  "key4": "5orDRpJP4gsQSNFFaiP3oWA74R7zaK3ALXuZr5d1cURg7wfAEiDnAK5UY53NB4HgzrLF6o8Ko3Pa6Kg6ArH3F1jV",
  "key5": "3wVAqFJDfdJ4S4Jiyk4WbaibpZGdU3gSC3DP1VSB8M6QeaNo3EQybGhwFc2ur1A4fsq61EXTd9xsKj6n46SWPXVn",
  "key6": "5pRdknrADa87zhAfR839FBp1dBeizjsw7E2t85zaXPxiH2QhyEnHGp1q37dATj8D8jjR5iw8G4muDLoveXZ6dnoh",
  "key7": "toMAaJGDQaZn6Caxui5GZDBnimmsUTX8BH2U3rJ3f4LQ3sFAexkG5MQ2TkmV649Da2dA3MLuwUDkhwePV1jJVaQ",
  "key8": "P5usV7jC1CuLcDpPsBytnxQTv4wcQ18Jz6RqbCLbnyaLCNkg6J21qh19PW4U3P3JJfbd2bcfEd2x3pzFiaAYPsZ",
  "key9": "2W8J6P5FtUXAfcgVa3wntWegqiFAhhEpKZF3Js4oRiY12ZgebBK4eYG7geTKrjWmPPvBVWwuQh7jMBEMG7vrPSfC",
  "key10": "4vmvfros3RrQ2PPj6r3V8r8uCjRwfRxFRFPxP2zCTeMEPvJwnmteyYwWdRwy1PzduzRhJUMDbn9roQMLwQ2EZaFF",
  "key11": "3zJ2z6VETZLuDhCmFALUpnhmmEMMMEnPG75kWuAVPoULzvmEfbvaPoVAjbEzA2KmmztP7cTduCcvS812T2mdNBoY",
  "key12": "4Q9jZHY4eN3UGa5r97RCKmYZyDP8o9DtvRPxGKByyKbN3JSeKWWDEtJXXVRdcVcEgnNaGpQHWwcpBVBiqsvHDihj",
  "key13": "478BZgGVSEi8aSK3WoSjrZoLv2bM8ywQuba1AU2XHiv4SQCD6qP44MWsCVCWxp8MU1rN4H1zDmekzNAzyWXrbNxp",
  "key14": "2pczAjqwAb7d9amCCoDHUDThexfWeke9aekWHika96zRJrWDyijWR8NZg5WmvJeUVH8hKX3Pdesnd1CTHqUaJf3o",
  "key15": "JNhiVrDVAoMuGba6AZDjYGYRaYvVMtWRq4eZq8xMo8cFMwswhDMeLAcqfRVB4n8rTGzjPGf6ahdidsFU4jWMn43",
  "key16": "3Hqc11YR4BnhfSp78WMZvEDk2QMHkYXJWLSwRh58PVVNu7Y3WM14KaK6XXX41H3AvKtRzs56Ebefp7bppqmoVMLd",
  "key17": "3dPQorqH9FgnFU7uncbFsQ1hRcVfPYPmwiu99yKDFA5mA8Z6j23MUNADDd72qqteZxp8xTrQTe8BhrBrVervsRtJ",
  "key18": "3SMs331wmDizoTa6N2SgHd7pp8oCfUA1uehkhHwb3Rn3VuypEpRPudMZXhGqf18cGXvrRoTHMWmwdRuTEz6kpGjo",
  "key19": "8DkdKYagpQ2u4bRJLFSiwGk7ZeLiGRGuzBeUwqVJwXyG4Q3Ug41HX3oYkBcFEXM26GbhYew7N7A1Lwvgua7NxYj",
  "key20": "387tkFvsHbbmqnTLzesUtdNkhDd4dUWsLYEYgGvG1UrrcBvBNcWK5sBAY18idoqu8yB7vDquN1n8aG8JkNEsxvmH",
  "key21": "5puhW2JyKsPE3nkkYhJAAAMV5sqY1CwEL9H7iMzJUND8fQCJJMM2MCZnthvYk3zHxC3f4i9sWKv54XzRnHvEp74q",
  "key22": "3En3es42ykdZuw8K6dFhafgb5BMfDHqm3mRBjjXXe44MhtNgUiAzKKkDXNVdJAq4Fe8RpLJ6a6xMhbLo6CVRpdLj",
  "key23": "4J9QcYXwkmsZeUncH6Q3GovnRgyxzzbH7t6q75HyDifUEGdsCgrgtyRaH1LVx9hxY99yqgBBVsaNgYJWaSma8Dmy",
  "key24": "225TUskJF6aLpNzBW8kGjJwdHHGi47ddtNoNG4LBicRgTaNGbEW5GoxfhFHXxAfzQh5MDeZErR7zzuTnWC1Gea5P",
  "key25": "4Kxpjm3E7Aev5neknP1z3iuGoengWH252fya7qgwskxfPJyv7doC8hPSJzQFohTkNNw47a6ymAkNBMFXs5yPPcHh",
  "key26": "5Y8NiRetD598PWzHPbAuG99T2uuFRgbCXghyov8VBFLzTyK3GHKvgbcrSmqBvv3PWGTGeswBrZ4kH8NvDao98NzF",
  "key27": "22pDVmLsMaoLnPHGsHaXuFWc4ztrVXGFPWhXm6xZ947zsMDgzMSTXLKX6DQ4ivA3b7TQLcVQL5dN2RBup4R6KPHm"
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
