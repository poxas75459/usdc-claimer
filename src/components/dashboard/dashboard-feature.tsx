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
    "2a99MTRZ9uFXo55qzfFxfZzwsunujKFwvwdpaNpr37PY4BgWLiUE5gPP2SF8rHjfeswTsx5N1cSKTkDjfwjh1vGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u5ZqJstgUNjnfshQrKocar5F1qZtG4Vw9WcCUBzSPgCNEqTiWLZfEEdZiZK7qtft69ks6hjaaZacPmWBmJaUczv",
  "key1": "5hiD4wwZVWY28SjUJk8QhEqDN2QGuCVS4HoNAC7js1LzCgATFtv3suuC5peV6fQDwsx1wZ6E3FADwzeGVhHasYmg",
  "key2": "5mzMTEZ6iyvzF6Wf893wKGLXmWQgg2MXKXmCkJ91Dp924iJzKWRFwmVstConJRUoo97dq1uiTs6ujqM4noiddRA6",
  "key3": "3DawqQsM6d2MKxoq9tG5MHDxWnLxQdoJafCaPxZ1GsEq4r7dYVcc93fP59Qzd7THDW8wn9i7GWZnovDEwp5UgLQP",
  "key4": "56hVLGr4iLor49iAU363WjAa4unwrUZsPCCnhkyNHu1dUpovN1BsMwhU5WCtDSFiFgAU5DzT2NYvkAs4KZxok67A",
  "key5": "3KFfqBRBzh7QLxYvx6MXbFujVnTJQFmxoLLQc2UYiCm2T3FxZXP6QfKNzhGa5y49CqjYSPPYnDnb7m3PrrTf3ixQ",
  "key6": "2Kh4VGwvFZXgMgbrWG68iv74A6V3fwEcMraA656rFXP88Bvb1Scf2g2NwVxtWjK4rjxXAgtCXWXdoskoGXVSyg7E",
  "key7": "5jVFeqWe8p1Q1t1rzRNEERKsneT8oCgtJ8Pi1FF5XGQUCAusDUwCvwLC7TnLkTsmKfWE4QGxBcPB5ZcXsYjEjwxX",
  "key8": "3QaFtkxL7mUNUjYB2z4WGUR7y3kfVBnNHaastXHWMwEEWgc9eH32nfitrQREWxnuDH4CYjSLwD3tA2eKs8qk174o",
  "key9": "Fb42Lp5sADP78MhPeiEK5wDpCzXt4wanYicUqr3HJHDuafYdgz47yaSSmcCqHDhgaWpXbptbmz4NAhDBKJntGSn",
  "key10": "3Vp9Nrrax18BVzx3cQeTZW39nFBzF7k4C3xhxC6c5GuJCRqbdDQmKHzE4udpDwda36hHdmV6sGiC172YfY2QTdrC",
  "key11": "3UVwUhqDbnyZLb9xtspQ5VWNgeTgJW8fZoE1wbF8ZFv2ew9VEVtYqjhQSZv9GE1m4MBECBKVMyeNeTmUjmbAHQk9",
  "key12": "3ES9iA9V3NvQQNYJv9irFkfMjEhucFPwTwcreuG1C6tTrWa1Jb7ggsZupbqSwrvPZ427fqXsyhBSS45U946kH9Yx",
  "key13": "2WJtkiZEa1f1NR5B35iry8EQvGVJbWEmdKcwTHPpXZSVn2eUUJTkEtoaSzJopbq8Ea3WLNdRHiFdni7yr63BbJsA",
  "key14": "U5MaGZFtgWS4mpM1ifn3X7ZPSigT9PvkqvL4Yb2rzjQw2cNrkSsNGcKKn8wiKJq55pt7LZt3brEDW52ox8Xy5N1",
  "key15": "5MkcK3zoyuVLzoMpwMfFGirAEJRCHnKz78tLZyiNT2KG14mm2SAgxy5PSLmULrT764yvUfRV5isL6MQePovaZEbr",
  "key16": "32qdYGyF97CPD26btYLus6uNB22aDqmgConKawkUFDJP6UG8stHX7zzHB92ytw1T1dGT7XGuzNtcBK2xyxpkid6p",
  "key17": "3ugxS8MmQXsnHDTURtg1hfPqzknwwznVvLV9HDwRaiSw93fm147cB3ZBdK95w5WMcqNSSfY2dMLnRezshWGkmqpC",
  "key18": "4u6ErCL6hf6S2b9KfCkBbYuTmxh54g2pCobSfibFHJyABhG3DBb2zCgJMBDtJTDQwJejiU6BaxhojuRbBEY1Zgp8",
  "key19": "4tFhaFhdRvGjzTR9zzdPZjXgT71evKMYYbTpxpd1VY1ZCkJA9gbDbAqW3ka9kv9bo2736N7BNLqQtGBZ6QxrnG6i",
  "key20": "2KVxoktSWm7bkbjK3D8Tk6XFbbHa9qD2MJ4kQnr2EG1WurePnrDf81LqeuEFNsQ5wCj2heoNT6qNLvfbWVipsj2z",
  "key21": "3XawitsiUYRUzTbFGCp1hGLxvmAb3gcXiYFJ6QWkGTDwZBwu5x6D3tTeWFyapamYGeFdurjj3yuuBHA3r7CeEs2a",
  "key22": "3KwpMv68nQa8ZE1WHZDD3zF3pSuJf6gz57qCTGtDMiPGfsdv55Nf1xipVwWt2XcxUbuhYqwMuDjt2txwo6Zyx8jU",
  "key23": "2qgVU1NYXHRjdf3rd7tPNNK6TF4pqD7q2LJZmU54qD7dnMyRZASwwVD91AGFndLUSRYHMWpUdoW5DsgrCforcBxg",
  "key24": "58Pud12Neptk1TtDyJBD5pM6FvA2MDjG9fAMMWCtrZkxCENRK2A7uGEBpF3oCKP9aeatBcqzC4UE9THhhoxzw7K9",
  "key25": "3p7St5iA6CdLHRCuLYaCqAFMq6UhD6oLSTtB2F176hGjxrVB6tBkBSGLYLcyHTH6WQVxSq8v5hFSRjbxu7q7Rfy2",
  "key26": "4jGcnxC7LqATuxQpjdZVqQwWeajaKFe8j7fy2mRvzW3Q6RGmvc9opvYbXGFQc6D6VoW9E6RTuSYry9ih4gSZdEyC",
  "key27": "36ZBxVYNDPXAGjzGALmTB4f2SzQkqThLNd8p8sjfzagAqZUyUwuNhdpHYSxFWRQvxcEgxakPeJ2P5cTKms88TGEy",
  "key28": "4fcdEUEmYTwgQdD1V6qZXEKHSfQNjSMrWpsBX9qmu3r8PcPExfR3neZMsrrxmtfyCzBWFL5SQrjpvoGUDNGQUCn6",
  "key29": "4QtKDkLsKwE7NCnBwNmNLM5BfdnB9APVg53iYZZYwkjwHx9q3ZdGGPJujEEFXkc6smCpA1fzVXzeZHAWtRmWLdQh",
  "key30": "DmMQCksBzNSUkWsSzMgS7tgGoEVSgVe4cUXxXbiyMwBdRA89D4c3brq4q7NQx9sLTsynMdHN1vgwWcupcMgqdFF",
  "key31": "5NiSs7c4Wn3HrPDHmwNsyyQAv4nDFmDptUvSZPtYzn99k6NPX8tLNvqiKuj7MSXnWKppnuwTfTwTKujt92zqfqyV"
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
