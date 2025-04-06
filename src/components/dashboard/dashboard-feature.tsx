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
    "252BA5soqTG3n9fTyi573Wv8GHNweG789zvnbuSk6ZLfZ6d7STxNxd8YRjkA35DUPVp2TCqqSc5Edwy5gcBG4kcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gg8mM2VPY9Jt4DL3f4P2DVdRWaM2uAfTRtjf1WmzRqv4nzi7eEe4XYyB31UxytH3MComzDZKxTUESi5L8bw2LFG",
  "key1": "mGiQvLTfEQQmCELXWbU6neGusJnzKJ2BHgaWBoBAYEbvJBW4HFfM8CZjMKqRgWr5hwTZSPgDBYP6VS1X1JzzEv5",
  "key2": "5WxB5WnRPa7y8nNTgejNXRTtXgNBS7gQCJeWzDiWVqnUXhm4WEt4zhEpRQPk6XGjKU7sb3Ebr5v7M688c5Fa377y",
  "key3": "5VG7yGCKqfZPZ6rAdUbsVJYqy1ps1AULYLmUfxRFZkLKchrCZrYgdJbWvJc6p9B7dBFo5zUWP9QiLcGgwEYPYqbh",
  "key4": "3PzPoNcdGwg3v45iRSELZNitmQWR5BPtFvT7kXiDPDm7Wu29aD7v23VzWtkromGDvior5wVRhWQfL5VaZD3NK1Jb",
  "key5": "4NEv3BNA7m2NUDwqgGYP7g6z6CAfN8SBqZ3v8iUFKvcceeX6VyUPJpELPLwxUMJCK3eFYUjwbBSUCsg3QDcL2zx9",
  "key6": "5bvQNqZh55H1ZaAxjyTvn6Eq2K17okigSw936HLvwE5okX3U5gYoXLUYzKS9korHTK8gcBt7uSUMogRLh4MWpHtY",
  "key7": "2Yt12e2Nu8NAdc8FCceDj92pCFsWPT1gshTPUP8Kf9Pg9gjhdjSgwR2eNpuydfJaG6dLWPPL9ngCvFoxPrsDQppV",
  "key8": "5VJMVFU6irfSFPMRH1VoHUYdvUs6DkTkMB62LPXviKPFsaihcUYNE3Du1rp4sHrrjBrRxcSbys7pg4wKMCZdeYvC",
  "key9": "4szkFyzFSq6KJxyYEeMHnwPxFeY9WkcDYqhf1cuPHPkR6ojePXNh47KDhLQcG4JYnYLLynHcJXNZt1YgF2wGd65C",
  "key10": "5tFwH4zGXDmqrSiH1ib1TZ2RFuUMov8nLyanTBUWaELtYtsytXWdonXypgvae836mPAzDG88294Z3g5LseWNU2bf",
  "key11": "ypsPEGMB41EJtnhcLgQdvD1EX3iT5qnCaqPuRUSDiaWAA5TDUVhjkMvvJZ3TRTSc6qW24FVYn54EnAg8DFfNSzm",
  "key12": "2J26x3qat64CwMztz17ryFhmeJEsoDZZ5FgnznMMfLsQj55YWCTjpMneqdSpDRmfPP1kkMvPEpfqdEQgPxcaZmYK",
  "key13": "3usdtNkvWk5fEcTXfQsqV9cX9ERrbqEoXHYJ98yzpPAqZTsnyVvZgNJn22xGkbvkBSvJbjSsokSoAfvxpgpjczG7",
  "key14": "3VT9P2qEZM8u2vPXvYzm1vumoFqzy8yHKBhQXzZQANLrpzgHUtw8s52WVjs3jfwppQDJS3n2gcNKFkw6Vfcrffu5",
  "key15": "KSdsVmQCXGqKJNhiD9zWrGKrifR18UnUK7kVqSCJoSqFwA9hxiMjKXYAkh12CdnYWS4rEZw5xrp82aFSYoU1wm2",
  "key16": "21QC7ZuvmQFZMCy959StHTQSLt1YCgkohhZU7t1qxNWN6Zj6dw4Pt3gFZUybMPhs62DxF242F6d9VQ4D67bazFCt",
  "key17": "65AHBHdPYySVJzWmnQGkdoUvwcDQLSFrZDa2J4ec58DGS14icViFVbguWCaqNEnKSaBDn8gsmr1aDtoqAUy7et3q",
  "key18": "66RPvnUgWkGLR2SVauVhuCgGqsvdp2J1gwjaBzfJyTxyBAo32nP1rD4u8EhQePTwvvWuLLC92maku9CtcTb3saxo",
  "key19": "4AoQBoLT1KPZVFJhVeGv2bLioYWnF5vatvjLPMim8C5rML2xBTthzFUBtKXnB9NCbS9XfNs6FgczN1bxMZGxq11h",
  "key20": "4C12MizrgvPBAvCiixw7ZHUdhWLZukSjkyhtsyGmYTu16RFewom6TrMm5EphVBjpSD2Jz4fMSVKGo9ifi6JChTt6",
  "key21": "LNMoG5nYHo4X1gXyCgPANJqQwgpoRoS5CaZMm9o8tCkrE2QsLTFxb7frehuR3cWNnPxLRwiWSXeoXqgdFpAB5fM",
  "key22": "gjf5pGWqQoPwGqmRdge9mp9UXUd1cEvvnYs5CXdJQT5M1xzvaaze8QHYVHsgZgNZH1WoT7obNH1mUNbG7TsAscC",
  "key23": "qMJv8qpeJCAxv4GvZnh42AixXYeiKqbRaoLNwCQgQgqmePr6rKKS3mPfhJpiMu2RyDLStbYYZbTK2oWXSDrRqaR",
  "key24": "5WRouoNZ2oWi7YvzDK64P2DpJAjThkummLHka4RQj65bPFPrsf556yByoUpFxj43kM9u5f2pzMrwtdgUK67ASTi6",
  "key25": "5PuWMqHyaNEuzcCChiiUVsKpw9NrMbffnFu2HrmuXEJ1eqE17vc1igdRDa9zyx99SFdaVNvRrHqSHxtEpRHk91AS",
  "key26": "5T9njmFVK4zA3uiU6VkscZkuKyxp49hCYJviqnFCD9pcajsyA9YDd8EEaTgzZsEhjdXsAC3stQzPJK86c9DRgbnD",
  "key27": "5SYDdYz5jxHcQPNFebzNK512g3G43NCDz2hfiiusTDQU2dmPpevbNDzhvAq4bcBoqdcgMEYjFJvRDeyVqRESR27e",
  "key28": "5wst3bH2QXSka62SuCqY3jtxUK2xj47Fwk2tyUrpTA4PC2nhnA3AcSvYfxZDjASHqXQkTzBGn9dJEYjDTEspFasN",
  "key29": "59sRLn4S8Vzjo7mi4xTSnUamVTWh5ik9B9bwQq7Toj47kG6gj9Nf1SGPrgycrj6xhVb3RvuDMh6GrxLDWgqaXk8",
  "key30": "4c2Kd63Yv3WLkfM2B3cf8Twiar8vEBJwEMQ7fY7bLpX1dkz4dcC84XvTzAsV6rV1MYMQcRjoDNors11Jv7Xi94Nf",
  "key31": "5YTq23GU8GpHUE2PG45U9NzwufJzZzXjPMHMN17N1AhfjHFUUhc4dxfnCYp6cs4AhkvZXSDv2rKCAEb1NQd44UwC",
  "key32": "4xVD1zbvk3ohj4fzwdUdzqzcwC1zncT2JPUeFkKgZ6BDUfvcaGHhjuaXmVmRzvmMxSh6knegA9fnXPEQwJfimW5n",
  "key33": "32ch5yyxR6HvzSv849CAhy95vidp4wAS3xpUbNqh3So8x97XbAdnZMgHPQMgWhgoC8w3zX49BauZgXc8v3NFkacK",
  "key34": "GuXUhp4MwRsu51zo9VDemvZnSBsXcrBoQ2S42eL7HoLDBWdP5rcSgV9bgtJjzKXAcGzYwUqbR4fwELRPBdpVBn5",
  "key35": "4xHHYxpEG4VucgtVLRwaaq8uGj4QFQX2cqZrdqMahV6xWhy9iA37WQtrVFJwHgDgn1STDcTMoowQoKckxFDcMKyL",
  "key36": "3nATE2YaDsFzwiwP7T5Ya2vnstWu2qWsfUiqGQLv7QrAS6UCrSN2wW7hJHxFjbCSp2PTYEBJ3CUqHP4iHLF6pRPn",
  "key37": "427qZAkAU1kVQyVJMQZXzM7EHre5p3jVGF5DGjvxDrQ45N2m8ZjzXsM5ENx3KigQwvVQLLY4KQGWKUCaBokZSixX",
  "key38": "2QjyEG8XGySUE2nnQT8HUhE1EAtJ8mswCZVAfAhs7gbCcse5tebN9Dh72UhgbADuDdHCK8yvNnGZbYMa1cEuwLST",
  "key39": "4c1R6p3Z73gn2EHxGW3GZkb5JthoZhMGFr3fBSjQV9WBbkBpqHk98F3GhNmzybvbo6UfRX48rLrdYH9PQw66xBu8",
  "key40": "3nRHib3XH3eaSBBwi3gQKofD1BjckYvYFm2Cnn6jKdyizVhK7uLMAwPS7UBf5TeQHtyyYQyLk5HHYPv14m9MWm9F",
  "key41": "5pJSfzYxbwaDw55HfnF4eoTz49kdDFCNtK2z1n8q118MmSCm8h6zFzrCbFQiLTCYFK9ZQzH14S9tdfUqHfMeL7NR"
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
