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
    "Keteks1mNGoBzw3vuPgEK14SuuFBBRHBcGsrCxYqmBMhhEJtg8bpSDhZGH4BqZkUx5jf4vKCTJiBK9HmYSB3asy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nokvepCJ7EeNgApPRGfcw9CeqG85LZjf1w2n51RNe7Jgvn9aYn9oZ88hzk7evBArXv89X7siYhqJdWSVNKStAPt",
  "key1": "2XEDLTMkS7Xza6rHijRWYi2we24etvyPsciAwUb9eFReVPxgRZg8zYtkeJjoVKBUoYpDHXwCssZjhL2SdsKJDqGT",
  "key2": "2DjLkLU4gTPqPhGEAHQUBkUSXb2aBXaj76kpPrMNKzqoP6Nhe2pdfRxGim54JXnN6sSomqccp56dtPMHSizJTniy",
  "key3": "3Qp1jsoKWmWWgcM2au7u6tvBzao6H2UhodgPmNEv2j3PDPwhKWpYjpWdFzsJbmSGERRm9B8cDv7QS6j2D46XjBUc",
  "key4": "5jHhcqoTdKL7MhUm2EA8GL9ya7diaV8x37GhYHsRmhvXqbtBXKVp9KS6K15b56mpQ69NcuZVhBu8dwgD4rkDMPna",
  "key5": "368Fzvf6qf684BWDBz5Zf5rYJWoBMPGm8hE1XmA2PvmpDukb56A1RJiFT2vNMG2pDKSCjeBwciMZGqEmHCn2jKRB",
  "key6": "2YMRatnMB5WVnNbaZ3MqJHRUnRvDCdUDfjCDX9rpfyUj79pZaJorVCyEv6sBp7569ujGJdckfrNZko3M2xmuQ6f8",
  "key7": "613cn9tnReM3xjzc3KMYTzxZLAtqd4VyueVUi9bKWEW2EWm2zJP6ByniqNqvoBb7WRTg6NJiqwNPgwnZv6HfEkAR",
  "key8": "49qHmofJciEZeKv3JfPBnEKkUzpEgUmqh9Nw6WTrTFHzazcvsamkjwjNLskETnithzHTyaMXkr4tBoE9pbRycMWL",
  "key9": "5fBy3NMteKm7tn5H59E1s36oikndqC8QyPCy91VQiyRAai2wJxa7GBkkjj65pSPiDTNaM4hVaE8gJkaGMPpJdLrY",
  "key10": "5maoSR3xkvoHmGuWUKSRQMWzLNA9r9WkyXGw71EmFsp9qwWDvz395QRidS7aGByEuWK1djgxQHeQpvtCSjsQZpgZ",
  "key11": "3EdberJkdAdx8Udnv3QJLX4aNcnmkTgwe5ajD9cHTHs1bxtdPECpiSLZN1GAKn6gBsgZhS4Sw8QgGULoUaHrhdfn",
  "key12": "34BLtEfhgFuTJbFsUW5L3C2z9kvkCBFsrjQQMgnDYQoaSfrSne23roAdeWbVdKqVkN5VVvcd1xVcxQqDMBCcYhtU",
  "key13": "4JNUBMnPZZDmHwTNNbBytHjcib5jgf9oQJsLGNv62LVENj2QW14qULJSA1mWW439zqXqdiX9V2peWV8RQp1yaghw",
  "key14": "4hdpfBTby9Y7hxpkpc4VduTjAZQkj97zWiF8iAveUBNFDvZwPm7TXi9q9F2uXfZGLPUFG2WAQhAycvZdysFKZLn9",
  "key15": "4RCMvUxSY1eN34kRH3aNvYZFkvcsqcwtUhnRo7GG6AA1kNKmJq4GAn8qaxdcnzRdwbWoMb4UEJiDstHdfWiMB427",
  "key16": "4ndKsdRsKmSHX7iVwe3xqL1ih4nE1fYFApxK4AXsA3X2ALzTG8yT2CPwG8cvSgUTptfsW38dEpd9v2xMmiBZPtM6",
  "key17": "2TWcKSm6EZEFUHHUfqzPHcJ8mMMz3hoW1zfg4jt5EC9Q8UzsfmMurt3RViX1chyLzNmF1sjuPX1u84gixoLN8cBj",
  "key18": "CLKbfzpLrXvQkMsyLmbT18KxDG77t7LAzN23JCvvkkF1FjbfJFaBa6SfB6WD5WZe9p83XPrLpLTA3LR4M72fax2",
  "key19": "4jF4mFHhaEQfAvHdqDNgqDCnxd16m9qLJSaJJQofRUvLvyzvKNMW5VhAtvhvktszvzWvyWfb2MWDZcXR7bTShM6r",
  "key20": "2TdiZW4emgAipEPZDuigivX4gRDpnx72B4qUHk5QLc2G7W4JspUiKmpwMEdmP3j3NfG7AANBVTa3kx9ThXTS6UUo",
  "key21": "oAYSwDUgigv9TsmTpU135H7wfogbYzWcZW33ZVDr79aABjMU12gRqhmNx4rkJWPuaGQtqLke6dbhTeYwQzwe7Tq",
  "key22": "5ipXszX3qmcs667mZr7LeLYaR5uyL5cGxZVZLsuRh7bk1h5sZjq2Nx221kvVG7VS2gi6ij2U4fvCvAKTAdRBLAe3",
  "key23": "jS49NqXS1sHEH98YPYtv5ENXMqazQfrYw9RHYSioHnboxL2X9Df5hXntjT5pn2SJBHCJPeUpUV28t8Z3uw4j3kq",
  "key24": "mHtRCA6pBhpd4iZTupqukd89ZyrfjSNV4sg3YrTWDzZivtwxwazNUz2SUjjX6LxCaxXZAoCnEqBGdraKLfw2srK",
  "key25": "2bBsRfLnT9yWYieFuLrKxd6CKtP6qodjpUTY7WBTBbEpf2GwXFK7AEJebhnx9m8QZGKNy4VQD95NfsHZdK2KP8dR",
  "key26": "4BY6y5QkUhNihfik2SMesiK3FHtf3rBnvCJdf6JzRz9pVaZMfwjjfhS91exLmAaE2xGSxUq1ePASAKqtzXLad8qT",
  "key27": "2GUQw5R4HzRuChECtcqW82zb52RShfuM5HRpDfs4khUc77LAMZm34rtJvpRPXnLWT1k2cKNAsg5LDR8wy2KKg7AS",
  "key28": "vUtBhrBMDfqGSGBFKY4SRpY6mYjaYDUK8PLK9Kvjsegqqy2K8FxknM6R5yrFjQErBnYjxXahyB7zGTUzDcpYbYG",
  "key29": "2734Vy8Tyxu95H466uYiRtdo6miFmvLtty1VaPYLehfDEK65VAmxPwmpGfN98dkX6Gw3V2FmmZru8R755FgaRRCs",
  "key30": "5aHcPtaw5GDkJJGGpUypyAXiPiu5k8BoJ4vjqDkVAX2QpWDuXucWwFJv6GpPQmeAHqSEVLKUTeiNMXQCK2BNyCEM",
  "key31": "2hiW4AzmEmfXzWGA4PQbCFvNn7J8Mcdt9w9Z6GhUrPCjdjhUYzKZYyYw2u2z4rpUhod9o49Gm9yqrs1J5Yzmgzcv",
  "key32": "2u6wR3qeBarrrztSTyrpWHLmd1bkTaFsFdGDxhT84taDknJfRzFQnxauHcwBWfNkypWRoq8wG6jeiF9KwLMRg1gh",
  "key33": "4cjKR7QAjN6CjRGUVtZXumprdPWXdyGHDrS62FUxFYtUB3C9p96mUoLcrWWSvNX7iW3a5vEk5eiVRz1Geip5tCZA",
  "key34": "A1M7oQoh5rMBHoMLya3JPtPHGXzDGtGpMQHo27XXc5Ubk38VEdB4oXHezkgD5K3JCiXGnF9ZxBogjtAWr3U3Wnt"
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
