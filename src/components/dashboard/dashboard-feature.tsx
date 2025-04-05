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
    "BXNtf3geT1BbNweAt1BMV3mr1yNrNZkXiKDRnm1uSjRtnjS4vJKsjRe6ioXPXS1gFZqvXRr3dzddEHnHh9Sq7Fa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pPkXrvK3chfhYARsPPQeHRMQYz1RRGMKJGNKYx93q1ZT3m9VHtG6R5gPcxwCQeF6Wg9YjW6B59emDFL1d47Hmn1",
  "key1": "3kQtVKjWfVuYPZKjXNcyLESdHC4UeYXDYwUNB19xggxTCQT52hifYEoumCv4HdvThsh36pkVamdQpTekbFojXiqE",
  "key2": "62rn1jrb1bvq6zaKskhWDt3oms1mFJXyvS8y2tLrQeU57R3GKG6x7gxkzdroFxdohqh91rph7imW6D161kTAESaU",
  "key3": "2zQ53EZDjHDKKS8TgZRbUoDbf24LCmBwkyS7EkGe3WtaWjJc19PRaGDY722yGtMNvgczWVz6AJhoi3uJDzFHF4Bf",
  "key4": "5N34iv1ZPWsxNui17QR4FpjbwzmxbsrKuQThgVgasyfa8a62w6n35DjUXDRCnVKRqrUgH3gSED6K9s1EK3NbJJue",
  "key5": "3hJzmXx1aTejCee2Dxj7pim3NaBNPq2j2k8Nb3KeVawrkyZLHLMKXH72DP3xRZDgMm21DrLfXSd8vFuHtsor8FDp",
  "key6": "54mvkyTMJUAgh1Anzw4TvpHCwxaC3KYiZbEJWwVPNxGZQLMAgubL982myUkYxba5oAUM3VVjBQdbQAF5DZpx2dgP",
  "key7": "5RNLmyPsErZ2P34AZ7WRmdrUYSPktgeWNZZP9SMWLVujjL7HYP3o1ppbe9zqQWMSaQKHouDxMqYAjALFKyECedrv",
  "key8": "3N2SKUXoKn9EAmLmAhajeEWTnYrjFk2morfQDC8KsrrrUC98T4tryTwpqQxv1MqA3sRjKEG3wWGPX2W36ZZyxSuD",
  "key9": "5pmSet5icfQDet9KEVaA5JSNiD7MMneTu2pYFiVARZUyxgsbKZ8b9sdMqTLqXyfBXxiKS8Hd4HUL2d9FLaa9WZgH",
  "key10": "3gFc2GVqFwteFMgSYJLNS5L4WZkX6kBbcksUF8KPsYTL1AevSkU5X3Jsoa72rfPuxh3vzpcSDYFehPed8tPVTMLf",
  "key11": "3exLMksYrM97zXUr5uJ8RYUHqqdn4vxbrgyadBfQTa7uu4oUJnVo98vLwuWFVj2BVVaX6c2xKPaJAbk7YLBbynHH",
  "key12": "2bavoGd7FPVkdztXZG1siJi3D8NhwrPdPLSxXj2Z63rtnj64JA7hCXFFaXGEn5DJVyTrAsNXj7U4JpND9qzGaMCV",
  "key13": "2K6HodhtFx3k1rTDnMugtZQ5CKxsK1532BjPWtNRbZoMAYTecqhAW8GHgPAVKm3b1M69hpJ2QqTGQU9hzxT7uJyL",
  "key14": "4jMcSaXgTCY56gwokRHWeJNSJb4APp1HkRwfmxShfh25D38ub5bZH6MnxqfJKWkeSuuqqYz61ch5e6jDCPDVmdm8",
  "key15": "dmB9d4VBAtesTHtbB9zLn5UHpHD7gCNj1EftZU9kwiAoz2ckuqCNX3i79mFVRiamw5mfawSWydBSM2d3JXsawMt",
  "key16": "2FXvMKm1tvGxYBstVknmW9xG1gyBDFxQSddqkwmbzh1zzEKPYeYRb1d8jA6f66b3YhLqhuoWRdTJjCfE8HACaYEX",
  "key17": "3LuGbAib29f2qbUWUBAyH8HnhxN3zN6muu3kNQZf54cEmnCahuWZjsSSkSN5eMB4xvn747bhk8obptSqgukky96M",
  "key18": "5dJhE57VmXD3jqKX3Zk8yPxiYWaRFvQwZywyxnGQxGzjV8LcRHSHvVr1oSKx5ySqWvUV6UFgnSyAbdzbyvNDG1nf",
  "key19": "8LMgBDLLGhHYdaxB36hz6q1MoRFkk1A1WT3Hhe2wTahBLQ5xnRjckLrjabtJ1CovuitbqZFhFcyoRcUqtPGfk6Z",
  "key20": "5cn5SRAkzbqa9UNKucR4EHg6bxMVZgAiD6tMTKePUUtk3EsfqjdKsEXxun7cHXXEWXjjo1cePKYcVtB6c99USkbz",
  "key21": "3VaEgfY1VKxd1Wmo64CiHZCJpzqfeRsk6pH2VXjWK6CTquqoEgJi1Ttb7SG8WaqsbHMvwwZKc6p8axSKSH51zW1e",
  "key22": "2pWByEqfbgkcPDUeNUrxpcyWL4SWGt8LVB3VKBXAdm37mq5Y8PSqKmpQv3PctHqdT5pg75JwxoHL6oSC5v4gdyCb",
  "key23": "3JfwYuJc7kW9tfBVGoxQuq85pz2U55aDPbfWWFjHE1jNJGXbBiNwZSPLXbHZG28UUd1Q5bpvQJcSwgvpwRaUaQNR",
  "key24": "2c7dtj1uJY4t7By7AV5StNvnYUxekSHxzswaKkgZ7AEeagmSh7wYzZ7ebV63FFrVqny8VGXCvvWMQ2m8yVKwJBeR",
  "key25": "3R7LyaWcnHXjQkpq3NHoXE7AnJteXFP4behLYSKfmjgnTw82MUQGHqo363tM9qJ8u6XDR37oY1Zb3mFSZHdbZn9y",
  "key26": "2Fb1XmMsbpDwQtQM2cC4ZKmqr2A1ePvAhQxWA23sN3AGJFy179MV35fLYqKPkDT1L4s5rLoeyekSmWuMPh36bNha",
  "key27": "9BeJfKwYH34Gt7Rw98nkt8kE5cHz2NH4NepwJC7Mgdd2mDQA9jQB2nSE8Pz5Aeq7GGkQQzfoY2z1ibz479RHUrK",
  "key28": "5n2CRWP8NAK1MxzCaKLuiGpLV8kypHRVg3ygonhh4nLxbZnrywAFwrvf2ZJ7eQCkvUE45eeiMc4cCVFfLCHKZe1V",
  "key29": "66KPXwAGd2tsvCbvBkPhiKUQrLwQtJiyNiKueG8cMfrGRHqsWAxWt24ngmpemCHWzvaT2FrJKxcdGs91Ces4hzS9",
  "key30": "43cFCbB4PP4AR24FcerYet2uXsNK4RWmJovbUfrRU6AjE3q3YtJXhhQ9fkbfuq2vqoB45JRsCxn43hNgQAQhH7bk",
  "key31": "bdFLqHaegpxvugpGTKthNhkwdDq8RTkZGJzkartnRbrqLPvHfqmLcj8uRaVDVw8d5rRzas1sjKc2PG1TTu1evpJ",
  "key32": "3917eEiCzrf7jajcA8WrpKrwueJtn9HPYqgAECQkNuMKVfXfJWowKsjoVQwgLm79xAuwwjKGE2ZKM2GzpdsN5uzq",
  "key33": "27mPQE9zfMzGm1bPrdcpjWihtCjL9S1ffrtAmEQibEKPXgbmxoYzcdrtjosrFGAeyB6b2coShrzLy6bbjuVWDC3D",
  "key34": "2if7PWeW9AebMxBYeF4BgH6eqqG97GpZx28NXNtu5FGzhPwVVmyn1RxWi1Tst9b9e6dmGxDA4JATanTMc3S8Y6zU",
  "key35": "5r7eFYyy74KBvNR8ueEnBFt1w4p3V9LrTuFmkxYBXRByFtbesEn26z2WJ3A3D6B59CtsHKwZJT2TtVy9fcdgEGCM",
  "key36": "4F5FVwxEos9GnSh4DzzbQdCJfCyxyFhwyVnN2BviuGvMb8vvTbJAjERh7GUBJdK2bJGWRUKrE2oNtQ7XXVQeSfAH",
  "key37": "5Ev71JvUsyq1NB93asNxzzcSryBoxNMEsuJCwAD6dL6JXy2hkfptQ8FLKAbTXuyMeT79B3fKVFTazWSXMT6b41F1",
  "key38": "31unZm6AkroV9Au3fcB8auxG9TV8ndUAeZemSFk35ryVSKPVFS8gb9Pcouqan3NiXjzvSNkCjoqQkLnSK1ucNw5L",
  "key39": "5DTCCMsbxTXvhhipd4JkdwGxCW1gTvC14auGGukYytsemgPtwoF3FjH1ibWTj7JAGxWxRBYa4YfzEr77Z5SUYChM",
  "key40": "3gJs9qN5DMabXogDMb9R2tDAbgPAbWu4EyPY25nWULq6LdugbTp4taY2Lo5gagWhTgwwQ5LYaE9UeT6i2PRZK8n7",
  "key41": "3dpRbmQPZyJLanXtuGoyeFfBUPZZNhM3PGj2QNs5wMZFsyMvinMKtjc9zRSRgW4MVTatMYDE8WFhUuFMFRmCk737",
  "key42": "SxE7ZjsWVAbNqE61umT9PuDrxyMqnA7934NYGLU9oCbDTPbSoUzYDj9UZDdKaLEDdoWEhTMb4emXqCzVKGzZfLf",
  "key43": "FBxSTHiUraxshRVx4wiMSBNkMVhgt568R1E7GbYD15udCBVwVyVjQvQK2CRUB85qe2wM87HrZGmvXpBFYPNW2r4",
  "key44": "4LxhQ62MfSLNacd6SFaroPMyUqHLF5mSuL58W7nXbSxJqMx1Nj2b5awwWQ4cbfbZiKmJha3ifGJ4PtvbKMRJhpnr",
  "key45": "5SeAofpGqp49fpgvNdpEV7UmT2z45zzueaBV68FvczTdHxb5eYQCZri7vm7GctuDF8PfsQiAqaam8ZFkRnHqDgX4",
  "key46": "kPYM2zX2vwHxoNDq9fgjE3eHqtYfpTHf8S6L2wcvJrbzqJzsSLXfWgtyfBcD74vX1fFeHpfdNmNE3CovE4Rb5Z8",
  "key47": "2X3VZa2dmyTB84i5Fs5kg8ktfHYfvVbSWbA3aBrDVfHYUeLLMXLDf9NUdkLNrv5VYvVsZ6DviKSSPF1jFWtWotkh",
  "key48": "Z6ucAZvChP97DHjGtjVe2fe4CmTQFW4Y7V3byLmWnZSD8AjmGr9ameBjoT6mE79ppNYjkQNXfuo5fmupJuz2CqK"
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
