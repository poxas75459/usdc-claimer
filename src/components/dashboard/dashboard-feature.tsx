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
    "4At6zgpZ5x3QYhMP3jWerBhExhWdoeRMiVGZipyxntfcwxc8UrmBagQusVVasf9hVwoLetH7Ro4PPbdeqD8GaWUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dXQAvQGDTmt4nCSW5BjGoKHb58zf31GV1r9LchinxVHGQgq5jMhW4EXYFfhM9qJCGkrUq9bm7omDqV1W1PC4769",
  "key1": "Bb9qS4TMtVf1zj6UNL8HYDXJS2zMxD9ngV4yrBVFx4uLkBZJtVhiH4syXEbDVe3wcG1VJrfv6Ph24yXQrF16AiF",
  "key2": "5TFswF5TPS9EeDHJYWGxvYHUMmrAfd3ChVk3QnP2G4QgdA2HCYzjfBdVha44FDhQFiksL1RB635P7SiVS74HWbK7",
  "key3": "5zXPMQiMp1vkRGkJiWBA4S5L7MXooR51KKyvfoqj587Ahex3PfHBtuUqkMLj7wsqjwByDtYubwP3ondukmrwXdAZ",
  "key4": "sDBR9EpdoqH2sdeJpiTQdvSG1DEfEn3zLVpLdFKfLJjvNi3oqyLm1yRQX7cpDij7Az1FDeLhRaA2WubahsbTqSV",
  "key5": "4tXqGgmKRozdqtfiAWVUsGgRjjMDMSTxTGwTHwMWVk74H5sX3dc6DGN7mCgTckBxMQWqwnriwpGrfE7VaH36N2mn",
  "key6": "4qMqX7swEjQdp81aTU2oFVX2evuPrjoDHnquGKQqfnWNRCAhFSaPyiLrvEkDCwDAJwnNhpMxLcionwxpgCSJnsdu",
  "key7": "3fuJXhE4mviDcfRzJUfQ2aLZu87Lx89UMm3yr4KHu6D7Yf73hqGnUJQAM2LLiLagXwvUazhHpRfgkUXdV4aCQGYN",
  "key8": "3Qtqhr9h6wzsVyRqx1V3MuvShCJZQmdmzhubAKqRVUrLiEm8sS3YgJDQR59RbyQeVMrDLRVVv5Q9LtJrPVNwFYT8",
  "key9": "zQmSchSWpm9DK2DnM4xZbYvb2qHx2z1ga5vGm2Bn6XbFk2cPZy3WPDM9mx5PSrSuHHQdeutQyo26b8kHDqB5Uv3",
  "key10": "4VXh5wxktR7eB9z9ZsCToXg5i4AtkWzLu57TrkfbW1uSvhAYVDSYEGqSnEXDiPBwWYMqcMLtewK4zCht3uzs5SF7",
  "key11": "FNcPKDpg2BqzsA1cQdUdu3Z59v8UUgo1LKrJgb4n9ezp6RTP5u1mjX7t5wqdyNAySaSug7BDxB7GGgSWKTEzYeZ",
  "key12": "25rBvoH8ucFbvy8BKPB3ttkytTcrVs2cXBqFR6Vnw62TLjR7F6aHgJBh8bu8e9oyuzJFpXyiKA1jhH4urvNbyuJC",
  "key13": "3ZBi6z6t4HXGjRebppEF4UdLewhtrhqcLKnR9hqZH7aFVULqZRfjgjMDimWkt7H1cQAMWSx6ApoWpMEx4B8jQgW9",
  "key14": "2Rm47TUSbv3bMtrxtxBj7PczdbSt7d5SNZ4cDKFySfJS2qqwM1P2P6KKs9JN9GHhmsxEHLXsFBUKfwUDhbf47e5s",
  "key15": "4fnSbxidL4PKKaVsBp51p8zUG6CHPy1gzuAN4xPKQueUiBtzQjJFoum78X15qhjdF4arEnnFfEpAuwt7YbrZbTP1",
  "key16": "2io4w9xYMrFDjMwrDQu5P4Gh3LNcvaPU1vrs1nXEaNnGrqEBS6r1b1LtaaXuuonejsvWFj45KXVNc5ZbUT8ZKuS4",
  "key17": "3isNSj3d8Pdxym2tJ4zYkPhDJt9PVFV7wZVTgiqbXpVgz5icd1GXMW5x4NBx6TS4LASuu7XwoC6pfnx17xVg7zmK",
  "key18": "29Pmf2Yw7mo3U4yFP2VG7KLgEWtWKcs6wjGfyb591Nj4LnhgpVqEUPuXKTnjMtdA9J45MsoPBipeP2jjKWb6Hufo",
  "key19": "63HV89QveoguRK4WdRHqXdWRJrXG4iR9ifU7nftfxCU6YYMddkKsK2v9ZN9yRctd2eMtibo3XrSL5imKyidTyzH2",
  "key20": "3bhVxFnyL5XdmhH7JTpwgmzvYhmPzhc4MVFS24nnBUSveSXEiH9TCiAnchyiixScQnEUEs6nY4kNFjZYD8dyE1Uk",
  "key21": "3siv8wb1v9z5vdKbfymLtfp2AueK8vHRsZeDJ3YGLpo4JxqqWER3Uij5nD7EAg3Krfiaqd11thhXfGKvvYCHAjdM",
  "key22": "2p3AFaTjt71D6Qzdo2EcP6L97ne3hbqCrectjiYATHHkDimPACL42GMhtpef981wFmRfA4uJDNYggxyRnCgAiG64",
  "key23": "5PUyYYVZPSB2fL145jM985jddghkrYe137QYiqgmhjvj8yJ1YrPD7xcYGqsvHbFTMA3ztZz4S37uREYdRgrtw4ri",
  "key24": "46HnycsUm2M7wnY4ukWFm12b3bZSP3pdWprrPhzhoE5NoM8ShUL51oKbzWtywKjn5ybTo1ckVfiRJcACbeGM5eKG",
  "key25": "3bpoTd1cj5oAic5eGsJPxvDZaFw47k6jkoitKmDQqP3MB1iPMgpi6gTPmM7NEJ42PEQ2KLUDA4wxkTPP7kLX78bH",
  "key26": "2WGMXp7f1TBZ9pmCsDpw1jxMry7BSWL7G4kmT3TSb6Y8GzmLkwF152MGYhMHFmuYAs3bBYv59MDjd1TRxR7tpF9Z",
  "key27": "xCWvM4soTUPEhCyz9tZvcJPeywvUJqdChW8k5nKcosBy4mcjok41Lq2RRkZRnZijkkuVxyBtjhxTfSgQHE2ShFv",
  "key28": "db4KsVuWGM5gT7MwQrULh1J3rrS6zFMAhTisNymTe2U9mH3vg8e1h3jN3o3F5idxaprQGHHhcjtLP1HXt2hRBd4",
  "key29": "5GzyukGn39EUSDcaKYKYGqrMo5XuujbHmxX9xzYpjMvmBE6Dp8qC4oFctCzuV6LLqpKHyuat3ySfLtPA2cwA3CT9",
  "key30": "5iVb1ANa3HimMXAJYQCgkaY3RBDyf7AsFXvrLjjoaNtrtNMcWvAPDuxxUkBC4FeHKMA8NUmUsFMg4s1JM6b4Dy4W",
  "key31": "4Vqwgtyg75udwZHrb54s2Dew4wtMDNabWAPGFQ5fD5dYPnqX4bC27xvPMtz1ebzL7mHW6Hh61zeDTqmLE13qqW9N",
  "key32": "3paUmy28HQtUv2FosL3cP8yTzVxksWZMtmHQ4FYuogdE7DuUgNyea31qKNieL4kxXGEFec3FpxDwradiUqytV7VM",
  "key33": "4iySEk6j3zPicp4dVuPb3hKToEZfyaga44qzXyZT8fWYb5c6R718munYbx9KAYoiZDd7WQ5wRw1i9NXDwzKbhaKH",
  "key34": "2tzxeWMzQaBQ6rhxSBGWoXczm14JLc2mMNSZ43L95ZktYqrGXiYSYwDvDUrVpfkqAF6c7DyiaxLNEz1x1kxpi8uK",
  "key35": "fEsNtktbSTghgfQ1TMHhoJbwbmvzgiq1NgdJhgbQqVRq5fnu7zeD7dPwpkvogRVvMWVx3JetfeR5H3jxNg5Z5kE",
  "key36": "5F1EBszqtty9B1NMtHuuWb5CtWeszcHtYn2pNC3siJRZPvy5rETBkk2KjsaZZyMiRSbqozMnCXVaG6vnY3f86A2K",
  "key37": "pLkErGkmfxVrZUevyLgYP1XRhZLsBWremiSVUEn8tdPftudgH9fDGyTxrr6i9BvQT5gNHrfuhMpFsfT1gYRDeqX",
  "key38": "2n6bU27FKdKaBXL8jo7LhaNasaybH54r5fMo9rsvb9V8WX2ufNoFU8FSRi3GMGfnmGHvSoYoAXsbiKr6uHMz1x52",
  "key39": "4c9gG4dsCZkQENhhLUjJw5FWJGZRgwyFFYdaGWKEQSvhrASWCSXQxa72MXbjtU2heBDVoY8i9pXqfqBzDbYTP85v",
  "key40": "3UNrfkYN7c1xPvd84CTd8nCPrrKLSTwV33iQHFYRLVzNKK92F8X35mAwWbtDTSokFAkJ7tptU8PRdXxm2SeyQZNc",
  "key41": "G95v8YnEJdaSmuE1fmTFA2YHGXijoRHfEjVbCZovz8FE6VSDYXS7j6tirvzY5Qw9YMsTwK2CavQhhmhvDxASmzv",
  "key42": "24LxK227TXPyzEw87M8ybdEeAP1XbYjmjzkHXwTYHDf9JMG9jfNC2x9WXkKWSz6MepEstJDDYcx27RJbu89br65s",
  "key43": "LSWRQH6Xsn5Raw8pkT7ctRByBxVWjZKC7kBJrs2PGBNdwR9SBezcb2nnvhkUP4gs5kHAZCnW718LcpsQQo8gPVu",
  "key44": "3Y3XTrJazgEz1gPCtym47bZd7rzmFXokAEDUQkixFD6UaipkFhDVVD6xMvb6EimX1PvNZXWePApZKYrN3snDV1UT",
  "key45": "s83fRf5rq66bpRmLvggW3p9kSzEKWwazYiX5YhZB1oaRyvuYMoFbucnQGQos7oxcSoKocydE2tTq3zsK65X7JG8",
  "key46": "5Vnk4rGhStLwkka9kUuvjX9XAkE91ZECW3xiDKLu8YRG3Dk5PQWC6wsc3qnYRvBHdv5DV7vt56YTGo8QDuqWkGwb",
  "key47": "5TNnA5hK9XvjuKTuSEUGVeNQMRaU8WKewcS2qaxDnUAGaUHxbzL4V1RUoFjgWgHR9kwegCqbbtDghHxrMeY9GU4A",
  "key48": "qXN6PuUN3XXJ8BrQsHDWp9WUENrBFj6yJFHKuzysymEV4ffwhwNAySjEXyFC7aAZyc9VZ5aZm2tSy6xTm947f4C"
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
