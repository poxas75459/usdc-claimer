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
    "5LVWeqh3yYUe9cvkuiDp25umS7yoWn7AVcEMqyFzt6bkXECwf5Wa91gP5EvnoDyXxfNY9zRGw36KTj9UNRDB5VQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v49LZfXJYaNHYTPJjyfg7vxUbEWr35KwKaZBkmL1jQ5pNYEHULA6x9g4Ac5B7YETT7AxfH7ZD2ci9XekiinYqKx",
  "key1": "5pnowmfVvDfwwoCf2tR6Jx5EHEgmufXzvzs29zYyjqZy7ZAg5RBdsfhbnofQEoFN2buuWYPesVDW4hbdfpv5w5Gq",
  "key2": "4J4B8u9TjXEv8GRu2dx8dLpTUTfbhQhRAHwM5kjvK4fs7aFxzQXg1rSjLoUzCwqbCL4Jir2rNJXHzeUDgGfVQHVZ",
  "key3": "ZRU6txx6e8YKu3sMFH9r5beeZsw9adxEq3T2r7WsRRTjt8xtvrnMvMUrPubHrGN6HGVAyPCrvZfGiv8Q4HiMj71",
  "key4": "62DKq2mkfCwKgUMhzypStRi7QY5pHi9Acc94q77XUgPND38bpDzMjL4eLQvasHRQmgaxww8mayVe3VugubCSMtvE",
  "key5": "DeRo2wBNwDgJAc2LB3KxxQTonTckZaN8FutMzdcoMTbzJsv4gc1xdJSEZj4ExrYsAVHuK8VA4GAyKSySfqxzU5y",
  "key6": "2QUHUbzeDKoRuknCy2VRPxJekaQsqnKhHRmSbkyhEL6JNCBDTDQL5ARL8BGeKu99vtSdVNWUgCr2wfXr9GGJ9TeB",
  "key7": "35A4RRaRMJyrGCZUTvumfM2uVNA8yaaHddtKH3j4kB2Py3BdsBBM9RWhWeHwJKNxHK1W5yYG4stqugNGHXXpPVbb",
  "key8": "67oPTvVQnqRRJmfNhwvKc68o35zvJqQR9iAmfAsV43tDkfEUak1mfVY8LJkbbgCUckQpDeN2GmKSG2uMr5wZjMEM",
  "key9": "CpJpcn3rywryL9XEZ4FbHH6p3R1sSLmcePXT7k4aRH736mFarWQ3ebBDZMVkWKTmjeHJBKz3qUrb8g6q8zgTgmC",
  "key10": "r4EzzDQjZg2wAxrrMz1y6AbXh3J8eL3k2PCSrPxP9tiTKh4xo5VKBvZsbxuKao196wRwfPwMAnWBu2bnnHuDppV",
  "key11": "2rbMsSqwnm53hUKBAqx6h6Zj2gz4uqG5afBSM2seCEXp3YQW56CP7mjQKcTrBupw5EQpHk8YN2GvXG1n9bKKMvzB",
  "key12": "32SMiPJRaYaKsn44db8L6WNZqXc81yaRqXD5hgyrF7CGaiXDa6SUwi3LVKppHqLndAwCLZTXHhBqovSpzyusjECu",
  "key13": "4GC1saApzJ3R7o2oBhDAo8Y59i35v2M3TNPx7um3GvyDt3kP9Tfe6FSUbbwFgnd1Crk43NRV92SDKDoTPtL7Td7w",
  "key14": "MZBQXWAuFVgzVfVtpC4FtbA1QqjKm83Ux4LG5cmfBnaMBRK4WB1cyxQ9kXG2JQfsytqJk4r9SgHmScBwqLbi4yy",
  "key15": "4FxoRbRGz7E8x6iThQ3ktiNJuA4t3MFo4jGQn6XHrvs5nEagX7hFA4BcpoB9gU7KCM2L3nbMa1KVDW9qkEyq5HEt",
  "key16": "3nbHC1EwtNDGzwZyWt9wf8BGXQRyNb5xmAYSqjURXAA4GJpFcGTk3QNvFgCegPkk76sAxa73mM2CSdkixqPG3xhP",
  "key17": "3MPBaNxPCShAyBZxcT6NUtyv8GmQ3kPbZiHQsyeXgE21bnT9Zt8vbqGBgLtVbEq61scoQFvdxNdrnQyvn2Ns6tLb",
  "key18": "5K2SdJTKPikiasEsp6xr3ZGjdWEgw642hNtPxJBiAdFKRkG3K3MNhHugbFfX774tiVduZASjDmKYFVBWHajWQUTP",
  "key19": "2muTBquEBvCgTULD9zSDA5c49A2HUQEwJ1M5gdTZ3tewSmV4KmAwdxj2NwqsT5SHHyfv7dXGvyjHBLhfwjoHjRip",
  "key20": "52wQdAh63vmk4XowsEgmVPqtfEFqpktZfJrEiuwTvnE4CbTnvNxDDFzQ5vnwksowDp2x1GHmYJBj7DpxCvhvX3Fs",
  "key21": "38WFVLZ4zWFoXKYV3Efz95c8Yb7zknu369YqVtTJuH7iZk4R47m2Vq5QWcEqTpAgxcsRupKwBZc76SjApZxXAxxN",
  "key22": "2vmAifyW9vseYC75TABDQRumrqJbtEGaSiqGw2u19MYo2aYs8YHEgdnhewyahA95PHP4xEoJwAJ5ueZmJJ58zoyz",
  "key23": "2kqr8ZPat6BvxPNEehE32ZeYzpKrnNfiX8L5xpBvXZoj58ZdQFuv5893XUmrzHp1mYpKxihftcHbtn6TDWTs13S2",
  "key24": "iU4ixwSWGYeLC5zUW4WC3qqWaWBj8mbQUBywxYUKFvPEB3TgEcGe2uCPU6PxFvwDGEmmyEMuWBSCEuubZnX5XMi",
  "key25": "2kfS4UFUYhPuJLgRVXM5TaSbQ9qysn1FJmy3pfHuCEyuWje4jp7sgWz6JvMdk5tyD9eDekCzEFTHGEbxdLaUDTxr",
  "key26": "5ZJUYpwgWdmTVUjGUETH3i7vCSVZBvUpigGp8a8MMEKNbTnQcJ8TBoDyCkPrx6hpiRZ3n53MxzmYLaCsxkZmt2Fb",
  "key27": "4LUQjssBV8yVmKoGymbnE5Cdroxz5F2oQF8y1Notki46czo2nMXBwWzpJf4iM9gxL212BcTXQjKC6VigidSSeH6L",
  "key28": "3khTASqY3kGYtpHkrEZY248VTBFDzoVWQwfJi8z1LFUyGTafnDqqVAbrbVJWPmfQTvTL6AAABniwn7BWzmK3d3nq",
  "key29": "4cPG9UVJStJ6y7fSbYBV5WDNkUwyDDYj4j5Q3SaMWrBSyq6FZ41Qbm4ewHYgSwNCcBqjzXYg4nFHPhF7MtYr91RD",
  "key30": "4Q497FZjaJjW8YZ2DNH9gMXg1qMBXAsT7nhexXjetoDQLpGGwy6sUJt9RKxkRX7PRL7oheigzom3f9FbLH1hfRLt",
  "key31": "3yUEhG2WUifAQwFj69pqex49TNUbStMdW5w71Z2Ykq2eDXbpN3hqFyNe3qQP5q31qc5XzL6fMkgTtYf64PmTnRu9",
  "key32": "3BXV4t6b2cEk1NVJkKZwrn6mZiGTpus6gspbqnmMk5q5i5czsgat57sRzQaBeDyNbqy23jCGRaee9j3LNVM4QKXK",
  "key33": "29j7Dc6x832gZjcNxMy4oovJxNzUnKN81eFcmLbGApNg4JNekr4XyatR7GNbeH8g7EJucukxgERdLomwdn3ieLy6",
  "key34": "3R7sxLNh5WWZGaZNqtRjMay8PEJhkEY84nTyLCuqcm2Qe32CCJsC9qfN9FdkRQFcG3ijaRSiHdotvHjYy8mC62PW",
  "key35": "2aom9xCbDtguGKoJZHmacht7XD5phUEc4Dv9wohhMxWU9Qx92hLn8NA1QwwUBbwwyAsaFvs3Vv3yCbNC57oVcQX5",
  "key36": "3XAxkKUJSansLuMoqTk6Hu6WWBSsQDbYsf1DdHZcdDkuoRcBkqRRJrVxTTA2yJfGg2UPNkRdRFn8VRcdNt63vCwx",
  "key37": "3E37fH6k9W4PujsQdM39FnwsRHAbxXmkYD7DuSpFjHwKYHNZXausNCvxpcWfaPK8ov4QE5uNKSutkcqVxBeaLeKf",
  "key38": "2nQFdgL7Kt9pwiGHhsfWsHKw6CCoGqgorHmmxk79bn5YsTVAYsdG4PZGx4MyeTSrpfEPevdfdaJNspReKeSAT2oh",
  "key39": "5ARt4SypKiTCLZiDqu9NVYCNPuWjPZDvSRL7FFDBfbtAM2Fk7NTpt2GkMYWk3uqEBwy4nGwFANMP6xREq268NzcT",
  "key40": "3GU1qVvY1w2hP5Yd5QXXCmY74PZMLJsC8Wfu5HjBawr6x5kK8jyci26EjYs9s8wHECJS4Zz2PhcNA6hxorZT8SmM",
  "key41": "2mjAYs7mmrkdGpgdAa4GKFd3gPaebiHBLxZFkA1eH2HeMPy1U7tKpGTxGigr8qsVGzTSEBhUMo9sP9ebaCmkCUS3",
  "key42": "5q19WpwmVoDTXeqWhxqasA61qtokqz6Hk88FhftXrjfZjc1CiBz9yiyHctM7ddg3CwQ1GPVqoQh7vBE2Q8tcBwqA",
  "key43": "3gjkyz1rwEjGjRap9BuD5oi4MhLLWFFE8UD3oELhQScEukPBJJSFwtagHYdmtQc2UTMTXHYoa8AMTDFTKD3UpLjP",
  "key44": "4YGdC4Mg4UfNuKTCk4MbWtMDgqMu2DNH8XAD8qdUBQZCrHnevVqrdFL57rLoW6LHmWEwDjzRup49WkHf1ZEh5Hs7",
  "key45": "S5bjo1Zm4gNvNdZP9nGJq5kSf4KNdr2Z9uKqBwWB38AViYd9KidWRsUNCj7ts1NLxcrhUzto8TbukTjUK4JctQv"
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
