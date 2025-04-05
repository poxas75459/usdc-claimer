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
    "5zQiJhTeQQrVxCnyVEgm2a9h8YctisGCiVk9NxMtUnsvDh3VMTZE2SykV4rkB3gQgP2xeX3tAbhRjmRnzwauBoyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "493mFToP27FMzZJZjzqA3UbXbfMc1fudQsHATCWY1FKEUbCSk9HSj4NwvP2ZAtZ6EMYpZbe89UZke23KdjT1Tiw6",
  "key1": "5DWSYt6VKjNaxwZDjk5QcWKD1CPJVVNnXGNUYzUFmfz1QrwAsCWPvmsYfe6aiAvCdM5HnQBF52r22guQXQgun6dK",
  "key2": "3ykrpLV5nKbMjYYraEcyajkppwRwDBG1VZzRQ6GVVrAnEqox3HvBmPVVbAFmvCoY3uFstPhwLBHS2hf8j3Fy3hxb",
  "key3": "i1b4Jwj1d31KZjK8gZE6aYyeRE5TiG1rBr9pWYrsaJAMydyb72XCrLWpGU5A5hrZCusbQBDBRzgpietywRceBWR",
  "key4": "5RM8UUqrFbKeugtaAoDzNUDzGdrbruYXq26NygLgaGw32RfTfnSH1ScCvd1hxSYU9F7DBUMH8MMT1AEJiBiXLy9T",
  "key5": "2ezgBCGJ9DrqwRygDQEGr2PXgr91GBi22FJAsh22T7qA5kuskzVVjezWKKXjBpBUm337Qq3vgaaST5hVg6FfHTmg",
  "key6": "4WzSCva1UDTHGTfASeiEyc7ZLWm83KumC1Cz9yuvpfXcZwyFm6XN7tY9xKXpVPbtTqQRGaZtmV1Xop4U424cyBxK",
  "key7": "4ppYHK155sLrL9gDm1xhn1o4qfzKDVvMzzfx14EVCZcQsjiyGv3Rg4CoBiT8wZih2s72igmgLkeLWaw5PVZ9oE7s",
  "key8": "NjSLqLGh3JPDQK7VHprXsP4kkwGJMKZULHsQgKTggZ8U2oq8VUNfCmbgmr6kte64DNm9wgufLUwNnojiJgMtx4G",
  "key9": "3KTFtpagka17JtQHPNAVLqeDs4Qs22wYe7iKTiHmBzKxgrjgmDoJaPpEhdrFAaYQNMfD5TWJKqpbfLHJK47u76of",
  "key10": "3z9FHMSpqsrP5FEZCKXBRZ31EoenCVKxEj3ZEuiZHWmzUFY3N6aiVvJcGwf78Wj4rtjg7r48g3z6f8VxYPqwyExq",
  "key11": "5QbQYjP7vW6cFgLrPsUoR99RCGZFb8Ja1Yv4o6AQ4U1FkMUGxYwwBWsXaJquiSQ4cXvgC92E6LiM2jKKHPJgQqnD",
  "key12": "4wessfxXmxdU6P4XsiRKez2kQSUpyQ9UksmfLmvCAafFrRNVormcKjiVyCvhsQPF2eiwxXCQN2iEhozQqi55QDoP",
  "key13": "uuzs5AMugJwPxMWRyX2v3aLjA2bZ2QrzeQEQEPdZBJGsQGdsBXzDa3R7Fad85njPznw5ABunuEBPHDWvYcEyc5x",
  "key14": "2abK73NtkVeQKwZZm2324LfuoQqh8QSd4DEGTdY7HjN9Pv3STgHXTVMmiwZTBocXZ9dxRpqiLgfnTor6AjwfAwZS",
  "key15": "2BXEEDYnoNxvfgN5vnyFKzm3ixTxYAgw5xXxvz5ZCHBBF7w6ZAhRj2Jsy9mUMsbtVKE4M2eMjYU6Bp8BX3HR7et7",
  "key16": "4tT7hH6rZGywPtTRKQEKBEYxeMujqh5Ecu3ib6B8ffaE95Jui7SmtDAz1DbeSRgpYHACznTxdFtcLmUK4VYonfum",
  "key17": "3GqYYN1tf8TKDApsQKqmWDo7dGKaCJEEfu1QPfZ24kLV8Qi3czSybb1q7yGHD9tYjaBYPyBMYc4yzPuHjdE2fUaS",
  "key18": "JHyxDJDCoofwZoouypHiHzqDMrj6yYNXotQ4avnCzes846WC2mLgidcMnZmvxQwNhCmCK7CBu1tAkrRbHttPS5E",
  "key19": "5xZ24zfyfeqdAzckr6PyJBgcBdDZJR5SZJRpWzjjxntFKtYKBPQXmHxETPZbaviSgTsYiU5c9kt8EVFquYSqk18j",
  "key20": "65u9r23dNQVyHXXuBE1uYK3TS24HHLsydmfRoL2BZEnb3ypoyHGdZDGbiGWhzR4NxuV55KSHEH5TzniDdGfE5woW",
  "key21": "6G8e21TwYCcB1ZpMpEvW5ns7yYjGbhXNwFWT18qJWjgHfjKyojam2sNeb6PNZM69kivexynT52MLwToJWYTAugp",
  "key22": "4svWLNF4tjwTHHW2oSXGWx6cnw1LDRJZ7FgKSTsbdJnx528kmCjAcLqhTfAqCukw9yqQCdVL5icSEQzh4HhHAezK",
  "key23": "51PaBxc4oHvvfvUFx94CyecAUhoS9FZjocGyiinRCmbmWAHvxEupU1AXwLr3dJcDLwbiaN7bz9T7yVzTNE3aJNYq",
  "key24": "iJcuq4r59hd8UJwcZKKbUXNzNysoMmwB3ZLS1DPUjH4Xa5KdjTxuav1jY9jdkW8gZfPZqXUnnAarVJ1rZWiB4Vp",
  "key25": "3JiN86SLNBpRz7XHnk5iMbwZKKVysoSfgksq2mXxn84dz3wMXEe31XzNEDHRjviob6qHFmU81Pg8bRfF3ZpXEgaR",
  "key26": "4MTxjfdzavDqVcSv8mJpWzKfFBJ8e2o342FE8pWhXgV7PR4SpJyD5Ntv4kvRavdatv75JQY9ppfmGqkj9tCeMVzC",
  "key27": "2UewiZc9toicJU7DabxLfvyJBKnsq45UGFjqMfP8XFGrH1GQBUXfYur2jpbvXdyMeFM2ryEnkqCgcBfeyDYt7z4G",
  "key28": "2QzEVqCpY3nbMHM97FDbxDEKCZomsdWKenw83LWenBt5Qdaxt9EdqTBXMjriFSmeBtgGQSMwnc6iwG4BZz3KPE8h",
  "key29": "fHdCSYFhvRkw4BXCK8QDjdfrcjBaTdZUWKqdQkXM9rS7YfoydKZgLPkKxk7mmiY18L6tfNbKEbqmoUo88CczonN",
  "key30": "AgGAVabwUKiVmkTHDo9tvYyk5CQc3W9MW7iBAXaMcqd26zhRy2tbhrNjtY9XNLUrmEFpVAk8hDN8eR19Umj6DSG"
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
