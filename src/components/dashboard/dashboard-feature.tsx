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
    "3qXyJtr7DDXyEEJLaf8EvDpxgVekPsjNGqjRobnHCbv7haKGxR1rLPd2j7Y6HotTGvoYiUpgTiutLYbEV2QtNe3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38b5eKx27ST67F4uzBncVmNahUzzrmYA1oEdCrEcF7EjvFGr8giZ8K5RB2CxJ6ZpyiVZN3jDYVy7sG9MUKn3mMd9",
  "key1": "5Xu3W6VsPnTWGNjeqxgT5AMMPuNuLN14KK1Q6zKxXuKdkF6XgAVoZLp4Z8xQ2RukSKFvRcZKLmdm15G3vBATPeXx",
  "key2": "5XeEUefSprryJJDtM95yGdbaFwMmTMeFF5efh8gqA9DhG5ZEgqEuUHXtbRUzukaWBUXqZ7sbi8RUSYbC3YNm8ikR",
  "key3": "61KyQptA5RRsEsF24KeNbTQQnqmzHPDi2bCDHmutWZzLBqZA2w9KAKd3vTGxLNUtNqT6kXgPGSxwctHUtKv2XrrM",
  "key4": "3aHZfzXr4NazRqmh6u8uu6Pa9Ajd6HJh8hmxKyYd9kRbpc99egcoUwhoT3tRSnqyPrDtYYmKKALMm6AYn5BynZVS",
  "key5": "5db6CKRYSAu7CES6jcSyhxx6ENoPvNVQ1que4PLSem1a6ZgJimj1we1ehdiXdsn89wEeYcLXqdRd8zCNhK783PKe",
  "key6": "54yvTezeK4R45JGEjwbTb85KjaRKCqxCQLdRe2Q1jAbdgemMKfKag5VkRG1UdnSKLKqzQ6CJxQJoDFd5w5hsqcLT",
  "key7": "48DdXT7J8quKpoat1u5eyq4pUSbevR67QKFubJrRLX2vyKrMrsAnSUyx79HMSbPicKkHgKaVXxQMUFGDQBdSU6M6",
  "key8": "5MRDyCvFSwr2us3MCjzyqq5UykGcn8zswmqHu2VxfBEN1ddNTgTnGpSfRPgAWWwvBJ2wwaPDJNVZTFpTqb8FQD3q",
  "key9": "4k7qymAJ6728h5LNZciAGipVZcwLF7vWqw2tkjtntnyEdXtuqANnK6wjKvCZkA87gFFYCRUBKSeLQi5gxS23RFew",
  "key10": "nAUZb3Wc5GvqsqRmQLj5CdS5mUzpHyJYT1iRcLQZeUQLVQdGyh2XMM5eskar2AYw9GTqrCh3WhGERriBeX8KhJq",
  "key11": "4QDj4Qt6WAz279K1KRjhoB3Jdj6v34ebon6q2uiAN7xgarZEsvgX1KUkVU8ckZhcwv7UoXEmaTGazZautfvMQWiK",
  "key12": "5LTWqQYCDLKd5f2iqfto4UqXJmXHxVkhxkvoUcmkY8akb2pHPT8Febjjy48Xebyd1SWanu1UqsjNCAbLkZMgeKr7",
  "key13": "54SQFTfWorFnxDGnHgfQh34iusR95Gd1vBR6cdzp9HG2wyzH2HfXoCQtHtjbCZDHMMcAFJEP8JnNxhgfEDSEexu1",
  "key14": "5y45A5x8JNPK3wS4UHH6GyqKa8ocr28Jbq3Ge9EgNMQw5LbzHtLGE9aKh9yxk767b767YE3QQwFXRVpWGaoHZxMa",
  "key15": "65rqW4nAPhTH3SaCw2XZq58RZcH6KfXdwWTHGANBpMSKSJiqSqe49n8S87CJxe3VcxMKeRVzeZW3psVv7erobmZS",
  "key16": "4Ncz88txDZSfhdfYiHzcNNCCynruiERkTqujzmjY6AWjMYmE1QWt8MTTGnGVg8cB7icFz9H3UfZBboS3mZJTXeaQ",
  "key17": "2QJu65CrYCAzATYuGE9zeqz3Yqs4cND9aAjkDzhS5qjEZ66tu21ZLxAAPZRZKsachFNV35ePyPHvfXtkX1e5amRY",
  "key18": "5VMriNpb7av9vn8VN9ANqGao9CTmYFkW1rsjvWAyWrqo3ptLL6GRt1ZMmGQw6Ec4ztyUSTURCKrmuWGj3prHJsZZ",
  "key19": "bDhtdjtq4DeCXXjc6gYRmQCxgMyAXv1297diQLv8MbLUw96PgYRfTr3bqZndWwc5LQoJBer1KJAmD2odPCJpBup",
  "key20": "iB9E8Ni3NHoR6fuYFS5iEs8uJDxPrGxyiZ2NuxCH8xp8zQFgAjXVeC8KTKhD2TGr1vmWRHpYvCedbp3ZfSbmZbn",
  "key21": "EcUvUkHsPopvdhmgFwuJoBpYFj4QPAQQ4SY5M1jzA8MRXq5Sn6CY5WFdUEDyFnCrd4P35DhwrKdNYiRCTJcP79E",
  "key22": "VkdFQYBJfr54Y8Csp1MJDNhUWaJTioMV6ZGRp71Jka7T3v5L7fiFJQx1DiNMwPHUhEAWsVY2ifM8mii4dhB52Dx",
  "key23": "PbpS8zkxzffJDKUjbrPWosnTsp91BUwyy8gdUhj3njXJ6vnQpfMbdBJydQjTzbEUEYMbkRkXPe9DcMtrSDvMxGr",
  "key24": "2dLjRV7ssAS2GBXuRvoH4ZE2K5PAFJsSQo4QnWCySjKGYwDKnWzLczorxf9k7KXnqASaTp65srQcaL61cuYtjwf6",
  "key25": "2zvo2NCeUjXN6VdKXqJC4H4GYbuZSdFUCr9Xgo9u5UJENJw7Uq8vAgbeVjn9J4pCzU4RB7rMrQaYAN3yVgEc5YQN",
  "key26": "55heGv13QDroztjtAMdz8oCXgWXLf2hHjomZ7EC92BacxPpb4sViiWxhAgetyz1F7xK1XMPiZJJBeUHZgM3HVXWt",
  "key27": "3rrx7uzPD1tuH48RxapnhYVMqh95SjKbi7JnB1DDNxjrNPjjqGf1LcN63Byto2PLR8XFgidsCb3tqSF1zDDTnZaD",
  "key28": "zSZkwkCq49Y21XFN4bafCxaXrf5xgMSWDu6uRveGdYV8JbKUGYebgbSTsbcPSi9buvZebVTDzcDwakqhVNZzcoa",
  "key29": "3J81GQCYREioQv6Cp9JZCaSWym6wQnM8P2yET2Q6cRp5xznPKpJFDETdBT7zd4pWTNSncE5iWSMoTzvQsv24R6ew",
  "key30": "448Y4hxXjhjuKmTveFokoW2RsnmwEsn14pHeHP9PssirKWALwaSfhnnCqu4TQSivjfZ59GPqmhNtXd7Wvh3cYKVx",
  "key31": "23Q5sPH7bCHgagoyRGuTKFWTPjydSkDb9JHCAERGsUGrfJSz2ZdgU7P2Z8vvHoP1sSHwnqXz1doKommuJjttjvXk",
  "key32": "cEW89Qjf3P28aSKwxivHGdn4bF4n5CjpLGyGZ3yPtBXSkU52CiUgdfJnBKkxds9Uuq7YXAjX64gkWn3jZqptNak",
  "key33": "2hwjQqtrCExZoZc2hziHz7uXkvQeDvSmJzyhMu3YQtHxdBxYC3nC6LZRhXXBh6T8SvrSN1m1gRT9FiBV5djEoBAd",
  "key34": "5S8szeGCtrx6hE3gRRjnpajai3JRYB6fy4hCRrrst1nUm9xMTTtFB6egdCyQanT3QXmvtjMWrYG4QZpEneMEun43",
  "key35": "45u5yH8ekRxfkVmgKtYmpN3QMU6J3XxZPwDSLPzmi84crdygTfEibZp2k2A93uFD7t6cYKyRcLrF8qKPFhJ2VhpM",
  "key36": "5hUsV3YwsTwekDUmUYkt4xf93HMEkpzUxjTjAtUh22rsuwRfMQFDWDaSJVH2PgVjUSe12yuk12DWkK5863aodZGS",
  "key37": "3hw983QgQaqWYMEvhUQo9NvMEkDf96AbXGQJsT36XioFHeFjPLsqGqH6qPzYfvH9x2XMXoxtSNdJqu3XuTxYmx4Q",
  "key38": "2S3GzuiFHfMt3EwC2yYT6Lty2FTcmnrPuG7mdgVauqD7e6zU1AdWH861Dku2JqFMc4KoCfX67ELNX7Ah2WzAkfiS",
  "key39": "2Yy1RTG6LWoaLoDGFra2udPYDNa52y9fGSW1JdgyHGsyaQ5j4BpHEmPkt3haCyLKwjwjTEsMTwE6p38rMzPZgfvt",
  "key40": "3KcujQRGp6GjsMbNxJ5HPkZwFSaNofBAeVZKgu5iiKYbbXyvSHRXVAw6bMU78ffNYavVeo94k6zLctoiMEKxWGFC"
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
