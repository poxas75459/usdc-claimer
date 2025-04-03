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
    "2MW4TA9yAV7ozXr1UpLiFMBAdsG6jp3Jta6YBz5VP5vMpUooQn6gbAJNcHbnurmbWkHibCaooVAJRokZwTooY2tc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23krTZu2RdZi4JEKyV5LGwR1XVsX2EfiyMyigqpSa4gFkgSbYBDvyJou4ArXv4P5UJ3kA44g9c2TDJWxMbfE4whJ",
  "key1": "3H4JBLaic1uSPkyvpjuRbSMom88izCeGyLYjcmeHxfCkQ4cZh47UdRJr1YrQTWCsdhcvnLkpHsyJWgb62DbqBHSb",
  "key2": "3e3DSh138sV4qhHjbjLZRVaJ97ivRBNjHaRymADccQsLAcpdYBqvdiAZWWG67mA1gSwY9iwZEdFgwucybJFddJa2",
  "key3": "3YGGCCuW2ttvkCdveNGkL6S3LArQtameZa1kP85UQHbKW6NMEi2tmJ4wREaFs9pkAoc2Wvpp7wT7PZUAj8xMdYVs",
  "key4": "2rMiMJgb6eFqRsQ5p4gWC4hsNgM3iQPQ635iiLD5GzShiUBUDNC1RrzCaNSg87WC8eFqq3qoYiEfcf6biLvth6wH",
  "key5": "256YoLot7UKbeQSrzSdL5muWeHx9uyEH9ijqbyRjQkoAPBcuywefu1zpAhxtRqyEKD4gXuEkbidrjX7zcwHT2Nky",
  "key6": "3oUNGQuzr2w65p77QkKYnxh2EE3dqUP5wP1hm6dhLRsLu3rBYtJtyuxMeRqx86vjU42CNKahJXSgsdsNnpFdZu99",
  "key7": "4imFtCxsqFd7kdArDrdJbZtsKwvJttbbqmeH5Aa4gJfsw5MukF3TDZzGNtzxqsinQB21snopn9gcU9axreiRAjuW",
  "key8": "25rCkhg7EKY5GAR5XeQoFpRrLutnXMVzVmeCNjsBk4GBHq5nkaYsv7LGZVPgmoXeSH25zXq9HFfhFaKtgVT4dCey",
  "key9": "3tcNYXwThb391sS65p6yoGcX6Lks6zAVeHNdjBpNAvf7LVNHYLqrMPCXef8NkzaET7xdPWz1kfcgMMewqiniJJuo",
  "key10": "4z676oYYAWQTfuo5DLWDfiZMmFowqgWgs34qYvqecGv4XbcEpguwfJJxhbwDcFxZafK4z3KsnskrgfLaM2aAcmRU",
  "key11": "3RZiZ2WQN5iwwYj7oFdw4CZnNLoZT2euod77rUqRmkMbTScdsrNAPoaq8HchFYexijGkcvxAFiG54WJYqLuFNiVY",
  "key12": "3xB5B9etoZyWjbQExqZgFgVk1rFyyAYwP3UvdQsXEADmUA4juFJC6oq9PnmUECM4eigzsfjNg8MnwHu6suqStzd8",
  "key13": "66MWEEPodfATkEiUaeim3cjj6ApEfZczKxaxGLpur6QseuwZcd3XRcisPMjmfm4GQnFwdCVyVHMFz68KgFP73pPg",
  "key14": "5i1MY8LFThDSvfWkqv44Guxz9rhkpFZkGzgbAcHZWPzc4sdcZgLG2n4zEPhAa8ysAphkGj4mHVhijmP9RML7JKP1",
  "key15": "4EzMCDgVZzQH18TgRfHWL5SjHqQq6WdUACC5Xir7qJpgSN4qA4cNJAnpFAW2KYifdH4dXpkub51bSTx4KNzMDDsf",
  "key16": "2LpPmFupxJ7gcVeXRyd3jsyd18ELY96fPaR8bpwxKjJitS1KqgDwgv7ZpVSG5jtJdW2QtGkm9uzg8XsCT8ucB69W",
  "key17": "GdYPsZh9dkoAUuz9G4YnuJET2pKxf6kouLrmK48RytbYFHeH4qTN1eW3ZNVSYjciVyATVHtmMXuSXP2F5FmDsr8",
  "key18": "4nJgxKNsSpZC1ehbU1PDwEquiC78sipieY5SAKht5uACwzRAQajvhiKdbgxqfxStBE9wmUyWFCe7NBgn5BY1Ceki",
  "key19": "64N9ty4vd5rLb4H1geCMD7VNTdZZ7FfgzKP3oLQDVNBLYGcHAyuTrBWVAXeEjTaH2G5WAwGygdj1Js4tavmdcThM",
  "key20": "3mYijJAtNFTnLBZqYrraMehXpSXoQ25u6LY4DEGcENt6Rw8RojQjeM7rTvVfBDZHNkxiBd69TuNz7HjXX7jB3n1t",
  "key21": "4rnUxd1HHhz3BfoJxfom9EkiCnvh1Nw773cZxkwdZXvdmQpHmFdVFTnyZsyNtYnGv6G6EMEpA53S3hTYY74iC5dc",
  "key22": "CymcqMb6GGv6eBtFP4f254dUQBX2aak6vEmv8jBhwz9Gsuj4U28P5bh62hXD7LnVwJkamMRUGDm2DejUwpmedrT",
  "key23": "3CReVg4LyWRvWr45YmcbUS8bFym5mcxn16gX2B5KR85jPorAoDe6amEPZupYwDNMaK6zpGqEYyFEkhaeptq7kbfS",
  "key24": "3cXvnuPPzyZ3Fg2CmzQB7tq2HZhDXR9J5qguhf2yewTT6uKHGjwMWpyHh7yQZBnzVgmrWubfNsyTwfEYvsf38Kwr",
  "key25": "3dY9phuqC6BoEpAycN3ZRSGoQA3MVdnAg76Hb8xhFaFBUfcMWCCptJiAU4vBbhmV8h4ZnJfdW5ZKqAXR6wcptJo8",
  "key26": "5RoSDcHPg79bRnGysFaC1KpLVdyV6mmWkZzZex2UfFp2s6wMYSQf3PjFjodgwAdByEvEiezvfCXQ2f9HKTaxStgE",
  "key27": "2mqqDRYs6RDedp4N2u6osY4DG6XdDf72xe9ddof6gJ6LLbxgCGckgRJuwqGHcHMJERcuo4CqC9qEuUbbTTQ6mz9H",
  "key28": "4aWnggN2DSmq13cRFw8QcudKUNrwjyvFViUmvvRQKK9NVN2C55ZafFgg8SUySvyfaQKFpYViS3d7NbCg1mygrr3N",
  "key29": "AAgcQ886Jj1sF5BUEsN7LpHhunyy7gNSNNxCYdAsJAwCBykRLbDBR5UB1kjBwAAWi2WUg1HM6mLNpzgW8YHXHRg",
  "key30": "3LEm3s69vvULzwXDF4wSesFQ5p14EnsWw5h58nYGwHV4m5UVDzsZWC4ntpEhGzpckstbhMKzFeb2ka3W76DxhHRq",
  "key31": "VofVCiJqAw8h7M5357mKHtkce2HHcKNgVWmVBYngZoNqcgqwGQZmNqj8Mumg9bm9dr545aehoiRozeKxh4dvjCi",
  "key32": "wZ3aks82aQtwW7R5WGnv6JgXQTwjjY35T3cAcsmSZ9P5pabk7Cos1CDRgJ8VB21Kz8XFbZd75PAux9GNHpizsic",
  "key33": "5i7SLuQ4Q6QzCnqJ3p4bBV7noewxnJN3vSUidK5Pdrd9xKvt8XexNF959x81s7KqjdqZyugQVbAdw5WvfxZtNE1y",
  "key34": "4aFgcFoETBww7z5YtaNJztKD4HzsEtiQXQ4WgQCz7uu6z2UpQJK1RpZ96Ka2d6hZ1LMsAVbdTeCaGxvppR6BHhd7",
  "key35": "4WwvJ6N5iCTUCYbFbdrvvRvAfVFi9VinKSvJXome6uUoEsubiD98wwRCrtNmpYvyB5rP7ikckg5DxNCWsXKsGkU1",
  "key36": "29bVjWTSkpjmffHoriPdWmgiyejkw6VDU6JvhZnip4m3AZNrszxQSDw1NvGUKpcRUvfW77qrY9hQR33xbPCBLzq3",
  "key37": "2corWq6myjYTGTPskaQ9yzAWY5TRjFaArmJAuUw1p57q3u49xy8H152AU7VoSvCwVy3GjHyCs468Q4Xrpy57gQVL",
  "key38": "5ce4ysSRZAbXMRSrSYNvKehuzNM4DSV6BvdaecV7siC6svrcXQwd9Xc5bwXcfobcPvUK22dW3st7XgQ8VQhSAaJ1",
  "key39": "4UC49wCNkF7wZL638hfPZrAHK5mvJuz2FjC1AGTMgcpW7uN8fvdygsrVpKs4bLyvqFjrGfjvPM8ixVGwMyzCZDnh",
  "key40": "5PwNE8vycrBRdZRJqSABkuTCNTxso1x9aWWNU82q5RdCov24Ys3KJtcuUdZ8tPkrchZARMU7dTKz5dqxCb6rKGiC",
  "key41": "FuTqV8A7ntpvY4KUpaCJmR7mcRjK88Nh2rHkcfAPnniGidsKxf7Vxu584GQoRUeCKgYmXxva1gtLn3V9UuNckiM",
  "key42": "5r4ytc8LxArohuzAskkXcQSBwCFQQFdBaRLn74ZxJQfpmyjRCMDaE3wLhQmkAHLpVAcKfMH31ye525VyfL6s7wiv",
  "key43": "38tjiNNL6KtX2Wsre8e94KTW5rgN6eBszYhTwhAAjvsXm9PnkmSHTNFJewDtc8DE8T4nCuKJu1uZmoDB6Rse1neF"
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
