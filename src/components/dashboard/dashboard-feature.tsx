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
    "4TrwXzCM6d12sZ4dj2FSa5QPvZHWBFtZnE8AM5pWgatWRCAJzeuzr3mN5AEtKMEaP1y519va5pyuyrK13pG38xeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F3dRx7mr64twHK1kk5MMW7M6NayL5hYZK5b8LBjX7bXV5WtahA2oeLRBsKLTZqUdxXDfFwiputGVNH8PY9Nuwcm",
  "key1": "5wQ2oBc4YMKNKHTaceBbGGmQrbe2kM9QJzHxE4DZZhzEeQDcL1qz6hMVMnUYtfu4voLUGbnHPD2RcMQXhjuM1c4Q",
  "key2": "453oiqXpAmp6yTk96VQ3zfAxkLHdUrQrFPdGvtm26SrgpfEPKQngta6PjavavEgbDe2WMSTm1FQvHVDvhUz2rWnS",
  "key3": "5taHkZueRGhb6oysPmjAanMHzvQSTzqujScDVczyCwAopbZA3Z2b232PDu3UpY3pjPSUZWWuvgJEEUv8yScs8gBR",
  "key4": "5vxjBj8hqtZh4iCqgUp3o9BUX33dSz9KYNdfjRj59DJuou4gM4eFXe65EPCgdSRcfvMrQenTQgS4DoC6JaP5tqbH",
  "key5": "RtZAm7jqFoewfg4SqqMWs1nbh2daZH7ZFTDCWA5wgfZgDaAoCxdGoMhxvzHnmAKy7xQsEFr9CPBfv2pMdz7PyxJ",
  "key6": "5yAxjY6qAa6JxauBFdHTdkkhdaZLY9AyiycGpoqbCP6gC6YeqoMjJ3jLpiGeXzUGVXiFx3VHQm2MfFfCuySk9eXE",
  "key7": "3LQG7n6vub9QWMgxy6fLTXU8YhXbyPU5T5GQDujjQtRoWX5GPrncELfEAH6aH99TaNgb5NBhJxLN68gRpA5p4w5v",
  "key8": "2VRZSsDv5EhQysWevuD8qbYKXnnczo3P9GWxzySbudWkDrqD8RuZPWMpyCQQjRYyeL2DtzY1YFwcyviYSC5iBBgf",
  "key9": "4racRqksCrTHuQFNx8pkhSWx9nyYLRRXHpuneztSSRJwp41uKwPKbCCs7K8Th13sf7zJQ6RtX5DhsXLH7KUtwWjG",
  "key10": "3SUCfdxdGNiSH7CBkFsWF68B6V43XXvwByLgezpBZkCtNGwf6wi7g8RkyBm8xomKaUMmQhxGWm326s3XfAQYJCNr",
  "key11": "3qgWM5ece142Aj6kgqsJPBBjbBxnn8j77fEcwiasPUXzco5UhUXSGbuEmiQipc8YWYCpuw7cbAvSxr1aH3ahpaqJ",
  "key12": "wMcGhjEUNDM2App699ivhZbCr6sNb1xQcVUJTXGxsvWsgLTQicNgU9nUK4N5yCuc4fb1MFspPTsu1UfcmNVSB27",
  "key13": "2cmnsHHBsLqLEpgvhpu5D89aXwHKq8HGKAeuEduspjutBkBk51ZwUE1RL4NTpEue55X3Zz9YPHCVrUMnGuA57UvL",
  "key14": "39cN1YCRuuW1skgxNWrMA9cWZfeEfiARWSzQHc1cUhCL5A2LiWJrxFSRH3x1JzcnPzusDozvumkycwJzQFndXuWt",
  "key15": "2XWLKQjCTqQtTAZqkav831MZQtjBDnq2Wn8VHqzy9PDykcubsfiova5XeyYBcEeJD7mswGxJbRPXUCDW9aiHYVTx",
  "key16": "3jxUq7m4sa1Qk8HabWQpb3qn1iThMYFnBeoGAGF5ayEUwEjyZWsbT9nuTikGmJ4hWCPCFNGPzEz9dLvNgbWBr4PJ",
  "key17": "LqpHtVQTxFcisN8msnhcRuU7WLtDUxpBu64L5ZNHharqh2QKJ4CPvwYzTENoemxYUqDyaRbSeSDQyQggRueLuKb",
  "key18": "5tDdACaZss2sHVUUhqPrTEWjg8xHpAACHL9bfmj1CCTDYyEZe6KzU5N6XrTU7sSHdzqZMqPdTourBZaoXGbfnwLX",
  "key19": "2gTUjrk7hTh5bHrrNZo4d9D4146miL8yEvtZuuSnvfZUuwSBfVSGegjMHhBAQxdvQnWWBvNq1qfE7EKaTEYHnh6o",
  "key20": "212i67XNjvdrdEUB94s4BntnBnyHS94ZcR25DgixAkQuhM3YV68qVaa4wKduzQEBE6D4XiaAHByBptSBhTNdAZhK",
  "key21": "5m5WsAQU74CiqshLSw61iRpWdbRF6MMq5Bb5JEG9dbXPNL2YjCikaTbUmFLA4D92w3h6ajSy9qqa2zvM7thLsB48",
  "key22": "oLFmbBzYgv2afDpKQi44LrzZUCbinXxBvCHWZfK7msxbzHJUarEc2buf3z72zGS9fxboUsiv2vAJy3Bf6v7fWGr",
  "key23": "36xpyCLX1UXxoVjwv7ivgV6Pv5TBaUEjsCKDki4e8H1bT8ZkjF4mHbVzt1LoUkEYhXoLXAMpzbE7op1ZsHpAL8Rv",
  "key24": "5ysXHjPZBD9muNKLvc2GPa67rMJm6GHrwGCPGZzcphKSFaKkkKbchL7DiK9sgMDfbQtkxNQwn7qQ5cXxwJtyPVAN",
  "key25": "3ooC3KyQH2j2h5YTz1aFiwqDv3eNYoHb2A3iokDPyJTdFtTqpo6LnCqzYFsu3uuYKMeZr5xhfTdeCBt2D9JJvtxr",
  "key26": "5mz5qkq3XjKVqn1rAeVs539HXqJTBoBZ3JZEpM3bsjhhJ5pmaBbNR1cKhs5GSWa5c8bdTH6tREr6qwa72YYa9aXi",
  "key27": "3uTZdbbwyvkehX5t1Jr1LWTt4YJjuCxz1U3NrFmdMwQJYWLiLDWJrQJ2VmGy8DpB4ta3367NBT3dgeqTmfT7Rzg4",
  "key28": "5ZA7FAnwtMwRjYVWjbo3wdrNCHyvti54MLHwCxuxNW1kTdyeqEexixSM9cDor3pZWgJWweCB2rmnCF4y9Zzk6N5X",
  "key29": "5PppwA6zQNPQXN7wa8z4XarTCKsNxXWbwCUDU4eZt7hX3tonaPPgj9tQXAT6NocWeS1VoKDVNRttx1dzJiz28Nc6",
  "key30": "4J86XVdSSEtskwYad5YAwtzwU8QjRGbnbEwJMJp61fbRfF3x4S8sjLxTVamZH9mrR1ei8DkpMW1uMomYEXGtEXWz",
  "key31": "2JpvPW9jGX64GsrKX2ZAXBenNyi5pxXXuYoN5LVM77epowUzKmuzdDscFo5MJqLKdqmHco4vSdC4C9RwDgdPGFDV",
  "key32": "49M4n5VwKWceWt33NjRiU6yHBUBd77bF79QrfdBmJTjC2LTJQmsnyui3oHRSbLQQco6w9EoEURbVGj4Q64RSpXMc",
  "key33": "2euwHf1RRbX6re1f7da9LYJqKbzTFAspXbi6GgBuFrSNmrbnGxncpT3APGfAa84jyvHJvdZ1N6etWbYrLVgZi4dV",
  "key34": "4jYb5qS6tZt1XtG3Pv59EYprHQ7roicEuV9q8dsR8resf9szK6s9rP92aJm9JFA2rS9AfYWhFfBab1XjE6dWk1Nw",
  "key35": "3dj2Y3TzSzezgUwCY29ZC1QmjNd9dhUsppw5VjQKxGEnMsog72R5uhGNq927hUd8bKoDZijQAjcn2ZsCVdQXfs6u",
  "key36": "4GsKp5jvkotDhXsCMG6bDTcUNUFGFheRBDGCbjA64Fxx3E4ea9vNL49SLHzJ91vjYdDDdxTVTiQWbaLwro2e4afR",
  "key37": "Wcz3gcrZJCXDku25BuBNf8b3HaxYKN5qF1BSRnQUvaLM26ZNubpJ3n7YMU8jvQzBe8R1FcgLFacNSqDqENboxF2",
  "key38": "3vsTnyMGem9hxLwrf14VvtoVCtES4oCBLvKQAR4pGkMeiU6oPRHqUGDaUJ1xk9LXsodLhP2swGRRVoGvY2qukUZV",
  "key39": "5jsFJ2XdkoAfJoc3hUJ1CDDLeEqAxTt3gGY4pPHj2x7piWqB5YXB2V4xYvXX3BCgXvRJzcEyY4A7vPV7CQ9gHbbA",
  "key40": "ysVeCL8VUU1ycEAJ8d9bNCC9j9y4FV3vGkSTJcCkXTNbdaQdWbohCtczKRYh5V4BGxqozq8ntg7h8HXnTFFW3X3",
  "key41": "4Lkvb394QyWVgAudpndgMLLxSc6aHCcCVNdxt2qAsVFhL1eho2jKFpxmHmcaWTvapjF4SXpT5wtN2RekJypyfnjj",
  "key42": "5omhQn2Je4kbLSjozmZwBe9BbpHqhNmhJHmaPiwzq76uUJoouMzqpPzY5wAQTNcCcU7YmoMiEaV9JtBtEdVdx6Gp",
  "key43": "3xLMdRoJF6HuwxZf7M7jf5gLRovSiUxxMPuSdtccANhHvdGzm5LwLsfXBDeHfhxSC7rPEpAwtT7KGMFwfNsxxctz",
  "key44": "2hX7Zq5gbYsRmeujH9VUC5PPQ9p8BfDLT5SHAqN2sZByaaSXPy6hkFpzZbqnoEtx39BFzgS6WtGQiEvp2cc6qFB8",
  "key45": "5g6kjBC8mgH2u8oAJMBRfJNugHnpq3UW9P2LGiTXdPQ5rFzHsVn7P7a2iFwmn7tDv16JmM4Cg7JdoTp8b6x7a7H9"
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
