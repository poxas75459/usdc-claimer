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
    "5muBK9PpapFVg2oRv8XD6EJ651XeQxynKtcHypjYwCVYtzhXy6Pvcy1DzAEYu6p3kqKFrDSLGmQSSxDtEMfKy2gr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cG7onsVLB4QWhrwgrD5NVRaqtsWPYxi7C6mczSwGwP5g6iV13HkPTyb5sYFKGUsz1N95qY7nL8TQUom6jJ8Kadm",
  "key1": "ELKBxeusZBWdb5MoFtmGX9gkjvbHzY9oVJnUPzvGSUPUq6PVncHzM83tFUbL6EVkooTFQZfhg4ETQuxJR7zYRaC",
  "key2": "4nV7zirg9X8WEV8jsd5k1k3bgzGQxnHfG2janQf5btFH3wwHQLgzen4PAFsovFcaCZdx6scKXjegdP2ySyxQpZjz",
  "key3": "5qPJ3Jp6GRDYYjgTpVoWhN1W9p1SJWJPd8cjuYjMpRgyJD3s9fSXaBzvPKfM4LVFt9f5DRfNSpUy2b6TCE7fzW5x",
  "key4": "KhxqCxaVWdsgPD7uJowxUUF2uT1pMrVsENKYxQ1kZYSnUTGtZ2v1kp8FATiiKL6xg5tQ8rJT6RNHmsK6dtHxfFG",
  "key5": "5w77yo2uJCqvj5VLnpSfaK6xqy7cNJopCUs5Va8uEJTFcRD7yDvNxYZu6gnCabo7rucp6mswgW9wkd7jMZaLt5Ri",
  "key6": "5GnqGxo7pN1GDNy3qxdJK62C2HuMcjXc4zyMZzRr9X9ejr6RfgvV2ETNrZSBbjp9UeobDm27oyDBV3qyEfCJB1T",
  "key7": "3tskXe78hmriMJsvVqTQfLCoJRG3HhTq8BauUQV4jr7XjKE3HoMFoDe3gPZeSNQpbSG1viTqAx9pHGjj8UpgenU4",
  "key8": "46mZiSrTzzCeQWA4fh4Ppg3Ejc9kd1oJphRVzK62osdN8edZBi2zUxSWSaiqqkWuK4vzNCgGRRZH3Ac3Yeu6uNvk",
  "key9": "37ZjrfiheR4xqhqts7uZWncrFqxdX4GCrC6CsYN3SoQeEerjvX1x4hGUosy7TJM9JKJpDuT6oqGb3TaYN2kvNK1R",
  "key10": "5iETXJSNXRkcq3SA2AWe9iYnXkBHWsLQsEfJe7kKuHAtQ6vo5T1zfJAmr6XTkKtFM8cyAkGzWzdeshyxchQWf5dB",
  "key11": "1dfFVjPdSrnwZCA6YmKJCqEm6Md9ouVPuAimo7mVXAaztFBKGwgnNRkYVCEcfXwD3rVv6cjjThJtvFUb6vuSn8x",
  "key12": "3wEBRtztAhrD81rPquTprTbYruTA27gQVWPn7BYF2HyGVnnRyhq3W8AVvTrrzYhaFRjs8j7BXugBa5GA9rNfsRVY",
  "key13": "5iST5oKVLFckRu3nie6GTBez8A3J2KQv84Y29QzAvBsQ4A4j62PRxJ1re9SmRnPAqJYvyK2Sn3o1wkYwNyMcGRri",
  "key14": "XH5FbQoLzgYogNvKeKM2tyaJ7tf6Atp6gmtWpMfCumzwuGJWqvzzuxV2d4DTD5MMqaEdDzFAXE17ExFtzyAVhzU",
  "key15": "3mc61CSpMfB4rDhxAPcxp75iawsdHWKcyhcoJLmCadG3zMh7i2ycbyde4dnGgRHGyDvpsGqLtLXoTuWiMm79mvRD",
  "key16": "55CtBsuT1yiBtEaFHT5zHinXq6UBzCfusPT2veReTJLPy48tPibNEtsQcA5tSzmf18N7xaSXC4AzGv5Jg6dT6s4f",
  "key17": "62mj4kcoRP4fKLBBmXnEsQgkUfbzPQYLaVytwFxUXojyDAEU83GT351Nvx29agyezFWcwB774m5CCj6nmE67s4Qz",
  "key18": "wsngvdgVBpUpXq96QsHYuNZbbKwWa5uzmUpjywpZFk5dcFqRPKpv3rWdDfinnVcH5eMyADKWxRfZyygSDi5j6jh",
  "key19": "tahT4EUpb1yepcFXk6WxSJPvBSKB9BwYYWU37XiYFsru8u4XS3UZrDR9RScABjmXj7S6WEDVSpp28AVK4LfzfLb",
  "key20": "5T5V9yXHqbbTeR9cqqMPNEFRP6PRXkmKLhU6NN7mmZVPtJzwgVtGjD8GCVL6CfCHK99K7sX1mZxktnjeup1Nd8CP",
  "key21": "4jdmtx6SuYt5f3ARu5QzWWa33nLh1vU7wzN3WAXHapxh8kzzCiPnhcCjZxXBKHCDRH7jXGp5LyB9uv1tgSc3h2kE",
  "key22": "ZFQWfv5jBeThBeVgAus3ocC7H4nydT5acXoZzPrJMbsMwutwUfU6mLeRxxY961A43QbgAPZ1guUoKZFjkiw1xGR",
  "key23": "56wf27uT4Bu214NMbaiPRdap7x5UvwbbcCa9mAQJzDeXNRBr4nNwvULnh2SfwbpiEWjZF8zcHphuDVjD3f1hYm3q",
  "key24": "4f87a1MscJAJqyBPheUmyKEJUqHM2pUBJRkeiW5Pao9KDsuULK1XXbdHRnWx5s9yWpAK2vBCCSTzrYYfafzgC7MJ",
  "key25": "Jph8ACkxkMGpXQp3Pgj9a3w8matxUC7P2w17LzFRyAwySr8ty4jih4GXAduYzBQUv7i7AmbGpqui6Swu2vuknJs",
  "key26": "45DeEhyW9K1PNGDh1KzJWXvW27Z1v1C2xNAedbKgxsM5NGhQL1exgZEWwQMnCruM4ugKZXTbzSkTVNZmgHQgGukU",
  "key27": "5ExU1SextfJ3HqxDgTn3Aq3ZqpRka1GUvAatdMuYPyhd89QjJkD4fu8gxYMhoLLkv3r4ZATbosGx8oXQ2XohyLfk",
  "key28": "4NenCyNSfzNcuXTtyUmJntSuZSJCrnoBuVqFFS5yehMs4Njmr8e6MzpK4LbTH1nmCWMb8bvxNnpVAxN4VfLbYeEZ",
  "key29": "4pXA1TufPpx3YwAgSds3v1VspXqp2P2LrSc1UJuAeWcfWjhTqEGXrPX1YcAR7sRAxVvHPd6TTYvVf3cs5uWSpCY6",
  "key30": "4itvN8jFZmUMAFDKUFYBtkBpLsrLuiNMLinzWPMV4bC7umJnB9AtVEJeBZwQpAGJgeKqbtNv6piUuPpsqj4Ydu23",
  "key31": "438YRC5mnQovENu4dBrd6dPuWNgW5vPJcJWvVvnZP768twwp5qP6Kdzn91DcST2Wxk8WfGyB4TcVBrGN5jH7ZQCP",
  "key32": "2ALY3VAgdv17isqWEgTFaJu1L4yTa27kxqU7RdxwDPHXNGu2MpVmBuMoq4JZxxt5TGQkvVdGyAF56HqNaEDSsN1B",
  "key33": "617tp1Fjg8RSqU7ibc7K8GKNyGY3d7fbiBGzvebfg7QzGjZCEUeU378Pa3hAtTpb7Xg1XDNtcaiuLHKsiRUD441y",
  "key34": "oHKqnH1EqGiSmhqVPVeHx7FBPweMsNEkMiJuMCnV5jHqx1nucEhmtWBoqv2KK7f1wxfgQh1vVTJajP8WUunCsvR",
  "key35": "w9Ye2RjBD8hBwP6VNQJMiscLW2JKy9NGZWWakbBmoxaiUJP4iga223oEVzQGNbADbWFYHN3WiiDa2ErjfeSf3H7",
  "key36": "4JRdATg4V6JFb5j1nEbi9YH5NgPZt5tDiSSxX5by5aG59bcmGXQoBgTfhZXYFNFmdvtqVgbJC8pZdYNZw2oPaqGC"
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
