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
    "5Les1UdT3rkPhA2ZphfYK5UbMFebWmpcyzWyHez9oDseSmhq6g8Vkimvpheh34QizzjYKtAgkWZrLAPnVbzZciEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JJsttEPijaENb639JfZGQX5RtaX2EgqwCFUJ7e2xYneu3225jqdaTU6dVown9NhVeSHuq5dp8akwCLonCp5Qz2s",
  "key1": "65jbq7tggrcQF1ZEKUL8pgtXkRzMq3PRKddG2kRGrg7k2CzcMi7NM3a2eBgU5v5aKx1wjFiWdGr4g7oNKqKJM4tv",
  "key2": "4LQg5mgouJA3tHeFBqjfXjLi9dKyaBXhR9yJt756bt5apE4ERPHq6pegtPFKPHgXWqKAnrNwXKQPL3jKChmoNQEk",
  "key3": "36sT1QfnLzuEJMrqcjPkUNh3rCf9xSeW8sydonzmoWBAagWZ9Dp4xDo9L1dvFhN18U5r58h8Qq9tzQ7pKtJroUZy",
  "key4": "3fn9r9q46t944RRCrNvUv9vKGQroe9cSpYPrBw92krPxafsjW556EvvyjSQdBeQWNvPT4y8aa9hvdMYNDNAPsWmL",
  "key5": "2Nvt47uJeKDDrd9tte7qCfe8G2agUTCHTEfkkjhY26LQt93z94XTjpgAY7gP7pmEZBidrCmzkachuW36m1zH4F1s",
  "key6": "5X4cVaCHnKNTZ7MCwiT4X2k3fTP5Tn6ZUnLtmEKDmHkWBcgDY8C8NMMbRh61L6DjEduA9PANWvebPLtK2UjhBudW",
  "key7": "3PqHbXLh57Es4M9ztPkuWHAwwdqgSwc4oyc2GAKcejdMizswG4C1w81Rf8MBWxMQ7MJtVP9jaGGpxhsEuf972FFp",
  "key8": "2ZjoiF7WAzcWfxDbLtQUE7qTZBsvmUWeLQqmqrw9RBLq3fqnLSq3xAkZmsSf5v3iDxtWXLfoKoksQUpTbwogkcvj",
  "key9": "42ET4nuhHPksYnnek93f3voUPwayUNS2JxVdcCnZNwiQucivLzbrgW2NyyGXwzfmo3eGKbpfvLEU3U1UX5uYaiBu",
  "key10": "33AYZzQYHeFfwPwGTXxw8KNZqWZEnxDn2UbasRCpVEXiAeZBgyRfG5Fryw2n9iin4ydWgXF8W1dDZcZn6JaiccRc",
  "key11": "2wc689sRKm9YzAcxDLHp6GFXsvL4KtvByVxhRwvs5d5hHv3hqPt3PrmDzu4mvfQcDqJuwsKE4Q4xygPRA3BXy4tX",
  "key12": "2UwUKMhHgzc5C9DwEjuDUyATJCTMfdFNJjnE2trMT1V4si5WyU2Nu68n97GSJnngPE9crFK75Q8wuxxSsJXBmTc5",
  "key13": "5viygJRTs4vgPQFSh5jWKNULEAGiijcTb2wvp4dybsvFb2MEeTJmS9usVAnVRWdK5eDjdfAoz3iuGgynx4vCUfMG",
  "key14": "4STh9cWt72BPptB4taeMQ1bZYreU7QWpAMQETTyNwLnw8JQa489Ppcynuxn6o66xnz2D8Wmp1LXtM2m9FDVM8qaK",
  "key15": "GDNYASmzWGK7Mj33VTR5guzCGvNJtUqsXdpdUqGdVNEb2PKoXxHRRtSBkoMM1LBS8pfv7ikx86BcyR7UpiruuqR",
  "key16": "231zGvKeutSMbpvmrH4opJCkEvoC9rBWKufY9V419YJC9CJSrMtv3vgdU8MQdUvWsEzJLXVGbReY6FdsRsPjJZDT",
  "key17": "5w4x6frVP1EwZDDqpuYr5ddoMsktdh1BJ6tiZx5tXfTzSGmLBY4jSdFPNd7ghjZnaRcoH9QU9TQvDwhobRZYiqN7",
  "key18": "4eqWrwsNQyYSmXv3sVo6xWnSPXLdfGACEeCkfmoziUgZf6jDpzQiHWEqm3p4hq2yySc6FbcuT1K7yMFmUs6ZdJN9",
  "key19": "4kpRqyCdFcH1DzAqJLpgmF9uMgFJSGfH11zrqFp4oj7Nb4n8rE1amkSc9TK5qsMvUPEZ9tPhNn5RN2MX2D2iBZU9",
  "key20": "2iSfcPuLC1izGEWSuSCtAMVoHuFVexYp7vWz5TL25fVsEiafDzPtYHBspDVA2pWV3e1iGzZTyU8efBD85LLSWFHJ",
  "key21": "2ywptTj5UfhoAwpJTDNo61XJ3WX59BDdf6EDA2uu5D9q6cSPwHP1unW2AE2XuKwiPqyUWMnL8Vk1A7k6LEWbzZ7K",
  "key22": "4N5jPufbyYu9HkFYcaRizBWaeHSzWVS2DX1Kq8HW5JTjCkiztSC5tZwNdWibg2w6c38nHKKe6hQihUoqXKxVTXJr",
  "key23": "3EDubY7mVNcjFCfB99jsu5cwxmLLqM1c43qSfPXkrBiQ3rSjCAP6etT4eiobrpnBKDcCZHpaZpH2dWW2GrMMi5eJ",
  "key24": "2PbfpsKJgJ17nZTo5nKgup2Nx1D81Yg5wCZWSLfi8Qy83hDN5MTsUqchmyvYuQDBcdqenBjEqHvXkvg7LmaNaGiX",
  "key25": "5GFQDLJp1XpwdcZxYtQi35PkAMSLuq6p9m5AwbU5HsBQhyT8G1nQt7r7xNSgwcU7MKvaQ8nnFkpZcrMvwPvAi2cv",
  "key26": "4jRJw5WTeECssPHeUHZn4Q5emsvmXPUnBmW9ckpNguMXGk2wAkfRtXpnBY5HB313QwKCWrwNPVKcx4qYsVwCdqMv",
  "key27": "4be8GdewxsCY2MEcCjmdXP2fYu6C4jRYfkxMqw1c8moWBVkcSJ2PEzGUUofts1pzFJMCmYvZHv43PaBdR6Rj2SfF",
  "key28": "2onLVk7QzReDRmmDP8mEzpD8NJQJXATEp4Xm7Zxyeohk7u7AG1U7GhdEb9vKAP35BJUR4pAkLoLcbAJihKnqkTgr",
  "key29": "5rDmp44fwM1ErVhTsmC8GyH6hS1Ztm9aDHhHzPjtAu5JcpoCzDrBCQngkaYcvySBMrar6uPgsAY9jPoZdQBCMfyk",
  "key30": "3bRX5jLxHidxWbK4iEGZrNkabjLZ75RW3UfWshxCaxw92NXzw36WQMWDhq14x75zt5dnENpqp4E2D4Dha6Effoo4",
  "key31": "4xndz9PW21KRkf5oBNe4iaCWqmE2kyDUuZY8kCLu7wL93mDawRVtbcyaKoB6Ai6q8vsk83mksteQca9bR396b4E2",
  "key32": "32SHoyyRcWG8hTiniWiRVqjXerUsbUrYKTn6LvhYoER3pLYvGFx99V7d6UumrDnDCpQmjB58GGNsktwFs22TrXKA",
  "key33": "2Et8HxQJLJyXPZCbN2AhFtno3LwkshP5u6CGpNHezry7bvCkRThpAgjd3N12fP12vuBMHMB6UuvuctmCD2tj8nbY"
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
