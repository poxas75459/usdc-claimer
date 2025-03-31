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
    "57imHhVeUrrNdGjzEzc44fihDySB5jqREz8QnwbsT8sPvTccpp2TrLT3vRX9vRPAWUaCvYgo5cKiMrHGE3ZhR4Rv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UR63R4mKdk9yyzHDyRfVgsURdge7VLsALQZHRcsFKqzccpaXc92nt98fU7LnezTTYUdkMyZeTZpGRT1nboeCZHC",
  "key1": "2jXKfJPNjEJr3YxHeByuiR3gBYT7ibQjiT4ntwqegtDti3uZBabaCqFzvSJHS21obSfaq3gRVsBK6h6YczSusvaE",
  "key2": "pkLv9fGppg4xLkZLmG7DDtSqj8zkFE3wASvsCMHnv7zE3uYEKCnV6ec17zPKbAtL1JZaSJi4WVktpDA4VTXpvQp",
  "key3": "3qCZeor44ak3QiVFC3PDG3bJzbohBBeWU29KEvnoqSx9aPrLbCt9MBoM6aZX3uQogpyhdufgna6L124ohEJq6avN",
  "key4": "5MqHrmDbVvTg8YgUbfSDtpv95KFppapW6ikb7rb4HgtuySJ95LWPang7MHgmN7CKuEFz8P2KPz6NvDNZ28UEKBsn",
  "key5": "2Rk87iotVVM25F3nTY3QJKEDc8yfX5VSpAF3RZuZgz8rfapTExTDpV6fV7RH2kaGofR8aroJKMM5AnDi8RFEBwqd",
  "key6": "fV62tETUWERuBEdzRiE8Gauc2zpew8hxLdiePnuyYShaF3rLzcUgkzLc5LXuKadxdxJuz8AjMRKMusRFydd4BbG",
  "key7": "3yHo1gqStSH63VP62LbNBnVn2uuxUkd7d24guEa6zHTNYX5gss26YDJ7EVc5BRe6hKRsYTUakACi7dMLmotYwshA",
  "key8": "zi631FNZPKBG1APCW6NxQSsqh3orzSiogxLt2cdtHsQzaTZbRyw2r7xeig4ppGgPeLSBGHD3wE3Fzjgkcpk64tx",
  "key9": "3L2TsT9SKVe1fhD1sScKc98CQvjgBGedvk97RbB7u4W1XhEcGUHJ9brtK5x1fsnU6DHubGnVs4GFegJyN2V7B7pL",
  "key10": "5HgFtHQDE9jeNuS4nv2seLXHEJvoemWCQR9X3mXU2MDiN5mnEC2JTwFMpGvv7zwpaDN3a4bpoZZyVGXg6Wxc7SNi",
  "key11": "Y3gbN4XkUjgTNsNHRZjQzxwdbiui22UgpHkimw4pTCGifNhYkvpLW1R6KDmBL8MTMx5AGU39VkionHRZD9aZNmZ",
  "key12": "2nDvd3rkynKDu9HkkQPY3ChfYBcLHWe6t1UrFKRDDcAYkynvu9FrwPMkVj3jsZVAGvwWU11s8kLtF5Pd83dj3DDq",
  "key13": "3AmYtweJjy7BdpjQgmghDbykrif6d9rxWKHECGWkWWUnrX8Ar45M2unUU2z5KwRcLth7tyg2MQVCjcL4tgigU2Ed",
  "key14": "31GUBp6jUiyERSRwLcwmh9AcQsvuLdmZVqTQNM9U3ECKJRVBDD6jkp4BPPcCxSzY15vyqeyTrTN4bvuNYjBGNmsF",
  "key15": "mSuR25mQoFrhDA19FYkDTsMGbcmPzw5TK5y1hEhQSQKZKn6WRaJhYttGLNgohYgQzFh4khhRFZzoKHDduKK45sM",
  "key16": "2yqT539uDpuKcm1c25LK6tgvB2YAW7Sr1sfMHi6kAxKQ79MbKQ2vSzHqX6Bj2Jh6fWcX3vAFmWoRgSs9CxUtY6LD",
  "key17": "3suXag4T5LeX74waRpZXPHthAK25JA4NGz4oxLBkyruENDHaMw78wzpFVm25bG4dm8dqYixqv37YPpUiFAXgUbSF",
  "key18": "5cG71VqmyfGUzX171gqZRUtbFAGGaQb6zFN2sZZjnbnLWA8FHnxop8p1x8RU1sD3wykhzU76b98yavhwozkCV1zC",
  "key19": "HeQTia8zB2ynk7YkCoDYPxb7PjK6n9DUJDQ8REHqomfEWyKc5SFpBQxKU45cs3mSuecQY1zLhYeNPiXQYqGSViG",
  "key20": "4gSzYRCam9zn7YE58rmVZxQ4GPjz4YmRPjG3Y3zodtC9BGohZMZ6SEopmxxZfAeZz2d8civG2jz9oNFR2bLbTZzH",
  "key21": "3pccyjHtWHBUL3iwAAbAr8TsAV4Dwr9sZgWusEEff7FbhmKQSAmM3FBaaXZgUEA5ZJF122auUUTdsFFrDXfVCyKy",
  "key22": "2wY6wNM7GGgMf4jwKeanXxkYuBwZZV5XKxN3E51eH2B9zMMxBskGqHk5dy2zHrmJ4Mf1yxoJriFxYtMfH7S997X3",
  "key23": "3ZctKrEDpdTWHqcnXiaiPE2bHc773hhbNGkRCRiSBMXyk9FGVrjYaF3xV4yyVtXXWBoBR5CPDA9Rwt2zg5RvRZX6",
  "key24": "VoxfY3EQTCem6RCTzMXVKsyEYeEvpui4s8n5zxE5uvzZGZfsTgDL1VMV5u5MQxAvmWzPAVjQGvkTUNzSxoJVD3A",
  "key25": "26VCNaKrU5HuWU7KEF1FpJ1b8kHjUjxhC3W8SikWWzJDHZ7BmcSn1x5iTSSd3fCgywhbw9AX4vNnvMsNDZVASHp8",
  "key26": "4gRP2qLKREcLzbYaQrpT4MsGR1Ug1yPBUkw4rZxQMDXs7xoWasWnqQDmdhKDkhjNAQdQ7yARWs9BhWkkqYRLMijq",
  "key27": "38YKV5G4r8PaM7jae8WjjrPm6CktxZ2fMG5JY9aEASZRPCC3pDSJXp2iYNjwuad4imVCjc9UfxGujfYY5CfxkVgp",
  "key28": "3NjhnTLDZWEo7DDL7XrTttDP38xGpdD4CQqyXZnbSvFz9Vbf3YRTXLWEAgVZ4byW9mQhfjiPbRa44EqnJQojsZWL",
  "key29": "4uB4D8bn1vH8DXq9XqkN7JiKPuEE1RF6axPyFQtNcM7RZWehSj8KRTiY7fNEccKd9HaxCyX8NVXa8EdXkwgggezd",
  "key30": "27LhcBxF5xaXJmdF6bKVLq7wEUuRxbW69oKohtsnR71jrN29Mt8G14ZEVR8uXwv1Qnbr9hj2m3zpP6rnvZbCrgwE",
  "key31": "3ikpMc1KAZJMT5ZinjNKxXsCJHrT61XpTVf562ySkYUzfSbhT3qHEdhMqQcc1LcbT6dXsxFnYxeGDmqRRfS2k72L",
  "key32": "3dumucxdGaDuDoa248448cUD9wvCFEK9cGdHYPPzYdxG3C1fnnQmAy4okgVvtstEaweaukAEpBUjWEF8hPmX1XNM",
  "key33": "3ujwkZgwEw781h7wVwoi3cm6EcNZ7Qx6ApJs7k4REH4ZUPUVQ4gzdkE6HaKh5sruhXFZ6Sz4swrfu2Vse73ST7h6",
  "key34": "2XU43XyrncSEbHn4BUqCeB3mWsTsFPAHcbHZzRARyKVf6cBbv2BSfNPTtZ1r8dLbgA4nm68BeL4af7fJaGecpyTL"
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
