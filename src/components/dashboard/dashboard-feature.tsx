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
    "4kQJRg46n2Ted3CrSPxXbT834HtR8zFS2jfvfBe3ZRmH8RhducU3SzS5Ax1Jiin1paZFCEft8XqZso7krFqGZLsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hjgG85VoBU4PmgdjnAijNy1HBGEMJPHhALZWTExtMWxwrdAS74vdUFUUFhAy3WU7xTQH6SkDEGUdsNJTC2KycK9",
  "key1": "KkHzGTvSZUryy1QAVucBtsa8DKJtSYzcfyAhDZpqQNctHM3JUDYWYVLkWpHBDhahDdFofNnoDWPs4YgfY3LtFzf",
  "key2": "5BmQHmfe9kskaG7UZgVpf7XA8GzQF36W3dAdJH9qV1D6TWnHFK4jUawVB9aso3GvNCnkCRosJuQFpTrVx1YLHH4b",
  "key3": "36Kz8v2SPMsVNQp6YQWkAGWXq7A17Abr4ykQHX8hXDrkbLzfKutCLv2Zxdwm6rgmKnowGNhuqqYeEyc2Cb4NPoGw",
  "key4": "4CZpqFm31h99fhAuNA4oVJ7mFDhHoepeaNar1F4pxoP35uRAbxD5ccLFGy5FP7mZNV8Br4xMTicEJB1yDvV96uAn",
  "key5": "3wuuasXS66kecwhsTNaTGFQdKF7QKed7vQ5eDZwqeh97Dh2TowjoLRs8ZDmB7jAWqymuuxKQGtx8zTmGDgMqthvJ",
  "key6": "12AErcj1H5aRWXek8TeYFspmcpn5ovY7KcnBJ6R7hjdZhZy1hZDmpsG5MGtfvJBftHCraMpbjDqej7rvc35RyztZ",
  "key7": "NPYwwXdkcK5ismXfL9rZvTqpNfVUo9mcnx5hAyXW5tg7bahtfU66K8kSGpbS5KGwpxLmGtxSNWf2RKG7FHAD95f",
  "key8": "E9Q82EgQwRaW8DVPJSJnCjufFQky4hHu6XX38a1qcM8vafbBx8ZW26xzKiZESLn6RiLyFNBPUGmSroLAsuw5ubr",
  "key9": "3DMz37eUdynkPYnSPi1ubQ4RarrTERAr5JZSKEDRSPU3LN85EEPmc2S1WUciWcb7mSGUmiN9JKyTymciQ75TBPWw",
  "key10": "2raTEAd2whMVodUznnY2nn1j28rrN2kUBYqwDtVA2xJjvMptFkZoYAqWQ5xtH15wskFLnyHUBcxtr1LK1KpVAS4R",
  "key11": "5t4gcuesA7aLMZxJBN6wfFmGAZJtZUhzFZvxP6rmSkw16BgponRJoM8P4p64yMyAZ6kyJYv4xc5M1x2dQ83ooeKf",
  "key12": "5T68fF1aVFbH3f6wQJAaPg4Dyg63HjsHubB1vJfrsEonzUWTtR9bd8cWoEQenNqzSNjRxbdS7GC557Z5T6VMhTpC",
  "key13": "2L5otMs2xyUFNofphv7kHv5po1hgZRdTg18Y8SE2bcFwfrx8Rm2r3cDXkBEgBMTCGUPxdJTHgwNTgxnysQ8ioCB3",
  "key14": "4CZ9hzoKwMwdG43fWQmhBUp1fZE577tKUDt3WfHcRd352sdmmnczs1UNY8xcKQjyXQ2WbPFhetnbiAvpDJJuU4sZ",
  "key15": "3vHnAGX5Q747avnegC9e22fYTsqh3HfmLh45f8mdt4RpzfXGFVqv354bXF26RouUcV5wdpHaTrUhSTWV3tCtmEkw",
  "key16": "2pCwDFSMtbDojkxK6xwaNAuVTkMStuLv2byBxJTMDn4hrDSWaZ5usNVhJwUiuCLkqmcexAY3oRJ6sdVBBZmK4GmW",
  "key17": "66VKrUeKdXAtcjBSKBQTjn5wQjAuuB3H2DHHEgjsK1UF4KABguDVfyHwXAt5RCfXjaL5bfrvKRSYiFyoq5xetyAj",
  "key18": "SYeJr89fvi5U2U3bB3cBQwJ6TQs1zskjjkvLJEHXMs42JLCZJHsXLM8CBi4pQVGjKzyqxy48srg5fixavv2rjg5",
  "key19": "4GbLandfQpdjddi6EYVPkN7NTyWhnucnJmBkoqeBL4iUUGeTT63E41CicKzrCUAcx77z3jc6tmZcxr4nf5xVUF4v",
  "key20": "57Jc3YsuyvKHAjiTqmgmRTJDiV4WGcvY8o9ie2yzxahukpFPWYMbx6CVygtJoE7if6k98pLh6y4JLFCUU4xgjVRS",
  "key21": "4gJH4zEiLa8KPzixsXhyNvzJNzs35FwcHr7xzVNVaiqE14AoD5YP6ZZ7T8tiUp2oFJswfVkwXWdbPXQc2mtrY5Rq",
  "key22": "4RAxsyKUTqaivnzxV2T8CkQRCMd9ookW35AegznWgGz2wg11BDBCoqC5rjLMaYEAeBa9khqkXaEsrKGNr6bUXbp1",
  "key23": "4JfsoNFtJacUF3mW44CEGkcceMpn8An9LNQUi8qCGjwgAHJwuN3gvyREPXBdWs98MfpAhHKpngci2GtnLxuaGVCX",
  "key24": "45MRWswKhMQuh37r47rqAqJXumAENUMmmsWQGiryvySSNecuVWEqX6KtG5k3priyFtxS9zT1LRrvCtemMG9RATEJ",
  "key25": "27joxnrsWJNoiCWiewrMuPu8osBGpQTqegUuvK4aR1cAY4Kcce6m1b8QoBWEN3Y9ajKsBrQqkYJjnDJpWrTkZMFf",
  "key26": "2vxYz7SGc18pf4N3Njaqx314VLAoFYrsi7xThKYcTonQGRKUL8QUwrTor6qWUwcmVttJxZUthtWhDQseuUv7nss6",
  "key27": "2Hj6h313ngccSRq9cuwpA6p3FBPqBRJwALgBsgJUV12HegKQDjZj3WJiLwYRN4kh3iQ5zrR6zypET53Ktkcit7Bt",
  "key28": "5PMDXkTKLvHLYgCcT3F3VNherfD12iWKsNLTK5Jp71VbN5QCMsp7Vb9VFdTDdHVcmuUfcNHf9cu638DbAGyuViCz",
  "key29": "4KNdjd7r6Y5N18ng8LW8GmxQjbUfTL6MKZbtn4kTvT9UxN4Y5j4tKsFec3CNDaPmPyj8kuxt8MDwMritR8jHkkLZ",
  "key30": "2dT6w3uoVQ2Gs6YmGZNDsgeRzgkb1kiTzD9LSNf85J1rZRNTC2UPM4nRSPuveLRU9aSevGfka6bHybeg1x1AJu1J",
  "key31": "4dFMQWUkjhaqd43EwFxMWkJsYCpvgwu5Xo2Y1rsdRdaf5YLc1z1s7L29SjZivCnmR998JUMZeRgjJsgY6sMBeUBw",
  "key32": "5VKBACc3c5ifZWRPjrRVpEDUUqSRTiKRdVjy1G3CBbSpicsLsbdjE8rh7YdBnzirxFfzWSAgnZYwotNmDwRYemgx",
  "key33": "2gHqSb2RFkNcGtMvqKYm9phFQnnmBvKRVjq22BgejFcq3Nwa1cex8Bx6q4sri4MpzNS9XXBCSCKMD16VLt6ui7w8",
  "key34": "5DRcroSCCgXh9zycYZbKq1nVNbTrLDYCwZq88GB73ZZkWBcrzWoTzr7yvVLVRQ3haFkTYGunx54AY3QV6ayZE1iX",
  "key35": "3AuVBwULnnG7TH5fchq2WgwDzrcyeQTpsgvGKYYECPHXwGrkmy3vhnQyrmCgbLx8DFmzU12t11CW3eJ5mezPnPG2",
  "key36": "PwzWtA2T6SLUg6nCGVL2hiqJifzpVjjWVy3GpyLhMBNZrmd7PaXcPumLM9cwyjKcHVcsJ4R2mLHbtuTZAdhS2nz",
  "key37": "4fmFRFr7XqmvxEe8vyxJcXbWy2hax3o67RRx4appqbWgiT6NocGfE4yxLYpLYcfsBPCwqrBsfwXsKenKkCKbEaJo",
  "key38": "5YFfHWrCfjmLsgrTEQkBLmtTrprCzGzHnVF6S24cvMpbMcLsV3QHt1Kje5iP7iVfEzdkfgNh9FxYM1H975teX9AW"
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
