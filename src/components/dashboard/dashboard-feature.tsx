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
    "536yPRgF4cpsdMKPPWTauyTcQfNjUfWMB9LVMcm3JvjXbfRXw7kuaHXe7d64URK7t67LkoNANSN8FtVg9VytSa8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DgKQuGsQZRFirjKmCs4Uy5jdGRRXEXKkLB5qQcHsGq48coy5Tsy5amjRE3iNcab8XoZk6sLC48e1cUwN43Jokik",
  "key1": "25Y8TmmwBEB6VQrG3jiy1ZDmoRG7Jbhn46p1UuohbPyc3oX5BBunEVMy11ctzKVuWbALpV5mA1zEyeaHe7j1J685",
  "key2": "hAd9CtBrv5mvBU1hgpjnpob8seeP91QdtJNhBdKiWBMeJCLLTbeSFVnanA5WyabS7X9ZhBe22R1AQW9T2JCVyAV",
  "key3": "4PD46nyoe7HYwha2VBt3vZmGEM21pBsovakL8BTwdy3uRzx3KX4n7Wm5SRzs5xnattkpa3ZDvLGigDvyFriUjx7h",
  "key4": "57YuGTccNzkoAEVyfskQ2CtmA9xvsR7RV5qpmopQgrrrqtaPAENbFQqd13X35aeBJuLHpUGt4UrNi7d4A84p2Mxv",
  "key5": "3ZrXLykrVQVcvch4dfKmx9iB8mGGdeYph83GktAFoXWzgqsGS6mfzi7iq7prcnisBqGhQfv1bf2bHrjE6KMYYjXZ",
  "key6": "4rotjkyqExHSaecgUMEK2huvKtQNNgjuinGwt8AbFK9YbH5kxcyxM8nZsMccGenJBq61heDF68sH8XYVYVFoSZR6",
  "key7": "4Qxur6xKAwGkyGezMM4nwM8vBEbpG38WsABaYUKV3NJtZqCVozg7Tp3S7EqnwrB15Gas2PKFtFe9bP81DgLS8CPF",
  "key8": "2Ltk8APvq7wrhmbyVoBM4qmbpms3gP3xjz82eWuc8urRKTjtJmZCbTSpkLkCJWM98TRRALWFgpzpdkb2HU9PJrUt",
  "key9": "4xGJa5r3zgEUe6cptnC9votr4P1gztvBu9bAADUNhxDqcM5A7HeevFjfnV6p111hjNYCbT4AD4nHbzP3uXjNC9Dv",
  "key10": "4oVY3icruNddnsBnm9Um5kmuuNRPtGLqQPozE39Xsc5qSLYm8YwPmbWrk4cSzcyhtubwy8XWL8Lu7YbtarATGKWG",
  "key11": "41QnGEdRTwaFi3i1SnHcri6tQT9nRwpoHR75q6eHJTFESRSV5PAKGWL19tZEXVyZWXPxPvrhDpV7A97Dz1co9D5M",
  "key12": "3mhXPLKDm2PpjpMMA9LfBwFuozdtmaJWre5xyBckAY7KEdLvNEymSk9CJe5HGgRCsMYaFfczvbRGThPj8HcGzA7o",
  "key13": "448r4PfFKRWAdQDdwihYm7dGH2LtrukqzZFmEz31k8Rc4M9rkS5o7Cp1Pp6pkdfnEnVePtwn3oYvsdi9xduytkCw",
  "key14": "3AbaDqFdEuQW7MFws5z3Fz7PBnumPShJ8z1hbNjwyK4eAPagsGQfDBTf2b2RR7fbyv7gEV9R4ZXuXp5HEMt7K3sH",
  "key15": "3iJdaZQcgHhkMV4Ef7sB1ByuyWMmBco5n5rR1xpyAP2qgkWjwD41A8pWmVozuxZ4AXXnY1USVuE2j5YMk4iihKnm",
  "key16": "tzV1qUDkKHioQgPHk9gU7JYuNK3as9FBFJHjJHQ9tSQ7btNcWWybsRzFgXyPRKRLtZwonDFbJ8e9Y8WyuhCbDPx",
  "key17": "2ZC5FS9yw4X9MpSAYujnfcGcgBchx86cRXcvaDpmSZTk6h6JN8c4tmGXCUXWeyr4T6XATCtmUMxeNSAgfyVT6ocM",
  "key18": "2u21CYw96JGppw8MDQVB8Yo67q5KiNQYDr4AszeGqr28iJZs42xCYFjedRMzRKpmom1JggW1uygYtdFE3QvhCrXt",
  "key19": "2hLh8Dt9sTizB2ztxbMF6ip52Y2rRjo6t9DDtJ2a1Nac6Qm3N1DvXKMTjYnwxiM5fUpKZ74i3hMGGYeTr2PWKoBJ",
  "key20": "2htb1dSZBrrBFt1yve6prvCa65XvQCdnv1Lg4y5kHc5jbW869gjL4ix5ZmrZwfzN3JKFaY3MTqiGHbo5HH7LqEKD",
  "key21": "58rPhYji4fBHNDqLTcmsDZUbbUMXADdBW7TVPaoaAvd8iTmjbXnasou27TRv285Mpcryp8rScpmhg9tKs2wTwqxu",
  "key22": "5rmrdphWHNMXVqURzMKgwF6LNEkKZhZq7YiGjg5TdA6L2Zy7JVgt8b4TrEAet5qqggLStZRUbz8Nc56U9DV49JQi",
  "key23": "4WK7LVH8qMqp9JCwEhnkqysjfrbh1yUQuCkumKsV7qdTpM8wEFD42jFiUE6KWJrK1Eue8eXKpqfaD4amq3w79zDk",
  "key24": "2cBNJ4kzK8Nf6AY3mDPjcYZtxhL2ypt3krX25Gm1WG5YeFYptAHJeLuJhAxx1K7ite83iFKz7GXMFmHgTuJbCd6t",
  "key25": "3UPypjoGU79rEt7d9VvkqoMWLFoGPffTuxnx2BZevdbwTi775YPo4zXH5Wa59GMwk3BEVa7d9mxTrTFSaZVXVDqk",
  "key26": "2LtzJeTjuYGhsSUxeed9GzztAJkMbCcLBxeGdwGu3igA2BEZfkSD5cHqDKon41h9NEHeenWhUcw85rCSvMLXmhXu",
  "key27": "Dsd3bK7vXyseYF2Ac3Y5oiEpXQpD5SaRzhkgp9oimVXLbiWirnEEjybZZYv8Bu8YnHDmgHJJr3wM1UyAy4QgciF",
  "key28": "4LZjqzViVmPHHpbLa3e8VNvvnRHyQ7aQqu4byd7EHDQjepHwWQZ1jFgh79TAQgRGm2iskoxgnCG2LH4enwyxcimm",
  "key29": "25iXRdtGfGB2ZnzUZas2Gwnu6w6UebEcxUV2rErvRfQmbYMRKomgwGxiiPigYpUXwX8rQzjqridbjcqSXavmWVUh",
  "key30": "2UDX5ruZkqwm8R4FAN7JhcRXtNhmRKhndJJzSGqJoepTpXAPrW19Q4UmB7irRiHj2WUvpMCQdNXyRZZq1EQQGP7",
  "key31": "4WsgjQBWczZZa37ZmerQiLfRGrnP55WC8vQhMc8CgPjCpEf3wm4j9X2dfV4357B2xru6Zysz1KCfyNyQjJQFDojZ",
  "key32": "4BtS31pLVk6BjxB2dRJV46NsVeEjgxBzqjs7ykDiLmeiPsQu4A4t6FeH5kq3quCVT9QLxSdvjvQT66mCcH4q9EmG",
  "key33": "X7b9SVsgkQiHr8esYpa5tP8h8uMLf5hungf1MbAUHavsKg3xuSAyc6847rHpUsrMe9eA3LDdoNw4g9tvThmuzKB",
  "key34": "3qGJCbBTcY6cdLJeYphmJZC89w1g9ippwktYAkWSgazLnP8NNCcNiau23gKy2QxoMHJQ1HNhi2vwvWNpnfPdwPsb",
  "key35": "5v9pqLiUjALhegKX2GTYgTUDTxLdZwZdaSv8K2w7H5sUdW5LQ9Pfn2XeijcCn2eWXVuicoWrX6zMQfAaJZ5kz2C1",
  "key36": "WYRUiUozQj7AbNaythXmWqiA9wfukKJbT7UsnGmgdHbCbfEWBLbGN9SfWutYSx8CFmFbvaaQmf82ksbsrTkZwja",
  "key37": "3DTtYHz8yG9umHecKrYefWNfGaCRqmk7Gt3LrTgFZe8zzaA9FmDeBGYYr2Wq84ET1EXg6ivTT8k9ybNeAAYuN1a1",
  "key38": "2rqNwcU1Yz53EL73SiGdn43RFWLVU82Bd9MJE8UWtre2Sx9CJCpR9f7Cvd7XdqzFattBrd9vczL229emWXQHHuq",
  "key39": "23gDdLnYe47GXDpQ3ANiWtyhYinC4gbKf1EURNGeojU4PPKpdiQLZJE5CwHgabTEXjcfyhG3FeNfXdZ6P4pZ7imr",
  "key40": "Frys61T3LpmQGaMnffZQKRtf966xveGPKHcqPs7dx82oPvHw2JMb7Dpf73RfSqqYoAgYyHWhpur5p2xZngPz4ce",
  "key41": "24qVEVXzePLe2TFygcYqkqj6Z4sSfDLJXXsc7P8MEBSATLa2RT9u2RU3jzjKPhiLqYvLmLpruzHdLcsaZZ7KvKwF",
  "key42": "26KxR3y2Fd1oqeWMn5hX7mkrES8ZJ26H79VPvtG26yhgswridheG4Y3mtb4PyBoroLS8Mrx5CUjBiRgcGx416HLk",
  "key43": "2GJrMZ6vRKsFme1t3vNxkuNDByYPeu2C8FsE145HQvZd1WisJhAQrvovG6r4SPNVSDeprsyZ9NaQXrtGqUvBjvqx",
  "key44": "4UzAYazsqyMjfnmMCZMe2a1DWhsBiGECLuEbPRvE5osG1rY42jrxdiRmVv7ndATWCqRtQvm3ZNsEcc6b4gEVccHL",
  "key45": "m3ocNdNUHb98eFBLzaBot68sVKjAWsBwbXc8S2TG7e1HqKJ5q6NYMWFHVoe7sgnyt3gJMawZu7YEsjcSYWQgBW1",
  "key46": "5MLd6ho2ocN8NZDZX9ZxZKCUtL9RqhJmbvED8DKSweWX2akBmTULuyZ6toRqTebt1Cm1wNNAjHapKzztmzpv5unM",
  "key47": "4vCSofWeZmDf4GbY147ZJ7Y2J96TuAvZ6U8szmRAF17H9H1mJ1eZHk6BsKwE7n4eYoEkrufn4ZkKESXSWEk73EvD",
  "key48": "2Azuukc9bBz2Qh1YB6kQ7fJi71CtXRRmZaaV6qFK3WyovvKEGBMSMCFrawGf92rciEH6rBBMcWYCQo7qcVBSofKp"
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
