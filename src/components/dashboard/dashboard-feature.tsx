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
    "7bjaYLwV7Pq4KcccYZVGTxA23TmGMconpkKB2c5xWAkuD8shkxbmaW66XN39u8SkgLGC2BC5vXRLJERNS6W1hbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i7NZZi1sTemiATKP111QYANCkPeYktpSXUTTHj1ibnmD5oj6NR8izU6pzYMtsiCHQrM29UG6VmWQ6srwQL28bvm",
  "key1": "5tNEEwypRToyD29bU6uvC3cgkdeB2GqjQCpHJnR8HTYenedQgUxZY8LAWZELPiAiCsF5RtutWB1TGxg4hxTkEKAD",
  "key2": "4byJ8x3jbBHCsq48BH4fUU6YuA6QtFawSePwUwQ2EPQJPD4CDCPtN7cciVdBdBvsXU7RX5gcJ6wzEYQDknUPeS5x",
  "key3": "31Nq64jA1QLSQ8jKqGXBW6grLGyiwhx8rGPqp42NLbJZL8bER5AsDW9QTeJn6yDtm6LzKsU7MVgDGkTtanfQocwB",
  "key4": "27v65N18Don9vug2MViwkMGpU9gJPP3jCrUDRYUQYhcDFbMekoMLhm4WFox7eiHre3iBA6CbNFLx1udHTYVTTazr",
  "key5": "Q7KKiNgXvMa8d152rXMgRGH3pc7jcr8GhdoLj1RbwqjK7eT4VRYPY93h61hiJiFM1WzgreVeLv8Nn6Mpn1Cspxn",
  "key6": "5Ug4twbnchwfAM3smriqnkdDTR4ZFxn5XQLzmjmjCWCAvwUAmWjNVPYXVBmrKyoTK8jFdM8uG7yqsbJMkG5SEngN",
  "key7": "YeMLgUhsAGTzcFE48D2htcxsVdTEKSsEfdPsvq5oSqLL7AHAxY1XDrQM71FUkk5nA9Mu7b1NMeJBeG4eFG39AqF",
  "key8": "4sP6szFhrHd7yS2ih8roEzcV2Cos14zF1bRDCWzTvCndVhAb5CshX5aWUjNyqHV3eChTeB6AvLJsbBYW5KDQEnR",
  "key9": "5uyc8AmdcnDaxRVAfKqjiAWqQQn8UBwwebcpdk262Q8SwX43Vm6t2FTQCMUeJdAxmDzsUtTsLpPWXv3W9UZfgek4",
  "key10": "5Qyq9sv7SPZwovzutLcGXYMoBwqCyouwu7tnco68EfjorLrxeYjs45D7BChr6bRRMCXJKnsScV21hU5CcUPXkSfr",
  "key11": "2Jp6BgHhjqKsu8GnRrUG3jFArRU6MPuDt7QDkP3DRbd1n9EuBmMezBRkQ2HafYJNn92UQmiEwQVKaZzcpeju2neJ",
  "key12": "24evuBQFDkv5popeaNtNQfeAKuBLZa5G36i2MaDmTPBe5Vo96NHcA7SRAevrd9FGmcCjKBffXuADLPJGxMBCPg6J",
  "key13": "4EcaPkA4DgFkS77DSmPXR2xmWxDYoF8aHjjxubXpPCFqkdyooSyHGuZM77ACxBCvZ9GA4qNgAZZfv51r7xDueuNn",
  "key14": "5PoLgH9CBXHG3tLMDLfggBs8t8QAmSWdE9UQfbwYf7LdDgcM4d4mUWyYiD8M92cAx5wBaU2iQTRRGkBMkZo71P6P",
  "key15": "5hb9bppE7tV6zGLKJHjaqcApoz94yZLkvtAXULGUToEbYv2XUaG54nJ5ALtTWTTNr4KyXw2to2FgJeXsJ4Mj41h7",
  "key16": "5XaKq3ALBXjNtDXRBS13tzqzPr1aCS4XchmnzKLiBPX2iPsFN7YV2bJsXzTjLt8G6sHA5Jj9y3crhQvfjErct6cz",
  "key17": "4nmmS6qS4dCNKFdMn2dj3L1hNzuyjbpeSUZYYRvUKQAxiQCEzgTjVC8dzCYb2qXxexV1SWjCfrYg7uu8Vm3etbte",
  "key18": "SUdU5bs9EKfnWVTyeb1VwtNZ5k8njA22LUoZ6qxcfzsP6dq3F9TQZNNbpdgFxsPA3ND6sZGmfHseQ89fGjguhUh",
  "key19": "BVKjHtNQkgkURT3AUPXCXXgnQu8uN235L8vo53dDkfebnibfsm66kxs2aem1HFEoFEy96CbzfZCu7HDH7W5xffU",
  "key20": "2gAiQ6tWNN4UmUkJ8iKhdQXJvNwQMYP7LW7RivKt9K4242ejEw1Xwsh2r1RETetbigssVcDCiNFTsVK67cYFU8AS",
  "key21": "kiLCNCESSV9BNj9LAieUxhjmpSjYzcypfP6jQsDxfsinH8pHewRcL8qMy8gYCrp8va1DXoNW5R3eEH39gDNica9",
  "key22": "5TKKxrHbA1vYLNUL6QoYF6TXGVKLAjGkK9kGBrMeMBLZW5VL2xC1uPirMiSi7iZpVE8um5YbDtHXx28D57mNHAEu",
  "key23": "4vjPx6PHDUfyvwJpx2KpvWwjdM8cawC1kP89ekdR3V4b6ipgYBzeutYVZSSjbtXmzYvqEiGqytDhuszQbZimudNH",
  "key24": "2zcsus28oa32yAL75NtoJCzgRrsJFA5xc8m5LbL2X3QZx3S9NJ66yhNaDEwW5nn8PLJddJAXXtqZp9VUQqcyPkrG",
  "key25": "8LZEeTHPwcMPYhJB3p8HfYefnLbmJR6uxhCL9aeQkV3EZLMzjCFvb6dYHbLVJJsLEPTW1YRJYSbwZSSaW1qLBR7",
  "key26": "3Y7u5RWXe1XcnYt44bQhVqHSiVQYjKVfDUm8RHvvPp7NmNwWbRHVbNfWCyecLXBE2XEBBtjMWd4LTeVz7m6vVDxq",
  "key27": "3Lf7pHTVDnZkWwkSXECn2CsTHTT4M9vCEKVAAFh4fiiZDaMCe6gMwH7R7T9NLx1gQBfcoB1f756YNzF5wELUC9eD",
  "key28": "34GhUZBbewZwPxbqibXcdcEGwJGwPGsxVvtQjiz9qUzDzfZ6GpzGhgRPA3rBF5HbJZfcvjYUevabyJtTzp8EETCu",
  "key29": "3R7ayKyh4rf97LfNcSQnw8X9xrrjGxADgjwNGCpaCcwskCVrahzn39mJJ3apcxwp5Nsw4Ef2qmikHaKvymbfLLCL",
  "key30": "43QqVMhSUMT1ruyUwHyTC13sS7kfYwA9hFJk7nU2UGx5qaMhA9jVw4Uv2ziK8yJtDXD921NP7DfqQ9EL5xfhrG1i",
  "key31": "1zNWMDd7GtC3tnFW4U6Y69GZPs47GSdSMFZqdxzCttSvDrKdZ1rAm8yP3n7JCadbNw9hFehWfSt2tpBsRZCPF6U",
  "key32": "63mXzWw8SA65WeLtA7nqvNL4tsQCVkfuWHYwmLjVC8iWRE6HmXiqaSzQQkNe8eJdfExVZRLQjPhH7KSFZ1vDvCpu",
  "key33": "5P9fhKLVzcB7xAZwiCrJmfivAZXjRCQ7WBqxdhZfj6zaUKEUVLHzpYhXeBp3NTZLPY3jgThK57c8yw7iaSwK2VFU",
  "key34": "4N12i9Jdh74mY4EMBgGeoTgHxZT1UDTtwfCdfqKM8MFnVzMNbm7PTsLksxvFYa4LUWDMg3g2YnJXSHfAT8EGsqji",
  "key35": "3M1cNCcAY3KgKbFR8dfGpYK1yupQzY99vY2UPBzAvS4FhGeC5wKuFeZtDCULTXUsYTv4DzP11S1177H6FLA7rtuL",
  "key36": "2qGXEYYq1defioeQqiJxM1Bxgem2f62gtPx3y38Uu4ztXysg3DBEPJMyChtHqpzsFnopvc5QPTM8CdE249REZqPc",
  "key37": "5HA1cFnh2ESQuR2gW5CDqwM79Emt4Px8kFs8A7BCzZpEvQhvGi9mjrcxBF9DDYbBriVBBQbYg2zNB8At8gQFd4zr",
  "key38": "2daqQu4zYjutnsqrBPFpyiZyjpkKkqYiZnYANYmk5gbfytySsmjqrkXTdLjhikKHR4j2SBTorHfhh5Q1VKX7btk",
  "key39": "56Nyxw5MTTAsvYEjMXCpd8g2QrBt3DMKpiDumLMqwvGoXvrUg4p4gvJdq9mSNziacdxM69TkuDQGdj2SMw1GhTvp",
  "key40": "4pSdKietfUWxsQdhiS3QCtNUJBDBgaG86At3XiaAbJjP2xqydqZHsE9ucJDE7ioAYCjs6ASbENr9e4iYrwdAVTAG",
  "key41": "3AowMdcwhVCvCiVTahkos2Rv9c2t1H3UP2VusyuqUw5YnbS6LtonM37JPqAEanaR3CJ4LyiodHbeJFh2AJTWQEkN"
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
