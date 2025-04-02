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
    "2d4N1on1j1wLvEuw29dWYU8UvkHFRabj2CEHzUa32QN2XqBgVuSUYULmCbwB9e5c53i6B4kznY65DQZrME9mtsDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62sX7CyVavHopQaTHdLwGdmCEU7HM2GZHMneK3B7PScBKowjwg8gd6zPDjUjd6yY2z8aLMQprftKzxBSH5k7g2w1",
  "key1": "2f6HcyWMHwyusZGDctbNWqEyeUEVe9K4PBkz7yp38nEWy3QQx8UWfQxdYJPPmsdEan4ppceRKpTJHrS5HmnRQxih",
  "key2": "3Myg7awxav2cFBpuXHzuCqbErt69ZCwP3e8k25WU4C3UNTr4ekuDitxtPPK1cPMorvJbePqk57K4DuHAY9zZk9dw",
  "key3": "4dgWakodB5Z5MojmoPmDCGRTsvFpBh7Gzg5He4JxKTdzfQ7WFFdvmr68EjSFusuhTf5NzpXe1w9XeDJCEW8zPFkS",
  "key4": "66Ugc8D9tLmAtFuHV8aGeBS4fnaMHTFXxUKYNunRkk2n9SKAUejs6YoBe7pZViATPdWuCk66JmTvhybYc5paYRGM",
  "key5": "28PzXWzywPc1BKFRmTgAFei1sKD9r6VcwCw762pzsGi3k43iW5nHaCwiD7oKqPEoaVWbxJEFy45Tzbcf3KFPJump",
  "key6": "G6AtVHiCYzcPNSU7rXk6RMBKoCBE6ggekCuYAFzzfWqWvJr8PJgoMAHbRXnSqvBzSUYeLvXNcyyt4PATnTkeoAd",
  "key7": "3iKJ9XBF9FhyVnRVKCdkfQRcvJmQ9t7KXuTSTc1hTMz11kykAPrAiMmVnVAerLtR9MDBCLb81B9nMfihYAMYz28i",
  "key8": "22CpDK5QcrazcKuDLkQbqEk27ajZjuWZKcN4MMjXv5TKxrKFPHRGEG8X9w1H8SNfX9PTKNhk23Vr26EUoSKkpt66",
  "key9": "33JjMxjKo1bSh3KvHtUW9i44DVrEWjSae4jU62YDB6y9MyxqWuUXUJVD49Hk84yTE71qv32jgpjm3PZZM9vhE1Tq",
  "key10": "51CkdNvF5cUE2A9ZwTEJbYqJsnfLf36DP3iEexHHPkSRzED2HwP3mMvCRi3bvB4Faf2TEhm41XZEgt6PA7YN7BzK",
  "key11": "63HNsU9jhzbtw97mgDzcSkKuL8ZHssSroqp99wmozac38H9LVaxzaigkDRk5MtyTqhrPCFn1Ldb8DuNvrtCU5FVU",
  "key12": "48hcnQuUHJZr8xQJnUPWKjTFccpD1JM5q41h32MkFWnNYzEyqv5sJktuxaTMJg9R9jM6mG3DtydgnYBNHzYNJdxK",
  "key13": "2C8R9zHE7it3Xf2X1VBUge1V46Gzn6cVB393Ny6uprAUY8SQwmsr4QQzgshijMNpn5wTjGan6JtCSHdrzaVZMSz7",
  "key14": "32r1QRd8NkiVLdkM34eDT9e6S2JFYpnb2PusCHGEGyiZW1ngsLmMdzrRgUbMbMGeVxM7qvvrSePVQqBdDmNHw6mL",
  "key15": "3NRdBRXx5H6CKAYQJj9CuyM6uur3Pj8t1RxG7KHZRobEMCpcHt5dCgZvxWmai3ZmW7xtdqx7yf2DpvX8SpTxPsni",
  "key16": "4d9HdayAaYxJTaeerpMDX1AftN1sStsvUi9uycJHJw1wgWa4U12bSEsPF44t4uyHtzdMGob3qoWcrcSdjUHyZsQi",
  "key17": "2orr7yLZHrtD6utk4evxdDjPvsHa6L1Uyc6dbiaSS8mQpmB8QQjcHgkaYNmsBq6dgsRcupg4D994UiNAMv8Nv2uc",
  "key18": "4Ee3BEcdksJVmMLLmB6QtNQewCN2wgpD9JnQoKNCSaBnhc4aLViEARdLATt6xRahCapRjThbkWzE27YDJJ6eEnTh",
  "key19": "4P4816k5NwVVmYzJTbNi6fXSM67D2XJJFLrxXwEhgUo8HNLRtHRzKsuVQ4kuFHiR514tnDTxg1rdrdvHYs48Kew",
  "key20": "4fMzPyf7wTjfDWYAZtNrUEzk3HKjVRp1M2QJvJtbFEexV9cSy6c6mj4vUUBZAXYRv56hHFDL2jpMZcxHE1Nuv2E1",
  "key21": "46TsqCDPSo9FwdNmAjG8WPUCX8rNzmAiHg7ddGtejjHju52o68YdjhqnR5XUc75NuHyHGYGSJt9rQFNCbKjBYd9G",
  "key22": "5WssKY9pTAR1V3LgA7vxAsJ26WRXCokxWnVQudfHz6EzicqwabLMxBBFQL3JHsHLe3buSc84yg6U94Twcmj52RjS",
  "key23": "5bHdpNEzGVzcG1JD8fkytPipEXnnNyNUoM8Gwn1wh1CB7Sy1TDmgSbZ2kkagCBVAHMQSfRZLxkB894NWgiih4uGm",
  "key24": "3wiTmxos1HKNved2Xacdqh3rScNFnxfPyXRudSrfDHSXWvdnPzEozPsqecU8AaLzbrjPKo8GpSbKWfF5YLPUqs9N",
  "key25": "5wQDr9bBwnK146EmHXSRWTW5ijY1Wn8N29JF5LCSXwNsSdRDT6ffiRyjMSSh3tZ2o59GtFAjHv5vU8KkMBZ2QJWh",
  "key26": "nCBh3A9LG8tHD9M5WvE7dEc5GGv24yVvreNveyaPdf65G7CUdX86UkQbc2fgNn83japyRWT7Dq1Rqo58n6eaANt",
  "key27": "4W3GE9j5SAP9trQE6vSLtPXV3gBKdJ3zqT8LBjnAT1Poz6KWySce3KFg4ydBVZqQZqA4SUTCmupgrjdJ5h5o5yhW",
  "key28": "2Wggr3AeHXonYP4jLK39FhATxHzTBvdTLBGuNoVZpAkPZd885jWQGmG67b5BpUcSeNdfcL36VTVWeAjqyssavcQb",
  "key29": "4hbuE6pKwcfA3WrCqL8NGw1Q1cmCiCKKjHqCXBUkiVqS4vw2Abj2PL5LafgcTYK39T2qox2f1ghRHRgqKgghppJz",
  "key30": "4evadQwAbLzkkZKYtWJqW5f9yp125XsFBxdxcwCu4EcmueAj5TQo9uEca4tf46FhmrFg5hmMT6uZUHz61NCeYSJ5",
  "key31": "WSFbaBpFSPh6k3zWtAB2VfXre13stszKioHSYRb8h6ovVWeofcumE4GoVFDZbqFDygYjksPrQRfTaMegP19Bh7M",
  "key32": "5ixJAYYV8FBM1miVaCGMZJxJ9kqyVYKXuNZ7iV4bLxTD38ZcZuTsuqaoSgEbJSFoDzKtoZmA1T5NnnHiYWfhitAN"
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
