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
    "2st2YLLhJnpD6WzVGRaLhAy4ykDmsujTgJ6VqSxh1hzPv8FUMpb4s7HXTQCNJcun9kuifPmiUfBgntdbwrq5wAkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mV7bqxuvxQyMnkZk7pUFqFbKKkQi2XdRVpjRik3v6RYH4ATRfRuZaBSSfLhfnHC3YK5YxrwBm9MCESmY87FtoU8",
  "key1": "3Rjxiy9bHYcP4jLAULcKuWh9MMMFrqDdLfv8zUCozkr98rWL48qJNfsouimpZoSYHU2Z3SquVK8y8pZLxuBHfnw7",
  "key2": "61cbbuiML4weGFKG3m1rQaF2nahDAFjiQFbkKdH8LUQJyGLDWrnnGVyy94jo7jYvk4Zy3kP9TCgfsQpsSnLEELcS",
  "key3": "rJztyENwiQdGZhsJnoAfGz8bTZssroQ4hBynyikjdQ8Kf2aViy8W1LSHXcjLbQNj7JjXxWK9d1shirZqQYeELTh",
  "key4": "3qtU6hwdhf4xXcyxjTgpfqtevEH56xyGvwDxGxsMUuGisbNfSqxAhpurHN5g3FmSaYXoH8Hf8GUo4yCGGZUa5YMZ",
  "key5": "3DyLuMcqWouMPquoLUd7cK1tP8HL2WtVpG6HFzBUM4QiwGyoN68ZLom94oqvtVEd2CWhhUxstAv8uGkmGR5agARs",
  "key6": "3FrnXwgjj813h8a7wjXy5fWZJn9wbQBNFMXv4pNT5JpS7QZiFH9HLJ3atoRqQ5mVTtiJjS49b7iVWvou5kG6rTHE",
  "key7": "489XD329hgtHXsaZELuSbhGoj9woBh1mNMaQX8wmLxNLg2vjuTABNBoDpv9M7BUX8rvssYwXaHpY2WsebSBRtwF2",
  "key8": "2CrFmnE8czcuEFSGB4Q7Zm1KExTPDo8cPceuKggV7edCnP9uEfUmD6PA9VNVz3VvQqXMe3925jtCPRMaC9KkBSw8",
  "key9": "2UngTLKyJ2uWT4UVA5EuqaMtJjwCX9CRXavf7Lx6Q14rZo1ZmLvcvpKqGWPEfmSQS2YLs8BW8CiyJ5PJxqrFGPPA",
  "key10": "5GuXQPRk2nwpwnp7KBvEsKU6mSk9MyUcchmXgZ5EGo8N12mhz8Hzetke8httCjVbK77tEYtrud5M4h4fLkDovxVW",
  "key11": "5uPSrKDZPdfXsd2nSBVqkv93qXSmMc6zKDU39JBtKMgVaQBdJNJm2VP8QA9R75EvkJLx7rtuBBfxZRcKeQoNNME8",
  "key12": "eFgLxGtF2t1Zhs29c4NaW2eecJerGjim4odJ679PSAE9z77xEyNx28G1fFiSoDNnGmjYdE5xrHMYd4BDwugUJ2f",
  "key13": "4fdxW6veFbePsT3usDSjEX3jXeYWdG1NhKKexPYdYJo6dLfKz27rNjf3oKpXcbLQUjsDPkDCwqnY25hXt3UutJGX",
  "key14": "5mgweJAzqEpU7nFiaeaPu8g79AapKRChjrXtoV3v4tSkvpfHkBoN6tMaFBxMv512mCXXBoWeCT2dmjhKeeiNaMzr",
  "key15": "5ed5a3MLpFdUrXsoRP6SYug9Wwib1W6zDJE5Kw159rwvnHhvC5WJBkmKPDAMRJP5NP9SmLMygWiLoNT6DBL6ACdq",
  "key16": "CuY9WWKf3AsNRrybMufHs7dcYRdVweJCpaU5LLivk8qyaNoJYTsJbBcoVMRSEW9PHhd2g8mDwcKn5vhC5WQtaaW",
  "key17": "5TtrDDEbzhukMfMH5xjWVKtpAxCUyn4Rb3HfUF39opyG5cjQCyPassBTi9JhpyNV3xMP3nzFKWhAn2bf77ff3q9z",
  "key18": "5UCET1r6uEtg8ySFsRjUYnqZrppEdnYdEuoZNLmRqN8Ec5zhrERued59cqnLuQziWU8y63Uw3fyFmePwG7Sevarw",
  "key19": "K3z4KFdRevvjfxF8kWBDawqtFEBRbrPZU5MXeWo2hdKjUCR3QNn19rZ7c9MKcjzinzQiyD1svympd1SNrVRkVfS",
  "key20": "2QrZhMVFRUJtAqsU5Q1KcAhsnUSuCtMU7zzRXMDaMKHNidJZTnscTGNGnoCPzJbXjRQpLLbaUb7nSJz8NE65njnZ",
  "key21": "65NaWTKh1ve1Xcf4VZ3Lowueiaxj5gNp5gQTCBFk3aobQrXtrDDpcL4zTk4odRm4RDovum3vDNVctQv5DzmU6qMH",
  "key22": "2rFohDAv88GiMm6EDLfkaTxy8Te7qHFx9qznGoAHUMPTmUgp2ykGQUyuSUxT4hZ1yBedz7x7dHzCF56E7kXX5Fai",
  "key23": "5tF8yyotWc4JHj7wnEjGodh6yWb8p5qtj4wukN7G5JfF2DAKbi5XXNSVioZWksqRVyohNMH6efmxSXSbEmV3hExJ",
  "key24": "4acC9FnDSQ77ueruFRwxLYq8Zj1ar7PZynNh9A8MBjuYDu1baSz5cQ3rnAJKztYM57Qyqs7EE9mrh9tA3tSw6KUk",
  "key25": "65kD41MGDmmWTDd3NLsV7nt1bqsHU1vG5G81mR2jBCNM1QwEU1sw4UxUo6crut4gz27ApbDZzDWHHQgVxn2HhZFn",
  "key26": "G2eWmk7FBbzNDdghWdgJB9xBe9EKVpyH8ZJY63r4nS7RdHRwxLF8APEkjqxXLnhs686AaRrDyWoVSZAbfknTVFi",
  "key27": "53jVhzsLkxVTciad4beXy4oioaY42ervGwM2tuFq8DxJ1jLZA6kjjxQis8JBHaG2EaFk5fJ3YeeUHZDrLU8gDiv5",
  "key28": "4TF4y4SiGQBL8uBKSQ9u7hmwX1BQ2z39nPvoHRGppWt91PsEh1XgkUAnG8uQD9EBH4KZMPubPyBD8Y11P74uLrWN",
  "key29": "3BVebfAnChyEia6znntxUdT3CGxpUAc6jMnfcao6kVUMkdMLLCgKYucm8SPVJoK76iDuaRZo8UCcxwXfc5hCcEip",
  "key30": "35tvjpYapZXTivgBJMgrGah4BNWaAh5Q2GpuNo1oeypXp8MejU8T6DjMQKCgDSSGi4zxxf6iZQPdnfpg5USzGTZg",
  "key31": "6231SzQeoVBBNnnse4MZFdsTuTDQm64Li8BQyAgMR5ppQfMZSaDSzq2ZpPRGKzJf7VNk6pZX58hNCbTJ6MHd8XUF",
  "key32": "5dSSoA15agrashC8MzkEVvasmrFtRGw7fXRqiSRpV4QJuRa3T2LvwpddpZxue6R7vhk6oABS74JjQcpRJLSkkRMQ",
  "key33": "4cNiQSDCxjx1ot8cnP9JUfJpfD8yyWE7LpwpxwJAooGd6e5FcN7W1j4JrqbJywYfYJQgKtoQtUq3gBoiJSskvbzj",
  "key34": "5sPw3xfJm9FSjKL9vsvwSvbRFCfpCM4ERN9toFjmMPqiR3RtPN5ZKgngZyMPJ88Jhym4qjopNMwuk7WZgz6RxGrT",
  "key35": "36rMMD7ZVWgzheHvoGi5azMWNFFvrVmCEToUMVyfWzDQ292Uiayb445bDi5c25XYh6BQWvL3p5MsEEJSVyYbQ3HW",
  "key36": "2h6cHY9MAB1fZQQnbUJ8969FX71cyc1TfbPCKBKyatLQLYDXFEEFFezCARU9vJFnrjPB1NybRiwnv4eCa56J2Scj",
  "key37": "nDQrqLwpAAcFXqXheK8fXNbbKhycW6KVM7aoi8dKpMUFRy772b4YN1DXBz1C9Hfx2Q59HnGgrwDBaxddjATeEuG",
  "key38": "5idmqsHHgRLCjxF3oWZPVJzwg1AxFyh1Sgfemz4n7DzmrspwpvYoKC9XBYJnVp8M2YBMCsAkbR9ue5uw3bVcHPNQ",
  "key39": "66zZYaGvgPkPNe1yS3nX5gR8w3eQrzsZ3T73XuXNqNXbFRPsxLSgzH5w2yxjJDbHvomzkgDLmQUQ66LL8QckmqYp",
  "key40": "5TKAZAN5YguAvFPrYdHoWcuzCEBjRf2bCknzi1vKZmfBBQGS7HY6oGpafwHqcrC5GwWjomDvbdHEfHqyjpHbCKBH",
  "key41": "3r8d9NAJbeY1kqw4J5PGb9CbKzYiq4geGCbNDTvbdZKo4EBctvvmDmtV2YcU1dxRQc7jj5AoBRRk3Kmbz61RmjE1",
  "key42": "2kYCwALmrFwKJmyZ3S4RcjmdhSW1FRsrM1SrD9drnPQ5ZSsnRSwc46jsEdrbuTPWJhyMBmBFDxuGR9zryNMHUEwD",
  "key43": "31jdztosfmyjUrhTK2P4cUSnni3EVjqee9FazzXFSaAHt6Y2piHj2EQzqASfjCsaP4zQCLqs3Y7GhtyLtRbAtCJA"
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
