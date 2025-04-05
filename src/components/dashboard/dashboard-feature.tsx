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
    "4BH1uE6QRPehw95D2EPhMqyYGbLSm1ACKs7tnfwvyNHmpMXBV3Gs8BkuLsqPWZo7ZNrnoDzrNrbrGGtofBemZ2jk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HLqPvgq5DdkwSP7zstrG1238wBhEZ95bjckzfVny3Q5uFNZZSb6vzsDWQqwg49aDrPt5vWecGggZmnUHgZikr94",
  "key1": "4dQmcADEqxr57f1sBFyp9KLH3WCKKxkgPivDWcNU6RJa6SRp85aVRvcGRStvP4FyDdiVQYRYtYPi2MCTHmeA9E9f",
  "key2": "4MYYqeXwuVvR8ESvbMyVEqTdhRWZwUBgcz7sSoaGxG3QZspvfKzUNTG8bJLmx79SoYT4cxwKr4yzp29sn9LZ8qxf",
  "key3": "k5MorJ5rpqHZU1vt4BMmmCA45EK5PJ68VZqntk71otDYYKSN2xJSDGo5tx5FQ82uHUFrZJ9kTdZj1bu869sJLsZ",
  "key4": "aY66NSwxUuyGD4QGvFbAaidGKoWi95ZXYjcxnrny6fR1TjDJfnbQj7j5mm8M5gr6UGgSgueXxVyNrWSyPDNvV7r",
  "key5": "2C8iztEV5C1ExB8Hv9LsEEdXywAPUZDL4g3cPdjkvUs4cUnZBEq9xbgv5M7x6Bzp6DMzXSH4qdCN231G8cjnvPR4",
  "key6": "4vKbHqiu7LjbBssudHW8bV8T4LiV58BFt3nc2ZmLeaiT2RsYehurL5vqG8fYyoscpUGDATETE8pkPwuA2PfjtFb1",
  "key7": "2U731PpUqNnM2vJbHwabMUfswXjkpa7yGyaYLfwrez8x4XvhNLt4bJP2NM479ADhnyqpv9WUkqDtEBXzxoRrwD9w",
  "key8": "4n9RfbgevMdEz9xeg3L4Lu1Kp7ZJGVRpbPjzD5UjSfAEGp1HHezTgfvfhMnMNZbAfTmWdWRHt1hRTvrZSPoaqte",
  "key9": "3PJA7cJHRNEzqyKLsdQZP2DQtBZPPPiBt9PD8XnBeUn62DfGRZZ4SP2xSS1SJWPgjYYm8Sw5ykLGxDaH7jL3oAGg",
  "key10": "53bfVBt2HKNTn3AuuSaxnSMRAkK457VsdF2BUSycK3qwWBnpkjiNNaefpuoDboUB5td2qDrbMkTcnQbePQGBdJ4C",
  "key11": "5dGdtdpaBsM8Mn5YuimR3jTUfWJ1twUfADXmfxW7fgdECCSgUt8yMfQfhuWU968g5sGNojqcXWxVCJ1LouxLbNtQ",
  "key12": "WHDtJ1skfLxm5gG3Knfe1YUz1g9gc3ivdPYoWW9Xj1QBNZAHdJs68Uq7c75fuSNpfhTbmegBmsPASiCrxmpycPm",
  "key13": "Ck4z4Xxe68ouTnEv2kzAEaRgkMQZ5joKTxvdByVE8zqhYuXF4EbM3udRiAxJ2nDSSCWwq7c6QKMD9bShDiAGATh",
  "key14": "2wAJ14bsDcCmZvL823sfTt3EVcDjFbAsDPaY7BuRhuaRV1JhPrnhpGgh4uZZukoSwvrnueyz2t8Wwb8nJntzczWa",
  "key15": "44NuosJzDuFMiDubN4bnCze8BfQHGNsD4TcrGensW3rC5Lw1uaewVj95kuXLvbFi7s5muQZz2PUSMGnHNs4dUUMP",
  "key16": "5YTJh5PZyBtgGfNvrG4hJH761mhjpW4FrxJrW7G25MyFpANECF8AykTPknYzcyG951GMEEWDBCN281cPS5MXPh2H",
  "key17": "4YdksMGYbUCzHEtSuASWw2ZhdMAjFAqe9StJsBvcdKzDdSj9ske8MpcFcPkSYUXCqjm4TcjZekXzmpiU8bJR7hgM",
  "key18": "4xdt9hDQeXhjGw6puuyGgw87dWkPD78WTxrDiMgvpb662DASUeQgyV9wmFZB6xTmvhGqDhe8C1b5pvYCHyn4cbQh",
  "key19": "3Xtw82rhCRcWQszpK1V97XQEaeaQDzWKNT1ynRhJLFxvgtHu9hABtVJRZ7Wm1JHezC3Xsv3wZP6vnGMDHAxAcu8",
  "key20": "2mKcQM83CKSbY2TPjaTFhatndWFPkVXb1sAW5VrPYrjnAaYu9SEPvXVNVHA3ryJJ14TbQHQobW5HusjZN7DqgQ21",
  "key21": "46Siyw3sWVxfrZGwVeEpPeweYQVSttCSEE5fU7q1d2GL8vG9eKLMycoe9vAUG1NdPGKVpeU1Fv2eUKhKnYBhvPPK",
  "key22": "3U9b4j87FsqFvtZBSx7Acji3b53tfMfXkyh5k5ZXiB6BxWUBBPBTDmC3iEhvvo8D3EL6wKchPWr4NvJzcKvrDiuA",
  "key23": "3V41wip4PZoyXhvHsd7VASc7CgadV6QTfBkK9ZYDYiexc24dVnGZ1rEmGuJZTzBsLx9UvztoU2rfVQDa2sUFe5g2",
  "key24": "4qEJLMPeZ6bgG78Px6RhTAozRV6skG5cgrLbQ8AqonWXrtqsgwJwhYACkfLCncWbkvWyTaHD5h8vRWSFrYuR8qDN",
  "key25": "4S6yxjs7h92ehkE33djhMnK63PM1uTd9rnuakh8EgXGRCamM1H6vKF1S2RagHcXMga49zCsEAFabm5rhF7ynRzow",
  "key26": "BzF7ekxRuFK2m5zjdEw1LbL56Hjm7SWDiLLGK3y9zdNqi75sVSvzi1AjaGTnXBrHd1YziqCcfVbfkP8G3L51cjH",
  "key27": "4q4ueE2JzPyAbG3bSVmFsAzGqa2mi9oEswpwqb19oJJJtV7kagiXhxCE948aZQeUnfabASyg8yGek7YVvbeXYaCu",
  "key28": "5wQVsCvcgNEh7Z3GgWAzHaEGAjgWfSvXht6jBJkoBvW5vKCQQwJJ2w84Vsa45QREtqEP2swfG39SXgB84GjjunvJ",
  "key29": "616ZfTf66PMZ8aK1VXZFhNczzmLD2kbzhLPWaHbvgeEju3YUsZZgTUBpokRaFYQRKB7ecG5jSQQhqmDvDJNeLM9c",
  "key30": "aCESBCKyW9tGZx3zK4Y9cAAxetRzbb8PxVHw65TrjaZTjWDgMh9UnJJrR22tn8nhAmTn6dA1ytAqYeqTWeKS1bN",
  "key31": "4BmBwp9jDiMFCbyT3gDSRH9ETF3b6zFQiCGm9xuuLJCwFggi5WwULjGh1iYhSXZfnoykuFAQ1SPd2HjnHDrgmTZi",
  "key32": "31gHWQy8TTrazEUrkTqBu42cKa6eTGvxFRkqQzKNXRapp4QhRiRzKvsp3bJGLwRAsNMuPSGCC3vWdr3swNJ7q4GE",
  "key33": "2Fr85ecatzBcAUqJ6kYVxh3a8JE3LxT92KJ9uXKxicT2DyeSrhehpaMSmKJknC5TumqyzgVLfHscdomWNZxabjje",
  "key34": "5S5MscNYbChfMDnTgztGJ2XA9aAPLUT5nHqikKREdSNKbsijAnhLx2STPX1VSRBYhofL6gqWKqRnDkuEvGgxHQSN",
  "key35": "48QQcN2VrCnRAFM5y988Ma9k1pjg8oMNZymQPWv8iF4LGx3sCWhnKWtAdznGeXkdm1XXs5YBQ4rmmzqkp1KtbxUS",
  "key36": "2eJfWNoU5TKW9gqu9ibDUcJTznC2TurbWEQND4oKLksb2chCeCdPzKTyhZH4cYUpCsy5WEKcZLtMVJqXpJ42nVmd",
  "key37": "5w4TqbX2ESyF9wfFgjZXGECJAZoAHBuYEYDfLTFji9VbKNMrhTxuxQhPP2eggqVV285M3vZhVaRfytc9YCTmQ2oN",
  "key38": "3L6T4kEn8UqnbynuYYEencG4ABiYJHXyXt1azauDYwcst39BAES8LWU1j5ygbY6saW3qA2VLtJ5BUrDzVziEkTuq",
  "key39": "5t8dBwx12prN6SgASMV4WKryhFtRNTrZbr7dg9mQyNPzAjJUqNP3jvMopK1nPYQRYGbjqZT9C4586jPrwZMcXdyK",
  "key40": "54M484VtthamrRE9M899ySvUB9XsN3wa2AgdSqY1cVPxefHBaXmvTx6RsAQjQtYBYED22YSfTRHmA6WjxfcV3wbH",
  "key41": "4ScP1wFiTzimN78zHaSxUoqjM9k5qdSLZH24RTVqY31kFdvruJSbxqNbWZVtZeaAAR9PqV2LBYxfVvB1Nvysowp4",
  "key42": "2Wmj5rbpvqdqtvSSk7yUvdGLyjXdpmSxhAjoVUEh1Tne4bR1CE8KtqXRMqTaEtZvTR8Ya8t4jiow2y4pgLhni3Ba"
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
