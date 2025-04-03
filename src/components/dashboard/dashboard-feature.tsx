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
    "2VyBg1MS9vmXCn5sjqKABTPbEyBvDatqfHgtLEt9em8NBE57LfYPsJEq9VurH13QZEGytrmabs8rTHp4AU8t3JGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nRXyKQ9aPLpELvKzR9KJz374zw9SmY9sZvRqJ5Y7kfvynGV6rA7pEP1kT4AhEBqfRZew2E1BhTEUx7N9WrNwqY3",
  "key1": "2NhcoqnE5Z9wa5gusZ11bXvxPWr8ScUD3zEMqYs5htFQVtzF7A6syHogoVso821Jdf4e5VKpEjkgNPDthenLNRVX",
  "key2": "2s2AvxZ4HhWDQhJVHp6NtXqjsZ7LL5fvjpmCNtwq3GKmhZCsbxUfcSWCZ21Xd1q2sZew7aXJfQCoCSqHZkZ3kswv",
  "key3": "2GmTrwUZ8xNQi6efSD2svgpRt1rCbBMDWGA1o7iXS7oK71re8xbW4h8bMQq27PqWzkBmwqtbaiAffwdx5M121Yg8",
  "key4": "HsJbT7JNSPTLTZCFZbMBn7S1RStgZ8SjMAGuSaoR3QThLZ39CxkbygRYXEmbyxw9VNj3XiENfGKRznwLDzYzGFn",
  "key5": "rAixZUJdVGs4HhRLRD1mo1n3b4KhBQUmpmQNsJtP2wofXf8fHbMJRxvK4djQAXPqMAEMf9dq5dDg55ccEgq5wrk",
  "key6": "35ti3r1t6GEFnLQPJAu9yEiPifB5B5Ce5Q2CU43P8VNMNrqrEw51cYUGGcuPQTwg1kALCJkeqH9D6uRririahoK1",
  "key7": "Pz2VHxJNGMGyHs6YoqDgF8QyhrwHW1LXWTuiSZuPxWEWAnRYkWW2An94qPwbQis554kkUZMnmTWi8U2G8XSYfX6",
  "key8": "3MbkBB7vsfxdFAvK9WWfE5RASECJqwswXz2r84cRH2rRbgZgDoyMHXedtNTFVMEiLkaEW7vjdUegBQ9dkwdswPV",
  "key9": "641qBqWEnBcXqja3oAE7ALFLS6TyVFFh5Nug7UUeyc32E5qWuyUgspqmBmTqnQXiFNdnD5sJW4UbgX9ZVe5CNtho",
  "key10": "2vh6Xz8jhsNATXNVxXn6kHVxsrb4KV3G7mCaaUZDpqESnamTpF2hWPd4QDzpzP9gsstH2YHqkUxu2pnLHY8PRMiW",
  "key11": "5ESvbdkA7GfYumAENLVcBQTykxZppfVuaJJK2NPmyqqgqP2bJP2Uq7ZeU18PAhVRDPZn5WYC96kQqNZCwGZWTJnQ",
  "key12": "ZosS9akeVd8sRcRt7hzUoqdXEiEpL6QJhaj49MSYkHwi1FNEnPLjdtfgpLwMkjtzHGQH4m18ndD7KKcthxVDQrq",
  "key13": "5Wfm3hBMNRB7kwhmJZmTJTpcUpNV1KTfVaq2zXKhYxs99DKhCUqJLEW8QtFRA2qiLc41V1sDseWjRDYPaz4ccpMz",
  "key14": "5YuRCLuxkduDKEf9Bz2vmbVkaUbcnp1Wa6iUA8QXAqSiiq8HjHiVBDE6jmhibYVQBq8W45tNaUAbHiE6G9HntEGx",
  "key15": "ftQV4iQDGMHTHUXYybWPCYao39cMVxttDrU6aUgFshpdjJn7m13YiSVCqnYiUxYZa36MaPPk4mXHv7woFy56ZjU",
  "key16": "5AoNJ9d1aP5dUTLGkABEp5vrxUHu9Bd436jrajh44aVvnsCCjduRJ7fnC1azY9Q97Tv4FJUd4qQfyb2o9fg37rhS",
  "key17": "2RJJ8ftUkgW99xLA5k9S2cL6h8G84pNVDVT872NfnKePLpbA42HckQYYiSEXZSpEAKV6Dvj1sQ6XphfjjQWztApR",
  "key18": "24K49on4vXZvYeumJezL4k5gj8wSuBCewVUhxbNcEgB5jHozUNLjm9TrDx4PPx6VugGMjiXNrBMWWXXakLDRogr9",
  "key19": "5uB1fPQD9ETrRE9cpomkcUXWLt9aERHHiAzKxgP78QPqNnhwv9Y8z3t412UW5vTxhGPp5V124wikidxfNzs1Cg2W",
  "key20": "3KCq5JfmfJrwbQe2G1ijZLUyNJgWxkSxH1aHonDcHgQGF7NGpKzVLdezJMCMxpnYPtnC99dyfmdY1i68wuUj7wGB",
  "key21": "2XV7YH29jtHauJojmm91PBk43xAwZswehM4ddyTW6PWoGbKxpQ3pQw2Zib6qtz7f18vJdgjhD6nwGaEL46QuRqwA",
  "key22": "2FhEuxdeoArdBhfWRejeuyQyZnnPcRQudmVr9ukHH1vT1bMX1djUSPzEjwv2jN4VuxLTVYCKTt5eLC8WecRPjZAb",
  "key23": "5MBVJCdNp9c55cEsoxFTsE7amNxhTfAjWuy7t7FEVKsJyhn3VVg7h5fGZGei858xaDSq2ZDA5gkzzgFWyqjXkusf",
  "key24": "4D1tgthL2EaJ8e5iL4CUXYyhVMqdBvREi5hvMmen6tM1tp2svfJaMZayMEAdUpyzxyCz7reYPeM6z5WhxfERMDim",
  "key25": "2bCnwrEYf6WBx59AHeNdDFaNdxQ2KEjZ9eismrnWWMurcLTLLzpsFWkWW6UBoE44BDwJHk9oWerwfetGq74LRGJu",
  "key26": "4GBAvt1xt2B7hhYAogcZJqjVH3nAxbqUvrLbUTaDEvDAFW73ZQ1yv8dodeiXb2oGrYUbitRUZWf9C2NReuZz62D",
  "key27": "5C7EQexTCmUxz9YNr8LvAmChaazEccrsSAUkPSrHHkvHgGyCFjk5xXULduMVTh3rGa2mfc2knUe2Sw7pp5HTJvH2",
  "key28": "8MzySpFZ1Edb7VejhvYZbpHU4eYFSTEPJ91d2WJ5sDJi8RHsjgpaUDWFwTHshKrXVoqvP8jL88xP9VagDrHki1C",
  "key29": "2WUbhaKZLJvHkh2h1rs4XzGH1GK7LhKESsWAYmdshakYBq1sdrgJyVSRbfcyPA56NkcNPuXFCGj596orke7wRNBa",
  "key30": "5Lm3wTnXNpV17qNy1NGb7bPYejSDmxvTYgjYyB8JNX4PeRzYKZnnABR5im9pEC7GGNwZbwfunjfRVzDuRu3AFD5F",
  "key31": "23m61a8fYAUeZ3UJ2AnmM2fc5mpKi4JrQvHDYbVFV7tpeTbQSTvf2hCMQqyy8QFbLubr3ZUJ3V7NhFFXGVDgPQQZ",
  "key32": "4MXENTkw8jrDcmzNC5SfFncaVavaKmZVmJuXcnJoSiHYQixncWptJ8VH64vWGTkA6F1ypJyh9qtSPeFMTocuVDiM",
  "key33": "5Fc4HP6vWHBCuqrVCddmetRuHV82x49a5vGRDqKktxGB6jVyHh2hm1hTBFdzCKhwqaVyiiuX5Y5YZktadUwLGNPy",
  "key34": "nCQc7CGNQ6pg4NyPKtTYZFizdzz8mX9VZ6fK9UepbnYdn3toeo4PprWdn2CvV2Hs2d2kHC1cuiti3nS1ZhZ7g63",
  "key35": "2QQD2CAds72erUKSsTDbibNgErbeV6Y4wAdKidzwh478eGNYESgNSN8QnJ5nGYemmpugcgaFQyibsNrbMoBF3mUk",
  "key36": "eNxRYEzrcjXAeSx4YfKTVB3ANxjg1YBhqYUBgw5f4pHsPaHzYvADDkUAUss6pQvvFgVmFiTmZsCJY8bvrmJEsvw",
  "key37": "3gqxm3888TMUdER1vQz3WV9BihKy1zF1jciCoi2qbbLxBTPjdLQkPUFCa3hAzRGT81Z9raWKdVaca5ZQsD5ef8c1"
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
