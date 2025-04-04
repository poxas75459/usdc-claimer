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
    "3zuMpNVD77F9EdtrhzfVP1MUCpJHu3AnUJBCveHt4oT8AkK1T2zb3iRxzYMkfWKwM3LjL99RB8UFhn57gmCimARB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yr4geWkbaiYgk8QDkfEihGmGnDmHYF2UKLoGbTVriRQbQvUizyBe8PBYpG6mWTPZdmPYQysN4zWkjh8uUcXbkor",
  "key1": "4EUU8iSNRYUyPbGi3AdqmG2FW5cECWNdJpNn8h9hpxtoKQ2ypx3hm4JN6b2HJsvdd6GrsBoAvokcfPtME38NEmYK",
  "key2": "4jPyBjz7uoTZrKx7d4sy8w7E3yFM8iKd1coexzB55bwKFsyUWUeXVgGGkzuEqZ6suaDdvGfa6bYd8FEJwv6VoH2h",
  "key3": "5gK7WFfDWU7hiPvq4nW6yzKA3ZVWAZdWRrAhP2ANqbkyPK2PYYcQ7hFhwRz4joRPMnS5SD1poiWKVYwihpe7KjLf",
  "key4": "4AKk2VEgs4w2pcrHdQtyh7ocyaL1zLMrT3bW7aZYEsxTtPFXw2mDrbpGm7YSNGd8aNfRCA4g4a9FFiA8mPggxWvK",
  "key5": "GFHmBa1JGjVKseQmBuy7LH6gwjKyPAvoEE8hWQ84tiNtsBeJWe75rsL2475qACQWy6CcvZ72bAKZHw3URpUd7fA",
  "key6": "5UgKmMPf3DMa96k5gEamtRjgpsg1YD659bAPcYQ1qXDAoi38E32gsELXV8eSmSmQigHTPw3qp4hVePsHWy1QP534",
  "key7": "2gH2nwaV57qHejvVhgr6kRBvC8NFmJwM86R12trRCcuRJf9QsPZJG2PHqds6Rmsb8Gu8pMozD4BBTEDMotB5nGEf",
  "key8": "43g6GLyyBAptHRxXFyTSv9VzRdz82eeCjeoHNc7KFqKg9CdTcfkTSM1Mjr9DQEouadYgvY58XAkgsN5v8wsMJ4Cp",
  "key9": "3XwJo8zeBpDigDdG3mpZ518eMbiRbfDeAHYrcGvwXSSKcZLzYPnecor6pH3Qdx7eBae1qwykcnx6U3RHC5pUMq3j",
  "key10": "4qzDhhcZrf6TtaUo6KH4kFEHXHMuQpC4qa3re5GQGQQGLjYJNLNdakq18FMqEWki5uTdDLsSzkzZsdmv63gfmAYX",
  "key11": "4H7Dm4s243PGvJoD7yJon1FdxbBpq78jJ2YTioq8BHuynnqRZFi7i7FXkLMtpiRqnJ5nSiVNq6LSM91HijgwM3i8",
  "key12": "4h7fqwSEV8E7aLXK4JSNmVeuGKzoLJuJy52zfQfHKjhCyWoSaRigGezsKQSRZ77oHoD6X2ox4eCSnsbKvAgXp7DM",
  "key13": "jeUU2CkhaF3cQ5kgiCeoWtAruJw8px9vQhcd9Czu7HrpkiFqmRuGmMwefeuEzkU7vo7SQwbb7nuxYUo4HMgWxMr",
  "key14": "tLtrRGvopsHVs7tc7b64vBoi7PzdoMcuBveQzb9evQYQ7egzVWukpoEseDgJzewfLMqHWPoj1J6pAk51R4dj6EK",
  "key15": "5tSV8N3zq7fCU8MFyeVtrmfaVPgkC2dZiJMqoYaFEVQJ8p3Vo4bBhG7tDHz4P3KobDrgMXStEUtNb8CWPEhVNfK3",
  "key16": "5jJWQdmtvDpqXkdgtYc7y1H5h8v9KpXvrpN9eKsvcgA3QtH2Yfy3t2v3QqadNNW8CTrj15oe3Y178p91prqWaR8Z",
  "key17": "4SyjHCbPtUNXXT3zRpP9iA2iCi5v7BNHRGRnTjM4hv3k2btXwZjpG2nMmqt5EPzNnpzuWKd1un63X36MfiXtxivE",
  "key18": "4W6sxJ2q7zpNShiKvhW6nYxZ3uWGNgi1D31dTbruuiF5cFcBsKXKPsDkCeD5tdLmrAnoMcAcuX59VVmhwE673x2E",
  "key19": "fXyTmhF7qboizuY4aQFWwnuRsYXYDweFcx5VgTszAx6d7vTUuZofQLTBM6dYv9QZFdsKdnmujjLv2Y1PpdJGitt",
  "key20": "5HRWCDjoaDYRzoCbMY9FKeshBDdJxdQ5eaPGNoA5GFyC8847XkLSoQ7CamcWqE9kyQ5LL6Yw5B2ovZZR72WfqZtn",
  "key21": "2m2nHbQ12x4YMRSXzWoBWQ38ai6PXXW6xugN7vvzAAHbJE6FWBPe8HoiVYStJsQMTezKABMTc5ofQjnCZr6xj351",
  "key22": "pZeaQqdi2qb7u4urnefYQz1J8JsDGxRkwDT3GdfF9g4YYLQq9WZkLNYRDsz6NeBcMnb4ao6FNURnzJZq7MMax66",
  "key23": "2CrUir2W3wyAQ34FUMoPUdjiAHqASxHCLHhDd8KTSuhf8Toar1cJC9SzGNQy7g2w14iGN2yYeM2nDewPBCegP4UF",
  "key24": "4Nh7HtDK9n9XsoyRmiKq9J2kZfqvkaAuhofa16dQrJK6PezbkV5uctj9jaHDjcGTN6PYspc3Hz7iva5MLiszQK3d",
  "key25": "hyUaTrdSYCtPTorpVpXBrfYsKJ2w89qxdSFQDibPY5sKqmfdJB3tX8mQfmbhFXYufUXaknM71A2tJbS9keTQLT3",
  "key26": "4A2ggRAjTwSGkdse4exxyJonyzH48VsFFCnBrd4sjaKEHVH6C7kuSrT5iMs1EkpybRWDatuyJWEfN9oJtJtxZ5jL",
  "key27": "2nhhnEpvyz26uFn5ekrYBis2phyqfWKaSnHJBZhwpbrAxB1oq4LMG21LaaHRDJBMM57BQPvxEQbma5X8hjkAJWvu",
  "key28": "5m3wH43WRCVSmtrJtCPsGokQVZikyUuPQ5b6UCXCGXXNNXN7PYkebojSK7agCUmoABaHUJXc7PmkFaDPLMk6w6Xp",
  "key29": "4VAGp2rgN2U6xVPECED5JZgwomSVQ6TS8cqx4fDYnQT8LTTBGgQVuYmTJHaxW7MQZZv3xuGPTH34xT5rfhV7Xom8",
  "key30": "3nd2DAUwTXJWo4siandUunb4UyzaYUprhViJNxAQKbPAzRLFqJTS8zQAnHvwvmr5pkS5sExTnyrRxMLdJvto5NkV",
  "key31": "27nxQFDrAtQn8ipeww9eEGJTnfH6QfwLhizj7v9wQ3EdomUzNTERTnKndNcYntsU4XrRFjgZA8pcR5yJtwBQGFTh",
  "key32": "3vA8M7JwYkdusmM98gdonusDn5gzST76cdxWWUWc38kYFbtj8w4PqiETU9GBq3yFuBGBi8DREyqqCKmJR1FYxq8L",
  "key33": "5j2eXWefivSbBX9jBQBm7feCuPZ1H4QCieMMZXENRFapmnNxAYZFJ6UNqGM2zpN2HmBgGoAXjcEYT23nYLpLY2Gf",
  "key34": "4aF3CABpuFZbiExy7WavfcLb71X8VxjPKZckRmqUNLUci5aYaEretaLUCB8m4CE7YzupJY2u9712YfB78H247nMx",
  "key35": "1cnorPEoq16aaVRoiYmTLS4qXVLYrwMcqXP5EHQmumLPdAgBHP23vj5XDM5XdPqZB4RAszv5oEVpCwbUKty9ry4",
  "key36": "XSWk79SogxnSAcXfq3t8itdpoLChTzBKjcJQg8sMi8mLpSDxszKp1evksePJoQnhaQPVB98AHJ3yA4ocUMRhYzc",
  "key37": "3mEpPRQjwWhen7SY6ByTw9oxHvAbfM1FJrKcgLKBW7toyu2Rn58KvuDtMjekrz9HgGYf41cKuGiWnPnUFpBNPTQ1",
  "key38": "4K2yJGrwduCSZDVSMYFT6TxaoVMRmw6zqKb5jmzqcscz2pX9mMpHwZsUJ2tpDauMyjdT7FAcS3F8FZJMSWYkxGS5",
  "key39": "2F4rRv6zAfNGTZ7N2KGKrhqrGURFya6MdVqEsS829K5v5zUUvzUTS2CNwLm6yuNA8ghfiPW36q1LHCuJFFgwxLbG",
  "key40": "4VvJCHgkRWN2kV4et2T17JspHY7HE4ejNKzCt1eP6N29c5oekwUFMTyiLmJ24FEAxKHHU7B2uYdp6VLUJM9jExc9",
  "key41": "3GGrX2u5wRQuqcASNk53jZpovE2gYJpDWyNxbybfnwhXAZzMuXywYRHbyP1pf5c21StxRKGLBCuvJgStFkZULRMD",
  "key42": "2Lav8BPzjk4wa7K9umWgKdy2e8Bgax2JKySzGBqBG5y7RJXUBBz2oRK1nVGE96gDkNF3ARht7kK5LtXx3tmXSogW",
  "key43": "2JpsFJMc2S2rxSSATWYQEwJVYDXGLTiNQfJzhGAvFieHuUUZcNBgrMVfVESiBuepKxhPmadZkxpQaxa38XXwxPte",
  "key44": "5gTwxF9Xc66pKF1mUUjs9WybTQaRL899ahP5tN9RPrJuNdsU4DU7MdibCXS4B1j6uzkZwiig5vxPzhGB1DwjXBPj",
  "key45": "3MEJ27LuzDmmcECSzyCcCsQmJh9YCb6PqaKybXVibJL9YgNG4ke8mRqwS76pNxSyfMbKY7mgfkLt6kpbSh8bNi5d",
  "key46": "efZuehwZHN7XSw1YrLLiEx6ufdw4NbEpuPfAfJpHby1vWGKJ7CfGrJgekx95KJpoacFnVqa119usVqjVFi3E2P1"
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
