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
    "2zY337CWDG3u82V9GSoxr5Ft93JWxMRKCSq7ie3Du8jxVYTQVjemeg2WUvy1PRbowtvTjEfTVpRmokR1Qad3Apcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2crjK4PhXYfMGs5PKwP57Dn1nnU62VLbdAbUdRjtei3XQiNdPrkwx7hbYLkYySLqHJ9Zsu39g6LrqDytqKynLt5f",
  "key1": "2cF4xiBdzqj2N2B4C71fvoLxCj8ZaZFLUsASkT5CJXBHPWbzr6gewMroTZAv2byoJkfD3ngdYrsUPYFx79qPPssP",
  "key2": "5C6pJ6T2QfHoev41JgqkmBV5ihVVJrXzz6MAc6V2HMdwAeCFvJiKYKknw1APpjNAMfUvDz9JSeXbFXdDismSSRgm",
  "key3": "QssVz7cj9nLxFqkV68nRuZMLoK7UYCakNVv2mj24XuiTTdoRfo4Xuq6g5evLUeBKueKHfB1kdSiK52bAM6j4bp7",
  "key4": "3jJQ9Qps5YqvDkh9f2uEkw4ZvZ4hdPpCNk22QxvHS8QEV5t8JGP41jHBBbA4Sf1k6iWpTmyUcTmyWa4C3r2BuKk4",
  "key5": "3HYhKSCtSNXZe6cmDqS8NPacZUSwv4U7oN8y5yPh7igHhjwsM2NzKch7CcKp8B8BehgrSgfjGstHcRgxCEobN5HZ",
  "key6": "5A3KAzNGAiVXPeniGALYT7k8tcbtYwQo3EjVzLBC7UYdMw7wRQsjTrvet5tCqgzUDdHVfeaWG4EdzT8YXEdn3MfF",
  "key7": "4pYuurLA9ngzaL8ghAxbU7qKXE3Mzr4mDg34HCz3gCBTpcmZ5amtYdScPSqH1fUD5BgVNe28ZM4AVJ6eY2UubxaL",
  "key8": "41FBm2NbtdkPn24Te8M12zCf9KL33XV8wh5g1fyH1TgeMiYXiDhstKCfm7AzQwxkiLLfGF5m41EKHmLa4gTueejZ",
  "key9": "3zxFWEdxLEtVzwnq5UB9uTuZja6tMZ8B1tuRYHtWCt132MWQJGK3qokskjDSPb9j5m5ZSgeXbRGarFsmDCZTm4dY",
  "key10": "62rpgjN8r3fpUBKoXeM4yquUi1bCRZbBY6JW6S6RPaWa21r5SwNcE7pTVqTKR6LwuzVSucVfYQEXSraC1P4XUM6c",
  "key11": "5bFg8FgFP4wb3fQBFnhTCDDTE86YP9oEJ9ToVg1VQueF1NEY5mv1Zk6v16unJ8MyxuA2ohvG7MtC1HvYxHJkKpZM",
  "key12": "2XPRkK5cKXBy3TFBYB9XJtsrdhVf6f25NjepTr515iqHz95FpecoCgr75g67Hseu3VoEfwqrFUE6rbdsitmgeMcz",
  "key13": "58XNqYXmDDiPZSWXA2sudfVqMYVRJi6wCw7KjfXMT7oc6iDYC8sq9qiy85cMt4T6LypyaNWUxdgEAt9hDfBtU9Vy",
  "key14": "36dJieijQ7EjuEzmPpyrYhKuA38c3tL4kRcq5xbpdBxoemD4aQZknKfnof7yFnznNmjCoe68N3BwGCxxzdwqm7ob",
  "key15": "4fmCBPpr7xDnxc35ZcBkbYNDpdTm2WKNrpTBvmDgV3Uo2BxjjDR186DF8918UaMjMoexPKNUXUCBJzcxqYxQ9Pu6",
  "key16": "3Hcpk4dTKUFspaow5Kz5ydviMpEAWnzZVnnjX56zAeyRXyymLpVECwjxBx3RPKn4Q1wZFJFdegKy63gBWfTKAWgQ",
  "key17": "5zK54CB4ztw5WzBiTaBhcixxP6WM9TvXCK68W8YsRS7L4A8dyTrS7N95EiafGyHraAaYgkp4ZMeX7raMdCaSxMLi",
  "key18": "24ytCbP1vCzRKqvQk3YpmqKbwLPAGcYfBXC6SxEaYQRW4sBse3VK7rRQVNvws4WdJWJJqKW41ekU4vwGPCXUPMsi",
  "key19": "4cYpdb7jFCV5LArsR3dYt1CVDW8E8vkcT3ukPxPgDTBJHPm7FCgNviHoCcX47x4zr6UkRnBA3MuRcHn8mKFbg3Po",
  "key20": "4GLAfm7jdBzc16xnB36EC254iGesxxvLL89W88BrLmJ4MFjrrLDDzKgNLNkL1DVJMvDM35dEdVHid26sFAwqcFUS",
  "key21": "2LdoofYea5EfQGM62u4QFd9VwwTE3htwSXrRErzBUH7ryixEHappCNj7ncyRRBH1vHhx6RcjV6WvbzFsuee4ULd8",
  "key22": "5mjnFRofz4Pbk2Bx2sCgSBDc4hKWG4eucC8ui2BbL29PTU2hFZbev4BDiV8uiyZhcP7RauXmeQvuyfXgusYKuoiP",
  "key23": "66YR1XdkGrq5gxV9xD7biREtnDdVReBgi6Et6fJCnLcb8sDTMAWFnYV2TkeCuLoA3qmYGXv5Pe7uoByBc1ZRLmpG",
  "key24": "3XXao47H5asfh573sKPvyxmhzCBAiTB3CiSveKud4fSgg4MBQkCEQXPUA1AJJdScZqXKZyMEz4Frpy4zKh1oF12F",
  "key25": "42XLdT9esfsQ4SuaAzVLQxJzTkGht6i8eUeq1wTm1sUbBiBUyCKnqfXmhZUHKaTQ4WFGi9yBdCmidMGFrfaZrJbL",
  "key26": "23WpydQepJybHLJu3WCLtrnKocCSFLvqezGi1RRc8iPvKcTgGppRcQwxwqnVWw3xR2TLUT6rgGHMQDLtKCP9Zf9W",
  "key27": "5HVo8fjroQfweU74Se7uuGwKWvzdo2pyRvsYYwULg79knND5kRweh5BXv3ne54DkmybRz7pSMrEyCUX9G7XhSd7h",
  "key28": "2wEc1LG6vbNTj5TEQSEDTrE7Qh8CmjFpzsL2VoGneqQWwRkhXLVRmwvR7R2FdEwBbpN1BmfkNNQJovYWg2RvYpBG",
  "key29": "3dVZKVy4wDrFvr3PLXho3qcEsbXQtR2j97QjQJ2Kwk7njQW6uYikKy7F2EtrCXps5bZfpiDRyv3XJN29MwAfix5K",
  "key30": "5coom3YRp7ANPKug4qzbKRrZpko4vQa9BHoVEX99JQVdrfUbawTbA2u6nySTeufsBLUnvD4djyeLqZopP8SuBre6",
  "key31": "4enGaUhmsm7xVLKWXqADpdrRo6vQ9KTjfoWtq4ZYZPYLRNCY29tTiup4Yt9tK88qvdckKkrtfEM7uJJcBYEBzdLD",
  "key32": "2o2JLKZTPTbyVsT1v5AZFbtEjwBwTTVWum5g4wABXRJwPNyPsNVF4fvr3GBFbNkCb9Gk2gz5aZyf9AD53iQKyxab",
  "key33": "4KuGtgiov224f2T8dN63CfV2mbFexeRPUZyvWebCgAX5DJP2qYyNHfxcN9Bu21sCFkLm5BJMwV2LRvJXms7nC6vh",
  "key34": "4fAHL94jd5skTXxAbu764Khz6sYJ5t8gD65tsU92u6oKPab6EiyW9EquSjP8owv5yJdEAS23vqDif34bZBzrxrgs",
  "key35": "5SqYdWesxWNL8CtzL2GQexjh2LiecfyJ7v2hYSRPYaK2b8TnpEPsUmCuYqfinFt8KVaFqfSs2fL9FfP2W3KzeBiU",
  "key36": "2m5J3JSV6bZf3c9g6yzFbTo8fqH1M9Y5oi6qSJMSJhRX36A6LGrgfbsFmhvGHC18QR6JGvUoy8qfwzVjL8KL8Jws",
  "key37": "2CepYApCP3X4MJko2jN7iCL44yWjxoeZRb5XSven5q9wjXfJZNSyAx8sjTrj2ZCS38d8g1QQ9MWa5Dna7waxKJKS",
  "key38": "3U5i64smmt4PJY8p8TKPFe6DaNcg6rKQvCcFEJCPh5gyHgFz7Y7PPUw8vhnQcpERHnKg4omUQ5BrSw2nMhSzBYfm",
  "key39": "2yCdgGzgcyGGGXQf5CFpeQEn64DD72oTsusPjYrUMmuXtMkWY2J2bTpWiwBpDaVA572LEZuMBfeSZgQaiY8bwydQ",
  "key40": "3d5wiUJq9fcf7HHfNqUzPBrYbk23DS8fw3pXq6d7fEcKKXCQ5JS3fzxGyyxb59EyCNtQoAeGQ335KB5aS39W5xsT",
  "key41": "2Dv4uUiohGRvGw4bxt84KcaSUjmkNYFJpXMQyMWxM8kLZTZ9oFKAoB4n2ccLDaZzL31euQKrWEAgbFtyTsviRZpf",
  "key42": "279q8sG5QVG5mFMtjVGWfcS4pheG4V6wRC2tgtAKpMssQkPDH3sodLARD2AwUPgPtCVU75DpfFTLtz1gejg63v5H",
  "key43": "wk48pbuCfDf4K7dQvhzA5JcYYcTVrz6mnoZkA5cwHuRNPqxQRAfyUc1GcE8VHF8MCkFqFWmF9NUJ5PUJaULdiXV",
  "key44": "5HGbYX2DkvNA9R2KW8tt5RzZsWnz3ZatzreaaTxo3wd6TbRxzPvM2EaoCfTYTM6Ln7kepJTAiTMxsRkmcNC17xja",
  "key45": "AbWv3bUvdxcTZpYGiEyUmYCPTrLzt7fCe5XrJp3Lc62cLCah2bFvuaJjaCk3Xk8zVs1KcigAjaRE9BjWnWGPX22",
  "key46": "3ZVg22eAPNb2EjbbcVu47zkqW1j5ZxNLq6TyKySKfRYmnFjhPUvAfZ3ZFoc6rJtxDgpDfAvoa1sbw5Yx4kbfdXaf",
  "key47": "4Rj73WzgaRRvmYU9jVhhoco8pCWfu8X88xHoSaXAJAuaJHiXLggkPrc2HpTLRie9YpDaXCdejAfY8tPSYSt6KGKt"
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
