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
    "38ZAaZbNasjubG5RC63GLjxdWVHBa4JFLT7SAz9hZkLyjGQZu9eci6d457hR8Pt7cCBJrkwuzBkKUVCrRkUqoeso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BW1Fb4MX4bLMEjiUAuHHXEiFZaAH3CY5UBDfMJaQG7aYALjRpQNCNASmhWDzKp44r5GGaBX7nmeRLjAYYKnzDjF",
  "key1": "5fNY18pu7a54g1yXvyncVvqNGU221VqAtx65haGQbaR75ULeJbBL3JGWXbcTmuZNzcpfLtdQ2mKfSYms7RTmk45r",
  "key2": "2KRM1GPf5ZxrHwYYG1kRCm5qdDxGXauoeMvExRJ9oBjekYhk746J9BEDXxWnr58LHyMH8wu81HnLUaPXLAKiEit1",
  "key3": "mLNboUx5x3UzCaUn3Gn73imZ4Nk6gMEDCv59zNzxgGZ5SeKN98wJGBEHkxEwgmyQNGSBXwYHPS9L37MrepmyRhp",
  "key4": "2WVn8La9pvPj19XjZjA3Yb1KfTzxzmf5ukvaJmwSnnytbYTiy3oSaDtJfwWj6i3Ea68Q93BtHJYLLFdeiThSjYmu",
  "key5": "BJA4PC6ce5pjTeSTUy9V9KyBBFWYWyKu4WwYG1K8UGARvWGZkvVfsmVGwkiCErsvFbYmNsDpzUMGuoSXxEexeeA",
  "key6": "4Uve8Lf4qRMi8LPLQ3EFptftzaDjjSsR5kRU7etxbTeAgEtnnRPikubNuK3vZktLnnAJQdNkwPB9Z2JdxBgRfXsW",
  "key7": "2wQDxQkvvAdDgtpPJWZmp86yDxDbj2M2W1bUGxkpTtQHJikuZLhx15gpmqops5xZdtoXWfusPrgZRKdw4xBYkYkD",
  "key8": "2fJHbdecoGguMiKsZLVHFZvinipfWMpzpCAQcUKrLRbh3PiY5pjj4GSkJS81adxexMWu82C5mn6LzPkcHHqfEmk3",
  "key9": "zB8yQH6CrkT16wggbPrxnDpUnqtErjGj5ukDg5HTKj1oAdC2yDSCxz51VhX9h1bWKMfuWC9FdyvB1GudE2KYTeU",
  "key10": "4ohcBRTpYsDXoMKfQ3tUW69vXPsCh49ne9moeBzvBPi9Nk4wz7KTtNbjkBLsEwDXXMhUxVznxJTiCA2MsAiDLLhT",
  "key11": "4CczLFmxhMhs7bCr8KoNFgL1qseGr8mEitQkjoWz4GsxyjrRx378X3Tf6F3ZxUm9c6qsN5aLByfUdoDvrB26eGuR",
  "key12": "B7kT5M2qtfEo1QsQD3rXsCpbW56wVkXUPcDciyy22yorbLxc1smNn4KswUzyYpAM3zEZcpULKYKTWaC9yS5wzPq",
  "key13": "2maq1V72YxXpDZ6w8HpKEoqJJYMTPwcepvifYLK9wXMbZxa17oGQ8rZiPEQ7D37rntRH2U3mtqoCxsx75jYFoFw7",
  "key14": "USqucbbeahWypC4x6vN6EX5hkiTzxTbskwHVE5twziuqWT4SzFcLz89CiBtG4MsPxoNLgXY5sv4P5ByyXSpCgQ7",
  "key15": "2AYLjzFHSxtS1G9GFvsNvdt7dffY3oVYRMDxzJPrTes5GF27JFz1Ct2adjDDmWF9NV9AgQUn8mLTWuhA65EuFKGD",
  "key16": "5bUXT6HsC98W4KTJFGnSgsRk37DLcU71niyNwN3Qwsewc2he9v8T2dRAH5KLfmq1J4D53Yh2ZmCCterU7Bd4gUr",
  "key17": "MYszcBJ1eqR5Gb1wKeVvU5nf9eVzWiKrpH83uK7VfZGii2bMwTMDFXMEsrPpAgHh7cacj5jY8ef9AvZkvxoBVCt",
  "key18": "4JV8VXBSPXrjfxRg2b2ej25dhNyNtVarPvzGM5VeQLSxV3FeyDj1Ct4qDtE47JgV2mHPMNTizm2vfdWwbCb3U63e",
  "key19": "5RSf9tdC1WR63y7peedrnSrLVLTD6zrpPp6Dji4E9xxn1fF1U9bjW6x7ADj5yRLC3dijrpFTQS9XY5rL2C2K52Au",
  "key20": "3fzKmPEthHcPvg7wpN26YNSh9APMgR6DSBygHTEfPrSvF8xMFrhUp3AUqmSpRm1VAmqoCNi5bgNRbyLdRpjj4eZ8",
  "key21": "28ZppMM8uZYCWh99Dcq7HyfQ8LurNrFHwRf7Au9cKTn1Rqk6NXNoVKBggixi1pzKjCD5fXcMkPx67q3VPLogWf6x",
  "key22": "4guzDyHHa71PoPPQmSYLHpnVVnBt2SxxxrdV2aFmjjQYTRTMvQgeFG4t9uaC25VXEoKxdzD11YAveV4BywugLRZn",
  "key23": "4rX8kciovVFQRPeCZJBWRou5DR8feQV9UC2XAQF14UTWjZhbJ2mJTrUnBooG4cpMwbJY6XBhPW7eNCpMHLxexyyB",
  "key24": "4zW1y76Hr9vBXBMG1idAfmXmyQnE7jijFvspwgrv9hWLMsn1SMxHCd59wRJsesVZ2p8APi5sNxC2txszNZmkif8K",
  "key25": "Y1gn27p5PdEHkbM9JNPb5d92Vyd2TBmjnk8UWZ9KDZY41U6uNEroE5nb9PAPpNViNLPyaUAPc5DJR1WAEHZsyeZ",
  "key26": "yj7vBGwKFwCTZ7LEzuJK1uu8pXZptBoq5kDSegENiUZjRa7VfGDAuEF63tYhLCW3zL7U7fZyKgHS8NAYERw5qkx",
  "key27": "3mAwQT6GsboEbNyV1t9ke39h3y7zLbYyyrzVDFwxcRdqshuTKL71hM21tvEuR9Gvudc8hrbitSyPZwJD8Rv6oVqZ",
  "key28": "2VJiQUQ1AFAtnoXSyGRfEdi8wLawXjrYP5HbrGw3sKb5BAUkvbsGUxU6LMyfFW7nhGcunSi679Tbt6qQ9gUZJR6x",
  "key29": "5VeRcE4ETuLhieBDddbfukAPBJbjm68nybfaaJew1vpkpAfWYAArgd1ZBCQCv1chKMcm5q4pD7xcmx8u9iBRMmzN",
  "key30": "2KrrewuwSBKnMsNAsg2rG69HEubqS6DKndvg84keHyFeC8BEkrEGJZhrDLv3sGiDcM4XY2G7C5LpU8RC41pRMfiY",
  "key31": "4oVfnPzZHxMM2FXG5cXvZzqh9uCVs97NHMccMo3DJux3vY53TZSNfhjKR1Aci5mfmuuFcSNrt1EdpuwWoqnAbVGt",
  "key32": "27qu2dUTpgJikMBXt8Tb7F6NmyF6kaK4rJ8k9w79FKRCbpK4cL3owBZYcyzo2VBumMjD9Dhakeif4oyZPGeGbwud",
  "key33": "4Q59oLdhAQimq2G4keGuhgHbip49FTtY3haV9BdaPaKhLkWDi6VLvP3tU5dDPrXzYWYPSwXwPYkLHRnAKNQ1emvi",
  "key34": "53tRP2kfFuiGCnd3WXWB9uRC3EQ48FDx6W977wZhFARXvr3b71qntK48KxyvE8Qp2Wjo2LahqKWEGg56mWuLAfgU",
  "key35": "3pSQNMvFpcHmcpPs2hEeirUTwdEmeheKPSdt1fv1HJXy7ktcXTyPSu7mqwoL4x1PQA2UPTHBTJVFTKBs6vbtHkHy",
  "key36": "2osShwZGWEa8kTaXZKSwjUsc91ZP7XMCZDFRJvdJfKpr7i3CjgeWvPWJV6cEsnNoVJFiEFisKygsQa3TAWemVrCY",
  "key37": "5ZuCaXoxsXXFAvjfrvLpwHKPdjW6pKyDzCneXzfaYbhC5edxiGCUH2tPjTZV94ytSyN9hAqqf2LR3QogYHYP3Mpu",
  "key38": "616n96Y5owVxKAi6hfBQ444GJjvYe8egYrtcnWEDHvpyoKiXKTo3TDLxCaASBfdyumXgGPegm2qd3cMEhBts3nn8",
  "key39": "2HEVFnNUsUJTyMQR1noi5No5peQVYzkQqnca6gjTF34kY2wzfRUr4puU8g9ZEqFYwBWmxbDc1HXY1eqjWpfqRvz3"
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
