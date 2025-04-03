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
    "2cDgPRjGWmvKQFUXin8WtgD7PhzgEd5iMzYyY3usk9PFziHqdXoer1SyzWQvtXZ9LgbAJyyjdDi9rgiPwN1QEv4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6x8Td3ZiaCbkNBX74LSofqiJfekh2i3CVze8hE8YGExUmQvjh3M6RxoY65pYyQs992VWKzch3dH4yQip1xVzA1s",
  "key1": "3SXbEGCiopiyFYsvv5fuhGJzvGtgPqWV19JtVfgwbd567gv21nr2dzJDGKJEEfBTQMkmd2MhxgSBMrsR1F59sdBE",
  "key2": "wJnfbpJ8imjYd6G42H617d8Wx6rtWQymeEaS9setQRQQfAqywmJx53tpmaJthVKUYoicq9aKUcEgyYXnkxTPGdq",
  "key3": "648nmTBwb3tA9KD6z66i55ge3Gk5mMZFdSPYiACnVqCuUHJc43sJyesqV2KRqKyZfLzCVS5FWfhbcEuTybJv8BLh",
  "key4": "4ts4KXDiifyRNZ4Ze58VG1jctHzLRDdCCBuBAJZyJkmcsJU6FcMfhQkwxY1ZoW85y5a3X1dkfebaKbLkkdAvjDhi",
  "key5": "3cySS1tQtsfgUKMTBWStwzY3z67H8Eh5Wv5QvgwbTjdDzLRWS6kduPdKw22P9uVqnSncYfBDjKvMwKTHZFsbbra3",
  "key6": "3F37Kvd7PEmgffce1dCMnFi2HxZive16geT3xoS4Fz5gM8p7CQ6txqvzDZKogqjCAcQ4dA3P9hdZTKHrQmjyFoxE",
  "key7": "5ZtaVQPZpojunnzUCyxp8FosV2gbCkGvq4mY6Z2WMQiCgG2qfqc6UXhhhLw1fZHwcbmXacNgsop9H9SFWHQfVu7P",
  "key8": "3V1Q2hvfysWrv8mjnbFuTNjFbx8pn89kJ6g3A6gtLtS9TUmFV6f4jyoZ4WJEWUFnVsRiLekFm4YAXNzSJpPVuG1F",
  "key9": "2jPfo7cZkwQSLZXZYntL1znnnxKcEFzTQd7ypfhB2Kgb5Nbt5msgFVk1b51BYUYE4RF1nwbmgSMR3T4u4wRxvKrV",
  "key10": "5ansBaKECZSQTs9RZeXFVDVNu8eC6E9TBPmWeZb5mx4e1c3VwfBrPeZr6uBuecu7RD1efXFcK8i5P5Lj59Hm7rZC",
  "key11": "5FjWoJ99UMQBi9Z1wLfadKpDWiDKEhMq2LRRvr9xMkFsyYkFQwHV9tNEgaPStkhof1kLDWATsCoBqnQK1RMsr1L3",
  "key12": "2pLrBtPyUZsjT23HD5STjrme4pp6SSsBGeWFGJqPzV1ptQBNEoa1LVmupNJ3itYWtVugXxVAghdsRrFLanKA3irt",
  "key13": "BQ13vhMKJwyqurPmUwaaNssZnVPMmM2hVef5g5LggHkDKU6yw6Y9xxHbQhapCxT3yCyTNhnKPDhgcqoSbUzQSpZ",
  "key14": "2v96cpbzZ4J7QkcAoFUzTxnRh6Ha4MRZuiAcb2njKqEkYAXD4tdYUajhfctNYkGQEgL7TbXsTJKHQcfv8Y3Q6YFf",
  "key15": "LbuXS4fdCPp5Fy3hdnYPk2erph9XkyVtzPKLiUxUftRJvdhFZxhznfgSVwJYfJeqEJAN2qG7ywQ2GWzmca3AghK",
  "key16": "2UFxofpGYcQWUHE8dhG1QtX3NnjqHGnmmoE2HfDFtwExGV8sWibj1YfuXosxRs7uy6CzFrFfYzJhUNfKwsfUxnNs",
  "key17": "BQ6AGm8JfYCPiDkJDF3QmMnw8ehkBaVaooDucDD2kreRUNaRAZBpu4EQiTKFpae4tdSDjRMvE5Jz3px1UaexKf3",
  "key18": "3nfv7WQp7s4dXHXCHPdpKCQ9ouVKueys9LFRU3449z9nuht3DbB4HwbPrqLUvBVgGXG44GscK4wG4hBUETQy6z1R",
  "key19": "5MDGz3xtm82w62VaaKRdM9RCpFxVDn1h3W2FjLa5X8HNgq1wjqHVhTpWzStCxa7JKevdAhe7AwpUxUf99EopX2Pd",
  "key20": "5kEbYK5ja5eq9qJn7SJtuJKNCp645oiWBcnM1GnZv7wy9jaUPN7fUWZBxtcvutTLdFsDwn2EjEb354t2fYTs5wsu",
  "key21": "4eyWCQTrAD9ZnLzdcvWWsA5dPQ7sYSLuYuuvv4VUmaAA94Epgf3AJJYLRtcxNkm2bBPhGH4wCTLMrCxtJJNSX8tp",
  "key22": "4tAHSYJVekNTAo44PgbYMXp6LxywyqxeTRV2iA4uh9TSBR8XUqwm2Uhu2ApZV8rt954v6RqkeDZ9bhQEkoLedj8b",
  "key23": "63i4ZHCf5qBzjoF8PPb4vdKpMroHLkDKuuRrtTRzHTn8UWKvDjfCfKHrUhaX32bYhUVbwCpn5zYa9aTpYoUe4FWu",
  "key24": "5fhT3w33PgMVgExhTVBqLBknCb58xaeDxKk4mxQWzxndHCtsNtL2anfHhChRmSy1k5f2FGyMffsJGeN2qjpC8QD1",
  "key25": "4CxTYT7UoxbFFeNmvYGJQHQwjpHcrNBKr7cy6GuAgzSq4acdYBozN2GrrMuRTSArZcQv4AuQgus9dpivG74Dzuoz",
  "key26": "WckmioAKC4yE4gui1nnfbFBqB8yBrSJitzMpDaEMVUxeg96YFZX4bSnyuQEm6sZpKxymXhdkn1tjbSZzgRx1hXP",
  "key27": "2i8DMQi6v1hBhsa7mj2Gh65fFQrxP9fT4c3FfZ4mQRQVzDgbZTiJSugcxQvD4QAnsCXoKxwk8HHaHLJHN9BZcMV8",
  "key28": "4McmR8rcR8UPt4rEtT4S2rgBQWXDnbbdophoS1TtDF482mdxxbPVFZaXafTGN3NVpGq6jj6frMjJCX8Ve7gkoEfT",
  "key29": "4cjmxAE7dPYR7cGi8cVWsvhYZW2jT5wEK1YEJCx9c6MxWQSymBAhFkvmWYdLgw2wLJ3m7NFrUBR7hZbRFgYDfA7F",
  "key30": "22tkijmtve91WmCAhH61Dh2Aa8Zsp35cGcxRnAUntEvFAnnJY2KxLdoMgp9SAgu146nriVmV1jXjT9XMt69wRakx",
  "key31": "nt52wnqM9Tfp8awBP6vDQJdhXzZaaZgviTRzyydxXb2rdB7vA9GaG2Z7BQwptgEKPUdrQQ2S5hzTE7WTbUfz4QL",
  "key32": "3dAPS3qKfTZJUGQuCVCD5SkA6J4MKtAufM8BpVy7N7PiNuN1NPFKtuA27rasAWvxpQu2s9AoF72uEBofDBAhFDSB",
  "key33": "5vjS2KZvfbrDpyMkmuEAyKe9vcMZqHq6awVbtHEowwMom2oTi935fPydPv1v9TMyQkFgPo2JR1H2WA7jfjLAfEJp",
  "key34": "622Lzy9sgdtT2ctcknFcYx74ve1C5FeaNWb17fTa2srhTyF5DzhbdpYMF4XfCAPc4ycbdJPP3a6ByAgwtsFz1hGh",
  "key35": "2CYyfUoZzosAQaKLYXXDXVg1A7wWY5ip5SciGogrbx9UqcNCBSZgTVLLTgxVHffG3Tah1BmRWdceVv33iBHFsrn2",
  "key36": "3vtBRxyLccxjJGJWfFB1ahPbCNXcT36iySMHvrYEbdhRAXf2E9kHyoDLoMCbpXSCTrVr8DmC1WaNzitq8NC9k5JY",
  "key37": "3bxm2eJoXhhbgjQXL927PnUZUBEGxowhu8Mk1MmApinSHFUANRiYwafc3GUCaFQULptmJhhyPkM16eum2ZwVmqDE",
  "key38": "4jU4iixdfkeXHnmtdxdMGue2GWUTaSJ1AYdwnpQtVA5NGodzod2yDWapnho1JjCfCrEjzf7H4RS3UMVBcrXjdZP7"
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
