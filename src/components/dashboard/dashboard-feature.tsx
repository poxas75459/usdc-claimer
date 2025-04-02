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
    "48U4mY7F9mhMPffKPSZuvHKdwLNYrswKNSXD64ySv8mjGKhUGp9DV325ZjMtGdyTE8BRrQcJV2F1YBh8yMS9dpRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xvq3cLQpzt58jcb6k2u2tAx6BNFHNcqRpgCpziHWzBDDHWyyY6RGV1zUAMHtx9dtArKhJQSvWhqPRPWTesTnUrE",
  "key1": "27syPeCmLQ873oN3bt51oAUt6veDrHt3kgZuWKTd6vkigFDMFyFWEuDuZcmFJcWZwgMh6Y9npVcRmjiFwjYYHFqY",
  "key2": "2VmvhAzNrHySUJ4AMQgT3P7Q76NTvgvQebJxTbQskp7B4vKZLWvvK2ZFaDZ46b66MX7T2esunpTQuJcoNT9mKoWa",
  "key3": "2pjvN7NV35vFAzjXxGZvkowVadVqf2CHH1njddw8NwBLb6PHhcGtv9e2dDgrThHJoq7zVBfnBAPn818doVFvQ8o5",
  "key4": "678pLZxXUczqy28edZqTVNg7ph9JxKSnu26G1VymfFitAGhhjYaj6hpv9Uaeb82JyEHdpYry9ssK2D8uadz4PpQ4",
  "key5": "66yTzbkyCT8iSzw4jiWATqEvxJQDojmFumWX6eEbzegfYxFqfBv5gFUmWX5Lc3ZGfps7A7Dy4BMWKcCkadi5zous",
  "key6": "KALXoWHfPEViQLbjxwWbR1spmoW5UadWRSt8DmAqiwMMuCzyyhB6JjDWacQkJfkaccN2vxgAycSfaD3mz5y65yL",
  "key7": "2urZnsU46QZDtCp1yKtFRuDSzszeWrzd52WqczESFr1HhGnmghXq3kHTL5vaAAhSCTRX3ULqd2SWQKyUVujf4Bfx",
  "key8": "1C7nEbFnMUgNDezUjc5kKRAGcFCkcipWvgopJNZtPSyQyqMB7VJPHteF7FiP6bf4eBcV4J99qjRLR5zVhdUqaK9",
  "key9": "5YdvtSRFHaoT12QzDkWYfRwZHc6ghcoKa2Ci7uY3GrYBGs1fm6A8hmGNaTXX8u8XPrsaQJWYUnE63ABpvsap29j2",
  "key10": "2rer1qXQ8swCDZWeYEesGgXiSStPEv9Ddf91R6461B83z3TyTBMoPJzBkV5Hgdcf1PNUpiyvQw1KqdTJNtwm2oZ5",
  "key11": "4YpfRgNKYjUT7pFBRJKa7hJ2xUYgyTCwabic2kowJbnTVZmwWTEoQiyUgs1TSMz9kDX64oMPVNXt7cH8jTeXHWN6",
  "key12": "2kQYsEbbmxU1j8j95i1DVAEEEpC1UCFXFSCgBcwPqm5Xw1ELCRm324aT975Ch55kv7nA2jmZqv9xg1ZFvW1K7kic",
  "key13": "D4qWY87PeyiHK3y3oqAcb7GnK3bioHyVPAJRkn66MGeHVNxrv5FY3h56ybRFHjNsudpzZpbdgr4vxvgkCkZmA1x",
  "key14": "5N2rcCdeLSxPq3scx8wSdTKg4vWtD4grrTcpQh75wn9nfWzU1EMjqXDG7N8DKQ1cThaT5HwjZywAs4h5pBYgqRzh",
  "key15": "4Za4zSed8mxwhxB1HfKXYyoH4CbVWk4NnNnUfjaRCJMJK9DdQA63GUN6XubfVgbWfV7HEshmNsPKjUXvGXLZttDF",
  "key16": "2XzToyT5BAyNQ8ot8Vg2LqPWYH2eDBfNJ5EsHR2nrmxmwDpwp6ki8P7ACAWmooZbNKfHVXaAKZXYym3DLyNeh6k8",
  "key17": "4Me2xXaVAJXfj6LBkpxpugrPh49DJGkzzo4sVSfJwhZ144Q6qZFbauj3jUbSgeYAqXWtz4qecMJH8DeF851LPd2D",
  "key18": "5zHxi6qeKEXtFBHxcjmqfRkPD4M2nVQrWTkMQtQcurU7qtnEKp5kjTSu13FPf2b8BrhFKLogzpcFHsYLGWP4pXm7",
  "key19": "5GrTTQuHEeyHiWKYDapHBiveUTFHJbRVVD54bNJgXr3GG9hMFbypd4JPbpM2b5pKNAPPdBGf9ZuomXsrqy82AEeP",
  "key20": "26jyUANxn74qtG46zzkeLiwxRxtEBoPbzL6zuHRUD1jBx1vZdjKNX7BBhK8TCLQDNFFFCZaYBCXniVQ5zD8XCZu5",
  "key21": "2iMT3oFeoWZwAn7LjRQQ2TWvvCbTLwYYWJZ8v2p1XYMbKhgpUonC7Neg3C99j5TdsXFJry1QCuBuzwChAe8SeYB",
  "key22": "5zSZZM3QYYsLPquxGcxVXDXyP9B8kcds7jua4KzZX7T6UbTH3avW8FVDx9EauizZ2yE95o2QSxy7D6nacPPry1g1",
  "key23": "2pKAshzdDS2x9vZVn5Fn4ebPD2bQ6YQ8tteuE7BgE66VgrGqxdwbuLCR4EjrDfjcPqMzPKLBHMbTjNn5JjpsJ8tv",
  "key24": "5BymPYafAys9g2PbFbQYH6SyAcw5e4SFcouJGMw73CZvZhr7D9FSTx9Ce3wpus5BpgoWxwBidUJabowg1Q8Qakdz",
  "key25": "5Q75uhTfF2zW6P83M5cSEj7W39kPuy36TbUHuVSgbZmxf3j94Diwwd2LuzR5TcaxmdGg72sVjUUZZ7ZaCYXrGAFv",
  "key26": "2t1xZa86uddw3nD9DaJoLYmfeJP9h28BccpbxR7UUAVpq2ndLJKkFSKjdNE8YCn388yCA6gYUsdU6VC6DRMfPsLy",
  "key27": "5aV4Q1bN6UJQFrSzNeZ32Q5euFFAzuaxhokLopwJKvLcJfzFYxzH7dqVdgFZvHZ9NzPfAAEoatp8VyWxoJNhMXvW",
  "key28": "5jqsjbGbC6ops9GZZpUCKwA8toGwYhbTCSN4NcjhwYsH3y9H3nDDNvyvfMK3K8pqThodEHYp2VDV7Mc4cz7WiTi6",
  "key29": "59698uh3iYJB1MphDBAVP8kSGFWus9KdzDK9BC3Dj4mrEkf5Vv4Z14WdD4Kfix1aSvBYWuAXK5nW8VcrmsEv1BQw",
  "key30": "5bD4BWeuhHkrD4bDq9NuC8m1NZWhhw1bdPEgNzgsGktrfQsLcNxiVDueiEkV7EyS1A4ge4rM486rcoxcHYbgGVzY",
  "key31": "qL6hPjNsxeKE3PDyhqpzGfzsMasvbKptCEKf5e51KBBt7q5hegqa5SMqDQAKJTQDnoEoa5L2h3scqBuPcUPzsfx",
  "key32": "3TTkudbNhXJuQWVJWbwTyiqr1TV2QBebHn3kRm2Jdh9BiBvFhvw6yntTSoTHcXu34CRuvJcpMqSGGzNbSG4gUnhe",
  "key33": "2yrTYmfhx6bsbxteCSYubBTc9E4TNVgWcmpLyK6X2jqrEtDjnRnmb2hx9NkCDhrEocdcgcZmzpkQ4osFT1Y8e5za",
  "key34": "5GBgHH7QvAh1u9kxQ1kQwrerNDUuexQ74jhNg1RHzF9nrZxzfDo8tGRS9D7MaJFWxAM2nThcZGbw5GaF74jKnMq6",
  "key35": "4hVU1FDwJ4CJMa4BS3L1ZyUCLBfH1T5yD7EWzA9snzv1vCAZqti8CUNXMSwXwzMavWQ2JE8W9Gxc27MTjCCSYgaM",
  "key36": "4j4nEjAEno1ZQWvQ91kuVdU6aHNMfA7N8mYNSqyi5XCBfwpVseYg1E4vDfA1AZ6wWwcfsE7XGczXLBFh9nmgfGju",
  "key37": "4tD2wUApjqmfKG2CMrirp1yABNT2fUnufisJehXS18MGgn4JoX9DUKfnV4Hwcdb3Cp7UcUALeJCAFiFqHQZdviJ9",
  "key38": "4gVxytThDxrZim7gap5iHB4nd6iEK9vVNgHncTX5Jwch6xeMCBhJT57NnHHchu2urygfE6CHmAkNZw4Sis3iwr26",
  "key39": "JgkfmG21iU3hbosx6xafGf44nYs24tMxARguHPboarxBfqsvXwCH5n5wsozqDGNdGxWL6u4swWAUmrfxzXoiqao",
  "key40": "nWzJseJofye1ogE5uSeGFdrY8SkooSmCsYa5nMksE7aEQsWmDxcMHxqSMrtqn4CFpfA6diGxSzRM9nZ4v3oh8RQ",
  "key41": "4RjudS9n4oCocWXAbrHq3Nr74hugRpR9peFYkF5AwuphVDTfGXNdgRihth6J4zCyPPtd1dcP5ox2Y4S6pGGfksHo",
  "key42": "kNk1kbmYbVYqFyaozokRPUc222Qj6tC5rkiYvBSk8cRFsFgDEq9YeZLiviGZpTXSZq8hdbK7KtStudkC2h4Tcnu",
  "key43": "2BfKuJB8pApgCMHfT6uba9gqS4nrsfnyZFAsF4bPogNW9mKzuGA7Wzr3CcJPSS3wuMEDjw4npoqznbtZSf4m48z4",
  "key44": "5EGEoNm6yZZXESCaFUdWFqmhXo6xm9qhnxdipxyuY8XtRbzjx9981o1UVvGXwDhQQHt9hMLYztR9A5tP7DCacjo7"
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
