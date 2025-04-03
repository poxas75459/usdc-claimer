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
    "2HH8bpoHULM2ezAkNEtT2ujBPZoaHPqPjftK6hAsJCMrpa1fsCawc9yPP8dFgRcnWt8ezAX5LsVHaKMPx94Hizif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ndmnhJc2D8Pvkf75F4LkNdM3tZo9rkoAq1rqhbZCsaVYaUW9zB7v2ZmKLvX9qG21URU9a9e6DQNwK1Wqywnx6u",
  "key1": "3wMxcokY42cWoRRovZ1MLJM7QKPd8krFLy944e5PJFcrH4YD58w6bdECN6Nmn3sqzX6SQrXkQAWahPcGTYy11SEX",
  "key2": "Ga9zRG5ELMJyb3GVHjJNHfuqLHZth9djRfCA1tWxivaifPuuq8BDpG3MtKtcfHkr2AUMcG8WaTxjQyjzRrT5Fuf",
  "key3": "5ECAquc9CnbHCrwugUnwD9Xk5Qy6dLdyWV3T4JdakxJthDsXHkamtybokjvWhKrucMjhTAaxPQPtxogM6hp7MMxt",
  "key4": "2McPqLkgCnksXfZPMRXjotsokiw7uCKWL7Cbau7bed44aW7MxyxKC8VTKKZPmvSE5iRyYDSFfJdkymRbbfNYjKhw",
  "key5": "2YdZUuBDKMjBsUCKEtX2HCvwAe1QW37n6wZY2JmVgVnNGUce1gaptBz3ubHc8G8yRqkeCjQRCYa4jSaQARzEXWsa",
  "key6": "4siXRB7d7tiNzVaCpRYfKahzaefxJyqodc9UWiHYFwAkcRzmddTPvhkRrZ34wHc8Kkj8xhH3nB6gCQV5RviUWvrT",
  "key7": "5bJNfWeLkwLx42xcu1vhwbq21v6oQdWRGzAn4VbaRPrJuXW8jFhbxMGUemKYjCtR1otfke9mg2M63y7Rc7xWkUyP",
  "key8": "kzGjDz4sthruEt8TZX6o6n4S54trqnWzXbsgkU9VNLPPQR2YMjbRDBpceMMKnqMvcswiuF1DC2WwYefSMZL3NZd",
  "key9": "5yxTtksAsfeMQu8jTRPUDFKxKf4rReZkESGmaPXufaCR7d7trnt6Sp58wLg7nrVHNvBteubuZhMXZy4Cwef7VgCZ",
  "key10": "4iYSfngXkfsFXo9NL68Sbn79MnkQKByFw5ocu55DS1VDvhk4zDLPMwSVNWN9QQJcdnGkW15ug4TRAXfKm6QKym6U",
  "key11": "42dyix3mHtjL1saQNTqQpRToqykBuNsAe1cw4Yagd1irv9b1RrpdbrHm9ZNqtDBtvkMWckQnCWE4nFBFq8t5jXyu",
  "key12": "Gf74Rqng5eyFQ7bSjHteo4sxwDjWL9jj1KgYV87obKpJU4uTLBen7R7THhK8xim1qNZ43eXo2KwMvqCi3nfuhRw",
  "key13": "2z4ChjYa2TCy53SUJQmw71mT5H33fPLRmaBkxMXnQqpfPSubGa8k6m8McPKg6XKtW2oMTSLYfuADdzdfwY6yX72A",
  "key14": "aqnwcGuiV4V4RhhUdpxMCHJEMdG4GYXSziahkNhwzcsFeSATR6NvZC5EPCphNP6KztvXzQgLAgK7bXzrWQc8zr9",
  "key15": "2ykXzRJpxc42vRMKKFkMz6uWDrHRNQ6TukXM3L6iMh6MJUnDJahEGqdKL4sA1xkfdRYzvXRvP6LkmdAW8pTRsRE6",
  "key16": "4WzatwGNjHJqz5Lqq7TeR6Kv2BBaxH4YP2RbAMLdBZ7fEt1J7qTmK5kMyK7xpPQTiiWxqTyj1JfqzQBcktwRpqMZ",
  "key17": "5exJ6S9pmQefTNsv8KmSHpNNrEfrVAic7LGDBf37nd7Rue8adA9AhCYZPp3GRciR5UyeGeiUd1jjpCD8azbWWq1B",
  "key18": "5xdtu47tVVGrxWpCXMyi977mCZ2YSydXM5cEW3WF6GvKF3WMLDB8uriBK1LXC5xTvUJRn4ggG6WhnPCf3K5ThQdg",
  "key19": "e53rB4GGxkqQP6ybHuYnqy3cs37cPaiJVf2NdR4WEzC9egmnE4XNguAyQVUacf1tBLTabE6xFwuknDbKbNUBg8a",
  "key20": "2iuZvrpve6LiCTYmA1HaYFzRGp7mxpqCfzXFVbpQ4XRx1iHGJbx21WrTHLjCcjhowf5i2H1hisYZHTZDzrPLWMtJ",
  "key21": "6v9wfqtiTu9JrTF34w96wYrF4uycgezgvpXV4RpsVQWdX7ivrgDBNvxYet4MoVnnQMmaE5JswurxAQT2T35joyj",
  "key22": "bZePhc1r2MRm8eLwkhrKsv8ue6L3i7ws7JSbpN9YXNK3aWERYDVYdPRZrQbzVMVCxDJhWP9GWbog3iM1UyP6A5M",
  "key23": "23CJjh7Tg8sX1j6ZXygMj4oXpQehD9GAJxoD8Nx57qBTAxdtfMGy4gk6VpbTj7NWLw7z37GRKC9HNq4FfdCwvM8g",
  "key24": "2oHK76TrUFp8jjvUTDZc9A7byA3ZdNBQkxGCeD5NnaHyhGXmTXruPM79H51Ly6GG5ptYGu8canW4fX8Hjpf7hxsN",
  "key25": "5t6d5SCW7XYrG8YU2TYifD5yKM1vbkS2fEn3rjwELi4nBW4YSdCKwqrJdEmj9YpFvXbkEEuoVH7mHt6r1ufjPyrQ",
  "key26": "3N5RLHwofxL8mEzUfkUCDSCBtCyBR5P8gECMgBK2R9sdVK89JPkKvkAuX6SpBCinnKQGntAGDi8wkZvRbfh1NT9d",
  "key27": "5dT8LvAy8eHeV56TTZo7fMnfUWskYxBbc9VUrqF1n1qwBGj3yRb3PCyPSN9gzuw5CQ4oo7TKVetkhw45Q8GDVq97",
  "key28": "4d3MeQdgG7g5N5MqiF4NzSVJGeyrfmJCZHCymVTTCgLM6j9soXgfgh26yCnT7x8YmWctUHVbyydwWbhRMB7tjzYs",
  "key29": "X68uGv8CfoZma9wM65JX9QxijKkoDL9T4qexyyZ8AxVSPnx7sa4zaymUUw3meEopqe8XgAurkaBRkLMakSGSDvR",
  "key30": "2x68vtSg6BNjFCbhb7V5jcZDSAxBVeuYP5KknmfuFgWRevHDXFvRcaEsWq2zFchbutKM6xSkUkP1NBg25bABCk6F",
  "key31": "3JVkb2dU48Xrjywmauo12KgMFcEvrraUtA9MwWVS4gWXTST2fCNFDdEZ7hXoB29Mw32DDqfxxVfKM6aQRdZDRwvC",
  "key32": "yBCQ4Ghwi5cTMVj677Mxu1f2GLDG4VrvxrKLpcYh21AZyUibtReZiJRo4rFmVxNs3BTq7k8RwXd3RgDc6NdJpUQ"
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
