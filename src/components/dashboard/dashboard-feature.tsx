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
    "3QrYhRz9mzma4ZrPYUWH9Mo6o6oHFpvDAN9cAo146aMWipR5bpnBi4rj5EnWuJhG2XugNVoRzX8qibgcJJsggaNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GU3iHtgqRS2PnuT97shuZPBSbqpj2acXG5VjwyKrmPsrLBNAgbR51t6PBoBcuH4ZzAMfqvTHCtB4pcp6o5C5PBx",
  "key1": "66xPspPzP23UHa3VDMwzUds4q1qFWap6eiejTCBB8qfopb4UBBcDiGSKtH53U9CykVtXDTriAvtKfFEtD3MxMcDZ",
  "key2": "3HWYb4mspcZG1dXLCRVQkFYUNVFvhYZwSC6J3eHPu61VRiBuPbpZgW8QkPp1S97SYnvmfd86nJBEJZYhVvFRGuJa",
  "key3": "4oxAywqKMpazQm5GB96WepBk8nNbdhj13nzmWWhgGSi9t7sQH2cSwtVNANWfaNBjYXT39Ydx4NAk6NS6E9Z6SbqR",
  "key4": "56wuDgVE7NmkGYDMPXwiGhS6CT93M7hWpY7Hd3udLT8CVd1zGUYLRDjMhwYbqKfbcCkFmdPTFhFZeyfuud59khND",
  "key5": "5K2D9qRFx8UTLa7zRLQo3PWdxARebP8ZbtKbtmAWqx4AJ6rqYKq3fUey4rpi5TBEEFo9eiuukCgbbiHu9vzxQqLx",
  "key6": "CAYHSiV6p8q4zcRb9zBUz1auj8WdjZYeHwBXvaSKQaeoURVPfvQB6ibzegQUTuNxD4dzZmzCbPk1koBV4mdaz37",
  "key7": "298oKDuqqzFLyDhYnGWyEkFwmFGhASScorK5ZeT24nm7XJCwuFVVKS8PfytrxcihLBM4fjKrTfHawYbZ9ZyNXQRJ",
  "key8": "WCHqfB5zfyrHAXJ8StSZBdhjLmT4svD6dwYNcy5qce8Bf97PWhftX5ywxSJ4yP8F5eMqUeaieyHoFwafa68ABXy",
  "key9": "62sM1DLQBtcEd7wx5uk7cfc2TU7x1YfE6e5jBVv2ZijnWNa255DkPuccMd6h5vbKmdaKaZ7dfQzvJMFZfuwWoBCC",
  "key10": "4CSh1NJH7JEPFvS3C3tQskiTU3HGznp7kN68nqDNwRB9EKkC7YWa81W9nzN63Kr5jkuwNHwXw6B4rRkxgYZ7ekni",
  "key11": "3XB9UuXwLmqSugREeaNeeYMTyrHkT8iB3EUJY7jhLW2NuSbyyGQKm9uCCuxqVbCKxhRLpoXUd41JMzUqzDKVERQD",
  "key12": "569J9bveEp1t4tj8rpHr9jZvCc4TveJ5Um84c1xuM2HcHgKP1fGVQRBrsE9dDMH7FZ7HqDfX316QNFgE4bDWywRh",
  "key13": "5KWc4QDu4vrUDvJCYfQESYyuFBhY9adkKsfDMrcT8ZAPMJ18t1D69hh262ZV7Q1zedA2bCeAoBuw5ayVTLpRQ3BE",
  "key14": "4trPNw3E8sv9zRoXA5cVZhreQfaEcbpCpi4bh2cFsBrj5YXCdVCsAavHGLeP2xcM4cbuYTRFZni651dWXHdj6LWH",
  "key15": "GX6pirkDCRcU5KMH6J6ScbB58xi78e2AVyH8WgutqkPayAUtjGYbdBnB8Q2TNzYm8RmxyCBSgfR6xQmAecgQfqM",
  "key16": "3XakpMWkfuYKX34TZ4GEw1rZAoTXuV2M2Jx38Hd9MxS9LGSySzjife7TyLvRT1TDLffd3gKhgiN3tU1i77TPiXLU",
  "key17": "7GgbZy37Ut9iVFm1gn6MzFPVofwBkEuMaew4ntDWCEZQQWGEM6NvRQECP4ecSHgWtaeVURG9ztkCrqEDGa8WEyT",
  "key18": "upGpLkhMh1ZYSg7n6PTFKwx4abHs4FgE1kZwA8jLu7MNhLUctWeZPKntfy5GiATjBHUMe1rRcXvRuJe6docxkZo",
  "key19": "e7cD8iUW2qJAHAKdD2bB2MyLa3UQzTsd25L9sLiwrUmEaXaojUes5qVuouVTZ6DfZF24LAt6YNtXPzo1e2EsGnn",
  "key20": "439p5aU99Gw7bZqFxnBAYuRY3H4tupWXjdKyFnj78yWWgZPKHN1iPna4nzztP1JtsReUMRUEARDix4i6GJDreHpy",
  "key21": "2oWeodKcGWNriDEEWqWfJxyuKX9DwKgE7CpwnerLBb3LVnPyCjDwnCtGj8z8eBDU9TGnMjffLW36tRv6Dx9AhYgV",
  "key22": "BFQJbtq2gLocmPuYhGAeNQGBv1tC9hWHwwVx8eyfYMj2c4NUXFemFvRrgJ9FK3Ty3KzzQbnagWsMvM98RNCmKgd",
  "key23": "MyGyTiA94wgJe1mVsiL4HCNjmzrregdeYrQFFm1WcXHwfdfmzFhC38JRaT5k62wQLqp8v6CihqndQwp8sxX5yws",
  "key24": "2WDgGxqHd8meTY63uzH7ScqVswQTpCqvuBGvQm1aqviB84Z2HaCKYicmW58Wo7UiWZr4zbZNdGiTUMmhdk91tg81",
  "key25": "2FxMGW4emXk5CXeJR4jqn7jYFescr5777qS6xCNsvP7uATp2VhVWdGdaEFiAHp71KLYYm3jnt762woPD5GTT5D9Y",
  "key26": "2n5QDQVm2ozQqwrYLvGKLDwq29ZuFGJ1NPtc4qTQnzGNX1eq1LjaWMJ2SG2LybuwESUc955FGMd7Ng2yZdVje9je",
  "key27": "5RwvM4RJPwpN8yaXQBRqdxXbouBG5opEEAHLFiNfHZQD7ZVESJP2xzbnebm17XAzUpG7FwppQG9WyB1gxLZqqBij",
  "key28": "FsJT6Djgg1SzWHfEJyttFetmyNV3MLydUBnG96QSjUKn5NkDDQCkT2cZBQzt4xPd5uyQd2SZyDvu1ofBPHLv5iA",
  "key29": "34y9N38qxkvGnS5kw46eQZSyeV2Ev2cTqgVWLhUcQibReCREeQbJd4im4VK87SpehAXBYKabpv9Z9STX1kTtKR2n",
  "key30": "36nwynBPcryUP14QbXNnsJSGQ33TyQtWqzNQabREPohD3MeLQ81xowKbqT2RVyupQCjcXgogobW535CHBPrmWYG7",
  "key31": "3wvxfgiXhmETEQXBtRUJfKLLz1um2gMTYXt96i5rYfVMccCXMCHXtM53odL2qRNNwdTFiRMDUGUt8rzjefP8bDXS",
  "key32": "NQrMdwYcbyBXtFN79Qek9aPtwWpWoFpy8AtcT1xomqNmci3zUYs72EpxK1bVE4tGWxNxvc9AZpzNz8Py6i5D8Yb",
  "key33": "4R8KcuVXt7sr9tkvgVtWqorQMeucYXxJmB8eJWUKTqZXmZsmAAv9RkZvPj35Yrmqjiea5o41Wcp3G2d44DadBGuH",
  "key34": "3H3keLQHY4weZhrPrP1qxNwzThPTgNzHFpEBWXpcdbwmAvrab5RpunnQVMnmPWg2XTzWscfisdFDqwk8SbUmeNTc",
  "key35": "3t52ZHnKGapqDqyTumAuxcEbDASMkhiUFDbEGxygnZdbkLR8o3Lh5LrRzNBkzqP789pi48sJ8vhgBdxFfsXoeHWU",
  "key36": "35F5VNGUr6tq99PjnpZCkjHxXC5BvQUFz4FpwJxFi5RFx7PKk2XoZTSM6f8YnRXS1GaYHCxyZUZL7Ahx3d5zEV9t",
  "key37": "4jNBfwxWUXugyjNwmtVpTvB9RdYCat9XNRydqAcJiwsxEfKStuRGtt5dWckZmvafoxbZuYNfjNGZxRqV7og7NRcf",
  "key38": "NHGxtFZELY4bcgWGqqSAnqi1g8fiYqW9WXEv1oyfueFFYE4HPBFfjEiB6HqGRT2kVEf73m12BLrUGK1kwbQMM41",
  "key39": "3jkfhTz2ynhKJyJFQ7aYhSsxPEEAX3WUCLnEVusUogpG561BdnDYDv575CNzAobZ8obc6xFcovTFhH9RcK5mqUGc",
  "key40": "5kteEL9BCgpEWbMcwSKxZZfWwaY4PBN8N8EPNbo7QdQVyA1ER5vuNFk1JTMEDbHWPon2wM4eULzKpzU5p6kkU2vp",
  "key41": "4LmaTcS4EV9e1ExVYXxymDVoF8g4mrtb5KrSeqr473C3SJ3xUe6NBLbPp7DiRwHg4YuGeTwHJiPgZTWVS1mknFUz",
  "key42": "5e3rudyedoxdxmFVevZGgvfgJUUwcqN4B4YQKcizfhiJdNrWmrktfp2JjsYcrEBQovMVz4ox2MLoQMyMuSiVhrio",
  "key43": "3JVPNHNNxZCikDue92EVe8GmdHoMbSQdTVnu9x4RhqbmUj6YtNgQxA7Tkc9g3r8McaBCwqAxttet56yy4ekmGcfW"
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
