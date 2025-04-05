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
    "5t2VyU2spkZEMFdR8RTP6tP5Zmw2D4GkMB6TDhhpKkNpVzrkRF9kyB9KAPhWsWR3mxtFQ1y5iWNbh8jyJTnp1sp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RHFGCnXdr3ebh86giPRtUXgdNJ83jh8uYa5JztS3C8aTQxxdhETjv7LpCQmpoGM8VrmpumMBcDgUyrByFcjUPRM",
  "key1": "4QfZUqg22MW8TpeQBot1Et5HmuZgB9urUrratGoDu3wLUmepBkm9EU9wtovQhLuT8wbpcSn5Re3shzBNNHF7p1q7",
  "key2": "5HtzNQD3kjanXo7mes1CuB5spdeZmxVbVt6b36rXDL5nuzCPTWu4cL5Dz48NdXQKGnXDpf2ggz256528bfMwNrNF",
  "key3": "2b5ekeaqPo36D871Mz7hPp4C6qAwwihox41a1jeqiYakuvYqAWaM1qFZPgg1bp65pPzuRAPWP1WHtfyrPGLU5Zfb",
  "key4": "2fo2ninGJSpHosYWh3R3p26c4n31KGCkkpVhG4YnkBdYam8USTcqGwdcGgma2wpZTYsiV3K9h7JyNYQvkYJwUBks",
  "key5": "fzjSVaBtTE7Hb66wQJTFevRsfCPtDXN5YY639gVH69mFYRmTqrVP4vA1JqPh5LtsDjBLf5pGg92hMgyeNkui7MS",
  "key6": "4EYyGBCeghoSAqdngddN7fn9Rf9mBn8fSpLHvZNEcqvTx735eFrceND9818wn7KtD3LWgmksmAmzSPgrCod4NdLt",
  "key7": "3M7eH5xjinbGkn9a36iBX1MieK6e4fR4s1D2kC5rmTX95DgH1VfwJCd4AYPYjMYAUi5cY6VXtM9bqpkf4rvYurBi",
  "key8": "ggeeGfibHafFrqfUSU4hkS8Ld86Njp7pL4MxbxkEGyZKFSnpQWCNAM2HqZiGYu6ztZJruNB1GXtBL1KWfuWUThp",
  "key9": "2wAqBisAfuo3CmKxXuhdec84ME7nwoeoVnfpiHBz5UHZdo55fBfcghLFUzaJJ9Mk4p8srKZeBZQYMqjfPyUpKE1D",
  "key10": "3hcfQJBpfVHybb2oMC99nh16PqhF78DBfB1pe5i7DAX7Kr91kkD5gMofFWWKvWjb7AwjJht3EpihJn4YRkcSbzmg",
  "key11": "2swPmXTwofMkrTbPwvSVYpJT8qLaqHnbXbg1Sm4KdYBPoBWPDrKUCtuGv9XGAcm7kRsMw4MtUiM4hjZ71ow5n2J4",
  "key12": "4wiA28vrjw3XyAmLWwBnEndfTL6qU21hzp4anhXPzisAgeLAsFFTDrPT2oDnPe5v9s2kqesC4WeFpuZSnaK28Dhc",
  "key13": "59kcAPyxscdPmSkxDCQF62hMqZEEuDF3rxH5Ch9in5xZKpaJyAi5UKYe6CMVcRgQw9YhbzvC9vf4edohZSeoyhRU",
  "key14": "2f778vpYx6kCVx9x3jYT19FDp1P6HxofqmYdt2sfqRpFLSovAL1bevWZ3w8nMLRJ8evg16cYCtMw3WhujMm6gxQq",
  "key15": "56EbYmhcL4rrQ5ThRgZYMg7UMxigc2HRidwDTEqbF6PU7HqZG8TqVGc8tLTZxHG7JJNbzz1zPu9gao9PvfuFv7sM",
  "key16": "535dg9gfwJLwfsGHCwcBeoFr9u65DUXCHg2Ejr9wdWJrxeH2byhtgtLQJzNMKbQhLmZYvjaKN9rGzTHGXb1xjWDX",
  "key17": "2wpW2qaPTxAfZX28Xm7rynehGkv5jMj5KFS4VoyrrZR9cEaLzXwXiD9EfnLD3QbbY58ASqfFnThAMG5o1v5Xykdh",
  "key18": "4qUKuCThhCUuHZUfQSMgapJJFkRRMAps2p9163MTQv6aakW6svehGyAx7pcwB8g5aDEbGtRzo14zcV6CQSX85NF2",
  "key19": "BYsKPnHnXmHTPppSuXnZ7rk9sqf62csiMWosCXSpHMKrhBMmQTovFsso7h4ToVaBnGvhC3iHyWdyYgFVjG4e8dX",
  "key20": "4f2aMzQKw2G9JeyFbPnL6LNXYYUmpxY69se6jGrp9aKQok8K5ubDJnrcEcDjb415L29KJ7RttS6gHs6VW6CbaaDH",
  "key21": "3R3VBSoZsCxx7V9uEJJP4mKfAfk1YBhKNFyJDETM3M7C2eU4H8RxKp8c6wvwds9qZTSJZeqT46sZzhEdYuPcz9sA",
  "key22": "3upKVhpbbXMtMRmMwZcvH2TxBZdn3VHRSzoiMpdHmdtchPysueFb8yv8XMCbx89PmBbMViMz2qNCmT87GPF8CiaV",
  "key23": "9BvaRYaToEoQ1RRPHhP93xnZXnnaEW48ZrHXs7xCxqicq9z5PJTHVZLfiNEcPgtFzJBy1WE8dYWm8w3ppgR82ES",
  "key24": "DpNbpsMp1VVNDjJ6sw7UBJS8Bkbp57brdwA6oSb9msjTHGXVYQrStHDQaRAfVUDNUYDK25s5BN6sMiuNaqW9TuQ",
  "key25": "4vdRANfbbHEUTxjaRt6bVx5cD4asQkgJqjMnAZP5Mw9xEmXEzrnZFZR8Tue31a1BWGDkwKAaiWzaPeSBGXh9FJ3P",
  "key26": "4u8LPSaUUGaKsfz4JgbKajyVA4DjgSxVn8V2mpbERSPBxqyS1DJhQwyj6bY5Y7gzcJ1g1Fq1Lhz4tNrF6JpcwJLF",
  "key27": "2AgSveirwqP5n2neJdu73suUfEMMwZHdU3MqhcagjfkfeX1KFALUn1UmA3enqip7Zt3ey9cHyphQRBfDBtodPdfp",
  "key28": "2dYye6XR64BbUeDA3ebAzBaNN44iRDJczVTPrYLEbWwWGst7pwPn9nCAcRVvLRnWLuYf8RmUGxzUrWHCSRSBFzSc",
  "key29": "51Pnb5a2NScsU1VtPBb2J656iaWw5Kd1RypHbyYg55yRz6KoHSBb4CX8wzg14KmBXLwSs9Ta6SARMXrTd1wVRX6Q",
  "key30": "2QAWsygD7UFmu8J1qf2WcZetsmYLWcU7Gwk8WJvKsZrQ6ZkMHncbQJdSc4GD3K4gjhdtY2wXEzxzehK1EdaJ1MFT",
  "key31": "53xBJtrCkBueseNSY5Go5avJa3WHaz2S38Sbft8YFxBoUFF4QftyKMXdYhf9RjzmWAkqoaTKFaJChp8SQWBVogZ",
  "key32": "oCodxRCAJqpT5V4m2hWdsvY2H2ecP59zUDrZHwzMAe3uAoEjdhtUTR12vtF3iQz4aaCDaoo54wCi27rurYvXED3",
  "key33": "aRrPpFcsfkcJiYLbJzw2uAUjVJ1kcRsVG6KZtT6dsQfPZRg6EEK3TG4YdB3hMNX4H2dihQ8kzy4JrjaNqszxSE3",
  "key34": "59Hyhk1C1AFqAQ5E2yVVcu4YKmNgFwuzrxpqHxEXr7qgpqndFKT5X6B8LefUC19a67uRfgGUj6C7rxz784rpgV8H",
  "key35": "3GrAGoag3zvYJW2ocyQgtFKcWrwNDxQEhAj4cMBWm6fYDd8iHbZThShcZ1Ac27o2ieamnzuBDY8aB2YN7oQ2nKQf",
  "key36": "5mhp8w32qwgrdHNDcaaUbPhWYSDJ5h56xkX2VVbMKjjjugKG839Fh1LkmLq59994emewXKoMUjaYAmfNcxuKgYR6",
  "key37": "4Ugq4imSdrh5NkKEmsP3tVmTGSDbE9Bqk4mcR9zVSJf6JG1cJqkrs4sS5yeoXSfcsBt37gU7SZqL6hGnvM9nA9uE",
  "key38": "4rJBaSNFDoTpbLkWap2WQjzMa35PVF7nQznpmZVBQ55ThPA3yGgkRT9u6U5ZCPPJSeMReUGoZYrRT75dKgNo4Wax",
  "key39": "4pvWnZso4nvgBVoptrngo99WeaXv7NVMk3QvAFQtP4aiXyDGVrX7wHys2fQ5LGw1vnRkSpiae1XYnFTMA7GECooZ",
  "key40": "25zf1m4zL1KFVVkMYMe7SGZKNsjjv13BNsiUN8ALMnfw2poCaNGefWBa4MEZxADkLQ5pGdJXeGmGmjsY9MY3Ygmc"
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
