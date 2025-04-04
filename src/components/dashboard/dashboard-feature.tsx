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
    "2CdhNJ5EtjeWAHx7wCkrLdY6i3cx7Bv3rYPUGXYf16C3rRaEkL7txft4wc8Wv7atakB7rrzveW9Ej86gYFoipVje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wpsYBKKauaKR2XR6M6JcnBsMuEb85XWikRKFag9wVkrDq4fHEDR8ZJSnfLRU8ht86nZGNeTssuzWg4PYTnJ5LP4",
  "key1": "3vUGPKZmtLozN6kZT3mbRn5yPPCj7c1zmjaZcPNFeiBFyst9EdWjBPB2pCYDTyoskzu6dAAsACNQcqvnHn462gjy",
  "key2": "3swMXa6adtHX2uTVcqV7WHK2adRXGVjTzqp7AuGYwjC2w4By5bYxvW8WUnV6fMx9GAQCm3QKcycxZnu2hyKjcgM1",
  "key3": "4FSfBoHTJUEjVbX2Lg1S8NMFD65uDKWrs4iSY6kDSxuoA37DN6Ysg6ofFcyvMKJQLwr1tVmWQG1PLpmTnYcW3cep",
  "key4": "tZ7AB3Lm5nGL7dCkb5wuiSmqkiaVpySUmzGzguBCmMZ2hn5PLbEYmG3p6jg5E293NL3e7wb16gAjNz9uiWugk9F",
  "key5": "4A9ibZRswYpdhFAHvpYuFpcisTYeUDBRBxYeEqUCR2xcePy9ePGExVqRjbZ1sP6NaHqremSQNpwFmiEZuCjUVAme",
  "key6": "49xnFhj2bYLLydp5K33PkBrDXANfj1rqxVnfH4z3tiEcnDUMZLyWfQgdSvyzF8zMoUWJQPo8RvJgtZSkXrki7jr1",
  "key7": "2bEbbQPcCcXRvyfz4UJqqpxL9euQa2cCCGnfb38jnJA3KrXpR7j3QegFWgMm3Uc62MU1rHeFBgZBqzkj7NgEgPhD",
  "key8": "3HbZJoDPfFpN9Cf3sgUcfwrhiTueNNpfCp39x1jFN3PrKzsabyukw16B8pTzEJQiMa52o3E6ymzD99Z8hvf9N5oB",
  "key9": "4AGXWzfw8bgG6ft6vB3efjgtJchR2RWNd5eQxkafyEKpsh51WM48h4h5yjcDoZsDKyQBzK9ZWAkA8xoJ7SCEgUg1",
  "key10": "2ki9gP2LAYdmTeTwHnbZNyMHJk898JYWaRR9uAosNeqPctKVTu4jQTht7YccaRDDqEXHd2Kcv49EBarkgCSNch2D",
  "key11": "BMFbpYda7i8mTEgvAiWbVy1wm3wv1wJtmNh4Mhnkioa9xZ71oQftKdvqnVkanYAtjgF1fZWWKAHSgYYEFRERJtj",
  "key12": "61LRwesUeqKQvinqbPpfwnHkVX973EVRgiYt8NVjqcq55eASQKwF1dD5kY8saFjBMhh7tGoApqjensQ5Fvu7iVDN",
  "key13": "3Qgnuo5SiJBoMQQVcnjA4mScaVVRFHfWzVip3FPnvoHZbJiBTzAR61JZZkKwLbSmte3o7PahQ5Uf9zPcsr3zsCFn",
  "key14": "7V9FMtMdNLhCAkhZayZHMdYAc7xmGRsmDhVpwMNLtrXNAeaqFFVALqM8uiKtfs6uLSR24tiXdJgPzRb5CquxeFo",
  "key15": "HzP3gUZq6sKwT2ttXoZ9CTjDR4PzPyc1G8Q8DdFLKopz6wr4LxHhmF4xxBGnee77HDnXCGimX7UsXKvfMM3npGv",
  "key16": "4ra7rTJkBA8iePWLgjzYXY1EeBjD6ZHKpva2V1K1s5k5DrBJtADTYJc1WHErFSA5X7sdZWjJs8Gh3mkwZLrwEGM8",
  "key17": "4GHhx6VYR3nkEEbZNTWXrdLsuUMtmER3HrzqPNfyvwCgyYzsR7HVy73mN49wAQT7beLAGxJyseD3VjimufmiYvx9",
  "key18": "5M27wzihEpRqQsd1dYcwZqE4FzoifREL8BzAKNhJhC6vRQgPU6xai4LxUT7RMQ6kYkaHtZX1VTM9SepvwVjTKgXY",
  "key19": "8XFh8t25WuiNazk9eWMrRETAx9tJe9zr2CgUHmZHCbMU59hwbFvS8SHH8EGQDbBDJeJbjaafqYRSUiAtBc2nyN6",
  "key20": "28sZfk3SNPMnDwx8hhuUeGrkaDi9FQm5WNEN15195AECTQg57VLuvm3LAJQaJq5iPxpdHJuvrRDLTEqdjVsjGaXj",
  "key21": "3FMLnCVf71f5WZh7EKXbC7hekBZjwFsLPaYKioNvPMPNkPu9ViKWEPSPmNXKcHS47j8SoLbixyTfqW39SY7VR3TJ",
  "key22": "54rgGR1f7BPvk6ysqhaNcffUGgmQXGgSSxfUN8adt4HAmxYfZaDq9CftuVQM73bVRxgGNsjwJiTgbiwK9vbU7ST",
  "key23": "5c5xmbcMYRjzKRkAH9XgL9LD7Pq6nViseMsTCF4cJXxLtipE212HiKEPvx7zaCrdHd41q2Htgy3wHxjxeKkirUnq",
  "key24": "5eqqMpZtcPUDjsL2Q5hjNraE2CkvL7Gqbv6zgLuptwUX5r6hdmReVHuJssLU8tbNczqdDEdqZyC8vCPsTGKNYd2a",
  "key25": "YdqpRBEHShYgQ6sSBanJZBRmBqTmA7Gx7zf3afvxKGsSnZ1GBUPm5ZDr5ijBS34YaCWzPoLGvND7rue7sAQGkbh",
  "key26": "4s7MfjXDXwxEGetkpJfkMXN2wZMhDHVVvfptPkEhFY7sjnyqdH5uNcfTNDRCZKPdH4Ym59XeKtn71EsGASRNhpH5",
  "key27": "5Dpw17iDYjdG9iKQSGereg6cnkYm9zkK7wf2hKxJ57MhbKx4SjL4zAzRygmYkYneqqDX5vbTsKhPfcBu2kwLsUrT",
  "key28": "472QuUhYFSSUh4teZk8vvMviZ3U8m9uuZkEKwqtqEqWvCJwcqUeV6ZwkDvWdGTKy81j4KyfTgxUrvf7PufHey6Xb",
  "key29": "QVXW4Ah6MPMNLLkA9EtamTsePEtZChC6eWeEMjyqFMJaL3pH5VyaWNADUJ2ouYNKn5aP945p5wsLtjbDmhGkvRP",
  "key30": "2pPQF11qH7ceaTChjPaCwZKTxNHe4oZHVZ1iy4pYWbi1s6877DAW2DZZkwKcTFX6vBCfkBYV4Zs7a6iX2guvEdNy",
  "key31": "2Dv8ZwA9doZddc3S2N4KUGtytBAU6pdUtXkjV4iHG9PBSBznknygsRZo9eFwGyVLU2Aw7VUj2pfByYFjhTW3xhea",
  "key32": "3WhmBp4QMpHXRN3i5goP3kcgKkjFxB3C4RZYfNPSVWWxf51UC982h8LRXqSgLyaH9APz7yFNd6kagSLHPuqRYw37",
  "key33": "4J6EBHFBXiNr35PkRZfnKJewqXSkCxiDWPJs6f7gWd6xBuhrYAfzbwK8YUQxmsuRj5K5qdZACzHj2ZcWLKGym1hT"
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
