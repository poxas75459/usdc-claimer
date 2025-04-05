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
    "4z6v7DpqYrEYNndjCsHZH7vqabds2j7Udnf9ukvedjV6YepTQRxRs6Efp43CBpRwJCW876GUmBuDNjAQBJXiTZZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EFvfq3HZbGFgCfb84yHrFqL3mHYxJ4K7gAGjhxfrpNV5t7JZmpPBFe5a6yt26Em2FuRa5mDRXreH5dLALSPhjb2",
  "key1": "23x6axDM8faoBN7XQ8quwJBy38S2WHzNRYXgS4WU7YPYBLihwQQnqHSHvk8pA4RPXCgEcx3xdXFBqK99mLNocGM4",
  "key2": "3gx7h9ofzJQMKy3s3TPQ4tqpsBZQ4SzQeQHzZvSyaU8vYoJnQNK35KyF5fBvumSrRtnB3YiVMEXeXp5r9yGsgtDj",
  "key3": "4K5Kc2kusvtEJb8utsGW9mPV9pu1JfJv2gLZm4fGrtGrA43xDcn96oVnH2mybqTm3PMrYmRZmX94SPA4s4jaZSN6",
  "key4": "s8QxzMPxPvMRmVp6aT5Ej5a3RebQPFYyT1np3UcyVA1QbZaoft8AJ7tgYa1oqCBFXFAZxChNVDx6iJmJbhXUZur",
  "key5": "4pDrEbSFU2J1UhQv6xkRgCFUQSsiqpCp5cayVHuBTJdFU6LBWh9SLJ8rVb1ZHqEJY3xx16ts2NdKaCL9JzwXwq55",
  "key6": "2NkvyWVNty8TKYNFr2zv1hoLdGbSNNChYS8DkFGsoJ2UJ3cB48ZzT91rMxEJW65rX1LXczesX9J2kMgbNxH7kfc8",
  "key7": "51rBR24eVYqpYdvJis8EfAWpVfsZCnFrjNNRjxNac7nFwBaU6cHK6UdRJbojSL31ec4892ZM3U5Tp4B9R9V8ssJx",
  "key8": "5GujPJLjcqJ72YrUNd5eJvf3rfQtwfHUjVxXavRM46w93PaZqh7PZgABGSuiUxG7iDiU7W4PRzeJdNpPPwQd84EK",
  "key9": "2qZRHgDTVDz5J6DQ8wyJNACxeUPhxPBMzzYrFDYM1yPzhhHhgbSr5v7yf5smLTnCuWfcBoiWLjiYR9cUPiM4h5Yk",
  "key10": "5hpvgou6v6DKxi6CZX2Q6vc36TS72uX8WxSEF3k9rBYKP33spSG16xeVniyibVLjAALFCVtJ2HnVJZxAJGcRPSCh",
  "key11": "2CGXKTEJi4AYZRCkkWqj4GRaGCq8dsjXraBPWcJWVKcguDfdbmCSSCaortivyhUTPEnLEwu4hL8T2Kg9CXR3nT67",
  "key12": "4GyThKvVzodL27qFA9FiLsHqJF8YNUPiizFujxbmBfresH13xgy9nFGK4Jbj62M4wFPzC7A14r59igY6pRAzWPTN",
  "key13": "4YvKZ2nnBwYNP3uhXgKN9KWduiXN5oXrvb12jpKy7Rh4r74MPGxERPd72fipMgGb61pakGwp1PEzMA9VWQ8d6bC3",
  "key14": "3n2nAqWoujzAk5yQTaFbbay18djbL8ofncqrvvfm3xmHZyZMri3jxBbPTyYxtkc7qPKqd2gGgMSdrDiQiucBjpR5",
  "key15": "5USUANy8U8LR1ibdxpfzk3B8guB4y3Zioq3GvyNyKbi8neRie8gZLaGHt7E9XTrkxA4VMBqmgEetn9kVTkCX5zF8",
  "key16": "Rb1YuusXnmBh74qZzVkqKT1oJw6ojdWzfNBVR71mKcQWUohNLwCLGFA6G6hK9oDKyQvoum6p5WGaL7oySLUUL9L",
  "key17": "3aSafT2SCimAhPEQLS4dqbpCYgxhPBwnmw8pnPKTV6miMjwNjhpVnDpddsC5b8z7JpWecLU49a5AeKzuSCqNQ8sk",
  "key18": "4k3Cyben8DR5TEzXBgU34ijrxL18bSACRDxqjX1VEAptcuao7z1SBNsdXvCqDZbu2gqC3mpLqrGLPehyiRtTnavB",
  "key19": "35LNPGbcmg6ZuHxfkcQD92CSceap45eNTV5GwYgf8Ln4hmiM9pXxPE7EQ7JkAq7DHW1iattwXkYx3hamGJLyLYbX",
  "key20": "3MeaJS7JA2Abs1nyfhHHcgwkd5SaBCR3GVbiV5DLXH57REUANScSk4eHV4ohBZMCTRxcLXVZNubiuggrDHd3FrvW",
  "key21": "5ZiB7UUXxpcjt8oovdmQ5a6oargHLQBZx2YK9RnrLscTxR9MDX5JzwGwsZ1wHCpcaPdyG55AoTDxcrHcRjSVr3nc",
  "key22": "C1bzKbbUQaKusxdCy9oNeFubCY4EGNTWhr1soU1i2nMiy5Tj7tfNfKbqA56csUQf2hU4p3Zdvwzes8FnTB5CCvu",
  "key23": "4an1JY93eyoSP1vg9Q4RVFKMdGniKoAaCEhAtLkrLyEE96x64xNi9nXTggVzM7diX2cCZhuCfLDasR2hcz6vZ5S1",
  "key24": "4x57S7FME2pZv12ropNtRVEpjyfiENsmk9sbRDX4NoCeZKvf3j882SMEZLfcZqZThWGNqxHYiqYYL4FNcjaY91Ny",
  "key25": "Xj1AzXUGBY92dDZvQYSTKJN7sf8sET4UJsFZ7Mnmxb8yRHpCvFJQnC63YnbXfhDgZ9VK3CCPqT4j5BUo683N5r6",
  "key26": "4rftn5FAMnLUgETCC7nnxgH3tiK7VvsAGdrWqvkt5AJNSy1juaFEQSvvMw5xCz3B178xZ1xN53PoGZUDWGwiGw6V",
  "key27": "2SijS9ViuoyRoLBLQ8otEDNaRG59wHebZ4d8Wm6j92DXYkZFYQVFtr1sumVm4EpKNXkSrajFsUhU86LkJV8o7Xyq",
  "key28": "5xGkh66u5T5hPXHBdmuv3SpvqtHPQ96zNhmVvCaF5MBJDBfSQwjp2XPeUaNAL1EzaULRUuCvFtEiE9dFu8ciibnn",
  "key29": "3oqoY3Zsta9sB8YgiyGDKRt9Z8T2tpLq9otsoQxLByhhCrfZsscbPSgr6TqXi7ovx7mjgPGUFLfVfyqB3UD4vKwc",
  "key30": "SrWo5K3gMdMFJ3Q1295J6iCoHcQA5adBkaQmBKxUcvEhaCtY5kzqJvXmdek8SP6jjkDQLoo4fimxoz8MxCRtokm",
  "key31": "5mwX1AeSqKGcrnAwrsoivACWjrdJVFnicjAkeHiKVfRHZNDDX7jzx1ngThU8xfqt6djvjKQUi1F8pX5BPNHRv2Yc",
  "key32": "hxkYRKLSifLGsdHToMKKj2FSPtEHAaakBuCh5MfR7uZHPLQ5BBtEPYcConQ5gDcAprtzUXDKAViS7KRAUCePKFw"
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
