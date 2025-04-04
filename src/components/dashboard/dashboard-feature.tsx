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
    "4ZkFrejUCDjJVTB4qRK7cuDcKubh1HHg5cU6YaoFVuAQ1YanZsGBTfKEX6sD5RNGrqZ82qMzDqon6UybYg39LPzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DT6cvv474MA8hrpafcAygyrK8V45qzpyHeXyaJUYjXc8PVbfPAuBGf7aW4J2qniFi9Pz5fA5LdTRTt4VNZFx5Kw",
  "key1": "5kLvXUVgiKSJ8MbWyRhKfNedPE6hQSpqidaRiE5ca84YwTK5LNZUdSEbTGUe4j4TrMpWxtJn3M6Nj8cngPSHshnn",
  "key2": "jwpwQbWmiTH2ppNc7EuztZkH43BooHe2bnxaxCqNP7G2N9hEKrTFjphuTiDKxV8NB8RXnWhSa79Jb7mpqueGAoA",
  "key3": "5dKeVgno7T89BkRdo5g332EMdXvPmEqx3h7gcTBwSmVWtXWojD65hZ3DSHh8bEoZKwh8qjCwJ2usy3SLwedz8U4B",
  "key4": "y69NksVsa6882GqQuUo78nQDQFKwXVAJFMb37FzCSBvCbwMvsjqUQW2Y2ZQdvyPYevLUytqhPE1nL7C3P11WAp5",
  "key5": "fy6pittbHZAX4hNt8j57XmX5qa3EY5WbzkeEFLCLkWjT3E39519AFXp2J4uQ26jYhjFR8GHE59ne6C1Q5aXKC7f",
  "key6": "2ahNw6f2SWwUdtBPCA264miDQdhexsU9d31463cWe6BqgFRe4Rb6ajxbH3RgPj1cXxi3WPadvzeHt9cXahki9Jyd",
  "key7": "Zawyg2hVFofMmJJwaYS4MtgccvyExTvRbK61hgwtXkUZBLxy6R2MwubYzbsR3V1wwwny5JQBfuH9RVBpqqEskz2",
  "key8": "2TEjazUyxQ3fBZwahGvqtWg9JdWUCTusiYcgmVbsYsgKdACwcedxhQjAyyCDtydCBWkZg5r5WwEQhEcFHcJNH2vx",
  "key9": "4jd9sQFTrGwmtdHKfScBHU6qpW2c9nND5LheUtegz1c6oksRyLeX1akBz4exe8Ey6TjXAj1zyeMJxxvTQ7P5o4Jf",
  "key10": "AJEs5rBzkhtBfYZAC9sjYrFGxTeD62L2Nc8QP1yKeEEzKcNhtunJ5Go2j3gBuVCd65UNNAsy6YYdu5v5BAPyLAu",
  "key11": "4s5RKEvsxpdN1ghQ1gyZ6ttf35ckERqwqmYRJbP9PQx2fntDad5v12i5x9PWVNCa3k938azJpTWfiA6EY8MBNXw7",
  "key12": "TvkjNhU2PxQyhER8t3adJCUC3zAq8zy8r1tgQ7ntQgxBeNhwJ8j9aDPgEWYRDL2Zp3EtqLqAyfFUgUXXv65kY9j",
  "key13": "pkuTLKDpQbwfqLpQURysSbEgndnUzVjcR2BazTxe3Qjm89BCdUjuDrrt77vB59zahEBRgDrwfc3BJhYYkT24D7k",
  "key14": "4PSFiw9B92rTRtFRftk8upvvDtmouN1dGUp9pWuFJqWmkKuC3LKr6pjuQnYqX1aaWNyehVAMfpNKUQ8XqSaDBfpM",
  "key15": "4tyJPY55kKqTC8utc2GWcxH3c1BfxtCQ3LnyarSxCtkCtfjQcTixXt4uuRAevhcwS5eeCos3KQ6LDcTHjur6PdZk",
  "key16": "3YUYfX5wX3Sa1GJv9HUo11Kfnx1J4Uk2zcDfFwqkpBJ5WhMwdBHJB6iFvUXTiuCA7DxwLxBfkFDA1ByTLHk3H2H2",
  "key17": "5gfZ9EnR2xVDNrYjJUWFu4vhP7GJacdv1E6vDGWMVhMFU5bpEQNc3jLDWZHxFDxoFkEfhYZ1gFhSaLaihaLztE4k",
  "key18": "5nDrUeEMTTyQAnEFRNAGnegQYH85ThLMKzMoZ875ayF6wzfS9uWtrecxQmQBGgz59qYhZqqo1PFNvC5kZnSyJqKY",
  "key19": "2pLqiCUX7V61MqJckvFxAbyS8uybN45xkFb5jduPKTtxXHGg4NQhpUhutRnBfExZL9EPaE2rUvGLnzmK9Eq89mZH",
  "key20": "4wcvqWjiumn9BxRxBheCh52NEmyQfE5HpUppKobKrG5eQAs6HXJ43PMwMDUWn8ngFQx36d6LHj3jhe9pawJDSfXR",
  "key21": "5ZQvXShQSbtmnHjuT4vUbycDx3gAZtSf18EFChoz21TQoTXLySp6eWZz8XUbmZ8xRZmv7GtmfaHJx1duooAGYxfg",
  "key22": "3BKHW7KssefPasfKHBLH7en5iNPpgjBoTx2R7J5XNsjRsHMZCWa6hxSXA6qTScxbRhgZ6thuvJyJ3wv4z4nwvg3X",
  "key23": "5WRacxWmRPu8bZvRndnFWLXpdT4oK5YaiEEt4vuLgnDyM7DbLDrzrBurSLkxBXPbXotG6M5CHi8hfFTwZp29ihk",
  "key24": "4Do5H34tD778rNf2EX7UuDEdb9gbR5ek5JKZ4H9mifE9o2eEChF75YPFDRVmGVd7rdMvQ1r96nBV5f21neWjBbbv",
  "key25": "4JzMa4w4U3cWjizmtXw9Di4KjE6T3ywTiYR9ESrE1QnRXgKkjEMQ917wBiT1UDTmyGYKm6zZYL7n3mQPKQmsjkVJ",
  "key26": "5wGGQKVU8R4VdFfuk836hfpBb7qM2ifi6bTpuRhTekhtpSwHKVazVBCYgaf6q3zJep5HBBWbmofBtu8p2APB7m8w",
  "key27": "5RSkf4CJb6bAL54G4uwu2zRWAnVPXULsPnLjpLeo2HhRtLuoaFsM2Cg1fW4MxfQW6baVg47xF1bS9PDYLv7Z1wUD",
  "key28": "3mjX7VteBP6xgVFENs4akABzJBNVYvoRCgVtUUuy7i1Af3GQeH4vzaKEz9TVT1Qn52aH9rTFj4RzHaW5HGTibjh1",
  "key29": "kRbW4UsMA2R3XFZuB9y4rj8FBXWjUKvEYuQk7pYdVeiJciQuCMzQVVAxns6xV3q5Rfu36evk8wvsAHDkK8go4AT",
  "key30": "2t3KBP5ZqWzK1RmihJ3bNLe5MLgF5oz39McxV3PdJd2vV5Cqst3nJwYFesoQ7HeK7DyLNdpHT2RDdvXgjcceGY6t",
  "key31": "5YxPott14iEiV4KzxdYZtk3MG6mgYft7C9YPREd3hB5H2JjCU3UMGmNozYu6F9GAWSMTApyZb22XK87VSgP6vLTa",
  "key32": "4VeZwsMZtaEurFitZZSVQmATqczDXUdLXdkqqS5M4aGhdyuTMA2srefyezJA6UeRVxqTSTCWKJtaEmFm1dEDS2U6",
  "key33": "2nxqrbUp2wZNh2koYx2iPcVy2aYQkKhUmWEzujiQGeZvKG4URJgJ4aeEcSXCoVGtBKfi7Q65XkwLqxUWT2Qa7pF3",
  "key34": "4G7aTksXXTW6gXWkne6iPT1UfFqo356xhAzG8AxbVE5pE7BJCLPGZ3Mdy1bbxWeRNoHjnyX7dTMsKanFsND2E7SC",
  "key35": "4Hy1sphYs4VAshiUHCDKXfRkRZrAQaYYJhP6VJcABHyd7DzkbMVyfFFXwDC1uciYPmzFnVVFtKRNZb8W4dJeJDZe",
  "key36": "2RyhLzBdQMS7jAuZLMffrQhZwk33bKRKhw86WsgnehtvREoSvGkyWztDYJaK3nVxdZQCjKcuKWG24R7V1GrnArU3",
  "key37": "UX5ZGu9h8r5YC3TQGKE1GQQ93LX5RrDUqn34KXu4bBADKxpjgj81ivdcVat9RG58yLcVYtmPLenyD27LPamkaYA",
  "key38": "4KxwTWxeMynFNPYP1gCmwbJ4S6fGV2fT188BsZCnqBz1EumCcpsh2ny8vyP96gbGQ7CWUknt13hTp7Y3v6UCyZes",
  "key39": "2eCtm1woPwsZqpFxQRi6cWkmUbqRGTpcj2i6g9HrPDSqiAPwYcwES8QZTYW9LUo8Tt8EU5bnhZyqykXnyq21GMpR",
  "key40": "3NdfDMhdvtbR289Jvo4jidk5MzD2dy1uaDKhyawCetnPR3EvDaF4dixb3F7hZmzukkpx5iF8zoyNC417QMZn4RTD",
  "key41": "4BmgpXK3cmzs6tDZ6YY9PRWam3G2D9BzGFstRYZAxdbcSuTBreEeoXmyfjYfwgnVivHrqAoCJj4WCUzGruuMqyES"
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
