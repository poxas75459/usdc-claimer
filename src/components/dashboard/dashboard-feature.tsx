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
    "7BZ63bnQkPZQyZS4rYFGdm8jCXAG62MVi6pvksEq3iFFcbo8T6jHboFPh7fYRiPmUDUajtr6VFfcLQWiCurTmNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s9tJsFEf3QxeB5hgTxxHwVzdRvmmprM8o2fJd2ENVoEg1v4m7jaanodLxw9dHxVPBHpCwLM836sRE2McFC7bbGa",
  "key1": "668kJyePC5zvyrGm2MybeVgXa61DgRc3CQFWzRU2MzY1P1GYx7wx51z4EfUJNju749rodrQYunxcH793UKAJuMvJ",
  "key2": "2byqpJG7daw2x27tHaG9nfnZgmrVEmSY7wPVrTW2p1M1XaaN1Ki7wHZe7eVLMoqQiyuGZauJTbe8zjZEmayJaabe",
  "key3": "5epZUXgbMfJzA6yQHAt4vZJRgnNpPB3zF3tGxcUqTHxz3y6QAjKGAH7k4ZC3feVRGEcqaWNWuhkSXf2rY4MWKx3p",
  "key4": "4593JkL3uRVsULp1ZMGF8AU5w7BmPoMCuiwG2uqxgzfENeVRocjPyPchraw9qQqd9DdZW55yEdvu8t24iTV9cZP8",
  "key5": "4m1Uer1RdnPznQiHc9pFN1sngM7JDboAXrPTY1cjba6K2pMfSCBiPDCLbJPpFL64AYKGnfD2xLGSTpxayeYJhCJ6",
  "key6": "3Hi5tmiXysiQqens1B5THtgN2gbgYbti4GKusbeTcfm7CWSy4Xgi3iuPCmgAFn6uXqwEAyshoE83DUq7RFSRmTdG",
  "key7": "3R5hqPq1wPgkNdGrPAVLXxYM4uEUgCPsWLsVhevZ4tu2QFm171AVkLMmAnSTMP3zvYEPDdwQcp5VVqCor6j9TdE5",
  "key8": "4E7o6fa4FQDHRTGnux7pibWoSMRW58Ns4ki9irMtaw9dofwFnNsGJwVG3ZjBi9uETFWhLGqJaLiaTQUp8yvCA5Df",
  "key9": "1ZAprPcwW8GLMosD8kmZTjLKhyEzabRK2a9UnqL2WefBQjr3RRHjThTAn9iCeBBJ57TDuViF6Prwew6ozWoaoqg",
  "key10": "duhjN8mFnNPaxXRwXxPbLGusDQwc1wnH8SkzDjfXj4xtTdtx3PNP8CqDM7C1EpKPLmizsA3MJN4zuEdz5fBFJ69",
  "key11": "5Q4eEU6pQPpLaKG1c2aRcyftwwcZXf4wEEFJS2HfHPSp5HwY3VwfCofP2qbLDJxZuJuqLKYko5jeCkotEeowxfsa",
  "key12": "5zU7fJoq1XEbmF3UFtDfo56PJ83PCC4kiasBRctzYfsQs3EvqrKs8Thoq358b2VLmLZ9twRpzUjLA11PokCRWVpD",
  "key13": "3HETTNMGQfp2iKwUvuVXJ5vHgS7hbmPL6bjKKAEHDp5JxZH1HKebx17SYAmF3i6sPc3j8vFVTejDZAXcpchd7QAC",
  "key14": "gztV1advgSZq2nkAA6ZuvnPtm4pMi9kwd6TPUNPi6vnETNUK1B3ZByLnJbxP6VxaXiKXoxYuqjyLGwsHmnoTY3X",
  "key15": "UWz4VA4rpsPWUmGFVTBWunCdKmmnGwYx4FG55SUoByNb1CowRRXQFJyrxWtwNjXNShXA2jUDqgRouDEsPu44NZx",
  "key16": "2joKcPpCDvAeRAz9ve7eT5xkznVoibcGdq5McU75UExzaBwukTcSCNPGqvywtb4r44qURhtVDVVf571UqExwA6VF",
  "key17": "3Z8hga2CZBVJdvd1kF2ycJMfRyQDB6u4Z4Q4YzBSo2n7SGH8exfbGkQGfcdehfHvymFLJdkFu9VU2xbCLdhRtcAJ",
  "key18": "4RoD2iot23TiVX7jF3D1MPGHzwHNCheGwCySLE8YaW2SoQo7FfRGLdAbJoxLQ95bB7UbVphvfPQfPgRGjUQnt3nU",
  "key19": "4oqYcnxahaNnhgbDDJST9jXbrx6nnEF21AJsyPajBnkU1iXabyKun16DRfFRDVr8b44GykPNKuzGcnvUJkiF2j2o",
  "key20": "65Qb7bk9CLZsHwfDiayyAZg18DEf3PAgjEovi6KtF5GELQ876oCEgMwKuHTWRiAikNMsjcQFrXSaJKX7SY5Ak3J9",
  "key21": "5sqGHx6EEQDwQocBSycvVgiW1TeTErseVTW7msmoJ8XJRGd6rnC2x8V48ur58vjj3NXT8i4TEJyWhiqMNtcWrDCj",
  "key22": "5VUVmZLcjRwq3NsK8hnofGGKNviiK3SjQmovZuzVqCFTvc6nJUpHohKmPadMnJsSkWL4LkRPRSPLqbNB5Lfj7pUa",
  "key23": "4e7dWz9bgvhSDfNcVCnH4QaksEaYYLSeUanucmg8pJz7pu5J1uj27dESMza4jSJMyKb2GD3b8MUfzix4Fhf4KgyQ",
  "key24": "5gAS97mA1aY128G91NsJsQKqcw7cHDpGp4FpXfD41PUbxcs1d5ceAHX3xRBX52E7YxmaC3muMoGEcJbErF66Pv5d",
  "key25": "3KZGd6ZxaZ5GdHcxtERRUhMEoHqusdZkXyWRazgw1TuL3YhNZb2kkQhN2QDLxtRunrRxRaew5GxH246kLr7M8CZZ",
  "key26": "5RwszvEyt9NcerrxA5SRBJeqXRr89z9Tz4RFuejneCanXcQ8EqAsBbm9qPNZSP2VabastHZiZmWmxR6Esuo3aGh9",
  "key27": "3fUwjjQbJbrEEDiDrYXwCB4EFurufNSfuCsvTef8FReKPsbxDChcHcS1xokk7MiYmb3jLDqpBS7xUveG1RsRpZ2n",
  "key28": "4pxdd35qn1rTrZok5NtDVneEFBrXFT8Zu3YocwC2MBYth7BdGpFjkT2ex5kzWaNA9DDnaswA8GdrHh3bgkrxeZs2",
  "key29": "3Xm1XdvSowqcdg5E5Esw1PFEhKDvmZy4HLtUR8PVbJSonTaCd1zPV96RMoDS2Q9ottpoGUHCe2y3rKfkJo9xZs8H",
  "key30": "2iXVZgdk7Si4xowQ8qTUELeHMEAWepnkqBsmhCVsziBZfsj47vLKnqP9XnfuvU9GZAsVxte6TNTZJvX33TnJpQyf",
  "key31": "qGavpf6eVHXSU2LDtDmheLSgGCRnA8LCfGSWwoifJJPKhfbAhEn3wAbkwpZcNojeiP4XfZwWuERJTcfeVjjjCXc",
  "key32": "3B7SHMqfYTMsx7qb7ujbk8K8etmziZ6Mfo1BbbFaJm2wivCjjk8UWoNjEphVM4QtmTjJvk4icjzFqskysQ1pGUN",
  "key33": "4J3mjdHe3ubirSCYACj4pFedtDgTR9EC7awn4iZd6LfPpUfkv8tDfaozjF9y5Jpf4c7UvdzNAbJbC2uD8FyfghkZ",
  "key34": "4dRyuUFCKGKqHJWkAjCupmC171Yt7BKyX3HJgDev83qeTmc2qWTyAMx4P8bWfJdmxrp5kvAeWqRp8TPVGrPgUxde",
  "key35": "tDxi66xYd8QrDprstMD5ttkaBH92pqHu6YNZS7BFvKx2Ea62EQ7zecxME7hqHGNTdQpDh6nCjV3aEypcdUdZYjb",
  "key36": "3mFdTiBe7VtPvPhSx2Wdze7NZ97W8PJqSpQ8kCkjYdqBkCj2kezagvoyxEVr8Msy8Ls5Kju9pZAxQmPMN4aRL1Ff",
  "key37": "2SYwGgR1yoSbshmy65EVSZ1GC16GXxA11C8v1k4J88ZjPn2y2yktCNVd15vmBFGKmSDY6TQVBzYkjCZ6ANUiUZRU",
  "key38": "4w7US53A1tXKuWEcUMWbK9KbwDK51X46jkv74VrFUYWrB4i51pVGCEkVQ1s9FtVQB2ME7ZwXUf3qaJFJVfkEbX9Z",
  "key39": "X3A8fyvw1xvUojvh8NuR3avJkmpx4rC3fhhzFNjx1AYUM7DHc9ZKxug6Ld8UfA5HmGgWu8nFRg6vxG4LDuQnaBm",
  "key40": "212Xe4oR5XxZGSzWY1sZgAT4EqEgQGrTcn87zik1Az5TxRgrjLAARfhFvEE1H287BLnaQx93morg4i2GMdbdK77j",
  "key41": "527aNBaKU1Qxoe6YpL9s48d4WU1JwqJ9RDLUCrTMyLthkuEYJt8vjL4KLxPga1qDkcvhvEjrZx2kLKfr8T77NDAK",
  "key42": "4Q5g9huHe7dWwKWPjxMSDSejSzpW1XNGQcUVRfGkGrv6UuLbRNPeXjNU5pErYwgAKiDuq9mw2TffxnriE1L8UvJ1",
  "key43": "5rNQR57V32P1uxd6VWDU4r1Un6bKugdQ2bc4yYXtAWubSkVbQrr5BL897pPxdTVm3VUuiA11nVxcgL1B1fkU11FU"
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
