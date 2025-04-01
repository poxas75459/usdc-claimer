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
    "52SESMpt6RukypEchkJqGxwjm4tUoUJfrBNgeCnV4WQS8cW9XJLtGX1LC45dfSYzaXoVWNL9zbhL14mEzuPbX1jJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34SVqyDMydPiBcHA1JHfJqWXSduGcvbNrWrjqzaoCNMvRjbbVjHUPyGk2ATZSxWcLrHkDQsAJo9Ptca6DS5hTQGp",
  "key1": "kFQdBFXdaddwxUUwX1h8qS379m786dh51oLYsguuKNQaALSZne5brzo5uzJfWFFxWPN9dgLmJrgEsZ8mQWJFYy7",
  "key2": "4sxzkjRUCMMkpZC5PBcUpSALKAugJdiUev9x8JW2fTnywbyidk7v1YVSBpa9nxmBUKcj1UJ8iqxfS5qtPYB5i6Rr",
  "key3": "4H5cCwGZkawbCcFqSQfDfaTUqT6fbznsAhezVd7CMcVwFa2v6swQNtUre2pCshnxRWWgbpyjrcZWN637dRDdj94U",
  "key4": "bvxqAappodpeTevwDXsd8bE3ZiGNmcNWFfszxeqxv3asVqaQJ3X7pVSoWkzea2oQouzLci9UPgFfNxuPRo3QXXP",
  "key5": "4g2HgmrjoXVf78WToFGXixhHm6kth9eQxi4KkEKXPakmtbJfrB1D8DdqWhHV8fy2VbU7ap4tkcZtJVunAVeTy7sL",
  "key6": "TgkSuaYE9NExFYW7gbz1FWP7q6j62prnojRksDqRsnTgx1TWnoJf6dHaYaRudcrGzkauncJnw66ERi5kWjZsdUe",
  "key7": "4Df5p1od9gVzrGXd87YYU5r7BopP1JMrRcWBdAuyMfh5UjqxkLjGNRMwKjzeBwoiEhicDMUDf16nQDet1X4AZWCQ",
  "key8": "FAzZ8wZJVGEUizhzpsNUpDyDHWKLiMGWSHoRkbYGTFrAcxwVjvsNM5r3wXduqJEtz457XmDHAcwd5yah55i4vnT",
  "key9": "4uvk7yVjiYR4HZkyAxisDrLA4MnZvP4LHpFadxizECAe7E54j3v1cRwePuoJkgCeCddJeJbTWM4FWGDtnQWShunD",
  "key10": "2maCR2FPVoZLN4H7AxKxEqQWXiSVjv67JrC4BkbqHqVVRz4qwgLqKnuFRzX6yfHeGGSoQ62JRa1eUd7KFyyzKLGv",
  "key11": "4EprPkjUDXH7XgHKdLroJ5DvoUsdJiy6kZMvKRgSLiYyr7A3ibhJT1quFFziX3kAu64i18JjWbeKqzG9yYyTsna1",
  "key12": "2qqPpT6TR1xrF4PoPbAXxPGt4xtU6YMRKWjxQ2ZULMWRGCNCri1XHMTahjMXkn4o1hFsHtYdx6hZh1n2CZNcWz7m",
  "key13": "FZjC5cQmQHpiNKqkZtoACmMGTkTA9VkKo36X28pLtTyhZYvcsanF3FWw899o7ycxsJfEJhuVEEnytEBBR6JcbSf",
  "key14": "28tjwZ4YTZjH7iDEtv4b9E61wNRDmGLZg9A5UHgB6iaGcvquqDKuxQYApWEVsFttKfquydXCpjVuYWRpyT8ycvKv",
  "key15": "2WgPFJrSq2pPqqTSmXZTjCidXR3zAebKSNS25y47BpMSAjbRQ2gSQWw3uFp8jyExavtVg3ednkyraytSWK57vtCZ",
  "key16": "3sgwDWtsJnSKDpJhkU7soR9wHLmkPcszopsSpnCUVRpYR4w9WNzQ3CJeXQyGzrBHctfGinLxHFrXWS3FMmUYFCP1",
  "key17": "4VBQPSZXsHKripYcpkYbVw4LizR6WH7pa38RXSmiXeZ1PcmyqZad7SH9Tpfs52C6oA3DE4oms8k5gpmyKgFRWzFn",
  "key18": "KkFH8ZGXyp9obd4Jh3R7fR63S3xgt1sSZ57aXT2TwxFm5j7k8tSSGEEduLhmXSM6i4FqwREFj4xoQgzvEumxDwC",
  "key19": "4tzpbwjz6dc4FgkRWp5SJfMeuX1qCA4VV7utnSThfY1ME6BhXZv4UJohifMyF6bTjmbtKiJTCtFvHCvfiU3WUqFS",
  "key20": "2Hj56b9M2nKCRf45R6qm8XoMrGKLnq4U4fPKAF2ZBfQMQ8Hemd5UbHyP2yyaGgHbfxG7ez6UV2gGELwbmV92eBy6",
  "key21": "y3vi6CztQUziWSaze6zSkQMrGE2gFngzaHfNVH3kMx1bwvSwktfbbuFMTEpWbKyqfTUqJ3yZoWjGho7xJUHGMzV",
  "key22": "5rDjNH8DAvK8h4bFNCQF5RKz8W3WrMoSs2X2PjREaMYWCz69yUtk3xeokoNnWmRiu8cTgxixLU5F3mhrRVAov4ug",
  "key23": "4Akw3L1opiy78tvikcUZrBWS8npPoH1cbg5wwCe1GBwAysEgupyaeZXRfFVcFrwGmCzFsBtvosb7ZcdzoNnVZsT4",
  "key24": "3V2gCPNmst9CVcgPYGKcJ6ofxnYXK1qhsfDsVTKB59gyJZNtAhRdxJ81Qt1iMEcag2H8J8uvpgRefeH9VCkNdd6i",
  "key25": "4P2qUuPNiSTXAnn1LNd49ReBoqNxSFZeANag6QW4Cd9MjajuWYR7PWdWjViKbRGgzGEi31wSgCrf93u6mR2fmMKL",
  "key26": "46PUJNpJv2TbTNtaVV3Xy9g3tTXzGNKvqccJs8iK3THXZ6RxpN7aGxePboYPJXJCkUZugX4Xqc1dorzdonhLLz8j",
  "key27": "2GF2v5DyGzxKbkmfda7tuPnJHFGthcmRM2z9cefkWR8e7Hv8GWpzBkD5AKms3xN2Mb3QEv5mL9ZuX5mcbYnkfgqB",
  "key28": "NYgeGFGHTNiew9U2GM176yJBcTUGsvcMyVktxadYPMyFCBNpmiMk4BTkCXQQCydjFvv61VVmeaZCPWgXb6Zdbxr",
  "key29": "27YCWFpD8UYxQLiPkJEPsxmNmgKkR83sgWfBtRTHspuxQXQSx41EFofqrjDEm6dL6GXH1N8qqRkpCfzZqSohD5V9",
  "key30": "5wFtJYMvPCSx5xFQyJTBFRKJBkxMsAhWVmKwo219oPAZjLTTgLgPufKkLQjfJdshjA4BdAJRqZtNsKRSPKYhBnAR",
  "key31": "5pADBHo8Vjr5Xg1jFCmMk5xVUQ6PgiWsByjuZp3LnitEsy6x8yNHXeUXtPgGx3FiV9AVonEH4tbgWi85XApZKL14",
  "key32": "24qk2U9st58NTzMUmaPNYpj4RevuJFAewGzdMcR6hYUifAVEao4YTCZCiDrMyRmU9MmCrRTRpT9GLTGqCZ7k7N3g",
  "key33": "c2d5U8wUPCPysdTz8cbGAUmpVGc6uaZ8RYYnBtJraeMzyyStYr5vHBh7G7M486KiyWqSnRLuJ2w7Fuys2GMZmQz"
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
