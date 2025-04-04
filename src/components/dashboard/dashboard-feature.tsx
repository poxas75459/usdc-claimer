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
    "5ob7Rz3QiNhnnrMiZMiyNoRxbyHx8jcU3u9hEkcuMsEthGK8UcJDYyRRDYuqR8zMyLigvdLiZopVkyypAMyzPeFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xmvhUaaWNTrz1Gmx2p2EDrcwqm1Cx7PPaowVwFyU733Nc9BzykkrpWFYQwhnaFvPgRAfA2Cy9LCqzZaqK13tHEu",
  "key1": "45aZ9WJVobPHjzx9t5pPrPYQjJzkn2DKXPVSup2uDgGgn92YrpppzZupJQAPzXChUEUdWdcvhxjmasv47AyxYHEx",
  "key2": "2MuLSc1ijGkUPKQVqmW5h3zsC64gt8Qn7hz8roHVQveLMYfiBYEuikeStxKfTisoazcGZLRYRpDTsr2L21rZJYMm",
  "key3": "4UDUdyfrYjQhxCkScboUdm2HSgi5i5KVXGsb4AtpCd6JsDzNGwxLtG7dkq5y8qEYw12gCgu3PRxWhEwtQCDErdXS",
  "key4": "iM9LzJMhRQcM1PCr6By2dc79FvgidqQLxUeRPS5gUWJpN3Lz4wwVrTcW5HuNx5mnTqNszk8oRrz3A1yDLGsEU45",
  "key5": "585DtxkAfBVgc6N4PSwKQ1RTKL9ABYQ73ySCa5Q7FMD6XHNtirbhX7dBkRSb1Erxq2UaeM7n1DpGFhyZ4hFURuQi",
  "key6": "5fqk1Ttf1an1rFrG5uhgmBoJ6WoDW9wMx1U29DeaAD3LwCV9imyH1vhmJ6iumKbrH3ndBpAew8AFeymEaHrbtCBS",
  "key7": "5X9ufwsTv6QAJJ8y8ZtKZwULZNKzombne3r8sygwBg7SfvAcPXx6nQ7abkYCWgzQWZzZsAWiT7cNVkNEZ3b6YsrF",
  "key8": "oLgWSPyS9dmSAVnMGTtsZQGnozNmYutLcEpZSbYnLnWUWTrEWiXn3fdmZ1JXsDBcDRNg8MxQ9TqFe2NDmaVEJeJ",
  "key9": "3sQMzsA4AMhxSKGJwVo4UvE6UX5t9p4ykjGWnTKxor6M7qCx2wEYAj57Bz2rJfkZDSJ5XScnfvnN5DdHEu6auUrZ",
  "key10": "BYY5aq6afvysdQKphR3iqigDihbY32chjQk3YfuP7RYno7TAwi2WirGEbvnqZTkgrVbcr54vQdV8q2eDf14p1YE",
  "key11": "3QixJC5Nh5ozm56XMtDmv6BNHa4yEWW9aTHDr8GdAyvXqBSqTyV5fd8RPcTJBPTeb74PLhG2Tc6zci88xChPoKPD",
  "key12": "3qoud9MzZJkxFaDGBvgEMFA8zQASH6n9i5cjHj5bCKVH6TZvdoya43N2Hq1NEAke51h2TazpTy1UhKPehfjmd7Bz",
  "key13": "2md7qEd83y39Ai1NLtpx2Zj9SaWu9GRSqcJQGR945xKtPnogWPjpCrLVts4f9sABJFbyn8RAc6A9eyuVrRs65GhA",
  "key14": "2n95YFdyrZZkR7LwMiHRPwJven4kzmF5Hs1p81akMkiHJF1c4Hc8s1hnAgsd84UxkLEW78eNPQofyo5W3YffUQZt",
  "key15": "3tMvdxr89GsZuLJMhhnj9WpC6fJUoRCyH2kLKZBKg7F14dPANfuGzsq4obvNnWcgCNQTRfgZmif5UsraH3wvKAd8",
  "key16": "25UKuorY9Qye8sj6Sd2BiWovYCbsCJ5nuXpuaUetv5efkJwDmemTq2syC5Zn9NynWxQmVXnZ98RBWFUWW4aDA3Cw",
  "key17": "2A3gFViQytmZMcZvMwmQ9BrohDjVfgfPVR6aTaquRrAXR1nNyEzVoX1QmbCkQP6s3Zo5TTSFVYvhBq2qzFUiq8sC",
  "key18": "3ENYRyq9Qc8vpFUGLBic9Mi2qNkY99Rf6jHmGjL2e5QYGfaViudL7t4jWzgf7nVbjrhTNcPF8hfgzLcZXf1zvB1T",
  "key19": "2a4xQmRLbm2bp1AyD69UAvNs9RLUaeJC8y5uw5T89yvuPdK4WVA1dLRRNmK844JywerKETRGSME49Mw4Pw6VkrNx",
  "key20": "4eT5hQo22NgTyeoY1rszw1Xn2oXe2rCbAehyL5PrakvLrdRdnS2gXNFcmKrSVXHT2FJyhqidBMFpYr2ZsAbR542C",
  "key21": "AtaE14cFznr8UyeLcrDXu4tJZRcU9ma3qDnGaUh5oywzHsuH288x8n4JTgavzCkYEXGYewAMzGzwudASKzsCZAU",
  "key22": "ef3HRsqozdbys5DD51JUW47LjdGxXwmrbbtZaQi67kFs9bVDNC4c5fuDsb5QgfYzrw6YS9vZna38obqX7Z1ei2a",
  "key23": "29YjrkmRLoRFXHFnWspEjrahxY3sZa5KDQoZGayjBGNEM94izq4JUf9JiBBQQjmwzBmDvqG4nNQfck9nSEwKtdZN",
  "key24": "7pbp98bFvQFNbv7KZhoPZ5oG5ThiEXSY8onkqpSseTcgNmfBahDjrcF2NmEtJWumcxd2BMw4aYNmVrvMYt6g76K",
  "key25": "9EdGpJcMtx6hm1Z46CNP5u55WeKr5R1GuH3MoD2y2x4XMS4cYwG2gz4nFEdqupBYZkfRniC6yMFGPzXWDfzE3wq",
  "key26": "3ZziwqYqR3wTmXouuqJr4xBq8UxRHRgDpjLLH4Xy2Mh4gRp6h1r2b5C34A1by4qgwjZuK7z4Zkf5VVbW4TNyMLdf",
  "key27": "vzNJWvtFEjd8jEfbpBUfRbGW5z4P7N6yPYM8H3ritLBuEKiwKrRJUrq17pt4621i8HTVAUpNRWSfnkRFGxX4kkH",
  "key28": "5WPwbCqqu4rMQHDhPZ6oYa5YPxP8ptZwivzQwNJWJV2GeiU98fbjHuPxVPNWqo8tLHjuEwgP66zKMiL2cwcNepuo",
  "key29": "2YCGjPnMpqz57pzjXbX5x4hh6VNXzkPw2hMB4wceRAnqjD7mUyEGVRe99s56K9QiTBoTuFUt8dPuFCiBTWZc1Abc"
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
