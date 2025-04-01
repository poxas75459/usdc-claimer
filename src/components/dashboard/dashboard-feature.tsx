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
    "2njtWtxoU47SKS94JQHZTj9iA3yGT5tAVX63Y9i9EagWgS9RbXhcHhjLdt7bRyMPqQvg35scvr1fx3HnYoQQRc3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vAa61CPALeVgdEhUNqeReZWhx9qTzKp7VXFwEemx5dQR1ahEKSWSEVdSq64VhGgH8DxRsWoBkfNroqkYLUutm8Y",
  "key1": "3BaTuX5MuZ55CKYuArspV5i5RmWToGAkQsofbYMdBuNdbyfASWYMGPXT2NDar1B6XvNFFwUxovsd4DmwdGgecPQM",
  "key2": "4WtPBsPstcQ9Sdg8dkkr4RZ2Rof2rtx6BUUN6bp8fJSeW5hhQpTpWLxtTSSMqNs2tBHdqdpoR2P2P1YsNUFS1qci",
  "key3": "2ifQUvftvrZ1MDWmkZJomTLxq4dQWmfJL44ZSLKSL7jEFGi8fqJz5dwjPA9WHwhmRsqsD53syNk51tHQ7YhHvcav",
  "key4": "pQCawAsTXG7rCE2Wu2dVYCf6gpZcYZAFyi9Ds9xfNUncd3dCi3rHxpxQsN4AgrfRHizufucwqKdVHikFxdjaTEA",
  "key5": "365RSBkWbBJHQZLKo1LVqxThHRjLS3pyNCgyk9Ry27iYtT5u1LAERypyEv7AXBApQcH3FCEiaMuVQ784gGFWoRnC",
  "key6": "QQ5cPhabT4ERq1pvhTkr2uMwPWvrU7gXw1ZUK4JZ9ZX1DAg3VnPRX3MSA8RideozHwbhk8Kcn7WcCzsJPNYrGEA",
  "key7": "4m7Gw1D2xXjbUd5iAtwYEwAm6cQB1K6NpuLVEhQ6NhoMXvEkD9tj5yCLATGhWGC8uR4wHDi9767YywS9SbJbegf7",
  "key8": "5ThnRr5whkDR7SCy9YFpW1q31wJMDPUbv1X8PtzmGxSD8ZkbUc1PwPv55zvddURMGLD6tn6HrzPBHZDGBVuyDqPZ",
  "key9": "2fmRvz2qzcvGfZJVuHRMq9Ng99tyfKDrSYZ4nXzrNsrTAiHum2TiD3Bjh5xQAz2wuuYkBNe4ucQNu6xZtB9kokRt",
  "key10": "BeN4dF4YjHi64Ef8JVYMSEZvxB8RvcgtXks7qkGnK3whW6i8UknvouVBX2dvudGZTUVfEKRWV3mCJBi9s9Nc6CG",
  "key11": "2RV7ybriqoFPznZBnaLhYnC4PKDEjBEwXkCgRVdwZKj5VYs11aXdPUnbAGYdr8hmCDCveYJW2w3xTKXmnBEjWREy",
  "key12": "57LBuVZWk6iyVU9EovFdvkyBNrVN3kDDzzDxknqxvwFh1jnG5nVd2c8QHxEAWWiUZchuFGiRXFRp7rXio63zdMPC",
  "key13": "5fUqCAbgUWpZ5j6zVDUX37Gm3ix7f9LbpLJSuXHCw5zCepkNppPfQQZgx3Jcrqb6H731hbaWjpPUqqbS63XqvLdc",
  "key14": "5MoJa126qE72hnC1rRtMZUcZ9orxr7YbMHguLTB7u1qYD5CMX5QxyzbaD32JtjWDwiBYmDtCQzBU79TgwiTnAYJG",
  "key15": "2356jyXWpnt2ySb5H1h6fbnJ5AcqgoJDcTMLdWKpKqc42r2EzTi9uEqnNEMasZPZAMMRH9bprvN4VgqTWGXHtHeh",
  "key16": "5yDBdtXCYECDYd6WVA34cJzBcGEdrwVenEjd5oNaiKpBzt5M9ggFoB4RecmZHmEJiAcJrUJrhKPJAnuaEiNGYMDZ",
  "key17": "5fLNtTa7Sfn8MJmiLmFiEBX7tohrKNKTCMmfvqd1hs3rGL5qzCZYQDSidAaDWz2k8cKUUtDKkEXiRcPLeP5AgPbm",
  "key18": "ocCG5cxZZvBs7MBu1bpEQuDwxhjUJNrnD6CJKMbm4o7LaEFMM8jY9BfB4bTe5CaRxuEAXgaXaMPffYi6QtJpHxs",
  "key19": "4V8LCnmRyGStRgzPKc6sw4E7TmNEwKA1V1H5mpewPDZnM93U6jArCLEJRgD1oeS8VSQNZ4ogW6tYJXLAhkLYpKHZ",
  "key20": "EKqFZ4Jy7DFMAuKrVcEYcMWQjx6hBY93NBqoD9Py78npbWbtM3E7YntRCi6nNMABBb4nHTdUSANZmMQZ5STYm5N",
  "key21": "5JwqpXF95qUhviR94J19BXVBL2pLJobHWXUPsBTH2fHonf6Y5eJpV1FmW154Ank1btFDNVd2jJR6Uh63CCpUnTCP",
  "key22": "3B1sSbusTURWtqifc6eugnS6q4xcJZ1dBdqapiiovnK11GvvmXCmnNNxSTCbdCzNNp6o3gU5TGxnyDr6NAbyJh9v",
  "key23": "2Xao33wJGVaQvPK9DVCfxF5ephF8yPRGRRwPveFuzKx5jwdmzvRmus2XCwq3LWQToGbpcyfXqkyo5vLZUyKHVx8b",
  "key24": "5VDQjEzLUyxWHMvZ2SDSPiYXu9TTnC6vAn9aXStr99d9zeccjsWPpXjmEUTxHmgnVefgdJcuPwiWMNFZkeD1novU",
  "key25": "3ru2He29zF4dH75ZPNQJb5hnzR62qR2X68krm7CBg2ikp54HH1Du9jKn4Pie3AnznKKUDatiiJQRvZwVEBUmm8qb",
  "key26": "WMtimKA6kTmiFHdSz57ZHGZgth7NXnwdZnf5amdk1yVth5k3uaHuZ2DYj4cVtmDPEfLvZWfPvwThHn9o2zBidxB",
  "key27": "4bJgXmnZTZ5pTXrimo3ES1QGoqhetqULrMxJmSkjRBFJ8ca8B3TDH1AqEh5mg4sW81ELWd7QMJ76z4KNZDanW4Gj",
  "key28": "4X5GQSTM89gbA59Co5taKqqmyMvhkczvivZsZywPh5BGkaRHNx8KWb8YGVbLWsDEetWqN45Yun1xGoNBsGSLrSHv",
  "key29": "5N3AHGPf4JX2eUApCytfxQMWtk6htfDVo161rdAX3Qnwv9tNL7qNxCKUrH5PrP9vPrpVt3awXAQbfiihLZk1PfKa",
  "key30": "38NiLLLAFdG5WqYbSkMZ5WZfgcPQXDrUvk6t9WUsXVK1Sc6uns7nj2sYeKj9V8R5PDLbAhFTUcVwYtkTDp1zFrRd",
  "key31": "3oB4WsmnXr2tngU4ZMY3xJx8htomBgBVvfow533LNx9e7YDAYukAW4pP3EzTxEmnMn8U1nVGk5HrjKm78oQ5ZeAf",
  "key32": "5srerX7qRKmG5ZUvj1NrJgaWygcJQAiu3wsB59cm5pJCHMJjinUkebkG1GbdHdtqQXpJxuiQJRaV8xDMV6MewuPL",
  "key33": "gi8j7WRmKjCEUpWNsgJ4qnRqRAGggY85WfL2UQpzMb5fQUsAFb3hCN3oMezcHQHV29oaLysa1YH6a9JfHMBmRFP",
  "key34": "61B5Rad3MiqLvtPYHK4eu24quH1mahCSwRUProXZiZVfkJsWrP11K5M4Npyv4pKs7kgFyDA43HHPpdFLAxnHGVfP",
  "key35": "4hiWR16fxGQw7iXWYXXhDnYwyvKqrA2SsCfPzLZTVLJTUotN7u9vHzJ5kTxr1ozLdHXqkBTkugzZYcNrfPrDdHzR",
  "key36": "qmtpLS6ciDu3UpdBzzXcFZ4ppFWwLDyNFoxoCD69bv8NcWeuRvVUbHr1KRG31kLwgFZX5yDws7USjzKM59AoEeA",
  "key37": "McvZ6Uufw4iPj53C6mDj1eSZsHr19W3oRYo7mVLFZdtYQSgtZWCdXwEVweFWXAzfWd6QtdhVwqXPybHVnAzQGMo"
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
