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
    "2ymnZmjGxdVidAQeDapF6VVHZkwUGmZCEGcnUu4cCWbcWHPoYurJoLkhdKa1oqyDe2EkPFs2euTx1SssSdEy1oVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BRYbAYyN3kfWocRkXxoKqqxrLZZeJv53MwboZZqr7qdEvkZWdsMCrnbWghqMXUo8LzKQ6rnfgsjDj51t78ZMsp3",
  "key1": "RRBWYQqym1hscgeVBYqVzg98vzThpowkNG6qGYVy3YFh2PXjbvgDqY6QSiNsUYGgEC7r8w3vkSJwErBaMU8nUcw",
  "key2": "hS6L6HzHh663gRbtquoiqH5YicdrdXBHnnkbky1oiXvdMPQ8dSnd2h9gvRjhqmTLJ9yhjh2uUXnYxER5CuaYKm9",
  "key3": "2heT8sBoLzVPRM32fWQTPouVNrydY9FFMtUtJrVbQr8i7E2Gv11EcyDVXwJfTuyNBus7BxYScjh2v5BzG1B4hmjy",
  "key4": "jXPv4BCzZL8qwQYv5ah6ymP2ACky4qtQpQXchwCC4tgQPsJhQPUbwwhDiQL7VhaK1cVvRHi1iBkdfp51pKhr49o",
  "key5": "46JJB65JJK7GQ56fsZHAA3V1EY26oUF8ZsA5NWLoSZiC8WEkW3JYyAmgobwpWeKnHuh48zmN12Gd8T8G9NyVpV3F",
  "key6": "3yVLbRRYmjSuDfTiqZZu5Z9VcEvbqyHiXrcMW3myFResrJWddFG2f9mHjQ5esVakTcciCUnnkmBfTUJpg7aNb9x7",
  "key7": "5eWHH5yUqezUrhHMKfoXXiCm2x7bh6jWeojmDhrZcEKWeQoZYzDnVtnjRgpmErEUcqEAcKnR4FxzAg7xMdfJGxFc",
  "key8": "3U8T1odB2qvvoqT8cvP5v8cjpHK6Fw6N9f7kEfimweoaLFT9JJaqHN1dKksdQUjKZ5QCdpzyvb56YKgzhwEFeMzk",
  "key9": "5rokAaT8biGSFhLhGzEyP5iJGkYHbp4NafYqYBpByFCcq9BFFEeZJEBiG7Ujs3LEDNnb3vNnvdh1pyZyxhBkx7sQ",
  "key10": "2rhKp25D5KoihrVPwqQWcLCrJv3oG393HAEozgoBtWnBXiRjUVghkcdkYT5qcM4bw3jivV87p8oBSXLtJQQGLE9v",
  "key11": "4jQVqtdMMHxNFLGcLE1RbdMLEdTTWqSZriJDTFTSm2knXKvGGxsidMtYFHwrnLcryPMrW1PAu8JJjcdGfWkXmYyx",
  "key12": "2nFZKLeYSN9wYtmUHQJLZ1rVpWsjH2K1ByG95DvBCTttB9SB3KhnXu4zGWLtivgPn2xRybrNYHtJGNGZnfWxu2Sy",
  "key13": "3QAgLDoy3n5WSc4aw7ivyqZWohzhWmYi1RUeLjcVQCcLX9oQcjze6ALUhBRGBUz7xBqRuHEX5wkUu8mpdRBRfPNw",
  "key14": "3peUUu113tXBtxwgzBiqFKjxYQ27RjNkuki6vhapdq35vTtpyM7EnwgTeTCpAahArR7EFT6Ex8s3jXp1mU5kop9V",
  "key15": "5BaGGZvpYuonbCkBWqeHYxkwi56zHTFg7Savr1G89SRrHgSXJHfg4jBYk5aXZeeun5pf3FW9o9kdtu5KhEY9vR9L",
  "key16": "4EX6k3uUBzeqsVJutUuiotn6oqYtKqD2M51AdpE16pae9resDTaMHaQFv5Jiy6X9msNsM6Uh7UDjVNj2HE9Rqwvm",
  "key17": "4MKnJTDjkej4xjHh9EsjnscvEL5PXRqXZeb2xuV1wbE7HtDQKXFZW7uVnavaDoYu7KJiohusR1PSabhXipiT3uuR",
  "key18": "xKGpMPcBqXXnCBoDFJA2VKy9Z4E1PfMmG7qixrAukt8dnvU6nc1FEvXtarPSBQ2yCMaDQRuea4d2yqZHioa4g1Q",
  "key19": "4QjNcAnsZk18xqhkJeaStuaLrzLLADDJThSxvAi2xQk4PheY1qngkZpczXHMF1MUzkgYtEAMA7AAVLPPQUeGaxUX",
  "key20": "2zc7K1jPzh8K8gQWrxg5ZUQKGPrCicLAcYyPgJ5pXFwSVFmhkoD4DLV9daf1FzDMKaVx6JUkKpZpz6ymdpGakAgm",
  "key21": "5FmtbQDw1RKgKboD5deTXEX5uPtytYFThb335Grppqiipacxbon55khfH4ZNgvRooutjrWr8zdQkf6aGTyc5PLKA",
  "key22": "sXHwux37QGinv6MmhK5KDa9RtQuqM4tt4za89CBjPaigcdxxpBkSyQ6bkkMNS83kMMqQNtfHm93cj5bZ26obs72",
  "key23": "5cGTNoAf91ibR8VBPdX2zbyiA8fMuNUAkvpP1SXx14qDJiYpqWzz5QztHiXD4oR7vW1Mwz7c3zXLApA7UzMgS7eA",
  "key24": "9VQBndb77xhQFw8w92g3cXHHrLJ2LKbd7CU9Gm1h1bYSbtD7uRs1gTJSCE6c9FGtSoT1V4oDp91iqAh4LFdzck4",
  "key25": "3YvktkmEpxL3iQyCbEnHmmjFH4UMp5H1xGGrGixLBJv9tTRXonJ9TiTSAtyfNLwkevHkTBajDCNfGKdgLucwfRRq",
  "key26": "4ub3k14rUkng46R6uD62UegBGiZTo24C8BjutKPMJ4vovfKv86E2zkg1cuoC9bQmjzS5RqbeV2UMcUqdKJiZXap8",
  "key27": "67jKKNZHoXXEYBKNySzzwnaoNUu8exSG55thLsMgLoweAtj9nkFoouG3v3DMz4qBgv8X75eppNemojuB6Sj9xJcH",
  "key28": "wtEvocmcUijmRZgTUNqMyRMU9ZeHC96zkF8EbztDgVQn7JcuQWCT4K2jCkaZxKHWVGEk8Dd1ybkTGAQuw4hnbjs",
  "key29": "FgCVLn98QyJke9zfgXGpifsjDWMEi9iicsEKGC7NJ1zG8NuhERWNVkT1bftNB5e9yuYGGnQHJNw6rbZqUSm1Hcm",
  "key30": "gdNiVQ7Wnwwjc9GNHb5US5hLdns6sWAWi13TETowRpEtjL2vQEJscqxXuzjxfzU74TT7CnMP6uqE36mMc3qyCL9",
  "key31": "4kTTkHTh3mM12bjSAsakHPomTL2Fyg3FPfyjowFz4rN3oUAx2NGS19Sa7rLe9SLrwco5V1Dz7b6nWfsoqdLuvVNm",
  "key32": "cvKeuEt5t71zKjoUBmgNvJg9HN82Hwfio3PLTMYYYxCcTKuLFdhL5exAj7KffSFXxYpDkpdo5EaMYMZzD9U37Hv",
  "key33": "27ECd2Ko15VwFykjWy54wGANBD4FYFun6AduyZJK8cvNW1mrHwB15Ma9MQDTKXacEYrUC4Jg7KJStw52Ebc71e3m",
  "key34": "6599xpbnadA4iW8LUy1pWjhZRAbnqs4K1pA3sN5CJyDa6DQhyy8E2drVeohZmNzbcjNEyZLZ3aXJCzmXaCkh9NuJ",
  "key35": "3BsRapxGTBhPd9kYiVAJeUWzw72kFEKTHTrGC5Z4nCQuU7X7hSnrmBoKDzXZpwYky6vLmjRsb78oDUBMWQHhPJh6",
  "key36": "49jzahQHLAm2e86NyWiTLuerRPY4n2DmJcuTY7sNYuCawb985HNA6mwuQ9N4P6A6txLNUDqVhLbzBtZsTicvxcCX",
  "key37": "5ZBV81QZCqRrmCrs8UEdrcfHVAPeVM7xUnMm3U6mESityow1vVBXhzXmaonn4mrLpMDYS5o1BChGEwka3SBMrB9e",
  "key38": "3CmmAvXmuu3BWgMDYnLEEUdQBem9MDzkpepUajsY1ubBGZ5iVcf8EjgFSs3RWsSCc2314BDwJDyEmExJq4bi8ay3",
  "key39": "32FKDsVnedKGxH8w8SmVUtfo5twnpWoUarrkZKfnT1wmarryLigqHessBbB8vR5z7YEKP4HwFUWmNqodbP7p5w7G",
  "key40": "54B3ocPbYWuUVt4T9QnbW4SYaJcW8cy5hdquBG5bvYyf4qS52e8nsFQCTCBh3C3crSsigyruRSX5GffEeRMYbb21",
  "key41": "2pHYKrQQgwP9SmMps1fhQKrGVSHAHEDhnPejU483ZEN9zicUaDDvG3JzezBL9kyKUkmY1TUoEdVPqwij9WkvPrqo",
  "key42": "3r166J74YNsBEh2HgnEPTjwTS99wnKjWACNWkzD78ievJt3GFheoxKng1KTPQLVxjiQAF2F9KXQvxujLEwxMnfiU",
  "key43": "AvGNmZLqx8DXPpt8j6pca7xzqitJ2Qe6YGjtkQ8asw9utLpQe63Ktj4d65KNh1QAvsHtAxpxAgT1ReEwNXXUfya",
  "key44": "67LRL2sBFsEbREA8JsZR3ctATgyKbNNVyoDY9JF4dXqsGibGEBGrB71tx2z31ZsPb6RJD84XoQi2FDMjc5ZVY9y2",
  "key45": "2w3xMpiNfiiLMoYkUY8SQtPSy1YACNwSos6Sd2tbW3v7FpsXgcJjvrwFC1PbhVy7WFr5nBjWzTeGAjnjBuRYGLab",
  "key46": "2Y8MWRKK9Qv2KUNDQkAg5dm5Cs6w3E4JdVGaumv7Erw1Sxxp2NHe38QRe2ZKdgxm3Xjgv5mkYDdbuEYE5nREiBoZ",
  "key47": "36uKcVGTFZo7wbDFHQjFv8Q8CdWcFB3sYjpVtjQXnTkKskuTinrTzrkYyhV8KSgTcwuHTcNbRQeAKJMnwwj3DAe3",
  "key48": "5aWQCZJ9wAUyKNfjmp744XY6hDBMZnfj46u2z73taBUhSiXFqUF9wunLJrtRaCGEseYJG3zhnHuJyNW7HTyah6yW",
  "key49": "2Bjz5EdKpAaScEhuot6oeMQdpRV3bitHw1kAEYg2DDiyK13adeQBCieDpkaw1c5AEid3HdGPVQizHz34JQGC9MdE"
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
