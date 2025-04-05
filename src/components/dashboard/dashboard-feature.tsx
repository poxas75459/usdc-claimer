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
    "4XzBsLuq4KBxQC73ChMQCVQ2BHKS6zQFwcEDA3UBzEiAZhsact94tdNuWDB6cBRcA14s657rAC6S7V7kHACf244a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BQsD2DFLRHTPmj8hxe4mfRNDgEGXeyxVpaePoid3BWFUSuCmnpns15mnMRtAtwVPNQv2jnVdMcBbcqpwxnkq5r1",
  "key1": "3CWn2Yrkao6ZSzqzf1UQfwvnLATgcToVNrHj5MSS29ZM8m7urQ1hYYmjA742QNDPndFamYajNE5senzYCLW2QnFJ",
  "key2": "3PMB9tBBSJbA5wdPBobbSU1xApPJNHLYm7TkpVEgdLg7PK7H7XDjgE4VoMwrWUTewV9ascEtA455DyzpCkkqVKsR",
  "key3": "oz1QZfKFq6NaQxgMg44XuewJA3R7jfmpd9E2NfW7cSVkCpJ7Td55go32r3PQSRUcBhyam79uyMGQ99iRDAMm8JQ",
  "key4": "21FQzVexXADuThyVgf5nYHyFBCeQzk4kQNRhw1kui3ArTUGVqdnhawzbxpCyv2FGVc4qvnMxLHkGSSRQHEotehcx",
  "key5": "3eBxZb6bhBzuvJJEhxdyupJYocLuaTDwjMr8hyty1H4H9H1H1d3Rj5geE39qbF9neNoRVWNYdcpVRpKUnSNbRUKw",
  "key6": "CeVXTcUGeiHQ6XubpJXZpMxfNaGcr5JUjfdMNPAMherJyCUHUeegerWavbuGG1nkMXm8iFmv66BhL4eFtMy4fNy",
  "key7": "3s76BQmVqoBAxUZdY4Rsmk1kpjdozA1ks1oqoMfjj8vDaBMnYSQE28vqnhVqaSbsGEMF3HZHhoPjx1uQWV8mWao4",
  "key8": "5crWp2smFX1o8MDH2omXgd4sAWRapR1YKCxYnYoa3HyJV92TXvCvSjwukDUtYiwnQeYeF8qJ1sCuKpZ3V7JbnUkG",
  "key9": "125N6JCyrDdMUj2ZsjEZ27AveY1fWjEmM1zPYBMiUtcQJyZeH9g7QWPZ2Hrhg4eMoiGQeSBGd6USCeuDtBPLmfFp",
  "key10": "2dXUredkakc6kWsXGC91hYk3DpNBnJHuQHRyyLG4gw5c7RmgtctGKXcRTmuh3Yj6KAGJSo6mGxtPWSPwZqRUxcpF",
  "key11": "4kqh7kjuuHmEATo1rjhzLXV73f13Zne4yA46qejmM1859WX7PAkEiFPwsJQy87CVSQNySrhvRstvr2F42wsXpkwp",
  "key12": "2wcKt4V1xgR34sSk4HwS8hCTAjitmprGC5fmgbKdKoF7MAsJcJ834ykhuxLwk73ApnpBLd8VhLrAcT14MHmR6jom",
  "key13": "5Lwk1ii1XSeZFzr8BnLwi7BiShg58GuVzv7EpLUUK8JkiweBmhNmeFaYsidSvJiCVJEH1znLr28yXWEV8cKXuTqz",
  "key14": "2EPV9E7xjYPaVP3L2ozgMMV5b2gkZ8PSrD72dXz73X9Szdb7zhkuZNc6NTmqThL7JTDrTT2zbDVLXFz41sYGhg69",
  "key15": "5YrRqL65FWwjLF9xJzXfvXWp1ZFMaUERZLLxa6kS8EqvftSQgv8SfvC8F8vt4GzRSpFYAW2JvmFh19WTCCcD2NGK",
  "key16": "3V1evDfzwthRgk19LEopgvXbASc7ARdubqF7UQxfRe9MzP1STGX1ZUMAmdDQM1yGnogFpo9Vcm2WWzqMt7zLGjqC",
  "key17": "w6DLz2LAYvpmhSx7Gs8ksbwobWjbRUmxSdHRPsH9aff2AJpQstZnQGwuKqAdDiQzj9taaapsbxauscYFUVt6HP2",
  "key18": "4nrYNSh21Z2urA2tgtyuxoNFrZBDVSW7Ri7cBnUWNTb7oeVan6NR4pgf38R8Cie2RnYKvCuqbpzEszH2nsmxud67",
  "key19": "FWNLgEffcnQjtkuAzEXpiWdBdJK63JqSkV8M5a1jxGef3kwHS9uTjxdnU6tbkpasaFMe6EBPaAFcCifPp3qMKGh",
  "key20": "4sU5SULyuRBDcaE78jLpjZoSi8qWUeniKpBEAw1ekWxgyu3bfoArXRwqnCQhmUVpgYXRiCaw2ucGPD3ojgCsqaFY",
  "key21": "24s36ChXFsGPzN7C9oGQnR62Ze3iRXVRMMQWoMjZhLg3FTjcwPZfHoSEZBp9F9nAt8c6BBLvMqt2izJ7FYUb2KT2",
  "key22": "F7LoFVXAyPTEBGuSjTwRXK5nitL7xMDaf1RbXKXQcA1pX9NTZUit39kW3jNo3oxMRvMjzX3hHnteXjm9E8cbZHv",
  "key23": "63bT3ugVesdNWc1d7i3d8PNLCJCHP5HCV3ioNBzVasNzW9Bj7cr5ky7ErZWwFyX7Hf8uyBrxxDiRroKkpQes2Kqs",
  "key24": "23D9Vv7QaoWFcPKWXnpuFGS1k1hHo2xfnuQdRMh5zUpzhJ1kfhFsPSiXP4tSBRxsoJ2MTdZYVn3dhAF15QQfKz9S",
  "key25": "3wTUc6F5L2bb3N4KpaL6MTD75NdsLZyA1dCHUC7PPNYN9RnbYYBS8YeTjun3du1jGdgvCVQrizJpGKJf6eQ1q2dt",
  "key26": "5EJAxiz3zQ4NtFwN1X53gkRXMbMgM8Upp2iaJpu19D4SKGw91VCCJQZBNy9Ja8Sp8EomfE7nfBHMcfZz3FUrph4x",
  "key27": "xgP9Jy9pc4UgXzCDyiZXVpGSpFLcPc3rBAbCn3pDv4x7vX45N8bAo6zcoLTBkNF39gyZvU4zJiCvrVb6AiMBifu",
  "key28": "2FiNCrYoQJmMZg9vjEJDWjAYQoBw15KWY7jtTN9LopUFgmJqqVDUWmSKvaMLWuHvRe4H9iQFk75yD3UGbUV3g8Nt",
  "key29": "5JHnCrifTKansH8NJTyozQeL6c8yDCPHjjNnGFAGxfHbbNj6T1t9jDTZr9mRRcoqiXKJk9svPFuvmpYu8MrR2LMw",
  "key30": "3inRYn4Fk3kKMC9EEynSvLD2dnJ2An3AJrbS3Mfncu7XCG5mMpw3nj7ssvep5sW9j4NQGARe2jxnDmJy9bJBePMB",
  "key31": "2R2doTePyv4vq2aVR7f7NkrcVk6VpQyfDPZPgVsCF7y8fbCCyKWcyWRYY8t6bSmvAqzXLAHDzoQU9QsDFUWTmnNH",
  "key32": "421JEtvMWHyUsxC823Fv8MXQpWqZL5GVn5twSDYiFzL4pNpuDoYq5G6U752YzAjNnVk7rhiubYiRLdB6XWMJVHbw",
  "key33": "2wW7XNV8QGv7Cj7feaYqcZihrQJsM6Sdtc8L75cYsm37dphPHjx5tWdvnzjhrq9UFydFAatZvanmYXM8CsYfiQNU",
  "key34": "52EHjpgXbLkb7NWecRcsHqd8gefKZ9aCkthp1N2STr9wz4U8t3oNxzCGb85DSPatYuPFv8wZZkfcs67dyyABaiUn",
  "key35": "5fzKDwAoQ2Mkxe3g95WmhAoPVHd9WVq1361kKwovLuc3sRNCxVEumD8dkz3Ed2UAKmv29CnpZGXL6LDHx8bENEE4",
  "key36": "63tgpyaACvnwf915icjXVh1tzcr1znTFo33m1R6BZkXBPfFawp1JS8jmHyNRkHT1vZBjthJcpA6JRJ7WrbcbBiUn",
  "key37": "2SjzGiZwdFuuAz3iRKEwaVXAv4SevssXSVQSqiSR9m6H3ZhRoS3SHUh3isDRXb1zWPJk4M2FfUH1j436cKu9N56R",
  "key38": "4rmayYck2VdYy4ygboGLPdkizJcYgEyZM7qHaSuveFHVAUR864T5QmHmeC8wgyGdspuWjtz3LrcQ89WQDcKHVWi8",
  "key39": "4nAuuBGXFGA16dph8bRnLJFuyi5E2tc2WahsVmpY733dCy2Psx3vWdwtkV6Eh8rLnPNHbAYhmhraFPK7qexTNsB9",
  "key40": "5Jq4ivX3stHBwE9qruaSHYyvBk4wxJNDh6FW46vE42RbrgG5CYicWKwuTM5oK5C8T5iUtzJA98QEPVpGkdBtRcm9",
  "key41": "2sC2a3dXoVtEuMDHVixEpjmpHZaq8MAtkqPp2eeS7oNMGXu8foPpBmphyEuMmmKCp7ZWDLsng7kJvaQUGyLzKtV3",
  "key42": "4vy8jmj51hRGUijjQ999MrAgZgwSwWi3m4zjJwasBXrk9d75ktUyRCnigtjov7ThT54R4txhqKMGdqdaqxy5hb46",
  "key43": "53iLNnuzw62z8Gs76V1eGBpfQiQPJYPyLpnokaPfCbwmy7FpdgtASryZFufuoo6k1YZRqNjdZEJaEVepTvTjWqgS",
  "key44": "4wsiEVWpuFny1CVRW9ijEuZvitNYS7nbWnbmbVwH34vuPwyY76LY7Se8te2pCMtq22LMdEKE9gSWVJsLFJrfEEEx",
  "key45": "493L8pbsVNmzkJist5iSRzPgHtaYvL3ck3ktbeBdXMEW5k8Vc82F3DTBJAxFKue2KZapUy5tWoDZNg6HoNzGwQqh",
  "key46": "3JcS3GuA79eQCNwnCCgBdmXhD9hnUt5FvGAp63HXF9kjxJf1wKa5SHZsSB9wC3o9EPmedZkkpRZGcRqN72Ktjiu1",
  "key47": "DY47kMyz1QYM4ATEMztGh9EkGMmoTAAPygyzyenWbQbqacCNS2Fqa1UjiPjhYts7CLJsmFi9oST9LXfmFLHckQc"
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
