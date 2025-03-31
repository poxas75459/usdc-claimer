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
    "4TuNyc6gVKk8Dj2rXFdnhRvcDEFrojMyLUjANzhvQDWDGqENXrJwH4kQB4dVCepdnRdHznceyHXSEo98LDTDTAwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U4tiqEkTcLDdjkVfsP3xBW7B75kAcG5UXGc4w7jXf4V8fpBYkDkV57m6VPkCPpMyC5y1ui5JCoyWrvEAPKJXMtD",
  "key1": "45YqSqA1AJJY5iQb8yaBcSS1b7MyWQb421ewqjXBv2b9xKckXsfRYKWi6mcQCUy2S9rSVR1dNy84V8xiKcxhd9Eg",
  "key2": "32gBMoWwnts9tLshhnrHzMs15z6StSgiEnxiUeDYEc4Ei4Cqh78mZLymApEgWvcmKYSeNGny7e6yEzJLqzDAtiZE",
  "key3": "NzEU6qyYP5QXVZhkHPPxqC623C872ve8HkvX2K1ShASLYAhQ2QUY8QC33hP3Q4ECrwWh37tHes6nyYsZksPENXt",
  "key4": "58TMVa8Ufu46N64FpiAPQ7iygCMppUZR34KWkr9iYHpPXoWRXTHHa8X4ubCxFUpP2uHMzYwBW5wjoT2jdqF6C47k",
  "key5": "3TBQ8yJKoPQRZVj5S9tsQkQffEDZxY7BQcUpoyyiNABHt6SWk7FjpRpUEgnywxFkC8SRfy37eqQUQfqe85qtaazh",
  "key6": "511Hd8bVEeeNuPUtwWd1UedctdcvuUrUMqEuUQUvmybmaYZVhrM3ZYoSRCzM1EmGGFTNBJRFaRj4Q9RVwhe4GAQ4",
  "key7": "3pG7DFBJZA2VGiUf2b6EKAU8w66aPfnCaN4aeJ7ZeUjBN1vWBDcSJaUCEiqjvibr2mZS9qA5d5cgHyus8PV1vu6P",
  "key8": "2U3SApqmRGUv4SzAzqZ4AJPQLKoGHjFBnnxj9SNPSzudrdfnr1sb2ri8VGXc5hd83LfgU3d1VhZG51JFVrNDbtpo",
  "key9": "4ZDqZigZmkKCxiAmpoqa3tm99BQH3ZtYRiSQCAXRyta7WpgPVuXgErVuQEpBzWuiqUM4JQcQ1oDP6LZEHeTb7WSW",
  "key10": "5xD9tagAyP1S5YEXYA4uoMpfZMyfpnTmkj71hW9bdf8bqRQXzWXHkxsLfFv4YrGU5W5Mu689zHu4SE5aC3PyPWvH",
  "key11": "3hkk7qsMhN4dLMzQUx9WW2aLPfLtUSE6P6xKgU8AYYTtg4jnSHkFN3iP2cNAdBdwdxwsX7u1f4oUaTA7ZDqwkERr",
  "key12": "2hw1XAFwYMaxCAQKWJ2JPqnJJqhLzSCWvHtVE1C6uiiF5fcbGav25wREUSwqv3cmgLyhUyHEXvDffcR4kJdBFafv",
  "key13": "2ddZVFXu4MDQ9N63Z56qCqbnNugkCxZzgFxoJZzmYhn8wvi3qJVt9Y5bvLVJxevACZ7T5eqgsZBJaFsHjx1KyesQ",
  "key14": "2fFJpz4yYr1QX5xER89cPFjUoxnm8CWBLYSfcs95rhhJLbhyarPj8Sbn268UmXW6DbnT4xMihwPi8gCnK2vYo1nK",
  "key15": "5iHsRaRcVZ9MqTL53mSeh9aPRAQG5dH6wk9uPruvDvwhAWarqYGpDe6tCN9jBgysic9cBP8sy5Zk1S1LeRt4nsZG",
  "key16": "2VyqGu9RUFgy4hqLN1CsdVh5nTKyz8CoqwxJs2ti9R8fyE5BZip9TsnYJshAZ15ZRzRrdTzJSr2mSLDQ4nCTbH7U",
  "key17": "5z9bPuMthshjcgcRs6ntXb5pSjmmjqtsVpkjCKefoT47WgjYUDHhSbvCkGUf73unxddUak22WezpFNNVHXbgr1Zy",
  "key18": "2qXshbnc5ybeooRwCibwiubS9uRKjPeMhMzo59Bb9igGyM319zpDZabXT3pcLGYJy2Q5SmAAMrFpTMfBFe5K6bVK",
  "key19": "GJSkoPxXbJshpfkYNJEXsHSzs9Wnm66CDKxLzKXc33yjW19iBHxKxqG7mbyjzKysWSNDSij93sKpeDhFNFiwJEp",
  "key20": "35dceYop3u6siTBLi4B9JUrTUfZmbAK2TPEntmgXZFZzYrLvHyrBEVUqSek4NdHwTYnsMxqUd6Jx9ortsTbNsrEL",
  "key21": "594oXHjYxs4ZsLToToc2RCCoXNyqfR1sWbmSGzCaVx5SRTy1pr9NsE76FLkjku2YNmZHSMszMk1dEheBDkCdm16q",
  "key22": "2NGcTCea2fXGGnDUob9iL8kwm1GSCxPtYku3azFDU4rgANvLL5DBA4FZssq3AmxSVNtqMANsyebH4X9SQC1DJSvu",
  "key23": "X4oC2aUsfAFUpeBRex9ojx2ajq6JKtNutx52TffiNq34yyGJHYQxWuu5e6Wz29GoVNZXUKD8QnF8rvnXPhbfBSe",
  "key24": "4FG7yrVq793oKDvy5W4MW1SrmGX3igh73TwuZBQs8RpKdViqsECFLeEc74mkyKRwvVtYx4hWfaYE73wUomNmQULS",
  "key25": "2zbY5JhMDhxjWxBgvS1ChsFhcon9gs8ysTjri1VrVHw4fgMbec9XYkrLdmQsms6Hb4bBKKCcJ6ordMpCkBvemf8w",
  "key26": "3utZ8FcyCFTG8wj4arDxoELSnYz2PJ7tpJNk6DNarTSMha75p7JrAz7MJiXGVgQUV7kmiAMVo69nN8xfzJRZqi3Z",
  "key27": "4DJDU1bHQzVvFdvABsQr92kXnZoMHSyfMWYinQBeSpetS68K4zXbbJHpN22oV1i9JkA681ubQ7ow5ZfWkxMPVV7j",
  "key28": "5iKzjyBcmoxTwwdksk7jjJS16e3ap34nCSFru8dV7tSL9unEkwkP4ZqKf4St6H4feurWuKh45iV64jnAHEnSLRSp",
  "key29": "5YgHnkQ9BbdcLFtnEysSQooaVmQd8GmM8o5st97qgr3GnatyeGixQ7XHddr4nu1PBYNV1BjULcip6ypwT79pgt8o",
  "key30": "2NA6EJN8VqjskVf6NKF9TkJphe6jFj3H7hEgM5oFm1cMX738DMatZWGiDDj69BsydmxtgqcDzrFSUTXT728gXMND",
  "key31": "XePDhTZGcpr96btBAxcFBNe4Q9zrAPDSSQKceTwynajEEgFstuEd6q55V9hesMDYNeimqpu4kZUZDT5uh4BcEUx",
  "key32": "5Aun7uMZ4QEkBA7QAWtmhiYpX277HbymwFJU9AWRACL4onasNMMEnQFQTwg9CQy32W1Q3A58KYnN34Mvmj7YRGK9",
  "key33": "4FNMhWeu821BUuB1VHE7KgAqqTb8VEnw8HECQcsRJivocUXTViRB4yHsoU6R6kzz3AFnVDmXSsPK2mpCDjFf5Cfn",
  "key34": "2aCbk7dYXBpaKwzH9rqnfGvbD2M9DFPudmzTa8EEJxg49ZVzpgjGzketWoSunbCFR7cWf1C9oXszAk1hanMDZrV1",
  "key35": "3EQDPpAL9XnKGSHd8EufiJvZHMBkfjiFhwWehJKavdEGSWrYtfzFYSFpYoGXt6q5gj87kRYAmgh1Ab8DJ1byTenU",
  "key36": "3AU1tigNSyYUBcBKQ4jgPGMyw7TurB1PtCBBx9gkgGczbfxCerFuSCWyJSWQPNU1ZxHtHXdcwsJpMwRNahkLfeg7",
  "key37": "45ehR9N3rjcT3ucjY6HpXYkhjC4ACqx191FtegtuQkW8FraNYG6VnTJV8Hrhramhn8FSSCY6p5BktFpg9hDkDAsM",
  "key38": "5bGCNGFRMBbALTS87E1YH6WQQLq9Gqsb6MVCFqtthTewUP4gWfK3nwUc7SXGcqCfuDGA71PvuCeeXmAQCCH6pKwT",
  "key39": "4CYB6vjfUNz94YSosY3YGV7dnhgLDs2cBXvm2LGwxK2mobJAEDg3xt8HNWjwCuWcTXMnEfYkveKcx7fLHC18RFeV",
  "key40": "3K87d9sUSZv3md9DXnBC2d55XLBUdM1FjVb3tRHorovJmU8QHgdq5Ei5nfZSYHVwyEt2T95c4REDHUj13CZRdZv2",
  "key41": "4igKjyK6XPBRvyEh9FNJM6NFism9JiyBMLejER7xkfPyoGowM6eF1x6Qp1Lzr6HNnR55mDcWEGvEFp6WnN8vr4Ma",
  "key42": "UcJMveFmY6bdujUDAHNt4y45jngEG59nD32QB5yspTDM9WZMKifAspZ6imA4hszwpTsojU4aYD12xukHHLbzBQN"
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
