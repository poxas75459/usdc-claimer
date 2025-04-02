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
    "38bD6gjpedRPSQkpxpN8FbPybw4xa48HPjcKcsrnt3VTDE5cTVjLnvvxTPzSaV2XH5mk7XzNrb1xZCzwUyef2zf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bB8ASjgw2ZsJb94ZAhsrw7NUR1pe7jmabqkUkAR6KrMSsbzKHQ2bv8xYxVraVCbbaKEpvB9be8uBuLi3FPkHi52",
  "key1": "5duu5KzusBzSotEt6cGr1qtD2nE6VWcL4eQLqju8Md8QRuPRpkf8id4BHsRe4Ux5N68NWtXkMQmF3cBzGMKh3Eei",
  "key2": "CmpESRzreBnDJ9uE8F1UqMe6jDzns6MboMFA1DU5tAqkDVzh5weY5vjLgRCUfWR9pgT1eQhPYTyJWKdzDzcmYqu",
  "key3": "5SAyDrx4xVfJ2MFskFDdqx6NsYqVSEx2QTXeADftKwe4FXLrU1nL2hoe1CVYi4rSGjQgHoTwNAT8TtMnq7UeN92H",
  "key4": "3EVQdmcp1Pz2eN2yf3ZHws8AyjoA5EocW2DdYNEA8WSbv38oWDvjRiAribcG6A7mk8jVkqVUzRCXWTfsUWotpmY3",
  "key5": "tqSn1UEx2uqFZJPDJzXAfmU31MbvHHefAHCnauTkiqayBonQKGcXZFzmhZ1pnpj1cExBxjiWpAJc6iAcaZVzuMx",
  "key6": "3cJeotReMZJzsMdnxBCHNpArbi2Z9DFHr1zG9UvYd3jd1ijateXZcaMRDAVYwcEK6EAQd2tQ9Vv7xRZxRQT9WuZY",
  "key7": "5UWeUJiLo72A9JUw3CgGsLR1ojn1qz3wjGvb7M1t34Q17EADr3PicMNiKR8NBPw599EdoqJy7DbtgiGH46VYRAfA",
  "key8": "udTdthfFc4Nk11gMEpggZ6HhmomR7VNQMCDdHssoh5YYwnpNFP6nap8PCaznZsgwGFQrsxXrdGnzuErqiwj3HNM",
  "key9": "4dsYGc6mGeodThtsbnJdxKB6n4nCbVgrzo8xNnasMsNSFza7GuxXzRE9dQCh6jUMfdE46ak1MMTLiPB6J5KbpND7",
  "key10": "4cVZY7BxqpUKa7HAWGfrbWaPvZv13zTH7tksATgHpFQ1jQEAxphEcKWz8pNfzYrFydoCQsXm2YT1mUWwnjMcvQrz",
  "key11": "3kNN127rMiFHdA5JQBo5Qk1BKACNFrwxwcop9ZfF26LDuWYU1WEYuez5JgZzzk3BGRqu84q5XsqQzgzSC5dMutak",
  "key12": "B8e2wYXA1J2Mo3Crt5fiHRMHbvgNuyC1MJoHnrMZfYguEuZpZcnKRR6ZueDGagdkPdATWRBZdXjU2MfzNaYiY9V",
  "key13": "UWnRxXDJKdW1kt6SEScua4EJvW1pcoLpDAVycnAAU52XrrFxjTMLwMULB2yJkveuCLbMG1CbkboM3x4GTovjTeA",
  "key14": "4FGX9A4GhwFtG865sXDoLi28gmdAhYF286c9gRv7x3y1L59Smv3oK11oVpqp4BTt8peNeCsmt5ScPs2zotj1PcaU",
  "key15": "cvtKVmufqBsdDVLw9TUMWZp4JWKBHKxShEWNwbQogXyUeFvicUWxCaBugNYKUFLwjSrfimUozEinQ27TfKxmL6k",
  "key16": "4qNd2nkMQTQaJ2C7vsgoJqAaaj3S1W8CEMs1Ms5mgKoML7CHLFE7Yaa5nmxCLtCW9MfR4iowXXR9Q398QE6RwwG6",
  "key17": "33vpqsTMtgJfcLGaY3KujM1uQVUjrBg3G9oZxa2db7NAx2khR6T98jHT2bUuGVx6kRDZYnQHdCVBQqiZapPkyRu5",
  "key18": "3Us5fpRHN6fL7qh1JBZHyEWaniga3qVrPXi2LfRq7f7LDDt61EoZEt7wYT4eFK5twqzRKshKxm4RSXWJu15mt51b",
  "key19": "52YAnPyjTkF1GaWQXAF1nrCQUx7ks4xKMV88vT9W8QS1Eih9jxTLBJDR39UwXShdVBxPVb8gYqo3HpygQ4pFurTs",
  "key20": "22X9a8njP39AYLuD97yavSnjj22th9mPvfP6jHDJuXHn9D5FTfAK8Z6iVg4Eia9PFipDnfNyT9E6AzLprgB73Ud2",
  "key21": "eVSppr9J6zckm87rqKnFdFps2MEhjh5DUCQxPmZDf5qq4y6TXdJSK3q5Y2opQUi7zSr75ndPv9dpf5ahRurhTj9",
  "key22": "5ZQBBUvfHE5rz9zuaAhNrz8PyegKfXYDLb8KDD3cUuP8XQioCTKYnSBRjujxzBqjJvEyFx5xCH4x8e9EjHXvRhs5",
  "key23": "viCR8cmn8Dwi2qTHTymfDLE752Q56E7uz9X89fZkedzxYFpDRAcS6SrRwVqquZLmdXTJ8GSAZDqc84ktvsH1XfT",
  "key24": "5oroZNpzAt5p2sYnXAah14gsfF1rzDdmyiY7217HyMyznQf1wi3kuBeJrX1azQ2GprttkfiRwXyvPWAWkbFbGGte",
  "key25": "2C1KzrHGYyHievJjLCWnrTn2hQGxs6h2Pczv4qsmz8qV5czw4VyNrYiazDGZpx6LBE1heWk1CnLTyMzrm8JwjXiE",
  "key26": "649Xw4eMZhfmWoVfh5brSsoWcR9dhR4KHEcBC81zbBJ24frEUj9T3yHKY13Tr7VGTxyY7FQFctkR3b8XC2vzvqYU",
  "key27": "2qGCmjspothUb3wV3KFNvuxUpYHeWq8DSYcdcnTw5Wp8gYgAzd4hJEwKQrigyQqit7UTJC2i1AgWuLkHemGrDwuZ",
  "key28": "eUwWyJ9CbZBDq7rekFsKJUpCEihJeQEx9BnWhxrZmA87qq7gfPJuivspq3YiMuoY9K3iBKX58MHpYWRQ71avVBY",
  "key29": "2yQa4ZJjZ38RMezgGYXVAu194wtiR1dzD69Nh4LcJtYi1Y99FLmAUWGr15fbkdtW4SxTDutPQtoCGtViXGMALFMD",
  "key30": "4nfsTCJcjvk4tx555R2tDN6jsGvYFTuzPRWZC2TvkMYSEYBsfLkzAgDnmAca866oPGSbbwvYks4MYgtUBUpF1zyY",
  "key31": "2nSFQhZSdHDDd7FuDs1yQMMJwinJmys7NhasBPnSk7FV1KL7KnPZq9cFTPsDss19NTd8kAvZJdEfYqkS2NhwbAwX",
  "key32": "5isA8wHPNegCvvqx1QvKRBGi64r2Pj7Y5h2iWkXZEDvMuM34GshftNYsdw2gEoG8M69XtB4jmdxExnfoNpTce79s",
  "key33": "2fp5isTiYTiJQoCp6RzgBDPrcNxNuGKT43p1ynmoKxawKLn8kZVuYMDbUPqhRdHArXuJefTBf87K7t8zQLTwa6tZ",
  "key34": "2wH13JFgLMzcU38LGQr36ViKPXJiU4DwDUwA3ctsxLK37nZpPkc2KsXxntdsT9WbutQ1crzmz8yro5yMQGQPNV8r",
  "key35": "3ac5YbFsx1pLNAaPRCQLQmWqCcGR39ixaFdDfatF8nc5ER95QWzt3QJqtBbsgwqdkB8qwdLSWBqGcVQynh1QKV2u",
  "key36": "3M9kEZokuXvMV73KkQJvaTz889hfYGawEZH5RWU8x7r3gvBYEXj81tpJSuuRg5wW4nGWDHTD1EgDU6tQRxnwTYXt",
  "key37": "3hrQXTu5KhfMZDtygopBGb77CPYPiYczos8J5fcVc9zfvnjei84aYy7vEZ6H7TcCQhyRAic1rXA7oTb5QeZagLNS",
  "key38": "3HMea1J7RrroxRoECosdPaCXR4F2o5fzAKGBTrZ4Hn9UCGivptEyLCKWsGfpnuWXnBayuDuQenYUXsL92dSSKzUW"
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
