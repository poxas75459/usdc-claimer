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
    "5SMsTzAsnDrwf9nAnUzHPZcyJtec4zsAnywSX74go3c43sH5fDk7A4BwuBR2TKphZtYjVNKpcN88LZTXHG9bgrTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xz7dX6TLcBk9XBypDsicBG4AEyPjdv2MrNrusoWSSY6oLfCrZqyUF8agQMwxdMcE2UNsh9nJYQC9kCQBKrxNqgD",
  "key1": "5zShPn9iGvBrcGvqPJMArNLhD8uYSwfyQWCER7Q9B99XadhEAFnD4YjSgbfrggxevySuLXqDLh8RpLyJrmxKWUoz",
  "key2": "27nD4fQECJFPXLBtgxrwLb6Lyi9poJYeaGTJuCZDTNUa578XB6Cmgm1LScQovuX5gcXKku5T1aAV5NdvRujtvxde",
  "key3": "2UZjJZWymszhS4GJFAjb7UKad6EnVv89xfWHoEregzJpCd5vSt5kXwucVAHrZNvLzP18j2wtRvrUfJ2KaZZ7GiBL",
  "key4": "2ZezG5Z3dVigvNKNru7w8tyGzZSfj55ZdLZE43NjvZ1PaVBxoUXw2mwixVn2nN1BH7B8weCR5JziJSqVtUCS9Q52",
  "key5": "B21cu9LQXx73cmc3awiZUv3yLiuakHboqZtGF11hBadxB3tEsXkMav2L69mBVoPkzTKSRs4kLRNEXwusBZGj3iQ",
  "key6": "4qDgn66nRuEE1pU7LatLY3LJG445vPVwanTFgzyKT6QwCjYdT6pz1tebXDfowMaFKV9tmKzTHLLUw3qTfDFrHcCY",
  "key7": "3korzcb6XWMuy5uS1ermM9bz9XUgkgfUi842aRUKobWEAL66npzjYyCNTgQxP3zav4ndXzii4W4C6EzQ11Dd2sH2",
  "key8": "7fnU365Ya12H4vghtbrPBxa8n2wCacSi5ePL3ZG4zw8YKu6JG56nwUer6rAdxUfDxADcKsXX2jMnZBkF4rPrCUN",
  "key9": "4bwCyH7dsMXbMUKSXDvMniN7x1LozGvpTe4eTWarj7KJjUVAum4oGrBAB8R1b1QpihiTux4yiscWwKUAQepfvBKz",
  "key10": "Mh9oiryV8hGkQt5iX8Ympo718r3CVQTW8f1NcWRFYzisWmuzJEakBAkx3YkogqXwMBQH9nZ4Nhr87xB9rZFhi9e",
  "key11": "5QjKfFwS2Pxkm8uNwnqn7m7J82CpnCNtEquim8GtQsQAN2fJ4qZAoMFETGkQ7wnC8rxRKevVD1wANvFvBJ1adHHM",
  "key12": "2eFpGxFRRhosZNbdd6ncFtunydT93fo6WHhHdXqR5pe4FnSeeXYQmx3ZVeHTrE6SCAyBJpzvGhVZEsNvL2tFLnES",
  "key13": "5yGevRXvsfBEExX1dMvo32SPXGHYsN7gDUkmJWGQo6je1f3Qyjor7zWMqN1b9GHzJNJgHfVbyCCjgCtL7PzGhoy3",
  "key14": "4wBQTrs6CFyTFwko9jHnNLeS1VGVHKo5XoAaX9uhFF6sp9k2bpdUy8jJuWbqMAXfcnk2Y5H2sFTUvaPj5hEfXcM",
  "key15": "5PEAfWNrfVYNxG3hvUaLiFcMYEbrYaKFnbRFcmEt5m1XSqPPDN6wRXs5jFsMWSWt8AmZj7X5BEQDi8z2bVVGunT3",
  "key16": "5HPkxq1LLCotgAYhPTsEDRnXTnM6BELxkaWvxy3KqWpCMGwDffbiaHG1wUpGomh8f8Aqd7Tjwo9ipZbRBYsHGu4j",
  "key17": "3729YSs6QCDtJWJGLsiXrhhYtFD1cQVt7PDkVVAi1mZT4StWcWE9A5rHxVE3PhiYbbgRt71XGNYjdgULEKUrbWSD",
  "key18": "6ysUYv7tLCk4skVGJSZMhcbpocq8oqjFPQ91G5FjjBD1Du9iXdnEFdLcFXGeXvijmKQGhB5JGHJ4BSk1VKbQQ4g",
  "key19": "3Y93eF9A49Ep4AyLAxLpJHf3da1tGzXq9NNwNJ7XbcYXDo99Ghtziz3HUeeYPqNCakiri3hoc6rU6Sex5UE7ccJU",
  "key20": "SEwAds4jrJmUiRMke4JiJkedJ9mvo7sujfmmeigdYxTTXDWjiDNJnwHQiRdeTJYrTLpzBP1AktZ5M5Ma3h4nC2R",
  "key21": "qAHarXLjkAB8sdunREsn4814DAyFW8pkTuQXR9dAKu7Sq9WK7VovJuhjoYWuXRLMNpnHHP1ChYPSpsjx7jZ5Ua5",
  "key22": "4xcXTjzbvQyUyapnT3VvBfhmZDm1M87B7iSrDRsZmY3K7ERck1o4t1ZAEWpC8HKW2tvUFnT7c9EkA44d76akatfm",
  "key23": "5w5Gbi9iX1LGMsbuKLf7rW1fmh3TR8VCKH6cDHTBFpgu7bnuQPVgdFWB57YjCUjGKd1haCq5KPegtyFZ1rCB1pFo",
  "key24": "4TwAjvtAX2LWg4XtuzHCqfd44MAW2cwMjWoyisF3i5NrcYPYyitMfJX9UimkkhUvSjGxFwfpgVaXnr2Qvm5GtW2z",
  "key25": "6xwafGomGJFidisi1py83bqeDDGY29gjHfhbvFFQFbPoQiXyKEji7BKKUxxz7mgA6RAhq7u96kuYKmPPfWwdG9T",
  "key26": "5muvcTwv1PVYqpBQBNrPw1GZPrd4vhy5H3k95ZM5sSTMPQ8Y8VSZWhVo5pek9aUXmrxwpEnbWKmUsDMmQAX8y1DP",
  "key27": "5xdFTjpA1j4KxEPizexoCbrLFGFJhKzDcVDU6qz7pxszQUTTudEUnGhyqLjE2hbDKjZ31bZZwRK7frJkPUzfHFkn",
  "key28": "35qGZzZDHtoo8kBaGgsAH7BEDkmL69QNF8pPiVtbLRhVU6S2KYDz1etCES3KZjju2iaTgaMS2oLG6GcoZVKemSrQ",
  "key29": "5e5XdS781oqJG2HbWgQqA7ZfYWGXjj4TC33JvRe7sm2vtwhrNGL8qGQJrFWBWBqnabqS4nR6t4rCYmpWC9BjtLM3",
  "key30": "3fttvub69iDvcaMuJYSjopGJbJUbL93nt6EsQ495tznEf2xj2BfAg2wwiBiUjXLAoQN7cdoezaMNwnGKjDSVEGrr",
  "key31": "564nruSmnRoVXpEWhSH19D8A9pL5TnnxDdeq7DrunosvscPHsLicoAUBAAp7yCFUfWiPWhQ1Fi47xvtcSFjPzNHD",
  "key32": "5VDFP4ENC6RXHgMFix6dtCEvnz1PTQU9YhYqshn5sNrYX9iqWgLTqcHEdUtqxsgAqWTPERjbk13gpupy2zDN5M5P",
  "key33": "5PtDsaygnVGtfo5Hjorebo5LWYJwJKn1mpftoVpsSZoSnQm2uSGsNF6oFY5n7NKusb69o3kM4XJmN3EZmZ7tGCGf",
  "key34": "5ZyVgnzqQ8mz3rLqaJ2NBRsSZKNg4jFJS6uregC7ritH2wYRQaGAzTRNUWHuSgUECeaCFHrXTu55eu59LtAAGcnT",
  "key35": "2TadsRxNCwQjUv5NLU9Ct2AzHZNjNWS68TTJpvMnwZja5PtzwjLpYnBBr39FWUSACprVDgCEpHteaqDn4xBMqveT",
  "key36": "7zyqgLKHw58uXFRoJovsizgAu4k3zRj3Dd2qwYRv7XQSm245Bt6V3Ccuq7Nq5zrP5sxnKti3M7kifCEas24GThR",
  "key37": "4CfrYBNiv6qCs1Y3UmF6jcitbncMxsHj4Zdw5DRt3a52DRsmYWVeGaM52KwZVVYSoYjNGe4ssxHRYtgJ5cCt47Bf",
  "key38": "4mQcuCDokNUMCBciMKzNRPNoYxoPRsEdAzgPZwn9CfTTbq8V5yzsGdJFnSRbrm6P7SkyYnDcQx4vxmyMwTxrfSpw",
  "key39": "4xWorqyvaC9KC2NVqL8yFAAuzgd32r6b2vkJTryxXT74nfWf8EeNS2F6tcNwaMLN8pVJ47uizjU3AjuLax6DZxce",
  "key40": "Y84Tc7zeGomtBGC4iMUa4K6nv457NpZb2S24rgKDR2KivgMoQoX619vytsUcYLRck8CyV9Eqzbns6YEW5Xt8epb",
  "key41": "4fzhSFGR947wt6bchu5KsftDdtnePkHK78Mq67oAxBoxPf9r8sDGRTKLru9gxYQoyTF45obtLbW9meZWm9tzwtD5",
  "key42": "MGFkKYtvSEgxN7RvjA7vbkfYDSHfzTZs2wzauMwmutDyG7wjF3fq8JEpcHPFbRSeezBy9UZV6kvoCoxBpBwWyWC",
  "key43": "2Qk1ah3wtp8CVc1nX24xqRg4qkJaKLiVzqcZxwiUHMroAc7aQKtJtQ9xbHeFeKpPi9d4WLVrDquhr4SCK1mjFHZo",
  "key44": "5hCL9NdJv9VTTiWE3tUjBcp7hztrE1TLkdVsX9F68T1TxPn3HyukpBvh7Xppw1txzSp8CwVX1tiPz1osdeNknNKn",
  "key45": "ghq2cawUojyrFSZBBKY41Ue723hNpL31Vswerc7pviyAUS1CLF1eT6RMFGQvyG6oaJd1ccphoywcZXWs5Hj7gtH",
  "key46": "5VW84a7Evgbyg7zp7FjT8vmdm3u6dvRsMixJnmFzNgxvtMyUn88e9UztZ8W1BNz3HA98LvArB1qc9Wt1ZPERpjPq",
  "key47": "4HmJaFntq8yGeR3e79Bom5VX5BEgGaZcFdHaukS4Y4gEaVoVhHvVmMqxJbo3W1acnXve69L3dX43SE9r36KXUkA2",
  "key48": "2TdXPMjQ5rQfQSFvQqHQKpZ9y53HdPsYe7u74oGGe1eMrQCpDQEiZchMjxtRdx1F4HfuQzyCpu12uj9S2Kpp8is3"
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
