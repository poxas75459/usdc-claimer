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
    "3HNgztvcpxyDt3AdYTKpNEjJDo5KbFTMwkgdRiXwQ4zYhebyUNEhjEHqcSXVZnP6jiWvAVacr1L4wnwNxQJ7CTTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zfzhwoHhsp41mxtizbKyBMgS7qaUHi4uByw9qe7Hfv9N4AJXDWeJrgjqe3GUjhQuzwj8HwP9fx4QVWTPBEJswtz",
  "key1": "5sK4eDJUK5YrFAEQCvPmSfAbZH9WxyzBiYM66dGmpH6pxtM5b3zgc8GDUR1LvuhSExu6atHURR5rkaqsQpacjbLL",
  "key2": "2SBE8fP7JyxdukJyKNmdhsLSVkdw2mTbCFXdUFr9u4LPcCroxfQaDtp3sbCtQhheV5KZC1uDkNoGu3fZKS8NLLVv",
  "key3": "4jkSA3r4cZRVbTqZUvWjWRrwTat2G6TvJ3L8VQRU9JaUKiakM1SMMXsmws86w5SV1hUdfuDecRqDbtCNUyBSN2fm",
  "key4": "3ob6BCGd3UC9A8mHXaeL9F7vXPvHiJY2D26M1hJZV8s2vZXu2nKjVBh6YJyRWNSSMyAjytMvdXE6i1ACwR5i7gyk",
  "key5": "5N2yXUEHZ969tcg1y8X2ger326T62bXwjbaA9ywMsF37bD4utH2KxgP4A64neepQqZfyPdZbQFtykD5Uocwty7Ni",
  "key6": "5EC7U3z8JeTdLavg1xmo2bAXs2b1quN5zpHuPMkS2XD5bta64rWZXrLUJ142Fk4cNpUxsVfWJ3ifJj6FexyUwX3Y",
  "key7": "61P7ZgcuJ8pDaa2VXrx1pwwtxS1csQMb71PdpmDxGCEDaNLpGKxz2CZmZ5cZZtgEt9XeSY9EtsPScZX5N3fpbqUK",
  "key8": "2naS2k4CjbAST7z9Sp9RAnXEMVKfsY25Nfh8tN4Ux1f1YsAiUx6YPuZN7RhMfh9Wxspjp3CHtUfXDAaPYavX8TQo",
  "key9": "21tqhKhDrtYkYTCaURENu2vMcgU8aTgs2rNGHoT1oYivLqhpoopPB7VWPYYcYohB8UtgUiieDioNRrHLy6Q4k6qA",
  "key10": "3y3sJPH66ccU2Qyj6y1PL2DFqYXMpBcTKUnYTXKrawyM6idScTXKmYV7YD17Cwp4Euv8ZQdvmmpy5G3FBx5gX7DX",
  "key11": "aWh97tqebCfkhPAJTg9Z5RycraNfb7RNw5RhxKBoM61hakuCSGRgncR42NEQG6eUcHtuEfdNzYp7ihFbfVwcrZa",
  "key12": "2ZzbwY242chdTZs1yvez2sJEdcXNd4mgpA5VpmnUksz634JMVHG1w1UdbsDUroGSRCfoFAAjscPmHGnEHdP4r7Ce",
  "key13": "3WjgRDjTGG3cTtSSftmorwvJNuUSmny8JfepJ8Gutqj9nPGYxjvWxPy5U4PJ3BL2im4vv4GgsA8ogf2MD6h7ojuV",
  "key14": "5gmvq53gDdtujnor1UpaWoZ2aJfJgfLkovwdQYPsHhT4CQr99abzJ2CvqXdQktMahon5kNuUsxvAVkaTa9zFWLLH",
  "key15": "3J6A9Kga6BM5WwX8rJ4ZLQ7jZAckAy7GZqWsDfwumLY9Z4y4NFcpWdBFGdz29A17Dg3HkSCMCu3bgpjwvZh83LJM",
  "key16": "3Tx4dRNyb5o38ZFJsScS98oZfNauCQrQ82mAs5Fq4p4YVTWgySALgiuvQRDJo9MkH73PKERCCowyfnqecQbpvgRg",
  "key17": "5L5H9nMb4EPB3g5Y2Au3ePjgx2WgkSiQScxbGdJgRLS4i1CYEbkPF9zp51diZyqFPHsM1v3xMMqoHZ5Fmohrhm6M",
  "key18": "3ufih2Ag8DakjShHArd9edh38pKTo4yZ3H2rzkZiBGAKwzajUPowNGim1jFC62FU4T4F2iNHSVVa8FAqNCrkpLKq",
  "key19": "4E9BbhJ1r9nuAwoh3UBFwnheJwwNQERWAJLoCwmoqBobNwQd3mFSwG949JDVyuxnfybDP5Ykk6kGaimmjdCTZDPq",
  "key20": "rotoSv45Apb68jefj1rrwedNfAmuhxtDbPoDFZrNmdYTCz8Y2JrWkHSspBGhEXbtJGsZn4TPN9DjsvfaDhrbKkE",
  "key21": "gMNnPrUK12suaJx9e5awYhvA2AgqJWNfPq2JkD9JuYNUeq36sfrgR4YzBCfr3Sdq4fhNvnB6WizDSZivXyYiBby",
  "key22": "5Nhq3Wyht7zWsxgNGwzRgixBpKhTzeRxWBK4BkfphBPuihFPizMtSXhXKQ37wtYULm3vwPChWqPoMhs1HmG53bkM",
  "key23": "5nqeWbMM9RAmxbnaR9x73Z6NbgmEy2RprsbRjVHewxK5zKJBBoFw1cwTX1vtTUVXJvJstNdqDpEMu4VAKERf6jpt",
  "key24": "4xKntMFrGdVcZwV6TQhgohLqh7rPavx1pFCtXJsuyeASZPGFfpBWbfyr6jx77v3JfZw3Pea78KNuML9NmT5HNkk7",
  "key25": "3FB1UT9oGZNjd54awvb3Xyd7zJAot6Lc7Q6UV2rVwYNmKPGkLXoHRxmUMkWUsicGBJc43mDgbXRwF176qo8jjPn3",
  "key26": "fFAZ7ZoVafTb9iTdS2fbnwckeCYfxBN27z1k22phFc1eiuYUukPbmRRipcZNL3BgTWrixua2w4GfEajnFj5bUHg",
  "key27": "7JpdZdhDfTywCYAK9mEqHsDEvvf8agqHcVoJR7YUhWZWwZH9r7wpQDmjqC1KFy8LdaBBKoPc7hBMdFpiekiDo2d",
  "key28": "48iYaCzdihb77qCEsQpTZpA7QapSX3y4V22bWjwfJEPxXAEdkKzaKqocVGHGDHBvrk5X1Toq8XMp1xJSPWb59TPf",
  "key29": "3cGaT9fMbNdBLA7J1ZA9Q7hFQgqqUwBh2U1iYNBkZRbNDJEQwHjHHDetP5HvhJAsBW9VJLYjcDAtJj2WLsRgLTYx",
  "key30": "4mgZGkuXSACNF9jUZohpJnCqX9e8NwTWxWwzceXsFKP9yqRuHRVKkRUzcS7Y8oKtX53NUY6Qee9ubVT76keXCxL4",
  "key31": "4DGxr2rpm7xW99FpWfMMDEboTM2ZqEJPwmcBwDT3uZjb1oc8MCFhheaEgb7sWueVGB7P7hZTuaLSHhYY2UtRRqV9",
  "key32": "ee8osTpPdybKbp6jmM4bVZ3QgrAwZFoBLPUzWqMFtgzYPLBVprtoPGDmzmXp8LcXxGHbmfFA3QoCfA1T9bWv5CE",
  "key33": "2kHGDZwfgsBKZPqoKfpVusp332XwXzQmKsKcHSoNymhiJaGgZPHzq4XGzzfNhMM8CEyq7E65ZHe3dE6xT41fnXUF",
  "key34": "BUHzn6Vstxzc7TrwpxXhLoU9nzNtYBHzN6zKwjNTZMXe6YPLKDVs2M7ZGxU4m6PqYNLvLULhJkyHXzHkbg8wYrN",
  "key35": "36rGui25c1mhs6JZBE3Cj7ASnaoz74W4SyW1snRJufrZhNmBCzzcLf2owXC5AuJC9PnwdY2h3cUdRKLaJsyuXECD",
  "key36": "4Q8cpAq7LC19h1q8pQKcWBkiXMCcXt1a7hDpj6mxJizE3JEF9vao627xEN4ASGkMydgovEREigGqMLMMcWhhrerN",
  "key37": "7d5Prqtnt7dCL7MB3y21KdHhF9H1WkKvmEcXhmwtXogJhmwzChYGR7kickVRwgLYhvUgWmioXmwr3iBBGrBuf5J",
  "key38": "2iJejYG3HbbXkoB9cJ2vUpekeq3fgWxA4zu6QAeDbSUQNYkBZT75ZjTq9sc4VvqEreugAx89GQyAAdJh5N1M6tXd",
  "key39": "487mEJQ7s4h3hTFFaN7sYQhFC1bukSZAE3yJPQPoRX6UnDLZ8wxYtEYz1PbjfeuGbmwBjryqQhNozuVQzv22XMs",
  "key40": "4LYuZw9QxGjftt8srSMAyXamvmYzBiY6K8XKBA3aBMZq3vbqXpJTqeGNAk14Fg3wqXYCcrRwrqSJ331r3fURhjPL",
  "key41": "4hqU7RZpCRcQHtdWRVy6RdmqY6istr1M8btJaaEMoheEi8M5uyUKfVLbWGfuKPWouBtVbvshj7Qug9WLkGThe7ez",
  "key42": "3ff4FbU7A1kVdLPBrZ2LqnUJPyHD51mgdp6AcFYcaRfBqmRfY45aX197wKmJUcsCoutTPARJwdgjD2qyTLjUh5B7",
  "key43": "4DUTrEDcqzhGztz41s8VvScEAABJjsgD5eJznEU351XTA6QJXs6Nyuh5GEYeKxxC9Mqgqsqa7nGAY5vLPuz9PPeN",
  "key44": "2rSffF1YcXrxTX26Uozn2cvyGAjWTwpDX7NJs3pfrqBWA2hijtymJkRf1u6fa7y2NGF4HyPvhVnzfhkWU71qouNG"
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
