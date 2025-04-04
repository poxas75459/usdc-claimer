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
    "4BnWHaah4c8jcFq7mfrXhMvYLJTY81NZ1P11R1Efnhk9p9PdLX6H6sgxzG2XAjSydgJhWMWefo4NHnfbVFH9Wpn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3727aUBNC1Pv6ZTNacRWLHyJXAr3vwo9p5oBajVwAr248sg6U4qzmabmtVFk3bCSjQpAUN8RLpWBGkMFkfRyrrLq",
  "key1": "67XFLEw7TURRZ93xYwMhk5w9dyauTdEwyjsrK9pdLYCr3cNdAikKAtxyVMJrgrfrVcjZHu8bq48E8qdLTVioCYuL",
  "key2": "4oAFCYfrzMa3WEgSQ1zcGUr5r9efk2N8kF9yYNVD68EZ9yy5KXRK7xvTmDVbWSHfFmQAbHg7TRNV6p3YzZDqpq4g",
  "key3": "5rAr57974yg1zAX65hBrSJNhFXiQobLj3Jpz5yCK11SQtfcrFjQCzMNh8ywq8YPW595PiQ5hJeZHZxB7UFKBSxsi",
  "key4": "3GcsPn5X3yAgzRT8ysowytUbvjTMMFvsQomUX8oQKQAr157FjjQxDJbKZyXdZhTqyQ1y9neWtaiHCGddAKTaAQs2",
  "key5": "4wAwucNGWN7goqpctX1RngDiAXgjRRYCCFYTaJnwpzyqoEw2HqAF2rmTZezVXPj7rQddCKroA5heqsTNNJjGJ4gp",
  "key6": "4Hpm9cTdL7LsmdgZkE3fhJzvpkZhWPbTAYSu9Muu8dgkxbn7R3tGRTjJr9VBeFHHNn34PonVCzFHj7vozNJERgmA",
  "key7": "4wPaQUJ46NQiAuBQmcqk7WkUAj4EdmSBEWLYBEY4pRdfYmvHtNmzW8k6Y45UhiRoCjeM6zNyFqqDb8Q9C5QPN24A",
  "key8": "5o1LMhKW5a5n863afM4VRsBFFjWveAtoL3jVpCTuMDiK2WouHgWG26uUPy35GDZj2FWEfysANn6v8BGutmGSCar7",
  "key9": "2h8odyy1yXHG7ddaAafkD1G9Z5VHUDNzNikxsA46k1DkiYK5aL1JfopnnWWK6HKfjH3vqf6N2j6fvoUoiH5kDaAK",
  "key10": "26JrfnpKrgPYfvMRkcS5uXvFKx6R8yGZVeqftmPAfzNrxf4u5EokFoGYvnPwcrMN2iJgqKR5BYUAqRVtHWiuen39",
  "key11": "sDqVxiPBXd5KCb7iQMNFFBdQAzQtEgUVbJvuhmHFvnRijhoRmu2nHrDVWeTqBrmZJpLfeHwjJ1vut9tJAnN8s5d",
  "key12": "4SA5r3fAp6YvuzKQhjNdM4p36qVrzr2SJv2oGD6f5KBWAKAZMo9bt5AanNMMmjsbfhZtVtXNMUkjWojF1Zf6n8mw",
  "key13": "5GwAAxoohxMogTaDEwPJWoRvs5qoVA79znxVDBCL9r9uqSeMLMKwWNwU32dAhURmZiVgsrMQe4LMBCyakj6eeexw",
  "key14": "3KDmba3KVesXchDTFyPR1dLKWCRpYWPxQGsahCJtupT473MEtXWDnFe3ppwu3h6u1aAMxRztHL2kEBJyckyXmRco",
  "key15": "6cPjT26mrhChjKFDG1Kc2FCJ4amD9i2jx1kX1dqxy3kfRaJqac7VQoNCSKVgGjm2zHeFwVq2Di2QUozHDDxhRkf",
  "key16": "2PwtBsEjDDXpPW8y6qZw8pBt3C29y6BfhSDdrLyWp4z4eqbyHqsEDoFJWMserXieEBBBUTXefpTuk83ScHiAVekF",
  "key17": "5JoevnxsHS3XGU6zVJ6bb1JFExPd1mxMJfFfQqBywKM9noKtR5MremecK2akXDM6CN1YvXQ6wau4z3bCViW39btq",
  "key18": "55jHhBbe2tACGhYSAaws5691BBBa12VDL5iovUhaSE4dZUG67MNy4LXuLYu7LX4PPpSjBq6eZmwkum1baF1ioejy",
  "key19": "24fad8YsmmsMEgsHJcN3fCRQKo4h2o4a2nQQ3GCxFZU9qByfFwjEszuSNGYcUyk86HfRmH2Gj8FNkBj7mu2Bv2gA",
  "key20": "r2RC58pDaagKdy3Wq77Mf8MpdGfk3m9FwzPb1a5hRj4s5Ff4pNBsr9BysTLFJRAGYzXnMJvduJjVQEc1Ft7qFBu",
  "key21": "Z5DhWYagNLrbR8Lrz47MeFDajEmo6qHTsmSjZNNoEvgLERYbqQX7GJ59qzBVouEkVaoJJwPTV7SAXjAB9hJ46Ad",
  "key22": "4onFQpL9hevj5oYk12GeMqzh9VUrF4zib7DKLq98MhPVrp47SZYGf6G9SEn3JgPpn9ZfKAv6VcB6Pu7sbFYXi7sd",
  "key23": "4NzpUubS3ucNXNeG3rHkbF1KEwW4kEaUZeKLF6apN4oPaMBaiqfWbVDUvktJLomkDCGTMci5V77MyepfiaZKxMuz",
  "key24": "Q4UQt9gT6TMRssVb4ydWtycdLMi6wmfa3C5Z8nSNip8JcGQJvXQBXz7ty5P6KZzh9dCcWNkPaH9JyBPcf4h92ce",
  "key25": "tczNzVooo4M2AHCNfvkmJ1zPDasMgaW4D5GUg8X6jDyAHLMMocurP74FXwRPyWfVPuUkPVy36xSJ7dr5kK5szpP",
  "key26": "3dRz7X2eU673mZfY8aTLSrnrRiLPuXHkgwRoEP8n3EFJefU3NmJoDmh9AeP6cnjMaUXtQDxSYCargDtudniD8P6A",
  "key27": "Zi3mgsehL3YHDbWN4jwSZn8drmiqJuQLs1yLEsVxoydgg1Gtvwrrzz4hNCCNhU6Bio37naKJ6AcLRY3y73ofczL",
  "key28": "4XVSTu9ETpfgWMiKiEkco6jMik4ea99maHErNEAjaAR1RzSGcVpnMuNzZYUGcNu4aCq4FDLhueRc3dNpvuPbdKog",
  "key29": "2ozha2YFf44HtS1PWPHcm93q7y4A6PMSVWrYXkaP1gFLb2eMroG3BTBeogZsPt6pU3iFwo2ix7ViCF33m31ifEMD",
  "key30": "2AZwCh4nYMFvjhpR23nTdiRroe3soiD3MaMi8fWzj8A767uHTSh8AsRKQ55VStKhuNWL9gR4pv8nJdLxsLTbHSA",
  "key31": "2o1zLmrqBqZPvuSkz1ra4eD9vE7UhNU23cggSR53L1Hk1UrgrHVyq8pBug6e8A5WGoooPtoszvAZff25deFnfjat",
  "key32": "4LK3G41mog2Nxe1jPpybgF7CnNSvr4Xashh7Xw831PYweZqMv3qqnZgesMvYRGWqos8VJcneZuMSD1YqPnFNyuxH",
  "key33": "5QRNeR5i1dGcmYL9mxg7fosTB11osb13rYiStiwQRoPdYU4JhWphzWG4CA2hpep5zLWd9pjzUfFxCF9PRKS8pgBE",
  "key34": "2fC7WF1z3QNaEGociUvitBACjWhLqboLNNVWGCnLNaRwRdtzcDvz3rEtBe7F3C9Awg2SNrkMovvpBR1PDSS2YEJe",
  "key35": "5YRYWtUcaAmogd23CKuTFmm4Mk42E4GYBSNA8CbfY4YTg7CimYgCACCddmwQ8hCi8wmCAvYaU5ajeQJVRvv8fvmW",
  "key36": "3U2q9t4d9Zj5GB29HWvytPJojeCWLUa6MvRZ1qoEhMSSxK6Ns17ECMYGhfxnrw7vniqeTcRV4K1KKBrEvi1QCWVq",
  "key37": "3z8ksfjhSj1pD4xRN2LkZpb7AHte9V1smt1G3ur7hg4gTv9bKnxLBJyE6dqZTNJbC1SWNx3rSvpoPTA2RYSx3mAL",
  "key38": "42nGpJ7Nda4YyZgJJwJqKQVHbt1etPcEZmdcCjsdqi4kgfCWFGPraMVvEXNiiR8JvCYsy1tREaggQs6139inxGYz",
  "key39": "28x4ac7uWJpBHYPvZf5dfsMBy38cfERvercFTt6Li6bREF4RJeibFvvoduJK5w1PHUHgG2Exj635j8mzwZgxQpzX"
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
