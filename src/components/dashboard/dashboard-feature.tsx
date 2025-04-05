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
    "52cqxMxttg93Nz2RoKWuWghi3HaE2aMK4nt5kcdtXEVPP833MpccpZ7BwaQRnpbEcFwmNgWrLWC79ubfntBo7PnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M83Ash7JPDAfdwqtkhKHDQUj8ZWKA8KWA5s6JZ4aBfsvtZtNx2FLYj85isNoG1vCrjdMziT9FSpS7f5hctEUaN4",
  "key1": "5oN1ZPkrALTKNjFDKVFc2p8TGWi12etm5wXwE2E3CTZAgQa5rawVGbGWwJAeVXVvnJiuR4x4FLdAf2C8S8FCARah",
  "key2": "574uC82EvYLG5vzEoAiiVSpmgaxJHHgaWEgyjNb59pSRTYFXyPCt57VwufiqMuVYw2FRt3857JW9DqV1pa7MqoLX",
  "key3": "29P8wSNR7xTuKa1KNvNXESCLhVkzemDDWnFcYUPMt5wyQZ5zsYJiSasDkJrvgXExL1QJg6SKrjgdaKS3YXJGybeN",
  "key4": "25GvKYbKanbnwBFLX3SCTQLytBS4SmYKbc34rUfMgy48fWD1XCunjnh21CALdao8SDcNsmMKdoS5Pp7iarALE3eW",
  "key5": "5yHoDa2JZ8KW9GBo3yNZoFA87TmEZumJKfnyXpw9Uc2nGEaNNGLcgkKiHME3oBRXLqQ2gBDS2UeyT9p4iD7rJZCE",
  "key6": "3JLLEMDriYis7cY9EGNFfj7j8EbgVdc7NYJxS1YisQFyMTLYhKCxmioAKfYrQdd4FwPJCfDJqADzncMNxt74qSmy",
  "key7": "2mZfDGTgLQusKckxgQbPVdXHNbBeCwFb5BhbFNF36sJbH4KeyXJPDYze62mPRb9mCk1Q6oP6XMGGX53W8z6cnU2w",
  "key8": "dN6bzo952QDjaQ9NjebiaCBsn8WYkioJWtq8GXkuAWdsTERmDhkmELPvAUfWZfVfsQJnwvHfu235sZ92ua1TkdS",
  "key9": "4MKvgnLMGTf66LLbgMF4rwbEHKEAxMS1Y8616y5eqvcf7TDzSsbuv4ogtvZYqX2bsX1ya5Az7WzX3AiR6jRS9zXT",
  "key10": "roKNftHzwWSHg9yhcdeXyUW5FhtsHNFmLQiqvefKLSkF25eFR9tagUn1AJQ7pjiPzKYUvC5puwY4ZyuZsgNrYVB",
  "key11": "2Bfjz3uj4YyyJKY6A3e6po39FVbtgmYEeDJ8idnrF4NQ6LLU2HhnkLnFH18T7tmKNqjpUDS3JkPoaYNqrNVE7qkq",
  "key12": "4i8UfrMzD1qHFQVpwFgtZwMT2Z4knmQbJjT7vEdxDTggRYGWNBMsakxk5G3uj6J9GEs4ZZv7Vh9g2dem7x5gyRWL",
  "key13": "4PDR29yjB1xVWAk3xvxpJYvQ4wmq4qjJpZqdzRnuzwTNK7sWytZ8Z2UD4EDGzPcaJUxWorJKD86QChxyDPLYfyHk",
  "key14": "3Cy2ninCFVjiUrxXQpxrR83x5XFRGswKypsVpDX9KofkA6CnUZGnAo1AQjjto4QKiHy9XxAfXfjJhTrjNvkLvV7L",
  "key15": "3yvFGBFDjcfiGUY8k7KVXSY57gQr9aSGKV79dC2hdGGf5tcKTx7ecfj1bb9LxHQoDivi5FQ9fsdHT8sbCKgLT65M",
  "key16": "26XXwBh3TZZ6vqUKBiFmBJi9JGT4EBkEL5hNP1gg2uWTSzwsQTxJYLKfd66pmFG4kDphG8heAKCfYqwviaywMW85",
  "key17": "3cwrg5exMm6citipxeAkJcYGwMjXzZdDyy5Le5Xi6y7mwviQVAzRu6kGFwNAXBRcry4WxGP1Sg9QnczhY4aKdPnT",
  "key18": "5vDa5vG5ZhgPpguoZFnuWK3dJx7KaVATA6tDojKAxgD82AiWFjbSKJPXQhxz7kUrBmT9GssjUoh6eHrdVYYPaDvL",
  "key19": "48a1X1JvWphscd5CcvWTcEVZojFAQZT1ncxpRGCTCt8qiUPdc76bBwsmHfDBRQKz6Wm2qQyicUS6wzMLqmT8M3VV",
  "key20": "3e4YRaTr8bQXrCC77CeWVrGAXuXgV1wsCtyqSSr54RJswr41CsnRq9ptRP7FDZJujvV4iuU9ZByCcv7tir6LwPXm",
  "key21": "3zsZUcqCCDhrwto31rA1XW8kKTDvvYGF4eaPizVMjgvPRkVrs3co7s2NeV31odZPinKQfNPHesRUakKdQvrsLEFo",
  "key22": "3NQCKVfa935p7TigrmomZmUm87cbpDXkwS9CsCpaBtbDDQgr9T1ybVrYYukE5ctE8FVzEA8KS9WSz3472sD4L3Kv",
  "key23": "5LttBNFgrGusnqSSdToZKhMDfxqHByFux8zzPcr3BSvyt1VMW6BdHBQvTw4Qas8VmvnrLuv2P5NSTs9EqA6Q3rEU",
  "key24": "C9xUkve3xQkDnVvBcn4W9SsA8A6Cm4s3cADWpW6GWMv9QnZUcXUDRvErpiwCk1jscBoqK6sox4W6pDNbUgkLLSy",
  "key25": "5ATJ7z4y4Lsom6ESYPKCdqr8BkRbgq8oBSL76nMhAiLvXDHhdRe5aXQfx9VtimzykkYrLCx34h3hTfwHLgsGFYMf",
  "key26": "61R7WuCVawUGwHHw7yRYQ7i5xeSEdTyfFcffBPXLqFk1N7JQ6xdeA4zvzxTmyUn4pAx5LE4WKSQSejMYRPP7p3QJ",
  "key27": "4ekMarhJ2G5SuFBZxSPNdvjktMM9ZJnCK3Xa7253WJQb5CLgCe1AePF2y6HQc9EYLan2QVdQstKjKo7zUYaufawK",
  "key28": "3odwSAA63bJqoFQRRGKjxbjLBGuUrEcAUpGgmit8YDwHwU36CBzxytc1rvyCH5xrB3NEm3CShfVDGAWZLCREqkzB",
  "key29": "GLDEWUYvZ3rrtESswHgPtGqFujpJuvjSC1siwWrQ8M7Q5otow7zef1atzWsGB7DuS2rTXi275dNnb79yLdo2ip9",
  "key30": "5J6w8vFdVVV41EY4JdzPXENwUad2vuQ5Wg8YNgZUCdaCDkyXmCp1KQgcVhPGFSz1XDYRB3kVvd7Xg7nPiD5MurQV",
  "key31": "5achX3eoNyHuwHkn1SRu9wQHUpoKHLXCKLshqCXyko7HfG7zyz6jPYzaQrbZdY4qVaYh5cAcXZn9qiBxEjJ4qRoF",
  "key32": "5YdoLuh2U1ieuPxEjW9nBCGhpBEiQyJ1XPx7dmCdjZW9TkZh3vWRPU5VuDRLKWjK6k978xjeYd7WJXvNHS1FWDHy"
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
