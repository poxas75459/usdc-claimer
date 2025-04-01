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
    "2KJM8GrzifsKjbmGrvFkvVM4P8X42VgytpfPQfJz7SwrWbwjwVQCo3wHssGcVfQ6VQfwuFdK6ouY7TdxBP6buDPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gQfaz4uyX9wcbu1pCzdGRR1VU1GwSy2LBa7Mgb8kMAEirA4oTkRDQzJGEBK48K3USE2X6ZFjBJESffwtKJeEGXm",
  "key1": "385oChkDkAPuzpr7HoNW8ZQH35H5c1fUvxJftuoMkUBTt6mqR5KDv8Sk1DhZ9Mhmm5rUs7vNEBSYLJqhYHN7X3pK",
  "key2": "4TVNDSkNhV9k8cuo4VF42JsjnVowcgmyhqPKkXFgYdWzYnojnin8FAyRKERTdY1JBXgaKBBc9d1gTNPg8VV6m8Uo",
  "key3": "5pQApNkAFhvTv2HkTKan81Rqa8ZEAxtM8fzEzzYEn9sfmLeYihGDBqkZyUr3sAynqbteStpYCNQvqqyMC9eo29h",
  "key4": "bRSvGgKyJQuQMQHuQGmLWtGD3K4wUBHUKSiydzz7AqaxWQzk5KN2B3xYyPMsUigwnq7ceXx4E3USRtGrjsyBJaw",
  "key5": "4TCJZ4VUm9M6uzC1ZgFhvQqyWYgr71W21pyuvW5UB6vtRmbFrZqpwURzXijvKab4hkZLGCoFJmer4QVpn5hn2X8o",
  "key6": "Zvdg71pzHikX7GLFSHthfS9L5LRYSZejpLLZaBwuQA1wAGnJ7949DXFZB72xkd6aTiQJxhiz9idfkfrFzSrkkST",
  "key7": "3g5Xu67bZ4hWfD2onMQFDQJhz8RYY523typH21Cec7wrhK1Y5sb7rxBENwoJpRG4vbhb9DosVFSXqbRpiSLF6Kco",
  "key8": "65nr2ubUzA67eimWB7QZT4W1kirWHDyrcVr3SPijasDTjGiP2t6T1pzTrAvSbVGA9E7oXLWFDWJAMtmPnzL5ATui",
  "key9": "2i1ZhmNziRt7G1TEZNnNDx1bFALNF4tnrrvHDuBGiemgW943zj9tugjChWUpED4JWGvnGT4WALXXCCxnBtSQJmSN",
  "key10": "3zfayiWuaWMUXX7rDy32eD7iZuMT5cHtNdRBJ7HzeLkr6nkXzQN6imPFSaEsLSbsqLGMLuhQwJQrDMwvZqypjpwj",
  "key11": "4jW8FxyQzjb1fuxrZto2EvhTPKP3tDE8ooWNFzLCf7tokdHg91239Vdgh4YxTKdKuWDMVEARUs95gq7JYgHJ7f4z",
  "key12": "4KS4HBxYHfasAM8jsStjf8n63dtmQKo2MmnbJRhUh5jKx137yDbtmhJhDYFnFc6WGnyLs9FL4wZhtEtc5RG5NKjk",
  "key13": "526iJ6ayeKVFDT5hUopXBPmPKQLerJxzRu2oCGaxyR9LxLeuhiGbkkSBWHBPNq1k6Jcy3cHaCNLL4xwHZkoYuafK",
  "key14": "3mDpQayLFncbQzWJxjqCWS5tbq7NoX9q3WENAQjRMFMwADFxf8yMFauuTJ15fWLTSR942xrrrs1LHvMsehWCd4c3",
  "key15": "2yHFjmi9uyszDWXMY6QVT15cPdiYg9z1uDjb7wY7VxJLTn7iTtqKD2XMKccMugCddKXcqrj5KB8DhSCSHiUFTfW5",
  "key16": "55QthTk6caafZevyM5P88y1KH1rNCQRPJKMgHoDPPK7QLEpAdXajvEXccadXoXR7pNHNZYK7CZDirp2vTHqFtEtX",
  "key17": "26jLXZnKpsH8gYiMRo79unP9Y6RDUn5BBioTEaWfKmxfQT7SWedSSHQU65e5z1J26M1qQekhyvWBp1hyYSPjovJu",
  "key18": "3RTe8CmfLBmaDBZfe6LLmwBWzZDADbKdkUv4hCKy45R977ct8YUzUhMJh8Xg73q7rqcxpd8YJ8NWFApq8z1Nqufd",
  "key19": "3TTv75PgKQQv6KaPZ4b6jDQ7Ga22K3FL3gzRjMgNnu8H8fPQ9kepoSkj6gzEghhLkSr8wmWyUoY7trSu1KmwhD5h",
  "key20": "VmLJr6EdVGuQkhbMTzqo9ChVaC8GGpPAG9U71ZahZ1qoce3rpg6gLyMzQBR5SJj755VFzBND3mpSVU68Y8tmUdw",
  "key21": "45d7gSxF5gaYkbPyUZjh8HpenaRmtYeu4VBja8CvoZ9JU6QJf4fVf7syHep8VT4udh4B9v7VQSayzTMmoQWxYE8M",
  "key22": "orMhZJ25MSyZeWt9cNrkbGhjAAEKKscwgW4v8onnx9jDhbwn5SUPZW1QZEoLjkhxPdu7k7G4p5GSo2E4EbGLSvg",
  "key23": "5VZFMuewMGAzgMpADcBg7aqCcBe9JtsuimZzFjQZUvXyVzx158mC5rjZG62XHMGTDJdisgvhnr91kFYjN2HNEJbk",
  "key24": "29ajqXeuTKhw61ecgTKKAyXB4Q2e6P5WUyyUd7ytVLSbarcPmw9UYchWmhWfMJDCQqgDDXx68sUogNAFr518xVrP",
  "key25": "3f89KMxsuDWWjtomcW7vaUo3Dc3Hm73QvaiZtYbQDcqEwqupse5WxrbMYu3ZEijcS7SzD1Pj55EyT1vsxjQr62vh",
  "key26": "Q51BPr5qWB2kt9Kdm1t69GiQvVPAwcx6wDyRFNYteYvjrrhdGCHwEjVJeHwatTiZUekvrX144U1oqq3TfNsR2b1",
  "key27": "5ZQKUcnAko9Tx8rbfYk2Zx9MLa87cyn8aFhTkFv499ck2aZQpx8w5ApEo9jNmB6oLXYLEsTifqawPBU7eKck1CyF",
  "key28": "5J2ajd4KkKFKmWF9bLkUv7xqAxmjfGnmwqTFXhZNyv77VDPrU7eUpVZrGJTye23BHUcbzudaEijVXk2jzzCF9x6A",
  "key29": "5bh2wtCz8McTq6632KuUPEDwEeAC4He1zGMXzRuJR8iaiPyisczBhaLmQ9d6r3MnAZxFtFhwPyATFrUwV3WNmyXq",
  "key30": "5Du8aVcfEuSgGbM7sMqURWHLkUvfNyUA9Cbj2TAckXuZZuMuEuv8KQYcra7oLh1soMBxfUN6BxZhTJxLpGWDbSPA",
  "key31": "3XXVfGS5GKC9LnsK7q73idq2sCkNKhW6xUCBu3pj2v4TCgJeFcnexhHNcgsBmfwFH1YLJFKoLVBPuYr8mKUdnivQ",
  "key32": "2wB6ZUTzbw3fU5FKgvq4ZE5bumoya8ZQ5A1v7d3VikN63cxcWjGYURyYe3p3XSkZdqrhh23zR2UpQfKfNkmJFZ65",
  "key33": "YrfUFRKrZu8ufz9ijefixncHkXzSoVGMFfuFk1GgpNeGDCuAa7y3uMme8zFpzVNaPAtgeFsy2g8WVeQ2tCKpufq",
  "key34": "45EiyhaaAuVwMDWiALTSQ3XUeqF5MNXuhR7Ss2Aw4vKDcKNaYyuZzWTKBePsLCU24ZPQHfSCFFjXE8eLuptA2BKF",
  "key35": "3SKqfdWRbEnkrmdZhRHwAsyxs5SbRZ5jqrK6kpwhQTJ2qeKW68AGsuLWLXVhUmz5hnk3iEUD5eFePVPughvPWVwc",
  "key36": "5UMmXvTRgMtGa941dxViPEWYyTWLXuU6XxDRQAVZdKrzcvjDvm2dozjBLDqmyHV1GBz1KimLfzP5ZjKoXsDRAmP",
  "key37": "2WDzQunGQaBPmm8L1Bw4ivAvZM4oHFr7sGdZ7QXrZpECsARB8VoYghtjc6YtuXmwzayLZwMH4pfmCW6vUzVRVBq8",
  "key38": "63fZTTMirsjMQAoAsWBhPxC2xjuzj3iUFUSjUg9RnFsCmsefNFhbxXZB5Z3d9DHBQtfDxFkYgejYYDpWCGcxkT4T",
  "key39": "3oYJD1VKwvEvv7mkCAoN1tZfymyLGdGV9WCAmCztaasxz2bWRSDsPRVcEREENMb2JVRhhcNxKiX2ejrKRtkf7aQu",
  "key40": "GtSRMtv3YWn6LPKTuu7gkiMU6xVacHQcg9a7Kj9Qp28gNktxKVuwzdFqbvSsJgbVkQ8avn51NJJszUdcvYMyPSJ",
  "key41": "XQJYKknntmvh6jU5RsypZ5EpM9CLnjCHGBy2dYeK6KWGsVnVwbLeNhaMqanM5zseh3rAA5z74KzJS6XTyFpmoTH",
  "key42": "4Tc7fDvKXJKwbbUF1Cw5RZKZce2F7ZnmBThF1HfgJ7sikVNWoUj7v4DkqZDTbYiQEH2kR46jwHLDM13xwu8zU39U",
  "key43": "4Tu3GHmTM5KykX5EJnB5bdVTKXwJ2dQMLJBoWkqQrrJHdbRL2dgi9AXVGS3mgYKNkQ4e7wqEmPt7TH8zyXZUEbY2",
  "key44": "62XsgbFkT6QW3s8yckFPsXwxNxfdBVSGkyRCPGVM4RoG9Tpi2vTDwsXaGyz9tFZ2WooCtfQq93S1LEHPK5o1s7rr",
  "key45": "5QXCdTDjjnXQ6mThxsNqDYScaEQUAEq8KAsWEARpAU4nGervFse34cFJUpM2SVBa2ggKVoXvvmd4JtVELya3tsiS",
  "key46": "3RTojQDewKKPfmC7xgwvnukieJBamQxgQwXfQ2pvkxhjyk1MgnydpohEGUwErXNe2WPXSC9MMFgSzjCZPiXEURYK",
  "key47": "31z6joFEdMjdobkGkAqhAtpVsjP8G9RAQNoVNdEuwKn4fuy19UgAh8WNhqAX4N4Sf7PKzRvNJwGiFveCytZndue8"
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
