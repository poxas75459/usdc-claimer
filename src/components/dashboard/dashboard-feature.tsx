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
    "5vS4cQThgNBnjGstkAB1vjWBTdFjzUykezGRq1c6maUsasBK47ubMMvABXwj3nzvj33yGqYeSudH9j2nPH1JVoDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Arc2nhbG8xhXvb6H9k1ticcxth2WktK2HwuJnQpR1CfQWagXBeLuetmk1AXefitht9kiNDdNcCXGd8hDvzDmBb3",
  "key1": "4rANn9JLLu1xV7RzRNAZ4t8iELVVFoUKejoZjzh41CtDZa6ojJ7RD2NGiQ4B2owFKtQxPzsjyUWa2UaQu9LhPmns",
  "key2": "3i1n5ULmH9LWuNGgH4Po8EquAnA3XcV8eSixMpqcV1BVmxR6WfEDMrQG5QwCfosbBFSjo64cRk5h8z12iUdNXYe8",
  "key3": "Xuo5BBrF3gpDy27ZVWMwUDMtzHC7bAdcR4XipkUk3QfzHcyLBa6uyNs7GKmMgZUr5gvLw4Kuh3kaihyUUJd77j6",
  "key4": "4KM1E2DG2qtsEhuqC7mWSLpAoKshtneXA1BqFR98VT4Z6D4q7N9WgnCMxQ6ixZGh3gXBU2FodXZ1KWkjhSgXhkht",
  "key5": "2TWUt2Nb9ZmbSPD8YpqNf5Ry78voKYaAGYtuoQQ7i2khuRWvgGio8zL3tYKvgE64XaDqc5XDGkGriAGcGLJcjUiK",
  "key6": "9ThB4AMN3UbNjRDfk4Qoic6PVX6MpZgDJcDPWUURRWKAC3BVJr4q32qmpMLMWrbGsPwhm48mkLXiZHLuQU9mXoy",
  "key7": "5pu6ZS78Jv1V1snMzbm2rYT1GtA8XqvowSHUamANGYhNB4RDJvWLrYAt9ToyHuNb332mt3KXT8gMVaMcNY9dKbG9",
  "key8": "21gpkWgHGSFovqJy2ZhVdkPeb2empfRXa67AvQvcPgUeAKSkvtTuo1Ttym1AhLUbzvuRSx6EcTgTMHVjycUW9y6S",
  "key9": "4QoFVPMjktSFMPwyNJvJdJ9TZNX2e5HpRKANiTs4ChuVP3KKpC6HtHCB4rtjP2bXgoFF74ayfVHPhsE4MJRJQX2P",
  "key10": "bphFnZmWdmrYiMCNmrYe8KxCFkTHHKXhBMW48ML8qyXiBLueMbeEWfk9L5nL6H4yQmEtrXyGZb3ZVzj14rmLnRQ",
  "key11": "3iLLdpLHhTD51YkxtQPrxKUR8owHH4zp2mcxs9LtS3MC4yARb3yZ2vuUuFHLWzatSx37EYiW2WLjbBvBHkmp7gfq",
  "key12": "uvXvijkfmwUUhzEktW4rRXsSkfB4svaZaQq5Z9nbHMrgrQFi2uUsaCCbXbtGBNW6e5PDJU7uF6btjrTDzxsg5ZY",
  "key13": "4PKAQ4mddnJngyrE4SiNwQevkbZvhbYJXiB3WKkViSpjZMjvDkDTsrmXquVToD4xJKM5t1QeeP3TWW9MhYFtdyvU",
  "key14": "4o7G2tiDsoyg3RkfNaUJLsjFSA6KP9oyV3tpvipQaTHDpq5JUMnCtZSon6pFPRDpDV7jnfGAVnGk58T9yseccQQt",
  "key15": "2KNwLbsNNBP4qckCebhGmnLdqA17HXCQv4mSzVvW8bNGN5iaaXxuGWyRRx2i9XCLJBexuVfTEVdvkJPzK6GNtWXi",
  "key16": "5bDNxHmLyLTFF9yNBKgrC1HVLq2oZbH2AnueE4MvU4K3gM2esdX3WYNKV5FXRqXF8K4s2j1wwi9iJhKHY6eobdCM",
  "key17": "4mgguJhuKMgsgiTmayKfP7ZzRxfdnH6YedR9nbx3RBhopsbrikXm82oeLDqsPaDrAHQ3dgV8WfRvU8VPq4AaNJiF",
  "key18": "3teJxvSajYky8q4CWQxZY2hQQnN1MmZjJQxv2AdUJgVHjUT8gYvQNSNMEwTtVJMjipJPR6TG4bJ3xcNtYmomdrnE",
  "key19": "3K5wDrSQvGAec9wDNMAUaBVMu65uk54azSsdm56E5DuSuFMk4sbt5AUrxZiaMByVzTFYSFjZ2SmSByLMGz4s1aFd",
  "key20": "38W63nBNmKJynvEnuBTZRfTy8AuNcjLZsnzkMvzsj2inZYgNsA2yFcWVMYAKALtk3HkJFZjDXLHESxevvk6GS2S2",
  "key21": "4idGXhhZXoagbqUtEhRndzX4Y1oiBmXH379qKWBNfpo1xvGcL5A75P1UDn5w4VKUsBLM7ExpN8HDnMPgCrBbXEq8",
  "key22": "ffbSK3nVzpq4XApEdG6bqmST5WFsM1dste67X6deBMA94VJuNHNQJdoTLDtXcPZDCq36sTfgjfLu4x6kKPWKa59",
  "key23": "3ZtCa9r6tGSM5cPDkt93Tqcy7zr9EuswgGLMYPnUGY9j3DFWsKxGsqYeqLxdEjjFkF7VEHv2P6sqXrKhyYamSsGg",
  "key24": "5txVY2eRV2HmkLdDLkJX6yy9mEYEXchGAV8Ug5jfPh3apvT9tC9csktAWDupgT61DLFPcNzTFM8Fii8Wp3EfYMR",
  "key25": "sryeToSJ2YF4x6i6FHMMMkf4naLgwkJcke8sTATJHGDexmyCx5sMGNderECkyeENjtkgfmmNbgWJMd22SVQdS2Z",
  "key26": "AtZaLL5CToTwZ5CQJF3mLBmnK2GAtPEL3ZymdvbpZvy2xac7YqurJaU9AhARGa3i3NkWbs4vySge5EZtprnFGeV",
  "key27": "6od5zXKW5mbgD9rW5DacuCU3MRBhKBPyfRrYhSzkcrchx5LpH69AvUBWSsA73pZmDtM1LpES6wpik6x41kfRKQG",
  "key28": "3eKxYmKyP5Vb9ErMJxo9SM8ByNzEaGx4w2DSJwX9VMpe3n3Bqysq2FzjpkkNhmPJmSmGuoQ2b7CG5D63Acy1zUU5",
  "key29": "5ez9gDSoCgiCejx4J3ZifnzcpR5Yia6F3J3te58ZNkCxZpq6brrh9NfyjfdvpSk75KH1qo5H4c6DZWcZJ1U48vz7",
  "key30": "5jxWbs7rk3RN3PM1fipmckfAZuTjRCFjTm4Spj4yrEuDuwPQTj9UxXxCmRaPHUujP4DXMu1qRrLRcbjqophUbvy2",
  "key31": "2JCdXdD8yy9jhqy7CVrpZZ7RHoruV8s24ppRxX62G7XBgka2947DGpLk51rT9pzMxxwJfs7u9WbstuavRhrTn8JG",
  "key32": "2yX3ng6wAPpCMRpcuP9uYWzZGCKzb7TqpaR6WytC3CZxSd8mtNtkbw5TwMFZ8bSLNogzZpUrpbxAuwBuR8qBdVER",
  "key33": "5Q4h5VqpAh7Pd6LfJJsfS48HM65h7d7Fx7TcaVry3Mre7AvDv9s57UznSc9PuAbawGUjfJp3nsY5JFAxkzbdNb9s"
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
