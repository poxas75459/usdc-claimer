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
    "5cdUJU4d3AqLTAs3f7AyNxRkN1wwg9SrCQpwmfHxunNizxpG2oB9Qrdj3y72AD1mtyEGLhq3rsJvDGDJzPPZqPJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XCaUgq1o8Wa4QqymHjffgVbZLx6BCjiBzaSqSb7CNvCL8XJuTYPqKoT3w1E8iTM6oqRsiHhBzVjo8mwBQPKiz7U",
  "key1": "pf9TENbgX3bxGLySEEiw4QyTQK9N2WikxR9Tid7zU7o12Z1RyQw5zmeLWuvFWXDdWwE3hcxF9RMDyMhw3BCxB48",
  "key2": "2YfXWV7rj1Au2KHshBZmcQ6SAdY3RE8u9APfrB7Qw2PmdgjKH3XWiDkPYtYSP5kAsEQCk1kBa9C2822HPJXrDqY7",
  "key3": "61fiWyNpzVHmJrmD6hRG2enBZ6pXkyPsbi2y6SpzgnDR5HDtnfeKWX9mSioJYafunJvRt7nVa4SXyxDfPKwcsLH7",
  "key4": "2BYsLsVZpjRVFYDG1YXXnXTgwcvj2a2xQeeJXXnDTf6xRFhSjKF8FKiAFSs7KU9jJspLKg3RjYVWdgPxF6o5yvVV",
  "key5": "2Kb51h8bjakpgqPPwbvSS99iHGAHdrUcmPRA5x13qj7kA2oonxt5hsZ95MxFQSV9ANv4GZ1vQe944CY8SJJ31i1f",
  "key6": "4iyXgRzrHp6GpPxrWbq842HJBZM7khkJJKnefdfFVUCYQmKBsJn5teRWTaMcHAxVHqPEcHFq2rtcgREMnStn4ckK",
  "key7": "ZDLbhrSD1KTzSD7TUoxDjkehUrVhcJ4j6EsmWQNgjWGGEM1beBK5HVYhg28SMwrXvjuMpYumY7PaJoAEhpPF5v2",
  "key8": "4WwA25KMUh7XuRNkNBtAxnfbBKBD5zNraCAzqTXE1ry8AMFjYgcQ9YZCmVp9Z7gKpmJTHpJ6isuCYwhdVZ9MHSbm",
  "key9": "64wPFhfa3j9tAP5QPbKfrDbaTxiW8dC3ib4JLp1pevY8EVdKP13tmSERmETZod5TuvdzsH7gJWpXsSXYb7tWzZsY",
  "key10": "3LLXr64rqrXxTF735Ym339tSqXRcy7LXAQsshLKSAuPFVzaRDaDtRfyr5GtiRCnDvRz3K7LL5q4ZwnDiMyoovMoP",
  "key11": "3PSb752ZEgm8cZQzcz4RmpJPPCkVRG7gfKScHWq7X4X9LHhshAHzwzNwCqpxFgxATkiFPRiBXMTWNWbfEmqZd8fV",
  "key12": "31akZXrkhP8YT7NFoktvAgsU72QqdKDPhsyu2xGooymm3MqUe11Yf29pd5zHLv7Yr78aaWy9VNSj21SuiwbDdXL3",
  "key13": "5scbca4skXaNDa2fqFWVjCRmBfwUb3hXHPBbfQCDjo6x5yng6e9uRSSe6vKGbfHvxE5FBbB4QqjtGjveDGRgMinm",
  "key14": "5d24QPerCG68mQJUzULtwYfMaLWruWHBrbfvNTynauZbnLswFXDtVk4t2HxmVxbRtabzvzoJ7PFLpha3Mq9pXGoU",
  "key15": "2wUKajFio3vq3apNuL7debSF8Rd7F3oomzqEsy6jEyBe1AkYanDKyr7qN8RMCUCAs8PempkM3LxxmZ9YK3fjXyi4",
  "key16": "5k4xDU8p4F172B1p6Eo3NgQAC8ERAhZXvScgpLC6ZqptAQ3DBizprDJnDXpgHT1t5RwA9ATpnAYFK9YF1ERxf31v",
  "key17": "32hx2YGcs9cWoghVcXAfsc7cNcGEr13o4wKAnxkZtUDLfEYdhYNSmou4xvCo1tz62uJkxMhWkH7hi2YKDzEFoN7Y",
  "key18": "VGQ3Fd9Vn5P7JVz2Why7LQDurvLaKwpdB7JrKnLYNAQZho3rVBpS1JofUbD9LiryyDWPirbDisRnLAfgeXVYAH1",
  "key19": "2VpUjHUFCvWoN3SLB945V7KgTxDF8MGg7aiq52pwXqURrCUiAz2Tqderf3dCjasPJ34RKGMGQ2NG9k7gjv5Uhh5b",
  "key20": "3XjGF3U9EGKpeq2YvgVxws17ph7ofGJfPn47wtoj7egvSYiZHYY7MXZYGSt8WU5zibi7pnuLkVQFyzk2uA9ELcYL",
  "key21": "2kR2FzzHk4FfVhRa5uwbxWimZnuTvaokjioXtnECFt4r7GiAwKfUgMboFqLmyEBkuqBma2BuTryLuyGMYXk6kA1P",
  "key22": "4FWFbvwJJxvsTYARLJiVb4eByoZfbqcm7PCdDr1nE7BepTEHqZVp6fpGEPaeG5VmYsr76exWJipbM9n8jU6W3dxK",
  "key23": "42Ha34Jwonyc2fRvykPdQmGsb4veyFtiYXT7DJy8GRbTd7eoiXWWia2RQuQV29pmVCqhFbhMbKXMEu2tUAyCxAh8",
  "key24": "4xEkxH9ZyNBUxLefpG3dpxiqtHzJ3YjV1f7ZQy9gugBVhBw4wwF7P7RfcHChYVithhA9X8VCXWS5yRdR8ybQ2N8n",
  "key25": "5T2525LsjA5zJkNmBgA9tmwrV1eVsZkUZstqcZSZpuwhgd2KuM9zahNZRBNEw8j29rNDHP7KdezmAvb5Xpvdy3DE",
  "key26": "4CEXXVoSD41mYijihhPkZKiQMhQyPUdcwmV23TaB1N29Up4f8fd3Z2h3Z3X3mX6os7QJmmaX7HVce7aCAnGFBLC4",
  "key27": "91XnA8NHSC4Q2xrzs4FyUkg2MEcMNgKbGtAeVZteNrAUfJTRJgZ3esmPZMY8Q6fJsMqwRis8w3Ydd1kazztuaTX",
  "key28": "2dqxM3djjyL7RfQ8LkxmuYJSGJtmjGHFsxJB5Uh9WFQUq71vLTDmXJ46jPiJcuurM4DmJon29rCuUyKN7cW3mzfT",
  "key29": "32SwAamy4FB2PdUb3pQkzrz9HRSFn8xwi57M7Hwcf8MNDiYDBcmyVbxrMGz2gk6GuJRXq2g6BGL4LJBN5UkKVPmD",
  "key30": "2s6whpyzNcsoNHm1WxbmwQiBafhEzXGpEjBHNs4h6fu5DrPqnHCCVtLJUGLczMj9Bd6ovh8SUWe9FZ3neGWS64gw",
  "key31": "3Z2ysLXgtKqS1wGaUL12ipxBTGGKCrUYdvYVp64V7bFkFv6h3A7sqJqUc18gYMun3tMprdyf3KoSiPdF9N9gZN9w",
  "key32": "tz6TmXo6BFmTBqWQemj7KUvpNDRLsAFQmNCdVJqSTRU7KLy8EAzaQNvUZkTmCkkcfcANwx8k6tKQXNHjVyj9BEp",
  "key33": "e2adG3cUGTEPHYtZhbXgdBtqDtAwYerewcaEfGGYkx9LVkHnVHB4Az8q1VV7ZbgGZ2w3HuuFfAdvGgQtP34iJ6S",
  "key34": "2rrsS2yRiW7wNaXtwS1LTViNEf5WoaLBjDWnmYjNRN4j3GH4eLx2JpjP5QtWotNE2sqCRYCGLAMJ3QVHW5VN8DH5",
  "key35": "2pRRQA2gXgwhr8S9zy5UaWVj1NMmSK7Bcn1gV16C7fXSVgAmiYAcsVPewZPjRLY5YMBwxE9R1YGCDApSbpvyqNx9"
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
