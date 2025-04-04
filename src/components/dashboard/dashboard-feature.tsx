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
    "36DKC2PsiR2RBoHmDPP6g7jCbM2wZudDSFX51MUAvBKYvhaK6QT2c4o7jhnwpZdJFfrgJgfRpUzDz6si5L1jv3Mp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F8X1eGXS5VXeFWZGkEdkZeccnAgTmtHrqvZVgAurNGBzCQpJpuaBhwajB1v3Ap13ZrKqoaFrMBPoimEKkAgq9e7",
  "key1": "5KzdWMheqvdBEskDFrxu7jkc6CBbHtXRHqC5AhZ61N82DEewwF6guvgW4DxQH65Du9m6K9m5TLDnXukFSuAPTCcq",
  "key2": "4NnNwGHgabZUS2CqhSxiHrxjmG5N2FCWitiAwzi3EgYkHbAtDbW1rR7Q33C4iFb91XQXx5PAQ2NWNbEdxGgXmfwu",
  "key3": "28LJ27Xc7ZC5icvWCgBBhcmDMNhEJnUg1DVfZZYp8yYvhRFLXVVKSkAaX1iBKBHkuMY32TgtKsznKzS2JfeBwLae",
  "key4": "43o9o3EP5BFJ3pfzoH2HfrTFgaxgcADUD5o33hnXjyUt7CKdUPb6ZditzBkPCWXCSZrkCifhaAv3G6vZ2Z3UsZPz",
  "key5": "5LZGWb9cntCXbMDJDDwMC37yb6aTimhWT3wU1oh5UCcVuiGm8TqwEFDjLtimfKnMTyWGcr61tYLHjoQyM747jEdG",
  "key6": "24BRPWsJNijfWTFQ7rojmDgzKEQmsVxjAidaT8uwJed2gX545CVr49NNepNZHVYC2fYdDK2HQ2Y2gKHRo7MxHR8e",
  "key7": "2LgBgd69RKdxrE34LDJkJetfPrhGAABmRJztWLpGtt6UZPJBe7dJW5ddP2d7NW52VSBEWSG36gw6vFJZNW9urxbb",
  "key8": "2Zrmkejm7FjXA77rx2LCP8Ec1gr39SJL6ZDtip56tfNDnmTHGdQkFAGNAvx2zeKiT26h3DEgpnaQipzDsn8cXLG5",
  "key9": "65EkpAqZct9S79mAdXNnyRRNiYU1h588g4EpxihApW63YujpT91iv3sLQvoabwrcDaxcdQcgj7o5KrarQnaPbojD",
  "key10": "hKDY746zvz8zotZBbUSWH1DxQXmhFjaoEvv5fJLkHQYaNNtuyEKWkWk19YLLh64Ufsa469X6phtwQQRuSzowYeG",
  "key11": "o3RgkhnQSGWjmRDXjDhGbUYezv1WatwSL5YeqetEhvxnQyYk6vgQxcwQGn9bHkqtcaa9ZSn9E89ZfSCtDTHD6Vv",
  "key12": "3qjBPByiKBTYh1t2VPxtfF2ZtfHBNYPciUNPv1MF2d69G2E74EELZvZRBcXEUcUEecexfuVn24suSFySQ1fXxN5M",
  "key13": "2kqTcXivDyxZC5BuZ3dX3oYPPSpHJQxAoMwdEB9ZxcNJxjwNTcdE5hXsfRdS2NM3LSyrsXPHqpMrrtHzcu7CpSLT",
  "key14": "4VV3XpVsQmZpAJoCzxCbPRkkivnbUJ8z4enab3PXsXkCwS8QbY85jPGm1MyoHojf7YxC53HVTGCPQih7gtf53Zyx",
  "key15": "5V1zxD136ZvygRosnPoEdrfWeKFc52eB3DgmGhiUBEVPyzD3yxLivSPBFGeNh2SwcjrVX4rKNaS6DXuP5yqXDAeG",
  "key16": "2yATr6UuHvjjjkQhWuepghpfVmKbbbycCkMjHcszS15YgJJEW4m7dZAYZwaAKjPxHcEaXo7K3NAN1kjiEBXgcM3D",
  "key17": "VMgMZLWsxCFzb9FoF91pYYHSobUT4uZahApn2GuxgQHpP55fZXEwyuqit4n3fcBBCYvuS1k87NkMT4npxic4fFZ",
  "key18": "vFAxULmqYbK7GmvbWKYDgpiPPai7zGjt7sNGt22vsRqFpNuaK6WykeYsEdDKtA48H4XyTeaqvm1kGDgDq1mc4GG",
  "key19": "5KnDpKPtmbSe5iYFSvNWJ5yWJv2zDF9MbxV2VSLghhWCxoCyBw8LBCCaRGK85U2UXvwy7bSAzVGMRrfZfauvd9XL",
  "key20": "QptPrVmhrS8Rd6NcVjgWbUuuH4hCACQq4e1osUzVduiQeRrrMHRVzgjZ3dB4CaXHwphPsWNZ7yJx6AokEQDdwmz",
  "key21": "3s4UKvq5Pj1SQvZwAtXz9KTdty9zyKNfwxtoMmoVChs8R1mBpLtgFBb4TH3dysemsQX7jtZ4isFuYXuAU4ENqjur",
  "key22": "2crydNF5Po35RSWTXxePFzxRZMcHgUf2qeeTKX3RzGixY6LK8funHTsYneo7o8Lv3idutCtZNVJQqR1NK5yY8vH8",
  "key23": "3ux8LiR5JVZyRmRwmHZJPGcdH6gXVxFziWJCG9EXwuYeRebkeCKUdaoY2TF4aSVh4mhjafUiMzUam1Ai9bz8CGfy",
  "key24": "WLHiRSEFJ9cVmF3zBhCKQDmxu5AtVc9g2SzdzpFQihxH1CubJEsDxPmaNs9kyd5FR2Yqx66afVspWFCjEPv6r7p",
  "key25": "3u6R95YRAr751Fm1rYSwPX61cytkzGgctq6tiDTtZ2jCoxpfzgw62DwvsKKLPhCN7eQ13cu2xjmZfWc93qJS2ubN",
  "key26": "F7NZa9sCTYLxtKUf18W5bB3UB5dPifhvfHy1nPYf1WtJiBx6T4CLzUpBBBnskjVmfhdSd8tZEcpYTgXNiG8HJoE",
  "key27": "3U4A5KtkcbWmo9dUWEM1Gujb1eRFFeYGBsYGRA35w41fjTF3YP1jnCgTYN2efHYr1WDY9EFfz5UVpQ7Rvi4bGqtW",
  "key28": "kjbf1xhLksD3CShuYGBKQKGh3vLGmQDGVFbPricNDWzZDcgh9iodccfoMwJS1g9AHvs3wJPCYPXmpJWbFQ1uMAc"
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
