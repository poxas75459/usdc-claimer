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
    "dL2vvsJDzruoFusF7dbHjGamrj9p22fc5gwggLA4SHHi5C4YrMuHuqzHw8GxYW2w3rZkhNyDBB95esK2MG2unBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "342T3GdHSUYto1nXT6zDGewwtwhND4R5KScFNioZwq4YJtyDBMY9xKRLSVUzVDEGC5eY9WkkFpDKMuWRkh9VTm61",
  "key1": "2jAsBAZtwFowcbAtUTZwDnaRKcbzz2U6eBk8q9njHznr5KboXKw7y5bNXA4DjWhKmfNPMCUBouKYXE4YMQiu7MEF",
  "key2": "3yAvFifCFhz99MHznvmTyPv64qeBowkmb1XYRbjTp5GdZ5a6CKEd91qzHzsAEGyDCmfaFkxNEMYmmL5uBXksnJTt",
  "key3": "2JY7a8Ebw329NwLVAMejd6pHbJWTe8F2Z2YdDZPazr2mS64WgV3rWjoxQUKqTy6S5Zp6viu4BytHfEDF1p6XbHgm",
  "key4": "5M7Lq2vefEf4uipzSbkbF3TPvJ7P3jUSKWa1q7NycgQpumLoQDNyNBMNkpjrxLW59Kt2Kgz64p9gy3Hs6DRDA1ai",
  "key5": "2kxLYhYJnRC4zu5bCYbvxFCNUuTNVrmHpDPx8T7uPY1Urt4Z4vKPxAnu71TnyF1DzengPm5gKxPkKeGAXKKb4ghk",
  "key6": "5msCPvupZqPckJ6kXYNm3hDSw6ybDog6TBAsCaYu5xorXjQAwjQ3v197fD8FKVxkDpZQjpAcjpqf9KS948gjZXUS",
  "key7": "52y1HoMyGxe3duDTvXvAGSvnWcjCEHT87KesXoVbxfWvqueT69AQUKBGc86wRyTvqoPQemNe2BYezNC19NHoo38h",
  "key8": "3xmRR7TxzUeJsSsx2QEktFxWvfDfK7uafdzPgTyWET2aZ1JkZzAhEPYsQjHQCrzTPkS7aLVAMSxaKE2Jo32wZdMR",
  "key9": "4wxezPMr5qs1sZcHxwfVTHBvpxkVfuNxsfKD2xBxtuCURjNahBPLkf8Gnbbcx2i5itATcVm826PBsiizZr1bpUrG",
  "key10": "XD6uuvo1rD7UpQjjKF1ipbuXCUjqw8J1UsnVtK4nZUBFrcqF7wjdviGYMPBzeRUpRABLgRifQbJNxULoWt2X3jZ",
  "key11": "YPcgD72YvHLm7btp5ehjd1pdvCAyMFcmkrrHzGYgkJZ4igiSvcG7yeN6DeDKnqtc1PJCg93SxkE79pLnmgtzvo4",
  "key12": "5rD5FLxArdKCF3yjiGaiNRjmyn4HV9GkZCtkqS34zFikthCzRNZodmNNjCfpmWP6cheQ66GifDDDi5uWJ1EiCVUA",
  "key13": "3YRvXSYX7uLPhRq4L7JzYgqC5HA7NuzFfPBXiY3XhifkMjx1u3CfQui9MxnsS1edpFU1WmZjk84fbAR4i4cXHELi",
  "key14": "3mvtx3JeHRrRfbtHaceA2SgqQxxHvporPWJzSDQF93mrXekhEBkB33FH5fK3TV2AhQZK8jaohUSLPRUHJ8Kvgugx",
  "key15": "GNYwVfXUCKwzPgFSb7qfvxtsSdNgq415jFiQLdJGivBcdsMaSL9qSShdtyxEK8MWTbwEWE5CknrHGriYST3mUFx",
  "key16": "ffLthJj33a7upsbhH4sRLB9FpEpA6MJ1h4w3iPsEouDstQ4nNhpuqeVYJGvJ7vtmzN2LUHRowh9TQitSyejNqPu",
  "key17": "595HvjMZvxztALeqqwWBVXQbcKjrkdY92SNz5wN1Bc9R9Lpy7Wjx9pb9dEs43CgFvZFUE2Z9FC2p3tRdUZsQf8Df",
  "key18": "2CLuudzaKVYSQTQdjWNmptJZD1tqkFtRHH1ZbNZwYF5mCqcvXuN8X3Qq8ZML6TcdR84G24zjYPmcxoHLtBBjq57g",
  "key19": "5n7y61HLpsZBmUPwhKrxd4py3J5AFwAjM6eKPP9RXM43o5wrsqTLnaxHP2Nmoq99FVw6PjHUk1Poo1QViara1Us",
  "key20": "2cu2x7SBC8kfVq8ukKD2WTwGkwETbmdLfkYCwtQykXiVmRbdX7qdZc18ysKhPDzvzbe7C97X2oRkTRvhhHQqSJGR",
  "key21": "4rzsq7LiZnimRyNJLEoaVMkBLc3jPCkYuvssaTUzENpzNmZP6Jr4pSKBnVH4CuEQuyyLUcBHnCTrpdos94seKDTK",
  "key22": "22jmRBn167br9gZvrYiazVEbzdWctzGFV3dugUtcxoErgmxRctsfFsSYQEMzxVBNXi1vtymzS3JnS2GCxZraHPRW",
  "key23": "4No4VHudGNn5RhngjgCQamCVm8qVFXC13t2pJMYrffxjhatrhSNNpAmDWU38yM2bXb6zynDDvPtR7SeUAAxJzSnk",
  "key24": "5s8tYeFmLMZsP7tQSAt696cD46voS6WRSuXxiwnotBt4DvDbjZSSEw4TnBVyAErtVjeARubRuneb2F6ZRR1cpUeh",
  "key25": "3ZeUuapdfuov1qG3YWGqh5j2ooL8Xmc2U3onaFQPE36gVLzV7Gm1foPAb5Lpo4XC8RCdFUrp4WRMhYtKgwMRD9pb",
  "key26": "2bV6KSCGPcPWnmho5n1UtW9EkLzQhEfLMv2WQQsD3KGUxHucmnpEQgfacPnx21eV4BYPtu6j9hHYA2PdqUjZhwHv",
  "key27": "215q3Y8ByQokCb971jDiaU3KhG7LcVGDLK81yhCin2vWjUmkwrtcXd42ke9vXEmsg9MwA3VuSGyL5oG5WC5FqoDo",
  "key28": "2ecUWmNy4pP8Ycg4kf4Q15p4m2zTZs1m5EW3TX6bXfNmDVj2w78D3UD1dM7wgy9szCykFtcPeTXa1ZfDJEwAeAsr",
  "key29": "3ApeJmU1WpMbcEm459BLBAwqaSgPHEZnBtzqVHh6XYs6uehKzPVUMo2dL36AGXTkDZhoNrWd8xyHjo7wBgfLCh1J",
  "key30": "3xndoLByXgCFmFDKyHBDZTSJUbb593zSGyAaTZQygWsHnHGAse4uSYa3iyv49VZuVmVHSNnFnMgFWdyJnDj4CwMe",
  "key31": "ytCXrz5ySgnYuQSH12weZ8y9muntSY2hSr2FtaHDCvQb6c755g2ZtZygS3h4Rj8FU6oXqFJCjBDmc69pLZvQ9kb",
  "key32": "5aN1w5cEbLNvevJSuSfdJifeSUvLoP7uiw5DznXwf9KtSVSpvK8BQR8iNzgR5NkLK4PDhe3zQcLAYA47L3KTCxdr",
  "key33": "3E4zyfv1L4HiDV7BXiFczfpFoitaXEi55oi1ahJxTxMABSA1pZLwTqkcx4vfN5UXW5BM76MHhLrh5SMyVB6nfE5S",
  "key34": "4mxSXoAj4RXxALKKgNCrMB37VFUKmxtMxmwo9SaeL7cQQwTQ8Nrqwf2vGHaDqq9riXpFRFiLZ9o4xhW8687A9MAY",
  "key35": "2G45GcxKdbWKwMVJPrSh682rdLouUXkZUzF7XwfW7x1PWrELGJzFBe7ZPEDsEWjCQo6PqxyPXc6168N7RX89JC51",
  "key36": "37kgQGgWpxgQbfTYRMK4Vr7EdAtQ3MLScJWpUwwpJXcCM1EETNt8L3VwRrzkhNvrkzaWX2h98sFrftg2VLVSeQk6",
  "key37": "43aATHtccDSSkwC9D9eo5inEeA6sYDsofwwHy4KWdyp1tyYYJHFWDTcv4PKVQYQjrHGqc1fmu1gMS7ubePrMwtvY",
  "key38": "3jY6u92NHeNAt9wcxh1VDcWp7nHbuwWMJpuHkrd5zaQ23973dfG6XwTX6i5xfxaszy2NPvKe4sEqZ2r7KgrURmwT",
  "key39": "52zz37pKhz8VwLbBUNRv7AsHTyS584auNWjcPe1562pF6bXybmh4rXp5Yj3LaZon1mxkRy8i3TRLAGjHi4456DKe",
  "key40": "4u5YgYkSYiRpreH1RkMNC7wjX27xmw354mZeh7DMxMri64Aj8gB2Ro6QURRuuWterVSMxN5QBoEJpkbYPvemCBzS",
  "key41": "vNNj2xeqawjZ2BfVnU4yLKwQeVmTPtQAJgxho5tPEhdGM3FJMDzkxbwF3KJRE3kFkA7bf171Lr1DaHPagFSBPfe"
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
