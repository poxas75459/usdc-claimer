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
    "5jqVuzRYkzevRbH6hvz29zKr4GTrp1QtkdY4t2ysEnHqmTn4PPezMEf5vt6FdHnkpiVaxXei5ee9SGpwcaK341MB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gyAimLuvA6bUCsCgQqVYMK9yEcuuZgDuUDgRTyMjKvbr2xW1p9FetwrTMABuYEgoQT3GkQpT1LFRJTYqfj9fTnE",
  "key1": "5GiBWLz2qk9ynqh9QqXEJBtjYMoYRx3B3Y7gUNWFtPEpdvKzUN9DSdg6HSfGzFCib214rkENfu41Yb5bn2gZjBVT",
  "key2": "4NhNqA3cooyNkVHaouoqYRuAC3uRLv7vghQpx1iBqJVWQwww3Wj4PM6H2DsV1zGwuo8F4TDYJPzvz4VmV62Loexg",
  "key3": "3NRfm4ztEECrqM235RrsYci6sKtZgYAhai4h5Vd3EKrWUU99ZsdSYvoqtpVpHKLqoBZDMtkXrrAc4hueJTEiQ6eX",
  "key4": "3DRCiVaWYcVZLzXNQRCVSzGrPaxjfcYbgv5juVcbJvQr4qwL3QQNuuSqKitYj59vBPgFksFcB8DnWymBvS9QVLTt",
  "key5": "3dGjzuuF4WbysXJvvuu3HehjV7UUnZvmbcwM9bPW9zoW9hFkobm62y5ddbaiR4DXYLUBTwwKTh9mrGBR1FLeoWXh",
  "key6": "3ZfNqYaNrvS9RgodGzLrVab22GboxMnz1zZBSrSyiechxdv6rYHL2beKrePevFYoH2C2m5XNK9UmyvFRqxGTK9R4",
  "key7": "2drk4aiym5pwq2qcQJJmgCnSeJnPqAYqqYSqotAzpvhZxr1FhXNZnzV8VohMc99cYmL49qT7fT9uXr9FhnhvymTa",
  "key8": "2ikrFPH8GGSxe314rKy7dJnNhVqjbgGQuoNuebLKbNRfPbUG5JREkNFGPXEHBynaNo7ow2dWHcTxMpdCvGta4kUa",
  "key9": "4AG6M68xzCPYtyJ6kjc6KkZJcjHpYF4VmTTD9UsMW7j6tJM4QBr96oVwZ3Gweh4NrRcQnA8CFH8rAhiNtfDfvpyB",
  "key10": "47gTCSbufy126ZH3hGuExRZoeLVYp3yhYpndMw7vKUhf7h3wV2Yg8arrVZWtRQzzhqW3EeghNB5z9Ln8FZ7v7bs7",
  "key11": "3wiijzHXE9F9awub2cERJB34FL32NVgccBH71xjayfbDTjVFXLf5FbgazrKeTuGnNiEjwVu17hbxzKYu8aZWvUKf",
  "key12": "XefQhp7tj5KENFr3f9AzKjWrEJ9s6VZUPuhfkPLvY6V2xKWWfrD21LGY8nspdYvWhEqh6uY8jePMXchykAVKKgi",
  "key13": "3iUQtuJuq8HABwyDrLZGsUx6MBpkWbbnq4MHquTtN8DL5jDKag9Fr3eDD6FhLe9UFZgpGvVTK7ooDoa8QGhJsjFt",
  "key14": "22oR2Ku3KzM6GnFGB98dud1LwnAJZWukVEupQm49Kq1TMDptoNXAgAH9SCMXR7Dyf4VF5ac7acvNbvXZoNWCjPpB",
  "key15": "4E5B2vGTPF9tNcvgKhLP1qoXzt2HHCiY7bv9qG2oLzg46Gjps4SWZDUdGXgVeP3nMcKPJpwYS3spP9tczxafiPB",
  "key16": "4JMcwnfeNerwZXypDh3vYDZQG99h4unC2XM22sXtkBgjk5GKQyTG1KB7VxKKFVLcmzkWgR28ttSJQhdd1SRnR82t",
  "key17": "ABkceLnMw9WQ8gVodxZDz8SYMtzXhNnHnF9nXWXWGzXiD2W7UfndgazCZRVg4p5B9z5kvRMwy3Acw9CXNsU6oAH",
  "key18": "3ZxdUuzunm2zRxBnFj5w2QfZv5AC72hM4Rk79LDq4FoiVvkgewTnYZeNLaNRtu6WCw1smEeF36Vms6a9faEv8sNb",
  "key19": "3Ux2t7nwRgcecXVWFkURmNg37v27mgZBpLqFHngYCpMtpjAGgAtDVLx9ZW4i9CkAipyUPYTSYy8LSTQqV4qEM3qw",
  "key20": "22TGfJqFYaXzAErpbZFobKGYtixtFn1cXNZspSK2nCxMvreUvz5jcFswRZyFHcKe5GaJp1PfMKJ5pGXkcMbXg6Jn",
  "key21": "2kARCKhXxNhMt8C9C1r8M2xsjxviDdsk1gkkm3Dt2gszGmACxbGyJrQw8ZxfG4tUqXjpkRAuYdPDBrKZZQv2d713",
  "key22": "4xGQjHu1dymTkexj4J7WBp1RQ2w7WeGPVhuTaSijUfU37RdCZSPfcNAAU6caA2ZrYf46uJcevNgg7zLLYHscC4tQ",
  "key23": "36Fwu2vvvNn9mNJ8tgjbq3UXJ8regH67g1pJGoFNbTeRgEN2DtSq2owi62gxQXnoAjHCzEfuFaX1Tafwkq86tfnB",
  "key24": "1SHccKP1ZxGiadyGFe35C8QSagzQC8NPpN31uWXD2bvdErWDk4Pbh6qQyUBbtg577YWN9FpkgXU2rN6rWaYQ9cn",
  "key25": "5mzTZ2EEHUMKTzKnaWKm69q8nYTeBtMezLRyCbFTxArpmtqeRuAhfuM5VbMruM3CJQBGpqtpBzU7ac1Z9Y1arEZT",
  "key26": "3jYh31rsgqghSaJbxF3FLyGBtxKQsfp5LX1aDgnovXiYLcKhMhEKTj5Jmh2Fy9nvjexKyH4q9cY48fGA6qzdHJNS"
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
