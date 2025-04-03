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
    "3qJYk1dT864vss7CaARV2XihXeC9jDLUMdbEXwPtdhsbutAqFYinicF2R1jmDWd5pT4L2FHjomK1fjvkhSE1aUpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DU3MQsUgnMKF1sWpBdEfmB77Gsg8gTXTtqqJnZzyKVuqRzHHPX5UQcDkoeXNvqwP91HbiX5REyhaxzzHHHVK37o",
  "key1": "5RaXLwd9qGpnoE31TKEXSwWYJTCg12dp4gMmM5k7XsgZDpqPPDK4mvpDkn1KmsNpCM4Z8NSSW9Nu3Xf3dCmqnqzG",
  "key2": "2i4WytCdsLLFSHXwGQLq4SYKr1kSiLEgSvfB7dWgTiqap3JVLUpK7bxduy3RfGpfqDGosXjXPiEwGeDLCZorUMBZ",
  "key3": "2yy9yh9Vkva79dgphSTCeHDhZukZLEvzEZ1HEhQCUDYKbhPrjJfXzEf1dqFm64tRDWtPzjVymUqDtXVURPWxbTCj",
  "key4": "5fypRwgSnPukUeg6hBb71NkG8n8ULsQHH9v8FqYbjYP4zQNgYzSwhmhU8J9khhfdX8UDp25pWGFoYV4Y5GqYJrbq",
  "key5": "3GBkx5MP25N6tJmCrSEosXc6Zs8nLWDz9CAjFd5b1FsPPSobkM7dRomBvZMaj9qEAvu3hApJeGPUGDFyyBKdm4Xs",
  "key6": "4xxmxSSoXvYAZpetJcALyF8Baaxo8Tpz2kyHzze4ExwTbqm7FdBxtg74suTc7bnmoCZKfNY4KGKEfmbN7acaGtPe",
  "key7": "k6BRgUwbAuLdF3JemzCPidCRRBcCXiQKq8nXbQCrXEQiPobnJUJvSMqYKGdPf9g8V1RNiispaf5tAFibUKSZGar",
  "key8": "2RosBRdQoLVDqLNCoRyfb4kHcQxqZgpwnwq4hLi6t6SU2m3avD5UXDkAKZdq3TA8S8kNoUFUjszxnFwquF6iqXEN",
  "key9": "3scMY7FjziR2FSFsHNjpPo7wYjkwo9iMwLDV4qSjcApDbVduvCWLAbBoAdnTBtfbYmHbAr7PLyyqadKAMqBz1bDU",
  "key10": "14kfMPtfyP2zTMcDz82nkU21KwVXe2dpEfadpxhysbzsGufjVXUda7cXT9aNgARgi8RrFCfnQJ1i61cqB1W7bba",
  "key11": "5x8d6A3QFqHXeoFKVTRbWeWrygZrikPyusoPr6ypwJhB9SDypobo2RjeR11158Ui8Q9aHYXorAf4SeDAmN8yNBLZ",
  "key12": "3zQ8ZVgEsVto4eoYi5YL95rWRJMNwWyucYCScMbedSHaxscsg6WM6e37D1gd4cYfKToU4QdYZ8fDwdNkZxvf7yPt",
  "key13": "5HNhSbFZD42yNG4JYPBB2boF8uC3y2wj2jEkBJEayeA5qrnRzPUx8fwsgwg1XsdSiPfCgRr52ku3CMCVVhMD39Wc",
  "key14": "3De4qhVyS9AoZVd6jH7JDuUu3zYfWyG3zyDM4faNtmTmMziDWeUBqxdWSh3qh5dXnN1gLudWWRaw35MPse3NDBid",
  "key15": "3pr4647c3RNAViNzrQ7ZJD9dFLq7RCRX8aFQXHbJfJVhCB4f5Lwo3YQzzhod9T6buDWmgZ2QJCQ4HBePy2gkqgyq",
  "key16": "47oLpbVwVvP7VCXbCDMug3b4q3M4iCKWBxxPpFBMi7GecrArWFgoXnCqcFTu1VFgw7oXrWSNLZQf5cui6mouDy2F",
  "key17": "LKuiNEAVEMGNQsZ6Pq79FTKZ3Qnt68UESbmwibZCAmoSJrTc7FCMWqmEY8LgN5bmEcSYgLWi6gNcNrtt78YYcLS",
  "key18": "5GQHhA6MXRtXnJgLbPZNCxu7qFvQfSnZnXJuCDFuPzoVPKyBWoXRjZBhZbrBrDSJVDtinTgEVZzWUY5FbPRhkSyh",
  "key19": "2bqNqh3PsTUkoFk8tjZB2kmxS9YWQd7BxdN5YMWLKcDtEzNkB3aQnDYARGaAVsH6hpg7y3n27nLiVpzaq4q1Boj",
  "key20": "4N8bgJ1tGawmp2eUJgb7vXe7ZRUr1uDLw6akpVvDcSjMQaDbLHju56h4e1xZfk6FNCyRhipYsGDZ4GXJuzLZcGEz",
  "key21": "2DaDGdJQ2RyPLQptLRUTc33rtpf1qiAnDZiP9eqyt6nWF6bd3JcW2hsYKtLMy8scQ5FKywcxRBAoet5jDxLmotE6",
  "key22": "2pcfsGV2yJFKp6YeypCtk2fPJzTHVYEKbHT4s4H5m7Wpgo6juk9uPNnYyv11wdLhD2Jf7sFdU6AN99aVPacxPfdo",
  "key23": "5o1xzNSyFxwtCN4SCqFp47EyxvTk9STHAm35UXgatBjCUKpdsw6F6T1kGbK6jpYtd7uzB38n9MEEqBesauReBv9y",
  "key24": "2jsDNjyM1BmStDCa6V5WtF5wJJA1Q1eKp9U48gia1xmYwiQBesr93bDxLjbKtLEJR9taxUmc4FVkFude8C3e6DiV"
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
