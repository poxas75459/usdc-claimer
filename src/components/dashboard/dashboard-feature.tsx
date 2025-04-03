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
    "3aFoNRdL5Nse5c8QTot85aEdTndVgASWb2Hy9S172fdMjCKME1fAN2gX3S2ZiRLFjKvGYZiuXftCdXXUXPHVjvJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KHUf7HCeoorGSeuFPSnQ15EbzzsT5326dfFtM6mdvnhFSEBuGnyfcM5v5SFmZxnDkwfPjU4MzoJ3PtniXqHsxat",
  "key1": "324VtkUFvNFKhRzrpFanyZxpgf6zC6GQLBgSiqurA56Yu83vJZkRdMKoMtx3YX1GerNFChtCY4csyCWANG8prvxz",
  "key2": "41KuHGTLJa5iimHsoEmnDoTUE27Vw2H6s2s1QQjdRE7hssaaD1nuMpu5fHbzJpHETNxpvJBWCvXBQY5umyjFeq4q",
  "key3": "4dzBgvJG6jjBmKDxuJtbfCfecnbQaDG5zrCkMGzUPUz11UBTa8fnMM8rRAaurvCNgGYetVg3nwbUZAUDENzfYFMm",
  "key4": "pCjbW4DGENdrwgLJ81mEP6Bx2Hito9m3iTa9nuR5LiVkZGGx6uqhTGrqM2bRi7s1pMFohRn7zFfvtXeAoh9XT2P",
  "key5": "WoQUKVYNcAoBxxdXyQCRgRBeAF551TbY44HRgRqEqYjumUCxQnUSW5yjyUV69Tb11eHEJQmiXSW5Z915jMbhMbk",
  "key6": "4pac4AYVNx9RyxFvLftBL8d3bd4DVwaNiQLTPdFXGav21BqpR4sVA7d5SWcfBFutmyWkfdonNwxwRr52mSy1gD7Z",
  "key7": "5Cscfj3a3z9Urux2Vke6v1FvseZCNx2uu6dyNv8Ny2wyRhn9rwbq6eDnJqBAnKf8q31Qihg1LEFZqgZxCanSvhR7",
  "key8": "21p1Q9xesfr2d1xzrQF1ZFLq3Q9tXUCgjHqeoribGhy73PhhxJ9bnhvnSx8N2f4FdJ5cVa94uwHaGtsbV5ctE2y2",
  "key9": "5tdpepKxCb5pJbKXerDezt36cwxF16NinYa17gBYcW1ENwzhvLJCxMyTFue5PqdUdqpS2hoKNsB3tpWkjKwmhxC5",
  "key10": "BsWchxbCcQLzVfKSxrKf9vGrVRz2nVWeikxzmfTxzvt7y6ZtkcL27fcuFMfQDngwz97yRrBuEvqphwj4uifhEbg",
  "key11": "4WSD5zvyycAVRTMy5UdhHGoEmHuX9MJL47tvXdCmeYa5LveKkdjAX1PrAjwCT7jBY5hHEEsKefy3A5UJrrbSW9rq",
  "key12": "5JoU4s27wZXUkzwuLnBnKSsawqTFPejrAmkDLwPx5Vgfzt1T9WpX735ahUAnnwU7TdZqTvDVFuEEqDfFxREoAXt4",
  "key13": "3d8Q12ADqZT2C7uRAKuUtWPnR93EjmK6FdTFYk28L2MebnkQUAb5ZjkK8Z3YHem8qmkeVEzTDB3Bdxp87ytHczsJ",
  "key14": "2C3TrWeN7S83gK1DHqNtDtwDU2iik8f6F9j5duXcBWdGivkdrdunNZrjBHDBKe5vEvnQqPR4kD43JdDkt23zNxtF",
  "key15": "ZAy2m2B9PcYYfvTrhDfYaaKoQ46RrCXVr1HY4yv17UscyRA77VHKcgWx3zULnA5YNDTZDFErRfd8v6VRkQsYq9h",
  "key16": "5ujrvMFgTbUSu6TVnoYitk2qaz7iEcf2RmXjQeJGqYfXp92gykKTJQMDUwnTFpjt8XJSFMHPyQsK6Qi1ZdFoZBsG",
  "key17": "35QQncFRm9JTWpqNXsFaGPAqGDHkC2KjfckMMxRUnr8GHDusCyHbkH3T6eZFzEVvzHsUVUd3vKyDMJXZWXUsqjS5",
  "key18": "26bvGnWCRw38i3QDLKFitpddQr6x3RKNWLNhjxZ4E1UG7yXccvEzYWBK3WJSJC93E6kFcAWEjoYLZn6UTYjgJVih",
  "key19": "3gUGkN1e5dcj7Qmo6k7844xRz2J4q2N5GCJoiXM3eLwwew9Ck3V4v1Ds1G3XjiWpeZtT9zb5MQGmQmMFY5p3SwZu",
  "key20": "5QS4FGsNt3hLna1DTiXXH5SYc9XqX1yMoi4z849DSc34g7J8grFxJnC9KrCyqDtpVcG7AkqZKWNwMufV98UhmUhn",
  "key21": "445mByBtpgyTXxf3K9XjvvSj7UW6HNKmAe2JYGpM4paSddPug2eXVf8qzKbAG9XBgerqzAVgCwbDXScmzeivvrFm",
  "key22": "F7XPKEyFR5s8616zZpNKk75TQhL2XzgxvAs3GDVtWLhbvaeRzkNZamV9sFb6c7YJ5PBjWGyFDawWLFFyWBVLmah",
  "key23": "3M16Mvddod9tNF13yYRuhNd9o91LVJexvd5ja3F23awx9cDYP5mtLC8not3Njk2sSKbuDkyyCJBUqVXJTmSzSoe8",
  "key24": "35YeRtLomySTsrcK6pfw169E8ibgCrGgGzZHosJRijdot9WnoxbtEdyrabomX2EJSAq2oNzgBmP9oeRXCd8uFnAr",
  "key25": "4fV6NJ32FWNUjfP6rbzwxawjYE3qfcQdxBQgpc56cc6Jek4mnQterduf4GAeeRmkEekqb7X96tJ3G9SNyhADyn3B",
  "key26": "4LybjryyUgu8LNDrUhCexanmgxrhwqGL3Q6T7eqs8mBSnpbvH9RShJbcGTnsf3fWrFvbSAnmTFPzPgyUXsXEYs8a",
  "key27": "28jU1Pb4AmvzppkjMyh4M8w7cHKdwNzEhLx8ksKnGqzGhfAteJJy1SLBqzpRH989iyPFG6aEMpumuj4BvpFQ83dv",
  "key28": "5rFrWKnzEkNximoNJUnCfXnVgpWTDw6K66bWMGK457TuYzskQiWFhqW7JBmKufTLXi5r8RqGnBNATCcX3umHcequ",
  "key29": "51CQXM5rKDBnq6TtsVdEzaNWcQmomiFMeeLV4XVvcXy6ySx5But2GZeLtGCD6zVRTJYZ1g4W8GRVH2qR82QU2Wxr",
  "key30": "5dpktUcUQ88BAZ75VnivYj4FqcAnyrhmFP5kQsaSDPN1W834wgN48RjmQuRxgxZKLMCW969MEwXr2Z9E6SnWpXZv",
  "key31": "35xkmgBog6g4gLdagHiSTmPSzM568kJBQvrtNbXxv4ddNxUokgUbqbxXa28MtxsahUhrD9hyEiriLH5WXyTojr6E",
  "key32": "4QstpHdvZ9rbkdFHWoFYAPkBm2eTt53d1trwbsARSEHdcNfhaxW31xBPnobEJ1dFD2xpnfGfm1MATC123DFBCxA2",
  "key33": "4dyu4dsATzjKw7DaAR1td4WQrEANvR6GQioNHRGEAThV96L7gFEodT6jCdNpzMWyitdDyJJYQaZiz1crzqKWiGBj",
  "key34": "2P4HayVYqC57FsRtDLnLFTTgfjU9QkbG9wtPh7N9qV9wCZV2v9hA2XwYaLQ4mVgkwUJLQjSv9He2NEPcmKthzTBX",
  "key35": "4QHJCQEJxgsXJzFU7xCnJG3hDRH4uu31JdkQyMoerGkENr4moksRQDkcNLaHdQSJDsQF5JhQbE8iEeTfu761zFFK",
  "key36": "VG49jRUjZeAUNRZH4tzj8h8rLXxEhALuzkt3i9qfamDPsNiTnZiNJz5xBZdTx3CXENVBYorPJUzT68vH14i3ScX",
  "key37": "ejk2euj5VLZFzncP2pQZaurj5TuiWLzkbfLjdy5MhsxLVEEJJnGTkdpwampJykJWaJMjYUezKfn9T6sG3J5Zy4N",
  "key38": "5N98gYWuesfzFLf9gZuvWYfCRWRbx6rsLaExz2Miz79PGskK1qZUF7RwzfRLa6vMcQi4Z6RUagiLxbiL1wrBM2P8",
  "key39": "2UpNBigzZJGYEMoGw1uSWBNP6LyfEwuQUEWQxD4PzAmczvx2YGRg9fzhxhWtyv626wrYhLdShxUbcH3fAH6aqytc",
  "key40": "2tdJaMi6wpnzq1ykSBqpf4sy8TjZ7twEyuJDUn4vT9oFxTdYp5nrjZ28eJyS9qFeB6HjZm86MYEpiA7sJDATXT3p"
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
