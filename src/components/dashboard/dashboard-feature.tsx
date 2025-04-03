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
    "5yM1XcFDb4TNa8qMoZ9iCcs6Q7xsGxxVvJ3gBvFkKUzLmF3WhSQ5kAsG4qJJfZy4XbUKeWCeYmdAtxhHRUj5iW1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AwCRcHV5HHMFVTzS5mkUnapyK12c4Svd9nJZwSFaBZQNGg9kaHwRAiSmAc7doYJz3apug4EZJnG5UXiSBhCnJ2h",
  "key1": "3L4SzMrYgjLwoUf2zr7nEFtreByDkkL4LoVkmUonet6g9nbufu4WtZQxxMxX2VP53kCxrrKQ5xtpzmbm2Z9c9SSQ",
  "key2": "2VtcSFJxidmP5vNh8QFey2TwGeRjhv5nRyLZxGkJcXCwPC2o9RLy4eyqbJb4C8UVHzWLBqujEAnFUttuKoGvguQF",
  "key3": "2ExfaE79sDDKFTr7MKum6FuqegLWrwacZrXioabmP4svaceR4UoAjqAtARt1o14Sy22pJ2vEpKFrVV4yta9VcvB9",
  "key4": "K53rjyrZm49DGV8fs7x5iQ1QXf8JazD15bKLoQ8A6A5q6voqQDHJN2JKys3rgJ8aApVbad32tMMXc7cfEFJ9N8m",
  "key5": "57UqyzdgNLf3EtwBSTmY2pysQmbAkTvLByocRq9gweD3pjYQhxW9Pc91Yh9RgKBDwQiFCWUV751YBPpUgNzmKFDg",
  "key6": "3d2ZjYepATtV8TZyvVNAayLES3D6LDRLKEKuZRHEy1gQfdUssHQbkQ1GBe5MN7UGyqEMzJehayD5KyLn64765Ujb",
  "key7": "5JkNodYjKHBFBDpt9BWisQQnLPxLmXPxsTiodZhC2Np2MVf78Jja8rX4CgNw1Q62nJwfBURWZM2yjXSk3c4tJhP6",
  "key8": "36HVAKDGBeRtwit3gTPsdNGdxPzw9sph7vzfqmKjmHdVGJFu1TMah7kMPKe4rdLg3AG5NVL2zqeFwmDLHzvXuRmj",
  "key9": "3ksSm171cB23bcpg2GVjGQa2tD6Mr19CNYtfA8rWFcEHsserTZFMZroZKbvSS4cQHdPTmnh3aGUYSYJw9HHzybC5",
  "key10": "5LMHDwmpinnMBAj1ATKEfC2DSBQs85sWSCVJtxB4VXpXrp23EzqvdZpLvvddwaRnfx5eqVs8PFKSpQaXfmkUr1f8",
  "key11": "5RvNAS3RcSuzqco667bFV2ieXAteAY1BjhtE8PpVmjCvPJgbuMgdEtU7pgzUWtRPtMZVHijV8E6183ZsVqQJyJXS",
  "key12": "4i7qZtMs9ncHoyoP6r6qrgCNSB9NS6Pi9fVWyd6Pb3sw8PfjNF7PUA9HXzxeqswccx3F7q7NCREb6nB7X6KfBeoL",
  "key13": "WFK5EbWnTu1aKJxB5k4RZi1ezy7vn5ZiVpkdxPfLtHtdus7v6575nK1kb6etojP3aJ3rCQU92KqCmsXGGpUhKif",
  "key14": "4Mh9mvfN7mwF4VWhcssgWK322nGi4vpy65nWTHtDw1zKzWi5z522DZiJnLCi5ZS1tFjpXJjEpbtdwsqB7YWz1YPh",
  "key15": "4WY474oFx4xDwUmS3uVq9RCNrupSgNxofB7Nd7oyywW2k5v9FM5MytGbQJ66FRtBwa3CPQpFi1VVnrbwFY41qpgc",
  "key16": "4Tg76V9EbbFk9RAn1gfap9mi7izZhCg9SE5SocFMV7NzZTMimNzcUFTMJQqbXeBAVPQmnYpQGKL34eRYs6xE9TbA",
  "key17": "3YgA3QAsxSCT9LDjLEVFUYWtFC1nwZ9scyLxupPxBEUSzrTFWk8oxQunRTWmuyrb6kHgRsnqtrxMKPc1uWqLbuDE",
  "key18": "ptDSQonbM54hyyHVYGGu49eaWvMY7DArBiGzM4Qw7e5bqpbbSSdsX5MsjPrD6RpicWTGgvG6iuB1dbS32ps3wEB",
  "key19": "5tmyyMFxCFo733erRfrS2vcZTPxJRmDXrL3RLn4VFVsZf5quBhBFLCwsCMEBQmcLLjACdmmuJz2hBgs8f7QQVXTU",
  "key20": "5hFGHkeq9C9t6vCP8xMtrdtxE6iCtNDvY2GBphEMrUMYPykNEreCRWBFDNS7EhdZugczzzFrMWnvx9Ljxjskxk5m",
  "key21": "3fWkFxPgrYjm5baVgr6J5ytxq914MZEvwFtwXFiyu631UGH5tnXSsc4vBm2gVWftw3s42KpW5RKZS8DtdPeHm9G9",
  "key22": "5vwyCota3Fe4QDabqTzaymvSn72wcCKpTZfZtcc3WfgLLxCE4nZgnL6bW2K8GEV3nHNahy234CtZKwYNTLoyR4i2",
  "key23": "3XFcV8qi3Hfgrv2uehdRFC1PPQFyiA8G5GFuh2AhCmtn1LQJtSjC5dmaQy9LVQKmGTnUzSvCo4yhxhMu1BNAeH3o",
  "key24": "2MhtAAfFhjEvZX13adhnnNxZm8C7reVW3dUXbf2pZaAdQGyVZYJgGRKWYo5H9CPM9fL36APQ9NSSpuM7rTabxDRZ",
  "key25": "5bbSw1XA7ZzZn2GiiA9vES4s2QE9CykUpJApv7ayoUgtAewnNMtH36D5iJm2jKPM1veUaSVWxn2qY279zfPaX1nj",
  "key26": "59QbV4QAJRhQ1XiZwba8UUjvTH4SH8xNn6pQU2nmC2sRJTzWgxhGJCWs9fUZGrmFdYZQBubymBoJSctAarivBMj3",
  "key27": "294xpSgHb1XPXEg3CqtxTk3xy1gyhePocmq9ppQWsx1FxrbGeKEpcAB8poAMMMkrUu16NqAmpE5BnZNMHN7F8Pr6",
  "key28": "45fCZjwL9hs3jWvG8Q2MVu7Dft9yhUZLkMZnxuQWyjjGX869YnBgpvqEPg53GPmHdod8c2cQtXKQExe1wmbS8FN9",
  "key29": "31GypXF922KWm19pQJMeKC8RdZkdv9WLQF2cM1TbMmrAg94CFGTUENt1kLVL9gf4zsVs8zcB8uh6uhfRZk9RpWVn",
  "key30": "FH9WAADZ1GE1VnAkiP3yzRXUcP1L2WapTJKrHyWB3giHbZxgJMfND2GWWxgSd1KVa8YwocD2hUxLxVx3bfPz8tm",
  "key31": "4GHt23AVY7KoGQkJu2PWXzfDwGE8zzbkJn9w4va6Gunqz7Geg1H7JNpDMxjLBrkrNJz4eHJ1J9DZkLEA5oKiEhTc",
  "key32": "4rzagyT9Ax1oTAenZgPjf8CA9LgD7U6PouMpTrLx5tzDcUcwtk2Np9wF837vFh32wGMnySbk6nfFoqdzVRg3sQoj",
  "key33": "2MqoTTWH4kDc8Cr3EceN9mmhX2SFXPkcHo8chDmG5r3EiVhUs97CRxg8A1rmGqYS3GEtFmmNdKLquC2qBeA6BdQ1",
  "key34": "3j9pmHCani5tsXAnZkeUe7avPp4xLaZdJNAbL6UJo1yoAaAwqzMe1iiKQMc4fs7PbpmDhmaz4mTqMZWYsA864QX3",
  "key35": "4EoTDVziWyqcatxdpDLHQFTtXo3mVcrExRnaxR2gnHH2LiCo75Bk6H1sJLFqBmVj1hwvoomvB8mfNmsTvEUncfFb",
  "key36": "56FV5EhBXG8AAAD2bUtGEhXZ7uDZ9yir5dRSjryWvrjedX447gtFkAYQM6qpvTiVusM5nxZgP4Fkqqsk45hFbejn",
  "key37": "5owYDqQvHCYDRG5iEagZqnrDLmjnZscPW2HhcmYbskKiuKKSCxZpYtUEjeV6bHBqmqzgPheECdRNqUqSmMTNgSo2",
  "key38": "wSyfaG4wVqoUdG15r36MSoiGmiBqSpHQduhVzhGytR2dXdDJX3FcE7MP6ZQV85GDaRviAXKrcKCRp45PkgLdNz6",
  "key39": "2BCTQUixqteFjvCcCJc8jKXbUkBVgo6S9VztHn4TNmSt5Hcjf9MQ5twYJe84fY7AFpvQ3NaYrwDYufAccmzu6vM3"
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
