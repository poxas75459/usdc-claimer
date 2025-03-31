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
    "A6BmBCy3KgM78XiGihaspuRYDACCA3VKSbpTYpPFBRfgsVbLB1EAULKEbpwhUea9JS54Z1wJNwq7A7BPo3Y1vfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ErFUMxzgcvu8oTjsSDST2mPRo3XBPwySGudy7Dj84HEPJFNUXMeNHQVeEYafaa4Fm5jHZWiJmNej4VonRAK4phv",
  "key1": "2nRNe3cYd9gsgopeRJ8uzou17EugAFwndZc2cqhXxU6wRp79t9Bh2E9H4HMbz5ZLfeuTx2XUSADxkuxSUG1CfWAZ",
  "key2": "3yWqwjtg3RZRBnRH7ZK9mYEaoJUvRaqhQrLkZgWRNeq1MWaCdrk15SVUn4GPJJgDNbHqNyECbRroJTd5wePcMFrW",
  "key3": "49rUVSFJYP9Lps1Zq2i2xH7Y2GiNCpwPEjvuyZDPhjjC28VZqmveJg26VGgzS8LZZTwWR2BPAZUbtRMQ1ZHCqLhr",
  "key4": "5Y56n61wX1hE38rueTaQTtMJvBLfk7X1y5v8jDkWdM5FNFFu2RGiciQo7CUN42fmPD7gYFz4aPmN78h1ZDCMKdrq",
  "key5": "48pTahgVxdc4QC5CLRrLXrFzBFU52LuD81HuKW3BKC79yghG694aD2awc94JPEcYqHiFypm8WNruKS49ckEfxd91",
  "key6": "3sMh4vdLzikXpJo3hfHESjsQVNbJFb3s9JqBGXV7R7qKzDrx6VAKZ1JxaWUgyeEsS7d8VunbLXwygB858BGB5mfc",
  "key7": "3RWLL6vsiPbtEeQGtCuSzERXkL4y8xptG8eD5FjsUZWTiFSnmcxWyLb1wfBLWn79Cind3pbqyEy7hqaMR6n2bcdQ",
  "key8": "66uNTKixP3xTSRB8vbyNdGKj6rxEbxxvMspKUJ2fNcGRGRKWNFAZzrrEnwDTK2ojpSMPtQKjHj2hESt8jhhppmeF",
  "key9": "2P4SSmRYEPSaHsgvmsN2ftdAG7s7nkPhAqW7Kxh3Ngs3AvuooqSo4PZxGBkaiezEJ6Qhj7ri6ZfLE7rcr6PXc55A",
  "key10": "29jHsDghW1dabdEe7i1uuxPwL2YxGKgxerTssyxXHiqSfRWk2sudDT34zVH9QUq9RxuSHLcx2XYCFx3av85KHbfp",
  "key11": "4j7FSwUEUWnEGEHedgL9BzAJW4QdPY4rPpSV4JcBuUZbVLaeUprqCm8QApW53qg7rbX1RhwosxHGcCvXJC3hT5oQ",
  "key12": "2NdNhPhSZinxs7B4RA7K9RQv8K7SZzJefA94drrPZwgPrJoP22aw7DYWEtEBEsn63xa3y7prK2Z7dpJkjdPx1mdN",
  "key13": "4XNbzUwbcZKPGubPWJKqdRKiTgdXEmmAaWm23nN1Jg2YfEkBxiajii5U9EmiLz1AsWkKVN8uaGEUDa7r6CtA3ELc",
  "key14": "65A8MmjrHeBUhp3Rij1msX3rxAy9eP7jneikmRAGLL1RnbE4TXvrCKS4JXpYe2PiPMumoX97JBV8TKwwPpMH9CaK",
  "key15": "5d2xJTojAv2VBX715V9pVDHVo569B47UAFbc8o22LBeq4tAR8rcNdP4mcirDcZVDuhFPRz7HP5AEGDgSUhKifTmo",
  "key16": "sdd6t4MZGgbcRcJ5NJhUx5zWfkwqjy8dsDL7VoxtjxGshHUMxemBwJAcTQA1ZaSvtrzYjRhBoAZixTdmWUP1eDM",
  "key17": "4g7ZGwtBAjTmami48iacSzHSk2eARxBUzHteF1XvEATivkU2EX4UxWUhdes2XmWX2jSBaghN8rsszZ4vJNVjmxcW",
  "key18": "LGoTWAbywxsmbyeAdRRHY267vuuhCTFmxEFsGNhDF6auJDMgmPfTUF1VxVTiZncwZJSQisfPnCnDJapJgRh1z1b",
  "key19": "2oT7QdKbUvjJe5iQVVgS25WhvE9k4bjCfJB8UdnUAQEhDYkRwUoKdFAXH7DRAfCKHQyKWr3JYLiqsdEciRdn8TnL",
  "key20": "4DhSUegMmqiQTSVcbkFJRmLDEMqwiWWw1UmNCmN6SDY2pKP4Ud6cbTY87YEkQNCefYwS3x89nRtnRjbpC2xtzP5K",
  "key21": "3vJe2uscjQnnkcrh7xWCEgwjtnxJ39pMVgHmzzXs2GzhJTHxo6ddibtuu6BKweDXScUg99DCb8hvvxie8bCBoLxc",
  "key22": "2B64Buv7kNjPGXucpBWohdjTpCwgHXbg4dghpDc3U94EGN4ZmK942f4mykA7xtPBYJ7yr3yraKCaHLzhAAcTnky",
  "key23": "5ezjtXA7v7LRiesDUzewfiLHh5T5K1QT8oXxWhcFA4rmuZSU7kijjwep6yeLwWBxJ9CWby1kDJXi9niGHdYcaQZA",
  "key24": "4Jpcv6r3fVrcGCSm87mf5hYa99sMBizodP6RePGpoXUD33gaa47MZcEA6uAhHpfdLuDv3yr1ntB2DwX7R5ZgD7cK",
  "key25": "4VVSfjU5V1HPq5wtfYQpy2jDSMsEFp5yfEZdnVp85i8f2FmJHM27S1aVjrFcCRPbwtUrxCtH3oaAtnQZrz7FNpFu",
  "key26": "3ymKjJ3RJAqmt3LLZHxNsJ6DzB8wB91BWRbPqXYA2mvA7ub3NeNtejG8ZFemYsdyn3ZPG2suvgXGC38tyMf7TEuR",
  "key27": "2vZ3RjDL2m8NzDtLQ18h6DyffXbuH1HsPeQYcyEBmDJZn6DqtLKRiuLYYkkvoNw3UBu4HCPXCD3x7CGabKyVVxgz",
  "key28": "2XqgpsuMNv5AbTpRW2azFKRvkgdUsFsydb1gcnYbewTkF3jGQUzdWFrNKMjh6UJyuFyCV29Yyspo83ornFZH1CMB",
  "key29": "3uNDnNiHyDhRzRZ99527nwRhmFnPydvAGcy4PoCXjALdUL9CHSKBWov6zqqSfpzsyhLMq4HtdA1C9mXVEdRcnSQ",
  "key30": "38XnAR1CGMwvd1Ggkr3h1uone4r4jsnYdmdPAE7ssTseGHDkZXRPWf2eKpXFDQoSjDX2rT4UfcRMSigq93a8vp5i",
  "key31": "3e89nm8DkQMpDuk8FjUgC2dYMTMzsyeGYYxJTLetjW5565HvKgsRiB4rCfFBgmqffyDusMMzqHKpxjSBvfHVVt7o",
  "key32": "4TAWtLpPyNqQcizpMqYqW6tb2cp7hWckLzj8hXRHoUsp89S2BCZD13ifSqv7TEkF8ML9cuKXdvnUcMUANmLLLPtj",
  "key33": "5zsa5LpEWg1FsEGhzxm8P6MXBavSkLjBWmTbS4Mqy3pDxQQzWWeLmvtSY1hVNZXS7icVvQdQVnYN8JPHwoywFYzV",
  "key34": "2PGd5EKhiaFviS6P2so6dcj4rE6WhwRQke5p4AZghF9z6TnPfXSytQFKSw4zw77T1GgWeQsJJckzFaHG5FhKTwyF",
  "key35": "2YXp13SuhiNRxpTnh8iv9KkSn9h1xLw1BsvULX2VW7my5cJvCVdSyZ7XyeWTHVLLCAqBaxmU6ib8o1pLVcSDBWMy",
  "key36": "3H5GWf8vgye3NgqkQNmwTwhj8qvHQG41Fv4jNrz6xnBC4dz7HLeaFmNfJNr7xNd3gS7VQ7ai3Y71f7JN12RoFgoc",
  "key37": "38QMbyBuHPwJmhscGcbK7ZqFKsmiYKrqaa1EZm9GoXjriY8yaZmwSsRL2Y7q1gvACRYVbojPQSCXMAzsdJDWXBtC",
  "key38": "3T8JvF6o1oyAaYxJLnZkraZKsPuV8YGqBGPs6n5A3WAmJwXJKheHK5GCh5CmUHqGDAff59o1vf5vnPARwyqaRKiR",
  "key39": "3348PP7guxUfZWQqXMBGPzuXgH9ofy34MqKdBW1ENKy8Y1V7yKoCoJ9MJaEgJYjBHp4feeZ1tH1ch8EB5AgKwWDa",
  "key40": "yN7Cuzy7XsoNA5Xux9EttP7kkkGqEgwfrhz88iCfELDXkFLtWzThQTUKpMMCQ27ms7hnjsCrKtWc2NfCUWjP1rY"
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
