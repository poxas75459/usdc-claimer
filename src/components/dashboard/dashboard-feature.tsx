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
    "FqGs35xAs8KpZqmxiYWFU2XaiiRGpFY59sjvf7duKyb493HvVM62SnKFZs1fpoGBGtPrD7kcVn6RCHq3rTrp8mE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PMpyZPKbk1M2oUFV8JPgimg6t9vWW61u6TaLcLc74f4KKJUEacUM92QuN9LKTb4X8vBY4Wy1GyqKhQUgQqsw7Za",
  "key1": "59VuzzLeDTLFx177tHoRYL815sWK3unqpTF7AX2tTUaP9xLZ3TdPYvPi6sbhnHSUBdScahfkeDZAn8VNvxFmrhN9",
  "key2": "4H5q9crwR1gWTd22Jr8E2B1FGTFjLRQV56PF23d1vkWX2tdjZDrLFqSdH1Q21Un5icm6iLu9bx7RzjRh8bjHaU43",
  "key3": "34ZqGFQwMpCMe7Pnyv5U5pTVD6Eq8H2Q2jCz4YigSGKkR7zKHmPcaPGYu2kX46SYgvYJCE4KJcEBqapFmw9UiHEJ",
  "key4": "3M6mpm1NCYLHAiH3W7Cp8BH195Wso2BAUwXJpDsvfrragpttS8Ux7NngMDD2TeejZiJz7QgFMWaA2iU58pNcr2NS",
  "key5": "35QcKoRfQYdsYenfs3c8WSTZtkTvkjuw4evwLu6eretoNn29EuTr43mt6vHp1xLrR37EFK4fvaSirDWorF1vWy71",
  "key6": "5Y6GPU8otJFccvwYU95quZkoU4AXkCJ228GBERvh8tvKvH3x6pgRvHw9sgRLE7KZBwj4r3kzm9wJVR4PA7RhdMYz",
  "key7": "5FLg5qN7oAR6gxdKRdtTBUHQwm4p6gEbgfaGUu1pWyaPhTysuBu5SXhHDbL8GuxoZVBUUzUT7TWQs49AftMv4Z9m",
  "key8": "2ktT6yiRnYNHKujCPpL8xAwAhHjJ4E8NJgF87tYsnntymHFswB3qvh5BF6uqH8UfwmMB9tVjPPG6SUWv8enfkSVC",
  "key9": "2uwbU7R8u5Td95PouegkQJdv6FCgy7ShLY6rFJJCtN7AmU8XQLWkjJPq1kuFswxnT68CXTQLN1jQNh3wkxopotca",
  "key10": "2dyxQGFpBRXAvZxggmeSb3jDEXZNvHrNUDPwUkEEPNJFyoTust3jLh4sM84mS46W2JRShsHLnkAxxcaouPSYxHjR",
  "key11": "3npUGaHxJNob8tKS6pG7bhbS9Rby5iJzs1RvarJ6aUvbkGgJ9K5ahHD1kyADikxJMibZ6Bq9rGUPRiaVQzmQdz9n",
  "key12": "gho8UM5GPrQq9odqiBcfyWU4ox7RDg4xLnyLhsuXVbX7Vww7Pz1hoVFh6bpGib7kF8YHK7aRpHxJRZ4b38RrjgU",
  "key13": "irqQ9bELKqLTgEmxfpYWGkptr3PP2KpWjsLY4b462dsAPEeG5eQgcVtCFYoqKAogaq43KTKvm5pLi8y3HaTN3h1",
  "key14": "5pYxVCjnzymMhCK4KLsdRw3WWuauafcXJZtZXhx1Wy5z81Nx6R5x8XV2QzxKQCeWboRHVYSzBfzzihMoVzz8rA1",
  "key15": "LQ78opT5bYGzHLoDQ6ftV8Tue8BWpSdNo8cwpGKwpkzVSr4cPbdCimTkqrCapYSz2fWNMkZpnktb1rQZxBJrjP5",
  "key16": "zFk8FxJ49Sj2hSwRd3hKjjo75xboSF5hHFKcMjLQbj5Z9EvGtcBrg7Q3gwizaRHUs4TRv1S7wZ81jDa6q5j2zxp",
  "key17": "3ofGV9QYmLiLdWdQFqJ31J2TaodvBcDJdCrVXfyNLrvhfiM2qo82i6Vp9ENk5nKKEMkVj9PdzsmUgTfsYK8oEvUR",
  "key18": "2RgzCUs3q7wXeVQsaGBPLoneV7vMyLym3zMeirogNZHCvWvBtq8L5BAQhGyXuA9CPMtjCjYV9UdJFmpMEq2F3Ppm",
  "key19": "5w6FBNee1ty3JiNAXWBMAU2XRhW7KXapKxp7t8T77Q18koHBeCmVF2xYmU7icTKfD9MvVVZkDBeV5XG63ifARw8Q",
  "key20": "5k9phZNujxBNoXSAZ2yNyPUAsWo4iNK18sTBN4bukot3T3QVCyPLXmbfMZXXhee4Gm3c4AKggBpQdYJZMDjdjwZi",
  "key21": "2Dy3mPC77LRoBWpSs8yRTvpdSd9SisE4JdgbNm1Dh1vDwkTd1KT3egkvUvtqcdLWQZHUbXZ19cJRUvmPRTHyWnSG",
  "key22": "51DehHyxvaDuqLvNbPVxoma295no3j6ieL9SnTNeap1zoGV9m5dQ2j9cRLtr7xsK92SkNNjv8yczjFp1Q7nGmmhf",
  "key23": "2V4qA7yUwxxaBgWeiqBwaUKWw6QdKUJXRFc68dpFEXp1ykysT8gMR85RDXEuoPK5oL6ej3NrdWwbovbiVke3VEqi",
  "key24": "4nhC6CDubMgvoNsBTVudEASQGfRqYDoiBsk7CQihdrkrw33rGCPPT9PdPJDND1Tu738REWUdd5ohEWn4H5VDvuZC",
  "key25": "3M8z96U9YsmFfAwGDwDvsShFw1y6kGC5eqVQdMsVQFQSaVhBBMUvRuUhZLvT8qWoVopmkYyPoE7oio5w5Rteo2cL",
  "key26": "ey4jqucoa6RNmS2GpB7Usr7YsVQMHgxjTjnj1D28dHLZQEjzppZ4CCAEpKWHWQMgpSwGFiji5HV4Wud4Rq6iaMN",
  "key27": "m2SVLtaCLyvvWcupvGuNR7CadYV5Wuwh3dKFc8u7L5oaZZyvdS4N7a3TbUh2CaHVZqrxSC2aSRa6XSHrDYLQh9p",
  "key28": "2WUSP8DZsUAe3xGgu3heYwW8cYtS9JswxME17gweNC8pUt3eFmtbAixoXs2JDuU3RFbStGuHxD2xvFLrTBR94MDP",
  "key29": "3asV5mVK16JBtu4iddEpuabb99BazWLNDUoX3xYfveY1xHeSMRiyFsqBDnc5BTrWv1QtfyVM48doyXtGoSvd8SqF",
  "key30": "5oqgzez5FPmsijbvY59tqy2jgCFUVybTjGUsdCbVxX9Gz46bj8nXPA3YEMvWcNpKZgg9Gxg4WwRZHCHpoEmLynMp",
  "key31": "4nZBWKfxBHBLbwARgcF48gcbgCJ3Gkrn5y4WvRmJ62LYLSxoboc9m9nJzVYJfzgqoCiV4JxS1eZqYqujPbQj68X4",
  "key32": "3Wh9MHTqbop1bZ6FEgYpUDzEKDuBmJoWXczJmvPDtKaXNe2qZzQCWV8iKVofFy51uSt5nZkApDbkXZfsT3JADpFq",
  "key33": "JHpzVkGp96JM6PmiMzn6GDF1QM8wAmgv5oJC89swX81rQLofJDXxGbBUxbZvYw29yV6JNwS2oGvPtiEK2orktQD",
  "key34": "5W2LN8i3v5YSsK1QJWWz16QCjUa5T9nf73uL1xm1GHUErhrwcuvD9McUTDN18BLiViRcJX3CA55BDYV67Z7of3BZ",
  "key35": "3bKH7ydQjyY6EGwFjgS9SUT5ohAPthdob2yqV5tMh5cqnCaKcM6iobdqzvdS2PGr41nBN5GngGSLJr49NTbte82N",
  "key36": "57ni8c2xSsSaTjkBT8nc4N4hWkyGmUgvHAVynaTQf6NuVQT8c1MN3BotF1XFnJx3Lr3hFRFTWYVVEsuq5wKD1zHC",
  "key37": "5qhwESk2v2YqX9ifstnGcMfM6ZRHc7NoghjuS9oA3hrXLuiz13jmSZ6bqCnvS7cUiLCwycZxBy6SiTe4xCoBPcVN",
  "key38": "2zfUB5e1TMqzN1vmd5g2XnBnQKrnhnxXe6KWhMP6YVpR5apkojQgmWQw9RyCZnwNu2coQ9NX9pk2DutbxNHad5xh",
  "key39": "9MWcmdeXUjMibZR9miETtPSpjnz9JjafZMeg4BDUq8wmTi96WYMfdfQv1n8npurkTUM3oJ22tPGYBPomcWozMLq",
  "key40": "4kmunwZSpMXzmo2Eo6cqddcK4pt9KM9LxTxXkbC8Y6PWtnpXJ9C3ABrQrcCHfu9pu5oWSKcYaNmDYTx3F3EhUYRn",
  "key41": "3DCtKzSNyDRgUkPpNcGsgiYPAiTiw2houRn2Xs9CmoHZVbgG1A1T9SCg1aPYDSyygqwK34AUYYcQnnWNNXuN9m3C"
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
