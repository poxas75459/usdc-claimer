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
    "4rBTofrqWtAbgbU11nkhGEHgCkwwHwYCpXEiGiCtVHU4av5CNChjVuqXQjC9fxbvLMuGuGS2Xqc1Wnw5cy9AhtQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ttWUHS7zZin34Rs843T6UnAgdp2PdBq4oFssVH2sTpZpNQP145p7jJwmJ4gcj1o2NKEzpMxtmreACDTmJe1e1Vn",
  "key1": "2LFdjpBQHkfteiJZkU4KxGsQaF4nyHZrgvmrJJu6VAvEE2n16cRGG1v2fFXDog8LHHZW5KVokjWYEZp5bFjUvUtM",
  "key2": "5cMma3xuD8wESmzH9hQQke5RBnsWibpEqeNaxe8UozfG1BMdVC4ddEzHoQVXWPjNtnUJ13CpiFAbTkgz8GYcQSbf",
  "key3": "5GDKg5Jeyb1a4n4CMPXTBdbQHsBB56fcYmxHS8io9A1dbGbpCHTLtsMGBSg4hbTGwkQ5JYdVi66SakJ3s7nrM3yP",
  "key4": "2YbFVEQneoezYFSCuPGK9zCTQYFLh5nrzTJiQkCLt28J78D498v6gAjqryaxRus3PkW4d8vm6qvr62nYe85yiWXD",
  "key5": "5DXPY9ALAhjfmzLiPy2HgC9xh9yigKDgf85TS9Zm9G8NiSRkPxbubDZTzjxxt5CgMSKBbcQjxeX29kS1Nnfj7mPJ",
  "key6": "3xkLQFnj631Z7dAsc9Wya63kQefbXYfqwGN8qpU9siTPZSYGkW8zXayJmYrzmUwVy1FxPpaiuVT5yXSLWrESWwLR",
  "key7": "5kQkNUgzewHYc658nvsyd8HZWFXi98rKFju7KEoFWz6u16ZduRZjdU8LBYWVzxmqrDVdeUaKTZ269JRSawDfzHgF",
  "key8": "4PvGZJkLdY8awzvGZAnd8o2TTbVw5GKxVzcRbJt4MudAtuAzGVfSdEJ7nqJXDK3zm3a7J6gnykSA9SQq3tzjSKBd",
  "key9": "4eX6qGPkgTH8MN53q3AUuagmubYApVBFH7irKxYFMePx2vXu1Da6hvEv9CyVpoxmQN7tcwzLB67JtJNeZCxQdVho",
  "key10": "5pkqYAg8RsrVaTxP5G2GaDEWGRvZkN6neuVZ9TL4NMX3WkDNVC8MMKppiMciiXE5DChWNtro54sqa2CAk4JzYzvj",
  "key11": "2Z3f4g4TU8N135ijPAAsFMzVaAKjgDC4km3CfPjggEKq8YwwCyd4k398e3FkXUTBrthVEHgCPoBpF2tXpQHnM5nU",
  "key12": "5Vc71g5HyQsLmzuvrZLWsxcKZqHWR1WYgqGPcUcXSkNLNvRhTqjbhz9KtbKnbwcTpNpbq9dMP4MrxXB343GLT71C",
  "key13": "GbRZAZYvDftGtfnXiNdvKfWYrdT9pDBRCvM2mtUC4jMxJeZiLF8Ebwim2zigQ5PUZvvkRVkHL4VrJcYvZNHhr1e",
  "key14": "4imxFxZfbxkSx9VRLT3NpTKqHnab82ueydXfC3JPwWDm7E7j2L1FLsgDAB9xbuy3EhdV21XefwmBWfaBgbzeCYFo",
  "key15": "yyKzpxCYFgspp3jdNDh3388tkR49LEUQduK9925uetenuX4u9BUS7hkLSseHKTDB7oQAmZEKkWS5SN3nFjVRoDJ",
  "key16": "TPj1rcohuWsaUQHb1QRDezxhJgKLBik7MfdbPW1AyjogARd7Qim1qovcXZqFwHGDPpSLom3oc2c5WbPTSjcpyX6",
  "key17": "3uNHTiSbC5nv8pR4WXWXTZG6n2YUUbjETDBevK3QFevQnaaamPFqgBNosxH1WZEm7ftkPZ7NSW9VwmRjtdeoF2MR",
  "key18": "5n2VMjNmQXWx2ckdQJHjWeJJSMekCYCSy2Btba32HayBuCGVZiN3cmRS1651BqR5m7cPog2Qjb5NijNSqwvj5n1A",
  "key19": "42V5CRUH1q7n9gr4KbTyjme9kKURxFCynivaeFVy1j5MJ8NaFyZptF4K2uJoK89nNiGjxQsmUDJQDRbN4ZxB21xB",
  "key20": "RA3wKyYj9dm9bkSLpBPmZ1y22SwBWjhDMbqt46511Ccs4jbqQgrM9cd8SynqmL5TD1QD72AWx4kAb9KUz8gWuZ7",
  "key21": "5Xn8SJMmrHZ9KSBiskmZCSMpE96UuM2EevHyaS8QwV38vT2inj6ts16ncWxDo28jVzLmcycooaH1UTY4sJRi8dwZ",
  "key22": "64dKYVdHjd7cF9y6hxzq3daK1QPwCJpoYuFYDUv6MRkfNoTmSubSTmAcLjgjHHmHYpT3wLNoLoS3LBZZaWHmAgvv",
  "key23": "23134mmx4gZajPJArRxj5yEWPDWyYNwyNDSWCjRcE3JVxUxbnWJQL8R3ziw7GUoiZ1tnHhLtiHUaj5Amf1vhv4g7",
  "key24": "5Yb4D6xNJGauAvYfYepGyUcPagUuFCd9PUYZ4CJRq9yf7NuHSNpXcN9Xy9a5C8oDP7ErqkCsqmhfAv6jzSt4nM5o",
  "key25": "2XSinygmowDfHSzKEL88pU1Ec9jV6GUvTM2CwvS4is2FcTE3vMzPF56faCEMmMJ5BpEtd9cZo7NKaSrgTAfJ4czT",
  "key26": "3FkUa46s4SNUVYsaUp2S3mLvjwMx1LB4f7uh5MeFMRQNm8ogmA95iBBcYy1jH6GgpQS8DXdTkUnZdKbzsbaDgxvB",
  "key27": "5gyMvGFqvxBktq16ACa4jQ5f2mHJN6wJpBFe2UpTsdhUUQLh7PkrJ3VP5xHENDsDLZ2bs6xqByb1qPcfeev9Ce8G",
  "key28": "2rqXcpwvyzSH7vWsJ4kM7T4Y27PzJbz9Wsm93mcXjtCzdJxQZMK3mzg9Pb6vzPC1naMpKT7FiJppEHgahayga8EE",
  "key29": "3f4FMUmxneXjhHrkK6wtMm1SEhrQTiXuLvAiE3v5ACDNCPbpAyD1BuuSekrjusLYNw8oxoHd9ouZpQFUYckMWK3V",
  "key30": "5mH4DFfCcCgg6iAjDakwUECUz9uGuNRY43LhTpPhw9CatcpBcY7nmJdSHF83ZgcBxN1Qs3CG8HbwRn5xZ3ynfXCi"
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
