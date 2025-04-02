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
    "4SfDChxFCdPCAhGzLvxpwfQ7cip3tunNFUPfqRu7pPvgPMAh7dwiqo2Bw9rezQcpWXWSF1TGutGJ9A93bLY2hiyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vdi8MjzDpwsuFQh2pPo4kgAL4SZW8sWkfJr1muUUmcueLXvnJXrxZdzcF8kYHJ6cjVUAxevTTujuSvzpXHEx3BV",
  "key1": "5r5vNaRzoDdiJZTHMNFeKKubKUuytsdDb4y4S18CowQLyXw52SaqShmP2PrTMdX3S7G7P5eotE5FgtcQ2wTs1Wci",
  "key2": "27Vt4kC9F5APmnhK7ix8AzWrnk8TGjLdM2ALJZ4YfdwfUBuGAG2iZ6yYMjE8WS6eUKPTKg9YQBK88qPX5FiN4qkQ",
  "key3": "5PXUjBLXe7dyiiuuxAZQ3VSD8jokmiBuC4Ej7AVreepRnjHMxE3ez3mauyRUKPgsuPjqAdE5PWqSvPLoKafRknd4",
  "key4": "4ADaa2qmWax1Enm9SDogPPkANUTibM7p3HYCPByfDYc1C4NLZxLruRD7itFH2RTx6ZQsxQRS3xuUEaGcDQVeY9Vw",
  "key5": "jBUPnqgCBKReySCz7fhwiB7U92VoxxFQZr3dVVCBMzKy34Dm5imi9DyGaFBadKcA8UFvbLviSbQABQu2wD1v3fp",
  "key6": "64TwyAxYg1fKnVjvge7ouw1vEj7oFzQULnV48BJDQHsnexJxKr9Bte3ehZpodoaPLeyHAPQVeBcDYfqwt558CXMr",
  "key7": "2KsFTNT3bq1GDcNvH1Scxhx8HjVzp5zjEJh4Vp5vTZCmiW9DKDgfdPuJsqzpvi6kiCiQcHYGE3UviV7therG2LGh",
  "key8": "2yrDovubxPHn7yx4wNVxScmGxKdM29sGSs8MAtRmSyHDGtAkM94czegAoftHjsgkCNjvd3qxbYKKQC2CrEypnnTH",
  "key9": "3RaZYhZEB1NqdyWJC1qerbF84P7Dxxe1xjAXRioBumAetifWXwEXcuqwPgerzNQkRvnKuPAZCkGLoLnE5WxHW9Cx",
  "key10": "56dVfF6dk9snSTMeyCf1S6yN3UGEnYZRDNQb4M8uV5LRg2cmmpnrsvjsuMi3oaQfX4GdA5K6CWDYyTBo5J8zDxqE",
  "key11": "3UUox8DoengXhKqKBBzPpxkZfQhkkak9ncGcYn4bSWcWj4h1T5LRgq7yBEuSsyNrqkfJH9yKPybBKZY3wB2sqn4H",
  "key12": "L3kxjjznE3Yd4rAYQK4rRy9Z39cmHkm3Mbz2Ar3kdbeprX5RBrQLozfGw4iKyxa1NsBVgj6uFJ3cmL37C7xa8NM",
  "key13": "2AnDTg5WaVP1GYdHiCDELQCvYw7m5kZoHUMUuRW3r819UaBdypoL31xR75wMkbm96JUM9pZrmqbB47FsLqMwacYd",
  "key14": "9tQgbbYKFv6rVzmxJTKVCa4LxynSVePiA7enb9UruVb4jLTE2PZkDrKYJKuqwBPwvBN9AFja62NzZyxYycPHQuE",
  "key15": "53AkqvN34DPGyqLksykvk1BSQKdww5Lua5qXmEo5YFm7ze2iwjYXSzqaPHarYyBu3vkRbXm7GqnP58wieVztG1Y1",
  "key16": "4etdjdfLMyDXSxVmH1CMpg9fxyJB8JBYC97DUc8DLwnrTJrfYQhHUkxgLkehLTFDHVk7FKSK7tBPP34x14xfNiqS",
  "key17": "5RajCjqwnCPt3FW8cEJEqSJJCnboRz8SEVem2h7tBoh7aqLRVw9ghDXH1cmTAMfBeQF8cpjoZ9GbATpzbjHHXezw",
  "key18": "2PPdmtokcHLWNg4uUxFPAo3Rd2HFUMrPHRdVAYx72gauoVuFvSFTqteYyC9CpaRtAaimnBVx9WC5pLSWA4HMfHHW",
  "key19": "KY6yrDZ1rYC6uQfAhjEFGHFZfRqrHy7txRohw1Aaa1eXsGMg32tJ9wcRapUL9VtRDwphpXwqP5fWKMLL8LcwD3S",
  "key20": "F2udvoVRA1xhorSc2FAaxp6aLaLfoiWEDFnYYtcxUH5DATwmsnye1GcGjpbStTXDi2V1PXfN8sGmMU5Ca4HAGLZ",
  "key21": "3vw9WfJYFZVrhNcvsP1VZxRUmG65ZsUwbTnJGZ76xtWr2NNhK9MAQ8qUydJCgojMsZKTQtUCiXaotBv4JzR4M8d9",
  "key22": "2JME5As5dYgXs9js2ELNzb6jGa1XmwnLRCuXUB3PXCVGuSiM2QqP7XuNuAauFFpcdB2uvyjqf2KSmNfj8H2KDxjk",
  "key23": "5kt1qRf8TAsbXjj6uN8k32r1HvkKmLCaY4FGoeMVqU3wtFvuc3QLhAJUkBTXGoL9w2TzANHLK4tHfZATUnSvHtBS",
  "key24": "39PVTSsUtrTRdXUKdKF7rMHwtadti5hgUwBxCdWUFFhxB4WJVSewGr9udw5YFAK5cvvz2ChfKv8oZ2JQZJknhkJY",
  "key25": "3AppbEUz4YF8rs3peL1csbMohHtWxZe1nHcKByUNrrEGWWUwTf3bLVnkznh1vH59Kn61L7RT6KE24SfdzTXM8UFd",
  "key26": "4BJLix8AiAkNni9G5DDeBZcC74fk1W2vxAcM4EfFVbCDLyffHiB4biPT3Ff59dNnuY4PQsDUNQfQdFhpPEg9YjSK",
  "key27": "q9xjbNc2UVfGMLCEE3kbohKoNq5PGKxxivxUwzrEPCngwu4ZaMFgtKaxaYkE3dcU78RJqSLWEAyCUAvwxLKQySQ",
  "key28": "64dUCbBjPN35eAxsDjzUwAkWpJETPSkVDj5ubzkCCWz3m4fL2G8a7vpufwU2wWdf5iRAjccCGXy6zmC6zZMRGx5v",
  "key29": "5WMt8XnVEedizs7aB29KZoZtouLGmKaoFvuiHs2TcTaNofaNnDpNt2V9V6w5CyatrK96X5wn95YfbiUDXybD54VE",
  "key30": "4o9Tgow3seizVQ1V9wg18ySTRfnvZyHEKaZz5m8VG5ZtsLNC53zE77m6Mt6JREAyXV5cB1Xw3jfocwcg3hmzPD74",
  "key31": "29r2m7esAjfkykdrRNDUHYCHPqfVUMmpbJ7gnek9vnGqqaxxGGLvHrKMiHe7f8S8nnxhWTMgSG2Z6wt26dAeZSQn",
  "key32": "hYxc1uV7q7gZVvwNCUXP8bwfF7n2pY6NXQ5qNuGRZnGyRixSHSHEedCnfTYoLkqENqTyCCjqFo6tvHHcvcFkary",
  "key33": "5YSyAJNMZ9AQHav9VWSE15e8FjceGaWTgokQApLXUbk92ms8Aa5jkXsW1n724gtSjpRGYm87qhJKjRSeSLYiEVL7"
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
