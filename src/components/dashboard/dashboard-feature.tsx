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
    "2DboaX85GPryNcL66FpPmxhekUZGxtdEjxQuotThwkHK5132mbsYPipd6A8ZssY22bBRZT6CXTuJ2JCtHnF74BeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DGNpnDEfZ3at1iRopKkwJv3iyPZU8VEdT39kogkRiCuSRvY4UGcHj7qLPJZAp3kEXQDmvgBg1AQx8hckZdsU9Vi",
  "key1": "643XePXAFKrLNjn1tfGRGPKF8GmpG6KPdd46mZweUBaSFdUCg7yy23XycXZCWWhykRLieXR1LFjs2VMzfure2rW3",
  "key2": "34YTy86Lmd8bnepxaDC3fS13yoBxhR4YyQxoKARV7hatZ3AdUYZPQ9Wa22aJ5ANGDfR8ogbVuJWbjS8w4XiQDrkK",
  "key3": "iYKgMjokRXT1SbVijg4Hb2a1jpR7ZqRkF7WANrSrosEZ96LJpfEGDwWf6hko7UYWH9ABNydKQYbe32w3cEiBn2Z",
  "key4": "25zS5LAvwXS1RTDW8xQqtqQsuQ9FmKBC3QpnQw77W5i7sr9c5PX8aSpg94YsAcnRSNbZikYbwXUkMJbjkzkKHNme",
  "key5": "3E34WS8UWhMFjHYJpTU88wMD3vYFmhmAf671qGui5rGYdLQnm5aYty8FQWsUPTbHkyua6HLBeDPpGtZMRqs7T1Cf",
  "key6": "h45eQ9hWCrYv7zs7K6mCZocoB659SshzMSEYGk5qEc5USres9mK9Exv14iLWNphSQMbsZGkoYvSXU9YEDomtXe3",
  "key7": "617M6YRqezyboJAhsSaEtTghkDUTHrBDPNmFNVhBfnfzsGHV8M9yysA52MnWiQ2NTwLSVQwZXFvvxKkvhAVHyao9",
  "key8": "4yzgg8s78NSsZ7fFBhXGWyAVsPuGaW14MzHqo1sEiYpg1zLc9c7JxeYSiDDB7kJQKWphgqEfB9SbuL7WfJ27YauH",
  "key9": "2VfBfwZ9oRzUt8aZPoYmANgVgQFdCYwCejUFQJxezGiehcxCpCsstUvUWnZURaVTyRqYqwu47nhYepZ14JJ78V8Q",
  "key10": "3hWYTy73gX9z3TVe9h25arweaS3NN9pg9ZTSQnGfrcukTGHjfzHNmLSenXhZVUr3591bzoJGh6ptBN3wQM457AnX",
  "key11": "3ycGs9ebC6eE93XVHRfkzFgDDzy24J18mXCfvYZVNbcWpxZMwE69qikVKLbc9p3qzYAmU6UNK1CB7YVtyMv5jGnF",
  "key12": "5YudgA21N469WfGURk8T1hnrKLj3EwYC8Yeuf2iGsv79SLSwEjBdRjkmAJTTzJUbgNUzJRSmQBKxZrnwRQ8Mqaxx",
  "key13": "5qXkHSEDAf2oUzkJt5rx6kVspw23sjSAF9fVtpJEm7DUGKMQFYXbZcjipvmuxLxQmtbpKLkyPneoNdaUXn7UUsGm",
  "key14": "HQfyKjUxP88XjDCYbT4De3mDxrGHmFgHpjYEnE4xfoiEi8MoPFt8Epxr5VJyVJT68kguXNRfDfU7KYYTuPVFZhX",
  "key15": "3VBCn8fCi9en1QvVYYq4H7J6cHqtsRz25BobVos83YRni1C7xa74JVkr3BD9r3KcivKBBazmFMx2pq2DcXEptDm8",
  "key16": "5HWovLWxmoPzC3NRV3ufjJAr22ykDwmnCy59bfCBCrLoknLbtr5ZKDpCrYZp6XLKy4j5a4Q77bUJYx5hzPc6g4Rs",
  "key17": "37SR5tiVd4Dwhm4YJVP8q8Hx3LGKtmNjiASQcp6XGgRrdqMDCvc5VzzhLkxSq1q1qtbqoLKfvWwe6KqngJnTwkSN",
  "key18": "5SuePG6eGZad9nWRebJX9UqQitWvHXQisPRxNkKnoBNZH1SCeCSY2MuNp8x7kGrG696yYFS1mmPcP89xnbkupMx6",
  "key19": "2avrPoG5xYR5JxTEdHF8D7hK4w38TZXV75APgG6Q8mvZ5oV6vG8TN3FboWV8NTtHknwAFTASit9jVoVQKLZg3nJ6",
  "key20": "52oBEVrVrzNQq5mdoCiiEFiciZ4jF8WLnQ27TsG3tp3Rjt3NE7QK19AUu34wQuB44NtZfHfyMFGcDQTipgbfZ3Np",
  "key21": "3iRRqjj1iGcW7UzvbP5fQE1hkJQHPeoXmy6DaMNhPKTsHHEwFfC6qe4fTLhBfyvkBWugtDgMog6NVTutNctQ21vv",
  "key22": "5JLT59VRjfMhjjupvSjP4qAcyQMmBfTe58yViY5S4EbdnXN99VEZNQNV6vVsAc5bu5bMUSEhupkRT5wygkAffNeU",
  "key23": "gcgPkBBrSzh26M4hTiQi8yaKHBNgDNugcHsgp5ZFy27RSP8nuijDrRcvNQ4XZvy3MpVpjM8JY3Em8jTZL7pyzB3",
  "key24": "VuGPoJ6y5eAomoRmngNaTuWBvvraE2b1cvXKUGZAdw7RSwRnuDyokbEgi9KpFRAdUH5pJpuscTxyyAg5WVu5qFK",
  "key25": "vB8H2rRwciWmAq4PXpDebKt2xZYm6fcCcEELr6qPCT9eMWFyCSWzdd7QHc37yEYm5jjFLCYk7uM6fxtFwiP74aG",
  "key26": "3Us6GrwrNuMUtJRPpzZZsXv3nTLqyHB1qpXgFnXpCh7eQhMqiGHMkkPMW5y6CCZWxhQgzVDaJ3fNX69zfF6HpuLD",
  "key27": "3NABaUeQeqGwnNAEaCFzcjzQrBazzQrbYWvqZURJf1Wz8ye1Nrdy2DDEeMqbFybQf6W1KvFkFSKd9k5Zecp8nYEv",
  "key28": "3fB3DX6XYRi49uhGUhsgQXAFJSJX1MeXr3JAPKRdku5g2XZ7cnf4yH7VweGMp7tCxX639U4dE3GcPzADvSb5M8gY",
  "key29": "47CAdHZVGyfUZ8TUdo9pjtrrJVTu4Kju6EQUJSHTypCgwzoFixiHSTQCt4ofBcZ3Um2J32ZTNNG6TUqpC2h7vAXv",
  "key30": "KvhNj1mW45LodPwAMYzXHkmDGo8EWPtkgNhsxq1yrFTkCNwrwtYQ9SccvTLGk12Rv4UrSGMy6poKM9SH2URqc9u",
  "key31": "5TfTmpGtz2QvYnn7pdA1SG2KpQ7nsxpMLhvhSjjSQvS2ayWmuBPrBjUKetH3LCLrh2zqKGwxhvMY54AvzrCC4ESA",
  "key32": "24VJzTo8XbeJaMXkd8hACn71k8CRuB6TkeQhugN9uVqoXaMa7BhPiaz8TcUCNTZH7n9a5pr3q1J1nzVq1z5B8vX1",
  "key33": "4fttjYJcWWttRvXLkeFkpEtwxZM9mC8dgDmCyBUCETyDfZoN9uHjG19KghgP3K4Gmcf71Yytdv3rYHHFF464mS5B",
  "key34": "2fKoWNDpBPuF6VDEtvj6iV8Vhf5SLXJB2z5Z6hGxgru5sksfG2n9Esj8ExLACMXUe34HP5iy3z9qSrv6qzf9eviu",
  "key35": "2amiDnNAAstGrwQAP73yU39mRykzsKLZ1xkXGY4qxvzk8yL9Gx7Ewn8QFUJKi3YNk6GDpGBhJJVuJtmcs58Lc9Z9",
  "key36": "4hGWnRNjP9j41vReVPcf6KaFJupsvxoM2Byi5iFQD5PEp3kRnftwJNTCzYHKWJvnEdaM9fcf2bijRQHdpGt7NyTL",
  "key37": "5MLMz8Vo6KM767wxGc53Dqf2sPLHGsv8akj7nkhUWoKoh4ouCEadSBnj9xqMD4KpHK3MjyPxJqdKULt57YozQJdu",
  "key38": "27grmwZHk9wHywKXJmjZp3hSmAMwsr96aHUaEHR2tgNamXUPVQXnS78KPdhffEQ4cNhLohYigqTavif7qtiPv1JP",
  "key39": "2RWbag1a8xWNeSRt5hFk9dZRCJo92sftaTqfns1W8gAbLzuhdEmnBJ3DL4YAmVS4rxxBkETF9XH5SGMHZdpauWQJ"
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
