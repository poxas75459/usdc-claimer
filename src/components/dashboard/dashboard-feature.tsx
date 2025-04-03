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
    "wuBH7n7qeNzcRKijz9p5a7oeGCW3Vx1iGpjYpsiqmLhX8v2JdsQxSCWFb53obDE1aCFmKaeYz2BNr6LFrWGDCQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ftKDyDquqZX5EKMYmiZuGt8VcR95BMF63pxAKFNmEACdyzD3gJvEfu1tnPh7atXaBs8fhWt819VkD6QDw3G18MP",
  "key1": "32Ca7LbhW72XrjJ7gzmxBSdpRQJHcMphqBAhAM3jx2voBdo336bDuDLyexMbdnWJdfKciXFkHF55uc3Hv694RBjy",
  "key2": "4M1eA9c3rH9wS6cWpxYzux6cNK4vJ9k4bhjVNFw58jY4BRaqJ5hBLmfy4nyahPuYe7DwTk2NGXYrS7HivqC83Vbu",
  "key3": "TVbspyBnQTWr32jMSDsLYHnj8BidSCxjhdPikZBFXd31Ggvxv9nCww6i2MdqE7WLPLxKb36PpffvhuWr7kcVLxd",
  "key4": "5GTE7RMnCswL73yJgzwE7gcTCLw33VEngTeWvfNXKGYdP1Aeem5LsD4sXs2wWQCe56GAt6jiyDqKCdEMK4TvRVWt",
  "key5": "5Supm6jHHyvbpay2XRfazF9PVRTS2v99gBk1E3Aw4aATQvLt5iyF6XZqpSMFb5gA4mW4QR2USXeycJoSwdVNN7Kw",
  "key6": "4B7Ycnm6ohTr3wUGmik9VzGjkgt9QfBP3wbz67jbt4cPSMRuP3zMVwE9LC1nMSXQ4FKkRWcjgoQ7wi4kK9Xmd5P3",
  "key7": "2Rqsie7HR5oJzdF4cDk7UrvDUwQVaRwRp1TL5GyVakAZMZmFvqByV5NK3nAFZWfCmLLfkY34tedRM7YwoL97HGh5",
  "key8": "4aWQPDxd4P6oLvE56tDJb3EW3UcCQZB3spAvsHGScsJnLhVsYNr6MuwY9ZMJq4mrxoDUoUXPmGwbE5Fgb9uM6art",
  "key9": "3GBd5zoikMdavqydce5VWHaxqWAy3X3JBGoYmjXYhrn7RK1PqAJmM1BwLCatsjGCcPXMPaZ1DzLkm5QCgktYtFrh",
  "key10": "4uN6SPeKhqh5syayyhUsVSXpnqcazxHrGMd2Nuqp13K8WNezTNESii7QajqqFnpnMTqiQ8tQdtCTPqKZuScWntVK",
  "key11": "4CcW6UzEsM57n9T4yJsxt5uuKkuuPYC3V5qs2seTkHS5jgHXgn6KMaxz8iF14rSpD5g6rHuD2MHJHhdmBHoXHQJc",
  "key12": "2nrAcbiaSp4XBQX8qxdENcGvNeytAbhCEywRdfcQJZZk9vBpBuHsJvf2MYyUVuSzSQYHhsupmsF9sn2QRLkUWbqQ",
  "key13": "5SGttEiiric3KuU2z8zGMzSCN772b8TggLHP3mjeLTsWVTqHeiw2BXPrWmkLW6BUEcNgvzQaQDGLP3efo8PbzYjp",
  "key14": "54KUpiEAMmmjSukJWEJyjcWW18hwHYUGF9TWgA7GHJKdLckx9XiFsYjhRU1bVznYdfJwQZrePp5zHRZMuMCJtRt6",
  "key15": "5Gxegt3CzCz8umYmZnMUgyNjvudHmQgBmjWsmjcvkVG5uTbHkYgZFjkfpvsPhAFeiBQymg5D12DRB9DDB6tmjZS1",
  "key16": "4cHrThQvfEr8uALpwGvZbXikCgEQLdy6eFJaTrV1DSdUmNGxAhFTeCWg4oxQEJFRQR5iiHLM3Y999xL84ttELrdh",
  "key17": "2QzXCrHcdwXJXonSqwmGuSRdVKpLjC9n7sTSZxnco5AxaJUuM6UYCzuXAsPFvmH2oNpyKQtW2kqJLhFaYhjdBz3V",
  "key18": "5Gyyx4mF63wa71QRMkDKMw7aLtp9JiGfbexjuXHRqU8KRPjuCexagmgnFxnWFn9Cv8cWp8rDZtmpZoM52YhLNpLZ",
  "key19": "GY6mXjivLfFXyTBnqrNNnEHKhDKrF8hbYMGCHhcGZYoKFuZS52yH4LshA8kzLNS2qWLeZJVxoTWbH45U4xNwLwr",
  "key20": "33K3pBD7tYZuAtPvWyYFLbr4rz5XueY3Exaw5B5Lqk7Cq7jW6DKih97rjwzys5sTyo5QnodqsMgmcDjRScLqo2FR",
  "key21": "4YzHZDcoby8mY3VHoyUDkKxtE95BqB1wSCmTsqKb2oipe4kruuibV5rz27eeMQbj1Pp7YXumZ5Q5y6guaucrTKvP",
  "key22": "63Gu3674STzx7D6y4BTVpeXLchDj7xSN5vWvJaABxRPxdJJFDQksXv1d5GkC9hraH3K9yZZS98GnULwMUoWtHVCP",
  "key23": "2eYBxYHtVTy1rsgjyMP1szFLSSqmN1kFwvoGDAUduC7r9ug1GS5RazYzpxqKHJ5xHg7vur6sYV9uZ2nQ3bBYZ1oC",
  "key24": "5gD53SXZf48rr7EP8sZSbAHkZBiZS1xQ2q79GWB3uSLqEwcjmJ9ShMKHfnDoyeVKmyXv3iDhgibXEFuDjHJZsLyq",
  "key25": "PjeMBt2WdTTjzDFgweHC1yNeR58ozrk9xJzH7rzCjaSMwbc1eH4NCcxaxNFfAc3z4HCkhdZKuAPwwZAu3UUa4Hj",
  "key26": "4zccTvwHJggVyMKtL66bLdYEtxkuzNkKizJJJf71NQEqtw9tuFdLdTQva9SeAWLPnPmdDUCNENveoAyQC1Za4VbM",
  "key27": "3fyrtkxnYerpKft1mpoUMvntU8A4Q9Fcga9N6ZMmaVGNZvZmf6vzjoh4HuDymkyLiBcs4gtTFi94ffFmDyu7VwV",
  "key28": "3TQ3RQo1DY8T2ezcaUHLEjbWQud8QZVetxqQMVL89nfGnHw8ngSj2kK1ywpckbMdtXd2qGVth1Zfdm4NVTc5wp2k",
  "key29": "4JbAzXYFFFeBCiKnBmvWC8vyRhJq8RRPU4FLDJ5v5j2inXhqmRYJpj3bEePvk8pjWp2hQWc6BhjgFvyYoP9iQnsT"
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
