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
    "5tsXid9y9uowJraySmjC5NY9jGYHHpqPY6S6HCatDhUQgi17bPpyasu4EJ1WxzKXvJ8BNiTtqKqMZAKGmhxBcP9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24nPTPdqy9Mpuo7bDPPD2LDN6XM179N6JJaa6Q8ydRixaBL6X28PV1fvUBf5L8xgz7V4GAVxJWtn6Fe4s3YroCgj",
  "key1": "3tp9br7C2QvwKTHNELBSq3u6FGJxaURqcFRSwys9cjy6NpWcDpGygTLrQeMwX5ebESBE9iwNbVJgdHzQf2pjr9Uu",
  "key2": "2HE1ZNxkdG7rnQyB5tSa7P4yVvEhVdtDv7RLettJWK1unxpx7hau68cLh1kn6fyzPwV8u1gNwgnKoniCEwcPQRve",
  "key3": "2UgivnofqWovwAEi8rScDtiCLTKjGBvtz7m6hscKxKttNnqHjjaocXkZ8dYh2Sdo1rYErkzL4XcMahkMyzp5j7Y1",
  "key4": "4BEPr3T4cywKgBAsnT7om4SkLftTALguQQ1t3rPKFmcamqwS4gpjZ1fzu6kij8QpQu2DupEFEXxvi4E9fkP2sGoP",
  "key5": "4LpU9fqEoUXH5u9vn4JvGwg22wSu8EBZ8EyRbBpaiZ4Ma16xQmFQfZqp16XiR6tpZqguMeAajtVdQtj4WHEct86E",
  "key6": "23hsSGbWFUdYFvju7i16G9LBrXwjEu8z54B6jDW8iyqNxFK4XtZBpbfybawP4FefSaQx8TKoEb3RvUrpzDDavNyE",
  "key7": "2JWu7AqG49NNChtk1K6bZCKUvzQe4XexhpJn6iWo3zoX7KhY9ejHc38utd1icDgiUfdAfqKFzbC9CWLjUmZX6YFb",
  "key8": "65sin7YAxDAVLWoVKfhMzdjurfs5trainV3aDVUakVXvNm8rLMHbTpTnFMHAoeLWTbcgTuzNRRJMG8TBCacDbfqU",
  "key9": "5xm7j1L2UhHMyBoXFBz5RhVoJfLDXwC2mquKjYNYsXkV7if3GbbeSf7W3vSgvR1FvkQw7H5De3coEYB7WPfc3U8m",
  "key10": "4Zupp3L2m7zvxouiyUacENQ78aUXVMdCZpGGWyLmfd7QmbQcDE9gUDq1YC8mGcZq7GUQn1tDkDUH5ySgDc8h6kky",
  "key11": "5ynFRM6m89xx6JPegiz2KWYic1XgTTnXNqJs5XWYsJLxLHz1xz5CZuwCRCRmFSsBkzQz98EREeSx4pPHS2KEMo4A",
  "key12": "5T1mhBgXBN6CiTE8rMZWaj3Cb6ACNwNCF4VcnJTpYAwstLpn63tnj3XxJ2EY88iJn9vGGGkHATf3Fv3MTiXKaqHm",
  "key13": "5StXz1foQrVcKcKMQabJwiN8yA5vPQGYX7cpDhbpFp6G1JUx85JzM8eka9JhP3NxEP6K8wEY8cGMa8Syy9BdW3WS",
  "key14": "3s5MfQ1TWaRbJpw5uwoeYsCHxXdPUzzcBPEcmYhbemtKS7GY3eXapw72eYeCHRAECSXNqNtMBr8YKHphwrujY8K8",
  "key15": "g9gYpLZChCC3E1LgRQwf9wMUGar1GCnv1HMEf54fRcyAp5ohFkFUPp1qH2xxN9siq3AmAtmLAyN1jYuuShTvoVV",
  "key16": "28dwTDEasbF7tgJqYgdGcCGkunNuNhoCAnQpr3KkJLNLxuBG226xarfLUj21jMYUikZYbR1F6LVCgVtWhELiFq1f",
  "key17": "5gfQvJ9SyzeENotu7FxL4nswTkXLmXGFz32KVxKe2Kxwf6K8UCC3AU3hqGR3vdB25QLsk7296MXjXWZHrVgHEuBX",
  "key18": "5J7CSzj7dzTd8W1Bb5h97L4GEUC5xJn9fqZDu5kQv8hWPS3Hihu7vAEAqAdqY9KdgNeerReoPpezRaTHEffiH1Re",
  "key19": "4dr1pVPqox4kL5TEs69TdgbDZhra5bm9d2Keb8rcJ9QWF5Hpvp77Z7K2U1rCGHZDXvbgWkccaorBwzWwAuEe4i1y",
  "key20": "4zPTsLYUHtm3mqKLBou5FEroXCCFq6fNnRDdbrrnFtuwf8wBU6RUw7NNfmkLvZtruARkxTaV51fBjR1vovTHA9AF",
  "key21": "3TBpaRESGj2FhF1Tmp8uNYeute9ZeWVDHbQ2jSQVQvZazxFW8eaQKhxP9zduZGyvRend9RzveqzKvtqorKLNVeMb",
  "key22": "4Z8J7jAwktmKZFH1EksAooEuSB7RRkKy8VL1ECSaNZHJWjDzj7jM44pVRy2QQosruVWF3Hcm5MSbqduX4P5EXTnu",
  "key23": "2qrNA4tUvoBbf3vmdbE3EbNvVgAe357qnZxLx9xnvaR7YGPZ1emoc8s2T5ZX34MtPm3TDCzcJKNNMMacwPi37mys",
  "key24": "3SCeyng6NfjtUHz6RxEdmYVfRkozkA3KKW4E1XWX1eZxnhBKeUjYj3t7QLxgZYam9cXGPQ9ACSR86JSSmBPG9jCr",
  "key25": "4zDMjJkaxJ54nf3rMKSonwmbAyJNZBLsBKVoYN3ZHeXYXqkbq5kynx7s6zPisFtg5oQkcFYAW6cy5kwXhf4vNVbC",
  "key26": "36EcUYk68kasRj61w72CApTG4MAJcaMHBamNACXpwbL65pt5EeCiNBb2HHQsBDELK6YQMKyKuUGoqHnYfj74NxyE",
  "key27": "5j1UNt6PLARHaMmSNKevJ4G4St7wojhTbLPW36Hq3H6zkMLfUL7anRTRzVHDX89bZ2CYhFFjemes3yDh37rQLtmV",
  "key28": "2CxFJsVw1brqusKXZ9xWZcFXBWJc6Huxi7bz7HpTqLqFTV4JXSNNt3aJUgWV4hM6Bku7USKXPf7LNKzaNwgirxfU",
  "key29": "5TJpuNh2QgVkE5XSDDwXZmeLgmMfc25zRYoeBr1UsnzxTeRCbe1ozgVUSYbgeS6ZnYa1WL8nCwS83z78vTytuD2W",
  "key30": "5zBnm5is3mZsP2mkx8GiqigMCBwQFTdHKAnS6V2YdxUTG88xnkxXTGvWPM8mVBbVR35eT8SkxQ9LNMDGvG2w8Ws2",
  "key31": "27jbK4SRP9QexjCtYDsihxJqiKeRRWoHwdJre6Vw5Kz8NAanC7ouxmQDVnPpnRYPgbthDEz6wzcMSD7RRuKdbbLz",
  "key32": "5Dtg8FU5Fh219ZfcFkj3G7dYH3fPiMpq4XumX2Jt9Ls8WUvtrocGgUjjWdvtFmDNdNb1XRKsSVBijDoobscowZYK",
  "key33": "rrVabZcAnP2drs6CWTZowd74gWLKs3sHvMhehpzR9tpWu6S4AdkBZuy1uedHZ6g7LzHMKYLuJ5zWjBxJj4YjNT9",
  "key34": "27V5XfPUoFdspUm8JH9arP2YEawb7YM33bZkawU98rRADaVQqjcGw5w4YyqDfHshzqwTY5ocL8oFXBXVwKWQb87Z",
  "key35": "63xraseRWpLMKy44kZNF1XsYQeuanU1LJ7j7ZntkoyTQUDgW5krbT9BUUGL2dRxwbgM2YXyc8YQhSX6jwPZuZttQ",
  "key36": "4iHESUSqc9hL7FcQUBSfMBaCh9yeFA5KK66LbwpZgkSCW4jwJRpeC6FHUmr8Ka97Zsybpc7XQSWJgF3LycatYFgB",
  "key37": "5N1CqnoNhgEtm91DKKpzfS99XnyzEFbDdR6eyRN5HwXBEUdA48DKDSPyCGjcrs9d9c6nw44tRe1QPez6KFV6gGXT",
  "key38": "4DJT42HA4V23B5mEJEq52kzGCvM2UYXueYDv6sLBQMCa2aEgjYzaYvv8ZJgopwPyjKBtZwKiNnXb2DN43iKZDk72",
  "key39": "3xxEqTbF4rTzj8dBqTMgLfxJfAJrPYL642XomN7ruiFwdSucmUixhZsRmV7VLpQyLiXbW46S5c5zuuQiB9QYRdwt"
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
