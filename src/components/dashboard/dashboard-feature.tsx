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
    "5uubCkbxnccxAGuBpXa6r2SVdp2HX13jXmxW5C4QVQHyCFMPMJDmJqPjLegE5r1KtFBeP5R8xtUS5iU5xJJoQy6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z3bZMoZouEkZc87hGFx7j4ugqPTkV5NSrTULnXpU25AbNR9NeNmBSr6NehhfVWMGrzqW7cxd19n6QjWusTowQVn",
  "key1": "5g6fYUzpu4vGsvzd6qVtSW6Mhwr9Y2d3fVULhKAhARkuAUxeasjb2F43sDj9zvoLs9iMYA9et4SvRAHaLp2gyNjP",
  "key2": "28qsQa7KkbfKXsjCeAEXegAZvcArpYUcpP69v47zCittRwzhHCh8osudmAxxeTap5XevJS6KzufU6szffSFiqCkS",
  "key3": "4zNGzECrSfxJa2uTvvXfj3uhVxvRvhQqM2q4CDCrfXM2DUL2Ymx74AQf91Z3MaKdP6Vx5rD5MgbWAJf37i3DKzdy",
  "key4": "3izpsLh2cDSUc6Td6yE7RbVcAzbhxm8oq78cMVwQQiaEzpboa7DCYVZ35fsmhoXFJx3A6oVCotgBbifY8VLvoDB8",
  "key5": "4Cm8vKPJEWC848J58HEXqXwx8dtB2zrPBytNJz6V2zCFWumM8EUwHFwNhDExgj6XvXEYu2CVRys8m5T1xm4f8emn",
  "key6": "2w8xT2ntnu9y6wmxxHJhpgSnEp32xYBoMfxfrLmFYsxTXhuUKEJvk8rpY9VmqKqUEmB85WFG1CBUdBkYM6uhL1UF",
  "key7": "4ESvYNvDSMrGGU7k2QsuEc9McR4FSg5TbvMFJpz3ncaLEQQJuX1V7Re69pnxLW5u31b921R3W2XTJ4q9BtMfrg76",
  "key8": "53TFvmwSVZsSXh45CUTC56MN9bHZoAmCxAdLCQw9eEYEdbUE4sowGLJWzFyjGXxC2KLDP6Xg9CDHhnHQRTbBKstB",
  "key9": "279bT8YCB2dr3xrMRAMD4V3wHJQsnb5BCQcn3UsU1MMa62bkuge4MzbvoCbegYLk1eDQMPwWtwCekdxVALubted1",
  "key10": "67bimc5KYHS8ize4hQj1qYGgF6QV9mRN34hFFJE4bUk95gVaEhv8EebP2CU6thbiMPzsv2NfdP6kWreswqwBeY8R",
  "key11": "rrdsgwgHKwqiTMUMismAnncc2degy1yPceBbyY6AtYMD8ogw8ZJUUZP4yJ43HVzRgc4Waxvg1sJqzBALHNAiAzc",
  "key12": "fxcFtz2hsUiNF7CSv1P94z4gRkXbWiBZ2akBzYaLPDjjMD11SetY4Zj11AJzL1qngVTZLvTtMAXVncgajPdURtZ",
  "key13": "JmVoocTFpz7M7TkkPkvj7eL5VbLGqKtU9AwS9cpgVMgmFHJmJ8BzJUWS1efgGcuAH5CSjszrcWVp9Uhx2zNtPmf",
  "key14": "2itDMtGPQePFzL4DzacNhjv6Dq37Tj2zaQHUueDt2HCXEdzbjdQVJ4LYKtRmKFxztt1JVWyAsbK8dqDBDwpM56Qw",
  "key15": "2ESjh1UuGeC7aWr1DwE7emKkoutVZ1MSiERVLMHHMQTU3qtrB4kKABBLE5nDWCPrDxaBA3auHYKjgczoqsmZCAR",
  "key16": "3J7nfr8oKYDQZx5SnfqnBSrYu5wPUjwELqvr62SPxFjog5KNnXUAZ62YPmwXQgwTKkA1e5iKRczzn7gbhnq7Pg23",
  "key17": "4rXigGRAdkmnNmK5ttycZQe4uquXQ16mbaM5ifPQoUXE1im3KxwNDNxpyGmTZcS8BEB7bQRkC7QRFxHghED8UWtu",
  "key18": "3Z774UhxG6752ts8hHmVQLfMMPBenuu6NjdEVQp4eL2bozmapxnvPZARdBHtQEDyqriFNFWieVmBX47YkJpsqstd",
  "key19": "4XWyQAoJ8KNPRhPwWNmw8DBgrTAKmq1eoYysEAkXAFDPoD6nXTg7nKY4HHBoRenhovU9A7Vi9B3JxX9n2MQVYL2C",
  "key20": "2BaS4vMoU9M5qqvmS2tcVsrR2S8TRJF92sM9LrZ5F78XLNH3aEyBA5QweB8jonfs1z9xA7GukhgciamUxdXKc18k",
  "key21": "3FHr1eKLE6rWwD4GdSy846PFWbHHsiRQbqCypbgSpk5oioKU1vhQhhKqXjHBn2smwWibKX9p7n1MV5cG7iN5B58V",
  "key22": "5xSWn3qvkxk623FbuqLYFLB8E7uv38hzFp9ictyA6MU5d881eZRtyJwNpFGRVAovfnXvrfuA4Q7enQEAmKEXNoDg",
  "key23": "GAiyNkw588iQUu3jX6MgYmJLMiKxiP545iUDm199fskr8E8o852aqEupvTvHVo2Gzoxr4gfR6X23jWSVfo3mkro",
  "key24": "4wQHoECQo6W9tQ7Pizac5kJrFKnHmCSSNzYGEdkpt8WLsUo43Aab6W3MW4Afa7jT1C7FHFzbnVb3PyngFZCrNByA",
  "key25": "3b3hjmAcW2BVjWLUGK95s16Yv5d5FKsrpxm891RxfaM3trfAJd6NXoAGKDBd3Etpr8VNnuXdmmZXi3m4b8hqdW6B",
  "key26": "23T6zULLpxC6LdqKVPm5vz6D2XTTqpGmgwJNbzb2GSCmJA9CBZW66q8t385V1KvAEFujwD327VUcECXyJR3x3Cts",
  "key27": "r3yvu136iQJiNEr3a4k5i7ShSzeZTdeVVYABPzd1XubESXMT8WguVvgcMTS5hUj27HYtVdhDSE5xrieRykyE1or",
  "key28": "33ZshczfQWZ8JJPTtt1qK8NcibcuYe8ccGesXm3Hg8Ne2R6R62xBpD95ecxt8Fr8St6aBbXtAkychT2hHYJPVYBb",
  "key29": "5EnSCZT2chiaYaKLgZXCd1xosNW7tosBxjUWXYN1sTv2UizjsPdNETRwp5CfAGnN78VATynxsv6xWE9qReBZyEKQ",
  "key30": "38dLFz3ErzeKykvtyvc45hQFCYH1knQoSGXtrVKzSDyzzMEmA6oPms6CXPyCpSQen1qrgAkqVFoHNgSVqti9Yj8f",
  "key31": "3g88savGSejrSETm9hN5jKxoQAaASTKSvCQrvNQ4mtmGUw59eHiiAoXkMKbKSPPmw2GUWjJHKUf7EKdq2kj86Dhd",
  "key32": "2n7AV2VvbZ47mDr9fH9f6oPLaG2xozVzGdSDiQ5iHoUnvY41wBcxTJmDJZCKNCg2ESkVvsY9c97uJ8S7eb3Se8yV",
  "key33": "57z74Mc8AGwjrVHjMqv346W4rAdbWDqMkKmxRTn2dCkRRC9TVajCf2mYz9S1EmVWGS1ntqMXvwCE1Hj7zyDFzQHQ",
  "key34": "5qSuzpAdr3wDz6YxiSu9iR9doV6jcuyfwySMerxDB1GjSKW1Gfz2GfS9PbNGpcDgNfMiRQCfVBhuQoEW9ZzFVQqg",
  "key35": "59E7UPCS3GjmfArZkHvMpdzMruSzFpus5Y6DR3jMTrE6h9gyU5DXBSbfhf3K99KAG5qC23wJXyXL7viM8iiAfLFk",
  "key36": "5dDsqNX7Y2jnoGkUtaegq7yJRmA7B1yhEPq4daK2zWA8vBNwT2ewSQXAYm3wJozh8xKuZfhF4Z7FeeXRi9y2ogbP",
  "key37": "4gKAJ5QUBSHdVdchvK7UVAJmDjqQrMk64JZ64qEvgDi1QuwhqzEHjhoVjmK7ezJocPzSmUoNEtJ2Fg4KfsrKyibL",
  "key38": "4Z4JFo4ru6FdBhb4MuKDF8TyFiNDCftUtjxTJ8EbQXMJ8DCH8U3pw5ukFEdiJxm3W2Ba8STdGWtpwPVqYqAaqHdj",
  "key39": "5jcZ7gxVtGAkAG6qptp7q2NuKzE6P5DaSjwQK7Ny6kT9Dq4NdXB1NAX58UCvqs9jxjQaKJjNwmwi5cdVQxdDToP",
  "key40": "4xN1r3b8xRxUun5Rh8SNgn4HkxuhqgSNpZjUE9mbxkTjYorTtcZBuuPen48tTn9ATX8rwtqhpphHu87oFiKjE4jL",
  "key41": "uvSasx39d9We4ftMXkGjpumtnf4sT5D3T1Mxmq8hBjgrL2RqqL6BCUG7DFPCd8Ct2uEphJeVYX6Z7P2abSC7D5s",
  "key42": "4HhWZ7KjDE16Vh8GYtmKMtb8RuZ8Rxyh6PFRx2jimchbZ15kScE457EtAvPkaCrxni4MVEKgMhZX1Nw6gB3Jb8tZ",
  "key43": "5xSrzHfVGZ3dnNHXhB7BogewGjgMJTojcg9e4Ub1q5e4mLoLGdL2q79ATS7B1P5nJA9hjWoA9DXyUBm2Cr4VBesR",
  "key44": "4HGh9V23WqwcggGqhhwXaXXu2sDbXGkzoDYxE1XYAUsVtEVBbkHPnfbUvHodiEWGwRaQSiJrsd6Ti78rDVZh9R8s"
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
