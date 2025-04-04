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
    "47L2W7EXL3rtLYkMPUq9wr8ET7X2ZnYnX3wVR7uY9ASKrsAxMA7RXyn5C9jk4GdU7mo5s3pfpKZCCdq1hLppsF7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BQkxMDzytotwn57L1MQBRg7GMxoQRN19YBnFjY6a3wS6ZvYa6gXRzdZHA9worNMENTSnaugWcFr1MKsKLaEy282",
  "key1": "5Wb5jb1uZxyGE1KTJbnuz1hA4Cc9F7ytjkZYoW31KHMGWWFRAeeJREtEyvMFzP1sqPdsZJbz4Ke3DKnBTvAL1z6w",
  "key2": "4AkJ8H5zuBa51sodvzuRhgpFpzZmX5Bk1wVNGPX11dSawu2qRHgtAeXmirKxyzfz3dn3D8sfnAibSCPesXTVj5Pz",
  "key3": "3yFrUJ9Rj4avVM5M3oy9VVzGcKgXbbFbuYFLXyJxBUeYkQY3wDS4SVWfNxhGv4mJLGojutzxJ13vGv8doQUgVfx4",
  "key4": "2zyErfi885oaJ6G1jMKmRvDTEbyUDQWLgRbdqWBCTVwpq1bcFFK23m5TQ6oqgKKvRHNupTCPAg85VwbqGNrHpHrT",
  "key5": "23TNgqtyLBvzrcHZdJidxvJfVJ1PUC6rUYTvLHwPfo3GTmoZ2Ry5tu7MMXWQz4Y2FK9RdYK49jDW53cZxCWTHJEv",
  "key6": "31icNP1HaT4vQUg2vB86bWtbHe4goquDrebakHPEv5FWV2z8XCtxhYi3u1PvRZ8M84dFTkaxzRqaEzYaCWswLbj8",
  "key7": "k7K4TYDv9b8uNf8oxLxxza1a2YxzLF4ye6AZhszGSpZTHmzDGuvYhPqcddiuFQi3s4YPY2VDKTBEnddwGFovfQZ",
  "key8": "3a5BZDJcFTYzk4vHtxFHPRW2Pq1xR335XKYRGibgcBjBhPoTvLJub2ZfQkTjUSTpPjCqs2LN59pEpW2HR3HMUnyJ",
  "key9": "3jyx1oZxjHMDACmB5PzCSt9VNQqj5q7jo47RUQ3tjyqXScVLLyimtmy9CD4sV1M9BBeThW4ELXHcco4XzAGtrWMC",
  "key10": "5HLuTafG6HzL8XX6JTJNa4SkwTyKF93CeK22WkMPE8crqxSDoRn1C4uxAodHiTKaDwCx1sWyZpR5s8jdA2DC3u1c",
  "key11": "4heLzsW4hegrhLVYy43hEBKrrnq2SHUE8bghXvoS5qjTWWoNzReH68DNrX3YNRfc73bUWGTMcW86YtyGCcqeUgwe",
  "key12": "5UkDVTRg6W5sxitQTWwXvdp7fr475tt7frHy6tVfKmRPJDyfJTJSakJz27He4KhGfdiQWLR6EiHL1awSc3DPJ8jR",
  "key13": "5PsT2NSqtkS79tUU8MvvkHtC1D2gNqKFhrs9AXKqYsLn19C6ERBeYLafWcYdr1kT5YjoKfXomYJ5ZZR3z2SHgRcq",
  "key14": "4XsT1MFfjmf3cJKY1usNhLmhZUnxru18EXuqUFq5qmDXtEpCWYxyKjkx8sb3GuNN8VhMQrHF74YBTstdmnXrjE1z",
  "key15": "1rfgFa4yRuBYoD18KRPHKiDwNWzuTxSFEArjzVg3viHFiVU4KomnCUYBPbpwuCxdrtRtupYjJt1okKMFAqhZ2yj",
  "key16": "yLA44sfFtnrWmGqEwXQWNFU8kjtEUZwwUJjNbM73v4gVwgvcASHvEwM1Y23sbn4EYHq2hp9UgnbMqud2muHrM9Y",
  "key17": "2c9ifdYTwpd55oyYSno6PDt2CMNdpRkpWs7dSdtWDCRjsgmWYverDfemYYz9xToKZD81SANwdXcp2DttTMbrFeAF",
  "key18": "5YtmXFjvDhzuBNqtsg2zgT3aQghPk5QWW2G6DvbmKEuk1irxf93grj2kBRdhSyhruwW4SxQ8z12Zgj4HyJ97dKzW",
  "key19": "X9j567ybaKxttGHKyRr8dvdco8jyAjL1L1SaLPMVndNswCVnTZUgArhSpmzHst5YnXpCq6GL4PqFG2F1qfPSoCc",
  "key20": "68KKZ2zyfHwgsnN1dn3NvQbsBKBYxpQ1vFMEN2HUWYgoaif9XE9ky2oic4dKFc8eTKct7QFLFoyZKR3Zhr9oB9J",
  "key21": "3SdQKEYvHds63cetVfkH1SYkn6uLn2hWwLusfX6PR6j8Vck1dEXtJ5zTqYYbifS7d8DV2pkubH5562ZSjqSNGkpo",
  "key22": "2qFr9hMGYgeqD671ENGFuC9E8bxeCTw3Tz4XKN3kYs6RTEtnEopt6W7TsVwXkB1jwER6BqH7V9JngRSi6bEsUKp2",
  "key23": "4Ewj8HRf39VCUcuLTgUsRJCm3WGXkAXu7zYJr95XbMQFXP2Ggtv6vBSrDyyU6amiMjWihjZHUMaSGzrM9JZRr6Pa",
  "key24": "3M24ymPmgqcTZGNCMdDi8d3Qfh4N6EryYViS7TuK2W86nDnmggcFAojWuQNZKZ6G5bEyX42ztegYqEaQYPW9XYEW",
  "key25": "Pg72WKCPqTEeBixuJujAviYg6WDGBXoHS5zxazAvVzwmPji7deimhwJyHvdYcqNVRtoLZizxDjK969rDS1KDKJb",
  "key26": "LPWuJgm4AMmpQzGew4eKjWUDvJ3PkpvPj4qTHC5qVZQ4BqLvuS5o1frFLRSF3uFtTuaVUZPCGoyRtb9qwCg9RAj",
  "key27": "6i8od98VqvDx5unozp54JrH63iStquQYA7cDfDxxZ8ZuaZmkR52YJLzorN514mKTSqFfftbNhhtsGMTVHru593R",
  "key28": "2zP1GbWYFPKx5hKbfvKtCutzigPHX5uYA1fT1HU7PWw22A9fhArsjuN6isYr2LumA7UvrvUZXDGBmtajyfuq2TEa",
  "key29": "RPaaFWNQThaQZ3MT8riLXyXNwt6KT8sVs3cYQs3t43dhuUWk8NLGVf5z2sGKB9cyVgo83jGTRekY6QaTyWjWFtr",
  "key30": "5Gv9TwCwfm4A6P2hvhxXG1ChYWJkp7iXz3h9DJgrLccW1iSdX9CBWqEY3YCY6qrcfU7joLqJY3c8S5gU1zVKbFeo",
  "key31": "3ooj8MXqgzv9M9vr6ibLz8o4wBEGP88JHij6AD25M5dCZvQXos7o5Z1VQVoaBpktBKmU95gumWJvvksroSZCJqrP",
  "key32": "5TYLV9au9PzACdy9xjhaE8P3HDzx4euVkPhCarLvMqSPTeZuPMzDhh6kTALsrCcphMiaR6XB7BLzEqNuZ66qAngT",
  "key33": "5yJZUnm21havQh822MQdnnVqqP66EKknTATU6vYwJnUZqU5Q86QUER4x7d6jFZCV2PMoccvckRLDaMJp7hX7Diz",
  "key34": "5std1qQ51ptVU8KQtDnG54LkeDt8C5MuyD6zzZooVaALoA9avYGB7agHDzEWCsKsqASHyUiBhndyXotNBsFcuAux",
  "key35": "3YB7oHGyGBmhZqsYqLTJozS8hNBzZ4sTRuJimZYTHYhcETvb4eecE745s9v5dzwDHwtXFS9oRrtkniRVt6CpchDc",
  "key36": "2JbhbGo2ibXABsF2f3Z5zCPTHFdzAGWo3QQB6MYPFwgMYKkzwnBsWpZoiw2437G2ENSb2b6ipBcg7TqJwacgTpc5",
  "key37": "2AwWJLVWKY8N9pbu5GYw3FEv7B7GCGp1Mne8bsv4FfE4knAyDYk4HJM1yf3GiVPEMBQy18ajMZVAtocsyF3viZtf",
  "key38": "2PeSL5XG8rgSkfDsFckjXzbNAiSrzhpR9U6TL14Kse6NYdDRqnoTJujbpQjATLNQ1jCn2nY6vN3KEVqxJ3HcNSY4",
  "key39": "4icziWicsameCtxf7yFMPrz6C31yf4whnbL3NSJESkXZ3m9bTcK6hn6BSowT9tQyCmPyop1QKtVtNAQgE5Tg6Wyu",
  "key40": "62jt1mW5HEyr6NH6AjBpgQr58c2c5MgGetvEKf41CZvcv97eiGvKSjQZumEKUWfDxxERNV743MRJ63ZKCB1Aneid",
  "key41": "2yNM3SesrX56ogvpfbGk5iEfHdomXDsvB1cja2THurMf2ZE16Qejrd3J4Vj8jhJRq5dsXuwS24eHQJBqxJ7rPLjF",
  "key42": "3xFn5qAgmkFnJbFJzF8e6Jz7Pvh39CXcpTZgWhUoMfgQ98KJEuEguX7ZY7swXSRAyW8ZfX7Hicko9WQtfjV7oDYp"
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
