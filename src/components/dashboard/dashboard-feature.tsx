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
    "4Zgozqgx2ELyDc9N8xGkVFP3eLyvVjzE7SC7co4VLmoTbsqrssa8cS646jzGji8v5S8bz31jAMxFDDPgiCW32kVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VqC8t3auJXWjBqBFjxxmUGJMyYAdyhFQSgJcvvcdJjoBGo1L4oyMYwyAygizK96FpENAuuTwgeUiBKeFcwWmuKL",
  "key1": "39LB8YY5ehDRGnPCnJYRVNhh4g9ZKUspkCzFsjA6jRbgffCVHEyD482NqGXGR5NWdABy1D1vVdCmJNw2ZBbg1qtd",
  "key2": "4EJJJAsGsdaFkFLV2ogDgEmpg7eoTfdhQ5gybbpnebVY8Q12jRDa9znnG9gfd2Xy1s56127FhyMoke4SZT3BEouY",
  "key3": "57kfdokGc25QBRqp6NSoWHjYTPJe4JxVQSsBDTMWvkaViZCdYHcywgBSY5CgTqpD45MHB1HCsTQqH6kWNn6FXYJd",
  "key4": "4xQyqtCmC2ek3AyNjnAhVi93anRDk6nTfyNWWj84V1JrzoDdFXApU33jTTCVXHzhVSgk3nK3YEbAURAM2K3AdqEB",
  "key5": "5WNXnFhtojugVvYQiKXuigyA38vupjbMkSjQXw6VVtHGKztvD6rcCsnp8Q9trR7tLTcS2eH6XD5sFB92uSTtoq1K",
  "key6": "5mRyJ6g5ayDDmDwVd2HUUaijtpznJD2HKjc9QrHgCHSntWqTXH2oTWJA23UpmYpV5GWJytMx3T2wL91DEfmaUZwd",
  "key7": "2RnvEQ7JTMUww5diMrropnoq4w8kw3EonmMQodheJZAdC8XLQUx96hdvxs3HVRDz72iSKEFN3aDK7CgFK1Nz4b6W",
  "key8": "2Za3ndg5tX4XxhfFenD9Epk4BufWY3uKdjTrnMs6gicbi1b2vHbHBDsxajdT8C3p8TZTapt97MsmtcrM7DhUTci1",
  "key9": "452QaUduircdgHjVPZDeSrpjJw6wAgdJi3ASrfAZshUL51vCAz2keLRT8yNEHadrQ8kUknZtBAbfBg2rYzeCMqCV",
  "key10": "5yKU9LakdvtVZSJztbys8sUhdqe5kJXZZ8JXRxjU4bL3rw3aC1A5sZdEx1WusyYC1Yv4QYoJWNsRYww77DLWXrh8",
  "key11": "2akizvXmnB1BqQh8PmzZYCewygMrLXAKgsHDhJWSBcZPbveTpT6bSumZqyeaic3oT3bthcWscN7BrnAg2kQpFkBu",
  "key12": "5URjcCPBAF3AXDxmSq1zfuo2MHeHQ9LdfuivncKZwGqouNrqSXN7K83m8eDe7Yxrn4DA7uh3qXdGH1jWyzQbqBQY",
  "key13": "4tywrgnt6HKaGWr7vC1UWAX8aWpqUNraW6Avd74rJeojkWBJw7RRVEj1K6hz2Ue88zr7rboFzGDKWEUj1qjrLsyB",
  "key14": "3JwPt7fPQPLdBgbtsoToLfs8Ruz7ETvzkN1Bzs342U6aKbMPrCGfWUVu6Pa7RSWPBpFdTtWEvsvdXRMUr1wiEFyy",
  "key15": "5qZW7MRbtNqnvwYUfVLnz6uAo8CEzi1u38ursAKKNeCccBbPXztkQdM3mgAtbCzd9YBFnWYH3BPLs4p1SmGgszEx",
  "key16": "51csH8NnhyMi7kUgFpMenVRhkHDMXXouaWSceZSM4U4QDYrxYiR5ykdiZ8iGvVYxG7x5D95fAwjW472L741Qvzrf",
  "key17": "386rixjHe9Uxfm3k1LFFdXyLdVPd9k1viAoUBfuZwgR8Z64KbJxE3pkYcbBM9BUUFg5bfz9L8xpZcBEw5Wh1SwUJ",
  "key18": "4XDNKz4rt21sC2VScQK6vQV45LDi3h8Ge1nXb6AJwVmcM4NrG7MPeQn22XNvL5t4KcQompin7nfDhdWv9JeBSfUz",
  "key19": "5CX9bVoQvmiuqrXvi65cuGWd7pnGsag2dDjGkKBdWCwm6HQ66LncxXmtSvN2gWx6LUhWJnE4hThQyPfENFBgajcD",
  "key20": "2bBbaZ8E3gg3daFKRobKkagAy9oW4d2LaB7ZyALBg5jivesHQUmJ7VFJsMbaygmfxBk3cvg2N4Zg2KLakRhwNbNM",
  "key21": "5QwGykiYbYHCmGWapw3wdRByPtSUbRjYXnxi4m5XfvYCZ1nGS4cM5D7bF2aR5rNc5UzvzgpDvPS78SjFfx6gmeVe",
  "key22": "31omtRD4xCZ4sEDVLoqMqLubHU9kqf8jJz57RXQtLLjiNx7XJYcm725S5q5GGqqMAEtocXf71ovf8DWkfDaKp5P6",
  "key23": "61NZcSBMGnCWcSWuX521eeg2Z7UhFit6kbEe7PTwRjJxEGvx6UfnbwwbqTEnFLWwC7CUnDnb19UV28FyTizrRZo6",
  "key24": "3Lu6zmBHz7vy6SzjxTWfF7vgLy6Jag61Fn7iDrVWYcwgaJaz6gJnS9quphEDDJZsMy6MVxt9LofX7q9UTsTroxZU",
  "key25": "5VhhVDZCSLiiotRT64CWXavmANHVUnzRpR7qvS7J9oSyknKufXYhYQf2ogg9hjAiaE85zHo9JDcvtcGoygMvRv3i",
  "key26": "392fVoT7sEFeZyfh4dLkwe1xKMACxbpgmk8NVSvcfUxoAreSbjCbMYDLxkRSzMZc1ykV6tTQPtsXGjSuCzWk3RLR",
  "key27": "2bzyXAMNvYLmse2PESqGXiBjXj5AYPVGfZJuRSyMr3zQWJj3uVCwQoSbstULJpoQQjxRAmVgXu6GQYvJWZNmc1ie",
  "key28": "23JnUwaqN8xV2wHFaJzUkjTK4viAEVAFYeFHxkqnXczdSyDsFjnEXAj3EZFgysgPc5zyRUQ4SHA4oZomA4VR1XYs"
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
