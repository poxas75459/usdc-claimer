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
    "3FMkpCUZmTi8J2iCbVvFtbwE76e9huMphLpFwoRpco6CsTfmnJPC18y4R2R4Ym4BPxwPVijeM9Eq7XdkemoMaAhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gk4UAQDmDVmDhcM55YQWA99JtnRuF4SXGmaEg49TSy8xsrKGohzgWHVfF1sSVh2WrZwzefzmpRfHkBZizUNPHJR",
  "key1": "2sGHbsFX66T7WepQqcHTkLufUaVytECDhsiyEdVhLRGyhgxL9drV8fG14ZyYkBmH4a5D3PR2NG8bmsAUBoYRdKny",
  "key2": "3ugZf9pSpstLfcu5fDhixTd7et9TFDHE7xAmqtU39NtBpUtf6sG9xVSjUrx1pQEVLmKKZUx2rDebE3P3D3bvw1ZT",
  "key3": "44rkJd9bYuZ2U74D7QrscWqfdWfHNJLV4PMagaMZDZys6v3mGP4w3UUHeNEUhE33WqTkeAin3gfF6eUi7LRkky2a",
  "key4": "2gPj1q8vMk52CKBUy93J3Z6kgNsvr7wkGdYa5W9XWD4NXrJwgSbGSMtLSu2GfHotoRUAHjuhSqz9XB5Ri6apShkr",
  "key5": "UZN4H8jFjNpb3vpdS9mbc1PcjALADAe5HMy3u14tfDeHbNJvYySF4uWp7WsrUNt82NiHSteLaRJe9bXJwjNjnpw",
  "key6": "5xHUoNw2iYj6GaMCdHBXet53TpeF5KD51VkUUbHiU7CTciiNG3w9FEVE6sDaNN6YxFy9JqPDkdbm8H4esGaFVqAw",
  "key7": "5MocYZpLmxXkMN5hqirT7ofzQrRJtjhFsG4UKgPRn4vcfbdsvHTVZu56g5w2NyZb75moQhviQSvFA3MXrSmt8yqD",
  "key8": "FZFCaYNfj7Pvfc7kZ41xR9iwxXBDKoo9z8uaDMyDd7WuiQjnqYikizdNAdnUN3UyquDh2bYiCSjxyH7o4HjUsUr",
  "key9": "2ozP3X6ujd4obJrgqiX1Dw5F4pcLkDwbd1nNvVxYycxpXgYXK7qyLLt54DxYUVTnvUS4G9pKKxMCz5nyVSHCrbjQ",
  "key10": "31XHadhzPpd5vR8dvtZBZB39c3eisvvhx7JzgQ4JNLUqAzT53VRKdhktzUDXZzJ6Z1sK6aq5YDB1ZvTZNmBT5t6V",
  "key11": "3Ad8snbPmd25Bw1fZh2kb7VNhCdTXr1fUrZmaUFCehx9TwcSp1ABVN44eCi8xuEm3gMwhLT6uzHL3XhwqKTenEV8",
  "key12": "6G7xRy135CnmaPHor423xFwYehfvpbHhNpsLN5qHF1KBSWF4HvdL7qWQEbSBfJbexguLvCNEGCnM8fBZiB3U13d",
  "key13": "SksQkryLKq2bD6EjbdSXBoqFqSbKEkSJyX56qP31mnmEw5E4MRJVS3ENVHtPFahCAY3uLHZh72SvTo6chragyMr",
  "key14": "3KLoVKVn5p8dRHz19ExeB5tJxmbkj7onsD4CUp7K4U29zaVB836ed4PHAE4QxiuZxGFphfM7fKN5N9t6K2Bp6JNT",
  "key15": "5Gy5JPGn9jgnfjsH6d9GqfyDnYoYboujXW8wUNMu31UdFr2tdKR5LtJfaCuDvotBxScfipgdXrxYtp3WzixturQw",
  "key16": "4KQoFJdKiaPtSVJcSAFnzfDRW5NwZB713hWvjio78SC4ETT4PzkAoSMf93D9hsjtFHNj73KtdShCDhq7foQ8x4Vp",
  "key17": "nnbGk5JFjUyU1hgkxyjLxVUP3jERfRSfLsiAZbHhFKkchwZmRRsQqgJ7uMY1NcLfSUNbmyRjvpZ6gd5YWTn4z8n",
  "key18": "5wRxJYTJcfu6UNtpGWdZqRBj7ikYnvy6WHdYn4sZCKvFQznEZ7KtDYL3xZSJg6XkowCjHBqNa2TaU4Qb1zyG4iYj",
  "key19": "3FmE1CSJh3x8XjagJaYcsAsM2vhYjNqAsNpydvu8yUVNfv2pPbvjj9ERboSFHUVxM7x7aEghktsYSEEyF2tY3CZy",
  "key20": "5r1RX4HbPoMUafdn7Y71pE4TMc6H7kvBdYmLo3CdCfvmnW6zRmU78EcrJEX9tBaCCkgWrRUbA65Po8hbEvb7YX7d",
  "key21": "4igPUBL5SWdUabfnvMrz1D2VekbMqnDKEQsr18EivwcXrSDyrpaMVFmGpTcp1SnBpEsMjL6aiTocLkn32WbMoZH9",
  "key22": "MCaE41CTJy3jMgXGruJbSWWHcQKuVvCCB7AvVLhsnxhhmP7zo6RU7ZtTwSQKDDpEZWXuDn1ohPt34QUraJBnRYC",
  "key23": "3ewkCWpS42aeFV7Mx3Q1ozbVqAEocbpuVpJbdz4wjfJ8dvXewnhSp9yFcevQAXFUPkjkB7Sg1SxnBAruHY4dVBHK",
  "key24": "gp2HELQw5pu8Kkmvk2mP1NvjzjtwxGPaM6LsT3j3A6LTWUQhYgmnXbw16NJCCBkk3RofjqbhtQ5itCws91WGQgh",
  "key25": "GkprkLyKUuc817XKDLxY2pRevShY9tH9J4s9bcSgSJWuzbC95Y3ueWw4KVRrmKqZHRMJb32PdZEJNUoC4jWD85w",
  "key26": "25meMynnT7WFx9fjAcugLipq2usNUDzt79t3kVvBGo5xvAL3YWp3N1qXQ2XRuPcJbUGGR7cnaDrsytqNMJ4X9G32",
  "key27": "4LvNdQcL1pB9Q7hxcgndwzRpRShVhZdM7BTR5r95GXGusfvpE4rdPoNXQUVoDPo3mh9iRQ6fGfCYACgrmWMtaitm",
  "key28": "3J48x4hMSSM9p67Nbvy5Y9ZiznqU87E4jY4gKMi8VY6JXfdd6BpozKhgr14eoELAKE9SUL2vaJz5bekPttbmUg4W",
  "key29": "299xez3Q9zt69mUw5YXW415abjuu6zmBe1ZWqLZybetyFguQBrk4UtQgRNJsqWEuSx1YGnBWpm8DdDQasgtawF4r",
  "key30": "5gz42dB6tWGEFHsFZtWPS6yqqjZKBgbgdXHTSsnBzbFvoaxwJNvMS9cuxqPmV2DRJXMVg1h4sx4KKj4Y7Fp5aVu7",
  "key31": "2mLFkTuJH8R7J3rVSZcCZF7u4rYvuLm73uLQ2K3g1LCW6JAb2vQ6afAwiUW1UeSSsS6xxhAiy12iyEKTA6RqJaKy",
  "key32": "SGZ3zk1KUNwuFYXVkwbAjVLxtGiNbTkxjaGFhEHxQegX1M8hV68j3gj8dT1BJSfvBfSCfRzFiyTx3WMTqjoJSXi"
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
