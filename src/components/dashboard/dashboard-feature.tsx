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
    "39e5cLSKsEY4HrYjkYpjhwrvVfpjpWRojCnBds2ST58HfNoQu31u6WGJwLn3oNAmswhbn6bJwbcLbjyfDdjmYPCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ybPGVgLHAXMsRsqyYpqaG8zcbFCgrKmUNUwsviJJYfuqdHvDy1ZGPwwP4DptPJ5MvvTqwdrWGPpEoU3CyG6S1d9",
  "key1": "CHPYPyAUpTiettCXTGXGUPKFRp2FuJtdwRdrJ5qp7JLbhz8r5r8p4XLEVQAjDRHogNjS1gGmPr5nVvEPxds5Xze",
  "key2": "3QiiMmusC5nNrnkDQbji3HjrKjpkvaseTLsYbWCmsXYPb3L7bTLpBFj4pV8PsRw3mCfbRk74u3C12LKrMzxyQoEK",
  "key3": "4j1NQgWXTFnYKouVmPpM5whJaSceof9YJYv6n3tYFhKu2HsK5dmuewb6SuJJASNEFiEEjSnYMSm5FXeJs4UoayBP",
  "key4": "4PiU38q3ZpH3c4dJzCepacTtGev6dUWhXdUSNs9Wfn3V71sMRNtS6KxXP4EtjpzAXM3zaNcFtaougmnYNyMZSsCa",
  "key5": "5knyggPxP4tzLAxXtGkHHAkhjhFbZXNcDDq8MyxYd4H7aWCHS8wFZEm1dewPucs5HtCxamrk9C16dhQggiP3yfeJ",
  "key6": "3kXoJSBKdM83iBFZoUZhTFbmw54YkMACpd4eLmd27FCY9zGUnSewruDBBzD7wJ8wkBRgU9qiGpQVpXcNJ4mTDRsp",
  "key7": "555UF76pQLjrFSzAtKaWdkuyXMsBGxMNaPW22QJmbcHYrKqJ7yfkMUaK98dQ6RnMXkLue1fQ7tBmqMcbaShs2vL9",
  "key8": "3uNw3CJM8qwEt3kyddDJUEGvQ2a8BvjT19rMaaESSsYfZWqRN3imyGWEqB6JYhijRcpzshEtC2QeNsGuyAh75xfM",
  "key9": "63JaBUKtXnWon3ncaA3fMjFZ4yCXdWByDZ4FuSwMkYTqNn4ryJFxbBgv8TicbUbKUKKppbA1gvs9XCTJLPStQWJx",
  "key10": "65K8MdQLR3Ecya6kaHTXC2ZLfFCp2uodJJnwzBDzCuNCFWXs8G37Pp7znv2ryiEXLrsYYZvDT9zrsPBf25PRmWHc",
  "key11": "2uqPBN5i1FCT5R2gSGiHe97WidZpWW9tz2rgXCMHozUWwSLEEXiPbMNy1ciPWPQz3AweKXnQf25F48oo4ujK614n",
  "key12": "Mtir86grZj533FB8LsQZ2Z15RFRWLpUKjLv6gxVVgaS9FDmYmG6CB8wb4jyMHXyCD9L7vC5sNrX4gKs1j7PEyYG",
  "key13": "ziXvcy4f31Ls9SDB8jTaidCHD4gsEcapSY4RgL47sLcW4ehiwATa9jm8fMcDxscUmsbadKTxuqQVohue7ogmaZP",
  "key14": "mQ5fZvWKEgqsqiuPUUdRQVcvCm2SpT3nHvWeTgyzA9NguMqq4kmBxtCvqCzwHddhGUYrc6UCRTZydChDnMuo4Gr",
  "key15": "3tWGSbAigdo3MydscGxcWVszucupNd6uMHUMFc8xLBAQLfruoSMDyGsFHfjFnDzxEyop2JoPLQ3DE2oNgFt3PYTY",
  "key16": "jt1UUNQEaaFZfS4NJhcGkYJ6kEcfFZdN5HUnDU1kKsTMVCzsLuszzHfJN4ue2UXyPNAdfb7we2ZKfUdfGWHX6ZN",
  "key17": "2f8uqXVz3QuiewUV3QUN8woejCnU8TuMREheCG5Qxg87b2EZpGhRSCk3FbGmVfqMx5XTijPcSRw3N8gy4vSEN8oj",
  "key18": "2LqSC3Ck13nBz43UrZxvoeLiXAdEm1gK7fn73Sr5NwMFNorxRpqmaZSbLxje411nf65dxsXYDsMUDuDVuAnQ6WYW",
  "key19": "53Jzc71T7bM9apAEVXwCkCwb2DsDVxmBVqzpE4K1DFWCfxJXoCxJNCibwEuS6wF522Zxv5Zg8A97WyzoDUiNs2L7",
  "key20": "56gqvDmi8NYGmfrjqWuagK6xnYmSAGCAFaoqn8JFpk79zZr2gX71xs7jScavQq492YtfP5PV9RL9dAyB8U9ZsL8g",
  "key21": "GwakauZvthEoNUxDDEwqKQtRscuj3HVf8cZLBo8JYujayTChGULok5qeRHgFLghSHKjHa7FER2b4Zq1J2zsWMLt",
  "key22": "2z7S2QecNvi7BbySuUAFXkVY6CQqTERjMjfkeHnvR5XHj3LAfgTeWtW9CkBSo5CZMXjwnYXF7S53mw1mwUVq8Biv",
  "key23": "FTPdA6A1bGvuHNTGfG5DRL9s6WCxCFdaYfvaNXrR4h3fBr2hUQp4taJcu83M85QpbZUzrcnJnj2Ftp8d8D5XvGF",
  "key24": "4RxVjLdBcpGoCnYDXvForHFpNX9uTkuH9womGRrRXSyjkMD35LRQhH1yLtoz2LbjYUqzZvaRE9ruABYZyvXimhoY",
  "key25": "4MaoPiA4esHf89CL5SzBC2PA8xZ3LW5GS7yvT1K1W8WD2yR6V87JE8rYg5CzyX1FfShwwapwQmSJ96aMNFHsCBVx",
  "key26": "LsicqV25mQPK2YHwU1grP9xpvnYaqzpZB1Hty4a2TVeBtL8FatLY69yBuaRhNgnfbzKJa5cicKtudd1MZKLrM1N",
  "key27": "4PkpTz5pvJpYCMGPUTn11y6b3F1yk1mUqxfogG9aeTrdPvGUB7qyM1BWmioRV9efzoWRhcQUgzRMmcqS2gVySGBX",
  "key28": "5hDj9KdrXw4m9SNTS762JmJXF4v5HmueCvk6AvrhuBFFgvzaC6kq7u8SdjCpVrNXCwTSb5ckfSMqCFTduFxHKsi",
  "key29": "36rwoxLYZPbuawaJ2T2SD9hmL1VRCPPdmRuSpjRyKjQqcsg5qWEjnKjn15kpKTi6qPVZgRMdHzgYoDVvsKbFBKxt",
  "key30": "KNZkP7hq4h5zqLezrX9T1NiSMqwr7mJk7xBE1yevXFpNikRARuQyW3fAHNJwafFdFWhKpqjZfSrpBSL85B6pGJK",
  "key31": "Ep4MRG5Dcab7byDvYRxoq3S4jBuy4AYR8FqJgSuqiNaoSuoePks1TSuMxA3n6QnoU8W8c2rM5iydwTP9X16Yxq9",
  "key32": "3ixrrqLY1RiZZawoP3ynH2ZPkFg4WRUsJVsRmbWSuHbuk9GRJxzsVTxzp1p6YJY3vLk6S3vKiZTCuf2KQ3KJceiA",
  "key33": "kvpVDwrLS13E1BTnSAhyfR7ykiiNqX3bgkAYPKDoaTYaoUkjR54YYJWpxk9wcR4oReQdrXJWH91t9jp2t5ssKKy",
  "key34": "3XKgBJbhrmD78Pr46KSyyZbjn6ttHsinvGKXZLXKtJwgw8S1AwFUNVuywG9ko7Cq25xi6ZE8sFjYGyQg5WLTsWav",
  "key35": "5YQd3o9E4CvP32oo5sevGVxVrruZuNeMAvthPooiYLm4aiwdrZpknFX4wmWsG3SWRsoZ5mLkv4s1wDiw7xQxhDdj",
  "key36": "5NiDp1nLL7Vq31NbZhXL2bsHrd6TfYjtZLu4RK3SHT1H3Jxy9kLRJ7VGP6nyXd9MBnmCmCZEdkoQiH1SPZ3fzY4o",
  "key37": "47AFtb9TVsW7x8Q2wMZV7LcLsVhQsibo37WKDxpxS3oA9ZrMqyrQMr5hNfKbPJonCFqR92XnccW7MU8f4x5CW7cL",
  "key38": "5iqLRLD9vm5FRoVcbqanRPS9ZUn7ogbwwDnAf47x1cU5LkJ3FgN5qyebvSxacsjjQg1CttzUVarA85nwUt4Kc9B4",
  "key39": "4LS7mPJvihRHva2DSwiEqZXoRWPsViiFDGmszAAU5VzrjdT5ZtyPSQXxGodovk6XXiSzb5kUrnefDtjQqfpLq7CV",
  "key40": "pDpuxcsKj8BEHhtoAo16yPPZkz1WcQJ4pfsvv4eiftUVtaJduh8cQJEvYFTgTd3ZqmUNtui3YqpRHz7J1dWGyiH",
  "key41": "5txNdR5uBDNPkfuB7Z2cMHNCq9MLdQ7nrVUp1qGqgJX8oWfrdRGiL5Xb5gMEfbTG4DKqVvNpue4Ast1CJFe3pk6x",
  "key42": "2vrgXDYRULGhsrcyUVr4jjrKkTDX9UE3tHJdXeNQ5tFF8sRPMsGVAztPn7UBSLGWUxdKzMTxBvseGggvHth61Hrx",
  "key43": "4hqyLtBQBo2f5SXHzTzc59qFSQyTC93v6ThpZw9eKogxYvWFMiBpyWJL8d4NWzmw8vYGv6ZCXBMWNbUhTyTg3bcD",
  "key44": "3rVDmudDbTARc8kMjYYRVS5g6zoz7afm7jUX7ac9WhCo6ELg1gug9rxkhCnr3b3yp9yerMRuJf7SDPB9L4Tt4f9j",
  "key45": "C1YbCS7P5nycPUuWQGcXyX3srHGCKmGsSdmqnphDJSeBxSdDXmmEdaTX7oEFBQxoj1Bqaz8eLbHpULzdw6b56QZ",
  "key46": "4LwdXgbqf7zPx4qEzLKmmWe73Aej2r264hQZWGbSKaTkmRBUyTsRSx2dJW8uNryAJmKTTkoQL3qe7uatTrmhBZEY",
  "key47": "25s4zQ1V9ekoxyH7RxdSBN56nDDw9o85QrjSGiEtJB2C7LbxJCeuN5jSb9EaEGFBTsdfGELu82MJ5Z751faadPVJ"
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
