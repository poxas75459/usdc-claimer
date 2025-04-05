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
    "3DvZrAcd5hhYdsfmwh43tRRVjCbWeoGh4nP9HAsTTcxJQLCXQfD2YoJDVTjpaTWDnv1gwaHWG2LjUafE4Q1ThkYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hxg4ftsLmhw7uJVkfH43sGhtK4RVyNuDzzGnJogPpCnF2yRewXDJzc8LzDnzye8T4L1UN3E5GN8ptsmZfybajKt",
  "key1": "2SEPsKqPUiefyn8Dw8A8h8vEV5GfmxNyQLPpYY1rRHtitHERq3vHKcZPDNwZFx8xP1SY3gGGspbM9PWGAAQRCATt",
  "key2": "3izUaCKn8GzFUaQVUkTF9JuiFYxRBTRNQDhHS2goH6CLhPzafXr77UQLKVgwz9fPWbqmzGxMrcSJXmDAcAJZyjfq",
  "key3": "uFw5rS8mK1HexLgjodkAYXCgrhT6G4cdfe5MGEvzBfaPFBC9ovgHizgNaWJ4JzX1xChxgbBXU1xPrBeJZsXZcki",
  "key4": "g7yHHbr1cD3NxLWewiJuLYEbeXdqsrKsFoKXiTVEJ6cxGop1vzyL2DkL9SXgVVApWYwPg2oowHujFPWR2CkFbZN",
  "key5": "4tpHFU2qNSiz9npCqwjvdhBtretKrp2y3zRt1cTPGUwrYYXVP3TgNxy4KCpRddZJjGPnPhH1oXYULk4zEQqhiTwE",
  "key6": "23ShM1b3pYqEMUPD5pqGc8H6Cqaz24afCheA3NU29GWaCZNV4W9jXgwYZp9tWpcaFfN4uz7WxCY2d31iVTueiKYh",
  "key7": "55dxT7fTQ5GYLz9WNPvigDPR5DzHyEsbeSikk2iWb7iL8UKzZ1bbEp3uXMFHRG7W3dFBywGSpR7tNSP2xoDRkRKf",
  "key8": "2cjwXoFWAQ3ZJfXmnvaifT2iuhaXQgVMyksYsVLSaLfBnoqvZYHk1LfKtK6GAmd78zkpyJ238GxsXqQtJvBbca2L",
  "key9": "4VJa3mfMpj4oQYeSorKA5JVHSPToadGXfWypVgzjgY4Dhn3PyFJNi7DjobMF9Jtewv4yecpVG3bvUDtYZg87fM9C",
  "key10": "3zWnWwDAdbGYagV3tZ4J4qjvecZvW6aJpUEJCqgUGne6LrRbxZydegCZdq8KLuWDYikqQg8rqLXwLNTDMncRWARH",
  "key11": "5QXCHuxMjSiV12zHX4XFEgDxLwT1PkPvUFCMZzsQWD6S1bQU7MX5z333TnTdgR7s3SBDC4PHPDmdtjEy1sGRRCKq",
  "key12": "5Ec4zifjnenrcrzbPWgiLxkmvThuNd9Egnm99suhc3FRtiAfy62hdFfgExoLJdXSPS4JFrroX6bgTQpZTGpeidN",
  "key13": "59PXvpboP4Pzqj6zT1cQsbpoTwUZAFXvZCtBHArWdPjNzbLmwBjUabM8kdTCARsEUptD6tm2oNruoFBBwQu7EKDy",
  "key14": "642xYzHZ53vuvfMeGrDzSgJwxT1MP6WskVNTYia4KwpiLiHDfSMUm5kh1W17a5PhuTBH6q9JGECsMs99Ds2heD75",
  "key15": "99P6efeCwFed9QQ2TJp5VeuDabtcHvrYbbyG5Pk1493rpwU2sfsHTJv2YyBjDheMUQNcndcLfZCZz9ea3U2GWqn",
  "key16": "2UpAoZhJAXm3Cq4LjSrZiFpoKT9RUEHktgSfS4E2VXBTX4qoZwKxtpXKf9NiPKoxK8o2xQHYGEvjfZXLLKcjx9pK",
  "key17": "3iyAQqbSNqbTXC4xbDT2Nr1ZLmxST1jRQGJLdMJpZkqej9m6i4D2KwV9zriK92SRAwLLpX9WZCyMRGBin4TcCbJ5",
  "key18": "9kUzd8C2AfQ8CFLgmGGoAgGdzpDQR5TFhv673B9jG34W4qDzJado6kvZHo9cxDwrzKzbYsFjWDV1rjsndULfcxP",
  "key19": "Y5KNv3RZXDbVD5XGJLAtGqb8WoNcnrDPKFtadBjYjukPTNAyU1dDjiLm4mAn67sTogZsVL1kVdynF4Pxn5CmbJ4",
  "key20": "sKXr24C5PFRPmQj2jtrjn85maL4QPf3tfrK5rLqxPz1qot3K9f2pEAqoiTa5j2KF2njFAEac5kxFAfviTjPnpis",
  "key21": "63nfhTtwpUg9PpFXTjxTj3Cm6oWLYPUiHtR7G9JifkwLUdMjyPa5M7wDZqkEVB3MumFrCUvhhRvXLgbH2Di884qc",
  "key22": "5soE2T17j9gZxwcnjgSqeKKfqrAsWcc1uedfHB2M3E8GKdi4oRHt73od3ziDa6ZzW4gHYHStUrg7RVDcP5Y4KnGj",
  "key23": "3P3MAzDbKyEtZDV53ZJaYHNoJM1sSjk8rdNQSKSdiwypwwREsKU75T1wndo5fX2LBgXkTqHS8JwCH7hnjfoLDfWN",
  "key24": "5tco4FN8Rmih45bwdtQbSn3ZYjGUZ293qBADApxkVx2mTxWaRHF8fNHpAmjzEJv1vgvBP5btRkx39dLgDpEAtFx9",
  "key25": "4H9TvLBQzF4N99gqFh7BDxSJqsxD456vupzjrxxSsksizjLSqEUaSSgchnqUUtFKiuz6bKutFpfr4dMnVPNxemTf",
  "key26": "2ZeGnF6S4u5dSozy3ys9XVPY2EBcEXMFGqjm7DQ1foy5YDPt269tX15YH1fWCWnDaM3Fvc9aZp3ohAz6fVQkRBN6",
  "key27": "4P5TEabHGJUTkCZfHi3YFL3zvvPGGnPScGKqQyD1J57xnuXzkSncCGCickYQitQyvWcsJfhztXf6k7qP5EeLVenD",
  "key28": "3pkDeokdePzeLmUWRdS9a8ogSw8yBtQ9zNXbmgRBcBMHVC9zPeSwnKctemWZ19xPezMHTMyCqmL6Tty6n8zTu35Y",
  "key29": "pEQMw7sGHTcXjgZddAymnKNwcqdw4JZo41fxX5AW8EWQ9or9RD6Jp8HxxWQiaFZi5Qj6MCgB6Y6mGQ5a96KeUDo",
  "key30": "owtyNmShD1jxqKFmez3p7NLBe84w1XuHxxQyS9Rw1J9ES8bCDRjJZyVVs4g9qtDqdrkNXFnWkC3VkwrKsgMoWZG"
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
