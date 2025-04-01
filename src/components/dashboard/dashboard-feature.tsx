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
    "28PeBfvLcqDrKMKgTD4Mf2faK5UWBHtCGNawHfyQHGsT7AJnS7hgvcPmrwhvvWoC1e1Mc1urvfwbLjgvkHNvXtna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xc5oz6Nfr4eULSxbSvDgsCvN83CHvds3MGj3zKuv13zouqbssEFGE6fzxF9Hk9W9hnidSoEn85aew2B2RfFKyCw",
  "key1": "2gN8NC97JmV98mUG2TUNqhCieJqAcRxXcFGSQYzNRmxFtUYzUmgVcssreXJUKdgcFb4peAH3VKu6YF9XuFm3GEZJ",
  "key2": "21pFDX7FUtvhf9qfEtuP7ZyxFR11oonNMSKuL2RNhDU88j9GgaVcDMo92wozrx7oduPGNH2neSMk1AWwctcr4muD",
  "key3": "4qkeRxqNYXvvR5KwM67XYA7sTTowc5yvgmuYRAZAQTEUGLJoSuL1MuDme5dsUFdgsDKRrPyjUWnXgz65JGxTHmt7",
  "key4": "2HXDrRCFzuptW8yhiTXdxBkay2rigTveKxKBKMmrTqPDbeeqjoqc2G9oMmsKe5B1tKBwWk245r9F3bV1yzpihq51",
  "key5": "5HvaqHpJQNeqy19tRM7r2WUHLKn4Vest1D7jVLgeXXstWvg4ms5wN3Ai7LdMg7zfRnoQC5fuWBvMCsgcNtFNSGwM",
  "key6": "5wLqHP2GZPetK1BRv9m9iAmnfNFNXC9KK11rkTDijQSVJpMYKhSUVckYfBTjDHYzUhiuprYS1YvjcMrPUtfJytcz",
  "key7": "qDQD95kYXnZZJMLRmT6m4BEEa5D5gYtzoEGMRR34L1h58mYfQwFYnCkKTbU2vRJHBJXHPf7iXQjzoF2hYuvYyAD",
  "key8": "4dY2ujGRLr6NCerq7C2v9czAgv6nZRVSERGYCfkCVNNNWLhoh4iYwBPJfvaDn85vUAn1axYGLbZHvVYmthh5MXgj",
  "key9": "2qdWtDaKFQtS5577QtLcVnhGmr9AuSjsBDCtx6X8Kk44T621QRxXCfb2fRgVL7XPCaahiLhWoxnoiCxF2tJfhVzS",
  "key10": "2JT44xtsDHE8CYTxvVLsENqFZTw9qn2D8NFuxiH56h3D4PZpXdNP6HsYB7YZZRYEF9JDDVoyvLoRuULUjxSTyVqY",
  "key11": "3qCykCpWHLoL4eRphv3xGbyvYo9fG47rHrMSxqnihyUm6tor1L36sTRz26xVzEDvKV9dEDK6ugHcBPuKCH129JMu",
  "key12": "3f5yem7FreoV52KirqUfrRasHvgJuJMvN2pawEPaJThoU5djv6MY7WrrUYfRsb2WdjTCYx9xEKz8hv5CBVsQtSrx",
  "key13": "2sjhPF8kiwF4ZnQgyCsg3Bf4XdDri69pmzGDhQmioFw9KGMVv9TrsEVJTZg9EpJoWGiEW6hCwffZcFPQ5kPNquvJ",
  "key14": "5XFjVWztv82wK9jWvmSSQyBx9A3cm5XARq7aDLjJJmETr368EPoWxXBEd139JMHkzKCKqsUDfRTDAwZfbpZrpw5u",
  "key15": "3U8KqNpRGmU6ii8ZvfzHqaZCupUoS1c64u4atrxpzjHxeAYoi8bL1ZhTaGwHi1d4BNBqXZhNUn1g758BZM4qki7z",
  "key16": "4pFctiLTFCoYRCNP1a5pyUTeJM7VtCqjddYwo4vrAZk39731V4MSrE9Bvo3x9X5NpjNz7HYmxRxRFecbDH6PeTjB",
  "key17": "5HjqHzpxJt6b9U6nNj8tjgeHscaT2hUqTMLDnXskgmRyamtJvVZW4cCpJv8NbQvMe3YRm8xN43SLPScHBWvBxNMb",
  "key18": "3TGqcCSoR69NiQhGGGpaRPn7gCJGvGcSzvTkJqr47fiyKjBMsWxdV19qLtHx3EgQ3zs9jBin8XxjdUKZkNwFBEzB",
  "key19": "55aPxQXd3o7J9QywNDrz6UAePrXvL9YW1PhKScSs7BmTELzNUwaUjKg3NYaDvfQFqJAoFE1ZanLQ4A6cc7Ho7XHu",
  "key20": "4Uj4hga8fSrAnnjieVbhnMp2FrQBd89BDQsZjwvP32mU8o2N7pCGvZBsUzy7y2WTHbs1fBkzUWMpJGpAhQUyXuLm",
  "key21": "2R2Ex1pK9no9vXazX416Thm6Bf3fv5P9AUNyg8ftfzhG7bCnWzkBLJnnnRXQXzVdUttR2UXK6bG6f5e3sjtVhQSm",
  "key22": "5GNDfq4XoD9eFJvjvLyNhrvjmvL5Msfqc6EAtZyuNqt8aG35gqg5UwoAVVFWAtL5NZbKGPQs1VzQUfrGRUgt6mBw",
  "key23": "5jbB3Saja8c4ua8K6WqBqjfCnnvsiarzV7qfNXbEu9pXD8WRvdbpccW56i7DEX2e5zEuyE3D9qvzYFMmovrDeBR8",
  "key24": "3WcPzK4GCDro9pZmVSXR4VJiJfbZ361duNeRFeTpQB6nsgwBPLBfJDPbNrdxz7R1ASNBLVtxDQJa8aaSJLnLEv9b",
  "key25": "3sAuBiagecgeb8bSL7VKmfGgm3EjqQfhVUN1bYyEPo3LhCbn4UA99qtRXMVGxvpKR1jrAh9AzKxaTLPhxPN6f1eN",
  "key26": "5mbHiSKkpnYLFRDoTnQm5275KBqfCvycmKpXuE4UJCnkbM6ZxqvwMxha5UEn2cf2Hfr7Q9VAU9jEd9VgndShhPwh",
  "key27": "2YTkQ8rs71X2YPNKaZsbaDWwSbWgjwT3CBtRXoY1nMWbRp8gkgjDaCY462zCiTNQhh3SiFEqPC96Y2GXk3Yxkxjn",
  "key28": "3XFCtUhi7zjQAo3KuqBbCPdFpLhUpdwoqfYtqYGKY8qr4Ysk8F62XYoL6xnshhF1Czo59QTCi3a5SmfhT28iXgmM",
  "key29": "2YJkWUbzzRrP9FvaD79e9tPKReFjeBoRG1txfQN1RkmX8dvHm7DcXpaacL1NA9KBzPthTeh1iyVRwKjGvUtntdsk",
  "key30": "3YPEYX7EDwwXk1SiiPgbVTbKeEtr4zeUetp7JpgQxNKjC5wpH9NFzgcAj36nRx3kSsKTHavPpjFcr12qgbX91P6Y",
  "key31": "pN7WLXhkAvoAQeLrvMr7dGo2EhnNvsiZnf4U3GsUoipcVZkKEDnDkdH8DAUYVee3b1oj7h9PA9216EUhJZ8bPCN",
  "key32": "5NfNN7uR9J8nRfRsxXtSqx64VLYbbxradMx8pWS5fhfRiN1P7d4Zd3Un68Qo6doMnrAo1E2q2G4RUGxmC2niNbR2",
  "key33": "4FMUyNUKrGzH8YW8CnJsw5doR4FEESqTD4uymUmunx8G2MP8QyBjujnAVsVraEvrujuQn4RcTaBofAcgZgx9TLuB",
  "key34": "3KEH6g5PkpUNTt721AYyJhh1GcAFBcmZ2yMUeFB4YmnUBNCmtxLKXj3Es5WjXSdsoADbtmAxv4ZCFgH2Z9xzLxHm",
  "key35": "5msXTUweVHizUYjVNvzZYDCCbAZSavXg7YFmaCyN66jraGnE1sxhQPsmEWA4Ke4aa6CFB8exoaaf3soDyk5ts4Aq",
  "key36": "2pmzvp963W4hPzaspWtniwPbE7btdBiLt1xLEgutjBi7xnjM4ofb48twELW6yhMW15tS4rWqan6Neo36orYgkqAj",
  "key37": "24gu7VLh6yt3yniFe7mMgKrdj4DyLTL95hBKATRyPP1eBCULPgDE8aq9g4Ac1tBuT6KKexhccZHT2v4xHAjXir7Q",
  "key38": "3zET9L8FMdLh49BYKieBm9nxmVqmiYuoR6uLGFyFotWizprqZ2inME6GJHvVyyAjbNMrJULMsVWw1J3xMMZXDmAk",
  "key39": "5kyDikQJLhb56MVhMpKaQqzMZLHHFWkwGxDqZncJ4DCS9tSv2fcz7kGu4iP6qB8ShFDE6onn7wtH78xNgvUa2NzD",
  "key40": "SgwAVjGHCt8zDBjpn16VZ1VYfwLwf14HVzvh3rvLJ6X21uFuNP4hTb94QrTQ6SANiGHJwXLEdv9ZbDuTu8HQ1dm",
  "key41": "44VcSZStgEhTzZHMK92VDGxCmqwTzQoSeSeuqezYDm28BK2kwNfiq2F6oHr2jAH3Nug8QCWCcnpVGtUjbaPs5dFN"
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
