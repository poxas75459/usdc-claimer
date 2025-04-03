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
    "Vn8u5jcrCtkc61tT66VT9ZpKVxHsW7tRXdfDqTwkhdEeaAUMx7wBM4t8D532uP4uD2wru5HZLXWc312KuTmLbK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fYkTN7q6MJ1hqrbdfzpbvVjHzqCwohKJsVQPqXXBeZB38BUx1CnCD28GzJ2FrLZQuRtfxm5XK4vThZiDxZ6dPjh",
  "key1": "5hY6FoD9y93LJgamHbgv63PXhVPov5WTRLrxUVQkAafq3hcrpM3Fm2XJywJNcBm1XjoqxjMpcsBa6H4D2FLaXEBV",
  "key2": "3nm1YNrS6wAu2wgBZH6b73DKFjJNTFqtChaQstEtLTb8H1UuDmFJxN1W8CykLEFZCbXEL98mVQJECnBg3dbGxaq2",
  "key3": "FMZ9tkcSSdLh56oWrEsT1WCoLKRJUvwdELfHkUQn4yAjZAsde56SaDaayMS7sVPJAb4SwpP2vCpgzN39npcnL3L",
  "key4": "47Y7wFZsvGjb7gQ3cu2Ahv84wg5UBgu848U932oarxhnMTjTicTiEdmdaecroq8uxv4iCjrx7mL5b4gLrSFhNaFL",
  "key5": "3MY9vxa2vcx47BQe8TRSsfMymeb4yTeqNBtxcS6Z47k4d6iJS2yXZvSFuubXpstDujwWEN7Av2DEFniy2pdg8i65",
  "key6": "zxiUF3E6CG54BegmTYKnZXk5KRGr5JU2Rry1pLBoBLZaP8sE5as6cBufgYRaacnNwZ8NuLHJWG8ffmrLsUmDuVj",
  "key7": "4bfnEHUxoDfU6YNh7ffwusEUFbA7w9CtdEyUJBY5RuoeKqymSanvXYuxQoQStHt9rPfeUqD7femXatLJ6vMhiHGy",
  "key8": "CTbZgwoxfeZ9kCqigi1LKATq7of3FejTxhmsrVE5wygKZruztLN539q2WeTKZRmUGU1Pmdo8uRDHTojvfegdbV3",
  "key9": "3KswxHxQ4awadVkSjFqhAmgpfHLvdrAR5QbhE1xjYYDTLSsQJis4uFEjo43CGvbU74x8NN2vkRP51u718ot6fFWi",
  "key10": "89hpihqy5A1Bwzo91FNK5Q2cRt8QvnHoQ1PVhyitBwhgrzYRJFHRZi7nzwGiunfKpWSsZBeXHXjsSbgnA4efAJU",
  "key11": "4xdeMwscY6hdjXhn8dTZVYpFzg6WQCgGVSb3zLmEci8yU9RHhTfLmiqeNdD3Dfu7arfqDwxwXBdQPYd6ozc7yJxt",
  "key12": "4NHGQ9knYYsDs4SyKpFGo1EoRijXnEPKdrRKmreM15UkpLE65rofMsZorKW3xAeSBcXhEeRyxapKLKuSHQ5n1uWc",
  "key13": "G1pPt6x2NZ1nmu27nLqWrYj5oeBcMA2Jj37sur5Nq2jJ41aCtDGfYzsTm4eW3wSqyhhEktmYvNXXJYZidLBTXGL",
  "key14": "2ek9DGkbd15eAvZroTBQErVxKjtaioGWgPuP99ZLREMBJ323nrAUURBLB5YG8SPqnh66DQD6u2eRKFYv1bkvKwC6",
  "key15": "5eWbh4SotGb9b4dSTpmVKobBiLWkRkBjUQAmkLnc3uLipuimUhWST7MyU7U1PhBEe5nQeWxxAsUG4DZUMFg6g1Bv",
  "key16": "4Le1LY4yqPACaD1RSnVC7FDWwy1M2GXcGo5c1J11G21eSxfxVyFn77cLGX92QD2gddyWP3p44Ry7antPz8ESav7f",
  "key17": "2gTkET7j4sd6hr5xLSnmV1FKSHuWLiZ5ouRymSsyA49hJJARTwkZfsrzoxjiBGxpMurmT4F4Dy4TBKz5jWC8o9Do",
  "key18": "5eVAW1vjZSArNfLjRfX57azLN5bScBoHPAbM7tqCkZoYbMsKKGbZ8QYWNJ5zKZXadeoFkEGfZZZqP4yUzmiKRAVu",
  "key19": "gqDz8g7rZDjvTaQgsBG5TvZYktEACMfycgFN7BkWWQWNwSnbzteUqecR8CKB1LJPUmeckf1pxMhuJb1CsBMGcCH",
  "key20": "2sDstwu68EEkWvaeycUMwDMzZhPFNaCCxcxz3D26P4NB6F5SdGQn7xPyWBohrycGT2NPG7LVVeAGEckUfctFSCQH",
  "key21": "4haxkCDuYvFcu8XEMVicKvBadp2TFDXCagQbtQmNNNNFUbk2r1KC7MdjaWAN8WyeDBEWxK89ipKs2xcA2gHLKPRF",
  "key22": "2wohncVbw6kFMiLGNzfpLpMCxZaXfdgAaRrjxHiWMmUwnHovRwPdfY7AouJryM9SDmud6ohWTHwGogns6dQMehoM",
  "key23": "GRPTqi5489XHtjd4iFCNHgeLrYFC69povA5ChFygabwyEWUzFFUHkvfiKGP3VRGcQDZWT9tonEHX9VeWnUqsaxV",
  "key24": "2Nd9xeisg5hcGFiPCF4Q7ZiicHZ6AfehSrrxELQssLq35Afr4DvK3cQr8ZABfcpLMko8UQFofMgLR8eSxkw9i26M",
  "key25": "yrXLkNTTrDJ3UqThKHMTyrr7evf36BGgSmW5EoErebu3p8vXwCV3C83RAYTDgRC6rPcgTdo5GU4SKSSxHiodnjM",
  "key26": "4qchGKJu9XVLF5R5bWHVMy2Sn2bMS1RsbbbJJUKbgfUcrzam57aueZwoJwSEampvGL32nNYb7jA8K2LWsyaG98Gq",
  "key27": "2NZPSXfumqBSYxz1iA3zY9y5ZZKnkciuYukif5i8exGunLh54nL1KDwLF9vKjWWWbUADNW7PZxfyLPV8frKcCUZB",
  "key28": "552mZq4i18mSsyht77N49kV8XSRe1dVwZY7HoeTidt2bRMbKQnPiq4jK2yge7bmgivgXFaur8haXbtjyh8dv8frg",
  "key29": "2C3PeAdUeYgyUHLWc7kE739i2Kjw8F6vkySXzryoaEkHVBboQvETK2CWGU32EC82eeYquj2PcvNurMPtNPRquwM",
  "key30": "55iueH6pXg8u8qh5nps6PcyoTAR6KPg4d8n85puw8pekPnCz2cr8UxWtmc7iHDf4bcUg5PiqvQZzkyLsK5eWUDBw",
  "key31": "5pxSSKP5Ta5wtSHtHJtf3PnrczkgZhriqkBQ8Vvoe5GPdpPL6Dj4qxi8kYLqk2eCKnREfG81dbCqTVRXLS99Dx38",
  "key32": "2qvAwpDCC7xN93y6xjGYjxJG8oA1QKBiBCZ73F1yQTbHFP6E76zLrxnJ85uoZepYfQgNCWVsWinmQgBMca8svWrv",
  "key33": "4EtBgQH88NBF4i77JN1K3e7yKavaNEnaWfe1qpk6HZDMEWmjH9L5tTk8aEwpLKZcttkHUja3Uf4jUhtpAoEYoTDk",
  "key34": "5Hx2NXPK9DFjJJ87tsYiNuJtM72ZmXkiQ5xBCwmWFvAn1kjsDL3VXsd3PozjdsZ7pBio2S8WosNnZrBkAKujqKN5",
  "key35": "5X5sJPnsSPqetko9DSHbmEi21uSmFhbFHBSHqak7HbxwRSCmD4rhWNjHPoLpes9rAU6GvN3JRR4oTtu3aR7xgCB9",
  "key36": "4u6YV11po6LvuvdSta75cHA57oGknf9UZ7TnwGM4fKTVpud81jWnD97GPhp8eDGdvbvbvagjUrenbbjY4iSx6FBv",
  "key37": "46rcksy1rfF1GttANySrJv3FkC4mPueQSL7tC586MMn7hHUcCSAaphDiacGgvmKB3Y9fS492C2s2jeYVuromXv7b",
  "key38": "2dRpYLhVBf9RSG5xPKzyXqmBFH2o41Gbdwy91XmG4nYA1s9NH3WfmNmcGEuAtWU9wBNYPmThBt57Jk5SaYD5TybW",
  "key39": "4EnSHiS9zufiBVDiCv8W4F9XpKTFjNnCp3KwZdJTEQi8m4qtybWKzwaMH8Hthx9AEaYp8R3bzKSaBgd6Gv3X9Hgh",
  "key40": "P5mFBNdkNViuHwpK614rV6xsD6uyP4HPskAeWg3uu314kmn9EZ3otLnfVWvcRhhfdTV6QqTqo2jFuABDRehpGvH",
  "key41": "vru9et5NHpDU3oSV7aYPC8ShxE6o73T1KGmHS9spEgb3skzDdhaNaN33NxkWuQDjbmSSJzfHfVy1Up77KCnn9jC",
  "key42": "5beRzZQmcyRnGsJ2TmJha6vuTtGU5eTse76eUZ25c5NXG6rk8fHPF5qgvuNmXhx46XfzMe2F8XmBQ1WDe7DXC3ED",
  "key43": "3BnCPfuD4wp88YSh5XL1GG2YbUMfzt3d4GvETpwFAEUEpwSL5aKnNEJgGD5wy8ysvCJ9UHkAQbwCSqUuotZudJZ8"
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
