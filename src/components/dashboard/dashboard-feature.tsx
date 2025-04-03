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
    "UJziXPRphHbtLBk3jXWzciLRJLKtsNHbHaxPctUeCehh6fHdwuqxMKyij1oc86rWDDP4iuBSt5GDnxD2PqFQUer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4egemduSYPxFv6cAfuftkCVcHabtaK7Sk3XkgWkvWz4HUXWqf6XcGT1FJWUUwTmcoBNkvit3Je5BvaJvL9tBV6gx",
  "key1": "66a9dovh8xLF9jZHAmVnSKyBZupMpGcoE7UExs6zU9grVvcizDM1j7ypb9jQDZe3HttScGao7fenKpD42aPHEUQT",
  "key2": "SisPULbdvYTzCPpM4YF3aDhf48xHCerDAHq3JJ6c3REnVD7d4xWof1KQFjUbLfuW4jSbE84zSfQwFWVeXTAC2PE",
  "key3": "3qhJERHmEwFGPeJBQkChJmCPX76VPTPEbkPmsBABZkJoyAkkR8ubQNzR4oRZpZ7f16BKwYF46NnDkjKd4awXBLkD",
  "key4": "4r7VWi6776UocTqd9txXBPz55GxPv8yVE5aUcSgTrPSJUhD1Wq31oWediLhn6vAgCY4Je7pq9i5CNJCz2RgGb9Tz",
  "key5": "2Xe98K4pLcDVyPG5UByi6uR7sE16ZxA9ywb4muuESHr4adPeNRAZHWakJ7Q2LP7ELsjDuH8sDjv69cJn33j9vUnc",
  "key6": "3p6T3WrSfuy9BfoYZw7FGnhnZ4egzW8676DausAnZ5vNjRK7fm44jkc4bsUxTEUB6NoqgqPwu5k1VHXHkNgJUCje",
  "key7": "3HXAdLLp6URcC6Nr7e1Je8y6iebEZrCeWP5JbFjiEajpbRdjviUetaqDfooBS9JVrSGHhZQPZxvaXxjbTDtv9qS2",
  "key8": "e6yMPUiAaNB91sY5kBa7J5E9caJ7okPHsVHvdnBsnDkHYnYw9M7ZmEniKHu9Bo86VBbUJFbErKYVpdatoC84Qfh",
  "key9": "2VsUWnsytMoCSDYNXSt8tT58WZrsXfc6R7Zdx1fXdduofh88wZM537MxqeDLLPDBDqPoBVbe7vnKkyg4FwV746Ae",
  "key10": "SrtJfZtVBYxDisc8iifza8F2U8MZ1jDFcy42uL31smRW8NMUgcBfdcWGRQ3b194QMeaHtY689rXwjrwbqiwv3Bc",
  "key11": "3zrVySqomYpNomu9xY2kvuqLx9WgjRjKkMJDncjjMNzrSuovkhs1jeFJFMqA1hVBxYzEkSQqn3iFarZSNi6UJwrZ",
  "key12": "2E7koxYvan6x2Fk44KwCb3MNY7TLHP6uC4ftRByRWR66HZ3JiArDMkfU1QB3iy2woUeyqSUZJScERzysvpGdbU4F",
  "key13": "5pQgw5YJzyJUn1KiBdkGktukojMPkj341QxGi1z2m6eipeXmQYhydYtmGz3yDTZjcawkpRUdS5LuU6C1ZampRPpR",
  "key14": "5tpcXpXWCUJmmvEATdU7pQApZ31BW9MHzXMVwEGjwVtuyWquGSVABcpUnHzY6e5sFdhhrdizq1pxCpKcmr8bL82D",
  "key15": "2Fp87QAyoahH9grttEDkJATfS1mu3w1x1TgGaFtRQgnBfu2HHwbjvcdhqGqngXy8VJ6MH7N384GYRTbbe4gEjAeA",
  "key16": "FaGHfq2UHpZnCwfBuf6ApK7vKMrNprFmj2mqEwp8LKUbMwMaR6dDDE9DgN6c7i8LSdecsaVa8eoJE9L8vCnpTgt",
  "key17": "5kAcsbTByKHDNV4ntnXEimVomumTibGfZ7KP6FBSpSA8agwpH5UUaXU2SKayCqNasXWXLrwbnY1wdeJvtSh3SDD4",
  "key18": "LdH3sGnYaCmFck2FVVUdfnV3EJRhMGDbAnSL4cQuCSvY8Q74n4jCXZvvqhtCowt3WGdf5TYaZcmytv4qwKk5YxX",
  "key19": "YzwvL1oeifVaJBiJnD3iNj8m5s5zHa64cdehkSiVcRtx5HMXYrU6LSaMtpPTFvy7bzd8DTfchS8KnL3ErDKEnkG",
  "key20": "5JgFwnxdayzRRZdwHPNYojLXvRTdx4qmsJchkbY5nWGp9omjo6NXdnuEXEAuvqgpEKjphF7WaCK1yJfjndrfCdYv",
  "key21": "22UTSrL1uesP2NG1VxdtGrNu5JcSP33aPuyteneyM7JM6qcjUqBL5vqz17A1KLgBZaCTQ5v4cAZh9CYDPM2SdSZg",
  "key22": "4SwUfnRyLM6EDYA7VXj4gc8TCccuu66iw94bttBAUbMJcWrCh2ZPBtGPYuJiSqYcK7fQasc2rkHDdiMPk9G8MwLf",
  "key23": "5qDLAK1euScE9UMekSBSRxi1rKLUTBAuxdgHPm4GkS2G2MrBoNMq6Exnuq5nZWWyS7jd4CHbSus6JWy1Bnsz3WDU",
  "key24": "a7Zdyg3d9NMUhmc5Y1H1T8zabPcLLVnTSUgsxNSx3GN6kupADEHpmJyZqqJZ7NXx3M7u4rpS1SwpWBJK2EyBD9m"
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
