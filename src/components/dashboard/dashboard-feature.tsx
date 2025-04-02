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
    "45dEjzSt5sWBoL6sAAzDrdqkrXnQs1VBwhSqaQWrDhxh9tDETqQ61ssJJ3jxqJBCRwapPwdk7WTwcHF8613PrVMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K8RKxr2uw5RHS4WkAHkvnsJZsS9kW83UrjstAEVwKziqeBWMJn41NcumHqr77WRNXbFrk7gn1MmRXRcm4MZTsxJ",
  "key1": "66JSaZSZA2irkKxTashxDaUb9qYANprFT5m1vUbEFxKpE55r2Tj7shVY5EjPHpS6NRbL85u8bWT9XF1GVraKGdsB",
  "key2": "3K8xwBEhjaWEfrUNCoYRdGfU7AJiQ141tkYrL3o1oUPDqQfyPwdUGsL8qMzwm7WLmfP7dqLb1YbE8jid6hxtbtkB",
  "key3": "3VRSJeTzGy1sghR6mtF1eTnCpxdYXuvTFediUoKBbxAmYnzDRTFbdYAPws16xtdpzC8wBJs6Nr7yoVLvKoWKsZnY",
  "key4": "46T66LJWdj4P3SHyeuSxFgEcZDWyMn33MfNexzJeQmCzpnnDwSvTZf2ULExgekUJevxqVBV8fTB2rc24fihk4J5R",
  "key5": "3RrafwL5L2Ji5xwtMeYUdWpGgzTdiyuxi7urZKQdqHHehh3XTndrEDFKToEHh73ZwMxcmWcWs4p5v1bPQFV21Kaw",
  "key6": "4PFLNhqJeHP5dVLZzFmcFMmvPHxzxWERH6FCHSvoNQcruxDxdFqzeeTekkcMJy8MSpErY26Wyis9i3vJoGtvNVG8",
  "key7": "5Z8HUWA4hAthPvwESyd7R9pzcasHUeuXDzeRPf1iduzxPjoHvvKMhBg8PFHdJeRjS6QdpGWr8K3pmBx6Xjbn5ZyH",
  "key8": "392kHChUy5Sjp98VwG27WnYCFQ3pDV5dN1Kkgu28gw8iTC24kHeZHt76ocyCNHgYcTveZVHnWhVYwiSP4FCSXbbQ",
  "key9": "2kG6hqm5X9zcmdc3ZnzCwpRM3ZRCsG3d8uFtyNJZEj3hZCVXEx1xeMfAsVq3k3rFscm2iaGEkkzzR68kFSd9TLE2",
  "key10": "1c3s2q5ipsryBjR1CjxrjMPyZsK1aQzqi1sgUREXSmSUVtcoVPE5avBjxt53ZwyNk9PbQFEzQeDC59aVD1bXZp",
  "key11": "3ABgK1FAk5G3gMLCbCJZQByzbiK34pcDX7n1NYinwzDUDq7CEhcoXd1Pq9E87jX71gffGAtHAhr4NsKe83GyNmjD",
  "key12": "3h1k9Db7ZHUjAjsytMAKCCeqLaeNrp7z1scGsHLkho1v3UAZ9SFoT9VTba56W6dEvT2mR6BZB2c9n6Q94Q8JkUhr",
  "key13": "L5vPJDUabDrzqgCsc6Pb1LmWvznhKHQQwyxFoMPckgwrujNB1YokdLzr8qcTUqwc39mezbHE2zMVoJywAQJzbVb",
  "key14": "4iwtZZY4nsvtFAcVFkHkVcJSbRq5sMV7NcDCKmTq7oGWh7cmYSkF899yVA8hnEuC2bhwUs54uEcPRGcw3VaUCFRJ",
  "key15": "2VUtvmAf4V1JvQjfhzGWFfW7sMT3XzSR85xXDZe3DuUoXo2e15WQdQHrMwYnfcvrw1kvZLxt6f6ZVegwv4gHsGNc",
  "key16": "4Kd3iE6rhZPu9XiSpc3XzVNYWs9yiXk7CqyLVNwcp8bogX8s8xE11kRjom8dDL8dpMmfppGLZgo57cB3vkAk39Pt",
  "key17": "3zrqm9CLWH4JFDVoumVJhTCsMd3yTKV7LhbymtSuXUgfFm7GnAAStbZxZcoDQYnYj9VN9V2hNX4UVTx7GyAeqPNA",
  "key18": "KN2G5W8kdT4DTemvoczpFb1stEh36kW3Wb8NKodJB3TzBdsV1bH9QQDqoZjmHxJn9iHCnBjPuhHxcYR2A6HBusf",
  "key19": "2BHEgdS4BkWtmhJb2t1hz63sLyqhsa4RuaBAQ9u5vbob5GfyLVAE6EA7DKwVyJmBLbMQJxAGikE67B1tBfQ9wBaH",
  "key20": "3i1rJDQdgFcXZHu7bKTPAR3oD6LijyFs7RNR64h71AJn1UhxiiPdPBYdDsvoUSvvmVqbNj7G7SVdfNyRSYLBtPt6",
  "key21": "4SFLYSokCpgyC6aoPGVXPWWdCU1aH7QiLJmBn26wQapwePDuKV4gWTH1f79sriQYFG8oT4STWc6ia1SqwUVJFqNh",
  "key22": "4vHn4KSbFf64zyRZQzaF1iv7EZXk3QASiLncqLe6kYYAdruVRzmFnQ768VHnrACTJR72WHjZirwJWEyggo2A2YAL",
  "key23": "4V4WLtzRCPuGakB7okLz7q62CtEfCpkH5oiUt5qJJ7eEsAGjuHJP8fYPJCYszEPGD2W9fAp4DpedGTbdLBdpRsAQ",
  "key24": "2KLiVwvQeBBBjz74C5gQBxFWiYafYcHuawgxxMNxhfRX5BsrPhW6AMemsvSyi8sWWP2FWga4ngTt6LuY2Y3iBcte",
  "key25": "JainbqvgEEfv9PJjTnt9B9gJR2svnnz8ZptbcdGcxmyr8ZiUDdaNVGdS6DDNo4iErH3HqEnpDugVSDDKF1EmzBD",
  "key26": "3yuwcy33PXNQ2sjS7zSK8V79ocHak9MykUDyfvBx3bMjvBajbdjRu1KVfo8DBBTWFSAwGbXP1Jq9nAfzheXpqhbG",
  "key27": "3qLh67j2aLPJ23o97UNtN4edyL91Sv1BcXRVHAsANqGymiN5V3RZFUr2PfQQis7Qh5wzKtbCwi9GqX1LDLRsSE3y",
  "key28": "5NLXGRVyBT5ufY1qAELKw9NmKNRi4avQBakhXrttWCayquQ7APsu2yxsJ2tVEh5Jkm7PzkK9hM9s1Rr1xXmmmeJD",
  "key29": "5oMbmTvE5Csp7kAVdLG5RCq4yrpP5KaxqZh3baLzkoueRt8E5cxi4Zz2mRUfWoWgqjoScEkwqmTBShq4QF5YPyaE",
  "key30": "4wJuke7sD9ZaHTMVf44NWHaCsTfrAtjmQRaeYzvtFoNWYaPuj9GcqryxZLfyoCsjTL9K5GV8WUUHVxfwGj5TrhPP",
  "key31": "3m9ob7XhoirMp9dAPDDfDXFrpBrTirKaTNj9xHA9K4knHGVFzi5hcYmYbvGPYmGvmhTxHLTwVJsTGKPvbmymX8PQ",
  "key32": "3nUFwwiwaWaJPiCmrVroFfJzn1gaAE94buRaWfKvzTPd9isEq25EBppBFNQzvYeg5hc8o5yqtsTnuFQAY1yByUYs",
  "key33": "4wqjuDNrEbCq44WMsALuG4TkSH7MQpv9PFNo2yrQBkNQK6nfPv3qEBWhZyvkofzQBgWMaGhaRX2YP2mrfD94GFSY",
  "key34": "2Yg9gDJj54hPuNHyqM4uNRZHuSVUZPktrZQVwxyyiUZ95e3xCpGwxrLrdoKVggm3s7FEBTMrgEWin3rToLntRZc4",
  "key35": "4TZ5C4kNXVtbuW5NDEyJSHgHq6MDbMjiLnKU1hHQxta5qTukB8YiFrzBQgUKJtB8XoSTt4JNgeJvPd7yaXaYpUow",
  "key36": "2aN9UR9oWq8nSPwQ8wTSLW1j3cMPh9u6AYNcpiWwH32stLnrTWS9sL68irNx8xftmfGu4NHAKEsH35nt8XjH3ZCW",
  "key37": "3bH9KGDno4G2nDxXWNAiKYSjVhhP1wfW9J8iZr1h5x9vuNV3HwubrDMHabBtbidsZkTG5nKG4LzMaQXXRzYD5m8J",
  "key38": "2EXBnDV1FR55XRyDE4mcTjtN4RH3JDSB5p3yQdKja2Sxkc5zKx6Xdga9cqcomPgb622myfRapDd37YCPdbcKYMDc",
  "key39": "4rcECR3P8jygvXfkHEeoKAU7UR2EkCv5vKdiKPvgUfVoPxrTLcNfZuD8PeFYffBoEqMpoGGGs12Vmi9PDa9hNS8X",
  "key40": "38eRoYQ8TJsfuXiDCviLLUXJhSwDkUZ1NyR4Mty7cxiwE9j7immMP7jGnu8QjFgUit9p2V8CgnX6ejGgxQ2BN6er",
  "key41": "2Jn1s78XGHSEhUigRn5b1aK6oTdnzTartiCFGvsT2sDoiLxFHrMN3vaXTjqYsun8PaTUHrzFCV46VL1vNKyCgRJS",
  "key42": "d6gxFn2iA9PKtA361YdBkHKfwGbLRZtXtxaXKq1chCJS7kwPjnswGaTNFD21w8xziLMpB3d6RgctHGNWm4kkNcP",
  "key43": "2DtQHxkrjiMtYZChLAygJDZtdJDDycfkv1kFhG8nB5oFp7CU7NWzV8Ziv9ZektTmQWansCJt3rgSpDrFLYYR9a8c",
  "key44": "5woVErPVXemWkYL47MHgCZiKpv54T1TsY5iLfnNYhgNLWU5pz8ymSjHLesXPU2N8HEktiPB2vS468Pxn5Q9TjsBS",
  "key45": "3kVpZZywV7SnBRpgxTE96b2xrkvUSE8NXM9g1p8AT7usYjTSnCK4ThkvDCEjrqP3UhYZT2L9knkghXFVpL7P7oDg",
  "key46": "4zcxvxjBqfaV3Mw7aWcRDRLGvw3pncNh5DgFu7VS5muB2GgCJb3c3wtVZFLj7m5qr8RH2Hp14BUNHkn6wfoTCUmS"
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
