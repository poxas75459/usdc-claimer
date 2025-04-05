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
    "3TrTTfjaQNGg5ccdq8bD46CLG2zzUaBx26eFnpNRfp6uWMSABhB8ZZzRS5xrjLjUQth6ty11LCoSgmwYPC5Wv6CM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dAZ1tBBwctMZowrnPD4tFqPKisTEFSYeE491FbUYf6CXnxo1biHsoahFUhuZUvdGXcfPZGi3TzAbGPCGs7YCLiT",
  "key1": "2JbVmwQ2CEcctGkFf1mcMVGwwdR214PqeoPHX1XtBW5yKJ2R63GhCXMPoWvCJJhss4GNjxecZgVdXAccUUBNHEaJ",
  "key2": "5GabSMGhaRLdVkp2DdbwzmryGG9UgVjYiWbto4zoEveY77mBgCzm9q3UF5c3xiBmbCejLcHLK6EMny4TcWTxcMRd",
  "key3": "39AsRDgMzK7AFxoqZxRSazWJ7DtWUqJRRY5eRdRw7CwTbXbdLia9eKZ2C6oVg1zzfjjVfAXnHZmgShBSCDjJxQtf",
  "key4": "2tUFron9QsSSt9aLFW8siacrAqaw7NTAJmT3HpFKPaq5xaQgfiQv3xocQ8wWf5xr9jptdtgSf31dB4wgzXesr7bB",
  "key5": "5sfhGJ6RSx8WdQjddJLLF27cgY4SrVwG3xBA3wBQfvz3Gxw3zCw1Re3voR2TBL5H5Dukm4c85FS647NqEnsvRrPi",
  "key6": "26867Vs7Uxt4WeNY5yVXoAcJ4YDG64WW3aittE55Kv6TJJC6yxenzRdaWQm8xPeczbaQVuiwohWSxokBKMZwaaGZ",
  "key7": "64rmGdwiN7KXVYBU8FhkE8qLLexvFdn7Lop3gzTGi5FPxysDRjnLEDCyuUXzPRKnsW8vL6ThB8Sdk1ajb6vMp6YY",
  "key8": "5MNrvMhdwtjHNzhQYeVGtftWB1whdKfkRNcgokUd2XZckBzjom5zoHgkuwRgtVrqBkShndkMnFNzBZjFF79AQms8",
  "key9": "Hnnu4vPCkqpFsJ1epmkRcbjruJm4ee1RDNvRMBoaGkHzocCQQF9HeD8kUD9Pd6w9nueSH5xD8mLyDMGp15RCvwz",
  "key10": "5LbbGeexZYvfs7PYhkMCmDAqxGuZWbTBcgewE7rj7Ls7G5Vu8RPAtb6TxfCKsvvUChFR9TGWjFBimjg9QNxGmRtL",
  "key11": "43Dzi3vLGYJMKBemBv7YPJuX2Pu22cEK1F7vs4gZaamPgCRbPus4VxnELb5nsagKGjE7DczQ4yBTW1SHTdC8eZmx",
  "key12": "5SsLszu5n6gBNCH73kNUHTG9iPXx11x3C8TSpRQ2cenKuuM3iny2S6PVLgAq96zfy9TWj9yLWfeCUrwfytVFSiQY",
  "key13": "5PivZHDxXZN4jkY3yvu2RqiDSP7i1BwGv7dPszHqUxKs49EhAdhyt6QZ2N55mG1e8uAJMpnqf2ojQdvXEkT5vgW8",
  "key14": "5FDV1MpZXaBHvxg4AC4j6aQKc9kLJd7yv34HNAvQq8Y8H124gua8KhPfXrC6Zv8Nk2YCPAgxDiLV36qiZAezckQy",
  "key15": "45g6yLDXX1dTMZgzbp5qTrdasxgBnNqXvoPvkjayh1qtsiCsRGRECz8gTjMncLcq7fv7DX6cuS5ECt8WGNQ2Z9RY",
  "key16": "fkY7pjjEkoUwmcm6eQRcEramMDjpvi1ui9ZBmKR2ZPqsV2UMKB9g6jqDrPcXCUhQZ9nB7oUJz7ufLiNhXZCRfGP",
  "key17": "m5ZJJ92HeTEkQPwdUJ61WtFhgezijLTSAU2bW2Ra9Dj1CfabZ4SdVHxPYYcPdnyniZe8JShTV1BeC1o64SacmGb",
  "key18": "3KcJKiXuLieAkDqLqeg96eq8ff1veNRnzAoQdkj3PDDqM92L8ZKh7EDEpDZGBKr4iMtbNCRzG22vALMJWSQmBGQB",
  "key19": "5pPFd2rpQmChrkExA7rHqeFawbuuU2MAxAVaJMZ9VuywYsxehhcjA3cXuBVGhJgUitDMmSzdZDEZLSUMCEy734rj",
  "key20": "WcyxgqovabJmWVgku9wW5Q4zEPzP6GZwrembRMnjN19MGWNu8NwQM8azCUgWWPfBfWgsHj8birFhHHV9bswXznY",
  "key21": "4qZgDCQW2LykY8dm8XFWGo4Bwwxm7YQ2sdres8eJcEgi7yNP7zXpvfk5YvveSny9T6Qta9So6YbagD47kZt5eLBT",
  "key22": "2HaCWLbUMJFqU5Z2nXb4rpFnVeN7uQJYptF66igcatepHEyaSqJ515hbwE9QKZfAZ3KCwdNLJxxLUCQwAt8RLpx8",
  "key23": "3p5efEa2NVF2c7airqLQSFDHpbwYGSecmNkVxh1chuUJKtY924fZsw3vSV6wPaXiPxrFyWzdwh6t8FATRkdRwJ8v",
  "key24": "4jgmrdSFthpS81pZwaxPrXbfzYYjnAeuQzXhxCe6VWevJaj6DFwzF6KboPjUjZqrPybsxjYUohKKRZSjZqt9tSgT",
  "key25": "24hUYBSYQkH4tNf4qJGD3SqkCJdYZpxwnNiJr2AX8E8GBWMSBiAovFCjtGUoSWwhmgL5oUS7SZmTfJZn8LAFkb7h",
  "key26": "2WjJxNo3phwXYjcUgGDV21UBFUQehvAgjkTFhkuNvekhWW9KxQ5Hd5VjykUchujYtbV4ovNaxtB1F6Hmay4fvUAK",
  "key27": "c2k1f1LVcgFtLfAiMvCrHAAqCFh8kvJrp5bsvnfV31CnDSPQB7f8ULqTRFKydbvCyFtAn27UiALf7ugUFABhXcr",
  "key28": "smxCC8RertH2hwdGLXqdZyLgURSTVuLo8KZN79JyMpQkQ361NteLZTGLD3XQ2yJ2WRuujw7F7CRVyyrYreUFqoK",
  "key29": "29eG8rzZqmNzV5JnAih6PbSqZyasiYHhYZQCV37ozHBDuf6QAaQXFuRp2B39fd7kcwWYtPStK8zde35h8XLK4W84",
  "key30": "zi2VzUS64zC9utgWpeVv2GF43nAraLcJYwx1Rqt19wB13E9CfFzZfyj2TzqZyBbaCf8LanBehgm43yAu8JM1Ab4",
  "key31": "3pQ1iWQtR3aJ3QYfpgUJT1ujnHMgiG86nAKsJYwBTV9wE2DDdV2277WQwra47u65iqVD8umJhdWELYTufZHPxJro",
  "key32": "2tbCZh9HmpKDMPUQzvcUXoNMye1BtRJb6GuvJxDp9iazGf95wZPigX7RvZF3hVhFQ9KAUfUZpAed1Unzwb1E96Zn",
  "key33": "4QJzA6dic4xczer9U15mmSa4aZ2CwpMQQpmkamrA9KEZSE6Qe3x15E6quViRiCQ1vDupzaMtTBVFywnRAnBnPj4q",
  "key34": "eZNLudTqbxbnb4QJ5Lax4ty1kM5bLjMmj6sf8vUidtt9LdY2QwLikQQg4yFzDCUATaRo7PM6rhW2y58kvoDJEPR",
  "key35": "33HC8dw1bA3NDTqaU4Hj25rGNxH3TRLdi6MAeV2E8H1ziq8ZRW8o4UrHU5o8PCCsbG9AhoTJAMdk4upoQmWMzXaY",
  "key36": "628RNUCVqV2g1JqqLm9KkZqQQ2hq7dDHhvp6XxVqdV1SKiY8WidMw49dF6yavqQ9zFTCxVnzwPqHsASu9otvMz3K",
  "key37": "42SQbjLVnM1nWKN7CifBJyzFqUVteZ9NmcqkUFMrNh5yny1GMZrKGo3GMm3KeutcsKpw4DqgrNnbTm8gyBzuqc59",
  "key38": "5em94yQ7pkK45tr6qAWtQjqxBFWWuKbSV54q6D9d9zCU3F1tdrXct5W6uvJGLnPnoCD4VbxebQnKrfxEiowxMtVX",
  "key39": "3EtWJhcx5nFN1WJJggAZC1yBW4Cz2An4k7qkV4t1zhUH9ezYHAQ1Wy1cfKMWZki5VYSYFAnvtRyjyDrMAszvkn1u",
  "key40": "3XeDiLHf1f5Nx2RQeuN2U5ka6QahWrPEaPxqgm5nLp6hgFzYZroTvX9XJ8y1YyUjoWLguhTUoEaBQUKkLguDDrBR",
  "key41": "54so1sc1f5W6UTkuZGrVUgcn4bMiYYVcQDCfYAn74J7rBr1Ybgae4e5iHeUhJaZ7HMoBVeH9NRBoKmYRAyBAHhAK",
  "key42": "5G946A3SgTjavHJmD5f7BSzFeaRPfTHBPk8qEV7SNaofH9Qc69KzTTDhDRysR7Jqij6PEFJicUVTdcNSkgAPjh9K",
  "key43": "kR1rgVHcf62tSJZzD8C177RSLttuLeEYAcWSNJYgAyUTk93NLs4bumcThTouuHJ4hx3vSC6KRauVg2wk2g7SDYa"
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
