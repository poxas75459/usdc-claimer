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
    "2wdv3hBW7F7rCAuv2rkLNHuPPfSmUwu4kypaqaWtiaMyaHGMZgq1oTsfEdfawvehS45eNgNdRRbWhJxv4d2BvMmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vGdJUS9d2SrWyarqszfeQUTbdxsU3TdeMvadbm3uVEJHV1tZ1miEyFSu6f6PQf7ZfALgXsFahoh4mu61DM2gnuC",
  "key1": "3vg7BhcbKwugkvUs8d5AjqRpPhA3sJiGhsDRPn6LwRT26YdGderTEyouoHYM9daaUNYh2tZ5VZtVX9FBiBQuH1sK",
  "key2": "5dQMMXnZCdBiCSQuniDWosshMCSYjF1FhUs5ve2WuBUD1u51Az3scYkTGNzQaVZP8NnetejjuCHAU6CsehEd6ZAf",
  "key3": "53rsfodFxtYDWpk8gcndXqizX65T6nRPd47NpwkBcr44SnkgdxWhgVNGFXVVqrb8K7RX4McVAQa1t9nYRhFMnJrE",
  "key4": "5Tmd2Hb9aorFZEWihWeGV1Yhr3WWSJBacvsfqfWh1GGVCZFRMvgLg8W6jZbf97Ni2ExUKJ4DJWxbE4VH3tXL8s5u",
  "key5": "3eNPYxaru6Yp2HQU3gN8kTDgDAsB7sQgfNvodXhSEeuczJfCFRty77hMsG91VK1Yf9T5BKtTAM7p7TkoFdFnNMnQ",
  "key6": "2sshdBMj61fc5E1pUTSc9j9bd15TsMHQKFJfWF3TPWF2ejjygMbVUR49WH7CJDjWLLAuCPx8tKi8PRP2uY54Nw3j",
  "key7": "5C4NG5CZcXa6DDhG1JfPrHcsEXqyboGzigpDojKGi8HENL56ABP1bRLzgzZjqYNvUBsQGNEuNL6GuFEJErtTfTgW",
  "key8": "2caaixYcFNw2xh9UTJR81wCbDZNvjDvyDciuPXTKqkS2np3eTfvVHKndvdvKtBYHWDdAjXfALiaecyXHAW1g5b8m",
  "key9": "Cf9KqWaG2mfri59zggVse19DfnhS1ndb1QVFs4BfcqMBDmeGb81BnQLVAxRp96yFtVnqLH7Nd5M4yBLFmjEXcj2",
  "key10": "234gZTWNd7GSunU82vPTz1RbNUCPwZ8XPDHggA1tmMNfqTvsgj2ycTxAzj2JYhD27wUmMKGrZZNYXw3DmZHbYCNd",
  "key11": "2UjnNBiozpkPsCbvrUEcahUqCXkrtkExySu77EPYxo8FW96D5gXEguLVXbsENhSPPmzbdmeN62bhfUVt5kzHe4g4",
  "key12": "5aYzjdtUQgNkB6hVNwfZFWRN5gw7pMYKbEDNVneX7Z8Z8Q3jRfoHFaHtKAsPekTbYACekp6p9RwW5KF6EshCXGh9",
  "key13": "wLV3QZa4GPRshw6Kzq3R6mFUDZERZMu5uGQm1vtwTCggNtppTS8uasrhBKwo393hb941n3tqurMK564sKXA4jgB",
  "key14": "3HTUTJuCmyo8GaQ9Ku9pJfcXFQFAavTUAS4M6k8c1xpS9S8iMAN83ZErgoDgbyGCRcd1nNt5GNyUQG2WAm9vhMrk",
  "key15": "2SNomjiYYf9vmVyHMXHyhWYgBWRrg7Esb46ysup9oTRsF9jVZSFg2bjYenoYdeqijVFZffq5uAtLpywWvJT6XnuZ",
  "key16": "PRCnSm2HAPsvUZPqrv6U34yW4W6eMHByrUfAQjr5XEWqmMrbvJN4x8hoDjDbw7hjuihcpuPLCaVPdWLFaVvn4yG",
  "key17": "2eyorDmW4CjVj2DGUzF2T3hEj6KWjdDaMGcyCsePfuWX1BjscxrrXYgju2R9idD6DoMF7WogAGndQAPdcjVUhwuB",
  "key18": "u6fdUSjNcg5DHcQ4WFPyPHe2a8dHso53HkbHSB3AcCjyDNWHk3HemSo8d5VxrF2FQ5pxvLTruNGtrJy6qTiuHrw",
  "key19": "3m4P8dj2t24tf6oJn26ywQ1nEhnhtFU48oiXG3BqCQnvYnzSDfpj6Tyvj7N5CHuYLwEWB1EgcUrREsGqKTfLnHMs",
  "key20": "4VV9qptw11TPP4uzuUeSXHLuuvETTLgomseV1SyMdz7Wn3n5yYd9AV1vCHi9F5YMfaAQYfMkwEVU4J8nggzBJCeK",
  "key21": "3L1rj7hmy2RFAQdoXXE5DS8nHQfEsY2M6vExSxiYx89bZE4xv7LnL71bm3PkEEvYeCReztSxAWnGQKNJeDKjM4AK",
  "key22": "3BpZ5mRaFdTKSuGwvYjo4ip3NmpgzmQbrWTJ8udr8BZjQqie49DkQLUocXKmsdDoqycPoKmpY3564qqvMf4CZoTv",
  "key23": "Yt4yDU4xk5QS8WJc24kn8GybUcoivAKiwvmWb5ryNPiRCZS7iJgh8JJsX6hVkBJPgJmzNSfYjqY8XvUX5f8hRVw",
  "key24": "31oMT39c9xvBUk1mCaH9naf8XYoJQdv36VcJ5a7eJ7YkCWdiHhZUbebHfY5NvZTQHraTLJvyt1SCdmmNt5u8NFfD",
  "key25": "3vFshEx2ChnK9yGbUu896229B56tmRGvMehao3UiqWHK74YB6HgcCe1TVn83DoHDfWk45fiUDWvKRTyqTWaF5H54",
  "key26": "4DZ98JCyTkRt2cd4PoLN1CA9bJDTAmUrt7xMyYhtXFDYqCxsqwfV7aiyULMdiu7ZmTBZXSWCKKarcwkV7MWRVWZR",
  "key27": "2e9bEyedC1w97QjmypXw7modSS3sKXfA8HoSLvu5NPcFdD9pf9FhDn5q9NCUf9DpRy5Ufb3rRMA6yJbtvy1r9CTU",
  "key28": "2tvpYMoKwkc7wPfsQZXQCeCiKGgoMjDF1wE1YiFaP5FCJgQAqy8qmBpBB5SVGYuNcpXHZUZVJhAw5cn1qkussv2a",
  "key29": "3twuoWafaiYaCha3QP9mArr7df1zYi2gcsV6tiEBnsaHwjzA2vbtzmvWuiaEV7xA5HDjBXvHDu2FbXA11343EsTy"
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
