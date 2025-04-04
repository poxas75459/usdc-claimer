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
    "4etor9Umm77BTfUsvYrrQxkd3EcmTYoGE7tMhihRtWz4eJ7jZnQkhz18EcLZprZQeqfNnvkhtyDNjP9W1a1xNTLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xHuQUgfd6CwNhTTvDSG91DKDRkG442kvbFJ5ynYL8fFHWQR4i3NZUcdMT7rSaf92rvd7NqC69gh4kSqUxPbfZ9f",
  "key1": "3zaVnRjQE5xJZ64CpuwXsabLabeBsqBqMFzFeidnQnBYSyF6DH8uyxZ9z3SmDCSCLkpg81vGbH7whwdmVbNJqtSo",
  "key2": "3y52chzzQPygUoBfTyCHQ1pA9kdHipQBNaYvHHunxHZ1eWD7L96JfDUgcWudnSkBLqh8UxCtCLHfYAZFM6nbBMpB",
  "key3": "4yE5F5cmy5RA3m4SZLTJ1wLQZLF5Kq87cdtNNF4AueTmaodxMFu53LGx6dXfW6vSev3bvUimVimFidHGp5KxUUdF",
  "key4": "5jP59oa18RThCFX9Zu6CgrBXkncd4S4FrBa3zahnyt16UkgyLZi3usv7X71RbwuMPc1wUxFLoLad1E7tiSjPREBg",
  "key5": "2F6aDGuknj7vxG8e3Wge7N9FP347q9xufGrpYiSzbZxLtazv8KGrzaGgc9icciqTJDHfi3q9F9LXgLSo4aPDhvWw",
  "key6": "4sfjt3Dtoy4dWHBPbDrhPq31PS1B3m58D59k5thc9mU52mx6D1Eepbfa3jUyHDZEDnLDcXqKssuC42H1cq8bvWCR",
  "key7": "DvikAurKXAPEHK5Nag2VPLFZn8Ft9PQxxD2CJkAcJ1ymH9DpGcmvC49NZiSF5bgd2T8j9Dfes5bHwe3CtQcS93f",
  "key8": "3gQg9gwpfJb8cTNvzLP94Ny7fUvhQKQj8FwDURLEyU8wsU6FPHsgJ4nnZjC9ncv9xanDkJPw4euq1a8STTNM1JcD",
  "key9": "2oshQq5cbsmEr3gEZEwXEzVdpJhHYwXbPE2yLSn4nxrUtzzwmNXQ7JBtCxBpNqzGz7bMLHPhVySF9BGkeZN2h7Eo",
  "key10": "363d78s3Y8qRuVHusctT9c8xPzM6ZvQjHbAoEwBBrb9vEBFFxMFd6ostQsuMTPwK7SXZ1nHJ7tsa1y2Ew9mRhJ6A",
  "key11": "2634MzqpBfsau3qEUzA3yLCh8WFtTQPqCw8JHjETMdbx3Fd9u8weawx1b4LPypxFgGV4L19s1SmzHREi6uVZn9Au",
  "key12": "4CWxEeT7gG9ra6LrVfkzBGkc4vSjejeuRLXVKLjigBuZ68RuxJ9SRWoHdq7tKjRrJY5kS5xaX9uQNkHeDM4cYWTN",
  "key13": "4H1ZdU7HM2CW2fUXwiKuUbqMVX3FXgEmxdY8Y4Z23rYMuhaSCHKyFDYqnQYypCQjSFhdosbHjY2BEGZkP5wgTapN",
  "key14": "b8EWd8oHVkwWBj89MP8LhvmyBgMrBkCajew96tKqppLoLyK18YogyES7yWtpEPcK2LYGkAxpsDipUXg4WbBUCkD",
  "key15": "Ecfgs3i1zdY5eR8HnyG6gJudqRFzYKuG3BcogA4V5C8pDD7ewphDcvARckMtqEsJra2gzkWpKHmnEQUKqpg8D5h",
  "key16": "3eXWY8AGLC3UYCUeMuVETSnZehyzpEEt1Bn3H9zAosXefqiunUyudKaDuVf2iM2ZiAsrBxeMo7PhuXfPmH6ja5kq",
  "key17": "3Zt8b4cY7HzMLMK95s8ZNYNDv22v7CoRsqxSksG9eoShVmRan1bhiAorQGr8xSPAZ1mCfYGTRVyN6kiDsHjAuLQn",
  "key18": "tyETp6DQbNJJM8oXvaZQd5akjWSKdy4mVp5Z4ixnigxKtRyC8hDkCG26EKqpubrgveFCmfo29v2E7qQok7CMiVj",
  "key19": "3AMxcXB4AMxjhQPxrHSLmepDLTi3gFw81uf5yzFMqmdvhTSKEboZdb5Nt9jnjYbpLBfUwKedd1ycUyaJfUU3VXFg",
  "key20": "ty8kzwBdGYmgu53JLXn9znKJMoL4BwiuEzwCRBb9FTWkwiYdH6DgaxcR6ssgdpxq8BqvMdo1bpM9ZkjNQo8itAz",
  "key21": "3GsAfb8ESgkzMSzkyvvhamYSWY6BnqwzM2ys8Ge78tgsyDhJnER69Mfaw2ArZSF4VBiYeFFvzxd5mSoUjgynkJHT",
  "key22": "5875f9BqquvYNH9faTfiNSDLE3UzFvTHHq9Tmw9zuKs7SqhicvbprHDHSA9tLd2LYm1ALs445oWnYK8hgxiuMmdE",
  "key23": "5u1jByFNfV5SzrW6HqFFYP9MnVFWxPJteWssqAe4VqbHcbAbW6833MBTp16fejqfeCWujAueZppWQ1gpDFFMc8Gy",
  "key24": "32D3uo64BfNgypetZHmhdDLFV5QnS2ZPA4S4esTng31RkqaHenwhS9vVDKxyram1NybdLiJG6rA4rFMvZLYpTMho",
  "key25": "3NZtFqAmYWLQ8AQ5JfKGLwbsKYDC8baygBYEXQh59BscoM9rdUoD5PWJTAShFKUX5DxmS3WQHX7RhFnnNboBo14e",
  "key26": "G5HQ74J28o3zKgCKRtoypyomCRdEtcJtwx6ZzCt8o17BZ6XRJR2W6GQc7MMMaNLh85Mrroivm1tu7JeL7VmaoJN",
  "key27": "62foD91Ykcih8xqo3BHF83HzTfKAUX3VfaxMyKT8Gkb7enckG1kbtWpNSt3bU8rFzZWVhgcUfMKgPsugFUyMZftT",
  "key28": "26BBpZh8YXu5aW8tZjQD1Y2NrwgjXV9XZvY7Pc2zo15tdvH1637wmRVQiZmSM1JvBp1p6yxqcm3cM6uPR9TQaVv1",
  "key29": "3tG8Uc5fgk2PQ2MnfyH2kobLmzjD6yvor6gJ3E1GmutmkF8wCzqgMSJ4ixQtv2ZJgrrkAs6JfpgsnEMsBDDEMatd",
  "key30": "28SFLFYYAKAmvCnLH8T3HKsioWWcNAiALgPLquAn17DsXGCg43WkjP6kTbVn5mnAQz29iEoTXzNKNDi3qn9V6dzV",
  "key31": "fDGDsv7D85R2TBbNs4sjiyzKA1saDWVZV7SKUHgcKxiFo5Dez3AiqJL8i7NFUf2aUL13qqJZwJKhRPCRpcynEFj",
  "key32": "2LbLumuhoEAXLXNHydg49GpvMZXuSVJLi6X5RjV5eT4HaiQDUbhj9v4bYSFDza9HaPfbriDvb2s6yGVmdzgQq4Ua",
  "key33": "341jpjmRhJ9wqqAnVWgkHR4wTUZQqVBUmyd9gZoi81k3wSqhnX3Th5EjGBhfm8GhtRRmXBivW6MiEBEiNLUWeKP3",
  "key34": "4axUXLVsFxKPxVworeDTKLQ83NcSN99ZUYe1B3CpaxQsAG1KavZj31ym4fpBkAxpQheVLq4hTxHr61r2m5ABGEKZ",
  "key35": "5ShWt9UBrWph8McwhMhpr7gigSp2nwJMWNdfEteCfZwZMfJ8kqZeahp4R6YsBjydFoJ2VffE5r6MTZ6eMSUoRSXt"
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
