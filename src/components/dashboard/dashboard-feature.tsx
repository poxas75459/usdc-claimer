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
    "5gEgTZpJEYqeGzwPptydU4bn16hYaE763M2hfvgureJNCpxQkqnP5oYSYxuRSrAnN1WGZ2EdK63g5Zd1CWNdng3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pfPTbMi2u82L3cSXqcnQZh5FPw3qDPaJL29FrwRJkZsWCyqy7Awm41yMrx32uSRuhYZY9suJ5eXqUkGizWB9fGk",
  "key1": "4SYiuRauvrJT7qGXwZovafXqdYucRZEK7TsBRi6eAUXsXkSDhPPGPy4fEHpiwM7ZNVMQPYSiPFMuamULpiESaemE",
  "key2": "5MhtMEZKTkGSZaP8m9iECYPwRsFfxd6YR1JDsEfqeGLymPAFBoF3mJVouJc4oNr3oBaogt4gKwzkbsSHWCS76s3x",
  "key3": "2Yow7psoprbw9VuZeNyZiSLhgqDM5Wxu5z2767fDZeTJJPQHASy5RyqiGVP6pJmLjTPQnwtU5zpdY3pDSBvwhxTq",
  "key4": "5yvo6b4idjxb5cX86URuuPYQdSKy3RY3Eo8ZRk7Awu1Lw3tUioxxbqxU88jsiouvQJ7gb9drzSpaoD4P4ZPtEZ8j",
  "key5": "3v1sQz7Tq78SaLCZmL753dGuJTqKRcT7edeJb4diHQDoZurah3a8ieAxwYk5qbsYR7akGY239vsuzsmq8a6wrGG2",
  "key6": "2cY9aDx3Hxqvpvowwf2vWgT9ib9JwAdCJ6FDqctZs3zXd4ut4H1ujEavmcro8xcbJdYUMW1ckP84eQhhZJ3LmM6H",
  "key7": "61E9KYU4otTboGA715x9Hccg4RkehaMNqNpUAyiwDvWsXneVqh74kt9CWcKwRC2fK22pdEhif2NAzf6dFLUwmwmq",
  "key8": "yZJ1KA4e1vhS2mxHYk4rtbetMAZEmnh5Pirtwx1VSvhT2YwQaNAkFcj11FA6zsFPCoo1qfK5EiXwwNA2RaDqiF4",
  "key9": "3MXWgRLnjts7xGqkFaURHcefuLcmLQN7CdH5NxxBVaiz4iQhpNV7TmssdU2fdjzfCapwo477sPgFAc3LNzx2DU22",
  "key10": "myPyHdcc7RH2fT5qAcdRVYbboC2AeUZEeWRG1eqU6fG4qgumQ7HNq2KBM2YCoHk9EUuDGb5uLV3EB9KeL34FV9j",
  "key11": "21JwsHgXBnmn69U6doYdw3FVPeEkfr7cdBA8oQgw2RvNUh7QC5GDZ25Dc4xPv5V4tMqzWSqRfNddq8CacAejRjoq",
  "key12": "YZPLgJhLeXcGMjzJgjhg5QanjCx29rg4VRUq66aapzyQzLwuRb7axwYa3nNBhNeRHd1dm2eNhEX9sAQqNeKioy2",
  "key13": "63rBGi7j8aF3G8dV33B9mR3M4dyrEQ6Mv9NiCEQQ7xsox36gQjFy5PX9n2XEDCmbFtrpkrdUWdvZGxhoFY68bvYG",
  "key14": "4WZL4tHHoTa1GR3Dvpd28ufRy8poEzWR4u2VDZJVbfXPadX1sFdJqMwHqTY9CG3GX2zufNSfGR4pf18hVDAVUGDS",
  "key15": "2Xa8SyxBLY6tqUhAKfMnBoQ1dj5cg799yfeFNb9Lcppu1YJZzNRuvRSwuLW9NKpv2n5xR5WyPHtKC98h98dWQLMq",
  "key16": "39N5xKNGqac98rQTMztXvPdFLKAW2H6o3tGsaPHoChzPtiCLQmVUMSXdv9if7VNz5TBzcXVC88CQqWyAQgsQhdkY",
  "key17": "35RBfNJ4W6HGMfbAYUBaPp5SDH88Z94HQe8J36iZB1X5Caqk3AdXBn817dsv165v59caJMyMp3nvG63p2Hjko3dj",
  "key18": "4UpiP7UGUtmDVvUdNaJFeh49jQG3ptMRJecBNPag1TfBgj5ad3pXRL6yLE4gRTr4aMkyXscxM4LoWoAehm6pdSFE",
  "key19": "3FEbprgF2Rz1YzAguiRQve59JaZZdXsx4wFLCKPjxKKC9pfBu3DFDvAJSpy36HGo2WQEmke7p1NQ1L8sAywvZDDa",
  "key20": "5bvDiTBUVBYnksdpzWUxQvxiaf6UoPysoa2ThAxV2icrNwEqHg2wCkRfdFqWD8R8tFhRcUQP4j2L6rum3yA1vzG2",
  "key21": "64sZ9o54ki8Sj5qWYyUg3RzdZ2XyJhvp5CUwDXGHQsYo8khXZQWpnkpkA2d16xKAfGk2ECSgSGuz723bwaJF8wcf",
  "key22": "677rtm92sWs4fjhwnTg3Xi3A3wNAQufxbVLvxSSUqhBTDhU349jHC6mBR1J8autLeEeY87fxJPswsY6wgbSXJZdf",
  "key23": "2Hw5jcAVnv7BB3GwMEcqUWJXc35Cjv6dJGkPW9LQLgmnweibNqizpYWmUwhU8vuP5gakbW7XdiPqTFQnk4LNzCDn",
  "key24": "3K44wxouvYAtMtXuV8i4uFER88bWbrEbSvaKu6D3gtiXpcHSM4kQTTbphqrvSrPzyYMprW5m2eKVk3bV63HMQnLD",
  "key25": "23zyDDAZoNEYBG9BgBpAbPn6fr6Xeu5v9t18m9whJFBettkf7SSnW4s6SraWoc3rkA69C6fNKayLhNwZPzWjnJNm",
  "key26": "dMkPQLRxeKRux3wjbSAABD4jjEVtK5UEcHiy7MJHDEut97pBzBp5wuMV2fti7syKQepgmGTcKJF8TaNPnDRNq8o",
  "key27": "4gHwbgyxoyj1xDuEzAbGxR1m9QZfGjLkR7xWQbNjziNNiNHrieXg6kTnZYoR4MwZMWAn755uoMW2uPLZNi7Wz31J",
  "key28": "3ABzgR1K6fvxctdpvHAuwrdjbQSfW3PCKj4nc1LSywaG3uDYE7p5XiNRpEkQp5gf6UbzYwnnVQVXA3B7xas2cq6Q",
  "key29": "4zmkPgPnFsxS59TTTPmBb1SBk5N5bNDmjng8bK3gSqgmSgyBsvbgvsRRnEbHLfMyp3wDMusWKhc4zuijJz2sJQxk",
  "key30": "5iSSN3KBwcPVbymK5NQq3ffNVHup4gRCssiBy4MkDhouY2aSjwHhXydJnXfHwFYvVDDrXRjspzakHap8YFvn2g47",
  "key31": "39iPbod6r4KLbxMyKT3tco5UGQnL24fpLEZTLfLKsAMmjLxz7ySjhcsmRnDk25G1aM3YdMTKTfEdDjQw7B1oSz5F",
  "key32": "38GhJTEgxH6x93mciPpccddiQuHxbyvjEBhnhkqMdeTMc3vdeUqNKkaFiLQCuLAPWhi36kCAwApVgfgrjrxsF1Qg",
  "key33": "3ANNktR6zFsxnNnAPnEoz5h7ZGft9WYR4tqJdWKASWxMWWo1kasqT5vpcaayhiGtzcwsLM1ShigkUidpdWRtyBY7",
  "key34": "2EtAVqSZRVHCH1id3RNBtTAGDHuwHo6GKozWBKbkJNbujUa197BAJjaSMbfX9NiqjzwFCeuYiG2vESZenK8rBRN8",
  "key35": "2C3tYUuH3rqZqE9GPeGk1pXauaNya8NgWQBoBcGBWopNN9SfjXaZKSNQdjR7Nrhx3BkKJoYiqiPK2Wpw8rRQSsSS"
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
