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
    "3jrDeKgia3sopoHZdiSq7BZuhdkft6cVbdz4hE4dNYx8jBqVNEGH66ZyhcuLYE18j7rCj3AE3RaUdEhoCzUoW6ni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fytiLRBnYVB3ax49UrjAZi5vjFUKWPTuRZWsWF92QQNweEJpS48stzUZf95cvjZXweWXLpyLzpYHkhsKuuPjMGC",
  "key1": "4wNSW9h3KvEeBi3CSpJoRi7Te1F4ckW2W9B4uVW7o3pYTMdTc7vowtHW4qKo2pPjH8LGorvAerzhqJW5vGoZhHhU",
  "key2": "3BNFgiL3roJYo9Z6DnRZgdPtQTnaMJtoTX6bShVKZwZR76pm3FuuVvke1TCpHZY1Awg3ZYvrFa8oVZ6m6jn9fjdU",
  "key3": "44dZzNK2XV5zuCbQwUTknDiUADsrpAHqQG9xNvEfKsyyUEpiFqgVYz6gfC8eEb7M1gj4BGEmoRB9a6d5ZZxyjm2F",
  "key4": "3PFYwkR9P6Qvesv1zDNND5SYqCHTdxkCwhLBRwZf9DeXFo1G7AohdnKG8osvJVdw8j3DmDje345u1cRG38NoKZe7",
  "key5": "4dBkEnnV9bqWB6REXnr5CvbakcHib4JDAzkLZg7eXmspwDE9uw6y3iBCXzdqz78XRQ6FrrkNWo2vbYc1fm5yXd7D",
  "key6": "3erk4ZS5J8ZA9k9mDXLAU3PxNMR18297EeVASYVMPiPa11rkH1PrMdbvXA5PmnA9EYF1TxbRABTzrECvvTNsKScr",
  "key7": "3ziyjSAhUeTaJ47fofrEyqrBSk959mRcPYuS5742jZWPLDByDuQq7B8h27J4aR4FWGJUotLii5Y9soduojSfzv5S",
  "key8": "4SWvafBphykiqCnX3HJCxP2RTmxpwzTJq45XJ7WHhZi2Vf6Zs9FCubNSqjrqi2Q2N3fzSqZWaoUcyW7toKfCXEWX",
  "key9": "2KL85jtHHyUDm1BJFxG7uNYysPvJgSsXgEM2LnKh8XmynWiRgKtTTjtLqsUMcDrsSKKshijw1jkSxQbpkLvLUDTP",
  "key10": "5KrBe6D9xz5QndnrBjoUkpp9aHQ3oCWnUSrhHrTSLjF3LeHZgMsuAko4dDxznzDaM7bQDEX978vpR1qLtpmstYPC",
  "key11": "4KGFKgcmD9G6HNYZQbzmMKZKMJ1nVjTkquCBxCFF2qBPRzPFsJBiKa5MFjfzCXaM97gKK8nMkk3XWdyZvpWRNzNk",
  "key12": "wCBstUVTSShesj6P4yboD2Gjo2rQCdMoAwMSeZ3RTRw4G5QCUJqu1u4Vidpq8dwY4g6hDdgTcrj3KjnP5Rtv81g",
  "key13": "3pTAmtz4EusiyeiUTdFJQcSCjTennfydoVLTj7hhCaNxGYrz3d14GoFhDV8US6zanjdibrBiSht2VeyWmsbdPp4r",
  "key14": "3vm6ePgqXpFgJGCpVEkkV1rTjSXyzEmSyw2ixqk8yKX2QckepAY1hgz7p7UXojkhT6qQRwpLUYbw4pndHf9U4vuq",
  "key15": "5eWFiDbPwhY3HJHJ34J52b6UZCnqCzvP26vMtrwZKbyHY6b4DmMyiHyBfBPBc8Qhezzu8rCMVsTYHvAqRh1hsBuV",
  "key16": "3r9vyj8rFxANoy38qAr5VUCvdRSKLyFKpYTfR8SRrwHwZrrtUH1TQjgTpGEmib3ocjQXuaNB3bFgHJFuLEsuj48w",
  "key17": "49hC65wjkiia6uugR1E8JLXJLyDLHW9JkjddSetmEYP7mYXCriVerMXKsSmpHVLjbJwtJPiPVBpQnnpem5bWdYLd",
  "key18": "3T94Vc6E7ZvbnCtF3rpqku76iRVVTTN61LwFAj2oHnbPwiY4bmLQBeNpSCYSba4KFQ72A9nWh6ZVRTDfaRNkzqCU",
  "key19": "4BMvPko8pQuA58f5ESHa9rNPuYTGkMdLebUv6NKyU3xXAFSfucUUtqNgyYgpiRiVqA5419yfzhRNLFXisLu34SjW",
  "key20": "4scmxtYE2c7A9iXrhGCjkn9kTS2kWvghE9wRbP6deDJBP1n3YSq9ZrMy9gkVLt8A7TJ9jPSe8RPm9f7kzyqTvZH8",
  "key21": "29dp3R9LZtr2B3GcxoqUgf8feN6fxbQRNmZ7o58LRZo76W2AxjMBZALUNMJuZk6PJX3Ks1CnYafg9ZiiazMwq4zs",
  "key22": "2Gnyi8pPeB6LumZ2rqo7sgDWD2CPTxvtWxTLwLZAnm2ySehTP6MQ17aGwSkM47xUBjZeY3bywc5XHDrGxtFuGLby",
  "key23": "2KRyBj1hrV3P7WvvF1Vvw7xKm57Bp3JY6ZJyHeWCafyDtHtBEESuaAwewieARZcUGr1D7bDSoiN17eNQMPwYs6mS",
  "key24": "2YdWdGdCRrxRXqHe4jqe9VMrpfwk4BbEfUiB2GVXxzDXTg6vuSbteXtvXMLX6eYubjcNhuqoPZ1xs1i7om52YW5T",
  "key25": "3GnQLNAY65H6oqnMyanUVeknrNcFLaPXnavy4a8Wx1YzMmXPapbzuooNYndmBQDwd48nX2EArxdixNcP4LL2kp2r",
  "key26": "4SbuSVSiYAj5pFBiss6CfQzqujUYHuwUkW4GJ1WdDCXBqQvAMAr883dF4BA17PvTdgYpVt7zEVeUVNvutQoDKtMB",
  "key27": "4xPQZVDywuFGi6kLHP5MCzK9GJ3BtVrDAVPSE6xBivge7t5N7y2R6ume4PkqquSZpkAuUbuobjMjE6T5LFkFQNcd",
  "key28": "56aQeE1odCjAjmhzv6buumHYcShrhzs6uY6tZi9SL55GaciXTgwc3pChKjajzYUycmr6cQbXXKKXfiJp1f8Npx75",
  "key29": "4gR1hcFpGhxeZPWPVvARefwMPz44XnjwfBM4iTTz4JatNpBor65oKp9ogJnvPvXQ38PbJ8Y8x7sZjPmcQ3WtDo6b",
  "key30": "45ZSCaTAyCfWZF563yDC6eK7FDAAepSdeSJ6ABY7sNwrvnTdWqhrCXxgc9r7whDuvhEKnH5627WQtg49kE9Hk48F",
  "key31": "49USbBXEwTdnRm3FTZAR9GzUXLp353bspQ94TEQYDfU3preha9VqTWkXh4NPiFEJoeoaQg7X28KEVMRifW3ZgBya",
  "key32": "57zp7fkVyVZeTZFQczBMiHiS7kjY8hnSZpwqbe8Nmw7vFBgYBBjrx4zkEVvH1vJeTZxVyC1K2J6L4vZx8AnGvsvR",
  "key33": "46bhZoLvJRN4PG9W42vb67u429sFW9pEffdyWnT9QYNHNahpPHBtLpMctfduGDsNRhDicLUw2GYdwQgg917tNdiz",
  "key34": "4k5kGZCRkG2WBrqGie7X1xrd1EjwcS6aeYbkerDeGxbHF61SM144AuQ66cgWUHfLfrnbDqRKiFn5nWVhbNJ1jnBe",
  "key35": "56qRVTiUFauk1iC98PHnB1ayiDVcQDx7YHRQNNhTbW85pJyoAc9FAtuTJfkstswcvjfVp6updgDMqTEogSSuNfV5",
  "key36": "4jWdsop9SPwmDQCHCG8ktQhR6HQnaGrVydkRPpc5jfDsxsLWbw6Bgy561WWa7rrockAjnEJA4pJtCJc97CeAesTB",
  "key37": "4BKFyyihzBeb2jZRxkvMBZMKhYY3wvBzUoSCS5jjVfprAPhcw2gr5JYGTt3qF3AEwr4fzUFShyeWqT5pT1uJhob2",
  "key38": "tqb4ijs6r2yqn92NV3WKtZCh4Jg3wVYZBZBS7zQhkTV4CF5nar8r6watHn3eMpmjwJtjyrXqLVqFrn4HyUj7F1g",
  "key39": "3qS7qzWkdnBm9RjDRDAuz23SnRBeQgSHcVVk9Hf6V9yXZTRzMaMwdFPdZEEj3D4EpTw1xFAvDtTc34gJsv269UV8",
  "key40": "48AN3vacS5evKVLwgk33YyRrgZjGcnysQ3WLCbxkcRrNSe578JNtL3GTrbgwvzRdp6WaHjdW99YAE44dDnescGtv",
  "key41": "2UqWc2pGkjjC2gKPspeYzkKANYMfahRgEVZ5bYj6LSW9JLyg4NYRs1fse1pzFMn9Be8VKiTAUfiWpEyW6wnat2GN",
  "key42": "5yghao5g7Z6DFH2rXVdaPRViDSSgy6teMWDjQq1ekdn6ryjCcnPMQrga4YHV7nUK6tcD6XiVu8ptcmokdTxT9rWt"
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
