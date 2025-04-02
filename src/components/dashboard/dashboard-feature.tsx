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
    "5fU1beP7JcvpvJVnaFCAFLAQ6rEAt18YvftRXVR2ENB57tzWEkMeaqKzvsFA77tV6cMVuirhtN9fHnTtihqAUANi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TEZaHt9cwDTnddGc3vuPppFxnQMszGKan1ZFwKszcgSyorhRoVGnXshjSnJFGugPFxjzAFeXhEY24keS9RjSSTW",
  "key1": "g16GJC3ZkQh9H2YqcFoRKCH1bLq97jogbVzFuwe252D6fWpWjLwwKzoqhHqZRsKXQhbixdN46SM6PDdpH4V9ehM",
  "key2": "4qVPdxcHWDKxD4Z9AuhZSpBXheXmEXmJkupwuPJvDgUT3xEcmzcnGNude8QgxaPd4GMMTYVBJitRQ9rm5ydmSuXi",
  "key3": "5YF137UJf7kaUsorqa6AXGRSemBJv2GCsaNf7UkSBBtYJcysDxyhkAwnCgeVXVjcZiKUEM14NexUghEzbrtHMzBk",
  "key4": "AUrEAuQrE76ofyiZ8CaD1voNe346arvE1zigcu3RruPP3tzSFTiYvZF1t6HnDW9eP1JnVqNrNFmo2VPwiKnLWHz",
  "key5": "w42EXEfTNsBWPA5SMK8riYGweTCBWLLqfi2meARVZpCCChPjc8aehtUGtAu1xs43JLuGevUdNHXd8R5GBEXsdKx",
  "key6": "2eqSCe7Djfp8gwETwxkbRuUoUDK5r3H12JvV2ursZM3kzDCrTtpEoesjFqaCTgDhjEp4YxtLPaJATiHsiGrZHCz3",
  "key7": "2U8fnT7N1aAZytdDzrjptK2AdTbwdCW54mtwdjSGEXcPCrzT6jCU9vjVT6ytdFZJVZsS6VLGKJpYY3HJ941YHyWy",
  "key8": "32r9HhKHxc43KcdN5jT2BSp6wMPDWzAnU7KctAk5KPG1qRWb46mtZmq6EhSfjxDyQRZXEanj8knfyadH5L1vUeES",
  "key9": "6M3AshxZAXwd5hbywvrzxL3tkMM9RthYvfwguyeW8Dm89cFVk5VyCnZby6xGqxoUPesVnKRc6ZQq45gPxDaSswe",
  "key10": "3BuJBJ59wMQ2TNAcC11ZzV2jTwY9cGqA4FznHumz9KDeJtmCYKEVnPbFvdahEiFFVMXZ4SP9CBZiaUoYqhxKYPKJ",
  "key11": "8RL3T3NZ6AM1tfU8XzVesRAz17qMDoGtpNtXzPFLTrs85G6LwKjBeuc9jcTSryifCc8bpETtsAvyxiZ76XZBuE7",
  "key12": "3aGKhUHvzYCFXyCTgMqhqsqvQfQR24LiMwyrQB2ehRAPqdU2LHxdNqr5qGjnZprNuTRGt6tckWoj9sC4cBLFz6fz",
  "key13": "3Bbiag6QLGe4x1i5DN5taN3G3ptz5deXMbtC4Uw9PZvaDNCSM2ayFZ7wNNFnuHS3Kr9zEcyLRKksfHgt9tdT2fuQ",
  "key14": "2CDv8RRdFfytjZ941gVY7FuB8Xgw5GQo8EDcFwGsCt6UXMdbAqpaTMCZpx5UiUMSupVestjhoFxo2XpEmvdoRhXK",
  "key15": "64pUKXno23QoxyWcnktuzTJKeSCPg4uV4UCz2rdqph6qfufQcyRR2VFry9zAxbi6MgwiHqB5SYg7BL36pmqwWEFC",
  "key16": "5jS3wm7jBMh3PDvTkpNt5UaKcv3Ax3oxoZZP8Lw6smSRrS5f9AtHXMrzuNtwpohwdVp9VnNiUV9oRbG4oXiwA8qj",
  "key17": "3AWKXKoCEjfp3qxTmou4gZfi1L3Gp2rUgaGLPTworXeArVh3djsxpZMhHvTTMmZPKAHpPY6JgcLQPFTtya686KG5",
  "key18": "vHjdG2gJW7Mm4odHonwUtPaZoc62teryvx7gtWigBwpkW263pzqGjkShjCBF2pDqs87FkLWTG4fmmokGDgUSioN",
  "key19": "2QuBMXBXBqqRzkvgkPyVXdcnggPXetB8Lq8aVqtMuxb2GpfEmb9X6xdw316mwcwCJqFMHa78TqgUN8Vp163xWYok",
  "key20": "LSLPyTFc7RHfBeo8mX9vdMpneqPaYLLeASdghMGhR5fYpHv3uNpP9GjzGUiRvr4R52iupqg7TxNF9xZa6SDzRdx",
  "key21": "2a8TsuqNo1cibWkEWHpfmTryoCNjSbCVfwJjYeAqHh2FxWGoEc31Q15ELMUnYyPm74RHk7WceVbhbrjG4xZaRqU4",
  "key22": "67d7fTZMzx2dexwD4g2jt776BDtZ73i4FuX5WRMBa2ipkMm5C8TexynodCxjZxKQq8XyoVZ7XDtErQziUwrLd2Tz",
  "key23": "3DFDMSMewuGPDArkxv5eQ17L1vNzJFcnye3CKYKpX8NygqLLv1gDsNXj9oRYjQmj3n6ME1cyd5S8SsvmtV2ruEL6",
  "key24": "4vCURRuKR17UsVis1sPzLB5GQFhMdoE2nNTetU1FGsosWz19dPZMDwYAqDU5HBxqqfBszMxERJ5Uf4UgDjZ2JXY6",
  "key25": "2qBcTh68YvcaGQb6pE2LZb9LKXWiSLnnzmcb5R2z9236YP6JMQd9tzK12hA9J8GYagmx4A71t2X5K4NKT3ibAduG",
  "key26": "X8xVZDSKHBkXfr8vRpgkUVrLfNq7Esjc2YcBmBDziw9QZhKnNEQ2WnPHjSpjB6uMZ3Sk8f3jWbC1UfCLicKvFFz",
  "key27": "5rhGWeZFkiypNYVA4E9h5LeVhFUUqUidGrqQXPziQ7DXsqu98FKzSDRfSXw3LVqUpEQQccd5W7kW24ZggnVmtxDs",
  "key28": "2ippD12nyENuEUrhDcF4uCN9oJxym9AnGN5zxZo9pUseFNoifR9VkrVv2Uezuey9mxhMw6siJT7pQFgV1BULPzi3",
  "key29": "PLeJ3NHk9S9pgyVUC8q74G9JsCfe3Cxg78VAGUoMjy84PRd1M9DA7TGnRXsCtnEBeRJ1Q9W9VoTJcRQLVT3VCfZ",
  "key30": "3HQz9HoQGivc57ZGs7PfiygeUefcGMRi5DLAACQP7J9DJbLhwGoBMkj7XrYEA1K1qJSuguFnmyzSUMMVXDwSoZzG",
  "key31": "8qFAHnykeBpaUnYS9cYaN4vGVKSQPV4iCvtR4hu3D2Zhf8GoAAfafNWXEofot94uU3JA6BixXUJATBr2t7DjDLo",
  "key32": "3jFh5vuTpZi5w36dh7Y6mioEuCtwMJyymvwrum5ZSbgJ9h81AWwSaFhLDxX3MrZFSzeHWPttkeLKVzdYNtD4e7io",
  "key33": "AJSfGyvtH1B3wRZuWTp9RBPrguSNFizWo1KVPn7Nqmw3nhehaZWPenxxCSPnRubgBDXNDV1pGRR67BFUpxdprLh",
  "key34": "5xnoHBpA18hchy59AbGwZms3ssnvWrdE1LCsfxUQQC3Ew5rgCZc9LjDBshBUCN1kmomigXaDE7DSAYfE8MyVFFrp",
  "key35": "4a945GBC2NTvBWkLvbAy2rH97n8ToD1jmLFgDhupK7AmC8qzXjwspqJZgNF8RfAuwNEFoZK49UfxQcB6aYeMQcWg",
  "key36": "24Aq2evMY4GuZJrLB6TkG3eoHDQnrtyoTJ7GNoTWhoHzRDoTCZMksU6hJoq9ZFCAdqy9eU5bcxgsYvw7XDPQCBKS",
  "key37": "4cKwGu7zEBFSnrHyEnjt3LAngiP2iRFgVmH5BaBEXKnLAT3zL1Y9kJSTLVPdkfrbnWiKAnbygUkFfDU3kBNuu8fK",
  "key38": "Dkd32DwoynCJ4iJx3nMwYMDoxngFg8pW83JXmu6AN1hPhWREHAw7dLcE4VU951ChkAyGxip7YV98bNnEwz9SZqo",
  "key39": "56HgPcMhSbkHxrLGaPEkAsay3dmFzvg9pf822n3uFyq2DVwHvUSKTYxmc76MyNFARUXMQ78hhroa6W6SdEfVTQ9R"
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
