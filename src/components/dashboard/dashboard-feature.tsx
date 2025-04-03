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
    "synLCvJnQoZBKY3XUxQzfMVqGDDzANNA4pYqk8B5ocWJQ43WcPoBcxjptzHiwZH1ewpSGVgHnM8Z7tFdzkeJzRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cG4RUWa7v2q1RUhdPDSAGVWdFHDv4ESgfT7XDXBivbtYanmLpq3TKG2tq9KrYUw3KZw9GcCs8ynvpPDqoChvPY7",
  "key1": "3FvQsup19gdVW86FoRcqxNwiRnToy5SkyitF4gdDRSXdEXQNXhh3nXczwZsnT5EQpaTTpajhQgKM3t8K7GucfshG",
  "key2": "3yLJEzFhQpncCdP5MdJ9G2YodDEjRDAbS9aa9bVnaHhCsxUQyYc6PYMASpx6EByMqpPWecdHbaXLgiMtUfxZ27FG",
  "key3": "28DRmQa8FfZmobuNvUNfrUMF9DjNtoEAtRZqKfRo2NCbiZdvky2sL53TzWgmUem41odBXxvvFPVkvL4S5Yqiec9q",
  "key4": "3CbkLFwouo4fnmUaGd4UnoFaLFgTDUXpSVDosq5KPB4RwCTYNthWif4WcrKcY48VfNRrdbw3EGhAthVKVp6xDdCx",
  "key5": "2vos2nxfZB79QJwMRCCeBmDqwQtwpakFi2GsMj16Uv2BFPqAUcXzcsSHd3jTroxvSqZkYzfqmCRKMAa4JmVxkj12",
  "key6": "3HVEUyMvnpHPLp6b54Gyjc7JJbLq7EaYFGKBkLCiZ26gXeXPkhvDmZ7sccuC6kxVmxaoNDWdUvqKoR99mhxV38gg",
  "key7": "3ae8YWnHHEHTeuby7ZmKbkRZh4AJzh5PgD2eqCek6xqbCsbzg2UJoCQkNo6oA66Mz2ij89cfRcNbmREffSLDYArk",
  "key8": "28GJt5Rz9EKQ2FTPiuaeDyPuWcauoDFuurfY3b143ZQLVEbm8nbDfvKbaJA6LyoTyLR23rAfpJEcrAChNRqrZbNw",
  "key9": "2fyfR3nVBYTBF6u39vgR7uuYs8yVnUeoW5doPi7vZTGiNNL6cL3NwoiQRng1HZKHwobtstNxMQrcKv6MctPSS6JF",
  "key10": "3Rdnr3rrrhzPvgqkUBKjQMcBVB4vUtUiiPjRNiTAQ4ZZAPAjDAe9RdYnWcKn3KsMmxnqXRm9kC2gDaChjm7idF29",
  "key11": "2FXSxsg2VDsYXw7a4QTVxHr33BtFQoHyabonVkGXXJxG6eMaNCsKSpsjGc93jbVs1mAVpVNGFokySUQ61q9gCyEN",
  "key12": "61x5TU7m3Y8yiHYWwNCCdL3PGfXZX36Q9oA19tuuFxMBjmfoNqWeg8fV9FP6biSyiRSqBZkb9C1VaXKaQneHkbRH",
  "key13": "4Juh7Ldoc89ekhQG634f8KbZvcZbMdVDJ9SC7JRbmLHuVxAX6GU5z8YP4akkDBmxYNcxNubq7qopfvuG1Y618iRL",
  "key14": "4WyFCHKj6Tb3radc1NqKSFM9qAv4jQZ3TMkyjFRbpxK8r7zrcmtRmUaFberNLMU8RmnXPb51qBh2zeQ8EWvcEZbT",
  "key15": "4QvNcJ3kBSLLq2kcUkt4ruWFPoyHKDP9NFjLW4yA9cASk6AMdqCZUsTndgWprKcuifw7sFRhgHcK9cbYRGjeqE6h",
  "key16": "2VR24PqCWzaJhkttLY3X76ZpWF8Xb8eiSdNrNRBkHnf1A87SEnFZZrg36xuahkk2UVrXDB7ES4P7gERBauQxyDsY",
  "key17": "3cq1WFDriSWnryqeyrvcmbrpURdCtoL2DDKjdoeWESo86SCnK2SbgngR2gCULmA1qfxSX2ZquxsGDmZqRxva3U4N",
  "key18": "4iRJiGJdphVrMYuq98aXwmRzreYBovwoYxXoCYHrKLvJ6wcdgq5Cr78TWn9Nz1oxj5yX2zXGE59GgnseMXd8Fh2D",
  "key19": "kxKyLMD6PzjzuMUegxpTiBD7hVLFanvFuWoUB2rTT8PGzrdWFU8Rhhf7tg7nDfWnaUDrabWt1fxknuGSsZ9RuGj",
  "key20": "4xMxUvqq1jzzNxRxq83WPqozPgtuLRosKdnTaUySQrq25bMih22cK2a2Ur7CjHJvgH54UTrVufp5Tjmsc8kRn9eb",
  "key21": "2YtRztZWGC8wodYU2yFvbeBMgCnxSsgykRS7BqrwvStYQR1d4mzksqGNDk8z6LZUVQWFJCzGNwcmVfj2oStfMbov",
  "key22": "4PRtLek5tK3ibyrqdYs9igkrdZCoXSWS5xmtGojGqr3cHCiCMH4R5M8qNEedF6R3EJhS4XWJ3E6Zti836dxqnCVV",
  "key23": "3LH1C4bPhXemDy9Kn25fUHC8pyyeqd1aGtMTbWpmqtGG4Wai3JnXCsy2vfPKLSTnT2Q12X9RhocaTjEq1KAQnXGi",
  "key24": "29HcJj2nfWEFo22wCEWBbHD5TSXu3xMivQGp1ihqukzB3pwBeVNPNroSbRf8YW9ApWChjN3uvGM14RBcZ2MocGPL",
  "key25": "5ksdiQ5ghX44HUqmFRDRFcPEmdMFjU49XwqXvfKFUr2xKERrq7eQjmhjzqhosyApkxgpm113iAr6rVDPsqqeCcRw",
  "key26": "22JQfYiD9LjYmCkJnpNFFFMkiAqxs99Dh6bvbCBuNpaKFqy15Mi6hq1R6BhSAL1GWx5KURe24nzws72a2GE8xwvy",
  "key27": "3DF7NqgtPSNW2whtsaqW19cCZJ6yNeLqpja3fL863rpUg1Z1e2McQvjchMUTeGYJYsaox3bRhrLdJeaXnbNBa6fh",
  "key28": "2UztDsbVZf2bsf1LTBLfshy9FYnVcPW6nZgt2mBiuAQtKa9NM9BfyYBRLeva3zZUwiaLR3Kyo9xn2qRfnd6TMMY1",
  "key29": "VzTajFFmZ3cuFjZEw3kLzqCW22ZFTQAXxmBko9ZEpVPDppAXCXF2EKamo5SyWPQ33P3svSvuXQpT9YxYfMJtaRz",
  "key30": "45C3m6NoC6AUWxwNmSZZWQQqUCDs5WHCnAtpUmAP2sdSKh1qCHRL4W7cLbWcDpY5FfD5nvzEH2UhUFwttDn88tgt",
  "key31": "gexPtDirw1CNeHx1SofVjD3ZxgwdTkY9RrXLDgGAqJsaX7eHerDpJ7UFNV3XdpNVSo4LQ9zFfxYdoWBkbuifiBF",
  "key32": "2ku8mtST8dQDHwTGZJvjWjPBrosxFymjdCFxU1iRwBeQUZDvvEejTeXUNDSZC4j1yxhpxNoiagHfWipRP5Mxdd4e"
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
