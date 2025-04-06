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
    "2trrfrc66hGhi42m4n1xz8qz5SVSorqKiE3iQd1yDrPL6awgqom92K4fPwjPbFMDw9xdhqhL2YzcZ7tgCcSY4KYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N23r9fbbYZkWgBCZqEGC29KYDoc5Azseh26RuK6JQA6QYNvCb8Uads44rvUxRy6D8ZunYTxG1ciPrHfR4TKpdy5",
  "key1": "3cYUczvsWeb3bEQ4HG4xNMpMZNRqh6TQm8YcxYzMSnHmMHK7Lf6XTmKM76wbXdQGHNA36XRGfMkFs6PUANMKCijN",
  "key2": "5GzDqe7vftjXAWaqwB26LyFD2KLAUmpSTv4a8wuQehmd64LsG8SF7vLYVUu9Ge3i8osLMmRMc4DbsJ9HkJDcTWQp",
  "key3": "3Zywwe9U4ZiyxbQ8imarxrgFkMyancH3FCnRX6iLzLcEDV4rAGqXUYG2GMyMGRC2QkJu9c4CHkZxv1mwUAam34kY",
  "key4": "5dXwXuFBVise9DF9Mwe51Rmo5gW797khcDzLAGFTt9T4DHBKEEHTfLLpDEt3QnxsAGUyycWq7on9AkTs2hkdnfvT",
  "key5": "mF2De4JbSLPEiChUSTQiLYPzAGm8J1syrkJNSHTVWMncx4kwnJwmQMMvs9VUyHeZZMLPaKrmdaRhN5mpiij3NUf",
  "key6": "2dajRvB4U9tVQfXCdLPyBH8iyGr2uybHSDjz2kGy866LSr1LCZGntb8GhiyVzgJoMebhPxjmpgRwsnYNHkFayobe",
  "key7": "FWk5er95imurspYT3A19FNtRp6PDiLBDLvzQ1bnzroySbYYQVpKyFFQn6mwT2QqVSoVkDGuXuk4GL6LuNJExk4F",
  "key8": "45UscPdDd9beSLRjDfdBMTfq3y1jFfz42RX4xtBnPY1QW6p4APH9pkEvksvWxVpyGV1EQ7vPV7gLomYaAQtcCtjd",
  "key9": "2hWPW71weUHFVjwYL7dme9Rn8wdZTkNG4PqkruE4gHCowgLvYh5UrNVzJv5NqpcF2nmSeupLemanYNMy3cGXzGXV",
  "key10": "eGVpLe5FWWLqKD3wAS7sAC8fibiC9ZmHZGS1gf9g5xrkeySYR2N9E7ixhREyXgAMNyfjyirMLdu4rhGHEsfrJNy",
  "key11": "5uYaBck1n8MgZCrBtDJZtMtPEkWbV5GJ42iBxq1sE498K3SzPCvH7vDYbt7ia9fxdEky9oCJAbmSvZYvgSdfaH5c",
  "key12": "5K61ZwqpVFX9bG6MTtift7xjDSdtnnVGmVx42Uexz8QLZcP8vzV5U4pRzMWsc412FeaPgbqh581QwtGzu6XuHUc6",
  "key13": "67JZ8G6bt474CaZ3MARRQCsnAyFPChPs9PY8kinoUKujS4z2ADvw8W1VMu8WXLhgLb7DX2KFoVHK1zTWE4Z1ognv",
  "key14": "28e8iRnvxh6B8F4NPEZHqqLAGiAMJVqDekT9pT1syBaYHj8oyi7btoL1ZVBJjHYbrEcybiUDHK8k7XR9iTSfxJkr",
  "key15": "2eQxT1YcQTaw1EFgfPVEy4kadNGwanyQXsokK74oKkfh2wdNogyYXdWqR61oNKD3pTfPGFxRmvLhEUe8BvoRWp1r",
  "key16": "2X1Gvh9LqufG4Ut81ZJafSh9VodzM83jEJt3pHbcmLtUFbUtnCVktPZwgEQRfA8fgUEqZy6jhUu4Jnf2uaiJjgCR",
  "key17": "3Kch4CMeC12bzz7bfQDNShWmYMhv2izxJjY6zfrRCEKQF7QV18pAL78HiLvGs9YWo25bsM4LgP8EFqF8tPt5eEYD",
  "key18": "4zKeBcvHPKawkPz7MtUiYeqbRA4aVtoEubVdtojt71vQZ3ctgVET3cTY5LM9VhT1CLQoDGGKGCK29nP5k7DmHLEw",
  "key19": "3DF3ubnvuMRmNaKA3vJTHBaYTcKZhNxhuio5RFZ6zoAZgBD8fedUZcevw2xuzXCUcTCj2pDfigTmccwnZgnJ6y7E",
  "key20": "ybbMv7jm6Csdt26vn8T38WCuZs1LTSBgSkiE6twizetgsjSnDRXPMyAuspAGeTYs9DL1qX3wpn5ktawfJnLHkAx",
  "key21": "3zWY4nFD9ontFvoYLi4j1XtfF22Lc2n8dkB19UJQ26tSrGXbFLpqZTcqDsdEwwrEf7zjTfhWBaHJyH4ihep1Fwt6",
  "key22": "4fn9BQ6MZYG5ycmdvTVmL5cCYtb1TxuNQWCdyczWYR2JiqCAJVYRijp3S5XMs3PfQ8XL67Lfs37DWXH7Wy3ewWW3",
  "key23": "5WmrmUzzFNeBBzKdU7dyjpqk68UQ1qcUZoGjtTQg49YeaduTcbMzEe8NRuTgYs9Bw4G9koqeBQykXdQLGydGQtkv",
  "key24": "3JvA8QMTogfzvcnq6DjKFzFh1jjVZ8s2zhyM532hMbsFNPJNzkojXsXkRzDsBQvqmuveQpa2iUTocTmCVfVGmbdm",
  "key25": "2pshmLKygbgMRRuFEUbzR3qd3okZbEX3musBUCpbvG2YBNqrMwxaitYidMADa6YM4E1CVKYNVw4Fu7cW9QtgyYPY",
  "key26": "5mWENJ8wdzk2geyTEfitz3ZNLP6p4KBnqe7DrcxNJMaYu8JCPG4N1N9xatNvwZBPJj5W2xRomkLet3RR1YGFPUc3",
  "key27": "63bGZ9HDVBPYC5rLzdo1DUVseGd9MRRhMmiyshYo3iecqx9DAPgVQQon2f2Z59cqmdvXTwHYN4ZG4HHHSdTL7Kwj",
  "key28": "4FENsZYWdT4G8byvKGknb3npRPtEQFNuJmws9iEgHzcM8U7o3idf5wdZJzUPuE8vG3GgW6QdHDD7b1XjfuLvjAuY",
  "key29": "613UPEBg36ac6tzwo4rNpUCJC72VavmcQNFaP7zpPd5xzcs3g8s6gmRcv8hXStm32kHmDsiRrFrUS7psnyfEzZmS",
  "key30": "28WdviZTTPho9AAzWp46X1MBGFytgUgJJc1jtTLnTdxww2TimwzqFvrj9bm2SEqh2fVvSQTroCHaZE2SKiR4UZfW",
  "key31": "4CMoD4nqjCQZtGFhJzsqs1FHmaPJxVBNbx8aSkKPyGX7PV9MTKA9L57gWpG7AJuUem8Q7yxF5MhrqCscSqYEyvBk",
  "key32": "26KP9XdKLrt6F4Cka2BRC9VEzypzSPrbwuanWTey9rDzmHng6fhfykVXgCeoWvKdt2j2AGiAeyenXbRJEGPbDFeb",
  "key33": "3MisjwCEZXhB4XDipwJLhieQ2Tk42g7ZCwNGhmMDTVZgW8WV1cALtMN5NhNsWMTfYb9RGhFGPfK4uK96AiKgCMRr",
  "key34": "2bAk9a6UVs4hb3LkM5uUSNztazWAgNdkAMJ7tMXJ2MJ5yQxqZ7KHehqP8R93FQKu5nEa8Rw4E9HFaNrfQNHSjbL2",
  "key35": "3koLamKKjyFUPBWeRdqSwPNs6eYZtq5JEfyHKuwEnqvatoZXcXc3pXL6won3VCGj1QtAF6ATbyMYL7CE13f4wfXv",
  "key36": "6yEdnpdKzafdeMtt2RYpPDwFG86Ba1dG3jUh7J2CuvuDpd8xKgTGY9h8VTnsx1bCs9sk7prVW2J2NkpkDd4D8uf",
  "key37": "2SAfS1iBGXefD7bhFuAeR3mXMX5TgMhmwVDKMforycjdQH5iwNLjqT6y1QCL9QWD4xdLV6BYUD51MQ21u84DYakw",
  "key38": "67h9PiZ3Z383BP3MDe7sqYMnxftqrXzKXrJEhv9q4p5KdLvyf4Qh6jy5aMiuWveDXNR2K16cUmBZqQDSEzVKhpk3",
  "key39": "4e1uDgkDxfzszmkzRXeGR2Z15UWTZ99NokDSuVMcJKU7ZDYfv9nkx4J6Rj3XVDj78FLctWRtCZYS2mUDpMPmo9wb",
  "key40": "4SbY8PQZTdLEC37jFYg3U4R7nua2VLg1bx6iYp9FDBAHS9xmcpQvKMqeou1dkjUdLgHrhq3oZR9UMHH2V36c285w",
  "key41": "5V4S3nAHPVP61sRS2K4Qy6TchjzvnkEBkzuBakJHV2dJUpBysuhWJhmE11TbvgVWAdoWYbzmvgXGGVkcwLD8bFYb",
  "key42": "2T8rKpaTRVgqmo5CpGLUeKbQqooZ3NYdAukagncZ9CaW3yV4MPuYi5ZnocTdYzWYpfADMeyLEoDGe9EmH18T4fAE"
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
