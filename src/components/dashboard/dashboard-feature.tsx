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
    "fvn5kDxn1mJBS2fyRKtbPYQ5HM8gCJXfWHGc36Y5ZRH9FwnminGUYbnGLdRmAqpkjypZuWRkFWnrYK3MegbzDpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wtyX6qPiBjy93vqPs1nre8hn4gXhmpAQXSDR35ZW6GVAsYZFrKXaGWCAXjn7Qg31SoWtqDa9FcNGSMjc8uiMQVH",
  "key1": "5DDWYXnCCutfWAL8K4MbEeZJp8V7jQj5ZBM3Xo43Wm8R4xEgyoG3ktkW1JoGtGQ6VRDfdVGADSHyaNKCFGcFbe8c",
  "key2": "4WGMQsB3jJcAYvFfm1dHr7KvYTRAtkNwLTVsxYUseTLDNFCcWJU15CwqtMJ2dvuZXqmrciNuhEqH5byExpuU7XoX",
  "key3": "777u7mM7yuHjFEXh1k86geAa9dQPE43Q8AdxHrUxZxRWceaRyqwCSYax8YVcpPZxgFykgTUka7PmPxtrFvAVF8Y",
  "key4": "2qBPTMjyt6bXSYV5ZZRegaeRkcwsaonX632FzYkuJgAZB4RtzxV9ASoTKb5mmgj6ykJwaRYUZi5gMbnuwtTY2Qiv",
  "key5": "5AfSuJk9bXVo9AuRxqn3jyqvakrUpr8Hniv8nCoeNEmsGzHpt6rcbHdMRgq4LyHsqfbrNecbGTLA5VyZkmRQ1eK2",
  "key6": "3LarQtiRRTRq5Hmq1dKgax4npNt6LLxSqmPPyA8pEGnXs2Nt7SzC9aBDnp8DRQqWH5sMuNi7HiyoqJXUFoEUgsuq",
  "key7": "4oCrmGTaihCdqG3ABVBpUmkvZGWGiPuiZQkRZhhkWi53s3BC9Jx837JBRKPG1i3pNL3nVzJBsFXuiiipYmNortCv",
  "key8": "2NPyxTXQ9tTEi6K65HMn68T9AqbQ5778Dod9WcUg7bWHPfNEaK2dU1FofYfRo6DHuNbkzaD145QGJjxJiUMk2h9K",
  "key9": "qwqTRRxBxdzr3QWTayNW7ASGRsQCPt7CszcJ4kZWdVYs9vgv9iRWZHeEvsKRG9yu7ChSSxSwR4wXSJwCj5oikA7",
  "key10": "o5FjPvskn1nvFF2sVAL5VYN9xNYhxexeETBg7gNduSPgvvYBY1hZmJ3BNBR2op5AQhNuFhEnbX3wj2hYVaE9XQo",
  "key11": "WCiinMAhbs5hLBw6ZReRzott4oViqWSySnG7P41k3tPC7HAyW9TLPvVogD8vx97JBDcb8xwaznRDtT9jayvXspf",
  "key12": "4HuUDsUWZGNajy8kgEmoBLC6X9jGsCLQoXcAzpRkK8zvnxERzNHhawboZSvgkJ5xRLgsJkKfKcbTq6jTzTa8qUzz",
  "key13": "6DnaFymUAHWJnzutQTiWRXS1xXPw4xWCaUg2S1jRPvYxGFTA1vbRrU8nZEiqZeRGyQiQoRX1idxsrkhBynwsKjd",
  "key14": "59wLxmcso6EwfyT66QKqV1e4x2u8p27EcmgxvLxPydCSuo7TZDKk3aV79Xmjj3g5yXP9uDHp6Q3wdTNqhm4fM7bE",
  "key15": "eN6o9Ed6N3PDXg9DV7i4nENVUwoAybWEwDUxq4yvgd8aZWvnGuXQ2NhmJb883TCVyPuWe5aibU2pY7wmfS6i84j",
  "key16": "FcmqJejrfHjjWznvXgQv7CbLtGGBECrmXXvLBxY5U6mg5G8xiApQQneqBGBjAwGxNGFify7XMVTv8m7gXgbUWXd",
  "key17": "4tyyePm2jM8ezoxva53rRWSenqEo2TXRhRLC79fZjp5RtR1ykM2Njhu2fXZYGCUNTHExe6z41wKZKUWAnzDSJsFc",
  "key18": "2LmppELfSC2zZm8oMQJjFbMB2x11r7ejbmtZ4NsSmZWVJYVyEwKk6z1S6tPVLbxpVBoUt626PWhqYaCXLEHsxqko",
  "key19": "2ExHQ2uLNLVmktfLwS1yoWFbaFt8585HJTsXtZxbxjSsYXpR7DvCado8jnd4m1T6ej79aqxBg4putnjRqsZGtrEu",
  "key20": "5jF6zqCZjwzYEzCDucHGLSLSjzCa6dDubpacAGY8D2396s6vZb6AeRQpJvFegJv1PkmTzXCjKb9yXBJYXDta4QgY",
  "key21": "4bfmqrGCh1MyKk3JBVpFaec9tLq19sJKuvkdRbQaRf5xuqPckuBWFcvaW6EBgTWTb3DSbZQdV6doabVfvioigxVK",
  "key22": "4HBvpVN44T9XTC4b1pdu3TvQS34PGAbKJ85UTnPQQrDLTBxHxRQh86ovoxbe3s7eCykg1e8rabwqKUB7oe4i2vV4",
  "key23": "gSYWwwPE4JiqRt8kBcoCkGkv2EHgrMZQGyYAyMB4GzHjsy1Knrt4w3u8wEwwn8i5HiR9ouKknpXLU3w6PC2Fe35",
  "key24": "5gaQKuu4xjv4FkHfBNw8zjhYwtVGTj9MYkL5cy6t3BmmzHRwZcTZPU9mMEjtxsZvr92WGFNMm27KT3Xy7yrVcQxL",
  "key25": "4w26qtEScRBEaXERoXBX8mD2a3wbP9g9vmEuyduEcSKw19v2G79wW5dfMihh4nycjYyB3PEqskVwnp2giPNeqkPR",
  "key26": "4xHqvvBQgSr6GbUcW5rsSnudLMm7hKEthGbtRv7JbdoWPScBVw64mpidhHpjTEVEVkhUqvNWj21QnpWDAjMfXQbp",
  "key27": "2oU2YrMCeHqRm1tADzsqeKpaoxS8B6sb5w3cbW5Nuch4Cwyy17MxSnrKdSojMjj5Ja6mYHK1K7RZ6rDiM8DNXZJA",
  "key28": "npA7VkteuQn8SMjFpmxFs8EFirAJC1A5c991MZ2pSCeVpDLVhbrSF46PyAWb7wVb5cJuLg61JaATtjakz7MvMee",
  "key29": "4J21TyjrmXysRiQYRz3XLnTNMyeoejA7SHiL9Pq3Ghm2fwHW7GgHqWjF43K2D4pMbqTot8skFPwSPd47Yn8ySGfU",
  "key30": "612B1QPHikUyvMjVCoEG9WedsJwf6NwxfSXffLwckayvTDMTSZmhqErgAqcmTb3iE9moSzVQbfXDLRk8J4dJCrpg",
  "key31": "52DSNvatT8T3GqCUABDcV2WeuU2NffDryZXuBiRwenPQTFGPuvHgbGdovQCv4s2Jh2JMzSCv4BGMNyUSkmcUc2yh",
  "key32": "2JNcUALaxDDgr7sdPB6FQNeoTg3tTnRgSUEF41NpcrVoHyhbrnwqozrdEMYXpnhBFgaSuKB5RTYzLMfo4xfCeD11",
  "key33": "3a65FHzR3gt6Urst2EMdQV4u6QuzDSQcswPTJ56jheBgt68aGUD2mTmzmZvbov8idUA6EJHXHA1ja19fR6h5WDAK",
  "key34": "3TAvuUAmuAWMYLKJ22YrA6ZiRyKLFDvwGLbmA28jjDChQegCBkDVn4cbnCeHGLhUumTdMdFwjs5f2ExsVCJ8h7Uh",
  "key35": "2kgdV3geQ8KTRy2GPqKsuV4aHy6NJmFE7CfogHrzhKzecq4Tja81XDA1kRJYjTVfEsLoRupbXohsd4otGaH2jazv"
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
