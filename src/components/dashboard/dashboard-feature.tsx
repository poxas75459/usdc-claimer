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
    "39LstwjUCnKMH4YbEo8Rt8zSBccVPqQZUfFwRcvx7pCtweQaKvRPwEfAHdMtkiUHFpcruhd1N65aqY1YQGHNKEBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dE5mmdC7x8htmhwtQnRNtNUy9t6Q6viyT43AnzQhBkjat43KYX2pMT1pA8E9y6qvQvmZj5u5Cab5SddZ2nu347n",
  "key1": "5X8KreteMtqoQYWLrDLEHELMwL3p5aMqYGr3pygjMbQR3AiKVnCTEyN8E9TUp1vMGQFy9nCs5mx61jrQLH38cYNd",
  "key2": "SsndX3H6NPgkpUSfPWj7W3jKrto1JL2aLaRotCvc2ijnfwfD7fHfDKp4R8rfYgiCuMT4L3JaBW9B25bmsh13F6J",
  "key3": "3zTpsXTRhu4t6VuDb8tXKeKLVwTzGdYYcbzr4EL2RH1F2TShjhdDAX9XCFq6iDNt1dPH6JtmTxBry1Ne36jz7Y1R",
  "key4": "4ebH2iU6Pc1k7DYTgbcvB9kNuoC615bwZgzstUSZMSzpMVhbk5SheDydyumyd3DMs6AzQXJfS1RR3oNuVFHSxdsp",
  "key5": "5uRMDpwG93hhmwL1gNnf24LPkxxeLyZYTFsk4nisn5BusirD5xMhDi1ViT8nWwbSBUkeaBqUH9YoipQhKivzQG2e",
  "key6": "4UjeTV5uLEgb9z7ePsGPMHMQekTEDjKmnvtZxAFpZupqZLkdVW9aW1ukCbXxcdVZ2bXdvjXL9defTGj43YqK2MW",
  "key7": "3sNRjPbc33QiCp6PaM9bk7xmpXinEU1CXWQyLfENigqnnzdvVBnAoSRJ9wjzSdunfELuoaqbzmedAHKxHTmuwdHm",
  "key8": "5bmWUUQHq1qk2C4vxDJxccXxqRrueBnav3EC5cRCLChMGFZgUKAduc11cHEs6qvNBp9w28LXBkGhHSi65tsjdbEv",
  "key9": "4PXmGTCXD9ddXoWbZZpjJGBFqQ5zBNi3MESs3nbKaXU8ukCfskbVrKuKHhV3vwTJQHkzXD7dFEg3fe5Mzdkdh7fE",
  "key10": "5RntUcxrg14d9yBA3d3KfWjGuXSNBu8Nycpif78Y9n1tJWcZnQVehKh43mEtkYMb2daGpuJwQpJSYKGRDfeYsFJB",
  "key11": "V2smWu5eHzw13UFJgPaWsMgR1GG6VmZAaxmYqAPjm9g8v87nsRAtKoXdm25NfDg48v52efWoJFHeYYvKQ3b6P4u",
  "key12": "22WbyXX1uKaxaNxiaookPRxgScHLKFZU141omKbGxQpnqVdE21yGkN4TW3gctUvmyAgoucSRf1kMcxxuHQ4VFF4R",
  "key13": "3ibvgCb43UYJMPRdiffGmsQhAgfmYsWK39wmZPwQJNXRfKKEDZtgcv9g5PRPyZ6kDFykazFe31LGiFXpud6uNahN",
  "key14": "4Fexuoe5BkvwXA5bZA8T84urNmsb8C4oYzUibpf4rCDJ6bvK3bxp1EiyBK2Yp6s16tTR8vQyDpYi51dyyJxzpQgS",
  "key15": "5qc6JozkLQNTSepf1myxshyj4z7AfiR8ZzJJtqm3tSYG6fuZZGpqQDxbejUX3CwzHzvqVezN7pimzbgbTTMhCx5Q",
  "key16": "2ojrrPUX1ack3VJY5rfYHeqSBJNZyCWRtX5JqUaSdD1EPjxkPzpYapKKp68NsZJzXWcARkghg4nV7hSZb7degqym",
  "key17": "4qrU3fsccpZNJzgHQ14nLXWvRCfB4FzxKv3xsYWW2A9H9hURQ3X9paCPutrRjnRTo7LbDnaNPPEvFJ2wFwrxcwd4",
  "key18": "5aKvikcL6sxFZNRDbwiAAyT6AFcERByeXuEdNiiwZqcW4mhLnnusNee6TUuy4q7pPBLw2AdmQBmoMqdCYNiiLWvE",
  "key19": "5MYvqJvfnyvsktmdLg4RMJ1kHgDU7ZtEZfQZ8drffHAw3o9dLwJD6bJYeKehE9VsHfVeJFhKreBQXUw9BF3sRzgY",
  "key20": "4ZHaZy6MaAjySgE9Mt5awmkP9iP1vWbnDyhVLje22FPkFmjaNqVNC2i5k2UrhwSBS8ApR4vrf3rntRSzQFMNLE5E",
  "key21": "5dRnGpzT2kr5txGaZMhyuNXrysExG1n565k7t87RP3WAoHzjq56kogtEgUr4qbpMCggy8GdG9BDqy4M6DSkiBrpW",
  "key22": "4weHF6DHhnXmocS9HJ5UDBAT7LJbdJidCXdMf9ysEjq3NfBQAdZybvjKL6BWgaGdKDLyj5HrZiHKtvU2UMKm9mhB",
  "key23": "2qC4SNdr3fwDWWQuNgJTo7AwSypjoKzNDxNm9JCxXCvLiuvMmHBU5onMWNsxCzPe3q7sDKfdosAvmRjsK6VBswAs",
  "key24": "3AAXYLohjfpqWEo8aBUkZmXUhTXvGfam3phqEjgTN7xuudqqzvxAh5BRxHjGy4AfttHw3n1BQBRe14ZAp1q6aFPM",
  "key25": "3S2tRVUqzZbstUkro2yGiy6doYm4kxh6dJeiLWgrrvL9TBydkuybY3BjUwvFofYvdqCzfsQvpAYvGXvLgzZgGNs7",
  "key26": "54s7fBhqCzuVsL8M8mkZdtAMfw6VUN6SPQ5a4uuSkfSkpmypgB3inDhAGczFZ4b4eT8bEMbRuStzeWAV2WAoj4SS",
  "key27": "25zJWpdSQuyGxwoePu7vqHe9S8nY9aYM6768v3QBSsxaJG5y2dpH5kNW3HR1couHhFTrVAkw2cJ2g3bHMVHiMK8v",
  "key28": "24wGnyjc7deFUm1TpKEaRuGzLoX3oVPfEWDCBucMAHcCez8GEQvqZJZbdJZwHSh4t675wvssHvYfizdsxYie6Dsm",
  "key29": "67nCCYSHaZgHm6skoGQi8yNfGvggjaatCsESEUP189qrEMStgTGrHXB5fwpfoyv1WnPw7kKb2Skwi4jK5TGmCiyo",
  "key30": "445qxf27vfvGRAfJnDJastCGYD6vKEA1eVWAnip9RhPNw3nLQVqi9eDUtKSQuG4qCsbbBJY1KQcxbC1M3SmR4SVy",
  "key31": "3P6WaRKqMqqfzLjiVN6aVD9caBX2nZGzzJ43Dyngw5yHvNVjPhk9jPuXF25TqbxCQhR347kdySWbuABsbQoKCM1s",
  "key32": "5xCXbdJz3VDhQFbchvRGnxJkzSyLgGqFaRBtQqmF65Ck3ApBqkwkFDaEu7ZoSrkiCHzbEEGSiEsG8EovCRr1U2Hh",
  "key33": "dTwpM2oAYxKFyPwfCW66VNH2rHtMMeS2yb1ALduWFRSjNE72V245wmzMVtqiqGPJd1Rc6XRxNnVT3wVDhvikjLj",
  "key34": "4aBkTHokiaKg9fkhDe4JKiCgu1FmfVPFQX2SS2FPH2PMsP8UXc4B4c83g7emdD4zNgS9yM2wbNPxsrTuGuFLu7f8",
  "key35": "2MvwEgRUsHGVMD998tJ7xi6eHWskTse8H7rDaqyz5dPbfVRRjWesWbbXEcWYUJwM7JwbdbqBrhY1qAGhwC4yCAVz",
  "key36": "3ZSwnLy36hA7AyTJs39SYutxgujt4ihV5aMXrQkXS3Lhj9KuHFCpfuuitf92RzcpsDA3ZafTeokNCMEXJDK13nEr",
  "key37": "3rRcadmVeh94E6wQCaLbX9HimUiRRRHE3iUq42veA3yLJtFz9YNoSkY92KAAH8wQSFP7S3oBMidKyLwg6YS4zF6s",
  "key38": "63MJBZY3BovUsGhWGQdydLBsT2cn7GiqHiYAaRKBPECTZk9kTi7beB7pQPdZLw6scun1NNQeKe1SysUKMqfafSdQ",
  "key39": "2AKVyb4V4cFrb5A9txGZu3uHPNfckVqVKLACgFWursMmgHdYptVwTUsRvVzZ7GYnkedAYSnb9auTmVETB8UU1ZV2",
  "key40": "4qS5ZKrCfXVb1x5XzRWNsXvAoC7WqDeB8za7geRm7JLCHxwUKEgg8kpEYF7yGg3RqzstiQCYUGFx6RpWA8ZfomPA",
  "key41": "4MPueG7iV3czMpgikNQnDnJzDnb44KDsd3aaTDBq9CbxFbJmD4SpYZHYz9EUuZFd2VV9QjKuNpuBLWkQEnU2RwfU"
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
