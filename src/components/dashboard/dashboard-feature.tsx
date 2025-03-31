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
    "2Nrm4bFuLbVwq3Mu2VjQtuTmie7odQCzphAmmaW2a6sCFczAAtKsRk7wnrN6MvBTEBxgqSqXankuEyD5Ya4LKKTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TZz5GaWzwUPhr7xeHfSpduMdKcGdGRggwDi8uV5Z3Y7nXJEr2NoAX5pA2S8EJM69cx1iofPBzB8LSDr56FajBVQ",
  "key1": "5AyEy8YCEVuSo8gxLKohnZahEK4Pfb8mkdg5E8oeMbRpL963DVhQ3v3c17ScSXhhwoLBuZdhRCMDpu8cFUnRpTj7",
  "key2": "A5igsSEiTo7gTmKieRscdnbwYvtzAv2xss4pVZfSzFMa7u7yAQV5RMcrruz1Jrn4jzBVT1QbrrXeNVmWvNLVVdm",
  "key3": "3YYkrrRB4CTqekC718pj8PzendrKu8M7EAesrkFiixJvsLPezgqmW1gtrBzLDtXwh48w3znY1bxJCAhLQNtXWygW",
  "key4": "sjkUTF8VCtuerWCqygAhfbHjZbjy1SvuTh75RqQcRmPZv2MfrPudCvYNe4T2RMTxJviBYBs4SE5enUMGWCwixwo",
  "key5": "haX7ZaEm1m6UteAbC2GvHpp4X6WjJ6sLrRJXKcoj9Z6DCAbaC7DKnHCKtT7Twf3fq4npx2BeixmZNdo1KZNY12G",
  "key6": "4NYEm8jNGQnU3pMkvubDJAgtXYuS4kPWAiRM7Qj5W8gazTDheFr2n2tzWZGpmoAkZw1BzKkubhhLFphJSWHrvgdK",
  "key7": "FdWv5UAcCPDdVoRBvVv1xAsDc7cK59T1Viho3zLYngc1uUe9H1ZkDRP35xnZngvVmmozTo3UVJKwX2FD9RT8xTP",
  "key8": "P7fsbDAEE1XEYBh8phAxdLArheNRueiDYgNtYAm45dCzGVmFejVXGNwrJm43Nnu36KsGG27fBhc6vdWfuPCDd2G",
  "key9": "4YxbJRzWcQhT5VWmMvDuzUjxi3JesCSRfeaMDcNxcFMAy8ustf8BP1hesp5cNqLN9kF8v3ngff3UzCZQkA78JSBb",
  "key10": "4rrpT2VjARNS5peBQ8EpeDjckcfiYSYytZv55R67S4FVvFJ1jDyWhhvZYfTeg5sFYxcwwgHHEYDSHzGW1jMX23iN",
  "key11": "44PNwt9SRMou1uuazbLx4EFsuY8QnzyCQhJyidk3FLp2Tugjxrpugq2GkjA2Y5YKqurVcjG7oVzgpcBoeaoVYD4Y",
  "key12": "2i8ifNJseyMEdsWyhDLE7iSXodKNWfFV9d25ecyvQ7284rKLzeXUVy2t8tDr26ua48kQWnNnjimSxjjpuaoQBYZP",
  "key13": "3YAfgUB8DceWhBCT2y2ZRByR2zfK2xo17w8UUbDSzK3WHjo8Dofrfc24eFsxqMCbpypjunc29JqTM554hTXxxSJN",
  "key14": "7btnKZX7ks4rwxqrAfDWqEpx4xKno4stFJnRBHErsS6hqkLnurLHTBv5fsCq3QuUMXBB8rCMz2PNhWkKyDVWEXb",
  "key15": "4tHXK64uX2wsoSpRzygBTP5qZMdYxRMTq7LBwtk444PbsoYBKzvBiqXuAMnc7AXe7ASaHqHJGwQBXFgfXxY67zEh",
  "key16": "5dgnVWqfjPNGXZfTxAPedaUXCaEh814k6W7vgfrjQ81hAv3eZaETJsoavhYG1ezwy3myKD88XSwYgRhVJY8CSFn",
  "key17": "4yKRR5GV2AaktzQA63bdsS7CXqKC2ttKJf3nYXgN6yFJVUi6KZqbpwx91wtzvpn1XugWoFEeEU7ECzsyZJABrX8a",
  "key18": "2ing7N19r3dVZm8kvevGiSyv3Qsi1cZn2yMarHQJ3fvS6bw2cKQ8iEjYjNTJrUV5TpWGmZ5ZL923qUWsix3WDYtj",
  "key19": "3Hcg5arTiMYRCQnjq1t3Fxq8MbWkCGPPj6edV61CBZtWX21FpoLfKapqsMZsR94DiwL1U7JNJMuGmVRiX9azVAzL",
  "key20": "3NH6veTitCCyJgghSp4vdUm4tCoTQtwmRvGmHezLcb1dDwnVcthckNoyqExxBpb8jER82ni1ei5QP8VJQ2e5oR2m",
  "key21": "2FEdbW6pPcUon59QAVD6GBKpdHU4GBJX5iSv8RYURWoYrnMyRPSF27a3coXVg3GfiuRhGmfMDdisEqSXf13XRYBT",
  "key22": "25HM7YRgzRXGjYwkHcfYoD8eQuzXbuAfySvk5xWtQ96YtNgJQLYDDeyFgyGBFFPmeaZBSiRzd9L2pWn1QpQGu3A1",
  "key23": "4UP5hy2ZjMpJ79Y32Vr9oMWaVdZom4q3vVxksDD2tSu5W9SFWbfc9GRQL7twNwHiuZLRgvWwYVS5EfNTSVusMV9o",
  "key24": "4TSi45chh9SFKv53qstXNvTKCt8SC6cectBZDPK4LKAxaB4TjHnW9zpn4p7MeaH21b1tA7b8cYbHxr6Gqu9yANkg",
  "key25": "67bMCF72d3Zy28edp6uNrJc83rVLG93GLoUdreEPEFd3vw2HgrCfVf2ZewvopWeqqPHh5iJvKZPAkM2q1Jy5r5Kh",
  "key26": "2TPQU4x1Z6iuYsNLU32mbDnVWpuzeKVxish7PEt52ih2DzGEAD2JqaEAMMxmYysD5uWaMmJPyENiXC28hDYBv76R",
  "key27": "3s8sug7BUfTfUsxbsD2y5L5qKB5ANGeG8mX9qHbSL5D3cH6b2tWzCroBp8LJVxM1DjSUsMo2hyuDUcKqozxL9eYf"
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
