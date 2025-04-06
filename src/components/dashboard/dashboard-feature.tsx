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
    "4BYzAAe9M2fW8x4VdhB94s3kjy7XC7mQowPcMoJdibnuag2Sw6oZGM8k6UtHbn1wpFn3Hcvbj74Wzx9WfujrW2Wd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sKWFhJGUcaZyuuiC7dNzBTYRghZzLCzZfHTSADNdPU8RNVtgUhgWtWbD7W1m71GXFmxn2FkzbeQjmHvi4ZsYjGY",
  "key1": "291JmNXpEcfZHzZChZwMZucU64vpKLQCt2CCEDH8T7P6Ao4pMJaohHrneRaM4CWdoTutrU1WdSKt1pFHNeTSYDeT",
  "key2": "KwkvtJyt1MoNAC51mME4Dj3Z41HAJQW6VhcojixsmHVquH9GAsLQ5y5YSyhsS32unEXT4iqSFoKatGgckNYszjN",
  "key3": "kG4pprnehXD9CyK8EUC6rw2XoHqSFC7j3XbpRK9Xzj5sTvaeDdsU1DDPpLV92bDQh2juU6iqwAJBFv1scs5TeaQ",
  "key4": "4Yyo9yphV9FVSmzwBDvkhoY54vcXAo7pePLSxPo8PtZbwBiWsTvgGgAVdXdRoEvGrCsaQhmsDdU1k4NDtvEWe1op",
  "key5": "2Zci4AftSqQWSqJm7iGNqpTT4QN3XKeRH477XQ5bHa3p9yTF1aBidPujk82W1SmAh4rJpm91BunrCtRsS5DSvadd",
  "key6": "4grKHdUKdP2fyjRc1ck1x4DexemtNFUkXGpvWgDnSk96cRW5QVHxAS3SEMvesKoXfXDzvcwhp4maMFFWHPCDgqZv",
  "key7": "bypfJYJwQ8UCMy5AzZhbJ4upktYhBZWntAqArueMFfBs2uUhU1nvgB7ESurgfzCRpDcDBsXLoREdmFNohZ2YJwD",
  "key8": "2XLzUrfiR1aP4fzpRQmbsMtfm9JPBDegeDPniJFdNUsDTVaEuYNYd89doBH2ErGqJBF9kbEHi8asQ3NHVyHaLeMm",
  "key9": "4yhZrpZMFLw5zABN6qf3orZ5mPsRSXAQerAGR9ANusLuncWargrwbQfLRonvYB1ecjz5QVggiw5Ahr4KtGDV4bRD",
  "key10": "5zZoD5PZgN8BoJwT5x1p3pRfFWjzP5xWTkUjSHyrwp96UcbTRLW3CXs3LM9czVGTQFTdB3aAkicSrZQAx5f8Xm3z",
  "key11": "2ij3Szz4RFBLt1vTEX19nLF3zQfv7NW6GsLhuardeYjrM6GP4UovdKdJW8dZ6m4BkVR8Cde2yEmbQZAxLMwuk5YD",
  "key12": "3Bf65yUm5UPmWrqPnpyfa3fbt1yNS5YsvKqAjA4Tws2zrk7kkD99B1rv5tTVxxDYj7juLmkmJMQp1sdSLzVp5Sso",
  "key13": "W7M2iDiRPYvbYg6CDtGW2m9PH5kEF5ZuMjR2rJabqVb8U9vLHB6PxFZtbAG7hNJ6oV6nnLnqVRC22jtxCNsNEyF",
  "key14": "4JYfjypEb794hfU4SPy2Z6s2mmt6wREg4q6TawJG1TFyxjF4bNSiKi7qNGrtfG6yYnZ2XFrFdkpKm3zErgoh8YSA",
  "key15": "5fuj52uc2d9UMxAsQBV6S6DUYEcDfQS7gdN13GxfurcuxAZZDg39REox4NiTfVFohr9QweWU5BUvUzJvKEnsVn1e",
  "key16": "4yHq66GDvEYGcvqxDAnNJeBrZNJnP9g1ZehsSkASg8LGHCjUWhbVaCtYrkuQW9386trdTHZPsdrLQo5CVWRgfSjX",
  "key17": "3HiKqf87mGWpmVqa9MYzdtrHqGfSFAq1ndtz5NzowYR8L3amhABgk7u5m19ucWY9JHwGq41F2pbEimiTAe5VbqxD",
  "key18": "RRWcaKtnE5ky4TMQHvJEhw6emWMMMnWmDwJ7Mh5ZJVBD2m12j9pgmTqGuMmDAsrpYLBB3JX4QKihX2jPqN4AgK3",
  "key19": "45KSknfpR1wCf2yNNLbdGiLVpgs5nnQu4NsCHUmaX1QkETfest82FaHbWGsh57xYgESJMHHjv4DHoQMgqgoZzyHd",
  "key20": "5HCj1PKmKgZiUSAumwo6yy2tqf7Sa1PQGYdhxZZA6pyPGa9zk6BV74qsdArG6Q8sctx6mPrY11FnmCg1Nz7myFsM",
  "key21": "2687iXAkvvSTnGHAGFSoNW5kYJJy3CD6bms88mLkrWY6JD5PzRgrRDLosNF7i297v1MrromKws1CxDekz8aYsvMV",
  "key22": "2u792gSjhztswsK7Xip5idgkbQtDxArGpsifdmYtcTEhPCLwnidTzaMFcHvgR4E3u6SAhEXw8X57Ke7QyF2tsekg",
  "key23": "rByqoaBLFe4xhaCGxpUbNi82wR8VAtBHf1yEQQuybDDmb3jjh3Bk494QPMkaGHRbwfyV5rczt6cCy3mtZP2ugsx",
  "key24": "5EDV61vgZWp4z7U2hajd8MnjoAGCTv4USi6a8sFHJ2CJghysZrvtpwDEpXtryFPsySgTwUhaLUjiSmVed9batK5B",
  "key25": "3HsmPsYD5AVRtomRReeLAR7FL9FeY86hNWtwbzRoccr2RbS4dgcBeV8FgYEqgegamn2B3C3BkukdBY6oJgUG5hns",
  "key26": "3VGJ9kobRGMBGKFmCBFfr5po7XYVMEBJtXPrHwPxwNY2ZCF8a57fZh2D6CW6UFikSiqgBJPFphBuqx3Zv6ckCcPB"
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
