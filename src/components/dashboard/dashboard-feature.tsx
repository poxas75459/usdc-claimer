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
    "4J7HKXeSr6j4aemqVuFgaT1QGcAbusPJxxwWQPKozwpHyGjt3BKz95XuhfAsqK1gpfPE7GXpKBfW3YnxqT1U5KPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zrAPDDw1nfb4RyNJCuFkqSa4A3o3amDXN5PAc7RmEcu3d2GGrv9w3w3ibYwtb1Xe6nJvdEudwT7uYReDKXpN6BP",
  "key1": "5bNwKV82GPNW2sGmVaQSrEm2VAEvoJC2GB37XjTs5CTJWHBQkWoe4xmdfQuNbQCKEamdke5bx3LPqHvTuA9hCckG",
  "key2": "2QgqaRkR9JjKMLvEx1DFWRXLwypDHjVH8F6vJgLsJhpzjLkTp1w6EZxkDPWBnSi7AvX3X1MhJSYETNUxJykqTHVg",
  "key3": "2yYLJKAfnuWn4byFUsYbeFhYYgmLw6dyPHTsi2DtgBBBsTmpJyqkU2yLWjzE5R6eeeLWyvntrvmUnKNtsDegBEwm",
  "key4": "58PkT7HGmpQ1QvpQDsCjLjM4agEGSykJoxNMgzPrLKxYfU7tUnkJtjPH8Mhb3AVCD8KvLgAm6xzfQjcSjrrYy2nT",
  "key5": "SMKGPZyCUWbMsFjYBYYZMKk236Ghqn7rh6gc1i2bM8NRmHta2FeY9DnC4sr1Q2RWrCQGxZA1z3yXtrRiqAfwwSw",
  "key6": "65yaVssWEroJxmyhbzxtwkf1ZsgzUwZ1edfYyMSQ5UnFibENc9UykCBFCxM7p8Y5wcVHtVkw6sThEWdkVKoinpA",
  "key7": "3413RuJ45HYDnDbnyynQBqFPZq8eqPnaJifqFpPxgVyC3g4F1i12gMm7pFRrxy8Ui7uEa3HweEpeyA3ZWA2BT2ns",
  "key8": "2qgTB9JDhZSUXv3NoR1gQFgoYSD3mNjhVdHk32jvcwSdNjh6d36EWnNo43qUkjJeoqH9PQhXkPK3H3ZBj2sGJHMV",
  "key9": "3sPkjJ1wfbrp2F343DAKD3U8aiwFAVjswLyFArpkgRtUonsbcS4UjEQv8h9Z3dqAKfYaZEFVhhDDu2FFbgFrxx1U",
  "key10": "5yxpeJLMbeW8v3Gx7ooBiS1fMne72KTPEciBnFjWxFzEeEiAauC3ihhyjqtB3zoTkEvagsNCH8KKgcvZuxkr6yhS",
  "key11": "5bJqWJt3aHa71LCF8xc5RyASH6yr83uQFiPHby8JoGStbQJwR1jvieU618SUKXiuYSbqdCPybjM8LNnyquURJApJ",
  "key12": "4Rhyg3WXruVGpzWcU29P5khApn9SUskgoU9uGfXroCqozfBducdbFTP4GMCKawB9zjFPd3o2m6C938hUKebJ28p5",
  "key13": "uSyD2tMHMoNQA87Pn8Jd1hLRht3ZTfhfDwna95AUqPZNydY8i8E5SpXFbUHgwPgpxFqqoYtChxRva9k4SMwb5Ap",
  "key14": "5Ce3n2Uw8eUECUzYfoQ94J33U1MfwzuxxpeuErYfRwcKfHAkJcuk7fgPDuX5rXsFJCH8maDA2i6sJooSkjYHR8gc",
  "key15": "2yFptoW118Zaccn5vt82u6j8n56DLHk2WMhjqYBW9ubaNuCqo1nXxnAzhaqvoYVJ2HDWAbarSmbT9sf5bsDBMiS5",
  "key16": "mKYNMoN6zkafHQebKCKc8xR5QYkuGbBj9dBkU3QanXqC7VrFksR5F53dJqwKAJqEoEbXGY2v4XR21SSaRNsTjC5",
  "key17": "Rq1aa9tLdwjrPSH3AyTD877dhRJuJrzcA7NhY1tMNTd7HCgZJUBzR4EsWooakh6ZCZVGpC3NrdQvyD6SWXNrPxE",
  "key18": "4uihTnhYdtpfFu5EX5FETfEN3A5HDiQrUeNrsw17pYdmCWvELJ7hixiYCBiqvEDbgCwHg54aYToWGSiR5UfFx6UJ",
  "key19": "5JabSVKJj4N7wEYaic6enQT5cjDhgPkbbPvgSDDpvnTWWZem1qV8eV86Sh1LdqvdUYA3UJNkqGtVkwegJzTYF67k",
  "key20": "2D6RERe3noJyRzxDjfkuuENvHZWXThMx22trWibhEQuLaedUmeyi4GEqpE4e3QfgqtGY67tnogHMkwiq3n2Vnmso",
  "key21": "3vj3oz5hVdf69W3rJWAxeTLacHqxoLJrWrzrXXomNRr72e6YCyusV2fxNGkqJ6huxzeoQG4VmQsEmGXvw2VnvTDS",
  "key22": "5Z976FiSHr3sUfe7XKbuiUUMTRDndvQt84ZhJ7o2vG8qUDZ8K8dqaAZQ4KmfzepsQ81iP8Xo3wzXSq78L8E6Pc5K",
  "key23": "5roBZArfzbwSf6dk4HoF2oZiVC2fNX8vzGfLMqsjxvNzLuxF1wawh5nsiUcUaPfc3RABGafZZhHddQsqDYmXF7Gq",
  "key24": "22ZiF7HSL7qH1Gewt324WCCDELQXjr3w5GsDdMPYDteXLef2bFXqSoXKEFT11J6iLQELgBEhX2kfn436WVPfEFxv",
  "key25": "4pdq9oKDnT4ZQuanUFKHcFnUrNvj4HUvwebSFBmRgfYT5AATuBKwANetLCoBhMbvZAaMbSdNDCSsWPjTRWDqUXQe",
  "key26": "PWtUg7dAXFawj4FrgLyLyFMZv7BJQjtsj3id2i85LUAnm8hR4jrx5sREvUdExDXFrYUmgfSiyagayTs1qzFNWXb",
  "key27": "28RaF6NJ5XoqsJP7gvPHmiiEx1XBMjBFzs4yZPBL1RjEQo1xk86w8sgPWBrQK1erSCvWyUrq97etubXUvCczhW2B",
  "key28": "5bAyi7BEKbSdEMCaMuip2oxYaFRQ8Eyh7xpLKWMnqrqcooGKBP5xMBMePN7X28B9BkQ3eqMswiJYaDnbkmp6zqYX",
  "key29": "4jvuDoQqMMqggCrAzVsSjbw9pa8QwaGnocUjdzsQfVWYnFWgHTVvEjGw97ouYue2CBxF9zvJPQFvaE6bBQkV57ei",
  "key30": "4uvg7VKrGwPJHqBbkRvzidSgtvqCDgsmzoWDP2BkzBYEahEruYC2jMEeQmUKpjnuTWuCaVydF2vRgBVVb7Mh7361",
  "key31": "66ayaGwMSJhUWUmXayRK3s2voD42y6g5Y8DjajPpvkt3qtuxDYZNq5QmpCE2sW98n7K4oh7BFRNyoAPYnZoXB5Mh",
  "key32": "2ewF8EEsGZaULxwqVV93yPWH8sdyNX8mDA4vbRZ51nmbrY2HRBJQiHHdJMS6PGhUoHfhqeNEvnveMuhRNoz9XHLv",
  "key33": "3qeHKzMyTuPbW5nPv2eUUNmFVv8xDWFCBLpHtNbVvJuHk4sSqnuW3tnJstWLEFawKjXBDKxaoQtkY8W5cdd4c2j2",
  "key34": "3dz5UzsPDZ57hQR2tpSMzSY4DQgYHWJBfpoCJX9D3zBu8AWoqm2wz2cnyTbb5kxt2Zzf9GJL8a7K9G9YowPYXgQr",
  "key35": "4doinfK7qQ5u4GwxTL6CuHSKYSGce6jJYspmTBEkWTsumkZuz8cgLAsSGUUoQ5HWovHu9h5om5kYkSTQKXqwhTZs",
  "key36": "Ecz6ZtTm5DerMy6ZQs2xxxDa1JrgDxXEegB3xQYWnHaEoY6KDKYZTiQcbGG43gWisVJ76YXzD54pXbfuVGd5Vmg",
  "key37": "ssghD2CrMvp4uWEPvHBcydoHhttrQ7WLb84NdgQ9EMJNM7jfEV1HCgSZjEHAVXVK8nSytJcbJvAkgnQJXHNovph",
  "key38": "22N85qQCxE8t6soys8Zs3fFKj8QoUrPRv5MCcRrmRBsnuJQ7KaPYaJpP4VAvmYHWNFV8jy5JykZaaLXLBFRVk6y2",
  "key39": "45CkwQZczbrojuVRTHXYtiJS7iW7crBv2rgGwG1HNWJp1htKXcQLmFjRPxKDenSPyjbfMr4syVCnKs16kd875boS",
  "key40": "29b3kWKg6JAUQjxLWsniqCoyDNjDYmVSKVjqrNTp96oPKZWVu5AdpgBkpzGNbPJZmJS2QuJLDDg4MKP2B18hCVYG",
  "key41": "47AMFSMfWvkNZQgsDqJCXKHLpUDZjpJp3f7RW2FWjLDpQb3dwR61oA1cL5DjxqALvAAvzWx1smkwPh5fQwqpwCTp",
  "key42": "3DkVL2jXxdX64G9zup43PZ5PWPEzxsUoroU8wW8UF55sWbcHWDq94XPwNyp2zUFuFTSFx1Q5w2SVpbGrqSHUgNkd",
  "key43": "5zNrs5X2soQLLyjn9kQNNzQ47BbhpS7qnNihpb4fAuteeST7ZusXZPAkTGk1AQn244VUf5ueakKT2qucEj2s1ffg",
  "key44": "5NmHdrcfd9rHPPpJYQrzMqX6TBsSpMvekcdhCbhBU55XY6tXfaTK2Ssz35joG8QSQwT9RMedQt3ZjBUw8wne8cvT",
  "key45": "vGgom8BXTkFA1i6BP2ht3j8wE3JBsTVXMr3quV7ZwXXSEVuiuaW5eDkCrsLQDVWYgTRsCKiftPVSucgkQRwYEEo",
  "key46": "47hmU7L4Qy3vEuv4nAXAC2XDjPs3gHp18HEvYeuiDCu8EpNWKvzEiR6gQsbJaGNUWihA8ipDejysFkQ3JNPBqKU1",
  "key47": "kucS1TnV6nozWBd7Df39isVEbqbYFQU94FFidnX63mBaxbbu7gfRp4LWx4uDZN51PEMWhw5kUzz9C2KqUU3sJQg"
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
