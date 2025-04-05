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
    "42bAvdN7vBms5LAJEEXyX8xwkFFyjd2dAoR4ZnbZB8xtKiB81M4R84dX5ZzZoAck9qbzjfm3szuVSGih2Qq3pGaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gJQLThnQjdfHKppADYhRbQtNn6XtSScZpM5GNybWc3nZ2q4BhSrCHLcRmqsfZCfo3tfnohWyKZmKHs7mvrtuHmk",
  "key1": "5y7v9sv47A3Gsunf3w66UwdQWVuCLbipG5uv3dki6XXh5MvqGWzZkoHKrYVg8EisKCzuETLdKXFah8tuM9GtoGJs",
  "key2": "5BPKTgQ6uvRMgtLqAVVky3urkTunGrUW9yzHmBbZvRAg1VF2mBC2ZcWk7FEAruWB6juV3xpDyoYJ29bWpbfqmCkT",
  "key3": "r7YZAhL1DNzBeba7wFcVMsNxUaVrXLCRSKQeaVomJWih9xccQy6Z9k6VaMrng3tYxhjG1QY6C9tAVNVD9nNnz37",
  "key4": "5sHXYgPEEY4CKFBqKrXPmWZ5MGK1W8DCs8wX6yjeJ8VCSzgxn8CCdeSG8E83AQ8A27HSbm7cCCDsGN43VbDrqoKE",
  "key5": "5Horq5Kx6TKpEbn73aQrHSbtJixiKBjB8LWfrEy8rRdWjM3u7FY5y8NHyMwGQEL1YAvz6XpA4Fyfcsf2iNt8iD9x",
  "key6": "3rjvthNjVCDJeYuRLBco8dkK411uVYrAP8uwSH4jAqDPfj9rmK9kUPTRaNyGpzCBtoovzFouMnwAFHa1GuHAyzjP",
  "key7": "2AinjQhoNJ3x5LL3fvuoXzYHhDkf3fQzWgiWQzNhhbiCaC5XdcsHwBUCWXf18ZoqE4wPLndgvnwY9zqegxaPwGs",
  "key8": "4iM3XujEDngGBcPU73zkqBzXNjczGY4t4TZPZTCBnk35T5a6HbJRmjWigjMRQCwhcRRJzsbfbRi52BAH6me16zmH",
  "key9": "25oUcMXxthAq9wHECiMzD24C9DcvDGcnF8D4b5QckaCXJNkNxiHRMsms7q5P67VoVW6Aibvf8SGXNVuAD1Aa1UZt",
  "key10": "4C1me5BUbVSjrxnaCAwvbRqF3o8r4mjCHiwh43EZFTaq5DVDa7rxCAD3sDV6CtZhQp93m9BDTiuCcpfk2hdXaxED",
  "key11": "f6yWmmfpbA1QZH2n3J3EU9t75jcxvJZcdBxb86gb86dTrdJWMpzLEak1B91sEiVAD6vkgg1Za6HdkBvd7r83M6J",
  "key12": "5zLKQHQxPCvMdEubDoU7fAhGSpAGWhkarMn6bihgXgpSsZr5pt6eKmJZuFKvrcnR1fs8xhqbV1ad7EPVrEsQuvmz",
  "key13": "3bP7fcuJ4wo4MBugND5xGoRwkf7nvuoPwpY3i3Dd9NPhE7eC3sc7Ggw2qsWZFE6qp62Po7p5ND3Hb4rhTrVDwwQ9",
  "key14": "2wXq1i6sEvcgiRarKe9yoDriiDLoKbAEtK4sNAfYeU994uBrsaeipzfC2yyyJ8cKWFpR2jX4FrDBjRSwoVk4BVYN",
  "key15": "3suhbGjqqLEgbVcrkBPgbECvRenDHg96g1VMAg4VViXF6cCxnZwqrU8aPkeaGTZBxq5BM7exHDpxV5fG9ymLStYz",
  "key16": "3gsyj1vwc1xpm62auMASUtY3sNiDVdbxERbP84Qm1qEgvH7NbdbKFKy9ge9vzqqx8NV6q17HBS7ULf6f2btdBDca",
  "key17": "3MzrwyMAtAoNksCwWjLFB1MUDrpFjPYGUvbxw6GjAeZ3U2xm5fwEiGotbb5QqhHW5ipcx3G5SirkrVXvDJJJiXK3",
  "key18": "5oZiWVNb5AgPbDZgaVc7yFPDd8XTN4ZqwZZC3DUxV7DX9HxYjuGdbjSZsbi6D9jEuuVPVXcWke8FpZcPC8Hv5qxP",
  "key19": "2ZSmMa8BPJKzsNeWZK1Gp9PWQkDF6ueB2CAiovDrX3eDwmfiM7Xcym15KfuDEhLbZ5RX1g7U7DaghYv38zG9m2TR",
  "key20": "3XvhEL5J3iAoZB1AKa1EfviG91Msiy6rNy7uMns65QEcTrWh7t2BnF1x1FF8kwQCr7EzUWnhvxoRDVrS1C2KvJPV",
  "key21": "29Y7XBP4dhJvKKioutHGBdNmatFWqqXryeWNCmzXxNx3ist8hnShecGm8AHihRsRF7j9EXJxhuzKFBCmoNdkXALS",
  "key22": "4WcfpZX3btbZR4uPCL7uFGLtvjY9dfPjvyjpbcbqQg7MoPHgYzhmjThcaviLhWLjg4EHWztb4HTfGMUiqCyM8Kro",
  "key23": "5Kcb1NYqDAQDphos7ArnAqPAZXNWba4uEENhC75TCpSg6xrBoKLxrGuMVkLG9pAvUwaYf6ZBWu9NUiGmreFy7Xms",
  "key24": "qUh6mZUBrztjdK6miwkdGzGMm52oREDkDshZh1n6vB9QyLUtN5qpAKXxjJqDSHjVLUhBHDc45pnn29sre4H2APv",
  "key25": "VSf7Dq8Hj2n9oVL1AnpvHnpgrBZ121ikKyMS76jnGf2Mue9qDZy7CkoXPoWAneUnZoMbPFML8v2EcSzDwH4FGUm",
  "key26": "2wALHaaKUD9GejtAcirhdiFnKNArptKPrHPZCV46VeisixBQfjdVQxT2NA6mhU7t6mVZVpHtgYjEun3KWdtZygSc",
  "key27": "4cHGFgRGeQxYcuK5s1Qw8vHXG22k2NFRU5rdBFNYU1p1jFcc4Wgt41KA22VzEPhpWhpui489tXNZezkAKsehPqxr",
  "key28": "4it9sugjRKvA19dK9vzEFE5dtCd8CQdeN9bCxsj8SAShtcVRp4WknuZjYQRMRUTRemzuGsnaPREECWrQjnqKoYSk",
  "key29": "2UxHZr8A7wGF9NwwVQrzHFLv8ixFtiftfkM7UEEzdyKfeuSRe6ra37eAsrQ5dFHseBV2tNLagCFyRmJRYybydQ7L",
  "key30": "2sh2MXYxp1QLyPmizE7HgZohyZMkuBkSFGY7wg8WAdP82wYm15x37fYfToMpurkcja4yLUWEnVNg3iCG6A5VEFhA",
  "key31": "Gtirud8UhVxWisFnsxzmbHvW1VNH2kDpsEzToqgNB3DcwR9XDKbvA3bgzM1Mr3oZfWdbkTypQ1tNUmKfG3k9aqm",
  "key32": "3rQ4waUcz8Xyp8rrYXJrgR6L32cEfHs9MkTjHFpZBh1oukN1TSyqay8mYChzdu534PZ29BNrkTnvc8nXVEzZoyKR",
  "key33": "4h1EVa78hFpfxhjLrn6aNQJ8Pp49zTeCT6aMHxXpcriR76J2BUixkAxBY2zmVBoZmTJPeBcABaJa1ML5J6NMREJb",
  "key34": "3nfUvD5TFr3RaJqYvhK2HCMULUq3rpELBpfbomruMti7LVrojgpr91qUjawc4mTr6r4jafGcxx7RNLP73mpHVDfa",
  "key35": "3yWLJhE75AZUY51T2USHLXK5wGm8SjKvKHjbWUaMJAw8tHp3XTisbYAPapGbEJnhem1idHKNE6NZiiYTWgCHiC7L",
  "key36": "125GsSXzLUgij6fqCqXmhZXtHNeY9PDLcm2LGYjqym5JzryBLKETPZte2uNFRx6Qwi48KqucCCF8p5yf8AKzDvRF",
  "key37": "2DqujM8Ma1YbXNo5gk5YGtWmtpvnPKxJjrzdHkSNBcWCBmRkCdM5vTjwY6UyZJGMTTvkxJaFUaE2bZKxYSnB5kaB",
  "key38": "4JmKJeoukFNCBbyNbj5qK5xBeHWaLLyNKC7VErhTiAE3VutZdG37MB5PenfZgR5QCRwqctBtcZ5oq9TzfeqZpCaT",
  "key39": "aysKDDqzCnxLyrXzEjSgGpLsKQhXyDFLWg81gU32k5u8vBtuwNeeXG4Q3ywYPr8jHpDJsfjQXkMsTENrZJ4eiaf",
  "key40": "2U7kpvfhkSiUcZVdwwCRcp6isutAzHXibn4x6kTafoNpNroGFSuYhowX6v8HAPhZcHb9MLTuFKFDv5gvVxw1nUJL",
  "key41": "61PqcymEf8edmdTMto4KoFL2Zg4kh3FSoxdADonfvZnY3RtkTuo7HNX7fG5qRWZ1giWwTypZTPFMfSrBCZ7BDNWX"
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
