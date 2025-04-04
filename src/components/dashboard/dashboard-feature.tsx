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
    "kd7AokE2TmtnNVJw8QAmc9kHZgzMgEzPza7DqkABnueNnnniqHEKDsRUaRyYtMxa2nyB1uG4a3DzYk1bfLwiodH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E5WmzLb8LHGNSdHwLKfbJGU2WVFzY9WygRnavA4qWYw9PRVNNRKEdKbCieUqH5tB4Q66oDKsRVpoyvFREd1Ut7T",
  "key1": "3DPpFY4BARg1HT4nxiDauKa5fHUuueALWtYb2A6d2t8pbYHfcrrFHoCofcXLsPk5HVYLsfdVyfWtY5gg7EbCKpSs",
  "key2": "3iGdgAaw3o153Bs9iS1P7JnQPdvr3ENMEw8RPmBGTeS8vRcCmvfT6zHmyaNGMYtrvXrLvnKartpYnX1bEBF6orMT",
  "key3": "3UNEvkLHS4UZjUnYKVdv7k6b9FWmAqN6yLK5j5DcxqRvq6i4wp5szsNSmXL28Ji92MKpSrexfTDmbBaruJ1gg1ky",
  "key4": "3ycEtVMz7XCNyQ6hUG5mxPktd3DCxqxCiQrDnMVhH6SQFUfNLDX7Vkt7i8Lm7ZMVCpCHipAQe2DuiaU55QWJdvDH",
  "key5": "Mo31G3wkCgpxMrzKJd8JWyML45x1HAJLqtdsoyW2tkM9uc2NKxG9v7F5o36tLXU3wLQVTsosuTdFLyH4HPfBpr9",
  "key6": "5kteEdE3pPjLo7vcxEm4pJpNUWiRBg6ai1FeWpJfvSDTfTubcwmHxj6SJ4BnME7HkRKAbd4sytWsddxkjnjUpnyo",
  "key7": "5zVsW7CVLnrPwUFR2SzmAb8Uj5nAWRtgarsCjPdt2x7dq8aCqdF77jFj8dMBaS2GJqXz9AUpB6LKATVVYbSTtE9v",
  "key8": "3AwBVwnK8mZDCWpJoFJrB5YcRqdDfBihyPDz2JGBx7zCuWHP49mLABrJLBbveGuyYfpxbVzrNh2Hh1aBn2cR7k5D",
  "key9": "2nNQRKNWambv4brznqAKP8QTvKQ11FBGSC7ZK3sXNciYNxULH5syubYTDpDVopLB1U7RiCvBrEEjEpn9LJXZNCYf",
  "key10": "2cPcmoYcozSizhwsZDX7aQCTaHizVewzn1N6g52Km7s1uQgTiepPn51yaNCMyhkFrJj5qopxwK6HWfRn7tU5L8ft",
  "key11": "3vjUM2M2okKFhCR3k9DdV5zvTbg1NNepxMrVSrcT8zhNUa5oHYU8qpwxaGPkCRXrbC43NLAsQRpYyNmhQpXtXqH4",
  "key12": "3bmANMdbwAAaPaaNrK36uh5DMTFXW8AhzSp36wMxZPYBkQKoPCvFeydtptYp7ro7W9Woh1CJH6xrbwtBDt9TymYq",
  "key13": "3ddyWfm3Pdbj7UYp46KztV6JN4XJosZRRNaRHFZS5mpzDPaNeKVHWwxqCS1ReXaXXSJGD9ZC6NK231RGuzDe1c1o",
  "key14": "5eQAYqZPkjhCwjT9pdCTpK8pKVZC3iZBsi9GRqwZyJFoZzSZCU1YoJ8sE6btrwYUZnjei5zGZcdrpAdQCM5PZjQi",
  "key15": "46J541RzMWWoU6Dk9GqBVbUXRC5BfgophoFEQoUEwj2BkN6ytKsSxQENwuehKUs9rzmCe1NB1MJNpkEjECVoEzW",
  "key16": "GjxYCbezu6LCsHWPAJuYYvCtsy2hi1i3tiwCwSyqcxAN34wR6trMJLBaU6R5oxsPStQbuc7juyY3p56ByB3qNes",
  "key17": "5NwgzoChyDGifQAmtkDLR6SiciMFfBY3e1RrvKGQT1FEARkXmjWL7RJ3TnrH2ybXW9fKmJGEsVnnxuKiGwq3Rxj7",
  "key18": "67KgaNEy2Cbwsy6cB7uwqcLyzUGGVvAj7Dosqfmz6vaW24wSYTkWvjEJcKsP1sM2HT1SwHQZy8gtoKaVEMTnkej",
  "key19": "3oU14LDPH7aMM4Ryaui4ssEJVHqSTrSgCZdR1S7HZCTQAfgGqH4WwTGF9Wos88suHFQaHFgqBvRVwziWNLRx5VM4",
  "key20": "2fLtv1MgE3iYwxHwVuUtBDT328cxKdrWUDXC8P1GVmtLbSS5U7tTffYDyma6baYUujuCeser4La1hdoKsRp1bkkp",
  "key21": "5diQiFZMCnkvtV1kyBsuwz52vbG7fKNFy9t4eFUrcV7Jm8Sgv73HnkV6TSpzguvrmjh62ZGrDFD1ngR24hcKRj5H",
  "key22": "2JK1AEE55AzH6PeMH5j7VpusSadqAxfZvsxrebUumKmEMdzP8poVGHurSB4UkjzSe7ezoXfQUFsaK7cHjNfLFuQm",
  "key23": "zHLx8QAWP5XDWe8GL85wASHd6Xuo8g1cmQcxmPQL73wBshrtV6CQhBXvc5icH8mha6rkgC1cFahi9EFs7k5W17v",
  "key24": "5T391NcbHqQzyg6iTQ4W3JXphaUfjsaLRS5rcCN8nHCN3AS9EXPU8GAoLAWmomiuZJ19s2XPryi6TBTfuo4pWWuZ",
  "key25": "gT4pGUEUwytXge6K5iYizRJkgGrKq8eHnx7GNo6qXp8VMUMCAXv8Nn8VMjjj1CKVhwYbDjLMZqDr3kUmJEq5bG4",
  "key26": "2vRT8tgmnuaGQBHZbizo5Vk99aC261vebDgNQbgBs65eehCmWVUVbczdpC5Z3QU1GMGWWrMeSvEJqhyKiMyNxgLs",
  "key27": "5vSKbzDkWYGkGVKCHqUvM6uniLZdmz331vMjHJqk4vonnFcGiGs9MYUEnKMFLrVtfGJyTK5EwLZVZS8fjd7J33Hr",
  "key28": "5pUFAPJsUYu9DLVNoB9F4sS9Fa417jQtNMa2CJ7eVw2Vnqoqyhy2vsRoCU1FJaFtN82bd7x7VMCsqnvtJHroyrob",
  "key29": "29vc2BWa7w3RwrKzCZ1oxMtDJKShtgFa6PfZArVtFpxkja2A9w8e7dk3vdQHPaCQxqLiVjaRudNfoNzEmmLnUrYC",
  "key30": "TzHsAXo5GELLP6SNk748S3X862donzr9B13NipeiRRCXueHcv3ebVYY4HZTnAaqFba1pH7Z62siT2sCNt4NVMB2",
  "key31": "2uKjFs7JngaCDfpfN9aXVkSQ3LYgrT1TFp4qA56VQGuqAzM9rW14umNSr9RSKtELNpj2rkZKEKJGCprrbZcJNk3W",
  "key32": "2jiUjqoeK96JixScLxXjZNu5tHxuQvdCaW48jJw7gKwY1jTkpvBinWUq6w6kyuTc2b2PJWEG4qx2DHeYREKsKJ4Y"
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
