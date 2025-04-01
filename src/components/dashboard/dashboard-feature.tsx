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
    "3usGQ1RZY8u9ZSHhxGicF5AGucf9qRQ5TivgaCiFyue8bLbxDheH1dSZ1QAJ5h7kJiWhNhFonfdPrL6Xg5uXiuVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cGEdiM6dVBS8f6xfxYhcPRbNrQqnTXGUFyZvWxg3ZCkWiHbwzwhBAqX96cLriyVAtADL1ZV76oaiZYWsvpfzSFQ",
  "key1": "2T2pse9GLbfCVZXRfLqE98XRrNCAx4DvCHYFKUnF4bKqRAM7eevZB8SjhPKJnw67Zzt1ZrQjrNWzLNmnE1a4BYq2",
  "key2": "4w9xDCytvWRaeN5HTMj6S1TG6ugtib5UHUdJ75Tenx2W6aHfApPGhRBwJrLdUnwexNfFs6FDisQBFVjKhVo9hUDK",
  "key3": "3cTMo4qwkD727W1HKLig8cqKowcXE7LTjT5XhdhKs3AGa3YnSFuJ3pm2MmUQizUjKeBWyvo6oH4Bm9QSWmzUFGtP",
  "key4": "58QqPY3bMT1YnE4YF494QdPkzNwW5pcS6g3CetsrfuwUjputBzE62V29ocXKCAhEgsUCjuJNKHFYuKmDCfWqup3K",
  "key5": "3xw9dbT9rR8byM4w9Y9BbBoJ5iNsGkuYcP6dPPHQys4MhEj8mnb7PhajvS9P32BWUTC66YGUnUqS7bE6vDAfkbYD",
  "key6": "TfJ6EgB4s8CKRdxRJQ8x4bjwHxWtA8xqWdgbiZMA9DxXhm2xr266W9hGBnVZcgsvnumHBEwXrH6EqhgRcJpGRCt",
  "key7": "2DpbHDEApjJYrhHYVCLkXFTtwyEau3To2Vc88dhjkyo2Kvz5Kvhi6ZnXRpdvExaYggGWGFsxe3WMvTSvH1buYyyt",
  "key8": "3FQAfyzLrqypUvVMHsrDFTqAygNcmWvm62rCdLhfysCRF6Q6J7kbmnZSVmaVafHwuTNFaBMh9PrTzJ4ivVvfaaAz",
  "key9": "21DVQZzTZzEktWGs8ioQyFUiQZjmoCZEh7yrw2mXWURGHbQehSceifTKRiQtyZNhktQd2gtdKH4PikGHhM9dFEYB",
  "key10": "2Qk8UDM6z4xvJKBWzFdAhvmRfvUtW9n7v3ujhwQeVququTjcDhzLB4GrvCbdan1PK7FAcap2JEkJPXh2dm2oAJxo",
  "key11": "3gB7Z6xP9EnF3wEppgNGc7JqKoMJhyscX6Jo4RoYEtWfDVsnvstohpmCAtAf4REvvvB2tQAQnKNz2NruyNief8xc",
  "key12": "pvBDfCmq9qPhchCnwTGdigGPkDjZgjFnGRHWP7ewT1NqEJ9FstE61HbEN5kQ5ExnHgQ5ZPB6CXjwoThdTjJGVPo",
  "key13": "2EMpx9ByKEAfvrfJLgFtxPgN9mSKWMDemyEKnTNuNU5mCm2sxg5cKhkWaK6bCYN4t1dPGtJ3dh8YxCJgqJDojhjw",
  "key14": "4VTiFdYDPsdFQJA3Kg7n8LAyaqrrDupAGdghxj7e9PCHfVyQB9vUXiWxgEtFL2CwhfnLworEuspbqe2FUBSSt97z",
  "key15": "66qyhBQyUorWfYFSfSYG8PQce8qTRHDPUv8iBCSuAyn5kxRKvRZqMW5464RNERymsCFKt8sngjLpweVAVySeknmT",
  "key16": "3xCnTUm8aQTiMgjeHHs62mvEYHjrkx3auYhbGkKkESJDFbEoaCQ38naUpQjHjPKcFBPYR4C3VmQd6KVwKR3e3g5k",
  "key17": "4KKN4nUrWa3mvVSJScpPNiphatAp8iiy1BKuCac7whHv8etJyKMjDD3oEp3mZ5p4bYXGk2X6udGbuc5datFG4qpx",
  "key18": "HHXhqoxJRSPDarLRUrWHtWvrnGqzYTzNbP4cuRYYk8HFKASGJntQTLPdaQPSSD2SHPpBkgw7pLwUxrLd2BWrbX9",
  "key19": "58kuzLmLUqr7s1YJR63eLaW54dyHk61JWV7PMXHR2N4xteioBfKPU4V9dTj4YbWmunp7mPRrXksYBfmx8TvXssqr",
  "key20": "2geWe8Xt1iyaAbDPyjLso8r3m6bUPpJii7eMarniihtc1S4FryEggfNKsuscFTqNNsQ382H7TCSuddBVpwoAQV2H",
  "key21": "31JhX2v8UsgAaSY8sLUjfogXSHzLtSqddi7k3GoHDQvFEbAdQpeCLQ3yuDS3PTSeewzymh2sUewQX9Fnvkbt54Qd",
  "key22": "511UQANCbbvyKMc7hqYCV8a7hoxL9vLTiaaQHSCWwHieMWCZo9JzhXrXVoZKFMVJtgg83jPctj3SCq7m79u8YAwt",
  "key23": "4HY8HxhPWMggx3vh4byZfa5FxqNcwcPKWK6ZjCv5xzUbuC15BqvLtF5GDpn2MGb9AAk7LdCHVydauxuhhBNUbjcK",
  "key24": "324YGjiMKS27TyTRrkGkjoh54bDx6UiNdSpfnGnxjccJxMcscvxegwmgo6yWsueFDCownzVLVRT1Rtnbfvg6bD6b",
  "key25": "2L5ic4DDHEqGXsfVJriQjLPVg2NKHJTS7W3FzYybE8Ye8j6XPHQ5Ji1SGaUDkHEynzuhnoduev7hDJoxC8CsrHJq",
  "key26": "5eCwivwftUcBE19ydPHYDsKMRqycENj2re3nZknf7pUdeNKMkBGxTX5JVVUfWHsFZYEknXhTcWgTAzQ2Dp3mY9NZ",
  "key27": "k2No4fq4jqdyVsnYhJwDcijsGYuZYdUZg7StBdJQ1eBppWJDAWz45BCd8XZbutCKXS7EZbZXBpTRMKatC5GWGXQ",
  "key28": "ahSauGm7WDQnQHZDpj1Jzts4eGspMFQgjeY959MfcLSzLB8oiar4qjnnnZx7KrHekJJgsDFJDpj15PUyTroSBPQ",
  "key29": "gkc7omeWE5ihrJP8SpTRpN3BAVKaxSqYfVJGQhCLEGvJZEQ2spnCc5qbjz9VA5ZfdfsUF5Bf4vya1QHwF1u455p",
  "key30": "2TveVh6kVir7aqkoQebouoUK3tB8x7StZ1L67uuG5FFQhD7WEFLf2pNKahcsS5SxuZoDGessK7G77R7rptjQ8JVf",
  "key31": "2qQMKaQWopHkahdJHDeWJb9a59sSu5Zred4zjC5Df2x6sJJubpP2C9VinYmWjPyQKZxwN15bk16K7PhQbkabtdAB",
  "key32": "3eGqW48q5qEg5p33Qvars9wh4tr12EJD26N6qVbd1c7jTNcCpFR4aAgC6p8RxGTZpSZq4FYF6wFnM3X65KAtboW4",
  "key33": "59Juuaw6Dzi5Pm54EqPn91Xvb7WzJtxQ4qqiZNFQRPU6PivS5f5988vhEGTmwrPqQ4kRPBonBLpZjXavuNSFEwMv",
  "key34": "3wydKL4XJFjabRK1Fj1rW9f3tynw7pQ5pNpv7EMNbA5jmQCBg6bitQC1RGLgfs8RpKLfvkKERkh3gEKB1eFvamZ2",
  "key35": "5e4QdFrX6oKoS3noQGVfzCxdc1HtfZwgSQVNj1psYMgiESVwDYPbDJkAexVfj5KcJ4vZf67djBib6b2WL7LknDTs",
  "key36": "4GwQLiUFxknd4JC9LiEDXEK6WpC7bU3vQWg3E8AbscDXLgjtYe6de6K4ApdUkKBAtAs6ua17aZGYvTTZMJq9AX8T",
  "key37": "28QH3AKgNWoDfnBBHQgQccxw2yGKL5BdAmtaFArygUUcjaAZWojgSwS2ue7shXpRxiYc8PGJ3qSmyTGFNuqr2N1o",
  "key38": "3vMyNvun4rug7ro9KLnsRraiUB8SPCHq5itfDjEhaYHtdwG2dAiP2fHdyW6drXz9xovdBx4ZswwgrG4vQy1Bk4Bn",
  "key39": "etV7U2DFbKXjaGtgjs71jJZ1jM75pP8yDUD2oewqDhmyrwBuaPTh63ETAYiZDAVLci4sAD1k4B4tTwtA8MrKcMW",
  "key40": "5KvMoNVBtmaV3b1ofnPeKzDuo2GKmHWjVTbeXCBQQqak4RXW5NqZTexQ19LhDB6S8EQr2itg9RDap1hYhU7vnWD3",
  "key41": "5GUKXhMTFZdccyDdWoHR3Uo7jkQJkieYPJTE8QfpJLsaGDGstw5LcNzqZNdSViSfxHyzyzzGUeA5R6eL1ZFqq1aY",
  "key42": "5sC5vZDYCULPRwh4wMjinjkcPgXmXEqkqpHBTgZ1mcu7Ma7LB4mpC4ycBqc3PF5ToEv1Dgs5phvBpNkxKPyvTkoQ"
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
