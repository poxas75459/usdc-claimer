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
    "4bQxXn79sEv33EwqXvA9Hs4APxucFm61cJ8uQ8ZBhMbV4do7CP9B9Mo3RH9YPU4ZoGfocGVK4BJf5HiTk9DiDoRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PHbYBNPb5KNMPAiCNNA616qaj16oepNDPGp5p2ZaT1du5efo5mByjv6HXUeumfKcJsc2hAYy3wBAh8LkRK222xb",
  "key1": "ibzEXzqhZJd7ujHfs36bH3M5Px9mVwPribcXLZ5eiMZ7kyxPrmPSVi1qG54FF7oH1P6uT13dSRuLyyM1roVu19o",
  "key2": "5VfHAZxCHRz7fX1xQQuRNUwMXJXh3FDP6bohzrw8vApgYAvAoeaAwQnbUqWsyzELUi1ePgqkTLzbzAVRkg2Lnzfs",
  "key3": "kQ4ZFjNwQ7jNN4j3ZbDwq1rdC85dADLj5u8Pi6QzbChEiyRsATqseD8f4ivAjFVvaLWoDtZ8w4Dk7yKPJuzu1of",
  "key4": "3EcPbLj1DeQLTdFb7jeSpQ5NfJavFZ52s8JZJpGGgPQ2Bf6sW7W4DUBLnqBhF8AS5Ej7NmGeXTTshwxC4LS63VyB",
  "key5": "5ZeKsqBuNxee4TULmfLxHbbJ5xRoY3Ke8xTrrpV8wbbCNkKSRMSLJe7fCdfmanfun5WwP7iXGF6iLDoe5q8czEVd",
  "key6": "3JYTo62UmTChWb1if7mcveFNii9eQNkviweNFugVFKA2Aqxs6MLMjhpzdPwEBJ1sHZoxXRq1ynxAQVMLtD44zpj4",
  "key7": "5rpFJFcUd949jzDEYvKL75FLHqmqw6DGkp9CFanFbZs72E3FAtCMZLDYzUrnz4rnRcsWZTp8NtRAYRK7BqGq5JvX",
  "key8": "5BaMFjNgD1KY7fjB26Hpu7ubd96NW1sYKJHekZybBaYmjYNcVXxc7W8MZLtWLr6Kyw2HM6P4RmuGAE35TJo2bgVa",
  "key9": "YuzC5WaDTjNfC69zaFbibBN7QxjWKPsHidQ43nfvCvz3b41eiNC2GjvUtAPDccANDUjw2tFLPkDBwXK8HkJdDWX",
  "key10": "dunfzqk6D7cDcsJEe2dQRwiF8SoH8Jevjgw4Btfx4cRtrrCgphgAKKCUe7qHYEbiVx3pun9Shrk4YMzSdFY4gC4",
  "key11": "4yDnzt2E3F5JwAhmhL5HT6tnvysiKZbxzKszj5oHSY5h1UZNMQnoAz16vhjoAYHiQKbwzx1jsHxFo64vmEZY1NAF",
  "key12": "5u91BgkJ2bBv5za9KJpeiw1Gy373F7h51JDCKNaq8Ns5gTCnobHv2usbnswRcURpSvneVdmjTR2EG5bXifidgV3t",
  "key13": "UzuHjDAi75uiEG9ZxWubjqTN3YUYf3YqQXJ3Bg7C3NVdrddKFdAemcWtXjKU7EYkUakqVZefFSjpNgcTwcfNsGS",
  "key14": "4bbvd9rWeHRHwYx1i8SdLVuSMfJAphbgNWvFzc5E5uTQN8Z8hv6Mn3nRscT3bVUKb1En2UhUWL51ntJ8PexKLEi9",
  "key15": "5yCy5WGezWgoam6Es9trfVFPhmSPyMpimH55hzykABkAHYZ8YE1D6KSPnV5QsacKVhbxGpZAaQKCrvk3yBTcv7dJ",
  "key16": "2T58B5oDxmNAAV9RMf2porjuuBJz1ARjwUGr6pWoeKiDDYH6jYKVydA4ncAiFpM5tBuBX4ZzRTGyDh472pKpuFPc",
  "key17": "3f7wbV9j4U4deq6oYUD8Fq8EJsCa1AXAEXHhJUv4SQDRFUkcVfCy4KhidGoPuxRVDnMq2ryJusHA7FUshTTevDHn",
  "key18": "5zdEcw3iD1KJWi8FDSgvAW1xkLUWMzHHNiGBCkSfbjkTvWiHpE7b4hfVvXtfEN2wqX8GbYvhBK1vG8g28rNJSKRY",
  "key19": "5qvvDSFMMvbNeJDPcXx1fbk8DM2M6vwkkg9QBb9sQTZQ2rohxL8Wwe5QyspvGkjqnQdr3dornbEd4t5VJwo5MQy3",
  "key20": "3ddE5EV1saCP5NExqqqTxUEidMaMC1RCeaVYiKwQDYotHrWVpbQW665sCHCykrNtq5i5eARjWrkWxZT43sua2V4c",
  "key21": "3N5acPsbFXPtSX1CG5f1yrqp1oAsnsEDNZqGXLFbUmkS4NUkU92GmmpUzVnQmY7tsqbmeBc5N5XbvYBDWW6ucaLG",
  "key22": "5r9c9cJ9wLxyivX5t9aXPsiJJ6puiQA8UDHKfwfhxwY1D4bre1vboNiHVULtgvvR4M3fucG4NUom9gPxgnLpmgUr",
  "key23": "4ZYXhxd5ST3R7ueF5d9xtVsPLKE6vUy53vWjiaDN48rAjQ8R8QGLEi4Mnz6nZytrDiQUB51aahpeAvqLkRZiWbWX",
  "key24": "5tnKajPJtLKFSuiGpzQaXfSsfkpVHDGCQFQnbPpaiyzzkRDRaY9LoMowaTkEc1enwz6WnSay3QunHBQmbNHJY9dZ",
  "key25": "5S4UgUUNjqHsXLB5ozo3yJxCpqWU8i2WBrhw2cCMRhqHmnbtTw4TqZoLRjsZXRHffhsjpquLdc7MHtxopyHMhMbt",
  "key26": "3p1LpWhnoN1JzUzquEaL4b5HLEVAo3jrxNC4RqsM7X2EUn8ASZbJ4tFdRka9stw55wUaWq8i4FtEkkkpcZLCz2eJ",
  "key27": "5EGdEJ8MemSJvVdH4a9cVzDefqLJ5oZ2TfaxHPrsQFiB5ctvGdEt4n5CUXm392wh1Mc5BYsDyiuBkoT4uGCN9gZt",
  "key28": "2cN3gYV1fKxF489YDe1Qt1LKPeJY8gqqSaj831KyTxB88mkYQoruzNaSBs1k9pTBN8vkyxbb1NTKXfEgKRwnwG4q",
  "key29": "5RbJdEqRGHhLcf56x2jN8qAGZzJn5JatiwuxNcu6cvbcuZ5wfX1cwzyL5grX2LqgZLLaFJnfp6AZRc6CoKpDg6rV",
  "key30": "3Tob7DyprY5jfHsaKHVhamZMeEZxqeuncKL4pdW8J6KqcBUERDyiAMeQATK5yarCB7pQ1N8boJoqmtMR7tyx7rW8",
  "key31": "5JSKMRGavverAeAJtzBTdgCGLA4ZTWyVdtLdaoVT127z3KWfJrWdWJ9U5Ki1ZvegP8C8MEroZxHbGkj47BRL47MD",
  "key32": "2Xb9cjPgWPdcihULj411GgR9gWas2i3BdoB2xRE4ucXuES9ZdgfUK4capZJd7X6advioFXGHwfrWiXJaBzjrnrZc",
  "key33": "5iEsmCfQUSrZdQQBicYZmQjXpWQqUT9re7scKwKP3Xc4RijaJ9E4wCS15LH6qjtgRSzUgBQSrSSoLkmCXZPN25uG",
  "key34": "5n2cz52T5nwfWqVFciHp7iJ79Bru4rL8AdKNk1nh8ayLXL3HKrha483G2cnuEVjhUVjEh9qyxQXY3Uvv2U4WhEJ9",
  "key35": "5TUNPXDzsGiXn82SSqKnNiCCCYcW4u3RAQhiYrZQXu1PYFGD7AAcmrHfEDKZA8LwNp47R5WTwguDoD8qtShmXGdA",
  "key36": "4eK5qspvn42HWd4kW2QZKWbbgGAedUc3v6MvJVBXShWKzCXZULbeFmMkj86qTM1xkaTpTZH2qgxU1yBVacJdVuXk",
  "key37": "5cLe62o7R5rETdSWC7cu8B8neir75wVrmNRCA3G5pKuUHaowCQ99u83JqnnN9kUovbnu6X65xgq22rFuuYdm6dss",
  "key38": "277ix1Cnpo1fcrWegi4Ts1fvGfkTgb26GveJb8FqS8bsfy4XgCL7fKVd8heTGJwamjxvEXrgY8imKEoicXYeLn2L",
  "key39": "hVVAt36SRWYbBabAFuG5BdBYnUX1EYpFam7sB8RiV3dpjcXpWYTcR7fPYs5qSohW4QJC3bvC8juuTKsAdg1KcVV",
  "key40": "xBhURokhcyrY1PJ9EAS2yjEi9SJowQ4U2vSFtLrR8Rf1exP9XRCzUC2hG2NhoQYazEjMkSMyhJxcFzf73s99vHW",
  "key41": "5brkRnffqENJmbSMWQJThQwsEsEuPG9tYfGgfmtz55k8SkZVJ7pEWHP1Dj6knTBVdTeQ8s9zeBb9CugTMC4AcGot",
  "key42": "4VWWZyEVveq1yFiXwA8wC5BvHTQ5g3BJnAkveyZKHGkUbTKy3ozm1rnpe8Q6H2p3rSTx6X15buvgLJbgewZN12cW",
  "key43": "2sCQo3wyfjeNvK1EX9CvcsxhF1BtwVCg955E4ZPHteoTRfN1QMFYEG5ViZui8jkNiDad6XuU9eLqNQE4cuNi587z",
  "key44": "4Ty8UphYELcRum8xmBaKT7yV3CVRdWLprA9gwyuNWtTSFxuqkxTRdtQg8A4v7Uc28m6zge4FAWhhTGfFwHTMh94g",
  "key45": "3fetWSJcc83BHbMAfzvbkTrTvdywpX65jhjoQGPSw7JubJJgEZg1qT8RUuaK3P5mkG5sFvZz7wQsc9hMdgHVdUa2",
  "key46": "4Wgujg3JPYMPUXMUFm5HUxR1ZuoHEV1j8ydxeUud9XY6tSH4vnJGVbYUbJgU8CAEAdJJmYtQzqGbsSygNrxp5PCm",
  "key47": "CpnWL48DoTYrR6YVVbJE2TEzULSKLxKRhUNoNuQPR1GP95T2B2Ds9QzEqPF87gc12qfP3enpwjrC2XmbvbiUWZD",
  "key48": "4HN7PmRB5Ndkk4oTQtPVNYY49wVfMRQWrAkrNJZrGkE47s5vdXqjJGZ5v278hoymjzZ3DvsFzV4nALwGrq37E2aJ",
  "key49": "4VCHkJxMfbRsMsL2jtg95Q7FNaaBNWPHs9LRbJ8xqe6EQcZbWtzHS2axCaGiNJLUvZxsYJb7ZBpHcsNHjQM3cMTi"
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
