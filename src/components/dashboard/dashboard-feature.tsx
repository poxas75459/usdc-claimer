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
    "4NqmcvNwdK3cX6VDeadXuAmuqDnPgGt3qMa1xhzG3NDgRUHwDhzqB9zxP9T6r3qBAfAWYQwGG8shmgoJvJRxxigb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D8gGryNXC7s9ABzqJQgbgA2bvLbL8f2uJYuEjjZMuD2SHRmqb2dZmFyEGFBiebjbWETdZPxqyucKUY3iPCWZjTL",
  "key1": "5GyR8j87c2LGaoFKDEydp4yYu22gS7h3iskYh9PwfPBteLaghGN9WZEUHrNhkiKFeKZHeNGWQNK4d7oTPs1QP2ay",
  "key2": "5KcFD8jogzj1cnLCedGD1xscKtWkdoEkQRzSpneConSjG7rYb4EGD29wUT2H3imYAApALfiXYyQe1BXz4b2hn8PZ",
  "key3": "3F62b8b7mDGCC4u8xNeML9UKv4zw2Wcgk7SzeBTXxqS7Pg2a6iaLZ31ueYUXM9M3XMoD7AqGgZmZGXpq9fCxE416",
  "key4": "45Y8whrKTeAy5jLqbT1egx3vsMtejpDQKfRtUaryQyGLw4PM8xpWzQs6wyEUnxBZRhE8KN4HNurGusbAeP3mR9Rg",
  "key5": "2jjzQh8nwdZYjPC3oVW3iFHW4N62LvdePisRLs7MMufVuEGs1m52GZZNKRmLLcuiDQov68ByosmyAQST2XGfzyTs",
  "key6": "qsuGv1xiC9ozKJkjcmcRdKDb6nEHnJBerC3uHoiFLg7YL6hZixXiLFkh6s2yN25bvQDpsRGhs7AaDJVVXb9FAh3",
  "key7": "4uEfwJLxU9zkkRDCdZx69KaJWb73SzBa6rwHFGbYKPk4ivDwW4PD9t5aPBrxMM86syL5ujvh5BBFTY3grVyxBEqm",
  "key8": "5N1k48qX3Yv4D4Y71JpSLtgUHCmYujAVkYurqwpxUxsnceZGA4nitxKVLtTmaWddC5ka5codQ1UBF6qVzrghS5KV",
  "key9": "2PTtet2uSCKgxpjbLfEUj7YH2TyJBKDANYu6txy47RsjJ5U5VXSQp4VjhFMHd6dMQj3MLMEwdeM9ftWEZbmK7qW9",
  "key10": "4nri5AA7JDzg47AcjtGumGLZzAKz8VHfaVAFRuEwtbHaZcDg8Vm3i2SChUkz9pAjTHUPn7DY7ojyzw2jzjEzGjbJ",
  "key11": "338E3M2mbUGM5T59TA3kzSHme8tqEanrDsJNYG2QZ4jSNzz8oBijYU9rDK4GBCym3WWDwyi5EjiTJh8a9B2EFFJm",
  "key12": "erWkSgvKqY3QwdbYwQqjxpkH3s98LJUTTeGKGV1BhGsDfZzEDKaX3K5xSywMuaUGPAjK9VG371usgcUrbPi15LE",
  "key13": "3bPao3rBMc3S7VnDpVrf7pGbaDYDSEHxtuC7ZT4c1mDBZfUDyoyo7HZCvqgSWxKED18NEn2f82pggrtuKx5XWSmd",
  "key14": "2b3Mn3XKGzXebfo8Pc76RbKZjk36GbmRw5RwGXrLgK8fyv3RGivRHXzTK1LSFjA4hd19ydJuxVqrwMMdpkXYCvUM",
  "key15": "LCJ9tLHbnXwo4j2shgHSAbP2TTmqmWyRUEABj6SehQj4kHuJL8RnLfoNGjZbK9F7Aart7jXSXk9xqpQjodHuchX",
  "key16": "5THHbrhVeKmW2KSpKu1KGsEAW6EPXLd7eAidgV1MpUQchoMKCE4DTgZNNDahwznBdg2SnEkfWrRDCK8YyXZcVvuv",
  "key17": "24ffZjBqF8FFUd5mZkhA5jiRdFUHoXUAcztF7b5sFwBq9sup45Ngf1oe1qUTaueBDwzR5knzSKzSXTX2CvZf2B6d",
  "key18": "4A13Btxa9BTuWCJdw72Z8AYtf3YNUyuatxZFetZTvuo3mZQXjqJJuFxyjmfXmihiE3W8d7EcNLceECdQ18ctoo14",
  "key19": "w9nYbo38fz7uU8v5kDtDbVTrSQ3qD6JKSBmQfdnUM5xE3wKezLZ2ApcXbcagUr69ykfkEgK7jyVxc8wC6XXutuD",
  "key20": "TwRQkWfyqLCXbJvA2UzMEWQgkhFE4WCnQgFz6v84wP2nxSeb6zRxsFutiJu3oU1kX8PzhzhQ2BwU3PY8XDJJvGh",
  "key21": "HYNMNdjtpxf3cEMUH3NLLRJ2KHN5syVc5TfXVzZSbcv3ZfGpfaP5rteWvrByWEYc3Y8PuMmxoqGBdeFyXqkZjbN",
  "key22": "3Aby9v59eniS9AvR3bREmbLMRb4scrRNT8pvU79gi4FrGSQewUBYQMYRQhrg9x1piodYVF3h1eBWVq9LeEWZrxYi",
  "key23": "5yJHwBF7qS67NqBrkdibko4NXWD53AyFn5gG54vdghj4zeJDL8rkLWtepHuBNpmDhQZmGhMpfy5TJBcf9DABMqiX",
  "key24": "4qhGm3i5wyiQUYAcA5sYgteCeCUa6CjPp6DpodVmhwxrDrDCBUNquqPx22oRRhsqep9k1wTGbczvgqg9paYqAEzM",
  "key25": "zu8byrZoesohobkcPyboJA8GFMEQGkefhVsSh67ywdTQWRsfBbBgR3T63PYJJwRX6ubSgyCV8q8izcuU2uPKYxt",
  "key26": "5bp5sFtguPCHA5muGA2c6YWAPrrrqEjJzubf7wRgafQyS3Km5R3sNA7P499Se4sFaFUrN1fvG6ikZ1k47FyoFCbh",
  "key27": "5UtqXqYztKhrWeABLKjaV7mTsfSHi27DJLhrrnzx4z6rqB9snesQdsDR3E496jctHZaH85U8xdQzGudUYGn8wjWD",
  "key28": "38GbES1i51xgh7ZbPiJg9RSq2MzMKR2Hq99QtHLddCNSgzpvCfL1y9EXgJGL36bvBSR1eL8GweNoKRju471idXfG"
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
