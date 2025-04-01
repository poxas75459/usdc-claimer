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
    "3eVnukYwwdLtihDw2EfmHu2QQyN9fAtVSviNwbK2Qhc7jxhJRS1cG1i3DQi5W6Bax3UAjvoca13CDA4LNAjsrPvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Tcd1g4e6NqA6VqH5qCoMgagaU79g31WLmJJcRFLiVcVpQkKzHpxzHWW78s6hBqrfGeksuS7v8wpD9VjiFFiYV1",
  "key1": "2F66o619U3SipnAA9744YnvnWJQ3zLUsemrWiTHGuUnkfANq8MhWPKdexR1ZDaFKvdMpX1a6JLGU9Q56dWsm7mfA",
  "key2": "4Gx62QU3vtNDBVHduiFEWedDHtfrdum1yPpqMdA7FhCMxXwvzUpuQLgsdU313B2SeRdvkPZq1iBiFmDvQeQNHRRk",
  "key3": "CnApZeXEKJUjTP1ywffCzYrqa9t8XSWd3eeJsYsUUL6oDZ5TL8daCKwmzoDbVaLnBYZaxHfaP3nB2ofcoK7cLvw",
  "key4": "5LQLVbxfDEEUtjb3H1ctPKfMubsLWa6R47ijgv7PoaQWrV5yKMcJuZ3VRbMTKXgypfKsyE5Styv6HWC8gej7VDbx",
  "key5": "4sg9vrdbvdcGvTfkA1HbkgNLm1eq2JSwnUqhziZZgEdEqrEk294wDUg7KgCo2G1ZDFnWgjeMeVS8gCTSKygspWfS",
  "key6": "2iuJqGNTjmg8SnctjkyiceM2gg3wXJR1pNr6zRkN4yshM1bUPcj4k88Fn8ZM5fyjjUuQVBRFV1RmwJ41W5DcqGEW",
  "key7": "2W3fHpTr4jazkxra1Kxs49wAPciqmgdGhHvAFPDmoueFrayR8uiDkaNhGzrmJnQsBNaQuHMTeH5FjWhUQ2Tuh9Ch",
  "key8": "3ToxjApLbW8kbMQkT5HPSGabBHpHpCRoJ4r6NCHDpc8m86m6owvaFYLpXDzwytMV7iC1mwTRFrxdFFpyrNp8w5VG",
  "key9": "3NdC8KfEzmvN19au9qgufxqPyN6vJnSFFHLN1GhjsoG9N3tTtz6vJnLRZLmrLvWioVrgizSXxkgwZdQh8UjMPKus",
  "key10": "3k66CZu3C7yutCrwbnX6tyVMXW94pokfKrpQC6CQk9ko97EoBzKN34wJ1yoY8mAQ1Yxhb6LUiJybLV1pmVsZSTLd",
  "key11": "48G2TxzGBuiRLJrpDNfD5QJsfgv7Psp357CF6jWbBYUXABJnYfLA7YiyL9gT675wUQtEyikvBPjsKDRK232bwivN",
  "key12": "2NsA8RMDhaLEd6bpADisCM9eAYro67EK87ce3yjEPMMBT14dPYWaSTkABFbU4x3QZj216fys5qHVURDD7CFN3Uzr",
  "key13": "vUWqEM9NB69qUYcLcVBUzoUrLTdU3txiDPBArHP2gMLE7P9eWKpoZswcrz2gFxVxTBRWe1zWy3iAYi5ubNNjsE5",
  "key14": "4jJxWCpkDSGvNfSz7ZtX2YJGJqtKRbeq3BajUA2nQv8aDmr7us7qYLedSktt1b7vdG4fxi2vfg7uR65N3k5MMo6d",
  "key15": "4zzWUPE5gEsPYtLnkgYAGiKgAp51hBkCABUtF4p9tCMDH1KYvk5QZPWMwt4663Hd34eBGEnEpYZtqrL69tcD43Mw",
  "key16": "3FmbMg64ujHn45zBNjdomXRKhurzs72Y7kGYg2as8eCFwsa9QiehWrtCkDVj8GxzybkbkJ8gxk93sAxuuXsNcf5X",
  "key17": "m3g9fdQDZKjhKQkr8G2nvzqt6mTKjo6cp2uqnpSbzdnrGJxZirTBym1g6EEPpurLH6PncXheiuHr5Cvz3RteFhn",
  "key18": "3YrxNEJEDzd8UvPBeApZP4z6K37Tm8UAFUVLkohQyaW3ntz6bCAa9JU3JkNGv92DfjRi9M4zyohTLgvMNTgXByoi",
  "key19": "3h8YKzPQGeimZUjVMDnRSKJ9ZDdZVD8bzVqhJTNmDfobnAEvtxRiT78owNghRaJ2G7yAmu1thtUES9PYUpgTJfRQ",
  "key20": "2u2p74LAv51vAi3MPJ4evydNgqudejzqejhLUCas5oPfqQ2Q1md1gBCmpSVaQmm5n98hnA6HcKcuhFjSLnLrndjn",
  "key21": "433AnZWwQk8nzrkShzR2z8KJnoqxd6kpdwAjiAke2pzTTG3f8usyxAnVoehTsNW6vBNCKtqbPFWbxUJC1WvTQbte",
  "key22": "3JTX9EtCHVwvCd3ESW2mw4u5eBwXUS7c34SFpSQBp6WBh2WyERQ46WPzs8Yg3dTci8Ej2tkst3TtMydcTx4y2pMt",
  "key23": "2aRmcZrUWDVYDZsGYpdB82rDKntVGDpzZiHRsdNh3Lt7LBpVZvsCS64NQV6xRYMaSLdineQ9emBYuLnaCpGqyjhB",
  "key24": "EgtQNLkHgerdgX8p699WZF2Chk2a74ohyXBDGGHXJ9n6i3HuvGrjcj6gPFpY3eGVz7gCSicaFpi5DLtnGKB2EeE",
  "key25": "zCjMQUhEncpFftoAuXgY2uSqgGnuoXtFFWGSmaBkSYAWtMGYSBwxgfkJmPJnC9dyc2bNXPuWJpjUXZC6edUFAkT",
  "key26": "5NBoUGi5kmvb99A4TXscmkFN2ktuhn3GoFDLDxJYhgki6UwKpRY4rM4v1B2n5qmAwDczAD4iYhaXdLYRG91zKTiY",
  "key27": "525io5a3Es1mFepvFgmBeH5As6N6Zug3wcU5RtAUNtqBLCw3ZwfimmSAZYNm9qezCLrAKV2GgLLAqcy7Kjfgcg88",
  "key28": "4hiXGA6wrM51kM8A58WJRx5vX1poHWvf5zvZdaFqGWkpVXcPoe7MdQvhUdfiHawmirZ1zWXdb1t2F9eHoXy5iQKx",
  "key29": "5QA8kSpqwB7P1usLDcw9hXstsUATC1Bpgv1HwJqKFvhVTdGiP1riqVXmZuijbxzwxhboxe7NaTiy3DsVeZgnk3Y9",
  "key30": "5ySvSEPBSwepeuaJL2oyD5pGDtqb3xUVq7NqAfQW1rEAzvVaU9VTgff2iiiGXVzwLYU64EbptfcMLGPvcZQNC2Nb",
  "key31": "3U41gY3ju6v7YAVUZGTrgbQxFcprSc4yF1Qx2zqMUDNAXrNJdP5DeQWrJdVdXbzwR3QovxsoH25UJ3dzFCnDcETs",
  "key32": "D4tDD156VhHe9aEoTB7fYMh5JsejuGKxw97nhupTaho5evVzepkVix2fqEpHJshFBoe2ccrYVj7BoBpZY5EbNBC",
  "key33": "2bw86VxUPb5auva7HDaQ9XMZrvg3Cbb9PCWDWp1T46X6xPkdRWM6csFw1eUHCNiiJz5kYZuEGVSdKmqweDAG9kfm",
  "key34": "2ietJznBFrnT3eApzFfx2Fexr5tVeuHkVeb9C2kgUvcJGpwy1bz6X9FynH6N2sv41AnBMgsMaykaat6teMMiQDYv",
  "key35": "zqW5VhZ7nFBs7YHovvmw59a369jQNJXxKDURZF8e76y5MpMWTr4DmsojApozawVM9XZL5ZA6zAujpJDk2tJM5P8",
  "key36": "3eFDBfqGchFWtVbMCd7aVfN6PRFQdfzDZDxn2o7vUjEHCthK4LZD5Uh3d1YeY2J1y5esuNKs28hqAXGYj69CixW3",
  "key37": "5Z1FbAMpzfwtZjAGS6iYX8Ls5Zj7R5tgRLoHWSk2hWi58cZJGXKaydaA7q9ixeyGpMPB5y1gnmKCdVh4UCj4Vif4",
  "key38": "4NKgxoVAsTW2WofaEHFMyFszAv5xXggiZbbYyHv12kjPTLzknPMgQ2JDLw43STNXEp96gEcoiwUzCQzNa6xLzMTg",
  "key39": "5FLBnDmp1JoyTxuU6mfFk4JKAG3VRe44DYZxmy99KEtCFsv3MatB6zqUrAAqJNEcPPedpzeH8zFkP9sYD7o5kCi7",
  "key40": "5HvYbxSAo4jJ6aTCSBt2jDnwY1PXjn6C8ynFt38uF6y9crKNCeTHRVqUafvR6o3vuJyoXS2j9Y1uZM6TE9b86jKi"
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
