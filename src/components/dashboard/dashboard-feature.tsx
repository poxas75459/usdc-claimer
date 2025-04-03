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
    "4wEiHQAfV3gBCZWMR65FcQ3CKRCgMQ9GVMXxTp7yY1ft2CrGtf3bUzZ9fKDyFSPJWwcDsbBrqFKHBhqJRuE1ZNqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Th5ZNd4P7WUKTPXtqer6ZCTciQjydgzTt6s6onEPdKLWygBro9PPqCsdGReLXPrzwmydZeyQBGGjbyGoQ8yHZ1K",
  "key1": "2JjCkKJzaMcAfF38tZ6bN9VdU6Q6tbarQoeMYw1BK663F1KpRQFct8c9VJ8XZoCDJ3QBXKUbqkmS8ZC14ZxGU5tV",
  "key2": "4K6gW5zHECRM1vigTWHyveW7hzKqLTXipSC69ppeWAtpbHd8ypJ53rZcbZYRincqQa8muxWTnTY7y1oioCvZ2Avj",
  "key3": "4mCcUzmmy5wyfQhs6d5sMGTGjYAmbujrmJMtZkAcsSh9AAgdWN6RaYtXm4kBPJbm1VCeC4LyAiBed9QwRoa5LfTv",
  "key4": "JoxGQPFrhFw8u5MrZjpck5hLfQezyPjczQuNJA5diSTi7ukokXfJhjgDSGXtyWjrxiPA7oaYidZsnxnDxB3XFhv",
  "key5": "3XDNz3q5KQJSnY4EHLH2HPvKUNCcL6HWkxMD7ydohAEsL432Q8NKfVryFoRXpb1jHPxVVwuQNCXjzPJf7SKpq6x9",
  "key6": "T42YerS4ZqiwFpqYPRxpqosbwWKZY5YiwA6vGEXAS1aB1Rm7L3sCYYAWS1rMz3NbqBwN7YneTn6J5EH1ThpFVeS",
  "key7": "4dqWa4g6zyE5LZ5DEFKiy94aAgpx3Rr7Dg8LRcs4R8bDSe1vzH2ukDrWBSDizACCGbEptD8nMFmktLktDcXzFGtr",
  "key8": "NmFrmo1S2jKkwvhgQVoLSZMNJwDDbaY1Z2jJ2nQNxdX5XAfU2sQxGFLFEVCWtpZhm1ckhEP7zW2HrRVt478XBtg",
  "key9": "S2hBzSBmavbXSFCi7F9qQbBTMKkYaxqkhBY1aG7rmSdEDUz8neoHYdzttnFpobSamgXXm8LkMXWE8tn41Wta6xg",
  "key10": "4ooKgtF6wKPirspQGKhkmJBPfKYfFzrc3Q6uipcNgoHNXD6NsZFJ73vQQix4E1ZRXqTiZq2NPPqfJRRMcWz58HmB",
  "key11": "2ePEyioGmm5bBA9Cmuj96cJ5KCXeZWVurSL8imWYJmbMhXJx32VSqxuRcABA4pc84bUKCm8LFqQ3nv2HzkLDPix6",
  "key12": "4eSKXGUMvuCFZcyTmMmxBCje4H3snQZvL6mLPoMzxzX3XiXPbJT52Z2GtSbN9jags9BoGYT7w3icA753iEUKcuDX",
  "key13": "5TPCoczXnBnMCZAYMNH37dBUhJpyRt25jNRPWAMrdBoXXTVCi6WZ18veGV3wacvGV4sYnwMpQM1Bmxt9cvwnvoDL",
  "key14": "2NDzAtomYV4Ebb31NaKbQSTZsesTe4hnzrabfGkRZK9v1vQpbaVNiJBtjd4waRkHW7bzVzGTLDPzT8Qk7ts4ko1V",
  "key15": "4rZcfoF2KLhWnsyRttnSDaDnwHPhN9rAxZziUAybCn8SS7soUfpnxfUa8DKGu4JhBEsKN2jxnt11JzJeKP53UHmp",
  "key16": "4ej7M8AAJRoE4PoiWq8kqoik6ZdvHGemN8poM3Jr7RitFg5qrJu4GYu7zimdp15Dgm9qoYYMNMpb6Rk26pnvEQMh",
  "key17": "4fdA1EJkneZNERktdAJNB6twuranZGhrVri78kRFALoDbZpUjNgMWCQEC6xZaUNEzJmJSgY4ZugxRtdWGfFt1uDU",
  "key18": "5xNf9cVMBjAtUxta3Lw5dzUQG868g4fPjUvYvpMNEGd12LSaQ6Gg46G7Rf4b3vmnKAb8vr3qa5UsZpBgJDfFNWwv",
  "key19": "27cQjSKWhKPbaVmH6inF63vQ9JtXK3PSMtULLDNUkdvv9tTxnQMydjTcnahnQz1tsuDbS89zsmXDDjREEZkpGxGW",
  "key20": "vNgp2jht9nSNUapCcDvy9Kpsj5fLyrAHiyFR9ZbHF33ngAxe3DKUDqSJGB1aDWGMxz59tWX4xpXgNniQU9NdjtQ",
  "key21": "3VXvK9k1CuLuF3NE1kVwCvssBDvcZvVwui7PjzhVZwa4ru2XbcdCodq3eGvNWQ3YRRhhXDW4v4yTrhS7WtC9Cjha",
  "key22": "2PXUEmR6V5Pu5WtWRe62ove6iFw5uuVuxEfyD4J6kTrePeQ2eLtpxKNQpFBWgpCwYNU7ZWu9jWaAsCWceEWHrg6M",
  "key23": "DUMWSfPD5VFHpVgkkGPNaD5iRr5fxGNxzKwqrGtkzNeHANfEv6QD5KUmNkmVwsencAtowF8fTovVH74MEHrkyAz",
  "key24": "2aWnxqBdcjamnyASbrWNrfxChoikH7Jbe3Vrx5kxrr4oDLVvJZiDzFnnWECnaLKxbqVfARpcCJyoa9T4kDRVEWeZ",
  "key25": "3fD1a1t44ZDbZoAr2EqnDEPZBWJ1oxjznzcnUwRS1QtvnX7p58CwdiWEYgqZPzk6Lo315DN1o337hivuptxoJc4T",
  "key26": "4spDN65uDdy11PHprUZSvMstDXja8jNGij1n1M4Eyw1Lz1q7XhgkcdNHBLwXERY7q4qdJCDsKGJotLbgoXMNnqda",
  "key27": "5sUADbthVy8WTZN2335AjXzhfpfWBfNaCmXjuR4pWdjZhs2fejNAVbGfdkGWfcgZB4Q6nopurRzNLMCFLe6wMCfs",
  "key28": "4ZiuiKdjj7CguL2kU8Tc2zoH18r4Q9LiNnEnBTbaiceA16dJJ8MFwm7wgATwZ9oPRudeCsBbN4CEsiT5ZJKWcqkc",
  "key29": "4ffxieNHVc1nGWFgHfgERVBQwLW36m3krXb2gBC7NEq3YhMJDUThyv2EfuNN3qV6YZx3AWsroDiJSfzEM8RpKQaa",
  "key30": "4j1ttRPYEWf4nUFiU522cdXHPxTDXAKUqGE3872nTkK88aqLijUuFU3GzheTj4Dg2Tts589F4AUeyuakmtbxUfya",
  "key31": "mcKAMdfZVt7dndmyLjzFqn417i5C4mjWERUytwu93aAv4zjZbgsJKbfZvZ7vBezPat1xUQvM8mGyTyagC9X8cCb",
  "key32": "BBzSif8WydXmB1fpWKrVjm9gKRRjCyagAmpr329Wgp7HkTkD3ygHzryEQTodK9431Mm48vu6y1KsbWK9J3drKjv",
  "key33": "hPokmH9RaUAXqBkhto9hkrL55UXfp9jt648etzqvpHhDKThSsWLDda6vD3cRa37UHjN4529YcAs1yAmrrTmq8id",
  "key34": "2qPqba7EH5QgFkabvakpwL3zBQt1X7ps79MPWWw6iNEpHUu3yLmr2YiHaBMDGmXaTDaWuwzmL5Fo4QvrZQMgJVpw",
  "key35": "3QPbSKCa8LNkWQEXFfVc4EjoocsHEc3PHhjJTQb56zM34bojLJ3JKz375sA7SwEUqEvis8w9PCHJbzhAkbHmAQVP",
  "key36": "2HTeMUxZekxX1GVC8n2JxsURj8tAivRmjYRqB4VkJRAgpF8zrW4xbmV8q4Wr5zVTbTemiokkTdv6ph3nEYL6BdrT"
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
