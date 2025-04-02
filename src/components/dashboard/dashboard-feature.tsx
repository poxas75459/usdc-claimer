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
    "2tZaw7GXDNGGdwTJr4xFswWc632XHTAdZ7VZ4p43N687hyVPkqb49nRbJzSfRAPbiWvENgHhwMs5peXJCk7UeSWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vF4YUNguG9kZVywLmqBLMopQW9e9V6jV87UDBsWyEap3fqWpaDmDcRsuyzyxYMeQt6DNQzBDySyQ3jShFLLU3vt",
  "key1": "5MQ7fMCdLDdNzKEMQxN4WfBamF2aM3u25JH6nJzo58iJExBuZmT2gsZbbe5fpCLDBs2ee3njztv3xHFWF33jisC5",
  "key2": "ZAA1YNcVbJt19ps4hcXy8Fzrdcef3wmMEFMqBCgTMycevLnKdFw675rAwvSZdcCw74HhBcT1uyBq5By7LAWcoMx",
  "key3": "77x4ibcdSX4vvKYXDCohbHdECqu4YdSgQNsE4VmRzhtf7TEtzkog34CLBVtHX15NCi3ZWoeeNWzJLZ5qYASjT12",
  "key4": "2b6azV8ig39KJf7Y2iWFbUgv7gzVJNgYnegBD4M7QHR9wfj3zMypegyZm5tMAy8DdUFPLmYrHVzGJsiwivGy7MPU",
  "key5": "ECenWmGLFsK7Boe6ApUBZHNmGYWjYUrZmM7fpLDgtni1qZtNPRb4c6V14ivKFE4hBDMGTNYhw853YuSDQZcMFgp",
  "key6": "AD7MXncMBr8ThyAXMFX7NGh44WWCcCBRLmepBFr6XYYjUeusEE7jZxT194va7wwH4Si9NiA1142RoM5M6r1MAfU",
  "key7": "4VyhSTsUAsAxjedjHhuajXU6ZTXZXdHmX2SHhCAAitDAuj5p8VVEsXQVFUXgRqGVKazmrGzBLNmozSBanVpZSGrV",
  "key8": "3Fv391yu8go7BamMX55ySkR8SEzWMXrwfpyV2uKuHwWe5i7NhVidVCXhGguWpm6z8fVGXLxz2ZREak9864BN9vNK",
  "key9": "kADYExxThkF4g7ftqCxbX8cSApzQU1mcCkd6yh8ymdf7SckUYKvNQbJeuuxpF7BERMce4A5u6iLiskR65joR7iG",
  "key10": "4AvEgFG7po1azZKmWi6LfEpijkc6SmgtWaMGY7MytnfhuuPB6UVtXc2JpdKzpJELZoifJByojtpMBr2rGwRoYMBq",
  "key11": "VgYcVsANmcHv8eLwAxiRbbPRp5zr6dpXQUBwF3wzM6sUjSujm3oFZ8uDFYZbSmx63jbkCfkTcCXTvQkt4BN2WWY",
  "key12": "3qjNrVpSg3sWFJp6uWcZbrrfyckLQFBbHQtcD9pBd2XdGtf3yVRLZTcrbAq7YViFe2n6mN22ZufJfCTo9U33ZVg4",
  "key13": "2pkWKNdwtqqY32qP5CdCvBqeEuXqrYWsYt3gfNeXKwDAHyEz73kMVbDmLaqsrUx8BReBD6YrJi4K6cWWv1uNa2pZ",
  "key14": "5ZYSWUAL4toRTxmnqCnEq9o4woSVvt8jQe5ZwqH4BUrmmfKt6y5SPZzW8peapNzGJc9mQcG3XfukVQSYmatqjDon",
  "key15": "LsHZDv4pojpaaq9yZhKhqCkk7q1nQ83RzcADcgEFmcCoKvadzvdnLUDfhB2Vd5FpikYJDHZke3wTKXh9sGmdctY",
  "key16": "5E8cpNRKAyhqV1aJFwDxB9sSVyiihDqPXLXQYjuCywr13UsiHW8KnkcrusX79Fxrirfs1FDC75sNynN2BewdZYnh",
  "key17": "5PqAhY4ViLNYt2DtGEg27o5aTRWWQxXfbLBA8dHYMwGwUsMkp63tTxHs8gi2PBYnU9xqdUpdHyfpaf6Uunp9vifD",
  "key18": "5Kk3Z4iryR2jtsLHcF3u528tPTKeHYYMzU3xD2HjDDVwfiyboo75mXNn4SzhQXz6q6oXznipmQMARGSCy5A9YYnt",
  "key19": "4Pm3JELfyieLWHQaBqocqcHdmMQgtdFSwYD8NFF4qXaf9GVUDRuTdnKCYQgZsREJG9jPsV1kbZ1wbV1NDF9wTCXP",
  "key20": "3bUbopT58Fn9LQ5VEdbmhvMVL5rduzqCz94FSpdyBNk8expYmSVLJpk3MLnfUu9CEZqofiHq4WrNKTjGr7U4iySm",
  "key21": "zmzXYNJtzuMXEiyb96RPjWmmr25u2FVn45qWBFBuCeJJfoKg2EZcWVa9e2BV1EHbX5jgH9nas7SjMd3waPcQAFT",
  "key22": "5txJKhFJvSERA15n1b828xmKFBcx67BAaXCr5oKfxXZDRsByNUpMQnTRrbSArgE5wZjTPyDbTZWoPYYursFxJEKV",
  "key23": "66eAuSFNptSEyDRHpv4dbAJMdXZSng9X2F88Ysa952kay7tYjj6vgA5zS1ohu6tf767ckv5xf89meQCRzQ9RDXxK",
  "key24": "3s44nh9f6joZ9r4B859bbbB7QoWDr44aRjqnjRqe6vsF8Z7iP6YEoL5P1BtCHtQb7veyJRe6utSTqAsWMvgHtrof",
  "key25": "54udssbAtX4DnCF6czpDKdDG7Ete695js5XgPtQ6Vs7GN1KZxsfqDEQ15TtJr3fUWv26WBSrqojEbczPVv8Du35f",
  "key26": "mZTiN3cMfFyGtaJbSVPZ95vrVac9acKdW4bbZWXrtrkiyEoLhs14qsTz1cDTMjenFCWQei9mQp9oFoNFha1DzQM",
  "key27": "4NRQhMde18KKRw2m9rr4KRSshAXgaw58W4u2HLWkLJNeUkv2Ek2GrTMjaKxYvunp6y36LhfPCgeSVBBum6Hbpvjn",
  "key28": "2Z4DFigejDWnBKCUZ2GXc6j7JcC6FVXgqZap5TtFcehbgBv6ASL6NwxPPX9i7r9cK9DZTHLa4LsA17TujoQ2xoF2",
  "key29": "3LAJEMpdLiBWZahS8k5HvYPNTSy9kF9MA9KzNgFfYbL5bBpMdr6zoz7Hbj4ymf9bGpbPTconsJc2S9fLT5MFyMUS",
  "key30": "2Nijtn7avB85kLo8CaEh13uVsTgGWNLTi6M2stzUHaWmXD8Yw96AJgLst84kVSPFFFscLizWfG9mfqWhUhqFNLQC",
  "key31": "4KYWWPKXDd63sfTSavNNy82urKu8MDoqkCNKsgpu6r9yYCuVTWzyDHZ9LXV5TD3YYjR1rYKqSAWt3gzSV5MPUeJ8",
  "key32": "3b7SXX6DpnaBgLA3QPE4ZdHqaRh8cgjA27xkVpdZAEYMZ53kxxdTPe8PB9o78PvEAj5V5RcAMMV6sMrzCJ7txLmK",
  "key33": "57MpgoqN6hYeWT3zqJQ91P2N11N7SoAfUBXitrRssZeoTqWwY2fMzpEiZMxWyDVzW5Aq5KSnG3AQoFwNYMotGL63",
  "key34": "5S9fU14TteDKt8kZXvjd5qRmgQYdmg5XVpsJJrx9iL4jVEnsLHBbBNLe9wEU4b7kJUxA2UPeyZ2JXzCvmd6ARacR",
  "key35": "PnZK8pMdFBS8EtfPBjftGXWaMM66AGPVhUsUj6pKo9cEsQ4MeZBym6qgT7iisuTggB1BFxRmhtdzsaZnp8hhdG6",
  "key36": "5e7hryiHiX5BGPkp8GnkjU2ycRexkGEw2W4XUyU7KgKJN1qiHt2Ct2A2QL1RUjgzkgvFPDe4JcKuHdJVf1gDubVS",
  "key37": "dK6WP4M4GKNTbKBwwr1PJU4Asn8peZtEkCHv9SNx5mGsarNaufmHLvYuLqYawGviU6pv57ZRw6hUsUZACkZnfQp",
  "key38": "32xqTx7PeJEMx8mWb8rvfMhfP6YxHPfbBa9R5PZyLm79Y2JsMhv6TmZbVj4j1HXt5fzjfDpSqKEM1Aw9qxH2skrw",
  "key39": "4jmD2TTX7wKgz8JeQkQXb5ZxyV6Yxfshx1kH5nJj1HWVx5RjE11G2UBrVU6rBTE3XdzQGrMMVJAs1RQnowKwSgEx",
  "key40": "5EzT7DtWWEeb4A11gGaVZ8FRkrivq99tP2MKGztfgCjuM3HWMP8HHJZUX9Eb95r4ByrV2cvohn7QKThseYJu5opT",
  "key41": "vxsx7q7Vvs95aQWnFCyMuM4SmBVRwmeqU9fdmcfdY3hkAyb1Eatk5MTN2cQtY6Z6dUjZTqbDT3sXciy7v27ZvRw",
  "key42": "4uiLpeARZziJPamTeTDhh4LEKWZUzfTR6BqWsQYCocfc7iVx3qCx6TwodbFi7NNGeCroyGyjDJxJUzKtsVMqhWkb",
  "key43": "5YTSqzdFnuudErg1CNQP4pfYeRDiLtPXVxMNR2vp8M7TuyTp79UibeMJtox6QfQ9Nnpi7ZdrAnPhfjWb8iJRWvMc",
  "key44": "2zHE1gUS7EfmNMX2fmF87fxdWJHMX8SUxQsQfsnanhavAMAeurvCLVXauqgoFQFRZFPBpMUr8MA2AtXogGUdp5S6",
  "key45": "5KDjjDQWFLC3wpg68NPRSn4ujP3w1jDyedf8fQoHjAP5qT8Stt1awX71Xs16jAmwY3UWEfSL2tWm1A979SE3LQp8",
  "key46": "5CzympRk3sTpTqxECkJmxdeQdB5tJpMHCPbZYWCCQv75fw4AjdCbhhwGCf7YacLLVT8ejQRUTBY3mGDPQTeSjebK",
  "key47": "3ioKfhC2v8ujs9YMLv91St6UUTUFSekpANW4bTqeQP7oXUrwCAAYZSgW3TtdXmG8pSVuKnDt9MEsmJwfvTJZs6sF"
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
