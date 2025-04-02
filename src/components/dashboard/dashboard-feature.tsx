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
    "SYyNVyoLZxZXpmuaGBEVcPsUy62K4qXqy98cxg7V46JBa3LUBmgCZuaAcgJgHMQVaevexFeBGFeArGwELk85yfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AtvB1Y2KFcJM956HPDhcekgtdYvDeMwuvfXyei2CWnLjkpL2gvjEuZDn1o15JLoYzHNKHT1DGUSUuKA9jDU5UhT",
  "key1": "2D8ZG6vynnd39Ms9h18FTC7TX1ioSYE27ZptVfS4J4LhyWahwmseFf8qAWYuEmMZZSNPyy48EGnQkNqaQFgDU7jr",
  "key2": "3AzPCjTbqK7KSsC4dnKJDrmHvkM25h1iou5upBk9vYCGceDUKC1LJXX76TqQC7wNUBtUJBcB3VK6wt8YFjxFqkSK",
  "key3": "e6hvXwytJsFSLMFSkqfqtSPRETjq7FnCYACHmuWVGvFPFgdFoNTRoxqrwFyXUPHJqun5o3n5tGxjBspQ9tFSKQa",
  "key4": "5oBMbk7NHQVNyK7sqiug8xy9AqBqVTGMgUvVdppUyphVS82SQfG9nnngyVU1CB83TVRsVh9N3iAqoJNdYH2aN5oG",
  "key5": "3jBaTBHDJUc2pNtL9Re8PyAsNFXZWZKGaBvSt1LG26wm9rDGgUVK2jeWCoH7xP3yipkt5cyWMMDQbKMmeAMf7Xhc",
  "key6": "V7MXLUoVBptZSUhyvL8uR8CPapwmjLFV3Q48jyPmnisRvvPbdscn82WajE4upC5zhE5x5eQQKLttCLwXkCAFU9Y",
  "key7": "34BBEmvKc8ep179zsmFXYXRZ6ekrLkF1t1QJxgiKLtA8pnkojyDGu7XLfhj2kz2TLtqDDP7Zeu96dDi56vpMeEi1",
  "key8": "2UKgkHY7x6hirSwtqaw4CUT3zDXHtsy9surTfQQj6FE2BkFC3QKaQpqjTrNhz4FnmoZ8AmaT2rKypf4dXHvqjRMa",
  "key9": "4yAVui5cDpmfDQtckPEiWvwWL2mzAxHo7MSnhAktFD1rpu7RjLHwY5TikM6XURMpsuivZydFnttGP5P6Jed8EVkx",
  "key10": "4Y5KXikWdpFB2h3Wm6LSwCVBmXTfieg6MLueqxWctyTcHAY3eQ6ZWFQA9uWaF7ncx1s4vDvMkhzmh3D4YPtmS1xD",
  "key11": "5PzjLpVKg3XA8WKsGCvAaDXhcBBz72vUTKAXnzejvBVFZqcShjepXdefKauqMJjnCqqsUh9trm4NKbbCZCdzy2RX",
  "key12": "3Z51jmAL4xR7Ub5gtrePHwZfsrho9ei5MtGf4poQpXEvvhzW2X6PzBpYhfG68vAn9NzMKEcf4Un9DeeGP7Emhpe6",
  "key13": "2oG3yoGWBpMbx1bZSRxMr9cN7bb8nAubmeJpz1yifXmSknMG8XEqZxveCYi3LWhpdm6qZXNqcr2iRaQt2LrPxWAk",
  "key14": "k57gDSNCCdJyx57HvNyz8raiopGdxuEnSufqms7uss6YL6sMG7SNMs1obdhkAjzo52zuA6ZqtYz7YvC4FjtAaiv",
  "key15": "3aSFrB2uwQVngB92MPHGoroiZ4XRis79LUdifUZbnRSgAE5SUiFKYaghfoVW33HY9XCT3nNXWkhxgmysc6J68a1h",
  "key16": "5XUv4cMe8wushGfetvH4uGRasdrXLkpMQddQVmyAXvb5ot9qJEo2umPaiZMPdisT5ZLiwXvzY8cqMEF1poxZMFVR",
  "key17": "2E6RShPCqh2vaiCt2SJKRkRQ4geUh7ygFzDns5Q7My4PvfoqDunX6WsHB5yTh7wjaLBMmUXnRNgPfkBvsDka1J1a",
  "key18": "zijXFjqVnH8ftxrdHueUusbKoiSZT5s7nkqxKB1H7E7jUN2iCxaTGxdLj4QQxsLZm1aKgnDpEwD3ThEwMueFFMC",
  "key19": "4w7UMjtLDk8kXwhLURZbUX5CuE96mRPRQYziEKo1J63kwX2KpN6fRMYcRbQQaCSpbiJcfSG1RzvUDNZiqTrBUv1m",
  "key20": "2hoiJ5uQ94eeoRzQm6nMLTbzeLV9bKbE3XteSEN4zy5tDjjLSccHXFopkQraMx7kbX2tZW8toGXgUzmbdHad8ZHo",
  "key21": "4z2w9QgQ3QhD9VAQJ7tXv3PhsmEDZqbbgLa51s6hukMSUCCnYoD3GBPRF5F5rFbZs4omKoPnrLqxTQuUkWDssbC7",
  "key22": "TAccNh8DbbVgH2GktPPgoWRM434jAJJzhbiqAJp3jeZLvmYzLQ541yBR6FKwZKdd2XkXJ1EUZhaZdrFCqDZDwvb",
  "key23": "2GrrAYy6P5yJTPoAaVuWerFDkzWbDaun2Nf6yXTAm6dcDrAeBwR39YdQB4Fr7gw3iT8mEB4jNuumBDcSCUKZbNA4",
  "key24": "3KnwkLQ1dTbASK12qitK19rsRGUEMzNa5472FHR7nmreJ8TWhG3Aox7XvjsSb99yXGiD5YdqPj1Ggwa7AKpPqqUY",
  "key25": "HR7tKxqZJDVEug53ePmZSPjr6E73ivG9caPVCumJvCeRpMSg2ex3BHj3ejGh7qjbaNE4EcJm6WUPM2oRN2HGpJS",
  "key26": "3X58Xu65Przya2X8jyLmxWkwFRZL6vnR5cmFEZWxdmMU1XkrvsGKwe3tqWcVrKbUVNK6UtgbytWji6fP1eZR8ttw",
  "key27": "ZY8nMTVmUVAbZyR2kfkH4JjfTtj6vdFu1nCvJbK1sRwZ9WMT5A4yXD52oqiB3YLUjf3AKz9TWCgfK8CARfPBvUs",
  "key28": "3DSqhW1a1uBrV4Wau4rxK9UndbX6w42ehboAAGyv5vqbx5trs9AZVfLLoCCQmCRsaGTcQdtRndtDBbWBfGCcjYn7",
  "key29": "ein8pC7pYSmTm8qmDzuv8ksrQeixnXQ99Ff4E7PQiV9sqo7vj4gXwxrGnh778SCdSE2w6EoegfsrdiXCXAsGkE1"
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
