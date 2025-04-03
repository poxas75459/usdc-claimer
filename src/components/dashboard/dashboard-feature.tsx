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
    "3rSXYqJRFzgLPVCSL33TSBsj522AggWUZnr2Rk8cHtBBjEzfNXPJATF1ngPE5nnRqgpm6VS3Auq5s2Z5vtvD7TXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yRnUiSjnoY4gsXdXww4Z2hR8urDQsxJZKpNqy1GmENny8741HLADHFVCaEJEdECXFy6u6a7215sGgPwmaRnEfRU",
  "key1": "3a9D3bjBdjx1JTN4WPwCj6tpwhrgE9gDMR4ZUpEFeP7eTmPiyy94yuSEvYxAgypL8FAh4pcvmNi6LM25FPSKBvEN",
  "key2": "2BVYkHpGt2rS4hFn5TAN9ZjmtRHmSJhz4rz6L8CdAMQb8s9tYVaJqsGsVSjds4FkkZ8koEX5cSRLm8zvXFc3yP2m",
  "key3": "2AAs9fmZtYmtdtzYtx6krLA5Zo4njudLV343ZRz9GPeq9tyogD6fwbs2WTzdCutJ3hosN3GhwkQQW2UyjqhQTqpE",
  "key4": "3cYTpbC5fam8X2jjqZ5a1E4xBy6bfr8HWRpxB5QtfFL8BcHwetD3wJVer3EXzgssL5UBcH26NxsyLXLpqWKDAc6X",
  "key5": "4z7jeWx3EPqUn4SqwXWrJwhkUtyZkor6SXDcPsK2xdyH2zsixvbpUHKNPi3CyScTCeNReTndCXh2MumenusBHEf6",
  "key6": "5N5TAXgL5AU9eWG93kWhhHWxXgvTrj4n6zFoqH3t2oZB3B1LeSHmtzgKpmJ8SBJy955pcZihfVAJJVj5HpuQzd9f",
  "key7": "8Bm6bkqNTrcWsT3SwUwKKkHfWaxfAzTxYbzr2cEstuYc6awZYEpmhpL9K4sKQKncXSMb4hKirDJp9SwuiAFqEKE",
  "key8": "5kZvzu2k1AMYZHx3tuGERSSx34Sr8aVpSQuWAyxK7zkY1DhtgJkzyAetXVfFEME4QG2iuYUyw35MdE1oTxAV1ro2",
  "key9": "2hLS1ux6cvnUuDeChFL2WoRKcPivcakAvVggxFcNmBGMt9HduGYaA5okakBATvEkGfM9jpkq5WHCQndtMCsBP6fE",
  "key10": "2F3xWtCQravddwUuh2DmReWZxzy4E6F4VQ1HP4tnxsDtUF8v74xJSvoxxH5Mwad1p69zCTBvmZ7RWwdR1n1YHS1C",
  "key11": "L2YaNpE9dwCdvMiychrjBVWDxhUp1qEeBHSTHQq481xGnsevVU1gfbgVfAgC6ocC2EFMWcEVam5fzn9ijfho8Eu",
  "key12": "2yChSXP8hzshEFWzs7PdGm9xMKYokCud4eh7H65ugvzKBges4HUfCvD4n2xgYcs21MgV3HzJyDhvhxDqxg1TXtkT",
  "key13": "31UWfBg2Wr5Snk1JUnM1XzTn4JCLi7gteNGAWjhzYgnpcQzV1ToSJ4CniRrJvrZRcn9ryZZy7ckpbSZVsbtcsuYj",
  "key14": "3bipZzwH49dZ7SnFLtCvqLS9NUuYeSpMp38W4SDJWWe7diXk1n69bgahP97f1vQPbjayV6qrEGydMGREafmufhaS",
  "key15": "568p1pDYwSvmnoVARfx6GkmmG8h6Fc9gesGZtxvh54bEvqxGS9rReoUqESpJt1ApGofzroH1Pdm4FX4Rbjr4JxV9",
  "key16": "3yngQArdBgCreaeezpTbMgPvQsZtkB8hur4owxJ6pU8AczpA1cfJRTyxH2ygq7ERgsJE5r3uADtgESQwaFtG561B",
  "key17": "xoAcEsQdp9dCFhsYhBhVKbCVk5zk9kwMrBvy4YTB1jznG2VdN76grxVZuQV3vY5z9M7t8dF7aFetgdLBHqxHdw7",
  "key18": "2UY8UR6rboZf6dGuFYYzBQ7rncN4x92665CMLsmgqqH3m6s5Uqu9fMtAv2g5yCnxEebdYvkdafaRyjrVKPQd9REg",
  "key19": "4pyiNZ3WvJbHaXLrsdrDYCanxnmL9tgw9TgrARdasmyWiEvpvmkfsKryFkt8bkicUtNMTHQLSpDSeTAnvb6KPEUc",
  "key20": "3a3h42HB87wvwSpUVNrwwjQBnABuVj7k6UKwWaJwUsV4NK81xmrAWHkgySLoocjxJL5bbrLbXGYeVzetK8xo3pxN",
  "key21": "4LeHw3VLcwb3ja4xifFq1F48A2d1bQvK8DzS7E7NEjmq6zYUTvsMKnFJg6QNvwBr4s3VQ1F4faxhMmWtq2Wwz7R",
  "key22": "2cs78dm2qMG8We9bAxjDcGrMoTVvSYDU4iMaLBXLeoxVJdzdJg8tHwfiNksWjQMgP4fUQY99dbq9EA6APk9Wq9S",
  "key23": "3srgDF1vJC2uX53CMPFg8geAyi6RxLazWhGzmiEHqSAtVEC24eRWp1rTKBxPY6xvtFVQq7Fo7JU5dqTzz46bTF6z",
  "key24": "eh8Bujo4QozQiuu2FA8FBF4Nstoq2WKnyW4VGgSvAerzYbVkYd9XtFMLyRnfYktBgKb4ES88udJUE1DKH9nXAQb",
  "key25": "64Hsuciu61SjA6PXE55UuiBUA3Sv8HkjbZLuJkNTdzMu1bh1wmzr84A6yA8QgUwPuzpK5WiGL2HAhV2zSy7ogZVv",
  "key26": "4cxH9AzTuer1aXUzDNg91gcH8tBmMPUxwGLJASGAsJK43Ss75iYZF7EjCpX9bBV1NfkMDVS38QD7hH66dbyqYKHJ",
  "key27": "5qfnysdkCKVm53jcxH17aygGgfb36LjwSKgTaeBaYErjHta6UA61kGCpWFiEz4KdBmPbiFybbFEk17FRBVu5RR9r",
  "key28": "29xGhFbykdtMVU7mzzvrpAK4aGERJ7FHHEZv7SgoV9CdojNpbPVwJfmqVKa2PTbQMCRrejfsP5gS8FUaVMbXxpZc",
  "key29": "3MfDoXhb7xdrSP6q3nK8VEy5ouqs33bkPoaxaw19CdfkdqtTHkc3ZoHop8FXbHmX8kRyKDWajmBd9AwtstvLqNtq",
  "key30": "4nsyfpQFYYgBcEtJZCqwVwHm92yE84g39nphA73UEU5ZZW6vrxpnxMv2UVA3HC81rwPRgnRj7qJMXAtQm7Uj4q4W",
  "key31": "2ge1fsg9hsYGuhJiJGjoUMNr2xa8szNM6Jd7BsH1mKMrT2Nh8wBu4VT4LBdYz1Mj6XDs33YiGuz4m4WvGYCWHvgr",
  "key32": "3HnTsced5weXbLBHo5cokZgj2pEUKCWxyw6TqNcE1FVfyfErnY1unxNmGfjCih5M2YZoMc8K9eYXmd4xnsw2XWpT",
  "key33": "VofMz79CXaHxGBH55qrtLoTpJBpnAAbr5LYW1uWimKahBnvHuaxvjnNQxHnTzuYxUmqwziEi4v8XxGjk8L6M8kk",
  "key34": "L61BAAVPvXnRrYhL4noKiJT81jDkF5UA782zopkFUJBR2tzWZEqCyQcvQBZ1Z6J5aJVER4297MnjKr6dHcTxWLn"
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
