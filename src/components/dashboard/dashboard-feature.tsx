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
    "4KDdXB9SgzYvuqMnAPMi88eyAVRg92YQeJxHt9JQtB3bH2tGzE1FNPvCE1Dp8zRK5i6N8mdixgX2bnYBoUHuncHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "smnDMHhU5drNAZTPgN4matyUcQ1YjzAVj3HNz4Kaqjr17VCbkfYLRA1ymq2BKRLaywXvYFf37xRw6ERJ1Q4DYLA",
  "key1": "2UEeAmtbMbXoWS5DWKdGNSkDzVLYxhgBL1cR3jdDv11LaZUhs1GQGek3GbLegaEaJ1qTU8MUtWoDRGFjfYsXnhuj",
  "key2": "256GXWZat6oGZtqWXS1CSR1z3DP3rjxiPFZpd6tXS4ZBWA4unX5reo8sZbsfnG8pxgeHvfPTWEh4Utk8hNF2wj1R",
  "key3": "3mx54daq9Yygj69HVjnQ3xm8NAmawQ75kMM1R7yJmbsfcCqbYF9T9JkAf3zWAf33vHFwfYUPJRcdqXLEyUwiRseQ",
  "key4": "367rnshmQSvyqWtY7XzUgFX5ZATtv2cReshw6xVc1wCrMFm3f8FYdkx8TwQu5HgGYkwAKNPUoeQjs8d3VCKB2eFv",
  "key5": "47CpEASCu6tDZS6bETiWA9CCGbMv8CLXzxLA3TxHJF6WoLD96vAesQs7RV5aQH69fw8V8iBukgYMyDKuKZsnLVvb",
  "key6": "4N12atNDzfPtkF3niHEyBYRDSDkxyayDECQGWLBKrfRfsmCcnFxZ9WmZvKH3PS5GfkhYf7iXxpCkGNxXSUfQCJmC",
  "key7": "267aCX337h4aX9zdEZ3z2oboSro5KGA2VfT7SnuZr3PuiN3QkSagywGi7pfAY6DDhwWNTSzGiCPBb1Cgyq2o13xe",
  "key8": "3h7wFPZ5sAy5zY6eQXGwpgpXTn33pNB3gnaKbtx6j7ko3P9YG4REkQ2DUjwmU497cPZFzWfPcLtjT87Dq211x8av",
  "key9": "54bx9zavcW4b9P7451oNKCGnfAveMHyKX74rZSPDntotzi94bRsotwAigwuKEemfbvYSnvR8x1ozrSHZH1ax7h1K",
  "key10": "25kNN542ERb1Gv16xD2zvg9TMAWuhxzEnXP7DW8L81bZoYnitiHFKmmvHcwBjwprwuhVoa2LPMzFj5rAuQNixYPk",
  "key11": "3XWWHUTHW3GNDEJtmoGdmGTqq5pt2J2KZpau1mDD4isoVXsN8VUz32yJYenfERAMBUp43H8DK26hktxQ6E11vwZJ",
  "key12": "4gv36vRYwupew1SxKkVjo3wGvuWyyTz4dqXbg6NapjZke2rLMSyRfULVy3ZMhmq8HjqZJoHTZxPLiHh917uXCx4b",
  "key13": "4mY2537qYgzUQ6qTM97cTVdw1QQ1tauRVbBYs4MoYmPYztuR2tuTY12PadRTaXSoXj3AdKzGKUaVzTugUzzT9q5C",
  "key14": "5yoRzssS5JJrsfiJj5pmYVo96DFwrUQ5Ws9XBvH63HcwfezgcpS9rvPmeWwu4R3T3UoFzDBa4WAwtku3zt4y7Tw3",
  "key15": "61eFM9xcN3wrCqMRK33CtxgbkyQ34DAhjgbw15tWEuxMNgKBRhNHS4Fwq8HhdEV3fjZUzX2fXmgEnm4z96w1wntz",
  "key16": "2hfVM7XeRwRNCK68rZpXDiscqDMC6CpUgZLXmSLVWsr4bXm3zU6pyaACjzt46YkiMyUNJDuG36oFZkFuY8VMbnum",
  "key17": "4SaEQNbDqXnZciQjaDJsx1orAwBNhntA5usZvf9Rv6rWuPa5B5eHpZVwMFvZXRasXsuv4SZYiGLp9zvToGWMDcrL",
  "key18": "45RN2iRYZJTKrgtxs7fXsvCYC3HeJUgEVRP8fSqwwkYHFxYGD5ssbcDgGkVikH6xGrcyBMayrg4WfYi35ishfZyQ",
  "key19": "NCtbRjod3K7LVF6st67dz8rapePZhQirksMKzfVB3vum5WFLsj5go1YkHSUY6scke3H74rMtVBNR2gMQArNTA43",
  "key20": "YuBf9gBGyqeFpzs3L88ded4GCEaAiEV1E4fu4UhUJPpT747CFbpXom7HLB859EHErafZYL3hLdk72iWaWx2Tqej",
  "key21": "5bfumHYZKGaNRMUbw2tDxtGicyWiVWN1STbmn6wSgKA2cbpK5iQeA9uchCcut67JnN2vfYv5MUV5mndjks1cNCv4",
  "key22": "3BNcRF7JMFQ4Uwo2GuEJGoAZujPGDh9MEYLr3f8jfPdp2mASHayAoyLtGzmAYGCkLsjSNKsk2SAvZvLR5DUbGtn1",
  "key23": "216UdvuCW6NXKjFZF4KrFEFjGjUv3Z8LAbdqhKVySRTpQev1QSYGe4mQNZt4CPA8akSkyEVotomQRDTGxss39J41",
  "key24": "4e641vB7jK7C3WMdAwdGQCTXkANP5Mz7GuaLNi3xpL7ugsJjsq1PwvnxfZgiwVC5kr9vFzP63UWNFn9favo2gGad",
  "key25": "urY22fFQ6GQxuooqzeSX1Pxa8m3j1T8yXYsby4RzyVZw1sjbSqLBLaScj76YEWS6AbPnAQmTfz5HR8wVMHwW6e7",
  "key26": "4zbf6kQasrFvZJR8dFNUNhjz5FdCsaVXKG6ubwJTqvbaxsXSreEhLaKYseakmpCCvRNZn7NRxxFjk3dP2mEV3NAL",
  "key27": "59NtnajQBhktJ5TTveGfYM92R2wELkt9TbuacwJF2g4NB4CcgDamKLXqxet9y3MtiwxLQZ3vu9QmVpyzjPA8TGZ7",
  "key28": "3cnk5qp5RfeT2yWvdF2fX3GaBjb28SF3KvjbjdjprzcJCdwrfPApJ1RmYxrSbgnvbwSs6qNjJ9ijzCVipAoWu55n",
  "key29": "4h1wCjED8zpngUsvpyzp1u7C8gtQztrcBZaKdRYvMrmUWMSieNZKodi7vjG8KGQ3nobFgFpNimawEsZ4aULs8PSQ",
  "key30": "3fEokL9UFArUB8p26P94jDTaGQy9NVbrLr7gcsZ8kznHN3vvoy49jVsyFU7bP6KQ9aTNWZ9qvwPDWNGQdSoQiDZD",
  "key31": "3dQCA8jkxK6s6kdMKPRPJqv6WUFtYVRxfuDJqLMoXgukAN3pUi8pMmoaBUPvWmj9TjaCt6yAVB3YQVtAvAJDur4v",
  "key32": "3rRtUjZm9iRmzUv9c8nLBxYdNWqrzDLZ6h8wtgw52czKbLQKZ8hZGbCF2N1QNdS1k4SDVPPYeNkmyRRjfD8DTaRu",
  "key33": "63xfsnoL3VyrJevvTG7RArYJoy28EfKuS7YKiNNzsS1fpP7gVN7tSifZDDN4wz4LJXrKx7NSM7J5nfCnr37RtLiW",
  "key34": "26y3dfKCkPFh8mve6JGxRaRuZGxWshcSHqwNHozF7Vx7mdbegdbkbuCQ9bQ5J46cq9K9R6YH3mf4cji2a8puJy2S",
  "key35": "BVxDjQNFqJ9Mb1zWKhhLnScksR1dQzBfJ2nx78RZykCdtKMqPxAB83EPXMny37SoxBWmaDvKSzEkUUB637q36Cu",
  "key36": "2V1sZ5tohFBE28WXDeNT9Xetd4s5UzJqtzfywxBsL1Lg9W6DCXjJdFuWS4wviEZhjGduEFUhX4HpVMCoB3GPkHs1"
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
