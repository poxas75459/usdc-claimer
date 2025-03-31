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
    "3yzHDTTnC9wM7nEGu3Yn7JmsWZuvT1bMPkvghc2TL61qLVRpfCJyZ1FjJP7AE5ddxaVemoypG1B6JoD9Sn4sd3mc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rT6pVMe8uY3nupCkiM3kP2fSdbPcH2TdqaBbp2D7sVYHA48SGkB5hgctzpwoF3jb2WiGXBb5did7FRdR1Lcunnu",
  "key1": "4kEw2Yupei3SFeir4vsALWmN9hGPswmue3U67XfW34NKZyhZDm7qD5ZfnWENyhF316dbzmQKkeALY4sghfrzpuC4",
  "key2": "2PYNEyj9g5mJsvo9L4A5yfmsRRFuNf1GK7EzFkHXfZEMgNbcfHvoS2qrj7FQDywjZY2dZhz7WdzMjg84fwRPfFu",
  "key3": "2yMRSoDt9sxfgD5eQShwf8VfT5KNcMzkMzgd9Qh5jewJDWzNnKbiHBR7UsDs5mAPMamNGasZeagmHYbg1G5zJQBK",
  "key4": "3rS22vz61CRrqYPF65yYDA4M7RXxs8H7YqLDWwpARFujkHBMAH1Y2gbjjJe5XJ6ma6gRj5uSn361KfBDwC2XYKNY",
  "key5": "3ePkQ1K4kx1rhWn49sBBMjeXNfbvBt1CUozMKbWhXt5TZ5e8NCdE1CiJdeWyvbi2Jwzen75nQscXYmHdKVWK2BKr",
  "key6": "5HEfFXdzCrr4jLyCbgtX8sDCoXo6fnGaSrZPtuUa3MNaKPhkY1gdcC2w9pdSDUdUQApjug2QKu9y5JYecQ3wiXoA",
  "key7": "WMGAXwVUhEQTV8NgJL4YmwUsv7wABetcn84M1KoVFgm5TH1pRZY22898z5rFxRLGTbwE9qpb2dXdYg92pXHsLMK",
  "key8": "4mK98Ma3vPrGumgyE3jMWaqRo8FrJj9sLfBHJM1HHYoCU8cDvdEqZCrMcozZUG2LijZESiuX8TSpK8hdCwvujEiL",
  "key9": "3ffiubWSryivu5Z7QzjLz9QQESC8FhS9tuQzVpBnYbnAdkhoMhWtZ4x1japZenWnjjfWTeNSvS8cHYKhAzn8gyCm",
  "key10": "xK7oH7eCNjBFxFBeW6FCafoRpxPohV9iAXvLje1KUXTFiCADJQNpcURsFKijTyC1uX1Xq7iEJk919PBFZC22Q8C",
  "key11": "VnZgRqBeEQv6uxHtoSzbtzWHo6rjtyapBQjAVGoQ6FB1tUoLqWVjdFKnnshjZg6AGPNdbh1BpR5b1omQASxBeJz",
  "key12": "2TD5Jz3UjdnXiWhDEnAPUX8MwwCedvAydHmZnXkW8JroVKvqE5eLz4PA1KAi2uPGEzg74i5R2F9Q5Y2NPUhM1ePx",
  "key13": "3tfWoir3nSjpwkeKLzvHQmas3EjYZqNznFW5MUJbWtm5AbJfBSGiujYYY1VADTK6KodmAQHmo7gZeXXPgiqftQ9c",
  "key14": "5r2gFaRf9rxe3G88avVE3rLp49UmKphq8vEZVFfqWf1847x9vJy2w54hGZSPjquixrUnThVbE9sJLvjAaPR1tYzs",
  "key15": "2Dnd39x9jk11aSFmmGRdyezX2w4fy6JnNjviV5R9hH5jDPbuNPXTLhPcZyeQv72SEQp1ARGa2hhwgV3e2vWjnBrf",
  "key16": "65e9JZ14nUT62E7KUs5MTQ16BykZeU4ZaBJ2WQ9X16AMFf3boMk3ds189Yf3rH25JqUfPxgAod3k9DPJfRvNojDs",
  "key17": "3TpEZEoEED8vg9SjbTNNL44Kj8RoF5cELMtSzv79gxoFVGiLmWjj6aR7ByhpThvScnKHMdcRdE1PFXHejUyLbNaE",
  "key18": "46ySGYJqWyhkPrhx66G9JSTmrcJSQrLN5ezEcimCPN7L8toWv5mAUWybGa78vTPN8GiDcRhhFJhcNnPduGUWSCNi",
  "key19": "3fGfFZCV73F7uW1KQXKG6eA3bPG34m178qtFoqGCdhm5rA4B4y2mWbXJmdY2dE5n76EhrwHV449z1i824vo6Pk9e",
  "key20": "5Cc6EZor1KhsRqLizqns4wH5tJaWBm34Uy1PnEp84tyN1oyGNd7tTxYbBGgoHv1bpAt1yss8aoqdKYfG2pZtjmbZ",
  "key21": "3NV5B5gFEAis8griyBWfsEASYBdNXtW6ae8PLGGcHTxvsTiRH4PD74Ed9qBymvYkzNfGnPDJL3W2CVF38NPrYDtr",
  "key22": "5wYP1bZ1f3FjSDaXqHmerFtZ6EfVDmWTgKLK5AZeNWPzURDk8WRc6W39iXK1p5SK3bNm1yDtMVCXBDVrQj1pHMCh",
  "key23": "4ha5RJWzZvXKLtiKjyUNmNNSWk61fZSX4VvwkVjET3wPJqRV269S2nZc5SV6qjdtxHHq84XD49sBTRQkXBgQNjK9",
  "key24": "62XDsfJiY3QwyR15FbQb3Mot69UhkhpCENrDXWaKcgU1T9xSCGda1GZpk8tPDcnZrmm4mhm1RrBs2WQZNrVTvoDT",
  "key25": "AF9nuiYRsrtY5RCi2Ju3e8yYE9Kf8njpdnX72MnBd9EoCiS815c6WSkUvx6LKEofSVaLwabM6K7Bw5o3RQLPrxe",
  "key26": "HhLcM1pc8umT7fBJcDCpMhLRxXi1WT2YCeUcbFpypShZbsUDuD6MpBQMRxJHMTSqu5xUXM6gXNrZePTn2z8Q8kb",
  "key27": "5PD3KmwKJEKmk1DYtr2a2MjXXGActwNHLwv8H89H5dELfsecU1SBkpEjauPc7JqxkBqfqCsyufM882D9Dm1KQvqw",
  "key28": "3iRbzVGVGUtzmsfGGvZE3U5honFa6dWR8z2eVkge1WEspGb1QrgGenLT3JJ1pA3QBBbbprjgNnn4iBFpA97Zjq7Q",
  "key29": "7Ng9ANXXcZnTQxS6Uqi3ACSPP2HDU2PqjZjUV2s6ch3HX3yoMb6JxoJEcukj9iY7xZ7VFnrxUg3hU6jy4HfSURz",
  "key30": "4CsW1PSxLyf5yW4NA7qptmVTEUBUbSc5eT2is7QVuE1Y3MjXE7DHTHpvyiCiSumY5k4uQFofTuhQgqaPRomKHhYX",
  "key31": "41sJHQjprFxdJ9cVif9VaE1fjSNUnd7Pw7bp2M11eHtPbYcW3inFEnZJHzEa42FnRukD1r1CUNX1SrRhJHdp8iN4",
  "key32": "8Noyz8zfM3RbyZY7sdzrGfQ8JnXvfsYqgUnFHXsfxwkvfqArwcX2qrAExVuMaHyjhnjRzrTHXYtrCe6nbbD9HBz",
  "key33": "oMSjyGXKavUYZPPb3Mrgzhzf77XVRzL3AX6ekP76DRd9wFghnbVbUqF4XrJt4sJnbaCgsUeKhFnEuEaW2ykDVM8",
  "key34": "4ZzoZaSrWixsj3RXA1N7oDfXRsrFnjF9pEuxQaivnSM1rBkTBt7Z4gzksgA4DJJmChZnikz36qnueNnrzCEDmsek",
  "key35": "xQDxWUVwLxgXT1Sve8HAZyYAB96Lur63G81TYaMae8time3hRMCTGAzCWYAwah1tsqVUpFm6yx3LTCcWNibt4Di",
  "key36": "42KqApLf3am9hUgFBWLh7XkPRrk2WyJQMWr8TEyJHaqXVZVAZ4MxgeouCzc4E5wHCSBgFxxJ8KFq9s6yNs9DKaHY",
  "key37": "2Qn3hoJWbkmnULWUKmkwCgRjBVrM6KeGTnd4oD8JGwizyHegLVsyaLrsXxMS9Av45tdy8MXnRer3gRBtwCDYEx96",
  "key38": "2zpbembPfCsNurRRQYVJqJWsSxtSwDsFoDg6U7FpSxpm39WHmUEjxPfBrMRmKM55ZbjKFngCyAHShctdJVgN3kRA",
  "key39": "RRjWzo4g8FqgWFAFrnTKvBNFriVWasCxf1E8WNMYtAWomkzUzGZAEZhW15mfJbKERkD371pmdpfE98J3Rr8RHuH",
  "key40": "4gRogSJGxdTTCky5Pf693bVnhJEgAtWgn55Vi56TwBrsDrrz5z3oYg9Ec9KDak7ZfJwVNjs62iFXY19gBVr38S7f",
  "key41": "4ksSchinGm9g6sbsNXyvJHqy7UoM2iwDxWPhoq54vkve5JapGMLvdRwMfoP1V9aoM5a9XdgSn5W41nhPkFUbYhnx",
  "key42": "5hbsVazfmQ9FdFgf9dJX9Ywbe1TAcL9mkYJ1erVpSKmY4dq6WrFHwddvc6QJp2pPx5edmVqYHCgzYU8mXtU1LAis",
  "key43": "4dLMVuLUThPAqTJTy33h8zJVVAxEvkWcuSCPtJTFgQ5BXqeE4167wNMKZKpc7JVcrifmLQr9mvCpGHRKLvrmmgRs",
  "key44": "2iS5UujDwxYBY9fNBKQMQGAgv8aKv88QQyqiHYzExG6NjmRRArhJ4MqM2DgeAcHMX799DNmYA82EEEuNX2oa86Eh",
  "key45": "5Ye3VRDFnsYTA3x3WpNiPd3x6rwgxYUqyGDRWaac8RPVQ4ny7Pw49ronioFXVSJYNoEys3oYC36ijxrcnQQFdrk8"
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
