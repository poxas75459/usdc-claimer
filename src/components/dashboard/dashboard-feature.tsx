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
    "4catM61anjj3beEBvRqWmJS8XUQD7wHzihNoWMtcLmefodaP6ztitP96e1CyBA6dPQinmpfLghePSLg3kFgy2mBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5maUEL5eC8oCGLqrZNq1PP2dBkBM1NSjDcefFK1wJNii1SGVobaeHuHPrq4iXCfqJvKGoFBjpBwqLd3Gq77rmdAm",
  "key1": "5oxcF4EHUX1s8xrumQeFjNYNXtUXrDLf4kcYWx1vxGkiGbjNc4E8gMSC24QrtcrrrEYWYrHLwxUEwVai1viXw9rR",
  "key2": "zFpmqBNKBTxZ6a66cGaQ1xx6XiUi4mxWfanVU3itLDuYeaCZy3q6Meu1MSiBEFQhPaYRyj6m6WbLGwxAUqCcno4",
  "key3": "jmLKWBhHvR5zbM5nha3jV1cJxPrugiTyvZgpw4hS9jrKchhuEikJusTTTSxe8HsKfFvwaQHAovbfGyeQVN1rD9R",
  "key4": "2MQkLLTL64ud8XzhuspppKKLBmvs9Kq4BFywv9u9Vbgmm3pVmDnHjfH56TQtAv3tKRQJk7eQzN64EXpikEeq4HyN",
  "key5": "2xqFTS6oUzh9MxBzDzcX28Nar792XwzeyjSftXfVtR5UUXfYABQZxV67SHvJANpYkRKJdUE6EkLdpVTxYU4kukgM",
  "key6": "4jrfUqTBFKpE5z3RpywRZ4khnNGoqcPWQHKiYUxNYtxsLWunbKyd2ULgwMKLpt7JKZL7brzPDrM71vNoao9DhhPd",
  "key7": "3TfatQcATbY4H7fCjZwvAKxAiqfyC4ZUYtF5cCM1M6U35F3frKDrpCVDwpcaGzKiLUptbCpiRSN9WAqbp138E7s2",
  "key8": "2AvDWavR9eURVDfadLi6TEN8KFU79yJA6btdkKyJrzmRCvo1gXS7Z22qZ2A7H7Rd8VRvrRg6cLPHjibhwqYgmavn",
  "key9": "5kbi7DjAoE8uW52yPNHF1xYh1QajEPsjQB73jtwXqhLWUCUgh6i8sRreL8GMgTmCro4ypiznGaLmCFaHUSq8TdnZ",
  "key10": "4NkzvWXwej6fyLnYxRaifMFtoMRDVqPPEWaCNUXBcUm7HMLoKVu3WDJaQWEFEhxKwNvp3rmbt9SXbyxmz5fQ3dSW",
  "key11": "3oeh1E5kGvp7Km4XUntUwZB2gMxuECrC7chFCumTUhLEVCHwtqSsWNij6PNXjDQgA4MdC2nsp3dwGur9NqcHb8iS",
  "key12": "2MH8FAkGHcRN9wNgNv9N83yP6CkfA5pqkNf8xKpQwNroiLD1V5rcCYM4WHdgA7C1JVx8QFDeCfEngjLXC1Wm5GXL",
  "key13": "4q4jcSgV4bYovFyhDkUGbUxnkQdZGXQSXwLn2jbP53uqqtvC4y91uNvkW5AWo1iZXk2R9viScG5SmXQs5sRmow9F",
  "key14": "5GJn3LV7fd6Vr5mMZHu5Bh8Cy6Dc5bXgMnyv8eiNcqiZ3MkDDpDp7SsFSDQVZ6NnEuJ6x1aTRQa7oG398QZwFDQ6",
  "key15": "4VSUoGC6AZiNUdoeCfWwuUr94Xkam6xia2PyXs6vtLtHUNUQEABSzSvZTUH4wPbbrtgBdKu4QUyazLQes9dBVnET",
  "key16": "34UKvW6rMdxGnfcF6BPwX3dHBZSvk6YMxbTEYJcuaXChV91GCSGiDkdU723p49A5PGA94EDEinnCPiaapnFiNeNN",
  "key17": "4AVtECU7uSYiRVZ7ZswJfWUWizKFGbNqyCWP9Lqt1bdsxfqLoLARjURv7hFdWxdzu8AeAu2TVYy6AzF7FyiwTua6",
  "key18": "4cp4XiPGbxrwcNs6wv5nW5pqJgqbvKFBsqBD78A93G6ysntxLGqemNBz6nXSyLmRLvwwfK3C2BikizGifyuSiC9i",
  "key19": "2JFUkyk8FN2Axoxf3ZA3g85NjX9TZfhbHwxwmZpReNXknwaqvPiTErphZjxYsZ3LJkdwAoeMPtu9PnDtySe1rq4g",
  "key20": "37B9D6RESAHRGLg1WWUipYbnjMe9jZVsJUQkUABu6BzHPVtzMAEzkjbxeXuYsWtnVPArrY8nxde5enB4GDirf1R6",
  "key21": "2XkvW3Ci2FDLxuFCbewfFMAewT6vNNsYjp6HkkNTWHQveJBbBADBdQewnmXRDPsaKjA9MwrNLDejWn4LseNioad4",
  "key22": "3aqoNroxPsHzZ4q5bxJz1exvJL83xo6iD2s9EJtWq7727ehWid4zwPsXc5nnAoWndfnb9UA1UrsEnstt232VkPzq",
  "key23": "3kcAs4nTxPYRnDe8GRkccunJgsLtpgEf4pmzv1vndQ1kWwwX3ft5n44ucH6av6J2TE82AyUmwRUTsbGKL9wr34sy",
  "key24": "4MA5RLepRC4HK1ZR9qb1fazVobH31bSFX7UzNgM4RdV9rHZBomNwTEYuHonJia8FBW9WufegVM4n9Ftb6szo6cT4",
  "key25": "PG7R5MoL9BJQX3F4adt8oSw3jvkg59CQjStu5V6s8k5i8vMikUCCT3gXZJ6JcEqbAAcxQ1XmX1ESgFVLakoNuRm",
  "key26": "3dto55WjN5vvfxzWKtFQ8g47AGxbGjEPDGwQZoJkGyGLk2fpTpXyniN91uKFyx33NF7QDwd7onortoZseC33Myyd",
  "key27": "3DYtHLaUtkNbSS2PmKoChd5tSHhzyd3M3Um2pgLEZUy3fyWQvtzwLNT5sN6WZ2ZN7pQLoK9i1prVP24rMf9mNCLa",
  "key28": "2hG7ykP7rtGpcHv4JnvMEfSbnNzSynVhsZrdXftPQKTt5i1AhuiSPMRy7V7Hr9fg3rh8C5gBSEQ2JkuJqxaaqx2h",
  "key29": "5eibk4i8jnbPGdkfbC57eef3AxvyhPjvfVGeM4Qr4796m4MeotEtvHJHuykmFyqJp47zkJavNQB8UnDmjutHHA6R",
  "key30": "439sLuXkng6xEGeBXgHRcoKx9nYCpoj4pDEQ2CUsWvaqvUAcBVwEB2dejTogrgoc5Aka8FAX8Anbt2CYon8YUJ9y",
  "key31": "3q3e4WtyQ3Zkk22uP8bL76xeYks4CcDtsSMthDjihmxZ5owVfDNDkc6fnnDqdmqr2D999QwgrTLL9XmuZ9Uod1ss",
  "key32": "VtQDFXqqbacDB4bCbkX9WzWrPC2AE2WWjVMkfYdNU9V1Qmx1aQ4k721EPNY7y6FcfzLE1rALPJNxagPgB3P64h2",
  "key33": "5BZxvCg5WEvGKZKXUsqh2w3nbUXNuzqA2AUDycUf3WN27V32VaMkPZvCgHXXUN3Hv2AAAtcxckwkCJTzUxgcTrrq",
  "key34": "223pYcrAaBQFqLk8Khi13fsUfyb3jNJpgrqk7qcXUi33qVoRtVYNw68x9fD4eGfnedTbAkow2KhAhvvwAAxKdFKb",
  "key35": "4q2ZjxPQTk9VRTxtE8EtGYQo5hBT1dxbAvoWhvn7V6CdNyJ4zoBS7yj3xA7zBTm3anFC76doxyfQt2418k9vZM4K",
  "key36": "25FYhjCgCTwXDySkC1s38a2HxEnisxi6gKsNjR3ekkXuZv6gwErorPZsjm9D4vQ1tSt9KD3Qc3VsCqu525qHTjXf",
  "key37": "5DbgjXxRcfYadB3mFrvffmv6X6pMXebP2nZNw4es9PgGEdSKb7pKbQ4ERjPxz35GvQxkbaHfPXW9Kejoo52RbyXm"
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
