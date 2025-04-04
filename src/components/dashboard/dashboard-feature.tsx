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
    "3ksRhBQFuBP641GCdrtZtkqg1YAtSG37d1Jh8yo5cvHnb3Yrp6Mp6VmkP2b3iUmmyG8PuPixF5AZ56v8gbUQdjoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jnbj3CcB9qRnJPCoYk6KVKQZeYHXZWwmTqa93d93QqZntgsy99KkVLuH3aK7S2vrGBFVJzLEsz12SpTFnxp28Gu",
  "key1": "2Fz2u8GN4v3AyW8LFsnyK6L5m38BY9zoLBTrcUtbVTeTaWxJ1gmTvzzkCKV4KgSgayssXNkbJS3ueKu4XaZvfkA1",
  "key2": "4LEwxx8HmcE82coYQvDBfUNMDpxWcFmJxhityYghyUF4NUQZQ3Tu8eG1PS2r2DnGxgGCZuNadYvQ3eXvPtGZ3WWx",
  "key3": "2FHwstYG6E9HTqYxctdwUBAuLoiRbHBGy6pcZo3kbLKCgfbdupXEviSDb1dU1bkRFYeh9XQu7iGefECecznrBNv4",
  "key4": "3hF5f23Ltz86BfSXFyX7rGd462jVqKgsuJCAdciJqmDdWbQq9MrQdMJgfwqZNq8z4GMQgye87j1qYXHZzBjxhPP6",
  "key5": "5KZLnfZL6ebpxJ2abiuxJ3sR79ZBxyHxmMoodQnvRUo8JwF5GXcTjBuE7sxCK2fjDnkHbYrRpMmxM5iaZxgSwag3",
  "key6": "zKRUVCjmAhbuy4BHLCvKzrm2Yqin8uNg2xSWsxGP2LFTJ5xAcm1CG4jtNVmBvaHzdMRAKDkR1zNu4nG7abDvnGF",
  "key7": "2bMssg6yZngPBEXpT5eUmMjecizotkrMHKnFEamNYagTxkaoUjgYve4nKyRoJMBDjTNMBukZfNyLjVDqCzxzT2ij",
  "key8": "22AeksG6zGkJpngek5FGtjTBD52XafAgiaQ6rdiAuFoairJ1okaF5ZG3riHBPWU8nVUrRMGEbdpjSp19FjLVWS2q",
  "key9": "4T4YTbMXpE8xjFN5Pv2tfL5Soc9Wy64JvQaSaYQaNmH1aySfjdfbsqCk7GmSm4tfLthXRPyUPcGzn9KJtEo7oTz3",
  "key10": "3SFHB6AJSogo3BJMWSJ7np2r3mv1epQAxWJ6pmXDVCR8UWKSn1xruysCiJ4pnotsY6yaWwwjP38yym2xK1h7dE5u",
  "key11": "27Lt3jzddmMjujCLstT77gpqjjuR3nWYV5HVFwVsynss63vbuurnh2YDDDLq6jf7jp95HxT8TodACd5mNZXDJ6MU",
  "key12": "p7jVRuu4EwF1SPJpmPd3r2A2snLMw1FuJsfEUUtpqACBX3uw5T3f9z3tdHh69JAGjCZaHrQdrG6aNKVR9HGfPZh",
  "key13": "2fAj6tNuLszuQk7BweVUYFduuKsd6z9dEmA3ogzPQ9VkEzmHYo9MZ6xacFz3D9AvNjJtczZBH5BnCvv2oBSd8ngR",
  "key14": "4zAg8BrL45MFBp5tbCyFkqjkDf9ee8c7TG3sfY7BnZwnHca1CoMaCqHWtxHhKd5yQuJSa2S9BB6PjisGqNUzK56y",
  "key15": "3qciwkwV37EzZZ4RGemr3Wq7cyf7EpJKoMm3DeBQxJSvzJrtQHuTgLi18t7kwzVVeED7CHeeFwv5Mx6sXpmxGsy9",
  "key16": "4YUNdEm2vs91TdQr9Wv1ypy7CzjLUTf9RqUC31gax7k97QMUt73GgjBAgFXf9SvoQtJn5mRaFCb3FTNDcXhWmLsd",
  "key17": "5WnYYD9tm961L8n9qzGQRXwYKQRfBwiW3FuivPTMWZnSYfYFY4XQ6jojPH9FSpWo9qCwsADaJ5z9hjFRYUEtB5br",
  "key18": "5zRLeUQMbu5pbovpP3NtVR62A2RcU4QFNwHaUNLdXD4JvX78NGy7d1TaaBFKTn1CCysDfjWfTZ9LEYoN2wqHsX7N",
  "key19": "5jP3jWizGLCjUHmkx3HVHs6nyUvBfuMnG9m4yZUZAwoqkjBqF3LgJyYFux2wAEBdQmUL7E5xrXjsr3rR6PEZ1tkw",
  "key20": "4QK4gx7Gdb51NsnE3jg7WBqvs6h2KFmfksAxEHbJV3yguGa3LgcFpCb4W1SergqS1tHRaCusHAXztucPbCyRBAw2",
  "key21": "3LgkBNicTb5FTBEufGt8gxAMHNWy6ajsGyWboEw4QJtEuFKAnhW9K9Y8Ta52zpBeHY317TWe9xGLtTr6naEJvE1c",
  "key22": "J6AvfbSzkxThH55YBggvdDrhxrD7BwKcFY5U4WLg8kdd5DkX86xmL7z7yVorwpUJ1PttXuToPiFmSpuUUszJEYP",
  "key23": "4bwB8dBHFtUoRea7My95LibYdgLMz61jTYhVM1qcRKA2JrmPiGoEaWnzycYChvz6AwTqwutRuXAMrgbbmNpDUD93",
  "key24": "4bijpVgVGsEVrBdPQvM9iMfkECzC1yRLnQqxHTLq1DPLrPSW1N2NnJ9S6yYVvuFJxckvtxFLpPN3n2ZWXEvx9Rk8"
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
