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
    "3QNm2x8LDcHriL47RW7CUEiDYczEe1x3uSncHpAUxEZ32TNQAJEhbcRjeBBBzyAukqgoETA7xq5eEb1T9Coq1zym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64gaGiQXobegAmddBtB8CMZKpQV9sg9oeSx9pqBBQYkp5aTpMJXJefAXe6UpMFCyAS48Dje1vCJAk9TKNqhSPV2y",
  "key1": "4cKkLPjQjcoZdbWFg9fFMZdUsEesW7YarG4hEXMamidssjpSs3jG2kY7aEWQQzFD93R9pt3S7uHit89qdE8aeBEG",
  "key2": "5sXe4nh27YS6xSKAoVBakDJtRRWeS1ce6EUkUZo2hTtEGHR3NmiTQ6P6e91nx3NqfTVcjVb3zTfaBTy5zobtoM5c",
  "key3": "2nNK8MZD8xjMXknSFqTuiUPCfwsn4GS2CytuhPqYS1EisSHfdRQX76bSWMXKA4c2YfmTK13wtfWkFB8v6asm75kK",
  "key4": "47efKGfKKE5YCfepPZk3xkwy15ihp62DTrXooVFDPncPBKc65dERd4Ybx77ejbKY5bbQbBMFft8x2S7CcBi6CWXt",
  "key5": "3fYJk7sbc2stRMtNJtqgjmwpZiZMCxEiXi5JuEKfwiic1KbC2Fh2hYvtqrWQ3UVcrns8swfNXW4F9hm8gZbEhoc3",
  "key6": "3Uyv6DG73E9HLD3iUUo8dbLrrV6vyRupGyRfy6zMe55VgbzhfTcNKZxPPp6WWNhfNo4HDzRuoW6TnHpdrbRjYR5G",
  "key7": "4FeKTvqJi2EBJbRnFi9egCXcPgEfQ6fCxSWLuWcnoayv5FyM5RWStpXvDpszbTMoWzxTinX5yFjHG9PUVvm2jzD1",
  "key8": "329o65W6gMXVHf43AxCSnkyGzUx931f37MFJPU7pzHBzBJqhgit346khucomAWQ16hnDUBh26HBm6uzBj7DtVjpA",
  "key9": "5oQxxA5MAAZoWbZdniMVvwbSnityfC4qjX44jK93VZNDfkpQF2ixBtgmh1QrFPs1CXqND7d9xsyuo2nhCij8QHFM",
  "key10": "3zvhhn6xH9wJXSRCQp7T3MCdgzBwyHzChuAY3gqAUJxaDkskmuHTBDwmEMS83kuYsT3g1dsB61xgfZGtRowSynRo",
  "key11": "4ASSA5fFikdhoh3cBei6Xnryimjoy5E7afmcGhDcJp1B8h1dBpwPEUSqkkYgCNwCpc3xJbzeZdewiaJFYvWqMXCH",
  "key12": "61po4vQ55Ya7NgzuX3LrYqnnvgzJ3Vs2RjsoApnYuGYSSTff8NKiAeWJVenb2bu83gk8XMrzTgkeRXcwg6RtthDH",
  "key13": "2AVCyjzqARWXQPq5cS4SwxiiahUEhTsnMfAnZN4uW41Ui5fzHWT2ahhCJ65i28eNLPS1NE7unFywrWJGWE6RdaY4",
  "key14": "2pjAfLZcvtLb4EJBYk1idN3MuC5zYsoXJW5VRCr87FAJ5WEFBchrZqy2v76ftBAXfr8itKx4pzHpiJXc1sFCN1Hu",
  "key15": "soepxUPVQV4hCs8UymLwJpvqmqrvDnHFKysacj7jq7kSPjo4uKg6HTHvpRriAeHps581Pw65i22Lt6W1i5Bvc7y",
  "key16": "5TrjC9WK7A8sewGwDRnSAvYHAFn5fZnTWrb3SE7WFHkt2VV3kBLnxvw9XL9opte92PZcFd59FPGzv9j7BeSaSbj6",
  "key17": "7BeLwu2s5zLLw7nnQK3rASv38NoPojhjSJMEmd9iFeM9v6NEijpV3KMHdTFnQp1yYcStt7XQ7sh3c6uRbsdVdKt",
  "key18": "qSSi8kLtgphD2kHn64eXAYUowhAQNSeUvT9qqj9W9xcBpRfqb32CB8bSiSJWCnQopsDA7oEXkx5j3CMNWnbMrb5",
  "key19": "531PS5aHLBAFevW725gcgeSuKSmXW1wANtKQ5eAoiyHuUMnSv9bdr3BPy9KefETUXxTo3jecCkAJ7k8wzHpph183",
  "key20": "3A3ohRMyU6PpiLvwBGQTJiVX2Gpc2tqJHqXy3PMTn3qNVYqTU5T5UC4r9uXb5XwEreYdUsDPLPRd5yBdPfVw4WsH",
  "key21": "oV9cdQ6D6StgYhB6XioYANnLaixvYbz1sKNSW75ARnECXyQR4KnzvJSkubeDZf6UzoUXWhJJ68CNiMMuKNvDzki",
  "key22": "22UeKZqeDZfeeqCi3XMCgeZZCe3JKmgRrnXqeRA1VN8447hYh4uvz7qcWEJobaA5Y8btx2MRQp75xC6aCaAyFMT5",
  "key23": "3DWvMXHPzbJeUtk6rXbWHxKuBVoAURTVFnQyHZT8SFDjo5c9xuv66ZcRtcVdDobbu5642VAhtUMvQrMFSRGT13dF",
  "key24": "4cBxQ63JV4K8MewM1WA3SYTinG2UN7r2zX4dnMerrMsTLfpQnWwbVTeDAT7J9WcV2DoHj62W42H6VC3LzQ7GPz1s",
  "key25": "YsQUTbvD5XAWjkKyAsfPpmxUWqV1UFbDCxFBs5Ut3oepGS7NW5K82oUzzA8o6qGvVGuZYbnWwNToP2VEvZ5Qy8i",
  "key26": "qsT8W6xrPPgJUAQNQwJML97HjkjxV84V2GzKsnLfCq2S6kV8Qqt9jD8jtdW7BFqxkRkmULcxyfL34weiCkraTPF",
  "key27": "2TXyvUE5dRxJY9vv5Achuycu6jH5nYGYgcZRKyiUphKuedNt4QeosZet2VMqK2ErKjvJuZAUaeK6ij2y7WZjhL5H",
  "key28": "3jRRsLakpHiU2yYWzJDVGi2MmYqdmbx153GPUF4uosPcxAdBKgns3eyezcHyQ1mgWzkdWUeRCLMUgubJW96hAMcm",
  "key29": "3SUhprPdpfBXCB2C6jSJQLQgm8L4UAuaivZ6Muuosaau9cLZwCySQEex2h5wpRrPTHtMSKxQxhnKV8EGsVWmZeJC"
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
