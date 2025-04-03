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
    "5osjnLH3km2mjADNV8D9inBp8uuKXqZEggqQyZXJoWPxSZcpWVnveAC6p8P2JSyVGasBoxNR4CwDmGPU7qtuc8Zr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sd3ykRoGTF7aYkVjiAWKVtJjuFi1fTxDbbEeRBMbKhna7bFTcmw8KjpWVtogUWysVk3DYYSGPYDedPYjgEefzCc",
  "key1": "5XHvrdQy5FxxAC7r6v3VHj3xxDyQprD1QZDG1PPBwn64nhtYT96m1f3htbzBifZMXbANTnLYAfkJU1nziiB5FQD1",
  "key2": "631azaWJCmFxx97jbzspiSjroy7njiFDJ9b7ohrP7ibqUTgVPZvTtxjg7r6KKLCz49AhE8mbvQ9U1ZvrCcmGgDon",
  "key3": "28AJKQvenNyKi2w4tLg3XETKab7U4LxeRFX9DK8bY4hrdpK8T5bnHwyAQv8skZnbfXTVfQp24jC68Fp5yf5kATBh",
  "key4": "AAZuDSGM6nfkX9MJbxtaFSfjGnfodCa4Pq2V8eahsngQmsvfbuR8nBXFKHsDyzptTXsacyNQY7qz1aEFj1t5VTG",
  "key5": "2qCC9UuZHhbTYuxXorkK47JmgNBktak8ZRxRsHzBPb8UAWV47bWoKeNNrVcv7aABoxviFo1FMzQYiojAzBUL959f",
  "key6": "3dVYj6xLMbCoVZMwBxrKwQrb22yEyroCZHeYEihjbPr4AAEL51gkQjWea6hYjsDGh1nFuRH543CYk79CtYcdAo62",
  "key7": "4F6iTbBkDMpn6M3rqm26zFT14do42qnAH1N4HjG1ZxyzFUBnq97NW2vbBTdg7Hwc9b1miRSNUc7QNrQTogptjhwU",
  "key8": "kvSE6Fwy9rNkFXbEGk5ExDuuFLiogRHDUYp1avanCk19N6Z8jJrEDjhT42E9peV7T9E7L7zYKgevsXvu4QLMMcL",
  "key9": "41NvdGZfaTFKJVeZNtvpejgr481AbWZbrrPN6pmVhEZEmtf5Au9txSHjCazUrPccV6HYtAkmXJngQjqhAczUVMpM",
  "key10": "2usGsqSYj6KWiLBKbtc2H6BDAbQ1swwZZuWeGbartg12LHMc2pKxpNFnCCfNyWuziQ1kXMFXBjuErB54KGzhN9sp",
  "key11": "54HkMes3AjA86jRpN7Bg44nnFbiStJNR8FhQPDaWYpCDFMm9ffMnxxGHnb58dM5MFcQeZecHWy5EdN2iFtq7kSYP",
  "key12": "2F8ufkMdbmtNZxJDYvJSAfPxMx9R7RAgXW2FHWTUdZC4jvLJsgXUYwQw77urgs5g8XNxU4jCdgCN3FLXx2jmxS1n",
  "key13": "2s6U6wZBJtFVq2iVL1WaEcPhTJYR9494mpPxdab3gUMg6xTe8iNdXzovhLQRoez2zh67ELcvyaVt7qTwo7awNRjX",
  "key14": "37MapuoPpd6ySVpAnjTLDQZsepcZE53H1zdrsCeBm5xcpr6dr8SFYVUbuZeuaMJ9588PndUS2KLJkCM2oR7JZn3B",
  "key15": "yotmsK6sb2ewR3dRuUr196F66dZwRtWxdAvEVn5UryncjbgR8h2cZnwdXaPvGFvHt6dkS2Ezvz7qeB8Tpw5Hsak",
  "key16": "5Uaux1mb3HtgZv47jW5tPY6uoYXfqjGSFG5z8opSp5BZtw4VFo9oAmbruHHRqieENYEKh9hZD5SrG8AysisgZ1fY",
  "key17": "5dQmDwU48emvBpj8o6sNPRhxnRHDSVnCiQBBeDukPBzqRJr98t32PhBTXe71VnaVgucHoMzCs1Xpq1C87zxjZb8",
  "key18": "5xKnLaeo7keT136QcyCkDakyNHtwKuVSuBEMi3LiucvJcjuZUwvSpCuEKb4TWQzBJSZxAxE9UcDVyR2XPAZz464n",
  "key19": "54xBFVaDhRTtbXWEL2CMLGBmZAmdPkmrai9VwigJNRNXcJK5w1NTXKvH76uZ7t3x9ByHYzh38R5vVeGb989xPg1G",
  "key20": "2V9WGvMomAT77p5Zj7jzBGpskKQnft7GziFYNLL8yNbb5H7oJdoHhQewwHp2gm2cfkSCcCb8Ts66obHY144tjVn4",
  "key21": "2hRMinB5WSduWEiwtMJMLAeAvbcXVJfHV4z6W24V3YCePdMMHtnkjJmBhSoABvPKwtTe9xEGUCypSCPQXEHfdyEH",
  "key22": "5zmVjX1Mt3fTdzNCeAEa6KbugzUn1U4dmpG9agaDwXb6oqQHJa46pRukAmgxTd1T8aaZYoW5bNECeRec57PLoLtE",
  "key23": "4KUXTG85hcete6HZj5oXUfj41czqEPbUYxUB4xL5p7xf1tJDy9c5d1hoyGzX5dfBtausWFMtvgBe9tCrmzb9HM9",
  "key24": "4xjWaDY52nWv73tZpEB5pLkM7amXpKSHF3nbciUknu8mDjLHTy1E4PKfTEWQg536m6rVVuxvhiec2idqiZew6Mji",
  "key25": "Kybk4zovcCepd3bCdRBN1XCPdC8UurxFNz8fCLXUp9YzuYr8rmNuQtpbsLz1CgfFUNFXuLFPGH36AwPNtzqp5XV",
  "key26": "5YRGmz8gtrMm54LQZ2FV3NDP6pKTyYtsZ8nLDXRSniGrhXFk7hgiaG544XkVHfs9Zm98pGnwae5iAEkZvWeQB7hm",
  "key27": "4WnsRgmwCkDCqeSswbzZuF7Q1JToQKHHnDej5GPo2UwpCZ29kS5Pnb6psb1BhnaHSphr4v9iqc3euWfaKTgCZCeu",
  "key28": "iy3T1VKuPdVJiXnUeswRZt4dsHF4VyJ7y9UnZVobxSYnAfKbwWFmRtmBwTZ5bpXPyG85YSEpu97JvGZuTCZtFng",
  "key29": "4FufpyyQtUGe99EtWLcME5iTypETNMrAHqknoNfrnHEdcwhYavA7QJ9bWXYsqKzev5uzqqDnmDQSFmZMjSVwsZRn",
  "key30": "5fqNkuPKK6HqGfoXUF17uvxtodPcZHJojSZpDSdxHDF5kFsmSsVg9p2HKvGCAjQunn29ySzeP1vPDQ9vJFTxAjae",
  "key31": "4d39FEF1j491PmVHEAyZcxL2vff7JNVXekJbXuYagdJmGLQZzvfgdRw49mmSznNDGDdSkZL9oNjeC36iqJFme511",
  "key32": "3iDn6DLb5p5BodAXK31QRJwpgcHkUCd3qHTmZXzYDVPAoRnbwyMyPy8uK8YBquLffzH7CYAGywQiQa1m5S9W6Q7t",
  "key33": "wJWiULfQ3BpM5z5Yzti1c7ghrf7LchepGq95p6uTrhLn7S3JwUzHw2iBBgezBPvHpdXN7iygoC92GAb8WkuotLJ",
  "key34": "2FJJno1GbZ3q7hpZb4Mi3nzMYysZWDfXJs9E7U8xhfWVbtWzrCoePPTyj2fVB7nzyxJqpzb5AvsCyGH6SW6fbW1B",
  "key35": "3S6TM6ZCA2Uzio3hBpUVPBBZCdKtnXEsNiNZbSEb1tigSAm8G6YMqM46iYt9MTX1SzTZxDhQFk7GWurdiDJYWkvU",
  "key36": "4XkVVKeR6Ny5e2Zczu7qA9CFLVtmoJEwxYFFmKY8sYcpM92VTRfF8A2VpKsogcSESWTs8TF1k3GatJ7rYueGn9YH",
  "key37": "3deZBJFfCRteHKcHMs6M5WSJUGVcHKhUHFic8hUFLmE1tLoG9mHQz9wfpPpWYcmDqwNc2b482nJWHkQmhoeXRUfE",
  "key38": "43H7C98y8rGvAFw3LUhiDXrKiv2EV8wEQsme1S3zMA1yNCzL7fG8gWYKvmDVqvNM3fFHp1sxuFm5Udcj6DbKkzQv",
  "key39": "4WH9MQ1L7UaPgNqTV5pKU5tNJVALf3TUaBniG7aLd4B8NSjSkSfqYhrGcWsGqzzvVgrs9R1CqSaxAXKTPpAzoRo9",
  "key40": "4tHKq1whpDRg5FhKA3kYjGaz4gaYA9JJte639nQp3LRKMfmR9PXFzsLpUDpgkL1RfECoFGY5qHLsx6QeANC5LHyw",
  "key41": "43h7CgsbYJ1Z8vTTEhR7HRoXVMC72NdeYueBps228Y6ax2P2kqTUFuKD76Hsa5YbQ6wG7HpPNQQRbKokH9K4Y2ke",
  "key42": "36eU39pZYB6UYgNvkpCMq9wbQPtkvNJo1RpTwdd9L9LhAEJaKUMGRQzp7TFcJF4cR2RbHtLCAcM3fgswTUu984m1",
  "key43": "4GMRCptiMvqzZQNB2NtBbqTG1QYA27JUw7euhLWd2rEWaoTPiS2hQr4pKBrX8T7aGSnwiDQnAps5pFn5LPkqrjoK",
  "key44": "eJx551cs3zuDmZy8aqVHMiKh64ZANWAbLNtRFBK6DePHUdpUvxPNWRGDypTGrg6ynQMtJQMgGdxfw7Cc1WdVdaH",
  "key45": "WTDHwxGDyLBxA7inyt4Zkzrcf4YJCW7qbZETmNiwiczmGfnK6K52kAsPkeEPPey2nnPjL7rDExKFmBJsEdR9akB",
  "key46": "2zsjtabDGaSRwZsLcVzsC6egn2ZMqBZuyKWpsHYvFxmSvgqZLsfiHRe9Pv7TZeAtiuat5D2LrjqLdccCqseTMy49",
  "key47": "Jrv898HFHrYLEFT8Lp1E291gFJqp7DWNwNcwEDRGDLVMwt7NZZP2cBLtRExFrBCCYWfizsWLGedm957SoP9xNDW",
  "key48": "QkcTGeP4Pcn6q2DH4T3f41sj3fF8FfLSVWQ4sknwzYLNbSHAPP48YJD6qttaqgGe2gdKMAow18qfe6nWKhbiurD",
  "key49": "5rBmkyHnyGU4PBbaSTMTJ4MXJUZnu2NKm6oZqKmMRAdmgbXGHeLor7BGMqa4bpaGhzTsdii43ktegVGzstyDZYCH"
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
