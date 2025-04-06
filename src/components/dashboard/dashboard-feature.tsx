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
    "5TXMmHDKkFyorGKuggNUg9KBS89dCUZRn9hwq2EmiuDokCCBpXNfCKGAkMLZHFCx73jJq6mKNSNJLZW8DzK5BtKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NsvhntwU4Z9VWkiMjr1UzWBjahKXq2LN4Wxd9jmpXZ4U4xaY5otjn9hUxWksiWev22W2HqRRdWVNXZq6hsnc9yE",
  "key1": "5fNX7K3wby3yc8BAxTb5wW1F8nUwfpVo781YWogFMpmCe8nxsrvrSRTmwsJPunzqXegXLw6kXZKfovyBHsWxCFwq",
  "key2": "251UTez17KB75RNJazrR3n6zVbVy4qVRx5pBHGxCpGnVA8cDnTFJnttiu3U2rf6JwDo7WhqthtMHDL7wcGK29iw5",
  "key3": "2Nm2EDa3yNu3FPdMg4E4qGsyPmapCoc6H3BBZ2jY6Zm7jzPUfgqGraAU5TFPunRzXPXoHvMf8WvMZFAMw1zkL2VQ",
  "key4": "sLDsjj96Zq2RCBg9rC223exEhj4XSPghwxKFGcptBM1wbCTXtpoz4qhxfGst36STLpqkW9TJbjKG9PwpXDc7Rjk",
  "key5": "2RzRijJLyrFHzTznu7DNB32nJRXP663hrJMUvBZTwPvXKZaMsBqcaw1yGYoTu5ptUzMN65Lwz9jVi7w4Pa21Vi4t",
  "key6": "wKjpEdW82VTxXo7VM7mC9XsQkAaxjowsAp38uYnwDZ3Hd5Jd4YLfiAWKLjXTeQp5f7N2sXqQUq2qgsvMgjVqTFy",
  "key7": "tmR6V8yg3QDofEsNypZrf6RSeB55co1KjkoCfDBMKDJzmCxFcze32ip9Fdu37srDWjq93GyCWTo9LE9cGQgAS2z",
  "key8": "5AdQW3pVkikQZ6QR6NtgU3mMqipmD8JpFVhfKUVajh9WftqmUyERBMhKS3Hm5MSfJ1ZQcCY7nVbyGFS16KfQReBv",
  "key9": "Pi8QKbnnxqnBe81HrSVjXYVykY1Tt8jaWXM8WAU2KMscLDdS7vsFhJK3eskgsxqjTCtQ4hKabPfLRf1yfErTJUZ",
  "key10": "3yfAmJD8hh7tFWgusKBzvNcG45Wmskzp3UTSDME5bW7Eq3UGmNE6edEetWti4iAgqp4bM1uFkzB3CdgEKd6uFYqT",
  "key11": "3VeNgKf4EgkDoPTrCBRugheQZ4G8eht9sFznvvjgpfZNx8gwEiKG38HYKgms2jUG6LfbDy4ZuqmGNDzA45ALcvKp",
  "key12": "21Nm6S6YLgGR9GxFsmtm7FxVrxA4RDx4B5StD5P65P1k3vMrRXAnmkpK6bMoqSyX6EsQBqyCJQdmGp2pF9XBpqPZ",
  "key13": "4mdwHHgkmtLZ9actGFZBdnd1Xme9tVsnkFcHJ3wyzu72n7ck6ySi3cJqXFF3MWai44oy3RzLaRmriXdqSmo2y9be",
  "key14": "NC1F8z53MUyH4jrZsdV1HoUnErfPt1HUthZLoEaRxsJPdbtWdDNWLSZMHHr8LYQ8AU8uiXK8Lsj2MFKZueUwinC",
  "key15": "63rjx71HUFwXwHG7XKwHAtN83u2Bu3p53DHHa5BCMzaqmC8SyMnuciBaBVZKQ12sX6aWuF8krDf9hDAzFVVUwe2J",
  "key16": "2MWrNBwNXpLfgUqrsDq1f2dtw6yszJC7HDeKqLTLMH4hHKgujA7Be3t4HhQMYn8U7ZE1LaPLGgi4jF5jbuojKNat",
  "key17": "2LLQrfm27noJnugFWFCFjjs826TX8p6rBcLdaxpMZpcXLnXKwm4KoRfiDu5FzCndRwohuaec4xtW8i2eY8vCLbVc",
  "key18": "3YDieQxMGBauTyL7SQzr913e1N3FMYudGBTJvHCRueWATCCcyRxYBMnn5mL8ypbmanaCfNwwmPEY4iChyvGT1dB1",
  "key19": "2R5fzC7Uw3DK4st52XWscsDAr93qfLtLCeqtLguGGM3xufgMdrwwZfJixcuw8hZQagiuF2ewDHkYCtvHuf9PgNbm",
  "key20": "4WQViMpxKuGuFDrkLk1aqwpuQGuF5f9f44c9Kwk6JHk2AowkiVuSoS1piNHPyqm7GYmrA8CPdugc2Zw7prrWZ8zh",
  "key21": "2VvpaGwNDADEPx4CmmojgTkEssdWUUDqKTRkq3FUtR9t2MViGc2psVFJ8RaQXRswhFtJCTudpin5rjoEvjYCc499",
  "key22": "35ktMPbSP88V1khgDBCRNQ159XP1bmzULrDXBpUPkxFJ53odKhPfgBvrurtuzgrXfDvMmGcdkhtBJE2pHbM4oCap",
  "key23": "4V3tFSgfH75oRYUtUVyXKYzmiWLytAc5n1Wc6eHKh3MNYtLQhNasS2C5opd8AcGLYcn38NwYuMtfDQfpNidqsU1s",
  "key24": "84brxwvEEG4xuivbiAB3NUzuMsJWZRzYu3dni348eYWw3dfdNmxD4vh13AJ5eTap48P1mg5TmYA5smCrFFi8hTS",
  "key25": "21WsbSDuQWwhNoghRjUMkeJLVFpwgABcEMBDHPNdezLr1JxN3pfsKvVJ3dY749owBLTmtjPE5b8uJpVeH9dkpuvL",
  "key26": "4fQ1WwD56MXQwz9PgdwajGwfXM3MgNjNmF4w2cBBFMjxcBRkQZrN15C5DB4siepLzJkyr3wRNp9eEqiXzr3JaU3Q",
  "key27": "5Z5KuWPNHCrXDdbbrNjwMVKtXLnn6xAPnMuoSGTncZ1Rym6DRhY8AUsJy1MyahHf63J4AJX68r23CYrGmca2RHmn",
  "key28": "2knRQpbZK3LvmaQW9oumhTkEM1qGnLKSQwK3uvm1JaEgqc49oxqMrx7oVCVwDsC6Y2iojHWDZYuGC2rZRWcoMkpp",
  "key29": "3nAEbnih6crXDE3RewSXZ47RKz29QfBHgXoryK78sdJXtM1fnxsYr4MgQ6fxLriML1HUR9rsvmYcHRDahGKzBUiP",
  "key30": "2jC263e6s3S2CCPGVYNiqoXmMRVEtV2KYREb6b7rshL15zZSQ18AwT7bLDDyzmEYqX7q7V5HpuuUNYvQKfsGfaGz",
  "key31": "YkHzbS4MbBCUGLaz4gnHLQa58LRC7MfUXVnHT4Sy9sXX1KTvHR5BYJ4T9dJntzJ2y3iLaLdhabQvmbb3qjCamJz",
  "key32": "4kZucsrhJoVj6FNw2bbDz944aaADdXG2SpfUsPtqhdSBwALWhtwho4GbizNvkpKPdsvt8rWAsDJm92DgABbbrLmf",
  "key33": "5PwPi4PXvaTopsQ7EKZ5Yk69qir5vwT1SViWBruT42dpaCGXLKisMneCAZHi2vrWnkQPTXDi7N6GxkDMuLCvFCag",
  "key34": "4zRBg57YLvVAjZvHBixVdS8fY6opRMcLhnPngzYij7qpz5JoEKGTzoVawHCwuZ8RipiQ2ZkRQZkvJXnDj6EXtPVd",
  "key35": "3RdXJRe6XmH5ckoWoTY4dPcRijaq6nav1THbJjXdhWWUXiNFfb24MamuKEe8EnXHp1KgWDXC7t7u6kA564Rehg5z",
  "key36": "tsWmZAMAReuGpg8pmvEDxYwZ24YgRb6VEY23V3XqkTZ8jC1pTndHwG3eX6bok6pWcdju1s1A3kx66q99xJKxpo2",
  "key37": "4B2Fa1ZbWtXCmdAWPbHnasSRRmHEci4ydvLfYDuL7hPLuEo7P2s81nt8ScEyrpQzz7WAdTXywSyPkteUNv89UovE",
  "key38": "2rWgT6mdVZ9NrtpbYJDwiAvcGBXU99aNVHmXwQgFhCDi3YoGr3CTcdP5nwNzCEV2iK2RAq7YH8TC9rwbznqecCYo",
  "key39": "3beA7ahfU6jcASmGovkvfqhHKYovUirFWv3HaNdYLFsaMqkEVq1bXMcsxkE2UR7ByKv4M1nywX8QKtaejqa8k1Ap",
  "key40": "4vYUH3SDLjYiAZAYt963PNsRQ2yi8WVvMFDHGNyDLMZeQYvMe9LPqoGRr3BrkLmRqDA7AUPKvsbKbZ6HUHSYKeit",
  "key41": "2cpUHFE4BefLJFDxJZ7zxQDHVHZb9KLEMxoD6Wth1yGXkuy6e83QiJkx3GwMYyZpaM5rQ5us9Xetm1eMT8xwQNST",
  "key42": "3xCokJKMGHtt5zqK57tWj43L82CQ2tCyc5n31e27zhBAdVsyE3pmLW8y6Vft7MsikNGLneHpbANdp6E5unXE4G1Y",
  "key43": "s9yKW3Etq9t9SAXy8YUe7c4ymNiGYti8k76psAbc7wcNCgTrAJ98Q2rnprBsZPhcUPJjAMJWBZTKJnP9iVAYmUp",
  "key44": "59r75oVRgrtUcv6xiWwc6ExZpKzs5vqt4qs12yxJqwsnf2EnhEmLiAGRYwXvHga3vtLDbygwMrFgvKwaxEfuZYm",
  "key45": "5JneJddYxUDb3WbjMDSGVXwJn3BdE2MwaoxhzHC7qx3x5PEKxk71CnAYf2vZY81gsJDKp3fJtsm8C2VAqAZFfs24",
  "key46": "5WNHtZpW3ykCEGiqkm7EhXnsEDgY26VpH6Xd4R7RqTLbgnLERCXv9g6aRj5FYpSnWGjNwFi2p8f7tGwCo2i7u8fx",
  "key47": "24vK78BLtfJxJ1gn6MbDf6D3vqBAYGuDHhei7opaXRYuCUC3GzGuuUKn2dhpnsZvV2SrduXYHQkKfrg4qByQB8HQ",
  "key48": "b8ktvPGoMryXjU1hdwM19KZT2ttT5umTCbPL2QJiRJhCcqMpDsu1aRsab9NEGb1oEnAJikPwEYKYNMss8ev3tKw",
  "key49": "33jbopigqNUzDSMbJPQFR926LxsMoTzNgZW4GsqbaPcXnTQfHkrfEs3rnEh1xZKTgCVnPyhhWMfFjnp79QiVJTq7"
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
