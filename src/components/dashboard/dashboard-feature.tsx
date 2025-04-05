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
    "5RGUd3vH7TT3anAxcekuc2h8BEvxEpEdcnZPdXpuHXvjsDF5Csh5wjjQNPvRxBwyiokVyZXPvjZURNhB197jLJoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W94Y2fCPbL3qiYYLjNV3PpnR8B1YjZeZgSm5QKcFYpQqgqzfnctM7sGQFmZEcJUC52Ge3y4StTufP1TnS7uvC8Z",
  "key1": "ZQ7kNuCFP5QjXvJykej9ZLMxmL4pfVce5Qq7Jxrjuct8PGGCxY3BFRzycBMTsVGcAmRuyLt5wgzYmZWgvsGMiB5",
  "key2": "4ZwKkE2Z8Xaw6FqkQfeP5gYeYm6HBQzRY6jDC2HHTehoLbcWZKQPdT6xszmoC9XRemZB3Xpjmi51zyt8ghqtkbzZ",
  "key3": "3EwughmVtQLb2W8KRFiy8U6RfiKxNxpGLbgTuxAczqZ5dpyvPVyceGjbhf8LrzyNrT6jYguZnyNcpYTFTY7zYL4Q",
  "key4": "42kACgVF7Q6HhsQd99EkaH5HPzbGWXocT9scwFDNfb1REnbbcayYRF41UdbSYEzKgjQUabn2twFSbSd5TcUFpRsM",
  "key5": "48UugfQG4puxJeoeMcckvWaPhWfgzCqN3s9LKXSbK3CtQDL8hx3dsYqdq9mXU6f1WnTrr74GziPLXELFhUQwrLpY",
  "key6": "3yZRNZjvEdrEZhJF1wyXgBvWLSncAWRxQEWtvxwC4WPSmW564CrtL1TAh4xQCjHjvNzaLDmJRymnNcJqva5RdqV2",
  "key7": "32tSZtADshdpYJsiAvQH5ikoKdZoeGKeUnQyF4PHUeofSb4fA1D1GddwvXC5y38wWqCSRBTKFQKpFp2TG1fCWZQv",
  "key8": "4GPGgsdcr1bkUKdvVtNTixL3draTaBKSXWRV8FohXzADi1BNJNSKP1HD6967KKxuwjKHaUf28zdoZ2XTqCm3HJgc",
  "key9": "5D6vRyQfPxQYVxPvsHLmRqECpD1Jxrem7LRP7ExNM2TNLKMzRNV7BFmJEXV15QLRjJPUSP9U5riyX6BRp4wViKkd",
  "key10": "5jC4mGmyxYNnwjCGpTv37xP29D13qkKmSSYM9ZMSzeCTQggC5UPDFRkeRoUJA9kn2gAVr4NBUMihunxzHpZiWcBB",
  "key11": "pjjnzp7dGqncMNWECyU9iSGEHS2PAzZd6B5v5z9uMFkW7oZBHQ1Vf8yw9jgQHt8yh22rJKR2bfzCAMSq5MyvQbB",
  "key12": "2j4UVq7aj3xiYwDg7Z4Txxe3SkFi2DAVux7a4J8Wo3kqX76FPkomqKGRKBA4dgkgLd2XvXbANfANDy289nN39XWq",
  "key13": "57RgeHntZdFv18KLFswUDYEriAcLamNVgqYuAwGEg18yVwQE7Sg5s6aSKBCtKSJnBjtR1QiVdb9qcbg3yX8UsCDh",
  "key14": "3j8N3gBk1ovZBXV91Zf6XEtX9r98QFU1dLpeMvt6ucZYVpus7A8DrfNvDe1Yw8RYg4S5divnuFLR3kXtSNfACFac",
  "key15": "Vs4xinhEzTHjN63rs28RrGY73z4Kx44QYBTeSPHmE3mJY7cVJuv54g7MSUiSSfvdGAt2noJkKdZgPiDVWuBRaxe",
  "key16": "2XMKcAuYBTU7jiXiPofPRybFMzJYK2bGDr3EEk8sjxovcPSRVzSRzwWEavRdpUonXgo1jb6QybVwoj3sDoptwJZc",
  "key17": "4d7hRnxHtFDLtyQo8pQujXWR6Ua7Ch2Htgpo2oDMLUfJsCxsoTkUBoRnd6AMjtGawTDxFrb81tJMNW1rLU7YDaGM",
  "key18": "BQYekuW5WNGDCMmN19zCAhTD18Sq5nzrf8bnNVjcBbQziUJcxct3nYTMBqLD1YcMnK7GcFMoX8boQrn8MRvcUD2",
  "key19": "3MoBc7anRgBnh2rGxGhCP5yTyUzyU5vfEbXLP5YeRn5beZkrVjtVUhB3dGfAUHeGeP1ebztDLWsivg1WR9ozL9bK",
  "key20": "5B8v3eyhGhyTt4uB8SkBukXgDJPbJi7LpvGg4e4rGPUm43DcLv6XSoEQDC1NhPN8ybmAH8BE52sRcJqxbBezix1H",
  "key21": "3zPoN4Ls2qyRgzJ9gpYCt9cmtmJDEH6rC9vazRh3oXce5tWbwtJBE8TMkqTQMkdq7pEUfw4dvcXuZkUtACAx3U72",
  "key22": "3fZjzq5Ybk5Qen8UU2KseoWws8CjC2V3Cz7BYdxvXp1eun361VbY8521kpBLBWqmeTUAWVK55qVvzoVV8Lr8sTkC",
  "key23": "3jdKqU7L9Vc54nVgY7Pa7xHVBoGDEqUEU78c6VNooPdzpiDg1pEP2Pki1J7GwMqJ89dT5cmf83LiPfmc6AhmTWY3",
  "key24": "2Ta6ZjLnf5naEQzRiBiVpzaFZKbz4RBEa2ExpB9mFYUT91BdMCMBfN4EAEJwvipNwNyZrprSovpaaUQJ9zCkDsHi",
  "key25": "3xK7pBdLA58LgpnyobJtKaLz6kK6oo6bavGwmAqTrPuXN8wGEXsf8jTqhpUvXdJdyC857vHZ4yM4KsGNuHEPL8v7",
  "key26": "DDdNL2aiRpsmBEJSAsTzWtSwTtkbNnL6knDaSKdnzD91G8zZu2VHkjBraFYGaWyRXzr6DwNmJWRmLvhAis86oHT",
  "key27": "3X4EjoeUK9J2z9so972MDeHxfmGcU9YT2zvEt3Uo4kPCRU4yvXbmxHuyBLH4iY16ocWK6aGFjMS5M67dEQhA4Kyo",
  "key28": "iK6wVMJQDqY18oWcrzLqZVT1t7qHTTkswiRjaxNgtdySXQFmDRxTUxfKXY1TMK65b2EGESNtPdHRiN7uqZrbMpw",
  "key29": "3hNGpunKUVyyBkqXTySVdUv17K5481f7guEiCHxyc3nS4CJyRJKxfjC5NvHRxVGjxytcvjkZ1Qneu31cPbEt2s1K",
  "key30": "2v5xTsYjya72cvxAY8CzGy4QhvHjNc6HoEeh1SqvfJWu16MCrnJXykqUvxUyeBKKydv6LV6YD4vFrZrxobKWsmyo",
  "key31": "cPXnY39aLa51DksGw9wDXZuFd21c7WzPNoYzHxhxsTN6b2FrsWr78Eokd3aqyT2cu7gaDrije8wUS8UXrwjjxVv",
  "key32": "4WYuvZrUsfvyhM8Dv6tTzBKBuBYa1VZMCNNjV8UmHQgFx71f4iEGQXwFBcBNgCzY7U6NttMA95ne5Sq3D5QExtVm",
  "key33": "3okDoVu8Z8Z7zZk6SS6xAc8PaEfFzSehgzXVf66qpznqijVNy6v23GcCxSbG84YTZKwoTQ9irp54B98BQzxCGM5N",
  "key34": "3b7KyDRYZ8jzJU5iKyFc8P2EvoTgfdd6ZdnFG9ZTKYgMJPUcw95PXExYB9pNVzFm8tQw9x7J1bX9NexuyHiXdLxD"
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
