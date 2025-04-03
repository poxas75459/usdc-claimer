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
    "2heZi9yCcwmJb3Q7LJP4dBBRVQ9tkt7ye8fpHwQ8UycpUJXwuiFw8MVfg5BGqYGfkqCCDTXWnXY2dMYuhQutfzSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zp9X2fiqpF8H9x2GnXd6TwRE4yDJDfDTCNvxqwEtmCtUtzyoaLKfXYNMMuoGxe5DYCbJixAuQkhofwvcJp9jbZY",
  "key1": "21zgGC6DBxVBrALahF4ZkEb6DuSvit8DP6cnezjrvaPfv9YYnprXqQaeB3Q78MnUUZw1b6zGmdBetDmiyXnGnq5X",
  "key2": "eJJ1dKnGSehtsrLdd5Z2pBSbjV6nFDLzpgiD5L2j73aTLSgoHtoLratRn5unK3uSHUgv7WPFP5oyxexexgyRndb",
  "key3": "5eFCiXJWaYvcsWtWKMctDKavND3Xawgctvh2YgLVLFTsywqPqUkz9Sgm1b2wYjaKSuUWJQu3PtgQxKRmSNirXbGL",
  "key4": "5u9ixY1HHe3CiubaiTT3uyuACRFbL1zWtkBZCF4is5WvmZUQQx6Yk3EHsX6buMz5yiT1UkGjie69NrCubgXpb6a5",
  "key5": "64Jq9msvb33fh3iUT185jYPzrNvpLp6HvpVVePNmarpAUPSg1gMQn76izuu5LcM3J4PaUDbjm9nFcm6d8B97X91c",
  "key6": "2Ymwt1QjscxivQ3kvS1PHjvScZVFzV3AaMiBj69H15SJzzxhvk217J8VfQCVx4bvxPT4mib8zph6m2cVytpXAyGo",
  "key7": "38ipSS1K7H3gyfv3TiRWQfN9CzTpFjvd84UgN9R3J9cHHZHSWnwnrrZWqCeWpGenULSBoYYQWQhaEYueL5z6FVNo",
  "key8": "5LKfLgs59DxDGVWvASb1LVK7jCPP49K6LCs7TANMKRoPj2RKDEBCAtPmqfMFGSJQ6t8CqCbexo3eYRwxuiaCWx8N",
  "key9": "rfnqeUBcMaVd1WrTpzgH3D4C5bYe3vg2fm9P9v1zpm8THfp8ssC8aoLzDMRopc1h97A8HZrNJD6921kjYLJXFQx",
  "key10": "3RHKQiw3T2iRkKHZjPsLLSqgPJ4p7hyaF8BZKwCfGQKBjNNU6TuB8LHjnmTTSNByHCpPKQtDMq9TZjJo9wTfkpGj",
  "key11": "3e1obveTT1wAvDTbU3Mu1TF7qZ3arYoJQkdbvcHbCM53YYkb8js9wT5aii5BHaUh9dZqXg58rCSCPh4MpprzWugb",
  "key12": "4987kZ1GdSWLu2HDjRfyNWtsf4cZjXs5yotLcA1fGFAfP6HgZ2AK4LbV4XEawZ9P8Cusp1bBBX8VjG4rfjsuxtBw",
  "key13": "2x6A3Gza5fsUQpzkqZr1AfTVziCh8ViW9aamd6E5oHtADsp9dHh6pFf54VjEXHXWmsTPvmrxDx5ePYycFqwJSHnQ",
  "key14": "4ZRBBbWaehNcrtzSCRJK8BvZHtQjKw3tmRjHJ35axDtMCzhqe1rjUuM9dTZVApHCKEL18PigetzMA9Z9wD2pbL9Q",
  "key15": "3AeKJ8mht5junqSTTEf8qKmQoMoR6kmZzpzU7BdghHVjXzFKKT8rwuwRsDRSwkqjkiwtKvoDtqU6XPoVm7rP3iB6",
  "key16": "3YVSVbdQftK57Hwv3BCMdXiJQGZYMUvVkmwiuQUF8wSnpKFKqWSFxHPXNXUJXyCJjKY6JZMHPTSqoWttHEnUq7RX",
  "key17": "5kHrWHbLia4ScSWJhiwHVvY4sTdgmmNGbwXFtUPMEhAGZubJJ14udg8UcsuyY8czMqAhP2iWCv9Uqe5TCXBwkTnu",
  "key18": "22wAxRHgCq4vX6sgbkiBKrMZMDnkeNHwv6iqGfzrEfX9A4zxWxSZVRsUrT175AgMrVUkEpPLwfe9WnN37BZrHV1i",
  "key19": "5YnDRC9KFsurxJMnMTAyxC7WAD5TVfBVHqyTCWjbXy9v6fmmMVd3qcNYRPiZbvHbCHZbJSEdoqDZeTdbL8YPxKJq",
  "key20": "4ftpbMewFA2eLwgTngr1TACUJ5Gg9SnVix3QybQY3hxPKeJT7Q8Uk7M4DQyk8ZXiCePDTPTNdoUxoEujy22rMJpn",
  "key21": "5j5KCVUQud3oFNvxAFhGuww3adpqPgSQmFJtkVuJZDj5F2TR1g5eamVXSi9KmLmrPaTirrveqgauPyx3GWHVbQnH",
  "key22": "2zG7cTdmbHbaZQ8u6hZB8jiUsevb1RwGay5bUXmqQSiDGpedhcijrTMmCeFQVgNidcayTNZRXZazwmEVQMu4SGDy",
  "key23": "GYg57qHzD2YXXT5JXnaSPYfvzma125tmzjKbsoXKjQMQaHHX1oMoShPvSdWiYH2z5NEcdZegzfQfZiG5JsP45vo",
  "key24": "4P3vG8s17pTQRadj1onTZpdFoykLLhBCxHeMKobetQip88fEbU3FnMHkrM4CFdNN7EpNWatF3rPHwWasLVx4Le8K",
  "key25": "2JShyNYnnkAcARCT5SQw9GT8ZrnSkJ3UiLEcc64ashbVMfssaUSPbrs7UssZaEx8PHtfMskNjSk1YhQCBuiSSPwK",
  "key26": "57TGNSExVWpEb8YNdY6HcGTb5JCeSNqZJeAU4YqY2yyHvjbt4AjybVxUKqB4R5oC7q2C6XCijYmviPkzy27K8YRo",
  "key27": "4aZp3VFkLZcC7jD6TxbvDz7Aba5UpRdGs8TSBaPHwkmLxBvA9N3YohHQ3pSM334g4Th3iXXnykY9K35e6mRsH9L4",
  "key28": "ZDjLenTS57eDsLu3pMsoz2w2rRBG4FyWW1AKXX2BxgWuKueLRain2M6ZXmCwddncCvuMrKSUv8T1o8Kept15Dbb",
  "key29": "26JoqjAoZV22zny6k52n8CQEKUpmPNJ7JRbXA5NkqmGPY2iosG8wLar94Z9DihgMj1fkLSrsSMrvMzQk6M7RBRNJ",
  "key30": "51F69CpWePF42HsJeSRE84UWRKC4AK4PtE2himUaAtJtR5e8i2YNJTkAb1wG8FvMQb8hcASsUZWsjeK39dKVRYPu",
  "key31": "BgayQFRNoVxt2VygugTffwHTFDtXnCaU6rtdqCzHmefNqkGQXoGxJUnszvYzKAi7stawF3e95WzkcE3VhiCNeVw",
  "key32": "4X15Xs8Ef4v4N6Doc5F1AEDboE9ZiTsbVbyTzAu79LMoeNjiVeWodQbBkkt8Q2je6acJB5kDTYvN6ps2ENbDbwdR",
  "key33": "mWVn77JfFm1PVV29vJMV1P63Jj6r5baEB2Qgwu1MquGd4R1PNK4SSiyT79ArsvvLHHGVebBDFg3Bpe8R6KcLbxd",
  "key34": "4aACPQJXW6SEMFimNogNtwPHMhKMhEzjzu5BCVfrr4yiXCZMYumNYkbtMvb44cXqgpqCiqwaNnWNRPo2o6LBUG3P",
  "key35": "5whD7DuvPZtpc1EJddciV8bWp4Dfk1UN3Tvye5fCvboMM7wMFPL7R5ntXoqeA8Fbu8EeoZUUgD8wKXvLFdtUnxL",
  "key36": "542wUySgXX9hUx8jgoftErS2YHNXXAycMvu3xiVDLAjqr9YrTZEz1xPrCYKQv4AXkj4NrnyrdVcEQwh9NEiLqsQs"
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
