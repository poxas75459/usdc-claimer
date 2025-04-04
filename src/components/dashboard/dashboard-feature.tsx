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
    "5H2bLGJA2BDHmwPVSyoYQJR2T7pSNi1dU8UKYWaM4892rt6SoFqkSF5bgzLLScoCU9oP8Tjb8NsyPfZ3oGixD5gT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yya3gyiimsxcAwEMo8CGVw7e5FgnXTcoZoikGJB5J9Tz9bqG1TLYgf3nuc8ueYwQNJaXYVkVQZSyV9mc9yFjX7N",
  "key1": "WXYDSCsRTtMcZDBvFqAmcd5dvLocpVSfGnwhfKdTdufGYhgYnR1s3tLA352WAhmP3CTq9KEGGYrTYmVhzQtLZFS",
  "key2": "22CTmFSSDN32m6C75wptts3r43CrujdcnSJ4yfpu73sjzLv2Qg6rccLsnqK2kzz8qxwHCnf5oXg1e3aGQFFApGAP",
  "key3": "5EKn7rzbK9i5aaG5qJYdjV3Adkmr2b6eRNfcvaViw83MyTsUng2bnzt7vdaTFMY6HMn4Ca2kS3QZLWoYsunhuA1c",
  "key4": "4EgVEUcTE5wzPgHd1KzCLZeicWQbi1eDNE3TjmLTYqYDqLYSHabdaoFQiXeGkFTbYyKo3Y4o6ii1qCsghFkvGbJJ",
  "key5": "2bEEKGPXLZqEnezZy6JsTJkoskVgHfhwJHNhrjJFE2tGdeLQ1q9F9eVWHQZtYbmxfhHnM9TvPxbf6QZSFg1e75Rt",
  "key6": "D2XJeK2upVH2Sb2pB6cSFPdh96vze3U1UGsYZGcRmBVDcUHGTFaxtVqYSEpZrCqmYPB2TcgrvAVoXrJZKRQUE39",
  "key7": "rem27pUWZAoQhPvYPnvjArWD4DW4gpuDA8bTVm8qac8b8c1Nz3gDL1Z1YXipm7iCXiwugbMxjtYvbxbMNXp5h9A",
  "key8": "2ks8tBixHygnrchQo3NhE9o7BfhWeCo2S6v4J8V9wGcTSfRFx4GooJT212rS8xuvBziuMSNwkawoUJChYaRNBa5A",
  "key9": "5xVkKwPvssMMeHzqo9qUczq8u8rXKnLzMHuEi8bQJbDP6s47REaGumSLNjMkcLYaga91kto1GgqPYdXUD1vABgRC",
  "key10": "5nHkZRRZzRnkySqnyyBioHwA1Tm6Mtps5e6sChCAAd88byMnthNGgKN2ed1yCqVMx9SG8GoZdeX3LWWHehWZFs8n",
  "key11": "azQR5t9wiLi7RZSJU4TdYDqpKKpDxpULwpSJWEcaMDbWajtgfgTvU3nR8zvYPKJ43SdPAABCcnXB8oMvAAW64i3",
  "key12": "4U7AHFbXCezS4x4eQwind1UZxvazhix3DXihAyv7XrhaqrdhAUT5LrR8dhzVBHeif4foa9uRHnWFN49qy4hHnwG8",
  "key13": "ephi1ep2d67D1zEhDSPFPTYJ4meCdwGnoMNYKXP5i798nybCSfVJQGCM7u4fAnyoMqNpfDUSwYcxSv5mAhkbrZ5",
  "key14": "3tsNUXs1uD3gdGsiHLBbxMpoWVtkJLRzShdLPBAePcBPLmaUeN6jMJy9nTmYbrnNaNyjPW2b3CidoQZSiZCrzqyQ",
  "key15": "zP78AtFhqUCQ6M8PWtbGntFk6Mr9cwSFf3PnLLoP9XUtBErwnVRQxhpXqyEWCWuJgSzvFQLMVmkYieFGsojxCCb",
  "key16": "43BUT7XTsTBc3nmz7m4D6KMoAdYbNznssmgjk7dE1ywGNBPZm6MsNSddjsWbDL9iWyxjrXB8gb6AiDJww9vAZo9e",
  "key17": "5ddj3HRJDavCsEYe48K3LoYwtpqfXgPHF7QHoDNJGKhb5uPtS1BA2veNyE4UZQz6RZoYgtNDY4pHLNNanAQnCr8s",
  "key18": "zoGWPUmbBeSQps3dCZsDFEw8ss9a5VX9u9WHdgEmR65w7ixauDkfzCrAU2ckLnFDnM2yyg627v9bndaP7vDBizu",
  "key19": "2VRjz6dR6uHUWs8ZA8kwLCvqU99k4a1wboe4L6DrJYcwbyoEx6ZHDKTfsTpPChdczgEqQKKAtMEYiixpxxwNoLGt",
  "key20": "5pALbgvdZf5E1ittLTKSxfq5GC8iKzWm85XujzFU1Low3oZ6y3QtA8anhQwHcgVB2XFkwZWfvmcQKRRori2RL5WA",
  "key21": "4ECRJRdsNmaHg6iK933mfqaAbDP83RQj1igfArwP4d9U2Z37rXxK1e1w975vM2vKBM7kfof9qs6qE2MV7ibvBCd4",
  "key22": "2KwKc2pD1QZJWHhGBnfBshu3MVgDt1R4Rj77JADhrTnwTWmBDtkspBiVcCWK1nC5fw2otQ6yaoU3g7EAtvZ3VT3c",
  "key23": "5pPiJrKNMDj76scurvT9PcH3kz87rsYppKduq9zMg98Kd2G7PsCz4LMaGbwxnNcJZC4u5Yz5RhjyXf1EKW96mBBs",
  "key24": "34M7mdPoDE6RygXLQaru1SrBn7breXdujRjHbGLFpmXFVaJ6uT9g2C4DjLKN7kALTm5fSAX1tTEcRTjStd95xS6B",
  "key25": "44zJieByQfpKNhA8nt4P6bhL2T4fowwsqqcnFQHjXjs3J85YTuTeZXtQ7vN4NxYrrdU5nN1LRSTujVr7bsVNcvN6",
  "key26": "5jT7XWCrwtSLzVxSMH51Pv5yNLMYSZBBT8BmYy539NJDAUg5JWCf3xkmhU4SyMBrFQZE8UB1tRMuQa8CNzomxRVm",
  "key27": "2M8xRzP1mPKcJmLMk2M5vmuom5ZkQx7UcnmE7KTRwsJJ9o61YpzrBTPZbo46uXW2kE24K9XSDTpDQDM62rSZczNj",
  "key28": "57fyxx5iAzHVbg9dzRm2WtwFG12G5az9Fx42234PnciWRgFgzL8DbHGzaeoJk8ENH6H4QQfxofLERrZzewomNPRU",
  "key29": "4o47vvcRKw9ECxmMhWJz2YiFs5unsJfoc1kL7Actf3QMy3exdXFRRoAq7bhHzC9T4avcVSDNATLH4jB6awgRhAf7",
  "key30": "39xCmATekQUwBjC5Auva3KrFoYuzSaLFbqDCLGivViQz3JWjGo4tQJFJnL6uibQmdwnruxGejJu7TXiqNZgwJmBX",
  "key31": "4QQ3Y4F1HxAU6VrJaxdPDGjPtXXA6BxsYGijHq6T1o3sm9AY2gq57UUSjxHUuyzifhaTTDmxjaxZ9SmzF1oH3rvv",
  "key32": "5cQy45jRj3TJBLfT2Q9VMN9EwtdyPRi45z9T4UEwFgqUbxFgyqowa2YwrKhzbA7JPfSWN1gqY9oFPSKcD6kanH2Q",
  "key33": "4GXj765KrwryCSgXeVEoHufhTFQJzwDpeqdtkm6Xk5qH7VJM6uTaaFE6E4GxiJDn8FFvDwqFPoiTP8CaT64ZdALt"
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
