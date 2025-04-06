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
    "5sQjyPuBZdQuy7zonuUe8VMMvQVBr1tXdozDgYfTCZLDdjMqS5cnVGQokAJtJFn3nmiuTKn2ox7UpRribE5tTZqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NYaHBLH27KCkF9ir4WiEgQ2Q98iQQCiwfB5WR2p7pRzzbkLJZ3zrPYqH4GCW9dz4D3w1pWvi6kuJVKTc8xXPxMt",
  "key1": "8djVsmSvFHNnBco3EdAFvrqPNV2wzhn3Z2gguEDyHgZZS7DHrXaXRu1gyMpP3D9htFpbDZMtbBLefn1xmyz3e4r",
  "key2": "5TYg9gQxLcBVX4Nd8ZjBy74KAQFF4qJwuEHnYSzF68DWXWyQLqfVejuC3e9rPtm6Uphpc9HaUqMfFyPJcBCodGcy",
  "key3": "26dh2wR8zicgggT2jpjqJ1oF9mvn3daRkmr71Bp1WxZm1zRfp53ctonGjtXNXAxEGAGDpgpNzCvpbP3Rd1pXQnHA",
  "key4": "36pPyCF7A8AfmN3XDYRMaaZZ1guaT1YLfsBNTd6JxVivaAJeHuV9CrGnsrcZU3N83AEXGwfYfskQozVb7fHmCj8o",
  "key5": "6DXVCmjvCbF1PgwR3GachrkpmtYKqLgJUwAx68WzUiR7BYKfaj7WAVCowdzw6pjhZVqt4VVXQ4FAFBsvBDFn3U4",
  "key6": "turrtsXgC4N6ShKS1ZLgUVXV1qLbyD3f5yqhA6ZU4BdN7m6B9MvaRnfBhN4Kgq3d3yS72GfnjazaPLkPN5cZGCT",
  "key7": "2BxN9me14XpYRmjQGhhx9p1DCDG41JUVQXxGAe8Wt8AVXVbVDr14TXomggdEofrTsncqxUA7rZ7NgD6p7CUKRubq",
  "key8": "2vE3SuANPpcZRQ8Y8y4YTZfqJcR4Z41yybyWzp1eurGzrj7uPrLNPedMgx5iZh3moJHcdKWaqvihfD4MGr7MmEq6",
  "key9": "5o97qxjpo6cdREsNQvYouSF4D9mzES1YU6g5KsTp8UPd8e1txutdYRPKJzEbsiN2V4tN3C4q5rQKvVd2XacY7raf",
  "key10": "5LsFYDizb59QVqPqtLs6D4CVuDKCpyEET17T8aCLcid7YNsnwRNV4rw7D4FojPwtczaVBoKynT6bgq3tQxrvjZ2F",
  "key11": "2pPJ7UGBMM74A345z2niXKbeo6Sx8wZzjMS6fgLDAN1xEQ8KYW3HJwfTbNRdjcnREsJjx6ngQ5cwMb2XZJVFUg5o",
  "key12": "2HZA6FNA1GSvuNYmRiuvVfeQVSvpmtj7tnuPovbRdRt57GLDcxn5HL5e6tLFV73WYjhCvobDhaWK9zYfCr8fvYMV",
  "key13": "4nfeKc2p4aea2r9JQVJU4kJB6NnmqAbnYbzdyxk6HkPZ6WP9X6zG5i1VEEw8VmyTfZnq5Qv2suXCoYc6CED9rVHP",
  "key14": "2UudTohruY151y3McMwbiQ7ZuHMDx44sWAGsKyPqAmY4ZjvqBpYyuhyU3nRvuthVRTh3psU6pqm5CCvoy9X1Xw25",
  "key15": "r7KwSSDLTNSLnG7WaqP41cPkfqiWztFtLVubPmGvWZCTHLWvdSRc8gTKeEj3pAUhTc1g9BJHC8f92ifh98LYFeR",
  "key16": "5X96MFoEtK8s2g7jGmsyoKjxn6bCjCo5mEsJtqNG8T374r8NoZkias97aawr3f4PR2pHMPdP6yAhMWAG2AVDHHi8",
  "key17": "4gmGbo6W3CUThAuRNSmTtwR6u461vq5NzjTDrikgCUeh7UFZHi5HMvuXWeiaaw5oWTwsPdq1DM8ThVmmAbLRC4dY",
  "key18": "3inw5Qs58CCUCA5gufNpWgQqR985Zw72JeTnRQ69zfrf81RVB4qsSY7XDnvLrnSUoYKhTLTPVXTmpPxnv23m82sk",
  "key19": "3c6XiNHQBL9F4AX8bhwnxHXT6ycyjowYNKoNNWAdyyfCm28C8ACyzqB4k1XiWgUx2QsgdqDf4AH8py8jxMbryBHL",
  "key20": "3aqMG9AJDBiikx5XEBk5bwyW2G5ifFjGMJ8rYaHVonR3xeXdZ6FMW5yxJ6xZcq3omfBqg3s8QiYLfXorEqjQNEDY",
  "key21": "3nLX12hKNEeVT57cUaWakEVrNoZnBCeKkZ8DW8SykQhnqvAqgGE4EVGCaNRpQ4bGn6uzEnXA4AhmUrekHKgFStMX",
  "key22": "3gGF7mB9siPAGVk8L8ChbP6FwE2TrFwpNa4X41akb3jmVW6Wg9QhzUq7GKZ5PJ61kMGWKBrRhvPUuLJJHUbxXE5N",
  "key23": "4NSCbp3yuXw3bF7ZcBCwyYFZ72VGQFzkD9nQ8s7zPK2JFnsGUUZTnhdbsV45N4sUJbQAhLsVpS7R7DcctRCbj1id",
  "key24": "25cpBUagFdttRZxDRF2T4nsmtgMUrPhNogYv8rc5G5Unt5Fftc3hbbWuAwYkogG8UBVZmTcbpBCFC3GHikCxceqE",
  "key25": "KwZtJtR1bb6BJVyfFWMjQa7CeWDwvjkWaF3niX9bSniqVY3p3n27G4ZLGREixPqRfqtSs6gqrSRx1u2gAA7tFbs",
  "key26": "4GZty4s1dEnxirqsViFNvrSoEtYj1VacxpmN94kQpAojN6brwfbDzrub2NtdePRetFC6Ar7JXenoZRjZRD5oEFyR",
  "key27": "2Mtrz9M4n1B2BVnyfz8rrgkfegX3Gn2rXXNjUnEHdicnh8Yjqk9FKUBHy1GU4HVyEPnQqTNVPmdWrdWiAbZNyMDe",
  "key28": "4ELQwZ2Ppej9YWYkgNtNVYANebR8Jfy241k2RARkrMYw4Cr5kygRTkZ9icaTCn4LNUWfAvJ9UNJ23Z8FjSXcnLzu",
  "key29": "4sKXsgHRQ6TA2t3QkHbBqwdG8FKGVNP2KEKxn8c8B2kYk61XdKihWHBiG8Hn2K4HTWXQaHhJWH5tSA4fe4S37wFT",
  "key30": "3tE1yuY3NHJpauvzpth5tkTEhUHjjDyDDzKcgccfZGqYAxC7JP3GMEkFd9WLY61nRxP9zVcoWtJ8ZZqsQKkLEoZ8",
  "key31": "3gwXHJFgiT7UJU8GC8AjHPx3FTmoemAHYskDjSQAwV4NyQGmYzYKzWjm9xpqky7uxs7tkCadd46pYXQfxUHbr8d5",
  "key32": "4kb3Lzpgu3cYeogVbtBjo4ZG1a6ZLsaDuSJHVcJsNnosPA3hvW6NGMQMnNJAEvRMaoBwmoJ6EkUSKDCeWRzDvHHf",
  "key33": "U6g5mBdBZvDg4jFA1FB4sB9QU7romAm1vZcHCArxCkB6VjaSd97PtUXcHhPZUrLR6gV9SaTBUE6CyVrY6MD8eeB",
  "key34": "5vD3dfm67PX1PSqDgtL3dEptgKqDEj5BDZYfg36hyNtrhKnTFfNVJFAbYU3GqtCtCEyUt4j5FxF9yWcMAjt8hzi9",
  "key35": "5osAgthX9U8mL7Z3fwStuN5uYk9rXWxNSqmS1yQXCKcxc85NoAjL5HeWuQr15D4ufjhGfZD4ypta1WXrk5JTBeWF",
  "key36": "4XVkVmaBXguSP8YMqxkHRxpMSDU4JJanKe8ECKwW6p3phVokxjJvW9rnSZViin1KUrEDer3geKSnrDkBtYf5Mi6g",
  "key37": "4j7PkAXEwr4Y4TwiB5qJqUfPRFfTthRF5YhpUzHJV7Jfvvhjj2EYzRLVQaRSZrcrubt5vZwfWtkYZRRWs7UwXYsu",
  "key38": "4qfHDXhhwHB1RtD2ZspWm7jKipkB6Rb3wTCrTAKGbKW6ToEWBXM6zyPjYhgEpWVHDYWQp3qEZhZ1ixVYAg4iqsVS",
  "key39": "CGpisaCPiLWVHao1Kjhc9L5ufzJrqg9A7FFDKhzRGCcMxYEdHd5VGeuBofG8WaAuxUj8VqzBT58arDQSNni7NeQ",
  "key40": "2cg16jLicuwCAspgJvTw53Wzh2q3oWLLNzUceGT4rcfmjKF3zYwt5qZhjdkNdo6jpEyeJqC6UafjRxzcsXMpasAA",
  "key41": "36VHgSphMpLG6N5DgPmswZafLapAwaSepNt3aBKUe7dBi6NoXYzo46xk9rCVi1JnQBVNqBrH6ts1vvHF29p5FR8G",
  "key42": "3nmXYVt39x58NbPAuZairzMuuwBb2eAA87vv9kuqYerpbPD7npqzW5RHzN1Fau9Y3hiQVpkFpzcu6n9V2X467teK",
  "key43": "wR4ZZMJfX2SoFqkGr7dF56kxFEziQ3wRCpZGFXJUGqPWzjEZiGbpKC7d1tDMncsZB3EYRpJKBLSsojeapXLksaU",
  "key44": "5kxGStoZvKyYp3YK414nH1U6Yg9vzGzgoe5ve55dxpgetMBsj9QXnA5tt2ShyayFXhQi3uyfmWSkaAQzs33zo3nj",
  "key45": "4ZWqBDpQnmTcK4UC6qzuBXcXjKHKQuCH4w3hYjYvTVuVkzVpEfMv4aQTfgcwKVw5cgmysEPX4rMKQT1jgjHi7Gu6",
  "key46": "3WRuU2y3r3LbmjgjFrRTdKDR1hE98HUZLWo5vWvyrDrpTNgPgtV7MJYaro26HasxBuT6ceebLfsEBXEYenmcvezr",
  "key47": "3sXggrPov6wWXYCzg763dYM6nAEL4rMArVS4Nv55wpJ5phDiFpXRNDUicg2rRagCfU9p7MFdUqbfEH3XuC5jVvrb",
  "key48": "4eeiQ8cS8DBB5N3marTM99edfVy3qyUd3e9XdJp317sR9Gc5mdS25Uy1CpgtAaiMT23pC7E6MC3WtRUpPjpF56xv",
  "key49": "4Qqc6EsjdNpBaHV8M3avTmXLCBDGpZ5ifYqYFqfMsigJFYEDmBQCjR7hUbxHWE6scWKy7waQTKZSrM5bgUDeRR5c"
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
