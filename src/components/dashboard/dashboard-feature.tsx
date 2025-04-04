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
    "3LieputK8HqXWgxKPBKMAW3ZXsU4yig3qaNqhnHSg23wdKcPatFZQyxvanG4oCYsfJWJypF7fgYZR77dj4apea2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uAx5V1xNfYTazbYrzmDxCEV9acPPhoj5kEspTDhmk5BHH2BCdBa1LRv4px6hLfStHzaw5oH6s3e3u8rxvS242Nm",
  "key1": "3Kgd9VdbwXbtdSe7M2H3CPjVGPNznEc2xAq6655LkAbjA9qqKApBSQLK7dqNw7XenzU86K6zWgmYwLqYs2bJTy9t",
  "key2": "gYenZo9W9X6fBfaU7VPrufrbqEJ1KRuyyoZRsnYQNGBrQu3B5mGJCdGWfFiS2EjN3548yisq5kZFDSvkaeGSQdg",
  "key3": "35LtdCeJH7R7ALdJCQEFVcDyaYuomerohQxE4bzVdJ1Tm9bgfhQJZbCnfpP7DxaLVBZ6r2atZXeK2AGM39ErmGvu",
  "key4": "UdK3cwGYxVSS9zvRQmHrMdjPLFVmjJY24oEovWTDmVSLfqGYzSMnUZ2TMQVJ967UxbKYfMTzF96xZ1X4G4THrtp",
  "key5": "4CDFs6B5NfMHYin1rQZCnx46vN1b9B6M5uH1dqP1da4dvMVJXxM41zHkRoxsref3xvWQYV6kwRoQC6cay2YaTFJh",
  "key6": "3QPeJAn4RUyr9Hx2ysEGR4apaQWLwY5wEsK6n5G8JCis37rhQdbArbcUhpnmi3b66zLA2uHJS3qFniK8wzKW346h",
  "key7": "39jd2zguEQeN5EotgmsnePb7cTAE7uGcQU4K38ZcUhoGhYwsB5F6ozeWS9x635UtnLHgCRjbFZeRakbadV229mfP",
  "key8": "38xZPy7xURECUqPxNBsLj1TRpQPaLXn1HS8Djpzmcs8YKMWq5zej68yoTzNCwf5Bq4WwWYR9wCX2tyTkK16haP4i",
  "key9": "2tQDZnfs9Hhuw63GY8bNS22NGR25BgLvBa4uLc7J41WEUbEpCT8kQsrZoGUwbtfDQoX4vKvouDpuM8DjaHEADSTU",
  "key10": "39Nvh7hvbMYM6ZgSpcQomZNuog1jRsCm2KgWWjCsJeW2MBxYhT4crwmWQtZx3tVtw3Z5od1SuJTRWY1Bwqzg4ZHj",
  "key11": "9zZZybKKHnugcnmsm7MmmBBZP49PmUxsyqp9EhcV7ghjFdBgkV7r4p3Hzr7zATCYDUBkmFZHo26oBEQi9vm5GKy",
  "key12": "2hzAHr6mhkTJHe8ZeHw6WDvweQrmeJDurCEYt6syxMSjbt5qJxwast842mTUfQdbX6jyUXcNn3Gk5Cj8Fy5b2f3e",
  "key13": "61BN2fyzE3pRwtBcmBjbJ85yo5QyFc1B6WsoUz8gdimYt4oiAMRmkxTaoLkWqKGidoY1kRxARrKZ9T371zY54ZBR",
  "key14": "3c5dewPJVgvJJp45kJE1vN6DrLFY2b8GdEWGHXYc9nrDQrEvLW2mRWYPBfyF2S9mHbcaYYi1WQqSpcehfiLEuzQV",
  "key15": "kdDsq3jWf3KKfZTF6MQPU9iHYWNr9ktu4VBriRM5q7FbfFP6Ka7fhpBhVkfahvSWJFBUq1wcjhCrf6iEhAUKQKX",
  "key16": "23UYV2Hu1qSZHLTnXJLWtZPcqfqy81nUoWxseTnSXEKmFcTQhDPi9yFbNm8D8dM962V4BBPCY7zM2gFqS4ghQmiH",
  "key17": "Up8HDdHkbmqKfLA8NiXQzaom6U6AzHHTpMvF8oMCPphw76CrgqjgFQbq6tqwRr199cjNJfPfX7PYGkZm41tjpun",
  "key18": "wDuRpoLeqB8RjvjNdwVqAfq53g7zmzr8mgYsLkh4wyqNnzryRNQ4mF7evsATFoyKXf2NSeHb8o3uDtnJmjbjyBb",
  "key19": "5omaiEPXry323wZtwgEvpErdkmcRaXoHeouCEENVS4ejN7N6To8g5dZ83azPC6mBAoSGACSa8FtUG8XZ19QMTdJx",
  "key20": "3L6g9qLBMKyc4za46G6fXohCzfNbaQh3NT9eppYpSN1zNxdHZLR48MF9AEzibTQnA4CLFLGHq9FtCcvCCRD7G4ue",
  "key21": "LVTHe41ZckTeMfbbBLEvbsBhKL7SXZ161WunHVHtVqmTFqH48gbiexFgm3SPqquAzPX44XBg35KBWassovJg7ou",
  "key22": "3a7nos6Fs17PxRM774KQL7jYDxj8QmnmvL69MS5REZnxGsAd61rBAQRMUrUUTxm5Sk4gxkY1ZpZgPiNK2n61nBL1",
  "key23": "pYKEJUUdTSC3qJNHcTqg3FRnZgWKJVwFmWBuRbqg3maV7U3hAxifcaQrUQMTwxFJ3J7yzyudQY7ja3uQmhmXsXM",
  "key24": "5w24ekmWTJAqE7Er2TEGvGcAJAhqQgvCxCzz3AH9DpMg2rM6KhTDWJrN9NLadjzHShp6SZGdPm3V3GkAyyRjjWuj",
  "key25": "2RQENvCFCiQnmQieh3DTf9zBeikhdjGFMzfi9wE9gLcviQZocv94z4Wd4dRTie2gzHeLupiPnqtE3N2bowyxV5oX",
  "key26": "4DGFuZSqzPTECo1AD16xbwEQokCknS4NW94Ns7tPkYCxjWh9hzR6qxvUvR69sYY9kd6Qaujbd47bVDeYrHEtqKpM",
  "key27": "2MZLqfWLL2gD7Jcut1XpsA3wDNDamuQJmpYFggsFqCSifkpMHnN1iqAY3ZHiA9Sm699WUFod9sCQ8Hnj2UgP21qD",
  "key28": "5qpfjmF8DfZUGxNu5j9Zi64PysJSZNTApu9HwjQaQ8GNNc7QveQFETAcpVWDJuYbUxZnuYzingKrzL7CNpjcrga8",
  "key29": "3km2dZEs9RsnkEsxqkFX2oKEVGW2q3gSiPepsBi3knxemARPSz1Z5JY5wKcaai2iDDuH9XJ6dTrrGwqBwnDpk27w",
  "key30": "3drWRgzeCiBh1N9UJpTKNzWvEHMhGkAeJhUPWByKQV5ggZgPP9SFuh89vR9ppNv9YHzaA97ggyNCKsPRzUVQfmjy",
  "key31": "3G9Fo8RRRCDQve9vH14XT3GzMEGEHfBoZhQkWnLgpqKyWioWMhMoz2zKCerQGP2P35cpK8YqnfEFiw1mPrMumDgy",
  "key32": "4LP79S9RjNsK34rnsCzV4iAtYvor2deBVhxqp49Chx23XXHPGDx5aeeqSeCE6jupWvjfXY9LULfFvazPXz3X4Esm",
  "key33": "ohxqDdreCuUH4GAXF4t75Ft5qSymoKiR82uWiFKaYjWNKk1hGNtpjigvrjam8NEseaLA9ocGU59x7xutk239iPa",
  "key34": "35h9NwwmezQmkvkuoxYzQn5SbFVBoh1t4rDEjjEAPq172WBZAxGmzi1QJgTjxwuSGCyjTyghmEpqDByLUYx9dNBE",
  "key35": "4Hkm5vaZvfAamRb9hRgDCb7jDCEJZWsh9yHYsx4q5bgon5QW411sAiqJDR9UvWknYCbYYvecQTB4qkD5G3vkmWSZ",
  "key36": "iC1krNKFgLp1XTE9eeKaH47kXfjFuFWsG6YwoVq44aeaXWzPjmeK3Mxp1s2QyCvc9dxDNpGYWAuRcH48A3XXBn5",
  "key37": "5ieTojFFM1C6RjkqaduhSXR3DVi1UqoMdEw1ct1y3MSMGBjqMghTzgjp7QkSntLKWHe8bsMGc3oNoQ2bmn5Q113L",
  "key38": "2iVRjs4krErVEvs6x5jzyDnsP2MHy7stCWgVaoJMSjnaEenCVb2WY7CqViJFLvZs2anmwdTWVZcBnZm9HnLTmaSK",
  "key39": "4X3PDiS9oAyHTxxa4DXwz8UUCy8twTy4KDuf9TpqrnZZgwQyBZff24iJFXLQaGhi3AYbbYxXvPBpZAHMhRZnnHhS",
  "key40": "3kJVErmtqf9i6qQmQat82vxV4cmB4kGAQAZp5LnMsBz4rzcm5V3EtFK9Txsu2YeAr7B8qtE8WUYs4ziBrP4VFC3L",
  "key41": "5V2a238iRBsgL4WeBEKzr9WFHoX5V5x3At17uhJyzhUN9uEoVPhDNJKVwjR7zdb82q1joxSesNz7x7Etb2GRGprU",
  "key42": "5dcGzHLawf3GLwvGZ4oooSdbiXmMdzW928evtxAkcBnZ6Ur4EPyjfDiH9qpNFosnc2c9LZDN1yc9SZbtbmxMcDaj",
  "key43": "2eXbGK1RYwpuqD9Qfykv7GnaukghRMujjwn7f144LPMQvLtbyojLamCsHuPCSuSTBNGNBzMB2zp9HuKsfjDax3TV",
  "key44": "2Q4FyXcqCFGbA2efNdFdXnkRGgkeHgc8ks1HEEJv9eBYz3RXKDDfKwVBMi52Vjjk8vxdNYPUE3nvEVRFkQYifSi9",
  "key45": "5VjNgX2dLxXFD4SonqDbixbrXmdumTuYQKLKNRhgBomv3GfYNUwVt8YZod8HzAgyxFwWvwPYrGyn7AMDSLkUimn9",
  "key46": "5hwXiPYpeeQyPUar8DBpahMCM9uy2wnDHQcbhN8jxepTbmZUtze71xv4q3LYSj3HLjvVoNHvt3hi8bDPfZN2upfV",
  "key47": "jrJJs47Lrvvbaq6yjtne8LxKxKJ9oX996pqSn3fKQV9cUran6qVBGYcW1um3Cpozjk6U4PyNKkc5KHabPkwgshd"
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
