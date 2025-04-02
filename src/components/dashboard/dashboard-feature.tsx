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
    "4rpUjpmnLp3HiGLjNtcCu4uqdbuCEufgycG3Mkh13rAMwWYFr3ZK825VsD5uCd2sG8MCbS4hg1tWq3ZoEA3cNEs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fK474eX26VHPCnvDPYvQSvMBmvaczVVkh262wj77jJrb8WrCDReNyUqUkVcJEEdMYg3jMRmz9EV5qHzZKaFznd5",
  "key1": "31jcSJY4zvf8Uf1W1h8kynQAHzHwrNVZsoPtmrbSZB2P78RxF1LedmnCG4QBEDjexM1ZWqwc8WBpwc6qWx6NgydB",
  "key2": "3pVxAN5vqY69oNDCXLprKvS2VkYcau8h4yesxxLBiJcsQxvd6jba55tWMG3mftAzYnE4RrzjN6wg8EPWoEMqHGhN",
  "key3": "4bCrGtjQmiJzpJCuxjTcybsswjh7B2ajJoUNp8FPd9MgLuRLVdUwscmgmCjoweR2rsn661ipDWcgtwA9tBMeWePp",
  "key4": "5u5NhbU5zfUC8fWKCndfY5ANTvWAXLrrT1wqhnuhTyeg3kZtAGVhHtXa4wJE4rXJcLqRdn99EbZ6h6JHa1i8DRwZ",
  "key5": "4KcYFqvZNqjAHq8ZzToBNCiX8dKp5bLhFasusfLiQUqqTF9Y7KNVnKfUNgUMYQrpfTeE14VLDMGzv8U5YQPSC5Uv",
  "key6": "65RgwAZ75HieFZ1iCX9idruRragpTWEKS5L5eCnDnPQuSUgTLkLyTy5Gsj3az1X6EogofVxve3JDTwZtnK92JUaR",
  "key7": "25JbZQhs16QKT2986DKWZkwyP3P4ZprLoeF1TF7C1qCxJchLq6P7v8uKaW75fGjCkTPYgVxWWBJVkyH97s8afvsr",
  "key8": "5EqX7bhdeFZ6aM5xk2JEF7xJM4mQxc6N9My8rw4RnFD14DpEZ9X3iNr7fYQhjuWDtnzJe7uUUT4BkMhs1UKgbCdP",
  "key9": "3PKdQRWxNyEoSRuwNg47WuabduEccnyXu1fren3urVQoVj1awRn8f58685kib6R18usCtaVfeKWJCUxMTK7M7aJn",
  "key10": "5WyFa2W4FnY1kqgWNTjvTDGDMU5YdX8pgUebjXAcPuh5tL4qeLKeob5ZakHwW6fZwkxpnuYYUecYEcrmayJQUgGL",
  "key11": "33zeKE4agCeU4uknJrCnpTKjx6ukz5QZjYX1xTw5hEXADdz596UVaVoUiERrYAswV77ua5A4mpwkuE5P3CQbp1As",
  "key12": "3UopsoDkThbjWPQPaQkbAEV1BcWX2S5RwBd89bz1HmEV6eR7GCU2YWnAPkB5eEXaPvCzTufva8yHk4A8r8fppoY4",
  "key13": "3h3hRxXUhfEjZ16rtQ7Qi9o51XLkAJXMPhuq2b2vUVyskA4j3ukaxU8vNp8mPVw5wCoGcH5ysw4kFUG3RzKEgnSW",
  "key14": "47DK8ngbnPP6FxbteiLZV61Z9X8DNwmAqGVdnbXFvNJYy8kShqpLEGbhwAF7RepmvqF7Jei3nKpXiDjv3i1oQHHt",
  "key15": "62FjyrDv3JEQvBHRBf9oUGrEqMeMFMS4fKzFWpUXhKTBhHPJa7vAPSVE7Di7XLxaMSy7C5nfDtBcU79kqxaMcaFF",
  "key16": "3B3HqjbaS9nufqArKcsfcVyHEY4pRUReSRvVzBmUrBhydojkAri8eETYoxjWiJBe8ru4ejfrvqk1u1FGZNa2hWLM",
  "key17": "3so84cNAzAwvyc7dn7r4EyCDNCzzwpdxaZNFU4yveyzhnHF11MXELAJRiMjh4xQqK8bFbcWmVHPeuWWBSQgZG2PQ",
  "key18": "Z4FWwhwGXjck13Uq9aWoRhrtWZmoaQzxufnUhryK4Tw4UeMQN3GSfveMU5W2f5HVXtqRgt6mhq6jdCgPy7jLQ1v",
  "key19": "4f6cWs11HhoEgYum2CwR14w16Th4Zv2jRackY7xMmTuHKAAy6SBMxgVWPxk5EXoxqEv9FRQVphXK8Thy8EwhnSYY",
  "key20": "46oeL43SjAzAP6Bb3nFQKPLjJu7knJRFe1K5vh2G4YNEuSC1cRE9CWDKSsiak9ZbnaexsZKuyapwWcpWiqrXfhKg",
  "key21": "zt4rJqC5pwcQpmRrvCppg1aWQaLff3PJRFwrQqLFHuntQdnPGHP8aKQ12aYFSLgqMB5tiHNyCoTJLugDmVgvZJr",
  "key22": "5TxoZT8Hwu9H1ukZckJsvLaxbePqyqssnKuRfJRMp141cFzv4LLP23Kxrwx8F8Sn1Sarcq571CX7MCRsuyGgJadd",
  "key23": "4vvyypLwQ2UQRKk94NFpZ1LAi1qer3Dfy7Z6omb8UJamKSrbEKiPEmwXKxg9UQrNqpRV7CmnhajrbFUzfWbfAcL7",
  "key24": "2ki5Z78sUn4MdVb2ZYSQSyPzjFirxKBeaXB1RJk56PBJXsvgu6kmHwD22dUrCMZjEDp8RLdMbCcoAdofXJYAnrx",
  "key25": "28aaEBkRM9KFGygodhKgXh3WcyGz1pT5JuyXbUi1evvGmTCLJkV1CMdUuQg6aYLSJpx6QS6bHTbM2aUsZuxoaGet",
  "key26": "3B5d1W51LajLSkvCkkBRQaJk1us8hCP6ragYNeypEih9MwD6GQZv9iAbyb4DrXWEuFj336NRuw4yCr5oChRGjqXb",
  "key27": "4LsAQ7SVWY8m2LRWVJSePht19iDd31hVu54thQvzaNsdEzfEbtQg2vYGxMb2Uftd26q6mS1mmYVKvsP4SEi6Ddtv",
  "key28": "eBrpfmUJdCQB1kZsERJ9PiNZcHXozgj7FvckZoGoqxoTPNLqCUWfAT5vY4x4paphANDMKWiV5Tihqup2B9HnYzo",
  "key29": "4z3acYNT7riuX1DK2tRgM3rRpTSWBXmdjfxpVNakRvwBawcmkgXDspyitrgP5wudcGHZ9ANJCB63HqedTautqiJs",
  "key30": "4bARq2bQmjdP9JRx17bXsgbEPLgaSoKk2Z2yR24oQijkgUSEa9DmVergBBEfBWrDm3zrAvqaWkZtn92Gt64Hdv59",
  "key31": "4otyekr4GSTbpsiwqY3QVE8obdEfZE8pFQhKk4xbKyd8YgFYJ4pS8e86bJKhkWr9QdrTbUxma355EYi3FAf8zTGK",
  "key32": "3HxzJRkgSMvNCLmWkyfaHWZBEmZ923bcM75Jya6Kyoem3y8NwaqTCHf5uQxdnfD17JDdeV6mu5HXH1rNXHF3HXnc",
  "key33": "5HiRatTGkn8oJsZy6pmbCwhYchgGFgtJjEZ2mPiKge9xCLAABEoQxWvyrvAWnxRT2EH2ZuQw49BXJSQWgU4NwZ2s",
  "key34": "5j9qmdo9fBy2Wk77DJFgtfdkWPdbeCSgbsg7xG8DSLcAwk4ydbk1PdDutecggz5HeWP7fDg3wuzkZVWQHznJpfUV",
  "key35": "4togtHDp3Y7gpKrAmsefoGUDmyhe6ATcztc4RFns3M7JbqxrSUryCr3iMr6fFhVnTxu7nxAVkMdRAcsa8WKe3ixD",
  "key36": "5XpiwVT86dARvYwvUPG9XZEhHiQX22Nw6rk3hcw8oKdoKoSoaJs6ELhxmWdWqWiHg7FSDv3WAuzucqdWs3a26aMr",
  "key37": "519S58M9XfWvbkht3DjSdWkokJheYn7Hcunz4h62KHN8bfRnDW8C1B7SSJ8vMEgZDuV2bbW8sSxRfLGqBFXmpwJ4",
  "key38": "3CuEasjPi1BAyKLfrZ2yeCeXactRJqYWPhpJVJbad7ycM65uoTkzN8THyjmmseAgicWLvdQ3UTjw6KwP4o8X3pQT",
  "key39": "54MYBwh59ZAfQRibj4MAbgayWrojWv3yGTKsCBHx7bPzJ6cCVbKXhE5fnKCbkwYePeKj7gCWcxjC6muk5dWRXzaE",
  "key40": "F7XvYFvMJ3Gqo2zVpdzXdzzoUvcQ1rq3L4pfkC5itBNettRYwtDhPoMxrfLXRKqU62LDQ1XTruzyRuxE5GALG5f",
  "key41": "2VhAJFshHwXGyovdoBZs9XXYT5HKoZUkSHkto9yhTeJQqjdgDk2g1NJ2UaSuKZPwCMM2RwrzhgpE5hSsEzgcKsZp",
  "key42": "3om5hncuYK5wL9i9JtCNuREf2cUPdmZsvLirGkMwd5jrsUWhrvCrdmLWeGK2LhhtH4JaRksL5CVUhHpbbcEDMPxd",
  "key43": "3KEgG1d6S3Eu3iQR4AtZqJjAWJSUcKWwanU1WFqEGstukAtW3cGmAUsZt9NyoS7zbQ1W6aAr2TqoCbS1Pfi5Z3GY"
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
