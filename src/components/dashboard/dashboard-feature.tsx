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
    "4hrupuJEAfUdMgieBB3WsahDK4AffPM8FjH1x3hcrRmKEE2fWXDanQtV8KzKxtKigcwfh25MnjXXzmnTwqRgYrgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EyZxu4eiHf78Kq1qw4CXtpz14d2wN38sYMsSRREzrY2gMMWqCKDdP1bqyRNwCXR4GvRE4DRQgkhLYy6VVgTWQg7",
  "key1": "4cVj1KPotUrzBYaP9kJ1dQWCHubX2kn6F5tf3XZDMAo3xhZNQdfSxfX428rLTmEz8TAWPKo8Cw1yaEth2wgUP6dx",
  "key2": "5LpCMoLYkEpiyv4jRmP7gzn7i1x2RreFbg5KGNSEBgfGtF97LaNSL3Mqz4NLhnDZmsiJakBJXbenyJqoTYTRH6ok",
  "key3": "5ktAAnfB4RRsFLAEhbEANQpm2bnYtNwqWj7rEfGrdFfTMz2YYSv1Qbr6gepThdcQdeaGpyWVcBJKQyVvTkgep1G1",
  "key4": "3i3FEGLhCdCY4EvCt1YAku6Mx6h5fd9eixt7VN3ukHraZHEvDijiCd1YsrpKvJBdZC2C28SkkmTwRDG7w634uZTs",
  "key5": "4amQcS9obC6NczW8NfSYAbv6jdBLgaCsgs1Dgy42DNnYvyditKdQ8tbcyjq19fd6ecm8MT5NQNmmvVRXjz4NdaWu",
  "key6": "4YeCDDko1AKwFW9DkHnruaZa15W3j1ytswznUKLFkuJwy8GcfeJaYb1qCZDCnz2BrXfsuM7oBHYvJDbcvWhHdHTH",
  "key7": "2ucZTYkynitRXtNtkrjJgu5qUcwd39GEitvs2CRLFUcRxSAWKu5hjJfYdaMagtDQ9KEQeKj1t1ymqnYxz8TKRWLY",
  "key8": "51ejQUpfKm9Sgcsw9Bh3sf8bBAf3zmfRaoLqwTLi3UpbwV2JkmuEJFS45ZvoXBpfCEHJkCaAUqnuG4CCY5q1yn4N",
  "key9": "5UVmkYhXkboxtwvDYi7ER5hzq6zGESukyxA6k9fE93G9gUMs7uDpwbDBu3u5r1msQKT3tAH1vC8hKU17RCzkcRJn",
  "key10": "5oNqAkbU9bh4dk8uxVXT7LUZjfmcqXpzquNMsiyDncMAM3kpqtUHqx6TpKKnSHr1bWhXbnBADL6STAGWBkGDvSTE",
  "key11": "MJgA788vaNtWUJnAcZnvo76y8C37QLNUGEAompvSkWighgQTXcXdzSSBg7VUL8QLhPU2BztNu8ThKZepqf1g4R6",
  "key12": "2Sq4jimUgUFWcarm5YK1snHMAJdCnKKdsMVd5UP1pJ9kvWKEfkgRvBFfhCUQop2Tpn1bcSp9ZwzFaT16DsGVzJb6",
  "key13": "63sAwxY6RczKtex626BAyaTPKneHxKU2vNbPezzPcN2iFfjRqy9sc6AqQWP61XA6X4H5pXsmCqLMd4u392eXBtJN",
  "key14": "Vr6diUGkuHhDyhgdXJukgNxnZ1kRFd3ugoxZ2jKMeCHhZtXLPti1oPrXbzzUqVf7B53oiPRfY1PsaSPAW2jicy8",
  "key15": "3Hhj4FddNA4xUywxAAUxDEU99dJ8th7fNcdDfSnGcwCyjK7ZU38NRxpb6uqbeatMvhMsTY98NJrxQy3rCzLy8b6D",
  "key16": "4zV5bqPJyMHyGnwuJmSF2ntgKfGjyz4namQqUBvGKvGDBjaKbnQ9hrmVYUVgZdkFeu1aH1xMiVvtsaRKzCHM6XVF",
  "key17": "5Mvyy6pcWvNNTcnWxFEsxJ8dz9DvnV4dUMx7DSF6KdTCKgxdvmKGGmve5CPp6118Gz25BZy9KwAFRSKUAQHYKD81",
  "key18": "3myk4RZ7uzVaaKJrhf4KzmpY7xqD4jsAyBTSYcbxmMdQstY4FrBE4MxKnawqQMvc2jzUSAn4mbJjSMj7tYufVREi",
  "key19": "5AjAJiTQKPRwaDT8RihLGNKs6aucUbkn96Qmy2dQmXmRgkqXXJnfPpfL9iXSxPyur8WnFrSgVirAu2TiyChhY7wy",
  "key20": "4d1DBfs4J92ZUdjxWvXgQy98E6twXn1r5j3W6baUcyQDcngCXGHAAU2jN97LKDGQTwUVeQGWuEjRoMvBBRTWtdkV",
  "key21": "4NeYUyZUTNvYTPocTiYQu4AXqk27GSMqgjKLhiUCqKqzgyCLky3V8YwikRD7ZBkzZL6Pg5FY94gr8TNyVJoYrZZC",
  "key22": "5GsPN5kDxUr4vXeNUUeCd34WuJeqf9vxQgRA566m5TkouN7gos5CCk1G5THPtGpB7ktqrxq4i1rh7wYMBguYTjx7",
  "key23": "4Yd16JCdHSQRzU4wcyEcT4nbTUFppcT5Bj1956h5N1bUqbYRpRSkeiEsn4YGypmg2ymhUjno8poyoUxzdh42bjg3",
  "key24": "4x1f6ZrJb45svNxK3MPRQfGKo627q17PnqXJTU7hofqLm1t7ZwMpYWk1hQu2tZNwsvd9Ypb7QXGFsr4ah4MTRKTj",
  "key25": "4SC6gswFjgn7ZrtJ41C2aGjgbCGYnAJyGcj3XpbFazrd6xdiEBbmFC59SiUmjEuekv1NFLbaJSd2Qtj2JNpxrASZ",
  "key26": "3qJbAES6EzCxtzhTcqQNp57Uw5m2DgtA5getwni8a1G9E7J2S9sboAQkVadbhPMUkDKFAmvsFDGnyKf17DLK1hKJ",
  "key27": "JXrV1uoCWBYVQehF9hwp7dR7zeeJsMU53iYfg571VnAgZkfxFguwByiphEqFYKmnDNYmPRSsTW4G9chhoujQYm5",
  "key28": "3jYeaQc7596Ht9y15jQiytxvmLUuHmArXyFa31FgEDJzN7y1xSvFwybVUUM2m6VTRSeMr7AghYzHN5ZF5kk1hPuh",
  "key29": "4WCQLN4zhST6tm49GSeXQpCdZFer23cQHEpHQw9STDvk2uaSfc7EA3Hmb3hmxdBogehCbMPmZu3xX8UhzdEQhgXy",
  "key30": "3YUgATvRSJmoDFwssuTwAD6btZsMDEkwMZencU2npfpEZy9Rv5rx7byLYpRLwRU9JBRmiNX6NuJeuk3Ewdu3CRQn",
  "key31": "y8yEYwcozeVmmfzNnT5q1SgXGqYhKGSYkdczcx3e8HhFEk47oR1heGifjqv3V2ZDUgJJs4yVxNFajhS19hnGUER",
  "key32": "4wC6XnoWnRQdftzT9zQDsXV575MfCZuQCrtGoFLFBfgmuavNLRJqcohhYpYz1jhXAijTUFSKZeEPsY4V7mLij6Bp",
  "key33": "Xz7LRxAxMVAqzwiNEQRKEkHZXgTonwuDK8L9TkdizwwhBJudpmYT9HRGLvjYTRMheeYisGtQbCWpsU6LVp5xF64",
  "key34": "47ZP7SSC8hsTKabYi2FjnnnAxPeM2YhpjdgpDWFNQhAV4jNAaWDeyuJ6RuwLceS4qtQNbBzurUTpnJCJrGyh3gqS",
  "key35": "DqCkiJKZoPadBg9tJ9VjWAPpnGRLJarzQsTcoN1CiDPZGN4RaiF9RfLzMaEnUxjCSEDqrxXT6j85VH2zg2nofcB",
  "key36": "4j8YVjFjwo82GVVJBpEv35QULyNxFVm1JyH1JeQeD6khrS2gHhDRTBEaVwUPErWD2rL3D7odAgKdbDQ9tN7Ydrcf",
  "key37": "384Sx4fcGtQ7ZsGBWrdmBqpM5yoNJU3vJTFkwxkFmkCrwzev59BhSvQmrFPXbFY12Wajxe229vsGFejp1k6CTaW4",
  "key38": "3UPhJfdrjkkHuMcYpJiQ6vRcXbRk34i85guY2DA4ZkyW1wqiNm2ZBCdQEXGHKxeY7nEAQ1YxSST93mEEyExn6Y6Z",
  "key39": "2HbNUoEyEPNRfFExSQnzHLTMNfxWvKbd81mPo152RcyrqNYJjkhRMJWUaiQZB8xacvqoRH2MnMMJbdXj21UkY4wv",
  "key40": "3NPB45PV3mFgAvfcB4E5CnhHPUHiXJFcHYZkpyf4FVLpexXp2KBW7H34iYjv8WvNJbJ9YTPM4nE2MGmcu3wTa8i1"
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
