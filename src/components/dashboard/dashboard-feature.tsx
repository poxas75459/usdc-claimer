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
    "i1faYywQ3vMxAvTX9sdN5krdmkSsKki7ZkoBTyFDRca98aVMJKbi17umhFyPBjaZpKjcoo72GM3JbuxHRBfP8yG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WaPxKpHDnxg8MVven29tgoyKCWfA4qf5u1aZSjn73mKBgzhrja4qqYG2DFha1HNxrEu4eXqosuwvpjq8xopAChB",
  "key1": "DXL5iTgvHMVfKzBgBxGb2VCDAhNivvLNifbCdeNEpgj34rfk7q5yFfNUJGiGGpJ93hhzhDujdfJD2gQguREkrNx",
  "key2": "2a826bGprQFpeGsrwRcytDd3PbKXHqeKKwyXsvMGnfdKMaF1f2J3CLvb5Gr4uAyDZXqorpRi74jFTDCnptknAERq",
  "key3": "4PssSfCHhSbxHL6FTZwcdaHGcsmpitHes65LRuBotvWJsZCh231buFAx62oyoJhsEuJuvU3v1bFe1MceRfwonTeK",
  "key4": "JoZXdskHqwvHfikJSYrUzodUZFxm8nh7HTbCywouAGznVDMMAj9vPgGkrW2opLgkdS9rd3q4NG5utJW2KbDUyhv",
  "key5": "8GD88c9dBEHkqo6CULwTSuTqQyzb2VTTpdpSzr6UMH9rQNeGXCGhEYwTYf1yB3oMF1TeW3HA9TKM18XAfCceAvA",
  "key6": "HwGioNLcx6Lk9PqWaUxjpqWqE7ZP6sw7W5iRGjiU1PA1QRzkM2LYRvsvDn4ngd7eohtUMP4axSjcuU6vrSyaZmm",
  "key7": "24dzgiJAm8j5fhqyoqyRUAHL6dHDXih5YXUfHwAW9BcD6k3rehg8vsY3ctP364yYC4HyHa5dEag9tvdb9fRinNMn",
  "key8": "MzQXs53qZ232UtW6pNWLtLHWTvhrCEtH1CFwseonuxMdRk8tUpc2UfYRzkH8a8yKWc6einAn6Hzj2KXKqGrZUwP",
  "key9": "5xrtNjj7TZkvyV7m2tMVzUcsTdQrsoGUGNfx7WkUi8nG3jxjLabXYoMFQd2ptFMzeGwMb9PhnCz8bXfr8cKzpran",
  "key10": "LRqnn2xE63toyCwfwGL4Uxa2N5QSFSs4V73ZYcCJHDaRBuPBLFAtjRmZy3r4HK6NAiWdsWDud912S7TgnH3EhFE",
  "key11": "Vdywob9FgBR3rixiyMLzS3AQH3KE5X7hLTvuBtbu6xG9cyq7v8UEBSxkcgBh3oscBgnP2FUisDMmGmWuoZinPNW",
  "key12": "5ydKcMVNLKjjeTagKQEM5R9qrDDP96fjEZCLquMLg4Qguvp7WpLnKUvRhyRqsXHrpHDDu5tD65CJvA51kDJnkFsp",
  "key13": "5h3mCtUWToLKm9NtDiMgu8DzkKuWgrwmv9DGE8iJZVHVkAYt7KjHKuEg4sPWWZX5VmQsKkSVnwbFE5Xdzq6rkPym",
  "key14": "5AtE4gfKHsJfGig35cFz6inHpsBjGtPuTZqmbyKE4UWjqqs1GzZGj5drLPuQ1gSmqZNup8ihmwZgL4nEeYmmjPTe",
  "key15": "4v2bXn3A8gDh9jiZbwx134LeGHcebfCoqgkZF6MDiWj1RT4QmehjB5UBTEEHCYUvULwTXxqbixhTSiWRjQkEZoBR",
  "key16": "CDeEkdK4J9UTMunUL2JuyLVFHJsWnpPMMQJwQeRBzDFytfpkrBjeY24Fv9XsvdBJnvHPPowAE3ENj3WZi2eFf4K",
  "key17": "DENPgfADMw6qy7M2VBi53YDcNoxdxJxAiHHAojJgpCgRhJupSMyrLPLL5sj2xxYpXHw4yRjQ2FyWSuqdNHBTayM",
  "key18": "22ydrSVLPi9HDMf9fh6NHjk96p12vse5Lwq8ZQzCgot1vF1D7gGT2ATu4CyW8ijmH4k2TPo2UWBFkJA5FUgA9gmy",
  "key19": "2gYdQ1XwdhCyxL4L8SP3PqHTa78AbYPudYBfmL6d9hfJBxg9PJymegJW89p5JSGveqLpmH1KBm1SPhX6howgpcpc",
  "key20": "5PxiLDFdy6zNJnQScHra7D9q53VtKSbTCsZJJB4hx8jRKcA1TWPZ5UF1Ev65yLt2gmXqZpcMPaBZqGuMwUczi3Dk",
  "key21": "5mG5Y2amuyi2hFjXA47xdYJ5ruUqKdrJinvfa86Y62WrqLkS443zmRtQoTuFXRP1BbRh55boYW2dDxhGhkdNuxbL",
  "key22": "CDxP1uNEdwgMxkdGWy4XP8SvpLxzK5eDAZc36KpaMMmBNvbBxnBB3xCfFQZ4nssEaHXtxx5QBGCpJMbfdzhcQHU",
  "key23": "4uoZfrYJp6v3HViUMCnZExprwFzQ88SYDEUA4LxjDmMBgMsbYojeyCAbBxk8qYJtBKmWAwTEvPH2NhLeQLNyrAtf",
  "key24": "4NULiii34S8SpnxtWkd4RbzbuJ5GUziTfVmF9hzyaMXzYgjKVMQGhUmnfMcno4PceGw893AiNaqd1yDmHVGWxf8o",
  "key25": "3e5iirFxLM7KNsfHE2VP6YPCX2KGoVwVqh3ifHgmMDWBeYezVDx1exzg4Ngnma2FtufwwYPx1HM5vuqu6cJqA2QV",
  "key26": "2sPs3QS72iZUFfviUDtiPnXLEWDAvBs6oQeMPqHCTGcDYdEG3hjepxzKC39qGLrMfHj1xefQfFdjd9zwqoixfsgw",
  "key27": "5RzYHMVRsBDCNNWJbcdJx57ibJLQ6VKkRUcqaMmRBP6s5hrpWsj7W1p8eHJZXSnDJKevCc2xWFQzwyZCSxJhGvEX",
  "key28": "2fN9oexiccd8nngAvFEU1kpADNANv9U4VtjCtgTidvggDCkjzZ7vvCN5QJygwY6rXXz8tgsEuroWFVo8ngDeqUdS",
  "key29": "3eRdhDgyKTCr9h23Yi9hQHZaLdz1QnZJpjNxDEUHdBT5cyHRdYQJicZKHRxdto9WzKEga8SjUZLAETbNmHN4U1Tx",
  "key30": "5cgKaaC1pSfqb4EmCdxkpZq41qLgLDfsXyBuTtFkZEThAtxw7kwfusGbb8Thb7guPsmZNqq6HqhaCnnesNQk9F3T",
  "key31": "51TuVG9rV2Gq3i3EQs4uxWDjWHpaQCyskwmVLkSRQCRkXTGoh5Pk1ZLjMQSngo8gBCSyowTzhan7gqvvoTxxRcBh",
  "key32": "4sUhMUQja3JgJZYxi3BMAiSCnufjErddJBd6pvsb8r6U3WGyaBGHNhsodR5HHpSk3DDVfYuLCbrW6s7RmTBWc4MR",
  "key33": "455KUxw8jbH6J1UAtw7L3uxkhcNqMeU8meuhcxHtF8yVEEZy8U8aBQfM9V7cNfSEc1RYZVsR9Rh7CxCEXBaoi86M",
  "key34": "24Bg8aUdyi3NyhFcX5pXkup4uFAGvTJNLiDdRZp4jXyhZXsHygWomXmX2CMroY9Bg6fBKhF4DqUNCybSZGkEsXDq",
  "key35": "3VQPw4m91PFTpewrnARj3x51fge9Z6NnUXoBU1pS8nTGbbb8SGAATmHB4tdmefoWFS9tcEWd79eaaNC6S2P7zdh6",
  "key36": "2UaDRYmv2epDReb738qRTy95jxSKLKmFnzFt1VeNeM9u19cDBNzymV6p6hc8jUH8tAYtiVaJik2tGVno2PsiRV8j",
  "key37": "4xZbGARd9uGUYUHddcnf7UC4SG6XAfD1XVD2R9CJF8PAscXUsdqMB6EiqmUpVg35HCL3ctshVnJeFxPgksyv4SAG",
  "key38": "5otMV3nYaHhReyjsJD2tLuKmxQrdtDYYVFXdctFi9cECZaSdM7skVeWzxDU4LWP1K2Aw7WznqU472cciJntJb7z4",
  "key39": "5w9twq3MiJdD6sYa8c6MtYSYtAuPUKzQBtoFPKE8jkGgtnMNuBt3QWMt9whnKoQe8UddA7ZsGqE4SbPADHLmyaQN",
  "key40": "3Cr5g5DVJtRXrUs3UQSxi79t9RDwBSKwC1yZQK4cbR1Kagn4FTD69D8fBDoqyvcynxEGSYgidqrFkJ5Ggmppp8pW",
  "key41": "5M45CFVEWBr9fUGNCTuiBJMfLDSTkhXmu43ZtRMtQd4VjzvY3gXVHJo4f4hK74nmBQYddYnH4uLMAWbewhg8fKgd",
  "key42": "61jFe4bD3VpSayoX71uDH7thRRq9FFG88Nbpvut6k2TXpBvX3wRNXymbawE1WtE9yzQ4ubKmEjxvPeqY7CDjvvrc",
  "key43": "58hKMayuGgcUfGuSx8FzynXVPrCSYuok9LKA4M6UZdD19cKUmapDyjTHMnpoHNbnMvkuYZPqctdHkZphwwZyfm5o",
  "key44": "3w8LQ8QGkdBkAcFN2nL6BPpnspmj4AZbcuTaiTbDQLJDsU9CGRt4LLFczfxPbx3RPx5FhDaNWdofMRbY7FrjwHV9",
  "key45": "FyMDtsR3gnE2z4MHQ5JMnE42xeoCyA7cz2A6JMkzQcf97YNqy15mPJCVL4nZiF4jb1FoFaNs43iqB6F292CiZWt",
  "key46": "3aDKr9sE7CP8jKWrLafzMhd9DibFbUD6EBNQUs1A8MDNqNto5tVrVKoybTaWY8tq5k5HutTdEuP1YyVTxjVTRM5J",
  "key47": "2DjPagmgH9KaXvzahsXm1tZ3uSUubDFmUuHG7fNxyMrqBV7hs14wbBFDof6sd2SotfTQXXwZXkx7eKs96QRSnr5K"
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
