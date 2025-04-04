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
    "gsm8bBnWAohGSKJahcguxE3WqHgLFMgpHdwKhhjpHPopMowd2simngHupSxLAd8s7ftHMNXDnGCez1suiAGBcAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DyzNixySqzTk5kmB5C5oBZH5j3qDb8A27LBzweaxXcYvRLiGR4QmpMoXt3Nqg7JtE3Jgry3Ly6naNStLYhAEyTp",
  "key1": "PQ3ZjdT8qryoLLXhu1ozZxYQsTVcbWjNxQCrkeftvY8m8qyTqgvagPBras5ik8QKfT1jQceciUX1cjYs7zcLkh8",
  "key2": "2iCzd3duV9Fdbm44K6Vg69AjQ3Lx2XzZBj4QkpAQNHWRnYPhHfK6r1v6cV9rQuTr1aDeUCzBRSFst7DhwRSMAy9S",
  "key3": "2VXq7KiYm2ZRKPb6n3zqCezHQVx15XNBQGjN6xz6SSDSiAmcj5x53KiiRSDmc7GKG7PrWfeD4oWmyhUpepL6xCNi",
  "key4": "4sToM9cj8yTfw8pnowxa96vapqQXuni8XZ6RypFCVduok9N7nL1gkjeuqKRF4ftPWQtEkJ94Q37mVzWBQXRn1vJf",
  "key5": "42xW1GiWjiupNDxyNWSVJPPUqsTB4vk7hPZEazptDsr8gWKPrdKAHJ2Qvhv1RYoQcpJQaXKqRmUFXv6K5R3edFgs",
  "key6": "2sDaf4FoumtZFdMgX8xBQj3RWuYg6dy7QRHXoAKqxxySnfht2rywvgNMFHnsYon7jQniJ41KAcBEnVsYxGGno8Hv",
  "key7": "3vDX2AqiUw8mjGH467d9WSYz2Cj5F46Y5TeEbampg6YkjMJCUFCnHvRU4uoAGJvSK31Vrk3Y2PE98SNQwiZaEetd",
  "key8": "5QSciqdmeY1ifnEQxiAibH6DEcGEtNZwQBi18LrXcYuxkj6A5m3oYTkrgqCUDXY6f5gzMRytBYnxRyHJ5YC99Uxj",
  "key9": "47BQuK43LUerfMGFwpBAUi2TFpNMhR8y31mwrmWEbBknZbsSLE9MFmVi9dxL8bxTXh6KLATvDkog2H1VQVU2RhJN",
  "key10": "3zNxkeDdFhEmntdpDEM6GMqbfGTh3x9AofEqRUudM5UKkYKzFi39NNirQBpj3PTFdTWbQ6u5DXbsKQL81qPMJ5F8",
  "key11": "VMcKn7aGCPLznLhVLpLCJppMnehgMNv716cpZMZZ9iVhqG5bXiwvxfxrcDZ4kcGr6cUqJtBQox4ZSBxJtFmRA7F",
  "key12": "N8F6VvUAcfwiYQ6rPR2ndRK211fUJyc3CgGktPc388H44LtN87HWtocBGC3Duve1ktHG4ReWr81CbZ4k5Mwkupk",
  "key13": "53tmTY1ZruDcYCxBYKgT45yCVhkXHoFaZpLJJtnLT7eMZmqsEN15Ucmacba59YwGCLCaM2ijgBgBv4rzg6Jr6oHy",
  "key14": "45oGSX941QYzbRkKxvUTABSWPca3WfnQHv1PE2Zxy7ngSMgkPoJnQ2ATBXMh3PYaMfhyRiBSPkPXwcZNSXjDguQN",
  "key15": "zmukzxXrpuNcSPQry8DDVbL2gQpF2GkpwyP2yTwYVP3iqRa8PkPThR68xPg8wuZVKPXP3aUZ3ari7Uc9PdfHpgz",
  "key16": "2F25FKhBFoSbyrzYgXP9JA4kiGmQwWgAAxaDT4tyJFFZ72pa83GSWbx8QNcmyJgCupEnejrwHBeLvWg96dN7qrA5",
  "key17": "37NZW8e39nPxvK2ES1MsUt9dkktfc5mYBKcSsL13sScum7r4sVAeDGvz8Qbk7WcnbPd3Eu9uej8gmMJhuFVxf4Du",
  "key18": "42zdJjhyk6M7mt6nE4o79CrqzeqU36WsFpg1nJ176pC5xB4r2skGVFiL94T9Yf83HQ8UCji1CT5hgyxwMqz14jG",
  "key19": "51tskngRook7QJqtrvascDWVXYehJ6artyvt8kM7NvHjFriKM1CkSHFXVgm3io76zW5ETRPbdVsmDyeKDoPJHEtp",
  "key20": "3WfyVVKNgBdtGoP9i1GxJHawv6iVVoAQ4rxhgB3QWBTwGKfcs8zsEtCzp1tvs28REbaXtCfsJCqMVYmnMDhnSaaW",
  "key21": "5RvfhsV9s2NdrQT5FKpB1m4tCoZMmNYoJATmrdseKiJ8Bij6RS1ZX2irrcJ2gPVqUs2h6ViAmPa5EMZhyXg7GrBV",
  "key22": "4RkHZ6y7oBVugNvXApfrybm3yp5j8hbtDQXcdi5FhVtzpqR21CW9pG5w3QdkTNikzmC3WkimfSkaXtyeDZXgYjw4",
  "key23": "5UF24cqFjSSLR1Q1CNpJCiDbrNLWFgoR5EypCKhzikmgUp2n4ccCDn1Ze2ShGrEkGRAAksWjaxwsJ2z7yzshe6Sy",
  "key24": "JrchARJx7svyKty5Z95t2VvCsAkTRaa4yKy76Xgwo9QEYEuhPnUjhhCW3uzoAoRzZG99xXW1rX6e5dMNZ67fejq",
  "key25": "3gFj1JLn6jXKz95WwEnwr8jeuLEkQ5jR8CEbjDAB8zNZWjTqrEtF3mQwvd9r2ZEyww4NcwE5jvcQoCc9pka2ZPqY",
  "key26": "25fCLcHhkL4ZpANyELCSJF5nitcWV5HMs2zpRBsVV4hxsZ3f3SSAssSL5o5Lvt9HR9auCR9oxTQ3VB7ihbZuJoou",
  "key27": "2xdZiTG7YT4NHoj5WsMFdRvm91KTv8GsaqADk9GBD87EdphRpvMG8q3p9aLZz1knBr8DT5vBYaPHVjApeKF181Un",
  "key28": "61xTWBKQE6dn3Nn2XhNaQpGDFGtpbDZGJMRQr7b4omaLRrz8bcSpDVQucE87VurrA3YR5fCmEHhHW8VMXzpnZF8r",
  "key29": "51tetaon69Y21A3UnZxvzQPx11XsGrdcoa9DjG1wHdCxpjn6ScDaDimE5U9wKiL9o6dK6XCudX3WUZ7eK4jfXXip",
  "key30": "3nUdyF5JKigjoHX3hkxP7GJ2hum4KuJ8CVaScwSnp94jtzm6uuxCqwPdoyFaBiKpLgcHNmmbnA21g6HnEYhSwPwU",
  "key31": "3mfFhWYyH8kceUgZZvyQLyiq5mXcSBht5pCgyXPyjBK9myfeBsSgcjTEb1L9ySAgGHqx9coFUTCUogKzpTmrd2hc",
  "key32": "63PzBuAzomk4jsbADV9heGLxosk6oSPTRoDeYnBpGLXkEQXAwuYaVj3Z81S4Gju9oxfXVLZJQhdjkdcawaLyoo33",
  "key33": "3B53c8LVAk8cXRQCe4Loeag4P3PQudQQb8Htj7BYqFwkGwgCnbFv51fLaUfqrAaebBH7oHdwTjZwk6Dvgb7GFUT6",
  "key34": "4D1GXz7kmZdtFrD4tUCbdNeGJy4vVaRWUJH2urTGKvPojYZV6VG8MpwzyyCUYZG4Wj2s9c4C1Fuu1ZYz9fWEQLx6",
  "key35": "2GUo9KHxci1V3hkCQf23NiwCPNNVwMj9gNnfrjpweZ5P3DqnnLoDntpkgN9vdKCbRWRuBQaamPU2zcdL67ZTxJ7A",
  "key36": "38WDAo7PGtdnNMadFUcs3V6BRKGXr7tLtxqZ8SRsRVU9jEt21q3QRtp9egWSJ5MStzaHizpSrYhc2tSMFwUB7rDN",
  "key37": "4juXsFRcoMZ5jp4YwqLm1Kx6pYEE2WHQHQPiHxFXxtdJH1jRrrmBchad6E4gvbKm8tSLQqDuwzLEaR8GJVVwS7tc",
  "key38": "5f3wCyoPicD4cPt8vqHYxfCroaUrLWf9GjL1LXAD3t96fhS9w82RFHVf3fs7idggjx9Bem1k8dUCHZPAHYpDaM5C",
  "key39": "35idYC64GAzmCMsN9ttwtU4N6vMqoNvyRfKb2UZonuEYG7QGQEbsixcNgBqakz7nib9ZMvHQvsx82SgE89U2tcvM",
  "key40": "jc2v18Ck7z5LLFWbZ8nsoH4s8c7kh7f6ks3xaYC7npuxdFpcG6JcwnECTrxaWaSyxbPBjcXep6rTh5Br8ZDnRvh"
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
