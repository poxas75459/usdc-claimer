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
    "58mV1a6VqXXkxM69jfr7H4sYpkpwguKGow8zFruhdLY5Wr46QYjH2YsovMEE38uCa33n8uc5YQJ8sPZoduayAdzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kbxFb7EcWB43mbcxe44Z6TvWAVfjwXPqCMR4RVHohgpZXRSSLwnzKv3A934xzaM4dcUbDt6kKV2ur5NUYatS9Nv",
  "key1": "2DkDbV7yEJj7Jt1XnMAp6gRrBYkr4ui7oqd9F3T3XDH3pmWxWceBLy2Eh38vuHVsjjsxoXaH2EP5DPoEYdRcf84v",
  "key2": "2x1V8Ajj8X8YFderxvfJqR1DgQAvGxkfuVKvwFBEEfXHTq8becAnTqYiKBDibbKnUFgS3ziZPFNXCYXhoJpmS9yi",
  "key3": "5xEfGLJaUUt3dMQcKvuQfDEMsUot5634LJoTJdnM2jTefwZvp2PZkP58Co8U1a9ZFVhq1Lt3ffPqH4utU8UgbwZL",
  "key4": "5HEnXn6oxSw5LCWGYS8uViKAiQk9xnHhpa6HUCu5QWd9tCnTFU3S6inTaxWPKmRrL74X63U56a4zXjzCPut6qABu",
  "key5": "3hKg7hVqMXZw4fwWtcRKohUegy5kaiWgZcMX1wjyEyrj64Yojp3WGTnmCQrpFS2e7Vo79WFyg4LHHhT1wyNU7BS4",
  "key6": "3QaQPY3t8scoXThqi3vnazbLmSM1e98fPHcWke2SSYdjwoMdE93rje6Jt9tafAf7gdgBNyt1EK6t9qpwdA1eEv5",
  "key7": "2t2KneL7mRDPkb2Nh8BX7TM3SoLU1EDpRwZ2e3SGgmEHPjdsreafTJEUPL7ZjAYTKrtUAg6N8evRKH4Kb7t9dsG1",
  "key8": "51cMxMYMF9cBvpbeZBNe4ZSKXSbhYKbXpU3GNE4oPb2yvMc5i4cSogMd4yA6hunqZdsmdaSgxwN7nvzkRLDfN6Bc",
  "key9": "2U11HQ69Jkp54FYuBPD3b2iHcAVJvFgCD1La88hAL9NrHEodm6Q1ZaPKaphQm27RzssHwdo23kW3tC1SG2evSFzp",
  "key10": "5zyoHPyGfmqyAZWFjKcjJ5LThtHEgUsa8EMBsHCZRTk4zuZyavguy3HB11zQxzvHNqeY7QhCxtjcTnPJfWyMWvY9",
  "key11": "3dT41VtasB1R5owEAqropmWCCTLE9H7pYccf5ATY8R8pKutmx251EniJLWwewaVkxgerGLWxBby3jK9inLwHV7zZ",
  "key12": "65kvbPrk5YYsAdFKZFxqeGiPjZkNznH1rueWRqkKjRktc4LojzfbcB6oueQrtdN4YUTnqT1eDsw1nzQhos4DHvR7",
  "key13": "4z9oCWWi2dt98Mtfc3wVyutxUQsfUtSQd3kvufJW1H4Y2QaVfibXCQnUp1QmwS56EpgkXjGCDjtHHmU3XXXQdw6X",
  "key14": "3pnyxShQ37cTSaG7PdEFh81WedaMsXXn3KgyUY6rkJpVwoQfdAfexENEHMdsYEoP4vVUEpjzZqihzoVNxAhWAsxN",
  "key15": "5ebvJ9s1NZxGVorj1tnj5D9ky88L84tN1czNWBNUuHhBzbW2HHpFjVbjyTHMYYu6YebzgpGytef2qWt3netbvPbP",
  "key16": "5fmPGTMbEnW4s821bEB48UP5EozZ5LAdKQW77KvmNEerumtkZRXF7kWnqCA5uJzJj3AS3LFQ4vE4FqB6gkFrVWP6",
  "key17": "5oPCHQhRdLsFqfkYsuTxYLmuZz257SrWzYkFapgpx8TKwuMUDoxmiE4x6TpVpiddDNxtTZrfTmyyZ2Vqh8aeiinQ",
  "key18": "3E26cWpM3eEZiFzENyKfA9G3MqebmwZ3ZW34NkE6syjdpPoCRAExNMR4NtuRGHWvDFFsbDfHXHLaN69rS2zxPt3J",
  "key19": "289DSKL5h2d1EUbuxV5pHmrjccL9qGnsvJoWEdqZwvdu45Ygod8DCvYvLTxzbcs5kacn3t3DcNs12mueoqaixaD3",
  "key20": "2zyxjjrfnJ4hmmUxZYNMW6PSSczKy9oi2PFMwnGnRuFgUAMFVv2EJKXXQ1QGjMYFLunbCzbbBmdm22baDM1BAzsk",
  "key21": "5reuy4wLKNP4mbJ8BZenCTV32GMLqPV5X2brv1vcUKt5uNcdeJzgxU5fUwsmrJgLvPssEgT83h1N2WRzaRTLuQ66",
  "key22": "3aNt8MJcPNbEem2kPDP3iRwtDEYXrBAvKPvaXSXZAJp5gAWnoTLfN4mKwtvomBe6DFG9yPU4mpvYEWnPRGc7aXUZ",
  "key23": "5491KfQTMUNZbFsSc2jNXoZm8WDWtPHQNZ4XdYRheqr6n6aHc3Ui5Sz89vWkW7EBCXhw8oE1CKWLkEoFngC7LwmP",
  "key24": "5jDrESaQyaPMnCWXqCq9zG47Wp5zAisEf6VpewLusK7nCy8iXMcdhvYYtSA8YHyMXgFBAJSFHkeKFWL3woWJuuzA",
  "key25": "8K3qzqeKbhV2nkiVPpENohn62X8exBv48CgUzse3DH5wEHE4MX3MqXFJJnhZMPvyEJC2vwKL6D1iS73ymvji8Rc",
  "key26": "3PdULtbzM7jLercCSByGrebgvenDfDTZSro8CQDgLYocuG4gKt4sVAQjqw8GAD4Qk4m8ZAi6HZr9DvEFPFJK4Ezg",
  "key27": "5TacLV5UbPAL4by72PrN23Mqw5BAs5ZDGsGEKXDkGnEnahGVtUBTeive9tEwAf4sSG5y2ptMc1feMZhPMYaUZB2m",
  "key28": "5LUZufFFfNeZoKqgDivXHtySs4gQ88pgz8ZU8vr4hBpcJBfiC1saNLCQEyZwSRM8NXovuur14tgkEYqV2wxrUyt",
  "key29": "PozNtetWLo4ExRxN1JVAdH4Pt8NCVtAkct1USD9xxqrmTTtW6wDkiKa9DLg9WC68QHcxjwcvfVdJqAPUoWxLfb6",
  "key30": "4i2e71pMkbjoaKvQUkS4VWq5TrpYsnfhuAy7S7aEmUYwqzphP7hX5RAticjzVp2FojGwdoSXyke7unT1af7TU3SH",
  "key31": "zsuRWdQDWHY7CxsXpGQGErKJ64E2v9B3PmQd9LoLkXXuHYV1wzZCKg3jft1mhNjzSss7fPiQpLLPZxNgy7jZuMi",
  "key32": "4YYxHBhKYbP9HJtFj3KaHZQL8HNoMjuum4raFZR63gkcLE5Vf8KQyrGiPnHPK7SmPzdCeuEFZ8hoKkwbQAvZtjzE",
  "key33": "4UFQFL3JVb32WLT2rbw2rUDACN623HHn4YqU2gK4ARLytr5NTMqXNdVv58W6zHmi3mrwgiEvDwFMe4FUZAthW6hT",
  "key34": "3k8RxvDaQTDDVPr71PygV3okJcfbawcApeGYWfEEfbWLq4vvLgA4y6oLSjFJXAWiY7CyphcuGCbWAvm91DGVstg5",
  "key35": "5F2C1METKWodk6wE9WzYgusfJdmoQff1gHtcVrA5nivJb4x5uA5DSEAFBevikjzLa6HA6QBAqCcDrCLkaDDGBVGi",
  "key36": "5hqRFGarST1RuCKXqsfv71QbzmFSDKdHH1gSx7GLH8bmK4kM7oHZijwBHekMdpn4N7DeYjFVnRayvTLhh6sGix6c"
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
