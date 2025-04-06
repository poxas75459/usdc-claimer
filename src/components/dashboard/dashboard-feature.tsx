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
    "36SNopzrnSL24eeTmJz4qo2kTpjsTso7oh5HmoykYyJkZCbbqbtbvTu6ot8VvsagAv2XUVBfQY69cvc22CDFhHoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ykJFVDmDtZsLT5tCo6gxHFd7oXvsTcB4CUfMRJKfeVwgnzxZHXPbcNdKf2pVSaYyWmDcqof1NcHgdGkMWvRYivX",
  "key1": "64gUBUWQQjPzzjjSu5Buqpw3G9wEmjLxwYE9DdNaKxNawwU6hzKRcbhcSdqjkNpRaN2p8GGrmTV1XsL4mHLWNumm",
  "key2": "3FQiJkr3UJpv98xsLdN4v1gQK2wEUqfzmxeX1KmFRqxw64YwjYX18ewq8rdQYr4HD1GcKFv1PdaAd5KKKjWjimCJ",
  "key3": "4SBUuZsoPwewdiCfR7DtbKgqPGuJDbNUD6xAxXALFyXM4rFiCHmx7cKvptPsHxhEzrc1AWSvuAdEGo2FddU8t9Cn",
  "key4": "2rbuVYchg1MbHo3ksmTaBrzrvQ6G1ZSjiZECbT3YPJtL5aNaDPWn499mvx1ABqgucruen4BxhoHnbgEjbgoqQTRj",
  "key5": "54GuyXFoHH5A8dywt1piLTTYaYvgjmazxqXwehiD3t3ucdT4wasWZF6yNvjH9BPzspqGHibHMSycPUvrAnVaRpf2",
  "key6": "5FkL6jrncXPV46Zc3oUgNiXcNaeV4f1mAapVnYoC78SoivFdcns14VUAdqq7VApJyYQr7pPKKPtsFezUgVzjo28v",
  "key7": "36oLoqddYuy5vVmJF7EiMj96rE2U9tLRVhzEJBUNHFUUQjh39UKTTAoyr6AveHrb51PsThjz4upVDK96xsyVpztS",
  "key8": "5ANGgSga9zaxbezonPkhA9BLyEgWU8bh1onp4vbnZroWBHiTpSgGACJtWd2pzaKAZJ8tuaHa323yJV5bLZxGmZS1",
  "key9": "RueTzQ1H3jFpLYz7xmYbA5Ax11Si27uzHAanxa5w29mwqnZDfiQdCCeQoGVVo9SLbXbbSgDgTgE8JLvYyeD5tjP",
  "key10": "4P6aPmTymtcztkGevq1kUBZUsYMxvshZQrcC9H9WVVRYR5u5yyHr42NkdrHg7D95EsbtPcS91sKUiXyshKYFf6hb",
  "key11": "oTGvQJADsMcuE3g9L6LSrQgumeFqj3gtt6H6MBDqEouy3oqPhF5L64T6nkvyrSFKUbsjs52BVsS3MnrLhRqMHWV",
  "key12": "5iU1Z4EEcLdfDa2iDEr2j3dsUcF7Jn4Xut4LXCjxdE9twgFxiRrCwbLLMt7eYN9zHCBSRcWKcCBaJ9RcR26Lpr6Y",
  "key13": "4oVDsnggHiLf9GLc7WbStffUj1mjtSmwuVkeYkusj8q7wTFBDz1gNRyjJmsEkNoXF3tG8Rf9zqTeNZj4v1nyKFhY",
  "key14": "3JPku3W3qch1VPRiVsUEmXU8SGPpYZeBVLPsVFKGQVj82pzv7Ypz1Mzg6h42mQXscTj8T52RVrU8gfhhkQTHyDPb",
  "key15": "2dxu5skNNQcM3gdfBfZVa5bj7KSZ559FhVWU97kKNsYYPCMiiQLHAShFWNaAk638NiUPqBSU6vikEyWWMWCFBVee",
  "key16": "qHs5DengSQpx4jN16UzvJDhYdKJn4zG8MAnFkcwyHGkwdJVL6isTECRrwHkGp5ypneQ422S7ykTrsivjdGM1byc",
  "key17": "mEeq1CcquHSWuo2gEFTbrWLmGdgknqG4qMa23gQgSXgw6RLvoJWndZhZNZLz5J7df8HEWmBsDPRdb8fh2jRawND",
  "key18": "5qFd7Spcwkr2BVdU3iEvLwS3UeBXrbZVibggmSGV387XQtAVRrbuwVmBaaJ9mEYQ2mtU2QZwGdhSw4FeoFh6LKpE",
  "key19": "44CFWxoRaY8G7v4joF5GuTu3VLqeVLTLtD1xC4dWxdQfumjBaptj7LmefdJoJcYXb8fatdRNknGf17VjwsdCuYeS",
  "key20": "bQry9WJiu1qePusNjzrhTPrJzaAFHPR6sPgbAemqGWnLXEpYd1JE3tVjfj48evRNGs8p21CqszCswinuandv3Pk",
  "key21": "3hjb32oWvtrW3rvBKjbrbfDkH4j81B8aGzemFmNPPML137XvNg9bQy31Lr4sFDVJZjj8ceAAXMgEJPzSpYsaSLju",
  "key22": "2N6gbmWWiFcbJMEKfsoVkhNroBTrpCMQF7qkWitwNyEVbfrjHaLSTfiEvvcBi9UawHHKispGtEn4nqoV2bM6TUMi",
  "key23": "2gimshsVLThZSiBCL7nFNgEapSffwo7qvX7TUs5cBKTJrJjkp95gJtGwg9c54qv1KEXcDDMC6qidzTztKSegWACB",
  "key24": "39HaXfhsUjYcQvMXYRxHko8AuCVQFgT39HcKi32Rp5bWdLkzxKDisA8SdS3LB11cj8GaLmEJu3ztE1Yct9wg7ncy",
  "key25": "1VZxJkfTR17Bd7Z7vA4mu5AkWbUNrhXNWivA2SU3P9J8rJKYx1yoU4Q5pa8qV7wwHmrDxPGdVkd5gMG3uvgwz2j",
  "key26": "5f65qqVC3gvnjUGcwkTYXxukWrqQ4DzmqeCEbqMhiMzjiMrGkzPK1DFq4FMyuu39BePw3cxA5MtRzJouppZph2Th",
  "key27": "3gWfdbSRDtsH7wXsDRbEGXd2JGHgkr4zLLmqCzY6CdfyazXUYeQ3vY8eHSCFbTk7YrjPCQch2MQ1MdPwirnqvxgY",
  "key28": "235NgaSXhKdJASJAS3CPsiTQrasYAjb7Xu6WXcxgPPNfigS5feyHh1SDS4sF92Dh4P1N4bkjHugsgiUa9BPXnUoZ",
  "key29": "5dt2faabrWvhsUyiPoM5bjWqHSmHGJL7N4UbKCUCVSBjgiTrrnYe9dkocg8XcLuCYPDmxUUkZC75xbiF4pzHUc57",
  "key30": "5uhbu5SwhAKtcKSXW1hAuK36yp3AJRE4Aotf7ou53pwKo7j34ZxwHeeafYrw87EZU1pKG56S8yLJAKW4JwUUSir8"
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
