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
    "52Mi3TB6ygZjmG3We4nHRoZqFEaVgJwLQH1nV8zVViLJHCp2gmJsm5hLgZCy4EAyLE1cTCtjL4fsA8azv3rKWNAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zbDggdFmwRf4s9Vc634K3GTh6fMufu6jxEurvvRTqrGdWFfqP2F46K1HKfnDGQN1FAnYGfKVhMdbyH5K6EywU2m",
  "key1": "2DsVYKzwz1e57W3RaJXhqVRuaUVnFpryPYe3NgavB6LTSTHzX7PuUi8sJYBbYcHAAaDNSVdGSaSvN8ajH4o3vkC1",
  "key2": "5497q7GAwNecH3GUxd3wyNCQ2cvJ6H4sfZTXrTUAaZBxv6X94BVcMFQVrmnQg1rxe7g9ypFSofq5jKuxctqQVPx4",
  "key3": "5w72BBE2RhV1HTjqivDD319KDQuW2H9XqANKnseHJsd7Q7TJWzbywoRGWpafZvPgqPbmBVhTesAXVkifMcqGHgpa",
  "key4": "5QHMTcBpJhnShtwag5tsWa5E6PTBUZLwch7oTWhAuMZ5gRWZmBZcgsSqUwDeu5bRZMPcfp8Wc8Fy3DUchtWtiJJh",
  "key5": "2Z3NWgXffrxW95mLDQ8X6YRmzyp3MEFb7WYSCSUMHvUsAp1ZQ8TpKq1JimZVtiXPbhEojq96Jc3Ab8J34bmHQg9u",
  "key6": "3u34NLPKAfdPUTyKqcyPfkAvP3ZfhD3pqMSiUQ3LxNpLXei6e2Xg2D8yz1D3B6ErtEPdnNNFe2HHVZKkY34PRk6g",
  "key7": "5W1YgciFdrsEGMsEc66gdBWKt4br931SkjgtQPZ1R7VdhRjVX7zTNqH5SLvr7ZUf4tFWPsZqJvZQQ8s2EMAVwdA9",
  "key8": "23FuEmXEUz1BZZnbnoLGhbJFgnEck5rmPzBeHbRcEUmeZDogpaVJYx4ifrAuEBUrKNnCNF37knRhtVUjyrTwEEQe",
  "key9": "4jvP4szAyvFmoZ7wa9fK1xwxHi9yLq32e1TvjUNccXikZ5TAr59m2tb8yXHwh5SyzUXjy1Wqt4F6LY8jpMasWhVe",
  "key10": "Fku1JatxKLTxUDQeWPcFbZrJjVnp5QjcnHdvmysPBHUYveqH5E7zqnapBeRzvMqvA9JphbMQkBkY944SFxEhg8T",
  "key11": "a2YjwLgYt1kNRMbTF5oeZBvo675bMaPY27G9hfHnxmtsKhBqjUYJNjEMUkR5RzrwLzJEcoXE5oBNUk37Lft5bXm",
  "key12": "utmzTytwLiJHkQSR5J1MJsZZ3EtbutPDRmtLtc7sA7e1WaUMR4J52RQUS5jjGtfXAxZJz85hehTxR9b1Yf4BJyc",
  "key13": "5bZvJnFn85BeTtViJXBSbUVtWjzak8RmUyJRnsSf3YNNm64J86f8CC12kgjjvdnbJVpniJkPxs9r8EYXqeVmMcyq",
  "key14": "KodQCnYLamJsLesiSZyxiKnzcN41zo6yAUL6UUPUnChiJGxDJ8qnZnhxD9jgzeHyUzd8KZfSBvgb895Y4hfR3Gg",
  "key15": "3vxFjtNYpimJY4LSQY52E1qGkPkYRm419f2qJ7Dy6sYfy5gH9mLteL7LrmtDUoS4KLWKNaKb3U4vqvbd7Gi4vQKV",
  "key16": "57HCVmJSwT4gdRHsDNbeueqTBfpSGJ7jrEzr33D7v7Fysd8BP8AhxLqAgsyMuc7KSEWyC8WfW3ydhUzB1KPM1VVF",
  "key17": "2Zvi9ivvWSwd2wEkpWvNM69iS3Hvmg9xn9w2V13S7Z7w12kPKyUgSkRdcqGX4TEZcmREnhPLsMfjrFB3eWYM3iV2",
  "key18": "5u95Dp4cnzBaUx5RWPGQx6brcWeTMFgoo4K5sohfrSD4QdfoMr61H2uJE2MoYBqHFZHTHmh8JPiyDFFNd67S9LG7",
  "key19": "418YpSH72FX8ZNfYQWJWYEsTqLxkqLXGDQnNNP33wTV2nLNqcJWywXb7JxeRyThi92S2MeQijPuz4U4G2NUGkUpH",
  "key20": "EogvYK9d8EPipoqZUscg8dXNRJFj3ipcEpAYPu63uofVkBoqLfGr85U89Er1ptMosQBYAvRktx8MeQSUuDdafza",
  "key21": "4JSjrmaAbDynYQywB3Qd6SU2pZgyM7vRTJjxLkCvopU2VxUy6rCF12rXGsJTn9gCnzhSMYaiUiYXk4dnurGRBWCg",
  "key22": "vFRVry76hs3RjH4uG8gYkGvMSFGkjSZEfEpDr5qP5k4qvKUYtvjXne9Hu9SQynpqUc6633md95rMRojjEngu8XZ",
  "key23": "391ExKdULhYYxBkSwuEpreAqTVhvmRJKMndWUmZkpcNo9T33efvp859nc42an3usDURdLmXNY86ahKNGjhUnghds",
  "key24": "3JKQQ5bwxGmCU9Ft1StHFTHffnXzkrfJ9MhtDLTy6LtRunZM2BksGTcT9Vz3qiBRambYnffjijG23GXNDATnh62a",
  "key25": "16hy4cWRN5Q9NNvyHJiF5yprwR8W4vR7wKTLUcxmBjmpxt5BiPdTrgtAj3rNL9wmUXdbT8hyrNjVRKT8Jf3Y32b",
  "key26": "4nsbyh7GuB9yqeCLYePXM3C6K9Vp9BpUPq7fZvi8o2AxTsaxsn31g1asA5snFfRsgCKDVk15v3U6KRmMSnyiiHQL",
  "key27": "4pwDK9yhR2648hbcfefeXfv8jiDpQebxbCKyAoS6th7SMfmfXD8Bs7cqrvjeEkHHxPmdPvLC3pTT7hV1Xcqj1HL7",
  "key28": "5x6AXsopScrpvmKYrY8Zp6dM36faFeg9awhHkjWRr2q3Ws3H1LkLxceWAtVug3fyfSsLg9QM8ryWJb9qzhFKwn8Q",
  "key29": "3Bagorf37RcHrFzN3W3cQqWbr8x3zcRY5tCw2nZhop2BD66AyFsAzfevFwcKUx85xqSSpr6xxneorhduzTt2zsf7",
  "key30": "KKYacnFAyKPa2YXwExjfzoWXmxBMG4TGdm4xAEoJgjaG43yWYwhPkavMzxNmh4MtAX2gaBFssdE4dJqvuy1RBtG",
  "key31": "4BviLXBK5fsh6PvSVriU7EWgbVsi7GBQCP41tMFaR1YV4B4GGQyUpynzkrrV2XJ98JWTLtwueKaupd3oYJKrcD5H",
  "key32": "3DKTosRQ7VC8kpHaQbz1zkxp5MN6ehDTugtb4dzc8dWSR7HyLk8Mm9V88uZTYVgUq8nHDSVs7wDHNwbaYCqVk5P8",
  "key33": "4CtPnq2CdaMujmqUs9N8FUK1wyPa5BFfwvybop4QWiaawGAcJM14x5uM4kkN9KNmkb9xXqV2TZA9ooRJ9XQDSM4L",
  "key34": "3b3Y9A53DH91Gx3Bzam9tuo1NmYyFPNr9XjLVBUtfuiwSN2BXo9wcZF7bwptYAe34biAFrNwXzZ3DYpsq53LveHH",
  "key35": "23hDseP1b57Ejgmmzi4Mjuo4aJ55vLTR5ZeQpVGPYM5C9pvbDrhK1xMEFY2dhK9tKpAJsBhSyHEUbgFPAVbw2bhi",
  "key36": "4qwiGN4qCu5JYP24eJKdkt5JhcFSyP4yGrA3Pu11mnxop1rsLJH4QnXp2goztAHqrsE7BxgWfC6VCQLebkfrsav9",
  "key37": "5GxvCMnhEVfnJHMLZUTJqXTgh61p1hQWto3Np2KpM7Ug149qyTkiiMuMKoiLum9XvQXHcauh8ij28siuV6HH7XNL",
  "key38": "2f2ZaSRxYq33EJhQSkaSaqLwQnLi7ZQPM4bPkNZ7XxPdhs5puJhrv2J1THKh4xxzKcdUPKhdr9DFg8ps9Ujw5XFQ",
  "key39": "4NbmPFiazb8AY6wiuNURqQM4BCXctS8GZacV6aK83A5us2H5wV7mehmiFAFx8fYBT8UTGn2EpDMnGkL9eAiH4emk",
  "key40": "5FktN1Fp2iSfXZn9ddtD4eaMhofq9trgQBbbgGBbpHH7uFc8FasaRMBveD5ymmzDjAymeaRN8r6uwSMYz9UkG39E",
  "key41": "5NeqWg81VTqZYAdjDw9svmENDD2qCTnGMs5oJXP1jyydr8Pvnk64dNsBBCd9sCaodHBCVA7uToWFeQ3zEaTyWaeQ",
  "key42": "5tag6Y8v2RYFYB8mAPXx3j1QMdjkHCE64Um4re846ixHYXeaMTqaPWfqGLHGKVLD71QMAcvcfKRXyKHnbqXYPZS8",
  "key43": "hLUQK1KpRAQWeEtEzs7KawX5pSr6fgNnZrwwm5oGw2cBEYTrvpgmeKym8gHiodqwGCoZj7Pxa2gJyt6gUTZMSRL",
  "key44": "3ifrmbLSrYRyUwBtf9pCnNj58ukadrbppDo9rqA5DRezdjFAQGzxbn6Zt4SAp8TSPRCs8zwbYnJD6E5wBkiiRPeX",
  "key45": "2ReWds3M3zHmd68FvWsBi6ZmXTia5fvoXNSSHvHvcaSykUg6HhZ53SA8e4do8XFjDVRJSrpxsGdK5gAQKyUGrhiv"
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
