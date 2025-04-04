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
    "jiu5PH8pWxmuhLbR7EFeusYirC7J4fKfAzd6yUaxGRD6MdTCoEJfPpdzsxYNcVHHY7DJxVABeoACZHuGPAiTR9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TBRZEjnqbn4ZnonJ5c1L7urYCGdyFYiAtkbGooKLWWFpjdqgznC5d9MLUP5nhQgXvZ5FS3yuL1GpfYeKmWsLzpJ",
  "key1": "2NF7nT3W9SqfdTXsHB26VtDQxeet7BkkJv8q4YUBtugA8remupRkUj6CZi2QA9nx7B2BKmaK45ZbT2hA4sxc5egn",
  "key2": "4zR8Uud6jGPy8Y8Y3bozAQj4L3nwE3VZkYySkhaZ3LxzJ9pWMdVSaCTrKRVcbUyX83Q2tpTEXyNKWGyCqF8gVWYL",
  "key3": "5vwiyyyGxGkrdyaGpo4QU8ux3eEnEmNTszLYSz2xYeDdKEzwBkEt9GKE6gh5w36UEGJzF4gum4VMNkKNVYvnKLob",
  "key4": "oCvSx2AjsvzPDR1aNhJ8BAQvPBYqSZZVwVBsbUJagUateMb4oBac9whVAWtKG6LhB9nZr7L7pmVH5tPc3wXF1KD",
  "key5": "Ksn7oDvAiDCcQ3rUjsEWNpgyzXtYaoSra7KBLXoiasR1E3c68H2R7U34omwS3U74XepuvBY2G5jCkARSh8FNMie",
  "key6": "2TxaHM42XMCahsFuGBxmAu8udBzqDmLbwXrpM2iq9DgEvBDTVaRDcS1qR5iu6BphcxEzRmVmC9JBAvMTL2LWP6Af",
  "key7": "44G64odapqUvbooRsGtiKRuWp8SRXkVuDLmkKUct8d2sMK81zDxx6v8Q9QVPP3rzPRtPQoEALJwaJJox5DEN431j",
  "key8": "FUYoVeEvGraRoPMaPemfd8rUryNMzXoZHsHC3paZ1LfUvMUvmuoJgHiMxWtvqDotTvZK9L6rsa31LmKLUXWtCyj",
  "key9": "4jHapSqQyS3AMgvdzBuqBW8V7KTSNWoBwdtE8wNsyuMDHaYXr6ha7FMdV8BvmLRJqaSs3oAhuyaZMwuVxoLtANzr",
  "key10": "FPZwGE9YF6qnqLZhrNA3SgdLdAEeUKrTpwCv8VoS8cNJax6jRdgsF4XGdZRk1fLsghSdGrGTep6cV1qmpgwdzT4",
  "key11": "235yoagc9PHdfcsNkogb1HTaj4sm1WYqc9R1inC67Mrrc6EBwPzXdkXC3Ajed78nN8ZKWxQ6EuFhBtGioHXgFSGs",
  "key12": "2zfrsezEKxtDvopJqmLWQdA6qtR6mmrTLi2oRmR4zF4o6WeNNx29mBHrLEm3CTfj1tPXu95pgeeRbrnj73GfveQF",
  "key13": "62NWDg8GjMXDQ3MjHxB98Pzpxa2bWunCtLizP5EtrYucgti8ogZMPQMsL6tKycXBEX5M3y27iFBZPbUVpt2KiH1b",
  "key14": "5zTzv8Mddf8DM9jBNWd4w7mktXSbiqyrraWZ6z2Le4KhLZfRte7WYqQDW4TweyWrwVJXN3JPyi8MnA7vhf8CeWx8",
  "key15": "34sLzQYiSxgyeZ6k9ie4cAr8Q8CtSSps9BBYQtU9ZpSoAYaunQoi4ZLwnjcjhm588cwPfuJujGj9YYah6zHGPkDk",
  "key16": "5xYz9bGhhycpQM2JoSpqG3ZpDE4fCeRNNCQzzMp9w9VbeFkHwE4kuFTGNfQrF2nbJ6iwdpsJWtDmo1Usq164J4iM",
  "key17": "3ewhuQNX5GPnj18eRetnLju2k8t1zAQSkFDudwhMuHXTHhjWHmwpJMe6iW5qQ1iVhk6C4NFEvNBaP9MTZzWWfTMG",
  "key18": "3mLREgSpaURKyRkX12WzhRwFhj71fuLU3zmmL319UjYwungsFehHeV47KniHF54HNhURvxtZUdkPxAd1BxmzwVnX",
  "key19": "4ZmemP84BMR1b637gv2cseSSPksWGcjYCtHH231eurwuYQNCaWiLvk9tXLuMRNxR5R5tdSnEwqhAMfW6JgM2DTcx",
  "key20": "3s43ESK2tADcfvfpQFAwo7wFpHzz6W3FZo1ZPsHtuN7yFK13UxEa5DiWdogWTGNLDMugUqg9M4KYvkSaqVEFFhXq",
  "key21": "5RYzUxKnJzKJdfyw4LAM6UxnbKV5L9BofB7xk5VoJbyHKEUkrYyfysiWwts9j4YkV6Uk1nCcbJmzxo9bpemJfU68",
  "key22": "2guWHKM76BbRC6dB3paBskqVz4PnpTjZ47XuEswM7byxBhTvn5jVQsajCHd4CpbUCGKT5WgoSSHgBFigvbusaUGW",
  "key23": "32rdVhUVpCdkYhcHADUEhUQuQqJJCwcsFNHm7okfT159dui8pEpdxF7cmmvJu1xeyhzarWWr4JtT6nTbSxQpkdoa",
  "key24": "5pLguA5S8vsS4tQnqaBHQMuwL2yjWnVTJAhfvgD4SqSSt1X5hNMRbUbWnjbqAhWZ318M7RtfFNCVBTyDPYLz3WZR",
  "key25": "3SAVdMbUDC8Z3hwDiUKM9R2wTof4VtPXPsB7SrJYVsdyxKEXDpoH85z6hXzt4BKrkaXCUPQL1u51kpAA9EJ31wB8",
  "key26": "BHFCg9CMsY7J1to4L565sXQzGMh5MNjWMCJKXpdThmnGD26hp3fZEhVkDxjUXgGAMRbvQnXC1PJVGVSJKqHuLgd",
  "key27": "5QkstXvhL9pzsYJSFag1sG4KetT5XxkLjgzkP2XQ88dDBDxrhMgQjuJ9d8xhSFqydjUG49Fq2ZhZG3vSbLUzVqjy",
  "key28": "4qgu6FmgeSjt5Jr7QxugDVC6yGrixb35tB6r2e1m14NGAze7irZNWZLPscyDEBvQU8hhbaUiBkc5EzrcMT4Mw2v",
  "key29": "3YDjrCjMMBrmqV5NZzfP7Eeye4EVWPFkf8Z9TieZT2cCBMuT3F5AcYsLd25AgjCaFqn2B9VUcgCnxuTTW8131XS7",
  "key30": "4NFDvbuNipX14V4chGa1ceR4pfL1EJtnVpN5E9oUcwA5gCpFgtxVRVrCBwphrtd2b5LJKirToPMDE8bERJ7XGtEi",
  "key31": "Bx47JhxjJGGhX98FEBggwo4xrBTPCtT3aHZq5UYxfCL1vetYyBujSZZtpRga6gxwCeq2gEmRWZ4viwfYLBLiJCp",
  "key32": "5VgHRbdZycWmKMq3yPUsaJ3kwHnDymHBTRUxLCAp8dYrMRmygi3cMpBnXnKDXVPD8BMApxw5dCB3zCvcdt7YnnFk",
  "key33": "5NXAU9uqFkkn7W28VqSyRhuqJMJxXqBsCS3H5Uj84Ward1iNaZdogGoq47aUpQrUo9nU4p6veC9J9fnzJDaqBA2x",
  "key34": "62r3Pn1RiFH4WmXhKPxWonvY6TKZwxrxfJFsCTYF4EGpJmRBWQmnmg4TznyNmayUTYUL22bpRTPU28sHFCm1YcYf",
  "key35": "4CgEKq9VsVhCV7emFcBAnZFWgvz4Uz11Vkx2smK7bBp7sZvyoTCduSaT4cx2FqpZdWqjrgNFJsCZjaY72fU8EivH",
  "key36": "21rcnrNhpX4jJktws7TirVEiBzKf8P3J68tNwMN2S1SAhi6eoASe9SUfUR6QvzPxM92bbLZefgggvBGCq86dBhwk",
  "key37": "4Ps4JBfwgiC2buNjosFLq99cPoBYejQ5GjunGdQqeLy9F1GLLsTpPY7Lb9bkJiwn8ynoxYKPnrychTvcxLqGXiAz",
  "key38": "DGZbu9RTbLPw66QHhSpDUb45pEjKbkck8L9hqGXCFUqACwWwTqQT7aFyoFvtaSamewXsCGWs1jKrRJWBLsaAeTN",
  "key39": "5VR7bWFTdbuvNcjpfHd1D4WM1VXuc9ZPkNjtxDXNavmDcikNb39mocVCkZehir4m6PEAQGJ4GuyTSgBpppU6miCw",
  "key40": "QxWAyEyNWJxBycD5a7uTkjkyPXXveLX4aKHKHRUNQtsHMG9bNbWk36WeFrCFHbp3wJfXLDFrXWxM7d21RwFArHo",
  "key41": "48mvLSaAsY2sY9GwUGVyfDfB63pevFhJLH3ADKNEmckwA8kZybk86osFepLubUtvRVnyAGEk3793DSXtMoK1jXuh",
  "key42": "4aXZBWZvBpScmyK4byFeXZnPjqib2cD4N1gTNkFfQme9pgH7pHixk7EsNNV67pEfaN2J59DfNSQSRnrQDyT2SR3t",
  "key43": "479hHomPUmM3NAhS5YPUvHq2PiYTQ4nxgsdGFuyCz8MdzQFnrMLA5eiy3HWoL6vcGYYJa6fyQHJaRSB44aknrXus"
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
