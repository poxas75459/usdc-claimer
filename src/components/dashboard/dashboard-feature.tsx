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
    "4bxSXJhFkZt1Mpvx1YkTHDipApokab5hzrnuWBygVSbMsehgLoVUBg78RN3Kkvz5THns3vDd8gPZ1YFbQSWDmh22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YYAVcGaP3XyEPQY88YiGELRz6bThzZYPpwXjEHHyRBNx1j4auYy693RVioNkh4P2oPyqLVfDvXPg8FFoktGDVfc",
  "key1": "4y241Jqj6sus3YjWEPGoXSoknJcbpNDZhvJE3VYXC5kvpC7P1PCGmytCa3TKCJ5EH4bsXzS8DJtt9AhYBAWTBFvw",
  "key2": "8TZq3yV7p3jGSkyquc2TbLAh5etKhLwxBaWhpNufnBQTua7ErjVPhizcJ6wErsisLZWZoBKYPce4N3Bw6hFsf87",
  "key3": "2jozgHQ6Fznj4xsHfsJdPoe6ZkMHLNQx1BHyvpNjDtwrXECUzhAufit2UNzvwaKT3KcNY7HmjoTdQKa18foeriJ",
  "key4": "5b2pzHeDCvcyU6U1CPXWZbRjjHkXKGmCyAkoNd5iv3ctqJGBJXxaowrpTPHEWD5722L1HQBxKfy5mw9PmJWw1aof",
  "key5": "4mgAK8F92NGaVaBHaDnwQvDcsiMrrtFMqJ1hNgW2YVfw2bDZ6afCHyoFX2xjBPWBsGmnLToDBAR868zmd1b3oMSq",
  "key6": "3gTBSc6uu1fAjwcKepPHdkuoaNYULAtjjM5LBsNoycZuJW4CWZfotuH1TtSZpwKdWKnjJSH26Nu5CWGMx6xLrUjq",
  "key7": "2FTKAswSGQNFKVB9ZAdvWrmQ3CAJhCMcLKg1GYezq4RKr5PwKqrzvAid3fMGQZJMWN5c1rnfTcrpxmbRw7NsWJX8",
  "key8": "57vGSV5BSWxhZK3121oHkT1HoxwfLHH8zDRYonD4ABy96aMiFyiU5BoFMSUQZYmM3KXtqud5RCa8y9WsWcns8jUf",
  "key9": "4RWejNBJXijdueSTjHSSEGkUsAvxzn49GFr2KfrENv33dzn9GPPFfisbQkD3cFvLa1HFJbXW8XjdFVcak3yeBnSd",
  "key10": "3banFZHXfv2HU4EGmURS3ijkJe2SiaACapbPihRzdeGVZeg7oqN4myDHkw4aerdZcBb5jf4TxwrZEBvqETjqCUoD",
  "key11": "5ku2dkmZA2bMcUo7TpAaWVKAQGs7r5KXHAfFZ1dMa4tqKcQntJDjXaVWeEWbtNNcfFz5bvATpytDHxynT6czWZym",
  "key12": "524ggquoQVNDQtHJYbfP5uNwaYPU7Lp1T5W1GF3sSkLnAausGU8qDpZU9sqFGztVSCKGxhML1eBPYeifyG8cJ1kd",
  "key13": "3yUWkut8VHG1VANVymBfWVuCo94WDUVewz2ueiXW15kGb1fez9t4ouhY1ZSRXJmSirBrfcZ7c6fem7SgznyEfzfV",
  "key14": "gDcno96fwoXBmkV9QpHyMSsSEFHru8fPFRbdEwkeogPHqKwXHGagwDKksSKaHYvqcV9kiR6AV8yxYoYFUyjkAXs",
  "key15": "3eqKjdXrSYEM74CbzF5ncJzQi1AvL6Z3QQeNR9iemNj1uGXdAqgb3EmNK4nbKFXyyTCs6MnRFtXqq4VyTff31oEK",
  "key16": "2w9XAYQdcmK7PxGxMXpAR2ukBxqoDun6P9prt9BQw97W5iFhUyQtrTFvjTABQdTa8gHHXxBR3ToZFgREmSwTiWsU",
  "key17": "5EQjVyPt75dqnd1XjfbKcLPaMHGwJ6hAgnBSU15fDTWFht5YeavCnLHLR1xXQsBRurx4LPfdCrJqe24sYKauv46z",
  "key18": "HKkeTPCqnGSXkKaBLvXe6tu5kjwb97mJkcx8ScVpkZYCfh9zvS92a9qk1sLpEaic3VMqmzXdykP3BUtCDtXLksb",
  "key19": "59XzVMXQEUvapVYJUuSzAj1cPU8L3aXd5qXTW9EmKNzAHWQsbxrYno3L9CKixJgcsrNSXLB2uzewddZiuENN3hNj",
  "key20": "3MXjbUrmfXtadUCH4PPfVvQSufZQx445ygKHnoP27uD9fpJeLwHqzHCRx6Vys9qp7YBsTiSLHj6xVdDFLzbQqNPX",
  "key21": "VodPXjRvRvnegB6XYPJRarRc8fiqaa4Q8PcDQ7d3ZiJuQAuwwka2Ri5fYS8pAQ662iCHUYxCUVCBKJtcThcvVWF",
  "key22": "9AFuMB8Lc67AeoYzXrc6RuB8GfcS1y7aGsZWx2dcebtc3AUjxxWRVKJsxzeRt9m4fS3Wp12tuMn6i4t1HtYcxLC",
  "key23": "2J7QHEWWfys8CgSWBw8nTAc793uGWsvmE8QBmsb9vWKiDmMycqbj45QH4T19WxqPD8dN7CvuVCe9Jt5W2Fn9CwbE",
  "key24": "5SfXX1DMtvrWfMt3EeWjE56JEjFQr9wh92AjCnFciG1Ay7ZyQtjDpeuaEqCNUE71tb7UGG6gRVhxaZ6kbsnZTcUF",
  "key25": "p47z6XjBqaQ7S6azqsAZgFpiQNnSyfSmAhJ1Q2uJgtivWLtZJYRt9nSyjkhAeahPT92i8FBhmW32jEANbUmz5A5",
  "key26": "3eqYEWABqUQ8ES3x6Gz4dFo86YNZtmyfKUGsKiSZvZzctjQjhYmpW98qoPD7K4JDNJcJpPCS3pB4uN5ozucEDM44",
  "key27": "2rHDjiA7sYoohWJkVaJP7QNJdXQ8FSiCzhSHfBnPaRAM5TnJ7wjrNTHm43PjkuAw33q57wBQN4TpCc7pSE8nDuC9",
  "key28": "2w9kUFqSvbWPLJXGuBSAbn5b4uuRx9A662psYMNsSxdZAdJCBnYKKMR3HPJ3FxgByK6gxY5JVHbWNcckgdHwRsFG",
  "key29": "22zs1cJ9L2WMbiTLxwMJMekX8RZAFAJ5KbJpfbH9CqaeFg4pFRBTq8d8nf8fJCSyhpBBK3ZypS7PnYJERJERMyXV",
  "key30": "5FFuVDaYEdVeK1vQNkWbjbqVsAsMNNqUUssvuJs2rw9Ran4PuyApSJMLYXXGxWdhFKpWmenPMWjxRhU8YiX95nJM",
  "key31": "2X63kJzJ5FjqWMvyWYSRR5UP2FQSriZrMupk8BzeooqA9G6Fn2brkaFKeNcWZGpFttcfmS3XUqVegwBtGSGQJXis",
  "key32": "3qUYEwiPdH3QNDhf3bPr4SeYNJ3iq6bGkaiTyVvjyMBzStdbyqzGR6FXhb63v2upy1rtoXTahQPEQMDHWgLsKeCU",
  "key33": "kHLFNgDJ2DrzujM2HfLcZQeU2e7Fp4H6HDSne6sgiYGx4QrdjSSeWrie1P7RMTrnzKyViWgydur7YMZ9z97fdGs",
  "key34": "dYBCk2dU3NVaLqHmP3WTADLDVqQNQcgKfwRvHYiEEVv4EAsHNwYMpbSt9F4N4UfGgYeNYjRmu3gcG3USG8hAu8n",
  "key35": "4pWtndLKVbSVApAoypWvbMrdhReKpkZsokK2xbkVMYzGufhFQYsSP8pcfe6czjEThAcshs3iEmsyP5cwtm88SeQm"
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
