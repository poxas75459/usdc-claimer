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
    "32daAymA695ibiXpzKXtu1xkUbT5wpmr3jX9UoJt4jv6L3vrKKMKzUvVLVbuxWVEbzK4C1TWvZYaZkRGLTNRYr1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZaUuFEYHZYqvEmxzNfxARdxyzA1kPat4PMs5FXQJeuXXNeVSpbH82jMPtmkHpXo916XgTwRspJri5ZVsymzXifw",
  "key1": "i1wTyhAamZEg1XJdBjkPpn9R5pMdReXHpqjPzecj9rrSLzJZ5VZ2DSMqBT6ykdKCSTg9nDBmzrD4cT1NgzkGfPk",
  "key2": "LazUqzHYP8BrS354Qtz7zSNahZHUXUrheDtmZQCyYmgua6NgNWNDf2tUgnm6NJM6xzVvZRrjc2KrNvUzgnZoH86",
  "key3": "5as8WCkkFjk3rU3qEnTHAgyJX91grfmQhoUf9xftG9FRQiBQTQyYZPnySdmyV689p2FEdGNh8WXZ8wicNTKYuEwz",
  "key4": "5LgxK11RR68EVva638PhFC9VhqXWPmQ5Es3qxqNZiQXzKDopYu6Fwp6m5DRZ3xJcY5QnE4AujqYepjs3dEFEueJQ",
  "key5": "4Z7sEc364Pf5bfA1bYMEkjrEqzdb4rfx7pt6vy76CYmtCfxq2uzSUJa9BrdpkJqMWSNPJauDFRLJLX4cNFcH2s5h",
  "key6": "48AfF8MGche65kSEPBiu5KN16d5JTBcBfwkjAzgTCGjy3ZrghRyAcmBJVCFVbJhGDDR9uq7G6Wy4B5n2MWGUn2Uk",
  "key7": "26GrtRAQ5ooCsQfd3KoAgBBeszU4NBTHg4usot8td6pvkZfYpX45FTAr37NwhVbj9ytQRm81ZtoZRT9dpejX76nZ",
  "key8": "53xAYPhnhSsYa7HU5A1hApJVobdMLe7zrkUngePJPEEcaYCfBiDBzU8b6U3sjpLbrrCoAYUqn4HCngZGY91ccHbz",
  "key9": "3NTva71RTv3UcPDtExGCA9aV3QnMJzx1PTbPepjPiYj9Rws2bkCruRLhD5tQDRLTT2bkTybjSLX2EhVM7tYzvjPX",
  "key10": "5PDcp15ssp2v2N54nHgbzZfdTRfdzpHs39SAks9MhhdW1NvqBwdkW2iZUVw9SXb8Gy9zwf4RfRWRP733QnZ7Cf8u",
  "key11": "4Xvk9zwWXYoa7kac2DyUaK8J1HRyjVRmbKR1SfYyGXY1GnvqsoC1gRcPu7BVumuCMbBBefazu8q8cgXwNFSbeYAB",
  "key12": "4UVbbi5sgSmX77me8yhG1EWF5AtZMfTGojDEat8vi1SRL1sEjfB9QYhEBeeR4uHweMLRP8VuKdLnou8BCvFDBdcP",
  "key13": "ck6rYJpxfixBvy3oAiwb7ivZ9xjj2D6Gd6qjAEkMTMwyheiFhsbLFbK4vVrrzTxhbsxCj4erCS76VhEedFzdQVJ",
  "key14": "EF3UDHpL2H4dZs23Hm8dYqhgXURKCXKLErT3cV82YiL9HLPrNkMndimd8WwnXYAa8QjccHob3cDgQvgMt4enA1N",
  "key15": "2Q1WSwdvvC2pSAhCF8TJzEcgL324jtxi1x43sumHjRt86RptdshyQdVrGm1ipttXk6c94FRFyHvAbpL3PakURxir",
  "key16": "4TvPx2nE6QNi9MCr2WbAtJjyGNx6PZcAe5HV7odKfAJXSYLguRRvTbypTEoypZYNdf77BoYuWniS56sdC53NUvtM",
  "key17": "67RP7tRJrMmBELLqnktrdPziHDfi8ci1T7hPUyeJS2xKHuJqS4LRQnnavSNsY9hAwi5zK3tu5oQ7h7Nuy8tVYDk9",
  "key18": "kQWRxg9WCumPdupQmdWYNt6mrRKj88RExvd85txS4UztxRVx2QGNkCuqJaD5jQjUjFaj8jnj9z6RLkbxGyJ5GKT",
  "key19": "3fkaWfyatGJKj7NgqkntbYN5KUEwW7TQoheraMLzKBnXxqwfYqJmJvrThgs4bFMgJQuVMhYh6SZun9VncvrT9Lpe",
  "key20": "3WB9jumZuE1oTZ7iwEGh3ncUCgUyqiNhfe19jpx91anusy5deHhy7Rt5QNXHrKPoLbuXSz8yansUVmUHdVGmmdqc",
  "key21": "588JrsLBNdLPPgPM9UgUapBFMwRqAZwGxpfMfGkWpV1vufniRK4UonznPeSGuiNP2QYgPJJXentBDmNrvJKMMPeS",
  "key22": "5poRrNQJ9S7MxAZ2eF8GR5RjNfiBhLdWe73NkoaacFHwD2q7iBnKXE94ZRQ65ZowszkbATRKUGHNYRBGNQyJtwbC",
  "key23": "23vqFym1Khq86X88bQqSnZC1p2qhw2upL8oLwPWRanMk1bV3JafvmSc6DZx2YzmHEbhQ1haWeZ6HRyveMFP5sZWk",
  "key24": "2idmWJpiK4ScdkqPE4JP3mWcgzH7TEitoaRepQmkkyCym4Jk7i3u95XmEKw2b4Wzw7inxkcz2fsJA1UjZWUjpBBQ",
  "key25": "R2xJerfPaoFRpWvregAUdW6kBBwNRHS7CSS9qS3SNmZrSGiSMZimE51A5sboh8JVSMxRuNYLxPcwEcSp38iR12C",
  "key26": "277Wec8Gt3zt2arkViVBHwHitcUaS4t9bYTqoUygpGshGezfnrnNYiYhJmnis12GtNUttGvcBZ2UbKUnhuU45QrU",
  "key27": "2uCfHPWE14tUnXLdXdNbtaXcFc74jG96mD1Fvp94ygZjcoNmLLxEVExsx8caQo6nr6XLWZZuq1UFCX2sPV6EiT5a",
  "key28": "2Cu64F2ZkDoUK3ftgegHUAdX8nWHwkt5CR7T3QxgcLfkM6LFB2RHndLVhQ2AxYLJCMchqaFLXoDxSVjjjEPtoC3y",
  "key29": "4TYdPfNtF8kDBfkdQoMeDFjnvHBpMUYnvBJ1k8iVqsGnUagzJtAVM1GzjnXAbTsjzouedmDH9cpomaAGdbAoTGN7",
  "key30": "KELteDCBSAzPm99JiMeLfUBqyeANxChfBteTDqSVktHQmCAiBmzajbDW5rk26oTecEFhbf58BQfHjmkQwCG9eHR"
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
