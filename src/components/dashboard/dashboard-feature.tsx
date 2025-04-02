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
    "3dW5GX8hRRibRYuyZBP9aJrPQ9KfmSRn1hiR1P4w2qXTBMCanm3DmTnQVPvyTYA6ND9rToSb1CEAB3kSCK2JXpPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6bYPZCGhDuv7FgLGTBU5kFpfMkHhXxxuBDgZh3R1jUGiqdc16KtkMidDVsm7Bmbhj3wnsaVjLZmDg8uNoVFc1P4",
  "key1": "HZaapeSZRVzYqkBVospr3P8BKxonPnP9nqmKA7oNnk5qtZA61yvgo7jVreU3cKnjNhEFMUA7ZtmZ8mCgnTuM4pu",
  "key2": "2KMzN3i2kb5a39VyRknM6V3jnfuJY1dUiUjYDqUc577fGfiW5aWtXsrjaz9PVYriugcTrjMb27JddNG592zA1ksb",
  "key3": "4FbAgnhApfGqG5KgEH2b1EsamMCuamedTZv8b4HmiAf2HCgdWzXCnv7GSZG6PMSKuWSFg3n4sQ2S9vPxaL46gC2w",
  "key4": "oEsxdZDhpc2B9cLq9ReemcWffPM9FgH2eU5M6Y2TPWZjnZAC6VYrTcYm3hVvGPyKWCFmyZ4SoMQmYDFxmxaBBrn",
  "key5": "efcxKGXnQWS9bXZHnoRD4jb4vqKTiQyPDaQ7xM8UWLPSMpzopG4ZDet73jtLePttBgnfz6H2D88ZSqp3ZtdXT9e",
  "key6": "V5dC6LFJCf9fAjF1YuBU1jVR2LBrMJfWwWcZ3DT1RAE1pvwJF5LF2Z989Gmu1DtH89NsUTucBxcZS1LzAGpbGkx",
  "key7": "3mv5xRNpnhzxVAvroUnNU2R4xh234CyvMKWTqFFm4qDxcjVJA1kqo8nisa6UcZErpBRCXRV7kQTEmYz9wVHMvJAi",
  "key8": "63txDJ7xqJhX9AsND9ngoeqUTC2vYPWQkSnLQkME6iCZH5WmcX8bm4gSGjVNF6VMLg3wDh5X2ieTxrQRHRhWXuLA",
  "key9": "4trwnwrBaJA7Jvv6562hmaPaNyqksncvysJJjSKtpJv3Zsc97vKf1kR1cC27opKAkF8DFnLp6T7B1WXZhk6MTC5e",
  "key10": "4owoXJrCrJkUdq4qZMVwNqVdGKsCuu3CEL8qRjUPSM88yztjqe7HJjtYEuLN1uLMeSkQHHkr9GtcsaEw78KWJ6s9",
  "key11": "4KEq9Df4WgQhwpNzb9v9dStmvu812UhENfwwJAwJsNfHq7p1ak7L7eBQBLaEvZbQNQCshPckFbdQjWN5THmBSjVr",
  "key12": "4jjRFrb7JinYuu8ochdQa16X6eucH1iBc4y3FXCavJV77x1cSQbKmWzvPPQo16oovfuh3eX5cJCHqDqwNkaM3nd8",
  "key13": "sUGnqw7xxY4gR6j4HAAJX1R8iC7xmPnvgBcTdEJ2x5RK8mxyhQFFHBceGA9wTqnMUG3sTicYzJw9tTSeGAXErge",
  "key14": "3S8YBGs5HS9g8bKWRN4FaLAh1h3D1YpeMnzXzQ6fPxmYsvmhgBYs5c6qmiToTHt33DZ25D2J5dCPeGqbpABuqAQN",
  "key15": "oZcjhuW4n7YyPcraAKrU2tEWL3nUJFMdEMqPy3J6FFVBSRL9PBsLMXMzZgutVHtaZEZQMo2g8iUVFEhNWfTWebm",
  "key16": "622yGmcsvVuPAS57dhkBXTpc66tUdUXoAxc7EGvFKFo8cEwY3WfGKKr2hMw3xbgFt3NRjEPzDMARRkAvNctK4K7h",
  "key17": "c2T86Gq3TdMdTno1Rnj1kEfGPwwJ6YsRXWQAAwxp6BNjRuA99tzD6v36KpwvKcsH1dsE6D8b2cFyci28ZA83HBR",
  "key18": "DUvTAdmLQf5tTCur4zMJCZCQJisfvitDor43ZiZ1hw39hDm1jDE5xwvNkGabSx2FsHcfQ6oJyPAS5rXtaLfxswX",
  "key19": "317362612kJGny2YqoMySmeVPQyKeY12zHW5cLZXrFoBMnLLpuvnJQzy8Yn6LkRiDPHTuQz2MRHm53xTtUHVPEGa",
  "key20": "4T33YtJtERbsyynRpYLFHGyV1MxHuF6Zooo1BHrxBFXc1frX2646g625zh6FfWjfoAuAZKGnfUDj64JAY3PizkVp",
  "key21": "53jo1FVrkibWDAvJuMWjZtH3ts93KKWmxqQJDT9sz3VXoggvQkWm9BTBvPqFEbAN23SLwHWz3A28okSisDv9CKvg",
  "key22": "5n46h3vK4C1n15VY7WAziNTjTWMyDkV4wWGvFizFnCsjB1gKr43te2VLNbM1R4GQd1sckELf145uR64yeLDExikn",
  "key23": "2yDjoZm6qmkE2WvJNZxx3LpJ6RXzZuREekd1SHZSJtwoS3ZTnwsQNxWKPUdfCWP1e883HJ8m3QwLh2dRYvT5Jm66",
  "key24": "2ZSZf1faHrGWnFnC5ndvgyVUiWQtsYoGcbHp4ZHtvCg7sDoYMQKiv45SqgQ5LdoTZgKC9iJZkf3nZGSrSbkSN7VX",
  "key25": "2pEfSnYAFk5F8z2Rjt1kExEUaPFSkhxbpY8bmD4KwQFJqyj5Rp1wyMu4r6wcWWi7J2sjMxXHZMb6w8M58cXr7tp2",
  "key26": "3oyuNPXug3ZGij218swrfU4n7LmhYSiUzouVSqE5reJ2ruRydcKJ7NRhj5H7bEaVrGtMvvWb8jXV5CiX6bzBLNVR",
  "key27": "5e8tgSvBM2m8iFkRT5FYbtEDP4487vW6B8C1Zyp9iAyyG4xsLNZXz7fEanwXQCRwPLwBs3RecoeJpdf8Jk7qiyN",
  "key28": "2pfoNJGiQMRxbWyQCSfCjYiyPVczyG32We37uGX472VQhjuEDQZQdXoVXcB18sarmCYXSNm6SebvLjpHyVGGn8xA",
  "key29": "2QQJrdMETYhUNU2dFpHRWamvr6EAiJnW7BnvLyrxVNFLZQdqvdNfTjKVueKWgosJJ5tEJiihs4so54DXDDr7i1tj",
  "key30": "3mxbNUZTuXVkpv2CXydTM7kCV8n5tzfdYz2STxyYSawsv5hZ6qeg25iQ19vnkAmDL5QcLzTSzxRLQmmQeDt2cH9C",
  "key31": "2fgbk645ZSxmAYGLkftcppeXNJzBP2FyFKnt7yTqiANKhqx9NNvbXQcsz9pVJKHt7sg5Gofpb4x9bXvJQchcnkLi",
  "key32": "5h4qYwDMkWkbmXvPdej9G86iG5DuKKUeSfjpeFUh7wQVtfDCFnBoPgcFChvwmfuB9hnCscPKK4UceLAbcNLh3dze",
  "key33": "47zdrE5tLxhhjp548nASjfooya7P3hx4hHDHszzScCk3Nwt3qdkXoPnBQ3QNpu9AKfit2Rs2HCssCQks4sByTHVn",
  "key34": "gZp7dqvfV3J71wwS6Wxj1rLTfaJN1Pf2jfv23iV8RtcPByMgzM4qMjryFK1mW15eE1AusjKzeBk8V7athiVbm9s",
  "key35": "gfAi5ks8hSz6DJ2hqXjsxRccQBNASDVcgAwRxhKcVyE3CcAPThaW4NRXbCaEzZdRLnvY8WarJRgzNHWMMgauwmJ",
  "key36": "2j52EAP7tB5CB6xUBwXkX2asfrnUxxkhTfzajgnSGRsueMFBBFHsnR3VRNWJe2qGEQ1gfyaC5orsiekkWkGceQoK",
  "key37": "3QX6N8ojyxAdTniATNc27BJWeMT8oAL4wm4zvAM9GHifFd172fw4Pk3wUV4KxpwfjjcBhQUa14zeaUvPKgv4oTEr",
  "key38": "V5bWitpACqmLjEVvTpk5k6fDhdXaaaBRkS2MxCcQ9v3pV4MbqvF9yA3TDMNafeC3ydtAwf2g6mhrvVrUdDX5T1G",
  "key39": "aPes7849tP7RVUiZqYSuMtA6MeSM7S724yorwvLyMaNcHb6VqcwSYo2T3kMKf3wsTKrufzKKKqsVPepPWDCp5Wn",
  "key40": "47JyExeGmtrge2ynnkTuYEY4JDn58adjvazXwx7U6ZLihMEirLEPzKqmLr3Tp3jzgNXBgd5PwhyqwwmyAq9FrrAC",
  "key41": "3SmLVJNeC4sN7TGTHJ1sufwyASg5iBNK84fTbkiWtvzme1ERZtpcbnQSFoNt3bxxsGLYWAhFN6L9bpLePe6vhKF"
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
