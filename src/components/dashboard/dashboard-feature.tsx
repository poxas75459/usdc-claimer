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
    "5HbBGzgVqmNmu4h6sDFJzRkayo8RPpKX45mXNCLeSQEWifocmfCY7dop9uNjrdoArpSFeyHJRhvX7Z7zK1MYSCgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NQ5efG3PCeQi8gkGDwUidKmKuiYHm4qoRJQYP1Q1HXd3xQ4YpBbjoufrBsTgGVEnSgp4NEY2M9EL7CgDYXRdvNm",
  "key1": "4pSYp16cGqjg66fFnXHj3Yc7cRPJ9ERaxYF5HbssD45w31WF3KTxSXqFD4s19er1hJmU9PiyeY1Zv38nKYomFK1i",
  "key2": "AdmYegKqiHXFC7DG1MJZqDfugiZsyecg7U1ni4xKLcCiTq5PnjaUwJkSuJNSWe6Wr5ua8c3k5PJKNoDWEsFd2zL",
  "key3": "3DsC7gQAGsicirE7q1hH1uMq5DBR7pJ4KrGBR4CNQuMwM2Asmk7teE4zY8HTGc3QpB27xhYX2EL7LVcpdTyK1poa",
  "key4": "sWfcxB9Vdu4xexwb1sJFLyNkLF5pCvWruDNBya6Uvac9vqYxESCkzSEytGqzpcqezJWNxFgEcmktLLqX5sRaDhV",
  "key5": "av7KuFFwPRaYSESoDo8odqPRAtB7ujGQymCbEuEPyf5S3qUB7cM5NUs94M4TWaGeRLStTS6zs2mJzeQpadN5WX1",
  "key6": "3QszCtwbxpJxDUJNwrjn191ThRG4fZF5jbxhykGX329n3My52j8Fp7Ci6BzRZzyXpXirnbGk2rCEHiE7tD7WDWht",
  "key7": "22H6BrUW3ssGGmx5K25usJ2q91ivYdskrxPbH4ydoPaDWDqBMDgsR7iPM9uAkJiD12V7Pb7K2ByXz7aaPM5YBHHs",
  "key8": "4QQoYMvJds6kbC3E44ZYXmW3eM8du9pY9fyYiUrMxieWiv6Zm66292vhUN5JeenDDxQ9xGNupiuH4sX9rwvT1Dkj",
  "key9": "3DRqJnJwY4U1154VaHJiGjnE17mvPoD2LzhADdNyvNCFaXcaqhxoxr2x5XG6Y54V6LACAzCaBVwwwquvNcYfWY6T",
  "key10": "4KhbWxrkX7JfZ1ieqhek1UCAtXqJ2KUM54Cnx4861EatQBMP2XHBxLiAjrpiK8fUQ3z9xXaoB55FzKPNb38iuUwA",
  "key11": "XMAnGhmerTveSoiYSDxxcwvxjebMt1g2nLBLp21Jzn2NqfMJ7um7DkMxdAux5SpdQUKN8Q2efWzvZD1zcBeWsXn",
  "key12": "4aF8QwAZze43pEtopUEoiJQEwoonPWiEULh3iwD1BM5XaLfvyaLKiQeGgbaswbP37FxNaa2FtubeXDfvA8gp2bdg",
  "key13": "65o33QYrm2r7FW8ip4jvbUt9MKVWrsK197wAA6ffC8MNvbjCp8ToXti7HkDi24MpSy72nEPok9x7z5WkjZP51f7y",
  "key14": "4FvMwF38J6CTnJWrUsn8XKH5vpVtMe33cAaA3w6C6e4kv5FRWBsbUXPaJokTFsGvVbZWqya7ByaLkMB8g7Zrb9z2",
  "key15": "4tB78ctitXZNA28M1D2r7deebfoxpdURq3hotKCyDqLqTxd87qCY2BjoJNCmHpk5Jz8WqXGu7ujATaovbN8MGZmZ",
  "key16": "5yv8doznCptrfNPga4bQ6eEtECyXSw5aprktsPiUBB51SdJ55MjoWSeqxxMTQFnTitfXKHQyisZB886CgnnNLPgs",
  "key17": "37NtCuZ2fBKZkubopUgsrW6dKPtyRhNDwvK7cwseN1bSNEsXMj7izCJSPNadLs3h7PxyNVGnTnxVT1SNz6WDVrUd",
  "key18": "3xCpdJ5GnhyzqRzDEh4MoA3n3hnjCxdY9rrC7GeLx8Hi1V9mCQoekCcidtbAE76qh3cPTBnpGc7W1pUnLyEtH5AP",
  "key19": "3E4pBjb6QRwwiiiBS2HbouiRShNtyJfCJszw8RdjEYSf4JFMBkspEVEPrVLz435t7aWJCQSrndMRaBaR7TS5qWpj",
  "key20": "4U19e9buDY4bYbBxu5ouuU1gFirqKZ2HyE8NxWcPmhuvUPkwkRStujNSVFs3bgj9UqLPzoCrb8GHanPJ7GHrvNMv",
  "key21": "4EerNA2jne2W5PDfQvbYox4o1TfwyetcXFGw6ZWEW7o6uQMQnibRmjPNDzp8g5bVKEuhCqtyubhRtXnkoq6P8Hmr",
  "key22": "62vUt69pNw2cXbgV6zHigwV49MuQU3AkBZnCt5fQRB5KGshWrDUzzxr4Uwx1RUHKZyKK1bf25e54uu9N8PnVTSH9",
  "key23": "F4dvcSJBoarDup5GQV7ZLDtzpX1Mgdtr6BEauLh2j8rMgBcNFuEGX2zNqnVmPJjpba2NULC3hezMe6jamqqyUd7",
  "key24": "YnXBc7sa2JDsP1SW3VGhretDzCcWXPCmgu6dJLMos2a9RqmRVuwpfGa6wmw6t3waB6Z3PC7wqxXF3qyRion96jf",
  "key25": "5Qth4RfspD4quBxP7r3DxFqtiCNZpdJLiJMzzYokhb3bwyCMfmoKHm8iaSs8tbm18nvXnCuKFYfKKrVohjPPGXSv",
  "key26": "2MgProxQJHCTbsB1Z72HYBMU5Sf28XBJN2gv44DsdKqv79YnRcKfvUZidjQTy7sxq442y2q7vs4ny335d8dizzc4",
  "key27": "3Z1WxJ5PcPXNx8hN6fZUYj8daZPT4m6XKuy2vmrad7x9zfoPmaREFHeU5WVSFDmVHXAbYovkrd1p4UXzuqatCLDf",
  "key28": "3DjBG1CzsyDrhCPtn1Ed5VZHkYnKj4HDF5khUMmXWY8pP3Lek2CHvW37vzTTmgbA2CAhXgcjB8MwyV27jshmtA4G",
  "key29": "2ZwZCyVX8e2ekjGbifW6JBKCVp1LPHyKKo8zLfqKeNQHQaw7RRW2fUJzxM9zVKFAfzN96NnF5z5AHQ6pvMZabP5J",
  "key30": "5ihrQpQ1vUwnkJvJxy3FiVE5iHcHnJggyH21Pw3i5dtKCcrhQpSuHSWM1i6TTXumN2eBwC7ZVmurUP9ffGowwJG3",
  "key31": "2JHGwZkHREvtU6534cEuJj8TkSJ4eRMjo5BQcAVNh9y7mG9cy9LXZ2uPq61BY8qLNehpJwm5nJDDCF4WSH2gJoLT",
  "key32": "NpVC97TH3NEzarVkTc8TEaMdsjPvsLGth6QqFNSP1P3EQZgSAukyXKiuXZaiLBKtszqqwKkhg28HULgT2YaXMrv",
  "key33": "5FfWUPdjgxYryDBkWf9xfAkcurqCSwpocJkWi4oA57atFp8YqfSHqrnK3Ep9FHm2JxScxgxKb48pcSve9R55BfuD",
  "key34": "48nMT4Kx7Et1cxfpA3pZDq14k5JXKXBgPm31CpaKgtGqgDkCssRUcNWBddUsNqYQfHi3muAgvTdipRTQfWEwLhtY",
  "key35": "npTk4b4caodxEe1wJxJaSb6cKchLFUZL1JnsLrYorGGf8sH6tE9rAQuykQQ3e2VwTf4fk9AAneSRYsVpuUh1PFJ",
  "key36": "3C7jzokiKkxghWj1R1UG3p4SaS5dw5E7TtPPMcpH3REgfrWEuErMB8ir4RKxePWtikhSA5cxDYHovxaeGykRoNJL",
  "key37": "5J51nZDp4V6NikXSvQnQe4r6am28NhhD4pVLwgA3dkdCU4fnQobbiuNWZwiPQLDnM4ingVMRKD8H8MBoWYtPcVJD",
  "key38": "2RKfBceLNkTMQtdJfBLZEYk6EKJ9QfByQJY6r8tjFhHRt85v8eNiTZyUPtCyVhNzpy7gDyNKHJGLywENSSKBcwRt",
  "key39": "o2Ddd6fbqYWuRtVZRG9ziLwR638DMqxBMA8k4K8w84vZNC8eNNjbJFdS9VtyJ12LUxr1yhGnxiMZ7Ft69rJKGxZ"
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
