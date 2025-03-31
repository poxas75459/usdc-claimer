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
    "GtyRjPYJDHBoASyoGC933YLnVrZEAqN8iCcvcXHZyf1ccbH7MiXtwXjNLiXS6GP8JxnTiQPgy5zth6A2hWxXGWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wi6f84h3gHQmzms5ipc5YDLdvHStscKsUDbdepHJR4oGFQpeHFjheKinYDLbfoFQWyUd3Gd4YCyRVFYWVfiyEDN",
  "key1": "2rtaUW2sBRXgXDnQHp3iCXZwn4wdeK5DfihYqnWj39cvDHtCGcTVioeg7tyXFFEAqMDdaokmKuRHPGF5Z4gGKVcA",
  "key2": "3kkWkiCQommYZbByKDUG9yXVKTibTkEDgpaDMj1PnYBqb31JF3Z1SaNHzaJ84CNf7vo6xmFWxRqdyVAByFQBwgdD",
  "key3": "4VRD45Agi8cFKKEMAd9dnD7ZgcYZXoUkP1C4LKNTLUc6TxbfUTfCirQ7bVh4PxS8dW16tH6wa7o3zjwecKKBxhAN",
  "key4": "2jdJK5aTxawVrKhcpv6nKhDzxnWg9K2UxDhLn2PCW15p83Jv9ZtdYrJ69egQEZoAvCUz19Ff8dcMUsgNhJQjfCLE",
  "key5": "3mamwoxtAEMFN4Wsh6XDCggo2q2vdwDpcGA6wGgf74fjjfADUAa8jiUCxwUv2xRMTdY7kQkaKpBX1AWZXLucaLmX",
  "key6": "3E3L2W16Wz5UiwABsSXLGAizoNjNzmorSUomHiDxzNSbcTSV4YA2oQy8YcuwT7dqUPk5z3uCkcWa3ThKBwRAuKQq",
  "key7": "2BMwTqdP2UejPuoH4QT7n12NS1EaFAtme8R8qEFbRXZcXcJSUygtWJEHPikvap4PWXf7CiKcUwZJGe8AiaqWEPWA",
  "key8": "574V8GAKPteZie1m2ye8caX1tAT3yjrUfWYT5iFcGAyNEU9NY6W41wyFWEmsejakLizYKBJyyeZ7ahMwVk1nqgFA",
  "key9": "Yo7RsxzDMC6xJJwMV8PENzHK51EfbPYwdseVFgH1t7eq5R3GD88w3BWN2V5SMmk5udxLeYrUD8igkWeUW24Nzsw",
  "key10": "5v2CgkTYuE5THMMUzW3CETqCJUW8aVriW8fgt9NRoKLBcSCnZ78et7cQadoxUvLDdB3bMCDxVPWNv13t1TksnWsF",
  "key11": "5u8dtvXT6No6DFi9GY9SXUrsDimRNdgmS7g8kFkF4bik1Gimau9cSfrTWtmT2aC4RDMsztUJ43ckBmQYUZUFPthJ",
  "key12": "49vG1UDaxcCEgQyoEB2wcnJZJWpxUKhkSm1E9LpbetKcJzkSRu8t7P1sv2yL68t6AUcHMf3k6Ax2794BdwdbE4Ck",
  "key13": "r9hEVf24oa8JJ3aBzDArsf2Nc6NvL4QBAdsukvf7XMr7RzkPpNoF89mnKeEY1SkYKHeUTydqtbk82qcnGxW2MzC",
  "key14": "6ju6s2KdJvbChjho4ERCiJLEYyEdFnoJtLCgZsze1pTBqgBJdBXgk4Vz7TQE2JHZdUWqzroipLW36QHqy3KGPYe",
  "key15": "4RWgxdtBhcF5gWXdyXceWdwhsekHi95Dmgo7yr8cGSfFXzQRuQ94sHEzLTCUxHZfAWaBmPXmugZvB4qJdkPPiSYw",
  "key16": "24F7LrXNtxEtaPh4YzT8r9LDHybsmRZUAYB1xs9TaHY7qftfcf5kTBpsAZPe8pvSwbBimgksV8sceHxw1P1LWWMg",
  "key17": "5gWJFWSRsNn4Mzvw2XZDL6u9mRFmc9Waw12U94H16QRHwTJ45WmnJJ5FZMuNcZqTfdrrBAoqnYRddVPXfkdyGHZk",
  "key18": "3bxXfMfVTnwMvtBpXNxc4TbRU4jD9onQsnEqxDxTm8LNK56KDBNE9hMi2GmQEPcG9HnteouSRKmFie684tX3sYq5",
  "key19": "55vRWjBumY231eG5yHW79Fscw8RdHLCokSHqFQF4j19qaX7WoyhQCSPqjYCzTf3bxscYen2BaHBazBMrc2bihpE9",
  "key20": "4igu7aceKbPn3pmifTxBoEbqUnmr8hiDVRkibCGipGtrhHzKiLMg6E8GpmsXhieCEZYnn1CfsFurpD8d6kvGyDYp",
  "key21": "4A38VXwNJXP3n4hLDLjxJ9NEc11koUGZuRJ5APZ83RPsGTenASEPrtXheSV5iXzuPKaJzQKq5L7wHq4BUA5eVq7v",
  "key22": "4sUYvHWmz4ouaA78tpsFBZn5Dd5WLTdkeFyivqjeiDupBbRaCF88t3U9eT2tWWU6UFMn8wvpgVbbu61qeFgEdQhW",
  "key23": "27i82VteG6t3niM2go1q9VYSW6yoNd3DgS8e9WknJvxbALe1odDcNYJckb3qoudgwPdbmRaZFoLWbjhCozQCe89b",
  "key24": "5Me4stx7gAnWHuQNNMGmW4vu176w4igYA5AHjZYacFaGsLpQjTw2kzhC2TRjCenqc3323NYBRrdsuTCNeg5f3hMm",
  "key25": "2vFLqaFSoFX9eZtXx5ytCikVqFddKvkhYmdNG1wtWg6eLEq1XsY4gZCbHBC4hf5rzv9JXqcfRFx7YRqGujrSWcZi"
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
