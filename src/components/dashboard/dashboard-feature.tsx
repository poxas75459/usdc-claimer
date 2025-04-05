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
    "2hST7bnE35e1qNoDuDcX6rTsKURZeur5eDGbVfd9JWZKXW1nmotMQmDK7B68aTBp9iVjzZ4sSkwns8ygWZY3u1Lq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aPuBS5d1aYQqtL8C1eP7HfmQs33wBi3s72znTtFLDBrjSkS5ZFcxVyVJvJKZsomnfgELxgfsBUBPrtdSYbRXKk9",
  "key1": "GPrSwnCpd15UGVHW59nNmq4MtwfALiNTAQPFxXG8ZS6yo5RwY8ErqctRsiNEGCc1zuDw1oQ7M6HusLftxdRfV2Q",
  "key2": "573SF3eXMxjWapQKH9sM1KBb6XAfKJF7cEGKk2w37SDjJ3m7J3HaRgK273xGLLWjaPnenJrrH15LgvdgKZMqrZHQ",
  "key3": "3b41eHjUUVWKBj9Jm3sFFGqnRgJoMjcPrsohNWHvycbXsxdkgh7NdBUCfyLDXyTDw89C1iDthy2AcejHHm36xui6",
  "key4": "4UA9hh944crM92oX2bhTWuLDHuqndf7kTDa1HQnvwJ7gd1xsMkQren7kD9Kt3zXHQuTm88GxXZ4q7JSjviyzCtu2",
  "key5": "5Gcn14M97tEdapisJZj3NW6N7ALwbAUSXzVYtRBGq1XSRA6hgxY7VUShNb7ejMyvVByHv585AkH9k6FsT5boG3nB",
  "key6": "2t4zjFgBs9UPtNiuGSNu7kLWjcbSsNVbnQZoK8ZgGiwcbe2t9pnGyJQNLUaNLYKvcmUynEcMAV6r31PCAP92KQPg",
  "key7": "2xrDfHBcPUy61ttwNmcQ4egLw7KQdym4NsVB9BkVkRL1jS9oxwAZH3bHo26Nc2uyBd5wTiVq684Bqz7cBFKF9heg",
  "key8": "38YuKJaDbkcXhf6QDggQ3Bo4muVooEGhPPWsGoPGwadvWv2f9YCqLF5Z4XKbgBPxZicoMwb56gXyMHDzkdCX4Gm6",
  "key9": "5htdcRfcvkrjxtFpexsQ3AML3Si8aygDpoBUhyGCBGtrWoUUr1NZj5M4mLyChi2oQeFFFA1LG1vLeQyh9MbFv2kF",
  "key10": "5pWGV6TaETyNFHmtWnAKRBmh4QpdHPgpr7CRH1naqB8UfoCGPK9c8ZNqJfAcjnCBs3jN5gZe7f65LLQsBU3qraKK",
  "key11": "2FS6Yt7o3JyZeJp2imKKRtnWhnNmdwBMLB4yt1YMjfwDNatHM649DoPBHCQft1JcVgGaKiWQYDEprDm9wYPnVU5M",
  "key12": "3LpQmbokgCHNAuHUkPmv8qj5B9pH49q4zAmh4NShGxzneBDGQvYpPsMN6H3mcJ5LAGaUjWvtmejg1t5uX3YFp56k",
  "key13": "5dUYFunmQv9LFP91MPf71MVfBH4RBmQrMCpwtjPZgj7KCPwWBYwbJRjdrozLCJZotHSyydbB5Z6hJZxKT8q2ysPw",
  "key14": "35sp58zkdtqPZaubffMqrRJvZPebr72ak3enXEHngWDK1665pEpiFbGSujuqjrdwwXapZqcBoWgZmxPdHNyZr2BL",
  "key15": "4ptcmEwXv615nN7tvXaeMk2F1HbF99s6jF5NCuP5giHVnmALPSVv5EcdWcPLRK5pZyiBspxjo4iGgSeb4TicXJa6",
  "key16": "3sUiUwfXP9kz6namPv6utxuLAs3MNamjUaTnq9d66YM7Xf2UUXC3tZHNyBetfRC3NfCWVMdyag8LJkmZSaq6nxTt",
  "key17": "yZoGYLS5Jpsb7zAfS8ECakdTr3mzG3zqx9jzqG2GBNeP3QRr96ZaCP1XzyyGzDKbminNpPyfzDsdd5JBK7z9dRA",
  "key18": "2hmFZwnwbjkBoPyWADpWu6gfw5EDmLHo3p42ryaQg1qz8CSpftybLEXoPdgbwLfQjsgc6bWqgmpuKNNABdyfzPNg",
  "key19": "2pvBMKtVnppv32zTDGeY3D94WobxwNQ956iemKUBc3jX6SamPYQTH3i7LjCK6BuG4zDgYimriqCEiZdgVxrKmoJq",
  "key20": "66kv1DYD5R6m88ydVjDCy7NGAPAp5sdwqwheToaK4L6LKxENf79f8Yd73PtsvJU8q51fa7f5BzKoMsZEC7TxuKxL",
  "key21": "2xFDN3o1qDKaCxcPgUU7sSo8Cvta2efBGLJM1s9P1gVEg1QihUDpK1tArmYipxbLMMg23TVYgsAP9vG24mDkTJaQ",
  "key22": "4dMNfxbuA9zVydDxkKRg7AQRoVXRTfnXmtMFiQkFpbjugyRaiYBRS7vomWa7DnjkSHPjGfAUKJSp5opdYDWHJTbe",
  "key23": "3Z3qUCSnCPhPQTt8sXStJFqLLCe9YYJKgSuvrpbiUaCHcBD2NnYvrkcfKnoHYE1NxbCxEh8tUYiPpEHrSmLZxtqw",
  "key24": "42iH9Y7JbSgzX3YDntY4QDmzP2LvEzy1e5d4zWrVudWo7Yczaqp4KG111tprUofyMmWUsYwSwq8zVUFgTsz3Rw8S",
  "key25": "3jF7AbJKTwVM6pgPpykMiirVnWr6LAarscCMm3kmPg4DuQxkjbz1mykqVzqkK1EnMRfAqZUsy5TskWVuWixrT44H",
  "key26": "3Q3M5fFmMLC1PfbTDbmzvxB2eLAiiuhinp33qdQ7MGCHvfFHS9v8TEanHnPWApopxm5iPLVs4qitdAWFwuVd5u4L",
  "key27": "4xZsT3KPzPicmTGxbC6hJq1QkuEQNyDKASn8jU4F4mYbE3NFYqBhwdUWMMLpDxCPBnwRi4G4Q6MkEcvKCqsEzCKo",
  "key28": "75DxVUixATpRokGA2RRxcAmWMLSutbUmUfBqi41TrFgHo1tPXhxzxVe6Umr94u1MBmeiZf4FC5znrq8Eiqe43tg",
  "key29": "4zWQNJ1p3SCzbJDqd9ZCFNcdYPzdPt8eXFigPUhKGyFcMwv6k87UkTqovRvVVBd7WPkDJsSbKVP4vJn1AeHP4tvd",
  "key30": "2RRS5jiKTHVLQABYMq6dEXZX6MqRPo41MLyfAuCZyzUwfkcoXnZkeERzLctBNddYVyuLm47ze7FRGttP3vtX4kXZ"
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
