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
    "3T1isTzLRsevVpJL7knLcoGumqMFmVgwdmQq8ycsLygVBAycb3VBB82T2TyixKJUbJ8pvKsWNoh3t7RDECqmkQpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JVDAiSWReEbRphixq13aFP3zzKDjBo6qwmDkQhG269YLdyf8qUnMMcoAaFW3bbYPQuAiVQVD9zVKBCjDQZJQdhK",
  "key1": "23xeDQVyttQ8cA9M7z11U7STfckE8y2ZyAGiGhYBvjMLLJCYTSqHRVaJTdH3gM7xcTpNFdtMGhwWZjMFgFz61Uck",
  "key2": "Z4VEAu8UPQKPN386TAFzG2HS3SrhcYNUh1w186raVyXRcFPgNXxBsmLNmFAnfifGKgdTgmwYU6tEjs7fzthn8ne",
  "key3": "Y6gBVDV9wndYhaACNGwidC3deywJJYid7dC28xr9UpfHAnyLPvw6UYAN5gP7sjCx4vkY9pM6UCz5avQ1Nsf5gmE",
  "key4": "PNBeYNmqk3UG6iKnPALC9hVzYbXQwLjpDQLMQfQPUUE4NWTAFbuE1cSdTgKC8riC1RnjMCa5Cb63BApXCTYWf7K",
  "key5": "3HodpM1e4Ap5qzkeAjnhv3Zx5pyjGmZdPq9gyLDwNPnBAwzZtJReF47HwoTDF57SAVyxVDgacs5ajd6zDAsbgRf2",
  "key6": "2QzhapuEohn3A228vSbBHWU1pkMRx5n5UrYkmMsNfVVWUmsw1FUoriv5XynWqGoSCjEeHNJsv7X6KPZ8R5S6xNjF",
  "key7": "2PXDa9Wi5L6CJ18Bdbh886gaeFGttzjYKnU8TSCgVbT2YnThmZZV9CFZUwb7oyZ1NYDJ6ibGYzrKaRp2jeCyuQ36",
  "key8": "4ipG6pZHKx84gTpkg4RKbx6wTCfPXTSCrmrrLyhsVMtDafXnUYGWsKj9M2wx3ku8f6WodQA5AgNR3vJH4heS2Yxn",
  "key9": "rn7JmekHjwDm4YTLjkJM9szsWzyFRha1SuuiizUWNq1Ff34dn1BsxAuWeMgX37dxEzsLTsXo3rQaUap5ryDLmBg",
  "key10": "v55Bfw1914sswwSXrr3EsYHA7uRa2shE5THud1xH7MuyYvVb7RE5PBQqkxBfypGDAD2AzvXpVB4oBuYF47EFfyo",
  "key11": "21fBG9upw3TZLdrCRPUuzzRaeZwnRQUoExMqDhbzMG1dvtTuxzocrsdssaSFYrgiZ46hBtXrB9hf9ftudkuPR6Zs",
  "key12": "NFp2TfgyAJhBDUX5XyJGaewkdt5W8xhSV3uB79g3QHNtd3P35u5VM5rQBJDRwA4EbiJRzpvYnYfDZCPT8wvaBtR",
  "key13": "58cMRq2UGDNCpcjDHeV3NwBSdixBqToDUVQHZLcVY5ss5zyogdCphHKwCgzmUYqY8wHkBodExFXZ7GtQkmZcBjjE",
  "key14": "258mm8LrwcE1raWUa3qMhxiPFAt2Bpce1dCUW2baiQDaBY5mA1QFKhFzX3h2fiWSF9cHt1P5Fns1kMsmeajcPwvC",
  "key15": "4m6SzqJ6EmCkMbc4j6k9LgYKr4x4yRVjdqhHc9DoVAfoa5bbB14ZUXwKthCQ2o1EVgMyPx1gssmHuSWHeXzeVvvi",
  "key16": "2uReM3uuF5v7QnKhxGeP1r62ZN7818ffuNixzqfCT131jq6Nq91p5Q1nD5xU16zziDdVh49DMtrQq4NEV4A36wJe",
  "key17": "3wHZ3PYeacPsCmgx38SNdaVRVhYZtWxRqS6NXx9rQ5EpTuTpJLYAaqpQeBLCijpgnNkQY4P3ngGeux7YN6L5PF51",
  "key18": "SumpAENVAoo4qATAVXtG7Pbu4x5Fi8x8dZmqdz2Tr6BRws7Yk8jvxxw1EDHMZzCnPyKm4AyGbctqy4hiaZkGgRW",
  "key19": "2yVXoWH62jkJy6Z572KR76ffAASW1gCe18kysVrcGnDGqUFtPptqMeCa1sTbpter3QQXtE3GQTydA8hegS4eSMjt",
  "key20": "5p7B3NaGzJBvvQrciyqdcUU4tYZvjBvWb7gFDgcF83N9p6RE9h18LomgJYp5JgxSoviJhgEM3G7mZfASQ2Ag2Wjw",
  "key21": "4tj31doto5LhriG4nLoVgAZL1UME6iMmG1ZnD2hi5m4jcHDS78mGcFPuMFFhANaccsqkctLfzjaPrcy1A6Uc3NbG",
  "key22": "2RmsmSViYTyb7TcPhHz6Mnc2Be85txbdUjdPLzsYX5eFpHDXTwGiitD1t5xkBxkKu3kDyBjSYu4X7bh9JohRJdde",
  "key23": "5fsDTm2ChsXesVPL1vc5pap5eFuc61ecnVSNmqJSVRYBL2j4Pvr4ruhWHSqvDuFzpw5kBrNE2jnNBx9Wca1itkKg",
  "key24": "iahr9vBaVk5dh5ZSs9XzhqSUK7f5LEGGW9hgZBMkstaxQaMxppVDSzb9mLThcYth1tn1Mk6d421Cy4HyUwtdoHD",
  "key25": "4JGsVuxcM2jrDr8D2ANVG2tVsK5m4h4cXnD9SEPEfSQSunAiLgDfFLyDaNpdVhzVSCuHdEk71BM4KT46VfQEkiVe",
  "key26": "4zUfnXicib2rBfkVaCWXwTG5ZZdNFMwA2oHBdT3sxmbWDR8nASNCYvYJ7eZaeHyXBycSiCCwDjeQXhooSTXv4a4M",
  "key27": "4bJdFfdud5VdxRftdNQYV2zesZpQFJDCSik63auqjKZNQ3NV2qNR5GtaToihu3tiS9BbXQoVRxbXX28m75djLWTr",
  "key28": "2WbwPoWJ54uvq5o8yw5MPbTevpsB15j8gB5DTKDXt8FbMG3N2m22ZHbzG9k25vrjiVNzFZuYh5fCyEz17JChNd3C",
  "key29": "DyjYD8KBiP9N5Nj29MEFSdyBFn9ZUWG4J1syozZUCjtGB5Wf6k2BUmcHg7vRkpCCmdY1BVnEmFKoGtuCqVHtvbJ",
  "key30": "3QVejmMXRWWBznQi4EuAffhsbmBoWDYK9YKUqdphV5brE5ounoJLJAjuNM9WqNdbwbw3cMyT2FwsiUpxccu9KAhG",
  "key31": "2zyEywfbAXTM3Cd46UxRWd8h1wmCvFfAEaZEKsn8QnnNdmzjKMYs1FPTsGq4b3vZWyxfrZKF3kfcfkbsZd184j8k"
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
