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
    "5DwecHD9RN6jxLuAqbuUyjM1dirXgioW2YtR2DpNx1cqeqeeefuRC63hdR1LK9jR3LqcTE25mqiaRMg1XXDzyAhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MrDM7wqnPA61B86Fie1So7uSEYpfL3KcEcUCicfeEsUMQSF55jTzv6o37TQM3trMZzJN99Gj7ifxTNHjaU9M7Qn",
  "key1": "4UT1Bj2WpQM1JjK71c7ACa7XtWZXVg6dpFnxaFrFmk1Axu5SHvav2nZJkAJ86WsG2dkPU1ku9Jm9kS68FyLz7wFH",
  "key2": "1aqbAx5fyqNBR2kkPb3EPDTZYrRH8SxUa29vUcnLffGLwMdFMDtwWFJrPVo79xtEbtvqMpnQ5K8wKxLZYtDVE81",
  "key3": "5QvpiRabKmkU8drA161U8Dg7NNPC8gv8aSapYkjiKsy2XFvC4CYTKe5JujURtgXzxkZuuSfXPR8QFnBbGjfuedxH",
  "key4": "231D6272SXNtQ4wfMgPxXtY7VK8xm4XDGoekbZAZdnyhU2aeaHEv3GxnzzUdFvzzDHzhjibfGg3MK4QNNeMTfTgR",
  "key5": "4VbPDsAkLA61caS3rbD97FxLJQrWgNAWPFPconjkPUH56DPRB9AVmRKG54SUpkyctgNkQiW9v8k4QM44skmgGhkZ",
  "key6": "2aKhpqCRWc9cf7zdpHnTV1exNmC9Qt9PnkiYZ5xHskdZq28GPs23XV3mXReJ5y49igGpGhWbM5keSa1j3mDEXxDr",
  "key7": "2sUPsZt8uai5oMsQPBhivr5Eg9sNDydgiudVxn8nUJCyVdZZVd8mvjpqamEnVJjiCSGzeNbtxdpcCssVd1Lgx1Si",
  "key8": "sHziP1Q2WRLEc2P68ciXTJ3Aas4DCjGNUMLvYmAiYbmHfCpQdjCjH7orXdJyNXW8seghpwmvpgn9oMN3d6ok5t2",
  "key9": "KXSsSkwSvvy3KqA6FxSXc3AST99WSoEbBqLzXBjr63kvuqaXMWsFpJT52VMD2JTz3QdtEj5a5qSuDXoQZfPLwfy",
  "key10": "3cnuzf27ky8EYqoVMEVbZ9V2KjUBsJqLN2UNDWFgW6bN5NQmYewDf3bZVvJjmEfLH6DWyYQJeytVEGLSQ8tsbUZv",
  "key11": "NE4kBgjCf859sxeyFDwJvnnq4Ms7drS9n2KtngiH6YNm8vLgHP8G7S2MbBCFoXtcgtKvfW4GcRUvEwbJvN33ktV",
  "key12": "4iGa6Pe8JNjYjQCQKBBqTpGYSn2m9vHdrh8Z2XfnN7MgVteDgXjwWGKqEBKaZcVBZq2qcsM3NBKxNzUwCEKdnqhz",
  "key13": "34rKd4dBs4xLLLu2FXi6KBYZRXnyWuorNWG5GJtkKtT4ZHy4wmnQaL3MKUS1bggvKxzfQNNHEBBKW3N272PunFQt",
  "key14": "3KBo8ANmuYfvaaP1hAbifa3VYFyUxw2E2ET7HoXXzpzvz8bf7bG2H4aaemfyLhpmpeqR347dU6YvFMQv5NQnSNb5",
  "key15": "4AofHPrWb7FNgkF8SkwHeeoi9LhBustJZ5btWjqXopHF2tqnyyjmBXHKPstAGHKe9jPEN4iNcv6ADsDMftqG21GJ",
  "key16": "4x2Ra8bFU2FmkjMm2DVoYuNMw6NfXTRpf167aeix4f3NUZvxwHJ7FuUDdm3vT7XETStGXkJDe2zQtgdBU2srCVo5",
  "key17": "53Dq1oujg4psnR1EdZvBTqMfxZcHcmtgrF4E8t8aLj2evWhZdGPWdtS3k5ZBYmnuLtwtQn95cRYMnBhki4EiyvxA",
  "key18": "2Jhb6nSmSMAs9WumP4i3LB1dvwvMWH5diLxLKATNFUzAXoe7ewsuuLvkJSjHHtWigKJ3AVeQGP7o78X4e23MHFVV",
  "key19": "2EoCnpMBZKxrGRthxrMVnDrPmGU8Vv6oTZFx5mU5JfFNmhXVSij7Nqgyq2UGJyKW5PiLiy47EXRQvnmsesYDLhhy",
  "key20": "4sZUEAqwwwY64Yuqf7F2JAt6F53729ssQw7Z5xuTLqA12i1F77nGPQ3didC9XDyaWaPJQGtSLuTZtHfnbbNPCfTp",
  "key21": "4wPHTvXzhB8ihurPE6rEiK9qYPFKoCcqC7YsjNY5XAt86ddzw4RXfkK7GADwpNRoipUorC7pC3gCNUpmM7V9m3dG",
  "key22": "65x7xGN8qKsd1SmWy6B6RnC5CBxFNDZP5kfCBgPkBuEr4G9azn2NQX63icsbnpRS4SUsjFFPW3pHyuewkvXMMeTX",
  "key23": "5HG5gjk3KD4DJUK54C6eqFTNV1rMDzsVxx1oXK9z82oui9WAwtWgbrumNULfnCga8qceJZosALiMBb7wZK9wJhFV",
  "key24": "5cgpPVMmqiKQspZApHR2Hu5q6qhRqJ3jYpFMKnvY4yiUfQ2agXswuD6RZDM3AMjyT3gDNCADXQbsCNmL8iicXujf",
  "key25": "4JcCL1U2hKPAQ2N5HouufW9x6Pk8s6s3PYxn95UBB1zxH9k4oAiqmNStXLYG7zRgE3XgfUFgMABmxN97gkpkY4Ag",
  "key26": "5wkxCRzrSvHS2aeggq74SRiNmMCKkgiCoAqGyE3VyzsapkkjR5GsVnS1o92ymC9LnrkEtRAfTmb4BBqaZHfFwBst",
  "key27": "3Dz3RRwdWNavLkjKN7yAdWGCPfdEkjshvZdjgomFprEjm4Cx2Tgku9yTyEd4Qf4xaoqhSfDuwqH6EFqPQvAc3u9W",
  "key28": "5XsqJ3cjn1hdzjamfaWZk84DbSE5Th1xQEAiCb6y5kVk9mCcW4Z6mzGAV7PH26gFVxPPgKZZDxfMK8yvNvyGxBQa",
  "key29": "dp5kG74hP6eo4ZGQfGbeu4kVUReJDBhFNio9jJyNwyuSg59kgVDRhTpHBSd8z6CdvtXesnV4B4JkuqnXr7RnQa2",
  "key30": "63LP173fwSbv9B9YLQhkTpdWC4HGNbzfFwv2QrNysDZDs5kYsoXfXk9jYi6duvgaAoBSXNz5Hj7Xrmhwa31mjPJV"
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
