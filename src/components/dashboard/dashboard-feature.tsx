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
    "5bNr5hKWa2LiR7BXRFmP8Q73XtRXDYY6coyd69UQKrAdmC3CcdCfmDvTbiTYjumFkD1am8MHMbAvhq4VYnWiqbPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3udp1XTmBHAVnT2iNt9RKT8dAcZkNaUdHzTYeN8jw73dCyhbpFzn27hYh7dBNez9kykZftnnbpq121hKNnwFq8xX",
  "key1": "3WkysPvirhr4bREwLkUqPEwg2DmXLEoJQQJMK37L358nrXYPUd52AfWRKUDU7Xsi1ZRerZsfSkJ9QwzUnFTBr6ov",
  "key2": "3AaezN8W4NJPQwsWbpKLbUpCYGC51rzW7RTtGDnJmqMkbnSZmnDitqtbbPK6MWHtRdfmRW5QEe37sBBBfxr2b2Nv",
  "key3": "39zbis5aAzzg95EVRziXiQ2gtJcwndgX55R6BFdXNRfgNM4SqQAVjinkETz2GkibnNmnTkNK9tneuRfkrBtHCJEr",
  "key4": "2vqz9mFkBkxFMsRTC2eVr77BS7j3ETC6DjyauRwbwoxfUQmf2eWXMKF99VKiWujRcpMr2pseJe2ADoucz9Ni9pDg",
  "key5": "51K127Gf6pCcg8tbTNkV1XZzGsze1QbwBhAAu4bUYNc8sUXaEJurt2qLz6FKaN1WB4GE9roqVW7c9hQSvFpuZN5q",
  "key6": "2FC2LGWATEj2gVyisxqPREzW8oAh2zWFmDnGBsRhZLG377XPNXdMWuF7rTNEoggtBTVWhtHPQ53W4f5SsRo3ABmM",
  "key7": "2jaqfcHy2bvuJrMjbwdywRRW2DvyhPMSgFrZ8Pc5YdfjvMjCtReSCGgcZdLUJqqYjgRqaGytzgj1K2Bm1VZySrid",
  "key8": "41k7tQqk8TqNm4xzhk3cLYv5CaEfeVUrfivBcUAFBko2VSFVhyhce59Gj4P66yWY7pGTmRKuS5NMtyzbDK5CwJ32",
  "key9": "4U2FTr2rTHSTrVqhCMq3wcJ6EiiaHgpTVbcCcDLeKn6eZ6hwHm82TbXgFZxYPEBmMdBYb23RzhxMGnfLZVgGM9WW",
  "key10": "26BPxfyUEjtVicvRJNokJrASiryhP5yFMZxxJznmv5rRHHUcNuckt4jo2ZG417uqEtCvLzwcEB3zxwcXdRSAWia7",
  "key11": "3d6X2GzZvC1WkoxrRVbupmWEFDFwNxH3mh5dH7dvJuGDMeQegcyzJhETBRVk9iVSUJdh4Bq3xDNnWEYnUAo1UK9W",
  "key12": "2atbU4cLb8nBrsfs9K3cYqH7bUyA3EBvhTWjwhdiyVwDKaPkGUfYYXD1vFJWtgKs4kw1aAe9vqUa3VwUUrugas49",
  "key13": "gKAHgabhFd7ywZhsSbZXG5ra18v4JPLkTFMXPRp8o6evfepkuqPDa6aAQRNfPLQh5ZsWiuhQ15DaxK67Zjq4SVh",
  "key14": "2w4fKzwVjBLLn63GpqbE2h4SRpcdmPzxx2pfRtYnMs34XdAbqAzdqHzTVdWkm9VXW1GCqiP47QqL7t5VKyFoX6XS",
  "key15": "2aFPCP7zFET7FThUgaZ9yDCAfYL8kArL8XMzxxWBN7ZnZ9KUCP3smNzfW86iQ7DUaJDReHks3dpGHnKXLAd5zSV5",
  "key16": "3gLgXGABotHaL1x9bg6PU8im9LD3E9tvShQFaioEdgnnm7rb4zLyqCnaHXqvHGhc1sQTz5JzJN6crbinvufzSXxW",
  "key17": "wPSqik5Q8gNB6Qo7pekhsvrJdzpdPpDeoaJa3MXsSkGjd1zEHUGWUNUTsdLUj8yxVVPmpvAWWwDFYwaxHF3ME6M",
  "key18": "56nx4XPTVpht6Q5nsYtGkikvkuVUaLHenm7XMiyVJvgC7jY7HQCMaw6q1Mbyh6PsyZuRNEyU7jwPwJgmpoEb9RSb",
  "key19": "4N5zWcM6Tkuxr2jzeGyRURjd6vGEhcQx2AAfx1grk7inyMpTkD2igaBx1Qyef7Qhki6wHCwSmyefL1MSBzXzUy1B",
  "key20": "34CGPLLcDfvk8mefCBtGMXuCquVK5hssq59YSoTLwDnvC4Bha6KxGPmkrrLabwRrmX2jHBb6ZSLZbiNwApcwcf1W",
  "key21": "54N8wKL7W2yLL4144b2RvNhirAgZb6DDq9JjzN1ikgGLC76xfT9XSQvLCS4sipaUGsBth5wGPVjo3zyiXFi9reGn",
  "key22": "8SD34Nr5q75ePp2akxmZYC5LFcjGWDMzM3P9DKp5Te4P77Q3yyeMyfRVWDsiAsPUcq9wUvmJTdZ9aJbvQiybH4z",
  "key23": "mLmD9MuG2vJ77KVmqC8qvBuk6sVii51BBgUi7M5LY1ruv4mrPcfXsg7sGdb5tjUcDhnR83Cp7KkWXg9KyWEkVjy",
  "key24": "4XJsocEpcTNirKzgLha4KStR2i1HHemt7dtme3cUadCZHCGceNkf867m8it8yWszzcdynk3642BfbjAktmgPNHGL",
  "key25": "6Wz82uGjqJoV9yrD88FFB18YNjoZSLVuhQyEF39NYBVM4awfBSZ2r9sLCU6XNgTSsTKJTA4paqWP2J418E2u8vN",
  "key26": "3YisqfFvN2S1uiLpQuvZgEwbWs8RHfadsgjANwsTn12RN2YZ1RAvmXvyW3gsdiFrQGkrrxRLYtsB9SC78tb1dHuY",
  "key27": "4CMHbQyAU58WFgSUiJ1MXXZ2gNvSyY5KmiGi7jMtFiAqESSZaGhw727RDd1hdQNHZ29PjyaJBy4nu4EhJbVDeHFY",
  "key28": "3LU6JRUtMq3763ZdJxpJzz9RY4m9FZr61Ce8Ehdogr4jAaJHV44HqkszQLGkEN5ZHkrsVZDKDJq5R4Rqx9qjmd6Z",
  "key29": "52v58mkHNg2vdhTmw49N2CHkFikrYN4kAn4HFizCm2Hs4yP3mTAVfy7wKQY3H5McpVoLT5dQt8sj4qsb6LPHkfBY",
  "key30": "eSQ7ExnuadrjuW2w97DxmVyuPzaxSTKFTuBE1LUBGuoT9NFuV45gtYzwxm5m8uQznnNsH7N4ERWHsceDCrDSsxK",
  "key31": "2hk8FQZ4RsHmQesiHhhK6MfJsmAVnCXU7hQhSvYM17CBnctkAvoH56RX8PKTaDrSgZ9WwDQU3tUEYkiGozgaxNWn",
  "key32": "48HUNbeyyew3Uf7juZBkcwDfqzKVuJBZeaMWpUweS8X3MFq2yyjrhtHemd4KxVhE5m4J8ScVNUNx2Fa6vZ3Cm1oD",
  "key33": "44F7nzEM5x6Lh4e3g3SCqkXqH6poLTYr2SWF9uHWtyZizuChrwny6MDraxn4XDSoDZ6fVYHNc3tY6K6Fc5xW1twM",
  "key34": "613LKFbr3b8mBjHqto2BjZLH8EWjXz7sSgFTHhhA89a4LagSnMrBdsLUmnBBRjwydRo2TjNwq5kAqmSXnVx6wUPC",
  "key35": "2jV8SkoA7LkBzf2Ca7jzwPgPWxGMUUGvkkHe5uqt9uLepXRywNrHjQDGst6XGR8CjURJgTiVJms3hsgeiAJUo9XM",
  "key36": "3awvQeV2785G3ABJsF1jRTYmHdWrdjS1pU7SuPix9ZXfXijpB5kN8imTycHzKY343Xs8ih4aD4pxipTtcaWUiYvD",
  "key37": "5UksF3uh1R3ofhGt3xzBSj9WGFKUEyTqvxX1S45vf5MDCVqfeSi99LSrYnNgQYXAvnX95cwVDsYhgsUBM3rXGm8b",
  "key38": "46TyTWGwE4PkTG7JWsgwB1PAhQgkngBZ11oVeQ2BpvXbr26pstS7oLPooFuUVLhKJu2fkNNapCvMxZyXsuLUsmJ2",
  "key39": "aw5DcPzux747j64wsheh1WjL4rMavvEHGW1aur7WvqhWyn7oey5PCYXbyMz7qmQMScHZrJpJfxR9JhfLyMEKKdW",
  "key40": "2BvpE9252CYRu31shXL5tvEp3BQVSvtz2Bhdw3NoJsyfqKM1fD31cKpZf8hUmD5SaFnkscXDRJd9BnDfc7dC7SGN",
  "key41": "9t717HxCYmXFftALQv7i9PSxp5SDnQ21tqBUZfTJwRY5Kzf55q2VQnGea67hPA6A4AV6Mu3kFmMxRLnLnJxw2ow",
  "key42": "5LijBNQT8aaabtZiVjbss9xfGLbijPXW2JtrB6vQvQGLiCHEW2K3mwxxHFe5jf4sqF88asqcumVD3h8xJuwcfB7m",
  "key43": "Gmwz1yjgk4AQtQHWNpbNE3GGgJQ1ZvNgWuwBHSnu32tscHx4oMpSogwcEN7H8W9CK2sivwYgZWMPJ2rQqZKsDNb",
  "key44": "4319S3gLpS72bsAEXXq1grQNs5Mo4LkqViYY9dDwxYpra2o6g8V93PFEUn4Wjm9pRSimH7D4d6rsrxHn42bGxMrH"
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
