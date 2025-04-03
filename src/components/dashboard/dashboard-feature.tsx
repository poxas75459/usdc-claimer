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
    "2XGmQc3LgzeRwwQHcQa96f5eUAwY8KXeTwGZC7vvKkJV9hghBhqnLRFS7PycHp77w1HXo7gXxPZQhPU7Un72Qz7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PZSrf86EKSGdMhxGfy2ogxhiFRfCegVExkH1EoxKCtzF93TAZeAPqePZNJP4ZT7yXTWDWDKWzZS6jmizABoJ3zr",
  "key1": "5e9qnUhZg9CvD7edB7uuMJUYGP1PyfDitkwExyasp4QCv6nqbxNSCe1Fc6mr16E8gDwgNuRYgezZRPThs2fJC48P",
  "key2": "5YpK8cGUSCERsuVWcbiGduDkUFPbgPKZYa3sL9Jx8jnhQSgqxJ1vHXrpz12zbM5t8WXkHx37PipsXAdf1qMDVqQc",
  "key3": "3mezMfHz644Qaob9VjyUPQGnHyvJgu6VZgCeF9ADKLQe91kjfdoYjWNuAwpnkQaezmbEkNUG8JWoJkL7LBz3RQCZ",
  "key4": "3XWvjoZHncqHAh7mYBwmBkpVibmyH4iruopAREbEpfhZHyQ41KnR9gugVxyfgt1ngEhoUcxwbYaUNFq3g914te1o",
  "key5": "4KzcGXbQrASsBNo78YWJ3r5o2j16hP3ZAZ7x2DpGgUNJLv7DYdjJZSmxaf3vEo8nsnG6jfmBiESs51Z6CntAqANb",
  "key6": "26GTUoDSafvvGLH2ZUdfvgPVttNbsszh45TDW4vLcRWqHAWewiVYas64gChV5evywkpKJJi2s1iPKdmLeNj523HY",
  "key7": "M4UWcZdqBKLZueGr7S7S6oVU6tKmxcRwQRKez2Rnk1hLGLVsngocP2HojjyNjtjA2dwUSefnggeZKSjRbWyMsia",
  "key8": "rJSb6Zv9AfcBLewLjAU6hKD9qtrSHW5FRW4CMXCqyqQqS7Y699fjBCT2mJ45n4eFoPD939TXgJvMN7zwSBq7Dit",
  "key9": "4LyUAbbten3kiiR8PBfCJypUFBhf9MHHVnDram2Z8sTVC8BYw5mutoKRdoAGpeRP9Un9vFzSAT5ZC28ANFH1gAXK",
  "key10": "bA5ZB1hma5x8KQDfG4JWtoSnynxSpg32S3cb7Kik9vXii3onAsNcijorevLk7keJpzAEpfD1JdTPkYWad1jUuch",
  "key11": "MLnRT4nEP2eji8B5eU4uxvMJv6NDMRHzccgVuBf398LUZyz8HcVF2K9vYFfYiXD7wk7GxbuJSvuZknZGZkfBPyJ",
  "key12": "42MwPrCvwjN4R1zuC1q7VFfS8wcD4ziyFF7TXDbXwGyC41qzDLZ832Yk7JdD8SYtVdat7EJwNsSTPVGfmVLaEPRJ",
  "key13": "3k8ETGEGBSqs7oiHiNSEPERFxgmUdwubgo67e9MTkfH5gU33ArSQTuMzjF1hm6HJD2M4kwv3G7zpPWA9Fdsw7ZHE",
  "key14": "5rK2uZmo6XuNSeN5QZhfUBbK6SBcKRXCUmxLqpY8SZ8ytKuKjWQxewYpo9WfSdkSEg7TFDXgrHEfvfwPGqD7XQ6Q",
  "key15": "31TKYygsBCuJodogLDfuwNtST5Negco9ytYv7wZuyZf5rR4Dfq9k9FjA2y4QRU8J3HtJhLaaA7SUjoVQ2w44pcfU",
  "key16": "5eCscAhyy6aDnURVPqG6bKCqpd89dCu5Rtvzod64XJqejC88cSQdPaj7UUcz41CxevMXv4BEegirpT4rRL2EcfFp",
  "key17": "3BfPqYCthDnyyxCBdsyJtvPxp2FHSNNRxeDYDy1gDR5JUTKJDNvDdaTwtuXM1wW6QRqi3ax98SNtAZmRLLmPpQV1",
  "key18": "T8sXZksVHoPSXUYFZQkuACoXF2K2r3HVnhAtHeBQJcmNL2QX46MHeACemaBCUJV9Dupe6J6eMBTTYcucnZujV2Z",
  "key19": "3aSNJfSZsgzGeKEYN95xwVQcokeWW7795j1UwFrMwtgNuwJ37XiVgKGe2jD5qj2Eruv71HQE7PP4reMqPxJaWYYC",
  "key20": "4XJfAWkSNUs1KBHEGkFi89VKFq7AfeCttB1xFkTytStmKvgnXbaB6cRTfFWTmrAzp2cn5VABKjaAJEmd9GBqUB9m",
  "key21": "yjqves5UUetxh3K8GemPY1FY1HzzGt3euwasMDSAqSvLa4urAKurLYPe1aTginD661pw6kb73ZpHYKszwtnWGvZ",
  "key22": "2DeNEQTkeFEf5myGYkBLs3Y4r5KYke8pUsi1Kxsf4buJEXjZ6AmYwBU7FAwumpbESnxKcs5Ze97ZiqxxME1zUE4k",
  "key23": "2n5dDjGTJWCUh9f34bCz1vh2bmBJN33vNSJ58tVnRy4w2yEh7PxEGyNoAgaWg63zGg6s6aajtETDwVd3VXxmS7QD",
  "key24": "ybUCwy5HSUWPjixaj9GKSQBK4JK9RGR1RHQBtoTtiHhm91DvnDakPub41MpJas9of48dYpEPaV2H1cZKTe62wcM",
  "key25": "4hA2HPQvBvoW1LbpKvto9wZWaqGfnNCVHpYG9wL9tTprGpFZn92jamqcLkmqJHiBsnavxgd3Cq8rgbNH1RBQJWgo",
  "key26": "3hdQSyPxco8mowSft9qyDhNe5cat2zApyx8a9C9tfSzeWyHwFvNWeuQ1EShojuTZCzogu1ZKW6QQCtxvwYdi84n6",
  "key27": "3tArPUFPFTC3hnbmVSwpctwYBHfc6Lo92ffBzD4fK95wxyay8SXbxFEAfh5aEkDVvTx2wiTryWcVdnA24tnR17De",
  "key28": "uTHaiZcJ747VthBHhTr1iPDib66Q6yPXxkxRSn3j1i1FYMwL26JDUKLjfNZVCC99bdusyyw2c1zRxxSAeZM435q",
  "key29": "2MiGQ4vxZeW3n7JEhC2rn9afCsfJRz53wm9qprYGu1PsJVux9n4wsEd8cGSnWX8UNjyRzPPTv9habXiv2PvAbUDP",
  "key30": "EufifFEipRotXa1ni96r1QGe6sJcv8hA51L5pxXCLyLxmuaGssNuwMA55tGTVzBhfDQPvRVUSuNaiiR2mUtuNWn",
  "key31": "5DT4wKDxoWN85BtU7kjkxAasmDe9Cup8RdG3T7EdMaCs2ibn9H2EidC7i3F3STogAViXKza3ui4K6UmjauPLh18D",
  "key32": "4MPHTJRmb72fAChQ9jLr2LrDrobmzLbPpRR4ortXSexkxt8scw7nA1cWBW9yb3cmQ35WRZtpXJDPVeCGb7wm7z8z",
  "key33": "2tgpUioKndadooy3AppaD3A8p4zg6fphncPrRuUNV2c62QSnn5c9cThjhxTDJigqr2Au8xcpNe9ABRmjpV9pmgKn",
  "key34": "4z1DkwZ2CfnvLhV21iL44UbHagmrqtmrdV9idJYws6eEdT24F5QRnEN5gvRcNLCwPKzwy38wGY6ijpiKq8296Zdx",
  "key35": "2aTook3zq59dUrmxbqh3GQP68DETRgg3bG2iue6rETNvZUVE2siRt4caSUrgTZJZiqohZXo9PMYg7H7imasK8b6f",
  "key36": "2MiJocUysJmnc1T2CLMye9YYZy55YQViUj1Tmdxwo6AL1UWpfHmdin9CsxvLW6giBr25bgnzKUS1kcNk9C33NMfv",
  "key37": "23SRc3eXE87mcnnZ3KqEfDQdqqwEg1tVcdbnqfmW9rshxeZ2ExafMnYCr4nxVcNSHD5PKtP1GJgSCh2Mc6LNcfMf"
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
