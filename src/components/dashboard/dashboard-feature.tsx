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
    "2paEo5w9p6t8wykPdAyR15cGkR7J2s4a4Mf1L3h7Ef1Wp2ywoSXcFmxHTmBQocDCJhS21x2i71CiVKcy3xbgyxcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UgcrWTQDVgch314wT3o6CnwUbVF6bSDmbfaWYRYUkhxrZe9UMHDFgN8segFtBYQ3VYor4mUKPHf5y7wLF34HWMB",
  "key1": "4gU98z4wSRo2znXE29uT5HPUDvWXtyacj1a5NhQAZ26AdekUhkbx9RMJCaTwHxteJPqmnxvpfHx27mtzSyeriTyJ",
  "key2": "atNqfK3bsnG5YZAaoxC7234g7Qh2s8FbRKcoQD2BvTBNRU4wpanrtFdYdXKGgrkoHGn7x8pwqGSkMWsYMrrSckj",
  "key3": "43UeJAPjogEauHvJErYNbaTuDeDuEreChx7i8cizwHroqYzDS8KZLJdmcvjoYQZS4eXp2SBNM36Zka1m9t1zUHwo",
  "key4": "4sYTbbAwR4ddpARPgNcWEDf5eQNnPo7phu4u1HTT1tgzxDAsyLTK5jYRBbAieaFjkkSNkEEUWqkAM6S8rPjNtuDn",
  "key5": "37WKwS1jjgZ9sRxDJhd68t3P2QtnuhQYuWXJec72p9P2cRnnGiE1688S1gQTowRkaxpMGk3qMfmWncj5LUGnsk64",
  "key6": "3XabfYPoewpPWEAtnsVZ1McSKv7awYMfLfKCdrM9HRqfViUYa11tDQgFCmukMvLfZkhjVk4QfxSta6a4L7iiyA7L",
  "key7": "2YsiE9HaCuU9EkcUG7gfpBgm4bZZU5Liue7PRiRStksRRfLvaXfNtaFDeqCzEesuTxKkaycvFaNi37XVcuFGDLen",
  "key8": "5jdMyxUsH9GQqyvdxh6ZxMiYvNy6JvamxM4s56LRe9UiQaj8hGbhrhLRsCmFENfpXsPuWQ1k2t97ms3oMc4qsY39",
  "key9": "2Dwc97FGXugcdyTE3DD2m4YG5mjwp893Zhk2CkkerLDxs8BzzWX8pg1aZUswACxVtPv69QWzhz4j1573iUgGV8Mx",
  "key10": "HQ7wA93gBmVMmW1v9NkKLJFutACdMa3XRnWKEgkz4VRCVuaBQnKTdWVDASgybBK7RxSxGRFKa68N6z7pcf7FbUk",
  "key11": "4FqwVi28GQn9XhGVLnWsgLLhYMHRk9rNFqSeMRWvC41J77vjXdFtP3HLRFdsiiaztm7tYWF8X8kfK1c5LmzYDCh9",
  "key12": "5XFY68XqJwxJ4Y7LkgAQXiYPDnybXGe7WfsC6eZkTC6yiTAdcudUtqMyyuK4xkVyJ69XdJmxgchSTk3mqdyqEUQR",
  "key13": "4SUsMcKSmp8x86VzByAw9Woss8oGVJuwjWhgYAvjcuFnwAo62s9U38KGCVtBcdsySUgXbpGF9vr8ogGSk9Cy5bBZ",
  "key14": "54aJEYKsytLetPyHdcDDtuZvkqVu2efbJXCEUfqpDKzh4eWpBzbmTwxC8nqVUfs1Gy5Q4rcqNes24bgis7BtgJ4J",
  "key15": "4m8xoFgYcu1oKh5yyoWhMqz3Fx1aioXawo8mDZdUNraZouoAk5tUgGGJStJFGJBTxgGVBNBQDyQwgP6KsH5zsL5H",
  "key16": "3CNahTNGmaNEn6AyXLgdoJgGF1QwVyqAdH2EQzQgVjsHLj3UziBH9q7uusSy2osi7xd1DcQCz9JmYVW5pc3fQotw",
  "key17": "2kGgFMhBrhrFdQEFQwh8PmqybEFGLK14bazrtWe2eog2ogtBALzhef8ET8nkuNzEf2qHRMr33AKQyekD1D8eKeXv",
  "key18": "4K44zTT8mnzEceZkeSHGScJ2YSCjVhbjuVKYhae3b36FVSbCxFfe7Pj9t2u9oqHz7DfAEsyTWbuSh76xEn6Qr8Ze",
  "key19": "2xopFS2Sctn1zkViu1suZkveYW1H78mS9cBp8Mb53EfiPSDMZcmyV5YzwrgGLEFSF1gh781wRceGpzFFxR2jUf7W",
  "key20": "3HmET9R5PPPenf2paV4juw19r1HtYq8aQ9HjRzrNJqak4pCiuWJUEDeTseCzNrTEZZd5HC3Tq4eZ7VyoRyTqLLNo",
  "key21": "hLQxujU7hf4RgsZqw3J5jwfHG4zUhK9AR8YHkvUtkVk6WnfXuBq8TKoqBe5stp6jseUxikoniTFi1yMVUwAuixD",
  "key22": "5WMcssRc7nhABr1k28GYKYqiXb2F4vYUbJbB3i9dXsDh4VFqmMZdXDbQvkavk83eLSVWeZhg671ptExiVjBV5F9o",
  "key23": "2Y5KM5J8v199Kep3yazAxnsRW1RdYJdidTiDqV7J3bz2r7yujLwZSSaDA3TqqcsMa3jm5fF9aWyP294AApk9Cwqk",
  "key24": "4D7ocEST7TcuWcp2aQ2fceWn3HQa7chgtXQEMo563ozKHrWwXJeGGZx2dSsaTr7CYSNsZAzwcrcTsShwCqCwUY3Z",
  "key25": "EGtBRmF5J1uZV79b1Lp86LKfVctgXnwx1Zs9yU4VHNXgTk3HbQsZPWrpQWVFGYsyZKxaGjHVmRrNQgQWt4H7dFu",
  "key26": "yaJ6LKZSwLKoNZ8pRqd7Fu3xbjGvvemwb2ZfTCCAp9KaVaJiTdAyQvPWDic2i4H86PsNMfVmE9S7Q8Ryth1vzTp",
  "key27": "3gcXKT3jD2B878H8sQ96w2KYYCLB67KbGUo9yd427WQUMuEc6jRVv4NJ37Duhf2HtAxHztUiFnVvf816vPTjsdfp",
  "key28": "4yD8KHNFqDjubCWL2BgQfYQ7qQbQvdtxd6EdivDvv9gzQ3gx7Gu85UFNu5jz6CoqRp96U41XmWMHLWNYXkCxqF9y",
  "key29": "3kTN3DgNfCxLEAJtwbSYoq7B9p2xRWHYFNQEsouxKiHVVo7YxKkGKkPDSg3skeCAWYZ9ApGPUkmcfJLAFTAzxhtb",
  "key30": "3jwp3in2wDkzWsoBAaBk25scovyp7Vp9rbmEGJhZrmJT3NgzmfmKjEjwMu5hMHdB25ruZUnR2wNnSYZoNXu2WLfC",
  "key31": "4r43cvm5mdQ7XadcrCH757ts7D8eHVXk9C4r7bPTvxabo1Fd15ezCoQD7WQoEfKeADDj6w3KfwLNPr19vhKEEAEv",
  "key32": "5naiptzcY4dJad5T4MwPyjh13SPrPqttYpHvtKX5rRa7gKU7L1rsENycQDEXvL6Q8rJmk1BjbZVfLJFbZ37hFoxM",
  "key33": "22hEvNVsFgoZSetUehLixkrT5UoGxfZCtAAP3UdoygJHxZaHESw86YSu4ymL7m93R6cXSeu9srDq6E4D8bgPoXpa",
  "key34": "2nL9fFyDiHkVSdqwVSpV7YaQAiZcoruA6P4uiykrWfTRFSsJunU7X8btd5Ccd6Qzd8xMxqPG7woMDMBNmCpYRTgu",
  "key35": "5yhG7TQ1K5spSqRbrqKzhdQYWW9Cz2FWS7euYuDxxHFXC7h3b3jjyE4C8guYHsGZvdeszGUVXtMarCzkCXbSFAtf",
  "key36": "5WLAp3PgTLeu1dPPwa663Z4BQsNqa7jRDqXiLuUGxUx9ps7xLYtuL5fx15wXujYz2vwbVN9uUixnHg1dJHBwwoc5",
  "key37": "4vWq8pXg8bin63HqeqYP2WmP8sUWUEdmj4MqtPRvkZXy7EqZc6oRJ6SdDSkSaxHixbxtxRizq9yVvajhfQkVFPxD"
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
