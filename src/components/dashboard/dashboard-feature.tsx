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
    "3yUh3L3wSHTsgzrMRrj62bHUjuU2ebtdKzw7v1UGasyTFKisQYPq5QCZGCzZh5wfnRpHNcDUn7zKZGGRUZYnEWFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iuupFEAuXW8sn21CZZj6veChxABYzFwZRYUHERiJyuZSEN775puFBgdhERobsLKaiowsZnBBmLraVv2PHxTodC8",
  "key1": "2rkp1PeoVmkDKxZrP2f5rLDTMrFhG34cTArK9Gzi8FMWwXKLamXBaAVNHqA5Ud6neAS9s9JLHeEfyzCCmCuRLsze",
  "key2": "5Yy7zJDMUr9eCemMwbjDb5cY4nYxofjrBC9ydMSPn4RBG2hLVfXtdbfbaaWXqvNfMohMaaQTLphY9oDzZT9dg2Mh",
  "key3": "5C9HATj7ZWG67Rop8DmsXm6o1f9m3xfvwQjRs1wWExw9iSrK4bizXwMy1hyhUbVuxdHzW7d4jLQZzWJfwMg3kaZE",
  "key4": "43Toq5Qw3YEix4NtUjSjgXcxpUhuo4nUupFgkjs3JXo8oKYNZHaNWsspNgCMPADgmBPQRDsD2Y7jw4e1qVaQWd7F",
  "key5": "3H3BqcqBvxv8Tnn3j6X96CGNk7HTg8hs16hzUwkVeEV8LZQHGcMrAi99nDXNUJRTpGxsVgMkcn4YokpUw2t9KASJ",
  "key6": "2D5XGDRg8VVW9hxMwkJU6ADzyqP1KnwyaQoGSpWmJs452eKJMhZR4caF929BVPAMoa98QcKra1a27g24oXWMjEK",
  "key7": "4PGozeGEWZJ9k6prbcSwGj5oV76bDSwKeeJejxLiaqZtffVsPXEGiGe3Dn2u8Bkw6FgqR7uScV7uy5pBXU13xPV7",
  "key8": "5WEetufAJGEGA6DnB5bErCiPPnFttzi3o9fr4mG3KV4zLgNpcAnvJxuMfYUBAYJ49eVqA1DkZ1RTtqs74z5sh3cM",
  "key9": "5xGH9GwTAr7Kug4jQV6kGzMxC2MFmzFVuyUjarPmAZCNWkrhCyVQAp6tue8NyrLyZrq7PYo15TjRNsTkPSNPDXNy",
  "key10": "2MVwhhR3n63kqLrNXsyeQubDDLig7odYSocrpcT2TAbfK7zH23TZD7vUBrKSKXCyuQGJ8Bsg1kMTByaViV75SKG8",
  "key11": "3EBgVAXVZuaxeF6p5PNR596y1To4H1iGmkNBrFr6nSae4izZCBN7sYmwb21kinTLLmGzvd93Ebj7UvafkDxgSWCD",
  "key12": "5WapNcrYQWkirtbRN6XfDCdrgWBodi9XyeNmxmx9hasRhBCidTV4FkqL9duAzGJKPtFogJkc3piC9Ezm8Tjhw2ex",
  "key13": "4jV7ZwqWMaPHDbNwg3JsiTib3Tc5yKZrmKDuoD2UG8s163AQ7myoihzWizhwLTA7mUJ9RrmFUkUM3kkzZqUuXb6c",
  "key14": "MUo8FtbdGe6wrHXVma6WTXx9vaxEbXXvcBac6M626NcsXu9un92NeYNd9pLYB49iF3DUjet7UDHtmDfp2LWxdUm",
  "key15": "5JfFRe6gvg6eZbHbvjKJmcGotE1ia1aDxAcAGcGxPCoqHxqToseYcwuCFRgPi84YHgfF7PWudNgdvvohxUcfbri7",
  "key16": "39vmgAng7BA3EGY5tjeQDRQyMast3GrhyremVtMpFdmxSf8iRyFiXa7zxux4F7sE1FinmHCriA97F8PRw55mJcnk",
  "key17": "TpDSdF1K1D6rfUTLAs9QTr1DzRuAMEUmbugtBeFCknQS6aTdm2G6cyvqfh4qbwVebS5xuJn1twwFFn3GGjTn7Sb",
  "key18": "5eLhDUbKYVBvkAVLDyQ3YbJhWH36tMPHSpHPhgSzHgSTZzNqap6qFqftcqy9pj8Lwio6cqdKYR3fgFQHUDabLg2s",
  "key19": "2rLy52YrFLXjLEi2hTJmN8mMj6eCkD38Ni82gW5BNobaiVvRCEzwKUxKRUbtRnjLYHWBVYUNtx1wLS7vaqpA9NG8",
  "key20": "4E3rgUSZ1jcSEivePGaVRZnhpmFVLsBcR2z3LAi3F4YxUGMXcqKtmVV4SDL3KTRPPux8zUb7zgeYGGqfZUo9cATv",
  "key21": "5FWJ7HnzrTbh7suD2fqnEHGjhjG2nVopg9psFrDcrD7EwnUV7uAEyhZUdYpi4QwJPzXVtU1dmb9fQwGtLyJQpbwN",
  "key22": "2B1BUYnvhtadcMSPgLeCckcF7omsbjuthsEc3TAgFC3jhhrW8KHRXQCBVBffhFS2ANLwWj2cieig3Mx9EpL7jvsD",
  "key23": "2CtV1JBJLCYMVH5LDZAhBrYH65iydfdyPu3iDR74nUBJUuiGe1y7e41BxCNZs1jfy5eojfr6bv7hgz3uZjbRftEt",
  "key24": "5pwr2uEZvf1MihLZsP6H7T2BpGfz4ZAjz9gAzaEmRzLiB158ArTJoTyDK95Cba4J62atuBix1NYsqN3NsYLV4kTq",
  "key25": "34qjdxSAEHrZKczDHa2zW4sAt3CrQ4pxNqz81yYtkvfmj6spYyPSdNTsSSJmMwZV3K6CsU1Lovv694zcyJX2gTSe",
  "key26": "3nMw9KVhtGBo7tyHEfpQjaHa6kqZmhD6rRSzuGs42UA7xYVSuQ3LSxRAgF8RF2DaJN6Mdb5e6L1urWvRx7hDAanM",
  "key27": "41SbSEPaS96DRAbFsxsHYPgSYvgu8faiYw4iTyLGEUSSrXsSFcerJcGvYbCE2HhTjfBTcCkxe3JZgCv9ojWfsFWm",
  "key28": "5DC6oYBDezJZvnxC7mKnAnaW6FtCxvCN5RK8Zx1RFQYSzq67Bqn8SiWk5efahyrtrPpNKk4BFdZBzqf5Da7Nigcp",
  "key29": "4eDvUHeRaDt2NpeAVWXWJHjvDeS27N5ekHCbV8P9vLfULUfnE6pUsdMVecHzGvcLCV47768QFfQGh8dTcdPsNuai",
  "key30": "3gwyEeFoRqCZHCTq85cdSaRXaDjGGxNiKvh82oZRmT3utWSzZ4SpxQ7cHGcWY6gXpyizQ2iJQd7hwCzZYMKgLWS4",
  "key31": "2JAGmgUaedyW9H6xWQtwBVFzn3Z33JqKJndvm6gcjEMVspWAUou6X417itSdCpexa9mzwZFQRrEkdXUBVN14c6bq",
  "key32": "32XVszyPXD17ofpCGtw8QbM9jnboMb5MX2fBsGjE92eA1xfxCptnqnz9irDtknnBuPn99w7xNMg2vHvF6mGHcdYX",
  "key33": "384G5Wy8o6XSg2hoxVb6zwdyX8juwBPZNJACSkDThXfBsUpFd8PxJvfHELHGcVxXEmBGb1RnshXSj5JfnG4ATAqp",
  "key34": "4eELhQZwzP9qiPRzUdPuzVQGMJGBeigj8W9b9Z87p42jBcrX9ThDQHujocW6Yj57rKYizW55DW3qaJvGX58pjEdM",
  "key35": "3LA5wSX8137pNeVvZKwHvFE1xKrMCFFH43vSYQmmjswgQsBdGt3taueSGd7Fw7GSqZmCFLQVGwMz4xjBZkPRBks7",
  "key36": "4gTPbXw7PBeGUYYMjhCNxGcw9L326R9ucvaNLJL782pYX7uk5UPe1ixKW9vAc5mkBg1C2srAJLomwNVLKFK2svta",
  "key37": "48Jwbi21yoj1Ry2wfeaaaw17hzbDzfJyQmpvZSEdFiXySn7XmgchyHphCdJAM8bFLGLFXWkwdG5jigA8Fes6uiSB"
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
