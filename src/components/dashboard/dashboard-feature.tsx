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
    "3LssMQbXsmQRTc3bNx7ytzAzn1cuChWWcE39928mX7hfKDj2Y66dQQAS6C21Era4noVoN8SuiWAapnb2oKCTVp2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WC3BEUf48nKt3NrhPv7vJLWBf6eHrTv8Z7iuSqwYYwaT2ny1dWqrNnQ8HBsKA3ifrkFDXhfyjqX9uuA64wxbsyi",
  "key1": "2k8BiMkn12erSXuYVKqAgiActGqsBGpzsAEwWKwNMBGgZcWcgfUsFXsvnehHZFgnJ4f2L2ZSWbQL5VW2yubvPHSQ",
  "key2": "62m1bTfcS7muNJDJ3UwmiwDeBLSUt3vNtMGjTmhsranrgQwy6zM6p5Rn1qzMTFMqLm5D8CAu7ChHy1RfDKjgtcHS",
  "key3": "o6E75cDu9PyFyP1ZHWZ978kGxSypg3smisQ8EsQ1Wh562SKcgg2prybnvvtAyC4NdMGpVuQRwDVRMChXiTsWF1u",
  "key4": "4cXMo14SB7Ch1L4bgNK5NnaRuQzeJyoYKwHgLJ5z4KyZasyEfgAMF6kKB6CSKiSMX1w4JzZ8bkUKYDsNHgLvSgRq",
  "key5": "fQN5dcw5aPN2Eh5335hnfZCSFm4S7WUwdPb1tGMNoyTaruG5m7gPAqm18uaE4RjoRXmqGm6X5K5E7o4dAeFLZUe",
  "key6": "2338g6qkumJNDR2fRjaALkbnyGWUUURJbACRPG21o6XrzjjwvPJNpTkV3tzfRQGjnD4XCiAZoyKvRjZKGd4PkfYm",
  "key7": "2BzG8ryXH5PWWYQBjHMcbaGpBp2SnY42Lo6WATHFwymmv9V8wUHqUEogpZXkkxBqV2MxfWMukYerGmbsrS9JaYhf",
  "key8": "3wYg3aeeLTt16o3zLBXaU4Eue5HSE3tED3y4znnnMz97eYm9TTPgrbJsRrS4Ns9fj8e2UULoZpTuuR3PF3vFKitg",
  "key9": "GBbWU5ppHoNMFQCmWPZttvumFKfde3Hx4ycwQ32K6eMmyjzfEMNW47w9u5AUMMoSLauMzZxqEJ2Q2AANfvaHwKx",
  "key10": "5HXs1NexrPDJVEZPUcbwUxbTvnKTQaFpZUC4CS1Bcjf7JjG9d4dRBq4znT5KxbTMnrfwwLzFHhq9BUTY6Njpnhi2",
  "key11": "2Trb3W3DepJPkSuWr3nt2d6aK9opoWgjTnj8MEhxSgcnXobA314yFvKGHay9a67irqiAAd3SpHGd7Sofz4v4dmEA",
  "key12": "3F9eWqiiZN7axBro7ykbRFo2cFN2HkRy4uSZpQPq3EVPUDqncmN3nmF4VAaGPJNJbBSRzR67VpdirMnHx2Lzwfgq",
  "key13": "65z4nYht1MUphzn2pPVixq9XXKUrf7hCDPHSS2XFEUZeUc8AV1SqmgBKTTkaa82aEBzqCR43rh2CtNX4Ye3ET47c",
  "key14": "Uo6vfyHRRQg5NQEa1ucR1hxzHSVEAiZnkLmevA6L19Qv26bfZmLFrn5Z1qxaDwwQi5smykDv5YFszUaLA8vtjnx",
  "key15": "3zeHfEqmG62djkK2HMGbbmurXAhjhWaHgx3twkkrrDP2vsXHhzK9zQJ25TGN4f1YiSBJymJnxNPaJmdpw43EoM8q",
  "key16": "2GHycWfZf6RaRU3CTxUwUZ2MYDTDzMBaDkPjQDSEC9rhxQG8vHfAmQdCNDQg15kiY8rYgkSJwX37CkmY8PJqcUDF",
  "key17": "x2pJc26ZrNf2AUB6stefEqzaXYXeiGoAwsXphypvjj2zfpbmydcPW2kRC5bRKkrsDPcwwJDJgbfbcP6H1TqayVe",
  "key18": "3gzWt1j3muTuZiboPWQpjfGvgRSspCwJLVAXAN5WD5ELdCvqnDHV39d5SSv5tiHW3WS4FyW3LQDdYyvVDT66dR31",
  "key19": "2TM5PjZpeAstMmJqDKpqCeTBrDQCZtxzbu3rtNDX65PEVcZn6rxEu5Y8ig67YQirJEquQDVyWbLNPFCiFrvHxuaX",
  "key20": "3DgHuYdNYwCS7moQ12WTtstTFHEXuNkegj6Rq5XpLx3fEhqT87piAj4hy7jGbumTgPk1XfoRekzDQ5VDx8MABg43",
  "key21": "5pAZFFDKffqNFA7t5m2bW52LSaxMsbus2GjsFCSE22in5uYbZRzpwnAJQg76PYbrwYbFW9CMZwhQ36dvsGT4Qe7Z",
  "key22": "ugXFWp5guk65gLrjnxjs6bvwtmqTNLpux8T3Ra86SroPKa4iaMTyL37sC62TFFQ39pnpJi1vURLAu5b5Nneubqd",
  "key23": "2nzQWMjrGBwUJbxvgMDX3DSw1eaZJaVn5nju84TimNWxxGisbfR9Kf7N1E7p1EEn8YM5PjTeXAZih5iAfXG79oEB",
  "key24": "3fTZJs1XbLedk8cYdi1W8JacQEdvEoextSbhftRvNNjQivCVpGpJQKt1KUx4xzKrXoQeQuuiTszMkpwH2WBxEC7Y",
  "key25": "3PaP5Dw7RjQ8cK4CKDxQC5sqFDnaRanKg3VJm1vnmQ9KkTcjNLtfoCex3PrKgReno2zfncAjLRWpDhCUu5tgDjpA",
  "key26": "43EQpLpL2WeYp4zTyPRn9xggTS88VSHuQ6YQJtmNF1TiURZ9hpwXx2Z6mgCTtwRVxU39GKF8g6m4PPGpJ3hfCySZ",
  "key27": "4MQezp7af3DDpEk9uz3BYSH5GSiDiEGYRstKL1VRSNv24Z4FoRDPtd5zUrZXng7L4G5GrWWtG7EShz2oMLzZi6BJ",
  "key28": "hef9ezyj5C8PxmCMvgTCvhmTufBGJrTjJQqvc6FzUvzSiMAGQKNcpSyaSePbNhqPJcCu4secjfSfEuM7zkv9d3m",
  "key29": "4sjE6C8F1hmgNtq1815W1oXndoh14HccHQY14UtA6YfdzaMZrPrnH8TiQg4HuKvxGGz4xHRRHTGzCtBygsJQnghC",
  "key30": "3u6HcnFp8doVkDRbMtcjmEzU19EzGYwA7sKPzcHMEar75Nof6UXCVJ42VBC9wgdiXyUpxd6ofwUKyqFHECkRtfYa",
  "key31": "4mtz4tTHkrh9H5FKQ9kwCWZ5n6Mt16ZaWSYqc9E8Mwa5oepCdgtXHCQh6Z5DgK8LoMHTRUZc24MdHM7P6wqdVh5q",
  "key32": "4jpBdxtUzPiGdARvdqvNQEXx1oHjcwyJSbHRkrFTQTscNLJtu8zqRmUNgEm55Skn5LGRCTbXV1YJeAHcgPQXh9NA",
  "key33": "4mZrsNnNVnomzNgPy3sdoZEhQgAZvin6omjGEJBwghrv8ZSnu2TJv7C4jGBT7ZRbNNFAyQtbAHGwjy68GscTHT3e",
  "key34": "8vz2hsRMWRJSoDz5RULMVre83bLcJ8SnBr6VXs8MAajXysXYrYwFoxyALppqNFV9THbAp8c9T888NZVjxVv4ZU2",
  "key35": "2Hpa85fNXGodRH9P7Kxap6gcvSzwhNuJzqFjFPNYGJesiBucw6P9Pj1pfpeiiiN59BMB2FteB9CWehZkdai5SbGi",
  "key36": "5JntJesPr1si6kozUTy3d7JRoKZoHfSoeVaoPWuJQwTRi2M4ipTS7hGVj7zig9KM1ea6E8P9Uokop4F8dBsWoVFb",
  "key37": "34SSpJk2sSMvSUQy5qZgjKw5xLPd2UsgNgYYrjTAf8MVM6FRNvg9RnYo1zKTkzn6xMiHLyce8bmB7Su9W5tsX5Bh",
  "key38": "z6d1UzZ7abyC3g28Yy1FDZBVsXU7s8ptGTrdL2dQ348bHEBP238NWHEAGZy6LWW8PTqZU1KRJkNifXkrDYJdf5C",
  "key39": "2FmdKix3uWpDdCNUoUxp5gjQP5LxPqNvWqD4eCqUWe72ejN73mhj2hxaZwvemwKXmghaeUAQE8ehzUtwQzyV5HKo",
  "key40": "2Z4AwXB6PZCL4G7ZoDFYLWemDVUw8EDxN15z5VeeGzLjKbyadsqB6rhQZhH5xkr7yCK21qsopiMPEanVELTqf9V1",
  "key41": "4uUWHbzJ61n6igwLnvSmwkpif57MmsUFsdTWQiqG5DoveNXQXHi4H88zC55HR9wQ9yFMtCY7SduVPrctwJcSNeEN",
  "key42": "2gDpvBVS1AGdB1XVFVWKrCtb3Ef7vUhhtaSup8LmwAYbdiz286wabJYnondBCzCcR1jkxficrrMPwFu6MsCQt7Xe"
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
