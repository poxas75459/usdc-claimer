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
    "3BoW1nVNuZL6ZzMFDsxteGrmQaRk4yP1xX1ZZcPnDT7RTFSZ4ofqTWRwLJQnBFfGSiWQTEadqrWNVm98HLT3vUJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AYa2Tw4vDyf5mRdoXwnzKWxdPp5m8QXtMQvh6ZVhhyUvzYcFc6Z3ZtEsZbsN78NybPeWi8vqSAnbz5VYYeoArne",
  "key1": "3XD79uPJavmECk9Ltdi4oaBLLB4sXLTjXV4aAakyHbrErZ3giKcVRuWnZkBofUisXpV2uCR7XB6aN4YsMrrQDKFa",
  "key2": "4wCGsLN1z4sWoS5M12JtFgssHg8kn9w1FTXCz4kkY6AwzvsdsNez6c2nGQNbRR2PdSQ4Hmryg5u5TuWF1H5agZpD",
  "key3": "3gguHwtExTxqM3veTvnx287wTzWLHqoa1ZfDyCEHtJjSgArUb9U9wwu8NDcHytzQgYkXVEs32asvR1bbc7McVR7K",
  "key4": "29wJn1rSxsverFMdUzVjuHYv9gSt645zuzvrUmXAggSQWU2T6uW1CvzFvtD5GnP1s4jRpBYuXzFJqi1NmTXaNTRG",
  "key5": "2Mvck5YGFzEW92VA4DkAf38BZdzTHiN3hPoTYZr36gyogfcKMZq8Mw15zzjjNNBBSQkMQHQetKM3Bn3xaKmpNbyq",
  "key6": "3gvUZCvEhzK6V4EcAccJaDTToKyh1zqCsNfaBLiCSwueFqHsFaPYh5HhLvRozmrrQMnoeX6wohdEVHJSxouNs5Uo",
  "key7": "5HoursD4gDyeKJYnzbEDieSDcMTw9tx6ZDX8Xd49xX4obm9avR8destyaoxJs964SPELjrNZjjoM6BUtkfV2a47C",
  "key8": "3QfV9tbxCGkgFmmTbFxDxXzf3eGV3WsCdkY8FsEo4Pg4h1WqLgA4PB5vRMQEFrQuUFDTfvf4Ba51AWEH54WQevfc",
  "key9": "2RtHsXaxkK3QCGYMoEupbMCyYz26yt9UsDeJ2fNqeY9znbQBju4NYSgzfk8tkHfznKqugmLQNcxVBco6uUWmekfz",
  "key10": "3Ajr3jDmhiNt1GhWE4ssJbFKow8tKeDKWA3RwjsabiES7JBdXXA2s9FDVikXqQx1tmjc4j3gVCoyETHA2RHYDb78",
  "key11": "T3ZqHBsxgBjssyqaVLcmFwJv9M887hZhsXk8tCLP3wxjMgYt5sYJhUUK19YDHLQ59hRcsEMWDFW3u4JLbMP1bNP",
  "key12": "zxXFTRnUa14aaQoTj2t9huvEasgxmubkCsTpYLsqME9wQS7eB57o62i7kVWccmZUVpvZYts9oyh12v7uUr4opZX",
  "key13": "66D3RJGCyFMvA9AWGHtLPUrHkRhkkjkvY83VSCpYyxhN8qtHLfuj2UDRgfNNscHJVBdjLrT2Jsa2vG1NdvZzZ3zN",
  "key14": "4GQE1pAYc6dFqyahDesU3S3yvJyiPGN5iKb8BevSwtmiHXSDV3wTbk7PdyFPXB6WbnE4hWmkt1i9qXPTgsr7U7g",
  "key15": "fwSv5bC7mhnB8U13x9Z1PZWAd5fHBLnRquqZigzpb9gLsRQ9T1jSRZehDqjWJRRFV4wJc14YamwXQogXL8Y3XqN",
  "key16": "56Ca5p5VHZYNm7YbRt7qiXphBMywCsUHFhT3UPHkqqaCYrNzxVYjDh8xBjRPfsN7JswNSauDLGtWKFdCcN6eRJAc",
  "key17": "5JPqogL2Fs5KAXnKUsYh9epWZhFEBScbpfWNb3zJzagiJeHNNh2JysK83ya7PW5rYtu4TBnpApnhonh7ZDxP7BQH",
  "key18": "UDaJnnjdpPyQ83AUC8uk97DjhVyc7FhwwCm31HAzMvqHUkYmg7vxDCsftZ7pEPDTCda9Gf4tBYJkGnb5jXLn8QP",
  "key19": "1gwBgKQEn8tRQqNVstHvQanJ9Ya2H1J1xa35QdjtNmdjSgENqVvMZwoAVEzVzM3NyxXF7AY6vx82HCANP3TcAAA",
  "key20": "4WVrVcsHEVUZJQYHYZKVWx35vBYyFEVH3Lt5Lec6xjcheYsWXRXvSs4ZUvpcCrcdfCo5RAg3ngJeyk5gKqXHJC7t",
  "key21": "3mQmee7Nxj7UP7f31JpnJ2Vc3fdkArcCEicz67BUM68Jazwk4n8fPPGCeL3bVRtyszSwrHRyMTZAwwgvHxZ82KnX",
  "key22": "55tyn1GFa1voA3g42Lpbjhah8g4NgDWC2LcF3HLtziwjcqCUMe5WfQVRcWvxWvqkuSi9AmCYGN2jKknnE9DWxHDd",
  "key23": "3Y7CGzahhUVSPfvZrU7xNrXakoeUxxQJWE5iJnZMzaccDRjmnv68DAHoZ18EWDon6oJYoQJMZ9zsMFdCSdm7BCem",
  "key24": "2QuKpqmAAgvfZrVymHe77F5UCBsmyW2NxmjdVyvH3bRAd4qZDcKcS1CzQv4VfC1p6XgwdTnRFNM3cntPBXA9jTsF",
  "key25": "2Kzy1LhPGPbggEdSsbhh1oGjRJrNikFQevNJrxjDwJVrjhfpnD41NrsWqnJqeqbLGGdKfUii1sgFA32YjJmEPhjC",
  "key26": "2hpHEDK8xsskxWA4sPBAUq7a8ZC5Wr4LxrusHDUTLFjamJXq1RTbg1iUKbPMkWW6fWwo5hxydYL5w3hMV1a2AKCK",
  "key27": "TuWyPMZ6hGZeKAG7sLRtJmgQQQuvLbSSqdvPGFfywMmRnSTisB3tWurdEZEcdYsBvxXDx9x9krX3gu7jTSLmn34",
  "key28": "381u1XJGALQGGzrnirHvqjT5iTRsVXx22BUFZQBMGu4GcojRVVd9u76zkjeHneoCSCaE1469iTQhxqLDrsGaNNP1"
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
