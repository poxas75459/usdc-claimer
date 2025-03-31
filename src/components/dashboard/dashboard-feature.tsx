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
    "5dLUVVZBf2fW6tVrxFnaonY9Z6xyiUFquWgA4o6uqhxNpXEA1o9VoPyVN6TgdPJAYJJsoDzsCxmychmcJdXuhztp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JxsE2Pp7GHf8VhugHbQAzHmT8pM6vYY5o4KmZiW9osuF6ZfHu17s2rWhGpd6T1N8yjKK13u97kUc1gRhjmCdgZL",
  "key1": "4HPoFNiE6FwLS6s4XTSbr6gZ62WueCCUvfUL44M74PGqwuSr9VmVoMdymMzkmrdPVXwYoXSXxbcL3MaNXGRxpQAP",
  "key2": "2F1yUbuEnkR7kyjP38cLen6rGnHRtsJdbb9ncsHD59GLkbw9NAu5S6kVsvw7hyTMH35ADTA2YW4dvqedP8NFTFNd",
  "key3": "KvESahL8bu1wfiQUn4Mwt9nZgib4sAPormKGNPFnpJdHxcttJdDe1cP94WHnii6dK2AcE1kpB3nj2NAWB4jb599",
  "key4": "5YLdB6LTL48Yb2gXrKNhnxCDFNu26VNDKdLdqGiemoHACwi628AXdG4hkPEqJDYWRqqPNnL4fpNJeKzGdYugTZPe",
  "key5": "3fZzg8ym7ZarDZzw7VrgFMgpPKmHQ5TanhFa7NrYwoLJ4KRRZUZmLpv36vxKXKwfzhJtuzxK2fQHLfMYB5ZJMT1G",
  "key6": "478zWbYTvKvfYoqZiHiuxGB8AuoQP4NrGbtzFcbUaL3KVz6AzqwzgUh8tTVWWZ3dsbd58ftw4KWgVD5Pffm96kiu",
  "key7": "497HWE1zq4SW3wbqjdpqG4jGr6YGz97jGcnaFWioMyYo6WQxTnW2oCVYoA9DCHk1jkLg2SrYJtVPKp6zXGc5inur",
  "key8": "3TbNmUETdkQz6DmxmkvmnDp3jeadoBNvGYfuAzUSeUz69gT4utgSDqh41GB4Rkq5Rwz85a5syQFnewW34Ek4uFRV",
  "key9": "2R7L4AH1MBLG8GskmSPU9ShvFpgyHxQxSbrTP3VmirJ3h2hsmMdcaa63uZ5veoFHEw4wDuCcdHVEvEpmKtrZ8mmH",
  "key10": "5UdTDMvuExMMAiUpanKRKyjZnN8nsuBG7waYuN28AZ75YDZvCrWmVN5u26cjamstqU442ihiPLWqco9mwXkyv3j6",
  "key11": "4WaWZhdYsWM2XuPsQpDgkPhnAu3dQmLxysDKYQUGCRcpFMe6ExxufnYQz5XFxbTwDsK1D9ai85kNrfPguP1AHSHM",
  "key12": "7K33nuQt4nDmaYS6fh2EnicB9TkwwrwE1HfQHRDmnUyp3jZaE8ogi6tCV4d26WvhpAPZyTvjidAgjZ5EriArdWR",
  "key13": "2xtLVbyb81GD27wZYCFMHLPwshZotvcQaT4LFAPCABftHBWVRcP8uWSpZcnQ2Nio8KXwsLsB2GDapvwCHqH9DZKW",
  "key14": "2dtMLknAq7tpB7iAyQDfe6tEi5zThkoS7RfrsME5EDTbthF1NzA637bfZQkTzAx4NWSwPtrEMDhPTJugu7x7NidS",
  "key15": "4Cfz8xYbZw41BQvDa81BcWXGEVrockXaZ7tKurvDUFZSd1g2oQ1gJoMLAr7gMXbdNVZ5Co9MjvqoqrNQpRJSMyKv",
  "key16": "yMHdGWEjrsYnmMvTQpdtkyhV6TcFk2GuHqiebAxG6RGEAVgfqfTvZ6MDLPh19L59KGvJTkVq4Vmn2exy13m8TJk",
  "key17": "4LodCAWLeYKQ23jZmtwMJyk1rCE245Dz1pwdDwCcZ8x3TqbvkQwbyL1B8uxTSf2hqniZ9vbCH2mVbhr6TjMNdyLW",
  "key18": "EvqnAeyLN7L1jWxiWYbfvkrZcdXBQneskdJ4hJtp6fFVX2iJ8WUrVBqWgajs6Fpas4vair4f6cYk7U8tSZm2B4i",
  "key19": "5x1DgLq8wWkVvR6zq3VPUG9MPTZLb9ta5FLdemD3Mg9AAmafkqMHXfRpkD5FnGsPKkqm6pgYJLAn7YPaXaxtx6TN",
  "key20": "24D3hWSEWfdTtHspZsKefTfBhmXDH5sEpqwkFY5c1bga5KpJoH849iYZertNw2iHnweLY573szi5JRhVNma9tV1X",
  "key21": "5FQVoyGvCZaXWRacA9MFhHH2XKE7H5J5zj5Bi9jKBwMA4ytGr6x4SbaKFbK9rZA1Eb72QMBWwAtVnshdEpa5dDT4",
  "key22": "q9HEjbAyat34rCUrioAC2nnksPgdFo2uPCANoaw45NceToQFXPBXrTvaHDnyg5C781RkmKKbZgFfnhi1Zv5GHev",
  "key23": "3irxnrjRzyZNPZ3nM2DwMj8pjusz2BRDLLY3AkPi3F8gnbBrv6j6u9MkyRpNgKw1Byw2KQLKSFDYAdEJD5XDGS1V",
  "key24": "Ab6WEftuYKHkVFazBTk6bcihZeTV6PD1rLT5y29mYsQ9a1hb3npRZX7pZZ1QSTvPLoZe2VvFPFGiaHzKMcUgZ9w",
  "key25": "2fMRrtUDC3p9wuVGpc9n7wf8SE4y4arQhzLzo5CPETyntTiFMWUcbKKT8KT6MmJdKumKrvxFX7whNzBbNxrAnYph",
  "key26": "3JEYdUorSYSfyahMhCtqixfgd9uiMDmh3JGvE7Sn2XU31itYzD51P2uVULJtwCPiXBvnxWimnAW1JkBv95oJ1KpT"
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
