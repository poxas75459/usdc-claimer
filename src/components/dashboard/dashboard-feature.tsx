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
    "4eCogzzGjPH5U6pAMucuoxP62tnzzQJ94PmRa1nAdhu4kpiFfLZyipedGj82NDPY6UdnKAshNEyR13PLEhsTUexN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21Qkm3pyP3uLbuxCYvpocqpYeMP4nPYAzCGWbvcfaa8qGZA6eUBj6FDPZi2y8bpMJwe7vUPYgshVVhwzLvRghtq1",
  "key1": "4XtLamCihFSAJroGNivtBHN6LddVz3jrP4zqKp5TMdvLvnKn18A2JdJmojUJeVYa3k8r6bMhgHudii17Krf1Uipn",
  "key2": "y4Hh7zG7CyCzKbSue3h9kRTwTcWQD3aq61AibLFpLe2kAEADp5wLs2NJQfPb3WxZTuQ2bjv3yCcB41bdJJeKnE9",
  "key3": "3VdUrz1JnwRR3x1EH5PSDc9d42BCSoferWxVL3Z65cDCdacaKhzJ2dPUcDRWmJBAnAphE2BTWrGiuzgdiEeDTHMZ",
  "key4": "5fwNz6GKFsJomWT1GwAunZ7BbbhnkaoQ8QisTfLjB7G7BwDpZfGCVsc4rk2gexWz3BXogsfJrSCkMsDUL2HSBbrE",
  "key5": "2HgSMe9bh9SfXSJWJQeMrXq8GRHSTVmvbnb7FWLsU3aprSLstjaS24mn5fi17n4fdkiuRCy9GXparvpz8djAnmo6",
  "key6": "4phzcWhvk9ktxhzsWSexCMMfoNyJU3PRRDtZFaJDNyGyPsEGwfDcYnbCtjm91KCdiAzFpU2doexPKifdaDfRyuFm",
  "key7": "3k2KfgMK3DRW8Kd6nQgvPtV9NMgYCtdLjaeWtecfr49GFwApJMKE18n8tDrbRrmhhAG1gFqo9roKQF6d1wqazCwe",
  "key8": "23RDMjeAxtKBYPq82N1W2GTLefRnoa46XPiNVR9oQxFpEYHaEMdFCbHRzX2ijyE2EaSAVJh5HhLg36mBb2oSaxGW",
  "key9": "2hFQGQQjZEbr63ZxN9tUFzsg4Sc9NzwZYNt2SctMNydrftng85XHPPDTYJoYymAqUdpPHb1CWEtwknDEbk9zhsod",
  "key10": "UFSRXnJvXQk7F2svmC7EgGPcT6uuzQCm6K4o38BBz6525uQ4VQxGE6gLqia5NpCg7Tqcxp2iMRQLKrMcHChkphH",
  "key11": "5wP75CaGSW3FuakpaZudHvi3Gij8Kc53EY2sia3Ad8GTZwx7vox7VgViAd1zNY13uKGsjwvTEDm8uZce6y9jr5mm",
  "key12": "4k4kjrQSZs4CT6ni2UNKmBfnyrywXaXGS2ek2rExRbcXLobRHvRytGVSW9k3nXHAQXk2X5jJSwn74wD2D2byeNwQ",
  "key13": "46FhfeXr7MYg1m9zmFvTMcjESU6Sp8GFDJLTuGX7fkw4rRs9fm8Qb3RTNQZYPnL2Z2sJXbiBSfDJMazRzkopKHs6",
  "key14": "2JQoTyDMXxqUNDMaQDkpKZngGEXLkvsGsy3v3KKTqnNBsqFTZKzoWi32rywM3F25nCBCHaDcdCEmnhuQjee9efxF",
  "key15": "2bJ4ZLU4NdGAVK4f9XS2uHCuczFRKWDdcpPqJ67CZFtfhiBoJFaq2mXCrjmrcPZtFRXcGazNzzVkd9VTTqc56HfC",
  "key16": "3Xv3bf3QpzcwdufSDefVvDfDro2mkpgUVzzEfS67qdFaYnNJ2m7MwAw2Qmgbnxgf8u3SCnM1RaaDv2gh9ABGqVYh",
  "key17": "3Dhhocmns7EvBSZiA5AGm1gXbkZvhgtgrucHcR4iUghBSj7PosnmqrAZWTwxpyMUEgTaxEsZCyPGSRK6tCTrq8R8",
  "key18": "3QnzED1ZMCyVCoQe1d4Fwzsx82J6kULxobvw1Lu6BXm7bMV1sxk1xT45NrqkrWrtQS15fMTpGUffii4Ve82C3Ghg",
  "key19": "4Zpts43o9PjDznbP9b5kTWiRXjF4pJGnb8NvbYs1fmLB9eY5E85TJ6kyHzSpK1g2YzKd6beMTHtoKgGh6hUJziXw",
  "key20": "4CuDt7XfzUbD5EEeZU6ddKTLUejsLq8ABLBMnJLgYxwQ6w6Nsmi5fbfhqdx1DsTWRR3Uvz9oHRdw1TFp8WkjNS9E",
  "key21": "4T9Lp1mRnC2jDR3TU8mRcRk7g9RETkvPjVC4fG11oTB1Jro3cAdJN4ZoHeb2HPHHPQCKo6VAUnHvrf59Aovct2Zk",
  "key22": "25NsDivi3F7kCFhdQrGfBZ52xsjszAwGAn9879RHL2pa3wY8axgU1wADbUBtKbymz7WWbsUh1FcLkd3u8AN4k7h6",
  "key23": "53u4j3NWHWwQWVMhpfmBvU3p9V2eWyKZ7veeVzRJ1ULZWKK8N54n34MG3kiRcRpvpZaHmsWSntuiDcTDAFXXTgc6",
  "key24": "4DmRv6XqvDR3vQvT7E36NRr8MsxM3LiS1UGZBSugHKHNSYHTdDSfLLbQZHTVM4ENZsCms1qqbLH3wLqV7Hdfea1s",
  "key25": "4scA9QHdvtX1PJHkA9tThoPxvkoXxU7EcLq23RUQu7vExPHieH4YHidK83wnqdFhXMYJjk6cegti8AqEtJWUpPCd",
  "key26": "3hzcN81pVDKpkY1tQZ5h5YF3GZkydwoxKfK5szbo4RwD2Sc2eqo5DuAjR7UauFqnB8jbSBKvboJ9xGCdw8wP6FB6",
  "key27": "3qoyMSjRHnnbWuntZhYfr3zjEdMpcXyGNfMnYJvHMNLvMnY3Z7HGzN5cN1m9aciP1JSLFa7GQgnKZZTwXctU2sJ2",
  "key28": "53CMGjzC5sGrfqQE4vkMAryxBp7YFPHyhyhbJ4u96QHQKk4mW3DthpcLMnjWzLSsS9evyTmbkbYN5LCTEaiYcko3",
  "key29": "52XKMK2UWKrUCKotEnLqx7A3jym2QWdjRK3w2WDiQHMpYngsR3o6Pd9jUmuaYwDTxgXSdwpcLuBtFn6Phwt9tBcm",
  "key30": "zbE8BqQm56LqoqpPXpNx1WzJ3UUeZ2aupcttb2zMdeTAWcjg7MmypCdnBtUiiWCA9Qm5UH5dKqv7v7WGpykEFfG",
  "key31": "34SBv9iBt7ioYiYkFzmRADA2xZCNWqrHP9TJHsrN7Ygauzui6UB5c9xqj5LNSpXsgKdmvx7ze4qYmB8Z2L6WKYW",
  "key32": "3fKKA6XoUGAGzxGL9exoekXWeGTJqNhCVpY6Jy1FP7Pz12mjTFJiMN5HgfYC6udfk2xYuX6D17q9KShGMyyfpYU2",
  "key33": "3WJyrv4Nnf3uJ1vqr31QFJj17h9uBHM4c1owoSPr47wvBT891BurWhPKJf1Wb532cPa8bVNzvJHUTShiVKaAj6Ky",
  "key34": "3HePfB8LVs3tLwoeVCJf95dnknoVoszYDQKMvYhupyL9JGkG9whw9wW8iEdTmiBiqCpQvcZADJqKGzdEfczmLjMs",
  "key35": "3ijs8pq8bdUWvT4bDQNpP4hQ4fiQ8DvXAWJSrk3QoWchrD1vU1Fgvid6UhvHYENmBQRrFi7HDqbnrjfAzbfPgttt",
  "key36": "2TTGwzV5HZheprU3NyVBC2Z4iijxuDhgU8MA6PWnhqR1smdBuHWFPL148zU1d2sR8MBYmaFrEqm69ennBFmDpGuV",
  "key37": "3XocufxDc7HEGmLSX3zZKVpQb1EvkT5Do553pfqtPuwqyQ9dAwQUX9DqRYhauubaCefLRG5W3D7d7cHBTaGJw5ht",
  "key38": "4tEKmwb5BtsS8nNr698QcznwWAqosEthnZ75nJmtPHokA3rzBcDtbXNyGhyRDjYVJ8U1BFTZrxa1ownSjBHLw31x",
  "key39": "42UGMzvXGs1bnSPvyEq1bieMWsV6KFXM4L7StTSMPZfhgqB9zByKjhrAUUzV95gZsrbTfWbG9EJFHpgGjPS36eiG",
  "key40": "EzMUuibJUCa2Fyz2uT4FBckcNsdA6wtiMShQdBuMCtWBQevoX1BcPwsa4zAEjZG1oxzn76zqq54nafA5TZMZncD"
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
