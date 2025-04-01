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
    "4TU6yJ5Wfd92Tt7obaCQLjdcXzvUjJFVyBx4Y9rk75W7jm8sSoAeBDqtUrayPBWgTe1VZXqTb6ZS4pNTVo9sPXkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4caAM6rvDqR2mMb3t1AaDKmbCEFaCs15JmTzMjHpiukP9G7riw7BqD191YqpfsF2goLVvTWwbvBX82mtUSPqhzCh",
  "key1": "5WVwawWNbgYqicvKW6T1xbsMc2iDs1Ldowkz1A4TiDSZifibPyGfzVPAkcms19XzGUgvQBm2nLpbV82f59Y69wE1",
  "key2": "4MyuaY3ah2PtroxkKd13AEPhh164gKFJPnzNFx2B5CKNxeX2RLAmYBdVeb8TLC3tuQQeEUpHczuhiJsQEJmH6xmi",
  "key3": "3KUfVSd162gNJSqdhrECJxZz3579wntobb4BCTR8VJmHbPRA7SQeC3fvGh1G4Vaj3qN21fpkAY88YMmV4Kyt5Yg7",
  "key4": "UPGfKv2pSSChsuEYz9HmhxB8wHCbeLeAfTnBHB6YnkjwsR8YpBWAVSaXDsaBwzqRyQ4QFR6kk4NbdC6R35GjTF6",
  "key5": "4jxcKEbLGyWv8DEqsTc4AQSBkHJhviTQpbPgz9KBRXHBRPS2E96kP6Zm5uPXz1c6ughzTQsUr1gi3463UhyFuZ81",
  "key6": "43hGCHZemeLdUSDa3zAH6WNJSZcgSSCqtwGx6qBC1Jh7EJyp357nmnBnYZxQBEgWjgTnJce3iw3yULGZQXRRT6VJ",
  "key7": "4xFXEnrUvhP5xdTiSYX9sxBctsN6obXtRMKoAzNsw85RU2RHJUqCA4j4CFU5wqSPQsn16FUsJYdt5xKPFFX1tuTS",
  "key8": "2c4Tv8NWKSpc2hbNLeHnWQyHPix3TWB4dQ6fZ6KgAjNHqjSH8iyT93hVuy3AzN6FuayS2tPZNARLug7mcEoAbpvw",
  "key9": "3ymK4uc9EiziYXsTetdyznMc1dMQpS8DuhwdFTwscSqrtCKZbMBJfcs998n6psv2aeBCueNmBNiVCCEJJ3691p1S",
  "key10": "3CWcJs7EobFKveKeZFKyckhdjtVL1pxffSCP4Fu8MZNXa35o6iQmZ4zCRg789seHPtfcuFD4A6GMMgpWYYBJaxr",
  "key11": "AA566bfumkWbr7oAhQ6mgeyBp71qqWXfmRhLNE7xQKha1vN7RTWm4JnvBeChC5mjrLFQ4aJvbyQMdp3oRycf2MU",
  "key12": "5aqPyPQmcoMqJqnjkJVvqeK8pauoZgZSMjoBUz6pC4YYUacqYAbecfqjFwiUXh3JPjqEsfjYtAv2hboFbxG3pNHg",
  "key13": "4E6GU5yefCS7AvNQ3arEuzgN2fxnFfJppFByEtQiVeGF3JUuY6FAAenqNjZCb5qAEUQE9rAFwMzYVj3LsvxGBmRm",
  "key14": "2vsHv4MMh6rUj8FrCN4trM4bm7zq6m7Rsv85Kj3oVxvaPT24hg1euH8VcRMgvCzxrkB87QoEmMa111SDyvAw1HKi",
  "key15": "4WWwNimfVXyLvoU5o4KuubK9G7JnQkSRHzV44dD5Fccc1gupz2BvucoTN78p6WPmV3XX5Euv5LbqkXnLfAQq2W7y",
  "key16": "EojcKBCBnJF3jFLGpADcPoKRe79UBSHrAe5u9cZrL9CkDFxjaq9n38BPkZ5FqogAqpWXdBZctjEsKkMsMi8niuu",
  "key17": "o4mX5hTqKmzgyLwsJLDrmcVTcS73TS3chRXge2kJ46PeanooccL44ZZwRjpESRFiVp5pYADchSX1CDKakXXkSRm",
  "key18": "2iq8n69g2osXaCVeY3fuXAZu1rwNnWER51VuniesoLaiaMEX83gzNQLHBXE55BYhH9Ba6pHBYxFKVsFijH7Aa8ba",
  "key19": "2UzHZMVPrJ6mFoQrhkoN1bFm8Ldg2nNwdQyQYa5SRhdxgqneJ36VH52Kc9Vrnt96di7ZAnoPhVtvXAN88keVrVWi",
  "key20": "4jaMpF88rmYznWSC7S2YK7kPV97AoQ3WLKRYUmpBKRYAFReAqWnresLcScCAc7ST4eMyuqh33CcpemFe11J5Hfnm",
  "key21": "ci16KrQikkH6pw3hcrUruU8YPpaVVYABZCBNKT5DMRrUGasXckyrtQAYmLod2fJehk1NYC6SHuzeLpLysykALqN",
  "key22": "xMo6nRct6n8XsX7f1WzWkBx1XQwuvnz8SSaVswd3MxBVBLynJpahqnCV8t6jZckKSkj3rDNTkCxCXU4u29twczg",
  "key23": "4rmdA4TasWmRinqpDLxWbqFsTW2pYWYKiQjEtDdMV8h9exgZ1G9di3AWHJM7HYWxQYoiB78zu2iSBY3biP2oqX5M",
  "key24": "3ZJi4pCPRQQPVnyuwwdGKFqSYYgeEKSMebNk9rSbP9CUaNQEeEXKe39NZxbdfya1tZAb4f7QXP5rXF8xyhe52Kcz",
  "key25": "2cbrLVfSLsURRZZM8Vzro2fEFc3DUNRxHC5xnwum3CLk9aPw5SeXY8UvtwthVQ1gA2fPYaWC9iC6iE12ZfsWUFrp",
  "key26": "35m3rNvxWJzkhFogBPn2CcQuoQd7PBM1Jd3VxZdbnLMqPAcUmpEsRhGav6KFF2wYnDz6yBxhBDGP6tcmB2pem3mH",
  "key27": "4npR7wpwWHdQPtNHAvSLNLSPi3NJjyvLG7BLwaG7M2iHH2HNMYYzJmAmkHQhEEmDvEQo7w3RtwYnT5AHCy2WEguP",
  "key28": "EWFohHop3zw3opG7RzkKPwmk4AZGk4fdBnQJq3Wr5Wa9tBVif8ADZZWaVchqt2CV7dLkWps3NEoGnzCDQjYDEf8",
  "key29": "gBW2VojH5gwtgfs1EoPhzzkQeerSF8aKSzhYLxME9cjuqfy2E3LCtZZgXCJW39WNRcAw9EWhRSSdoheDQaZorCn",
  "key30": "jsBGNeH8zTbKQmT1DKPS8AiiKbeerg5zN8mL8hNXofvNAYB8Ym8poGa3S6yT4EW3UogSt6J6ACwCAm9JaZmSk7d",
  "key31": "2RSzpHDusxZtamt2orEeTbMNJsZv1Nk27p7GF1vcL38f2AisnQqSkcTSLPzXidCY6u39dPC2N3NuHuki3VVbRDvh",
  "key32": "5QJH8WdSGFpnLhvwQaivzitLvhSFqAYdvFcbNNfS1hkXzADh8LdfQ39xPocCP1KtBt7CcA3mfRFriRbHpJxjjSqL",
  "key33": "wLmTH8T9GJBnCBiQBna7DhtZNnjBq6bCptKpTCnuhHxcogoJeugkje8RnAXMvR2eDMr7YtjfUC13Mey94evkN4z",
  "key34": "3MoGG3HXNrwxVg9pHFwKeUXe3DCDHKkQomwNPND4rv3skbbed1AT2zzHNKYvwseAsSDbbGvizJjf5w1ZFZmsWNoK",
  "key35": "2wmk1DMdAMEEo9TJaMV1ujWzrNhKgHaAk2e61iCTsux1qg4gTDNhEpYZoxnhuu4NG9q9N3D5yYv3C1LzM4uwcnt7",
  "key36": "sFXWoaxoD8hf2ZUivYfza51hQpNGFzraj4UtpFYpy7cBDLU1Gw7nPC9ypvukJa9Uqnq93zqjdpae4sHMJ9SVri6",
  "key37": "2cuRTRCyh7jq4pjsMuYBUYLVwBbeYb3Ri6fuZp6UQtgSnW2nLQcBiRc4oaSQqZmqVmMDy54r73dxbJKBqXxC7Rhf",
  "key38": "3oGwbjrKrdYiRLtHzMzTqKEJCwxydBbZrZUzAheuWce6KRXm69uCAVTFjT54pMQHJo56tsKfPfxB7jQKEzMjqzLn",
  "key39": "3q7RTxbP1MRpoJUbfJzXQ8nUEnKjVN5fLGWC133fBQgrLCKNJC5hEB2LqEkVzrFDVLSqfKyFEzz5uZK7vnHGQ7G9",
  "key40": "D1wFf4wJVStqu8GiynU5sujQhdDBfxLXmA4jD6wP8R1dMWhxvcarHh3phCTXuNCgiCt6PCN15dSsfuLty5CvBE7",
  "key41": "3NeGLHgSy3L2VSX4nsoF2zSmmz6QArQvpPnFzhLANnefnS1vA6Zy6U2wqAFiqD59UAJcUmbXpbctXQaSH4h11MaF",
  "key42": "21Kmq5DDGjAzF5KRpvt8doJaEn1JVGACJ4JX8DqHQLcL6sZeUSDuUNz4C9BBcXdRW4r2PjkS3APTqUiTC9RbGz4Y",
  "key43": "4TbGhkcgYNBDoZDuz4E3c41gbrcnxd4LW3sHh6wCA9P6cmWBNXmNWniA4G2fooumWKqLhToX5oaUKa8WUeKPJFeW",
  "key44": "33PKB7g564Pzwy5jqR3e9NENqeXnY5ChRx4mRN6JtXPS1KKaSLGhiHfykQvLhUt1ZxxMmhfSvozwWbPxMzcqkbs4",
  "key45": "jFkmavm5hJEF4b5H9SWFp37WRbSYDgK6sEvGffnFbMMj88gmDYGfkhk6vyhSenD5sKvHypz9iYm6rGn1LRqG9J1",
  "key46": "hmRFozn8VdvtMWXFs6Vc5snCzTFyffmabyvSkzR6KWb9B5NW9C7EUWxK9bCXc19pPgrLHvHpUWXxdxNuCFCmoH3",
  "key47": "5tCTZf1Pj9LZqHri87u9SqUWbayxzpQqnByZVMkVCQJixcAJdzKB8SZccEedF7Sypta8PXfBEML6oLBZYU1CYqB9"
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
