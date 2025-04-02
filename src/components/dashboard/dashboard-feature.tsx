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
    "23MjAjdjLjCcB1ZzKaDMuXByrL6AJgYnH5BAo5KZJq3e2WpbYPT7kLwCdnVWAzL2G7SPXQhgKRwVXBqQR1r1qJN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cFBYwqBbkiqEpGTPQMVfGonSsQKE9tfoMxzW3z4FToQuEFuEc9GEcrH8EyhvhtDtaYorFAM7zgPPMrpbnMfwmwN",
  "key1": "2iwvuHE4oHzVEa71gXE2eGdcavQ6cJSYAmEo6iSzwZszmCDbbUyciQEQsb9REVGCnv4BHSydWjMVfTNe3UfxX1as",
  "key2": "BHw145eHrQjJbKbkt1Ew92aq79cb5Co5e7m8ny61e6NFyjF4WDNAijpub2gAFkJCeYJnHv93TAecewWLEvip98b",
  "key3": "3uoWsv3fhmXSQoRRR8jVtYQHDeeNSaNyfBqidz1P6tzH9BWA6fpTwjxV6z7nUQrDaxhTLXZa1qiqkqGnjTfvbXD9",
  "key4": "yhvHL5vFaQ2KQ7jmzU8ABighZf5hfL7WaeBcxL42Yrc5cxjNSQQJqY8gshrqaShi5wD8gGZZmgLj7CzR3TAPn6m",
  "key5": "DragLoY6hXDdbS58iuBmhhLyRt9jaLbAZvh4sRhQiR3Cp9xNxi5YCUzsCgZcxtVjCaADTMYzVX3ujEKqNSg9aJy",
  "key6": "ekewMtcswWMgavXL7rvwtDCt63wG6MALstnwmmbLsV8R5SxP7pJ6h7Crq4GSTfNTiQ7bR3PpaQYnUQCy2gYp246",
  "key7": "4J6WZTKn1Dy5t26Qz7Gt2q22qKRgAqbRk82vMFYDAGsq4TLw62FcXJPJe5Z5pQ8qxN43pm3L1KdfsXLEqRMKPUCN",
  "key8": "3rTVArwVPtuqLKSQ1wKFvVcJA491NafYdZafJqwaDcRSYEA4y7Zm97swkbDkiSp3s9zrMcxaApqAtpZsRdTWmpNN",
  "key9": "3H2nm26fWq42eaDyaoPyXJgij33jHNYU5or2wrxfxgSV7gvCAKRXy5Y1sEzmxk8Gevku9KiPnVj9xbFpYMyhAKVF",
  "key10": "38bKaEcekowXK9TW4LmUZ9DCeSRmYksrPH5t2t66T2WUirTTwsgiUov3ShNA5KevrM8NJgnuX1b1PyWQgNPC9PCn",
  "key11": "3CKUo8LCWMmSTWvd9HEmi3UocWHCKZkBoEVQkafYxDMpC4Hyw3jZwGpmSGe4v4EBCTdaVHhbyNmUFQLjrnpzyA2Z",
  "key12": "4es7x57CfFYbSXzcqwm4qHbCVthHofsaeuSXv9HXgxYvsWzgmf7PXao1Bwt5SiYukS8b44Nua3wD3dEiHvfbSW1S",
  "key13": "39LFEYfHY7iGh62vE1oR2a4sT8vJNZ55GufhWhsfp8pbk2xzPu4s2MNwxfUdEHVW8jQzBXbKaYgC6xopfaPnwNVs",
  "key14": "25NDo9G2xHcxbEdGR7S4vKGi9yeFWYDmdFJxnBnv7a4kSRSGXUcjC4Suz6gUbMWz4kpYhN49v8PegWGpLe6Q9g26",
  "key15": "3WisN9zEHj65tLnNggFPgBxpYVa15fGyx77RXbm3YHbQq8VLNym1wrRBQs4CEJPnQkm24G1LmKcA3eSB628wdrft",
  "key16": "4bHwjDaXPLPC5GgDuwgwhjzJMBAqw5ooEYzVcyy6J8B6GjQgMX9pHXcg28mNksGLqWRWPHe7tcjoGBTrCamjddXs",
  "key17": "59wg7xv9KWUjPXUA7TaUZrsSs9zfJ6q2kxZmppt1p6rB9L1NrQ7rkuoBhtFoLvYNnD1YsHFoRGuLHJCea3HK8C25",
  "key18": "65PBKyAY2HB5dw8ZgjHDiPjfRoWEg7KH1txpQTtorKeKtEaYXRFPCku96qRWakmoorJtk23KDNP6zhXEJAVFb5en",
  "key19": "4VB4uCQscyfWggjcZVHbrN8yisP7EQaVFdBRZPreJm8VQdCftP79CjqV9FoU3duRnNTgzhkj4BN688aeLD3RDmLR",
  "key20": "3WfUhH3jEbX8FgLu8E7pJxB3zavchhcrqWGzAVz3KTyTJvUhZNesXBpYeD4R9CBfUgTPAWTomfb72trAo8h2udxM",
  "key21": "63FvgctnNVuH3P5775tHAH9RZHuNeWL5HTnxMK2SSVZD7Z112SZM9RwZiQgkunuVTTTTeWjhmkdNj75gtfWc66MG",
  "key22": "gSmjdwE9Vc9N3VuYzWUSmPoxh1dkf117PogbVS4cWFsBDy6YVmYNBiGqnQFX3aFu6xcf9wMLFXBtVySijoUuazg",
  "key23": "Ut1GE9CHAAMVGcL39Yri3KQqinXTDPmeM23wHe5iUBNeGR87ZdmUyo3ZGeCpn2H5Pcb1wLaLpqUe2aoSHPuboeD",
  "key24": "2EfpNHzqLi7BEefnyvpYYPSRs3c81FdQmWa8QakDHQBa3mmx9TGJaYJ6tRuwtHSeeTZMruuiC8y8sPnYi3XGvaXc",
  "key25": "43pzy7ArYmY8jMaCYY8nz4xnXSSBiNaqfQfarRFJ4nZR7UkqqE4MQ97RzedvvNJRG8hQLw9F21DsymmEyBZJVAiX",
  "key26": "4nQ9pwth4qDrziUnqtCmWC8JTXrd1qibtCBkdsWKX1avZjFmcc9CD1zg34Nw8geUCfPAZAHkQ9ge4XCTisSicG92",
  "key27": "4hPGD4XBLVT6XZTbGxv2eGJSCxPSkSPQEJhkPuobwqrbz1rK6yYmKboD88e5d2413yoewACQa1yVr92AQdBsjLrS"
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
