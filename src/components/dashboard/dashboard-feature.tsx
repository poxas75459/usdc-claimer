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
    "ib6HTccxjVmNzPu33NeUWFCVXPfyEP7AHzjZ4bUXSjEppxMpcqbTK8THTMrSGiruLCf32pXnuUnvKAfK6Qq1jx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PyuesQcyKQKbW4Avm1M76Pv1HnXrfognp7VfxL5dDXfco1af1NHSa6yRSz43jfycaKxDVMr1KZi7m3bzK2xxbJe",
  "key1": "5MjCZe7Be9Vfzrqqcr2woWEZj1v7d5BqfHnhPVVCfhQWbZZHosgwGSPVuWm55vKSKrQQUr9jceVeVFAE2vA1qJoG",
  "key2": "6eRRXRjbYQZnNHJjHKXgfy2Gwj7YS6iaxcupeWGYCj5dpqn4acGkb5oi5oo81dfqvEwY5pKUYy1nMsursSMC9TH",
  "key3": "2Cz2zGvoM8cFkQwsSMEnHvE9p9PY988784MNsg8MrS3C46Yiah8FMZ7K93Ly62UZHAvpwMhBqWHLSJYdAfXnJeGa",
  "key4": "4fMmEtgHd4o6rD4BRzD96sAcYmugBFLdBoXQ5fmfCUDB2WNimZmMhb9y5BorrG6qeWpR5RcpVNgFB5aT339c7C9A",
  "key5": "4Z2TqDV1dttYZUSc3fkeYD6h5HfbLcwBzE3UaaqYhLFMjF9aGRSpTZTNu9qwJqp9CjYktaNANzbfXbqisvNfQdbJ",
  "key6": "46KeHLRH4a3akgE9cHn19tJKCPjrhuVArhRBKjVmQcisNp4AbBf7dKxkK7CApVSU8WFBCrYooMPGVqoepMfumc8N",
  "key7": "4U9SWy4NX9uxbpr6oBCWXvg2MzLYgQtMcps48TWHUVEEq2eDCRiT5rwTUyh6WbbcUVk1Sq1k4Ly9WNvqwjZSVbw6",
  "key8": "5mWPaFd8Tr5kFQ4pWPsRA8HkktFh5QqTyrfFbLgBYAMxXUoDqgikcoZKzJ7huo9BjZP1HFQm3UwahP6pPNqpGT2h",
  "key9": "4qRLdPQDDTKpDA2ZPpqnimvZZtPFNSqfSH1TfGtb9sXUcPAh31zBMm38Z6dzCqJCE5jJGEknp51fkrGqbeeoU4SD",
  "key10": "4eoMawheKSVR3gyE8PQCpbBwXv6XHCq5HyNoV4Xu76SxohfY84bpt1wcL1oUKU1x4mdSdsvk8Nrcj8gBcKEqeFRf",
  "key11": "4wbb5AYSPuiobfr1dC7gyDdJjCrj8yXMU2JAEsGLsgNA75wVMnioJ4LDyFSx9dR1YPowLCZRNgmF4UkcfS85YrX8",
  "key12": "3bPWSwbjYghxAtjh5iT64hyk7QoWrrVbGytYK1UzY9g2VUchkyTJ6k2VKqP14bL1u2eTCgHFxLmoEzPtnWTkhMsB",
  "key13": "5qJDAvo5Ggdc7N2pZteqPBFA9rHs7XdaDttNCLtKHLV5osdTTbxAsyWjQ7D3YMEH3SZtuG27zc4PnWrTzrwPNx9G",
  "key14": "2wFoH1BaKW57icy9hVekeuEsBt6MkuqjjFb22qzzUgdaxzamDh1VykhwJ5WiWdza9vRTEZF3GS1PGDFZNPQia3aw",
  "key15": "66noTvbxGQPs4NmBCU9Pks8L7uyDiGPE43YE5UKxDWD1pptxBpRtFyQBL8gkvfTKwBGncd4S7wKcfRDAvGsLYyy1",
  "key16": "UxgHryXAAvFZSj19ZbW3QnM2EhRo45VGtMPTtjPNwsE9tVy1FSwDYHui45jsHQRQFGWWNxFDcZ4nMkZS3hJBPL5",
  "key17": "4LrcwWaC4oLCi8VDYVbWv1B8kCma4x5Y8vuYJwLYZT2QgzMHRrTu4Ciw3wWEmGPHR5i1jZqxnXzCMsmEvKa2ChSA",
  "key18": "4yeE2YmZZg6sBoJTASCQLiKqBcoTsYyPdH8NXiNsLXSxKD1a1CwRwLaM6R3j5xmZWUCwnM9y2tsCNLsVpHgrh9E5",
  "key19": "3r4r7LNJcnn7XbhGizrZ9J6VLVW3uN2Yp7BBJcoKzuo3STbPLWTJChZmU2kksfCJ1zvX7z9vhRJNmagEjrZ1Ztmj",
  "key20": "5jni2ftPwchNLJCA56KrTsb6nr35TBdJjdjJVdQhhe2o8q9rAAN4G65VQnqApxiSH3r2svxDxjSdkEL7mtevhjfe",
  "key21": "3jyEmB1eieT6f2Z4aGpZnbBJ8TG9TFxjpisQg62FAKm3npxY5BVGeqjb5j1iwXSNzvhdngdHbkXYAsGGZFJTc3x8",
  "key22": "BFH6pr9JZxAfjG8CiKBgyR9WhnCTwZWUGEt9s1ZniWB2tjETmbJJx8D1kzMKCY3BQum6Nfq9La8z4DgJJK14NRh",
  "key23": "3o1jT6f3jRbs12Qu1GMZWuxx5pWMhDCwyFcLuh3V4iSumhEJNYVq3ULNjg78mA4W5ynVFN6P5DPoDpSNcJpEganZ",
  "key24": "4ZeykRZgCBuy9FZNxSGBCpjXBFjztBBXNMwWpF6NxbAkYCf7kKLeVxLeMRMbwdfGy2AephKX8ZV7iEV79JMfqmCd",
  "key25": "4qA8NjjDmd1UXwcLbRJa7U1ydYy6wezHN7beAn7zxr9H7CVnhfAyDBqyRumQKphHFcdcxPXXWqb71vd1h2SA3Rxy",
  "key26": "4zgPUbNHBvkrTzG7sNemkaoNPWtRz2o9nsjry61hkSrsz69WmCpiwebGYUDrYGDsmCyijGwa9xhNYgCEUR3mWmKd",
  "key27": "39qWTuRwEDqmfE1tvk2Jhhxa2esGf6KficdPPt4nnKBb1RACKsDJMJ56kWUf4aCZQKU5SDdLwpTERB8jStYDRijR",
  "key28": "5uC7sVDw78En1cAf6fJwkMazggKnyociSUTSsuA8AzYZzbuRN4uSJowZsE8U5BVEoU5GGsXzotz4zjquTKLLXy5H",
  "key29": "4E81mTux5GK2FxwgSszxs9Z9K9nHHySmph4jHdJmd4wyT2Tniwb7KAABdq8McdcZ4fshBkBRmzuw2ierHRizHdt1",
  "key30": "XCJZhneJQQmHiaX2D2sBvhMiiQTQ2tYfU9TZCKSHpSJX71PxyW7mTWMxXVRBez9UCcnFF2whZAAfyAa7kRGJ9Y9",
  "key31": "5ij86JaJDrHomM7WRoZWahq55QfbEyTBHqkzydKKuVTdyCtgjUR79xQzTHNHiL2WyuPnecuNEzg6y5gbv6q43txg",
  "key32": "4mcpw6AfjGbQYzBTVcUieV9gP7mDvXQkkK3Dgm7rvyh5GDL7it8rYSpVTWeS731UFY1WTCtTBESAkvwJoo6LDVoz",
  "key33": "2Wwn2L3wHUYjxyFLuLfDMAcb3rdaqXecVvUjbnB59eaaBqRnvQqdUBrnn5NwnRixbsLDH9G9cZFagw9pTCifgeHH",
  "key34": "3kDfgU4oEXnoC4yEpHWNUmyhkRDMniBWPdFRDxoHe8iZRo1v6PSNZDVRfYry2mNBFNNARTkKqPWuZoutLzVNSYYq",
  "key35": "2emJr6FednnsiDvcXzmkzkF5Xnw42oxKSskVAt6UHrVHARwoZkwKxPhRmHFh8sJU7spxvzegwZB61fA5CtM7T5dc",
  "key36": "4bvxrN9Gc51cZoWQBTJeHxUEYQtkvu6W96AvHhL71m53pW1Dv8KBxUaitPpoGDHCTyP1zspXzcQDWyNpZvGUUn5J"
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
