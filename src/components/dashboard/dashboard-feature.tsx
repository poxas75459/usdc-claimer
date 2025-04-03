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
    "263BaRe1LA7xHHg4EwJGzWWj6E4tyTeM5RUeUHxqX98pu6ToteKibkyovnCbarWmN4oivBYkakgp5EKEVF2qJPJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oYCRNxEP2VuMensrYH3QSjfq4v5TBG8SKf5jJMURNAU914RiUDSB93EmPd3tinbiqZNqM8M6KcTKoeEUzzCD2xS",
  "key1": "64SA1JfX7HPiLqUArg9u5jFqAJcvS1vACwWNReJDEYgyk9qN7kKUP8CJeURmUFLhkqFtMXUmS3rEmuFktNppvFbb",
  "key2": "k6didFrePAHKBbTrtwFecAsHahRcogcZEwg5yxvkCuoNWUdwsvvWqEv5FK8RQGigm9mDENFvcwvpEimxkdB9x1B",
  "key3": "5JFF1xwEcFwDfe5D9A49F3GMXdS2aagbfhwKN87oRecSuu2N7aYDSk1oumTSFvWZ4XXandaQMuoeQMNUfXxaFZsT",
  "key4": "66gdpjZH7uqFRAQzVZnWA1mtoLoZ6ji34X9JrVpqkF1eAdeGTZji8jHyUd4fKey7hc3fCTixBXvrjjybpwi2C5GM",
  "key5": "3Z7U2afwv5DRLc4mhBo5t3LDUtUVCAPYNRnccrrBr5VnCFiPafbz7VT5v54gm1oZ4vP4mb4HXzPHyN2Y1ZpLxfmE",
  "key6": "iDbixrJuqtE5yZKPhrwaJP85dJR1KVVHxZtH8jKBDHzJsf1HUg8iUXEAqZ4KZEuHdpVpmZmZ4Te7k6crMiUQrWb",
  "key7": "2h4SFAApmkdPazmxJZ2WuQbbG3cwReepG4dEdzd73wPrnWvUqQ3X8rYSDLWgztMUHT3VQaZ9nLCJ7UTe4J1dvjVR",
  "key8": "3f6Sg6Dm5FG9kMQTix2Jy7bVeonohedGQKdtQbnAeNtNYNH1HkuKhWZ1s8WNfk3qejHzcuPkszikNM4mMdExJXbv",
  "key9": "28k2A7yED3shJHSFw5JXqSUmwrmWEj3pZ4goapTpzvGoP6amazFYuFzwqA4Q4VDnuamRX1M6bnpA9w128g6KZaB9",
  "key10": "429QGde1JaxNV1xkSZ6LDe2PUFQC62U5HPZxZoaZW8FeSfMj1zKvoaSgmcE6CSPD2d9o1kdmKFpeJj8pHNPxwzoD",
  "key11": "2EBa89WYPQ8UxMhjsfxQ89fVy6Atir7hHfLE8sveEHdD4xpHym2pN5hDDNXw8basxE1enPcVJ5kZEqPha5WsJLFY",
  "key12": "2NEW4rMhthV9wQKYbevUTLs8PyP7uXG2c9j6rkYZz9m2fL5EAi9pw8K7A8FfTMyAJzy7iFvPYdF5UZ4ezoyfg9Dn",
  "key13": "323AAgdpmd2yCp5yKE5ZufGHAHbhRxsLMqFekdxKicbvbfMd1gJvMagskWU9T6UHe2AVJBwyspgUuX5ZWnsha31L",
  "key14": "3SQWZBqNaTt1WMxWkXr8XYRhvX8pZEUuvHdQ8vQAzLUbczbmQGUumA6PJqM4qBcyQzEH4VQ9pLnMCuDQ4jPvmeEa",
  "key15": "2gTKaBNGWDX5tWyj8zPb57yHH6C9uwDeRr3ujpWWuy12v56pVcMw7XdNYA9PPYFJCVGu67r5zmYoLZSWeSCuW4KX",
  "key16": "2xoBomp4eDttz4JeSUxBmKnq1wfR2oduuWKKbURvggPu74A7KHvp1etaBu6Rq5z4oG3ef7zi9quL7TVJwvVD7rPH",
  "key17": "347FMp3ygBL4CQU2v4TCj17PEbekrWYDPveDccZk2vsbqL8eKAq5HFMbLbYUDiSRWgLH9MJpxoEi9mNANh77z9U5",
  "key18": "4hcqmVESK9BCST2QGoudaUxFdLKoeKkDMzEWeGu3uGMkSGkCAHUqN78BiacXZdo3h7mLCpGuGSvgQnBUxpdRr1t8",
  "key19": "Ru6jjjfUbREBYSqHHrv8C2v4CofnrhmTFpfh2BHaVLHsKzB92g2Md78jUU3thBXKUun4QVhsn52xpxYs38jJo2z",
  "key20": "2BUJGGaWb7VP1NVCqsPptwcLZN7H56jBd4KsytNi6k1YMobhUDrMfvw8HsFTCGwJMsuxG42Xj8VcBp7Mu2cgVcys",
  "key21": "4Pv8tq9Eem1qFLyMT7gDksGQcNTMzw5qCJWQStLYdiqNQskPy6JVThgCKv3EB4JbihVXZdsuQ6Pu9HPcSMi2VWyX",
  "key22": "38jSuv1BYCDNTsbdZoLQ93XFXMx9TeozWVzXMmuy1PnzeXdLAabHpH4cZrLQactabqmnQuCBiVbnbASe1u9jCgeA",
  "key23": "3SQPN587VeY8dsmkrvUSoKyYpKGMJ2sYufF1ptkY15Zobi8N9DaP1LsCRPNRUBZaFJfq73nSqz6BCZxDjGJpT4V5",
  "key24": "rt1XHpx7YVgwcXbAaKCfTLjGa3DDGLqbA6iUKmfhJ4GdWzeWbikk3SXZZwZYGNVyrBy16m8t7gCAGN77o1XXCFj",
  "key25": "45JyqUrrwVtEUVFgWuCS5ckaFqy3gvuXh4sG64Z3nqAp6fQ7Jk4jmioDvUfKB44MCvKhkGZZapHxQAasqUdKQ9h2",
  "key26": "3MjrYxqbEaEXgcGkxwohScRW8YxgXfhbcNuFuz26PPTXzoczRFX1aUypMjnWF1x3iYcxicVQBmUNLoMHrnKW6wTd",
  "key27": "4vsZzwBn1tCnrdx9rPaSmWNenENbwwLNe1YygLGr1nMRUvG6A3iCDVnE5XytXz6796AobaKo7ZiG5UWyxzmi3jbw",
  "key28": "V4TNWg1USVMrxNNGTqRvVLhNKY9EBmWrG8GgXqvtKk21xWw9xhTrvi6n3fFQrnQdVoTH76BNcEKfEoigMwF226A",
  "key29": "3c8wBrEySi6WGHp2bsUu2hiZgLWMHn2aitGodDeTUBgT3GABHjoDFsfavs99vJrhtm9Q3ru2WHsC2yb1hrVsrDsJ",
  "key30": "aXNiAVMp5gWCiY8eD3JQT76eAuBd8fi6xsy3TFb2A8mo24xobRn9M3veHTxpRSD4sZLYu5EPxWCutM2D9ep5Lwx",
  "key31": "4o6yJ4vzpFFZULfCrPcqaCJbsHxVbvfhtrwNk8xaL2mmCfCqdUokF3KpQimv5UFCy2DE7NPbfRqna7Hx81Pggq7P",
  "key32": "2z1z4qoK5LQwXRdMMoBLzznGuVUfZ2HiBqwzfJFqJiHkurWM4Qsb85jYTN8UriQLP3PzwDUad1iLrZZGHC9Xs3iz",
  "key33": "3BgxzDgUd6chAZcUjuUx2FXmSGGBysnS44DKv6t4TU7nzCWcXoZpkS589e4QJbWjLTKcXCcxMfjuSWLCdTsLV6b1",
  "key34": "4yUW4hTJN5oRQS8hcr5bDYCj6HRqFHeCzcjVqqXYVMMpJoDodY3RQ41SdyXhcStiGa2sbHUzUBJBZj5RddsKSZwX",
  "key35": "2yGFUpRwEQKa6wd5nr1R5oh6uxUU8qVaMfAHFa69Df8T1vpEvohggBYPum9ftkc5N2x2UwWbXsT4fJnkTP7pQdaB",
  "key36": "5zGJE77MmgWPHVnKQE5JmNWo4ZXZitTkHojFfnnpfnCNQi4sNWiCqM68XwBs8z12HhnxNywNYMdz3nPdVECXk5Bx",
  "key37": "SoLxPFaB5m7NFVDxCZubKgTAAC1bZeQo5qKEjeBqX8VcG7VcLzvRCgC5hYVf2mE1e54GaYRenS2JRv6j4s3Hgcp",
  "key38": "5PFXbqt1CAuNnQvYsezLX9JKsv513QjkTc23wsvWBQ7Yz583BbsiK8oRJUJ9EYawEKuQ1WfAfT5UGFGT2mTS49iD",
  "key39": "2RP9JqyZkMak82Nyrsq57mjPuTcz7ciYesb4hqHeecXCJx55YgJsU9G8shyEb31bMPFELnSwy2RE6q8on91dwU5f",
  "key40": "3ayaVNvd7ovD8RGK6e4QTfcXzw7Gf5uqydhXtTzddqQ2s5wjE4NM61i5xiST6CayW2RhANaRVFgEPbZUjmVq43NM",
  "key41": "37KMN8B7UwUHFUGVzUJDfQKRq9TJ7SZPkpdm64XNZSP9d8dPzado8PFmkm8TKy5yXkzhGhzW6eD4pZ2UXUkWfpf2",
  "key42": "Bwo7KQ5Bqm9U6SYV5gDNLBVEyMoxoNAZGF2sjwCbeutFsMBLR5U7NKxVtzzFpYDjaCuLMsDWUqMuJcW4mCyhnwh",
  "key43": "3BgCrhnM41i4MEBk2JBqXZrAqLhjb7KbXawQE6ARPJ1iXrxSrs9a5WSQJUQN3yAUszzJ2vhYGKshGtUdBeTkTLrw",
  "key44": "YRbE1QnUxavMKxwjx8jHuTobKnjQiJnaYyrkR8UwJFjKhYb9C7AG93q16JsaoDy4wFHkr4EhDcdWR4cRyYhMX3t",
  "key45": "38FYi7TBP1EWpMpV6eZUgjbSZQqPrFSbCSnEaLNwEGiy484KxioAt3uGN218njCwovpJfBNmn2rLvkK3pik4cKjD",
  "key46": "65vfnBFirtPzuggBqDNMjLv4AM1VraVr54k1fzuvufoWvtK2vpxTnWHZtJssj41Pd15Lymiz9evDqEbgesg3BDpm",
  "key47": "2eFrvwLvuiFZF3F9sjEBLbNyxe6LsWYgbzB3jQzo4r95TjQsJzyUCTyugjQ93Fnvi6wHHxA2WEktx9xq4KWr5ghC",
  "key48": "5Vitt9NTveBJTtDWywY9hYoJPfQLkpUE6RDsVhHU56ftyH9f1RBVLJxrSgrnGzZ1rXK7SgpmkNyepPeue54cvubx"
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
