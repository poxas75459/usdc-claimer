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
    "LUEYK9aysaENfWu3rWd58dAxqMiGNdhbLV8ENCFpnUBospaep2pAFdfhdwFpDm9SdyDYDpSDDsvpWzAakbeJuP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SJKe6ZLxjsdRUtFQ8HbXAx4XGSGpqQ13Y8PWmUrzAmaFM96fzvxe6pbeUWQeyQ64nWpHe2bKTw1BNELXKC9WRBP",
  "key1": "3MqpiBN3F8WEWqRiyqHbMeZsN51AMi35vq6GakJt6CkJJBCmWDGT7Z2Jgv5wKcWaXRXGkp2uBEvUgN9xqPhjZUsR",
  "key2": "4TivJ8GWRx57QFes25XxiZE54XJEVha8X85of8qPMBrjMRetbShHz7RadKYcx6YofCEafkedz2wTPYijEnSMWFPX",
  "key3": "3nK8CWNmYLH1ubgNPdGUKWrVRQzsGSSyh1kzRxkoT6QZ3tZmE5xt9mnd8PSkPjX4dJipH4uKsVWctFpcWZv3RKEy",
  "key4": "4hxVKT6ocYGjzqVWgxKSeBWA7H8pu7embM92MSqMhbZr1Ti8vKxzPcEtxe5Yz4SpKpPLSCEYidFw4DtwYCcA4mh9",
  "key5": "cithzRoL2gEqjGqd7e8LZ7GQvz2nQCxJeTytbXgR2hprkxNHwi1SF5roXdDKJqpwX9JnYhqQRNncYBjagXHyGLP",
  "key6": "2TwFhQDEQxqWSAdNUFvUV9fQyaCoTV1acLNWRnZq787xfazoqnTb4ukvMZJrpSfR3nBDRRLVn48YSTp4ZMmdFrAF",
  "key7": "3VQvhQEDGCEBRchVpFAPxNhkwwg94RmPRukjMX3WhEpgJ1GEUjfeU4U2opLzuXAWnFeWqhauftPmdxgsw9XsAnNk",
  "key8": "5wWegAo8fXfvoVgJXuo5rQ3UZoaFmfoPNyb1LSctfuoSnyd43MsDCeoLYwfKYpQiaHcPSDmdvNSKX2VGkEqrUa3E",
  "key9": "41qpK2G65izny4XqKM5mqurEccY6M6HmwEx5rwC6CMKgSjZqi8w5LVeLMBkXaU61JL5GdALvmorxmV6FGGWUtcWn",
  "key10": "5ukoeGJuYEhtnkV21UrmL26sczAqTg42GyoxiiZsv8bBouL58bKWmudt5FxzuJtJiE4j9ThFhoMVgKsf3NDX74Ck",
  "key11": "5w1ZWvKC7CuHHoY3rUypVw4rjJLc4RAJRb5bjyaFtLyX1kwvJFnur8T3DXyGLnaT267j1xmnDqyQouNATMgWg5Zd",
  "key12": "5Bex5k3ifEbkxwazo9AjZaf9XQGXXYnQ1kWoLoKHjKqCdAeTDB5UuRsv9R6ZTFkHs8ZcM2nQWcNaU1aTgSkT615M",
  "key13": "MsHZ2H2G2zomrFiLWYxHY2dDVExbkR1MKYWFudVrVLVHoE7A2JwMJvdKsfSLf4gbSug3WUmzHV3VWTtjaoiwVqz",
  "key14": "3a4omvvQqQWWzZapzqLTZQ3GCLpa7MUqFv71r97RkMorQkJwEFr7iciqcWk4cQhmnswU6hM2ZTEpUXwYaoV3hGVV",
  "key15": "4rGtDh55afrmuDmRuyndiNa4eDWTQbPU774ap3DpveraD9NMeCL9LbpZka8oPGee6h2oq4XhRfu5aez2bHNuUiAD",
  "key16": "acmVGwxpi1DFx7MVRBUC4WoW2R95YYv1GPvh8kjpC3BVCj9omenMto5bL2Lha5FD3PGGa9WXsgwQtjFPgxbEwxv",
  "key17": "25KEUERNLnLGsGz1pLb9aV5cWETmu73gHzZHCZb4CEGjCS8s79YUKFM8XJZrpQVg62kyAS86T9pUCtRnTo3shUgY",
  "key18": "2R3525X9S6RVzWKJYK3scfYdb3xX6VY46VnKLeuPYYNyMuQVxHDBxKipWcFgmEvVjiWe3M3BU4srKrg7ByJtUWbS",
  "key19": "4yz5HPBJyfiYQjDa3j7wQ6yLjHjjKd3zUPGXniwD1nhqaSM5ggLG5ZtKf8NNKn6vtTdNvVw4C2shTYN1dvMTT4mk",
  "key20": "3NoZruDfoWvLBufMj79S3yxT5A6KcqKRaY5X7DyvaGr8b64mAgfwcZJZSZQuy7Rk4Be8zPfnUD7xVF3NJdEM5cMq",
  "key21": "5Hsa5EjRKyarzvTDMg9gi7FPj4ei1wkpiCLqryongwzSCAoDfoBkEki2RWN695v85KDcPcKtACXSusUx1WeM4dY9",
  "key22": "3HiNyqfb9GTWaPWYRoyPx6bA9cLuHQYcHeAdM8vKi3Q5FDTww2rgaSphmBYXTmf68fvBaTexHjKhrK8dh3RK8dsV",
  "key23": "2q2v1aNzbQUvx6QnT3QCgjuFLHhKPogg54WMvGM4FV2irW3Wb9WSoZCS17gdDwuL7upxQhLKQgw5naHNDNpem78D",
  "key24": "4gjUvpre1bT7ePRa6mdx7YiLZXTeMa17XgokHoB7EooUyyAHVnj6PdBKQmDob8KofY1kVfGrFamXjZQznEowYRUR",
  "key25": "2pfJAkbJYcbBKV7gpD9Wm3FUTJSi8jugowR1cmxpt1W59gpin639joAB6uefPZWaJ4RtWU3K9gWEjsUM7rrsfRjS",
  "key26": "4XjKj7euttbDwGM1KG5aZne9oKhnDkzQcdHroqCgJSwcniYYPiZnWpZdqrU7orQVVTAR5Pucy1LLWQTF3UDmxWRs",
  "key27": "2qm8qGmzSUH2RabZYx5jcQSALmpxRLq4KSRmpw8icMzh6NM4zXa3K4YPWQG6tj8JaHiq3mgaNSBM9KEFui6DqBj",
  "key28": "5fsHW32k8m362EQWHZ21kqX87N5XfzTpJwWeMy2M6mZPGWyRwSzpnJ9edfpewvqGZrpq1wgFuhwpJZoMGEZtiL65",
  "key29": "5tqRT5juEa78n8bLRWvgcd4hgNCRBDADJixHqRAFuiK32X6p71W7KHSXdkPWw3VEZonwraxz2cTy6VbmwdPjTv3f",
  "key30": "5YvnnfwoJPXV1HrXhii6ARxCMrkWGaT5G9GGJV5rdEhmXhjZfjJfAa4JinpUwvtnq9DzDBEtzDmdPGb7we9xGx6G",
  "key31": "4STLJmMA8Diufx73CWtSVKLSGecEYUpcsTVeQp45uS9dWHfe3gaghYwXXTCVSNNNTsSgXG3tGjBKMv1VH7rPp2T8",
  "key32": "2CoSKsjb62dERuD7mdLqFnYPygZsySwEpNAEEXdkevuVsNyUMvrVkLLcWPGWfTEuqH49qxSvuuGptVdBuPuZtaKK",
  "key33": "SnGPYoKZjCrFhyrgHZgt6CrCAcxDKYRXvbQjG37C7Lwjvekaa2nTBCGQt2xfTEUbmvM9x3wEQxa76M8KbyVmnrC",
  "key34": "41byBuAA9C7gvF4x6mvwss45g93s13eDGYnhFjmu5t45SzeEYrTSYrc3nW7Zs2SnEkgCoFcQ22so8eZhKkzaggdw"
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
