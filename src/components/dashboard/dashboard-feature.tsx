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
    "3pRRftFjd6mK4TVfrsAC4X82RGWTKML8SvnWT4Kkbz4nysTByE2LWD8aCZiMVGRQKvznu3TLwNjBdursidTtmZZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DQEKgCRGrsh7mozXE9PdVvVw5D62EMyNqBg1rsFeKBA3o3xeWTadactt9rfECjRCiFmbYoLYkiY9zwWYUNJCTXe",
  "key1": "4x6NqSUs9Zsj8aAN86SzafNoKjfVtvsRPjaKP1K9WjgTQwCRbTyicFYDKADyh1eQw86cidVAq58hhQmWAyYg4kFP",
  "key2": "uCsayQMiVAVZG89tpdFoEM6u7PFH6x8ooEeFbQcDUZFNKVoJ6pD7FTu4o5jqAdcrkHJxAtykmsi9XQuCBejhHeP",
  "key3": "zbZ6b9ovBGwcugvqScoaVuqTfNpE3csEMnkDKqMjaWVbgH5C6HFcj9Bgju1eX5Sfh53TbcMmn7XFmV1qZBcnc7a",
  "key4": "PiHQKbVg9BvG6DwQ1Lsu11ekU9FpTMXUvEHfCZdN63rEtj7buaWGpP1WW6j3S8iDd4bjuYdHMr6pYGiGnB1dvTM",
  "key5": "Zc3Th3QjCFGpEd5tPUeCfniXAMm8ADaaSArPoAzTVj23BayCpngHLc7oDpSNWEfPSai7vdVciNG5a6LbCV5iiBa",
  "key6": "2KPtweMi5qCZtqvnFmnRyoouW6YKFuc4VKpvywjDyWZGVy8eyFbo99f5M4YzYdJdt5DZaWc7aBwEPi8LuBUQNZ7W",
  "key7": "2f5y1zhwHqBjqsNpCn1YsxMrTKj5hiAQYAmwZNDmByQw7jqNkTCYSkaLp3TeUReDPr79rHuWTzQyQhCPiHNUdGYf",
  "key8": "5zoskRQ8dPoSvC9pMgqX1auHwh51e1nTPTn9hF6uhdmSHGD11M4xXiwEE6biMe45CQ87VaWrFAcf8jp8Tmmg6ZSn",
  "key9": "4SJwJofS2p3pvBQN9k9sVK2bXvZjRLAeKwaKEEcENosALZGFwL44f7pgzMTHBSC5TCdJg2ngrY61hyKdvjLxpDGj",
  "key10": "2sB7BrrmD6wCiR4rT9FtgLTB1vvr6SaQtb7U3rX2FK8LfjiLqatxYPa8mpms8HrDUJicJ2MRc7b8Uq1gwbogPENW",
  "key11": "33w6n9jZTo8TSBgwXatDBmtYG3Ju6uSavP8iAi44rJ2cPdXueke8maGz7KGyftf6Z3HNRMBmEj8qRMfjWLnHSa2h",
  "key12": "62j1LgYrsM72XjthEULUzHpW2mvupV9bFVCfoJr19Pa9sdUhLvworT5khMSnMMHe82bCjMnADCHTqrFbyo6qBTQc",
  "key13": "2fJcNrTDUBpJcBpWYqR4h52rcc7jvSKe4xhuSN1Ktkf6ujeTeX5g4WKpkTDTRs8NqaohYyxvtucNaFG2DkFeV8rn",
  "key14": "4jJCYPGAo9kCRHyoUNuuYBz26Z3tpqWtZesvpWcdUTRgWMGpnM5AyBvNCqYfzxhPdJznereRyp9BPNFaoncMCThQ",
  "key15": "4r7LanyAVB5c47sQ6w2DDWiUfhEuK2ALNt8zoQdm4xRkH4KsWfVnxL9pr15ze29BvEbCaw9u9kaGdjVEjUtLFfh8",
  "key16": "61vcT181GhYx953pWwUyAWuQMGs6Bhj11YG89ZNSho46b6UsLz3zbCHEUfJB68j43d9M76YquFVHmZaazmvGcC16",
  "key17": "32URTFVwKEquKThziui8StP42FzqHr6a4mAhzmuGB7kmozqcjoL5YTiufZ1DZQVBr9Pb3NkzRNUYx6CjmHMNL4eu",
  "key18": "3NLJtfkUCmBT7h1ZeX2n3tNUZJs6vc2sNoTp631feV3gVLU7PNQX7xTQprhFsNXea8fetg8LV4G6b1HEm4GpAhmY",
  "key19": "3VPu5JGYdGrrWkWrcsJzfqdwmK6dyAoe1NySFgZbFE9GR3CuwCpkQr6Fp6DePNhkHXpwTgmaq2QARr75KmUZvu8f",
  "key20": "3j5DW7jbNncrbWVmK6Z9DAfoNpHkNKzcLBWRYXRGMuibwX3chtjkKBWnFCMDtgckr3nHMJAZgCBhLHaBPTfPiwDR",
  "key21": "55vKhGQH1VHLPwqo23Nz2UiW5ZhVZRaTHsckjmTqDbQymoK1c4GCRsMUHg2Bv7sMujrhhePvZU42AV4DBcWExZBL",
  "key22": "3SMW3h3oeY2fBpiNrQPBhtoeafwKiuEPMNBVS7tymMgqrR5aADb57XccZuHeDsZUXG1TuoLwAToMHHrKKgrBSDMm",
  "key23": "3WPufq1DGbhZ5CJmLGrbNr6dFUgaw9TxxtN5V8wzEBEd6dgFtYAFhtaVtS9vj4ZPnRp1ma1q8Edn5ZthmoYExQ44",
  "key24": "BcwL9Azcjfvf1hq3gnWR73sdsdyJd9NsG2F6CAqkxHM3M5EkrrKSk5vF3iWwaL8HS6cBNvHuzsAzd6GfXyvwGKs",
  "key25": "3qjtkXf4tgVYLZGcxjXZQYGVZSs79tSQrrMh9ZXAD8CYNhG5NH9pLfgi3QB5S7nkBs9JDtR7S1t1U48rHimjEJV3",
  "key26": "29rNZvCRbbM1ZtVkJ9DwUT3KtJ7Mc5WBXUp9YT4EnqH2MrXLSwdSL3PANTpjFRVGUADdzSqnST1da8hbjSK4cPqo",
  "key27": "G9fjkCLLrKFskkdYtJbUSYDTnKSecrqEqXvrCX2PWCk9D9heakEWX38VUpD4pTTLsuoLTz7ReVH8Va4J7iLrqHH",
  "key28": "aXfvw2d6gVGC3FNuf1KJpaxkpgNiNfmRQd6mL1XTZGisM29BkbY3vn4VqjHSgqeEcnEinFeNtH7WM4mPP77zUhQ"
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
