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
    "2K2LFgbSCBsicJDP8wA8CBp1sGFZnCh7i45GZpts5h1BcM5st16sZeV3vka4FH5dd8NXov8htmaq8m8h9fV4PnTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23GX9LvjE2FMrJ7Z3k2PQXdqkCdJN1K3DCVH5khxmZPRfe25FvQDvjncToy9MGyTwf5g1ywUeA77cEQKSVtfJwPx",
  "key1": "tCyh28meg76HApNmjsxLAf2fSNyakHD5d4WLfBgNLQSaXb5bXidmisf8DNYr1CVWk7STWs7hSmgvpNkRHrt42DJ",
  "key2": "2T95pWR7eZyy7Ba7EiXwpCsKiLBh8PSsFoqsU8mzZPG1DoEnpo883krsvbhKZenTMXVNrFTqYUdBHcvg5qCye11K",
  "key3": "4Rwb8bzie5tWwvTDuREwsvACzkHbgNwYxzEiNoU6PXT5oTidNkLPiJvFTYSHCpCxuhqQBVzdAkNGekg55ewUhqhq",
  "key4": "xiHjeyyksd7RMJz7nAenSxYMutF3ULfC1VMpL6Tj1FYshNsBmJdki96PEmHbTkH8ptPjbHejYxek99GQUv7zLjD",
  "key5": "4k7Y2jLz2yH9WJSmvqeq3SKRiWjq3UEqhS2ESZJJWtk8T2isuoZa58G8gcb5yaKG3zqakYHmyS728s7uRzCaMKUf",
  "key6": "5s2emyPtkZhuaHLaSH9BHcfzL6URyoujFUpbty5k7vjqSJ7megRC4si8Nbipy6AsgsikDvBdb1RQbxvTAxNsHtN3",
  "key7": "2c8Bn1h5qxTrGVjGVCP6G7gazqHY9P4nhhHdDJx6ACgYrrcLLdJbYwhESZSTejnrcDe9uBLhLrwhTV2c1Nbru7t7",
  "key8": "3b1V3Fy5QW7fE2FgbUJfJtbbjaJmhvhmhAm1nuSxQuguukAximYHF9ePBvBmgZCzQzVEobi3GR6cXhBoDZDEdcv4",
  "key9": "2mB57Dg7kS4neEPxhLpjHdKujLiGvCYjwh4bBBZcfivexExfowRTwVsz6mRjJyuLnjQhC1SsVRtrwqJYan23PZ4j",
  "key10": "5rNrynuQ5oaEEufEkVC1jeottEG8WKunHjES84W3VAN9tmbjLNPgrdR9zjDKwNXdncayZbCvrWXtkD4r8NB9mKbL",
  "key11": "58Cxm9gVux75kKv7NtHdSV6Co1WtnAxHFJiiod5PTZQZQ4noLV6uWemocoUDkgQkkXj2STDLQxSZAELaFjxKM3Rd",
  "key12": "QbbY12Mc4yqkmJb2qDbeFGid4Q5tegrXds6BHPrmGgYKBi6v56VqCSfwnPunWYd5H99eTa6Ahcmxn32xqXu6wJu",
  "key13": "5ZhBLUWD8BDvS8FMGoiWXcjNHKhCdvLwNnt9VbcNsQ6hukT87C19QnWmQqxzKkd9nDBdmEhyvGK5r1MjR5NJ8NdE",
  "key14": "2SbimrCLxp9PA3Yre2it4ByiYMWZ8hSDVj1yLXSALvUm6Rz86eue4U3iVsXwtCEgPmReuPUoLhmwCsh2Wn9B3n3V",
  "key15": "4eDffFnH6NYv1YNcByXezNzZsBA5NNrK29Thfi8dNPvfqDca6nJdDk686WeBVjWJNdgKPjHa8PrmStxJjDzBasvH",
  "key16": "4mxRRqHYCAiUfzq7x2aiBAhA4K3p5PyZuyJpUw2wce1KPjuNy1f3HVPonKwGZdUeCi85Rs2QE6vqDsZGMScQBH6P",
  "key17": "3zJjttgcK3fYyBdWFiDsA6Wtn5GC2mpdcsZXn1kfuSUhZUZfmSv9y7i2QYHbUHrKWwuGWXcdYkaRSPa4UwcAQf8W",
  "key18": "9J4ZJgPTEdBP3FrGtxDeKnHMYR9iZRiWMWs2ip3YC7rDtryTHDWa4FezJ3u8xRbCkxqPgMMnLPUXzmNGpvoVQQt",
  "key19": "4pwgyso8HYVu7Sp5zQr7RXCSNbhy2UKm3CqHJfHTptsML83chqy22n7BfY2LBodZXB8p7ron67CKCmGcjjotZLDG",
  "key20": "5HE5vF4vbfsnbTivkk1wYF5QvLnnhkPcF1xDMCXv7AXah1yZvdUDxfDF6fZQkYVeNF4ZizakARfNYbypfNDiBc93",
  "key21": "42eKsrCr8rfTfoNaqDh5Ed7ffbPWkcsNYXnd8tkQ9AJXY7GvAhEWzhZRP7NoXMUJxN4MsLw3X6CC4qZ6Ut9tThbd",
  "key22": "38hJaQ3vwErmo5ZZ5wgKNwN2jPxJPmg7oFneW4JkmmQ6LuFBs58nw4zM37oJyaNiMbEivWu5ZFEdamzou5hvQhq1",
  "key23": "yFbfaoeboL7PFui1aXN6KHqrWT586nPmPTMh5uX1Wt1xGMLeNK8LQeHs1K48HaEa3UT52xLFoD7TJGegmZs6nsA",
  "key24": "nEuYViXgBTFkLkkKnCDvomeRMCmMEQfL7eGZZpRcePJseKakPvKSupwxvHGxT3k5hfYgFnT17jtipQxUtybBemV",
  "key25": "4pmUNphg2yfEvJgbVPH2ZDuBsxSeAWjKRB2bEtesYpwhvjCTxxpTW2yrg5UHQz2fAmJhvvcrRmFhoRAbFHGepvm6",
  "key26": "5UfGFhRDxsSBkZXb25QHNmqj2ssJRibJfS3dpCb1ZQYi4RCyxVcxSsqT5ALVw6xZcRAHs4GVfVo8owDEwdkR36Mo",
  "key27": "2P6sC2aLnxVdBp3m1j47i1JMWmq8yQzhCGkE3aFUFTPWEYx3NwwZeZLAn5PTDWVLwfE3vv29MwYr4XAu2C8uuFCF",
  "key28": "5vRK2jR9DaHWWVDNkPhfkqGNFEXeDodzEjpmq6grb7At7ZgswtmaZqVaWzACyYXjtd4jbbP2G4f2Gu8sGhppSBkL",
  "key29": "232w7SVTHB24Ff3bK3Ut1Dnbca2sPUL4Aogh94EEuhEJYhVWjaEo8Kw1zDKmfqZYKvyHU7ug4eMaiZ3qiAcvd56T",
  "key30": "2bEFuKJ9YopP2BPFjDByBSmUVEggAZfLGJqjWfQhpotdBXVw5Hf1ohR1ZZi6zzGbB3obevQ7sxxschjHjfRgFMRB",
  "key31": "21hoatvgoNpCxibzRLV8Qa2TqR6WvZ4SH7DQuJ4zxrcu1yjik4ENWaWVadMUSkuYiCdnaoTVSKEXEU18Nms1A8MU",
  "key32": "Wu7ZrCUxx11bS6fHTfAZkm98DVwVZGZJX4nieZ7761iYtqbE9A1N32vRiSPBduNzrmXeGKT2PigExezBEXZMzep",
  "key33": "2gD1DgDMMAp6xQstCQos52bKrjFr6RGeg3yLxPnbcMRJycnYMcWnhoFxqYLEnNnB5mkHQ2v6k7oxqx4ubFHJxTAH",
  "key34": "4XEYRG4C9g4mV1mos5uLUyPEXNR91rTgER5SZvzKSLAMpqfoinFhGTh6ta6vSbipEGuV5qDbj6HNdSxEGrFU8awt",
  "key35": "4pjTCz4JdWvfFUT8dzwKE6FgbNKzwNWkaA8KEgnXJCRL7VWjnCoc3KNchpJ8Pj5S6DebPmvkBnX9zhgVLzByiVYM",
  "key36": "m5hHQuBRFNEG6rGVB3tCC2uQ222kZxfPK4w1mMg7c8fZptTonUD6sWqMha9DRenZwCVdxiJMRHvm2zveJR7pGEL",
  "key37": "5FCAqhtbfSsLskjbUpXPZYkeYsyeBTG9BX7F97JdYiwyy194Teb7Ps4jWRq3JUDtpEp4quoTHRBgMvqypAxvvM5E"
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
