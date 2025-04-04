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
    "3zhWBWEveoUBpyQxdd4H4j3UrGHoYpx9gX3W6ZeL385y3rJjeM4BXNzfqpvAq2vyhk1gfECpzSsaRo94xFWABbkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55GU5j2nj2kNHSoFwwjAMgXRsmfMqM89UmqGTAznk6FRi9idxo3ukQiCiUA8RPAPkQzvjCW7XyjfR3GKhMxt46Qv",
  "key1": "5BBBSLvSXroUXhjD8sUYHUVK6VcWes3opeYrcqpygDgWG7bstH8hJSUdkdBsmzivSGNonnUvCd6knQvujJ6wANWF",
  "key2": "4vZwKkXf1tKCX9mRbg8gvpokPahiFfJ8ayKdm5ZoaYLXoHBAQ5sB1j321XdKaksJj8jKSR3Ta8YuxyhEvMFjwdRX",
  "key3": "4ytqbGzc9R987kqPcjptE5qLdi6VKN2cekTQ1GZUuW9BtgmvpVpXArvxNKfLvMTomcFMRFLas3b7NUvyf8PTn81b",
  "key4": "3mcaH98dXd9h6r3NvQDFwXZ78m5R1VEutdAhmGMgbVkUYxYsBqV25B2NxND5AYvTTrPv5FNixbff5DuJ28Qy6ytT",
  "key5": "5Yigudvkmrh1pycLqsyNdyEHejxQaMNJxUqeyVMZZZURiX2T7vnGkd1vK6ZCtjkGLAftNZoKErZoya3GhjbEQKea",
  "key6": "VgmeToJRqw7NxGFMjARfF1AUNwUSHX5nVbneC6miDaB5LQe4QR1kGTevZasuXxrJsBzBKDu71by5qCLfytbtDjU",
  "key7": "3mEDoxuakf5B3qF8WKyhxE6v1ByE5kAdC7eRnXhN7BjdVP9h2zHzz8BovvTVmFAZE361VyLaDKx7DKN6e74vWeDK",
  "key8": "5YyQQ2fYV9hcwjXbxLrQkxfsVbAZSMaCPbrtuobK1PRSHEjjFupG8if3MzavKvbjMLW585AAgwWsJ4Zx8GAqVvVY",
  "key9": "4tSXUqHYyDBAVjN3GzsvNi6C41cfZZVSGjTigAsjGB4gUW6ZckeX3eK2roX3EAWfMtNwdsbCiHLx7USPHbnLxHTu",
  "key10": "2ys6qtDtKD3D7FBvm3NyfT95zK15tBqevoUYMD4VjrGBArZYD9BmoLrBhr5aDduvHZiAv76vfp51A6orNe6hJxTT",
  "key11": "3fwdw75C7pK5StSDwdNjJqJRjMi2pB7Egn113oH1CZeQ96GSarvDmvDSr94WxJDqPasK8m1oWKmbjXbf5fgpL1mJ",
  "key12": "5V7YWhjZsG3a7U5GuEsJFoEA6d5xJnAehgCQEjhy9HAEmeTwG7cr3Ed4kuZrUipivkm7Du86ES2tWDfNHuThqrHh",
  "key13": "5QNwQYiwScUJRt5SuQP51Np1sE5kFwqtxDUtaBunwLDPA96yUHcAeZe3QSz7RqVy9kjjdAEfmCN1mxhi1tT1MMe6",
  "key14": "GLf45guVX5PhopwcDYM4RRMFASuHKdsVj5hsp9QGT8832zDry4ACyz8Jz1vu33Fm6VWTaYCTZM2htZHtjv7f7og",
  "key15": "2b36xz89fw2PgDrv9qswsJKQJsFihmWfvxqJ9gxYbTxp9cgrpXMCxQk45c1uHnh3fonvzdzFTgS3Bg8a8nmYmDV5",
  "key16": "5XTm4qy37wMc8defagXBHFXB12dQAJwJS7cNNSkiZRq1WTVpHkRex7Y9QGRCj7o4F8Qq7xNvYNj7e7JHqEmTmhfM",
  "key17": "3KHqxn2BxtwBANSrkV1PY1uA9R15dADndb7RvQ4CxC2p2DAafgBT5spo5p2xYMKeQ1Qv6vGTGWka3wK4Wyu58zmQ",
  "key18": "4qv47cFJdNNRafxT1q4RYgwJvi93Uom9D6eLwoneXdddHiySAfcXoYJ4zUdXtDy9vdmmUodeu7rSpmnsVUMrj1n1",
  "key19": "43a5gTocge8Z1v6BYbqBAyDN7LcDSiig45qQtMa8QfiaK5gqHx8tAap6ns5LpB7ziigCN1QyaUqSaXHfkgqaNKCn",
  "key20": "5hXcEPFyzyGfYv8Ry3fkXgk9ThqLSMXUD4PhjyVc16NFPCQnJRNNxChyHpSTyExCzsvQ1wUW12uVEGBnRk3r9ugP",
  "key21": "4p9XxUxyzbzbmSzKKThRgxDuKXZ95ywAEfz3C1XG7SpFNSZWUTYQQ19LeU9fLEc1sxfctCa9EPEaRG5gErzw8WRu",
  "key22": "2vxENGirYg9VoamFUV12zxujaaPgmbnLAaVdusGQRhu1XkNAfGYjSiWPJ9rHgF3JVXDHp1KSAg9HAWnpSGr5aYUW",
  "key23": "EoQUeo5TggV2kG7PsAKu41UtGPNsZRPiHY9J3DxfBSN5PSipLnh1c77wdAh78jqYsLvBf5V4UYKd5oUUt3DBXXc",
  "key24": "5tRr8crmy4ZHxwzKR8XKFSCatVHvAinhg8pmkAtZKswVST8HKbGnqpVAGfYEWiUzGEUnT7T2NC3hTi3ZaJ2UJ6zy",
  "key25": "4WGjj6LGMsX8zN7YUUUXQJNWo3mT3FbBn9u35Mb71kLvpaFJ3xfqFNWt2TKTouaZegXWi3bpwbgzVrqHygyj4DkE",
  "key26": "2Stmer7X6Gp6Wd8yy1VZ54VSYMpAw2crZczySENVXhqPSM9sYT13AoVodHejp1VdPJonRP7LR4pVj1nssk9TGv2",
  "key27": "2mTPyifQc8gPYp8aMJKMQXeHdccDWNNntJ6hwYELbokJoJntQMZkJ5VbucEzoBTKWcYy6zDX35hvdAXPPhpvvUCc"
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
