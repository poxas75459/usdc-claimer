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
    "5EGk4XLMNVdbvwiYWZqG4mFpH5ZxzTkjDsoLny8cMTE6JcFowEgWHFMvBGz7F8XwZjJvQ1beu2LqQHMtFhWvwcrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T9bHCAeEry45EfhC8FYyKyZkq7ZV2DB1qJJMkuLhkVznhjjGk68Djqx8NaqaBUeek9A8zkpwuV1EyrZPzzabkYF",
  "key1": "2nBxf1ECYtYEyQfDffSDgaMzRvCGfeoJc1o9nkxQmfCaL9ppWjHZiGHGSWBQwihAuaR8VmXxmEhd11KydFWtYKAE",
  "key2": "3YFMwVBdHbwmwVNKmT6uVHihNSiwKr9swrnNsHX5qNUk7SSkDiMnKWbc3ieZrdeyXYLtVAUkNtFMmX7sj8zJzubL",
  "key3": "3xeaXFXAxSDnJJoxFCj2dgKXT23eCkqdjbXDUN45jeqZis7ETTLQnD8kJdQVL685wJD5Eznc8b3LxmjQGpnFih9D",
  "key4": "3W4brEpLp4MssHMzDPbWvQyL3NtqAfUXAewQgdnLxLximDXZkSMVS8KAoAQZkgRconB94h5ajpRfytEV2fJidUtr",
  "key5": "3GvYgKgE84rApvtBxgML67sxRmVXxU2RHt4MHTwMHccVFywBrepKxaVELfETKPx8K5PTk8i7eZnhW8aL7AES5vzJ",
  "key6": "3ozkxYup1gqXW2jr9zmmTRMGBDefqvsSBF2JiMqvFbqwDceD3qqKHiTThDgPMkGCTv9L4FFwQnzE3JHPrhV7reap",
  "key7": "46xok1PrhoQZBr1AaGD8zzyiGrXPcJJQVN8vrxr5pQ6WCbEcCKuFgPX1i3PBiM3x8cAitp4odTBfMkxNwVa1yCA2",
  "key8": "5NnLZnG4Aa9GFDTwCSPWvvVuNuv2Nvi8ReK9GCfFfB8D31C5qjeV8T7TfqJCQgHSpCEMBpfdJDYvsMZhmnMqPAyD",
  "key9": "Xk4aj4bijbDvty6bNCsjBHQRrKWyQAVjnQ72gtEz1w1UEyGbPzafErCSpkZ8CJXM5W77EBHiscYZX8CuSp43WAc",
  "key10": "B8HjeNRonWpGqrPhogFB6ZJRxb7Rvj5tFW4m5fJYfnYCpj9jqXz8RhXW2LxJQDKMX5LGUR2fjECgTeTmG3wGYe2",
  "key11": "a7Q6ECHfJZc47sDv9mbZY3AwVtR6hxgVXTQioFdJ97VZbs3FK4pg933AxTxDXWpAyaQrZ4nkXr6vS9uoXi36Et4",
  "key12": "2ft6gRT1gJXss9cq6nN8tJJwZ64soPDJx2VeNCZqjaZ7sSFC71XQKpuhmKEu82hMrLbdPoVX9FZjC1XbV8HSYsme",
  "key13": "5htZwqxr1YNSGi5gqzCkGv4BGo1bS9f1jgtKNbCLUSuaeKrbUEohn3bTq8VvpnUvusEdH1D2XfJ7cNSZabbF8EyM",
  "key14": "5iy4oJ7mtU6JmRUJBXdYWoYoFxoPH5FsZ95DpzFGJ2a6YcAkLtXzVGTASVwDU2ZT5EMyrNu3onyugiiyAEa2UZp7",
  "key15": "42C2e1kQaCStSFgGoEwz2jP72SNvMccaoEqEUTD74wAcXX29NSp4FyWc8yCRXgy2F29jNnJuBvarhSvM8qTC4dwn",
  "key16": "4CWQj8uU8XLpiCbEy3tX261GwbxRYAjakiCMxv3dzn4jZE6ao7gaufAdPFgZJ7jjyAiq4YW5vDqmejhch8yiJCF4",
  "key17": "5E1HbSnZSCe5jDrifpUGMjhSBC7zHLemmJwkfJWZPy1GVsVvkmvofYuAY8BchiDwGmnWWsB6RUnbGLT2mE3bj5oi",
  "key18": "5dEVefSf9A7bSPU5owLBpXuKdwwJat9XiEfQHEFA69o7PspZ1Nvnjt1tGX39yENkA5SbLtTrRnQH9UAnpqbz5mge",
  "key19": "3ZpSSFmzEWD5b2rTTnxmL8tDFpEDKBprBZhdqAsVZ1KFVsawUPaQu3BaLB5yz29AsToQgf6wRtzwatDRrwaTNsVL",
  "key20": "4KgePZVzCNo3Zp5Vjhz1twBwVHrRxDQ332bdQwaoWsvQR8z4yRcRRRBNE32kt6wi1C6QVH3ztAfdKfGGKGX8dcfT",
  "key21": "3TrvGnLFihaWsJLR6o9Yz5tjSSLe2nSpJLsuviSvQBrHV5aSGHG1cVJBWAJmDa116Hw3LE9tSgXW3VVpCtC2DDo2",
  "key22": "UZPCpRaUf9JzLVKo54fk1zH8vwKHn3SoNNb1pA2vZpW8oUG41uubyVfK1z7hkvgkPpMqrGGokExo7zBWYJxZqTp",
  "key23": "5zmSgXd6TnGdukkyunTaiHh5LD4BD8Ts4kXjY3wppVAw9vN33aBGoAz3E9XBsxreMdASTi9aqtkcRKvS91WoPWog",
  "key24": "5skm9aPBq9vovN6TQQ75We5bTaCXkpd8DgpACtFH5AqSr1hkQXaoAVJ3iPkjiATVAMF4Vbv9Mk87aVNq8CTK79QQ",
  "key25": "2toz14TADLjVd1RBx4FCsVKZMZ2W6PNpAdVnixGC3ivZs6JkiGbkspnG45f5WfwbePEG29u4uPDP2hSChSpvYo5P",
  "key26": "4S3qNRkkgJP8Uz3bbA61v1iVfxcjUQQdvuhAPuThDd66XTUtzukzgnCeiCfdaSA3Jmtm26MRd77C4RcUJTp5WBjF",
  "key27": "3FhV96JqSofUrEb6bgC88W6F5aF1rW4iCVkf2Tbb2WVQg2wH2QLqRXTuxNQ7J3WWw1qc734oiXrKPeU5AT12LozU",
  "key28": "63rsMcLZRU8EasUkfQfQy2QsebWsUJg5t5pJis7BePotVKowTbK1BcK8uC6kZ7RCnfgkZwmL772t4hYmorQM4thP",
  "key29": "4WAPoZT3VG8ZBcw11z5HGkUwyQvUy8grTKeCm9uGiyqzzeUsn1oSgV2q6cqifzoS7o2MgvtHYP8Vqtx8c7nfNkAP",
  "key30": "4n2q41jRYB1jP3RxXYjNYtZAF9UtAJMhRo8gjhcUoTssqbQHkPeZMVbGpWMAdNGvfSwbWJydWEFag91zi9UTD2JT",
  "key31": "2UP346h6KkYKFm92aLR4cs2FXenEDp4isGe9ySaG48Pf81WHGqatywqH7M7xDQt8MDV43LomiA7pY2PkyB9G1Zin",
  "key32": "3ULSCyTFgPhB9E5oQo2uSmAdfWDMtKrLbzDSt8Ztm3oKjWEZkGPcxjmqYrYzct8C6Nfwnx42Lox1WCn3ui254XHL",
  "key33": "32HYrP8hUEQugo5t4b9UhGjWkBwshXAnqMF1HKYABAt8nkifVv4rjknoVDADeyqHaefv5YNpEyWsPb34wzrEn8uj",
  "key34": "3J9YRqufA9Jz431P2291NigSzJxQuhjHxYqKMdBEFuzrGfsbZ5LKXkVfvDjh6iHiPLS9dcuZErLkGgcpgRT9Gtar",
  "key35": "5o1DzP7MHBYvLkg1VLZavhiaKwzz5SpErSSQypRdfpP1kLDX7YW7evNcmxMC8wFBsSoqBVvz8qXB55HyeGVjQCSt",
  "key36": "2obaZi1AhbCvtjNMjGp9KLsCF1EUwMem35iPtG1Vv9k3c2JDrYGHCSfHxj46CfpS7tbH5QeUBFZLixK9mLz8jbc4",
  "key37": "62XVQU8mVNyTNFT5TinCgwtfVVUVBsDBn5feaQD7YcrtfnTX2AnfJx3t8xRoa36FJW8TEUHimZ8Q8cAgvy9XcL2v",
  "key38": "2PEMGCk2CazUKhKHzEPSd1Qr3bsbxpGuCFTt5XHbTRB2DUiuoNDG6m56ajG45xebEEN41PGnk8PEndREXFppXxm6",
  "key39": "4SJKnnTaRrLgKCuRmKwEruchxA7wGhLHRbVceQkja6Ab7RXLMfjY45G8Xs2SHHqekL52PLwBTcVietibA4BFqRPL",
  "key40": "2Jjzz7571GGycEfa27xbrQndTDxHmqXZ8DbJGGEBFcYzWQNJK2jb3xXVSrAmKnNdWw6w16LSjJkDabtenY2z3t7z",
  "key41": "2crqduMpvi6bFHpBKm46N9VqLRbnFQwx6TY41zMHHJ3qJ2DcfS9BapLbddvNpZadxUSynKAMMjfhG6u1NaPFF86K",
  "key42": "4mgXb3wV4t4EXYwXPtP5oDBZZp23Xgat5FPrL2n5jYzan4k6HzA9Dsw8iui8vLMaeTydabjKhG6Et1UkQJJmcp48",
  "key43": "2bhBLKEenceeVptLUqk8du5pvjdhCiQ4GbBqsq2Xf1EmyZofvP8DXbRMVHzJeq4z6jCH4e18CE9mNTJH4rWmw6nk",
  "key44": "2fKHqoY28SHp6S9cBeDu1oY8u5rxGW6xpMtrPz2NGWNXdbR636kpuBNCa1fazrBBNP6EqcPN1MsdLPC2xLihWxep",
  "key45": "36YMCfXa8iBFyM4PhUynHYffWQwzSU7FBeiiWqPLiR9XEhJ5brTJMeGrMEUnRukz9UbBLpLyVAV2DZ2u9EAFLrpG",
  "key46": "2TSUteJbHoat3CvcZauYz4xAqFaKm1Q3qGMTX6n2T1HEi15uZryhSTwGiKRMC3iaeK2P72cZYj1B7g6hYBsJiDXG"
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
