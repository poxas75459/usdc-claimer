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
    "4Y3a3PB2SJSgJKP5FcUEPmFxLk3YcMuRC5tgfmUcxAVeeiMBDa1PSrGidi6kUAyZLFupyjoYsDHZGDSKiW4vRJbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hBz9HjRZcATmhvkspkPXoBNFy2ZmoqnpBFVr5McpEYKJr2VZ8LSmZViqZF4Ep3x8sGH1VSSfnS4GcqYYNCeHnHz",
  "key1": "wz2uTdxMQXksL4mrUezxoMcVKJaPgZM5N8KdRs8ZtN4dFwpvekSTf77yTUK3BqUNc6GdjC1tFDfboxK3wnNhwhL",
  "key2": "StARuuZkwVDUu7jJADjXuxYzNTmF53K9c6D8qxUmLPAwyBtXb6taKb8gsqMDWrYtb2udJALFPxsRSvSFeszb96d",
  "key3": "5eVPCvZVnBd64KfJ6onkvYMtbXz8hMzs4WhYcbFDae26Eq9NhXqdVpytEfwWyftkb2z5ojLXEY8udaCkoxxAb2RA",
  "key4": "2ZZEjUiAi4m8tKkkUTaMmkhNE7AwNCQxRBm9cpSCaon2itsL72f2f864ZAK1KTEL32zd68QQ32sHBrM1RyWAVaMq",
  "key5": "d8hKuUgCspb9V5j6rK8codj8Yrktdsv5qcnzHD5hjE7aNciuZJQNa3y49KGUveTQEMYsfV8q6pThvu5pDiPUUnN",
  "key6": "3ERRfUtrSayYvsMZVTB9FCjzHjvKUFwkM9NmYjDNEVsYWK6QwZK9PTpFnSndd4CCpQbWwpXM3Fq5iGguTuzcGuEi",
  "key7": "S7EDxBaEk3WJZMy92thLzaCpDoDi9vTAabcXhJkG76kjFJjvCYwuUezfVgTs2VCtWaRSb1meqPE4E16BaMJmZLe",
  "key8": "2zEkSPae7MiX8qYTgbaDpSR5Dd3ZYpNc6gm5U9hXxR4LWmtVML9fNS9NhavSQbHf9saEZHGnkzYWuBXVCnFqEsLn",
  "key9": "37smdUXHQmA3LXqiBy6XWDnuuT4DJPMpXJHwkYUTm78xnhctJaNvnUi7zhbernRLZ7dzRWxgo62joeZiZQKbZfBi",
  "key10": "4xyBd9znpy4CEuacyArFTwossWToP7YqYQ7SVFsYvtK728kgNuCXgDHLhXFShgTSx99fktSQw5GwL9nFLVWR78Rz",
  "key11": "4mNBmrM79GLagXYm6ixmZqvY5tUUtL3AoWqBwia7Lr1cokb7L9gFuJeYjKAEKzjqo7M6eHjx6q6vKDTw8tShFdEM",
  "key12": "3E3FBjudAsgXZPsvv3AxPncmkvckVrxW4NZR3gvALJDNA8CPM1ufiSrQ8SgewPJw3RuSJdjEBVGiSWFq1th81PXm",
  "key13": "33frKwuh4tgpoTiPjgzwqyyHm9hu5AofeR5AEnBVnbsjGrHfzX99GvtqCUrFi3rYcTnnJv54h2xvVsXXknk1hf1M",
  "key14": "2QKpKDEHeaB7QP9mN5SYhyXs56SrXjoEbrchgVb8DbNUFbPtnyaTNjV6bkDfzbZrYKN9rUd3NFC4vSQ26rtiPLzm",
  "key15": "5EwhhDKoB2KeB76rTqQd5qiCs7BqAfBnZoUq47oaWrUWdfbPrWZtNnzvyiLUhYafowJN6MccR76vaeovWJi2ELDK",
  "key16": "kp5h9zeWTDGHmx5iSCG7QmubiiNFYKg5ZgVU2y3TBGCkvD6vBqdR7r4HsT6YMYRfYKtVzVmaohWemqrshcYtyk7",
  "key17": "2g8ideCHL7GHGHCpC6rXGLTHTTUXJrUW9y9c8c776uAFhzWuC7ATwPtdJMzumDX3vwbQEmw4yiXXBHQr5e3K5J2V",
  "key18": "3s8pkVjRwAwGKYKhfrCrrbUh9FKwcxVGYfbmApQfaskfyKKuzcn836pkjiWe2coEtXFgYB5MZbUhWV2Qi1hnhRPf",
  "key19": "2gccEzA3vanDf7kfRdESbUhn8meeyvSyis7ctv4FW1QyJDruy78CpJDaEihFDqopVAWEsQYQY7WtvrqAVtv74Sgm",
  "key20": "4QWunc27UyGifP6wjc9AMD9Fe3AqNsdY9xFs84iYedEpq5xpdDviKS42NUd5GKx8GUdpX8PpJFxAngW7B2terZa4",
  "key21": "5JYCt2J4u6wWMa9j18Dv9Y5qZNQjLjn7cAZCQYLyJZaQruLstecPqbCa5HMDivxfNNCZZCYirwSx5QvkyaYaLdUw",
  "key22": "hiZMFqLCHsyapwLtMeYogGs1E6q46oLYMUwzYRAG3ZK9ujBxYBSEsny7UqCWbGSc5vejqz7JwRN4Q9CVFa8C2Ca",
  "key23": "BiDaGKxaFs8hHMxxZSG5oFeKmCxFsSkF7sKhqw9MTZR4wCimW9qoVWKxaN1tWeyim1bHDsaaWUwaq51rSa79rC2",
  "key24": "3AhDm8zHcNyMBSyUG8sY61aSqYbg3DdjZFEcNhQT35iHJYoBm6itX4MjKrRs7fz4HipEe2dEuxuyoNPdMSXfwp25",
  "key25": "aASU6gvs6paCXimQCKqX9uqdyGEL6VsNYVdXX7uW4oMrjoc4uBFRfqvGes3Zw99rG3iewZhUNSJ9gvniXCh8Hrx",
  "key26": "gBro7pv2dJHk93JNXk6QfV1PqejBsMUMfE7ZCUANwYuMsUU9xgZPkZPVxxc9SRie7QXT3Ze9MpCox4cYK9MEL4H",
  "key27": "5BEFET84KrFzWGp23gKCmYSUdHySd6CGiZEZdifL4p4iKAcZZNv79G4GAADrjy4JD6eWZe2CWn9SWiEk37uXn1it",
  "key28": "2FZyhXtVjxDhe2RNPDZGJT8RQ9b51hNWdp3PsYKVzr2pUDRmskjMfAGjWaob4oe9guQZErwWmhUXASHgKigzx9e3",
  "key29": "51AopDtcREZuWbHMjS3pqkZfUR3S2cGQEUTFVQVeKj2H32F4w6YESdfcZNXLKoVUMAYco71x7yAyA2Aw8uEFSZeS",
  "key30": "2Ko18DhdXobYCvfduTe6RndFZz8srd2sRCFfmFVgakNCpLQGh1A3D9TeG7piQ8z7xApCqDLgPihuvSL8gKjNj8C7",
  "key31": "3TZsemtvYUBG5WVc3DdmFrnQMos5cHwhhrLAanbRYvtakBjxHUERNVDmcmt2pU7H6dYCT6jegJdCduUhw8LqZQr1",
  "key32": "5UG3mtzVoYvRGR6643aCDRi1d5itddo1iapsmsDn2eTwifEoV7Ttb4vQDug4Lhx7vNfwdNfZdrTVKEtPQtoLmiE4",
  "key33": "54TxwTdheYv7X7B2vXtbQvri5QiLeXSUE5pqn38kuxHrsWvQGrfAPa2RWuQK5j7Y6JR47egQjbpSV3UMC2G9gavm",
  "key34": "3YthrdRHvjMhZHwk57NSpDyvARN4FY7VAh9bfjzYXJDbTcRMRqPSGCk5PzdUFm5NPYHNd6ugZEUGcBA4ZP1gmpZn",
  "key35": "4x6nGW5cfRXyE4mDPJigtax4FydzYz1f1kQMuv9xTzSBH45nsRLYwpHjuu9PJUDJH5Seur8hL8nyd8hWcgNGNVut",
  "key36": "BcqhS9WCS2hgmjguTUhxRNTmFghqpYsZy8q7atxDaVj4szqdb5gqd3abnAYKZQWEfcN5uSpV4JSSSmdasrPbTon",
  "key37": "3Yk9R2oP4rpWeHw6MRZXchEHnKRAEcozHHQw3STEaZTM2mfbZhCvnjSr75QpyhbPoMBKmzfk52iaAQ2frXp2cirF",
  "key38": "59L2xJwavfNp4jTFEPCt8C27kfyVVKJBA84o2nXNB98VuzmgiSKnPM3hNsW3VGBsC3DDFJNnb4eZBrEaSrCVeWLJ",
  "key39": "4JYCcZwR7Kj1F7ePxo7mwVNPqoxF8GAY7BYN9GHhXy2bwiDKUv9bNBTzrgDGQ8zsvAqxLJrPaA2x7YQTd5iMAYhD",
  "key40": "2Qu952sds9z3xwFWUqpwYc6vekubpGgnW6L7MX3AtWaLUB5uzVNGmMT3ijSQX3h9FH8uyjfw4uac1ZYf19rxXvWi"
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
