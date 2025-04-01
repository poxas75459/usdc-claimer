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
    "2mC6Hq6MnpamwQ1daGeghQwQ7ugepwWtRWfsLEz2Xp4gU9De7BNqGFgUbgasmBDbp65PDCeuvmCaSdb6XbmKVrwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DmcbjgsxkNWLkLoPJntuva5228gPUPxuE8yGXf2ZxqWeNV3AgWD51gedAyJytDCAhpSs7UhAb5LfNyBzhPtrFwk",
  "key1": "5XCSnLS57oh9F5NeJYsRRL3M2SpSkgQvL9rnJU5cvmDq3XaxnBhasrgKs31tUSxpopYzkvyHsJ6eDVEX6rkBNohC",
  "key2": "3thNdoaCGnn59XSfYwrkXjkLo2MkFQW4RwBwdrWBcLsFBYmuY7ABeQfBLUdNTvg86TE7tCw3DaawJxoTYDjFQfHD",
  "key3": "4ZnuSi9rQPdouvW7uQSkhmozubJ9ZMS9bmgscD4t73f8SFw1tzK4vNgedhQ9xSvPSq9vkHmRvw3cczyaV1xcqu23",
  "key4": "2ZPt3qT83AiqUYs7iBTXanCGcdb2wAgKSSA5ZcLJFr8GMahMituVFHTozT5cztHNxYhpk6SQwydAfAtZkNqu2TTQ",
  "key5": "3SBrzdXuTPtfUmesPV9uwn8BXFqSevM4F5qQ743z3Ykt9yUVJihG3tVKCTNK9mAJQRBYaPGR8UQ2qiz8LCFutEgK",
  "key6": "nwvsRiKvJgJe7WnwTLf7dYERMDHzf4YEwCVwiCgf8cUz6s3o2W9QWy5FEdCtbN9Ka4bd63qaYj6NuJrUfUDgpEZ",
  "key7": "4hhdqwC9sBGvHCXDyjGLZmh1JR2nmNYu88dXGwKG7tSQPoAgtWnLyUMsiZx9pCHzyckTvD3VJR6xMtLVu1JPPBKd",
  "key8": "5RhKg6zLy5vCr2Yw3uTDjKiwssdp5TkhXriyyvEeCbr4qYJ65feSqsU8TGqPPo6xhkCmvwBr9ghcL2f9A1iDDL3F",
  "key9": "52fNzsa2ckNpsMCJQpUDZQPwNkimmJkBaZJd2zp84TcxEaiGST4c7coP42uvr755d7sVvcWDVq6sdjeKtUXomTJ",
  "key10": "54gNFXPiaZ97Wn1xvdNUB4ZqgE9QmjpNSPhzNFMFJuzydwepFB1bdAE5myqRrcA9m7jNsNwFU2ff19pJcBMy4gLw",
  "key11": "4WqfE1LMWNc8q37jUJ8sbZ1HDj2TY3VMm5JZ6VJfTVjF6TzseRYVCK34hFBzJjGeVxxow9RhceGwLpTodSBPL6CH",
  "key12": "pfEgf3AQrgw3BKnqZiRAxobue17SUt1RPzagfsVfBJCj5FjEEhto9CiJZK2Yug7PAN2zyCeEkKaHYPrHEbsgVBb",
  "key13": "3i86JrtEtj1uFP67hCadVjdg31v5dLRfr3hc34BYJwr5Z7dehoWfhE2PLf2yqhRa5GVFZxDpv3vqhScyMW2DV1Px",
  "key14": "2K5GGRBhZEmBQJWkyhPFBsbNgZXgBfd8rXHp8mEjMWvshiSuH7C9yKoG4psyaXUMAdnfPSEUdU6UHhQXNkrtfK27",
  "key15": "SaMwi5ZNRHL28GBJQUhDpFAh8UnrnVv6pmncSfnPGxBRhBH2tmgGxAoKQ7hatQy6PtcjSHHgYQXHmAFLCejjgQM",
  "key16": "3Kk62q5a48ekXHQJKS9u7RmkRnTtm2DBHVYhR4oc1zv7eg6oJqF1rGZ4McTcscpo6CubBpYgruV2YLhVBLYEQR1R",
  "key17": "fWx87RtSeFR4L9H2eJF72bDHfwGhJimqyQ5TvsxuGjUXfwQBinHvBA8QCZmV3QDN14g5a4djxf2iPFfK6Kvr47Q",
  "key18": "RLxgVctULan5bHRVbwSNQe5j622RZW9gDhtq7nGHH9W9p9PJm1nCph1zsDsrdyZ7DvLQrh5Vwa6mCio69NDJ36r",
  "key19": "4ENjHmddQ5omHG57gbz6vp3gDtSBECZ7YY1mWm8PtqXvhDK491fqVmVGuyrCmv8hZUxxfB5RziZd8wW59KKVJ3aU",
  "key20": "5sh3wBw7wnL9zptDpBPakRuPuw2ffGTDoArZCdFCJwUXpHawLt8HwcsvAMBCNh5gxXUSg4STtyeqyw8ff5VY3aNs",
  "key21": "5BiWcmeMyb1BrqQBZrtHw8kWSV7tGhHM97U6xW6QJ9jq2yyabBdYJMkqiuXouLKLKCeZhsYx1HijXnmRWo8gDpHP",
  "key22": "2mLwFdR2hiSe2ars7GssmYuhqcXXttVfCiFYCdNUswcD1if8p63Fu2rC47G2dy6MKupghCmfdWUMCiPN9j17UeGF",
  "key23": "5qM8wKnudS2tAWV3YFbGLggxo4qYYjdhkzReoKkQuA5gzXW35cJq7vDMJUf8qib7SXmuh9U3ZPNHAFktEakToTLH",
  "key24": "2cypK8z8tmnoESDnPFFGta3mYRyJmdtjN2KSCmFDB6HfzDD28RTeMnP8K8ShqKsuxuRbfTcQiyMGZn2Jt4ffWEvu",
  "key25": "2GyeQ3RVEeLGExc22jEoqPZEm4FxdPDWVtGaoQS83yZ8QNLrzceaWN71aEGrdevvYZXorztuu8W8Jt59ZS1jnbqw",
  "key26": "3HQeWTbYZPfZbjnSsW8ecHJ2S24nmxiupcNXXTj5YDjdzS6fmwpgBgzwHn2vG3DgCEQrF4upYJoWDYwob2jnoYxT",
  "key27": "WZUvB4ty12zeofNciZeN7iHBv8LFgydu3hwZYxJH1SuxUPjiA26JDfTCHLowx2kvv39JtMyGmv3WXWZd5qaSiky",
  "key28": "56sQ1Y2kAQabHhLExodeSz5VcWjzC8pwjHQYg6kyUnEdeMVqju6HRtiKtyefTXRFsof5msrGucPHKCRMwg5XkCEJ",
  "key29": "253WKWZBMrffsgKaEkqDsS2h38EjLeMHDF6NG7tg3RJtQ2ZCtNbR5xn9NhSHpssZrfGMXpQFakZjCWSKohcHjAhU",
  "key30": "YZKJuDcY9bKoQLLtc28Wd7HD93sA2EjVcggiSTrJQtsyHbjhgXxtEHg3GAhKrUWy7miS6ApXNqUtJXpZkYoncv1",
  "key31": "3nTr1aoLfJw1sSKTnc3sA2VLURUrhBT3B5mnK78kKEn5WuLSt9Udnofkst7uSnns1MCbwtYAEJr5NsSYYFxWi1yr",
  "key32": "61u4eZm7aZJJrtDtmmNPn1nySZvkZvWBQDBBNxXUibj6Pb5ksJ7BsvosbPhbiLcGucbKVs3LY6K5XfGj8zRHDfAp",
  "key33": "2wj7KKsVo3tJ9s4NE75Ydfv3MTGA4KbGfM8rnZvsvQG9GtetEemkrbMnWcHN7VLNFEiRoBXYkKfNvCvUav1rqgpb",
  "key34": "4n15ugtsd9nbDjPZ6eH4qKymrLcxX7FaaBPXJZL1nGvZFnmRyxJ3KEh2ADvuCEDtpfWs1X1M9EJJ7uk73mvnWRpN",
  "key35": "zvHDpyFWVomrAYeT3EqsuggGemFQTwdXPFPbd9eiU8jbFr7Vdot7n9fsAoNANVHy7biVRAeqJeQxTABy52b7HhV",
  "key36": "4SLcwsETTQsFc2D1pA5ZDkKfSYx5r2QwbAqcw6ytPSqQGADm1kuK1w3bGn4YyJArTiFuTP3yta45tY59tivXCAAf",
  "key37": "2LP6WPKXiR2taL2hdS3omxHUEVsMuBry8Ea1b3k4hExujJevULMNLS96DLF2FC4geADxGwNvwBjaz7yaHcN8WTZK",
  "key38": "2fTgCANhfRLPg6BUPVPncVWdUFi5u1Vd1qHNv1Zbnoaksqfufz6XTJfurKWZCgPJ1WXwNN9NyT9ywNKd8v75Jd3a",
  "key39": "3uzY8bSYTMYuMeFjq7AbKYVbNoxJn2t726eq6MJQV8NykzB4UqUFMGJHf5hfyyf5ASFmdoHh53uyGhHMyu7AA5ec",
  "key40": "5jYK7LA4tPdE6YUCQZA9a1tEM1gWFEkBzpaR9jrNJLYVsQK7CjN47Vurfczh5R763w8Mi446fYcUnQ7pD7vtT4dn",
  "key41": "3rP3tmqgneWFAQWHiW1zQwHTZr3HpLHS2fSbyC5QMypZbYAZWbFXyuaoBszowWTvhqpTSWE2d9vJXAEqTuJAT6XP"
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
