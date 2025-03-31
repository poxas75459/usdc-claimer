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
    "5NB2Awz8GVioabUdp51jYX6XyYyYUSiCKJMRkQ8swr9nupS6vqZy2HqjdG5k1i4hbrcxqsw32S1x8aucXTRBBeRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MC3M4Z2Z1ZsEdUVrQuc7dooMsc6APoJNEibnDk6PFF1pBMajzzjBuyEH22EcbT3gzQKr1bXCkccP1aSatZktSmq",
  "key1": "643yE4VvhVuDABQs6gRqyrK31vvq8u4HFDxAmMy9Qrm8kzs7Mm2HqETnT5ghicmBBGQDRvu2UZ3VLZJBUiSjvaF6",
  "key2": "4yGVK251zQZ5DY3ZutcaWQuaNdNwwW6175ArptoNFjpJmPUH3y4RFh3wyjZxJ6mCHYv12AuBhcSf41gS1cnjou5Q",
  "key3": "5dTuZnCJq7GqmZQPE4bcTxGn4EoXNwXn3EM6gN5XE7zgL4WFsb88eyf2mFPuJhMtsRJA1tMYFCkYrvkUbrtA7hT9",
  "key4": "2mvb1XwxH8pgC6jtg5EhfG62qmn4HhXPFwe91myLsZkDRGFvHJmyJcUjta5898JxFuePySyDhRLHnizseoqeZkd1",
  "key5": "2L5teWFsUMu1hms2c3DTHXJEQnUwKuJMvwnTWaDTKZtR1K1dVu2Yj4C2hyGZgjwY9iDdprXxu1pQfS5R1CKKEGpD",
  "key6": "4ZEFhGu67V5kCKyHj2nSxH2p8NBe8ZzHZPDbgqwLjLFwULhbtYU3Ls54CxH4Yux8j3NBXxSn5d33BThsiLrCHafQ",
  "key7": "22CHyj6QHmA1KgjwXEuepKxZUzgopAxuAPjn7kPZnW2nJkaSMGoeTXjN1Mb3MrVRzkQ1o3Tz1L29w8uBvQHWrp9K",
  "key8": "2wQRFuQfxgfHngGsVKQRyCztGccJpkEMLXcdWPDYYnXQi8Je1YwdzLwB41Y1b3Ze3Us4aSvNT4PDVn2P1vdSrFGC",
  "key9": "4Fyeuc76VVa5DYXh7C4592yq5ra9b2yNM2y34nadWo9hxmhTWVT5bCWawP71wfafJ6pVKTHjR6hA8TJv1rVBP5D6",
  "key10": "K3aZonHeuqP78WtCE8qHTC8tzXbCB1CHbvRKWeGvnWqbL8RPztMSKAKyf3pQPjQRwKf347UYo8p1oEZimfradAG",
  "key11": "2gb2hTBAYDYqRJHQHJ6exhnNiRWFv3x41BdsabGLYdsCHJLLwo9MwCDhjfqE7Nr49WN6n6dV18QS98Pn1NGXs3Wa",
  "key12": "37YN9aFErXp5ciViB8CXAmt5pcwunyZ52ZqE3hvQ29JaEMZH3wth2qe9wrvQiKUN9UYwbfbXVfrM4cV7BS7RTjVy",
  "key13": "5pQyD5EjTnoSBub9BgUDYdV6VHbCupmFENbBUARFYJLTkHhRu5oUSggn3QHT4H4sp98f77QUsQC9ZrQCAHZE1goh",
  "key14": "2epPXLMbqZ9WMNvQdR7BbVR8DQgUW1qcBfrNq56vaTnfkKCeEBSkt5Qc9C4MJTtXXTq7pMmAijyjgPknBgSSkxu1",
  "key15": "38DeC4ys7mCzXnXpjSqK3Gi2p1e3C7814AHGZRm2Kbu4Rak32cSP49eYxoRkK3W1UF4y6T5wNvoNBmnRCyKbtp3C",
  "key16": "3qdSQsyxr6QF5xew29MrprRu8jQMYH4Er9KtBLhNszeapQ2XVSXtt5LkFeBRmnR26jWpy8Sykobw3uz5NeLnF5St",
  "key17": "4sq5vscU4iEUJfVFUt2nmn1jhha89jEvNJbEWj6qpdmB5UwkA7LyimSrNXxALiBSnVApeaGUuUhrQuyheavBs1Ra",
  "key18": "4dLbY4pAHNHRPPzFD32GnzcnEKyB5u8rRcXaN58wHPhQB2C2JhUN54Hozp27a8xyXh9BJwhdRFbJSEMLijByAJBe",
  "key19": "5fSV76ViFuZCoBqUU6vMpjLr4J7bx8NzskZqiAAKAshiiStChLma3YDk8G4iigC33eED426pKvbQHX7xfiA8xTcn",
  "key20": "KNFtxrFAoEr785iocvzHQX5MkobXzgwxzm4b6bedAcxm64Vhv1ESuKqcPq4T7W3z2WagpXMCygiC2cGYwN6YXeK",
  "key21": "ySC9bFi8WC9LWiBdZxKcE9g5tUFTwcaPXfNKhsD26KnCTjB19X7ZypiJhvPHKjF68H6kUPv7g3uwJeYV3Hh6RLM",
  "key22": "67EUDtcXSgqwZAmWrYUJS26wjiY4K5X5oHMQvnjYa2WDkNUnSSiPXZWj9yWoWiEvaYCXGv4XVaf7k23Z9o7oRM1g",
  "key23": "2xEYkfp8YvAMUpgpJa8GdDGRRFHJABhVoVuEHeKMqgcEbcMmo43QFMiWFLrRtuoXtUGQpntjhXdBA3BD8shvLFMp",
  "key24": "383zd3r84LKbcjkEzED8CU6CKJHB7AW2aovs6BC6SzxuKAmGpdqGWqaMazqziCpp3hy3nQ5AK9CzbJ8XFFT22Uwc",
  "key25": "4vNCExXcsRLsXymtcxterxU4k1oEU1sr3ubPKbk9kKb1xC5RbQY6SQQvzMpbrjhgAVqvnZFHV9UX685KHa8gBw5U",
  "key26": "3KKdBPB5USFEh75GB7ExfAs3USm3u2dVMeG3YtrkXxHMRVGHewy5ntsmnx6DeLJ7qeY135UqZz272EhEmELbqd7X",
  "key27": "2cmpZoYsAzdeZgEujYN1fiwvQRYB7t5E5QhxKrscCHVhTp9DEcfZh6YAYAn9F17B6JSJijaTEFaxbmd79LqeFcNt",
  "key28": "vhNUhUzjjiGepUvDPQZcfLi4GyX3jyoy5Gyb5NtNNcpoiBMTa7GLW52m2tkr5Qupryx3Xvh3vQWd8ZmKHgWUx7E",
  "key29": "5Rjr53D31BXmfvA3K8hVZ1ohwQ6TP1chgUiYKurg2RQzNwrxcsf9mLRzhwS9hFKpuPw8eViksfoRuiXKiSH6qJdh",
  "key30": "42VEgoXMYUwiwh7apEAgM9USY3CUtNii8FY2hRs9NWV4a2Q2UUNy7nCNzW5fDzSPEscStqfD7NBE6hKfD1WaUc8o",
  "key31": "64N7RuA76LPeLzHa1g6wr3HSMnW12ctHg4y9XC8fShUBvBEVpjiQ4Wmt7qX1MjByPRrcEiSe6kxWxs5GpFG568LS",
  "key32": "49wBGhfrf1nnTnpJ4ivqxuePwypURhRkmHtvETnyBqz5Zuif56ZJTiXq3kpw8rJp3DPFqDfH4nkbh8DMMHkG5Heo",
  "key33": "SqiXCQg3b4JqPwPi7Y1Vv77Wm829RCRJBAEBWyMT9SmQjUXcXVVAwqJEyQFTxS3LkKZEco637hLyrgPyfz62Mfd",
  "key34": "5gJ6Zgit47umAkBLtuCJWGWHhXkYtF6UgzgoxLdkXB59V3GMcFrkxi1zEvTLq2CvudZMvPxZAKwpTKNe11JqoGCq",
  "key35": "4ymEC7k9FmnKT8XHVDgutjFTJp8CCu9HBejEjaNsyxmodXVzZjVu1VnRAQQ4ULqHcxA2tqS1KA4buUiimswrHtC8",
  "key36": "3VYrABpcphbhkcrTeMsyi2bQQegpfLGUBirzCieEV8YEXMw1FgwCBvV8SW7cRQSNgoVCuVfhsRJxS8GF8KMS5Yon",
  "key37": "5VAjw2CiQUXnQXyrPsyARX9quhu6dZtCwYVpE4r5n8G7r1K7Zj37W8q6RKPuTsgEST4qD9pFYpmDEyDjsWP99bNY",
  "key38": "4niJShJwiSzpHLoaGHB596Q4oqNnjLhnmXFUNKGvpoHGZHtK6bQj5rAK2VWDPJigzyurByeXxq8THhhVsZmvvsWX",
  "key39": "121H1LRu63zUJxhHm3vQWJrL6Zz2M2RWAQBrBYVdiC5y2ucKryaGu28iSm9BF33XU5TfVUe3zW7apJDC8aYQpwdG"
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
