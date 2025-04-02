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
    "4TZiJ5tA5rVrHHWMRZfnfJr1zhEK8o5mR5XfYePvaHtFFkkBgWtUQHZuUmNq9AkNGDjgG8xqeupLKG5LYxCNaemW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KYhEo3fLB6pBT7MrCuSfQhKBeCRLbYFM3xoJ3cUwSH43GAXzJ9XrmNxn9xGSnxZqgTXGMuqZeAFucZ1uT3BS4Tv",
  "key1": "4DSNip4TccpGjuyUpvXVSc2q7jweBeN17Fha9cdeg1Hp79ZeHsCRCuN9pW67GrWJxJx44Kq3qTCMWRVuZcrnoszj",
  "key2": "4XHf6FjfW73Y2PfoBsDnkCx7HjdETWU8WTcnPjUDTsx4wvN6Dov5gNwrYzYs6hrN4TZjmRi1ZKcXr9aP6fShQnpj",
  "key3": "5Ud49uXSB7xp344r62Vfu8oyoNqsJ6vCWT1zB7SgqdsadqN969wV8cdDmqyx9cJ4JRfGkxM836wf9wJZXpVsC3mU",
  "key4": "2mX8xAc4zzwGnx8gtAEmtQfMgq8ABAdwQUt4o1TpAWc2oGFbRdKTYUmXWrCDUDhUELzgUqRFTzCEt75wF1yQ9n2A",
  "key5": "4ec9wUMky82uUrDdMXcTdRADUf2DjL5pWhaodhzmQcJMS1dzUXS2V8y4yFWwLCNw1D7oatX6Bmaw5ABkNWexuL98",
  "key6": "617Cii6q5tn8HfjAh2565mAp8fKhkYzD4rtXWnPaC86dK4JCbWxrGXpkNqMLFibT8idpSAD3jWVoBTCuEE9e8oWR",
  "key7": "3RkRJNbebMNsEqPauknyTTm5Xra7tPbupS5wy13SnFcQ22Kb1aDXMJZ2GfXzUVHfTBqWL1Fhhqmfd1Z15zJPUfPJ",
  "key8": "cVUuxhkfARTYK8uQtqQovtWKtsJNUkiQ8xeiAm5qqvddsSerHdm99qUQQRkuSmYbeY4fFbxvTdWzxapTBCbgUCt",
  "key9": "XY7HpVhokxQKZk559q2JyuXEHbfGyi754wQWY627Vsqqzm1PH9yFbysWDZ57x5LjBiTC6i1J3Mh3WMmpZr1Af5V",
  "key10": "9s2dY6kE24n4Ht8nUmEjPHMfKmpaQ3jc6tJMzG6K7xHttXfVfDMxASXhGvvbTxX8LzHc5po4RBiEFWFvXQPM7A7",
  "key11": "2MZ1fqHKZsU7RDwAcnSxqxvoPgSqZjoLdT3cQYrjq8bjdnGZNceR5N76viriCgpWNg7vPuysrWm83TAasGeWeuAz",
  "key12": "8vvxB224PMDmYzHZpwq4PRXwxBZpy1XHRoEAA74HTx6US3yz7WiW7CR4YAhECSh7xxr9DGV75ymRGYRLNXJhAvy",
  "key13": "62uXHYGN3nroGhj3DzRJNbuc4mZcEhCBdEcGjT4vH6gJVJtQ9zbYLqKPq6B2YR5jnQdB7QQ9FxDkev68UpCQWHK6",
  "key14": "4fZh6Ho5CnFNnnJZfAHKhpdvXZriwTZL8TrncXBGZYcGdBAFZg1326ou8z7RGxtjCmcsFJdQmfXTyt2CR2GJ9zDN",
  "key15": "4zSSzpJPMa1UnWT92xj33dzVSeTRAzJVBw2nhsqGHWZEsuE63BGFdYgVvz4Zd87xFAwbkwQQYrVyBihNAvukn9QN",
  "key16": "5xEAYY3rLRzm8YHqpr3nhJjbcWJLTwXDJczahrddw3DzfzuKT7b6Jj8QimsCW9qxv6ZKsXEZ6VFyUo1tqGkqEPMo",
  "key17": "2TaninRfieQ6ru6S4i19yARv3UDmCoAQwFfutBfJho2WDvjo1TS4iwqi6qfFkj1k9eEZ3QYvoTedkGNLnqW8hzgT",
  "key18": "5yJVhLK3qexDuNSbhwwWcc1saeeQdLy2TfkSiEFM8ga2jrgL3sb5zJW9CuWjvmwCDcTF9wHsQpUR5fu1Qdrk1Chg",
  "key19": "5HzAK6R7oTecgHW6zgtoY159VhpQbPrxzvhqZmvaA4MuH4F1m8c6TX9PWu21qpCCzvYM1htPREZhYB4ANL7xfkGD",
  "key20": "3XsQqB6FKoZpkAaugr9qfwjUtUh2V4wRc3qYnXihtbED1ymNfZwDNKwVfg9zDu28AKNNMTvDS38DGfccsxP5HXP6",
  "key21": "4Vf5RDEnEbPeHZLTpumRAP5RasBan2pVEgDAogKPxWGjSCN2F2iCJHi9u26cAx4sQwF34a62AZYVfCvGcKNmCfya",
  "key22": "31NEs1pL1ptSTbgi11WWCnsUG9tVpj3mZ4cBUoMbP1GqD2ftdZsnCuqc5sGoMNFEFecVN8hiqALtBnGGYgps3a9r",
  "key23": "5humZmMYCBN2q8WTedjDvrvxysg6HJhZpPsvpVZK9CvZK3YSf1X8EbQTBjr3cExLmQjRiGihUE6dr7AjMk2RovUH",
  "key24": "63Pc2Gg6wDmMCHZ3jwWbZ3BymiBv8X4TLSKUXTdacaj67TgNmappitF1ajnfNW1uN6j3tqRYQ4F2cRJ7mgfw24pr",
  "key25": "CLiBihENNZpaCuk2R88Wkr7orRvC9rrVv7oKuTu9Y9p9pA9s8HRmNCVzt7uLXi2ptZWX7uA9BoSV6EtsiW9FfUB",
  "key26": "3fThTKz8d883Q7z73dqUzBHnZhLpaqYJj4PjnBVZRfoVNtCconTEUNpxgYofT7kxvp9fTQ7HmCubb9LYGeZjsphc",
  "key27": "3EQQ73uZK4fYreDR2onVTkEMapQngaywdzRxq4GLyrc7ChQKjTryJeC8dfTSk782bJryEfNAkGRcLyPUncMeHpz2",
  "key28": "2yxpZ6b969qx8n5oYoPwukHwStvodDAPU1JKgk6HwJM2sggHqDzLM2Yxj4KZ2fXD24orMQ9bHZUtB2ZNYjB37mYR",
  "key29": "2GodSwSA7i3Z97rvdnHurTYV4cFmzsWE3tA2nGgnpU1xc7WGfyzEQ4A8nmiZ3cApUhMyi5V2wC8c21PerpDNymBG",
  "key30": "5NpU5Y6nunVUyG4gGzmZVRKK4qp7vCTxGNmFNizoKsW8E5TB4i16TKscAZdYMHzK5DREmgBEM9aSUgv6wCpZu3HR",
  "key31": "F42mUgCwNZMuP8GFH2e8By4Kb3ZK4yDozs1xFB3zzkGHxKhgFziftuWusSZDNjWMAaGyFeCgS2KVTcSYZNUiJwV",
  "key32": "VX4vci2d5VLuv8bYP1KZAyZzAX1wvstYTpx2jnLwNYUwS7dLCyBbnDAx6KVNTaDJCfjZ6H7ttqEbjxiCjaMmR62",
  "key33": "epUELF7NtMGkGTQxXsPwcpD7T8CHYfzTBx8KKfeGTnZR8DSjFULJBDgqWXi8LK4rUe4yLdxUKsZhvMUU53wGyy5",
  "key34": "5HLYM6xC8WnUi53cyrMhNeJydQomh4WE5Zq9fZZg5L2t8c7SGxrbjGBCmMXQijG7M7XY4pWhciLMcGDFWxHiSZEu",
  "key35": "48wRqcaZjnixWhM9oD3cyNMbVDAwzsiUfc2xJJqdJft4rsum3DxzfW4LnXt1etGDy1rLzP64LRgqmsGzJ8RANS7z",
  "key36": "45puW8ypWiTfCBaDaXA5U98w4uRdpHkMihUNtqp4MDeRcirWrr3cuvyxRh8jMG5wjZCR7nAXf3c6dNAnPzUxt3K4",
  "key37": "25SupLfyxeBfbkBwR9oAcGD33Lb4BQohY5eHN5XxQBtxZHMBeEnsnzu7v2qbzpuBfKzrWFEKxNML7DL6uNafkjDF",
  "key38": "3X2ToF5TV6GbpqJScxSimEJJhKqZjE9PWoVZkk4jFH72xqdX85gjfxG574uhN81dYi8efHxXfh2STG2qcVYGZCWp",
  "key39": "5Ls7TNbLn6V5mx1Ak3VRn4BypsRgYD8s2xcZXGbJB65Vk7ugEtwnqzhpenbixxzwgUBH5FSa6xVNunpCSG8yX6Mz",
  "key40": "2HA1Gnxzc2fEW4tnxjSaDLzd9miULdfmya6RH9RukQD4HHC9FdujXqqm36UiVZmG9EL5UP7rdmgGaxxEpkxGzgAd",
  "key41": "66Hc8N7URRsihcdKVn29BAoscjc6KD6kov5NEgWX9riPgq81ALDHnrw9MpvF8mzT7kiViXd33c1GfbkuYNAMaSr8",
  "key42": "3nhNCrX7zv9wPfuQhV3D6zdB6wpQhhYEzqm5YkjPAgALrLw5Qc1ppY1SmZpDVMjz7StVtZAFRNTeNmEkB7P8AdiA",
  "key43": "5tfoeXaAvKadUt7jY9tEZRGYWnjCYYtySiVjHoSW9RzraHqBV8NVdLgHcAhiJjZ3rRV98h94WxEhZ3fUSkB3sAZd",
  "key44": "5YzPa3Zwv7pVqKongvaXCqQALx7E7Nykzsr4Vj8HFg2sdyTvdbcJqmh2o8RKJ2t83933t4v1wXsYdVsXDZ5QEvna",
  "key45": "2Bed1DLiYcXLWKkoYgF5iGjvGf3zwEGh5xK3wGRpxW6Fxc5PdRFYkM3Fns7d6mvgfF2RcyEevMDZSQZBn69s8Jwg",
  "key46": "4o4qQzT5RaD6JVLKWrFjFgfvp9y4chCMfQo4YFJnZ25uxiAgQD9dKS6GRmsqMtGEd1AE3MMW9a4bmLDP2MsTjh7u",
  "key47": "3eNVkM3kMyu5iC5DkEeSexm8sZWkG4fQ3zpzKtMosFRQ6wPzNPSrV2Jbb46ZXRpiZoxodhEWSCKfkt3HFhWtvaGe",
  "key48": "Cb7EYc85RGawWuqxVqt7T9sFBG7oosd9YMeb1dNc2K4dt9y7wREATxtorZ6esNZeK54AyWLYEjC1CbudAgFoSpk"
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
