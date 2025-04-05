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
    "3PECUG2mvauQ4bK34B7wtCQa7LUY5cBSQ3HxUyAxN3tUfEwPBgqMY4FpSL9JRmQLgepHEk7FHLBdSBfDP7enEgAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xK74ebhubjAnYXhKGJnPv8Pwgp6B37ekqAXQT6Q5QVCEjqSbYecN3eLev6EDFrWUaiFRaY66Y4yKKAeAf67pVxG",
  "key1": "4eSakoqiSx2WVVAwxqc7bN1FPeAQSz9i6fHLx93VYvx4RomCh1bcVkgxPcFjyCWmrb9f4khAxju5c5FJ9meANwH9",
  "key2": "3hszBQRGie4Hj9wGohkR5v4B1CA8fps4136UZbr6jFCjodKAv1XHe5KmNJzR3GDQZd9oQe1gE7hrQD3eFvStCnPU",
  "key3": "5hGwnB8yGyY5xDNaBX5VCFwE1PksKHbxHwvFthtnVrUxUEk7wBzSo4NyKgkeSx7YH4Qsv3EGTFsfY9ZvB3jP9f7D",
  "key4": "5rwGPMBg4zh2qvHqx7rrqdUPx3XBwfYm6j2T44Phnxou2RzoD87Di63hRWtV6c7LCDYSfipFEqcua4PxYWBAnt6t",
  "key5": "5PjFVt1iUYNzg28Cot5vKWeyKct5hQCUQtssCfSWtx2XKvdSqREwhvKdkvqwnFTT6imRq91aP1yr8jBgsXEta2N8",
  "key6": "3ChExTdJtrLX4BrU7XMkRosxy9BKkM9y4pxKmTx53zypKhgmnBFBCCDTQLG6Xhb1F3b2EEqiQS8opEKwJEPF4HDL",
  "key7": "o1pJeWzMhinRw9gfcoDhHhV1PYRZAbxGwZKfHSgJfJmVEPQ7Buur1jQCYr4nCLMATbpjS5JJr3A3zBFiWebyGBF",
  "key8": "2VfuNrrn1fMkAo4BWq381X4GFciNdZDoTmb2sR9xjJ4ojs16hJaR5mwbNv5jaEwy3wLJk7VZbLLCno8Z7M5seq9",
  "key9": "4yXqXeA21eXJBfJhTudayZDqeGWzxTo9HQaepPJL249YjsVxuqH65LLDx5N9DYK3tn5pSFin1yNPPpuErdzR4ohr",
  "key10": "efj86Szd2ABumMGfJyLJYpkXh9BPzduGYKd1Nd9JWzDRpefFNXwHGqr3NRmxK6Gzrjv2zMqUpA3jx9dkTCV11Ym",
  "key11": "5KrSbNo6VtRGSqSbhS2qX4QRJnXqSQVuJMZCSXinMpEdriaYjnet5VQH2sdqb2e47QL3FChcDQN827vLxY6oShbL",
  "key12": "4PD3wuP5VCPCbnAdw1kNkY2NdSG8s3yyVjubenXGZFGp4y3WA9CYuGRi6W3RnZ3E1DWHvxxPdEfwfzoChZrJwVVL",
  "key13": "5tevXky1gmxCygg91VKwYExjBRQwYc5YnW5zozSudUktioedvgdoNyVkSjKpZbdnxDSveAsyDbQERmhWjNnf36S2",
  "key14": "27QCWX5mR1wkWZNBgx2vrzX41JHqv5BfauAj2sZP6uhvfEk7X3d1pKfVx6k64u3AuHtG5NjmC9MzK6zJwgjwRoQH",
  "key15": "3BDEfuFb7G42QCTGdhA13KzbJKAQbEo5hLvbPsvjeCsSvyModUzPfWb5CAxz2iwK4vT23Ck5cckJn5M9RBxH47YQ",
  "key16": "5iFoBpQeipcoRfnQhesbwRB3no8HqwRbzXQbz3MHdqQPVCw2KfSqZbY5zpD7bbegzKdidenAcnWL2y8KucA4BXwS",
  "key17": "4EJf1ovy9JxrpwZdrz8r3tR8KHvp5LyZqxNM6e1fJUpWB59ivT8QtVQs4sEqcpz54nM3mf2Qj1WaAuZKusQ1Tmwv",
  "key18": "2gM5jsYZj6TUYeJYmksv1DjUsKzyRpZjdSkDXQxrFs298JkrM7g7xMGPhXFkyNxz1Xr8h34kmbBZj8j4FYcN5uFy",
  "key19": "kkfSQ1Qn26YifCznmCYYpbCstUXjJpWebmUFzhaX9sUpkLbcfnACdKxZUR68YeQaQZdr5yNcS3cjQGpKBunWVUA",
  "key20": "3f6UFcozTfo17ehbGwys7nSqpweU6SJSLbUJ714XHkn9Vmt2zWPQm4EjUjGZxufGGW9m6smBWi1Fb1WvvNuBYcrf",
  "key21": "2UAkbfY2hBrYwYxZetF5zAxf31ENTP1te8n5itAWGN7YaS93LxUPvDxD4NYa7FaRnRAPvLR1i7SyWnhkvUqfCNRV",
  "key22": "49DYgUH9UZbVTzyB7xUvAmw4aML3NWZzuYtwJ6EozWyKRVExsfG6P9dKeY4oDK1nNxgsqcZhvNnbuvN1YzWjeAjQ",
  "key23": "FD8NPaC2C3NgnkJExvqUG9kSfZ5XQfdvfqNoNR3v2UZmTTZEzuLk3FgyJAmKfFdTyuhQ3iNXLJ2zHwKHiAYJKHq",
  "key24": "5G98CCLth2eKsb76poQ9ABiCLKiqUXDDTM6hrASkhZTsrM54CgR16krAMY9bhpZJRkY9hfJR3xKTKkjABSPgGH1A",
  "key25": "33KFbnS1NDoJWky7BiEwCfjJZxDJhE9PotfZJsJX2WtbTLpSZAo7vvKjacZXWr3NYXRJ2CHYnqFw7mUALywNvAB5",
  "key26": "yneVdjJPdNfBChMgZxTYv3DsEvFKGuhF1veNE6pMJbZZWXe3NiWLnnVVw2Evz3cEVkNdKEFGc7BiSXRTRd1RqP4",
  "key27": "6369rV7hyCXtHEwmSMZSxxaybWMv7MpSuZQ24qWpGKxXXX8QfGFdvftkegp48cDmGgCh2CHHP7d9yccPpxNYcx8U",
  "key28": "4w1qAF6RvCqm5MexBWhwkFdWobpnXdiRsN9reodMwFKWJt95ifEKcCQV2DNfa3gsbjRqt4j4MC2v3yeikZtD2HqL",
  "key29": "3qELHm7nSj11LqNkfcpG2XgLX2v5fA3ycj2qBD6G72e6s7HTTTvy3ax78v8PcwLrrt6JwAm3YQ1mirAp8UXPtoq9",
  "key30": "Gi1mr7i9bM4sELvYVs3ZubKSChzvDMAXkE237dwpq5ze1F8EQb6asQ6VQ66HJjNr5f5h4LGbQGg8ATq8QSjEiTj",
  "key31": "5JJRqXkxbixmmYUMmuq67PBY1JTrTZnHBo41AVPEf9f9aoKLXFb6fhXGmzg2kDhd2VuvMgnon1JjVR5YLZU6enCJ",
  "key32": "3zLzPufjXySC3UGszBNT4dZXX5vsmN7Vw5rWBWx9cvQkw2WK5bD3f8oqDXeB19cXGZUKKoev6HyRys8qx2z3dRHJ",
  "key33": "4BpvQjs4Cs4awCDGwKzFsBopBifVQ7xESz9i9fdTuvsg87fde2w6F4LSQqEgkRhVPdimhiFPjgrbgorHmBU9S13K"
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
