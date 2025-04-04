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
    "2BZ24VDeiykjoFBH6a8fwV8DdcLhvuisAsNA9tRCwqNTUEE4tsGWp6X9ZKrBxvyfSQDFMtbUBgybzYCCRSoHnhKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jjS5q5kXDe1LSb6u18CXnM3GRXLodi9twwJzib3SGiV82M8xVGW4pNvwfmVZ7j7bHs83UFXd1evVYfLeMBMtTWa",
  "key1": "5jsLSGMRJ9s3weYwdHETVWqutdu75qY7XvcSocsLdyQupqcX5wfk8JgDtebbqDxcgBToApisfx8zoNw1WosKYMqh",
  "key2": "28z5gV6SCgTJCKYtncrB2M3ZYNqNpYudmWYEdEs7Qwz67EQ3jW7H7RCGo7dESnBHCzvWFu61ZPRuKdkC9JBAdSHK",
  "key3": "4TEosYLuQjwYANJdVeA7UH8uzeJGdnnHufBYziXkK8ktWKNLfWpN5VPchkX2XovGYta5i8BDhXka6uJ2Co142RrS",
  "key4": "3T9DzR2pjgMgbEN6wDDtHbFqWbKj4PcPaXPsNR43wZSBuAsCkyTizkDWc6LeMHPbtWVHWhrYZvhTQjHGdxDXfLcc",
  "key5": "3Q1d9PaDpsUD8FWDUpSXFtz3eYLZ4YL2nq7SjuafNb5jTyy7UUKHrEJK7WZbYr5eBbeUmv8KNguPJpvp5c492smg",
  "key6": "2QNb92PzDD1rrZbWbBZ3seVphQBThiaUVxGdvDfDDCH5hkbQxRs5FbdQyyJDnRXS2zQCbftNp4hCVTHKN1pbareU",
  "key7": "3oRgqmoan1TWXmitokjBchMjpZMdgh3N9DAMEvP969pXoSFUW1RqY57iBJg4WT7WZPJnpBFABQvoxWD5pXe4C1xx",
  "key8": "5rDxSM4WDLDcDH8xDeX37VhXUk2cYe2kFtpcEFkhsLNVFbscxt2UjqNJZseW5GFzSQ5ZK4frG1hiNsdHHxZPxMBg",
  "key9": "2cEhvbDrke5pUMYC6EbGRhVqKYo9QhcZjC3QKXgXvFgL77szUnSZcaiJ6hdWfZ5JkeF1BFr9VP5ZTCZT6tzhk4cq",
  "key10": "4Y3jQ1wddkHLo4fUMyTok78fuPye9YJRWnjtxBxdu2w4mH2dFurewNrvXdbW7vNBKDUensuU2eNq6XgpR2HHXyAd",
  "key11": "2WXcfixmYqLhLfezxdQSogNYj6CFmKQLMNVV2yCQf3CztRPfkqaUo12GgbTDoPAbDnVjVjBeusaHiWGyKRJHKGjP",
  "key12": "5NWgQHRbaoyj65DG9cC12uPG6kuA1d8HvtJ5G2vpEsNCadgvG51XrNyvBB1o8H7oSHnxLtczbCQ7w7HEGi88nK69",
  "key13": "2aCo1deAHcKzGssbkKKkm2qtWptWTrEorsuGL6QRwfRkzFYg9Rf48A8N6qN6ggXf3Dn8tgvK2PbqrRgQVMuk6bZe",
  "key14": "N8UarnTaNwPmreoUVSzUDz7MoiSz2kYQfdUTgyYSHngR3CSQTizdp9gBz2MHj5dsR1cyoVTnP1cwYxxePY9ZJgi",
  "key15": "2wMNj9YwqjmzW3PDaG8fhhid9Aqspy2787XpXAweFCtrSSG83wEZW3yG17FgBCpoSkRjPWEExzCk4aXA2DuVqWSU",
  "key16": "4NLvTuaiAwiVncygnwEaa3PS6BeUup4bVgkfAW4cS5Dju5UV6QCfGCFVGuMZe7LXtyaTSnHDkga6KUd9NHFzTqQM",
  "key17": "3RxFXgnUYNsq3Vw9jAa7pk75XnzRwf4FCaBzPyYXUtu1oMDwTtyzQkBXoGnbX3qdsq8Lj6pRoz5VwoNnYY2tDi5n",
  "key18": "3RQnRRVQ2o15hoJbFyRa4WjqDaZuikKeqDT4hVYb8EmbuvJEBS1cCdNkrBSX7abzsw4JKojci6xXtixPyXNtDbb7",
  "key19": "5w2Jej7cLbVZJpkJWaFkZgUYXFLeyCBqf8cpMsnKu6hfqMLcfcfLbQUBn4PEV5ZnVbyzsYapKNu9TGT7oWvkNq3L",
  "key20": "5Rc78knHhGB2Z26aAA5ajqXPU4vU2YLmW9H3uW7Xh2WW2xL2LeahLJ4eiayJge7yydRWSjDtDZPec2nS9Ab63xYD",
  "key21": "NXoAfWNa7JjsqZmJWwebvnFHyzjKayFzVq42ZgfDBf98JXgpZJkHwncacog4NYFdBzJdx9Bg9roSxHAZwNp4M7e",
  "key22": "2RDq7TNhFYiEhpcHmGEw389Xf4wWZtNJyoJvAayCnCfDReeiMubKf3MoDZKxZEUs952BVyUqSi6YafBasFZTVa5A",
  "key23": "4zPVCJrgmuuMCRFn41AnExisvvmsWpgoantwPm2DDe7hYFdU5WsdVpCwnysa8SFBf9Dqds9Bgn4x2SQYhUZE6fdE",
  "key24": "22J5TCTmLxntFCRCJnG1fdtUbufp4vzdxND6aGwhRhZQQULuUxseyCNutPBnaAEEmPfU5xKVY1U5BQQwMtJnw73R",
  "key25": "Wpe2jsUPNh5TVrLxKhxwqhy5WMPCHX1PMq5R3PtmQ9iYD6zjLsNzFf1pZLAsbyFMEokMQMwdMPuMFMLcgoL7SrY",
  "key26": "45U8MaZ2aY7wrMR3Gamqd2FmXrSMLKJJvdAtzjQYC6myCVBEAN21KJgBwikR8pkXydBL4zzKyeXjjf9YLYkeNMLe",
  "key27": "3PqWAs9WZNV5x6C8gJoA71RPuS82isB7XVtqU3UzvTbpVqDHgtjmjQznrwRLnYY89e99RmUhKwoNbLbKqgEuhaU8",
  "key28": "DjFfrWQt7HqfUYtfBU9A5oGW4aNjs5eqRMv6bEBM1dtfpGayAazmuXfteyawHM3AqXfSZujmZmeNQLjBqqY3vs5"
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
