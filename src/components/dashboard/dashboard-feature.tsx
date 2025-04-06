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
    "mgAgBbNArgVNSFengubfEonqYBznTxkTcuSyP5pDxYBeMzKgSismvu6aFsw1R6RrjFb5DKmaT2nj2M6i7pcMocd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D9WAtybRyi9y2hVBWSsSpHYu1a3ABgiY8fTcsZC5a8LZnhntDBf9EQCvnC17vKCE28UHrNrWPCrzpVAF37LDHxY",
  "key1": "48WL6z4fwAQgwLJgYdAdBbPCT3L2KPzQ7wTmeRnxTM8cmhRUapaWP6KC1ZERpY6oxswTTpX3QiWUJ5ej8tBoaXYe",
  "key2": "3R6q18KTNmyKQyM7eV3xQ6MaQo9DBWDnU17rsW3rdHoxos8xy1yUuiUZ5gNTyyr2Y3G1Fpq6Y5vcqHgjxqUXvKx8",
  "key3": "5njxSpDAbY44uNNSkzZYy1YHYatzRX56kmxLM7oKp15k5m8vYkBw843z5ARXXHjKARgoT8uUNewsnjTSPpCwtEMf",
  "key4": "5GZtCLTzMsaJMv4myjVUpZyBkTVCDXZZbFqF7So2vQqqiUkz1C2fPLnpgrHzZVDxGXNodTWL4wGgaXVZ7et7TVBh",
  "key5": "PNTMQypeXWWYHeUcnnNNGp5dTBsPQiETUiRwu7PSxZ8TPuzv7uVvs1gTSMDzSz9grDfeG6sEEbabwVoLGUSPZB1",
  "key6": "nLMeUamwxumvZaxqBEUBCJkJQvBhvyzZJfRJprn3mq7jqF8s8WEfExjCRUp3LzbfpcbeMNTde21BRm1T5MnKrfT",
  "key7": "3WoAfqHw9E2ubb1BJp3CQNq1P1bsCz5ZHB2R4xbLNXKbXFS5eyGvp8zTPZY93qzHqoD5R1bksCNBAWecctoPgqiq",
  "key8": "2yx68xkngK457vWb4AK6L2jgyezjHohmq6KgBoWErqYWcmokVUaLExkLxZMR2yDRmUmn1J9sMmN4LMz8VuihMchn",
  "key9": "29PJHanbvh9U4SgpY9GkqW53aP9DCiusSeeezUB9vHW8omtWRtQkuHsB91Eb4wqxs65qwRJPkiK8zH4NQKarXcZS",
  "key10": "3yV5nJt5UUph6eYBSQpb74QRHNLKtHq4Vg1oSBQt381SFYcq8n1SjFZK6RQcCfrHD54Fr8rdjBzXt3tSJYbJxpr3",
  "key11": "5SBH7izuJpvqyG32iqknL16WF5EaeutbqCF9Xu1rLhy3Yc14WNqgy6PuMtXoPyowDS3xavQMeuFU1Eq2LU4qR52V",
  "key12": "7Dco9VhV6FqwHt8yFiJuBtWUUkgRFgo7U899LtLq1skDUC8yuDfbMsgkVtYcB5jGSxVXt3jRFSCcJGWhH9o7BE9",
  "key13": "5nDfSfR2szTqQnQbGoy9a3z8PP61CkrYZCsozwP69n4oF93PuyPdrxevRiZ1ZUrgANVcTr5Sp59cQfhEvLux3guS",
  "key14": "23qoZxV9c5UYuFWMKvyiiqoZBva7M8dRFffEQqkokJivHd4RtLXoQWnAwAetEuuXSDvKJiUvZxJhbhAdR9B2GZix",
  "key15": "8qb4Ahu2mpgaqGmfMNY5dPBnV5iAyEwVaBox8SyBYD3Eo4tYKz9wMW39EtvfpcfY46MH5rfjYCZAKHckF3dCfLs",
  "key16": "3F44zqpDFfBRx6YMSizsUQ5gSodDLu6QXAt5EAmLAw2PcxynJYLoJkfYXt4NMrde2vfCTydiM49QRcRscqUK5GZk",
  "key17": "ir1VqktTrPJxhAyLohCFgvZiCQa1F11hUp56a3wLcMRRY5k74f4r1R76RDuD5MLLaYXWjc2cBiUhQTSQXMfhbBz",
  "key18": "3QipAehMBjzq6QeUeE7JrsVSS19avXPnrmVQhyUkr97gy1MkRBewKmchQzLf16DAcRidZqdoDxqixn6J3Nyh5m1Z",
  "key19": "2jb2qjudP3qBS48KFGPojizBumonfB5Jt2cnJtps4bmPbRVoGW6p3J6tcoK4gBwVdb9NFtx4mmpMJokAvFrme9Rs",
  "key20": "3UzoZAgdE5qAeq4PWtqQfa3ooBNGAPras2Ei9ESVHN5cLDwmVXxcHNXVVQ15spEKtu1HjXyFg75prc6Hxg4aSfYm",
  "key21": "5ZraBMutmJgJjd7W8jhBQF9AfnTXc29fLgDuAEi7pp6EkenxwJ1eM44RgiS6aZF5QWvc2j1bVhVnbPdy26Xj3Quq",
  "key22": "pDPEb3d8U8P3mPtF54RXU3EHUw7wRiSLg8JBnNowW3pAz92jMVKEm5A6nE7bFT2mQuYPhFTGa9eLjoEWuSE8GD4",
  "key23": "2aoqdmtYUy2HZKVwSQ7T6U5q1h1PFPWGpkYoW8C44bNNRendaxN5FHrJN4aciABrgNqsnQg293fpk2JMi5DDiz7G",
  "key24": "3fNZsfv6UWfc5iApg1U9NB5tzzGywsEg7bHP1KhpMGRyrfDCutZ9eJNSJ8aYksv7kD27V3zRAh5Jw3xmxfDmzSzw",
  "key25": "2sSfdndE2i5BNBxMg1rCFk1XQbjA2C6GFjjiDi33hefGkxMsXawq1aLRM1GGTLM2JbdvuNkopFgzxPFrU1uxNj2h",
  "key26": "5i3Ycq2qW5iK3sZJjSrNwZqB1odCWn9r843hzQ85JPjYZ4W69zkCgnDmy7YUGWZhXzSaGB1iG6JFy2brvkdScfo9",
  "key27": "3E9ssmq8P5GNCqEfVMaxYynga4Ltzf9ZoaNTi2MfYA5wyfqe1edj6BNSoc6Le2SSYWvf69Rfx3y7bs33CdHKN1YN",
  "key28": "5Td7VRkR1aUd4iRaBBZkxu9z8ckvGpr1Qa3Yz8z5McDoCCgwZLww2HA8yi1X1deF2RP2LgqZbdcFgNfyRBtM9Nkp",
  "key29": "3qQnV6GZQgJALzrFkZ3xT7FBrqmVzbMP1qEhPXFRDzSgRFwXqNPjCCUdi2T7vFZQYKLBB7zkqQuRq6QJXKjHGxiz",
  "key30": "29mhQpobWcEHaApsFEtqc6nzZA18FmkoRS7YKmVfH6DGVTCZh61tU73efy27SE4Nms8VbTVYYe4XsmX54eqNbySi",
  "key31": "JVyDtBpSdwrH5vSiHREKaLgSaFEGtxdKXDzBGJ6NnCL2HNrjxJUsDPK6MXMBvMLZKp8eW5EUJsLj66XSRQwCy3g",
  "key32": "32xCCNiqvpAnRr7chrkmNftX8RmPxNfRhzMaCsNpgT9mJuQp9jAJPz8mDq1Wj1Kcs9FEYRcBSRUQuHaWa7y2Mjoz",
  "key33": "3uU34JiLuwUHDrXeNhuyddLjKhsFTK9vfJZuH4eVjUebdcptvCPUWv23dFTqmKuRzhVoRtwjMDGMEAJAoUvgND3r",
  "key34": "FRAzys6hn1WetVfhXdrQfgEGShraDCNTHDkSEWv1NTgMEH8dc325LAp9GUXxduHREsqsjJ3HLnUPLkq35Vj3BZg"
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
