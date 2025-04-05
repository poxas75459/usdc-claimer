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
    "5DnWFTeQMdtdkAy3gCf9J9fjBxzJQdMt4NhpFWW1gmAFPxG2PN1mQogTDN8LwT8gCpuQWES5AUNdw5qc89W7dnAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VB8mvXR5jjAukEHzSvQtVYZNrLPm2BrvkEzCDxVhhq2mTKbAdFLvDQnJCk3DdGzH9ktQU26cMKYbE5E8tGSckYD",
  "key1": "5cWW9GeBfsFQ13fVAhMbPt9EEpdSzhBSCjCXQJ5UdtUhrKPCVhCxe5RQsBfrpwDyzS9h5sT9ou5AeTMLy92Byk4W",
  "key2": "3wfaixjgGk3V7pUf4kagLY72BsvYjG9RHWAHKYqRbwPfFAnGHnzYeubNC4h242ys8aUS4H7dVN8rNCTejjsbHqJy",
  "key3": "3QtwwM35uvbJq2mg5x2dgMm6s2FDfBJFX4RjsG1MzCQrubZLYrfFRr9zzKDDyzfzDM33hFxKyi3UgNejZ4j1kDpa",
  "key4": "4bpCLeVLXdLDcZRZDhD94ki6R5z2XfcuRcX9jf569ngwsYN1mKSi3Y7N1iyTaAkyVsHfCrwrNB4bGZT797AUeabQ",
  "key5": "5y3PP3htsiQMAQbEqvrSqzVbpAsesoFFyRkzrcKm4WiDXDHXY5d9Vsw37sPdrvamkdo7GqUoMg9u7xb6pSc23urm",
  "key6": "4T4bZVRpzp9SW9bEuzv3VGcW6VEWyroC4PRPfKVbR6FJM4kjS1LnoU5TSNVmwqt5ba68KMLwk8eVePTfzzKKfhj6",
  "key7": "3gZJ5QELvZpzK5gP8Bxk9EDcZqdPXT311N6Rxd4b5pVSVRNxRBUjuBCaKQKGiUWN5K5BXpXxW6kghuscdKK5G8EE",
  "key8": "2PfZHyDTV6t1yCPxSsLybmzcDkbW66UuA6nBPsjzkaRnhuasCZQ1EB1HWHpgcqKMPdzypeN1PRyMnnoZTwvrUhLy",
  "key9": "35EEjwGANkCcRsakmDGtQtB4xY9TZiG73QA24ziL1EQks4vPae1QVbExnRyWYdtVSjbeNZ8pk78pFYzAQcJsEs3g",
  "key10": "5JPwJRQiCWsk52QynM9HgVkpoBqYh87mFzLERbzQYW3TwHZou47vMi3YjVXxBW9uoLx8stM3gGipvGtneMecdjoW",
  "key11": "5hxPqcXdwvLMMDVxNnHgis2q98T1cEa9iHR1phcTcnq7QE9zudP4A1bTwXvTHZsBtJaA28JqL5aR12SgeboJiAQe",
  "key12": "43hdjfpjspcHyoXjewvKYyubCMqVyejNRN4mtN4E9WEZZniHHFDrAoNcYgMCDiUfz4xaVdFKbbjS2xHtoYPXBmo9",
  "key13": "4jaUAAEbEWMLfVNZi92tsYJGooZWdBidmRw13NConsMU1W6zaCC3UWMWdHMKYsE6HqxuS39PYL4Ti5fd5eWU5FsA",
  "key14": "2jP7vomtM2DZz4ajnE5KA4iRzuQ9GbPDG4KzMj3YMpxkKPGLuNMuUVTrb3CBVKMNQG3pbFBdkrTcEC3GTuo1QMox",
  "key15": "5uYqcHym3f98HpaXS2YPrQVRjG9cqqsrZxYf5WmNeD7cc3cMsZfhgYQQNiXFesPYZXYU5eSs4HMxXEHLbzrykfgJ",
  "key16": "28n3XGNsjnXcnG16JPahGkuqgW7g8vBMnBBfFwU9MaiopYcJC5pivZ1bpNzQfSsJub1K5Agxxa3kTM7NtZtN3XcS",
  "key17": "4dhsxiDD98wcXn2ADEhVUd5cVMndtnFiSFhhQNtyJ1jpss3Nif11GhdJZMEx4Kzww5nrrTzvBLiFUFvDQSX4AyqF",
  "key18": "4vxbWHyKDcuPsxSswgnSxonoGmUpKF6XBFem95g7Ztz8n7R1wrHvBHrtY8DQCgcPWhpVw3uCLeK86UCg7NUdNAUE",
  "key19": "4BkhGoVf9pKcQojQfc3CaTvYFNxLKZ83Dz2qbH1owsK2ekcYtEzx7MLA8GMdziMiqXRgoGHZah8ZKjxUaMysGMeK",
  "key20": "3E4CndQbzG5taBDxJGVfnZcVnhVvpETMhmCfhj7aHQKYpd3UFqsDrPciweVyi9A8a1SKy3FNJFZgpPVvZM11MhzC",
  "key21": "5imTdnZqpscabDRVPnDViQrJEUyfVhqHijabDGsgtozaPvXByYeu4znqRw7hTtrw941fEUd5rRXNzJGAJXUtjyRw",
  "key22": "iFLpVayvrtrVLHawTySPha3bAQjsBSE293DmmWWGFc3B5Lbgr1AZ8RawZ9sDKzcagf3QvytWHdxVvpnkVFcmTUC",
  "key23": "X7GweyvKYFaXEJfNRyiP2Yv5525iuGVkXEMyqCxRGvvuuDrFLBY7eq2yFgnru5ki4hjCD7rwMDtPJ1HUF4uAgwQ",
  "key24": "5hbnwuowzgYkxMzZeTZj21n6zoEKokPv1FAWACihAvAqNxhiiea4HK5mN8GjdSRwNaBxAZTT4Y83KK8ZUQq9WiJr",
  "key25": "27Y37Fi4Fpktj2Ea2oUXFqvBAq6YzGpyiNigmGWPmdcZW1xwr98f1NaAquWVkeTL6RuxDuw8drwexUHMw1uFUaid",
  "key26": "3suSaoZ62sZCYVXxhDjK9gFKxG7z6U3cDMEC5kpiaHUj6yJgtCXJNgqb3Xu93go7BnYDVUWbNrAoHMXJGVuMfu8J",
  "key27": "3GUKoyiNN9S2zKgjoSu9pJmbWy7CzdE5XMGrAeSQg52XRwTDdJF5t2BnXNcVazMZTCNbJPWkpNho6p37VvmzSUzF",
  "key28": "2eVJkckFhWvQvMAmE5wwuvhackDuqWi1ZWQyksC51955AcjEtB9jTGrVeaA9Hp2rbiFobH7d3KCBd3K21d5WVi85",
  "key29": "5A5bveRFZwDCcQrCRdFJwAP8eyBMUqvHHU8kXazAqZUNfmzYZNtTKPjjZwQTAgUuTPAE7WqxRe523yxu7yi5qRLR",
  "key30": "2tMcEhavKME6GgswoCEf3eQvd1yxFan9RdQ61poJa743mS7LP4qTkc9GjBeJsm5jwS3cD32AUd2zcEHGbiFSURqb",
  "key31": "3XuaxjUomoh3zVifNHdPD4qu3XWhmUqr9faSnx2Qe3Hi7gz2vJqYoNj89td97ToaCLDTCinRQoiH3aZgtG6Tp2xe",
  "key32": "3xTuwsDcBaDPF6Lavvpw9H5xw9MdrEtvLCr2PkAwd6gaQMV37fH7oyjDjckaHurGQyCJc14iYFp7GdiDRrBn154f"
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
