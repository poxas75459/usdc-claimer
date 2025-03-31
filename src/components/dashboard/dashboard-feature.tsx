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
    "5U9rFjnkEbBZrW7TV9rHUJxyJNQDhycsj9dRFpVsJZik74t6gaZx6tAAVyoapbco3i2b5HCBX34dDRjr6jzawaZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9m1LUjeEaoScHDqTFR1mA4jJcn7bidZYZZZLdiRXgwxjh7EmdAFWQm48eXyddshWNZo4DtwSwtL5NDNxUBrbJUj",
  "key1": "5GeMcDnELRiQA8zap9URyN1U8m4UqdQbJXgiGLgG991HegF1mtP6kVVpW7MTe6AiH6346h6EBhtQHHkWvQTjnGWN",
  "key2": "4gkSHs1JKNaSvFCazmsJcV2aAxKQeYYiGbbRb6c2j22T7Zutgwzhgda48nHYjUmvvBoijNRFE2KsBEDTTs9BUjhE",
  "key3": "3MNDZi34ByzfAsnSB2gwEAcPwHBhPMaW9fLp53VRy7mncHduREcG4EDyi7AzUX7V2cx9bHPCtpGweQq7naB9C5Kf",
  "key4": "3JQ7oyuBYyZZQ5uMx9LtP3ZdatqekwZ7iiU79Xp2L8HvvExJ3dbjaqMqoUXpZoW2aSmcuMBh1GHYNS2JwpFXb5z",
  "key5": "4tC6Mo9EvNU6r2rY8GH2QshjXHEGgeVPfgjogPagrio65eTg8PTnV8inbw8P9yaNCLnRfLaS7kStPKSfbLyHvZ8u",
  "key6": "5ptF36YQv1UEESGgphVBUM8fEQbrUMfUTXoreKD6gPyKtZPA1JkEQboGP2EZgp46Wn2S8WQyXxZopAUGaf96q6ZW",
  "key7": "5nYcRUeRSL7NS5tM2oLN6YoF9Gf96uv8iuaZwMg85FWYFFDXfU14uChpTJubGjGwwQgYSsckChHUErSks5rECK5V",
  "key8": "2MZgNwJ5cS6XtdtFABVeVht5RLpTadhdHBAscqujQNbHZ99bY15s2uUk3xjurLxtPKjHW7XpHXvxQfTi9xpUHFbY",
  "key9": "5KEy2WM9N1pBJZZNr7Gmo91WQd6oNgnYYXdZDJcETpnzyN552cYmmnhSnJ9CcHDHDEW49HG2bVHXD6ksBwHvDXNg",
  "key10": "2LcjdGraB8DrVPLrWXdjve9wczEdBTEzPfYZarasrQqLGtEGTvwFgw2pKmAPNtfYjcrDGFePyLogpD2CQ683z8rZ",
  "key11": "3bK6zSXYYrSQRgzSp5kyXpoj71ksZonQ99UqrxNKeJA5FPvsRY9Py5HWHZJ6uDb7tjE6qTjASQnC3ZWbrRebncuf",
  "key12": "wJHuUQkNWu4N8yLWqzDjyyUSo3SSdgjhzpA5oTxrXJMuY8nBUvhDrAoSUrA9LqCPB2goBWa8WdUfUdeyGno6ohQ",
  "key13": "5bet6CPHuZFo1C2Ngta8qWf2zoDdky6ak8wCS3pY5rsR6P3g7Hjfg6nqQeHHgHnUiQL93Vx9BbLMA9nvVus13fJu",
  "key14": "4Yx6GPo42QaPkxP7ZzLTDvTG3XPEBbMwawoZkeJH5G68r3y2g8Xf9W1aqdQgFkDQZWDvY3dmqsfX8WSx9WTouYXc",
  "key15": "vyPTYtEF6qVkuWVxTGrRuBXbVQ6JrfoAEgSZWJ9hZQfV7AVqy5w1oafnJxF56yx2haeggpSw2ddpx6z1424fWAQ",
  "key16": "5zkEQSHMCzcKpM81gX1QuY49NLzoboafjbqwnUHT7s4caLpL8qwKxikEFYRfkAZN3rTB712rLe1SaYnvNfwjWG7U",
  "key17": "45YPKfUcQcDLcjS64TC7uHSrTVy9X55rLJnRgaEn3WKBrkXrzPsCAQEEbr62LRFY8uVHcCVzBSCBVFFyqBvRATM8",
  "key18": "65yZqqKkHMRJC68bcafWTCG4fgtq3iymvB1cfzo2X7wqykNHAzKNCqwbyqgqwSdcVaci55qzMkqtkttb8187XKLa",
  "key19": "5MszvBAmdrtLozBbouGiGUuLRaTHwvoX3FnQ6XJEXPG7YsXKvuoCxzVLRqL7q6EY1kwDBheHtDMUQ4gzHGwdk8N2",
  "key20": "HCxf2Jdc1TL8XfYHNLjbLxPS4rdkphJsGcWyNkoZGSTU9skWCN5BhxGUmcfXe8Q3JmsZ3Pxqbu3SbaMFrcWmY6f",
  "key21": "MxUcXvDGEjmpvpiRzaAWsrQKhCbr7VnvApfwXvw3LcdHtcte4PYoxjngPYbusumofcfR6bi38xAg4kH4RPoKsVc",
  "key22": "4TkB1nEpJp2cuDo59ABAnT1aMcUwpp9ZzRT1CYNmcT3hf2yAY45iaoBaz1YGEF28etDBH2UecBvXTUS6szfpA1zP",
  "key23": "2U4azijQaVvBEM1TEh4kDaFJrQRdhCNcM9fm2ViJ2PA3Gww3VvwFiiMvUbqtN1ZU5DvHLx4cZiJ9jyzDCgmWZuyB",
  "key24": "3TRd5ej2Ew5go2S7EM3RbZTeDaenqYsthkuL9g62JWvWNZEtVoUFURX4rgoN3tAo6ntrdUtzouTTD61zTDppuSb7",
  "key25": "2AnmGs6PNgSt7NdgxhvmhztfdPJUDz4DEbae5YEwZvChuTTprvRDaNxkBFAGJZ18kUXqkaGMPL1YiyHhE9YKJgXJ",
  "key26": "5GUBtLC2P138HWZgpo7ACnUHFsuMtYjrQq5PZmLKct8HCckpZRrWpyw3feUhJyfLmVmiD24VC1BRiDnkcaFDwQBQ",
  "key27": "2d2en8WpiBteJtfwRsJesTKMza2iqCWT3CqZBjryxGwXiKnHH1H3hXHBtPhYVEJVFsfNZVgnR6qdcTQqibnCQJPf",
  "key28": "zFJ7EU8GGk57pidmwY8dYvTUsbLcfjVYR246dzcZUvKnNeWNvQ4hsssso41F5PhpPvoZd3j8wfmxShDVjW9hh6K",
  "key29": "2A9nqBAbBsPFuQFh8hJJu1oZapYrC3NuwdEyY8nLJDmqDZwrBayV11Q6wUnHY4KHMLRCMNbJeJNGUktZgKtTTLjz",
  "key30": "2Ju5rS3qoEU5dHDZvxQxiMMEXXT4AUaktXbFWQp8LomrF9dGpbhGM79Wp31rByJjfkKPcir4hBJjc4uCD8gEgSZN",
  "key31": "3ACDdU36sLjJrZySYiDKKcqEvULp4i88KbQ3eDjtLSXRNY9pkiy4jKNXPtBREGBBvY39gAyA3uZyAjg92mNuDyJA",
  "key32": "ajuwcYNEBnW3DxjrHC8a2FLNB7REFbzG22rGESiSPH6Acz5yn4YzM1mskJgsSGWr7obq62UQoZsRQydBF9JVc1K",
  "key33": "2UnG2dAKue58wcLgTWQLyaSopksU1KX27mtRsYeYn5NMRr93eha92Fhzu6LnSEKdYRCfjqTDcqTtkeCnmHa1HSj",
  "key34": "b4jGbAA9SRPtpFmfUJMXXdLtvuDWAM7snh4GKj658zVT67DJGZzPiAfJiyQzR1sUhQFEdfRCJvKfE318QCbuaHG",
  "key35": "4ZwwoqsE8wFVTE8Zu8SGU4a4K2fMyNr3uGmqP5g3tSEpVdrWcByk43KmYHYxkNa8Pe3iezdZk3jA9ScLcJ4JmkdN",
  "key36": "5HFxY5b5Gd6UtwdNs2Hwb5ov6VZbcrzGYfZEZA4QxkSxRkoUgiUj4BfBkMMaf5QresxAkbR2ruZ9q4dFKVoyvyBN",
  "key37": "34U1ey6ZVEVyi38GXPgKBuQkWU78LFLZQstSbWXf8st2WFdPGwq71n2NXfDsHMeqtqktw4UADJ2ZthznULyLLaN8",
  "key38": "5pFrEG5nJ2gqChoAz5NgG7tWpNuNhqwzyTnUmscRRPwPzeFnUxwC3sNPy5QxuoZjebdhcjdS84PNiJrVX1ditrNr",
  "key39": "2egdSk3qGyaic3ocN8ya7wqeNssFTvdHgktzBvpFUzetfEJbXvc2k3UEg3TQPnj6vSgy4Yb9ThidyEkgHVu7Ns27",
  "key40": "fkL8vDBhgSSvJv5PSyngzj7KbHio66NY7KrBhgngPyc2WqympZgfdJdwLViUSz1fUNfE6BEDvxX5DoDXFipQULr",
  "key41": "2psM6NzP7FUzXjpHZvHj9SXf9bWL4BPvmYc63U48ogWgpjaCsy6Npn34ZWy97ei8zPf8fc5tK9MZPasFCbuHUy1",
  "key42": "1svYPAo9vwHmSgvUm3mJCthKENA8nvhcE7SpYcRmsKff8gnHptv5u9K2zgXk5z9P48cAhP7fJChLxymYTNboP8b",
  "key43": "2UK12Ufv6ricj5Q15DLqWrjUx48gG44fy6SMushgSc4Sd6o3HYMUF2PcxetD6NQVd2n34qeWHvRiDQLvmbwSpQYu",
  "key44": "974cAV2hhKwYPXwgM3KuUtQWewiQxvJUNXnQgbQx7EQreDm74V1FC7KzTSSwvfpy5yL51u7UxNt5EaZPXoQQBae",
  "key45": "29wPZhKDFB696Lgo5ho1m4RgDTkNNJZWYFSyj8aMjFXu6H2NZFPQY2q8nDHPveatChDoxqKgHFqWnLn6TKULowAw"
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
