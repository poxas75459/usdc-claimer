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
    "5icZCYCT7hP8AJPQnZSJy5xtKoAZkofRVchYiTd7fpxtZdZ5L7b5R6DWsM5qbpcxgSmKF22kxpGkQ2i3EdjHZ24U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KnNk3cC8CvAAiVQoEqLoh4L2Z8TovxshNj2NbXyacgFgLtTUoHwn55heAMLKv1PEjc3XssUTkoGj3NSNDM543Mj",
  "key1": "2UPy1YqXWhod3uBzbQL4FsdpmJG8iM6gw9nPwcFHEKT4RH5Xh1BYLCRRV3bktq2XCf8TAb36qB1WWPBNV8tJQfMz",
  "key2": "2rVDje8DkzPvFE2E3MCPqzAFh4UhZMdS4nVv8RJoo3sZfDNGW3hcK1BowsMx3t8h6uts1Um8uw14xgcqhNfvtkdr",
  "key3": "4bdESPRQSchdihJCHW4KzEhMEiMRfLXM25pLnSJs1E1bvJzMuEfVJD9a14BVQtYN77M6JwLviwsLy35xUvEycLQ6",
  "key4": "2t1u53SYGBHMj8UMDcc5Xtk1hqW5yFTqW8BH4Fizh4PVbX9GkHSYrUm7twF6ZMBzEqM94XPxYSJcKHSx1coKasGE",
  "key5": "3nvZVSGYGeqmNB3FsGmsb4qkER8VWmda53rxytqMNTTszn8e9ytqr9xvkdjfM61QJj1mHmWjbBbqNLSYzWtWYm5q",
  "key6": "4km2ohXd59hw44ipSMwwyzbnGdgNxDmyoxFMzVyFrU6e6LGpwWo2o4NWkmQUKRgnqmXokYJXA8LqPbFm69zuisAK",
  "key7": "4X6KJSP2k2CKgmFQ5LnVoPcRFjHrnKLA2k7gbnStEiuyKLoeXGrSYcWWsEovDsrMCsbKiQq1UqBaAFPNQKfZpwP4",
  "key8": "39y6YkmCb7NqKRdZW57p1bAYt1BsdNgmoGsgap8jzvGQzN4hvQnTDxxsMJ9Hhtbc5SuRH8967txB6uPKyjQoSunw",
  "key9": "2zTpxvqRgbQdS5v8KyZdBDSe1438khtZHwvLqdPUMnF7L2tgmyjVpknkeqWnmFxpwVKWF6KYpQf6hMkhhpUycPVk",
  "key10": "5z55yB2Qz2GWeW5cQCyxtvn5uyPqRTnxF1kwW9F3wdbF6BpEdcR3a2pZMe37KLQdZNBeav6Qcxw1aPXKgZJs1gwH",
  "key11": "2QgfJABmFUxveGKGM6nFoQ3S16EJSjqhzi8WRWhnJ5dpwGR63eheGoi3kwwdoGGsBthTfoujnXgQ7TqebUAmU5JK",
  "key12": "2ZSS3F6GFw9JkWkJPdTTqBxYSCxf7LhgKh7ABAbg7vfgM6WBz8QhvdbvZ8H1iGi2MaUu69eAswYYSaPQzX3jotRf",
  "key13": "3ubszyY2ZFqAiupqJhmhpDC9Bs5KgvLp3cnd8K4k3rvpp71BtLVQ1oTTGF3mwTVcxiqKEPRJVBPzsd7Bp4wmnuZc",
  "key14": "5ntyAu3rSBAAfUf2HSPXAH1KTvHTaBYA4qLQ8WYmsGSXwKJk6RehuyvmPFVvaqWWBNWBzzY5P1m277HvRYog4PNt",
  "key15": "2n1iztPYMfJN67M2N7XwGPNF31ejHMNdy3ppaoGSS1r84DN832kvfLufbMCehKgSqfdcDD1dVNhx3eF4ftPEr4aK",
  "key16": "2bhCVB2hj2VKUvuQSwEhYsfmf7anS2Q2zdt7hXD5EZcBgxeb5ZauxHPTzjehidohKhwWRxpQRDdhzE1qaBMw3i1D",
  "key17": "33wp5H2BFVnUBZ8yy3zgnNxC9wpNKqyAjDYcEbo3hWkzr9Ybjm255QcDfMcSLtyLDR9FJbUFUqup2j9iQdVbktuR",
  "key18": "j1VqTLH9rAatsLCnvj7CTt2Nns3SgyF2dQk5w6g66FzVdi59kYRgjcRhvK44nNazpwsSwuR5Gnr3kfHCzY3HpFP",
  "key19": "5gw9KuaQxVUdeA9CW94biDw5DcMhY4n31Ms3SktCLHTvbJUkNKRnz3SUzrFEE6C7RXQS4eC7nC2qfJbAq5DBr8Du",
  "key20": "4bVchERZXAzqYPqHKg1CD9WHdw9x4ngaMv2cA18mjgrtFyqCiJrTm9TDVMLCYAz5pEebwf3DGB73Awyx51TNhZMP",
  "key21": "g5cueEQ7DdNQpx8QXYsEp3YrHwGcBD8p2jbiqZfNFTFLwcmxzeTiuYWSjuquf7XrHjNFe1KM5hXi7U9taHraiAh",
  "key22": "5E6d1XE1CrzdJmRb4Pjza9QpGBiSci5o4NSr7ujz7EoFXNGwhA53UEfXno3PH4ohaSaXUztTpLH7Tb1x1ZWmpemW",
  "key23": "3ujZLdhNoVyCn4qkQWGW4Z6eKQGQU6vffb7YcWXt1xphEGCL2ZiBivbuquL4BTvuWJUcRA8HRVYvN1j2sDkhJnLd",
  "key24": "5KN3v8kfVSN6U51ignfpx7jbrmXY8A2f141FU2Tzn54gM8FKGBsirDxtrD46isKzi4qQeZoxAE9BCzTtcURvjeQp",
  "key25": "21MEKopyCwF6VmBQaqMH6D6FnSWJ3fqDbuyAAFaHFeZ7FtedKSv1BMQyo6wkNaz2g6TXsB1LMQDwScjx1hpjjJh6",
  "key26": "223anxsTfTM48D1hyX8muirMci3ggrs2VT7TXhQ3vdhwLoGx8Sqcnc5UhD9ppY2DAA42auZTnCXJwseaMQG5E6sK",
  "key27": "4oVQ1tVDofuKbGrbgSpMSfL1AAG1sBeQdGaPCow9SxBdr3truMJa3nCZ4jtHeEYZfDcNaayURkHDKmRcnQVDudx8",
  "key28": "3T8KLpmkajQ7pMsSnfuTgdE49qmENjwagqJeXg7kG1XhF1MMZey5ZHM55n3kvvN9ExvcSoz9FBCXN17sw79n1kib",
  "key29": "4GHQGQECcTqoGcmujCRqK522Dze567cdwqVRkYJ3EZ87TeVwvRVr59QoxE91hnkPfCFpAAkpzYyA88xSxF3jAqhc",
  "key30": "4B7NKt4mZ6DuWsZt4Smfrb7jjfy9SGg6kFTaZhiYM6dW95xABwc5JcJ9fNEys8Kxd15gcYysUzWDEVj2aaMxzoWg",
  "key31": "53Hvwq2QvfT4fhpF5bZs1BjppSVyybyma3Hoj23cRAFtnQVYJokTQvH9VxAvUzjUgHuTPWoVbgsidUTfwkfN99KD",
  "key32": "67f2viksyigftFYCeoWQKUZnRyUfUEwq9qGT6n82hPkcnc8GoF4cHo6LvDyBS27EV9NDBbCwNUnxwfFcJdR8986t",
  "key33": "AhjggMBpLtXsQptP8zMRtBsXyCVFPeHUjQoiLge3MmS3GQw8Ag2aW8YTP9NwHZQpDWwdBNR2xrWDjUihPDeHjRn",
  "key34": "626z68NPZJVxgmcEyHUs6Ub7Kj5nJqfKitY9vr5EFMbacXN8Z8Jk4B3GyXh21vtdgAS5eE6xgLADygfx6oPoxvaK",
  "key35": "4qkGXGLsmzrYXZBtJZtCdfjoMD8ZoU2AbSKrM5GyUqPzUVDfk8UCgLT7GY7ebA1vbhH6JMWSHPR7XfcFUNXCLcK2",
  "key36": "3EEBdtr9HtBHH6YTjh7kLKSJvzUSEukfwmY7fmquWj6ppB58di4FdoseuQVc8od6JyNPz8MesYhX9iQjDr6ptSvF",
  "key37": "2RrWCmXGwwHuBFMKfnFVpcGo36NGfybrnEUVGPPfd56Fp81fcSpan9FRMMux36EcwVdyetUBj129xPJz2EJ1onsG",
  "key38": "hwvdGiThGzksqpXyrddCvEQFUPCuL3BVeJsvejqcFyqnbERujKnnhPhWMBoVcRxZhc4YT7TT4tv5wS4UMfroZmm",
  "key39": "pJ2LduVnsPR95BYiqu13pVKkTZhraziDAh86qGQKFRayCkx644Au9bqGKg31n8hYkFrraZ8NVDdBcLJasDzUyVg",
  "key40": "4yYK2whXaHgDUFAhKJS7eGRG7BAhY5CZAqN8QnSyduJiPnEjRcMfyo3izDEJRCJZsvFRKk6foGRYHjpNVRKQzUjV",
  "key41": "4L4UvCrnbLJ4w3RZEkuFQdVW8hQkcCbCzKJA2B18jH9R24JqM2VcGS67FTCPszjhNrmcJqmGkpsaTETLFU77xpH8",
  "key42": "jL1xBxdc1r9nYq6FLSYKvmCcuGEcdTP5iyAt3TCnnjqAZ9h94j6Tz42xMMbj4W3bHUTwKqtqjXPWHuiaZh4FQKm",
  "key43": "xoXpyQKG6Z7c1o3RzusgZaT3rv9MHc8Yib79R5UzosnFtSezRF3NodrD2tZJK2A8jagG9sTrYVeZ18UBUm93c11",
  "key44": "3AAjaswkusDhaHp4jwLKU71Bz9uATFdEVzKXPi7E4HoJzBa15yo5akBBA9Mbt3wQKwx59wRoGKjiGDmgZGZJP5b1"
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
