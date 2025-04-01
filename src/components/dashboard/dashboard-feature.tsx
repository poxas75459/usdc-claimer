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
    "53j1capiwGY5QsVqAYQ4mWF9S6HXWUd65k6s5QFvkrSADQkuK94Uua2xW7A8R9NGNf8kEQVnDqSErB67oNKXiBnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SDWbCE2Gn7qJmCGw48tdk2mwDCiigbWup2D6fs5ktUrmgz9vW2bPfJJeLaWdwwhR5YBytqJ6sKpNFpZzE7JGHxm",
  "key1": "5yKsPCV35iq4zy3ufSKwD18N3FB9iDJy8PfrNarvWMzzJEshVtnTtjwNUvcN1rU1M5dkX5SPrsRJdsBjuRiZ3cqJ",
  "key2": "2zjYEcdUFqReFEarJbW4iiccmbkLLeS21tUeKmmxoNkHkSZxH43jsf7GFeo4Sr2KZSSCRDwTUjMsbUTLwD5JjNsr",
  "key3": "2MtrPUMdpcGH14moQuCsXSRuwJCoBBFB2KEYEopkD3LxSKh9jpWECmeCST99gHF6jTrBZXW9LWP6SctGf6wWw4pV",
  "key4": "3BUjKa7c3UwUCAxmvkbnkwqKx6M7HwY6Tv2j2ByTcgBdFnyeMTCvpACNQ9rGmSrSxNqDs2GcGwzU8dKkNVNEEfJC",
  "key5": "8NUtPFhPLDrWis1a4ieP86qRHZY1i5FtEB4kkRJ8ig1NoMLouKYAZuzBPhNH5HGBn5Zm9z2ZqweQhCHcoijzKxb",
  "key6": "4QkfF79GY3cwSae7cpDCVe8eogtEk3qjaKCFazriEvnaXC3Ph6CtHATguEL3gnbhJhdAHkQE6YYZFHYfBHpCkkW",
  "key7": "2NckzugGLRr5if5EYQFqji69MTcLSHna2tqYRvbXLaanC3HJiJ3mxsB7XNLK9fsnrp4hWe8Enrmn8VNJwmVugqPw",
  "key8": "4KpTPdPeLtBQzMgHDQ1ViWqK9SuxgHJSDLqSXwGodcFTGmDrUyHC1BsxD8ZxNtxPu5Naqvd4DL5NgpZVX8RLbjEj",
  "key9": "3RNu4sGyGWWi2WauAaw8cKPaBfhLGrVbpvZqAXgHKXKPVgebvA3y3BActSgS8Xhi3Kr9VCHthukUdXQgsopkvz8o",
  "key10": "3ngXLBFBfCHDwBGKEuBbvA5RnT27LLmpDFyPxg7doHvkn1abjSQVZ1JmDgnXxhGHfiHXaaJtS6i6TEJvvpRkieQ2",
  "key11": "2sb7hSDCh8gkfbhVMYWG2P3UFVp1oHFCWQyqkPpdAGpBYf6uZ949y4M8dhcjjvNgkn5joddhm7BC2F6FA2fGD6bE",
  "key12": "QfYXCTgyYVbxVKUXfQxJoZip6VnswtRLv32ku4VTzjvTpdWCbEnGPVMWGHCyLciSfUzrpviEPF6eA644XaYCQrh",
  "key13": "4aW9ZZXfWj1inAazZLjRf4nuqLuABV6ynXbrvsWtffxG6aBLw3dQrmJYQAubPKUCRXuJT5mdUL3MzBLzNjD4pHpB",
  "key14": "38NLv1zXjTpL28Dbj8D41paEnZpXu9fazAZVw8TpSHpWeoPbszanYTv2nTSPceMApf8TTD44KDFFwesuQ8WgsVkK",
  "key15": "27Y5z5itNehzCFnkDkioNeEmYdFbFeu5aFSn4Whyziz53GUYo7X3o3rq8Sf6B8fkT1G1RCvs6fM4Nwgk9rCy6zp2",
  "key16": "iKSRkfbukHGp8E14HaCYb5uFhZbj2vdq1Z47ta72fDLY8T4qfK6Aa9Z6epzzZUuN5d6TyFxdXMPbvf4HgruvCqM",
  "key17": "5QGAfdt4jo7c2Mfq2sV7fFUapdi4oWt7jVNypj5nrNtQaEx5HtoQh33g7VP12s6PnHxj1LFPuNRxorkZMKK3L5ez",
  "key18": "3dXjM6LBuetQ4FH98drhHUKYG14xUJANN3iEPK6p8X2VeGbzwxqyyUWPosMSNsQRm5ppKPwviWzqxW3uP1A71dhb",
  "key19": "3JCVgYdhogPnEVZcZboNGbM2XoQu75KuWVMj8qMpLAFLmeBDXAwudmtD7vGY6y99tNmsb9a5HjcjtDrrQ8y6n7sr",
  "key20": "5cjmeWceGoST8m2Y5QAoA4ndhm1C2gMoXf4Se2ZNSVPJdjimAePXbmjgTRzapNVvxdwwh6anVm9ZeCMiiq3QcPas",
  "key21": "3FuHbg6PHZGiNzt7WWtJvcVQvY3z72RRmyPkZmrWuPo58PwnLKvtJQPrrBdMS4HzA6TQUoMTP1GdLJRkhmG8UwGR",
  "key22": "5eAhytGybCqKVYFNP9cq2aG9kAxqfnPqX6My9eYEwEKsq8XqHMA5VG1eV5qoNjASCmBqEAj298dNgsUZprRkyMiB",
  "key23": "2F8s5Y4R5rt7Sc7crUBJQMYKBAGnsagiQphAsHmxj8DPBdytHo3ubYcVLYfyTZ5fGEAe3d34vi1jis9kvhqo9H7u",
  "key24": "5KTd4zta2ETCwfbbHBRrM4SS69h7dfgA7Vom5HCL4dZ8YB9CLUdvu4P1Y8ZKZu99o8AZ1LKRhPqQWwgrpsUrmtvu",
  "key25": "5egUQ3CuJsu7Wwqy9f5reFgTHvYcA2Ye9iUa9G8LAyrt83QnZpVcP9cfmRdEVXrixbKvzTkFykKRcnVPJQkRMeGB",
  "key26": "2UGHHgKWBeHUXnSK3MUEQzQBnveHDwYYxzhbVEvrAUe6G1ACoLRmxrFb66rKr8jaBV2HHrU2va9QzLAGWj4kJxBA",
  "key27": "21MAeErYyjWMshBm15ykmrkeQuGLMaDBsQh6xuhhKVNxakvo2qnAdmKBMbBLTqpv7ZSn2exKweCmL1UQQQ6G7RGo",
  "key28": "KxX9SovJHhdVf3zGDyDUGanHX1Gh9GBL1JSFRhzyfkHRPW5V5xfZaJznp5a76hfMGr1dXK4PwU71oreAJmUMf8C",
  "key29": "Z6UYMdfQr8bzNGyzEDrjSmCQ9QRyCMFpo2TFRnbSNSb9yM1WCoxta1EhEZq5vPP7i99hi9BmFfPc3dZJKCutxKy",
  "key30": "5jT79qbtBTT2sxyFqL9uQgHyxhRVzMytJt7c9g6yZbHVjRqFXvL3ARXSypzKYmV4pnvC4Txhy6X6yV4hf9wueNXS",
  "key31": "zhSHKp5bPP4p6q7h39deP2yFKWe8XEzo8ChfAC3bfV4YdGfMQAH6qM5xsZfarpD9JgLovDra5y9iLrsegocHUkF",
  "key32": "nfa6wHkvXZU8nLMPDSuzyyW5mrdKasE2dCCGXudhfteu3s5jT3NoyLkNdkJYHmMcK1YMT2cd8VkZ76nTxcmgjb5",
  "key33": "3e2pwH2ZWd265YgQhq4mwXcHhdoKjg468jon2KmJBRurTFtse81CfgCG9qkj8oAukGxqxU9T92hUANQwyMgb7PFg",
  "key34": "4Sj5mbAEMP4LSa2EYUBxq76zsWCE5EAWW65dw4TnC8qc6V3qAkBtqTgjhv6fPme1S41N1336e2zADnaDexTP7cr1",
  "key35": "AUCF43YH9Jk9BNmzHEDtsYZE38AfvGDq8zAwCiEvWaYh5x4RvMRWSdddfoiXTixtjBi7eFbMaxYieGRCdU8CGDq",
  "key36": "5aQshzbbLcbksTSr41CseH94NcPbYV98dnP47LtihAtgjPgc2aMEGdUHA9V3B6JYJqZT1FRVVDVYVVcnZsUW8SNH",
  "key37": "2ZnsFimaKrrMrZxXeanH7garuQEtoQ23u95FweqX9qGmyyNNzWMuRwBLPAzgFtJMcbr4Y28CaCgCDiF1C3fph9Wj",
  "key38": "3MHaehXM7EocJ1St6tYL8dtASiutPSAJn3ukP3Bcz3p9mQNawU19Ugo5HAdHNba6T1UqgptVio2P8in77o9vh1uJ",
  "key39": "4TFNmgai3jJJbCzLFkbFqzExjxckskvcXjWf3CVkemZAof3U59rWftV39jWyr37rtgmsfPgR8paYxoWrMRm78Eg5",
  "key40": "2VTQ9MVCjCCBApcWRkeYvWuip4cxGaihufdN9ipeZdeiviBAP32dNqoeMTgoRdD48szgCD189wrf5f6VKtV9bo1C",
  "key41": "25sGqv69uCixBnTLiL8932nAKATXEUMCFJSqUJrQkGtFnjW1QmRmJQNUGHnQkc5hJWNGBNiWHgE55jGvW5EU5932"
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
