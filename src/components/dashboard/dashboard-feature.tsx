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
    "4ERwvubX98sbPsxZAADbfmZBbxKyuHsyPnNb7ASLbvqivL1JQ5novR3WguBuV1PnLdTuNb2WRPSKUwwsbSBLU2B8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cLMU6xZYTptpW6kXLGtKGMMF9d36cF38cQdPeqVomQjGhKJ4NZbxJ2sEkeLc89WRdFmibDvB6cLiqAKtkw1aD9c",
  "key1": "HQvSD1wsbW3fyTX7UoErGpNmK3Hc6mvKfb2Gdsa5ktK4WNJ5ZzfxYfh7mL1h9BHK4doh22fTPCsZr3E1n5XPFxH",
  "key2": "3rPVGL323MgQmkE96xqwVfBwLPokkRtEuqcmQRqTH9XesevsZcEoNuR5dSDDQzUcJD1kfyVDRhdCgPidHMWeLFU1",
  "key3": "5nHvR3DjDAN3bZpuxYymPSrkW5J3bDE9dx3UktmYYtqTWXpg2R56NFVf213ujtGzwPfmLpCcroFtGuZW5q3i143d",
  "key4": "32sv9JXFLkd3QihyBbpEko3BbdqKa7x3hYTxW9vrhmojMNjVLMn2HmYpd5NwGcCPYYCEdtBEezuohNem6QSWiuoD",
  "key5": "4w5gt474shrgnAXcb8ptXFSVJxgfMCVrCuuqeJ9RDryehzpJUF7oQ3vsgRPB1qvr41LV1eKVxUv6PNmT8XYZNbns",
  "key6": "61z1UjUL9zCboNvpxEKt7XGo36PMVki3YdRNL5izG3F2Faevwngf4YUPeRnykzQwC6tUVqF2CtfzNiwUt6eiWanj",
  "key7": "392qSGSh1kBqPG3js274MtnXb7n3VnfFzoeT3Fs2hMB9pe97uNTe6CsitcAVCi4qWKGjmdjKBaP53GqECdb9gwgd",
  "key8": "39i9GcTHWoDkQ5uFvHhivVPQmYb9DhVP9TmeMoA1K25fhBb2vddxGzVyPhivyMqppA9BU5Dxd5xa5gULz6H62dVB",
  "key9": "3RmyxZTzcwMQ9iXgequGKQZ7JbQduLGyeRUWNt72XUy4uEeudwxejZHGvUrdWEFyz4hu1iqS3bfcGRMKknzvAUX1",
  "key10": "5w1h1tULtLyfkhNW9zaLfz1k7r7kpkkqrc4kmX34jrGLkoaaqKg6uRULCDTRnt9DqghcM98n3Et6k3UmpBRSwDYz",
  "key11": "CzPBAG1iyroBVnicbDMtxYT5q23bXNBZ6uTa2FDku12VrDXcVVFQz1x38nkhU321ogqWPv3HE2a5xVq46b8SY8m",
  "key12": "65rXF4ySPZMMvPWRFAkk1hEVbwxwWppEuhq9hgffJWDNMndxvkPWWrTt8dbsQ8Yarm9VFY839MoKkgE3ahJj6cBp",
  "key13": "3WooaqFLbAU98FUHEFdGaH1JkBDXavZZes51uLRaH5SzY1SAceAQHHPcV5N4hjgJc39aHJcyvZLSWD3fDU7ebFcf",
  "key14": "4v6prWYphgwDbCXZX6PVjyUijG3cwkKAxbf5wrZDRTVMRo3Tf7kUBdU19Y2xwimaXEYP39rS2MJq3NyJptZhd3EJ",
  "key15": "5cWQWSZcpANeg8stbCLriUthgRFu9cA3nvqcqGnXmNvde8orpiwNee4ou6GzAQR8GZDN8urBE7BaXorozrtYPCGV",
  "key16": "5GwMg2fo2SCfeS3d5ZdVAydMiyGu3B1dKcDR8Q4XqMJfAkPSe1dzwtC23gmAvRhWQtigJJDu1hiXFvkEyG6U9DSZ",
  "key17": "5LnkhukmV7Ryj3b3prxvi6Fa7rbYyc5WjdqiLf52vCMZboFbsQ7aEKjMexgYCVA7svdcipkgS86NKJkJnCDBhkbR",
  "key18": "4d23sM6m8S1VfSoAxjdcrmnTHe8JqLEmveLiym542eGuDdovm4K7t3wvQtycedrt3gzAyxjsJtLFCb5NuthScSTq",
  "key19": "41PbZkpjJhZdCwXeaoo3jyKjCjCh3yr6DU6BKbg8VM5TRFiUVVxwDhEV1S5gUcsfBHufGKHbUXSzqxJTeiV3Dsxy",
  "key20": "23EjMeDrWGVJgw5pNSitGBRGoChR6ap6ZcWn6e5WbBQorEHJX4FPEyQVk33xbQ71QuAXMMHhLJ3Y7TcHaRUDFf4v",
  "key21": "2Eb1FdPB8Pwao32VVyBEqaCTCkEGS73bMQemZf3nzRf5GCrwauBpN3y8Rgoxf4gQ6d5wfxsz5uiyp7BPsZSR8iLJ",
  "key22": "2rGVGGe6XQxTj6FqRijbKmzvmHv6iaYkFaEZdt5upKven2ejSjRqq8Yfe4CvkhnYsxkzxBxcaQdaJgCKtUQk4FK2",
  "key23": "3iwZEwkpiHkXm9Ex3v7n7bK6AgNZHtv6UYiQoWrLTTYCteq4L8ojCQcQgnzL62kwjwDQwE4UarugShbB6obxLc2",
  "key24": "5Ts99sW4Qt7BE6dUhazNf2ygPHh2Gb3EKUuME81eQkJNRDHtEkTQKFxy5G79b3UVHsjY8XzCZoeAjTf2uBP5ZcA2",
  "key25": "NwZANQyPG8QLcBHZbqK9qqWdYaL4wFUCNn9YsG2aZBLpmHYRj5FNAZJy7jQFpYcVoz8fCKk9mmdgbT9JuzE9KL5",
  "key26": "1WMMMu5SJchYt4xmm2mLUcwsDHqXJeYrhN2jEYYJ5Ws1SfTCgatppQePApGY9ACnBMnxj3JE4434ErtbC5znCHX",
  "key27": "2xL9C7rg7s3xSnB1e5Ub13K72pqtyhDaDiX5c2Z3jfdGrARur4kjhhbSU6baGZjSVEdvdV547BJWjUBqmi2WXt82",
  "key28": "5A2Zykb6aTXGWBKQW2SmFnv5xqnMKyTpqDKaXy7fkVG3X9MvnCTjeARi6jdDx1eSw3DxFDJDVVFFHfb37VYXiH5g",
  "key29": "3DhhvYCqA1RT2HjYB3zDYeRfTfs31QwiqT8asNsD6iZPbgq7Z3TQ5DWknp2tLL12aQLqGfZKZqQN8t5YprmTbiyD",
  "key30": "5wrHuP2ffWSWKLNvMGP1e8MdARMfcCzmpypttByhFc4nhcBanYzWKSX7YaneEzXq7hbDm6Q5j5QYFiFXthEcshkd",
  "key31": "5mtNFj5ykv5vUUynKyLwskifwEPVvBXfRsM4CpXhhurLFMginuarJMhsrwwVVEe8vXEHG14b9Ay7h3XenB7x4Dhz",
  "key32": "2otr81qQXpGXYKcRWibuN96h5rDKCtdBsjnqjKd9KSJFwYiRxwJHFnsNM3UrYUk6r9jLA75mzuJ9STs9FZrHyruq",
  "key33": "5kfkWRCqEi3GihQcpUw4B5gU6bF1fmjYqJmumNWmJyE2T8hoMR2r54N29SMXpRN8gyAnEFNALLFc6thxw6cC3EKr",
  "key34": "7CVp89yMaWeTnqX9ffX1gjY8NzQTfH19c8yTmzgwS35weo8XekVZHZoCea5cL788g8Aa8fJ1nidBV6XAtxebNDw",
  "key35": "3HQTsBsXunRVbxrxjEZ1Cpojwrqx5BcPRVy6Mo4xH7JiWK1S7yBax87FudAWHRTYTEuKTCYN8358pcLbo7KS85fc",
  "key36": "whhaMxHRvbb3LddR234Au3fSRSFeZt9N9qGQKyYV9AyA8Hg8LjKbQ2D1CGhUxni5jfX7c5LJNQcQYtUvkhSjFCe",
  "key37": "Ho2QqXzpkGPyCax8pJUqqtFgv2sSCYdC5sRxME8yXTvZnzcJJKepVTSMQXHWFyM3kg7NrRBMJXgWPoyo4yr4DqS",
  "key38": "65daG2d1hWh92QLdcQSwQWumw95Dr3EWGfFunaiqb63gEJAuABmbPmyGDah1t8RYKn86EPpkxPvQYNdCJvG6Jqtd"
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
