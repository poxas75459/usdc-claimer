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
    "MzSCYV3GdNU6usfdTxThRW7t94HDZyuqprZXRQzm9uyZQGbUC26TB6GJPK4CMyMkf7fcAGmzJTZA9qBnBiB3WYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LZxJoJgVrU7mzXswzXKVaNZuCMhsWqY7mbnFBLL8ndYc9KmULtj65ZXR4NYa7dwcaA5byGCMxgzZGBT9rHniFaP",
  "key1": "4gXEnXoe6KuFZfzMZoBUwHCpGjeTaunh7nm4Wfkqw6pH24T36WVC3s2mHeayomPPa5TSSCeyMsCYLtatDJRyvAZh",
  "key2": "4qSdrfqaAQH1p5u1wEUvw38tnMd9bcXwhTjEt5J5NpDwMEwvgoM8WMPfeecge3Cvpzy3capknQmhZqpynTqA98Qb",
  "key3": "ZQDLHEFyRaBHs5b8tr3LDLLDpDmJeTb5oQnbgmKc9JLkHoCTXR73aBxvsQtQV9J6557wJfgtX3F5FdJ8NUvoCAZ",
  "key4": "4qNc2cxgcYtEFKFHtrp5A7FNY4L9rVNdxVFt2Mo3oS7V9Srrh2Db6tMRcys4kLdV7qpaukh8wW3BapNQGyYbsKeq",
  "key5": "bkFM6wWJ2Y6fec25FJaDZV9jiPPK2DY1oR6V4xLnMkByN72XCuYiKnQ3sKoZCUiUqMhvdhAPAhTNfznnF19hnRc",
  "key6": "2Wkfymhza5Tbmvo6kNk6V3iCWukNeLZV9DPRXNubrB63PEfeAN3gkhgct754kgDRMQoufwjATM6SPY9aaqPeDwqw",
  "key7": "4uYgav4gJ6KeLje6hbhwZ7TwT7tRpfcp1VnZTc7vzFXeZJbKHABMo83QQsLShg3DzuKxDP1dd1KeMZQZ87GDZH9N",
  "key8": "5HDudkSzygTQUuz2yMpAYsK6iSLtyP1SaAdugcNJyhCyoUD4z24dDRnLDsayQh7KCpwVXPeiBQb1Vtc3XxDKtXf",
  "key9": "55xMEcFfEMSizwTFujAxrzCHndkYb1pTUE8aiCyiX7omnv7siBg5XfvYeeZ9vzEvBKgpB7UFsn9HQKDdFsqfi9o4",
  "key10": "5zkLQJkmfJfbmYn4zqEkGjmaWgCpm5n6BK9LFaTbFz32RukEhnyayWSCvrCwJ25hKavB2WYUW428Zfa6aVmueHba",
  "key11": "5CGxvH6ooSHCuwdpTKVZMsmpzuJSuzQu3Fs6mRagD39b3zvvdaVY4T7NJ8AetBAeJprD2arcLJqj1uQzjFXNsJBr",
  "key12": "4ysbZe2czm7hw9vLV1sRyHibVHvgntPSkq1rAn9fKJi6DfP96WVtRQ54UFiYd2zXsvoiAVGMX9fQoLyYqTbjkwJd",
  "key13": "4WneQZe6ejPPKgQnrwBXJKh9tHifypKhkUVGr7dfjNWvqV8LHoguAte9tLBkRYV5Q5ympx8xyfgaxmjxF8MbpNkb",
  "key14": "3eK8NUQ88RavvHGm7vfVhvkjcbeGaqTtgd6QqgAKpDaBTmEoEveUehw8K7RqjGzs9VpVYhrm93D9uZjpAU3b4M8T",
  "key15": "5eEZDm7kNfEULYrjuqoUnjgs2PeC6evR226orCUATFvsd644QKu3CDnfpbmZjZuRGrKF9jg3VD4S9vfjA5GhRk8o",
  "key16": "2z3VrTC1jCiMKM2Kes1newN2bR8TMpkyB7fZ63ouwr3ZR6a2wGEUPBm2kEcffh5RwrrB9GorUQS4EXsUk7EKj8BH",
  "key17": "gb8JWASi9jNQdwXKXuvkvdRzV1qsdhjMpSK6BtEa7ZjR8AtfiFaQp5QVZU6DLvhmVX9jaJMwB4vg47euu5AWng7",
  "key18": "2H1dzGJhnno3YoV1px4VNFeXsEcg9xcxq1Y4jpHhq6w2Bd5Ck4N5dhYUtXGwtwNa7sXRJ9a9KbnsG9YBXATmLBRe",
  "key19": "2HjmcMuEzYgcbga85ZXFmC82WzptLHqdcHUudabfmKx7JiRWsRZJsiSDrqScKRUgm8SNJUYqYr8bYtSkZfKa53th",
  "key20": "65kQRcB8vXCFupqbrH6F1diMM835GEuB9FCDcTRcHZmMBBzhYaC9rkJ7zrvB2gvor3TBgLFHLvWH3GNfvGRYjJSM",
  "key21": "65aej3RyEJdY2CpyRsh1CbXJDTDv6LbSsb1kQCwbzXrPmJMhLbeMvFHRYEAxuUTWposU9goSNfbAMKm89XCpUTgu",
  "key22": "2EN3tS3Q7eEruEZr4nptZXS8hWWGVm8hPmUTe1aukoQSp3suRSSoCSa8oyjP2jq1eNmx6XmjdwMKvnwHnbFbmH3P",
  "key23": "51NhBsQpqZn9zmTzPb8HGXPZovXQCAj2Zu5DvFNYeb2BYDV73RAAaAkXsTS5FYn7JNzasQuerhqq4xmRVxcnCJPu",
  "key24": "5eaLDoqK2WoMVpzMbLyDDTxaXsAFSYwnkBWdyJ4rvzpb4LRptx8a396ez2rZxYwMEo8JPMvvHmZKWvcCB5XawBae",
  "key25": "4yckWzdxYdPYAkn2iCQjonjdyPnBSvUfEx3HJdaEE4As8ark5M5yz1aD4b8fXR23JFckB9SxsvRQyHP2Laf8mELM",
  "key26": "5C5ywCMANsLnzTkKvn78dbj42WUQbNcnoWpNhJLjifLJV1QNjYhF2nusV3djbiMAdvAFJVWXV4B9mrD7zD5dMhQt",
  "key27": "63oZYdEqtLnzUBpKvvLoYsUL7hgpEnEo7VPjb2KTmmDimkV7v9mKgg4H7WESu9ZE86btQ3NwD5o61QzqaBth4Nqx",
  "key28": "cvScHREHDL5CrvjWabiTQUZvaDYA5Nju2KHcrDB7hCVmpc1o13wPT5z2BhbAPFBoqnVo3ssbrgMXRKB2kmSWECW",
  "key29": "6Qrsu5un83ywpcQcwgH3wABfiQUFGibk6tHckuFncN827pDBJVwFJT2UHWYqfqYAvjSNyjgqAJAP2h2uxC4sRiQ",
  "key30": "5cw2BMAP4iFrfQeSiygLmwo6ZwM4FVRDXFpih5FXZ2BNj8MVgknPkeUw25xN7J6Py1ZsDgmdJwBdKZdJj245WhLU",
  "key31": "4bo5sYUnqdfFhaPtVsyLdNustzLTaJ8BcrdTgjBBTLTFgc66wU7RxLH4hw5x8JL6qRDVZen18Bfv2hqwRpCAT29o",
  "key32": "3MbhaCh5tpCyzYZjrEsNMbLjJYgTdtFZ43VMHWmh7KHeYM5RsLnQMy8C6DqvmWxVEWVh5YfLeFHdtdKf1ZteiYTY",
  "key33": "2naepAok8PfidEV9Mpx7HUboaczeQc79XnS9A89nHnZM9eW7fCYNv8fRMXPJeA6a8FXTr43N8SiSCTFZNCYwz9mZ",
  "key34": "5n5qZqtWKw9vELrrprVr3pZyAosuSb7qn32oGfT73Vn4Ay4RHnLL5aQYWHNs5zgjPvAmeZqjo978fDAzCQ6TjoaK",
  "key35": "3gqMMnfYrrUeJfTvPdZBsWmQZt7VBEkxyiZe6hC62Tv6ddzHQCED4ZmTQqreTQnaw8Pt3boqxYqGGwgnDbFmJdiH",
  "key36": "3F39vX1wfC7XP48cmc8Qf91U2ZAwSaj9q5N5xPZvKeDt8tNpkj9tJgzHoF6yJsxFVUTTzVW68sjsySfhGysZfoc",
  "key37": "3hZi8ca4RYAqGipiNFDo3iTwzizuv445FvJ2RmFADSWb5UYSMqRGDmeXDqmTSP87YnDv5eNg6LX6ZUz46fg8Vcvr",
  "key38": "5YyMSzwMQ77oNxXB2LjinPKYkZSZUNfMgFmh4a32W73m5C36WGX2jfvoM5rY6CdCfdS9mk579rV6iZsx83w7Yy8G",
  "key39": "5gQUaPAqGS2oH7EXkqc7Ehraem8WKyX1dQskcaAWXhuTPqMHSrHVSnQbajW9jJ9fzrtkvd9JhppVdrDe9FQha92J",
  "key40": "2H2Pj6peHSXosh62MbszKPJ1d2bKcjLoJSvv8UMsau3fWxfF2CNvXPwc9Pc3YTkSZDVuFnY5Pm3S9gVzXDjLhrZd",
  "key41": "5GqR8b29Q5AM3r3M2cTJYqBFuWtNzLVskoC5Kkptfcis52JLy9xH2izLYxpYsbSSHaHjFtGmFEPzjyaXNodxsudM",
  "key42": "2U4AKgvPK9cxRSQMEJE9M1Gp3oaknc2gEGPPdm8Rn9vUVrRx83tnXYWAFNvLqGBNFJ4K9rjggBvGiZfPkctAiKhf",
  "key43": "3G92PJMGBpFJ46hMEyLCrSAUZFQKDATw2rFoZ7fPwAn1rQqMw8zCvVLq832xhPphz7ic3P4osZHZnkcNN7AY6Zdw",
  "key44": "3jhLELJRdq1aM8fHLZoQjdjuLMcVhCrA6oMEB5Ad2zUfzF9omNbsWmo7xXJAnSgEFbAHC81FGpPs8pa7KPXHNLNV"
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
