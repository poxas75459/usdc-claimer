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
    "4ScufZEkWH1VJXXfcz55uHVVJZBCpRqV2EEt23SjHAKq62eMfcXfhGyAk2qicUwJjHmC3QQMNzMPpxUwpAeeRyUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CVrCsiToTiKz5YX3otttEEVov9GYPDuvLXpNAHFGXtJRoc6t2pTKHjcDn1cafngwB4UxqCSwGZC5TcZfjTnF8zy",
  "key1": "3kXRkhRtiuegjyVTPoVJwKgkV2Tfg5F7hEmTzkjUsT21AG3LYCQdVaMVAExRKK9jhRffZQpFNCzc21SvZGbimMvH",
  "key2": "YdFt9pNiwd1zqBiQJyKfML4BKgonHCozPHokQSGWZmFH8xdPWahUN82UhucpB6p6Xegd4Hu16dHMV9FTuP7X8xY",
  "key3": "5MYw7hp76BfuMLYJgDdh6jknVQ9nz4poTSfb1ub3JZWysBHZEtp8nyFdJZMTFdVQaWX5Jym7KjkmpvSJxutpwhm8",
  "key4": "23KCyekYMQCPLbqa46WT6kNetE98jj9umZS9ZqWNZFy5K7ifZ9jUhw743zucQMMo83qt8XjsaKENMjQkpwEAzjyp",
  "key5": "42r2hjabUxweozsZ1cRCCzJuypTkS8rrj6QapqauSKcNKwrpT5BKEXVTkzBa4eE5vCqhHCJUEFprjqPCdETThQ7e",
  "key6": "4BZRQB5X915tvmmL4UXFpcrLmmPLyczuLtkLebFsuikmZfAHiBhL2rEnYgN2QJCQDYwwSPzkJ7wZSHSupRx9ugKq",
  "key7": "3Qowe7w6KsRNn3U68EwCGD1J4rPna9aHggLrX4kqckH5x6GCHDcEuTYZEeo42qqsK8TaSXFo7MHwHErphsYCEAeB",
  "key8": "2NN7eJUCbCSLbCaU92wstMFNKqjkfwo1XEs8F7rNuxJatRTPMJ7ZP1MMbDfu4VqUnpvE8sZPcmJKdgXxdUzPpLup",
  "key9": "4jgU5iNrmq2iQ9qhRkAPyjudV6JdDBFTiHMAJZ1odCN8FgqL6rem38o6kZppwWbR3hj7ZzNt5PUgjkar8kHDE83J",
  "key10": "5j25wzrU5S1y6RSb33HKsaNydxpootvWsaCXioLhw22JGt2Uo4Mo4Ws1eJZeDFoitwBbfwwKzP6FULFTDXKLkCCu",
  "key11": "2jTWTTxq3Qm11JDsWVRaqudnLnnKe31dQ5kgTdcBRvEbo4pWLL64DB4gdWjig1jT8nFYr8dtKDWGjgVMRaWwExLg",
  "key12": "2kNxzzW7RxkxuT32mwFweHnRyyiGb2hE3HKNLiDMR3Wa8qZR6J5HEtWuXKjrhV9H9HKX7SeVsZnuaEBAB6u7jwCZ",
  "key13": "3tDv147MK7236vYNP1MuMdXHBHt3oKGxL4LPShNoSRUHTu8EMVG5Xn84KYmuG6iKC9dZE6m6oAeofwUoAjYTcRyP",
  "key14": "5Er7a6qdSV77jDxTroj4gGsWtwDN5ugHHao9rhQQQeeHtWPDBh75yE7cUaZzpUbNKtWV3iFWJz83mVnvGfS4PWVk",
  "key15": "5Mp8qKHtUFz9Y932gF9yZNQujNXCeFbozdEi3SZr2nihfKrsXt4iz2twXbhuiZ6U51TE5Jqfiqtxx17mL5Q6cZ9X",
  "key16": "3dijSpcWgeut97FcvoxhPXpDcA73ZXmQhnSMeAt2X64g43YKdMr3HtBDzpMwLqJzCzMBbwMyAMhZBNNpS3BgjERX",
  "key17": "4gjHq1PZVxGUhFY1NwYUWSYRyXMV3zyUgenrx3wHUYrTkgzw7Eepx716PULukVMyz7pgFUct627fJHtMJmLaDjET",
  "key18": "3aYAZV487m9xZ38yEhCY9YYmXeSGNqbxJq6zQ4V3pjUE7pGqXT3D9zcD31wFjcKZ4BQVF17WXoKVevsT1yaFNXRc",
  "key19": "2Mx8tvA6fEG4gpmg1z1N64DH1biqVBCMVDiUiRDZxgRBghDD4ECYGKtCtk1zvxCzYV5FfayXojDLDEpQF45ThZhU",
  "key20": "4JZcUvszBGCqvDbHRWu5CUfRvHP5NnmQVrLW5wRuM7HkYdzHTQEEBcxUs8PrJAL9voXxQGFdGAHDau8Vg6j9hArg",
  "key21": "3zA2rBkznM2X9iN5Hks72zESMPaN7NSj3StvmKp1YTaDdA6PGTz4Sy3ySdeA1BbpSsvChTwRXx6vhkdFSZeYZJXq",
  "key22": "4ddr1QbEQasxttwqme7eYuf4hxzPTpyEQxmBoyM1nrcmRLSmmg9QGkxAScRMq35c6SX4xxPHvpuZX9HRUezCyxNx",
  "key23": "2f9BFLaGdxJxFXUusYZNwGjcLz6ytM6s1CvyZDo6YN43mV9tJVd886HDnvg7ADNoXagi5b87sPJYZWGEmXzCgAXB",
  "key24": "4GzVmRXVLPi7CQeVyArnZx3o7yHHi6Jgaw6wPXvLaeZvKj32GpFravQKHPr3XxWS4FUunJJ5HSCoKLim4xgMQeE7",
  "key25": "4VZJeakGZJRGE3ETtEYExKCRbRmmmmaB64NrgVhBiowKdKss376hbE9vvjvYCXGGSgTMLWd5YHvkJPo8Lp6yt5ix",
  "key26": "5zWfXqfheMcRR8mDpfTAx1K7KH7krLAaKohGNFoboSpTJ5YDauiRuQNsuh97ekY3UPJWhZZzetQi6ieGjqDJ4eVn",
  "key27": "3U16mk3koCqEr3gfwgVzSDw8ANnt3KtKtjPvjB5h1CRSAk15DqPaayQsABfmE2DoEG25b7H8iGWewh29pHKowdon",
  "key28": "2NR58mv4P5rykNuoyv96TsyUbJqc9VFfjX4TBZUFpYUZwQXFL2fkdu1JybU8ERBF4nhHijtCseNjGuE7ruJmoxsR",
  "key29": "46ng5C4NV6jbxAxFUwarbqgZ36kVRGxWepfvMKjuZ5i1cUgeAwPctwebyrqXqKGFU3TRfDaZsqhTnAWFqfneHkPt",
  "key30": "2fk5imhXp8MZKDN5sopK7LFPWzF4zLvsPoYgxDBxzpM9s6sPPGNBWMiiS3m2wJeoa2rAfN4tWFPVCggHi3RNvxFT",
  "key31": "3AT9YUyEYbvwkhWkkLBCPz5JRS5jxKU7Gqhd4igsXu9YNLJWTr7neJsgz8iFdMSAwjR2PmREVmnPDyNQ5ECvfeRM",
  "key32": "65FVrp8LXCJXe76ZdvjFwiDKG5KV8ajJgPZfhyta4pKEraxwGzYRnZkH8Not8vUrFUZP4U7pecjKcJeGGcrWaDqH",
  "key33": "4goCtD3YdS1XmWgSA711phhtAq1LbGKLELfmY8XSSi6Jhrqym3ZqurgEUucUk9qKvbyQcaqkqfLhEghQUk3ToLT5",
  "key34": "45PDNPNuoP4Wxeo8R1KfkqHGphB7Qk5Ti3ixkS5VwT18FSbSrvm3qz4AegrcArCVL3ouByxS9j2x28fCoBi6sRjg",
  "key35": "ULMpcHbKaR6pBd5fPfgPAkS4VDXx2esPyfvGejFPZNJeci1K2W75L3mzn9WkM6RgJQHcpNvrpGQuQcp21F18kpa",
  "key36": "4uCFQTrzEfKamFkz6VhLEEPsi5FUR6f17APhBxEf7PkQe1ch1jwdejLonr18yUFXRmk2WVRSUECPgfXpEBvvPzn6",
  "key37": "4KqeCcuXi9r5xYguZeSsVXQSqt7mmRo2vc1My65Wv8G7U2F86GnKEZvSdci5zESajfNSeeB2L8SfczW1p5H2Maqc",
  "key38": "1mG6nkNzrxRYVZzn8rt3gpRWUkzA8CFGtUL85bjQfxw9WceFA9UD8J6xAzPiZnDc8H7Ujagw25zdR99JkxNHN3a",
  "key39": "53bEhwmnqYH5ibqyTegyPtde3YCoRpXYhcpMR6H1fkniXCPP9ufMJUJwR7zRP8VsywHB7dv5WQpgrmUcgYbaM4HX",
  "key40": "3srhQArTJHSY6LoPih7pRdsZZa58yKnzbs21iVeCPbi8iCw4cED2teRjVGA8SKur1umHVABua1RadRYB3wuyaVfK",
  "key41": "5z6AL4BY3QcJMXeaTrBsR5PzcWm9Kwcwq4beMXa9UR3yMYKe526JSPLhedJSjjp3h9xWFYHUPnCJ3fru8htTkhn5",
  "key42": "TMPcqAu5jy8K3y7g6kgPYnSWjHM93ySKoSM4Qq4qeskNB6RpWdcUqx7oVtaK3ce74rts7jdsr7sW1ZwzaMaom43"
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
