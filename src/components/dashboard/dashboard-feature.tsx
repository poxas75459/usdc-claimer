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
    "4m8sxoKnYqvgebRCivSe85kzEBtEzw4ak6k754MzK6PrHvj5Z7kB8nWErXgXb79MioRskg4vDDj67b9n1UDR7Eb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SFL9Di26SFDLwvRH7idKWf5N67MZFrVKr5M9bcRpnnUvA2PYzZikMEXtsrr5zLBsFhdiFTPo19HFQRhhTfP8KvV",
  "key1": "3t5wfjzY3XSk53MVdMJNnyb5aRiDUQXQbAWecZDofGsKpCGd1EzaCEQyY2baJ6FtNrmBytwD5B7d3mYwPjPxyqDx",
  "key2": "2ejdSKhBZU2uTRcL7HAQKWWVYLPfnJnF1MjbaXDjWaqtbmaQAqNLAnBFQ5ZinbBW8UiWfztWF9adU3evWXjEFHnv",
  "key3": "2xFfq97AoUPzyqbXVQpAChE2CHbFKVjLeFs7XANa3eLa7Sr7cNLb8ijgXV9q8LZXqdxFUZvtdDczZTiJ9wWA4nhY",
  "key4": "5PQ5yfpdjdFDFhc2s3RAiyRQjaBtEKfWxpBJBSKHVxBQFpYPusdYz4DERgW5HQc2ATAQfbNw7xnuJQcE1ptfz5R7",
  "key5": "5NPCPmSNwqdmbNF9TLBAnACHkciMTem7hp6RZp57kWEQNgp2fPYqbTyRFvckCHEP6n1K1427ZKo3HXJPDCgV3d1v",
  "key6": "51NqJU45cVfzLDfu4MsNNKq3S9xqLo7oeTqjuCVAGNkh2eYYrXcu6yZ5fzvBLPcgdME2sXjeUS8PmhaPpcxj97f5",
  "key7": "4uAYmBr3RCt8JkrNPF4CeXrRW76FCp4o8GcMVzZ5tJrpLcJU4Ywh242yMuWueUfJ19QS7GBZLLJrGXwT2ztem4jt",
  "key8": "5vUW4bxBSw4UN5SByfh7m7DEDgnaFN12aNixW4Vkac3MCcq5JW3M1c41wADSG66jGUTQ8XQvdfnjTye12zmRNM1A",
  "key9": "3K7uQzNPZrxgMSpobif9X5r5jaMJFfYyBdqFmjyBbRNSzpppHtArqGKSbs12vmRkq1Gvz2rabKcqVg6Mjz3hUtp4",
  "key10": "8Uv5n6QJJjfgZYRE4kZYJiqwoD5UnWA5F4zM46a6CbS3bpP9qEFKtgDKPnJYcGnRFG9ggYvwDDV4dXKsMGeWJJ2",
  "key11": "m9mUVTVhpVffxCDg9RXUKBTC6hVe46E6txVDzgrLr7jKTtnECM1vEJnLENDrunSTPwwC6uqGQdwkskiZUaP6BZS",
  "key12": "3bNssT8dAseVTP1chgiNabNqXFDACCr4uv1dTmaQQ4nEswwo3hwGzGSs1f9uVDGCTdWPPFPJwAbZPDEiooohgs3k",
  "key13": "3ZNsjCH7d5H72oDq1wmUzUvPkYaup7XDH2wfFfzmct18o8crmrvEnmM3x3QT9c7R7QFJJqc4boAdEeDeZ7aH26YN",
  "key14": "2qDis5wYwXh84Y3EEzrAQjFsZFjnMmrnQ5fKbvF4N4KAnmGiCUEvfcdiXmfYUp23XV5Ux6PfQ2iVPJyM3pULQHtb",
  "key15": "31dAnZkuaibo9d4r9TqXMeCaWbMnY5HF93EDoWcs1sfwQ8pQvtknFpTCo6YPBVL8odwTV4FA56v9VR6UcdUBJbUx",
  "key16": "2nL9t1c3BnHZCVyAzEXH9dT5o62HxSwShabAnSi4imSg2mJp6uUTigtXGaYBRzwpCvQau3yueeKQ4SWKc6LVCzQ3",
  "key17": "4G6D1QSVouzgNKVQFKqkQeKmWttccLGE7Evo8B9xf4iQmd4D43uMSx7fsohhB4bcuGivnxxWt9eH38BvQwpgutzy",
  "key18": "64LxnMCqmHKRgNPhpGS7ZMRiojJuwvc9Rk2it1wM7pudsmT2HMHmMxuXf3fk8qY51rJSzzP3xTeugso1VDpid3W4",
  "key19": "yzQdDmQiSKqQCa8Fu8hMSY7ZSfC5N2wDr7fYuxMNGLhArKgjPRYdnGNEpnndvLGrgxBGGQnVGhf9Z4BeB4vRTn4",
  "key20": "98npmjMo56VyGVDWQQnHhN5bUQnDysAPti4mFqthdM3oRw1EPwVX9wsPSSYN4tVcgmXq5b5BDkwMPGD7Wj4L9GA",
  "key21": "3XwGYgAargEbg4xLXCjjXTJHxWHpeidpH43SenhAXjmv6GGzbx1VebYeBi1aWn8nqZETKXNo1BqGexkSntUrycvn",
  "key22": "5BfFFe7LnNZVbr6LzVJP85uncefgdD6m7K2mYGK6baLZPEcqjLS6wp3W7dChWtMVB1EqH2vXmRYdmpfHY9FBC8KT",
  "key23": "5yer6iefzVCJdMUAYjKWoDYK7LefmCdZd7fCBugSDrQuewatuYBAir6BRXa7FzvJwVYpR5eSnneDj4xukyWk4tsR",
  "key24": "4KJYDSnLj6SQnEJFzW8H1a6aaU8mcWYz8zkPbJdAfqnhZux3Mb3SdnBEcX87JWvtX1617o2UMjp14PTMjX4bEJse",
  "key25": "2bbfrV7HaAixMfZEjoMeoxnUb5oHqospQcNJydzUcDJjv5LfYFWsZFJFms992rdA83qVDZHiVwnXPbfoQPogj48z",
  "key26": "2pofdysoJJ4U5B2xX28xrY3xw5RChBdjBs8DRk56Y8pMnghBsT2DJ5KQQfMtmmY7KBx6umsVWY6sg5Qz6Q68XSy6",
  "key27": "3SpSQ115iKwB56yN8kvrdptujw87Z9YFkqjcvi4TVj7R843zRq4GKDfhgfrHrN9VTU9RbRo6jpLD5kuGUuWsUScd",
  "key28": "4gY86LUGwm3WgmFy1eW8A3zu3FPdNbgTwYf5e6sTo9bF1u5PedrmT6pSue7oQSQcFKkHJ9PjoSMxD7faHg4MCbcU",
  "key29": "5xAbMeph8dBYc2EXaCHESeZLcxTGFLf8oFza67PeXQGUHcHpXLq1RqUwCZ6ef5SGvaVW83wzQo4Jdkp8ooUsyiwk",
  "key30": "xBLk5hNR9fuzpvDV1VASUvNHCdhSUVB9qJgNfjx9CzpCG24wP3mo5uvT8voVk13P88w8igqkcwWTEYwMnZLBR6k",
  "key31": "u69ZtgqaziPEQJjPb8ojFurtQRnNDr6UkvppjCyXUk3VvzurSdwhbaEwvJB6QCaWhH3H43otwwPrMpNe6EBCaUX"
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
