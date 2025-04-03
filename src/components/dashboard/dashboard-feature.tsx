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
    "kwC7ReJhhnrSeg1sA7hn3QQAwh2KwZpg3WJCjLyjBVX4z2kKB6QfTkN1C9Xx593cw37K9DcS1eKVMnhphdtUErT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bbnLHd2YxLpmA3vq1CfbvUvzNUMciGHqYKuBLeeKnFf9v2sDpfA24Qph3PyVk3Ad7XBjCrS2D7q7onnzUY3ndMJ",
  "key1": "2PBBGFuDXRrEA2QVzmuJKbNEtfPzE96FzBLeYBfA5jRLYJEdSoL7Ay6pUkb9Yy2r1HaqwMgFqpX8kbLfWXch2fHw",
  "key2": "3bPKGTaWfDc3qqjqMJJTMeLMnCbi1gUAH2nNegKTC5UAuXNsKBUyPJmmbnJ4nr9M589DB3QKsZ7wbHAHNn5oxjxj",
  "key3": "54zFQQ44Ez85JryZ5Y1e3AWU4cAz9xQAWmXWc97Ko2LaZGtjWJPt42gZcNW24CrmriZn2HB4Rv82p695vCQS7LdT",
  "key4": "5C9qGAEMvURkX3UaLxhjtZfV3Votg2KmMHiXFsGoftbtnpJvXioacSD3W4KUUNrjN91mLE4fZe51PiS3gm4Wf4JH",
  "key5": "5Sa8TiVuhtg51v4KPUYrNqAdfrmKwwLNitCA1YSsBWF4fBJiKFFkKSyJexiKKUqSwDArxVdCp3EQNK4NM8Augyde",
  "key6": "LzdRjpSZXUZjtR4xG8FN27Nb1igHeMks2T4aoWWfXLQpHrmxgzZAfQBSuRXQumWaWkkhjHCyXn3o8TrLyEcQaMT",
  "key7": "5scktBnK37X8WUM6PkMRNBg6fJMJYmEJSoy1wsjDUu1YpT3gLoXMKMGGGk2kUpvZcghVZtCYCGoh4Ehx17x8a85S",
  "key8": "3n6jKgVVq26SJuH31iqxo6X1z58A2uHvKXSkSoLAV9j29RptcByakVnWTNRCqpbUhtqPyHJT6cC63iT3f5mmDbv6",
  "key9": "3ga2z6kjJCRhwRAg7QHq8Mj9g7Wm1qHXfXtzqnGokUnDL1wgy8k5LEEzcmWG2g7DKRurMyEqoxJKok7oL4EBGiEU",
  "key10": "33HnEWKL83wnTMVsUM2QaSrxDEqiB111nkCppKVeyx7Yn1Lm1RHjTkfJfSziV6BAAwbf37XqYWdhsRjG5oNqfRV5",
  "key11": "583EXGvsgR2hn7Dt2R4d6rZbRSgg8Y44YCb8WCf3ZviUDLSBXu1YMQ5hYxA4LBScgVgvpM1h2DQX4u94AcjdLWf8",
  "key12": "27WFZVZhXpAnwkdNgf2Mzpu8HKraLQ4gLmoFQtoZLfHS4ATYw5gxyNpV92WSrB36d5BgUaToe7tFj4fCMgNuof9H",
  "key13": "sUbe6b5mTXZKEoqV22bxPtpG3gXG1MpLXXGyvd9bvgXPvF44evkUqN4XQxo6eVtZmcvHvPoJiT7kX6hvwaenJru",
  "key14": "3rF3C7LD4tVef723a9oWY36isMFFaSksGPUHwFitS6Vt2isyCXnhTYXixQLKKkZt4h8cqs4JhtgwiYGpjozBy7DG",
  "key15": "SDuZrALPjAtaRPKyMepw4JCYdKNGuSAdKALBKcFd1a8UdRmXRgQsn6gJdv53RdsRmyvxbZhCoBRuX23n5HnZbNA",
  "key16": "49ic9FJApruP1zU9wH11PmXbComKmZNM9rV59NdurjHBQKxSFQEM5UbxX9GuqsLgRELQjp8eFzviKgEJV5NDPpCE",
  "key17": "4zLAZEPBPhJR2KKxHpGfVeETFJmoE8tXYKbZ84NSAhb55LVBQGRmdMQ1AUW1nzNA3nZMUULDvWqKYPNwAyhE5n2N",
  "key18": "4JcWNseQqSfjPSdLcrhXaFqkG1z9Ab1TTXK41akAFozxc1y6fnTBBA1enCBN8hAipkxsirQCKEhVYNbPYUB7V4s7",
  "key19": "2CiGNvrkpxjhBgUjn2sBaPZRNS4Ukmju3ZfSMY7d3xSmh4zdhBDF19i9VQ5WPSmDWxCeCrf7qyzb6DG7fA5MLWT6",
  "key20": "2jbHjButnKG14ACVFL1iSVb1C1hdf3pMKNm4WqCTLT4eKRGzNvM5T3KQDLtHWufg5sMkWEfie1srSSa74AqgxQhb",
  "key21": "p7o2M4ceuDWAys7sr2fNSJ8vhFyox7dW8jWV9cvrQvCkqHTGNk1pUNYN5uSA9E7g5KPupjjWNcUjwyMvnZZzJSW",
  "key22": "3Ptu5iKf1GhnvNr3BFm4BH4wd4s5UQ911WKb6YvTF8L7QXkni2gveAFuNsbGpsEYq7ZGq6dpymBmiKRoQUVnX7MN",
  "key23": "4pYBAHpgnr9CCoQB6u5BccviwWtzTN6M8MtMe19QmphsMgF3vs64yL1G91dmT2vceCUn8N8DtDFVHMdfRsfh31Ub",
  "key24": "3d7PXntTS4n4bDp9Nwqj7HB3HmuCw5YhwrSZu47uix2vX9KwuFm3KqQTg6dwFe4SrqrAfdmjZJN2N2gaNc1k8ooP",
  "key25": "6keypGS6mhJk4W4fKpywuDWcv9q2mssbtcmLpAnEWviSdCmdBZbrGpsMmViCMhCeqGijbo68CvxMP1h1XxYk9ZT",
  "key26": "4zP3R5H3TAZUXsYpfWx97gzYGuQbddi1KhET9bKTmPMYYiA6iaaCxjxxnjWHNhCoVMAMK6CsZGvJpVztBA8X7VDT",
  "key27": "24qWgkRccCosb8E3Vf9vX4YkDnJpAKWuEp3NtnhW6YRKqMkA25aHa7kssnnwxVBTLKZmQfpmWMaEAWqAryDE9qNd",
  "key28": "V6WyctK6HLSNctzSHiKDpJ9FALpquZWk2ikgBGHVhS1HuH9GW5tiePKzHoagGvtBoAZ758WL9BsqX7rJBbTx2x9",
  "key29": "46v9p88CpLfwjzT6NDMvVHMX4Do9xTEfYToMwKwkcXoSdjx9nzDyd7uhGbYmMgf2pz7z7NQK8VetgFgCTvxSBexx",
  "key30": "5dTjg1i8HXERRfV82U53FurNtFSkEXkL6ZNhup7EkHQooF825J9VPUAdHcFhp2urBzuLXLEnXBe449qR72JnJwTP",
  "key31": "4eSWH215u9PdgEb7EBFgKJ6BHM3F6qTQNCLzchvXp98zS4Fc4XagJfiEEQNe9bhUnoSdA4AaKebQccBtZ7JF1w1n",
  "key32": "3MCqC3s8JsWeYzpnvVac7gX4rex48TjGVMh4vXZ85xXtsKiAv4WGiYVb75VeV7a8UqBZz1LZT3TidJ3JJLNmd69a",
  "key33": "2cpHbP4vZwprewyikiXVoo8Hax7qpyxZK8YFAxSvKNqBZ4hC6PwBBicvcMTJmz44oWh7FVhbow8aREXu9nf64QgS",
  "key34": "5bTPGAd9fckWLVtiTKCXfqdeec6nNLEXxWR87nUYBq89LZnkddJe27mXi2kuU1WmBfntr1X9acStknkLbKqqVU8U",
  "key35": "4zUntgBHd6dhX9iJFGKLNKYCiev1rzXVVbApL4aLb7TzY6FuP8UN1WBGPnNh3Lejm86N4xgGyDg4HRKZocJ192xx",
  "key36": "5P3hM3SDJjBReiBNU7SwzeMDJZxkrTWHF6vARgsGeJBcNLj2gP6DfQjkFKqKECxMbt5uFHA8GGXLqe8ysRZpDK6o",
  "key37": "VBd2tqyLpmK1rbKKbHiVJCQCVV51jGLVrBbY3LCUXUSh6xuVBX31gqBFgM8V2F743dM34nWx3nZc9EMJrzHkktK",
  "key38": "3G5MPQCm1SZSmRwSpQWjpuVoaeJVbcAEJwb9pm5bcP1jr19ts6KyduHYG5a8FLQmpA5x1ckgnSDUsaM5zEvwn7vM",
  "key39": "3i26iafv71MThjJdg3ggTLr6cTcEVzjuh5eeopKKbYnEs9XWwnGrVdVU41zDaYZwZXspvMjRd5FGQ75BNL7VuFwB",
  "key40": "v8F1MkaTJCqQW457Q1tGavyQv6vE9QgKshmarMaAxG7ZhTHmkh2yof3TjWrKob1UXrRvDfeSGrkvgzZBqjgHSpE"
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
