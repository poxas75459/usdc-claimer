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
    "Eb6aqnZgZVnrvBdV6PmtQJL7sNyhPh8vmJmwNQSBxakHTm7Muwhf6LazDif5veGbTs3wbWnBb9D7T9DVBqAKEbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37fD4nqURAMyzdRpbUKJs3vTVoemGgdEwULQnF6BRH6XA6T5mQLFFNg76Bkn8TYPZEksmeoQyvMMDjxUNRMwHgeP",
  "key1": "5bRfvRC1nDHogUceUmEY75SHQEgmNpHSViQX57cNTTvtBoA4CzskHz3cWnix45V8yA9NgbdLYGV8qHkDTNkw8nd9",
  "key2": "3dTVq6LF5vj7Eorhd45etHsKe5qDuKHdK7gtZm9tRxvgu1SMJbp1pMzJ6sCqMQZYWoHwfc6z6TGNUtbo1eBKTMKd",
  "key3": "ftQ1apGFw95ikXomahYzTsuxYgRHmSCcav8ygNhXjchwb6YydnCaXv4C4kWT7PbNyEjDw6dRV3Sb5tBLYXoG58A",
  "key4": "3dDioSQbiBqcPaWtmJk3TBxLS9e62Raka8KooUpPts49frbZ6v63f5VgdnCS4RFw31SVg8SY96zwcYvna8RdGXm",
  "key5": "5tCHCydZZhvtAaPYnK2U4K6XHjNrgFVKCmLPYguXJF52Krb3tEvJRcSa46YTSvj9U8xBwt9CEjtA86fdFjfBYXsi",
  "key6": "4Mi6uHGa4sPPyfvP28qxCfNjRtJAvvgeSW7ZooGNp6GFbcT1gYRXEjfkizCbBwo7rEVeP8JxwS8KyPs5Kv47bwwP",
  "key7": "2u9ndfpB9mF62T6FuHe9DRHsQ4XH8U9R2xUPTkiuQgQiWRazQksub43r36RbKoQJqT6TySZUiHAXpvMQhRkWqBnR",
  "key8": "3yGnZ1s1Szdq5nvriV95DWcM5jRhhWNSoCQ4v2NmtFFdKBnjFXNDF3Q8TRWg1KA1tnt7fZSbVqCrhGxmU4dgC8jz",
  "key9": "4dnZkwrfSMptVnQuwcGHuW3zDqBFFcun7DRwRDvfqX9HTC4AKfK7eEoZjka96q3VCQGmRmJQu3zZX6xhECcmsfLZ",
  "key10": "2wxPzQ5KG6BQVBuoNSyXoQE2kEX3CNK1BmmvhpazS1tR8MqBdr4MknvWk1962V9dZzabdvwqFoLYaeDQVeSrGj7E",
  "key11": "XNVVHoEoLmAUrrNZULNeCULoGqhUwW1CNSEn1m5kxukj6wuJe5saSoDcFrVYmC2DtxmsncTdh5mdKkZTjfzimdu",
  "key12": "7fQwCbho1qk1frfq9ztK5ev7zamer83XVLCaQKk6FW9FtAFK5otAcNE3jqWi7jzwVqALhbB57wFjdHnyubFh6EA",
  "key13": "Y5pnp7cPTwbZ9uGHCzZaiSr4bBJwbn5QJA2yaoVUrvCNdpqjRSdwAeu9Vvuar7YPxQW3UCqAkNXPW5tEu3rTyAx",
  "key14": "5QD7Px9CqJaHHJWE45NCGDFFt1HASmKV69D8KjvkjDMWW5Hin38FbJ81s6Jn774vH8dKrNoRzq2A4zDfmztRZ8u3",
  "key15": "5pyMJCbGryvNSwTq3GrYCdqwm8Z68vJK6SeUZNgDZtrfbg6fHrnJPB3vHUfn1z8qx59nyUrzyV7DaCMoV2DFvyW3",
  "key16": "2m8DChtQr9WwvwJx6AYJvUAF4tVeZqi3yCkMapCnV5kUSRRQ3BZ3xq5TfnbZTvoXavLsPuSZH8izRkMuDDH84XWj",
  "key17": "4sWBHrj12KA2WUbXK7rkMFrYHS55baT9zoS7iLQh2P9Q2z49fyupvFZaRfuCdLVSMKAy4JALMoZBBE48gebPNHTN",
  "key18": "3CZkhW8N8WcnPGiT1qe6Wg6EfwM256cKVQTC1cKnpD1z9iypneTpFAcksNaKhSLDLueNEBrUEiJUTNjfJNCyFUKz",
  "key19": "5CpPAax9aprsXbkVq5dmN9yin3F7f4ZvWRaZrJ68cBmRfiqLwWHWDCDFJ1HTbnqRsNG6kDRQZ8jMYBXRxiim6jin",
  "key20": "2LHKWvb3kgCH1JG5yDoqHv66JGEfNRJsZyA9m9KT9PpuqAz7gvp3VBREBVw4ghzzJdjNM7ggdcHHdQTbznTpsALb",
  "key21": "2Wr52c1MepjrzgbSMjN47go9TwpdxDZ4nLsFu4XpcDrnNbQsLRkypNzaFGkDUSRXUWJH5gjLEQfq55LmXrob1o8m",
  "key22": "LUk3tRx22ThTNYmkH3S4Nest6qoBWhLepKJh4YUf5PiK2Q4hVCUx1PiBfqSYtXqL9eqX2dbJD1XYRD2jf4Frtmk",
  "key23": "v5NCbBpxbsmJsgt3B5ALA8C5YGmTia2gNCx1S1xugqVrWqieZfgSKARxXfYv28igvBRiimES9EhphM7igDDNnCD",
  "key24": "nVQbnUwiMKWzgsQezHTe6EPQhvwQTQKn9eNSf2xz3uoSso5bV6MjEkctMCURcfbk2P61UTBDwZekeMkMFaSczop",
  "key25": "2zoXsPFxxTU8dUKrhX7CEP3w5ygwbKdQRyZGaSVGrX7uYa5LGK6MzMNNssEmCNdABXHeUTCBYWd2fbEQMxhKXG4G",
  "key26": "JSSLksvWGctpVZKrtmzH9pgMspiu43f6eSzgdzwQWusBhuebUaJ4KLsTsuPScAqTMUuqLKwELzjhkWvEGkRNxYt",
  "key27": "3rUHh8PaKm9uQKtBsHF1VSeaNKfhSLQZWULpN7HCNtvxyJejvftLX2GjAQxXnFJHJJE1cDwHDtTXvALDcmWo8aSR",
  "key28": "4gnUZaSJtWHLWN3y13RYSkwxDLw4q51TqvxcXQ1XyeSVRYzWpyHjgXGpATRaJN35qjjdsKGbuYNHaUo3o9oHKjmk",
  "key29": "RTPCYpTLkeriA9zcWNQrrm6N5gXZt5AFfheExZs4LdfFmqLs6dAwephGBKUTQY7X1UF13mie9qQVhnBTv3JiEkr",
  "key30": "3Eu1rBKYqjc9wcFMMr9GCK5vKPU5wp7qWGVshMGSo4GcWPRgSV5B9yZmKNFDJHjZ8HYTspg8SF4EQEhXyup5Hco2",
  "key31": "5TUeFXFzPudGfcxt4bqkPg5YX6YBYLdQ19B4jXFAwRrNNaHwR13d7NeQkQhBgbu11LQqrWNC58xzog2cXFdxBnBG",
  "key32": "3sLqQVkBUSzD1Az4gZZHdWjmukkQB4eS8vq212tBHTwcjMbUy8XvfpirJwEHuDwR6w82qFZbFjkwtK4VpPdaYoCG",
  "key33": "4uwJYHhBypBJbsVFAazHnETcf4rDGUyNXh4jHFhErDNKbMCii9Hs5bZ1ENZyScsBSurXaL4LGkDRgZ7Hovr2CxnC",
  "key34": "3hyygAxQTYLHASVe64D5SQxvZyL3GfmmtyBaaB2c9ZAzP1QsRGqcXvstdf68xRZYmd1119yadnYY7YCQNu47MRUx",
  "key35": "csXCvnF6yWC8MjfAhBpvt8t2F5kJGRkXX27W9rR2Eo96eabiCDRX6dd98kusfQ1kymNeF5pxbkEPdTuPX1AdLdc"
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
