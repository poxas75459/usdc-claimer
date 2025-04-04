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
    "DrAW8F7YWdPEibgMRHXWd6QsVV5HVMsZ3fizD7LK83nCNQT2ZdjBkApB6QdwnhGmBSRGjYSH3ZLeCkF5vDNykb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "327S4DbnA4vBqjM2pwMh2SbeGhsLxuWwGgT4TMWvyoF5kaMhYsSRvBrMjmVgHFDbbrcfshxxTEcnLcfGpW2JavCU",
  "key1": "kiZ1qw8qyYhYuWSV9YfjCZXLeDgdjBMKhxCKcQc4MyaacpR6CqoR1yh31BEMeGDFBzAEFsrwxQPLPqW86sbcxwk",
  "key2": "BRb3nU2zjkgBS5Qon2LUUztBsd4KpeyurgckAd2q54UHx4ZMf3FhQvVDJGhhUh7V2VisPXTupuddYjNy4bsVcag",
  "key3": "4LXv4MsYB2wZW7oHVxdX6YF4RMAAxSbqHrpH1vfpsjxjh9nS6qdrNSTVWc8oxd2gD9AzkFgxTWP9MjGjHsVJTo7q",
  "key4": "52cD1xPUWCFVLn6QNxrypQTJouQnsdg9fEBPdfjvWV3mPnKD8aEgS375QScNmoaja1BunXU6Fj6qxnVKQa5fp8Yx",
  "key5": "3wAy34Qdv2FmKfdszHtfGGYWLi4x72AbNvFotuzH51cNoQJ9LNJY6qi4tBWtHuMVUPt2bChXdKrqTGC6Mn5s9cVH",
  "key6": "GdtY3q1ruQ78bRUfqCTYcgtoE4XfrSaRDD8CuB42ARQV9f73pAGVNxePmWkEiJNT1fdmgknXXgGf797pi8KMibx",
  "key7": "MBLEibgJgVy9H1z11zkE7AAH6eWSG6NGuekcyA7ZuoaswQ8NmEGKXEZPCXQrq9EkgSWMsFS9ZfVAoc9gKXJfo2N",
  "key8": "4AYBdmrkxmUDfHuSYmmr81p8Mr29QeqpF2raR25uQS21nNdG4KgQmtKwYyGjwy63CU5RQXoNb6bNkgKVocQEMAk5",
  "key9": "4Vf69KfRH6VtcBYryPgxuE8ofmNUMEFVxTXLrMVBStFRe37WRLSUxFGfVg7j9iwqMm2FbaMvGLHsCyUqaiytapuV",
  "key10": "4D2Jd1M4Cs1y2TYfqyEXGD9vQHLvVuNtvrGupPpBYk44X4St299wW7RvJrdDZkzh5n7TyJmFHAfKQvu2DFqjWKNn",
  "key11": "2PJHQvA85d57YShTmC1Bgjj7Q4oLY5FPZLhZWHzXeZHTyeCV8UFb5mFATgz8a9qKZPagZhpJ4SGNi4KUwFNmbUbE",
  "key12": "2Ejs9T9KXzhhm2DXB9iS7CeQaFhceA4FRnfjjAf8mgz9tF9tXi7hKoUSKvagyp7Vf6197roxgxk2oVpQxVkTAHz6",
  "key13": "3HFUCyhXk85fgDp1bQmcs4eGt75BcUNtDSgRMpynG1qSDkefD8Ny474r1SPRzJiPYvDzM2ZsgpEveZJBPWJDehEu",
  "key14": "4vyPMdxJ4NrNF5im1rNzUQtYe9JsuBDXmV15HZ4t286NKqVs6b8aN2ZiH26eTum7Zzkn85xSBXbzvi5EKf5ioFcK",
  "key15": "2JJcZm6yhVczDJ4iDWR5jn1nJX1VmUY845Ac1Hz6eCGj3eN6JKMRRrythJAz5FNf7TTRem3bknEYxo5BjqNFvzv9",
  "key16": "fQrCRKPCjLpLR2wPcuGHMamWKWUvT76ToVwSMNR4xU85zdmfrMH2EHGPo3qprTYEBQ1aPL9dSEHb3eHvUpjnup7",
  "key17": "8rgKW2VHcMBKZtFYF3byFHbMbhB8MQ7iNCuD8Etu7dSnqqGKb6uNPvW4tp2twKwPbVqPsDxnz2aMGTwvxXEtspt",
  "key18": "5Mg2VcnXTjz9kc11V4ULc8ZZJLiPL5FEDmuLa415xS4JDd39Pj1iJ1afb8xaAMQgYMcWLxh7hsYyJDSCY9BtyEYq",
  "key19": "3LHLziSocawW5SnpYr7JpueLemQfZdHuRGpHzN4UmrdJtn7gvSAncmucfrw3BatwCEXx7FyZmjTMmGuTj79EMJxr",
  "key20": "3xqU12wevYDE1nYTv9VCtm5VsLwpKE3KLLDvYHhAkcifvvK1twDv4rf3Pje3B6QQKggn2JLsyzcsZTbw79jfHMpE",
  "key21": "5RXSmZraJp2R3H5xYPcm7G3sguUaF9DpFVFbrG3YEi6zKpq24UYv1FQWwcbgFDt69CSsV7KJ7Rvg93W5FBLGAk6X",
  "key22": "4QX9HQ2DYhW3AS2hQjS5N8bBN8SLg3s5tSeiv333f88h2yjbMRcuCeNC334BPr2cVFRURPCSBerZUcMxL9q4Ex3y",
  "key23": "3dctknPN3BcJuANrHj5AWDg9bdTh4qXc7WHXUrX7eP6mPEg28FxbCaz2iPJbkhTTC13rgR9gYEqy1FUeyzmgGia8",
  "key24": "krSuTmsPXa1JE1af4GCU1uZDp1DDw6W6nwcrqDLzhraTvKBR5rHK82u95BnCQfHqbVKNJKjrqhGbQKX89nWwGJr",
  "key25": "27BpNVFZ7utFHih7tzGn2QjvqhH9kLdxQTWtj5Q6CgAPHnHVu7nVFG9HeKxq8ETYAuYENKNeR25N4KuXGGmmHFM1"
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
