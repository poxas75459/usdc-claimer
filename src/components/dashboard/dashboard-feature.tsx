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
    "7A3tcJycTNmTKvdmGoXDgGfTdPvvYq4zWqCqsM6WnPsga6bjFpqS1PDVo27qkgofZhijFTtzRJLN4HhKvDN5ybN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gqBLzGjTA2xFyoTZFNy37hXL3CVa8vRwmrrJCqfRpRGYXBNBgzS9TmfR9LK3mw5jEv7ucLSnEwpvnp2zJNertJ5",
  "key1": "2GfVnerz2uFs87HtQQCqhrkJv16BWiHLMSyHuJTQC8cAVuLNComfAQQpfd7xWn97DSf9kRfEcEZKz575MferHqJa",
  "key2": "39Pdnqb5SgoeKieZtvQrfoYSihKYmtwod1xHoT19bssRUcWc5fGGHHaQd7DRaXYHSExvv9QcWCB6cfrGUUmCRpww",
  "key3": "2AFBjYGq3BdPHGEpuQbK8nZ2UW5e9utPQTLaVaknRWscinAT3UDgVYgk99kLXAGutWTznLUHe2i7dfzisLv7UD4w",
  "key4": "2sz37245yHxBEwFwo6FEsUrFSvjVZnhhJ3D1mo1i5fanMnhpHdWpbaem7eUQBuan7abHcEEYWmFiNf965apMsJBD",
  "key5": "3sZJvciLDLgycvmLcbnkho7WqoCdkbTGNC4JT56KejmeH3xLccGF12FwX4LmPBqzb8fxNUBpzzdrxTnEoeXp6utL",
  "key6": "5jQ8iMAKJnTyTu4GiZdaNd7eSB1RCiPuo7DebwZv4CTzkKZGwS9FBySQm1U3dSPVdyVFfGsscRbHvPXpJeGVQsB4",
  "key7": "3fgbRV5o7q91uben85dso2pDov9m5Lrz2XYpGnzYCayK2bFWmKELQwNHLGAfbsmPjwhtVPvkAf15tQLvk7RLt6Dc",
  "key8": "4AByTaqx6zH1xKT9WJ4feaBV6pzP5HbqXSJftNgy7Xrht3iKoqYy5BPu6FckgQ36nkNgYpkcM4g8PLCVJR7bo8e2",
  "key9": "4aSYBoaP17yWWPTXiTzjkJHjC4YmFVQuMqcamMoohwguA917xewgLJnw93vSmvHJz3VNUzJLZztgY2dgAnihLsTu",
  "key10": "o2UUkiDKRSwCPd9uCeRycqcVHQcDD7eqENeZucUPj4xPhokypsP3bDPtfwiFM3QJVxKG1XwoQJd474kq9yx6QWX",
  "key11": "YSPQWByd78N1AvYPYzas9Hr5U9JAeEry9Dk72gHH2m6aLPKFPmGBfR5G4ByNbb21MTpDJWugLXanrrvU6ZZA9Dh",
  "key12": "3M2rj1N7iFvpdpGpsjMx5Acq3d2P6T3hAte6TaiUyrnvUPxsBRUaM3LVkM7jSs2Y23sKRGup4sjL6yRbwrkt5vUB",
  "key13": "5yDR6hwstwZmdsJS3G7kzTn7mTKzs8YaZQaLfSSZXoz52ruxDncyRZAFfNjD3f2e1DeSk6mDpFEs1KkwBW2czJ5T",
  "key14": "3gGnywwA5HKhA5JKXvqbRj4gDapV3Urvy8GR86VaZUH9r1oBjtWMP8SBVSjSmH27k2iz5TMs1D6YLYLFdPwvepTD",
  "key15": "2RJCAKvsKBgmeKZLfjeRk7qVLuR98xJCTj2nJwKEdj5osdT5h2aPw4VqYBzyvYopQm6wWrnNVuXipUaMMDZ1CQ7u",
  "key16": "cECwayEvyZ5H7My73Xx6TZHfNP21CKzU52BAbTQq9NSFbcRhwhTPYKqH4S2goPNcYNrfagxVqHABziRqgZkqwqH",
  "key17": "33kvGnc2aR4ehQZjxJjkKqNTGGXq7iRU6WbvoTZnd6QmzDfpiAqd7Zb89EzRsEu1Vr17MU9rggecBfzCgLY2MY1n",
  "key18": "5kZ3MoD9mmuiXGHkVuyPs6oqoaqcHrQWaqLydQhK4c3zQJJHGqEbKNHDS5DTpY7uV8esksJN56WriSwcDsgdYi5b",
  "key19": "67AJnQ3YB5tpvJTSrnenB4pACR3PPgmRgUzTQBLE2yGxVUKdb7R3VoFefBsZvLys6F6caQsJZ6vbDJfvNsCFiaSo",
  "key20": "63nj5VUTMig7XzoTuDYeEedJsDJ2sCUvyyZLZZM3VBxQHVPJC54oE8pDmo9gvpJkvh38CawwAy3kXawpCJUBZx4a",
  "key21": "4nhW7s6iJGrebfdyRL9J3faA91gmjeAWp6oAikPAshJ2Pro7uDAn29TznSiT2k9ufsaba9Dhvtac3yj3YoT3tgfz",
  "key22": "c8VfMy3Dj69CqXPG6YdmHYj6xGKCgi2Ua2sGapQgJhrxw2ysXrLzTb3J3Xt1Ns4c2pPefD8y6MfqVWWtbKMaFDF",
  "key23": "5AJuDCag7ZdLaQnKmj824maErqUf1i7mDhEcDEfVH3pWmsN4VzC5K7RcYFzU1HMSsVEawwcXPruLLZgKRnexJb7H",
  "key24": "5wVGSziFU2YPjCZi7hWmMqjGGha9Hqjs6qPtWk3wL9fF27yY5HYmpday49BcMxM7hx2mnLYvkjbghUsDq6yrTq2M",
  "key25": "5zWHk92D8d6dgamZRMCDpjFQX1dFQBWBTwj7Dr9rqZL8YFpNGcHjCTsCDnnnbBb794YiuP9Ug2YWdXYupeSkgwdT",
  "key26": "48FsBDfAxHUW5TE4FhjXtYEtij5yvo5f7hHSBH8CyNnvw7ZR47Lps2BtDQN5kE5koNaH71Li5dbxog5doyewozSX",
  "key27": "5KesRUoVXmZms6iexmmPih1WovGogQikGrPBosHhxfLVEZyCPpT3C1UqeQ63RJnp4qDVdwyxHRzwivud8LzixfGU",
  "key28": "42yHM2FD4eMqSAHK7azRF4z1ufCiKBMJimYoQd9niwLwuwHWvcy6icUiuHyWoAd9TkaPfV8drCy6CQYFHdJEV4Rb",
  "key29": "2vQcCVhReCmx5fn53MySP3FyXbj6Wrg3FMShG1PifozaT1hyVrbCSWjPR3Afhq6uRDXaER8D45pQgCbFQz1PuiNr",
  "key30": "4WAFT2T5wxDZEGULWt1UbaAp2KaxNi9wzgYorKSURTvh8csW28jPoeMVvS5gt8DNtugGFYCbN6fbTKe2QKxe2Doa",
  "key31": "49La45UUJzFyjY8Ye6noFuZirhJuSKH2RbZzgRyN8QgdZ3XxSkykK68LZKsY8pq8KvCjkJefxzbp3tSVABBfe382",
  "key32": "2h1wp34UsNMRRckafPFEA6hBKaV1R7h9f5F46rZqQetQN9FjvPfBF7Xxsiek7k4Wp44WT1jUEnMkp9VGLzBVVawW",
  "key33": "5vfHsRsE9koEKcVbtdu7HxeAt5BzFUn3kry4KFpdSgK7fizqv31LMAmmi7EjPmTVziybk4iLJK5sHSrThVfG1u8u",
  "key34": "U95ig21CEPfZ1WD2rUgJPbo78MdYy49KKA8LQHSkXop8tJmnEKHfZcGEDGVBfTdS2kKmDTEoTYTS7uiQETZNQHz",
  "key35": "5E4u5btv3uL1PNKXwDiSmCA4k9BYwWDZUhjGoZWH3QUKV5EyWLikpgdivEUo7jF6BMKmMLzt7ohSN2Fm3jWvBVLX",
  "key36": "3pL5TpzuxnrXZsCNhvgYYj6RVukUwt163MecLFjiJsZg3w8JNhmKe3gfZFSh5Nhcb1y3rhf9hwe45mHw8S6Jh8Kk",
  "key37": "K6XiXEHJPeg8j2dprkGj4ctXVBouuBgESquThfZRSD2EGXj16rSwQUX5rFXynG62N7mBom1skV2Tzro3zuYPE1R",
  "key38": "3WpKAFYkN7mdySdBk8kevpzuDZBqZ4dEi8j6i5L3t7dHr5kc8xmLibzcETjoMSZZDJ9cPA3yMv9BenZk5kTPijYG",
  "key39": "3uGoSCNYhQJwa3smuMjNi8EzACXD4Qh7o1ZSx4RpTQrjUBATVzrVobEq9QnSiqYL5CpJoYwqnEcYQCSxw8iktX8F",
  "key40": "4cN9iUCnTeyT313tt7p4m5oiPZC7LKcj9kWEYZdGcEpbMM1t3udfLYXwRkVevPBrQfcDTvm3wE57xEYoPw5fe5KJ",
  "key41": "5rCyHTDWkBF1sh6tEMmHhgumLyus2XXGezZJqkezuzybz1HL5ZrGLNMm3vPTWfwwhqib6jibvhQg9Wn7B95kwrM3",
  "key42": "i3CBv6Bfwb5dXdoZinwSHUwfKc7RW8hJDQMSHqyco4fsVpCcDuvMkh4kyKKNe77ypuvvXkJEW3hVPAQNSrUeBcs",
  "key43": "46VRsnHJNmfvwRdnU9uLKuff2eCMCcTkiZEYR7zm4jyrTesVLU3vMwySJ9f4rAc3LKhf6KvVkHHF7uxro9y8Ein4",
  "key44": "5cEbKgMQzSWmWdqv4AfUtknVzw16Zs6bri4d7maWWYnfSBmqXMmuyNEZgX8yimkdUNiFNqXyR1Nwr3bScYznmFxe"
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
