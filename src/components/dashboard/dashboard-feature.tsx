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
    "5V2qw1YgBGmMH2Pq9WBEiRaHx5VdDEpAU2rCZ8zp6TwFJrZ7Sovr3WEDf48QsxpG5DAiJdsRnfj2GAVHSE1rLVmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dtqTnnUNFcKJQVP6tKkh5Rn7JUaB2NMfvuxhGVWiXqVaqugmPbxXLPebPCHGjdsX59ADnFvvFTVEQHvpwKEBowX",
  "key1": "tVitFvhszMuDougyXW8NQb53PeXuAZhkjihXp2PEfZXnTsyrmRqiiBpEmz1hGBeeZrWQBd2G2cyycs6AK9vuzRw",
  "key2": "2b6RtahVsiLndoKzFSzgCFA75VSh8uFFnqWpDHXkiMrhz73Ryd4teye5a4kReRnueGFKV12vPVrcD1WHGVwd1yPB",
  "key3": "36ztCPqA4saLDqv3RiDdAmibYyC3BMbUiv8nAEM1gLYUTgJ5hftqYMDY954t8r4pFuWU6hX61KAbn6GpgV3JiJep",
  "key4": "mtDEchj2xVP4wFeavay6zM9EgZZ2e3d7xCJGqjTdMyUyfBVjuUWbBrzmkiawwDqXtSZLp3iCMtquAez8oCaLDph",
  "key5": "22i3TcRDPExEhQEt8jkqJo6YDt7a4nKevkwVXNf96riXKKa6jUq3hcxpTvrbvtKVE29CoGxgoMgLtLyvY4sUuZPN",
  "key6": "4CSNZPXTSQbBihDm39sS9h1Z7omFMFpGPQG2VXnpEovvT3FNShdz7sHFJ3pxSX48F7D1giUdtKwGRdKKLahxHfBK",
  "key7": "ppy9FLU4K7RuwAz7ewSeNMYUJ19rJnQxfAn9EyddbK3NAermDXiUjG67eoUito9oW6Kvjhgomn72qEBjzbeb45g",
  "key8": "44i136XBP3E9qciTbQ2Su99jgXF62tQgE6FCPWdZm8XdMZgfpHL9nuDPn8c62D9SKhhvYSRXh9iPGamsb9AN1e1T",
  "key9": "4dCNTd76pRSUmTTN4c46rFLqhfX1RpifwG6umxEZ2CmGUCsSfxaam3gjtmbmH7JjaTh9uj7HzNoG3MTKQWFePWmE",
  "key10": "cjkie7JubMABpUNQQmexohELZNcDXcAeiyU9mwfsuinnBCyB2if2PFW6xx6Z5FLVyKA5yTef5M3Jh4jKJYAQg2R",
  "key11": "3BwyyK2ELfGtV8T3AxsuzBp4ceL5qp8bihJG2JHco7zH13kdSr5QAfjBGEcj5UymdrsxaMzSrBACLRYfq1mA4dsj",
  "key12": "5UqRTZ6TWrAUTNyJbf4Ri58fJ8CjwtccLcGGxahAcE4sBu1Gjd1SkBXwiYBP2VtPTQkFcCcVwux6D4rZ5vegUBtU",
  "key13": "Ya5e2ApC8uM3sXs4ghdYi2U9oHPLgrQUmWKzTmh1AaakkLwNNTJDyfQGanoaSfRCgMh5jNw38mDMiEFdNHiGBaR",
  "key14": "2PJy7RUs7DK6qYpEfqfiZtcnDXbPq3scJfjY25knPnqdnhjQeTebyYhmfWK4CgQgUWWyDqvYR74vBL7UWFztdyLg",
  "key15": "4ihtdHqGKHnuUHLyhRPuWA6PDJfabtm81JKxXGQZD9YmYtqQy8tHSK3ini2FXNhMREvHMEXhdeAYTR3USLW1RB54",
  "key16": "5FkHndhFgaRXR3AZukKzF2uqkeNAAvDNcPcHQ55Ado5E1F9bFy4xnCL1eYVJYWkUvYeMjZ2PXYiYUC1XaR1LuN6c",
  "key17": "5s7mWPHUKvPsm52eiPDpxqdGbVCPecX93SVkJ4uo1tz6sjSMS4svADqpfHSKwCnLv6LeFhXXh3FXr31YMzTSyZbB",
  "key18": "5KMfft81q29NXPYREroXFMK3MqatAwHogmCMJAs5EGyu4Mi6i9ZeqGJJuhPGWmQK9WBmj6hBb2axGfvz4MHz63oJ",
  "key19": "2Bjc1H7NfsucjWDR8DiNgx7y4LiYKCDpoRHsspiXHcYeAJB3jj6r4YKsmAfNKvyHMC2RL8XHys9GpMrQPzaX7Bpp",
  "key20": "3dzQA9pHNG45DoiS4Yb7hgZYeLgPAzKu4US9jCzz291RqfcZtxtbf5bY8BgHdnNJjUvHF2errH8D8q8cCup4H8oW",
  "key21": "2GqznrFCfw39HnWkbLyLeH4GQwuStKmeEsFbQVwgQsvEWaDaSBbHbhDjhKq2djKnjZP8DNymTuL8Jo11PTE7i6Kh",
  "key22": "3W4oNDo8xCgjLD9ej7rCu6xYziiPESUkVorWUT9YytDVE7bs5Lk3oagfHfXa37nmRZFx1XzwCjqPn4sACvfhPraP",
  "key23": "5HEucopYdqSKRd6mtMY3K7J2qVnE3Qpxgu1gMAQNzvLmGZ1CuC2LbJCMDTizDErzTTrhmLG3d2a5YYMAwHqLoTjW",
  "key24": "5S4Mawds8UPLtdMUdYA6A5WVKWNfZgykE8K3SLsUUukYk3AWzXAkSxTkvysfxqDypHBm8PSuTLdVAGobB6hjsnLV",
  "key25": "25sXmRaeVigZE2vakuYNuYm6E2Q32fY31g7Mqm7Y9GCPchrvY8imJ84Mkk9yPeUkUdr4DsEU4aneXEy8EUPdeNqh",
  "key26": "2ncgQTw2HnWzxhxG1gFKgLGiMjv9cdEoGjmdFhTMcYytgssYfjUbQb4usb5c8RqeWd2jPg2eCTVpxrgCgp82QLgQ",
  "key27": "484TdJUPYeXotUEjWU3u4zrPknJLN3kwDPGHn7v5KsPSpLYRJcj1GrFm5BQdt3cvbbB1DdznC7V4vF85d4cdPyaH",
  "key28": "3rHatBnYvUDs6Trdrw4VRFmUz4aiPGqugLWsATQhGQb3QgcQRQQxkyQ1oG8g7a1aJYWSQb4KXQgJxwBdsTSNKdBE",
  "key29": "5yzfRvuN5gg49CNQDNsFQ6ko25QmdVRzKvkzfR8USUpm6pSDC5oKwCniAJNEKbscu7BXUDbCVv8QfMwqdTzDcgX4",
  "key30": "3jyiBfEdx9reDWnK5NGh5Yb8ggNdZ2x7m9LMTpUFfmG52WekjMKLKh3axBFntUUqGccUaRrj34QB3uH6td3MGArh",
  "key31": "4epNN5vMieExCyTeY6cC7nZeDySjCRKipESiwSbGW4kBxiFBfFNyTjTZfpxC5h8tiBnY6bd1MgzfxaQxD6TJSKyC",
  "key32": "4bRqDSKQDd27Ca4vvvDdrvnYwFegMeYvBjWXWDqqm8nmv889ckp3vysfTrtF9AC82xfV3cYm2uD5Ct2rpg4kVmXi",
  "key33": "24D4MwcCS3ZmYyLeReHsn49uPFf7JPHvrnUhh7wDGWVtcU5WaNe2w3LnKCpXuMZS5N3a6zZqWdXEABHaV1aW2GVQ",
  "key34": "4K41kjUy8UkDmpPXt9T7z1TUYVUzAJJC8CyYvqESYuL97B4vbWL72PypgxmswyQ3UfNsz6x9FpBawJFiaXPKVZA8",
  "key35": "3Mgr5t8CoQNgazLniff47G8onxPSv81T9bmEmGcYmr2wZMQ2ENRy64u5BUqEaMxXmZ5v44mEqraTjwrs1ynzHfXj",
  "key36": "2WgC7iCS9ztEma5YAj8zCBLLG8nqoWT6oxWHM3UvDBcjcwcnAPvZ3QgdakUBWzhqX4j9KvbjxkxzvsocDLPc52bv",
  "key37": "tGnD7S5dhKD9qqEii1KmpfHBrYNnoPb1rtAkZR4xVbzPuYyZa3QHLorFh7gUDESX8DAETwU1ZHTVysbvGNx5qMf",
  "key38": "43QsB9FThYodzGsJ1DcHLSVrHavxqSj1boWfndisHSnog76awVnvGajYFX94a1kD7CMWAknhVzr5h1kRnpjboWQT",
  "key39": "9LxkvGuH1FC33Q9hiL8woMBghnZvhk98jnBu6UVfa2FwUgRY3EAsNfW19LZPKLubhukBivxZMmyEaVmLcYLCv2P",
  "key40": "3eYFtETA8jQdPLYmUDWfB9d7qD4nmFJnToK6zLTiGwmfD9jBLE9Uuv49FheZjeUepEFAGeWqR74kRkQs1sJvKU78",
  "key41": "6ZUtTS2dQ7TvnBWvDFjPtcGdEAg7WVXfTwsxegbeULhJqpPTqEazP7SWvefsbwHkcbzodTmZvMM2pYWGPWm59GM",
  "key42": "3UtL4JgDq2x92mpy2GkScLwFQJizzsvuaVVmhXADNwGxoaSTPyzjywrLtRgW6vPHYVKfAyg7grmoisZpiRXdnHBs",
  "key43": "63q15xdouoShSem5PtAKzRQycGDiXuqbyzkFq2ghGikQzqWLH6CNaiAdyRZBWNHMGLKUnfKL2UwZxcivChUKH9Sy",
  "key44": "6Avi1Kx17MEitohU6RDAqvqosFNbDVpQrNQCCP9tVkGrRNp3AQx184Q2t7WT4WDcPM4skUwY9KdQriuA9QzVcqT",
  "key45": "4EaBPS6NRkcdpL4mx6QtYWpJooHXyncAU721SPh6rgbFGnUZnhcZw6zPNHixDAkoN9kjUSManmLiq28Z92Zpp4XU",
  "key46": "BrCrkHP132zARUqBnX3tJPqC9ZtbBawUszy6Cm8DKNuirUvCvkyyASdHZtQvoxZPMeFdEAbvptyVLJa48y2Y9Nx",
  "key47": "54Wb6qF6M8GB9AoFJEvPm7fS5s5vAU9Ev3iPaeRgQ5LmTniuPi3w8ibZea7AxfD1zd3qdYLkp9iHENxXC9f3sbPF",
  "key48": "5dZbXDyVChqVD4SWJq1M6L3roVi89hoPJez1q1AnzH2CBg8cHzUfAfCaxRaKYqxZri3Agyc7Nci7DAHSt7Jd6hVE"
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
