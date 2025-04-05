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
    "4JiLqPN62vSN8u5Ko3daQB4wa2PBQFsgkZBMfTdxWgpukmfYBmJf2ac9kGYwDA2XRPBVxWLAas4cYWswP7xCt6uf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "315ikapieMrn3CSYqTR37XyXNLBdafZZU7HCwUHfsvEkk4nNwavgP46hWw5hF67YAYyWHgEeA8Pbv7oAULCCifWc",
  "key1": "3RkoG7JEu1hsAET1SfaZ1eFeiinJhu8xYrkuQZqDtNp7M6UpAhdEq4vSQzAWj88mLKiJUPpAbNVFcresxchFNBus",
  "key2": "2hay3WHpB5p8RwFQfNaLwsVX7zpf7ViBMaJM3TekNApiKjTiBZL2UU47A3sPpPjVJ27LsUWK5EqTsBX4BEQCAEFV",
  "key3": "42XfRKnrdN65Bcf1Spw2ui9ZL5KghgSXbxoV9PvNBnPT82crvcLxh54wsPnm2pgCrqUyJE7rqTG5hGE1kBQVDQoD",
  "key4": "QRLmZcH95yPG54JWMMuAai5qU7uYTDH7zY5JfVCKVd6N3CHQzbj1d4ni8fmSPMJbR99DtqfRTWErbtVU486pJ34",
  "key5": "xZPR49ePDFDp6PhnkpCc5zC8oUnDzEefNeyDrGLwnHz1ES7MSnj2rV5ictfjd6WZLRxinTdA7XyKEA6iApZeYPW",
  "key6": "2bnG9PyQdajrQtm19bKEdnY3FkNsBULR8fYi3eTBdt3631SZfE11JFPxpvFgtN1UfcKbrN6qcvU2HsxBxGzZpdP8",
  "key7": "4kft3WPLgDsqNEVPn3REf18E5F4r3oYLnQQGutnd9fDvcij2Xqhx7zJf63ucpcnb7yrZrhuoBtKvC8hWJQD6VZJX",
  "key8": "B7bd7vyDWynPkEsjAcZo76ZjM3RBFV55nJDqqDpTcHnbj2s5D8ELw5EgqhVZcvSW5N4PYAp72QznLLDBbB75MQf",
  "key9": "2oTuQ2CATnYC518HSrDjHQN4JZPTHRRJ4CUBxLdVKV54ERyaRaZy7nup8fpBCfvxS1bwqzuBEhiiigNrudsNZStN",
  "key10": "557Sx88xtEaUkzbtAhLDeMvk75n6G4qJqj7uYhdQXWTd6KEpQJ3VKxywSLjSwP9cYhppsB7Bqqw9aAVyD8reP5Ke",
  "key11": "3X9VRA9YGnMjoZsy1vjworoefTwcBoLWu3CnwJtZHwcCfUpxQ7HMqqyF6CXWjhBuV1wrAEXngDBRtGefSgfTueMj",
  "key12": "515AcF4AMRnVpwYHw7ukpRMcXoahwoNCjWtxnXjZJxzPKtjVRP3xVZCAiWr9maiFF6fzdepXW3BvxdV8ZTdBsE5Q",
  "key13": "2C2cHFczZqX64Hy549zZyUFGXhAP2TLUqM5mweByGL5jNfDXgtYcshUqDRSWrjfdpDuKXaDFiJA9gbBdVgkGDNoD",
  "key14": "4DzqipTyMALr7rsmZwFsk9Bqxqcbg9DwfEMEa2ZuDx3gNBjKf74JUpS3ochTsZodWpmDu5yp9QNsh946EBBg9n2D",
  "key15": "39YwUwqYdc568RawU9djzefKr2yeQbgEpuYnSdveaspKn1MgFsCW3mz9cezkTDFa5UAypsSbb9J9dnRfEz8m7Zwd",
  "key16": "54WHrhLfNzrdHgkMWMGuqBGHYko69KFRnY2jYzv1KB2STNX6uo1oexiCNW9h5bNK4s8dMBQ9RQQBKwzL8UA1DrQT",
  "key17": "3P4SVhsBE3tZMkrGTenkbtpSX8KpjoBo4V3aFais2oLXGnw4HBij12DB5ceUdAyxwMKYoTmiCDQEMcQLyqh9JrCs",
  "key18": "4mcMuJnveDP2E1GmBL9wV2HiuASB3E5tv6nZ1z17uJHwcgpygztyKduFT6aNbzADwH26AD9bxrAQ3sKrCH6YKLBf",
  "key19": "5i9tRqA828cR9tL73acHcG6pbhxZtYmQakCvyk1d3iW6DKeEAcupwXLdtE5idbUw13KiNWe82RcHzNRXwpx5bYQ3",
  "key20": "4T3kfynUS6JGaboZ9CuC4Eg2L5MJRYdHpYY7ddXuTd5YBLbsc1D1FEMX7hNLrnP9EQDjuz7vphws3Ar2PZJmugkE",
  "key21": "2HwukgZ3mjXaY13F6tsPfuTJH72TbQ8QDmKaNnUBDbxDnd59nRajpiL3BwUnAANi2DgXYwYh7w7dFhuakuradQi4",
  "key22": "4MVfSvW8x9pP3swFC1nCTYNkDrZAVnAXvstewCWsDLfqkyZH245kiK1A4SP4gVBK7D125f24rtHsPGdbWCvxf1eg",
  "key23": "MzUsfPqSjH46x98QwqUieatdQxKu4SRqTVVgnm2GGxYRppcJ85cqnj7W7rftGCS6NttDzvMqHYHiDYss5nn1e1B",
  "key24": "5YsJZtnnpTufSzmmWQnHw3aEeR7P1H6HfmqeXsnSTyRKTkZq9vGj2M9DvZjo8XTmzc2PW2wWVKmW9567D6YgWXe3"
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
