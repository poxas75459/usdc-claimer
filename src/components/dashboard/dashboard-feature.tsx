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
    "5J2k4Fy8rgac4tSVuE6v8nunANqSppUnUhJ8rVvFEGkatKE5XJLpyDnuku7vacDSA7JoKNPQKTJ6Kbhs5xC6tYCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "558K9WHeZzLLBJV4hVdVAhJ9GqVDqJjTeLWiyq2UUt2SG4rjZwchaBLBcRFKASnHk9i5qsiunMnwAo4sN6VCRF5u",
  "key1": "3CLutbvxDbfeT1nEJuGYHW2GKVmUC2eYKoXuJ2wWawFS9c9Gm2TXcagR6xynKStSQ6eHKcoK7HguNfCkB6H43xqJ",
  "key2": "CTNUJSryadXHZ3kM3v3XUKU5zTKU9qVRGHbDPvbi4HMEMskGcByY5QPftqWd6dffJCo9iF7wPVV8pkUGGjKVKuF",
  "key3": "5EpNrC3FSi5rNbr5nSceyH8W8qpJxDdu13SS4JaW9PNhZzwAKJzAGJvxahkuzirDucgndga8bSi7HmF876B2xN7Y",
  "key4": "5bbuLxFARsGKDPeKaBu9dABgEb3FSXnuRrTeJuiPH9awmK4vp585dk7xoWpjJhxRfvhUX27h5uH3BG1uBxSKfJhH",
  "key5": "43tEx3w7Deo7Zgus7Z4deNwkgqEw3ydcJrLpWCjmJVq1szKeWbeJp2KEv1Wsem9ZJryvKGmjXKD7qxvXvYeGWaqf",
  "key6": "UmpbWzEiDRLEvKBgXKRmGebu9z2zCv8UbGsa2HHaVY3zrusLhc1uMJeSBUjud1JowFgfvD1pmMjC34v3kNYjebs",
  "key7": "4joZsoQyAejyTmgz37N6tZcyx84MYYani1mKLu1h59JPiVpYiKzfUbzB9UMApTr9WGs5PRoDNZ6AYFUeGYLZE7ZK",
  "key8": "2y87dLN13h7Ghyckw1HfGLfvoShrZQNnGYB8f9eYynaqbU9Ab57VZtptkuT3eopcdCgU8HgTLqFR2cogYqSReAta",
  "key9": "55caUxEnzufCChX77VaKiCWAPDNbBkgVbd7nWMLYmUWFLBmRopTaT3SHuAJsJn3uyw5uGwaTNrdFe7EX6wi9S2Ns",
  "key10": "9QJkE4V1qTGoixfD3QkgkaccGQAqo394yjkiX2sUPVduFzfPAARhRVW3yxZjHK91HazsiSXPnBz452xeN2QCjuo",
  "key11": "34ReajFFEQJe78cVLXJJSCSkt2S2GmH4AUt7MMuNQoiqYXcaGvV6TWmzL9Zfo2CHhBh2ub5JHDeLY9LwB3gdSEfJ",
  "key12": "5cKKuLqHDmgrict5A6S5h7g7Wj1RNNraDHmM8keGZC2kTqi7Br64zPvJwBVaVdzo8M8J9f2MsYmM3whH5NZGRmf4",
  "key13": "3hfCdqkok8ZU2bVsuoyzVbvS1b99iVuWg6u1P6et4tTyfgjU4sGmo7bGMqcSSCXf2EQDioJcjErKbp1W2pdRqQ5e",
  "key14": "5VrLzB7rC7tFJ5dVxExhyVEpNf2jSGba2fSvZ3QpgaNi5wivo6ofUXUrD5EmYRwD6cHMVDJiJzUpjZUpQgFwZ12",
  "key15": "4cmLopNCXEoG3N8mzXB77tMRns8KHuK7VdZZnm1vCCidQH9ucNQtugVHJ1wuMQ1HT25GBz2kDxLjcbSK56BiZrAk",
  "key16": "2ECcMoNdoH6ZGqYjKVnh45FvLxRqfdmWpNy2SuPDjRwq4Jtk7EB79RDFwHyJZ25TnAm8pqCRaw2QsBMQtnrabPPS",
  "key17": "26rW3u6Dbw371YxCZVWeB6UuHDsZJqZscbUMbrX3UUtzRxuXVzoJnco3kui2BvyhFcV1f8KdBqS1KD9EUuWGNqr7",
  "key18": "2zHtRAh3RkBBoXRpiv7HManjqJR8xsgU2FV3vVytLS3WYhYG8iUPNEvBTrsW1kwpSrQooPL4LqbGF1eyMnuqutFB",
  "key19": "KqmQTcnkZCDwFQVkxZb7ZaPVDV9in3eGSs8Ew5ijMKzt6S1cnKpzzGvhpHGVo7oxiLvpurwjUfdQkK4n1Dqj6bV",
  "key20": "37H3nN3Lko2wkFjNSeUBDmWnSBHsf7N6bpXL8dqmjqApXkfESur7JBTyAKgB6dFfcCgmMWa8CG67a2LBaFzTXxfd",
  "key21": "FZP4SRhmaT6vdTz6ZcpeVfhJPR1BC86u733wppPRRzBEkcgdzFaZgLRZ7hzNCRTHQ5sUBLfJzS21FuXYHJNaHJ7",
  "key22": "A4gmywikXq6rsUHBRyhUdTUszUrp9npeUQZumX2X72RQDd1fkY71RX7g2ZxKBWHpajp5iwBRA57NP1BBdqieh3D",
  "key23": "rUFFY9Ru631i4PfkhAtqaN72SchfHbRWtWjiokMzAk9ZjJ9mNezLj3ompc4XsEPD969kMfSbW7SGHGPANDWqWkd",
  "key24": "2mDJLLBLdftRgyTwB2aKSEpEbtqe6QsJzrFpts4hNp1vohZJ3T5zLUddSzdGG6SSfWCBPaLThjYKa4uLjqS9YTDq"
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
