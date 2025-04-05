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
    "2hjveKCHwq4gF5v3j1kHmWps2acUKLx2hS9ErhQmmxGeQj7v7oM2q2mRm3BDfPst4nrXVvPTi6eCcaqErUEow1NE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ni4fTBUeGmoAnjzZcoCxrghxzvqRbVYjjpqgWVkpZCnZug5gqdSnu359h6nXdtH1zLiYVbpDkSpCFta2e96Jg8s",
  "key1": "mKn2FK16CPE3kV6yohe5xNnnU6jkEpnX1jPGaqGhiRwY2HaJtTjXFb9Ab3b4wGWDqZFGDk4ZJ8NuVJJyTqortzy",
  "key2": "3ekvRPDTZxLESYZZ5XAaEd1ZF6Jv6fmN6FZBN9xmAtBJj3Z3Q9NBxXxHdkNoz4cJBKy23PnZiF6XWN9upJ7RZpjt",
  "key3": "NFcCkSpP3xmQKnvqJ4exs974tozVe5RV4QJyPLpL4S1QweANVP4z3Ph1kQniZ85FaVfMS4oGwaG5p4CCX6SfyLS",
  "key4": "5TsduHvZofmyPtU5pnjUHYXLj7FBCtTXMQ1M3AhQn5s16K8HKQQ5PA1nrYyLwzQTiFrj1LD8WoXmhNBMGv8164bd",
  "key5": "4AMPBWKe9vvK7AhtRFLwaAjG9kQ6SXXH8MiMPwKzQCSt7tH6bZeSVxWzQVUY8NpTeT557x31jdtMc9nvYvMnhftX",
  "key6": "Hy6K1z8EzT9gaRKAoUQNnpuGTEibVj77m8ER1zfewVJZvdfQZsLgBmeiCVripNy4E596iZUL2Tq3gFXu3byGTXN",
  "key7": "4avmBKHnHWjsf1RBf3ktUvPoLoTVtUfvYGSBxeHX7cyRssdPkpRPcM2cYrojYDDtyPj92sRZJsc2XKSvEBx8NuTc",
  "key8": "3mRFxytREwujSG1xRtvbQfstHAbJWNMthfsSppJLUiT7oH8UrNmYXushnbVCjaWivNcqQ4bVoDevMBnQ6nwGaoCK",
  "key9": "3SYDUY84LZRpVhkkaoQffXX91MvupRxtvbAVu4c4D5DJodutdGbCziffzLvXuVG8cBtNscJDZAGqwS7DgMiq7uU4",
  "key10": "4Bvo5hir4a8jx5Xw6aj9FWsbzexaskh5QUasRkbkXxPPoGKdUfbA5CesnLHgQGxpxd3wNpSNm4P1EVutdsxKRpFx",
  "key11": "3oZ274VafMRAxqxfUJa6st7NaUHpuvRvXfWWwZdkUDZukmgGgD6p3FZM9er8yZK6LghAxK2g2GCQUMx4VfTFBhZL",
  "key12": "26CXAQ9dJqM83R3oRK5dkD4MuxUgPiREM19fjU7pCrnbkSbkvoBFg4mqpRxihTDk2rsg2RaK6XxDkWEAoTfwv5Q1",
  "key13": "23ksfRGBeyUVhXqtKfg13zocCZ7CdNNna7K8SsFu8kte8SpZCh5yG5vdPxLQmrna9pvpwV9r5PPuY2y1eZ4acWzL",
  "key14": "ByxUu18Tfp1r2ycVwkXVFz33oKyfCLWnop2ck3BgBcvPANQgyV94gKsFQ85hV1JMUFJLwdCcqps25sTLpmsUBTb",
  "key15": "4S7e2dD5Br4nxwzsurJmjgvP1yU8R8iAUd39pty36Tj7w1zgMfqbyQotYhVxQ74w1rJmbXqJMmsrwiGKmVvvjqRz",
  "key16": "2bCgvSqWD5BdQ7M51HiteFHmu12qj7uTEEQwJnBi8BNXd4oFsaSDpikAnvS55gvBPKxXYPWVa7tbPoA6KVfaWdeS",
  "key17": "21ejAcdohrf4sfUwTkAd6TTwyRi39NWZYwzx5QJzWHWkPjw7i3mg2vQgEiPsUocF1uwUYgUXGumNHa1rAXwMEWuE",
  "key18": "4yVQWBhnJg4L4w8BBPeVtJuEERpoSXSCzh6RJBJjPKji8X8fftc8A8QYyZ99VY1JzebMGhGKfMiKMBN1CXAbTTRL",
  "key19": "4BXe24ZHsYQvNPaTPiqLtLriTGMxXZE5Gf7dSvqoh1sHEAYJd91K1z3hqkM4ZfFzWGQbKNYrUWWdjHJAADCadSfo",
  "key20": "3JeNCNdpNqFKCi9oBcT1aXNRqyVjND4kBT8Cq8ybqxsr7qJkeAJuJWJy4i3VKyuJG3mN8xfnTK8H7fXWZDsKEPgh",
  "key21": "3eZk3jLkbeAifB4wXBDWyRZHN7dtXteSff8NM9xQPutaN6dF5JGNnrXHBXDEvcjohP9BPD2JyhRiqWMte8VD6G1i",
  "key22": "3B5dzn3kzVGg5NAZZt43L8nJ5XKgQHnmc9zdgKE9GB7J8YB4T2EfYqxubYuF4bYSXYjZhAsQgMCcDoJHoGg5nvs4",
  "key23": "31dqJTMPEFatDA2cRDAn2pZRXcqVNjwrivWKag78LSF3qBT8QbU37jVCTVR7Ch7poFJavLtDaXnkGompUEd6mkFs",
  "key24": "64AvwY6vvxUj3D13B5eCy8ne5nNeS5aMcDU4SAxkcLLj5Tm1j7cUSNHiDtaizc4Z68rVhSh1rWAxBoTyrjTjfwQn",
  "key25": "25HD2cwsrPdWbQG7NsQj8KF12pNUW91CHV2hcD2m1nBYYDDWAhoChmT5BEdVY4Sim7kU5rQu3Y1uS2UJGdXjRjok",
  "key26": "qj8QVGXpN1BANYPfi2HSifdqgomqjTgtLAK4YwrHKWANLPojc8XQDhaa2yAXhr6KGabTWDXPpLB7v6rDWveDa8T",
  "key27": "2wLL6P2PhqhxNfQFR7JdY2WwtRMMRCCj6euUUA3uG76GnmfB2sF5eikkNF5v6JoW41D5MZMLjWhXPmQQEhYPX4hB",
  "key28": "2m5nzsmXFkiaCv5vwt93azsAUE6LGjovLDhC5uz5jBTbLK2DV315ne5VeAHVBDRaLUsqJ6juLAeLaLKLihFvotMi",
  "key29": "2rLjF57Y8JsFVnb98cA7QM6QMv3TZ5tMTkQCtV6FSLEaDdU312AxLENUUyBmgK2r3eLJWkyajJxGuDZQdjYVH2WR",
  "key30": "n6bi7P3ccHt5BekCpMtUQUCH3oxjnocLwbx6Nxk34kZWajxcUcZPoUyF3vNdfjqipu8dPeroyFCJj2mg9J1MpgH",
  "key31": "3AmCtRbEnQdCWjP7LTfM5fYJnZin8hb2sQyRT2gWmR47z2XdbcbeZy5Zbv3KR8b3Mc6zJHVrb7CQNdjjPrcELjPv",
  "key32": "2YxDxdkDSSaKXdPbe4tpffeYwjsaDNpscBp4aJmtWpjcjBTknYXG5xf51tyDs4MvaAUGtAq7Td6JcrWyhdCXMoZG",
  "key33": "3Z84B4aa3xGozMqLfNTnitZyRJy8obcrnRmFTZXL9C4zPBwf7tHMgS8ZqK7z6M59ZAx5QHTE36Xk33uch5qDjVJi",
  "key34": "vBpD9ox2UZmhmeVVLJB4LDVNTR1bAmnf8VqV7mQHhzw5AxwvEn6uwhmpUD6Sra6kg9HM4BWLZVDZW3dTrFxsBvj",
  "key35": "4zmXGa51zcszUb3ZZkcPe6ZwhhsaETHwBxSdkm7aoo8GdD76swSGS2NUR5HJPy6vfqtfKVM44BCYXj5PtCs5YREd"
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
