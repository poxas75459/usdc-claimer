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
    "2e7npeGTSFHAYQpxsYbJZUMgWvwGcsQXwwyux6qNZuKFEyyBmLYtq52T6MAG2c9hqy4EoBnERiMXL3AUhyDhnUhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F4Q9vC55b1r99xgUR1c5ohcWQWPKBmMxGSFVSdLvEgz6TXdJQMzaVd4GrForkZ6LdsVmcc6NU6FvPgxkaimvLyY",
  "key1": "2HDJJwzhYcfgVPUcTrTNZYuN2oUKqko2x3oVxBUXKpNkBtFYx7qLjUiLvY7yH9YgD385dhVYrwid3huytk8fGcS8",
  "key2": "39FnvjPs8PEK8N5U9PofYXBcUBCiT8BPvxdiXp4EjkR81GfyFQ9y3bd4j4gKGHGLG1U8n6DsHHXXq1ioxLwGTka6",
  "key3": "ztrY74i7cg8CtCKqHR3Ub5pbyEEnFmxTWLBvbd8V9pjeWyBDhFhPJjnn7Dy3EGpUbJyeZhYCdPAAV8VaZBB45Ac",
  "key4": "2fb2GQK7FSPAvEnciUjvjg5pt4RDTfda2fUbUUjypq3oQ7ZYnCNuZttGt6oXLXoMRVAQoxcoA7kxa3dwWX8HJaWF",
  "key5": "4uKAj1Senz1iWqwws5iGX9s3YAZWMBy6J6BHTs5hbeurZiixi4Tcsw9XNSUqRHSi4CjJA9aa2mNbfwVVrJpQ6ATu",
  "key6": "zeom3w1yquQynakatPQ525TwAdkkq5k1FCjmAJ8t2jd9YDpBpdcPnQY85cksmpxZ5DnQ5wXiwJDPeozo2XrJk97",
  "key7": "5TV9A1GQWhndTng7SJzFszi64HSLcakzm2XtPvWPwDiQP9NyG8n8NiZYy7caENBESnEuaSFEMnbpNiPwbrGkWvuW",
  "key8": "4H63Bh6pdKPMrzbSauYU3HFpRFrfveSCr9jfSXTkC6XuncuuAFK3Y3C4o39Zy8b8RnchkE38Fyr4yr5o4SWFJeET",
  "key9": "62nu4sLoospsrkvw7fqgFNjapTynzE6AxKVmox7mvhYbAWLytRkdrJ8RUWZD3n96NZL1ToERJFHijGb8pbi8ACXE",
  "key10": "3zijsmMkWxZ675ywr9ikgvyEYsiKc4H89drLfG1VH9258c1faojhPoLyz3EUSUaJj5zt5GnY44ukRWaeRP9uVKUP",
  "key11": "FPAdLfumWZBTxsiu6TEv5PH9PgUmf9N854w2r4a78Va4MjHAM3YUvXfeSJLAwXsA1bd1ZNBf81aQCV6dhMq3Uou",
  "key12": "3CfyjbBkxmqKVKabfJbKsQydD7RanenGiBWP1eiv16GjAuhJxueiwCBsD6FS7X9UieFVmypahK3VrP8gKXFbTfM5",
  "key13": "273LTYZiATZoiezjMxs6hiZEvXoocs8vahAhF3S1Mw86xM6XzvBtXCz87SoSULhAJEbDbbKqCi6sy56Qu5bD8Rku",
  "key14": "8jsT1Mm6DCPRc2LvRrkzhgujdpA4K4bFbFYm6ni5SmoH6MUVbdw2ukbgv51md8xwr8pb7dE5SJNJet53BiZUHqo",
  "key15": "3z2AfMHuqvGu1j9FjhNMcJjozvLvuYeTJRew86H2s4aRse93kLVSSFsrhxaWP9An24xGpdpjWd1Fzz72nRuBf6K4",
  "key16": "4KkrFfREi964yYPHHXVbjcG1idSb6cNxRGTu1bWaddKnuVmALzcweX8KGfUMMD7ueZd5bsT56bXpnL6mBVFK4yBS",
  "key17": "2XWZ2SqgJWpadR3iLcmz4Hogi6gSJXZLLsrvy3NRZonTNjBV5zuvQQQ8mrAUmCZZmH47BuiQYicmYfbZgLhwqbiE",
  "key18": "48aDhcLQepkZSJnh61Mzt2Cx9pmfxvRs9xrxrdKm3AFrMNz79SqhFmgTgjqFn68wLkDvhHEkndFSBFxrhExRUhnh",
  "key19": "kkjrkCzQGWqhs5FJkyAtL4WWJK8KfpbcA87Q5DYq2e6zwhVnMLpzRPtZeHHLbXPa81BVY4zm2KM3zDcAb7WdQZs",
  "key20": "2GTYyY4xqM1Gj1GxyoMiwYHe6nNNW64wcFh2kdUSJXcvfFqnynJLbToao5QWDBURdHKjvTPFwbPHMVLUJup5TYKq",
  "key21": "5Cip2nrdWYzDusoe3dMnjZTEa2L6Rc2zY4BCVEdTDLEJSkyJpS1zxjbHzXoW7KxTEiaELcU4iU8nHPLyDmXFaYqX",
  "key22": "4MKVhWWsnivPyzLwGYYEwyyM6PY1t87mw9CS8FATcnZYaWdU13k6LbLPnp6vrzd6HQMeYKEJajpuP3nV8FKER9nT",
  "key23": "fCC7BDG4yZ6NvXaeYeE1XhzfJgbL8emkYJHqKPPaji1a8JbsySSNFZ17uBpvcvnryGhRSEfYhghDVVKrmpPA1ft",
  "key24": "BwHpoE9AHADiAju6qoZrvwY6XsocP1y81VKfoe9rvJ3gZLyArZrRBmby3TvwBnz31JYxSNjMLUzA8vjhR24Vcn4",
  "key25": "478yohJ2HotbwfuYNTNnDHTzCTy7mVgAdDLoZz3fPBeUCjuEkXQLiEXPAT2UkJ11DyDa2PtbiRXv6eo1WecdFj2o",
  "key26": "yEzGyCiWN9UYwptkRapvn41zzRH2NNhqaW3aWZUcwCZhGCxY1KrPWTSxW5EuUbgBr9PDUPpCvxgGeTeMYcC4rcG",
  "key27": "5dBvM1d8PGemfwm8ZGKLCbUJcqPZdAJp3XCqKcotC6knCerooRwFSzd5Wp8QVBGmqDTkibY8vj1ZBsy6HaeFVaD6",
  "key28": "4h2TDXkwmBVkRjXZZsM3s25r82Ajftd71XkCczkuacHP2hXAKvM4Twv8JETSsXjF9QWsta3i619pc9qYm9RMPYLR",
  "key29": "2QrPFawwE1Yi6B6xV5DR1rC9xYdNVkRCvsP5CmTgEdVZZ2RB6uC6dgMuKkK3hwy119w7cDAxrUdWxv81hfRFf47b",
  "key30": "58KJj5ccTFAWg6Hawf5TE9RXUjuRb7BMgPTaEuiv6nskC4LA6swHEwax9T598Lnmw9m55dEsdujcWxJBPAVJSTim",
  "key31": "2BpZbSRtcsZcU1Aw8Miq4RTaT3r6TPjmdgbb5L1SpTRKWBYWf5wKwY3E8VcaJdCziLau9FwusSBG6KcTyAUXmRC2",
  "key32": "VuADp4iLmt7spx7VNLEPKztsHunVmVGhhjMTK1e86A2cDdMyJPyrghBMsoLsCrkR7v6JkAuviWhHcZR9rn1WcmQ",
  "key33": "3kpMCmLZmKhRwfzL5jWt2mDDtwF1n9a9SDkumeXmQDyEWTDv7hrjcCzQoTNQBuewguiB2x8VTMV5d2C8dPveCk4",
  "key34": "3vm6RK3iNWGp4inxvBBiz9PBgeFVWMRvb6n3jf9tmp9cJjqVmeLJUZ9Ded5NTEvTtgWa8nLKmDKSH5YeBKYek4Yd",
  "key35": "yv7VrEEYJMfBmDGafvBTeEqLEKQkDmwNBkXt2FaLLttNkjw3Dgd5K5v2bv9LKSbqy4dzhEaL9i8L3YqvGJjWtFm",
  "key36": "6EJe9irLhXbjTULwFvM4dUUVb5nwGk5SzJpHuGt76V1f6qdMt4FsZKoPme75h1Va5S9H2UAAmbnrHN1XPT9NzA6",
  "key37": "27Ai1oAibEWM2eKcPamragF5VK73PPq8kDcFjK1GsgGtKdqZK2cp3MvuiUdNFnUf3rjsZn6ixCpdbcs78rP2xvjN",
  "key38": "3K9NLDvDxDmbxzFA1R4g6cfeXEKYen2758FVuhAvTKrrrGnKGSUtymdRW8MHhK8eX4D3HMisyUp4Ffd2fV77UWw4",
  "key39": "vAKEuy4AdudHve1iU21dEBBmi6PrxeK6YN9NCFMzKW2skqDc6eXUfsifSLjWYw9CNL4ycp7dzwEpyexuTkf5PpH"
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
