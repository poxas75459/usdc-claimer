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
    "2KARSsXMRHyH64rm4v3ZXEi3ashfHjKsrVMyMSEPwMvPm4dpy5yuRH7CsuTd6SNcWx18DdCSqPeZ3Yd73Yjn4kTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AK6VLvjxfXMLwf245nyFgn3HGxKYELYeAGAg4Fc8EcP9N7euQEv6v6fbgVQszVxiZTGSFa6Nzx7mRbzbV1og7we",
  "key1": "2z4PkCQpwA54ZRF89LigLvngv13sj4gYeiThJay8LTZR8W4fV813syu6dHEouseQLuYEh5CCmCGLwd1tBRT5AA3G",
  "key2": "BMHV2spBspJC77fGof7q8cn5zYisu8RgZDTgf8ogsNo3nTR1yPWAL3qEmyYK5ZfDFZMYFpMJpECdaNx2GoDAkSB",
  "key3": "4mDkmjh6YhtGWshbK8fB4LPu2fiAUqZmMFiu1dMnhoXToKmgQHib8ozvyZChsXXfLhPh6ui5Xj1BNJW7HRPXn7Uj",
  "key4": "2Zjg28fMbhXPNZ9AXwHGoG1kMqrd5JiSbp92CRyQGfp4auvFtAabc6kpZ4QEhrxq59mJ19mkNZhEjEFvJYTXABzU",
  "key5": "2uSVdBdnAdUpkvt9jjTEFEnCTcbkWyjV7QsfDrdhsT5hcBczqb2a6ha8bcs4xYjBZSvpEfT8KooxFk2yEU5A6gFL",
  "key6": "3dVYm9dzL9VXuZXVRVr1W8u93LLFuWn2cNsVKHkQQC5WALShWH96E9kZwmevLQh29fNtNDeXDzT7jQFPYct6vqvp",
  "key7": "pSXLrHpuxs3g2kaFGVDzU8eTzZixpiU8iCdrh2dqLBpQFVPtLsVrrftGQy5XZzScNEHSeLjvQna5XdfPERapr8Q",
  "key8": "4uwmP5KUw1zUMJ1f1mHAZZpHbhdBoFAdiV6kUwd8enZuW9WHs4D9jzx3Yo9JF3ttDgnjCyi2MQN8n4W3PjT8R2Tu",
  "key9": "3JFhtByHega3yMMDxn9gQbrzkmHtQYFmmkkB8tRgnEa2PDw3c3rg4cDn2JMA6FU2VN1xhTbLmd52jhAkNg54uMu8",
  "key10": "2Y8MzMQSwdmvvXVQQGVCwdvpwpbJwVmUR2vURL6M7BRxrCXXXoKbT3GJDzVGkfLaFKE82XQrAkq8QksNChWpc3RL",
  "key11": "5KaBpoicTTuSS47FHujjTW9SnGUJSJk5FAFy1EEPWZRYReKXLTdBcERiXacBxLhr7oBvRTxuoeB45RJrAQex7WKB",
  "key12": "2isQ4Lm6ijHB6LjzmoddDYBWipBNbSk6gh5tgxmB4ATpDxjjPjiunhSukamR2DWhP4mi5roodFj5ytFxi5THzEEL",
  "key13": "2EqnDNhfAotvBKafsWzdSetU8zK58bWCLJdmVnbGhAzoUvDE7FJ9yLWgVeuorbiBxrPMFEJ8EbofVh5eJu42E6KC",
  "key14": "37UknpGF4d4x4pgHgSej22PARhRYLboeAJCWg5Bu8TCFLBESXW5PZfWk6VsZ9QZAtJjgDyjwv8GSJJiVVvVMTkeP",
  "key15": "2aRyEBS74M33foM1Jqjh543HmQ4HMi3RRbP4CQhmt6FFtxNChR65ns8NcGDYTevvbKY8aQG4G82cvK2AohdwdSH8",
  "key16": "9qdGRCeN7sy9pydvRb9qXErmafXDNHUposFVVNpznZFCkiuUzqnCxKStoLaPx1YpsngW79vD5R2rRcJjchZV15Z",
  "key17": "ii7QW1orXubg3hwVjwESCMuLbjCuFU1nmgf4L3JsdM3V3SN3zvCneXSUYu1tni38JCm836BadzoJ6uEvrSd1XTR",
  "key18": "4aHorXbzGs7WmJ6WAxYk5VR5oQZbMfYrLKpuwJVknh1NAPzu6JwcHk843fAzy9WoU6jdj1qc1r8auWfhQmWQCwTU",
  "key19": "2GVM4hAf21PF7WRhCkTXe6hXBDCJRdxXTmLacfMNPP3zPY1sqEsNfvEYBynA2c4cbrSjkEmFBNpCipUkSnsxqkUT",
  "key20": "g9tnvSxEir4RkrUaXmGSgKnfbjuUimTcPyhM3jDGmk61RA8cENG1HR3yBT6MJASXiJH2Kx6sDqb3WPLUj1m8rmM",
  "key21": "5msmoHc7SjXMn4MrQzKAnBAsp9hoekArGtvTH7ZNJGk2KymeM41xjXLjMCNcXAjmw2XmP7hxGJghnzZo8asRvu4M",
  "key22": "5qpYdU6cm7MDo2ZWgMwrMn2eqbEXgkvysFhky4iPr428fVnCBSYwYwUULPxpjMNvDQUNWjDAvscXzTrr91SUaJJY",
  "key23": "38KEGK3cpzjPisjWyTrLK9sEx37G9sxtbvzn7tT6cMfyYprp6yaaN84FBENqAUFwCQEozdzKKTqXtphM4JfyFjXe",
  "key24": "3KaNr5wb6X5eZewiqoav5GvRuLi7xsdc26xitUvczX9TNxJox1ti7cKbxCsWWjzWzHKWF6qYkiZUqSfEZTfRxtWQ",
  "key25": "4RovneAvyrpn4EFLsSK9k7DwfMk6ccFgWz8PvWMF1kbFDCL6Ak9aTHagiYqL3y5KQcangYqdoKgJv4hPRdJmP7zE",
  "key26": "yVx8EjGG6yETbvegcyrdnRGzrVDoP4uf1fwGpKNhgpY5q5dS9mqfnKLkUrkqwRBJdpzfVkPtA1bR2P9M4biMfsB",
  "key27": "57RQoy6PuSyKTEkWpSvrwbL9jdy8qQRHc26SYCmDN8yNCEJeWmveZ7vFcNrcW9uvF9XaNzWyYHA5frHr75QoX4AV",
  "key28": "2ZBJ7QShpeKKZCUsTfnNMHATkqRDUm54wAzUg7P3FPL6RgPLwfmLTMqrvsnFYvTXckQv4JPyT4Mp7GYTo2JonRaB",
  "key29": "yrVA77cPCGCAVs8pdZqfLUcU2hnXvVdMEUiN6Wmf2bvQtFbsvDjp2hquiBGxGcwKxE2fuUSn6CRUfghbBvrmbRc",
  "key30": "61cxBot5pH8zy4NMJUT5dL871VXjeqQEPfNxJbYc8ZCKJ9jmETvUnpmmh2GDPTn4Utb2NT69TK7zKE2F2Q1tEqK6",
  "key31": "4rFEf6t1K26MhtwRGS6SfnyMNBjDxYjWoKHLBbgqa5N61UTfEFWd6TaVze735kGX8U4ZWKrXvnx6AyPwmBTRYhsf",
  "key32": "3uoRTGnyoNUiyVYgWa93sXt8snXGDz3CzT8PTsnGZASP6oVvznemp2eD8Qvrc12XSBhtSHAh7y381GJZ6SGfYju6",
  "key33": "394TTA2wAhDuwvhJS4RV84yi8p9RG8tKvvbA5zHFNWzGq2UyHgZ7xUJtMQ8Cm2xCsjqxxMy5GgtJjpDQBdCf3xo1",
  "key34": "4NnPXpK9RHyTH67iZSc4v8AyRhNe84kHw2obMQBJZMzCyBpFsx2GtmRXeNbvmqfs6J3sDUxJ5RXqiS3LaCiGpVHv",
  "key35": "4XoMWcZ1Mnw8hYbR8jCLVCH2x3tV1bXkCeb2K2N3RvMVQTnVwkZHgNoNWSExdF3D8TG3vg1MRFsLrRsACimwrYLJ",
  "key36": "4RmPvm4BpeBAqLW7G65JUoAaTcxaafkotLwdQkd7Ff63637DPQnSNUtnKWwQ5UKV2GeXq8UmaKNcXn8hX5PXxJRD"
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
