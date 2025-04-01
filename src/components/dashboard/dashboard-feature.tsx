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
    "2yDXeJjsi2znkTHx74RVX1Y89xK486ie427tLbxoFNFzd2uz3RuNffPPSTAJiuERNyfQUqc3uR65QCvJ6S3KiuF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oqKMg9YMJuBqcqTYB4ADmWhrCgYFpM6froseqFrwWLdQCXYKPCnqMPQo7DCpCvPL83RPwRwJNU62j9p7ZZgXRWE",
  "key1": "3qULUNBCzCoyXQTCTge3A9kqP7Td2avQkXjML9YY9hXE13se76aeYoFxnQnQMdfAskQQGLsR1Qcmu3vwN1hLRb2g",
  "key2": "eyVTF8SRxRg7HWNTGs8RpK6QaGqXtxQmueBA6FJNyv3f3ZSKPRaofACk86xU3DTEYKq1FEHSvpvxiKKqZVfKuXy",
  "key3": "3xNgZBG3SpB3Xn2L4YLhVFFJCtyHF6eKmEDYgVae6xcf6rt7KDNFp72wzvLVXbMCL8jiAKT1GCxEKSpXJnffiLuN",
  "key4": "44Lt8pwweZ5Pf36yC8YSiog64oxj8aJALK5RHaKZWr2268ZmxzhJjTaHsobgAYoNWXAQ1WHus4GWNnpBrBnkvhcm",
  "key5": "2hsoMhhVUhM9Xnxdhig2bZQ9WZ2wkuZirtssSgefeLCJt5gkqaSoKKpgPnn6rfBY3AwkBZKc5PYwwgMpXsdYN5CL",
  "key6": "2KQRodGgY4BF1WJw83nL4ow1wMYDCaPmsaKbVqNTBVPcZGvjBV6djsrHmVsuVf1TrxfnVzzCPHawoexHKuRW5Lcu",
  "key7": "3sDkHxf5DQpbnrkjMKLdcPLeF2pjo54AjwSonb2CQj1iskjPnJUvA6ej72bsan322UvTFMUR6sUsNmK5VJwoM6c1",
  "key8": "231KFsnTERyFrK4BFiLrCJ7ghSRQxbRxmmUkEtsvdvnZg2eSAsGfCyY7Sk2Y8FvirmojPkhBXmdKrZiWLfSMHSEs",
  "key9": "2q6Hgasfn371NssnpgmkUU6o93qzKa366tFf26jwNjv1erMmJoPpcaaBjiQcNJV8hEAMoGW21qMgw4R4EEzoR3dz",
  "key10": "3difVvJGPLVZ2bxtHvDFW2FnwsmESfE5QhkadZk7f7rWFum4cvEqSqSuNfdzCwqqvLQYLy8nCcxxeXaaFAbdX6A3",
  "key11": "TTxLUGx5Rnc7WhD3YCEoqkbaGUN7P1AiUVjMSXZZZdon3Ms6vTqAhKXoXvQZbo89yQjmRS2RY59kEfkb6gYNTyC",
  "key12": "3BkVFsos8pPEwA1RuGyQMAcb6Y6EQ4i3yJ8dswRCPo6wynnN3rdEQ5wVnXp6jBU6F5zRdXneSL8URDZ7BGek7dGb",
  "key13": "4RTRNZydhxm4s2zd8Ef6oBTdq4s8CNCy4ZMyxnRW3cto6yMYVgnaDzEw129gEC7UJDQUs4gtxrrUT6iGn78nhpby",
  "key14": "4jaUeVtWCP5s8ARBKcxXkUfhBK6ihc3o1z4325UXKBXWnMQV3tJnPZPTvjZaaarCMxtb77h87mmsg7pLoe5SiGXr",
  "key15": "4RCpRSAArKDkw4GQtR5qLtAC8x8AjySBruh4Dn5RN258M53BuLjcEes7QaeqHGKie6kxFvHimcJSnknK1iDJGMWw",
  "key16": "5pyBKRFsDPifmr19ExT3eDDEnkGx7J7A1zRwRKRkZCEGaEwWeMWioGLMw9HmndTodM42RhwgpNgNzzEczS27jn4o",
  "key17": "2WQMw5C89oAE7JQuQ1DR69iCBffGHARHgcR8K1MzQdmvQHDLrsCWdymPvcSfqaYxcb4mVjY44Si6xA3Uwh3KCrtM",
  "key18": "4HsffHjTXVqT1V4UTufBEUFTeqMEcEEpENGso3PjdPkUnkh3Yd3GAQFCYD8gd3T6RU9c4StFg8NU4jaXy4yDBoer",
  "key19": "4M9eSj8tMR1ZTdbubxRR5M9guWuVvJNin4g3sd1mdyAphJwWs9hyyGptUy72X7UBhknkr6N4Gk7i2wgx2EPSWKgk",
  "key20": "5LcyPmUN8TLcsmTt97xvXSFW1ti85rWC9Awt1YX2tZRhpzHN8f1kup5hfwhRF58mEui38csN4uLVTRjDJ1JLuWot",
  "key21": "vMFAcYdbF6kSoNN9xVuJ68w7EEivS9vQyjd2peCj6qAdioX2at8zDV6sCX6A69J1ZpqrpeZYNUxTaQz8d9KTqmh",
  "key22": "4uVq3DojjbymKFuQqHcXpz3mgfpMMB6NLA7fxBk3CqhADRREisgs8k6e6h8Ugdoaf41d2UJpoAV54An2331E2Nk3",
  "key23": "3dzgxoxsxyhzVJVCE5mTdWaFF8dDhn1q4BZhoT3TqdAvG8VsPFY85WQM43TDnYpSQuXa9uo1oxjotxSsVY5PqTCf",
  "key24": "4PRffhAsC2WNQ23a2AX3pZRTTcUXftV6WgzDNGdBRCDj5tECzZVQfu2EeGTGZ7aaKm1D2xrqYh5xZErRniSoSDEQ"
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
