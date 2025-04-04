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
    "45w4T4Xqcph9WsyBoBrcRpeemrhGwppByzssMpt7UVo798ZAHrSiRbF1KfmCNcmiqN7MJY378AaU2Q7Fv389oarA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BCGoQvhcKFuVHzW6Euct9xv6YuzV66RnUaESCGSGNidzniTKijfAyfhwDdSGRWoJ1yqZrq9FYbAaq5PUbmbR8S3",
  "key1": "4xQJCTRR7L9yMqu4sjQKEaKxKUhB5NoqrbKsnq7dAFrSG3jbHvoQgzGbyify66Ky9MzpxHcTJ3DTj4pcjB93bcyq",
  "key2": "5sibnE7uziuREAfHL2xFuTs34d2UnKtyx5vAVRoKUdxzY3RAeyevCyZPQ2eSgXHjx5k6RejhYMxpkJHge4kqEoYK",
  "key3": "2rHnGYRQneacsnNzgAHe19LhX1ZuR42v5XgbUwmyrt4HuwF9kAigxLQ9TThxoSP9q1WcdzvUQ4bDi4z2WYh11CfZ",
  "key4": "62ZchjxTEgDpj1FjzNHX3hzvTX57FHTS1WF2fCgYWMNSrqKKPRGJioqxpJhtz2tq8mhP5Yd4sJWptDueRoz3fmVP",
  "key5": "4cx6xKZ6E8GPjbVrEKJhN1xBy9nLRaDXQxLRxJe2LqVY2iHRUj5ya2Hh1f3YfSdfTvEE42oMr38NKEhtjJLq2Xrq",
  "key6": "vaupgzZP3EoSCTUqYmRzJ1m2Pa78iKh8NZFcRiKDpS6d9PzG6dxE3jPpYQYE88tEuaCRDdEBH1Z9XdnF9JRVEQL",
  "key7": "61XFWPqgq1u8Q52RsP8EL1RCfcDxj8Bc6vf6NhAnSeUgNuRA5jCu6DkCKNirdroiVah4bKrRpgwdrrtfBYuNgCfT",
  "key8": "3zQajt42i1CgbGwi9dCZtCfKQohjs8F3yH6M3A9v8AuqLbdE8j7GjumAf25qbMULYZhnEYDkZzrZvMDDiAipeXWa",
  "key9": "qdhq8x8kYidWo9KvqsEGeT5M3zHDw7b6KhL8oDdVc6uCAh2vVYNoyKpQkvnsZXXmcLzfRdFnfJSpoWG1dXJCs7d",
  "key10": "5AkFPzMtc8HS7SU9xdBdrHS9fkeMr6d7tCwciR7GVvq4hS4PnQgExKrVHgasg2CvbZfuCuJrgH2cVgFqJ4xwcAas",
  "key11": "Gm1a8nBTQu9CTogma7dr6dfA1fMYR8U18j3AaodoMrrPsXoC2sWeTb79yWQ2YvYku5doSUWH3emMaAaSCFQHg2o",
  "key12": "2UntFr7mHEvbYz5uAf3Wv3yF1s8Wjigv1JXriiXco3JqBAYwW51K5TTV4N2jRKiGfS7Xn4epVjs48BiZTVKRFMr6",
  "key13": "QmwbCoZxcrdyzovWtJUyuPKBTHQ3BuyKNETeNKVZ6FSTreHKdv1qXUG5qsupBk13icFqtMjHcdfZbHK8idEd9bS",
  "key14": "4NtSeDcT6x1HZFxFtm1Un4PUqV5XAAdx7DUbZeUBgNhNd8KhSr7RdTmyXeJbzzU89ezwkqsA6wV9dHbMLKnkmgZV",
  "key15": "2tTefAUUNTbPexdycpLXGXKGvVHC8LHkiTjerfBLgUQ5LxBTSZxTCykSqiS8qtBv4ZSqRFY5fc7Yg6VS9NfwyxL3",
  "key16": "5Zfg6nqFMHEkGJ38TUovLp7i3TApSo3ytKx4SVU7RkV1tWZrxrwCAt4nt4z52BC9WBQ5FCHiboL7w7tV27Q7biEm",
  "key17": "rqzh9L9Gfcrn2gnrFdzyVtSpFWKAEbojURAnWLiCFKk4Kr4vhAVcapZeRK8Dd2ViWt3E4KGRb9eQa79aXrwaaSj",
  "key18": "3zY3QRYyTPMSie1UKSTs9JrkuxmXFbTmsCAJbn336THnUmncX41R9aghWFQkzLiTfMbDM1PBYqFqnGf31XMjy3Vi",
  "key19": "3ciLc6uVC2inj4kv3MosarwMgQLipu5TU7EEU3zuV63yq1Ygpum9hpryua7QEPEoT4PayYDu8UxJYV7FL5pHTmXs",
  "key20": "65iwZP4uenU8KkHmjtyETyvpRUwGy8z7v7UFHNdnEJyhnxyYY3ae695ZEMUo3p5YrHRMyWegGv5McpAfrm435bDc",
  "key21": "5aRZtcnB7dRvfveDVnePMHrJr9sFGuNAtGUea28XScZtEQkecvKHKUpCZyWLGpAL11JcKnbAXmMc19eWHW7VL393",
  "key22": "3UD95nqUaC8TyN34w1PxGsZV4K78mpwJmmpwp9afhb3MLvoCxSEmq2zq1BmhQeCfVMGjFnGTPT1HFUUYVfv4d3yQ",
  "key23": "1zMxJZxv4ZbLxScGKdsBs3FFZWYr3iwT5YDmuv4wZfsLqPsVFdXT8fmqWESsM4xQMcmGB254S2CDfWT4bHBAnLv",
  "key24": "dBnj3nyLaTcXyEcdFWDdfNk235VEwyQTNQKhsRbgrVnHNtvUY3PWdRWizmAU8der4vKZrvyBsdXDy1DoYb8uu3t",
  "key25": "5n67HPPdaV6jEWMDS74vJMQ8FsSzNFFzRWRAuRDjF6zLzhw9v4KWEC3D4C8aMv6Sc6F2e4qWuzmFoiNaPkHV5LbH",
  "key26": "4yNaLtSDefyPy6HDcenXhDcdZnigYKf1MahP4jBwJLw5zh6vbohAwDCPMw6AsbZgypeaNzxG6UepYRjB9y1A9Gfg",
  "key27": "5Lx8ta6Srm6hUu4nU6BfrmeBWSvrwxcF3r3ngCSxyvdR8W2UBxwxhHigyTEtQNmRHm1fhZBfsX47fTG7GrdyQgEL",
  "key28": "2v3Kte44diXeSN9o4nF4pTNWhwJ6B8LxsUbW84d4cwCE4y1vWjYcEVow5XiJA3qCRHZDnSk6SVte3K4H7Rhxpsxc",
  "key29": "3KvLd2D4vTwDVMmHmPSTViwCncrvxssdnRn2vArh32tsCLotNut2EDmEic4DrjWKnGerNBpDrJErMdaCdbTdtNUf",
  "key30": "5QZDQ5BpST35eGMrs8XNzbaZFJcSsazRJER5esfFj86bnUTcxdj8Urb4irdWrswMGAqtH5tYUFZX7vLfLYjzw8Q7",
  "key31": "5vdmHLYnDv5Q9NKsRFfCoCyoJiWEZoiQdqUgV2hRrcEAkSYMh2p27QSp2AwcegP3kaAkydjkshFN8arFJUXpCABT",
  "key32": "2r14UhkvLEt2LxMdUaBznLRA9sNmabQxw6HeYRcmpYjYLhcjXmUgqPgrYxMDgpg78gg3f6qtxFjb3tf9x16fm45w",
  "key33": "2shMr6dt2nW8nvNVL8WiubR1j1nCJHrCekcjUHuhT8BnttHKMWY7e6VwavqLF4k1TB8HEvPRfeVBJsQkeTJmmmqy",
  "key34": "2Ggx3xLEV4CvpfjU6wJmMX953DYfbrJ7xRjjYVpRHepiTgUQENEHvmuyaSHFVzkXL3wMa5WQG13VJ5r6uRmjeaSk",
  "key35": "51A3LwmvhWVEVEmn9r39Fzjk8Ub2agf8GdgBqizQ9MKfMgHf7CNJ8ahxMZSYqtLuUgriDPSyTrW6cGuaQxd7jqBp",
  "key36": "2mb4qvhgkFuXVpwsMvjUjUBBx3Qkq41fn4d33q56V1SrYFNN1qB5mXcHeVerg4Wetg9XDT7tkTgFJpVecixArXv9",
  "key37": "65yzEjhtxkiXVXkbPr6eQNg35hCZtfZYVZ293zFtc418QurapD16EaEVryX3CvMamxk7YayKKsX8umB24tWT8r5x",
  "key38": "GoLmQ5vyt9aAwCNod6YMBdWeZKdUwWFLd2tgRwRZMbSAoifiQZo9U3mW6XL5eB2ZSub3EM4XuDimzCPqJbwQNxS",
  "key39": "2Zpusm6mqntnJS2ZtKyWhYqgHWXPvN9LWmzL9mUp1Xj6YqEDCrACmg5ixB7Dv5oAc5EJP9MnWRLyUJXtzATyaSsa"
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
