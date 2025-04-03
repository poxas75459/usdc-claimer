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
    "3LwGChCimgpxpUYL2QeQeHz1h6zH3MPfUE6rXVk3PZCw7yT6LX5899VZhE2WHXuyEEqhgFiNGZrispAgGMRd8fMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ubE8xdzj2tXMWXAoF6LG1mTFEotD4J8JF1JDvhmqUUaz2i7k2D5jTDPwRKCkUiaYu9j4eoXh6MVqJ3dsWpNT2ep",
  "key1": "E4S1NYwMGLWHjPSCjLbFUx64y4KqcPPnByvaH3PT2LAag1rMW8JmUTbUoDgJ11m7BLjbyFAkJntAc15jXuFKmdZ",
  "key2": "2LuLG1sFGyAuSGCGes9iArzsr86hQxFpcyXx7kfFGAUsciPXLHSeKi7iyHwVZDcMAwbduiUhugEhJtPWmEECMPVT",
  "key3": "2frzu6DAb6rksQuaatTkvXJLZpiGVYkVJEsC6ABdPGXMbjK1XbqUMqFoGTLXjh42ZaoSuG9u4sotDU4HitMruyj",
  "key4": "5hUBS5cHbKA8PrDxbMexxPdFsz5qsQzKaVe4VR6JSHhFugQEY76hU4auUKXSY8bwLbnrLW3XQQer4rUDDXmwwhv8",
  "key5": "39J2pPymnThLVEePG7VyC4y8qUw4fjE71Cd8UHWQ18ZUdUVWbTWz3soewFLKGDcbv5HE4kX3trtVTzcwkxWi5twX",
  "key6": "49mAhAQnVc1bm3396GNZ914RMKDRWZG9NzVB3B7Qet9Dq5DYZg7Vmy8sXEjoznd3UyqxXko3rH8M8MhzH3bM2AQV",
  "key7": "3zjUAWaEreJdpnGJqDVfTq6EUGuU53XLjWdh7E1AYuYubmyL1Qx8nRNcwF57XJR2hnks7mhfhTS2B4TA1ommLBK9",
  "key8": "R9LKciSZ1BVvkorfzVYbJKoSnpa3ATTcKyDuQJz15f75sZrhHEsameCAgxNCSAMfdmjLKSReE5VZK7nBGE3gxMu",
  "key9": "5f4c7BZ8QcCA2XDiuNWzDuEDdpEp5gZV5Q7LcTMtSa42g8SfstVkk9tLJnABbwGwEYXXXM6nwY5QkvoeL23AokFi",
  "key10": "5gYaYApUsBjorJA2b5teQU53bqXHDLmC1cYJhLYoHzHjkw8dk26ewYez6iabe7QNS5HB7nxX4pZj3neoUXF2sQx6",
  "key11": "t8Gdv4PCqG34PwozjVGW92G2cFwqE5cB7A9fwDqAN7AnCR1DYYwQnb6D57TV4Cu4TmLdPo2ruhPqe4KVEP9ZE8u",
  "key12": "3EM7uTNNcufYNpDevB3WZgcaWZmG2RJ8Xt7acmnDaRgPXnFb9wf2vxLKENC49a8ssuV8cQn7Tbg8L4zc1xGeb68E",
  "key13": "5xT4EhMZLuexx7CCzYuTTvsGNGcQDPWAyBLef8PC42EmrTgg7cEudQkHEBqrwEkyhqPbv29Xx1YTCHiFqrYs1DBN",
  "key14": "U7GSuogetKFBkA6PwwtBq3Ku7S4M5VTf1mk8nnGS6dzvkNH6UQ5jTYyvzGyU4877irVdncMuK4YXJJLXmiAhLdJ",
  "key15": "2Xndjer1UtiB28t3EHi6pGcfy876iN4kWUosfs3fPWjbBgjX96YEPjdzhXuaF4MM8TGrbnbqZ1VzVfaQZSYPTqjg",
  "key16": "2PPGsf4FVkxqNjivmkMyyE3fTXz3NFNZBMBxroaQwa3xR4SMY7GbouHnphYs2UVJ1jJyjkS8qfnNrPpkA1vmD1Ca",
  "key17": "rBsEVJqELwiZGELj1PrkL9hBeoZL8H1e542dJVJrFLHsmXrz9oSr8E6VPhSQ67LGmBTLPnUVpL9B49jABpmEGFF",
  "key18": "2YMuZuyUiSB4f95CF5F78BMdzq2yBMnSAo4oK4mcWKoWYvYqz1zcS4pRxFDoKcceW147g39zapvGjo5vmT6EKUGX",
  "key19": "3ssT5LAQ6LqVQWz57otNPJBvkDP1efbDZoHXSnyNU7hrV7PepVgJ62dKH9v8FqMQAysBkFcPoEUTsZ4ADxEw1YPx",
  "key20": "4Wy248MtCdhfLDnUr4e8B1XGUVKqMw6ZyWc4qrPon9eeUjuNXUhQ2anRTvFUJo9zRiSDRqjTEfzotMxoUq9sPQSc",
  "key21": "3fcWMv92UbAJDiFa1S7YVLKGv7hjeHPxCwKbNcuwm3dfRF7xg3UqCGyBKyUMkoc9ostemDa5dBYW4B9tM7jLty2H",
  "key22": "58fjbXqM1L9wCw3XhJL8nVw2g85bzTtPNh8RM5Tr9DwscRbPxR4UAMpijNUNHWPogMhTRhHEdqAkpK4mZgpu7m5",
  "key23": "64XB9L9jotKrWRakcsT8WK6ibJwtjB1fmB2EXqCon2v8UwMCpuymRsWmVU6xXR9gTcfE3GAm9MJRKKsWS42HLVu6",
  "key24": "5fNmux9H7Q6A6YqHrEu7boKNxj3ASsedKdFatL7pqUxSykXEQhXEmakCP7co4ASNfg1G9KVe1EhvspNRs2ph5xQk",
  "key25": "5kgu112VgUKvVsPdb2VAqhanLkA2VUEWcfLqTVJRAEYVcRzM8DgLfqi9apWLqR7tUPnZKKrByYE1rpv6NDB6Jaq7"
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
