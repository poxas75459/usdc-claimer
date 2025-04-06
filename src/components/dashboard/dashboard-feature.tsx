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
    "3AQg88JdJR7Y6beTvMNTp9Li1AKBEQgrSy7osvc4wCGucoZCStnadSTZi2PNunavYi37uwqpuVXsrWGX2kiNrisi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2msbuQAF758UKwG26uzzYF1Ru2zJqk3Rh84jXX5BxtFZu9LYpUU9xQnxfYasyT9twBu7kMM91iEm8KhZAQ8cCQtV",
  "key1": "5PH6yB6NK2UG7u17DsKoAT488oLsg8Wj1i3UH63rcFUm8aLXVvCbREoSA8mTpCuStSe55GmQxdjdQ8K8y1LyoY7x",
  "key2": "2rDDMMqE8GfHVA44XisK9ZT7bteLjm1JFzvLsRU73xZz9gZZLWrq3otgC3nejLhxJoHoSNc7cKyXWBRVzfw6nb52",
  "key3": "LbG8UmQUm747hUBJnvHjCnJtirmUq9UamL6daot1RxPtX4yN5cDPJMurpr8tfF523SyqUXFb9xwhEZW18ULGaCs",
  "key4": "FF9GQHhTFy9PoHgh19tPVgYG5RwzfkxBDE5cCW1HmkGU1VSVstKqzxvN2PDLxySR4KomvYBZgwejoN9K3TZyDjf",
  "key5": "Pc9xgWLvKCygXBi6X8a7m4dwkxKu9TPZmQ5gUCeSkb2xTD9VYDxw6X8gYDL5AVfP7LbbbU5kiu9DTviacRsaX8Q",
  "key6": "3zUVTTJRpV1qxrjZ8zjQVGcrwGiminJJeoVPGrBj96mEXkdVAsaTJk5uGHH84gsYUBhzkKL7AUrxvNzdomw15LAw",
  "key7": "27okYyRrAan9AWrQUTMhn2s8e5n4wEt3UdBq5HCqnKhWfET3Nmy65t6XJJU2W4NLM7eVDjqjtxHxFBYRT41WBMC2",
  "key8": "51DwL33Qkz9bZT8fz5nyiqM1dUeujztKXkUQAQhWMJdmaFksJSFotSTniJ4mEe9cNHzBoifL1AS3iSVoHv5HF4VU",
  "key9": "43SgcMxLyHg6Y3bDMpPh9tCcpyvRbRDbXCnm5PDWbqA6oUX4LLRgdH3qjgWuHJZEUjSnnotFHauorExfERjB9Tp",
  "key10": "3r2XWaDx6yubfAZTuFr7WCjHVT7HrFyCBVnhHVJHTZ8mkFdRSjYyVbWNTtb6gJa3or3ta5Ln3hoc4N9A4j5joVfj",
  "key11": "3k7zShGruh5dbEcVZXXSHdBz1vrM4ioqWZWEJn9i39LVHDSyvHForZbK3mYsVBW8Y8E2RmmCviFgD9Ni8pdN4pzt",
  "key12": "53XtophXTLPEUCohZRoVPwwdk9S57UdqFg9pDWykgyzxs59WfzcxDPbaRjY9nVptV786rqhAmMHsrUtFKRHaxVRW",
  "key13": "5fuJHS6AhxmDZQaSS5zjPzvnXMq8TQEYM1KWwk1J7dTR84M3xLPTfT4o9zi8qsY2SCgVyZznuAhQqhAdMoEfSoEd",
  "key14": "4Kd3aNzhxBtuBBW15syE2TSxKz6VzXsvT77frzfARTcacv8ZAe9TVbkt2fU9eTrKXNhTmpF8gUtyBz9kx3cCwBQc",
  "key15": "4V1kfZrJMtcVqwYT8QxUNCFsBuAMPTindtk45Yu9yhSEssg3fp66dP8qvYBzkNm54NLNyTEeCsDb1YLY85X1jbzt",
  "key16": "3itLmZDJ8GSNmSKqKSEUmqT3BFvpkdQtSG54zaoFx5ucKPqAL93Gtwj4sEJyhzjmhwtQZVdYJsDEDr3YkbatLJxh",
  "key17": "43Ja7DxCD9q83VV9K5LcBB4if5LeYgzZFkqogABACwb1ZpqP2GhaSaRyz6hBPiGYJyRg2dm8wTyVvUo9NH9B4DZC",
  "key18": "2fWHbV3y8h3E2a56AYbqmTEv5LmvhHbRUdhzniNNhcLYiT1k7NvVj5DBuGNhFaQZQcDU3Kw1iKx5nM7waorfLbSG",
  "key19": "w11KPcvePLufvfy7WKnpx5DkmWJ7J4KK6a4rcLL2bmuLkKcV3ZVMriAj638AdYihh7pHGfXM1VteLfNbGyvrsd1",
  "key20": "3htQm8z9Cy2qNYFuWy9JswfQhZUF5bngYPZYJafpgXnHQZRNzheikUVBfXwAdZUy9TQPJveVRbEagRKgGv7naNt9",
  "key21": "QVztW954cQv6zfoTMpSnD667fZKc6159aopDuW5rByyNNBveqCJyqv9hmjaHv2HArPiZXTBLLMPNWabZWV3tkHE",
  "key22": "3NY6syNEwBq11E9k4i8t7hLaADrYqFpSi8THU6uzAbJ3oWjuaxTW7fVrAa7Mc9jgJRv37a1kepNjmLTELXwKGAsL",
  "key23": "5VgVWJb5Wwr9UiGkZoesmgCxAU3mtUvahYdDhtrHEmD79rivJZWms9RGtT2Yruapdky1y6WBjAQRZiJ4i7An1ywh",
  "key24": "2tpRg5TU6wTKaQuidBa5f7ne9hHV6bKyDQLZg6bWwjRFh82thwAHCvXZYPb5gM6DFLbnziNhqsNY9nyJid5e8ha7",
  "key25": "WpMKz1pttytSEdRSBwrADmk7ioNaLSBP6WQUSmyxkKELHanVTfnMvCxnfm8rssyo6w1pTisp6nG5F2FwaghhpqA",
  "key26": "4DjZjT6XVMQ9qGmRn6cTH4kNh4JCKRAFf5nmvT3AGJdqeTvqtmxr7w7TwkjXSKPkvSMMj3P5piD7MvoVWBg2Vhzn",
  "key27": "3X1dvR2QLQr9gWveMZaCstnY1gZygv2uCSSyVVU7ASSmgqPsaAU7qMgR8HRoxBFuGQwFZFycbhvieVWkYG3ZG1mh",
  "key28": "61Jh9gxdX1wsb1A3KHHvm4q2EgPfQxwx6vd1ft8aoUXkNN7iNojiUrDFP28L8Y2nM2LPSJFzemdT77EZYEn7xaqg",
  "key29": "2D4C3iL8hNQNd6Fmr97eXUDSF4cvBc8xiKSuikUCj1adQRcZAobowcmKDvPrigG3jE1tNuLNGna2xEmvfL7PYo1G",
  "key30": "49wHh5oJAReSwvipH5XKXY94TRmJZDUDTtemj5hrpxsqtoC7S9HxLsVpmqnDaPHNosSahH93GMMtPfLHqV3zbyUH",
  "key31": "4ovHiYf2Gj9ua8T4u4WB7Fx6wwYej95QoAtpanmHzu7sr9PZxtbs2uJsmDabGxmfHLR6pbBp4jGXJTEKtv1prXzV",
  "key32": "48ZpJBn7tMcFiimmQ3XrNrqAk6HdLwCNyxVHS2ctVcgm1H3Pfj2DsPwHqDMeB5ArYSCHA1XjioP77ucLf8coJccJ",
  "key33": "5ewxBcaTM77yPwtv4eQAXm9ArvfGp85GLd1ZoznTBW8quFyAS3tw9c4Yje3astU1hco6XU2Jap3hs1s1hU8cYdB",
  "key34": "4Zgpb3nEg2e1ahU1iF72Fapp6RTh3BpZpJxRHQitEJTt8n49c3JhkxpxooVWeSHHmRRe9Uxb63nXzKHjeoZQtjJx",
  "key35": "29zSDjbK9wnhTEDyzma22tZQ5EA4CDecpaAsbHR7ycvud5fXpb8CBAheso5zfFUoKecYzy1SVfQM397675JH4PZZ",
  "key36": "62RrfmXA6dbswJZ1BZqqQgFSTAuuWKWq26nATBaVjDmN9sSqvtrcDk4qMpigmaGiSpzkRxppk4pbDakFKeaWaHdA",
  "key37": "VdtgM3HK4LdEqBLyf9vrYMukEujVNzmUsWhHaVXPnH7hgVNZbFUXadCgTyP4TTcf8Jc6SdoARWeFDqUGWhw3acA",
  "key38": "4kyQppbbGH49rqBWRAq2XFjRrTmjmNqqvqUNs5mhMwSii9tRHS6dYiSSBQtjmRfK1dSwJR29K8KFffELu2BeC164",
  "key39": "idVFMzsgcajwpjkWZZ5fUto1c4MBcTaTpfRfnFvUJdVPc8HBmxYL4wVWoohaETmWAg37ZG5wyjaoKJ3c4FwBHvp",
  "key40": "bcdhRKYfAKBs47WSo6s3gDEFp9swP7eYdU8Z6Tf2KyMiywSZDC6ARGgyCXLKurxzGj75mHj6xkNwKHesoSFvNm2",
  "key41": "52iHuFgyNW8CsQ231WfPf32r5vkmiSJzQdKdyBhZo7byDvQqr9jYQDDAfPYsnr3nZP4jyXHx7RPczY24R1HcE1u9",
  "key42": "2kzDSkVVRFzGMZfg1H1MoPkjgpLUZ7iv1Gq4ZdVSdkiEnAV94vRbJr4NC79mUQsLLA9Cg4QLDxovHHrYTZuUSEs7"
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
