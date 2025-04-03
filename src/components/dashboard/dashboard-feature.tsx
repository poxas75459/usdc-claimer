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
    "2PWDdTyytYWe4zttwGMJEVajGyvXeyjR481R1CvUUpbHaSdpjXFNDk1jgYeAaQ3GH1dsu1yRH7uiBLtbtuLUhToB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ci5Pm5NrDa6ypSg48vWsiEsqBZ2Zkk4iUEhPp48R7eqR4A8GwF2BNwvMRpLQhNDes8QnMJA3wjFvmQ9RWwJqu8G",
  "key1": "5dpSTvG88FTVJWt7jCSFA73F2zt3sY4ai6bP2FG37Eg5vpFCdm4xezxeCQPG38DsKpAJ8o6HxC5gNVgvTanJy9ss",
  "key2": "58xk11Z8Uci3pGVNh4a3MLdhz5dDyhmWpvM3fSAWGyt9ggdCWFdxUgyFN1S5NvsVPTLFT7QnUNcYx9Xjs1sUZhpg",
  "key3": "Cb2MYJEFBhAoxJguFHNMfqtvLe1JHqbKQrwjM8t3v2SxsqC3b7Z6pnpAv9wgBrnBkMyLnd3VHDqtgPJnQMYHKjg",
  "key4": "644HLkmgFEoRZBFMMSwoBWX7L8Sidw2SX1ccc5pZhxBTtfnnKmvdL8mjLUgCK83nd8DLqM1ZjmpcGgSXUg8B7uGR",
  "key5": "2QqnQiNXe8eLxxjw5piH6sFy1GgdxZaG7yqHo8hAQC3KcyfCQ8Co3bvBymmix5CfX8EA3gx3WV5SFfC2dkeeHZQf",
  "key6": "hmHXRZvXCrEXyTPGiJhUuBuPoi7W4xqQTohrt8cRKCbcfj9tBR7yS2yoEFvBpfztdfQNPDSPXKzYwQzkFw7faQL",
  "key7": "2Xq7rT4wMVnnFtDZdUDPgrwcJeqMxLPPDtuuQJrUP2eJo5GfrLfXXb7jrqwqtr4ogZsWCf46YKUfe5fQBwY1axA",
  "key8": "bJh4zCQHApgrniPKFvYsi5tUU7NepNkKyMZwdSz8hKhJkVNrTXAQNJ1EiCc1d5SvVERcUgQUWQdfA6d1ke7gJoH",
  "key9": "3zcDogL8XaMaUJT5uxjq3RLwGPptfjtJdKuhHB1X2sfodwRN2Szu6gSSouRzTgdRyEVTqKvRdeEXwMtFNJBN3wka",
  "key10": "2xJrKRXvcPS3yLcx9shUfYgYGfRy15qjyoQzU6ZDCBuYHaTyiD4hXfZf9Yj5MrGCXXHKajFNabik6m2FA2XVLvUH",
  "key11": "ePj3Wcgw7jShwJBTY2ywZCJe5B1nPGTXZkfkMqP2is1s8qBgP5uhpLAbEvVoiwEVWiZeJm743ZszCYLnP1Au7jP",
  "key12": "s47rZzkf5uB3QVYZhUMsmVN5gbvssedBBz5Vei7ZgwxBAJzkjenoibTpfffiZiDYectWvxsxEMzunpmHwyGxQCf",
  "key13": "4grih4Jjkc7xnTDYEZvu7yrJWTqEWBrAZ5aBnwhAC6Fn1NXvknMYPhzGzu9DMm2Kbt3Pi9GCqa3AJSaayNhwCmoi",
  "key14": "3PdQBrwTyQ2W1HEfqi9La4pJjU8iaAs1WdoWAgJzeZ58ZXmsEbNvN5ER4JscEFMtuSzfKNGJ3hHYrZX4kDjAMrav",
  "key15": "y2C2isrRpyMesiiB8WmgeN3ebi5rRsPP1yXJE6qcTJH4WAoAmgNtCbPYjKAAuxicB113x11nt3g4HeK5h1QMQFt",
  "key16": "5ybCm3nwp4a2aRbb8WwwquRPav6W1kV56yutsazhkxhM552H2XQJ6vKyTqRi7U6Gn5fQvkUEjec8KuHdV2JbrDPm",
  "key17": "D9f6vb8X6bcXR4eqQWfjWnFksDH49sxa75iE7M7VvKtajK2oppj5pneXkQUzZ6v7L5MWVLxzWXjbkidyDM2zBVL",
  "key18": "566RrPniWWkVSznUgjG3Ktqopnxz1ZwcDALAkUgYEqNRnhXrHE84SNmw35HKochTJ23PRcDdL5TP5Z7aqzjJyXtf",
  "key19": "BEmejFyNgTptEiwnn4mmfxruHwVi8hD7inwuv3QzL7DXmWHyyxsuucfy2LmRrBci4rjjbJFDcH3fxWykWaWsvnD",
  "key20": "2Hk1gwDdwEhZvyF3h5w66xdyrdKkZJY1Pv6wCZ85KKCsZfviBDy1vYTp4LRyXsxuqykYAqyALZj4k2G6mVNJzufd",
  "key21": "3f9QXJSLfDsHt7q6mdauFDxNeomSpsZYLyCotWssMNWUNMUAr7HHeDq2cDJytDwi7k13ZcUtmHwXxtu5F1HHoxiV",
  "key22": "3dBenUPaw4U4rrc847Vy9DZmirHKtumfN6o4fjepjnthciTq15xNf8gpKPhuyHzqt5preuYyfkJomZ5FoVf8h29L",
  "key23": "1WUW5zKR1BVsRbsb6GTNRB2LRxy6nF5k4YS7tZVUiV8ygqVLVmUt6hXwFsEjiDkxXrPMFkPHLkH5fpYxMAVtf9j",
  "key24": "WGPR4KGVk1eLtEJPDGMRq3iRshJfQ8uj7YV4piRcVU3Ss61MjbrmWMzVHhxkFV1FFxhRL1QXiSnqehgUQ2VmzuG"
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
