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
    "44wPSfrUZHtHv2VsCfHpUTSTYsCo5etYth86UZVaoUGxxjQmCirC35KaunfWA65AS1xGcjtJQ5CQ2X4JspUebLFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SLdPJcVZvPpAx9Bf3S9sBd8oCFqZRLKwdGie3GPDb4HGK3D4vg8btUnZQVbSR6VGfNV9W6NVU33KnJt8hi7fGsx",
  "key1": "4Kb3tgoLPkrg982ofeQRNHtA7UUkF6pCS3G6sacSbih6dhdrB76gvdzxpW8mh3qWHFEdrtr7ds11tjC9Pb3cdFNc",
  "key2": "5XW9PQEX2S4NhS5qKzzXfQLjMeTNcPK2rwW4VjU1MtV1zw9aScNeKeaHAg433t4WND4hg1dzcu6jhUyZb9RBNyMC",
  "key3": "5AsPEkFR4eWLgb7XPQZJinXpupfjrBo1dN87FWtJrNsW4WhwqGw64dpBNLwTmpYgK4drXuZJaBqgLAMeXS5Vhbcz",
  "key4": "5btquJWWoP2ddExvW7WYiZPrRGTtjp9atd6brBib7UkHRqvfHzPr6U6AJPWtP3KJ1Gkc93oN4FJwk7JBcoWsqSXR",
  "key5": "2mzsGP5Y62wXT54Xd5cdrSYyhM9NVHe4S9SLudq626EUmg3NU9YTmuv2SXqrhyMqoREwwXnT3myk3U229fDdwcoD",
  "key6": "4VzAyusA2KTQW7XYMxPR9mE4P1CXJxZPFiRjuH6ijvgxSfVNj4S3GsibcEnYBb6baK7HhFpRNkTtw479iEKU4erj",
  "key7": "4r1PDyZBxwje2HtsFoMk5GawDQJtZQieEvjE3v1vpHqDfC53tMHaYX8LoP2eQqGUZnei5wVEJFdBNXFVSXHXH2zt",
  "key8": "236f3JCxXEPh1uhJRK9W23eYrNXNDZwD3J1D5autoGR3Gj7A88CN6c8c5Wipjm8JZYUqzTs5xXY5qaiacuch13zn",
  "key9": "2LcPqZJiPZLch5D68i1WSeNCCBwF3wSPwtpEJ6nofdJzH7Yu6oCBwV3vgqg1xXWCFG6331SsCLeMrjJMaWSMdVVE",
  "key10": "2Q6nwSCZKY74u6C8ugEYi8NBW3NVdrU4p61ysHCu1spk2qzf7eyfJ4rdSyQRtpJe1yn1oeFcsqZDUxCpXt4YnPzk",
  "key11": "3XsuRLrxM2jvhTScJwSZCgJsHYFdtuUGHerSAUqTN7a3VieqB7ukgZ4jofFwKR5PShvTFvMpCXbjmBMEYHRVgqU9",
  "key12": "4gARSog4XMGCCQq4223FTZSCrC1GGJzB18HiA86VPETpA5SJp7YNPauxS8315Fd8zyKTVXxJQt9sAgh1U5JSL6rn",
  "key13": "3Sr87FYG776oYbNL4dZAqEHvizkPPxVq2MEaUKwXrjtqGzbpejmuXJ4xgWkv3jpkJoHjTWJSce9E9hxxdXTeQMJR",
  "key14": "2WgFuxnhzDrF6wh8eYr8CiKzvxn9wHPgM6EamUqmEoGriuTaQb8Dqwi3E9hRo8S6j8DnCYL1j5nrWb4pULtJuVfn",
  "key15": "3SitZiBdmvEe4T1etwe1cYrN896bHPs1WdSncp7R2p8u8nBwCEGchyhjabrCczFUiUxNEx6QXWTYMKkDrctfYTNt",
  "key16": "3QsYsG8tSgqpK4FoUHp87m42gEpjRHQGo7nW8EKNaUQL48eS8kCnuF1nCNqNu8ZbYJ5JGRqjJtCcAtjjzSz39WUZ",
  "key17": "XavbLNV8dd83hhVAC3YnnG8oPHbNy6jSZMBEPXefSxvntWRjLU3oQSQSe8QGgLqU19JgdH3VVB9b4MESyU91MHT",
  "key18": "4BZB4MVYh6ijZNci4qtFVMxyBTUpC2nyhPL39ZCiQEc9ZdAXJprtemUyKwwjx3zy8XwhGnfb22yr1Y5f9MVhjHJ4",
  "key19": "5b5FjwyeZJGXrvUMh3Sf1LyLTvZntYeUyfKyn1Cdde15GPXArD6CQwqt5kkJ3qgMAcHJgtoHuaKECV48ur78LdY",
  "key20": "2cXZrfhxHddoJyStCMSnC3UeGh8x6VgBNGNcp1wD3gtGsQXkUVovvdxvS5tyktdd8kMSVcQCXJd2Y3XBJfTHtQ1u",
  "key21": "4LA7vS5N4ZxPKP5EqqPAPFxoBpGAMhYjjvxkAqargJiu37yRRLsy5Nd6u6RexFAA1sLcZhesXXFNgSVwjfpeivN7",
  "key22": "25EKdBZSxkfev4wkK6YS5Cvb24D12rqPR9KpiE97opMCLZPtwXLSjHwPnYE7oH16TFY8SoLXRof8fJHv8tjR2Y1b",
  "key23": "2cxh8i6gwKM6GWPJrrsF1Yw5sDzC1HjQc4feCtohERzGP3ywNKz63uuKgre5Ye5Axp7twNvgqvwhCqYYX7P7C5M6",
  "key24": "4QPEWB48PMnkbzPkkhVJpjKoKDXU3AXNGmbb92jG2aDHkQjuFKnRwnFfenxafuXAQFSHdBoum5MqDdYCY6V4eKVF",
  "key25": "2Wfx3wYviRJjfWgdn8Muu6TSqqNXLoyYmqpURhdJDwSaDDhKRWV1Wxs9wY7SofygV1sBfprLQmPH6jjsYUq4TL2e",
  "key26": "VWf3YEEhHxiLNyWTAW9qN6aPvTQfXMBMhZZeKvCTwcLySUCw9GtnmerQCUDyaAFsDcUJ1hfCtTsYdQqs7opCNTE",
  "key27": "QQzwavMToRHJBAgy3jfKwyc1vSTA1dLptwBNpuvrH9hVezrpKCjUwrRqAMjFvVmgEiYhwEC7ptP6sEpeiVPsqLE",
  "key28": "5MJgDQafg8Cgjbfg1BD7ButG9esHjjYd6d78ShKCKU9jaXARSjKZ97dhrLRyeqftqyE1bSZH4BtSg4GXGWdtVTgJ",
  "key29": "2uQ3bNw6FHXdNjHATiEJjEUnVcgeUq86UYWH3wJ1a8gNH8J6wFfg8JeYEZjjoSwxn2HwaRPeaXPqPARJxaMNffY5",
  "key30": "5HDEub2RJHxwYtQrn2gyGSFb8o1y2cium7umqZj871JP43FBomYfVe5KyoC7akDLXFctXNeDM6XDfUEvubPeWKvL",
  "key31": "3vWoqU3YrLwDMoYYo1bGdf8cEwoFgS2HV7B8Jgd3jHgyyd2pjGcRHoFJNy7bciHV5cc38R7ESbMy1d7KkGpKoD8o",
  "key32": "4KDdqchQfDELP5FWHYpcSuztwoum7rs7uoeKz2VNox7C1T3t1NyhHHQeFSqoaJ3iaFyUBzYdAanDnZhymPwUmKXf",
  "key33": "2aGxkJpdNxx5oyvXkDdBGzRiPiDZSKzjooBs6JzirpQT6yK7jQ7dAH3tzsNXAgcbGGdVZZAmyh7oERVQRiFGU2Pm",
  "key34": "5eM9NhHFEzrKrcDdpEpBZGRdg3db54t2jMQg1dHPorxnwru6yBo5QQD63512dfnYdoktQo5wZEyFSgeeBPGUpYn6",
  "key35": "3i7MLD8GbCRffXvSymjD9bANowZs14NjnMTHQYSi71iY7xjExYFD9pptFyEkKda99k9Eb9o1BGCXgnWavwVvt2ee",
  "key36": "4wXGHkwJpHZiPgaoLxhWqqZeqgy7oBGJhJPSJ188NH1K73Qn5kT2JNYgdkYZ91vMWwwi3BBpGvpFvhBJxYS6rgGn",
  "key37": "3v5RAE485mpFkvHtxuxkbcw2wivu6QG1DXVaH684FCXHzyExzS1xA4rVBrMPktVS4kh7XjtDt8vMU1mJ6PmxZem7",
  "key38": "45Arai5EkK3FGoVDw47YNXW9VRo5R9Sz7rTvrtsECHRH8KqqYX3ZCZsTXwWMoKMLDizu1DDgkznDqSeihCnC4gAw",
  "key39": "4qPVJwED6Nm5QBejzFZrhoq4BxBEonmGZByKZfqxrnN6EgjfkKXZJBg4QEJ3e3WzM6frsLK9WqrEzPCaQnNLAjYb",
  "key40": "v7XxUrhNjwbP6NRRMawuDkMWrtUefhRTmRpUUv2fRAvYgFNRSoZAA6HKas4Pk95FerwdQosS7vhGgGzGbLM8vds",
  "key41": "3bt5zZj7n6cBWeyjgYpt154PD4cvBryyFSdASeAmu7AiGWLiZVg2Y2V2iHrBaNCH5sXwpF78MkgyHqPJUm2d2Pcx",
  "key42": "4wugJDr2xiPt384RvpLVWtJTfeNWvRXtyTqd35LsBJgHQijz6XBkNkMmM1KBdvoR4dMixDfsvtmrhJXFFXwpvkWM"
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
