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
    "5dac4tjVmDMnA4rSyFusRAqtTdUkmf7i2vAjHg7y488dLnRxphC81HUUgqrUiP5Jhyu9iSXQoEX8JKk3RwJwL644"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nTPGPrQgqgc5hHmrabNJD7VHrf9koBk1e3t6Jhh6hm5o6KSpa6mTfCCzGrBn953vEnVEVT27E5Y6cDS13Uvb8AA",
  "key1": "5vk9c1yT16g6N8GEq9XmbgKw8Yyj5BDeEWrusj26P2LESNhDxWEGSoivMERR98Ui9jezhizojoF7NXj9SDuGgbP",
  "key2": "3VC99NPFViuWZidnFPyxVTa8seeEJLvPkjsmwfJfobydWsNuDzrUQU8JuWHvFjB23pg35wA8gbqcK9sgzzX81DWo",
  "key3": "6JAs8oyY8k3XeeDkmZNT3ee12vhHoGtfesRysLyvhZRSAoRhxNKDf3qnxN1iqNHuSLdrDgmLDCaGv5x8ayTdKt8",
  "key4": "3c263iUYvLYvjBsPfUNeyQDxvQFiHANnXb1DauCtXj5qQJLx7boFDp4XzucsdWSVezwwmWBbmuXqzx4UH5kUneoJ",
  "key5": "3DwN428hxZvFqy1vjZKRYngYaTi3DMEdoNsEugw7rUyfQXAyXxN3CpvmocztPtt8GMvA3AaCbQySoj7knTzK318j",
  "key6": "Xv8KUjezt2g98TnBfrGJN77mryn6nrB19rSoEm28i9q5owjMKMVwFbM8YHScSQ5SCWBdvWnjBQWK1N97yEv2Gnn",
  "key7": "4DpuHWrReBGBPUrFVhCB8VXKzqPYGtB7d2tMLvQdBPMinvAoNoAVbg3naTzCEzC6GkZdUPy1DevthxwFX6THHttb",
  "key8": "Gmi6RpuvW1okE536vRGfZ696pr4fPPmRKwLpZsjeEinUAsnUF5nhdWFATs2Fat5ixaQLG5GACwLKiyHgnVH9pjK",
  "key9": "4yUReSzHj9n5k5EZSCRTjVfT7BujhZyJ6r9YaCzirLkTmB7BUY9eVqWPrJ7cMhL8X9Mvq79tGasWfooj1Qshvc3Z",
  "key10": "4sfyHNUa92LURp44P3U7zC6dH4s5m3C8rFcwBghp5ptM8t3SYNoArsCWfYMdM9L3uptm2X47cwmVHLkwP7NwWFYk",
  "key11": "b2g4RKb3CS2JhDUVmZBPQKb7qneA4aoqAT7xwFTTZQgGPDW59E8rV4KECsi8kFgpdXXJusD3YwBAPzuEQfmeBTi",
  "key12": "4PK76h69NUoHZrN6SYaaYMwFjoZ152sow25L7pV1LbfYK8J5C5A2x28D8agv7URoEVMdNTNE3wofvp4wfXx8f1qD",
  "key13": "2bKcThyvmLMTkCLrFGeEyqJJYDF5gRGSfrniJL1zTzPZgmQMjiH7act5ED9YsSPeXiJDAM15esfWPRUDoL43zXQE",
  "key14": "3LD74oLNVDZjsowDSfeP2JA9yXTfzMHjMKnJ496KLQr2vjNWCio2rMhnj4YZnaFWuW1oxpXdrPoXVgKioEoi4vap",
  "key15": "67jWwjNj6GythiCvnUig1AW3dD3cKBJnmfFcHKpiRYY8U8qGv4NC6RMPxgA6R3xd9RuukS737U6Jm19fQaKG9ZAj",
  "key16": "4wySBKJJUdMyw4zqd6AwJGb1VbitYkbFyiccvNTFyD1eiJXNVYNNFLP5yUV96o3X9jfMtTmSWMighSxrArJFzJeu",
  "key17": "2TdG1bBPjM9jGQoRjih3rg7wuqUgwSdjpifhwrYj2c29y84o5o7K2eCL45WJXPYWFEapxatTi5xifSjTTq8HtdYh",
  "key18": "3kgP8ZnRF8gHCX7VwWqPmhcdtwppFsbHQa3XzLFRd9qGpmEEaVQsMLDbQBj6myk5zmZByobhRpXkPmfHWUeXVr1G",
  "key19": "e8SHacZDzH2VdW5WvUNtYmTCEoyeKB4cXWaghdRSdzgzNGggL4u8qqx6xpZbbahTaeayRm4cgwWQjsVgawCQEtF",
  "key20": "2ZCDWWrHfaJDXfrYbPpHyqPFPgo45YmeSKiuMtXZwHZUmHPGqPQ1ZxJhpZZ92XwZYo4AXM6whvyHm7C4Gwz71DeP",
  "key21": "2SfbTm2MvShXKYKgaXceNp7BsVqcYDFzFA1mQPXzAknHktYqK4NfECNCSCYA3gkUPhoG49GZe9mLTNT3WQq5Ru4v",
  "key22": "5NamSa2dyKXr5FaaovkBM2Ry8FyLDciNokcWzSXo68J8a8CxcLxuRPdDwsgtK5S7HYjThZ3HgfSUHG9ApkNQWHga",
  "key23": "23qBeqHEib1f7KLKF5DVmRhhPA3Wg2GUEo5P8g8o8uBbAEeGEJezU4U96GjXsPFCcsXDdNshhx91FZ4WQPWPhZKc",
  "key24": "ZQDDdfKTo9zuSp6jNsy3LfY5n5zF221kswysjN3yKJA1AN6JrmrwoW7QRAAdeQnjt7tMQZQ6U4swrga3v6NQS9p",
  "key25": "iyZAdt4v85y8FR4EprrjF9uLqZYepbQFw5MjWfgGyfcmCmgvefuRPKjCeCajTaPYhX58EuBCfFA8hX3UVdx6N4i",
  "key26": "267bnM7p6mTSNeppRJiFMyDFBcziELhivQEy6RPbCtS1B3FrrTZh5LjWsHt8Wn94fHsJpit2GPKfyEtcB8gVFy8i",
  "key27": "reMor4fW3RMy6XJ8J5ru3Qs4Y15UtajE7DDhBSP6rSnotYjLeJkVapvjUqGMsNPHsdsL42G6CJY1ewqFq8VZbRW",
  "key28": "4nBv7RQgWJnh92Cy9TThyWPok7rnGyoC3mUuikU76JDVZeM4aRKL8ZZLa1cBPtihayHFnLwc43aFuYid8ra6k3v3",
  "key29": "3me6WWCmTbWXwVFRYtXwhjtcZNbDpdveqHL1ABaxmsk3FNPa8VikizTAkjUhgWaxwiS9kpnpcGYTJTVCE2ZTyyrn",
  "key30": "3sqw1MbD6cYRh5bvVQcrrceYCf91ZC1aDLwU4h7eakzncaXMShm9woDqg8HmQjfibrRvoobAdVYdyiKkkoBojQ2K",
  "key31": "5VcWBtRyZUPauu6UPeVFGAE1i3Mnh5qh9L51GnRqfUY4V7UeFqCBejd67LAfyh5WdmiHAUQwYnYHXpSGUcpUBTUr",
  "key32": "3S1775Ktid8KBcxFuozVdS4oGQkQPuLadUMeUXLWEf4AK2vq8KeWWwvoSyGCaD1pSyJUh8m7bCoArGWzXosLxHCs",
  "key33": "21PixTZaaF34D1ocSudEaEJekyjAvvnWDa9DqXWGyFGYPzKct5hDkFy4YPmzvuF2p6SGvxfuz3vRpU9oyc6d6wsJ",
  "key34": "63HWwVZbXxod17MrH6B3fif3sVBdnJWdivMEJ7L72d6sGt88Xjnob521L61Sc8Tpamb67fKuYDAvdfJJmzHsxWcG",
  "key35": "5do7yQUME2YaicUZxq5BnCfUoHzzd9Ph3uU3iS6aDnBBu9Z2UHwab11mRpUAAWsk2Yqu4EmQHetDMePeqyZ3sxzU",
  "key36": "5EUr2SDPjr4QxwGdGEPabVrXGsKZC6QgHM1F1bSb9zNbx1L8i4UaM5WKaJHdnZT88kctDsPHwiYxD7SfMTKaVmWQ",
  "key37": "HUAraMn8NzAZz9NBuZiHDsf2avEAtu1AgM6hoEawrmFUFzMYrh14m4yLZ9GLpqC1g6Z1CWJ1ZJeZM2ph1LQQ6Uu",
  "key38": "56MS4tbyft9rfmpfUoPaCS2kZr5cCgkGjyCPt6FMeGNmDzcpyEw8qi4mNYgux177uDjEUDE4UGjPu1gtiNjWW7cg",
  "key39": "5kEGUSoNhGCNxXQDubNamG5RJgWxCpvrUtUUGBKkzDtK21eDCLFcXA1va5MDaza2n68LKpenHU7wFu9TfFMkCgVp",
  "key40": "5fn69z1YGv7b6nwARwWd9p8eJzdMWsXA9N8cudHK3pxgNBUyx7dwbUkTofLqDJvjTGtSuLDzy4Ew4vKUDq39iE1t",
  "key41": "55fQ6gq9Xc2a4TCJ1zyAs66NDzmRnkgHzkqUeo5mCrE2zWD7vjWKKKybdZVfJTd7hfYyTCtan4AymTFt8xf4HtHK",
  "key42": "3qBFruvp67hGJKxjuGUS7FL6S6ybGYpkz4C69ibTyGLbg4GtHykiWRnxM5YfGmPSEhTtbixsTeMRn36z5bEQz69H"
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
