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
    "5kGRRUTScvXbAPJL72Mdudx17QXDvWRBPZxzaaS3AvUyyZPCcp1ZR1Bdd6eUQaW96UR4GQSiVb2aeCnESLFMoHdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54FaTtbd2BeCAdfGNNgY5QDwWXjMNf6VwYoG8iLspaS1S1XxQtkbv9EkJtmhsyZfwiGnMiwwEqAEMdzzBcPD1FFa",
  "key1": "2w84tsFTvbkBPjvNsTLKNwNjfN4pMtx2byZDE8pHLny8W9yoGBe4NNeAzRVDbmsugQbLRCmuqugjqFRKfYXueNEY",
  "key2": "8fRg3dFgpUnFXYrK4RBBGG42VKpM9VzjoXeq8H7fYHCYdgokK7jWKNQNiZho8yuTLhaMAxhRcALdbpEpVy3B97y",
  "key3": "2TizAf7eFGKCM6aGWcqXjut7dtXcJGijewiwNyBwYkVDjMP7pLLBbQ1e1LNLH2VBaafGATKwZvu5kmTKmZJjsixg",
  "key4": "2uNi29orKHmTBhdKGnnHdiSopp5geatVX7dNNzyNjDguLZPbWgN6Dz5F3LK1P7dKUWMh9fXKVUoA3n7YqxFNuzPm",
  "key5": "4CAhorPzzgbGjhR3UHGwNkGK4dicunwnH6rsjaHwFYQsm9omxVkxHZPmmGGozWZozWqc7nps97wHEWeXmo6CiM9c",
  "key6": "2ERJxM8jPUcMz84726XAr4Etb78VFCT8F1szgxbQDvSYNWcVjaPNBAYpdgKzYYz6yHEFJJmJM6UYAkK1uj1e3GEx",
  "key7": "rnEyNMBgV6VFW4JoMvGfSucuTw1Ew9JfDZKgYPJibEGitMgWsHLvLxNP43mhXCSWPiNe55JxKMbD1RGqsB2ss3c",
  "key8": "3BDakQ5NTC9VewE7ZjDKKkvnsWng1zSebKf6BbwZTXyr33WifmruNKdZU9CAZopejzp24U9iH2PwQgcVSMe9hz43",
  "key9": "cb7Pmm5zCSpcdGrphVRAcjyQzUgcbHeJzQHrPKphXiCuHNhcJ4nscn62qhTRDhwzytP6TbRLWisaTqmTYaL1wYx",
  "key10": "2LFXiC1PeVMoAxGpnCmiVafnMMRmNBKLriFiyPZBkhRYCkmHHSJ7Qu1akbZY2XZgQkUkoE44ivMYQT6LWvVMr2Dv",
  "key11": "2KWjgY5AGYtCTBnMPtQhbpDuZdsD5mBykDR4PHLUv8k2o1W8dCG16XFsF81G9GzfokK3VRDkHxujmfjUdyuQPWLb",
  "key12": "5JhMhWyoLkFFvFGMZwav34yhraNiqt3ch2q9eHnLawaYs5GfqyA6edtBXMAo6S51sizGsNkXLQnoiPNCXJ6pxzwb",
  "key13": "39ow836jwRCsB4bwp9esvmdmHKBVpbxNYcnfop6h7NLBCzeEFqzSDvMggG9mWBCXyF4tgQKmzzLsxfBZ2bi2L6ag",
  "key14": "2mXZi2TgGQyqgFq3t4coXnKVH7BkZqUWTMvDzCmz6tbZ4iCV6kK5LF38et9LctAnnpJRs5kkmZCLosFTTo4Sm6rH",
  "key15": "5g41hLWFptVpHkRiNgHkgY1BezFTsQvMf8eApCEVY3Wn98h5wCk8Wgzd1KPiwSJsnGLsmP29AKsMMUXbC5N5dzo8",
  "key16": "3yEyn1HjEMXA27MTN7ao4xiwVB6pE499gin9mgx9y7PAKf7wVNDSGgakq5tFVMpxbXThqK9pFnaUhHVVZGRhcT88",
  "key17": "35au3mR8uYgp3REyzJN77vApoSF8BNLR9JBF45CvCXsLCKxfX1ZyzoCY6Cim49xJqcztV6AaKD99u2gGYfKa5Edi",
  "key18": "36aMZZpKYLcVeyQ3F37dmnkugpNY18V6KhGhNuc54sT1dqQ8HsbQ4RVuLSZuiNgNgWjFumQaLxds2Jv9FSet1sE3",
  "key19": "3QiVGWtG1Fqvcebi2DERWmzmeECJ16nSXyHzhEibRxyX6594vZqUPArmopVuoShqPQ8AFrw6oSxSErAKqq3G4B8Y",
  "key20": "2R41CcqACqDmmx5PNSCwmxSKVMUuR1k9hxfRv1WVWreoug7KYienfaVU8Xf8zegfYPtsTuc7uKr8VZJHNby1mQKu",
  "key21": "5wkrs65YVeU3GZAhDSRn8xKjoDFuw5muqVTSd89UvLWAH1hjM4xPenXot915iAjUj2mSBavsxuD8RiMbLFpa2pTk",
  "key22": "4LPsFG3ePNZhqWoXJ4iXomAgwHRBuceLrnD1PwHqXQsHMiopR4TLKkspA7FyFwTkcMpB9PYqzAvkFK68bvJHt3km",
  "key23": "56WkwLJfvhTifVK5Vk1iumRxKrWHUsgDVxfxLAb3PdGHYPsJmmgpGB6Y3BzdGB1Et8mJBBFSL8AFZkaSSrGwXSrN",
  "key24": "4ynfcfYScetMLE2hJik8eZG6npY937sjs1gswcbx6fvduxodxsmeWcaAyBwNjQdL98vFoMsGZxo99YPhr3ziuhA3",
  "key25": "scWT1rf1iHa9sWM1WXzZn5pon6hp4rCHdK5y2M57L5Zuv6hRJZvgGRP3TXW8FpkvPL3BwGHrnruNXAbc4kuEU7F",
  "key26": "5vCFZVq1s3VjG5RzsU9PQwvWLZH9U88zzog6X7c4dfZV99fpE7rPWSVGVDLLjStSRKmBmteFgXC6sBV841HMUcYC",
  "key27": "wrjZddjZMw8v8poQiFw6JKbxFkCg6WcLkcj3G5HyCEh1dSuvisQBW7sCCseJPf9MSB42qt67PuAzPVSM3r6xGw3",
  "key28": "5TYWxmcsU2aKQDwyuorPpesFipsaErpUm68Ygp5uyJYugVyvBmcdD6xmhrwVsZGA6WG8ALczgC7NYNSWSUKHVwG2"
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
