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
    "JpaQJPkjicpxtmRpzgPMGQkaCw4n7QbF8Rw3zg6QWSyVSiPQSdKdpsKrfYZfoPYn11whbPCuxCiesg8ma2LHSKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fQ4KaXKeiutNKzWVMsfDEfAoqyFhCthxFd8D2JZwjzKpu4agL37rzF8kGda4PrM9EXDKkV2pFzhkZa8MXQkN3gF",
  "key1": "34kyXT4NseDgn2gzcqhkmJ1x5gTZ4MBRNea11JnYRDzqtQcSwXUYsvTUKGL2vqYGMhwcnm3CQgVBpYThzAFpj4UE",
  "key2": "3kJAd1HETMEzqdxzkSPRDsVwSdT4hmisU2TPjjmDxRniYZEkiowBZQxRsETepucizFpkFtNALHUR1C2sXxV5aRX2",
  "key3": "2WGkiSDtB79JoMheTNMgAV757i7LGmM1CZTXcM9DYoQPAaZ5V7ymeScc6kNhFA9cRLehkvRsnc18mfVu9akQFK9o",
  "key4": "5isRjYVpuouJYTCZN1bTpE8sJKN9nKUKn4QgUfZLSNsr2PLoAWLhjZzrHeRgmcN3JFM5p5X9EM53evzDWsZnqgmg",
  "key5": "61WeTiCr5fJxq6cW5vq43t8kuFW8av2CQG9MMvs2D85tmCENUYq5xAyLExvm2icqYxNC2Ncn9ZULK6g2CUjT7zQR",
  "key6": "3CN1Hi5m7XqpC4vaZugkPg13dkJh11MJJvnjmEo8actQTJDRa8jtVyYe2QGvZ4H1KroeDxQmxotTgBfAa71qz6bq",
  "key7": "9fZK2udJZZTBhtPwaw8NQzRmHAuJzzKse3Nm8hgUMjwxqSEUVVzFJXhAsqiEvStiMM4axFcJvsSsHn9Yb3Kxh6J",
  "key8": "3LngRm3T27SLqmRDs7hSNFjuEf1ChQZ19yaQmnSKRmoyvkCWLwg6h3tXLnFBPM8nVELtFDz3YfvFwtqvV1nGgrZ5",
  "key9": "2rAW3VYmUZ2KhtFvekj7bsvzhSuBb2vxhC6nVFQbrcjH8SM6SNV6Dc78Qu7gFHkSqVWs5bLb72oD915eEMn5x6vG",
  "key10": "5TyVwdpqv7VBccUuM3cNYqaep9suXR4sU8s5KNCL7MJNj8CMcj4RXs184Uuvx4Kr7o1UDwYtXgQKFAZnHGBCWvHW",
  "key11": "3HdvmUni2bvfpup8gJ8Uk8BCSa1Gr7kmwzp69iYwrmqFBRzRQsxKUvjSqcmtcMBUR7L4Nwx5dRbU5xgmf7GDFCpu",
  "key12": "2PSG33vuvxWobikcqVV56SHUavAHSuGqgj1ET9XBq67ZwUUx1gPgukgvGwbhxiKupVb5E9uF3JesktARWYHpaDxu",
  "key13": "52E8g3pWJv6Q9BiYRJYVRALp4hwquMup7BfFPXQZWpjNLY8rEfju3GCSttkNMU26THtUAf8v9UbPBKSLsZnJPnXo",
  "key14": "4ds93gwvs7B7GmWYGt9F9oUqZKxXdNUEfQ1oeNE4rjt6CXWzAjA9aHK8my65EYeTzXqeijM356LaiyVX7frEk3ns",
  "key15": "2H1mKekaRD5XN7jCqweA5NGsMrLF3Hcp7x5Xn2eQDDLcYJhnn5RxvgoDB1xJBf7tFz4J8FDnU51HJ5PeekZHx8LV",
  "key16": "61oFTSzyJJLT9ZBZkmS6TXRvhGTVBWRsN5MrbCZLkmM8tMXiTtZgXAWgr1tsY4BhWUKUBBZjvJ7ZDBfJek55mCCU",
  "key17": "2JQ4wQvw8M6SKxcabqCz21GLfZCc1nxH5qtoHoSgUEC8aRYRrvbPVRpDNqy8ZQoNxTbpxURSxP4BwCFQvuJYMN1B",
  "key18": "56rPs9ggsh9kDuzQXuZhCwGx2WZ8Xo3bzVtyoBF2k81XJ4qHzei68nfQT6FDBa6kBt7Fx7bACjRu4EcXZaeMs32W",
  "key19": "3R9UPvgXZxiwGACG8agN6etequwtxUsmJPzk2qTGi2yys8Ew7bMHYEB448BgvdTTKazaVoj6VKjDU18GS4Yod2gN",
  "key20": "4f5zSVaU9FZwpYqv8rAHRGFJpaVo7eM2RLTxEhNHFRyoUM4St5q7PdfY5ZvyBwoZZ6oRrbhVXfaYioKMsJw4zWM7",
  "key21": "iaLBHf8iL2vuhcrenLcMuiQYi3buY9SPYTUnjnuy8z1vdLF2F7PzNRBTNGyTUGyA17QUw2in3xTGN9vDU8jfmx4",
  "key22": "557o4tW3vtMoX5WefEds8YpMeKhJ6F1UhVeAJcbCVEg3jF7ijW7fAZqgkH8s8N6DwSfZDFqukKqHwaCXoygD6Y3Q",
  "key23": "4qzRjHz5jTC8oxqhArFovBZJvLscYamkX1Dz2pYnyydj1qTDfAQPLViQpYA1Cc3McdSSJTrujKAteKrABr43222V",
  "key24": "Mh1wN8JgRPZifpLmovgZ5HomyQbickZh9jLJCtBi594hpLj8dMG8nmVcc3CdDASQ7phEnNdq79knR1s7BmZrPDD",
  "key25": "53Tg26gZFjuvqooKVydRmXX4aWo3sWHSYRz2Wao5zBnNDa4XsDy66niPGmbQcPSX1GgYzrbByKXGRkNUhytVvp9f",
  "key26": "3coX1DmhVT2x5PZBBduFLkaShDYfD15YgCRrMGirLXoYUMMzVenTVpLofhzjwPMvxdTE7FNVqvja6X7ns3o8Y3fT",
  "key27": "284HzhL96prT4jJQ52fPJtL6CWhrpJDehwPqHpnPGQYLv5hwLpDc1tqsnVpXGu2upALyC44atYtQ4FRzxpWjMC1n",
  "key28": "dApokQQf4Vn7kNuWZoWUaPhHvnuG6H5WS7YiV7tMYHdjdthAqFPbnueTg6wbsi98GBK5ypk3vu4DLAqYgUYhoQG",
  "key29": "SW7qa4uDfKvitre6DLxqtZt9hrV1Q4Py3JDykNXDBs1CsM59xUpKdSb5n8NUAGsWHLCd1deiPLkCAcH1WhfwPyn",
  "key30": "2Fdm7qPE1b72boDbLtrunWbDMcys9wNKu2etMZW3vbYANaqnsqDkLb8hQB5izR9p1uQxWjV6SZCepw8MmtRuMqjt",
  "key31": "8sJgzucToEDvhCSsFDJXvXZN3ExhbkH64gjSPzWjGSW3e4niPb1qvroQ7ogRwz7LEjCWxWihhLJJeUTJFsuEnpS",
  "key32": "EoJLrbi1QDaqGLpVv1udPwHpD73QCE3nqQuEMe67ByXfoLEALGz8wCHwivbHQgA8fdVQGdq6JeDULjjQbFbqytf",
  "key33": "4sZZLZq6CZHXVqkWoCByQ7gG6AcA3fWgqfMNRkQwKX3Cw1WFGvtBGGSy3JA93CKqKVoYnL9VLLims358HJLFMStQ",
  "key34": "25DagZwhtBz8hYbxR3KEnE5wbJsftseyBZw8LABFAuJpSnY15H7y8WksPTbeWTMQTj2hfgfG2Y827Nga9eyb1Lzh",
  "key35": "R7ysJK16joecRUHBwSohCr9B5pVEvTuuaepHeDsUKqM7W3qner99xG2neXmaNt7kCv8yibQai4Er9MrFsG3Fgrr",
  "key36": "54w2FPRoWA9VefPvkJmjVb9vqsaa8sbw2g3WdBzopAop2EFXZJ5Fob12XGXju4Q7JjCWzT9pzHRQntVgcyNgcwrw",
  "key37": "5Ppex4ichaSTZLu9oZx4NJCdCUEo7XwP22E7NdaPFEkeRyZJ5hu26KkgsBhEy49pQJphfUbebHuasXWX7QBXJhnY",
  "key38": "4QDCMxC2SyFL1JQrvFdApgGx2AvQV28uiiZUENokjJ4xQY84jGcg8dYsK7uSwQdHw8RaL4oWQ6a7BmVfF9QJoX7e",
  "key39": "54UnvAc5dTLHLKXMR4HJUdLZX4nYvh7eHjKCZemoPuA6dVqyYZQ4vV3Lk722pu8hiaCDyAAAzC4QnbMYhivfCP9q",
  "key40": "zJdWYdSWbj7uPUJ2vjDyMtL4jXtPtQDXZ8oUoNuSc4NynZcWLGm5BLnHNrztnXD7vU36Te71gpwYQPXYCfiyjEB",
  "key41": "2WBPUXjpyAvdqVv7WYbmoFYdA2bYhLEw2yekMLVTf9imq3cdQv8wFLGYyj19VnCYxhsMwcMMtFu9wzVzqddT5d2i"
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
