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
    "2ZArU1FnPJgvkLXxziyijiWTJA2Dryb7aUc7WD2PXY3ZYyv4R9X31MH1mezd4TSXe1pLbqffSgdHi5Ltm45MdBuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3khELDhR9FU26ZLV8gnn6RBEEwE5omPn5e4Yv8fWgiCCB9LizPMUSgSvEqsWE2dWpdqqStaaCFc9Mrp7U5mwMVA3",
  "key1": "4MaLBzGxKiMsNU61YJDTkR4kUc1Lmadmv47oDKa8Q6xD1QPxjWLkLrSPxiUMACxNW3vKuhFKpcfByULivGRLvh1K",
  "key2": "542Vh7mbtjo6PeD2zpkN5QSfYBbFa63QpqgyrK6DWewMH7zjJfJkDryGeX8VHhoUEyd3NY5DZUdMggcPtQsGtNCS",
  "key3": "4qqrx2k6EqQ3H72Ng2zjh87rqtxTbtUrPScgcY3kJcjeBZvmGmQrDsNPgkw7fTAX4C8vndd6xYxG831Ynd5HwLAj",
  "key4": "5jx3XLTSao6PQ6cwwF17FcFdk9H1LgQLpR2yrr1uH9eBuHG7VFKDNUQL3XCJYBBVFWeMK8tCLZ7Gqx4bgowQPCqT",
  "key5": "2mqwqYxqD51g9FAPDzhXApDMXuoVFRsCM3LAkUVSR2En7CGNuK3bud27zwmbUA4VUKcX3CHaRjVBdtSnJDNLz1uG",
  "key6": "4yB5pM69VfUV553aP36zTZW5rrhP1YERCMMnjHDwNTUZTczYPoQhaBgBkJnZ2Tc2gTBGMWEvb8PffCzwhh97LRB6",
  "key7": "4DiuUFWqS8RXWr3Y8JQsimZAPLTHan8Ro4S5PhpoFGckCYDS37Uq6wJEdroFTBTPVBzT6sPA2DJRmrxirgThfqcR",
  "key8": "5YGP1AGD8ze9GS4pnucoNALLrvxH51aF32sTKMCqCsFMeqESmVvxrknU6cQ1e3FniaoajCBPM3GHiYAKMwbEv6VC",
  "key9": "3LNxMKAjsLZJAuXNBegcdYDSWsDb8nwLCCZKSV9fxBbDNCvGcXt6HrCRLLWH2hbP8NpszXg13cjPHBPZg9pUxy9U",
  "key10": "3XQkCDvBu7HYycydtfafRviMEbyRe7fy42KRjBYHMx2XttPVokVMhfHpWRyRaXw78h4kcoWHRgcyqzvzWfKfGgDM",
  "key11": "43RHamwpaLGQCDnF9dt5UGHmxeZJnSyGmR3bDMzdyEJKT7hhDf4UQyihM4RRaogxCmp4fGJEPWddkjXEFzPFVr7Z",
  "key12": "32Bu4vRqNFqwW6v9prgpBEn8zezmG7FiDqiFhMNcgGtnBmXXTEhnrp1oUV2fL6kVjJyVxaTnrJdnCndBiooHsPDU",
  "key13": "3KUXTdtBrFkzqgxsaf51zFWfHUYHcFKPZTB9CpH1xjjADLyiL3x4yR63GPdfVvYgwF8w4NWJ4GFGjPE7JdiVegFV",
  "key14": "22XtmbDLBw2wRsEeRdRA8yjBumcSzd7KAAKzPmCP5zaubbzWVJWbnjsFfF4muZvX3yJifKPVZYvpCRNUoDJRfuaM",
  "key15": "3eDA3CjUWudGdxCAHS9jaKm9ANhZonPpVvhcV9VfGB93nesfuZQfGEzTUgckZGpVEdBzPL1Wh2kaGmMFhhFcVrfr",
  "key16": "56QxeRK89wpYGt14nTxnTsqNGmX4MauJxXyLsemCn6eJ2BWgsR4devLnT6TWoerHWwDTzGMMNFnC6ssamB2uAhk1",
  "key17": "26yiz7o7c1RFTF6pQ3qVLfjiY6TZxTmLtqaXyZWYqXSSZA8JRhJfhc4AAY42vZc7iCdRtiQW78Hsh9dUuNBFPpVS",
  "key18": "2B1UJXnCPAUamgjidz62Nk9uxc8JkpL26WfdivtmCtwjrPSJu71JRorJJgj5pWWAP7feSpAHtJuHdr6w5tugo79P",
  "key19": "2CWjvyEdpsFJYSmidgVLNuibXNvjvzcVQsBFeW5Tem8mhWkyKNpeqnsKeLMNVEGYLgPjFjxTEFxbYSe8URvg3dqj",
  "key20": "4JBxxTpbiDHfw5dkXm7tnpGEWNrQuiXSx2NBmzeas8HZmo1hSm7dJbtjxab4aQrp2KYmG3hfF5qau4DRwQQHprhv",
  "key21": "k1YSkzvbgfpvg4B3VAdvFeqpHQUf67jtKNo8vbPhQgsBabo25maQW4JsPGcHitrTXZX5LvSWaAH18Zh8id54BcK",
  "key22": "5M7VuzLeP8v9HL38dQ7BfEQ9DwfmdTDMGxKPuQHSuaTUzuhUR4WvDPvRBY9z8bspEm2SYfEUqdJHazRr4Vb1kJPj",
  "key23": "46CWPwwoXWwz8gcR2NaAHth8K7wcgSDpcMUAyHqE4NtWF3sBDX17giKp8RxqkAKVcsRyC6mVErhf5LTnQeTNJMcF",
  "key24": "5GJRqomt6zJQJMRQtw4jQQ4veSWbxi9JyZJFMxtZ9U7Kj9yYRqaRbZg2bRKnxVrvVJPtBKw6VEVdKUi7zNU5MYJy",
  "key25": "3rRY6G1mEvDFJyZHVUWawdf2CmXRoEhDbbaxvbWyKBtZaSd76Zui7vsRcD7hVMDrkAY9AwyLR6uQyMztqW8R9u4h",
  "key26": "332CVLu2ptsMi5Y7HFxw11bwFqwV6nLGwHANUq9xcERTu617VY44mi3i7UJAEWQfU1aMqmTLgEfzrXozqt5VEsH1",
  "key27": "5iktu2kp6LHGzQLuYgY1VEkQQzcHtkv38bmuFSwbF8zZVFuDbmYBQxNQtL8VtDgmwppdxBg9Nxy8modh6o9MdBF1",
  "key28": "tzJf4f9qiXvPmRDMzHV9zH4gcCXrGrxuTXntVjsUKWsfYqkL2ovYzALR6g6nQW5FkwJ9Eb4vdwsNCqZ8eYZz5zg",
  "key29": "2ysdEfT1tkDL7brKRFuEn3uZnuswbf8z8qLdmMrEZ5Wvc3JFKPnPYKZ3t3Dc5syyX3F179FpuRWGCVqZnQRHQbgf",
  "key30": "4m94Dvx7LS8uvWuyJRWeFtSFowzqaMzZWWZT2bt8Mi6xs4KZoUtJM3kUXgQDtqbNEDwa8nCNBMAC7aPpSCmxwzCL",
  "key31": "2NMG8enAA7rKZk4ps4nuXNQdv9dS9ctGqN6XubrPwxvtjdQfFrtpUzqXJrGcoBUdgsa78eb8UVzTmCurhFHtsXXR",
  "key32": "2f27jbae8Jbven2tvpSU9FKrrA13L7WBHXmwtJjNLKS8mUyNkSmDm9bmhPzuFUXdXRGaCQrN9T8NyWy49AoKaFA5",
  "key33": "5UizBCtpr7Qz99H2YGosAHexPbYGTPRewwjep3Ykhx9fbegJavMkKSGUoGW8zj7mD7Et3Qa3my5T5rpNipuy9QwV",
  "key34": "45NFPTPyVfoSBMDaLiBaHpoopHs2vZRzayef912LdKMbfTBUHHyhDkwNHWkjLZus9MM7nYFbRgTKciGsqiFWHitM",
  "key35": "5uqWcZmvS8i8qc3bdeoxnAh2fJhXpV682L4SpH6mBeYrwWXRPjgB2cG2zLHwTpFmJwrBWqrpKfxNm39FMNaQTJ2L",
  "key36": "5QpNCfr2cNioHytDvsQqtzpaC2EiAhPVnq3P28SW9A8Xmu4HJa6CdNLUaihgKiApw65TM2ecJ6sCy1eyQfkGFSo5",
  "key37": "44erKEcSKXm6aCmqACqxPx9PXGzvyeHCXqWPMRRgeMSXqjUQFxp6DVjSyAMEqpSnccNpTjXn4ajvPXz3mUjRb7cA",
  "key38": "52FkfDz1HmQs5KrhXXzecQakcPAX5JbSpn7cPT6kYgkd8aimdYyxSt2fAcBRJTQTcpk5uAhULkbcsdcX3rvzkGXo",
  "key39": "4t7BBcjPWFKPTe6ysNVtzpGPJsW3we3hfpjuCvqVG1gQVi15UwHdYTPMeZNipTdV9iJQcnCVGhTq14nfFq62HF23",
  "key40": "4LEUcdxJ4ZUsDfds4BDctMwG9Tz2rigrifizJv5yUzFUiejxVCD26ea6pXJq9FScPxKGeq1ZCiD1JNk5oKMNiaFw",
  "key41": "3y8FHVfcU17mYoPMyXMQpotWp8cfuDdVCDE56jCYoTz4HKuZG9m172r3KYE1VBgxWLsmT6rwvCHjgEfdS9oVDE5A",
  "key42": "3eSTcoaGhGmZZtJqrJbU3VjVkvKJgLuHiagUsyUQpYpk25ByavDU12yeAwD1hYKB4USdtGJyJBXohYweYiFzEyBJ",
  "key43": "2s7jPscBQrwpFdUqLqRqJRgTZ5KGcQrz9WUaWsB861X5SUHt1b2o9D215r7Ht67DRd7nnapNXkia6nimhZfjHLNA",
  "key44": "3dDMaAQRuLEmQmm8tBYDeNPAdv1SwLBXMLtEW1bX8xyYTR2HQfcWEEhtqEseoKpnrq7aCrYxJ5mdavH5z5VTYaT5",
  "key45": "3KqBvbSgmf4Xuh66yMezsgPoQQs8EX67WMFb9hi2cvvGyhHExGogf61vZaXFLypktvUPE1QXkN1QVnA6rMV1e45s",
  "key46": "HYtgAzGEmhRccSVHYsTnMnJYJwnoU9K47nHvf1VTTHGQs3hU3LyzuHC61QkDaHUnZwx31noTQV9jnwKiGfBhZhy",
  "key47": "5azTKHH87XaApDNxMB2XCj1HHCeA7Wn1fLMonSGV7Pspq1drRzsiofiMqBgdSs3YKZNomPURidwbEDqSn6ymaSYF"
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
