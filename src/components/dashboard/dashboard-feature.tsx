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
    "2R3nKFGrwm5sD8HPHskcbzr9eHTFJcWVERGvbSH6513GJ7Ya2CK19tUvp9A6EjhGPNDwqK67kskzBZHiZRVS7kiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h9GUiUZdo1iRb5e9sKGmvBxTfuijpns29uNdx3YW1X5qUPcfCoFCBwrZRk6s4FoFQWLbHFB8VcRN7TKS6yEdFza",
  "key1": "3zt4CPnkNVA3AiZCoLXXqDe8jVBUF8CH6SuhPzvoWqJvWvMdPz7AEEwmW8nTYHE5fCQxkdsZpVydiuzLNdaS4dCN",
  "key2": "aQp2wiKQX5bJJzrxxBcEaD3Hg2GaaEP18jejxTMFPLVMUKhN5kf1r1oEDk2jT1s1nxM7Rx1C4QmegeRrNKgiuav",
  "key3": "4RJkkMfx6JMjtwDikjGvFm1qweS33aJSYQptWq6N3SptaWD7edK14dqyPpZ6fwqGHYCTeLR6ZJqG4tVjq1qsqevt",
  "key4": "9UvDUKzHM2PkLQFyxtVXig1d5iyhLJPtHwhVJGvGd28g9SvPPiBNSdR8A9mS5bbF1iLnwvJngq6WTupMF5sNBVE",
  "key5": "Gj9zJg5QmkEoXT1Y6YYaBEprqXVG9pK1xoTMVqULT7Wrea6hCskVoPMjubDMbiiVyDn5k62a1g6r3aZ1uonMqyw",
  "key6": "UfPcbAhbAwsBneoQKYn5HxFiJPtkHsYPyrBbY99cxuUAxEMDiKkV7iHVsroL5foQBYherSf9wyCd5LirjXQoDKc",
  "key7": "44ZLN6hW4qxYj9CCu1VjzU8UVaLw5zZD8JtXDnfXiLUZBBZ6ZZsGhtaHoi18mXBdjziL48FpMoN2F62k8FTCNYTJ",
  "key8": "4JbnRm6RYqVUC6rta9BMh8b7n59PwrNyjsGCXiQsdSPRAqz5sYHVn8dy9oDXnUkJd31YpTVAVWYDGxNqvmrsiUPN",
  "key9": "5CknbsdpCRYMYXdEkaRC8FN11N6idm5wCbg2vJXdvkoMR9DPtLPMW1QkwWnQLbxuZAATe8CKKhGwuYaYGwtZwnio",
  "key10": "2jxvVf8WNRCWj3FvvYxcBPCQKge2WvDmHEveAzCsaAC3FkJCiGviem6M8zALRUngoSguQarL9W8Kt6paWFP6h57S",
  "key11": "5tuhaR9fZXeMC2d7apT3JdC2d32KwWkpE3ywM96sUfAJtEh2aAfkEu1G4nqfmp7ggHy3X1j7TjQi9ZBeQ71MP8sL",
  "key12": "3dDwXA45tHYdSnMMT1aGtvMjJtnfjAgfStaJdhL867CkWzQGDUBgLfM8FNaxaV7HBENk2Ww5VAyxdcNvrBVSByyt",
  "key13": "4TNzjcUV5CDmBMwmvPm279DZyDTNeHurzcdqqPAWB9vC5CRfKZcHrHG2RNhvG7HrcD6qeTm5j47jZ1st3JPqCMvp",
  "key14": "3QGWK1ShzADxbeQ2dHL3AaiQ2HnxiykmheCEtZt4QQvg1bZv17knw57PcQCaErxeTQtHmPbRJ2MAMNmB4Jbpnkda",
  "key15": "2J9ADLhpKCR7zjGm7nVZLQqYVxDFRvFaLM24bGBUbA7UgGtK1JW5A6MTZTvKff4UGRxDhaFsYjs4tXAZUfcUkEQf",
  "key16": "2djWqxhyqNT73A5BVrMi69UeLpLFefJbP5H4cEBoZ6iPBgr2YGa8B1NnQacncBaabyrWRQ7fbLxigBrTwWDH94hP",
  "key17": "31DxzYHrmBjK8hUEuzBjhbrZNzhPCWZzxRSnskd4RUzjqjyULPQ5nrXKw7ZZuouFNmhbhh4hNacyJq8Fv7kfRo8m",
  "key18": "2YRpz6KcnijGUoeF4trSDH48QdkCWgFythSQ62gNnDn8XJau7DfLMmhCB96P3kzhpRFZX6rpdohSQwDx7Eyu2Aek",
  "key19": "5K9Scw2BwA8W3PnhnXQXCtweRPz8w1L67FDgQoRmegc4682mqn11p2VJayXZBCAJQu3jw5sy9q742MCGyDw5ZVck",
  "key20": "5CffFUUcnFnjtDds6PdYvoQU3aacdczNY1SdC5bCXnPEDMVMd9wEZUgwZv7ccJVJPafmExsfGF4htzDqPgu3PNAX",
  "key21": "5RAf68HJyGy4Q24cBpTGH1DZYZvv9neNcqcXZryiQF7mWsCbhbURhm7bqMMAL92gTj6Mtc65oESVC874V8QqJwCg",
  "key22": "mnic6XkK8ESj2YVHA1y1XJgwACacf3HUc4LGiVwTmfRSXgLuyFTqCgKsMAaUuVdFTHho34Rf4BZuNqwFZhxM22R",
  "key23": "3wPXHYis9ShDGNZjVjZuhooUpWdzXYMdVtRHSRnXCH3pzXiKJMXAARTnzhP3LrdZo3dxCAhbxCtGeqYJxm2xFg2T",
  "key24": "QQbXaeJpJ2gCEKZfjSvh2U35g2CVjTHqxTpq5cRNQt6i5RTKjHPozKPteZi9fkYySnyEh2yjcAKQtSJWf8sHyV6",
  "key25": "3mUqyckNhc2hDM1p92uoHczBjFhBgaTKuh29PmGBQQScs1QjKmjJKKioogRB6t3AeiU12UPZ3EQU8h7yrsp5iATf",
  "key26": "5qaCV3EtFAnmvNpqqPibzjvp77uUrmpX3oHtXdjE5f8ypY4k2kAnZGeJKaxh2DM65REC2tRBJPwT2NpHdWpMmTDe",
  "key27": "3BhddwHXvQ8dP9oPTEEphKRTxxETBqsxBjG2e9UZL3mevsVvgRKD44xYttdpuUhNQk6xjjx2dzxZABJQp6VDM3pU",
  "key28": "2XX5y43ojwTzqKgS7FNgVRRvHDRc16U6DiMZd1AME5ibhPTCwRqfXBMdY52mtzxddQrqLnR8LXc9vzqmZmQdDbKL",
  "key29": "2eVY48TuAZA8Vgz92X46u8Af9HwkcJMN4Kxg6Z7aiNYaJiTktrZ9E7UY1x3w4TtjRDVGEUqrwWDcJuHfJ4HPjY5a"
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
