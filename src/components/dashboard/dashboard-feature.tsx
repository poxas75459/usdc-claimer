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
    "5hHrXi7wQ4YDaarwZ2Any57PbQ9nNZwzcMihhy9V6ZgNCimXwToub3QUTyxoz4exv6dvecAtWj5gNntVrueoe4Wz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i5G4KBoxBwmNippfjmRTGQJvpYtEwxkvJsL6wQTTnE5dAdGJf4NRBqUcK4tQ8qpwkCXYCd16hkgY8tZBYQ2xkgp",
  "key1": "3U3XBv4SXB9AjV8GzvscChjKfCVi1kPcJemXFnuUWNDUpo5cBd71xoAWtGejx364ggCvtPMK4j868jh7Piv6WKoy",
  "key2": "638wAaAHGdk139BjseMNafwsyyyXP5zqz8GHioRneoRSaa2zdmjzoeoqA6R1sF2fRRZTHof14hHYAtb44QubLrdq",
  "key3": "43K1dxmdHCwGLrrEuN94cMKZUzZZGBb8UTELSa67Z8i1KKRiLjXKGkacUJj7TxtkvhDfqjda1pDWtFUAWCVLv84S",
  "key4": "3QCSC1MwA1kWa8pxeZ3jpVeKSXfGqT4CkSx4VQmVxJcCoo8bMdLvc6eCRfykf4PyqreH2sRx2DwQ9md2XWcaUhyq",
  "key5": "5LegEbbwi73izhHyUDuR1oypc49KXBzrSbSFeKCzFBv8QBotUjDLqRh9Vrm2vmJ3n6E9xuHY5e3S539t39tvzY6i",
  "key6": "1naxdyyoDdWuD71ewyu4iwCbbdBVoXhMGr3aCXYGgv1m4U4yRkixrHapdAmBXAiKYS3kPVuyg6qX28KdwdaTxKX",
  "key7": "4RYsk9PEHUEjYpHQeKSdyiEBJtaZHtV32bMYfThEk2naiwzDQnCPbVvPstAgqcdTb6ZtezLzU1Cb7LzJg83YjmGZ",
  "key8": "nkYi4DR6gzE3cA38w9yUHqZyAyN9gsSKL9tWtvw8ygKAKbm32L6YqRfGe5X4n56Sp55usxwWwHNBvD9tDBHnh6g",
  "key9": "C3CuozMzvQDWxPqcecyJSbNsewBsdcXmcxcQYtt1QcFFdceAHSczgBhvM5EThY4Zb3FtdmwtsTwoQyMEGhyqdTV",
  "key10": "2SFrMo1iWpLnHkCSUyRbUPezSpAhsVBrmuZDToKdH54tNpN3zh25ZLj7baDkvKELj8vES5DX3q1cuH94oRRtz9d6",
  "key11": "3pFNnJdy9RoMoBxn3XMAEYydBrEHv1LBLKyHXvWW1eqs2k6kmQSbpwXTotTSXYiemxMZGbnUgrCUYq5Z4Zv1pwq3",
  "key12": "2TF71Pu7R3VQtgVG2f7nrGuZ3EMCiUstCvPx3NVdH5NivU8NNRQjiVkFBfmH9XnZ9axhyA9hF94GG3Xm95XkBmNE",
  "key13": "3ne9Xn6oky4yUXbj93cWpQ7Vdyye2oEWB2kuTjsUVwB6FmGbD52f5pSJPA1xcaturwAzXVNLKqGuqebM197aGdPz",
  "key14": "5RNg8uJbxZ6RZvDTVRsjkzX857AuGYhfNVT3hN4bLbhg7QjHE1CaX7baHsZUor31tf4ANUheo3pKy3td1X5uh4bi",
  "key15": "3KM6Ust4grdhdzjhdA93Cxpid9cFx6nBecEGJu3YSBNn6dxUQydewdQazyAigscyLX5f2wXgGdgPBvHhTWw5EqyR",
  "key16": "52SHFbioi8zUxNfcpvMxBPBoUgrPahfs9jxGENnwkYNsmGqRLvHqmyw72D3RnQJcM9g6uQNcyBvcku9iHQx1XnSy",
  "key17": "5K9cUJYgiKednyuYqLM3QDhHYrVWmNruT51CS7f3rec2Zj1u7ynH3Er34fWyM5TtrqjNt4C92MfyStzMRKrB4wdy",
  "key18": "5DtSd71YJJRUSvjTBHX64zSW9dTAGKWrF1RcE88eRsn9CKwXNbtRL232jiuyiJBc7dLZPUozbMxei39mvePMJkHg",
  "key19": "4r9kAZMsDo55y8CFUceZY87DQFS1VVyeH52jZVuovcMUi9ZmqJkTUkh51k7QVDdc6dZAExVWkBhLFbM7huvE44ch",
  "key20": "2EkKKwy1QkMNQQcZiiqQVpkq8TgMFKdgUMDyJovJ2guF2ejUpbjYn4wiLtrTZYqfwZpFHbDjs9B5bQixQEtGkUyh",
  "key21": "3TCS77agWDa4vdkAjoe8TgqgWKHeV1znCAm29yZEHLBr9dTDEjWvXYuve5pasF4JiozwbtP8KW9uirq1P7UU4em7",
  "key22": "35wmBH4NRWgyHApefNdNjkEjsWthov4hWtUNs7jJE6y1PgqdudnNXUuVpnbsaFkmn4qtpWCyqRM1Pmggh9DrKTAU",
  "key23": "31XW7SpRH7KhbGHYjTQNhRu9mqzPvJuJsbjbp7D4kbizCr5wDHo331cMNiNyZ8TgbxTykgjCNoHGcDwpvzc4so6A",
  "key24": "33bYfnmVqf5vbPMJkDy47bX9Rao6qS2cJUF2DD6Unxs2ZcGZNFzjkFAPEpn2ALW1w4iQ48r1m3t2zXZiPKLwZaCM",
  "key25": "qGX317DF8TbdSnDrubfBFg585NSRS2wtSWbzKa9uuwWuiMGK8Q6TfG8nDCGjDUix6Q4ck4ERPVXqAYfrRJkdDYN",
  "key26": "sKHBn9QaVqeRVpDmvx5wmNz9JTyZmPCvKX7triaBsTGrdgHfYc8Eo2c9wSYEBqLZjdysDjE5B1TyA14cmAfsVdE",
  "key27": "56juXrN8wGQtbGCR9DgBYX2ttsmDBQegEbmVjdBjyKudbtF64dczdMe5uBd2AEehYyxZj3WAkDnqrqtpBa5XRVV7",
  "key28": "2hKNiTjPQswjGzTEkZ6hWjqqGz5MdzeRsszh6QCGUutrNpxPJw1BswSD2kPCN3yM3afDK6nGMZGfquPPM8c1BvQg",
  "key29": "2MCTcFRhKPMCoseZGx39AuwxkAX4o2685JfTQxi8GRnoWaJgPUVsF87xP8GnzWvXN3frKVmDbvMLk3iJp43ETveY",
  "key30": "4qF4Pr6LwMa5BqRYVzmBGEtH9v3y6qn1KsnieUWhJkKwg6mQzQcGsnQEWTFtAbzcT8KB12hM4BT8c8BFvczTmDaY",
  "key31": "2Mkhn8V9DrnK4qnSYVajvFEQYudgje8nQveGjpCQDDDjoPZVaBuQm6c9o82s1MdRdsMqDJjr5eNm4YeMookikdyr",
  "key32": "5ueU6W2Vb7CYg5Ppb6DnGZppWHCa8FihsqbdjRWe4Pxg4bKYdDvsiHzcK3hY8iWt4TLnKkdLZccrdYUAyPmKz8AG",
  "key33": "3hLKGJHxm8ijy7ykSfe5o2spkNeBukRTBWkiEdP6iLN4QTqprY6crr53pc1pVAYcdKtwTnnt8U3FzqAnHtguRWfS",
  "key34": "i8s7TJPnkymgfZnTkLE2GdRYDtmXPXkVsnDpqVkfMGLkm1jxM5rWhGnA1ARZSC8FekierQvjHVcWfKdHmPPQCBW",
  "key35": "4jM9wFN1zfXsGu9pp4bF1TbBSCCYPAcyXvko2Pc2V2EkGPhocguetnaE25zmmkDNqSdwvVSTS5xEFAB7ZJq4Vbmj",
  "key36": "4Gb8s9wLL79BqU36AoaCFqDGnvbM111MZAAmKBcsVUE1LjWu6fBYN66BmAdVoPXEV9dU274yra3kcNuLrecfYQX",
  "key37": "5wEq8vK2FiNerJmaSEfoE54WMa3bT5bE4kbvcoVNWGkfTdt8HvQB5dWmV5fGecy74TQ4aZhcnLQo3CNMUHwQ9QzL",
  "key38": "2Xp2RkirbH8TpLNLbg2Atac9fg4kEHHRew1PVGFgKXsx4tCTCrW8yxxzmkSzmh5quUFAMHrgi9EJAbh28qt7i1sg",
  "key39": "2rmkNH1rQEucoQsi7YewXoeJknCrHmRD89wi8HhSAx5qb2QfidmfTKRcrizcK5WKG8ABXiKhDtWeSUh6WuFShCFy",
  "key40": "5HU9vZYXLq288kQAmLskgeL7y4omZhX1As3UKR7mfZNVr46hU6DMXukA1h2Zh3HAmit9kLAuzjmGHeLQMmV8k7ab",
  "key41": "VTw3LSzaejcqzLdr7kpkzwY9gBksfig3RSXj4JG3iGyoNC9ytuLad9BvigcKsQAZ1yCNcBFb9Gcfb35GMc4JJm9",
  "key42": "2heWCdCkxRvRcoDRj8o5dC3TjXDRMMkxxJzNFJP7ytBMZohi24hBe2hfhxKjFudBm6Npd99v4rFqhBhTGXudsoMm",
  "key43": "3oCJ5v97qjFqcmud9Ho2qRnCPdmDdLPaTc6zUgM2d1eBmKGX6jtBLnPenTy3aSD8TaC7m39PxqrJjvGMg1ArAqCG",
  "key44": "2oBY512pvbfLdgAEWo13WwWVRxpdnAPagMzHHFwmpjZPVSCM6HB1Lz5hQrqzL8StCb3EGCb2Nf95KvvpnceZkAho"
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
