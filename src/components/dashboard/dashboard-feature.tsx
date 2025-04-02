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
    "sqTLRZ8qSfBFQ3bCjF7DxwKZUDPWgYr1YPwaf82xwBRXhVk5vrRrmZqYckJcaoqQjqVo3dhBmZJQRJeC9qnEShZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DZNJ9q5BxQsViB1XzU2HPBtQqXc96rpagGk2ikcDdWb6HDLtZX3fgPGv2Ux5SRDPcBEt9NQnvA5EDLY9N8en5Kn",
  "key1": "5QHRq7UmSw4vyKxwJZcZjbo8NG9vrmPcx2rsNzB2R31VoAaH1vjbLEbQZQX6MSYAu9JwU4NkZ63Cbv1W4s4eSHDH",
  "key2": "4A2a4FEUYov5XdP4zSQLDiB2PykVv8ykLrmSRXu8DMXMBqJC5UiJdRJ3D2N2XC6GZAcHEVZRrDovHk7LsC4f8fu3",
  "key3": "RBExhbuvmaWzrKbmTnP3KfSpjGDbunQeeYERtT5DseG6bqoP8X1uGjNPetivbKHKMqwbRpFFy8PCrCG1zUaczpr",
  "key4": "25p3frKDsASYwmQDrDEgwibzedPNk2Vsi8GKFp5qqwvgddBbdmKUE8yRzd4R1ZnYdAaSz9XuiuZsR7Z6ENUoCb8n",
  "key5": "v9E3UoFeXBeAo2LAQ1cPQ1skSVNnuZTvWmTHWzsy4JySFAGCQVmaizGZuzjXYFBX1N2Dgi5CjapL5qqQk8Y6ESu",
  "key6": "2fkK1MpuN2w5AGHyWeGzTYxrrF8diLfrQvpGcM6Tidrh2pWFWVtTCJUVPe9niLXfpjzfiZMKNFBdqJZgiYphbXBo",
  "key7": "xhHwbMCAMhtKixZCkH24ABjQsA7YvUypBSWxFKqYrxTS3NDKXpbFkWv51F2j3fW4dSNYu9rGTeWbwWPaLESTFM2",
  "key8": "4cf7uTyg1Sdcv1fp2k59FC37XgP9ERqpHwpyZ3ZtgdHiNfCm2AeUQQeAqBeH1QYd1rcUCKK2MuquwCVzghhdMxDr",
  "key9": "5buShp5GABxTxfnFbRZoVWSjfQCwitRsTmjGdmCR9qyYQA6UY4hPJruQtYpVDyTGDo6C5LfjhrV5ixTn2ZVQ9yF6",
  "key10": "pAHVwdDpMMEmV5YAnSJXLYRsvAF3LfedtqzdCgddqbvhx8H8QsunRDJwDVp2P7RWPm9MXfHx77kdqKL8ACfq6AS",
  "key11": "2MBYcqgBU6Z6EJrvtydhJUnqe12AzPAGccQqgXT4zA1eeDXvZMJXp7nmuChaD8fGqqmXrCGWqsBHM8b2gmCyEGRW",
  "key12": "41Dg5EyDtNLoVfVcyuhfCHexxEdVyZQWCB2bhBdXvVLeji9okrWEDSNWYPud6wCbsgeCCGfTHDP8Yh4YRrW69oGv",
  "key13": "5Y8d72HwqQDxDfaWahNx2VTreBkPfPTTK14WHMJy7ad2SJZS33QawDa4LpPHW13QmB1pA6pwbkx7P9dVwQPbL1jX",
  "key14": "3yzgfYkg83prDvYR2jS8EX3pcRQrpq22jy6EnAnVF8dXjn4i86RDvrTtEcVQz9vENrVfqGtxq4rh2Mg6FQPJcety",
  "key15": "4EAveagvhR7beipd5jZw76CQaNDzEUUBWNrt9MHVe3e8q7jX4H6xRDbJTE1Q5WhKP22J2qtZGVX5WiJQXErn1W8i",
  "key16": "9HGC4sdqLQ6fQaNPFs7W73cE7xyDrbR2EbgNpHR9qfdsPBXNAQ4gQuLHgUxE4TaLyU5FRYEYQgiJBh9CdY9BYkm",
  "key17": "5pxfouJL7mPFE2AvfdwLhYHFcLgEqci2goWy7QcnfaKSv5QsxXgW7a6pJQ6GFiGytUia7JGyiKcPVQg9kFMwZchw",
  "key18": "WHXQJQP6FBnWQJ6Jgw4aZE3RrV4pfUZ4JnMRQByZ2qhy8iko1mExEo2eViNo27cuEaF4gAfd44vhC8v6bytorZD",
  "key19": "3wFWis34wkxgYUcDW9RkxSTc3TMCAeAVR3WJXZgeTAdBr4TkknMxXf7KUMLu2wjqYUJp2SCFyR8AEtRAgH7vfo8M",
  "key20": "3FV2RjCUaGbAi4ZNeMy38AQfbnThPjqY2XfLQM4KE5rCYr5LecfeCAQ3BRkBvRGAwPjKhMhNDNzrpLrWmddd13pf",
  "key21": "5konPi3fFd44Gb9tiAtDfbwJfMYQUc6ZtxYjLnoEKmEMHyUW4zQx1YgtaEWLVgcQHKzDkv2ZLMPAfNwBcN6hVP3P",
  "key22": "5m77T3epULxgbSX8QPMXHSMkgzrnH3KwSdPci8eBjgDippNe6mXraoGtX4vtaGotHsui5dbZFX9ZenzXbpgMhsUV",
  "key23": "23Avc6nR8emnjefykPJCT84uoPYLKJWaZ1d7uPJWf1zJvqkVaCdBcVwM1iS9aQsezu6zheYe1fW8TPB38M2v6G4h",
  "key24": "YcymQrCVt25XpDJ8RZTh54tmvYf5ayrUyFDpNL1g6sHNUVnt6vSMfAPsLwQACDz8wnRZZ5RLqBTimNEEi3FYKAL",
  "key25": "3FkxxnB4yLPsBVykqY1fyNhYECwCFCrrdzLe6QmzNNWKTt1eAkB2bNMyMu5KXq1BwxgNtZCYgHyFxkRLfG6tbbXB",
  "key26": "3iEjFsrsxBeLmvt8DQq8fwjpm3YwxhfscesdSLDcpzjb82H38TqWFTqFY1NooHkgRUcM1YjbEq1gbVcf4yK7pqxK",
  "key27": "qE6BjspB3bVzjr3wpvyJ7bXrRKDxGQKYH9Lg3xZ4WXZH6nrq8hgwxgWGAYeqQr3MLhPLWaGpkNFiLJWmrEacTGm",
  "key28": "GLdXL2hPackrFWZutBVoKCU3FGQTSMiMh5wS8WnJKEuG9mCgmcgNJbiNqZcTzywD6XcPXtJYnN992xYf3v7Gn2m",
  "key29": "TjA1qFWePmtg44HBYfhkHcGPULbYBNvGfRFWfKtJFjYxLNPJhPcNqw2KY9bn81fHpw9bsmFEfYUYYUWzj3RwNpH",
  "key30": "4EUnSW9bsL4FQVtKgVcdDGR3nd7U83Vg8C1gqSsCA1osTYRx8it6ZvxMbHuXFjmT9e1HTNiq5aVc5FtdZveAcARd",
  "key31": "5q2MEji8GC3qE2mR5P8BgGekHfvU5HUt6TEZVXrJS7pfsYAVAenBWV6H7BSR6FAeKHkkh88ddAKfaL4rSd7bXdw7",
  "key32": "2odEDw3puDuc4Hyx265yygMyDwGbgxB8iyTnnLpSKcxnjcCRue7t9gndChGQWkH2NPxEovFeVozp9EoaChBJEitk",
  "key33": "5Ub6VVdncanKpoMyBJqkgkmwywM8o7XWoWy2tV2P6S4j9ptNn9wmVJiw47pEcc5sDpeNorX1LnvTmK7w7zcx7P64",
  "key34": "bW4AExamzCUsZvVoNut7h1YBvbNV8GqtcCDurjonnM1764etRAgG4HYf9xHTT7MLPpoBwQATwJtwKGYfGf6KRwn",
  "key35": "dDfTxCwqog5m1bGeBcEN2a1exrWekvoFTw4T7zddFJVRVESb6t7k1Vo8HzNtNKxwzdD4Gu4Q3su2gLDoptkRy7P",
  "key36": "pPswGvxv7ApY7D7xSeAwHT8aMrNdvjZhkutqMAsbqeT29KHQAqJgJz389QpyyjbZgrBgLy9Kn3erorCRRh8cerQ",
  "key37": "4z6xPSCFvQpCWhsJCnUjiv4a4ScX5WVQoDpkzvsmRre1Ybsd9zGfpAtLzLf5D7VgHYm1SEDJuViw9yehX6bacouK",
  "key38": "42GDgAqtNhgna6jB24JCGNFriveGu8GVZD5rqE2MS9NXrWSS6TsBmARQsTxShq2KeejZKkkHmHvNRFH5XhNWHysE",
  "key39": "3MQssSajw8JDoAqvdXPerqYFBZpbnMbrUGuSfiiYUoZ5KQ8Dtj9VE6nDfsXEuufdexiezL48bVvk4NbMi7ZXMzew",
  "key40": "Yh4kbhhxcJt3A2XQ82rJAHBS2hRZZYtPd8bKr1FNUvXrcSv3XdqSZF5Npmu64WVajMrP4dVPYkbc2rBpnPkKKqP",
  "key41": "54PEKUXKZLyxRxpf5j64FhKhQfA31gqKzPmdBVGU3vVkvuoxaRaiyD2aMBJZXvMXkxfZteXhZDKwG6AqFciPsV5k"
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
