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
    "5MqqsndYP8STPZLT7oZ9wGeZFceSit7prR3KgFDSppv3HfyzgJsgnPmkwfVH9E7q53zXofdi7STdjpiTqaf3irYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nnGg4i4GLE1DUooWaRQbb61F7XbndX53jgK7yiNbxMVBGZFmvUbGfMEKuQPr2WzzkSPEK7rqRVRLxtUp37dLsMp",
  "key1": "37dQz6FhrLJymTJABeePTAq4TiWXrXeDFVRzvQtz2RwHXZVydj1Pv3UawtJnxtUSUE5M2weeTc3opXa5wQo331JY",
  "key2": "2maLUwmqTRd5a4Gzp52mc21BxD4C6PXsVT5x8ATVaPDfG8M86bTJ4AAm7WTdqUhqt6jfFYr8RG7kom19VHV1jZnS",
  "key3": "ibUMvyV6x4onjLwMs7w1QexumKpggyWFNnygJzuvLnDFiErATtNdsbQ82LbG9QtkSCCVwJh3fjHpsg3Wk1KkC5Q",
  "key4": "26LpqMSCThxiYX18ncYf4Nms5aBGendnrntibnm9NodW2MDBRLKx83KK9TcXNREGkrr1bjukVjZ22tJb1xiqwHMD",
  "key5": "356ignvA3zztrxwd1APu3TwsLnZqUM7LwBA6ZWr2rqQBC4SY8b4sNcRUcmKwFNbyPYVo4NEtRTPNx7s7C6pvY4xk",
  "key6": "DiiuFRD7iqU1FQZAzDokVknL9KRGVAgqT2zjjgvDT5tq2CFqzEXnfTxgt1UpdNwDhAu8u21LEFJF3HweBuWgibi",
  "key7": "rrdk2bgp8boxoSXWUxsUhmmYfXeZt2jmU4bvSUkn2E1zsUjYgTjnPcimtpcqMCVqGnj2KeRBVmPJf6vWtfQjYAK",
  "key8": "Q9Fw8CC31BrM7xgQCTBHyPhDzBu3KAd4r2ohUQV8EybjtKL4S1Gta3FPXLnViAhjWx3ZV739vYbCE7UFdT8FQhq",
  "key9": "2CH45Ev8PVk4uTbqyWozGkj2mdvwtWtK7D39DP34HDsCyCbdZbcSBJk4jSio2puuuJ8zYm9CVZ8w5Gvt92cbws8n",
  "key10": "4CfxAGSyGqGmDSZBfMqMAEz3VKX87KnCq9BkFRcMv91M5LbC7HmVTxwQrBGVyRQ52NpennYS1VJvmxb8ipNomgzg",
  "key11": "2Jego3DyuyhMMYrmnHhumvw4CLyDtaYPp6jK7Em4Zsp5frZbGGSyc8aaCDQxXXzKNtCgRHL6zAFzCG46xMZjAm2L",
  "key12": "Ut6FRpnhzANeHmeX2yWwp6RSf3rakCCBMh5eY7UBc6rUEaT4rGGhSZ7FG2MwS9AqrC6kd3HbGsQk7XxTSsGtFY3",
  "key13": "2KYdWvJWaTDYfFBvEyG9d65Vsi9QYyZ8nVAnQPWCJNuDAZwwvQGmi5NRm6Rgm54ZpWoPoAvcz8m6mofp25pkhjd1",
  "key14": "3rZyhGMAg9J7hx3Jsjumv9TbGk84J2fLL4a7d8fhBV61zB4EaVQK6oTVMPP1gxBx6GnhMpDYn8MeypxqFh3Bwpe1",
  "key15": "5DN8r5G2qns2oP6gbKuPwMfQ8aXdq4g8gA359g4h6aAnu7cm8jUAD7vUqNFZ1MvG8YpahxXK5Powd5eB6weL88ba",
  "key16": "4aynrgtf9jKnMR1pVnMmDSy148WqqWycuU5ijN3Y3BU3SfdHBZNRpWD3Ypn4rGocymH514gqnhkZ2PJ57eXiASzf",
  "key17": "i6CF96WyKGaQ8SyrxXkCa47D7BAMXmBRvo5ngv4q54ttGvQy7JVMwVnvdxpxfGEUxW1HwGdmsbscUpyAHdMYr38",
  "key18": "4LcmmyfUYsu4nXBSFUtJ3ACiaGrKXbqUQjYnFUNAqYgEi79D7eB8KocqFpCtTdy2ZZzhzbg8fxVj2SDXeDd73NjA",
  "key19": "3hZT2k9LxGja1VBMdRG8ptABFG4PxTCvRpXJN2ks8jcxKKWEwPH2wTG9cQys6ECRLgBkfnejBTD7ur34HPRL8fh7",
  "key20": "4DEAvd4eYJ6vMmj6HC8xcJhMkRr3HnCRjLBoydZ6iSFrztpnSRT2CiDnBj27Scz4nb9D26A6mtwsM47KjqfyZgGy",
  "key21": "P6yYYJ7xfazea6sGesakZbW4cBjb3gkXu9aNpfFpgoMD7r3j1xHcKUAYrKR1NBPjoEUYXMKmifKN2W76af3o7rn",
  "key22": "3J9gFSSLe8tiNenscge39oXgmAzE7qs3E4M1LhEVswcVkk69jkvtfVKqKqTVtaf25NP8KUwRo2cT3xU7ajrZgM3i",
  "key23": "3dww4sPo7eFVBcCEbzc2tu1FceFEdyUf5bazXucrqVT58VcPCuFHKeWuCn4bpLSaRJRHiV5MKu1FvStF16WutNv2",
  "key24": "qK8fsyBw6KPY784DwALb8Ltm669HuBmhdsYN6HvXhsjmyFLgEKCttRnEfbJY17hrsJcuMinNvQhfc6HfvpP8WAr",
  "key25": "ky1uFPf3u2HAUwN4HPXccT6sYpf9jwv4ETSgzYsoT8RAu9dTDP8KsTJbqPB69jg1BX4mWioXYDMWf3CnVJbPVYP",
  "key26": "2pLYEWJZifi8uJsrtbd2PL6pupfWhnUZvr69Bq4eA6h5xTCJj61ShVQDAyV9pjyWXNimS2ojCU6U5xm5fY7WQzUa",
  "key27": "2ss6T36i8Tq9eMroDD1vRbaAiSqWg24Hc5k9yEBw3bhV9jNzkurdKg2QVZheFrEWdaPDt3tmQ4DmdgdB2y61F9qZ",
  "key28": "21sjXrjTjYEuiFi4ueVq94S6W7p5YVfM8v7grb4BYvPYKKM1DH1zXZ4FFZ7MDR6Djywi96wKiSkm58qQVY15b6qo",
  "key29": "4SfxZf8ZkSzsU4SGECvHLc612tZAmDasin1s3Z1ovT3Wq2a9HCF6QKmnKNj14jRaw9JwKxHNq3YwrE1tmfKTd4vQ",
  "key30": "4pN6VaHUQtcHzrhxUTBGBBQ4hBqNt2wwu73ArP3WhtpQ66GZ7sVTWqUpLhrqDLv8dsTD2TEtorpPKw5yzoWiyjSr"
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
