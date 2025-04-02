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
    "T7wEha52sx6UKHTX62NXnoFi9ekqJRdwD8ouYdMU721wt3h9tqi47CiXCuQD8RgS6S9RLSkz5nJap92TFvZMdsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JRKVsYMvHqYJdBHBj68Z5nxP82a4kW5HRDX59KSHo81iQbhYGYhhnCLq9fyeRCoGs9K7tgtPmoPej6EoWm31b9f",
  "key1": "5k3YMQ7xGhYQZZiPs3rQiiB35R87vfqTJGesfKbrLDhzWTmNwGgyjtHNKQK7xiXriaAzF35i2R72NkfSKkvRfS1N",
  "key2": "43iAVFFZXnsruY6k9rM4MNDyzknBUeXaX3SWKX2yeAkT9z4EmHjpG5xcnoJg2Ae1T2zLTncGoh9cT99xxaVmxeqw",
  "key3": "3zTwLNtBe5bVNPwrCGQk5CBrQdEo6yHXBomJrZ5wQQqEpy3kyZwbN3weqoxVzDUrkXQmLzTbjaAZHYnzBrzybkNz",
  "key4": "jUCNKgVAoUorpPfhRN6wnhZeLRvVzi9kj18z8fBmksmyDLm2gv7fvzisoKVE69Dhv9WpvHNF8trksyiJPmwVhXY",
  "key5": "2yMcU2GufSBLBB58SKyS6NdbjwrRrHYe1XBAj3ExAWnRNUwgYp2ZqxoTBWx258doBFFet2XxT7CkG5CLuknoeKdC",
  "key6": "2aGhQxg8bgRWB8ZnhNAqCs2vf3DMTovE7E5CaCtxafZKazurGiVmTvhMVtdx2JcyJVEJTrci6Xsj1h2cUP7keFvP",
  "key7": "4NcD7gsfHNaHdUg6x234WwtPGfqmy6mqmb85JeknRvvQFoWkZEkj3FPuAotZ3ujU3C13Ek51jstDD3MfVR63m1rP",
  "key8": "4c2TSUymfTwtQHCGUvDcrjXVcKFJbWuC3RX4bgT4Mv1zKiiRJCoUgBj6shJ6e5q2ojnbJ3cXaEQoEy74QMsY5A4h",
  "key9": "4Bo2fqR1dtk7hYzcr68B9aWVj93gox4uN93ZnnbK4ab1wwogR3UodfwCX8PE1uwxan9y3Hrqr8WagdxLBxwDZNeb",
  "key10": "3wjLaCK8iJCWuupBwqt5V4btmieXRVXYPWGKbjTPLrvqs9LEBBf9x4LtoKvuMvbFiuqCnrqu1fjxnDpj9i7kpkrc",
  "key11": "4G1PXKTWeQSkZMQsLeZyghVZ9ibyQxyuiCFV8cz9sJaHHjfxkEmR6WJ5STYpD52dV85FkNWsGsHaRrS1dc2jXfns",
  "key12": "5EkbQv5AkztwoBZHTu9NK4rjjTa8ed3DTr24uvwMzEU7jTtcNewJtjdGnbEX7tq8xixxBfzLLyyPUJGAnMeNXtBx",
  "key13": "4UWg9SSw5qwHCj7o74EV7EBLddHcT2B6bCHb9jSbyB7npUYgNYgxBx2LFUe78Dudhu5e2HCYPMFzbUtizcV86s6f",
  "key14": "5DeuqCbZhpYt1mH2AwQmT9XnKWs56Bc2E8TnH29PSNkbYuQWpNmsttcopMV1LJ2xTdUxNjHu5QLzAzR8s63Zh31v",
  "key15": "5c9D39NzPnVxar6tnNZKQwRrqVHph4whVMdn76agFS56BDRitbkV8NiVC5NnYYhet4CR3cTQuQX284mtFwPruYNL",
  "key16": "5mZA7hf64kGMXUqsGszZTmkAsagG6oU3D7kEGzRr4Y5MzzUXgfbx71tnbBbSmgj8KCrvfsTLbC2aqLUhiSwqHYfs",
  "key17": "Fqwfy9Hiw3MHJFRiE3JBVSnxAFUPcMrmX8yNrTySCTUB9c2eVM3K4xnFJvnawz87v8BWGFVw6BcHphp2ayBACp2",
  "key18": "5WKo8aFhbWcsAFxPZvCLQ4ce2aFeHv7Vjcd8rGTPqVLkdt3LAx5pfa6qapctXXohrmk7NBURzhNxAEohkKnop7GW",
  "key19": "3NQj32dZkGPgMkMpBnQA2Qcuytez1LF9YTop2eS6XvPFEVVcbMcLtN8jZW8xCAyeVdWCNufw19SJ3DLiHEkJEJ6H",
  "key20": "2PdrJV9GWqBondjWGJUf26wHt3NVsVcKUgJcPzKZmfBfsQqbLaJCw46fynLv5tPjVBuqy6zumh9pjvwF77sHaLSa",
  "key21": "3Peh2a3Hejtnr1wNt9G5xYL7twtjrR3XgjLmtViQN3DVGXMhX2vpwHfHygNRt2dU1bVU31A5ZvjxsYws3DTZHZBt",
  "key22": "3zYYmbGqE2vzgZmL975xx2a2PVxT7ZdUHUaeBEoQG9BsNw8RCRDpyDKyZZMmthxZii4Me4dNGM5bW48mE7LTT73A",
  "key23": "5p2JEyDwJgJ5JNQM7xTNA4vP6TMDVN5YXJjfZmtucbHQhHnith3btHxQzXksnu9ZkYQJmtLiQ8ccdmfkr6kGHFRG",
  "key24": "3poxupm14b6mhDCXQMBQdnnvqPXP99uzMs1QCdjXiwXH4m9HTpFuBPECvx8LvxBgWE1GLaBUKhEUqdUAv64K2Gtt",
  "key25": "2db5WQaoSxN2CG9VBHtRGFbeNiykJD5rrKLYTWunCKndd7sqhV6ER1bT4d16ohPnqKohjDFqXh644BT8NZyoqnwH",
  "key26": "36JWDyMHWMDqWGNtb3SsJZCNJZFyqsozbVhjT8GVy2ELbYdCD996CDkoqkGVS4r2Xb4mSz32mK6TBMaK3qyKMt46",
  "key27": "388n9YGYgDB5aAj5iJ7cCfCopXdRbTSSgDRcZuohzJ5mohDcXp2WmyWCycT6VuiK6kUExi7swP37bEboTAgvE1K",
  "key28": "5WyXWRTATRDHWtXQmMPnbhXDggpGoSQ9ZBGkfZjYtQJVR4M7VG4HcthPgwze6omF6FbZeeG3AB9FpBQfimCRDuB9",
  "key29": "iorLEX7uok2Dw583YmGZM4d6tkatLDDPJtYdSo93EcX5qHWhj8tSDUHbXWRYXm5B7TE5sN7szJx8JRwhz8wF4X6",
  "key30": "izcrZaHRLnARjKu1KfaZEi5KrZkzf3gbNpakVVLAnNZVadrcJDrwf4bu1AHCbhFy5LcXX7DoQ1NwgNF5JJj3H3G",
  "key31": "4HoXjHQAPJSV932NXwdtNGuV4gWccdCfKMiEiRXYZExVJ5ce7iVXjYpSB2xHizXq4QxcFM3GCoMdaaRBKHqiFd2N",
  "key32": "5bpY5LfMB73vs9yJfEuQZG61QCTf8PwSg9ioS36pMbVuBdfYCNo67fxGDrLSm1NzvNmRGVJkPijQCSTwg5RB3BSW",
  "key33": "4ded1xfFUSuccDXzpwxsTVPxi9YYB5ekSbXwvJuRTXZQ1sw5x64NJ4JdCXvEdUGfhpsELVF4KQ4CyVWxYa6fe2Vh",
  "key34": "2M5SU2Scv2dytKzzDBb7soSKCa914CMR4f2f6MKQUUTmiHspJqo2VvBvaSzqyw9sQjb22F2YogDSq8UKmGSFq1dR",
  "key35": "KkygqE1FSLoXEomukAUjijPho2Je4B9NZ6wrh3kmXvurXQHvR3Rp52czuN8d4ZKmc8aMz8wXiYaiT8yPJsJVmps"
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
