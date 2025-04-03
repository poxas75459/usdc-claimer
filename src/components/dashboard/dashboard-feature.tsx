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
    "2xRjRZvFrrsxiTT4MXoGrmW1SfY6dzKeWr7o6ZuAo5myV2buXrZNwkZCg3CFxHbsjT2xKHMz4BjT4H9xtxYcH4Kq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sZBtE8TCJCLgcnLiqkSe8f2LC7LxumtixpEbWoKySP7h2gaYujW5ZxDd9z7PEi9NNnWzz96McJHcHapyyuB8u5L",
  "key1": "cSNkowDCdUqNHfGGH9oqktvJV7vmX5ByADn7Hv6DZSPeNTNVLBQicnkcwG6g1KJkdwcB5GbhWPpwzXNmGt6oc5b",
  "key2": "5H33BUQuYA2okYbU5gcNEmoWJCDuuMq1PpBqXJM7FfuYx3B9MPoi4ERzica8Wg3aft8DQ8ZW3FN7uBRfAfwrseA4",
  "key3": "qQcxi796CJiQ1FRU4hYhfoszNbJNqiZb5Qhv9nZntq6Q3h5Fa16bbj52buJuQo9fKcbMYpqtSjYQZCi674sAfHL",
  "key4": "2LXD5D1hnHdDgYdXYgWy1XZjzMfvNgBFrBJWHyiYSDKpaeqdqWoWKXKrPsJQ2DXap2wDAiCNACjzHBZ2Cvp4hWPy",
  "key5": "2r8igLHW7SN2sJ5pk3eSKQ28JgnmyKeav4enhrfekppxN6hWqTW2mfKHmZ3WfZs5fPGH6bPDr1X9xgSc7tUcjQ2u",
  "key6": "dsWVhqDh4HACrFMSvmW2btASqA6EoWhSuZFMV6kek2oxkDQJ4TnkmfbneyDE8tRQAgayuqKeAU5Lcy64nfvBcS6",
  "key7": "3c324po8SS1hpuTVMcxNtftaukwRUzYoJJpqjqKBtxiuos53DRhZj9yzJ5EToNPVsTaEVJDzWb8yQViR4i7boq5w",
  "key8": "QR67qSz2W358PGCKM7Q2pW7sTpgFBofww8jdxztJcyN4PrE1roHnkvqTKFrXzSmudNADghwyZRUv5uFJMvyZMsy",
  "key9": "3iANWPeLBjUMDmusTSvGzxg3T7dB3hPEgbHRyN8RFzBBXUTvEP9L6r52KLXcFSupvJc3YuTsDABTKuy3FFaPsM5q",
  "key10": "5DY67P1LLTwwn3TgasoWu1spZ7GAmducSGnpCu28yFrEMMsrkdATvLH7WmvkNHxrpKudaa1HALcStPJJrHDsoP4f",
  "key11": "5EcyF8ComuQdZAgzegybJWFm7qkUX8Q2nFWVHTaXdjr1cyBRqjbKM5HwVj3sRack8CTGoEEwdFKbsXKtRrGpzpSk",
  "key12": "HwkKCNhn6g36sGuBxxskWdnc21kRREYJqnT1RvX58ita3X3Zzsk8eccoYNa1382oBSfFkcQoou2hYeB1FeLWpbd",
  "key13": "3a6rxvJXF2hyMBcVznoKm7oecwMg8mpKbnYrNTcscij2rN7ZFdTikkCjLg8Dz7k7UreHyxHFQyVQtMiT4V3pzcSE",
  "key14": "3Cq55uYmfRTu4K3tW3iqhGnWTdLK5XmgB1sUQrVLvbKN1n8uGsn6NBFeTADLCdf9e1Ag5LFsCdWkTh1Kfd9Ypr7t",
  "key15": "3mzHPGUkrBrGEhLdWWHkKZyevWdU6PTFg4pUNtPNFxY8oKYatudH5a331bPDQfwhMFVpb8nZhG6N6FSpCREy4C3y",
  "key16": "2HdQJwVfscdVTFwCsNridkYNcrCYefgzSzNeRRVpzizTYnKestAqyFpKfnnYzy5EpHVg3cZd9U1fuCgPnNRDVmKV",
  "key17": "CFANrSXVcG8juJsJdctJ7RjkDf4EU3YKieVG4586ic8X3rL9DL1z8gVXVtgMQdwguMVhzvZTYwMTVm8A8EsckF3",
  "key18": "3oUSst263a9pqLeR3RzpfXigRvEYNdnfyPLQz1HzX887yYZK7cqPweBVJBqdiRf94ibo1Unn7XckCy5e8RA8X8TR",
  "key19": "4BqTXNoHUtFXsUeY94vjE6NcE9P6m59tJ4Rz21huevoNMRL3dDDPGhTJHBpUshiV9cgW4ifgiqjhd7KAfYXXjtQG",
  "key20": "63XnC6QUSKbpVnR5ke1MW3NzZMU2uC4U6HyongD2qr47NK8MDP47h6gv1fNdXKRw8ejRE4MhPmDKCRW1bwJpmYSy",
  "key21": "6dpMwrtmbm7yoRLoecDJ5DJN2KQ7fqkHeJXm54Bh4PvxcAYA1ta8h6FkDTziqQzN1txYK6pN5rCDHJFS194CVLm",
  "key22": "3smTrNMCy6qqLxCTnoq6dEknFPtMbdMHEY5ne1E3Q96yY81wf7Sb6vQb3hL4HGLtYjvpmCGZZGGC3kJDw5WZJbej",
  "key23": "2ZfprbCJMMEbBKqFq8njoa1Aevqg6FL2R1gcBReGLiQ17jcPjyTCtiyD5urDvBAsPfVcaS6imANgievAUSeEyfLy",
  "key24": "548RpRVoxWUUKj9GVxnbmKqE4Vz5bZiYgiytoG3Kwab8oinDBbRKrThTbh7Cvw1e2pffQBDgdEf4DD8LfexE6pcX",
  "key25": "4MFR1ntunHPFwpxRWzL6xh2c13hcP3HTm2D3LYLaQjYX9vrGAcUJyQYkkPqe2u7EYzbt325Q9gUNftKM7AtL8uB4",
  "key26": "y7YNCossry5HgbH3eTPjuTUV3xoDyesVSHrM1S8uQzXkrB6NgEziXmFv4N2W7FRonK9f1kNT2TEgsmvPKQ9EFjd",
  "key27": "5XAUGCYsKaM1k7ds92rWcToQcrh1cF12QsdnQqRv6NufkHLzuaKQjqiMnAANFPKR7tRzPvHxbwU1bg8Suem41NSW",
  "key28": "2z5kk25nzgYYSg95AQBeyxCviGDJmC5tRbKKp9DgMARg3rG7CXt6DG68CU6XEkBDyqmVKpbenGiEXrnDdnNYoyau",
  "key29": "4p1Dp37U8RF5rsgLscGsFYZ6YJv9475A4bGdg6i5W9nd84ekdbjJUHAXSdwSJcYxodJe5oNr9g8fpx5gVAEsamFd",
  "key30": "58vgSbg7nR7LrMTv7PqC4hVN71YpHtmDTbNGeSDEuYRB8PwHWJLMuq1bfiQnPPgw3yLZgCL5Bx8KNadDDocQmXp6",
  "key31": "2KAxE3zePWqpt1K7EnupMaiLBrvGgCFTvFKzrj3aeqp2LKpeZL4ZdbQY8EQhT3rf76ZwnHLcqvR5yQFPxm7zzBR4",
  "key32": "3dfWMPHE8STNXmv2G2ouWDYnVxG4WhQcjLVmpJZEAPtG6muJq5g3EJ8YxLcQeuRKhassxtTCjDTrh21i3sEZ7Tro",
  "key33": "5f6FXF7L8H3uvNTpBqMcVJrFy4k5REcehhxuovcgEnoUYLHjp9fnqqisCJ28p5QgJLn33fsTn5nnom1EXLdfdBoY",
  "key34": "3PnRMairxHCAvoLBN2rKEM6JJmwKGnBoWyyjHpKYEwSZMn3JRAp7TaHsWqE1GKkwupLrz1CHixSRVRRDiqea3Qs",
  "key35": "5bTXE4S5kc1gCCxRKSNa2okLufJn2YM4igG4oPzdKaBUPaxMXs8jgmfmVtar37JUGbVupTKZ7xp19UAFWJuyjy4S",
  "key36": "2qRbFujzkArXfHZNVZw5e6QuagU7CwAiPjbP4BCdCp9mzEzkwubYVMY5Kj7Cf7qBaY3TjJPVJCiFw1bRLbcgzmkQ",
  "key37": "4qb2kwTzaSNUEFMqXCMLetjdwZQ5F2eDZN87fbYgrrXbJA3R25EYDYBhRoJijwgvD4MkLpidhfFeFvtUv8uSfLWW",
  "key38": "5JHshPiqAQhjxvHs5RJWZsQgW7h9vTZadvKVg7ffTuG2K8zcPZZun47ZKQVFSN5NKciucC37abogFYXFE2AFaXFX",
  "key39": "2h8WfEVKidNLrZqL71psPgyJnHxQcxhuswVti95gsUYY2cZzyWYfcGkSwKn3waWSYiVhWBk82jwK8F6NAr5Sdb5P",
  "key40": "4anL11rVM3muZhTfJZuD4dZnFfg1po8LDnBTtSLkAXJHkC5yxFJpeke5fyom91pMg11maKbSTHHhuCrBJ2ZQojXM",
  "key41": "49ux8bJFE3Kz8qG9KjGdBwsqTkJ3a9dLRAybPt9K3VhkkVvRm919QivcsBt8P2AgT3Xi5aDkrQMQXBndLQBka3xs",
  "key42": "5YUEcpYNrebTEhVRayRTfjFQJMPMEiREErzctziDPfYU64rEeg1pBwK4yt8qSAK2LjsgnTmzHEB2AGNnY85Qi5be",
  "key43": "66sobyZGHvUqnSYgaVt3DGcPWQm8BvBTFekNMNbKMtyPhRgrXjGAsinCNDpf3bw2ZgNRoFcRZXAm1qVZhmhtryAr",
  "key44": "4tVpyZU8SbAtQAiE3nv5h9AgehpegpLRLSap4E8e8tTE4qtHsBgnUeHGpHkcwNY9wD4tZgYYT3fiNSabFa7on683",
  "key45": "FYXWExgVYeRiPSgSUD8MzpZ1tThWf5zsMqPipNDDwPZ3zcDKbdbQAvqfzfvpQFZNPZvaL9d7GYpfM8ccXadXoMC"
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
