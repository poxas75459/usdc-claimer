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
    "4iSaYfPj5My7wbg5MdpnCi4zsqAtmVmVuXBG9Yryr6swrN4MhkvGx6uS2VQ2jToiWezqhEXWJQdnPoamGyApDCRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dTAn86L25uY5ebEEEZ2C9n5aAArrS53x5bVcLWyedhredH3QWoif6ZgrBopLdcLBmEdudb7wyqTY5NTQS7skexc",
  "key1": "63gGoPfr8UT6XcRxpjBUZPnuF7R3J2WNvyTnAkDe5zMZTEZqbMpXTwZuq9T2G8BtnxmPxcrT6YNzyDnjcsNP67HV",
  "key2": "53FKAY3ER3M7sxXe3bVSNRpTJUfC8MkfC818ij6Cjc7EXCRk24mAvFBFUUNQ7vqVC22vacWypqZWgKJjv4NVMqhR",
  "key3": "2AYBinh7VJc8zdPEvhB9qpceWEYC4LCGDEDKsH9FsT6DQqPiz1xjHWBnMCPvwoEB3hYJhGLSfyk33ZwVKs6cLhDM",
  "key4": "MFgy7ANuiG5TPkFskfgRBU1ijTq6Eaau9X8S5d3ueiJt5WJbARHqgcbjvrv5kJsEHJaybCSo9bYgNRyyGwe6PV2",
  "key5": "61x6wNiucdafpSC3eTs1rQ8rmVMshVqbdGFp7WJjy5xCLHAYJGjwZN21XEfpM5AtDvnCbUGbd6hmNE2FLS6j9aUy",
  "key6": "36SJ9WwUKFYt3kbFTBbhC8xqFyz2RJZn27EzaBcLMyF2x8CZQjTSk9puAYTVQEqZTGj6tgcC5z4uUNPy69wJ4QFN",
  "key7": "3sDY7cqTj7YmH9MVdMtcpw7bZaCxjoPtmaN1KN3QuqxdcxE1XYuMXJahKoBgsZ1RuH4YcAtexLv7ejVEe37mQmqp",
  "key8": "5vtUXkUruXj1oHBZE6Vq83scuoX1J5Qj7du3Aqe3YtCQAFmagJJccKrX94froH5sFPoMRERdvsHcui2iue5VNtwK",
  "key9": "2cTKcmqwN5WKXpnQcDsVXGo1LUB7gkHTbqkotzj8anwFStuvC9sPyounZG1EJf62HEobNHjbw1qrkYd1HbGdyBuL",
  "key10": "2h4GBTyejWQKpPG17piJrE7V6rgcGWCUKfZtDQcpEzvJKgQJz7dqohSmv9FssmiADrHAEZST1qGaehvyhqm25Ctr",
  "key11": "aor7qkV7b89ksEdnMGmM2RvbBWTdXn7Urq7n6adnh8LGQRFjHwjPc6gJUASuTZL5D5QNbN2e9q2BHWeDm9yvc4W",
  "key12": "58pADveiDFomi6ze5XBjnHwpuXwY4ETgc7UjFozBTQ3YUdoBCSfXcffEJoiRgm9ECKwGViY1gVfMyRFuCL1Cc9vE",
  "key13": "25EWSQgLPbiRdYetrWpwDrztt2m7TKUeTERYpoST23QQ46SAscQRjZzJVTHmrZdEGVCWizSfqdyzXBYxSVGpdvgU",
  "key14": "5xT3K8NHLKvr8D2EDDtmudiaTXkU1Fa3aEyMsDgaQQEzDyKnpxRwbCCUNXFgcBXru9LnQcZToEQRDXrsM2riyg8X",
  "key15": "32RUvhh5BpEfhDz4p4yEeMuKYbGKrx1nhni8n9VMch2u87D2hucKLhTKZZ454mkuPksK8NCJriorit9cuwB73eZp",
  "key16": "3qD1aX7vwnovBEipSkTYJ2jL33QUV8iTxA6ZahFnfdsVw1J3BCPUKwGC8CvbxFvjYQp9oVV9J985FJamWN1cggge",
  "key17": "43RSHvYysag4zHJZeQmqnx3zx1eVkjYUQLs56JgfbcY5JRiCLwH7vNQggahx2FWUKjYF4EasEkfrRCcyREusvDtt",
  "key18": "2iz1SLVVu21vDN9GAeoGBgH9qj26rMFEFcURG26zfj1PBpwMeFing3QmKeo9nZsE1RnDxx1trU72WffdSAuGbKyp",
  "key19": "4rd7H99kCE1n1f3keXdVmcxDddmibjmB6z5XickfKQas8vhpHDXLD6Sbo8theMncwqgbKowPvZDv6JXbDXcm5vCS",
  "key20": "Uv9hjk63Gaq9tR8nVpQrXkRx6nVvowRjVAC2c5697o6jHjQzZ9bHHCWdeTZY7TKwHDAFaV7onyRzwaVZef5ow4S",
  "key21": "ZVYCQKy27RZg3Pga7ma697MBia8w6sEGoibKZxfPk9YPcDdnbRJMrMRfHxigSg8DeQ3tSAXq1Gz6avV4EHqJMRK",
  "key22": "3AMXU1rva5UUNhceebgzBZeWd5RCS2HEHMmKTseDXTzfe7sk3JGHrTRbU1dFWP9MQhq3EX96yoz79kXW64i2cABU",
  "key23": "iXNsMvR1BHteCLEoe2Hssa26s6cBkgo55pPbVx8wVUPP1SenX6aqMwpx8VepbCT5UhA3gCRADExsy8UTLkdDCL2",
  "key24": "4i3nYWhSsLU8mv2yuCvzmHVAJuxnqd7gFVBXEzMz1vFxrPxvCddt3zGgWiy3pPbvKrPJYF6zbPBMSaquNHHLeqvs",
  "key25": "3gyZRdXPE6QBer82RBXFuXbQBjuVK4TERebEN2Njuh94bRvhG1zzrrCcXKCBZgh7sCLzgE2ji8fDxZqh65Jj5s21",
  "key26": "5R8vg8xnqhFe15E1zidFuj2VySx1C1r7QcyC4Ch6auraNxdtyKR4q7rKxwiVHf3rfsXqWcsaJBNwQ7DMyr6whP9Z",
  "key27": "2xPCZ8abZsytsB6m33vfX12J14UKwPWw76fYjWJL5BeoYiwqu5z7L6EyvJ49jwV86aQdRY73QXf27VgS7TrrXYQt",
  "key28": "4sQggcqGifTu5DJ3XbFD8beUuT2hafbQB5Tt2Qmjbp4Gdk1UMEe4mFb3vk3jZWXCoc9Ppmz1sk6UPDxigxhmG2NG",
  "key29": "4RhNDP1WPkQRUYyLLpKSUB451vqR6EeR3QM5E6WLze8UCbtkMTYAfhfgYnrToHEaiHwbT4X1R1QLoeVZ15mviQh2",
  "key30": "23DLYDqPHQ2LXSaybSWCG8MhjHiCNFXUYpB4FfdffnvEFcQ9nMmE7BmnZB54KpqnTNWzaBxHXpzzvQKF7CJSNFSu",
  "key31": "3wwAXHzcK9UEKqsL8VbMtuBi2gsii71QD3zPwkQbzYvU4CixUw7R96Frr5ypbEmKH2haiDBye9CS53Sf1QSq3NC3",
  "key32": "ii3py6hhbbv9A3G4LTjC8S2viFAtqGyej7R112BgF1LKMTmvtaKKJgsFbqRaX2g7RkqZjmz5QogcN6uUFmrtxUq",
  "key33": "2iHGFAh1dokKLs27awizwMHYTHHKUerxvb1vmv71xwuri17x6ts8ypRQ9GkCpXkRAr6UwSKNjWic11DEW2Lu86pY",
  "key34": "48KGzfPmmCXQqZ5qfiJmZbq8VSXpSv1z3NLoukn4F3goYysSN639pFDyRq5YDR6QKQLi6UyPp3Lji6cLNFXeM8Yx",
  "key35": "63Huwq6j6J1GTrzHtWdHBjvhCqsTA5BLLTnBq2Kv3VrNai2anBJzgHpf5NVTezo7mEVkm2h43yYh1qjnFQLFSHSj",
  "key36": "3PHetbb6USsjNMGd888t8m7ZReCQEGkvWNKm6o5CCbvNjoU7RHEUKwNGwznXsr8ZoxbagXta3YNn3VcXZVQCm9E2",
  "key37": "3xo3PqNrgkvrckA6m5oYZqsVZ37ohHgHM1zpBngJ9reuvvzJSsBbw9QbHGyLMaxXYQmrUoDnqfu4amtLwSj7TKH1"
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
