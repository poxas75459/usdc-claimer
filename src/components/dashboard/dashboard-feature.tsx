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
    "QKVzPfbpaUDqvA3r2aFj3u9wh7W2qUD8JfqZaRkL2LtwMEMHDS9eq6zS1Vkc7SNMniEvXmQwLq7ZrD7HQTKDAyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qM9BTYBxaJdGuE1dJSUZUZyjRRzqgtkhaGH75rA4Gfdu2GKMeVGof9AUhPxBwyWqgkHxDxfo5kb3ucKHRjivW8M",
  "key1": "5rGaLZBanZ7EydZkNbNUVzg3u79x4VtE2C6LvwThKL9xz56Y8hEZiQBPYyPv6LMThVfgMX5cqHfFtssB8ZTQQstT",
  "key2": "34PggGepL2EkweA1UaV2c8GFYAHLWQcGjXdunuw2ra7jeHSNwVToAivPuAWzS3VQU6wZRv1CqJnbpVkUPichZb5c",
  "key3": "3qLTGDhnuwgRNqR7UeSr1TxDZduRZxke7B6y4QHhvKoqKMRdfoaDoApBhVMZ8MWGXhhqdwF1ymDfZJ48zs272Y88",
  "key4": "2XurmUFmDTftuGdQ4dDubdY3cKqwqH4YfZPog2bsKktT4AWmji2GAYuweApbfgxsTmWi781koHAHKVTX1NiXtRxM",
  "key5": "4tnLoMAHRZYH4X6NWFGUR9vwKRpULPYtJ87XKecJxiRtEAjwZdknAxHMAen9b1ncCgZTNLW3tJ6yKy2kPGQFh8qq",
  "key6": "2YEMfcceD8qeGu2FdaSpnbMjG4D2baLGprDXCkSjGnSTNFSi2FbXQtQeJpBEqPV5hTjXgjkeqMX975dixE77ctR9",
  "key7": "3fjj9muCXyat3CiPueYfdA4EF1i5x3HNxwzcfN3VUFoxCnCLbJJJ84xzTGTjhY8uxDT8K34SyKPTjGdKbmSEfQbf",
  "key8": "3u79Uy1TUiNjLjcgszGzL1P2UAXj4n4sAvufD2n1a46pckpmi8e2VhTvJXJbD5oN99KsVDCiZc5BfsC7rrU17nGr",
  "key9": "2d3YuWniYDfYJT1ATBaMcaPTyqj4F742VVDaZbGLgRNPJ5agaXcomr3cCVZ8Z7DWCA875TmyUMyfFtyEEFGXJhut",
  "key10": "2uVUEXYC2CeDoubjxJmehPxqkLYtukZMuQsb86k67F6sM5J1Nf9airVYj9j9AooPYtu4i45ZmKMs1zQnzaBrjPtW",
  "key11": "21y2daE1ujNKcYDM749YWbBdjQsYSHUJSweUrYWjxEpkHtFkcjaTK7Mwva77aEFm4Ur8Z9H6FSdmgXHUK9yAmsiy",
  "key12": "5Z4YVizEhJtfk4M9rA1EEtV2bf8HSajoExNiWgbhQGSP56ErHGsrVyXL8VrYQWa4yhwqhdBoL8nNmNGunp3r9eMe",
  "key13": "5T2Y1Xag5GXYNANUJFnBGi7XrPiys6xEeNVk8Rjrse6yZA9EadrYj1vTHfBjzmbUrRqUYDwHtB5uBGt7sfDsvZAR",
  "key14": "2rPeqaQgHGX3YBgSAqDmrQt2NGJdmQDuwg91nwZCshs75qMBRYz7oABCiHpBBg6Dy2Nr4Z91iMhnNy3KwRan3KQK",
  "key15": "3wFwPWaUK8DgzbtZXTjMCUSMczx7b9T4pn1ZBHXiN7jNuRaiQP9RH5JHDYngscbGDg9ibVfkjbMSnwUqnvm4zcLy",
  "key16": "MuD37PVgkQvfNKtUhWdY9UnNNUq1W5GKkj3xpPNe1NojQTvBWDfAJDRmViH8f7bznajqqoZ3P2ddMiBC6cm67iQ",
  "key17": "sTi2bYnH4U4hs9JbdQNVJLiNPVuLLwPQoGCw8dVfB7Ggd8y4DP4Hp3sYDDe8NGnHT1YdwBA7ohSnXktSc2y5pcR",
  "key18": "4XYUozBLNz6A6nHh9taTc8HkVuxvm23KWXsictKXKkZUZo2u7UbrvzUgo8VD9aLHfoMBtbaPT2CUzv6KvmjRCj9t",
  "key19": "HMVZsk2JdFXWYny4wHTLZQZd3jJSJc744EgMJHcrxBhTevg89dmjBpXvtNHZwbknnvtrEUs9iHpEsUJ6b1MxLhs",
  "key20": "3kbGxXKaHpX9PZzLr2Hhfg2shjZx1dvWACoy9A8tYpZ5puEFrkLPc2xPDrYQ6gb8ZgoWSd8k2DbKoUsSSLyV5QCV",
  "key21": "5WjFYuThZadSvhATTBU5X5zEFNaWegRXy8p98p38rMoB6nSAFWiG31EqozZxJaHW2HU7yECc9uvpzNXrhyB5QkF2",
  "key22": "2zpbM7Kzv1zDBHEqF9RGU888UvEyAkeTmim8zngWxxjbwd58AvjX3J5neNVW3r2QGqW5YUkwnpjFnxJFjjEvNGD2",
  "key23": "UMTftWiFjT5cfERgmPUcZoajeJUKR9UTjt2Me49SmGAECfV86utGgcMgQZUnVos6eUCKn5r4JTtXefA4ZQxqhMV",
  "key24": "3yZh8dSgLkyV8tKuPkxBjPB1KL51Niym38LSgZyTX2CPuEerUEPcZk2eVMXvL6RYe8F1AUUHtJ3ybPWnbhMEFCZx",
  "key25": "4fq2carcgKfahSUGz24h4UghrgykQCUi5Vr9d8v59c3mhVC6iPomdYDdxWZdbL2ku2qpPJLGmj6BAE9uw2zJhYGG",
  "key26": "39ZETomjrPJpWTMibEsphWtUv5KNBthXfoXabL5M81XoY6XW6WSGxSBktTpJG5iN5AvLUAFM58mgtrqSmp2uEgfS",
  "key27": "2L9mf9rZkdXZomYkdn61CP7RbLkxjMgRMX11hJUS3r3wHy44b5WECt4tBdy8G6hiwKhkm3QqJ1nCCAZ51ukca2hd",
  "key28": "g5FXpUdvP3YoweJBrVq1pTBXkbUDD8A2FKV8jdai43hG68Vtyn52tRj1RxHAJNF1RP81F1qnfipvMxH1G29Sumk",
  "key29": "57EW4DByamWtFNTjKfARpPXfZ8dHrTRvQZNMsXQqUNZ6jk5e7mfnZUmQwKCGpBuVEeFncVeighFRF3qxSCBvH72R",
  "key30": "51j8w2aLEAqumrLB2cK6ouuPbsrZSXSTPMbb3fTBrH5B94UAYhx2QUkPuJSxbgyizCXp4zyeJjVYSdznhRYgpAPj",
  "key31": "66hU2XUg8JjLeVqYQn6MzbFooevkqQubexnPUkWfdAQQBzxYKCB7eH6qs9HbMypQEQ35PFqbq2stCk7CkBdze8e3",
  "key32": "2tLJNr9zwBZqaNr2WA4xwXnYRDaePNAQrekCCJRdfjTYWM3z8w5JCMkS63XpFAfe2bMqWkgGn8LJ5i7DS2ST5Uap",
  "key33": "2rmhLm5fAjr9HjEbU64jy9eLB2aR7aBVZsfr469WcnbLas9NGRw2r3VrdTTb3TD1zUjfLzPoerGLVrtpDagFtwwm",
  "key34": "2X2RiHq7kfWDXR6xafnjTmGM1VVQ9ns4weKYKRBD97jAyptwZEBQ4nGafcGyZu3FmFcL7M9RfgDU7ooJUf923Aix",
  "key35": "ZKDry3XzcUHwE4XoJJQMpmELd1Gzqg5awEHfsd87MEvs1ZkD2JRrzmhrHY9LiANdUnEfwGzgQok1zB8Bs4oJ1su",
  "key36": "3SLoLKUXUPQQZVwuEbNpomshevpHdQhSsgrEZ713yStLVpo1HqmsJSZtj69yBSZdTXgKwgWSrWVPumf33aVDhavR",
  "key37": "2XyV8em4iVCM62PghGoiaW2LcCmHbGW6ULj2Re2uhzqb6u5xTTwKqb5XTDAugGSau99hmGVfrP1cUrR5ZjKjx7XR",
  "key38": "nFzGZHciDt8zNMkdBdKZX9rye4gKZrQk8wGrWdai3kCjJMos5NFqLjQuqUh1x7Tz2rPiTmVTfXU1khiwyYHNo2E",
  "key39": "5vurwyRQaZLj3ee4aDydApknL7r6Y4iTsGc4b4MktCv7ifFPBcpprFgacedmytJCPd7nXgKPPj8NYruzbaLYNnFE",
  "key40": "2CdRadN94bKx65bE5EnYhAJ4zAakoSQ18mJxrJihkTBkFTLXCacPCNfBYaDj2Cn8x4VhLY35eLtcXPAEmDTBYGgh",
  "key41": "NDNt58JNkmBf1QY3tM5vR7RgVAcnquFpHvsZzT8KCqBZhK3qPBELG8ySnqGtvBeos6bAoeiKGaSVvtuFAyKEUXP",
  "key42": "64nKEyjTV16jRoHyv8GJT9RuZP7oaDpLwKAzYAWDidH1BjcXNQ4GXrdjTTnVZEtipgsLB9HLWZioGGE2e8dGQoYp"
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
