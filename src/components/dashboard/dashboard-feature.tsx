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
    "2vni7Dgv5fGiEXvg6uLUNdLLYnir2cNxLCtgRzPGtn9P4ZBDehX6UhrobSz86fWMYzdG6V7nueXJt1uF48rH55uE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p6tbLaMhGDx3hdoEeLQkQP9spbs4V6WHt8SNYw86FE39NNJY7pD9YxETSypdYVVbHLai9LQUj4xtiwxv15DD48h",
  "key1": "5mkm8mEWo6iScyGUmLBzPhV2bbFzobZCYUmGN7kyANbDWoe8jK3GfQj5psFKC8WE9x4Dxc9M55c1iMhALcp3fH4z",
  "key2": "5GwGM4PYthPg6Wj9D29HWx143DAVDDiDmZM3NUbMuitGc5tsbqCuC8uoupc55yazGSrydNZFFQijJEcFtuSAxqn6",
  "key3": "2fvsmN1PeM7FBpSCkyx3vS5yNFBW8U6Eh2JgeEVPtnLvdEwuTHSJLSxUCxg8ZRCaGHHQAn21KxKpREgoS9AdbuU7",
  "key4": "3CgtcXTdC24Kt1GB9SDjjUGLY2aTJLsoKn2gj3euP4KFQcmNg1F67vNaohMeoALWAHoXpLkoEcUXeESJbhNdC6Y4",
  "key5": "3MN6U3eaw88ZmavRiTjnsZzwm6PsNkGjMBTUkKtG4juxvjXiw5J1ZgNyiUqKmonoZMCVzeMFA6gviVmQBY2e65kb",
  "key6": "5Ziq1wqAg53GG9ib2Sms4yfjRTRZKzTrJUb8DT8WDQ54gayV41sgvDzicx4L592YEXdgfMfx19zTbqnDcvC9vJeq",
  "key7": "4XMbTvrHgcxo89StxLLZ6TYgmFvMPdwVVKMHNt5eibKUX5oTHM5VVWU5GD1P6rmT2j6hPthPrLkHN4TCcf1YgaEB",
  "key8": "YsSK4kYAZzxCn7T5wWMx7DXPvqibeFXEZYMVG8k1tYV7ZfZ91zZK7bmaPt9MCfxRkK3d36MVy3JyG3RuUjMAo66",
  "key9": "BNuYdReioU2RkqRk1vFYuxhVN5bbm98rU3qPUfgw9vhCiUPT5mGfYt63QLeajXBd6F6UVuGuCJgbVzy4JLsvfrw",
  "key10": "iJyfLce5ttFvGxXSugDJGhAxjmyADJGZSLkhhxrZrBmEae2HvkFxzFvFx94scRCBnfBp4dVo9EaiXTPWcD9T7bE",
  "key11": "5KFSytFCtqZa1A6KXTsULRHP58rivQZSfb7rUJDjJVWAvcRNZAZRgWUcsYDQdosegDzwgkC1iLGzqd5PgYyAp7hW",
  "key12": "2uaKsq9CsBo8GDbiUSyLFNVFpQwXiKKdR5nhWwVLmw513jw7S211xcvfSW56jqVvmFtdomB6aEPvagSq39CzjWKg",
  "key13": "2PhnC4BN7NonkwN9LBGcZDkcXQK3vQeo6mjtL8UTah9SewtdCqVQHG1KAxn9Wdx6GhjjZJYCfRJayFU95Ji3YDeH",
  "key14": "52G2qy9GhWPmvrRYBvTcGptzjYe51eRuzaZniz9SAQhYH5AnMALV5NaWh4sqDhz5xZXBep5YT5Cn22M3snFgKM3n",
  "key15": "4XhPkamKQatVu4uawJ7aMYgWiS754gwaE6uwMxPgcfU8UBUxHkXVVyTqBJioEq6bzuYfTEtLnydr4VCtdq6SfhUP",
  "key16": "4rMtVoxFAGqm4GUq3eSaXtFkCQKamtCUb2rQqFZ3tGHJnqNFCZ9Dq84VSNgp8unaeT2ghmriwBnPXDiCwW6qtkQ2",
  "key17": "2QEE7jcxyKsGRS2LrFDtftN73t7ysR5bmLASbVDLLK9599cSaThkUJqvJVMeQmhzurpaDGfLHSBuvPJijWN2xmLW",
  "key18": "66dFgAxsLJo1d2EuP4kCLd6W6GL82KwLSwjsoKmbfMs5iBn95tmkWcJxKG8d7ZztgXTzK7NXLiqzymKNLWLjDiEd",
  "key19": "51ULA8o5KXJqNa1qQC1KYv56qkdpvmEfSo3nNZvYrQfhF92Gk7bKoRu9uC83EJAet6yMWxz1yXuAXTt8eaYLNz2k",
  "key20": "3u8J43tspB3RQR4g2Q1mpvHAta8ZH2Jee8U6PztHec2PTuqkHnzFENfgPtEg7W8jq726ZYint7bjkRiKUgo6jiYB",
  "key21": "5iuJnPZg12KFiockqy62LozWabwgeXi2CVpfpXUHV5WGxCUvMuKmwMMZZEKVSwGaMw2b1oVQoEAJQW6ZXFXepSs7",
  "key22": "58JscvCTngxT6PQ794q9b89occHFzr9ax62NdSwXYsT6ejGCAXJJjxnPECs2hetPpJicgN5SjJP1nYHjm3cAxbgU",
  "key23": "2TQ6LetGmpMLi4b89vbkh56s6acM7E2Gm2ju84heADjnHPLd3poNCfzNgY5iTXdQDFmP1pF7ERXHaTVvyjxCHzyv",
  "key24": "3yypFKk5tTcP9hJKoZ6J5ajcBRezxWnHhuW2MVk34WXVsGDBTEV31zcWTqVSuUYbd8eTGd1sErMRVE13ZuMm4qSv",
  "key25": "3onqJJhZKsU1tAqTzx9xKxaaUJyYNb3t6jNWysdAnuFTR3GSC7oMEaXVUqPN7SiTuXCdLNxCyu8n8GG2jYmeLNh5",
  "key26": "M2W17mTfxe34Qh7fPFTxMiBAfhJQJVCpFrB2XiRo8jyjRc2ucjJ64jo6no1YGLPJV1rewGaAxw1BBkKPRdcyavr",
  "key27": "5pugeZc5jgdxfxgfQNGiV3M3bowSM4NgoTzqjHTnvCojsHbNsusWxf7Hx8ocAeheNYpmFzE8S587JvYfLmmPW1oD",
  "key28": "2R4bKFsTjDD8Q4Jfx6dYNLHPa6kmJs4tVgNDy14MsQcZB2UedVXWT3htu1KxXNpzqmUydjipeHaMJgutMQrgDE4Y",
  "key29": "31csfvLDDNmsZTQUTsHwu2strPkMRa7KHEx7apZizaKXCSiz11UHkwjpPiyZehadDJGaaXVCp1h3nHn1Kxr6o6mV",
  "key30": "z62VGjZ2ySxmpwdPTTyY5QFgrJvWrF5LBniMwcX2B2XBNTAcVQFvvbW62hxCfDUtKkh4HrtVGUD1FvqM7ePtuqi",
  "key31": "3opvrcQkGHkMfauMCxfdfTJskZYJGPsiwG1QkP3i8h59jRLQgEkX4NiC3nKNJBEs3vZMQaqKF4YotQjeEaK2dzF3",
  "key32": "4PXEgdvGNbLQ3VrqyZAjmfojxnTvK7YRp3DoXXHeVPLnnxFPpJE9SmDAk2b4hF9JGrad6CRjpts69eF315trkXim",
  "key33": "oPEmthK4povh4cyQrQqDxjLxpG5NZKjhP19rAQzERWvA9rx8qNNn8GL8fexQuXHF2CKP7gnwpV2zP79dv3FhDFk",
  "key34": "3RNMAdcmpaXSVoqiRqHuEzFR6Z2h7sHgzHTP2DfV7uvrr7g4jqdxpoTC8R56DJfPv3dtJyA9gnwVFM4XzcvqbBnD",
  "key35": "3tM2QT6sZi2riv5sSkT9XHvXs68qk2Vj1KMGajKjjLahmFnVfmjV31CqstLQgwijU2vAtKxnXg2p9dkk64tMJPRX",
  "key36": "U9CdAuNWH2Ed6ft42FZmCW4JYgA6V2Sfpeig3FwF1aBJgJksuZggYYDx9UJBsY1iwoHHN3TmDRY9Sy8Zcd3pHVm",
  "key37": "4fLMd6Ju5tLKic4o8zefURy4Wm7Hf6FsEAezpibJd92zNms1PkEnKieXJkRJyXhi1rdvABwQECkEwW3PQTJjSu1Y",
  "key38": "2CqQ4AEs7LJRdfeQndczaBr769DJnAdNQRN1AukynHsawXKak6VkGSc4fa3ND7t1krAGuMskPfNT2SwJDzV3G1Kn",
  "key39": "4wyTpaz5ZpMbvKgkFenQgMRNV3iVk3Y5Y26JqtvJVCNasgz2rN85NbjE6eVphJ2d7rcSX6uvsKcpvRstx3Eyz7Em",
  "key40": "2AXdMHH7ZFSJ23SDnWvcKayq37iY8uUafURDkMjtk3SsqqRTEYC7oMtWWbpxEHL1pVT4ukZ5ajwaVT4KqNZsfJkD",
  "key41": "4KmayybBzS4mufyutoFFiNCx75hP6jA3sCTfp45CH2CLaVFiWPJ9UisVHiVebujxzEMoycBJgkWvweRUZ2WJHW5Q",
  "key42": "2NzGQR3efLTjN3akwdyULpT31UJFQBDMqgVFJ9qkUCqyNyE1pwq9mHuEjpQkS8ddgtNQEXR7ZpNaNKCFswFz8S2G",
  "key43": "3UAyv7pXzEhea9W6sy9GnKmqJTJ4yA2dDzvi2FPX1d7QbtsMaohumJQ8Sxbb8PELCmGnjNSwht8dL8Y3jFs3hTRZ"
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
