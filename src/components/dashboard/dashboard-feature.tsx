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
    "4QjkNr7Tt24hGEURidkCBN3zCiyZ9NCop6WN9JF3zveNHBHTgSqDdyKjamL5v6s26U46tpzFKtpvL67jAgdyb8vJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eDgyZbhCK1TS2tk9NXYKxxvADNwmGr3Wm9RvhPM1PPND3XrPMkLk2vDZeu9ktMxk3VLjYXUM8wSHfqe1dyDLSHj",
  "key1": "5GRYKT5wVKdwasCCM8GJ4JB29TsHZDy5vZmanceLXZcGqVq4NpXtqk19Q5MSiEbr4uCweUsFnuZrxayW2igPgftJ",
  "key2": "4RwDgqjUu2PJC6gSY6G4fKrNZ7HYgLDQhEcLVdcSg4eC6iswrXysJjCTHGgabbYuNbRxCqDo9uMWsRGshBStrsJ5",
  "key3": "3qdmHA7xQGVqMBFyfay7myUuaNxoVBdQWTxhZRKb3pUByt4T4rcwJ27Q1Me45jw4S1WE9rzcTqKKJsPedpmZ1cEp",
  "key4": "5F8fCDhiCE74hEqSK38Trb8173afcGaevdKqDwjGrKQ4LwSDZswBou2nEUApw5pAujGMX2XSyeU3FAKjizF2AQb2",
  "key5": "3efnF8Td6H7kpLPvdjnknsx2EyjQFAwwMoUanssLSF4t313LExbHVpmGpY3gvZSSaaqiupn3bti9vTXU2GW22mZ3",
  "key6": "5gq4dP2gsfMo6bEepnCTHLicMwmJBnMHVZTjL4TXU4jN8K1wo58wcdejqy9MrrkXqauGuKEPs8Yc4BDCSZP3GtMy",
  "key7": "4ytnpD5wjNmLChn4frrkt1JpskKUt1CNTWkC6ZrS2KZFYiFGRQK1z6ZjoZ7cPxyFJNqdPhQ23JxqGKZyXFNHYC3o",
  "key8": "3JXDPT3TtvGvWn219YNbodGok3b6SLTWwA5b2SkctKYepWAN3g1kugbFAYfpzSh3UdEMaHzQiLyQaPWdp7YKnMC5",
  "key9": "38eKmDUTyxKfZ95esSdTfXBxwtmsbQL6KzfWwMAvwimdUcdHprqXVBZarHM9VXjf98MEs5ruaWRTZkE4JxxPE9GN",
  "key10": "4pkpqDnXH32Ljz8JT5nNV9SayDjRtLHmX4TiorDwoN3FonzKfpVYtJcgGTdJpUSAL81EEmuVJEtkZbitzgdu9KXD",
  "key11": "2EYJcHtnCwtitY2CqBD8xPgJQmvXm1Ej4pfzE4JJHGxRSAYJZmUYgPk5pTEsoJcxrYCQd2v7CrmFwzpjTvVWVx1M",
  "key12": "58Gv5df2Goxt5ucknp5yWp5XDWCHD8zmdaviWAma7w2XThpC4x5QFHyXQD3Mb2DopR8YtHcMFBsZW8xSVXtyqVyT",
  "key13": "64fFWFG4X7PyfhRpzb8FV8o73r86hem3ijyLxKMUNbtDabBvwA7CgBN4MGjA9YEkjZwtvBzwBtFXZBDCAvaXkqkp",
  "key14": "UWJAn5YCQgZVu7VYZsoifXPbJaXCg8kcBu7aMbiu47Fu94Jm66YjY5povFTc9QzgDRzA9whwnNP5y2XSRJRpkpP",
  "key15": "5JaTR2FS1JCwwNgd91CdK1PsrmQXsFy2ZLVvjzmAm3Y2btJecgQ53nEe5jVNdpJhAxfCnHGBPUe7aVnrKzB4g279",
  "key16": "42u7jf3AKcMFNwqnq8y4NMfw6QGLU79NyuHsySemXx2fnyknaHx9AioohUVhNBuLXq51r5WUgVocaEhbhm4zTqyh",
  "key17": "58PvmBDCqunsdcUXT9Mf3ns6JuuKFCvzVDSRqnXpvgTkcRUg56ywYEzS5UR5sGj5AsJo3QFCx11ZVDzyAZkXuWhR",
  "key18": "4an2fEQQwXgjUZezusgKZnVzQvZ4ycFq9nGBgufLrkzBTwtUNiYkLFRe2ziMxdchnG3SwxyuKVwXT9rw6C2Hn7C",
  "key19": "49bmfzBWEG6AJkwa6JQGxJoNBRXNYHA4EY2niV99AjKxY7k4N3AbTCZQ6tbkS7WnSuBiYMUnLZXjeojEbWz552XV",
  "key20": "3E4Pt8YB38JaCQmv3gP3cc4TKccpsKo1DAFNXQafPsFZE1PcC8W7A7z5zDwzpxbXwuScwy31PdnXdTvR2LVB12pX",
  "key21": "2qoqmNMMxwqQtErK1SJNLsAjjfgGoLwsedpy9RDAXmyNTc5DXGUcTXs1KVFxqKFnF3bx38zpYFSXEpaGEi8YQ5vg",
  "key22": "2HZ4kTK4viTPwnueMfFgo4UF2eav6Wk7F1SjUUS1f4FYcs8nTarpfq2LQmVSJ7JfwsY4czxKs8LEkqWYFCWWk9Y5",
  "key23": "HK3XrgwfoYamNQJEQHLwtc7ZWt8p21gtraidVsPyASZaGLku1MLFLBYSBydfgzKNu9GqEFef1cfzpdJb4TnEqRz",
  "key24": "4dqonFoc34RhMBvire46eeu5ZYwa1sw8caemNeE3oWZDyeHWebvXdzMjoAFn7hShPxh7DQTRc8CiwLnjLKbGSPPc",
  "key25": "42NRjnMDXj8e3HPzaLpebXo3ganni41ewjwoQmwQkaBvnXqaavaopUVYYupSwu26bCXAUrZtUerHppNM1PadsQjK"
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
