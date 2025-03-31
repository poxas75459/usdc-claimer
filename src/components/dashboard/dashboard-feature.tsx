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
    "7QGA42vkVdDDXAcQAiAxhjZV75u1QjdFojqUWwJb1yQxGLQ1McmLCFLJX24qUBdvhZyo3MBPCFfV9W1DS8K5fiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gWYvgD2zgjMnpy4NVx2GBa9RGg4dKG5KiuzHLfoeXMYmJ9PQS7BeQE5uZRbiuPruMxsBnQHsj3ekX9Qg3GUBfb6",
  "key1": "67TVDk7hBWpbGRQoKsayp8VQbdSKUnEM3SMMxxcxjCt7JhfxmazfpjmpcuvvSrUBuRM1mQ3m74NiCar8RByCdcqM",
  "key2": "4gmXPF7FwT4tSvxGhFe1hTQwePZfUoLXjp6XtyrQhRdPPDLEfSt7JawJEFrL6VosxKYhDzs1KBGZLQszp6QqGCEY",
  "key3": "t3oxbTUjR2BVRLWQ2dXUEMA59WUTGyLtrxr4RNjLhNAE5V2qMbRpCrpYBidBwSSzXxNnfwbK313scD1niXaVURV",
  "key4": "2M7FYNS5LYQdJKas9e6t9ymAitVMeRkbqzA3Rov6qcs3DiJ29TDESwE8i4asXCEnJRDyAMRep8ABqBBTXd89b4hh",
  "key5": "2cZc2d2bNBMKyEXmyVJWtw2F6SvLHcNZ4mr2joeUpgcDCbRbHYm1q3du35CFBKMaeT6gQ8sdotimKefaXU2JgYPi",
  "key6": "4rGh3pFe8NSRraSkiMUPSkBja8YsyjiVupAQBAgtGdM3qHBRxfPhDK2TKNe5fQU8JnBfnCqB5QvC4Pi6qGv6VKTu",
  "key7": "2PkMaBDZi2SchJvqZYEyJRxVunjzYVe7bqHvnWshaXhizsWPVN39nBGqkgbJJwfa3HrqJxPvFWj6LfLt9pdZhtVX",
  "key8": "3jUqteNbxnDCWPu7rrDycFFWQ3i3SBXwJxtf2MbULMF1b64d7UyRaSJbeFiNQR5YS1pjvxMWXUqN6qNKzk6a3LmG",
  "key9": "2PKySn41fRHt2uw45rmDH1zyaLpr7sr98zysPndm3u5ksEPKrgbc8W4ezJrFkwx5sstxUX8QnXWSnccP6kPKBs7x",
  "key10": "41CgzA5mZkDqSKtv4224yQaTPWCNb4vxE4fkEAzmrXgTgJVfgMJ3GEtgdi6ihcoSXLvJP92pmfNKFavggJCFjgTf",
  "key11": "32DRGQE1A4ahnBFeeQj1JJCSyJxLUSUunoV46gxWXmnihDGWBkLAmKriE8Ne1JQCW9iopr6mcxJniPEQRiK62Uwa",
  "key12": "5eMW6sEwW4MCKf7e4R7M5RfgnyypA99wb6mi2DK2MRoVjmYwUAYePuXb1yejPUoX65Q5uquqiXX4VmoRUQ8eisML",
  "key13": "2bVmQgizsQtqwysUdwSp39ryssTR8MPkq1Ymq72N3MSzxeJmCWjubWL32iEpXrh1EjKUUgMMTTcffUjf2vTZBUYf",
  "key14": "3J3bNAHUeDSJGniRwGnpqBCu98UAkjuL58wX7aesrAMfcVkkuYLw1BNqd62cdiBWQYn6FZ1JHGyjiDYmLopzcugg",
  "key15": "4P5Cm9EbeHKAShTvPqJNeWmPvj6ERTBoozv9LFYpajRVG87Nsw6ko778jv2Ybwpev59Cua8RgD72tMqZYRhiyk28",
  "key16": "3dExoupgazfw47PAHJGs1kXdbQbMuY8WHePvy8qATm7xJDSBTHzVmMZXYr7UPtQacgf9cp8ZZn2VKqEdafoEsEMq",
  "key17": "4Cm3HKMAYJHDikRV3UtMTHabRYxorfXNpWRUEWTXynWnmwbnPJD4bNLhq1qbCh1bMz2abmdU4kNJZ79ijAgaUPDJ",
  "key18": "FckGRRvPM2CfDiCeJpe6WnM4ketFC9y4VXQztyGbb2fvBVKUbXw1ZzZnA5WX8eVccD64p4EgDKNrASsQ1Fdg2QH",
  "key19": "5Tt88GpeCdjuS8CyEar9VLVn2jBQf6PQhd4JkuhWabLYu7b1YEj3wHqY71g6mZkauhbzpate1KMM18zUGYeEnQuu",
  "key20": "k9CuB16jG975sBS3dQmrxd37UE5rDEmvaebXddvuhFmcXLofbN34n4wZuXpcQa4ynxhFmsHAx3fvwJgScRtUKNG",
  "key21": "2zgPEW3EQBfYtFKmURtGJWFwShqofcXhejeQf5WkhiUdtgJjQZuoxmYPi6WDQMAVpuBrpdSV9ANd6PNnqbZ7qhW2",
  "key22": "Bhv2rdEusRMo3Zf3EmwNVXgdpaqrWYqqodA4nwJzDmEFsQGyVjhVNjt8EtbupEQjSWu5YN8JLaKDFUpkgCvCk2f",
  "key23": "4f1wGUAr7k5WstKToGMCNeFqQPoaiF3t1JD6RzmF96ewzVv1DivMRq2J2KVv9fRk2UG5N9nRvFNps7doUcBDeCfV",
  "key24": "4NNPvZrvF3BDDRbUUgf7UKvw1eoBuvW2o1S9yBELpW3uKZMrq5Uqknp8rg4dBPaHaD8nHrmCV9XHyAmagca9ByzT",
  "key25": "3MwgSrxqGKVseeB6hUcGQYrjSh7i9VmKVz1Lg4B1rXxpzVMgmvXpTjhF4aibFATCMnocei5FLYEE88oqu3uTKWZK",
  "key26": "5A4MD7etV8wPhGwcoD3BYc5TLaZvTC5beRFt7agK9yZq2G5De2qNT4y1eKrQrpcRae1Q6baU2GonPVHydtrP64ec",
  "key27": "P5yssMNa42APSyjRSeVbyVG17iWDRVecLybx5vL1FS49QMHfFp3TMdUcKqZc1YvDc2KDvaw33TKrpFq9ikAd99t",
  "key28": "5uA5t18wUnx6eTEcSoYHyRdKZNnXEyj3xLPGzpAXyk5potGQqqBKP4mSp5iw5ma5xMfCvNZdYidYJXuhy2jgycpR",
  "key29": "2s8WyGwQDrF7pjE5Hs3NPS4iBEgRBKiWkYH7mssp9rFshrP25rxKXqsUGd67qYwTtPdUSXtQrZg9AuRr6xvWFteH",
  "key30": "9M1cwx9r5tF67WK2NFoK1d6q2iYoMQEPMqKMta8CT7TYPM5JLfBQCnBdDDCqm5Cfze4HDjzYpMa2HGidGBCHJaz",
  "key31": "4kNDv7KUrQnrekrN9HcubddVLoSNZYMMQFY5Pp8q6WmhuUu6ESGpP3QjWXZ1iKQxkrg3Wm6NMyjnNJrarzWbhUqz",
  "key32": "4YRpcibLwP7aLPMKdxLHQwudPA2tYpm1NTt1RpAxSWbdoxQUBp6EgvcZjYh5YV1Vj3xMLAJNGEngn9Bjnx1Evpse",
  "key33": "3VLRLg55pSz9wvDMp7FhNDCCz7dLSrnLTAijaHJMfyEdZfNLAbzrgQBqVDvzmEmw1LgPNxhNaW8fxHEJaKH1dthp",
  "key34": "3QwmLLhcL1s8nReY7EmwP4XFNQSZAeX15AqdPUqYq6fB4AAzbUJgSj8yzohvr3ps2G9eBm6fbwX2JJsaXqfcFp6",
  "key35": "3uBcsQBniZFfdrHq2Xn44zmrcieUKwANbqhMQhw2GVJ31YhZSdCEmRYoGgDFS4qTZ1RCjc18q9BaUupKfErwvGLh",
  "key36": "39NHJrQRP61Duoc5Zafgwdf4KtbeLrEr5xWvyfwje9WtnZAdj3gAK75ZKjLEAyJpop7fZWmXYyftAKFjyakQ21rm",
  "key37": "5fxEHaVqj1y7gVHQo6mgUu44EvJE6rNWVNrK7E633HCZy9EQEgTQx2bbFfsJ4fLGPKaHZKoUnseXcDxGmRpHVqgw",
  "key38": "2BMeU9gH2Ab2jM7aCz9VLrHvEAeGpDBUqTDFGedDzZXYCJRyK9p1XzJsLZ811nxNU78koBSz81EDXDbQ3dRe4P55",
  "key39": "4rKwz6aCM86zsXwm66QiHcugTdbnQyJssPDPQ1rSZSGkrLQkcDjfs8Ts6SLoeiR82Y9HKZSaPbocLdqn2JdMDXxn"
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
