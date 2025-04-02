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
    "EcEKyY84tcccgyjGSLT22CEddqPsuKDrTk4oDo7W5pSGioSarCPd2AVBrwRGzj5Tj6uTDqcJbDFJZNA7U7DKn9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qcwp2z7iRjCa5shUSMGMz66caQQHyhazyKZuMQ4oGt4QyCaGqf9WenTh8Brzgi82cwf5sys1svY4thBKUCkTjQJ",
  "key1": "4pAqqh54RXaEFgkKaxtfjSiWH2nfCvN1mtLiJRxMigzyMy4EfwouTeCXDs9bkuCgHGAkvR7UbEpAwzuefRsq6gAp",
  "key2": "4mD48LvUGnTginZLkvSkSCYw7FKu2ZHe6rswMDbFdgJ3CHTpG8zZB4zrbexPg3dhc4DxpVyX1Jne6pZRAxdNoBZc",
  "key3": "54T7fXM9qRKcJ1ZCtcw19dds8q7Z3ZgAPb2j4V1PRwCLUS1kHXn4WKE9qrhpnwGrRc43P1mTThtct4Hyd1JCLJGx",
  "key4": "5dQXfVpkWdH5z2CwigJzxbs1Kwy71PJNBGfqX7yQfevSBg7e93YXs9TNjNLJ2MDFWepFaCjPLMdyrWcikXajzKSj",
  "key5": "2wAS9HamCYQTUQABspassbyUxxNvGe2yPtNBZs6vydAdZ6iZR9ixt9K6PiARbDsA4nSoBGPryK8vW6DeAYaLpivx",
  "key6": "2i1Scbj6UGJMj8kvvg9Pgpm8skskSKe2GyGWkKcHPr74eufC58MACNoQHXkY3NmjLxPjuo3C2xqw9CWvrX8Rjkpu",
  "key7": "4k2pDEpzaNeawdTzPZyeSHPRU93GdrefTbCMyC7boTvN9u69LrTSowjpGzcMCodoAxoEHjx4mtrxbd7dQXgK5rvG",
  "key8": "3bLdQqczFwatd39iQqb5D8xbuurFVr6NbmkR6aUB4yJSLjqrZf43xseBe3vdHiNJWmwiAJs8TwUNfFCb6NakEaZe",
  "key9": "3i8YvoP4REmnr4MY7eU9mQvtEfDoYWqgSg9yiy9MYG9EPAd1LXnFYd5EVWM3e3bz9i8FK9SotkkXWLAr6vGp9t6u",
  "key10": "4m7zsxQR9H7iPgw1bLvjHvkVW9snZuQWw7yjf5SgiwtmPU6MCt7A6UfjEiRZEXfvWa1sVq2RhEZLLpF8DvhQoBff",
  "key11": "5J4eT58Mm5gz5APxJQShQi88xoDiGWG8T9sX2vnyv3bhWMypCfnp837quB81xojxCpFNhUU2hvrXn811TDPYqDcN",
  "key12": "4jcLTiWoZJMeifyVMp92Xd5Cadoq8uaAgwGexBz2oodm4UvM5tTXyZaUiCsJ1U1mNhLCZvB2E4Bc6JcCuyHBpTyk",
  "key13": "5rdA7ssGx75dVXdYfjr1ixb8JBNJ32csEgmu1xJ6o7z25d82uHLRZUfYQoesmfyDccJM7h18B7muaK47BQtyDb23",
  "key14": "JaDfifwuh9S5fHME7N5wyzXEcBnQCKinCom7cvznKo4NvsSNgwoNu3w6xwWnnfJkmPD8zzBUcmvvSJ5Fqy8wRXv",
  "key15": "2ADVKochKL1SrcurZk5m1cXnDHwwGGWGsiTemgq3HS8uhGoyb7FwdV2SkbGrjoxqYxMDGyfaYNMwFjcFn1S136Fc",
  "key16": "51Xr12VKuaMVDk754F1aLq1Bk1WNFhEnKvW1tvsNQg1oiSWqs1bs6EW7F8nBThD8LbLp7NfqUVCJ5vRHQv6ANbTi",
  "key17": "3gDgfdV6GPQZcCCEyhJyby35bDmeNsMTuj3JXGZbN3f8EZd2bLgTJyv2PbLb2wpxHhB4MEhiPqa3yBa49eCJntaS",
  "key18": "22MHcvNKBPQsLCARe5qzBWFPGaJU2EuRGngrGFSC35W4YtN48QD41tQ4ZoK2VQs18jJQNowR28iQ69YGwQJsiThH",
  "key19": "3nx3WQMDrMBUTHuimSEHwWsQTsgTyJy1YKTHj7LEGXX5EnfGqGtFuZEkL1G5C28yigfGoJMTHTEGooNSPLxFv152",
  "key20": "ojLWxkWX1zUEEAayWQtBZqppAFiuLSeh43faiGVxGb8kHn1Zs3GMYaJ2a9CUm3wo3BhncH8cXEBf4qwPFyygHQN",
  "key21": "2PBFJGNT15E4XhUJ7YtEBWnynhe1oLeTpk5wEXms3gCqQi896vGCSWsmocHjPjAPfg9vGo53kzSCSnSD8KSbmgFX",
  "key22": "2HtbXVLyPD3wLa5aki1NGTd9fkT8orVYwwb2TaHqLhzdrr5LGreLe7MoXJuxpArtr3B95mwQtYmJDmRNmEX7kGQn",
  "key23": "3uVT3HUx4e1LdUq4YvU8tLhmFN8bsfNTRcwpUoQF5XBXn6DyJwHxHk5oJQd5Z6GwKaQqxvaDSyhVF8a42mF6S27C",
  "key24": "5xduZkTvHk7h46sbNB77b7sSikkrxjsyUiCmBM54mxYPUvefLboGyrrsG9NGzm27KZNLNrm5EfU94LxiuHYcLydc",
  "key25": "2W3cf15uhDSB1XbAuVTym1k7NhXMfGWpGbxTD7rMozDti9NFB1C4TtoeekfK9FzSvihKZHcLb5ccPCcebHSvaUgm",
  "key26": "HZ9nzWmZK55SbSQTrroN3nmFAosMUY2nw5dFyMXCSzViCYRe7sqEGDZFjPYbt9ZEqEwcpPZHLuJeTvNwiGTVYUT",
  "key27": "23PuKP9Emm255D7p2SWRfUCBrcFRHenynvELfYSoZHoLQpJYTvL5qpJKvdmcnKFBVFQA4dK3yDJ5XSQNN4QgcDBs",
  "key28": "44tK5RDtsfjcX2Q1D1gQjXLqsRok9vegMfxWcS16Ux1zSATY1sGE48y51Y2XxDBR9JbcgFXpr5HonSxLwmAdZckv",
  "key29": "5fF48MEQrfuB872KTSBoYPMaZbW9jhxafrd2AhBstwNVbLxmJPV877RShRTbAaMuHbfsDWBdKYipugesSgmSP7RG",
  "key30": "N8aUJHioQqSrtiPw1uFjYFcPUXUCRUR7XMNEcU6dp6dbBmBw5YrjyAJhfNAPUrocKvPwkx2SPE7zAnQo42uCH6P",
  "key31": "4MFJWnEUndndYmsu4tdYif1T6uTTdGvg5cwP3j5yu38ZXp1dGNHvGBUuA7i9rLegif2awtKWtQGhvHxwhMs74EJ3",
  "key32": "GEFu7E3qXWQkqovV4DCjCQXLc2ANDXkqrxgR7zQdrws4BLKS3kb9DbhjNDAmAp7JVXC15eafkqQQJgR8vrr89Uq",
  "key33": "2GDE4UorodjgoFfVnTpBTsdzPDsH8brhGfoywBjBJ2CC1XaTyWUKvtuhWyF1nNvXvYdXyHji6WJnsJrQB9rkqwVE",
  "key34": "3sD6XPXsTgLT63fcyzfVVmS8kHoRfDFUpEa4nSXaAPtf3gGYGZGerix9HzGsMGJMzmGJEXEYKxxh9z8EtURqMDeD"
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
