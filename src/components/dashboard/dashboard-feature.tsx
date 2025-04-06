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
    "2sF8ZwK6JDpv11Pd4hfMeoMeLPofEkg8zZqaD2G4K6pvQdyAsFvFDkYBtCEHpxoCdAxfyb3AXTFA4D4S8GJP1EP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jAeZgPeEeJsDaGPuLfPkhxncB2SXegvGhEWCKbJ7MQa7LNvf5NZLywNFgD35dvfoW9sZjDpnayb3KDEpp6cd2JD",
  "key1": "23yUXwVmZAYtneuC6gfirNaoVm8bTRmzJvtTM35LYPydqKmGkz1ncqrfHFPRtMewL9uSDjgmXLJcuw2cjK75e75x",
  "key2": "3is9KBxZZFugAdLb4YxRfpJjHEoauiPSriWDLK1ZeBjZHFgeL8H9x2zDUmuGevhTDaTfTFoNxgLxZzLWBn21uN5t",
  "key3": "52ycdC1PhtPAQN4bjSLxyYJyor9Ff6Q3KgTVeiZDCMBvwHVy6jn2nJPhP5f5HYgyRaSorKyPUfCQe1P5Mfm9EW4V",
  "key4": "5MDCk3Eur2ZrWDgSVoPNhXgXKcnYkHFrybDvVjXkDgvdn9SmUc7H4hhQeG3dD3p45coCNtVugYfDcwHDcDhSvXUY",
  "key5": "4nFPZ7ZCwyGM53Uj3E2TwJsUccSrQ9hMg1DKen1MgpsaBNzNXa8ruPRWmP4zH78VnUD7WktQgH5zfSW2d5xvnCjJ",
  "key6": "45utwedozJxecpKH59kBRNkwMVPDVFDv6eH5Pwx2dcxpBFCz4nKoEqLQ3UMbfTZ1XqjQuRRNnPUA74CCHktbYHJQ",
  "key7": "nTqKqGaC4DfqJZ8GovSabhFF1ZFJuLqY7fSf5LLwxTEDtGX5HPz8iYW5vEoPB9RdrfKVndGVeRTMiJfZMFYjexC",
  "key8": "5wVUeUGzVYP4PzRZ5u7eKd5vk39r3814zqAN5XDftiAD6rPFBCBfk5AXNyHb4dHzn8M42e75s1g1Y4rbLrcae14K",
  "key9": "nmKbRH8gc7aw2okX9JbP3kdf8Qye42hToNKkGHvka9cwjsNdqtAV17Qi7h5gsvKE9RN3qRxSamHFS1BEQK7wqpn",
  "key10": "5g4bkdqiNzVtPwfaArQ6rX9D6RdvB4PbMzekSza3q3dzG4FMQouKUa235SHJ1JR2HG4LBeQQsXi9mNREYSGzZVTe",
  "key11": "yWeJX78vCvVPHkHgCt8DVfhazzVpJwjgdgXNNhaQDvgp7A6CRxxTffYJt1uita9h2NfCknbjHDFtjHc2zf6uFgb",
  "key12": "5WevmY5nv4znMXTZobjS95XfAdbpU2nrQ3dvgGqYkU477EBWEN4qbsGnqKBxMFrHvH6PEAL44JUwTuqBphcHMTmz",
  "key13": "nzeEXN71PHXivKXgoDy8Pwsk3q7yDBbF2nsSECsxY91Xz64ZFTzBtwSpbvsBUSqJ4C3bhvVAPKPKNfbEh5YFP2w",
  "key14": "5ztJwBj57wJsK4pf1TEF45wcBCiP7pbwuGm7RVPj3rw1x7dDRvEaDTeD91cz1z3fqKj8YMc6myY2hPEm56vpnTtf",
  "key15": "35DJgjfqNfcqV3iFDvM7GiHut7pxBbqS9S7otqkMDzx3RJibcSRijtSjQkmfg7T4JtmN3AoQrfopoxj6G5PMySxn",
  "key16": "3vWdd3uqadADxaS2UZWLjexvxdNPcRXBNMt89rLv8pCkQhYqy5G3u3Vt3KEdxSndBC9Fb3YtMPCnm63SEFnEyJFk",
  "key17": "37mdqNcUgfXSHrpy8hET3izztNuz8JYTmUg1HpJ2hWheeCZYcV3XF9Dtr2ZawVafxuwycwFeai3oitWZNsM8T9ML",
  "key18": "3p9SG1HMZRrEiAL2a5geG1sfj3DN6tix9TZk14SNfwcGEWaLyS1xaa5ht4NH8U2oJxTKzFzp59rx9XXXwALnwTY4",
  "key19": "4fA4bZiJyJE5wmWiHWYyfacjBdZP3wix3C69fJgXyxRc8cRTjdbA6dDsnTAx9erV2UBP7hZJGpi89NdWm1CxC1QR",
  "key20": "3WqFzEMGxNdUU3mew73pZyMCnadka2e746bpc7VpmqpuV88hvqwUTs1YooeG678fWJHUECaQ8wPdLEBVoGhyvTs7",
  "key21": "3zNpfe6HRSvr2dD7o6nbsUphwCDAexRgyRtU5UnH1j1o2zsDaGYxquY6YCxLF1W4pZFGSeAH9TnsRyFTAZpDFaeP",
  "key22": "27agQUAmpEufZzvGssrqWegspWsWZd397Q4SCi5LNQV3EgeZEYowUvDHx2WWhvyHonQKX8MLqUVK6JvV4uUjWRrT",
  "key23": "SiiB5kzYYECN35FJCceheTQuHcTDSMdbL9WUUahFzBmuuCpLLVztzjC4GjJHUWHjtuCNk35LRQH6VWo7VMzAjMP",
  "key24": "vaAG8DgbLKfiShRW6PP5ccgtUHdYfwai8fUQQtvo6uS3h352aBcnYMMWec2GwEz5A3y4QY2AQ2XAZGrpqnUHXWg",
  "key25": "X6fAVmL1bXNez1VRvQf4v2yd23oy7g7NFbpEq8xYkHmWpcyYvXH5qR2uf6pQ65rVt7CvgtkT1ZDLbAKFaMkWSvr",
  "key26": "4hAMdKvPJfbPKpP29kDYBN7oJFet4MNauFZgAKsQTrgUdDqvPCo6WpngJLZbmkpxjUTy9Hv8PvsjR8idsoKKpUPm",
  "key27": "5SE3fe1CGzMqVW8geXEsJgho1DQw35sCzrZDQwzPTxm7ax16cD8KXZaKVeKQ8qvmKZjQPaNPwWLyBKYFdMXdD5os",
  "key28": "4LgYS1q5tetNS4GgmoRuiTcfqd2DJhWHinnvFwCdTA33kGv6vKqrBhgbR8pVRxo67thnfDq4UyQm7Czf7cKwU182",
  "key29": "uhSgb5yUHXsgGRnEbZUDbHpgKsUNXrVwpnZgiyGe9DVdv8zC8yT7L5LYkrEJCxPAqhpqmeQDj6N7WxQKrHBJQg9",
  "key30": "hMiyYsaVRXHXQrShJS1zQ46MPar5NYjQbmJcnYx9DNS9eaZEthA7Rxqwe7vuCgRNnVP3jhvrG3vAWrACmoyvBsP",
  "key31": "JyF5s5tM2jSuLavtmKkCtDjj6RcYQeLUfVgHUu2BGQ7g6TDnyjLBz9hHmNjDDKaS9RifDdrw5oG1XyiV7FuaJf4",
  "key32": "4ssPrGh33QqMZhRisMVgyHmKkbMu6FtS5NvrW5pqMacSmijBXGwoEEZaEkuxQBWhETaXzj3qVtP8SsYrV8fUPcfR"
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
