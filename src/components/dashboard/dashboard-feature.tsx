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
    "2G7kRynGruLNhE9wg1EHGGazbJV8UXWb4EU5L24z15q3FHwUA4YFJBjvDjEzUNH48Z1hUA6g5FSrBcVkocxvUaWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dEp4dyf25EaqkekLehSxNVtHZER7Jom9bN5WiAoHhKz59dJSdU835VcDak7dLeqkLu5WatDZw1P6aAoL7Rz9a5J",
  "key1": "4fPHTPXo5x37xgBSVYXP5oAP5eyFbGc7xMKoKazhw1t4eQ6YUwq6aQ9uiEPMuwKBPm3j2iSxRM7mkrSmPeafTye5",
  "key2": "3p1HSvDQfP9u2QUxaZXntFWVuE92nwvs8g9BcqWXXW7ddpt3bq3tUZHGy8bVJbWvrF53CgkbyHWGW3Ty42xBH83W",
  "key3": "swMBtKE7KmFrxtzhD8AL3n4CW1exHbWdW6BEEqjtZy1CZGWJpm4AEpzEha4HcXuXGzsmrW6kyYeVXK4i3nK3feS",
  "key4": "61WrBd4gowcDQLoVFoWM8GTAiX8QbToQnzManAGDsUP9dBrzXm7AQz9xyMu49tiJCuAj56bAhVpieCv5DxzjadLN",
  "key5": "3CVquVG45vPgNWtZ1VfAW2XwFLS1qY9R2ezAvXsM42kmM8rMeXZumtjFaHCRXN2oz6fedigDv2DJrutmVbzZChnX",
  "key6": "3zbRHhV1Qs46Y8rR6t1y3ma7Td3ja6TD6TgChQbUrcismFXR8R95jSzLZsBB48rYzg8fLWVm89vXem97zRKsXCMM",
  "key7": "4Ji6ZNJEHerTiPqJL1tNvmwRCAkBSxw5jsfaXEfAQngMHiUzyWC6ky6DEPzikxiR3FNVvNsNwoStvVFbNiFZadku",
  "key8": "2S8ktYAxNuCJhyyKwqvxeZaUQg9AmBRGmnnVmz72fNR8ktXBCaEsZs7u4GavqGxGrR7MELu8m4C3NJHD3MhgPsau",
  "key9": "4uRgDWf81fsawYAfTuq99WrEHeduzoQuXWmFMg2hSpE4oDX5iRowfnQi7yCg7YYiDNaJg7RVVXddMruhqXWWyoxh",
  "key10": "Eoum36SRWwNz9pz1R2ParpYtK5d5mje8Yc4PtqkWeTiyN14PnSTvFZoNgVKmiSTPmRq521VefvmdRzjv8tHM8RM",
  "key11": "59XF2wiPWdM2kNEQYf5hPzHX1Dvf3F6Wk15Hv28zVtnZjbcVZJJcCRnjGLdvV9TtsaLUv9d5ZGR5HQJ733Z7FrB5",
  "key12": "2MfuGPXBMkC3TkqvAYeNmRRc4MkGoDTTbLm7raMkneBr9hCHKAaDjKMP4L7R8xqYPx2AJWgfHbAmSohh79eL2RKC",
  "key13": "uoRZaAR6KtJK9TNDfdaEmDij8f1hUCkUJw7SgvN495vgqQboYLtZNCh23xd8YCsM9WyhUCkTmE1Mng61wEBosQ2",
  "key14": "2SNrHp5bYtQ6UQdBsD7wmMK7HgmMom9aAFYkWruc1vaZ7u75wheVapy8vbZtsbaJUzv8oPgJkCgcTRASXNPqzhUy",
  "key15": "2DyW8UyV1b4fUHe99suygqF5k6f3MzD5YZKMWh7tqhZH6V9pcG2fNL59vvpk9uRptvq712nngWggCmX4mUung4wH",
  "key16": "5p5GJcDwPRwR49TuPQkUBG741kuQWFrLxstufLTpYE6MSiPrmujC4rU6fNb9n5NfMywDvFYo1vESqyxmw8U8cosH",
  "key17": "3UqNMN5AsAVVcNekRDvqFow4F6p2jRYv2yRG8cqqkg5ibLGEeDizPkz4XHczAegnSGveHMWgQbCViG5CH4nL89qX",
  "key18": "3gguFktbzs3AcSvvfut2BpmFEQLS4LckztYWTKdrNMzQDRYCPD7y5MyD7nmdZMAz8jzc95AiJWJmgteJjSrMDJQ3",
  "key19": "345hRjo4eEfxBTQ85949A26iwgxyCXtAfrZmo6v7nfiQbEGRgxALvrMhXDwVwuESBGxhXRDQtBiRr9GQcQwyudtE",
  "key20": "3Wv3kTxc9Mi3AczRei66ypp8vAUwtr8jmo94P9hycqjPN9iLPQ3YDmk3bndWR8mPTuyume2gbzYrBwd3MKKgaWzM",
  "key21": "ve93YaCxZdmSo78VXzCH3VguKkD1b6QtqS1sFsQcnvD2VFm4PJqEYcgunK12xnhbXLEzQyMcL1aV4GiPRdu4UET",
  "key22": "QCmYzuWgWFEwtEsXL6koc5RgiHyCyrvXjVKsJ7HzDrhYZjKDfqgUXygVgq3Vo1RNf9TSWUVR647QQHcE4H6JMWE",
  "key23": "5iCWHmLugfUNKvGWYaZCEzHLGyJnoA6QeAEmALTGu6NsEvLUNoyTQYx427TLUdRMF9gdkG8H5PDKLZMw5nucSi1E",
  "key24": "2oSgDMaqnFa1CJpvrVGYzpRCLawxjMGhhNfUaKqLTVJxyg4yD8hxyGAdpYrDfG2qMz1qZ7quYXPTGXwfpNmN9D4u",
  "key25": "5eQp11BCjtCK37EEBEjwJTy3JaPPQKmEetCHaydDY2QAreDHwP96RiYqFg2vTo9KJcuXXGrN3KQsDP6CixmjHNvb",
  "key26": "zAqfg4Kh7R7zB4pwvvESCDWBQrJuj6zrUjCKc9ZfwHySMTEnqPi6Xbqn77hPigL7cNdnmeuRMgwopUC8fDGrkUR",
  "key27": "38iamnha2Ao4nh1rerqcfZzp8KztBELSCyew9FCHbq2dyA6XN9AX6DZQqpQTdfewf82iNcP3dasqptECvNwpmQUj",
  "key28": "5ddrH8DVNBdCdezoXn3HfrtXrGwjz36Qm3qyxqw4msxuFmS5DWoB3PHtBzxejYAwvtH6eoKoo6oiBzBC4ekLt5vQ",
  "key29": "55EBqVgUK9TdDWJRnQcHhtuLCFaNc98PFo9LwdRGeZbCzbYi1u7XFnKQ6AMjfHWyHHR3yihrruyVN3ZreNtqnTKJ",
  "key30": "2YszkWoXwCwNRBgdM4sxhE7H4cHuHYxkRG8JdUF4JUYSoiZjen948x1mMbvUjvme2iM2yJF5qpqPV8Wus1gX37GS",
  "key31": "4EKZqdhnTotNVWE58gZeqc1sGpSeMK8VCroweyKbZAUc7vsQC6nczUek1jaffhET7Un5zbMmEsjz95dsmjpaoM1q",
  "key32": "3TVbKukNAinDsERXRAttPYz2JZhwK5EGo7V4urgQU9rNADnSFrknm2VRvUktJarwQVhzF4Sxo95sHdpuhsz671JS",
  "key33": "4a14vXCBsLRVh2fr5Uvg8WDUWxE4msvR1ujQ1q39j6sBU7xN94XadCbEnpRG5XoDrm6wev6P8sqBxHTZ2rzxXNfU",
  "key34": "2bqSzEajfdgYDCHkvkEb19k6YscfJdthh6LhjB4kkRM49iLn7rPXyQGX2xd5RtPoDRAojFHZzwXD9opbjmZEtsUV",
  "key35": "3gHPDkDubQzfmjbaiYvNBvMLDCYSBHfDeaYNoMmkjrL1YwScvmcVy8WNvY9dHBoLkc3znuvYaD1bQgB3NjMAtKv2",
  "key36": "pCiZGio3pngv1bdtvLGmxY4wi4AsLiK8AUCTpNNSoAcUpMdvA3Ud7NTMCPj1Qhd4wGT7EPFs5osYwUzTHmv3Gb4",
  "key37": "5eBvtq7ifvGkR98zbgc2JepEgLUYFUyXnrDghJ3Kd5X1Th3xsKhZH16eLSxeVcmHyLCC8R23goQBBFTCooLHgAtT",
  "key38": "41YLZCyNCR91LEMxJq9EktYxPzuJ21gVb5dsUbD3wcSRgswbsMftsUbwMmFj8j4nGZCFV2WoNS5A4LGvvFMdNRkx",
  "key39": "43wFWahkARmqyDT5D1JpqU64CXTwACGR3cBvJm4bauV8PAQg9KddohGDtkEADRi12kzkNnQukpSNogA9fcteVqpt",
  "key40": "4EwpsQ8rSvKXJhNNrSNmiHU4UCt6tMhsio4PnaDQYoMhtsAoytfKzcHpSTgqDbN2oEzfqHKSrkoMmw638hnBpUU4",
  "key41": "3WYw5hMfecNA3sZwJbWBCT2H7eCSy3Q48HTG54iG21VtbKr8kSmCbBGvgFKLcLoENjaoGe9r3CzgTEnYou87iB4v",
  "key42": "3HigjAjuGKiLvEsjiFNXvEwGGumbQcC4mgfqNDpP2JeqDrzbPsyRX3HjCwwHFrw9q9nvSZUtQA4XpxPvbQ43z7Xa",
  "key43": "4A7tzS2xQvsocCEp6S5PtLwyef71tHtqynRAPmQWEDVBven1BksNYRcZ6E4hBJ33JzKe3PCr6GciUJpjSf5jBZuq",
  "key44": "2QyZ3QP8FHQ4dYchPboGn18crQL4UsqwBW927P6vGiFyojX7LaeW2MgU7TjxuVe6Bu8u8XQ81cEkZPLRYyC3J8Fd",
  "key45": "2Bgf9HGFJAgWFZSfQBBCRLbFCBYA2ne3DCeTPFgWnnTbLV1NUjCFFQc14Wc8psYNis9LS63skH1eCi26jNQAZMdS",
  "key46": "28McGYYhoo5dhRbZ6xJxrNbhwenb1CthzB4ERLuBr7QJExbAmDHqK7os9ZjR1GVsxwcNtATe6vrDUmbc3U53sxcx",
  "key47": "4nEDFU6zjnDBrb29pQEjPnnhXf62ztMAYb5a26uKjGsVi9tZWXPYr6gEyEtgdCTbMFkXNnekYwAyXQFbjcuAbyh8",
  "key48": "GbCvkfT3TT8eReBKPmX5DsCqy795AjxKYeYcRMvSBknG8iuMCzP25UjNS84j5oMkJzEEVKnz4PqdfVkwuXvh4hX",
  "key49": "4jEr223jxBwrYPVGeWHoLA6YcYsBpuDDRiwT1EbHZJGXxGDTvpRr9we7hJK71inaupxR7fu1YZSZCTMSCJfJzS3H"
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
