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
    "La818rUipZkMWEdv4jNXRF2WNrZr3wZ5jQKdUKhyS9bp1GYb5dDNYcMxq1XgCwb5NvKZYZNzVhVL424bdQT46zx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EtAJ2upqFvNAXKpG2mk2d5zdvrZe5zQuioMwqFj4XfmqyZR2w14y4897WaDDpd3uccMurACTxjyWcobijmn9C7t",
  "key1": "4roZa9SrKoAwUESvWrTCg3i89FcqUAFUAE1UcejXmYGXp6kohBXEMoS3mruaifv5i4bN1idbxo8zxvs3XaeDp5pR",
  "key2": "4ftVWzLYzEHuMm8tUJQQkAZZ1fB4ukA9qTaYXS1mBB8539ySXWU4Yf7vqJbg34KxFN71ULSB6dqZPxF6n7sdbwRT",
  "key3": "ETYEQ2G5RQGWrcakig9RmZChjtKoQeoQdUWeLC2riSkPWJEhJgUH73PHcEZVhd8WnBgoX7K9GysTrMxSUpezhLB",
  "key4": "3tCDuGhwQAmg2GaXfr5KtXh6YecCxRZm2t5Mf5b6soFBbLJJCWxC2zmSytdbUJwuMzxzdCXJez4BcdadHV7oysQ2",
  "key5": "e4aRXGfTs5GbBYrodxquGPfmxbjypU61dHxKhzUWVrKvJCWohjsXr4rXLnHjSmCJVYyagm4mMy2FwQh7g3T3Wjp",
  "key6": "2DUk6rtzH2GfJWTQUTMF84Bsxu4nuUWq7d4xjK2HzeMK3gBxTtJ2PqYDhb6Koo4eQxY4pBHK12YKVEFzJD2DgH1E",
  "key7": "2hvZMRTv5DsdR9t3Y2kiHn3uHncn4S8XUToMxEFWB8GjzfWe39VYmqrjToPVKEUg8iuz3iS4UcHS9qXWUF3RTGTu",
  "key8": "3S18nKgXEDvuqsTi2HP9icH2mQtCa3Vi5qiDjjwxV5CfpaLyfJCDoMpqYUgmujXFevjxEWUhYB2n5D3HMNToskHP",
  "key9": "4mqTKYWwsHHgA3qPERbEb1jrofWK7kG98qmbdLBBzuSmvPKtTMVWou8tGiu8tMR4raLvsQ4ZSt7TdCjmXwJHr6Vo",
  "key10": "4X8zkodBjEJKKnpNoMydfZpZzyYzo4uZU6dPg92ufzRWdssHx86hQW1JdNJrGMsSuPGyRn53iu859XfmXhzdFeod",
  "key11": "3Uw92fowszZyzaiinbj2Cp9eMDVAsX3NCDXm7iUCyvbHqK9xEmBy5PzyvoLxEabwiqoNEYrhVag9GGA448yEk8yE",
  "key12": "32JrQKPzFqTu8edRKUaL6KfUmUD9d5tXDU2foVLtzRxquVe23ZtAoyUH8XYuFavLsMVLZoGRA2fKGt1gLFaCWUQK",
  "key13": "3jWrpYLShBNGu3JfeX5Xt3xQ1yVpiWEaSnnyMJV8eZ1PBmvczxEh7vWec2Tr2LA2Qs1pa76KpdEfafH1gAZL1TZk",
  "key14": "56d4KruwXRkQT2gYLufXQSo9Qq5i2Wn44cJS7ybqFuyZRf8ZgVYo2HR86A51GkWzwP5aA7t9AbLW4e5FT8TrqFDC",
  "key15": "2wNwaUJPe1ZFz8gET2gfDZchKVDDdrLgLhNcvhLAjHa2EC9TFyM54TX5v7hpM7KbD2KS6MPwdXRpfFceduuTP3Hd",
  "key16": "4XdECb3Hmdx33N4yCiNCxTNe6zo75Uy51pdHwSyTAQeRUykAVKbCyts7AmEY4Q9ArnXZtkvJt4LPzdEzoiLsS3TB",
  "key17": "3MWnT9atmVNoTEGZnkcYjjJGWUupQiGmCaQNhn9b6KuFxorQq2QYpkCkNNVTrm2Z5FUmWfR95uXYrJhJJ4wWbaYy",
  "key18": "3oNC7h5M9XyPWR75jzvHX6CRCrUCAeCdEcBjMxJvXKsywZxfMpVqCX17LNBFRPy6JXyTtkwBoNjyqA34TncPgGW3",
  "key19": "4TMHWHXXe8qhBFGHLmpdJodjMxqvy8C3T79GqVMcmVLgkPVu8PC5cr2cNAUgy35QNW5y2rEce9N5iLCgLh6Lgg9t",
  "key20": "XB1gDMhuEbTr8ecQr68cESD7HpWU7KmC7N2pJE3ydBQjzd1vVzMCa57uqE6T8iycZt5JAyYs4Yc5QLT7mpTw3xF",
  "key21": "4owYwLt3T9LutDvKmx2At5PtfEYmdAFjWR2HtKrWhsjLBJcxtv1LTbZn3b78TfBq681Vf4Z6htXNK8fTXiq8pJuF",
  "key22": "FMSdbnyiCDd6ersWwono4yKXTe877e4Wd4pLMY4j8mcL8arS9xRiaMymaeaerEjZRoq1WtV1yFh3JkdYkVDgkNx",
  "key23": "4VsyzMXQW1w53hCcVxNF7c9h8nyHR1888Se1w8KenCcRzjXMgJ9HfHxfpnQAwmQiii7yvEKUrt3qpAgAeDbXP8SD",
  "key24": "5TrnnBmZY9DzeNaNwKVTjokMy2bf6ryFqMoRS1XAU1vHBGhopDrZTDcuJCkjirKxcUJYyL1dYsv7KyAacSGAFvbh",
  "key25": "8aRrHKzX4yQRXb66zdA1cDuYLrLHgHKmnsLi2ewZEWBHAy337LYtUqPNUd9wZ39Q1WiUqP38MKkr5PTzRYR1Gec",
  "key26": "4okSaognXisSg2phJSeAERZSSNFfdzXnBeBFgVT4tGAL1PfPq6PW2KVmCQc6qkb1KWdH9vxtJQdsaaHkxCH8pPLD",
  "key27": "RwjtGbyjE8dxbX7d3vejNKctkbuJUtSTxqZF1Kuf4abZBhaUHja9PmrpRbB2wcFqhFRpjWCL4bvCai5AkKjBzrq"
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
