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
    "2ugiG6Vj5zdc7WeesPvZPtudxyFdxb8mdVgX5oq5W6phX8SPvatxUB3zvX3aMo64xLiLwQhRGEsnzMCzWJWrhJSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p6a88JobooHYexvwY7GGaDaiTi8BELR2rB2gBehLavRDzGNpE3om8jGaxTh1xLEbrijyAXWVXPCHWxfPD67TTxR",
  "key1": "xUhqmV9pe5TG6JA1xgF7dNYUBNtKErhGuqwm9doY7d9u8qpQHfSBSYPzteEDu1sDaFnBgJiTDM4wxeVqw8Di3dL",
  "key2": "2gDYThV15Va6BeCXyrfo4mFsr9W9aRb66DGxqKUSBnxrso1oKSmANoTd4zHZ4hgJ79nttwF1BEuYZerqA9kw7gyi",
  "key3": "3ynAEqpZdrkake95NPfarDtAXwJHJb4vM6GMvCwNg5i9ZkQRnor361b73VBAJfbroX2Fi618qZFdEQqNpTqRu6V9",
  "key4": "DSHS9jwVKvEFYwues6h9Fk4EXj3Rpoh1sPv3g9m7hVpTx3vAFSpc8kSgGJEQyvw6DcqcXnC3bR2BquMg4q4TNxo",
  "key5": "5CnBhYSFP1xGgnXaRn9PsdQPA8pQRb63Htjih59pGrhSZgRVGAc2Jc8ATY6fXNhphAcuiwPyfwzoz4tKmLgk35PJ",
  "key6": "oCjGkWQzymLcuFSPggoSQ2igybGMDkAoKqZVVoC2pXnPRjQCnQWcu6BzrVPpno3bXPx4mKnq5y9NLQAfYDs4y55",
  "key7": "4txpwR4iirQDiGJ6JHn5mUKaaLzCoqsmuDZgYU2pLWxdRsC3MPpk5LnMQDmV8FmXzPeBWUiv1k6u7wpqis1A8Cqd",
  "key8": "3H4hwD8kHPiAcUyrU6wP4C29quSZvekNFvMdbMDponCDXqk9NxJW6i79rnfP5Bpsk8FP85DBuWhKFm4EZVUrTCSm",
  "key9": "3gncFD897yiWcpucDUoxB9NrqwUkdGeQFd3Xx4dC8pxkWZVmiTdZqbG9ynZ1Ziwrp27vXTkN5MmHBRCEb5rebKnH",
  "key10": "5dWTtTkWXmfWHxrZRoFFtG6c6ZC7SDBXJiSyx7nESERZfzsZDdtiwfUBzLDmRXYoSTU7JA7JeJi26qhKFzBsNpE5",
  "key11": "5MwYb23urFJ7d8Q5DMJpBuzRD612BCArU5ZJY5cqifqJeagJKYZM1jBjbdwuEU4h7ksJt17DYhqyrg29fC8CqqWM",
  "key12": "PUhDKA4aqSZHvNttonRfzdgpuu3MYBPe7Nj2NyR8vjXpmrjcgUQurszJnHZLn6YVvfM3k8TgtSAZjHAGBtkHr6G",
  "key13": "XH3KrUnmT6QL9NFnkoxiWnxRqNoCG6qU77t41JrUBvYEq5TeZnQt8tYeFv3brCMHBTW2CQ2PBRynxLPQitktwND",
  "key14": "GUk7saw8hr6yTiPGbZE26sVMX6GD7E32VaPCwhwfMvCejDm9h9YPNTmiknbTdB44jSJhnALCQhMAvXBGNLPDEnB",
  "key15": "64sLxU86f5jjkinwvXWqFijSYhZrfqzoNxaoQLMdeD3YCswgtCbhHdBYVkvF7taym53KNzExZPgjwiMR36NTb28a",
  "key16": "vog44ecdXBj9fuY8FKiHaoYovzMa4gt1QUpiHMbo9FzpnxeCjDwekvzpAEWX4kNmw4LykLxqqqqUew2g9Z4r3EV",
  "key17": "2GYSrqU5KdcSUr7ddEJ9BdLgqxp6CqwyaBh2Ub7jHmJJ53cFCw4KkRyPhEtmjyszMMrNCeqmv9r6ezCP4DL1XyvT",
  "key18": "4KEmG357Ep27SXYyjRdy1WLT4m4D8AUuRhifxPv7tE8tZCeVP5hgnGkx2Q1PWZzXxqswh1bR4hgN9S1GuXP13s3G",
  "key19": "2qHpWWhETSU8ab7dNDNU6WabouCkUDD6yRvXumffaqB5ZSwy9xJVXgQEqxjcdXTa36mZWEoFBX9oAqGRxUUaS1sF",
  "key20": "34BkyVQs6VY7mjwYARUmuyZkWagTjFEjYmznsmqntmQU5iMob3Euu8ejFyUhGK12Et6hy9HDYmgEWHLknD5md9vi",
  "key21": "39RfHjeEc9XztQeSziRzbUL37NhNBta1wF8qCg1cLY7qtWUm6zQc4fp55Rb3NUPKfPZeqJLLREUEFasB3jMK9nD1",
  "key22": "5aNLs77V44YVWhai1c2SpQU2X1Ht2n3HeaVzztgMGLkG1XuzmY8Nib98bbi9znLj8hTGB4JbNDUVz42x99Ji4ptq",
  "key23": "5D81XukxQVoGeXQXfLBrRFowE5ZGwFHj5N2kYbt9ZFwNaCYU9QMBKnqiv7YTjexiAdXmRBAoZr4ghaXAhGYrEWGK",
  "key24": "2tKqDpMVcQtyB28TFkyb9DcXKnVF22wzEZXxzycvgUUijhJo4SsVL67ioByifBZzQGEpdvoja35Bt7Xg8hmG7CkV",
  "key25": "4c44NEDTb1cXWaePkfoYMBVP1EoeJjRnxgQShoXgpz1MJN6ZDtf23HBee7kX8dTca6MGXWAbZBgbUzuZrtT9vDDZ",
  "key26": "3NrMB1jhZbyBuAMAHBjkQhMY2zdpvpETBbQw8RBpHyzvVGXnJhpg6bTF6zjKAWokuXa5fANX81YM6y8bWpkWNvo2",
  "key27": "vx4CjcWM3Dm86dbnEtshVk2BmRzmBfy4BqvtNp6y289ao9mM7Gn2FrxsFKEaqffw6knb7oBuXWibFbztpHxCqaX",
  "key28": "5WBRWLX3XyAmZcaKrbiwTb8mirbdzJm72XXGTEmYrdquGzGdAZuscozi3LPvu18GJwLxN3ctb5pkeAhjiHkRB3rb",
  "key29": "5C9Spq2yhJvUN3zrk3Uszac9m98aJGtL3DowCdd4fwDFvcWMxEZXM3PKvVwmjk2PqUDe9UkdgeCcZkKiMHnf68ve",
  "key30": "2cWoZVxYVx9AuA3hYYgtqJxwtCJpZzBu4m1xmWb8RTxiGH5W9yKr8hQjsCTwwFAGteWNqWMSscQZDxGxgZsjE9BX",
  "key31": "35qkWU5at29bSpJipai2HyjVA8d1oytkaqkb2fwZeWiZ2WP7j7jo99RDoogpc4p9Enif3ghyRAVEwEi3YPeHaBk6",
  "key32": "5zPNJdn4dHptsJuxTRpwRpaWR6twFJBuPVSnXojky1EEWiBtXtL3aE2k9J1CKCVdPEDHedyRg5woi5zpi8w61Uco",
  "key33": "52eyDLLCcWNvAtQp7jRg2Y7irWVuUBDRstNdRDA1NHGr9K8ULB7ocaqiAt8DFvDYAFqSUni2ETrcvgkzc5mMp9Az",
  "key34": "2zU5WiygXRvwRg2siU34FBWLKsiT5drMohYvmu1oCcpPuhW4wS8wfAhWBcNdhgGDZXx1w5Vg1h6TTV3DvkTM8VST",
  "key35": "62VqE48oLSCdYJDmzFdzWET81GgGNzcPan6VQ5h5dNfyhiTCuTdhmZMnZU29Gsqu99ypmmZUQt7krnjBbE8378RT",
  "key36": "W7B23MX5t1WhhQgeiZ7NGAcQs7hrZq9HDkDJuTWu135LmgvpNoQXhX5zHFMkRR4FxVKWh7YZ4QUj8tsL3HgKhRj",
  "key37": "4hpLbutsvEvPUVRoDwujn6ivQMgGun3bk9u8BcS1sV8jVjyiWwbgT3En3Fp9LyGrMHHbTofjTsA8pRood1seAJr5",
  "key38": "37fwdMSzNDb4j6AER6b8k9SBA9n3cVSiF4ETQv2fe7CwoQ8B6bty8ViCirrTZ41Cpcr3zVg84jdJSb6kKuuejYu5",
  "key39": "4wqKHzGa5PcDrUKEfqhyy7F2PjT2qM7FMtU2Qu8av9tvzjC7hJJhKNnyoqQFFonPVYscX6kL8rCmNCv973Ksp3nQ",
  "key40": "4sSYPA7kwoV75avwGwkpsoxuwSVHi5GrobHzHFjZzGQ5TARx5BmPuMm1yrbjskf9hdxjB7UsVAvwLhdU97LFir8E",
  "key41": "5ZMuE8SJb4v6A9DwNjaTvF4TU6AjiG7nCauxVCDV3bgGT8992FZioxSPWociFvgJm4GBiVU7bkkPPxp8w59GwRgu",
  "key42": "rcnsQDScJKdCci1JnBLxHzJcHkjcvpZZ4Sc2d4oyqnSMdaVDGRiH46AJJ7Y9TVqxMeogvJa4SJWNEAnQerjE4PF",
  "key43": "sEft6ZHUhTwsFVnRwJ2eN1sBcRAY2mq1vAYyp6JFp5tf1U1b9wkQR9vsMaV7SM1Wi3JXvyhogrVQq5CoqkP5zsY"
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
