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
    "4YVGEsa1B9xwn5VFFzrWKzvbCMTCyu1gJad4JbvnQ88LC4UYKQWH9cSTHN3R3giFLVMtG5C5dW9Np49pHRN1z2sn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AnqJMUTsncJZiM7NWswUKmZj32DBQwM1cB8GPxBXyeSyFohq3w61tc55ikhF85jjUYyRYLtkDrgJh46qcJcNeu9",
  "key1": "3MMf3Q6fio7rDTbqTJ4tNzGo2Ht8GXtWrecWjBBCve66oofyY6d2rp718Dp8e7StSxGWUYDLTFm2fjkUqE3ukHx7",
  "key2": "4NP5NQQ8EFMiJN6X4xGHkc3dPbGU22NdCbpXSDGQLJ2TZn96w3n2VeG4kfJyYxiuNd76PXyFF8fW2WENAtiSw1uA",
  "key3": "tTPHaqkEGWKDCyTRQQ5Nyvaz19zgcHToJZ3ZpGSXwu8kBW6n8qYYUhX4wehJJ3hPKf6NN4A3SrmMroYGHBzXw9Y",
  "key4": "gh3DjVfeULtrrgo3b6y7X9nFVXA3JB9xCUeUwRpDLeLQKPEkaSVHb4aTVCNZhLC6tYerpfdMvYr3sQMMg4TJd7b",
  "key5": "DfA1hPVfdcDMFLuqwTKQKKZLDayYEFhmCSWEwBSsBP9W5B8wtCpxQt5C25Q8fTqGNqsm6r1g2XpSvLP5g6yCNzE",
  "key6": "6brMj1yPTs5JTVC3tzhNJYtDbSUgo7BCsvWtXxT3VoKqEqAto9f7BPXqYLmcoLpUtUSCR3774RfeFNj2SKwpnNR",
  "key7": "5WJQGUxHWVrCAsdncgqcCZ1Htj6W4Crqsq2LmDD8MuUb7rJHn1UqZe3VDWtXtJyofxvRPLLzoQrFM7wgrqcVbKLw",
  "key8": "3eLnZqhnCnYJvnmgaCHkQa1WG1tC3WCzcV2TtHjSCtvECQaNDAVJtj6EntksrEUwbgHikYemb15nriS857fDVg6",
  "key9": "axWfaj7ZQzWqy8SFbqufVsqvNjSYFbU4UAJaWt6gFhv71bZMEp4NEd2fEgrx7Lbc4rzNXu7ofdrsjhtZA86m4cu",
  "key10": "yYYbZSuZgStesBUtpyLLQJXbKuTKaX1LJUabtYivhRGk31MWpEhbcs9QALjozZtTzb7jDswTVBUTAobGiwWYVza",
  "key11": "7ves9PCEprQSc2bwVbVtaHP7noWVwc5bpiHYKQ76D2UptnoFKjkF8noxFR6HEUD57d6nH2fHCh8P3XCNTAu6wHX",
  "key12": "4BmKJX3Gq4XfyHit6bYtXL9CGoYZsGQbBYCLhHM6pfy3QFrsvhtYjBZhakRXtviTWqEz3FTdSZoDFUn1sqY9FZNk",
  "key13": "4ZZ4N3jtmFoz5xHMtr67a2CWhPBBdxo6Y17Sgg4j6q7WHJbgz1F4e5pgfaqALtMA4sWUnPn5NsWX5fS49H63q5dT",
  "key14": "5bMkdofMXotbY76eMLGHV92yHnNsBeDWXCGRivdLSXesSMAMnhvJ3GvG8XwqfMiG7aVpvWnutyV6qBKAmTHCXjbB",
  "key15": "4u9CvTAZGfmPPZY39tUQdG19KHCdAWV8hb57tzMkJvwUjKTcLWQ3nHpCYTapzwT4NXhNxHo2ZqXzRXEqh7QcABrQ",
  "key16": "36fbP3pFgvsd5x7ntifYpf6o2qcbG8pxbNFDiutqqhBdkgJFakvtpQpJGvHV1CLsG7M4nvD2oQR9328tXJjdhMNe",
  "key17": "xNQXgNkR3gwiDMYRR8k6MxPHL2BbXYiYWor6HcwC5S7h8KPEBLk1o9bQRMt47EEVsB2BHVTviF2w7mG4xQbkXoc",
  "key18": "3M8iDovH6H5WEuSYP7MtUrB4DtxuRb2sw18NmA7cqWoSUVjT4FDAnUKPYEk13FAgLGcFMJX1qinpQ1NjqdJrGZmX",
  "key19": "5Rdh9jzjYeeCu4chDBXYQeC8DCtCxHopLBYVzu8hDscvb1q9yV96aMQbesP4HPgV6CwxMS5sBcRwiULZw91XeDpY",
  "key20": "5Z1nykdAnhoQV4939vLVGgEpU45T3TWG6YuiGYwnV3v6tE9HEuf5NX9XuagZUFx65HKs6h71rYk78nn7QE24Nkbj",
  "key21": "2wdDehfUAz7QPparREuLL8EE5y7xng3UKDcpuoMFJzQK6EH7sFQQfLtJrwzv412dgwqZ4f2FtDZ1KP2qsmcusS1F",
  "key22": "AEnX11BctSoTbtERKckbMtVS21ntozpYNZadUs521kwrmkAJqetxwqaQBjQno8QPg8FVsw97bCNfj71yv4fDdhM",
  "key23": "5Jwy9JgnrN5vQjqeMHfzQLrU61J79ywHFsuvxx9G9tx9rLcAXHUZkEmBuvQQZ7nPfN5Z4tbZHgjJA7CK1BErZKQf",
  "key24": "2TrmKvVdfftgoec4wWufmUVMRRp5R4QufXBoqUXZ3ai41HUrUUmUca2GBZRJuHiFwTu5m37sJ1gRv7UDoNBAiu5p",
  "key25": "59huYfj8mLXWxw6HNRURiyVePVph1XnrNxMMW4qhpEpiV8FbCeYGUqvt3WfraYLP8wsH932wNWGWd3eevbghiW9v",
  "key26": "hH9D2px2GeDVMroJBmcupzoS56sbMEpBLhrFR5zvY8BJvEPMiJG8FbGnPYJRzvAz8Vb9smrHufHBntF7qcrncqr",
  "key27": "rTee6vDVtvy5c3sZ9p9vXiieWxUbyNjNNjudewojmskLXc7F5Jb4Emk93JLCZRYCEwLsCzuF2ZNydiCGuV4Bq3z",
  "key28": "SU6eysHbkmYz7THrKTagN51B5uShZxjZUweHq8uuP61TT847pJnGoWt57Ekp8tKKV2YpZmBok8VVfcabDrbp2z3",
  "key29": "2fZYFKJ6ja3CUckqesaMUoAVe5ehPnWKpuF5tF6YEatHzs7najra2Qh3mnQipy9WDxBsUdrvXA7gvJEVYRwpcVPM",
  "key30": "4Yzwx45cZf5PgKssf6jHk3m3fv9Y1GMZxEkjuRQxhmcGSDJ5iaWY9WWZLuKdGsT3oAFW8d9TiuxDXENiCEtshHpY",
  "key31": "47pTnAaYNMUNMrE66Yz6npuejZ5Fn1PH33ez3CwbHWU8ZhGq7hy3LGM8pPCy66fobUGrGAMLujnNfRREihtPYfrN"
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
