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
    "5CQBAqbP3SeC1QLeeASqT2ozxdVCDBawWvw9yEjhFjgxCvYtjkT3rmvxfchXbg61ub9cvHMXHK2Bh6XXCMDnNWpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QzbsXyUzV7RJMqYQ8Dov46zHrvH5uv7ycHR8QTYHCBHRM125A7fdtvUMv6MsPrQdfHTv8Tdb47MWy49ynTR92mP",
  "key1": "bmuAMCXwkA9DSgWYZpU7MC4RMRjgoVFwD6KsFAJQvhGRBsTsTY1uoSyffVcP9BrZjrgXymAX8oUPgpaYKfGMDR8",
  "key2": "64heKPdy739RaVbtTSUQneShZNGBn3kxg9K9SnnrzdpBRmWqUwxH6G3pnFKm8EsweVvGaZuYyi7JbzD1wgJvDGpW",
  "key3": "3KkqQKsvimbk87w3RDg3a3mpcPCmygX9SQ3h4WRoB1pXwmZZmTGQ3u4pDTcxdeWDmPwTzz4FCaEZDxjAzzHUqyoT",
  "key4": "65K4qRrKM3hdmx1LdMcxgPfhLawmwFduaFvXC3eZiMVbfWqJ2rcpFfm5A64ccvgHDmLaVTP4UdzKPauaP9hHzB1N",
  "key5": "224s4GcbysCENiwPr7v9VLFKmxZyiSfqHHHb4MaKxv1sLfZ5AwX3MXH1AiXDjMPPfHT7CdopBouV3EfTQTgpexkB",
  "key6": "2rU41VQqoMNiwzjxr3TrbKzHpiuQd13pPgrRSuycdLzumA7KT1z6wJY4AX4S6KAQvYWzUvwnYfGA2CdZ3ijTambZ",
  "key7": "3JAwndNGWHhZn4meCrXMtNfhuGPWpL1bWjHWHTGKbynSLbEUoGK9LGAxngA5EKhNJhTApvq35PpT22RAj43RFesF",
  "key8": "oYS5ZxSifg5JsVEiYYtKpWGQXdcG36x34QuGzv3aU7K14BdS455BrnbhgQjmnijAC6Nr8kjJhT1e6omSzKfBw3K",
  "key9": "1AzA7baExaMdaTKRwP9seANgtuFPfNsRGXJgqJctELDttZrMLru1qoRxYTPAuxarw1USb7NaHDYroQkjX4VVNEh",
  "key10": "4wuMAiv4xuG73iEonfLoKxKbHCXN192o3YUMPyFXKuNHJgw3inx6i1FuEZLM4JnvFAexRDp5EnbdP81UxkqxtTFK",
  "key11": "3ovFzmP78DJRQ9LP3abKzMySWf5KTX2JGy5E6RQgXPLhjNNaTAE9yoxXFBBctXvTjnZBeMQBY3r18rwhE99w4H4q",
  "key12": "24sgrvXhjfJsyqqa5Mj5s96eWoxPa1NX7c4DsBxaNAzPHQTSqkhMmz97XceWreXrN1tdsmc8LjinUPg88zo34iMb",
  "key13": "KyKjqknHTzkz3EGScxyQ7Thui8sCKpoZUkr6T4KBUh8mN27so4CRPardJfCP9AGCYX6shAv1BgrXxFFsRGvfUgH",
  "key14": "5XpPLshFwYE9VURq8vXQ2XfRRMe7HrgAWwjssJ4KYD9j7CdpBKNvKF6ZtZicj1NGDF5XaBrYNQo2ajtxKSnvor9C",
  "key15": "53mjwewozpoBx81aeMSvboesTwe6NHxvNRyNscpbXScsSRvNmA2LU7ifbyK9WCXADroNtop241xM3vVPiSE1ZCiR",
  "key16": "5jnMS4VPSosobwNEv96kGgxMDwRnzuvz2A7jmKtTUB5X2MkGfo8dEnXmVGbhkJ29xWUEofoQEe6XnWnbWDLFwpEe",
  "key17": "5RwE75sJu3oV7wz2a3qCgSJkwTC2CjG4N79gPr1pnTztCLJSq5KDpZ5rjgPgDLYuKHAxnYdxJDnKzUaCmCFmU7Ez",
  "key18": "27CYYKDvjNkV8BUt5ah1MWaH19kiFfUmLvvXX4h6jVuhZajdPtDDctstM6hSqefh4p2GnFtRHUKJeDCASibCV3UX",
  "key19": "4b46izixTA7w3L5cpM98hNmY8a279DQmvwfNvWJA1JDRaTLCnYp6zrQ5wgAHKsCi5o2AMPLm6mvK8aCryxPoZB6r",
  "key20": "4B3fgYwYSRXGFbYdATNBzhFgpLiVf6q8MzL1bjY7o6qY3gh69GCKuSbhBL6LGhJxqFox7Ds9wi4jwnTgSsuTN7Df",
  "key21": "4pJxRjcRYc1gMuc65dgH5VmauT3mU3FPzN2gQHqJ9VyqTA9ozjhk2LVHM1MkrU1gSW4LHdh9hfyNqNXEUMTnGJGx",
  "key22": "4kRRTVRwa5c8V94GsLSLeAhMA2X51EAzCgkTtPfSxeY5YaUNdnrNkdbHTxBb1efeRRsoRQLrTVCXUnKUCDTuhcJ3",
  "key23": "5pwah7Zk2pYT85CisLaEYPYRXsnroiLe4UmcPof2JkhsWufC1UPbETHgdDhxvZEEHhBUiDGN397ZyeCUBm16Y8N5",
  "key24": "24wE3kApatnkeoy4VAfvkSCUZWxkq9LQBZDZrcqNshmZfZjsNpS7xK9Gki5r7x7hyiLyC3AbVaDJaeXuwa9XgEPz",
  "key25": "6MEvHZxMqkVfGBCHFrzJFQRBiDnMSVjdWsCmBz9vhnTXnAuxNczosivPhVwojLG6ukfqEPZy4xVX98yzsdWgTHd",
  "key26": "43DPEGp6Q41Vfwz1uGtZpVBh5cT6muA1fx3gniBLgSPV3nat5KFy3CKa3PHiagHN4ni6vqn7S9ENADboPYQKZwtx",
  "key27": "25vd6gyBeyyvUPLLFE8WAc5GsniV1T1yccShycwCdJq5uMqkaYvejEt5dYMCSXc1PzsgnwxX9yN7Qw4bE3R5QrGz",
  "key28": "2T54ypJZh3W9n897SKk7XMYMJbQmoUhMDU2jBAKyj1PVX3LdyZjj9gK3fBnFD8JA7e7tEGgtUtUacmuwM6BKjNX2",
  "key29": "23mBDc4ZjVhBxKC9s5yRZdkpwSW2DGcQoqk7pxx65BQrerYsYFz9h56mzDKyBJU2ViKjP95AcZdBwNAGfEYsWsgg",
  "key30": "57R1Penx3dcyCv2xzMCMhBHFdr9FTTbnDxp5opiQ1pQo8eHR3Ei8yup4RKNYvYPxYexgUax3q846C1VDFZRmEK4z",
  "key31": "5UQXyZchGroHLC7CBQ1MmqarNYxibZudAE7bENZBwBE4uhHnUmFhMaZFXYuvbvAJPYuwk45RiU9MSw6BPk2kw4z5",
  "key32": "23UkjH5c9fQ9yoZtyuWVMkAYabAqH336d6n3j1XQLDFBu1Crmuux2S4MWcjHftj5zkHRhxaSChPspRHqXby5rRno",
  "key33": "64jKX7pnJpo1HVRbrf31M7kUP4xRzDjwQ3bN41nKtmwTzqedAR1SggPWrZU6G2az2wFHJuLr2U4AAeM8Ajnp1map",
  "key34": "Yyf3VRAQtdyR1LxFyEteCbPNXwxKxdR2UAkb44ibSkEPhC7WJhiNQEaSwZZJjqi5egU86Jk4Qp6qGuFX7NN1y3M",
  "key35": "53kYgbkzP2LYnrhsRraCoKJYwdemwMa7TTMSVG6EHY4VBhzeKCAusX7tV3hzyzi7M4sH17Dcw9aN316bfG14VgZC",
  "key36": "3nkHbEMTbeuMMaiycSAZQehEr98K6yXb9amjrDUbbLp7QaL4mzaSNHDko7LgKp4bdFat5utE7fdku3VBEKrTrciH",
  "key37": "FFEaHCiHJUnbVG21kiVDVrWDVkAzGvH4v6unGV2G1cMneHuQaGDxscCjo5BziE7rLQqTtLsReFF31NgAdjs3QwU",
  "key38": "2SBigDhaWNYwFVSYKVqVXCo2x57RvA4AyDXgstwUrV2EJAy6STk35mTPMbFdUbURA62GjxptF1Rt8KMrmr6YcF3f",
  "key39": "2ZDmgeGETkLi45dsCjehVmWxdoVCjavo3RVsjxGVkzNViL3wBRrfv4n5zTS5ndcGYdUBBS4sQkpH4cPQ7xrtTbvH",
  "key40": "4uT6Zroi5eDd5SiUzdyNEpAjL4zLNdyfG7M3T9iDcQFxVD4QSxbZ3nVZrZsrqDBjzYk1wE549QRBGtgJVxe4RvJt",
  "key41": "489n7jEX4yVFMM8Xg2ZCDQM1z1uRfDb8R9Vhu6z7WoAqBcxmCdvEEcWYqbYy4QtjiFNea7hBNYqgTzrys4svLAXu",
  "key42": "gk5kPVTxfps9XY6Grs3i8jKcAo8biSe81ED9Qco1CGJLCqZwK6FKLVkZTgHW9sD9fTHxHcjqWnEQxujy4f5vsg4",
  "key43": "5HA3mJQ2ZrbmMZ53G7Bwficj9Mi9Ar5RwQ8ZVCmSHcG53XngFyLLb7Zx1X5oZ4BbDQvs7dqMiiUB7YmN25wNmnCA",
  "key44": "4mnkMPrSaGBXPGeELFmCKmVt3PEcnTuzMUpA5fDaP6iUVW6qvQnuUb3pL3dbPSrFkiQoAH3G7HLYRW69t2YoB1FR",
  "key45": "3eGsFNfGmz4LVp8ayC4VTFBCxjmMkRNdPBXSosHVHhU91eAVQeumwMHzVntv3JYEPoMbAoiVgka1LjHfiCkHw1nt",
  "key46": "DQ4LnY5WLWffAK1i36AEgsYZt9239ntbTcHKVT5YcC2FSj8Uj7TPs5xTxueATroFatTvpARiqqrjouabYH2KXrc",
  "key47": "5qkpcXkYAM4GwnFNXMJzpD2Y2vUbZqz84XoNjV13cESgk8onVEQoHCn6x5jLTe5GmG6r7yRgMwxH9xio1V442ybK",
  "key48": "3eaGDrz7iauwuR8gbwk9RbdzBFPJSTej1e4Sc6g6pCfAs2Rib7QBMirR8vT3zH6LBBDkiyXyuNigo2xPguDZc6LH"
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
