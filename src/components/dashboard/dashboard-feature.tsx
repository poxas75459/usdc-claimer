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
    "5gW3nkqrHtQkLHAjRDeFQJvUwwdKDD5wBqApRNEb39WuHq3gy7CjgqmEHoX4k29SdsmToaU1doo26VYzzb479Esh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cH3dnMsqEeTp38LCNkVvCTaGKWRwd5sytYku3mSdWHxidq6vVgUqydb782dq9niPwRxKzTmaQ6oBWX4LLDS8MBb",
  "key1": "UvsT85CBYu4Cno83jsVsYzczXrgoM1hgAPwXrRtNianvGgANBYb7SVEHYmUrD2AMqFrMiBCfyEhbne5cm1okmsZ",
  "key2": "217abDrPX7ZdWEtjwbWGvPxpf2sziMK2GJiUB4jvHfaeMnFqwWUvpiEHV8R24QdTeSNEFAcwGgaQNUALuzyRHnPf",
  "key3": "4nXjo4P6iRjNWaTdDrEExA3FUmMgiebwJ67V2ee1fYzrCDB2HMJegT2pfrqCUhdbiqni1DwT8WwWzFoK8B34mFPc",
  "key4": "5gDF5zQJTbqTpEGE8Q6pBHZnXSBTB2gtTZi7R62RKxCZ5XdaayAVeGejDvV8bTCbj4Ux6vJc7TWgf7scdQqWrycS",
  "key5": "2dJ29AzoTHVe2ZjH3e8uyeT494q2v4nktgEZHqXzccPFHsXE5g5R6BtsfNKLfm9Jc1k7HdavVtqAjdMgaikpSw7g",
  "key6": "5yc5BGKhdeAf4r95sGgDLw6F25vDyFja44GEwFF25MMeoBuPqoBx5MefNUBGoE4tHxsP9TNq56dj8WmN2HYE11Eu",
  "key7": "55XYvWreDa6sFw4zFnLx15iAxi74pe474wYatpUXXANunmUpvVQ9Fj1q2XWwR5K4qZkLMWaZ6fujR7DdcAp9Axth",
  "key8": "48WPamZiRmj2rXbuc7ZgJ7kVg76Ag8rvY2M6yXpHUwwbW1A5oWFeGbPaaXWmx4xdWS16jPYdMXcoWWzPCVPdyUZg",
  "key9": "5rMXBpj1eiMf8GbYostbZp2fg7RTznv5Jf88tPGsWiZ5pkBVwmksMXNgLDgs8kChHVRuYb86Mzkhpbc3QehDv9Nr",
  "key10": "5o1tWQ9cXU73kR1JBnKj43AMz94oUDZPJnfyp1KmkNJhb7oR6LWBcz77DmfLFrAeJUVTqUoFH4bEQTFNLqz2PVwN",
  "key11": "3ZbDnoWEXiBc4n5RKHCF9iG38HpxbkktXf3Rgc4XKGFLgM8veGy87zwdE5Nrf73CKfBKk61z1UGxYcwfsUW7j72V",
  "key12": "2v2XYgv5TbkyogPWFmhCvqkUG5F9heBE6mkYp6NHP48bA6aKegj1Q3vhc9MmErPsU1cjX31M8Mjt2BhznkH5A3SZ",
  "key13": "mBq7EstsZeS3FwDXPAQxR3KMxVoBSRUw1HjBfyWHUmxqUVTybfeLkwvqSuE9o6JGHQfAsJAKAzV5GRdVi8JeU3p",
  "key14": "CGP3nb93VwJjDn686MRS4EwC3EiZPbsPpr8Q1jwh7naUNDRHvGJU3uqT7qVVQmqdmx9HdzKC6qwYAtDZZhDqgQM",
  "key15": "yRmUFg1SQwbUPC5xQgRmnKkm9wvac3ajUUeBJR8rtgEKvLQJikYfzaWRHqogsSphvQUQb7Y3BAcZFk4xN6Db6iF",
  "key16": "3BKiJUBpUXYfMaW3yL7DYacf6X66hUq7SrjkiqFpq6he2kS2z2q4jFs84u6L4WUGMPWEZbX73p4rThFgesaCtvQr",
  "key17": "53LaGkv2dQCjhdMd9ap9NruSkV7mSuujZxBXXPenGgkcsegLAo7J4EmrsPRtwB5FBy8edrQeNKfXqcuqQcNNwN3z",
  "key18": "5u8MgCBkbzfYrss9CbnxvP2L7g7bid49MmXnSdcqLC47eZJq69j4LpPGgJAGKn6VmgrZztBojgQqYv2r1a5XpaAh",
  "key19": "xPmfCmVGbzJHeX2eGdr2xoRwJtYGGkUWakH6zG5pDb88UANo5bxXeACxdCwaa93bPG4Ei5hfvUH3RMAwKAQG6qF",
  "key20": "2b8skVphxcUzmK3YRtjr6sJrqQvWx1aEV73QCzHMQkDi1SMnAqnmHCbfv9VhJtyE8YycHMN4dhsfPCANudftzAKL",
  "key21": "211NQAuGraCeQ17TR1GK1PVvtvuqJwV1jsQvQ8KTgugPL8d4yXyfUYqobiC4DufcZUE3tzuFisCLXmTGAnqv61pv",
  "key22": "2kTno7DJDYSVoUWd7rthyTUmBEicnr9hheTxaSuPA6FrczRGbot31eupBX2Lev4gTGPC3A2ukvwX2YYjVEQTqVWU",
  "key23": "3RUDY5iydXswPr75e18ygZi42uKb5TUTjEX1HcxMBtXa9etQbFT3gAjniJ4EzqQ4ts8LGa3ZgEkEUNV21G1vq92n",
  "key24": "3AiWJwHVsErMTxbBtmJrSRrn4VUtnP6b3j4eGQu2VFudLsroAXc5n9npcX9gQYw9jaksHiCYadVJYjLpEPdd8JeM",
  "key25": "4H7tx3yroHtRv63i8mMk7yxMAnTidyc93q3kYswFktg7ivq4i4GQA7Ndx5ABovLB5w2XzsnfpZ5S1WAWrFFcTvRp",
  "key26": "5Ema5BK1JGizpNZ89NTfj2CKMxTEVZKSuYvTxn8s6TErvTznrVJzytZcNb7k65m67ePnmN8f4Vh3y3HxuMY4xWqH",
  "key27": "5ws6L3q8yuR4btbYvU4FfAZq7BjHdtmbnDacSAgQ152NyjLHBfQT43k4KgYBivbQYCA87ypjWazkKT7r5aVd6u34",
  "key28": "445aACy3YQAX3nii6haUK9v3yTxVDKV4ekkk9FXx4UDpABTLn9FJPsUih6uuBJdkCPDruMSoC94YVLK4UqVYBUZn",
  "key29": "2vpSySmhVLTQpES5JmwjpvFB2Pg4DhUgiukbm18GvP2F6ZRM8wXvohJciuUGSKdM7pE5GaNjSL6UuVzhamw1ML7Z",
  "key30": "3njM8CS6MbBYbaWuvDiENi2eKafbmZFXfU3fM2PgpH99rqSQqe3QgR3XvVR2RczCS8FAY5zCRGxkGXaL3BGso2Sd",
  "key31": "4wkwXN3jtG2QhHNx8ZhWTzi8eUuzKdPLUQWtLYB8jCWCm5ZxFve3mQVhF68q7G71e5EJbERQm6NNFqnfyPyP82zU",
  "key32": "EwsghbZCaDVx6VRSehdzPqmF5CKimrCTVvJQhZkgEPymu71gYisXtwSv7e35HgnvUmwbPMqzbZcaAHGMtF8jKsZ",
  "key33": "4zRYDB4wq3nFsaDEBwrj3svDxtyEhGfxXB97kV59r8eRA19pXpCHfPduWB9nDd1Hdnf4RNHkZKn5bgUL9CGHtnHM",
  "key34": "47oEwXkMdvwxVDaJN52WHHK3fUo4Av9vToKytFP4vWxZqTFQMCGQdewcZ1CDWEvm62rrLCc4KG1TDfufXh2pNP3j",
  "key35": "mEzjaE7YjmowU4C8uhu34JtvgCXJNhGPz29sxPrEvKcsim1wVbdCF6kRxMzbqEhocsitmfK52BAeajxNKHrzTLD",
  "key36": "4p5U7BHPCPGvKdVY7cco5E39xcNoT1617cvTwgoPXaQ3xxE8QVuLAvWBupNYkyzEFkQNfu35yGUbt7JZE2NWx8a5",
  "key37": "2fEhQfC4Pd8yPZGX7X9UfZ8q81e1PVWzGNXhEzU1qX68wHE5rbGwraDo7NPk69a8tHE5kn1VpdE9MjoUGFsyZWgG",
  "key38": "5NrQphvTW9X4ACKwL1t56fbyK3YK68zkfGhYszzVasW1onJbtCx8X8fpxQkffJJwEZJQXmb9e1sgLB1PMGvhQfyH",
  "key39": "3NcyDMEeCaVy5iLwxNCTomA4pLRmmyspfbpQPPws6VMSVByqPGUBehFavrQTiM2sYvYqRhDYReENwND6vXxzEWVy",
  "key40": "4zrA8wViUKVEJNPxPNtg1joFuJskgF2LEZmvQsEGERJmMma3qufHfrnm8cJsDKLF92UtNwbBFgbbeqNge9tuPX3J",
  "key41": "WNe8awLtPyzTdAwndVJaiMVj647A6XLb5XWD8aR1cZ6qV311DbC38qs16t1WqBCW8o8p4VUzeESED21Wa9maS83",
  "key42": "4y3SgYZ3Ky3aXgvNpSQBBnTnvWXeDQU3YtzhcKvCqH2wQmAvPJNhreaK9jyZ642Wt6CA3zknYESseSFwz6KysSuZ",
  "key43": "hEodeCyYTWAreoEWEocLTY17BHjavpm4P3YMhSid63e7shGfB3tJzW3MPrPbKtv1cUPF26eSCic7xqQhoU3HGMJ",
  "key44": "21d576pes63chG7iajD4DNsi7c6s166TiCQbDrL95X5mprBMaMvNp15gi9p8FBLPXrP8XUh8ZcSJth6bkggXEKoJ",
  "key45": "4FdzWMxpxur2LBNaLZnSauiBDdvDF1X6GVcBvrfkLS7CadF56Wn2YabiNoEfa6xrnkTWnJQoUMQTcPrAa5937T5J",
  "key46": "5WWYSdarUcjU635rHawgVnBCx6FrB9j2VX2w3US9QCKZQBffRYSXedMgXmcyhwHxFdMiF1jPAeGtSVu6SxQZFEcT"
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
