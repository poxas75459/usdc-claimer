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
    "5ixDjfdoVJBa3TNQEuv1MzBLXPTni7Ank9Thk4SGJJVJ1JpSLztWcnQa2Lhre5Bq8mE3pY6KLbipy2XBqR4gm2H9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ByGxQAEq8q5j1ZPRBS7ZhL3GP2rXx8MS5WrJK5izooxHZavR7mK9Q9WYbrkwQAbEGw6zqh4NFXGjSH7qH3tAnGA",
  "key1": "HPt3KZeHktMREvBEfQMsppHuUg44YVi5rLciJxiSFGhVJ6EhEHbRqivLsBkrfJ19JncZHSCzwXuvQVRMJgU2BTF",
  "key2": "2K79uALitrh7VBSi8bPKHx1pWzT3BcEpXFAqy5A86hSDPw5y3rv7JN1CyvYT7S7sehgCrQXvEjLLtCsn3dCtukqj",
  "key3": "3xPzu2m5oU2aLjPkrh8yUHrJdwYcvmPqUrr3U6JjtNFATMou7o6aNJUBYMFEfrTRHp54fHGjLjaumz5MPVYwBsTT",
  "key4": "qX4Qat91Lom6cdxKRtbyLtHGzXSFXFm12mxpQwkZyvKvLuhSXZmrZiGbmD5xUErQdGcMqEJeSo43MfKniQtgHyF",
  "key5": "4MXUJeXqTrEMJmpSPbwU1KgJS8C4hPSwLUSvHGghdcYwFoYwUeSKenf9JjUBcSE5gDgASudvCunonQtahoKCT2s2",
  "key6": "4fdtChC2vciL52ULSyZGEcmmT2M4nbpt2qhbHChCUHRALJM1PDihxWzoDKNfwo1NMCmjgQcVFrKx2iq6xStUD1fQ",
  "key7": "5hk66AnJqBrrx5usR3QvhnxN4DrQenbRhsKegGNGXPUTQhJEAMkW5XPbefDbS8ErR32Z4EQ5E3DmRP1LFHsD2rN3",
  "key8": "4eL9nNQTypkEPvzNG6EaRnWKBx2Zqf33pLTJXYzKLzh74UbEYXtns5nAYPhjz6WY3SvC7XfSAL4a941k8T6LsP9N",
  "key9": "2yxhuhhGwDWLtibZBNFHtPnu5rf1h1gtcq3D6Uum6NEApsqF3rR341iPVohQnWXEHcKVVHe5UUkwhRPfZyAmvTEH",
  "key10": "5rPkrptBQ1qTmKb4umRRRZS8p25xadoaoC1oDr9VNxmiosLkaCTWJL4h1nUuG6nACmv7176ifjXZemsUDBPvorV",
  "key11": "66CYsYHY6sm9zpTzo6KbuwEw8XHMVz4mCvYVNt1iLF6dRFhH35gdicnDTR4MUQTVCCqTeBTqvQcpRT86KQDA4V83",
  "key12": "2gSTGmjysoFotToi2ryAbab7yBHRK3XPvaZ2Js7y9PMpvN2nXMEGr52w958kcoW88YTUFQwAw66DCLKX9R13BG6u",
  "key13": "3icV6xk16Kpuyn8a5BCpWgwb5BkPo4aSsymrsvcPCbik9xHhc9mTtbgHB7VXBmmRV3KBNSFqvukgjRtxVgNBDsDu",
  "key14": "3SkQ32TX1ykG1BRTL4XJGTYarVZCLd9hNPHk3WkMkBKCSb5HJWCVhZyk5dmT1k5Fkc53hNFiUNRyQ2XrzqpST3n4",
  "key15": "4yRwzfJDtCHFrhjTeYkLMFsRAvDU2R4ZSy9BvPt2WDWaWWcHaRQN2N9PAyZuovXRGx2mYz3EYy9a9kKamiFu9sgG",
  "key16": "4kVmc9WtmzFRNvmzRHiU3ZVSbaBskHvs3tjC98mb94fnC7divMrWdbvXCZDTyvTWvoa8SRAhNdxcNigbMTaYAJGm",
  "key17": "5vzXdKFxWL81dJMncEPYL3sdv9vb5dKd4NhXeo8cegZBbn67svdE1osCCfou8R4wMYLyshTri3PoDYhqxziSHBdz",
  "key18": "5snnokq93vR66uuAdHTJahNaj6nrxt9TmqZtuhUDNkRBhSbJDmUzWPr1oGJhxjYeaJ3mHLwPLy6P3hkcNroRpMtv",
  "key19": "53yVoTmrxeZycKAeWuseof5FragUVmvZDXeMqMV3CifdkvoVwwEugsFFmSYy4d5Mhw48vrir2iVRyvWu6VWpVwGz",
  "key20": "4bdrXaL1VcSsrUY1QhCpLjUUfFeSFbnXbrFyw6om9kE5S2ogng94em1CboVJaxxiN9N2TtVKE88av13dU1e2eG9Z",
  "key21": "21b5PkEoSHe1Vmz2TNTEi4eZXpgeX1AowZAAhCDpsgmxbAdefMFouXpPBCQFzk7V1X1b2ynqRCWqAvZ6pt5gPLhb",
  "key22": "3byTMf7zKwp4ARrfRqdA4W8aWVVwzYUtUxw3imqpVZgXsu2M5UELoTv3rCzVc7pTPwtX8EB7zAkPHxY6Xhb9u1Wc",
  "key23": "5D4DKqkwZj8oeVcvEJKLvCW6wC8W8Zzuww5WJnBAxDZTofDgwoJpvB27TaERcveKRFqCqpK4ZFGwTdPpqfX8zW9N",
  "key24": "5VWzsHUUAeyvv5wU539ZV9SNFU5wJihHyqKWgZYYKeR667rsxepsjjt3SUNmRCnuUrhjxAuGddGPLWsbaNceKf26",
  "key25": "38zvsqAi7cvWKks92H5SFmoP836cDNekRPnss2pT1erETsELSLRMdZcytWa7YDT6kHhToBtUYzfSyGiF1NoCMH1Q",
  "key26": "5CCRELKRLXzUWSXxmciL7uCpgmPGQF6VUuJAStoLvW6dgmmcyRMwmBxHcWqsR1kxAASaEVb1nZJaXTVwTmER7Cxc",
  "key27": "5Ww7XCiFViCMnXMmuC43nhxYyGDTFHv2yidLzJata3Tu6gPw9yUBnXb3pgEjtKBRjDuYxwHG4i89d3ijYpFqsFP1",
  "key28": "QtH3grKx9VZdBuekUnzsrYnoDYqb5FGNoKtGnK3jpnbEGcX2ARJfiop2DffdpUSv1MxhQUjwsRT2KJBe3Hxs8Ss",
  "key29": "3KL5pdW3yHjF36Rg1u7GFnmz7LiCqQY3tMkwURctfYagYNyCJm6YfKUnyboAR3pK5teouruNyheRV3pULrRcdnop",
  "key30": "2UtMG9Ffs6Fd9PRNSHkgfwNp9EWDoqN9LiogsEpk3D6na5mNHGS6URY7ioWTtLZ9qkXbKAM83BL7iZ8ugeYBtzZJ",
  "key31": "3aT7FNYAXoRSXNqt2xVVsUsiyqSxZhPLWTa31Z4kWE9mfb5AukgKTwCG47Vu33Q6eP1ckCoTGVbfdJxNNLuihgUP",
  "key32": "5MjPAYACwWgdtNCCuq86RkbqjeyBiN5kpMw9NGRDtzma9X7UDPusR7BdNC4Fib36U7m6tGyrwWmZnzck6wcA9auK",
  "key33": "3TPWUM3h6m5tvkMmeGPg93RLknN8kdqiiTKeSFXmW5wAKQw9zH6gT5xfqk9mHvwNVBwmWPk1J22krBELy58Hj4v8",
  "key34": "2LMfZ8w9TeGuxvW11dtaurA1PHbJmgaDH3WJtY23B9W1JEAd1RYyzyVJP9Tb88S8nftrSUndDZmgHatnDPPB4cM5",
  "key35": "2DpA48h5JcR1Jy8jz45MAoMBk4nGaSroEL7GqT3LKBLgQc569d9UEbpV3vthF2eSsZDkLK6EawrDvFbxos7QTjhH",
  "key36": "5Sv8WVerdAx85myxJF7oVbZ7Qt3D25u2XHD3RNvcUn6vPbU5xJ8kZuYQdSqZfZf4prnFmif2rvQUvCHcfQsH6LKB",
  "key37": "4Rvs7jtUy5bzTAdbaEDCAXSrcAmRRYxEBgMZoQjNGTNbangCXpnkC7ga6TRmnrXo85Y6vyTewbtBMfLFoYQZ5WGZ",
  "key38": "3r2X9D3xMtVfs19F5DbrQRXARwtpv9KfEVRNG53swDbMR6qxYaZjNBEcZwAv2DHJtt6BMAqMm9Nt5mHR8A72fMPf",
  "key39": "5u24SYSfxWLYUw1JZNqLwHRJxk1dShF3N953zEZZ57i8ojs6DjcUkngByEBt5wkzjwUGRyCzRYr1rsASyvmDCYSi",
  "key40": "2fttL3S755JWN84AeUmBPd6CUHHXW2xkiDPog1AnJ7FcYzSomT9mrFXb3P4oNXcRhvXminLZZ9DHkXXhH7ZkuT21",
  "key41": "36Pv68bejTdeXc3GuTc1tWsEszV2XUxcc816CPReR41whB2zY7ByTVw8ThKw2jaUY6BYuW41CP9UNcqXogNw7rsx",
  "key42": "3GQk9oeQkeFQWnwscgvoVAC1ewYuac3o4ihQnbQuva4sq8ZvYikd7cdJbFzc1cuUp4Ehn7mUZUkfzevjkxVVNroe",
  "key43": "2oy1ePgSjmmPA5JmDTsCzBQxg4HF8QGGMqNAZf3XRa6jyRfTduhMCNCXPdkpvoQWVYAYKw5RiDuW3jHbq1QfnQY"
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
