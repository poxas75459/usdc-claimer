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
    "4pUTC6XRcmF5oXxWynvAFe2BFU8knhHNWFesom36PZ6h8tHjmG7pnYjnpHDJBuLPboam9v3BDCDuNXAjioQC5QxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kpBmQUkDuYZ5ZL5uZ8ZcoGQDrwYLemRyCU9wtgyubUKcf6uE6ZUvnunRAZecqeau89yzLcnDj687QH12oMSsrVw",
  "key1": "BrpxicFnH3SZjyZeUomZ72nZrFayeQjJ1VP9C8Sa7C65E9pLguBSP5aS6HoEswy4y3KRRzCSpE7YvA2fn8VYFbr",
  "key2": "Go2tFPsNdymA1eRTARvdsEvdbBDZDsdPG4eeRaDWgAtGUMhpEbZbzFodzAtqr6Z8AMSHro3DAtopsdN2nJwKZMx",
  "key3": "ruDt9dz9uRT9cukStzowGjQaCb7zfTy8UJpJJJefFkqjKmQUc2PWYmnAGoqk2HBmfx8f4oD12N8YReQ4ksFLyZ5",
  "key4": "5QekJjz6CL5UcBDGkeGC54ZTXgBZbTURMiLckKdJyZaND6PozkC8QegDnPKfhvAcngYdE8ytzP1azn1BGyL2Hogm",
  "key5": "3f3gGwgNGkmAahaqaGc6iepDp8rx94YUCVQRHo6dTiQ9mc6UHtdHQj51Vv16qpTMDPqB7zL9YWGWef4g5jaketgQ",
  "key6": "4L3X3DVDozGrYX6HVfvVJc23hYMM6TydU9xwXUcxLe29BY6Ttr8x5gTKN9VxJNjeK98DpqqDNvQLT1h9T1zfYNh2",
  "key7": "556wZYe1i8g8vSe1E2Yp93o76MB3wntyzAdJ2o6vrVZ1vBevCqyCjLeDrYPih1fsTE5Xep3HSByTZNhLpBMpfb51",
  "key8": "3XASGm2iEeVuYA2m29x9cWQKDdPNdk9VnT1gcJqWUDs7cv12RZ4Q1D1ZKgeDy3t68vee2xnpHtuQ8MbvYQmgfEdH",
  "key9": "SYukFHBzpuUSDdzDwcxCoQXRQrkuYP78xVdnSgtfyuguw3eFeAZQfkn4hfUNUayg4sXsy64Vy13DAtdmwUjy9jG",
  "key10": "3adDxaqPNmqCdtsvUSyeDZLvstZFPtwmQpRqpPaN95XFXPyLjyUT9siGBZnZbKKgywChr2MNkXcPquSN6ytUHbzV",
  "key11": "36CxPPNQkYtNyKfF76g2k9TKkF7v7X8mvZYyFWDXF3jAzLyqQbcxPBKvNJQAzjoqtGaqTW8Vh3WAwh9Fm3Zb4c71",
  "key12": "3xLsdN4z1ZNjAeqzGhShaEvHmnJXHFcEAw8joBXvqiZmJm5C3ooEau3BEP61xBY7u4vDLjgJNKsHr6cVgGb7QCt3",
  "key13": "611gQRbjVWESXpSKgXoYR7H7ZppLEvoQrZK2cyXfiNn5qQhXNAZ7vQyD3yatSybLCD1GqcVqgmr7QmY6SsaejSXY",
  "key14": "52AHdYmuhfVca32MEh3EonQF76f9jdhRi1yXcAZZ18wTDYCmGhSh5gK1gBfXPV5CgjqE1PnUxKtFEsh1V6dG4ht8",
  "key15": "2wSwxTnQsebs7QL4NfcHXNkrE7QVzsp1DdD1ULSVf1Uyc5AD54Qe3qmMM4nCTGT6YnQretQqmp73UT87JrSaNoB4",
  "key16": "4cWgG2pJJn5g1M5oCnbMoMSsHPhJTffvoHX83f3t3zLYsLzJ4dgDFLgVvv8dCwFFFALC5geqR2TYj3ukCAkoEU2i",
  "key17": "4sCcN6a61HmsyX4gm8vX776L8pddQVge5vQDCL3ffwrF2CP5ZHpruG66757ZYq66ushhzdvUkvMt8C1NHgxVkCoa",
  "key18": "DZ5fhj6F4WjKmBEm1HUe57VAW1mWJGn2jH63zoYWTqQXLJrAKfPyZazKgZJhTqEHUA7SMXJiQzTeBYSVqsi6QMR",
  "key19": "w3ujMtzs3LZHGdYBnp8oUh8HpVaNjFWKEZgpsv9tb2GsT6BxZVEwaWG3FRBxTae4wZeAmaB1P9pkuMEqTvf7zTs",
  "key20": "Tq8WyKknnG2ZVEFUKVEo8aWuzMaU8oMf1y3ZD1avNQntNFLFpcMne4RRXpyT6oAM8aTCJYFrcr8CtKB49y7eSvU",
  "key21": "4yWhsYNcd2s7JLYEyAaitaPGPGSPbcYShV3D88RnbZ7q6LK4GPLatkc4YW7Lx3ftdkNr8aiRrfsd41xSLcrYeorE",
  "key22": "3odjfnHc5r9W9GmwLhtrVWtf7wWXMzZpt3jAKtMwU7aQ2rVnDywuuebxDR6NUghuAr3vKbBvhA1d6QxoMCxK8Eah",
  "key23": "LvrCXkT2Ugm4Kd616K4pyCH8UZwLqav3DkJAN5UTnGprBQm8CjWLnREqpGRhV4LJyy16Gy11USAVNZRyySUw8WW",
  "key24": "3vm5B75zKDSBQRewBuoh9avWf9ftYDUBd24aComFUCSHykmpXKUCVHu5aFgyCVjUWgtGhXa8yNj88ieWivB5zkKt",
  "key25": "4kFbpNmreP2AcfzQTYi1sSTYkqy3abearJ1RdVQWrAstFoF3CEs3xjoBs8T9apnL2d1s8tfdMge16RU8dauzgj4g",
  "key26": "64twaXhsDUMGauW9YQHyB1Z3892A63FLWzyEuwRdP7A4bUUnXDGdG56ocnK9veAH6ZrGqtr3Qjq5zkfP58yV8dQG",
  "key27": "2AEWbZEqis38v8pTPa8gy3AwP63MwEg693rD6gpMkQPZQ56ZydQkCaCRjYmRwEYucwkLFiLdx4oAJbhoogfQsGY2",
  "key28": "2MWmJtAhu5A2KGPbK9AA447gHs7YdhdpMNwzykvStJWscYv6uuzUKDmzkhpjRL4zAzUHTznFsMiC6SiPYRBCQwtk",
  "key29": "3QpXmdiJc8yEfKCsTaNnVbGrr3G4bs1A7WqgXAHGTbLs1ET8bvskoQnULG9XtvgYBcrydHA5N5Kni3Hzs4G3PbYx",
  "key30": "Pg8zCNZvKFk84gRDHVLYNm2HmVu6dN53zZ2KQtWJdyaHQjNLTLntPGYBk7Rvbc9js6sSEtXpAdAwfqrTuUW52tw",
  "key31": "gQ5WrtCK12u98tbDVmh9PWF43rNyJHuubMXc64QLD6TX27wVdtGZsvs6ERttNb9SoS7aJw4qKMo8Q553JQ7HRDb",
  "key32": "T76Qkz6icVfC5n87TXhm6zui54TUp5CLrA4xHgK8V2wJLc5nMisKxLG2LeJ2M649bYHFYVKvVcXPsGPowCzBZqS",
  "key33": "5chp3QLas6jdP82varvH9gwS6yP67Htp9JotVhCjLz8V8BSJWgZqFRB19wUGMxduxQNLHSBibWQB83KPBDUscSXk",
  "key34": "ZmbiBJ1PLzkK5PSVoDuNKEXX4ujGnRkQazzsMwtdWiiEGRd2K2TvQZYCrV9Av1EqBsGvtL86dSmTpW5krA6B88k",
  "key35": "2R6RQLDVKvTpMsRX22TTaCS7bkhp374fMaV7dEmGhq2iky6V5M9EVrpTbnhynjzSubMazKXYFungi5yF88UbcskP",
  "key36": "34rm2xQD47Sp93RskP9yKeH87Yd32NyF9jsS2gGnAfKhtgScJ9Ve6aWxcFWnwVsVoxZWvnMt5z8tVvnR3a4idM1P",
  "key37": "WEAy54FHCShTWccpwTw6qKDZUXx9voHfUzPRjuDtWJNPCjpncKeswLnprnkQRujfboXkmcFFaqD7r6krMzUKCsQ",
  "key38": "29fevm3tYmqMZgE69jpA9hYMRoiGxGXhMHeLJE8QNzUMwnbNLJp1bXouwxoRaZmtQY6oTMjSgV4VkjbDN5diq2kM",
  "key39": "3LbKoYK5ffgLWmFHdokSYiUNCDiP1GgU13iueFEdVaJkzgoUNancdaGKZM1Q8NHVRfNMi15tkC1CyuDEcZNQzm2c",
  "key40": "63qi9zoQ3Gx27NdhuaZJEQoc5Le3hcYZHvzw6kdVpg5n4KPfB5ENiA6Zh4kW1Na4qTMjr6Cutt9Zp8XLw1xCrm2K",
  "key41": "KJDDkExAmYCSvDPU1Pf4JMsAaSrNHhnkwrvSKjMpYDLauZfMsnRjYWRh98Vz1NyWNU2iT9SaKUD4m75YoAUCAUp",
  "key42": "5vrwdVwzHABEfUY4UH4TNJNYdEFf4t5eFQWZkGFYRuMj8ihaM2yWfLtZRoibK3ZgkR4kADwa7pUNjGoNqgzv3HH3",
  "key43": "2kosbpuUdfRq3H5mQURozgtK1DHkgcur2kzEVBmrCnj2tsyov426UnFzEsWrpC6uNX6TMqaD24ePdPnHPp1eFsZB",
  "key44": "4Z1NcMsF33fcs87nycaSwSrjGVDzUuk7FceAJAa9Es5gRfH8J3UEB2eG2ToXcmcXBew2NwxzeZXDxMJcan8JQHMy",
  "key45": "2ST9HUKKzYJcRv5vMtsinW5C1dyqDVxViczUuB5xPEXYoQT7NgPNyVJrrtvQUAdqd4qAKabFJjW1NvtQB5QUJLFu",
  "key46": "DxkNGwNNzqUCBe9QbKXpbE8poR4K76fQLPAj37HbHJhZrWVjpdkvFf1h5x35vySfcTYMVTfFF1ahgnX7hMiaJyi",
  "key47": "5K9Xve82teY3fCsP5PP9XPUUB8JpdSZLJ54KoNwwJSsWiKw2zrVxmu25ho1rVpJF8DE3a62BuMh7kvNjinh1yk41"
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
