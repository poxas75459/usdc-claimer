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
    "65nkjsm1qhmCZ13SsgXTFCvzcxkxawVJdGrZKHtZtBWQBdtGqXBNiRKDTuoVB9csqgCwMMViThGxeLf7JHUGvtft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PNZhQXm8JGLw9mMXxk1ZtadR4XSMTL6RHhwXwmfyFG1R4RPmwgfJbS7wQrFg71ffSHwPUp1DeocJPCru7SydEkn",
  "key1": "5vKMrc9PPwVLU2nWDSSgjdtQ7qPyN4HG867jymLtn7R43YA5tVNmt3H1yiBHhVPo6A97r6RKpbcRGGrzmRcmEe5n",
  "key2": "2eFUdQxbDtCFNswSrZCPUgr34mjSrBMdiJY3y2juYUAHYfvgfHDFDqebcQ7BiKidvRDLTbYfS5pjsT9RnsEAvDdj",
  "key3": "2mN8PWwNecpKv7AaqN1BcKjaJ8MSr5prUvGV187JbhVJ7Sr1e6Jz9AjfcM8Yv6Hz7myHeGNWtaUPNiQy3UWKJFhT",
  "key4": "2vUsh9Emt22P9SfQV6rCXhee9moCyDScxNYqpDyte6EnyDs3TD5LfJPa8SvaivacTYL1ZYyyDyTiKMG58x4Rzmit",
  "key5": "4P7TGdedGHPBcgnBgDFhWmZz3784sPg52qvk9V6SMNqN25ov3ywahuVt5tvYwfxnT67wM8eYZeaag2F5p8JiBVPF",
  "key6": "5iPcSab41nkceyRpMTGHfRxYsS7veNWMYHUcY73V1895KZ7Tb1nUtbtjJyw5sDw8Afj4e8BTqrXmsTnpHrFFfA75",
  "key7": "EpAYska6pe5LqFkgJ7Hbq5bdXp4e5DjNsmr5BwJCNotAWZaALk2iW2vrvwqJv6AmSEW7bAUXHf3vvKLMPH1QJrP",
  "key8": "5fBCehkNLjMJpGGmTiSnyuTidcjFiyjFt4dJ4QsmKBpLqQWy9mgdpXCPr64pr198jgyzYsm9QZu968uQiEs8LNEw",
  "key9": "vDzYnAsDGUc9Nnnc6YRuUeME7aBaHwFx1DS4aPRUDFk56KKR5adm4DwvwKycTyk5rvfkH6SjF6uBdWxp54V3ue4",
  "key10": "5TPUFRNPzwH1vy782Zu6XgGv8NULT5AfBoCzvMN6Z53cUkKX2EWh4HdMb7BWsCzQdzE9PZcmNjoHfMvNQsptd3eE",
  "key11": "3aAgLgbBbtosXjDtYZiKjbk796y4UP2rDT427W6tdDqwfFMC5facoHDcoThigLhMWUkBwRApj2MGWRiSzJS2icjC",
  "key12": "PV1ohMahC8jkYs7T8dNLaR9a1QmSpdZjeh72V6ozQdtcBPeTBrgUZ4P1tj9vCcyz9MnNLXcbQhihYnZ9qp4GsoN",
  "key13": "29bXGTgQqyzDqLhFnmvzjkyWsjoH4uNVF8WoWFe8XH2XuLBVqqoF8Y5EmgEU55a78Ey4ZqBSBPm3rht9fxJuRRe7",
  "key14": "TfzZRFJqSfcLkYVLWZGh5iy7NToD6YtMAuyrPDGmw9bf19LMGx1ihnKkNkXV6nJo3LGfoGfgo6Li7VrmHTx5Stm",
  "key15": "5uNm46FcuAeZ8YJwYzxw1XBNuVZDVmaHANBtPxGKGbTeGheGWVRhFK8eTspRZApwHqTazhCPBuwUcpNrEuXYacBa",
  "key16": "4vc8wnQZYHN8Xoh4VaXHP13Ysf3Gy4ep9mz21yEd89byN3HUndvJ3ibSP6PdrvXzvXkMQVdj1bmJ5h68gJ4Sjx26",
  "key17": "22rMvDTxFPKrCaD2oaWgtrLcY83yopjnXTJxGvQSmpP1uBi5GQE6cCezbyzUT79UCCsYLP9EJrGrjoe7nVSnk19H",
  "key18": "2V7cta5Muh3BpmPPJ9HKnXqxTgCMXnhqCpqRcRr1sRXFj9j7qXxB9njYu2pmRpcMfnXMzbnL1uz73vbFhMnm7h39",
  "key19": "QGo6JVtmEcXJArhBbx3pLUA5hoQT56Q3Y2efYXcFBJwkP57zGBaSX2xtfKW9vctBwZAH3tjtVHRtrCGDSxgwDbu",
  "key20": "64uDynLLsMUAoUz1kD1zJoFeCGZArFDSKrWv4hMPm9SQoLrC58NDwS3TYosG8JAuoUvdmuf6D1o87gcFG8RAcULK",
  "key21": "4MuGdJHpuS4xVBLBrSQc2DR8fMqihTtvCSXnGbP1pwqrWRq2N29UJJbVzezpr591gLUULEBkR1GoEqWgRZis7GLR",
  "key22": "3qabczKi7tPaBHdWRUkUhgboTyZHHq2PHv3KyYFzzSRmrTegp9kwMk84kaLFgNaiq6QJxoPyrsNyHmoqY1bNpYbE",
  "key23": "56yWbHBUJUSb4r6w3zuWnvf2TqJyN9w1UviCRiNjBTacUKoRmhq1koLZUwvhWWFjCP2RqQwz7sMNpN28vRah2hWb",
  "key24": "5Q427gX23gsK2N6iWfSaSLf4Bh93v7frvPCqeQC8GWWh6qzvyCc6GDrJAgcNnNqrVNyUN2AazA9Sygzfc4fYiezW",
  "key25": "5yz6M4QznZxCp5UR8SttNQVsnWQWGkSgSaLcfVUTDL4avERHe7wei1TyTdAFfWjQtswdmTyJDfHgRcgHt3hiV8Rf",
  "key26": "5T83qibeC6H6PHpSND6BFeN71ceSEa6AbPE4X31E4uWnRpac3xpsm7G4AsNjRKMUB5k7e7JbXkzRnnHv9uit9nio",
  "key27": "4Yo8LZjiNEEQnTVibsFdpH62k3UZrwVCwyXTkatUcE7GKbFvqhNup6X4iyZ49NMmJZDFGb1czEQvWydUbGYzDv5g",
  "key28": "3BzA4CGJ4UMW1FsB5f6xoDBHjdR4q2n6V5NgKYyX798edEkqRphCUmdK7nZxB8sKGbp3xkfUE1U8hCmwpwcsD5wZ",
  "key29": "46NsiJ7sngtKpeoMK9bEqaoRa7fjnkiuJr8b6zYw9QjmPJke6SCBWj9qvCpnt17vg7SgqBDm7xTA4GbRUGo9BHpg",
  "key30": "3j1u1mLv72136VCfovSoGMwfkEBT7sktPPjs7MY1L5m1RiekwamK2meQ7Nh55Vg8Ugh8d5N9PeBBdDDCSsT42j6z",
  "key31": "5wDNFnhdoFUcmMfEVcJkEzuMvGMk48HDxehdvJaLZHJQHtCV3Y7mhYTzh6mPeyKtgnETmAS8aor4t7zeLdfKiVXE",
  "key32": "4EKogU8B37jMViQHzgvdLo3mYbvAqhpfJoarzwh9o5TDUQArbjdKnvrK7B9NkEooVT3Gx46KQokgw6z1vs7sfUnt",
  "key33": "2eutzjyNLA21kPfxU2Cq3iKTq16xP92Kk1Mt3XVHhrgkVudQf8zWWWewTDHvAruwRHRKQmbDfk28aPoXYSX9XB1m",
  "key34": "Wf1WrvSTBBoVhWGuGxRvy7s8BYyE3RNUKyCj5DBFg1nmPYxFruBtEfbb84yWAZrqWbFjzbw4Z3ftjpKiH1HkH2f",
  "key35": "44JoeopzFbTrRWDoi2cVMxMweZ7t9Qp2owq6ic2Ei2YgBizEpS2RHVfMc8W9KtXVqgn4HZ1btByiC4Lcm1Wkk4wL",
  "key36": "5jL3N3RPyBg8Shcx1ykDmxeP3gV4qkB1NzgvKpHGuECA5Y8Put1GTQDrseFF4bPdRZ4UcJgaAacfaiZrmZFYWEz",
  "key37": "gybEcnVL9d2Q9yQt9PJcviNjEXVYoRb44f8bTqJNWK2EiAkKCJxvHVaV2WeRtDRoZQetT3PCaMXvX8Bi66LvYyp",
  "key38": "3d67wF7NFJ3kXt5wzs7ykA4wMdtVzsDFGhUTFdbNGiem71rQarqGkfuA5qUhKFY6K7p7XDHSF29vGmpEuDyFmGCK",
  "key39": "3nwoMU3ZYXfYYeWD4a6oj1o64Rt8e7y1kWGKTJ83QwekFbjSm8SUB2fSxHz5sQgNU9bNpuKE838WCJRNmHLeFv19"
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
