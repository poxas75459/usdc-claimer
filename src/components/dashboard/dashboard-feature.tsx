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
    "5TAyh794c4A55hMQSjjqEMDXNDhfkapgshCWTThWyhvbuGyqPQvnq6RKPTFv3fkE1Po9RPqZo9WFNU814kiu5TEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BsdNdwnN1HSFTKfy6t7K3QxmkmGsLVNcgJvfRk15rqXKafsY4hbgizhYGJLZxpuKWqsCpuYV6tgrZNuBCvZLpiP",
  "key1": "5Tg5EJyvJgBJ2MajKa89soXev6HLzkjajWP7Vp5szM5CuEcL8LNkkFnZZYVBk9C1w3KcTmV6rewwiJcfZ3upvX9g",
  "key2": "KsY37oXNrQRpzntnyk8uEUsiuo6vMftKkifSCj9CX6gQC9SEJg8BnUtofEbRWWMpBb1tZswCg1SAWx6LFbaLQUE",
  "key3": "2aahhnvx68gEjAAGKVJP6Aza5v4Roht38FBZ7KVtBEgWx7K9ASnKsUzos8WzneqcoBJcsMXizNokgFPtM8eA4k2j",
  "key4": "2QQo8nz4Jbto6sAP1UXVfB5sWx49b9kzKT38TBeNhofSp2cGrKWUpA4iP9dnbhQv6Smg3cygDW5rtG6Bf6bm5N1N",
  "key5": "FSNyHJj3j9koT1JXNmaS5vJ7e8nEB7C2TTULj1g3YSjiLwaRXACxopGBPxRtYk3D14RSPYJ3RYaRC3FQeZbDzd7",
  "key6": "WPN6AU2u3TuFnSjnSLv9BF8dRHhBhJPGCVDJK6TPMxHS2Qjm6AK8VhpoagugL6sRjxxWXe3s18EQXSpBb27ahuX",
  "key7": "3dbfHpq1a5Hpt7Lhbzbgbgp9vjm5j1uKFxfxa95oF7f3LkYqMFN3uGnehiyAfUPWYosiQGoZHYRrgKyzTQ987Ch3",
  "key8": "bKAdbYEDgZ14zhCfb3KXJP4dxheJfbRKdSzc1BscaUA8YpMUYKASrE5tsmcNk72cPEizUxMz8g32kcsdzmqQqx6",
  "key9": "5iJsNCA79qipo8Qzw9LsQYhmUUqpzwt32wncrz9bBvMU7MtTamEMGECgf82qPMduP1QNuqeCm5bPUxKZKyUdyAAf",
  "key10": "4eEfkKZhcditafHGcCi4FHzajP6xA4hvNJbNBFG2jH24TCnWwFbFFUvgx18UUozPCxoLpjwaojuSvJ8sZjHwvh9R",
  "key11": "4iAb2CH5fDzadZv1zqrD2Yh6LHNFtvmPkKroAAKNynXAgxqLgwtCZj4QDZMGQ3e3FAJrD7KfTgc7n1oGLzZhdz9H",
  "key12": "4KEqvzdkVy5Yje27HNHLWMsuhtBJkKaU4zXy9wQRxqXtLxQEDsCCeDzRYjCmDTUyPRtQG85xmSegqWVHnFUfhDxW",
  "key13": "5BhswWwtgLWR1UTqMDVgarNeJdQxnLZFhZYLwrtLFjRSjLxT5J1k9MsYMEpKepDSvk7oHg1tZfqivyPZ6DEo73ur",
  "key14": "2hEwzyby7B2NZwV5f7GcuvgaURhfnWQMCdFmEPX4pTx19HLxoty15D3w3eNmSqn4nHLDY8JHgjieXakSZLJXyo2",
  "key15": "2xng7BfGPqwcWfQqPovMaLQhCUKe42SVgoJcAFu1h457ewgCVE7QgMbgXgjzkjmSd6GoGi3xQyvzuEFS7MsUoHV1",
  "key16": "4EpbmtCqYGm579bKbsWBgEQBMxTXdWABTAGQ53d5Bcb2cdjMFKAGFrYgcSLFbfYi2Gb5FoejjvP6ihTek9o6wNAf",
  "key17": "2FGs8B3W9ebt1kwYGdbneQPJzcoASeGusR2t4WYdH5XJxwTGKz4d5CymKKRGsHcKMGRF3Mxw3rFw43bF2EDxyfSQ",
  "key18": "58DnMT1dcvRqCEupeawctUCz3joMW6jgG8Jv4gi1cDP5BWaHdeNKeyhdVVTMm8nf13CPnc1eAyQU1WxVBGmQbzPP",
  "key19": "2uATHRq1KTki8qLgr1Fom3BVRQJ2rzx1dwRM1MpZM8dnjVcCS4fRi9gCv34NNjFbr7ePSs7GGJzzsueKPyxV1EF9",
  "key20": "27MJCghrfzXxmcxrEL6B9Wc4iA8FLctUHbqDqcYvGJFdqi9ZJeFJBMN7gAVpzCxYH9bW5nGvUTbjnjvjG5g1eiUp",
  "key21": "2Ahe2PxWfSok4UdJvgAZpTVhqX2sxi34oY5vVZKiqKrNsik4yUvjsW7mQt7eb5nVexqzibQ2WQfdccp8mTa43bdo",
  "key22": "4E4NG5Djmi9vtvePjSsrsEbXA7H3eYFTVE5QMUfFUDUFUmi6HMR6v35TJnwV7KpcepQmwWLVi7TUywSqjB1fbNCK",
  "key23": "4uLoBHy5UDh2BY9QfGEAASb2WYfRr1emGhFcb2rquNxS12AZAkNryUgbbcsgMtzfnUp4taBq8vK3n5XpnuMXMBZq",
  "key24": "6FuumpooxZBbZs2kLdXKPTH7xvejzi2A1oNTbBx2Dkc4KptVmn8NPDSwpLeCqAwgGCSP1cj67V2ZD96ibGqQkP2",
  "key25": "2NzgGAxVPq72sJ2W6YtuvLP4o2ZmccD2siX2v6FYchv172bLQYjDzgz9if1fBpyCQJBtsKE97D7a7JD9ucyP8MP2",
  "key26": "5anzcmRXemJo6r8dDBbDNnDpbpPiUNmpxoYrCRwpwEuGYg5VBRtag6feLvbchMAFy2nqdyhe58hk8Z18cK8jNixc",
  "key27": "5JwdYmemJcDbJFuG8u7GnTQ7bfCrFBxPcMvDRUQNijvy1s7NXNzD64h2H2vRqWc7UUXqzz5Bj2ffxADkLKrq1J9e",
  "key28": "47QpyWipNMc66JpNw1LswRXTTPBNXmgKKTnPqVa7eiskAHY4onyRtp1FEzgDcAaMFkVpzqpQnUtEhGgwcsqY5hZ3",
  "key29": "358YudrgGDxqUUiHLDdJzkotwG3PijPfrLt9si2R4G6qXxVJFdGvKGK17M2Mgvud4nwzaTpC8hLRBhNoxYR3enLz",
  "key30": "44L6PVSqUpPrU4MMC6hgzqccQc5wB717Baz1Au31qYWzxKh4ppuHTfyjWi6stcWxeXwHcGQ9gmtMWNGnRQe1dUHS",
  "key31": "4MU39YXUSoPHYN4NjoUoZhs4kFZWGWJfCrd6FjE2FnDhrBjmnYP9YBDm2naufYnHXRv8wKq2TY5r5rwKmQ7VqkZy",
  "key32": "nsQU6nagNTCFBdVktcYkHDsPGPLNX8Kb7MYhSMxGLBiR6N7ibVDZWaPZ7rT4pAzLSB1LEvyrbvJoo3nFMgjbWqi",
  "key33": "45BJw2WaVssSFUpT5Pb7tru4wzJxm8eY1FsYtu1b37kZuRFVskuH24abzV6C4DBvfyZQSLawnKCbDitw5WptuWui",
  "key34": "4gBwTSck7kZZ4njuUgwqG9iZDWbmtmvGWxn61XKvKGxPqRnczTwM3UnbzEdrvFGrmFZjaUu9yFDoimV8zu3nCzzM",
  "key35": "2guW9CHvjak5Cn7RJiQE6fR7DMABurhkjmrAY3PRBZM6XZquaNF1pxeLjnPfrWeXUXXrq9jm9xxQ1c5sAVs1J4Ct"
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
