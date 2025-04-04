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
    "3FVEEA3VaWY4G5k1LNzsZm43Wx2DLMsE7xkQEdfRqo8QgVY9HMPWsnAVUETKjjaF7U2mZs2vgUtxWyCgVCHuyj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xzREBP6dt4DkuKY1ThU4boyLy4diuvJR7hpNPn4m3vvbT92sFKJbVn9BabiAiqJViJaWaNwEPUn8tJGn7wJrL7d",
  "key1": "3YfsRGgYkhtyUZXqcnJiCS49dyzWA4JFcwueF7VVgRgPJ44UVajRjqQnqMJVaznEuVTord5o7MoXy7tmwKVjS77E",
  "key2": "2pXuYF4aN2of8QQtuFoLB8KWQwr5skEdLLPdtDYu7Qh115yNxzTrZcnTk3aqMewUpBxf6c6DBBXxEb6r7tvHcmqE",
  "key3": "z68hRnjm8sMh7PschzSJFsRECFXmKtUNTcAaCNfuyfhuWJDg6Gcy8nsEZnxMr2TR3hMNHxg7T2NZeJx5tozB4kE",
  "key4": "xHzECcMvBcUXEU9xbKiFJYYSo7envcFpMSGrz4sz4UkXyHvSpEp1xH62kQvMEmR8mDMyLgg8RZV93f3eBzX6Arf",
  "key5": "kudSZCtsQAc5vzgoVtf1ffAYBtmmdoaBB6oR15drQV2Q6LRNDDrMKFfVJ3kcN7ihSV5AK4YacJXaxLYy3CP7Ezx",
  "key6": "6jbDb95iy2KkxZ5MFg9F52HRYU2Yq5MGADfxRKQtMHBTbzoTXocnRPkBFWNEFHzm6sso7EomajzGADwPRxTf1c2",
  "key7": "deg1Tp7xTaRAJXAvaPQSpXpMTVTgr8tkxnd3bHZM5TBpvKrmsqyxD3aBqLw4bhwZx9AUuDDbHSqwqMVUALYtAFT",
  "key8": "4bQ779LHuBKEQv3uCQKnMLyDCVvfLYKH6ua56Egken7SD3hYesazXL57teDnLWeEYgpjgQq18r4dCLfxRdc67mDW",
  "key9": "2W15ZZVhNW2BtMcDT48q47Mr6ra8TR7yo3kbKvsBXqAJoQEVZAmKkbfkuvqDgAic7UzWPo3JRVCs33nUMXwiq4Ny",
  "key10": "5gk2QbdH4V1bo2NS1S1nzuPSMAu2FPpXZPmfMvmpgBUe19LTfwNLx1oZ146TW1diLQmVsXE9cd89mvgYHseJNRZk",
  "key11": "5w3Z4D24NspCJqYt7N8tqjNKVj1KXJzdjq9mqKeqsAh4EFDrEiS3Gv1VjXkzQjNBpJML2BBaFdx9fw5vqZDG3Qjh",
  "key12": "sqTKLRQktHMydnGpvJsz6kvpx2xoB3oW4SXeU95jmTgAAfcqy5cVmBVNxnkw7VGiBmXn6cmucyhz8PxNGcMqubZ",
  "key13": "vUFF7xWXyyoVVmFCpUxaN3oxiyutBK3jfLyh1uyWQBnNeQT6M79zLD4DW6HUZXYQEivzzAVon6qYxQc9aD3gTRN",
  "key14": "2NfrwT9aswjpVYndCq9NBRdgwEKzpb9T8HHqatmXokVgPri4Fx3etAJg3NzpG91ZaA4q4aymJpngPA83tDMJkxJC",
  "key15": "2aJNW9hb6qfh2doAzvJNXbkmzTtna83SjbpwbJ6o3q6qRVXb6JPu2PhkbWbEVNDcYh9ZD5R3zXd2618sCtS7xZ5o",
  "key16": "32KSiiYFXRQEegeAPgZr3wHtErz2yBPLY6L61orJwBWekPwiA2jDWnDh5QzRvWZPdfE3rVxhvUGDJNr5oQ6zgrB2",
  "key17": "2Bz2sa3EefLCBGy64aLLBsqQEwq5n5T1Src36RWFM1Ku3Ae3FPnUcDkZ1Qr87CZQufpd76P6YzWdANWLpLRLKVSk",
  "key18": "3s4r6pYTGsAB41gfZQGNc4N1j3ZutavQq9kkfXXQQ9Fim6GxDp1k3UtwinucjW8MFuH3LqrscJz9cjr8DUHAGc11",
  "key19": "2mjkrNH5wqmSeKLQYPZzhwTW7RjnpfaKZ8jD88iTmcmfSKzzXdTyEqVBztkcpjp51J9meVZ6uN5p6Mdaec7syHMa",
  "key20": "x3Zqo8kaBkTivS8qemiLw5bE5sLqC9wSsTDVY6uY1GyiiEU9uurx3JdgcZbrojTNM4ztdacKrtTJsrapSEbKmRg",
  "key21": "2Nh6QBvtqJJvWoQRQJRdJvQ52aytbmymGhsN5XvyicjwuETo7Y2GtK9V6QgC6PWAftV8Doxk5mP7GRnyggwfTpjy",
  "key22": "4JEzNTkpLh6bCZgG1oYbUJA4HhAJ6bao8j3d1vxfDaXjRAXZHugDoPefTQu3pUTW4gjeU8QZC6GPDLWXxgQ3YMLu",
  "key23": "5APTBuQzaFpu6zKboTrd1MyP7VJEHk9RPSK9o9dZA7Yx4JbTFZVGgKQeKjMuy293r3f5SoAtBzKLbzfj2BVLyPK3",
  "key24": "h1SihKPYyAJJzj7mgASGX44ix6wnMnqa13oAsGCL5H16QH54idkVfat8VFKHzVrnPJNez6SWrAt6vsfVPVfzEfJ",
  "key25": "32yHvsVc4Cpd19eScqhF85pnQzSMFyMkBNRQNHBMYyjiipjERRbrxFrEbHmecQQBFnfeNLxpU3PTRpfvWnudsExz",
  "key26": "652MysdvS3r7tTMnChABrvSimtELBhFnchP18axe4UB8H4H3sGbnEFKy7PvuCgAtF8yaduKVg3xRbA5fbjDVWAM2",
  "key27": "3dQ5QGrBFt5tAzMWwuCHwx4wMXn8FkCVcWRYHgaUefAni2jEiqSJgHULj83ToE5KaMnU2Si5JB3kctDrnrcimGe9",
  "key28": "31GJFhRbH1iiGMxSrmYZU3a4H2X4WQShRetrnP83QbdS27oVLm9uHbaPGWCGH6d8MND5kWnER9qe9jyEr5S6Zzn1",
  "key29": "3GrCgXWBvnPn4QzECKvGYS9WTS4EwuqQYaQHmewfnk4qQbjxpAaCLo61EBGBwTn8NzFTYh8rgitrhY3qy6Vcw4Kx",
  "key30": "XHZcH6vaeyDgNbWvKTWJ1jACMZK5sgcAaPYEZ7ALjPcKGb5ANTwpNVLbejB3mKffaZFFa8mjJZhYpvX6wzSH5gy",
  "key31": "4GAYgeP7eP1sEWmEDqprw6BAxuc7dTa6d6NJsPuBSDui58Tnt6xrnrATRV9NmsogSCGDQ5vSekEmjybgyxUpgYJx",
  "key32": "4pxkJ9qntV8rDfgmrDdYZcjjyoA8XUjArAwYfBfgs2qWeqGqLBUisQVUuDCW9QTNCLFvUReqSjVk6V53Pry2tqJ7",
  "key33": "3oeDhkS1SHKgmhvRLJSig9v9drYS3YSmH4qcnd71D1ae7BniqyPFgiLKWt4jU7QmDTLW3HypGqP9B9BAPddWNREB",
  "key34": "4YwTwuakytobyE8K89vTsEoAjqXcQG1SZMekf3VoEQZTaTAD2SJa4mMydY6zp6Pc4Sszms3mBLLVw3tuuRuyGmJb",
  "key35": "aEbZFmuBFJg62PLFUcahCU9YMShMfCBmzhaFUVUKaR2o3dDABK3PmWZ8WK5ncvo3F4L8C4SJJR55ZAQfq7tiTmJ",
  "key36": "23DV1vav86R7uacKUGvmrQa95eiDH8oKKpHC647YCN2uUmmZ7trNxYJc9QoSzx1Lb4YifW5H5R8VXZSiAr4SnBnJ",
  "key37": "2RjckU2xMwK5H4z5sKfRpXePvzHk3rJLGbYVthC5wbJqNqbxuun1EftFy3uYVFJJt5x3WtKcde1BrX6qRaA2zHoy",
  "key38": "3zy6SE2qNgLivc2QvyfrypQSbRFpW9rx12Ffmz2wmeeaeY8jqbn44T1P4WeqQCi7AZFsS46ZffjcMBQKcxdEb85u",
  "key39": "3fcDqR2XfogbfgNacPG2b1Td2ULCbcaYELkDQmAhQN4tiAfcJMNi25PWSinCUY5J7nxcFZatZum2MkNahpK2c5ht",
  "key40": "63uAnuy4M2Vnnyh6XT5xUfouHMpzCwsGoBbdNLy8nnhio3FFDScdaLDr3YESZCVKFwZUECjnpHmnpYwy2KHxrCzu",
  "key41": "2Qhfka8XSL6PS8HpX7wwgPwDnPhJbkruGyZqs7Lx5Mdify8VTmQvHWGo7SMBkG8kgBzbCWS6UDXteuA8KaWchokM",
  "key42": "3xN8CngvPnNCXbrNjntBAEnQJUgvBeYF1RymKFebQLTR2vuV6A6WW9e7TTXYn84hQu9QrNV4XvhBTPD2muXDYzZj",
  "key43": "2WRxQfPgY7cd77hR6z8aUSqcEs917ZM8yjVWHn9LJ3XLpr8mHh65c1RpoNyc8eccVNTgCJEPcvaySnqVF4ogcsaD",
  "key44": "3ATpsqgyzZxz9kyL86yqyLsjZcSKEvRryu4rpHcEN6gT1HxN478tV8pmnzh38RSHpwNcgK6p2Kb1hcjnCn3WNc5b",
  "key45": "5U8VnJnsZRgC3vpuboYLYz8dKtaHyxLmhz8kh7j1puLaVpeXnho1UF1MPtWbAXcYCFGwcQUJNNCfXHAW6tCo4UEw",
  "key46": "5uMnbyeQ7QNodkA5H1JuryUJM1KCYJG8MTszteuPPVvxZ4uC8XHE6U1C9Lmzw28qxPErBR4EXvBha516vWFTSSFc",
  "key47": "4gHE5QFsCecK4N39xoXAnqMX6XFjiMeC9FoPgSkHWg1nDFXqbRpP5ugCKpSmK7XrhJJHAe5caUbCMVf9KCfUYQQn",
  "key48": "4C2g2kdmR5X83kbRoSr3HjWKZDiTujdeqkktaQ2s8aLFinZUDucAXqz3qZ9PKeoKo1sMQps3WT4K84ymaoMTmE1G"
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
