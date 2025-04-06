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
    "3ykQs4ynPLYgyEh1ZQPX5dPX7PWQfdkHcXXr2zba6QKRpFJmQKhMjewAHegBRaqrnLaFspGHtQhYqPUFS2wCaRAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EjqQVZ8v52GpJcDAyywiLUiM5AraHvRWbQXJGd298yrZJiukXm4zg9YbYf94L1GfTxacJToD7cJXWpPnu9jgaA",
  "key1": "5B4GzywM4Rd7fmSt45oAebEQjsBeB3gM69SeoRo6rHQuQoiyKKK76iEtXNpKjaCXKRfN2TAT4akZHJRkBX1bC967",
  "key2": "5v2qPKDPoVZkZFrLZM9rdQrj8VFGPtXhPqMH6vRh3rFmCXbwvTv8M848mNxxy7XrWG6eBYJFwPKbK6HXSRYY7VAu",
  "key3": "4Q8JPpig9yW2oQDY1MiF3GeuqTsm9p4QVMQEQe61JiyfhYYLrKpQ9G2tAo7vdVu4JNBzLkiVHTUrhwoen15tyoda",
  "key4": "2ae4DsgGZo57YDug8iHSs7HaET24fUqhsr66S69uvc1xP8sQi9YnW2sPA1fwSNHamaE9oiiCaMGBBXHxSzAZkk5W",
  "key5": "2CaDpCuogG8KUmZbJ76zS4TXHJKzwd9YXELebBPu9eYGk8o4bnATSJPp5PkHaWGLyQ7Q9QrtAGVJFwH6CmV9nrRa",
  "key6": "3VP4pfyxrpTc45VKP6Vf2qkGpR46a2i3eNk92bs3BkqG61yZiSBze44Geoq51eu99sni74T9Gs83e6P5gkwsWaPP",
  "key7": "uNjhubKg2RZPdptWAgnfv3aD8VYc4Z87Lu6e2nAQ9TZaRWLN7WrXTq9TG2EwNLzqfUQ5aYFyhKybCWtUHMPdhDU",
  "key8": "w6rWAiZVJPB4M2M5GwbNyQkQxw95gMkap77Cw6Zj7ZbhzYYDM7kYxLUkB1oDYHhXJ16qDWmS7w8jNn4f9z5LA6B",
  "key9": "2ij6a61sWAxvSavGyJgaFVj8LvmTQayKZU2uPCjWvpZuLAQw5F1vyhWfrWtkauVA4nk8Fg8SWEY9LCxwqftg7z9",
  "key10": "5mGHhemMsUbRagDEseqkCkt3LwaKEqCHN3GvK6YpfibCK6tjEaJTSYyGPV2KhGZABSr6hvMbDcqaAvmU1kUBwQPa",
  "key11": "bvYbRhMPoj1kcJjrKxduA5hnK4kE1tTohrDPZsR92WyWKg7QXcVccGWATfyU3hmQUdmMHpwEbofettZ7aov8w2R",
  "key12": "2YJdenbA1aactNFp9B6rZEbCE2PmrTSJTcnwmtCQnHmXpfJHqEu7uWVX68ixesmMV2KVGge3qPKHXPxcxLffMSHd",
  "key13": "NdxJpueTZgw1YWRtYzK8kwjVCGomquwSeMp8TyBzvf8jCq3e8vQgyt5C4cWG4ykexbaW7rA5E82gpiKD7RHUHQw",
  "key14": "4SWeJ9SjgKCzi76Dr9x3k2C6ETok8d6bdExs64YpHbknrGhah8BFZSTUjJwqh3gYtiTjgdAC3uXYBDsxvoUuREya",
  "key15": "9NfKoRb7qXHJnp9Lc6aHLwrddcJC4rrSXj1tUSV56gjWY8LEShChnXLyL1q3SkWb62MVQkkk3cLS8ffUDBbHLuS",
  "key16": "5fu9D47xJmii5hBmu8oWNWehPMwko5ZXdAjSEh68kZcBRYPpB4H3e33e2hRoB5iikcdwY9YUjGb47eHmGTy9umdT",
  "key17": "2beATENqNSHt7w3SB4aPxf5s9S7WaJ7p5utG88zdNWJ1RweYGzTTQyiAnxUyihhxRPFAxduGdCBUtdy3GTPzMjYC",
  "key18": "3ucpsqro7r5qwcrBps4Ry4rAogoiwNCiPPW51uJMJFtpYD4wcWm6RKwghfsbVx6YVE3zKS1oVvbFVH85UeVZKG3J",
  "key19": "KZQ7egHBMPs2jLtYQhrMGLA61j3gvt3BbGpkbQNUquV9DVEPN7x2A5PUfdx6DecGBAkD26oHdDJUE9yZAF32anM",
  "key20": "5doNdQ55JE1aBHMo2sXkuemHJTTxC44oSgbD1ptxHQUj4jXi3dMqzqa3siwdBMVTEdeinEfs7beowsuSqPDWjaqf",
  "key21": "5WxgbDLjWEVaGvThMYkx9qR5aHCSh1QtBu2SnKMxhW9YWkE8cf7N9c8a4gGwHGSwjoX4yUQupKsWh7kPSFCv9Sjv",
  "key22": "2WvP4gc47NQHmeSbrpbiFpmv4DyqwsJ6SgbyN879TkSuAcWfC8XDtzVsQY5E2WP4kcheStCCEVSCU3a5CbkqbkxP",
  "key23": "46DWf36ZS8MPCLRWFoqtnBVafb8MJpm2CgkKz8FGBUEXWdq7oFcQHkrZRXUBBhxLBVCSQyRVMtkDkKmfUm5SjwpY",
  "key24": "649A3HByerzieyKxJyMzQXppFjTU1BGPj4EQTmrUJXVTz4YnXmUcgnC2JbSQvSPWQ35dW4dbAT35xAiSaj94UMNi",
  "key25": "3hTE68kG7cNiBVFsMTpFTw41ejBQwrdk2dGbzv1s2WfCoNhTPCEuBdiwh7TbASaXfsU4HF37yA3gptMtEuzUo3L3",
  "key26": "xw1QsGCZdWqujMasr99pJ7fM7WoZB8nH8Y1WLgzEyfoeBsAWwq44HuC1ammw6stQZyM5DCy3UmF3KSemKydY8h1",
  "key27": "3wwZ8tLYUGv7Sq4CKHNpzTsrVez7RcEjiPJ37NwrNmKsqwpwDtQLbhKC2H3BiqSKj9Lrb19grTXANJ6ZimKvzaj4",
  "key28": "3V2Fk9JPYjdAFGzozimDC9hdyUh4nEEqaVWkbgneE2JTyD44r97Lqdz8pvUsy97rDUjCACA4nxbGrZkTxdXvqN7T",
  "key29": "3F7eHTF1aP5Bq2NQE1gv2FEfUKFq17DJHQTNWc8XVoysJjTPVXV6snN5iqE7uhQLFhQzD4EtRaVEg5B5zuSVzdTr",
  "key30": "3aZ8KDJjtcY5Q37VcJmoVSaauwkKayGfZy3jdU76hyg7yXJ9eSwU9jNS1YhGFktrzdHDPJq9xeJaq1Bnpy2X4KFG",
  "key31": "uoy8hfazLYuotNT48gkJTA3cHQYPXu3KbcNqenPGi7BP5kbuASi4r4W9DWvkbemVS2aSqoHewsFnwhT7ijvWhLR",
  "key32": "h9x27dqiCuWhRaddGw2TWmvH9xxKnmj29VE8x5sAf6BinAm7aVuTj8xaqrGCrd5AgAgJMUkKMoXRDVLmCNUhet9",
  "key33": "C7YnMuQRgzyMTEjkPVwku2oFYhiCmeRmFqXNx1gXjCfueK7Kbc5hqT2cMtGxT67G4KHN5Z31B3fSUoouf5NvWWW",
  "key34": "57cW1dh6ZdEsQNGgXehq1di5E7SNsaCUtMQNzgfHCR6w7vCiPohKRVkRj67ibdzod9Lqaq5zS1HefneqjBUwAXW2",
  "key35": "2GTRfq9jJvy2t4Zjeunj9ZPNsFs3KHdCKUYD9ew6aQkwg8t6hRHkmwEDM95NkupRenz9VpgTXTY8ULSpbkARLwxd"
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
