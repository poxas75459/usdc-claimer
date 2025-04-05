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
    "67qmfmh92Kk9EQJiKyGNgzgeZLzZpPpoNLPsLRCp2rugC8AQmEGev5RPsA2PkEZzyEcLWWZTg68pdnV9fJ3qorxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kwXUc25XHoMn2dhGwjctMVXYcpeATuL5PrNMEt1yKyEVnrMex7NxjkFwH5xRgmyF7NytZBY1bZJXycErJksYWrX",
  "key1": "45bLKS5ksuyauKvkaMdQSxbuHpGik2GbsynQDzhqQNk4NwXjipPLuiinkPe9J1aj5493Pg7EpRbaTgMKHqz69wvD",
  "key2": "3pEKKy724buTkrsWjvXZpokK8hazfFFBdyFx1dKasEr8iqid7TpURKakdk6256nuDrhq9kyC78QQpASYWQD22tww",
  "key3": "3Jvw1afe9APKjcYmHimvYpDQKsX9a4vh7KX4Eyw4yQ4cVSQ1VMGnWpuouDNWdZWkSsJ2ZBWyfMvJPRMvMynCQ7W1",
  "key4": "66TToB98sy7nszasawnnUwk8hBaoeFAL525oXMQTYYvYh5bV9QTSb6XPZNHfgjTG2gcoFamoK2x6mAMKomsfT9vL",
  "key5": "4Y88BQfq5sKBuoZQoo1uyRmrcoatfUYpWYYiTasg5Dwc4DjXd7zwioZwfNHV1MxqcFA8CpnZYhmugmV9M91A5jS7",
  "key6": "5eX4xf9wvR1xox4S7Q9S8b6cPRcHLxH7PtGXijzD5yF4veLs4qhgS6Zb3NpX93fZo7hwV38HGYsFKpiKbfop7vxh",
  "key7": "4s3H3KM3zPuLKLarkTkseYa1KTGo4Jyg8goGQnZHftWwA7w7fyrbuhQaQSQ4ofTZo1VqW9TBKXAmv9ZteStzzFK3",
  "key8": "3HFpFGUcjkB2h2Fa68s8Sv9i2AW3eVpAmCkuZK32wWfvoQfrTFRem9uRKvaA5VCwWPj3mTTLDoBaPTNpLHN7C6DA",
  "key9": "5QSpAquwxt6xqszy68K9VpDM84o3XDSyxw8hyaNprwMy8NSjzm4v28qD5HkhCF6crJUCetUsxxVKivuRj4GwSKAy",
  "key10": "5pzqNL1YgfpSTvsfRr1CkZvuTLWViQ2dUoNPXJoGT797QCEmKZyg6XaC3tGQBvi4hhMPQupMY2zeu8EBuHeTB5dE",
  "key11": "4QJFG7wxtBXvvmafTxPrsh2dxagpWSRwV7BfopPWZNXWT85huaeUDU5bPZkCwNrUehenAMEYZYNrt9hUo4NUHpMk",
  "key12": "bgwHGavTpHim9wk1yqjo4kxuK72SrCqosqPqJ1NWVZTvU7k5VcmFKnc3PqpXaAQyNSvvSv6L84TdFt6CDkGJAod",
  "key13": "KJdWwUQM1P2bqtEtJLEdxV9bgCtzj4NNv5CgaJjgAAHHFMssYmqSP1jiSKuCSAKtwV43tpvUtF1VXx7nKYhA4v5",
  "key14": "ZF8ZS5xhres5aUTFpHcpxGW1qwfmkfj8PWu7ZZYmzi5peK6Bx74AkVJFarMarP2YzdqZ4PXX6e61QzJCzKgXihv",
  "key15": "bLWaK3NRacRzoNtDkUa1x6r6hKwPR1uusrCEB9iTMwBwtm1P662zdpyZs1MvmJYX9kP1a3LKtxtKCaFLMLGEMmf",
  "key16": "4Ek4zxhgXUCtU1LCBoTctgWjw3UvM8WxSRFUzRHuLYmyUuJaHvmg1qLB4ysGhVeDbkcAvgXKcJvyp2fwRrs6KioS",
  "key17": "Pim99ZNMqm7m9KX8MqdwFJos4zswZjLnaKCEhpJU8qCNTEfusCy76NnN4eHdHK8jAFRSh9pocCneG9oZdHF5gLy",
  "key18": "5BHgN4Z2GUgL9M7sgyrqhU7EJJZaWCDNTyB5A5Pjpkc1gFi6ij8SyikpCRjWJ9yrv326JoQ13xT9SddLQg5wx2kk",
  "key19": "2fKY9fh9oY67Jt1urwH717VfVdfH5vu7vLNLppixKVjuQxyixcnoReAUubVShha8YEEUPnyCKfhxWZYrHycrK4ay",
  "key20": "sQ7hqzPZCGWZyEMkKUGjEjSimFzVBWRQm2dGsFgAsYjK9ENmDLEUoyBUHUhyacGwo5wQG2qFzP5HML1yoARenKD",
  "key21": "37p3YBtHMNc5uJhj7AcpBgg2o4T9hKacZJiv8NBcxfm9jLx9dXKqgLX35j86z8iCLNhZ6ftuggQSQdPXoBWStzh3",
  "key22": "5jyXzsBHGHWuXZeJFKejVmcB9gtbavZxmra7uEFiQ7EveKsGDxYYWnvF89Sp8EDabquKEU28YKHtJpEckFc5BAuX",
  "key23": "56zWNADNKRn1bBqELGLRkCompbKsqZShCUV7sTFDibmH4wyt7muiVbQVTPQyaZwwVjBMgzZFdKwe2ZUdkVy5U7Ct",
  "key24": "UyVQTY9PAMw8AdnCradp4TKjY3uUX7bbL6Bdnkh3ajueAte7KB913M2GrPLm79FX8tvBeoa6obrvFUAUCsWoui4",
  "key25": "22DY8L4pokZGwdAetyNx1rAvDayKhN8MsK6LFMr9jUp5XXaVrLJeLxP41hRaLKnFc3WEAuB3THX6zWpThXo9JNF5",
  "key26": "3xmhYtgYjztFjAYmBYv4vf2PdzzuyiS9rbboYmwDeY4CE9iuTQHBPss6iY9yJnTHQYDbTigMgEqNQT161qK55akY",
  "key27": "5G1grHJZexFKmvQVfT76eTCtTLH2YmJzuYUuuWwf1JBBumVtQCrGouvHUbhpsVCTYjKoscScuPTdbChRGa6n35gE",
  "key28": "BwTu3Lx6BskGMg5GYc8mqNhFendxcamo9cAnboqavUhz9BNNGZvtBXyNDfwpePivyptKZbqGDVGogUi6TptJd4X",
  "key29": "3qkAY1bkGwPbosXiZ2kCPy9PYcKQkSNxEqB4bem2ipLSE3kRkrmeZnx8p23UgPh8AhYwnMNEiCF2jmFjMiqCfDuP"
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
