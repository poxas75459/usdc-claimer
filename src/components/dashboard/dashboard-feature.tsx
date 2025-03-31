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
    "58i4nQcEzJe9P969HMQyi2Ct79AtdU2JyqepGQi7g5pZdYd1t66MT7Wj9ztSe5pTcWjKPi23jRwzfdpq5czFiBTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BPotfgomNZjC8fDMzTstQj6QD7k7VFMXbiqQv3EoZQ6YMmD7Laj4i4NGcHyfqNEEoqBwPkqWzsc6HrXrBsL68N8",
  "key1": "4ZuRdxPNGQpar78qt4EGXBngRTz5o7nKfzRVhx2xRTeN7iqBaWjMhqeKqveAAfBMumPNUbVy9G6PsAKWZKivDwAu",
  "key2": "3szmidLC3nCD4TrPL5gShW7ua2MPhqhNUf1PwpXdqhp2mQQRnatWfH9oPGGyMXYuYbPnCx7ywpjBpv5boCDWgEra",
  "key3": "EzA7ov13p6uZBkbZokWfWKGX6Aks6NzBKimp1nBMW5sv6Hs7Q1CwwhKfrUxeMSfCEWvXUQZe6inn5nt29DyBhTt",
  "key4": "3eBvJeC1GsnHppLFAkCcFrJDGU7182XfyV6qibd54sNuXpPrGARrwjiU5ZnHuTTst4wgKDudCquQLVAsUeesRzfi",
  "key5": "3G9oNQoxDm4WLudLuqkWD7xV8mMciHKa4RgvVUWtD5MDNmBmjmqqmm4wAqtSrXt9xceCnD7NDbxfSUsvanPLZdeN",
  "key6": "2hW7qnHFoWCqJwHh3cBvL1rKoCPB3xUQAzJoBFzf6ZMnHSYTspdwttpN3n1raJQYKST1aFQ6mdULr4AscD4256Z2",
  "key7": "2x1ZWXN9nob1W1rUru1UuzhdbJqkjTcCdLpSxKpnJ8EpHmYdfV6vTf2k353hdp1JEMpmj5bCYEFjntNz7hgk3yCV",
  "key8": "MawjbFwQKGe1pUGv59EYG3RL1Zz1Pn4ePgnmHVkXGW9CYE5jm8oihn5wSfHkQKrQJ1WoD3g5yJvLKfAhw1f5SCi",
  "key9": "38v4UibbduYgiuctzB5m5mzaKTPkcPVr25B8zhobftbjgQed1NfxRZv6XbmbFdoqReKd5FF9iEYcqtrZPz22exJL",
  "key10": "3KHqzTLgxqSju7VvDcJyhfdy5pwndvh92P9rQhAyPVzx5DpbMzCjnSMbsR3zEZJLk2wSK7bG4Tan6rGzcBksW5Jc",
  "key11": "37VLGp3h3YLeMbLq8cveLPzXX4jSBYHQMNH51jmMy3PnqAK492eNYQRyTGZf1suaqVd9x2W9tc7LTvX49yUWKEPm",
  "key12": "5vCKj3Xy1vnoqAdXAuPoK4GQiPYcgN6QMxdfyv8JBcmsMoq6nmKxdhF3eGLJMKQ5ZJt7ktfn16TLmnJkY9Extpsv",
  "key13": "5NGjd1K1rGEzpZwjrEZWVD5UVwyGQzXwY9kWvaXY7E3efsr7a49soAR6x4AXD8DCnM6RV9sdsrvV8xHgpMtEMZGg",
  "key14": "4fU9gmDziX4vnANMQ5NSH5DwWaUbSyEx3XQgoVdPdb7XZueGXRZ8hvLpMKwyetEvyqvqHQqMoXyS3fkzKxJMHcp",
  "key15": "66j8XjzJgNfT32iAcbVj2MZUVEMji3buwvwZKpipjsLkHWidaB2fFTum32LoDYFRHqF69k6z3YNFuWTkVpoMwMjE",
  "key16": "3UTau5PY9s9nShPr1sunmyqRPjkQa5HdnFproqtK7GWo7Ufrikzqn4Te3D7T29a8qrR3PBTf6D6KfzFfifgzSBmb",
  "key17": "41nMkm7jJdFhKq9YsFz1EQL3CfPEphMApmY2Bk1Q3V27tRkcK1WhXWvRhUKcWs8zk5DLtcric13KyMrtQSzh6QmV",
  "key18": "p6HHGfJD3hFJq8xaUBTWXeeEmuCkYvhrj22sc2B37pqi2nHfuEEdYFbwYXSjLPB3PGS2tpNYpoaHaZMx5c9trzk",
  "key19": "5gDPwqAz28eoFNK4kDW8gj9Z2vuZntdCeF7XgDfsXuhBvNdoZiMWWahZXWYdPujVACuVac8N4GFtZWrVPrsHGB5h",
  "key20": "4xMv1KhUCFnKE3Sbx1atKNPdM9HUHcswrHaWKqJB2d6HWVytu46mLcBJgafJZjBqbPknnYx928EnZiRdpHKewJUK",
  "key21": "2X6NmU8x8urLoL5J59ow5Zr8FhGz59ES2yx8VrYXJs5x2F5RjUGSJS8WtanQasbEmghAGV2cn81ffrYXFW6FELXe",
  "key22": "312JUAxntjpCEEcSsMo7jPYKMnSx4NeYhHg4Cq8mtFo2i9qAVkueicvaN9nwdekd9AW56evZBzHKaMgjhrbp9DEj",
  "key23": "5YkJL1hvqAj7J4JwQyDMkGikfeuLw5C5NsdHu5HhwP9qCYjJBi1XeuM7rmwvV4653eMVC4z92DXhhKVtt1qwueHB",
  "key24": "4yPTZjcgSvUuve4vQvH4ZKxMLvWL1zjrwgZx1AePq1hycHFqBjz3yvyzRu6jF57mannkvXiXUsBTj5QfH7iKCdbx",
  "key25": "W7eRTisdoHqyBhDWPBPd6AomeMukgfCK6he3e9JLw1SssLDeDir8L5FzWwWstuuxsaM1aEaj9UnPEFdxdQb89c1",
  "key26": "481V3ygWunos2hoShGPpvMAFmy5fCxeTBXHBHyzYfeDLFXBxCJmsWf6VHA9RvJF3wXamEu7oGWwHRMBZFFVb8WCm",
  "key27": "c5TjfRBfAtBiKUzZxiPWyDryLt8L7hDykSH5CTEjQ5VwYkvueAuuqSit4ZSxhU13Soj5yQij4ceN76NFHzsHZx3",
  "key28": "66zL37uuPva4dBKxffHcCCmNZ7NrLxNvqGhWbgEzCGE9qNHNtCUz2tHHFgjKj2gVb9V7b3YtCNja5KchWBrc77Ti",
  "key29": "cSjxu7Bi1f5K6oGAwFiui7pPyXvHi227xc2fsVLDuD1DgEdSwxcPqErW1b5BYHaxmhu2MTpYucHpMQVoBujYwWi",
  "key30": "3w6PmwBM5vmGnGBZzrQBZyjnx4QZvk7bkGdc3WVomF9xGkPGDQMYySTyRsT6BBK9NgqRAoMHiCzqakyJvTQU6VCe",
  "key31": "4VSkQWWKZ66fXGU7oCLS1s7eLsH2jPKQv3kF57XCEVmo3NfHgPq1b3ZLst1Vz3Q3X46ppNV9zSW6VzdnB33naveQ",
  "key32": "4L73MgQX97f4mECCpvR8hTwYu3h572NE76BXniPs3eUcLUP6YkkYgUG2JZ9FStZbK6EHVaTynGccboynMH8yp6co",
  "key33": "23f1x11BziKFFo7PiXLdNUvnAvWkenhLe1EHDSTUGwtdqaYf4tT8nuARueseXg335XrPc4uWxeVBMXFA7f3MJ6eJ",
  "key34": "5aKKeWgVrDB1KyLNB6YBLoDsfLoh6B52GwZAB6vFU66QpBs6Kv8ttQLosTaCMWD51oDVeNvcGoMqnkNgjkisKFEy",
  "key35": "2dw6Ufdf9GZ1GCyeQ3EVKGtkig4AM9MEqxJMNhVsCwkfauYoZxmLjm66EFADSjttPvrCVm8oCJFtDLU9ckP9pVz5",
  "key36": "vmc6mVqGJX6h3Phw5thKrUryirM5B44CKjhPV6zZi2zv64VDR1jXcE7Kz2f9Ny9h7F9MMfHikmzoEnffXizsS1G",
  "key37": "3Eyo7VYaHzmoWme8HpSWiMCmUSLza2TjhpGbPEiVirHJ6f3vpUC8gAQFHs5Rh5CExKGxZFZBHwZx9kojaAAxcda9",
  "key38": "1dFTADwZUzZtRc1siEfjWmMrgcvaYLQSacYZp5wP1i5iZuoAEdj8KMSLAQENLJ2j8ZQSkHzSDmi6beMgrfmVwHj",
  "key39": "39MwCVau9xKcTFLVTLo5n1JhJVB8NXrzYueCgmshrWZ6cLopuF4ixsyHyQH6AnTCop9utWDvTg2t4SArXLEj3ww1",
  "key40": "5trsGVpEtr13nueW5NiafyMrExA98XbZD8mtxbwgcucW5SQHRj5vLyfKiRG8yAoBQhUEbfBuUs78yn3ZQNouFo1k",
  "key41": "3PTVwvGySABjAUZDP54zLf3it6jq3SWz946NioRvGXFiaebj2feeG3daRkmdwVZR4euzXtkeLbyXjWfxSmHDXSSG",
  "key42": "5weje9bwo6Ku3hA8q9vwasPP7NyWX74o3angs5HZtTabzQKu1sqekLL5MKDpPBgBuSegZ5xeWe5UPxF2DU8qGDWG",
  "key43": "55V8GYK4Fz9L7uEd5QJYfTogu4vKX7dmet7P6PJ4nyyQoCdNcCiwUjZHsQw1AbYa7HsTwSZtHEjVGSMpXd91mP7n",
  "key44": "2omC9QQBPCxqefUm2d4qELjgogmd4StYwVFJRbWn1rkmJcKUtZkH1GkASYgBe8NwWtz6Tp6MXhDxaQXbY5QLsLud"
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
