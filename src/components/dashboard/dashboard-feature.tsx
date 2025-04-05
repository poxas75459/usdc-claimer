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
    "4HRwaV3a5awp6Pjz4jtBtgFActGfJrcB91St8ecnZptUW1DC1X7NuYF4PonenVnzzEv8gAKTf6ud1wYhZtojvEbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pb6vUtXNUBmq8EM3A1YhhuSsqeugB1PDsKNX6do7Eev2uNo776vgJsyd7rHP6ekY9a4XUHLPt28jn5zbh95tfhP",
  "key1": "2Ck4vZYGZURKahnLTnqtQ3g9rm2rW3sFhN7u5wAnXdGb52pHr3EqpUUS6S4vMzSQjKpksCu4uPyXd6h1jt3NVVsj",
  "key2": "541rJCw3KEQMDjbcEMB3Pp2P4nWhkRQAS4g7cZKxNzHijg2id1Mr1PrFCZnZxSfMtu5D6QzEnJoXDqs7eZyN4qtJ",
  "key3": "2c2kp4xEtJujtbwnr2U8NzT5DGXkvituTsRGTFRczxWWekxtZ7EhMcnkyJGj2JW6VWv8SkMavF6sMsq4Q6soqxCJ",
  "key4": "7BzuX5keVwhukZP3ZPWwSjzrXGKbuzayKQyVgw1QrynoYjoDSDGh6GufFKpLhUzRcAnQV8U5QUhXCTaR3gSFgad",
  "key5": "2eXe1FfZ5Vw9PrXaESELTtqJsDtNF1MoRfMgN8CMFEpWA2T4MM4pe84Lme57D7yv3ZZY4uEY379WRJ2gPpPMwFxx",
  "key6": "5HPTuKq54a9WXnhUWRw3eZ4iXhtk3gPZkRoegwF3W8oykXheE9QKTbizhD5KCY32bFZi9cGgVrk3TdakPJpVfEHQ",
  "key7": "4PgGrgKGSJ1uPh9zGDfKhUWydb5BqGb5Th7y9VmsDgbZgihAybyhaNHiNf3GZuX5zppBLn6HeB8Ygc2ub5hyk9vr",
  "key8": "ACPumETbnp8CB2U8TBDGtyw6py9fve6vEbGD3VZPj7HJn3qKmmUcr4LwKdiHWYGhXaVktJS61YJtXrjmWb5dM5g",
  "key9": "BAC5JkYrvgkWx6swXhsHVENN6BgZwD6oxNg77NCRptQbREQwbP1bCnxv3eadquF19cv3tL9jwJRqKSV9aSuywcA",
  "key10": "2dyfXEmSk3n6PrG6wCxJtDgnqDscSYYfFKoxTQAnxZvu7Ws7T53e2BEWDsTm9Z4WDjVUgQ53TFGrz3EHKw4p3cVd",
  "key11": "MRHmk1ZkV25rHKePXrh1hPxGpLnzSBUg2j6xAH3mmd2XV2DW8gsdYscDTjrRLQW8icHymDonokiPUEQkzXZMdbu",
  "key12": "4U45fVsQR9oDiAaFTEHfLsQ8Qp6jwFhkXkbNmUoEXg4T9z3rJ1u5qXtegA22SDof6ph7c8EnXdqPW6442de3KcpY",
  "key13": "3Mx6Lfp27wwPNxwvkqLekCasfQXc9zRcPQmqgKJLaq5B81T8GsGzmpZAwTAePmu8rqboguBKLaBrvUn69gpwTfLv",
  "key14": "3GPpNRaQdJce9rhfuSpf8ZqyGMQ7WVvZW8Az2Shoy4Gf62RaCRDU5R6Hp2uFyq664qwv4iYB5Q7fQ89Bfxmt1ESW",
  "key15": "3qNUa1t7hkutz2UQzRVsnmR51ygUtfzev4EZHKrs2b8MowjfSyjDvDCMq1eNYaw7MS8m94HgyFFvYZJQdEf396U1",
  "key16": "2zqh2c9jLPvz8KCSuhHhvkZt7ueAHRmmGDqe5e8taHGJRgub99xF77XhjCWtgtRcGQMTCiJ9fLcxcDLatf9SV211",
  "key17": "4e5E4dKynkEs7AD2Lb4jbYtPGe4JyehYnMMryE2A4j8nQNxJUBRasWVXkv3tmvgzWnqXAVkAVsibjvCqJbPzWPXK",
  "key18": "1ENFK76oZbUDXHg9dCQksCyvWWZ8751syBz3U3FTdMrjBQuDBT7oBapfBuvaH3jsbUR6Qs64jHBBwodw6SMvx4T",
  "key19": "5ejtnUQcrtTGWpRM7sNgxgL6PzsM1BYkLnPdwF1q7ceZrRe8wmuNpJcAp4DDeHTzQpMrq19QHDZkE2QqQZZQo4b9",
  "key20": "2D3nYhkAVycm5h5uZFYx51NCPg7ZdpTQ9bn2Tucrk3vRFh69UAjtBmhkB4KD1FBEFetBWkCAAgTWEkfZRAjVEbYn",
  "key21": "2Grcj4KWSEthPJddcPpDCvSFD4dsvCjm4hyyJRXpSsHW831EoW287cSgdDnHj98mDxNmLGFi9QGuHExbvJJEkc1Q",
  "key22": "8bxDFmZUdB4spXRTGsnJ78wnQkCf2pZKZE4FUyyiM1t6ZQYqnFtzW2Y1d2Xz1xQXCu6dphmsErAbza2BwYe6re5",
  "key23": "cwPfhwDvjRnD6j8QyjKPxRwC5XDi7F93Hy4VicaDhzckmXFzYN5EfPUv6NMUfuiPdufYLLo14iCpy54qHewmiD6",
  "key24": "ccJmj63giu19YELyFQtN6btNN4HT5UEpVMKtu44v3GCxf2kZtuP53nLB5zTRwQzEsiNm76xaK2gme9FWpiuif3z",
  "key25": "NHjoFXR18VLELuaT2u2HCTCg6oyWixYdwF4kTdUFrMGC17qYqZX7avjBUokdcj4ozAbHxQC2WPKVRTGfkr8nG1c",
  "key26": "UaQGQTjTA6FR7AWRjkivio8HtjzNHmzKz4tHD7G6TDwVe1dcHaG4sPUSkzxRPBPfznH8xns1yrmuSqYExtavcUp",
  "key27": "4NPvEJ2ftGx26HKV2zAj5PSMVNy1txmRDh9ZjMUNEtFnCheHx29DdxvarJXFb2DjvrFvDXapR9jW3LfeG8m9rPTt",
  "key28": "2h9aKJXnDPLePdUsy5WjYHDrHsncwM4NqwP8eK7FUvfw2i3Ngjyvwu79vVCNugJJh5zUfm1rUtvCFxNb9acCmUDC",
  "key29": "3m3jHp57rKA4Z3NDw1SRWpcRpRZ7Xw2A9YSK4NRtic1PzAKD7KsrNvDLAQQ78BMsTvtpNKoqeKwKpkC8Y8zu2CYN",
  "key30": "28X6g1yDPw95RpjDJZaN4DXDNDM59yVxLbT2SJEdoTagCyaKTqsbDt54xFuqLjPhWvFV8dbMnUS9LenWXigBxDUJ",
  "key31": "5WUA1MuPRfBUaEVSe9eGU26uePQKmUWB14aMtPi7UwdocR3UEbZcjD6kyzBkqKYSPr4sGz9f2qNkthVJm2rhntTU",
  "key32": "4wS3xCgtXiGe8WniuTFQEuRvBuUTL27jMJ1iG9gNfiiRjaE6JkSXDRW6r6ZE4bDbNpVtSLmrsXbJ3trDqgSpErWH",
  "key33": "5wnj96vAtYTCxQ7rdBuQbMDfvDxrmXA6RcYiKx2REKL2kAFJySWqifDGsCWRkGutrhsGekswVsm1A18y5HVGkB1h",
  "key34": "5L713Ke7DAfbg9raPB7qawqVfD3WcDAoFMMDJMPjSkYVF8rGWAPGjkpmw7iFU2eW4F9r3F5A6NawTQWzJmSQZhv2",
  "key35": "5dBbHBpKZEFHgDxoErqMdwJFBkWtsxP92GbKHz6gSE4HeqkDDstspq4K9pkPgbeb9dTPvx2Kej4nBkTz4TzTt3Mf",
  "key36": "5WZqPWJ4RsbkHM55iuA8tFj2u88EXggSrU3QNVxYqQTNuN9DpSKjdx8qVBTRY2VKET2pByegjEhGVtxQBBqVkLw3",
  "key37": "MLTGysern4h3tu2T7pfzmk8ugB691U6qV2YwxxMNa8uEuouw3g2rrkFgnxqCsjDjUMcszPdhbbPEC8uGFFrYQeb",
  "key38": "5KE9KKKVEWBYibvRYUtEvZtWj7trfaWV45juywNWb5vsxeFEZXdgsfDVoSMgaQ92TdSMSTMYnTWJ26PHrLuvvXnk",
  "key39": "jJFuMfPd2s6rRRRwFSAMQvqdinJ1gCTZhccJyPU5Vo9xTDt4WZeKAiXDgZG8emSFNqM5Q7sCF2VAZESdYfH6Zzb",
  "key40": "4qBPyRzTFbvbck5KYivZCCNFrt1rd9MyC2d2AM822yx5jJTmKyHkuzDAieNzuW1PF2JVnXS3wjCUSien2VoSX68M",
  "key41": "4gP4Gzfgi2zAoxcF9CCzpFc1cThg2y1BrGsHi95EXTEJTeu67duCL9TNPiUJ64oxvvxHFhcNhjJXLLzJx9fbzzyX",
  "key42": "3ATdDNqTiWBDTxP3DtFSKkaxuwbafcq51Nf6oafJVMP8eZMDqNpauuSyQjxfyTi32AS1WLkq9aKUpsjCfDszyLSu",
  "key43": "3Hp2Ej6NKXEzKHRqVdXYGGBcS9a3tXSpFV7MY1hLKvTGcgkL3ax2TvjJr4bxtiv5vJNf4Yu9Gjp3jr1NUsdcstNW",
  "key44": "4MVe2Ri9FKiP7ZYtPMD5Xs1bEkKGruaonU32AkehDG8yGxEpx7A7sFpH9UYUXXqtLdpdxuA3NsEm1BzjwhDhaEoT",
  "key45": "3JynKJfJvsg5DNVxjTBZ47dwmBdZuKUiiPSCtVc4Kt9DgeX6WP9EwHRAu9V2kuoRniViMVWELqZhrboB5Qr8Ewhk",
  "key46": "5vH1eBQM1tQ4XseVpLNaHaBBWyeHHSWRT4sBifNm1cnyehJCoFCGbphgA4R6gRgpF9gWBnBWsMcganu3T4VUJSfo",
  "key47": "2KRgFXyiZ3amSPqaP4ywVvyAW1nUTpJXB3t6rSdkpMJCgGcneLP2r7Uk24qY1swscEFpDi5Kzf8y9a1hyoagz2iU",
  "key48": "5f4NNFdPYkHJCPmAemrNaVbeK8MZnUNLrNst5Dous1CvgBy4jYt7hTjR4uvEtv3A2KihU8fr47WqLBxC6hJh6jtV"
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
