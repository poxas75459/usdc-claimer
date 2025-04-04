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
    "QLDKZ5SuHVVtrsBXufivKh9BtfzKMz2hqSjcg7MtGaKybXtjcXAKgqMEsNxLMKNcfTJ3gzGmQWpESESbE7AB5uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tFMeRYWHXS5BVJD22uQuumkCqA4LRBcckFEEvfKJqCnpgqSivqSvzq1annv2YS8YpLqNVuc5L2ZXG1gDAJRjLyo",
  "key1": "2rqQc3DDevxM9JN14kmRLBRaUgMpqSC4XfQkFEPq3XuhZ2aYX5iQFzF8LsirABAbkZG725PPLcpBxzyzkEwzUSTg",
  "key2": "2TM3UUqgx3tDeAdQYstc8jjpQLzbbxYdJKY8TSMHVCmkke4ova4GD7XV3DWsTmeRBLxb5tFanoFbUHNBxKGsFLKA",
  "key3": "4BRpR2kccVsZtZU3ARp3mZCtm4iQfKDo5YSc3Ux9G2w4vhyWM2ZZdjZ3Skypa5v7qv6XwjQhkRGw6ucRkGrtgwev",
  "key4": "iKxgk5Pe6GH3DCdckMtYvSX9Kd6HdWbByousSCp2w73J8u4sKavVSr3MvrwYhjwLoREJo8qJKZc3w8B9Y9yePyC",
  "key5": "2vLsfni6T3vVJgQ14ojHtwBTZRbKzuKgjqVMHKaVnUYYEkSa7S9wGBNLw3Boos3eZMxDdsnDoovX42dcwWoE3XwP",
  "key6": "5cwikSRCEdKXMwdPQeVyqGKS6vGb6PkHjYSA3wxDPxttP7EyfdtY9o3Zc9JpGQEi661hbtMr4fJwvvHAhMWxH1Qo",
  "key7": "2BPqpK5kJzKkwRDetrdgeUza7VMT2tZ1zhRFgUDLPgfpkCztu6LoKSFLq8fLcR9qSEZbHpEkjzXeARw7h5JjUfmb",
  "key8": "2Z7xMDjDGf5BQXv5JRpw75tES7oKVQ4ZtG58YGimgnEKJ4cHE1wJ1io8JVDUyFswSisKZvEBGqF9XB6w2gA9poCj",
  "key9": "2DUHRUhvLsS241Xdg95qMEw9cBioogov2qe8SyeeBcTsUmieR3HvEx4JW1h3QxQeDs8zfsqtoZochmeBwTzTLvHY",
  "key10": "EiqzyfkiGVy1EdnuZNw2tXZrCMZr9W9wc18NPnRXqySUSWkDTPtNq93sZ6v7KxAVXkGGjcTgBou3muWgip4VX5b",
  "key11": "wVLTwLzT7b1i1MLmcBoQM1BDVqsbWDGXRpxQ5yefsGM8D8teZpWr9MbDptBq2zW63MdCdcizwNch6osSs1gAxAF",
  "key12": "2jqxdAJAWcpEiEgqKkiPE48VjH1cpoVmEfdwo9caLs9wUDGhc2bNmfZj3HukcXe8SAhs1VuRKKeof6YuafPEfLFP",
  "key13": "3E8DLzpWPHDGDAEAJJoNnSUYg5YetqsDJsLzLGGor8winajdG6aTz9Sx1PKo6uHJtPi5DVqotMKjY1KvJhamz7Lb",
  "key14": "5BuVdec27qPe6pdujq6VzxJLX5L2TV2GDmHPkJLzj22bi4Gn5MoJBqdmy9jssbDXgiWz1qT4YGTpc8E8DuMBwC5G",
  "key15": "2vnYtyymbSjg4a6ijfUMY16dQCs2xE7fmmincGHLp2H15aa7GEGE5gf6EYy3aiWo6fDjRvQdaLopjWbJYvcVg2s5",
  "key16": "4qzRjZWEZdBDSneTeZdVEp9tVyPj9CeDau1fZSr5JnHU9j3uaqN2M3CvicLCbpprgAdjoYjBDyVAcbkayF3Pw3Tb",
  "key17": "5izxmHs147xGFjusx2anhnT2aHXPZJ3cMRcoer7n5EuYJhZnKfoCvM1MZ7XCryAveWANHyFiaci38ZntQViw7duW",
  "key18": "2PgQDqe2pcmNFddTejGDfdr3yzQKxXvUzyuZtmUDA7LH6ZxoDAzPaREtaCDywid6RS8Lyic1AA3c2s1xfsnbLHcn",
  "key19": "4QAUUNxEJ1do4kBDKpCYQMMSH88ncKLD6HAHfJ3kKxgeSutspJAh3mnzjdFXZWW21spJnCxH2TPcoquj9DfSntmh",
  "key20": "4xBihE9j96bfrFg1jgbPm9D4tFp5Vndon6jsXgNAEw1vUn1s6GZPL3CYvb47NSGwCoadwunZHAs59T5Fmar8wU4A",
  "key21": "2H8avmQuP3GjuhL2JvynwE9FV877fpjMeKCNqK3TvAnAmXof2TkBopdawJv1LZPMh6LA45kDQhSRKx3DFNd2PAcC",
  "key22": "4SUCiAu6UnevAKJ5Bzv5UyvRo4vT6tAAiBMJGy5AXTzQBy3ZRUtj6mxtcjfAGQ5p4vvSgEMwURidzPStnPiHekiL",
  "key23": "6poPfYj7TZbsp9kJyigMRiPHprHwocB4tEQVUZRZzAQCk2rAK2vjPWWDnqhwUH1em5WkEZozmQSucgQjSycPPe9",
  "key24": "3L85vhViCh3NRyKHQ5gHkGT6SanTkeisaM5XqUCYRhp6BPSaPa3i2Rp66hVpHmHWcnJKhuqKYomdsE2vki6kWNPt",
  "key25": "5MupDnaGy63jLY5YeQV7h8yxp8T6dGAtFUh61ZgtcwQNWMpmy7SC6Qn1iibgmqjKD1bHAiyABMrwKahjYqpjkFaC",
  "key26": "3J9JNaTfDKd4MywXwuGNeQ2toUxHLcfNrNFSPb3eRi6DqKCDL1PPU6GX45NbpL87afrmgdH4MPpqwLCPMGt8SnTc",
  "key27": "4AdniN3cnBt1FuNs8wsX7VBtDnRmbPMHhf7Emvw6A2doeRt3SZQXvwNkpcGFKvANGomCgveHpWaJ7W11QvAQK1Ut",
  "key28": "4cCybSAyWZCBfVK1SBudQKMbY2TKsehvA2BbK4f4cefUcU8tRi4WLReQYuYRbQpvEx5qitbLevXJKybXpBRFBY32",
  "key29": "4ANV3e7V4XVa3yV4JNTMN3UZSJnTZQFuQz4tBaLb8gWutg1rb19oPJa8fbx4ZBkfzoTRxpygLBPVKNFJiuqw5ekj",
  "key30": "3dpTmauKFaDLNq47gn1j7uRoL1XzxLTHkbzvZLPMV4ou792ChncQUQ61zPnDvrMptiVua8bjyNLaYZjEKHgxv4N5",
  "key31": "4VLJRRnkLwJbHFQ7wt24e5v9VeSyVviG5rRYE9aBbQwN4sYAeV9vwsZFQWhJgv5HjEFa465hddV4YNVhtzkgh7ed",
  "key32": "5LoDWfRAvrU5WPWADgaK7zBacT2aNWEgrHhrV45ofJXbVgQsWZYa2MsHMdEZVsQ1ZCRuDAwHWhf1mJHfgiAGB5Nu",
  "key33": "9pxeRAgPXtMxHuPBn6qaAt3rYX1ooLQgcPkvBg1jjtk7U4FJrudBvTFgNT3eew69rgxv9asAjhr4sMt3TbALexv",
  "key34": "2SUVujp78JCUDjjt5gC43c9brNrVAHh1DNLUisXymSmUrFW1npXj4MAsFspjwiF4X3wEKGEF8kU5uQdANRrD8jJV",
  "key35": "4n26X8YTsMXbrTTMy38PhEYqtLLWW3jYfW1XfV5TkcATBSu6UWhyiQu18RKsqXvwLGfYCfbxVsS9rLYdoTFTPPwp",
  "key36": "2E6Q9ivkwUXMRgZUnRGTV5FVyLXFhKm21Z77wqrf5eEPewZdLJCr7wp6VBPvBjWMv9VX2b75LgbWVmveMxJ91S23"
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
