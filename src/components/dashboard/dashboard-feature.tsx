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
    "3BTvAcAKrVDw7eVpjLsV3Eps2WiqZVVPqGyVUjE2sf3XnPQuVmD73ZV57imE31excYu1Mko2xBLP4nqPPK1x7rBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Yc1MgkhfQKdJKDezuSsxn4khJpGCpiwfWN2aXCa6mRp18mUE7Eytg8drGUbXWzHwB3hHiDMihoYLCsWDSdds7i",
  "key1": "22BLxVzUAc5fShJDqYG9TfkWUsc4Czw6Uc4mpKwrm1Zdenf5twbmf7Y5KYJYUn6jS4hzphzNHz2ij245bakQxxT4",
  "key2": "4ybNd1xkDWM7vLEqdhomVWrE3zY5yNMsZaqBeLrwyk3y2RgLJ2m5getMC9UZ9tuYLev4gcWQ7KLfmjejkak8nqvj",
  "key3": "4GBJ1j77heByzNaBJM19XNCqyd6osoA2f6uJY7sEbvCAJpMnGv8AFnAyvXvgdXvBKeriHVPzznaE2WLqGbds65LL",
  "key4": "3hJNaAiP5jg2gVpVewgfup1u7eu36CDDom7pQBhBfHX9eEK8jsRwEjQitTGpirTBxMb1AcdgUMSmNdAZTrpfg2Nq",
  "key5": "61q6UwSggwiPcSjwLauCtpW85YpXgnh1b31V9xedDrgtbbigbfswZ2FiAAmnVP39tsjxL3AnhTBUCdzbZi5Sd9QS",
  "key6": "3P3DaKHJ5dRtfHw9MH4F1pyNaWgfd4aT8so8YULtDfmAGGBiiz96vnPg3hQyyns2vaEftw2Nk97TENmyvv6SiDK7",
  "key7": "4mYiRdQirsCKgJCVEkFSv8gzWwfkkxhs6z3Behah4LCScmVUoBL7jEzkXUKyXNiznMv5zNgeQCP7v3W3KdgCXWZ7",
  "key8": "ymfaLUXK5tPtxw8ynsrxaMCRBhMhH73Bkdii8vp6APdeCKHbZwe5h1givDjcH9Mt7sGZ94tTnh92YmKHwzWgJWe",
  "key9": "47pLbR9W6whefs3L6ZK6aoEMLnD3urK2TSmo5VC8nLugDw4DWVjEFA97hA4kuAw4ALs5eZ5x7LfmwDWgpqYaC2Eh",
  "key10": "5UvNXzvi4ZVd5G2drDMFYBngQ6E4QYxbjBE24HbzwZkc8vusGtwQcESUWL1M3C6Tms2MsFiawey7uf5HfNcReHWA",
  "key11": "3edgQa9QVYmPoiYGVgvuUkwRJ94DVVyZ41kNzhpX4CHipLzRUQSSML5bc22fnf5HC35e1T8XzDR63vYDiCa8wPfw",
  "key12": "4ki5urhqqNq4rGmJaB2gwRDyWrikKWeAyYRRpPGFRBkDz96RMZp1USufsVdMSgw5JiXXQPcbV22333WeD5o8hyhf",
  "key13": "31FXy8iMbxJbUjK6U4UZney8BBLy47fg7Uu7wM1CkSMRapbsSKfTYbzY4CuaN4QkM4QKyhovr6NSRT8fnaGpWHYL",
  "key14": "4CPqJ7GZzoq2JfiqvHbbFKLK4kzyyn1zvHqD74ryG1gWSBwASnED4XnByjvZgxJTPPHZeBmrqtaAQrkegtqw1kgP",
  "key15": "32LT46924Sco7sJD6NB3dgUWp21tmgNkD6k4KCqzRAE1eQSy1Tx8fzTwLd8chufnPGuUkVURD8jjsJXhnU8mLakC",
  "key16": "5YWKWvXGbda84y5UhD8bpaMvmLu6zAohaWPgaVxNq7AGFCw54imuh6VVmzRux2rzUs8kufHaka3gbYinj6PwefdS",
  "key17": "3xwJBRpF5S94eU21GN2HcxApKb3p7zXpiygnRFFGFgv1tUenSDskG8PbMU3eFZUQw1hWwbnsbeAMzvuh4ePRQSUm",
  "key18": "4w6wxtg1hQp38Znkj1HCr9wc7AG8ZdRF4QrFQTUdxEbW6i2yV6gjbY68GCoRTaUzCZpcYtm9GytSNeZVKuPrNW4b",
  "key19": "vnkxnmyPYTdbPq814pJbzoEWRuGaMn9ZQ9fmLfjdEWPPGDYEDhWFLUxX5RGnnjiL9muzqQwyPFwxCfSaSUhFm7c",
  "key20": "A6A351HbdDerDvb2NrVSeUVj9Sorur893z7T6HCNkxnEiXEtq1C4SNJ3L89zkUekUQ97HBftiuMXC4hrMM8nexe",
  "key21": "5Xvx6mSkHhQvQUXry98ReraaudtPoJppCbWb3bfcx3MFMdz39rxWyxa74MjnvwW3i3FY21S1RiGe6YbeaCm1kqLw",
  "key22": "3tUvXscU1Fb25ADHjWTiYUAN1GYa6uJ9gaZ3TTaGAf9c6J1YibT9dQQsUFS7pG4KVQfCf82dLf7f6tjJeumxZyy",
  "key23": "3aqnJvDLUb5ZM249oriiSnQbwfF8BxCKUxXRPpZhSEYBurAimZJpecz6R7xcfFE7EPXsvTSmUYGwN1Fmz7LsELWd",
  "key24": "BJvGmcXjeazU3nCascKfHiAmtSDbVkTpk95iU6ZFHQTmg9jK38EKa68ajnDHnrAVFa9YA6tGveodgZmvmGHpdEz",
  "key25": "61zjRBBkVvi8siTbjbkgrrWexShZxiRU2bFskQLBFyyCmQDz7sCkPPsEg2hNGGCNn1YrDoEaaozYi9jovueDV1Yu",
  "key26": "bC88KqyT2YDNFzNjX3p5CW9dnQQMbk2zuTwyCyZgr3R7khKAN3USnef6B534oV9oB4FFMPc6p9vTyjZNXsmBpSY",
  "key27": "2FiA48RrvFjhPTudbjhUSzutbFcqnTHJ7NFQ9UWiGGCjcQ79ELKe8kFrpfxzKyuJcbAZGbyMttyFr1QTJCCQeLoS",
  "key28": "2V9QswFQ1xR4MkVZhfUS6cxxZnBy25s4wSTrD5a74Uutb4XEpVTWRP9FV61CrscpCjb3U2p4vnfoAZbuoNRNFCMR",
  "key29": "44To42MdQf3JUkdMjjeeEHTSBvNsZ9RbcLc4a5jAsmER4mEw6m1fx3jLiStLeBgqq8C2ks1hCZK5czHyqF9Dc55d",
  "key30": "Qy5bDkbiT2xtdeyL82JByYv8WAXsVKHVPAbsk8PNAdS1Q9DHHGzneXWCMRDwgqCujXUq153TjWvnFsJtUc4i5wd",
  "key31": "2d9YxeaTDJgZtXhRevgjrtVp9Np89dkB9YGaEv43LzPNvK5aoFxHfLQSnHCZQcT1fXBxbvc3RVx3Pg3Yn698pdoD",
  "key32": "2gverfXJF1nKDFntm1PED5ExmVJYpMrTUAa2Z68BdW4DHrrjgb89ahjs8H4Yd4dmRLy49XwZzY5797GgqWRXiLJt",
  "key33": "4sZSMXLabG7RZRFdpVnGakSnFE4DdYfgMB3ip2Htny5PSwfMs8E4JsxGMUGFoBpXvQt5P7aXy7uaC2r2Dvjy9AAZ",
  "key34": "2HsEx33Z6htYeRqQLJa8QB7qoFXhzVBPjZ7RvGwPSBD9ChCwkeVwVoWqX2vje6XoPYrMNfpLmnQhTNo5MzPdGG3p",
  "key35": "4thgTSyye8Zez9JBNqkumRVYtCW41SqV4kbbe9DSAUENBxE7NFMRL1LJ13z2fG5pN6NPiw1Lx3BCGHsiFnh6m2cp",
  "key36": "4BLpXLcyYXbuY5nxYbhK8rJkkSoX3fDfULu3ZoAbxf2K8fJGX3xkMDZZVrCKHPiHp34vZ3DoLR9usFcQmqcntKg6",
  "key37": "2jbtv8i7SVTXvmBWprJUtsUHZLuHL3UXGQ8HfQLcwckhujtsSXQU6TktabuanG1biCiv3x5joyvu3TMEyAj41SNZ",
  "key38": "4tR88dsdA2JfH21G3EkeDPNfcKRB7LQ7apKGMFquj4EdqeFk3yEuJNPK7KybLXDcgv2qE6c46LFCEy7mHiLbiMm7",
  "key39": "4Fuw9eUzfE1Ad6StXScZAx5wFTS6nLJ2Bzjtd8ikoTf293z9jJVFDjwbchdogfcErsuegLq84K7NQDZjaZSEmgQ5",
  "key40": "51U3cBQ6kpyiSPZHRo72SnLeHPjihHKqwnG9jfrQGRAWYPMTGmWSXpuqgPGkCvutSVsR1mjxBQ85KNgqT1y2qX5C",
  "key41": "3SvLnkDrwaBXutK3oQg213VnAqkvz1UuY7cDiCzXzuVGChS2fujzihvtRnHTBTxeoJt84ZXL55E1vBip3TKuHzqN",
  "key42": "gcicq6sreTsghHrEwUEkzPd48f4qc31dvUJaq99A98gCSpgtqMpqyQztdR93gpoWgCuFt7tYzLyBKimPooyaJ4R",
  "key43": "t2oJ3tb6SDB59uVkqTQGX9C6tQKUN4szV2GoeYwHsHoptiyVg5zEPGo3HCsMPxuoPx2yz9ix1yZx4TZwc5uYdYv",
  "key44": "4tUgi8h7ZH8x5p7Ub7jd5WvC6BZTSDjzR7pGm5qgLSeQC1sdvJmX6ihKePfGFBpjdpwL1cbyEortym5Ugfj1PG4T",
  "key45": "gzsg1jygBAT3zoZs7SX3T3nXUXxQ97f2rFjd25VDBCyPBHqCiVPgRAYcFdEkTWTJki5KvTP6DbR64UGcqf9vmzZ",
  "key46": "sYa3XUq3LdnwrK3iPVdkWHqmfJUAuDXfyEiWBrX5pbnn8hUyse62z8NtfWC5hXoi9KAWfszmhczYQA6TBjrupg6"
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
