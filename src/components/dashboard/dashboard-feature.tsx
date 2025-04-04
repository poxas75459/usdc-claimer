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
    "3M2QWqu57WRVbXHio1tz4dMfJHWRfLfGHABjfEqwqohuA8FA6ppcxGuRqhkepLSA8zf88g68jHVmW1sZ4Dy76Bmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63FBJ4eXiiAkyRGk89VACAi2wiS7QuqiuMgK1xu13HfYGm8dJiLvWQa3m2MkAknkDKn53zoUydsnB79xT86Ffimg",
  "key1": "aVnyv8TsjNfbwZcjMfNiNX127Th86KjXbPuou2PHX6qhnQXBLFhVNfkhUN256Gb85zcKK7upcujzRZgjqzqPHe2",
  "key2": "5HCmuCBBmNtfSKNcP2MA9L5Fh78ziUPxDa6jhkg3RuKAhMcHTexPsrQeTp3ML1E2pGfKRitnsddwaygpKCL9932L",
  "key3": "FcNcoYRSiCTGYpHisH5i6BEjSDup8AcxV5Mkc92vcMZGpCJhq6Lij2wpHhZ74G3P96upqUjgGSfhTPfDkJQUcgR",
  "key4": "Av78fmyDmu4yw1wkPDXxjZSx1McVFw6LhGbB5SiFSrcXzXweCHXE2wNJNDBgskXo147bWAZpmcr6zLCGaipcA1K",
  "key5": "4kGBLgzwhGsWSi9oMCkPWSYu6Qe4DGdnnFwgZNLvx24mqLYH1txyCMaZyfp7gGjojY7HXftxFWrYczDgt3yhTLJN",
  "key6": "3WmHDE8zoQqpSPycxp6Jt7DgWD3WvR7MLWDTf4AWMkeC1ioTRtXiPFQDqUZyxKxdGBT2euPM875xoFdhhjYUVkkH",
  "key7": "3KaiPKuxKYZfwCvKoghZSUSwU3h5JnjjgGKuVw9WiVAFbSjVHtM6YbxXXVhx9HRoUkgQvP342sZJvF3MWH6uKae2",
  "key8": "4iF4RvMfLfYep6LuDiCRsMYJsaN6hc7qswSBrsQuwwXUWoxnHPm83HLinEDQmRJ3RREAxBUDYwq9GE4JjpZqRcaD",
  "key9": "4WGTR3yyFpMAjSae6hTZQjFnDQaasR7Ey6osT3XaoSHfDhk6GrmZxuoGaa97EzUHmjUwoiTximUXRawU7YgSCQbk",
  "key10": "44Cb7SiTkSpQCboK8iwM4TL9h83AbPxzGgHMZDZMNRNePKJEefrKgPJ7sbZorYmBenoMtqZURjGXTgtD3L7fWMJz",
  "key11": "5SUNDfpSYcUPCRwqu2ZW5hpV9S73ZJA73UxvnqKxTK45cyGhn4Jue8H8bJveEfYEpJMJHNLrCjg3S7e1jZdYhP1x",
  "key12": "5C5J2NtAqJDfhd9wM4AW6ncQXX2Vqgi2FhTjqwKXFY5LrQFzRnjKkKpSJoMGQ77Uwu71hQs3hZJXPWcAnNXM5Wgy",
  "key13": "4KigA4CmuTNrGmxx7QqCeTw4hGYLJs21M4y4kmUjPebnkt5bbpGubGdAWyHqTcMRhMuV6Q6KjQ9f3fzt5jmEoUz",
  "key14": "2dKQTmUBiSp6dBtDjYHS47E37MQBcYT4UNjmq3EvrzPc2TKm58kM8GyEFpQ4Amg7vC2HVx11i47mYtTbD6nujRxh",
  "key15": "4neijH6Z2v8EQRWL9cxVWDKgjxJnfK3TQBR8BkRmJdfZ8eSy26WK7WzNc4Ca42d1WAtdQJGGYCSX7j4JiRUAfbXM",
  "key16": "RnNeA3au4LuKUYeXQ2aRtGAsVJfQPkCukS4KtbunWjnVMWdVXGhdRgSLi8C5CJbNJu7CUAGPpXXUYxHpnWAEqxU",
  "key17": "PecxPTvEshdYjXjNzxh8CZUb8LrimQgthDHiFvxE7HEmXXid6fh5NJXsHYNe1fqzTVDsvxv8YEuk9ddp1NJ4afV",
  "key18": "4vNuCoG7FVnDaEiFhQEW4p25Z18KqkekwEbvKtC8edj5wT6QVfUahXuiaT37G32XynRGX9A1aLBcEXdxWwrvT2ba",
  "key19": "214PQqj65VN2MSBVVeW5mdv9XuG4EQhCMBBgUSKLPRoh3VfTsQoWjVYWUeUSnx5CE8ESqsBNnNykjGJMXoYuqgU1",
  "key20": "5iUYCttJ2QG3PvHbwZLiPGRJ14xZY5BzYgRaoA12iMgG8uVmz8kYdFKhqiTkUrJXj1QuSprgR4mvW5WbYWUAFdtN",
  "key21": "2Jyt6dZsAcHMjgvHdqffVC6Q64aAePBioy1NcGicDeeJbykZcL1CnxFBZMjyjfKpqvJhykSYjPJcwCpr5m3Gqfeo",
  "key22": "tpzUJ3keuzmJtNhc1qTKFznS4epBQWMAyjpsAUzo52FtNWiZrrzWazyHKFj4wBboxhY6LiVopyTGFJ6n3Higvjv",
  "key23": "3K4Yp5ugqvdpgwwLQLurYyoKTifaeGtADxtE3bu1uD9bUwgRSqP8xDURuEDiVkcU4dBobKSznVZZ1QcJpQY77LNp",
  "key24": "mkr6E5Vf8octBJ2wptZRueVfW62o28YkQs5PuWcvQUzYbrs1pGXSDGQ7nAReXhgpkDPmQryHtJBnPuKz3sAHTiY",
  "key25": "362gbQXac6id3EqD3wDsVvEyjZFJwL4z2V1FeYiqrMEBpb3C1hWencBi8HWbMnAbVv8z1pCe9TXBDNzBi125pBom",
  "key26": "3SNj6erLmGUV1LcqFWHQD5SU5nvjWk7fCmgmB8gNPMZki4qxUshbB2rz1WN1bQcxmm2XbFrcvQiPHcpfuftekm38",
  "key27": "4SHHXDEadbZgaH2ctcfowoLSe23rm5BhLDpnTNjgrRuafaHqhBxbCEBxr4xNiZi3juNJdrTQEDKpSBqexP9zMCUY",
  "key28": "5ER5cRRka133UmJyvioPQvRc1NpmPkuquU3fyfoVne1AdjrraypuCN3axrvGqFYbyvzDF8fCjYTWxwBuSC3tRjpz",
  "key29": "5vFUCqhmRYy2JCCQC1UsVz4r2zDKDpNyfFY3uKuAg3ByVVzjPnbUMT3Ea6byqm9ni9buhNCHCrT6o4FhE4NZgATd",
  "key30": "5hE6sZj8wXFmnXYQTu7hR6QC4ZTfWg9dFhJ4QrHsZr93puphCmBpE8PcXAY9o26PXL8HFB33tnUNs3o7ENWNjr94",
  "key31": "syHoJoXqT8kwE7NyCAT2CESH4WX7uBVtMk99hTFmoDJ37URJBSLvnN3jqCi9kHv7VnUrzvm54rtsgxmUVLSkGm4",
  "key32": "67gJLHKjx4zHXr2nS1iEo1DBSHxKCqdkohuXN7XXJ2ssWyd96exE7tEUcWd5kYwuEbtik37TZqgSU7cJbdmTdKGR",
  "key33": "3SUStVJaqvpNNZ2ZDg2jD9nXwJmRaDtyiGsacVY4jsJMLMaC5xq7eMqhdKag9qSoJ7ibySvy1fZcj65AVwiGiNFg",
  "key34": "dWT49JMddb92UtTQ98j3deHSDCPhKjBhrPctdfuPM13pojunrN3SW2XbgGzr5snMgYjgjd3S1zHdGT57vxM5jVz",
  "key35": "2ujvV9YvKyBDQVRxYKE81hj3ZQhdY7fTbMcwRyem6KdJ7YtaQWcYWbSd5wzXf7FVo8DZn6ujFwFpCbXLvo6nWBbo",
  "key36": "2MwX2yGVgBk54wUVTG8ckMjMhJoHFRmhBHWCcMAYc3ECTCCXhCtHGgKgcXqmSLjVJqzNAv97mEAxZULu6yVUyRSb",
  "key37": "2cQ4mTjkWZStM5AYH2JwyQeVqie6XwuYksfjhaEkHqPaH6kfbYwR9HtkkP3PQjBtZsUWcTevHK8UUY1ifbjfNYrf",
  "key38": "3F1iyZVfJP8S99jY1cJkgVbDwusnYSjowHeqqzp3t8gpvhBWkeNEHNv4M2khSp3rQtqk7AqX3B8A1wYATSGQzRAU"
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
