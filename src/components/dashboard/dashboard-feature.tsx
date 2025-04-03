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
    "489kMjLhwd6bLHT4RiBYu2cJCDBi4z29VxUntaMHFmUEkStKQzyTrohpRbE3KtByQzHdCHbuhM5RXFFBdbQE51cN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t5rJC91DuapvGqyuh79QT1RWLR2KJ2i73Bv1pScS66gi3MeNqvWcKRZftXwaKVeJqXC9RHB8GSeiMRiq5W9Q9k9",
  "key1": "5bgTunvQw6mCmWEotADqrwKE8k4aFDDmmm9reXsREj3fxJx1T8XmfgtujvzTKDjZ26ANnNPhowirWSmM3qDA9iPw",
  "key2": "5Jg2sThqk1vmxyPQPSQrsTTEe4u5R8kukuc7o8C2mSGgszspaCUR5pE4ZdP4fj4K7SM5HKSqGGZNwaLsMxn87mjq",
  "key3": "5Gvs9eciJ18yU3v6fGSoMUUxcBzXzcLhLghfT2RMcjqVWzXaQpskeUEaRFtmSfLKAryAuXNF4ygc7Vpvgv1eYgzL",
  "key4": "4b8B6XATu6NHtRM62CieYk6aRzY4zgi7qUjH1vF6RE8iPBHoPMwbQhuEPWNchyKKcyF2EtvCu9bo9U9Uc3fHR6Go",
  "key5": "3NCQe4br8J8edHHEi1MMMs93hooykxm9upXxbvupQyRadMRsNnRp4DpU1HzxkBrP9dE8vVpgtieTotJz2ytn4Sut",
  "key6": "5ZaVo41UM8SHhmLpwt48GKWqJdtAkKU1FoBZJEDHhTjSv7jZwRRxqzPFgosZF9XMYU8ZNtiBMcmh2LMBVw9wRNjA",
  "key7": "GUTSnYH2SK46DwchHTzY47TRrV6HBnemQm3AJzijqGnGSonKcViBiC33W1XDsJF9kYipkwANX5HtjuyRxHLKMBn",
  "key8": "67boRXC6QtMBYkvSp6H4DutQX5J5D2XVw6FvniyYTKQdhbAb3sJg1CqXhCXpJ8RMvNZF2yF6JyUcX5VuMELtHbMe",
  "key9": "4pevKayYFF3UudXz3oAjuYb5CT71ieABSNTKYhpbceKQKH7Th5an85De4bps9iuDQcTDAf2e78mYwv633776sp9f",
  "key10": "2q6ebmg8CjZJVnvf9wENy78gV4ztw4gvvKiiSP88eVwzxVeN7DsVZXeM6XJQcVbiramUomWrQFBignY4FwcWaNE7",
  "key11": "3V6PKhjZ6FCeg93vzVKbTBTc1z4Hpua8Mq73pJhwAo9Law94DPfMQ1FWZxF9m8g7gmQfxBCrntx4rAXH7f5iQLbW",
  "key12": "atfTNB84tZnrMnHg1TkvCy1JwnjajTNrUrtk4Uf3eML3WuwP6cpgYjb2peouy6PZ2QmrdACTZ958uaVUkxub8cQ",
  "key13": "5PAQiuxHAvu7UKwoTn9BFbKkJzSpcva44uq9fbY8oqT54PVRGbfxr43mju561jWsUSsj3qhtJfCvuAq5MFxRrdMG",
  "key14": "3oeZofwfLjTPz1wvSTpGBKYYm7tEkMu9ZRr9fWQr9qCjurW78sbw9S9fkpBcsctLren7oWRUd5MWBg9PZVR3GqNU",
  "key15": "2WmbHnqKFAYncDsTpmTyUSJRzC3x1Rnrm62UVVuAQdP7HAju6yZreJVJCk1JHZZuF63BG2tyrVQZk6eiFdn4LNqu",
  "key16": "3nPhogvwy39fNadHqsS8nUWJ7E8PxYBaX4peUVZkahWJ4sPkiTAonUNPfh524SrgPzS2uXDKrBJ3ANR284yV82D5",
  "key17": "5AuNvx5q5DWp6HtVSqLL2xsHdb15aG1qxRhTK5FRsFAFrPoSuQmongS7V2uUTPoLfJKBUmkd7P8fvojVZCbtm4sS",
  "key18": "auXHE6SERy91ZFj1gSca3vFB4ke5hGYfz7QPG2aun1SyiFo7XRGQJcunSqJCS5BeiaSrXEkevjkssTw1QjB6FLE",
  "key19": "2DzvBPV6WM7fQ6QohUfE6UNWxJyxX7ndBCCr5QiCGNSJXDWdk9dV3M9q3UhSY2NikksFDVn9kU8kiR1oU5G1ouZS",
  "key20": "5ETSxKbAhsBFJEGmX7FsWC4HHHyuSwZHMWrTMxA1AkwtXK4buq228mXB2F6wUstuHKbye28AYXnB6fjDfRGFD8i2",
  "key21": "3Z2XZMAnMtR6F26rmV9gwnnXWzZvR6j6jzSxZbfxLrFBkw53Kv3pKb2PPvL3N8uocLHnQCNu8yZm1Uz8XuBEppuf",
  "key22": "41go2DWonCdWWsP1kJWFuVsvJgi3TDuZTnAnqoFKitABQeDrsMxAc5CHVuxeJbsDU3N6uEXsemVk5JktKLXmoLS3",
  "key23": "4ZSFE5XSJm8B3TpK4y9npsYuHQJpKSta6nJoHkqVrmD8BjDdmADWLtHHv8SWQxXDH9YLq9vuMda1ddVVdRrdbuPn",
  "key24": "3NTLJgWzZAzyKkLugrvyUT3YDVRvGKdGBiSnbCpjgBfeRSdy6BHZcstDHRXtRPnUY4giqsNY9s9UxuuV57PqySaX",
  "key25": "4x7miTGwnZGpbNrCBqFUvmZnkr3nKDxgX1z9W4jzA6ZfKvXTTEERTdSFHkbFTSz8HpHA5eZSL1uh17SP2ZgftcAJ",
  "key26": "5d3fh7cR8sg6HB834hRUeTGkkQhojgTFmjXY8UrFMopk766mYyZxmxM5H3Wqm5XSB6AQ4aUva1oo1wc3Sn4znRcN",
  "key27": "3Rot1FoUDNfVEvuuDvYuSu8oobzCKgojvDaZRvQRdkKaQVqFfkoGBCcsMiutxwswyzsa9uXyt9didr7ofg1r2Lkj",
  "key28": "2i1NqC1YXEcznP5KCUmTPziaYRQari2uG2mBwVoWshPVkNqLvfDCuf1sxFiwSjFywWUcJM9KsnH4m9o96i49mUmg",
  "key29": "nvB6ztj8Vxb4Bgv8VTtMy1qEWipBdAnWpW7zhCkoysHuBbCXogtq4LdPcMYXm1dFBAZXQv7EBqtAQogSi8N7osu",
  "key30": "4tocieYUdVBv6MUvVGD7GnMKKw9twzdAxaNnr9QjysHZevobXfiFsEtf4Gh22E8XWJtwijsj2WQqr3MJHzHDB8wn",
  "key31": "59p9fBYPPYpmRRVWhEBrqnoe1ahQG7wdJtDiRftbxqtKFqdrvgEuq7ZsKATfm62HYbH7cVutc8VCqq481VZtGVXL",
  "key32": "38vAKKPg398q4Yy6FN4UPY9uicwwVjDiJ2YRnbAZwDvm7ExThB7qQ5t3q56HnEQBgT61TRNFMDnMsBUEtvyEgnDb",
  "key33": "2iiLt1Twrv99qEkcVmvzwocz5UthqCCFiry6J5bfQZnjouWY4gzZVvxxvCinqhHqYnMSWG4zwyvUhWE2wv3QVMBX",
  "key34": "49Ss4Cwu3Fwy5ihhp7vP74UTewF8HpQvTWLZnmLUWTqS9yqFdnfnkXtbXDu8mLPYhh6GBTe5T7Xg5ARYKNdYKgWK",
  "key35": "546CXSCpz1dsUA8ken54zYBqYhprCSUoD2E6jCGDkqAysG7jqRfB9AAndkRZSEjWkKprooNVZzNkVRGLF3fUKSUo",
  "key36": "5LnDDDroDtpDAGLnKgPz32YEbbRxdHTdMpTvjM6HFp1JK6AhFEToB9DcnHGLwbSDrR8bLNEoeA4Ggjt82r8bBiKu",
  "key37": "uPUaP2yzccpHA5b6wr9VCwvVr4HicfeQhpnbvXKafkczPimeuXSQbS7cbDQ9zWA9eyX9up9irP2MVpY2BTYKujQ",
  "key38": "2GdJdab8RyAFRoVnVSBhLLt1eHDNB2mvaWc7yBPKXTYqjbNob4e4ZDqope1gfPsEZsUEsgrFYjrPnhR4dCxtzFWk"
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
