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
    "wF9o2kMxdNzoSzH8HvVBuUB8QpjEjnrrDDi5m5HSuSG8JonyYcfoUVoCVPtKdPe4efkVo2yb1euxE93HHNRxufU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qrKfHDt22hiPWPPKtxbq9hpftV83WtYVB6XTTfDQdkkAqmaNrZN7aKffmBtUWWoFt9dSrE8AyyYVBGznAFbw3j",
  "key1": "28JzXsERxDiFDuHsKNejRfw6iiaZxCwcGKJuZajj9nyMyF3Ez9Fii7EzXFWpCa35ASZsBSERzKmgs8c3A1NGucKX",
  "key2": "4gfVs1vC1sKdzAaL1QkTdB12vfUSprQ3CaRLftNVCNTrdMoEpDEDii53FxGHQ8np2J1SFtL4wi7jhALtCHcx2eTg",
  "key3": "4R4j8TWiVZMzu9JWh2KASJX44Sn5WtrPJqGcDzd2m64rgLXRMKgJ5e1XpGaf1wQyjaoCXMQHcpUu7Ck4heR66Erm",
  "key4": "3i674NisfckrKbhTcKYarQfGFzyUuESpnndMsweX5wjdfRy8FVmijyW7cn41nM2nV5SdNnvdK7YCzxEtmtKoCX5f",
  "key5": "3N9F5wwUznMj1xH7swgMPokYHyxXc4GtsPxePCSu4PBuiHbHNzA8SBh4b4xx4fDTXm7gJDmo6QMaoiVaqawn5eSC",
  "key6": "3VrdUnY4wE7F18PJWzJTYf46c8RBmQJaHj6GQ5TH9CJsGGTygfBNiMKU1or7jnjjVJtWKPxjDatN8szVoG6VbAWV",
  "key7": "4PSLmHmyG7d4gcBFsruaenqmoc4nMbE9ZgAtvnE3E3tijbkVFLbQHVGT1PVfY9Yc39sDLxbT55mjccGSP1bcrdTR",
  "key8": "5u2Px17PbtGiCvuQFMiyhgFcrr3t1WFKDYpiGTCmine9ULvnfvcJQ6kcXam33FCXSaQveXsw3hXHrSpHJviC47ss",
  "key9": "3Y35ANPCCMhaMQWmp3j4BsvQ5HDunbc48pCTTAXfSN1nS9dibj6u45dm65NpZnFdc7eHRaLnfLEMS6WU5guEFaL",
  "key10": "4U7MWdMMnKcbEoAJgsoJm51R5hnrzJv1NVSNvc496XgtVB2n7xdGVbaeFc8VaiBXCTf9JoPqhk7b1rii9ecvFVFq",
  "key11": "2fHkS6mGPPBD3eerdq2Wmt4MfYkuTJs9Cru72bnkV9c2bYJdmgiHyVGyTGcvhQqErXeLvWWUqZpYokDehjL6coSk",
  "key12": "n17Bke9BUVaiPwSyiTnbNpqU3hvR9qv2ThuqU6RDYY2Xfqmw8SZuZJ8AbAp18ZcNTr9JjtZ1yjeCkRNQSz3qRgU",
  "key13": "4DZBh65eiBHZqvQwtU3ocpAqKhsSU51kAZb2BAf5U9CuPCHgL7oNzihCdmQbyYnMuc3t8ivuQRsj1zLmDyfxqPxC",
  "key14": "5khPGJffgEosYovVmizyTJjBNP1vzN1RVBvLqMNu4gqMWtmDb8LhTuJxYAGQcY8DarzMzxWt4RNxDjEgdpCFG4MG",
  "key15": "2jQyLDw7DaUmkL57pF3pdcXpXEUx9GHAWVmV11UKwjH7JEUHaqMitN8qrJSJ85dcud5BzNTNqg3Wk7iQFUQnQEHE",
  "key16": "4Ap8XzDPQLQkaGqKA9Z51VtD4BAmXboByNhLA7sH5NZQt5AUTZhKB9UWEfXVXZiPc8fTDS2pLqzHcucqGi7Dykjc",
  "key17": "2EwJXaRXgtg7JS54U25cMACa7stnqheUgXmCUsFW2rLqKBhjBEhDnsjiP7iH7Cr1ubZvfwsT9iENqXpSaTdoJ3gD",
  "key18": "3sb1WzCA4uzdbZ9tGhzZqtSzZ5GTBstJLokARFGXVXe6Tbb693nQ6UMarMXfEqXvZSiLpVqEeh6LhzgQzS8ht1Lc",
  "key19": "4X94anKPBCkDEUqxQgQKhbXKYZdgwK7PziQBvqT7CM67vngEYnk15HYa5oRgscWjbLZjGqrfdQ6HSz3Ywcb6Bvnf",
  "key20": "4zrFepmAXD5fhDBHkHVyVbGdAABVMEdjyJenUHwQQZ5gqMenJ1BBe1NiuzxTWKrA63bRUsaf5YYHLUgWcr2og35J",
  "key21": "4NYaTBrwogUaop4vboXT6Tck3xqMkgw8eGHSv3d6EevdGTS7UBmzYphdb57sAfhFqg4HwXML1G76ygDfTULxofp",
  "key22": "61r2XgP5ZQwNWbpDjbisEe926EGLTUrvwPbjtY2NNnvxD8Mktse5nZyGP8acqmi17pzHVpjq7YySufqLnHEb1CSH",
  "key23": "4XRqDQjcfQehgdPPZrT6egUgjMdcdgrf83dRNbJQcnjP8KbTZW69abwdDvfqfb74u39V5wG4A3BhXKpzFUWq8qYr",
  "key24": "KerSYmjvKxmAUZdNqHNxUXogQPWkUAtH3AWhbL21QdkWBN5ePQYJdHp3GgYg9P3xtQLzt64qAR5Wzh13Ch7SCsv",
  "key25": "2czPW3DHN9DmQTN1weh98oRZ32SKmqccfzeLCbnSS4muZSXc6FcR3LbN8kqPnkZnCkbKL8JfxABKKveiAhr2MtrG",
  "key26": "33BDMo1vNaqPiF9AeVKExuWnx8AY3gXfAkiSQiSH65wA69FGtS81RW1fhAErWoNzFACin3Xsk9HZvHJbSceGshcn",
  "key27": "3m1tTke5T3Yo21FFxDMrX55WkH7ivzeVEFmMHzFjdcUjdDCwzLBg51yQHssnTyw3XfhRELPetFWiTKqh88xTtk9e",
  "key28": "3zxSSW9RdGPbo1BEdHS8Dnyi7CRQbaCfUYAbosgTVh2GACFrHd1VTy1mhDAeFWi8Q7ZtZvpprLzBvNr9C1vXwTrq",
  "key29": "CEudeAaWK3wsj4ARekgvDrojS2qXG12S2sHuF8xMnDacvgabJKbZj1vL7TUwQLc6zvZAGoAdYnwpzf9Cx1eC3vH",
  "key30": "62UC1uqs7Wzq9UmDxT8CA2uyzxEBjNPQ3hytGT7mYWMh7KyGPHL1bkpcmYnkhoMQJrDS63Aivy9DRccKZmvWef9g",
  "key31": "3jC5BxtexkC6RUf96qjcrghcxcrBBvbFJNAV8LbwFmdzK4ewqqtswu8ksQeWUcxtT24bDXn6WpPnbYpBGkgVPxdp",
  "key32": "5Xd86r2wAo6vVEjNapVxZpiZgqmXXWSH8qmjqZDS7E37BTwp4FmRLbwZE1oPu2simom3nW9ZYnkBg4FNFeeTTM9W",
  "key33": "3HY79yogR9UW7JtCap6UZKcRxZJqiEbKMsW1AATbxXYiZo98o8ZudHDuxZZoVZ8Kyp5t9RiPFzEV9SSJeTu3CdHV",
  "key34": "2epbrurBu1zcjdjfanDKodDCsV4HFdzqAV1mUzxsi2c5YhYJYSbYU2VjSwd8qyhToxxQjcnYTD1XqLM6LJBcK4tP",
  "key35": "4s8fmrBBkmJGsUzNrcPkQyJfvgoYtNXqX2ZHYgtoDDXpbtC1kyQFNJQ1PJo5xVJDgdix9XUNc7S4CHmYHCoBU1di",
  "key36": "neFMVuBiVSteCdRCaR382QTLxRcUtBjpXeU4E2SoAvXxrVECq6mSWAsdGL5f73opzJBhreWahkaf9MpUBA4vKKm",
  "key37": "2iVQUxkp9C7FrQKUErnPw4F4oCW7voPeWNtc1w1zssytCVFNhPGF8U33hc3ppsgvtiQDADKdsnAUDd673FJPkZdA",
  "key38": "2Nnnv2J6wTbXuawRjihHmTJ94p2boxAEz1fXMbNxz6q1g2WNVj2E9ef4Z8nq1ZmsQYh6C7UCeh4MGbMH9PVHB5Tr",
  "key39": "2UMtWtvmvY4LMDkwjHXV1u8epX5rJsowDEy4Hqsg6LFr9DCoSJbUVeCrq1vYuqCq9y9oENyTSY69cfTAQ8kkismR"
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
