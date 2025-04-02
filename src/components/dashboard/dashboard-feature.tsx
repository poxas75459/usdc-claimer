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
    "51pVa2yWFLJiFfgDFnZDj7TVDDSfz2SHYj8kdoDQ94P7K55YrN2cMUbr1hyVGzhQKM18UzYnKiDJU8R13djqr7bB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z1x2yWETVeMC4rKBfJg238w7bNqcuMKjZ2rKBmPcRwp3y4rsp3j7f9ESHeU4PeE2u1NFK3RjtSRZrQVeykvJvFB",
  "key1": "5uKZh4Qb8ahCGDka3YD8S6PQGMpaL55vimFrCjfsYrs63PxWeDVLckbdLG1fd1VEwNmS5hjKxf34rLaQmnYriadL",
  "key2": "5BSyL1gschHqYz2Shu8gYqaQnoNdmvZp5tdzJ2o4YXUo63KkTodLgjENJUE9tqhPz2XGjhisSNimKVqRVgDmxxCr",
  "key3": "3YGsBr3vDy3xCytjjX9DAtWUuUYzCPJJh1G3KQaVzELxDqEkoHQCrFYYDjauHRLvmQXTZhHMA74UaEbDF8JBABbw",
  "key4": "e4oNhFgVYHiboFs8QMdNkJaWfQdS4sstxkwm43HeR3sBMjTB2auhj1hAFSM9UGQ4Pen3sYhdp5HonCZuFna559n",
  "key5": "5sCuXrgiSPFRqdKx9VhHq6JtUF6EtDvtxi86oTCzkNN24z8wFy8ZCNc4YPYfvpv8XULDf4Yia33JNbkPzbBrP4ww",
  "key6": "2jfYDY17yx8jcgZM5Aqz2xEhwYERe9P6X1htJFjkGtv3a3cnf3upoC1FbwwojUnZgVXm8wn3jF6eJM3HZREoq55w",
  "key7": "4zQrrVoowwV1BFPF96k2fRJu7DPaGfUsH4FRgfLpUgayNxg98mB9YZxRMGj3Hba3N1i4bitLy74sMMChsLY3ApF7",
  "key8": "7pNp2hQct66bPoH5RMrcQZ2sXpi7uph7S6CDbiBjwUYMyBjACXfqrHSU8sU6KWrH9Sm6gfNcEAaBYr2yMZ2QWMJ",
  "key9": "5UrFULmR26sS3zQTVh5TwKDRVYz3iDsUBDQMbVvwcEyekATJnLSVTJvSBkupQPJ6h5vbbLWd18VnZc2XMwWPewui",
  "key10": "55d2k3Hdj64rnNTLiatskphJ7hiFj3BDGmafm9VooouW4Ctx2YHA9ssAjrTFjzpBmDJXfNYUpTxAvdkuyPaoAFao",
  "key11": "5EPwnEMhmijK9bhtGBtTjdvJyHTszn4nniy4zxEatAFKA4RLswKZC8f7HmWjvnzYQXJV6NFwMBfzD1HKYEnBCbmw",
  "key12": "Urjv9vrEzitjpkUmoz5UeuNGGPbRCjpCtgfnqhWaydNHkyNsVuPzqXSYvveaXowfPzWnS4xfHRcGBVmjy8TcnXz",
  "key13": "261SwmcgiMttCVHTx31ov7PF1gfmUPY9SJ8LQ7S7NjzZ2DjBiUgStCXST58WzPyN3UsAsF5EBCy42J3h9tWTGymq",
  "key14": "2qX4cczrfx6WynVYosDFiryTzCWCT3DSMVJtM2izPixLAdpq8UyReTWCtJtZ9PiJfP4ksPmxE5oqdWZL1dUHG7DN",
  "key15": "3Di6hxdzziPRZaDiLgGmGRmpjVDjZDHYcZvG48x3Fa9yUyXFhUHn1Vb4FsuAvVvCPHokuH4kHYpw5nCsggx5VN8j",
  "key16": "2M1V1BRe8fKpkJvuJr9NBDD66oNU9ZoE3JoUJYAhCFwM6CJajhA7Pfy4ZrVKHWEv7iQUj24xxF3tH5WzsbMuYAGz",
  "key17": "VEVu3Si5artKPPRcKZpsB3mMEz41tHSnQY4josA4oUUY3LeFtFFb1uAdwJu5NvwLY2A4s86UptLE4Dn5HmUL8Sr",
  "key18": "6xbgBNpnKAooBMH4oRaYu3JVnXEejAYr8tprG25hwNDvnP3EVdnGCGhmALAipvvgES1gefpCKZ2vuhSZzQHKNCv",
  "key19": "2ZWxPXgYFnQ1S1ca6yVwpbPygGvAUx5g8jTGZJRXqm6pfoFSshE1jRdnFoV5dUUXKQwc2GSbmb4yNMcuAHYGrBsR",
  "key20": "2QsikS8HcPYqQfZ91MasdPSr8zxEXd6wiys2EkwipsKRTxQUH1L4cu1CHvUsVhn2DZB7yCzx3kExzZe1sw193gZP",
  "key21": "5DX96dwZhBCF2gxtbvdwWA9JXskuxKPvp8UHPSw7xjAoPdMWtyW7Frf3KHmGCHroZvaCMYLZuwrfxPiKxdgTxTRm",
  "key22": "3dZaTSyNewWWK2jz8J7osokrUwQujRYhLmpoaJYb52Ut8R8NXSJHyd3zz9jm4dTjrqkQNCyCGQcBNdSNcd4nJoZJ",
  "key23": "4xVSPsN81w79HUqvN17oYkPbrfsz7XappqEVWxB329LscFRQBCnmRdubuXKtm6iDDejhTPuZcGMFb7rHETJ86Uvs",
  "key24": "4jBgpD67UyDFUyNPAvsyjyJv6zTJjNyzSYkrGYJ8istCDZ6dGMD52fSoGTCyVaZ8N98hoaED53SrDrp6mj6tbUNR",
  "key25": "TXWzgCcfxnUTSuUED6rVhktWt3eEWTUXrs9C3UsBwBv5YEarSvmsmAUkS8k4LfBSvnWoK1VLNDryRzWfuNFDNan",
  "key26": "2UGcMDPKasktmriXTuiCwexqJzaP7PAvEDDNoDN6veypPoa7Myq6Y8T5QRKnJC7BXNG3X5gpaCHykeqaRadaSYMo",
  "key27": "2wWXh7NBEPziyffpBR71NA8vTUeiMjGqrZYcbFGaCfnr15yf5Cau1U9eQGTtANbFf9Vq4FopHkFWJZ12k8QxkoQq",
  "key28": "5xqZGTRpeoZqoic6GgsvKHXXXGsDufDu1fNTm7d8TTHdMBFtS1WEqXe7xepUiTQ3UUZedLbnWVNB436QNGCDtYrq",
  "key29": "E9wimzT8dNZ26WnxWsNYHSNX9ErjZCCGb5XUBKg6RQ4tkLv8zfNBjFnkk9Y9avd4DRBLivCpmGAKb7xkhb6Mstx",
  "key30": "23GFVbPZVhkomhTsqmNFeDmJ7AeE57FFkoKcVUmPd6p4t7ComRXnn7Du894W6yYhp9AXVgRvXqKk8VphewWQYrX6",
  "key31": "Mwr5xUJGXWjYhbX2mcaDyCX8ojsmU712nEzLgMP17wmN8xoyeTX7DoEuRTq5Zsa2TTrqkPSXryCZchfLu4rPa4X"
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
