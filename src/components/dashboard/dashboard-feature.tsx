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
    "4k1Eowot3hGn1DK5KQZUjQmQuZz3E6JDbHL8pVpUWKiTuanRhCVhCwxXNZy7gwJzEtvK3WoXmjTDP13YchtVd47o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KYzWjY7YkzCUDduBVVSiEfoayq16SEjwp2NQzQErcvAbAMhDAvL87PaABwuozhwkrJ2kHmXdLJH4M9isy6n1CSa",
  "key1": "4ZdcjZ4TUbYuvXtjHonunAf48Yk29WganV8Ftyg7MsxfotSSagopCGa3AjLNwfPXV9shkWpMVLhTee5EHwrAtfF3",
  "key2": "521YP9gosYomhugeJEh5mdNFfsffkUQEEChyTFcuv3T6QjPt1jrJojXR8CdALJJxB3aonYQQpfiE6DZtzwxjgAPA",
  "key3": "2A4Kc9VXEmJKre3YWoP4nYduPFjhqb1eDcJFNti7C5ckAPzLi9JRKogsrrvnLtzgPSwGuKgbyNvGfWftibBHzJ6J",
  "key4": "2aEQej1stR3jwMWvoP9Uee2mnUH8MyzRpBma8Jz6d6QjCq6pGD73L2pHbyVoLuMzfRFF7WjSaYf6fxaeCpJTavkA",
  "key5": "4PhgQgTtyyVpUAEZLnR94kDAua7r8ZC97yU4L2Jv6sk3mjkJp7BULPifoCLqyvxkLnR6zJ5r1JkXa56PMed1KQMy",
  "key6": "4wJC1uYiWtZi48Gea2j7p4zun36empE9mZuTkKC46kv7N13n7vnwS1d8j1XwRMnrnWGR8VTMgaUCLDvPDsq2Ktf9",
  "key7": "2Lop7pXztKi5L5eMvasPKesw6x9wChg3VFEaHziua4ULUGRGXJknWgtJVgG4AMjFv1AnJySrGwpQGVVxTJqCtE7g",
  "key8": "2CpF7uhpfBpTmcWo9T4fyDSkBMvUiCtEy9gP8aCo8J8HbSdbFT8sqxrxGPZ1zj289bbn1Yv3NWSAqvhZw2WRdRqv",
  "key9": "5SbLyXexW9zrnddzPgQFnr4fR1odQ6Bw1ens7BuzdJ4zL8XCTTCS1TwCFRnCtRuYDasyryM6CQPZ5DsFZXv1HgGF",
  "key10": "4aSaLR8cS7qbz8A4yfYsxhZSWeqL31JUZzpQq6ypdzxAaaAvMcz3ZVJraY2ajWob1fjqxpAQeoegoobpYpBbBUYY",
  "key11": "firQMp9QPqLr7ZuJKetHETckWBfXm4HyMiQ3TfNpHJtwcG3ZNfF6uvXjqv54z19PW93BFyA9UenUwUDnTnHx4WF",
  "key12": "2cPxtPW1RR4t8dHY6NKVfbW7SkMjVpY2zWabfPhXFGYKnpf6gvqg3Q8nhRE1DD4UoU19tz4gR4T2grFeB81Yfxv",
  "key13": "3aZyuZ1SeErYWhj9no23sar8TUQU4wy2wMcFBPSBTEeaxyNAcnXgyVk5dAR4HAFn1zdESbFBvt8jWctBPpeeXNkG",
  "key14": "5ncwNiUB1zFgFPrjwDQm2pLFv6zH32hhWcSw41zeKarNz4okfbfsyee2LWr6N6fNFUEC4Cn5zjXRaYMHgyNE7Jgp",
  "key15": "5ZMZGR6Fv6sW5KkPfKmbQxqCz29VyTj9vSB1PdZY3f1aQJvq3quFXB3PvqxvYn8BmzdxMS7DNiHru8FC5yQuK2AF",
  "key16": "246863TSJ9fuMTMBaY8SsvwWMLgrbBXdSp4Quiic68tqssxBB8Vs1viAM4Neu43DAoMWAdseBEhjXGhg9fsN6Zj6",
  "key17": "63UyywnjkA4RkKM9ioW2cEJ8AN3JSZBhoJWSBudy1WWbe45Gm4Hex8aQXKGBjsRSx81QYnFUTWB3V8ScJJqJ9mf4",
  "key18": "3HM9pc3s6sqh4ApgVnf4Pk7JrDvvLPKcwdvYz9m59LBtCfkj5AiUp7LJSqxwmbJqe8VKgadYWAQjq78gczgqZ2Fh",
  "key19": "4Js3nGTUUsV3T8V2Hs69cXonwRBV2UFgBxs4VTeevcWnTipcLAQpVfLzhDAcQbMoTS9Dv8fsXLQGEDbNweMejMJR",
  "key20": "5wmoxEz72uma5DHADrh91zxPDKC5CBeUWxpst56vLc3Ns21kygsQVEGiBMNWjfnBUCk3fS9LKdBKwLnAzzHyHR9p",
  "key21": "5oWMb6dpvgMdSYKbjqvvEBvajkAcTaepshaEsitF4yNqWmfEKnKxBER1NVAKcseHWkFjYxGWUosKALESWsevxyrW",
  "key22": "4LJQLpP4iiKH3YQpZcp352CPzDEjNeNui2KwfJxQD1Q9gZ84UrVEDSCCVDt4QWVPtEdRjdaJJhXewQnbi2aXzxX4",
  "key23": "5rM6MJbJGj8L3eFSeaKCXTm2mzVigY8xXFt2HU3nx8Fm4iHAKZevosJwGezJZaX3T3M3RcQANSYHUYeJWhAJmzrb",
  "key24": "3Q4rMkyQHL9ZQ1kVQMdqYVF2c5oavsAQ9FiVyy9iJhrgjBMzL6mQGswmejaT3NrGsRwTYPmSKVTWt6d1F4pfbWUj",
  "key25": "54aC4o3ZtkNDjGtr5QgnFKckHFFjTQW4o4S53vhiaNKCDK51SbQi1TxtnkT3JgrQyxWSN5kEvowonU6oAawhF1i2",
  "key26": "64ZZgN1u6MobuXPu5d6jvZ9HSYsbnxotTaK6Vg6DwmRCgj8p41yPBBqA21vEMapThWtr7Fmii9nfWucobBQ9Zajd",
  "key27": "65XiBDyAp8JUQ3Gx3mY4wY7MKT1gj73VTwcyX4ga3sbFafzK63dLMPiy8RsHeVkeGL1fS7zTuwXx5FTY4RMExYHW",
  "key28": "2C8qp2wNwy5VwYYZoKq6rHjJiYdqPMmhqP6Pi5YFE4dui8rSjBszLsc5CkiZh7EXa7ij1yhsVcmRRiSzWovvN88U",
  "key29": "42GxHEZbh1gY88MAKaC63q6TCqxgu8RzTcp1aDEo1AY31181w5AzD4Sm6DvRZPo3YMThijWb2tg1dwLpwZQSefDB",
  "key30": "5xBmkNbN5vSkX1MdZeeB6EhrziEF9KtsNisq5vJXqV1JATr3UzNWMZgPKc4ksxUHseCYEkVs57ct4UgLxeiyDXSR",
  "key31": "3e5cj1ZuxdiPxxkKZwVrjaX1mWYgcEvSKGdPUSSMMRaUMQrsHKgHFAkqFXYg4cNWvcfxZaqYxWzdMADxULEPnaTU",
  "key32": "4Y8YTojNSaCJY7ptfCYvQobQrEZJB3QMjjfzZcWWSgYn9b1rE6ueD2rqkZMHYuyoSR3dNHi2WeTG49HGUaTUbrch",
  "key33": "58zJCuQUH2ovPyNnj1Wq21KyRA7xWuvoaLpupSh77tCHdGPUUJKcGRLKLFrg5Abd7LQrMrtVmb7cu32ZQMe8bc4X",
  "key34": "41UtUKZDR6QExEf38ik5bsX7PVv7tvJyS6tss1n8NyuxWxREhHQrru4d1mF9feEr3YEoDiQsmHdvfHy4AektLHFx",
  "key35": "5qzngVG3uNxFFx8SF9fdmUEm2HFVg32BAEskWRYY8MJtFM6RdAzxndBRsSaZWVZtGK9Aq59JBcTXcjzN1JQ4VqRy",
  "key36": "hmrnRN67YW2PjtnXHQtNqZVDHbYxxcWufn84vgzHqto93R23H3VRYrVcP39EU63696ToELsE3feLuZ9LsVfSVXR",
  "key37": "5HGeciJSMbWi1vkqR1gsPMc5mvsh3hLqQ6CNYKUv1pm3FDWR8V3nGgop4kVbjwj2jxBjwbEfxP6E4pgkcveN9fHa"
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
