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
    "M23jTqpqhUjP31RpMvig1UW6X6oYrUMw6b7sUTzWMgZsaRLaLRuixrdtyGtwoX9pfQDu9FrHamWwXtjdRVw1Ms1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YTTxdyxTWEsPqp8yqTQAUCKDWjmCPxfpTPRU7RhgKF1CU2rJDdn5NXebaVmqtjYhK4ZCJXkzFySKMkDJRhT1CT6",
  "key1": "4z1uSQLKPnNQimXGekW6fW76JSJ41s2FqohXf6Ly3t4GbvYcaPNFsbSXmq6EVZ6qdiCtLMoh5KqZjwTpsjNF4WQC",
  "key2": "5ASYqXfbiHP3abdSUVNi1tEzSAkSNzxianwAZxYbKXXG7ss3jVVkgzVcBQd1DwRqiSGYFqactYqt1s7atchHgF8u",
  "key3": "4YFEWzxjHVhHnirUEPYcMPiH6zgZE1mVyHKVWNsDipEpMgej6DjShdUiqZCEo4Vz1zShRCQyn4XGYEUNcC2J5K4V",
  "key4": "4Afz1BRDV672cExR8X6XEGmfbiNqpPbPycU556DZu4f2bkXHSRQhyM6L954hCbbvXaEgTLMgwFc2zYKu5qgsupfZ",
  "key5": "328iq99wKTTF9712dt3hAhoqhTU24s2bDmbWJsWjxN3abtteyKaiJ5udvukNWNBemFtdWvbey76nf3r6Feu7MPU9",
  "key6": "277AuwZs2SgFRy5rTkkpNfxgpmYA7AQbHKhovF1Gv5vWwALLatB7LsAiy1LsPfG3H1vxZAuUYKhg58pkNTh1LAXv",
  "key7": "4gARJZmDadpJTTyBwcUxHRc1VKmKVR6BqPrHV2mvbpqSKithGXn6KoJzAGgV8r4VHCh4LbTH4Lmi61RKVcbXYw81",
  "key8": "iPJu8zVNbc9WzFgoTt5AcULDqbGLV1uaKcAVKiMhHsEbSATiTTmFYDbXoGVtDrFqCuG1uL5TMJhgRbUm3Mo8KCk",
  "key9": "3rrB3MFtdqFfj5GoDEnvrVznqT1gy5xkzecZn2DG2KVoWZrAoUXxy77BcZiaJhEC1x5btt5NStiWpK2teXbrwuRp",
  "key10": "DM9rxeo6Z8eimaTzbkq4tvYV2FUGFPCQ4WBcaB86bsK4EMTgjUZb8jkposp7C4Z8qTyf9HWbZnzdJAxffz5EAnL",
  "key11": "5CETi5jGczTTe6sVPUxhyAsntjJNsMtiFYi9LTN2gSCxr2LzapbbPGxyiNaBXfShWtGk9Q9ijtFrSBhzD5QuiCv",
  "key12": "3GSBFiiRTWVFjTPvH9dEu2hPLLMc1FgSEBReui2dKVKLCgaUTN199mPXqUHA3NqDaypZxHyZMFM1mDGB6iZrkcZB",
  "key13": "66f4Qr1aPmbQDghEob3TDXcHmoTBJjgVE6Lq33oqwmxLUULYWoG2bAhCpj3eKCrsBEXiofPDboUda3eGRK6MHdaC",
  "key14": "3qUH486wYuhkNvqxJdq4uPyBk8NpyfrKj3fotNmg8V3CuY8gEGkC1Ko28VaC63qLhDBcYHUyTQbxjy84q3JQJCKy",
  "key15": "3n1WtzjnocfUzD7r3eoDFqUt51dxcxuefZvC8JUkkKRKT4CRrSgotRdzr3zZt2ELJwFPSCk5G1Cr1uoLZBZKvcqK",
  "key16": "BGE8aRyCboDVAVfqtLNZzymuWTrQm1VigitrdYKJG67q8GmR6FdT8Uav7XqDwsXRKssSTU5R3kHJhH1fLT6rpyN",
  "key17": "44znRoXWvjLcHzqpPQhXWQxv1QtkR8YyJtnuUtGsqv4FbnaEpY9WoW7dr56CUj6TYoXMtCf5LwrjsAu4sZAAZBcY",
  "key18": "57M5z9yioLMTvf4C2g5KytxJpG1GYGCyBhE7NeXUb9NgQMBrdVPDrLbrZAHwignYWtoQ9qKyw9pMdNfS7oucoErF",
  "key19": "4ZDVm8yzBGB1avxFvC5E24RFGPyC8rK8eo1vaMVqc9RhsE86m6yfQy2Uzh8apFrWFupmmhC3EB2qhQKnnUDGAdKC",
  "key20": "4Wo7F9UGbT7oUh1MwZDJfu75dCuFUgRr973iPtCRhQdpz7x31fvmje22EmFE1oueUBSh3Sf74T6tMB3s4RfzErgg",
  "key21": "2oZMNTdfgxgTnLv9hecd1rXKSqBbjuT65DxpitczHT4jUB9bpgyA1zZq5oFox7qZaamNf4LAtTs5CTibeQKibvbg",
  "key22": "4bRKxjMdkMVjsQqYiJ7vA4LKeZW377K5s2xw1L9YwCWvyENk4SuCs5zULSjL6pbm5jSiApDLnQqM91F8Xngdtkxw",
  "key23": "5vrJW4AHsezNpKks3WAof3tywcaL1YtdkvDNFyMLZUjeQfVR5gsHYt8ph5AjzSs1r4pGHKAyDYjUjcDTcUFUXgaP",
  "key24": "39Fk94FtezWmgiahJx3NvGHHVMjYGKT9LiRFQ7jcK9PG9tQLknakKNKjSSfE5QAFxZpqWjnxBf8UzsZ4TZ1uyBMa",
  "key25": "5mQdJnLpK3mMfwYMmGDPfKVja59DRGrNwmFyTsh3R4hYFQ3kse13YQXxoL4WXx28Kbf1CUJQMHpVG4TNzHL8okXM",
  "key26": "3tVcp9ACCrHvhSrYBs4PYa6JCt3wEEKwCTfRi6E2eaYqQghzvPGLuSEp7xYb83y5CWdD1h7kpoF4nViaciFfCECd",
  "key27": "27FQ1d4sF98JnBZaJuAJR7quC5vz2fzdB8aeyqFSRZBBDtcwPnedE2ndUW1Mssu4BgFQDxLH71Lzf5U5Ce2WNnhp",
  "key28": "5iNrBVZ1h14CfYGdzKK4izxSSrWD3mmGuVdVNSNVrX4B9yMggYYHHGgiSRcYyaX7ubRyzf3i49yrosEb42RvH9kP",
  "key29": "5EvvQszTheSDjg9UmPf7J228podSGWtKX8hkUyXmm7p6VmJBkohnmW2qus7zyATuGen4GLHohBqQEbSsDm4X3Pi1",
  "key30": "5JPy2Hh2zTSfiCK63PiLHfAvtYwhFsf8vqMV8S6SM64BdXUFDpCYxJeqrrs2VEKwTDo73hfbrXUJR6wMMNeUgfJd",
  "key31": "2zQtakNTSz45qFiT61n27dCP9wkmtrcoPPbPoTC3t2b23gK8R1cnnFmsWZabLH6SLQ7MXVVDsn4enfeja4B7EVpb",
  "key32": "3KJAb8EKUS34LboAgWu55F3fs4FC2jNL61Hh41TkivecYX1pef3xHCKwnejpwRwFL5VZ8MG4fqx9fQ2R7ENdmRZw",
  "key33": "GRqwcP4zXWjU1nnJt3RfExxnyynpYfy3gUsFkJfwRqyeeFs1Yqd8QHV5FdAiYAJvP9xaAaUesoTcM2moZxDxwyP",
  "key34": "Xkw4PPJjnqPu6iw2KUuEGDsPuK2MvqjnmAVG8ZCEaoP5wN14ekQuL6BFxdRvCvMqZpFXmjfVWK12dmbXimVw3Uv",
  "key35": "262noZSS1MZgNKYRCWrgKcK7kFLe1RxD6sYHnXvpVWd4T6uD1TDtjBjAJJ8tWJLsf3yx7bT4yDzkVcJrwytzTemB",
  "key36": "5tS7gDs3sPKK6Zoj2zYuq7Rv78dm71G5byCbopEAdptJ5HPMk9kS9ocPLJvk8NpFKi8duQHd9Zim4e4fUSKbA8jL",
  "key37": "4W4pPqgmCa5wHQCdA6E978o17kzA7Kjdbgca8cgjUar7RBYMzpLetyddWSy1tWo43dz5Pg6ReDfJdyjjn5pz75xN",
  "key38": "8h85PsZd5RvPhwSzDUZthGYczN3Fdkk9QuDKnfn9BYmeMEV6RpS9ihGnJND7KVtTnotKUieVUxJhpqtwvypYZEi",
  "key39": "2o1kegoaGoRsFTBZMcibsdcgRjuVLvCdQJ9dhFirixYNPcv1YwjTyXzPh6U2DUJ7kNcbEoW8LDttuERERV7YfNjM",
  "key40": "5PCdPdy3zQRkfKPVBnjdKrahcWJSJuBp9fQ5gvdzRr83XYCLZ2EJTypVYpKosfrWPT98yKgfNJ4W5ZQBUA5sVbPG",
  "key41": "2YZ6QE7Yy2wibPzzgZzHgkegAHeEeEE45aqYNE6TzaDMhba1DZpZqDKSTuVBTY12UcXyK5goWEsBSscHdFJzbndn",
  "key42": "4YCdpMGwP11bBxDYpahdUM7AZCHN7RNjp2yC3Vdh5PD6hxw92KVNszqRFAsDvK4aaBc5aNaTcyrADvj7EcLSobWj",
  "key43": "4CgL29CKUq9uoCMyayQJmAu6dWZw7PXTmRMEhw95ay4x6yvPJbKVYuPfHdqv7vpsKR25NDU58NFXKazmqaaEcxNm",
  "key44": "5c38VmxnEm2WGCvzPcuLNVAUebowQbq8qeooAMsFzWZVtSXokZB9WndUEBw8CUA6pn2GNGoEB6XQ4nReV7ToJAbM"
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
