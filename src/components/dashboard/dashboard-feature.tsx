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
    "55uzy7haASZFz2Tdk6sfBk1PbHU9Nv6ueGMCQPcMeAjgZADfJHM9K61MrHojxBgn3mM7QExKy338e6wiMG6uQPZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ck5DUZJsmjnfoWTQ9pyzY9LtKB3uHH3nq6mXQyJGUpfM2WaJAmrP9tQfU5s5LriaQYqRaP5ju9GdJnoyJTKV4Ty",
  "key1": "4qUyy96w2SffzXE2sbjXWR7cLqvxLy8u9qW6fPgmZCrqA2RNCnJCanndifrbC28yK36V2SRjfK8dGqkhS9nSCNcq",
  "key2": "4RQtRJNcw63VFbLugPEUscM9cBYgiTSKoefocsPtAUsSmJ5rSxqdhCB1dUVSgYnendtuukhKYLdKyHRxTk6HNcyB",
  "key3": "JNwNuZ9LxBVT6heGMW2zQ3kB5rcNED1TfbsXsQheDzLuwvFf862EsZU7hLFrLaK56F3sJXrjuRFskpoHajTdB7y",
  "key4": "CKKrsgpNgF6zDX3HCa7AjRnZRKeWquUKzjAHCzzNhLpFN2gRUDtuqJRmayM6zNq46D5AjBvmkJPQ9wTGtgiedVg",
  "key5": "2hD1dtfKemKb4GPYhHmChFs7Cp8RnMVVHDq9xtDjEEXibVqXqxV5CfjKMVuVxtWJ4xfYgUCvhajVj2LAF3XLDe4t",
  "key6": "4kQe31EWT29njB1SPoqyimnDDmeKJuzDPY5FTnGhYz9WoLYS5nvBsgoAMfGCjU9mbvJ18na8TZAF6K45zBJuwA3d",
  "key7": "2cwwTP1VwvtUddK8PNtEgB9caNK8iJwbNP1qpWhmBPvRL8oZyMgU9445F1J7rvXMxg8yHsKkEGUYnPtrcE8efUyh",
  "key8": "41BmEbu8ogFqK1bCaHHUs4BDVxcsw4oHBgaAKHVhUjVL4nW7dfSAP7ia2ryNVnpcERxsSRy2xs6mUfzkGdNwnBYK",
  "key9": "3jNi3rBoN7WkvxQdkipS9xhoKjRnEGLrWqRWDLTcBM9Q5jLhVH7xyL71inXBkR7ExUqjv3JQD82eurbMEyNbvU3j",
  "key10": "55dCXkpsw5TrqFios7XpGaaRL14pkWFXZq539QsuzwXYjCbFR31YSiiEHiXVkyUF4gfwiw3gwVqpfzW4FCNXyQtC",
  "key11": "5juV3AZQsdz3eb8Dhn2phi1cg882fVLAuCKoAkjUJz43thbRQMjicr6vRXxrTbqPFqiG1oKy2ox7fdmEBdNZdSsk",
  "key12": "3vEda8Lopy6Tdv2V3etVY6mtGDVcNPPkmVx9S4SQeuuyAfXJAMUhBNpV62ZcjMNCwrRcbZShgVxzjV78VMFzD89W",
  "key13": "5E9cidUSz6Uft5NmAG2K7x72ZvDD1FmxZD3i2fKZzFB5zCqc9qXbZm3diPnzh7joJSUWcz5a5iJwgA5LmVDUgLWX",
  "key14": "5bNR85RL8x4JVJZvn4VWxA6WdfH1bsz1giRWphuiurHRtqrZwuv7Ya5U67Hwy3r7kwwR3m3TDBFCv3E47Tu7FbKx",
  "key15": "631Utrpf9DrS1XwPpD8or64BjeHgaZ8UMHEhF9aFocGGHMy2RTNUoCcuBQwWnXYYZjHy83s6XEWWksbqgMry2EuR",
  "key16": "2CGtr3fJeNLNDBPU3ik8SCqbyaZJ2FZ2SWifpLifhc1azY4D6sZsPXqvpqspFo6H1YPnyeiT2jCtNFyHk8AyFEi5",
  "key17": "5BU2nURyTPhgHj821JosTZXSFohAZNqka7Wws5LhsQdGKkFXWadCjQXC2gWUhouWjZ2KVJWgXRNtsZRExAHW5REC",
  "key18": "4BiJJurYzkQsAFVPzr8ZGcUx3dogfG8CyREeQoUQzyPUqvw43wsyTv4gQdafQzExfsAj99M7D4hxSuxbpCHFfop8",
  "key19": "4SAdJjkfLw9jgseyHJhVhcxesptjRZTY3RYuWZ9ecHCvbMCEeyNgfEw2cjuasbegFJY9VZD4QEQSHjeCS3kCd8t3",
  "key20": "55mbj64gBnufJ5pxiQvqa9QWUQTPpqDAomFXQcHU3ayUFoDDzEs28B3EEhyhgkVFtercuy8cCdqkwofbDmLHtWY9",
  "key21": "5pJsLgJUsKqPQkQaa28DXDkmp6xdUXx8xFLmibtQtjVtNU3hJYbKFCLoBMGD8icbUr5W84YUf64bfdvv4AdwNidL",
  "key22": "4Pjxcbeecfo7hMv3pT1hEeVqNDxi4EZjuVY7P33SaAjjWodoGgVfVAR6VS8ih3cuy94y7dikqFFCraqvX8gpB12C",
  "key23": "5dZMYDTgXhu2mMRNmW3zdeuCG4Be8dEygxfch6y8vfLL3XyP3Kq1ssZ6jHtnURB4NNRQRZHMfBJeLrW6WZyLAAvk",
  "key24": "54H1bka9UNcZJ8LgVGNR7KDL4DHTNmumgepabePWvqsfwUS8LsDcxQzxE11fGWXnE3vF2J6bjLcyyfD5qYFZvYfy",
  "key25": "3jCrU7b7gpnJLDJLnHudPEydzTNUpkuh9sNnzNwBwSTvftBkpSBSahG51xNom5YeF6Gaf9MuQSnq1gwjSiSuqXbT",
  "key26": "4qmZywgEt7YjRPxBcAypBrJVzUjUmgFEADKBrMNzpWvKA8FDStCLeCpVz8QDGpyFy9jcud4QVbHtTfJZZMZDXbNA",
  "key27": "AVQYbyYjnNkE1jkB62JhnRigJcXZez4RdpwRMk5gnoAZeSvo6FmPtSjfywkTGGhdT4SuFcESsNLgqKZb7kmqBDQ",
  "key28": "25SRYmFfYJJDcxAw9p1dibof5yiDcFXbbkgbZ8sgrLu9q6vBY5A5F6h3wrGgG1sNuciKb6moUp78LzeFrvha2Rr4",
  "key29": "5SqxCpXvsRLfqLvTQM3gTdCdAJHB2ZgvEgGk2hy1FSQPTGrbcbu3f8eNhfKi3H7tCCRGwA9pUtt9d4hyFutf6fta",
  "key30": "2QWQXhvmSARPAVJU7MesePfuS8DL7bVHMivAaByniF68FfAxJ9iCiAVaxkTJKjYwojyfnh71P98V5DMRRSJjFzMW",
  "key31": "8yGZ8MsqejFfxQY7eioWgwKxTr6VSuRb8ABHQcpnyDpbAvdxeGcs18acnaFWTy4BsfJx8b4ac6CK3iPQda3C5n5",
  "key32": "62a4PD1TXyKgPmrx1uuAX3tr4JLVsaA8b4FTV6GYUtmv7jKRXVs5FQw4CRAP8Fg7WyJvyLeu5b9y8mGzNKmKobPV",
  "key33": "4yzKGyz1CHd19QS5TrEfTXWxpcgwgPeNGwVMQqPzTTbUBKohECGesbMEoxcFoiPMUPg2euLh4ZQfi8cmAkkgFvUV"
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
