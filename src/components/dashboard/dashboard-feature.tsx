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
    "5bJfxjjuNy5PkU6B1bNgxfySdVobXPQycHgtrquV2wRt8cZJivFa5MAfBTKNdpLfu8SK4JmyYWPMJq2ge91FMt6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uhAtvJLvFsVHoc4GKv7dborhcBhdShdzoLtSdhvjALzNbYCSvagxd6kjSy6Kn9QPJNqps1Ka3dZBdfvi6fMt7aV",
  "key1": "3qqPDBiCsgsKpfaK6nYKCxtaHNG8JcvWw1bvkbupKrc6JvV3Rw2D99Sue8VdFP5HfrvJHD3RodMJ8n1gVtompF6w",
  "key2": "AvpPRrJJADYMAJfehQNNskH3EvkvpUB9NEBQHQ39q6CYFbbqXCsimjnW4FSkoPemQJFukt39jbzzzhcLnrX1vzN",
  "key3": "2iTmQX9PWnwL9ibi5kw8pd2ruSS1TZdDwBNjVcEgWhWeRPnzJEnhj3UXTSGD758htGRHsbxDrf5gCcwx9gomLQhQ",
  "key4": "2zDWftXZVC47roavbunuk8m1k4zXuRYQKeLoTiJTEpCmw9e2nR46ZGAWHN22gT5av4XJZvDUwGcm715YhpFWwLJH",
  "key5": "62DYAoJ9PauCe5CXwjT8FPjiHwTB2HEazeBEK5MudbrdQCE8X1CEYomDWc6YffurGEMM9E7jgR1cN858i45TXmjf",
  "key6": "4yVMrjF2oXTJwjxcgcorSP1zZf7wvJC6zDVvAaZdH59TEntfrSrAbNNqzRo8AnQM6xNrLbvYVeW2jNmUSRTtNG1x",
  "key7": "wvbxTzxEcrjTWevbo57qcuiKf1mG6H5xqXnUzSUyyTMuCgyVt1pQcY6Ni59Kdw9WcN65oxmdAuBQAuphy7xAf3o",
  "key8": "27mdPMWRJU5vBG1fwn63TBSik7Ft44n9VFoueReDrarkmg6xjithvd4sYqn1uQYZf4sEvShxxAfGM8hHYG7AMmdE",
  "key9": "4kJRzJLCuZSUE72Cc81Tfc4VQsDzMnXHqdBsm63T7N4FF17n96sd11cGuoPnkjvaXR5yCR3J7w93W5t2HQCzBLwk",
  "key10": "5FtxHDHQsowfLdpgAmGMb8tuR47RZwKdVoEEFuxFibn3uA5gGJSyfCVib97Q7bMdYD1bjYwWUDBw9d2Cz22upZU6",
  "key11": "NoKj1nZe9gmzuQmwfPZmYZgifDD5zq2rNnGqXq1CkSNxwuowjMkSiMejhRWh8z1awduGGUSverYoAZzSKkmJoWo",
  "key12": "5X4ycq2n3gz5jUffxC3AkWcLA93hP5mS7fBNB2uc5iYr5gRTr3cEyAoTVp7aeQKSXsGoLzFbRqHccQv3jEsYfMxV",
  "key13": "5dc5yevhxjtbAhtgthbGG17YPbk6upCwfadX1avPNXtu9W3TzmvfiKEZGPdh4Papt9aL5GqeQ3U33meCpFfRUc9D",
  "key14": "Uak5f2tzjBKUN2Cp9DUFxhdESNgTCvb8gf8iPz17EyuAXz7E7oA3TgcKVfi39zmWUdPLYcpZW3owpN9hiQv5vwk",
  "key15": "4UNrQqHSmi7q5pTjAhQHkuYwJW19h7qGcdfq6hW6BEh3BwQdvUC9eMUymRFSzgtFTFyZY8xJzUBnMdte2q9wjYJm",
  "key16": "66k5A7dRV15wgnW54aacWAsGqs8SitStAbeJ7X1gvHhD55cNijjME5uiK6HKBXMgMZ5okJL7JdBjnAdHiVLWqoy3",
  "key17": "3zz4nCsWmp6p18C7K78nqks5ZDsE5m4MDg5EgbMz7WY8Hojo28nEpe6oiaTqqQKDbEcWPC75syugzyo2jJ9U6aiG",
  "key18": "3q9TzeKhPqzqEKkg9R9YryKCS2ec4h1as7JtzbXzPqWMXU2G3NoXMndX39JrxrRNaXHq5fazL1P4TexDfcdxGBEh",
  "key19": "5GN8vhic5swyExZmL32hFywSDie7vPiMiYnjp54ZGLrMvi5vB8Ff1uGF5LJiCsXL9Jrq9MKtVRpFSnWd5baSsLFT",
  "key20": "4BbbNu5aac3xRXsVK5PMCHk7qfy1g7m4arJXHMxPEEqnnGNnjwutNnJxfpNWL7u7RptRH6zkiYFtz44NieDCeNqH",
  "key21": "5a6c8MDho2jWPZctg8TptnAsUjC1kcfhFyFmcGPyKeBHQgGGwkqXfTiPWkm4kasgNWHyCkye7aZHURZBXByUuzqo",
  "key22": "UZUMQqtPmt8akaVyC8Vo3228grW3LdtWsYzoieJD3FdGF27Ux7rAGHriypXcba6b9Y3cZbWkqxW2AqxF8vT4UVs",
  "key23": "2ytKmyGnHtz9UEUVo8ZQQWLdv7CbivcAMLoT6PiQ2YkEKn2twzR1stq47rYcGwXg3TN8U7voeX8s7MCzM45XdY8z",
  "key24": "5Hgbj7Nrqhx9RaMBiMqy5dWdZ6VNaSx5gVj52G25ffj4hpvXFxsiWq9kzsjQUKdTAL8XxEgyxfueyzg9SRNcKyi3",
  "key25": "2TJZRsgHKXvqzfXZTpEAzddWs7Lh4TGdukxVU2nfZ1cTNw2AJRSHAvWAG7k6jzU3Hx93NJQJVohuN6M3MjTmtZ6H",
  "key26": "4PzmFmTi9Nsx4FaEqERVaGdhZVkrEYcQfATy65PHwiMLcxXECzsWuMCmNS2su6Vpd9pU7128dq6PEHMeqiY7Fqui",
  "key27": "5gvrcKWaf2371i9oweB2CHZCBKgbLLUXj9xEChrGiGjXCz8Tv5nPhqpWuYeGssx6ywTmoQ4njysrepJRg3YQSJ9h",
  "key28": "61FPT1WKT4wgRPaunPjSfzDzFnYkv33qrMbBaNNXcBpcWxMYnPJJ6W94vukoroBaA7LBLxhrbETWQuhgff83GG8T",
  "key29": "3QT7v5Ba6fuBrEV8mm9gJ7pktyrqSWcHzPrr1RhH3U1h9zcQghK8sr7QZRZLXXmusNMe8ik8f74X35H7BMW5mag3",
  "key30": "3dmyNxkzRNVJMyoYtdHFdffwhmpwx3EKayjFKeydv47JqsjPq1qN6oussw8bMNSLNK5fFzBV1XMXTpSSsmGae9rC",
  "key31": "36Jo3GYmSjbgnf9vHqSkovRumosCrSDVonHH1i4uKncHSPzdf511cBugX2vUUNyiAfmDEcc9iFAmsJeKLTMEVhza",
  "key32": "5f4bPj1w6cjd4P4tyVXfSLPWyULndQMHK55yPW8eSkvFMGawpUkcRLtxURafaS9brWFMJVLp2cRdy4gMk8rphjUb",
  "key33": "5FAQJcwum2Gvb9vv4LsVmZfVrssZvwmD3KGUVBQfrKU4moVqGu9WPGw4Njh9asMuKAAaxJzrEsJEfJB9WieLjDF1",
  "key34": "3PcNdXgHFFuUNo2TF6mDgJbG6EkvAKnnqrCeEgbDAEZnra777fPBzSgRmZC7AdTEmjCgHHZ2w5wcUzQ54uDSfP63",
  "key35": "PVFHtZb1cdrs6RtKA4aumJthRDYiCkfPuq1u5E7XPQW5DdH2hjuzr4NtGuGMoCvwEUqNy4Bjgk4VTa4WwR1RBwA",
  "key36": "MjU3RLYsEfPMBNWUVSMqYtfGkjC8GR25ee3N4HdbFpgCsupcuSBKtBVjnM2NzHdb8kxBZtsNZg6b95zNppsAFYu",
  "key37": "39FUGGLuJRV6FygSgLSk3zeA2CBzpTsdBiG1hZQMb4xq9rwYpLgitahmmLvP5t5kTNBSeq7Uy6jy7DjvLDWp84N7",
  "key38": "5qSb6cHvfH3XWLqUGhEWKEkK8mCwCXr9xdNqH76VUDn5dMRhqdLLzdRAPSMZULSWYnnJuv8AtXWoBzn1jtVDFMQS"
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
