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
    "5rbLW1EUp5AsWzrpDA4ib6DqHRCwXkGczv6PVJnLyR82k6pq7vHoycHxavZmpohn7uq8NGDsRDx7S1LUkYVahDxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HYhprZazheXBL2zvLGPYRA7GTBFMvCmyQRf57AarbEw5UGfgsQBMboKGwE8pFtFH2WosUrQit2YGtiTAXw7QMHH",
  "key1": "3VcfutdLn8U3LhfdkoA8zUJHPkFv7ENjXBceYVv1SX6sDLZs8k1bNFai56k8SrqaZt9sFYqVZJchMfuh4a1oHxW8",
  "key2": "36FcxZf5hM1mJvbw3emZX9qhbTbAsX5xRaN3CZbJruNARjvoTcbuVWg1xgTr3cLGU7EVScMqrDvnXaRe1YPMn1w8",
  "key3": "5dqN8USNvr2id8VN9jV57cqYpie8p2xMFVvRVF77hxjWGzwKFfvfBUFNR5M7z29nC2SsCanMvmrebvY49kvZ5PT5",
  "key4": "4ENuHMFL4mWQozcnKzo8Vr7mZpafQMp2UbrCpDXPgS6waTcnnmFD1VtdmiLtYACH4EJfGzNjDQYmmnDru9WFZgG4",
  "key5": "2HmqMUEazQDfMTApbqewcrKi7DPmZ6dVqkZn16pZ1jcfPQrJePmiysB4EPbXh935b6XMPToFDmmuNJG9evrabZNT",
  "key6": "3o9Zqp68LjVMKJDeoyj3B8H33nNfgRpYbNe2XYRQB9PgCMz9HTxkxSN1DseA5bAcBnRjLTqBboRPPGZXPnmub3Sx",
  "key7": "4DZftquqWazG8s3AJHwKaqGKiLXqeF3CnweVRV6faqvR3yZ3xqrrRRPbyWcApqq8VNtP4Va4KiZDxPKU2K62nju7",
  "key8": "DWfMP6ZyUJatuJxUjyaLQhqbPqjogoNgRET2RnvfVmRpeKi8rnJZHQ9F7gmCpjAYsnCft57EW41FnuGeTz2a5GB",
  "key9": "2721azc4dguxLPU9gptwMYz4XAXkZUqHqs6Y7RvNSwviY6J2H5aeSJZyQJZNoqmijEyzADjAnT7QUd9Q1s2P93zm",
  "key10": "2Jgt1tYEXxgAavVj3ncSwrkDWtZpkWe82VvSqaAkoC94bvjLJSifkJHuuX2m6Uie9d2MKvtW8pUw8CKAbyYrzb4U",
  "key11": "28iGobtrcL83F8mmdZitjVBeq8JkgfwgnS28i9urw5Kt6pqNrchVqgbRwm8U3Lzc1sQitZMLyhXe8U1ihgwGxyEc",
  "key12": "3sSSFtMsFpEBRUHacwkMRUeVEdDRqdkho4Ey8uLnow3tBcJ2fEJv672BzwutA2H1GuHAvtPUpbUqgPMLfJPqGZ71",
  "key13": "4bvhFAbB7f3i6KF74oPkQPnvvAuUSXfWtUL7byHa1RZkLjgAY4AS1ZYWkjUoj1n9fDoPKa82PHWNnL4K5bt1qDhs",
  "key14": "3BNvMBFFu5dic5ebkHg7xV4q6HExdKFci8AFUab7DmgA7dtswtjYNnPpFRKBQkPmqo3VwjCbhTTo7rUsMU7xB52i",
  "key15": "EEBUPrajn8aMXePD4aJjcUP7wZkBYGeieidxtUJmR2XLjComct1tbytv1A5ETeiSdUrcEBhNUYQtArrSZG6wC5o",
  "key16": "63RTUj9RWsSzMUuvS4PYG2A9JAeBA4SWcbi6ZotD7ytXt6RcQxRaGgTNhrjj7QomFPwa9EgsiG1QA3m65Mte3zSu",
  "key17": "333kfDrEpWnZpdNwNJRj2LU3HNPxitr8on3f47RuyPKSXGTRg3M7vCywvMLTv6cw3La9aBLn2UxCVGfoHuvVFPer",
  "key18": "3MFZpMesX53ezYBrVwotZTvRYKLnQqcTiq9QThKFesNDDQkg791Ar4vGsaNeqoZ8AV17JH8drpc7qxz89MGDXgX9",
  "key19": "2TYFzVm7myjuTYpLjzwTRkTnANmduSEWZMouMkRGAAK1GpjVawq3K4HZBPc3EK3PvWMEj8fUcWcF4jYTMsERfiQR",
  "key20": "EhUVC6MEGAFWJg1yivCmmwM5zdtkfiq2E7VCEC8beyYhtQJ74eJt4dQu4iC6vxhZfhMw6yiUPw5pLwC1ddHib8o",
  "key21": "4s34XdFVZaJhtS52MgUWRbeyLWB6oauD5zi3L4CBW6MGfP98PVyoUEhY9MwqZaVgkZpkhRSyGaHok1FqJ1tpZ5vH",
  "key22": "ZYRUpBjcUrSKVS7YoJkcP8iVwfGhxiAz79X9W41yooS1cZFPwDUFfDuGLKahwRRHogeUKFSRr2tQzXCvfTcxCWU",
  "key23": "3JX8HpRL6h4ToB3Lss1drjcA6QyD7YEeETvLk2AwVqJi5F7wjsjHp8SpV51JyGEZmKCgFgL83i5MQakEF9n7zRYW",
  "key24": "4TSxYJBAjuB38Fgc8kQ5uCXPsZpUGHeRvrSjsmU6hACQ8tpFvCWntpnCmhoUHBmsdQHd8kkcthq9BPReBV4LC6b8",
  "key25": "VU6JRdTj5yiV5MWmhuVqFKdtXRq2oBQ4EP3PfFr1C77QD5npaf1RZypzbL75ZJcp3QwRh7adtY89WpKig5FFk4E",
  "key26": "4NS1zAgTFma6AxBesv2qAT5euo1DV2Phq2Zrsm7uCqFniGwpib5aiZRH32MYFyH86v16NGtLhpQBa3W4rUenNBck",
  "key27": "RR3iS6ESsFRZe12Ntpvwcxwcx8VAwUdRQweYWTZMfdVF854bYs45XKmJAUCWJRNCTeLLe3TaGe1xGwrLbETo9rM",
  "key28": "62YaoTisbC6oS1fi8rB2Dr7cFJkJjewKxyaexfkWSFgd4CwRraKmuCpoXsyMdqmPH1fATYVJsasEpfKPR7yQeCSb",
  "key29": "21d1MqZgakDUfvu2sdirhHFBeXXRAq9g4D9huPxBbpJAmeA6AKRE1wpu7HJe1wrBq3auYeDyATJMU6yXvSxUqcva",
  "key30": "45wfj5MxNHLWfo1ohHf8rEWpoq2mzL25s9fccXgKxQeYXHnbBoWUkqQSG2KysQbRXhjyEeo3YGeQygfZxTT2dmmi",
  "key31": "2PocRkewVwKdrPR4ATzvvbdpefuivjmv1JEFGLwthhb6xosJTT1EDWosxxGP1HNZcWX8teaisLJW3avNc1CjZMqF",
  "key32": "2ER2P3tk4hHiB5ZSuSPmGScWhzTBTdoUBV4MQL2RJ3xaqrK1WCpw26ScqxApzWisCZwkX6dXc2poBR2J8anQGZjH",
  "key33": "47yY8nQp5viyymSZVGwSSEa9o5gNLRX3Vmx665L77DmoSZLvtxTVRqRx3q9eZmmWFupd198gpZ1gWYUb6B21sEvF",
  "key34": "4qq3WR2xS4YcwTSQNWwJaMTA9rMG722A6Q4rKuYUkoJVEMwQW6coCKBR53xhx9cbmbPZUWu4j7dVhDgLzy21RrPA",
  "key35": "EsLvWVsaUruVfLAWs7QSM3fkeiZ4579pNu8jnQygbNgUzZCaJnDqHZaHBMTrzDghCHDuUNvAhDrmxGF9Qdo7MF4",
  "key36": "65MV9seoUSpjVhwXmK5ZLbq37khDFZBgMMFbb1HScH6r7GsnJCCUExoFiG8dC7VfFu3AeUgQkUD9nXPzSXZqpLpR",
  "key37": "2KqJd4362BmiSiBrrPv4oAxkdhvna1F2wDEtC7yRaXA8ZR2XdBwnE5UfdAKCvfEMicgMyKqDdG3iPEhmLQGGAfZu",
  "key38": "4QqoeZYuufS47GaJz9okVRTVzvFt276Ej1U2EH4x5QAFnJv4nkTu9232UXqiL4WC6EEy3xWarMWt7H74RRnjkTo8",
  "key39": "2j9Rc4vxaV2jf3FMQ1qAzYhn82BnyeufhsfVtfcWv5XjBBonDx8FKsmzNjnmRWgzs4KQipUVgN8tcdcvNAm3bN4E"
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
