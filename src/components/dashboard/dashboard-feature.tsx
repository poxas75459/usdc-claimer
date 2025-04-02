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
    "5iAT6fuAqc8gQ1vRGcqqxivLWomprA9rRh7edkUAfbgZ6sFhi1wQjN931h2U5xZfpng6pzogKEmhgQK2UeJyBc4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "251LpRDfMwZDcSFRASxz1snjM3eWxB7Xz5wZAvASxf9RoMipootRcaVPKk9x6bRkShTfusCV87fC8A8TesULeuEF",
  "key1": "5pFG8dyN4q19Eqjr6qZK1Fq9eRmRn6t7doXaUiYvy9kHkrnS3mygtq8jwwhZKh2mgBhSCQTv5Ay6TU438TumxK15",
  "key2": "5HfchS1h2Vk2eJ5k4pRLHz8qeTGRSxLhcNDm1iBVSyVgDzq3w2mvrkhhovcDYikQE8WHW65C4dvrhEGBYZCHkWTj",
  "key3": "xPzoRWr4giNcnGqA1CCvHdrzpFA6oxH282G2UT5XERZMK2UH23W1Z1RHcdw44uJMuiGcZphsGsnjrXxP8UtbDYs",
  "key4": "3QuKmvHoGgWzdYLcUjB6ZuNwrRWEr5zGujkvDuKkpjRJB7EGgJnxAKJW8m4NhSzLcjvjF4fsEzEdH5mSKoaGjcqh",
  "key5": "2mdjxEjS2o8uHfD8iN63319GtZCZ1HZGD4WFqCXRHvC3xJsFTppY5jnPzVaZx2zVYPJQyd5AsgbzGYiivgFfzqCm",
  "key6": "4QKVo7L81HAfzZhXZju5JeU8zCfWa3Gh7RPYydVdR24bGJX3Vd9K59RacE8PcLJhBtQ43wi9YZaTdfFdxDsghee1",
  "key7": "4zmqdLP2iLkMASK9NN1akw7qp4nyYK4KhGNN1x1vPhB8Kk2awZD4f4KvViB8vmadWEbpBzsYZ1pBte7kgxG7XXXk",
  "key8": "594YzhYUpQA1BkTy9AShFLDj9cmGHhZ9JBfpqMhWntpzr2ZQEaQ4EcdiNvG2LzPL9ZrY2FtTEoP77hUcmJBE4ypX",
  "key9": "3MGdLa8hY4f3tbzad37qMnRUvmrVEY5HY57Z5afquZZDGatuj5gN7dGfchG27A2bxa9EymVpvcETRq8Dc29GFdyH",
  "key10": "4JgiKokRFEDLZonJxW1JrrX5hYthcZhmEP3VsgpnYuo7y5d4nt5Fv3WmCE7H7JbmjRFNTvY3w25VT9rzqEbA4JXL",
  "key11": "5za5zr7phrLJfM6SCDQbphV2m6nzSt7pFEBZK3dVAtVXPkJCsken2jYEEgLDZQskTbdx8useNEngVtTxinn4eayd",
  "key12": "2JqFYmrneVgP7ZchQWKKSN1yrUMfTakKPMY7wS5h58RfuLTj2x9YnqvymodKAxVyGRLUTDBU3A33QnodY3o7fqgb",
  "key13": "4kDNLDzeToBBYufK26zCoLdXC8r1rDZJw6Do1HhRcUtNdycBpT9QdHPAVTEsrRCiPPskp9gw6iPHu7m1x9nJQZwH",
  "key14": "5PqrJma7FjYq3awHcw8WVARZKeCyqSwDCSRdyZzASLGNhxehP45yCDDLHo7Uh3nHZ8aqAx2iKHMoUeu3H2pWWU2o",
  "key15": "2Qa6D3FWFxT9om5PSDuzKDGi9NT625dsuissP1V8b8m4rcUM4myokFjToo9agLnUtJho395RHtwi42L8AZVu3fpB",
  "key16": "EjwHSUMAZD9BFxX83BtSvnpC8LhEYiWyfSBNod5eDEFtfwinKoMVfoYyYuo3ucQwbsodgbV2uzMDoZ7EcEeYFXn",
  "key17": "UiEo2Qf2W6DXdwHdyv2YhnuBjLvQde64ZK7z1hnAipecfyM1DDhAeJXdP5GzkY9Y64CLkAxDdPSNtQbw8QE75V8",
  "key18": "2MgiSKcSjZmkhha6SCnguFU7Xz2pW1GSBy7PftpFfW4H2CfYwvsqvttDB3qjzowbbUGfNXthkrcZos1bsaQVLpi3",
  "key19": "5zMTveympeiT9NgstSp1Rta2k8diq17yPabZdgFECUaCzpYfaHyfUgRgT2zsZ7zGB7kEqUcGGyxq9onSkRPegL9m",
  "key20": "2nCcrM6xWVqeaHMbic8DeUT2LPSpovjF4SdLpwP9cTAqw2SSEnf9M4VGmzNfjRFAv6EwpgRkPsy6g4tGy9iLT3m4",
  "key21": "4U1qfr3pd8oQncyPQzzLkzYuH2D2uWv3xzF3qbZbmDRSo2hK18aPqcijYk1cCpbN6Ns9aV2rW7d7smsts4xkvoYH",
  "key22": "51ofeX4sUbxUQPmQJkcYS9QahZ4KRBUggCYYDb7z2B76Xj7UhV6gVdZc9PxQxm5zdv5AMfmuL6uVJ2t8pT4xhvtR",
  "key23": "2zFr2pcp22TDYZJ5dYXRMjMvCYdFkXNRw6vQXHaMcXHJrefJpFcyttDjY1JWjycnnoT6JqeL4PSuaGVHA6xN4WJ5",
  "key24": "4wedZ8ww6SzQrhJwqX9N5aPyy21143LuTPqwxPyeB8DnfwmCc6JxM94VUiBHxfTWrJ9UzT7HWWKTwGcEeihKBoPF",
  "key25": "62ev6TSnSpE1VDdrg8wfkup1y4Ai3g7Zf5AK7i2bVUn4PAHRXg4NkKbJWpN7Wy28sppzW8zoEzTKpCrkTbmzooHo",
  "key26": "fudyE193zArBeo73R1VisA9ik9w1QGYv54jqjRjK6zvhcoSrqMF9hphYMApWrSKXihtKMHfNovA6jM49AYdC8xe",
  "key27": "2usCykGGbKegVbWgh1yqe1vxtQHJM8psxx1ynGqoypR5ZRryuPu2g7fZ9LJseNStjyYcfCCB6aHkH6QuFhnSw2j3",
  "key28": "41Ls4Crvd1rTb5DRXiYjqnxTFmPM9vZzDbdq8yLa6zNNzbmzBXDy4UXmwLbRogk1GkZbqedxdcavuyhDUCAjvoCJ",
  "key29": "39ehk1BvrGAz6VN6MEyrAMMBZhbTCm3L8uNd69SZ4JaLQNoxEsfh3noBbH4ptx5LQoK8tHYYmrrePmfP2y8QanvM",
  "key30": "SFZR7v11xQ7mQeEuAzRHi4hqPrS3HQor9x1t3BXUQLXgS84mFimA817axefqckwht3TPhgSjuZ1r4nd3HgMQcCA",
  "key31": "5bK7uje9LFVB1ktkZQr4dMh9yQXkp9F9C17GLwuJCnUUxJuvpiFqyMYTZKDPw4T1LDR5ayPHe2ohd8ZUE2KjcR7V",
  "key32": "3h3hpULk6rK4m5P67LvKbNG1S6vJ3cYNtt6i2dZy69xdYFCiZz2uvCV8hQfbvN2QSvqavNQgfXvV6PwUdCkeYjf5",
  "key33": "3miiLbEfYXhEsS6zedi3T4iDViUuDJB7UH7vNyzqFvusWm4g8yrbLWmizW4WbV4uxHd9Di5UyycfNP9EuwbppSii",
  "key34": "4DZ1q98Zt6c1xvJ4cesmDkrJx863sEok5HZ4USmK1DendZ9UPcK6qFiL1brMPXQg6UdLytM7h2bgPKHzrALbEEWx",
  "key35": "2aVjicAD9dBHzyf51DYyRHjGj7XhkNRov5EVV67AVFfYF9F2tDTARLkvtdBNY6Hq53Qn8tdZ2Djc39cJLG5Qzk2a",
  "key36": "4LXDF8RvtNd7UqWaMvQqdZ46LWNrL4yT8wp82uSaDbFJ3tKdbqQSo7yEM5QCE19ByFat2h13Yn2VwEkUqcdEC55E",
  "key37": "ctUAS7x56y7q9sSdv3SQWBTi6AJF7CkQ5apgCWt8i4oSU3spDzLjQLr8D2nGLrvbx67rBfQp3V2gdd8HWp34nxc",
  "key38": "qznynfko3vxQt6n3nMJETzFBtpzkmTDW5YiepYWG1q4agrj4JYtuuWwWhEkkgRc41dvbuyqLoC1dzf6MhhV7Zf4",
  "key39": "fMyQhykQyYjgsUhU4j2frAXXG4UYTg68SA9FkQ295zJg6npZjAFQvhRAxzBfoEsEnxfsiT3JLX4UbpEnDFsRLke"
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
