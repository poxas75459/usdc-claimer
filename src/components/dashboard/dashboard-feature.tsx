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
    "2CT1n5VT8RSk2ukxTbT54mWr1itMhBRv9Q3nhx7AnjndbYFQb2dytRSzDHWoi9K531o9H1FVJ5RjVKhvRQrA6s7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j3nyr2xQnHShhyoXKKuYPyVEH94YojWxTnYHMgrwZhtS1UEtUJDLN9Hz43Tm4k7MbZiHedrxGV7rkFnDRcBbfUk",
  "key1": "5zK1r6aHSNv8hQFADwXgBQzmCgjmN3aLBiGuRbJSm9MpZ8rFAnqmVViKrSdYtxEzLBVbXXG23FdjBykkxBsK3UHG",
  "key2": "2WATd5mSBGmcFZahC5iPEXkWfhRFEzPmiTZ1Z6qTZLHf5EYZP1A8snEiuJ16MkCyVr4ZeKh8AKjRGkSjFQfhfg3J",
  "key3": "3tnF2WB85mvFNvDaSvWw9MREa4bPXxTserEwtaAtfyNd9hVHywDnFTrU1k3nMmE59WMgqAsfUBvd3e2xXBm472Mo",
  "key4": "ZpEkfPjcvaRdVMPh71Zpf5hNEQHxS6ehPdmtougvJAJbBBrXb4aPuQMCdZ5VacUHv9rop565YWrZ3WgVWgekN92",
  "key5": "5FdfbhTgYqopF9qw1hHHxBe5H3zoDafiMHW8wR9SaFkv31FFvX8hJUVQYeBSjinCh5M5r1xpu7CFHz19TKEPyEhh",
  "key6": "5H9rkz2Ldbj2FkKjYAFpwRh52EtPZikaYZY75KG885Mwz3MPJ2jhTbiMviTxL3zdgmkjhyhykzbRXCCZYeMKr4kt",
  "key7": "3XCnLsNjzzNBpMckdkDqixmuqsSoyy3vvTigRSrqdKEdpJmrybaRgbcRU7HN8V1QVWV317WDhMcrPujRTzsaC9TR",
  "key8": "4t7KJAHT7FsnHpBX8kJdEt1Ck93pb2DmKXKmMjrc98QJFY8p5qYNunDF98ChHJKWPryHDkNjgJpy2x5c5AB9Uq2t",
  "key9": "4oQ5kEpDWRwzxaWzLdqvgL698NMxi2opP4rYmNtabHMY1tDLccqed9LHbSV1bja45sYKmSJVbbZJyFrB5Luy9sZE",
  "key10": "5sy3EPGHZA8q95JUAoh3ZNmLNJyqiLVAR1HiqKfm8SvAkmh4n8Syk5gZ7gxfNVytu4xhmGeBN5yoT4vXMwXFA674",
  "key11": "43Kd7szfMc423cBzk7V9W8ojN4UYFpBRXuLGjUNvijmwNAu2GQb9WziLKunniq6JVGgikqJjGVu7PugjXMYsc5NJ",
  "key12": "4j9xt6f71u5wGAMjKZVD8HdghM5n5PBwa93Uy6DALarzKjNA4Kb2k1XR4FiqYjpqBYPwuRpnp3MiT4V3HhEiyQda",
  "key13": "pNMSNPnSunuK93G6Nuq1yxDPZiZbedF8o6gvfSA2jYN6evyVCZger2FajUyiBhL7TfjX5UDgEJ6QvQ1PE3sZsxX",
  "key14": "5XruZ1fXkWCXtUDfPqPVhgYXTgfJntbzJkPvJ2bBUxG1rYswMYDzBhkTzojbEcbyWb3jo1m4DHvKhm9wCEiW9ieo",
  "key15": "3gsrQqLNBuTteJykfcPvupyquQu4euACukCS1vNoPLwGwsKXepfBGi7MgumSqpk3r5o8nnxojykpVodvoUV3jb5F",
  "key16": "zgeWwsnsB6yQWCpZoVUyTJbZZUbc4S5qPX2oyioRVsWx5kyGiZdQj7gztUXrVCUkT4CZEKb9KbGoLPiqcNR7gQe",
  "key17": "2zQij7ny11djRpQz9qPm4GX5AtCqrFrUsZYGYpnVVJnWi2C33bLiK2o3C9PBWngx63rutMpKAT65KBBrqzBjp49A",
  "key18": "GGsLS3FeW6Wgwdg9PT5DdZWmWsN2TFNuj2JpfkzgFDjszBxXwbgvftEneEVdbGSdg9ro5o8cdELwbUqmnHMK6mE",
  "key19": "2Pm5X2zcYNP45ZpMW5soqUUuazigqhzqBhAe9LWfGfTPrmJNz17dTJDFMpxDXtFjyHcMjS1y2mo3QAj9AGnMfged",
  "key20": "2kZWdh358nSXZMy4SJwdPidGzJtYgG81CGovvBkAAsMpLCE26x8PYnp74DWk25UfMBJWn1iYZJSvJ2AgoCxZ71G9",
  "key21": "63JjqHJ5nGZcRmrNLoiADxTvjJ4fCCXYoETyMAXckv4j3GcBuEBzZ1BhdQ7PpgsXqC9wSHEgVg32D1K7CTEcogph",
  "key22": "4pfm62zrtVTF7N4yQAvFBTUN7PMHZEQy2J3niFpX9K4KVUoeNQaxwBjtvLU2F1VSNP36F88uHACNqKvT3VxD92D",
  "key23": "3SGyWXZbRdCwSphyxZe4D4A933bz3vtSVUyYYmoDaArgeZhKw5Q9gjeZNRPeJuF5zM1mPWKo2PaAZM3M9MatL1Gs",
  "key24": "sDHxTdsz3agre643JcTnQATazj7SXjtv4JpgT64djPFzhqrTZGXNRp4QLtm6HFRBNv8jJHpjSJ4oCJumwbeW2HN",
  "key25": "5A5bFJL6RVgQPGYeJYpsTh1Xp2if4PW1v2bK6Vs3fU4JbL3tszQpe7xpsvFcW2FbL8RDUFFEoycDKG5FdmyPidbv",
  "key26": "4nsmff6ZcjFhm75gN6dQ74QgfvVNWqG1PTMgEbJjGEwfqfSgsGQdXYexRpbC1ZR7hnaXKRQ9ugD3j2P6BVmDfEUP",
  "key27": "2Yfc9ViFTxwQpovjEsiA2D3y67DWwCvzkL8wvBwXjPv32wqLtGt2DyCMWNyUsACmB6RMSjoXDgU5YPBFmCqZDr7n",
  "key28": "5rWRCSV1bN6hrTGS6HKMNj6TMecNk1xYP5d8hQkGHmnc69c7N9ji21SrzfMSTXfm7NfHHLQeNqTc7yP2vH7MvpHJ",
  "key29": "VF6cxhbv5poa5YU29maL4reqsP3zz5Cdoao11PPc3FRQYtpp1XqwHF8pmniH8vPR723K6wSRhnDngCZp5x6DFgK",
  "key30": "27MCd6hHTgok4xDv3caZvQxp5E1QsFkfm8Qwsv6w8P3cnQFyXt7MTFQeb7qqSYk9fER3pWAi7vzZpvpxUKm3gL5L",
  "key31": "5Ln52JPyVDgLpi965xuw2JgCZ21BXGFijzcqFcvr8Nw4zy5eG4mwhPwNfqLk2iVmn1yCPCCjHF91ypWhkAuAMVq7",
  "key32": "4fr1JF9HxuChH72wnH9bzFPdzYAMukoCfUwm5Xk2iuwtQfaMTL6rpxwn1okEmYYnxV1UTFv2gZ4p897CVYo2ZLpB",
  "key33": "4oi7DM8rWi7ANnNv3pKcXzahyr2PqNXxCQ4EVLCKbvRnJpoxysBk3pcqaVG3z4k4JFKQiwrJUpLf3jkTuUVXMAin",
  "key34": "3Yo3c7LSmXsAeSrvgnkFk5gLZeQPv1DHHbFrrSu1mxVGBMoMrJAmjKfqMrzRxcmRRWyvPWSjEpog9eW37VoVJ27S",
  "key35": "2AUg4436NCUqTf6MHJuSR8Cmf9Xmj6aR8mHcJTXBj186tdAaQtTArue4aUCtd17fc3UXCKo3JPhzytNJ4xMtMSr3",
  "key36": "5GgNhsSTCYu9eKcamnJMSgNw3c8AKogSFib4cwgJKswBsiEU3gTSWkSg5EfvY6aXZLqSGWb3AkgqQf436PRR3B7L",
  "key37": "5h3sV3GQ5vq9QxNjYPxwMjFML8fMWaMDfthZsRxcMhiVU2u5rAWrVPsqWTzjxtk6pfrsK4M59gzSNLyZ1oCvqR8C",
  "key38": "5USt8jg2ixdCUxPG4gvV82MynsS2GRcpYo6eFGR831mu1QJXGzsXSyvN7QhnJPbkDdEkB9hhd7HiRuaaTRXeqRfp"
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
