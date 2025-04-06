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
    "2xrCzoLbNVJk5nraD9rUDbid44Ry77Recvo2YX4YA6gm3cz3NbP6B1qwrvhqU2NZDcGH4KL1Aj7x9zt4Rnf5BtLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M2zMWJ3G6J2wTTaTFTSmMA1fQHS9sx8qWELLTB1uR1xh1HZLk1WkMTY1LyU81ohkPA2Mv2enPJUuQHutHAMU6F3",
  "key1": "3TLitGzXsPPott66wUz3TT4TbrLDfMR88cbcpCUqDr8oMrKVg7QJbGrh92RBUeWhGL5yvxSATYWyuQK9Q3NLaHY5",
  "key2": "4TiKzFw7fGJgrzzaKwVcF3GxrP53Lo2HiEBd4oqDajdipAhoHyUpsNFcauTzgRPy1dZJ1VBG5rPPkgphgAHS6mJ8",
  "key3": "5PY1TF54rZPpv4B1G9V88RswNPBctYErAWidBQyw5zBgu6orUFBzkVBkoSherU9WMjqnEszCHBNjrFTFFC71m9wD",
  "key4": "5x94XRqt3zt9kshpwW14aUTjrrmrRegzmNksaeC8rc3pkMKRDS6kcBMd6a5sEwREYNPPTTq5LSaYyAjaMMsYnXnk",
  "key5": "5gUN8jBokfrLjk72TNH6M3YEqQqTsVp3rQ1HSZn2aVcBeFZRFePFgMu6h6hiNv37kr4xLSBdzbqAFhsRSvUG2Nsz",
  "key6": "oa4yTJRHrZGmeKaETwDG5zr63edvuBoo2hXtkK1Q8YB2HEerztqWD3SzwqjF3c2VaMPkzEUJM4FtECTJcEDRqyZ",
  "key7": "jCSj2uzkpDxwQ9J6mU2oEUSXzxChKdrrTiUvvtebFmBcWz5m2anMVo8hGSLkQ4XdNzVBkGSaehBKvN1B3sfpvCi",
  "key8": "29xUDBHZKXua8evZ3XkeW618SQqX5NyiSzomBKs5mX1HYvLSnZJxjsz4cywPD3Z3UnCNyKokJNUXE4p3Gizbh882",
  "key9": "2jvzA89pQzExYR3cddooZfEvtCc4M9K1Lvg8PwBBGFdR1nxzrgusXSxNSUo884MiqygPpLgMx3SGnPPY5m34hUAq",
  "key10": "5jfDsmi5UTPgKEm3YhGqrdzsLyUrkFUN9kwVHxjKdejxYZpsXvcSTKzLzfQ5cpKtLBBZu2BYbXdJNrqNvBDtDAN9",
  "key11": "2TDbHqb9at25dEeNdnPEfDu48TThHa6s7t6qymMv7n1n6CdF97DCzgSjgbSZpz3dFvMPXVSkjYVNsMXMTvgzEZ8V",
  "key12": "4WiyjbND45d9hgQ8SyxPBa7g4YtSCcXyGSGR91HLbUDmTWzSVxHfNHNNp8zo6MaRTuTTzrggRJYX1WRQBNj481V",
  "key13": "3TKwMKEEwaAfKzrLr8xLwyPiZHZpupoy2scYN5BjsNa1f2dP41iHXNW9Bne7g1L6qwgRGGER9DFtA8W9Kgyxx3ok",
  "key14": "5TpVSAyzF3vNr5XCgaSdFyEUvWjVxG5Acieqm1bz5FUhqgDwC9CVmP4N4nJXyWX9a3QDBgvHepcEa5GrZmDWiMao",
  "key15": "2ptVn6Uv4RoaakwSi9nD6s8ynR3sfcVDWhLdqSv5gAziNzg6N7asZnJpvB1u9HBWktAYbTx7y1R6A6dV31Ru1cng",
  "key16": "3CYTe4rNW4HGw4cpXuiPwBx9KbEC4QMXBMb5RHu9xaxSRzheULfPKA2SUjeb6p5LMu247UCA7SFpqAmMUaLMk2Yy",
  "key17": "2RiDdHS5pAzsBVxgGHdZYu8Nam6mEAxfNkWRhriy6nLB7StB2TY773o1FrbWdVh45HhRMKg9tTZmSsovJFUGDyhK",
  "key18": "5ZeRugmCi6oSfb3NzZ3p4R6UzkeopPDff3M4M42Tu3RTzE1BkAFZ97XALfe9t6u5ZDA8VxFLppDpupSoubSKQcez",
  "key19": "2R3mqM74BnQpbsQSbyoLoQ77V2sNTFnzsnJUHbkQHzLciBfi8jPM8X3QKG9s4yAYVCqEPDsh9aPq8U4c4vSLPh9q",
  "key20": "yiJD3PUHXKpQaNoDaAB5kRj3Q72Dtk3V6K6i7gkQreHTHVMfn3hd33yzbr7BT88oJeLuyoBagPHyX1tDBx2Vnof",
  "key21": "riFh6TiY2dpgBDth4E8Mi4CPSFPGjwDDampbzV1FFSerxCd9JzYMwpEQkm8VV1NFHN2AAtpYMd63Tz64GHf3Wv6",
  "key22": "McVv2QmhCemEVyUKYWKtHQE3yTQfhFwKbRw3UPAnoRhQW4QhExuLU9yoGcEkFrAdbzjGvBBYK9ECzGZMoSWmiGX",
  "key23": "4bFVafBKinGT4jAks5xHbC94BB2P2ZRqmq4pYkDRj6Xdaqo28r51eCwBF3cyW8UjAThG6zkCKJa9Fh8XEmiMwtwk",
  "key24": "LgfjEonqyGp5xfYzNGvnthZh7S92xgGpYC7o2v2WH3f7fTx13aTBQ13qvkQXDwSHadr1vpASmpHgqr8oAKjyTvE",
  "key25": "5So4eAR8mPPQan9KDr1nRQg9toZjWozyBkHDxYrRK2aXWuumNhGrvmGRCEnBWbvGEktfz2L6nDc3ucAKWDPfERu1",
  "key26": "16GL54RASrKDR3Pys8kaJ9Auht2fsknwHHfp4gLB5vEvBjaeqMKwwBY6GBeMPfStYNztEmBN7TtcpQLsgj6n5Xd",
  "key27": "3r9nyXndB7R6QG7JTFUJW69NbuVx2uWgYWMRNx7G1762iEJDiz3VLcgBJBNK6d3S59z3ZqrDq8GREtw1Bh6Hvv7R",
  "key28": "2CPNUdH3kTwdKctu8YZFoWpWQgjgDnzx8XBDDt23ZFzxBAJtUsiLpju2LCSyoNw4KyPqBEJL9xCg2aBGnfJeqqFp",
  "key29": "2viwCvWJjHLzvvbcDSprGTqs42nnG5UTVe7ebapFPZGvETj4bPUXTFp8bgecAPjJw9vHxVmGk34hPEmD9MmzTdrA",
  "key30": "fPf6YmWHVp5rcRy6qmmqByLeYZUBqwWs1Cz7UTnFWdaXSAZBc8Ejv1Ro26N8hBeJVBKmdXHQE54q4bW3etjiGmZ",
  "key31": "YtFmWRgDYPmpGBHQKbxX5y7enRpH1AAauuCUeXmUWC5Z1TRbdeRspGCXCBJGgCqvNTdY7JX4eSYW1H3PzpQLn2C",
  "key32": "5N5cDnah52hPsA6RyFcw5DfN2619bJTr4z67aCM3Fq9Zot8Fkj8eGcX2qihtrb7rockHZus7vC48eL1hHDaNxem4",
  "key33": "3StxtRyZndXzXtsbZWyuF9swa2fdoiFGo7i6eNXzuB17fEGYLKEbrm1U4YF7ZHpqVXKzD4xT2gT22bgr47BYyWt7",
  "key34": "4EDnhBisnc11Pr9um6Y2Gb2KUaXFf6ySeJtFG6SfEHtjjCyD9ERDaiAfYWpWAya2EVjomvkx4kCQmUVSSCKy6VmP",
  "key35": "B6JYFa6Bu4XyFNKA1Nb3uVPyUZQ3Kyp6FspdM1VpU6KnhGNQgwYky1LzSEzxnZTGx1L68qNjTcnAK7175qUA1hd",
  "key36": "57JYeRTNvJKLa3r4Wvp5AJ4hXLsPBTL2vSywo5Vpg3eLPunDCMkEypLeCJHyGi2DfsYZusyd8BrrYrUqTKxJZb1e",
  "key37": "5XUT4g8GpZi9p52PUMCwAUijXdNkykv9qSYqrugHPcWH8cUEr6zccWfYhVVjwLXXvD9T1Fcr7RrfCnf2Z22naerN",
  "key38": "kccuyMmDNipCJoS7hNN6eFVUHEXNND7AZJyL8486ogEZ4KzjEG8aKbVCWsSSDuKyQHoqFj6nAbgZjhJAUNAqnQW",
  "key39": "2SBCT3eXakmjeWA2SbHVBUFWkw8TuxL8dKdQCA4XJGLsi4fF7XxPNCo5tMFwN2SLbrv7ngFPtnuui9BJJmFEvFmr",
  "key40": "5tbaEh18rmSgy6TnZNFX4ETKpi1qnmo8jKJgtcaEfZHGhNLFW2TGTchiPC4PkB2gd6QVd5rgzaK7CDKZDyHamapP",
  "key41": "51CWdZkJczarJdGGwXq8XwBrAqH4BreSGoqJHb1MvAfBM8g2v99ZV3EhMJG2WK9rgiBAwjKdSZy5npYoEED5pUgL",
  "key42": "43uZBTS3KutNguNEiEXejrbY3BoBCrQvskiL8rdDW6S2PKQD1pkPFE5hkPLpH4n544nQzrwTHNJZKHu64aRU9qSF",
  "key43": "2LYy47YteyNgtG1mU779eTPPW7C1GD3kHZjUTRm7bZAfizZ6gKL6jnpBqpeX7oSqXHz66Qonk7N2bort3yLTXf6g",
  "key44": "5zDtLBcGCJneGARZq4bK79jLacB3A1FFWVQuBbbrwogkWZoVsumLkLKJ6Z7HawnotZtqXYQyfaffsccHP7rsf8BA",
  "key45": "4gpu1Zhk1nWnbKT3vtNmVwa6DqGi7PqGTep8XjR9UXrbbyX33ZCaQ5GfUW78bvL3npPFMYuaqaMLCcPDRQw9FCM9",
  "key46": "36yteZQmupg3rJPbgENNRjjcJYAFJ86vFNnxNSgH1atspuGYW9xYcor9eGtry7ToECCDRv7GQUNtEwdnZuaQ4SdR",
  "key47": "47ZdPj1iDsyjrkdJCmMgMejKo2bzkMQDXHcEchK8fRXFBoiVQqUaqXA71D9VwRVJSqRA8nJumhuJMEWnTTkCfN1T",
  "key48": "tFwj224Ff5t87mesriANXhq95SgcnfZSNC2hLYBefNxctt6uXgNAeWdHRwmrDmeQw3ukrmLpfHiNnFWDdY5TWKw"
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
