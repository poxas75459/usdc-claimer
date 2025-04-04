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
    "51SiYebCuLa97JJTM8QixmMeHfKk2Nq55cEohGFsdoUEiPDUc2u8ZVkDttGgcSwHq4Wi97ur4iPLupHmYpJSgSU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jvZ7PeBM9emMVYGkucGtrJ39QsfDzjHbqVmXpzuCmw2qDM9NGvsGqic57woecRJHAiXgWibV6Cx7ZaqJWKceeZu",
  "key1": "5oc9T9G3AgvPQDvDzpgAB8W46uZcHmg78BjPEe9zjxW1XDrwbawUb3Ka9gxUQFkFjuko7Zqz6VGXS5JaHCkiSLWj",
  "key2": "4aVjcmV8oMH2WJPfr7eFRZKdkRAbFohazk2iFcCeu6SYLaaVN3dyeLDvSob78jvAi9joVHeHoTLRSzwwV1gYHjGy",
  "key3": "5o6YySXbFkquZ4GzSaaMmkS8Xi8CnsGXEr5LaHziPVrhCyehJWah4ezz3T6W28ij8xE76mJVkieeLhSdFdLp673H",
  "key4": "2PW7wrbhoDVoHN5pg71G5BLBnwtG3dkAA8T9dJFCiEpQG7abnx3jYm7FksT4M5p1PwAbNqdskWTvZYrozTcqgMoF",
  "key5": "4hK53y35qiFXHCEv4EXJk4vWb7E71qpTu2HXEQDKpMST3x1U7KiVQKGqkpA9SZnxDeB5t9XoRZqDstwckmxR3Dkj",
  "key6": "3fHY5G94uU4KcFfj7ZM573emYBMRR4vbNAuBop6s2xmVBx5AwBLmnStmfmNHd4rkxcmqLeRCUojW9U5SYHyNHnN6",
  "key7": "597FpSdyaXDC1hRmPFJ7KJRNLStnF2XbjWprCKRWJdEKvACR9qXiTshcnp9MjXHFE2RvUQ26Engxu6t9monvhf6e",
  "key8": "2e2cwogHtkuFfyocnAMLxdqQekgRygWJgWhVsyS69YwgiALSKRTamowpM8EYUfMiYKvVBex4SGQRcRJYoDrYxJYF",
  "key9": "23vubghfdBtYkqSwY6PRkwxrD9UoJ1Twhfu391c2QKfdvFhBH7NEWD9dj2tweKo3EiTB4mLAw87TVhbQCAgwJmSU",
  "key10": "4GnuruXVg22dChwr9jA89BPRWm6Tt5mKp9fnRvtZqD4jGVFyNSuDJ4zkotV9Tzpog4ypxUTjACbPR4mo3NvQaHUZ",
  "key11": "5EgNAJuurQbeVLy2sag7P5RNEMspLHt4KRvPyYyQkvEKw2NjtFJV4iYmGHFbv1poRZJkrQxZexfQPyZWijPTw7Me",
  "key12": "5djbz669p3ZGvnoasmvFFTQr3YQKCapG73yJQAhiVQbpeoX69gX4JzLLw4RKqMubUSvSmnhXs6vfdTYgitqkdzJt",
  "key13": "5jbuCQFzmi8ovPyMTdH9GQQh57QQL2D83q7reZru7cRsXELXdY1zNf9f5MYmSgCKEr9tFbrEZYbr7HFy2VAg4ob8",
  "key14": "5uKeL2XHQfEkYVWh96brpUEBP63URGv4RmymKorU3pbu9w4KcnW9Uwpn6C9FLxru9kYVRAKhdMzH1eJnoKEt86hH",
  "key15": "47v1w2dtNCLKYhXPrPJ7dYHgiXbUZg1p2HiX7Gx56utvAvARW4rjHihsnP3CxiFz8cd4vAQ4vwUiSsWcqvcgVkYg",
  "key16": "33MQuunk1pug9NF5UCEHeGUbZjSuu5YQ8EkpYFmzEF8cqo14FCrwCSkaSJxmv1bxjKFJq4HMCnNe6TydpYr41egB",
  "key17": "3S5FokdhEANf7WdrXJKD5QsHNaQSGnz9MN7koBqmpizNqcbekn2m8saWi2kVZrBVM6eWSBkgJ2MsBBJSg5HfYTnY",
  "key18": "2eHSAURDmTXDp31EuE7e9XyMiywEggbLWJeyWmGsgRhAC2x169xDmBiPyk9sex3QLnZPdJnJioEPiSFsdrqPDbPQ",
  "key19": "3k7cainsfigHUia2zrnUCVeBm7SVwiQuUJvP8zrUcFD9MBUKEmnhCfDkmh2sbFySNruSvpnfoq4cWoiUmNa4Yn6Q",
  "key20": "5mVQP7HdbmcSdGw2Yd3akjBCj7Vymtyh4P8PrDHwogErGvwcDp9A2bSUwhYoEmF7GxoYerRzauFKc4TjoU8VceLP",
  "key21": "Vup8JR9ryNabTWoqx2S13JdabkDkH34RSzCMCpkfPTvYBsQ9SZYWtxQweWxDNneUnJPF4gQGwhjznZ66HGpNoNQ",
  "key22": "3VmwFpRrov72akrBfatW7j7Rm8nRApMdYuS7Fp841tMLvnXrjK1HNwc2fQykUffaTPKiQLqcVfjKUwPHJU245r3h",
  "key23": "31mdb4AQCBoCvZ1CFFzfzimfcb6hYLGiyxYqYtXKVhTkKXz2h7Rp9AGHs5sYibRPhSqgjEU5YyQXGxW6xBaJS9mo",
  "key24": "3FYShmksNuJcJTczqY34YRDxt4Yo5wn2VUMSBe9F9t3xx2KDXqssSRY15g9h5KYJLRC7SvkXDQFdmUGi5BzCd45D",
  "key25": "4aDug9PSEWn6MkPWUhgZesYSu69AveYwbQqzRqMVYBVYwzyWD4KeS6Py2r3PV98WwyhtWcNwSVAa4vedSbtqrQpK",
  "key26": "4krSjRa2ujsQD5pbCq1xrDtHc2a1ZLF2ZuAB656vAq9ckvm8gtMPAn3saeSThyo8mNYCrRpnq2woySsKDA1jAhba",
  "key27": "4gJSgCRR92Jw2XYJG2x9At2J8otMSKu7FWqGrEWQEac6sjNNHMnkDegiiGcDx5VpFh8HRA4AQ6pQJcePZGK352DV",
  "key28": "462CKZMWBJjxsGXCErbMgpswASgzGdkjCqDgNRpChd11PRHuDUgqsq5XcH6GFXGmS1E9ZnMm9RrxJdQhkTExRekS",
  "key29": "ZToSFHHvhFqxWS6MyvdVFuMHpy4uUTj2duamhQtwtHbPL2MaDFLcLdwz9jM773Bmq72A8UJR3jbgUX5W81x9yUU",
  "key30": "4CCJ51WPmiKnRgAdsTmzqf8xGTXkB433g8oLLt1Wm5EV8BXMSx8gDty7HgnUKkZsynSCnGr2nozrB7XciELhqf6G",
  "key31": "2fjQ399RxUFwjFH68AMLryReRACCobufZM62Eu5915yggQiPfgtPJYcGpQqAVHcPnPAjRozPaHNVupLE4XBUarfx",
  "key32": "7zPCT2xXXMLSnBSmSQKkDPFJJt9vpugR4ZU35pxmtECKekstaN6ZBLhULQVDXE6tnroBqLq5XGToZVamUTUBfJZ",
  "key33": "4bA1yQWj2NUCk85nVK2ZJT9GxoJUi2Ximvq5ZoFhkiCSP1EPuMapyVUMUixmmmR6LG9CHpEyWUHmyLwUpTYiEkGW",
  "key34": "2vemsMjFhuot2ajmtLbdZFqQhDUNSEfxDVF37z5Xy5XHv7uFwEoS5YyviheTctQ3jP8q4N6YhzRT6dUUVrZHpfYW",
  "key35": "5N8Rtfkv6UtBy4VkEF8AYfSCbqzFdPtW97z9MG2E9EzHqFvTVyYgLnwxpn1d1MHtNvLreApuQPRXpErQzf9ooVWM",
  "key36": "YL5Mg4DohXTE3KzUXZtyYX8YivVM4ir1ZswzD8uDWs38dXcmv3Udpejaii9FRroeaSqWTBCRTzvPuPKBZXgLtjX",
  "key37": "2XNE7aug9iJisu58WnNnckCCsxvLh4bomYtSvyNkDiSynV7NUe7rduD9SqoyUrn9R7iop6yqikipHp33iJsS1CMg",
  "key38": "5AwNHXgm6DacrZTUTftP8KyEJJtsarMoobPr5R61Q5VKWgm52fqSGNPoxqSnzP4wB2QGnFYMdSozqHhKCf1rxtkq",
  "key39": "23iGSg2hKNybHZ9QXiBPjaXXt3ns7x8nZx88ohbGNcMy9eTVBVcUznkVZzsjYs8GVSBr6RLJZwUnoBrzejSnjB78",
  "key40": "3QkHBe5wwuZNMvLe76255ppQyUswKUGtZgrnQnnidUA1UAp4jLtHkaEz46855fxhZz5yo8JWEKcD8diK9XMJkngK",
  "key41": "5kFyeQss4j94wnoHZu67uAbZNQtp6fzsYc5FpxQeUtee4RmHjzpiYfYyyzPTxkw8tKTiSyyhBMn51KPL2xZLogZy",
  "key42": "2z4z2ovzVMg3tZR9Agg1FZUEYoByqauT1zKKBjBj76tUS8JbVRyky2PdxrJVUt9XdWym7AbERY9uSusL9ndKjL8R",
  "key43": "4cvRq4QGmqZBEeSaAT2zxfG7tzaBmocwq3zZW1VhU9onn8kzPhyM6nhRFZ4jYQxEmadGvk5ubzihrrbLhPSeKjDi",
  "key44": "WuqjJz8SadhL77NEGbzNtpm6k3DzEWoSo9HkqoDoVmiRzRccPEJfxYNBEsEiHKkF97uEoxcxNG8o4VMeLscDuKN",
  "key45": "51otbWLnLQKc5auCgwABE5cLqhRYp88Gcihf9vKK8KFDsbaXfoAyUd2SyWeve6HzKEoec7KoTLmPMz8KGxPHdjVf",
  "key46": "4Xdh9E6RZg7npu8TW6ZwCt5VxxVHgh9cshgEMPksyaYNYxyj7K1PMCiQyswesnqQ6AtF5snNLHRZ5gKmLmStKfk7",
  "key47": "5h4vpXQYycJWwD2CuEPHTmfJfkqJh8cgJBbafqpqHdVWdPdBovgbrVjjJoK1ffVmEANxUvc6je9gRVfLBsTaHdtd"
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
