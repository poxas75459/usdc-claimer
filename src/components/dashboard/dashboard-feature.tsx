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
    "5aMXYY3tznJqXDn3SEbUmJadwZpFSaY46uEMJVwajBmKaFT6kUNJE6hdXnbVQ2SkDWcm1fy3apRLP3JM9cojSvBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oQuNYd9TRR7QYebuP3xiwgejyP9KLXC3jVkJtYJ9pHaa2FXLgspYMNcFTt3fEZ6XZmzHKiXmSFReQ3a14FRQGdV",
  "key1": "QZQCHBFqYSyvdQG2KZ7eDCx1JChS7GRFP9abax83CmKxd9R8RZMa3cmiJLTJrKrxgRsXjPfEoATc1jcHDCZTfBA",
  "key2": "5gzf7gp9yCeh95aWx7c5waNBKUg2PrKPHS4sJJhuaNBhB4A7HxsbTZJkTHcD4rbdsjFMHEZu4ghYBuphgqesryHZ",
  "key3": "4gxD7pUimcYvP7zY3qBCW9JZdY48f4X3yXa2tVC6qhDtibBC35dsyWsseTfLadTxjsi2xv3SD9Hz9Ee6Q2eEVths",
  "key4": "2sRTUUcZEYBLhYUweDAVvTTP8mbGjXFJVL8iHYeS5imy7dceX2LAchNrQD3vvUu2n1Mv6SCHd3ExHQTceA16qBCV",
  "key5": "4YRyketSSfAdFekXncWLG7uCgja1JTH4XNTkPReXZ3J3SrQXURdo4QjdRpf9VSNnfyE2mXpQafrf68FN5zw5Hg5C",
  "key6": "4W4TYR9K8mjnBVZzV88AmnWp2LXFDFSsnbpDwUwNy1cTJiPLteZ8Q9NLijrKd6j7eTB7JyaYZwWhgqki636LkqHe",
  "key7": "fznzZ65EszC6wLF2iB5QbVbJkRfazKYqyV1WbKfkv4ZrDDa216zMvg1fuPCKkgT3dF5UhWpNi5ijDUiNwEaXBRi",
  "key8": "3WxkW1aHmMLxDUXF3E6tNgvdNQ11atQ6sGFhDv72cauZRqXD5bvq7cVKrPh1pjwvzZdLxnbX8ub56VCmrbi4uXuH",
  "key9": "G9y4zHPM8QaLLTukoLzkaq52uF4yT2RQAn4KeBxwtTgnyE9s99xLphKSg8YCnHKKivzWvorRdNp6FSBqMYG7MSS",
  "key10": "66TTUfrKfCXtdx7CSnLojjnYHZJtszjXwzpisvHKSvKc3kP92qHmVRMX5DMyrcNvaG915QKQ5erttrF1GibY4ysD",
  "key11": "3ZW48Fn6RiiMh8KoTVZwFDC4UGKgX5CjJh2jciEU7aCYH14mLb9Hv5XqWmNC33ji2vXBaESsmbBZpvZJxfPUoLVL",
  "key12": "38kmjpxhkrZDmbxKQUhsaTqHz1ppkqsccoRCQdkQcCotVpuKsuLmzRFaxtwAEHXxvKVtgvxyDsXNWmBpWSpp31EC",
  "key13": "4iE8agcPV2UHCVHJTETnrWqMKh3fHrcLY6LN9y4yU1UkFWo5dRYRLzTF6Hewfcqbdp6nBJCG8rvbq1YtgQdoz3Nd",
  "key14": "TheeGAN7EPVjWnQuo2w4r7v8V9fVKnnVFqxjCugzfA2qw1Jp8Mrmvimdox45JMKJwB99XzgHGhJXNewnf79Bwgn",
  "key15": "hNkzsAhsCPP8C9t4roDGrh27FALRZkheXhb1SMX3zexcDqmQ1PHq9p8MuhErEvJzaY7Sj8YZk2sYGLPiwpzszNP",
  "key16": "4YmR3JA7LVSs5z7naf63zSZYZy5AdFwkChDHXUbBgXqvdrBYW5xF8npXy2DsUCGhENY1dWEdX4defRPZnUmkypvD",
  "key17": "5wYxAfA9ocysniUSR8ygaHMHLBGXaDjKvqLdNMoy3LGTeXQ3QdrYrkdAA6kvpNFCfNBdssujURbidrDieuCBycLu",
  "key18": "4UHVTERbeo3ugeVL6qGUTLRKCMiD9hb27BNdegKabgLRpsSmwr7HTbU6pfVcRRWeBJsCrmt51dQDm9BLx2XNjq1J",
  "key19": "4qoa6Em8QBmvtw4XHa9d6wqnw8RXPAwWErnN9nZdf1A8LLTRiCfsbQSLX11mSM8qDh9G17zhezdHa4T7R3tn4kLf",
  "key20": "3rRC6EtvcA4z9uBxPw5b16fQ9SHK9TezjSJgH4YjSCvAML9N71dUeB4YM7wsCVVGT4VnYPU5Z82VvkhBA8uuSbu5",
  "key21": "4c4osdMFoyZiZY1AhvsL2n9Qr7Lf91SKYp961CNsQZ4rWivmoGFAomQiEnxo5dcZPVnBPcfsGzhe1bBQjiW5WCyf",
  "key22": "W43dez3bEA7znbm6KTLhemEVHRUCqvj9Dg9Pz61ZoC7RokSeQPB1gyssXi1wJt17S22vSGzRFgEFqxFiz8oM7xb",
  "key23": "48bqKvNkfd2oU3XpZCoWCQMQNJNQ4kNYmK97HJLan6NzfWckJckGZybd3EkQMzqW4z2DKQZtLhHTNmDmPcy2R2FQ",
  "key24": "4aLF9488S237FGRTbhRVqGig9kpL7gY1oqBqxaxMtoD4WPaKmQL7aQjpfXELuFb7qzTqWxFNLCrzFBJWKDGhoU64",
  "key25": "j9vj4UHbXtPGvJWUQKvtkcJdPoNr4rvUQpB9RRuhUaWbN7Y4JMchisCGWLsYvpbbfWUKTqzNfJjiLSsnJsrqv4c",
  "key26": "4UtGk4FVkTnuZSFyWbnaoueNg2666GzppyQYaWuCk1GydQVYzcckAxtLaoefrT7naEsFqe8F72TNDWMyPYF6Nstd",
  "key27": "2C3YDVU3LNC5W1D3UBwppgB89NE3qSfspaxcECbdVb7c48dyR2F4JZvUHhcFzJSupmdvsys4jCkmR2ympFz5jzfs",
  "key28": "3KCKo5Kgo1GrFa14rTviTTyqFj74SYPGvQRbS7M1QkhsEFXXYUfPddXJekpCMw8pjnPwaot9s9ikh6f6cLfRj57Y",
  "key29": "4aWKR3q2M9ZGKQgmWBGbMDPkXYS4nUNafHDHraz7QqkKw9MhrAaJ2FncPtj2zdCFujT3boL7syuBitBRCZnR8Peb",
  "key30": "57NySo5cW9fKwUrfizExS6CjeaaEqyZz4N3BhJ4wSeCUPCVchMt9wC7mBTj89MwV2JPKU4oy4cuc8hDLAyitUtrb",
  "key31": "84b5S7GajvCdLw19kP4iFD3eBz48BNcHX2XviVS9eTC432i9FbWn2zefRUhjxVibZuvX5wr5nyV1YkGaZsLiRXA",
  "key32": "5mBCzCf2YvyzAEpAKbYDooPbhRkLzC5RJG5hLcQkGiAWjggUgj5yYWsANHdMgZHMz6ntgCqbxC2fig1Pwnoe5ZFU",
  "key33": "BtzmNRCSV1e9CP56NthsJx7UZEqv5nurbRf9BqdTF7hXNGLVkhvuEYavFGAxoHTLBj5ohuCpeTJuMuzYTNk45Uo",
  "key34": "5Z3RijQ11BxSsvw9hrscSC1cmettn3i2waRS6ZoY2ncupBmaUjBuz8xKbhLehy7GRAynesNp9NjsS6wVb9aQiLFN",
  "key35": "Ys6hdDRYQNt9zmuD5f6bvjDsL5yTY5KZ47BsiQuXrdM1c4d8TtJBFWXifpb5kAg9vfJBw65MGpiEhnrw71HGrcn",
  "key36": "cppSdpQB2wMeGYDFvFX2vUBgKRJ4K228QBnAgTztrEX5Rf1CAogTETpXtFc8n8Jy1ZGet8zWRx9YQ3arGHm4p1J",
  "key37": "3QmpMnbS8Yjz2aWefnPUnBKGEXZbTLTHa9KaTD7xWxpbxbeEBANsYr58V4CNhMZnsimBgiaD5ayHbW6jQ53maQMw",
  "key38": "42b7gRa2eRqPXkfFnrU6eMXyBERHm3sGWCM1fhJ8Zpn2BRTiZTBepwJMpSk5pXGXwvCV4a29tfVw2aK2fZXDjvpT",
  "key39": "4aXMeV6QJqEkzRJ674R7eEsfE2ZLtXbnjC8T9p13WZ7BhXuaDuvwFAcg5EvLs2P32fHGcShAq6mZNEcD65DngG9m",
  "key40": "22KCumaJLryRPpY5tq8cZXBYyAQeBrFjdTtfhD2UZL1np8LyAHCUt5HAG7bGdfKwkMDAV5AAYCoCGaLNk2sUwMrX",
  "key41": "36G59Ynaxawz5QiXbDwovqknSvApNctfi8hyoPjHt6rabXK6xdkMK1bpvQXbn94KFe4iQi3gRNpKUbAiNmSkwerx",
  "key42": "622N2SjHKSepj1924KMQAEPfEkgdnmXbrfBDWWTSmjdt5vtSYHUg1m8ErTHjDWZNvTnE9pwT2Swv4mwsYzyFocZr",
  "key43": "2txFYAzdtzeLry8c5rZkA8YxFAYG6UY64fBbafBnEukiRaUYfmUNwhXuw471Cy5Gh7nJekPCqfxNAoJuCfXMKkXZ",
  "key44": "3jhiDc61V8WkRB9dx3p97n1jcRcEYEd9XFUzsdok2QVH1M7eYc7RXFY6oyFin6L3XavTWN4TZ2FVrP2BpbYDbSPC",
  "key45": "G4VA97vhJfe13EcF7bC8WKCCfnAD1KSTeCBQfDe4fjFeJ9Mubeezwk8yiLc3W2Ap6Ls43Y5faHyizBRuEWk1otK",
  "key46": "4Z7VQH36PMKR4p8Lu9QskftDhYDTPhoEQgrNU7gQTj4MuKjFAsFDP8mpvi6YpomuWYBiUdNB7DmEVDEcaJQ6jF2s"
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
