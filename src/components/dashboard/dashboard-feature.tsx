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
    "34JJ5yqz7vSjvmkurgUPzyBa2ipDaccR2V6q8N8ph4eKPb75U4UyxLbMk7GEfF3fwPYLwZRhwHxCahoWF9QtPqAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jzog1UdcJ1fqrKXb7n2jiio2VUbDpEph4wbWwhzfVEh3p2Agn3LzmMTEmJbQ3NhMPeM44fMBKJMmhUxLAK5VxR2",
  "key1": "2tNDoKUncEa9GbcVGFazs7Kz3bT7azTDt8T7R4JXvQSuq77EMEmpYHNtUFHgVKhvFjzt1u7t4yuCcCJC87BmhELe",
  "key2": "2nQ56GnpBJTZ6ksnBxWfyZTm93TQZMKtTvgogsns2q8HuJZBNTiJVs5fM9t83nTrV8ctxB6MCMYnzghMUPfBWrU1",
  "key3": "4LAiAMsVsKtLnYgh5BKcL52TyRGfcvryH2v2tyCDCtWSgDTNKciF5yxTxLzwNNxQypJXZLbxDKVpK46P2p4yutXs",
  "key4": "5uEJzFeED6bG8Yfi2ubkuww7F9w7iF93sBPFe2YmqvVqgqy825dSktjkF7FZ2gcrVxYbAKghtHm84ntsXvLZj5Tk",
  "key5": "45fZ6i71WXMeMEif7JL8dwkNmq4p6HngFHw1wx68tMSrXjfAsjQF9qnE4uXqDcBsx6KREUyvvEVTqnRMy3GqX6uX",
  "key6": "3rqSTUDigG644w18rr1xj5aD1CbdRWiQ2hzdLrtB3nCumryRiLHpqJRy6nuUEe5arRpQoS7EvND4BLeShE9gL31d",
  "key7": "2J5mGCSw5gzoESsKypyKfEjVrDR5i3fG41Eka1sx1387rCjwra4hxGy7AGvBuuxKTKqJQketiu2i5dZznTCnx6H",
  "key8": "EGTKSoGK2sab7FjLEx4i4bRYfz5RqJ6S8V75eKFj95TGQAfBSYhyvYkoZW6aKtTYpmT99zSwjvM5iiodiSCrnob",
  "key9": "5awJZnV6EaAripz1gh9tceco24MjaBDY3zan8Bsta22pqXwxFefNpuwrnCg34Qxd3r7wAobYJbEL6mnqJB2yNqNf",
  "key10": "3B1nHxVuSbmVkHB8EkrfSV11jGeRwPVtPx8kg1z2NgL7mRF7ZpqvQje7v6gkKiiirS3XbanXfAeH97gdJXDRAYDY",
  "key11": "4Zz7PQg6o4MFmvdBiLteQHXfPeVC3DFPVoCAvDwDzCNZYuyBJkJgo9imbM47fcaDwQprdQjwkKc7rXbe4bir6Hxg",
  "key12": "jbW7yyizcRRHajHoGGJpAfWwdeQkPkHqNxskXqHb3c1eM7SCUvB6DNPe33oNeHBtmd6xK1JaGxwXqpd5NCEZNwk",
  "key13": "2YustCRfJJ6tJiEkhFg1nVVXzjSaYTYTmc3ecK71Y7UfmdpmcBXWJYqgNVBiLEeAedVgeM1Pzz3QGiQZhwoZmxAy",
  "key14": "5XM6pmQL4BYmkFbMysAdWciccz5nyAFxJM84b5PtcTSgGvxQowEwZvSUH87D8uJXT1FtLcsbrBfAPtqqRit6ECGM",
  "key15": "qHA1p8iGCAxdNoyJTFviw3XL8A8gtiAwesmppVBYNYUq8wmESC6VRsRAKXTtfLS6yzg91UdhazPoLhKPZcQPGPs",
  "key16": "5WLF5EhHoR8X1Q46RfXEKGquUWv6YqBx6TcaqENHhJxXjs7wKyDYCc3ALuqKrSJWnkmpH7nt23sfRnWxpfLVHzcD",
  "key17": "5xBJ94MGkAX48ztnj7CMn1qWCcnPe2iXQUUqt8novyiiyJ97zbKCErd63gW3PBP5tAgMy4MJjoz9guazMYyDqBLd",
  "key18": "23zv4WviKHCHdtVemmrU1XALQv7RQGMwE9oaWWRMZqnssQbb5TyQtiBtAipRsWRQcCv1HrU9Scv1zBMNjYa8D3kN",
  "key19": "meQLHSzCE2hB1fcyLx6rgaG3Bj5ewQu7jv4HjNUvGc8CbgNGg7rdJcz4pV5do624gLpq3EdE8yiaquhsYqqydrU",
  "key20": "2NR5PvS6ho3s6L2Ntk1cXNnS1vzXs6222GrNMBR6CAqEHoXs6ewEzL14LWtvZgv9XrDmrP6RwKYGUe4VJVMQgjqq",
  "key21": "2n759p1vFCnmy1APgwsi99mGm4uyBe3MX2G3PBSpPM6ppFcg5GUMkwnAdDdggr3Vru4cnRxFL9NFUMDd4t4Z3wKS",
  "key22": "2YTDcG9bkJ52gAT7SWVmeMZnzxnKwDLSUw1fYCkFMi6Kg2TPPrfi5gpfPTfJZFTBwU975CuZ9ZDG42QDaCobEr1m",
  "key23": "FYNa3GktLq5QHkbf9WVgSpGUHzXSyFcac6dM4r5YeqSNg65pYfYDTntXiSfW9vWaXrRC7ctgYMChkCEBJ3dS4oM",
  "key24": "4QmApo3cxDDC25Jq2FDfJuUNJ7CsbAQJWfSEKC2orpdtzVMuLbMoc51RWvpCkJqwmGMs6wnPvFRsfEzKHKRGKeU9",
  "key25": "59Ph6xU5T7T68wEB1NWdQ4N2zg9jzNoPrvTRdq8ECbsRcevkt6TwbAjhv6exRKF3aKTA7SzREGBPsY1oT2GMrEvH",
  "key26": "4CNk56MCTbWH3mk5JzaJcY2HK6a1R4TGBVyFKLKxGdyeq4wArtYATGdFs5hqPKsvk8xXmNooyHHpa4vE69JKBSJg",
  "key27": "4VdtNtBjHt8CWYjBLfpjNiAxWw71SujSxguytZND28STnRBCyUaMDcfdW7X26uz8qsZ2hajZ9n6PJVMfNHN7D9Ua",
  "key28": "4EYX5c6S3CDM5YXb4GDZVEPdfLsuZiCjn7DR5kwZfZ1Etsj4uTtG8LsAuM3B7h9dR5KxoLQFz1di78TWNq5xGUfh",
  "key29": "4Rufvk3Sr1thM5YgdAs8rMJ5gsn83ohF72ak1uJhcA6o6D8aS593qqPmegEkn2zeov73uzLTVSxB7sX8XVEM9Mgh",
  "key30": "2MkGZduuC93j2FosGWw4STy13qx8oTQdRsaa1rqajD6Q9wKQdqhiyv84hgDr8TAyzTTyzn8EHvFbtG4FFEQZjnzF",
  "key31": "2b7vfbLaqoU1H51jJjvwk4Y5we536jfYpAAdoFRYfxNZV376SrU5P661BDRT1T2EVRUvrgQVqPQ23yMY2xLnxGLi",
  "key32": "Xrw71NBrDfH7YPHGLAAiCshukCtE7yeHKLyWkQmRB2JQp7uTVzEAZkUsiWSrGczKBw8wmVWqsBZJBaYPc6N9VtB",
  "key33": "3TQR11wvBQVWBRYBaMmBJuiQNARGsP4HZ3Fmm59WRfHttqCwgLUed6qUeH6TJXzFANyV1YBFYCLMkUJpPLFeSw9N",
  "key34": "5iFT7ydta6b2xs9X4SySy6e8vUGUUk1fRf14hEsYo74bv6JfGyXaRpEaGmfq9y3nWJsVRsgHLMDRM5JVEq2Y3jpQ",
  "key35": "2nAJG9qrqWov84nNypotZW1MEWXB6wiqEXCJAncQ1iK5D6ywnrcymWoLKUzvoiV2CZAhY1jUZrctqEMVqMt4ecgS",
  "key36": "2tUu8v1NmAzfajBrbvRfS5jyYS9H4TPs5kyGHFJxxhxNZocnBzPAepJgK43eHafJxYrWsQGFatrby8ec3N2shSwk",
  "key37": "FzgTBWP9RCB7unBfbFHMdppwKBuDzNBfmLreheQazuFvB9TTfkmvwmiwYdhpCMfHLW9jXv4VCVhVzWNpzef5YSu",
  "key38": "2q3iwNrkqKnTSXBgahFdwaH5SyU1RXUffMhdgFVtZ5gX2dZ4ymmAsC9hc6UGic77hw4XEjvTP1bFEwpLh1y27PRo",
  "key39": "2FMcbtUfB9nvV7oGFXvP8fNGk3nRho3WhEbJxbZtd9ZAUEwNd8jdjTCEBKoQttqjgGrwQjKdmh79qFLoeF9r4o3e",
  "key40": "2fC2rVDBskf2mkDF6XMQpLSSD8wwZgHrrWSa7ohunXrvPTgeUECTLX35KM8qFdbCtHPUH326f5SKCfguj6TaBUmq",
  "key41": "2vugYEF4f75wUuUiTfV5ZnyNTZepJiezeCJBPRU88YTPuvRw8SEQcxv1Dd4gBjntkHiLdV3t6hEoV5wgvXBzUeZx",
  "key42": "2q9559ySM14ZCxq3dYcLMRmNjpmpCNaFqvoLsqNvHzV2U6fo8J5wEPsPPhLz9jBxcbk4CNr5mi4VrDBhj7DPRQh6",
  "key43": "48YEnrrqZ14hByRwxBvUPQFyaafYxUWsnvuLuesSzMs8uLHvY6M9pizLmKJZkomzaHe5hgZcKJSMqyyj2giykNt8",
  "key44": "52pFdGz1qhrwTtLytb86jMGsiU1T5GsvqxiH82BS28mGfsjbNFmpFDxkvZM8zM9ZXN4azYbbZL84LerGbHNTJ6VF",
  "key45": "47ft5m48oiKW8GCvCnpGLMGVQG1n76Y26oqomJWKXGXNEeYdnU9zgUqTayMXXv7SdHm5brenFHK5vQs7mRkabYiT",
  "key46": "2k19vK1FiQYpB9noxp6STvPsTqG8pWTUC3r3j37AsgUEa2Bp56VJBhBxjRuqrYXHgEPRDuhyfQUqgZp6v4nX2fDk",
  "key47": "3ZrcbS9Uq43mGeDKdEBJhq3PjbjmSyZnRBFj2fCrmA2VUgZDewqvD4kXFaCvYpXGMG9TLSRznnSukVD4uE6oUmVd",
  "key48": "26dmZuCkRdD8JNZV6He9iooVsNDc914HR5p8C7CFi7XKu8ecEhf8bs83qBLvYiP43rVpxAq6X8gJ5drFpUKgyrFe",
  "key49": "5iUDUn5GXDmPZTWURTEnRzyLCLHpFQfUFiJuzz6t1kXNxq9Fm6XSerxhx9Kj3Np4rSPx4Zc2JEQFVwsYhV9YoBzf"
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
