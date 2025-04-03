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
    "66EALR8R1oLWzLh34fqPDvaXq9t4RpkqedY4RyuU6e9FivV89GRDjDsXsVAoBoXSmSirXE12SMgRrnepSfMWW1Mf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FGRyRvj9tC8Gck6EzszJN6cJizQTHmHj69obBd7UARPXMMQj8PppXt1eESZBnFAz2SNjYkg2LYRr12WsZW4TgPX",
  "key1": "2BVk9kAP83p27DErjrSWykN3KStXDxd5qqt8JdPa4YQsYzcS8djwxE3t7dMz3mLEp8TpDJWQJ7cFL5w91pqzcvQ",
  "key2": "2axu6PAvc7gtGceUWEMgiK5tSjfraPvXG24mCz72iAhuDbWLiZoBseRyeKPG9zxEGkK49RgP9tx4yh5Xyn1Qgn5x",
  "key3": "5hPToS9RYMjw8LkDcaQ63m9ds3vgjGRyKWt1a6sep3EbdBZQvzCFJoH3Y6TZJ4AgmbCd2QthjcwfkPYcs17tf56f",
  "key4": "3RaBu95UZ8tZcyhF5vH4dytE3YFtUYiD5oegEfX1vrNngLUH1EX2DgGj2c7qp6mNp3YQcXSRx1dHtvcXniQoU3ri",
  "key5": "57wesUfmANyEGhNmCGicvxru941PCzaFp1hK1r42jQuNx8FG3Yvr6YorAXKBEfuaxzSyRJVBYDAPXuAtuYAabRPy",
  "key6": "aurX7KKvfrBT4sZ3T5iBmSVChf2nEAkbv7iaRDtB4hZCL38gsGsH6EWRE5UJr12mXmNRTT6jKQ3Nr5ch5mrdQCr",
  "key7": "5AYh9p7RbVwL7rWWDt8xXpU3YcNyfWdHcu2ZE56sfzhtS9YCSUWarw9qyiU6A3Fv5i5h9dG1aQRZaFQknSv4WbW8",
  "key8": "3AKnEALg6ECUW4xwkg1CwLNGqviNvLNq4FMSTXrp2H5U5fSNQFEJPPE5BPEErUgV5s6ErmqN53zdaTjdCgAngMTg",
  "key9": "VqJwknET5JRD78jbZ2RqCtTkHKxZiq3x2iJt7uj2TkuX9gtkh1YATCAAhZKLFMLaCo1NL8xc6gu2R1UYdrNf7dm",
  "key10": "5y7yEnFLNjdxpUaZVGoXFjj8TGKLajBVdKF2ECG1PQgTRxKxX7MLpWyDkxXo5zkeJusdnwUTAQiG9W2i4nxH2ET6",
  "key11": "4VxRdJDPDHrh7ySgPiSu8qeXVDXdaYETdc4H6fYg7io7bNTo4RE3gM9uEJg9uD2UwyeaaRT54Buwp9CNmnEqvQzM",
  "key12": "3YEcF9QhXZmsKbuoPUVETJKFevSGT7dqvxqcqFgsc8rvJ69krxyMfvg2csakMydJHBxaKvnH2bFjrUkfAgQTPKgs",
  "key13": "hYR8fAha47q19EPKhFGipdHa58Phi8XGV9PENKKmXD3P4nGHji8fsn3K71NKxEPQr1vZQxnfMG4oSX2HCyi1PAs",
  "key14": "53fhK7Y31cYz3dhi8JiDE8NfcEdtFLP2TTRFY297CFMRXKRgdxHxCjqsFfMmMCMwu6eMwBNmHaW5bCTPpRAr4cdM",
  "key15": "4tSBCXRP69PaXavVVVk177wjSsrHPUQef1G7i3Jrg4aXHbGFoc6rwmU66bavDGpMTHdhC48AqWBwKwLGiBZdLoaq",
  "key16": "4mTv2avHFbznspiNKQZwPc4vCXW95R8QKcUg9QA2Xhe8N95owdY4qVYwCEbUUJpGdrtUMAskyooGJwVDEVzA4D7P",
  "key17": "5qcuqTYUQEwozrErGCBNnmjyJD3u841vqTFTL3VmxgFZst6qbnSTLnzaSkWkbLwsGww59iKDWeD2WrEBiY7XE8Y3",
  "key18": "5xmtzvc3AW1gUrrKdtABtEJqXyTwnGzDpTJbgiL5SSwKfqBfEUHXV2nt7Rdtk2cpEpbozYjUZumLzoAkbJ4pqRBa",
  "key19": "W9tDfYzaPaYY3aLoaxXXpWaieQ8HaRTtY9EBKhnvnwP2sT61VDKx7d4mAXbhQskFnFc1QUJrV2XQerGXmEzyaxf",
  "key20": "44Br1Ex8wkCTAKQsE8ixiu7XtgWoQiogmW8W4tAZkqH418ojiBtdE5C8vMD66jPCXByyvEgetPxpo2Pw2j9b63F7",
  "key21": "YJUfxQpAuuiwv3SXSXazDxnh5TTg5MYQsdRqxGEHgGRxkV3FVP3LrbLHiN1yUxis6jNbjReQFjNgmHC8KzRWRUU",
  "key22": "3kbWDCYHjtEXfwKvbbi8C2opa6dhHj24MVB2khCLeAYURvKjLWfng7GNrWD7LMWtoG92Sb5iopkn78iUXwNEsJgQ",
  "key23": "5Vy17RJG79VKE8kiBsncLe8RvjditjufhFgdSmPAR4H1oEZ4tSRiiWXUSntqb6FMLVGxu7ebwKtMad5n22dQvwUC",
  "key24": "4vsonnEw4Hf25wUt4M3zB7AunECSRk5byrDWyBQeZPEvC4VBWhk3QJ3DdQJem54FhGhZP8L6nUDABwCFsVnAcVx9",
  "key25": "2yib7ycr9pVX6oso48jtKr9FBYoGNfkhcKUSEDeWnE7bYcxoUfLnqHtGqBKnAoRWdSSjHdP5aExRoqWoJQp98mhf",
  "key26": "Jy9BaPuiUzxQQkEMHia6YYLDiaL7odkeyWpX2kntFpptHWKLKmHQ3t88kkQ2yFK5wqYiLtJbxVkpJpuY3PxYDjf",
  "key27": "5WttAJa1c8WUGsNtJc9LBdfML2t1zHnAGUrPnnyuXMCEx9FojMisEPrA7CwtJMALjzjVRhxLvjFs1BTdZUg3oJBA",
  "key28": "4FSY6fSpvR7gKY4xt59wCHDQET61A1gANRbFP1H3RBjYiWei2vHh1fwHJjtaojYKU4jNjkNwRreWTe3vjpTu5ufT",
  "key29": "4jg4iuWZMf2ot7Ur451Hgfrt2pZJQF2pw1YCQZSBmwckvxyrrhZRwPx3VZUmzNbpUGkYFAkDQ1X5emsCGqVFHGDU",
  "key30": "3JYX71dXeNRcRjqtDVbzX8RA6pxFNx9ZMXfntgMiznA6psLWhYZNMEWPDFWWeUG8mwvJvQZBDzfXNcB58345D3LQ",
  "key31": "3Xk2R5pWC2MzoKNh4XnyA2CKRn6pYnbd2VNyHjWKYsoczrgMV6oTK7cKCaqpF9ar35N3bWK4ChR7nMSw135PjQ4B",
  "key32": "2Z935P5Xy95uxNJmYtodPxKScq46d6fjbM8nC8EPP4GHoAg1PsnA5tuwuG9wY9JLcJhexqvarmXtAkEXVSjgmpQC"
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
