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
    "3jCmki5MSavzww52CANDSJJant7FAxaQ3BDComcTTFoU18oQo3JXG4rum2moZCZCwo9StrZ5AnVkf6BSstuJEhLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vtyapjiUkpoXKne5kXRMQnNy4cJtz6YbcoidkmYqmFYzjxaG3bvYovcw4U7KTDyWe18TqrFhVUVJ1dfPuZ2cNcH",
  "key1": "56Ri5eJXGRrSbFdscMbHT33fibFoJQaTtRJWUQpoDtTMDCvsVxuwrt6pb2PVu9AkdTEwyhZgR9S3fgPBwoboazW2",
  "key2": "2m5gkwKLp98ZzfHreH9zWwTrp77SZ2Dg2Y4MPP2pYfPJV859cjMwPzJYrKhdxbaHBEdvL5ikZYjnqggkv5V6C76N",
  "key3": "2TZGGyoB2KUtoJ7uq3sfHvQusarzgLwWGziCFRFPNPEfKobGs4XTD4KRAnte1uLjE1PMXn1umd5jhanHV5Zc4wsW",
  "key4": "5p1ry2a859ypCGuKd5vdFJtRizUkHrpLuCjzw7UM98XqGWMTLXBko8asNYDKa1jeLg6dKC9WiV2U6gmKRiAD8SFi",
  "key5": "MaxPucB718evEsgG3drMmgNnphJJ77hXTsR7evoYKXxsZz2hSAXd21U9dzs578pL62e8W69aszrVogy9s8FZYp4",
  "key6": "2sRJPKRadXoBKP15fnZFe7HETW4j81vzWtdLmHVj4C6qRPiXYSuvxjrthhX41mT1UWqFhFtxK5tSUByc5yqjAPw4",
  "key7": "4LMGEMFr2xuHJP5divQHfzYks2AjgGnbHVvaFr3LnDz6wQFWvJLFMiFYGqUP2bCfGkeSAJ3ttoNuwbmUqn9euobp",
  "key8": "66Zjrim2EAAD115BQX83uyXGZnTSJiLcBtXBkMRBuzkuEFNh8ptnyxQTg1NohDZteSGY6ZskJ5BycapfzhrDg2oC",
  "key9": "4ygCtqkekf8VhBNh4DNQV4FZSSDUcYTHkJFcwXEzr49rzYeG7qWx93Me9n2m52RHHkmVwTEVU2jk4vFGnAbbD5KK",
  "key10": "2DqAmSDExhBn6j7hQtdQyULZkpF3h2bEc3vzBU6EjubFJNUwYeksR954MEK4qqkmGpqnaJXjSfYGWmc52mfAf4FF",
  "key11": "5VYt9BFbzAbpV9cuvyb6KN4HhjB4v5uePnecnMkbGLvAptJSK3XGCCdV3KEAk8N3FdK6J5yorLwoBJsVrQbzDwHd",
  "key12": "556wgvZ3JDjrGYhfsttRnSZboa9o3PkbNRg14KdMPT75hnHyN8qThGestpirvdGfqR2GNWpwJgkyWGhxVUrPLnpW",
  "key13": "4YoiDdizxbhyW3A4DwMduGfqbYcC2vqUg1h5U9PCTZnufsBwUuLv4eVXmDhtfMxscPZBZTnvHrGUegpMF1a6y5Ar",
  "key14": "2P38kv9E1hgz3NNu1PjxC7ceW4oXax2vvHtmwhvmVCziP6GrFLNFzqzKxBywPhqKCe23PYHLMhFJqR9bpZVRDYyH",
  "key15": "4JLZo5kMjc5y2iAwLv35wFFptHgbDeeeMVJt2ec2aHUH97cmYRsJThpB3driP8UAd1eAa8N9jD3rPWBdNx3WnAJz",
  "key16": "2soagEDmwgdhaZsMrALDVNaTdEx2KYiJVds2kF2Fsd7RdAz3SykCrCR444xH8Gcmz6R7reDBDHXDZNLE3XWKUVPM",
  "key17": "aJ9WCNzpbthghh1xLCPRyTq83QqtS5Yg57S1uXMxQmw3deWi1dwDJWGAxiVsPHuSJ8HZwetnGMS4DJUN9XcqPQy",
  "key18": "qNnSrxr8MLW4dYi1jktMNdKjzdMF7yKkxzTtYj9dRhc9xXHCTM5PoPnSDkdfZz5Zs6iDVKXWc8No1LLpFokjubC",
  "key19": "p6dZGErVVJEWR8KMTepGx7DX34Z56kb7wf7ijBD29rXSAqnyWYy8ZRhtqCaWRoQq28mLvUAqaqNqEbmK5MYGvJy",
  "key20": "52S5kmgUao3aqoeExmKfGMQfv9SazAv4FHDdS4axzGvZK54zQ6v4EbkfdSH1gViPxLJgcwnisy7uZt6gAro9oUZQ",
  "key21": "5JbQK3W9y44vCexQimMsngsFpkZEto8qjhQt3wZdUqgwY9sw9aCkieLtD5azKip4UUisHcbhEaqPpJkgEspntbYZ",
  "key22": "jsexoe9sSxPRVDBfQPXVaQQkGteCzpfCJAhXzhzx6iN3tPiiCaH7jXkYKgjVSQe2gbbmUqcpDduas9WGDYYotGf",
  "key23": "39LDCuEXa3sjScziadk3dHysCTsHb1QXWELbYKRHsiAH33io2arqFzgrW1ecrtQDhyXeb9bgmMsiQkk9KNmB4f7G",
  "key24": "671NVhVKSFBNUxUg6BUpPjRMsUknfdqtx7mxv8RfAgpHUDdFfk3BNJbP2WRemE7tTJxGRRfJ7jwPXQCWvLpafDXn",
  "key25": "5Fqj7FFsY4ZnFvcrPx7HMydFaMck4fL2gw1QJh6aeimUxzAyupQn4wgKHRCZhkM3iTC6G5WW3oVja85Cg7FXMGMc",
  "key26": "2kNpi4GSMqiPf6fTqxXNe1yYEusE1H7LQUMgNU8e4aoxTASwUwxdUdE1nVFvUexPvwxXBvAj9zWndFXzkhLtMASw",
  "key27": "5bSeKVr3N31KUjooZJMjkeRCyYtqfYryZ3ca4r58k7ZcA32LPHNtRViGpwFAsZoqUq9X6fi5WVditcjNEzBXUWVz",
  "key28": "5AoVD9ckLxUmmCnsbsa8NSAHo8mzuwJHxvxnZE8ex5m9ZQGrfVFYvEBV4TtDivrXwKB7QMEtQRzh4WhmUoHoRCgg",
  "key29": "64KmRMGoXqn4VnmuveP8i6rgqG6PWraBXLcrNB2HbD1ibysvmEARCUevZkYqBjyAsBvuP5gM1wJjJiQ8NLGizyCd",
  "key30": "5BkrJCFBK74sLqKQ3Yjz6SqdbfBegpEysmxXN84ubh5bv6CvDcAsHkJBpA37U3eiqdd8nLDmgy6mtshhfsxkcA8F",
  "key31": "3XSnRh4AoMw8KHZpJqzsbUc1HS69QTobziKM3sWoJRyK4JkVmNPK76B34vb6XixnrE4dNVNddN8NBvUundU2zGn6",
  "key32": "2VuLn7tpkNbWe3Jn1zk8B3XfmLZiyfwueJGUARVj6Yufn7zNtYB1RiFeVrL67UGSSsJbHFqhBqNikHxWGgcGiCzp",
  "key33": "4aHk7GM5njHUyacabAma1xX8wecTt828hxu8dSDy1tLdyURQHQRZSk1vnz45wzNhufDzTvB1hN17ATMyMdvYwXqp",
  "key34": "26tGW5rKZjFUaSjEcmYteWa9NtWd2EJxivfRm5Ecx4rZLEi8NGB7Bt3N2zkgAezbkpiVqJN2ANh7XKWfAoL4Xo6J",
  "key35": "4Hg8ggWDftJiVeCjEprqymAENPGXsw36C3uHV9a1SRN7TJ6rTMUy2pbVh9yUv95USYA8kZcbumGpyJfKm4w1wJ6D",
  "key36": "4x37mNdNumiWM6CWmWoe1Sj2g75uG5N21BarvRekFTT7H3f5pPsKW1ytMCeVEnX7vSGLwTtFJQnhSV7MRs6yaHnB",
  "key37": "2GJydjKYANhr6CnovLovRgjRqqj5NN99Av6mTqEwusQuxismmP2wwXMB3ja66UCGGDTztvsVziujqdsVtVBgP38e",
  "key38": "2kLMdXXxuBaEUrLxdyMn6Wysqqp4uC7QN3rEG65hwV83oK1PhKcMfowCuGF1YBrmvUoZtzipHp6UsNKseCvLJfgr",
  "key39": "5cRLRzMtdWpCmU8nrT9UMydfbi8E5Y8g8VC69ui84Lbnxvuda54YwMCo8JaZrjUUbAgpPzdMuMVf5MftRyqRvgjr",
  "key40": "3hSAd4hkLh9PSwXdX7quLaST5UqDjAr2zXUoMyNBmXopExiV1RuoqRHXmUegtbhbEyZcWiG89MzBSXJjhyWaJYhS",
  "key41": "GHESai1gPoJ4bpcCeT3NgRhDccAbGEzpxDLBudPmK8nsseCWyVrxbKMUDY4iuvHp8v4qCUwLvjkMrHoFNWCcPdZ",
  "key42": "Yi8xfP1fHqaz3d9oy5Tm5pXzfwoVxvV7qdrv87G51wGE7BZu3sLUDoGuqZPyH3oMPCudFuxx9guaApp2ytUg1xi",
  "key43": "2f1Sx3GeCWh8MMxTSDkBzuDbvJkozWPxfuV4tFUYtYJk2Fiduq6iWmgsYFZMrVeSdBGvBvtffQkEffkGtxHZZr1o"
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
