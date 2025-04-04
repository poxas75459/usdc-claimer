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
    "28vttxCnZhbzc9DLN9L2e6AzETx8WmAEXuuhTtiHxr6yFFCGNkGeRYzszNt86FNbruy12SFkwb1dJkA22fDwFaXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tCcogqE6wFUbJMuvsPVvuinVbKEsAZdR3euiJhwi349H8tGKQTtRrd3NXHz8uryqe22nyoAU4SxTCsm5hFY5V6",
  "key1": "3RTP6tgmj3YCDWk9X4DtPjbkwobNPK29rU34KTh8eDpyrNRHNoCxvzTDgkDwV2sP4thokMmQEF4mtRzGKEjs6dhq",
  "key2": "4p6KVf5LCtDcXg3edkicTET2PSqtamrpWvauqN4QxsbLTNmJZ2UThgw5oEtfLTCA1oBdeJqsjgRqrEPMtehERgXi",
  "key3": "34o2XWZm8xFQKicfBVe1hUQYJUAtVo3Dt5dCWRddVG6zPTdnPceBigPzdfmS8x8ppiPPszicqVKm8Cc7K3A3nWDx",
  "key4": "XSCwoY4dGnALLvtvy4WpmQD7QrbPBGzfEFb5iHZSi4sAyLEBHvjoLy2VricN7787M64Hra8qroD4deKGdDwFbDg",
  "key5": "4bwUmZmG7nzUYXVGSTF9vzWsETtZuhhBraKwbmdBoaXfVJFZt6kGfcxyFrbAmRw3E7zeChGKK1YoM56g7Q3orsim",
  "key6": "3Eu64u1PGVYULykn8cULpbkh7BhussZEBxeFtm8WRzuhHA6aUgm3WjFYVcFCmU15inJsiVcKYC2suh3Xzsxpfdti",
  "key7": "y9ZE79cwFS9Rog84UujgNVEGvH1xo4v4JyFqiMjiy1gTb5e1JwYDjUCLqQbsTY5U5zPNMgavKNhqf3ki64h5ZGJ",
  "key8": "SdufsAK8MB7xWsZwmvPxhCGktsCZ6WRvUyU71FnNRnwmBrrDfxaG6zah1ruw7qqpnG8wzhRSUjUVURy3nWNiaNV",
  "key9": "3uGfXettDZG3NHDuEb45jLu1JKbt9sM29PyWgLMYHqfKzTfA73sXEn26LPoHQDAePrfjSrdqfdpzzy3gbKpnUkVf",
  "key10": "3CQep291AXVTYnrATkKij3awpQydFDrkoDi9BmPUmeywh5PabYJT8c2j97CDEDUUytnepTdH6ytvPJPk7X7XNXzh",
  "key11": "5MtZ7oiubbaT7sMVoGiqVkmRezYskAaJ1xudV5VcFrRwgRSc2NTWBQrNkVAwLn6uUY4nKE1GWTa8wBbC3nGs4iKo",
  "key12": "3nSvbZnU1HyQ4vaSiMYDNy4MfD3cXKZpxrAKC8S7SDLaLnUFJJC28L7dmWusEWS5x5ubXcLQ3tyPPfP7QdHNGYp",
  "key13": "MTsBUZaGBa6g7MUq8ZvKP4QxiuMC4jL4uTqv4CCm6Ki3QTx3e6a1taazTxfsGYaGAft6QBXANhajypHLgmYABjn",
  "key14": "3tTZTTtuk6iKQUnxTy7XqKbdb46284hvTJT9thYLJk2sNz9ShV9YRDPvArGjUKpmd5yaBHYH1CW18MPVHbZ85VZ6",
  "key15": "236PiA3UCFwzA4Q9RE3TRruMXUcoM9nm7UGjnUFpbAX66o9vy9Z9AnKCAHLzrruGpe2s1y6gtmR8nYyykd73Kjf4",
  "key16": "3mChp9j6HTSDrg3w8pRKPQJC5EPzmSNTvjHarD7LarRFXixm5YMmZdMQdNEtqqm3uLFnVbFdbRqPtdwxTXUZsSSy",
  "key17": "41x7U8ozUHvcsfP1JmQAnYp1yyjPc9mJKH7kxNNg3NFzTninz3jTiJvijzBVZeWvfaLuHDpyWyxMcYeH7CTLjGFD",
  "key18": "42dGn4UdSnz4svTTEmYUoWWT42FDYsyGbTyCcFxp8wd7ytrKs7qJeeWEveDrQGnDcFL6oZEf3f4bphYDspMnnjy4",
  "key19": "5SRtK46uCAdmxSZ4oqG73ZgwMQs8ar52HoX4GwzBhAgmfcJKdBkvpuM82wvD8DDFhuCCdmvGmx5AyVx2PhDxS5VW",
  "key20": "Va94NwBGmQjMKAH9bamJLgyC5whpj1qpirktxkqYmSQ9mCuBUpfAmGsNm5sUGmMHkwKNmb76wcBpJuacnv4QMTB",
  "key21": "3RubFygBdCHbDnziwehuqL6PCwHYs7g7Dj1Tj57oXwkRa5xXxHUAWm7XYu3h5RgSMNYEdacvFrpx3vpQb5HAQYx7",
  "key22": "trReWWNAh8eDPYyetafc7ETveinbiKoLJLEhzBbwrwm9ZNWxhph8twwTbihMhtRgECR9RgXuQMsWVC9u9jovRaC",
  "key23": "5wY45azEjbzWgJAs1nA2ASPkd3Cb2jzQcw6mZYJzDYpN7f2tCnbpcaZ2JDs1z9PHpxZYbNZHzgVAtUrNGrAP1747",
  "key24": "22WNXdEgfpuscJpTbk4P2PcrT5DthpWgX7BmAhny2iKit2cnX6b84x1nzR1JfjxHT4qSHCMDUZY5ucrGRHMUGpbm",
  "key25": "63FBhZEFsqwT8JHtdtnM881kNdeArBVcTLDnCjWGQtayCUVpK1sGevqyfHJcvW5kB5uB4KSjxjE7itxFv9FFiuN4",
  "key26": "4StYLs4zkiEswVxQfh9sLAfzhBvLmWY5wvxEz8F7Zp7dB8gpRJaRcVNkbgiu8noaDiU6xq859msvpkVYK5kLc7Yd",
  "key27": "4n52teXoPLw6xGczHuEfGGiyquQgSsX8eitaTCwUZUEkquPbY9E9mTFYj4zduuXjNqK6tz6DZVmG99sG1zU5YRCv",
  "key28": "2V6iMtq8hndGjxLV4ZGMgYr3gPBxpSCxthGohz24AEmRsKJBnCpr29VaNCpfyJzchHPSyrPhuH3tx5L2TkjnHC8z",
  "key29": "4QxmsaWHRsSqFgLXBhEsCTShA1ukPW82Gxrcg33BUFNLLNGH4fLL5BhRrR9RVrGWhe1XsUb859hJa4WQw14V8y4i",
  "key30": "3DdhPCddTJUB9YUpdrynjagupykJwyPotj5r1pQNR6rzTQg5ZXBGvjQDeVueJXup6X4mjtq7ZkjvTKjXNkawcPdr",
  "key31": "2791b4qC9nzGiXVsXwo7xBipAgLEr6B3y9uCbQPEroaD5AV5oH3ybi1ojsBo1uFWVCY4J26FYQTNcMXhB4AyJhmR",
  "key32": "42mozgCmw66mPCiTygtrSTb8KvRjEhZtDBUJ9tZ9EFaxCgeJBxz1MBS575ErLwcdc4gnuviUzecz7UqePe65A1rX",
  "key33": "J9kZdJfnds33XaE6WG8hLJqBBpKfpRDDoTRUQyeGKNaKbZvetSXW1hapTBHiN9e2yNxaJut4dPjXht2wnnaNtve",
  "key34": "N6adSYnUstR451aBoPWauaVnFG3yCY5ffJaCp92KkCXSQfxZ95p5noE3sA6CF4cFxdL6oZQPdrx1GpnHPuEteCx",
  "key35": "3dAUmM2YK8UwudED1oXX9tNZ21Z17vD7iaPNpF3qfJm8YSYxFfkTfiGZUC7HeB1fGmRWtvtq9mmk9cyxb14eiyAg",
  "key36": "5431Lcyz28Wsj7hhNdKBsm8AZBK1PfYUJqNE3SMBuncEZ2bEiygWJ8cTRGgQxjZDiPUwRQuw5YGTF3r4ggitoXVk",
  "key37": "3hXSM6UudqAJ1pTgGaZeDBiSkyCqekpWFaDRCETQpkz2DoEMW7wc21YDdB3xezNZZafvRmQ5dCF376o24chnQbWm",
  "key38": "2Vm2Hg3b1aQ7KrHEg1seTeeizZZ2oGs1twdMF8f888RwnLqX7MbuD7i4enRQdPqWyrmd9YxjXNNyPHkEQtnhpfAj",
  "key39": "23am26HXjSAvSgmdb6SNw5UQBdzFLVJN12Ey6Tf51cVpYo1Jv3BY5gmNiQBRCia7uoVC4K5HU3SYKqMSwHEfgq9D",
  "key40": "5GfPE1g2W3wyAYmLMagfuFPYp7XRAM6oQNH5FfhPjkurJfcoJAtwkdy5hBMktVk6pUSPxRRr4ub1ABwfMxgkSZ2V",
  "key41": "2c7cLCVACfmW6Roj8R7XtN2otqZTZS4hTs3dsckGqTLiP4vJD617ws1bvL9TnJTaq4BPN4rE8GMrN3gko9jQoqRL",
  "key42": "yE2hAVt1wrLpitLbGsTD1pPhivT4hKWoqjqaSn9ZHPJzMmawdsf9tLVTasHL5aEFYR5s6U2wC6cC4PNVZjv7iVS",
  "key43": "349qrD6GjTQrDtPEN2grrhsCgCvVfAFhUTD2SKgUF1fUr6TPy5bCKHQEAC2wh75N3RB3U2bSec31WAAoP9A2cSbu",
  "key44": "NYmsRW5Kicx5boGRsZC6CLSAxZzvVkbgZyZDZP4FmE1h5myrJ3DvbnXVgm9JWrgu8c9SVP69si1pxARqQJPHQpp",
  "key45": "3qJ1kzXcwzRHCNoSWwm5ezBhbtjUvi2ECvGRgMxjcvHrjmurJjdvvGcmsx2jK8w8jPXYASVQ5MBJBW2LtLoPv27w",
  "key46": "2esQyKEhk1uZeP5YR3o2SEqgGQWJpTkzUoLkVgsu6PGa9ZRdTRENXor23vrSXd5sfPNnU5UFKuZ71UH5N1j4c7GF",
  "key47": "imaeM1nM6bQ5k8RCz86s6dvVa5f8hxNVRKborEoREJLJNKvVGLgazTVNGcT2R1ArJ4HFk6vVa6kidjfefk2s7ye",
  "key48": "5bfD9VTnoebJDhr75QoqoQFSpFELFEuQ1Ua517RXstmWL6ffQuQTzMxVeTHQV64tdX4yyP7Nvaktfi3asWNnrVbt"
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
