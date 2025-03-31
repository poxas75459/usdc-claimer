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
    "XyMXQpfjPu75bJdgZRAP9EB9kJn2E1ihX15ocnakQi6VUSbawPPxgg2DsKf58msuqqYU2bBZgheojyFsbKZbXQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63hJYevzpnX8tYFhEMDiY7HqvtEytnCEvZJeGy2Vn7bRdSAxZM6oUNDM2Y5PHotCLoART9fVUVDGZq2WgsJfC5Ho",
  "key1": "45uSyT8vbL4RbAbt4jsTwMDZ2fgPQywRsojrEg38ARueE5oHhjTAmsFa7W9Phygxx767qi4TPBx3dGmk4jxPnHpd",
  "key2": "5RcGc3WYmUgtLCrUqHMdJfCmyPPTT8MFaL3N3WHvdE7RMXVSwtLEFuJdSv925pJi7hNcz5fMjMofV6ki6VrtVixR",
  "key3": "pkZLjc8G94FmXQWP5nyzWKVSvWWiEt1gT4HT9ddg2aH8Fu84hMwThnMFZf2tjBX2EYefpeWwHLnHiv5Hcgo2jS5",
  "key4": "4NUPBbsKz1bBMQH9aYMzB7p1C6HfLuAyVej9qincuc9Cp1exKKcp7gp8xdmzJWjZK7r5i3AJRKTt2NFozk7HMtk7",
  "key5": "5bvM3hEGyWj4iqrBR9j1ir3Wf2WF7dF9Twyi2SGP6hu51c1LM2d9MgYPpQnj8xURLGsU62rAz6Krf8MPraJX7VWK",
  "key6": "4TLsRHzKVAyTweGNhPjMmbJLhqaQURsczSV1ux6SphiSuAYEWzqhvxKKxwHFziwwJvCxaUbBYTzUuDMwowfJ8Tb",
  "key7": "2J53jzXCXTSx7UbudZ6uMLErfieuLFpCe2R6dGY4dFK7nciBTpfNcweHPQYgByGD5zwqSSQG9ovJor3Wk6nmYwmG",
  "key8": "3PbFj46ZMad7wkwN2BSUvaDjNZns3RzSJPLfVehSHrLN6NcKHfaxyL2RBxvYyGr3GkP9xnVoUMPjWDDLbuaovXjT",
  "key9": "2MxqpEpCdAatcsYs8h6WAccf8Uzpx6o5nuSZg7FCF6Sr2Cx6DhFK9R2bF46XefxghzxmJz9jtUZCvF6kwCCRh8bK",
  "key10": "4bsucy5aUGFsRZLgjaokJo1ztCU5cm7YKMp1bkaChGaL41LA2akG1zuMkJgBvA9Vw23SDpop5GMbNpWXDeKhH6Zx",
  "key11": "5Pt6EupMzJzBJGZvhgNHdg3QgwPpR8gqPDjtkGjb8TpiKKjQrkVoJedi65i4ViYVBedknwMhSQJCCYCF9bEm4qj",
  "key12": "2VbpYMg6AoQFpmkf5ewMpPXpCQbbyZnd9NUJmCPQT6sXpSVWxW2Z6QARaiqXs4GwfAKCCbjvYEjhSkNAjNiBNWeE",
  "key13": "2a8DQxrqWDFAqavKzHr3FSF3HgnsATBQtsrRXq8sahVvWM5wgs1MFaGD3cwNsV7KyiRe3Zr6nvbwdZVEA9AfYh1Y",
  "key14": "GfGkhixaFEPd6tygkW6XDhaCbTNagRMhwzNNw41qsPdqyRha1syzVgzCW44a9hzhH7gcNTL7jJuG8mEW9j3cnN7",
  "key15": "Hd9eETF1i9x9mKZz514ZTME5WxpTyirG1UNZVmQ2vDrVnBdTgMtQWCoCWTPPSS9gt8WjjHsxcQC3NFXnf8hquZZ",
  "key16": "CsvdV4BHaimWmqdF26AhaGNR91facd43toST98xhcRALLau6PYKZpu281VoNu7uAXYRmJ7qWrryjat6xDHiiGvj",
  "key17": "5UnbdnieZKEBJawDoqNFSeLGH8ca9dUA76CUyEhh3Z9U9hQkpqi46iCGgXsubAjV8QdVhK26txds8qzm6uDSQqBV",
  "key18": "5oi8hzxCnMdVqDiHERZQ5Pemry5FCvT2tU3dD43SC6PFaPWYbjmNrJmEDqf7tT78tN9KvCMGothV1gRVuqExy4nm",
  "key19": "4x2C7gwVXToc7LSwWRbe4MF5Zbw7Fmc5BHuK5bqsbP7rzDkpAS2yiFBVTuBzcVGnysYs4HmztJbUK9e4wX3daztw",
  "key20": "MTJVZ5DpHaioDhdZKj15xsHsmqUQeMJvvZUSFDzi2fx4vjXheL4CYcnEL1jK2gJViKJtTyLwzo4hUjnoW45PY5W",
  "key21": "2Q4p7PtQhiQTr3dwsVPKHEfCSwFMUw3X3DGMrHCYyvBvAH1Kme7RctyunYGs2HAH3uQJfJtXXmHCJujfpGbbLPsD",
  "key22": "3vVUprKi2Fzk2CXsE4S9Gn9S8TDHVvPEZU2UxUea4np49fNMkXMRWQhbVsLLVj9TSZNoGQbH34tES1DXYncoghVY",
  "key23": "248JKjGMndUjkHRjBCMc8hEv5uRNbCjTSS3aKZp1mf16PN483BMfmYVfptaTSruUwpxsZ1dt1xcYGaDLVMNAfJ51",
  "key24": "CSJ75nrKSdGJUsapfFfiYSMgy3nFBgwASKTcafU6ZryYQsXcNS6kXHvke84jACaF9ViGyFVkPrTBrHbYBYPJyZV",
  "key25": "36ohHUS2VhfMudvFja3PRqz3rLz2xxnF6sV4qx3v2Sc6YN8XkDQikQ1jq2wUYpb9FrD8PzavGXppz8wAKuhLMjR7",
  "key26": "Pwnspvz87EHmjMoBtz6QEN7DTsz5VeCmBsucLhtwx9Fn6Baq8itnLYMraA1LjTkP6U46hPFkoXBt5rdT2r8a9Qm",
  "key27": "ahrZt62cJJpsUzrVrhQWC3ZwDpasy4LJGi4KtmzqR9StdpCWMEenYZJupcgvDoRahUd5YYMcq34xQKdLQWZ46TN",
  "key28": "2yEhchfZrncHLbrxi68KUcDbpDuvAf8p9rMK9NS6ut8bwDTk5tKnwzUyYjGT3RCs8pjiY2sihSqo5Rjr6N3Bq34d",
  "key29": "x9VehXFhxJgv7wMGhim4UYhuzKtMEihFJSvPP6UHoY4NJA6K9jd5cFZ3Ecika5mPksWezCuWDus6B5sh79AMV5Y",
  "key30": "5uVGyNac6Vm3EcuukJiE8WaztGDjv9kDmC3ShZ7airohyfsgRPV4QKUcaiCM9ffYFgqnCRTLik9Ac5W6k8puwVB8",
  "key31": "5oF8ZPwgTWEn4wRzgTmMkdXxpBk2f6ZxiqteCMCkyV7yF2St7LLZSMsVtfb6yJSG5Xm4h2awpWwdnV8aKwVDxvh3",
  "key32": "uuSq8UCYBQdrocaLf3iXPaL1KWoqYWhULrjtLv8w2zGhgD5xkFMVJM4J6Z1oehJQ8zmJbUcg3M2pCWvMDu4kmiT",
  "key33": "3BZmCS6z6YwMiLwHuzMik32MXJVE6t9yLqBAC8vDCz1yuZPQKQFxxVDwgfWB5kgkwvH1S8EjF5Q5TLVrgxLxrXSY",
  "key34": "48Xsmw7KGjffJt7jLdDURTQgVjSZ94XmH9z24GQDkvSZMU8YvfB5c1gU3DtoD1f8DhptbzgABw7kLtQt6AMdt7Ew",
  "key35": "4XMwck1TgfBEYvbWotjrEw1ick9jhuEroEcrwe4mu7zmmFYURaRdSBbwqSTSWAZwTK1nCSVtL3PnSwyW5TRMxxQh",
  "key36": "2ZbCuBRCkjdZ8Qr8d8DxH8rwvdB7VmX187s9P9AcbyfvXcCudm34aJmz2uCJNroGbdP5hyYR1HzmHzwkbfdyhgAJ",
  "key37": "5WtXD1hrdmHrT5nHCpnqxyESL57VfKJXGit1fHqTB4sBfMgteAHHxsTep46B3kemKnBWDrWtjT59Fs2FCt8fRzQf",
  "key38": "3fkZ5kbxiU8bvWZNVSUbdockVFieoDgKrWSD9UCueaN1HFWczqgZYqT1GfcFGXLR2qkrYWa87tYQW1dpwZWf3b88",
  "key39": "47RDVkVr5Vmrp26WGFUfxdFsDH6sw2ut9jJQo54wrW6gJuzGD4MqSnS7Q4fMdMUpVBCJEASA3Pr9wVzmg4k6Mucy",
  "key40": "2Ufr5PC9CApSmzypqJNd83UxMVbX37xRLJ3H2HXTXZmrZd8eypWZdTSgCi7gmfjNeWKaigjx7Lz2GJ4oQbjsCiED",
  "key41": "5ywCqeGHnYb6WHo4bW4go4hvGYLWeqm4Nok3Y9VHpUvYtK8DDUnsnNcCBoubJ8i7GsMtHk6apx9ReNT87P5iohJr",
  "key42": "48ZLigu5eFAKEL384t4nR2VsA3GepW5uXQz2nBECnp9AE56wiD3HVKFT75zdtPJsmMNnYnRsFF6d5LrQdQYwVwRW",
  "key43": "4jqctucofYsyBbEja8V7LryFMFrpVoKQobf2tUF1Go5MYdBJTPwkogreEgHeDX3xLuNHAU6bExe6f6LKiAnigHxh",
  "key44": "3gik9to8ntCr4139Y3C3JMgV3yn4Qg3sAuBjaVqNcjggDPQoMYE32rJRqnN8GqaFqiVe6dQUYTupeRWRUAAuaVy2",
  "key45": "59TumLLZ8CbbDjKQQ37WePr1LS1ibvhmMSjfSFXwY2o3hMRHCgE7EZdmQS26RQXUt4oRNEsraW76DRfXcjZL2joS"
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
