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
    "3K4Sw14GFvv8jP6AufNeQocMkbdhTVuQDfbep7Nbt4vWykVvZ9NXjeH3j3rtaZ1MtbJbdtsyFfcSPHTRMYhs4Ygn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pjLdYqYa1zBBaqEM2qYfm7NwU98g5yWTrTmGwfafVpuxTwmWyBnJNkNuKbiM41K2wit81HggxWvA1rpKJfiMumW",
  "key1": "3coaP5m67v5y52uX2vUZsaJs34jBJWHvJtD2FQmMCwcGC5E4FTEnZcd52bzV21LDJt8ZHyiGpdWY7r66bbqcWiUR",
  "key2": "2qZaiHcPRm6hqpnSHC88GfBxYWVM3ejmAHHEz6BPBDrfK1isZFf4NCywwJKJJ1CjMVN24RHSCkvqE2bha5FrmAQv",
  "key3": "4TNZJP5P6PTUKJJeaSizFZhLBC777GJkQYoTWcMNg8YTYeMQaKfB9wCiJJU9qVtAzKY55SQCPZwniqzDXexVDbdw",
  "key4": "3QuAX5oWv4Z2VgfqnyU2GzDx8vXuJY29A5DX2aJqYYSCFBPASJ1yPv9Q7zdVi9pRpvLpKjhMR8eaZY9JovQAxa5z",
  "key5": "UymqCDmdh1BZyxCUVtRdKHqLrd828BB5gFpGJvNCfrJzH59mtF8B2iFKXCURSq4aQLUtcftQ2zKXVj1HfxYStzM",
  "key6": "5LLyK37gyYZh7JF4d2unYEEDHJbTFWx1A4WeB4NkhCJdDhZU6pppPmyzFSFQH1wYFGnF8nid6axeApxW8HRMNUJY",
  "key7": "2SGniFhwaA8rnjHxpQGrEPR2qUhXoLErD4L5sYKxZz9XFwqMwHmH538AdGyg1Pkpq14RMr4ynbCHvq7gHuQN9wHs",
  "key8": "2ayqrWtpbHaEUeiuNMNbV3pJ9Yp7b2V2VGLHZzCLafgCQNRDXGcmKtEY3yjXwnznNSyYTKa3xrMBJzgubo37Jah7",
  "key9": "2W1Aa99fwCrpR8yavtX3nXLpkCoRY4xr1osynz4cHMPqxweNdZDQbxQkgysJmGVa4Ym13bGyDs33SAhLcpK9gryp",
  "key10": "51X6orEQN4M1MJTrwEHu187Xf4ML2maPmxUtvJeHoU9dtfcERwJquCtfQnT7pLcrZDRPRWcPSWWySvb5XrqUpr83",
  "key11": "3Mg1jeYJqhMPYfwDKkkrm1ySKgUrqufqDn4pYhH9MmvM7quuShDNsrSTrLbkiSBySJe9WCVNRjr6mzxKGFVp1Zdn",
  "key12": "66NXqe8Hu4JEJbA9sMiSxgbGKWYCxApqjAC1ZkDNFuLa2BnBbCmdpgCaPF15KiMoBzS4FD5mHpjUxqHmGHgEQ1nr",
  "key13": "3t6f2zfsikVbDqwGBdsAuHw4JDJvKoLRp3Zs1uYgVbqyYqAL6J5aufCUpFZUAZSXcH4PH8BhRVXyG8ZeXrVSRmo7",
  "key14": "4qp3ViZhWtxfdL29L4UgmhHVBHJSMcrnNTnT2FKnqeFnmo9ZbcAuvptQxqCpuBQcnsBQB2Kzv2n7g9W2hbtrFvV2",
  "key15": "Baha7W4pMPzvu4rSQNDHBWUY5TFHhMzXh9hJrmm7LE6hEXYbBvTR63PZMCcAQYVv3LJt55SHTVWLgqGZ34rq9tN",
  "key16": "4SaGjxtbEP3adXmK1w928BNfdyAnAP9YuWqW5EqZWsvCP7k5sK5C7VhEsY5Y2GFuuKDNQPsLx3j3TLXB7ecu1Qz9",
  "key17": "61dNcfTbYDbAzgPBZnxWzB5bqB9nZ6RLPPaakPrqwncR79tBtmJcqTREDjSRQDxCPfqB2uLDmfJmD1719QEpLgtx",
  "key18": "3W39LHkBw17teFGn4gCDzBkJ1dVJdY5U8pPYKeCwiJNi2irGUrKyn42h2ZtCMgGeaaxdu1zkg5VGjByhqorY2roW",
  "key19": "47ZGXxuyEwFvvVLWduLRNRZdzLkLsGe8aTaAD8Dz54ETFWDLAz5X5r11gQ7sCeuUkRmJKpVzLVBfHCAfFKgdHH2N",
  "key20": "2mQqBFdLreC9FLNLDehpG1oiWvSe8Gh4AzpoWuLvvfqSHqC85eQYD8C44hWduzrNmJ8zsieeBNFxcC7AUuNT1Q4c",
  "key21": "SQULybnaTjAFF7dZYxAdZo2wKAuCLuEJAig4Uxa7mxvjH2E8VW9GQjetfFi2FSRhvPFfcYKbjYrcY2sDykiudHt",
  "key22": "2L1qqjhHrWhQUSKjMeNF1YDQP5RVJgTfL1z5ZuNB4AsTWHMxRkZsgTyRBoyExj1wFfmY7EZJDoyCo8N8ijvpoV9t",
  "key23": "628RoQWLEmDQD5yb3FfFbZz1vqz2pKnznhX2ZuqRhumgDwfpm62doX71sNUpgLYiUeZc9TwiMpfYNRM1663cbf7r",
  "key24": "2iP3xRQTsdhUiZAdHGmvZxEDUvR1FwD5BkifQRHnzna3E98XDJfdrFp4xoFYzEDzPS9KpijsuECCWYWkiGAsFoX5",
  "key25": "Ug5D8HuRFy1Jt854RWLF5R9TCKfMKXrTyFw5ACr3KM46jejRjDzkWrmMgEHBQ9rnhsFsGc1jgD9Vz4aDL8aQMzg",
  "key26": "66uybShVRGCmuhzDAbKxdmJ7AQ2CZcfRzmEKqZzv9XQ5L9fpahRf4urY2WJubG7JpBBLNTnkSNdc98ioSMDqLaPp",
  "key27": "5ECTsH54qLUtr1Qvc7KyPWgsPfibTPrmtiAJtXp15NfLmrBFHf8EhUiKrZzdoVLoGC85VjSkAKgHbKe43Dm7h1h2"
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
