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
    "ZLHgzjgQTnmRFG1aX38MRtBpmsZ4WESbycn9wZdvhWEJtxRE4kJbbad7W5H32aVtesiPAnMDYZoAyBLyB8WLhVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VbXiyvBjqg95HxYtcV77Rny15wyZYUDzCwkN8SJk6uXjxEsRGr1XiGqqXmq1X5kKSzUgg9hBhicQLVkRKU32boc",
  "key1": "4g2DQR3GTLYYK5Z2eSmbsmRNbkgpsR9hJMMvZfSgNKtzL6cog4LUNTnKawS5fFKgqex2T6QkfQddy2roReAvhJeJ",
  "key2": "5QRnr7Rk2BTvwSDNJG8RK2AU5z2x6fnfz5KzXNJr852n3FxrdyDEXQjwHUcVPyMjYaXcKHwAA4oJhQhUxBxHBQ1S",
  "key3": "4vNXHLZ3Xpn7mGyNaY9SMdKGVMkc8bdPvxbDWF1qwYJRqFEt8NUgzAGTCd7QLkHVmqYH3KP3uT9E5M2S4gjDrSW5",
  "key4": "329sSgt1H1gWezN9adNxPjgR7jjB8ubtyfXE2AuzcqvoNjczkaii8ELZzQ85hjpcYe5sKnxfjdCtWkX97abyaY42",
  "key5": "3wzanxjaBx1DKpnsJiCSZ9137QJbsG9zWN9CNY8YSwmiF1omMh9aYujjnBmQDVyMTWUVSFkHcKbNqRb7pKFfb54R",
  "key6": "avYWRrR6uKXzSKGHbT8HA8qXFZm3xUiEbZteJRC3QvrvjtniLSrZYcSPR3yyzQSXWdXb6XxY7R12GogxVFoLGGR",
  "key7": "dFxQkzTBw2LP5MeBkdxRWrtxSYuEea2i5SxAqJjyznmX9LRJoaAutX5pJT9bHrBTjD996AakCitUaCs3hv8WJyw",
  "key8": "4GQwQwghzTWq86QVu2mMMRvA2JfdML3zMiLEpV1htYZnxQAKhiccyTeyovBbCfyuxQdeo4PN8MPvD3z2SjQVQc7w",
  "key9": "5zCogyVfYxnQwWQfmUXETZfGZvRjr9LzGuynem3Drx5UAf41gtEUQr5H5rHHrJkiytN7JL6SYp9pZAVYuQtxVFwv",
  "key10": "55MDbvir8FAhWHwh4PWLpLnsy4szeboA7YqDo7RvJ8en56D5FFdahqwE45bnziDtAbCgHxUMpW4MsoCbkxZ9ziWD",
  "key11": "3TLPRY1mmHd2dRzR1BrnYkhpFSo1mpUCTQQ5hZPRu7diLkm775M2jQVxLUc85yXLwVomYFZeBFcF3nqHgu77pgkS",
  "key12": "24fja9MuVgCg72rviccRfo3orbkVy9UBocV5J44JhZVFZLQpdhFiDicHZJ5j2BEmkevwjk92FSiporzzi3gDPGe7",
  "key13": "1bjfpStvGhsYzr2cHu4ZXQiL62NRinYSCzwy8huBXrS1W33EJXHgd3c7pvcCazSFRTERke44A6idp4i7jMJGEoA",
  "key14": "5SWcozagYz3PhuzghgCk56oX4y3BaZofiqLmmJ4asevx1vbpAktyJ2W7GBBZzciTpgQpGWPJmGtnEtn7uCYP7okF",
  "key15": "3k5QSUZ1aGJWxqh7pwiFs824CBMBqfow23943vGd2YYXMLmQZTBqa6Yjzyr24JR5BytwjEQfUn5virtvquxPaek4",
  "key16": "54pg2W3Fiwg2jFp77GRr8mkHGy6oRztg4GSKzvpKWXEDrpsNh9uWGW5ZXCYQHoTmzuu9eiiJdyyCLwxYBtsY99k9",
  "key17": "enhpkbEJ9hwTvhr8gk4MSYJwK5ZDzygd5nyvTXky2Z4jsNfuy6Kc8287MW1LLuTMPLBGrHytnB2iy6C9HbgL9JW",
  "key18": "2fUayJ8EMzXJiHZqgqR1fYGxThFD3XkqWuxcMHXP87CZ9ub1VcyErcTz7CtQFCTBCrAm4zEZ2eZ9tFp7Qirr8ndw",
  "key19": "Dnf8eQupWcCWQRSgekgdfV7pLnE62astmvKtjwUrNMTt8dn4fkvhnSedz2jnHZNXMjAwiYAgXGjZYkjEaYPfGAH",
  "key20": "2jYvJkmnkY61oFCbn1cBi1eg8LgCTvJqojs7inG2JWp5sgVu9n1HWbLCvHe2kKhNYc9Lyj5hEKMX9tgmftgpQ4Jm",
  "key21": "8FELJCU8pzoULmwbu2dErHnHkFyPSrXgbjeJGuTcEvzSCoxiURUKZk4hNr4zkruouV3L2WGxfFjsbfFMGuZZbzf",
  "key22": "3C4pxo7bg6aFMihHb9NcwYp1tjmgLeP5nWKyRVtR4XAviduVbuLYTLtjmRvz2zHz5ofw3KbYyCu5XErij2fiih6B",
  "key23": "5m1jB98atftkZv8E4C3xWbaXqMqSGsfcroZ3kp6wvZDFsPLLrnLLChBxVri9vE3HkKcDi6jYfVsvypsJAesoT48x",
  "key24": "4tXJyHrpGr3tK5H8TfMzWmCbR4M86StrDbW3DCi2pmrtrMmzs9oXYiJHpjVpe28Mwew38fXuuXx3DnqwB4yWNwfD",
  "key25": "5mnk19QZzezN8cKgMnkdoY96Sne99zvMZnLXq5tuJGtQrFwxcaUA7wSjENS7J2bRfYQzjuPGe3oKva53w5Qvf9WK",
  "key26": "sRz9HWLF8QmnPA35BhqYowGZTi4WoiEAfEiDBr1FonnZHdq1e61W2vC8nLFmuyWzvaVRQQrP4wJ8bvbnzMCStBP",
  "key27": "4T3ug4SnSEELuQC3tP38eEcwUfcAFDpBnwJ554MS2eyDuvkN6vkfGfb6NwT6kETqYiusrDQGYeXX8AMSzKhRN4jd",
  "key28": "24dz2pcXc3itTst4jAwmUv3781DXGSHzamoFjUrcRMx8FnDDWYZGaQ6cPPn1teoh1pCYpuFr2hAeznLsMPtEe2rr",
  "key29": "26bVmF5qAWxoavLN7wZyY8x96VepKreHJVCbKURFv94Qu1qiqUM8nF2G4TMcwCkrjBusy382RFHH6DTkTkDEZxj6",
  "key30": "53iPYLykVBv59rGZYEQA57pFzx8zFB8pufPbLGiSuMhdyrDKpHDnZtFvPFebrxWjTjpyrvZ8sKTWfvq1EGVYYMJd",
  "key31": "4oAEhU3srdzMEUHX4SgVwjjWFmQDxEjJMEfnYFyvUDaGyTiTHugLqywE8aebgkBtNYZCepJD1jU4r7ApEdRdUZSC",
  "key32": "2KCfFHucmWFkvRwuz7xQdkyJ9yfQsr6qGU2UrwSAhSnnTLwmPZpuULQzBoFprpnRywhtSWyu7ox7nxrh9Pxq1Wsf",
  "key33": "4gV6P7c2rw1WwmJQC7b3evo2wvMc381BiUipvdqZjZgLjYy3ZtzVJJFEDDTdRPEqhcyTjXNEiWFiGHUEqKF18SXU",
  "key34": "5yYhwhcCQx7DXaM3dwVhVrhd7BexYmkBGCz3Ms2gQPHVA1QV7nWwYjgNEZWWdmzfBGYJHJ9wyHuKU7FrgZPsu2ZU",
  "key35": "sCmbazSmKJZqjRCsizKMGcRchfDNrkPwgQP2CGp8KA2QxW2G5rn9Uc46Sx85qFHeVVZdkZBkRnkQgchVAcPAbTo",
  "key36": "4xG4QCmGJujNE3x6Wmg1Fzrougc3FxUTJcsknviWH94Kt4PoDEfozYfgQR9K4pi4m1yUDdKxaFoU1ieteXqsrPGY",
  "key37": "VusM6RwnaWsaXKeuLKSoD3z6Vi93pf1D6qpni8j4SR1FCPZxgCvSvrG45P2Y1JiXo9vFPbpgLSFH6u5LBsqkZjg",
  "key38": "4FJYkB8zAPM77FrdXpMJbiZP81vwbxgRRHnD145bk1Ya4oZaUX4Du9DGqeW6gtcMFGnxPHpsnYYaTEYMDYB6AhxZ",
  "key39": "5BDB4f7JD84vEAwhUsDsYB4GXiVWsNsSF78SZ7jJtVsx6ekuKUCFCHrKEWWUhYTSNfZaoRHok9CgPj2JgfdaoHzQ",
  "key40": "kfYKUYrzTFoHUDXN43RKyLZkAY7MYAYEYJ3SZozKcLxgRK5daC8sgJeXddtf8XgXzmvtou6UZQfxUDmTKizDPTC",
  "key41": "2hYF1ZWqqmNCb9tkRrE6Y692UbYnt4JEE2f2UAPb3EKPkk7EGAsGEVuyHKgpH2tYTFFyShivq91gakpvm9uWW5Dq",
  "key42": "2X8s5iG46UMNv7gMa2L5SkeJcuCt3xXgCKeLg7AbpxJ3eRpmdVdkYJbCagywZqMncESBPFvYhPYEu7isSyqtYpnd",
  "key43": "bEUv7XBJgLCXAjajDZcmAPi2fpYtbBbYJkCFYCebT17sQDR9oiZ83XWcKNH4Ckb6midc1e2NTuD6XJccenzeboA",
  "key44": "3tS5rhVrjQceed9oiELxLGzMh4FSZkjsFqt7Uaf5q1oPssk7VNJe2wSDna4XxqJaqHXrHQdh2NQdRo9pJE2x972a",
  "key45": "3QAbWnL1SqV6q6v3ReNEzgToCWmr96taUgxYsFJHjdxF8cFS4EbVN5QQctc2VyQnURSPeCjZtzNViKrmpoT6ffjG",
  "key46": "5ZqVenXZpotwp1ihcoTZS2YLjdpmRgpNRiZmway8BW1ChVuC9hSP4MC2qcPr3VQkGnw8iyCPE1Njvy6Ai1V1AZMm",
  "key47": "2YgzSxLzoxrYQNopquhh7iGdMLuKWHfqwJJR6f2rpVJSryjen27oNGAzEojaVCGiankNja49e8kAToF1UY1exW8G",
  "key48": "2HXiDY2HamqWem7oGn72TzxvioYvaA8HWHsMrzAQwzsKZUByehajxnZC8EvqBgtGM7XjChVYE7yQdtizLg6ArWkC"
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
