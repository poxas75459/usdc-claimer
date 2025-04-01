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
    "4AxgbrFoaVGLS7km4ydH1hVGFc3mctQq4d3Fqh9CRQQoBZCvexZuAAyYcaSmPSeLR1FmrYRqJqZPbtTuajn9qh3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LbuAZQLtbYMw21zzX3QsunKgdqDDqdsC2D81iNQKAV4FufzZiYqhAQBQguk1CfNdW5fdoimn2Xw72BJuXe26drq",
  "key1": "61o8ZwtzD1SkZ3MvPWDxvLWu2rNL64SStYquFd1AbspSYFYBZSGQbGmZLuxgFhuHCvQJGykaj2eTcKMNo4Ej2npD",
  "key2": "3K5YPAQASWoSGwnSxGF6UfX3p5NKT5Dk9i22UXFK8LvYWjiTXD4AGT11BeRFfm1W5HDfq1DPF88FfRU9UZ3kiRwN",
  "key3": "28jsXqbnZfST6VTawjtBxWvqA9r3KCHoux8PgvAiBzJj61wgJ7CifLGNmrKNpGD5MdnSoShXwRnGkcVXXGMtSzrE",
  "key4": "4KfCsR3KUN4dLBMaobC8Fj6ToX1n3bzkSf6SuZF3KRJmvfnzHmhvWXbC3nqBdDiE52GgogEfHpTwf2o9kVPQ3X9R",
  "key5": "5xijw1SZvAXSDXs6xdjtG4LBx6WXN9iVcVFETVv4gGiFT2P4tV67J3GNJ9YY7pbEGdmowqtUtYEe7vCLn9xVs7RF",
  "key6": "3NaQzQsViPqEGy9Ky1L5cVdkM3vXn9Cva3GaX2AMTk4FZ7Z6E1YPCkvwtbQAh5md99ewXQG64mkpnoenAZCkvR5P",
  "key7": "477X4sEDDcpb5DLABfnDC6zqHUL8TRvGQDNWXhsNMYb6xcmJo1vDrNQ6BWo788Bdi9ew3VV3VbiLqbriis6k6K6Z",
  "key8": "pUZSDiaJMWTgJpvGH1xebpxg6yR5whUx43LT8W7QdufHsmybKdTbu6f8SwBGiBesu9bcyWRhKUjug3Zq8aFcVAV",
  "key9": "2r2KPxjdoC2BC2ub9AzpYGfJDpXsEJFZDtFB3C2nEqjn5EpLZHCaCouvAD9v7982BGJMWr9nVkT5Jc8Qt7ad6GAM",
  "key10": "5hicroWrJsKuepKRvK11SPppUhn42YNLPPf3H15GU6FgcGcd2WVLLi4AMQCZXB83MLco2GiefcppifwmrHcVsDwB",
  "key11": "362vAyxzLh5dKn2bJW6VbCoPjFyWY1osYHkZ4jQBheswJofFF19dbgeoE1kzbnhKtRiUaMeoG2BAXcNFD9Wx1Veh",
  "key12": "3PgbZty851VZUwGirNyn1YF6d1Q7bw5xDpEp3eFcTphh8nCGuXA372VAJjBxPXujfPn3v7rTowupFNVhj8WNv3PA",
  "key13": "2KSmnyzWZ1fR2BohncmaiLqBnhHYjvYENCngUC7uHnVjoDBRqpytwHSXz5HvhAhGrUnWnxgiiwqZW6wNcv9Mg2MU",
  "key14": "2dCpN8xJzCkcDVLrCHaRayTraB2Bbjuzo6TkqBXuU2pJXz9iYz63ZM1VQDsFVUNp5VvaKkQzAeQSQRsB4ingjwaj",
  "key15": "5juhM6rcE4MbSMqqhUMTGHUGZygwUNd7iq9jxcp5xZfzdN1u2ihYFX2txZDvZyTMEGeJCxhXtXk3vppdj23VZYJQ",
  "key16": "3eWHwXE4NfKSPu6NmbkxwCyUHeK7isgcNeb9U79LXTmaydvnXmuCxya5PE2sY6kXJi9gQ11KRz7Ys5XrE5jCpmac",
  "key17": "2WPeH7HB1uYgzYZaeMPz4NgbLmY7YryapWf2dm6NnvzgpXokW8Qy12WTNp1XE5TLJ86bzHj1EnCWYd1v8s2KqXBz",
  "key18": "3AEb7wRS465zKZjyYYw5h1nstHUSkAMSLpyP3FV2sYZ3nMNiCz6FxyHYc2jjAdrnAiVcrR86vPzK16SMznvdfqNF",
  "key19": "XdGeqNekCBEPrBxijvGx77kqXYBAMz1k3V8WxC8JYuxqFjHpbWVjqY6o6BBMdFG1mmiEwJtZN5twMqwDqwUPk8u",
  "key20": "hVA17VRz9eoirpbE6d2UH7dJQXt2TRqg5dM9BKLr2KaErkYDQHVi4tYiaxZeacBEAComiHaMV22Y2pDyyVHM2jA",
  "key21": "2PTxEYXg9bSCxYbGrnWiuYYMWWtaqAARhr4w4uTrm5bu32teQ1MTnzTJbhkMt2NgZBDqV3ZzDFvepZ82B2B2JSh3",
  "key22": "MWVJKzxL51BKWq8vVsEKh7dVRHHuChjHxi1BccsLbiVSEZ9h1x3PCxSncZ4XBZiihoQHReMGbktBetx6NZ7kzBB",
  "key23": "2xYeMoT6vauBjW2mofxkEY5VDULbCpHdtbcSMdw8VYjcDf4cjy5VNcb7vz2z55c7yo4JgM1u8S1d9MZoLWghrUwE",
  "key24": "vGnjqJend372FKVAG2ytXxEVevy3bLoqK63cBKLgrQCQGzU5vawFJbfAQhKjvTufn2YQus8S18zT4mqbMT1FYsc",
  "key25": "7E5xYew3QUxLHzLRjsH9JVX85oGAwwokguyRDDXRksUX8DLmbar283616Fwjvdg1hWMG2b84HQGjqFVWhQpq7nX",
  "key26": "54Nw6wVjS1WEuvXANfM6H3LD7LyqcLvW7Vuzd9rMxqzDe59M2DuCqe5F3sqhbsKrMsK6M7EVrY8mx9tJxV62SV9X",
  "key27": "44k53REV9dU8eTZgm8ueVoHiigewjwVpN426BuPQPxm81rfSd5SqAbJPatZ5woREb9YeXrrYTzT3Qgb4QaeGjWju"
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
