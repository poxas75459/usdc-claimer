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
    "4BXCRBoR6jTKqqi1XdZ8MYsduJVDJTNwBsPkAUaEaa7VQyCqJH9oGkZqbmQijgrbL98Zxk3jQYdvdtXFyfdqWzEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z39GQmYDFPb4UhH1qQ8JnwebuVW1R1CgREzisG24mrihWuF23AZW4EAiT7VYWocsii6qkat46ye4qr1aXgFQaHx",
  "key1": "3duyBeTpuDg4nxBN6LVeGxn6GrBrJZdqDySUNVPXVq4mSEykWBCC3F1SXfy1mrf2Ubr1GKLRuWubibQzEoy1fkuz",
  "key2": "5h9sJQck3PXj1GLaEbpQixd7makUZEVkHjVXvVGdFEJwNtYZCpNdRdCQERe2M2a5WvGWJsMEAAjui1axkDLKXGV1",
  "key3": "4KEJM9G8mebnwSLWFpFGUXTeA4hF7VKPAjeFe39xny7qMWrbBUdREysdYiX1HKpSsSokRYEvAienKVPJp2Hd4zmP",
  "key4": "R1xVBFbHf77PVwUaAewADHTFrpFjyvqhbQbte3SsXfmwpEyxsUTSkzKbybqoZfREd2hKPSX7bDNoKkozzDuzq5p",
  "key5": "2sJApkxudSA8BUe9o9eFWA6dByjRh1LJbjB4DFjKeJM7ZYLP2rAuafWPUUH6S1Zi21h7n5nu5YoWShJvmnCfaFXW",
  "key6": "3mpU2zXriiXSWdhhDna8jsgPVBzY7UEQSvwswYCvJjrMAdTXXi1LcdzVaaMiWo6DnR7P7hBVnpZXFV2qccJW7yNx",
  "key7": "4Rc5tSr66n14UPCNJVmEYyb5dWWMFc8vWNdbknGTe4wqx5mgPt27uZ4V6mXSLx4W1mQrXK6i2UQrBJp3BhNcfNA9",
  "key8": "678tRFUioMF9nJJS5XdKJBexQCbP7zMSepB2MbDzuuqerx8bHvwQ4p6GnmU2AP3oxLhFbhj2wb4diyosMZA3uvhH",
  "key9": "2gWU8UKwRgoXPn98t3VKQqTgBdVwFDzepNLjJVuwD9K2WW8GNrwoYZpJnevDEjYPWHCAJ5ArAc7Z4n6Fwup46NyY",
  "key10": "3ZhDAyev2VcVuEb9cADSw8DgTBsNFm6Wg888oJ6zjFqfe2vNc7dZAAvYgqNJEicZskAGV5hFT9p95apwu2j29L7G",
  "key11": "3WMs9Qtx9GwHo6x4TSWBXTpbWZbJ6cfymLp2GYSyLBTJFQdoZLiWCycXeMTXAuBQ6Sew2CRjeMAEHpyAbdD1SWqo",
  "key12": "4UPoBDwtgJSVXXuX65Ers7PstkEeatSiVKfpyqXDRQMZgADZkxtb5JiYxFFBZjv27sN34aQRZqXLJkhptj68mneg",
  "key13": "3jXiy6bQj2WaPJ8PvB8oCzkUn5zHD4V6qLp7Jjv3tX6KNMXJZwdQr8aCpihy1tgot3Cofksnf8m7WtrYocTTcCUY",
  "key14": "38Wsd7qPTYLfqKSeeqUyyrwAWGgCxEBPaG5d6ypVwM9PgH8z3Y2htCu2bKMtT1wMG6VBWbji6VvFJeztdj5WLD87",
  "key15": "4bWDhxfdsuihpyh1UvrNNfbedqZRYGScJEcaSKFuDTFEze5xZfCx2TF6zCMcxnCf3qYSWhhfnCxXubAoH14PN4nc",
  "key16": "wCoEDDYvhcnDV9NX7cW3fpmdKpBjhAxvv3NuSVToCcyUCZK9iV37ihTTyAAWBXCqg1hHAapzo5aLTCxgpXaZfoA",
  "key17": "nzwdM2pYQjDymXP48FNREYJueoAqNWcazX4PxvkFnc6LqfeRDQoCYSGm26rfxABvymdmQc4QG35meLUBd593jvc",
  "key18": "hvPmjnNWyxT1spCM8xbTp2ZjBbkbUDzZPaufZkZEetFL9pMJupjvoDgx5LKCCkJba73WQKZW2rMBpDUzSyHCg8x",
  "key19": "4qVEcQyKMs4fa2fFwiezFNBfPhoJZCCb2qu1tNnQKrxz7mvreLvTvdDPtA5raYTguqJ2Zqkgpt9koRAipUMiLu93",
  "key20": "2pdTL3r1QDYjr2bfNGcmpGgfKzDisx7LXT5qFdMtvUEPo9f1FgCBX3oTkDftqUbiHAcwct6VdqYEtCaoZKSZ4oVf",
  "key21": "2XG1Nwo3Fx1RhgYdoKFEUkt5fXWWEMthijrR8VTYPueRBQaBdK8PnVG9hmnJJcg6ZdjC3hjbBNh7LgWWtmVdh9pj",
  "key22": "pzaD8mCp2hWdjSP6TmtczX418qcmZgvRcGoPcfzdJxYgpNyQAvWth7169geSMp1q15y1MqPM2tNJrETzcq9gR8h",
  "key23": "zoZZSkUCKRzjTWCTS1YHTYFEXZHupNn9UJzYMgtQmnaXo7NpfpEt9G2bG88o2n4KnLBUaKgpdCBs2mXJeJ2uaX5",
  "key24": "5D8FA1eYVgG29HsBJad4iARfQDrHmUhcS42BxtHGoWqBk7BZS2bXLBd25JQFxNAMk3ghYAUyeUscU7Ftx6kUo6sb",
  "key25": "2pQn9ns2w6ya8AtPCr528xEW2zRBUwejGQq2NGJgKbq8vUEys1TdoKRsmRWMx4AkiW5Nrn4n47CDSv3DC5Aa4qwA",
  "key26": "4gRmeXYr4F2m5kha8DuvddcJoQb8XdgEhLgRHcmQ5MKBKsJrApjLeWMWkEXJYCX3crYvWCg9mwooh7oGBme9U45z",
  "key27": "3sT7pMK2HCPLAcddMeoYDcpMcgh2W6BsNg3eF9FSTyLWo7dBp77YfLKPHeez1LxSBurFDSdvYYyzfAF3BTKYw1Mb"
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
