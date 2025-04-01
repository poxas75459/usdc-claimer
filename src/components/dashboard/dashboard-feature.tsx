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
    "HY7Wj7e2k9ymeAYhmXWiucWao6e26JX5UuFQSTnwEU8Bxy7fyX1fHnSDfgSnfgeGVLG7J5TjQN2qkjKV2hTN5Gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YAGfVuYQfgTVseEswfNfrMeFrG3CzkwawwTgTXJeZgMw6WRTizye9VjY6JvhQdvvqLWT94bhs9qw1HBXbqufyQN",
  "key1": "39JJSyeENaT7s1kppy8EoiNZfWeDEaE9WijzgMayL9qpuYkeQNPShMb7ZiDPp7e5vzE23uTT65pr7HPMjRK7hUuT",
  "key2": "5znrrvEcDN4M3TdWj23rmFnBW3XnYSxvKgS3qpR5TfRaXqcjht8GZNzi24WpcA7HRsHDhW77ZNzhYhqZcZGogWas",
  "key3": "3xDXAA4iPGo16dPpAEMZUv4JbRsy8vanek6QG7rgNN1jbwF7TCbNXK37CkXymEAb2eRgJPGjb3chqjphd2BiVLdJ",
  "key4": "5oHjXUQ32dB2ee5jz7d9qGMcN6Sx6bXpg7az9DUNadM1eBvERrzWPdjtn9n746Ah1xaMS9ecyg8z5mDUqkupaPJf",
  "key5": "4xMcjAfsiqa3e1ZbZVPN7rnNE8Nb6N6UXFNxFdNzk6mW2Z3CN3jQT23DkQq7thtoAiREoLfzxhwGC2pVxjwDGVsc",
  "key6": "2UUpd8t3a9Hi4wSt8VBHFmgRgys4bvPP7uZPjzWu3Gpdwyt2qkWoPZibQ9JvCEbkiqr6wHKf1hjXKCLsLhDxNBsH",
  "key7": "5MpvaypvRhh8NGAHSCs9ZdR5bAXam7SZWXbCSUgiap3wAFtqoLvHXHsUCEVzQwn9kBMRwtnpaGb1FUDHumZczJg5",
  "key8": "3TcQRJrKNWqjL86FTi3UqdD9boD3NwhFQZ4NbzpyK1yZodfLdsdXMdBg4ogws8Zi9gaaiVG1ZxpReWar7Y5C11KJ",
  "key9": "3VvPiXSwHpETifqxaaDmw1rWr5EKkNiLjh6yjHAP7mYdXYvvQUEKBF1wCMMFTYgtVKDG1fb4Qkwz23SEGqMz1Hh9",
  "key10": "BmzgiKt5JRFjKn2GtZ8nG7WHoUdEJHC7dyMn2QQ5BYh5S6w7nBgyDCDL9BrnfoDUvYvtWogyjDb2qLMbWGeDu9M",
  "key11": "4WgDx8UmioDHpYzvzSejqLuYWMJ3dcJtkwy6ZdtSDiARzPjYpDuoHaW7vXoKWUCRbrGNNzXcaEJQQhX41TuKdTzJ",
  "key12": "4vMTeqVgr7SmaWmtdDbqbb4U3G98fCQdZPcHNsciaKNErsNA4UxsqJjk8QV6ces8m436vkevBY8mCkXC1qmuqCFW",
  "key13": "3xj375A61j21YoZL1kcE8GLvNywjBd488Yz8Wkf3JDxoMgTNiFxDpn8NDg8ijq5YbffSKfox8LT5y8R3QAjQgGuS",
  "key14": "3EtvjRk8r8J1nntvr4QoEPMizpgEGn9je75VpoeE2sVdMUGDB8gbZNkPbWnpRdx7BQjvZdH7HeHcPcgBqGKhgTqF",
  "key15": "4bQ5rQMVb4ZKvKRneQ3ncAwbYYZn512bQfUZVQMMBmXfeM7rwYQN3EG69kLDU1Tcu4WsU13pBkr6AFmvPJ27xhho",
  "key16": "2LhzLq7bVKYJ3sDrjXTLbJyLyBaA9CxhPNG3s7vR7YAUZWf1ocNbgzmTqp7TDLvZBUieZYs23jn31otUZmGKJb2i",
  "key17": "3zsDJkyHqFgTjf2vEYMnVsuEhwdfYeQBQpgHqB7Rrt2biQHGDT1hsQb7nqX2SSb48R8d91sCiFZ8EeTjb4dKcivR",
  "key18": "2zsDyFt9QzBfe948hwt84sMimzhaGZWbmcEbz3qhHY4R6nXEvPhPKnNRMuje4wSECDYsAnqkTG3xm4qTUwbNP9du",
  "key19": "2mjzW3cE3Dok2YBeqGRYU9cSV4FekA8apq9muJUwHNwSw1TxLj6HLyr9SCERZHYBf7Vpb6D9DfuRakKVaGc1LYRh",
  "key20": "3jZsn1fXiB1TbwpXiioCaegpzuEYeUere3KTTwpGVu97AKsyR8BnUnWBXBcfaCP8YSX2dFVoCdH4uXAmptP36V1h",
  "key21": "4ea8wGy9AAcAxLnB55qzqQHVteczivMARL3x4nNQwQmeCXxwr8jm1bGH1XhAnDXYQZyJyXawA7bN6x7m7NaZ3Azs",
  "key22": "4PvBpxUQofLxn2p4y9WRjeZ4yePN6TVc8yEc2niARrkKvzrXV5NQytiW9Hni2bxiZd1R4QySCLq2HBy1Q5fdFwBR",
  "key23": "5iDowQpSTgpor6Zv4LvDj8WFCvmuyMr7ZQ3EBGgLntYXNC99c2S25NszD2NS6Aaup17QTcc2W91fJWBsVW9RUbCm",
  "key24": "33a659bdFnJKpkYHyWhgFsi11ZoQNY8ExjW5ekcfspyxvZzTLXkWBJKnWEyCYu2uUv7oggifNpypgJfPMtkTmVdn",
  "key25": "61gMf9RjxFcyFu3FiLG46gVpCrsfLLqoND8TMCh3tb2MtfV6LzPX6PgFBWRKwuGyRHftWCfQF9r3ELnVxq1TiSzG",
  "key26": "GsBduBvqJDX7M2dvzYxvk4Jhvj4c1rq2wHKKfaqq3TL4yojWnjo8mEwsYtCUYPyD8usxumproBJtu1c8XQwM2dx",
  "key27": "48sWoFCFw4mUjXWRWCs7T7Nn3xZbME4vxJWU8t6pQQ3uPRJhfankfEp7uSMNFuMVSic1cqqUTGW7oGws6DNbxDet",
  "key28": "5984x91qbbuALHRHp788T9YFe2fEnvfDpGdWXvZmFnRBo7jrsKD6tMcvrdBaZ2p9dDcBKWqDGHh4U1JiuQZqC3DG",
  "key29": "mhaYhg9WbfKAXdWZZqBaXxkkJ81n2VjV15YAct7bqqneFf6PBNLpLR93vcx6cVpBLbMuFA9bvMpXFmYFTvZkEqz",
  "key30": "2FCtoR9tXqQMBE2CuQy3KBUWRiDZ7qEvhkwVw54Gf4MhGVReeQxT1WKX89dh8sJhVQSNYe6t6NjXLYiDjiYbbny9",
  "key31": "3bYhmTeDLRB59wSZtnNBnqKQ7BS6sS8CYzU4XaDxaBL3pcTrD2icxSkwJ9P2j7oWJB8cF4XbbbFWGpDQL8nSLGdm",
  "key32": "5LFcNJZvqTGp4jJsYYAMtLwDTx7vCTt9W2AzCD811bhFX7NMxXhEzXpEkVwQk6pkUDcemEDH7qXaxpP9WDh3f3oE",
  "key33": "54CM7Sd2YH63uwMYAEVcFcz4T5khD6kLeuAhDBBNB37V9osf4zEHq6sG8xdq688JoX7LmGNYQv8Z7942XYu459AK",
  "key34": "9U1TqxqDCP9LXY9DWfNHx1GuA9frCJNkDbeFSfskwhPojv1CDtYrBzfZ74BGckUn6Ks32PQGLzYJwZEASmGYhzA",
  "key35": "3TfTmFQpgHknCpnJXzcz47cVJMdg3dP9rHQfW8xjPNXgQvXxcEh5yCiXvz1929iKVWzzn5E5XHhdCn4GY8Vsc85B",
  "key36": "2ksHKPXyArR6iQppKj5i7YU3hyfeiJJ87H2qbfaPyQLn9NZjCE7RhtVbVG3YhuLmJUSWKPUwfGfesZDAD8WqerS8",
  "key37": "65rfEoNHJET6YUFKrzQjk1UoRSnsiVBP3tUTHs25GJsKVkPMzT43yBFTu7G9x9LoqACKfyRwniKgHDM6V9Wq46us",
  "key38": "612YbtRiEk6oxcirqmVQkU2L49MwUfWxUjtBqHm9Yo7aXAcaRjBg5UrJxoJVQSagxPWU9bQGAYehXnqZHd6vZrER",
  "key39": "4rE5ajyVTuq4byNLbNUtHhKWFhcGzBkvKrRaj2e9iNms3YZdNXWNcfyQsusvJeKuLmyF43v6U7mQGG1G7548zGgP",
  "key40": "2WC2bp2F3ttCBTBwWDG4PGtKLRyADr1ntoXcGgYYieGNqYR333RfW7gbgpy19hakiu4Ft5advD7GbPqXaftgqk3Z",
  "key41": "61MzruSD2M71U1yjo5n8APJ8y6zJPXY2nBR5b99uKxeBgvQ11dq3btikr7ezWepMAGQ3jdCY69YwfHoD9493BMpv",
  "key42": "iAAdFrL9FUAtVPnTZadxUFSRZysQM4zBHr71wowVS6nrJfyMHW1bdwF6HV5SNbLKnmgTR6986DiVEhn1nLrStpQ",
  "key43": "2Ssg7stR7XsyYTR4m4j4uBwzrWtXhYGPTYg5W1AFUZv12UYmGHmFiFmES6rFwRBMzUNiirtCCteiTqubqFAALkPw",
  "key44": "2tEaQ2SfUvtexB1GREtf4mEh4CxHVcpaHrityCsiroEjAeEwfjvy5Gw19pZqidK2iXtcSC43iY6LPY9mHkFarAgm",
  "key45": "5n1DkgHAe3yuoxxVdxER1WS1AYtXZ54PvwE5qW3jvLj4qk8kJR4Bt9ax5ppVybjxkSDFFEY4SdhbnULnU52uyiQ9",
  "key46": "3YdgrA8sFd1fk3t3Hj69ZycQ19M8iNHnLRWA3cWMB7GipyU9FJyKHiY432i3UZspeNbwDUGAtoyEayxaNQvPu3ma",
  "key47": "5HwJfxJWqVAkmTKYLcfp6yzdkKjHmKPs6aUrk2vUxsQDSGGsCcud7xZv7Aq7NW9CsQrGowjXPVro9a379nGznsf"
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
