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
    "2Nui3Z1PKgVEgsav7sfam6xiJSyZ6aQ4HwPjZwAJvxLNF1hJkmyqHL1yD1wq4o1xaTUyxHjykAwjFfAPNPdxhJKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XSWHhAmREsgh6aTxhFB2JWfjufqy27L517a9GPtZZzMvwPrHa3gBhc6ccN3rVBTHVUdsbQGVi4UK1Z8zvfHq7y8",
  "key1": "4R7meTKtDzgNPk2AuSy5bt5SKUwYwr2p5P7HK9vswuRwPxrVEx9YzcabR4uoVBv6o1ov1q2G1pUqamnLTynFaBg7",
  "key2": "5Ucx9HNbtVetimRxaXK9kqmtpHYPWab38QMTmDUWsVpE5cMhC7HVuT9epYDp8HvR1WT8tKNYhWxk4SgdYwHAAj4Y",
  "key3": "4LyELwPG9RH4fCNL4mNkZssPm8d6MWWZv5AhwpndMCtv9hTbD7mpYLhV6acXVEkFAPiJJuaJ5pKjzGBhKHqsuUEL",
  "key4": "3ZtLgErJGRn4d5uPixFN5bDcj7JcWcJR6uPbEPpe5K3zs1vvcQ9VVZ4o8BpRj4aHXoZJUqcwkqL59vYEpP7QRp2K",
  "key5": "1xoeUz79jQdoMff3t4Bdqn56uRm5mmyAHhrG89dnaoL2wmp81C3H1FL8my5cMmPpmF8QkHjxdfUwn6yx1ym1Y8F",
  "key6": "2fr6tMTMvpcXaFuyMzVCiSY1upRNsszRfMUhXwDLXTZFuU2uhFAZQ1JCZk2nn4w22YaZhZKHjBZrr14ePCcMAf4b",
  "key7": "3xP2yBWfHny2CdXtbsidroqd3XTi2Hv9S3ZVr4ewQa2ag6oyKUa9yxMozA5BNhkhzkmBUJ86v43ED8d77ATZBSDN",
  "key8": "5W9oguKC5bXeUJwx6Jac5Ca1N5ZNuSEEqedaoUFSL2PmeehK1uFRVHXSN3uHSBh3qpw1TmyorvKKkywSKF3EgmhX",
  "key9": "9nRJbmYVv7FJc7cti9Y4SSeiBGCgzE7zDXB4Td7hRPfPH43PtHnRyHLAoDaERjA26uQLpR918UbWEY7Wiwq72xF",
  "key10": "41XLTUKdeUuQRsqkDuMHkPfnNj8RJ3GSo4dcXwhor23rewoZBrSxbJD5cb8sNyuBP1RwJQAmifGTzUGpDFVraJQF",
  "key11": "4p8SeJZaoTD3Jn55ptXTLokfb4WfqBkduQioFmEzK6Hh2b4m2MhatPABvBp4deLeqPAtrs2P7Dd3SUBMTV56d98T",
  "key12": "5anvNp8u85VWHdYEWDrD4nUc9cSkBkgWNMUtBN8CCxA636je4vnchEv8k1rHVdgxc8Rh1gCaGDgYfGKgGP7J4A7f",
  "key13": "2w3UkiTn1yp5xyw4xgNaVr3K2kHCYHvLbcPGg8tRsZwpYkQxdpvKbnavtHmuUcomujExUDxD46SWhPLfHUv4zsBx",
  "key14": "4T5LkCexxwgf2dreryzjMWNHdGWzavkRDThCcraZGeYRGKVauu6B4EsAMzq3Xk4KatngmYtcGte6PMhzu4ZejZx7",
  "key15": "2PA8NG8gEzpZp1wRvskyEBfdYgmgNDorPvan7pxk6Y1cFnNprwsrwhgtyqzuQPs8z7rxCxWfzordUkGGWSwmfJaE",
  "key16": "CCSguHUULoS3FJFZj8Fod4LBX2hC2YTJZ4GPVqM4Jw6ydG8HS6z1aKbJq3kpDUvVKV48hx1mcB5ogxmCJaepyio",
  "key17": "4QPAKSQ52hPqoybYT6Wm99T6tPmcx8QVLGRDf7o3dZREJ4pq6nCt8oSsMCM2LMNWzk7WpPL32ERkoP7meRUcLext",
  "key18": "rreNBfsBHZz6Nfk8XiaZDjBZDrv552mSDf4uUae1Cp3sjxujeuWhVaq7cctSgTBqVHWGeLrbz9eLtj3sz25dZgb",
  "key19": "3S3ZEomgdpAst93EwXyZG8yNrnfPXwEpMxoavQ2oNJn8vPaBhxfmnuwJisL7bH8Tccbd5j8TNhBg6AN7XGkdPLKN",
  "key20": "2LcEXZwHrhxE8vAP7ZxKrdc9J1kZUrKNrY3Ls7XNFqsofGSjF1S5Bbn4A5X6et5uQhiaTCdHqX9VXCxPg8QmEEpf",
  "key21": "3Bx9UFaqtUCFV2cPJYwXef9G4ygqaPY9aNcPpjEJa1ZWy42zmhHn93g5RskHBv6Z1Ta6zpaZGH7uAzMw4iytibK1",
  "key22": "3WtXHzDRHRrDHyasnrTgWKJrDKN247ExXLezpDSLqpME4Sq7ULG11uLEW9GGt58Dw1GveHCVkmnN7YmHmgLgBPhu",
  "key23": "ahDPSxw1Y3t7hjrvf2YqoiREr8HuemgcZmoyBZ96CUSjpcaU6Cgv8CZoLUjgWr93YnMgACQSzqNaLQDgYSiP18K",
  "key24": "3Vmyh2ijreq8VxTJTQQvgKesNK2M38aGmCoVJGSb1eUi1Ca1bSZmt5SPMvB3DNahs1mXjaASunqvrUyaJX5xdhst",
  "key25": "3EB1nkAd5hX5FtjyVoHMTy9ndWwQtxoxzuoj2YMBaYJq3V6wujwLztzXq5D77cSp7icoH5o38oedvMXUx1zhPjaD",
  "key26": "amcFnKsKoVHNu79PeNwpM1ycnkgMXiY1equYczjJh9yGTv3EXYobCRixaLnUF6sfxA82NkZ1725yfP1RQyaVPA7",
  "key27": "28bDwsSkwkaznsarprJRBU3DpzR73Z8BZYQD3LS8P2iip1vspMQpgrsCb79hhwiJeg9C6cEKnM7zyua2zWKRG2cR",
  "key28": "3ZuEsAwGFagG57aaAjHZmMXUe6kbJCKYnChUUFCuWTfx8Hi8TTEq5aZxaNfGXrfVDi5pnHCEs1hfwmQGgqG2TtDN",
  "key29": "EYAw9usHWA3DP72V5dJgZnqY2qW2Hy2xdJciWGpk9eM4ctLkswXL2LaHBuj6siMbjBKYhiovWKgNsaxBZ9QX5t4",
  "key30": "5TTymNySzUaxt1s3WJRRS1qWdaWzzsfCFWBhg7CkcPwiktLgNwCeRXzbNT9VME1CZgQ3ZmvZKdr92WgmEPHZsSxD",
  "key31": "3qKFUTDTpTfLgcw3JjVoeTDCLYrVrUNw8GWnStA26uGGE9mgKqwuaLyvMdmfKbKXKjouL2WttQJ4krXANVYf8DPr",
  "key32": "3FGwFG7FjvDKEa78p3rzMaxBtKDZUBvJ5ycaApvQxwvQHamzC3xERzkAWX76FKFcDxBzjVCRTYwgxr2YNKQUMDoK",
  "key33": "29EZttRyMT3Yqy85tJ7nyKf6eSS656H35pT8v75aSBa1XMcVs6gEpi52jHb16XrrbJJPmM5DwysCAtrMfyvnr4Xs",
  "key34": "446poqBBydKzoceKCzZRDYyzs8pn52v7CVo3Tyv6Yij5iTpLwKcSucRuKasKRejPE8ADjmyTdemd5YLkB8bkDRMe",
  "key35": "2MdsSK59sBJ3ScBrqTWhwLhKAjLe8CH4dNwYxXyEtJ1bAH8iZsC2u6jmVMDJzz6h96MU7xcJRdxMxBpGjRtRjvW4"
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
