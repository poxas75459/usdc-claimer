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
    "5LZaH3GgtbvjadcK3UU6ZH9s16UHn2WY9GXmzQusDhRUddcGaSywETV2iM6qUsz2QrpqZyaFDS7nwAVNFb1p4jDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NQAFGUN2r76Caih7PMVMTTa6PpJAW3ddVmWzMegC1tEg3t5ongUwGRh4vpk74gmgN3sCi4WpATd3GHFAsjsUW22",
  "key1": "5KhcBpR89YCwuDsmbUVMQHUmCdry4nW2WGYvm7fK4cfnH383whSfYrPFWwyVXkGVMdScXnDjfXBMxMnJimohpUfJ",
  "key2": "jKfkqGTpRKxE2RmWU7CnPYc9bCsJLApxFfvRZDPPf2YQgeuGGqtcRKVPexqtr5aQD3vm96tMBSY7vAwTGfgAv4q",
  "key3": "3EgojnTMWXK4g55X5VcnZpvr9MR1M9usy25WNtxg7wTchsKke9THtSBYbxecAUUQS9z8sG8xfwSQKgGKZckW4KHN",
  "key4": "2U4TnL9yKFk1sqmsejkKPrYfy7ms75bWZ3UJMWYqGbvjsX6XByHZC6LEYFQcaVPbs9KLPajfynCe342G8WmDVStd",
  "key5": "4N3oBdfXP83winYSN1MYSEvug1GwpQKJ1FXYCEBBQJABudw2DoNEPQy7wetEhQTQZekTCcobmPBWuGobKo1UAQwb",
  "key6": "2VmgrmxFs9H8hiZX644NDewPm9Efgvzsnv2JCJ3Xbugn3bW8n7wSgFGC7jECzaWMbBDXdbMrKt8L3ia76yjbBH8v",
  "key7": "2wgUgGSmkNswnN6MHzCkQx8Bih8wGDxZ6xC7SgZJ6svvXMA6bv6HNcARUGS9sHVAXWk5y8j4VRi1aqyjMtaKiw8o",
  "key8": "5zfpJ9E7okSKxTkPLKAVh3S14NuTNP3FZfChxcUXorx5sayZgXxVGKE9XZNHkzwsav9tC3BG9zZoi5pkEVD2CyAr",
  "key9": "3SFM5vkqEj8b6QnJHFdayP5M8mzwAafN8i9TQ95svj67gGGhGL59kUpwaY3xWLbmqqgvjnm8Fig5Lhc2HAMbeFjK",
  "key10": "3aQq4NAWv24gxvy6p4hpVPWAU1iPiA4fdm6m6ZrmXVZGaDn8WhyVLFsfEbX1kDYSWjubKm8Uiq5C2UiygFBrUv6S",
  "key11": "557hkqWVbkRtvsBBRmxMC72Pkh6iK9cCUCzvZvpAZRNnZvjCiEwHNHYiw1BpxAyMkKuzyyJjHZHLaBdmk17V3cjk",
  "key12": "4NA9uPJ4SxKLWWyhzvfbPtsyiDmieTh5uhXQTf9jNKJ4cBWMgRGgH749WhoUFoJcBuR84tPFhs9QBJhr9QCrGrvq",
  "key13": "4JECmVrKDwSTLAPHBheqiqoiodk1ZL77TW8trp3K2cyrkiZtdnbRG4ziviQ44LBYSi5kMA8umpvGHSWTt6BwKoMd",
  "key14": "2ayNA7v7yCdtWGWUMjtgXXLyXfN868y7CznWq3vzThbvndKiK56C6DSLutQJRtQLQdcKCqgmUPxRP5LDgEqtcNbo",
  "key15": "42w5Ja3ZUwjKUD54fuHb74NsRRBeC89NbLGVyCWuUzgsuaf5f7eWp8CJBPBVbVwscSC22YgqCmTSWwpeFn9bDz8a",
  "key16": "jLQD7ceGUgDQmXJ7YPiGjR1Rjbqs8LZ58FyR7ctu782inom5Fko8eYsbXevneVVUaddiYwGRwHYxvfQzoaTN5ew",
  "key17": "vu3i9qJcDrMFqDmmapQGbx29v7GzMoLcyFUHHz6d16rRKLsuoSg6jj1UFRweHdkbZatcP1XTrFGyn37iksCavHk",
  "key18": "74kzJ1jSmMjnK1XHH1oBfK84kiRka7KmkPYYsqboJDyNWXMdUzTATS2xqZ8aDAQ9E3oZjo5Zae2Pi2NzHvQjjWP",
  "key19": "3bDfatcqVipEoeab8ApPWYAjNeaM6XnD5WJGGpT7R3CKZsxZEVwrBHpkrLSLiu2fyTS4rAvYEDvYfDgkQzWAyVLv",
  "key20": "3AvQ8cQ9v9rXeWZgCFPZL8zqX6tcKkEDyX1fm9hTASsrkbRabs7zMtnxZgHnC3bJqg3tyqYCh4nPo7TiMTwWL58r",
  "key21": "5S9T3wArDTMBesT45u4dtGZhvdTWMCDEkCrbhT39y9LiWrQEUjcaUUAupbgLhgyStSGPK5JyRYS7YYMfx7d8sunc",
  "key22": "2PvFq5Q4jUDt4kyWRUbwzuVJHAWHjkNo1wXUE8fTnwGHr3fjhCNF2Gg6JC8SSg63LvsTFmES7BA959qv6gu8jwme",
  "key23": "2r5BeAudFbNZKKRueef2H8eAJ7ddsZUTn1qoeh8MPeLHuAiufYYwsdemwyz7F4AEkAVcF2rWdXtt8L8u4wRfd7ND",
  "key24": "2KpRg9qDF6ukNNam2xkudxox3QKun3BbXAdtp3aqe3YKRr12tfjfV2TRT5JnaT81FLijWDsdrhgkruK3JsYf5kaL",
  "key25": "SQDHph5WT31SsZL7c7T3pxF1K9aR1MMPQfejKA9srV9T8JMX7F3ShgMCjwmRRpudHrYba2fSgCo8odayvNojZw4",
  "key26": "5N95kqXqX7bXa4BkT3fLiUSDRUDtNNz123wYMtVWeMTpAwvFBWV98zCzUkdDXzvNWqGnpLD8XRVGvDo46Ki9iDsj",
  "key27": "3L2Z1UnnXNfsDHzSU5ZgoZLpSPe2FZVzUkaGfRSRbfYN8JjCAGAGrN9jS5VhWJc5U7PU4UAVkU4x5UBWjQHhGa1N",
  "key28": "5cHHj6jMuspyGbEpjE41m7s6i7MrTjAxbXhsG16w3k4oWcdtaDA5gbDtr2hzp9oXdr4Duqu413zKMrTuXaDd8pax",
  "key29": "zVEmtfDG7HvdJHUP7KxzEyksncfDUKWLtk6SeY3Mw9WCnhNpwiSLvJpeF3iTkDTgpQ9vFTeUZyND7eCQu77hkfX",
  "key30": "5KwF22gjEjueuVmbbXi5qPeVPeqHX3EqYyFntY99i16mw7hHferLpEeDCzcAu7wypeyBcza2F7BDvPy15UrZptct",
  "key31": "49nuXa2UhoYFfuBGxQG9rW5qahgmGt5uRH53y5uSRBTW8FnheCGJgs6vL4yvG8kgH5b9TtBNLRYZt1Fn1oCEszQz",
  "key32": "Ae7VzZqx8tUB5LicZwk4J38eJV7cFDNZQbGAPLTaFvyve5cKrts2aJQq8pG4AfbJJrAz38vA99Nf1xsiZoT36Qa",
  "key33": "4uVpVV1zwSKJtm6TwGDdSBivbdNiyG4mvNzsWUBYByF8paVyUpAnHUDq77mHkrSNreuc5JtRkKx5zmEmux6S9Yte",
  "key34": "1aPL79pQ4F9gxijmMFsxTRkGHeg8Wsz3HWeq7VB7b7T6U58bZuMDvhZcSdu6GS6Ypvh2yVrdAh5vtE2fVvJJrpF",
  "key35": "5SokXbeJvGx34x5jqmsKSjDbhXeGRVuPyYeyfCzb83VeabAWS7Yc1BD5Z7TxZcQcJLU5Qx1Nx7LkefHH8s1SKhxg",
  "key36": "4nic5ciCQunUuVWUXhKcqfXpfRNSwmFpXvPmUWWNs5UPrfhBVFMfhmoqS5sqkWqercGKSmhSQ12Vo9KVxR5BQ7UN",
  "key37": "3Q1JqrwRD3JEhtZyNLj6UteWv4XScXFjJXzc82kzc5RaDGyisvknrArCpM4XwFcqmwf2xzPQrqBFX9bgCVhCwf1d",
  "key38": "cZigDAHgeQokW9zXTVcZSmNrTKuY53VDTzpiNQknoYQpkppouuM5FbRQ6Gs17LLpvGYFTp2Lft5QP9cPJNp2Xw1",
  "key39": "548qdW1qx7oQQLjt7BNpAyqoEthZJRQ52DRuBtrbWesrgg57KRZcP8iVx4nbx5jwRtJHx4UtHqFMPfEeZnjqrkc7",
  "key40": "4KqkYTiybq1ph8LFcFuvHcnhxs3aauMjcNBkHPFEkFysWo6N3xP1Mgru3RTCHns9yvra38Zk4unsytUvWg27uLNS",
  "key41": "4BXZYxCbMymVJ6Hmd7vjxLQ5fBXMQZJNQ6FWnpZFGm5XuAmaxNoHke4XibgoF4AwozQMPxkJi7bW9WXYJn8jjn6H",
  "key42": "5cCNFEm93hSi3zkZyH2pWPQGBPHF4jHX1PbKBgM5d1xKwha2bMAXdPsDu9xMzgQG4fRmyi5hjbq9DkC4ALh7Fgim",
  "key43": "5uecaj8ktLhRoPFCMhncxnYuUWHz6M8z3jjjmG7MQBeLZAtjR2mAcnWGySa6tXfpHTUfWG5G1kYLR9jqhC8TmbYC",
  "key44": "4XNnyEkGAFnwrt2QLXxg431cufwJiFX5CeAMskv289touBNiPH5YFQkTJArNPUViBmSKL36eSTXzJfiTPLQtxrCt",
  "key45": "5euDzoQBwoauQqSz3wzhepPuWNYfSmbPnzkr19nS83UGjXiysHym7wW84DzMxNSd1iruDGRR6wfbSRSvKgGpsNSJ",
  "key46": "4wiGsrXGRh3fTZBD7Xe76zTTPo9D8kdkyg4Ek8xikDY3jyPDq31dfSi8H6YZbtD7E2QcegVDVSCmygiFUCE5RPFu",
  "key47": "2JWPFYeKtr2KWBCNYaGmS4Wz8it3WxsQn1EqPuazi2SypEWL26TSdEnnCBFqQdacYi3W1ndCfD7M7nfVcWfc8Yf9"
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
