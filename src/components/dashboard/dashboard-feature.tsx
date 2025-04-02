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
    "2sFW7CabEjhyyZAnruFBHtLKFX6U1Aa3kgpxvVKJtmhnZqXXKjKrti9z4EZE6tmH7nHiFu3Q2B2YU5mJbQxXgixz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sK33K4GsFjahfbc19ip94iqA9g3Ffisz87EM8bDY9pJ5MfuvB141uezwiRJu1BfHQn2PZpbyDwZs8dSbzL95Jz6",
  "key1": "4s1binBGBDtQrMKbFFo8B55hmbYPyTpiPnPPWQiT7UF3h3v2NdmzmwGUxpFsA3zcQg4skjbXzEGxmFgFtb6uiQAu",
  "key2": "4ZdmWit7JVapALRD311LrgGWayduWonm6rczYjhXPscCLYWjGY51ndMkoFJGm2YzpaKaF1sMLJmfyEWrq83AFTN5",
  "key3": "3XX42GLzEyKDUHsTZJprrVX3hQsJeCYyTX1sPnHDJvmYjNQz8xLryRWNeC139qMXbvPSdL6rStrXwEdgZR2MebYM",
  "key4": "ynWhhpWYiBJeYESW5KCHwnpFUWj3Ckyvhgna15yzXCD6Nng4PonzUz196EeEyXeynQCZwfaTz26bMxt63KNBwBg",
  "key5": "2kRTZhnM6774g8AgD4HmZsW71MR1dg9LAZa3EkEaz22fe4PuG7h3qLzsm5GPtrPYJBDvzDYzoS1vugDJz4VhG6Cr",
  "key6": "2RgBCmFFXh8fDeeDFxuQsDdgYCKeGHHrYidbL7C3RpbWLw3cNx8AdMfhoVvf5Tsruebw7ETmLdEFCYH1g6Dnrk7s",
  "key7": "2MzLXjxYTHc3qP9yK3wYim8UPFqpSgTNY4gzbWjN9QgeRY8EM8g45xcec54YkqfsiQ7KUXa5NqMCPYCfj21gd9N6",
  "key8": "4S9qYtsvqYvQ3icQqnVkDTgefGaW7bhmDAw6NXYhf5yijhxU2R41798ND6nMBjYfrcusta9w6WpwHiMfZypUD38t",
  "key9": "4n8nAazF3MEhzaG4LEkYtHKgyVDDMWpbmq19BQfsKBss51su7ZSHJf2UtKseZPTi7WgERsmaFWonm4wyWoTNvaq2",
  "key10": "zhvMVmrQbi5ngDq3UgMd5q1w9SrVvqzNM3QSNvXzS94qFo9XwWwEj6wYnCB67Zp5TwZHBnuRs3MrGNd9YSgxv1X",
  "key11": "5LsxhFbUj6wiShgeSsmkrVRXb7xhmX5SzrQvAvFVVoHmUfp7iyFRBwcK4o4g37AA7JSsCMRpwW9B1U9Sed8dSKex",
  "key12": "3ZwkXA6Y4N336kYM35dYeJQ9ifsA1yKMCKjCs2z854a9ANmnKoYrgnZ5pRr5pAn4ba8EzCuAXkYYA2rhxVAeHvuG",
  "key13": "56qLeSifD4UBHczScr6rarUXRcfEsFK5NvcxCPvyyJQh7xvGHjXUwkporkJ31KbWMhWrb5XgbLSaoJb6pBvUKefZ",
  "key14": "3GsatMGbYHEUby9qMaYfFi8fBiDJZn1n5GkmyuJvic9cQJp2c62j6T4RPDZUKgJDLSG6u8BvgPzvwbGtmDptFcca",
  "key15": "2VJmKy41NhoTDmHqxWo8uQfg8jRAw7AuSoi5yztAzxVhnU6pdathvW68UDtRsfDBa5YVLLHFyGxFRcEEKC3aWqS6",
  "key16": "TREbHCCTP8DjYaRp9r5tyUMGZGhR8UwkKJMsf5qR9DGenPr4sNm3mWWvcn3S9zjVd3CPs2J85u2MEXnYZuhX2DY",
  "key17": "2XWpjCDsGDm5dpyvKQKDRMGTMqgxNgN2vhdsfhfw8bdXwNPww5Vsp2c2AUNxNGCzVeh852HGH7xSAabE6i5Pd1jY",
  "key18": "55SDdyDxkc6S7YBaUj2SGGvt1CF58snG8LzFqCteRL5dVeRYmtpV5u61rVJQKwYCV7S8vqjngyMFjuvJ1aJE2EqS",
  "key19": "3cMR2wcQzAiw1yPjL5r6pE7DR2a4nJxZ9m5Zxs7Qdbq6emhJrQ1QLNt5TjLt5d3swF8EiUfMnKaWy28jWMioWcSe",
  "key20": "524BSMxfuTfmyZZQsAVK8rtiHAbVgEXo4afkwzuWykGQZh1yhBb4pVESnaKPJ1uyvvvKic4ZZ8USh2AfVbZoPPjh",
  "key21": "4sUMon1NNxNmhAc9zf4CSodLVPZe55ixM6ugz19j2CyYmLPCTxqkuCFgEgFcabga15CPGGxAtoV1RDHUe8MxYVKA",
  "key22": "37wfKJVLLY1oGYx8TaeFHKZXatVCmGECjYutU1jc2YGa5skFtHgAwSLGSuXq8qF71EG7dwVtaG1yPHDDmUfdyhAt",
  "key23": "3BTjJZVha6WwfgMdzrb9MkXfwnN5uWYTu9DRGNcN9WYRUdxGRnqkDcAMVSsUwy12ZVKp8WM7rJjMrNDfc8QgsEd2",
  "key24": "7DD16xQjcztVKhnJG4kxZ7cfyz1KiincFrtQBpUqvAzUE1tYpBo3SjM1rSyU2ryyjCEo5sPyBH2YDq17FzXTY2v",
  "key25": "5gbQgXeUr89jq5QF2ML6sXJxfQAe8KpRPxRe1AHqbvtXsEcLSfBfG8ECqjEqPqMgt3CRhkfteToPL1zFGYZoiHJh",
  "key26": "2SvKQk5hiXt2dw1EPwuMtba7sbGJD1itNK4aHF52ZUDEya5ys4ZKVxDZBuzgGQNJFWcetF4nCfEZpUGbZPAhvDZZ",
  "key27": "j4QbU7Ko1ybuPqPurYkyyHs9mGQZV9x7m8PR9dTLPpifgJ3JSy97zLhMGzPHmHZDHZbvBhVUD2MCe2zbwjQAiEU",
  "key28": "2v2kcBJW1zSt67gURvLnv9Mw9ZeubnrRJRFrzoBx3Hdb69HyJBZDRwXkKBeR7oD2DJpvif74KWs3EHxQpi7G4uep",
  "key29": "2Z3bXMQGKEaYxtHQBo5P9ohMJtRek7uFTQjvdBKwpQKezRTBgsbBh6eC7HAXXzSMF7m3DHAfPsauvXzTYshCk1kT",
  "key30": "2QjKaWCBhr3nKujbCYmmuxFmwBjHHTfFeCPJvYMDKXYaLoPncCpAhHepfpk2mVH7D8gskRpefytRiVF8X26xn8WY",
  "key31": "3MUfXbNescEBbezEJAv62q8Awhcc1gGf9WuFrxn4mfGLXJfqtues3TvG3MJ9ekksD29Twjd1nZYbLGWQgg72kmZf",
  "key32": "5ndPcd7eNqzWx91F79Z5uxhb1xoRFBtmavPhrQJtgCNKh4EBvxS59PWsQjgSaRvBbHeC8RJ8Ej56xN4pkNhTm1co"
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
