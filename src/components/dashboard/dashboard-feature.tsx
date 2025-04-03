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
    "4Mfxd2CmeFH8aBBLSbkedGS7wvuHqyhwzvBNLgtsjhBrZk9WvzYpt2KJfpecwnKUaB89xj6tdzkjj7mHqbmZhEk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eXz6kKnd1prjWrRFmkDQ8cmqsuRcftqv2hiZJQaTsQF8XW1h8fxAtiogd16prekcVD539q6sV235fBTJQBEhhjk",
  "key1": "3A7n6bK6jLEegiSg1brs5mRv4dkjLLYWD7SVJwZKDFy5EHDhbDinUnHjjPAWrTd3VoECm4MsVcHVYtSSZPcwTMrx",
  "key2": "2z5vtXjn3KGduejtPgLhrSztQNBiJmHqAYN14oDUGnM1XDRTQptgi4i3Anq3NjgWPmRjVPbAjMoJZCrvLy8ZkKp7",
  "key3": "3Buxnp9tv3CTp9pR8s4bmqzQhfqG34qp7cQb18KyrAjbuqtz9F5wAEntKqJJoSecUsakbbGFeLvS9ovNk6CMu5AS",
  "key4": "49YdLbM1hSLHGJqRD86vqv8cAxLb3kGYvyZL96h4MxgXWVth543xv8gfuQjAHdG24wXygarrXMHZTKKyGGKWLRc2",
  "key5": "65bAYRbPyE6Psb2Kvd6PnnAQvRjscerxfp6kT5ueZanBxSFJ61bbxtZ2WkLZhtXSjZAedTi3VTzz8ie3QfQyNurH",
  "key6": "7PkvEfGt7CFXsgXc9MfU8TXLn6jRHZJyvT2iFWhUY6AAbvYDsaGSM1dwMDZnC96QWeDeCGYGvhGeKHz23nuoQuR",
  "key7": "1p65WF2t4bQY3u13RamNvhStHgLJPsiHBEVV2XWuZE2m2PzGKFQT6A2vzuKptWfV3CNzAyoEee97Knssemyt2TX",
  "key8": "66VPnP3MYRUzybWmGiExNcrL4yUcdauGwAfE2885URnny7C1fUKS8GbHd2PR6Zo7qnJUNtdZYZm2GaFBNiHVjobV",
  "key9": "3W7BBfNz2oDXR8hncvkdSYmEwhac7RhvMvq5s2qzrAme7eC5eKVD4Yqj336pAXCpP9nRLZVx4v13iSNtk5jmBxCa",
  "key10": "2j2aVMDmwFL8c1vpiMuVMfzCLUoYrr7RADJ5jZJLQXqKy8VnfC3JiYasGmAZnjpLskN5j5VpCpaUUFXBCYsFPZb1",
  "key11": "4JUodZvZbZeWFjzzKth7XGuTYXWfkmyzVzUGsToeG3HHh64Cog26896yaur2puXnvpTzMdPgEzyhaEvs2g5EvV5W",
  "key12": "5ghZG5V8gczJCiWDUZQP1JLMpGBidGfp3uWyUkNTVfYAds8QkUxUtDbdCWPFLiK4pVaFcpfk361Dxo4rYBoZwno5",
  "key13": "sVPjhVymLmZT9g9wqQbAVR1yTdqBioGKLc8ZSzndjBahkyiE3ohyc4Dyk96m5MXpADb4bCjVN7SdgGyLniNH3u8",
  "key14": "iS2edBy647kRJwKuayavVfT1TQjp1tzu5QV1MjnH6hN3AutA3kK5czLCzfkWLsGcJ9B3JbQKPgu4kB5Gtiqmc93",
  "key15": "3uVGEMEEVEx1hhmtoZaXybfvqNTy5mGndjfEFPUrrxHsJNdua1df27ArTnhAWhqYjs9egJqpfHdSEzXc1JcVm7KQ",
  "key16": "5ue3LvesfVnRmSNueSyLtorBLGSCqJHYrdPjyagoe8WmaFxqLKc3AFqoTuE5KUMdmwwe41v5SkeMRPc8tyAjrkCr",
  "key17": "2hPn8vvXyNqQ8GpwwGUdjhQ277aM1SyruMF33Dpptx52ofaz2v1WaJVo6EWDqC3mXg5kE23gsbY1umWmDmRCSxGk",
  "key18": "4CPTKFFhZZ2avmwLgMxhr3DjhazLsZu9p15KxwaDn6KP9wcfkM8vfC4Yz7nKJqbcryriEk2MAwSYvCTJQTJGYDDM",
  "key19": "rRBaRPoCETHB7HpJTDJ1CHawJYSBZHPYLZc9YHjjWT3nCuhMHW8wEw23HBjaHpqsXd2kw6FJgxGMyGTHCxKvSSv",
  "key20": "58HE2vmd3dFur85qveHxqNcV3hinDhhP7C4kfSfhHRXCByQoMZL5CGTik3Jrqwz8SZAqCBnfnMzNmyKUzwGShSBM",
  "key21": "4PkATRPGbnHuLCVvbFj5HmFQZKfkvut8qemrmRENQUba9aCSmVcso1VnVj1cppYmDHw8fjNqxKy8nJfgiZcPunU1",
  "key22": "4Z2KzCoUD64DDzzWuG8H2nQApE6cbYZyaXQRFuTARcWXwTe1U8xHYvkboDTiKnMXERRZFTLpAz2FWWhjG8gTgk8e",
  "key23": "5Y8h3KvH3JrHJSRJkQt3ge74r8rFrbTSLDG7r63jt3xp9E1xbit1ZbLoAAxdzfwf1z3BCFAhijLpzcLnKTWCy3GG",
  "key24": "5aA3tbj4oEox3N9jkAosXX5JCeniCQzYuJndAJJXrbdqiJZHPxvTnwhJhpAXae1nk5qPNXbdjHNVZBoVVxoywEH4",
  "key25": "3piWKdHwnUdpCSUekZxpRZX2znEc7GwNvxR15tHycq9egBU5GH2Va7tZCjFxadqAuoZVkS3MJFR1nRXeh8CfrRyp",
  "key26": "5XAvce8uRRNFq5d8z45bRctmLkrj7iFfH8ZHozvK2PwWaKNFqJhs1nYayMHZPptDnDJskfJKY3EYQxfDaeYkWfYX",
  "key27": "wgjG4MexYMtm4zXbrim2szzLwk8eGuZx2ucXcV3Pcc8krRwDxp8XkdGvTZVBVLc5DaV58ubyixTmcyghtHD8NUU",
  "key28": "35Hy8LZzfgm6hmobjcZeu2Z6XapKjsxLmDeRk6LwQXtuAhm1xnUyMMrPUBqdEtoLwfqLjYEfYHxGFqjiEJF25MNd",
  "key29": "QKrVFBChjqbRF6eBce4unv5quN56vgHDvqxbLsMEzJXw4i2AiDXm58vypwmvr8dkoZPBeUxPU9ipvLT2rWfa3th",
  "key30": "31FdRNKeh5wRVH5hWupYGbPsmTogZEjGMk7x4WZ5F4jr6WoXcVejBVWTC8QJjpgCYLpmBA1KFbqoLjxu37kCgf5z",
  "key31": "5AaTa1DQt9QQ12fmbh9z8RsMTVoxS3QFdcKeU48H7ZgXHhBC5pYoJTEeQ7azxs9JcsemUYCLFpzmKkkLGGDXkY3q",
  "key32": "5tSfkcVfQBqpjoe5jyps5SR5FRnhguFj5VseQDDDkLMh249nzmn6VLihvd5bx999sKwUQW1wY6N8qtPtq8AaGnn8",
  "key33": "9EqzR8j7EF6WRQP9kqkW9HftxcyVyMhQZqdeEBWnRTFLfySbwGsBoAmB42YgdUYrcH4fNcSjyWmttkBvtbRqZYs",
  "key34": "RxSmBCetyQu1bpmjrBYdGsKWCMuS2Ven9SsNjwJvM64kiy3FHmLzTeNwyNRGYkEktaGyumwUtkHpMa38nuLhfYx",
  "key35": "4SuugB9BmWWZQWXgYacSCZ8g9keNXjJyaUioVZ5HqmwXcZBvnWwqhCTpCcu42ciMoJKJ44fAXYJaQXQ42wtb6fBL",
  "key36": "4VJQobPgg1jFKGh4R6b8CFqJdVuqcxcDvpeeStZ96ywsCWCNC1Xiaw3nfRoVh7gyLsh2DbAXiBfqvzfNdpvB9cY9",
  "key37": "442MmFXkyxhYaBvhEvvypPF1e9sWEMpcngfFzLochUar8BB4ucS87F8Y326rUYa9VEzrHeHfDQ54cRFU3VpTQQwa",
  "key38": "2nEs85nSvoaNNK3FnPyRMYJKUpUNAX6KtKynLYYYNAs1rUDQA2h1QvwpCRoUY7cCUWuN8FpU57ecQ9wRmpwPhf9y",
  "key39": "vXQjJm6n1kpYkb4U2PepmfTrL7ESoFCVJAoETLYaEo24JkxaweDvt4B64xwGFs8vJFZuNwmZpzMMeX1p1YxeFjL",
  "key40": "2nzKLE6bRjvKuoyqWj1ohxHksgUs3QHUqpUuDSxA4g13jY7w5UDumvAQDkSzB7dAvGW2PmWd9tMxqVFLyyAuEZri",
  "key41": "2dXtLN5mDzhVv1gRY6ZGFNXafjpLQPvWbkuEkJzezcUf2PqDKEKvYuVttk1avqHZruYps3K11j5iuBUNuUpeqXBN",
  "key42": "LKxarQK1ZtBF4vkKdcFa9G11nHPn77n2wEdbqz5yujvGwxVcLZCoWK9vxnwWypaJoUgWvT3kLPvLoV3o55xm3Ah"
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
