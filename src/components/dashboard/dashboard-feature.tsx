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
    "tbwsrr2mvpYSomNb1fVxM6ykGCi5LifApZ2rpNhf8U8rM9mfRgyHUYpZWW6wXfJd1L4MD8jyqyvUyMzfHPH9xFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ph36ST7dLKA1vytpXyQxjFU7UszYmq85wr4kmysYCavegyrRrNhUkFQgfTW6ooDEV6PCvJTY4tgaZNe2Q2A5fsf",
  "key1": "49vAarovbGG2JWmv9Ap1BNFpx7vzzN4FPPTUYx1dYCCMmcxJ1P51qQ6y7vuWLX6anvKQ8QyJNSjWZsG4CX3JUbeB",
  "key2": "3xTqwHkMMzU34yLwLdbdnTeXQVT7Ug7XcXWS57k2Y1PiMs7Bcp3UMiTxrapCPXCJjKPhFQLv3W7Zsfqqy5PWE2sq",
  "key3": "2BLZDzPJ1yR92kkP8jw1kHdrp3RLjZ7mBh9yG3METEL4bywbx7KcpccgPAYDWpW1vtsXtgziJMvnqUB7R8axAqi",
  "key4": "QgQnpzfGSmivG3UYAT5qfqydiNPjJf7pega88HjDkweoy4QJNQ6hfpW7H9Gj4TZyRdc3yRhY4FYsUsg2kGMWeKW",
  "key5": "pwz9HjbSu5vAqTUEA3a642bjFVkCnB6HG5KiXE716eCWMLfYcjwExnomte5pyWBkHuHuWNZTXhJcqTitWKHMAqZ",
  "key6": "2fW7hfKANZXmT5WP1Z8NUeKCEMitqaF1KX78oBLWQMeSjHgw3tvN9uiMqksXBei2cPQdWGXPvrLW1g9m6M19bGAX",
  "key7": "pXCuTnrfpwCX9SQZ4Tn7r3NFosevDZvNp7QfivS4rmnyA3VvL6EbznrLaBWa7YnQbELya57MzUxAwsQ57HNhyzw",
  "key8": "2TjVGKijoXKN8y7E5VkdaXDaohFN5CAVwsUYazbTRbQeP4hG46s5pPC2M61XQq1vfneZ2wm9KT8rM3QueifUbGYz",
  "key9": "4bXQjb4Gf4tGSrad1ti5g9taxVRjaoTEodVP9o9758ATRXgxkzmgaqfeWuBsFsg4UX88Q7qQ8362njCuJbMXYVL3",
  "key10": "22cfE7xcXxmD4Sv1XhodshnTkHuWst7wufJUKE6aMSNZ9J7UcFwVwYCqXa4uJ82UKxDm5vxQKyetk8gUU5Actw5y",
  "key11": "acdEuGydfnrzx9RSrcoFGyXMwWsTbtoSwySs51mNLsuH4Q5dSBrapUU88m4suLkyzoQtwr18pTgGEqRiVFSiZfP",
  "key12": "wEawhvmrFRvggCnknftCgcqVwAUFqGC1hr5VRGbMmCZpCaMar2GScbj9zUYiz6CTC1qgQX3vQqeifo93SDJ6GXH",
  "key13": "yJN8ThqB8YPm2sTCQhgtAEH75wyVC4VEhhrCxYBgegrDRcD2DWR6Zmnco1bm1Xa9K9bamFGyF3wjLbJgsm6ZYbx",
  "key14": "29hrdcMHcrJCaa7XXQbXYajx92RUBax9b8FeMytkDGWjNvMN4u2LYGcU1gQ4hgwUFyXhjw4oYSNsgU8ZsnskDvEa",
  "key15": "2z8AscJhZqCddgcUZLpzLsw1pAAxPoLPmrvxKcV3N9cohJM5TyMhCzF2Jy1ukgQUdEgtTRgnsqkw5b7QM2EJd9AV",
  "key16": "Ahdxdzt1BrCS1FhjjavdjQkq7XZk48tQEj7GboXxFX9eMorQwcj9AcF4maFphV5o9qR1sccC4dawJdbdCAdwgfp",
  "key17": "5vpU4V9Km4sJbYFCs4GTtZ6VpS5AVEbEpQk7yyqxKej4eejcFgssX2No19JxwH14o8zmbK9QfgysMygodkdHwhgx",
  "key18": "NLPLyMJGVvXjYXyyoKfB5GGSGB1pjNEuovNnyQJZkTkhKytqGMiApsF37bjEnENnPQKSqS8N16osErFAp8e9Uww",
  "key19": "3nAJ2yETppa65Ehju8RkKb9Nh3d9DcTmUVT4Ym6KR49SckGLji6rsg1QFaorVoUnXW5Z3T68z9LWioz6ntx5bYym",
  "key20": "4bUm9zqb2dpwrE77NxyMwh3qBVgFd9ypXF3m7EXBuKkHHAAu6w8q3EJUaiQP2ZeJV4iyWjPGivqiRAAWQyVaaqoi",
  "key21": "2upjdKqh5MEUagFWvXN6G2opHVNcMsvz915p7PmJtbp5NPtuknKKhAVFLJJ7fo7qXeZb9dqhwnfnBWKZzzCFMeEy",
  "key22": "3fyCCTHKYcKFfhR99FWQcfuwZL1qpb7SdW2jg6UitG37fiiaKq1m4vogYP8WET5wrbhyA7GgAabGCe1KC9uwA54M",
  "key23": "4QXyfWcANQfkBakeXWB6uQNWBRH8oAkUMEdoouAdbp8M3vsr3qYPuHyBabaJ49BEdzs91RhP2AV36EykgERrUupV",
  "key24": "4Vrbzi1B2dykQQ5gZBs68u8fgKsqJnB6u56gxd9xmZoijtJFbYVk86UDLhKTyytiCbZHHf7kPaWBdiHWeHEHyqCA",
  "key25": "2ZbmwiNzZabiFo4zVgzobBzUzKFysC6XmZD4uhxfVP2EjFC97moAhCx5p2MpszWjeBo5dYNuyCTeeg6Th6xSrp5i",
  "key26": "4ciiufZBZ1Rkhh2yo6mEHa5Wp5fJRs7cauYr8QvNhmmuDSMXTh5AZSW7ESQcR2ereAModf5PcKEKDAQQkCYQ1Yjf",
  "key27": "4vc3yr92jnppjbbEHevbVe8MWa6e9Y8kARHxVjnPVdiCK12Q45oxiEaHgvJRxZYhaBMN8ZF3nApSNaXMTPEZbbqj",
  "key28": "fCMgUXfpSBew8gsA9AUHmJTGDExVnSmPAisZGBtuXGoBrBcct6SaMHMyLqPwLKHjGUA9aBzhGAqN5viKXc2G6Cs",
  "key29": "5YHjwmKP9yjY6XAaxghPN7yGPYMXi67tpZAfVCUKdKWUfNwNXW4o5KyRnenz2Q9M6xwMjiEqrATyh7styPf3mEe2",
  "key30": "FsRXf1cpRkojVr86PpTRH56cgRuD8iayABf8miPjAi5GbWiqnFUJyCDKnvNvDn1itV8FjSxkZbwa8ENRrPVhELe",
  "key31": "xKHQCArtfEwmivAT325NFKXhdmUja6v1kQwZWYLuxk3hsJqnU2W9BshKHqBBnCxMygwPffAcVkHy9WJiV79GwEs",
  "key32": "vzFyQ6Z64xFmV4aBYj2EdPcU656HfoB2EyR4Mv2gWsp3vHxt3e4ZNqsirWab4n9TiyZxzNECYXoFjmqRFV5Lrfy",
  "key33": "4wqdvKXxLUnsaPPePd7pK8HdQSeiugx2ycy68EBRJGpnHiW6ooBtFGg2Do5a4fAoQgErp9eBNpnkUTbAbJzCMp2J",
  "key34": "5yYAUKifKwnwJyMV3HopBTKocaMe9zsbJiR5tdjLUTygwX9j8YobCEgQ88B5NePNjZSWmq6noT6pvDK8KHnFE6eN",
  "key35": "3vWDiKvoehrnjdmFCgr8A6rBvvoyJruN4VT6D9zf7jGLSxuGFWFu3RxLVTZ9WQVNtNkxpatW8xxw8oNHc3zxgMfQ",
  "key36": "7wpitpZZFohMssi9ZZy3iVGPZxRiU5LoCupYEniB2nUok3pCqCxiviY7BT2jiTSgG3W3a1x5RFfhHDXu5oJho7p",
  "key37": "4ikEfpCwZSUeAyzpv47AbvFHjQxVanHV2tdWjtaHcbqjrbrKJZxeXvMfy8L6a9iJCQuut8LoUY7Qgyz2VNv4TF7t",
  "key38": "5XAuAqqYUg19ykPbKoUwjLW7A1dRpmdgk6G8v9y8PnPAemX4XraE4ZDaqF9YpLpmpsHu9VjpFfJqq25uA1J3v9kJ",
  "key39": "3rKSuRBhBjGSUEPuTLYZXEpo9UcSMBJza3KJPmN7cHCXwEFLkDw446DrWDnKQ6JaEXb3hfEbAA5SgGUtPiCzA52A",
  "key40": "4hwSLac3Wo6Bc7Ay7cvmpznuLXjkWNLNicHDjezfezVNVjx1wQfGnS1LCVE5wvidxiDdRMTYjtvtzFpTKEdT91VE",
  "key41": "4pV1LDBzJEoqA7EUbXdDs1eJpAWr9R7FuNRobxwQbUk7MG6xAuHNGx1R4nA7s6tbm6wuKQCayAEBBpBJniPDZdeT",
  "key42": "3wn9zWe2EeU91YxTuvqeSRXSM1JXNXD3PJPB3XHokBXCw6wJ8Ca2Ze3tpVN3NAyZzPqSRgGcVWkjQagVsCbtn5Ni",
  "key43": "S1KHGD3e8kGB8vTtrnsLpNFHRfZ2oekHGTic13CSpfktCXTMjqvsrimTa8xuwjeyrr67Vjgp8JXNWZ5vAoc1PtQ",
  "key44": "2FCZcf6GBM17CQ54QeFMXV7GpGfebGjr2yDanD7XDZy3XzQTAkqJpwE5pD1GjyWBBnw7d1wZfQXGvdmZbgB8fAbG",
  "key45": "5HLuzWBHV9nqehzSUP3EZ5DTTqmZpZZCZEWJs2JhHgGMQxsSB3RnudQ7gmqdGHw4J46dbVNiCBs2AaUWuKo9LMTc",
  "key46": "2GE272q12Kew4TxyasfvwLRWo4PxWwhXmcPWK6yXPydmbXbjTbkhogNkFX1PumEcSHxiQV4piUhv1oxpcYx38ByQ",
  "key47": "3cXuQV8RQRDJSToQpJG8GNqNThA8jn3aeKHhbk6hgnD2dYQt5xaiAjayKTM6Pqjd9MpdayujmNmC1muESGivs36C",
  "key48": "3zGy9CwA7EaPLRvP5yLpeZ7HvGSqQyrpqUxkuTF7NpZJ8D4epkpmYSpGV4qnJZxFa1bX5fAAwdo6ayRcnzM5gRbw"
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
