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
    "3z8rAbao1b9WPzFFpFPeqgx2EZ6UPrBqoX9zsGYz2DBFn74ycuv1JqmNfus798rAwgdEZoXA34EwncCnSnn6a6Lv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "THgafTu6mYfqVbVoX3j4U5s3LwLYfMZ2WnCY1PAPaCxphpR28Nb1ZVDhG5WxGchv4f9MM1SxqMfjwQ9fvZJKsQx",
  "key1": "2Dq8ff5KCMvuzGesSCdaBpuAjJCUvc8d5q3Rv7urUw6MTgm3ZNKuv55ZCKzPrPjAxEZvYZCzUy3UCoNkvpESHyDp",
  "key2": "3KbG8gTSaocixdZQ1p2jAju7q74R5RyXM5bCPt5nm7ggid4aMHT9okmz7zEMA8xKmAXj2jkNajtt5SqgVRYiEVFN",
  "key3": "5YJiazZBMKBXWgcbm4VyW7tgz8LRzbHSVqit8N3sGXYg58Ug8ufqBnKX1QC7ewpehHKftq1XW2H2FecUqs1s1JgB",
  "key4": "3GjbY9hWLCgjooLzD1XgU4yFxTRkCM52pvSX7ndMCfqabM2X4hAmvcr19rmC1R8GdrAtxTQCjDzA8CMgDWsgEAKC",
  "key5": "4tqjJ3nEAsQDz44pgHkhTCMjpT75CQH7ap6fqweSPmaKh3Zy71J4xByyfNKshnMfgQ52uYCLA9EVjaDEX2RmkG6X",
  "key6": "2fVQ8TiSFhj6w8LyUcpf9j6qBMp7UTAyoVfq6ywjiopqnYWtqjxwGzPyCcaqz9GxFYgC9Pxf36G4GFD3S5mzeuAY",
  "key7": "5fWGPRAwDhqqdBRcWrRnJmPb7mSdq5e5wVxuNk9pCWNXizEhg4pv975a8TpGkjxRqraQxwJCBVnMhxAijax1XnE8",
  "key8": "2BhMgLsgyv4FcExPMv7eobhA51i5kJW1C7vs8SZyjwRLNhMutTTpnsQdb7W7CNKJcHgadGNDG2Wk6m2XdAnRfS7G",
  "key9": "5XLwifPSpmsvMtXgQD8jGbHKbovjbSse8FnerorM6ywKFwb85cDhrdSvnZQkeiRofyGEncnR4Wt3dUiw7AXPn25q",
  "key10": "HEPMYdsxa3esoMEXxHZHmgR2wxid8RDXPCkPSRJnQ8R2oCFeUfS5dBfYYctMLzJizRXj6WQj8kNHSZGyJzRnQub",
  "key11": "5rfKKn9t8xTJyMjGav6WbLNQudavp1FMma943LXtPaoKVqcdoPrDwKEtTgsHSGxdCxynfhihTkK2m6zXgTyjNkUL",
  "key12": "3PH1hUhmfEAoDHXnyd3anrdXpt6QkhHsnQTNzsKE9AAifK1xWu9HGaYtzBeHs92ohL1PxzUTFyMznVcKq9uWVNLi",
  "key13": "5RungXmKAwi4RLLbQdwsSDeYVRBmNg8mdcQzNf34eiTLsrRBX5v49dfjRgkvFwNj8VFNy3Cin4PLPAwhdGyQ2bLe",
  "key14": "x5c5W9KxoQ7vBq1mkaU4Qz2Fu3S6GFyvQgsM9A5jyTV16F5hVkvLX1Z6YKazLcDKTfL9qbjGX654jeS4pK8QhVq",
  "key15": "mUXxYTxy1bFUiYrJN2BseNuVacw7E7VKq2wS7r84vcDZubdXEgTjnjeAxLZ3cugxacURUtiWmV53MMS5897xM9x",
  "key16": "VTKHptiGj4KzdDHCsXSSq7Gnkz4atK4mmsV1QJ8Vaet7LpDomKFM6kRDqttLqjPehmDqBTv9iM8DQGVQxLKTLPB",
  "key17": "pGKkt3aYuxM6xyYUM3ekxBBUHn4fzpBYXE8Sh2H8C3SfDXnAQS5JmwEECShhK9dhBVznwLNAnshiEE3Sx4oeTFR",
  "key18": "tzm9i9TYjqz4frVCu3D6xgevLDnWYj8GfBX1hxAwS17Y4pvwCG13Xbp6fxMvnMo15Hdxi7X4JrhsA9KrH8dmRte",
  "key19": "3YqckT6SyrjpjB6siFcWTpK7PQWvVMrcMmjmt2gu4sYE2N9zqPEswyKHW8sFeDMgxhcQ6S5EpaYX9Ab5qjeGf4K2",
  "key20": "482RHtuxK6UQoUp65KckbUf539VWrm1vPGEynpR1fCMz82pHRGna7L59BpcBQg1gzbf7SMv8xKdbiX5aevUruUN5",
  "key21": "ktzf5WMVrMDmtJybkvGn2NpaCJZHaY6c8h73p6aZdEApYkp6zyaCQDPksH248AzHVg6dvKLKaRtgbbpA7GkprvL",
  "key22": "5EzzwdB7EfYkpEcWgeusFPKkSJWhKKeuJjXhYzas7AEmUbN5SDyb3aXUrbSdeYyZXZBHKrPYAveo91tmoU4RrbpR",
  "key23": "3FtJwQvpqHP25Bx4kQfFyXupztxuLmto1TkFdhyXkN8Psw6bGbKGhKSNYGccofJeyVfowzSoweKPChNnufMFhmf1",
  "key24": "5swM8UjiWBtA9uFSQs2L2D8w4pLDRwkh3Xosu1WTvWnrvLmBca2gnYEnBZCXwadhEbpWie524tPYqEmKYMaiSGeu",
  "key25": "4xqeQfiWfS9JLPm8MEroJEPEgnPgeaqcBdH1SXjHFayttKxCawrCQTj7pytAMt2DgoWbQ3DcV8aSoYxGJUb8NAuB",
  "key26": "2XK1y17oMoscqv4mnEZitB3FAB17Y8ouRwFQkCoCBHSAfZbT49prgRBeXdyUSyeNtei9E2Npi9YdcCjLY31ze3FY",
  "key27": "5a1CqHjuDdHVYcY9hRVsvwbAr1yNEPTAEsr444tKi8trbZgLVW9j85E7sNoHBJc5pqCfCFA4Sh2hHbH4F2s4Ecqr",
  "key28": "3NYeUHDChV1rL5frMoCARfRR1Bk2KQjaehMgMFsjw1MxhkaNNxaCkyQJNUVAVuCL4pJnQh7WttMgmu7wpqLoyNR5",
  "key29": "5mKJ2nqsowgXRTjE5yMZFDFVNRVErSTVotZ2qSiajZoZr9eG9kD7sEhNz9iRbMywf98AwS5h6YTWs5tpxBjGvkkp",
  "key30": "5ya1g5bR35AJLs8bVehsTnkVrW82GKC6iSDwiCeBo6ick4C2xHETirjykwwuRFUw6xC6gLTfgcUwDcMHMkRQet8g",
  "key31": "VMpQZ4HjShvmy3iTdXbPYxGvMSNEs43H6DuzsL9wFYW3nycTDY2KgS2m52LUUCGRD9nCfPzzP1kg1ooHmiFmbgV",
  "key32": "2PrsjKxUd9TEkB3W8xpRkZBL7xYavfTbjgU7MLLwC4D7FmyBvXpbNJLfmFPyxkmiBAs6szf9y3aFebdGWXep1TFy",
  "key33": "3ZmqWRf43S5WFHfTfKZ97ZhpSeYHr2aFczTvXMXqbDATEfjqMGYJKyhP25tubxgwwQPHWrZNRhYjZ32EkEWMJh6Q",
  "key34": "5qYNZoR6xcWyiJPAaP84L7fCfekNCXUWZ3uzSLf8oJMTKX8tyoKuHzZwei4bE8aZnoGkuDH8pCg4E7PD7hBy2YUE",
  "key35": "7veCUxc8xeEEhvF78nHWJYVXEYxbepq1kS92NT5UU84rzyKBENVTu2tkV98d2csu4pGW5aWU5PPnELr5CvYtNf8",
  "key36": "5XFFwkGA9x4iTBNSD7iureb9D6LUp3o6fLPVhjEpJLZC8sRjbvB3RWkZC7bUNSDimeNws2uyPfwRUWgUyPHWyxF1",
  "key37": "54bUYLmqvPDihaE8RWSxFTyM1ULDz29kDeWrau4sfNW7Vqsrnqzjjt55i17N7nBhwRzy7uFJ7ndsPAE4Tkb8CrtB",
  "key38": "g22LQ1oQLC3thY3Gv6EpmXbxfBgiu4mJNLQHC58CgzayMA1EWSE7gu5szhDKhTsGjiXUntzj4qUWx67v4TfkZV8",
  "key39": "3K8XStwqJKjueandhCQ8pLw1fVSeXZR6SF6dCzVykgBgjp72QWTyM6miQVW5jTL5qEtJRahyAfnWBpdUYHgHQRfL",
  "key40": "4zHcq1pZUn4wDXTq1W4HieybT2vkRLZ5TJkFUCtdw2bSQdgipZ3Z9VCNiH6fGQMfkYPpvT1cPub6hoSo97H1KGjq",
  "key41": "5v2eU5wULNj6WWmRwg4BhWAbB3UuVnqLpKjVMmkkZMbrpF311drsuw7dC9gtXNQs99WLvbgpyXfNXYqy9xywhBk3",
  "key42": "4ngjNrSWSfkBLGPz3QcQuJGW9XKzwaaSXyuz3NWmTyiNnPHHhqwV2FPQMw8Z3pw6FBUAwoLxE3U4nq6br6U5cZQo",
  "key43": "2UCJuq2wTRHXS6RbukEXmuHwgAvBEciLVHcTb1ywiad55PUuW8UyAUqmZeZaBuESkPAiLtMxXLNyFFaExB6i8ZDW",
  "key44": "zBkqtASiirFVLnxPS6ZZQJb6p4jGtMCERDnw6TnnFMSZumME1tBbSQUpgqFxppAUFCZPMrfhzo1x1FAxgjkGWaD",
  "key45": "NMKjZZEwt3kACeBCZwWzouuu713edBLzknss3QWiQvXWRKA4s1nX3ipqJuQMJQmx3skgtAmXfQ1odAjWb9vGf45",
  "key46": "2mDULEdvgX6wfqkK7U57gUxgDZim73XkUQ4KJCT137Z5EGXHJgY5a82qiqfUMzb2xXQMuWByVekKdLm1KBaf5Koh",
  "key47": "47uujXqxHpJTH7MzQixcn6MACZoW4VyirBXEi5TDzMtn2sP9pyiYxf2NDWYtwqkH52vC3MidMh3MHJGRPKbUrgsk"
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
