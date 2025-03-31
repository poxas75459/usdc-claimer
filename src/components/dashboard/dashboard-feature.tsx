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
    "3Ue9Yf63SVk7tkbrSpA1MKfJwqdRWjsnHkEr2YpbuBiWCTB3JU79ELdfVpcYz3ovsbvF1L1MkDyzy7Gv7mTrMwt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5avpamsbsrWsrUfKTQRid6mQ6i4pmvvzgj6o47V3d4KAcyUHweT2ZetacH9va9TMASRsoJWzGZLE6HQfFwGatwVN",
  "key1": "4YJWqJGgEuoVHTpbpyzxDpfowLyRKGMq77UMcNrMBxx4k24UEmsMcZM1FUQp4QPGGh11BQVMsANMpASHMLbxtFyA",
  "key2": "2azrCsrGD4Gj6Jx1zHrN3GUvHf3cTycFyT5sjeGkLfPZBRHBDEQjY1FfAQeZLKVFoq7dtuSJWqpABnPCZSJB25Rp",
  "key3": "5TRVYQuFnKCwVMRxngYDEhsxZbhXd7ZhRuePVkHCQ7iYRvqLDMgQmi7WZxdp5y42f1JLBAxALGqFwcRMYL6zNzZ7",
  "key4": "4VyEwAFe2fMH39zRJfXM62v5RfwNvRWyyN2BrRoEbxAkZ1CnWxDV5SWY92pMuZTYN86rXRfhD683NMoq5keX1Vxj",
  "key5": "2ntKCdqoEnAsHzyDo6Nbrwbi6BBj9ofDegijLzZKqnp4a3abU9CR1WdqzMh4neoGcSrSGDEh7P8ghDW5Pqfoa8KX",
  "key6": "3kzhsKT5Um9UVdnMWjNdV9tECtJXZXfXwDLygFvx5u7SdMG6rJHpvW4DXZoQTfEfZnKXMen4341keSPzAuyQckhQ",
  "key7": "4yatX1PeJWVFtS36iSNZ3EGaXfwUJ3xk3KmcyV2Xv6ixg98DppPz5jpGNmi3dXrYr9FqeXSXHapAizCDhRLBmcGu",
  "key8": "3ZLWBJtdyJWNTDvSPWizVMpikMLtpHir7zahKcx8r6MugrqezjXfves84UTSCmTEo4oYX3QBLDTcAPuGLHgDSVmJ",
  "key9": "3VqBvjV539UtcvFgCMks2nf13C5tZpQWdRfKL65mnzADZt3t391vGMk4vSJuPanguwQoFyascqvEQitk2RePGrzX",
  "key10": "2jNBZshTmQeo5VpxsyuQuYzeJjA2RWDXmJiJEUBqQcXF4KjAhUpBEJe18ok1Y4zL1X14RnRNUrfhzZJ3Yd5An5fL",
  "key11": "5gvmWsynbCLUbAccvu8PqTLtNS16GEPcSDMRUepmcABMxEA8d1gFRr5KF2sJWJmHuHjktpHjcFg8KYETVe8YMroL",
  "key12": "43uTMU5qqWUjAdw3pt5nsi98C2r7uGhVWXd3VZawn5BxqoP7byaGmfr63ZpXz1DMBryvDHjtp4oiuuGRfqRFmLpu",
  "key13": "339cNHFe5ZnznUWhDyxKmbdHFzxJkhPwa49XFkXbBnGjPZpgnzgBjpjXY1FMqHDJLwkUaFnpk5kn5a6WL7TjCz9C",
  "key14": "3UTp5npNpmdCEwkM1Kdo76KFPvkTtK12RijBPbQk6WTGX7i8s4Mz8ju8tdUyVbtLGsqaTqjHrGHiHRf2FbhdMxaa",
  "key15": "43QM1zvGy7rSNCmPEcdPNfFrf1Go4CzLpPqytBEYfQkPo5XxraLQXToffa2C8viij2HqEGTZitNFotshV3wR9W3u",
  "key16": "44CDG69JfW9EpM485929ZtTv98JCugtcpJ3uV2MfeV87qLhF5SowF8HvhL5cJSjjHnPDkH1iHcmPawBXF7xtkk3t",
  "key17": "2SeHZia3vYvNgskvu4diaLDupgWHhSYHLimhXet3EZW32Q5GoHLhbWYMbB87j98tS9J2quWDNemuaB8QTcjWcTFE",
  "key18": "m4VnV2KgPnXYCvRUYxV2Cr7d7AfsDSbWg9cc8y9WYKYuP71L3wvWnUhXJcmwE7Aax7GCq5wdq7tmXcfuzJT3LF9",
  "key19": "5swjWWHUbnjBGvBo9PFBP6ppzFhtxUVWJV7riwKos6kYei6qpvdpbyguGm7xPhh4WyCFcnwfQt1XKjD5FFLncRmL",
  "key20": "4Mhoq7YCqFWyNaFK2R4B6kUCCvtMxd4gqeqQUw7av8hpPkVVmiaFkaj3PtZFF9uePmho3BnyDDHvgJsgYWe88VxS",
  "key21": "4GMi5GfcqYys9h8JYeVXP8KQXwNgDwJMB7LEYYHsDGJxvEzAsYkv2kB6CGh6ntB7YMwUXvw54wnidMVXdN7Ss3WC",
  "key22": "2VYiHxyZ94usfPLa3nBn5NRUSYNt9Giy3egsM1dfDDLXioXcb3aSegkucB5pKQp5iQXkA1q3UvvMFP6fpGpPTcC",
  "key23": "Xdmk2mXHg6Vt2v18xUFi8ZaFx4PWVyWPCw3G98CpgGDPWHKtYTN1WTcsQ3Dn8Yw5AixLCmWLtMvpdPMDa392nJa",
  "key24": "3xCBwnpU8M8acJakS1YZ5yvYeoD1k6kncJ8oYvMZvKFt26BrndZZEerVqXwDEBAkfJzDKGzyunBQaWHiPdLR4x3c",
  "key25": "2acJYeGNAJmZb3wzt4W6V2x5pUvXawGDUKoVVdwpqEk72KF8AJC4z7h7YXQAmP6kPcKFm3GT5aLhMJ8uKwUSHK9r",
  "key26": "3DgjQFjhRWfLBVCSSoLih8xbJk3v3HmvaQBzs1RrQdMMSBCtnEmwNM82aDwyffDD1g2ZPpxfyYG53LQHcFcniALc",
  "key27": "3EWmuLvX6Rfwi2tdpv4aBpGpp4f84ZMXFNSXZSHd1pFypkj4HzGE8qdPSA557j6myTYwvp3jvTRJHPWhoEqmMNek",
  "key28": "3Fn851SvmMaDJiTNmMWrEz9natNVZak2AsmWiXAa14hHZVQBUoXPqgrKAMs52ZbK7ZSN7xrDjxLz4oFRb9c58JpT",
  "key29": "5uqpYM8qxx2DsDnyYHFKxcQ1YB1vnXFT1NHwZD4XEEy3oPMD3x8ZR6KcED73JsPiizPmv6oQqiecnrYG1ZTimsUU",
  "key30": "5t5eMgSs6RRCc3GWF8uYHAp4Va3QHdSTkHPUEkar8gbdjR8FemhoYUKXhzaa7HQNDyRnVEEKBSYaYjc2t8wvZQ16",
  "key31": "XVw7fJvREBjtfcnkbR38AAgT24QZk4RE5DFjhFFT51dnj8VWgFLxshnmMaQVGY7NA6ZKu9PSgJqpSUPPPUw7J54",
  "key32": "4wZ4c92RoQAD1VwxFAuB96YVXRvCQUuwPVz7oRtvZBMCmMTPz63AVy1jB8CbAwi29MG4qftLCpAtUuxbj5SXSjM1",
  "key33": "59VqCAaquWT5xy5tAqhGUPCC6p3hMqMnwA8dosfSi4Ns5UEX6fp11c9yrov6L3wPYPzF9QBAeoBU8qTxBHM1kchV",
  "key34": "56mSdiyGFcNxNpTXKCNFf2aimLUUrbM2N5EddoEUBh7fe1JLsj6riWDaysRkAPTPau9cqrQmUPHzwT1JmrfeANjf",
  "key35": "2T7TNQDph8WPuNeLE3Y2eb4cBos3XLMzyYViNmTu2x6cJ55gFnLs3w7r4SQupEign2Nu9RUGSssu6tb5vpqgCEWK",
  "key36": "4Hv2UDuQECDNP8fuTtbGamw62S3WdoUZM745n4viUDkEt7WLTzDwP7fEG5FL3kC2EDvWCc7WyhHrZHLM8ajrTqen",
  "key37": "4Skwyf72obykUoRhm4Aa4N9Nzhic6suKCefJJrVkQJqFfG8AQSdzVX7CAd1Wb45i4uqqTLbwCLYNkby6v7PB1Pk7",
  "key38": "5UfmPZeYQjAouMmSrmuiX7F718d26zXL6JgMdUDdpoUG51xR17LZp1v6DYsN9ApMgiRB8j1631NPYUCS7JGVfAxH",
  "key39": "3stndYPTTTSJS6UR1hjVUxiTyu62MZ8zkX6bgaQ9wYcDznvgQTVNaDk7PS9uYM5ETJ4vJh3fASeDoe4c43g3eHSX",
  "key40": "2yQrgHn3uXi8FEkeLjbyz77qY1uMPFRHsW2TwwEQiettxw3E8BXwwpLDWtrDLhByx37D3UBGcMhFBTZsqWBuPdUe",
  "key41": "2Vpjx8cmxzevzFZmj1666RjvkURmhRMxR2hV3tAeNn6Yf6t5D5e7j6oVC4c2EA3QazWDP4u2mHGebnG5GXoxPE19",
  "key42": "gUXtUTSjRe5cwCU95r24cysgJQ8zhSGpuSkDg3maUdFrwRgWm78MScb195VBn7JzDmSkmYHsszTFhiwMM9EtXFK",
  "key43": "5vBRTo1MWD1sgHEsbX3oKgUscqTpJiXTZ58N44USVhYvxpEBXn4n6JZYRwVZ98sYEBGz9ozCh29oDcda4n94pfu4",
  "key44": "549GqwFcHtJ6cHKyJqLjwpa32MGYhGLn5aozJDVW3ngEiRy3R1T8eMofDAeyQHvXso3bnt6eNTheZ14JRCUyyCcs",
  "key45": "4qsvguxGMeNYb4Qa1byqnNPZ3doAjsvwVLGzqZqdt8YBWo1UDtYm6XSKfmukQQ8EeCLXZdcTmvmWihUuiL9Y9FyG",
  "key46": "4d7UQmYwLtE83vFE1xmfXFNHnR6ESXD3KkG1AMkr7w6TgxjWgFwrzoh6qiHyBbfWqY4tRiYpJer5nEQCJ7Vq2LWA"
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
