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
    "5m57zRqMfvJXY2rPe1Z1QMEQkJY6ehxK9D36HLrRADSeX3r6QoVXWX3sWkbuivVJGL4r43mrCsSGr2sFeuVETutT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BEP2R8vA4X4uXCd9ueiL3BtCDWN2fUC7sbgz6PHEoQHhGUFRDBCKyj6LCZ6NGHQrATGWLQYX93xuNtQRDtEbWXv",
  "key1": "2KC7YVywgpLGkK1Xp7vtEQXwfYTep33oMQtcqmaBmdr4D55iscg6G3yDzo3v1yubxWcJ6tBU1GQfoNuXSfqMiAKJ",
  "key2": "2p7tMN6Ne68e4EjFNVeoi8oZ9dpZ9bk254UrckDfaVwAVMv3LKD4QGSjNrmXxJpXDZQenU7PnDaRa11u8Dv8WifC",
  "key3": "5NE7kh2keuSWHNiLcGeeBPzAePymUToni78Bo7w9mRYd4iJa7D1DUZ4LZRF81kEmnheZNpA6JUvTi5QLmJ2VmH6U",
  "key4": "wFbjBQZ1sopYMAM33CEAGn8b87qYHL1GkqwZ86ss6n71RzENKDAMoVULDppp9gaUAXxSWh53PRZAdfvrDRhLPcD",
  "key5": "MUxE2LE5ZzJiucbkq3rjz9PqbM58aJipmTCNnA34HX2aJyZBbSdcu5cRotrYbq9tGLKFGVqBsDvJXju4dqVTd2T",
  "key6": "4NKW5omWC5Zz4LLVoqLByfNH7YoKnxv1EpLmKPcg5QDyZKwNNMW6X8miJGfQRom5QN3Ly1BukaR9wHUDvj598Rsp",
  "key7": "54rvYj2jd6XPdXuxnjBx1VaUPe1DkYDDPJdUa3YuXEzmr14f66Jwkrez8pwH3Nw9KCCJc2atA2prhAmvBdx1BcN6",
  "key8": "4SRtEK5jvJhFq6Ep7Hgz6XrAa9ZCqbNWq4TYwoA9ZVorQZVjE9jiZRmtPh6CZDHbc5MZdyBpuTLqWHitAtsWhwvw",
  "key9": "37y74EbWTtP3fB9K2oQGvoLQ3tJy2mgL3k3pnFnzEWvrAcmbsFPzBxZT4J4hfyK2LkLAkDqPNacTtzEoG8z1xhsf",
  "key10": "5G949AM6Hvamz5gAsH3uChLtTUAstHbzaZJuVvURX5F13u6zJxvRNXzXC7YxMQkJfasuZ8muFJmSiKMmuv2fv8xd",
  "key11": "2Y7AEJoFGKjsEZh8NgvQtkdeWLyGw1py91FDpZTsEvwnudW7GsHFw6bbtEhap7dqoK5jWs6e5g6A8nQZJ1RPKKFe",
  "key12": "kyHpnPFUCSHew5mdCF6HVpN69hDknYEkJ9ubdZghgJhd5DPxYg8292pCGAMy6cr2XZQWc8jJC3m5nu24ZX1rc9i",
  "key13": "2byFm7PP2qruBG2uCjRnhaTvaupjkE7wQACs9pAmHCGR5JbuV2QjJee8oUtvYuBmQirupkqBAUn4ghRH1mUPm3Ak",
  "key14": "2ABbHPBsRDtaQVh4WfZQLhPk3nmFzHvL31VR14cLXQRK3XaCVBodNbeSsX7hidqoK284bVnYRpSFXG89NsaeG6T8",
  "key15": "4XMj1SnFwNU6FSXvdnvpoy3pVEUEYLq81JfVdDSdRgKB9eBfyUHmsP2HwjufHCp66qk3Qeuy7be2UmzAZg3NtXC7",
  "key16": "4AaVqAWvoshFeJmCffVSVKMGHmQ7ZYVKiwkNEGgxocZbrTze37WrH7yfH6h14bB7ejAxQ2tFgbc8riiSXqHzj2De",
  "key17": "65LPELBM73zPvdcz6rs3bP1YxpTRhheRZoq2ACk3p8YCPHZAmCixd5WVT8HpGEpBzyGLtiA1Wum6dYSsFbzcNfF",
  "key18": "25LpjyQ8RkL6NFQ3jYCLtuf622cbRMkr4gma1kGiwGxEoTcLJpXDsbA3BJbzAZmbKYbPx5jkUdU2Xc5oyZTYJ7H1",
  "key19": "5K4vLftHaSDxfUcDZEJRDAuPhgpSeHu3LqvH5mXuC2Kk99G1uVSGFdMD1QJCb2LRTjLqhzXf9TetePhgnGyf3DQt",
  "key20": "4HzVr4mpzeydYcNpjmjdApAhnQ3tEC4cCdVqZLVwwTaNnAox1LPttP9RpodgZ4g9K6a4aMEdrNGdDmiJiXMforyw",
  "key21": "5Ay6etKdaf1kpqz1JFMM7CWbQmn2Eden8gqtQj3bssFqCs8Y6Be1MitHTiFFTvKV9scFi8W7yKKXM8mwk2P9LLUL",
  "key22": "2jZCBmF6Kcqf2ARCZj5KvcwFRZyechEgUiuD7BLpzQ1sQhvEuiJ3kujxYcPYS2qQJSp1ZA2xDKpgiZA76NVBAjdL",
  "key23": "5Q5a1E1U3yMeKB4qJHt8hMYe1wmYoSP5oGkLRYZRszXKfqYUBByQF2EuYjnRXTG4e7SpAEPDh9Ww4PBi4EWuXnoC",
  "key24": "4eZFNHJpZ8YtKu95GTDf7wcM96Ns4FDVmoMW1hmBCX8C3C9gW5XsvZgtuuxJCn6nX5jSWn93KxBgMrzb5ruGoVv1",
  "key25": "4FcEReiL2NATjRy1KabdueJeL7xg2ZdDvYuRvggKVxNez2pN2q7hNaAJW3o1o2b3gdXMEsLv5GbAJMzVbTDHacRV",
  "key26": "wL862xeLcNwxJgN4rBwyqjYGu9FHUhc9xRoZnfbCzc8zefDsqciwDKZPeuR9nftbkHpyHiEwn13eA9gjpDhqhoT",
  "key27": "2oeCxwyAQ8V4gStmYa1K2F8SXF2845bTAWdoXYckTqQuairbKCAFtxjmQdEvYnL5XyQxVCHPBC1ozHqzpUWkX4BV",
  "key28": "4gm6iZcDP9otFAFmtTbAVK5nCSg8oCoTXaTtS1sD9Ki1PdW9NRRbDHvtHJsUEK3taVYuqvL7LMXbHT6Q4VrNgqW4",
  "key29": "3aipNJtqvMX629ypbBR4xKnAtQTuLhNqkJKRAFqU1sxC7A7pvhSfDs37muyLfEJ5VmESfYMqyLSWxMy8ERCai7dr",
  "key30": "Neaw4jQmp3ZFvQR53jd7144Ci4wAv8LKC66PmNnUMqFGqMsAwTsnmvTzR1DyVLhkdcg3P3fT4eZ28eAFYBUWS6P",
  "key31": "663NZoVPLQAoGnYQJ4WcghBB8E7J1iEwnjgWeRCiS8HGebpD8D6B4X1EHGyNDnFQ4WBMJUsYimZt2s6ymzLqAVvZ",
  "key32": "614Drf5fQKpQpo4yqqDKN6526T3XwXAPo7bh3isXkjq8jt9vWQPsAqJ73EGHjDFXr8ogiCXpEdwAZXxx1zVr7BHv",
  "key33": "4Kar17fxoSJdWyFyE172gS1wv7LmX1jEuojhLvMX3GWpCN4U2aZMgzTWB35gpmevCJfvaw4tJLzcfmiaCvUEnMGb",
  "key34": "2PrFaRwzQ6suZ8hMZWgs2FFRsGCaWKMKsRBzyb6cLrumHWrqUofVX6neVvLwD3qsgAA92pc9uvGhGyqaQUinj5RV",
  "key35": "6FF1yJCwy4XzNXowyo6bNFyou8KANXq8LbA9CBLJBnPnXmXoAdJxqnSoHwWx9HvckyH64QmEvGNZemsMkog8jx1",
  "key36": "3pyqJqxDGSXRj8imJXGFZyCchN3HC8qNo3v5yR36bMvXe2FdPf9Uc22zjtG89sTr4sQz9XsZ2ovdGxwWbFgR7rHs",
  "key37": "NwkyLwrzW5SRWUv8NhkkGzA4wjvXE8WHJe5QLRaP8heYAiMjyEQtd4ePSkBYmuhPDRDC5ZUqGFMPDaesjnte6YE",
  "key38": "3KGPHzjrsFhjxeoQrCyXK1VLsJDvn5gSRT2Vz68dmEPTDs8Drn2whsVjT5JNaYUzuy5nS4izgxuScNsN8URgJ6m6",
  "key39": "4jR7oZRZjn69Skvurh4auKZQfJxBCzdNFdty3xgDLCyH68DCXWb5UhVVdYV14VyLBHfrLp6Bz6fFy7jELbmMExMH"
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
