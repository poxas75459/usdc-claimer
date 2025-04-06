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
    "3JLnGH1aTU3nzCmZ8LjF1ri4LRYS7NCwwcJgi8twteeXYqbhH7PducP9VLvUEY3cE167KSw2wfNP7nu3nS1ooQ7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DwCmy6baPyMGHcfVhWw9BqniDMnXg2B6pSU8qTh8bHFttUFPpKACuMdmcEoKYaXQUF8YPXJeKtqRQ2axihpjvF",
  "key1": "5JUPnAmaAdQY7xk1r4oE1KD3jKFukEGwLGreuxy9Chx4pX54N67cNLUYamhyjGxgydpgcQ74KmYRtC5ctYV4viiT",
  "key2": "3pSDqTNqFadXmK5vwbywUWkDNsvD7mni2LXtXVazZKyS4shftDcb3c1QMo3iLyMXythLynGJxA48MxDYMGHN2BVK",
  "key3": "9FNjgQ9M3w7XFyQGtDFP7WHuaE2evE16VDHB1BQN35GHwHqLRuDhRJr4ecZheNsZEhYMuZwHEj8Nbxe8sbCxv62",
  "key4": "44rG4a5tgQUSshhc8RyUn3BXiaweReW6H64V3USDHqj643XgoLMd9EH786ihNjRL8HEv9iiBErje4mgK1XCU5XLt",
  "key5": "2UcRiT4vEt6enqnh8zFJD1zwM5Nds6Hw1qu51NzkF9NgvkfgZPXLtzeYNbruxs4XHocxqRxK6w9DpvJZRcN8EvEw",
  "key6": "2LvffsVvipnEbyeZq4JLpHrJ25ow9mbdAieZWFX8AusBHRB1X6TtP64x3xYs2WHxZ42zs49JDnDrGG2XZuWCr7uu",
  "key7": "61XQaDpK8C5eDy2eNJnxHzCV3LPnnykZ8RhSReRGzy2mDYX9WHvew7z3YQ4FkdSX8aGXbvrN7y8TnMMqCPhrtkVE",
  "key8": "5nhUTtj3xdQVaEEVw5CT2KAbfk5atht8E3qgjaUxu9tNMGzgg5ab1iveKwVhvJEtwLdMAwAUZAgMxfeaa7KfWKpk",
  "key9": "4YZ2SocLoFLCT5jJqVzfS2gDqfh9whJPTjabTrd8Fof6dBMQWPgagTBGnzWECWmTPYE8P5poHdzJ4a7XqHFmbmih",
  "key10": "VAeiZViEFr17F3KwtW3H8QcX4dndYwVdQVyzeftAu7Gvsjt9NHqHYZqfi5WZfkNbd9bmcYY7vaZ7JNPGFWkVEnr",
  "key11": "3nbR1wJJ8sNAbrHjVWK9o4QzGxnpZN2knW5vufduBsKqTj6C6VhbxovntnvLKQVWX53HuxoPej52oXhqo58FgcsH",
  "key12": "67gqTjHtNWAbjeGDCpcZfsEHmu5VupAz5Fq6Cm6SvDLc6szx8aF8fq6VhNCap9AjhsX9syQEF1HhycyM5m5phvjv",
  "key13": "2GRFPbY6o9jMGdp2ezHjEsZeGyNsvdxTfzUPdcpYDXcZTudPmdpznyAdnDME4JvdumHrJ3D617vv2RgXfx4ffVfd",
  "key14": "2iXu39zt1fhVT8XrsC8VaMS9fnSHXcuWxvNuSnUuoUNhsZHJEek7FSFNMiQNQMJ8GH515vbRfeQWMcQzaQQLei1",
  "key15": "3rsPZiXdrCmzYsXgRvu4PmCVsb6cmbXEokkHpgVEcx4EsM5dTVCJgSadesM1iqTFRYfnJjPFibwfdcsG486ufwke",
  "key16": "4sw2qtqCmZmuGHnZxE9uHmrY45dowE3zMSnRjqTp2ZYivbgXfpYEq8E5HuJcWNnvzCT45KBNHjtb8M9xrDgLvx1p",
  "key17": "tUcY3VuDXpGoCGauuQDPrCaLjxmYCsCZRZToRcRgznwYvkN1Yq6XEAGghsyqespELyAuWwAd17JtbLruNDJW4Fu",
  "key18": "2gwg4HMKFdRFb5tGmncCsH7HTaDJ17sg4ZH7TppbqCjPDv45Crz9J6EqSEx8DgE1SwSEzXcyBMW3zFpaPa8778wW",
  "key19": "mchJLc2wbtr6QizZHBk7DDTiSsuSgTbVbs7jxP41ZcRFu6jHo5iHgHcXcmrnPxnQXG7AgFNb9JWLjcmqFnvr7rL",
  "key20": "3a3X4kB2jW7LmdC2QMk3qtpsxvGWjJNP4D18fx41bEonXSPouHSi6hBhrzzdwts8pBwiQx6LUyedX9k4Jv66MKoA",
  "key21": "4UgueMChaRMnZHgMnMSyDdwWrH2ju2ooWS9QyosBj5dy69nkedpg1qppeqPBSixpf7BNztqXkGrGRpvZM8QJxBME",
  "key22": "4EmWhLvYxgWiUMNjjiPwpGHaeyzVHYqecTVdmaCh3hpuc96vB83TCqcD1hEKras7quFnU2Ab3K6Ja7uWYFQsEKwg",
  "key23": "AEt8dtY9EEoRpxeo3ojAbG2EkXUPpp5d6R66FAThJVDXCsZ3UjhM2iaWHdStAp2H7YxLTwVPwKjWRj5YPZqDjte",
  "key24": "3Z8ZAh7ZKfBt3MsF6ieN2CPwtDAvtWMCybSjwRvtwfcyEm22mCRYgNKCmAstGnA5Mu4JYwJc96vFnbNyGWRDdPVr",
  "key25": "2gdERfzBVoVdtjMnsn6QcXj6bMLXPQ27Csp8ByYXLrEQRCAodqxTshJmmJeKRWPqP89zabK6mGuGSKUWusLmFzYq",
  "key26": "5dutjRYLpXnf8h12Q96KX7rokSVdzipAVQhKRTE71omRTMDUguKcdojJnLAQ8QZemx3j9iNEUk64nn1soSqPgXre",
  "key27": "436jGMFgD7UmQkskocgyvnFEqGWvrnPJ638sFtvtqfzQLDdHSCbvgTvPEWzjpTjNYkVfPqRqSqmUQLvCvbtU6ydx",
  "key28": "4ZxwYXiGodMcjacPodw3bUnYfJBhGwtH1ForMimZk9Bu3d4g4qTLU1bExmvYCg2QDQcaPN4UYs8rFv94338czKsC",
  "key29": "5yeeNv37CwEdQU9nGTczk7VfZrsaRDKWvfaqvfETGv9XPjjn8TyYpgGy8vfNeS4PbVs9Z37MDHrX5ZrfRtgontgF",
  "key30": "2Xb7hoaqAitkMkj5vqci3BScv8piLTBEH63rwMovVgjga6q9d1R7NHg53BNVwAYZKwGEiBqHpu6nNXFYBPxcqJc7",
  "key31": "4niXBpwKrqaioMvLQyJuM67XyswmVbbJ867RP8Ja5yPr9z9vAGxzRm9BgydmDBJodAsoPpogt9LymmYNCKwYD8tb",
  "key32": "ksdyXNzQJGSj2iwbVct2BPkMK7UmBiZj3YNsnLXZqXjL1HWmqwrCNYxptkB95qm18tC3NqiXkW1v38EniE6Cd3w",
  "key33": "f7FspVZmZ44F4Zb5xiXMxjzPbUR39mmjoKgKyBNWuKt6KGiLHNhbAoviAVAGBLq9sMs3fvk4n65pmrJYMvPE8u8",
  "key34": "54QWQwZF9U3uZZFXEGziw2oW5bWn2qWxUXXHe7VKhUwD82nTgBBZFWbh3tfccwpaB7rT2nZf9L5rowKz5gLq2Mpj",
  "key35": "2QntZEqFfheQwgCsR17E4wym9u5VF8sGDY5Zv13E2FfQitqCKhCzVag7E4A29H2geMKTHPidRud6BWCM3Zdm8mEB",
  "key36": "2ZDC7d89rkC1ox3EoK32grPA4uba3t7wQWFALntdLmxxPkWcTurjezinn56mbUXtWA4ewNQmuauUV3L736QSWm5n",
  "key37": "2y1xEt3Qtk2iFhNyybkHWkJG4mNVvNrx639qAd7g1Qn1BCjgfMKzf2bkHJBhCoukNqWrBxxUYZVswUivGzA5AAts",
  "key38": "5oK6yNKJxCnNe2fK2FCXQQkHHxwZwQdUS8b4X5krVYDpSYS8Nz5FjvT5HG6nvC3zTHmzra7JbacigWquPK1cvMCb",
  "key39": "4JoVxVLZLxHD4EgA2BMmGQ3QoRgyh193AcDgnKfiGbs8UrsXmc6r4aMLoKrijrs4N2bvCo5NTS15CL3Lubi74gU6",
  "key40": "Znd6xfrUdUWAY3PPvdwzRyPcE7EgDacprkhhGwsjJ3i2zcYjGSFtme4ZPhurNpV6r6HSahow5g6o9XcZiMVahMa",
  "key41": "PFRxtHttScrj76XfbhZMQp35j5CxKTyihaovuBmC985PMYEo3sJi7t3xmSZouWizwqH5ezpvexoMEVvtKCn4yFM",
  "key42": "cVWKb2tuS6XdFdY7kjjdCueuWJJYhQ6UobUEd43BktV2rxVLB8uMinKu7CDrBfAm32NazANpaNu9ephXkHnmknj",
  "key43": "5Ur6tgAEcRxSPjtfAXryY9RYHWbeMgDvDhC33ftiiv2BU3MFasb7n5fPmamPNhHRPCa8F8eBxcCp8T8BFBRWuupR",
  "key44": "5uNNTgM9DfE61iCcm1EaaK45HHwpHWpf24m5vERRYcwq3NcbWULLV3CW366zXRc7gushjRwhYpvFrzq4vT3TMokq",
  "key45": "eq57BwB9qJFiajTHSKjVgmBqYAVmozK2vBvWtckaAwwvB6whbwKbgFr7koitN9wwZX3TWDp5kq1dcR69UzWgNqr",
  "key46": "3UatHTn9E5RFW122w31n4GNSxgJVz9tqR7Hy4FUFGufk1224X2BmDe4tpQcqCbK9cGEFAAFaTxDtzFA59YbQrExK"
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
