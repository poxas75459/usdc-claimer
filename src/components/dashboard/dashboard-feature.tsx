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
    "3mMKe9Tq23E5bCKWw7wUDMPrAQHTnQFXfkBqJ93Sk2BjArZasNSKAqVkMwT2dCHmJem2785VgHWwy1ie1NLxvBrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VPhNwWRNP3gzN81EZoDi6r2kc6xxQraoQfaWv8ZBsDimcCgXCQsjvjW1Y5s2wzLS4L9dVHrpfvGx8VFEnjEvN1J",
  "key1": "4Hkn9tsnUB5HiyA7fWrqJCpzuX1SXgWGPjWdPrMWXCVnPXi1shfG2sx6LpZCu6JJDHV8CFaw89VyhtzeoZvFpavR",
  "key2": "5XXcNQC1sWWN5FuE7XJ33qcALwJu7hFcvphTuEan1hYhhQRe8MnWuN2noWgcGTKCK3r7Coim3iZoXnRjyLERwSLN",
  "key3": "3fpWzasUqw6NAMWGQGyVLxbrP1b6g6xjdSjrbMwNskPkDYBRY7N1FC2EyM6EUgwNmb6QT9xd9NbPwaU9H9CRuKzW",
  "key4": "5XoV7vrwuhFPJaLGiu5E4mK1BHW7hfYLeiTEJNkKuWcTesTv8s3zJteJv654FepaLEgcCFBNagopNyxRzR8JjExm",
  "key5": "3nWY4wZtn6mATAVyVoSePv96cqqBryguE6ZijTUQfeWEeaz3AHPrC7PKtTeahvDUtA4XU1XKaiMXqL5vy72mDCPa",
  "key6": "3dFaANGqHi2RvsAQcsvpRTBUpX8dfheDYrsg74uujC6oYV5pMivEoAhppxv1AoxJ5vQ5tHud6xU82roSHaST8AYS",
  "key7": "3aJdqZgSTKnDoS5VGnb9BteKSNURy2pL2263eeHTzct8pZsuaKFsncngwRkZjAumzeenLPWn5aAzBTnQDbwoKZDU",
  "key8": "8ZDscN7uMuLgMgB9SXJf3WLTJHk3ShqEs9ia2mcCasPz5rRGrZzZXmrcKv2TuMfUcCVKaYrNeGhDqtW26VRTcqF",
  "key9": "X14KR67h77mp32wuaPvwd6MPAugMfuHC8LgiegJLyptD8bhW4fs26QNNsJLFdhooChzU37KfJVdbXz2FAcQUDwN",
  "key10": "3mXbjNmH8KgqangoiUzvkoUpsd1hXMQEpU4AkbEYokbfdvTNFDPU13TyZ9sVPcQDP3Mu4spqNMUNffufoADQ2sfD",
  "key11": "2vhKbpcteiBuLSmGyzQLZceUoYdpL7FUYuqBGndWfmSMD7H4zUMrBBvC2g8uHrXguPJUqHJMqtU58UDQTnU4D7vK",
  "key12": "4yxUED1xBsuEopzG88RbCUbvKaNGW6taM6mhzeF1gKa1Dby2teSFqQ5sngtFtU1bgjH3Stdf4ZgcsgdotPi8FizL",
  "key13": "3HUVf1nG4bxFkhYUBZchP3V6cXr3kh9inGFFPP8gr79FoK3oV9P6eJiE9FcgZbb1pTS3JsLekV1sTSXhjCXrZAr6",
  "key14": "657474t6cY7KqhmJgyaXYpdkTDr5ZxJwwbF8RErfttSoo5AWNZ6vbwZFFY474htiC5s2H94oyL3oFgPBoJWg91aL",
  "key15": "zNsFx8RfyZqahHiKFN1nK8wvyHwLbrfu3bwdK4ikkhC2i8aqNBnAxrKdt6WNjk8N3apEFbAHtLFpXkka4C3bmHf",
  "key16": "3hVQ9ccQ13McSZ6ALEJZegGU2QjtVTxA983heD5QGjg2FcL1M9HkAWWZSGz9Dvd4MLP2VKXkmGP82a4zik2BDwcw",
  "key17": "oezKMRZtNGsehkiRB1iuh1ySaYjsUMwiNrQiSs4CDgWxqf7oRubBFywzayvbrcKPbAwiqx9GQdCjFruRqUnCg35",
  "key18": "4sCyVZP1Zux7XkVzT3VviMB4wznkB4opoVBzvR7ZU1aP1W3bexRjHvwvMcDfpnSdRjHfnyNAyze6aCxTotgiFydW",
  "key19": "3EB8vstg4qSsACXpN5oFiEmLbne9XjCD5vQM7BoCryhY6P2Qtfzxea6og7ndrnxeWV33iUkyfbjiLhnNQtyyZtSF",
  "key20": "BuecmvoXeA9L4Gj2rAC82mXae77naPXushxz8hNKuuQ4EMXNfVJYjqshwMsXJzzhjmJ4mvjrMfoPTQybtg12Tpx",
  "key21": "teEmRccbx9M4qHcSx46dC1QYuaVz3k3uMaGiYroreGvnSeGpM3C7URDXUyYVoAGGZg9ittC4Bqj1NaTdBuJvqXv",
  "key22": "4AeXPHXFKam4YGxwLoiAZfbQ1f6VNmUp52CUg2Z17Fte7NyDWMx7kGQ9GDGF3tx23fnDLCh6ymRAkb6NNrcTf1FW",
  "key23": "5p8FiFVb66yprBi5CShakrZyxSQCJKNxH7jAFiQ3vMdDDgw2vcTZ84Pjm68cUKxk6U8n1qbhfAhxT3V8o8PHYGjP",
  "key24": "5riJKWovwEbMnnft2L1ffwbZLNha8citt3TkKaZARQgg4Wtj5Tx8VUZepmSsK8idz44Yk1z4QytU4eEe9zdJ8S3v",
  "key25": "4NY1ty1MLRKJoBcswyNXDcYJ6cM6iXzsVpnLRFH37wf8TqPdgPpj3QVYzPNKSCFgYYuybstuFwEMbVQi1uktR11V",
  "key26": "2aStsTas757Pbu6wUWmy7CWd8i8LcYpPA1jTdaCD16zs7E1WKueyoVA6zKPsNSKu7J4MJP3Cgax3KDKedpWqWPVx",
  "key27": "AYj9Z8ptUpqmUDXRX7EVenHQjbSyTijyrwc5YYS6yxubqWxZPooYqLfXhvd5r1v6TKAZEkjQZHiRRCugWEuZngs",
  "key28": "fCME2BEVHinppqnyvsdPXQqMSmNjhwQTkMRWe3nigqchZ4NAnR7BLQYCWkeQy9nURLiqNN6sVQvVy8uvnK2FZ7a",
  "key29": "3YmdDBQ1VXwTHraFEx6GFgjiqPvvi92ttonYeXCcP9py9qbDJb6D1E8AxMxKWgEtDXSDNxPpsneQ6H18AjxfWQcV",
  "key30": "5tHZc9h25seYFEaa3Kjy1wVPVg5aoQC3z7NXyZaVKnNG4XQDngVmHFhV3RGoXriqE5fZ5ZCXCdvXZzxssmfrY5TD",
  "key31": "5iDnZVK7HxzaUFUmwbG8NYZZjMPCc7B5uUGYz8gNrzmZSesSdBL3xtdLXwKcdVHG5dBeZV2LLVqv4UDH5G1CgPLD",
  "key32": "45VtRUJFNkSWmrZNLQj1nWynUZo4qERiftGUPRSiqezxEFoq6pvuZHBjYFxUzzkMHdEft98BFHsrKJLoYDFgMZR7",
  "key33": "4w6LWAZ2jY12pSZHdbueviMrV1GxvAsszysRMc2HMACRiQV6iuiUVDuDo3qHh7F4p6EMEmp92xPQHLT5Yp47HoyW",
  "key34": "uQ58WncRUNL5Cr1cFoGc3Vi1e3kJkRTJUk26yzXiNPaqSPbJfnWpWyPqUp419K5f8V2e6pVvCruEsCxrisB861X",
  "key35": "xEV6Aipt3HbddHU2kPNDhyPTGTkmtcgFBz5cVjMaA4AA3EDLaXK6CQN1P1nB8NHwBcjWgDVUACeFJvGCbKNLt4p",
  "key36": "5yaFQhdheugB47peTqxoNKJVQw4Q1HxeaNBMkbtL6k8whn59Hy2L1emDgrfeqUyF4aoAk7EzdEojE6tcAH4QXygz",
  "key37": "4VEkiLaYZ25JPhjmz6ry5EqK2nc6VvK9QLBDA3kmBxVwnNkAjSrve8iu471536mWy7vWzdYZ8HWaqBuTL6eTU8m4",
  "key38": "3Hr9PdSgaAxBdE5drZ9PckkuVarvmuZNGXvwPABtjeZSgoCkYPVnRJaYCg8JQEv5zhVDgwZvpjqbUhgGjSUQKNrh",
  "key39": "cUeLxV4cViTfLEmWPb3Wzk9twLCcYnD7387tmSUziFzBQBR1J5ASuoCEZ5ATduXyKuZ7aJRfzpyVrnRrWUvVUbE",
  "key40": "2XNRdJZMoGKUkwwAyrv6HeTrSCVofckchFNxXAgks6UNbpihmT1hAmv6qD3VhDosdPzsKCoNmDFXffqq2hUKMHiL",
  "key41": "dJ4Za5jx3NUv4CXtPLu39pjKdotYNLLjW4K8pTQcdhajtSbzZqUtpfLergUJpfHWWaaijMe2vYCzPiFoziBHpCm",
  "key42": "5J2iWbMwmJJ8Qt1tx1CTMBP1j4isCekGLyR9YB1XiB8NNbQMDnVwsD5B35zvcKzY9pwNXZSJvUZQ6TWzUCSBJZgi",
  "key43": "56FFaRK3gheR3NDPYkPFXfx69xjbvpjMAj5qo4smUbgmgiorJaSvsxRj8jk7tZSyyCsum4gUyKXoysc9s8S55T7f"
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
