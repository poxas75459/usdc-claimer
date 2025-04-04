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
    "4zZAbw1u8f41kJX3vELhoCBw1VPwxx5qcN11a2P6xb7b9age6Jn3qpG9BTyEcRM9wC7hiN81C7cPNSL4H9gzyCP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9HbZnKCXiCneVJf2aoWnt18Wi9gW8Vh3UQynJppVqRrrMC3YjyERt9JuKp6L3FrMC3j49KwFpr2umCTwSPLi1Tw",
  "key1": "32u8sffKM5UFA3vqgdJxQ6sVP9cgR9GGg3ijpA35h6Af2d5cGChCuMNLJSe5mvFvb6QxntqxMnRaGt4kPSYENrYL",
  "key2": "5kJp8vo2SHJ8HiX6XafUgGj8UJ3zuRgUnBpdfszmw12pqqzSVSPdbhMTkjHHpdAfXhjNVW1wRoXzp3T9tuRVPAdC",
  "key3": "2GgxXNfckMtbP45EGK65mrxLfiNacepSNzzoGdajAsVvSVi58zkqHPkFX9J6CoViGgmzVQtfLHqJLsi4bsKNQfJ9",
  "key4": "pXFThNTGA9BaWoiWskzQSwer5nLocF4DVcnTC75zYtjmZLNH1StmBhzFgTYjRvdXzRd7m5XGpmKg963PDGoZjUg",
  "key5": "4e59hdFyz21G5cqXLpfcQABQYPmuhqe9fuzaa2qKeG7fLccHV5cC2KteLTozMFaRA1dJo5mUuRhZ5sHSADFxgbFM",
  "key6": "2DLZZZJxiXJu5YvnJCp227eKQ9Cye2ubR2Fc3Wdi74fBYLPLiEvb7TdDUSwuf3w34XnoDHLJuc4dxDBsTiVxdRbp",
  "key7": "5stpongPL4VjPHBAvzgA2r1ApFXwjsRiWR1f7uiGW3cdAZw5oYMZAju51PLs6p27e9FNiJduVezoACfA4LaWuqay",
  "key8": "2KZ1nXv37LSt846gqhN8vRTrNti7jYsi31cw5Xnf3uQf2wC5BaE4mzmw2bmsi8vb2WZJGuQ22AXNyv3QsE5GCn1q",
  "key9": "24NjmPXPCFtkvhXRnkHq897gXQom3S9HhsNdfmLwbmSfbNXJG1eZLF32gQLMReoYVcBPVrBLTTWTn8NyQDVw2kpd",
  "key10": "2dt4nTFtHHyHLpkeR6gTWf4vPJeGTmckeDrvDZkEYq8Lzd57bRWrqp7TBcy38vN4Jazh2b52BToUKg8wH29XLmK7",
  "key11": "7ZK6YpLX3LkepzdjEkeFZJgdU5LVCx7R26NboNkFQ57oa7VxgEvnzbsQwXFzrt8AZG8xJonVzMLE1GszwQsZ2yn",
  "key12": "3ocC7aK2ymqfDXWr7uibgQwmo6zGEMEwDRvjUVmznNTonEdgwxKkLctdWTs4iXi1wTnYpFGUThP7NxaV4xpfmbZL",
  "key13": "3ebfTtzNhkyfyfAe5vScLBozkagGWaq9tqScgGjKQE8PnVmtNy6cKf9nj5q2ncTHKNqFskXoJq1APcqhaCgrF5wd",
  "key14": "dL7TiFjL9R15v62uDZQJRAP7RT9qbSk8Hjicbs1MEjt6y5apkN7bF93B9RSApGZLm8Z1kAwoSnebm8LwajFNeQ5",
  "key15": "65QsacfMfGSt3TZDDauexSZgHwDPMMuF2a2B7qUfNdawAqUMM5ghkQ1XCtPnCy55k34QuXnkKgxhuMEWsE5CBMTn",
  "key16": "5GoXD8N8Vw52BKgMGte6DnyxDriSndy8BaQ4yBFLALcBZBhfaqCDkRfheKZb3reCNUtsvioa2b36S3jU1BJq6Brx",
  "key17": "3kKgN3o73TT36wAvWK9ifkFo9Vqc4muhu2WufqBdNA1FpcE4RpXtJjCPyG2u3QaXMaDvszxoDLvStr5Bu26Ya3De",
  "key18": "4kmoLGQ5vF6keGq9rGJFAo6DjDtvgudDGMrmJrmCCxAsMjEY5uQBeUv98sEcPcAEzwKBrBcmUpw9ymB7zZASceX",
  "key19": "5q3RQ9yd5bhfFX9dkU1o4ZUMXfWmWJTZSkeyzEyaGnE9WJbdraJKt1WCjFitpXPvVd79MYzioDsDs5xByJfR2oBX",
  "key20": "RZyaEKCsWCek4fkWW2999APTWY8b3V1moSpaYb43fbQJKC2Rnj3ZyJ1YXF2fpwGxLPXpVSrQtXerxqMSAi8UiQV",
  "key21": "TBG5GG4aKBwB134BXjpnBTEmD23xwnwQiqGcfp38gDrRekWkVehNGvFHYdHNQyas5is7KCeRNCoi32BDTDFNjer",
  "key22": "313JF7id7MLeJtmuD5ksVzXCDJBgRKmLEwKJP46ddejzWyzpAJbupCKpspFXnXscdMNrZpsm2MwfQohr9M1MaNsi",
  "key23": "4672kNBk6gjWvJR1gAFFQDkotxXgcgudu2ygksfWbGEpQsWDwRELqcFzEkhVQ1Ew5CEGcRYFWCX7t15ZpAKubkEa",
  "key24": "VTCzoYLaZLUkV9vXfm8ALgE9bXSvr91hYUp15sfytE7jQ1nqZuX4ph7qnbPNGBD7rC7B8PN1fYYAQaMVbjZnGwU",
  "key25": "4gt5hj8UpLN62RJz33qbpiu6PMuKqiZMZTMgvvkKn9MnxL23i8BbvGB5ZuEMZYzs5LNX9P1KSEF2ig5PgjHXR9kb",
  "key26": "UjuKbENyAAV19wGuyVrjPuEFGFKuNThmeMFeNZ5YEZYhMqdUbhUVfEeLP5a3LumGAazTnocMQZYPYRm5CpozKf4",
  "key27": "59JZsgWe4pdaQDwf2SbpDdQG5CyPDAsveyokgAeCox4vS22WUWFQDzaMo2uPQtGauqbJKFpJNEzDkPrVs14h3tfA",
  "key28": "34cyFDzAmgYNoJhjEUi9MAoERVq7LfFE1Ak77EWq1hFen2V3KEgeG9zdUWaRL7BiBjKQe2PQmq6yhhdqYbchUPxR",
  "key29": "tq2asASjk3KZsyS858TtLUWzHq91KpkLi2VmDETWUT7g1M3AhxoErVARR416fMxwQfTtbkiTAQ9ZJC6jBHrCj3i",
  "key30": "diFhtDovtchMLMkQjUBCrT8TTny5Nr374xAdtmzhCQh4WPZAiSXzyb23Hshr39KsgV4e8p5B6ao8sSuG8DVM1da",
  "key31": "5YN1cnfpS2DBdANpftFwGch6u375Q4b9GmNDnicYzFamfhNzGPqonjLFb6QhFzoB9tiqXju92DTFqT5PyjMj5owt",
  "key32": "28KGKLvt1n6Dxv73hF6w3YocX8C9Z9qXryEqQfTrXLKULvPUhkGwBUSsRMfZuyMi4dVFd7r3xbQ1n5qXFrksjhxi",
  "key33": "4UEJpWFVCv7TmuwEH3vY28gJCuoTzsGrFLffvLLHdF58xoAveCGeYAp11mR6ktBp5YEACXJPo2DT8LFyR4abiRK7",
  "key34": "29iyRpQavFYjPsd4nXG3cgxX1yyFL9uJ3moSfCD43NvSvBupvJs3z6tMtCxxFHfAHWkizw2AgE2pbvGP4jmg1sUv",
  "key35": "3XMgxSQfnBbHitTyn7fDWHyNJVefbsAAxCrAE5EEsjJmNNBBxRoY64S2iFvhUu1ttG1GmAx8vPpiaYqhcKM3ifCm",
  "key36": "4gkiWc2feLpY7ur3qKxfdtDx5XsGvRVLhNVajJMZwYTyQT1wNBJHfPQscW5rjeoVGMSgTrsjkM2q3SJ7ex5XznaA",
  "key37": "5mxUkJTx1eLKsSvFbv9E33Wx5wSrLkXJKJxDTx6MersDC1ECpCcP3Qpi7XWpia9qfQqH56E68YzLc7menEWMskH3",
  "key38": "3r7c88QciYmEKVAJpzkQzjk3jZhzRMZu38wRfJgftdhUmTg7zaURSGXQ8PKKCHxM2nwk76Kouf8PX6aEV7bz9w9H",
  "key39": "4xYS79mXiA5JwB9CttSMViH1eDCxEuBQuYdxt8inAgkQ5mPpfFjbdQkwAVigp96wY29ehY29f2BXwFiCqPyf2hKA",
  "key40": "4rRww4uo351hSXz4Ga6YwgupaZEYmRbQ9a9qbSHU9fmeJ3neX1pGkzHdVMSdtV6AfXXQhLWywZYBm2SLBgQpFyJj",
  "key41": "4gSz56KA8NdgWdyJf3USeUZErcCj9HDYKEqzh72eicmAKPnDnfEHxffnQUTBue9sSDkripYMJTc8YgKhjEzGLpy3"
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
