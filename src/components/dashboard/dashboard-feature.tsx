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
    "iQS6VTwmSU8r7GeRqNbAojqMBXRMkyiekaFy2joJquU3m7xGCGey5iuMfqDpk3k67q6WmQcFarKrxwhCkRsyw2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bFcuKCJLmgNUzPi3MXxc7xvPZwfgCoJ4Lmgu78qmrbPqNoJZ5GpM1NF4XSjqrPEBq8uHEzLZHZquZb7pmijD7vT",
  "key1": "4veDNVuMT4cZnzDq7RQ3dydhxhofcnGYLHdWDvEZNMAszy5zX6uRMkrY6HDE3QrHDwjuZ1oR8K9dseKtjuw5qsSc",
  "key2": "2r8t7ZXcovtvwgqShnUYNcbzFQXXy56xHsJU9XoeVUTJiAH3BgLE2k9MWEZrwdhJZLj7JNg4hW2WZsEMtVigEKAz",
  "key3": "3LcD7rM5WZaus8LFjgtkfAFbZ12nt7Nen31fTWcHoXt2XAikQLPDtw2Yrmg2Six7jr2KQhEmS9AgznhULQCDGMDS",
  "key4": "21rgeL97Z4MwKMzRzpKNQAxQVmqn8boeRWRWM2GG4UboT1YAmkf8TcLQmJwbbNND6VZ9WhJXtsTLwaAzD2phhe16",
  "key5": "41kW1zcsxExF9TH6G4BKsMQuePrx6KGnEkdELCR14uG3gRzbmxLmLBJW2D3jK6bqTBA26zix46umSLQLUM3uKwxa",
  "key6": "4zLvzapsGa1JiwRaapkaqGJRfBgE5TexrZVCyXW27dwCQv2vn9HEp9p3LLyevFosADpumF5ffhoeTgCRhajk7dax",
  "key7": "3YumbnRHtBS6LkCPUhQRUctxLKq1AcgAHYCFFh8NKrHSboLMxm3EbGfQ85XJ1iKpxarQNNakMAQzRv1Wxe9edFh",
  "key8": "5TSsSVWkZc9dTyAKfJrox6dF3RcQ6A1BmVguETN4UM4cMGCxr7LfC9ZQcw14WjpFv74bRr1LdMHJCdmT3Vv3qi5J",
  "key9": "3Q2doAZUqAWiAAqNwieCYn79t29U6gTgsgAMk2qLLjrw6MNNsR1f9JvFY5r9ciMqRMoC6bWGAY9dfN8hR52jKZEF",
  "key10": "3HPLXgpkdBMhuJFhzpPwfBWeweCsmQPv7WLdha8KesamPY3REmhZPg2GXpuLpT9iw9ZPziFc6cwCmgk3HC9niaxc",
  "key11": "2A8Fej3y8ECgccVKKk77HQN4S5KQ1fhfEHVD8QQ5xvtjE2feg3XopBArWzr2u8PqRwPF4pEM8d2fNz7yWoU8nEtv",
  "key12": "8Z1smmuN7URg6u3HYRS7kJhZUopaExZD9LDRkr5tHbc6oAtbRCe4NLs2pu1YpZwmeMWoRhB5qxw8hxuquu6gfgC",
  "key13": "2dDKuMN8TCiQJHDToEkKUG31fmX7Q87QRsDYbeX9B5Bcu9phFBad78MDvWrut79iA3iYHa4du8uUKxnCjn44KCoX",
  "key14": "5G3bkG8G7Mo3BEZAix862W3uAiDrzbBzvNaLwzWWgjAjVGURiXpJtep9teyghHihLsK4uUYror3ewnxmGeDvsFbq",
  "key15": "5XYb8WMrnRA1C7s9tfr2RMjqRRzCGT79fEU9ukq39PmdLqHdt6F35mA3HxE1wTvVZABdhaoxn8fcfV16qbsY6f5",
  "key16": "3pBCRbByYAS7uj674m5p9XCbX5EkF4BjjeyB8rRej4hp6eUHzjghCCswKVvPZxcZwEmwgDYN43jkc7zNfTYnGc1k",
  "key17": "25DEJeZqQ4Jck9G1ocsoELLgaemefb1cJovZXYw6kxPjzbze87LR7zfDRG8aPDcQ4qFpfuGx17T8rRHm91CbF8yZ",
  "key18": "2fk9mBqdgXLA2jy1aDmqokmgH5wVdZP1St1i5N6SUPLsDfrLp4DrwnSTcBbYMMSu26mn6pRztc8vn4ZnN1e4jhiZ",
  "key19": "jCC5WsC1pNWZVx7xfVcnvST2qQxnVnc6pMiWbzUFRXcwZq9zoMBjb3SUopGBifc4Ea7NLTKzpnsUUgf1ZhhAcVv",
  "key20": "284kF2foB7R1jJ8znJnXF8UCTXv5VSecm77BicA8Qddwy75VKZ7zUKb5ZfbjZwXCdc9r1kqPXeEQYNr3rd3vespL",
  "key21": "4Yb9qBjTKWXGqZvBg28pALaeCGAsJY1fTCgt6GERmszRgHdS2138PdN2qNKure2ygtGvcnbcvuQep2BShmqBJhma",
  "key22": "2gEdgETeS9cwyqeM1ShUDzikfAMmWidSM5jAdyMpeZoDc8G26sLffVnG9uhWipdnooJp7Ag7BEXjGSwfmBEDLz6u",
  "key23": "iVqPL4fCgovPxApSsU5NrCa7tJ425pNTtdrwbLi1RYXxJGJdUP4JZ3JV8jC2eK1vSfK2WumfWDNx4aUuydnv1kJ",
  "key24": "2qyGDEtLFxQpAJMQevz3eFm2UDshqG3WyKXstvZrfdXfJazTdZ8p9RvhQk29C87bHuW2JRrXeThVgfjwxQWuNLrH",
  "key25": "2y9NEGMfir8PAFghy6izGAcPbT1SsoKWjCcG1QPZMp3DUbejVoFT4QnP86shRZbyKAx5HrBNGGS1LU8F4fkzjVw5",
  "key26": "4VcYxEizvD3V4rtXKatjcLxCth1u3bYynD2a3GtVBkuMHq19ZEZ8ENzZt6VeYKRY2XhDxV563ZqVqXkWUn97qJwA",
  "key27": "5E3LcCVcyVRrHAe7eUxX9gqCb22SJYyBuLNRa2GaosYKfdHHsH45pU3BmF3gamM2u5A8FFkAx8cgLBEsCDzif2Hx"
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
