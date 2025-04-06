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
    "3U3oPr13MQwqfdaMh1BuuRvrdCcbrr69qSzFrFK1znNvJA7T2Grr9d11iDFBfaC1aY7w6zuYVuKLfN8ofgVVKEyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64S5QX1CNg3Q8Bz9pJtBWhxQFUPPfJM993ijiR8ARQpmDjWjkN8SRsxJfiDXmwgbRDSyjuBCiaqDrJq69ZQPMhFt",
  "key1": "4mwLtJZt4LSqpYGPeBvGwKgtM8CBXDriX5qB7bfeXChKa2upQpNfj6xNCHJu66FzFU73aUbyAJiCaMYHWaXZ9sNk",
  "key2": "2WFFs3PR5Xw4fNsrQEzq5YEzK2meJF24beBP1Q38bDYMvt4w8DvZJAmfrbK4VU4B1SGsmaP5bbQgC2BYicETwip7",
  "key3": "2VeGcQ9v5DBPtv3Fqwekn7j1sDYGkUhgyfkpizzm1KtLYkQpVhFxs3koxty3MFLtxYHai9BdqgrNGCtKaYecGute",
  "key4": "3kr2DpvpfeinvchxUZUMTC9NYtpaHEvScmBqKcuyc9DVdPmL9sSmfdJw1N84YMtwQX2sndHasXE6zaZGg3aKWpKC",
  "key5": "fNaf2xWGGDbx1YGxeZ8ybPNF41r6pYZugfkoNPBB5MYbLFFHBz5V5MwRwDJi1o6mtwiGXVVfBU2DbtSs1SFWEWh",
  "key6": "ADcDg6UMuRRe6wCf18XQ8EaCFnVezyX16o78krdB9jDv2KXcM1F8qAz2qstAnRWFvKcYB7vQYQyDnX13qy7VhnD",
  "key7": "4TowQxfKu6vWbSCGmYkoek8wpZjyXMRL94tiMjbUDpnqmBDkvo3of8gyL7GFH3cqU83z4Mi7KQv4LsSw95PEEbc7",
  "key8": "2NTp9rTesawZjKqaqJpEk1wHs7eKbYYKq8nfc2yXeSgmbtq8EG2yxPgf2LpivAA9oqWskGThRh2xPbWDWtXar3Sv",
  "key9": "5rfDvYDbt7UTswcGvEEPDYWK4bLp2N1San1ws5RTknwZmbgiRctGxYup3sth6Tn4QDMMKiwSSZgFEkpXwpyYo72r",
  "key10": "5RsQWjqzFtvcw2fDF8zfFhJKRichPZG7TVEoHZpwvdFgzaC4hXMSbds1WfXHKAJbjLzBHoD61Gno5WogUHWKbcnE",
  "key11": "2PvE7mLh3BZgw7ch6cQ6ug9RVrUGzbPTXyXRK7eHcNjsEg5ucGdGh91SGhT7jzfNLnrBcgQahCgzVPsbUH3L36yU",
  "key12": "3Z9oHk9q2SA6SX2V5nW88jn9bjTFYEbJZMKRJdEy4ksV3HLMXTkjHGQb6X1XYEtAQ6UQ5qnBQSZLVxd5MgJUSdfu",
  "key13": "4ioNryEfWDEv5NKMerQLGNGhdYDrC5Wokuav1SkQVyxACXNxocHFRsoPpApvuP65X8sDi53LHkCaZHurSwqpkd79",
  "key14": "y28HcW1rVuDVQeSD68uuRVZFVrUWfXBdo8eWbAnrvKuYJeEpNiGKQQT6MBdqMT3DuNBF4vzwAbxyNcoM5tjWVuV",
  "key15": "2toecQCS83L2p7TKEsjEKTFmyQvyPbvNYcTf9BLzVqd53mGa7uu7PuosEewgrMYxXhqJpwCzy4yzfSGkRofQ8Mby",
  "key16": "4iUwA5jSx8nuo3PUsN2nciuV5SfbWpW3HGWiTNWAY78jYX9EQqZHweBT7Zc8tZ3Hzz4rgWHuxNkyVP6UC9QAX9Zc",
  "key17": "jDXueGt7MwMKnym7VvwjVPnk7cnejKBdPomfLbNAWh4QZWFJMqwJwmnK9QfKRcVDdpqbkNi5mfsaumvv4psEFKU",
  "key18": "5R2aSferuUSczgWT3ycdSv7oWUVEZ34kD5oBeyMH6Uw1Wsh2oLCcu7n7MC9VrQZhex4NLUyzmypwQXRWy5DKvXGP",
  "key19": "2epnsqNvve6776fK1Yh66RYFYTxYJcxypvzth6oR98eDAUr8Lm1mEdvtVXj4H226nNwGEhW9PeGiRxGxpAZbRJG2",
  "key20": "3riGZw3qjqFeeRyUB9TMgHy3Nv5yRf7Bh1DD2rYUXVpCuUWwrK2va9tqu9JuHZNxSxedxUENNWqLchqhVjMBaanT",
  "key21": "yqjD2RANx7DuTaUGXKabEYbrpK57PgseDRsoKcoMLEoU5F334E6Pm7kgk9J2Zwv7AFB4rg7c2XpRqRSToFVeFPR",
  "key22": "5YeKRL3xRRvqrySQq3BaMWKE5FgfGYwNBneaqLEikFynRDsEzZdszvnaf1ecZtqEZCbk7gymsDen8XtLfPc7j6Vw",
  "key23": "4oYthseZCqUdNFeC48yWjnxyQvfFkZzUuFp9o7L5XmankPM8HCTTesHsbXfZ7Nfc4R27k7kdLXx3jxpkEHeE41zM",
  "key24": "N8VDZ3jE5bmrcotDkwLS1iMbaUbUgWtq8w7AZiNPpDjPiy1Qj295RVaE7zZnqjxQZ2zS9UtEnFcciu71SV9ijJD",
  "key25": "5S2fxb45C5oBatSeyCtPTxuncwjqnScDFghVMKc3uSxtdFiZ4TDk43764muFuQXxy4rue9tJLio7hbTyLkBY5Sw",
  "key26": "2ZDRZrvKpogmgSjoQsDSvqtCidHrtM258S4zBPWYrjTHEMf2AkR83daP472n1PkMfNK6C7g9uR7N44W2YQnoHPin",
  "key27": "4shHGHarUwbdmcr1Wa3Bfjir8PdWEYWDULXWbEA9cqjTq9F4u3p2KaMJjidbzafa2pP6YVX5YqtSmdeCAmWEy6EP",
  "key28": "3qrTFruLjffCxpdr8W6zL1WbKSxxm4dTxmdC8ydkkEGSaxRh1yepXawGUDv8gG121tExT6R8XShduVzhwnHqjcvk",
  "key29": "5Y3YSGeEmG8XKiBLpxuha84zJDFELCMDjgEvvHfZkfQ9R7fwGzwqATCkSkyDs2xAV4bnKyUVVXr2Y3qJoc1uDCxF",
  "key30": "5CEVgXwqqG83nRg9tMT6fUNNQr3yAfafc1UJqagFJBhoEBeLckyM7BC72ccdKbcoUiJPHTBFXgu1v8XVqGzUj9bb",
  "key31": "4rLXfHHHeevdzPARLRtCopkcgQtLMGW8CSPoXsdawRmM99c35nJxvtPS8Z18dx5aCMGNUbFLTGQ17Y91QNbVTiKi",
  "key32": "3qk4B2HhFkV6HgEaygxCWy8FDj17JqeZs4W8VBVyQLvuiNWegibuphbwVN5Wv24LQ9LWMJchopXSf3ksT4FwQtmd",
  "key33": "3uyz4Y7pFnNQckA1jBM8ydwgFjah57HmQhqy4UGFqeV6VVEv8WfFEhZnAxXgmj1s26F3LHCHS2AHtqTfDkfrYQyw",
  "key34": "gM51obeTJFxcBEBw5tu7imVQPuU7PDE22UpgVARWk4H6NG4wyXVidYqoDeXePeDmeKgGa6tyfnuXwnXMpAQ8GVu",
  "key35": "2HQoSTTXcW9RFbpk2VV4zRN6kzKbf6mUx87UQHRVoVYh77mRojugjjiaKJYwNwTfXhmtgsKyrLfFuoPZrXpBzsTY",
  "key36": "3ZiYazff1Po4EyjhfuE15a3oweRN1UhmLabAAkiG6xPKN5vc9ihjmrDJSJGaKtKyJYYRAdjStpTZHXsogBhJuGyF",
  "key37": "CTGu253GZCBFmQ97k3t7YwTXJXN2kKMp1KUU9Wk6vKtysHmcN14oVeS2Dx1zQ6XY1ZC2yKua2iBbbhHFEYCB8Kz"
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
