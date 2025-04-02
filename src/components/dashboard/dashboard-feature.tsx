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
    "SWW1RAvFiwL3vB1ujr4gsroRAGshJGUb7LbfVxLYHtPZxWTKgmaniVccD9iP2j9KDQ4SoUyQfMuBfPZpr97TXLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3krawJdP5vwa5nRMDLfm1SUctLv2C7VmgGP9SYU1j8aSXgQcZLKLc55UG65fGLp8tnfFtqRuV2tLqSirWB2RRTkV",
  "key1": "5vKmKqKiedjT2jybWwLYryTUv4LDCmm7qNzfwfLHBX7fwgrzpUYwyEqsgbKaFN9ckTzNhPTj1W3VKMS1Trt2H3KY",
  "key2": "4t1wanGgfvPE8RGtQoVU7QfTt1A6tjeDXxaUVap2sCJyeS1VDjCRUf1K6FndPEwRhpFA5XSegPDrKAhYwmyJ3iuH",
  "key3": "5ExMujFbGyjPe4Lxwj3pQcW7F8mLRsHNU5rpL1TGnVLuQ3uxgTAHeSfn8Z8CKsudDVBNcbXFJNoWTagVVmNJkD9r",
  "key4": "QoAWNALFJHeojrFDw7w9qh9DwmF1NSiMbbPt7YfCtsovC57CaWbcy2EMNBj2K79ReEkpSDYFvDZXgxAY5aS3QdX",
  "key5": "4obPMqvV5TQxT5MjCezF69pnGjsauDJ57ymEq8ieyrNTMURyUbw87uQ6Y9gof4SQHtAWc4V5shwjkP7R7Kx9EpPP",
  "key6": "gfUAiJQyaTuMipHcUnzcTwDaN5WoGwt5g4HGhX7L2CtjVtAufraM4Gw3xRc6zkZ4C2gjHtgJoq5pRX5K457eZJK",
  "key7": "4FyMmY2RynmUp3TYFQNbuknk5PHjvguEGV6n67eHDR1cckb2fM9h5mx32msH44JX5KcZ438dxhQYRF9rWW1XM4Hj",
  "key8": "636G5FwgeukF6HM5EBbTNRHoixJV5EC5XND3WFxiE4L5ztZayuyDANBbWSDLrgfE6nG2dP7pb38NW2cUHkHQ8Vym",
  "key9": "2veMqJHwhR4tzzim9VnacLAtb6cPwBXFExTzHc3i9Q9QpNEB4MFsKXy9Mj4wWZ5RAzdH848gLdLseniUJZazbeYA",
  "key10": "4zy9ig9oid9TphoxC71Fy1QzDFtDjUCtepVpd4s3RVLz7BGoaTcFrcsZddGfAwZoaGBV4TF72nf4h4bio7GWcxnU",
  "key11": "TcKmUmzci3Ls9rYi5Wf297x58WJdfEqNuHBr3DKVhnFFNskdFfUMA7cRRfUT8MHgTxo6UP4ijXtWQpuDzg8GcyG",
  "key12": "3tAk1HSga8aRr1H2xbmWbGjxEz68a6Ere5VPRN6bxz2SXfhHGrVdfG6J3XNnd1UknKrPamj9q3tNQdM4Aeg7XAQ3",
  "key13": "61qHQwUL2G5xrupfpkVYvuBSjnGTpoawFZGXqyq3y2D2xEGgnd1HqH9ooCYvhdikTQ7tiKGvnTAGixQfBuzTsbPL",
  "key14": "4K2Nbc4adn4eheoFb1wksFp159NcZHZsa3P71es2h987TBXVzF1ptdYyxF3kmZ38wqDAjcxxJ12LZS2oSSoVPcnB",
  "key15": "2yW1odaEEC7NGiLVvMCcFqqJ3Qpv3hmRqP3LvGiC4Qo4df2PsQ7MPknSXgcqidkxQ363SXi2D8aEWRA8kWzjfKXp",
  "key16": "3P54MKJ9KY6KqvPjyj7HCv59JQXC4ChfwDoBtBVbP6z2yhprvfQ1KoubyUDfQpUSBhKcxGYuayrqJgqeWW3qoUj5",
  "key17": "4AJ5kFLqsxP4FNax4VHPJTWDaCsDavGzz7JefY2qmZfqcVZUarSbQ8ijCnE2xsxZkk3AYcXMMBaaT8gwzj5g21hG",
  "key18": "2W9QLqgK8uaX7hWg1BfPFe5nKJnJopeoiK92frroxL2neqALxruAHccqBJYpv1cN9tP3SnUnkTb4VFt2f4EZj65E",
  "key19": "iDEDvb3bd4kQmtdGfZEoFa9esqxbjzrn8BNj5ivx26jtD5GL5K8KLbgxfoUCH84yTb6jGRVQbR47vfV1gixDHLZ",
  "key20": "CTMLM94XYGzMnJh8kB7NPRL1ye2J8CqdXGVhrJ5jrc8vQFFzuRGAB2QrTQBb6hBxPuaw7LbjF1d6bsoPGA4xFJV",
  "key21": "5uigMecVbzvbAVSV3i4DNCqiKRSx8wLC6VDmp6ZAkt4oWJKcm1k56tpqY6Hr3X13Jf1M66gjsTLGd35GtzeWq23o",
  "key22": "8S16NfwvZmgDXiGkSuqH2PEQVi1Y8X2vxwq9EhsVvkeaUQWdKNw4UyZzappBzd3tX2v6soE75fp1oJKFXmgqxv9",
  "key23": "3nhPtxo52LSwzJ7xyUUKNKHRXAtD39oNjtyEeZwq3JCeR7LBYVPxFQ1j6JUUEnN7XX8ohNWLrzhZ2s9DRoQB2kyW",
  "key24": "VZfxGj5o1nzpM7wbUhL112c9uKR8ZioDUtbMSQk3rDRbbCJZ4ZZ8oCUQYCWiaGKrpBF4u1ytSuCmSdaa67wnNw4",
  "key25": "2CRHHDeTZt4tbm75KRxaGDFAsG5a9qwTirMRY7mfvZWg5pGXS95NDneb7SFPU92cWYLFx65u2SSPwkERQi6sSwc6",
  "key26": "5xyaSg8wsrUG8pYc8H5q7QMXyipVSQE2YnAQj3em3WH2Aa5EUCZGhUGniydbRch1mqRWdExRQaSZkqpmNDBL68So",
  "key27": "3Gi57iKbk4XhdqfqLsqaTJtWz4FHYfydtR1WNnurLaV9E3JEcUuZosatbMBSYWUV6W1FonY7Jh7ViNZyNY93nTPP",
  "key28": "3Ei8k3Ayh3TDgsKT4qFhXSbKkzXCPQRjLfcf7em86mggyeFGpJingR82AY7mxQ6ox5dw9NTV9feTFrA6QaNWVFj5",
  "key29": "4LM9738Ra1e38w7MSjsPsrT7jYgSagn5G4vZusghrd7Huxsy6ejz3DxqMxBSjgSftdR8uRNdaWvT1ng7LtC8HvrW",
  "key30": "5vyyrdKy9JRyyuYyn4Sd2vp59JTn9sgcA4Ebh8hJFqb4W1G9JKmpkJKAJAwiWEviR9Va2MqcYoRJooy95jix54h8"
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
