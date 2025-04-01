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
    "2JTDPYMuBiUpcNzxJoX3BaJD6V5nvtcGb4CZLuUtpMeakJurS4f19hpKPpWnZwemiS8rqam1uDodhVy7S29Tm59i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jTG5bQxV9v5gMRzgCg29eSPUNYjNJT3FaGwXXZE79bTMykXvoRYbUDjypcBWods6yFU8S17Sm86DxBTQrh6u7Hd",
  "key1": "3tE3JQP2vxemLMZzoF9zVmvs4YSr92d2JYxJeqmnoBK8bi4RuG5Ex5LUbNykqQQ7Q1gBFkQzBvBk8Fo4A8jH66mB",
  "key2": "Ki1v87JuBV3SbNx4ngAZpdRDkLHdtYzgU9kWfFJR34Hy9tUSSPFCSz4FEQ8HhaSqTcpYL4AjiMEZSMacFh1T2vb",
  "key3": "5J4FWECivQZeRuX4cL36XUv1Uy4TB8auCu3cMPJRX93iGGJfkpjoFZUmcoPTQAanSKGAZwSGKiiP6ECnXh3LmdeL",
  "key4": "52TmXtB3ydEtewG618YLTEM679ZrpDyro1hXTcVeusBtUqMNwCuC8tn5q6z1zL4AjTJQJSVmFKaEHkwW4W6kBBst",
  "key5": "5LybtH5UnLSaj58oWVWutEL7BvFCCwEGuF97J4Pob15gyXmnTC8Q3g5uQHrQyxM9LNqyPzo18rNr5xCet4ChF463",
  "key6": "3is7GLccoUmZTES1rX7T9UbuZXsKQQ6QNK5Acbj2va3k8qNVeceo2yvvj95cq976uatpHX2JVpZjc97nBNUfirvg",
  "key7": "4zzcNzDCTwvyE13SN7oka26xFhJ7P7GaRXitxpAGfN5xTRWzX7tV6QpG6qpQESSjvHH7xiiTjLKYUTEMjgaMWoCh",
  "key8": "s5g6wMa3wvFLKNzMgKFNyyhHhNMbaDHswvRXbFuqyAPdYqo74pGPFAqFpgrCetDKbFZPX6H6uxz3nQDV89MjJCo",
  "key9": "TEApXrpCMfkUEp4ibPitT7nqwvnjgtu1zZwVfUZiQMkS3Ly1xhjY1iY3dzMJzttwJF4UZdxH2JKLYEFEBEGE1qm",
  "key10": "2tyMEHX7DDD841UCaWxKsNqkEj1LMuMerAsK7ghDXSQ2LQgm6k8NM28JathRi92xCjb3BZBjs2RK9AmPW8EfkDEp",
  "key11": "2YGrSwKUiiqE5BzHAjbNYfdBZoqQPVVfL6JA4DS1UqNuxpiaSiDbFwkVRNtb6xtLwJHQV5d13mVeAvH1ZBtLEayR",
  "key12": "3Z38kfJSJ571vCV6MGbTge1LdyvQswPAAzFgVrd8Y9YKgJy8KrrkAoCoEY6h65NKiJByPfpmgA2KDWJJbG4eAzub",
  "key13": "4Lex5PN7CzQ7mmYgtpnyE7d5pFH4fSQC3HmheDq4xEui4M7MEva24UMW6GdPD3ZjaGYtzb1WzxNW4edJNg37rFPj",
  "key14": "2C3Qbks69VZ65zgKJHvaDs7wefWVacWq99TSYyUxHQJNhnqHXi7R3ZSG41MbShqza5B7h6a1xfniXWcqebnAzaR3",
  "key15": "5xreqqRvTy875YcgprmGiswKSmd6W1SFbLJcJxJbUdD2Pc4HUMmtLZ16spRRr9T83FjZ916wsdNCf3tTRAZtLT7F",
  "key16": "65eg9MJ4Tmrit8yHLEiGeargS5ezCNfc2DK58ZvKXQKyN8sv5ireSYKHVFVcAR7XmWLvVNDyWhYvmLEJiQMh1EYy",
  "key17": "3R9avK2CdMjsRn6kRWPg6jrs2ELcV65UZ6S2xyNDJZsggEpSFgazYgpivgpUFGkANZLBaMaCBxdL7rmej421Es9b",
  "key18": "64rYLtfDFRkq7PkACApNJUbKWeZSYJGuXJyHnsx8C3qayqTqAr6X3LjG73sqGZ5Gpv8utSBarLvqMiCuUL9YKqVF",
  "key19": "rse3iDw51pP8TXWG3QuvTkC8tkti2NQoshFtmjZHRbHMukRR6MiBSASYa6qU2VndUAzgsXCvBycYsR4Ymq4mmQe",
  "key20": "4osLhahYL7GE4tSFZfSgfpt3BWdQVgoevi6EZR54tmtRgcMp1foCtcqe2qkuCpVajzyUUVrGCQvHNGgpVVjAQbes",
  "key21": "2VQ7jQNdjvqpaTzg9nbwTKrtNczvpeXFb9wJsgoJ7KQRW7Sa4kv6mnGiJnHKJ5unKMMtw7YmrmNhPFB2VbzwvrQw",
  "key22": "86S9e8bvQMFPcWCmRHnW3NDS4jUKCgTcZK5gnEuvUvbGA4Q4nkm96xfDQPzveYYdUf2QmaNMjEd4sC9oGkb6hiT",
  "key23": "2barJciKhG5N8tfqJW5KFh1EibXMdoNRjraWKRCsBtPv4NRM9pj9KHv19muhq4xrs4r3a45gypVkERU7ak4XNPhk",
  "key24": "3Bs3XobtD1v5jt6QyjCcwurGknihWa27F8veLcXB15ZL8MBh42VNhuRf9LYoz6z957sXg12g7uzrG9kuDoSKJd1V",
  "key25": "4DdZQb2ApBs2PmKJCvJPowYF3xUDfo2q6oD3dGGMUr32KxBu6Q6hNpk3XDv88GNUbPU2ifuwtX4HTWSgcTGEre61",
  "key26": "2t8dnLz22UK1tMam8mSJFf6GxwZrqYPfd3J1oADf1f7qoEjRLC5nuMGytrdXVSXtfHBzeUVUCjcpeQU4buzVPWre",
  "key27": "2BbCuuc98rZrCwsgoU8Z5kwcSR5VSuNJfSKLrjJwmFx4scX5DARRwoxdZLq7m9woMxQt6qMjUD3JVdwMqV4j436r",
  "key28": "61CihmbQWv8Cn8fjRoLHtUH4B6bVsAaY2bawE1XjBt6yVYTMZFpjTkg5NvdzsDVCb3Wngd9WQTqF7swek5UDfobi",
  "key29": "XYdp36cxKuR4vFztbYQzhKEvzCnH9J4AmiSRkuuYkHFFfZsL1wGmam2Dsaa7mK237CRExeLtJdMQLEWNxF8C9RM",
  "key30": "34TosGttLZRCsz6KhmRsuZGuzA7BXkwh9EpbLPGVNYVTNCNiQnTtxxLrnnQxhnC3sZxhHCdjPDtDmGheAEzxYyzx",
  "key31": "zrCoJbzRRVACzLKa2yVnQBABjiCnWFwWG9cutDCVitEpQFSUBF68GppmLxLVogFwkjUmxsJ32N97cNtHEYjLtQx",
  "key32": "5mrnANN45YSXNzpymNhFvHHLiZXVkCCtbn6L7Z5wZRVzMDzHYv3MkiLY7r1THxJbHJX2bbfRLunVowTvM1fUafSc",
  "key33": "4Dn7Vit5324BgZCfFTE1JBspJd7TAJi8Jmi75wnncC6ZUNZeTttqXtLynf5vRRrTeLfzReVDB3EenC2diwh5Ekkc",
  "key34": "oCwCmBBjJHMtmrLcRMVL6nC4xDSxboh71UtUZ3RNudbSPzsLCe6YoHWzXNXDsu5tZZLuQphyk7uKJZaBFihXnPv",
  "key35": "4DZvFcX58eKQhhRs6RPgRpaMeZ1aS8TpLmMtmGK6gW7HWAv7bMNibvr8WcVgmYASz2RHw6Wcx8bKWnMxJKLiSRqT",
  "key36": "2nMjkPkeHNxBrmz8NozRHz88W2baCs3PgcHTL39ZJJgyksQZCYMfNP7UYQJdwVgCeGFqB6XTYVZ7yaobwLoXJuKf",
  "key37": "2oGLpBoyEH2ubb8R23MJJP38woiDgiT2Zv1d2LTG2AsQKJpQVv1xKaBaFqUYuMKybwVSUVbADP2kW9JFfY9fRefC",
  "key38": "3L5f6euK2fAznXNsCHHKy1qFTzfBPXhS5QiG41i9hU6PznzmdpNyaCVcTBNGvnTzhyKRf8JpuhS5fYCzdtH67Ftc",
  "key39": "4CsgqYQXLkBEhTxS9JZopEDW5xwZjgkHoRBVcpesS6nkmvoB16vmCB5nGuHgs4ri9iykCYBfmMNKQAoqEtFEdnE1",
  "key40": "4PVi37uEVAtK7UecnRYXBisPZRhggF5NBo6bnisaBLHGmvfUyf3AEdYfaZfBUk9ax1HEo7QfaV7LyQmztcf3cZJ7",
  "key41": "d9FSPmkGsS4dsLbCumNnq7yJi1Y4owyuK8a6dh1UaXtzEeD5Z5ZvPWjUPU4FV1YKCiX2ksxqEU7YMyBUXvpQ2Lm",
  "key42": "4asQYBfgN32md1ab8VhPYEd8zdzEu1aeq2s1kXZNJS1i4eRQzh7RrY9yDNPVozqDW36zCtyGi7m6CaAkHGTdvmhN",
  "key43": "4dcBtQatCsVwWwUGEyjBWGmj7ZK2Px7zPaErFozYsFDsbZJqWnevFFJ4MhFa2V5K33mvbwmMcwrsLZisTiioU1QM",
  "key44": "3AdkXHSSQJJZxCGEnj6LAab5y5sFcNAxroa8ufTNnFiMVXwcTr8L92xVGpK8TaEFjFexSgAD18Urk9J81YLgWLJA",
  "key45": "126qj3S6oeaH78qmt2P8hy7Wu4kdSyuqTHVmyPmzW9UaYfT1ru9FpEzvqu9mrLNuX9Vp73ufNm8njTmzxdeRnHC9",
  "key46": "4hVWgfaXYxbeqN5jXDTG2xciu1jPStABHxcxaYaCDEBPVudr2QQadni7cSbvYtShDgygacs1m5JXKfbZUHBMt43z",
  "key47": "2b9rWRtcao63BspbkgrWVBeE18ZLeJXms3nnbRnq8kfXZubeKN3ByqURkyyo8NrPXfuxumRYrrAX2zp2syBxSEVk",
  "key48": "46CRK1tHMWZf8VruKyewF1XgNJQzpKz4c1JhRy8N7zMx8vLkf7LEmo1ZhqGXZiNUVLydEW9zrKxYMXM1jPQvHoPN",
  "key49": "5Ym966b9UTJUvc5qr4EUfjKN8DNQWL3bCqAcGrax98DSjwyuFtmuZQy589QcUiYXoF5E11LGHNzCdHvyTmpt8vz8"
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
