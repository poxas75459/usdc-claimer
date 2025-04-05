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
    "aufLFVhfpNTY1kFyMn1fQ5jzXiWha96fHsocF6bUEVfXEntj3CgGxcUEjA5eYKzUfzgX11ecPnMLfmRs1HBptW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZH8RPpXuFU1Zv7C7ZjhDZcEzMrM8e5nAUytniw25McUdwrxigpG2TtNYdjktXDn3Ch2M74fKkzsENypukXJV7zE",
  "key1": "QC2245a6xUpAVdxAfugpWdKfwUEQGWn6PktGXeAhZGjgqhT6dGsihDEUhRn2kFud8cyX3ifBSi57g6y91nGiycu",
  "key2": "pYQoFjyE4dXxaFUpHoNefQqLiB1JTDswQhu1TumKdS9AqB1cMHXsJHeLAhbRuQvJNSBBUNX1FPKf9Gsnd2GYwLb",
  "key3": "3pyvnPj42vY9YSoCeohhijGWQj9GmjqHTmvsjoVvGNXNycj9778VXbtqDzuoWNAZFeSnSrcyB9EZh1EH8ULvQPrk",
  "key4": "2QhczD4CBJjbn3SVpPur5M8iSKQrsgD9kBvPt6NoLm9qv7TjhUNLwTCtgMW2jsA5XQ2kEfth1noT7bjNvGKafCmL",
  "key5": "3z9PgsAUk4NKY9YufkacddFuMQmpz7thb4LcFr6eXD5xvtGxuNPhCLN7ipmAha1UCPLKBGUACwtHo7yrat55JPKx",
  "key6": "1NtVVbLrEb4krm8az2EQhR4ntXp1BVPxXTB4o4r9T3kT3jaj2KWamtCEcdoWHjTV2vexBPU6a9XgKeKcUfpk82Y",
  "key7": "61r42PeuLSVzFGAPfX8BWasQrznkfHfH7UvqVArC8yVyEFXctiFoLCLPCENRtqqG78jhHzQo3Lajup71rLx42Bh3",
  "key8": "7F96t7jWzLNJAbnBk1hoS16zJPwaZKAizWZHC4vswBngJPR6YFVC4U2iWLkK4fjVydFsVEfMAy9s9QkTEufsPFF",
  "key9": "36iWT2eQeAUbe9ZQix8WEKzHcb7HimmVBf2yVy6pWRZjgmWYr1mf25TCqMfRV5rW7wDz9MBNPVLHNu3n1419RM1j",
  "key10": "3cmrLcdBrYLKeW4eTQfP4Vja6zraVhZUvMbhQC19A124GSq9q7VZ4oatdLpNVsNFKCBbfXYzwXYJCx6FwCb1ot8M",
  "key11": "4VSquULGu6Bqmu8U8f1UTXVFadF7pKi89F7c2VSryEAtDziFYyLgPeSKhVXSjQX9SDdhzhttry5BacwgFA1N8i5k",
  "key12": "eGtXVsFFhwNRhiQ8YVieyqGknn5EbypBc5oUdiD4fWTm3KJcySqSwZPk2HiPAFvCv1EVTLkDQVJNEEi33aQEquD",
  "key13": "FKKLSJEQAGBMLTo9wdGrwwnKu1UKXkbm79okygS2TME24yV8BBmH7Y6vEZigxdbpknjM6hqikMAN6KMfLurQXrg",
  "key14": "3BXDqMgUrgR7UL31T3kG9nuTw2cvUF1Um4M85og3hgF87BKCBT2vmSMzznDXwTPwoqZPLreVfzjcsW6q8BcdQFro",
  "key15": "3WY4bsM5sp2a93o1LcDj45u7ycvajhsdZ2uAQp1Hmh2pTouUYBCp6FL3U42F7yEx9kQAxpq6A6cHPd7vYHMGYCJ9",
  "key16": "5vmtQnxBCdBvL8JoiRkUy13sovE1bUmrUwREcx1FCVJ3RbgGS8S8jdnnZcURCS8zJ34TBk5PnWzumpYvjs6tJ1oR",
  "key17": "HS3RXeShwrSmypDKBhF36MNVzWrhbWyrXb2hJvfmKdxz3dtXk6ePrdRfzVzcc2E1Sjds3kBAEkdcG25cbK1AgsZ",
  "key18": "3zxk7ASbTSGiXpPYvtV12L2MwNSR14KRNBC7CkhbY798JStmmAWxkQdgqDn53zd9oAcnfoC3sP5d1HbVErijTDKo",
  "key19": "4sSfj6xvZX9GmfWbmKHBi2kg28zV2iy9W6R8dL72UyWWC4VnHkdxQy6zp2TRAxvhMwPVit1WgGbPibzC8HWfbKD8",
  "key20": "3HUb4HmxwCGkC4DYAZF5vnnooXwxhbYVHDnkbXiVoJbJUg22en6hLzzMSfXdGNaEicZtiFEPtDembQv948jtKuNJ",
  "key21": "53HiKSZaR5v6p3DGnswierNUsruo1AsmByy43VKdiCLrcBzfd5Et3SN3stKeY4vMbYHTA626Zvh1g8FGxYDyeTWv",
  "key22": "5ewYmjVEQb2QsaDss7N6uun5ma6sAi97u6hjr3t5QootE7ochXfMyX9eyfdUc4Qu3fEizYbJrBBgu9PPBQLGg4X8",
  "key23": "F7BDreHbdM97u6gx9vAXyoJpKSDrYAup3ewaKqUq9MYw1HqfTrr7zAsmqKNtZ63wRvyrBSS9qYT9nh8oos6yezX",
  "key24": "3PSP6cUSfsYyHrui3NZr4r4xMjuHXfzcFRCWWfY1Y9pS7H8AKrnG94Zu1jFqa9Pvbd573u3CvUbCZ3h6QywxHavT",
  "key25": "3wXEewUSvBgqmQLeH6Wvueqta1SCehnPZmD6frFnsGU8NAid1JkZFm2cjqPxMECUtnY3uReJm6Q5GW1D2kJYd4jU",
  "key26": "2wBcLu7pXetEettANxCXM1zFuyve5jLcLDhS7ugoi44rhzUHCiBvEdEN8RjqbGrEaaN79MszG3DDepQ6bkYKXh84",
  "key27": "5r8Yg9sFWVviC8n1EXvTrKWvZjQQsG6jnUBMt7ZYoLtNepfDvor85KX9jQL8CG25MkdPkWgxNTZqffB2Z2rGvKD5",
  "key28": "4cnvzSaA7VTTJ3XuY6sUea923zsQLHdEiMSMey8h684sLa1ZfMr5NHi3SZSCqwkExhdUN6FE5veJDB3mGQc4qF5e",
  "key29": "2ZBsb4HEoiZov173AcgPN8Rnrb7xFjNbYhxa8K2Zu1wwoJCUPQxS7KxVpf4o2x88iyqjp93gW5KXgoEYN5uNAUgc",
  "key30": "47HnvURsCzvQTw8gAgkfY9Yk7bwQjQqKZkMM1CPmKB8UazeZNU9mHvbAQ3WnUN8Cikgdyd6AMYEthuNJmFS3Hy3o",
  "key31": "8ndfxAnHU4PFE1je4kaeGzG8BTkjmcAVi38xEToSmb6SfpNt4G1uQkhG2LwMebodjDk6WWFMz8H9wypCkvr9YbP"
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
