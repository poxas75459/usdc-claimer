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
    "3xtd7qquPNjJ3UUCWhooXefe5gv4fNo251CULgcS79cx6iqiqChzWcGsLmctp9HSFpgEcMk1erbyP1sju8aN1KRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gapbBq9bV6r2E4pQvZ28nNyrmwsHJJwbE9wv9dsDWu6Cf2QiLCM6LiL6NEqiYa9RUj81iQ2FK8shMNooCY9xgvj",
  "key1": "2oMKtSD64KQ3yfX1QCdxrS4ndeBS6u59BRnmesCBNKGji2JJom1upxVnVgTmmcVK3qvYbZbU2RNL1u49kFm72DWM",
  "key2": "4qeDYfhA2tgmzaXNDKLafGDH6gLQAarrjooAJjWq9sm9Sck8o6ArScep52MkJpKyDYrn3vjKFaTNo61n5ZFhJLcQ",
  "key3": "32YGnQaoyNBYeX8yWzaK7Nv9HStDF2etNu1ac3kechTz2bMLXnRk7SzP8pWic9qm3Psi2yhQ8EQkTMtFNATBFEwq",
  "key4": "4fa6UERZKCErDJXTAX4kx1MW4kkVF9tRwkzPHmLzMdFgtXusxRwJ8cJwDUTRap6A4EL23PA27A7RgdHBHweRGFcn",
  "key5": "5ZrrtbR2NY3469aZew5oUEQV9Tisbe37mjQfUTm77TP8k27HZZ44TnhR9cAsiPm6UQkXwRwdZ2rJKBkLnX7EpmEB",
  "key6": "2hUQbRGan2mqH6S8PyR6MUw2BekxGedNY2qw1aM5oR2pzqZkeVptdVdocXPCLGKPCLuAgH3ww2QX2bnQkq5q2qNb",
  "key7": "4HeRvFPxYtVFZ7fuSvktd7AWFQinfbQWC1Qjpibu9Y5VgGkhZUt9fATHXKQC7E8KVcz2kmztZCbu1mMhLiwhij5M",
  "key8": "67kfQnanNSVmzHuYHfRbhU7D7N1Qxo9nZ9JeQMnMcAsrzM3nvVNUhGRXL7FhiUg1qXc5ov5DVDaZg4d3qEGuETwT",
  "key9": "x5heEwwgLgo8HZ9axLcWb76DBDWhxHPh1xruNpBNj1JHbkWZGNcgWzXSFgGvYvQ8mRAn7ZtCP6DpMK1ovrqjmDQ",
  "key10": "4tRWdRh4syQE82mFjaJXGjv3kgnB9WAK6RYWYQriyWAAb8rmeg7KDYaKA4ipjmfyCTzYA8Uh4TdrirG3vE9uPMi7",
  "key11": "5tc82FjFirpLAP57RLVHhbrvLMJL3LsS2qjPJ3znHXchDayo4bB6ifgyvwMguWsFtTfqPvgigFCobRF5E95LmAnG",
  "key12": "65EyjT23323ssYHH3VYQEkRspYUK2xz1awh6oaoiNYwtXgWkKBLBWKpJ2oCtMU6vxgZUBdmJiSD1doTceaXrtQfv",
  "key13": "5YCCqD9tj68X7KC3FAJHWjyqvmE6aGx63HmdG9kKPEiHtRmhkMzqySUymmAmtcvbucCBxJH7mYMo2oDdQLZg1BeQ",
  "key14": "3uMmWuVhHfbdEHDegVAPTMxruJQUbDnjtQWLNHW8rgrwZzpWKa5ijmhPUXiya8p2KroURL51Lc2ekykh4aaxdqg7",
  "key15": "4TF4NHdNzkA2csKwmDe5XG36Rdcq3BCCEuy5V5LuVqjSqrJ4dgXULruQkpyYiWpeqDxAe8sFysapSnMtzzn9uCpw",
  "key16": "5jSGsxPPJBfFrNZuPDHavKbj5gjBJNVegHy3RX1ZUtFTqxE6tDTaKkQGVcNXgN4vtKzSpNSZEMd2naA4iVPx9hse",
  "key17": "45wadKcLqqvt22ixxCGJDpB5iSVebmD4yckbNpTu3GDUGUmGQjjDH9FAkhVPTxbZ7Fr4n9cxa4V82omoqH5Dykex",
  "key18": "46NQ22o5uL7MsCjAvmWis3o3Aw1jxTQVYMuxSYJLXiXv2tEBLTTizyZVgJxJV6XKzpG8CWSisyW6VEcqooaNF56M",
  "key19": "2Qtar2yziQQJB6hTzN8L71AjU1ZWyW6UjcAQVNKKte9pyCkBjXsgT7NJyhgxMgzL3rbMQWGxfKaSPmz8fAUsTj31",
  "key20": "DJ4n22oRpiopyuA6ESWAjDbWSrmrQToVYeY2VH18igX6to1yEUnZtXbunp3mjdCRqLLtAXbLkPr3WBJt7d1xM7X",
  "key21": "5zXB3u9yjKWwCzP87YyZ8vkn9AiA2HuS4wbTUBF1Dpmp7uWGLeMpYH1z4ToWYC3GB2eguWEZMjy85SBwXSkbFB68",
  "key22": "2hCCnt89SP1jAYFxJHHDxtNagxLPoEnfM7YgacLCKusi6ULrwNRA4rgfUvFGWPEBUeqrUKXWHokiQdpenPZmdWi7",
  "key23": "SN3d3M12wBw22w8y2drocrCeak1MjEwpNRpsXu5cTvhPM37JerkV6RNhn63FiUHAJ32U7FLrnLGjMN6yomkqRRF",
  "key24": "RVFuEHj5U9SobVkU8rtPi1YWWYnrUJh8oXkTZZcLVjBSsnTF59mysje9PJVqPYmjFYUgh6zxt18k8Qo4axupHCP",
  "key25": "TujCdj32ecXwZv99iYds45PPLKfYG1ZrXJTKZGLBFUb8tyUKAjX2NbFK6U58HSB47TT2Ygp6oCcFmu4kyCxBnCz",
  "key26": "2MoGsBD5H1s6q2Z3WbCFuzYyyNsF9t6yESuHHRTKRvwGwLE1rkUM96TZ91GXPMj9ut9LC4sJ62ZvzvM5rBNQs7fC",
  "key27": "59ABnRXkTfFzCdSTS8su9eLnMVzVFpSdfiV4xUK4ntUjp9kV86oPnqbtJEZwHqRfcycESS3tJ6u3CwPizJbKR5nw",
  "key28": "2BDJ3EM9N7Qxn6hc9vuy62CKbuPjTUVySxnqHM71FfmZMK2sgyHCauzLGK9pgtpSosvbeNvd9o6p1RzCSLaGSTvT",
  "key29": "DfJhs6FWKWwHpEdqzkZ4y1uDchpoxNANiPEFDbh3WJzwECnuYf9C8CAhqJDVZUBGrr7Pd6hUpux3cyuxmQYTJ8z",
  "key30": "qWdgDXWS6ZpKWPf5pfZfjyoeC2u1efojp23S8XM1oreh5v9JVPP5LwTWcUHkQuQrnchHM2tWzMgezxecA4s96BH",
  "key31": "61vGTVXBgAg3APpD8ZayByPE5DVE4XYURXt8VQR3W7v533BySgakGvURSkYzLVbX6ucVsLKFuMHmpykZ8ZdBsVnm",
  "key32": "45iVgJ8nhxGhcxKJQfGwrpHDyW4jBUUmkknWVHMoKUUSvDKFUgg92798mdt8SYjpEVVo3XPr8grEnB6HhXP8xHF4",
  "key33": "2Vcs1fBiCSvi5Uvi66Wsg1yQg6t9YTU8Rro9as7mGmxc9eenQfXNpYuZKHrjC5YqAmKKRqpCvZG1AivovJzqdePj",
  "key34": "5v83pWqJAxc1EZ3RuxUwvFM4cuZKb4Jx7jtVjSwrnbGb3bRZAv3KE9m5aBp2g4K5xka6NV58g8jUeui6JshzUyyL",
  "key35": "5vHj7KkDCYZ4Quvpm81pDQvREJxNfkathdzJumoyNKagFyFeyYkEqsbJCJ9pN6ESrBtBuaAdETd5K77d1ToNiHhS",
  "key36": "5BXRambB8gMxuw66q5raVuAHf727zhU2aJa27b2gWfp76EBfEU39xqBf2EAMCpBBfdujFCVDMVYiHc7enPmrKGt7",
  "key37": "3E7geaZDhk2V6ksf3yghGCGsjfJ4xAXBihLbV61K3oQS5gYN4oHE1ZixfAwNGn5QUJEXDgAcKGJnhuhzx2zzkxmu",
  "key38": "5LveHEzwoF8NQzzrZNwSp6mZjP51sPxdeRbG2aRRXekE8cDPrRUXdh2JGvHszGDrTMPsbFmjEadh4d3kwWhzdpVn"
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
