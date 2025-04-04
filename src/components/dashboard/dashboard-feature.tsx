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
    "3xcAxiC95hrTAM4bALUkrPRFn5nRBMoNKy4fAejdbjHwiYFc4L76zuFGtNmZTXhrj9A6DMHxWhvmL6E8eBn9SVvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iyGcDqr92oAHQEXckQjMWrGDHPyX2g5W6YnQpcqeJ6ykVDqCDESn8Ah3Fm1dTAnRnqBuTsTaE7PcdL1faciRu7U",
  "key1": "2oaWRBxZZiAfmzT8mYRBGR11R5tkJHZMunaAgsnNVQDTxc42km8jtNPW4giGph7pL6KTgpJSCfxNzLdGhPecHo9Z",
  "key2": "3iXgspa74yKYqRkRLjLE2eXRF4Y2wffobzrnHuX4wu5vZbjkg7foxeEeNRF75JUEhF97m9VzuxHgUdaF5BdVRCq1",
  "key3": "LLZTt5VRded16mUNydrywuqkbi7hLsdTTyZ5ETHE2o2Cfe6ULvk9Y1Q6FD8BjWFa6s1gaX4KiJChP2QrsUotfQC",
  "key4": "t37mMZLchH9NvWBJNSnUX1G4VUeHvYqv2uGAK7SzesNZ1PsGiC2ky4ZKn2qqxtwoNLGQyZ2eBfrBQU5TPsqhz79",
  "key5": "X7E6Lub4cP3QgBSvQ8ST6NsivKFvZvTjVwQEymemHZwkFnwuiV3fZbfrW61PTbdacF6hanWPqw4GGQrxiH2nd6s",
  "key6": "3u1APYZ1WCBwHYyi77hvUB9aeBaGszpYCHfcJRDwQ8vjPb4xS38nivhQEYRacXy64e54n5RFvSrfXnT2fLfFa6B4",
  "key7": "TqDLH7Qpqr1SG3wGrFxCubYivBZrc2qgUrEWS1E692bmaNYVaRaQNLtXc5uZqNdfh3cT6y6trnDjHqdXcGtVEXK",
  "key8": "5T6CxAUYwN2ycFy6AEnXmMTQtHyWK5VFqPQtuKEeWdJZwKa6JYnjXgkkjxLhMCFTy9EP6M9BJBqN5LUe2Fse3ngP",
  "key9": "vN7EkJYbUqGfH14ziiThB5xZCuwJjzekL8bQ3ttzLEYEbFmExCp5VrQcAn7AB886Y2gUk2RXXLc7ommVCoRhmbh",
  "key10": "3DuBf32YFxgMsx2qhbs2Ke7dToqvjKma6U8Jw6v4BYgqBvh1hwLeMa5bPVGBUfsbnM1KFcL5tfsF6zoaN7w7NZxo",
  "key11": "2BfQrLtFWXnnaG2Vp458w3aVW444oCG4b47SgNpYgmtG23UbHiJp2nYyFskKUEGV5r1GUB5MqoHbyTt9ZKQpPs1D",
  "key12": "5LkpUVnTTfJcax2Kwtb9uoFN1uCD46WPoaUA9mD9bhTWHYfyXMH2f9Q9JWzBQQitLPyWgLxLywBmmTK3PwULG6qi",
  "key13": "xsRXLvAxseFXRarqDLzwciutsRGcLp7vYuMEJtYoDhuq4xa2jNaYoZmaDk3uuA81wKtA8NjoaNU9sksNKLZJ23T",
  "key14": "5NmqQA3WRgozUMzJe3CtcXP1umQCRLnVNBTPLZXN5f651ykps7PV6Cvvj2N6KNPj2z32Qbdmk4uXcGvKQRHYUMim",
  "key15": "iKsJ6SkQZBWC37R2ocUYmqBpBAsnNn3z1Fwz9h69vR4bkk1TULZnWdCsqn5QM8B2ckXVcPeAeVYngSEwrUmMH6u",
  "key16": "3Borigs9CNAmcreeK2TYBgStCVga4kWzzqTmvXutvsQnGY6M5P2dYNtkFSjumdZD4GQjF8pXwr7sADVDb2sBEBgv",
  "key17": "5aUVPNNjp4hAzZsrBVKcuUHDfr52LBMc4T9eU5VWzFnB8zt75Ar7tKpNSfNmKF5TYbwxzAUbcyrLntZSokPBPc1m",
  "key18": "5b33prM8S9NKX6gkUMiGS2SbDehB8uudfNkcPBVb1SJdoWaCfaX8iqnni2MBLpYs8bHKzDxN42ZpsbAxbeP5eEH9",
  "key19": "imWtnMuZXqby7KeweKGyqjLg4XXtCjHdJYVT7xpd3vzWc41uEmTLAVUBwRKwKnKMio9iavDqX7MaXafRs3WhDdj",
  "key20": "3EBVbF3EeDF11fEECrtyP5n7wNkN3tC9PoCEqxPrKAY389DB48AZjTqauNHTvwaZ3hYj6hSHBoDhPmVkmWQMqt1j",
  "key21": "5yidrkcBkwBXVhNsFFwHJgZxbMucWiUW3pRyXRkGvLhvgvHLSnytbCgwhohiA8erH92Y7hv5j6KGsEqa5Fewks68",
  "key22": "2QVrkcgeVmEpUo71w59wa8txZrHkdb4HMoxPV6CJx7ekpfxgKoyeTicbXHZdhxroWjrPyrDasLFYZD4befRzWwpg",
  "key23": "2fcVJKqaa47tZdzyzjo2sApUafxGRbbe6ES31SXAQKWsoJHvFfs1BMqsa5MGx1eBX4ZJHcRad795JCvmfLyb5nX8",
  "key24": "BpJMBs6p2eS3Mvy66qur3mVj1erCEF8Zq2jh8bNXEM7etfoPqLCR1s2fo1jS4ZxEiogKxiTxp9dpTSDcX2wMWY8",
  "key25": "3o5TiMfbueDiM2vQtoEpYuBuUACkYdUqUBoXjxELMUP4pH5zh4mLeMrruHusziKkrf99yRDxjjKMJHwpjKkDsCAe",
  "key26": "kiromZKCUC7PckVXJPLuBgWkEAFqMpD1A89HDNX6FxVi5j78yxWUkVt8fpFurmcaDfmfDPjxbYj9gb1TF6jPaVS",
  "key27": "5HawvJHhYu7EBoLzUPkETTaHipqqLaiASEWr658Y55WTYG4dXWe4Dc4dmKgTFai1xrVTpZKYrM63ywaVFxFpvHGj",
  "key28": "4m5Gk9Z6TBoXk4Vi5MVD8ZL1SDEnmrckGNLZwUD98PNvkvFWVuqGnJboGPSHz6zerHVCaVNhDVj6uVZKB6Y6Hxpp",
  "key29": "3CoTF99tvzrFvqPXnJ92LeQeMWozHWej1sfbYPu7vpYZoayG19uHdRo5gBjevWS8PEswef2eV5zgR5Jvu6udYxZN",
  "key30": "kfka7FJYAhVv6vQcRVbmwQVi7ArNUX6QvoR3xfMuz8iPxJAwnXeJsoqWbkQU1ys3QTXLzrsbxVK2qhwV84pSR8L",
  "key31": "8iUVRiDaaToxn2fzBx8otJ8sNkMcHbvDUPtE9aiyEfDeyaRVqZaCdeqVHp5LurV6Gt1oWGvT6DF7WbSYAA7y2NM",
  "key32": "2VgU2SefgE52xtgrKZaJAQoRfqwCRRpA8tjFbQTHf1mD4hw9Z1XKkRtADCmnvt2Hou3vRWLPMrbevt4qJ8qi5CgV",
  "key33": "5f8D998RGHr7FMYT6n7Tx14G91WmqMtoPWGGkJbNQmLz5GTofh3C5zKqNsz9PGY5QhigEmjHCUnMFpxsBKNaE77z",
  "key34": "3TJbv6DkY8B6LDaZxiVPCegT5NpEYxJxqxaFwg3pUoMNERyQ9FgH885E763e62U5oMy3LY3Xe2Pu9tTKsjJyJjxf",
  "key35": "zLHZSJSboLVnN5x1fm5d5o1D7RcRgBMDeLoFCfm3U8XBaabNz2P8u3PisVRpZBYg9o3Z8AykkNPAVfMQRWYGNU1",
  "key36": "4FwE6cWQHLfzyvc5EXMTMwrBBAWqiQs3n6WuVs6K3LhRmAy2tJ3vZJBJAfSoUJ8LQkxVzmNQ8hDAJdkqLLeM5VEj",
  "key37": "4GDDYDiqnTZ2MrkrWzf3uNtSsjwvytp5xLCVZQBCfPdixnnm8Ckqg4H8WK2U7jgZcSjobtKTEFWNnZMiNJgjWbZX",
  "key38": "2YDSMJaK2o74S1pqkBjqv1i974EnL2ZMboqJ6Tvm1jETHcVqfp6MdsZ9NueKzaF74sD7qvizinokdphsH3Z5FuqX",
  "key39": "WkA8PALuqH379rscoUQD3uFU4FFWWXMYWZVXacUd8nsT5oNNKeWUWhuSArokDh9CFt8TNB2td6miPYJbko7PPMW",
  "key40": "4HMcRQ5dLLTRgL9WYdwQk7AX5N9GC1rZZHjFXjs3KXWbmRVc1vJUWkK6YBBPm6cTwZraY2xjsrjrwBEEsGisAwSc"
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
