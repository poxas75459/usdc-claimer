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
    "21euXZagFtAiNNrcee2oQT5egBsN8ZzgSzMeLsx4yqBkeyurkPJTUgEm6fmNbKktgMidxBqKMqr4xvyVVxJzHbj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bDVWUwFeps3Y2EHCex2VZBp3d66vrGxWkxADFKjdmudFLqPtdkrk2Y53GTEXwBqYDW4hhL5vqp1QL8JtgdcQKMZ",
  "key1": "5z19FqJ4TSb6mNR71dgKBfT3eXqDs95KcbaX6JdhVfMVnAcyE4rgV3B7GLqhgGi4UczxFt59UDE3rTSJ8JEu1E27",
  "key2": "2cSqEvr9tYnrhEioLaFbhXKDbeT32i5kS6CJrrTn8qK3SYNFXjyVYi77wQtn3M76ZsSp5qN1NcvFtQdeEQ7eiRxC",
  "key3": "3E2CMXmRx7Bubhp5qo7cqe3yPQY3PcS8otLKEfFH5WQXvgaRZbVuLDB51oKvftt14GU2k2UeUgFJxCv5rCNDT5nU",
  "key4": "MSTcVXYSPdwTHah6SHksRj5ZWWRQ6HdxDqAGVgEtTJV65wP5fazgRxgXNXapVTLYGbp5nb5T5Bx8UcAF9jfQqNn",
  "key5": "GJGrRZEqKWa2T4yd5k1UcC34h8vVpa93YiWhm5dhXphhE4qGjqyuA1ar3EXmQEu7YBB8xNnwJi5z29284ZfxppL",
  "key6": "3vKaSqRn2RVpNqnFjryXSxDmnxuXpuXELkuSX1jNt7nPKoXuziczRKkXnDfvu6Fqikk47jcAsxszuwecunYiaoYJ",
  "key7": "61VMdRS5Rfx5XRtL6ykLTDaR3B8yLbPBN1j3yyQtvqcVacUTLjx2BLgMdCN2iifoDT4opCdPD6cAoTVyACM1nJgP",
  "key8": "3vBQ2UoWyP9kY5ttdhYTbBxPVYPWGq46KhRn9JBzmMbi4TFBby2BqNiN98wCToAWuGFSJywRE8W717D5NnrnVGpp",
  "key9": "pH84AifQTuJiLyqEvh5svfVpqLumjzKtSG4qvndyVKZymviqrAd4C2nbLSxXi5sFjRKZG2eXifhgpvjhLiSrCgy",
  "key10": "5Ntdabon7nPLruqTgi4fsD3LUKjc5kqqzfaaGuKZh5GkS8CxKcqmC3w1nBn9mi9TFaEAiPFw1792UAqja2UbzKQv",
  "key11": "9wF4MSLsj5w8pA2oXUhktvWkQzZxnSoSNEya5HkCa2fjsR2ADrBSBK11up425rgnpXDZJRHAJzKuvUbTw5UBpoS",
  "key12": "4GAsarNRnHv3FwtcneEjdbz2awXtMxdWqaBRtbr8hrrzCfsRYRLAHMQCecnEfrd6k4tzvxjvYoNDTZD3NhY6uAaj",
  "key13": "UoJpnjURYATPutGmstZxw7D9vSwshVNhA129dECEuGBBPyb6z3hvTHthB4AX5fkSrwkvhkLudnA9zN5XMxfY4Ad",
  "key14": "2zp6zfKmN4fYamtdipryHVzMACyqecMJHZyre3BKeU2Le6aMyEpWpCMN9fxja7bBhR6VkHozpkBDhNwa68z8JJH3",
  "key15": "5xYJdE1gd9E4ucSVSRW4D9MkYVq5naVWriBPxhqeGDnqPMx7buwfqFzqum7dwSoNRwAXP8NPhyAYfZcmzS6mNfTQ",
  "key16": "4Mrnkgk9Y9vjFNXzKRTZGcUj7honyLwavBs5dzo64jznb74rbqMVJmyP2bstqJHBRdL3wUL9xtDA1wXA8viQh5Pn",
  "key17": "5XubDxw2fqnu4mqWaBriZN8C3TqT57edxK775ZJyTjVqoUumPxod5Jz5ujik4C73KSDHY6exXVv1SaZ3scX94VAu",
  "key18": "27XS7Bur6juMsSBkZwPgDGrE8WfDwvruNL2qYpgyr6MeUtt9cVrBMc8Z99tuH9ftGHuZRwfADGudAhSBJDMLcPMn",
  "key19": "2d8DgjAP8Q79qcsJDBJrcpuyUcsFeuNndHKYTk6g5RHA8Yr9MXZ1DUFzjMwuNrjNeKkr6ZbTdsBMVzoUyNceXipW",
  "key20": "zJHpgRXbL1E3n5iVkSK3qBCdVSaCDejzCFehQcs9P7obZcEyKxzjJ61DkwqsF8xeYQYdXPv4XNMfNuHWrnXCazD",
  "key21": "fFqaat5XQJQr5GpeN9kuh3WvFqoo8cf8N99yDUyxz5BEs2vCp5EZ36U2uNPPTKufW9h9c7mGuiZf3akhiGRCxKb",
  "key22": "4pUD7RtGsGxWukWRiAxxWDT3pvSLPctnFDsUrLys2xjhGTGe1YXuQddgtDQTBfsKspLj4bvJG3PnCrfF8raJA7TA",
  "key23": "2E8BwZAtyGczrZiaNwDfnLVH6b3kwowvWpAhVfzBPQvVDiWK2yoxoMkEKegvsqGiPJAWiThbduVyC8DfHvYUV5MP",
  "key24": "4Ndpyet8w8jUSogG3A1LSzvjXsvjgyEmN1Ks1SeCTwb76mNNfsL6MTSnyQMyz5xyGg5NsPMJ2wwr6x2pR5yV2k4x",
  "key25": "4QN9SDtJTY4dc6wCsvLBfeXCLPYJEH8b2kUfpMJLWb5MtrpCkJZMqfAPYNa1tmcsJ1QNkk9gJnQJWfrd8MdeAN8E",
  "key26": "3wEPPPF82CwCmx3UaGNANQrz5vjHWvvB45VZEvdUA6aEHGQcTetbpj3RZLe6jHqXuupQ5uqyHwUsaKhTQZDpCHEj",
  "key27": "3mpi3FCTjAsJjsMUYBAHSpUAFjxCEryZd57yV3KPfzh6CfAMPYjH2CtNgnVUiTYioHfKgUgCrP3GSmv5De25Cksh",
  "key28": "5nRHsryZaTtYuZRVEXqgdxZv8v3JkZVw8EtVJNnmHicFcw9uKLn8B4cdpXGwUT7Hd8atj71nbSyiw9g79adpzUh3",
  "key29": "5xyB8hnfCjzYx9L7Npn8Ufg5ZKUhXWmsBVEAssNjpxA3GDZEm57ggptDZ7sVKugBd3oj5acxFzaCkPU6cDpyhZ1y",
  "key30": "5ZAfm2GC7D98jAK9726XF6FXXiR5anqswETM1wgdF8nPueq66REQHSgAPPwiy9n94LdMDx99nNgkQqb4RSfh6B3M",
  "key31": "TwwjHd1qDqimJdwjpcsbKKbtUFhLWiy6Q71jTgCnWpqgNo9EsesMhFg3EFMYwtTYw5aS6JMQMvm74VuiRT8DWwP",
  "key32": "3jgoiKwtWNd1mNgv9eSCqus2KTHWDQBQcM2xHYxvtRsweJL7SQ553PPJcrEbhWGVtLDurK23XQ2DrMUBAE8bPtyi",
  "key33": "3ULmP4aubX7uEeF1iGKegq9fyKXKUxChTwPMYNkvA5HswnC6UsdFeSQV3q7SQaxkzW4MFVHZ3euc9ZXNigC5uxdo",
  "key34": "5JEGqybiX76ELdzVgJ2Mpmmaq4PpTCo2Ng9jKjykKJKZ3Yc78G7opBpy4QvpJcXsnqYXBVxg2h2cwuDk17cSTewC",
  "key35": "2PQZ7ZZAy8eWv5Neufq8iymju98WZVMq1P3uCdqmWRuuPioaAjFkB34DpvGL6u5QS4tktAPdZJ8C29LEf2HnrpP5",
  "key36": "5EdbjYfgxyqoj4HzMKwojjxqoZY66AYWfoFfUsna7jbbBRxYUadFCCsnu1ydLyhyFpuhcLgfh2AhPR4YcVMKvDn7",
  "key37": "4gtggSPti3mTVusK31zAWLnhkK6oUEy6SR3kCSZimosyAba7ayrihzAxbyKtZqR2Ci2xtkCW2wQJo9HdX7LbNSpF",
  "key38": "62BxDKrV1GJyQx6FXSvQNkMLddGFDSf32dda4bmrsU5HFRBP5xc9DcacH4sgt9ZFArpdrCzL7ubG6g66TEWbkY1L",
  "key39": "4nwH4fsCummHjprsV76qz4RG3TykMzhcbAtSojxN9KSGM5mitziw2ZVNvqbz1Gr3vzRHpkUwNUwKiftRFUzobcrm"
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
