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
    "dGWrm2y8yLhFoJUYeTAjWfWcDzC7F87Aqtv71kSAtjum82UzXbrvXnvDsBod3RHzW4yVbLU8yv9tg2mtRbQj92Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ttNARpxKZtPaWZVvSjQ4icjPk4MabfSYDBRA5jx91CCtzybwDSWKD9hJ9B2LzXVoAcSiqddenfyWuGVJH2EHvT",
  "key1": "RhgXqfX1Z59yMRSiFfUjy7JKaVBZbEmNnSw4ZU96tNujmzJ9Ltftqkf47CQsKt9NPdZTfZCpHpaCBPgG5RSZRSi",
  "key2": "621HUPCMq6Mkm17S8dUgcV7rQTioWXySqzwuZ6pz4Bq876qF7NUGowyBn4gHa5oRW2CsrB5LGxk7xpUkdWQeZCnC",
  "key3": "65rWJuLMoQ2ph4vd6P1d1FJegstKr9hm4ocrJVDFhfY99iZi7GqRekbwrpuanF8XWGiWaUfaRowXsQGBX99yb7t9",
  "key4": "3bcK6FVkAuwxtgXxXMCNwdHuXcbjRo9KoXAkqpgWQ7YcNcnHNbiuvaRRYVrE8NVCp9kKyUUyh9VBko44vVEP2e2i",
  "key5": "4SmoMnNexKeCBXrs6sErtA1sPu4JBwePBEymsCKvSFnGv3vRBM5gLGaQsFRM2vWRTF36j5Rz74KTtCTdj4a9GfWB",
  "key6": "2dWC7ynSXb6ZsBzS2n3LsmoeXwef2yMRJnF49GsDxZNX7GLhZQkZBAaDcbcZgKt9H4TWvgkrZc2iEV52Zu9XKmF7",
  "key7": "5WY9UYWB7ZQCHAfCBw3kgnPMYrE5yYkmogg5SDcHaHTknD2dYfdfkHtmqGoPHueCSoPbxdmywti2LoUUMQJffvjA",
  "key8": "tsmxhs3nYM2qUhAYJeeuaSkDeboNj1VXZAdWyAT5P6mnqDUxWhDTqUpxirRMx7KY3sSHEugzyfoM8NdGGJxQPSS",
  "key9": "3XsiPN2Sw2XNSzBH7ib6ownFnxM9rUoaPZPTXdE9KuGVStkTcPnv3bpGARxyjtfS8ySjq41aXAkC8tNjSCczTDAJ",
  "key10": "4mQr6b76R3Pb5Uu38yDzZstdDjrnZxvv9BzT9K7B75PNZVuQidbVNPJ14S5TmGvCc11e3i8S2EgfVebmCCk1d26p",
  "key11": "5MtQHDKqAnqvEEtHLxS13dYBAWybTs1jowPQ1LJb747zrz4KsKLiivnG6192hRdcJiLJSJGLELpWfQmYUjXNxHqR",
  "key12": "2A9GR8UpBRAP6KHLziVbL7Ve6JfB75bjSireW7STFD3UvPNWwqudVobcSxmtSWfLWUzn3wJ5iMV1WKdsvBEVJdk3",
  "key13": "5siPqKzex1Hr7MjkPVEaNRtBgbTVVFKGobaeavk957FNtpSSfKJMqrapiS7jkj46V6aLmRp4NaBCTapn7CwtBnEv",
  "key14": "3jTbaFrUocHLzgn76WAU3vv7DZuM5HSmwuDn8K3dn4enuUXC39NdoRDoWi2piekkhkkQgUhnkBZcRK6cxS6xwzDs",
  "key15": "5JuM1gnXyX8MjYMnHgknTjoZNFjMW7DpiR7DgGZVzL7vXTeb7eu5AEynN8DjoPvAC7fbH2raTRsavW63mv5ZpatQ",
  "key16": "1GVnYXLXTP2EvBfxzUHv2eQh7SBbN7mWMK6GZ7v3ta9d1tX6HqwEi8H4UTaJ5Az2oEVNrw2nVue4RfeiCFSnTA3",
  "key17": "sskXEcyQMYT7kambQxJgsw1yH5gggpFuwQMDjxTcsDxBsYjKKBKcXWxhuMi4WNxzMpsswpk7AmydwkmLxyZXpWi",
  "key18": "2ogUMbWniRPEn8ALck8nCaU8XWXZXHwTneUjZLZhYR3roeCVo7iTzTHbSHdaKW2avzqx7ewi5oTLXrkFq1Er1ywX",
  "key19": "3ToTyMvFayw1WDhNx1GGryhaRiPLjzouTNuNBwqBzXKPKpH6TgsqsE7LYCU82UooL5DpyBstC1uVpEPCMRC4E1cm",
  "key20": "25G8uNFebBSepxzswL35RSCVcZVLfcrMfAuh1W4j3w66euYTscx4KhXG43NqyHMQFwnU4FHheEYznV62pDLa7QgU",
  "key21": "2x63JV6AWLiqtgZZfAv85tjCMMcCCPKsHeW5XV47rJZ4fXf6tihD8evir2CHpjJzZ9sSx5jqaB8wL4R4ztYMv47s",
  "key22": "3NMf5mQtNqdgkxd7o9ndomzkMe1uzewndQgDVTTHgHpTZu2Jv8c6UEKSagmJQwd9MJrMZUXp9uUvdWuWE8jHzsWd",
  "key23": "542nF3G2Q27CDuiXFyDUCkNQLUpuQcMq1bkzL1RAF46wcG3SRRKHX5rX4wCqhM7JouqnmGDcxe1xJM3DiBbiShzL",
  "key24": "4pgaeKoH5ppM7fsjCSctQkYpCrbnQM7c2kk84ZrmAfkS6G6TrmkNbyuP9LGKWdG5vbCzf5qLq4BVoscw15gajLTf",
  "key25": "318L2Co3c544NmxcXEHvhCDVqSZfdzAE36jp8awmTcYaFgVeh6JXAYkoB9bRRySppwVTq6irTuuM2erHXH8w3Vbw",
  "key26": "VK7eVJ2eWW2n9tjiKZh7QDntkrbE3RCpUWPXBbQzjV6bCHH9XzPsybdoMvWaPdELD6ZAhuxhsH1NTEaYtv2VMxX",
  "key27": "4D4KCrfptvwiQa1UHCkTBc9npYdbpEuzQBV9zb5ZzvtMMt7KModiPKuuHh5fA6TFhnZADvfiWypcUcct2Uxs1yxc",
  "key28": "583vMDXLXaKkdGdYGm7R7wuV5wVCT6rTcT3zPmoynuBFTYovZnKjVGcUQyStCwzd42HnjMGSXnr2bUjkUjuENwEW",
  "key29": "55tKfz4UP9LBfmV3AY6WPjBqJe1cTboFvJQjYaTEGThaJe6z17hh2jSJf1ca4dg8maxZ34Q76yXtojjLody2Y1kK"
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
