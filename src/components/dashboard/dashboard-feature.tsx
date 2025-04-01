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
    "cyjowbcPPkfANkGKfh94jHRSi1MgzTyh3juR3QfgNnWbDm6tdb2ozS2C5PsobHwxPu3QMcAU2Gm7STHDnUutHoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wUiHjJntFKiwXH6oKwDHLFUbGeGAQgvPckNowbodq3mMsWHEaCU4MEJLosor8Gp8bsLc4CwY7b3k6HAUG7P5CUD",
  "key1": "qSZBoG1NhmoDYsrZYiVTESBjAR5fsuphVdsDWZZPe1ZG4fmRE35U6MDzhYqjSgvjXbbJvWdkYcnUvRnMDKYjExB",
  "key2": "471taPytSBr9LiNEdBKH4XYFYhT7ArBETS64CvXphREyG8jteTfM2vsnKLCm8jCFirJqnJZUVPHXyoc5yNNeYA6V",
  "key3": "2D78DZYi3DCqCT6ejx6HMnHwazHPZhpAyC42g2HUKmS2ZRFpnBsB3ooHujdYRLLJhUBMh7AoAL7HyiAQMBvrvXeb",
  "key4": "3ywCqtsm7oGcRygE52yLsXdyqx7MSiqWoW8VbzQ4fgduBQGezhaT9jaisKiwqDKpwbXbGTJqKTi2acX3op4stJkd",
  "key5": "EoQ4XcKc4zYhKr7MP3T39Kx7YvyVgMieHrB7vfctcesD41zhqnK6GuBYuUPE6N1pGZZdCgsoQxfq9sZyV1vWfEQ",
  "key6": "2UU49BVKsN7N4VaGLBjmZuMy7T9sRqSmVJZhBbzVJV2pY8tBYeZVk6Tb7m3gcVLDVdaWTwhoSp99iEVZjTq8tVY8",
  "key7": "poDnLacDNgjMYLxRwD5hyumDggo66Btk83MevVLf8TaGnY3rKPzh7sDXPq5uZUobtBbVR4rtHbc7TSm5FJo8pJ4",
  "key8": "2z4gupQwtNMcDc3VWdT8m4rGcgZEcWyfvbNddUg6Pou3D22kqmQtjRLaHZYobT8nQu1TDYLwc3Gq7hv11rXAK7jF",
  "key9": "2zU5E9DwuszGAc4k3ri2HRpYfyJNcZWgsV2kZezd9KKdAucPTn3uzXECjMYUzDwMQZtkoTjTxh29UychNLX73wZm",
  "key10": "4pNFyYKhESs3rzvjF6z84kCTxsPz6fqXQhBR6xbCUFvFTf4bj8J62uQ7mvW3rmzejqhx9D49ENRaTLvYkBFfYSff",
  "key11": "4URLS4a2pcQZVs6RbA2EvZFfm8o9QfquNxLnhWbBLZWMvftSCbVzLM7qPCz8wxQaQbeVvGXVrHAUG5r5czTbkHL5",
  "key12": "4rnVvoEpkLRBEkE6h3qMipaj2cBqJhWKWQBwUDdPoSQygZF86NRZfiuwFHLWJsqayPUPDQkGF4uJgPE3wCXK6B6X",
  "key13": "3Q5N1cc8fHjtgJdEtH83byqdPuW1qJPBUjBTUg65MSK7cgnreqhfnFghZbSPvRfCr7sonyKsjRdBq53nkK3qc8Yy",
  "key14": "5cnrsnCkV7XpYCdcnCLv8wfJBSJCuHh6UepMBtRRqTUu5JG32cy3BZ5jBdyewwYa9PNMrJKsT8meVHBgNPvcqfzH",
  "key15": "23BJQejWL9PvsGR1JjBmPXLUZpURMG9nnZbCNdYMi295N8ew2BiDm14BCE9ELBkJ9hBDBcVxWo33NCVJQseEYHW1",
  "key16": "2rZZeaffeP71rh6P39CCBxrtW2tZ4Rb7jjhdGAfqnizXf5mXQDVCU22HdEgCV49vHbzHPDEtqFmWgvinYmMV9wTv",
  "key17": "Sy1psnkP5tv9117v5CYvDdizwLdQJEopAJSB6YED1eu27pHA5czgALCanYCoWMsBtf3Bej8gqpKyFxTLNEhbP7v",
  "key18": "2HLRXwzsMYNyCv3s44995RS9gsqKLZff5n7joaXjKupK2tHK5uZnPBYcWo2nMkroTJVdZvmTB2idFjUi8EgtJpk",
  "key19": "4xNnoYhCcqxFXCd2vDggMySFrtWWw5qM3oZzn96Y5fGMAVmBCvgq9HY2khFzNWmP5qPQX9mC4M6K44JtBuBaSJ7E",
  "key20": "2GmDxWWWEs6651AjB3tjzpsTYPXmTVjXij3rx8iTwCX2dhBqBz614XBXMRRDRro8hgdNZ982ayKuMF5dbf41UXpZ",
  "key21": "3VcRHQUZPTNXEeS2XNUna4AZg2ffeUtMz57aP1EB1nvH1Q27G3WS3p3B2wqnd6fRfwPxZ9FpFxyk8atJBb8Er5XA",
  "key22": "3tHWPacX88CMstiU7X2h2MjKNgLeHYRnosdXK7ScxeCgWbTX8Qsn72AWGs3pXDdWSux195rHk6NrMpQVnqbmhRVy",
  "key23": "2MeFcT5r8pE8CjFUvtj1xxwSCHShEiVDGLZmZWSQ9px86vbF86w4tim2nc7uygV1mhd1sY7NFRZwjUAjHHRHxtoe",
  "key24": "2UTGVhxoQt5b27QsmSUKdTsrzwHVHwJpkrNtMRX6D9ZD53e5mdm6zNdFpn2HKiEAG5gkVRKMQ2iSsnicFekGUDMK",
  "key25": "3f4yHVxrmStqo3F3vxFbskRaKz34zzLfUF9cWTze9E6qDN65xcAG2ExYXo6hvYPZaQe2AEewsv9T565VVScKkXzB",
  "key26": "4noHkcRvhzgCpi7ZtiFZGD4rUriz9DL3RZta66x5UjqULp99J1WSqKkE5XfdcTJMwhG1pdPxTMMEG2bmkF4sJLKr",
  "key27": "2fSViCTGid5wLp958pYyd8jMeiDdRozMfbnEpryFj4MhMLdRYfM7qfBHtrCaXdqnx921NTpsw88dBmDzUow7dPDc",
  "key28": "LHmdzByAmrocSK1D89MfNU4SYq2epbDZRQNXx52ZhcHhrEugqSVCUt9u44Zt59vfJ3tzd71KfVicqcNJjWGnN37",
  "key29": "LxyDGmpJ9ygsjp5esGvNVDRUdCSMgK6GeMt6Sa4Jym6QsFchK37A5jSGqqQuUY9yS1i8asrQ2CRKP2fNScCSUUM",
  "key30": "vCDwGSuMuFP4qp1yedjMYguKT4vFAmJm1XJZYbZ4vFrmdnSm8jVwcpEk25dW2J8FgrhXrvXTJSbAZDDwdxaYUyH",
  "key31": "37P4LF3GnM4sRjzxgzLQLGuttrQ7VjRzSoTvzZ9Q1AG7SMqU553H8CwGtgSoJfZvJJ8dqieQVgot7c5S1GiWmAsx",
  "key32": "4p7JzWvzURUjBEVAC4qYzGSke3CmYStvSMbKU7vMpMfx314sMtWKFGeLaCrMDg3q8HPBFPMyRuBS6sowosFz2Tzb",
  "key33": "4fALDG2R5UnTLywF6bkg3euZRJpYocmcmxzzaEdFtuBdjdKTQTizTiaWGQ5w61pcsSsGbPsTPjjAFQ8rbAFgeTKd",
  "key34": "3LDQxfSGF6q2LmNppTfVFFiN7EmtXnbv99oaFR1JgZG5EENPhAmkpkGD2gsJQ3ZxGuNGX2y4SC4MB4PVNizQss5L",
  "key35": "qcrwiZ2WEf1yHJd9gBZAWU1J3wytgLdGM3jCLmuoxEFujz6pCeHBb6hT3CCZwPMF7pMKYD7nefyHcBrmPZee8Fz",
  "key36": "5BGtfvHQs47hGF1kgCPjYjRfEXLsXXAZyU2K8stzYcKxRZT6ApgwzJSRDtv1D7JBVnwYdLVYLesmi1HpmmH4DN4w",
  "key37": "66T1SiZ1bRxvBJrx4Xsi6EhxpWRSZYswU8iY48XipWvJCeLbuRocputbg7peE5pRjrDJGpAGD4AAJe4W6UjxZHe2",
  "key38": "iezdSjRFxWUFWX1iakoEceV54ZRWVaa9HYy1xy29YxegaZiLgdSvqHfXqR9P3uX1MNkPftAwuakWUrzrnJ6uiMU",
  "key39": "4jH3B4nMERMrqzGw7L7zp5qjtTrDmYd7aAXdKeSbDEo75M9qZRpMvypM7Ubqk8EsomHQEeDVrCpMD7hRrHYTKNJU",
  "key40": "5rbQuHHrhgF4SEpu3iFC3D2GxnCWJV8iFdqHFuhni7F14i7aQrMWmq59TU9dULdvGaCBMx4iwroEK3imtJidF4Da",
  "key41": "4p9kQKGDfu7PmimV2z8AUaEvC7yX3RydPn4uEkAHvaMcaevbDRKBFDjdiFN9qX1Vx7DYZcSqshtJBANhoJhhWLG9",
  "key42": "MHxVYVZtZpUwbet4btZWo1YhYfmsJtaDG68K8Lot8uWESnRTFiVbKAwofAmj8yFPBEydWb9DeXYJUuRJzhjnjNP",
  "key43": "YjVZwEW51GT2ZXip3dqYqHnDFVh492sprSDAyJQQgWbGhPTEm58mgrXDAG9kzKBX5HVBcDUqM7SH3tCL8e97EPe",
  "key44": "ut3vXNZ34kUzFYx8NhtWc1p83KKyA14LzFK2vtnmoWKWD3A7aA8ePZiH7g5t5ryejpinUB94gq156pLt8w9jiFK",
  "key45": "5RhhHtyuHPC21DMEcpcGe2FDVTRGdnTJpb6uRwLiaYMo2gYRnwHxSuywdMFBN3f96xqBPfu1SzVR7WctyFtpApgb",
  "key46": "3tMMwVutxM4ttk1kRdSV7fiYGceFVBiFCWsfWsGPnVcFs5WpNmqTjbFK1ZaNQVsgrrAGN79AyMwcfyoDXJ3oBdnJ",
  "key47": "55AXCW4Ckp6chWZU4gr6o3FF6iY1S3wU8NJaHZaMKr7NVcyETvqFXsibGeHdNLxknnRnKYJce5XCsy8Hx8H46Bs4"
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
