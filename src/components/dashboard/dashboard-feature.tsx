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
    "28ibcHFccA3FWy5Pn5NLZ98qZEBVdDsWaSBRGYw9ty6x7EWvhwXvqZR7HWxRi8g8LYyQN6fac4Pf7pswTmhH1ZAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26npBWNNS1qkLpXwTMixgTG2JEAmKSzLCfWcqAMTtJCyk7t3MDZCE1ad1hHzm923WhEDuzBbVUSgHgqQmzcE4y6c",
  "key1": "5BFpJbFvSKowkSZnjtdo5KW5yU9HZuFWYTNkiXcHRiGheaYhVsxD1MQ9LcPTkPgfRquCANji8VTj71FFaZcWSbdf",
  "key2": "2zXdcSXUawwLVYvscMrcsTLNCRvXCykoH6WQ7Bph6rTYmt4cNSLsYVGU1tkFra6ayEPkQ7U1JHe4CmgFx1beKmPR",
  "key3": "2RssBh6mxYCLiM517MmQ52WC1SfKeNMwmAJKpXriJqKPMG4mLuY4QhqrKHpESVUP24YMjLH1B5sByGuzEGHzU6G",
  "key4": "3bZnRHstqicJLDAVjXR5LKTVtC56mk7Xf2AtwPTFov37QrmnUdXgWMcA676m9Ss3KijqhsCdkT3e3GeukPWgJC7q",
  "key5": "61PpmwmH3PwXZF46vVJFVMa1Ko4Cp6SE5yFxHKPsCTJ5fxMXToH4gYjGHdnJ5j5r1WuD8qUMHv55hjS4ri5LGXqg",
  "key6": "pYn3QQWRe9bW6CsNsbf4MmDyPg5dxzsej75yJwCC214wGX9c7k3JwjzR74TA8HFvWsiUpRY8G14RKBYx3PUx55Z",
  "key7": "35PgMecQodymdEsakF1boi1mBohuxbZzTTL4NpeNqo3U71Ny75sqM6ZWEC1ovyuz5rFXmPbSFcdyds8yYkYBZYwP",
  "key8": "2AoU8Be4bKbyaPpj95ff8mpqVaAKYZG73mR9gJsfYwFNCaR8n8Wo94CaC3ZDU95BiU7jjTtHpoJNNB1Cx4tNopwY",
  "key9": "615CPeC8RNjzN1bt1NYdsuMB4ESHgnbZ6e5hLqH3iVxammNZm4cDVLiiRTmUxytGT3hTsmsxqAsgywLg3uHU7pbi",
  "key10": "5eqskityCpcAU8qgZDGbE7dex6GvQ4pWXS7C5oBAYmoahCTsQbCxS6XK2P6wdByA8igdLsEsPhDMvCtKyouDvAvA",
  "key11": "353s9i1UcCUgixAXa3tTqLKoAVSN7ea8kVjBK3gkpbSuRfwLcouXCotikbDZWtqCtq1VE6sW53LRHrU3DS3H7fxh",
  "key12": "4hUnwAe44XzJXvb9iuDxwvj4J2AvyQ7nNeFFz41WfNTNwxey7jR6dXnpDZDa7UHBGmVGBNLnQPdFYrPbdDkzvEN3",
  "key13": "3PJAvz3TWLtpHE6hWNPrMDsvM7P6Qyi2CyjakT3KoFQj8t1dNBKSqkHBQyncuCZTpEr6AAv1cBVNcCHW9LkkxCpy",
  "key14": "4YjcWNZLqqULGThju8bEq5C2W2t9bjDZUYnHNJf5uKkesYqmM67e2V6DEyCLeYfYMgGwHTSHLh4QyDSDGx445F73",
  "key15": "5nzD1zNaNjiAFMKX1CRYFZn1xL7Mq2PzCtwfqHxZPWeZA91cBs4Darvv4n22yEvUVLukqbEW6mUiPraLctgXGAer",
  "key16": "5YZvEF46YA4BcjhEAVbVAHhDkNvGKAjfdAzjewXfvZViQ3fpbF83ESw1rYLSJ6JmGn6n6R7wPd134MLFduwxdWiy",
  "key17": "5cAj78zaNDqpCYezRgfeP9JPckdV4ySwavrDvb83NeY2QWVC3Cvr5Vc861GgoZxrz88ji4sKA7bcghKHjRvFU2Wo",
  "key18": "3iP6pAuZj9BigFN9DNi2vJBBndpb7eqwh4CxxJrVcidGCreXxSveSvx3XEmKp6SDXvfsEdgBvSa3CZVnpWbwiqwn",
  "key19": "2YMgfrz1kGP9zoS6aGV3kkHxXzUcGs9571rf4d8aj7j6rs6MDn5z34FfmkbYk6HaiHFaqHN529UwMK2K9skJcEMT",
  "key20": "4awT8exDeW8TAEJQm5BTVfw4Jq7aJZTNLsPkyhJEokN5dT4Xokmjx5VpEC3TPivHMs12cJA2LFMRcaBNBwrzadE6",
  "key21": "2V3GVYHQeK5C8VV3oBKERqYnTn9RoHx3A5F6WgX6FNuJeXh6VRv38SMXAzFY8Ke1dXXRkeKkqxXqp3Ao9SuL4FNW",
  "key22": "5AiMz7iaw79p3GhYSVXMsTHgpdERDGoD798mMrxFKemNS5hLipHQwDi2NKHUouMUpFDHEsQoLDqLwpscJc8QWKd8",
  "key23": "4qdyGyjiesDRbL7BAUGSx5Dd8YtRGyzrev1qBv9W474HdK1JaChtwwZmAbUi1XYTu2XqX9Pr3jZdaJcuunaFYv1J",
  "key24": "3r6GWg8vixWU4LcRtnLFEfFefahSv8enfbzCFL4Niwos97BCEH1WW2EzpdLgcsjQs9pPZqRVqXFkYLx6oRjvYGWL",
  "key25": "245BcdEtYzMyFNcszTv3xofZg1KJgQteUmAFdoFWaLy7TcrQHBkwQMZFqY6Lcn7bPLvUctqW4PQ2aqECSDRhnKUG",
  "key26": "48xk7n7PtBQvtjAqPpbtiAFxViKDDBmQ9RWZc4HuCAdqvP5Pd5c5HGtvw7UgHF52XNCsfhJCdJHfevJZYr9risfs",
  "key27": "5YZmHbsZf4dp7QBsCzBbgSEg2K3ab4vEFr9TBtjAbdB82Lxa7VQ8yzyKrrfyXDL3zKN9ea9ULewv9oFTm4XqECzG",
  "key28": "2qqKK52hFihxGfwS1etQnnpggNGCAXLD6mrucjfs7PWVVsVmqwbijgjy4sckiRFyBfjc3nNPo9Ykg2FuhetE7BWm",
  "key29": "3nvJ3YFz9aG9iF9Xmuh1hqYS73BwCx1yvHU95msnJNPbRM7CAM4DzHVzTtQcGPGswLW37VEBEcdsWrDd3WMR7uUc",
  "key30": "4keAtLMnhutyxkhsEWQpWCV6ALXBFeBmGtu2Msra9ujRqKUNfeYiMc6aMurRRxVsR9Qifa1dt2yhwAmjMAu1LVN1",
  "key31": "5ioUZr7pFnvHcumkp9XYnSYw99bgGXvfiWBPC3o6wkAYZsw18Zwz9NqcmenDNiy16o4WcYuY83zTzczkGgnVGMAG"
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
