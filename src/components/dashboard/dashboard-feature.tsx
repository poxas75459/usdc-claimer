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
    "2wYYTzGWXxJqxVrGX4bCDF3fxePQyPagcVJZMQhWNxa1yxXogGMKTkGPNaL24cMW9cMhcvSKF248LcobDLCWApwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "awczkdx1uhouHx5P5mQ7Qpjv5bUVWedTkZZzzNnqrzsNrBzh6z65Vpt5sEKdttKfPFMBHzqnaPLvEZQwLLU3Z1c",
  "key1": "2iGFGTXYgBej2TEb3WCbXLj1V986VE4v3sbrxz3SmRCqkz1a5grrMUVZyinwe46URvWqnL83bmcRtZ3pdLPC9QGe",
  "key2": "3cFxaMWoprdVU29eJNaaLUpjJvyKNP8vMV2VyYrxZaFUFfE9nBraaMR5wLSxNer99mo4vbJmshWC71fgTDEbvTvj",
  "key3": "5g8sC9QDk33YNQ1ANjLp2EJxwBahpfY8V4MfiWQDyMP8CWgZ8nCsV6M5HNwT7DZD5n9UYJq5ARzexyq16cfJyBZq",
  "key4": "2rRDzWvPa6sK3T9VP3NBjJQNthHMCoKc7kYT1umERwzHa4GM7J4Yzq8NRstFSdynaNBdu1WJZvphsHiVTqGthdwa",
  "key5": "qsx6sA6Fw8oR5Snq43xxkyRzEoDoF6x8MXKBhS6pKsNPxLH2EGh5S31m9AtMxtyQSLMjPVGAWKCfkyRGpHFsPkU",
  "key6": "2dBdAgnpYypzz2kuptXBwmwaeYFwDLNchhvcmhMLF7Rw5ro5VFsdrnYq9zoL347GzNHXVxbZt1mExuGeUTiJZeGM",
  "key7": "31o5GLL6fpCbyPjmye13mnLnxTUm4jnBQrd8Kpw4xwR9Ln9yBvBk96TKTZUtfBPDaMjMt1uDsEjckF9yseoe7t6P",
  "key8": "21nSd2sGm5UBwMUzJxpdcfJKowVWEB1thQ5Qczorv9CGAWgHqGQn2PGxWWCrLrXJ2qNgcPDvkSpVXxaKvtH5S1Lg",
  "key9": "4jaQAEX44FDJwJDX58A1anso1EZiU6gRAhfNxiKXqQqwEVsJtjLBjtxsNrXxbsM4zgFiudqWYCnqt5rqqtCYqeeB",
  "key10": "s8d5wSAyaDA3Ac1a1mJydyHLmQTgNY87k8eJjTr4w77zBFuBy6jB421mtWeNCmjh1GtTM1ettjFqWyAjnkYd1Cn",
  "key11": "Cn5G7Hgax5fwNqbQqzxJRPec8hVtU85DkXxNif6QEeh5nAYE2Tskwxekd6gMasWBQ6MHCH5FmrTwnE91Xt7knV2",
  "key12": "2LEBrsxksFwwhGZVM3KyLEgW3qDRBJv7syx9H4vvegSyQ4fBRduySXw9ZbTNHcce2fxRhSXe9hdj5c1LGXNa7wZX",
  "key13": "3JC4BNSYTgcsrSe5qFwauRui3wbyTXDSqFFZJHvmCSL2rXAoRaY6bNAQFZB7pTt8YiB7HDisApq74DsHmN62vY93",
  "key14": "3CKYpsgLv3aj3Kynzuo6YCSuVitCbEK3x4MHKGtGCUi5RpgAPGYNh1RnSKQv2PbF7L2JANbjSdN2HmvgtHcdxtgd",
  "key15": "4mFjjyEjqDpQJugL3mjpBgzD4bL3mvYCEVeq7bvie8xxZN3Nkg6YWN9mG3njf1GYF6wSETVz4KG35w2MB9LqHMTT",
  "key16": "rRewRaGuQ1jf5j8H9ot2KQz1nv2gusHztYduqv9t3JSRvWgz1e6P5i4yUiJ5Ji5qsvK1kax8ojrsxqq3KCJ255d",
  "key17": "25vuDWnyK5UdgZmoMJwrTb1wbaLAbrsakdsfkYVcaf3LandPgXaEaTTU9TyJVDebeNoXAupmb3srT9f2qnzaUcVJ",
  "key18": "3nMKyon33YEdBdCwaieZ1k6RvSam4khiMu775p8U1QzCYbcCmcjPdsvvYWTQEMR6o8qT8zvVvvdvMxz68RWSEvDr",
  "key19": "2pSzG8ki93F3jJxrvGGERKeNLjamwu3t97Hyxhq4kq1zq1nSZEphWcx5HBTWsYYz9so8pYa4AQYkWnspqoZSxW6y",
  "key20": "5v6o9UrbbRZUCUtCQJ82oxs81X17JXVK6BNYbyjNFUCW48Pwf8qnGr7RLqjKMk8SqpKuQ8cYAPzteK9MHr4guzuC",
  "key21": "3svDqgGJ5BPvEHspJYHGkJjMZYBag97sMeiNs5ZPBMCcP1GNV7R4p3d38nVM2RA6cJ8m3QL5R64iDZYeyELM2ZcD",
  "key22": "34x8yLTyN53KB34Zo4jyVoAf4wzt6nXW1pTFbzSPtyptLk3xEWrMTnt5w2ku3hWbaBGxMNEUNQb37nCJYXo9HjTV",
  "key23": "66ioUipkfKpNdkky9qBP2CrvBwnQDbmCJ66BW2fZktmw4zVaihG7279zwDBeiqQcacU8fm7mFubbobrbWry4bXea",
  "key24": "3CdrNkhPyVBPLhycHpynv86E71UL34FZprdFYrWtLKghzaQt7x9nYGNdgXuDZcxa6XQX1DaYLdDmvYMwvTqnzp9h",
  "key25": "2cVpDWpKPS57YASrWNZangqoDFSVxa72YXdZxmzeJTdf9LqhgSCPNXtm3Su4Fnee5ExejsGxmjjET915Zxto2Ycy",
  "key26": "3ju6Q9VsXDJnEeTj9Z2QgEvE2qRSC3J8appXprZ5WScuhpKCJkn2xmCRaGui3Lt2mMkkKYasqmVwdJJZ4ZmT4785",
  "key27": "5Z4nNiqcAUdF4oztcxvvuSSNEJUEXwCa1qJzRuFzJyVhZrWhdcsa8JwDweKp4B8P73rwrSQzLPmv3hFtXzAYYPEu",
  "key28": "5JVnPD47fG9SZSubsFUpStmh1CosFFEjzk6JKgLWJv1STGRZtb6x7jfe5ecu4SoPqUA6Yqgps1GbsDodKKDCB39H",
  "key29": "mnSctTu55tmgSJbLRSVRmwqtk1Ldcz1GPpDA848myvRn2MdQ2LjVCyqgzUVM9EnuYwSjhrry88yV8pVPHSaQrYo",
  "key30": "kQRDZkVi999PSDu7PLpk2Z4FybApes5uNF2ndYgVBicTL5cE99c8rLzb7DhpC4vZUPxHcsiYVpC6bXpHwDq8C9v",
  "key31": "2oEdrJniXbr8SpgrZLbvCoKohyoTNstivpZ2GU1mUx68Jp2ajxFQvZb6WRbuysyqNg5kLB5VYQ7ezsfEhnMTimjo",
  "key32": "4fWBui5KhhKktUcY2mARcqsmSsVeZa468cqHuxzVD3TeKr2pCkNEfXDP9G6FxUNjQZcqkU8vcUyvJrLguNfcBA9v",
  "key33": "2atwNQuht4Wu67X35Dfr6Yd8u3yZ13R6sraSHuzRsAJpHTMAXuprwRXf8KZCSFXG2o7sh5fmHbW98uZho2BgDEeX",
  "key34": "5Jc7wMLiHYqxE37QofRhzYirdEAtdsRnZbCWYxwppQTDA4kGYXLeh1v8A1xumFfftwL4fYRFXXGsHAm4kzxkXAGh",
  "key35": "48mDq2HwzkrM37RDkhmBG22hwDkNJRoqJpFBdNeqF9vP2wdDxLWv3hVEZZfTHh9sFQo9tuNXqn1GKrRDbom2xQsm",
  "key36": "2FjpumknBjhNVJ7CqQkfa2Yt9ct32Wx1MnFDwsstDgVRc2ZaWKE7khYScr5qsmwerqYKpnNU2A28iXwQp4yXLvSM",
  "key37": "Pkw1i6hTBwhUTDe5MGUCQKbWSwMHJCwpiotjyMRJtDS9oj5mEM5NAwTKAJJCjcBaNFeCjw1sV8bNcVKtypBPwm5",
  "key38": "2qQ7TKwVSF5HFKbUcTT1ErGTHiDmtyziF6khFw3kJNs5V4FReHtwdNp4QJiibX7i5Am4wwqmDgSD8ZFsHw9Fx7aA",
  "key39": "3u7j1xCbzgvjGHN7HPfDBB1EBe1nVHrjvH7HrVJozEDhAKUC5oDQwnaUTbLPsrbU1Lo9zGHzkHXPj1mJazKV5X2j",
  "key40": "26VjnMsuwCfUWKw6GXC19zN2pQvM5FqTfWvBQzqAN69fk3sEMqevjTHSVH81SSc1Mvqg5QudGqAg4txDAVERKdB6",
  "key41": "4gKPYmPaUDK6gw7fKUCYVMKw3AxcA4rvfkyJPLD6cRVnyvGU44Rz3eRvgejhybYTChKUiQNTEu6fjQx83HHWmYSw",
  "key42": "4zikVR4BL8n4msKBH9oYHVFteM8jHmWq4u1tKVm6j5t7BGL8akAuHX7aRZPigL9SuphCCd7w8KyW5qy42t4DGJ6t",
  "key43": "4MTWZdpzwojfKtknMU9yGg4Zq461mAfkF5LDfv6mGKtzwvdSVsFyJpGE4CQDv2UsL3vHXMs8SPtC7MxHLRDM1GMv",
  "key44": "nSDQb8tGznALGZNygfa61H8KJJqUZ632d6SJEMMK83RqGoNrWh5xCShuEJSekmvh4KYCc9Avaoj4UvUuWhdTaKK",
  "key45": "3fFjdse9QLvrXczwm8FGbtT5VnYpYFVrDubrYi5zVnwRWKTghw5iYbbavidKAzXf7Gb3MWhPbB1MSsMGhXMrAYv",
  "key46": "4rNEPjs1FHPx6cWx2XaBQEJmV9RYptWPXPU5HtpUj3aWGbJadtrHLepoMZKGUXfu1hFxXugKGZoZTpt5vDnGH7H4",
  "key47": "ydxtCjGLT8qiXfZL8cTtFQQi2kZw6gnvrXMkMzHsDL2y5pVRbnervaGJZYtAdswpRffR5WrKUpjxoHfFqrmbJcY",
  "key48": "4ex3yC5V2bcrp71yCxBJt1G4CmpTAXSfMiEv4kvz44BuvfTufvaU6c8cAEWjnCViK3N9ay2h9EVpqmKuQ8aLtLL5",
  "key49": "5fhNSqHR1DaEAtyPusvTtpm5PejDjC4rScyaV7DqDCMbZfFfL7hPDPqV7s5oTVFy11oKSdN3NYAq64zcBgScovZ1"
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
