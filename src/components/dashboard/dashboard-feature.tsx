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
    "25WW1yyHnt7R95G2DgyqjYXfCGoa1KckG5G7Ea9mtc1y9oeVxhhKmcz2WTsjppKwqzivEwLoFBBy2S959UhF7oVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R1dfMsQWpKPLEgiF6odjkVRUYLuidQFYK7VEgKm8Kc6EQxAqZ6Fn4k8JMSy1zb3q561bvthjBRdhS8rV3949Kc9",
  "key1": "5QKU6CWnArA4eUCJaYC8xoyBFRkhDqTz9XzftByrimdmqE9To4CbqC6rVTjz1hnCu6yYZrZWx8VZJpUXWJS3kyPr",
  "key2": "3YXx9npF63dmYSMFJGt4TLPdpP7uFyK8qifcceEdw45T6hX6pv1nDS8LuqHMvnjpPgT5Y7in9LJWC9VF3cEHmTf8",
  "key3": "5GCvqtApXpnyKaikkM9XZLMmaVSF1UhX7pCqsURvnZXTD1MnepQFXas8jZdSqdkC5Hyy6oTfdRsfARzTwApie2Mm",
  "key4": "3nLcTFaSdio3oxqrAMSDTPgfFCWGboJofBj2GmbzXevh4jt87sLswGGsFWFRWuGDPurxGNAegGrD4ZdhVuJXkUf3",
  "key5": "kS5DN2jzZ8UbdkZWV7jLJN9kLWrzByhVShN3hG8bRggTVvqknLJ3m5j1LFE5fKxQVMLB6CZNpaBhDVo9q2yA3xu",
  "key6": "5CHsm2g3hNCj8ERzgBrX7MjLRvejd4Rs7s7up9rqyJggWEuUoYn5AhKTqGASkrfzvZr6gbX2Q7EouBtqVFCJQuRn",
  "key7": "5UBKzUz4p3KUaL1wXX5CYDYxdvCD9Gj5GF5P2RLekRQAmJxLBRMt7kwHTUiiNFMuZN9k83hAQSdbXMUn6aW2NTbf",
  "key8": "5R5M9mhLGXCSCyd9Z7MdA9f6LYZMdGFSrj9A3sqipLPAfazXBiaqPdNf1GiJbFQupHknD86pza5qv8LjD86FxV1y",
  "key9": "5zPyyJwM1BHa3vdTV6Vc6ZgX6vx73YzwqM6pXk5xpj2euccsy2BMidoHAoXHj4pQv62yg5RAKE7xetcRKp6WMRjJ",
  "key10": "5JrhNn2fES1dkGnHtPgJshSa14ifw2CbLdeznAvbXDrLsygrrprMnxadankdwzymZq11pCiHnV8JTGNnTS8saFzL",
  "key11": "TGAqvPbnvchidujJMYSTfTXdpWp9EV4KcXK8tqDJ31LKuKX4bZyfh7B9sVQmJ4d7CDbmiwoXyEwTwpDaaQztdBu",
  "key12": "kLiKapsmpB7eT7fo5TsMuWLna2z9j4AgVH9Eddax8a2PsKARweJohdCki6GscgiaLYmdfHwan4NoHURPupLtfDY",
  "key13": "61vNKtY1Bej9Cv2rKn2Xxo68YKX5Bvv7B5TxLwE8kCYx9BHLUhfTQ5vB7i4dVJGsrcR2yhYgTKrnCt7VBx2jeRAq",
  "key14": "4kX6usnYAh6QD2eMaJKyZigW33zKUD2sgEGpQt75k7seXAKBsfo6GLNVni12nDRAyuzcj6EqHqGgEHfVSbfH5Bua",
  "key15": "2KMhn3mNiUzM487eh9vYPYoL9MwGzUrXiFo3j9zf3z17Th3Jv4Qg8ruVDqoSqx4PdEKoNrgH5ha9s7nPAtaLw8JS",
  "key16": "D1EtafbmbQB4tm3eyHrD5TZc5ruKBqC2hJDufbYEgLyzaUBmqckBVwvChFAMZyx2zpxzUivTaPJcCZkAvP1QPDq",
  "key17": "5G3HY6ciFEovJD9ghcwrhnxswXmPdG53HDvfJCRwfKoKRXj5Pz2hdjoTvJFVSgav45hsgwkUvUz2qJYgypwQzHm4",
  "key18": "2dZ2vRyYFBhe2mFxMzBCeAYtepTfoqU9LeB8qiwQoePPZ7nBrZPnwNMMq9fWhiLQBxCteRtenx26rCJW9iu4cM7r",
  "key19": "36vJV21SdSsFX4a9WhPd6J3Ev4BTWi5jQvczMbKqUbV2TQBFQm831U1mLPiSegjzEnAy6PfcisouLPqTqAdnWtfa",
  "key20": "4Dw3VsBCCk3rejNwH6Kef471Spsger99EthjHUfgoPkRAa1ytkFGhL95QA8ZkttVqwnzxM2tas5NHiExGqcX6zty",
  "key21": "n6Gce3o2jvCJoAvHzLeW8YzKJnP34tBMwdeLwUeFCGUpoCAaMbVZbDV1BX56d4bWoc7gnwSW11ooZM6SYat4wk6",
  "key22": "4eey1aczf5ozTw3ig2FbJLM9Hi3upWjpych39ehDhdczuDginLrUwYB4EYh78UyDGPfgys8X5ZBa1FQXxp1uBEor",
  "key23": "3pJWmUtSHVEHWRETPKiD12af4ok6SpcSR4h49SBpdVBwFAc7WuLHr9t179NP6JpiRmvHvidinqCw6KsMqCuo9B9y",
  "key24": "5rDLTDRMyZYHnHbAkux3HeVQKcwHBTvKWN9E39HuCrUt7mB55SHXF3J7Kqc9pc1sgXC5FHwWLp1Au57s1Uthw17z",
  "key25": "vYiAfEkANNBtuPPRiLR3t4RYKExbXKBidtn8bgmRz4Nm2qvmit49NXS67aDSsuoDYgB7P4N26x6HXr4HdXLMZh2",
  "key26": "2oe2BFQh3uKrL9WL68qSDMhGajWfp8GEiecppzYqbmw3GhKoukZv7huLKnWuEhYTMNcNHgKbSSyvLqNjo2MPs6bE",
  "key27": "4sj7S4ePFJ27W2HkYgobCvvNGw6jBUSssZaCCA4HhmxXscyELBdvfYgPgznCRaZdeMCbddVx5ceweMiXrHqP4dZD",
  "key28": "2HdwcDrpQqnkqkbztpDQknZvMw2yR39yJ4GCGt7TdmsNc3g9cmDJNutN6bFzZrqPtJEW9PFXibnb7qQbnkbLSPKT",
  "key29": "VNyNCdRXfPSmoQwX71mJ1uqi2vo15iKMoqPByq6BXtomt2MAndAPPYzZWsms3isQvrhUSgKdwUq3gdj4N3zQjuU",
  "key30": "3XSGS4C4Ns943bnaJd4LKYzSqaiswaDAcE8ijxkuywXFv1he57pDXcog58W8PMGf6i6EaEjf9t16neDhK8Uk7RJw",
  "key31": "aWRZrhgRo55eF59RTozdGjc2oKUnizhtvGkH3whsDo5mJe6aeoyiWEQ1xEDmhBV8F3MBxRzpfo5Kr5ZdiyDmpMC"
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
