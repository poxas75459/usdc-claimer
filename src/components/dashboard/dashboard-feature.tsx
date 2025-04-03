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
    "3tMGLAVudZ8dgBqgGbmPtVS6jgaubiwXSCf2ouvxd6fpsusBsdP1UGqsEmQWYHWFrheuiZKRwQQsMPqXDXWo8Yu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25QGnEhFVhFBvLE1USH29eqaWUmASuKUGXq9YytrrsdzSWGKFHRFunEGgdFmVE4kYUhWQxD2EjYZMcLYRLUiLCvd",
  "key1": "aiXNKEjHFu5A1nP79FLq3xHUHbUF6NUD7MPAwMGb5CZUk3U34YhStNzTATuVTm8f3TcxEeCRJ1mM9GDVfRdVCBH",
  "key2": "63TbhxyCSBSt3U3RTE8W7zoMDRjapKjwM3zuAtjnpNuGHzt8Q8qsNJH4L3fxmJWRPoF1DP3vEmL1QAd2KV9bTRqP",
  "key3": "39p4u9Gx3sgZGJ3STTNfHYmc55REojVfMY22TnqtQWHKsSHU5jZFKf53vmPKLVYzPKr67ReYvKNscbASVYcsXEtJ",
  "key4": "5QfdP4fjmHgyEMu8P4idUXbq8AefQ4QQMjoEW7CC8tfy7ryzxtJdNSjLGKWNAXDPL5d8axWWoZiUiLLU2G8bbb14",
  "key5": "d5F7GvxZ7ZLqwGXeW4CFq5DiRC1gQLbAxuCgaCHmvGpkTPwHjgDcwGqPVR3Pu8afXXkmyL2FceDJan1mTaYQjRJ",
  "key6": "5Tss4nQKEbhzXkFdQ5CqbPrvd7v91EVC4jGwRABCNjBVRpHtFB3sUiRize87FKQNmTm5hHGhU5CZibfZKApAN1rB",
  "key7": "3ZXmrhUFmYEq1G19iFBEaCvCk29tw8yYN8MCP9pLAxEwEL4wwXGaUk5c8UUjwHrEUXkuFj1EMEjATbMWTp6dNrD7",
  "key8": "49KuZxMnP4WHzDWccm6DZNkGvM5q3kiLLP1sUDTnJAenskV5Wfww7YdebwMokaYKpp7GHwPp5GMhaaS8sfjcXJKr",
  "key9": "5eHQwnMvBBDacwgdGK7PxpihZ9TagrGrBm66wJmmYh6UyYTwgxjXrocnwneTUHjScvuXcZXhk4VyiNSm8YsvcU5f",
  "key10": "5jtq5VDdd88HJd6kaoZntKauthLVi8QK8iDbxWnmnZnyGx6RUYHE6qxLHVTe9pnsLNRBmYEmgQXnaFYydyhkz7RD",
  "key11": "55u8SUfQU9Uj6tUsQi5QVtrkNJPRMzf2nR7zBa1DK9BQqtpJjWBvxYddEzQZtBmyGRksAzrSW8SMdQJY6UTDBKQf",
  "key12": "5UPMB8N7rYZgG888ETivnyEsDzh3gBmk9o7cm9XUJA5CXoa8kTn86WG8NM99uxnfsWSo7w1dSfgATgyZmxAjNXZB",
  "key13": "3Vj4toMyB6dC1Wpc4ESzLvrCLigyECTeT7K9Jj3Dbu6L8F9TETvdsuEd17Pue8c7MQiCN2JFscFfQhpXscZo3X7z",
  "key14": "63dE78oXWQfMMg9qXaka9JU1w7YmmmEUxD5fNqRKiT9mcuZKASAwXfZhipgRYsfbzCWDAMggFLB4KqTTrTEqzavf",
  "key15": "63t7kGUrXX8Y9CLVw4Rn5gJutScN2eSBMrwHCcL4U8mdf3FEcaeF5fwo1aYk5Abw92TgZ1eWscs9KuDzQe5Fdj2X",
  "key16": "54W7S2gnkW1PPXtqVJJhn1kKjNFVRyCb4dLr3JgReo9tu6Cy6mpnqxU9aZEBcyx3wcH5xdkmWotjvxAUzcnrkXZh",
  "key17": "4UcvCK5jxTCVwJYV4LCC84DHkjEv4ZjJ4pUPNHU8wgW3heA94UPJFLhSU48uxsLDXcwKnRUxa7WqTZ4oDrsafC66",
  "key18": "3o5vnVkHXKUAGRyjqd8raxtdndZexwV6JndUWs81bCcsJXezuxYXtyMB3Lk69pSX8Eb9sfDsrrq4MEVpUiACxTsZ",
  "key19": "3XK7NhggrbNk13oAev59S8NaWwTmckpzC7bDuJYmrwKvjUMc6vcQ3zAyD7EiBwkxysruFqqHFHKHBaGdMC6VgvCf",
  "key20": "65eRH9S8BTesvyELHcUyqtTKMZiHggayNWnSFyh6RxgjzdLx47Ats4GMHg2zZDruvVrPeSt8n9uhBg85hkUoaUBr",
  "key21": "42PMfS8FpT6KEg5KnVau5TBnCVfLNsitfvQAEUyJ6Wr4XCuomH2Cd6waZmeH7PrEDXg1uMisaupjjKtRdmuePC1S",
  "key22": "4W4m9bJaiKCsqmiGnLDsJM9cUoHViUB36ZWd3aZzp8SkMQ93q5cGnN8nzwzhuA5nfSmx1qRsLkfeQM7e4kheMrse",
  "key23": "67ost7j7qpNam6WobVG29LbpPxYwJq39CMUWrRkoyENUU8EMjj7u6n5JeYJTmDFkYGYvd8TQqFLbkbDxAxyU989J",
  "key24": "61smzNpumb8MWzGnAnbmtFrNqA6SXeLyio9fUFsHa6yrMqEamfZfPqH5pNRuyGy8PjXZsJkrs2YJSbvXDL3peN6g",
  "key25": "3nkxX4a3jgitvPaFzqcd2shyLtdneRmdfKJraRKxDpqjUPvp6bEAddyQXosv2ZX984dp6Lf731jhCCL4oGMJeZa6",
  "key26": "2RKZwSpy71pXbPr7EDQJ6tJmx6dnV4MvkAJDNzCSy11Q8pD3WeSYJE18sRzd9rw3xX4jFJevf8zQhc6RPr6ETqTD",
  "key27": "5MdUTFjnPiCDdZ4EvVoAipELXieXxvmJEprLvoLVW4GYGAgQ1k2BKndXca1YdytS42Qke81AuAQ6nJhT6BMydNPP",
  "key28": "43ddBTTLRb1AJmAZg3Sf9xLqg9cz8agK53C8FzXTBf8bGEo7o64cQ996w38CgxQHVLvxSgpKz8wyFD4rSsuaryC8",
  "key29": "4kBdnn4f7B4APKPkTdTNu1qAa61DVUvwX5R6hkG6afWFxcRQZJHbkgbyTwdM2Kg6H53CHgtKEaVWheqfUukbTnYC",
  "key30": "5PwRfnVP1YGpFSai4azq7LorKPHywyYSMm3xP7XtgtFCtHXa4hD59R9Wwp4LxWLMjg1QfTXACTKW4JsGxtMxnEwY",
  "key31": "5REMb2tYdqqpp3dMNmSAsXdMxxBmCGMp77Zr4oPVkdjqjgYP8is2L5q6Zr32ppX77EW15v6t5CsztBzzdA16XkZ3",
  "key32": "3ubovAg8Czxhd1KVSYmwqdMRbaACX6pmnSFcvXz6ESvYRAD9ivGR84z84YoypqFosL9WycAivMyTmAATsgu7DYYL"
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
