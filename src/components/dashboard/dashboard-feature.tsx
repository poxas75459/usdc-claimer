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
    "5qA3N5HnyRSzFXjuCNCve8UxnYqotsbix2CGZSeFdmj4e1XqR7NYgDgQhwvcj4nnzaGdyLBVyA8PPvJ4exVzT2Km"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dweCk8QoJYrjKDaJJe6cFzSjDsgcKZykWHc1VWRobsMNU9FLMPa6z5JLM5g7GGDLFYZh8e3uEbEpXiYkvUkXaYY",
  "key1": "5L2mMEkS664aoz5spJt8TsPUkLEpqmDCkhNLC9ZNjDmpRTCMdEtZNZ3J14mrPf3yo3otSKyJzcuScJHFYCegv3BH",
  "key2": "3dA2bdjhBBgHGBNuvnEAnzyxvWvGpXRtfV9FLHrRamQoFwCY4MDzXfwUPidBswENSLM1CJNqxrhqMX99EHzS82U6",
  "key3": "3BxjUp9WuaR8d2fKiHNouTs9zz3yZK1qWYXG44z8EmmV7XWFXNs2mNWrrkix1Z1EL5u1UtjWwAdQYixvv1tF8awe",
  "key4": "3LD1WQaWj3jnAYfyRUivoSt4qTmowkTw2kZAfBN655dz83rkyPC8STn5tiFKhEiPCqabu254vK8b5bXosQr7rpSw",
  "key5": "5W1TBKGq3KX1KzSBmnB1ui2CXQXsr8GBvhxPVatPAmQ36dpAmLBQJ3QrVaqex9e62wChiE5ZngvYPLrMfncpGGqb",
  "key6": "3UDpuhgPUb9ae9MeGRdJC4oZLZvRJ4PwA8skcsqc7j4tU61JecX9rDPSEArZ23W25CjxLVyaJLL8YYipgxHEbvaM",
  "key7": "2G5DJn4kwGKqHZa92WVkzBGnuGebxi5TUVVPxZiAFAPsBcqij1Wqb5PyrwTU8MeX2qLhQpEqPiTZfZmx31Tm9ita",
  "key8": "Ki8MYpK5jJt1h2mpYpxTqjwWEgDeXQYXxfbCGWizDNrQdzsTB5GRzawrMmYvQmDYyrtQ8m15zLr6aKzLEdjPx6e",
  "key9": "5arKKqoKCExwj6UBtbCaE8BNagtkkiMpocXVvAKcERmKtnQ3MUkD3G4exvGAdasZNeD8Q5zu8Ti7SjVUwVKqYs4W",
  "key10": "2mW5jSFQ6L7LhhqwZGJFxbX8hwkUAhXLpG2WjgJ7DHQMHTPWnXKzXizLH8puBDzcUcqGLmvzf67RgT9YUM5gxu1g",
  "key11": "44HQrkw2RZXwZw5zsMoZCSzmN3CQRMuWykKyzkFnMx16CN2ZZDinSPoNuitBShsJnBeEBgbW4zNLGyBBeSLH6x5i",
  "key12": "3A5SMVSm7EZXWnQbQT4axG6x7BhDXBVSJcJEXJkHFeKtGmZWuu7vwPQcqwwQLJzCvksyvYkZbCyMVbHN1tBs5Egn",
  "key13": "5ZVe2JZdYMLHa97bzwx5BmQAE9kRpiX9DjZqG91Y9H6njZwJ4wz9uFByTmdMRTreuX3Nh4VYnC8AM7YSVD3RjDGU",
  "key14": "2hPcdDQ4ysGq69cTU5rTU6g4rCZbQkNVtSyYv8urk33iPoxpJwZR4qWk7bo886jrATJt5sCESRyPq3QRBSDiyYwi",
  "key15": "2QfFN9ewbm4hB99iEbNQceGzoEDTqJ9B7zQd8fC8yy8Jpt7Lz3MAjGpKfdXb6L8i8qVQU61pABMjGKCELWz4eCsY",
  "key16": "c89nuM9XbByGLK49fHBsF5MVW3HHJmSFADZKiyfXu2n5jHrUTcWkSvedX2wE2jLdJZ1poB89CBkDvKbi8LJY1Dd",
  "key17": "48hhKErRJSkH7MjnyHFoKaQbChrjKxmY46CnyQhbCAyFjKNHMsodyu8wVWq43VVjszXoHgMK8h5vfg494HUkiqJ9",
  "key18": "4z4Mj3m6zcWKgBvKK6EnnJLtE8C5fjHnsqhciF36E7Fp5vw2Y6y9ei1iN2KZeozgfvWJk3p6eiiqyzsUuzsFtowf",
  "key19": "3uRRcc15kf1tTQKVGerqTv2mPh87f4dpEqJY5LCsW8sSaapFUBc9svZefGdXT3bsKrt1Kh5HpactNdUB9N6KUxPu",
  "key20": "5DTbiqs74TJzy3LyM7LMRHG47u1Qk9y5PcyEVq75LoUCj8UaVZ9bPC8JWHikzUcFuHzVRKYsdHhXCnYG6jFftd9Z",
  "key21": "4osjkx4LBePYTL41LXeMcDmFJKQvzDgwUG1bA1vNjkZbrX223FBG6SMTc43EjffkHHu4bvUHNSEepBFjPsTE4crx",
  "key22": "4teSqpTgXPm6dtZUt3KciPXiM4NnEVyKjScNgdoRwTmsLWLuKT371BnqAdGdiCvR4QrSsvfKQ1a2TircuSPJMBy8",
  "key23": "tNn69V8CbwoqGdc7mVw1DQpKXQqucDehw8PjBfjazHV8CNZQQ4FHwGk86YpArn3RUsduLh1uExZvyexNvoexowk",
  "key24": "63Pm4Axg4941ENAJQACnush1Cpo4MyRgYEzSHqdARFDGn83ZHBbo9KF6prD43hhxDZfEv1vvB11pv5sjn56CiPyR",
  "key25": "3bxCjHet1TbXb8kKs4vdChdcqt5RNtsZ8AheyAXYwgKpEYPchGEy5vF6gMKxYyYZeCKTWZn9QmnvDELowDPozGBv",
  "key26": "mkvDGniLuLJPyR1edAQaEzq2w7GubdYh9tRtBDHJyMZdZoybP3Vqzc9J2PdZxVhbATovPCYoe7teSNvSWzhgs9Z",
  "key27": "3jtL6UU4KgCyRT3zd2PXQqdDTvB8kFNQbgbMspUiQB2fsjmYcVz2JRCdp2ks9ExUC2Tf6qTAsYRhZP5QkzEAdHLr",
  "key28": "4RrM3dC1TacEpaYQfnZU3aegw25AbwTeo9im8At3355wrh52mmTKJCfJoPFe8yQhv3L5JZsPEvZXKaRwBdK3nMt1",
  "key29": "3yfru8kyCYtGj7ixVQdVdcp4wFgmJ781ZMvuNeKu4AxzadNJ8GmNQMWghV962xBPW6kUNqQsRvszEYXTSdu4AgVJ",
  "key30": "2YfntA3BuuMQgZvbFkA9LEsfoxq2SMuZXGFPNseBW3Saim6kwuy2XBYZA9XnHG89xHG65NTGedymnEJHVzsCg7AG",
  "key31": "gMv8fwBgSWZYRzSeC2nf3CYwXgmxcyPn64Ks3E95GYbYHUf926cRvvrscyMsTvJaAza26M3HGm5ZPWFrcECPSb8",
  "key32": "3SNJZexxmzzS7cENxx1EqfJh4zB3W5BqEm3xrVa2Vv8mRqLxMRs8zn1CrEZEKdyw1S1znPnbRPfofdzb2N38xbTV",
  "key33": "2WvUUT9sdJD8r25RBGaMyUBkSvprgTNkQ8cM5FPD6PbNq8nNpVZRPS977dpeVkWKo8fCpJuX2DnmyGKYXdRk3pDh",
  "key34": "5UHz6sxy2btWHisHXTcUGqqqzheoDBtqKkooyHe6VnmDTwTAHoLaZ8zrwZXYxt7hcdHU6c65PALa5jxCJLQJrRDm",
  "key35": "afcaABGtyjogv8h8xjddH2yjwwj28Yi9EsBBcvgef9bZWVpz8PxEKFzDSijqUCBeVDFJTrJG727v4fpAZnPf5Gk",
  "key36": "4JSLHPX8VStdjKER5U5k6T9QxJwWQmQYbhkGFNu1ZKkLiAvGytf3vUjKwwnm6oG9TT7Xi2uffAd7APTKdHMriaHx",
  "key37": "5VS4BurjjynH1T9xLELoJaDnSFLbkEopeaRXPviDha5npWhtFaN1SnnfMbexLzZTZv5JTsywbvJtXLSs8NJea3dQ",
  "key38": "2oGrwNpCJ1g6JhoJNSv4JM8TEGoSyLsW9hKhz3thviAtVewgCjaLxSytxcRb17ovMpoCRBgVtySE9V27ph7igKYz",
  "key39": "3JnpxSxcoqq1F6biYu8jm6JoFSJBUnpnYkVmGzp5jDq2E7vTL7Pj7bHST6hSAWYHe2uKeV9offZwntr4VXo4tnhd",
  "key40": "7oZQJ1FQsJMtm1ysU6gMYDsUvWqg1z2MGeWjRWKUR5TEJbrcgczertdcWX6Ko7WkQutSmjvE4FY6pGk76PfTDJf",
  "key41": "62ew3zvYpTmrEnAPiVetUsg6jd9PRxuke6exBg3PjMf4xeGkQAUb27g6zNPUzsqNDRfwBv5D1mfcgofVYVV2Gn4s",
  "key42": "NFz1r3ENQ7ERotrBgo5MjghBt3nKBF2Zve6sTNeJCHMmLTVo7dkD7w25ReY85aWMQgRTo7zYANLEP6tiYsuoSkC",
  "key43": "64ocFoQWZ79F3F4ZtZSdNZbN3LB92DyLzEy6dSZgtvtXgXwqyxQQKbtMA5Lmtdt3atHCmiSiEAj2P47NqFi5jrfm",
  "key44": "4pKMuvmcGwK1ghNJXQFpVbwE61xoFM3RBcsZ1AUhUBg3z1sunD8V7cCPSbFMPAyWZxXYYDJiZpW4Hd3nrRxG6hf7",
  "key45": "5oNJ7kvNRwkRHhN9gCtHsneNrye3RENa5uEzUgeZ3JK6CF72auhYN1fhpe5LTxNfJDwVNixKb6MLvJJ5ACsVPinF",
  "key46": "4qkvbGsALHU8wUeTeDyAeTt3U92zMb2aUM3P9gYVMWDgNRzt4wvNK9QBzWBEs6LuhhJzcmTW7A1XmK4gQS2zxE3H",
  "key47": "4TytqP8ywJCmzx7tK2gVGRp9tJh6qU6r8CSadgXRdiNL2pj6VBuUbSatrd17cVLPRWRjhVFRFNdacoZEvsSHMHBc",
  "key48": "3uuKj4bR7aEpZGhyjqfgfBzi8vLYsKeVXu48fxKEhtCTbDAjViGu2jUEUNwShUdgbSFic82AWgBDCvhBtn34fFZc",
  "key49": "sGr1jeCtEYRiH7ByQss7UnCj7aDWxMGMTYTkvs1d5x5Vr7ceVYvwQFJfhBYneMZQo1h3dszzWCfFDNounP5bUNG"
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
