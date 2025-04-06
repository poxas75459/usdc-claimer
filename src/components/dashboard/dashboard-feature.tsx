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
    "3xzY4X8ckHPDJQPy2tekp6z28t9THNjnpbMdxwBhpzUS4LKDpef7BAVnJbX6sYGJg3FjrsaHvRCpSsY8nNm2JqVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ajyq3CheJUabkE9L2pKs9N2oMfBwXimSLpX69CN1KCcbfcCDGqZ3rEUQYgyurA8rqcdek2GXQbMg9X9UvgGoWfU",
  "key1": "3k6vsuQLfEzH6AiKVTAZd4G3SoYiND8MczTZ6WLykFJYZpvEKUaBQhKfgpvyXk2b5Cj7oK571XZEGS6dqQoenVJ2",
  "key2": "4Hsqxd25BfRoes2bmTpsrbaDypcCt22D9EbvouSsk4EfYMdn3gMczr4fAAH5Yi3sxHeF7xq846tZVF3qUqA9Pvxm",
  "key3": "5KuCPNS8SBZcfQFRtvF8FqwgaLQgTxHa54rQV6rTbmkPbrjzQZtZ5odZ2nzL9QFmpa86DPnGGdFrheGen3kHGBa9",
  "key4": "5y9KmhCGV73QQyVagTgVrAsAWFxDUqE1z51VXmCTi2HZs7WWX7fFrDZoEwox1E9fu81MY7YB4Zhbti67DDY3H7wt",
  "key5": "2QbqZoX85pgQWzUmbNynCNEAVNVqFCQdNCxtcW4Zwvv5fMyZacDiW3JuXZ7BhjNY2xcbXEvJbpMDzRFdwSAMedKs",
  "key6": "519TocaCc57s2a9FBnykvtXMz7Fu7nEuXQZsYG972JDb8HDp3u9q4dVrysugoy81E9rnxyxbqVZuufobJxnwLXK8",
  "key7": "2ziXEETRWtDDDdedzca62JfwgiJLV5A6bqBakpUMvTmRN8C5uVw8pVTzWPLWKaTueaWWb1kEPQtMcxjBxPanLNYx",
  "key8": "5exLWs6p3y38RnXPYT4gqbQauT9Dro43wednbiZePbqbvcXM8nUk3ppSAKeP42uuGZDRAxAaS4m5dWjtxEGSkoh4",
  "key9": "4K7KKL5pvrg2jsbQZk2w4H15Rytk6FTFDkX5UkmFhfqxP3njr68pn52wewJge6bs7TbveZ5m3MgxECEePDtCTJyU",
  "key10": "5wbwm7SGa7xm4PZmX6rTsESuPuvSYskymbakKUq61N3yAJX31tpQw9uaw2sS96e1A8Vt8HjU5m1HWARNC92wdffP",
  "key11": "5Qe372Aoq3bwmEBvReNfiD2QRzB1Su7fxPmCzhDxdjh9Hvcrwabr2bxbJBD2VPTGrmyqCUHhGXEypY54BbNFig9c",
  "key12": "5sT1HuhuKp4nsRwWFTpQ63MEE5XpWX9GYNUioYGJyYGUocct4XyDzKPpv35mXgcafxaRrhXkHXb2V4UEtbc4AFxQ",
  "key13": "3L7DqnF7FQnyVuRT86mVVE2HCmQnZC616Gjyuv3HqcT7qfsJcPcLwbpkVFcdyuUHNixHhqJi6oMB74CVAwwKpfdC",
  "key14": "3r1c7LMtAemzk9vhkAn7NaZCy5J2ucvRt9Ya6tdf5kDW6UjmoEAFgbAwPDuS1d7f4Yh5reV2zJpG658U7c8Ybo7h",
  "key15": "2Agtc8PTSTWaDtiry8tuH9sFnjuMDRFF1rxMKEGivXZ8QrooCjdZNhDF4a5nDik6ghqvoivXUttKDyTAnUJBSX1P",
  "key16": "5He7kfNRpYwW96f6ckusrvUkU1T9KTnpEtXnc9burMFb53LLcgQQrCH9eu3jy9uaqMwpvf38cTXrkcA2k8noWLAR",
  "key17": "2exzAYDeb4NBjEKDMdzh9bas8eQdDzQTATqrBykXF5ooRp9sDdAX8iqVrHxkVzmuchKmCD3MSxgZ55Ekwc9iMiv3",
  "key18": "2bhG67h8gteBNRLQjvC8gXaUZok8E7kkwh1UsfhBdK3VBtW4VoA3v5D5JQtsWZxqZioaHSrS9Wiw5wjT2DFSRFWy",
  "key19": "46mnbZyr7UxfLJbtnJShzr81aoA9HBDAtDX53aEWB65S5MF2BEHBWtoeSSgXjQ4V5tZqwkd4TYxxu2YhHbzGnd1M",
  "key20": "sv23c8hD8hswxyyCZrpC2SvcuMTFXapYavoQrnnN7cPz5kaEAMNeE5hPWAxnaf5AiadXrU5Ufh6cMV8oeEZ4ZMZ",
  "key21": "sxribWnFy5hQ6vcMbqKtBBHf9QDxaUmbq87NS3rqDWkKBjqzJEggX1KR1EQfAWyaxixAJEdPxDwTgeyDd5sT5nJ",
  "key22": "5J3PM93iDS2QaUSC2dTGKozwXHztCSKCknU4kBG2u8cKVgowrBakoCDRzTJinqQhd6dzLSs3rtjcnmAXxyW842fc",
  "key23": "BwpTWw83EvonarUpnLjE4adjZ39ADcRXiZhVXKnXKWx78yUrZo86aqft4aV978JRaD4mgtpiBZ3hzR2y2h64D7h",
  "key24": "Zo277EgiBzjcMGjSg2FBbybv4EZVDB8uSbgHcmLDPG97w8dmwcgA9RYNUEp9oiXa9qUfjU2EXfRXBJ4ycx8h23H",
  "key25": "3iRup5o2zX9P29mYQYiHELRDMcKh5ZP6FgW9PwkKZtTeC3S6qKHY1yuL1DwN5JhPS876Wgu4XzJyD289nTKnWnqv",
  "key26": "2Jk7eu4ayngUCePh84mDw1kK3YAJiMQGYfUpr5SWLe6t2PodT1mZtS6E6jW4pmTmPBrPNsAaCEDRh881ojQgLbRL",
  "key27": "2C5xjRmNCa6fdeaEh7xWo7YURpvVEAdia4r5XVoFP69Wc3BW5CefUrc4XeUxKhRtKbW3TCmeBD5yMe8idA2jYG5X",
  "key28": "2fWmxXZJrNG9mWFYNjgcKdS5RCWzRPR31usRg4nCPnVBcSpZvBHcm8XuyGog7iubek72xL5FRp5sf4Bkg5rW7DAA",
  "key29": "2yxeUgoEyFFrV6dCHTFwEMT6XhHVVmWeTR84ZR6kj6dwxn4BSK4iBjR6okkbau27ijDxwxCbJRTBg9HuWd9NH5f",
  "key30": "5AFLiv53ZYCdpAcrxdfqwSha1tTAU7JUkvtukRBga5RF3THwzpWFLPV1V9y2iHBpn3aCddxSZVifkBFoBfzsHGoo",
  "key31": "5BCykD1mBNmDLbssb1SXRpzA7fJJxxsEU72J5y5udkCXvjAw9sLSNMinLt5PipHV15EHaqsiyezPwacrDvBE9aBu",
  "key32": "3q8c5CG6mbDese9PRU3fQmXSfyS1oMJNacFQn8vZmYykwuu8rfGdy2QfQJSr48nmeeSks6AWZnb2KYRa4RejTXXu",
  "key33": "WiwSR8cpXdcNcAB6qotzXGopXsPbpskbkiacmGnbcBD11cpGidE6DXjFcpxKR96QwA2axjsGT6ruJZ4sTA4Qe7t"
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
