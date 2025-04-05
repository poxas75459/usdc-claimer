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
    "124hF7Mmom7aMWfjDQFCHX8JjYmePrW38z9KzrejADawrW9bmMuQf4nzVEeecU9zdz3s1LeiczVQ2hmHnvrko2VY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hhniw6CGwbEDPiineuMXA86Yy4L2WDp6bqpZdjjPGRLQWXuHJcwvqrJDpP1YPB9oUWjYDorFNdx4bq4dCfwynd9",
  "key1": "5AGpzu7NsSxPg1nCXnCSEYT9PA7oQ6STXePEM3iZRpcKoiD1uqRDCMJNSy13qEK2zqy57EuBYHHNeqtjMDgXKATW",
  "key2": "3Lizqe9GfRSykoSNaX292UKodeSc2KWgMBdMQ7oR8SiqLM746KwihqKxNki7rDdQWcWUGmgyrbbNHv3mqF1Au6cg",
  "key3": "zQEDHcPZ8Q4Mu7vJ1CWCXpobWcrxtNyR5anhonat49egwXQNuDCYaUZ6QwbkV8jX4uA9jUnDBsUJDofANxCaucS",
  "key4": "23MMJEUy4KXBy95CT3RSxU4vkx3n391Lqf3onEw4Ab5fLFUPuxdd2bVMkwUrhAe3TT42uvBCQvfYzFa2pJJ6px31",
  "key5": "4dLMk51e4ASTtQZjRMBupUCtmHcG5jCnySjCxN7JFJByZS8MTGsBP1PLvRh6t8PAVmJeLXMyw3u2YMmibmgnDE2K",
  "key6": "R7dNtmgky6F8uhxV518mFaNZrtcQJ6npTS8XzzgBZPEb3BHNmo6w5Vz4x4oX3fRds1KJ4hYb3XEiNcnZ8WREtmB",
  "key7": "61qsa2SKnvKZbKUg3kAgTHqJ2gri4ocY1BKG1xPLbEmb1Wb7VJrLx7aBYKdmx2NZGuRcBfKibSGFza31UzjmafEN",
  "key8": "4zC6SkU3Z93hyveSVr35RXxdSv5vDUYtvS31Gmqp7t8HBxwqTNpJxTCCgeQgvFjdEPuV9gEeoUEk4NTyqUDYLQdr",
  "key9": "4bGp81jNMfNzduvHcd5MFyhJ9uzhuW1gz2LJfHh6k7oTfK4MjNEkkEoM4kzkBrEacXyx3hVsJVYNvyGJ5X72EJYU",
  "key10": "4ixHYXK6BvQLVyTzigkAxEqBkRUz36x2PUfVa9mVQUyZeqTtfA85LTd1CReupqtgFBZLSZKsgG4DUMQWgLaUypc4",
  "key11": "899vH4iebuD1UnKZFg3YdEASLFbmcmcgFC5KvcZNh49b2BnBZG9WEQMY2CvHr3ZpNnoVDJEmhtuxFRswLXLPqMc",
  "key12": "2fmTZHr49oEwyGS716yjV4ZfYFXH98gEnQHFw5wgPZFd9DLuvsPfSrw6xkMDmwP4HZbjKZPhioax6DS9reJnuhit",
  "key13": "5dEPQ4oYoTdanWSxfV2xbqXN4eyTGTeoHy8VwZGQoz1yeD5BWBZRd6KCFmhw2LHU3XYjEg6VMuovFAbQwXkZ5dne",
  "key14": "5hcfnatutNinbMtRzgwTYNmEZw7bNa97WNNQKNm2jm7wSz7qGCeUh6SiWXmsRU9MtHN7ctS4btfapqLdugKyD18N",
  "key15": "51WRqmGezn3f5aX7kD1cR8QVH3b7cui38oJ2Kwx8WYVPS8sqvtQmmBEHp1iHdqeVbLLuMvTs6ezJcW52RcBrxQ8k",
  "key16": "33XtBkgiYrMhNAxvj2B1eDhXfGvhkQTefDpgYfd3grw2FWTyBvftTtTyQcV9WRV98WrXEpEMQHMeq7C6dfoKmT1",
  "key17": "3RmQJrVAGPyHw5448dU6Q6ExH465QTZyFSeHeatjD6PwnW2sBLfwtA8FSyP7xN7FAH7kVQq5PLeVPP6UocJa1shM",
  "key18": "365GZGUH6W86oX952sKhmik7bX9FeVZzQF3e82bVsweTqgiTRwMw8Eg4vC6dn8Afs8qN4MMTWhFnkqM6e7cbZYUv",
  "key19": "3DdUm2z8RRWDfrGRBWTPe7uY6Zodto3mheYCSoMQYPuPBwfD7pLt99KXWdUYFezyWhHXBsihhv9FMsHP18hhv6Qf",
  "key20": "5WRCtPp2sL2X6V8GEwHCEW99HumxDcxyTVk852pgCJc7veXJzTmkLS97oHuox6K8PzzSmuPLbQGZbGJ79RUBFeWy",
  "key21": "36hfE8t22iAZnnGsUrddEoyYHuURAkUE16whRuyJE5HGe2UZFuQNifwr96uicZPaXXwB1kmtLkeWuXM91VkLeE4",
  "key22": "4eGZxMY5mB8TWRXZcBXoDJpYs6d8hA1PzyzLR1E2zYy1Qo2p1SaY4k7xoHaQq7VnbUgApK7k96Y3Ji7Wz2tGrXe5",
  "key23": "5fFG6t8gbRW29RzBygjHL2x4sUwdKYtiC4hth1tLtYSj6n8dXyRQHKdae5pd8Pj9UrYFbLQrBTE3EAstZ8izue6E",
  "key24": "3Q74YQLb5Bi7x1awgPT27qBGkbimkXeSrFMRk4MtaePtMLRB9PzDXYHq9cDXrBC92XfAP6NiTxEt777JRc8HtFdp",
  "key25": "4Ndk9PCf6riUGijb2AaTaMs5XT3219PHCAm8UA4SKgGLbu5eUzzuH8U2cmmVproNXjyCTcNJz6TdJe799LxQ9QdR",
  "key26": "2WFbiusmZVERSiZEQ2iYpvNwBseGqiKLh2jmLXCZKn4tamGWghvBXVAnYxkCog6e7PVdA7QmdSkrR7pTRSPH89Av",
  "key27": "22j3W712KNmbWCsSL25YTjTfHF9cG5wqMR3kfb5LvEQKo8AKMPZouugA3rz38bpZuq27a5TqRMDCuix7KXX2CWYa",
  "key28": "2gx4Y4aA94tKKNjr5hsu2gsXeV5vgZPSjdSqww3hDAUTvTJ5yZ7ifAUxVhLaM1wyDcZXYTWmBQybkUNpG1ENmB4w",
  "key29": "2c3e6sdiuLyzGruWUQcxUcmF3W9Enj1pRuML8ZPsXy1piwz3kn1DSAvSW73dMPc7FxsiWBgRBhgHuvHVKwS3z45j",
  "key30": "2zGYo8zacVEjNdET7fLrCf4RD82xdjsZHV2UgqnYzpCLb9bpgekADV8hNaPqBF82aZhH3p5GmvRdYAzGrX2T3q2a",
  "key31": "5QjsouVWXo6Uz3aai9XFhqvAp3DsF9rKiRqoZdtFQ4s9skRcfaV3abGcEW9DCGWKTgLDqxey11ncZqw9kaipMNxb",
  "key32": "2XtxK9rkRMJpf3XhRAxH2CMxwqb5XmqyGpYBEcydhiJV8RXUMEshbRWxwBBHzxk5gJTSM11Fm6WpPQYFmGjciZSW",
  "key33": "pXx3yh3MTAxz9iSgEaKRQvjLGehLC3RAAQ1SH4y2rhX4JTDHqwTG384oDHXAxjrkgEmu99bn8ivsBSnYX8TRooZ",
  "key34": "2wsKVQg27Uz65u7pncVVVGjgvXSYo5UggPmwErjAbGmZYYwCysphUPkg3CzRZaWXV7c5YaCSkTeCoqkXi5rY2iKZ",
  "key35": "67bDYEtAfKXrjTdPaiRkcpqyEJNfdARncaj76oz74T2Bd6N8ZEQCyMYr8v6WFzHwAWgsLzoHpheLs7Gp1PUfcR37",
  "key36": "2Uqnz4sA9r1EUUTbYnCcdY1n8goPHeVpPG8WasExzBZf9eVSHc8HXE8GK2sJZtmGcrZaZL81TiKk1jBA8QuCGAVT",
  "key37": "2wrPbvnUKEYuBj8xSUDMDNUu21HmWdbWYBgKChRHC1DGMT2GZzCj626MGQoRBuNuodJfyhhm1U7o3Zk42N7oj4X6",
  "key38": "41fzw9FfiyxpF8cfL388EDpcKywvEkcGcyREDQHbvtEHTepua1G3dBdaRaUBbAacHqnQvPfu5HUJuYKDwivBuVo1",
  "key39": "3KvNN1CdaJCb3ac8woXP9PM8RGhnJnX4YuyzGzjoFKzEE5m6LVKscrNWqUCCtu5BVP8FGBuic9AvuhnjxGjweJCP",
  "key40": "f8XgXNdBzU5oh1xYEzYn1AkTXjJfzobsDFavzdWT5WQBZRZ4YpzCkqa6fwbNyqf5uMy1oBTknoidwmYqzCrWbwk",
  "key41": "5fSG8WyjDJp5eKx21yQ6qejuA7yLtFKy7UdXPzsEX3EaiwrXSUnDpAV9oiC8x3XmGsXgU3gmfbzYNRF4NYXUiZ3S",
  "key42": "4z9kRc9T5fpgTK6b1vo9EKL9PKHHfzPx9gcvTeJvMhv7kdgDzHaXLX59cvQh59PrP7qxgN8ZcE7wNAT2PSjXrwu9",
  "key43": "5iReeX5jxcbJv47bSsAPJwQGNYd9HyaSx2iFzKMw5mqJ2ZRemZg3fQUyWDoiDv27Ec7bFQMeYuZoMrPXiEA5WGRr",
  "key44": "5Xdi3VC1pL6vjypCkQi67MJh7EgCCVQCskrRsecxayeUN7hg4DK4DRqR3eCFscu7k4pZ2F2pgN4Q8i49b6i4Nc4r",
  "key45": "4sgAMENB7nJDrfoPLmgPSeq2A4Yzc9DD3wdgt8JLngGC2Cc3AXe77B7DwNAC6qRmibePnherzxbr8cj16HcbtT33",
  "key46": "2Pf1mAtURdeioMTxfCCNLnD5ZwiY4FCU6p3VrW9d2Vvd9sY93ri9GVzDYcd3ctukqRz6sTSV62R4jrWPFvz3G9Gk",
  "key47": "41DrvP1QTjQNXqiChsutGfeXZz4FtgmzY7UqBAr9GD5yjS1C4cMYrEYVaXHC25z1Dn2nmqSvQ63YPjjj6C3PRiA9",
  "key48": "5z4fbGYJuK83WmJBfetkJnYXKfXzdiaqJ94Ygck7EcL2CVJBs2DhMz5SBvuv4DoCNfBBY5wskJw3ctENNA3Cazwh"
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
