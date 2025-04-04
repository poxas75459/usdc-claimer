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
    "3cPQHznwJnAsA7XBgQv3HRCFtqPrbnSZAZ3EZiZZ1V5na16HY77GPGQVwdsCbpFQUbmjeLMYY1LuurUwMLfYdHGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27nqX3EBcrrvXtqbM36PYUDKjUpLEojnCLqW2uAyb5DNRj1DiqYxbHVqcG1YTR6vqE5LK7NvY8rkQS68ZQ1d6Lw4",
  "key1": "5zvdTsChn69Wey6RVngXACFXsi8TZviwfJo8Nq29UjMRRDJKaXUDresfxAX3kvx656vDBoKNziGFHkKSnt2AtgNc",
  "key2": "vEKvhuSpPu1azTKxVUbhz2Ysq6GhVTvkRLGTmJJNgxvpgznNVBygHT4oSyK8TcKDb2ta4iV2jswMtmXNZtnj3x4",
  "key3": "2oDwABhszQ6T2sWYQZ74tLPaze18WevQJ3wxerQ1XcT4hUBn3AnC2ccb3uaPQ2y1cSpc1SkqA5S7s4HgjSTL4ssX",
  "key4": "2q1gymkZwNDbmycEBuWkrpfCLVYApNGdCWWQCY6BiPT1kpRTo5YvpPyTAAPS2aQEWfMRuCgP5rjUwp233dEwvBie",
  "key5": "byzSYBTKGMA4L1QE4kWMuWh3YFcoBn6c4vdUroi8dDU3e2NvWQxUDnHsGRvaNXSAGbR9Rvub9kBxJdxwLqh15QF",
  "key6": "4SrWYZsjeYsKQPmTPcmdH1LQ2Z1G6p86fFDFbiXfve53yDFWYGX8KzjzU4AMr5odGsH8ujEDCNVmswuPLH1zEztw",
  "key7": "5jMREtQ72UDDtjV4RV4zh5EgXurDfpa61voR6riYPhTT229K2v4hJkApSDGgpWDbonyDTnhpqPt6pMeRejX5oJbx",
  "key8": "3iZPC8t3h9VPdLSpLKTLCj1X9gK5qdcgSNrkhksT356C7mRt8eGXQ826FQ5DmziB9jqc15ZCPewSGGMbQ6GeLrHW",
  "key9": "4oFH9ffk4DmpEsYBypGF6CZYLrc8gkbv6gFaJAdJkqcWeR3F1MWY2CiVc76CUTXD7sqSHQ7sfKkSVj8o88vZk2kN",
  "key10": "63SgWBrHTsRLjBsz3zcw2WjyC5kT3VfAbJTxeyLg2qoGKK78hYi7pstGw4Pqw6FVqyswg2XYjzLSuSDM5HX21EUK",
  "key11": "3WjsPVG4m1K2EPkFtXtt8KRgN4MVkKsJjragMPpXfrJDFWJ5tL3yhh5J3wj9RzsiVBFtpy8NsyH34a38NE3aqd9n",
  "key12": "2s2Ef6Due9vBnyN9Qm1xYSbk8ARzjSDQbY5Gr3PM5vTQgfnNqX3X4xZE8Bz2ee9z9jovpdfV7XrzzD6yQqh1dnCH",
  "key13": "DhiveGoqjbgFgTGLFthMcWqZQRgwKCc4MoHZmPxSBw1QFscPaAEZLEbn9q2Hp4EfGetAWdxYd7ic6tcnSgnqfhN",
  "key14": "2pfnjCgwbpNY5BH8vgEHgGKws8s83UAwu8YZeSHLCriNcFeydr6F47C3qRfFbEkawVGHohwSo5BJw8fwUAeCLGSx",
  "key15": "3qV464rDCVFoGzVkSXm2mP2PTVQMb3hNQZVkFrRt5NYCRfZJktjsTNe9h3jf6vSrxuzqjfZLT95U9zXjYLRUEUi3",
  "key16": "5ZUtEnJQjNN9Xub4AfjR566kc5qApYxGqcrtnGHWmTL3vAvzL68ELcGt5fpQ3aEXMrCpjsuT6MWMojCYW7JFhyEu",
  "key17": "2JuPP9DjCSRxUrDFGyjZtJTmq4sPSNn3fYyJAvbrhrVpAM8mrQy1FSA5aJauxTBwbWTgeu1JV7iVetqUzbyvhKqY",
  "key18": "ZThS3gkXfuT6cog6FC53m2Tp4ULU6Kn9qd71FAowpH59wueSfxwA8hmYJuSVPVkmLKQrNPDe1EVof9wrHEeojxf",
  "key19": "sBTrCd6tkkzMHkeD6wMACnLqjjD3gjhNe4vDhEEQFirt8cJpjAsr4FfzmcJx4UGZBtfxV5p37ifdRgMRHgRvqTR",
  "key20": "67penTKQBrDzwpHVcw6AmppAWRzgfcKdoRXkMaTHhZ5NvDM5nv33kmb9JZqbrLBvW7H6XWxTEdhtTRHqexwViyTQ",
  "key21": "2q6zd75opQVohcLagQgRehvdr5uPBywncv5aFopD36QvUw4XYXf4dcmkJwyWPx7gyA1TdM6JrcNrdzfKkgMV1w5d",
  "key22": "3StjqmYdy579VsPEp58kpydEBW2YbUgDQ2N1HAwdARsP4mZhzpRWKGEFoWCaucEEYNsXqRj3WsN5TaJ1YPKPX18w",
  "key23": "37cK3SbBFBbrVswrwtikMEzC2n4wQbiTkmqboEoR8WqE3MxN1bgMAqYPtZRiZECYYX48NKT74JYAtgBMXz7o8afL",
  "key24": "9cbeUwaEdvRJqgdDvsjLpTTQMPwdhnMywCEvBwJisSAjfQHCwFcBpYyS2oQQwYPQ6mz5q1QhLXLUWHzgRQUUdS4",
  "key25": "3raE798fGQwUjo3cBeNa5BeD8HSsJZFbpwTxAwy8mAkHVJyNsq6pkRyNpJgV3px5pBJ2ieMXoemuknmfMtGDd2mt",
  "key26": "4Z91P7yQY8huHsbGBvDNYSajsMiNxpCQhBHyKTAXTSLFQ6SNZp36jbEzWQXXyATrjv1dEsZE4evtcMg3HYMaoa2W",
  "key27": "482CaG2PtojppfD8j4ju3ZJm5mRxowzDqm8WaZKjpoLdgUAAFyXBV8pRKGXNE4msK5rY9GhRspJnjmexdeDs27ob",
  "key28": "5uNQkPfsxruuKbFkpnHZXtMUabbT9G25qh4RXL6CMDYh4jA6R1D7qk6T8dXttn77BgVcDoCTrf5SEAMGr1xffG4b",
  "key29": "4cfKoYwhiaqTVAiVPDfZe1S29GRwhBnrQQW93PtA8wjWqC1nay8XAeeMAqpXoz67igb9dXRo5ovvWcJHxq7eG96Q",
  "key30": "3Xsmt16bWA3AYruUi1xfgzH31nxpo3Y3vYEJE5WPbWoRry4pMy11Vgtm8kidW8r77mwpD7MaPzQatmuzRnTKxaej",
  "key31": "2g5vVtY4Lf8fjBGG33JTQUg399f61FP1F9t58aPJZW4YUrYPyX5rmkdBzzbMbmEnZG52eAaYxYbFfmWCa8YqWshZ",
  "key32": "3DXfGtaaco21Fem5qUs8iA65N7modqK8qm8ADNtk7uEAs1RnDDaDaUCiyYni2x5FcTfkGoCUBmGDhc1hqc1ZgmCU",
  "key33": "2A4UjavnHG1sK36qxjENDbkci12yM5vV4bDPvPWkcCHoXuz8wbmMYRhz3qnF25Wg5tZejwHyuz3CoUq7Pwz2zdVR",
  "key34": "41Vcb3irm5a8tpfHtndgpeZtbSLcRzkhkQcEdord6nmD3Ke3cpY1FrLFfswHpP4nenV7sD3DU6npuBZmZavaM5FR",
  "key35": "3UQXQd3uwrMCuFVx4UdKWBHmdAJc6oy8CXjg2UhV2SkiPPg86bEYJHmDff7wdXW54W7QCPuJeGBjA2u8xXUAisM3",
  "key36": "4CVkV78XPnCumdv4tRgJncmVCZd9RYot2bgXHC4dGJH57PWqZrAT4eCn8LfRfzSDGnQ4mJj6AjgXwKNY4hA1abG4",
  "key37": "4ZoirJWXzFCdn6Hxo9NxyAPzbPCa3ZSnSqcJffh3zBVazsxT9wis8G8FAQ3ht2qWQuNskLspWBbkJxkyDWxVtjuN",
  "key38": "2ZMp7viwkj8We1wooyXSwMArSnaScT62SvSEb1M2dQtHDKPG1G9THkGECPuTCBvz3NSJZYhV9omGfkKFvwBeuFag",
  "key39": "4mJnZaD8e8it3JhLM3QFJ7CnafHopJfj3avdUHYGyaUG5dwZeJyZgV22triPfBxP8AgHCk6Q2kxDKddpu8rpmKSw",
  "key40": "3fNBAesVQ3z4t9NKq6Ah9StxPXoyhKMmWtHrM4rPNKPfwmKRbmt7Njpsqvf4o8JaGDFe2cLB9gXKVEm6F6J3Qbhk",
  "key41": "XAfbKjKJMbrg8eEhgfiEYc2Ky5Qxg2XEsY2GrJbX56gdrSsCZ5KWZdjo4GnDmiNJbhgTWzRQgTy4Mqj1v5Am4z7",
  "key42": "vG2mxLy4M2h9ooWmLBN4H3hZqaHYcudQbX9jVozFZmyTUccdQZwVsuLNyRjYveCFqKxKBkFMa1Ja4hXXCcprRFm"
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
