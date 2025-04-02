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
    "4ZKHnE9wmBjcjzeqStTndViovTatGXX2gJvD7g7ETkVgvcMpm8To4Afxokuvbraz8389HGWfE5dgzsgoN2SJBLEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23njw7NLoZ8scxs5b55D8DrBQ7Fjanp7mxD3VuGEQetuyWr2qVbYWkzNity9Dobmhnr4WwGBCsun8mBVsugzFrWt",
  "key1": "5Fj87GBEtPqjecAZmw5swgyYSZvw85bsemeWuEBet8vTkjEYCS9DT1Xk91PYHyUmBfZeumX9R7CevZ1Cg6fQi87y",
  "key2": "3RnMtEHqpUWEGaHLGZyS95ZDBA9x7f4ue4AFyvK3HSkSyh61tCSDea477P7mMN4AoAPHq3JCkzkYMsihKx2vk8y8",
  "key3": "3opZJG3DE1o6Hg1EvEU4ny9gF9gz5QcDJtnwMc4VTYAT3KhGpAyaZ7Bj4yEsgWKV3LEjvofPv3ZGtHurEYUZ21C4",
  "key4": "4ZQE4jdiVdeRSCHMaf78YhyxCZDV5EZVZQ75MzPh5MHojsM3txVEdUEHh5xHYi3XHYbYMabTqvJFoPEePykq2Ta1",
  "key5": "2et4TZVkRzy32MkFko7rC4tWQZ3sE775CyPvUEgUZPE18RaHzx91qpeRSLfUU1NYECswrKQcjxWEVBgT7Dee3GWG",
  "key6": "296P2g4WVsnsMbohKb7n5putuRjZWvFU47EEjbRW47kFjVNnGtwcQ9tC7e6vQf77cifeAwHxHVFPsCqneVvs88CV",
  "key7": "56g89eyWnVqQgAhtWfVFd1rgnhrjUhNDBf8kjDDmw8h4A2ovxJ8w7HBkpbeh5LeyAvpt3hubmJZEBKnUm9VZ7mK6",
  "key8": "5jLZtKbxxqzNLX3cohJHGdBWTPv9As4KU6ynkwE1DEYqEtrgC7gXM6KYcovkYzHWhER8XUrrWLiJ1KpxEV3GMeqe",
  "key9": "5T5oR5efRK1UBtxnWmvD2izNLpv6cC5Gi2SsG3uri1Vc7GQ5efopq1Pc9dvMzd2Yj1QMSFgo3HvLPFXVPdjxnXHS",
  "key10": "34xFRGrQn1f4QUjzKKFt1eTEpdEBxEMsRBSMpiNtPusmcF1ABYYBt9SgspHPNo9uWkXrTQiezvzanZR6Y9pVgDa9",
  "key11": "45gxsWvChE8p29FaiF2d4fgRM5GZePuy2wcFZSXUt2TSMpkCcHWuGacVG5ZycgYenuokJNJx6J5wp5BwiuvMsami",
  "key12": "5oMQL9hmx6kJ2YFJJcArpGuzoZRaUDRmomUh3XT6NDFjjcEj58UMnsTsgJQkWcTSTRXUSvw7pdNXVX3WKjNrgXbY",
  "key13": "4GQZaS9Myd7otypfG8z3oerHo8VbkEFFt4joZ3jFUZTwGUVy5We8Y82SgTTmqDs6JAqubP8TgzeRaBWmJZRuezyf",
  "key14": "3nMq8uyGjY4seugsHWb12PCB4q4zLFHrfWvJnyL7g61ZuzAZpqUzdxQpy1cguuzjeEpLES2k2dQrViKmcLXGcEwo",
  "key15": "4hMeMY5Gof9KtNrPVaYiJv5uJprUGsn3tePYXxzaoyFmrf2VrvPi35bYLotjauiwnhTdxwfLRR2nYVJYwxiPo3ht",
  "key16": "3R7Fko2LhNuqwFnbEvCajywBf8Gowhy2uh9bRrw2c7K32bkovF6g5wPUJogKU8FpZ1Einag1ykVBEUsBjzQRPFcS",
  "key17": "5s1QprJZrqGLcDx1W5wJBCNPUQbiVfcKV4WAkUxr6qjVFiWyK2J7o3w1yvDfFdTstUVHksaV2ubo1hnM3fHJR8sM",
  "key18": "3QuRYLjg4Y8szNQakhoQX82dG9hqgLZ9gBXsBBqe72EjyXhwpQL4cmTnSi524xEn1QtjQWR3QceoeHiukyePFjPj",
  "key19": "5Eg5N4UdStF4iNvkKp3vxWKz16M5fKjJcK12WG1AjgjYQYhxJX4EHXUoFPvdniXNsoYBXpbNZJ43uEBftBikuDJ4",
  "key20": "2oZ42Kfyhuo6usQdx543FsGmKpo7vZRdi8deXYEcbwDUDcYbEnKaYgfrHDBwN4dqb1Qdkyspr62s2yVkc2riS9dc",
  "key21": "43FkA5EigHiYTfvm5doPTQdZKJ3a8miuauzbXxWisHHKP5aU5JhmporrLo8zvDJZzRNciwp1WRmuqMwRD5vDeoVT",
  "key22": "ywFEqpF3JMmkgWwb8z8tTwcZGUuh4Kmb9qYMqHqAPr1eH429y8vagqWaePNAWWwTmBppLvWYJ32fuLQLY8gJ6Gd",
  "key23": "4vW2uPYaTz3WtuXjTEAEE5tPoB9uS2wVvFRpbqkBiRQ11Wwcq1vg1iWLuFgwe8SVXDbc5KsrQzGfic19K4uBFc6N",
  "key24": "412opcyKrBy3qpqTfpqpuFa5pJJwNj1jPU4EEtPz34ZJUDcMArgWgP2S3MeFs9zpBhoCojddchV6q6TrqhnarjFQ",
  "key25": "mqoXBjPLeBXUJfkWF2EXDiw7VBYwwhguxnCqjuGkSyg4AiGnYqPCsYVH9fwfKy5s6uhbqjEgh7mUecU3LWahqm6",
  "key26": "2wtFUt4poaL5HM4kTThaWHVjhBZQpg1RhuQiCbjtPLqDK6U2Pf6j6qwUeQsdj9PZF851mofKSpGdvPJkdnP37KX4",
  "key27": "Eex2g97BeCsUPbfY4FPCrr1qH9bJ141c6Haab6MfT9SJucBge2KMTcYuvUn1kkPX1WUfZ1Ym61q7zZ7UqUdqsnd",
  "key28": "28QtuPQZiteGZ1dhvjLk9bwxAXCXPohtPACsfNsRKDWh7i7onrctKiuLLnrYCCn2YGNgxKgxA7Q6GTQCUYHQpgH7",
  "key29": "5nXHgCmRTpbu6gqLAhBnkufGZu9Jkuf98cYdj5j8PBp4siJsEU6ZMXcSae7nQXx9siTz4CVHC2UwPpcz7j7QEmf5",
  "key30": "nrTMsgbKV7sivYnRCUzUWrGUE2xQZhBAnUJCtx3A6SiXX1Vf7qo7mwEmq9QC8Qb4dcfdyaYCgCXkLYwvJv2SLJA",
  "key31": "37vW7n1KUMqJDbchXjaHGqAGYAso7bVyvELD81tn2MGnpNeos7bTNQ6WBgCxjKK3qHpX2GdFHPdR8WmCD89sFUfy",
  "key32": "5KxLdVGxtRcDF9DS7vKSPv78KUP84wrPXN7di5oKADYiGQXv2oj7C3qrCA6C8obq9FoFhdXWZQ1EWGEKM3Q4poRq",
  "key33": "4uMF5gb27VstGL7eHWimQZDU8inTG9LX1Qk9HFoPDJPKFc1yGiCnWNDd6e6YF1BuX9sU4T6YBgH5rYsjsKyQCfAP",
  "key34": "4gpHAVEjfruWsuqvqGvTGZ9Bd9hGAGEJD3k2mMG7c7gTAcdRyqcDHuaDSW5Gy9yhUg7bTzDfowxTVbD4QjTYNRhK",
  "key35": "5ychXmMZRKeg227TRJZ25oaC6pr7LaZUBya4t8nPSQaXRHHh6ysNn5KEcpuFnHz7kNknuQzUYssNEvehqByrWCiL",
  "key36": "wNQDmNUChrYAuzkD7yCa1fSgMkL6RzCAwoBnDM6Xhh7t5knDHBddLFN5RLMqiMdMU6MMNdSKbnRsCmEbth9xV99",
  "key37": "kYN9Jp7gbnUY3FAkdooqmZZ1dJPKEKLTuNbKx3xSkR5xqvBqWSq99GhvDTQGqNsxhBAQ2fjVx6ohWh5nztbVVNJ",
  "key38": "3YDdX91Uncnxqv5Q9ijRMpxJiV3G1DjNC5btraAAdDdJiEfhTbm1t4zVdAC1xwWhBEn8qe7G57nK14nxscvJh8qX",
  "key39": "nPzoYsEHLty9r7jqYGcUuAaDkNM4tvUjDHpy3pYAYt5pKFyov8djnN3E6VJCBPmwxb6BqkR8xL2rsAP9mHAEDmK",
  "key40": "2u8kqtx8MAYxSSk7DihMqj45FwPDGbLyaRELzortDZtDPkJr8nhPsfqHw65WBxKyvqGZMuCQy8ai9t3mM3AxqBSz",
  "key41": "2Pz7Dht8oo2wkFW3GyjFhzpQQGjeNcJ5VRWyv5DefSCSBRn5gFn5ixXZdNeY8wq1nykchB5EWLw7ocD9SAN99LhW",
  "key42": "V15kirwEstLecent1xzsozFWDXKwDYhsa9gyMSV9G24Nz9EYBiZxpaKGLN9x3ac6ofHiHY4kKEsbNLXS1eZnjTw",
  "key43": "3QsNgWFuxamBKj2A9p7M3Vb2pSNH2A8zHJesNXqpCHhie68VpFeHG8dfnk1TRYA3qcuMnDqsiP6MtMBGCxXSMgBe"
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
