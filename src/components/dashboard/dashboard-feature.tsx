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
    "54XYjJd7ntj6rSokxf8nesYXUoWCn5CTTTXyFML4xKY3nkeYwzYYXTLmL7X6Dtypm6bb9rMvA2GC5tpWosWkvdZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XNqBDpB7mXWWN2v65LxcKbSec1dJDyawsFXKeknKa3tmTCWBrZ8nDeQpkbVhv7MFsRxpmSNUtDm9yZ5Rt9T8zy9",
  "key1": "4C53SwGTvm3zqsbFkQKwyTQpn7xrYZppC2JDnZinDBvC5uPDhvyVsYJePfAErCMPdkLR3H253ntYeDpAH8in5fQV",
  "key2": "3Za1M8kd8HL1A37BxhBh8TM61tYR7764uzpMnLi9XZ5hYXoGGJL53vyixMSBLdMZi3qFqn3EBEvbc4pA8tuPam8X",
  "key3": "3Zgj2yMfDNZitMHPS1cp1ZubihyqYeHrfzHX2TADLS2iXVMaiP3EjEiN12SrS3UPtbi3amfWLtCgghuUkRk1Thz7",
  "key4": "3UTVBdbdUBMUL4iXxP53RSuf74sH9j3NRqxk2gTkwf6BfPte5jucVJ5VWqHtUqouGW8KFrhZvhtTabH2RP7jxmn",
  "key5": "5gqApNS2MgyUGw2WQke8QN4qPBmYa2JHDge2z3wrSeYgwZAxaYXYktr1NqVo2crYe6kmj683M2de98z3rFhn7vKg",
  "key6": "5iosPXWwo9uqyeKddsp1F88ry8FUSCLZKvBexvBQixK8sauRNgkvbDvA2Mi5PWZ2YVSPFeXDdx9JrFe6jRDVXuFC",
  "key7": "5MrDsQcftgP5aFy914upgSVBUabtB5qohFu4c6rrVbMccZC7QaMxioEDwTtskCLnYRUudBQ8VEhBi4Bnp7YYah1A",
  "key8": "3uBrMeKs1LtPFh9pEJfjtyoFpGNxScZiTWoMrDEH7e4RZnsk85GGwnyDFy5H3gS4ijQ6AJZ27CzMapH5BVrR4PWi",
  "key9": "5pj6t6aCz6sK8wZpbvV5TkKK4Cc5WZ3gdAXQpJingy3rDWsjez8QWBvfWJ9cD7gz3NwokYYuUUN7q2cUKtyD7Gr6",
  "key10": "5EqT7iUU1BLMKgzizhS66fJzfijJUatFqGKFMcjuUZ8jMfi4iYHAQYCxXjFfogYEg587ifxCmoqsfruoHH1Rnr7a",
  "key11": "3shXRqXa7t5CvmEYfvxTe2hbmDFUYQE845CEaM2VTSaiFczmHBcryLu8u7gBqRVXq7Y29SjUnzzB6GFyFiiLM92E",
  "key12": "2aUYeYNBwik8KVx5zrf78VRA1sZXkpiHyzkrUV9jrdo3G6oG4qsCgtfgVizZpyyAHg6iQDqvmFhS2STMaGCMWz6k",
  "key13": "4JQDV9DJnENXS6GYw26zC26VjxY3jeoqxwyk6rJh5HSS15AGv7if6APiWZiPi2RSw995pe7tmp7Ne2JYaF9QzZZ3",
  "key14": "3jh3wjj99rU6KiEw9QKZFZPK554vRVreLbB1DyCcgRNgxhYSLN6o9WMeGpSNCq7t5AusJrfUKwc1BbFSzX7h3rA5",
  "key15": "5ARAYDRyWwSttQbmy51pcyFYN8fdGY8aNAW5V2CFeJDRNAUB3sywtkhqjCD13W84iwmeKZWXd5aovNvywoDgpf5L",
  "key16": "jHNmpzD4qY2jAVXpNZFRGUqPJbypnoey2pCTw5K4jBymZit4wMoj4oQiq7f8BdcFBE7YsEqY7BYc732L3dgv7m6",
  "key17": "PMqJHhLFWJ1BUuiZscbr2AAmd8ZiUtxWVW2ct3HDxjerAY1wa7pud5qJaeeMh2updECWWBULCMjWHxTnRA7WyL5",
  "key18": "4BAbFizAPiGxCzDHLyGL2kXKRXJvV7Rg5wmXjBLPu5UCEwrKY3pkgh3miUxCofDMAKNyuLYab3x8ojZ1F9xUbtk6",
  "key19": "6gspaE3qYXnNDKNk65y5DFwphD5KieefWSrEvugaSZK7fsr1coB465TMeQBmYcs3UyiNCvrFrGhhWcXwfxWYQ4Z",
  "key20": "HSkCHhLzfqXXVYjU2mv1jfNJtjY9gKWfWyYcAASBx74dZL4DCsCKkgvz7TiY2hGqpnyoFsR1FPfCe3yWjiYU9Pd",
  "key21": "3sy2GUU62qUXh3uUGnk3qEsoCBXeL9e22HCaAiuGuNuSqCD9AMweEJATR6fzncuKLXPfisXW4FPVBpqAyvNd235z",
  "key22": "2zF1YrnuqUZ4Uhdxdbm4MRmHmGfPAqFYzkh1et3Sc93DAjTxZMxUmRaqNvBYP4SRjxeNdYZm23Qwd2mFmFUW52ur",
  "key23": "ZyYYfTkLXk7Ka9hU2GuFhX4CRyMzz8C1nVUSfbKaxdZqmfAY1LDHY9PQBuBQaqF4QkQKNZkYB1M8i76VTckj2nF",
  "key24": "yY5uKHYQVqVc4mv7JwQfDTWXMZPKU3Jg2q94fKx9JCVCZZQxj8SjfQSWEFmV4TEwr9XTdnRa5ccMaEGTMmx1ocx",
  "key25": "rTNS1gYKYfxum88DV9fn1Pe9hM8JpSDwuV3mtC3dpTQsEgPgWhYtSRW3f9kAn67AHREaDthnwTKgXyoxQzyusB4",
  "key26": "9SRb9jSJoPWpo8EX8gnrQLcwhKN4xNTSd6wsiPYmiqzdqvwv4sqEAgYEABL7Ywv8h1P5rtzmwr8tqmNXXX1aPyh",
  "key27": "65U3sJgkxUbQUBcApnEFaDy1RZZNzsD5NzhTQs3wkEQvMrRUn9Px8U6xiUpj8MXcgpQ5j4hRcKA41QpP9vTWRQkx",
  "key28": "4LCGdFGBzbHUqxBfhz463F5ueC1v1bT5oAx6J8k5tAExPu5yZug3MN5T8hyEGEr26Yjc7hV1cajhNyTAkYkgZS5f",
  "key29": "ARjyd5hxCCimgxqPi8N3TpxGW6M63xdyptCoJvUnm4iRHeRUpMu3ZcPb4qGrm8aZUcZweLh8rA62aq69mC8SDo3",
  "key30": "2aU9cG8brARjt8HCDMHs5g8LAHBXTAXzv2M2UyyydYGFCRcwRazLHVPrrJK7L6koAjLMewHhN8iAa5FgtAzkXoJ1",
  "key31": "44sxxQL2ZAvVYtxBN9XvmFdsxQ2oEJANkXAFkQArGLsePGGjiTDeXrdBqgmBui4gfnf5SS91DfoX4NERxJ7tfpn5",
  "key32": "28FxktQFAC4CSBPKLcjwvjPKSiEToReRk73vaJq75WdKgodQMBJE1mD7Ur8jRx1FjW9Ffhz52AqsaeHagmKwWKJs",
  "key33": "4K9dLaoS28xR2Scz2pCKfi8kg6mFne4yDn8AZVEvUSz1KJdebdBDJkZGdMYjki3GMY863hkrH6i9cuVu27FdapRd",
  "key34": "5r6iozXU6FbSGTv22HLqqUSq8cvEyL9vw5tQVZfv9FtovxT3bN8c4J7Rb6q4GtiE4s9z8dtHYpPcHSagJ2L5Jx9j",
  "key35": "xxnswJo1oJNddUSQ2gkzQvxD5tskZuySPnB6JvJURfKzjc6Uc8PAe4VkC7wcsAKEiZWUkkzXVy41JX8A6fPAfhD",
  "key36": "6t6AY8nFhjeFcUaFuZi8HAowwHVFkwRFjo5c8h9pVr4Zmgu1XCKCuL4AEKWpvg2aZgUFDQ1pgC4W6PE9PAHb5Mp",
  "key37": "5BGyaSGPvc3yTKbm5CN9NTzFYge7NUDsqhNaUNVEZgMLfWAhhL6WU4Gvdh29gDUYeQXSGBracv76fHXss1AxQAs3",
  "key38": "9M1B6X2ysPihEYsJW12fpidDDmEx2QRZub1fLgz4Vh5zc1cZ9e9uqRAWCeXr3ys5Xpzj6uCb6Q7WQcDn5Nis6Fo",
  "key39": "52oR48qyKAiZs7a3Dy2CzX5ekQr2UEABTcck1hGtFwpgdH6dHji566u25qLcnxBPUku1KUAdhnJAnGFK79x9zgcS",
  "key40": "48QsKUm4THeeBRAmuV8YdvgdDsGBuKQdpWpiWJZKtAaX8wq7mNe83kp6ikRxhucTjFPJstK7kkx5pYztMPSEBjKm",
  "key41": "379hee2nsW992nVv9E5HkHQRmnmUUZHQE9cn4TVibyxyWNRF8r9GiNB6cZLChavniUjNaqU1Uvs2vn8PgDRkiXKV",
  "key42": "h2Zga1jqd5pcXXLpw4neDmbLEpx5nVj47kKouydi46G1LwD7XeGoGSiBgjtLdsc2Qfgz6XhHhKNoXDYf2xQrnhe",
  "key43": "qonnhtHFAwQTUxTXybEQmpnNSBMSo4h1ETk5fP7xv2v25eRX5x38XvLFFT33bH8fgM2c2CmfbRriatSHy2mEeUU",
  "key44": "3q4wi3me27F9792TkRkWkrriujYA5vLs36UFb9WumeXE3A1TFJhJrXwTeJJchBUWb61b8qo3jBvkJXVQ72RdxhkQ",
  "key45": "2biLcj7cJbE65ZhjEpW5B7uWJMXoU6PSw7D3jUUjXJpvMcAwNm9z1ZbubNhCCM9A4n6R6GLwHpJ33Q5ND1vKsexu",
  "key46": "4uaRee8LrGwG5HXKsGBkfrv8akuG5vyxLWdH9bLZLqxFif7GZBuReGETYuhAct2WtRYbD53SGNc9Riqh8z4qS1X9"
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
