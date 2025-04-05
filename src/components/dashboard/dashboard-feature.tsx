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
    "3iKqd5hUHbc7NpFqBKKVKCMSdjhQjkgysLEHth6ar2vFPT4e9AVz9RYN2HX1UpoaVQZ41tPvDFpswEqDo32paLvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xnQfh1Seq5b3VV3izqBP18YZNnPvrh7kKYmAdLbrVw7th22h8SP95yhUF5fvLYtXQ1vgSfYYecjsmUR39RrC2mn",
  "key1": "3bunm9fqAjprqXE8Pu8zgdUczGSAEsXALZXy39D5E3LpUWMsabZGH1LgReTDiCT87eG8RFhnKocwfW78Czg6UUcF",
  "key2": "2oVVvRuEgN7huH48NMc2ovUAKRFa45M6srCA56C8ZPDqpx226vje2Qqq1UHk6pHHYiraUY9zorEcUQtDjvmVEv5v",
  "key3": "5ayBiLe2CqgZpMvFpSRe3ayHb7n1nToD9G5n1q4WLjp76EUT99XLMxZfbmjUpaBCDoQ6fVhhJ7A8YYdVXGGaDuPy",
  "key4": "5V5aLKN9MqFPFkN7xF3z1YWeE5YaToYuaZE2hx4fYrsTKiXDWLWjuzgPyhCahwsKcjdHuh7wa2ts8P6ZUdCksJCV",
  "key5": "4nDCxCwMsJHuxcfaqFqEe7CnNm5dQz5rDWLeEETHNHsBbXwGmE95HzEpmN57pjPCTqBJWUdAYgrtZHWXndUEGK8U",
  "key6": "5JSDqxCoWwCaEpPGrpZecVUbMuvbz9Cy91tCnVGXxbxgK4Y1TMnE17FScFvWori2oEzQx1r51Qv1H7GKXzmUYwj6",
  "key7": "4JWHpULajgAe7EUqfeHS3DohieiLWRa9jgXSVQXB8mPCCAoeSxDBvTrD1n2Mrrfrv6Mv3kEwaq7NvYcVy7rRnEJH",
  "key8": "4rCpPwfEvWUPzUYWQZPQVbx7cUYp7RjGsB2RQYa9hDA1Y4idtxxqkiPBLqi1Up8SQpLfXPZnEPMmbwQ74nzXxSs2",
  "key9": "ADS7LEcn27f9swj7yHKH2UvNKaJGYHL8EKT7sRs9P2XnNRvMZmsaDpjAn6SMwfcbGdJSZgGmKi7tSr6VsHe1mKT",
  "key10": "4cL7UuaXkE9ZtuMswXQ4YdvgQVSknmijFmtYH8EEBk23F9CAZkzLMcubSnkG5BG3dFVDf3PdoE5ubgxXaZxYeFUP",
  "key11": "2277kttvRNPpfvtWqcantwSsgPu8jSZY3jUL2PKwTV2EhTypSRnqUbH14cBQhCpFRjkiLxHTFqhcgYEgUq9wrhLu",
  "key12": "5tEm9rAoXvX73LbQVvQo1FDM6DM2oRAnanA3boxJ11oP4JGhCJLT8RUo7w3oxZhpP9b5hQfbdjoVgLA5rnJsCj5V",
  "key13": "2xFHYMwFjx8cdQaMSEas1u3dBSvxjj1NwkzuQgzeqGq8PiCR6vbTUfHt2Rgpp6fnkpjcbCHe8my5uTVZRzSKCLa7",
  "key14": "4bN5dE12CSLYtqijMT6P1E7wCLwwYTT8QrP2GiQzyCae7Mjn8k4KPdgttHZG1TbZ3NTBkENC9Q9kRnez2LgrS6qT",
  "key15": "5rgXrKhEDiJPnak29PzSwnmZW4Lat74ApRb2EeT24rL1oKXahxAQrSG53rAka26RYfuxKSiEKTzSzpnByLJetAbV",
  "key16": "47pAUskoqaanwdhMaRSLKmKk2xcGGZJzGmcLasyT1kro7JsEME5qjMHRJiQT1d7jJv54cGzNaKwTo2mXaCNKzNqu",
  "key17": "npueLjS4NhJRYfoGDjpsvpjLqHDYwmtWicSLFvJKq81ooJHmgx9PFvDQFXEDEyFDDz79ozSUuXK679bZ9KurFqC",
  "key18": "5qpyo1f89niespQ4jS7ciFjhFkHRdzwirL8Y2g3C7gWzXTFZXhb7kRGQgYxPDeXUE16VAtFSG8crJHcZaZAzuM45",
  "key19": "2wyXtEkPsBUJTWzJqdCdVwvPnh9RLiTDsTuHumQo2y1vp3C1xhSGXo9bsHRfdcZcrbUQtpepBtiXLqKzU5jKgxCT",
  "key20": "2G5iKEiW4yCYA4imxK4kw1LYS3R7diRVyvZPtiZ9GZ8fKe118c4hjSynS2p9fJFfVyHvmoym5qK344aH7eXeEzmW",
  "key21": "46JjD3wE7reAG7VSTs5gz4DZQ8RkWxLkdQFm18nRUBbDjZBdLHXaEGMRKm3nJZUAfF2AS1E29UnV4Ri2Pu9jy1Wv",
  "key22": "3Uw5nMCSyxb5i2123nr5ds1kbh8LPbnC3yjmKUzPALb6zqp2awQeih33dNZx645PXY54x3iTHKueYUs4xX42HDEH",
  "key23": "3KL5W11cJZ1G33aKsgTc5WR6zpbSvzZMb3ARsfWmJRKZEsgv4zSCXWErwGBG7nAF18WtPn1wJoCm5yvRqpdPmvTH",
  "key24": "5WdXVC9TmCSVuHHs9tob2tq4VJhRBKqA1BSpdNY52pMKHurTz64LhqxnJKkF6SAKWR1WBPUXtpffmjxNg5hXgQA5",
  "key25": "4JUwpyCeMGBQu49nwhFNhcjPqdH3eZbcch5KFkueqVLEZmhZgcZWySMuwfQhsKq7UGbBzwXK6PJySyJAQn6P5hEq",
  "key26": "Udfbv4SWEjpYHgbQojfxDNBdQSrHJz3HfnBBzZXWWUd3LMcKnZ6qoS6qohJMYQg9pYxcmHYfoHKpXuXT6EqRuoZ",
  "key27": "4QFUv1mjz89PdwS6p7xMNCHHPBUob8saZH9CcAfSZjKKXAHD9cLTz7n5i3pCESBqHRDvLqG2EJtBMmLJkBwSz9Sb",
  "key28": "4eFfS54Qatpny2cXTyQpLNnhBAt7VL68gnovbeXnCPWGRikJfNVzGyY2SxjFH4fF2egCgATJ2W26ZFpyLxGLEVih",
  "key29": "5hhcV7SPkcfQXG1NC1NYfTrt4iKhkc929YFsrzh88Ku3MU2bBR1AvNuxSoCjfCSKRaVXsgMMyqBaAT7Mn1yRJwja",
  "key30": "66NZE34GWJRY9QHrf8AwHPzPLnpaCJkjHxs5YzvwcYCs4yqYNiCYQNm37jWfWLKK8VNwMFGFBtr9V4XyQg6pJKuf",
  "key31": "b1tgYwuSSLaum3VAFVAa7Pzi88TW3PXn5fz7FAMt5xW763toGrKeYGZQu7vtCJPp41wEFJ1Mz6RKDSVtjroWopB",
  "key32": "2pRopTVFBFD2vzKrUeJgYv11NeuZEhuMtFN3xJnA2xJfidbxFCjMesE4DSGtWW7vKDyTPUKsGgqjtBVhNWoiFcJK",
  "key33": "3wGRKxPSuyZR7fP2khkg2yJw5U3cYGW7mer9aoYWMTWKDuYccTzFH6mDPAVcsFkefyQJ8cuD53GDgJWCwB5zKdqs",
  "key34": "2Ed3KxWz2ejzzi7UyHgtu6rSkp42aDqEqDMs183z4B3c1VU9L5gsSro8czpSnyg1n7vEDErsYjp7Jvqiy3ZeVsG8",
  "key35": "4avJnpA3wF2i2FvvU2rrNsTQrWou8CuTEvEo4R7BfJxNGPbHWt3SqjorDNUNaU9T9d1oS6hZR679LTibuSgQofmb",
  "key36": "3kGZK1t2zsfMZvzKXMGvjDED32UxCNrzqwBJ3aaHHLZHm6Chebhx9fT2HaiF8fTJTyXwfUm7gtA3miXoQkGxGmxp"
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
