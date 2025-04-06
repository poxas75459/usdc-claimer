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
    "DbAuGUUj1PE2mgnmAYyeUL1CSm1iLcWCCsj4GPXpZniVyHgPtea7CtxU6u9FPD9vtQNPdGWbiCskqj7Y4KxNJyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c7vgNoUos6KkTatFKgzNuPWs4Escf8DMMPQ8VvgYiTs8cxYZVhoUKcM7mVytvxct8Jfq488VUyERMhem8x5TS62",
  "key1": "2q7ELimw6X7w8s8vycd7CtrinJHRR3nCFaDyhVkurLS4JFJd79WxLgZm56gbhLbnbYQkgjSCmfwMHLZK5BpH8bxu",
  "key2": "5xw12vfZoBV3urf33DpNRwaTH7nB9aAeGLbc5ENQsUkcDYVuD9gnKVvvmHWgCM18XwcYR5g8BF2TuMkUenpQRU8C",
  "key3": "4eT8Jaj37VFR7Bq6c1n7By6b4koUhG5boBp1Nkf4zvK7JJKqyvfUD1p6sBrqQmLHzXinpA9A5Zi1NPCLktApFfou",
  "key4": "5Dzek9M8Ftqf2s7oSfJ2Ads2DDBbq6vturJV9hGYdL4WL8rvZ47PN2XvmyjzaU8YnNFowD2iLf6GvQ9cxViMZhNA",
  "key5": "QakyqZrTkJTX1JbiqeF2FioHEZvTXF4WyNB9c6kNKMSMn7PGZA1WNkcZaihpjESkU4s4ZdCSbAs35a7LsNsiyVy",
  "key6": "44gqiv3d6m9kJTE2KDEsDE3SrRuQV3T7jwoUwDWozBUZhh7P8wcQDbHpYbhgUEDjkdP4Y4QUQG4iqbbHsQDvJcHS",
  "key7": "3VnNJrodFay5NNekumnnF9hf7iFUZC3R3qidVwbrSgBAp8Hy7msANVa4aQmtzpo8UA2gpDbSjfwwYqgyCrZnTtFK",
  "key8": "ZdHXBZBAAhGfqT1DGh11Dr4KWe8ACCZQkjSnJjPTY9Uiu5vsnBqnQoz5ivqdY4mdGGPYt9B2J8Cqdpjs9WnvBSs",
  "key9": "3842KYA7mpnSnra372DSjtvuhLD5Rt1MPiPKG4TnTFJeBMHxFs5X3hHvLbXkmpQTN3RKqky9F5WvAxFQage68AAs",
  "key10": "5Mm8RBWUh9c8ZoS6G317kb1SUEMQpbsnYS61NYrkBHWfFn26KkdxSEdBsBSiFWVRDWCtg9y4XL7foYbKKzYWNgZw",
  "key11": "2S3KU1T9QhFt6DZnyiyycdZitkz3aTqycAS7kH9Z711Lwy2PbNaK2AofM7Dn4Ljth4qFPJjbhRDxadwG1vxJRvwo",
  "key12": "5he3gtWfVXuaTLUR176XniQQaWEwU3Cw3JtFPVm8D27XWuFWUMt1Cpc2nzPVKwxpEYwErpyj9rcSvZmxTe2j3Jzb",
  "key13": "4TiiDhG55Wzw78RbQucupYjcNWCsv86FDHzua6uVjGoxbK4v61vNbGaDLkVyUysW2ahS8x1TYNNBXi4jgf93LfPJ",
  "key14": "3YpRNXnzsADdhAY3F2aKJQeVR868QEZzb9aoPUo1oEV3Y3Uoqr9exe9jCd6k5AY3WhvYSgjtTTfPVVdq7vuTw45v",
  "key15": "5MbsArBK6A98KYBcBH2yFAiVZCt7Mwte6Xp2xpM3mcJDPk89ifLj5bFmeN7Ttx1LXe6JrAeopZX3SgziDaRby5f8",
  "key16": "hLxXCBDpNsRUHyTSJDa2t6eUxiLytVAqYuLNyPrdVXuEV27XWKemi3KDwZCVZwjkjiGTZSDHbHFdHbCEN3GLdos",
  "key17": "3kzsG2oQJmR8TY3CEd2PD3kr9L9hXy13nMdEAd7mAqHzbyJBwwvsCNNzx4Ff7pnf42vAAAttJ21RrW89uaRFWEeQ",
  "key18": "5QrEFKMFDnMCTGLPKRTuBL7snCvYd24F8vB73da5576VJ11Qt13g35SoYuujJpJAagcC98JZY6FsrE8TsnMMGqAa",
  "key19": "3gGXd8JqFQYp6iC8z3Uf75eYKAFrfh8NRRF4L62AnbfZQVfJEJDhmCWy8J7SK2rbnWQbdik93bKoSNVJ7cTyigqF",
  "key20": "3XRCsZfzdDbKQ5eibdJq7EXrtuXjauhN7EZVzQntJJ6kH1S2BxxcbB9DLg4gU2iCBAKBuw1agSpCtjQE2Bgsi9SN",
  "key21": "2AqUzw29NzSpAAzcMGJfRqXTtbRjGRc8tp8k2qVsJAGiFJi9BkcqYvQrE5LAVQ6UnWwFGkKZmZyHrSqjNoMVJtkT",
  "key22": "4rE8JfzSA5uJoJsNErXH23kZJck5PAgom14o3R7YD6gHQf8KNDhCBPWEQE3UBneGNXWuGMYeYiEyJc2hA5TQJ1Qi",
  "key23": "37C4JmKaDd6NVXA2FshXabWnUMRLrdA7XiRqgPwSD4ggumULsqQ99PFdojxbaobMmXKXFfp8q13DiFkYz6WNrtDz",
  "key24": "5mL9AKWkf3sod1GdTU8pXLWrJ9i66h6gZ4wDrGRAeCYVDJSRS7kfDKUKLujfLM9iSKKzHNn7tdpnaPi3UagPAnaD",
  "key25": "4hsRn2UNgtDdUU9wf53JKggc2ffD8cMWnTNfnD7Sw7dHRtRCYV7beV2CD9FiV15AhVLQ8ec4Sq4xwh2pksRUCkS5",
  "key26": "4i9MxmAknSaN9MCMmdMB3uNBzbiV3JkighDdiSCZwW3nFi1tW5YqMgtpofGMEfznkVnhvPbMgM8YvNPm2gAMw6Zm",
  "key27": "3JgmDQDSbMWiA9sonok47kRDPVc6KzPS1YQa3pULT5rVoW8eZpoUCqAde8DCrWtA85e6WYQtg5m3rSSGnbeZatjw",
  "key28": "4ZT4URBCTMyfchUmPZj1UiVvQ3fi4LkbP3XemWEwskPwMK1VU5JjaYwXLdWmVx1aMYg4kBdtykYmtz6N2V824Dhz",
  "key29": "6HnsnWf53C5kSJruxKDx4J9Lgb7VWmmSdRrJ7wnSdLiFuTfVSX2BC4Ep1x5xJJ2tsQ2Q71PNXQMLWweVK2UJJCS",
  "key30": "5nnQueFS2YJoFBJfg6Wa9c8J8nvQiZXbRJQFzqyzoV1vSu9mb3bcxaVYHK71ReytiUpKuyoRDmSYCeDQwkYWKAU7",
  "key31": "22dYhv38XVxrDtpbmWHV3Mqe1BQ4yL84eWhKr4iR9cdMCZTRf5MovL598Ce9dDtsJsAjyBsdVrYGLvgSkVnhPkxz",
  "key32": "2gAFmuXeVEFkBHPWqJoFmfUcyZ3E4bs5oVgNbay4Hdq1NyfkBJAXUmzFDR8xw52exmzYgAFAgZNssEmQmEEwxvTH",
  "key33": "w8Tizzs2Ue9XW9yXAaWJ2vkiYM3iLBHTQf2xWvaRmBq7AAuJWJsQKyqrbs3t9BX7JYPuGEeAnEdwZf4fDd1LuCb"
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
