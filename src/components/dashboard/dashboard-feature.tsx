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
    "5n5yrtGnboqJskHdFq4URtZ2e6n6X9aiw9zPD1CE4rAwprF2cFYB3jJTFdGXT3bZ7ig2nCtfqGsNtKYkXbXp1iaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UPA4jVzFpXvapR8bmvMwCs4B2eEDKPhWXrRgJWGpggsyJfmk38EKzrjMt1y8ufCZMhFcktvkp4oLnssPhXTbXNm",
  "key1": "27hAespN9GvqfKaniaFaXmiwosNeB9fxCSgJmdyf31a39RdeFcBwHG5YU7juppvh4Jeh3ssgSviYaPUHwk8WABze",
  "key2": "fU6cBB1Tw3XoETHZnyPpnoH99ExwL8kgEBUebv8ddLkLbYAw6U3r5U39ZbPrZr6HLqEkNNxKZS9StXCp5a2po7M",
  "key3": "4eT5tsVfZMajQrJPtrxEoGYJfFotUN2cBCkqCRjydv8FXGv2MtmD9ZWGtDSb5h2VKxfNBNSPMdJwXBg8cUwFyXSZ",
  "key4": "FFJy23DuUBfHJ7DTRCc3t291A7kwhifBYuj2seCcMPZZRmk1NjekmLSN9BaHEjaHtdAd6zaLM9Y1Cev2jGX8Gq3",
  "key5": "56nyFRJo8VCPTLWH4cBuNbyLx2XbavuozpRWdqWHWayoWvo5X7i9n4SFP56kbzb4JfNasRFpuVZFVU9RbHTAL1yA",
  "key6": "3P97PicqTPK6jL6vAhumzozaSkZXZsPoiHGxgUNyQv2iMqzoWTxfMDWxzFo81YAqA38kim8qSFevqL97oaujJBS7",
  "key7": "2VuN11589Bq3vbP9prSyzWjoFxpp71D9SdVPDpXUeJHstvKMFfnkWGEpTKNfDAFjT4688R89kd28eQbv5zT2kDUP",
  "key8": "21EV1ZzPFt7WTvnRWdxbsmU5FJ8CAjRojrvw7t6p7TQSdatM5BBDtZ4cjNXSoGrdAzvbH2Y3iPfQMWoDDwXTEDHa",
  "key9": "DcFW2qxL7GsBHmoEccgiCSPgVsp3gDc1u4qjT2MiuNV1X4EqV2LuxXaL1Rg1J2VzvFouPHcCEQs9eDtSJZfmnJ6",
  "key10": "59C3ccR4Tgj7R7mjVcs8gpo7D8fWfj8KCGMbR22Q5GRZJxSnhabsLYNPi4ygtbwbFaL8zTkEsWYcMAzMkJAHuMjz",
  "key11": "51sWdLko9c5kSv5NLW1LbKHpU8bqFmzeN3DERwvzTeAwFDsXvQiGD1edRHQUxJRZg5gKFFkZbwvu5fDUBLwPBL2Z",
  "key12": "2QwWpTwjJTqo1V6jyMyxWboSyagapwRRMtQcePzJK6FRCgE9mhY6rLSKvkFLaqmbt8cLS5vqaDWog3R4bye8GDsG",
  "key13": "5m182wQsuVwALSeAiVHnhAGG2ocg9T39CpqEzmeVVwegyYVXAZa2hTWsudtT7XDwGgbXNJtvvSuZFaMrDu2YBY7x",
  "key14": "2Heu4AqYiXx27idimS3YtVNYqAFj95y8G7vsVQcAXASYAZwNi8hRKGpiPt6edQJN6NfXeEah6WXEP3yqskSyphzr",
  "key15": "48j7cyhh2btHHDoUsQpu9mimSYH41Mz6B2RrTtY9RqeM3wmt6BZyQQYzpBYgq4YHW9yZWH8Zxrw9g6f15Mss5wuH",
  "key16": "3nmsNQe8uwPAQ3vbc3jZw2PXfZmnRfbN6nqEyVgFrXyZBX6K1ppU2HsZHtiufP7uC7cryYxrEqfpVquR1bM9VVh4",
  "key17": "35ffqm4ixaswMjTviWAJeqPSexbRAR5GPSaGXx2U62C4kxYF25KQJUxvsu9kCiggZhXL9jADHTaX9NQ9gpAHq2oM",
  "key18": "5WMMvedSJ3hJA1Aq4By9WTbw5Mf4grMCvc91G6ENo2cMZ4EQ9RF7mkFEqj4TcJ5yBiYgSMFkdPgJsB3SZajXmK2a",
  "key19": "4kxcjFaSGsJ5Lh2Vshm4YBFziUKRUFb5sxNtrK5CchK7nLLi27eoDLLucWBzdd5UfKtFqyyQCriSpNeiDEVDQ2PU",
  "key20": "23Ye6wqMQso4ensGuE9w1G2XzDWgM8mx4XUg9xXoR33Um25X347FScfe8RMxUJ4uTJoDJ8JBtrG2DiwW4RFmgoqF",
  "key21": "46386euaaRYrtfgjJjnbmawMv9sHJLEXSXfSYZvDueZsJxqczuvffZN1hbic7gAJehGdQXmFbZMtUbdb9vaKP9v3",
  "key22": "9NgtGUAKVqux8KTJ8hPJHn5rhpBJwvkS5Td48sjVDPiT7ZQVMiPRawU2fZMA8oG9Y75fvzUxy9JJGgWHGi5ndki",
  "key23": "16VtkkGFqx13p1dqEBYxpmU5YCKVqZAXGoNdArkzUhFvqNbKuz9K5yJu7nJ3FeR238xjTBBhkEXS7XVN873wH6v",
  "key24": "3iKHvYsMsDrRD87vNQD4U14VwvExgq2BWBC9S6MFArdNmXosHzb1pepCAi3Di9VYbxqcEZCXgijkBM5QiMzniKBr",
  "key25": "K9nbq4LJ3tDVZxbR1ofEsXz6h6S9erbKxUqfkVq5i6XybCoW4TMzYZNSo8wmKK4mUx4CQ773U7ZvpigMzhnR53S",
  "key26": "5fGTeH5BtYFBdnmf6dh9MSUR84LqkVK2e5hCwAdcEd893WBqSAvXRovPLEZGhmKdDaDaQToBp1JTT14N2iwzUK9M",
  "key27": "27PM7oU7rzY6uKU8xL2d4P5an4tcDRDsHxkBJQ65TC34Y2PR3C1ZEMP3E1W3dQjpobDEcr4cKoxMDLiv5wCeuz7v",
  "key28": "3GvJKDgSTwFST4hYAY3ssXZ8BgYeMi2fKbosQmNHEgerpUxpBzoHHHMW4jw9m6vUkssoJAs5RxkDwefCV6K8jnkj"
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
