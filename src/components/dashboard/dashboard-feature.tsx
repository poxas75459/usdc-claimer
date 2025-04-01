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
    "45ZDiAaSp8EAv1LSSyS9BfW8X6SDpi3Q21nNHVLfnDbVvDaXhfR2aejPd4nghKVeygSSwFPp3U5TLLTJxVRuc79U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NDAyuM2kN5N3chxQVMfEdP21YohqMQe4aiZ6SCSj4utcddkVYobFB9Mdvj7BSsCSTCkrBP3Ge96SWTh3yjRB5x4",
  "key1": "Yx6YffRL4Te9L2HXGgArnnoFirFnbnkbtkVHXvFTyYuXJfJWVoTkiUwdgHXxw5FPWMnnfHHuuxcPEYtiF9ZSeXC",
  "key2": "4MEYV7KRTcY75VXUeJ8PDJgJVMj9wjop57j7upqTuJFV4PYVP2XHq9JhUSLeEgNXX2oZrm3Ph5fDw7hV9KzveV3j",
  "key3": "k4i31jQ8FGyfRaGTsrkFRbJMjWg2GMEeEF6vSY7UKnNPPBgciyg4x83xJ5jdas3hcoA5B9kuGDZpENYAEKHjTo9",
  "key4": "2H613NSGkvtzQd84hufugyYRM2q9X5N62qg4fMBNwaCgrLZxEJWVAtbiQKt1tUVGmeXF8QWdtuCsrJ9xkHTwsEig",
  "key5": "wbhu5Ui46ZYQ4xR5mriGaYjeTnyE1NpwaM1FtmsXHEPRXRck5qME9anwfw7aCuSFzS2uFvzsrqDXs8g2PF8xH5F",
  "key6": "3aK9TFx9zorqdCV5LxRnjoDt71cbxrhoq1SKko6cxAPWCkoEQUT3Q1tCfP1yoUvWzPPGU815jBEMhMFR7A31AYF5",
  "key7": "4h68jcX9uT7yvjCNJgifstABZhiM3f4QxvSi9fnJZXVmfTHXeFE8C9AVDVhVyM6VDithfsMSuzfbUSAQ9EkKAa3p",
  "key8": "4TAqUVJrVvhZPvKEZqNfLBQZ6BWE4ER5wEetaddnGrWac1vAdAQ8R21JzWkz9Xv15JLMJVsG7v8ifTRwPgDysmcm",
  "key9": "3NX1DeJm2GuRRYqU879Fmw6gqZYaFr6afSHuaD5GaDcUyppKMxoYpQ61yH6EF8f8Enqyayiorv4YrA4KsbeoZK3a",
  "key10": "53tcgcqWa28RWM3xBGoYHYZHJtJvo2kwc7KUs7mgCHi6xH5hsjGUxVjYqYoXa5GprAgx39FRfovoExoWA47fnR1N",
  "key11": "3rKqsCWfwBPpA5Bu6ZtHqSWk3t4Kz8XY1YBCbfzsmeZpQPa9NB6WELuZkJsrMduFd1iYXJKiaSnUEiA7jXSPkeAh",
  "key12": "eYreeUTpkJnotd86Nf94JfizZZcAwwXMrMEXs7WTHa89tn4EjZxnXqmC5hKwubGxLU4jsB6zzV7pE6PmrUPycq6",
  "key13": "3RzS7Uvg7Z1Th42rTUVW7m4Mqdy6MVEd4gdKHnZqi1eAbPwLJkx1Z2jqYVZ57NU3aauQ58f3NJfJ8umE4aPN8KNx",
  "key14": "3HTDSyef1Qkze1pusz9YWqGL1k3A2mLirm2aGEvUmGNNJNTeUPzygyQ9whjT6qHJ37DdxaDxgerfjkAiTjznvSx5",
  "key15": "66q1xEMkryGUym29KYhjoYSnFobMGhqgohphgU4yUe9wSYM5jzC8Na6YtECcaGaLdFG6bjYkkmX4sAEb2RqCW7ow",
  "key16": "NQKNG9qmrGdJ8oNBpusLvy4XNgmMFAsMj6qgrHU3DrpM1zmqHBj98GUXrFStYDCbdSesRvsi711VbBCP8PMykfV",
  "key17": "EGVhiMKKsHXUMmi4speaUSgXDrC82cmom6JMegYNHqgbqM6eRgPr3XEQbM7MmSJdFMKMW3VBi6povwjUQjps512",
  "key18": "2Tgc6ra1nTH5tSkvxi4MdhFjhr3mpDXUdXrupddxt49WWKfutWtyXVkEf9847xz6T1JUfxZoYia1YJxqXJW3kmAb",
  "key19": "3bHimmvKg6NHqrD3ZVJkhmtBzLmcBZuxtzJRfJ5kT3eaUJEhrvstrsaFhTEccfNMeSWr2By3xiwb3eQEovRCZQH7",
  "key20": "2zTtxK8rB4PAUsCgrvJqnbXKkuc6S5iZgJXPYrWMSzDk6sXNX7GDHzJpuCCYgCdQwHkMq5MbtZ8HyjoeX5GEQHom",
  "key21": "7knQ4CPAoK6cyVhpQBqrP1P25U61xgxDMWYps4TJud3f5uR9vuRgKUzoGjLAXmzeTBEHr3C5Hy29JfvNPNRSr82",
  "key22": "fWVsPYpD4nSRGmWoJC2ha3Gc2u1gYCdUSaG6pFAWVxCy5kvXxRAiyupx1NvsWPMMHggyqWArcD4t2pN7uMkSnQf",
  "key23": "5ju9s6irPAVTr7N3nhHiN9D3SasLAVte9PNYgvEVFRuVSh4BZNYzEpeA5GynTNGoJYiiirX3VhGaJys1XfCAsWD2",
  "key24": "NUU3jV9Y43Wi7txsAnzX7pt7yhk5H11FhTcrMsTU4QizUpjGnhHaJbAhW9B1kRyKCPDGfHfGzE4UifPR2HNfTdT",
  "key25": "2Yx8hwboBgXJ6BJGCknhjZzGzgVZU1DUGsWyJptDNLfXLUTyDqrnW8nhbbVqAQeA65gbHXHuGtoBBee9aERaCXai",
  "key26": "265zQ8Gp1hmEXCcxB8BqDUgiQD7KG7JCCuuBKzpovWudjUCueWKAjFmGboTUZhKqrR6HmD62vN9QHApY8vYhgTGV",
  "key27": "47JyESA22Zeg6QCNgnSbBSBhjswTLBffiEhpb7bHMRNprtPrzZeomM4uLEiY5Pg16a6ea8pf12AggKsssF2YLoFc",
  "key28": "4f9FUAp8hvmJYKM7AWRrVc2D3orFiBqR9eWGVwaEtiksdfYMXKmwSE6MwL5YUehqcQapVg9UGVuXdpa5EBPuibvx",
  "key29": "5o6dR8gCJ4rxJumgZZqBCb8ssosGLk7EJnc5FXreqXHJdHV5GEsvVdTCWvp1jjDqYJvQsvDBFWNYTZ62rzFcrSXo",
  "key30": "3k9wR9KF23BbN6obkVkM4dgqXuGs5Q6nTJi1ZB8CB7C6asqj4oVTRgrh8p2yyv82Eodcc6CShavV1H79e3k15KeW",
  "key31": "4GD3rQG2jmBoTEkgdhDZRkmjksxFv58Cb1JSd4jaz5QJKZJa5fijWqVRHFcwLg8JGyqNY2fYj4XBTos1G2qF7Lmz",
  "key32": "2c1wYn3Pr2oNUux1kxqVJsbWFkwKNDvr6nkgrnaW8p61CWeX1YBqg4vtd7us1e4kUeWBn34W45UWXBGe6sufEC38",
  "key33": "V3cFqDkq7FsZBVUec5cTYWZy4JX1T6HDXhsmcUy3M6WoaF5kckY5Xpe5NwmRRhXWz8FhJge16a1Fo74xPTnhVYv",
  "key34": "58qnrBZteJpNKkhjFuJbEmm85ytptcqQv3HCnqeSVmXBq2jG2HqovFzh58QVkYZZpBJeyMsxpeG6Rby8LTponuNt",
  "key35": "36dzzaEm3YC4F7dhvfrUusQwQy5puhNvTANi1zBWXWMmzKYSrweFTze2Rt8f6ha9u3ShA6M9h3X1WofXcWd8w84t"
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
