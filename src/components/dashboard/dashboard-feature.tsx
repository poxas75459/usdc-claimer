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
    "48x2pdZz8xobRNdparMy2ggfgXMPf43U14sDpdcqbGX6ZiyUJVgDGxxaJZtk2pDRLNE7txAUvLfEPtmgpN1NWzqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T2QU8vr46n3h2bpVNwp1Pa4wqHD5eQSMgyTs67p68wCGhpCchiE8zPuCBALxk8F8HgkCf1PTVBTG7JARiPnjv4L",
  "key1": "2eVGamYa1AHLssYTfJXPLqC1eswVuhsfDPT68wJ74u3XvsRJz4dPYUUqEKRSNNqB62NHkzsZyrt7vvdghgDsbDHh",
  "key2": "4vty1x1TrvNer56bhFmad5vPQn4mvoMY59YcvgPMZ4xUii4xja8zdeWuUZFzGK2B8jWNfU9Lfn9NvC4hkq1LQWWH",
  "key3": "4cAzJgPf1jBQB3G1zBFaWixzDRzsfgz97GLpxLPLan63UqFWiJhTcEQncHpcTnBiEK383CEzfb1QqvdCLe7SEes5",
  "key4": "3To9ZgJUSj6hzec21E7F1ZvpTNxwxCgWpnnKvfY9mgupwsqYUwVq5Bdnw3ESAzJD1YWjBE5RN4LgcwVLg5LvKuWS",
  "key5": "52wra6QfLKZomnNcgVjNGESAfDxDbDCVs3B1csHizF7pHvzWgaZ23gVfEyQQVxYawrXMvor8iwD3cZYpmUcc5iiv",
  "key6": "5Kvsip9ZQM6Jd1crB8LkatBYXfa26K5hp4A92Xe9vkhoiCPYd9b8B23TSSnB4XfmTNyEGdpdv4XuMcN8CVdK4XBR",
  "key7": "4wT81WWtsZbY9mL5T7YGs8QJ5KdWkFM4cTfy47bQy4Px6pq9ZvFkVPfKTo4ZJ1zHBs8Dkgjo1rKfSqAbZaprycaU",
  "key8": "411hj1NdcQvCVk1y2bBjx2HFfC9jQDBomBskL9HXxDbgtbnST24gnh3gxmQyhiA6qF67AM3t241d4toKtFiWdUP5",
  "key9": "4NA72ysv2vMwszdZSitjogCPQUVYTFjpvqE1pnyyc66ajv1GUqqZ4CEgJ8A8FCUfvT54F4Pn6n4uc9RaPdn9EDzN",
  "key10": "4pxVGXqfh1TQciu3ovRREXULGCfFQEwUbjEokTRAGbCiae848T6Ld2BDuF2xD42y1iuj54dMB4PzG3ggNCYfCb3a",
  "key11": "4guGMStjPcrMNNavrS9JwYEkn6SS5zTAx8vtYxEFC1DAvDhJn79UTeGkwULBdrqj2XF2qR8onvZX4RjRiw3z5ZTP",
  "key12": "u4daeoX817RqmcjAgF6x57bvJHBNLeB6qUj5R4FwRf4ZNfYfJ7gjGGs8eM62JiC8KXvm3A217DMeQLwQ5ou3tCZ",
  "key13": "56E24YNPuTix1BwYcC1zhGjvA1BV3Vmqa49iGJ7SJEkBNKzXyBdpGhiMxkQ26tvd2o1EgyzYpx2EEYNamW9xiR3g",
  "key14": "4aJNRz2bRVtDaBRQCdWqkP6nk5bV2Xf5yAkpCkV4UY4bTwJ5DrpzbhbyWCbLkALg3JnnE3nppdTQZbCE4my21DQA",
  "key15": "2eGr9zfpRzmGvPahi467D8p1ZSqazKc7MPBJi7Fz4LLbHjQ2sKkAEyBKRNPvCoV6GXH1KNjaeUxN6GkKWLR6WhFo",
  "key16": "5XWitLeT1aVgfcD9MnWqAfKAZfyjzv8x5HJG8MLYd6ZE9Ud7f6PH3bVpoZgiFuwCGc7jvvYavKFc8AvjerPESdTP",
  "key17": "5kEEazfMuMkPqCsst9kbDEkgqfpsRi8k3JCzXttgwpqgu3HSJ7aTA83iCjDnFcmJYHwNCmy9PrDjNK3q7qj64VYD",
  "key18": "47xA6dP1BspQmra1RPafmBw3mdxMv1ugADceKAM88fawWfT2wA7eCwt95dT32EY76rZNsVjTh4MaVwvGmzdkTk8U",
  "key19": "5s4HssM8eHvfzj7f4UFHdc7L93oWMhzD25HFCi7G3AMizSBqAcx7ob9WYRcDSnV53BLhz9UqWyuWtkyiiSZvycgi",
  "key20": "4Zm3bSQ2WazMERQHu1U2WTycaf4erhqTSNJiht9jpuSnzvHquRBrpxpT1Ui7CAENmJJoMeiQ9pJ3FYQGxK4gbG8",
  "key21": "5b3z16gKCVNJe6mJtktveA4RtAFu9JoCngLVYLqtpobdYX5NzyuM2rS7RVq8ez25qKSShb3c4F3RHEjosK7kj4w6",
  "key22": "4JRV86ZkcZkWHRTWDjr558iiNedug3nuPvpxRqWEtawu8g4KY61wm6Efy2EjxPGu69VxbSbnogrMLfTmEudKcpJH",
  "key23": "5iAdVaxqj2j1Xhmgkedx7PZqUwnq2nvCjBqm5F2hf6m2khDYn8Aqpbc7WWQ23EYd7LHR4Dcw53L13Wepxn34Zin9",
  "key24": "36ZHuRfoKaStbMuL5WsPZxsvFFbCdeRDLYnhyjh7CATiuxeXjCuMtR8mCPdv8YB1Fe8kASg7wL2tiU4qva4MuENP",
  "key25": "cXsbFkPbny5uTg9pQGb4J8mZ3SRL6ssREXeVUcSxLbATUsRdvQVgJvfAmHc3kKAfjbVpcEzZNUmX6T3zUWJA1yf",
  "key26": "64vWipm1QHcaUd3YB2FBHUc58HsGH6HPLdZ3st2SVehyMPkYkyMDsuggsrbrRSB83AW9Gwh4ZM6aRvdsVXg8HmFk",
  "key27": "5LAe9MFnuptpPZbf9k7cc2wrm1n6MooANyGdQaD3MoHQiznRF5RJ6DaUbCF6Hm25bUWUM6D6GXKLuxir8NouHmEE",
  "key28": "22MroWJM1TsJgkJJbZ1gqW8vwzi2Rt6z9BHbEdnEN7gQMSGcGb7WXyn7eLr6U6FnsDykjzHKHZFz2UwHddgWxgmG",
  "key29": "4FB5GBimyX4PYREhvCJAjYJh5upVBE6iFXe2vN8gRWt3ViLKnxoy9ERKcqG5ZQdF7xshtmxhs6RdxBewczigXVRF",
  "key30": "4zhw7axUmBLKeQVwydpG6kE6pENRTb1QCaNezD3gzgSimpTYfE2skkiwRNW5vEMZREmsqyHDWH97YQZQ9Z3hKMbL",
  "key31": "2R2T6G4ioBZv5NQSTQvTUnHesbYVg1x8De5xbXNQYfsFbMx3mmptPrkiwpZJrg1dHfuMHDJAJzpLGTH9VhfxqPzv",
  "key32": "5qaJiW88nx92HD4qmSdk4bvSeRGLrjrr65Tmr1mrRNGaErCKLKgAwwrHoaWB98miG7CJ2whTy1QPszg8Kgqf5m9Y",
  "key33": "48fzeQCfNf2v9jsXwMw4vmm9UBQk6YDvJXFP2xHBgjuUL38jPC6gtzZsNFBrEuc4vEjQ12AGRv9xLcZWsRNxEpV3",
  "key34": "4oDhpYUFD9z2Ky33p4WcJAvf43EERggegoA3jamsKL9bPGw9YfJcPxL1V572LCi77qn6a1aR3bcAmsnXAmVnK8Ro",
  "key35": "h8g2fdSkLgvzCRSCgfsK3F4LS1qKpDS1rVogkhY4cZwXW6PaCjC88bmUeATDsab87vxZ3XoSpjLGTt3dTFNaRyA",
  "key36": "4gPL2sPUHUfQ75YUDMDLnC3RhZ3TjMY9yD7oLvvUUyApLhRKJ2esQj9Q7WjkZQGGVMbSqrCdVro51xdkcCHh2mSF",
  "key37": "4bACXKiRTsdm8BGWARfZr5uqjf2qatVE4DpszfFFrCtF5L2fCtp3MiV2eE8jxmAAz5C9tcMvTrtmXRBPmJh7nG9d",
  "key38": "4EEWUgDuYZebU2Y3gGtcmDj9AtbiUhoTfLkgia6UAxQvXGK8io3CB2xzGKrTyVsqawVtscnXdi7bqk7cFd3mCbWE"
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
