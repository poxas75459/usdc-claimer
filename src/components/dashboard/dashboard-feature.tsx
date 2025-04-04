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
    "WU3We2xyzGBbJrsRwZqKXH6fPejt8C7XQfY7Yb6xoncGerj2ieRv53U6iQ7f2dHzuVPnehpKFQD8yKPVbZgd6aj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25cTfTQmP3sbG2gAmiyTrq2pDSD7NfQVJKesKS2qBhbocFiMFUk4BXMeXmrGRcKVr5EQHTWujr5qH9RvTU7HEHiA",
  "key1": "3ncrUd2G6YWDNP4ASrY3da2kHwy5WUG5vwDctyb7y96EsQS5wmyaUVsCNSiGn9ofg4HY34qcTxA861AzdZf6bT8W",
  "key2": "W4W8hc6FJFU1rztsVwEno3sKZrnbMfNP6DHoJDBoUWfVXFkPEAik4euTZVdze7HLBdxoDwXDVYFK2hVG2rt4hRG",
  "key3": "3igeMT9QoQXJEcfYSU13FXd7d5QGNz3qfRyVww2KDr6oGGcUcxfNrQjSAU2CKwH2moLK6PHGgCP2nqgkSqEpUMoB",
  "key4": "5n36v7mvnNzD7fVQD5yeA26zSLJ5XDmC2UyNxGDvxogqNuZAe1654bo6iwuL6Fc1BjCVXvk8JKsQEfboPoPfyfGK",
  "key5": "2virKGmoikGCiZfWXeuv6QWKHgGmrNzAUVLzWqHBHbTzfkRdq4dA7i2ndFqGqwTFFbR4iooi4XRwq5chLgMu8ogK",
  "key6": "47LxV32FcGsK1GJJ44kM2K8h8XZcLuoxZpwS5oQtcRVRsuok6qfjRxTDWSvpujbF9cEqzbFZQdwMvWu1nPrZXErg",
  "key7": "3oHMQWohYW7P4qRX3e8tcfgtNTbDSyH3ZnP7Za26a6PZ87fgX1suyuqDtEFPpgk1q82pwMbyfv6VhanuTD3yny1p",
  "key8": "3xRZTumofmvrJkzJ8pu87zBV1vu3bPLuYqMhoRzStv2Az5pXxhRH99t9J4mMhzXHnSex2m1mQUQjT4oeLEF8Vxn6",
  "key9": "VK3VdHmKgGr5uAR9FrAqCUUAd2yjPYWCmi2EmtoSBHhzVacc2D2Ao2CYLkMPvzBcJhMCT77QdA2LeKatCR5zimA",
  "key10": "2wNpA82F8Sfve1gZVwif45ku6SN5vakYXpsNumX8eTc3NjYXpL7vMwZGPv4xeMVaPourrd7kjjYAMQXNcwqWfKMw",
  "key11": "5a81Au7U4cv6F4ztMSXstL4iwcDaxgkmhNsNpS7K6S4vWsTTdrpsoXYBcAAd7tmZUVEjwWweHned82JZbGhtHRUX",
  "key12": "267AAWNYP2JGZLouCJmsBTcwbbWn43fs3P7QhKZbPx1ck2AGhDSmiAxyTJATyUNza5FRkpuNLMj2oGBWsix9VbRL",
  "key13": "4RtoYGa4Mq8oYtSHtbw4fwXRXAPcdhjeydsMUQJAukMvxkV78QvJzHds4osyg6KsRThQQM8yKgvoKSMT5otVTZMj",
  "key14": "4xVNPHsGXMSPSxiRsT5DQ5NpgKLkBwXcjHpNxX5e1a7X48ZjEdTs38QywpJZ2x1cwcgdWfioU71n66QKXV64ugA8",
  "key15": "RC18Fj3QAdqcnTW5d9xn5gFQLUFtE29QWXMbJpQD5MVpvutWQaiPwtAkiZ7wRWprcdWMYEzz3xCqdp78iVt3MN9",
  "key16": "2fQstLG6sh8Zi9m1VkoF7fifexk4oEguoXvMXHkQMzjaqFgksa6sqiy1KepAEnbjJLaZhDFyEjrYk8okDQYUAj66",
  "key17": "gqDxcAbm8EqLrbLf41KPrZWQqQHzjxDysofJx6Vn2zCGa4vttdfBx1ciYBHsyDkAPSDHCWppT993PxtxLrjuMqq",
  "key18": "2H49jbY6iVojNwQPsRRxoaazbhbq66XEDQpbtAEjWHifqxRhoMstX1UUtR2W7JFN8XbEoJfFWSY7DQ91kj6ft3UQ",
  "key19": "4SvJshr3NYRQ9x1KAqzSn2faxLNyDSS2Qa8NMEK3oWscqhbTNkrQZZWp95ef43VH5emC2V5LpP8sP5KePSZFnUcn",
  "key20": "3jDytxLVNew7d4pHzXteZeWGhBt4jArEHnpZ52UjNAGctp56ZZFCSmweWgjGDeF97rqhfpZJoE2z8ooTzHdXSHqm",
  "key21": "4vh5eajWmovy9YsYu2yicgC5K31pVG9vAtVxJGZeBEbCTxYjDTSBpda9wqGkwXk7S6Qg2VMvQ3P3VetdsgZbzHPH",
  "key22": "51zsH1Yg4A8TyHohw4CH2TEmLgnHV2ie77eWAiNjmpYnCQ415rpGHR8kftzxbFcqU2m84gsh98ebud1jTTA6Qsp8",
  "key23": "2sRLrwQogayScMNs7hjPmXDwvnhX4yBiGNcT3kXLhFL7oT1pVzUr7QCaq5MP2AdKKUcqJXU2QEEqZj9PekGEdQ6k",
  "key24": "2Zfz2YzU2etC6ASAwbrGkyvsF82hCfzB1esEsCUikmMhacGDiU41TdcNUPJrCZe4WGdMaVCZCkvvK9cGN11AnaXn",
  "key25": "33ePFsTFDRZckfbwnxc4eaZiMhdZ9qrSkqbB2fbgjwJDMyWaQ1xMgXazbjs1NjjdRQBEruBtU2SY9oLVSFkNUfW4",
  "key26": "uaqxM9XHMZCHBaRTC36T6eoDDQX8icTZs1e9cNvcZWZb1XTTtLwt8mdcziGzUpvXxjeyZgQYL46sZfvvWjxJC2t",
  "key27": "4bLNk5jt1mTpLihosp73yQuqSdni9iQQa3FADXmhKT4GsRqDn2heCwmgzWXg81RsQ6QfNBZRJo7WUz4qq9QWmd8M",
  "key28": "eLihp8t3GAZMKhxSfFgphewYrDS7m95xnBZVDczy4Dc6A8uMs3wBBxBQL2LLRHfme2Jw87LBvmUV8eeURYBN9cy",
  "key29": "MhcMGgyAEsgU9EgUCToPLog2wfBCt2AaSxcLa4D9FmL1GWzbNB9jy4VLVHqQqh6o4drpAoaPpVLawJgMuZrt8mS",
  "key30": "BcAAJAEvsSGxAB8AxD6Nxi2RuG15f25M4HVUmcXazcKtUoqt6f1ZsgYxrR62FCBRmtWmcLwFKiuU5LrUBvVWmW6",
  "key31": "2Rvwg4e8c6HPzgPkFPB3yVr9cGSoTgwxjUayAHBFJaRbmTtmuEw6QDC6i1GuPwtMxSBkntLnmUDkAzpqX1nPUeMK",
  "key32": "5PqKYzuVQCaHoqZPAjny5CtDBMmEnoWmofNzQKPERmibRVmLZXLkBR1kPHbqLc8AEYLv4S7qnm65nDxuwFSK5yow",
  "key33": "4uqnsSNZvWbsori6PdBEgWY3xHBuf7bpbT7vqV2g7bDfwRqVfabtKteMjmccKtUx8pFDqVMoCbfx6Baaa6MmRuTc",
  "key34": "4ERL7hvYEY7E5Qy1e4rXFJK8TGpVjnEJLD1h5LpV76DewKYqa2yL937njJMbp1t9VsKKokvA8rLshf9U7QswUYiV",
  "key35": "45v2HGLfde4yhuCgbBp5xjRis4MX84buxn2oSaueyhzY8XpJstMGdDtsv1r9RevQ3HLqiquxLiXS6AAYP7LHU5Yf",
  "key36": "2fMpRyTE95SZsEEqT9sZA9dpz2htnvSHHN6dCPzmC6pGezCcRiU6RcevYX5mu2nVXdL9tmKp6so4AXyzjb7z6Czb",
  "key37": "4stJ29APus8aJ2GTfU3Pk7aYEMbGDzSKGchoyA5cfmhMwperbAASYPwbUJ6oEvZSR65DFLn4imgX6TKNzHQqAjtB",
  "key38": "uCeMvUrFddxmBkwACtr3kRrHwGYx67NqBukmbrBLQGLRa3LrtS53eCm4UiNakbWevuhSjM2nwTqqgeYKjQ4sFmn",
  "key39": "HMe77oL3H5JSYriQZDJoPJwu11w5aXMNquW2Dd792QSZy2c86c1ziaRivCRDAEyjfXiQFdfyzTgRLzJxNEHegDW"
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
