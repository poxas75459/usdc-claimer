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
    "4N71yeJLGpViAVXB4NZmJ91Q3H511SiUVPovftmw8gcEQYNgQA2x1RvCrEJTNHJ8viDXCuXRCyvWvm7KvnEGmjbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xVMgCEFpDBTnwYSQ8EfX5h2qXdVaCDLCCzqDpAHbPA6wWCV597nqnmAX1bjJcPgqVc5AuGqrdz8T9U5tpemojJu",
  "key1": "4Whs7iSVQ5zxSuhU4gVDyLm2XnfBWj4bbdNm3W5KxpCGAxTTRoNNNdQy5DxqfRvAmxGaFmSASYZEF1378TJNQWZq",
  "key2": "48wXSv3HXDXDa5PYAKJnKz5deG6jv1rMqkUXMwepbQBPCGexNwEpKxmQ58rAf5WgFVmWa3o2e2NF5iAUpoFdakwo",
  "key3": "5FbEcbRtFieEqPbKxrjqRfB7Q2qnnPaPEJMdUg6qYAdnTYvDczeAXr99bkB1bitvHEEdobwoZ9YLCf1vP1awGxcZ",
  "key4": "4xuZ7uUoC3PPvBuAD3rr7JqUs1Drp85mNfzWM6pR87CmD4uBk3yEnhdwnyEYpZhaJz7DnQBxCMWfvvF2sXpHrGS2",
  "key5": "2XPzwmiSG7M1NjsTZe7jqnF8SEVxYnz1j1dcAVHPDkT3zQTfkmi2G6EZTDg6BFwLsU3ka3Ds2Nz7UbXuNcX4hnXL",
  "key6": "2wXmWxBukf42goVut6iwAVwxYYdncUfEUMmZTEV5URm51kdaiBScx5b4UthtEHWh5DPqCs6Vsk6suYyuennh6Dch",
  "key7": "4CpqB2Jxa2gxzLG4fSuN2KEE9zQpZYjHf6dbx79sZVp2xjTbuVbyzoUDAXUUPZ7NHUNBcJ1t5Xia9aevrGtNFMBx",
  "key8": "2jgWzrEQDR9acjr5shA8zK5jQZ3uoqZRvvaH2bJyP2WqHXt9VN5a6eUNhX3Hu5unjTqvorbgN9tA2V4awtJJiHxc",
  "key9": "3wsRz5UxQtWS9LMw9Ca78mCdKbZfPxBM4WgpsyAJXCt5PyVAR91fNojuD9mzDjJqYtEHgJmCZeUkYMT5Z4miaqmf",
  "key10": "5vVEQMdq1cSa1gLYJgws2UFFUspaupW2CbLRKbg82ocYYGFrHRAAiWsXZPxtt3KrmHC4HJeVGjMg6T9ZyHemssKF",
  "key11": "52q4wk6jrjwpZLD4mRQSTva3Z3m1xa5cdhBXnpK92wPYSiKMu749nsfmrMMK1hjAy6YyMUeyCJYZKqcR6VfgGs4s",
  "key12": "5Yynrqbi8jAPJ7x4Aovwz453Gk75YWXNvmheEyRGqkwQJWpquL8PfN7PKZaEdrCM8qbroCyL725KnLxHfd6CgAsF",
  "key13": "59bSNpiceVJMbiyfwtqijcmSdXdrcAAT8XPVhGRUp6Sw312it6gNVuU6E9f7vnHDBgkjuxXsTMDGueJ8GbzbADwx",
  "key14": "yB6PdH62YUuCSAM55i7qrcnAERWU45cbWzFNNBXTtmXXWZ7NrZrF7VaKThDcxkkUYsKJFgrL7LeGufB8aYiRL47",
  "key15": "W939a7yAa2u7upxioBcVMjeTVykqdBSg9qncQiFkcThVSx2SPEgGP84b5caG4WJMUmTame3zebWfJgWRC6EhvvE",
  "key16": "4DrC5jhKvb7F3deMTmqEkwtBSTRqQoFnSCaqb1rQFY1ga1Kwfitrfgr9ZhMQmjMfLPP5jAzjEvfnErBBq5QSbvMt",
  "key17": "2ZhbshMR8Fcwpc1HvGhrS9W8jKioQYFXBap2PdA1PzZZGgraeJnxg1Vr3HCAcSrH1QAuLvQEmJDYnqzN6k9PAgMB",
  "key18": "51J78ojHUUyUojfeBSd7sKDAm6bEDsoZTpxJkxRgLioDoLCmzzSnf99CaK5zFPkLQzWwYNEFdpP4jwuuW5MPcbv8",
  "key19": "3acJ8xEbtRr2E6jhyHd49U7nbRyrtKasFyHAVceWF1i7tFowFDCcxzhJk6suAyejEjtnYTkrWFndG2JzWS51Hr5R",
  "key20": "7eE4LyDW9U5NgRC7RcaQhHXkGFcxwaoFdNKCQyhTiXdErkiRLcUcJbb4kEGbSXEBuDwiECVUcsx6qiv48CLTpXo",
  "key21": "3Eh7nmEQfRJTPEUNN8cHkjH5tuoiNYfrRSYyeZEusoghdWPD2EphDFKsWHDqCtTKC3mAbgaNrGpobQ8tXFzh5Uf",
  "key22": "4cqK11S69EyKbgisUc8XPyZdwhW1qordhN46ns5JZ6tM7seNBiWBDEmxgvfbNLU8VtjUHekZFVMfnobTAJVqH1xK",
  "key23": "4RsfaQm6M3eE8JUERxxEjLoUjuuXxJBiFBR11zcJZHmtnH5Mu7Rzu8pwQaqSL9SH1uWt8Xbs5xxaBcNvaUNkZqXq",
  "key24": "4mWh62EmVw1hNtVuQxea6EXJMS2R82hgrH3PVUeswzyF5uAdbnSzbDxqhV1tEGLmgiqeZfXTHTpmvKn8a4guRyhg",
  "key25": "4rWfiqJd7AS1VELg8FEdsKThXC3zgeX5pEobrtK7vGoXNjgV1cAVdqtjAgaAvhxTbvy64oBExykjFDAZ7yryf669",
  "key26": "53w81cJ7x5AzA82t7YhWt99JRxto6JXQAfqfY4Sk58ZGEAJs99H71ZDnzZhChTS7NFjjPR1tcppFZWECmAHyY67p",
  "key27": "36ZTUyj7gCPFcmpiBmPnZQoaQsmYY5w2C53oZAJZKxM2DzwjReCZH1cTkh8X74sSR8gVq7n7ikG5xiSSN3j8PhYQ",
  "key28": "5e7tJycrbKepqqAUTSMPLuXdR8F2dk3YpqigFvAKbr31kn9BMyFEfKEs1TNfGWQzZZ9JHaXussRNMat8RxnEph4K",
  "key29": "2ZZxSPKrYd893cq7o6njL19EKDQaG9kHY2Fv8pKX8Ehx62jzJca6wkqhWgLC8kGZ5ZfLNFqH5X3pPk4Jc3BqmqLr",
  "key30": "58Sw8yAcVUpBUMAa496FsxmWAgsDvaUaJLb8o5jQNY3xft6idwVa7GKyREhz1931mAGyJZ3nGMDsFQeZof615s9G",
  "key31": "5xDhFhha56H8i6sCVh1ZEDyMxNUmf8kzHoTGV13kgTusvVG5ymsNUydmRQYu6VCEfkJ9q3Wri3CBCdyFzYbBNwTg",
  "key32": "AGfpEM4R2toCSTrd9PZrKxgrNbhXhBMT2qwZABCuwjkdQBeqSHtGkaZw1iy7jhftkEQprkXKptf2SZBbnT9D9RU",
  "key33": "L5RrA7tdGZxTM9bpXmKrDCbMPVAG4RmYKj3uViQNgiuemV5Exe4ph4572LJkmtysT4x3jLCnSQzkTGy57hRPcw5",
  "key34": "cvcHwtQ9rnfMXD4gUNv1sEmuNvwVsATSciMQGZwvfpyQ4PbNBFbT7TNrqHMHtqbVRbe3fqyMbRaLxLuhMoYRKg3",
  "key35": "qAwv8u5oPU7s4ixd99YhjVRtfDdk8tK7iPToetTKiFDEL1jX9ZNvHMkaTjPiCMqfjJZaE1nh95vodgUe21V7BwN",
  "key36": "2mizrttVDjTXAsfcvaoAR6x1b8kCc7rZpBSaSrXo1JaDcfbY1Rtp2Q6Z4okGXBN2vuzt3Sy31MMdS5QW46Fq9Aiz",
  "key37": "eFnz8VWq9nBXoyPsbgpa9qEAmJRdhg8PUKRAMBxUPLbwbo1UXtH1y9z7Y7un8PbK7xt1qk8Kba2ZGoJRXkXgAXr",
  "key38": "5Q6LzGQy6Ju9cWFu2wuP6qyzJxj3TqJFEioRXaS9tnWBTg3FmexeeguSE2DXQ48ZuCHPiFPdh5Fm3qEtpLsBiCnx",
  "key39": "2tg4BPtHnEoDZkgVSFTpSCFBiByRy8xYSzZX5dUrEskByyoJKLdh2TVmEsQSiSXtUCD9iYPWjDWnTNuRh16FLfyM",
  "key40": "3XDYCBSSpWeqA8fTb5sqYg4a5nVP2om18nKAajDhVNYf5i31BzxNhZWVv8MDinpKHtrn17hfawNMcZsbRgyJjcXq",
  "key41": "41VohbvwkNqpHGgd6nYHdWDNnKxHUKuuZh1NcYAkGeyCwzLQwwp3BbME3Fh1qY6tgnb3SZTKWPQL8norSYj81yfc",
  "key42": "3ivCcTZAgD89x9E9TJaMJTY5ETF69XuqXxAmuUtSEBsEnwCPtJaw9oP74dsdZEtSMquYzNxQ9kJMRMkDNciEvkWx"
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
