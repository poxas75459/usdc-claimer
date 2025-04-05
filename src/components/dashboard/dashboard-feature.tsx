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
    "2LbcUE7uGxKZaTMw1jM5uX5dRQkimxfH8qKXJQqwBKbqrHC4p4CrWs6XvyDqUBuGg6pajriiz61haWYGKbZqaTJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SsMe4TLwESQJr2KUkKgRBWFCzwi9J4Xzg7jh3JeATkaRDCcSfHrdCDR7SMFGxugDnQhReU9vpV7e7F3vN2sF2qo",
  "key1": "2eu9TsqWnZ1kgqBY7uTpAFW1NKMVp5Lh72LDGJzRoZKzptk7NSAAPRVZPcDnRNoFgSZezD73mFGkyzobRAU6ShkH",
  "key2": "4VqNdZVFvss77GLi5gNS4Pd1BwksJXrjWFhmydUud56GAXSdNfbxSjnqeFpRHCRMndsoS9CRmrFFc9KaioJCjyDt",
  "key3": "2YGayx4BSXVYrH8BzkLtyM2Z2Yu6hkJoXGBdZafW6GdAr2s4m8qz8rfsKvECDCX4G9V738bJGXNH9avG5CpXejc5",
  "key4": "4gQY9dHKmBN6McceLFCwtKaq4f6qsQrm1JryoNeaK1S5H2phg5ApB5oCdr1fuVP2YYMJDwNMMzKm2akTRCNnGAa9",
  "key5": "vQNfQHbJhyVnoGSg1HWtRAuDVjUiRnVnVzvtcnomB2TAqnzKXPScN9HPq8j512qJfAvGayHogkmUvKTT7WTtorB",
  "key6": "ncBBfz2cU6Kk93878NFzc6zVj5momWv9nhdWQW5LiKQMPBK3g4SqXE5SjsGdxEvkegpbeJYyRQq6eGXgwPujdfB",
  "key7": "3yazbQzeAtBWKp32FPfgxsh3X9cDiooCtLbN4YBv2q7ow8ER5ysaJsDCPqQxDDER7dEM3N3ECkb3uXW6Lxfa5XYb",
  "key8": "2fhYLy9EaCB95gQqLRRhRC9fhutc43BqLBXAhbFuTb8F4WKo16D9J7eqFDkE4JizXvZY43gETV7dq49UJfzVrfjz",
  "key9": "5BjhGz3MZZbiNcKU5Aj3XDXwyJoJrCAWD3Sbj6hReVBVu8ga36TEbUR7oKu5Cfof5RecyX2FibUTBP4Z3RYrrbXg",
  "key10": "2mtdrrFeGbVRezsyL2RYrrDka7LB5PYmadztX5pKd9PW75Forc5eZZEuCiyx9h2uEZJSyRDyQANdyoRjmaLC6TTM",
  "key11": "Ut7rm9fVw5GCrnsrH352LC1FcuTpey7ijoiUyFSjmmRCNJLUaxVXxWjDeLx3GxRVtaKmktqy5Z8puFuR8Co9Dro",
  "key12": "3TAYfzMGiRxorMyZVvuFYdwBcZ6GyHpSXPwgj3GC1frDDhT6WD15wFMkeiRbQWLYDQ27yZrNprCjs5ceSErjzUqz",
  "key13": "5mE7zVKGRP21ZuHAEraY21P5SbYWyUYm7jR2NK8nCfFzagqM9otf1GhkxSaE39hcgqafLQhTpq44EygWi1hHe4t4",
  "key14": "5FFFniXcqwiWPP8UQFP8pkhr4hwA6C9wwnCjmtihdXfp4jygtWYczaTaNKgzjqGWYKUCb4EfVvUVkP4pT2WCP5WS",
  "key15": "4EfUPJNxqKjNoU879o4d7SCzbYnCSfyemah5Sh8zTGjcEZyUnpbzRycD1112Q4NFGhpNUfBUJ7479kCtE82wjKHv",
  "key16": "3mxJFFS7cFBJmatVBkMQikgm8WSqZW8DaZFLaLsuzcyXbTNKfDHvvEKh9znnitjnL542uU6eoVBG4g4cDL8x8kyv",
  "key17": "3XpV9aNSXnJL7PX8yP6JJ2rCE2Dtb2riNy47CuBGTJAyPEntEztWVesazC5RhJRTBG3iQfk35n6ACvR4rfa6jBC9",
  "key18": "25iivh4bGpGK1b2whW6KTxWb9ykfRPdFsLD66kHevo3C7f69hCHhuRWh4qF4eYw2Cts1YPepMr5e3svwDtuEp9Mx",
  "key19": "3yY1nPXimUhSWctfc6xZbPyXrJ2gptXNCwBUWJC2pis37cF8fjoSWTZQw4nVKftSv2GoXamRCSr7JPGqiPq1aTVX",
  "key20": "3f4m1qN1Zg3jN8AKe8eWQE9VkRwhEWemtdRbvdtqquLaXoPkqBsmoxVWs3jUubE7NmsTDTQiNBwAFTBXQ54hggEo",
  "key21": "5di9fyQrVHjk52Y4SjvV2yrSsKBgPipDitou1wvcEowUzQPKMCDpHSzcBHYcwHJAKPnCVwu5peUTYU5GtYSureWt",
  "key22": "2ghGVyiXuwdY8euvV29q4N3stBfz5rYKaJYvYv6pht4hxEeVngEiTsigX2zv2ueYvyjgXJmJzPcjjRehGZEGJus4",
  "key23": "5Qk9AnG2r5Yp3h5BTL78XkCHGuvAMPzPEPmFdCii4c9dxrfqWJpcdsxoi1z5noiedTBCKv4ZFNBA8QmaPjZ2gZBT",
  "key24": "3jMXWq4sNJFJPDah1o6Lr6uBz4yPHRRu13NeyFXjW1wzAngDebCQATZn7QNxjCuW9C8t24dNMT2SR96TBWUjnew9",
  "key25": "LaF1GQsbhEXxNWZvDQKF4CUiLgrCh5zbqPvRnwdFqxxZSSNQgA7tShyuxZBRAxfcmUhTaAfuSzyMnMjY1jQQiHd",
  "key26": "6J2zGAUwHqQdgorK52U7oX2gZNRXaCdyrQLSUaykQVAfDTrQTLe9xnnWwiGhMNePJP1MR6uQ76xM5LJuPstXfTS",
  "key27": "2dgUGC3HPbTECRX38yXWxhDR5LvPDR9FWXFRMoZwyuaZHBNofZVc4hXDSHPo6o8enNhGCk2Wj6P6y2sXTBhTK2Bu",
  "key28": "5scZ2iZjcN2sm2V2mc5bJ6wE8XV5WQQWg76FopjfPpWe5tLXEURbjzemxXqeKg1EzVn63Uj5xRz9nCG8qSpqJWiD",
  "key29": "44kEH4XLNR5tWJojczWTfK7TQGjeBKUee6cJUy7DWHTQyFJ5wDhVqAc7zURb4XM141E5abcotVwXQm96NuEDzGxJ",
  "key30": "rM5dfym4YQSz4PB7AQtt7DpjQ3Ss5GUcv2V7CZy1KRoUnpgfmf7Dc5myDN9A2DoEhETa9zkAubEveJ6FBUTi3qo",
  "key31": "62Hz3mM8yJ2v3h4tguZFJdCdZnM2CsLqsyw8H3fLpuh16RtMNPVhpFJ6qHYRnW7gN4SAr242vQkcB5tD1umqWfWr",
  "key32": "2fGXos7mmh9edxgAHbW9czKL3fhWFFXxXD8pAKP8dwjegULjJ8XmAHZXrRx8G8xUPNrjgoDtBNaAdWQPuHXxRddb",
  "key33": "2ahPX4EFzpLQkjiUdN33d6bg3iHmUDPabmrgTQZXtkcy6rb3X3qsSqEFAxPBQZm9JMTi8TLmTLmf5DbbEY9E6qtP",
  "key34": "2CymjqJVoQfZCGVh774T75iAF3TXbWdHLgY8qPa4txy8r74pRy1bvnQUrNaFH189kDp2Yjq8FiujnM1DtfvWDB48",
  "key35": "4xtrirgbtUmefyJeQBrULa6wRvNKKAnAB13y48h3X89J5ngUBxUkN8tE5vCFA7CtSpWspSffPdtn7BqrV3zxYVY7",
  "key36": "3xCjx5iR9EVTMX21uaqS9hc7TiD4536mkMYTC6ndrLiDsoHWSTQP3gCyeYeiEDe9rVd3m5SqM3YffkawQvPL5NrE",
  "key37": "4FrjpGcANs91YwLqRXVe5hq4KMXkVFW3xJ6yR21P9AEKnpwRwkrSt4f6jRzWhYD94Uto47PeNYdEHiSaZmn58EG1"
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
