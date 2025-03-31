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
    "g33V5Tgt1x7yHduW57nCBL1VCr65hyTHkut7cjW5P49WiWB65hqS7kdmZq23GvMcpWsrUVHfGggVoJ4hVWWCQzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "282UMKLJc7JdF3kkwPBZkgqkiqeJKdP7xw4pNR37deoBZQFwnnCxNf7KnrVQpf7KmAp8caR2a9QWQXxzSEQcFAe8",
  "key1": "2iQ5sAWcLTvDcY3rQ4FyhKPGVDrkCbnxcoLbeJwuM95nXR2MjBj9h2cXKwjoC5e6SLTPNNfrNy2WPTy1Efgfx5rZ",
  "key2": "3mFJPBrqVrGZrugRoPw5Nyd7cfEwK93VjFjr7bahVUtS3DTFtetVcDvNKJ3jd4r9GHMX3kk8EXDSo479E7WVBpRv",
  "key3": "CX8A9PWir2FzhyxRcdrmeBBqCwbWNWhyHKAs3M1TvQkJbLGE4CJ82pZHogCpvGqEWSfABehwWJ7yrq2CigbzWbD",
  "key4": "Cc5vzDtKB5BSzFmA5dbJXjbQtioJ6hKfe6FtKxq9zqn8uUFTMaSnp3hPKhnnJuRdDkjJwmkRKChXYZrJBTfcnZi",
  "key5": "4u45bFxCFoV3vJWC3rXJTWHLFWfkCuFP8d2aDQ3ow9DeXBdetUZBrdYeD2yuXfbQbGgrmCk5dS8sTUo9uR2Yx6qJ",
  "key6": "61hfLnfqg1CrUos1XnhGieveRKyTvZYMZQhuzrummWRJp9AaVoB4UG7Mqqa6EqQsd9shJwwx7FuLpkUFb4jsvsMq",
  "key7": "2urJdm9faNa5ZM23zeyuauyoqqqEFKjwiAxBAifJuqm37RzcHiFne2nUdwLCC93xbadwsP1MUq8zhsyebjvXpqPh",
  "key8": "5nTSv6caYEU54pK2y4hvQFGLPsR5Y3hXUMb7sPjPcsToTX1em1wqQ38aiL5EHeoWsXDni3SDCnY9rLcm6DXevQd7",
  "key9": "44MfvA49gGGq5AdRSMX5qXNsoeLcnywoK7nxoN6GFF8tB9AjhjVZR7aqyNKBBjr1LJ4U1aZLMkKHKxYW94BJvize",
  "key10": "28Ui5acMCamKspvfZ7YejSoSwMzepc435sAAPS35YgTNFDkJzgY8PznfsHQEyZYhNqkuWfy8odNraECKH6Cdt8wn",
  "key11": "4mZrmHbYJFGyyd3pL2zr4CUqfmBh1ysE43pwjw4AVwihPJEbX3rxneye4nhVztYQ5jBtvTijCPEA6sMwWE2aSNjs",
  "key12": "5TgYJRxdLTewezFur36ws7ozEDNzyp6aftCDAeRaedVrCun9eC9jcJ1Re85nsSNNYwUWyNG5FiLE13jvpUaopRde",
  "key13": "4kBo7oygzTZYd193CKPjTPeveUwWxsmVHsoSEhgpxZsiPnV5PYq2STMN9waaSWanCF4Xp1DxPnwmAFNgV1uxn8Rm",
  "key14": "5EGbVp1VxLL2HXSwpv1WBn2iRRiui7BL7S88AcNB8jUpc48hupWQdszFDaaiRCJeaeMYkjU3QrbPRVE6nodoDxCk",
  "key15": "u7trik1K3xJVP7QnCLPfCsq6SvPgy5A3Jpr6cHLZnPjVkud6nC3t6k5wvp97bzCvekfijmymg7YQ2ByEftejCwn",
  "key16": "5bsSsLXrQs6zY5Tq2zU4tt3gtQXAD1LtCUY7ac9oTm3u6vnGn5FrMnFiiiGTL6t6UYtWGBpzCgHH5iujwSjfsUx8",
  "key17": "3jw1W4imQt36hoRDHupe9dmwsNGL3W5W2JZDZMsJFgiWRceaDXowPpUM2aXqNm4eD2nuMTwdXNrwt241YPXyiHKs",
  "key18": "25zapdSnYFmd44S5U2Ss8vUBxeMNLbbiYo5Je14qv82qc2rm55d8dNJNPJmL9VMhk7xoK4N6vihkZPSikb21RWVW",
  "key19": "5GPukr4fYjy3w6onk5osBJojbn18atmuBgqTxSd4dUvuEw9UHVysgqsf87hPrb8RaJYYo39QTxeLx6k4U7533e1E",
  "key20": "C7CSdRfHP54BGi82ZKBmTT9nfFwJaohcK8jPsWHVAFEUq4iWL9PajTu2CTVh4G1nTMexUx18m2ZUC4eTkYwagS8",
  "key21": "3RS1MH8ZntyYubK5ELv56b2XkMd9rebr68ZpyEv6opagzGuyqQi6LUkMia1PE4n4T6h96ems3vSbQKaTpG437dNB",
  "key22": "3kfemBrd7Mv9e1KvAyPp2vzRupN2p1R7JpjkJnRngH96Xoj8XcDmrZYLA87ZrSUT69a6fSb3NKxaLDRkRVwCH7Ku",
  "key23": "AwWvwCAvLTxR5sbGjZVBAsYaEZ3VzuNuR8zHjnEZX9QoegveMyt1CU7keS6MMrQmGnqMP9MreGcuFtWHy7ZVNui",
  "key24": "4auY4aeiickMZB6B6iNeqsU4aVYL5D2nYgrPXCnGZa8Nwb9n9rsDYhKoRfu8g1G9fUiKaMCKzNB5ubyjrkfUpDUy",
  "key25": "LZdZXLuErg7DdpjnN75BMugpqq55AXq3fMBe1TFxnqdwjiPsdT4gY13uZZEPNDRc6RbVqyumphsCc3DLwWYAjCi",
  "key26": "5FcjeS2e7xXktjbyX2WWijgFJ6GL7v5yG4kSJHzKj4He2U2T1rkscFre5NqBhJCew5k6nFKNm4GwQUdhC8FBZwdc",
  "key27": "5YHooLRRFCQ3uaRoykkDzeFzcYr5uJWaMwGDAnxLkDCP4fa4AzFbjjEMqFzDjC5mzm6HtuuE3b6LnVEpsKfNnDF8",
  "key28": "2rXi86et94m8tbrEgXHqm8wKjDon62K6oTx9JWVmndemJQTSFeGjVgjXXTHeeV7u3CLpE3nGkvcxBu1QFrjczAHX",
  "key29": "5nNdtCDAE3j39bxU54mqZbLYKPBq6aLvNHCsAZaWyFkfQzqAeXrMhc4iQmwGoDSJ1qiUJfbyScw1tLoZ2M3vsMqo",
  "key30": "5XuQERNKvdq4nVTP8bMnJmVEDQTWYBELBvh68ZvGmMFHncY3duq2FX4JuzX5B2oKzePePK3h5tukVVAEBV4NzFg4",
  "key31": "Teqvpt3SHSfEjnKo8ggwct9WL31iKm3U4uh9icPaTa7F1yQXmF2Kay7nPpTkbDwhm1rXnKAzrGWVE7iX7afsHw4",
  "key32": "4otE99h1e9HcL682mZ2dgfaEAtNje9Vu6G3kLtUBAu8J73w1ZZsqejXz8f4XHzMTFyzCidtKSAQUhRCKobUhgX1N"
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
