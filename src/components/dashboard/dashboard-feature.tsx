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
    "5n2BJvERTTyDhJ1oj7CjcFUcthcMvexxn11Cf2ZELtx7716za7QQG8wHFXuStZNnbAszYiYg9wTr3fmkhNfT9tZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dwad9niTyY4NFW3PZx2MyohZVf5NWGLQooWa2RdXdY3hAkYqMDm9Ja6tbvzSZARffLYYiRpzJrSdN4q4Kcquyou",
  "key1": "59XnhVGVEDxktXa7unoN6ds6oXDxDejuhsEaspyDD894Bz8NpyEf6zzEWvQk6ds65c9VkaPXs25UZwkQLzq7ikT8",
  "key2": "2kg12Gs2yQB8EGb9vM7ZJtSMNamVvwcMJbTwHFLvhtHzSMtnNjmURasjGzU2ZkYvkS3y5cLK4Sdnp9P8BFSYhXpg",
  "key3": "4ZimX3fWu2GZHXyghxQTYR3cgRg4sXmoGk7SkcaYcA4aZk3bVP6k6Z4TPcQXgwHyYvdTdG4N7SrJCMyEX2WwmvVV",
  "key4": "RF7W9nyy9raJ4oN6bUCfmpnk15BgYzyfTqwxMAu55GhJzeoy6TVQacid3PvQJtM1kGqZwsbeJg8eGMuC73DFwuD",
  "key5": "45JzbK8wACyNALqkZaYCMNrHkLSNaxfLbxcZJQ4Z4ciWjvWVS6XHL4SUG8pTgHfYR6v1SjvRqhBBuj4Xj7RD7Uz7",
  "key6": "WYQDSvuvzAb4KxpJhqp6p5DXTyZZz2gXUtsJMwcAQjUHAR12WFUFv1sgrQnP5XLzYqnMGAJtvWGQJVkcqshaZxB",
  "key7": "3g351GrDBhiiAC7A1hF1dHCoXdfVh6J8S6obTZpG2vYFXjth9PXkXAVfFqDx3oG9q7b1mX5dM1Ennxd3p3AQ9AFS",
  "key8": "3zibqpVrpcAavWgKnt283KTQc1LJdWkvzjLkbYgyeXLJqc3bj82ZBDDxGxupnGmyoEBTrnoY2d5Gwg4JcXhe8pfs",
  "key9": "3pUPCFYc2RZzuW5KH9TepufWriJ9G8ZfimoUdQzZdhMokEGMUtrxT7wNUhdVyy7JmuLPBqoJGWZXbsJuoEkYP5c9",
  "key10": "3JQdnRwduLuVXELNwRKoyaKfaJq6FqJAAyUx5j58UQKfr3xQtt4272uCnM31HV3sWznpw7whyxdpK4cAMr5vV8d6",
  "key11": "AfEH6Tod7hy6aMHJV61AALs14BzEX1DU8J7PQVqVb6tpzqyhbH8yErzDEQ136F9qn2w9c6eNTqds79dMHoEZQKt",
  "key12": "4H7PYHzKdxdue8KszwuZXonE23E3ZnB2wmPNcmHLufG8QD2PaqSHnbipARikgDvQ3uNGC3Be5gep5WR13mHdmg26",
  "key13": "3AxNsVG9RZwoudYzoWuboQpEHqddnutZpMPn2sErwxnqDSgv5trgtYBskHcEPEqrwyaMpziqeFjkwfBy3SiCjnzi",
  "key14": "5WQEudxLU63Pgo1fz6wKRtV6uemtgL3PWs9LoVTQCzYC4cNnW4FqMEVwPgB47EkjgeU8N9Vx6KNuAGbfc73kyQ1",
  "key15": "3nw6gpgw5dbwtfxjPTVfBTvnyNFVqaitx2EwmkTGH3r4gd5VzPzBkBmqp1Q2Z4S5nCBberqX5VfMrNdJzGJHCXKM",
  "key16": "uC3hXiXuRfQMiCSFxKxVoZeSVRim9E9CfJwHL2UmGZrqeLCLcwUThN9vR971p5hnHV1SPesuaqiocbw1eaEBU8Z",
  "key17": "5H5AhK2DijSWxm7nB5Yqg9QZS4WgmuFQxwUy8q7JLc1YfbxC2eajwt5q89CQMBAXmQuzDzt9axMYybVy3Kgn22rr",
  "key18": "3aUqVkXBBLjwTP7RnKH7USnKN3spojcMoThB8NM8acd6rKhZiDXeooZVdGs2XDGwF3ZdBgK2AhTdPX2Uq3FpcKSB",
  "key19": "5jxpoRsauXjfkSULT79PVjGa3589mDvjFewGTF2aERX5zAfqigWsCRBiq8erik472dzQriCcgHXeFn2GiTukVJY6",
  "key20": "4kcrpywNNX54HbKEz8nLaYajPSGRQSCJ5PiS6EuhPmsH1YCgUHxVTdNp86QnHBRSsGpqvCcKKVaWGAFLU64wbQGP",
  "key21": "37fPYCYzDwgzgt72cjrWyhtULzTfKfMVczwkzkLfwPgAXiMCQ3aXDzhcgfrAd22yYKYu1HJW7T6xZxA7cRRSvttD",
  "key22": "28ukvDM2XhAdmzPbqY6mCAGw6YHxVFTNtDKeWdRnf6Y76wpUF4QFtETb75hky4zYUzR27yGcGD8zv4uxqNnwFxb2",
  "key23": "5KHkRTjuXvw1tBjWueHSKuYMwJd1NAZTCxkWs7NnsB7gL679xVgD58BEXMYaeLaFLU9c9kia7CMjQ2HVztQATfDM",
  "key24": "2tAKBsw5wJMgnkYBmDVCjrnaWoEAuhv8PKAeKa5E2SchLR12fFyzfs9W26JBqttZN3oFHcSFhFv6ykVf4CemW7hb",
  "key25": "4gNbSXQS9cyEY2VehLefSJYku3qnZzXUS1PmJRFehQs5oDtrD7R9GyQx4pk9XX812gcm3vfsSNaBnjZnRMzMko7x",
  "key26": "4R6vHKpT2RVSEU1W1G39PiR7Tr4fKwjFh12Dpdsp2STs5E6KVgwcWdbJovPFM3S9SjCbt5qR1kMNny9kt7FfG4mo",
  "key27": "5Jcr7KSb2CCyfQLsEY6Ekq3ry7h7RphbKWFH2N2qgHKMf3PUCKxNVC9HdKDERmmn2kmchAMHqsbFkWc6a7Jh4UV8",
  "key28": "2saVPVsn9VHYKwQheBz62ZCeRcFzktezkpdffG91Fq1mvUNhMcxQon1uWatqrbDAQR7q1xeaNvK7bmHC6joF8LQf",
  "key29": "4ftFnw614W6JTptS6qBBbaZYmLZWjX9WVxVM17CR4yhNzsJpgkarZy3mLp7uxpSzL343pQW236WvU1XmPH4eVSGA",
  "key30": "KZsWftKLnh1ACbfGVBkWZKiZTkmb88CWujG4hdroCvDiek4wg87hxdZenLEqEfJFvf8MrGHBGQ2n6YjYVYWg15m"
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
