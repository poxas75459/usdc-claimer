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
    "2eCsxvitJws6Y5s1zPHDwcYcoVQZtS7LqgT7WVdYZQpFqJfFfVHXq3TCTHQHxUpg9BpPhZ4vRnhA1MWTAqy47VeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dpwz9SK2Fxm8t5UVKiD687X3nSPCssYZs9m3hbXHoEGcz6CQ9dyRMLfskv5yhUUTsmaWmGiZY9PKfjHjbVsrBi6",
  "key1": "2mc7arKegjShyisCQLSTA34asPsMcToAXVa5DXwZN7NX7NDbJcgvf1Qscb1pAgNisZe4zTHometchqwDjNnQViW8",
  "key2": "5EZhCKaguzUfBNALCTHiDHShJz7rGoMJsBFC5xqhbsuHBWPZHh2VXov4RLomYzzPSGfWkW3ZvczkFPwTT4ZfqLCW",
  "key3": "2qNQdDSkfpSeqoxTNTiCyZw8MLRTwf2h9KtSdHSG9iLMBC8JZQfKeWx5Mt8tcD43bBnKuMrHw1CCPKvFmfPsdyy2",
  "key4": "rv9srrqTfitz24NK3TPziX9Ves1ut5GnMQRtiywTsu6Cx4hPxJXF5rD4dNh2HUeGaFdjZWYmFXmj86aZCsNSx5P",
  "key5": "5BqNJn8yhHfRei3qCUGnFtqPEagU7e9Ay8YcKsPYB57Q9DpGwGZPXCVGVXAB2VzA8jXUaKQMrikM2Ama8R8Yg5b7",
  "key6": "4f8q6ZT1JG8CFpNgdQyAVJRCFfNJKjjEKtFsmB362BBV4hnYvj2EAmq51PLKg6M8qQ3KCTVUkFk5vxDcJm3sc9X9",
  "key7": "43SxoPvMxv5t3BmQRVf8RZ7JHGzStvZJzk5DVyKPUM4N3mMtoVZP76i38AmEmxmjHvrK7dCQSXPV7k4y7vvjqADu",
  "key8": "5wg5qzMXQkou4JxCjUXT1YBZhLtvaZ1eunSsGc3B9zmJLZzi3KMgFTHrwMfV6WMeRayg9CKnQF9aVNJCB6QMXpJG",
  "key9": "5N6jGsjxkvdACfCGsbxnzCV1yqezZLyyEksNc5qbdwKZC7Y72Cdn5KKc2K8jDNBQYqb3or5AzG312tFeytTzebgE",
  "key10": "3cd6vANZY9TYejZu63L1X3riKP3XUreHa7weRcK4gPPE9rChYuezDUbYKQVypwZGgX978uMNrQcp2wzQMzozAHua",
  "key11": "3TNJ6uPkqKQB23UMidb8iqXuCCye3iHzqNiHAH85RkJUhWZvZDip3t1tdBb8jSKUa111yMvj979An1tP9Nbud5PW",
  "key12": "4QSCZmEKhXcump6suVrsw6zWyGRVRmms4c6ayckdzMaQnhu8bmkJNB12VjKQL1DX2JrJfsdQLyhhk7YWAFaRrGHG",
  "key13": "2xfcNbK3Db431ZmzWEhUtZ9NuCjmH44QjGpeAsonatoddQ6EkYmuCN4Q4ZirUioFj1qHTney3kehxYvZ3QiiabiJ",
  "key14": "3JjNiFpAVWHFTpZggRiFtT2Mzq6MMe4hfrhUG9VR4bKyAqwj82ECujCm3RwfKRLoT82ShHcYbV7Zaj3h8zAvJi8K",
  "key15": "5NtHHnQB72C6LodyAAjb8hRz5qwJre7RK8ePapJKBzag8jgx9cNJ5wNDryFHvsMhmeqMXQheUVhJVwELtsSnJAE4",
  "key16": "K2nLcx3Y82PeauvRxqFugf2yDtiLPiQS7mipEnsSedKGsDTwH5ytcqC7gbmYv1PpsCLPFuqSSckish1NEdjh46A",
  "key17": "2gHES8D7HyDHxqbSN77yfLCJFzoDGJuomdbEfh2UfhcegwFGiRwGNr9Tw5CmyGN2vgwmwz3xx8FdB5LpuFv8Ur9n",
  "key18": "EmSQJs9esq98X6j63bVtFSyVt6x9n58Mx99EpbEFV3LHT96zBkTYmmGk9ChCMmN77q5AjuWgmNAZs5zDBH4VFAU",
  "key19": "4AQseykh97vE7iHjW1FGFt5jTmFTxLcz1sWQfDwUuxYD6i31AS5PUW2VPkm3JjykvPBeLFqF8kiSx8otV6VnkgJV",
  "key20": "29N4GUDT8GtA6YHnFfFrStv8insJmQdbLKFFoVFFTXr9hEV9g2PfQd7hFmkEHeo6DzDxEXa2Pg1eUp9J12f475DB",
  "key21": "5PjH19tTrVgCsro9AZby2SF5StcHvakETdGvio989njnC3PGbx1oW6epwvWNxbMhLbVEgGNUqDBjzPjr4EZfizpL",
  "key22": "5ZB6p1tQ1atzihjqZYEuKxnTjZ7KpvX5zkt3dqr1aLcvsd5TjurwKNFu9pNPrbzXGvG7M8ue6PMXgCHafktRQbBi",
  "key23": "4eDAoNM5x7b2fwoeAFAwwTenqeUWZXWXyXxn18MRwfob4ciFooymaQM9gU9tHmF6NBXG1ccDmTLPWhFktv1u5RFX",
  "key24": "4N1G8kmwpVyDocYViqJVeQkaFozAK18SJVoGY8jLyK466NyBHrq827cJ7xXbKstfKbp47D2UDLhi3WL43UFn4YcX",
  "key25": "5j41sp2Aresf6QUqCdSb6graDjsbSXuAB2oiB3k2mUqngnuaqKvQJsL7ZmQvuaE21xwwPmryJ9HHEV1KDhEDyXSw",
  "key26": "4Zfi5HbEWd1yMXYxPc9yPitv4S7hfcAE4epsCGyafvrgrTtTevuTmuvtyYeY5nbkiUnYvPTfJHnsKgn89Nx7afF5",
  "key27": "2g6Hpn3rAUghobkAcjVWoYiGoAsYWds3aSJF7ia1Z5tE7qhLBAU9q6NHa3nAm7Kp7WhVcNRsaUZ9HRCXsUDvbPq7",
  "key28": "54ME2w13GtmrRNCGmJTXE6DjbL8yFcwLvHEbvNaHsrbuoSfdG3wC9VwU1KnheqDhNuS3WosWBivtVUjQrZPJj4ec",
  "key29": "8979mYJMFN8iJ4Fj7iKMsJF6BEpnE4bZb37gbmKuy5GWoi1rQnsAkYC2BnzqFQEfKFKakrybJCi22KbhDCUbTWC",
  "key30": "3Ryj2vmM8F42unLxYDtfs7UkUz6mL2fkWmZihAsQdKo5n1tfsDyGn5NCQyou6Qox6vMf1on4ZHE5owBEeo4ji1Hf",
  "key31": "4if7gSLqwTCS14ss713Vs8P5CkQmzZvB9wmrFPYtGYon5bDMrMeA3H96ircWUnSCC84oWXnpjk78Loo5p7gJtHnL",
  "key32": "HhZeHKnyBdDArv8P9NMQ25tezzjb5sw6cWebzak3yvL7PukXsg9pm2mJ9YTrWHtkqPtCTjn114CpbkkRjZNLXDF",
  "key33": "5Rj3TJbKpxv2rhh9FKckgziuG8L3beXdxJSAWdyvz956JLfznDNMpWv1hH6EiqNjdixnq1VwMvSyY2H9HHtDJjZ6",
  "key34": "CGL1KhPCJ9LqDycEznVCZiaqEKBGDHZQnD78CNUsdQ4Hzc47A6d4aUknQyBuozLF6jM3r616BZuWSp2iXEi5kuS",
  "key35": "2NXGnJcmtnuBSp2dNDLw775RhnRsZT5qrF9YUDj7NoyFsPY3rjzfgoYvYargfUXqW7B3pvxxB5sENWVNo9h7e8m1",
  "key36": "4a5BtLdBuWuftRYLvXsevgK3XybHZEE5pc1bc2DFDyvQBH32ETXx5ZMJd7RL8UenETHS9pJaF4m2VX2ofWNe4CPN",
  "key37": "66nj5DtjHRd4sGZJtqqKcnEmNgo1SxFe5PSTaEswnMCgTQpfx6NNZKFN3V2xva8AkCwscyQAzEStXBqQsLf1A1Eu",
  "key38": "3gnHUyvXowTiyphpFHnarU6fd6gms1t2iQkm944RKiWZ31c2oEMsRBNvhW9j4zFEF5vLpMPGuY8zptcwEK7j8jb7",
  "key39": "4duV4LiTxvyDzMZPcPx5fRGfv3QjnnRV2Ud1RBCuPpbCwDovLqby86BNXRjMQdsN4DxrxvjjPbKG8Gx7VEYtL6s8",
  "key40": "6owrDrBMC4qhx75rnSXwbbiEv92HeBnVtk4NoBnaaKTKWPANYUXBD9qWkKbUbTfPXEL3M6QeVvzGRSXpNEsDP5o"
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
