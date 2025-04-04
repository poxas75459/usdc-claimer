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
    "5M8RtpC4TZCK28Jp1P8pc21W8oE5VhYzGj4vDw5izywPe8LzzN7PgNDcyN2j8ZnpGuaZ8h1sAepGHvJqKrfJuRp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sj6DexyFJGagJoDvKh1rgVSuwc2WrcM6g6pPrAQYcZzjLJvhbXQCqesmmm9ub1H7tNwpxBWFnaa86R5aBWpp4u6",
  "key1": "5yAhdY9HrVpih371ryZ8TioW5SLr1fSEkxXc1nAZKtfve7mMTFeYUXuCtR85TK1iBgS8TwhzHqShsHrxkDQnyamP",
  "key2": "3HMVtVwDadXc6YER8ndprB8e2dHmp1ozMr3xKidT1SiYKPjbKS7HgkH3dYzNUE3tNEEFcFJrL6occAZMnhAjXK5J",
  "key3": "2gfrXuVrZcKTsDvFX4PYfJwUeyJsU3pSGpePWM4Ve5Hpjyse9EnwbeKjdvmRhjCuHENP4zquSuEb5LeHdTWnXodK",
  "key4": "5MnVUvKvFihE2ozXh4DYns4SvKbGPxAkKC3AAyU6sxCCbDjPq8GAKjR6b6XH57T7G1Bi47pRhnFjzw1obXxHc6Xf",
  "key5": "5LBYhsQDVVrtGbEZdkEpV3uiPdWfbRi2dSj2qz79xhvDAnewcPKYLYcswdX8VtpSK2jhngnKU2K5AZQr64m3jAeo",
  "key6": "JZDLATmdvPX25VukeJjuQHvhdeLtquF4bydNzbdr186bEw77wi3aAHGxDPr4Doo56qrduLeNmbvPyco5CgfCfYo",
  "key7": "3o4omPyj8EtAMzbv5a6jkDBtfveZppZvDrUqTx58KPjKuwafN9nmPHei7C3bcUNK3DuU3DRDiDyCEcMQ5wXQeN57",
  "key8": "FJsMGiZg1SfSfDSYAeiA3uqKZi5Ea39yCg5LsCsuwDeP1Ccx3FuiG5G15oNj6CUwqEW6w2EQ9j7qhur5VAZbUEW",
  "key9": "oroZnc24YW44j93aKAhEWbf7WGcryDkU3gYSeSEcThaamoceiyhhX6KKBMek6RhyPYX6aV39qcCXQtnE4tH9Ucb",
  "key10": "3YtrSq3Y5QTBsQQdmXSygafCmj82pA7wF9br14vDBgf59BRJZA9ZtUtbU7cPSL6SzgfDWzoyQ5kFpF6qT33eZPg6",
  "key11": "4Yhp82jhDcVCkAMRHTB7nhVMGnA52BLzZL1dGao3hU92WUt6WSvS6z1Mk61FprT2HkVgRY7AiyZtccoGm5GAfNcC",
  "key12": "4CtyraJgJthCxNvHo7hLJcCDE4VvRm8hxwVPj36GeigctoV6gFBJBQ7xBwx47VGxehLbScJ4NdJ8NyqDw8FBGq3y",
  "key13": "5H3KwFs9AbJZJgDtyTcJ55QwYyUvbJB2ByxKCzKShTsLpXMk4evGyMyJtsaLBn4NsEAWrvP92vC8raM42LvweWrg",
  "key14": "5zQEaFVprnVUrzH8MPiSAFfuqok9Jgjph8Y2hmi8fGCmLWC9CZuaGi2DoyPqPbkqFFhnkML1enmGdzGvXDUD6wPT",
  "key15": "4UbrwBzkKGz1ke1Tsfv2eUYdr3acVTMbQoijpx3L9AKVawiwXMipMZs4ZsPhDrxb3ZBKs4DJwdGkFjnESdJj9KyS",
  "key16": "2m9P51aVHvoQvLh6xCmXg5R7UgtXrN5DzF3S2FTf7wZ36psc9fCTBVJcrSYeBuiTXfgtxmqNL8yyNGQZX3mwyDN6",
  "key17": "2yWS4DYT3xP9PsABJbKJiDjKGoCmn6VFmMoY4gAebhPEAV2mJmwKWfKhQ69dxjVYNyJszpGoyqwbGkFcRYEsakDw",
  "key18": "37MKZXuor1whUEr4H82nP5MdzmSeijn7sg9uYPWh4ZgLizZtFvZrq1JCAb1JuuF9Q34MQxwZNfyjFo64GtjkYc8a",
  "key19": "28QcvciBhXunAyNSdiQhYC4FkeQfXNSuGFcvn36Paa3EiA7oNfSoYytVKe3ogpRS2JaH3M2TJpsRFTCf5kkyyPkm",
  "key20": "2Lm8FffqpPwyyA6H49AY9oqzcNJp3WQiDYmhB2hvp68BcnaibCg8jv6XpjYwT7k7ftzwFTXGJxMUspPLzU5aJLrp",
  "key21": "5HThjUadjcFCXysZDswoiS16CN4XQxq7WbrcenA3E1Jo4HpiKMNtbb5N9y7hPhNw93HYV2UB7absPzjGeu9Fg49e",
  "key22": "5QrD9g8uZJ1M14ctuGiRGfifYeHEtAZsGMDcYgk5GP3vpPm3NuCiwX7jYhbuwaDsBjcs3dWEwVTcjFpkuCiaiK4E",
  "key23": "3L43L53GpQNegHXhxUjqxh8j17jcjGpN6rHMsJrbHHDZUQ3f79Sf847tvEDdYaXH9XhC1WWgB9X64B2wegLsxTR9",
  "key24": "3qZFpPEjWq3WZ25w1DoAFVcJKGXSoCdLtwgsGUSAxzt5EGePkbHNbv1eCkozCn9CVwuVjDngAegbytQsDJ3NL99R",
  "key25": "3LN6bvG9B4PvRhDXaHsGbs8fQE5rywtNvFfjuWR5jBJiUiuMkpsBzUreFdFn9zoWxuEAaCdLac3Qv95xDozKqWf3",
  "key26": "5kZCeiAUC5toyEMpke8dyYNtLc7MU9e1EhRYj5Bc9fMDtgzsg8d1HLgtrfWheDvF3TDxQGqYEgWKPrwiFaaeR9Mr",
  "key27": "T9AbCuRajFePnZ61HumW7XcVWUiauwVDgbKRKTSx4dxLzgUJmDWa4oX4iW6zoYFUPo7szxQ1TNXFV4f8qeLjiUt",
  "key28": "3fxJYUtUoCKaTG5wuAd8CFY1KLzjZXnWbXJnuyC3A6zUzYu2MrUQwXvp2u4awKuEKayfS1wdSz1tNY51L1fF4REQ",
  "key29": "2Avt6vtkSXboVWaZEwDPDRnVYjKHoNRDX96jLM4zXCPS5Pny7ysyV5uwJ4QFCLWKWCKNhGoKSQCd9hpwgCHCif7N",
  "key30": "3mnxMQGpVMVYvNmqZwuYcoqJw3uggtU6GGkPxHEPwsFsWRBRSHyyCPff5iqDFQXHJsZiFk9abUgXeswwfNEciVpV",
  "key31": "4oDTLPUGDGBszKNKMms1S5YdZbYzi31W6BeCUp7shcQdVzLEyKA6PdkHCvp5QYHRnKBqFVKL1T7xLF9aAEbA8k4s",
  "key32": "3j5LNCtM7yeDv82cvwyU2e5iLF1bst8S8b1UdmJRAajreYtthJUE5REUJeK21KrhbaRva5NwrUi83spnYDUzFi8P",
  "key33": "4Nbh32NejjC1KzeubbrFTeih5rCqj8XzvQT5HmsR7Lgdk4JWcDkj6ukWoKcUq726wNmBxi2jW3tSgnJirMSH7DYB",
  "key34": "5qzKuD7WUVS13T3TqghvYjg86kwaRZ7d6XNFby9R4jkVbtkrkpfh6MmEnqvBrrbNkNnphfYqW4GvDx8MzwxuVQzS",
  "key35": "5vSbwLurz2Wjx5PSCRkpYEgJRVqrviuGUhzcSpQUHfDs7tE5JPiRHiRWpUxsCkeazrqpXeJZESpRxcDF9K3oShzX",
  "key36": "3fxx5H4atXv1H3zYFAKvcMXPVVEKZPMwSZzaRrcyhRQZcW3gGjty3UikpmfY2a1px9y13gBdNcbk3hHVdjAK3mU9",
  "key37": "3YDbGzP9WRhVXKLJnFb28132J1CubZbp2W5kbsVrALoC2SeP73AToNkbEfmSQWbo5roepQMMk7E4KjuuS3bUMNH2",
  "key38": "5ULRdMj1yxbcc69KGhv3tT2ESv1xq4tv1XhdCnfp8rAaeSihcZuW6w3trasrWzQypyRt1hm8zaCE7eswhFuUM9Va",
  "key39": "5ThdsuK72c5BfbqDDhHwGTniaLsuf8PdjJrw5BMgGxAzojpsn3EFyKjPW5iB7rpXfqVrXWR6BPnAUh2FoVvRtw46",
  "key40": "UAAFXui7xhHnjyHSMfc7shkVnNVdfB4eKCVeU1hfFkDfcLjfm1JL8nssb721smxgmcQWwT2KeiFKmJKENd696RU",
  "key41": "463cQiYCoGTPDtsDvPkQWEztyLyYheubu6xVZVSkP4VgK9xw8qwfAkuU1JD8wRwqFtdG7CP98kLNa47j6x7tmhrJ",
  "key42": "64NAwkaT1XgHz9BdMtd1EEqfeXCJPkY8p6K7wwSBNuS65NxzLCe9KB2aZCkCPWUgrUv9jojPsauYWfYqoHS6NGHb",
  "key43": "3frd6V35dQTb5mh72yexLaQNGxhNQJxKELKzxyKbKZuTpsGsSNomb2P6dfziemBfBYCj98TxfUyrAXgjnN9omqbo",
  "key44": "3qqoh2rUX87Y49JjLjQhXxvBgfXA8Q9hKxXqyRbULxaBDZ5bE48EZoC5JsLAVrXRMLWnb2GLZ3bkLF3L68WRbHGB"
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
