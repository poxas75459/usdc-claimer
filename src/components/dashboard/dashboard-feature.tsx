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
    "62sEoKSCgmwHnmsYw1WHQrw9qfhbL5Gp4mGqZdRdc1tnbxmtrRmh3ggBL1h5aMR9jQp5C6pGdNr93QL8jiA8T72N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PXahMmvnjhaJrGBRgFSeVZR9xy7jUXfBh9vPdtJs5ywTYGYJZsUvT4F8H3EbiE8FWy1QtZV5QEYhStYkFYgAdmX",
  "key1": "45kierAaaNfADUdBYm5dM8uhi99f4xmBrzpY2ZYRm7kTLxXe8eRui21F3teMnSBGzPSQLpi41yLbb5JeUoo97BGm",
  "key2": "4BtHDMwygiQqkW1wcJu5Vs6K7vKGFUuDfdBz7jrzgptxHzSfw4YW4S2YY2E7Cjqf5dB2My67xceA3k7d5pDuS8sL",
  "key3": "k28JP17S636uABKQo79ijm3uS47vxVtCKBMvnAMSsL1pPPDsqoqiHt1kVtf1as9D3tw32JWd3H6AaV2QH6sSgxS",
  "key4": "2BwajNzPNYKRYXSchDPDcP46Z2Hz9xMNYubWBf9ugXE78aJnqFHiB6dRyWNkDZkcCAwaicjVptxFiJxnwjwLC5DQ",
  "key5": "33EjGUfJHUxJijhPJAt4CcAsnGg9spYZzLEz4vDZ8VzyjoCvccQ19XpM2MJbLTiZuDvRbDxFjfUU7m3aeyZmYEUn",
  "key6": "rZe9BWJGhzvKAkEB4jM1KuDG7u311x47EnvPU5f6U17tnp9HaqPsQ5RyKLSVxgKZ4Khy1fHq8rZ8uZNhZZdEw2j",
  "key7": "9G4zD1R9JxKbDvd1fUCVR5eRBWDqb32fwn5YuV43SJjGrHJFKovQt1cVzCdYvDQykCKY8fhvFLE4EmhEDs2ND4e",
  "key8": "5T4X2JTPMQkV3RjBL9QgC3FiDdafd97miotteofULcKJXVXMDhSgXSaTveReuX4F7UD38U48s1tC4VVRu5qPN3ot",
  "key9": "57nrY8gMeKguuD1Eh13K9s13u4Z6y7A57UcbLFqDLMjKaVXR6G71DJcnUS4SgtjTB4SCMFWSg25paerJ9hovsrZh",
  "key10": "3P4mr36kyVmpf3ehRCZoozibFjLBJ7tEF2HJbucYGz13cP91ZVc7hYqRiZBC3sRrZS6hsGZz1zpEUExGKwzjPEJ8",
  "key11": "26q1iQBZFepkCnN5UkX39zXNqVTgPbv6K47qs3SH8DdSaxHX63uPek13ecobc8uL6pyvicGZJSBMBNJD8p6YpUXY",
  "key12": "3qetVR3phgJuaPGbtv7V4otPuMEriepHsyaBAjkFknRdVnN1S7UAC4ERzm4ujw235yt4qVVfgQbf44ZJU33Jyi88",
  "key13": "54yBCzczYBuTkK8oQJRQ3JZukzkJsPGPP3NB5TUKG252Ne7RjkYyKC2Mi954zpEj2yMURFHkPEv7ccWgGKjf47iA",
  "key14": "2bsAgZhotDxf3npj5MXrnkQLEgN915g5h6gAfkaTRXDrzbry1DiobAxgW7DyJjutHj2ZhYoQDHGavoqi3mjcRBZ7",
  "key15": "382XAvDGpnwzxkCs7NrcXn5piCGaui7R6vXZE8vuKd7HdYKwes37YQvvYC35EZ4X2TdnXrGsn8SNLFezgb2Fvzg4",
  "key16": "5hiXbihf5R5WX3rNkSVH8uPyiej2dbS8W6KTPpTAR6hHFUPP4uMHQgbKzhmBztkCxKX1HjmsVRRhxvPDQQdXUEQc",
  "key17": "3B2SWuuCTCvNGDh4SrZjfURMsoBRQaWo1P2TcygW8aJCLtfJ3KeqWxqW1qaqMwZjNBJz7gKas5PXzihok4Z8rc3z",
  "key18": "5hJKAgcUjKi79dL9b655zaGKtdHrLC8oqz54ASn8hNHufQJdpTxW5m7ggNGkMsF8m7YPBV1C5mrFgTGq6VEx8oQH",
  "key19": "3ePVh3KDTqyjsQFvpqpPENFQrvM4J2Ttz5hALhMFXf5MMTBQX1PFvTiS1D585KXhX4mUheNmhtWusAb63Zt2bH7d",
  "key20": "5gWnkN4EwjPKjR5nRKSmmEwCxvqbxcJBruDoKrr5kmGeEN3t3pG2gSLGBUBQG2HRpaAWMe26czrVqzHTY5P7dJTY",
  "key21": "mdnaBrMzYARRReQ84xY7uCV5Tq6WT6daahrSNZp2HL6agNpbezNoKJg1d9WVxRVXx7E7yuUmB1AyitpN4Xguhw2",
  "key22": "4voef3JSJWe4V53o4eDhz1GHvvzToLxoZrx9tzmJJuj3XAJNVZzx3uskhqGYLt8YPxWMNMygwfydUwYYhDcN69V7",
  "key23": "5w1izGTuBpL91Hduj9LwxSRWhAmqkxKYFegpWNjuafZb2eAukyoVjfDCNPxi4RktpqPN1b8Caazd72ekK4h9wbmd",
  "key24": "3bBPAFY4y2Fq6zKNqmePRJYd4LXuhDLuynTzcTyBPdoquJjz6YxVu8K2SdMQ1nGWqXPP1MHActud5fWhtqNLn7DJ",
  "key25": "5NvQariKPvfgRkdqQzVjrChjN7Jowam5zoPy4mXEQnc1NUbatYndjJCwwCKHEyg8tQPu7SkznFEXhTZ8212PPGVP",
  "key26": "4HChNY9Kq1aNTeSYZTdq3o1cAQz4WG9nfctWuo1uuPA3GUHy7VFQ1rWdDzNjUcBM27qeo4sAtyRZ3DQbutc9dMnZ",
  "key27": "55mXB3Hfdt1pcCo5UyH6j7JNEQnt8aB2du2uEZDdPPNGqQpMwUggzLYacJkJqkNQHBzcej8XiSvU8XTMEcj8qxGx",
  "key28": "e4W1zMDN1jqX4ELyABvdJit6v2pMyChswRuiETwtXS7TArCH5L6BPqQ67tQb3mrN71ftq2ftFgFjKGHQh1wY5bB",
  "key29": "4P2pWAx4QKUCn6UmF7bDXZd7ZzphAbwh44T5noDGtrWWy1qZpE3X8S8D1rSsZGqFzNMKM28uaSi5g4ZgRTH8pJfE",
  "key30": "47Jh6Qudw6yansAnFfpciMQ7S9KnHVFCihZRhk4o6FM2LgWBYKfHJQvbGRpU59iNwWJwGcPbfNKk3DDcbqNWphPu",
  "key31": "ByBQxtfaGe5Ea9zJz8pd7f7HTXgTHUepBhkFZKbGp3ijqSC3qMGFUeAqoQdgpzWXFP7RoEJGBUD6fN7fkiuKRqZ",
  "key32": "2QsVSbMC5MdF88W9UUPDZt7v4WRvV33GcgU1RQAdZUFnr8d8PLxa5gvCev9B35YAhfgXXe3uemN8VfWJC1qdMqux",
  "key33": "3cgwshaGdZzF1ntLdgwMEVo3WzfcwhuAvwYN6FVk7Tzz9qjwboWqLpdniceMfkLsHt3AeUFwEsmS2spTvVuoVQzc",
  "key34": "RT7tmCZtoGZa6o6YMphUxnKwa2NwJ5LyTQpb3rkxG8PCNVd1skvTz2jRcan4dmWbqRExi6jfrfZFK1e8nawNWPZ",
  "key35": "33XvCz5MtRngroXnHMDNc1fHKRB8draF6c22f9N9CvEZ298fxyvdtbQ2Su7oedUn459jY22vDL4sUazdo2ReM9c7",
  "key36": "25SxMoUQij6D5Cu1KnEPxeR6p9sNShJh1HbUjCX2ZEKXPEaMibJv6JqYqNWqfGRyhCu22Y5hjeYfQJcRc3AEt8S4",
  "key37": "3yAQ69kND33MMdsQCVGNk6ovsuZyWDXZ38V2VY3GLFUqW33WuJ8h5wYynsWMTzKrjg2dYYYh4ht6WPCCkvvHCgfZ"
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
