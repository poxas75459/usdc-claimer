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
    "4VzxfADnJzBrw1uFc5nUFXFNKNjEMrdjCVFMksey8nnd3otqKWeenLcr2LiY8CFwfSmpXE7cwR4Be7mj4o8Cpsaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KyNnMAGRYQGoB3tKQMGsc52Bhd7j7HWVCznyikV4d5xKnMMuxm1ZehZsKXhgLPX4fJSZXpEBCka3BLJrpG76KzB",
  "key1": "3mvuev8YnaSUcoeBf85Qxftyx6K3dbcaSFyf3gX2A3KTtjRrBjB23yiz3Qguufo1REJPzDLcN5aquyL2pXzgyo8J",
  "key2": "25c7DPJf4UVfr2VZo2zCf6dxnKkoeg9mphBenqpgirJpAa1fcprq3JomPt9sxyiLfjNMdwrvUrtz2vvkCXgJHZ3q",
  "key3": "5UHVb9sCFW2c2PAfsxzsz39fToRcKhPBnnCaq8D6oc1nsuJVqqt5GFGnpkykJnh1JTW1r86o8Xnwb8cMhtitEZvn",
  "key4": "3jAzn5AdHkRWfbenojdKKnXdFbqswUZKRrZHHTfkVednrB4ScAYWcyb64jH4FQ7QQ7MScXKL66qTpNdud2FoUjbK",
  "key5": "3gHysg98CeCVrrkdGVDZ16Gt6hn5QaoPezG57DWGUMoV7ecFbsvuPeLtDsA2VhLqhmw4sBrruaVWqwqVMnUBCpyx",
  "key6": "52Qkni3G48TEWuLUKr1GP9Lg4EQBSYb1sY4XrqebA2KUUGxkFwwjJqnXDTdmzWoqU9m753LtkWCyj5bHiLw7rRdq",
  "key7": "5BmxdWa3NMKuNzYrRA3AQ5E5CfiuK7SQMNhEXTf4i3akorB2edConhAxHx2tAB6fc3zi8TPeijgTiLGkSQihuYm6",
  "key8": "3HmHbuDWS3Mm7nccwkWz9Eo13VJ6m1GYnFehbfpmjD1xe3Bbz8HRFGUNs4MJvYm7nbGzDUABPiXSK6Vc5Qd4Rcgg",
  "key9": "3fq5yHKMBjJEM4tPTf2YptZucaDcdutcxBBW9h7bJJAPyJFsLuSnK8xqQtiYaWdrZNveK9HbVRkwaj46BAJxdUgP",
  "key10": "gWfszbYC2Ax98TRGvLWqRMYpUkourmuJWeN71YVn3y9whpk9EbGmQCnHENuqoWoe6cX9MuW4YtA5tLaF7q6R6hx",
  "key11": "25fMGJmD7tSECXnAy2FEa4f6U5KTkGeb57p87H7nosv4cpKa4DSdcZRynR5G42TLXAphmeBMdx7kLaHeC1YCtdG7",
  "key12": "2XHkaVDDKWAWXCMVsBmXAyTcxvAQj6pevHnn5hhjTxLMSnvTvGgkAHZxzZVGABiiEjuo46XTQFEZAcvKKMoZaWv7",
  "key13": "2ENRa9GnShZseMecv1HcDyHeTEByT1jwFW5RAgwXU4jzqHxifn55pPPXtgRdwnvJJtTHvsfj17mny5bFoz66Wgkk",
  "key14": "2WVCuHqb2t5CyDEMcPtEWi5qTKdrPAj8DbjsPCTisKn6FTbkWUY8wfrv5xuhoXpi6LXkwKMHBdxsjXrAMvzUYWzV",
  "key15": "2LzwuRxcc3S2PXaAEhTSe4TUeveVAhapsy93Y2TBTviL4pKvuYtz9A4K6TE1KCh879EUhhgMfztHeUKYjzf2hrru",
  "key16": "pbU1ux2v1xij5uWct2ExU88aFP76e2jww2rhGzm1Ni2VUR7ygFpjpUvtDEZmAQXqtRt2Xjm7vuAw9eSNZUTtySj",
  "key17": "5xdF5QecwgtjwYxrJGCCvvr1q8uo9fPDcKYhxWKK5j4nmhmHtwemcAynXNUnJ9Mr5jiV6EpX8LrqRdPVh2JfChqy",
  "key18": "2MFfiaTHsKWQ7HYe7NiTEzhRe4SwTnHcyLXAbi7K2eNTFhEXrtNgqq3XELy8qEqsKVYehYzCKopz21M5yWSnifTn",
  "key19": "W6grv4uRm1VCD1TSYJtNwE1aH9FDG8zJtWCQtmpPw9BuZAHwLpFK9uytY1QD8dAV6fjCYoKq6EXYB8W15xisz4C",
  "key20": "23LsBmvCR2egVxFQH3z88iEoQxXndstvbDrLhiNGZDtqE7uhouLKqtPgz6GGSqSH7VcCvoGnx8up6tHkyaDgU8HS",
  "key21": "5zCqw2yb6p5YhuePn7jZcb62Dno69F3XZXLQdaT4BxevgnWR6gMuD2Q6CYtajpsY6rHhp7xTzzqiH97CMLxLZHcS",
  "key22": "6155G3yWvgimZLCswB3UKicpzqsZ6xuEASjJUwNX8eoHrvCuoyzYF1DJNeN8ZUmbVkUti1BPnppq5SXujJPxTjYE",
  "key23": "67Jr3oT8BsZjpKMpkYbLqZFVCN8mW8R6n2FUTXau2e358EhwpVk1FJMNsmWmgL44XHM488wB1bJA4AghBUcXQDz",
  "key24": "oJ5qNLqAJLRNEpmK8CH78Zft1sQrYB6tUuY1rptJrbmpD2YxydaLCyAarW35NjByLCKhw3LQ6DpEbJ3Xz49UtKV",
  "key25": "2BqAqz8U2rbKKVEd3pKzCs1a6v8kWrSdUvqtc1mhNX5Eu3Cb87gcKbXaJ7HxNyed5eqbfsh39PnTMybc8JGrMGVv",
  "key26": "5cXQ7et1zJP7cf8C9TKYCoeDvAALTFq4c7YPEjqq66dJnxr88azL3WzxA7fjLE2xAdDq8cGpw5y5Zr5mHKEwWiXv",
  "key27": "35R5tLYMm2YufYm5kFBToDkE85DxfgACHfEK2isCYaqaELkiUZe2rEiDw5AQ99xkpfm228A6SQYmoH8mMWZbxkpj",
  "key28": "5CFVMhtun63e5JAWqsy5rHXKXdBGtXSBaNMnaTe7KoR8ae8AxFPSnk3TPwNAWr2XLZj8SDEGsBwfNyc1os1s3JGA",
  "key29": "MAuqmACoTKjm6nu4vHajgtd8V341sUGVyFVmDGcYJkiDvB4vYmDU2KAdxryqibG4YinCEWXDzCML5XNyfU8Dx3j",
  "key30": "5hemct7a6Ubv4LSpvzaqdxoVP1uTPDid3eMEeDfRa1iXEg1wDKreoH2Ui8i4YpxxHgbc85ZfsYc7tjpjYdi4uTwQ",
  "key31": "3YscdJnrNuTFCxsJWx65SjewGcQbi1P8tgUBh3a3JTgHJppYRqxozgoYzEQUPuxSdz4gK8husxjEkSJnsjVWetJP",
  "key32": "56MiGxY9fkV8s7w5XFh1Dte5GdQMmAE26aPXgpiEjWBHDcreo68hWXsj1GfCwkwK6M8AAp2JxyhZEh1p19pMeCEs",
  "key33": "36EKQ4dfewrKQBD4ZfSKMP1dATzRBRRU8GAK6LQ7B8gSiu9vFe1Cvc3VnaoKdj33Tp7QU8UgwWhNAz55wnugycLS",
  "key34": "3urydYqdRY6XRfnyr2GrbeCZBe3YQaT4uVUCdwrDMgo77LYdiM1ThJw4AgNMuSBwsMnkUMJAHXgJXmqKb4xZRg5b",
  "key35": "5WLdRzGTN8hCcVwETzzqmVGyqYWajHGbxrmc3o7psLsVaN89Jn1zs81xn3vsE5bB5qTCjB11BMXHcvo6bPMQseEF",
  "key36": "BXVTunb2ZNc5oRWehP1jMYTMTg35pVHbru5XPU2PkEcFHvFZx4nhXXNMm1M3QCwtd8pCoNR2ZzGbAnBMCS5wPeE",
  "key37": "5gf22ok187rhP4eHcqRByxYtRbfkfX6D1gFfNsvSbVPWtSZShM7nSGtSTSZ1qp4JAyMDY6stsawsUNFQvskq3Cdq",
  "key38": "37MJj6LGY6XDetK32kSNJ8fstpUH6h28UGoFR4tRLbgDn1STSsLzFVKxLnTi5C2dPvUegpqaqMNpR6zJXJ3ZmzE6",
  "key39": "FQQm9f5FYuV4LWZ8LBiUoH3ZeDRf1SbaTBdgVb3YuM2rJKCEM4WZfbpLBxJqkbj9o3iEa2bGxnvgq5JMvdoTiRV",
  "key40": "hri9gB8YWa5DaMRLrhtahLJLxgM3zgmzB459YGckwNMcpEZD6ShB29Nqey955GiKqHQ6oWuq66RsJgzqUsv92AY",
  "key41": "64vzy8RA8nkjSTQ8WjEXPB2LiREQYSmYpV7wvK9FeCBiUefYPtFHJSvQ2Lyyj6uoPbcuoqMnF6TijwDPBim5JW4H",
  "key42": "4Tgem3zECbXCqHhHT8Wd4w9oTkjKVDZygB61gg9GoGuUiVd2ASKQqneZ2KZ5tWtU9kZ6ce53YhcswY4SgkAQokRf",
  "key43": "48VLmjBKeoWHQ53nHueBzzKLEBG4K5UQz5Qr3oS549h1tiGbpWQZSc5kLWs1o76FnkAF3tb8F24Boi3kXiD3ZEBQ"
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
