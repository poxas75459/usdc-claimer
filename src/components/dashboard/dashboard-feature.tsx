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
    "gfmhgHS48pVfmBMYHpM7v9zK1RhJ37dnQNmRRFE5LabT8h1vRj2H6LJTkWxk8f5nTFbGxYtCeWeoJSrhRGTHvvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dzc6eFvXFnNJXr4rLimqCqJRHHh2uHVW9QgLRbEGNLfi3sZVeN1wdTW9Y3LE4eyZvdev26YLx5H3mHZwMqpgVJW",
  "key1": "4L8sM94AZXVUYknBvURaBtsc7E2EiPy3C6Nx3VQPYdyybS3J8syRJrZ2nraHz4cQFNtjsJ7obPVX4qovjzHbpU8j",
  "key2": "3K2yMpxebUP8osThgNnuCXaJbVfkKAG9iQYsW1NXfvZ1KAr49uc6wiRipQdKQxH9pGqBXSs2ZJ1YYTh3nFuwPcP7",
  "key3": "26Ld2qYEL1N7S7WabLyfaQhDLUuRCqgqEoKanspuyixN959rJipJiXdB3wp8gEUkawZTNwGuanJdzkgmDEiy8J6o",
  "key4": "3tab1a6FbBHLM5Z91kHBUJWq6Su9rHudYkaKcnNZUEJPCsWucipYEn7sNodQwMNnDb7WtnhFUkRxkXwunGCEfUjf",
  "key5": "hrDZgzJvYNpzitMpWrwNXWS66VYSsEDwVooQRHmPVD4isDjcT4ZCvBDFv3zkcaADKaw2QtaktQMZxgVMcfoKF7f",
  "key6": "2vb3JDXKcw5Gcg3Er1Mv7yicVN1N1Hz7TN6texDzcmyBYmwhdJjXimV8fH5GXEWZ3Z4U5N5uTR5WBpK5YH6VgW5d",
  "key7": "HgHBGuhDxAvuDMPiKLikEi2qkyh6vE4RUdYwdMAAiu7JHNie46vskaaL2iGAH168pFYWD2YQmXEjXQJWCghs9BY",
  "key8": "48mggBV4Rrzzt43bVCgU6bTvBFfLZ7j5QYH1nU5J1GxLfvutv8oPZ8CDbcEMm618L8pEuYgdo9CSkCTVFGRHpMTR",
  "key9": "38uP4BBF5Uo2RF1ah9aSFwdVSv6fEkHK2tmbLXEnxhLQrzENp8gjAeaqy3gz7S9LYPwHvcE4bKTpR4PndyXwaPnR",
  "key10": "5pYHbh3qP1Hswxc46YgtLhuYWRv4EXjLNsbT7PyZixkgib8h1wAKfbZpev7h31PXBfFmocrms2YMNqyKCGxNQY7Z",
  "key11": "5bhxhFNhSY3cdcenFZ51yiATwNkjeWvnVTkxTa91QEx9ELsy7FYi4uNgAyXnLgKzfks2Tmz7NYt9a1NqFt5VZkcJ",
  "key12": "5j2f7AV5J8VLDGk3HMhcMGvb4AdP7qvFLNHjQosLwrBPHJz3QDs69ejy2wbHfvyD7gr9zrRCveJyk1tbRYxGkFUK",
  "key13": "U1nLduA5WCp9vkVuh8zGQ1sUn27hrR14koPnM15eKVfgDJ21D7XkmJhiiBq87Fq7vTTNp4QJfyJfEcC5v7MFvP2",
  "key14": "2fwFyLauJNDgP5aT7uYjQSgn2VDUtwW8n6r2DLZHPjzJKpqFZ5fkXjyqgmaz8mN7bBbwq9Bh7jPr2XM1oPpeJnWg",
  "key15": "2ZEn3WaFaRHERsmuEqYmG4wMDw926hfm7PrG68Vi6b8UGTXkBRjH8STCh3mfNfzGN1W2ZbV3egTKxEzEtrsAw8Wn",
  "key16": "5nfwc5tBZPKgRogZvwr746hxfwGHPE4dhev33isF5gvn5BnFeLmz8GVRTPTKxCxgAuW1cWjAMR6y6WW3iqA6CLjN",
  "key17": "2RnVqC8zW8MuRzTBTQxqXaU1VEjNsNyfK9tH2zytKdjzk5kDgna2vbkjJBtKsGRkX5nUBvAFxkSpqS4xKN1ih6ck",
  "key18": "5Z6YTch9eFQQX7FvNpnUgcMJ31ips8pRqABSR3kJCBNjYZaEYgoBTzf5mY7G1hG29W62qfzvv7Hty6dmT3AzZ9fy",
  "key19": "RmRDnzWtj91hDySXbN1We81rzHt7WFgwwDYtbGmSiPXpkajayjBLjbdBZ2zXNUJVhQSHetMdiHQSNHJAPpaV6oc",
  "key20": "3ir4H6F2g91kQkcQ3BavW6kfbM9DT8FriGSVE7ebCxKvLPHHrm1HAdhQv4GLDHJuuSVd5rB85g4hhQ333uQUXjdy",
  "key21": "3jcxnSTKfggjULoSm8v4zk2ihteTNCC78EnGbESixr19aJDgQzp1Jn4LcfrZJpC5qpf8W64vLrZToMfW6RiE1y78",
  "key22": "on9LeKvWutCdK5pt561QYmaCcReqhxKU2n4kHU6Pc7UMLDjzsPkph75Dffq8UZ3YxUpEZQ8pXMkNRJAPaKDzUho",
  "key23": "zuaAQLKPm8CNhjNgKYYE5iV3kMERr9CMJTpNb21KGyPyJWxHJBx2xDgdAceVTrUaHihAmtZG33Z5bUKErfnGd2x",
  "key24": "56upGuvN3RrRBdP5g66Ds691sne2dQS4bx2xSCGkKh7EuoU5wendf8T73TArQvZbRcRcrRMsW2LNQpzJNdmfjgeU",
  "key25": "2xP1k2j56GUxrrb6vqBcbQNLg8sfhYCUgD8q4kzbbf87YKfV7ijJCCNgMDNAYXFxH4VMb7sxDmyzbvAp6PLnXnV9"
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
