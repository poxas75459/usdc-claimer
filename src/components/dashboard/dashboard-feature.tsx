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
    "649sGQ4iMH957SGKDWbyFtAH7mS5uycco5WwoHX59V1V3ZF7GW66Jybhf8JJFuQLpETNkxBE8Cn2JopsMKkpRtKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WE89ipHCCJWAaieyHq6CkzYG8hq49kjyQBZa3yLyFZtttBfRXpdB3msmwtXy2f6iZ7CVtCQUfjSXpLZnWtKNggS",
  "key1": "4JsqAR782PCdamwk6SdbeChup1YTyXuyN8qsxTuYikyACWFFXvRjWWHGwGva39fQx4msrJW6L2Lut9zFnX8hpXih",
  "key2": "4n81CmHEVjTMj1J1xS69XvGLDKT9jekskrb6ojNSfhtBjStDZRUaPEwg8QaiLEohyomeG5oQCNkDKfioxe7Hnpvg",
  "key3": "M4kvXusPihy2ULRQq99B4MtGcb4e4rEEmHqX6yok2VLigSMtGWXwDW6p5A3SbbqvGGd6z2YggEvgbD8Yw9WEN9o",
  "key4": "A43iHBtnXhTHuX2oiRJWPc1TgKcSZPDNZUNpLaVt3sp1G5vRN8AjFuQwfY6NipJqUk1eTSWL8sfzv1ridQ3DRW8",
  "key5": "5eRRb5WywvQP4twsEAKEBJneMrhQLDSu42GUKSMKnKP1oDD9nf2smN2ZZYkKYK8joiYeTCgdQFhwN6uUbGiF6pVS",
  "key6": "3KVxqZmhGLN4BWcQ8CNiZvQELkBzpn7aD3P4DWNehJeRZ84AypmHHh6WmScoyf23S8zJsxnicW6c1WrP3AVv2PNn",
  "key7": "2yB83BQVrp1GoTzqrJgGWuzYzoVhqMJfg4TpyXGbwVTVvi7LKz5eN7yUNXiPNB2i4eWavZUzCmkKUzQo8Ldg7pm8",
  "key8": "3ZXS1ECsiyWXbQbCbMssSoFP7DxYdnAkhSLqXhQb2vjxiLCHoAQ2W6CUjJ2RqGvGdMpPu1FCYy4huwjoV6NeUJ67",
  "key9": "Cf7h1jJWj1HteEiFNk6qvpwzriZofHMTQN129kRT19ZgjDFiFWtdro99rQaFNoeoR9y3hKokAbarMTfRXHYuDGj",
  "key10": "4kU6h5AwqskvUsLL3GzvmzmQu9D9YwExAmygmJ8S37q4fvSJkgZMAKD4fy2DspkpNtMtAvnokHhFmvubc9FNLjuN",
  "key11": "4U2kRJH5pGzU9ng66rkgyDhHMuDpeXvjbh7SEguyvhWYBbGcMBepYLb5Gx2onEydUqCtJ21zuARZ37PG1ga9dYUU",
  "key12": "72brPw6rNktd6LN7ENTFEnxagKWep9s9GB35EEja6tSMkZ8S1F69pzVm1S8wtgYPmCtd63Br8JZErNqgiujh3QY",
  "key13": "sK1sKzi9DFvMjXFUfRQYsk7LVtQSuJD3YQxkYLBsxknB671Ga31HGeb2mv1R83WpdfFBdVsMN6776NWYaMJnggS",
  "key14": "43ZSJi78Gh2TFr9jidPVKU9ZmfXyuii8Dq4m5vjU74wJcWtUPSL1zYUC8n6fAdFJpTRCS9DprP4VhSAzQSMjzvxb",
  "key15": "2h2RGDKnKEiwVrVunqasC4GnUPfBWVXtzsrBZWgRytB4eHhyvi5DhzwpPuhSiWay27uQ65hUgRBVK7N34rSaFbUe",
  "key16": "3YGY8ioBwevWw84bzH3aDruTWqHnsZaG83x5mnpHS3JHzgG3fmaxCxCWYPiLLQ46us4DLYNNd6mFRB93PYLejZ96",
  "key17": "XEpwXTv9wj1DvNGXTZVJWS6V7qFAHZVmTHpNCDhUvFFtWqUE9FSaM84Na6Mj4xuRJYcNZdrxJbthihBQux1ZkEb",
  "key18": "fL8atQoQsPoHQVJPh3Punr1ksbLP2RiBYJMPj6p5ZXfLELnT66CTBSJwr6vpQ6Kv3poc3R2iVkxuJbtZT7juQ3B",
  "key19": "4Wqn6625UqYW4776qF6jx5FZ8Ag3KwFmzRzbt95HfkYQZJrNo4PMqGyRNrdfXkj3VsPLeEy9xRmfZY6F6v8e7Zcc",
  "key20": "4esprQASC5U8E77pi6CXVeb1ZEYCTm3DcoDFCCto9nnhuoJSFAtWoM7NnZqzPehpqZ47FMYv9t8brPTGCuHARQ1K",
  "key21": "RSv4TrtjQRdW18hVvcdMVBdyNZpzaD41qy3z9DFmNPY1Qz8vsWEngUbjRhp9bJaCT7aqHUM4BaBZU4sx3wVAUFE",
  "key22": "61iTsFF8kuwYneRzMgSdRKMJYUgt2acAcWTNEfDakCWJbrHFgWD4Rh1eZGxMssPFnhY99HnZtb8NayjHeCfQ5vKU",
  "key23": "3mTuU3fZy8MUQXR7H5yxStjcjwUkaj2P88wWNRQNKCq7Lb3D3jo4t7qkz6Z2a1UBpyjvcQJsBbeZowQZijKwB9qo",
  "key24": "5qyX3C52wi5mCsXDK5h8cHNxh9xVs3vqtzE3goH74ZUYxWXks6TQeGfnUR6UP387jYxdEAAbaPRNXyViq9C9okTF",
  "key25": "pnfULXTKoHSxUPtNsHQgJxTEcCFCzRPjbcX5tNmStxEeA6N3xpxTtt5PiuCJ58PHq3jTZRSqdH3rFtQ8yzoMW8W",
  "key26": "2TFGjnPMtBatjMUTQhiLMXoz5oxns1Rdt2asDvaRG87APgK9uwGYTrHspEFj8g88cA6oefkaimaT2py49WrS3Ycz",
  "key27": "2eGG2tUSmfSk1ysz2iexBz4vfbV8HDrjw8PECLhL1oze9QMXMn2kxpQQdcGWoKq4Ae2pKLbq7KikLdMUJ7DvC3z9",
  "key28": "2jFpC2PgBKQcJpXCkZaYRfR5jHmCbngDDXj64BgjcSFSciSWz5NkHQYRNo4LKJtd26Z38ADwTsmzgTsU1bjhoUPe",
  "key29": "7khHfmsArGQXFiQnQYBVPvJLzusR4bDSJPNjNDXWrpCMvvBYckAWfHX5qXVzhb9zwaSRQvbR5Ekhs1jpTxNp1JK",
  "key30": "3a4yRrw1xGtMxaxgMUzjJ3b1oEZVjRLUe4s8BCndhoQiQGqHJcaWAhn4996d3aWHZzGhheByNFRRiCtCaVvm8cLb",
  "key31": "5bJ7krJMiDN5jRqBY1yMaHFHtm1YuBsM7qLB9rkkW78denoEdWw6Y2DampfoWAzqUvSj8vFFQD8ANQEvsz5rZKeX",
  "key32": "5piLQQ9rSr1yX5PtADirLt4YhMbH9McMCvCfGs16LmwwHiLQfLeejsyZuxdJVjN3gs7S18kfdqm3HKptFqDuNoM7",
  "key33": "2ri6kJSQXp8sAHxpGHQF524VYribi1MX5X9hTsamrNJKxdCqxTPopDZp9My29cTD1aeD5UsczAcCLoSUb4DjzMPc",
  "key34": "3Gk4koW5UZz6kjxRUpE1XAgJhUBXo6WSrzktStDXLNEbYaGAk2BwCRYSuBxkxdD7p2ocj9WazHM2acFLU7XxQSRu",
  "key35": "3X44EYockUqeGuXRqef4KsQrjpuFBcqgHF6dMEacJ3Ex6TFFS23Vw67fqeKcvHoWGiP56sJBQh8xn6dN9wowJqNY",
  "key36": "3mMXHd7xSV3zKoQ45uzZbg3mEg5zjfJX7nJ93LQkbSV9CkBbHfvYt3AGLAZFzcxh6svEAwNgKfRpdZHy9BcYT6QU",
  "key37": "2B6QWShEYni8vWDn5cmN1EToJb4oDU1cV6Gqr3VpMnB4aMsDjyi16DVPMzQMEQe4XFTB3KMgyGbqjQHzmU2tFe9U",
  "key38": "2pfpetcHmrRtQyQSFqoQh4THRYtqspMvvvCdBLLUWgca4YBXaLNAdNVEXCair7cBorm1oCRSzkwDgUSx7GJJkz82",
  "key39": "21fgfpYT35nGhh9uqV9cHecconf25C8HeasGSb9kj6fEsL8rSrxAc8y1YYLYrAULkDodrXoM2EkfUxAj6du78owD",
  "key40": "8XBTCRMkDxHknKxNDbP3Q5fPZJNTN2AB7bLuYVegLiLPnmdS6RnvRnFxGnNHXMEyz6By483Fufq2o3HtRKq1VUi",
  "key41": "2FHhLrQnHnhKySf4v4Yc5H3ZGnRCbDwmaWSiw48r8nhCLYjcJWoKoZWTpub5wzfp9hEP1kQLxCATkW359uFWUjyD",
  "key42": "3xzUhsxxPVRkPaeTqbao7CvQFjHJJDmq5XKs9eLZfjxQ3764thbgtcQ1cQxaZUjaqRVYxFNDv8PWM3AfNMiW8hRy",
  "key43": "54i7cpKiXtgMLad5DQNwsYDXtV1dUMs7PUo2bXgmsLN52srAigHQQC2uhuTkopXmqDvUeUUui3JkowXzghrLJmGp",
  "key44": "5mk5sSSfCookzTnmFDWLXnd1hxNyURBZdc6ebcj3na3v6jDUkDQhJPxqoVbSJb9jTB7ju28FX2i5vQG8ZPEC4ZuS",
  "key45": "aMpBuZAQavPF24vybBTuYeRVUphPX6udxn9jBiAk1yro8K8M2fSzWmC6ChrwZtW8SCZgGGQcPQBnMbgQnTAwynd",
  "key46": "2RoEqvCNqompvmr6Ve4JnSqESegRPLkzNbGwV9zh4dZHtqKG8xqeHCLm8188mThGS4ts2JcA4pf2vzPe7zaiG87s",
  "key47": "4vjDA8Q8FhtaT4T5mFMmSn6mwBGtAHgxDB6CxMhaHHo5aTDCEDvtcJiudCRF4uVFxGiPhGLA2Wq5rDPCZqBqaSuK",
  "key48": "3FYDZVUnEbV2PRkP7bBivcamPiesRGT64SGSUDC59jxN7Hu2o6LvLvT85nxQLbEZCTgxv5jSfbsFXh3NFzG3uDbq",
  "key49": "38CY7jAPsxHFRfHhjnx1R5qUuzM62rCEyuJGt8wjdsup9mCHNJWcoCVttu7w78sENNd4jXSNh2bnQSzAwek5LdUq"
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
