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
    "4aN3mhz53heJCgHyLHUBWrDbLXQXkDr2D4yeXrHduRFrEcdE7aTuf4Lu8oKVnQR1MgXFTXqujSDyuf2MHGQQ64aW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VwCmKURqxa1uBeww2xyzzbbmyTSkhJKrxvxArbDxGecxtkMvUzTYiy8NvxaDFKtnMhBdk3SsnRrmR6muGs41ezH",
  "key1": "2Vgz9x6QLWgL194ZNUt5TEcebXKGfewg11JC5VEtwE1AxwzSPLzeX4XbfvhMNpmpD8DmN5Pv5ntSM8AYtVehNq47",
  "key2": "2rUz1xy3xMzNfihSvavp5cTk794SsHsHtTGtX1dnfpLQ1sLpA9RQQ6VCzrn6PNusc48Z4RTJgumQZv2375RKk54W",
  "key3": "5r25XjXe17rfq8mE8YV8mwP4TGxv5fT6UBecQ2ZjWAo8hu1DZCpih2AHcR2hxWD2m7aRmbPWNopsJzihMNFbBtFy",
  "key4": "SVtzQ5smmdoeXheQ1mRzZodV6NjzcQYukHALgfxopJxucKYbzVC2EuaFWr9XzBwCevWXAbBy82Rmgi8kKDXDMRJ",
  "key5": "3jyeXkuGxc2hcdAcZxmwLoHXcWvbQucXsdM8UuchZmBL6EmRdg3UTZ6aufEcssX7U98Trxx1WGBhazqrCfVRriR7",
  "key6": "3rUKP6LvAnArg8kNJzEKLHK5kcr5fzxJ46HhRsV3NwZmuKUdjK6EGxfxKep44WUkcwxQyzF611QxuHaQSWNxpUiS",
  "key7": "4pn2BhyjAzds3D1cVDL4TB8VELPSpMskEw5JetcKv1WH3AS7k4X3CbGd5crxiw8tVLbinLgVNkieoipzmjtuGm7S",
  "key8": "BTpYYcEU5CVdSE1R1WiVGTtXufXk45etbTZetMmYbpt26KjiW6f4vzQvnQv7vtvsKFHULumxCCXSmWQvVBK1GXA",
  "key9": "4FbHpDFmKd43bEw3dwPdeBtTauuhJZd9oVEnbb38ehWQjJ9jY6ZQJmDczYQtxtQQzczEbYPDBrwXnubJyZAQBYU1",
  "key10": "4mGXDzWMkaFT2hGyjDUXYvQZZPqMBXX5BP4SRwFs6cSkUwg8WcPX2ATaLdBVttPSCMrS6gH8Zv66xtw67Av1JhSK",
  "key11": "3xnyLH6T2FgtZpCsgEVHkQg9GLRx1E79bMgJH7RxqhiMvaD139BS98izRcWRfazdUujZqeyhEKwUYBkNWwTULWXV",
  "key12": "5Lr7Ssr4LVZ3jasvNspPjUjKk3zruWanwNRut2Hd5Rxg1KawLDa7MdatxR56tgrhr1Yz2XBFgvqSR5qJqmNEasAb",
  "key13": "4G6nTURwRu7b6TGfgnfi5ugK7hvyTJSsDCq2X7zhBonnRLxDuoibuxPtzxW5WETZCdSg71wgNqC834sGwhMosbxq",
  "key14": "2zggJ4m9zaQp4ixDeTQnL3CKzccLp8RLPeP6sgGCTGv7HqPiX3WSHau62yVtBY6zFuLKzNFwHvVakCt6DfwQMGuW",
  "key15": "47BMS26KmXc82F9pG37s4yrf4H7u9DmeVPUZ74ZikDVB7siN56WUNEtudAqR96b4ANJ4tNVDZfrYyD3YZYccpqfD",
  "key16": "2JF6FaAi7NMM9tQ3LLfUEPXtg2ubNscfFe7RfFQEZDiEcYbUwdT19VhygHeUBA64qgqmTJPx39LGt6jzd57dvQji",
  "key17": "2xgSPcoqJbWvXbUF2SiMoQWjNkBW68i94djUE51f4DGk6qrEBaFXV9o2QbY5wBnLkXkKhQfE5s5wfUqEmtVHDkTH",
  "key18": "4SD5F95X4PNhhwzFGUv2R1CSMcguNH61JoNhjbJmPt7cjYKTPNCDPigfhL1St45UoDsPWaZ8CRxTnGnFjkCbNfwY",
  "key19": "5whBAi9FMYiHMtwyqtNMvmf2BUmSfC9rxPjvw1hN1dBxMhgmaoLDLBviZ9sQVwZDUtTueiTdD4TRponbm88nRe54",
  "key20": "ZmzFRf7pxYFPv6e5YfavytrtUtsToW6y3Nxar4JyUdXoQBbs4j7tLtkg51gvgWpNnNoPDS3VNnKj3snu3XwhbMj",
  "key21": "2tJbMrH1iyJTm5GV5DaZ9hgrEZZGzVFz7jtoHmRQn4zsSRRz7BSXMAKybBXzHCu4dcQCAhKzfzniKL44akYpML9t",
  "key22": "5tNBmyU7AR2YU5vMLJc49Qor5mSS5DfcL5ERjhSf1JyNh5XKbbwbxzrp93fNJ7oe554FgCD8phoKyB5SpCuWVGF5",
  "key23": "2c5Z1HoXkEZXSVftGtLNTYDgNyPDLyfZRfgWiYnwz1XzhhymCbVbKfTGXMacBKKkPGhwKm51Lod375QZzeAo5NZe",
  "key24": "pDw9DiyjscRiQf2FN2gSsWNLU3jve57Tz6pBwJEX3PGXejFL7PQE8d2QG9J1DP76MZNYP7imayjTdPoPEVq51VF",
  "key25": "5GgfmLWE2VFiCspssAoSzEVWMg6Wc1htDhEVcdfhNDFUxca2cmaAqu9NkvQp6jWxmxKP2Fqh2Wc8p5oSvDKyp1Ph",
  "key26": "5fJFzaGTEBiTxibH8yX45Nzb1LEQBzfd5hsebSL8gVAJY68xVBVYCSfoAgjBV1SVoje1X71mxwfEZEz95za9aCct",
  "key27": "5989BHbEYsYi9yBeTHrwoHDhfgRNwTs2rDHbhSfLYJhvLEmrN823U8YuzCsfvJzEQ1Jz7dKUsVjmvc4oY1Gmx2Wb",
  "key28": "MjoizSkbbbqBBNSaCVGGHTbhMkfwU443YLHUSzruV4kYLTMAzKiPLv75ijz9eKgrKtHBKnWyc3LgWrhzHL179NG",
  "key29": "4uFd2nJZNJJiHfy4KgYEkbXzNN2VwKst8BEBFxdTpByp4agEFuP7n1QKRFNRmdiafXGzA3v2GpzwyrwLXsed5VsD",
  "key30": "5ZdwUqS8X4Bj6TLyMxfVXM1ec9Cc2gTUM7Z4j8yCCqhv21D5s77fsnPwAxX5rqnuthj8LGYMLJW9cjbzhm9T4Fpc",
  "key31": "3moFfMVGwngYsdb3HXZrZ2RYGsBW2s3H7WVuxN73vFwgGMsCH3M5RhYHRGhir8VwYYX463CNTjUbG8VYpzgNoY3K",
  "key32": "5nDKibx21mnewGLQcfjZtQD9BUPQH55cshU2YL6V2CVP5YJgZ64kuveTNCRYyDVzRnyeZQ9A5Si4hrch9KgLzfaM",
  "key33": "3WY7U1cHgSXup9WHcediJwjypkeLDz79e1H1gp3m6h78cMufti89rjDesLAQwb1evqo617phcAZ6Bpz4zw3LtCz",
  "key34": "3TnTigBmCnsGEJmUjnbcfX92Jk1pTtnh1vQ3y2p5BvZn5WjZhr7iLR1Mstm2pwQPJMhw1SNyuNMWRspPPEbw79dx",
  "key35": "UdU7WxXi4SUGApkq86mvferNE6YyejYQadwiH1YazVbh2C8AjnoKgGdbsFA55MxhMRHRKPgibgS2dDdWBVDUXM9",
  "key36": "3Q8Rm2C2FRNxLhWfsd2Ro5F5ex32zqgYRr3w657NvefH57NPh8NF2UjHrcciKPCMcuvju5S3zudmJhrJwaBbAVD4",
  "key37": "4hjvxchLMhEjdL9wdusXNE17gnappyWyz6V5dosuPjKaaD8z7HLfYYFtG7tTn5z8tSkdzRgntgLVsxeHTLtF6Vay",
  "key38": "3kUqEtT7ao1PC5wmUBLVjMSDekrXC7FNpNYytA6DmYA7rhp644HL9ZG1ErGHKEHvAUcWAgsCNDggsQG9sURMRoLZ",
  "key39": "5hwxXUEr71PHZ8K8ZguzBzLTegzs6DorhH4F3ZUc2TjTLaq5ZmbiVtfvaRJVnvU2VgBNyjXsCtF3EYax4MruHJBz",
  "key40": "4dBoECgwAJpsmxi8st5djyXsBHXjxomj5z5Y12hQ3Leg71uph2JJBo1vywoFmiVJKARmo5NR3UXgemDSAkBzthKq",
  "key41": "2RHVE75gaYG7RN8VFwLzja1BbSm3rr3TmQrFaZG7LdjQBqKKnka4g5pLagdft5aSuB4RAi9CuTLEbLUY4vJn2n3V",
  "key42": "3Wxai8qSugbzgFeLhrcnykN1ZzzmuccPiuNCAfuiTaRwD8g1LH2L2zDF3mTPJbMQnbky6ocRsqJAtwNVi2yNseJW",
  "key43": "4o3B7TXFjxD4ZZyTRKkgzmZvECZ9JchM6WJ54YVbCbm9cc66pkyFyivu4XkmAwSMgGNGhvriztnmfA2tPkEmgMFq",
  "key44": "2n9SWWF6Nc157ER4jYUcpYALuWVB6yS8xercWrrzZCqH8dG86xhmdu6nFNgMpXpsz7mP1twfSC7Lqx7z74thF6SW"
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
