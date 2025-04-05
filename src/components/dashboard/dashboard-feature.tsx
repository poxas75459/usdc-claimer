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
    "3K7P9VrYhft8NzkWBouNKwFgYU6gTUKUdX4yrhdSSYRJUFfEkyyBu5x7hCZvN25xGPN1kGpJbHCE3emZZJsLFeNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oSPftERbPVx8XHQTwRNFgdnaB9gMSya5gZK4e63KempgGpxeqTcgvPW4iLbJctv1Z72Dw1cdYE85owL77n7Dmiq",
  "key1": "5Mzg5p3AWMMeQfP3BT1BFaD65zKgEJGVkDbeuzhBAJ5ThAX6Zf7FB5obdYz2fa6kzbtFJJiAc1SPgbWWgem2tqCd",
  "key2": "2zptbgb1PG6MUqY9gov7SYrbh4vtNa8ooNsax5QCHtSia26cNgAK1PjqRYLnRVq9WRuSJTAZUnQkq7Cvqc2CFkwK",
  "key3": "3AxrHR8Fi2kjnwBpUUD57iZcwSj7s8GQxtUm4mRUgefBX27QGifEquFZuvL4yu8sQcLNSWjtPqeUuXxZmxt2jF1h",
  "key4": "3j6G92PtsBWNDz6ncEi6t9nfqCWNrHu6BPvXa3CLxkRqGyatFa2c2WMjoGdGbDDbPugggrqLRvEfiBVovmLv9uxP",
  "key5": "pw72L5rEKaZFebfwhJiWyEEiYwVjfRkv5cqEKbRB13sBc546SWKpjicPX8FdbnA2j4MVYrkZumzZPftLd6uzr5T",
  "key6": "4oKGAvHGo8pqpa6wLKve26DrscJgdBdZx2wWbCqtcwX2xBPonfjKSkHTDtAgjENbiM1EqEae3VmvkvwA2ZpusaYA",
  "key7": "F7dKmok3jxon8z9BTFPkUXjQd6zrQiq1y918qETR8B378RHwx38XKhzwoXyYsBKegMZTNDJZszAPFnSvkJog7yQ",
  "key8": "Aq6SZs2cQi1Q5LmVEmK9T4w6eNDzAoNPEJpSvWJj4S1ucMVccGeveRDLWRZ3GvEojFq5CRMwNSezSzXDEQ9TJyk",
  "key9": "6Ms3cj4JiewUsgqSFoejWS1eiL2h8bzQk5dq7ayd84SeupdXU6NZMSWzazgMZKkTKKQZQcs1nHXorZcFMxkC6MP",
  "key10": "4fjrwTNKknttWaxoXkCfVNcvmh7p4RaWsvKtrtdjA1CfRbYmdEZGyTgX2m9Amv3yjskTe24yUG9T23gEJ5StyyHU",
  "key11": "4VyQV8LN5fwEzgjhSGxTfVKVnXbDhgkm2JJ99Y8isF94AyL6Vtx6bzR4pZMo5RRr3KSwjQSNdhWwpy9iM7NRdStY",
  "key12": "2LyhmYd9d4Hm9eiV2bjZmB7FyybvAvE84F7PvjRcUNRH9Actkc1mxZTnRbfGYgFaXsPB8KAgmFeVc9JG4u1Zf44y",
  "key13": "4ADkb5ZwakXeVTHWUjuPNTfZt7DVRW5q4m9bBwB1jzwvQDgHaKwhRF6W9KAqQc667grHuANmAJzxAA49rtzMtEgX",
  "key14": "z6fZvVHMAvaycj3grjMb41MxKCG99bEERR6R4vnp1zAavVhsH6cFmtzJXzA37qHUc4oUZGsER5bTmXqZ8rsGLDz",
  "key15": "2cAMDk5gLCv3gdUMgoZF7FhLD9rd4LzPXP1C2MxXnhw9tL9Uaud18CajqJzbss6ruWdH2sK3jVb5MLNMx8CXDPDX",
  "key16": "2HsK3o4RRFcqKLWfV7r7i8hm9mATeGcNVC3T9ByrtZ8G67JNiQcAXj6aSefUtic1jMJ4Adyx5ifZECEEZPW8SX3L",
  "key17": "42jEyK6XY4KPXmPnt8QDRHLkxMd68pGTpw4vQLFrme4N7E8TbAzr45H9tRRV5pbvBQgntjMA2Q4uXPqNHvxLSbRM",
  "key18": "3R4VoqCAkXxz6RHACRfSDP1GEwKZmm5FK4fRDiRmgpUiJjenNV97rew4kzyTPQxeNvD65WU8oscw8SCkQrQ5v3Fg",
  "key19": "3X4bRp8TYvmLuagKMvCUGGdL4wTWxUFHBHgT4rzMGNDm5ZJAYWNtcxG3C1f5VWT6FLruS8ZSpsACA6bQtFKtCpgU",
  "key20": "5oPxnpMjwTYmaebw5qS9NryndkdcUvzuXJ8H7c4dznvkz9AQEZfDCBrmN3Sf99pfoYdByCcBGNgoH7zRdg1v1cuU",
  "key21": "3vuyC5dpAinx2MHNA8n52XU2XbAxNz3ijvnoJpxnzwd46HknDc4FrtUWYKY7YxGYs8nTaMMywHGKhYK7NcF6sVf1",
  "key22": "3E8zdJDBAdg5vrKvxPByp6QAHzMN1xAf6qy1C9FzJEj1TVUZaRLL2JEuqVSuqJoYg4bH8TEsVNQyeviT6pnbzWWQ",
  "key23": "PAJRHRYK3j5xeWpXz8hYWbeAKnyT5FWbW3xYq3s1j8hSmRPJjpyweEyKjguvjNq62LxRhy4gEbdHXSyVHqFVmcv",
  "key24": "3wyaGMYNbTfNHpzAh33K7xkzSwfrG9YtjBvK6AG7GQYTUAnoYYfHxqE9qwcuB9gAfYCJ9ygHsTW6qjUAZeZ12Sk4",
  "key25": "3ft3vmJqNjN2whirzYxbD7bAV1567aqTTm3rGNjmthA9Lg2CA7fCbaNstEUAt3WGt1j7jW2QA9MwzvizFPkGrNCN",
  "key26": "4GEEhyBK4TiAPyYfhH76febm8FtFSEUyn87Y7dg5P537jG4Z2fXCyLDE2g2FkeFhpAjzBNyTkAgXujunxLcRvjGF",
  "key27": "cy2ZZwEKCgkmTTBj1Dzf3ZSLArSmpSx51hQc4fKbSUVkZ8sw7nppMC2ZPkjXunQeSPYGKRZ6tvbbwBAkpRUaGeG",
  "key28": "4ZySnABTcKrJ7f6ENLCfwhDrsv3Z9LYJGcf7H14EuvaMP5SKvTwCrC4XhwXfYXaaqiaeT1jE6eCQkDRfGpbhJjqL",
  "key29": "gcoj8UF5F45yLYLf9r5fa1xD86tkAYXYzV4VbFPUGLS8N4H9bxfkKU8JK1qFofkP78DmoXwVh1r7T8PPuEU7Sgz",
  "key30": "2MA1MSvcKydXZgZerHWBhcUk2mYNnApu7cYPiHanSyo2nZNudMt1esPP2PsKSihS9G9vV3v6YMbaWj3y2W9t2TAa",
  "key31": "HUhGfw85Bk9wAyBKfKKeebViq63kc3LmPA81KJEHKL1qVhygyMJedQTdLJBMUWppSN78HyZYTYdWhfgseUS2XQp",
  "key32": "3TUr4deqTEqzrq4WK9jbngG1tvDWCZd8reQZHmkDrVr1H6HDa1bo77c7R667Q72Lhi8cicKbMuSKUw8DQ2cVJeTu",
  "key33": "4K4YVC1eaGLtq1E9iaR25WpaVZfepptgQcgVV3A2pKBPGfEPj7woEHHkUZGimDe5Ls7to9hKxbJ1sXJA5Mi3tsTT",
  "key34": "4LQn6vvyS8nzoLerzqe8FFkKxDa4UmX2iUpDfwEZkqXBjCYFi7CRtJcGSRmhuHKDhJb17BweC2b3tgxXbnLXYxLB",
  "key35": "a3WuhhZxXNFbzzmDbVCkH4Ejmo5UM5hLvrjYTE6ssh5DcPzohsG3RQEk3swXdTiMpcB9e3C9dyKPq4RtfB6t8jh",
  "key36": "3uwCLh1rpAi8WKoCSnTjN2a8ACHHz9Ev9kKLzqwsUPQiuYA1MZBrxcdzX639UzQgfRERZ14ixGWRKzcj4afsvTQM",
  "key37": "4uPdq2FuE7mZvzwGfvmcuDxASbif2TKWWVnKR3P4vu4ndUKDxPcwe2Fu99jLEMJLVx5SvZV8uPu44uZnqCA7svjT",
  "key38": "3hYDB8vYgu2aGKycYJ558eYeoiuuX6An3gCUi4yCNumX3m97hLon4gHosQx5Qxmbcxr6cNt7Q9xWNdezsksTCb8p",
  "key39": "2dVKxmJpz9oU94cNxN6wiKTEHWUPP6j5NdLGjV3YFnw6efaWw24TSMY5SEHfZd394xFCjsHRH1CYhncpCrAkShkB",
  "key40": "3NuZTfCaVPcabxXQM1HVFP94fNXFHDqnVHAsa6fMUDbRw9RzHxCovuC7BAT1XqvBBxWH6AfFxkWuvQ8hxKHukNMs",
  "key41": "32Jkm6XuNk7KHKDXRshYHbAJa9kr5os1oJLKY3picCbe6f7wesqw5tWszAaVwSk2c52J7FzCZzuYvM4aE7xhpn4C",
  "key42": "5y2QAf9u5umzUgWHqryoprZWge1dzw8U8tQoMFSKXFRZV8AE5WFFCrLTqw6taCMHNvu9CLpmbqmEAeRqoVi3XSe8"
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
