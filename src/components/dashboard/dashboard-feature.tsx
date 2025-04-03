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
    "2MgDcwJeuitPd2jZYsXZEbNZU8L6S8yT1yXc5cDiEiqV4SHXJNf9cgBew6D7DtCMu4ZGENEjmu5wRb8kWsQp9sYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jTyaK1Kagy5GoBqytEvjxz2Qmy2dNUFNx796S76dQqng5aF2j3q8hZ1a6nrE6zMfuUp6WNwFq5MzQMjo5GZpqPK",
  "key1": "3JWLRTf5JSvBSWMZhudoB4HG7B4aW5QuYaDkRkbqnMrzh2UKo8ZK5VQJJm96Rc13bMGhcfvWCWG17fSoM2fxLFbS",
  "key2": "3A9cnVoe3pAbAC2cQyD8ZBteqCphDCkpgLZoqhAdsRKuHrbAYCGrgUNNkv6FY4rZuoYYpSG9mQJyrACFNGRk4gsC",
  "key3": "3aBx2izsM9YbeJLCBWxbvvwch5PFJuX3jPMMXHsNZbehBCVAKeEEJ1nBRr6b76tfuYk2qBEaJ6DSwrtAxiy4YGJh",
  "key4": "vciZJqFESFWMDmzRSmERYXJ2qpdSrgadCSJ5MR3vwPL93Xw1RFbnBskHMyf7f1F3aXbbxBJDbobcQ6kLx9u9xYo",
  "key5": "67CQChsRM15AtyjxyQeeHFH1YSwqAxzTkS6TSVrviHo4LCY89cTWQQwL4FK1d7V8cyJ2uJgjVnPV63sTEj57MGDh",
  "key6": "42YyT2FmygTdsfCMab7WZqKbjXuBJnpppiP9ufs7aCWFQ97GMkxJHSWVbCjwU18RbAYVtqVMWLRBonGPwdRjmyLA",
  "key7": "3YTXJYG3ZiGcDWQRqaHcNBhWfcTDhoDe5iwbwCuXeRrnq7nP5URzfyhGi3YuXJXXzQPLM9cx3NvJiWX9EhKF4RCV",
  "key8": "3REmbcPDBCV3zbMhBCkR3GMLCzrnEdRgy7NrUVFSQzUp2jgxXLnzFnccXmd27GnNh59eSgWFHYdpjHNKFCvxCk4W",
  "key9": "tka4uxUoFspqz8AKw6DTpQwVNShM7mG7DcymaoHkdYU5UxV9dH8rUFMYpeyx14tTvRxop9WnBoipVP1PSqzCWMa",
  "key10": "2bDCMR4jVtUhWBNuBZ6sWuM7FYmiQUiBDgdDZM4WNHRSSpVMKUPDDbmNzxKbdmBMTV3H2KdHdqC3NBVSppbVgNNM",
  "key11": "47M1JL2SUrnXh7GwRLaP6MJk47p7y6oEAexjdNnqAPCEnPAMz9T93mvXZxznZ9g55XnMUofjvAhLkCYD2opprhRq",
  "key12": "44pNSW2wACb9YptaXTPfRiUGThhwUF5psUGwj9XRDKmHFWnyvz9LSyGCd3PRSUXYgU7rcgm3XBBNVuQSgfF4eWTT",
  "key13": "5xhfRv2TRio7kKKjBitNdfiis65eHp2mpmrA42d2sgtpTdzDgfzE4CyuQ5wmEdpD8grys8i4Y9joqSsWjRDVBvse",
  "key14": "2vJXwqRsuWEifug6ffxaWrMmCrT2w2rbDUKSSEjxHGeopgtrxzkJH7FooWUKv8G4yf2Ur9MxrdR6pWA8x6KVmvW7",
  "key15": "5pucFTDHgpkdsnC35hykmaGiwrcKUWd1VPrCPf19BTRiBgtoaBkXvNAWyZcdUR6w27bpce3QUriBb6DiGJCyhR6X",
  "key16": "2MG9cQV15UzsNqedXpDYipQnanURRV6HEo5ihWuDDY919Mrs9zKDU35sMwCKbMB3HeXPecXiqDUvX6SZvUxVpfcb",
  "key17": "5M3KhDCdjqpjekgTVHSMWccUksm235S6vB54RbaNfn4KQXjyovf9Wq7XHkqW8Y21UigVZevkVAP4ZRi56KX1AErg",
  "key18": "2Mydo5vq3nrxQNNfFJ5YJY4Dqt3FZR93ze1ULAEAHNNxGA7FnutfwD7kFPmnS3GHx6p3Y9gYAWZSpQ1U4HKAmhjv",
  "key19": "2jaekdUq6dw3MTCPTAg5MWLQpdjJMYDsy1116yi6S73kArLs1NxMzatGBGCwdDMzYhWG8XaJSPjAW52UX5SLr3N4",
  "key20": "3qqJ3URTKfz4Fn6gtHAR18bvPmbs1nzcVtWGgJHRyooDKeERHqoGQaXSGoWwxudMrR21iYaiuz8uXNK36fGeTko8",
  "key21": "3jtj2G5WRmb42yoMYbx5gx8Zhrb5eSXYZyYtUAc3h7gtZKvVtzRU33eLKBsNGmKvCgFyzhGt5MKUVzL7WJAXWyN6",
  "key22": "4xoWHND3SqGfzA5JeneiHrDuHHsckZ4F3vH1B9DyTHTAMG64qw4sENkV6AfcGiTkCRJbUnMdUqnQ3RvBCRNCU7Cb",
  "key23": "4ta3XcP6ZMw41EVjRFJnjPnKzBwadn8rawaKp3XYbp6pqekaCYX4W1FTM7o5YFHYVWNPBbQhVdeBkwWzNFyV2Wn1",
  "key24": "Apd7HsfXNZdinqzXeNRGhvbzvpqPJGVTR13qnnZNptLR2omFi7iHTkF89ZsdLkBnDbf7Z5vEPBgL1JU6aQMuW64",
  "key25": "4RBkuVYFMTpNW6jjuS5A5vKGZQ5PYK1cE2EQgHncdSQvy3NjAUBy98As6KHDp1DhYtfGySNYRWcwTpuidBHmogsa",
  "key26": "JVESPBmmZDhv8wHxF5MU7x6Rqr5raY7qHC81SEQ641gSBkmeAScj3rLqFgax6YG7ub1YUCgBCKbLLj8hYCsgqmp",
  "key27": "2HEE8h7xCutsR1SFT2JthN37oanZcM3SmK791ExLTbgxGXwipYMNqdmhspbp2QSH5d3ywvP2bA3xD8GMXikny5WJ",
  "key28": "2jtB4bGcgkMLTHCkYgdrY7zTgruHgDDBZ5zZCDUm2wKHKgAvBxfQDaumLfc8Ps6sJ9Qn4pyimUAM14x7Yq55Ek8f",
  "key29": "2BrVReRqbc72YakFHqu1Neyd4mCx6f7xWA2CyU4sB6uiiipEFfVbyEA5KDZcTC9J2KxzNaELA1SpjQAqDZwkis65",
  "key30": "5n1ESExFTNvD26vsXaNypqdyffgUASCTPnHMfxmg9RxbDVLWLc6d1rdxpLmf71x6Kbs7pjziBwJJsTbtaHqNpUh2",
  "key31": "dycUL5zYWRc5kQgv79jAtToojuSrU16Z6waZ5AGXcd8y8HJqTU96PNKR7oBv1oJtLUQ7C1SnV4ezfLqDEy95For",
  "key32": "3r3sURCUQrLosB6bs43SxnVZfz9v2pyPBumq76GfNHxdCmBbxY25tvzswjjFQGvorhgqsmPkHTap6Ekr7fGZULUB",
  "key33": "2rgNVDeA1eNUWD1sHPcW4FAXuANXvcULPV1j4AzBptDsGKKH1DNXLqvjgD7DjLZ6E1Prp3AFtmyqxpKEZnj7nXAo",
  "key34": "3giU4VVjxKzYdhcnmbN6sa4gUw4XsPhPzesqFz6pJJuHWhppeezJ7KnJ6pC1LjveNfAxVYWLmjSiWJpEWSWZq5SA",
  "key35": "4k5bKv72KJF9TzrS7HWufLBwfMib9MaQWaYhTFFVqtR6nQFY6Lqg6fhagkAB3jYwe7VQ3Kctn472GMrDJVCjAYyr",
  "key36": "3Xb4Xpo16niAcHEQ6qaz8Rz7cfSSoP6iiu1CTDoi9NWPFUitmsHcjWRdTLShB4q7czoZdfGr3nBd3tD1oebRwqDx",
  "key37": "5CkNTvPm81VVcqGu7jnkrPLM4yY6sD6vciF7VePjRm1rv9783XSt3DmWudPM5YywSvPzZ3W9zfqsKRqpsr6nZyiF",
  "key38": "42zMR5fDxfjee8PnfHewBcptV3gb8XkpUrPpYb1zgav3RJqfKMhu5Eec5LBUxxYk5XeKUAXD6r9ooa7vCWqv62uE",
  "key39": "4ApnR1SQYDVJR8nDaTh7o3q6g6KyqDvbiwHdoCCgAeM4N4M39JnESrr4mbQ8P86zxwMCC9aHciedwpbYQ64GBU11",
  "key40": "45SzRfoWRGCkJtsUD4oYhWB2JThsBwFaLdF1W5FbvFUkCVuCyxP4RYLoUGU2iAq2YuZhcwha3Tj6mwihd3KeFi4C",
  "key41": "3huPKKhdgJY61EqwEc9r5Q3XCZbuPYw31sAsAodq1SBA61i7wWwx9JehBajniw1VWDNRe9Tw1E9nybUHFfLDePao"
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
