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
    "e6vmmwpSF5JgvpsAM4EZXRJovi8nJKj8kAzy1wqJUSWgNG3zGPMiHBDtnfKt5CUZD3MF5otucSR2QzSkE1JJoG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RPK9TmMNo3WV5ovBYzizYjKmKnh9z8CUCzQ9cSTDGUHZ2ub4LMgM4fJRARQ8HKq44aUAfVYTs2ER9hd13FG3VdT",
  "key1": "3aQ8rXHVCaiaMv8eS5Tv2odtFZEaHj3ak41T4CKYHshpBLNFoRLsM74KnW1aL3MoXp6m7GaZXjEP35rSNLuwwdLs",
  "key2": "ZRBKdK6cFzcvBTCkcKKTX2omiyc2YgcF1Si1zgDQoiHaeqZRXNBjGwQrXH86UBcVk2BPSAeYZ6wyxEXXCbnaiuU",
  "key3": "pMi5qqVDMjhn43FBH4P5Bx25SqJ9EPkuQivizkiG47qXG7uSM4YDLEb3NBfSx5mwP4XVS2g5r5LCdQX8mvMBSns",
  "key4": "2QHVsxwxMHsc4ixAjsLk2jh59kXCfGiDVwLU6rFT7XTjR6VM3pY2cX2cespwzCD3PgTGf5UT5jfNS43iRqkqQk5o",
  "key5": "3ikyBUsLBidoNmXYXXa2nmXhVF6cR5wsL25ZD4h8XrwNWBySRnpNmrN8VXAmjZjSLsh6N3EA7sdtYVmZeDTgUcN2",
  "key6": "2G2NHSoMfE278N2yQN2umbgLwHhxH2dVVnqwRJUTCqcL1xabAqkukX1kMY4JevY7Qh3s3N6m4xXvWVtW6NRDNhqY",
  "key7": "13iV6wnkozUuCNHMnV3UELK7JKvgeNHTmHBTUjxmtfU4v8HeRLg1iqDNxnSDuKHfYEkf2biG6si9H2rRiLorpFX",
  "key8": "5nJWcJr1hfsL4pr9u63YeisU7fbMWDBV1AttzPUGXHa3XNVNFFZqn5XBGoWXQGUJNfWgGqoHUL82ajAW2EvnzHsB",
  "key9": "4i5iWn38wn2Ssku64ryrvApj2pXYe8JrLezQ2pBEj2cH44jayNmvGnMEvBgYNtyKWDAueFFcSKfy1VwLRPTE9Xn9",
  "key10": "YZvdaRSM2PbMRjZ5DTL2NDu63XzZofHjwViQaThmF2sjbMnDLr5XYP9GVL69nbykGE4szgqbJms3MkKD3KtLLmR",
  "key11": "25Td2cAVPa741ssXixbatgZb6zoxGJkai4dYtyFERCAwRHjrhrhDJFGzfRKkj6h525GR4RV9zWLXrx3zhWXTgh4Y",
  "key12": "5nhdwwdnwfnZCZTs9bbRfwsWtpjWb6azFJdfafETkmC9TQ3CaeSyMPLerGGUU3PTxLE63N6yNqFSgdGuWvpGhcWq",
  "key13": "5KyciLDS4JvLRPsF11WLkmHFn9iazUoWS5Z2Hoexq3LcaXE7iaXXzLRD7Wa3A9khrZX2brbkJDuN7WRTrDi5X4sU",
  "key14": "2b2SEohY4nwpNtveaSf3qn9KcyUzP6rXaSXUVmRvavhGCuo7p5P3FbTdTJWnnpic6UsqART73kZBcGUFjd8qJjpS",
  "key15": "3PcnQg1Wd4WPBFgohm7sx3dkqWRZwXgoqY3BvNrrhhS2VA11LneVJWjGnktECnBn6PSVxvh7MEr4hJUCMg2oSHyH",
  "key16": "4ZvLgezFCLfUognguRUEzqyEqKsqCt1MkTJ7fkwLKXSRPjGSkEpDd3egcWotdKdvLXY8reHfwsjzZu3mqKjDiJkR",
  "key17": "4fYTQhRo6CfKprgGJvQmUNPwVYnzjrAx5Biyd93HuJqU2V2XSQ7rmyGf4bCj9mupeMSUsDe3Mbenu6622ohoFSN8",
  "key18": "5wZ43xkvHMDbEGkyAQ5QZh31rFd1x3hcD5GaohfLsFkxM1o1a3G2Vr2YQVHouuF7NySUZ97PVX6hkXf7HitRCcxi",
  "key19": "2qTpotRqX1Z14riLnWhzCMtJLvx642V3pTWoBAbCebPGR7bNtzUidmGNcHoBFpSbgMDRAEQ2a4qvrtnCpubqEmzy",
  "key20": "3XSMn3YFGDepkuei1NzbSpxCtc3mucWLMhVC8dQ75xtxshvJKR2UyrLqMQxxCQkfFcMU7iqwpSvLUMKiDaVjST4d",
  "key21": "2tKtWhtreXiErNr5YCcupj8RdYqcT2p78zHX6pqML57uxG1t4g3izzFT63AZqEmgKCGzWiH9UwLp1DZAisPJ19j2",
  "key22": "2anGWJi3Bgrmy24dFK5Ke7LG3zRcjWCr6xbFX3k4uQAtQfiBs8GhmZYP5cEicqTTcXxvxBtM32X5Ja9TQ7yv2pnr",
  "key23": "26YDHDj99yPBBLFP2pYffeS1oJUT8pKWBHponsrpvJe7aeFrxhGckDprQThsBMmPdye7LQp7WsN26Sc41qKBQqDU",
  "key24": "39eUR9wKj7bTbhybBXCHKVskBNXJtjNtCodqWbKbsecLtsx8SeqTkD9ZJHaPntMhEmKdYUyTgdXpdPZrsuWjub5o",
  "key25": "W8CZvd95Syc5zzPvwJhRi8r5Trjg3dRztWuftA3cFUhQ8wE64PEev6w4cU4wG2XGgH83L6PiCQxo5HzPxMXjNwq",
  "key26": "5zo7yKUdjuauQUpAYw1Czn4mLLxfCh7BKszuKQK6WFmG5Di8tBat5ZcXHqksWFYpNS7UDznsgzBcaLoNMzeZ8tHS",
  "key27": "3aFhMhKzTAdQN9ku2dKBSQ3MVJKzwXMF8mTe9a1jnYJ4rm3j1VXhWgWbNuHABLY277Y3SAnufsHbjnvywMfRumMW",
  "key28": "5My3MhguA9mXTm9pY6HZbxwo4NNqDEUJg4FVZP5u7ANXmKoZQw8Sihf65rAFYRmtNYK1VCfCkQcUM1seLhbMmdZy",
  "key29": "5VNqsWGFd9yNzGd7PfZnmPGBjPbUhCJMZua2Zi1BTFExFabLC3bWmzQqngJtg7S6VsCwxUqRPQRH8oYK6dpdCxfb",
  "key30": "5zvhJ8Xd3qxekmYUagAhHjdM7MkvYgRvchUugRB6niY8FQ67SY1k9AsE4PcZYGb28dXeTWf1QHN8jtqpesFxNwHm",
  "key31": "5smM4oXdVnj9qCMHj85HN3ezyWRE2A4bKvGXAroKEqsG31UYLECyCyWBwFeTsJxggK8VsoVpamudJAmQjLuLRrt3",
  "key32": "3L4NmbCnU1deSPY2fa2kQWWyCRc9rELkrhQQrTYyxKt6wXqYHSH69kWFM2erYDcRtFkabHmZQHW76oYk3LibeiPg",
  "key33": "3uwAXKmRWLxz3e7JB3QUXDvFLA91tbkSnh88gW4Khu9vJJrkcdHjqAy28SeYwdwTyuf2tKVBxKhA49yiXTrzVEmf"
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
