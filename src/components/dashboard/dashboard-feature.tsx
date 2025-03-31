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
    "5nsM4vpTiVA2vhu7kh4vmTdJTxaiWJgmJtETMC8VoGZMdRy2jPYMHsKPxyV4yttBvTe53UKUDbcrGyzu3RJM2cHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qU15LxSbq3KUZy3sor12qSREBgLCNviMjqELXrT7mTMEyaLHpUuEbKyFdm3PWRMYtXurprKDVhucNjXHz2od3e5",
  "key1": "XcpheYbEGf99FTLnptmYDE9UKWGT2w3gJkHFfzXqvVCVyeZw8MqZTtatWFqdkMbkJAo1cDtKdRAvupjHmG3VZa5",
  "key2": "2WuMR54rdYxJHauJVbg2S9ipktyVRtCdaUjhRiUnxqXUi1xeP1LAt7mqDodvW5JLehs9v4mhzqmW2ZgE5givzk2N",
  "key3": "HoBS7vMJRt79EHUq6nQhggn8gAevhZcaggi26qiSaBk2wN9jQTsCvEs7LzWAKDGkNgFpLa91vmFoQAnEY1Syhr9",
  "key4": "mUnszTjwVqaVUxsJvsgyjDmFrjvw2CotLFva1QBqRhS4LMqfzZXESpCaQSkSR6GVtx7eYWtYr7gJEYGUvCYRdEL",
  "key5": "5k5gG4j1uRTAo6qt2Fnihqvgz8LLuf8Zt3Eqg9CWrMRBvtmospE9HwpjV1im3AAvCtLd9dqnhzNcHFaviNWYndug",
  "key6": "5yS54TFBuVCtBnDBF7qBk7dbMxi7Wg3QfGjmjAYRL533bxYMhWcmECHWXHPJT459eDoc8gZic1W6RrZ3mK5ZUWUm",
  "key7": "5Qg8JM1w9oVgASKuUXkBHxb3Ra54FUmu23gBFe27J642eYDgRswXNAQWSkbQqL8h1vaREkYDxmB53bwuPm1V1wJh",
  "key8": "ezGDxdJx5opkhfbwSH8tRcTNAbUymw2m5xULKFyd5ue8HjQjqJ7sD74iDk4c4C2Q9wboguPBZzoSBfdZa2qVXKu",
  "key9": "3ced9urFpdQvPfCPQmsz9RCEE7mMCozsnqUsJaTS1Noj8pRvMBcNXmzQgcoDHPiRiLmB67wyjh3dv5X2XueAqCUw",
  "key10": "2qebts8PnwypyiZigPdFTij69crnPgUv57ivvq6z96zqQfTffDxDC5wxXE9mJkETgLKzL1QJAWmgbFsJTcyNbkCR",
  "key11": "4iYdi6TqGYPXmYdyZBoFLh6nAMRS9n2fymnZaNAqxfofa61U7zWLq4eJBH2VoRNJcNoj4Fnm1JjfwVyhZ1y8hGNg",
  "key12": "5Wgtb7gkHtADyvAFRA7THmCRaTfksidLNkWHrHAKmxa3gjHhTTzzckqTZXFFfZ8o5BABBcqro8JGMnXQV1QTfyVL",
  "key13": "2e18RwDJDuUJPJRkX2koUNVNq64757W5nvi1rHs4mwhAD6qGMvpmGqH4uead8B3rfbHt4yUekdkNdumst9pZzuh2",
  "key14": "67c6LzxDB4FMioQb6S9mzP8EPRHYodQgNARULJgSVDpUYofgDAgn9kLMjfR8XKXWnuGUaEKUtH39tpG1vefrSNZe",
  "key15": "3yQ9rrWcga1rji7MgDtR1nYRSP6wa6sTxRrLzYwwKfUjBRkTEfcJ3UjVbHppfBhFWj51cZtj1DrpGjm5Ng3tSEei",
  "key16": "2WyRWEo8tFQdXgbtTQo8iVpejLXdZJwFqZ26bq1QcjPkmMYn22E3rr9FchqVoQeXBrBwHYVGGdejnLFsTpnRuaVU",
  "key17": "hGHHKLgKxbNywrBATHbqaicFWNdZ3tvpQiaZ3q9zzf5bnBs4eFBfuizdjC3gQJxqGRcywryx2p2dbuNo2b3eDzw",
  "key18": "47Dbgtt8pr3kEvmCS1iHM73DQ2vHkMunVe6gRLokUhYWRYDqq6Bda3qeXj8vU4sNnDK4nHeFhjVrP3eRhs59nyEK",
  "key19": "318XDK9BiTDK3VKhmwqbs1TPQeurEhB4QQTxBnNWxWv6KjJeX6oVUpEkMDVEMEr9tcVg4BaHscCYJxPmxRybxF85",
  "key20": "4N4f3thN1oYLuiHTxm1WfPjwvHGLtZzzDMUPWYyj7RFhNeUhcD9GKMfTC2VhGBtzAcPbRuQyh5WE3ZJ2ZC9ZhUNH",
  "key21": "4Lk6SrU1EdL97HcEJHFkb5GVe8axYBr6q61uXyUyvUMYrcWrguvA5MZuX6nZuikCNfpbN7yfYNZAjcXqG4ZnK58m",
  "key22": "RmSwM7ppyQMNxHSjbEJymm5qB12Fej2qWGcMYZ63LWR3EWU6C4ZJrNxpmg7847hQDTg8z1DP5j9vYsGzrJkVwGM",
  "key23": "5ccgLBfBFGmATj1c1JXhvUVmLM6zfxM6y6gfm1TTPar9nSs1PM8yLnrqEwUn8cwNRzuxJdrbTbcTioN1YmyyxkVc",
  "key24": "dDbQuuAPj3QTzgLAcvgFbtFnhBE5FdGCLAx6TWgyfHk1ToyeLX3HaAW9ZctdaJ8yMxDKz6GspptGNdP3CCyvfwW",
  "key25": "GSyusLaGrgu5CMWBSsSDWMut5npa33JiG4QD4sFynV5KeBWHxRLfnkn5CFYQMcTjgZ2xoLCoLRiHk6swKmsSVJZ",
  "key26": "5Q56n7NwhR3hjoaHwsUEhqXSKtk3G9aeu9noMFmm6L58GW96YNQUvUcCUUs17FaZxTfPNNiaiAPHHGW62kz1k9qF",
  "key27": "3tvN1jVzGhqPysXkkUC88vzBL3Tf8BtLTEfw6xkEFTvZLcYdUFWgGLcB4CCeUq7vbj9z9cf4ssLkj4BYuuFPt7nK",
  "key28": "3teWuqmFPuumveKafLq6KW2KeuEdKoVvG4mseQS8WjdkkisWLPH54x9BuMEg84xStyk2wg7Ky8XAZgqunAzZ1w5P",
  "key29": "4pFbYVZRNmG2TcPNrDJ1Gz1HcQUtk5N2yVA1XSBHLycw5xtPRdXtVGTUNRgcwKFHXk7JbfgLQebY7oSYXdAyXWSb",
  "key30": "48Te1iqJLAo5jtNzHd73xiNWZA5zAJWa1gNyFVhdqyujErk6zoAWPH1FJpQ9rRHE4VbECADZcr5SzLj2rEAwiY9m",
  "key31": "XxW72ZGyx89XYaqpXJb12YbiFDSpbqpJj5ekmrRtkanMCeg8EdZkVeSg1XgZSqh8T6rJHHiTSyj16m9bqQsh5Yz",
  "key32": "34AgKLSzoXdkVJRsj8FFwpiqk8rERoR6ddhh7yVktwgi2A1M3s99J6LxjsBMLShtwiTBh8REK4zg5qKrT31UhEK7",
  "key33": "36iQbpJ9JiCSCXwBXGm47HoqZX6H4JFQaLmt9Lzfee93L3N8gzJPUV26D375BiYJdui7LdfyHoUv7y6rMRwTDEJ2",
  "key34": "3U9FvcpWV1rji4VK5Xrk5X5kTxYjYdzXLNfyNqxNe49CGvxk9Bpb7oTRJwXg32xLaerVdfSc16HTHMsR7pvzkCPS",
  "key35": "55JBFKDWWuC2Tac5h8HEPVxNvjx6FCRkakHq2nBGB4B6bndYWAM5Lwogm1Vsi1WKooRERzYf5gN2DmDx2LY7vXdP",
  "key36": "4CLUgG1VWpvDXY4zRQMwYrRA29fyWNTRJC3cEbMsuT8PbbuAh64yRPKKFG64rMQVEyDv1iU6oUAmSg7AwU6EtQfR",
  "key37": "5ur71375qoKAwFBADAXBFWXzFVaxzoyLuRvE3ZwaRiu2QdYoo3jJv6yZvDVRWgUPoRVYvqBtY2Wrs9v6PmPE4TAv",
  "key38": "3mCLM9nBUWMckcGy4Bx778tgpF4EzKhmFC2uiH2N5YoZ7xHCBRDNt33XAJNhAKCahVduEhR5XBmrB4p6p3Yxt7eg",
  "key39": "372x71hiCjcPRJCECnXktpW4yGh8tEWxcx2ZsWai7nGhow6LPBCDoyfSVqCFgv2JrD457zUpsg2ypp1kpGMoWCF6",
  "key40": "56vtVt2vdJBYJQKL14TEZVPqrx68pWz3Chq2Q5uu3iQZNMDQUcATsJNpjYk6S4K9pHTwUuDbpbZsGYK7RmzsoQCk",
  "key41": "3Lf4Fiqz58AzPFte2pP1BWNEmMcRaVMLHyzhKNfBNuqUWtMNCLXaszQNofbRasSmQK23d3r2g4NXBnwfU9AFM8Ns",
  "key42": "28tStgRC3f695yGmAugQGdiAekzsJMCQnGGzUpvYMBsX641GAxiAUT4jW4nGB8Uu7dkYdYBbps9QbMizPZXFBSNL",
  "key43": "2WvL495cBq4bJ2yhCHZ9UAuDWydReUiyDhCRQdcwB9acKyHRwteG5iUhisoqwijBAUkGe3xTwyFd68FpJyyiaXiB",
  "key44": "xnYQsAkM7ZFLtap3o9mQWShCdHQEpmhiXHHAwbDj9TDX5GpjtZKeH44SyEDHfBfyfHjiAkAYivZfaMtewKv9RXM",
  "key45": "xT4gHwgVEtMb8jpzRbG6H5sd8Z2RFbDSNHivfSnhPRpDZFFRKC7zu7ZD2Md8x3sF1y2BkdSF22PeAnPB1AQtGGi",
  "key46": "2F41dMLWGdKRmfWCXgr6evWuJ8cAoFSqy1HKFjbXGYtL3B2Ytw9ErjuXH61q3yd6Ct4XoWamaWseA19kNk3VqAWv",
  "key47": "4JddEPaktzqc9LxMeBsKWq3oY2TCgpLj3bp3xzHXRJsJNZv1GAKZUzUccFJk7BRaSPEh5eARvgYeA3jZcWDEVGNx"
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
