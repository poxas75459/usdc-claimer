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
    "2CBzU21z1X3iy4QfSkJpRdZciULj1SJK9JV76wvRB25te7aiTHZFu9HQEhEPfYiHRr7EivygGZCCA7xNyBnJL4Yi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s8SPyMQsJyzwbMYEP3TtPZpN8rQAqPHXkdJEWJKskt6cyzXXLKJ23f3BUeeLgZm6rCQ2XcLr8CRr5EFPJtBb6ww",
  "key1": "2pyhdJxZkeGhbYi7yFyBLR3gTbW7zr6zjESzpehSNKv2UZUvkmCKdQx7pqgMLnykPRfCmuZkZrMzJqFhHoNKUDKN",
  "key2": "5x6eU6bcUKb2gY9P5U3FxrnFe7Vc77MtVJkExvpZfG681Mz77hGdm8mmJehZKPSzxGiB6k8rjo9UV9SsxfQnYZ4q",
  "key3": "4wmi5hTY6cT4SozQu1Gru9uisFM962kLJY7uUzBV6aGQncQtkKi4UFm7kUFf3PnMchVGUyWV45SWXenZv8PkCmQ7",
  "key4": "2DdGqxcZsHqfC9bMwZnpsoQRBajkUFAuPsvWYxgakU6Z6FkLKvMRceLtY6teuCeYLK6uZDseEcYd5NFZPbts1AX6",
  "key5": "3Sh4pnckvCUHC89srtZPEozoG5rEXDK5yLoZCQeWWHueGnp2BnGf8p3ixw4iFiQUwP22vgMxDWd8ZegMjjfbkW86",
  "key6": "2THabP6f3XHztXswgo9tmzqmhci6hXa6jhF45V7zAZyNz3XvdLth5wPoo9Yed7PL8RPdS2L3vqoQdrFs2C9BZNFT",
  "key7": "5vSLGtgg7tRxziyfQBm48XAp8FoGCtRkyZzwe1CsJS8Z7gWmiYwRYSkS5SACf6AQ2v9bRGy75UrbYHuXro5KsJYH",
  "key8": "2Gp2Kvvge78K6RWt18dw3ZyVPrka9d3fVmnc5nzbRqUyfCWhVMKNe2G2FB88pNkAHhuZPQHt7rFy82UohSNvnbHp",
  "key9": "3AFrRMrgEkT2LruRxSgzkyTeBGBzQk3j7y9vjgDarMS9jrKcwLFad2bZdkupgtEqyexgbHuQFf4Gc8E3rbA54oYj",
  "key10": "5U2oQqPf7NAng3r8AzPqpRF341iiAbAQ9CgSaEcb1F6gD8o2tPudQRo3JhtgCRTVrH18iKsX4PLV8nyqZFy5PqMf",
  "key11": "3LRFu617S61NBFSPyTzgz3R1Fdc1WSBJ8toy9VtAUeWDHsxTgp38XAqdjZGtkkb68UsAPDr92xQWarJzcHdeXkR",
  "key12": "58EL768WbXssLrMTSPoKQYHjtF1Ndq59i5K9ACp3WguU2Jd9ajMugR44Ps2WgTHA5TQLu2Q19K6nbDhj66MBuSSi",
  "key13": "QZ19Fed9HKBEdGzkiNAQAUgTvUswAvmVF1VTtLK9S6JzTV56GRErtJwYMQrivNmmmo8Fuqf1461DXsGPRtLY6AL",
  "key14": "3sTRbNP7HfuFuYXsnipWz8nc4f34Ts27jVtPdnindToSTkNXcfsdns6WWtjxRPhHeH2HuDSekFK8TUzimS4CDzWQ",
  "key15": "2MB8x72qQEGH2nExCz4u5ihk98fqTX8wAvJn7eMhfCEBMzQC5TPTLoF89CzJkwP1ehHa6g3NzTTnTnrhh1ganZ5a",
  "key16": "5aCBRwD98g33UGVwsUwgKRFZMqnooTEZBVgq3Z4EHyza9KvDjjabgN7YwCa4rThZ1zpCvSQh4SkSUbM8qNWFbCsL",
  "key17": "5FhojL8jUYgHuSR2dT1BgpfVjn3TAwRdZmKXaeB1tPfmN5DoysDKVKGJxSF8QpfBgss2xfY1hw9zqRn5TQFgoRJK",
  "key18": "5JxLvqbNg1ZSKv76BkDCRUFv2V6pF8ptiWmuNvysiYxcCh5VoTsycXXJvChn6cMMaj4P8DR7ASPdzqsgCnmyTRCt",
  "key19": "4wSoBZVKeFYJ5AHa2kRvgeGU9N8sz1wgPauvp27r1eYWiWMnKVnSHTG1SnGntHAZnnSk31ie5ij6baRTQoMX9YbJ",
  "key20": "2R1RHjbabBiwhQfLyByuypZGeVbaXXUnhg5PnDqy8QUHZ1KAtbS69TR8APa3XfrjvuXGEtvRp6y6En31DHme2Kks",
  "key21": "2D5G6mqoGFLHhqLfnWBVogbVcgn2mtqH5E4JRumxEuWet1RzZfDcMrk3aCNx9ybdPq6UPrgRPUkgpRwsXCei1nWX",
  "key22": "2DYvJTkpCXMHkrH8r1zNiTPmiVQpYs9NMZP7cHP4CjReayoWcXuPBPxRCr4yMThdFvhea69HKPJkacrYiFsvoXSW",
  "key23": "41DC1NrvNtQozxKA5cXVBczM5W85hVJKtfmUiUjWPjTc49RnpY3P1PGpVqTM1ZVJcg2gNPAcSRF2nykkm1osLhkg",
  "key24": "628ZFycvQVAJwaacWv2jvn6ZJZxm57ifNFUH2AGFdPxyWSGj3Yk4pczwncmNLh6ceMGmx6SngKigXnde2ovtdHBM",
  "key25": "3CHF7xXnysWwcMYCGCSxEsNTjwh7rz6MeEc3NrsFgKz2gXiEnie2evjm3Qf29rxoiZTogCHDdfEZME62xG6mvaaN",
  "key26": "49pZnsouAUjPkFaxGbGYngJFcciGDfhKAxPYBd5M1M9nQbsBDSb3358yfsC6CFTACg19zRzTYWMPiSQx3SjeUB3K",
  "key27": "256LH3B5RWvrAJUg33i4H2WQPWRspAiZdQ8XQiZm4oYHUB43juhPCNLqqxmQfXzcLst4jkgNzR74nbEcL7F9M2qr",
  "key28": "oF5ZoZH7xPsDXUi4983s6BJ1gJbjku2YepJtjk6V3ZCwWxZBo88LkD8hPNucnWhUwEkcPJAUXWHBaWtis4bZcnM",
  "key29": "4UurjWB8WAPfAA7AeBHk51Na9HDm1h2Bxrddy2GyFi7Jt7Fhz6MPt2f2DweQGs8gvtNEMfc4WBMdZnXmQqxAERHX",
  "key30": "4j8CPA7CQzonvhZwc5XhXJ4hh1cRLFZdWFtbrMTeNSVEwQCyTx6KEb7kTUcso87znyg7u7VryisXzshiErSYQYX5",
  "key31": "6jbJqYPYhqLoiKe3ALzMuhKCErqABaypXTkoYmcEtykS12XAxZCR3k9bJxbSNmVE4FqFwF4C9SjNsrPimbahtQh",
  "key32": "23Bnicq6RSLajp1hUR6VwfDbvVxPtbUj76G6pCjDPyMA6NufxJzSkZzHR9QhBf6j4NAMGJrJpaKnGAxykPvHgWYW",
  "key33": "2DaqN7vnnnwLHq85EXkmgeHCVG2xdRBYwUtvjay2HuXGHeyDzfvu47ghw6tSySQd646tmv2pJpoHniz8exmqyuvp",
  "key34": "2LkHtAdRYp7hbWCvGb342giREg5769i4HK3q5jKc2Ds9ioVuXxsBRUS1kTUdU6oxH1YPeBBgsXm2vwWDbUiH1Rkz",
  "key35": "AEQMt7x5aGbHqus6LmqET4bPtVpSbfhTzrZZUJ7DwWyF2wSVdgaovg5e7GK2iC4qYCde1DbwnmAjguNMcgMmZ1y",
  "key36": "5YZS71znBVP3DpPy6eagYo1EE9abHxDGR1nuVR14jh6esDDbKpqJCyGKmCuthEXnmzq8eFKkMy9YoabvvedBqV6A",
  "key37": "21zTPnUNSfWcKkGZG2uCtqcK5dempdM1osTHKsR4oZrJuvEpjQfcQ38rmHKCjaNeEmrjEFh14yCEr3nSE6Cbr1VE",
  "key38": "25frSVMvoks7SZkL5MpPvZQcdgCGmJYf8Gj5MBs6CSW73zRmwXaD6dy4w8LysD5KLvH8wdKinrhp3Dwj2WjgpNzv",
  "key39": "QUFCRuPnw2Je61YNWpb5rSFUChevCmpNvNGsBNuk2kPi81C9coScWjZdWCm6bG2nLqy6ksjXLqqBPaTUMdrA71C",
  "key40": "4PSQq7LB8bDsesi9cJVpYTYUax36dWjbRi2zj2oN7YrE9w8tTmvycr33YMQBh4bRTLT13jdrLPdT6fhkD1WP586S",
  "key41": "nAeYMgyEPrxFn9q6aEfLSs6YuswPMyXhfxJowVVhMzYaEwBxs6aPuhVpnGTCycQS4J5jhYhp9dWQC83BPJphXyj",
  "key42": "38ewrTw88m7gwsBtMRof4jBmgJpNADCPnSUdnx9rgCGDvPnMLYdsPUg7vs77qVE2Ub7eLvYHmvPTJ8XFGwvY5KTX",
  "key43": "3n5STCw4q7P6Ah6JfyiosdzFBAUkNRR2iDABoYuGxZDAqaqsDxPCrUxRZyJYiFJ9PtHD8JDnHBtn2hGfSyQ3wpCp"
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
