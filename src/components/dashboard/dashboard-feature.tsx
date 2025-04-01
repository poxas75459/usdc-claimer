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
    "3UorUPY2J1D5ytkMGN1UfTHtrKubjt2if8Pvx7mvrGZc1pFnvQo8Uua8dGAfNCg5frS3UGCV1VNq8fYoGt4Lp45w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C4ts35ozVkduSiq68eq24CchD7zvKpWoQQBZCrwJhL4quGCzdfdDw14jQhq24rVh1fBHW1Mvppaf7ARxzgafZiW",
  "key1": "4hidi9BScDRpAsAwh6ubA6B6KoPjB6MyyghmcxfdpmT1VvvFDJNaeWm8uq46DTQTaFSfGegdbug5LDvPRRLHC1zC",
  "key2": "5CyU3svpBXeFWpktrkAm53rvGnuuYZu2kvqxfQN2Prn9fRAPBFZTkgtFgrgTk6y5oZLFwVX2BnYNa949HQgWh7wn",
  "key3": "5FXEGdbGrkYxUktcmePwGi5f1afE7CzGR3LVUYUZ628rj7DZW24DcdZarQEFwCngFPBCpTfJGdgmL5NHgwV7b6xv",
  "key4": "2oYTFHGcTNoAi886HGrDUPVcHzvBRofNCCR96pJWuSfLzpR8F4viDtXZ8zQSpDpArZryLmCyv3edw1PT43JvCe7f",
  "key5": "ARa4WrHAoKFo2UzNercftFEsPWz2RGdo8aNMGHtsJ2dHmqzy6X3kjt6AqrLWwTL4dbEEfReEvbEt2ft7QPvaeKC",
  "key6": "2eh9CdACPBvDieZ9fVxb2RCZWeH3SEH1miJvJdjM7amUqUvUkK6RK2NaqC7JzTauSv215Tuk9a4s76bXUKp1NTHk",
  "key7": "2NfejzQAwh813MfT43SUZVbhra5FNU8aoz66buC3twq96FDRT9pyYJ582J7xNmAibDVswPJtCvu8vtCu7AmCuE91",
  "key8": "5h8WBmAKuE89UsGCcuosaPggJbWmRj3wSQaLjx2wzV2jPVxmiz1iuAW6qKWyvdb5dpBoYXLkR7WWYUCdxcy3ZbQJ",
  "key9": "5nsg7AEVq8Xguw2cPVtscPfTYQ6rPVSHUkdMnyxo62EUQwkA3NQJs3gTfaGDjic9xRZnYLiF3DfRfBLWdn4siAtz",
  "key10": "4fpXmqiBA7BVHbGpfqiHAkR6iDbp2Cpy7fomAgKNBUNWQqUvVvGtWUUnoxwZE31YHbtVCVjXaXpj2axdf7v1xH71",
  "key11": "eLw2344Up9C3Av51AtsLBcWw9GFTpmJFYASk6K5QJ5a3RByuB6qLVHoRn1XmZ3PuLUtwqSb3CoARHDfgr2uxCqK",
  "key12": "4hnAVhA7bryc25EfmqXKDbQg6xytGvBLCKTPaotpXgvtpedgNtr1TERgLqJEhF8fBgxrP8ayXgv7ZYPDBwZwxa3Y",
  "key13": "5gEpNVAhqmV9jyrd4F3oyT3FjXzPTs3cuHun2rNqr2iBGdankGHn5sPA1GvddJRC84ZCcDy4vJNZeeLKCqeqomgM",
  "key14": "2icy9aoG3DPyAH1PhrmpPZHj4RtcdpvXGnF3Vt59UAfPgFKwV93VUXhbWw3U7DeCFfAfFTYkU4ujmsdoRXJQWPWV",
  "key15": "hAHuGjT9soAccPE28FVVD9wVCPyLAQ6iaoF7cTVHDZTRmvpChKrpLY1CK2GLcYaoejSGQrZi8hs6TA9cHUukZcU",
  "key16": "4GJhhXFXmPvEKLa3PXV685F2uG8do7kDx8CSsLQPdZVdZ9VnvmNncyXHixGRgh3CYAoZaNjTdFmg2dryB9co9aih",
  "key17": "y883j7mUifgtnha5hygQVHbTXQC34Pac3EzTPg9wqHnDyAufLKpZqQJ1U99dhgf4jDdHsD9oBzq1QQQa2Z3FV2p",
  "key18": "32bBZGj4SMPfRTZaisr47iGPb1tgqi9UqZKYRzmWX4yPK2qYGgxKnRc8SkGyVh2tdXrf8DS8TuQMymWMWJbmR2op",
  "key19": "39WbtqqQDuUm32AT6mgeCEP2mXwRwSJQpYE4nxqHnn1dQGdQAtbV44DUqn1pVCz3sjzrocxyRQGmQgHQUPCbC94e",
  "key20": "XaCAo9AAWx9m2MPyr5qkZvg3u8i9urC25nu2WqVaSL38akgYV8Aks44utfsdi3yquMQv2pwTLwN25Q5cXqrQe1W",
  "key21": "fdGsMVS3jDqKmqymBj6qnM1cN9Cj8ENdqz1Nzz7N2xnEsNufnPizvtDRuL8EEu86C9MAnTSEk7aNfRr3r1ngFZ7",
  "key22": "3RpfKTRsBw7wqMJt4yqNon3K45f5e64k3EGfmgroBHLh2u7byFzhMtUgPkY7tn6FDGZZSSHmswZAEVuZzeBefRUQ",
  "key23": "3Pqzgj4Hzy3vMEzkMTfcfoyKWLQDRhxPsbWFnjcRwfiagt4Lzu4iFPD6raHyi9BRU7RxU5U3wsEg6VsfznM5tvFz",
  "key24": "Wps6Ja7P9waBab1pWsaobwoXzNogZiqDWCu1XeMqvTE4CQUHen1ucAfq9St9eST5QgYis51t8sKHqm7sPqynYut",
  "key25": "5ADr3yrX4Pgy6SRnpjyRDenx9nMCokxjLMJSrZjLhBodt8uLg8uT1J18fsyunAnqyJMCuQwCrvWffdPkmTM9SBiP",
  "key26": "2rfXsvLkRWB85xK7rNU6TeNxnRqJYMJktFgmo5gcSbewgvqQJppj6n3u6jpieTj7uGMDpcc89Wjp1bqcEqQWUBM8",
  "key27": "2ohEe4ChqK7ixPvHFa7qwTZyzPTVRctmDA4YuKHsJ8aLQ8ywqpzAywz4DTqfufeN9d41w1DMDwRpQaTMiRbDumqe",
  "key28": "33FfTtNS1UN7vTQsKePJu95uZxwfRedMkvz8CV96S71FbnJYMyaqMJoU4CUDWHpURTyKC6RKJNih1zQHHWxkrin8",
  "key29": "4EEGB1uVQ4NcpDwwuGK2jHMtzoeADbTd94N12nPpUBqdjLRLHw4PLVZZNMzNGK49y5zjXmXki4Z47NKvEXc86txc",
  "key30": "2XNMCyvXuwEjJTnin4bYYVVCxUUQniNxVokSqUxKzbp4q218FeFYoJTQeM3eTDwPbXNv6osMaTU9gKsUoJsdnNmm",
  "key31": "cv8qe3fQ2aQgUUvVbuP1K93GZoHu9gjDNCSAzFCh9EPZ2NrF2CYq9Uc9V2zXgtTuzJceonKCbnqhnN8SX8P2wrQ",
  "key32": "4bqWfBHs2XqRTGNmkJrcPsAECaYbrhVCcmYZNDYFJaKfFDZp4mGj84gPgy5onmjJPt5nDSfUq1mHCn59RXob3YeT"
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
