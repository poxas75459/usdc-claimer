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
    "42ez2S9UpmWpMwVXYFi8rS3XXfNTcYwrMPrLPTME5Lz6rbmvP13xKPeL9nuW5Dqc2Hgn1cEpxAXR7PiSehK9brnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qeADT25CXXTehQoMLZoRwokgEbzokdWHbHegqqLpYXtQi6o6QBKzkpdo4A7fYF2L1pjaZjN2wJEJEr7G5L5inNc",
  "key1": "27C8qMxQf3GUSPKUX6PiLBEBae2HGeNTyNEA2dK7aS7qCt2b9wmsUx3DfJkaUCZcMJEVChEUuGh2TNxR1waMLvtD",
  "key2": "21MpuS18fwq59XVtmwtUJx6xVaLTzNzXQnAw34C3tyBxStjFw2MUrpyyxpDkcf2yCDvuts3UmgiyAz9Bc7tDReHr",
  "key3": "2rwJ2giyQcuJzmv9rLhuXVocykTdg71aUz9NrCAr7VM2UxrwxkmoLfMaxDZKyBbbHBuAXYny6rMzsXPAnXPaagdD",
  "key4": "4pA6BmoEVLqk6WivuBoXn8y5upnrCwmSvS53CJXFsKLmmuT9v6xwLoYGjReLz5hrjEm27tyr6bAVUsCuq9wDXbcN",
  "key5": "5FjofJrd6X2rwUwPkEW7CpSxXQ1fRHUcXnQYgpgjJpFy7i3gRJL3RYMznwTRHmSxCRY78CQhr4RJsiWwW3zithzK",
  "key6": "45MrSQsWoNG58v31C77osRoBYHgthEnrj5Vxi4T3iBjJ1VsQmWjYJA2oTzDWQPKfABgtQiVaeAgzu1ei1E59SAJQ",
  "key7": "3fmZ3Qq7VkPAHDACQiJHX3oicV6WvfiDY1eCug92QPeSVzFDPrCdVx3iBEk9ayYYGtjFUqbSnM2CbG8GSkHQ4f8Q",
  "key8": "2Wp1a1FitbMJaDzWsrs4DFBikoGnDJzJQJgZFviRLfpgNNP8bjNxCLBBXzKTe6bytmhEqwC2qZUrTK3PkriuYnv2",
  "key9": "2RX19xRsFgpy8i53eiM8Jqh3nPDwBdALdb1kMp5TvB4Q3P2S5N59mi62JHffr7hSETnTjAyH6Q9XPtMNQraynkt",
  "key10": "56U5pvzKWbNb5nane5PfDRRyx1GNNJsJG2JWiaSshirXzcQfBAJoqqRwmWYNck7ERLEErXpeQMty3ykcXggCjcA4",
  "key11": "3teL8AuVa5sGSn6pDrah8WKiQ9bgXDHjwyiSzeQyd8eFfDwEMs6ejWmM6E3pYoCmSXZAixeUt183w35LicnnMknm",
  "key12": "rWTcfYAVLHGNLqc8x7iuDfGMLFpRsNgFkQn54gUopNxK1ZfdxGg5GrHNG91t5HgBWKekkcccKuXybKjNQVBVKc3",
  "key13": "LsqMR55VrjzEUJPNW1TuEJFRG9DcSgusCFVafXAdTrwB2bEjmpx2BwzBSZpGgCQ2K61M76nmKYXqhu6VSsBAbHZ",
  "key14": "2YUmFPWUVUXXdcVoyJsbNtehX165kPTBQYvLKKo3nce7b72NJSACWXGVyqJDuVi3RwyRddwo6tgRUud4sFa53Jgr",
  "key15": "3ZscHnz9tstYALnzmPKYtgmtZ4GBZFZtGEtuQsmQx1bsSpHVdRmmoi9bDejcK1LVcPDuDrXNM4gWNmXmWopGYcPa",
  "key16": "3SdYGEPggYdHM82hPrs34mkxKWJMvWregJvZqtFqpAmBfpspqQaSnedW49DsQnfsnQ17cCD8dbsa9pqYoa3di2Ls",
  "key17": "5yMAuW8FzRwiDa9D65vMVbuCKuz1dv8NUZBhT71hAfGUiuxpVXku89y7x57thf9w4iV5p55SFRcvXG6XpSVfe4hB",
  "key18": "2UAGkUh2QENQB6V6dJ7aRX2jrKKH2EeEWc7tHBjbqdCXpbnnxGYwW2jBuLThTJBpqp7qX4qyN7nbpp3t464HfmAq",
  "key19": "ComZwjTEjLJ4N1RJM8E5W45iN9MH8aGj4AVSroqjSE5YHNkRXDNHiHCK9rpUha5GsgtBXqf6ArFANENbqDLPwEZ",
  "key20": "3AKj9hqfu5oA4A7sASVMxjq4Rm15TBcqVv9G4vfGHozLMBiR9qkkyMF1odjuNddpBxzeMNC4sKV64JvDawqN86SL",
  "key21": "27Uu1cbKS7NcSgDP7qwXC9mxtZs4FSu79ZqC7Z4gjkGhpndbKo42YDyWfkhCkc2sx3yaz2Q73oo84my9aQ8BPzwY",
  "key22": "H8RTXDE6yKTfz8T4Ax68yxQM92KgdMhdKTAyeXkHVVQe9mq7Hpq9FLLqNUw7NuEMdD5LiqLiU4z6UXKNxaGwuPu",
  "key23": "2RS7VEyi6RDWqBgRXeoVJ9L4nRyUaUWeFP6pH9iFmoVaHqWXvNTfS6c4bycpJGuQ3CQPdVawmx5SBuBu4qZfAGtU",
  "key24": "5uvwG5sRhWNxkvKzsXkcZhQcktu5tKXUedGrzamXM2wBTt8yEyRYqjeRPH8JSZ8KjPg7CEpWd69Cc5fzpQaSHvjp",
  "key25": "5PyUpueKnhfVhYFyruTbsvzbBYG5zgzcoxb2v4ySaTKuScmksuR3D1kMLDPG7QSkJQJf5kZv7GQf7M54wbcC8NQk",
  "key26": "5DsGbpyCYckMio8WWESqS1Cga6Fwbjgqav1Z6dRaSsBjA1rMz3tyXdecEkPF4hbFyesxGoJPmJ5uyDypajXp92qV",
  "key27": "3N6RrFKYvCdgtd9uvu549orkrVksTKUJirKiwUdEGxHCYqAkKpMRiT4Z4Lq2MfzxUFKFgvUkQ7fZDU76g9m5Xuf8",
  "key28": "kETVLrLiRkzEzFAiipBWkM5nmJcQB2J1sJLYMAwUPyDXdGehfRUfkt5sW9sEuiqbt1aH8kF2MJEZvGwRu6EisFD",
  "key29": "5zDjjF8ka3rgP1PaxcFkjerPF2Tu2tEmMjSHhWNz3zx5TANE458ksHgDSLyMRG1Wsq7A5Ut2xPZYEiLszJMHK2FN",
  "key30": "3FmtDduzu5S3ktqkBLBoScVHTUedm9aJUk5fZ8cw9DjJK597StHDcUrvskxPnNUM7zStmqKKq8uAkDXra2T27qxY",
  "key31": "65Csg1xdWsYVboALQeciczB2XJoJr6ruvpZK6SGMPDzKHC2muq6w5zrVQT8JAhuYwgPvWMMpUc6bPv9ndGa1mSM8",
  "key32": "5hZq4iunMwTH4YenjMiRoL2M5GoqjDwktQZ7tQMMK8YKJRZ7LPnHe2CTjk4AnLisaPcfCt9uTstA8Wd6MNQdQC5J",
  "key33": "5ChqZPd76vNRwC2GMwUQMvZojJC9qTvkh2kNqhXbQZGtKjT87VXgdqNBggbQxqf74P17zCzSEkxWo4v2YcV2s74N",
  "key34": "3jDcRYyHLgmJyLYpTiB1wVfqCXNqfcidqZSwPJbGduasjyS1Hbr3MmJQkUPeayieZnDaYzgxe19HjtGU6U7i8mpM",
  "key35": "2p62QipSd75hhtJt1dyNDyghGFunt5MHizvCweb9Xo4eM7dZS4ykUjTr6nm6GC6dzGsQoZHF1dnNFYeDBFJXcKFJ",
  "key36": "22RnwwK7MbTvPhVxsX6oA7SGBX9NdadNGAsYAXx6MToNKk5tC8qv74uMXnq1yryL5MxVdKqcbRK2oB9DTPpyyT5H",
  "key37": "5BVMmfUyn2vCbHRhJ9j8DVHnkb9fsJdnKcGEXfr5KieDJ76BVGUC39B5b79eCmm8xrAfTZCZZddiDc6jsZmwE2wu",
  "key38": "5eYHo1aCuJLHaAFaQisZBaMRjeunoExML1ejoxPNgjUzwsGNb3aahRbuNCu7zHpydpuWGfR2oBUZGmvbWu7FG6br",
  "key39": "4UhZFzk5zoxeuP7tt7k29BsyZBnAvoeAeurcXpaGX32s64CpdrayzCRKW1CpXJVgsw6YXk3Q57XW2ppVpxrpjurB",
  "key40": "3sZpjsGVEtfxfSuATPF6pxcy82Gq1am6KRVyedECAKwPZf2LoRydQpUMQLqb9swrbapTfK1geToHf1q1mgcDDmrp",
  "key41": "4ViWtGViXbmpoW8exB2sqyxEgn6sXHhgMnmPzREMbstDPthwr3ihUrV9hxXhoemNNnd1mWGzEQ7AYZLn754JzKRa"
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
