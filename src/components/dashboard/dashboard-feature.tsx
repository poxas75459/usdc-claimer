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
    "Xq1fvSokXArFEvdKv6Cs23HUTVa3ZPTxJizFR2udrfsXR79hGSfKCXg7n9sFbdKArezfHu3N3betXF9fQC7PzP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55kYWsJM4mhngT5fN14pwYidEE6yArZAcvPzZT4dAacSke8W6AUQHHf5e7yy1oRw331xnCdogPBEk2w86vBcE3tC",
  "key1": "5rHsUJZ3bbxNjVMe2aoQ7zLfq4LEDWrhBdGBuM6A8MXeJPc228kNagTfKt8PrRWSdKLP2NZanRQgAYp6Vs7RRvHs",
  "key2": "3UEs4os8R3N8hHv48fU1x72hpX8zhEmxcPqwL9Qd3SjWn7agEeTNFjTcuoLR87y2CgA7oYtp7zgucfwC3tQCT3rn",
  "key3": "52e1HWS4gdwCtn7rY6Vu8tf5QeuBFqrwtNE7R6wKq9q3PxwUBoEhz6v7h6giM6YGdRv9Pbojukr5uepMnzXvT9Qf",
  "key4": "33xMGYGVpgYM9YbmeThnDBkTPEGjcw2q6utiyT6DsrWp88EdMEc6Kz6Y99eyhhaurrvcNe1om3H3X6tLwRE6WVNR",
  "key5": "57nYEvKKQy9jXR3TwsqLkGD7biUidxfVR55ZRssztyYCFgc3KsUba3AC4gFuWscbi4w2VHcSkHf6LKqLC1WpjRcb",
  "key6": "2G4G1DoXqWJc8h6iGr859j6V5dia9Lyu4PCp5LhE3pEMX7G7hA81VqTrKnw7tYx5MaXYng82Pr4GkNRTuxyb3TRM",
  "key7": "AhHjDgiEmhj6KVDs7uEhL4fTCYFTxAB1RTwYSdXKYZkr9mYaoeVRjDL4LsBpPo16nhfg8344SjghPBZGVWRFNmt",
  "key8": "3gZenCorFPN2CFKmJmtY7vrXiKsNUSNJ1wa2MoBeAcgg44yTFu8M8cak2fkjc76Qngb5idSjihfywNB3dL4ZJyzT",
  "key9": "5nVsE5E9kph84nSAB9Rq5QDGoGJUyizma3Z6RFqsPHnLhvUpPyaXjFuSHcHsNeqNCx1QNzsrXPvU3ndzPzg3xWCe",
  "key10": "47FQxPP5kC9tY9bcGNcnrsS31bZRawaVetjGqpYCxgLD3FxVR7Cg635J3H4qWjJj31ixWxDQZ5peiohh1iND8VKd",
  "key11": "4dkXVDqjpzRRmbxAw9e5ECQuLgjF7J55tJvZYp2iEVggwpuZzZZmQrRRyzC4AwFaxpmihGeHqY3uBnHZEx7TZo4X",
  "key12": "2aNoW1rD2YjefsVfumcC6oQqiXbGE7NA6Y5d8qxtDHyK2kGCzsqyxyzQfH5aFrFCmSiuJY4DkX8QjzpbLR1RBj2y",
  "key13": "5EhB83bSoCMVTmD67BLZ5RAQu3MAvVWhkU57Gd3fFcRRMrzcpxZLL5ATRA8Fu8hBtpNYJcaseD7HgvpwASV2twWx",
  "key14": "5FYBhs6wLhZghJnNbgfjmp3h91y3EgbKMFbCHbhaBacQPafYr4Rs6uTBPz8rV6QY2rertbJsnPr4ySm9Ka86ayqd",
  "key15": "2YvhkMQs865DbNwnm3TwH4zd6iq2ecAPmqivqApCuGVoz7GkkKLc9Pzt8r8fWr5aV3vbZpEFmobDnredwPmS25Bg",
  "key16": "65dwPWgbiDFrYmiQC6EdT5msQW6FEn1KbGxeCr9pXbFBTB2hn2ghomeDMv2MrZZwJw6hq5rMmgxoeCbVoyeoPrqk",
  "key17": "5N96mThg2et7t8V3Wf7kfV6LGAaXhQkqG99LDc6vzmJmAXPHxqVdE1ELnSE5CKSifL2nje5KPwGdMkqQXCwJ3ujV",
  "key18": "pNBpdpXPh8gufbav6nKtFVj8eDYTjeSkragNpMH4vpxSZSSScjeoqM9PxcG4p33dyRCbpf2BL4bYR3agwPrFKKU",
  "key19": "4ScCLbvQFnLQPQZ1YAQqs6oUBgUuK918f9cEgyZhyNUGQsxDa5Jmx7gPHDQheA14UeedwJ6LFeyrnNM6x8fkdx5x",
  "key20": "2nJfifPhsJwQVm31HY3FMF15gHMV1TiSvHPq1MDVbfxvoUCTZwE5uG2e1GtLdHwaPemgR1jx2JkSdJHLdSaiuwtT",
  "key21": "62UKRZWJuhgq1vKn9ZKeBiMW7XrXgVhjhPrzimR4fsLs7pK3rVYnyuN5qPsDygW4ytc4QniuWJpcSiBDG22Nebuj",
  "key22": "2KBVEBEjBoe46jDVWtwNtDrEeFCA4UNC2xgzsuUThdKZVWRXrZj2ixp6uKrwm53gALxTc4A3pQqDvzexahhexfoC",
  "key23": "3pQmPSSLj3L8fezZQbPYLi7qavmMZB5E2f7yVLaCzaH772UyckRmwssJi1K86LGtfW5kSpEZF8ZRjqAByrvfJ81U",
  "key24": "G4XWF8brkfV9y568dCsWGUsUeQjBnZVxc2nEm6Ye4YQ3FyJEp8dm4mxoUAtmsPcsLH3Km7CKfc6gSpdPvGsbTHE",
  "key25": "2t7gx8ScMe32s1ENwoevMgntzYSrgjgW2KtH6zf5M59AhSTDs8sJ539Vt8mcAHKYtoBMJECCvbdQEcjraTeKbNWv",
  "key26": "3guzaDBdfhoAUFzU5MHagGiCPRUPyw7ybgTMoKJb4xLP1ssHF3By5AdjVP7zWVDx3iFhUHCcitsZ4c2a94Kye7wX",
  "key27": "637JYem9fCC9qXf2RL8XdEonskNawDbkHvBzw3EtNHeG3LNrrjQ2LzV9XRdszHcrbFLts418Wo9M5rAmwpF8GQVp",
  "key28": "4NFA1SPZJuKbqEsSYyZFRiLWEVuqgKFfgBqecpBQPpjJFkPTbvTEu7MqtktbKJRHdJiJQJpXTA6Zi6EpLNmooE2A",
  "key29": "5VP29Se5EZxLak93KbDqW7RijHngsMYL8HRYeULWf5d34KCmQU7P8ZbBEJZqC4bsvUou4SxkBxUwMmSJZXvxGyPV",
  "key30": "4izKWnJrZUgPkfoXoPwUrH6eXqPR1pGhgYu7hmxwziSd5bRBp3k8qk7oLpSGB1qe1N5hDaWvEDS7h3D8NU7YHuXq"
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
