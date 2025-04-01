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
    "5pG9o4n9fbW13L659ZPXioM2c45McSfs9fhAd3Nt1WGu79SQ73CJcUZSvTNedKLL7f9nqBwx33tSyqT4FnDiH3vt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f6K8sWpatKBcbQpXJVYXgraS8AfgRRBZHXNeMCLq692gxq9gZt4NDJRt2Mjt61Uct84vbWyDWMQFkJeF73x5Jov",
  "key1": "3fVCeos8SeCWza9QUvzbsVqJ9uk6BdhLDb9HhUbSz2458EabstPigYX2bTozK5TGV3MiSVuza2NbDNxt7X4KoLiD",
  "key2": "sB8K9r1iHf9nyyc8x4q1xNuiXPYvAZUYWcL1u3hLanFA4w8a5BTmfpDRZQ65qs5M7y7zJeKxnxzQUpx92ax6U4X",
  "key3": "2h9Q99778TEhk6B8TUAz8938zVpjfL2AHXy5L36N2CggwCMm8VJU1mJXEd7C5pNsNXXupfHc6Fs35PV4R7MEC3C5",
  "key4": "3qQ61pwttaiKnCXNbc5Q3mDEYzYWhWg57bFnhKJ1T1zy1BV1couBDZscjbrZdsmTMLUXHBrSLWB8s5nD3wtpdCJg",
  "key5": "5K3GEhPWCvry21DChLy1sFWdfWK5aNFvq81Qz41TwMQ8qzXe9UZCZ6ddLV7BHoUm421pYvMHTBEYEE4n5EZg57Z7",
  "key6": "39uPVRLPGmgBBdkoqzx5c9prR8ZW3zroDeESJ1swYhaLvxPDBaQtDVvoCAuCk8tgg8x1EoMsDHCdQx5UNh8vscNd",
  "key7": "32V9febSDnDv183TNovR83XH7kC3t2A2couwtFqvA2d57D72hbFpkVVA1cXEaKU2Uta9p9zDfPiKj7GDYiEVAAQW",
  "key8": "2UD3jjAfsQGJ4tT8ks2iYh7AoS4K22TgxqyBKc1ue9B9AK355TnrChFNYwkbVJ43NZx3eqtRnAwvNV12Mw51oZkP",
  "key9": "EjrFsVUST9WLTriuXjnnh8Aq8ET6U7jmadD3a216hwHahWnLT4XAiyQH5F9fMqPj3KtCe5yWPTYnX4iCQMnfVQP",
  "key10": "5cUqZFWHgQW3Tq9Tvz6EgD8Td8ATxUTeHgeDoRsNVuNNHafDG66Pi6H29Jkt3sGWdzPHxXWeUSb6scUavPAiyuqk",
  "key11": "31zzYzvNpwqQg8G6ceGqb7VhLmkir6kcPcsJNSyDbbHddM9YnUVZDBMFc5bvB4wtbTBE2Bp7nVdQPtL7FWvwm6em",
  "key12": "4jZ9qH2N6pKSppFquVQDQUGLki5VMR2Cm92tD3fNddYwFRWvZAz2z95x56eEVsgmzW1t2F6VzBv7dZhNn5JYirdf",
  "key13": "2wQHcfsx43tuSi1PN4JyZEj76NinKtvfSf93gZLMBcyAp8JzJK8RnBTmwksiapV1GNP3taCgAp5U5PZ99HJhUTcB",
  "key14": "Skca98seR8ro9ymBgpdUJtw4Ph1W8t6Gsg7fm2PxvUgwR3mGJ4nDtBzGvDiH3LGfwz8SguP79Ax1R87j9pVKFwN",
  "key15": "xLiYDwjedJM2CQbAGenMSQFrtmbyPZw5k9R3XUD9KEtmoj8dPsVMaXMcqDiKV1n4prJrEDW1QWP25G4YiSSVkpa",
  "key16": "2g3MLUxsQkSNE8njrDaKjaTMGyuWxWGiE6UzFSsHdsgucS22FBqJujWWHw6pVQ4GzRVVx3MS6PQYuAWPjhEMGtqp",
  "key17": "5XkhdGZbNbDVLCrjpQQr9epNY44xQrX5KJKxo8g5iGXJody8aMvmfkLWK3AkvhxAnxj6EFqh12f23iupxpE1dZSa",
  "key18": "2PVYURSYoyq5bt44F1DS4k7soYR7Jgfs3xZ8FiWX3Xu38vi6z2D7GdTCjcZiwyP4Tw27u866hjn3nNzAmZCjBsob",
  "key19": "3LxdMyWL47D3WcmcbuGPEXBZ3T3ubi8ZyXf8rjANzmUcQhBhL7ysrVXBCLuxFqiEpEnYjHviPfD19joGYSvZp4iU",
  "key20": "2GyYavosCHyGq8GUHRsuxQggvk7XEf6zsMUJFeZMWdjDfGDTtrtfhTFrZKjGcrdtEpwfUYuJoEVxGhAgC5aBnCco",
  "key21": "4qCDSwinp397ZHnMjJLmzWUQeCA2VGYRsK58jxZ3Rkcb2cuobJuUHWiGL7BAhr1ymgX2pK59KWjf3JYBrSrK6K8V",
  "key22": "3DGooextZtu63H4yxoZ5GXN8owB5A41NBVPSpczDq9grD4A4oiwCH7YQBfUZhnRWLkTAGH5zvKXMd85qgH16kdE6",
  "key23": "66ubRpQxCk71bWtRtXMpQ9ojZFdKUyF6fRVSPyxQY94ry6vLBG7EQ1Ea7Bb8zjxCoECFSJeQDkh56Qu2GvzCtyMn",
  "key24": "2srUD3tC3zexEAbWiDzjZ4gWRbU9kgZccUE5Z1t7h1FMWssMoDVbcdFGnHKPgdu3mED3DWySLTnh4whGfaXrerKP",
  "key25": "2MAN6DAbBjhw7fNyGNii98mA8VyHYvgfH6FnUKynyXbMZ5G64tWSMYYa6RZW1v2nbj7iERLdQuwjeT2YGV7wiPk",
  "key26": "3HwzY7hJ3Qo26Sbe2Qhch6F3UJ2s5Xki1TDHLbYDArZabozSXS1NdtjXxHM8XjSAyfHPzDbDRVD8zuRhaZLkg7dX",
  "key27": "R8QQBHFd2wrbGQLSCMPm3EiGLQnXrceNS9odepepzHuHxPbx6aHkXqwLERLPVgnrbrc8xkoft9Wugfu4q5usiwv",
  "key28": "3c4p27tqrWJ5XKb4Cy3SHXCJkhbE1idQSUamfbWkCsd2fU7J9pVb55LkwK11xhygj181FMdrsgvHi3F1BV7CCtux",
  "key29": "4qwCKEEnyYRNL9Fm8yxcrWXkv4Uxv7WyShxvu8S9BVquHxcbYHKmFgrgSBq9Eu9bimYtbAWKKtvFR4rqvMhFq6yb",
  "key30": "2LPAMyRa7Es9VK9PBsXyZ8gjWrwcjbSMUBjt1SdDnKuA74FTpFZDcKo8WTbhDN2oFQwWFD128XhWmaNA5SsHMjhu",
  "key31": "41fT8bB3Ga8pQ39jkRYKaHwj7SDMCFJ6HZeREoqAf89Da8vmBej6V4HiM9JywwjZ9x54K22MT3HRyVwwdrmS7GRM",
  "key32": "mmqMvqCZGNQqLdTYghi8ivLtZdXLyMpkRZiX5Wb14EdP6KdEnUxMsJ9yw7FSa6bNR4cJ88VVsxZPGNd5kE6ZcXi",
  "key33": "3hbWcFnBFCvP872ToYQvkykM4Am1KR95w1W3aupoFg2N2fRQSX9oBtj476BnHmsrmRDkHk74gwmJQXo7CxRdczR1",
  "key34": "3rLYb7ZtZ81vjQkhjm2rai9qtxsvygAVSyWvcpBqexjavyZ8annC1n1CvmzqY1xMePrshH8drZ7bZvhfj1Y2F6Eb"
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
