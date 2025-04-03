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
    "5yBweDrombhgEH7sJL6RMUU9VDR3e6cKaRzvCG7DLVy6LNUYvkQSWCNDmrdg1oRL21tuo7yn2RXpqMcNKo4zBQ86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tfhEZoBBowuhamwoFFy5hZdkdm6bz9ovAR7HTKjKbxawuifaAJtwzHgSmn1oyGn8KsZ2yPvRTR8DHApKqPSt3ME",
  "key1": "4zHHrW2cCLP5zXAi88bBreCnwWVARVg7wAeHNkyYJtPCteTARB8ni9Bs57RqV7KKfUiRydNYrzgoSka1ibBHBYVj",
  "key2": "4LiRYgjJ8J7c9rCjCyY9u4Ph8VrUVLMkZt29oCEWawroJEewVokG9CeJgjKa8MVxoGaV4fF9YGewyMZgasAA6KvK",
  "key3": "64Ve5qvjsWMi8nzcfb5moyJ97GER4AX2kiHBBqT6f1befhehnk6MpVutsQU2RkGt1MiDmhk6a13Qp9PiFWjcdv86",
  "key4": "2dghHiZsWprDTB2kwGpP6jYuKRyvE2vzGnaL15inkmctTuxJi38AhzeKjqoyiQK7NHY5pycPBoSBzJkAhN5s2oNE",
  "key5": "3pzyYbVF7Qd85sdVsTRAwTQu9WjQk5b8mrD3riahMg15A6VPGnbjuotX2zixFt34r5wSam2ms6L7vew3wAax4wkE",
  "key6": "hxamDqWkHkJEHtm1RrSvKCssSVKnHcByxPTXEXv1RdAH4DpyHd658rshmMnxYdPn9NrfXMgy8YU8GGF9tcaRh96",
  "key7": "Bnz8UYEg4vNEqBURxGf7agidGgrNdpVAv8GmdohiG1WviFyL16d6ZefweESr5yV8jrytExWyKGevnGWF8byyDpy",
  "key8": "5WJKnc9YvDBZ256y9SPaiLdja7zo6dJoKT3mnGZuWtT693PrsXoRRP43he3obyVxSucjXV7iAwwPkw1xKA2DnKE5",
  "key9": "29ee4NFN8cZo5yeydPKhTWnZfb773CgSd5dw2LqN3KjWSN6GR1QcvQcZoY1M2g6oDm9sXPyELV7TgeifEsq5W1cu",
  "key10": "5GvLx7Z5oRN9Vf83nYwCX7QjjDhyQJFUdWPG7YFXNxP6QqWouzL9qtozcxGiuoZ3JtZLAP7kp6teVLKqdvZRjeZu",
  "key11": "vhzoKAjtcPQNu3wZvhvPY95X2LCHefcvuyv2x62jwn7mDsDta9esEVWWyagqCrPdx58Qj2kE5hASaTo6j3nApC1",
  "key12": "3WfLQCz8Jc1aAecU97Ck2JCw8sgs1kgMLYUiHK53vQuuBoejqjPjbasmh88gCrZi3k57aMdQuUWSYDWEDXQCpdxj",
  "key13": "4YeiRmzHVKi6bn6UsCq23LdaC9Wj7Qh4QMxf1yGVQUTTRupvfqcWnv6J9ZRNg3tMuBwx3MTc1Q7heDD234Y7AXD7",
  "key14": "3f8xvrRozwdLiaZB5ESxXQBTeXNgzmwJJ41MQY73vys9caa6Arawon9K64q3gaxPH6izqXAi2EED7gAXc4zmXXgX",
  "key15": "4tHE48DHYecDJSwb2HwHFjoHfBeSPXJhRc67o45cJKnXCgskc9MtBjYcawnSnSH8qsZJFL2dkuPsXhExZsKfjYD6",
  "key16": "32JJ8zVh8cwQC3K4bJN1g2fBwuKVjnEV37Vr2uujJ26a82yVxoRv5ncGZLELgfbeUhm56h511eQenztZshZC8T7U",
  "key17": "49LhNDJe9miWPuDnjNDdUXtk236TZaN1fPGeFURLPKQhV9gbCgqr9i6t3KuzpZjbwPuCHsJs5g4VPw7RTmVbh1sf",
  "key18": "38VZhj8we3GHd4CeKLXZCPjHuky9MDiQ7iFk4as8HepD1YbycJN3R3TEhL6KZLR1s4K7QKmXdxFsodZgUCruFHNH",
  "key19": "4oe1SFheZa18Vf1ATU4TjeF7sdZxpXaoz9QddJn8hoAxUwUqyvZBjiEMRDfpRXciq4WHRCPs6K1mejXSkkUc5Aeu",
  "key20": "4MgfvsHzRxBvPved8QctEZnsbWfqXrMYEvqzajJvRsL9W3mydrUAiP6WRgLX13i9G5fS72b31KRYhEz9ABvvbW6m",
  "key21": "yotZ4VXoZsuACF967VxbXMdEynFGwPL9wYpwaVezuJufRgPTJw7x6nyzUtJHA2ZMqF9YKZt863ueu35Q6RwvdUS",
  "key22": "4GqY3hSAqUcnuajA7oTFVfHpDPrpG63prZfH1fpfwSJr4p2PYXmXM1pX7m1vdY1dkZbNMD8vhKD6m6ZWxrQE5LE9",
  "key23": "2uNeeypjHTy9P6ivKL6WqLGFRVtVuYxDMb5EM28KM5FabWSiQi2VqQYCoz3DRFswqcb3AgiQKzYPEU3fcnFRyXq8",
  "key24": "4Y41JCHNuBxEjpZNgcVGgh7B59UETHXs2mttnd9zCfZmikdDBQ2xvoG8AdWMwJmdcxyFDEARQVZgwhrn7KVaGX14",
  "key25": "1o1ry1ivjaX22GMS2q4aHd3Dp62gDYbJkY6czYtMW1qgfwA9rTmHhdgmjw2fTad2HubAfXW5yW5yqzkMgkVHmNc",
  "key26": "4CZE2cn695dEh6FsTJygiXyRHqvK4p1UztSRgkNZ9T1BQJqA8gbVxsahJV5cKXYYXTsYwU3Gmy2qbXPJyrMVAvJq",
  "key27": "49dpzhUn2fkEnCWtXkYD35qPTxJtJehZbY9cs77g2exd9RR8aDgS99Yh5mfMqKKz1okQSfd6NrShJtzdiAu6LMV6",
  "key28": "2vtE3spV3LbUxyX4Rb6MBAyuYu7MadZB4kdfPubGWp4xQUJBfTF2LibKF59y45UFUtFNQ1o95edpHmqEH7nsAyEW",
  "key29": "Ky4fbZ3uv4bJhbdbDMzWmgScLpMmL3FAx4EMLsHGfDGz7NHmRBZa1ffyJ88jqA5V1mCLcsoV2jeTt4xTxaPDEAy",
  "key30": "3MHsKVeV2HYEZgWkkPJvEKTtzGz72uFUVkcfJ2xRz2EDeBVPdtzSHwttqjx3jtdqyVFtKyYNoFphgFAnHT4hFgfE",
  "key31": "4tCsEWDBY4Sx8QxUi3bYNhRjXh4DivSANYbpMe9iYAVQGMcFEuBtdXSstYYY6nUBuSFnR79J5614JqaUyXdqCN37",
  "key32": "49txBVqUChQKR3wG2nZ7nr9aEurT1SCP5rHfuPxuUhCKStuE8Vxetr2xjydKdy5YrD4q6h7QC1cFv4sK9eE9DY2Y",
  "key33": "W7J7UU3m1CWnfrz7s1YMwFVQNgmpLPdNWTbyShtYHRyrVyAbz5zRPeUWDmTgouWRWcJR1Juz8nNa1ZtAEz1BLqe",
  "key34": "51NqSfcLoRQFi7F8VTVkGdPsZnjT6QbA5MNKaXvqVmaJFH3ycXsBxSYyBpibxf7y2tYRE7Agu22zNTL7fvz9JSgR",
  "key35": "54neFa5sT4H8Hbib2CpFFdWpWpijdYBKTyqZDE8AauBuZ3rLL2z88KShhBgixB3TdtANDNaF6s3uJLuvWK6gBaiz",
  "key36": "67qrczpDj4ZdeFbYkPsJDa9HiHFWJtuH9Hjr1LCPXEZDHkLiYCtj6131KsNKncnvUyWWXL4HpciVuThJGFX6WptA",
  "key37": "2iH3DSciQFSybJvK6WJoZyumjGY7kJDkNEnJDXcYJ5v1Vf1XrXJfxaLqWvbpUzrexpMD4fDuYjbEeRxCjovWVbyZ",
  "key38": "MmZ3Tf9vSCzejT4VxM9N7JAWT9mEsx1UGyuTQjgE2vhc8wN4s9vxzSrpbaVUy2m1SFKWx7QRzkqMow9fT6C9vDh",
  "key39": "5BcdwZp4EdinTh6vGzaK74p8R1ERtJYR4gxv6HnFiJCU8jaQDP2nv7xRQqrhxA1JWC8tmnf5TKzSsFvFAxSv4auW",
  "key40": "kVxHH1PW1RzW6spVkKd4tUXSyD7nY4FJPrVtppKfJBsR16kQkG9k3CUXUqU8L7b3LAM3PJcPbKXKaZ2W8guv8co",
  "key41": "4GgbMtk57fzriCCcrFZkTJEC1SqgKJA95biTdEAZrMztKHzj6WVgiqcRhG5cpnarCq55r1GAbxbrVBj3GoCFQYX3",
  "key42": "4eAhvr5NTKAZ5KtimmyS71jYni9NhZLuMv5SH3aNhyT4PmUrFajjNVVrgy9q4jMpuN68jjQVPyT91Nm3FCrZAHgW",
  "key43": "3MY4X2d8dby2sD4gb1LxLeqvH84poRuyJRnp1pjJTYiRd8Pvie9g7YqWcxtZfEp4TRZA7ky7JKf8rRxNBWRta9J7",
  "key44": "5A5qnietkVnrjAdNc2jvZEEPdAKUgfgb5s5LFKqWKH6AGASjZu5kpciDYB2L3gtQN1jWmrmd14T6pmi8iezLXg1J",
  "key45": "4gTZiZ26UMfvogiV6CorauRMvM8WDS8kCEcM7ZABFt4qdcVQCy39BDH4zmv4NSK9SvJGyMuhfshwBPJPPkrk452g"
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
