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
    "4HnEjwLSp3433qVxnUxMXFfr3k4ee2GZo3moYe3N3MYTJ3juufr8D9HXuLFB6tKxdk1B69am26iZ6GPxW5EFfx8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uq1uLtF9vZSHQv9Fpo1zfdQw6Vh6ndoQLJSU8z78GruYYqT5RWXWECc4PNAtRVch2VZRzPhKXbKcQgK4DRiNQgK",
  "key1": "3AiJbiGbQJRB5895op2YLd7EjSry8Fs9eJVicVJ319ZEgV7p2fFaKR1tfnzbactH1JUvtDUkjHR4xb1WiH88B4TW",
  "key2": "5P9sQtHuaoSo2rj1R7CZUVamthhLH5gAGx7y6uU7czV4qLF786A4bvicA4A1NqTF8bwENEEunxxm6og9zAJ4AW6S",
  "key3": "5RkWAbmXJHHmJvPHD5TnXGCK26NbK1LCKLzUuertzhuRwoAaG5A7bju2iux9u68UV1cCDHcNiuQyhUBky8EYE2xN",
  "key4": "3WyAGZRWqCeiCR4i1571viz5y73kmERGGZnnU3hkpoJbqqkL2iM4kyocGXMkwajByfF8i9oZdxx2mBeQjLrSKkBu",
  "key5": "5rS5P73hMheGoZEXaX2z4jWrTESwoctEDyd6X6JmStbA7QnMB5TNKxWEjgXtP4YuTgQJW3Pcxza5z4pVG3PWfuMG",
  "key6": "4wHRbZw1Wo17Ty4XUbiYCRZpzaUt2so557S3P55kXFUsNUWhbHMTwFNzvBoDbt7kTXnrE1wnksHakVzdARupxKiw",
  "key7": "hWBPSfdkADYZjrHpXF6UU5bXgogNHSJU31s5WsUE2pbJjFeRYgig5dnvYwpfC13g4Ldo53WtoD4M4daWXB2u7pA",
  "key8": "Caubn8V6H4vLgJEyaEfR61gsfw6QsTon68g1RinQHFrzRxrHR39TaLdYVjxZkfegDN3Y6MEqpA69A4yPjhnBMLj",
  "key9": "64uyTEh4NnwVY1j2vSoARbGM1TAhdYBPoy46Psoycxju3wR6L36o2eZrXm3RjT2foHjxVeRnaK3oAKadTTqFMsSW",
  "key10": "3kAkuybes9LkUsZA9THauDk2VRfioC72BHMXUKDQVQCt9ocKCohLXmxVLAswU7DjU9k62FJZhd6TezYR6Hx4749h",
  "key11": "TqRkGAqMZEa3sq998AwzrL1v5vr4V6LSo6xEZFNtnLVnGMphDy4HwiEhWGRTq14FjTtTWtqCH33Qt2UbgpNgSYJ",
  "key12": "5nX2zTAih2o1VvEWWC8XtW9Nm2CV6r83FpvDy4gtNv4DHNZuazGiyEcToy9Uv78fdFbXB3HmprJohta1UaovVtLe",
  "key13": "4ZXo6i1wBiewz6gwx8DwpsyB1SgujXbfQUhfa6VD85Uk8Df3j7v8CNvvmBpcramLt6PE798mtktxB4rQWETbtW5e",
  "key14": "4njSmFX6roKVzxxQdEWiSgVc9uC75K1KH7Ba2y4fU22GaS2uzDSnVtvFqBkGgubdU9mb95V5KCe9Y1BK5WzXbTnw",
  "key15": "nS2uENQZ1cKEo4Mq4DZqDPAJFoanrXnsFidc9KopoUQuCw8wcpxg3GxW6Kp3xe1g2SFZZGc59s87HYTnh3TgNNo",
  "key16": "4BJ1UA6EQdoY878hrKaL128DPCNfcPF2jfgsqeA5ji3zVSztyiveDb6L1Jb159SUSK3GuX5xCpxWwa13fpRWU6zU",
  "key17": "3vFh7rTyJE16NYHRK5vhnoxS1TjhC3Zs98FYHwz9TNXn5aMTxdHsPn8W3YqQqPHA2CHrmv3GxvWHMGuXPaXHn1co",
  "key18": "2KuqigFTAGZxSshwXwG9mNkBzpm1tj3aLdAe5hi6XR5Scw7LEqB5GX8UcjH63MejioTm4SJKyABw8kw84egY4Pwz",
  "key19": "5ea6G32WESECZea93cYKdAi3FQiV9RVtj46PDkiEncXRdFvFPJQtzWRvfu3Anp4XtrvSqPHskvW5tfw61AmQZkPE",
  "key20": "4w44VN7u5YAtzjhQd9GjqK5EZvvjfnSzd1QryH9k6wjjw64vooGYVARtTo78TsGjBbakEnAMujGGrMYbpP7vRVD3",
  "key21": "RTN1ZjFXd5cNamNd87jh3WZZHGTGsf5ozq1GuHkerdLiPmS2cFXUA5CJwdiPvgkaGPx9rhJLJNLmjVne1zivKYf",
  "key22": "4GKe2PsdLccXcJo9g1GKYgfLAzeBTU8X1fyPcADnwFK8dqVeGbG1Z7y9G6nL57h4TNeEpXrhHZ6GdVKEj2uwwBu2",
  "key23": "5RxvAP3gyrecB5u5SvGaMrKr2pKihJ91dGU8q1frb3QKfcSXUXSWkC1y7hCk7vqg7BWhceKytjjw7EYQ66vTieeS",
  "key24": "2BEGuhepsgbfR9Sd2CeoikucScX5Pdp9u5TvCXvagZr1SYv3sPeQkUDKJ9QMTQkSSuvZSB89YBBTSsUa3CpUy4FY",
  "key25": "3SfkuodKLgKyiHGKX9Jm2JqFYbKAhVjZMWJRQH9Q4xwBKZvTcN4NrAhAErrXN9ZH4yhCPw2FePi8zfmRJ1uYnsjW",
  "key26": "5eqQMdd2D94G11KnsmXyirffjJVhYRSg41gBo6M7EUb6ny9QY2X38efibVNZJy3TxPfULrM5uFo2ZLuqDCQ1mtrk",
  "key27": "2m2qUFEwEFrr7WhT1GHfp1ReUCkkMKnJjBL1vnSWfPYRv5QfcUogFR2kpsVyr4GVhjnTxnxutNtTTAfi3XQCy7ax",
  "key28": "D9Te3JU7BFMJdLWJT7oR2RZnZuGSX9oUKJvJAVdeeE16uXfPzMfg8iXDChzDStYNoJfpipZAmaTqvpPfv8B6RsN",
  "key29": "5eiusDXDGP485fJRwtUXMDNB6yZ4sXW4gUxDXNoByeeWnJn5JGDo2Ainew3s2Wpgj2ytPWFundygFhukeyNDsAJp",
  "key30": "5ewHpHeuvWBt6cot8fZoRvXnj61UmzxKr5hPZDDPkQEzYTD5GHWVAzeXhMJ7SnSVeRYeH1KqpnZ7gUTr3yQRQCWQ",
  "key31": "4FKU5eZfzXS1SE2uSTHWNrydj422d2fG4dopwb98LCj4g2My8Y1CWT9VfJyNLCSPBToNQbwXJzEaoNuTSQojbLcE",
  "key32": "3qpsV4n5pZvuR2Bmf4J6pLihfCmD3t5K4DUKCzrrqeGEgWhmYvqqKRWJxCbJjhN9ndT9nqiss6mVKu3XWh2vVArZ",
  "key33": "4mDM7VgvBLzpGdVSxTSJHbzRsUz59jtcGzM52yadetv3yNa41F7BxENKef6EKkyVEPSH8a2ckdsmdBjxFCeyK3bZ"
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
