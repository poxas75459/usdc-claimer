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
    "5kNS5JbY94nPacxYbvN2jTAcTuGcRkUdjW6kSMqFMJJttmGFBDtsBZ3W9FBaTjUcdikYarz5a6DDafh7Xiz8L4Ni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UUkP2LKbh6iwB3TnkutqrzLhs37zdvXHjrGcLN3hwMQqd1UuTqhvFZ9pP9UmXjK3LxruR6TkMkjZRN9QjxoBxyX",
  "key1": "8AavzzMb86ymm4eGomCZ9ceGz2uNVXm3FwRfAEo8e2gtniCdXrx1RVsaow2WAbFWvLmLyYXaEk2ymtKhmz34o7r",
  "key2": "66mawwrgJMYC6mNRM11XN4v4fWkHLYCkS4L6GLVbWjhuupyXzeqjLZp5kPzc1vFxNsHxPnXA8TQwV8wVBzb9DCMy",
  "key3": "4Ast6LkfeYdEQGDXcouB6Lz8RABHsWhwdzjmCZxM9xjroigdoFvQMwKmuUTh6eF7Put2YQCaBkDbiYi8BJ1ajYnn",
  "key4": "3RU6QmF3Sv9UfowCzz3FnouUFDP6YwVpJr5H98goDAPL46RzV3nusXYD41WDBDKEvNianB6VEt2V2wTnqMxXMMgy",
  "key5": "2Lf5fgiSRrksKHD2WCKYd1FgQeaejTUxtrTWHocXucrHmBVw3TRpjmVqEUGMq1QPrghYRmytrWYxPNrW3LktxoXo",
  "key6": "2wTExDGaeMpjiQNE27oSiFM4GBZtmNSPLoMcdaPdYWuMS8MHkghcoLmZvHTisGtYUDo81bsL4jGymChUtam7w17q",
  "key7": "5ocuSyH3EN35Cu5MaTxynz3a1xdhkZNjZBQ9UejeTqtrZk6TbwSSAJuuP2yNhtTfMTTsGfNVgJzJio2k6UkmMrrg",
  "key8": "5jBT6wFM82TRfUAiTxBGGkUKJymHvXXMEpfYsw2daaNmyhgPWYUqYvxTgteKopvx1Cdgz2gvQjRzakSGKYxVhy6S",
  "key9": "KRDKgMLpZ62Z7QGtTxNUPNb12CED1EKWKgf7bqcxoumSppPreSzLsjkSetkXfdLmHyYsKEGdzdAw6g7D86VEGmM",
  "key10": "4ddgfMi14vwQ2aRpSTwdezg8HFBjnabyuQXwaykdL5zHdgNomsL47E2jAZ2Gffo22Zv9S3iekoEvj1ajjmEFoKNU",
  "key11": "49jSbNY4KiTZ3yMPg9Vnz858d4iVaRUzP1Uh6JNAgCJWQYvAyWv1ZJKSPKGw6n4BwncsXJowbBdRbmFiu65226Qq",
  "key12": "1bMLAjMKr3iYeWCJ6HN23QXwWvxeG8qtXTnJs9hkwgdGBL4VwN92ZTeLB4xMoeEhf38jP4Y222LdsDQuLtommFf",
  "key13": "3fjVRMpFmPosZqyniDP4FTEJKak9n6ebUmCtL3AJQemXaGgfCQU4hMnLrPnkdtuark6FYBnVqxVyKPSqbiFBfK1M",
  "key14": "f8BkmBpS7r85jDm2nrFhoY45MezUuotjCjTfEvBZUEx2isUswnwgQ15C82P28fnZrS5qTZyt6waTHfx2aZyNiRi",
  "key15": "AFx1MD6QkTF3tWYEguMzg7nnZhmjCMSagkGvns7erBE5Wy8mYmd5cv7whEzR3kGDf7bbxFyK9eJJGRVgTfmj6TP",
  "key16": "2hsZoxZaBwf8Hr3PBcBcwPtz8hyZzfC8JLoreLZVhm188k6yVRxoYBnDZuU8yd1DXE1xXgsM9RaH9voo2FiNCgMZ",
  "key17": "2qob2JTQszNReBSJF11BJgp3F7G1Nbj8VCBhhZb3hferaYxL2fu6GogcL3QLfMfyeaQpKfNfhtadaKCqGvXuSzVb",
  "key18": "wmQqfsAnL5K2oL5SnhJ9GweiqJqEs22726cTtMN3w9RjRKGk98ULgS8cLX3iod4EzMcbeMHuaePySixScCvnRdG",
  "key19": "5uHt85TkAvLv43d5hyYkxaMz68GUpDhvnPXTPF8Ph29CbyPjQhSnV3Uv8JDBcGVeccFX9czNiuJdzNV4LGjF4tPo",
  "key20": "3gWrzwKmD9EV1YjSNJt4R2nBDki51L9gY9qXFFnZTr4vMuF5Pb1hs6EAunS6rse6sLPcHTntf4rY9yRaeKxViiMx",
  "key21": "4BBKJ8vNHibNPdaBxYR1j88EFXR3dyhUynLPWrmWVBrcWTzmSxUugscZ1iuf2THgmMvphBLmHmRxFeH7vJiZtfvj",
  "key22": "3SM4tJF43vC11eciUkJ3W1w16PNrJK5zCLqXPQFb8QayqAQgewFGHikLtNak39nBsrYFc1LbZMqRaHKKcr5ATzZw",
  "key23": "8Kzsc2kMt4czJbmorGKdEkJFirJgarN5R5KTqNQyW6Jc2Lg5YWrPe9qsd4jkFbg5gBuba7C4rshvk9ZCyV7T4Wp",
  "key24": "SaNZXJ6nbAs2qptYfNDT5nn8UPSZn8SJfH4gZwFcCRxxp1Y2oZqshDsocchZMgWzt4QUoqkgushV6sctbiMytyJ",
  "key25": "3YgJrwTF5w3Fbhxour3zM7WKitohkSsYv9qeRiM5mwEHGtXbMuW4nK9BxAdEx3u4Fe1Ff3sDSgPKJngHyq7vqTQY",
  "key26": "3HgMgwLgbmeWU4Fx5B67HzUTfMdCJz9DqYJetArk7SZ1vHToog8EX9rSuCm7C7TF3C7a494sK2mXQdJnKRP7yq2k",
  "key27": "64SFtMJP5XgReA6ruFsc3Y2BqvDh5KtW4WPPNn2KbqNcC59mVuufgKVf8Y1PhZTCa5uo4D2fMh2EMUkzUxyLJs91",
  "key28": "BJDbuAKD3V6tRmoMsgXmSruDNxjPTRCVZ2uNdqYnJtdQ8V7XmREiafQ8AbbDCVGnjTf7w4mxZEcPiu8aSyutriH",
  "key29": "4NxfvB3DXhtPvMcBeh2S8nKmhZVsuMS1c3b3cN2ZChS5Z4jKJug212EznVfLRUfNk5NASqW9o3Fs1gqegTS12cMw",
  "key30": "5PbvURgTcKQaWGmQQQToDR3Ek3y4DUZpdUMGdC6mW8PDyER3xMY4yKi8DgAN8h7UnhvsMKAA7cmeELGoWQVHogty",
  "key31": "49KtmDs7hw8RpMQuTpzKfNwaV1WbEBDjTAEmowzxXAkExLEWCGeFJd9eicnkVhYTRxhnSdWQXPZ2hfnTBCSQry32",
  "key32": "46GN6AdY7UBdEefYRg497A7DggCvVS4bDeLdvNmTvKRW2PYdqahbGid47iNcLz8tioep1AJpLVj4LDm1pJ6QKrvx",
  "key33": "5sGGCsH1jwM2nam2RBTX7V6tgB9RpVGWeV1t7ik2YJBEM6xRQZTvx4ZhuzghAHtzTFa2S1JGnXFYfaDVwrHVCCwD",
  "key34": "WMnXebRVic6QuiKGDJZmVhh9KipKvzCiFKHRjSt73rZ1cQU891XEVFgKV8p93CozxW8Ff4sJBGrjsfAUHAQC72Y",
  "key35": "4tM7iLVG2ju28Fc5LiJvJQG6cYsnbeaBHbdHVrua8TVk4TxfG8uuKRQwS74hSytxA81MK2CTm4eLDyXpYCFjxBse",
  "key36": "66erVeozNiexeCWW2Xk76gCrbK19146C6K38byKq2KwPjf4Wip1Hs66VKFzh3rqrZYsftWTn1namtJyaqYb8PCwZ",
  "key37": "5SqkjZT8svyrehE4aLzwafRhaqfyxFexKErJbQFSEWDC3yU7mRRcgFSp259Lq8Apsajc8fHeJRs4KWyMubM5E8Pe",
  "key38": "2qg91H79Q5vyPyBkvcFYVeQ1o1VQMxmimm9rs6Wv3NmidKeeEr7Ddjg62cdUgqsfSbddp73LgYt8jSEFEUdEvAsG",
  "key39": "wa4d15KKeo3MYNhFa5Nuqu6ptVfYVLKfsgATdAPj2GEkmnnPwn4UnLDdPi7pqU1AbYEgopeeJJ1xkrifX1iyVTA",
  "key40": "24K1vuNaykSCMySSfhJsvH4CYmaWhSTE7Cfr7iBQYhdvUP5ddrAAq6EjpNWVLG59ewByjr99So4bvPpWNpPfEwpa",
  "key41": "4fvkkvAsBVJGMH1X3bGN843fskK5rBa6uULFKm3s5xmszRabA5gcwdE6XU7LRh4trTkZcqW5PgSoi6oaiigsrDUe",
  "key42": "a4wSxZy3hv1opajsKK2S1WvWyZbu24BLXeVdTFi1EBfv8vnmdsnhqDtk7bzi5sr157Epans7bVWKfMPVGRtT5vb"
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
