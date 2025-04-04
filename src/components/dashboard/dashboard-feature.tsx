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
    "EvhL3ZE6mwjVjguzES9y3hhxjMLAGyycXCWKTGG8GyxdjLUZJNXnC37gs81DjN6ci5XEFZCVsrBbgk7kpY9TRRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YimzQio2D5C45aozBrhPrseDpxARrWGmbUGWsnMA4iD6Mnp4BNv2xYrCZHHcwQ1gRQ4nWNiGX7wH98xzSfBkkQF",
  "key1": "499DA9L8tTstkddWKNiiqKBrdVPRfbk1mfuwWGnwNY9poi2j66iq3oNTTq2x5xmt8Pbxd7PxZyGmkwgPCV1nGbWQ",
  "key2": "3zDUfwmYBNnkdk9QXUDiDWuLnGFDDz5sJmDCWtNSxweuS65sWmb7aPvMunS7QmREHpMHpHxd55bjWGzAZNhgNmFk",
  "key3": "3TQXXadsudNKH1grMrSvfgFbZJiEg2efm4kFoF6GpKuod3WzMvrTCwLLiQZDzPXa1KEPawTz5FZEQNXCAqyMdaPe",
  "key4": "3dGqMmaacGmUi1DtJwFEYqrPBACK6RmDCr845PgWjkjcCiPxYPiveKxnHfoWTdnNEN2UAaxH7x73mWkJiGXSqNh2",
  "key5": "2koLWqfjKs3HWbTbPxJcUwsQiWHqKiv9X7YT5gGJBWFaYDKcquqm98JFbM6kzKzH5Tu83Y1oajJhHQT6Apbc2uUV",
  "key6": "3khG1w41gzbiq2o4jmRgw9TdNN1aoccD5EGoP6aimVYt2eQcQtXG6McHFyfNZgJ8d18dTNgSaRNimno375cMnFCC",
  "key7": "64u8HyZ8o9S3Bybs4hHmJzvvwAjHFLDeP2nsZmYgkp5BFsMb4spEQXALae2pSTt4fbTZXLeJ2qxFy9ZACBmvgag1",
  "key8": "2aEtzcrDmJvwKNKfWkFcyagNHFnVKMRjYxCUmbPwkFajRqQptGzg857rQv4Mtt4MPzgsqwzY1kgVPMtiChSmupxT",
  "key9": "5HsET1QABVAzTqTkqvgDTZxP1RfX3MBfLv8tCaH3RLmL2LTuiLMeDLgQfcWBoSswpHduYzf6jLqDH2ZMNxdKdSvL",
  "key10": "4tNA29dLrmpkaQtoSyFZqi1rXHkyrdiB784TzA7HSAJcQqYJty61gR2WizNhhEwBNY149doTik6sgu9s7MVWKv8W",
  "key11": "4cBuFGoxAVdPuzEhsfu7w4C8JueyBt3S6w67AjrK8NejLBwPczamDqFv5rR6ivehPpyYSnNLoPLuw8371SLUUmbd",
  "key12": "4bKGdPcMhp6Niz7vxSpfE5mbRhUQuhvTi6PrDiApuQwNFqTPfiXdBYHR8w4Sjjwskaogen2neioM5bd1L6KPVqQe",
  "key13": "5wC9mb9FzNeTAbdGZrDbBQBuxuZ544su9ZNftCXjnXSGMmKzQKBqghfqLymRtn2HNWNHinbPCpEnDvcs8hS3yQGe",
  "key14": "29wqf7rUoqTqnZyFAiKztXFpo2KQPHbRX8LMCEaLB7NGrSqvcHrqQpmyKLGUPQb6cg8ZVnrQ3nifVuQYMdDvH5Ku",
  "key15": "NshXrXf5mGiN12ndHqoa6zPCJ1YF8S38pPcZ5AnLTsxsFfGLfVFaPoPWTtpazk3AT9QTPTb774Jxt6eh8FYZqi1",
  "key16": "4eAVVdmMixMJnBMmWhzDgohRN4TwNNFqCT7imHXMdEgp7kSmtp8VzQn9khYc3LMjZNnPfDPUGHk9gPksZg2kdWJe",
  "key17": "368hEivFd1o3kkAe2eLFKyHKRXec8ss7whHCBNfaqKBwLxeVNSfmFag5cvAQRWNzv29tpKwYkTzzhFGsoi4bsSJB",
  "key18": "3HqhJVD5SRVB5agjc1yEcFPTG1ReiZTKHRkKUmGa4MgoJGTBQcHrJS9ZpMgh438mn1KR4WkLW7wKeVhvtZTMGwfD",
  "key19": "4GcxZfb9fLmCciPaArWSrHDrk9oZAUe2Nxdh8eKoVEWsRBL3qczDE9FnvLc327Dq4f4Xc4U2ftKfYcvXfwEZDETn",
  "key20": "5Va3EgPcbK5NvLBX3jBMpagaeHJsbCmkh9sHZj8nSMF44og5Y43tdEXULGLmZhts6jksw5pG1s98eoRW2U4S4Q9X",
  "key21": "5VP59cSkP7vMwadKsaJv375fTUgZ6ogNozd6QiWuzSdTF59c7u73SAyfrnDi551xrWxcte88fgC7pZREmzXg73ac",
  "key22": "AaFw59fxko9qDjVCnqavgyt72gmPUHFgTk5MoDT7iRfic6auqdcrfCYbNQbtUaDRaKozctQ2Nxterg5C1JHD6FJ",
  "key23": "61CxZdfbcmbov4yjfvRasJvp4CAGnwro9rEea9QELxzfetFDA6TttTBLWXfaF5scwhkHyU2srFPf53wX7LssSdid",
  "key24": "2LTdWSivCXocHw2MzW2RuiuWETU4MMHaNcp6iaK7AnG9YbSaTeqbeydXCfPg9cYqvSStZdit86pjQ6hxzQHKqfD6",
  "key25": "5ykau6vUrGtFPTzr5WLHEM6VvXgU2h4gwJszdFtzJQKE6uN7TakejNHMiostBjNy55GqQjeuDq8NWR3fKyH97S24",
  "key26": "4qHMEherQU5tczEtZYYkXGRhkRVCWu5s4WT85F8kdiLGi3UAcAGtM2J9Erpuyv1VwS77sk9nwmsqtKg5mHuN1f8n",
  "key27": "4u5Xfgf9KdajAA3vjeUPrJZUh8PS3WSjtqa6nfS9qpcU9XUnAGKo73H6DhDF8gqzefAYUsHWkjWMKyaFnVgtJa3c",
  "key28": "2J4hAHhreqJkrzfATAvGdpt81Szhvmj5bQRyLh5oaPdfst2beUWW7XhSPzYMTL8GWdZsvxiZxdYhm7Xaq41NAiqH",
  "key29": "2BTZ22oGYJxECghYs8uXQk3RVXLbKAWPSPGdu3jD9rNj8H5JjAWrZEUxdjRLWzUQMt6zTCKAmoddVVbHawGT3xuZ",
  "key30": "YHoZZWHUUsg6iuATzVabS6rPiwNKymG8xhR4b2SP1gvHmhaMK72PFiyiTJ1Qi4fBXPqrbffpPWjmmgy7C7nUax9",
  "key31": "ZyATTokV5gKpd59v4c3Kh69EkwQiEeHKDaCBJS5VJJiiHidj6gqUtJXtPGLxXDhjBGF4WFx83xAEbtHXrnUsyp9",
  "key32": "2uJsSwepTrtZVMNWroEut9HWN7t8fKDEVNMFShHmDE9WmicKWj9j4pvaDr2UQ9h3Yj5uCm7vNLX6JFpqGQ5yzJfR",
  "key33": "4g5HQ6c1prSqQfVq7RUhwVgNg34M1cm5eJqHzuBW6EFW79FHpyjN1xotkf8iq54mXVGJ1uUmiqi5VbiE7EcDz8uf",
  "key34": "2nqQ7kyv7Z25YeKgQo3iupjTDm9rmSWShqUues37zYB7fKdThCa8cznxsYptcNc5SJ5KNDUqmrU2UQ2g2pjXkeaF",
  "key35": "5yYhED1V93zvNVpao13boY9nFMVngA5SqLtcV47C5Vc4LYujQok8vqrWWfUDBk3zMq5UMbfq7ZJu7iL9cUsWYbD7",
  "key36": "3gKxNuaTGUq82uaRr3Kq1pCYQj5ucFyuBxqRkJVNgSc746SAy1jSjq9gwrKs6MQHLgLDNn7EsLTUmVEDGR5WwoGy"
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
