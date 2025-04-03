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
    "VgtNNWP9ES3YVtxkG5JfMjaGx7FAp2X3F5aoasoHax4hURbHGWVPYcBRf5NnLMh5Mno6t16MXmkALLq4yfQwQxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pDPVCgq9ScZH6PokUSthq2Q4Z1rKcqMuWaC62smzuPjf8JQfxTT6BAkyUMupQrpxGRud5VUs1WTNAke4vVz5WkG",
  "key1": "yHXoUrDf6jcZA6wa7VPGUg62ComUbX9zFTPTwiVWtzyq77rjjiG6Qhvie2Jaxp5wSUhUq2amo4gs7Ag2kZFgHJF",
  "key2": "4VTdosqpWevRNnXbNcG9abeuVC18PGL1duME2FrHwjKWe2kk74Qh6yv1HiDE3pY9DubSNFPs8eEd5ECtJ1ZKyqKx",
  "key3": "67dg1T92ma2dhjuQ5zPrT3D3VukFsDKmrJEY6HtCEYHXeeqS5KgBuUorEWboqSEV6UFMEsJPjXvkvuz57MKJHCfs",
  "key4": "3jSfKzWqw1uzQFGLppL5rcDCPgo6rSqeffHXxPzR63pq29oWbYGfzPbVkYGo9xcdxyaybAWiqv7DYLsNjz8dZz7s",
  "key5": "4Bx6aqoC38AantPLAYx3DdEh56rw1mB9hTjii4dc1iS5YZRZY3WcP7LahZSw8qXK2jqdqBnwWfoUu1fbmGXkxQ9d",
  "key6": "FYtJncdEcpEDPE9tAAY2ithAbdv2SKXR1tj7tDu7vCpiuwdMzeEtoSeirsh7uPQQZx79i82Kf8xsQ9ZgJKZ6ZnC",
  "key7": "4EM9qWY4g5vmXgriQsm8oDiLREabtnde1QR8tsNkfxAAZj5khz4awNSAVEY6fCwQ4trrX6wG1ErT3LCMmxjacbtf",
  "key8": "58D6hQS5A61TbHCYNm9CDNwmYm5HMmJcrjMZpwepGLEBooBnVyKcYEwNTMTisWgMruAPvySRA2W1FrMm7w6VmVeM",
  "key9": "4qX12z7aJzRVRRcmc8Jua4GH5qohezJTJWwnwJVbECDYrGmw6xF4jQqtMVz5Fjr7nkCLCnQNueUMu7XEVnfKv4yS",
  "key10": "2X68hF6G9sAVUuMrtmFXAXahgAU62RppFm1rMfu3aWGvKH4Uq9GmtJz7VEkWXcuxDEqgcmzJ9TPMkYQNjzDmtrcG",
  "key11": "5huFHXfniG7oJh6nNL4aKGppGryKUqTvjh7B4WZLyiXTwmVGcawzZS3KqpQzyRiHgqtTu1F2eSrbcvkuoJYTfMHk",
  "key12": "PdiWm23k1ddAz5SGiZrrjtLqVDabK4p6gtzhiy5u4EyRDLJ5JQ6box7oCXtarrV4Rc4vFWHHfn6FDr17uRxzwXc",
  "key13": "34npLjbD8wDmD6o4FxWrT5nbxyXvuTVh7BjGX7Vj8SJMkkiRGyHvi1uNoJYUmjCxf1wMvnnCs9p8gv1PH8CTVTxy",
  "key14": "meavog2viKBBF2pVpUhC2Ganc4p67iaD74brXpbQVsrMPJArLRLouapdADGwaEFZLZTBpdc3q4HBA57ksKuQpZC",
  "key15": "4J8czaYSc7qXxDDM1MGtP4jhZYSGd743M2DnA9wzV7WUecy4EzTwA3AUdpBfXtLM5FS11MKfChG3CacTgEGPkupp",
  "key16": "3bHegtgbfZycUjVJDrDwz6P1QiNM5WxQUXUgkU6k691YJGUZTN5qCf3JUywH9SCRfJfu131eJf9YupNyYNNuHn9b",
  "key17": "5Qc4kJFSTzVpRFvc83Mtjh6rg7L4R9RacuFfBR4xGu2TJcZ8CxHWEW85XtYSMrhxFeE9yXku2uHffkyxBzf4FyHe",
  "key18": "2BiPbjLqkavEH6KiBCLya8m8U61bJYAmj2Nj987t5HbGyB3DUupxDJydV8zRR23pSFGYEL1UMDkSgebzGvehYtGc",
  "key19": "RyZnx3Gpo3kK6CoqzHQmh9NNCAFY4mNKzqaBGx3BxbEJbFtduM5XzPfXKB1D4BeT2UDs1XVTkXyo6YMCxAFjqbM",
  "key20": "4R4GsXhe2ahAQxmqTURJzCNFixw4jawDmJQBb39SqHVgx4wvFhuHtJvf2AD25Znd3fiByvvE6jxmMwAxs6RZnR7n",
  "key21": "zmiePjWkwCnX9bTn6JxdBzWExjS666jJpfHu4gphPrFpD45tdWeVYz58rh9wvoZosFgMCzBmQzQUDwGG2guc2uB",
  "key22": "k9jjm58kZVZoLHC6Kq31GZacWhCGvZjKy3RXR7rxxYrreMBxzMNLu7WzzZoi6hSQQ2rd8MXYnGrzSY1Q5kXVpVZ",
  "key23": "4naxqGd4Eabi2stoD6N55StGXwWnDQaEx9iTSZE54x4GeRfytNh7qvZT5mr2SCPvgW6JkzDpf4YNrG8AP6UGkmNu",
  "key24": "4egpeRQwNidz4hLXXhpSJnVGTdLFKpsjsdir1VFZoLo5hEUxzEqufjs9XLDBFeRfeTx5Z4SEChHT76t9C8RSx1h6",
  "key25": "3BwWLLuNn9DvpZvwXK5uoWwGsSZn2cyn7ZDHbEXdLBSWoCy3JTL92QF2JGNohuN7hxQuLhrnq443DZGNopYPzr1j",
  "key26": "3RaxUD6ATs1SgshpEL7eNSfxpZ8HWHtvP2MGBFHyVmhsSuFUqwsN8bUrpX6RKS7xxpUp6TaSxyb1x9fDdggBnfyX",
  "key27": "4YAsti6zoXrodTZbf2nThCCTRRRdPWcNU2DZEVHSANVFWdMQ8nFMekziyoxh93qBSZpFjk5PBav5EVhJVrrFdbh8",
  "key28": "5W6Nvd64LYnxGi5JkmKTmcRtzKFRgMsqcVe9ik6UEe8VxjZvrp9G14jXAwMHRcDQiHwSRMbWPwy83p1dMSSHKJb1",
  "key29": "9AZuWN15n37MuEhc3b52ezLDeG1pp3ttRQbWoqWRZ2ibVBvDkj1xrmdpzb7ma3biaprVRjhpWtptJ9fTXcP1HLh",
  "key30": "xFrEM8uDCoxvRjquUV49hG452J23E4wKKHnsNMYuzgcn4uPEqqW7KF88222iArQm5XPdopNZ8UvzWCuZ3Eq1pNz",
  "key31": "3qDWFom2Ekx2JMxqJv4Ahkb2ytPAqa7UY1HZhD7x8rJmQRCNzeWCFdUp4Zg14JCRmHrh7VuUa1ddmu8S3pFr17dW",
  "key32": "3ME5TwDprgxDeJ4V4cfTX5nPvhemFbNaoozXb4kvLnVEhDnn2CosmHXeddgy7FazJtygp8wdjM7AkFFp7VF15S6G",
  "key33": "3B3DgZumpHruwynUy9sA5TbDuHA2EifuVBawg22WQQSDA5h8Kod1SKg5CPK3nD52BEXqRf971wxjAJkuTJ17Eg9b"
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
