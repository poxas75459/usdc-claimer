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
    "3t8WYZwJXUixbeJgTPRM3AgkC5wPQ9MtETzCRfHjPQMueW5aNwdnENxDp7Ei64XAzd4ShiDm4NuFUhF5oUVQGRdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ykETcQ9b5D25fGJYQrup3crGpf6MWu1YkULndFxCCWWhsU628vADDgZZWjQKViHk7fzFP4KuJ4zPVwiUdWjF3Je",
  "key1": "56CTn3UASJKqairqRnyucW5Ef7CPD8HhJxyHnrRRVfXtkrRYFQLSpb4LUDzQeg35vZCkXccwCdwGQFeyRzQdpoSE",
  "key2": "4hTtGeaZuGzrJELpRtPJPi8p7ZuP9SdbsSKTzdHk22xaJgBabP3MEidfWbNbmT2w3ozxjb99r7EFDeUQSPHXQdLk",
  "key3": "3Frduf7Rmg1xXufbUJs7SV9EbP3BctzSURANkABo3CD2feZS2Zws5bcAiGVLVuaY2QYCwSUMKwigjd7rEGvcsayj",
  "key4": "2NJdJg37LGtxTdYED3t5GCbWXVzv4UF6oEUk3AqqiwQhanzyWsZe1Ptzw9wWU3Qb6rJKGj3Gs4NXUscd9pyTHzDG",
  "key5": "65G9yVFJh6qLi5qDQuzzudwo7EznXgPtKVWqfj7NC7rFLUsogVQ3Tb9xMCUPCatyraB4C8rmdCrTyCYEa7R6zkC7",
  "key6": "3aUg1ojRodG2fjjUc8hHUGh7L988JabFN6Skn3hvBQuswq467ohwbeZujzE7J1fUoVpEcT1b2w6SkEv6TmYFoCQo",
  "key7": "2U9th6nJNvZwXnhAEp7g197Mz5ZQpSsf1pu1U1aCrLMbamwhPWSYBivkcYwMfZczvoUs5abtgbGmxDNEsp5hMQhp",
  "key8": "3Ted1rsNbMXuTBJbw85PHxGobTEBE3yVgHWgdWd68KKg4ggmF7Gm2RJAcRs89exP3peCS7NfhFGq6G294Gnh93em",
  "key9": "4KbcMeUn2d6SWTvofaeqatoj6QmBnja3fvp3snRfuVTLNby34ejbLBMew1YeJf34zCh2ivxvcaB3fFt7TQXiWLsG",
  "key10": "4DGortZX8bwRn9PHijrtRkMVcnQVraqYeu5wJAoyxTAoeYrYEP1yXSjTWs8nMnK9n6nKpSaYF9Gfh21maAZCLht1",
  "key11": "28vLbXjA4Zf4JsCzRjCF6vzYnHiWEao7wfF6qw1dgL8LqXxYiE56bdJpa1TaqJe1DTmUj5ELBMbK795bfmQ4FZa5",
  "key12": "5zpNcCiKAo7tSi5uxL2Zbcqe5BPgkDEgzdYxbHCFV2MPEoWgx87ry1wCYAPwJQFseAKDFYequRXiceH5WA84dY2k",
  "key13": "4B2y8TkjK2A5TDeqVj4v3hDy7iMZefTt9CQw1pswDzDKsVAfY6NrCMFBRdh2TxtaVkQu9Lg5J2hRsBg3KXWVLRk7",
  "key14": "3WM5m2qpUReMLWhYwahzNCGTiSBH3ZZtyGD6K4eCE9up1pXJFtX6duxA8jRWiUu8yRcKo2UGcTKpuGX3B9dwstMT",
  "key15": "33TEkAHFNnJespUV6dfd49XA6GUou2aaN6ntpKorgCJh4vBz4aaRs76wnJhx12jcsD7YQxtc2EUJbum4NGAegoQ8",
  "key16": "wVXykwAVQ7WGn8CbnyQdjv2LgofKDSHuYKpNky7NL9DBDzEtzVVFQHaAMsok8mEbD9ZhAR63dHSznZ9aA5fcEWV",
  "key17": "3ww3dgqF5VenPiwgfoxHfXvaNGR7epAP35b5WGVHzH2uX9rS2tHWyDKo75841H7RygAhuDEyiqpeKYDWHZdg5PLF",
  "key18": "2vcNncqsD4fZEPthBH3k2tDxZgAphBTMrEARa8JYig1ejbrQHGnW8LBME2ZKFf5t3yhoydebpGGnaR9umLuYfTQt",
  "key19": "5EeHEKP1VGgcnzfjHKn4ow1WQQBRgioVavc9r98pVGBqkvZjWNgzFBZYqZcCcgzG2yhu8yLgsiey6x7HmVmUDGty",
  "key20": "4jvxsxhpWzbfoR3fQ1mNuTrJ1pWWR2hNKppxWQTS5JzGBjkpq4CvLf6DSzvfpfN8UULbsgMwpVRcCdWZf7kpAN14",
  "key21": "2XaQfiG3wU9HNcdgTQTYp2X3z8pt9iZmcJQSD3PqBmfjCWeP1GSNcDndEomMpu3cXHeUnAMfmj2y72uManNp8MJe",
  "key22": "2dWwSzPMq6uZehrFHBJQcAJ1oqmbG8SMxNWg1U4cw351V4oh17b7VSrcT8q4riwhTyiCVfydwAfpUZ1eQgSEjyR5",
  "key23": "3VUrM6Y7fWVzMvMMgaCJaSryGHTrKsQABuzPnXDUvTus2kNAC8E4CaGtLyyyCRgunMyqamBJhgHiPNhqmurqavpe",
  "key24": "3bjSRF6rTeLEnGAg3BtfTfJpViSdWtF3AxS5fUWzg7pcr1HiSeb5XQH24VWmEkGrXKUZQh6CfXwFceD6sh7KdZj3",
  "key25": "2PrsJt3GE54nuVrLYE25gbiyDsJs3sD6oN8RepqBU413tYDRV4Z1GfrHSjyezSahzZhE95chy34BGS2Xqz1KiV1J",
  "key26": "W5pdBYa5TMUYNvVs2frVvS3KwVaHubeq2sX31JP5dLXhxQGxbzW2tJu4vgz2uYQyvoFXBFLzqTba36qZSu7u7uP",
  "key27": "ofNn2RL2UJLC4nAGQTmkwqphaSpCpopUtzB1Rxdj4iCWuc1PXTQxXeW9UPEcvDw6TVE7uQ36sxWCts8FbpsqtYK",
  "key28": "EZmh4gJ43De1maSTNaiET9GVXcXiaYkCqbeAjZnDpxdUa69HQ6fQPrqFcvVJci32cQUzcciujMApKiKVyaH2bJQ",
  "key29": "3papsWgNFXQAUF1NMqRa2feFz6onyGfoMBtvv9jhWNzB3bbUFHVH12bFgiDRKn5tDdaoXKnq9ruhHGpNgULMmsD8",
  "key30": "ZzRYz9uE1FDvRdLvcWN277ekvVprv7n2QejPqehRaJgqzP5RzW1SG5B14xmw7raWYCdvGXo8bbDJEcETgCdXpVP",
  "key31": "31yZ7cT2HeXo3mAxzczkwWdnGj1vod3dKhoZnY7YchcbHs8XAvTpKYnupPrdMwzTzbWNpRD2KMwd5EqCxj5Bobd5",
  "key32": "3vFiBTfy3dx4vKkdaEzhmBokaeexQpWvJbNGPmrj5UA8NZWZRV7s6hF6mZghV4NS6w8WGZBakfbRk8oE8HVPfb8B",
  "key33": "pXXH42xDvLtXpuhqupPzvsKtL3k5CL4kgY6o587aDWcxdTx9cbfyguMrws7PAN52F22sornCG2qePkAQXMLosLH",
  "key34": "5on3hU9rRkyeiEjpp5KFta2bJmKsGDtyhwTfB8qESu8kzTiTfGF56hCQi2W6cAw5rMbjmugHyx3a3NLjYzcFLGj1",
  "key35": "2KK7etSUEZgjkN5mQjJYpb36zjzzXphctpejAG3SB81aDtEPomvjcc16HYNbZXQoAZ7aYKui6YtJc4v15gLZUm5M",
  "key36": "28pkWz2cFb2Rxj8urtNqNg3DqSqQTv3ipyuXVmMc4dFqSvpUkBT2m2CdGX1WtVQBGVWSb57jZJxysSvTAXAaSCMg",
  "key37": "JQJnKee4XuMEvXbYaiNYwiA5NvYXHtUJiG6fjeb7n3GMun5GiaJ8C2M3owBfFijbEdPWNVoLF6upq45CgALtyg7",
  "key38": "4xGouLpccWgnNwdBq1UPRzaojzWxuZHGRNhRqrEVwqJntEkhszmCtrPdH2UnyCEjf7TTLnDP6KcPLcs2vK4owvYo",
  "key39": "4s6Y4S7ZMT4Z5ftApSN4i2xgQsmwQhP4s9XuKPyoj7zCwW6NWmVJMBdAX4bWu1W43Y1MavHHE33HKhhK7THSZLKG",
  "key40": "4y6e6bfMmK3HQ6SUfRc2493UXa9pfUyUvf1sPTTYXe4PW5E6fmxmQk84yDPLpXEDGS4uE8dePXMEbzPQUBLWSPxW",
  "key41": "5bKfFRsigGJiJKDnAHfbc4c3tFQR1hvW1ztkhoBVF5xGriYPdTDutqQY6KGtKCMQWyPNd8LcHVKgft6k7VtTRyX4",
  "key42": "4DkrCjqLdcEVr2WSEbTTsCAGEzKfZYA34kQjaena8AryqLFDbDDdoJvouuUYUTM7a768Y3LPn4LZwYrtF7ncn4Zz",
  "key43": "7xqmG7VUmwgA5ktf9irQGvTPuyjSs2ypdqDuMV16VpHGP7zUfNsnecWfCUVtV5PBbLqaioxCx4DYab8PSefu8Xi",
  "key44": "5EiJJNPqguXn6Eftw8NDQQk3rgbjmsiBVUhBSpEDHf66JjWpXWXV5mdT5bFxbVN5o7z5myUhh8DzjkGKVegHgDSu",
  "key45": "4ARxs3QzSSuHYKaK2YFeQiFJSksVcp9KXijv4FGh9qSDc4FVGSUBi7DqFWjYKuRrqdDSs4N9si1L7NWCbv3gfcv7",
  "key46": "R6KJBJ22NAD16C83kvU64W5V9XtJ5MDYBEPo3NXje9SrNEKGgWD5QWxeexPhPWZ5qotz27jAswt1PjS9c1pqLn7",
  "key47": "2q3X7pHEK6BGeoeCLGeDPzi9mwWFeNAMb9NSmD1cZ3DLYhBDyFHv5Qbhdk1KMvk3ospKkuibdy8aoEZQ7Lpb82ca",
  "key48": "5atMzXs9A9kAfw4zJMH4D6q9DqByXUH6Ld6y4Pk7eWfadyeMxV1LD5MipD9uhgs71rdmhM15u4ocAwTAJiBBRtcw"
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
