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
    "49ybQRdRHNZ3MPMVRAuWxP15LVF457LTvbRsymfZimejtrSEE29ebFUvbhhDj7ehyRu5PWDpiPJL6p5k539PCNG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R2TnL2ehdAusRXdjAqy8v7p6etKG6puFSMxoLpvJh7oCxUkb8ZLEBKN6JqAkfBPpXd5j5To3ifTQmw6hzCz4YDw",
  "key1": "35N9YauF8PcyjWZsFNNn9qgrJ1awbu6LbBvrkyveARgWnXy3aXRUs9J8NuWzFLfSDZaPUZs7CxLj3spFYY28So3",
  "key2": "3gg19kzu6q9SxQbM6rZ1qhGmKXQKX3kZPbwycTu1rqyMUUPhkBTwNmm8Np6KrmhE8yZf5Qm4MU6fMA3G34YZ71AE",
  "key3": "5Xz72AnDma4NbbdwfAm95gWbEQs7Q29PqohCXtBz5aiFRzfHeWHVTy7TA2WsjuAVcUefNr17ncidrhuohjDe3W2A",
  "key4": "5mSq7ezKbd9TMaSteCFoY4USzibBzGnbWfw4BPBFzf5e6kyAMqFxWQBmG7qzNa8pwqofnUkjMWCHR5LEffuWNmtJ",
  "key5": "26L6rw5bMVDRXXzTYH5Yuy544rTiouiXHjtriyUd29fv1WEmVLsmimUF5yk4y2RrUWh8CYbEZF9y8iz7K6AjsKP7",
  "key6": "FppQWXQvrhiSV4t3f3vJyP1pSUwXBrgyc58eFoBF4g3cDFfCjj2Q9oXniBKew4u6RfLAYf6aEjB8JiurqNArugs",
  "key7": "2oxHi6DmbU9RxrANfzY2WFhv4wX15EN1PzA6PjTyQmeESBphgwMEK9zmZ9wsaxHHJDhjkjiFdTPX5MAtTL29WBBF",
  "key8": "5PB8CrHHuQvBb1ukcy6BM7aw9sKVrEXcqFDrbVdzDUXeSqEL61m51cw8XLHEco25khwNGCjQwfpoBXABR9GD723t",
  "key9": "2Ggcp5Rx1yRqhsTUtdhKnfnR4QgVi6yEmxwLsXqrherfVELa1BaeLyWi2cryG1xBvp8upb9XgpvTbxxNWb9dUsWq",
  "key10": "43FiL1Fa2yv6UuvvrrFFTRn3qkjh1KS9ikSNmX8vfqnGFzPGf3fRpYRcTm6BnkmCodEBRYCzALrRZxfus2nxt5s",
  "key11": "2TpDj6MUzxYJQcrV91aKBuKjx24cVZs7fMn8wVeH9XVDKh8cr113WG6w72eR3dwA9yoY5hXwqBsNJoDqov82x5mb",
  "key12": "2YXz4Pnjxwd6MTwoTqkvhrY3EVeDvZRPMGUezp3SDyh6VuHtmkLZPbo6VagCfQH6TfNnbpKAZLGvB28fLk2sTpZx",
  "key13": "2h2zNegGwqLjTxRs3aHqnp1c9aYBTHRNTi5BdEppkbcUd1ULRSsYw8BtNNBw3Y5jY1TdLhEdfPBDzT49H1sHmYjB",
  "key14": "5EdWWwRKegV5fQMYBm3hG9NG9KTe4B7DxdKXGAPedenCcmo3o6Qh8fZmYHxGYXHXfVoxg68FjyUzs81ptT5xtFhX",
  "key15": "46BzxRKvgrV4VWjMJhy2bBapHwNjSvhr6kanSMqru46b2NnHKavcWTVjAJT8k8MebzzrrujXLtR7ZHJQTPuYjuFC",
  "key16": "4d7BwRYQZMNdQZsR3gzM2SErvoNT4GAj77iEXRoUE9g1tDQNLhujAhhGTW4uG2tDTgZjrkgd2zZh7Tak8orqUJGS",
  "key17": "vsfzzRoDsw3BCbHAVdCGUvQ2mn4TKvEcGJCMFULzW6C9s21c7bQgu823Wp1STk3Ekeapx78aZstCLFRGR3RX8wF",
  "key18": "5k8YSio5kj42cGoGbtJQxkMZk1xaq2Et7YESVhRwzy69FbbvkYNR3DPcgKeKKCPeitbDf4RiRMaX7ohZQXF9NTR2",
  "key19": "4xMfVYdA7iFW2vmRmo52awxSVYZ5KuqLtR4uKDk3XbGQNqJTafb9gMGFue6t15xVpiykPu2CUA7K9azeWoCtA98W",
  "key20": "5ooSDW2Hbzyovgcbnbkj7FEn75iGxyseVmv4DFNz4Ahnprd8fxMg6VaSg5BmWZ5YQGcWiHPxXAnxLVaUNx7jWtbH",
  "key21": "32svL996oGHXc7Gn6MGT8cZzsnABd3wvmAAEK9s4qjQWk7vsJBaXMvYdVcvu4EEieVRjjRW4pWs8V7veuB4WPSFC",
  "key22": "3RvvrxzWHwZVi7MMag9818h6kjVWHkTipwDMzrGWmbXrwk1FJRoZ9dePj7esbEwqp5gSsX6zydWDQ4M2Q71xmsMV",
  "key23": "pPCJUY5jrewNoMyqrC6wG1QKqcvZNLUMsVhvy5koEiaBM3zJZUYqxmXH1ATZWnbDiAi2Fh5hrgW4mJ9HDYb4NUr",
  "key24": "5rx19A5gEddySePPB298YgL2LZUvMTadBG9uiPKsjs3rb3nbxo17j9wWee7saapfFRcEm4C2wkMu9ATcEC9gF3Lx",
  "key25": "3LpGopRfC8DjBeXhcXW6hAqoZDTKELeFBDutue1M23Bqdzk6emBnPmzb1wY8kR8MA6jyanpqgqniQjCZjDUfDAs9",
  "key26": "53SVdua1gP6MJQ2E9yCypbUpnuJm3GjEr9CyYY8eY7Lurdzh44Gj5zjue42uWwVpVnvRXvCrAWMp4C43mwYK2Ttx",
  "key27": "3vyc1PVUChSxY1mhGnHk1RLTj2pmUiQadD9eJMbYgavmar9q4EGkDJb1FH3cZmYNYeLdNDCyxL5Tbe5e1TBu2e1D",
  "key28": "58SdQoLgHGszc6HrgwpkEFozqvpgQssf1zPdcXqHjq19u55tTPhPMFxbenKWECqZPM1V7JUzX3HRryJfghULsd8E",
  "key29": "hPkFbjBEe2HMLd9254HkeMqFh947MAzfzE72U6NxiFJCJhnRfxpNMgAnL2ksEuHgfeLmsUrwKjG6Ny9EoSYTH4r",
  "key30": "3axxHWocqXBRDxK8UAKGiCqXon1GkmH9qXnbAMTvYwG1LQDYWFWpuVc7rqzvBgsvyJNTC5aFxK2qJi5WQe3VvVdT",
  "key31": "67M4mUHT1LWGtDqkFi4b3vK23gQ26DhBswZK1fWWRacWgYbxqNUQx8TdQY6KqEZr4kVvtLH82YkbhAzwCdUnBvbJ",
  "key32": "3vd5Bn7NJ4PtV8kDtPVxCmyx7VzvC6HB6gdsTyCkqXFDshWRoM2TKRGJQTZHWphqVGU76E6K2qc8iZ2tvWdtBp47",
  "key33": "2cqgQsXW8nSq3JbmeVXG8roi7dDmwcD8SnfogEVJC1JFdEppm5js7h7aiyj1uTRjuCgi42wqtsQcz3qbYyV8sRKN"
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
