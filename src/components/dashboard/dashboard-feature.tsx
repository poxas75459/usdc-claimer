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
    "2uMWkCKRBBqJjGR73PGfU9eGFt3FJBy4M6bbrV8enNXavGg4VAAAs2a9jHTgMNNPpivnRMyagQmgayrCuCSoUn6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GPDuCB8oEfYGwFZCUR6F8ygVCR5mJJNpwAhvvXknfuW9MCQBvhNJpJc8uzjWSSzSoJ6mEV8PjtYLMyRpw4Vpvow",
  "key1": "6wLTey7awV6Zu6LNfTMkHw74fgisaWdRQj6PhWS9NBNsPXXFiCsaGjxu4FRjt6uF8ckb3jn1sGUtooesrpHijys",
  "key2": "3EeffLwHFMHzJrux41QmvHaFLaQus6sNrTmfo2DKuiy85ZAY1Qw7FCMXPmqwrvWH3UQsRBTdtVPZFWnxMciJv3qm",
  "key3": "5BbFxdoLQKH1SmfAkYr9SugMeaa98UhGpMQciN3dyMKaCsSmeH61jwgu1e277eb6imQfosbm1RJNeCF7VUi8ehSk",
  "key4": "5U17bM5cADXEjsurMHvqbUPgNSoY4Dcv6TJ1ccJsiec8NHs4jCeakBKCTzXG96ZPVSNvwh1SjCftL1qnszSLA7XQ",
  "key5": "4i4ZPLUxsT3rj6G9eypDur95Qs64thr5d7JwGCC9uF4PpfuYCtkaupjj1smHuixU7Zy3JPFuSBsQrzJGHXiAu4Xc",
  "key6": "5iBrJDGixPNanHTH9waeeAKGaEUScN6Ldg5L3PTSLbfwjrU4HgoiiaxrwAv5btAQhwt1VKfysRgWzQFPtmVKrfuA",
  "key7": "EWf1YQScku5vESuybVNkMNB3C9ZZwWnv3CTNFCyusMPG2Yo3Zdf6znUvxcZvU2rNdYuMXMpD3NztfDZpXg8ZQKU",
  "key8": "QFVptsPW8wF7wXTj86jmdsJ4t4CZGShLANE7Aery2WG8Bro2fTQKhK7kHbWMscGSF58hxSNTfuxS7LCeMgmc67W",
  "key9": "4BHckKc8gZNVZ6eFLmTALUcrzHWa6GjsvmcUaYXfKnSB9cNiXpkpJmabnNRHGfyau7affYU3WLqcs6fQt55Mf39L",
  "key10": "3oyu3RmhbBNrtxiEgkuvZVumRMwoxguSNm68v5oeXQFi9HV8RaTzkHKynMZmcbDVe5DkoDAGo52vqnPgY7sZeLio",
  "key11": "3UKLCTNRSBSps5vxEuq8pD7m8JW6CZKebeFHqALdx9YTVuKRhTph7AHWkhRsEKUiYBL6KWBJoe8m5cAE3hq6TUtm",
  "key12": "36JsgHHVRZEe6xQZ6cHrEdwFRMFLY6epccwYLva3ZWy2tQRjyEFFFynxenRSBwEopUHxXK32Wfx68d5wj1gx9TRU",
  "key13": "5RFyZLEwXLdkT9jTgkqoRV8MkkM3XWn1ch1Ax3WoBWfM2pjLkM6akXeauQLJMA2mEBexWBhNQCnHQDBWp8Hm1HuX",
  "key14": "iN2VetywNjPs5nnjmBMcUJSzBC6RCovysb6GQJsN6EXpDq78tMtk6oNv8CWkewuPMkWGLpEw8UK9mFrf2Eka8AM",
  "key15": "2w9mzEZMqFHMzHKG5DMYySvKjsAoxLZHmXBsCtsJJi4WRo7vT2GaeQQdqgUmXaaZ7acpFx7dd1RdXLtiurBwowae",
  "key16": "rbbDnc4MkEc2HZeTLuz8UH2QePJhA5SgyvpBzUvP4DMjuEafMNZj9fDnrCfvN7EUa6b3KUy141rC8PuomAAp9ra",
  "key17": "5UiPPboesUDFmoVhdAjkuNpxskbo9hVWh6ve412kdxL9HFPB4wYtfew5DRr8vJoDD28RjPrtQxHSdqJrgNmAQSqJ",
  "key18": "5b8W9Qz5aDZPJzs8yJ222UMwnwhDbqoJUFjMaGAH9272Pa8VZnakvFqjUKodL1NMFt1VWeUdBXqeJBRVxdCaFWLA",
  "key19": "3Bx9JNTNTPm3Fmyz5VQ6UTvnYwekYeS9NkAfUeCyE62cU9fKVxLPuzPbg1ePH7mT4tqXp675T5J73QxNVwDkA4C5",
  "key20": "2wTYe6BCAuVaVT335dtZnfDYkQJgnx9tAti61k5GkRmmPH3fs94GDr6XqWV1jhWVyvAzZJRQ8vitpjgeEbJaLFcB",
  "key21": "63Q4x1o6qSAWvEVLhFP82BDCw1AJyjQT9QZBy6tuVZSEMYNL7LvE2NQn2GJkPLNCahVyoatLWZrs7SjBhPR9fGU2",
  "key22": "4eGw15xD1V6Cek66KtEcrgAHxXJKuYKoE2wbXEFDxNrkr8CiPggdRwVG3AjVWMm6zjzzNuwc8xSQoNgnXyoCxwoa",
  "key23": "3n9yBtTfeL9bEbpFJDKSnbBnqSukdGXacbzQUBUJgYA76XWaijWeDegv8fmqFtudTDEFySptdHYVVGgnKi9ZXgBG",
  "key24": "3m87QXBwS6r41oX7ZcHUHufwtjQ6eaE3ed2tPxw8SaVG8fGSYugk6DuYjjPogJoCDitbCeTJ93h51ZQdcFR7Eao1",
  "key25": "2wssDZguW45mC5AsxUwPpzR5tRUkgetKdTMxpE3BnvnqytrqFfeVZiwmbXGFSyqXWBmsXTUg99NthEF4ccn1EEFR",
  "key26": "pD1FLMTQNi95eZWnpDwAZbTV6mjLEvhpbofo44Ntxv185snKQan2UDqZceVcYcG4HafDEe2DoxTJgq76fBs47NZ",
  "key27": "4E5ZfwckPNivHw1eg9CZ6XBWVLkHFXVwddHV1Kn7Y7NQ8UBJejD3zUAW2UFAx8k6AiN4tn2xX4B1a5sRWdHPntbK",
  "key28": "4MTrxF7JuFnw5SYuHRKqgdatjwnfgDftvp9MKBwbcqaNSPR7mv7vDUivDdZMSXFRm69sUeQ8YnZEQEPz4PonyD7B",
  "key29": "2pMDGhYqLNb6CfxUKVoP8NJpRNwvYVv18tx8MA6PjZpVyieAqu2YaygH1rbhHWt9o6FmfrBCA8KhuqphdfqkedEq",
  "key30": "NCMuiGonn1JVAc3qtypoakdVzux26fNEekE4eWGEi3Q5S5nzrTPUNLC5GvA8s9dfW2pKZg7FELXkVDKTSsbj9eD",
  "key31": "56bZwe1YV8qg2m6428LsnwFZvqorYnt5LProZShVV3mLGYAuC3fQ3FEXM1Hx3iszkGXy8stqoXkDZWoQYpjcG1HR",
  "key32": "3hxYFDZuUznTd91BHuTKHwvpstCzbejtBr3rVwNWq4DyPVGw6BzScwGJnFMHDiiiu3zq3r1GUw7G7PunYzPJBMDe",
  "key33": "45mNJWGTZYmNrd4LHUjmkNYrV4cjp8TGbkCsCLjiQ5uXyQin1nreMaE1vPHpUd7TNs8joREF5TNGmyRGXUYnAKw"
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
