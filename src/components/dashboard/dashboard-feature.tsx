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
    "5RZ81s86b4DTGuux5Yt246ynrSD3DmgSNsxGEp7WgB7dfiE49DqZVmxiJb2tU9A9t7ghvPTjZCiYVUdbo49qM1sg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2onvdJXdVF7iS37LZb1GkuukQGeZbnGi93MqmtpFWPByUUG54PXh2MPsYbgkP9aqmC8bfsSnuh41Q9qhoHh7TUmR",
  "key1": "3fW25EgCmg3YFjK3EdE8Hnt53sxXYpGCJrPAHsoMfeibZjTdDNojqtsu97ZepVEiN6JzKK5JyEAMwyzy56Rr3MnF",
  "key2": "3Y1BsbDkgkX6ARrCR4gTwsVFZLDXuwc6wofQdmNGtiVZfSTPQYB4w2DUP94tstGdJ9WTqBKnUniNhEKGdS2KwVnc",
  "key3": "mPeYbJJTUpMwBa5teqAxSgGk6WjqAGVF79gZ688Zce8XfYtyDLRyBwUnJi55ypyG4jp3B4SkakPZQZkR75xLBef",
  "key4": "PBkGR2d3hvTtSEjWNxn3SDTRoA7DJ3WRd5vcQW1ejT87HdNPrgdteew5LVFvw4g6xnMciqxBQmp9kgsy9qEurZN",
  "key5": "2foKfpJ1N3FmRX8QYZfthmZWJtPmHc6syy2ZLZmPMKiFMaYV3D2cWN2Z6k5UfkPAyizawM6pY8Fcff8ixUzr68nB",
  "key6": "315etV6myeZpxL7dVJfJ1JeULQ5QBPCAyFSACGSxSi7Mn66vvEXTfCVyZCdS1FyanKo5qxxVVmKwmZvcBc8YxnwF",
  "key7": "87WFa1Wtf7XQnT3mkPG8n2M3zLaU4NN8rZgTe1XMu9bfYvSYx75AariZnjFsMssw2jsDa3ytefD1cRhLpxFQyke",
  "key8": "3t5AGEsEmvqdLpbbBgsGXqSTiqdoVZ8CSUDCLHtMU3kc7GjZst68jYRB5hhqg32QskUWwWhxQUvANHPCypTW2XNb",
  "key9": "5WaG9YfC89Rh1urDEqG27iQCcKzki5dJh3iyiFVUJJ5AB3mMsD3FTzL4PcCe6BqtacdMx3vH6en6cDm8rAQ7ndGn",
  "key10": "4kWZ3WULucsov3PfVcKEBigFhvg2RgBnEPE6twsZfh4QawsJ3WEw1f3vj1usxmBVotMFkamPxrM5zjk5aPvsLJcT",
  "key11": "2rBFYTDYmfjsQqGmJv9rkTGM63hb5PH6m8yw4XGgAWuJye7yLVFTNN5PEsZhhN9WKHAY9xhw5Hmw9kj2o62rgxmV",
  "key12": "5VFf2WaTuq2hB1Pio1hyQcqnzMjn2paGyR1Qt8bcz3EwM3GMRomcg7gduT1VcquceXpNycPNmSvdS9atqqgXAYrf",
  "key13": "49GRgsZrPWhzAiDAYYjt8CivNNKULjWjmb5Heu35TMAJDgKtpUGDaErEPsQKRYNpSoNb6xFC3phVC3q6na9bviFe",
  "key14": "23xVrioKabufw4SSN2S5rq7cAMyyb8kPaWdkJpfmY3ouPMkAN5mp5pH9mjPGrJDjqHtCoBoRTAUyxQNBMUBhusrD",
  "key15": "56PcC2WZFvsnLvMWs4fR6dMc9fw2yZqippVJs2zeDLEmBmTKEjPprxTahQ4ypqdwA9J8PD7VeT1n5fQMwnfPP6uX",
  "key16": "pHheVA9DfyeaupGLvCVHW3Uc76uRKsWynSprTBAe2uNRNwxXPDHsfrwPRDvDa4KyFbteDhLs6xog7hK2GF2KBdB",
  "key17": "2az48cJxVanPuYfMEwDNw8r3NjNKezBQMMWXZQvQdn6rfRuH38FNMDwN3oLmevY5h6rYLb2P38rysjkNjeq2d25G",
  "key18": "24Pj1pcq5LKZQJUXWkX1V3XcB4aoZ2g827KiySeyTYrLK24UY7LwAvDb2LevyYGFb3NRSZbVR6BTAcTJXtwNJF2n",
  "key19": "559sCRxH78Uz25GAuUYNtyyfLjkXVxufF65xqRMB6wqGcvgvUz5evib2gDJSeiAt7ewwR5MtDNQuoMjhN5gvNzrv",
  "key20": "hnvvdsrh9AjHJekgc1nQT3KgY8mLdbBridYZswcrWNifmRGb7SBxiV8sEvMDCV65KYwxFcREBmJUq5K4nDGqXzK",
  "key21": "2dBmmZxUkqiwUQeWYpwyGmBvj6UQu7wfiiD2j3XpcWogkMMMWxcpqEHixhaSy7XLLNpmSfRG6X6tznEDHH59DiT5",
  "key22": "3qYPiZN6CXXAtucBJ1TKpUUNSPHrGUBwR2XRR7FhTzYTNGjEqcMVAButgXgBn4Jo1dnpYxbQmnnjDMgNrcGSwxm7",
  "key23": "21ZVHwyMcHHpNFKNuxCdjUdfwGMHKsrzryJpG5nLSKv6EK3aTKUSju2kB9tFAr9uQWcXsrbuHhvNaw6Ff8wxc3PY",
  "key24": "3tA9s8HAyiT25d1aniZprnKh6WxZUSWoaE6SSth4j1JCsmFPwp1eGVDLJeQgvN3GTJtHzxBXnNYPCaQqsGZcaDjz",
  "key25": "4Pjvz3W93rRPXWpRptwafkkpFmQyT3Ds5nScS7WEnVDnCU8uLdYG3VfV8MT5qGL3v23g3N8krKVYquR2WhZf7B11",
  "key26": "2DXBA3Pr8dNViw5WxcSSUrKYKduHqq7EfsJhUqyjTyh87iMCKHEpannujsMi75E6cGtWwswDC9uR4QHZk9T84m7g",
  "key27": "xno1gdd3M2pRoFt85MMgh2cRw5zHaW6hZEyvBwtqdV1yyywd3yr8SvBXEtwsJ4NshauomULivy56Gspyy4TVxq9",
  "key28": "3rPk7eoggCEzRWyX3nHaCKABSYAMjctZ1VHtYidGnjBFk2sWUEATdFwfEbhYdutw9ZtFm1hSQFjE7RMFonXjT3pg",
  "key29": "ccKKFrojFms6V4REzAp2p1hmLnQUNKM9B98XL8gu5bJQBg6VBJzpvFQqew2hb31DrPqpLAL9WbmsemSvH1umUsX",
  "key30": "37XPWaZZitMJmGf5wY1qune2jkJ6FYRuxLybFyDq4WE9LVFr6RwrSd36hMcypc4rBUKMQFUZS3bavmwnARCc2hem",
  "key31": "485bQbbvUJYTErLBSwpGJkjwbxfkEp5zBUWnhggDdWQN8AFpXULgD3JYgwWogDNE8iiTrtt3GCVf6CHeefZ783Jw",
  "key32": "631dUuQTUEJ5Y2xCJxgdCh7GVgHRccr3w6GppMsUN8Tcuj3etTc9Sytzj9VvCJhgfSEJHTxJ9d3cpvxDJGW6342o",
  "key33": "3QxLPyVHH6c5gUVkkkbKEPKKd2yhtPuag8SjAgHwAFQkrpnU6Ysk74fTeAycrzTt7KgXYdCXZJBA21T5fGLHENEK",
  "key34": "9jfRHHQ49cD5MjLuzyiBmqMKb9wHkP693tAP48FRGjdXgHds5vr3oYEUUwg4s5CgqyyXNwS7ix5UcRPRGDk17yy",
  "key35": "2cUpggNd55pdCsAsEeSrUivBDkmoKtBLBgJQinS7k1iLbkfoskejDqh21xpybnFccoZAxePQyev4Ta4nDr8wSEvc",
  "key36": "4gggUm1Ror8CdueNHqsNaN9BtoXPHvaqrCFRMPWktZ9pHPrhPQ2j9FA6AoWrRMdLAXMvGxcrREX6w7994KfKAneH",
  "key37": "5r87D7fM1CWGFVXeqgXuzmDD78WBJK5z3R6VG4RzR7KyVD73mPWa54VY5RFTD1VTVL69akFCmxwpL34CnhHKEk7D",
  "key38": "4KybudWSqM8XjnzLCkheh8sTnQn7ASCq5CvN2SjUiY4zdfgvNeQCkXue3RdQxcFxqbyGNQzMwZEZ27gWDdp85F8R",
  "key39": "614oYyNjfzfoFsxG6nAK7tT5zoLZMYiVofg4UnL8YDvomuRdxGJAGLgbBV7hkAtP14LNcFi8H5SdjHa5MYq8mRBN",
  "key40": "47GfxYvCdMdkWLrGggDeNoH71feoHgiaZWmmDtEcZX88fyuxVZi7sFE4JGjCTkRCXnVFGsFvPyvc5LjaZkA2TEQo",
  "key41": "5FeQTxRha8DbLwMpoPemhr3gPJtseYLZPzBS1xnGzdXYAZVAT1kPye6KQjoN9fPH7x2DdmPKrwqNn8b3Qckvp19S",
  "key42": "5m2vTt7YvZWTQvq7JQT8cgdnp4nZQ9yVqMSo7hvD2pwQEHBK97FFJedmja7r6arvKHQjgw1eomiY71JXRouszDut",
  "key43": "4wd6Fd4PgSfiBBuwwmBRDxp4yyNeGegLZ7XdbQHqL95utmi8oQc5GxUxyEu2BUmaD8nXEcHf9jcWqr9FYK45uxnV",
  "key44": "2iSoRkndHTVk2XXrXcnfVdx2MXNeWwHSQfwLz31CM9unpJHWTBu8aFsqW8fXz1zztJaWirsA37fkv8DbHzDA5F81",
  "key45": "h4E64bBpPetN4Lwgu69npE9PyA8QarzZGtv3TSQWXYKCFWrpP8C8WRgY2gQgsWxDnxRDbQDhiW95ZTzrwQgG7W2",
  "key46": "9Uw3iJgwtcFmsV14nXFLtjhjMMEm6KfxYoHV5PKnpuwMfafFRTvzihr9ZBXMZNUc3ZHHhP9wP8fdpL4KDjHq5u1",
  "key47": "4v1dWtC5dMTaLioKWxeJY7h4xgeWGNuEXuCkTYU9EpDzLZNv86eaFfwfariw45y6BZSphqnUZMrLGVk7SLRhkoNb",
  "key48": "iBpP7uRBPmtB9wkVtdQDaUzXHrGUdiajFWEW95TRh65CpeuKyFP11oKBqfui1cifDboDwgEy2Bq2LH7tcwMnpf6",
  "key49": "kR1HVUSYv5EX9HUTeZuqFbqPNY1sRk6PH2TS3jWDFkz22Nuj6xFL1LxVM22x1kV7KyHMTtRAGXFX9zb4QUyFkvE"
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
