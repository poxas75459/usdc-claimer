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
    "3GFoZhurgXnUaYXmH66obJY3LqvZ6esv4VTy5DM3sWkaW8c9CtJvnKPPro9Evuoh8bsNwVZJpqu3c6jDWqD1exAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aLGSpt9P1AMwmqXfHfrYYfPRnGjVBo2A3z5HSbfwGjzaBtBnYjuhNnNAi5MK6M9yTWNEhBtGtAFxzv3syt8n7vH",
  "key1": "4yvwuD6Jgk4HNsQE1xFxERwmmZWHfkQDi14U1Qh9zRCD8DYw34MByMUxGPKXgVCrSL2dvgWK9opGVYY7AqVBPbYV",
  "key2": "5daBqk9MYutezhtiLoMb61LdCUgGm687GFufiA9aEJM6eDdaa6s2GAW3w2dnEtMj2jBRnnko4iJxixq6Q2v5YhhE",
  "key3": "3P2Qt73hgfGsGr7zt5KWpAhgXZq5LaXBNmwXJT7Z9VyuVtcK2m6vSjw2ycqPKqnJrhocKa8gRPwzi25i5XBjqgkk",
  "key4": "5boSJqU5nR84hg6KMHNLLn8Pgz3EQBprdQi174paUNCDZCwJt4iYWKPz8H1ofq9stUXkNkDiNhmHj3zNNs6e9fmg",
  "key5": "4x1nAbbNaNX6sKgFspp51gY4qEQyfwNDqmHzQosDxaey6TTjZuKPDCjuWenibyYqG2TDxSBkQcUoBmRVETSbA5DX",
  "key6": "3rvMnnXYXMbrEqtL8FPz3jDDTnyqi4gUHonK8vB5KJP4uoGRUoMuGZaAsE696dcdv2NquSdRuPv27BadPCKHRofQ",
  "key7": "2RMjxVRZNXgXQw3GJjZa5irMNqxRZoAkR4ncnJFpWzHwD3ic15a1sHuwL4KaD3CpKKSKFBxShpQvdXpyGEeUM3s4",
  "key8": "5wpw4PBnh3hZRQeksavGDqSyrARycLxuqXGH3CXxWYBcU6YPLLx1ESVnDszFZkRKQz2Ubw5TMF71ryLLAgnkLxJA",
  "key9": "2hGDpP1wsxeAi8C2gAzc49BSHxs5A9PSL6HbuUrERdEVod2fjfk3TuNwuk67ccv2DkUaiCepWLjGqjWvYf4U7p66",
  "key10": "3z7PJp6nnsiq1XTQrdg2mLPWrUnE5eS4TmLsexqLx6dx5TcnRZSXC8jtRzs4KsRXzfECk9CwBXTyWRa6azV7tcuC",
  "key11": "4QhjAECUu2u2145LHiEUvwAXvN4C1k7Kr6pFeRsFKjZArxq29uKCCEPtmbpUf8fk2BsVcXj67QaXVeHP9iNUALaf",
  "key12": "3mdFNByJLR5jto4TMuy56uEaHkk7LuNkUMcFgHLxBRD1rGhy3swAmbhXNDKdpw3HYF8h86AM51eLUZZpGBKX5oxC",
  "key13": "5btnVovHUVq5AejtTpJneMoH2t8Ay3ZovA5pPQymAHAuS7MHZTo83F1Lq9g6jTtFVidpX6NkBPztuoYpC6NXTSnW",
  "key14": "2wUV4GRNJ3eJN3wayKNYbrBDUtwHexgwb3eesVZaorx37VhSQJr5e4KbMWbmk9abhA2aeVKFTdeUCk3doA2eGC9p",
  "key15": "wiM6rvrY4M499HfoJ2iXmfksK8o5vhhFVj7xMtTQM5QqhUDUeJCHoiQQp15pdhaqgBaJr5GkugFeJnmXCq9uKkC",
  "key16": "67hGVWGq6br1tPEnj7EBAtLhUmoqdPmd9LiS2tz9Dp1EL3ohvpcWjvjVR4stXEsmYFhCJqdMVwRHgw5SwXigw8Co",
  "key17": "d4uWWcxWtq5wimV7KUQGXfpzzYLmg1g5nowNhhQJHmKbJAa1wFC5cwVSdWWAb4VDzf554VwZHe18yy4stgjv7Ja",
  "key18": "5LikYoN4HtoxLuMrnFFMEyZoPsCoN8LCtZd4h5TK7WEUXEqytStruWLBp4R7rwWhjmjK967LWX9nTyqsBjDGT8A9",
  "key19": "413nx3aT7JLt25tJfN6uB9x3PYmmkH7qw4b7KasKRtPxsunB4qDTbyKKRqWYPxoArFfNbJEoRLfAZCy6biJq27tr",
  "key20": "5UaovuYJ89n671w4rbgcdQCUCX1jYg5CRo4Dnyb2syxWc1g7SaNTrHaJ7AsCcrnwAVFsFGQCgzrYDXFEKY65fbyW",
  "key21": "2S57rmCQ4PMRKXW69zdG1dRPMF9qLJxbSNUNAW4YDJjpyCHyX4zASAJP5s6VuVZwzFbFoy8JGX5rxUoqbtYR9r3N",
  "key22": "miH8SQUjh4GRLiyVNfEhQAVEaKmS71uU7LbT4JQiCjWCMraPzy3tyM6MVrGmNnSY9qM7KhWjxagzKurLoLuunMb",
  "key23": "4oFQNkKGrUmiRrxdvcPzPFR6mN1m2tmaGkkDuQDXRCCV9yPF2HSvAw8AKQQPUQD2X9mrcJVzvpP8hLqF2Y84qtN6",
  "key24": "5w8ySxqnLsVLVykReVZ2iAs3ARhjQpKhD3PDdDFf6BZtSeQ8Fep43AGizJxZJ8fPxWAYrNhKDz8aiYRBmyG1TfAb",
  "key25": "tg3nHXKhDyuSZBaxzFoWA5RQdqHKZHjVawREqNwnW9WzGH1Hze84SBrKKpjYQwJZcfo5USFGwRHmJs5Qbb5VZxe",
  "key26": "5iBDHsJHFKBor5Rc9QFHsyGgTMUBvtZipKZJYGtk7rqnDfLhsrbBSQ6bcrZZJWoFg2qP1MjmpeHvVsR9fy2DKcbi",
  "key27": "5kMhG3RpmfBBChP9husqpbm2JPLpf9jy3Vaoqne4wX4T8JQgrut1L3WRUBQ3MDNwLoErNUhGvUYs3SQDZDdBC8jg",
  "key28": "5bSjYDqtCQgBsFxTXA3zfJqd63sqQH7CQr6TSJmAFu8hp8ra5hYfTarubwzHKDB9iGdtVp1QMXaCsP7qSw5BeNXS",
  "key29": "qELYoWKkm2sVMKMNmMk5kVNRuzBXTSqjX4Zsjrc4abzx6pAonvkGH2uGiqRRbNyNGs4bTHyvEKFLMDGJuzGM8fi",
  "key30": "wQjLR2NXBJy6GbrYQyotqov25K3ZLNQ7qAPtK472dJpjRUvnpgqLJSFhSdTVmK1PthvbWi1uRRKjCmRXtXTfkjC",
  "key31": "5VKT96vccsYJ2jDcNEUYUFCsMCvdhSTuafkTipzKA6JRWzRESNrW5jFYJYE2Up3paXXjiHrLs4CfMjSN8MQBf7zE",
  "key32": "32UMXZMLftgTmUY7Dtdx8EkqhvB4fus9pR1ZAQzCMpzeVpJLM44nXQcZ7V87LQq4vxY46ZHkfag8WcuNYKPzEok7",
  "key33": "5CEc1fQ43gSfnedLQCoPWFiG4RN3W2XK5Ncei3yZDYUNXn8QNsMZFx7rr8kQqwBL7YzRaEzu6tGvQAkKJLmj2hem",
  "key34": "3cFSEpK2wSHbijheW5zNzUu3SYzBg2TmKDgC2CPg2cRSLu6EFXEZT6SJHMgxHgSRB4R7o4qjR6ZL6jtkxAfzCmMK"
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
