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
    "2ArnWYutyZUD6DC3WFCb2BH3A5xKT4qFEge2KkLGQpGwvCfX77VZDgPGf3r41qBJpH24wSQEuuXFpF65acm5BcZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hn6YKF8DopXYiMEVKNam8xYCtXQ6ZusVeeVnxdgmgX9LNVUUKBJQG3M4gneU93YU2TzaT1RCbgzQLQqWX2QE2CS",
  "key1": "3VyERYBuxvyHzbrANi6KKM26Fn6k2iLvTVMhZzTF6MmgcgnXv9my8yRgZK5V2f2GweGkjq2kSzLz2PboRNecQQvk",
  "key2": "2MzZaXqNkmU11AxY2kbQWR5khNqxjqyncKSvy3pjxHQcFa2XZmecfzg6xH4w51cdyqLnu8E6Si8bZTNe6LQiJF5m",
  "key3": "36Eqts1b3YHFwjKTmX1H2kDXPNBk9oPEYe6x3MKhXmX6NwiKhKyAc5ZU19ZRERbzYM1fUeEL6ZFGZyEm4fhGa76X",
  "key4": "5p3LWBRi6AR17ejYbWRu3xzvvYUCfCeEvvFBMkxRLwEKhodMUPnj6NrRkrSTv5coWWGd1DYdsjqaCUdorZdrpc4A",
  "key5": "2nhknLhpPfB1R8dTpJqXNVUY4uXUsLFLvRvXdcnUZa114e8kTPCbGqhWTvwvFtsLzUqLmpbS2KAdizuBhTxnd78Q",
  "key6": "48qsu8Y61TkaCbtiXYY8BCUEZPkaN1wm6mxBZtn7JCZqVRr1iHgpSWv3XEhjZfsi4FP3iekrDRbw51L5jGrJ5z3n",
  "key7": "3mD4J3ZL7e5vsTBXMiQzcdvcN7PzUiuKFxwZynECy5BwTwdabPWPL5EZAPb8s1a8M31Tzt6cSu63nAwoeWzdy7dw",
  "key8": "2y2JKRyDP83KU4NBywe6FAQSCx5EFfb8mcoT1XouDa9RFYfV3wyFGD72gUkWaat8bCcprB8rga7iRhx6bL8P2jRy",
  "key9": "3XgNeNTdujnsrvnwaRrz5MtutN2DcrjdJxgYaVwohBar9ujjePnQNFJLmnSW4XLroJQrNWkwBP5gKMRiyDxJtzWb",
  "key10": "qkfX8eLFB2K55JomxKsriSEvYC4qHFPX1W4aRwmSft3WVuKCsTRJciqwkBYjhrZMRbqdPAosVRLRDwFTYtMbgHe",
  "key11": "5LnnABssTDP9oAoFhw6XYJ5aBVDLd2g3rVKgp2jQRULmjkD2dccuS56zVFcYyDetABx7jMPdkGSBNQRm7ihoTdvv",
  "key12": "TLfXqBAxBwkhtXGzAwnhpm5jyrhMZ3JL81ospPdx1e5SPhcD6my79CG9nEvEyetJgBhgaext4yrjzJAiJBi6UC7",
  "key13": "5cw3rUuQu3ppxCDJA1Tz3veM6eE24oqWx2PSgf8fjNJDAhehAN89hqPhcghDAPEyj1Pz3LwbkGYdRGzMJfpYmVgq",
  "key14": "61v2DC8d6beBXhjzDYAVawUxLNiUAEWNv3htu3auCjtQTg6vozi8YrkbFp9FE73VExANLbG3B6q9gr3oiybnz8fm",
  "key15": "29wuTmEmUBHBmnhqjf81zb8jEnAzhAagYfAuvvMg2ysX2PpJjSL1bu9izQL7VGCq4Fi7P9UZqdh1gexEfmP78puF",
  "key16": "4qFE8TvYfRR84EAaZ6HGLaqBV78bfFKCHz3PVdgFy6gEiWMW4bCShx49dvaYTiXBDmjD8vYUqnua2mXWVzWTKv1g",
  "key17": "4Rd1W7dkXABAE9TqA1npkg3U8bgCc63jbHGYxzzwKwQv23DVoff5H1yNs4cm199R5JqeVuzR8FhouDWMw3NRH7qB",
  "key18": "DAscQa6Kniqy3vF1BN5xn94LXvUw3J99ik52GxwXXTnSxq9kmNUttiEdVr5Pj1izYXbmt5rFKXWMC67EotMzqeA",
  "key19": "4UdN45Vx2L86SKoppjbNkJEPvMKR8RULsZjx7juDXVHwMLqKUtCXHYQjvJqumw6fmbKjNBKXMQaARdMr7p255tth",
  "key20": "42sx9j3bHka6xe5EXTXnsgXEcbiNVVjzhBPxhA5mBDtcAFsBH6teSoQ1zGpiDzCXgS87Pm5Mtn2mtjz64P71ETu3",
  "key21": "495Ek8SncSQWu9JKtewiEXbuX8waawSeUkkR76STcRGJGC4wiKZrTZ2UeYicY7zQhmUAJqHoSg46Za5xPWYTXinT",
  "key22": "nN7tJidEPKmS44RmQrADVVmR9ZWr3zj8RVjtA6E6XTwduYs8yED2zwjQxBSMZ4b6ru8YMegtxYKu5Yb3mryqenr",
  "key23": "4R9kHGvcf8Vg8RpwrSkB51gJNPGGCVSQg2paeANzbUQLpsKnHaF7VhiiZFyMZwrDB5hHAfKS8S4YsWqWLUbXWH2x",
  "key24": "sFpkU5a8smeUJ3CDktKJh2vx5K2MfVvVct6ZrzSAzR6o3MhcLf6izKD2MR4oRjY4cU24s1gLiBXkapwAt1j65RC",
  "key25": "3jj7PHaUeSdDxYMKEynwRfiH4w6hnTGoGmV7P4LkAToziCqVBTU355aWLoA1bSatdXJPTWYGsCJtW6RAkdZ1zaxo",
  "key26": "5mbZaSajgBPevePzDaF6nyQcphkhfGuHUUtopoxhTL8t4yPBNuPwF7DdSJt1dXmpRq7m2a9YLd2qTkpx3SkbieGj",
  "key27": "41QG6HcXbBwUjCM6EWWwHh375mLvMgWw6cpgR31ToKcLtsjxUwwj4yPR2DhpyUiq8Lgd3He6WoENYrhxTjDF57E1",
  "key28": "37k8tWtkraAdk7yXr7jPxBpRhPkXnwMLxLKDnuzEkBKRA6EcAtSCGwzAgCurnmDwwE9vRrtv9JAhcTNy3Pi7LVkL",
  "key29": "kY8NvqSZt2HK3Dc1ecsyu4uPkkZzavLVLYvyBMVmNpnSHnTxm8T3XRGKydnvcgKYvNwAxY4a2s56tjiHExkAhfj",
  "key30": "BtZfQRnBEDgWWPwAKbcKTFEEzXdgPLejEhuTMqooXzmHiZQV9u5XdF72LPkADQ6oFeSuTXfosrjGqP7LXfN2ZEU",
  "key31": "4taDp7ytK5CkQZQDEFNQKxMRR4SJ4R9SDNyG26P3D4kWCyvgG8U8fqNNuVCMLGNMSTQnEMTp5bB174LFGLqiDvwY",
  "key32": "5yqetpqgf7bFNCVEySrY4didXrU3a42ZwRd15YbfMDzV6msfY8bqvdQ2Km6b5YB9ufLVjTZix25qbTob3EgAEXNa",
  "key33": "554KEU961EBmZQjDLRFapFEigfeFrUe3mprgb1e5RbvDnZmFnZT8BRESGzjpcfQF2BWqgh8vpf74VVb7uAkE9ENG",
  "key34": "2aSyWwWCd81YdJvrcfrPZMvD4ELDBK11MjQK6XrZQ9m9GKZjT2oyWc9gPEfXyEx46F89LZycxEZSQFLbAM9ngBBf",
  "key35": "2QVSoMvRhkTeVWbnnyoneMCrYk7EQk9ttaNcvBjyvKMeeKKSDvHmUVqC4mFs7mskBtKtdWUXB4qkq2suCZTKmWKj",
  "key36": "5vUmnPFRvshi3cZBm4fbut2XuuWVbxDUqYbAh5UQKLUzavUpRendCNU3itDSJq1rdxmcMYQ9bFKseuZApEidWmZe",
  "key37": "3rAgiG8mpWHQiawXhUvuT6f6vtU3rNQddjGtcqZTPyZsbnhLk9Vc1WA9kjvWEhu1etyRrMgjzHmjGtcjGipHgsr2",
  "key38": "3L9a16MJ3Jx2MmgTrJJyXPPkudzng7sM2hM3sBZfwKukdgJpCQB8RTVUVCwcc3Ags4bcnyFwnJo2yCnZh98o87jn",
  "key39": "59ZN1DKvpj9UAdXoUDfG8iRApw4NcDnisN3Xjv8wFchcSE9mYKRjfFPNU5aQwUx3szbBZkg93FHBeCPhaQUyExwn"
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
