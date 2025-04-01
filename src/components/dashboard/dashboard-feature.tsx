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
    "34tKkHzB1MdHLzmFXpvrxyxhomsxDcd1wLktLpRemoNxDLJNKaDFNQFNYqF2H3ciLTeKYsGefuF87GSmfaMgvWEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aXi8cenBtkieduCNVuGtJx67Tnk1YM1BMrcYUuUVJ9Eumf7Gx2EwVru5ksiXHHbKLnDmXXLsY3HtcvEd2yChPXc",
  "key1": "5uDixHaxEphAiLXa6WrsLxiyfo8mJfz5vFbE2qNbEksKWjrVFFXzQcajfCLL24eP6V4eN1z5PSsr1US4iYG6AXhf",
  "key2": "2wQRUD8sZb1ePzcgFFX68FH7Juw4socsuBskJQMHmV27oixjFfSdCtcdUiq39t4YskGXHfVWMJPUZcVRXFbrbUL",
  "key3": "2LNc9zn3wNdK9MVdF6dUpY121QoR5HPCSzkoR7nSrEyaxxAGoo3E7bcNB2WkVNyktL8KxEnsfd45HDt7EEwcWqxU",
  "key4": "4YG4xqva6wQRVX3otmsmoFnkGhzKTgSxFVwKmL5wAqD7LpTKAeL7k22NBot1zfJNKLCo9JKepQRewJUKBjzmsAeG",
  "key5": "2F5kKJcnjUJ2RRaoSAiaptxyQTLrnYgwtcV1tMEFqmu9FZfiyMTfwiZV8fb5yh3NHDmFN4M5FnyLKmHWPP4GEJFB",
  "key6": "5RDbAZ1oEMH9QN2z5PJSde3gqzVhsMxXu49jcxNa4cxTpzM6QoZi7aWrn4vimomtXUbpNbxpFoYKPCPMmdgxNnVf",
  "key7": "2Gvp7UdhsjYT7kpXiUZoduKe8Qg1jbfCq3e6YkeuwmxgWh86mRGXgsmd3pVLVJrrvb1aprTLDjcMVr5kuXeX1rfH",
  "key8": "564biQCZxtkr8aYjbaTE6izmu2pu8EFP2NL4vsEjhGDuVw9RiS5BKSycgs4DwBTiTaPKWLf3hQjHMkBD35cneX4F",
  "key9": "5V3QByuhCQrFwdExjR9VMbVAzYCyp9T1s5BHUCrwhH8rpzG7qEJXf7vdBRveq9RX83FWBDQ7iJvyXQNUty6SfSgK",
  "key10": "4XzVYfqH2tfmqbGEk4BoQEzwJD9uR7YWqXH6ybX2jr4nXByNsZmLxNn8aPK1oSMjJr4dsRs5mivk47KxJZwkEoKS",
  "key11": "5hCGzBfkTnUos99QvfGC9by4WzVcwi5xAM1o6oUevFdTBcG79H9aSBN6XXBUB6RhSnZs5sKY3t2Fbqq15RP5fMn5",
  "key12": "5FiArLSscddR5nGkewF2c9tQHnByEWJXMj9mL78fkUXWGvXf7wE7Hg8LMa98wYdWF6UZv7wHfJLBbzb38FcNZftm",
  "key13": "5V7tZZghUZXsijApG3aDAexZ2sVxzB4kSHVPvYrWZziRWuhp7TQkdNAbmnfwpev1USAMKWEPKcPS16EYWFgFz19u",
  "key14": "2VyRq4Sp3Kso6BzigCGJtvzJXgRQyz6GV87U3Nqq6CE4es1na7pJ8vwN4oSkuackXVCcn3Rv43TjS5GENDNDubdK",
  "key15": "22c3zg6iEVtJ1rEQVjFn7MRx33KzWT6S4Vi54fugtMaNUjFJz2CkvnStFMGybtd6sUpnTcQAZrxdsWkDL4tV51eq",
  "key16": "5pK68zVwHhLAkenUnJ2yMKpJdLMiFdMMuNaFKmKwCKKQJiStadR39xVceTuoBJpxtC8bZ6ou5eTRUE1HSEVJaHER",
  "key17": "2fGfKpY59gEsQoudjEnJMaRdwxZZXhZBQ2dsburqmVTRcUZdrXriC661xuBjXzPoEUiwVatumLNjffwvFt1TwXMt",
  "key18": "5a463tGQXNFx1xJaTtL8ick2RwVvVN1cu3EDqcpjaanGzxHKWkKmLP69VrqVrpXrtmXWEg32WMmPfFXnr9DzekT4",
  "key19": "26kpkDy2rMARvZoXkZPhpPedn2WDtED9s82QX6T7QT7rmqy4qu8hdgvEHuKnuSrsjiwamXBBFwfgg193F1tFbTdW",
  "key20": "fiV5unFsWp6XnRDD2dymVpULGpGFRvFU4MrVhjMeb1PysxAj2tVTbxUWZ7EjwRhfn8x7VqG6XUUho7SKaYfPUqB",
  "key21": "4u4XsvSRxfAoKxfYnU4ZZdDcmeQNB9sfJkDesJjqY9PCVqbjnagXi2Lb1GxamHaXWX6GnMPfaGXabtB4Gk5nF3fH",
  "key22": "5bodxAZniaaqpzScoZMPzEMnNJ2H86jcndgJDXrozL2yjEk1xstyGmyGXqZijeStUk2HCQqeskfzpxTeMPN8P5aw",
  "key23": "2U4Aoah6uVJqSjF3LQUpJMNWxyRueDr4WJvxrQeVFJtvZbfUV1cv5KYtz4ok2GH7rxRFEYhz9tCjdRZK9ewENXvh",
  "key24": "2JeF267TDJ2M5A8QrFLMGDUte7VG76EaSineTNya5i7rqB4q9gkRAv5uqehZBhvYWNhL4pXHkQ3vyvAKyTPnyFV7",
  "key25": "2Yc2QXvtJRURvDvpMVn3PAqfijXvH124ziCMD158jHZ1RtnfAeDWHBqn5VaKxx6mdGYZYwsUAeNBUKAK5wjeLM1N",
  "key26": "5wWDUjecVDUsxav7mxS89oJBiKFKWMQTnTkSHsQVJTiG4j5paqZTGtZ41ceEYqzt4dCCGiQpYdwCsdjqQrwF3tU6",
  "key27": "4mMPd4QEVaYvZ5zrqN8jVtRqq1GppSYM2vpjAfpYtZkWJwfAKxBy26DuPbn8pG4Vm9YjyRRMxzjzaGt4MXB7PBik",
  "key28": "4LYpB3BFFNBiac7bWbZVTD5mb1F1LRN33neGVJiHU34A6YiyjxbjHi35xHq2seiJdnt1kzoVgjmQeQPV7friRCa3",
  "key29": "5y5grzmfqgUNFkReAfJQ3Nj6HMPV2AQ9umEvkUCqUSJDghjD3yexWHQ35mN1QbsU2sqNVqJK68sPWgxCGrqJq7US",
  "key30": "3YAfv7yoqV1fHFg9nfeLrhLs88DmVAQm4QER44WFMotVBm8tBFVbqNtRur5G4LnnhAt4PShjS2x8kZzPe6m7mfui",
  "key31": "4Vu5MsQJTWBdrQLcfektypBgSZmH4Q9YAjExFiwxA5e9KTrhXZjsA434hZHXkjU2nWEXTC7Y43brKPMC9d8vmpLW",
  "key32": "skcMH4kXksy4eANDMQgc9sLXBxDs96pMwhjjV24YeHsMxXv94p3MpXbwVASzm5oaUt9jFENrH2ER4EKmaLjbvba",
  "key33": "TdjLVuZvuvBatoD6iz4wYV1GL1dw27u9vJuHK5hYhYGhiDSMyqbwNCZL6jkDyfjfrmjg5NKH3BaxiL3JooPNSPB",
  "key34": "5MTki1XQCM4g2NKwWpVoQV1SsnF7Pu1peFM9jp43aGAxxJ1rjRBkCgtsCKfq2JQUqor8TqGwgRBjSa1RRadqMqRk",
  "key35": "2qHCKZRWWjHumV35e6EZMDweL6fnCUDKERcAsHhvysbyJZSvy4mqqSPyCjEyqEMDaAxxdM4uNaBS7qMhVdfiQSrf",
  "key36": "5b3QGEvi1TLUPzVSAX75L9oj2s44J3BYyMbHbViy78wBSLFk6Qwran8PBpXZLzwuBrvJufbCWN2Xi4Y8xgKeftg9",
  "key37": "4Gc1w75wn8ABJ2viPq2QavHHCAtEzf4aUCw9tS8xkKq1nqyNysQ6sSEoqG4e9hzhgF5S6sFoe5S9eYRuSpzsziGB",
  "key38": "58RzzqniAHAZJ11sowR5nSh2CBscx4w6URKb2PncdCrAxFvtD9RsiBc7MkfsQiLk2zzxonSLZMUwCFTFH16UrFP5"
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
