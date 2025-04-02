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
    "4VCTpsGRfC7Pz2AZgStkwyrN26h1pnYB1uVRd9tcx2C9SZ5ynymp777YENcSU9NDNTawSVnuFH3wq4srCwMoWuQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aXmtHz5ExN6txbLccq697veJvzZn33mfykyjHa19BEhtHbcdcV5TfNf82WtVrSnwpmjdVmkrNcYeuC8b5ViDw1Q",
  "key1": "2TzNgYSwBD3wspPqQfCPmySagBMAYavpMsLDauTVp7uTdjWTY1kh545eMZQZb7rmHfyhykXhBxuM74qZLbiEG8gd",
  "key2": "3AweX7ktPsjwbwSCscokDDRQgyjQuAkyjtzE8XxmBAsMLBmvXHpez5PxGvSodLeDySQJ4skV6puajEr6L9UezXWA",
  "key3": "4zkwnnjjHjGuE9HTvdNERYdMeVeTNMNDfA1xUDs5KqVs3EKnaUzz1DEa2r8GaEB832CUDrcsztJ3g1AzgCrzsPqu",
  "key4": "5v7tH6F43L8fPoC1jvMmsgSHaM2YTg2XRibTQ3zgGdqttoA6P1cthHBebtWhPdUcPEUjEaoqrkhpfV8S6gYqRcBF",
  "key5": "5YS1mAHxiaQuJEEaPMNEvhUhcriMzakPMH5HwFEHrsuxu18Uc9jvpD3kuvqFhvtmh1JXDK1rtqGEPFxbcjijwV2W",
  "key6": "3wAg2YDJ4wp7otkHcpKEUMpxyLo21rfikmGgnPgrpciZVXxYMY2qtZxru2F88PUEf9NZBrJgbd72A3rFT2MATiFK",
  "key7": "65tVaSpunnNAEKEBn9HfgoQv11VHrZkE6DxSiw8DgkwCnqJet3WdYUVDTjjtrGAzynah69K9fYe9zQPH8YmR6udJ",
  "key8": "2FBGnWHg1KcFj83N79eCPWca5t6rMtcUBYiZsRbuFgN9gay7ewsiUeZARSYgcFBLq1gmPTj4j8LzF3dXHKc5Y9ut",
  "key9": "4FPn38bxexyfQFWT7PCmcdeTEuvWTQTZct8jQ5BJ5DetZYYiahCjNdz6kzueNUWDaDuVCCoFUtoWFQnstJY6B1Vn",
  "key10": "2YSuiUPBhcwhR3qvcUJtvfxKvzqwDi9cFs3gih64WLHW9e3B4rHMoErZt6oqzLSLcNCWou7PRfu5vdN3QMr9wwHN",
  "key11": "DoYXazBpXYZu51j4MakeduVCzK2eU7XNkoD5THJWDHvWVgAQovqfGwvrRYX7B2iV8jskxVMwe5ZV75dvJwBFpEU",
  "key12": "3e5RNKo1knKovLYW2zmRqXJEJRTt781xwvbNk37nZz6BGXLoV5XS1ukzpbWk3EmDt4JwXonPeNgLBRQvJDsWe9Ra",
  "key13": "2MYnuhu3ey7ncCg9RtgYhuADLefFWyHf5cwPobwEAyuqWQ7pnNvc9mEgxKowFxjjcPLTYkzfho6mAsVU5KUK7A1C",
  "key14": "VsK58L75K6jdbCj4aFh7Z2DSKcGfFPjiUvA24Aq87qGnYnzV5DbfcYfPuxMYG4KMYUeiBWUXT6VrCZE1WrC76wa",
  "key15": "476Rjeyoa5jrhmSm8MS6RBFvjgqjy7XpX8xfiNWQd4uvAFwkGb1ECU8ycWYBYQtRhszuHoMJjUSKyX9hmfwYEbMU",
  "key16": "YEbuxr9YNTcHCzjzAzc12z2iStTyD6zGZuVxf6ER2pasPno79H9o3HCkTebR7qjmG1eouKUTUAEEumoboPpHLhM",
  "key17": "3WiyGSy7LnGNBU5FgVMrvfwVuep6dqPGjJoCe3xqShBVnLMy6P5SmdLieuvYyp6T2a5jVygJaBvVgYv7qfv6bDhy",
  "key18": "5YYVbhohnTi4wGHAjVJvYWCpa3uzRpB32Q9AvGNV5HXLN9SHGiM7GeaqJg93xmCEZVyuHZ2MaKCz4poKL8cVmCrb",
  "key19": "3TkkSEBoqqQuGQVVZJkpTvwEpfPGJHAsiMpHrtZL3aR4JGGmuSEkwoRYH9RmTRH6Z6SXZNBi4prgor6Mq9v3j8qF",
  "key20": "2fs1riZowsiDMrvy1uUbmmQSNcpp48LQfqmeYftD7qdeyD8chCrpkkMzauYv7Bs7Cm8GzzkQS659aXv4uZec9VNM",
  "key21": "53Gsminc9WCw7niEz4wTUvjn2d8W3eZUPtbaPiNXpxj4PidmiesYxz9EA9jc5LM8de9y7pPfJ3vGuPGsGm16ffyu",
  "key22": "zfD3UQpxeD639aeNcNXWWZJ5gZryUP7x7so3BMWfopjM4myhiAzVoQXd1xuPRp3V8YWb6GfZwWVGaqLP1XQgcZ1",
  "key23": "4uujeqYdsFgFUAx6TQg4XJiw1mY2ovbGqp8YSgqGw5z85nRy7xMCSuuWsPagU3rcdy673fsCukNvDt1ydKH6Ug94",
  "key24": "5oZTrF9GASckYRcR5HRpLYAPN7Mc95JEYxx9BCahyASZ93jFsp6A4oF2Fmr6Lg2L8P8rLEWg96v8kWzP7NAGAVes",
  "key25": "Rd5engxu3Cj9vkxUaHcRbeJpWKmekB6GmqpX7WVBwySx8mEFNYyMc2k68Go5KWbAKagqtgboafU96EEfEfnKDKL",
  "key26": "5kGqF1rp44xdBQcC7qPkqrNM95PYAbgBfka3HuXRhApZotVthxDFcqPPG2GQf1XFrFdnNqf4hT7DMDajLkKvf4KQ",
  "key27": "5WoU9CSwjduos61Uhg6xV5VckwerWNACCNMiwpsJYbt5NDm5aBvEeKZWN7PwrKmBdmfMmpfUTDkjGvtUfiLjk87P",
  "key28": "3qvDJPvufArNMdW3ZWpx57D3YJwzemyhkCx3obJ9KnStcTPZRcvenvWqwiGbQVNZdn1ptUCJjJQiQrQ9Rqv9cGrK",
  "key29": "5awrBgsH9ykxyLSmasGrv8Xf766JVN8dyJaHC7hoE7Zaq8TcJT86VsiQgvpuS6qCEYC43HKvdLd7bYheYxE2yZA7",
  "key30": "4jsUN6p53TdDpWCauHxnJ1ELwLgqWbA8pmAZAmqivPj8kaGmsFXQwkx1nmkkgvEqbqXtez9m6NVsoBzgWUiKN1iG",
  "key31": "5WQCzn5DtdJFS8W6U6chGx3tcBLdFP97F7k57N2dwMKwKKhkqGqCuZouSKUx9Bx8oBCPnR7P5fxxSCSQHLvi2HHd",
  "key32": "5g7GXe2VqrU9RMNsmhQh7SBMX4KCSHKN3cBTkrosimiWksiTDZ3bLMKZyJj5Y8cTusSG8rEKcyLeyT7jmy4Y2WoD",
  "key33": "4jivrfBdtGBafyr8etwVTjZss5crhWf16rgJ3KhZtzmzdWjPRFdu4Ph93BibAvt6d3yWs3SYjXw9uRdEQNosYC2Y",
  "key34": "4WSFGudGcwZoxNAAKAKnScBsayxRaowffDuscaDw4PmFpszAY36rxVbnLro47dc7amvjXYv6ZD91Hj1WBojbZXMs",
  "key35": "5HrDb9wi2rYAmomScESwDPoTRVd8ERhEWjDngJGAZQVBQvxddPkMZ7Lm2MoQh5kCFi5SGdTCEDCyU1sLoj2YetWa",
  "key36": "5PUrGCVMQWWGDd165zisxYkBq13qvhEZti7o2hyAFqV2Nfa5YvtMTySseFMqhENi8zTTWpJwr8UkdNeUSdX5Wfqg",
  "key37": "d5ZoeyNjYvvoX5ibqoXrne6qj6sdvG9anE2zQF3jEfUqwQpaD97fJ9ySek8Ukze4jAjodBPh2c7v1FU1PYtLpUs",
  "key38": "4bTvQiibzXHmsCQGwqGJsBF9XcPYEMKPHAjB85CR7hrwNeMRkLX9jNy4Y6v8Vq5ZtbhYDZgw44yMQMmDbKFpVnad",
  "key39": "4YdR9S9iJLvA23Q4B5apRRQUjUmzJPYmjwQ4ydjLd7rUXH2AmWehmz1DpRfGUBUPm33RVdWymmEsaeeXt2D7M3pV",
  "key40": "3J9QserzdYS6ahcNGDJeELPVNJvVa25y2hybV58EjBs8yVju8wJtEHTG3KQE9Ay2zQ3LDefFbF75hpfNXxihrhFe",
  "key41": "62Xa1N7X9meBHMuSX8ubAGRtk8QP3hhzjVtDUBamxCRbYZnanYBXeEbCxEeFs7VpqkJstEBAugudM8WatHDksDJV",
  "key42": "2QBxLXKKLweZUn2fmr4zvSqdtYSDktqf1WJZkakFDPnrpA583gtkzZx4SJV22yLqjZqanQ5tFLjkC5vhj4GzpkYw",
  "key43": "ktPbYPZnD7vdMywPxDwt15s65ye934h6MRqpbLxMfRquah8X37xrBcZLuJoJG26xAGHtFbyJHkTFgEH6nwWnTzs",
  "key44": "3pAxdNS8vgc115bATZMtv56RrWHb1ViJy7LjnJtUtGabhmrjHP6coviLfPb9BicyL8gi6vWe2XESWFMFTrsqp2N9"
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
