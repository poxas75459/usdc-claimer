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
    "2A9e7vDi6up1bWs7w6KqmJmCDPCBY4CHuNhRv4eR3XAcCyfbxXqXdSpV2V9BT1WaQwJpNAfDc2CmjZwCpW7tBvR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MxjnbP7zSz3WgKo6mekGek6Cm9TvH4saLc7wmDbX5i681tM4XtkKUVuXRdGbVNtnBiAsh8NjWxFBDERBYdLbbhw",
  "key1": "5aktjm7YYhDa4atKqJ8npvXqHHaBjMvi9fHC8Uc4s9cJ92xMEKcK1g9rmFT6XVaKFRkBFsFmtzeRKZvPJ39ZnXQT",
  "key2": "3R3KHYXJMTULcKNQPhpTDyDqVCZhm6EFcftGfLUvnrRfEounmzKbEkoRf1sfMnT3WM5DQr25AwZEu6LiJJGtJJZ",
  "key3": "5jozgCG7zPxcRnhabheaQqMQB8Fqz5KJiTRxuazkCfZBiM4niiuf1BPz5spcEXK3nNBAqbs8WiUdsxB5g6PxFsur",
  "key4": "D4qTigfEQH8q9mPm4qLrGZgK6ThZXmet88qiC3xbR1Ym6XFFunqsqRjBNXhaSU4x1yL7EJpqBggFgHiu5isoZUE",
  "key5": "5kbhBFTWDBNyBUBVjzYp14YJ16FyYSJbm3ouSLYukCNVV4ogd2J6BmmR28CcrBcjit44cLaY64mfptWwNRZQ8Xy9",
  "key6": "2yB2JM8kgKXsEGmPHgnG7chesoGQvhtg9TFmxsRuJKjPu7z2eeJVLPvc3iDN1UGfnQHERCrSSnShKqM3xKjzdCNs",
  "key7": "2RRVKAo9PzgEz5tR691aNtLTbGUtxYvEoMPoDZyiLosYBksWKb1WF8QRiCaxVPyUhERMrP8kHJy8MyccjPKLxF3d",
  "key8": "3KzuYeMbSf4aGnqKt7jPF63tyRVSTvEKpmPfSXrojKjTzUUpTJ4NiiPFqLE5wQ7d4hW8ETaRsyB5XAL739e77SJo",
  "key9": "64YTYfntc1yaciMPFyoR8dKfXXpAd9aHQkbFXvnqCRMp7AtDy3sk9j77H8Bc7FHWB8tr1EZNZBecebFPDydq2kUi",
  "key10": "4h9E2qPwqeE5dfq14goQ3UFaampiB8nLBc8gDqNhW4Ei9bFJ9QzSL9UqU4dw6SiPx9v7oMM3fERDwBqQwefaTQsY",
  "key11": "4Md1X9RRq832MRHb3UaGKCyJDuhhq2L9P9PTQdBX9L88SA5V5hkVnd6peFfLRntmrWYxhtfqviXQEXnbwHVAy3M2",
  "key12": "YAj1YrcniMFX66hSRGwsAC5rvAEGK8tMmyY8kyGnPTCNuoNCadZ3Unt17ExEN7tWFLomeGJUusG2SAThTaa1uRs",
  "key13": "2kq2DTfJ1pLYkA3XFo6d7hdb5ZHoRd4Ac4t7g3viKAJKxzeyzeJeAEt62udSmHaDRzR7pp1Ts4qdCZBsCMoTRzEi",
  "key14": "uJ41FH4CpyabEbtpebeppr5EtRY1q7uEUtRZuHgsBa3ear5bBY4rhPa5XRF89ZygkSUR2i3v6XQtrL7Cnkv6sL8",
  "key15": "53Wq5VVdt8p7gbg52gffqU37pFYYj7N3mjJASS3zT83HKBf1CnCtg3J4mTdQmGcYUT72m449BGKK9gbpyfhdFXNw",
  "key16": "8cctsqcF6jvmCfNbPTTWK1MoFp8iRTKtLzYLtrsBUZ1fDzKDUcLUdhFEYXJtMkwTE9TCUBxHEKXx7eBMEnfMb38",
  "key17": "5xjfXdgbffMJmJen7z3HrjwrJ15hnR84fRNDxtNZNXfeZtgtVaoqhAiDif8ftH3ciqYhvXYEgPgrd7fUG2byhM1h",
  "key18": "4KasAtCNVRCTwzT7mqs4AwUHRkoY7DB4YTLHsofwxcUygY94BWLUZtYCvJrtr9hgpFiK384UZoU1D5N3N1WAzpQU",
  "key19": "2WfzPj8cogKip3R7kWLnPR5WYD1Z8XLkDoid4bJWCMVan22ZgdPcf8zbCcAU7KrmyM1eXR5KPVjKLHAgr14E4uzf",
  "key20": "55TQqpe2JK6tCmhDvZU2Dyi56GacGDZjwcEq6bYvkqYqkWkKA8XigC4bd9EQikn5PTQyaVN4oDZNHq9U3VV9vQhZ",
  "key21": "5kErk2LdEUDAwekXEhvrrEusibJ5LhXAm7fy6n63RspmSM8cThYH3h4EBYbKAh8qvXyoAq9C7SvnX3EVo4TxS1wm",
  "key22": "2Kff4EPL94Gj6yBQGNZ4KZbPkXs8wiFuYAjJAYgVL2CBBjtu7jkkuqiiCNkJP7MYmQ4yuQsR2fSdhjb5u57GRRVj",
  "key23": "3kVgJMusYFr5MDELTCgCtVgZD9KCHSVex9CmdtRcZrqZvWAatu1cEXM863ThZkQj61H1FN1BrmJCrVe8byChJqkN",
  "key24": "4cXyLhbY2tmqhT5EexwrAtL7q22aLeXEbXP8fe67NQqKNRoVhe4ZddJuvfxbaJ8RHJSjTRZKXQeiyVvC5wJgVgj2",
  "key25": "5XUQtDkEoTAN2n5kGbx1Y6Maig1AYwRn4H2iVuBGSEvaCiyqPohQHpNvg2qJUukHSLsMMGfZ9mdT4e4pfBg183q1",
  "key26": "5hKdaLXn1KNNnesr89kVYhMdXtSZrZZTWf6WHVatMH5gC3Kbok41Cf99n3aiGApr4hZW84imzj6AzgauYayGtxco",
  "key27": "5iQmTb2sCDiBBztBWaybzitxsi1hMZVxtip3kKtgWWsCcdwVjgUzzTEAxLUZXX3BL2bxAjmwVE3Xtwewmm4z5MYi",
  "key28": "3LUiEy6nkgtKhos6HbsT9v6wP5T1pvp3tHiSbfgCZattHSFWaU1s5RcD2xTS3Hsf7fG5b6AVZjuijNDiYEpf166X"
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
