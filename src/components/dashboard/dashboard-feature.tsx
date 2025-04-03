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
    "5wWWp4He9Pa4hzzCmTKvMQCHinNDH3NTLoAhakzo6A3sRb7pUK3jvA9LTbwAnAXD4nGEuPmbHBfrpmp3G99HN9Yh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eM3bMEAkgenUDW9dGtX1UDQeMXhzBBjeMqDFZtVjvdAMLsNZtNKDcbzpVtp4QtgUuybGN3y2cPuRA7m1PxT4LYX",
  "key1": "3pSMrRyUUq95Et1BiXqbgqg2P93C1Z1iMmCAVWLrjRkuPp96BEETef9Jec4Lo9xnZtuUz8oZVk2pqSXZzFSdUrma",
  "key2": "4twUAKcMCR4pBkoQXVp2KrsJ1mLQRMz6g41DmG2Da42yUBMcphvjLJgJVwiQwm6UzEGaDTHfdApG2Y1sV9VB3fXh",
  "key3": "5c51fJa4AenARY6Y77zfaXdfHviwaDpWBfiUhVfrnDowjyi5LcqXKMKSL5EcAJt9LAuwcPeM2CHcKfhVVvCggF5x",
  "key4": "3ag1RnvNzafxzXhhWDwKc4TKq6EYoakvit7jmzhj78KseEnN9BMXpXRmytWgCsERd2fQfHVyE8DrUFthFHy3nZNd",
  "key5": "41jwnZbHFWUD7ptw8f5ofoSpGc1ucbGHxti1uEkEU59PUFUfk7cX1beBujCZK51NAGo2o9r5SkZvxYj4tuZn1Prn",
  "key6": "5cRq2M1WceK7tTopXkmBk4g4CSTWEbBd3yUttcWLGShW5MQHzUKFPMVpxB86xNeDNZMvgsqevt7CDvVgyAV6uSSS",
  "key7": "2Rr6cqbFJigdMNNCceiyuaVTGeqfSKNthfJxojF33ZSBvQ2vB11NMMP4QETR3NSnkU96az4dPGvr9STAhiScCfyU",
  "key8": "4bo3pjtar2jdN8Q2go8QdZAxvcDHKznBYWgV8hy5KcSKsUssUWPzde5ETFqVmckA2n1hGtCo5NmgW9mQgFVL7Hes",
  "key9": "3aUgszbkSSptX7u9p6tcFz7CkKw9Fu6BQv3cF6QG5UCwkM5jpRgsemW1XgZhpy5h9SZuBbHcttwajVaXCwGPtNbY",
  "key10": "3B4fWGjCfpMqLVVb1ass6kb4Up8uPgd74ktQoUwWMxVNpwtqWhZPpSV4ccuaonAo3wUwE5smwEUyN1zeRcCNq9jz",
  "key11": "wLL1qe7WFZBsgMZTgw85NUXHcSwFQY7GDGGMKYL5ba9mLWvNS7CnQPrWYxbFEDTgVNyoMmFtaKZFmxFSM9fDK5B",
  "key12": "2eVHxDi8dNQe6xKqphzbvC9caC19GWWNiZxWSJ1C4Hyrdo4Gh445oa6qAaKKpHnf67c5dMt9EqtEbTaSCrGuWfom",
  "key13": "DhRwscgnenBAKoYNT7jzWk5DQMuaaoHSqf8fpdkTKqQYvPU7AS1R3boES32sNmCrhSRVe4mGpS2NT5112Sw4PGz",
  "key14": "3iixwwLRi38LSqG72XSX7mBGDNxg8uWc8qtFYqJnb72Rip1kfKD3HuKdwM73ywxsA3wpgs6Sk8c817x5BKToA5AY",
  "key15": "5ZWMXdrhMwnWmWCZ3JwuuEBLUoaL7TSuddrNZ9BqhuP95aqfepmMtYZSba8qzppgawifNj8GMbJmFjpZrSqJwz1V",
  "key16": "3n1b2ZE35cds8AghBZvtYVABqt9dcF1ZLZnjVwtuPRB4sSf5ehdJou5JNWLGJDovZXWQSCe6EmDLR3bWJ2CY5Ha1",
  "key17": "4tfoPpsxzkNxqX6jLLgkrM9ASVp7nxfSPERfgH5L9AM49GUojUynRQp2CXqUuvZBvbiCJZmeHXsShuewK8e3HiEG",
  "key18": "5qvLoSSEtEumtukaYwZcX1Xho455jnfhpjq8pL4VtiZ6xfac1Ma8NQ1ocxHoku7SJjLrnedP6dbnipcDySwKN7Q7",
  "key19": "5qseQL3w6RGrndW9PcL2WiScMCBzFU8YNudZdz8SBGVRom3dM1bpzGN2EEimk8YQwoL7NVc5A7HRGqDruxqBCB1r",
  "key20": "49SqZivTB7oZGDJPeBnL2fMjxqV8QVd2hejaNH6ZmQGAgUFMoXA9nWs8vdKP3fyXRdXT6s1zZCUZvZnA6MApLr7f",
  "key21": "55BB9g4H2XhpYBKWE5uMhq4K5V17JV4P8vxmEG5BewgFUAeqRG8k9uiKjCgdkxdqoMEvfuW4iaDMoTrRks2Yz1nx",
  "key22": "2rGFS6hjSE5nsUSvW18jzMXJjwEcFEQSubs1mhgoFMC6jqDsKe8RLBh4qfhs1Er4hCY6HzoVGnBADCmVv1527NuV",
  "key23": "4nBKBQDbkAwzWM6LvfK4uCKxvooWCtUv8cdUdHZ1mABU2HhVshKGE4vHS7YRZGjhfrdodBzy1ZSytR7sTq5YjUe7",
  "key24": "2dBgtyouRL9629UN2VyKVRB4qqJqRmXE8AYmoxKyKXUTigaBhuR31ePN7sBhEHdZdvomFjA3ejHHy5UjkBzMy1GZ",
  "key25": "t7iWRXZnzRs9f7nBDGMWjvMhjkJdinQjC2oUk6498i16ZxNbzmhxrM1bfugPuUUJtyBosmi8Jr46g6411xadJ1N",
  "key26": "1sGvWRNVBRfReoNsbqVzSVXsyGbsYy17bGGvMykGPRbSTcuaPBSoyqX5rrfTfg6L6JVmynXj5X1oibAKxwLwwqf",
  "key27": "3s3U5f7XwSkek3nRuPu2P28nod3h7nNQuyFM8N9rfywMA17uKMRUpaecsmQB6oJzLcGBqybaYtRvdVdJhMt2f4Qx",
  "key28": "5cq24xAEwopvCgTHZE2gPakZaezCs7TVWDqx5p3cn5osb8HT2Bb7mmyfdksJf6LdGcHbt7y1FXoTFeFTPi4rqj2X",
  "key29": "29kaxr4ZSMyitxathGen8ZeDFYRYvBNV2YPj4fTwme1PxQM8HLAJ3F8XkS9KyLdf94Q4hcDZEY41z1wRMR5fJZSd",
  "key30": "48ngBvvQPMZ8Uk8edQ2s9ihYUvEqZtm2r7jinkaX9bzuJJGAAh91ewpmpFzXQHwqeFbjMvcUdzmLDUp51Mbwo3Bj",
  "key31": "2awJ2MoTTm5MfKQEpMxRK5MC2AGyamMUuUR17WmkiHNsEScQPKKRqNcqfhmnshpCGFaZcX4SPJnKhh7QB8HnStk9",
  "key32": "4JG1zE8F6hZA3m1EbevjhUW5onqDxprjkfZ69AySWR2dfMsh7pHhqAGdqKokYU5hASxm2YNzx57EE3xhDUYjQunD",
  "key33": "3k6ZGnSnkZP98ECyGoSHYGk1dGmVenW6C14UEz4T4wYJ6XsUULYYwvEFiQmBryeVvr4aHEfsopvAmD1oLBKTnkpM",
  "key34": "NkzJZQ6qoJxVAWYkAV8CpxE7CzfBz3KH6EmpnnE2eZUMEBM22Kr44D5ZgxjKL9JeC3r8dCvM9pWCAF8vYxHRNqz",
  "key35": "4NfoWrioYFdFZBzHg52pbbTXidY3rSGi3hJgN8qj2kqPsxjU75wuWaC46qpJNSyG6f4xPGXy3ddEivABQmv8Ssq8",
  "key36": "4M8enB44ohSGRdrGPFHhiAe1F5zNtXvbGzfnt6yCwL15QtZgDhoayT19VJCxu4bRpq2njMLeeHwHmAPgKghFCehq",
  "key37": "3VbF3LUts8Z6rbh6gFWcxqWSQDZAE6bESft1vVSjKb2azamAimpd2cXGvVU2Pbn2PdsUJkoK9h6L671FfoWr9TCG",
  "key38": "2UCHZgSLz4z6ZqdyVkSReeF7bNbVVFAypNp1N7JMycg9LHX6RQ4hYUDKidBQkrQ8z9cBrhTTGFAsMmfLM8jWdQR5",
  "key39": "34JQ8yqFfyNeSeoYkqTAhSKvdwg8acYmnjRhNE5A2tJpj3L5FBEvW7p77CLXTyCuG4jZGZxrLoHJLR27EwvX5pWd",
  "key40": "3DDD6Wt4TcHk6zd1hMeE1rTd2s3HbxyLEjm6G5QwxnCHpdFWW41id9e6FozEjribk4KpnFPaDNBSiV7KSPpTDSQ8",
  "key41": "4xPr5mZpU4Vvthz4Jbe9C2it9FFCVn6nB1hvukdcZiL2hBnXaPVy8FvxXBCDnsaGgq4AiUoe85WEhYAr1qSfwT9W",
  "key42": "5rs9QUNfLNgXYLpLqrzRvbb8sGwPxadXJ18gfYj5vdGNZ7e1oZYV76HrpyA5D13CBFG6LSZREkcqSZ2h7rPH7Nf5",
  "key43": "6788Lhb78NLiDjPk7864HrqY4AepyLzqHSt8mucoGCMCKhvpCzy9f4VZJHegxmHqtf7tq2US6ChZRQByrWoNb1Dr",
  "key44": "4Ui7Eu6jbRf1w53Z4LZrgPXevd1bvHb1aM7kZCeEqjZFXeWc8zVFqKJAhWFiE2yUyw8knGrXTns14xSnJTj2z1KY",
  "key45": "W7p8SdWLpH3J9qkC6o4S3k6ZHFJhBtViQ22oebyz4FXNq4SPsMxV5uzf7TFTknnhDXPNKcp37cZVa4rjbpRQZfx",
  "key46": "3mddPuJRyzTWb2gtEBFiyaeYLDvsEh8KtxqM6qNCX1LWjRvRhu12EQdZQ7i4H8SKUcQf5GvWQunB3Ep2CwWybemV"
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
