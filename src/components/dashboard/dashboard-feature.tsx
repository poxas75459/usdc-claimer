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
    "5zgG3BcGPLipbsDPL4K1QjBAn9havhLy9ukBCikfWXorZ7GVazQmfxTjhNqBNj71L9c63tfFaZCnUAfz74rJzBqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vQreGAAmuTryExRbXtaRGVvW4gyiDfiEcggsKKfWKrQiiheQySjgMXJSqywAgQ3Gia9Wt6YNkWqXqTcsr89naXf",
  "key1": "5muqt4q4hQg7xTkNC5yc1GEmkGnFZWm9SXnxYPjQYmLkXorZeLMAi9wjHMeW3ZCZf3ydnTAKa8X1kstgZD7hv3Es",
  "key2": "5sQGRiG1SLG3r8bEJFPjDNra7yR2d5xr9BVvmLSCTdu62pcWtAiMdFJUHthChoGLRnRDKPSrDgcBjiDVfQ1PAQ7b",
  "key3": "4Ce14oodmTv88PfBKFVJoxDnNuDTnQRpskm9gbiHZXyevSdeUqs2UtUu2iV4gtAn4PhLpL3Zuda4e59DSS7ATAQ1",
  "key4": "3ryWu47JcnSjNdGHrYBg5HCBJGz9hKoGGbjTQMXi5mA1cPLQAxfVaAhXapVgdnSZMQSgYC9GFJxN223QuFLbAyYr",
  "key5": "3gi3ZLAen4NyTWqsQxZYniVeHJ1C6vMwkVrf15z4Pv2qHSztkzjm9hW8JLAfrrnyMmdFXtAi3myVpLqkFKC8T2Li",
  "key6": "yKSYMnLMLipWsKg2AuyM1udj6aop6dd93tj8fixh3HtVT6XgaXgkAjyyhjDn9YKL8UidSj5ig8PS9sXisJ56dDn",
  "key7": "5TcUh5N7TBCdrARDTYT8nJUoEJsweuN7jRtHV9zYVJ7Ui9qsxa8z2FmpbFrjapan1JsYj1AiC6RwNHDnrKVRJw23",
  "key8": "5YY9cEWTSpGsm5MBxpVUgEybSH2ecrqCwd1oJhAyRzby84xVbyGvSCWVteV2TeCHSfDhTNgaewodqp2obYo9iDfc",
  "key9": "5HNQ5hsYMQDnMY64L2LG5MHw415efiGkKXrjsMQFM1KgncgQEGWg98V54ZAnb2AnPNWUT475zuPkJQvuaHGe25k",
  "key10": "4kF3hdbYmSZZhzgEvo2Tfjb8TQXN6KKhXjEpL9VLM31KKmZBLvwZJvrFjgxs5aF6yHjLH2MPdpkEFSYpMyPWLh7G",
  "key11": "3pCnxiRPfCR9p5dCgiJhr28CRJJwqhXx1Po3BiZLu23eTZJs5f9ARVWwTN4qzbzcDWWBppY6PciJP4HfvVoUUFe8",
  "key12": "39FGtKTa1bmvAi78XMGJ6fPkpfZyqUXAQB7ibS2H9DMbohfBqXNgPr5DJafPoDM9wCqHJ7VcY1DciqqzkAZsT2i9",
  "key13": "2kwThupxgBAQRAKcJjCqkBTR4x5y9ey8irLudDR1FAw5DUjHTt85WACRt2Ffo2RhkvQFxfFZ2VjFM134reYgVNxC",
  "key14": "4eFAC6wR3uYLxY3iN8euaTkv5nJxhzBS46F7UU3uqbErJ17EJZ2waarCgybfpTLgxcV2WEYHEiqYJJg9n7uYAoak",
  "key15": "5SBeYPAYZ9s88RBLkvRTWyvDqhWZ3WX9mNSUDcphjgwykXu45DmC2xcCc9Aj8WnY9LXd89LxMhy5jf4ZiR92cYZ",
  "key16": "2ATRh13pgc9dpdX4bw4PCnYfebLbzBGkbLnZMTZ5qC6BgmfGaSNVosEvK2AYayWmSVi6Y89i4g1bLcqvcDRGcCdD",
  "key17": "61v9qiWJCakdEvwZREGLqWfa6YLfjrk5HUQrjhjNTU1gZj68YzTniRbiYiDFb1ajJZvKroJ7LnfmfQ7xxx8qhCcm",
  "key18": "5TJ4GWtpmtH2CZ5nVVMhvATVvt2bjtcYT6EnRW6NY2jqsGsX2b2qLMySywceDKRbTzZ6FLWubHTejGLxEtB5MAjS",
  "key19": "5bGDyXmkvaEJuHFJPjc8CNQfooLW46cz133bCi9PYpk6uYPXyEAxVBVqz6KsnRvUXvLmSBsMtdYoezUqquSLMyHQ",
  "key20": "46QW9jevhP9XqhhJ3H1PeZ2WWUiBUE4ci4Au89UQfkhPq79WCpdiqfhBkn36z6vNKZSjfu1nE9nPhfRRQfEuyF4s",
  "key21": "x9hZRquF7GR6AF2qwVHcWw44EKF2psXRUMYBSMMuyaCaRmbBpgyenmQbfMB5cCQ5WQr5yWVNyHxRNjX66idn47m",
  "key22": "4c2F264XYZMufo4Qmqe1Vthco9zJdwk7vVjbDyFVtL9qzj6LhRTnKHvfsYjoxCbhTA2dfCT5oJQ9nRPyzSzy6wPN",
  "key23": "DabhZM6hFCS4UWhUDHeiHYuroSkXqPRejai6EmDNz383P9fK4HZrw9PD3g164JbCiTDnqzovxpWZnnDHtf23g9W",
  "key24": "WEBL5yg5txRJL4894QKXWdZbo8fmrzkGfxBB1dXiJcMyERou2B9YHYntFqskVUFyzzupkvdvAA1w9fX7RsH3yHf",
  "key25": "67gRydF87YEiZCGMU7bDUyx3dEoaPWn3XX7ofs3qpbDAkwswaQus8jehniHLoVuSzqMHjSRkpWfjdFmjLeFkEceX",
  "key26": "5ffVFn2ckx9M4J9bVBVk8zMHpyo8KKqsJVWCZ2Tw3zxAstHjT1sizBDrti1QNfoYtRPX8mZz9jsTEV7kKYbgPadb",
  "key27": "5DzQwLLovTppXKQzK97cbE77vu2TfzSvszB465qG8wbfct6J8Ye8KuVotAr8uKzjZmiMsM7CR7Yr7M2HwxvAZr4o",
  "key28": "4QYCdirSv9aoxQaU2d9oDbm3S5jWbfysQmLunWQqarU7nTbSf5nchjkqXHKh7pKqFKfyS3u88Qkv5pZMcKXLSPXM",
  "key29": "4q7HyhPjKvxxaxsnEdFa7Rk5PjkKfS1PDNgAxfpQbPR33zvF2XrFgptCZzwBEhvAxi4ssUFhwgpJwbezasMEshRx",
  "key30": "529jdHbk3SetrVngPDbTJZdBwoFgUpWnpegq6jqxWdXCUREAjq1smxRHfosGtKEQsHpV3aDQS6ysp5nst8PGCWzo",
  "key31": "4yKT7r1FqoBSuPMi7XnPvjWZ2zEWSytgiGRnNzh2TpT6x158HvWp9FKk938WNGEHWPDuZGKntqUVqaXDpDKA7FQx",
  "key32": "2gUUSPQDqbtMT4XoMWz6P7ykVmaZXWU7umhAiCfFMmXoD5YaHBLs1BV46ctyrtySbbpmtHwWjqrCEwUw9LiVLTav",
  "key33": "4Eowhr5uFBgo6eWXhkLgZUzQZUpMt1GCAm6Fk1HbLAyWjD4rZcQRyms3GcZCoZ7jAUyCYCpDRqroaFjzwnP2mG8S",
  "key34": "JYySzTDV97n78j7XJAFAM24oVYFw1xKoAZnjWEcnYvhmzW5q5KetwuxHPKJwYwoF5My2MLCYY3H8oUqkh7MyLDe",
  "key35": "5hrGHFEnXjF4DmTmG8Utz1WFp5wobw14eYuM6WcCYFSF38mxBEec1RMpiwDqQp2nCNHMYsix5vYyHxmFp3hJYvvM",
  "key36": "2vMARkNrZw9ATM9CaGPtEcDE1VMn3kYhnp4CWgL33JGFkc9T6dovrnMNBMZCRsxuakTeKy4AwJaWuBzTCZZenpHQ",
  "key37": "5CFb3gKDr3uMDNQaYMGPeNCm1KLvbtimHpoEnYSPEavK1gTQrAhCMkfTZLXqUv68KqPC7hCxbsKqWn89zz7W4ArY",
  "key38": "5E8jZ9ELUfx9KnRLnTmrWhPKQPk3UhL8H6f1Sn6VECDGLSDcGxoc4dCkgFvmGU1TpvvJHf86KgjQcZN11U66PLbp",
  "key39": "2Jgojn9t43RCo1CRmLPXJ3YX1YJ8nK3SaBXwim8qPFkFe6uZifWW8dkDg6wqY4ajBuMq7gEpXMRYknLpyAngBmWg",
  "key40": "23yoBJT8fA7T91rQYoQ26n1oig3izxt6wFa1WnXTszuRXsrb15aH2bQmhpyUY3YRCsnWGmypD3bqsby3SXAqo1vb",
  "key41": "A6WD17qzrveWFaXsPdM8c3TcjpuMtpymTLicJKbCj2DAVqt4hWcWVeQh1H98TWuBsRKz1pBwtgzGwKEfzGG55cv",
  "key42": "j79p6sM9w1vJ2AoDno17nx74z2UF3pUtvhRaWHEqVTb3bWWhbTyxa61UAC6A3FbPHo8XRwxzN7YwypCV8hCNdHP",
  "key43": "4bUGh8F8nctu8eFnuv9a1pPjBiz2BuEQ2zPu31Wwu9EKY1ZTGaVJ2SVAGYDb4JwUnT9cr1zZQsretavPvwMReqPj",
  "key44": "4Beyhawt31NR51LCAGC1AvD7GUsKpeHgykZrPaXaKEXze9nrd8ZJKSmEYSganrDuprD9tHPQfE7C8Wk8iMBLMYU9",
  "key45": "2p34cCZA32diqrfDWzX6PK2q591ib4woX5NotX7J4RVBro6eAGim7H2EsFZJ6Z1BUfrDj2e8bSh6bHTY6wRBZ2An",
  "key46": "55pc6tscnpr562r4Av8uefYp4waEUAS5uwqFSe1tyGXtEUo41N7KC9FkgNW37arvXf4ahTi9r4ngyoCkaCoQnbFK",
  "key47": "2aSqbfQwavuW6oT4262QzfQCvH9R8aF5PyewKxGwwZ4Acds2GTDSJjdbuNB4G6HsP9h6FRYxbJT5YHR3BSHLwn3p",
  "key48": "3qbFiRXBa4NPdh41WAaP3pmLM73MAtFh32oZrFvd51Hh2133VDvHKWWHGfjM3NL8v33CJPdzeD2GehFmFuKJY3ZT",
  "key49": "225feQwbeQNW58VEi7piWMRciGwAtpXE9YaMsQf7XeoiJQekjNRW57wguFddap58tP8Locf4QcJXA7HEopjYN1pa"
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
