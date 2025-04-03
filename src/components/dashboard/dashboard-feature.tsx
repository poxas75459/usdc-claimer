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
    "2AMw2vasZ5EgUbcrCMoPprG81hiyFVP8GW3M9HSL3ezxm1DXfBRFRFbnw7uZNejithqfCiuTTetAkdXQHWH79ABB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nLmNhzrENSGwEFMNcFxxPj2mqLpSZKvqRjuVTzbj8UXk1HWWJTseqdS3ruVLVZRcPhYveLngWvrBMsmZrKfcF6e",
  "key1": "2asWgwJQgt8zeTveacgA3jKxae4zAJYpjYiNNBW7prH4fiyGcLRN6fmSC9Qrt9JrUgXkNqGAQyBBTnr16idcoTa9",
  "key2": "Tkh2ykBTaCcPHbJMcnJRT1ZYpSyqc29C6pis5qVrsuWcVAi7bSHuLoQsX4DrUo4BYuVybWRMmsxa5VfAp7dBRXs",
  "key3": "4hi9vvpYyenc2K3pGAL6gfNuj264KRZGJutNhJVaoBnAvQKqyykUirSqPmAHNqt63H7WTz8RTaMiPcBUmGF13iSf",
  "key4": "ZYPURrSt6BHFaHxxVQm181nh8kBV6BMWjjdYwL1JwqnEoKbMULjDf4aeN9CUMz3F4DgxbiKnTi6h3wkJzMRbzET",
  "key5": "3TEWW4Dfrtuw9DFWn7tuu3fwGKUKW66z3qB62RLzYnuhkpMi8PZk6JpuoviMXuCUDirxQhHuHTSTTaeDonQRMPht",
  "key6": "YvXkviiicGeMjs1M4cUxCxGmXvAGBAaotd7aeTYrPUC9WTGULktb29jyLf53gAp6LrZSmjnvq85KVPHSNUZpjm2",
  "key7": "3YhtgEoEx2QYAmDTqS8GeQPDZNydgqzPo5gsDHt5ikuVq6BwNXiXdpGAzLFxxs7ayN6Qx72nLFEkXpmKuYQTjvbB",
  "key8": "4SwPicAYExZr22b59k8RiWemg5XyPv8GB9WfPUuTTpZahoYcfmFPRDNN9E86q9CYZEQxtiikQgbLC9cSh9dkycZG",
  "key9": "5utoRxPMUxZpyWb3Tit6oqicgzzhZjvWhrmMJsqbWVub4pxpDLHqAGccSjgsMuVjqPVDd29PtFU96h1a1yGphTJT",
  "key10": "3Tw51ejqMZfjwCWRG6KW5SoCemfW9LAMC1jyQFjoaKFTfpAa8Rz5SJj94AQt3G2T3qSsAvtWzvQpvZqsHpj6yPw2",
  "key11": "2tnajtKhPtJ784LqknKugiDExN1Qe3ADkcjFr5nqbpGWAnymcziaehCgZheyZy79cEc9AZKrcd2nEBL2MWb9GNBE",
  "key12": "m6JS91qKKVYVJQfb1Q8EfiWmMFERWjzkwGgi6UxdsHZwrSjj1AAN49tNVGefvwukU8baVJTYqjvYS3w9mQFbJdD",
  "key13": "3Ln9TsmrwSYLqv1mEt14Zrr5UamsyA6S8vesNFmvAV7Nz4ZnnJuAuM494e26ANJmhtgoBNQNd6iJfeBED5PgaPn1",
  "key14": "QyCW2boKAzXwyw8RSHydoZeV9ztwMSGZf3uNkZfVAmWWEf7Q59pKiA91Hgzm3pJonJ9qzFSTZfnxXDnBzcHew6V",
  "key15": "a39o8Ety792gmfQ2DSG63UwWtZQTLx5Np5tfYs35hM3UHHQ1kNSHVRx3X6qY1xuyBQhxH2XXripiPLwpHFwbmbC",
  "key16": "5jXXtn8ThkQHupKyvh3ro7JFZLMycssTcPygzoDTKp2yMbiEVC8Lw5RVQGVV5YNhtVqMGKae3x8rngLfkzrmsVq2",
  "key17": "arbyMNbYvjuLM95nyHWEZHVs1VXN27ofSL8kBWwyN2gs8LEGJjWaPkimhBVjSLP6yDn6pWEymido4PERLu7F3WA",
  "key18": "3xcX6Uk1LKkKbCU8tSpvsYbNtk2j2eVpdCsUoXj8dXgheB41v5yhoo6yTRSx3BE9RCFewHuerNpZDHYPoTvPZBV8",
  "key19": "65Mc57PkqdSPjLy2SGywBD27swHuK6uXjQsu2AnQkj8DKx96o5ie4HTtGiJSAaMCwhPUggy1cjHRdXGTuyCkm15Y",
  "key20": "3vEqGzncAemogzkxP82PUJXxGuZVnHJ2KQ4KWmeZMEJ2PekcvbnnvHpTFFor4BbWcwVCAaRcuA9p3BBquGR95k7D",
  "key21": "pMsKPVEbnNdj1RnUkPo4c6h3Lx4YbMLyUseR4xzqXVZvK5s6SVkBknti7sNzzS9HqaKYVnnZ4JbbtTGdWENKE8v",
  "key22": "23QNzxNvBYRZdRsagnS7YVpRHbrqKVNBQXUeg4hXQy43gE8m2a5jip4XWdnzw6YJ7xEhUWtiHCqZftDzwhzJH3Q7",
  "key23": "5Aj4zXMqeUQhpKZbhqMqWUDSAxk11ZS8scp888gNw7r6mDhUPu1jcdGDSgAY6LvsQEHzwNqx4R8BoYUJfNmidZ6e",
  "key24": "5vpYFVKmkL1TKyEzgacCpvkEpik4hZUGf5eNb7qPEVznU1pg2rj9Av645mNGuBS5RVyNGKPXpi7panH8ZWDwgtVA",
  "key25": "5PYTZJhaanPtFXtYQvAGY9PHdiszXbnvBCxQvuduYUwMY7twiMxbNgeUbnkCDm5kyFKgm8eH9TNZqzq6egquZaJD",
  "key26": "4GhGh5faNNFYHUQa9bQzHu11MDdMMoUCPp5VZRXtkePC5piSewB7QubS7fSmiSrUvKQc93eCGfqUUsmbuzrvTiM5",
  "key27": "2AiZRNuDEKUSH8dmZVsKwsT6FUVsQ3Pq8CPh5cyGxUYFYR5DQ6nVbPHsisKfBvPpmGTx83sXpUWUXRs5rhxxJfLe",
  "key28": "r63jH3nVjQzUwtZZnRmacyc1kTTQMajSmvkgisKLZDYmke5cwUkEL7TSNpisT7i3MayyvNAoE4acqARxYn12Mot",
  "key29": "23trTYJ2fHSbQKJT7iNCxJuRayovCJ2rY8inUErjMRthmgdQeXJzZDDg1MbM5y6E7Z3qYQuHAVLW2aKfMYKtry4x",
  "key30": "3HoTfzkHeUEgQARXewyQmTevH1tz3QwMjCW3RurqhHzzCvMpzmdpxyHZ9NeCU5FzLr8icHwpLwPT66geFcZAdYAq",
  "key31": "4eeJrkGXmBSfhvyV2zCvZuXAdSaXj8NG3ZVcJgsm1ghrs6yuYnBjhPthUZGpWvMzgAcPnwZNsjWmW3BkxYcG3PUo",
  "key32": "5metUUC1iY8dLaSfUvkviootzKQubMDMNpWjnRnQSXkGCyJ3NTsbmvxCJGwNPJZeNsXabV3er6F9vLzdd2Pj4fDY",
  "key33": "3XoAGY5QXonUdKLDz8L4bgVoaYuCaWMgDKH5xEAikoChPY1uN4QpJYLTVDgyWFKHEF1QfCLh9o2JpV5QNinrbZAg",
  "key34": "2HHBJJLEpyfoYdiAf3gJDRDMWH1D1dWT1uytfGyuwDpAhgQCd5kEXJ72Lu1RaH1S87CUNQNHhE1hXft9KhModm3Z",
  "key35": "4kPhsNv8H3Y158uiqPFhJWTSLcJW2asGKM3sKrrumXtxGrJjKoeRQZFmgunvAWDgHQKbYczMDYnMRLxkKzNSrYeb",
  "key36": "3WfDMfkao3vQNLkJSNWxmcKquPsD1KbgHQADa2bZPiFA2NemsjE4LRjRJaeRH8SSVywg8KG6XXSJMimSRDdaALzn"
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
