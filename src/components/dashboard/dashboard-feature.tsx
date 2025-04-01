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
    "3YiopAdb9GmTSQ7sT3BVADJxGZhzHVs6hPQRfcG9kBnW7XWeumEdFkg8nMay83Aceycb5FsZ1QVTQCNPR2jjkeCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28zPJYc8y6wzMgsmDbf5KZSMp7pfCuv1jAeAmU6mJW2UvWmgYehg5pSKfyaJceJHZu7JXaoGYJtoLzfLhyoSEtn3",
  "key1": "2QMe9SeYGUNSS4nYxFgB3c9mBQjdVudfGxWq5eWVSa31p4D9AFED1EGfAHmoH99enhS9NvEA2AcTJYGqu5trRNLU",
  "key2": "4w65cU6XDpJFVw5yGKTpXfQG4v2vNXxt4Q7gamq8KiE19tHQPMoDNVzm7h2GCLXVhMNiU2qGSs3TyyYwwTXHAMFa",
  "key3": "3Ci8vtEbmfPCNdiPXkTLVo56UN5ch6EjJ7tWNpRexuDHGW65dAsNKZLjHQVc8VDXPa4c9DJHYedi1tjUG8FHVAf6",
  "key4": "2tErKddEicD6JaNuVDHtHaGncrR3JDy5EvzHYrFakk45akR6ZVBy3D8KpSfv7qRfVeZKdxMaiQyTH1nxyKQcQ1Lf",
  "key5": "yQeQpKkydi5ePV6i89bBHhjeZkJ18uqjQrogb4hBVtqrsSbgzDZV7jLPDzUwFfsmHWWmWF3WTBswZrdAhDjGfbz",
  "key6": "5TTXXqoqcqPZHZtQijEDYBX5kwh3fKNgvhwG4CySYGuT47RYtAtDECQMf6JhSHaZTCuKDvk3cGZ6WmsVbbv5SSNq",
  "key7": "5XnAS62Z4oYrjxfj7AGUPx8FJmtTaixiBep4q3bHJwGf1TLTDLXCtyKYUwLq3PkX8QaLFTzME3GrRy5oXCoscWus",
  "key8": "4G8HMeQUHEQbMxSzBWyncCfN8SNwdtcYshq825rhV2dcFoKTKrAUpX5WrxLXFi6AvreExXRzGNU4f6poimByDa4s",
  "key9": "3RHAf3GhQ1TyAAJA2RLpj5dgEQWBtdyRvsz3Fe5bZVQUET2C2EwKFbqQfV7ui7NnBMVoRQhnq1FqRjeUZKSfdv9z",
  "key10": "5EuPmN1U8FauQo1hYo1mvPtEtRz6161MYDKmcJYFYCmUzi4rxZUqAb5w1hFxFymzzsBK6dfa3SaMh2Xbw8XgmmfF",
  "key11": "cjrNXHcaNXWfDvV9GBFHZE5GQGYU2yTV7xML3VvNF7ECPuKzZq2QfuTfLnYYRWUnLwCGjdcyw9GhahXRrV8Mw6u",
  "key12": "27HWzwkSmPPGCkjudja9kUC94RJwLGoM6QYtbxR7qkKVcU3vJvXx245XFszeAvSarmN49AcZby2xyrHxKDrQK4tP",
  "key13": "2J2CWCb2QjZNNLabJfYtVEYDHm4C5MR9Qb57nSNSTyetmtuFT4YunNconXVKLUuAedxx6GH89XYVDURT4xi74Ufx",
  "key14": "3VabKVUkxeWoVNkS4vU2TVmZgHSnJj5NktNdYew1M8c3rXgA9n2U9pRt9BN7sCAXZUqfEMpuYsd4Ajn2npEfPLtM",
  "key15": "5vUqY2QeVhzsLjyDF25Nk6uhETXjWJdR2mXFzXhrprVm2QJa6zRWJwVw7MT2gsPdiPEhbsdWTSUFRexHexD8eLpg",
  "key16": "27JTMQu7dMD1U2UPhR3rT25P94c2n1GyU75xcRnDW4gA4wX5ipFBta4UMgRWEJncEKHZYrFQ2Sre5mfAqxcEvgyx",
  "key17": "4ck7NmosFz4eKN5zMoXii4jArgm7vS7oMWxguMMcP5tvgzqNkxgx4e1nbdfcR81e4h18juDj6Ec2bZnn1koYXRBf",
  "key18": "4zqQz6gBiC7bNf9VwkLWDgnxo8bRSn42pnBm3EAp1xKSaoEWSHh6dyHDjmEkYVQgs45inebt7yFaevGsX1RA7duy",
  "key19": "3ZuQtMTxxEUKq6QPT9zV9jDRMPoRgT6suKFpDrBBc7n9Zr1bBiTaz8J9hozMFRAtMd7MRaigupaE61ZbTLmBNhdx",
  "key20": "2wGkNGNcX8nCY52xyiuEMrykCh8LERFKJDx5RZGLANeyqoBKnuHFZL3896V5NP2iLKTebg4sotp4jUEikcjcNsYW",
  "key21": "3ctVnqeuws7YbwB3M88A96Mb3VZZDmD8g91xigdr8rXM1aQqohVAJDg587qpgcD2Eff4BpVjjDzXnaMKBkKhi3bY",
  "key22": "4eqRusSxbspcVo6EEjv2HuDbZKZCptYT5jcfqvFwuQoyXrc5UW4ztta3rjEWZ5hR4F3yCRRoc8pS5cvfrQCDAT91",
  "key23": "59wVHn8kRiN1vcKt8HCoiWzPSBBRHJSEWkdjSPsaoVimqT3XwFjBfNFTJM1vo5hveL9hoeqc4XeTiEuFFM3gfZxw",
  "key24": "5FdJvwv796ANGNZPsnj6j2miDgHknjTHvKekbQ7kf6D6S8XY29GJxTrRWokXjTUxoWZBqbNcPPCjLiYKhWn4ZQVH",
  "key25": "3h2qaodwFqow59GaTx7QaJir6CxuY3491BBjMavfS4Gac11fzXCqwPoz4XVpppemmueRYwqqqjMapNy5gTKh56ia",
  "key26": "3pMtg98xXnmGGHXfedTnYTCRGyPBUMJfVu6kFMY4jHoZmRdXXPVExmQ3WFt5ZguGjtX2DnPRVKXo4QmhCHESMT2Q",
  "key27": "39FaVqW1PM86YTrojX6NbdYbP3idmwa8vYfoD7LrhDfJUkWVYTrpHpPF2kV2jMinDFnmkfqGTPS7CBbxRaWRfKS3",
  "key28": "5GdKDomgsPBiiWeFd43tCqTfbGT7xtF5AcQAxaNaAE5Ko3dTqoiebgdTMQHJhRfvXnJhaPGDfcb5CgBirmcqaaQX",
  "key29": "2Mv4b8dnuHqPcybitff8MsQzqi1ALEqehkmQ55J6DqZtkBnem45xgcBKx5hcK1QZuvKRgsWj556mQpcAxjtyThfw",
  "key30": "3VhQ1w9ASfbKVqXaTYYPXhrq62APLanEgJtVnP89ZzEB75T5DzfKNTyrBJ1jHiJhE5bD9Azs3hWMrTprFXDVDgjP",
  "key31": "4YrX6gVJquUVd3YEvTZJduLqCzKhLAGCiVeUPdfb46iJKruCnY8sfxxMfnkr4q19i31816WDhKccfheYbpcL167P",
  "key32": "4XUGK6uV6jmAw38eDxdYQvoYX1crqX8hnHoSrz9UX7LZWqSoKEKhEx9pWf2ahDsBGAYUqqhxbfqJogoVZpqqhR7",
  "key33": "39YNWjTYqK4gxRC2RvxY4TrUNbCYUMXMsbGeVVAHvbVY6rwUFPx9jpCke1QCFZD4SZRSbMzV1SMy8VERbMe3pR5E"
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
