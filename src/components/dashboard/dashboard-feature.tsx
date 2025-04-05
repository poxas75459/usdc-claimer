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
    "2W8BVjrFah1YGGutzBYy767vMCFBsdaSjy7oHwApgUjYynxZHaG2kWgvZnvrxPd96vHNGrDzD3H6iTUVaZhF9PSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36jFMGGh9rH82MSuFGw8uobVUkycgkm487AUjTrMj5QW8WXBtbbxwBXzgbKPBrqqVfzcC8cLTBaAAZKb1acqBjnm",
  "key1": "56yEGU6wLb6CnKqwyXKnEkPNQpxxU5JMgW3V7MxgtpUzo5dPSkz2AK5PxtCiVTf1jeC2YErUn2Hd6ndSo7FE4LLC",
  "key2": "FNNVyvDTpoZzzunqzDSbnqWZgcDP8ciEpuCjkYDSBF9hjQh4iz4dT63PL2GND3GnRrSu9kUEC1kEVC1AUgyckxa",
  "key3": "3rC1gqYSUwhgzPJevPWPp7KcVqweZkM8pEzjZQULdhd1bmsDgXE6oUMmcJPXNNTCi5TgB21PvE7ZizyA91mC4bxJ",
  "key4": "4AKp5K6NK8KyqJDc2kAczrsTYXaPFMrwcYsG9a1TpKsKGEdi4T7YfkEiRd3DxpfAm26hmf1y9oaUkMYkht7ktt9W",
  "key5": "5VTe3B79GT5qJtf3YeK2ZjyPFcRDkR9RsV5MHdFD1iVgoEnVyBPpeRqSMJQh3w15f4Vehqrts7vkUYjuScUs4iju",
  "key6": "55tgWoUb6zTCtrCjnMxKhSZxFKp2oqWevMbNPkMcgc7sgsRXUQiCiHzrSkKTvaXWenNxjsa26ATVkYj1j8aRwYjp",
  "key7": "4YEztKmEhnSfRbS4HqkS87cvFoK4azCBML3RhXRyQQrDRpqSNwC9PpMeKquEFXeA23ShPVjxxJE1dKtpscCEtnEj",
  "key8": "ST1MXq9XttwWZoJaed4ejXKB73DCiuqEyztfeAzmqM6z4o1B8DUUHirLTqoXj5fzDroF4siNUqAkALihxbJLDjn",
  "key9": "3DU3h63wto1yzG9S6V1GPV18yqLAhcWEEJdfevjSoqoBBZo3CDzHmHWP3vVz9GHenmzG7ejffdcHhdDmXJHbvNEG",
  "key10": "2kPRUeBGqezn1zpuuQWRRM5QFNcWkv6P6kYkvGJabEqMHLE7z592vGJLfERg87SLYwzE63RWkmSpMQHm4S6YQx34",
  "key11": "67bVbVWMw6jrSKZ6TUupZbEihfrttMAm4Z8zGtiWffzEuwAjZ8RWKy9v4jNU3t6t7sNbsFimrer89QDvHLYvCxrr",
  "key12": "322iQiC1vA18gu1DtTi3ShSs5dSr88f3JCbY4gjSkHtetpAfMGJmk4wj4mkmW16F9Mqu5d4xnanW85HrwnJM5cqr",
  "key13": "49dmVVE6NsHPevE2kRP9UV3ZZnpLHUYJujJzapocNwXq5RDzzhNAvbs24MSWkjQzGg4UTWztx7vob7F6uxn2U1a9",
  "key14": "ghxwG7MVoWgS3PAsA8ckik6XTPvwURJRUXDJt362q4JzRH6CGnpDXre9SCYR7fNjMQ6VBrgCSmmi9Fs7RSjP86x",
  "key15": "2SRCNZn1TYpzxKsqJk9Y1T7zuadjPdeMHU64AFsDhkPuZtDj3TWzC4FgZXgmMRkTJ3m3eTUR2k8bmSNQRuGwfaPt",
  "key16": "pBN6kXoxmcZw53z39WBZQs6GjwUoSznmrnv2qoJLktcZGbgCt9RgaxHJ6BScfRpNSpiXVxjqzXqSXNJ5264cuDb",
  "key17": "3PqzNTuzvxQLHJsKPAUeMyedXzhfezaDPvkPPuuXyvjUecxris4EV52J9MhtcHiBYGiRXpXz8D1HMmVVk82AWC6w",
  "key18": "3CzJQALWzsN45pdCfFW6SQDrC1MCAjSaedvicKSC66yJiPzq1Jj8YK3T4sWhW7V3YkcfBFyyfRgJVJdodyZb6Vns",
  "key19": "ZoedADpzJTafkwkRuZ67Gqn1Uy9GHYKtiYxzg1BQfQnPuhucCYvUPaRyR9WCBQVoUB68QJYBZjTz51RYVgmBZBu",
  "key20": "679oFn8DoNu3vzCrYgqTWZF6aj9LqhQKFjv1utzKMfeWTezbHcprLNrXp1hREYjPTASHWkFNnpTi8Nqu7NVR7Fet",
  "key21": "kqxGPRbuKwkvHf5Ja4WVDVCF1rR8EAmzyk2A9SqRQKJHSu7bMAPAnqdmCEKtbtScaQxqgvVtMSCMnEEopwyNf4v",
  "key22": "3NExsoTxE74HKBKZH7mbsxgujE64k6GLTzKrnyDDTS7jyA6zMhrNws8PDYN7Gh6AghCUoJBFtu1Cru1vEgKGV1WZ",
  "key23": "8D6bVaoCYiL37QLsX3MZpjzCiqhyiwHQKCiWBNL29MFuPY8WcAZXK9JigudgWqadhpj1s38ADKPikyJ24DXx97k",
  "key24": "15GxoEr9mMC2jmiA3PjYhxHa8iG98r98itGQ1T6icBhikbM5PbXQoML2X58FSYjBNAw3buiemwb4yNiaZLW3VKt",
  "key25": "Y9ezKP6bKjre6fiYYVJE3tPGfWmuFqE2XwYodhEc7Z5FzgGUKKJAJEFW7LWUh1WhF2WLvNSVhW6HrxfDSpi6NHE",
  "key26": "3CVpfXtAsTtHdmefrPavHAEwMZ8PmsHsw6neYfnfLCuNWh73dbPX4vktrs1B9X33ha1eknFmjTPtWMQqdZ4pvT3Z",
  "key27": "4zcnZBC8JqRZNFpKp1BYVRnAnoCa8Y7ZP32ExNTd2JingvkGGB5aLVHBExZqKDAQttLYd97eWRvi2cRoJfBhuUYz",
  "key28": "4inbYRFurhkmbULCCG721S68BTuZ6yZU9tbe5VCXizTnMWgWvGkkZQsbbwRyn6ihe32PvW9FAHU7yNvu6djaVwLc",
  "key29": "C5Pvri4xoM6ggZ4kjzsKVbQt1p9RAKxkmmCEFbyYbF5TbDsW1tKsYveBx58HNN6a4GbA8TxHfiuEjbYofHGR5bR",
  "key30": "3zs5Jbi1PEnb4tCnMcNbK9dS73UQutBg5d81gPjmdEjc5y1NNE2bQRkYjJrc8ZZDuKyHhUAsFZnhLmHDgLvLNkCU",
  "key31": "61BUCVUpB21yNvjx8QzqdggWANAouFw8B3qAHfbTBAkJbJMkqwDUeBNVEww83UcQt6DUxiHL7mSLqwSzwS3exVPs",
  "key32": "4HmBFD6bAF7WPiRyCQoW2P7xhYWrKpMwj5k4Eaf5ua6jv2kvCYCt7qv8ee8YgcWsSnXnRpStuYXaf12fsRmvPN1K",
  "key33": "28S4wTapxW1pAH2YLmbMaWT9gxDcSr9VkPscyj1qghGcdK8dEbVRJfnaCCp4msxKDVEkBqgdjDXnFVF2k2Vt24xk",
  "key34": "45nmHtEn5pWwkvE3EXy5idnJWfUxLaBb3ZcEucKv5XJwqZg2Kew2cEPPKdmtsZRwvyJAfk9RbPxDPMm3mBXUzhSW",
  "key35": "39v4Vcz8juVMWfPkR9G8evV5nS8xrS7xfSMUfAaybnuigGoWn8f9zzidvuV6pQbFU9nPkWqUeCY7bPwi6UNqmG8g",
  "key36": "4Wv3s4CfoH5NrJohMNRAqYyCgz1hnLUgGsiz8PwKG6VxKvTkYLZVfNL7yJ73mZRuQXuJYfhbGdjqmz7A3LT4QeK2",
  "key37": "pwH7C9rjHSj84ZsfV7E9DWbgRKLXYdrxF4usTXYvUeb4bJNZspQVhagRW3TEhrjn4q2Daj3JB9nCsRp8L6r1zNA",
  "key38": "23AtmTSzuWZ4tBTcaRnPWPhee1BZYtjDxoYu3PQWrgFTQKAQsJRPDTmT3kFsy3MTeD9h1cfQCqRLnAqMtQjqk7UB",
  "key39": "4zm68zhs6F5kWDFK1EvBgUg1AWm9FXimBgGGcY9YxVN9haudG26EPwya2GhJLzC2aQ7JpTCgbh77r1BUaJJrmY8b"
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
