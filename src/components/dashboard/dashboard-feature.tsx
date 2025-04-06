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
    "4qojPzvzs7BXCTfjkngrpXJJ6sa2x4oPXrrPpeJ4tFG4Z4E4kSZCCXT7qtLeXkSyS57pYnPDGhiyizqeAAsPAuxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xp1niEPAMsH8CMjN6xPLynBShqTGLubvfSSt1cqJ4ga2r5Q5mGksFyFUXQmAZK4P3gXSemzksbUeLwbhP6tMZsY",
  "key1": "21UyfGN5EKPf1Fj6EbMqATi5cu5z3s1wdWQL3t1A6XwvWXCBsKS1CTPadWyB8PRvxxhG6in4wRDJT2i19JehoQMB",
  "key2": "2vtbJg7wo6kFhGx1gHKqf3WCk2bS5qRk8TLRPuuHtSekiasWYwoih6opfo6gbPKnVUt3BLMMu8X3tntiXcWhwzUx",
  "key3": "2zDV29YRUb4MfqorYh3J9jVuvuaSb3DMdZdwS7Pey4PoQvF2ZDgCHdxbUfeRCYrYfHbgijbFZeeufxJQX2XqWq8b",
  "key4": "3p9vib5mRqmdB47YCRDz5UqqVhGTrHCvzPXynnLKGKRBt3CZVXpyS2PnU24tavRnrW8evy9J35gYmdjSWMcsNSiX",
  "key5": "2DSa6bD1PDmWqgBgK1XcqPTxNm5xJizjFMgnWLniKfmLRKSV5UwKXewd6CaR2LCFtNcVMxoGywM1Ra55FvUq31rG",
  "key6": "42AAwwBLb8tBGEqsMpWzASDvVfCSerw83RhLTjziznfaqJJuM8kc3jYMNVPHYFJNybjZpUNyBQDNFMUkcnfBgp6Y",
  "key7": "3EE5BKWxHmcVBUQGcaeoRq6pHpfj3NeDs7TS6UW4u4yf4aeb6QwYkKyGiqwTCgDzjomxJ3ikae5H7q9DuGM4SdB8",
  "key8": "4g6UWUe5gMhY93tj3mVoYafvTcVbWrNYbbvZTyqqDVdHjQaBHCPrmcrzL9Wb4BT19SEdmzYcyZetcH6a88iTD1a9",
  "key9": "j1abvCFNvBSDp8VxSmudxHcDw3kAcc55RAGMEUGVa93HBuzryiWoAEsPSKBx5T8hKq8ExvjgXM2Huxv15PdRufr",
  "key10": "6b861j2Q1TSdJTQCV437VthkDEXXuyhcbzv42dksT1TRoBKapenfFwHFzmphhia3KVgK2ZeS2vdAeoKrUkECbNT",
  "key11": "3wm2xhY1TZq7qjZ3GDfYXy4T3MtgVi73CuWjEQF5vS3rxhEpxkzSd1cH2GUufuJCg8BoDhbk51E9avNLxgTC35fY",
  "key12": "4uMKbJW423xEZFKr9mFK7Tsn1AuGyP7Gtt7iup94HTdYtpTXuM84tM6rUNMVzgGM8dNErCqrTfzGUEdCMrsFHGus",
  "key13": "4N1oKHT3P9s9i5r5TA3DcTsv7xJVZR46rMr1xzeqyNKGMM3CdkBKfdeZ7jLC4CA5WFvReHqY4fCtc77J3Ndz2QVx",
  "key14": "2XCDtVpD1dPKTLputbGJsAJUNq5gQ4jJMhZHLywzAnpzUU9yHZK5hg5G8n2dkTxuEuT4oEt49wrhbG9hocFYTusR",
  "key15": "7Nt9e4gg64kgfixQv3Vn4S5MeSy19ZZQBxUCaxLbBhq7tFpUkU9noRs8WcUdB1a9KQHGJQBhg8SnacW7aPpF4b2",
  "key16": "3QsgALWUCb52KYsHyXjgKYB2aKy5VEuKUEgjf2VwdbE1FPcpgjyeRLEE1xd2mYh8qVzeV2A64e7wsYQmJjrNwFm9",
  "key17": "5RqGYMagCKujm7rbeB1bBippPYrfBwZkxX99bwoGYHw9z8WBJH8QuqwpZ9whknC2chN2QxjTANWJmsuER6cDMmds",
  "key18": "4hNmDQnKWgbvgUGCSv2N9HEx7h9rygDgWVBfTJV7WSFaeRxVcSqeMSETg1rErx8SSZYiTBNZoW6u3FjiUcPBpcpS",
  "key19": "5pjQjtYbTdoyC1xx2fEXVvVPMVsAW6o9TGNuVGLAAhWZnwzo84AMLGSK1faumpebSZsRY8qtW435Xzth7PTaED7S",
  "key20": "2Rwp4MZ9XMpj9NRWVPryPVe1FTrNWge2GFCrkATu5Z8NSNHsn9DMa1dcj5TWe74LiCCnLHcXEfSVKhewhvgsJQmt",
  "key21": "3Q8knHet6LvqcWEH4ArGGubLSKUQpmnc3a1oTdPhZri2GJdDC23s44oc4iB9ZKPVtHieMBRX3Yy6RYoVQnEBVBhB",
  "key22": "649XUb2euR4tX7KaectJa9xmi9t77tA1ErskLcX6L6pQrLFYDkcACwaSiEj7eLkKa2QZqyZWLL7BSAiPrGDcqr3o",
  "key23": "ikbxCob5YT1uL8eUgHzwLKvZ7nPuU4LQymGdoGGohUcSWMdjP91czvfpa3kBP2xmTDPeWLBufbZvYHs9yUmEiEm",
  "key24": "5zdmAqyp5bdHRtLQmK9uwPTrp6Eroc85bPdzoDPcr1AQ7hodcXNdLuFpUzcxeRMstvmZnmAMqfw72v3wcnqgTnJ2",
  "key25": "4ihze9G9Fh5tWzdXibS4apwJEmBMnpfPdt8ZUXYsLuYrkTVU6Gnhr8jN42GZSRWXLDchkt1HXbR3K3txd1kcVTcg",
  "key26": "5T3vKPqHFMosTWGibVzSPR7F6cXp2FhD2cbHdqvCvtiD4jVcWxeY6qGUQ2kJtLmmiSfPESEG3U2Hra2EAxqdPwNU",
  "key27": "66VDrwPn5fqpzgnjTcvhUoJLYANZc9449dKFUxt3axEzv8nziGMvGuMJSkM11G5QdhXPFBag5adP1nRhzCThdVWY",
  "key28": "2tFFUz7Laov43TchiE91A1v2gvdnk4Eh2X4DT7Z2sCry75DYNyrKdJZTzhWXJAqMXN7kxGyfaLupVFWx8NoqcV1J",
  "key29": "5oikpNWtXN5KFvibiDCiLsHBtoFeT5nYSyNNpoccnvu3Qo19jiGan3CKDrxEVaiWjFmRdYAMokq5rVWhfsChRwPv",
  "key30": "3AYDUf5yEvXYrCAVyVpzZ8WAJJ6it86MRbXGhUqpfugherBgxunm7NdNUhXGCzPz6SWDA9NMRUAt9UXef8ctQhrG",
  "key31": "3npXUYoXY6pNm6fE4HVBG1Z1zcVXPnjZXVFugeDwqJakw4DpnXx8mEzYXSY8pJ5nNuq7ydGwQeNDTa7YpivicD1b",
  "key32": "3ea5JWCycgCvZ12VwzJtywEKCTMWC82kAmcNw4aQvWeu6RvDxVpjGpHWfg1erp2d95wLNTy3pZzcHx68fVqPWxKb",
  "key33": "FMBt71ZVei4JPygr8euxJmz5cUhpTdszBPfQyHxFHZynWcUqZGnA28HRKCX8aUygHRfGcoWMtpFn1V1iEDUWBgJ",
  "key34": "3wQRV5n5q5so5unGbFkxjM958uNJv5Hdr1AQBScksErXSdPYYa9KHDqx2AVCc5X3wNdaVjS4e3AgZ46nCQ7gBRw1",
  "key35": "yoWUyDUYNCF2Ewkmdh2PGcocgWwRTPSPpkoGCancXTB6S3PDLriDxB5MUss3VnUDYLbeJ6eYX4puRFzjCBQLqUW",
  "key36": "3KJmzfitKNNZxjpp8So16fRGujG7vo35qR3nonXS7gjupStq8JaEyHRR1J6WvNR4UeugCwj7jckRzPr2PTmBX6DK",
  "key37": "LUikf2Zajq2cn71gQpc8nymekYGL8Az4DYrv6QQEfpaF7oGATHN6aeYdev7jDZxtghZ2NtiwD7UFCsLBVuF26p8",
  "key38": "2M4D2CT57RSyBqUdbZs2gDVet4CVkgr9VUfrUWQGG2K7Y4jyQVxdXkyw4oBGJs35Y8iJaWJD8WhfGcRK4dEnCU5j"
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
