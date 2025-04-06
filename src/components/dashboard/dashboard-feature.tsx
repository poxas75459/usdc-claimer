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
    "4k9fLLJ67KLzwH8KJHtjs2hZuP3uaKwzJ7VBwjn3kYMmSN93kUf6d4eTVQbYF1nhd2kbZHdgmuZd4pSJQprqzWzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45SKbPwxRToKcwJHFJ9upvj41biZ1KSt7NDwUV45LtwFnANVJ7vCAmMRhovwBFxNJuNkdL2nhy3ahWVt1sJGm6FW",
  "key1": "2NADmSQXtEMyakpbfF75f1DC35KrnbjmiGxpP4EGMvY5mS1bbGuYPsLAPrkfx4pmLjq1YJRJkWB83qfwZiWiyRXd",
  "key2": "2DRK4KCDHHjjrNxSsSiBcNtxpwXqFvArofokmARy2JuvDpC7fWDfgqFJJ2F41DtxmbwzHZPBEHH6hh6xdbgzuLqz",
  "key3": "5VvkwaPY1j6qhxnQsejvapte7FuRwRVQKk23cWwVnJCCgXCB7vq4rSnDWhme7rvosUfmnWubhNQimrpjLTjD8jdg",
  "key4": "3xSV7YFvbkCaGGueX6sogN1sFSsCWXexmsiKzYSmfdcgYUU5DCuNQBdZ4T6qtq43fvTRmQhqYPXosB5cJFe4YP17",
  "key5": "5KmPfQR6GsvGm6kokQecdA92i3FjoB7VHWjsKEjYEQnLPyMb4vhVWnAiK2FjTRyqHw6VLaNLFiWtPkxCmm4KBBFB",
  "key6": "pTPC6sWBBKf7hj2SRetBM6ejf5kBZj9Dua8XeeP4BHpn1zCS3SVrWCtUTNYFTNkheCQC1BJQ6reEWYxn37cSQrQ",
  "key7": "3fEnMSpvcz2i6do7zyDdfsdUbtJKSgo48Wi3AvJX6cqoDC3Tga5T8kpXevExgTAM59ZRufbG1BWkF2XDBNXtvj8L",
  "key8": "2Ymg6X4foJ83P9j3Bi8N8Aio7qxqozYhXS7e91ZduKapDU6XfHnBMBxS8vrPnz2bFqFK73bZtwuvP3GRLeS4sWi2",
  "key9": "22CWwhQTUibP9BnFbLp4qgNQ8eLopKKfg5EEQtJB8vyjjDAQiBoQPzrdfvEt2AbgeQ3pU9GaPdWPcNhX9ejXnHBG",
  "key10": "2vR5tYp2berA6pKKTyPqfRqJpL7HSMZD5cAGh9cna8DUuWj75hNkJpnHQQHsoESEpWBDY4AnjgiPfj5M3VvTBdaR",
  "key11": "4o7sZMAnKqe4WZthq2NbeqA7Y1sDGiYf3ULwKoVH4egkML9ZgBhBncnN98uLoecEA7MET2sFtrT9vvHYwcJ5iRTH",
  "key12": "3qC1nKkYs3mARCBFLyJnH7QWnyUPvGSpDfZd9gzT85P9Jp6UH73Wi8gFLWCvyRbBsyx7XVitS8g8DMuFVFKSuisU",
  "key13": "2vKjwLw1u1KQpXzfaZ5HpQbDWBdQeksXZ3kK1PXJ2oude9B5mkDHq9Ys22aknMhXZke9RtDuV4cdPzVUdoawbQhG",
  "key14": "5mSZznFNtosprVNoFY1y9ukmctpc7tiangJUd31nWVkE35Y5YwiYQgkBmEbJaYCyNVWdeAo1exvYxgLZuYYZQbU7",
  "key15": "2kVJUhnuMLGCi3dD5pVe1q3S1tauM48nW61KhL58abwAfcSqKCs3ygfPaAJ3Xk5hUbVZnL5wmXGQfi3ZCmaCSr2j",
  "key16": "rgjxPJD8HDe24QyjTtoZciz7JPkirJh147qjWK7cY829ZtuUwLMuHXydiegoaVz6bvA8yRQXLX19uAggfY9edoJ",
  "key17": "4BzcmYZdAWssZWEA19KUMbGVbMguF8nb2BwQqu8Yd9xJ6XnsQwynTJzjqB7ugJKs61VSWia1brNLFrhck729GQTB",
  "key18": "5FmWioHKBnVTDio2QCBq8bmbWcoeFNj5aPH5noGzcTP1JZBJz8CaDoWAGssqCoRZDnTFZgbrb4ry337xU3X5TxvX",
  "key19": "5rgFJa93z8wRVJPFRYAjgB35n4k593m69EvrW2Tgdo7znbAAEJZGNDttPZx7CvBXH6MtYTrg5XBvgnxV4W53YVef",
  "key20": "W98KMuzsV24vUSEiTYGU2K7Lfz2Bqn1e9qMP6sLAVHqYLm5oc6XQG69tP9L5v1vQdyfPSebwGR17EbV5ymG56Ti",
  "key21": "iLZVFH6kuCkizphtz2btA8j2kYRkutTTTVDLskKcaVcudu22QcibFPWSarrmenshNxWnHAM5E8xiSkPZSK1sGUG",
  "key22": "DDBmAXCeaKz7oJKth5uxPS2tLBLfjtunKyPrkypeXfvKUmvtZrVqJ8z6SdwQfA6y1cDXxfJiMPcS47cHf1LY9xF",
  "key23": "aAGkrnwk4nKikJxy6V9oxBzoS83GQtowSn7Eo3pMcvbhe7MxPCiNXYLhnqe6dMo1XRyxyQvLBC1UuHpkaKNWb7Z",
  "key24": "4ucLtfR6owYBzGSer8ptH8VMqaWCqN6x7xGXRykdY9UAuAhc1nbdpAys73TYABAdezEghkEkwGNLSLFJmcGnY1HF",
  "key25": "3yHzNHzMzgps68tuz3dNNDaP9rc4ZJg2vbQmaSK11g4yY1PiWL8A7duafHDjarr4jqektorMjJYFP8ssd97S4ubF",
  "key26": "2r6rALWKtosXJ3r4My1M4ffjzFSftNPCsfdeYEopBomS2MuaLwKBsHcKAZo6M7MAfuREhWHWgekaY7sfSTWXKivr",
  "key27": "56GXUnxKFX5hAYh2zKpGQvqPcV6W4ws9uucLTmhigznPyDFSAcJ4cwvwieduZZWszWjsWG6rMsyxhkVj6pVATv3m",
  "key28": "2SUmr6JHzqvXX35597iH3L2EiQiMDjzcY7RX9ckpS5wxPxqAiDNjdDsAJ6hRBc8sSaFr3BcUyULpPgLrtCAMSS3U",
  "key29": "4g3cqQ5Yx7uN2yMnjFDCzQa3KE4GdzbTaLN7FfTTNGvBXgPUKU2EMadnMu7k18Bfh8pCnBr76hjw2YJgak3wQ1zy",
  "key30": "MwsFmQh1Z1A8jxby5oER63RnikvgUYF3RG3juWDfgKKGG3xsWsZL6BUKV41LGKhfkqufzig2hZnfpyMDdHUWvKQ",
  "key31": "49rmojN19Pu3N1PdCemw4d5zQ4wkeNRecTAwixMALPMxwCBPP39gR58cSAnsYQk53oY26734yFsqvN3WWaVvrmz3",
  "key32": "4df4pwwY436GhJ48j4M6bMGELYMFR5277oa3qVMCudDaSPQaSFkzdJirKuE88H4u5714iyfKfADBL466YMtZicDZ",
  "key33": "2qdxuSedxPmaFuP5S7jYEprn6k9i2eUtXf6Gbk1pkEdUj8CtE6K5UCNqG3Vbg5yVVPGhpsQL7QQba7xLawUphvC9",
  "key34": "3MEPMYNTdZfMKbSNhBbiiEgQySf8LMozEJwppx1ijhe18Q2DbkCdvM4MmfQiiDxDiNULpfUG7PAYhKwt5n3UMLM8",
  "key35": "nMFELrS7RxmuHrCUQ3jJwinhjg2TUDKvofYkWwYT6UbsTaY13upT27jM8ZiU3REoY3omsx92mgVekhALSqQVrRb",
  "key36": "2xBamAVrej1KQMX9p7HiKTTTT4eNUYT348UvuVuEjhEnmGVGwXYpFCEkbGaogoc5KHU7dxj3AHArU1ExmqE1caHE",
  "key37": "mCsoMQJvYZcPj4ZUKrpaBwudUe2M9fBuYPn4dFrKjov7up3zE1bXLiydSU9xGDT7bFrEdQVXeqa35dVohcgHhhe",
  "key38": "2mfRx7Z2Dt45txXTFXxL1haadmm4drTKd3SXWAvTFMYxz8YRQpLLJbStrU7zMAE236Uu7puj1n7e5Ddg2Gy7vKpb",
  "key39": "5K4wFUDrjt8VaYg9ivEj4aED7D1Gh7E33nCB3khnHByAXTjaEM12uDg7aoLyTY3GYM3UbJRWQ7m8FT9sLoomb38h",
  "key40": "3KExs69UxPaoxjDpM48tD2j4YieCQiTS2LDtD48AENWfAJEei3a3RPemHDme1beCob8TWTg9ZuHGEFkqpiRUxr5w",
  "key41": "3GYecCjWB4ZpiURQT2U3NdP5oTR3TDzcVD2yUBAmj25EexenRaYYsJTzR9QZCpBJvzQu1QTzUAwDk5JfFG8uZcK",
  "key42": "2bbE1THCgoQezqDwUZz76x9nqsJ4oB6iWEmAigGjP2oysXxAU8QbiLvtYuFvRBy61mpohkkq4DyHfVDsqKTCfdN6",
  "key43": "4Dy5gCXV8mZBJhNSjosf7kqfTA7rkYRZv4m18wECTTPb32kKQQZrYDWU8vYVzpdfd9AtzXzn6ndZYL15WfsfBkxU",
  "key44": "zdBU4Q85KXQq6n2HPbDZkkp6zusYeN7u4mNDyZqxmYKgw6b1btBy4Ar5skWCTTUcEtFkF95qbQoz7uvpWgx1yUU",
  "key45": "yyiizaBwQmp3oK5LKYNi117CYs5vWYx4me3Ai3dPYmZmEKston88JUA2Kdey5CbkWLdpoWKBzAPX83mqJn3DknW",
  "key46": "M1gevys13Kh57G4qQ7yUQhkLTwyjzY12Seq37yRFknFwmNWRbESG2s2rnEZ7XUaYgCJH5ug8pDvVbpJedjuvhCE",
  "key47": "5YUPiGXeVFckJESj4uJhBPpmW1Ta11ELyyHjKytQGBAwieja1xhSUkea1SAgfpBmM9nRNY8iVFcKGoT473w7hFMN",
  "key48": "3BmpKnyZJNLhSQkX6WCvscZoEsuHTDajVJW8fPdcrZ64nhT19bUdzJdHPfsxzEuzbigDxfsLxPkKZ9gBmobsSSWp",
  "key49": "3iTCcGeQ8uHT9mbccSh5iDUKZqMKG1NfonpqKQwHQpvVYp31xGYnibUvhQcRCrfvxgAejtsWC55CzForQguoZUZQ"
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
