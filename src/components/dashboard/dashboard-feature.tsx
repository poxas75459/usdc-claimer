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
    "RwwVm11cbRDHuEhfSnecPQrTjXf8hR6fHyeo6Wr6WMYJx4rgWTRunwxbZAhAtQaRZmi6U3niM8dvrd3rfeWyuM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w3kB8HTdGYVmie8CnW3nEBvctMgEv54UUnyuCCxqvqFUSvgur49GYktTCEConeSVpdaCwPS6VEREGTFZiAp25S3",
  "key1": "j6VXKnz7oEWxttgYEcknC5D97hJ4PfDewGwFBqtNyTUMcp2PqKWVpmPxwF4sea2QCgGutqgDGhwXDrzkEyc6K6t",
  "key2": "2ThxEm3E2ZwG9mLVxM2ku64LZDuHuDNPkngkUv7DJDXdZhwpVHU3QV5CcFX88tbn9xANb1pydmKhFKyPEQXNxj1N",
  "key3": "4zVm92NycnoiwBafd9cZYijMMPxEMtx59uW45PfCs3NwEihWC1r7uSUP8X9feFJ4qPZzY1vEbeXc2HzjVi9ESjp6",
  "key4": "2UjzCRWAkkXpyVskKsPKdoxHvSjwBw9d6T29d2d9fQTqypW3S86u9ytsF4DYJbbRttr1opnhNfZ6KHKg689oEaJM",
  "key5": "2dJuhQX2EqYAEiDWXKrxQqvYVhHZiWDeWXAeGrPR2zKdZHfDiMEKf5nLu9z3qVndBczb3BjYX4ChF2rqsmdV1xV",
  "key6": "2xoEJatH9zcEKwHm8jszo8mDKKF4fczMwaqP9tDJLDybQ5na6zqvpJitp7QEojH36exy3hJfFS7yU6CmozFwvimF",
  "key7": "5YdVucnMQt86zeNu6kWkv4sYRSia5N2fFoUw6zLsbW5BCQotsN5yvNqsu3PwY3iPaGUvCXNtux6eL2v7Kzt4jabE",
  "key8": "3GR8Exo58piUHBCLzroeRFzS76wVeVE1SQh8qXXVEMNLXtEftsuCG5diiXw3UnRwSNSUk5ANj3bnAfg9g3PbTgyt",
  "key9": "4vcb2gMnaE7BPDczz44NYjzngZ4i9jhSpwp4rq1qSia7TbUtuK5dCCivezhMVS9c86kM6MCvGnmAtRy3YSho5gi",
  "key10": "5Z5gA81asPtrPcs4jayW895Z6A4b8TpDUytuxAzKkGT1EGqbq163WLFDD1dgQiDTdS1zfeLsSb9MLfJzgKN8JDnv",
  "key11": "372oqhfY25Tfey3fXAE7WWKPYtW25Ra2hvFQQVqKx5HQk4K5ARAMJ8vNeM5aew6uCXUUJsnkNB4LTMrBBcv2smM7",
  "key12": "2FNGmBwE9KZQX6zDVKgNDGGsmiVvi2saC8jJcjKxVcYyPF8yVr9ypxr14CpKpFy1xp75YbRkqETz9bmKTv7yDErk",
  "key13": "2r8GjidxWbXua5mVMX4rw1w8uCManpFkSpYXeJ7j95mFtN1mGc7UPwXVnjaHg1ujFSwC8ioPzXTiiK4YKJ6Hsd8p",
  "key14": "4giKHhWHjyPbT3NyzLUs79xckr2TSAhCSgArD2XeSxvpJnDDviPQthef581t5WUU1jVfAERTWXe8gin2TjNMV3Mw",
  "key15": "4znMKAdSm8ZuJYGvd4kGYxbHxzaXS9VVviqUYyXWCciYe8R5EZFi95ykDfh1CjEPtbyoh3HD9nqVBRZJFV9uVhZ4",
  "key16": "4EpE7uDrtZyPE4zpK78J47HsVFeX1hNXdh1bte2C5YJCnnPJj1vVRgNXAZN1jmGuRvNpzw46vDNxdafgXSGaXkCK",
  "key17": "3ZTLPsfFgfuZw5qqjLUorD9TueHFRCX5HfWkprqjDB7ZDo5a74vXVxxq765vnmjnQ5BjoMnsePpXs4nBbqVbANCR",
  "key18": "335C2JKcymKQthdU2kGNzkNiAPWbuHC6C4pn6sX5f7cB72gFbw5Q43mgPEXY6na6Vc1KsBePBkYKW4oPFRw1CjY8",
  "key19": "xDSe9kZRiWNGuDxhfa7tP6to42xCeB7p7qHtAGBpR17j7eFBuypQCxW43KoyAo2r9zybW3LwT9FFUEWuCJ7BNz9",
  "key20": "2kuogMB1CQEhNfKEqJPeJXk2fyNw5PJfBQBd326mE8ajGN6sKqCBrhW48mADPmfuEQzofRJzKQ9BqjBjo19R9BAW",
  "key21": "NHxNJgrZdeUmz8CcExo4ps6vuF9rHM7bRm1co5fdTUmsBaDoeEirpMz59rJ6ve2Y5X5T8v2e9yXTVnVP76detvA",
  "key22": "5DooLVCTEMmJxGZB1un22tW9EYn9zZmtRWe32N8jqzZ9RDvHJwA3CYCSNYiMBXhADH9qQtQccUzBb8zMX1jv5Tro",
  "key23": "5ESLx4gpcP6ZqYxCKBYojcQ5JW6WL9zrLF9VW63Sgf6cqvqohz9RFTvMewb6jhYeAVuK716dFo1sN6e9bAd1SD6T",
  "key24": "vhboBGR8AHQ8WC2eFhP9WPqYMWEwor1vzAhRkqESMFJn5KoPQA6Sdmrz1rfDo9avQr4qzB69NVp42j2sYRUG78K",
  "key25": "S3CKciyiAkr8BLRgL3EngXJXhnR7XpygcYAvhbNfCVSxRGDyBQDTKpdaNaEogF8TxVV3wByJ74ZEfBvzmc1BGbL",
  "key26": "3HZpC38F6iV3vjirR2Qws72TNRVb18jdQe5ErTPD677T8UqJxup9pyeGfEkhLcQEUBwnGTMzEpthhimvmCLYn2Tt",
  "key27": "4aZz74GdGXwjRQVFe9QeHmAvfUfNVpJAsbMns8snYGjKSWZbTHXtvcbgk7DssUtywKq9bw4YHryWQLaW5FfMamJ2",
  "key28": "5F4Y2jq9JSaG7ytfCTGREKCW1F829nQHGq1TUix28f9XrNbbBMCX4oFyhFsoYbjijAtNw9148aVW62VZkpiQuenM"
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
