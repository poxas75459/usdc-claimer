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
    "62cbXdEifdgPMhawt7fF8CyDtED8g13pup5RXT2W7g9rTp5JvcZU917B86oqoSDibWi3YE325PyGHh5xUrX3YbUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CZxY4TaYLc7CR46i4DPgq3PaKVSyu6fgsE4BWFPrd4hwnan6dYLggJTq4aXdJf6r1VK8PjMAxK9qajCHLoEsETm",
  "key1": "35vNDcAfF5Rr2uUcdujFeDGey75wcyqdvJNsM1aK5B9L3M3PgcV1tVztfDvkqix8h8f8EfgbjGRGRS91uJXBsmgL",
  "key2": "3tnnncipW2bPdC5bPDQ37V8tWdng55ki2RApeKWHReKLVD1ZapX5kZjkazjFABj4Wr65a98o8RdM1bKP1yRn7iUv",
  "key3": "52QbrRb7MzpviRbHKuygs31Dt5RBC7M1FmXwQzVUJYLuP6swww9JB9rs6XPFsRhmWwaac3wNpaHABuEmbx66sxwh",
  "key4": "2BYYD7bhZLYDVqsSFtFAwJE5Fb13CkGa4LojgRS9icQk8CZyrhLVyuhUWUtjENF6KziUimmkHLXcHMrJejF5nxLS",
  "key5": "buECstf3Yam766n6Hcb6Nx7XQCR7B28eBhNVYJVT992Ur8hcgRAFtGCWJcbBbwGnxzgqXUQdmAEjXX7iuoV4SA1",
  "key6": "3aMabNiWCT6aQaEgecdL8V9B6PDgh3VHTCecAgBjYnDEqY4TxqVKULC8573wHbvYa9f6dsiTc532vjeeYFzFoHYQ",
  "key7": "4Yg52BM8R4d8Pby7GQ1uvAjdxp2J5iBXDMEg9c5747uTRNorqNbrkniDBmKE5Gy4PwFtT9GfUYA1VbMacjEH7pwZ",
  "key8": "EtjtESRJ4h42BNYWvgUSM58fEx3dmNSCamUyFkqs8aKyJLaJz6W8LQ8eWyj3Xha1aENYkZoqmptvZthE8zYYRP9",
  "key9": "5shBxRaPytA4UCDiuJPChcxWStTu3ba4fm64n4XV5nn19wvczBbu4jywRAWRHrKfTpCMShMM1ATFwSzqUKZGLm46",
  "key10": "3hQruNPYtyd1tjTPWFQ6gfsZ7E2zaA486MHRa2v5iXvSHaes6qudej1CSVg1VAiug2WqukbPBfAKnAb9N5R2uEiN",
  "key11": "5bo5e64GvWyVtD6Mo3REU3HnBaS1WGwF8kY93mVqbX2fJY3bnCgWPdjspJmbrpcbQkBofkZMHfLH6Rb7JVM5VuzX",
  "key12": "3Zd8Y9ZhP37EfBoP1HKie7vBkSbKJvjB3NnmkNjEdvCRHq8rrhEAehHvL1BqAAGSRUnV9W7VGyfgaexPBvLt3QJ2",
  "key13": "k3aupshXL7cvXV7yRG59Kt4wWa4wAgoSW5LnU7v6xpsSt4JFK9VTcNmHqAArZhy1RjfdTjXhkhQyHKTk1J8WUJb",
  "key14": "3huYZjtaPmJ5oE76Nc24ZPdZBVF5jxwhBEWmA5w7m1Gdy8c5YHp67auutJS1kuPLgHa5HxsTgNFNiFzYfhyB4uPR",
  "key15": "1mQTwvHJSBy1pTdmEtck5xHEQ8ANprn6vcGZkjRJ9Wmc4eLtnv1QYhL5jake26xFsBXnHteabA3wQwLaSKaqkXt",
  "key16": "3CPNvsu1iw6mZScShKhPPXg4o93UAqLq8mM7UAGo7FXrkmVKBLFJ9hgZnn7uEwE47Mut2ahYUppUYxY72h4mF9Xv",
  "key17": "TRVqDeBBn446VCbnpWvQuD5aYVjEpSdiWdH6LcuA8DGD9cmvJENRU2pN3QB7QutjZA3crNr7d79kyg2WrvVqPi8",
  "key18": "373s63vg6Cwi7XJMPJpqYSud6EPrPaHeemYif33oUprJQu3euFHcYEfGpC7z5PPjcx1TLoFJnheExX1gcAJRbFNn",
  "key19": "4CbAnrMYfNm4ddnP1fozecMBm6hkeM3YtopkbC4FfyfLSkeS6wcubs8bdXjKgQzPG9MYtDpLch4fnwtPPEg8BniQ",
  "key20": "4vfJXivaKEPhAgkc87BncUK1obJ24g5SJS1e9YAkuWKch3b7V2kvNkS8xHY8bMDN3T8UxnzUT47eo8Zhaud35kQC",
  "key21": "cdoUbK2G7aJkCu6gGeTDBcHFQ1Es54dtCw8bBmFgYX8dh1AchCBgA6TEQDgK7zCpkgZWRLFktor6Dixaxn67ca9",
  "key22": "4L7gTnW41QKyXp7o5JXCoUCphDnLzYQV1eSzGVJkpN2kYUBAn9ob1YmCT9zVJVNGWh2kccxXz9MoTWa3ZYDosuPP",
  "key23": "DawLZArbGgx2tb7sEgQzbj9L2hUAmc7nDN2RPpUNuqk69rPk1HNRMB2VRi9C3NL1fwzFoYo8w9fwUXC1Le58Kmt",
  "key24": "3Cn6MESFzTHY4zJVaukXYNMeQje9o6pkpYA3pHWN9gMAsQhTaLodJQHkh5BPBDNmvBktGoa61q2Ye9MZWuAHvHyC",
  "key25": "4MSuqC3SmbBMLxCGgJ2AC87S8NkGemaBdTG5gBh9VHHsYQNa12YcGYURnQvio113aYiqhKG99MTCrAsSdC35Q4DX",
  "key26": "5jkKJALSW1PBChPZHGQxm3ar5Bifn5gJGXgCbeTfZ5tf7LBHcCeAhkh65CJw4xzd1uzKTDBYzCanngYXAjwwMtrM",
  "key27": "24PuFyrwtWemer96sPa6cKLKdoTueaPxZqQDAEd4fu8asz5bL2QwhpJujep2SgrjadrfVRxTSeyxy6wGCQNKfZAU",
  "key28": "4kyhnLKri4XTHp2Scd1fwdgKMUkNeK676YsA9cvXNURbHzEJ9tEGfs5zKnnXzQsSDShm4tkcTXkUTabE1w2UZopA",
  "key29": "2kFjGwZKZJxr8aaQCKyLkqk86Pn2o2vkVZg8VqheMWmp5T9tKsS46Z8KNNNWjQANcy59nKBzZma7ytVrpwJ4JqY2",
  "key30": "3awJ86fELS7cjGqDfem4vCks6mGwULRDmFvivKQKpz9F4pPwhmUSzBFrVDxysBq24vJup5x2x4ifA61h3zzG2o73",
  "key31": "2Fn8HKHygyEfKGpueYdTqneLBrgRQ1LVWD2cYLYD8KynyCwRjxZTZEDDwE8oHLBo7UjwPCGornzh8Vnzoi7sj9an",
  "key32": "4cQGFe6N4Q3nfzNPMozMuxEUMQA2zMGewoEuYfQGRhQJukDHWUggpyefw2U5YFDkcB2kBDxZvpGTbGhfhLAcPJHp",
  "key33": "2uJW2Zv4CtuRWE2kjd34LHHUUXhJnv1uEmN1BVGsnhuWkuZmsCtKp7rBaxY4erzo1NNtotxQjuJDVVZjPmGJfB5k",
  "key34": "2BJvMs316oTxLuZX6kcmgvQrNw44Dff1U6hTZYijWBMdZenMa6UHTqdfyyKG7Qq5WgkNYFcbByCQAciNZsNduRNd",
  "key35": "4daLcbckGDgLdHtYzcQ7dCqUDjYMzVwu9D1NYAVgjHpy67Pua9XK8YESdHWBXhwftWybkb3itpibgeTeBEARYhzW",
  "key36": "33ax28ULUpCjfhMGwoxk5wfzAMjg5LRJbnTTMA8ngNfVWbQ3YEDVqbwKyH3WJPxrCn3EWGndvEvkBjKPCcvAYL1a",
  "key37": "4Rjg2QUKHw8eQGh257BQoVNL3ex27kGSJXiqozaPgJUf3W7kEyQa1br6XnhuMVEMpFQStYENH6Y1MxrUznkzrj3V",
  "key38": "cGHzZs6LL2JwwQ2oWTEmVXwdKZPbBhZQhhRGVkjnWjzAsESGQGngfEvBB54FhP2dFv2zbPZ83GKwcErhviHWBXA",
  "key39": "2n8BuYiHAZVLPuyBk3KovTAnG7asbngrKYAxdz9cHVYY1XQxCj1JDDWQjMW6a3Y1fks9VRpcDzfTXH5s9m54zb1y",
  "key40": "37Bi9ELyv4Whi3QBfEg9UBryCyCcBnEJezDyXX4fkP7RV48gVBchikJPnbsh6qWjfuGjxUHTXNh6xwb7NuJ7Kr3Y",
  "key41": "4dbhSdLav1g82e53Ua7ygBmhUMrwPA4z8i2VPn3KWu14aJUhwzJvhfzWPj2RChkaevmEoRgMZpWhokP5S9Nao3tD",
  "key42": "2L6zMBRu5eGaWupooa9XoyBAq5D8ubfM4bBAatPFZzJcty2Uyq43CJ5ZCp2vWsgzd7uN2fZVECdDaF9SZTQqiryd",
  "key43": "29z8AHi8vAWeJM1Ri21bnE8cFsk1KfjSHcm3VDHQwjcxkhWisjtmfdjN7NSW7PAGhUxrP17rHhNs2F7aiyLxSp6S",
  "key44": "2fQsjirMbSwVeSs98f2LRfNhHHpcREnrAgggUizPgZKdn1acBd3e1NdpF45eYNiia4RMZGCvgkfbYuqcwRVWvYFF",
  "key45": "HMjkY5PaHQSmQVxzDJDUNVxqFAURWFTiGiByw7wZvdYDjaxPDfzdNKzLZotJdhmktBTM4F2g4bcPCHVpdMQKSDb",
  "key46": "25qp6PwSGkfcdgUnp8ewrwA4Dq2dAhPggoCiSkjGqdvAUrxHjCSYLbjemufjUmfyZb6Kks7uGDumRkZRb8phz8BG"
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
