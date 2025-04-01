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
    "3CXfkfcHnYXeNMPJj2pwtGeocsdJqR5gJiaEEh9s2Ea5vMcpA686h1XkQvtJvJACdTwuvmDbaTwD2rsEFAiuMpjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZaZCumGoExZBV2ht6FxA77EZfHnNzNidRwjaK1Gu5THVPrcmaJnDNugqUzuasxSwuJ2RjZqHEe6sqaQFrpvBfr9",
  "key1": "UUitPN59x6yAp1jXJ4Y8HfEkoHyNrf598RDmNcEb4MLVLaRyb8ypHaSXn2fd1Ww738XxpWEkwYAi6JdhdvgjW35",
  "key2": "3JKXf2vherKKyJAyxMKfSf38kczLJQo82koMvu5wv2XvBTCpsH5n6jfnvQ9TWZeiYZ584qDhUQDikEBJgiJb2QDL",
  "key3": "4sX13nmeVG2oLWVWQYE7GsN1t2pwKSC7BAcHssGNFht8tF9jdCCTFJiFmiZPs5qwyH4nCYLjJDyqN9pH2yQrKkss",
  "key4": "qdL8V4aN4SDsbjjTEKXYZHrJezDsPGLF2iNaeGEQiJ1mxK8ktrQGNCtRphMGgRKC9sj9qqcRN6YLaMbqgjRTDcv",
  "key5": "2c1V9xVcW3DQmEoezRwtxSQawk9YSA9LFAZ6fWsHH8tiiy4pDYGGzDhtf8SK29joMXSBqmgNBvtmYhnGKQbruBny",
  "key6": "3STGZUGWdeDB3mGVs7v68Xcaa8FdBTYHR2FZtmKcy71TXnGnDfMJ1CdVg9PBCFdGghjqGsN53TdJZ5XgrN25SQvT",
  "key7": "kCLDEpeBMuYdQCBszV1UXpLLpZihZ9Kj4mYGoo1mCLkk7sGdjbnkbbUKfUpWWLQmwZtmFPWkNzB9ZRRiwSf3pwD",
  "key8": "2bFgCSYgESFPrA11JFhjAWYVSMEm8hcsoZrWE2BGK23iBagkXCWp5BGZfYWvvaY2ZTsxckJCXQHLKyXM3ChWC1W3",
  "key9": "3sQgMKvbY9pQjeA6jPuVp4nMWGiHzjWck7ZeRSswG3Scgcjn18amAzC8vG1fSFktGysUK62DgcdsYiDwzTMhbSBn",
  "key10": "4LXwyoHMBsoCqSFvhdkYxdCDRGra2FygKERFf1bYNbHoJYQpAFBXV8F5qSxZg3dto9xaV9ZtcCykHy7kxbxGuQF2",
  "key11": "4JMb77nJMZHx93rDzDMrJGouizYUQRPzmDGB4XhvcTnmqFLjwRW5Ei6FrepSZVZeLn7ZmtrB3uy7yX4SwfBm1Cqr",
  "key12": "uXy9ZwFsqdarE4gQagn8uSanoyzVqsbyETQPmqhxAXNjs6TwRQxBEDGJ6GdEEnBGDfWwfCL5za3JPJ35MSafeBM",
  "key13": "Twa7HyAprRKyV4kDQ9kMDcBmwWtEkAkmAi8wGA9vdbKHZy5dLPwHKKogtPMbTYH8uSBmEds9BSDoQAgQ1LQQFXf",
  "key14": "4uXpDPHduiMJENQUuGrANkEfftKKZWzxt39SAd86jLJ4925nziUo17RFZy7pnMHKKkdbHkjoo8QLU5sY3qriwVxi",
  "key15": "3gUoX58VMDnWNePKoYewHkp4e783MRSHDJ9TEQFof9LaeTnGbYeqyEDvM1GQaV4x8ZvZ5endBUeuE6mL3RxJuRDz",
  "key16": "5DPJs74McaUMm8H7L8fJNhQqjZxvT9YL32wmcBFResisLULSLdN6ZxYyDrgr1HjydFXMLgUz8S24NjTdwnPiJBmM",
  "key17": "5cg2BbuQ4nYdo6skgbn9rfnAEukx1pCDADfot7riggCbCxAxtiJYE2eC2sTMPNJqxTJLmtT5iqmjbNmAdwKmEm4i",
  "key18": "3p15xMRxrL84aV8MJpD9nrj4uTkRBniHKzBXgQGwt7fc5T8j4tgn9tyKkdjYc5Nww5YTCAwSPw6FrSczY76QU9yk",
  "key19": "AsRHCM3sDyVd4eJwoSMSH5665b7wP3hRF1pobESBuFeF1a8drN83iYbkWsk1cWMqof1XFJqi4k1g96Kc7d3MqAz",
  "key20": "4bjeH67F1nxJRwSJqcgUmqVaTZiqCQiYKQxLZhvPUX3845bRJB3m8oMhGUoqJfCFE9y6ZAxqg24d7teiRpgXUEn",
  "key21": "3ptzpjYmmFPTtCD7ztAzBwo2uCeywxW2uaFtmmJSCKyT2Yb2gQSErWeqRGFZXSXzM5AUk7VyVTpnp1g7BtzAHYWy",
  "key22": "32pn6rhdfo34tMCCuzcsiecKteRkREnzEkyg6eanznrys96VkXjdaJNKxh9aWq5VZXxNuCP3VJsS9CuXestcifKP",
  "key23": "32JeTnnHnGSuCq1cZBfVsJA3mB28GC39GCBTwkLmhSkDyMipm5Gdz9gxYtpMmASYjrdGCFrriUPGd4xPKSLos1wL",
  "key24": "51xi2SCHLzwBtn5rmmcc7mwJWXpS8Xu3soppRrafTawUPsotLd17wpx1eVobzv2SjHKMaQREKqnbqsf6RaM7Z7Ru",
  "key25": "5gp5BWSMjXVA1rLVQC5NpMuC8kkdNwBFtsGbCfGhJf2VbUqG3H32D8P8bFGd1Q3ZXMvZjU1N3kxubKJvDrds3APT",
  "key26": "5wVgM3Epn9TuekKiv1vCofFkWyg7mDkJwNXMtuNoD6LLDv47wmrPuuX4Grkuy5Wu5gqVBtbR6iZTLbLrjgiDYX5y",
  "key27": "YWbGzfsLZVNx6w6PA2rny4jc5mZe9SWDowtZhACNgVo7naP8onJhikvNpGuJ2bnZ3sG6JVdW3FTjH6t5VgscxZ7",
  "key28": "5VeDG5fuEpKwfosES1v7KZoPqjC72izu2UaY6DUN21S889sEttMCkxbwLsdvn95HBqqraw7dxFyxU17Lyo5feQ62",
  "key29": "fCCUx7Jf55oWMdBBjzVGABFwUTszCq3nAuX1xhwYXP1jafafjmAz8YXvKqrWGsiEfHyRdhc828oeGLrwyCXLTEN",
  "key30": "5Z1y51D2TBQaWFJfKdPnJXKv29TbadCao9cjFyWA4nnoStnKzTWExRWHq2iFJhdxLgVZAQFfRbgMxKw9SLCDWuQG",
  "key31": "2BStHXcMN7cR4GpFAYPT91LhAVCV5T3Em5e8BuK3rKtsTQ96Rb9xQKBz4YUQGUUjGVe3K3mjVk1GCT5jUt46mhZD",
  "key32": "2nvT8UBoKfjk8ZKW7Eth63aeBJbPseWjdLjzrE2ZpMPmDE5hdfvrYWEtax55hnL1f5oYUMU3t4Zbqmifocrqm3Pk",
  "key33": "vFUnHXLUR88XGx4nmc5zvxCxAvw4V6QCQ3aQ4EUwVr4odBq8NUAxbaRcLpQWxcnV6hkmVBgQ4CXdhRFynmdMs7d"
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
