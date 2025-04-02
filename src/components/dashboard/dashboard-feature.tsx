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
    "3A5cc5Hx6c2RwCrdG6KVnEkBGH7qqXu97SSwgm9xWE2gSm14y55ATyeVRzGQsw2NLVuv1xSoezboyoBZ2SzPSNDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JvtQGzX59bXNfATooP1ZivwmApSmiDn8vf1WSLii1dFUkgT3UTByUQGByWYm1diV3hq1NCXmv8hM6vc9zs1ZLr1",
  "key1": "5UKr6FUHy5VXT4mgB3w979Ng6EeCKoSHzWuX9iWbegrJdfcZpf616wDqXAEAGrip76FnMbSUENAP68B5AxF3Gjdf",
  "key2": "2NYMTZaEhGcEAuaEDEyiyYhxcjvk38vAk5KEvxy7DTeNei4kaqfYjxR8j33y8sEZdYeh2apSCJpCgNDzg3sZcWMq",
  "key3": "46pXSn1E99wz5Z8DdgFxnnM877CsbU6S3DcLZok2VLCGdTJrzgba18jGLR3LHRRCrtQ262TY5fZMkHFLgAwAWFYk",
  "key4": "56r9zhGjcTDJAwcecpT5xhmfpWZViYfpy7FKTjddUzijQ3EG1rSk3Xay3757yGGwrJE4KxHEF74h9ise7WM3VCaQ",
  "key5": "63nmW3JDeqiibPKLrpbtgzkN3jtLNstvGmZB5gzAu9iS3AWzAVDEBAKi6pMRc8Pz2UrksMT2fmDxShQwe2nSrhCC",
  "key6": "37qX9taroR94vLtebpQdve8JHrVLowz3aT8Cw1THmvmFg45qBnBH3e9bYxcyz3xiuCy7erfZtQPgLfAcc8vY2q5G",
  "key7": "2gyrULCKSKvEr9dG7RZdPwVx4SiTK4koc9dmc8NXD2UE7ZpUu5k3CEwkWfkdvorhDYiprKtiaqxcXBDTY9H35FKf",
  "key8": "5HRSRdTVUr2KjZQzGWUHG5wo9dw294PwocrDMPUnA3HFtSgjMbpAJJiCHrhAjnshAGAoj4fjS7LQTypEeZJLqkDp",
  "key9": "NPmyaky3kajcSANgQZF3zz3NsD5Wtc79253PibKsWLTaTkgQ1ddGPmwMBhtB8g13zS1GM8SgX2XSo24pmcJnBgD",
  "key10": "2fSfwkjqBHPeWt152atqhq9UWeFRUGAcoEAUMm68nRsbbWTkCL4UWQoKqpt9oJ8VHv5dedA24HpfT8hkBmdYbzBW",
  "key11": "2sZdNdsCccmj4F9FsdgNbxWXsk4ir68FfLdFVBVb76wG6JqMc4QoFJE5RkJcys298tzHXr2MdKDgVbcSDaJ2WXAh",
  "key12": "UxYJsDYMqrzwkzq6fJGW2yBErhFCQ56rFBxpNXotvLXHzis2f9qYpLi2vdCuHNd9GD185FTUuVHL1TZgHghNHMV",
  "key13": "f3fFu454jhLas8MxfTsSU3J1S3kZuZ6L5hhTDAT7bycV2v4bQwyMWA4ZoQHnoLygCZyJgPUzMVNpXC6BTec3Eja",
  "key14": "hL3yWGAH6nTZzanCYr8TybdufN8sHFuPL4Miwa9qQu7WK9F9L7UjUs7Aty3poyEpgt5vpRZdQLd8pycHretbVLE",
  "key15": "634yXeora85rZW5G4M1hQGkdweuQ7vs3pUitULUAPoRDyja8tfg4R1p47AFp1wujbxEQZwA1J9ttqTWsZdDJ8vR9",
  "key16": "3XuvXKXgjrSzGYCsPSzvtW6B6JpDxcpZ6FN6XR95Mf9Tny5PyQEcVkPdeZs5cLzkkRiTG9oZQds5fHZ1Zh5mQtVM",
  "key17": "5nT9r87ssb3DggUoigEDFLDk6xEwmXfyR3379nUpdBRJLJTtV8yKMouHW7vyKa5EMqbVEuXbH4fBSTUzHEwgfkyg",
  "key18": "4kKj8TsbWCmTfkudGMcw5ma63BG8qggTpmxtt9aZyHB8YerhhPspYR4sFHbWPfgPx3fPrevC5zzr1cEP4UX7QRZt",
  "key19": "2u9hTURjFSU6mBCSddxqjYSZMCKJksjfe48mBPD4U8aZf9Hyo2XzBomFQSTVyd9mbvsDe8V2PzupAvW6HtKai9Sj",
  "key20": "3FAaozusTt2Wn49eV8QfshHqq6ve93YjidMvxEH3Pwt6Lgg8NbyVJhjAvoJ1MxuAx2kohNdPSuS5Rm8MSNx4qgND",
  "key21": "2KqL3Aye7EHxNBasGmbFVgvh8Ted9A21g8KT25dRf991s4xgmbFK3X9qM9m6PQCUwy6NNr1D93ab896AQ3y8gk3k",
  "key22": "54Pv4oMoZnoUAnro7x3zgrsE8b35yRa8Crxe6KAstoNmtLSLCPBk2MQNGasXwyBKwrdjhWe4m3YUWh1UPhVh2GUn",
  "key23": "2QoXDo35jvCDuPHkTaBU9rBZ8H5EZYSPmhhLcx6me2ejGJf9CLww7VXv7PbjDEPNWLzFz3oGVd4v4EVwVBfCeHHc",
  "key24": "WeZQaXvaynVgHEi4MJLJpKFZtPVnVV4Cyc2Wf2uzCBNS9Rn1Wu7xtfsx1zoX5kJjNX1EEdRgVWTAD9G9utup3bA",
  "key25": "4edxyhwKjuwpkLWuRmWGiSNRR5xS7PB2HkazAzFucFVfe1nzSaFJpx89DFXSRBRsVpwhT1P2TSsRYQNXXdRDL4Pq",
  "key26": "22NrHxJubEfb4Y51arQv3KMhepNPtNvS95gprhENc48H36MMESi1jp1oVmZzpC7HRFmd7jWZFYk2fdjNJjKCXBAT",
  "key27": "5T8m2iF1ihZfLKiFyJedynTFGxx4rtXVxqp3bofXBuYxzS8MWsug3xSAhaJ5QyXN4zPTzdfCac97nAPLrg6KRVvU",
  "key28": "4i7PFk62Y4ChH8eYkZxkAt8eER1RCQh2h2oyNDWLUr29ja9r7N2x9RMNrWZLTF7rKfJmierAuvFT86CZ4fC4oj4i",
  "key29": "3x4YHauV6KZAr5svTvrNxqAntERXaT1TGBg2916nQN1r2KjLZZbctcLCHnWkm44q2s4x6bCRvPAefCiMAQp7igut",
  "key30": "3agKVzVtCyZM6gTW6pdiE3fdoTXfmUYMyq5dQKHnaXza1mHuMf74RVWz6pKCtn85v8YtvR9VYyKHosxbSx8fn1qE",
  "key31": "jbnFx6ARMqqhM19M8DRUpHbZB1UjXAxnmDYy4qsq2y8jfzyzgRL5mnuUP5ujnUg5XwKqSM5J9tvjEQZg8K1nZhM",
  "key32": "2ZwSrsK6LDPJqmyU977QKapoBcDxyhsMUe73xr3nSyVsX6zNEzjVVH2FHjghsMH13F5cDdFMqC6SJ75a2NK1v3NX",
  "key33": "MVWMLLZKFjL8Hxf3Uk7cPSHCGBC14R2U1GssFRBmNYbtHP5vxtF6i61RTAtV7kiFh6sfZjSPGig41K4uvA5fUMc",
  "key34": "2atyAyDN8GVLbYvT3kUyscWFZubW15MXBMbuLKd38quXXJBqrDtaZe5kw8KDa62MkxgPyHRBpyV5LpVn1SMCwHmv",
  "key35": "prXn3LWkqJJpG3CVJXbBvUzB8NhfBxZymduuRZXHjBeTkaRmYd4zRzDpzWVaBZhTw9XbMokUuzCmG987VRMSQQm",
  "key36": "2Yt3gkfQgjiDY2bpiTGT7UW5F8cXrDUfVZMD4ZFfoAKSHWytSheFWea8u3wAdMNmLPpwTdXmrz3RoBGciaazjGqq",
  "key37": "4SdjyieARG4eKqvZHvCgEJGRQFbgzFihdautDmkwXVQqri9D3UWhqyGwuNWVnJ9Qht9w3wAj7TpumUK9vPgCux6o",
  "key38": "525BvtiHa4FaD6p4H969a49XwVeAZMFexPRa1moqTQFLCy92ByP8apuQyfgZLLHQ18JVro63wWjSZEQ7HYzpD2Ax",
  "key39": "Afdzupe69KJrWKGNxBaJ6u5vaEbyhxN2cNi8PMvp9NHg1LX9aeTaTHCLJ6ZKRUe6hhG7N5KTKfmAfRjGRo5ZY11",
  "key40": "5fB2bZj5XoQZdyAnP41smmw32NjowprW1QQZsVG3P5YZ2qm87njdNGKzX8VGgRoz6oCfTtqZ8kVs5mX9PyDN3fCw",
  "key41": "3jU58poDs6BDS9KBfaF8CZajR2hCpBy6Ep2WVEVUvDsQ9CVR1Dk2FCAMXBx7XAgBUauZWDf3jA8vJKWxMHe9amAF",
  "key42": "5X845fBTqZL5b4vLswxWVojg9MxDrrQfx6WfeWCA987B6k99kqjAdnwo8azAk9jsDBSWASzJMNWyN2A8qUNGKRx1",
  "key43": "wuosz4UuX87oFypXrhBjTZQN5FAHHWMn7e1KhGaiH188k7SGESAjMLxp4ssTbL7tNYLd9vZNs3aJKP7So32TREP",
  "key44": "WG7fQyvp3ZGWUbpfb6uzVtNoX1XG2RfenTJ5s4vEhusBjDmTScJroD8ZHH78V7tNfY1vnPQfNWSWJN96hSmiEW1"
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
