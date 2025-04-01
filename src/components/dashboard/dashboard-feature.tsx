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
    "3TW5EmjJ7F6nYWeWFsqQYkfBT7wMNmu3ipqix3bpGnhtBKSdbj7NpAczZFdW52nZYCx5YhWYq5myEnPjrg8cBp1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kXYkT6BqCvmpfXWbHdfSTAqZhk4C8NqsBQVwCLJhgS8xK6iZCF9iBS49ghLXjMGDsAJoo2L5fb4TPfhSU6k7o2G",
  "key1": "5pRxmSyn8KVKkGDgPHsr14LxJaTE8NfRkQ5dtQ1VqAhNVozQCkfRJjcdroyfZKaHvBtDKZhh76cHYYcDG48im6Ni",
  "key2": "4RBH4EYzJTAL649FyUauCWBynzjzbTSwyqbvrQEw4RkujD9tZEqoPDnUXgFPkCDqUVfpqy4vVwyYHa8YqDpC12KV",
  "key3": "33YXi8sRD5Py2dWHCWP7aTBWQ7178HkiRon7Mx8PdUDttNM2umLZSzxKkaYm25k9GnR9Twf14xnuMQUxiJkVhPky",
  "key4": "2uoWfbdcNXSwezXbWFKxrgozWVF3mDZ4afVqSbgY35QydWCigMdHuY8nyAcu46QC5y63UuZvKhGVA35vtAQHBZN7",
  "key5": "3KuNcEyR8sJKKvFaronkuzHSnnPwd26Qi4FwJiaEh7bWdmX7UGSq3pUGfzM15DHuvVcmgnH4bJTtPVdS1SX8yT36",
  "key6": "34yTQpiudqpo79yZrbtT16TCFQuJ2MF3dx3qS2vXn3gzhL4BNUcRqxsQo8fMwGutWHsFFrgk71MgHEvT7jCSAQ6R",
  "key7": "2TG3WgzACUPhP1Ti1BctdXB5Vc2opTfYv1f2hzazEzwzshkyEoFGTxUWpiUQz14J9CF1Cd62sUbCEys5n3xDFUhV",
  "key8": "ZhEGZjs5HRz1qytCQSFNafmbzWtWRFPsTSpP5hAZo9jwjYSjtUoNAGTpixw5yzkWzE9ZhJ2aqh94Q8gLLY52Hez",
  "key9": "2bhBsZ7nMRvvBSfQQD3GYGx1yiR4C5C6H9yGQGi1x8oQKexbmdLipeiUdneh62mYwmgJbksAi6K8QYJgJP7xhwed",
  "key10": "2ozDkPzFEBpsc2nARzYKawgXzFDGSy8WyVuNp5agoWjyGdgi5u2uvmfN2dHckM2D7ncPZP5gjG7gEkb8rj6LGkHr",
  "key11": "3R1phifhZzMWGFUJ68SGDiSkuvtwg4XjathccJXT8nigrYF541hiVSbBckRwHLCwmuVVJu4fmLXTNg93qyAfUtp",
  "key12": "5jhoJ8aJ5UhQZTWox2PUn8Ms5Ab29iYZ1v7TKznpB92foyup7A8s5ruMur3R1itCDgi5Rn6QqSdrdrAWGPCk6qBX",
  "key13": "4Q5YD9qekf2k4mj7tQpnYBB3yDwi6kvTnhmZJERd111f2qLmGVnAYWYQAEauiKpoCcd81HRboeS3dy5gyPaRfEmr",
  "key14": "45JaTuMHe43HjtnFaKqtNAKZtLKpC3sas8e7sKCtUnf1484J4DePUhgR5mZ5BoHFFL25iEpmqxjRMF4CnKCFtomJ",
  "key15": "38t3UVNtT8q5yWJFTp9x3zKeKYENrmw3njoWg2B7w1PUxXMDDfnKhuYvRcJGoceHdmZmrwoA9DmEpCaqdjKib1EU",
  "key16": "29e9cYW6DR2JsWUfXFbGU8ktu5vgKpUEAF2sGy9F1oDtN31DyniBaoNetX1dp2xU2YbMqV9SDWbJ6LY4idP6miJc",
  "key17": "212E93WzXT1CpUM26VW5qKbjRVCcnuhfPSTZEBEixgZwwPidG8jiTp76fu1uPEJ34intXRV2dwuUsYCZpVW9jhsJ",
  "key18": "5e5moA6dHYYQtj1aeeuksbZKE3QquL42kd1ysDCabwTso7hnmKBYRuNXkFEugUa3KZsw7SD18AcpiTPu2X2cjm1",
  "key19": "5un2PJuqADt5BSEiLhyEnqXJ1Pzvjk8sM8knTRfMDZoeEcbBc7nRVK7JfjuMmFZraDnUB32zs33PtnRdiu9XL516",
  "key20": "3i4FqsQkeA5VAXUbW672gq2JTvZd8NQP73APxW7WfkjWxRYuXfNmCeSSbjHpnxZ45PJ4vNg9gea2gUNn1hUWpw3Z",
  "key21": "3DtRrEs5bPAZ9AuXX3E6wv8YYPQV1U6kpdf6Yh4LuBY6jLYmZ9aeZBYQVZkpzyWxfheCeUkaTXwsf6VGH53VwET1",
  "key22": "56TqovzWHdTSgsVXhQ86uMZmre6iGyNZQyYLzqAxFykqnGZcPpKXxHwhN1N7iipwQqH9byoXv9g4tmN3FqDvqSye",
  "key23": "49nP4mysx4mrHfaiicf6YQUbLatewJLqLgezqDpchx53c6sHvGQQsW8FehN4wZNKHXC32UoswxVWSd5b7mmoGpTc",
  "key24": "2j5bk6WJxoG5WKgK4AUQy7GUxpzx6Pv6Jka4A8DFxcr1nhnVoBJqn4f8bHXNtmkgXzWv7U3yHXwz1Lq5Qhe6jJCS",
  "key25": "4YKuJVpfHbqWB2eQ3jBKWjh3LGxeHWA6RCYPV14nLXRihqz6YiYixEScsm7NXtmhfaDCuTMYVvuDyzubmJxCEJSG",
  "key26": "4MALN9CvUR1Hcpx9r8VFnRqjKmXgnpEjkQpQ9UYyJyKyYFZaoSfvWQUEM9NsVR7maGm3YCvX4wDaqKM3CuMWEhSA",
  "key27": "2t2Qqggn55pbbRrrqrAhRmcvM43NP7AtmKwoaXLkctCefuZ95hg6XKcV2P8pyDzFu7ZBr8AHmj2HLDm2q7MQAHj8",
  "key28": "3tb71aoHdoddQuAkKiKYJ7mRkCqmZGrrChDh2tp659nqZTQKfgZha4rW12PJUzbbgroPFsFuSvL4k3K1BsFJW15x",
  "key29": "5fqyegC3baW81PDb5nRiQCuTgaztGN1PEVMPnUjQgmNwYL1FTFZDkQmqnUh5rAkirodmNsPsxAJx7VtsVNE1YN89",
  "key30": "27mgtKwuQotJ2TPjRT3PJ3XNWrEkdE91QHBJC1i1HH4NHs32aYrTYgntggUv5GtcBVgzrVTwAoH5yeounJDzgb5C",
  "key31": "5pHYWugxbVi2GLQ1NSk9C5LvYRdFu2K16FBXjG3tBWhZz4Whcqr1VLU63uihgnct8UFZHszhmJv54tWxZTX24iRo",
  "key32": "4KWz51VuHMpbcWXXa9ZJr1hkDMwDsQZaxwus4ZVJM4WjjVkThxWofSZ53A4jrosPwFmq3phsPWW2QA5uMixdxqJ",
  "key33": "3ppG5Ety9ViFV9omRWeoH5S5YfK6qiuQPrFaUAEGNKoCMwmjUfXyas7reto9dFP63dt6fAPTJGRyPHgdtaqhfuiK",
  "key34": "4GGdSrRwBzpQvDFXJQewKJqMeMoM2Sv25csEnTQzktxh3RXGH1Fe3HMRDmhUeWcgdDhf36xPuXZTjSgsy6SLY5qM",
  "key35": "39ewMgZX3KoS6jTRX8mAwDicugCdJGuuBNCXy4tmnKKDegxWJPhpFs422Griqp6XY77MuEg5MjX566TF58aJQU5",
  "key36": "2gS19NxwfSSvC8NhoQhEXBrfhaNSW8FjZBkwX6u4cR2tQoVuwFopwDjiUaD5eZA9hb23KSXJUV7pdChqwap4txy6",
  "key37": "3ns6DpvocaZEvaA2CeNZ7DNBooPtYDNVVG5ywEcSUM2GNmVxuByQjjJoJigWvVzZT4DcpeWKZo9fzza8Er4jEUtz",
  "key38": "4S3k6a7JcSnSsngxxMN6T3P9gC7bupZ41xNw3oTbRqCoRxZNBCJuG59uUeuW3gBPgeVNaj2sBRPz1DQYTSRiueKa",
  "key39": "qyRjiUR2hJzHuLLk5J7GwR8KX6MF2n4XnUMhBUnUQAxjqq5win3DicNq78vJhSr3DSuXKZ1SH6QWhy5VQqUfrcS",
  "key40": "4RD5C9pPgabPQ4Bx2Eh2AGX8k91hGSbhX3E7eUq2fEsBuAg1DmwLB6WzmpjMVYYubaE9johu5b5wiv3BQeziPdxT",
  "key41": "4omd45rMp3YCpZrDgSe6a5qPazGY8tCKGE4ygX117xhBh2HgScV2SxZgBFSzp4tHAmzwjFCtXsmb5zB4tscVm41Y",
  "key42": "4L5cKpsN6Xcb42ggpnYCdMFf6fj9jowN9UxcieDfZsDQav27tVdGmaUJAxUniLDEt7emqPnCTKbjHsQ8bAnrG4gv",
  "key43": "4NK9pkoERup4whDx4YHYozMhH4snVaihbNq3pbzQRi2KW2BTvSFavtWR9fmrS8d8bPEXqL82qypbddyqeriy7zMJ",
  "key44": "5wfc8833ZYxmNBKknK6hpGoe43mLPHBanHqkgqeGr9Y56EeNyq6LiPYcKmsJKZ8Y5XYJJRYFQs9coz95Wsgt2Pn4",
  "key45": "46oCeEAjyXU7Ehh1ggw1MVBc6iSZtXyKdFGk6nhd6XD9KEgvUJZkR2PS6Gf6dsV2N1XpsP4kA3pA6zRo9VJ7bUtm",
  "key46": "4xiGyZcvNzN4Mm4ZtszMgxgCdckSpmRHhHJqQuRkHUuimTCU42LRHmuLfqwP8nkivu2PvHWwrNfCX4xGbgNita9H"
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
