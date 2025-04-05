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
    "3g5c1DVpcWaa6TE6PHKda8M1KZ7wVXbq5tctZsw1fh4dz6hVYLv8EjU3spNN5XZmJBSRgJ7n8Be3ensdnGMomQKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i7CciynaEmrHntKuTXiNGjhbhLXJ9nX1gt4WBe7mTn5joJkXYJ8mBYpf3yWmUFK1jHdxhzBXKjuXwKv6iSWEebk",
  "key1": "2uGGb5NksBsqsEXAsNGMBYJKTMCZZfJuMJJWtQ2sqc635rZYo6LsbbnMdDfnfTKC84tJF7eJHTKSZBx7vdNKy9Be",
  "key2": "5Uxd8pGw9ZWNXRQ4yBqCf14w5yBAKpGFLi6MyqyaCoF1Qgo7cqeJL5MAg7hKsBn8GcgD2jLucR8nA5YEmF3kK2sv",
  "key3": "CbuKLRK2FvZUoBab5zGEBeLH7j98hSvPfE4xuMAKR5JpmuQed99vAQTT7rNMFU8okK9N55kVShQ5c9NdsUEY5fN",
  "key4": "cucZZaZviGNCZMUe241imejCJ2Wu3tEY5m1u9PSq2srPik2hmLbJuUrnUjk8GwJxyz3RedDwAGcK1LbGgSMRnho",
  "key5": "xQZ1pMwBGu6eTHjAu7ZXt3HMFyCZW9szgVjCpunfyG3mEuNP95sU3q48P5uBwL9iwjZUr6wE3b7rVHkWuQzLWEj",
  "key6": "HTFP4UdUTgo8c6V7srkf8NctoQHTYisDhbuZSszZz5f1VfuqVMsrYpe7XXHn7uQqUEELyQK86zGc3Xo8XGRKfL7",
  "key7": "3926UwNafQ9QmjmaYdLcmi4cjMtR4WbuWHmE8Vb3Bb4MQALzsgSF9twdftbPwvWnLorYnkd6c7dU8YqMZsyZk89i",
  "key8": "2yituh4Q8cj5QAdRX8PVnbCjTZdW5hqQjiKtgAxj7uhJjfadfPwanypMJ7QJVkA7bavBTurDyjBGqG5hRKmwTPXq",
  "key9": "2PirLPjWVC2rAwGGwHmezn27BKdv8Rsx9oWm1b5sq29AmVCMrpUDQZ8ToMKAnrziJUMAynJjBLxaZtwDi6FQWtTF",
  "key10": "5rNLh95kgLYDE4Qk5b8C2oN2o1GK75Y1Zyhn3WspULCLK8b8SuTGP3jtb5BiJ5MYfbcjGkvwZqBWp7aHSKUCRxH2",
  "key11": "5oQofT5KLykJGugT2fqEsXTeHgLvAFqGRfiAs79dvXzQ5jQHgVoSkBXYA4T1GDR822hweeMQyQgLvNMmsJ88Wen6",
  "key12": "4gfpdFErdeqoCwSbUWc8XjTLyDB77VRceUhxRFdNgERAvJeqvCq9bPrB5xPYzTJVxo3JHcwBszrL7AEt28QnFPrg",
  "key13": "2CAT7zSuEBcQWeCBAnZFPAsixamcGYaUK8DJ8D9TU7yzvYeXYetD325d5mCuiwzUjBb4xNCwwrpQozq7uqZojqw",
  "key14": "M92QDKuxujE5rdVgCGseY9NJa2vi13wAwYFsfKAogPYsCAjA9rThVR28FMSeksME9QPidhhYwQ8iTkXgUpaL2R5",
  "key15": "4am2e36RSkbuDMtHnMVbPPSqfWNqY15NDe7GVDpnb1Uij4ebRrPV95mnKAKhSEMFc1jgKJ8MkM5xxzB3crKv5Q87",
  "key16": "531GvDdFGVHqUS9cKTkhVWAywjeLTfziqD7o2GYs5GuCTSiEnKHYPqZyfUbUGP418Jrq7Xmm1PoTaw5gP5T7U74k",
  "key17": "57g8wRvZVVYoNcrZSe5nouriyYdC5i6EddGDUXPZTpzkLHvrT754ZqY9wMTPUE2rNHY19Eff4HTsWMBCcYHSQ3hp",
  "key18": "35oV9i2KxGeL4UfoMrKbCGv2m6TnbW5RB4fdLsjsnBH6a8syX1iqZeLJo47kCzUfBBZVBwCyST59AMDMb7iKYMp5",
  "key19": "5Qh6YdsfkU5hqFVs9NE9s3EEYnnYFoREwLkxvwtRMDvYjjUCv3htGEX2MwXTuP9C849TfhNtm3fU62Qf9qDvY5bA",
  "key20": "2b9ThyarPvanJhYVLPxLsYnLnsZyezK1aQxG4SEbShYgnskCvGauXc5mH3K3huaSKtkju1gmzdaAd3AhyUitS1dq",
  "key21": "3g1mNuFvDNRZVRXM6WijwZhaytE7WmAL9ZqVuwMzoGADucAYErusreHhsQFf9jh8JU3ENLrW4Mik28kmwYsAm8SY",
  "key22": "4P42s8J4N97i8VaiMJSL3zqHY77iiFdeninGJrmU5AdeTsDxyGKxWmhbyL5tbHSirMRx9X1iYJhCPeWwgAh1STAx",
  "key23": "2rVHE7Uyt4P6ok3YMzWvbhEg9JvLgUKrgmR1ofcNXbR9gpFbf3fUM8HYwxJ3sPnVnoCn6maq7a5NwLqJ2at5HmDg",
  "key24": "G4YzMjMtw2UPZpDytJVdCx1gcdDBmujzrYXrCpRjveKxkW7yMvkNWxuQomqvQ4oQ1reauZCbmsZtUd58j2BzFiS",
  "key25": "3s5swFGhH6NKGWdDiJhNnPm7YaPPB1m6ehxtuzMLqjUaACSBJw8YGbyHE4f6nepWYY233k64ad1NoJzCUdDBoAGa",
  "key26": "23rEZKYGSNDv8eK4MKrcwp3LZgLnZJm8CFV5quBkgC1G1HykewcUshN8uCEg7iMfacG1QG3PWA4HQcHHPqDajYq8",
  "key27": "43kbbFYdooq1kzkEiyzdXagxGRJDgChp5nzT5ifCJQPCYTZzRRfAavYyJ1jYvLyK5SdGdyZa1Exq8gPvezfeumdg",
  "key28": "4rgWq3yynMREyb4dGUxf77G3sMRLUJQFGVaTax5i2JqwPx481W7KaAFQwZC1PrTG3fWx8Bykv3iAXzSZzAvgoyVe",
  "key29": "2atDRDXUHbX5rp4gp5gqUdmPNxne23GaXczmBbh4myNThCKyJeX2mH3DmC3wZeYhYZ5NZ55KP6T8zkVUh24NGaki",
  "key30": "4BArwL9otUZhqauvFNdVUPGwzkwdw6m1LFnXeiZsUUBiKR7jYQfLFTD5Y3rXQ6N5f5hdwzPTNquKi7qfEEMLTBnT",
  "key31": "3UhHr2JXDScNf8ND5ReT9xYajvYasyyrg3A2W1V9f9isbsdaTqU6waebBh41MSyyjMij3BAeCqF4ANF14kRkZt4q",
  "key32": "3SgDsM2rdRQHWX4XAFcK6L3xYZgBt2UXWjx8rBTCNo9tCGWQigKFjbHvHdsMVgMs5jJypHmgWaXUx49CEf6jADqj",
  "key33": "2n7D2WZSL5h7LVojFsssAdTPKt3jhXHwmBSwQaaXQfMoARo9J2B16ddR7WhpwvVsHrZFCLmHx3QJsNXNY2C3AmAP",
  "key34": "4Zbu47h8uQ1mUHboU5DYKyZNapy3matvcinTbpb9w9b7rzowskc66se4LTqEebXoZzepETwwfPCw7zPK5Cjv8EFe",
  "key35": "2qFSkY2RPivpuMdCthwsrH5tj4LtodnmHMFBcvLSvRrTvaRvBBDLHtfQDmfHQNKLAZdKNyVitvMrxvDtxU2DRcpm",
  "key36": "5pgmwnKTUhocmLEutUcPxGjCFRz7zT7sZQAfah5KUKVn8Yynu6gLgcZxKeWg8afAHm7AYTDUfkfPHQW4525TnH6H",
  "key37": "2uCoCUe4YqJnkQKwCUxGqAm6da65DQH2gsKU64BCf7Qha8vcGaVhdpHyr8nWdRBr3DqMLmwm5xZbeuigqQksCqnh",
  "key38": "qnHpxfn6ywmW8tZiNCfnjx79XF7ft4yeZ7HVnt2RqbTRgFNF3bt1ACo7jp7RSMLqxsRFbeFvi9hvm2zn86jRDb2",
  "key39": "4YLKEFKKDA4JoPrsYaPmDcxU3aA8e9k83tjfFEbEppGHMP536dvVLaADaEhdw7ox5dLQ1Qx43eBnvNXfBb317iba",
  "key40": "3AMFYeLsy7BdjiggiRr2esNFPUbXysNmHDtCCCzotZyzaDMTrasZyt2xsDrRjJg1Ge7fzyQD3pyqayaaQvVYHTku",
  "key41": "4xVpuNAEVzmU4CGEmTGRQHfaGTo4fkEGNTqBCLKPzyV2Qm5PUXtMYRfeKbTu7nQdM2MQ8egnL2xerznhGQwEtqcZ",
  "key42": "3ZWwGE3qqTf48YBXCfMhmD4ivh48mWVj1jiYh7N7XyyuAkb2A98VEPkVTsRZdE7ffqy8e24MNjVvmiA6tfuyxTW8",
  "key43": "3upNP4Gt45gUqPrDHD5KhByrNER1eTvXDm7s99YR6iUfYn7TRFgWnGKPrCe6RoDGnDN3o4T3ceaqTMZB27FCTDpd",
  "key44": "4Bn7rVoCdBZAuQ7YHzKHoPLDWfhEzN4DUCtNH9iTv41mQsqyhxcZQEW8YgFwiBhdDt82jaCtshXnh24XXeUnr5gu",
  "key45": "2gNzDkMFHxoS4TVr7PqB3rKjnhAVksqtJJevPagrbbXWuozBq1X7rqLnEh54GCCyeiow8BkXTzJ9KweTidXjABrf",
  "key46": "5DyzocNARupexSYzqjTpDYmDxvH9GvXrZjvsWgjBDnzgHBX684GNPTue86HS6ruwGcKhAFfHZZrQnf4tSmADH1qi",
  "key47": "3ctsJFTFVJtRZ1Rm1CG2xCB7kXqSh4BPUwujVLHmiP3s3HyuNtsz3RHTdnkc63vZx7CiCdm76T6S938QfBj18PcX",
  "key48": "5kEXbkNuwbcv3sT9DZVs9NjaRr32uPsbiH4653t6u9ixUNkvqrYheBhJa5P2VTpfMRjGC4SSmf24kJp7ZAQH92d5"
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
