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
    "5VNDHkCogywzDEiAmDgTnqpc6mtackyjssd49SzSW5ouHDLJfybUYSpTjXXjzeQiKLXxJoeeYHgjbCPg9aVJQEHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SuPcQznQewSiLEEZqAwbAdJkYLYhpSFWoM4Fcb5sPT9nadF2Lxmyfc2nVQEiEen993Q9LCCJKah5aY7qnvStsN3",
  "key1": "22QpMxpfxDe34S1FZ5eKAEY2cL38MpBgAKJgRE23iyiyUwRwptKGEV1TwkSDSfDt1c3Xqw9SYa8mfwKTY3ESKQfB",
  "key2": "3voyy6sEu4bNzPuMpx9QgnHJdWE4UUzMGeqUhhgsgyd7yy14EYW6oVHRABvsT3LS8Aujwe1voBETtE1mzXJZZjGq",
  "key3": "54GQmGA8qaXCffBqhjLeVF5PZD9Ca4qiGcmMd8rzEw6PhpDyMfw7jit9BtHds3yGGZfy41iSEpfjJnuHvX9FNa8A",
  "key4": "5xwCLWLHZJbpToTyhqPSz2EW4oz8cJDXwUXvRHKqQt8ofLVisbVDoXZdck6Zes2YWE1HRP7Q7Lqm9qfWSVtpf6Mo",
  "key5": "3R8XuN6R2b5JAFmYSLn3Vmvt972Evw5G2YD61Ps2qwECXrSsiobCwXQ9HDXiS4jMTo5T47UjSPChUKWe5pH1No2R",
  "key6": "644HveaA9CgoWLq15ckLKzZXtVv2sCxsoRzZycgynvCEbiuibRd2H1V9yciufBRz7Q8R4DKwtZpD3Rjad2D7hV1G",
  "key7": "4AQE4rDNyppCv3m19UC9p2kTH9Ve8SRmn76YboQvHDzfDo7cckvxSicUpjZvcXqTLhtsgV8WggHE9cT8fSCb5MiE",
  "key8": "2nFdYnchjYQ8ZxWtd7DPjccLTvVDT33Zw9QarGRpPfM3bnNbBJXfPxicA5WoYp5UZjJyKUoT7B9Z52hkn4zfzNgz",
  "key9": "5rFjW57exBPmVSrE84MndTWp3U4HzXPhi5WiLLnHQaLSiF6z9YYEV3Gi63JxYZ5sg18SNjaYCF3caJBC995HBfUZ",
  "key10": "29ZkM7S3Es8fmLGH636uDSKLFtdRgdPgJDeiCMWLi9os6pxiPRFK4DBjoa9LA34rgfCnkbcYScQp7ci2snetz49h",
  "key11": "5KHp4KyVMsfGcNFBudVUA2zNYTg9sTqbjpgZKjyMxymukfJ734179wYZq4WUQjRK8cymgn5THpnGCpgHaapcHKGz",
  "key12": "2xaAcxP48ve2PrQZ4xp1NwjpNmVedcpKzgJNLw7v4cZxxxNLQDTNxij6M8HMVnaXwUe5EdzuFuwJhDnRarnt3rS5",
  "key13": "5nkV1kxJmrB4PynAGLRDBPBjKahq9jHgvoNvnZKbxsNMK4ictzyMKMyZygELMP4HLvr6M7R43LCSj4NvFandfe5U",
  "key14": "po1MJVjHfhdGppSjLHmowniq8R4EPz5HTgLW2Spf46ESGABfLj7sSqanwRpcmc6Uj7YiHTow5r3KexxjpwP9d9x",
  "key15": "4g65yuiiFoAoGXEESzSi3S8Wa1SZw712bdUmoT2ek9rf1yMavvBK9iwJEpSyqrjkWJHCT2VNgWGbphDmxuNN6tRX",
  "key16": "4gjNqZjkG8K8UeYXvpwBnbGKZtyakhUqtqZm2J4wCdQRBvyR7RyL1RrPfz9mSXmDPzHMwydRymrwMUJp9A6zkVuV",
  "key17": "4QW6QYyo7SkHyCSMhGdXMkwi3yHWkMXSRaoxsq8PXjn6Y6sEjh8bjqdXo1A4hcmy1m2DTu35tJaHgkHgRnkhbHt6",
  "key18": "4oDPDqiFxXXvKhptdbqWLgPDoVXeiKAdRdpt6p2kpxjX7THpQM3JpcCvjRFUYKun6gC3jNNKStAU9FGxmn5XxiqY",
  "key19": "2uFD8ypYWSqsEAUj6QUJCKYffXUMLrj5jd6riQ8EYrRF9XVv5H19SUAoNLND7XEgUEmUMkNbGf4ee6sRenX8oJdM",
  "key20": "2JZQtH5wWCCyVcde4SefjcEfanPr86H72MjBoXnWJaVQTHvQdpuuDWc71KdsphzcjE2BoryW2i9mqdrNWrrmVFJh",
  "key21": "4sCSgWyu3QGB3aNpeqor3D9sP6DS8GXbT6YTkSkMbNcXBrtVb9xBdec2pdomhKayuEff7rmnHPSsnPeGrD37Nqko",
  "key22": "65eqNF8kmLXxocxu8KX1kxFnFmunB6CtsRFEZEcB2BmdVNJVJLYi5PKUUGeBb3DaX6bPj9xXkQkC25JbuHzrmAYi",
  "key23": "5QUT38mrzrsTpsvjYDAnRAo6A53AikGfh3Bu87yNN5aqfiFcJZPjEtEvYFSuUqUEtN3FpyeCw1bUZ22hH6Mav6sL",
  "key24": "4LXAVChhvh5nkNbopFiRqMHMoFTJQQS8MWBqSd1a3Gj1XFXUPVkUQMH3Cp1CoouRJpkR8RNiCwGyhFfSWPmFToMz",
  "key25": "4DbRCf7rm1Y4Ek85ZCoGvpLPjLf2RSXq2bTiedtcQLdQUS88wWir6DbYC6n4JFGisVmsCX86LYhxkNbb3aJFejiM",
  "key26": "2G36CekQwr7xSsAoVGyweEmLoksLqygGNB7LHF63yFZkB4Q4egkiWSN5eDmCJprM1Q45VwNBGB2pcJ2ewdDQRaHD",
  "key27": "2SsyojTNUR7hKvyqmakiptUabbyoHhUXqLjuwoyb5PRYhNLskRJrn2bLeq1ob3qZmGSn13tVAKqs6M16muKozYQ9",
  "key28": "UA4KEXXZV1f5oywS7tHTPUbomTH9DDHkiGRSSDTeGMz5FCBpGUWoFMTRLqJNTpkNFJjjJjpb3RbyopVdz33YpeU",
  "key29": "4K8rfeRhf5CzFaK2t4TEngaEvb2rhVkyZctTXjnjxiYRqFXsFVe2JSyZvN2n2S395zWPWPFN1f2Hkukv1ceCnqoT",
  "key30": "iWQCLjLNKmqnfNMnhKNHCka4iihWeXV7LzVJa96r9QAcYbEi2JuYGZHTyQEgvEWHmCDEdgexb2CesZtBC7P8cJr",
  "key31": "3HW6E2fsxx6xuGwy7sbfNdy8mA7ZH3WVpBdzT881bAcTH6mZLEE5ipPWf4Ee2mxkD3PD6CwP4ntamN834VuHbSvJ",
  "key32": "214koo7YXidMXy6CUx2CQeDpyq1LL1a8JMAupyix7CRkwbN7tTPruQPdWhQWz8jmaZZkq5DeoHKYF1PRL93khhV7",
  "key33": "9v33pSpUnNnsqCCcFbbYivr5p7XgjfM8tkU6YW5CN2Qa2fLuGJHhU274SuBQ9GatNjEtPfUy5G7giNPRK6wXXE8",
  "key34": "GjCx6qVp7zucRBtazKhxJn5YpL4SpNXUvRFyQormSw44wTqdegRT1EUiHjSagYLVPzBNiR4Dv3fgJpADtBjiYCd",
  "key35": "4pfBGtW3Mdw2ep5gi8XEaYepvYyU8aApYDfpM25Zj8PVqX2MBtyU69sy24abHZbJiAvVNZdC6eLn9SYoaUDVvZJL",
  "key36": "ZGu9Gsbpce4ev5vgT3We3jttUS7PF1J6w26nCGPNo2NWHiQhESijyz893HCPxARoCobcjXknkntEkwEMnmQYF9q",
  "key37": "3turA9w6ej6u5Hqi2TM8qAwzBVuMYtx9yxuvVeUUqnzEUPKscVtyzfBzkKvVVtvWHt5F7ujwpF5TSweXwhYTbRY1",
  "key38": "3B1zrm7DmJCsNQQTWtoRsEZZxPnSLEWFGJHnucZXPeQAim6svRh7d7e93URQfZywgRf1H6xUfCMJHgg6hffv9odm",
  "key39": "Qf5b3gCWgEC9SjDnrCCbwX2t1cq7mAktCi8LVLC9UHNPgR2smacm2cdD4JgB7CjXY9dXzGCn4sKH2BQk6SaF6wA",
  "key40": "5hYewtStZQ4eSUAk9JWWWq1WvqLTaR7uZ9iDzFpe7qfD73oMQSgkKU9HZfyvpmyfAHaF8RbYB6TJseFMYWBimtkf",
  "key41": "42V2ZWGPZx73ixgHabXjxxcZKqobKGLVUdhsyPyL3Pic583X4GwiQz6RMnmTSurB9DcEAqvDj7tBz4s8E2z77Dau",
  "key42": "2zBXkf2xbnMuMQFBCqea9835qkU8FFNy2uDTP8jucAfeDpBAm5rJiiw2nCnroyqPe6XpSQRkqnQnLMWrQ4peMB1E",
  "key43": "5gZXmeBQ43wqnrEieRey8bpYwDhcV2aXQbQsaNaxduGXmj715wKVqyjwfP9KdydWZyYriepZgK25DW5wGd5A9nvd",
  "key44": "5z81pZuDQhbgAywA1YfPE3FWfDbafTrDsm5xHQ2UxSPZBm1EYvnXVkWLCrvpLdBEAAfVJCSQc2jG2jitgFvLWJZc",
  "key45": "XaeDCFEUpxYEy82827uqjj1TPNimAdsaxWoarHJzFhqJhCz97rhjfkamGW4Bn4yUKobNhK1NS1u4zsSpr1jv7BY",
  "key46": "y3jLJVS4SXmTcnZvDp7c8oPhcvbQEWttAdmkmyqmYvaGzQyWrjMLCLmxLsT8iM6EmkfgsruzdzJys3YcUTAkxpC",
  "key47": "DRGMbRmd5Psh5XLSmePSBZjVr3xnufF7tGaU3SJywkfnF4i8sCZgFtob51seZDFNzkqJ8U3xmWXzn4CZrLeipxS",
  "key48": "UB3GKN42XfEEFpxttqfEx6HtirB37tSJA6ZGFNLhUcbfjvEED8VAJ6vkqoFyZ8rvsJwKFg3xt7um3mscimK5d1u",
  "key49": "qG8NU17VxqLC5bMveQcwSAAG7qRurjtdNsuMVVFJHpQPeXCG6z7nS95yLQ5tRmL3mVLRUaw3qAQHeRoZ1f2j6WL"
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
