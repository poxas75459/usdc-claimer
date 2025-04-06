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
    "dz9YzZBMp232zobmZzVaV7nvmrHgj2RT8w5muoAAqj9mqsW6xbVYJEkv5K7HUoLRsnq6bPHYWM8jUmeE4v5HpMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T6TqfZooDpnYigmqCia6Govw62U4WazR3uYc2zgLP3e7u5f7moesm8SpHBUK5J3EcTVN4nc14GbF3NXAj9XFpXd",
  "key1": "2ruCVtgd8t8xEq8oeJZceBN1V3hPEoujmSNCkYwvENyzui925FYtUkSEtMpysVARPfHKP3CpH9XqbQXeLddNZT2v",
  "key2": "eYNd492G58BboVk3NAGfK9YkuDeXBU5QZVEZ57N6E6tGqc4wm6vmWay9TXv4nMXJEd4hJvxmi6gkGnA7idyQtAN",
  "key3": "5uBrVbE7you8QT53CK5H7tusUg6K2zGXyNTJTSvAmoXWcU84qk3EECjvzU3u2QRpcMVqV7pkgbLYPXLEHwcdCcCU",
  "key4": "1TrVVZ8h9XtbBgUr1WMQEG2MddF3ESWfjZa1nZfRDWeTThHDL6cbLtDKU5qR9nzBXJRcXCCdqqUnRbeXL19Lu8A",
  "key5": "2JuZNtfuzzPk4N51KnuwmR4tiijZQucQHy9RAmbtfCkbbZWQBMzTg54WR3ifbiePzQoLmLQjVPE4j824S88GKdrp",
  "key6": "2LWyCjXpMMR2uSvKKas4jLhUEiRgr6TY2GogQt6CUG3MApk9ZrzvaYCXeggqwwbwevrtouKESPGdoGh1sHUxTaig",
  "key7": "3CbVczudenwRBCxGxNuXhDKjroVTvS2kAjWi7iFvYUgP1bfi39txcHSNpDUUpqEbh5tn3gsmggCeU5ZkPKwYLaH9",
  "key8": "a8UYfGzEMrpxp4xU5S63hZXThE7HHE8sKtYspX3pwbrPmEcemYBPkVHpHKxjBgKUoD2huBR9RQvqQXSHux6mSzR",
  "key9": "2iNoHRWhwtnbpXq7Wrxv6wYLergiVfuQoUyDveKJ9TrWmpQVGSxgjtQ1ctUwwRzi2MjbFHj4aDshsBRCC241dAxJ",
  "key10": "34z3qkNi8tikhEqbUoTE3S1wN2kThHxRbZKCKKy6aDuuMEMZqFakJLdJ4Tdv1Z6xphHyY4pBaFB2DX9nHzYmdGZG",
  "key11": "5FdZ2Nr2pJJGMDd8hPyoENeLHz9SVyT9MHUyXUMTqNtiJxCkcrZP2pyTcCUqZotjX4g9SC4o63VVZgQsjdMTcjsi",
  "key12": "2Suctn8xtHMfDN96KQqLhGC2eFah2CVBSX2yMCFPLkzksEzqsKG1XsefBZZ7AnoUdogPceW8vuj8zZ4W3x8erbR5",
  "key13": "3p1cfE6w73CU6kpExvSkqfQEL891Tdixz85m28vnHqvQXJYXq4u7KbZjMG4dUko7eF9tY62Zv4w7rVpPfnnXrQVP",
  "key14": "5Z8eXwZm3AJE7SVQGwArR8jC7j5DnJn7MpGHU8tR21YqkrPMhPAhznUvC4FvXZ3qT8zYbPQzseGNcKnVuvT9zpY1",
  "key15": "1B51VfausvoLCPHkdM7minoTXtVoyNFnnGYaujWBbZHK9jni6D36yX5DCcKWkwB7KJTWGPNe34ZiZAmodm2bnoJ",
  "key16": "58Pv5NYCGAFx4nMQnavYtd2LEFRVfb7ymam38ESaUi7VGt96pWUBhU7LGpLDRw3hZTBaUECp2ra27uTPr4E33ZuD",
  "key17": "eGoS7Bq92NJDSv8Bd3Y8EtttJdNxTsaPJkqTwo3DPtBGhNaxoWEF3gd7Xmds1jDu67zfjwjzRoLttsJVc88V2Sn",
  "key18": "54jev58yh2yDShG1oMUkqasHBoJJ5XTTAWj3SbSBGqymdZAfhfGpq9S8PMa2LPZPSrHFPouaNqMjVFj65wDyQTEW",
  "key19": "m9f4nexBZuVETX394SQv5v4yWrUdQmZqHzkaps5otdinvWSirfV1gFPKmm8fpqU6jeGg1PxW12NjbhNkRLA4Zx8",
  "key20": "5osZzm2TxZpSmxSdcqW9eMXLjMWiYXk38xYqGS3rTCURcZraR1QLUuZd8iwxbiYuAgZWDYeXmEqzADPqWdoAP4Yx",
  "key21": "fSxeUe9vMpoT6AF4Wg3Qa1qgeNtnT8UUx8cJw13yPLDk2x2mf8MTvcz7YDEJkgkyHs9x2bHm8y1dYhKkveVqVPF",
  "key22": "4oGSgjnRcNG1RUhpyQWq8pAPTVQXDaV9YjLpoMLVt6HQn973mybRbMAXVrn3AYSYCcYCvDkpTDUZZjT41GSkkC7f",
  "key23": "3c3WYTVHPPC6WojYekGPeBNyv2jij915pKevyv5Ghf1a72aJ54qcZ3b3VMKSNrfNMURK3NUVXiVpKGHEviJcFnfL",
  "key24": "3PXqY3jh29rv7HZ5yWhqmzVpoDYzh4vLU8DPdNDua2uZ9QkuD3oaHwfxxQ8QdM2EAtG5nhZaNvXjgJ8sP8FiADV9",
  "key25": "56F1J4UseW8oNXinqGfQssb2kghDhTZm3r81XUWG7em5MUL6KiWrFnDrcKdmyT4nChA6P8oULmRPbBJw5ceFiSU1",
  "key26": "Jm719gTPNY8ca4vXsx1U4xyPFnR8JiuSzLec1ThBp6vD8PwzUWHHjk8eBRPC8F3BdezS4XvmBaqN8714Yrxraqv",
  "key27": "3QUT2X9SALhFd2koMoeoWyzCKCcHavwgkhe9t9ya9sR8PJZRLDa6X6cETMKRhnWAn6r31EVFmkscjBj1skm2hwpT",
  "key28": "3GEJGm3BSWDGMPRwhPqUzpVToNPyaUJwSqzbeLme3eUBX3wSC5nCGXik3gHfjLtKbSgBMJyfKawz6DLRHqHfDSx5",
  "key29": "2ya71T6Ax1bFYxKK5ij9ak4qGqYFQTUJ8p8R22MALN1nip4vr8osxLDcuZPsoySjxuhvFRAvooCksPH2PQANzYTA",
  "key30": "5KovCBdNPP4jbM7KBr7aefgVDYfK2F91JFYpTyNAcm7Pke2qTeJN6ABp2cJWZtu1DsZqE4CaAiDyHn3VSnwhwcfR",
  "key31": "4piedLiGBA2YNF4ZniYoLCztiFnEwijvuQY9byr7YDa2YCk3vW6cRm86goCNXHHSwWoKDWbpY28qFic9b2AGSsaL",
  "key32": "2GMF42tz4f2rrqgavYyYdcXE7bQoD1cSqLthBxRLB9tTWT3H1wNHayn5yyd8ud1QWH2TGZFU8P7Ygz1auU43F6d8",
  "key33": "3eWJsJTB5YSMbruFUPcZ4uRW4DYzsvZnA4bC4KLUjMXi1bKPDS2W9Ym3S5rv7BkcEsVs9smN3a7dYzAU6P51YLqR",
  "key34": "5zPBVBrNczkiyK8G7tY9BpyknTxg3TiTzGTicSo2P13FFvo7BzkYvZLdUwJaZrJXT5beW7wTffzT11pKBEoEDESL",
  "key35": "ZDhF8C3vYCE4C7asuPPuZnNHidnP5C5CFX5TCGQVsYZ2pE8ZPwepGrtNeCZ8PjL8q9resSsCCbWuNf7eSKVHXfw",
  "key36": "3rwG5FMhLmcGSLJiYEXDM4cqzWmybnV2usfRM21buH8W5LarCrGjhc1eMcWtSo7jQPzcF9YWu12E1gxSnsqf3YL2",
  "key37": "j6XB3C55jsPbA8oqAYF5eBYqh7xyXVG9RnQpbCMpUQ2FX7tq6UWnxfduMWHZj9FxGP9heeFCnVJ72LDaFi8Fpwp",
  "key38": "2YHkJ8qdnFjoFpDqmi3hT62mqFfTSka2TUycEeqTiJxux7WNMWVDNJkWLvv48m48hHzk2vq5Ejbg5jAoHcEpAytg",
  "key39": "5fLs1n7U4XiGEHRCsNrwwrABTphz5bjJkErJshB4yu13JB94Eb98pf3j23eNezGyoZpEBgA2fpJEPL1dFGnjDQCb",
  "key40": "4XmX7sVCnMNefwHavPJ8Xi9nDWjJyMVMpQxL56AzBMebp4CQoyQfn3YFnKcTowbs1pWmxXq8uwb24QExSBvKYPyX",
  "key41": "3kQvDyH8gdgiiuZihBjqrKjPjFfenR9Nw3WUyWoogRFmgGYVwVWVFSPPjxzsogF2MnqKQXEo5bEpUhmDQaUpS9Dx",
  "key42": "4sbAANw2gkpH4Pdjm5w6RoYFmqivpZCbeYxthnRtB7yu5Vi5iym4P1BMhdMkQK5ZvTn1z6hpxGdz9NpoKqbQekPv",
  "key43": "5TUKyQnmZrfQfFE3i4S7twfB1GzYiw8jCEtPFMCLeJTeP8juWK1JjXiQB7bd48MG9rZHpMWpxn7xcbc9Wp3rWWwR",
  "key44": "4z2RfQdpVWVCsBWgwfnzQiw1wsHb4k3qPRbQtMwXFK55D3ap9vhpEA9VVnBeH3X3G3xZXiBdPfVEthmsga95EvJv",
  "key45": "394wcB3FinTDRtaMZzckEfmxSdBRNTLhkJWF7cpyW612hzy53bbdaY9VtftDoHKVBLRHAvoAeZDekPYgmAGrb9bu",
  "key46": "4KuyySAeasqSXXc9yRYLSfzyj2Ca1MfRoTijMJLMuEmJzV7nemnvSxwZo46nmiJrqQtRmW1Xv2cstW6VyXPGXFb7",
  "key47": "Ud4Xrz9nsUuWJp3rY3XuoWbWHXPTxkPWVReEWyeATQUtTffYskzngfpPCSRY4buoCokQ7Q8zpnnUwT8zACYRxaE"
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
