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
    "5F7bUZw5EQjp9baAbhYn277ZYiRs7kfxpGmLGihszLZr79CKjp5Sd2djR4GXvhCV1RdRG2U2JvWWY9jJntmFcYcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i8mxvzKtzkvDY7bWZiBf1BAqGey79Tw8GQRejm5nUhB143ac8ehGRki2r38Zj4CB2PoxsnFuXqT6thp6kfXrxQo",
  "key1": "3TTNuVu9UvQG6rV7aGU3bKBtXturkxK1eTaC8uuE3cgPRTZ6PaqugytuzxpevRp1LZx7rUpGfuwShQkc4eH4xhcx",
  "key2": "4EYwUqbVhaDJWimvQ6r5wkNKrVdsBTwmEgej2sZSQnjX6YZivrf7kVyL4Yk9HBYiquW5U1RjGJkZXYCCegkmiZ62",
  "key3": "4BUGC8rCpK4Pu2bJ5uPjKaXdpuhKRGq4pJLiBprasm7WNAHqndigiPTofk6Q5A8JNbFLJmEaxrUzZ4qNdXks6PZ8",
  "key4": "3mzDZKvYRqdQ6Ad5ne8dgLfxNj68KB7aRUxSaRjzmiCNBsxTVfmqa6WA4g7mcmmeUU8z464FC6PUaDoj2RHLVnuH",
  "key5": "4c9E8zd65dqPunMu2xxcz4uABegBwQT1DeeTpMRSZsBreMULBQnQKCXozEBTD5TpFEjsYqw1i8ZRHdz4qkPNzNWj",
  "key6": "5fQdePDsMp6Jtz25Mupm5Pad2pNCtmWJq2ps6VSLj58n5veCNVvDV4u5vNbetjfdFvR9juF5i7yScvLZN52BAevb",
  "key7": "vjw32Y9iUmM8mG6x6DJWfuMjC2JBbJSnJe5PsDchsxf3A5PZiHV587yfMW4aBZq9MfSPKE7AQHzJ2vK8agwPGv7",
  "key8": "wi5MdaeagfQwBUCq7YAWrGHQDFjkD4DSA8r3LhhP1tDUvhABjQxFjdSf1LVETdWZ3Euq87HntSCcMhteCPmSu9w",
  "key9": "35VEP45CGqoBQL65r1bWSiY5rJ3wWBGcebDZANX6VvV7ukg6rU7HFGmghaPQbLZMWkAf4s3Mafv7wDXgG5j2ETjk",
  "key10": "3rTwW6qmWdV9XN5SZKnvX5dceNU6ZW8e3kyPEGb7RU48RYCzGbG6foPd3XxW6CHUZ9Gbc67rQhvMoW87tAibtAPA",
  "key11": "38Ay8RnjH9bSF9YHmxcXcvCFnC8eS8szp4GjgHGdnQ3PAZ8pg2h8MmcmNdrYeyWQ39SCNyvTkgqWqn34o98R2Spk",
  "key12": "5g8DJgbDJE3wYgY6H2WewK829mL5g8h16s6refitdrapQDGWKZwFZbq1iTfyWsXMA6C1yC4ad1QrwA5fAdFt2oek",
  "key13": "4SxDm32uYKF2xmrUskRG7M7nZM7UXMTNHnvRF6oHJ37ZbMigNTD8emZjf3sq6xPxFXMC1edSgBXn1jcRDngWciHn",
  "key14": "4dMKGq9Bqg912ZfULYKfGVm1hk2XmPK2D4RZPnSyEr8XqFGnQZZ48cgDjXLJ1pkPbUnTh8e41xkeGcYrDPtitUVF",
  "key15": "5LnSyNb2gWYG765w3pts5CsPakQkkhxpiokXsnnQDP3gbowb2tcHmWFcK2tutRE92i2dUyt5T6N8xDNN271qJMvw",
  "key16": "3tcPxJBxTwHbtHfRz5GHvCCC5iAo9BkxJdbYXuVtvi1Xd16sKMF7CPjqjzzTsc9W2uL7hBn9w2rjT4F25HF1f7W",
  "key17": "41GXmbx9wwCEk9dqrFofM9WcfW3dwrX2ERwXNTfE4KzYDfXhTz33u9AvMAtwpaxac4QY3KG85RpNAVVFbHJuzFDM",
  "key18": "3b3vRgcDE4SNEvgM3edonVphMLYU3fbu14LgzsJXFmazKJKkEomxUmqzaA5gp9GaEAVU1J13zsuGBoMS9SyVX9dr",
  "key19": "8c4p7PUfa96td7dqx1qseTi6dCkXpcQfHsCF15PKJSS1vNiv6iQuJBXu5hT4hZAa47jCY6MHNQEDttNiyd2NtpU",
  "key20": "2tpqevxBwoTaoUtSWY5LNxKWXkEgeoYPptYAqGWeH3ukxjx5dBGeszF3qU8NazxZdH193XtHG3WcreaHrk7MRHym",
  "key21": "5nd32cDNPNXRzUSJXRgNUioGqth9QNb2hRXuQxT9UHNvs71Wp51xLHDyhYz3Mpxh4R78J92M1Dygkq6xJe52zcfq",
  "key22": "2s69vYxRpLU5joQpdbKBEsqRAnJdXAqtiZ85AmESHzYx9oFKA1A1JgzGJS8QPcSjxFBL9ce5d7tD8s4TKY5LeYRZ",
  "key23": "3wMSjyofH1NqragtmRTBZWbaUSXhwrFiZitZxsjP5F7AKAuQMxGfBNZxy2dtaUgjfsRuh9rFMuoqvE4o1yGkTYCV",
  "key24": "mofFBmtZJsPnQ9tgW1is7vyAPHkfWhsu3JZNAskcCJxcUhciHThZp7otV6h7nJXxZpde2K4uiNQ2am2Ss3psMo8",
  "key25": "2DPsdJ9Q5P6N2KZwH4dJAytbhyYWxbwn1jpuTyya4cwedAaTy18VL7Umr2f8ktEFQbbaqUHN5a1SVKeVARTvXt1q",
  "key26": "4xva1SZYgsAQDSs7RWMd1txdproSENxuP4NFJVyKF69WHAU7fNhFoAW1QgsXt3CfHZfTSaq6KJkVDe1ZVGNDf1xw",
  "key27": "4dG8mYuVdghyAfQwiSSAkxhYJk1ybgR7tge2n7kz2VCEq7NVwihZMAkLAoJmrNRVaHUUsgTWKV3sJ2PJ1Vz6VEwh",
  "key28": "4rnA5gxtghmu4P5F49Gq8nW3xYjxfS3zN42FoPxzTMgcq5jeS1MAt47LWWRDF344X3yGWnSjJ6bXQnmDGqofuqnT",
  "key29": "x19w9k1kg5fS33qRoR2nDZoRjq7gMPCfYn8Qc3ktKCbTdgABpoi2zA87uqF1tDHziKir5Jg8TAJhwpJDVTuJEgg",
  "key30": "3zhrKgu3A3UhjTubFyzibESyFzFVDCcxPBFvbXi4b2Bk21sdD69E76UX2ttH5S9E7An5ZArS9RsLS9ff5TtHjVSA",
  "key31": "4ktMuHDNWfb9HS7wt9FSa6wuCw9X8MCiVKToFXQzxCuwAfagPZDqgHxUGCqaBRDEcGqQmd8oHVk4UTQrBvK78usa",
  "key32": "3jhnMgzV9TWbM3cuF1FSK6XEsdqm1CFBCo18FJT5Pv9KJHxy9tVTUSs3Qri4eysyqcUNupHKC8SXh6kRDQrw9c7V"
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
