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
    "3xXyq6nFwJiPiYDwGPk1xahtmV73azSPAJf8ctPUrtGuDSzcRCBmH17DReXEQPGVUj8sLnC8fQxNu9ErTk8i51Dw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D6WUb5dQ6vmVh9a452DBQ5GfPJGMu1AS5BvcPkmFmE2TojDSY98JjMC5xY52oSUKTYsrXiicUiohWv3GZWBseG8",
  "key1": "2KhcqN3ykG7SMf7QedcfFNSPPG8zv6DxA5Vm4nXexMdMziKW2xCmpySi6tU5o9YudQ2VxMeWDTcAa1vtj1UvLX77",
  "key2": "5E4xZTzRM8g2d1sSBGf26pj86x4ofqY2xy1xud7mMC1tqziJJkNswuB1hWwhoHFB6NyKQEr1Kmm1JAM6QR9GThJL",
  "key3": "2x9sbNfydJQABChyRR8PT9GWvNG2FobDfG9HRmca3zGY3k2p3QyJXM7x5KHwHf3Ta6WLfSVTtDdaNMpbi2ZURdaP",
  "key4": "3ngRgBFivpFbNYeB98qCCFSme3f6XMcyZW2H8Yadyehg6wctPB9TQKouVFEwPS9fMtPQgbXigFsKZ8xiJnCosGo9",
  "key5": "4qxY1eM3KoPpC6S4cgnJmpuK8Pyn6gxAuaDWzkfZ26gcRNMeE57DKeD48rHqgxzpTsfzvo1gjQuWmwGKbHTU5mni",
  "key6": "2Dmq238EHXsYJVc1TofD3MiN67Zby3kTYqftSyeeSKmwF5qXZq6pQGqS4mUyKRYvr73Dk7NbrBxX4Y7HKsQjCpF3",
  "key7": "4EN7zJC9rXgL4bT3L2rM62mHzcxXytmkyqBnWagsv889ZENra6wWoni991fP9yDFBenHMafKhxjdYoAKxSwpu8TB",
  "key8": "3MhFDbDrhWcWLG9VS4igH881tsFTqtPPyfPBgVcbi2wwirurq6ad8vYuHDxUzNXV5Vet4spmv6em3Wwikiw5ckSh",
  "key9": "nqsBJrR76QR3LT162cgiqY3mEGCkpfHrwc4HgRpjLdnjW3QNxyeExy6X3mKQqCa6i2cgZamZuAx6PkKprzL9wm4",
  "key10": "2sfMeLfQZ9xYDdpajCD55zXU2y4wBNVnDBrHdXnAiLJaHKHfiWKEDjHubF4un1PAykPBoSaDrM295QusbwaNN8Vu",
  "key11": "565nDCszk3VtGqjCjCKqq8uanTe7DnusZvR1B61MqrDteNMpWfP5mpHQQJBFH2kncVgAVhZLGKDTPCJpPKLYiPsu",
  "key12": "5xbz9bhkxWEMPLCJsRZcPi5TLL4iRKGzXQpPREs51ouWbxvm4KUBr2BRufpu1B5arAeALY91hrXiNaz67HneWPB3",
  "key13": "4DfVp212FKvp3jJCQQgRvMrXRwq3FpqMqcgivBwDSkDVMpeB1pVjL9wM1rnRzoypiAVhcBd3pcw4YoVYm5Dm5mgP",
  "key14": "5qEkDxtFGZ4w5BNYduLsiY4AzA2ykK9gmDCb1aymyMiEwUJivNwc5Uo9878d5QVb5AygNap39vHTsbLn8ekXrWna",
  "key15": "5595TnqpGRNidozvapDdSgTPs8TtyTZUn3AbeXXg9j4eAk2aR9fPEkWFUuW2DiAu8Lk4x7mAAz79jD6gNiax1QW",
  "key16": "yoCkYyDrK84opmUiugwkakcRK2YFSQfpSgqehxpWjg9FdYXsWaDsbDHEbkdmRUeinVYJ6xZ2r2ST8RGShbhYMEj",
  "key17": "2JyUM7dWZFQSguctdzhCVpvHjCjgpsyvVgvTaKAQTSMSrzFXHY3kMLggEbnXh2UW3dGAAU9MF1u8ZfLaQNG83Fgd",
  "key18": "gZTsWkmLMpZAhmtTD9SBw1D6NRbDhjmeoBCVJbpUVAyp9ayVzxYgAKUQcDPWmJQh2uxtheJEmx9iMJNJs9MUu4u",
  "key19": "2A4RdZoCTqPq6TCsmv6NNa7Y969tPoBkWNj3i4ADnzp1g36QrfcJbyVd2UQnjGEfiQxzohkszES6p9Tz665GLhkq",
  "key20": "4H4FppZrmBDEE4Z65ZBJvkFg6R2LhAMekvu41fpWqrub9ReDiVk6D1MCyXZGoSPZS5gAr7YqnexWaDHUbfRU8zF7",
  "key21": "5dDHyS7KXjJiBWrupfLx4U9ujH6tq8vAH3QWmBug87Kf3CxzaLc9ktJpEhtKdNaVwq68uf5N922kyAWao5qCDry9",
  "key22": "LJ919szVBxqDn4zT68HN6SgEsvR1EMaEZtPpvzwMz5m1R15gtyRBKADgkrZkzK7g8vCj8AKMmhKvnzcy4fuz3Y6",
  "key23": "5DZsTq2APpb9NodkRkKejYfBgJFvoGRevFkSGrfeJ3M6N4CsSyDkQx74hHvQzShi3QDzWQPTxhpPWZ1YF6dQFG9M",
  "key24": "kBC6KQeJf6cZxxwDQbuWgRBta6NC68UdEBjVGJG9b9n8Q5nTGAXdmhCai5VGZFR4eJr52bk7gtRhGnUqqzCvDTZ",
  "key25": "59A5wETE1zM3hHGXY1ntoXFCFfTqXHSMpXfvUpLsE1htW2Cz9dBmJjcrEnoPvUsFtjDcgnYiPHax5N4AV9WHWpiS",
  "key26": "97x9peciZsz6hmEK2b4SYWAyZ4WkvvwbuSqTF5My22dXR92Ku6pJSA2cMFxRsnCABuay99jCsRrQxEDuvd8j61z",
  "key27": "3AB9NXNBH8KUQrsaEqchH2UZGNfcLeDuDtmcAm6dZcLvtCnMBpobf1GfjsrC3uW5MUz1yR6ZuXhKMRXdmexmZCpg",
  "key28": "22JRcTzVvxN1Ea9wmJ2eYXcjzARVi3TNCD3VCNJmEMb3JUHWhp9CDdPsBHWnrmZbnWV7Lk1dGrAfTsm4uC5xFhpp",
  "key29": "65ymyXr2kMQsbKk2Tr6YF8WfAWh2A74ScaLuZWwdKU4ys1rz1eaVv6TgnoypW89LJw6FUdFvDavYs7F2Xj8A4EAK",
  "key30": "26ixspoZxN2KYmnuu1eRwfbnH5yU2mSroHDekA6Crt7KJYn2hbSTzUWvNNU4WFPHguTYP59N1gUbqg35x8RRt2A4",
  "key31": "5nBvD6JzzgWtNzWEK8Ywo8Pi4z7oGju9FSjq5s1map76G62hxFvCiAhYSzatyfYLJArpjqDRCnhVeWAFyxg8hYM2",
  "key32": "4LEHCnSZH73AuAstwgRMm56SNGVZUgzLRQCiwd2piy29iZSgQaxi9GVGg3YL1NRy2g95Aaf7qDa91ZZDFKW5obRV",
  "key33": "5eJuJ12pqaWB1nmhY2UbVgTgXdLyV234iX7kbn5Gjn8nrayA7GXhJ4mfc68MpmeShNDMtHWxg9gCWvgtJLpQVgMX",
  "key34": "32c94tzeWNJxo4F7yGneKXh9GRwkpf5eGaN841qwvWGR3ZHp5KNUUwfSt9fx9RDqQXUc7pGxBxAYhdASQRzPk5PB",
  "key35": "2HwSouncicQncWccBj9b6K1SXzBojUahhcwTBzemdqEeWynsJKnJxy6mR4Lv1Nu3GFGY1TLuUqANTbshsvWpprr7",
  "key36": "3Ryg8wxvT3ZsFr9msuQ2UuGUL4frE1urqPcY45Anodftaj6fDn1x8xayhW26KQRce8TV45KsQuwUTLkLc2112KBY",
  "key37": "5DV3ccj4FzchjztCtdQoqL6E7pQd9VekuTM2AZ4vTmGKNx4AZqGF1ipnztpM3HuNXafuASpMUWhAQYDuBjn2ba8Z",
  "key38": "yXqGXYdR38BHcxkVzSaVem8xc2YmRSyhMphGyxnNTR2J6h3uJ5i3SgfEZiiPghN2AkajGRSgKX9LNwgbp5YyRUZ",
  "key39": "3wMn515mv7yCT9qyShWdGJWN3xHLgiUR3HmHU5TNyaEwvkJHcN5ECYWobvMtECqAg9vcNSx2sVBJWMxaG7xYZYro",
  "key40": "37gSPtGv2vxn9rPFEvtSPFsS6NQwYMUBtBUvskiGzh9wDhfkiPZqFo8uJF1F7RqcUVGHkZYCEM78j6V4jrQcHegi",
  "key41": "2VAFh3TEz9Rn8smaXt9S6U7BqFxqBbZQ2uYX4AGzrif5mFv8dgLQV7zULB3TeG8ZNph8Qv3KYPVxxxv9dc1KYv1h",
  "key42": "5okUsYPiD5rDBo1nE3Cxxh96TwkrM3SP2Dp7rA4QnsPc488abWDZDaaUcs3Hvs2zu9jgwPpV217MRJf2ZhKfvTt2",
  "key43": "2tV3tSfFPT9yAjHiQoSJzXFZwBD26y91RZFuanpeG6Qbq5Nyf99iz7XJMFe4pZUGiHdQSSf5wTwWcK1H8vWoZLnd",
  "key44": "6YgUNnUbSpc8d623sfySTSz2DLcXFC2BdEeB411VXa2CLAztnhXWsVouAwRiauVii1XrPiRC3CGkHRJpS5WvGzX"
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
