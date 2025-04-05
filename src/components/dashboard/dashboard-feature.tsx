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
    "oSvBvLNKfzUxhKftVhXvfjGtadNDaSNEiHtWHGkBHLD55Rqr2pkLgv2V11mQYWJNGQTWHaZwy84opFU1xd6gThU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45oa1cg7tCAxScvjTsbkJJiX395YfAcQynZCcEZnsgHsSKYfbqk6QVbhPgWyFKiWBc11Bb3pREqLn1QibqKZSUES",
  "key1": "3faMfnJEB6cPwLMrhFjMdUKWTEYFPyx6CbdGL3df3go9XvR5ecukEwSCyaayDVSF11gNxgePhA7Ev6NhU5AcRdPq",
  "key2": "EDJjCA3eP28icZ5Eq5gaZLzJNLJq7qfvmiqFywbVRa1srx4fvEYNf1Mw8smDiaDrFYPzVE8eGVLfCUULtwGzsH3",
  "key3": "2mXTo6MKaHeLP2UwxCVNk6tKw311i5ChJXoogs8Li1zqcxAHJxMDxkF16scihCRr4fPGR7fjAa6ZCAx4trztfRHg",
  "key4": "bSxz32jGRe3s6xMDguGqGxuVBRWs6BDw5b7x6ai3uSV9kiAAky2CrMEk6dCD8HX5DmFfWuiGWewjYeSR3V1gvoi",
  "key5": "2Dni5vexvDjQxfoXiAbHEXX75CNXC1m1oTMW6Eqzss12WCkPxscyhoEdfJbXnp1aGFBXfi1epgEJHSG2WtmM8p5V",
  "key6": "4ZwBDiz8jAUHxPLGqcmRX1dHhzvn1tyTeRuN7sURDgCuymFDaGJFVQqb4w8GPXP974PbfaFAAPT4csH5iLjckLwS",
  "key7": "MWhusPwXbWYt7atUNu2KVmxLVwKsgVdUM7FrfXXenXV1jFJEaWT7C2D79bJYXr9qFoCK1prLQwNLVNL6NY3XjvZ",
  "key8": "39xdrSzmGX4tbEcmoyWvqkRNTxDnxhUCEU3fnHXHDTZVKcKCKEvQBGyzQfYFuHWn3e7pE7bt2g8biaZtmBUEDboc",
  "key9": "QWhJniw5AUVmWxADLx7k8dLtwG4JvFkV9wRb1czGE4hD8kp9Np65frPdbKe1eAiQFqMbWNYheb9aAvAv54diqcj",
  "key10": "37HsFeEP8AciwwHz5HcedGVc7BSnbZ9BBpCMWP4rwvyyPPTiPS3a79pNDtwoVRqnTHQeVdZsRaaG6x9ikJDnzmyN",
  "key11": "TXjJX5VgNrvMz44MpZdAkJ1PK7QmgmGKXK3yaFnVHQopzfpoQJKprwr4mTk4vzvdPa9GroWWwkQBPi2pqrXGsxv",
  "key12": "3wnTjuvZ1rQPoXrP4b9K8BCRAdZqAuHw1UGM7Rhm61T8bWeSsUw9mPhL4fjsMzosXv3QoWT3x7ABkGfRT2mbAtbS",
  "key13": "3HCjDzmCkLx8DtnT6XXd6aJmowq9JkiEBoHaYB9QSncZE43Fidqvo6nx4Wg8edWTPF9Ttwzgy2hdzgaPQn3i5RQP",
  "key14": "2APQ1qiQtHqgKVqzCzdGxYLDXegjQXwqwH9T1G7RPsnEPWg6WHLvZkEtRJ3WZM6cs3EwucccDtXXdADEWU3VZPRW",
  "key15": "4LnYR77zZzKRK4NwUKzf5YjRwte8iAerSJsXWJSn6KZEYMD9XEv9cu7E55bevUpdesVE15cSQhZUjezQewVUgX6T",
  "key16": "5ruroxFnHWRtMxrthoGMBTDriYZ35nw2HvhQ4NX8XQZdk3P18cXmQwudVWrH7nXPm6FMBqwENXxVqPs5rd6iQxYu",
  "key17": "492ydvVwPgmMLjb8ranY17je7ZC5iP22Bkm1pkqiSJbKgKHtPk1z28B2b4e7CQWunhNUFZJUeMssYTT1SafMXEvk",
  "key18": "mzdL1TNZZgCSvSyLRtN6wKjSbWNF9s7KJTddse4LYwUuuNH1VdjcKyEwEWUFZDp9G6Cfjdb8nTNEA1eBXWUmdh2",
  "key19": "6BcyosxeyDpvHX4UuKYFf48MwGjvsQAyDhd3FsPk8RgBesgziYJuCYVP4DSNZ36Z8BU9Rm7aTADWUrPaGGfdXvo",
  "key20": "MkK327rzKkqGxh3GBX9jFXPoicdQBt4mp1ABD92T7qGSDb8c2TjEU37c7dLsC3ddMDFekz9kiPQTC59gYkegTRH",
  "key21": "5hJQV9xHsPGLPt3jN6Lsj6sGu6T72K5MprqXtjnC9AR41LisqU33tGvaQM2FLkRCj7FWLffqfhQ5bX4nY5ticwUx",
  "key22": "3imCNWqr1TuS7WpoiJnJ2d2z94ypvLq1sLXUigEASSMSgjMTsq5X2AKmUwfUN94wRd82HvRypbgnsi5V6MNDk52j",
  "key23": "5PGVSriHL9dz59smPVZpAis7nPiuHrdT7khKr7zRGRah8Q3tKKNY4ZnKB6mAHerEKd9BnDbnCTiFitdCcU621GcS",
  "key24": "BB2stdzYAN3EqdQRXwNXcFExraU4ADQUFxyoXrqDkHimWE82vAhCt2wZ6oDnK4f1ZZnwugun4GDVXANVpBT1WKJ",
  "key25": "3uL46Vavfree1cZuJtbcmL5cXcduts3wbHNx7AVGXb9LASDeiaDkuUrLt9USMJTsyj1xJzeh8vczx7FHKKKx6KuT",
  "key26": "2AY88KFkGEwM4hy7bboWKocbB6hZJ14P34iA2aPPxjPLVPFj6tt8M9URKjCQVNAve7zVtZGRnFwgVvZocaK7mjMA"
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
