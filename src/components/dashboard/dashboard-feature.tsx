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
    "5KkXpMok89wQAYRqu6dRwf7WpTBKSGptzKuJ9bp9uKuJVPTsPho93z5PuwNeGUcEMim84ie4Yz4KCXnuSphwxZiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37spg49B2HaSe57nwHDzhEsxm9Nc9ngMre1L6xNT4W8m1ahjcxyg5KGvDDMXs9q5L3ugeWesFiPtSykExfWM9JHq",
  "key1": "MXzRSdrBEFxWYc1ye3JF8bCGFKdubygEU2XZKhMMCD8fRyHP5sy7zEiQVj1Ezmp6VqNhN9tNqUy6ozqW6SxdevN",
  "key2": "3ooYSPBVRFQuZT156g3UjzCzFpSdww24agHhvatwa8MLRuzvU3CR4AQvH3z1QrXUc3fjWSzaiMw32Bvxry5WV5CT",
  "key3": "2kpWTp4dK3gBGx8PyYXWeivuR4YTUrADQg79xMUWgpN7v3fkXHNvHUvJHjBMvp8tCTjUxaPdXJeC2zoAnzSKSfcK",
  "key4": "5cYS99vdWL5yRnkcbsxjG6UrZgf6x4DGSCyJzL2vpn42i3nXnm2bwGBYZB9bryLF452GrmhUXnLvz8S27zoV39g7",
  "key5": "6bGrca6Dk3F4vZMCLr13dcKA3nmxU2nGayCGaG3ieZGJ7XhxezAatq98JhFAWLjciL9pCsZJFgDe4Xn1enSBPvy",
  "key6": "5NS1SzfF2s5yYz1fNQuqb9Fs9yQybVyhpRAqr5Vj2LjkA2rLPwvrzjSe8ZWGF9Q2CjeQKmXKdjA6opiNMB78WaTX",
  "key7": "4cTF79g1AjWde8opRiYG6vDE399jbUstnX1aStohAE86a5wqY8rLTa45N6Z9LQ8SkvX7ChpwubRf1mXfm3p2hTLn",
  "key8": "31xcubTjNYdtCw57FD79RJGak48T9BM9D3t1RVLEyDi3yVasFE5W2cL3MGVVkZwGqqm1Vzw1XzQeXjqVGHbVzoRL",
  "key9": "37MvMjKXNLPmEQS3tQpS4d4AVbjVRSd3r877buYVwkvLQyTUimsGTDeQdFhuudEug4G6nogdfXXaceWqQnn1esMQ",
  "key10": "2JxrxgLKgJpG8akG9Nr773KQhFQB3TfRLUcHUyMzVXSsupZoQ8veFzG6t1WYHmQvDyNuJEqH5ww4TyvmA7BGNB68",
  "key11": "4h6UDteThzRQekjthg6MnuGSCt8vSJvhiFe4Q1eww27t9sJPMdDYeyyxzGNhRbzDigMSRRhfBM1xxQFNfihrgso1",
  "key12": "3dZQU5ENrhRdpxBJ1JfV3SzQxNk2XUDydvkBswCaXkBxVjgDb9GJRRSduuJEjiMZgcG6eJ9f7s8gAbN789s9ZY3u",
  "key13": "u6Q7N4dhW5VxoUUwv3AcTuqiFde3rSkPu6spVoawzu9SfR1rg8z6bDw4isYFV7Lec2ekWPVrLXoMwWGhr5szH2V",
  "key14": "2SiV4FHUjtf48ajtfA8NwVEq4diswY5ba9kgKvEvpp8w1dmdYLBknx1YHVrdQ6iy2Vd6DBEfXaSkvq24AxK9gD1Q",
  "key15": "fpmvVQSwGdUNjzugNzGxqKjw4t8m7Xb6SABmpxNA4SgA9ZhAMHqAqFhuoEVdL6RfyxPiZJNPWZXoLPMpNqAWj1Z",
  "key16": "28KbFa1r5sRq6Kfnrz3DrkukW3UVBuj7V77FMfKitV5rYbRSRpPsVdfGQUB2yTS8Jj42DYqyDKDx3Xb1cyTayY2m",
  "key17": "gzGLGkmKvMDckK1sUXF87NxnERWA91RAXEMBNNd2tvxA75KTrnHFvxJvL4JkVGckisgXRvtFnfXBhaiCvfZguET",
  "key18": "39Qu5UT7iRYYjSuW92BQKax5rs1xrHJ8oDi5NkZzZkRtew9e3gFh57JV7RWvC4xH1nS1DpevtAiG2tdzEUkuY3tm",
  "key19": "4nV4n5xJWBC5mUNR5Rqk8mn5USfFTBBYnZyU1k719WbGeTKfqSDu39B7gvRHNsygAGmxWTN4pNdY5hUEh1oLmyWZ",
  "key20": "671o8ibLiVQ1b39QXxH5zkn4hkuvCeLCecmWjXemAWDY1LkcdZ96FdEcy174ujw3SQDWUD9f7w1RcfGbhkXQWGGc",
  "key21": "4uC544wc7AD6CAogt5Qy1m31wnodM3Vts4apQJE38XBJzNaMMJ13kLsTZPLGBzRse5wdtzCMKNtXhwux2zNytsAh",
  "key22": "37aAapimFS44d7UNH9kyWe7biEzhUWWV6ESaK6L78Enx8eja7CuZFbvCggJcUXcNyfPQrfdLZTt8gTyHdEJvyfSz",
  "key23": "27U5bTH4uktK6f8cuox8bpFEmKmd72LLLtNWt8y5daXsdS969YpuBW29WEebM4VLhfzpqWvXkii5Db6YkLCvM4GB",
  "key24": "4vhV45zTn7RCETcMepKvt6o9RBdEsq1fAsa9YDCGTiAqQPDniNTeZVUgc4vAqp58qjM8YSDwRnhLX5tSiY877nqA",
  "key25": "39ypzBBGEQ2xbtMfAEGbm8T23zPbsuvSgL5VEaKYyqYVQTC86ygQJNho8yTbRj4nmu1s1nQiZPvTmm6wJnoVqRZ9",
  "key26": "5XMYgvRUmGCEjTpPM1E8Fsg28y6QcXxMX2vSVCHj59NvoU8r8qyUGkhJ9CZXLNG23wQ9kh8N8QqTkZ5YUk1QJsxC",
  "key27": "z45ykY6eccUjLDoyJEtN8Hc1NEtyRcbwikAjTzusNDoF7YWPPDma1Q6rPGpndHed4mBCVHoD1SspAFnw7MMBaCo",
  "key28": "651tZ3LgA12xkLp6LKcTddSxZ6PjCu8hqFunqHPjHCyV3hh4dDYsGjJvAtqFrwzhd5Ey5LaHi45VmQesFsCqXdrG",
  "key29": "32FvbRhN7tmLJHTr1SpXYXzX795t3o5B5ZpiERRFAW5jQYWEJeL1pufo2ZZnFREaJUNKMChA7qQNz86wx9KGC1Ec",
  "key30": "41q8AbC77XayxBYdo6TRbWM6qPxr5JVzpng4Z9PKZ37ppr3oeeN2yWx4dA4ym6Vj7uRLVnu2wRxYcFCQbJapwVQi",
  "key31": "4mVuyDAcPHbnkuXzZKEZsd8g7a4tTzeZ74SuHcJkvGSTNy9WXCxzuRDDZS96x2eP98kM6pekszKV2K2JzPz9vsgE",
  "key32": "Et8u6Qr5VN279bZp5QU4cbHJrCrNSchBNF78GRXv13Qar3TPBgU3fW5jXEj56rNQ92MMAJR5fK9uYdX99J4dnXW",
  "key33": "3yakTgmWB6wYSts88ysmtcANYnivv9qVh3e5PztRb8SjHGrF7cU7jZ6cq9uWcndT27TJpin1ZUVZAWDrFejGH7Sv",
  "key34": "2Vb5kR2BCg1S43W2Ezdr422zSvPNAuZrEU31kgBPn984tkagWA7CmeovH2r5wGGoriex5E6RZm6MRutEvoSQxgPF",
  "key35": "5BkJAw5BKn9gZNVxGf7W2DW2hK8zCvDMrDdpqvbFfJm6zSCx2DvaYcQ65czLj842uTALXuafPWhn7UgWvVN2J7Ro"
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
