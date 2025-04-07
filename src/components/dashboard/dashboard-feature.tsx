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
    "3Yzd2mPS7a47FiTZLQ4vPEPFSBRNUgfq2bJAkK511ve5MtuFP7vzZVQfZo7H9dhuY999vzgpoMbWVYSyKbZ88Vzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QHptYiLRLKWaZAxsL6YWxPCTGgXxPNjp4bTa2QcVgnSKhk7EX4aZTftXrcLyj49KfLbcsMyJC6aHUPDzubvYXKk",
  "key1": "3EJiqgZjBxpTZvmAAamKy7vXxV3r4Qe5Jye9ZEU7GUe9h5vLmi8dSD1uzfWe67BEadhd43cqJFGUmp6d11b67u4t",
  "key2": "241cSNPxDjbGx8nC2NncB8MoX19osbEBeTuscGDfrNgtYGt8NJp91yYKRPg7WvAvP9PNJq5uJdep75YbUdyikzK9",
  "key3": "rJkXVT9Mt7Xxh6H3pFA5vRvngsXQC4ihBsUvQ27BKuB1GQWXpjPUFene6hQUtLG69GcSEYG3NUieCy3YSKtHWEg",
  "key4": "3LqScefsjM4UK85bep1q6sSTiTmChdPzaGHYe1krV7LE4cudHXqDwb8ykxGQLL14TYgdCtzVcmmiK7HQMsoowbif",
  "key5": "23oSu1KVxamdspmezFtDuEwk1pxkWC2ZGD6rYVePBF3GLHzSJfcnmrbfby1c4hBHML6ruc8KBpxUjjWESk5qJUqW",
  "key6": "3HiBTFxUpBZY2GdePtj96GdXATaWke5SDGKTT9u24DEJAWKx9jvAzQGuiMyKHYMb9eK1JneR6aP9WDfcaAEjv6Rp",
  "key7": "56PTAH49CdFEyLtUVYmhBUNxsEL12FqmgUxgfcv2UGyDhtxNQSubpVFpq9RXSpdB4gRTnTyUp3FFeXHD8qNY3dix",
  "key8": "4DaLRJF441UuHnK9dMTeH6gc6pWqceV1nqL28z2mYFpUCmdLp6YjsDH7gi9SSwSNNZBEf3GoDMtLcXGw8nCUUrSf",
  "key9": "4zRCJhCtXg33TZbCAPBvA3SsW8ZGLHQhfK3gas1WtTaBkVT4Nmc6mSJaTdnswqJyTqgVNtHphtDn2DSo6tApYYNH",
  "key10": "4FUQGkQrwTXouKxvKg3GnJUJcbotYAGpF7MKmtNzVrF7zByV1kXJBDR7narGXe6V1mm7uibE7coJNe6dL1vpNL6y",
  "key11": "5NcUWYAYe4nLCLxCXuB3HTRE54mEnCK1nswmQvs95qpwh5ZHzb9BReKqKuvt2HP5hhq2bEKzU7fnvLkbgw87S7Ck",
  "key12": "3UsDRkibyGEmEkDCTDf1LmmWr2fBfWkc63tJaURpzKZBbctVPPJkSDd6QofJNCFZSvfGLgFbXBVit2RvRPFtVwsa",
  "key13": "36AuLRYtZuLUDXSm9j5BqBZnuBTM2BcstzMifwkA1gFAdwC42CafaJfLdicfDUeBeqLuJcPUyYuH9Rtm8iGsDg8M",
  "key14": "3cL2qRXkiVJ4QE6xhNJBsx1YYVJuU5m6JsbkmJgxZMVDBEo1v7ucmywqUVWqbQUSPuYS17S4SRvF8i2sMwf8LhJp",
  "key15": "5sVkX7tEZYnbatLTZwc2ui9RkDxEjkcx1rh6R6FUGhMa31doYRr81CiSjxQvbUtWCXsbMbgdGYrc15bVpHAKsYqS",
  "key16": "gToKveD6mA6Ey2wVfAPF1gVmv1iLW26jeNYKDK8xDfH4SPPbTath9Z4XxvL5gWGiC8uCLTzEp8hjiU3NY2AyGhE",
  "key17": "3PU5GiAaUoHzr1FHjBuBZXt7xn5HkJTeUoYEqkTtm7m2rupwzy9SPESP21ufpw9qi4jE86ozBexWFV3zh617jB4j",
  "key18": "2b7QFuX18LLh1XkyYQQH8RP6wKPxr24G3ZZQJupxynP9v6vP1V5zFxkzHpv69sDKpbyt5jkwtmwPLxVozXkcEzen",
  "key19": "ZWtFNzPmSHt8dDGnUES1LHZgYk7LBQi2RBJAPvRCqyU5R86aWkv9v8fECoV7MVnwuGQH4N2kxqXmDLd22YLHPAx",
  "key20": "47YKpVwpRsryZ4unF8LEt3rEUkvTZnPXcSVi34SbX9cjDHpt31HvRHrTwhLhiDpkUXSbwPBDfgoKngKwbGZshANo",
  "key21": "4GoBaCDaShjsjmta8kN6yALxht2juM7kMq5RtPP4gTEGMNamfasVSbHkWatLNskPo25Z4uFRESxjMxZWytGTaE5A",
  "key22": "Rw2Hv6PiwUVK9HUXaDKfpmmZSy4zggqgKYMq3qe28UcqeMXoUYWkyVAXoyTiv8rRfAoDCR7nrzMFTxxLW9DGKRg",
  "key23": "1JrWAbvzntTjcdVQ3c7xfWt6y1KJy2v6L7wYAiC4x35GeYsDhnJ5QDeXRGzskMYzxdEf3M2ozLADUpmn2AtCqw",
  "key24": "3rBR78mDHmRSgkEk7nNqY83mzT8LCBck3p4XhguBNWTdBf2FJTiXn9scZVPzCqRRrRmXVrKKsjpK1AY7XZAaVhDx",
  "key25": "nwvqWBeZrvWcRW6tCor9PN7aetdL42twEjf3KLhvuQ2Z9cYb5VsaqGZGjP3bPqfpwbuKBixNJDeQjvq7N3DFbfd",
  "key26": "2tGxGWcK3VBm9FT7jbXFyMpMet5dmTcxCjgQb8TRFoijBPDqqodhkkgb6QLxAKX1SM4XJh924X5mQQ9NTwxQr3U8",
  "key27": "2QeiDqYMDDa7LuBe4wzQhGLBwgaLPnNDCiEx5pw1iqJ5FL6USGURj6H9Q2BPAeYrZkaJwDbaPfge1gqAp4f4mKXP",
  "key28": "2Ed3Su9qGMRiBU1BomtEY2nXdoJtaUUDTLLLwfVm9RdjR9Q6YW3GFPKF9oerk6kTB9igLgbhUL2Qa8qf3yU3LLF3",
  "key29": "5c5eYF5UuTyTcgvGxM8wjfoGRhqGfKGuE2anFEXShyLGY4Qn3RgAZ4NotGN6cFND68DR6BGVf6Y21T1JkBd8N8Wn",
  "key30": "5Akebydmo4hzPMT5ueN6H1ZisD8wFy3ZSSYRu5QeP3Eajh33djY4bfNDV1JifFMajxrog3NBNiN5KpEZC82yTvS4",
  "key31": "4LDgAdS1ntRLbwtZFaZvdhqo4per3M1qr1VvUfh4MXhYjJzhnLsPGHXq3cuDFYgRW4FSUu23VNeoWu2ThfKg5fLS",
  "key32": "56PJupn5XaJsC3oUiDjiiYupDR9LrvfuQNj2UK3Avia97sBfoa41VkjHUBTaw5iecwHgXX7Wj8Qh7x6JR4D1fwrq",
  "key33": "4Bbjya2JVYyhKWQDKQB66pRqBcoecGUrQ7YT9WiLjJ8HCBXymq8x2nPWWNLE8WfmtvdSPL3X3c3pWAbsVWMj4qir",
  "key34": "5Jr87tqjTzWTYfLJWctMsxwN6YPK2Gbd4ZQjptG5hQZDZs9DKcqz2Uvjy7tpSd61L6RmcpmZiRnK4t1VHSN3wRi4",
  "key35": "22k7pq8cqhjBSba2bTc9dSAnDjM8DYP8ZduoHUbDrow95kCD1QcnD1WWEMNRawd3MsK1rc6JNndBRS4VFEJu3Rwg",
  "key36": "31r32TXpix1T3yMLueV6mMHCtwZTyac3GsXovMzzbYi3ZxjWFmgHqAvJvR7gjBTzAg4n2Ue4A2bNZAtU1fwNUGvi",
  "key37": "bqLvot5eYtSChT3LxqqAB19RmzFijBoGSQH8t8Rqv4g7oEAF2KqQJVJQjzPFp8XrXQtoZMakuzkzC8j62WKARJg",
  "key38": "2EC2L7j9ZvwtAw4GBZBYDdqgpi2JA8HXrsrHy39ia4aL8FHGdv3bQFfXDNq7UfeWyMWWh4ARoKBXijEipFfgiEpe",
  "key39": "VoPWJJcHiRmsSLwEE3hjvWXekJcSTD8mrjn1TGtfNnc6feP4mnVyTTSLFdH5zG8LjryTXwgZ6BoH6vkqCpp6vEf",
  "key40": "4PV2DZu5mZjieehcFtzBdaQguyjPERnx7FZxrKiEij4kiTNo9V7JPAi5kNKcKoRZ5z8jD1bF3SWiVJ7T84rojtjk",
  "key41": "TPC2CPZVYfzeAamMhSfBaJWtH3URXxZbNsCVPLoYdCoaU6bjRvrD28ECESgpv2fqDn3y8K4rURvQGTau78hhZhs",
  "key42": "2owCWENu3ACBP1sYAuy5KR9z1EucFU7tj7EahSUDyVwjbzQmCQsVNLcmczD846Sj76zDwdsVG8QgfQwiRsuT8Qr3",
  "key43": "2QRRCYvBsh8xjC8E6i3Xb2EgekvJtvywawRe4gAGWy32BkMbH41VeZqgScS6DmG3TmS5df5dcLYrv9rbGy7KesaL",
  "key44": "5W88jSLPPHtXqLR1mm2Bqj8RnwEseTTVo5wHvsYTvh6tai2CeoGuojarydvg7gfCY3dmxQ2ekRSiHdXt7h3Ed61X",
  "key45": "3LcLgAUSg51qupyCraxBjkNyj3bJiWTR1xkXFKhncj9SDmmSHREFwBtsKKLaSZ53dyxzFZUix39UGR6Et89X3LJf"
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
