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
    "P4qLCrwZAGnE4NZonqRgGLayiuhADdK9R3hTSH3K1ZwJA9fmnnMmz1GMK6h6gYvMn1Wo2MzDe2X7t2o3Ef8XBgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7H5U5W2ktzBGygXSnvVfPoBi8dzSRJbscDjJDcpvXeQRrFRF1e8bqQhoQHkBVTtsVnhdCrxyCWkVHvHw3WbfoBe",
  "key1": "je13WEiBgSvzj9FPnqHXoJUZTzQrx24tHnqoJ4UAjMR8QSZKF5Z5WkF4wQxeyPPmxUJxJ9XUWw1248U2Nfw1WEs",
  "key2": "4T2fQ9vcqhxuWA2h8ZFb7JEGDHhuiPR5W9yPxW9Ehy3AVcvxArEJZ384omRpF6WBEi13PnYRx3XvjdB1ZuS5Ngfb",
  "key3": "64wTRXaX6yb6FZ5SNg1kqpqvwvsQsuzCEHnjrKmwEeJYJs59GJfkk9m27t1bJWUaj5cWdX6fQ5hnYpYPPzvaiGQR",
  "key4": "4TiHU9o6MLb2kN1L82anYMgi5RUTLh3XseZUJuByU34zMgpva63oSoBDHgG2zft78G5tkyynNX17YskrYkLP7hVQ",
  "key5": "nASCuPth6JZZpByC9GRgKpvpdmGKNF593bgwgQebiqtgMhuov7aoHP9mNnPPGpcakXqfoBEeuK7vTtz1woWjCij",
  "key6": "fP6BBRoH8gQMsX7GGhF5qqDUbQGThQQkGoWovHopzcWKDRHLYbF8iaVAYPjthHnRU5LVtftAfVMvyPq2Dbrmngr",
  "key7": "5j1P7kTo5R9mHvpAt2tHQUjhzHj6WpQNvLqu3W7Xri9kDRbguryPjixjbMcnSWcs2Z8yEqEyd4Wrdf7nJZJkEVKs",
  "key8": "2SfwTxX9TYv9jUbSsEokJ5NBvmgrVddxrwz2gRmLTUDqukquDQ3MpwhdsAMMHJhzGuYzYFcswGqx1jmcDLJw9nbi",
  "key9": "R6bUcFihXQBdHM7sJGG2jWHoSDLQxTCdm2mh9Foay27NHz61wCHbRkzcsbXEdPnB87WHWbHapfAAn8AycCUKhYr",
  "key10": "5RNdpNgyotWE5q9cqujQ5hh8HLPdetpN1VLxddBTxsrRAXj9Rqh4keeXu2Xmp8z2LWb3BX961kpdUumVoGhj5tSd",
  "key11": "5V2ptcw8vvG4SYAagrXVVmC57rcjCyxYHqzAxcWw6z9jy4DLriuVBgoCcjHF2jdLVGXw9eZVm2QuTMX7MaXYAjuP",
  "key12": "3UjPkA4Tp35wFaH2BXuCktTWJ623Np6dDehvu5WgrucbgrBYQYopKhnWFEzBx5eTqJkyxFVq7jMaRR6jrnRf4JFv",
  "key13": "49biKD5wtLugBkS68iCLWZBsv74be2hjSy5f4ByJfmTyFUdoLcUP99qsxadt8iqEUxdwMuwAxPJ2VyQZoKUJkuF8",
  "key14": "2chFqt1NT16x9fHzH9wcJwGg8Md8NQaAW55dDuf9TpvEXphfebUsGfuXPtc7dyztuU1bGLLUhBRofjG1i7oDbaUR",
  "key15": "3ymNBAYUnT5FWdsv2X9yC7RGdzrBALQ2N9ZqYHWtDw6aTuv8pw4cUY2m3Yqit4rjUWzE2iscyTrkSvp6rsaSB75k",
  "key16": "5f9Sm6WLUcL1LeMKZUE4vhte1Cx4V8obHFYNbftHe6v5GVMa7b3nn81n5ZaBjBBvz1E2mV15XUkaykBKVMDFQ6TR",
  "key17": "3SwDBsumsoX4hPcyekvcFwUMAhWcFBBSfhgMkeUbNWVC65XZUGKnmPHV3cEwTabPsZhp15Vc1jSFfJ63KrWYG4f2",
  "key18": "5iKWemhxb5FqqvETD959ZWQaLvsyH4FAR7cEq7p7RN5nbX8XXZraXkeKLEXsZJNMnZFYRN61wSEB4qPbs1XzD4mP",
  "key19": "2Epd9haipKe3gt1JVJBkyJuf2e4tmLULttXGQunin1WCDX5K2WQrd9crie5JWz35UtadUyD7X9SNr77J7KHoCwm9",
  "key20": "5E6dBjovBPoojLfarze1n93SYU4gYimJsjtWqrW6mUWVHFyLS7J8d7UBQKtg5VfAeNX8jW8AmSuocEWAqQRPzjhN",
  "key21": "5E6qutdwCNjPdibvtUbQQToV9FyyoXKYwbo46JpADZG9vq5pS9msTo2a9MDMo6sgfEEGViCrjhAa4TxzhowtTpZH",
  "key22": "59ac3g72brPu26auY44ZLeo5mpxpBpxMnRxkptzXqc4Co9UebYB4DMPwfjUX6t6SxmYodueUkA88Cx2QttQ29i3f",
  "key23": "3CvB73Nk3X9jbrsG3T6yrsdn6DpDDuH3f5G1eT38iodKdf8QK5g15nTNrjqs2XZKrWacAVJXZq1wQKCX5LgjK6NE",
  "key24": "KFNJtYWpQvxaqDtVMKDCTwE3S35JfbuyRqk7TDgnLcCc1rWnwLYB38c4bPitBqT1QkREqMhh3rBsFDVj9gtPEya",
  "key25": "3hNBm4jbnArdfZ9LxNvQkUNm3jvHQuGsbtrFf3nB92Cyj3kG5E58L5vEFXNQ3o21abTX8nXAmfjTJr3TFoSF5YW2",
  "key26": "24ssMf47fskJhMYCJkHUDLJ3aL26FNfXZZtkrdpLiv1e3j3JtFdo87s2AdWLUCVUc23syc8dpoyvW9VcJnTMjLko",
  "key27": "5tTh6wDP8NbYnuX2bQFYa1HtME5WYwo9YNaa1LZDkZVgQ2aDhXR2ccsYBay99UJGEKPczXJPzdPyqWUUbtNZF4ho",
  "key28": "3yaSou3rxJtzRx9772dosWofVHeHG9NdDQAw4kmtWPHTZdSo7wfUm3s6qPzk1qSQDQE4x6ZLEfHi3xsy1Jkz2Vrb",
  "key29": "YjuUENufE1kFGMCmMYzq6AexjuZDtitA4XQTcLEBhNtamvYZ1n3nsSB3b7iLktjZYedxn2B7tuLV1AWrsYuKZpW"
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
