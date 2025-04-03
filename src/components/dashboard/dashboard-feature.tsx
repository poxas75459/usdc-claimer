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
    "43Dxwc47483UsBC56PUpeRnY5nYnNdVmajvBEzALC5SaArgq2FCzdoG2hCZ6tDnmw6PaQVqTfepxCyFHdBM2reak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wj1tqnNPu9mcjKfYFexiV53Upyba1E9db2fPgTf6irZBEzkWMd7UnTPiJS9jL6qYGGRwfZJknmhUHtXrF72zrxU",
  "key1": "4jvKDNfNi9L2QaN1qcfkmDrAuDzzYhpaKmWVtAmzoeRmgeLYo97bCB7cX3vWAvV1en6UZ981JoPoc5Kw9x3AGFzq",
  "key2": "3Rf44GDQkDF2UFNAjvLHC9nYJ8rMYaH6WPTjXZqPTJgHzb8SVpfuxmRhpm6WCTj2LqPbAqm3SuNa6AUvJQfKQvo5",
  "key3": "25XB3p85bTgaYxPjiwqG7q9xSeUs3fbacwg5C2ykygxcKMcr1fWdbrWJ4XEtTnDqp4sgNkctnteNzr6ezoC3Khbo",
  "key4": "4vPDirSZ4apr5SvDnAGtWxetFcTEWjt5LT6HQps5iHqghozbcGpdRqFSePDNMRkUS2Zb2nHzsGNPxx5sytdNW9dc",
  "key5": "4S5L7oHsRGsjYnse4fAARs6j6sWFYQ2s6fn4a9MwgxbGKwEDk5Buao1WAku6PnWLmHQ2yL9fQ3HxWaQjRaqepSvk",
  "key6": "PivmG9GKADiLNy3AHuzodbqGQZ9G7VXQVX7ndkSYqAL42SHq7GERtvt3Bhvi4w6oPbYP58uyp4B1SGWsN5A3XBa",
  "key7": "3NFPPjFZEgNVL98wrmPHUkhFFUKH8HZbKZBV7yDMFKc68vBeQ8ckDBKHAtSjxEemzkcMPseMzMxXWDUHFJdr58tt",
  "key8": "2QsyqNqCxHASVZoVk7MTx7HYdGj3YQrVd8ieCBwNXUQKppUJmoJ8j9qekQcQz1DcRB6q5Z85GiaPEodBeRbpPp3g",
  "key9": "2uLpVv4t6GEu7LBB7A2Xvo3MFuPAkVBd2kpScrgQFJaMv9DpzTTyaQbEN1BiKKQv9No8CPs7CWi3bLDC4nnPNdys",
  "key10": "2Fg93NTxe1tmcWFHRHaTrELSXnMu2eNsTuSVWrYuR7tGKxDF3waWMsNrFBQwNdQNX1V1eh9FnzuE6F6Bw8pJ9WaC",
  "key11": "5k91vcoAcVCEifdsb795X7ERxPPF3FL8JWXHaeNBnzN3QNJAKeEtaZzQbXQMzZfwoygWagnjJzzxt6MYR9n5gaZZ",
  "key12": "28xU9UVzPfTUmHGmZ1SLmwyfjHYkxoZnAQKQUxgkNxU3sRwR9Rh124DRyuaf4X3DXUEkzDmsbJAohq4aQbEzKt7d",
  "key13": "x4eSSqJtUaF5acxCjxS9hUVPprpxz7rgcoeYnw913idi4REHL8hLBUmnQ6UkRsDJUkCUGW7pjidkRH73LGxVyrt",
  "key14": "53bd8rKkxFNuLXXsZWFwsSUZn9Q32hAtUcNdJ1X2xQJCFryp8Z28npyX8M6uCbDgi7KxeE9hkN7bEW5v4DLdBay5",
  "key15": "5dFVxvZXs3dZ8w2kqntvXw8cgtcFm7FN4pQdeMFTNETwwkMz8csMQBRkpw5smY8vU3FBj2qfKn361zECbEEbsjMn",
  "key16": "w13MZyXf4T7xxvSwNBVHNXbw6Q8xZ6571ys7ha285Sm6bJvSbKE3C15FMzBvqwUHT5n2rvGTXifyM6yGmWdzEYE",
  "key17": "4S37VunE5MAcJ9UkmG83Nnzxid14EKQ9vYPJimppN2X93NQkPiYZ3rcAEmaEZ3LxyfHaQsGGVRj3mzjwwoTD7mFs",
  "key18": "3RnbPnxxJNERD17TbFBU5TQuxiD9chtppgurKTE6V2qefUBCqdfUxKLWVW7YAC6AdMxoQMRNvnpHU31arXDb8soo",
  "key19": "2Vumcqm3BEWQLuJLdq5w4okMcdFYtRBL5B6ee9jYCM4cMrpxoCPjsCazJtowtChHqDdVubobtJuyadgkAvxbDLvz",
  "key20": "4d12EFPjudQBHuqHWZjT6Re1iG5vKgx8SDD5tbSh93rRdWHgWfKHayoFUsPrLv1FmMHYAudKaZ3PxvdREdd3o2zT",
  "key21": "31CuL3Ho227bY8XHzee5r2myzkTf7t3oknjcefzE9bEeSvCER4JQVkb6KouYQzykMbkQUH6kuAJ2yjpy7zrs9RCo",
  "key22": "3bvCu5JzpJmeDk8E2V9qeaaxBn6Za3awAUQ865rV11B4YDwniSnJacRv46byy7ouc2UV8aikryurxWtmxEb7SmTL",
  "key23": "5n9rYYVHufyKuQLP7erDdQe1jevx6kEGx4iRPzHVjbycSXvP7hAf7c9M1To61LKh5JHSpWU5gMQ5oDbEUnm2dTVu",
  "key24": "xiKDvqrJsqTcvE8rULqhkdHdNzx7UtFiYFPSsxk319oWjLfcm5MBDpU6cKKTC2k54BctkwzyhKeigJYRby3c5GW",
  "key25": "5XR5Nbbg9hRpJJqKQLqXfkwTgkW1mCHhG636jv932ocD6hUXDx24DdH8ixNb4WwL3CnibT6Qufid4eoWf3eDh9Bk",
  "key26": "2a3nFbdak3MYfPUqhf2nAi1Eg3iZ5jtunQZG4rpq62EaUfZdkjph5Ux6p5Z4XJbkuWq3MJfKwwf1HuPoZE1mTVLT",
  "key27": "37xU6r5toZtXNE7j4biWdViV1NTNVhAUCr2jT9dXftSvijhuMLCXtqwVA2FbLbQCw7DNReSCarpQbEbihirMHRBD",
  "key28": "5hQKezVxG9mD6N6MMN2qNbuGnwp8pC9nBSohcX1DJmnuSwviqAPFK1abeTKfrcrJ1t57Trm2YHD8dY8JrubgAhot",
  "key29": "2b8gZGvnmJhfpGW3XmbXo6t86rzpo8vdy2gPCCT34ZNFfBnFY3ZvcnM3S5u2H6fz8Xh6ncm8dssgpL4JHMQLCPa5",
  "key30": "4gZCwEuXi9Mg1QC2UCruYA7uBXdb6bNQnHaNcfXcj2umDhFxQr7poRvBUkc52bVZMUbj6iBMFfsa5dpNFky3L9GB",
  "key31": "4e9jSbfa9xwuEXapnwQwkoNbqSQ9wermSyc97pT3ZMCBGqMfamDqyqreJTLrXCoGSDmJVwi4QsMXfFGB1dPnYAnb",
  "key32": "4mzrDjiK5XD28wVpifqnHYa2QkrGymavsikCHEkNwtpGbGDjnQ7HcrSHaYX1yU5pVAY2E8uy3dTT3qPfCvmgVPBp",
  "key33": "2PDNZQYWkggyvFj6a4E7TVdZ24VsAZ1w2r76sin4kxhyL5VZ11ZRgwvMhYn4oFDwX925ehgEi1qzgrdTE7nBXfcB"
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
