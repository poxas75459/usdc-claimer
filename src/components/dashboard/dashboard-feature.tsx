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
    "KAf6ojhLvMcL9pFRq2PZtChQ5RzBoaQQP4VqP5voeAxxAT1TFSRT1e5wMritc83bNtKcNMhkgx5HRnALRFf2HmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vRzGQofBUeZuy18CBJE4rNUALcycirEV2J6dyUg2cXBoZmai6ybJV9EakoAH1XLqoiNb9a6u76imteH33KvhPoe",
  "key1": "2rxYkBD1jZMUhUYgCPZAQYtcZdqkeWpmxBMJH2TteMXFyV9kA33SEXKEEXeeAbEYd7yxFBf12rzp7H6yj9662UxJ",
  "key2": "3dBDneaUYYBtKMUECuGQ6cv6uqhVXfWhu3XwgLfJrKsuyLfz5RD1gRyC2eU8fQEqtCGn2T4K9XTVjske3BGDc7Fo",
  "key3": "5gga2vzep2zY5e3rEwUeFx8x4nBFnKmVhz2X77rGSrVDZEy1LGxM4pCPPHvE1zFtMvZQeCNCmUnYktZzxVLzdyJ9",
  "key4": "3xgLvJhDiP5YPQwPA3gcfyZkcZX3aUE93yn25viHS59VmrhTkodZC53XZPHghxBivjELUZYryKnUgH6oTWZN1Jen",
  "key5": "4Dhnw9vFmgCMq9UEjuk939LZh4UapXNab7YddBSTBK2K3UGdR5jQgPC1RSsXcK1hkyyUYmwGpMDJuExr2ZiMbBoa",
  "key6": "5NeEG5MrwFivQTs8t2i963ae94m3SjfSSu2bh35EAVzZZk82hEznLwzp9rpxoYZQZmZDNoJddZLzDtYxRw4DPznj",
  "key7": "5yGUpxR6pxpkz1r43Wr43uNDPXtFkKqgQ9eYko5FqzH5wn64NGbprBEKgnfPK7yvCpmU4V8B2SrezhzEPqCTpX4y",
  "key8": "282Knz1MygdE9eJKCg7Zp6yEWV5tuaj6bB89ekwEga4RiSDejbvJH5CPn3N6kscas1MZGsX4n1LthD2aFbgGhgfE",
  "key9": "2LbARg9YHXUhhEriGmByjiywM9k3Fz6YZh8syQzoegyFZAA6jA4KR1L8EcnAtTmP2FxfwkGTq8QYbiuneBCjgRRZ",
  "key10": "JZvMaUJ8F46tR9gw1hjGHhk8ALEZbeSzWbNatQqYq4Kc9QUyoL41Nx8RbTsHUpy499a3AczAPU7t4ZNw3d11Vfg",
  "key11": "5m63CC327y3epraYE2VmzjaVoDxmy6aJ6gX4RpmWDpBY8yaGLJuiDaoZevSk3haHgFACHpJhA28bj7h1SDuwBUHS",
  "key12": "2MN7kDkYEBCk3qc1beLv6NmfWuZrvVaWfuos3V1Aiuu2bUL5tzVpA5pTY18D1WcaGtf8syE1j9tEAr1ZkdyS94zU",
  "key13": "5BSnYFj845eVuhhbZtWVS6YJDzNHxF7N44duKtgEz8zJtTpvsUXicK4un2pMw99MS5bj8qBahF76SbHBqUvq9xFq",
  "key14": "2UPt2QaYXLEz5jW8SfrYFZYA1itymSYWdJSEBcduFCiuv94C7v5qbbxTnsxgxmbYHwsE6fuy1jcrbW1M3SovR9Em",
  "key15": "3zsAs7mXSdkYTF8nbT8JLvq26NSRe6eJ2Dh2REUn46drXmRtPEMxnuV5cJxwAW6Jvq8GMNoyktgGR4nLiMQ6iTRS",
  "key16": "hB9k6BvBdKi8L65gCRTU2WUnAh9QjfFqi3JeH75ySavqK2gUyxSyTZGzNMXTamT3FeYrCC75avP9EG6PYZcn3W7",
  "key17": "3nyndSRHyyP557gDJNw1MSPgRP1wtDdsSdwpgBJHNCVtg86ZTB8Cg9gtnJ9miXjP2tEm5dUu8RxKPtcfS2fVn88u",
  "key18": "2vhhDpyAYywj6sSk5CRE8QwY1tRm8KEgKBDu2aeyZf5YpCa7EQEeVLwHvi1LAkUfYAhRCsYYhCZRnZzU6JqDxJUH",
  "key19": "62oZHJ3GTW3eB3xJ2XrqZXp3C7ydWccaJR8TMPVkNLPunkHQGfdxEy7EBUtGeCbTYKnzKdTPrsAZDJJ6ppWtF9oy",
  "key20": "2wWDsPboHxCxkVWuxyM4Jx27j1KrcsNY21Sn2Avpsoi752PkaYmSX29K98eHsYNA88mzAy1vz6sQjyxa55HW6idW",
  "key21": "44pBfBqV4XhYArGtxWNHXt5Zy13FrFt8tLeGbBTPNGbb47BUvPKgBhGWDiuKW75k6oJXD4uhX6qHFkrgiVHAjSMN",
  "key22": "eLb7kQouses64DRz45cyUTqKd6isXNRABhcjjJbsxbanBUbeEM78fYYPAVRekT4HL1RrvP8rtX1B4jzRzJyHnPB",
  "key23": "5PTWibrT6WSuauQ9wrtRCj5WMNDzUFMwtKbZrUaRWjzqaDme5t7nvWLpsfgBWEdWn4g6M5sSVYnZNTA732AtvZP9",
  "key24": "62rb2sDevTgt89AvWEBoTwaRFVFi76cqEr71sgw1J7UWqfaWSig7kfo4GHXQ6GVuB4dmwEj6q7hDzGFz71Ehfdpf",
  "key25": "46m7P5XKZYcNUVjSEUdcce1eSyLvRKNbHpWuMftzdBcYGNPyVRt4FsgiNmgSVMb3EJ6UmzRbknCApyLXy3XkebKi",
  "key26": "cvQ5mMYDQbYNfXDGQurTNR7ogD2JtKjqYURn3Eaz9fc4Sz8CsTVvjZ3M58KVUcUf8YG2ySfc5mnUFrUFpfGcX61",
  "key27": "5HbhgvnDQ3uQHdqoyQjQLqKcdWvwrtmpLgS5hGijcWFQuvZaFc2dH8wjMbTHW7dEo8RbCbrqwVaLzeHM8eKy3c1X",
  "key28": "h6Yazf1McSxSpxMCpwXe8euF859SsT8AkzeBj26Bcw5ynVN6xSG3okDSzTKZwYwoHyUCPd3iCFm8kuKTjByvxRb",
  "key29": "3ZTdHPiusgGzzA5UTggsSGRz5YyWKQcfsRTJnJ2sBHj3bDFSpdSYjB5U6CY4JsLpaeYzKKgZxRPLz1iWYskxxajy",
  "key30": "26cNmTVrQnWK4jJE2E4BuZ2FKECYXuhWs76xgqfNL5MxGopuawCt1Pgbm1GQoR7uCiSZDYhq4K2vLi6BmMUmUfvw",
  "key31": "3bpcXJFEprQnSwHSPsWLNwd41cqndjSwQVLRTCPMf171jNYfB2V3wtL6ncqZBgR1h7wGd1QjZabiY1P28qQQis2z",
  "key32": "5A5eYDZvbn3yQiwM9ts29kXyKrD7oVVqCR8tHGHa2UW8oxfaosb9xwJh5vQYfsShCT86wQLRwdXVE3aV3YEzihEL",
  "key33": "3VWzanYNuatSk8xWCJBnvbfNiz8CsUYpHnj1dLDRT1LLvwGezKPsihckXvRAr221akTgMqH2RY8BENQHHhDwaSpD",
  "key34": "6cKGjSxaMqaw7jXph7ZGpUeQ3XL4uqpdRXxQryfBPEoSo6o5zciccKdcQmhLVSAecRTNEvjq1qdAhqzLD2d91g1",
  "key35": "2wksCVMmPwnR4GT3k7rXfiwzJPRaxbBthjzAYQ3enyhRqRKwLpjoUmAisNboRfbnTJQrzRiZAn9ZAPy2df7mZjcx",
  "key36": "2sht8P8gHe25t9mz4YcGM9kXFEwmxUU3AgszCqpvx9C33jVES7KMyx6ucixgZjuwqzi9disn8vikcDSVfbnatEBJ",
  "key37": "4YKsXLWbQZW8NmAk5cfRW4Mtxg7xJSNcGyp69G26JuoiD6vbDWQDM8yKq4xxZt2qNaMWcP4qERLFWdXeaZVDWwuz",
  "key38": "3cuBp7FT2PZAxrYdm8nNbtEcMTcbX9f8rssUXor5vckjG9CzBaiSL7nQWFHm2zopQCLxmr5ZhRxNayhRvmd3Ky55",
  "key39": "DbgMoKsFos9KSt8M6wgXD4kxnC83jaKqZrjiPeFSmX6CRLLhGub5UQG217tWtxnKWMk4JoKz7mbYM73kCJjZ4Ew",
  "key40": "YbmrP9HtVmdtBWg3i8MooiFWCSoAKjsCVKDdwrrsHHXDZEga5MzjCk1oJqJKzyaKgHuv637hERjSqLJCKgaPZKe",
  "key41": "3KAgq83ZSMdSA8MzcuNtsLJhWcHQKrm2ZJqvYoADDQinbwRRT5xtmfDkdYD5oJvR4b42T8hFw8jWDggHK3CgLd6r",
  "key42": "3HE4FcrB2U8839dtB5htXd4RxEMHcTAmqcDZbps5h9QDPY9jRijp69WXBDA7JgKw2fwzLVV3FitgaFPmWprpqF5c"
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
