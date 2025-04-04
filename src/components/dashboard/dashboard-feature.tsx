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
    "2QgVojCTt9r1bJv1JLDeNNwCZbb8Ybh5UMWU16LaBaxCAfUo34dzREWTcbqqfzvLJGgaeaABJF6ApW6JJ6CvJwEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hNJJDWHnxMCYRd328s9222jEV1A4nEqzTyMqbzEfVCTDX58xXaF8Lb7BPAKYLRCBKAUdzCkDX9ya2SBa3yX2rvr",
  "key1": "5ECMSmGiEA6Z5Y3JTsiatUAfvrHB2t5ZmNXq8pw5vQYDCkwEtqJcuGqi8WF3RjpAGgDKKHbom3gxT2tiCYgXvGGP",
  "key2": "4kiBaWBgyBkaBNNAfqYt7rxbZhJzZKq7CGVVpCo9yJWdFuYirkbW2ejr3U3DXY4TQ5Avg53ufT4Ug2UsnJY6Unvc",
  "key3": "5ghev5xoa7Bdxwh6vdfgLN1YGgKt7BL3dpw2oAZWaSXdQ1gageu8HqyKybFLNAKim4WTeY9Ga97My2uB1K11tBf2",
  "key4": "2CCLc15iZ4K2KLxhXVmsbHktztpe2Jq3YnvuVSh2WaMaYZPRPHyrvDQ1gsxUU9Sy715mXT8wVvaAPWSwzwCD6Lt5",
  "key5": "2UAeFpnhpE1LZeQBe15RSDkzoV3ksLWkG79GSGpuZGfWRaGh4KmUU8YVHrVC2bPwNLCpVvFUWh491QjrZGPL8o2",
  "key6": "43ukasv2BSvmKWMsXGDdosCkbKC9xEeA72P5FH3B2q5bGbvqqdq1GQ3rbgHn4jMpsR6LqQWm3wrKsdPNqiADJuPi",
  "key7": "3wBJ7Dm4aQYUWuEWPkqFFZmUk4QYMWqY2fKohkxfUcZpx9wSSKSrZrAvfVRMbezrvWpx8dHxLy2tUDii7e8XaPdd",
  "key8": "4LHUeQEotuGoLeSEiZ9kjBVhQqTx4TixMddSZey4bDnMYHDX5pMquRnxm5rMxns2wYnf6QYzwYvbZH68E75QZLLA",
  "key9": "3sFBi3yk9BnXxMtDMtFjXd72vfe8XjPF4wQh4nkU81yryUjZLnfRorF8Qinz9dnVHdv79cnqd5QywdykpoT4XmUw",
  "key10": "Ztt1hudPs77UrGE7dKYtpByANuxk1DLWVg6pnBfg7CV4ESuA86i49A2ucRgi1zboxd2DFYQSfqoN99yj3WGncvJ",
  "key11": "3yNEsLCG6SptYd3y9Gy5isiU2WT4VBTCCEfpRw891bBCn1QTCWJzY2MvsF8xorUqA48LFwSmAF3zFC9vuqL27u5V",
  "key12": "3RWULrTJWCiTQrtV4DmRMHXYZKspJXwyw5JXuaNrEm6D4YKguSsYPCeJhM6iofjGNQ9GzNs1YyWGHKHBUgYm1dK8",
  "key13": "3ethYR7Tb5bnbRtg5jd68eVPLGo4grNcPQEhQyUqLkUb5acV92jKRcVCeFLAkvYK16fgZqLPWATHmDFiKvy1khzt",
  "key14": "2Jk6yWEEywjCVe86stW2LniBsn5H1xXECCnYgZ5pUhxjUGDynCxdvCbrKcJ5V7QYjRMd7DAzEn3cwHqPA5pe91T9",
  "key15": "5FoADFAMpfwr2QL8i6NiyTJvpYE7HAJryiXVGX1h3SHed4yEeastQkPWhSBjG5bghNFXz7pedFmxJ2YV6zbpaHBh",
  "key16": "56d7kstmQyPEyZ2epuLpXUCSZD79USaxYh4QXqG9vdwbDLvRkZX8N8dfYqsgzuMrwcUdgZHLXQeVcvcheYsWQt9m",
  "key17": "56HteuUJVj8NdDgjJRnfqoRwofZzwDjfgfBVve7xXJJTbnCK2Bvy97nt8s7Ts2wqTWRJZZQkw6oeBgwyXLQJ16zN",
  "key18": "5GaU59iJco9jDNNVTVXuj8EUTkw1MgUqa8KLfAZUdMg1cYmqC6FhEBHuTHr7P9sJPhY5r5LUxeV33s2NRmnYN7r9",
  "key19": "jyjr1crTyHAwEZSjxo34LrcRhz3Wx7EEJRWwKxcEmKhqBes8yPANKovmG88KYqER3eid72mmxU4aqaaEgiG8PHZ",
  "key20": "25S7X6VuamYWNz1cGsRSoTZ9srgd12DXRuG51rZgwUX154VrBiLCHPb5pqZg2wXkA5dArUpK32CjypNTfZLjVHXQ",
  "key21": "aWEm7is5qyyU5FXcUgQVNbGHHB3LZpnLyvcuTFbncNuQbABuLLo7yq8i4GSdX3kYYxFF1pseJoxgeCz4ucEmp3i",
  "key22": "5rBZ9ZPRpagUV65jkzBZoNJS91NV9RfbqNDVKb6hbTYEgxmLZMFXuW6F1dt9SW6QCPkovGzZUK6eoc2hQ6y3Ydt1",
  "key23": "4raSixBW14cdfoHWYCG9M6JxZjdrma8v3DC2Lst91h3j6Pkzimxr3r4wG3pFBemNkPFMVrpFCCPnYi4m27C9AKTL",
  "key24": "2XaPXRZQCS5MDyuKZHHfMUZwHLubUQ6Nnpom9MxykJqRbMuQ7W1uUMHnAgdKQ8k4vHKAPPZiyEtoBg3BfvjEQri2",
  "key25": "3SJR8EYqCJjjzdAEn8XbCAUaYMJWnJ87Zcu5jGDFVDSCh4dHWmLYv9YhqeXC2a7cV9nZSa2VqCFGSntLqkJa1F4M",
  "key26": "zVhia8KsguVyEL8EkuMLe55buPpdeZUQig6ahzsjoUKNb1r7EoeTy6twvJaiG5FkQ8XF5XgtVfgW7JeFosvRMZe",
  "key27": "2XzNeEakMcq2vWHszLLYSUedGDiRVQMQrLNq65mWJ6wuVRQmtUEx6wcWvGbd9ekX9yfTR7NFnNHLkMP6va3tLBi3",
  "key28": "3FSvx3tg4Vaj45Dfh2NShmFtN2uZ48fKFH2vN7Qe2P32zjxx8AS2y48Byb8t4GhBHQEZ3kPGb7BZkE5KKtFUGgNv",
  "key29": "4vJhg9H8iULSyb3ksKErFpZbiKxUFYL6oGWxdrZ3QzRYPXnGYRjfe5dv1r4716Uk1Yr9Ux5vJEAYJZ3TKibRHk85",
  "key30": "65RhahUmmPDMhGFr71wGCcZuMGGZYHxaeZtKAqQoRCwmcZxkniqBphbzYgxcWHjShnwkowToBPz5gmkHhEHbNGqF",
  "key31": "2xtwrB9TzhhaWCtcarG5yxTKae7D2R8djTcCR2Qpq4AUEzhe5Mm52TMB7bjKPBJYYrHXFPHWDp3AW8mCU9oFwUYA",
  "key32": "4BTg1Pqv9fPmhoburDRDsFvZeeo397bF9CekPzZpnys15dYHY4pt4r9EcF5hzvmot3WYDBRHjx5kdoDzzwphMSsf",
  "key33": "64kSu8nBafYMnbq9Y8VCpqcKDGpZqENAoYi83YAXot64eN4bo6Cx7ze16ikpRBLTUUv9NzpZE2FczMnuBtSALjVu",
  "key34": "3Qj9Acnd4ZWLJkzFk7swXcGdDMAU6m3bxUTAAzNdkzpTkuUdumGmyHDByE6wp7n7NWTL8SUF2A3pYHJEtVBE5yeN",
  "key35": "5RNf7rLEaCN1QrbHjuBQWUqtaRXA6BiTc8aUJwtNqmYb7qjE7n4EeXr9em4qnRNF5ornF6j8yRpHfWQRhhWHrZNq",
  "key36": "624tXmAd3d65EdmYiGcdHsZkebAmNLik5zTbhRpPk3EEE89AgPUofsDL4C5GZVbJWxrk4w7BmDTLqLFvZfMrtLB5",
  "key37": "5ueLCK1HMEwhJLBor5ujztDzs1RwW7PftdASjntpthU41jXh46VG1TN2UXdQ2DSitmdjK7tXGMhxuiJiNq2CxVUQ",
  "key38": "Zp7upzH2xs8wNyWw2hnpRTso32iKhPLsHaP9QpKDxsyEXyAfmZxsAcJ49FJu7ptGnMsxQe97Mk18jR9K4GDvLFq",
  "key39": "LhDzMD96zaaZn2GKhAzSU7YSL7xPxzaGYJthixCc9kHz9Tkn426encGMgZkzryikV6ZTYwT99gjQKxLPDGwgZwu",
  "key40": "ujJyCtJGqC7UPc3iET4guHrdXdTEuVJ2TFSDXpsiozc3J7P5eRSmCa7e5dGJKZ2XGgWChnWYadGjR1WaCyadnxJ",
  "key41": "61dtT5oxAwMEhpVWYD7fykjDirRMv1DNHTPMgMy7jqGSBrtQU4QDeJTPZx6ocQ6NJehk6Kznrv2nKhKm2EhY6gCy",
  "key42": "2rWg51z6g84SaifXZ1SKZnujTeFBa3QRvVUp86hn1eJtZ5RWMZ8yHx2E8yVb5J8XFiemZpUfSKz8dnZAFr9Rf7Jg",
  "key43": "5rfnVCxDqGXCPuAzKU6exy2m1jyBfzCYxkcUTC5zhvz3kqXNsEVV9D6EmW4hPcQ7Pv4JJJ2KdGcw8axSPFn7XCkR",
  "key44": "hj7HoZf9PZp7Gdn5uFQ6CTCujGJiYwhD3RBL4Fqa5pMJeHFK9PfTqDiG3hefXaA8gjBYGc6tpgB6A7FoubR35eF",
  "key45": "43QjAJkUgmXV7HxaB772QrT2aUTmdMK8hoQBje5KXM31xWQXZeHRKZSbMZrAbZN6ou1wfRo3haUDreh7ibfAD3zp",
  "key46": "5C7HDMCqFJmpRiXtPTuZ3HfHwAJdpN516oF5rULD5pkBroC7ve1LnBrmWSYoFmxWYADPrrC3Nfhv7xdqN4jTah9z",
  "key47": "3VBFRUy3C6QsuobG6D4hFBnXCfi3mVJPP6G4Chw6cbjcfFqSRZcku7kydcqAGorVVrMPjqYCX4hU3PTpTu9vBQAK"
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
