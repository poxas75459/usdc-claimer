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
    "t1fz5Ni1qmz4sM1ztXMNRHKxjeLdM3wkiCWwBKHGQDs1CbDdG2osRmyZPrsbvndQ6qfx7e7Te5CwNebjV6Qe46U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tqfA7Dba9oNJy4uy1paU1VTnuSXkREzZefrcBLfsWrkNZGaijhagc4QQhot4WFEveTQTHTgRx6dqYfFej1CGnhh",
  "key1": "4y1DZmvLfVC9zgZZSXkmLRN8j4bw7oZmnX9bN2odVZ64PcpBpKrT7ajzJoJjsa1wBDBnUeykJsJXeoTPPihnXy9Y",
  "key2": "2oUBhDhsYLAvxDLXpa21yaU29M1KKKSUb4aeuSU9JX3NKmJaPwdRMpR8GXGaTo3NHacEAXw77cjDK3XpNAfHSvji",
  "key3": "bDrvsRYFH8mQUKyvkyRbVf2vFN5R27swmNHoUZ3bvCPGUgemzqnq4Jgzwt78jyjC8Qgzky88zRUUQcMaDvfGdsw",
  "key4": "2Z5dz2BYsE5uhhaE53fCEJwVHS6Dwwx9KPHJopCZ7Gd5M91LoH8XqMxWxyEmSBBv6AH2TTavfiPfMp8qhC4wmqnj",
  "key5": "aW2aFVEJNjBk8eDgQEhK1j67AamHkovDTkpkuvxhX4jF7KEpqDrjV9gP7niVSNxvSumFnJhC4xTrz59KSUHUbVL",
  "key6": "3HaewRrQjEqgvcm3MkwykyWy8terPqXNNkqWpzSuRBLzC7WLDXDF5QRrX2m9xPsXoPEqjgr8vQAP3md94oSQe13T",
  "key7": "2pGdR8KHUxtzG296B6uj5fix2H7acSTi7KPVU79ogMyqrEnL567SjM1EmmGVA95NLC1juSptEJavXNjpHES4cHj5",
  "key8": "4KyjDYWtxgpzgupoJ3aPbsmYisFDjQWzt8gHfTUb25j1CTpzBCAdBTYWxFt3MXWLa86Gn6KuGEmABPVKu8JKRnHB",
  "key9": "nV8ibkoPtW5QFefriDb2sKa3fHTKT2ejb1uoh4FMfZBK9feNyENVz4xvjYVAqnPCVkqBSzUP473CntvqopyuVmC",
  "key10": "649PpUSWHkj9fhHWdwMpPNkQY13vzv4eJc4qRUQ8nzSL84eKJdiNgdbhoTQz2TYQc211PxcbpZxRBJmhYWms2oGL",
  "key11": "2SxvU2YL6B5REZhhbf8ntJ1jN5mcsp2gyRSxHNPGhpZke63ME2JKk6HjdEAP9PiVD95RjCnMiXeRUQNNZehpJ8Xc",
  "key12": "2xUiRropDM1MHA9GfiAKwabpRmctmwaMiN5RVT8RvHkzTNyUqrFMsW7x9nnQqKKvwmeVQQgmPKLnwaE54XfjGqRQ",
  "key13": "4vM7r6GhkV6iSyadXFpiRajcSMZ7mV2qVa47wn9CMGLdEjpcDkj1F4XRuFhYCoyqDP4Mp8Pp3QCsKM6ACpm7xVXm",
  "key14": "468B6KLGPeApLmquzuZrPwuWXs2mx21PVC79C4yTHMeucoGtHKY8bfxKnVUXH5LzFC8MzT7mWrNXpov5YLPytxtS",
  "key15": "2ytNYnc8iyjD3fdBNFC8myUnFK3wfu2ZxuBX4KnNdyTBBaGCabpAGVguKBDEKXnHZ4EJ515EywdQr8BhCvsZ9GNb",
  "key16": "kWXgXF3eRWfcDt8AYBghDvbv6wT4prvNxNngtgLCjToDgYxg9HWUa4ZmbgQD5AEgReYuun9z7ZPxGRtVb7G9Z6P",
  "key17": "hHCnyGk1JfFckLRwVDrDtZoUVrTgFXqLpzsawAwKaAgLnks5Djtj48GdSNYRMcvJnfjZFWxtGqt1NdbXQp1JJqP",
  "key18": "361q5g5MAB9Z7LCryDXBBP4jG5wLfx1V8eVhd3EPMWuKAZ6ZjJNARK7TsSniggb8wgXyfPs5AJ4CMJtFbDauCfNm",
  "key19": "V2avYU5uLY3vq2oFYhSwhBicyY2qd2wYKeDqGvyBYcTqMo7KpvPxRESSoCHMPcXYnPHhU9ARGn3NQAde9A5ajSD",
  "key20": "7a318K9ehLjoweZpvBMeF4uQheoxPALWi5AYaA6WwmkL2KyUbnBcfDNXBu2GJq2v9guZqo7Y3NweR8fRqQ4mUod",
  "key21": "YxWL7czWNHVrS5kYtUkRTf2rgsn6GW9mu9cSYYejpZjrpUtCoZ3k7AXVKt1BkabpgZqcpvB7DjnKPq7Ks681atY",
  "key22": "5Su9WdHncWgRysGmsSfWqJQ9MXhGZLP3i27cCRkJii2i2dk4C4eXXfwdkiT1RSm2UR8eTYK7szcDLPCdZKDEDymW",
  "key23": "39M5TyTF1FirtpB9TnyRvLkDheoyE7VvVfdLt8Wrmk8LBRpnrsmDSQ2idWB9w2Yv6nJiazs4Yu5dQJvqRDx3xG8Z",
  "key24": "zTb5xfrwQbw4Qp5bkfJTwEsJKBsAyTgvdDovjNp1p1ihLNhxMrwTP6G33zt1ZiPBksnYvLQDUnAZEe7xaFPxnW7",
  "key25": "XvnLQUKy4opc5516ymCEZ9LXcocfsuhPsQPcLHksDVmTB5HWaDS8qoDM6DPkKCkjxRVX3DoVDMBkzPQy7s59EHV",
  "key26": "4pmH71CGr5aT2Rtw8eEh9bLMmFmZ3T7NP2Dfn2n9pAVRRMg8hqCF9HnSa5a1ywDZJjATbJDgHzygqUYV8AcUsnc9",
  "key27": "3bsEAqRMcUqbwPiEcsXX2MUZMskRWH4YbcHyv9nyujxCT3NkP5DZVC8pMnxa8k86FXPf6ZkNiYpymkxdrqmKvCcY",
  "key28": "Jp6AV6bymbEKgXrBYTkdpLBpQSgJYHu7ogtEwff2bGpmk2zwNYppDtYQ6nGnXdzbFforWSfZijMWnBJ4gUpaDk7",
  "key29": "3v6Gihn9PvMab4v81ZF8Wqec33WKwpamXvSitJoruruwLLtVpVFJzYsYnu6Ry2EXY8boqCz2DC5MYM6N6nNDzQfh",
  "key30": "4bsDeppJmjMzNWamTRBj2sNL9mWiFuv68wYW664EyPjN91dT4CxkvHWeCE53CQ8bAipREdDmivqsgZfyQhvE2fGe",
  "key31": "5Vneav9kRarQ82k6jVH688EjerZTPwvAKsYHTQtnMnVRksAi4hSr5e1MiPhmrojrthnpPqEBcVZ9NNojSY1SokP3",
  "key32": "F5G5LoPgcUJsDaCuMhbrusyVZvbNd4moV6X9LG6FK4rxaCz7N2j62788u8NyMqiyd8yGsLckTCatVsub9gTGsPc",
  "key33": "p9GjJ9QhEAzjowLNrYcSp9N86T2uRRyvtSCFUorD81koagzuYibZ5eDyY7KZe3EvyPTh4WQBVoXGCrk2ET7J4Xs",
  "key34": "5rcNUhg8iCwECGc1zrBfopdGEr2hPtASbwiPHrXGFdz4nd1REmqSFyqpBJtYDQwQ4pz2QKHdWXijpPqonvkC3BrG",
  "key35": "2ymnYjY5wYKxMaWTdAmmgd8te7NMBnDCnJbDu7Y6pdrAd5w2X37zg5tPWWYPwmzXfaNEKFZY356fo9zbAGX5t5rb",
  "key36": "2BHBPJBNgupSSsCFaCiM5hpwy3R83fS7nZP1HV9zpSFbqLUp7T6NgDGkAfXkzmiycEvRoPwQPs21QjdNvU6TF1SB",
  "key37": "vmxukJ1pgKarQgi3KvSxKDD93gxdgQmdA78rNdSa8y87k2b2Kb7Ca45mtwmGktthmE4pTwf4iU8E7qUdrMYBuqi",
  "key38": "JK5bZ9VvFVMjs4vbsyYnariW9zMrawBzeMC4oejwXMZkHmdfQjBAxr4p1G8c3ioQNpegGPaNVkDxPaNqUwaibwn",
  "key39": "4Q3pwrGgHC9PyiDhUPfFRQP8jcX9VC8JsCusVTDieJ9aUrVXcbukBBFM52oGSr2t31JNYV8xyWsQNcBDCAmdoBSD",
  "key40": "3b3ZDzX8ddd5VPaoyZxuAaJ6X7Mj6QiDkv3cHHHEeeMGEr3HHGNZgTQEjPJwNnrkEkjFVtryoCzc4KJMYwWvSSej",
  "key41": "4arwWvEmKA37dZxRTMb7wCrmFo87rvgGrEePAHNVikH28GNG9rRhvWeiffryzBfEUanSdPDxacBu7FZMQcNwGAiu",
  "key42": "4Zh4nDTXQ1hYmjpE1zqAgYjhZjUsJJRTTD2ySUd9u6EewJxL3qVu4f9q481bwCT4VqUxCTkfj8y417uyc6p4j5Yu",
  "key43": "tJD2HBKxGYxx1yeStoqCXuYWbd4UQ6WFaKyJpqPK4nx18W85FQPgzaDD7UzY8aR6hfLUcetrd5aTXUYL16XPTPn"
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
