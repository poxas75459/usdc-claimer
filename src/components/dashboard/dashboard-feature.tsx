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
    "2zcPSCVH7mhyNGnu9MtvszGLQu6YFU445R8LaxRQ5qtptguopybL9Q4tZ9DsXxMfh3chbNjs7P1YqreJfVEDKes4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ixUqjHsXJhMXU8KQ6Fw5K1ZgXct45Jtq1C1p7eFHPyKFFVvJ9B22Us6Aiw2g2YKsrWotH1RJi1w3DZvWb2sUBHf",
  "key1": "3rdLvXbcaaP1SatavothFa7AubsEwFe3GfAhHP5Nc8Uf5uihxh77AcGFyCH2yFrXv8NHMs5CfsQ5fQaiiBMwihtR",
  "key2": "2B7G9mCequny2ExMirTFTYF4QUsrDXrnQVpTaob3m2DMQrc4yQg5wC6RigZeqW1AUqe2WcgkE4v7vM8wrvbM3x4c",
  "key3": "3oWaRc7bYGLctUr9mGoFjUoccRY8BnWJmnVyBh32627uDeC3bGoURKHSuHjCm18uDN3rq6AjC19K4Pmq9WTkPqb5",
  "key4": "4QQStFsiSsGeFwtz5PS2mhBechpiB2SNc9h1WjY9aeU6EPUATox4VuELaZsF99JgQGWvW5de2uiXgQVVuDYzFKKP",
  "key5": "4YSQQwF2aKYB4xPuYyhYBaFeqkzMnk1K58F98io2strsymj2uUZqAxkCvrbMy3hiqRagEyVo91QcdfCJNPYBJgpJ",
  "key6": "2jRc1VZs5uygxLmyXcTqNz56HuPA85N5CXT7ExigZAuZ4tcGTXSBJPFXcHPPNxHvf8NErRVhrzaf3euiPTP3UpGh",
  "key7": "3J3XK5dBrgjGqXDYkDfV5RGc8ankDcdh7sfkbKveAf4Yn7Auc3zWjnMoCkXwU9C4A7Pqa6FvhBC5gwRKp6dNwgYw",
  "key8": "4f2HtdMzUJ4VqJykjUDGpsSG7fHDeDBvUiFSuKRbBgWXiLtZ94fNpRRqwEAPSMcXdkgKzettzqjyxCCnDsUWuZMD",
  "key9": "5f5DBoHcTgHPNfbzYekNp5PKfGFZfR9ftr3yj18Znb5YxLkwnkg146uo82SzBt1niaNn2cfzqnS9yDak7dAmfuHb",
  "key10": "44rF3VXGRyqXEccsTHfCx32HQybL8TbdiSvbdPateZuYB47hiJXphbniMCsYu9HL94tD71MDcoRm2yfXUyzpecnH",
  "key11": "ZcRYAcmAK6bnWwVWMXu3vxgyvFasQ58Sbah2DKmdcpd3Fni1hu1iajPap7eLa5vHafUpuufemqf12gLNbqSR9i7",
  "key12": "28kDoyzZfrT6nmtRiW83LSDToXPqFzR8U2DXYQabq1EiVTvZyc4K7QghC8Rfe5F4bYYj6K5ycXiWEMEuGJPgmAjN",
  "key13": "2r7Y2nY1toGBHQunwRXXa2FiPdEPzN7gPwzZs2suzGxD2h4fAWjwU32DMsB4ZmGmGGwRtPu5nt2n23vz1BPHj8k6",
  "key14": "6P6jBcdn9otEhBATSz6XucLjJPu69JsKRZT3ZN6voGso6hEPT5QCxzzeHR2X494LVSTp37Yn23wkWYCvCVVJDkK",
  "key15": "4wRxFMrrzdEPK9q2sxL1AVUhzHmStZP5KnVvU2CF1UbUb4cHrgiwFkQGJEWrt8BCHmmF5i4hykX4BK5QQhXe4275",
  "key16": "419TEodj54XJcFAozGW2hWGkgmrA33CzGnZ1iNWQdXjZmPaQYXwKPukUyYYPGbpV54T6DMAnsetGMZrnhsw9aJdT",
  "key17": "267HjRfNn9SNuDNCCGo1oJhv7jpcQg3PyzN8ZQ6T2XSuABy6uwZk7CS7UpprCSitaxqFouuo3SpYK8J7JNtaaSLP",
  "key18": "67gbNaFYhZXqQ2Rjuw7qzpqxfBFnKK1nXgHCP2h2vy7tourugwPXgadH28Wntf6vuBwExR4usrhkGnzy38VcFLWB",
  "key19": "bzqgj3mETS9swwLCJDhDijza4oehwuT3FpeUb9QBWwk94wwNSYHNbXq1D41JjHdfdYNKG4cRQDTrTyYZtzJ2pAE",
  "key20": "3Ttvg6oNtYNyxBYaCC8zG7UmQs7R5taoo6eLGArrVmbftL2S93xP8DWGvW382ai8Sv2tk3sta8WZUWTbEtUemNj5",
  "key21": "4mbTW9NXQMJufKd6Yscq68aq3pN3SRkfgq7xGqECuuqyJXDvkKCRqUyyeGWboPts3gky4ncdjoNBDgW8dXwnYCsC",
  "key22": "2UjSsyZtmdBvqYhuqz6S6AkY4EsMp9ACm3dzTQwecF7Au8k5gdmCzrR9GXhEmCC8nJrrLUAstdYZFUbAyuGANgnu",
  "key23": "42DygBiD7nC2ft8bssmpQr6tpJiRrJF7TXB9cFNnWpEspGAmgXJjsZ3WAdLGppAM7R2DD5UbS9BucpxVajpoz9S8",
  "key24": "3hnrQCWEJtPUm2i8jiYxNHMDpJ2BqeGKdjpiaT83EFwUzwWS1NSeBLqKbgJL6nBH4LtSmA6Kq34sxqyj9gk5wJo9"
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
