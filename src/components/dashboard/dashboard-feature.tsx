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
    "4RnDRfjZnMBzQn7JNrh3KcAbj1Q242c5WffcFZffe35f2fWw3xcr55DvbVYY9cr1HWWcX641DBVSxtbx3YSG43ua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48hyA7vDArygpUhYv27q8BAV23QWLFJUuDkGrWZ87UGEvBtZ57pvQkiqTUziXaPER27iVtNhBvptA56KCbvD9hMJ",
  "key1": "2Q2AB8cdRdEWumycRtQ3sAcQajCziHyAeLgewZ7eLfb1mBibWPzA2v5pj41agnJxL9Nj93J4j2QvDS32UHNu69TV",
  "key2": "5Ng4UUbb2pZPLPsRsjXZW1giXgrgFWF5uEmWm1ZQ3rW2odBN8z7i92SVTcUR9nC6bSKih3JRLvEmj8qLQji67Y6x",
  "key3": "4eShgYkXDhwvBmN1ovBvUTQCsKGv1it9M4HAgBmzavUdGuE8qXRd9Rba6tdBpRtyRyEcWF5TmEd9MB8K2LedN7Q6",
  "key4": "4Cv7kHRUUnrD2291RnbxBjMpXiHKMrogzcN9gvAxR5aBuff7BBK9NgGdk936q4pjJhQo3ncpprP2UtFiTiCmQszv",
  "key5": "xZD7CKBRQ3p7T9erjS9ZPAYSS9FTchseTZ3bRyJuUk5nFAxT18rzvBVrfxBgh3c23kjcxkjLFG8fgegsbmMGiqp",
  "key6": "2PDyQ5tjQJ7J5ugxACHp4jpsKHcRntKmjUxRpuHyXF4pcr41W8U7ZXWJssCSWidXjWkK5b7Wionijws7HvkRzwNs",
  "key7": "31C3esM6yE4X4y3kbqHvYdi29hJCJtDgdwWb1MuxvkGF7TLarckhmx1yaXk3WKakASRcyeDv3CY4CCmjaa3Xevrg",
  "key8": "5qZTt7wU8gK5bg8bCX8qVUTinUuUgWAPxz8t2HxJ1sSxM1rGCP9z44GUZ8Tsw6uSKHKBQHuQLZor5bGqYf7FrY1m",
  "key9": "51PcJ7xcTkZMFQ9YdgXktfhES91Z5c4V1pJ24DozapjBFXpNphe7vy3Pgn75KeSNU7q3NjFxwFHFfkDjX74HiYBb",
  "key10": "tsJtSWhNpafzF6o8z7L8mnPWFYUHzL4rRjchNsN3MNZspos4uSbHoThuUgXUfrtWSpg7AZucQCFXwRfZzY97ww4",
  "key11": "5CQkr2qQFEYydVWRieuFx4KdUB8oVFsuJ4qiTZsyjzFDGYu8Hx2QzcpjeoVMi7nZFVaYT6qxuYdeqvUmRzw71fxG",
  "key12": "5aLz3kceyHstsUCiqNVv1rsQp6snKX7RfnM54os29xR5LCJWhLrs3DoxYKRPhs7GVUo4atDftExJCfxfoAo8GzrQ",
  "key13": "5EYKgpxkGd7kzoFeGX5n8wok2FGDEmPFcfNQ8A2yYDbEC2AYHRvdqZjgPQASv6vZPdKV3vjx9isK4THjsQ4XuAaN",
  "key14": "d8VSLctTnhqmh8tyStMHrHU16wmUn5fjVpCnfKsmmdkk7JpYf1S7pJ2oVN4dgeZ3TRDBu3W47VfnaG8C2Cf9FTN",
  "key15": "3Aa5nTiHTU72ggN9dxqeiYnooG14Ro3AtfD6mYMZFD4gXW1HmqsVU6stmdRvidDpgYA56AXbvjznth7jLXRo1Pu1",
  "key16": "3AboYXZNHtj9aXWxd1KXpvnikqGkxHQ6QChVgHbRDgg9SDAHenb1S4xjYz73MB7AiwKgxEjZZewYdDFC9J4LXDF9",
  "key17": "bFcgvHyVUZ8KRoyB4A4UhuWkKqzsXU8t7GsYZXhw4Sz3vTuSRLu45nKeXaKHQezz5wNMxoNi9ptz3vp1rvUu2wx",
  "key18": "342GA7hvYur4wvSdbXvRoSZktj7TLGrDJDYNSR5wt7NVfLiFvnyZmNrooKS6U4ipiiAgdQj9vECA7kGZNYA7Lrd4",
  "key19": "3W5U4yasuCgSLap5TKtAebHsrz7hUM3sgy2tyH7quqwURECvoL7A5HMNDo9hgtXMc4PW9q2opPY8Rkhyw7MRebSY",
  "key20": "4HtEU7pxoEMzP1nMBtkD2tDVai9jEb7hVnJpsmpFWxDmyNmeoGVSZGWPUej8WAnrjceFH6xVK8PrbunF8Y874f3D",
  "key21": "41gkAwxMz6mYgnjVxuM8i1iu26KPBnJt8P1nC6NW1LmoXz5S2WwaB5AjuoQEtfRBKVxAsmFhWudEUiTju7BUJwXs",
  "key22": "57Rjp3yjdia8yiZXuh5ohu3abhuJZAGyZQDsf1GTSoEMoT1bU6uf5wXd88UvFkoDHNNReRHq1MjdEoqLm5ihcqz3",
  "key23": "34gsTzMQwRLvf63U7z83LhSfSzFwsvaWqeAEpvyjAH1XzyDYqvagBn9223o9kWZAgL6EYgRTxp8EE7mQV2Pmf3EE",
  "key24": "KcyHFYR6cLHqjgXzMNUK6xdAjaKsVwvdsv9xp5B2FZiPcvhHWuQmPc7PtFN5NC9YfSmd11zW6BDVoNZAXWBEFY8",
  "key25": "9ecp1rtvcV3xY3NA4N4xXwAYeG97xEJhb7968irrYHkeRxSD85c6LpvR7Nd7qLsH7YCQ9YRMGewjo5WZmwYcLmu",
  "key26": "5gkwW1yBgXGBjhkVTFZuVLzFNmfnAqkNKsFhHE2a1TsY3saEsMqymncuQiqXWmmKNrgaP4VxX3nozuaTJqwQbDdX",
  "key27": "29iATHeVcYXV2LuSAbhVGYWtv3yxQjMig4tkP86A3oTpw9BWe1j8yH63ShuQg6TcbLpvg3ToRcFrkChfeA68xowS",
  "key28": "5ZFrfj4NZSuFhntspMEzBSrUDon6zLPCeEZc2jMGMDfruiTZFCmWLFBgv3frNLn3UVSuKoEr2JRATm8AiC3mcfoQ",
  "key29": "2uifewUeQSUbSjkTNuWLn95w4xxaJoRQFHtjZGp77z89WVQfXRqzRFSK45vdoKVYMDBwWufAQFimtYJkGWaTCit5",
  "key30": "2hxBeGfTTZqT8qFn2AU87hRdYzwFaaoAfHTXguY1GrZFiLMh1wi2Baqun36J3WNPNSvRyHFaYRADAyvxSb3sczk7",
  "key31": "2LaHkfk5DLouMxY3jqmkDAaGhG1ACShDuK3U49SfPHfXV764NdkCSWJ3zJmVRjNVtwtM2chsBuKDjW7GXEUx9DPa",
  "key32": "67Am42i1mnCaYGYdyKK1irNJ7sfJn53AZHX4jdMMK9GJLc3HZ659rRk84TwZEfzQdEveZYehVXY2ZkxUMLEvzchU",
  "key33": "2PQt26LKmsf71zu5BEfdKSNwmC2qMn5cV2cyjgYbpUfmjC6RF73HiuWCMYNFnDtshWf4Z8TZoqz4jPeCksMQkbYP",
  "key34": "4oY1cJUY6X1erZxSsA82KF4TuioH5QCwsAfDGZzSSsYztmEVop5fpsDB6ujhP5TXfisgzAMhkEVECUc38cdxb6m5",
  "key35": "4qjjbDX6FJesMRvDWJCCsmYpcw2si6QX3Gw9EUbATZM1RZEex8ubbzc9UtDHuJXuVzWfkxNCxJSek71A8WX69Mf",
  "key36": "2hW5MoyuAjMajeuNfVSWqwKN27ZUnHujRX5Jn8JyWrn9KJsWr318WW3axUMBRWEErHbsf4ejNTfKudWSXwR8tSzt",
  "key37": "5Vat6TJL8HHC72L7g4eDmuZfAg9bJ49jox4u5DMxYJLDStTjPhyeRnX9owvsoVCHDSka9RkpNGNVHEQEEbpnYpGQ",
  "key38": "Nn9Hw1PFrrKuadqmUWEc17oKC7ztctmUsvfWsYNXtH3Ag2By8kimKxbcBpbwJQ1jdi7oLmdiaq2PfpVPKYGQkpQ"
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
