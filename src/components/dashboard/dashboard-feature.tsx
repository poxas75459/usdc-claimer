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
    "geyQsmJzqp9zB6YjHHUkKsL5gCo9TjeaM8BTnui45fMeuXHSwi1CDpCCnNkqx8yMa4APTEKnsNM8nJGaheVd6AV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PAJgG7J6L9Tc2GCmSjkbijvxfx1sSCxGeYBMrF3KnYjfhUd9pRqThW3eWWuRBstkuEuch2uKnz6ywQtftNw2PtE",
  "key1": "49phbL32qrCop6wamWngy4qdfbaMC5EruJyzoU3oJsuPtKsRNsWgPtm9s3QsC6BKHRZVMXtXhUCDxRAJTtH1NCs",
  "key2": "2sdi2TmGJZuBhaK8nonsaR2D4CvS7PXmpt1xxZQDUhttnKdAw77QcraBprb7Mqy3GgXhV6fwvxrZXYNMKXfodUmH",
  "key3": "wanTe3bLDc7q8iG37hapk4EQajXYPRDz55ELgnKwMS7VzjATGg1bDw3p9AqxFJEm9YhJwrc1obkVKddpD5Z6x6r",
  "key4": "4gV5zQ9cKT1egBpDZU1NuMhGYLHkSn4rt4zxeuTgC6ReovJuTVUQNzDneUfSiZrp5f2J4fUxq9LrKNNeDhTkWcuy",
  "key5": "roB92kRjB67LMSoHVXL3WS4zEwvCZWXaqon3SjxEs2m96ZdhTQ23pUshFpzMDNxwKWaQ9LzB73uxWxgBwaMuBTB",
  "key6": "4fzAaA8eNDEEjPWNzRhuSK8PRetrrSmEhnmxEwwF52wEFuTDm2Gx7EeEd3HP32yem3ApVZAx8ignz9BZ87ivKymJ",
  "key7": "dyUmTH31NadjuJB4QpCuXnbWisbvWACocoPtKigz13TGTcnh8A6vXfhPUQtVDzSaXfDMY7zUfgssfGo2HudAsTq",
  "key8": "4LaZNqmscC58CX1wYRVkoEzd5ZEpRCMZ4uCvQt2GWVN5x3KEiWZ4ThStZpXYf3Gg7SfySeVzHLcEk2ThwFidaZxN",
  "key9": "L7jiABzWYJDmo9kTrDNk4AuXJ5f8v2oVD4fMmjn9JARozsth6Pc7Y7owUj7TQCC1ZECFcim1EU5YSsHSS2S9w25",
  "key10": "v4MBNeSmjHW7gmrG5wT77i368rGPDe35wdiGhjPgDBGsb8mmGLmwGaEo4YZJuyVL9pLNuNVwyV4C6XnB7UJpBE1",
  "key11": "5burfPjXhAxLLNbfLKhZQQHYX3VpdkP9bTmU2xiofodz1G2J42w2ju72JGy8GQ5jjADZqB8maUmK7JdTXi8ZuWLp",
  "key12": "4z5jQEnVLp1ebs2tw7U8Gyt2A3xXTxREoBWw46vA16EzmjtUjeYcqkwWxn122DmPvTqqXFKnhVQkizhBAsCPzEWD",
  "key13": "3n1Xy4QLP9L92reMdB4iAr8n3jkpZahyeJUQJF9fMs2SVg4VZFyV4knQAYFwCNNMxHC77rch7Xk6wPegL3VxwebK",
  "key14": "2pcZZZzdDKUMUNcxt27meb9mQBySxifozGA8PKs58J1PWSCDjc6AzWEtW4MfnE5uHVn43fjGoik1KLbcLo6AEhAh",
  "key15": "2BJ4vMi4KTfjCZVpFJNaewZLyZE8BeYsHEceWTrwHWD5wYGh4RhF89URWkvwTFnaLJYZXuAY8nsfWvkCHo4GKjTy",
  "key16": "4EY7G6N2cfU7CAXae93QUdK6z5gEQGrqnPNsGP5rstaMcjZWKsqdUZ9afi6s771rRCsdCoGCR7H4WbdPN78siVRN",
  "key17": "4gvjvorgKSfvNqNdDFLxjgyVV3WYQyYSSHu6CetV8PXcPoiLoDJfh9wd7amFfce5S91t4rcnExVCrgqMCDf5RdQU",
  "key18": "4zewJL7x4WJnSAmScJtQFc9vzxz77yhv3T1EM1uk1rzzEgSYm2zaEpZEtiARVCHeMVQB3yYMFNWyLoebNBeR8eJz",
  "key19": "2aUAkB6BHMT5PmCZS6Cfyd2yjM1GKRgnyGoTj4VMCNQFzNJQNPGCoMuLk1V8goFCRAu2EV6HAmfmxAkU6RdxMiX1",
  "key20": "5HB5UjMiw18h5zWLzEYndiJuKcvM8tdb7f6mNCG1EcpRwHkGH57gwc5jR7y91Wsksq5KXxtLaArVboTz2CB5kJfx",
  "key21": "2yhGg3SVLENpSnUnr8PWe64mfgKvfEpZgPU9cHBum6YhCDthsuB3XEj4h5bdYC2HYz7nNiVtKE3QSS2jWBPXNouw",
  "key22": "ybcQQHPPhmpUxqCdLnJYmUJVQjLELCyyWJjsQykimyxqfzvMWaVELAYKZMBgzvSu8H6CfMmw4URD5zV2LcrtBL9",
  "key23": "5oKYqbkQsLC33nDBroxnNkN5EVKHoFALDiu4Wv9HvB1CD8duMVLYB3gtyRpzTzwpcEihmjmRyxZoyigwmVTqUCH5",
  "key24": "5cDB7SbQnDAReGQBZnxjWBN4rGqDaEfQ789dnZBvPP3pyepWGczYbcwA8bQ8N7q9Z1jjgPcmq6FJsdcv6XLDXFHF",
  "key25": "5i1wzMbkYgQ36cf8Q9Suc1N8nmqmE9y3kRLrkuKw1sruo4hxaXVPjsKVjW67WKbPYGwduT3PyHAbiH1ztwUkLNeK",
  "key26": "324bsrbqFxvZvr7XFzFsUqjeMsPfwMU3pXRSmLkcDLXTgkynvLA2DqGfbvKg3WaGH45JmLHyVwWF1vatWrhXjfFn",
  "key27": "48rJb72vq7v1u4G8GAZgkKPW4JGm8SRvvUtksX3Fg8xrwjVDUqqHn3ajyh5JBqndvHgDcgYFP9eZ9u62C58XfWYG",
  "key28": "3nY5qkfY86mEwS1khC2f9n6nckQ8PcFb51hHiAc3RUEU2XgfS62Nuo22qkv9LbueLxEAZ2h6rWhm6CUL7AakCjxx",
  "key29": "2Awg8HvZm5ZfCt1uHDxZs1sRR8etLuPPT4Jp2Smkabgtx5JAXnhX5Dv9iCnpRffXKqWnupHzEgVgtyMvCpqXf8pY",
  "key30": "465unQ2VHkCywGiy3tWaPt3dasfS3duzTZj35tPS2rwEBJN1zSfLaBfr8FPrKVh3WF1JVKdvZE79xe6p8BqJueh9",
  "key31": "aLsqVbZrw6KYpspgtMfsuWo46rQJXGTNM57oMqru9mLazARWckzHT5vqSqkHtJermHpRxcXMRSD3YWbp7unShFr",
  "key32": "U6gq7GmzwPUKjVYVaYruqHEQT9S5PNK4F8hmnotvQsFBQE5WAKmr8BRPC4KuCfCALVZrSh83ianHpmEVM46LGwQ",
  "key33": "3Rzih8Tvzb6UvW8QFzTg32SiwL94dHpDqTqyXr7WCvxW7JzTjX5EGRQzxqT6fZ9DwQivTvqtMXzyxazE3MPftMLU",
  "key34": "4Ltgm84yytSRtsFwFLGz1XLE4mEAQrCFAsFT7bCgkTbmnD3Byua5D6AGvpJ4DUbfhQZEQeLgtMYE6FkzRL2Lh9eB",
  "key35": "3o3s3bkp4quPtoCmssuFPiZ9YfTid67kPvrzuGZQto4q8YJfw9TDmcuXRDxQ2c3i7Ayru4Z8UVC9DA3mkb2ba6EB",
  "key36": "PoF5muMHByAtssrDAjuXxRe9XMpucTDi7AoMktDZLSF6WvPLp4BUtdMRmW1bLG2MnmB5Pf6wMXV1SE3GVkk3q3G",
  "key37": "7Kk5NRj2hCQNuirDihj44t41MHdTxzjm2cVeYG4Txe29GYnmW7HeSYHeJ5bZxan6vyW4Lkabjg4TpkebJb1d3vB",
  "key38": "4B4cAWrfD6MxrRS3VnJtzVCdtMMacpFuQGMs6KZwhAWMwWj4jgJsBUv3T1onpeJpNy3WZNHmvJfDk46yzijMEdov",
  "key39": "44vZ3TByLxBv9NdRjBrzeNmuXfueZCioFXX2FwhenXnXF2sznvvcJqxHu41RrDbH8zGK7nZZNUmrXmdCcvtFL9rx",
  "key40": "2FJaN9md7kxgoP6K2k9Mr7hs4SoTuLYL2cW2Fdx3RLFW8VUyQCNt3DUXjLwaCavVwCNhzaLMmq22bJ6kPK2UgJr9",
  "key41": "4TmvEwD7Adam7YUdTkw1WM6XEP2aF53Hy2jW9qpWdJufn3R9pfCGiusf3pViixPcDDXXEFe3FD6G1xvU643tfNak",
  "key42": "4jM1sq6NsKBHVx3H1GSeRsooSwvdm7261P384YffbL3sLyN6kJg8BWG76dh1vF9LdcCFxDChpaoeWi3XKbrZ7ffa",
  "key43": "5wJhYbAnF25eQV2Bgy1ZUSLv58A8p6DcmvrSts9VA4Pnpqhwu1AA5q8eANSVbAPtnmD176MQuW56sEpzQw1uY3qu",
  "key44": "5kEokVJQnJqMY3cfifVAsZAnNDYoj7MDoeM5PMAy9vE8LHfJeLsNhHAWwTGDM6MXqrQdUmm3KuqjTrmt6rsgSYNw",
  "key45": "4WYc8WnD6KZjjfPxeiX6ECT3gHXxcs5iie1JdrjUTQ6RXJYm4RfcUAKJvzvpLuc3mgowDiRAEzP56wv9XCTyUc8z",
  "key46": "3pechySKfY1qPipUjyg3cG2D22UQM3RqjcevR63Dcy4e8YtSfEbxwKVN8x1R6XApE2og5GVfoguaN4CMXKtNKViz"
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
