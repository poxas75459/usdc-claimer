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
    "ASWLpFon2kt6wMp3JFhPxESqP1QJaPyxhDFpoTPL9xmohLwoUQU3N81QT6JrzM8JGgqW3bNXq5uWLf5cNWXN1dG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a3hdvu9Mot1rfjmS6hgRK9grjJHHvUob4T1SDfXkYip4brMP2j2enHp5kD7h5vJQzcBgPNaW8aFknXD8DC4qBrP",
  "key1": "4ZxnKwxesfGcvxbky6tmnS75h5zkr53reHW4zHvi2Na6tCocUwZMcMv9Pkbj26DiqD9idEj9VYPJGBCETPhsyrua",
  "key2": "eYDgze43R2bqnYR1yM9NNL1BNwCthc1j7CHruDSQ5rKfRUzb29UApAgSniB6L5huxFQriZUi39qHu8taBbXkJxA",
  "key3": "4gtXiTbpqcCprD58YnivwmjCh74xAZxdV8FsFg1VrJYNr6pQXACf1Gk8s2XSJG442ahnu4D3S1n91NMUzNERWZbT",
  "key4": "2sFfFkSsKCUUTbVJPAwRE1XwJHVcGSy9ZC4icd4ypMxNvBNkNuzWMBuRGzxjrJQ5hNAg5cWMX9P8c84f17sB9BgC",
  "key5": "67FrYgeVAwamkx4hSqPQ9SkaTx1BbMFKcsDPqJcknFqzJDuVUuUnWPKT8LTax2YDKziij9ev39bYwze7RScBLSyv",
  "key6": "4wV7mNuQzPyTybGwqRsdLWmQf6wuVP6ypsJ2WUdBVpeP8i9d2cgFBwcRvq9sYwbdpSP6NdPoP9MTe2MwFqQPDWzi",
  "key7": "3Gy5WNZ4z6Zh2GBwLpShv2py5cWuGjk5u25R55eX692wjEKaLoiTViTzSegtcGoyiAsXDsSfRLyj2Jf8qnsooLoJ",
  "key8": "4oFRg27DsmpvZnX1hHrSWTaVyxXq2mmfZzGnXp9c7cRjTZTLnR4Dc4jhf5cwpAbPP3jk16NSWeHhc1ra4cVuSjFq",
  "key9": "48C66oPnWCkKuSCciL4q4F2niT8B86G2jDGkY21hxa73EWP5jgXDUVq1vCB33f4EpCSPaU7KPfut599TEmyujah5",
  "key10": "5VTFPu2nT41ffezrv8dvSWPvVWGqLenihTiwJNrcHxVdxopRmvUaYyFzd2RwoRrY4AS7VcWk94rMcEtsLZJR9uqB",
  "key11": "2PdEsUVR8W78tkQjJzaCeN8wV54tUduivtwKdRvFiEh6JmAp4quTgEVPEG4qQ1i4FgetmVZrVUK1qoXz1SZC9S19",
  "key12": "3aA23k63prJijCr7pe6vmZcxi4FXbkY7VznVfDkzX9qKfEGXeKW9EmwaUiacUhHe4MJZFnAyxXsF7g87ParpLVQM",
  "key13": "pqBf3S8vB47BfY6R5E6mf2m57VFyPeA8Z1q3rmDHQrTsJcmvkjy93gb1V9csGTYbfqXinbaecBzAco7oE6wcCgq",
  "key14": "5sFkD91gVuf7HUy7gRbyPA69jzToyV4ztWu4LW32DR5jMfyDXHTjEb9rJwR9musR3kqG11pHXQewZVvAH7ABzGFF",
  "key15": "3QjpBkx9c333mfF3vHfHNwBCKgJ6YKyyxrZ1tawgwvhcBrN1KvRx7bevH1KMuSM4nTPZ9U38xMSzNdjG8PayF4He",
  "key16": "3W2eZJZCyU7SJVLvdYNMN1hcrw2E1pw5E14rPn3ShHv6TmMCKQAag5uWMjkH6xLqNaXAGJgApSR3ChXESARRN8Py",
  "key17": "4bY8xqgMze4RYeCgZX4xBpzWURo3TvHszW2qHh1pg5zrVmHkfSCCvZfsqjGqwRt8ofj8grCtP8o7J3PWU4TzeuRu",
  "key18": "3n5DSZCnHMDzfr7JybV2XgbfEcP5VockjXhabkLMBNSJnksiE1D4946JvrAu3kmaPwENTGnwXyZ4mb31nuSKsaoM",
  "key19": "2UxP3TQnx3JAuujeE3dYAfYAjHPprNyK1pW8BLdJD4zGgY5bVgoU7YATHvdaoKKbJFnbhZMt5yFURfqcb442fFsc",
  "key20": "4Y9kQtsDfUxfwhVX6JDLpaV1XFtcVbtUrkNKBqE5W7rSjHH2BQWdousSpRgZvWqgAhT9euud1qtwBqr7UA9XB4WM",
  "key21": "4fWeDcQ8qK6RftJwdHFdhutYvamJXRG8WKVkJZrW2eqyvMKcpypos7NDktDjF5y1KG9jWUM3vG4AADP5i3ueBx9Q",
  "key22": "4A8jpwLicLzKKqLEKrmVbWmimeFt12HUZwLzcVs6WTHUrNb4WKcYmHxYjnv4dLzb4gXyu4E8DEmDwKTVv4pho886",
  "key23": "uzwdN3RcTaHBaDMtm2P9EZBgPcdbB5R45EVu4xTze8DVDYghukMA1bwBmreVjtnYXTZPusiSHERDTawiDvRtf7X",
  "key24": "4KaVfoCWRJ8YcN3uhF3doZ3TuQ5pHM3Qz4K3WhGAhd6rSCsQDRKQMJ8JCcNBzr3nKtjcrkFeDoZ4ChaCe9gZBHnC",
  "key25": "3mnB4WyUdPeUPkdBaHLom17MuX7MCPbs1i1b1P1r6fhC5mVJQt6HFzsmYwsVRZ5zP5ZhC2vm7SH5euuPi5piPkwa",
  "key26": "62jpSkUVopeCYSiveZYgTrDwZCsEcCzw4CvkRRjVeuAK4Y7bHsJ4WPgrHzZ8eGEvix3pzLAriG5bJGZPAEE9YJdR",
  "key27": "2FP9t53bvSodKXGMopJ8Ug2zQHT2mGfnfx1TvKJ74eriyyYbdmb1DK5XhMZupchJrSJ951R8vodewF4LAMM3XYrr",
  "key28": "3pD4wdfARWUbKNMduy65EnMq6AW4gz8uT48VPVr6NN1FzzhGq9ykze3nHazC2uja59iu2CSaLv2L4ZHfVo1aDZLC",
  "key29": "5xbFjyssSCAyAQ3QDSpLJch2d8ZNH892EAwUrPHaCJNEGcWsQ4gPr1TLe4WE1EqcN1pStoT9w96MqTfgpDvDZWaW",
  "key30": "668fqRVvzSJ4aX6Ad2bURxxksjjkCP7gZ9ufW2HC7hr7iSmHbafh7QSFZfiUr7Evsc8PCxCFJ6nwbSDJu7pPAeGB",
  "key31": "2L5HpFiC1HJ32DiBBdHiNBYjjTzMT12LuChM4UXbHyBb4EuXjkxropANZy3FTsCeMyB4q8rhviqt3NBdJVUnBo3W",
  "key32": "4jTgf5PMqiyAL6qFUezz67quwMyMccAu3wqERR2ZBCMSFMkLYANZs6KiG5xKJYPuoJFrdvYNjPmxfXqZgH3TP21U",
  "key33": "2RkfXWWY31YaPJfnTrH7KP45mgH6rH1yzGmaMJofAuH2sHzC6tifReSceEZwSvdPez8WiYZ7PzX9juacGif9Niah",
  "key34": "3FBSgZ6PQWTyT79xzUqMZYirzzy8e8m28vAqReZswFVb14ByVpjNeSCA6o6hboRcKxGJFBQqBprXaWTfAgXDVGRR",
  "key35": "4EPfjpJZCZS2rnAgxo7As41yUwd9e1Zd24TdeyPPXVy8Wr41SkucBeESpXSB3J4wNZFoGNcvaiDBgka44ERSMTfd",
  "key36": "5StmfyDmksV1VCaZLkPoLo8PqUiGvRQsdLNLatzH5r88GxxQcPuBgRvn3kdY21qrRKVBFhPed5HYcRX33FrtxySN",
  "key37": "4ozcs9M9igV4z3r4E9wwjLoDoLrkLAQDGJGguPG2XYU8B22YN7nQnU2Nf9ssDjirDPGBJJ3qvTZrM1WJrTnprqJ6",
  "key38": "sCvVXwvFSkvCxJgUWygfpaYH4ZXeUeacLr8CuFDUUo8SRBhxAFS1yNRswhwwTZg6DnrVccsrZicPm4Bg1R2kYvc",
  "key39": "4afoDhGYHCGTL3c2RyNZn3JA3Tn2jidCzRorPPeRRBYLXgZaXph7DtVPhkjr1369Qi1u3KWAFjbcT9T4Hm2F4sFi",
  "key40": "k8eh1vsARPx9Nk29Nkx97HQbE3Pf8wAgGTPhPvbb7bzjLoUFbNgiGvrWW3F5nbvd8eyMwmrv9X71XzvKEAupP49",
  "key41": "4KgvJvyQZZEAnwabNnfE5w1D1F5dGyqbZzXWak5LhwiqPzpBsc8d8rnXsuWm8T8fg2GmxMj246hHfimjJDfcNt4h",
  "key42": "9fCby9e4g3i58fBw1M6bvJAHNatVkFrqxY75qYyBnBXgLG27PqmnezkteKouHMFH9NVZ4cMaVueWtbXUHmNp4Bi"
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
