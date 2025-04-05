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
    "2dYRFp67jH3Jr8tqZUucuhtWUoptxT5LDUKVeSYLB8vmyMPJk4fYmUUrCyZVNGG4x7h2Md3XVRKBJFL1Lpaa5eut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GsMBoxLA7j8FawTydbGG4tgvo2F4woCXmH4kyH4P8E3Hh6EExcB9jZmdtDXMkRGL3wN62HrwehJjq4drZfXwDR6",
  "key1": "5fyyiCiUm6g9G1DfAxALoiZuoYXuwUPPpx8zJ9K4fD84gKX9W7WcfH2TUZy1jJQ5XMe97UmNFPo7Dn83GMb3Gyh8",
  "key2": "2WU7a1Rr7vGVSksbmNYd92NSxMqCGr4S3LCLHUCNanKpG3rpLyvMF4okMgqQXFzYdHYYv8nPyRSwjosaMDp7ycZW",
  "key3": "26LfJXJv4ge5VhP2xHqLvvtcC4bCubqSNsW984BGmQbBiNCpJ2m5qupqwX8LhEy9zbXqWG8CFVSLoD2io9yLsqb1",
  "key4": "3AC9B5VuNcQCsJwgUwJSFa1k8pzkK73H4gsatU2HJjku61iQA9CoGJXP9kAquF8DnknDh1GnL48MKgxiyKZHLkix",
  "key5": "WERSCq3uUABVUykUFEZBSsgEo2h1CeKUFgQQkEakARdfhckaQf8gxQAAjwLUo5uJd1pcEKZe2fk4XQfvyMunZqi",
  "key6": "kNQWm6qHrsWLmEVkVaXgReqV4xZRfdoBanBk2HPcyjMcQRzdBJarv6aFma49ob8fm1WEviCg6N75mdznFv6tmsd",
  "key7": "vTK9XSy5Jr3zjwjn7iEqjqhoXxVfBMwzEDFx2rsuxZWs2zBeVahtFK4Lb63oT5tM3cmjk5m4iShodkPSaxYb68U",
  "key8": "3t6bgVvyTVE9fE78x3Dkp3ea5HDnPAU4mjM8UfncP4oyU4GATphxbgtK73L8gauMdtQEASPyCePZ9c2zG5CpDMz1",
  "key9": "d1YZV9jw1JERAA34qpKSTWLSrhWGBRqTYDXLZazLyLGsc26E9N4M3g9wc8uKVzRgjNtHhP6Zc2dmko3neGm8PrV",
  "key10": "3moaGoGL1VJQzUd4d81kwD8HC2M8moSYSSmQ8C6g4neUqfo4Wk1Ps5RtSpEwzyuU1mZUMhRLZF9SJsCUuqpe4bfn",
  "key11": "5LovgeYAe6hD7WW8zRuRMD8fgumTHavnNcHVr1RTinNiyBBZhEWUiXs1WAWT2WJsGVQg7m23XJ5EyJk4qaaa75Lp",
  "key12": "24ZPJhqyTxsPq6E8FSni7Ji917muevyxCwuC5VDDAVDoewccHBCQ2QBfFRguGNFfChyFipWri2URd5WNmDqWyCKP",
  "key13": "2D92QtXL5aHia3jXRam23Eg6WMHP5BXWrxVX9YzEr2fzWZ4iSypixTMk3Ndats2qV3oRv3DnG96sFtP35DbEgF8i",
  "key14": "3KDBMMGY4a1qv2BZDnTs5LkZXL2ueKqavd5pzQxHLQ8QhsGaCbAUJTtQ9tHMEL8NEwkHq78e7eVDX9fYzNw7H7YB",
  "key15": "3VHg7Xx5cJwtBwbrU5coPPVAtKkRfJkj8ij1MXsxm5UxE4NpjprPgwEkUZHadj16ZHVzDUq9j1VCbAsBM9xnxWs4",
  "key16": "2RPhP1Z6nCiwVgEF4PAcZ9dyjUWJk7HUgSrFpJ8s6dYhjhZFvuPoWtqke9hRgi8ZufSEdiks3w8vfWh8gqxCTenH",
  "key17": "4Ss4B46krdFeiiXub73EM4DPffHFz2KULJi7rb2NTdukUVrHp6rHurvSa1nBBHYabgAgahxTPm9GPfuEK5tKfEuE",
  "key18": "5rbCt3HAdPGLAhERRqEt6uheLdwtwJ8poa6M3Fize34mft4htabCdV3smNHRosQgCoMiLXixWBdjuebWba9LaNVy",
  "key19": "59V61mg9BLkf8pqNWa5D13EEerY7dovX69m3TTcDZXRYPXY8VHA9MuAaGrx73zVaUKASkNRLLrkevJ4j9AnXDiR5",
  "key20": "4G4Rovb3qZSEUghhh9DzrugpdfoYGLHiJM8nq4WsJAzbgp58sNWxhT2SodbfQJgmfyr7CUV4MRkVHHNpuqjpobnd",
  "key21": "43CL1FJdbEBi56PKXUHfhYJrnjdu7jjp5epKWcB5Am7nWEG9vLUQEukFC7yzZRFiEjKZVGcQCz2nnwrpnWfi2pTg",
  "key22": "2c8fMvsJJzvja8rfACVU8XDeaELehUsZpp3JsaYDpsPLV4fhbisA9zu8UUxVGaWwx6tzwhk75857fvsDeVpQgkvo",
  "key23": "NSuKgxtPGMxW4wxiakyCL51apVRKzG7YBR42S3QEUQk2X5PkBiURfaMEgSJrjmsrUAdUcqMR8yDocRByT7PbMVJ",
  "key24": "3S9u17tzcaJWU3gnTUtDR4xERouByLZN5hQmMr8Zhr7vNkoj5RaXMayKS2QM9dfpesXwGsuzCR21gX1sAK2McaD2",
  "key25": "2QaQWiGM5YpZvaSBGCcgeyWWmysnGiUEsHGHJMBAmdhSsJHV6D96QPb7bv3vNbgw8Wpv7CPoj1vprVsrVNFRzsRM",
  "key26": "hvRjZZTF9pnMPXzXSBXuPBafJghVZdAj8Uuf9uzCiotfh6gEp22dY3rHymVBjf4Mx2xoEDEaMtFmGMRndY6DHHK",
  "key27": "5sZ8R1GiHcHxjCtYANL3UgaiSwWAa55Lbj3sJLNYgCuV1nL9zTatdyWNi1yCWFipaZ92DMdecHJHuuvAd6GC6HAo",
  "key28": "4bebFQDaC45FmLXd2E3MKiymzGoL86v7iJPJ9pwDnNoaQtugfhMoi4KGCyqz7jaMvviGMpiVDJS4LxkhvcHQBSQ9",
  "key29": "2tx2BFz8jsnXT3n5bWass9sNj9ys2FioJ7snpEYT63tomWgrzv73oVyyzJdC6DG5fsuDndAvs3p1jJXJN6v3eEUr",
  "key30": "43i2ubyVxWs7SLCAMnRBLgEBNnBxbympr6LzrdFtH5WrBBaEQYVMiEcmwF7i2JMyBrgtTwbgKb8ZQ6i7dTSdXHjS",
  "key31": "cctbzBkEK25EjQEqeRBZZVoGNMrY9obAqyEDCQFM5KGR3er8TxfmP8RtCVVdXxHdX6S3K9zJW3qsfUToM8yD6J6",
  "key32": "5pa1jCoTq6Bz7fKQUFv8KKoo3Bkf5c3KAmuc1KHDcDL3C5gzQrQ6B9jRJevrnoyZBC27B9xPTHbtCoygsUa2Fz4C",
  "key33": "2sQoCKVqrjWzwspc7tk5wz5rRtSywoDCptXqwqP8r2DikTkULoLQ8nZUAiScXDMLuy8hRgwFJEqidmxTkM83Wncu",
  "key34": "5sF9FKKnoQmEre7hHpf7YFMpCAdM93urzcA2i1oNZbKNEED4eqFaqb8Nk5JptNJEaaTyS4D1prCtZTM9CpRcUvUF",
  "key35": "3HWhWg3ZnUJYk4d9ncS5GAemH3ZQESAiXBM7WEz4LH2QuM9iH5njALB6Kq2sKEJNUK8adrBD1KH8fzHexN79XnKg",
  "key36": "muDboXGPTcdz5xCiEBZVzS7sGiESqhCb3t6w7Tt6KfW5FAiD1sKNofbPU1cqAWJovkazXRiVZxNXtT8TsJsXndr",
  "key37": "5a5vuvYnfGRoEkybrBVJuYRoRmPPZNy4foo7oR3k3AAmKCvm4zQfFCtYHLZBY6TqXTMu1w9VwzdQEwvSGewDi6SQ",
  "key38": "Cxw9XkfPhGLdNNxVfCxJPFaXiNM6DeNGhdumwyFsN1YikWfcHfxhFGanT9ka55VSGpeEFzBGhryEdTx4aG7bxHc",
  "key39": "4c2jTNGxXpuu7UsGqtGzFnGPq6dWmWdqs8QqLxFuZGRZqhDUoV6Duzj2AfoLnR6XLUhM9hgAEYcbbPskhELPGe3f",
  "key40": "321ZRPqS8fkd54k11eDzXZPZuqcJz8gxK3SgfHD5dUAPMshynW9Pr9hYPg3yDbULCHBPBGDSRUKQJFnrBybHzUkk",
  "key41": "7MtiKUQq89TCWviADopfbTvZGkhmBhL8WxeizLXNTJSw3q7Eb34K9MiXbA7cUE9WEe3Brp6eDuCJngb4B9q3JKY",
  "key42": "4HnyMUaSLTvtVLPaFcxC171xrPiEw11bdomeDDujyqftDwfZV2LUevRj8hWCDgL9SWhiLPpFxJPh4JemUZA7GAAG",
  "key43": "4AHphvY8HynALxhddhLHurK1uRKGa6S1BzYecyhyMBKaMF4AyJfq6mgvrHnpRm32B2XDgM713VU1gMqNvX5ePQV9",
  "key44": "3y1ewmBLPSAZUQpkcZesz2xVDaEKtCnpHfa9WFnYEcU46aWBZP55FXHeG13qr7kidBKSaG4ia8fbcg8tZm69MnhK",
  "key45": "kzpGqTZTAMVFE92Fud1QFD5rxGf6CqaYDVhsCP9LDyDoq3Rr1pgzEEaSp5TvNVJhec1RUQRzeW7jQbUEBHkPn5m",
  "key46": "2knwkahCvqihatacLyZQPuX8PhhcBtcQ5cCa7HZTCJLK5DLcZAP5wKJisuvGXMtuYvqw5LHfGnNadd32d4xCCkfm"
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
