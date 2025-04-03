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
    "32Guo47gqL4XsRDc4py5ymNJTDmkwkt1iEnxPKnHkCPBWC3MnXg8rYEwxcmBACSfU6GsusrP8Q6h5J8cbZez7RgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NoJtxeybpMoHzQn7af8c3Bi9eLFResLnTdFGAu3RMNSXRam5fDsBztxBDSzX2BG552moNFRniyGfdMvV7aM6aFo",
  "key1": "3wY1XQV5atwTThcJuiX2BXPq1DNvjAxrEMymrKCvc7dMxLeFAAnPJJWQ7zJ826HpbCiY78kuPueUoFWcPH3sdBHA",
  "key2": "HGninjqs1TtfRT2p65sH41ewWe4yi3f7TGzfKvWmmChQYzbkDVQyY6tzmug2hto3zizr7iD9bmLnfbV1B8gA5gX",
  "key3": "4A1puy4ZCmGrCVVULNmjfcFVf2dqLydiyyAMHFa84Yh5kHa7aZyT6CiN6mthWxudvhwRqkXGhWow6y9a9BaYp1mN",
  "key4": "51Z2B2LRARvvCDDE7nJt46V3TPC44uSrXRuQ1rCS6oQJdpWeQCNHSdh4zEjtvLkzmi264cVZw2DiBKnRJKzapGJh",
  "key5": "61qvfmojG1pcSmkgDdNBTLq6xdL9Maw34txza7FF6dx5Wdx6cNjQQYPutEkHmZeFtG2UBWin1rH9yvuuMV3at2br",
  "key6": "3RuqASTPChMHHNM6G94AFbgTkzhyuQNKd6HetdfjrdAoMVtim4EmH5NH1GYKhNbrQ9LRvaknQ9E9Xsjov6ie5hdg",
  "key7": "4uUFcVzbDBcuDbnabeDzccFnNwUdEUKVUxnmtcq9oYrM62GKr3jhiwCGJ2h68yFrc6H1oyaX61JecqjUwhfMijhM",
  "key8": "2cJS8A2jik2dS1b185VVReJYVispN6Ln9ogp4nPUe8eqj2SisbFymjmJ4SW4igbkVTSzCnyyQ1vYmq1k91Q919Hb",
  "key9": "2yoMsGZtJBm7NgpL5zeJNB6atAB42JG13JpgBvBqaaQ17WwnBPvpYUfRa1V2mW7jCbai6tZDJYTt2tcMkr2EJJqR",
  "key10": "4S27Kj6ERCkUTmTVPmwrGYNwGP73ariaeCZ9Zs2gkxY8hrNMhK3kTGdy4aZwyFJ8G3K83br1gfqucAE49yeFKTvQ",
  "key11": "4CWYhjNBQwW3Tt6uYaUg3SsP7cvCJfQ8qRn5Wk1Nmsaa1SYJJ18Gzt1f7GQcyuYqNcsr5wMwajk4GubMwzJe3rdA",
  "key12": "41kqp9TeSJvKpgXfAsxECRfVZKzxwXNBD9T9bYKXQGy4ecbB4MDTqnZv1ikg1ijjUWQYuczQb8u6AFpA6vBjf3wW",
  "key13": "3bpuh9wCrQGgqQTjFnXgS2ZQvfVU6wsBfTGZVfJXVP4n61Rfq63iB4syscifVYjSX6XMjKoXDHzVLjq9f149XfPY",
  "key14": "2FmYQnC24GFz6w1eGScRCPEZv1NwJWQRwef1NxoRdDfzkEinBa1mwqLbG9udo3stAJWdpf3nyebL5nb8ZcbHF4zr",
  "key15": "h2ttTczVSsoe3WcS95ajuFMrNBuuvxCG2khSmBtkjLBc3i1q9vwTXBGLg3sFFBZLjEgAv28ehtqoJqchtRdJPRc",
  "key16": "5HP26M8Tcoui77x5WnWQnmN4CTQkDaczZXrs7Na7q2U8v8PfbkZddjkA1YJdQbvXuvsETMsMWu67D4MQeCk7T9kZ",
  "key17": "VFKyXZp6ArE5VZRAM8D6rBYd2gMabEk25vy36JdEZhYsFyeexFB7DdoF8Q2mDQGxdhXULsT6aU6i5DwbaTUBWNd",
  "key18": "4LFtFjDufro6TBSeUNiYRi2U2j9akoGavvD4siP17jbkC7UTRfpmzpAXxBHkeUNfnfqQ4P4dBSVsXkWPVwUjGgfa",
  "key19": "61skMsceMAXo7ZvYnUheZa6e3T7ebhYELdTLgXGtxJCJArnasdcisMjsy4YAu8tDYtsN9Ydway8Nwnm8ZUBaHQ5y",
  "key20": "5QoyDs7YHEF94JTUtiELEAPUVnAQkAnBPNdBFVzvMMLpyJX3KGYcUU55Yu9YNa1hJ3J85tAn9izeLDH7kAQCujkK",
  "key21": "5deaELVu7Mi9jqzXg6XeJyhwvoK8FiwXpKtUGB99Ed8cixcgwGUduHQg21SDFBsDUqvn62Rm4aBD6fBfHVDbdkp3",
  "key22": "29MpDibgyWcqEo3sRMcLj9GFKce6a9jUDZ3uYN67ucmY56hrGj8TBrMdhMTXowy3bEiEU58rHM66kuXdPeHSLFtZ",
  "key23": "4KzfJhq3s1N7Kxtx6sTxG12jGtPhgdgrGRxsb4dN4yg9xoR9i19QjRRs2o1pkJXtjxPZgLrSLT8gqEZoNxMU5SNW",
  "key24": "3ru287FxHvWtdzBeZo6HPEn921o6Lq6E5fTzGGTs9Y8ayRA6ep3HjPde7spNnoviGKKmy4YyqgzJNg9j9wZ53pnM",
  "key25": "54EmwgcqJxTRNiyucXANBcziyjV8WWL91cL7PTptcXEUC8cmn4vNLJQ3y8HntmULT5XNSWPARp6c7iBCwgC3RjSG",
  "key26": "57h3LjrnQcTr88y7SGx1g9fhJnNVE9aCtNJu5dmHsonCws7DehGJWLhSVW3FK9PYYpt4sveybtYiqZHK3xZ9GwD7",
  "key27": "2NdB3TAi8ZjMW2V2ddhRbvVZQv2Jaj8Wws1MQrgxJcB24ZcnoDV8T1aySnDEGLj3yTW9pnpS4wR8jd6otSYqSW2c",
  "key28": "2NHSNoCrnzo98gxcopDfy7pBJ2DRRKH7TMs8ptDHJpXgSqKjKWguAJehJ4JWGQcVz9MdVdRdZQEFhxbWbFNqRPGr",
  "key29": "qKWLpbEDvz5vUCAQg9qbi4mZPqLrDQhxSrRgHZhV4ap1smxmvou6pfU2pAC5u7j44cbd92GExgiDMZDn7uEtTo3",
  "key30": "3Yatx5tRSRxtmkdG7th64Bt1g8kofyr1rXhquTzqkYP32GqbcFvQfL9TTEVjtFZYVV6t7KvP8iBmS2xvsfAwEVFv",
  "key31": "3qST1hn1h16wUqibQwUbws7ypwYRCFC2xsqHuEA7BwiDJEoTJHFrXKkemVs8F4VWmxqT7KD6oPxqm321CMf9WY6z",
  "key32": "4RDWHWBkzZ9X3x8HXnHfhBWXdwC1LU99LBsQt1XmWpBWYy2Hd4idNAGSxhHvZqBsa7cJ9U2KT3juW4HafWDVgBC3",
  "key33": "qfnQXM9dmhuAQoq3mfXZbjqTghGPcLysaZ4oVafEAiiTP423tWVac662uxk3p2ChXAa9g1sUoHGsMuFRfPD1do2",
  "key34": "4kDTj3ggTSh1kwCf3zTo6tijkQA38ywPu7gCfAeswGunUS6JKi6FAxQosyactiemVhyKSbfx2s9v9QvPJBVL43YE",
  "key35": "2SZtgKktMCa8nBogXqi3639CFSfki4JFUst7uRtK3GcWra41qTHYk2ufTZnQTLJ3uheaiPpecsUqA7KdGs3KMyvo",
  "key36": "4wwdbcMTVTLff1cH2d8QTAm1NPCcpr9uWLg7uawMfVaVNQnnL92dyi3Kgzsyt9wtayinBLRVj9gmTpXRTZDqpn8N",
  "key37": "2CnxaNSeGwhkPYkkVkxci5Sfco4gn7vK7cEeiR3Fdk4CKSYij7brU8bsQbeo9joG4vF3Xjvd8zkhQyQnyNC6CFED",
  "key38": "3rf8JDoXFU9AxBxgtQkDiTsyfujmvFuMMaYXV95uxuDUABm4TAuNmQTzJF9QBGin54mzEFkoBke4qk5MoeHmV8NG",
  "key39": "UADuj5RaWgPRv5TXSQMSPEXXDsmy28wG2XUDNJzso1neMg7huMgTJsV2J6EsuvB8pxS8ZzSjbvmdpJCyA4nm39R",
  "key40": "3fwBaYXyS8Kja84aGkyL6vEgC9xesXrLEiS3pwujVBniS6GUcAURDAf9fnD8SDc21osqDzKWAi6dd9zJbCWPfruU",
  "key41": "EH2KdwtsEh6TiULedj7Ttjjw9thvJiANcjMviNau4NSQPH84m2LyAJsZ7Awx5e2SdezKtytEZRmV7vm7p4bZxZJ",
  "key42": "2jvvywEy41tLNvW8K4ZTDXngii1rDDjrjE7yB8iDL2ALK7BBcSQ1UyJXR6CPTe1hMoYH9tgHzB6VbQgcLGTizzDM",
  "key43": "HLF47Ufn7rqBg6xw65EozbFsAREz3MTqcpv4qfARCgSBKRn5SXrtwL6YaKpU8t9wUeQLurbahy849g1ToEPvx32",
  "key44": "4KJAF9zWcQZv6yvcRcby8WCDmJ7fBs21Wde1GxNwb7vsyayQCQaxnMiqVxxW2GuBmJMCBLqisHpd64vHP71hToqg",
  "key45": "3Min1zDF4w3vVvebuYyXVx7Q7kUn3CR8JWHuvJZE5sL6FoDYpo6GqzLPsHJUwsk5EVY658xog5wxQw71sPHniDhN"
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
