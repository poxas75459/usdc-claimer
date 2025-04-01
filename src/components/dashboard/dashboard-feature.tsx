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
    "2SKRLX1AZBonpiVMvxMXNDwbxaS86tT8knUeZePpGajRFTjArc99upNrSNGN9D1sZaf5HQtezDVrssMKJAYaZ95d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RFrNh8MCQUxgpjrXnuD7xnhLP9PYu3LC9B9vaSZbu9dAwZM51hM855vnGgJxVZzrzhNDvZKBgqUhujFP4DQJhQp",
  "key1": "2NZDduyDUEYvzizDhhXZDgd3W7PUqHNvWnM36Uu9b3QuLoC7idmvEMFvF7y13CTYaRnMJVaLZ8Wc7PfAStq3NNdh",
  "key2": "5e4WPDRvJvE6TRyX9DbNFmkn8K5tmJxhTJ9wU6uCBCCVaUEZyWcLdtobUfigW9CdEaRPCWhQMYBj7ZPnmNojoqbG",
  "key3": "4zetnXAXL5uK1YejtyBNE3kXQ3Ur3Rt9gBdaLoE5mRdyGa3BTVbdqLM8KyGFteAiQF2feMai1kEh8S2EZfCkjAKq",
  "key4": "2xasCDppNXoNrbXLHZG7XJ3BUHJNEVVxLFDy34JsJc2FNF5JJaZnHKGpv337YGjBmyf2GhbCvpNLi5WfDYZ4KqKg",
  "key5": "3EV5uaS21vTBMQhTuhGFNQXTynMjBZ8fEzRqg25QxheaSdzBTbc7xUhoGfVG8q31M6g7XYwyNLn4byiMn2iZntxS",
  "key6": "4ipAc6fq5s5RTdujksQ9utshYw38ymkeJzzwPZyCg3Dc4cJ5y56j9P2jTbQxS91hXLNFZzAoHVJQDozdAUkkJhDH",
  "key7": "Sxn15cJLe4mi4dAQXvRuDpDFHVoX7oJgUqHqPhqNwMFzLRpx9V6spNrfUmVmAyDREU1U9mausuxBgouSgQQ3U8F",
  "key8": "5HT6yYej1WFhkhgVfNFViTqDEtne73TGZ1R75QVQbn6Ntqrsan7RKGXrrTqJLgyiaT61LvSGR7Ax15xFv86YBqLj",
  "key9": "2DrWpUy8Ry2yV5TNBScW39ve5SU7khGmHbAJSNEabiYcPZAXpA41KUPmudjiWHd4FtheEVrAHpsSEYSDS596pVZA",
  "key10": "Ks1mbPDZDtcYiceEawP9HRg4KdhHiEwFP5AB1EDeoSyhxivDkbUxz9SmZ26yXMyd6BUHwJRKLERyUoiKMuBxjN6",
  "key11": "5MSa2CXNmVApno6riQTy5wHDxoLMpcT5SXMdexQ43aUQRoLxLG6qwJzpyUmJ4J4bCXMVdyW7nwvotBVRsZNnSJne",
  "key12": "4B1uk1czDcL2sFimkxceKHet464NuxcEwo9B3ZJ628yiwVq2Gwia7JQVKpeMa3QjpWwCtvNWXmiR4tE5hXozLz9S",
  "key13": "4zSJkYVq5YeZqaUXcdYT7qu1xgaFQQXG4cEozpiocBj5XLFaNL82zev1L7KEGhRAHcjs7NcEiVjU3pHgi5yfNBDV",
  "key14": "34x9WCTvriXdPcH9LRifghS7fWENfLG6XnCMf2HyvmnT3Wnoko91ah5jJEsi9ThBKcMJ9UwbHY1khGyFsu5UxAyi",
  "key15": "iLSmdg3FyUyPXNrdzDXpwVTy363V3jg51KdkDuX2uKwVjxDP6oX6TpNTVByxZCDMdaAmtqLSdHzXhcTKJkNpKnp",
  "key16": "3dsFET1tRTN9oJuFFcfGMBJMNFpZGu3k5NVyYjVkzmz3WvP3Ktcuc4bXCPbx9omXWQ66groHa4AKofXkQGJ4F1HT",
  "key17": "3aHZfGsM2uHSjHBmdkMHRpn35UADA7VruB176t9SU6G2KArDx3jK6tcmDm7Hyx4CrLYiBVcEgmKTDmA7ELW3NYfm",
  "key18": "3mAABBdw4o2tDrTAqYCATac3ZcztJA7AAsKfsXHcZ3Zsqi5L32cRUb7SZqyn6NX8pBRKC9oTgm4eZeQ3bTV8VwPn",
  "key19": "4i5i6T8sc6TC6mRT6WyVh6SvubjLutnpDGEyYeR4Aj2d52pMaxPiD4W7tR4hwPFsYU6j82gbFtbnmEAuxNPm9frb",
  "key20": "5dDyfotveq6s7eZTyu9zqA5nFE8KFnXvTWz81ijdDYnJBChv5e7mjASLKiY7yqdg2R1qrPW9qYMyE9hwDgenNAxD",
  "key21": "5SrvcEsd1wf1LvdiAb8uGyJQ7Kd9XEikfBVEahtdvSf6d4f3JZhvWYNghUWrrhNLeAWcsJycWHZns7BAieXFskXQ",
  "key22": "5kvwcNkv7HrT4XXe8rLNQzpvCcvCrefELy4ehNXxqyxK6jmsySQkRXXm1JM1wcdsFrCaoBnxVBhnzRiVv9xZFhv5",
  "key23": "41Lg2yRPdpmVc4R8SoFF71YXuajZox92cLT8aJk3PCTxHTc6prQ2CBwXRRgbnvtAyAXNJUmJorS1KUS68wdYE6Py",
  "key24": "38APGTbvAq1yeEczycgTT693ZLzWZ2moeakMgR445n2BoyTrJ9KyjomaayH2GJMyqE8sw6CFQ94cCNkc4FSSyGtv",
  "key25": "2rAHVDKJq8vHy8grAGj9So9tS8U9o2XFkWXhnRKYFbAy3iaWUkwk3CDcvZaYwZDQ1T3RGDy85jyP6vrhfpuEZEqM",
  "key26": "5sbTfLv38ScNh4EAebcAU1KgVGQvKkw3MCnWUdtm7dtY4QWiG5zoLMu9bytqjGM98bPDgWaJhfkwpAzEpRKXeuhr",
  "key27": "4D54jYAKj2gGMuHir8o7QL25C2AMuRVh4zAPFAWn3LdSF8u82pZiFZwQz5pdB1SiSgpeNdb6aBHirQi5SkFHkAWH",
  "key28": "51vE33UXa8Zgwd2pEQE9uFCvnkoayq5K8CRBKs1cihhecLwUiYxeSUfzi7FtiWvt8HEb9M6TtYKyUHtAvahHzmMo",
  "key29": "REzBkExZQnkMYRwtC4vzvZDEXkfKu1QVLEFN79tEygQRhvxjbGszdH1Y6eqQpm1BsbUvE8TaUSwQZrKtaG4pxaq",
  "key30": "4tnFzcmeMLY2f9j28fJpQhjvhLDRPoc1RXTYJswz3u17wwmnZw3N1q49pnAAK7TTwEn55yEsgEmzMBCP5pKP2ncM",
  "key31": "3Pht7ZLd86jJDJyncvtW9cGzLDcxVifiEEU2LXrKcDedxpoZq6adDFFjxptxEe9nG2WgQxihnp1gsLQ1kARnfXNp",
  "key32": "4Bv38ApEBBnR12sByfbzBA3tg3hCP5FesogAeGgCZkaGEUpFcL4JkKBbMUQcC2m49v5WeZXLdJxBCx8VnF2YbUJQ",
  "key33": "4nHq7p61uqthANVHCzpYn24zmmENZ379bcVLE25bTuAtth5opagQQFsWfSxsSTVyUYT3fvJg62WVbsx4sZ6nQzdg",
  "key34": "2CPQ2NwADamUo3M2ios6CHPxgrANi2cz7hnjZamjzJKBYAEhAZqAPaf1m7divtXFo5ubYVscqsTUtVmm5CHvdwBE",
  "key35": "3wS7FkUe8VQQDU187y4ZhH39Do8jBMPZgaUGCoRYgoVSTbpDcL5B1aVkJNq22uYTeuNe6ApsdVD413L8Q4L9vjRM",
  "key36": "5G7nbiuVXm1YbsQvvrkzNhYKYSY1MfzkdaxMZfFBLodZe5Q3uE3wLGr54RU3wggvj5GHDwH3tgteViC69aHvYfbR",
  "key37": "2tZoVB9bGgCtCY7ErMzqiaGTZ4FvwkBiW3KyL1Bmoqh7y4g534LWNce9MMxJZDDkt71tz2EaTqQWZi2u5rD3G87U",
  "key38": "5tnhQDKNw6ugQ73i8p6UG1jnymwHAN8h5fjVyNe49ATAp4Ys1xCzX9vkbTcAGSZSbyD5efWMwwM7ou7qnkCzMrpG",
  "key39": "b31YSWTfgGwBwVsdZRcKydKd2sFVbw41K6u3jiUdfnM6qoRTAeNLDtjvz4jMKjioSoMDu5g7NszBUSMWhKS8Jvv",
  "key40": "2EyYbRjAFaPXRRpMBuUNd8Q5WfGNUc3LAyuS74zbUEj3wufLw5Va74nk4qwvrecZNk4tA2eMKuijNzHrHXayVy7X",
  "key41": "3bpkJ8WRPoosvPs7AE3qVT7cFHW6FDYA5TuRMXBEkzKYFaenRZSpfw1TMXjhUqi1wVy1hNJh9GeqZ4CPXVAm2GCu"
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
