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
    "PGrWRCQPgRsDqjz8oVt7Nyupkfa7kTzr3uTr7bq7hibZDMk4nYBDWLScqc2CenDuWgsTnnohbcoJ7vBVNrACbL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3axdh9GyZCpneJTeEfu7iZ4AH1CcNUhh7BxvWWnbkJ8NNw41CCKps5SiPesfUeCYKbXZ36s2cm5cdbGnmEfta4eo",
  "key1": "2jrLaRP3PkEAkh7sLg6WMF2CWVinwtg8Na1xEPg4v4a8PGDEZPLErwajB3xEPjiTZWw7XX3gf9EYmTCi4E7qXoVG",
  "key2": "5mrSxVwM2m1AQtEJh3ky3kWDTz8C9Ttxw5FdW1QuAToXj9KmfbfnMh5mqcsFbHPVsVHSjS54NBu6MPGPWjMsvD14",
  "key3": "4JvHHjfyUNKepT21T7KAhpYKAY4HphpGs5E9KiEAZxepiRzhSHsXVxG8tZJMKmzXRHG75SZ9RsATdQZnxCfNHbAo",
  "key4": "3sZr2uoU2yFaanGjWMHicMXyzRFiP6Gdg4YeLMe5oafQUFSYLKmQMNs7LaQ5qeUK57R5VfSE5xBKpcgPxnk95BRn",
  "key5": "kvt8ezJMpQwQmpY6uZHg4bFv3TQ17rdXBWs55UMc49qL47BzQ4wEniFohuJCNAaikg8fafUkDtZUJXVtJV4MdqR",
  "key6": "3f6K81j6eCeW1bCRmrpGEp291C7X9mTASNKBCvMh8FANqqdkp5Y2RBDBeGf9QMuFuSFgGWty99dTFG2NeTw1PXWB",
  "key7": "4hFLXq8rQkHtnsjigGkzKvE4tYikXNoEeCz67DAgwo4gmSzBBCSiZEyKHDEjmaBd2yQicYJJA76F8zyRiTuDCbZT",
  "key8": "3JQJ3BLCGBLNZ5dDguJCsuJU7n5fLJ9GzFF6diL3yuusHp6VkpXdQSZmKZCziB58UhxNybFpokwEMxUxaM9sNKrH",
  "key9": "4NGJqCyMMvX16DUvdthDME65oSyUhm6qdvqvDfpoPhbv8nvxZZvgRupLeRWCov5Yt37wHsHGtWmRxtJcBBv9cm4c",
  "key10": "56iVpuhKbZ3ByvT49x2m24JfEHdw6jpWRjgRS3B1xgZyB4pwjkDmPgnmdyMsYeUN8zSBCA3xXuAAvMLo93f4v13z",
  "key11": "YJ4m3jpu6ceL2g6iCXoYLbNDNEqXEwmMGoXi3FdiYtvPHRd18hsXsqDfzjMKwyiNoX5CcfvyEU5fozYjpsfEexF",
  "key12": "234drxSwtQPYu7PkCVQvTQzoCyXfs5JDW8RYKEgZ3icQV53FWzUTC38TdZDPpMb1QaCw5vGGYLiTB1hUegBQjyk4",
  "key13": "cutAuvkgFfbcyF7nQFh9iyEerLNQkyqLaLfcK5f41f6SpPF5LmNVfohB872n4iXEitJd8CmYBVNN7CDPYnPSG9L",
  "key14": "4ADboEtzjDi1WWc85yhgvF1vCxqsLNaxcDAbdNUKEfnaizh3oNtstnYRXS5s1Sr3sFUQCgYA1LpyuxNLTMrZ2n7r",
  "key15": "3Dyanqb96a7eKcGA9x1BxZCdYStRYinD4PmnuMbibuCDLofj72C7ZyYvn9ZGhusoMbtFf71nVkv5oWYD8eqyazM1",
  "key16": "5U7igYmtKi2SUJsaBn8m8Q2QW42SZNNmtjw8FdqxPqHUSPTzYbmB7b71xGcfydHRXncvtaLqnnGVnVy1BsKKtw4s",
  "key17": "3mXGTG2TME4Sww86VtYW27FF9JbyByh5Wa4uNha1KxtVhUKUEamBRbdtZXbh5AVPxXXcPLTmHnvvhGuiRoQvWtxm",
  "key18": "4vsTn5ffD7omCtcp8wuxgBxak64RiMqwYCZyMhPTzk5K2zMpxq8iGJWY4d99ZpVp4HhGpwqU8Bo9pMQiW2kLHTia",
  "key19": "57f5vLTvfjRMyd3oodFS67gXqwJhy8pyTdHov6dXPPQfL4Uvyxr7m9SpbCCTruKFoYw6iqqqNFrsYipjCZhhz3JB",
  "key20": "5jinLvdNaih5j1GpB9wVdbujqBNV7vJM3Sfknxo1wFuDbS75cBWmk9V1Q38WybDm5obKY4N1xiYxoqSzZGJsoBBQ",
  "key21": "4Nk1K54uej5H3zRsDAKg6bxTQ7jRcuLTdvSxHEZEMULW3NNnzY2pMkLyfHUMXn2fU6dcdWMkq6WyXAdrQN8Jpme",
  "key22": "4Pq2r4V36jY49Zv4FnZR7X8Eyv6WzRvSWM9GuUiZXy9vX1iMbjnzggB5Gi3qEm9hRWp1dkmU7FkmNqqNveW6TJFV",
  "key23": "3HhbdwoRHSKhq8V4TEBFmbsqJbMjGivbVsHvvBGwx15yrCLxDq5NP8MU1h81TBeEwa8cx4uzW86KFgZSmacQFHSw",
  "key24": "39sfB2Xndg1jv7cHYg2VkiWnEx2GzgPHpRqP2xTQHzYDG2HkjPgKPpPHAjt4wStqMDoBWVoXjaBjrtCAk6MunymF",
  "key25": "2scUNT9XNZ6dHynSgJrb2oNCxu6jx8jQWRkETcEu12ywBVTBMjQxFKUT3eVa2gfLuUWfc5XvjESbP2Ppxn5wvaSQ",
  "key26": "hCpvrLhJYgVhzbvKZeKsWpXrBegzXccvJ535hAww2xaQoVLkZcDpEi9FRG1UuWMTsSJxtbMBWZyT6eU6aAoLoBR",
  "key27": "3uyiWVrmoy7aQ3qCAPYrqLe2bMdUBfmwJQzxo9naemg23wdt7eFWCCKCPAsFGYxJL7JJerzX6HtE6Q5if1KE6oKK",
  "key28": "5W6eZtXqdFcdHTdtYQfYt8fqP5LXJzTtoad8Pz5CqpZiC8YFDGitc7seXGGDwwttZSzrkHUXFfANKgp4bq5ovNDR",
  "key29": "26hVHRFquuuB53zRNzXZDNqhhYEAJ8jQvcieFXR5XKrwzu6pHXP8tjWEw8WfkmHYu5A9cv2inck1tyzPhpgcT1ox"
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
