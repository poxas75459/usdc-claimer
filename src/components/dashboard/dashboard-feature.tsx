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
    "5DfqNAudN9Wpc8mNJtjgn3zvT4Vg82yFMcTWD5eR7kXkZpNBapBDh66cvTfBuEJQNPUz6vtKTayUhGssikoj4t8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LbKBMARufm55YwC3ZrWZsXBv229sDsSiQGBgZbLDzCVEsPhtxNSkUjp1cHRr5WNqECgWrb3Jp87SVnAWU5yDDpD",
  "key1": "275W43AihBkwvDkV9UA8NRTJY4b1zkUXba5WZEcSu9BZT4QMYNd9bJZsNqppaeXFKncQBKxzUoGMktFRmePFywQi",
  "key2": "5HEk1mSSuCHPn77kw8p7mef9Qa4ciX5xSkpTqYXnSCAK3SEUVWdjh4e8JssLQ48ciMem2dQLkKjxRE7E4fP6HcWy",
  "key3": "3Xj6C3Wixwc89sWgVAkVz2qAXEY3GVsn5NpsoMgrkCh4UehqTtKFZFLpx1rVhwYf2ub7RoJhfV4XVRjLFssoHMKp",
  "key4": "5ZgDTfE97PgzT6EERJUZSQC9CCXnqabJ2bLDFW1cBmZb4UToiL4KFnUSHBTkwQeVteDKAVvZewgDSiDSJcDQd4ka",
  "key5": "2m1ktjLUBUeJXiWNRsQoh6NnTqeXFrG3NiHMCaMR9KGBQGkxC8JHdmaYN2joWUtsF1eEBQPz3jVzMzXHuZ6gYYY4",
  "key6": "4dmWbH9DjUQdmrL1xkAqQqGz8Vbx5yCadZk4edrWgwsf7RK3Ct4VwbRi91oaiSWgAcC4i8EATT4WcrzFPugHA2LT",
  "key7": "2KdBE8Yo1MLMzmUdDz4FA3qhTekPKkbzRTV4h87bgsvAdALw7CmfFBUTv8dHGTjihoPRPqCgQ176rFDnA5FJ6T5m",
  "key8": "4fnUgyEh5Bu5Smffswt5ZKmw3equXvuqr9xf57oPXHnYLwAJm6aFwzE4HbmgVmzJdnhn716uvTeuhxGZJTRVDAXu",
  "key9": "EXWYKbj2QtigGWh8XFiiuhztf3fA31km1gMDjigQcUzy4BcqC6wfr8eJz4G4ndWfrGQshfqBnZpTDp8ZqJeXExF",
  "key10": "5kE4Eo88jjdsjywu11QS8q3FFk7pynLQ9uk4cMEBwyUwtXx9ah9syT2aFyyzCRQyK7yjFt9bWrHMuxeJNQV9dAG8",
  "key11": "55eAu5SzTdY19NnpWwv41jZvemYV3m65WDkfMD4WPYBTpgt1RybdYuHkJeZnLA3AzTxDHEbMztuKskfQDpDdCvgf",
  "key12": "oHm7q6YRdTmdW9hSur7DkXLte2zPn3ACLuW4r1d11vr5YPazx4gwrAYS75YGLuuCz769wKDHxENLaCZc9WC8gUb",
  "key13": "RE3HdvKFyDmPpJ75X3R9YnM5wwhw4jk8Jc6RCufogF2XjBU4o971Ne6FXGZxd4HRfWqNBTy9ab1M5jkkg6woDst",
  "key14": "7ooq1QHawciby4qznHbRCRsHHZXW29Ge8cSXLTuPYwv6TE4qZ755fFpSrAJTDMfnk4osc1cEhZFWqcP82ZdP9eP",
  "key15": "2PjKiUDCpCLfdN3g3jrdMFuNL6Xv2a5a5okxh5Sx3y6eG1kk4QCLTHNoUk9cJrxHFhVG1BLbaDgJcD3cNF5KgxWx",
  "key16": "5DQUFazYDhkigdhgA3Zmuzhs4A6uhx5d1iJ2a1hvFdHCNtUYFtruurDqbNBGdtKJCd95fZ2jMQKWpHQCLbkpbexo",
  "key17": "5ioo1VtpmiQH7ecLppzKPTmuBEcSqudHtNg7s9g97u1yZHShjBvJvKGxUgdF7LCCXELcCuNzXAVcxJozBbkhGvNH",
  "key18": "2mVcePNsbuEZveB79Hw5v78KdNQy9wDcwemHSq7V6CHPWWq2qrL6VbNNS5wBV98Nyu4p8daBgX6e5sjbVmFtJLgV",
  "key19": "2NKMUFTB9gerS9bYGMAPkCHGoGitfqT7AXCYvADN6QdShtWvskhtdNjbTGsE5ZygYkLmRPyHFJptw5ULheKLN6V2",
  "key20": "2FXWoC5GUhfkde6dawJbxPpy5RHVNyJS6VoRHUFtpU4njrTWSxVdqNByiW7qDkoBhgWdsYbMcjRScHorcaQ5nfXz",
  "key21": "4wwp3HesBN5ghRHDfMUe187J3NGhKNtWocaH4XM3VH5xx2jVcxfU97HUVcSWLymXMSsTcGixPuuE7WSaeP43pbKh",
  "key22": "4Liffn9e3HhQAzhmYxYGaDgMEAgyo6ScVakSjKgbgYcNiaX2KUq1t8qpBNp4yDtzYEQxe4d8BG9bMXTUDX5xc3Xy",
  "key23": "5Axu6hHuFsbQKLRH2jHSQF7MTUYf4eDecxLB2B639ni25kBqvZz6cx6UQwP4aqTVh9RzrupeAjFECp5gDzrm23ER",
  "key24": "3FJDpLa2sWyfeuRUbFtz4MULaWXbwJMBSD5xiXHxN1vBHRJ8FHH9V97S1Zuk7wr41YmuoJvsiBU6oSy2ZCm44LSg",
  "key25": "39o3LRb4LXnjsmJru4jBbzf3fjvWHwuqt5vadXEaokrDRt6qL4HD2ghBHiZCyWpxZPkBjjQLatC63WX2cVkFEZQm",
  "key26": "4Zs1LhjLR4VLo2Fee47TkEyFGF4gbkj6b27BpSrmsxFiVzpW9twWrKFJaENWrKd7zqLGiBpqY3oA8kfMQkNeBSd2",
  "key27": "2CnTsx5BUzsFUnYWrpx3eFX33tcrJMRAMQx2uSUwoVMJJQUji9BkJYWbkdFWVd8VPXi3BoXmdnXnPjm6AW3msMCd",
  "key28": "4p2qB8yLC59W13G9uQMuP56SqbXNdmYTnh1VQMsB1uVcFkUg4Bja41oy9o2JwNfViSQhyb7CVwScZmfT7cxezTtf",
  "key29": "5o5F62XXVfuJsxamTPbdcxShJuobRiinGD5v2CJZoupBwtdLF9xZZRQHjHUSV8DKMZBfimQAhawjDtq97Z1Vv4it",
  "key30": "pgsGXk9uhZo7vUqqBffuKZf4LpkFGwbPpWzch4A6V1vXoFMoKn79Hy4gP75EmtjeAdRQvT5pkP7EKR3QQp9kXD5",
  "key31": "53xHzHupDeoT4pdPn6honSzZfZ3ZjN2r2D7RcN1phtCZkW86tha4ociZ9FdcFqDnuhWsdAxcAjWEfLKEuLewqzef",
  "key32": "2UgqWmAnAjXLKfmAPUQNN1L4o2rLFsL1239c1C9P9ZwEpJuCUAUqpc9UmHsnohVLVbDz9uAc9t49M1Q9fijQz7rw",
  "key33": "1tUinqNzNSJMyeoQ1LuRrPx79eByLEGYpCAorAfgyJEb6ZCrUfUg3MAsEEmPwJTiGqW3Qz8ivrhP8GGzQHAzJGc",
  "key34": "32ajYRpnV42LY8eMEtwdMAbTTxZmKsmqu8B7FzMbtzLMCVdv5idPqqZ1sSbmFwbn6sTJcsB37awcNcEqLq46x2oP",
  "key35": "JJAFscELJKe1WxKQhZMtkww8TaBY87NUGD18AKFmRc8C3m1P6eZ65by1vNiGrdWeZFH11f4hBFyvZHMPvu7BDia",
  "key36": "3vBTKLqvpMy9qV1oaB1y5hXC2nqi8496pu97gH7bNcmYk1bezz9vLcGB69j2WLnMtsKCMugneeRvvxcEhJTxEMi7",
  "key37": "3a7GBfjk9yxJNAtP9Z3xLhsX7SBiJ3ZV4iZS7rb3YKJj7VatEaneJFrDCX542eRgiAAxqiWkDimfV319rS513V9r",
  "key38": "4ezSZHqtHb9tFUJJipq48HXJHtLHpMwwZKAEKf2Ase1wsUzVSDzEr7HH9rGPWioFKQ5APsvcwZhN69TMk1QHsu2c",
  "key39": "5DrHf1DmGdRyVNVjMr5vHouAY4Bf5mB6GMajcbhHqBQGoHYckkidq9gtBggKiPBvhTMrTjRtgzhbDUUxU68bugzK",
  "key40": "ywhFphECreo7G2ADBsqaQsHgmazkJkkqgszaGAdYp59bm6dVJGk6BJKg8bbDK1dvf8N71YdHJvpoKKq3Tp4TPsH"
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
