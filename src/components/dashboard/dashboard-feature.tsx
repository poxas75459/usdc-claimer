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
    "2nMZ3gNxPXRgXMeMTw3jE7eM9T59h2fXzhY3GypENSstL7c1wzWrY9j1TmFHg3kUBYTUSihLfzpPZsfXC3heJvJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56tuABVZ5ENqAmKEYTFU9RRwsEV1X1EqVYhKEWK41nWfkHLPab8tnkdVW3BQBo5urEQ887T9hbj5zHGqqvvKbauL",
  "key1": "5JgYh3BMm2uKP9nFCbajw58anwqkJkuFytw46FDYuJDq4PhGxyLKV4bKFGSis7bgTeyMB26KTxztUQkA8b5JJQhu",
  "key2": "5fTVEHQAXtLySmNiP8xLvtE1PN4JgMSyYRUPqx1gccCjyJ3MBumKvdrCazqwFsXCnJY7JvMHoWNRUwEjipbPT3LR",
  "key3": "jWPrKj1FmvkXCRoUsbohFjPW9rtirYZVFdWu7WcBUGWsxRzkSk5djStAvTVzpyhFPpnyq54YVQ3KYus8QAGXjTx",
  "key4": "3Yr3HxbFHCB1P2V75f4HFA3Yb5iHnkjdfANWQxfF4wbK9hWUcxwrcUw6LWsgdHDPECwCdQ2D7TuERMiT9gePhBTo",
  "key5": "4muGQrcSqJqrhGxMUQahRomBaQfU8axBVXGvRy2tuzkcDGPzA5SrogzfZcYh3NyFaWX7rBmE7L8fNxAHe9CNZgqF",
  "key6": "3XZcvMTuk1hguoH7capj6sEVzZCLe8p9ENELBbniYWvfzWaH1oGGMDX4MTDuTmJ5dp1yW5iy3WrN9MNQVWLcckn5",
  "key7": "5Qb5Dy6CYXBnxnwYYchApYGr5aLomDGr7ofcWzy9PCAeSgHB1e9NC9J22f356ux4vJBzC1ApqzbSbfy4boERP9rc",
  "key8": "4s65sMv343UFzR9qN2vUCDLv7JfsL4SXKBPg7JGku8wZZBbDzmN3HEKydYeGbQw94gZ4i2SPcdk63dRHNci4i7PF",
  "key9": "4dybpH8UaCYxaTbz8cKbGU3EGchsAhV2A2xgq18HPBPL5Vg2GcuHSboDG2R7vzPG7KuCLmS99sMjSwVcyW7yHFvs",
  "key10": "5kVZW48YanqZYmpzkmfEoAykc9nXdwLHe4HLb2r7Vkj9F5esFPxAb7PpPywpEKHJKuAbXPsX3494zRKEeEDaB3hL",
  "key11": "5uDgvmd7RCFVLSpmMhzDsbWf5PfAxADMX4DLGjpSNY2TSNuk9QBLa6ycvRzpKLRYgn3sNLt2Q8cdAZEJFdNgLrRU",
  "key12": "4QaCrFHKbA7hEUytKF61FVi3buXzFxEgxuK9qNXmyRmzFMB12e7D73NP5dNLL4Kn6261oACnRHh21yHzuGb9HgP7",
  "key13": "66kaTdAHAcVMhj4yKdpoWY8T83XKW5DMW6mYirWaqjys2992XFu88AoMgxErsvHUwWFeSaNs3xYDukma5XHfAE5L",
  "key14": "2sNWnNfr3rCaPGhF6FkaAEBpfU35CZwFyMv17pjrWE1XPAfgHUpDhDjHDEmYbEh4QoFTHANwz2R2NTQiv2rzC7RX",
  "key15": "2nDYaJybBjQ1ZpFXMDBdmUBMjsq5tKMaVbwu4HbP1MUFoE29YiuWbGfU7en8yJ11KuoWgYZr7BV9F4Z7uiN1jv6B",
  "key16": "GMXterThKUKU8FfCnbSAT4cx7TEqV1d7gekqpQtaUodyLJKD2csL5HwMhu6QCgLrx5L6Uf5DYUqJ36TubssikTV",
  "key17": "29EN8pNu7GS1mSJ7hr2U5i7z3n88e7xPvYLZinBm1AKAqWbEx86HfeeCQFzTHx9Vx4AaTbo77WjLnFyHiqMhCWsV",
  "key18": "6xjoC1WXt12TThiFHqcsXm5XorERhLsWuFwXdGhwaWKVgKVp5cquUQoBi8KHAPWdkRXPCtsqJ8oxszfWvJTwzXQ",
  "key19": "nhtwGz4XpqiZmq9kGV98cy4RQKDvvaJRFs3QtSHth9FUdDrbNPNRZZTsfratcAa3uzeiHBNV9EikGPXtWp6HM8B",
  "key20": "ibkN4gqHs1ZjHxR7DoWiamSGTWxJT1sZ2LkQyoKMxGs4YCDq8AkUkU912YTVwLH9pYFKGuVk5Z9H55iddZSt1Qg",
  "key21": "3Fxcvnny1TURxdYXwMd5F6inbQ2pJYDYRDm2sKM1uzPFSHErVRERVDrttuqdcfy1E42NdQQh3zxjQqvv5ZAL1skZ",
  "key22": "Mu3onEpYDnETqJoa75AJrJ8Ji4Fhvn76GXsek48RCZfJGNXZLDjgC1D9a7maPX729pEgSVQ4bcboVvkqoMbbyJr",
  "key23": "5hXW5mszwsap2yBASZRKq3B2EMwPYurJifHqqvMpLJyhXMo4Ld5eb8YaitADpHwvaphEvmHWGCadRqEac6Z82dD2",
  "key24": "4AVjvRCCgnZmQi38pFvQ4QxPGF5N21zgF56hGsCY33XoYoWut2GUZqLiRiKJRqS7vbwznnjG43yE7nCWDBSyyqaZ",
  "key25": "vtJmMj89oCtZHvm8hJiFMCruLV38E6F5mGXxMPoqEGuyAagt4meJAHo7BmbXiSRkiLZQcCbokXHJQkVJvm52zgY",
  "key26": "38HnXMP8knnVfST1hBpN4CTyZb5HjxGFsehi9dLL7svwbKen12ko2SiJr59g2t9JMFV7N9yUVUZwWTzaVcDCoer3",
  "key27": "4qsHk3PRwKoRVvkYmYp4nCWn7gDFnwqRipQaVfVpdJ2xehg3L9PCJneXGxCe8fcQ8S5BG54sWk7XL4wSJdAghoCn",
  "key28": "4RUyLpKUW8vei9E7H4AMdynYYAZXLACvFnxpNa7iCYvc9zztJq9SWEABQ6WaTRneusa2EQwFzFrMZbT4H543wNNZ",
  "key29": "5ia3tjTFrKepA257tdqUg4PPcF7JhkU62oPe14Vra3Asm1B26ot1P32iWKL7dq3ndUqkUCq5fggWrx81gim13wc",
  "key30": "2fPzywomwXUibtGBmC36iy2K8pYnK8GYSUQPgHVhMisQ7Kc7wM7BtHLfuwg3QiSbzSo7Ctz3Sd5dMf42od47WDhy",
  "key31": "3mE9xPfJqxwz89CgP8ky5yvx2uiLws1bNKdrpaNvystSw5edbAH9D21XuUU7uq4keXx2ou5UPJS9FuwsyV6UgHCj"
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
