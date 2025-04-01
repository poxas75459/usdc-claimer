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
    "22A2SQXTF9YdTFWrZuzXTPHSppNC6UM9USSDzoh4CQMsH7Vwj9pji6LqVHryt8x1qAcDJmyyk8hq1xG4yPHAqxGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53WMVvMjbu9uuefC4KFKJxNMJrobNWtGKDPLP1nGxWfv2t7G1MxjeAr1VAEBFeGK4ryZkLcR7UL3qGgtAextLJTp",
  "key1": "5ycUssJ59xowVJPYpmc3nGDKHff6Y93cAhAyBhhPZS882wdDoXnZYYTAGbDYebvuqkCg6xQ7JLmUktJV7jfqD7VT",
  "key2": "4fpYfHMMDWNGy64zvTiGKyumYSwFVFnfQYn2k7UZ1FqVLKb2x3TU5cXGn7rfc7HviaEhHHYDsumtBkDK5GKuktLy",
  "key3": "3tdcqshemrdaaSW3vnFkgXUHbJgVVbz5FsJuyMdz1FoEWezomQFwpaSwsN7PXfpcWnvP3hEzcske6yXxjejw5H89",
  "key4": "34zXfjFgW9SMvfPKPZ3AxqLBrAa6g2ZzqWSXN4LQ3i55HFEa4sEsV9X7TMvmD6KvWKWApige3YbqKvuP3focL7sn",
  "key5": "3sdDGWXQTagpfXnwT6QWGtCa7jedPjo3esa3Y7rjmduXqAx1PXPfsS3LawRk4WiL1PskzRgKMna4Qoz1jCXXFQEM",
  "key6": "5PENU9xCosd3NU9b9SQ6kuW1EjdtQCJiwiVZ6866ab7qUXhCvbumqMquz4ryJWGw1jH7N5H8pWTpRRdFuBoXVNLn",
  "key7": "2KyLUdNJUSdBjCjAL8Z1eLbxvYd3zeH2wDVWUxTG4tkqjHAvDMSH3sSSHhWYC3d4SRpheTgj74JtRuvq3fREdWGf",
  "key8": "3GW91Wnmr1sm5n6nGdXgm4nyXDrgBGcBG4nGKPUjupKvPKyKoRgNkPNTsZ8dh86mvpvNjJDrJoWNXfsPHzBibPd7",
  "key9": "25DsFo3V6xWPgxyZDPeFrRhg7VB5GGQGHK8rkAop9kkV8XDfugz4KZDRvXKU6hNAZWA8UDDZCTZbsMFw4GjPV3Vx",
  "key10": "2GVikd9REQUzkuKhFzdNZvwUjbRe9C3tHpcn4ZnJYfSrySAAR4WF7YsVE5K3AGZ1CSMpB91mJfrifZsSn9UxaiNa",
  "key11": "3A62SBn5RWuPCGjLP9RxKApUYLX251G6A4H5u95xh882nfcYxGti6FMV4nfG2bM6YATeeVDkoMcMaezd8rtNX3Wu",
  "key12": "2NiZHvjZjX18DDbgEszpekcJQnQRpsvY6PGiNiFXd578VqGQzHM5SGofQoyRDqyREGzmbR1FMDWK2o5MctvT6XPq",
  "key13": "fyHHpJn9iAE83jQMSrVnSUCQKnJe77nwZ7nBChJHf2w6GVEQySV2kNdDNU8RyLZ3yeog15VwzTbUvRyj66jeniN",
  "key14": "4wdudZEvYsgeU6yizid9TnWwpzuZt18CDo64eFJ8nQ8m8YkpGK3d9X8HcUZfj7unbqbs4Wb6dhYM4GjUWGKGr4iJ",
  "key15": "3abQ4oQaT2Uhbh9TXZ789zL8zH7M7jL4shFLpMH6hWJGMbmmMQvYHKFFvE31af19mjDkeVq4TwVLqKygRdkYCJtt",
  "key16": "zfekFkzjnw2vYUBV61cjbpoRvL1kWtFpGewtb9JiXBb3Qd7EXMA8oEg8o4P4PkcH1x6aCw9YsUuxeL64ekFk36E",
  "key17": "3Gd7NKQVcQKAT4Dfg7wZbJGb6h6GrmG61P9Pw18Lc1mFzs7aa5SkGcGYao4GLNZ4yXdkBvWvFUT517WJMpzpbbjw",
  "key18": "2VpRuPQAnxARRMiVakPaRiAUkWggWsHnM6rs1NPBXLJvK984GqaJtLbNdyDfTYU42iaGYei4rJVQANydvh5Rddj1",
  "key19": "5JfDgGXTuv5ETSCQcbpcujHJ18pvtCFyn6rEsqNGMUau8C4XRhgjR1NeYSuD2qmM9GQWvsN14ugB77vbG7YrvdAN",
  "key20": "JZykccQ3MC1zwhypxjZYqBeywGz9ge7HYMxZvd9bvQZe5bGetoNX9shTPVomrismN8sdwtqd6kYG5heZaAM8ZJz",
  "key21": "5y7LxoUVwu81iKRTcB8C365fmmDNK5xtoDnZXVNhKyEKZNcA9BsDTfcDvxheepD2ANmJJ5pRcqyUc7VGJZ4NgrXj",
  "key22": "ZqguLhqhyfSmZ4pcWxTcC3ij28KRw3RyHgYq6r4tvGHCYuENzch3AyVZgc9vCUZh2k7yyeKVQiPozK5Zw5W1Wmi",
  "key23": "4Vas87J6HuhEnyLMqbrDZ8nfD3mn1WJ5CNiKa8ThByCwfUgYy4TRKADT4CXaF2eoPjbeSd9HRGefD91FMeEQ1rmC",
  "key24": "3RnKgdCyUtCQ4rJ92NBApiWaNHowPqjG7mHmTLQNVZuBSVw21q957m4fBhaiiu3s54RrsMVSK6wzkrki7aQUs59m",
  "key25": "4vkUJqchK5WjxdPGz2qzMtSNXLEDZ9yGionkfNrB9WJMrLCNU3qab3g1TQx5XMZF53ki8eUbh1XkgvvwepGvuqH5",
  "key26": "25dydABb5hEBcS7LR4QzXAasb88Moas3snhjs7iLESPUXCP3TNYkS6BWjGzBRTAkBgAusJTv6FCP1gHuVSSh4JJi",
  "key27": "4Kmc4TYWKAWtYZ6PqFg4EQfNUp8hf4SMDtruEsoYiygJReTViSChYGqet7W6vNrvZcqhmtyLFqe27PwHB67ZrYEE",
  "key28": "47hFx516QC2pXH51N5ztF8Rk5vmKn3Nq3q7pKNffSPhbTMWiLhwzoQMtMcF8FGg58mgKo3Z4CWfxWsRrDu1UV9sC",
  "key29": "5h1UvhCtdo5psbHXByo6cC9Q1WJrtatoJ1dghNMA6fC7wLw3H5wYtjQ7iz1iF8H1ZeVdCza6ydAtFE7zZAEXihm8",
  "key30": "2VVXtP97Yt64MHRRGtzRTd5ZKFivTU5e81cPdfYwRMLyNWTSEWrQGYVmMK4Zw2ituGdx1mKTnBeLGMBunBEbnG3w",
  "key31": "4eyDvZGnnFEGZZce93NDBMduySwWiQRcFec36iFAXtdXJ69ej5FGKzqF3swiXQDEo8SLxfHF2FgYuqHXfEYQDHKn",
  "key32": "5STbsy5ungpqirj2B9HwspH6pmY5d2jd8MzkifjnAUzLVeWE9RAWdKou4xeuzHmQmkcgxLjni5jdGpUVgc4CH1gD",
  "key33": "2YJciX62xkFkPBvhnpp36FB4inCPtnLHd6Eyj8TKSVqA7GHpX5TekTEQq13qLckTfmXMaBBhQiWJv3bppS4Vaio1",
  "key34": "4Dy1tBzepFSz2cpkctzR4WbS6UQtWi6y7W8Trn7u4bBZ2orB5YTE3d4xScgAeSTSvGSvpfg8xqXqz9NEhVoFsn2N",
  "key35": "2j9BQJj6d66ZpxAZivRRRzaDgZfzSh9C9YPSLUpSJ8USzQXVzQwheKZkxP3bfnDyChEnz5cjya7gGd2dm3DbBquA",
  "key36": "5NPXx2bdQD9e8fx8YV2CS2CTKTkGZoVL6eDdGxjPe9gxJfUVwhiThJsgQCQZN44XwAKeJqkJzhva6vVHhkP7f87i"
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
