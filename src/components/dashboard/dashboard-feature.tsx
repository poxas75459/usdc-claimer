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
    "3jcrn8nhm4h2xuXwN9oLRxcGCpe52Pau4ifvWE9CLw4yZob22KtVvmYCD88S3vrmwiboibzFVT2Wa1S3TN1sgkCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E57HYVnqKNgVQHCGW2vwP2bPGZJDag1yyFYWHP452T9HzvDKpNZMVjf6TYFzwBRLEtdNjLWMUB72PNA4JtW9U37",
  "key1": "5z3Cdur7Nrk7P6XAf5XYit8y34BUcpZTHbZ8CmP8McgFwCajJgnQHNi6wcVTppsHkWfn9qT5qN1pkH8gfUHnoHdx",
  "key2": "2kPhhQHnte1xLpYcLhZuTeSj98bmXt4aonFwhnZRQahCASPwWGNDiP74Srgj1jMyvJBqVcQtPmq92vZbv12UuTnF",
  "key3": "3Hf9sDa63ZHnHR3thvfcTZWmZLTayYJm5ZDAMS4UwWHwVb7TRdHxhizBVLtv9N4unDk1dA9Ezj8Lj1ASzxfCfcKL",
  "key4": "2nUmcgFTVyygoSy3sNhNbrsZZwtyJBFU4BSpnTPRBasWCpf6At57PEEMJynPTDwRreZB93g9Kj8AvBKQHjDRH2gN",
  "key5": "2xLp93xrFeBB9J7KHGm1H8q1EyqpyNFCTEn1LPZVE7HSW37c9n3DkbEL3QJaU9636x5pVbN9KrSweK1k6EiDvhFB",
  "key6": "6pD2hw6SyhoqgVxro4dQAtdP4aY5qwmBcuvpwWtui7EhzhpD6JypEqc83qru8rFcUPUow3LQifQKPoQHGRGVBeU",
  "key7": "4yt6pGjb81iKfMA7L7ieNrob76nXRPjXh9DZ9NcgLiNuzRyqhag8opRqKNcHPcNdLWhJ95gPyuxdjoDSkwNugD46",
  "key8": "4GFgrY9QZ9KpkjcczaE8FkTWfoWuqXExNggADXhxt9ggDZyFpZWuUXkdzRCvAJZyQgNv8ci7D4bFqubrh5iiayG7",
  "key9": "9ks7WkQbdXrUx7q7b9E4ZdctZ1NrWkJYCmUuX1P6rdR83ZA4wuQZjjxjPGW2s8oSpRfWMQL8JiVzD2KoreTQoby",
  "key10": "43GfsR8mtqAH2kd4P2JGscLpc6pR3a3DypxWwZYTDqYnLvsRK1rriUHvrDyQQbCQRJJ19bjs2RCGRHodvzBS9XTV",
  "key11": "3EGSxChxzvX2zBVAfHEX6NCGrJRQciaaVGKpiBXGA4ZByyViZhPdXY3jfjGSZhM981iow9SaGhazBahpAAooUFtX",
  "key12": "tqeaGg4n3fiHHmznNTDt6t9bPMJq6JHe8b4YCWCmpTGSyxi6K8jvotrA1pbFw9FRjGZnAUDceNXcxkGVDBCGVG8",
  "key13": "r4AmHJAtMXNZJ5g3zMKwNZBJphnufLZ8JXUFRq2tBtMFrLePvEVMR8d2tmcpSJLiME9L5U9EUqhGesZ2jC724yo",
  "key14": "gjGwww55xnMCCotEv4hQkn38akgHzpaZgRpKryBUnPzrEbPbkjDk952RnVutkLNjsfP9qBx4pYtmaWgEm8jBhVy",
  "key15": "5cp9q5tc6jdVTrnjThjgGH9ZDJJs2nUBhRtGxShPV9g31vxcWrpUMoBYdZsymbgapzR8ppB9WK9YtXdqrAXtqg54",
  "key16": "4TQvEiATtVWdDSccfKTKC54M53fqRLnVkf34FMEDFwkk1ajF53V1rHxUKxT1Bpjym5xdiBL4L6kSuuDWuHcvVCZt",
  "key17": "5g1nprD3EjGB1ZuM2S3Z1S94ZVKMwRUX6WtRjWweCEeB1jNnHwUgNA2tMHsYSAnUWDf4zCafjAMduUvMA2KGhZXF",
  "key18": "k3kMTe8Uusvckpbgr9Ae6ZSZeRmkjLuTvrwB8MdppwVkCxCeBvn65xc7FcbvB6Lh7RythoXoxcAd1Kb3XgpzUtP",
  "key19": "364fsEAgv6UU3rGmmPsESEjJKBuQF3xN5JDe3h6oHDpjyT9yvwGYCRqAJpuJpSN5SVzR2CKZvxzCibNxv2dL9zVG",
  "key20": "319wV9LN1qBmQZTVvCS9M75n84AUBPb1rPAVXeKfcobzBAbtji4FHbgfiYUBC1URdad7yHGzQwGjiyqzhfLsLXvw",
  "key21": "3JHKwnygaB6HBno6NFv8Mb81Z1cudmb6dqdr5PPyhauTj4BF5vu7Ehgz7KtFT3UXDiyKgFRewADZW4Ay5L2LpP35",
  "key22": "3xidVA5etDcSrFTdp9Skwm4t2DJNJtXu18M67rvog4w7SXNYYqxx1MpB6NPfYug5xR4Gogs4hifKGuBEvAWEkiVJ",
  "key23": "4F8tdArbvnWGfm117KMmDdgbBqdzRwB3tmpfaVMfmhoQpy7L6zKridHcjg7ysR6Am7aZjW3CgyAu4DLSkH1CrPxb",
  "key24": "294pP1JTcQnytEj2R3vy8MgK83337qRezGFjh2WFFSiFamvZeJAnJkD5ZqPUccTiEafPSvqBw9ig4pvZvjfnXNgF",
  "key25": "5rjt46kXXsqLKYHsSfjWznKpgP7bExBrC4JmARVM7ehR2aKtYMwK3QYsbHAbZnK3A7wZnittGiP3o3axa4okdB2Y",
  "key26": "9CEDNaYfniWAQbDtmSefjyLoGXHw3sjwKKqV4HMMQWh2dnotRZcvvpW49JkvZPbFjzahvhcJkKHBLcs6wDVY5J6",
  "key27": "5djaSRCQgv2qaqfWuGhom1Gv7VmiG35Pj2YPndj7dyrR5bTTm86FRSZ9utzdR9xwMQEeU4C3LVqb2M2PWshKNCMp",
  "key28": "5DmGYWnNfkepZseaJC25RkTsBq6hJSxPoR2ertAre8U9EGAs4A3GGF8wiKFMpePRKitX7iiCy3UWZngZauyodp8m",
  "key29": "5YVL4qVsPt7HH4G9b2LbopBpAnK9qaKxVaYY3itKxx3ZWGfJkYB49FymBPePZJqsEynZV2amqRo7dT3f2CVB95Ue",
  "key30": "5s6jCLC9rASTHU6KREqBK6vivbLwNY5jo4YDXH62B8tey5S9iqyvwWfSGjiaS4RdkjAj79h5v9zLoEbLSg6MPs93",
  "key31": "2nFMLpyb6HEmdHv9WgpmEqFQdFYpNiTw57Kgya2WVYhpuZejJbbJebnF7R1S6KHYP8epngguUxHFCWS4uS1jmcRz",
  "key32": "5sberJZVXTuKdL1BWtPUChjPej4Y3e39eK5q2wGoQC2bTYbPmxuu47MxnqWVix8pbK1tes5SrSfYGPd2LLb5X3Ks",
  "key33": "2UgjQcKA5W7PJ2Y2Qa69Ay9GfEkPW4WG32GCkXGWPc6RR2v8RtMZntiMa6b9Xu9Faay2Lc8amk5NJAwWRgapc9dE",
  "key34": "5oaz9bApdQBZAmv6DL37TiLq26jqajnKXSkNYA9RnKZLj6jW7LnitDGUcxJ9Vfsxysof2SugCNthqfHpmGVpK43z",
  "key35": "2PhMVq9MkqcicgDN9EE6GahqTzsZAq7ofxKB4eaNBgMb9VPELmrvopv1jZVm2vVNp9LRUeWjrcQGbvw7d6BoPcaa",
  "key36": "2x2JdNNPqtQ8q5BcReomQ827jAXvFBajZb1sUt5oCMJH8yAEyaTozm4Hmr1WPYXpfuFAu71NZ4ft6cPmpVpJHNVz",
  "key37": "2VKJGnnCYvfNqetvaUJ5ectBVAFaFtMkGeArjjsy35vkfBdLjjRSCvzoFgaVMnWBmKZCoYkXvJhdfL2JEQpLeS3b",
  "key38": "5v3gyZredcoftWbafGk5MUYdnJwaG4kVTLfeDpMRmXHdTcAB3Q3z1rfy9jpK9uFxinWiwYwsU8b8DC3xG52ZBXMF",
  "key39": "3TB97FXZFm4LRMZAAWCowdfZYmHPBowdGrDyMASrXQX87MLQWjRfPNHwjBPbv19kreFr87SBhW2wRB2zGen6Z6n4",
  "key40": "36zoKe9XQZoHfkatB45EWftdpBejes7wFNAcswZeKCM53b4Lq4K4wPAC1STDjC8LQLjEqtGvPquXXsKy8NAz2p49",
  "key41": "3JKoLQ8hHhAoP3UcNsqXHW1eSGNSZGQbknQgMwY8KTa61m7UgKhp6t9bUFPc54BUM7cd5QJnAve4YPM25Xq5RJFU",
  "key42": "5zRHDocnirgZzB3nz7BnQEbFZTxorasfJjjYuoMDS2vamca1AgJd3EZPVJ8T2UwEmd5LggEkLTAezpmWMPg5Mui4",
  "key43": "5DpUY1x1kY8cqbhigHG9DJhLrDZvFzGcDxAMLdSs3Grd6qx5k7ZfxZa3nT9zPKTA4TKKrcvyKfn81qB3yEG9LJHA",
  "key44": "4hSPgJM7LUbZMQLXKvfvoVykqMndkenS1kYMxc9eKQvvVrUuPc3j6xsFitvk5Gs57PpwUp9keu8vG6wMfvc2fUbF",
  "key45": "2rWrENcSRFKgkWcdrYecQ9QbkNzPFkkH6FTTi3BGhQDoeuEZ7pBuNgEu62qFPvYRSg1mwRUUNKHDtLqitfgdpNak",
  "key46": "2remyTihYGaJL6WKB38NKLM8Emzh8D6JyjUzzLDQTiSGFxny8tY6rHve7zRZM1eJ3i3DURDvfYQtNz1xepDniVoy",
  "key47": "3u78TMknsRGp9T8y5oC1CWwnh9zS7dt5gpX2pF9uti19SnHSdSzUHUNKPmEGzqJpUUxMw2VT1oV4vrsNkRpJgPH3",
  "key48": "4uoQE3XJqFMPZm39eu8cb9X1xmKhrcKtdyWBosp5FckfXMrftLXYwz5A9HQGLV6h1LWuGJMTfg9foxRNv2vLEbHj"
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
