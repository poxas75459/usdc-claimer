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
    "58LggTgXAvGZrJsNcGXiRiBdaJqFu74GZiEJs7auU7Draf7kiuN3voWwyVzsVxMem3irapYDDUdqGPwEeQjXFech"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52VDAbWqyuD5eqGVz5LW6eUgLBmLBCYHrTga8xdvph12HFNaLKQEBY4xNYyS83i9gYTQKQRvQ2GesgHYFTGw5JLw",
  "key1": "2vDHcvAzA3zyNYa7Beu2SuNxNFg9bmYf9ygsSZDRFwhiAqjhgP7t9gexRY47eLXeZuyN5P1QJPjnAyL3XW3YiNVi",
  "key2": "2rVKoiW7cAns8JHyUhqMSg7L3sQPrJYvKkYMEA4dyn5y4tfcURP8yjmiRHbh3cW9u7judnDxBxkzuBARG8eJfK5C",
  "key3": "3bAHir5mUrjG6g6bbq6bHSnXX2spqhExVZ9n27NtDEFEmbdwyNKmQBGULqF5sP1weUCqSLp1uEbeF8J7KmsrJ6u1",
  "key4": "xYaSDeLkqYovFnGstH47psrFEJr9WeUVBdowHba4G6PtveqQka829xCKAcgBrVNp8FbCb7xfAAmbytxZCv9htTp",
  "key5": "3xDCfu2rbWey3WTAjiuceBWo3yy4oWU4a6912ZSc1U65h1hLQFe775f9bUgyCznvkSWHPb2qHiWkMQjbRgwB12qm",
  "key6": "3otkD4vf3Yp6A8Fjg4Xztcn8StXZKAc5u8tvWnVNfFAUByVLGSpnQxeW4w4gCVGyqqdwSsMSGxbc2ahaT7kHhmXR",
  "key7": "4dQjhrP9V7qCTnvi3eVp4j9CptcyRZB5LHSXXP9N5SMZhbYHQf7YPJRWCPNumYKB5TqY1GPcLm8dPZB26vivDHGu",
  "key8": "5HuJCVVkxqKD6K4JzG8GNGa9WUBdDpdrkeV2vzUomW7aks4xCWFgSoMcryXpNrgJv8JSa7nj5qNXfG6s4gtdxpBU",
  "key9": "65Aj3TNRdgvbpsaxkgMmaJyecAvRfLTK7H6DtEMiUGifgkGdwWi7hqeNeYoN95PALF26DQE3t8QuMNgdkReQUNYy",
  "key10": "HEpjRDd7Vn1W1vDazKPmS73rfL1HN5Kh89yJhQF6ZwqUeFF6HLRY8i22yGqRXQjtvxqxTXm4LXeB3jYEJE5X5yS",
  "key11": "2BtxbUKq3E2QY5BceG6gTHksxuoWnWLmr4sbkPkneGtPbr1hHcfE9ZnQoeQ5jUfvVYhjm3YqDf87DiKQYk7Txk7d",
  "key12": "5FR1CJ3yV6VbZQeccLikwdEZg7axLB2gnNheYThTGQrBLZfzD5JKGanfNW9rgq9aV35TjCv5pmxnkzvhTnb7Go5y",
  "key13": "3GzGDoxwvhnBZ2YvGFuPHsNZUfd3jwrijLkhF4Lwr2qvbBUo9Y2agwhSHDQZd1TX39xu9y88UfbRqJyYGacCt3JY",
  "key14": "4Zv9LThnvSMDTjD7WGXosGVwjdkjrDPDQ5XZykASwJNjaPnUVJu8oyz5NSfbMwid76hMhB3fNrRqkqaVBmC6iMNM",
  "key15": "37fRc2JwYgUh2oUEFnZSUp6ndVoqoVfrEeg4eKqoGsMabqsQ2toD3qtNocPwVzx7H5nqJNRzGrKcU2PY3M5CnyHH",
  "key16": "4rNULLtgkf4Ge16tDSu3XHToYx1DiboWXTYLZR7L4tcB9ChUviLCrJjwgYqd3BRQhRBvzFLFoc3hAh3MbB4CXPDr",
  "key17": "3UXLmPeqpGb8hJM5GweYsfHYaRXzchqJUA5poLjNP4hYncA3EdM23ycWAXpMFBvUdEcBCa1Nib3yeBp7nwCDfuup",
  "key18": "4iV2b87P8Q6ykA16wwGkrwGdcKHyGAGE247Y9GNUNZd92z3rfRL9Jb9Za2Hbpm2FjzQwypZwAJMTMUwmEspvqNdU",
  "key19": "3TwKRAmMYBGyviQUmZuvYKdyRsMU5fB7rmQrGTxzJ311W7axfAY2EhigSvykDJZ24nTUvUuaHtBt4CKQJhLrKzBY",
  "key20": "55DFcBAtbajSWCb4rnGVBYNj6qvdf8gEhquo993aC5VRVwg4WScm26CNgAhyD3XfCzJ8rnat4fugso1r84PQ3dVi",
  "key21": "3AU2nB2rauSRrZHW2fA5P4xM9KTcrAWbavQXZZGqEkQRiuxZZvnTDEnqsJaX2C2eKf4R5gNCofGG8gxdYhnadndt",
  "key22": "2W2mrQMvfqM7vZN6u89qH7V23XbotCE2tLvahVmXrugw5YvbpEZjz7p6NuKt2eGrTpgfGAwUjSE4sw5k2HnNz4KN",
  "key23": "fdfUcD7o3vNXdUtsXKQWqZVYpiZxxZa1TvVeb3bauvdC1pyKqq8sGeciKeHeHcPYBi8C2fqqttK9cuqRH8Bj9qi",
  "key24": "3FbVDh9bVbGrZBWzcRveJdFWFyqNvFnfnXKH2X4ftJmThna2n9mBx3Y5iF4WLrvfUgkeZFY5Gu6KghYDet2Rk8P8",
  "key25": "3jUHR93WiQxBFuZTMEf12fLDtah2UKkJ7aW2rgySUtfKmtcRwVY6b1jopDMUEyzwcjaawuzBXBdvBUmJ25kJgsye"
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
