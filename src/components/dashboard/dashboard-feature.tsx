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
    "54tnWKrME3SvEgC6GogCy3e3H7HSAcSzUs7TDgsn2C6sQZRj3pqL2v3gznshMFSXvxoWRa674i1Jw7BXEs7bJ5qo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25sYe7AJV6rtqJa9gWgBmqUZBvRKVDqPMD8hFF5Sw7PKCNJot7vhyVchzFWaAzfK1gHtmuQ4qBrcpPTeQCmx6juF",
  "key1": "ecrC5miRFHxK5EpvaXx27T45ZwC9ErByfRBSHPE4hHZX4WLHb1AbNLzpr6T99dN1znpJUJDGmYXnSCXkxysRxfh",
  "key2": "5KrxVV9qTXGdcTG4mMX7PsuH7DiY3BHiZvzbdXvN7yo5wx3pSJTvcnhvUXkY69pYQtMCfNq27jyz9t6HkBgk1PXW",
  "key3": "4pbY43WNFGyM3Bcm9o3TV2Mwf8e6ADEz7iq71Se2qhArFnz2isuJzHaG2UxvHaeyGfSYh45CNSnMatCcStmKxFH4",
  "key4": "3ad9YyxuMVPp9uFjRWQ4XzDwGtBAZQqFXUUtNbVWzkbNjEPZHAEwUUDnk9zF6fgnNGUykjQzvq1fiXyG6GGyvTZT",
  "key5": "5YE4wQ9bvR3gQYQdAc42ttgWBog784pumHA4q8EAxv31NePZcuoEnp4CscbhLBknBgydPsVB6VuVcJzDf5oSu96q",
  "key6": "2EqTjJpgBcNH5A5be9NMkTsYRXb5mUagQBc7tbfKRoF4BQwRskv7LmPF5scHDRSX5NRESNAN4j8UQoNDKVrvupoh",
  "key7": "5AhiyhBYGWTsxaG17YKsfmTC6GJf5ikb7QNT2EzDJ8JESM5W2nCYzAWZrxK7TYYu2K36Jp31Q4v2AoMe7iYTMNap",
  "key8": "3atvgWUoZ2us1N4VT2C3yRpu4cJCcxDtSEQ1KpKRDSxcm5uTvXEg94hZK2699X4sMoMDN6U1ArsLN4rQDrYLVpgE",
  "key9": "5NahVPKDrVhDs7WDZQtBVD7fk4Lkv2934ovx1a9qu1JVwJwcFHHNjdCDktscdDbtsGnfdxe2ygV9rg6Vqh1FEP9N",
  "key10": "p7LGaJxrLVzzxuKCpEDtG31ySiNMPXRSgncn7BnyfQ3A7AY8V7YAbPjCs2Zzs829NTXT3A1jQgdsbWFvGd4ihMo",
  "key11": "4UfgU9uEQ8rPqoXvi3DRJsb2K47HDNABixwkYDLhvfmUQ4unM6MxA2SJ6LHqDnR6PuWGtxnyTfor9gnMeExExpJW",
  "key12": "4eGQaVLiBNd9NT3yFGCEfnmzLYLwX8nsavFhtUuKwEBLiiLRmiSN7HWcyTZfA53fuN6omVkR8dApWrrQExDWN7Sn",
  "key13": "2ucymuFuxR87j2HxQFRBWw2XtHuy2hScxZm3WfWnnbN2yYo1PYJqW1sFY4STyHXpeJ32cyx58kNpzNji6KxbkAvR",
  "key14": "4VZYr9adpZo3LtziA5PPMHD1ghz1ekWVjukMQkM7B85MfhLr3BCVA3U42KQKiShMewHemxM8pkTCJRwM7ENtBmus",
  "key15": "DxhTp8BESC2G5zMLmqFSBWtDR4UAUxaD9vHfk6AFyYe66Ree1sAHb3LQnreYUaiXZRntrCtNZMs9pJPWcUWmRBH",
  "key16": "51xBuC7QdNsX3gEZicyccqdKPfqyDqc29tSX5BcA7X66SdiNGE2cv7j1dNDj5X8bhBHsb19QjrLqCHD6hu57R6Md",
  "key17": "tH6J7ae3jCMFoixc9Q6BBE5s9ykJ21wLjonLNLFm6J4yCkbVpcB2Asmzfgv2c3bXyHUPRpZFXRL7Zk9LazCNsru",
  "key18": "5BP5qMniQPiH6KZf4k41Vs2ss3QvLecMjosJ4vJnnRNGJedJQUUh4QkKxcApLjTPQTEAQxBEF8An6Jo3rSTg1Fku",
  "key19": "4pATRnPjcwGTB1w78SDJRfTchFaqXwcYNbg9YXVjtpZPuMr5JqNdxcT3UQs3wPcb8sAKkg2WaXwqs8YkDnugZSGP",
  "key20": "2Zr7pgyTHzp6Q7dQzFNWJc6YLXDMGasCagqzWqa1xXJTCALqzNFt1PQUwksMAfEGssdzc9vdKRAwXA7fQKtPNPGZ",
  "key21": "iLtyNCxEu3UYV668Vd7d12rfoAkNjJNcShN8p6NuAHR4pWKxyTBG65YhKUpm2grwzxoFPdRcTZ1b5CktJcbWrt8",
  "key22": "3TgBJJnHTfR1sGBdVDbgUPTPYwd7NzmtuqddvfEzHzosvAdogFHooX31NC2NM94yMZ2a7zM2D4WsnT9S7mBxydU1",
  "key23": "5UH9V6wk8mS8c5cDyE6xVJYzKRZeD8hSigxSY3mX8oGbTrvdN33JeMjKw5AEsFHH9mQ5JrrTaEZCcpSJyomuGGE2",
  "key24": "58PherBTnPv1MJpp9ZCv8gaxPskyio5Wz9dVmyxrJuXmPm4DCdfVyxVRojcVYQd7E66kF85AzPetHgqEA5Xw7gQB",
  "key25": "35kvUrETXTtrjm92h4TKpkDt3sMH58TUeWxRUzmqR7bDf7oas2Rdgwuzw8arrZT7ewfHiQeSu3RtFuhvjfNhhuMS",
  "key26": "eorMfsNw59TMhZ4B3bmGoLEAZ2ZX32UTPgEthmqtTjKHet8DdsNUm97DD62siQqeA2X5cu7zBwBy3mzxKWf7x2E",
  "key27": "KfiHGYfRQo57uQahgWSnHiyhpaQbGPrAsv6eA7we92iWUqyLcKMoDPSNUi9WDPy6ZntghMFxZjPwr2W3k2xQe2j",
  "key28": "27AsqThpvZRPHhx2X8Cc4nFVUeRT45FKgEgUtihcDcemAaE63tFHjs5Bgn2tCoSFnb6QCtWG1efNZb32m5tkzxJ3",
  "key29": "37Rhv2kyghv7hKPQBT43hNAJCHD94ymM28sDw4NY1m8qV3s2jsGNRHpQAcu2L2JB3QTs4zaufV2kfE7JiAjhC2z7",
  "key30": "5aHvcuF9zZZ4VZZu4KE9RBDMm4RwU7jnabZ9KH2HGrPSNaCdCUnJmqT61Sr3k9Rd1dExanRzqdQcpLbesFDRbiW8",
  "key31": "vMRa5emac1crcD3cTP1Uub8jH76NcaiwQdPGKMBS27Akt6HhVktqvhSM4BMNcSbHzXAtHzuaqqBB8nkq1aiQjcU",
  "key32": "4bB6ZFXwrVqTekE8Bs5wX1yohDKPkRgZzfG3gKKz5p5bGXfL7w8xbJ8ntneCLySXnJLB2x37Lvg8cZHiD2JcNUEm",
  "key33": "eg4tohxvkJHoRvSeZkvfCbYLnHTHJJudH9VhhE9d2C2RmVsieeLD7AW9cZk4GfRyUJBLmfr8awT2AVxEH2bfubJ",
  "key34": "4YEnQeL88zEA8Yc7jQfHUEw4mTbRf2rAyDACaPcPkghHkfGkxeRWh3UaHMTEm7iXh96PMdviVFL78zumNDszZxJt",
  "key35": "2k3LyhAPn6M4j6XAEWeumpySfX91rg9mehkPxK9URiVyDcMw8frG9tdb56Z2YujDzqndHH2Ep2JjQ5Mo2tGePPon",
  "key36": "27egtSgsUaha8112itmBrGHHcEUbGdueKsYBVZJCyshuA3NjCGsNeCKRV9QF7rVTbpmuDatpnUW7SwGDmCWmYtGR",
  "key37": "2GKR1jgqsoSeR83ZN8ACaCFiZrqF7wkfpKMAaBiC1jznKiVjDbP6aoFkKRcn7H8VrhWfwGtQP8gFHYsFg41AxTHz",
  "key38": "4UVoJqnoCbm5RyaXUj2Aeg7oAzd2j3fxqJYv4egegCVx9rcj5nBppGCXPAeS6nzgcipYPUit59ZWGpmc7HPzC77z",
  "key39": "2cZCw6yLJAqc4wvbnoTEWrY867rXcnPx2yhkNfRidjM6ewx7d88N9BonZsWqwtJyVJPMAwC1jvYBnVboUfshoPDQ",
  "key40": "2EnVh6UFcSZ1Pknt3ffkcLvxzTzpiNSSfoUXvYnauxMDgQcRa1RpjsLpwy8czVHyoE5mUBPDQHKoPiXi4oFhse8u",
  "key41": "4VN6pqt5YtACdgcbo9S2qafYKfYEzNFhbMZzUT1S49Xt96sqLno5ZSkCA1zQSLaxJ569rii3vGdttjnzSpaVASUD",
  "key42": "2H1FCaebQSn9tCcQBAymY1V24y5RCj4C3H1qoeJs2tXsBFScKNVR1AwKVd1gcDpMrkNCNYqRsPMwCM4HU6tPp8pi",
  "key43": "62FtYY3dpikpBvMoU3WW1wiwq9Ut6oVmphW5nPB7WhwEZQtV2vTL1rFZijJ6hsYJB5tHGXKzTLCDUekGHmF3kH1u",
  "key44": "5CiwCNtPsnnKo4g6Xw9kbzQmH8rtXWuQhUMNkTrXUrzXeu2Hhxsi2Aca4e3UzSaeJro33mGyMEQz7rhcQ7PdT6sn",
  "key45": "3t47EoF7EZfCxqCJBEzje7mbWL3mAg87FYnp4hcjGjV7ZSTt3NF54SHPDU3294AmETDv8DMHcEoTwewARnsHQg5J",
  "key46": "3jnkj9fdrb7bT2atjzFh77iLXqfZW5XQh2vxX1i4XSurKrb6wdZc5JdMXPTYK5TLUHgfZzhewStAAFPgVC2BtHHr",
  "key47": "ig9Lw9g3PVoX1iRo8LaNNVuh5s1urpvaQHosQkT7WQigTpsJQYmeA8Uv29YH6wddv4hELSk23kNKQN6jnF2eBQ5"
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
