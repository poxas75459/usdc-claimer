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
    "aytNacKX5K2L9VVpC7dMNgaHrBttefbnegw7hNcyWJDyS5EQH2Po2ewwKgVnPutn6Xp3CD1nFQTPGZRDVgAYbyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X56PepaSBfh8MjYZ7fks7xTCH1hpVkdtovGwxdXVkTY1oV7tbLGesQMrY2i1S7G7PW5SCQcsJgi8HmYEVYMrTF9",
  "key1": "39UmXyB4KLS64XqLmffYGsxc8DEFVoZRSUjK1GRn2D8voTtXBdMyRqZYCpzJkeZYTL5UiQVNEZZ1nSnohEdm3Vpj",
  "key2": "5ecTkeAhtrR6h8Pnj3jLwaZwg6J2af7tDUY7a4Kcs1j87b5WqThykY1vT6thxkCfiJCPXR11WJ58YiyaZbTyvboB",
  "key3": "5cDkJ1YvS9YwAbW8hTMLRV44oRkzJNTDLygVY4n9HnwBeNypina8oJhTQpb9aXcjQgVpHeQnQyZKncthFVUFqPpi",
  "key4": "2PqLnEh5ev8Phce2vejQGteMKqDBT5rmhvEhuSeURsxsPG6J3hLD4cUHWhGeqcechBiW5LPd94uMAE9inhKhjmCC",
  "key5": "GT41rEqPgMN3gjGCmjLA6dVXqgQpLiWxAHKDKfEumWnBQYAaNJmHY4TT38r2pxBv5kHt6wqM7SVELpDqm8jai4E",
  "key6": "61SYN6eTwfXbPHqyV8n9pj82dnn5KLR6AknaNP7wLwodtfDgT3MZNhZebpLkMQNrFezEnDa4B2rmNs918Gvc6DdP",
  "key7": "24z38xoph4JPrGK9sQF3FrtXY8SrDnpxyzQD8BkpEVHJ6qUWQJhCssR1sRKpeRM3Do79edB67E3fBKjBTUZjmjgg",
  "key8": "2BrW4PqpjkLYzuuS5LYESrfTBARqNWyjm8JsbeCWQbWiGVdPy3EUDQaKSiHHpbtUmkXZu7QZBCNfojijfX32wYsE",
  "key9": "5uUMvGUceXESW2RLY5ZQ1b5NHMyNFFFfWmhQUngkew1jZAAVgJVWVTTP3RYZpj9wUVCBEgw7BtQbkjWdRySeDWNF",
  "key10": "3tqHcpvCP1RgnKqQys6c7zxfeUpFY6KHEz7ebpaB7HUQiKe2UGCcbCgi68Wqvyxte72cdAgTw98zpdWZczqqrUAb",
  "key11": "kiyQMZXoLP6SVKu83h1GocNq8iwvTF4U9SjbL8Gp9v8J9Uc4HDJ1i4mR1PbJfR9ZndpGNKgRzLnARx7JZbhBcvA",
  "key12": "3mGfHNMzJRW9CACXkNiPNko8tZeS4SMzWDA7GuVZ55T4duLc3YNxTG1tRBYscyVkxgzpLrUNd74g6LNpn9uyjQng",
  "key13": "34vCd57hQ2ivXGhdLHXSHEfNDhoG6fe2Mcs8xBqAaUhV1s56VSnorsoa41FX2K5ExUrSsDZAzWhvmzJFTat17i6d",
  "key14": "67rjNNNykZ5VZ6geD3aiisjTB6pi4fy3mTZi1buwj3hNFs2fQJKk2xE28mg8bmjRaf4UcLBxA7DWWEbKgFLQN46P",
  "key15": "24tyvzP5MDrN5RP5eUTrkbbe4ehgezEgdJs5xVwrcdj2hr1cmgJdgcdB3K8eRG7sUQ5LgADsGym3Ft7sDafEzVL4",
  "key16": "4mDV1svwyTZwmXkbYsG5MWm8NMKTJVkVLJGtJEwLw4tKEkieYfS9RQP8HHoEgxkzwKNX4NKs2YaN5TYJLBhyu6XA",
  "key17": "e7d2aXnkMKRNdb99tfPJPwRX71XTDrF48Zrx5rLFY5FcVRA3eTukXVv83354qYM2HF2GXGph9vEaBFytfgNcoSG",
  "key18": "2UvEE9cy7nwpYcVLnT3wpgewMvUN2RHLqxBjS7L4WVYMdo1awrEPFQdpUuKJgPQWqnpYtBs7ZJeUFnyeb8qriNa5",
  "key19": "58YSbkjanSwhB7A9rijnFtQKEuTLnDxYaGJLMHsxUdRjoQ6w2dYyeskXHso7tvjEgoueCCBcheEYxMXkP8nzaPEx",
  "key20": "2gewKHbqfcM2o3UoY5uEMjHVE1f2sha84Ck8L725YvTBZbGghHsVP4ewV9xA82S1tahhjyzGb5sq1bNau5ZcYEiz",
  "key21": "3W6sTU2pB7PBG76YVzfaqGXXdKBTdpKBvUnLxfNiu1uc7vZ8qC5wJ8EJSyCnHHXUAfiXQxb3fdeiMQSy2tSe4qac",
  "key22": "2HYH67udsgZhUvAVrnpy94tf6JVfcS6KyCb2CVF3RV9LNHVAgGQdQZV5qe7ZBm6XieWZ4FNCDJDwv837hposvY6G",
  "key23": "2e1U7iwmNas7vjeEywbKy42Q3W3ZG5p1iVbSEF7g8BAwNhVjc1RU2m5SXHXdSgLbSsRBzKGZZv8cXGWDXZnNfif9",
  "key24": "3pBk1mYbQJr5QE3o3gnJZKjqPZ76vCMNUeMrvvkMye4KL8Y8bCo2vK6FAH1PnGJ8BTy7QZBffww14A7dC6syYSir",
  "key25": "61z9NQiZMBYDgPtcFsTogM1BqkkqiEBu8YzM14tFFSX7c1Y75HUT49VUZkFMtwKJHGpftv1tVLZ2YeaDWz1P1QZy",
  "key26": "4kSCXjxzJqyjK5RSeWbV3x3ciWPh8sZY3GWAoFpnREpAifozbWKVqazWHop74RhQZ2DPPCndz3wgCwufwqmBLEVj",
  "key27": "3Gz1efL4NCf65FrYNKnP4Xh12AdzvwvWfqoHoonDh68FfSbPw1tBqmbfRPnZGTuvMgDPJd7J6MjXEGKiEEZ6NPRM",
  "key28": "xcSWi8syxcaVGw4xNQhcSbJ7YdzGdhEU1mx493pxugMEsf5BBUiRk5zD5NgXNwKHZEp97qiXbKiVDdjXjkgSYgS",
  "key29": "2PeeEvwzNu9yey16N8Det3yJpQoKYfvuzFmfg3fnrj1XgRneK3jGxKmVE1wcY4WW6eS9oDvZ9KJuNcdLCueZ193W",
  "key30": "3Jr5z1hDonVU1TH6MViYTmjX6prEhC9tQ8H6ceWocTRYkEVkkS7KhfVXSttBYHarB8srV63RmmTqWrdVPWiMQFHY",
  "key31": "4ZwZ4RNRMNrry7Qf7bQm9KQdjJaxCSxt58hG58YwyFUbYTy99rRdk8sm6r44wrnk44Qa2B9N52cL5jogv37uWPou",
  "key32": "4PQTCktyF7EUuCxn1SVZnZPM8EQ25qRCVYUhVBPZ7fSBL5rfUieYSDhmoLv2Ujdi6hz8448NoHcjegpgrqpLbXoJ",
  "key33": "Q3JYSbpK9D8ovFmsuDT9BB4vBmD8WrNv3HSwSciTJRpsmJtFuvCZk4KeZtHhYsdXEU9WjnQYSk1WyqpA2h94Cip",
  "key34": "8HEc8qhUiMHmYETPuuc9vcjzvdhSmXAEPJ3NBx9iTexKMiC8jRWYPuGZU6mzDqg1VpUosnFMfoancwj2pMDLpHs",
  "key35": "3PtuPiGz64cTKkvGy3Bz6ztiKdwYL6cNfp8VEMUcGjcibiNoyekgt1fxGauxLVWDoXvMiB2ZPuDjDvHibRMxbhzu",
  "key36": "3brry9nr2fnZXNuebueRrR9WgRsazX5WFSrxhSztAd1z6vvzabNy3iBNDUT7P54c5sy6UQG1agmVAd5q5LDSWc79",
  "key37": "hittNyJb4S9bXmSM5My29NQ26gQ3Ktii7bDxZvSiAkRPMAKxb6qsgNcBJVanBn527TStXRe2KkBzsUJmoN9XnDs",
  "key38": "44J1n2KwJ2C4xtzDzsbkLvsgevr3ZuTz17XpNPeCZ5TKU8ZRXcs792sJ6a83BPjELwYYd6gpNyeM6F14SW5ndgUi"
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
