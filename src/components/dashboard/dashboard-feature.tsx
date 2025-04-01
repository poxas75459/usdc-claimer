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
    "4y5NM9Mav6Wy1zFpN8cuKTmKaiiyFU6NxxM1TM3WpdMRLX4UuB1Bq51Ybc4YujUKSf9pEa7fz8QfDhKCsq1nvrR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62u2W5V9tSi3J1jSWAoPC45NSFnvvZVybKKc1jg4S9TEBBijFy3Y6P3L6Ro54TxRBXZLDM6gegRWfnrEr7Ah7A85",
  "key1": "5TCefn3FRya2AnywdV3dUqVPvuhTHfSefdu96qVwXdwuUNAzPSySfetNDLdXDnZ7e9m5PfnhDEHLwuURhuPY5Uxi",
  "key2": "4qAbgp8pUugzbCLYAS9DP2LYdKC2zpjtiP9WDfjbyykKz3CGvuL1krkzYjSZJnpWowPCu3ento9oTFw6CFcL7ufv",
  "key3": "5843BCRxoJfbDiFTW8t1E6PHU3kAJMswP2718yPJBJRAvRXqQxM3qHFX7nPS2hrHsrekEio8DXv7Dpa5ZZ49v9pP",
  "key4": "2JnkfXfuykkxVeehUaUB4Uf2DY8GvUnjRqXgYSG5XkKFxoYKC7v6nHdVeGuuQdX9utYJCdZo3waSwaNYfz3j1xTL",
  "key5": "5ocyTPsoRuHz8TfYim6ftXpfnSCbYQSSXSBzMj27sf2UrxwCJbnF3W7sXasG39TqFUR4pGa7ZhqSz18QmryjYVqW",
  "key6": "5HB6mw9h4smh3odp5tMuYbPitawaS6tazPUsfKBwjCtAJro7PjhZ8rBSxGSk55hPAfVGv6vV3eFvxFdcKWStDtNF",
  "key7": "5BUC4yyrGd8woesYGG9d4c45nvUbZi6yK1YxjhTUQyWVhSAVUTpoAqFW2niNroyz8ngER8LwQgdARmUSb7po3w1M",
  "key8": "4n3RoYkNQ8dbgL7Z1YhvLEpb57V27WSKxPQedcsVRcfjppFZjFD6adG4eS63rqmjZL9ynXrNGmnJdFPrZpeA3Mvi",
  "key9": "3cxoiEseXycJVAixw1rNht4xhMuZJvN3qYWL37SNnWsttuKhEP2oUPzxwdK2dg14GWk2fatJqWTibpU5CTmVcget",
  "key10": "4uNZjz5jJyHTT1Q1SHfujQEXXnGXgruQ4TotAsVfJghj9a4MqZAjHFYt7JHMXrHLa298CQFqc3SnsS2sHW3cZvh5",
  "key11": "49KDJHzBcKE6B931ksiQr7HsnLFjN2agD2esjgv7ybsyKeSwpmJ2JVrxYDwSvYsSrBwJ45uqewyxU5M5ecan4PiW",
  "key12": "2qYCEYZYA93gTWEDTuNgLC2g2W7G2iFQBHMKqygJUpcP1QqeRGyFX5kt5JpUnnk6HWa9cJUmbRgSWr3aUYRrnDDM",
  "key13": "4WXKbTeyXQ6Dy8ddbPZf9T2DJBzxx3BkLGKie4AQ4Xo4YkXuZSYA1jqTfos9VnmpPrFfDNqwiez6fPqYYxedNVoV",
  "key14": "KWjumTLi3mv5pFud51EqPtbAZ3TBpJRdxpZnuhUMxLgYyhSpnX6FVQPVqapQkpsFyDeC4kzuo8Q1QpgPmSoJj5V",
  "key15": "5dgMptJVBSRGmED57RQ73AJGu2Mqxn8QytodEHkPGKbc4MV5YKtmwbhfuDEJKbgnC7ANec2wTFGqNSzvJNb4u2pc",
  "key16": "5eJ7ovVinXwYQoKT8DarGsMnGWaPmX6oCyzRJnzpq3bSHF9eEdfaqgi6jkMHWrtmLqtqjMHhjWUN7rnEpZhH6BQr",
  "key17": "4XMchEs3aqSkFLYRgBwbTpHgosmepNaUVWfEApFzcV1zPzwfqj1rDe7c7WfRd2aKt9Yng59FTuH92q7nvcCPvQtA",
  "key18": "5XobonhHy2reWYkuNG7LnTsdcUsYU2scLDaoxHDupdHY6WPQptMjUY9uoebdWjRu6jUKonztJBk5xNWNQTsFHNPe",
  "key19": "59Zg7aei8neVUxf5MKNw78AHQmWELJSXahW5rWHULKDTRANps3QJEKCZwMgrkVaUphoD2nmumZYns6a2nf5zEJ5P",
  "key20": "4rgrCFtVUDjo45SgbsAbEqT5zMaddk1Djqx2Wb18XMkTFEjVxS1QjgL7nFzTXKrikCZV4vnLXdEuFqoqp8niHXAf",
  "key21": "2GJaAFarfJy51wspD9vpX6qSft4D9GFZEYdphZ1wN4eqpTugVAw1FkdsMJhquMJwCn66LvJev16jTrc9ihvAZW2E",
  "key22": "Z5VcKdbYYWAsMo72pxP4z9JfWdmRnmjJTbFZSWMntiGTRnG6ycee1iNZqxa2eyV6Js2QCMSB2bo8uR3EDuP4nK5",
  "key23": "4kbhXwmQPX3gb9gPmGxic5MYxXF3aQNLboEV8KqMokatZNgYcNxCC3UENMjunYLZd93LBtyqatS12z2tr22vr5mn",
  "key24": "62bpWt9vuCZMnop3kVPqg4WX42ZSjxXJpLjnY7PhqHrzoCue3Qdp8aitwtzGxJp5KDTRPyjnFgbnjESdt9gnthV5",
  "key25": "2nFVwLnNjnnMyHA8LwFVbTBUYiBqvKefYnXzcDH3uSQSBhsQ2NR5ZLLw2Srrj1uNwEFTbWfHWJwwKvfN1WRM1ToZ",
  "key26": "U4n6gPYQmnwPi48jwZSYQTjBztG5eaZijBthr6PMmg2oueAJHYjKncALUiNrDL7qJFPrb5ZHu9Lf8M4yENDHFiu",
  "key27": "vC14kEMNbo8yx51TXUfif9fwhwQSyWTk9NqgrAFsevJ9zgcvm9rsbKj4SJY6BrbbybnFTDuFArMDuEJmmRLZt6p",
  "key28": "2xpTduAEvsnN3s734fBCC9nTnegdfTw8tDZEY8eFXjRtMRs6rwdf6RxPKP86Gc43Xha4YFRgwLXS2pBfj2kLV23g",
  "key29": "3zEGeac2HuHhT4fpxVNkcwV1q7vcdpFixRhcRvTPXbNKw94fHR3VkXFK7nc61agTKjdnPAnnzjzMNKRd5JvgpcYR",
  "key30": "3LCTA9BNEqpWw1p3cCqrmgGtrDfRvKPYykHQePgKhSjubwx3fBJ5kRdEVrV6LDfwTfnzWMhzdp3n1ccHfnUuu5hJ",
  "key31": "5PYJZNEe8QKJnQpY9umJwHco88u47t7CqHx3Wr1z885R8VK11FnYvyoQVki5SsW5rkXC2hTtYgpZZGHQmPjPYM71",
  "key32": "4oHy7AAdQTgnwBnged8ej17JAQxaAeJeRZZJA6Qzymrq3G7djoVwnhJ1SZjE1H4udVXM4dXiWPgtJFSTvwidc4cA"
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
