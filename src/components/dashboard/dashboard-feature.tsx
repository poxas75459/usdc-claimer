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
    "4kGdKMgJRZTnuTJ7oknaUFs3RShEADm4YEuMmJKJcT1sccgfT9TDkMkmgKrUXzKcpdjpeoTAEqAXgXJsWzvg2ssy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aYZr3KDXrd26vdK8ZnFv78jWVVA5CeD5B9Mm9f2CZRaW8JfEv8CJLQgiCpdMWVxgAHcsp2i9PL5pF2M5HDNQ6Lp",
  "key1": "yL4YF8Sr756LF97o4UzSZ4GL4Vmv6WJ6FJZFHJzXMvvRofMoGZbF84NdBh9MPrhrHYjvkfkvGxExiq7uaNLg4JB",
  "key2": "3swftRPTWdZ3KoHA7RLSbncsLZR4fJQxDNo4k5HgHoWdiatmgRQU2HJmE4uSGwo23MwsBNMp4yAyhX9kRhD4u1Mi",
  "key3": "aQuheewVSEMbuJE8ssjSmA8CLtQRB9iKQVqKrZhoMEmqX4FWzTH9PzLP9Syk3v8ztS2LcCZrTpfCBZi5CCuLbDb",
  "key4": "3FBKdRaTAmCzAxWDeBBWABDeveeEjchxFbgo42ncAquUvgPVKaich7fETyGTTpUGpvs2Bxn8e4qBk1oMMXMvcW2d",
  "key5": "4h7r6pH5J5btW5przVjMTShiGrQyBjkJC7fNkPme5ZVvoRHqPQ74Y6eq9DvxSAvExoVpBT1srBkEkedap89pjFLC",
  "key6": "2jq8zd9rdP2FRNqtcD8gtQWxDgpxXPqeRUhsYUZLrsTjYJV7CSz9KDNfw1Wz4UTYNYSE5kig2tGJdK8NcpuAFsF4",
  "key7": "5RvGiuCTVcusDMM91BFbCQTS5obt2rmYXy9rc2WGdP1Pp6QVK1e3fT3x1581s2eYnha2K77pPpuNXNE8dom5ueUW",
  "key8": "4cqkoWjJBkA7Mbe3eayL2iUTYyEhsHbx6De3UW59HzDf61RnuMsC6MKUV2LsBREaR3dbbiuEczneZhYEpzCjeHdp",
  "key9": "2UjdD2D4EFNSA7esNEQpqLUf7AbCUX9jtfAJeQmryxoMchr1HcBH5WzaTEXJjQwTGShknXhSoBXicsDd9kvs7KKU",
  "key10": "5ymQfwKm4JLxrDJ3G8thVZZGjk9a1QZbAvBYpKE7GF93nhe2b6ktPzVRSZixYijoeNRPZPH5vXN6QUbaDavn5jEh",
  "key11": "3UNxwrX4JFmAgcocPzVQVzGXbmZt2mRj4LQfA8MBtrihV1Cdktx4vUZBRQPQQTMERrUhE2qSA4vxGXr9Yj8TQjEL",
  "key12": "2aSQW68BsywkFXVCYPkxDjS9uaADqPBTGEQWpztJvjoe91b6cHLv4Lr7xv6jQaJt9AU5vjGHEwth5gBUJfbqEVEn",
  "key13": "eo6ihnc9WVx6UXaKbyMPHLmYyaajA1BTtqJxJvTBQbqrMoiQHR4iWYm6JSJdPUdmFxfDq6cbBTSkGCha84xbQ4A",
  "key14": "4PT94fZ6r9o5T38dyBZ6W8VMUzbDyH3NeBmfwenpQuL4GMBJQF7pNtwDJZPaD3HUDKGo45Q6hSA63wex2D8pBeNj",
  "key15": "Ptdnv4x5nRxgW6wPZC4dQkDXBwAAj6oC2uwMxQLjgGVEfkUuzcKa3hZmVwdXm4HG5rNHo5x7SK927yHMeQjG3PM",
  "key16": "3rpUAZP9N5Wo2vwKNV4335SrM9qUenWdF3sjM9Dpoxeys4cx6b4UWDmEXKGY1ad8gPsyc6qzUxRSyoU1YyFfJCML",
  "key17": "5CiU8Pp6cYqNAgyfVseciyXCDqkt6eLN21hS3f2CqRWWWf8Ra2om7bJ9CbtNksuJrJ8t1kjuJhejuyq7ku5pYQwa",
  "key18": "44uz2LvvaHGPRhwgt1mtCCekN4bHNh1bNu2rKp4cq1DXwfvhDb8D5fqmLnqhhNUFgSLZuXdqU8UF6rGxQcMPrgBC",
  "key19": "3NYRc2DheX9mzgSNR1YEbuAmMqj3wShrsemVeFZktmM6qd3kNLEupBZAMMJmcLxCPiPKojF73KBwSpxuRitPemVz",
  "key20": "524Dn9qW4HMmzoxftJpLTUm5ZbiHpPx9eS15ybipE8GCFFjR32bNmxz2cxKvfQNzF9rGVn2i5k5jiQVFjnmHugYY",
  "key21": "2L9k9NVzfGnnckaFf3ckGc94XaBvuWNk6YgcjP3Bg7BBFe3kuhZTcfPvmfqLsM5jP9dY5dWE3Je1E2X9fM9ddC9m",
  "key22": "4KNU2mwg4c7guozA3tHf38ZbcpmwKwDxFCLqU3RQS1Av7eW1eMavm8GTqKsaUMosckxzEqXWv82eEymxFfsLHtnv",
  "key23": "41YiAgxBgrMbK3k5KTntWGYsnukwmkSf6adWvEkdkmit3AJhcWZ6ssgC9qi67A6stESfihfZWCeDiYaEFfGBy7h1",
  "key24": "5RKVaoncLRkBpYsGpvCeaj8rEYJJzDJ926qiDtfELnihwAyt7Kyotpx6pKcL5DefFTQQtraDuauURCZQ334r9MLo",
  "key25": "4wqQdQsSuiCsac84LRF2YARmUyoEjxYX7PxNo4k4qKZKBPpM8CWTartJTrH9Y7omm94D9fBf7HoBS3QZHt44rfxT",
  "key26": "2DTModt8rMj9KzYQQxJyU9WD8QgXPDPZPHi8yGAxVs2VJny88GtbNDAkWQeZUCpcCNWroHx6gma5f7h3BzzvyBY6",
  "key27": "3t3qqQSM583gkE4pGHi4x9byBA5ycspKg3SscZueRu2RkWHovvVgLKgG5odFHD1CtoYgPcApwthuqz9WqkkyExQ1",
  "key28": "3BLxpbqE6aEa4jhHwu5TBbWs8qmuQGgiAe4VGXWDqWn8Vb8mTCgMEuHaotumHPtDRntjnGEa4smGKRG7e6h47zQ3",
  "key29": "2KVbVcufUxBSdUpUaGbz7My81yRqvPq4AJeLZMi7RBmNH9VL7R2TQJY4Q4KCraN3MxZaLaaTsozDLgYXSyWu7W6Z",
  "key30": "RHPaMSZvVGYj6hwdH6UWk15e1JGcJeoTddex84ZGfxdnQZCENTdV3oT38LFa4gxF18XLJbNSJnDSCadiaSv7BcJ",
  "key31": "3oFPVW1ti5DhYyK1ozfFqTJjzrb5q1F7cNfWThYcSXndtTs4SQCL3AGdkCcKRMS21Fi1febPxtxR3m6Sc7GyhTu2",
  "key32": "PaQ2tNfxUFrF7J3FgtbkjnHxBZD8R9sQMbKVyWuoYAxQu4vmfUzhNMyGkKr6WTWzghbYzFpy9CH2EVG7FCEmR57",
  "key33": "4Xe6SLLGEEbgEaHwPYbQWEdbTgBNxhgnEToR5EmqVmzDZkJUy7tbCHqK6qXr6EcM2DRmjRjjy4iZWvMPAfiZtsJK"
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
