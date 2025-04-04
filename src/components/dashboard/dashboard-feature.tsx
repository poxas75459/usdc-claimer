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
    "67YngyaYvtdtUkPftsKhVLBRYocKxdDFwe3C2kjuzBruDwCCkdKWLrNTnPwuPufZHbRJXR5Y6SBFuvEqk2Yini7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QAt6UPKbPgZnkhGcQhmGtkit5UbHfHrAeEwyqUXvF2HrQrWDEDHS6eCJYxD1be3vmzKQKim4LEmGfkEvugDJMze",
  "key1": "4b21f7xkgTcdomRUv4WJAYRVEA2eH1a5Df8Av6LXaHbDh8uyhMpKrtnc4WXXzAG1XK9mWwz1FYASasF1nv1Nbz9S",
  "key2": "3DkCyY4HWevRmAmCgsPTrm9yStHqpRSXyFJ9Zsj3Vz9dTobGhRQaBBGzMSJjtQbRXKjZ3h8mHMPigFsETUn7rYnb",
  "key3": "46qFe7vsvYraAVQyzxoLm18scHy4TTJaAVRPis61QHWeKE5pVndHg2a3UFUsy5AzR4GxTs4QEfEgvVvY447fpu72",
  "key4": "2NWqLaZFizHVbvs5jJJapf7a29nV7JCXgX8uCKL54pcFgzEqMRjW7JWNj9H3CRb6BfYbsWaXKBefVHeHAZLP6mGx",
  "key5": "n2UT1L6TVqW1s4HBWZTB7oCzMGv9rKxYZEqdmbZZUask87ySRWk9XwaEYSj7dNoNhru7dcfvbZQrDzdCwexEW7j",
  "key6": "3QP36HioL3GMjoXo567KaNXc4Bc4rgGiohzwXBckXULAtrbBrs2zBWD4EfAnVwmpfwjuw23bnXSmXpz5DaSjFWMu",
  "key7": "Jgm9NYKkgBcorVzVSK33kseRjMVL86UDFgUAUp1wp6SCnep7ZDFzukWXrgxPnrxbQnpaHJFKUUUy56hothF2fmu",
  "key8": "StBKq3QR8p71wjoCu3d7jKrUoE1ZK7dHBcNLEcxnjDL98WAqiHQy3BwoC5wavQ8wCa1GSNoqRQhWxPmNTX2shMU",
  "key9": "5YxPzVhg45KBSWeqTkewdxHni8roSWyyhg3sibdz7LLJ4LUpJpVhWy8BYGCUw5B2a57NfGmAb7ajYr5kKVrBLD6e",
  "key10": "65vHf37oL9828dDfmLrLYe4qfoxLQRKUftUUCX76vFpTMHWNfQ7vjD69Pfmtv6sbj92Sub1fo1THYMJ1HKRSUVBt",
  "key11": "3YbgNwKTKFjNJVKmKNYPUXBS39ywsDJSzkxyhnZXctVhBGBJnR4eiLfVPtWPDNK8zQ1T6P3dGaw5AtkVEpKsCJGj",
  "key12": "2Zox2YTupUiawsqyPW6hzAcP2XgxH5Hq8tCkdC9KRFDx75MrfxGWa4jQ2m7xNjq1Z5ZaY9GEW8mjGa3HfZNJtSE5",
  "key13": "3LqU9ckw2UeKGcoYiK2yh1AMGVGKuRpGQ7WkdsQPhPM5bg6kSgC51dFWgRweu3khccFVNvncmEVBXuELvZfz1Kfp",
  "key14": "2tedxgT7GErBDAjmpvmMi4mzv8fYutsJvQF5ys8F82WMfH1y5uCZPC3xqXCyiH2NKwwFQevgakTbvzYG7UHQqKdY",
  "key15": "3qGxQB2722Db1sYnp8LD1zBZeBQxPSFep7ggA1yea2gMhNro3LWMauruVaihYF3tnvnd92AZhnAt46qzso2LTGh7",
  "key16": "4fa4uafFJyvAEVyFuSvA43zAnzBSXAiL7nLMRZeqqqNu6XdzYLC5SgrJ9WFdMtQ8M3GtAgpAcvpzLNq91nByxAr8",
  "key17": "3KEa1TfxcoyX523yGii5azimENEjTztgTjUxfycYj54TKAz1urCQpmmJFh46QRjoiAsTHZYjadfHBiVb1kwKt6Pd",
  "key18": "2xUWe8cTtgyXMtyWd3BE13HmhHnXRdb9YfFGGPSwvjF324pV9TU6wxWoQS4NzdB7sHXFGsk6oaUsS6MMnwPydhUd",
  "key19": "YdUJjDaicy6UjjzTTPKoiNbb6AiW7dMPN5PiXiYaL2L6gV48JdUKuAmsBHZmLjDDepmoQCwS8kkvMJbdc8fPghK",
  "key20": "45sqtJsFywJEqq6mbdZiSfGfvrxgKCQUEoDBsRQvn1CnEtP35DJ5U37hirUvYtSmpSqGkwVMcSHBeeoLbVjwUS9X",
  "key21": "55ugqFujs37bEBTRjWrQfRo6qHZyYeL2v7Xn7tRZPvNQxYPmsiDRrchG6ByaH8YYc8UeBQX8BAnXdhFonspE1fbk",
  "key22": "638yqYxiqaVRombjhsVTzMTjyPAzQtfhUrmPYEEevZQH5rgJXtvGxUrd4eEfDeWNayhvYyyEDYoqJGZDQAMMfKeG",
  "key23": "WfoAfqoZPFhJ9YwEvadTtwZsL5m3EUaW8MCTCmzFiZ8BA1ugoTPGrzrx51jDdUUWUEJB3isrC9NWM6F6iempKdC",
  "key24": "2fTpGNHtXh7j9eayeM3iyAPgdStVLzRcVqkgMavY2q12VrWsbDHMYN7EsrFfubVGuHEnU3GTuP7HbKpdXkqNNSKv",
  "key25": "5mQUY59QqRdxLX2qYtugJGzynSBsAe5DzfNCbQD4f7TWJx53oPct4xySysteTKKV3rXvizgnavvue5YKMfFsHSDg",
  "key26": "3TeAiNb6S2j7rxWEACMpfkZZWVp7FFghNmUsNz6BJZHfDRCXQiPL49omtQQZLNudAZLf9soaTtDnNuHMyX5tFWjV",
  "key27": "4S3R6hKkhBRVUJdTPUwCHBeJ7QCXcALDSghG4egn8epdDtghwvkpH3vtWyrmH2yR567pY2F95NWhyKFBYDYd7pHN",
  "key28": "4wiEwNJGuCrry61FD6EUoFPpCRiM1nP9F7JsDDsYwYLVLJ7jDRs374Bwg6zCewWmqkvuse53totka7jJQEXtk3r8",
  "key29": "4cnP8FujWswBsFV6iZVVPcVr1Ami73e19tDwadpqcuG7Qff8aS4JtVZSq4SapgjA8PRULyNYahp5HsDSo4GczKjH",
  "key30": "2o514nN6C2s5GVnVS7Nvd1BTdnZkswjV57M9TMdnZ5cYoXauxMZBGZ2hGmsXr5hDjaBKBfGpkyH94DyQ2KdH93S",
  "key31": "2HoY6Kjt6bAUdNypFNGXZa5dYnGfVL8gGLQ9B4jLrba1fakpddyNHPjswhjoZFaPeGwNUs1i7QFnjcHaJ7SjGefc",
  "key32": "5NfHUsTRSNFHyG9zFGbMmVssrHbXp5XdYaP2LN6XFTDDxmeaAVubzzdKN55bNKLYt4aQDSQKtGJaXNvuhDk3pe6T",
  "key33": "TVp1T6kJrzuC5rfeS7mLfrWgWJ1RdXUqooTJETnSTr2qYbgJGTPZbqxzv4Wk9WpKaU2sn5X43Z1vbyqfj9tmzc4",
  "key34": "2WTzNbuyzVDboAMqQJEQFAU59DBVS6f6FWg9LTZ7Pn9SoyVL17H7SRagQgcKRJ5zudotGc2fijELfeCT6A1cZgvm",
  "key35": "4Acf5tuuJTbMJSUQduQCZsP3KEd4AgeysoGBm6VQmHgwJvh4JSf5XnfKxtpLBqEsT4aYTkNHdSx3MUU4quSMoDfH",
  "key36": "3GCXqtLZif3pWHifcNKkYCPn58rXMqE2XBnhvxpXhdf8JGzcp7BYG8cqVVGpXkvjgP2bjk9KcZPvAnYomdZGkiKd",
  "key37": "2NdEfmW3iQZ5puqVqtmNpY5GQthHpDsU9Ume8LChZrQEchTRAeXfETeFjZtKxsLAF9gczow4HmLq1xovhsceH4GP",
  "key38": "3DKcZVRaDhg4nPH1br79j1ziMq2xfzbWgCmspEEJeK9DCy9rRW8jnexu9zpwW34wcdxz5dVqN3bPZ5Spbm7mM3if",
  "key39": "34kjTAJau2md1LMHpk2cKhb5Zt1kKmBRZDSieRpqhJ3daHYLJoyaEMufXX1fPcEb4iD6hRwcXmGwrwU1w7VV5bzi",
  "key40": "58p4ifZZkgrtqbcoTV7Mpq9m7LdJiDtaCEY8DXGK7HpTNyh2AomKetrJnS9CTWXiPeSmvk6ZkvkJPbGzDekeu18m",
  "key41": "nESxythAMnFQWxcE2h9jEsCQJjvLYULkUbkubGHtLKgvYYmPg7uL54X2DTpe3vfqaNVHpHDb1d8c7jQowErSzoB",
  "key42": "4331LRWWumSeG6QFM4Qc2eY7pHMVu9TpKR8GupqusbPt5ryNs2hzTT6RAh1FJSorJL7vVXnhqigaxXb8t5apSKA8",
  "key43": "48ikamGF6iJDajZsguJjKLByyFn3hLC6r1jjtf4azMF1o8LmxyETdqzU1T8wV9UK8mVgEEH3RWFoh4CRdKT7Q4pt",
  "key44": "3LaVzbawHe7T2Tywesyz8rRBvDuN37HajcPE87imkbeV2MWjU1NP4wj5ucUW6T3Q4dEnAJrQj1dR5X1M3d7bwsqi"
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
