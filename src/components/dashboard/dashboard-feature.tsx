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
    "4Pt8pG7SmHxiG5tFr4xaGSKkAYQUYLCtLhYdfWkjnteTLRpDTpA96ZocYPDR6wXAYpEmzJ1nJsQRuuvRm9c4opLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48jJYgnMbCbWJJePmdjhsqD9r5AA2Y6WUz316KVhVzdX3hZsUM7cQWD5Q9g1Xdfb3iJf7f8TDx4DysKUzFNbqv5M",
  "key1": "3m5Qzw7jGGDidGpxkzqRFpt1VQxoTJQQwr2bMuEEd4bSR8Lp1hTSGC9V294UvMeZzHaEN8ZefnWmW6w3N6GVf4bM",
  "key2": "4xBWpAdofxmWLM24PzQZDBQkiYB1Z26Neftx3Ks6DXP6smud4F2QPRhwfK3bRzseiFtQpwtv5p5A8ZhpApbPd1SG",
  "key3": "48sY1YJ38T4bNSFu4G1sshzkJ6wUffsnKRKG9F99fu8C4HLKw2TtivdKqVcYPPKUdPmsCnfrXDoA1ePT9yJagBsy",
  "key4": "4w9ZxHahUGZ31efEJVmC5ThZEX62kMjpBUeuFDHwmkdrjan6SPaDvxa1K3m38GRurYBM2hXvKgLGtvNQJU8uUXXm",
  "key5": "5Zfti1aZxYtQ1j11Ufp2Bgo3Ux74scACEhwtbQrKNWiZ9jJekRvijKYWaVe4FAhgdyMfnf2TYhg86Tf2h2NarNpi",
  "key6": "2WSPHySqncAX48LmWnpnNzsEA345VSWUaJFkFaYEfQHvCTG8cgSUfNzCi7ywQxEVcWapDCriGzX6V7Ys5NqD6pNs",
  "key7": "41J8qXcVDQaA3rjbtZncn921p2oSt9FiZAn9XnV5MgMmPp62DgW1VBWqHCxVGXBEw7ZxN3yHqT36XLNPgrCm3Mfq",
  "key8": "3tXeYFv6dWYa8yuPqSGVbfWRRiU4pFgYYVaZHz2NfU7EVAiDpgEEQCxUisQKxJJjhkSuTdR2TYcK3GMVmgAHSp36",
  "key9": "Y1gPMF8qPQPSXozxYTyi16eHhWLRfuifkfjxR6Gc1JMLDjd9SSBSmQUwZFQbwLPbo9aKvMMa2hcuUFcfaaxvCG1",
  "key10": "8Zjq4LGmk4ZimU3Zw9AMct1QycupDyjJDXdaXeFvbYFNv4kQm8qeFEGiauBVipWPLM1y6xbQqsAntsnsBLkies1",
  "key11": "3bAfEusfXYaKnJC2WaG38ztmz8Bp55Vfhd9njyDQVheRia26bVSXir6iuHBN931csMUYSwAQx1XBkgSy8mcK7FkL",
  "key12": "2DoLMRf9MXKLfr99dSmcAp3aagxHHZnEBzWBYAKMyv2jisJ3etsEXGCZNJGixCeRhkSbF37AJXDkjKcRUA8R6hSo",
  "key13": "3pu6CXhqYm6uxFRVkFmWLofEsARotvfMjJt4xvvBc5mx8c9PfMnmKMRCAfPFXvqyxZg5BumirrbBZ79j9c1hMPjk",
  "key14": "4BPmuTVDrTgXWHLbVjmPM3JRwVoeGcstnwAwLJFRiL8UUQ8gvu9s2TePEoeHv9Y8xxxhHTGTwd71ZzYLURDVEXSq",
  "key15": "zCP1utifCJvtvCPAZ1T2kE5K5PQDcR3ivX2Jz7amDJKMrfp9zAUuiv93C5RSd9eVsaxBqKYVg8yySK5KK9N56v6",
  "key16": "eqrH5jo6JupW3AGGEsb7XtQ379BbtHG7gswwN2i5UeENtBLMo8Fi8xvEZTM611KN216jgzfgXKxnm8cQW2SzVCt",
  "key17": "2wzGyYwBo4vGJhjjErUgh5xzap73QA5bt5mekY48kBHTJtutGWM8ugyXDn5xMPNVmdACYQ9KrRMEWyeF9KQjUnJB",
  "key18": "4zC5uNevFAPoz4CPrQksh8RCrYjfQAZdQ8meoPY4WVyMBHvMsBUWPk6VSXS5fVHncBvJsAQoDZGtkYdgHuqWXYMe",
  "key19": "4u2TSMYLMUF2pKwNt7RioxRdLPe4KgHJpHiKxTpZXkJMoajhKXgWHTGXqKCeSoa9RVoFbhgh4Aqzczmw1gQppZRB",
  "key20": "5HvEkNVJoyteHe5n21kzed7nkdBz5yYpeprbPaJYuLnwg3hEqwp729gKqKjMHvu6CP2ET7ivP7sfZryrJnSd7rgq",
  "key21": "3AQ2VNYc7hTGeZAQJPaz8AMXjawEBCgNW2v93qM3wsu9HSDDhvD5AH92cLE3T1Y1xhjD1zgoFoRawKsm3mSpdxv6",
  "key22": "5UDHLMEs2WAv7NWw6YixrChtAqojHa1WX26dKYmEcA5C7gvqsEteqc6tBCX5VYAboF33w5ACnm3yc7kqct6JJ7Ut",
  "key23": "4ctaa6ND4Akp9ECviaeX5kRYGNvHDdKwrhbaT7EuPL3aTyqxMCAL5Cvu7maijPsko1sq5997rcg8uqnR7FDGB6He",
  "key24": "SMpTZ3yPNL7Sn7WPeV5hFzMn7hxzpnRNTY5myqgbLNJn55jmqbrTCXhNwpL9sRsVs5WMmauTXHmGksWtqwVh9w9",
  "key25": "3XSPiYiNbKrT1hprsLhfwYpwkwnBszVGeyis7tmysUzJAUyd9qU4zFm1y6fWGAd4YjdTCyMw28JmQLuizscyuGB2",
  "key26": "2BrZ9D6sLBZEwq5GfQKWh3vkDxiJ6pWJJJjF17PqCDPcDp4NVBbFNKwBmTwAa2TgjwRoLBZDd2tP3rpb4fPD6nQa",
  "key27": "5w394KYaNDcBnJgx4bhFAkXpYWKN912ApFJwy6emqpfiN8nAgXFhY7WxQeHy5rjnn1Fedrg8fcaEwHV6rMXWXYAR",
  "key28": "Lz8awh8sM3tPve6voUYRpVCscC15Qs7Ff31n5f68EXbWVSieQn8hhSnNMLPKe5ia4sBopdeY5Rhn1Sk1HWqmWvS",
  "key29": "5Dgp8prZ2ZBxBWh1AiSToR8zxHDupJohSbL6bnmGJvZeuCsRYQCUL5tcPZpgoK4Po6JTr3vULW1xUSpcRv5nhc89",
  "key30": "5iw2rEQqUkSLsqJTU6hYK5svYEGdw5sQGE8rr4VZD7jiefJKiQGgbUqVagrHKBELpjfRptdp1mnAdDPwVotHSRRj",
  "key31": "2aqtcC6jeEpb9h6dXsgBAV5DGHnutaXBFW6LFL5s7SzrMjb3Fr2F3FHnijauokAuBJcK35J2Yw6XANm7fZ7GbF54",
  "key32": "5NhRW4XzyTGvgPosSDo1zXiojczahzvj3GQbeAVbGKretrkkSqSDzh8cqygWm7gUh18NTdHfMJtsDvZPwD4mJUKH",
  "key33": "2wFsynatNjwDW6xvJck9eHxRFLsqWuNAqa1hsjcAwqhJ6D7YnhWUgUKa2ntXjQi6Usk2R9qdofugDqp3QbLYwfV8",
  "key34": "2BGS5bveEYhwzpGTF4xoTFz3kQ9rDjjrFPPHti9nqeDbzaRsBCY1CTWkh6VUFRxb14ue6vmuS8DVUAhN432Ddjj4",
  "key35": "vdCtCTCubi3EYW6XJn5xLS2AhLQ7Kp8QxtoBczajhzfoBk3KHQnQuTvrcS8pHLA62XUj6rTaG8pdqpD6rXbWvS3",
  "key36": "657u6eB94e7C6zP2Djbfh5y3f7ZfY2F1N1dFGZpp2wyftsz4SgUSFKEq8dTVSbHtCzEVAJcbQmj1Cy7C9UPoQr3M",
  "key37": "2KQtDfteF1kQmiASKrxpB7KywV1DwTNGsEBCP8B6eBrtMDUffK9BsJqp1htPVoSWn89YKhUrLS1zopkS7HzyTgwM",
  "key38": "2FkYWfGMnTSV1kkoTATEgt9uiM18kRqejHNVjS66dPQsG1ZFN3CBat7nn33eQsQdVXERXfctYd5EJwyDJRbP9GVk",
  "key39": "41d51Xq4gxNY3TfdjBmr6SEGGes9oA7q3fcWM84THQJfTHuWoMCnS6ctfxycSZ2rFLs3paJa6eD5GkAACuDAG3zL",
  "key40": "23RA2jNGZUdUJF9Cq5hgRnNALvLCGoJJUQ4aFy4zHWEE8JvaPgCa3PmLWwZg6tymtRAMho8r6fr9UC2WYE2MSDzX",
  "key41": "4MdkYEsaWtaCufQCEFf3dfgpm4BZiE12SLHrnqKjRbRzXyRZXtLYsXYCRAazeDZ8kah8mNawK2VbiuDShDuPRzZ6",
  "key42": "ndjyeRDBVFdoxWj72AtbMR2DSrrVEsro72zY3RKN2s2E4LZpXLSwaAewGnjWdHWuGtHfq8THjoX228tzKaecmUy",
  "key43": "5KD9QkbUFRZGdnv4BEpa8w8YoewzU12wdnkPoKc4d41WPYHuY2djLt7CTWNE57UikPrGFmM9zhLacA76YzJ7vGM6",
  "key44": "39brrozKNKoQpyuZSPfJ39zroyPxDhAabKaJbeEoy49PkiKDbecsqtpVVrUcLX1sFKb375M7k9YTsmEEFKB3pqhB",
  "key45": "34sY8ZfFpAThAz1EEd5mqa7BA3os2fiaUDRHE4PpDsmUnKDRk2H3UmF1NwdG8aaXYvm9gTunP4EgF8GjHHUzdGXE"
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
