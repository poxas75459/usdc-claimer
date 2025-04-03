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
    "22quwH3oajyQ1kctQobtgmqm9kN8fLmfLtGde9zGEv5WmHh2GDDGd5LK7cAJrrWNgGJiTom9WGYXZAe2Q3ULGUxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GmgaQJ5HkqmzdgjTJzMQsxs3YnCUikaJAE139yQYoF2xf2NWycYFsVqZp7UDJBsPDTGHarCSM1zV5pEtMNqbFGP",
  "key1": "2JTvCH11ZH2NyLZs5UZh6XvUVQLoNoCSg9aE7ja6gPnHfUvg5BLUhiXuhGXNwfe3QdG4gt8UYQSKtxufYudv4v92",
  "key2": "4nLm8YE942xMrXdZ3UTwZQx7W1prwpWv4VYyQ3sTzMieA3KDet64jPBjFhxUtArz6qnH42MuFe791nSsjvbPHEKu",
  "key3": "3rRgZUjrQgBj3wfqRxsFBVDNXU35nhDkx9A219pNuhdA91RMJxtUWDD1vRmyKxYxhUCGwDYm1WaqbhJ1ukvDmyTG",
  "key4": "UWi7V2f8sWDfhxUk2sA1Zuecbe1Wg3WXzir33TxqDQanNnaunqLtcPGW7skJqKKqc3ZNRNETy1HeAvadfLEE5wK",
  "key5": "5xDqFDQtmZZMy9kJbKq9gfByAjp5K4752ndHopZTGfDGY9voJ8giDvfhyT52Qg3SMdYEbbGP2pYsKskLnXfEqcQQ",
  "key6": "4LCmrwBtU4daTfqPahyWMeh433M1913oiutYsJRrY5j7PXgBRFQmq7wHYq9J2gY8zXZb5JVYyLcSETELaNH3BaHf",
  "key7": "4EBreuJyZYFSmYBSZbRFKjuj5gBEChppS6RDSU2K2RrCPLe4EjYDKvussL3FobQ8hFHFuPT9S42yzBpviwnQM419",
  "key8": "382mE4eMex7Xgxh1mzbWoWZhbL7SnPzwvryVnHcrno6K3y3HWuaSq4pCS7h43miodQSKtKF2Wdmnmty5TTgL5FYB",
  "key9": "54TRtHEK8C6Vmvd5xQguwtSZe4qRmTDdfas6tGUS78hwjuxY7gNNiGmpcwT4H4CkeJAi75u3yZPMy6iRH82jt55B",
  "key10": "5tkFbxK1L9w8HBhco6oD4oyjV2F7APaQcCtmwPQWQuDSBnD4riV5waVoojReFJMSsJDU9DTdSSLEdCmYTyTpbSBs",
  "key11": "5BmhaEynsFunBxxQoc89F6U2JvJHPZCriWZ7vs2RAYDbws5qEgMMbUkJYBM3g7TAjJxqNNgkZrYNQfXjj9j7raAk",
  "key12": "dx9gBdkbCC9e17ZG2kXXsrHw64rNVsHnXg5ycceiDUuAVsR7h7nsKPNqAZHSaGd4RtVv23qatDS93kkFmnx9jMw",
  "key13": "5DKdd33uZ2CGcA4oj8xVZ2WZEFp6Ny9Up5YCDYzZigaK16ZDR7hRgXwQRNu8PzqCRVFevbK969B3PdoDmUUQQYHn",
  "key14": "5o3ZcSr1ZEjsyHT4Ej7FGqqFg7Z6xQUk2wZzPXhahgLuhkBrngAPABLMD19pYzRwmTnCDov8ETvU2ygk4tVsHKhc",
  "key15": "Fy9AECUL8exBhuN8TccKZ94i5psTmyNYDvAXckfjAkJbqxa6bK8uNUbZ1CFkqwzoNZcKAV1xYXCVo6yTmWrWX2M",
  "key16": "5Vg1P9Wr8oPbt3s7oYgSTgZgw48KsGwSAHWYwDeMbqgHSVwNZh1Y2fWZivPJHrUSxeHu1yBpYPTgdv16zBc8RZ41",
  "key17": "2981YBMXQS2SJwrUc1yU2h9BWqbXHzXpSfoEDqmsNVWxeWynb9Lcnwo59fbvATrL13MiZBhhZugpzLRGpmNgTy7v",
  "key18": "BQmYHEvr2nEyjzsGVCVmDe9XYNk5vbTmsrYp8NJ13t6aU7SaisNgGXTFkFkpfAP4qHe4Z7JdjHif169BW835J85",
  "key19": "Jjkz9ZEqandoBGRrhnWcypR9YPikcmGxwvBw3nP8mNFXjZeRKPcndDJiHqESkQ4qbcfuEhX3jcm1Jj123zHEJUL",
  "key20": "5p5ANtie92qKaSDtpWcCm4g5fR8xwqRTfqzn4xHJnZZ1ooLB3AVm63XHQ9onRi855st6v3Wpuie2PJbnR9yKcLqa",
  "key21": "2ikWsMyKqibYKReEcXRjd7gCTLuqCXtu8H4oVXiZaUz9diq2LtndHHFY8xbF9ZEHXJ2HcwbR66or1Zo6qqNhjz9p",
  "key22": "3UUMoNvzuZzYxfdTfectXDVLrD9Vz57csW2x4XkWf9h6XZktL9n4TeQhNgHpAtvvTgYPusUQU3x8JFYRnw9fGY4m",
  "key23": "3oAm79AKXi22UHbRG5xKud19HhwHSKjWmfDAqYziMJivcMsNuVQMyZNwBnnhxNMj35fZyvPmXYHJC7k67T1QaKKt",
  "key24": "45NNtEg8tr9GQ5BoVeUsA9zZMqDCyaxJu1Y1NcS6KDvmRUoHybMTGk97gbEK4Aw1DpSASr75u6GryxK6NdekcnUB",
  "key25": "WW84bBGqV2NQEbs53T7cfoPDUaKaiFPTRoEZgUW3A1QdDhVCkMAwrbt118k3B31coS2dFWubngCRjJbWHUiES9b"
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
