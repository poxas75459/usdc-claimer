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
    "33aixi5sSBsbYa8qoo88KWUWiSVLw2XLwr77d4Q3uxGMnLxzrvnGzhHM176LKLKLcyFGPJtFFYE1LMpro6rtQGqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59PUEH8cm25VquETVyDkG9UHZ6kyUepH9XEX4H27pDo9phgBevxh9x293V6VLky2WeSSesy2AXhtg969HG5cbUyu",
  "key1": "5zuj7U3TcFgdBeGTnJVeLPPjudfvkduNzaGNomyLSHbx5ohJHfUmupdLikcDaPNwuk9t7qGaUgpCfeHVKmNrRGyf",
  "key2": "wtYXJy5eDh5koVLfPsrZ3eafRartriQTwyPNBcTRMLqAshBB4YKYrzjbSCD3TxV8sZ3QBCmFZmiBgoYPeWF9UC9",
  "key3": "5TSEuTSxrywJm69SnjAg8T3gLbFYvFxaQHx9mHiNX6iqVccFNCeMVYjfX8zzdPiB18CVVxhAyMS1wMdScmXDMmy",
  "key4": "23TFqEwyPQWTPbwRD57qDRRDw6YaTjCxqnpLTRZKXryhfjV4aiX6i8mcD3En4MCfeqWyFZtfewvbSD93H2wL2wve",
  "key5": "4vBMbi6H5DdmX1w8h7SVv1MbjLdFEWjb9eemG7PdjRE46KzeBuvHVAjjbH6zuwJsGBLvDcMN2P3fXJRE7p6rs4LS",
  "key6": "5dvXkW1umYPUMyZ94VcsuCUyuF697Wq2f4TtrgmegVtnkTiZzMC8ax6sFZeiJKDgF8izSkaKEfhAzQPo8pok4546",
  "key7": "333jMwY1WkWpFom9rU9bWcWdLHdJDqDJVPHnjn71yCyAty5GR2VQrnYR7NkRruvnhqLdV9EkQKfYLa24SUHPQwRt",
  "key8": "5mqBrSYb8s5tf4w2ym6eRXhTe8DQgAZsLNPfWANawnxpTpUoDpn4joVxyi8SkNkXeS1yssfL8nuyfYuN6963tsgc",
  "key9": "4mHuJFvCp7XCy9uzUYVemcQTU8GNoVzCS1s8Vm9BobtFHNZ9K2LTzM9mGibfYWuq8oYwqWdgULBdK5JCkcrnT8dn",
  "key10": "2tgx552P27p2USMemdZ3iNzpNRF7Gztgwb3UEMyTUHpcGkuGk9ZmxtyZogmYNzirvT5AgUTRL58CipX2rTzSeEir",
  "key11": "55QjSQmZ1Ss2z1WkGbHRx41rwhsG3rwn7LSQkUP9L5Ce7JgrWfDKmg6NRK4JPhphbaVRoBU2kWnwbzwHpb8zyN8f",
  "key12": "AN83Vd18hGod6uBD1MVf36oDmUk1TWP152akyXgpqt8zQW5m56XmnsnkkwMKesDfinC2ZsiJofkL96ibG6z2Rkg",
  "key13": "4NbKcs9m1yiJjWNhzRfgY4m1pMem1bqVTKufvjPTNaUnCsRer7g8mnSbTtDGWghXPcoUbUHsUfWFuYUAUy4HymXk",
  "key14": "3mkTtqAPPv1MqoouEPcVhQ1UcwfaJ5xpyHvMEzW7YjKAhYPKbehco6DLcRxEETH2ATY6Rr6PkjbMbzvysFqSKb9j",
  "key15": "3rZNHuH8RJUzAUr5z3hHQVMh6YNib9JWbVLYEiqDsheFLpaiiMAEsvdBfrnpBoGCFGvEa5oN6myAZDDwXJGgJ6dq",
  "key16": "4aVKo8g5ZR2QS5nQ9eJv5Yp5s8ubgv4MDyoQhBqqwCb4FWwaeWXoUTQ9ZCa8XCtqqKk69yWrAgHwMJ3wxR3W6tE1",
  "key17": "3nKVbUn1w3s25P1VwkAENhKcm9fFdezmYnijFbACwafG6bhW8MALFPHsTo7FMfd2a8eP1B8BfKfkfeQVh1edbDg9",
  "key18": "2RXTewsLiJtQrRLDom4ZjaaVoSHJ4zSGumrbwuf2d5yoPrFXB9pVCpxehiidAeR8JisNtfawJUJoKKu5r6QXQW1r",
  "key19": "2F6P5sB4a4YaghUAnDdcwGmpBK9JZL32GNcwZmjiiXUiGA3ZCVLZtUod7X8at626SXF41R6S1vgVDmPSacYHM6Ch",
  "key20": "5h6bh7nF1NQQb1uDi7E7ga9FCWL8zfb6UiCt8xK1EcCQ134pFkHBWm6KmYUo3tPFksNjNQTYjgj6N2Y32SXiepi4",
  "key21": "3VLgzQkyzYPhYwvhyeY5tkxMK4xMZPvRveWcXyp2ZXLV8v392Q2XoYMoEr66y8iGeXRdWHoWx4ZZ9asqDWUPSX8J",
  "key22": "3dx4g1BPs9MsNfShwHGvKVHm423jDuRBQzhisqvv9EPVKbX2ug7xW1HnRvspF4iGwFVyRJiGM81QkucTTV6ezVx7",
  "key23": "3LqDrcjAxEvJYVCLfW2iE4MMsWA5bvWydRGrPLYGjuhGjU2PanXP1GfPrx5XgkFgCi3BxwqQmcjDYWH1FL6Kk9SN",
  "key24": "5XyD5wa8DLerz9xfFD5dcL9DCkmF3vUmPWVegjNd75tkYsjaDAjRcx5sijyALmNDK5NTBcXHfbVJJgaZTringiGg",
  "key25": "e14TA72oo55hJMifwfuZqUURu9NUzjMoFTMkjwKxYi8QA7tPrdy9Y3KHcTafUWBkUd4VzsSJwRijKdEHgR6Ut2w",
  "key26": "3TaAGfoWv8hfKyvPfLmS7zW5mxf4SeU4umgoEzeQKNVC6kn7LBLQ5tZpRy6KwzWGVKSjcUaJPk1MKCc1AaWCqg13",
  "key27": "3oL4j5D5kpcx5MDWsc3y7MJ8GDBcjLJdPUWntr6WY1L6DzkiLieNe99xzpa2g355536TsojeCW6L1WgWi936LMCN",
  "key28": "3GcwFvfuj8MZwzGNK2UgPt7HiSo42UfCmKu5jrhpjQAfbvcw4HnctesYuR1tdN3wZW7FUa2KLJznWMo5ZTK2sXqx",
  "key29": "hKX661tFzmv2Vp8QqAt6Zd7zY4JZihYjTKACw5s3qzWkmajKM6BMa1AQFJxVYhQXRM2ByaHanVQo4nwmtSyh1jS",
  "key30": "2McouyMaH5ZvC1JjwZ6hNNosfgryHfziesLYU7rJ5e1oHTnaMQ5AFBxvBqMF3d1XVKibhiT1qt3ZY3HexDoNXvJ2",
  "key31": "4rioHRiBpLmkVASaebJXEN1CdaQGdVuT5N4EjECpLLiaELArHzEdqREb2RoENBTpPRFnZij6hHvheRdViRp8bnvr",
  "key32": "tbf22zfk93rxBWKQEAH9N5Hrs3LtjaYiJMSvcFC2CbpY8RWDU6td34P6Ptu5diPREx5HVJoyekxU7TB2QQvNBpS",
  "key33": "2BQh3VaJSToiKRPRC66wVhrNaDfrdz5KWwTRrbGHuZjxXsfLXUEvSzU3TRcS3UtmNHEfwkk87ejDUcXwS2efy3FQ",
  "key34": "43YY1jyYinv95sCFvXfLLf3ZYE2GDEtUiWEjZ7GV2hMtTVW4YP9pts7Sufi2FxMGmb2tc3xonVVERaeLGzymPX7F",
  "key35": "5RvrNA5XQUQK6pB9k11nuB6oBN8zLeXV7QzHkcwqtX5zFnkEubQopFotNsmYKbBxKNeKYz4Ejp26kXu2m3dzf2po",
  "key36": "2YNeN3jrQ6sxRgiiJ6sym8nz5eq53q1wiH18vudcWP7DDZHcFSxSVgEEcJH5ybdX7pXVtyHReZzbVZ3Q3h6PRA2h",
  "key37": "3dhw2ifHEELhGL4jqcFThCHdudgfpEBCKn2WMvaVPycVFJHrPwK5aA22fW1uw2g1cPgdKx2UTKVrJ2cQJBWdwvZk",
  "key38": "5Yq4LC8YRNaw7c7ZU3S4aRygn9t6jTqK913YDA3StdsFDYRLLvFnsxRB433AaXKaCjcZusHaFgYJ7oRKzYXT2YCP",
  "key39": "9sHiL1QZKuRZoXEFYL2bJra2aE7QSC7z9VRgHUNFkuDFL7MHNPqVr9fKRBcDcVKabCpJg3YbaQa8ZaxpZecMcMZ",
  "key40": "2UzQtAQp19GD5Je2Q1M8BJwmQ5LD4AjKBEfmzpeZfaw26RBeh3xnA1WJXQN7pcSvWL3hPvrfJNh5dqZe4kfuJXmk",
  "key41": "2dCyL3PXwgZeKRW9gc2Rd2agJ6cbf6rir72xp8Ux1YTj8hfXpDb34u3j4az4cq1tZjHnbTYzbkLKW3zC7MmUnFbr"
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
