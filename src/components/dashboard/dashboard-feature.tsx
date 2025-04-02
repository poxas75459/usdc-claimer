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
    "pBHMyALvgjXpkxoJq6TbvDanLU3Kry7cqAGKq1A4TEopEUwLQPRYRp9bJEuafQjYdJogzRPDqhb9FWxbzKLJij5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Vf6wSNgHJ4QGN24KRfb55xrVvSiwK5XYiZ4yyghy6GXeR9nfKoV2cFNo5KJxSbAC6jPmUEQcRBHEtRvC6ey7GT",
  "key1": "3xSMowrGXVfpgneuEjEChjJvx8rVUgyXhEmbcXFCkkF256VoexEffe4syWQuqUbMvPMsSufYpdE1nVNYU4wMcwSL",
  "key2": "3fWQg2EHMdcVEyWvhnTcQxHZRT8tnSrnV5JyA2fWsLfYhXDUvUJWW9brm522ZqopbpCpmdbQeuDk15bvNm1ag9KQ",
  "key3": "32RfqZJGBasgoXdeLih59qwMdxNjPCUHmM6kpco9QUCQXvM6ermXjVBZkPeZdd9o1BRze2n1BRH6doeyTrUp6vUA",
  "key4": "46Cg1nVEWW9BoXdEgemQHYbLTGZMwm3dsRt6Urc9CAxqVrn1mcFizKRm15Be5dZoK9m1PokW63Nzzv4aNkxaG2B1",
  "key5": "46MRdrfhcZ1e7ryXdBfH76Qqm56RBTcANe9FC6DCKWJQ5HFnB5yR6CvQVJGDqbj4BScyBLcRAxb84j3PLQU4mUi2",
  "key6": "3f9xsPQGQanz6amrypUb99WfQM7MQtRu2DicZwFhWdxHaKK74baGJjAhFoJ8EBFQ7v6ndbLPuSr93gHU8WjCqS4s",
  "key7": "61tzopxMdPD8gMMat4PbUiMt4EjQdmAt4KTNaJbyLHHXFr9VWW4UuDpyEebvRMkaovbWSbi2bvwc4TBLP5XiFJz2",
  "key8": "3RmdFnF7xSAA7rtJV3Dr6PCZ633fJXBf3eBLjpmJbu6U1ZeYbtBGfDQtpGqRkQgz2NeRrQ94QQPdPwRDETbwfAhs",
  "key9": "54t6w4RZ35vj6qQc2VCwH4SLppgvj1WiZ5tZ9w5WZ8junVMqaY8DMN8fhWLntJ2FuccEMYBJZ4NuAb2dFE6gWE68",
  "key10": "5g9G5ox6srSv3MtEPtzymNfdNKn7NPCt8EiJ1Zicu8VgDXZjM3pbRjUN88B1ttzSET64EjsBwL7kfvuGuv9xmhpf",
  "key11": "5EAsLAvDXg9CupxMFDkqVDaF3FTwo5T1amaxbdRsnKNoHg12hNa5iRJUJNCCH8RDvLVikf8cB7fYoANBkbGPDdFn",
  "key12": "2JdG19pg5GHV4G6146JLfNpYEjwQgQPJyvwUkLx3hXBt4DmAyGSS8ZA5hjfYE5uYdC7cVzgLdhFYbTc1zRJnDqK6",
  "key13": "4ZxC9Z6TMTU43FgYLaqJ6sqzGLXbbGpYiLftzpvu5BG7XgjspdUaR8oDmHjKsUj2v7ffM65dj6pwgJfYDUE6YMWr",
  "key14": "4LoHcd9aLAcsnowUSGvnveoBEbxXbZzC4VQgTC3fspGAmgBRAtseXuHREHxxr4wr5GCja5s3ER5qoT7YtZF16TSt",
  "key15": "LrQBXPBzogALmDhG9xyxsepaNTN7LoXoLJ1xq9PfBvKAXb1LDZjyEZUn43FXesM4rDgCDaqgo5TFmDCUUFumeS6",
  "key16": "5UZCZcnpFk97i93kbjMm1bG52b9H8ACTS9tDoSk2zTeDmbH19F8uT1CXv5tDxiuJzrAtxcenEA2htU4qPHkXP87D",
  "key17": "3BeE86eHCRyxf2TmWtvK5ARnFmbK1BQFiqGUwf1VzNf6JmAJE3SCWW2byNF14NE2v2Qe36GsEZ9hAJ2WJmmtDh3z",
  "key18": "2TY4zMBMS8DNiAMqt8KYCePXwV6zq3nTo6DVgcoR9Y6AsEv5sz8Fe5uwnTNYAvgMm8qREDjPFDMzs2iNBzp6Ch47",
  "key19": "8ozkRSqNqjbWDY3FJoZd7z1phJauvspgXoHcUjcAxcKyn7L115RxHYmt1xF5d5NVadtAzLjY3PYaE8rGPnv84k1",
  "key20": "5wwcC1BHtkUwDnSHKAy3tjZJJhwV9CFGJChCVfXA1xSA14qXCc2M4D9rLhqNNgbGqNF1aLTnZWcbsGdYvEvv12c7",
  "key21": "5NujJ8oXi85hfEP1DLFmvdubE14c3PaBt42aRso9AYVxWz2o4cgBz8WjLzhatJt87jTnfwKy543azBxx6FGForux",
  "key22": "4M6CeqUH7TDijXm2VNRW97KBPsgCJNsL9xi2gzAZCBtztdrujRLoCM6qZRieBh74oYSAP7wd94V2NTeTXLZpQEtd",
  "key23": "4hqKdBvFqwn6ShtmtVYjDeKMmqtnfBPqJMbQ21eaqT4qMkme32AztBDwEtV9NDHdr2tcT5mEgTCg8uCPPdjc3hwu",
  "key24": "631M1MHFUBhyZucy7gvXk6UbAsTAASCF3m2tYkRJSgEyXWvHFcEEoRQ7ZQy6U5N7R6yT6QQp7VUBTxwD6bLjaYPG",
  "key25": "3cSybxxmujjBQNAmQk2Pc1JbDyjf4haSLtsq7CSSwrFwPgJJfQ9aL2tQhepxsgmdkhAAGS5A8QHVRC9PDqgDKM6c",
  "key26": "wC8Ct5rPwuG6SDBPtvtvn1iN2Z4mEtHEks51qUKtvP4S13XszsxBGn5sUfbb1AjvwBaDQR6kSTbkmbZezh1NN8J",
  "key27": "jnCQRywXBkFN4gCv4fYyure68rAV3RTGh5UbHsvQ1Ne6rRuzvZuxQZLFWYykLf2YEbNxAXHED6JXEh1nkAh5TYa",
  "key28": "67bxU6qpvMoj2BYS4HJKvLbwYKr4qP6bvyyLENyKFR9958zfmBXuSv3Cjofh3CmyDAcxE5nWbQjcgNnD1HgyjAuW",
  "key29": "3dKWP8bgjYX497h6f2P2jF3uMjywoBLwBzuJj8EzwVmTY96AYDX7iyzxqhfbCVZzmbXMhuyGtsVuP4h31xSqNLaG",
  "key30": "274wfQHDXpBsHdUTC2qphyLNJr1hYXwjRRHT6HYwySkN1ZJUJyHv8Gdgp6qxzt9KMt6vetsTyr41ZmJUVWNELLU3",
  "key31": "4MxXQRN33skU8rzH1qiwtpDmHWH5ufQWZAVNKPabdg3zdTJWym8UwdrhhkexnkaXh1dHZcX9paxDW7avQayCxTgY",
  "key32": "5sGdgccMAEmBfvRWhYEexSQhymPchDTRSXQBRattGLET3Gx1S73ghiS1HGf7nD4w2TBRbpXB6BSeQKjPg2JGyDTF",
  "key33": "4faeUKvCtMW6iy3LkaNYLWradmvBNsrBgSPGzm95aJJE8SbzovXmbr1sES4GsLwuerocFe85KwJ3txb3u1ai8enC",
  "key34": "gAsCGoPwFtZT6MPDHbkSNmyuzDegSe6CF6fL3EBvkNATGwaka1fkeGoBtYcBt4dfkQzKBxv7r4Y66fFqg1HcCeU",
  "key35": "5CztJGcmx3UcAWK4EFugsZtYr5knJ1nV4AHSigy1ybf2Bywu7J78ZH4bhtY9Q7ertWEWFzeSSz5nekij4XjEUUtw",
  "key36": "2JPtxWuXtgcVsEieRFQpjZysD4qPgMrRk9C8bbGiThMJbquWNgRM1JdgPwyRBAHH8DH1cdQVejVioTgER3FpAtt4",
  "key37": "53w9ccaDgeRm7eYXXMwJdvvcjGzSVawuUndohvFM32fRgFgBzPKikZ5cqRsNe75PfCH99VXW8LaVwvoNUXHwCRrZ",
  "key38": "2zCrMB9U94z3BTHhs6njeVdtRYKfnWtLAVfkJCuEjMn11sL2jp5bPEQYX6QTu5WPnGaWNd4n9TSV1evjn6Lo2hro",
  "key39": "5J8dD5kiv7yYY5eFXF5ZB5s9v1xLrKDrzmijESjCiAeB2osghDPUbZH6uRdkdKmSJjSXjCZQ7wWNo8r1jLvUAuzu",
  "key40": "3FmaYJmHb6bujHyrAACR11FdkezRGkeJhhGBNZ3d9WfeVMhspPyFx1AUhXC3crkPDLoLcM5QdB5K22Wgxb9y9jua",
  "key41": "WtWzjcR6nogKrYuU7zTU8Fp7oaqD685dMQwLNRafwecP2mEx8YB8PjPfvxw4r2DfP5swuPHwmR8Q41iaTxh5D1P",
  "key42": "4MMhqu4BUdkC3EhySWWMjPKVa1ir7uUMDR2zTgkA78G1j3z146tyKYd5xtCzqJCRyc7qziC7XYZkTBqqi3BwMwXH",
  "key43": "5EETim5L8SY5aSxeQqDdBdVWHSVEpX9BbPSWpREUDXe71RyDYLGwUzfYHfsFbh8ExMX3xQW3Z7ny1oA6hTi3CqCo"
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
