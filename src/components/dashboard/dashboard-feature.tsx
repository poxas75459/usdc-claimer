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
    "4LCQHenmSAvZiNH4y6bbFqP564h3t9wQKvWqsrG5vPN8VHfxrY5oS5G141SG5WTcwq9Jp5sZLptcA2pzitUSVo4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uy7SwV5srezrumCzy8QqSCdgSvUK9wGwPfuEgydiN3B7tK61Lv5x5KHiHQT92Bd8pF5yv4VQbW6suyDQBPcoF34",
  "key1": "3N5e3hmQYNKi1VL3jqYeKqQT5jxUJ3wgSoPfpCVLVwtHcKpVv4bTaAjSBBWaoLGV6Q9mP8YCTb3SQBFWi9vdv1vQ",
  "key2": "586RudtZsJqkV7nF7aC8YnkvR9hEXJrpFXzqmpsxfVs8csUcenr9gwQZcdXRGMPtYbDSUqcKMiXc3UeiPCVyHsha",
  "key3": "4mzyuw6pNYgJU4k5c5tnzmpoXsgj4Ux9d1nYoynR3tKh4L775W5HrhwtccjSezjynubZTsAPStMHRAJLFxx1ak4D",
  "key4": "4C4MXSTSrE18FgBZxbiosu82cxWQy8y7DXvySfXxKiJU9EduC9CtPgVyZhFPDXYYJEL8mPMEsHMuKKWuUTUwj8wC",
  "key5": "5ZsykPFhucWUiZbFNLFpZSMELfkvLTh9PVVatSJdHeXt6Fu3cP5oPChpZXrdX8htVY2n4PggVoygWtRppwJazpE7",
  "key6": "kUcMAFYt1RFmsfphg9CdUjW7f1D5CvT5Wz7Rq15r7DMXeskioxj1HJjTRhPMsHMm8Dutzt62MTDiJmmJP3nTsMC",
  "key7": "2Hj8n4SEGqwJFM7cST2XxE3cuMSoMwSHE1mSsqw5d2KsWvd8kUDrYHAi8hH2bToUN2fUP5HTAJwHhr1DBUj8phRy",
  "key8": "2LPeQDHWjkb3wPjuixKn62kDjV51VhyajR7A4e1nzx6G8m67Ng2N8xeYoTX2C3qHDg3UtURRB6A1bXiWXQxzBixN",
  "key9": "91QmXMMfSUHzH1BUBkmuwSff23TuWnJ7kYmdgf5NBvPnSLjZTB5sXAqNB7jGwApBsHLqfJj5BNAykQNZx3Y9Tag",
  "key10": "3qQygM1XTUYerc9Kg4Xo2EmxDFeyosXRJ1zK7xBJ9k4B6FvdADMv6539afUBS9ivtggDcHaRtbdg2PqubYorifMc",
  "key11": "UryYSVMgYxjc3A8JYaGkVcKFZgVFpyNh22kUEdmJNqtsLtgB8z7S2un97osip8G2Vw5QpJXkjcHmXVUogGzkecm",
  "key12": "362vzCvzm815sTibjwkHFiGji38hy7ndQ4BXAHLcVhYHRFJB4fPcYVh97yYYgaHSMgxs72xAiyVtwXRpSkdoe3n3",
  "key13": "KHTCakhAWef4bPWwhyStcdqLpHKH6iwGBVM5CGnPRwFRfvDM63vZZzCnyJHwk5GVTc1yJXk898Eu5wcgznH1mGH",
  "key14": "YcKSw7CGwZBE8UvQvkGTqgpFLNvXXGHqBKCJkWTMkUQA2rm3zxFdSr7QLfFJWm6NqJThuVxEf2nQ5H5QtcPt3WA",
  "key15": "gT31P92YUqvSQzjHvQcRpwyThmF1pKwtA7KhYst5yDGWjsfF17f8cazuz5RjYTcBTTQK2y9xFavVR9dTTEjA2dm",
  "key16": "58rUJXeYNL4a4eSDQE6vocaNB8QCP2hSKsPcVAaGeHpfbeMf4RnnEzRfyfx4TF3VVueAL5LZbnFdAdZHKbHyHfeV",
  "key17": "XrUq8KFrTfq9KN9bTXXM7wTAbRvYy7zuoow9ATpV7ZgcNk8c4muFMUsgFrRSpE3gbnsENUbqsLLhUHcviAL6pxk",
  "key18": "2qx88r3Gq2iQBCXpUzRe1pWL4NVni9tRGq9WmSaLxAdPiEUx4x5PBMun67HWpFkCDhXKueA4iYJcyuUe4BthXwHD",
  "key19": "g8rKYsn5XB4u72m9WYtuAEPWEFFWxXtkPseEiYmPAjNWiHh6oWugUTTZT9fTkRUeALNeHHYSAc89Z9Jk5yXDmzg",
  "key20": "5NGS8EKroLctHo9agY2GX1HSbvVWYaELMrejSbjxyZ5gm22HDaJSScZHbxxgD6LpwUxofs9Kd69m1iz9bPnTVBNs",
  "key21": "3hVDTLdfa5PWaeNERp35G9RF1vuaghPmSYbAMHXHQyJPvjpfTeF5EaX4TuULUqEnuYLUDxMhkawp1ymDXfFtqHo9",
  "key22": "4TkQVKeYjBkUZddr5V7phpHd785jB8W3cHSfg35xWdexPtJamnoNkDXLNeLCSKU5XELyQb9haCC278aVjoMQEJh9",
  "key23": "5JDagwFQZH18gSdkSNP3iUmeiB8oE4Uv1wkD5RPPTWFju1cv2wzy5Q4MX7CL5m8Pro1du3eeKNwYN4qVd1W6B7Y8",
  "key24": "4eB1Sazwuuz1zmkusrMSDqniBbXyvub5phwo4q2P5H6yiwKDAE5jKmdoj5XHvtcerCBwEWRU2Mg2KfS2ezTr3JbQ",
  "key25": "21ZrzSkjwF94HmDb7FM7acx6L5QbKNbjeyQdQUJWSuRBrSqSpUbTgfQAkC5sFVrTiNukamkDNM9SNEX4TNMLqVfj",
  "key26": "4riGuwekNQSwo9reGsj4RQFsivuLhKz9LuLeabBq5a21fExTbjR1eAywpfhtvYbTf3hTVrdTC7jEtALBdezcHqKe",
  "key27": "48tREoU2w48vPkAtkcvqeDpKRff53jh9B2fbrJdUsT3HvE94qzWcL3KuQBzwGyCLRYuQoDHLEzD94Z25GJDw3ZmK",
  "key28": "2Lbw7i37pb3fH4HaKCbkXh9ZHHy5MAbE2HdXfCBWacD57NczMEEfZ4UhvGv1sWoRt457BCC7bkE28w7K9DN4Ybdt",
  "key29": "3UVnpCFjjZ288iv7P2HiV16FkAfetzJfsS6L3DRnYJg3Gog5S7f8GrUYnFTGBhZTUqgb1YeJEMwhYWRsh3hqW9AB",
  "key30": "3HGWvK8ZNAYtGTXQ6tmeSMojWMjqfTYLaYYDt9TqmMuVFrLRyUPE62C2QtpnM8csnUmBy6WBRoqmdtWMyyXtGxDA",
  "key31": "4gyWwrqprDU2wNYKaihHNFb7LK1os9cpmZ72CFZwWN23ZKwJdFcR34baAdYg46roieQwQWYAiJrVAjJk6xhVKV8h",
  "key32": "2pTKLsxukSH1LNbQPVQU8kU2aXVT6Q9kUMfYwKDnesqhiounrt23mxE4HefbqhcBPrAg9yeaKLo2wghoWmtU1Q8V",
  "key33": "LA8FrVwLgC46et4FyTVWxjVT5AwYpQ65stPcaCFWbvMPgxCjsV4jittk7TsTuHeMXX6jCtf5bxZRveyU2qbjb3W",
  "key34": "5LTwbqyhpi59rNcXY2CA2N6GJ9R5CdXiPxZuxjivTpwSJxLjpbNpXwAMYQi8HyLPeuYqNbBLCRDukYtxidEqfpnP",
  "key35": "3KTmrd7HfDEmDA8MYyg43UfEHmrCz8szAKa8mdaTMY9NC96uyUgmQBXZ8Px5j1vUVvyaeT14bUFsMzrgUvcc1C54",
  "key36": "2RnLrbPhfrb4VhaFCSUwBwicrcCUYJHzcRrtzPY3qTxUdf3hzZDdFVk6o2vzSvTpz3e8fZpvsGuSgsxtjmq6Ngag",
  "key37": "xwzcgkXado9PW7XycN4cWaxURFvse5YP6Hh9hvVLEroNA4caAUt5kCkY4eEZcF7RtYfPtgzdfgivaa4aTnD1WbQ",
  "key38": "3wVxVXLyjHAYXE7j13FLkFYPK9juyC7nyBHhkwsCw4ci4SKGp69y8qRpf86z7A5Sk4FnSQBbWagPk7jeqZ8KMmGM",
  "key39": "3SKRYTzneQSy8TFRikmzYtDvbr8CSbPxgrGgAAuHaKhropMnNWL16GnoijfYPJ1zVYbKwAAKHeR6qLaMBCrW1w8s",
  "key40": "2AWL6eWdrcpfsY6UnGUQ1rHBur3uJS8azw6KzCAX7W95wC79a3MeAdFhcARZ5xbaMxFHsbsvZyJytFvFygmqo2oF",
  "key41": "w3dLviQgeb5qEYCf3zwr9FWxnbrNYSzWWcP5G6AJmhkW1pRSLctH44jfaUumAi9i3kZhbSa5nLS2DUnanTcA4fA",
  "key42": "2i2UCgGkTscMVYZwaaH1Pv2Zj95vJ6Cbwxv7XMiQf5M2CRPJ26x1YcGQooq9E8b4b1FTE4vnDSDNUzam1FxG6oWQ",
  "key43": "67dH6KncfLe9UoXVj1WC516LB1yg48UqWTYKmt9oQvJMbggeDZ9324RrUz8XFazTrwkfwJt8uAjfmhuCjxhzQCpY",
  "key44": "5gvUNTsnnM1E35X9mke36pUrtfz51bX1nh8yEduCirTk1DXs7GY7LJL2AqMJnuYg4T3At3zimRje4NCe6L3ay2UY",
  "key45": "4g6VwE4jsiGuVm4QzUd1GXAw1XERajYBJZK5Em6mAHPepTG5CvCF1tJhmTvSJAYjpdbZDNwfLw6S4rt8rc8fHsZK",
  "key46": "2YnEEmsMyyckBpnMycjvEw8TociUUHXWyfQ5MWMpze9rEsg3uXL7j9pb6vHpxa9k4zk7adqnCdgMWApXjBGzZnEb",
  "key47": "4TGDPugwV2Nfn46Dc1dMYVFokLXeV1jTCgSH6frNtYLdSKz5fLokezDdyfoDtQiEiCjNbCDj2MoGYKvQo4XQQuEA"
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
