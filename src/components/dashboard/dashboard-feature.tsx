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
    "317SSq7BZbjayCN5dA3qBj2sf4qz292cJmfM9vmaFpKjmV1M3YSW5WFFBEWyjCskCHznr8NbJGtmGNoNduMdLo1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eKr9aTJK4JXivTKME9fZYZADvfZCwERK82GgZ6Xge7nRYrfSYnW42bCL8RHuJqN2Av9LSrH86MCRtnqSHxYwYcH",
  "key1": "5sNWeP6c3sZ6APKMsJpekHuGCck43Xi5THpzgvKTyKVd8ykDUGVjLFruS6SPTdyvo9xvAgwSDnU1W6ybTc9HNdNh",
  "key2": "5yftUCHJDZKcYK22NHMgfqpi2EYDcUW2AG4v5CQJLpPof1GNtt6s4qGb4JNofeBfN8a5Cy3e1EARTJbnMfJ8Jerb",
  "key3": "5eNmz3WFDEJFLEDWeYCK3QVPs9qGY9TZDxE5m6SgQHZD7ri5CGnhnVMnDMTaqz6CJyppdn1yLh7U8hJNRiyGM2UR",
  "key4": "5KrpYyQvQyvAapCn9ZYZ7HvhEzAjdwswDfpUDp4332ivbkEn6Cq7ggoQrxUdCrRKrptJcghTi7UWMAHWSyU1mRRX",
  "key5": "5KstXKq2x1gt6TL5wLhw9wkYePPhH3BmN5sogAgHnT7DBXS62cctBYLAnCydU11eVcwBAxnVb5iZA5SN2EpdLzPj",
  "key6": "3xPq3Nd9eDoFG7wxbZmidqPhjPSwYeqvsHtNbYAiAYU4n1NekEVajKPos2JYaEZnc9A34BLkuh9CbU3NRvgDoYS3",
  "key7": "3NrPHeVmHyozosVp3n9u9SJx36bbfLERnqquA9hgHbRd1nRWki8bWX8nMBe6cnctcKv5JbomCQd3SVwZXXuZVRbo",
  "key8": "CQ9e16h19BF2ku6Mi34RLxnWmK1Br6Ev5CRcFdpHR6rWJtdEA6srS8A8BPb5gkTmDqQMQ7rVS8iGixpUeNsSpZE",
  "key9": "2uysaGmEADZRsHLLQfWFyk5QWtgjyoB2pHcUXyZEJLbDVAyerWv6UmR9dce352cmNT3at6iD6EDGRiFZHRSC2Wzg",
  "key10": "5ZJsWEkvRJqUFeEnvmMpYFQZ5r1adU8FBH6VnWNVs9YiLfkazvBvkhZppiSPfnpVyTwCsoCpgeBpSrXMUwzgxZ8Z",
  "key11": "5am2TN5ajUzufKruGr2Wod1cE5ZWeyqW33EfobmPRgYzzzKBw1TvSLaKWgxDeGwVobiUTijiSTpsivXeejSLhogz",
  "key12": "3LxezX5uB8oEm1eHEgMnpzzJgftJaZTLBCubcapsoDHqkEbp4U32HgBLrXma3Vy4PhkqQ5bMv587uv3VhqVttVtm",
  "key13": "4MBA1uPA8bj1m3HdTi6N2ApWQdB5iEZCXgNDAU7CuJSfYpPZw9eHCsUMmjaf1yVLCkiiTRwu8tHV726WYuEy7mqv",
  "key14": "2EaJxB9bPJSY4qaQYJyHeYvzA6s6t5KBhT3sXdLbVh6tKprNkzoeEiwZg9obmhVYWQnhwY9GpmyUZK5Jtz9mfv3X",
  "key15": "5RDQucf4WRmNZVRtgasMgtDKAEmbS7JEbsGW4USuwpie2Mr5KDNcGJG3hHc2KcrnNn416TvP4t648rvSfaKoNoFJ",
  "key16": "4j7wF7Qs5USBHMWm89X3E8uRM9eZdCMxXEcc5vJTXfeiJxqiUxfBhAnAsi1Y51NNLLfSdUQR8612AjJFNwvSw11H",
  "key17": "2YSreKtsux7CGnAuaNybJoUT85P25Nttjam9ia52Dv4XE6kGzbNTXaysTVHsE56Vzcytyci4xYD9Z4hKzkumyQio",
  "key18": "ndph5FgaStRuoTvCboCHAUBchoWcWzvQsxXA91qRAn18hpdfsrGhCytnUfRkZfN4ENdegN5vHQjA9jAV6x3rSeg",
  "key19": "55qD1nLVimrtgERaMVtygw9J7YayzAshWj3o63CuCoe7cvsRvm5tiwnFA7Dn8hBTgGbR2ktHLs9pN8aCqhEwFjX2",
  "key20": "4jp6WwNPufhK6NPqm8nNSJxkj3ea9fkihDFRKaBKKDJEM1AJPPfa4BJnpTuA9eNMJsa64m8JAo22HihymDRgTCjL",
  "key21": "du9xCE9yHy48K37sYh91rah5MQmUDadDXCoiZiBnGvLzyzW9xC6iXvXoqrN3cXCPhtx5ktuqz8vDqUSFhgzQGzQ",
  "key22": "3kUv5p9wJ48DitWMCH2pMWSRJXE9mTrhZFCkvG2pzhopwf7HRdD1XWLExE2sbcCv68MRsLBxP3nUkhBfnm1QPBNn",
  "key23": "4VGE6oKNErGTWYA3A7BVFWpYe4ZDXrKH7MUumruHaYUhtXoM6KdQj6DuHAcxHhYmvrVWYBR7tNoS5v6di1KiPFZ6",
  "key24": "thzePbMZU5UNb1YgxB5hh2s4LeUKixrmXsP8oD5UbtAbxQUhobX8eCzfaHqTJ67b6scGemd5UKja6WXajyQpaC4",
  "key25": "RCLphHhMGu2ToirxxfUG38RpKS2nrejdfcfPGbAr8muCrgz3QYFPtAGyXzn9kiTGkMrLkkSuAC5TZbYu5gauWgJ",
  "key26": "521nSnjX457tsDoZ53anspimeKit6uaMGFyDzhxPzrF9LZTJe7myp7btNzKtHXumF297tfrAknfDBqKbCxL5uvPq",
  "key27": "fwC2pnoLgGTBfqg8yQQ55nXzEgBADWa3BqJuEEtZ466wFtfhYVY4gEJVUGHUFGJVCjY3tHmUqUBKrbofAmUrP7F",
  "key28": "3DaUEdE9UsZgJbZLbLpJ9axzxJMyPfbH24ZXNxzpoAaHDeTgemvQwszpGq1yrg5tz2ur9bYPD9UxXz6vH8BWtMU8",
  "key29": "53CxWdd3uTeWDi4Yypr5LSxBxEauSYuwKFCfnsYZtEegm85uoTHeBHMao1fTqoTVtCnWUZCjLBe6a6YG1Z5agMFZ",
  "key30": "2itirM52A9HVCSDMS9TF9u7SY6VBKTSpYdzf34zDcE2XAURMCp6fiEDTVwTiajvKKcDJDVeu1mmk8NyhFvQsZdM5",
  "key31": "2u9WwSMxnRR7NHZFv4LqXe3Xu1Fd3Quts9gZjNkQX3hf6NQbhEvyta9bbyn6FxRhbj99LzEQzfZhHnpmZ2kahDgb",
  "key32": "55AJpFWTz1TUCWpxAXMq92r5DnwFdHv6oaNQQnoxDZTwhKJmfVLUUzez3rR2RsEN4EPryAxQgM2FTsbKDMrZzDe7",
  "key33": "2xnsRMBYsUARNWKwudXGJrVmu1JtALteZdFb5yHt99RzRn7zN7aPt6C8yRaVmuwc7R1TAG5j3SY4YQyrM6EH1uNq",
  "key34": "2Zm5GAr3y9AeepiwJQQWBXABGosc5qdhBPutyWr7Lspa6AU3CBLB843yHkSyiJbvAw4BGLZng8jpJrgXSxVeBwzZ",
  "key35": "46BroT2gkN2eEsS5nTYst4PR2ncpLZYyNXYmMFRXH6CMHWZc4CdjRLzvJ4d1UnAS439xAt4XGvZT6vigLKHA8d2t"
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
