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
    "4dHUoTB9wkpqXEkuBP21wgGXWdvGZuNws4pDXcQSQXGVQn3nox3CLXhue4TUzy7XkCH5kKGxQ8ZJiAdGw6dKuxca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ij8qRucwQxqWbTLyb23vXkZop4ssiqZW5WEsWr1soPK2vRi7je3CxW9w5B5e2i83s4r3WdcHVfDJRw1o6osWLpX",
  "key1": "2HBKH7UwLE7SqhM4V379SEiM1M2nXJSekVZw6TuKUshxU9DM9GqvH5TBSduMyXkZcsnfYSXSvExkVVFaihmvt1Fd",
  "key2": "3PDYoTPpjDpZFbxVqwpjUK3WoisAuSFbf46QMgwwzs1fghK467yvigNcbGSkkfkhoUYriGmYN4DMtRW6b6dTZw5r",
  "key3": "aDzYDk5i8pAxJhBXpJbz9ubY6Hv2P9e3PNAy2bA3gdXFknUamdQ3Qmx7SdnafEvd7JFJvAA6LHhxBoaULpTCGRr",
  "key4": "2uLxzwvRkB7beDWp8EMCGjyeArGvggwr2BQZYZjNqREsHahf7ETdSiy9qhtWH96TTeyUSps9Z8WM2R3mqrhawx2S",
  "key5": "5dUuvtLvmKyWbyhjmMHjvbduFvtW6SECXiesXkPN1mZm7kS3G7MGbT4q2Ghabrd3rc6a4NpCHwtkE7ZrKeH52hkn",
  "key6": "qsLjr4wuBSmT6bhQvFYewQABbVk7Nre9gVjB9SBXBvSkfZa2c7WKrVMhWrGwECTwT5at1YqbSetbgn9NmGg4UF2",
  "key7": "2m55FUVySiFA3rdBoyESYkBRU6xk5VEcZ4i2q1PVnBaTNxW3RgJQL4WMrMZZDQ88E8cpyzYJmDewtKcvHfxHP4Bb",
  "key8": "3eXjYUqiLm8czLmpjH78YrE1cscvUxPXthVbYnerrU2PqsuJLM9m9g61V4wfdTMMCTaSPMXZw98Gys8o7SKthHdm",
  "key9": "vk6roVtpCGSjGKWYDtvUcc9w9vWLNUeCymLJsMu86uzUymW3CyTzaRvPSvzDNsBTcUTx9CVXBDU9vkjPfCFVnhn",
  "key10": "hSRbA2Ut1NuBCopjbWFBNYDBXGmdJRAqpdLBPwE112XKwrZzQp1AEoYdoCW3hgqLCsVqzDeygMAgKfcseAAna8d",
  "key11": "5587gREfkZvCn6sujDvzSsnKUn2yhRnCivZGjtfjZvCz69PCwD31Yj9iZD4yiM5pyn7k9i9yW4uFh4nvDj3MFAEa",
  "key12": "4vUrBqqHcv7YYuFtrQMP8cXrvs6NSvk5P1aVDqgBH6oGoAz7ru7CvjWYucLsAqqS4NP7vXMymQwwcph5giD1zsMM",
  "key13": "2NgTzrYqN5FvAvEBsVRLA9RoKVXUevr4jGX3tCNEdSQCrGsPHp6Jd7PaAmMvhffXvPmZkMT3Q5h6Uje65vGD3ksQ",
  "key14": "z5kNRM4YtqUWxv6F19FcfE1Pe758xNA2RTNbAZNYjgTEwWPtntY4TjPRmhs4Gmka1fCnt2bfRSFCJJewxXjG7Mg",
  "key15": "2NWYndQazGKktULvLo7jyHZHCyrm5VErqNLk19mbHPPyJzKQbQk25KAvzm8Qaafvxi2NBfqUj3dfMx3vx2zjZwHp",
  "key16": "4xm2fNbZYT4UVvvjB3QHy31mGhg1X2ZGVGFCyHcYSnF2DjM5ThqG6gDseFBcY7Saig1XgtbL2cWR3pMKzs4DFEcH",
  "key17": "riBSkTqJupot2tnxVETTTrHX9DwBKPkc2ku6Ph8wSn2FPYhuANCQeURYTkGihEAYA4hqYdfjbdezwywy8res2Vz",
  "key18": "3cp6HykvfgUmYjAmxrTJXXoAuc6n895VhtC12BwZnfg8qgGqPTu8rcopat23EjHjH2SjdgoLiiku2pRU2HVCw15v",
  "key19": "4t8kshko5GFbMaV3FibDhdX3zx6v7N9ys5b6sNCELXmFW5xfRWiBaf4ATC7ss9TjRrCfs5xGDVftaHuvnPD1sW2a",
  "key20": "4ewvF9eQJZ3m6zc7iByv9onmkUrBzsN1FcdBhXbPByhsBw92GaTNF7AYxK2aM2zHncVaedZqToJPjpvNLwPdMWGn",
  "key21": "5MhNEimEmeticmmJFEPPXzoigdkv28B2D574qXMd2DSAjSwgnXqKxWDgBBBZqGmSbwLKRbg3ZoSNypzfuumnufQZ",
  "key22": "4QbJpz8s31wfhDJncqfF5fuVjCv9ordDYYBS4tGVuygMrUAnFWm9FMHCvFdbofYuDNhFLE2BmwCzmZHiVmPmoDQz",
  "key23": "2hNDAsuBr9NEELnEKHYkXPf6tBVxTNZTHLBgfc3DrHmpV7Vd9rBTpVNh4VnkuMDeGd4gK3scVRrU64k92LhoS2Q4",
  "key24": "5haJkoRrtzSSqAeUqwbXRSWPBeEL7oRSTLbp192E1jUifYcuTwgvfaaSQ1E9bW8iRuNVrcAGsDHtiFZ3JUXTa11M",
  "key25": "4qP3VCL27yKCCVadnX1anUdq1CqKniJLN5gSojsAMQjm4aPNaJXKXQYYytGCPkUu8g78HxSHhirZDK8BJsa1KPZo",
  "key26": "3ezM1ryX8DJ3i4A6zGmakU4Rfcm6LiJDtFdgcKowiBeYqibefFUJrZQetYcwsfsnJAogkPNLNEq8kCrsL6jfy63d",
  "key27": "4DfH9FF4bd175fXbrjPPTgRD7tEBfZC4qzY8f286AtM1T2XMVHmoD9CeV3qzLVTxkuxnedapFWMqdQXNSCEwT1eF",
  "key28": "2HciQrpCA7xjmr3NSupJ9kM56McFAQL1ASeMBUxFY9jybupdtQNwEu2JB7RFDUonWGo7iLLH3vZVHNhMhLDJAGpd",
  "key29": "AegeGkH9VdJc7qYmZZLCyV1d9NgkLRZprBHsEGHCcvXXBwcDP19kT3bHtRHTSbTD43Jsdu4Dt5VxhErTg9oAjpG",
  "key30": "4d3uLzbm6WLbYkQJhBgVoN6zxVDwq5qi7hc8cegmFgsHXYzLcKRR25mATJbLjM2gjbcpfA79mU67GU6r3fHo5var",
  "key31": "3RDvR4NFiLJR2xbsinpMouRRUfsyAWfJj8VknkpGsHGoPx8QC7FTv2DvPcy7MbjjTsPhyjhnuXG3zY1BKFiyF9Ys",
  "key32": "pkyzLz16aLDWG3rZS75N49y9gz5Tqh2W7yjo7X7AcxUPee9GUnFfuHsKadF9RnecgthvvsMjA5kU6BZmZUHPJzf",
  "key33": "2wHtfgXH7xpZC3yRDKu4syoQfSKt8KquqHC9hFwQAnGTUs2h624QqufSBq5dJNLfmLGczxgqd5qHcDfQzLJPNQxc",
  "key34": "59NQEpzWmJ78zzkqVRaBCkf5WPVehQxVvDDx5m85XpKddUX3f3F66toxzRF83x4tEDjux7cyRnq44QA8ZeLQihi6",
  "key35": "24rgXyk9oiSCkZM1QTHp8tj59baH4XreBb9Bueeiy2midgprtwjtnxth1XemCW8USoiMs6wLWshZZ1PnNp4TR1AM"
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
