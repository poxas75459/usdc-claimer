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
    "4pagfQcU9uXYereDYuoWKcSTZNUWk6xf48ZCjrKoZvyoASS1JETRLuFBbwYAEYxq6vHF12fhDfgxofNvbrRaxQXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Assf3vszPtuaiqcB9yPYAcjSPWP6o1fpehHZi6ZU8rEt8SCqxNtKBGv1rV9YQTLnKWh1Rpevw7NMXTbqGMEyM8X",
  "key1": "6wJupQVNL1GaqUnHJgRZ5QnLsoHtT9swgaxSJbwWh5XwBwr3PWgojMs4Fo83bqsKr7h4PC79MWVdDevVHFumTZf",
  "key2": "2uLjZWkU5qJ5ikhSjiqgSPGyPaHZe8qm3u4s2BEfeN97sqqKx79PzCJmfG6d2TxQBFYqmPMrwD73aUA6hA7fE5WV",
  "key3": "4UVyc3FYcmDjzUPyUM4iPV4e53J9NYwH6smbCE82XzwSwRYqnebX33Fv6DBKVfGXLwemgFmPdHvTKykYzihQ2zYW",
  "key4": "2WfKPwtZ46jAU55qvXsnNFvu3zUsNuPnN52nsZr8sCLfWDPYYLrkrGLnvivgS53dbouAKpSqHAsEXF9cAVn6p1gR",
  "key5": "ghFyMyd3z4sv6uJqYsgWWeEF9NVjSUYQxZuhNezqzmCdB84ZGC1iHbTMzbQebp2u41CbVU5L9PaPSmLuhTEdZdY",
  "key6": "4pg24dw4DSNHdTmdacmCyQASMHQdaEsVtrcXif439kzkCPafXvfyg7KS73v3s2xc33zQhCNDKtCQrKmT6zgpZJj2",
  "key7": "5UQtYF6wZ6N7QaPtHmXV6HGZQt8pzA6eD4o97iN7jZ1J7ruDrhRwuvJPQAtVdZB3o48RcCK1Sq5EvDBS1YBP84ju",
  "key8": "4KZp4WPdqSoQts8bWwf2t32Bf5Doj9onuARQ1BNU6uoaXfWScgCteKiwiiiy4Ed4kYknRu6AgNngjX6azi1utJQs",
  "key9": "5kJHNnrs6Nk98v6gCptimiQoDgkXXC7NEzXMLs33dDgeFKVTYfLKJhViZXuN8fZKghPcn8MuM5Ye71mNYqdEdxTq",
  "key10": "zNsX5EQazCqRMmgcyacW7odRzGZ46XpioH6gDjjz8cw934GbKZ8QoYEELNkXEFAuPZr2UaqWpfXuLvHQcHzeeXm",
  "key11": "4WVW6TUHTjV6SgLXNQNwHEBAX5GoNfq6a5KnCLyhD5FV7pZbgBQXvLRwTTtHxvz4ku7BChm5ywbFYUZ8mtgc1Qqb",
  "key12": "5KQwrKZrNXygDHg43QgYujwwbJAX3yV9MiUgHDQWxEMY53ruAsixq7o5Ud1vcqkPqzsrCXm1KqCUXk85ASugxBWF",
  "key13": "dNecSMr8PD7NQLT69FMvHTBaXgJ2Kp2ATcMPYWPkgoK7LjUVukVGRTXquEh8G2kNn2KUAjcynJdFF1b2NZhXBjR",
  "key14": "2tBtxshYLaC6kDT9jhg8FoxpEDPQidPPbWMrTr15EV7YCxCRPenMfuhHBKTUgd1hSJ5GNiFYnFkJKugsPgYMiggx",
  "key15": "4PPBkanLJff5XVV5hymqCdWsYGuTZ3vZMK71AP18gbreAzgZ8gpDiNJTMws8e1kEHzix7eCYXaxEW6N1wM5hQAkN",
  "key16": "2C7N1x6YxZyp6WrRCKeftHT4zPXKwv39sjghrSNYqAzojktkQmuzLzSm41aECj1uRScRoq112eMo282zXZk8Bnb4",
  "key17": "64P1QoRjmc6pQZrk2Ap9RiQpiEzqtdCbH9R2a1fJ3C43qePV3v3gHw5eFkERnSNeLk1PuXn2Y6esLkeQcC9EexrM",
  "key18": "dQpraxjt6ooYBGpBiKGBhCHnw3eu3aqT7t9nWGetjJpdY4YjCdCPriufLtX6xQRqA1eKZDqQ8JiN7XvRfiu7kry",
  "key19": "JWGkYi6F9KN2Keb87KDB3EtbaZAnBvnq4yM9VgohXZ6LcFLDCAN7GfsZ5CKDdsLdJ8xxbX1HV1xUxgvLujR5uuX",
  "key20": "dX9FyLYLwreB5tR5VGF7YjJoFAosvjdv1BomUDTbEn1F7s3EgbCTceqrouN81fEFaPkUoL4u9EJEfG8Gs2FtHmB",
  "key21": "2UcRba64KUSqpuK2q7hmavUviGgBkihiuNasTu23Mi4EJNR9t47NSj1rjwntis1KEu2Bn2NzLRqgV3CTLWhnGH7h",
  "key22": "5UuWXVoKdBBMDdfWP99os9WSwCepm5WyJhA5VtTS7D8FrX3FMKZ8Sz8gU8SFKvHXAABuSDs45BQJCjZFsF8ZXNP8",
  "key23": "39EJ7Tzi3byP72pqU63mWrpHWgJw2mESXeMPk2Tp4oTdohHL28idgYyFcuaWnDWgaKMY8RKp5Y3Bg1YTgs3x8p7y",
  "key24": "5jUCF48hfrEHHQbd57W96czBT4ic4VD219uGoku7eEo7yhHW4b1QbhD8di4d5btUg2HB2butYfcXFk6cxY4tj6Aa",
  "key25": "5xvb5GCEf12X7h7k7xSxJCT48vQvYsdKp8zS6VJukKwsfUUV2AB634GMBUoYKhv1SKAhxomX8KGXrCV1GWNH6cb2",
  "key26": "5cwJgpwjiPRx1uT8N7rve4ktjmSiU3ptkfN9zLoVkCgk4UfjYn31GxgocCpd3C8NjCMuHev2cXHpN9mgW7GjarRx",
  "key27": "5NRZPLxwsTgNah4XymXwp4wxY9mdYaujGoKk3wnzbN3ygD4NemVV5uWUV8jgAohQa1kp5UeXCzvkSJ14D7Eg3zzd",
  "key28": "5KiPiA3QtQpT1Li8M3zAPcV964Lw5Neuu6t2gRq5gGAYZxSgNEdDPDAu716HdQh4yHhe4dRHzrcH9G2jMYKVHvAk",
  "key29": "4ckgVzoq5yGiyJqYTqUV77rMaMyHnvU5EnFsx6wRMe5Y2uokrzHpCoLmfYBEran4zP4AT1n1KW6sv8fupsuwAsTF",
  "key30": "672WNMLxi81yhh3Ag3zDsLKWEmCYUqRdHxkP7upJ74KThd2QsfsCoazgMw5LuV1KSwc4wWoUwS9Pj8mkoQF9PUx5",
  "key31": "4V7eUoWE4uat4rEGc7XY1uKWhm3beWaDA6LKouCV5BmuGnRkk1mUkpCqqQwwTqJc1KZDQ2XScA1umcqWWVe6wPUk",
  "key32": "4B7n8aoDnznSZa6xSU4yue5QwfJLwZD6hTTgm3BYLtDAMy3Qpz6J7ECpv8jyxzHq2hWJFEEYMcsNZChs7jfPmVXf",
  "key33": "4nWg4wLynyYfn8ZcygDukBcLYaLMcc1CM5qvprdrDBCj7U3o2QJAfsAWNbpbjPzFZ7UuZsNkPKP5krPMBYVwx2LC",
  "key34": "yhJAF2QfMSWEqMXEuzEviVfbwTGfUCb81Twm3ZXvQVnNFWW3veVvApG7eh7upvD3irrPwZudaG2Pt4C7CqiwKav",
  "key35": "jrMKcCubXi7AoZTozR8EuSHquizQZ1z5RdReyyGciGL2rFQAFPYCNmuRxLW9YvUNACCK9LLnXaabbk3ca98qy9N"
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
