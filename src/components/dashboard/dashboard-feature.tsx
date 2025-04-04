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
    "64w7sbA95ZjF58GfGUDcNchEmkwsuTtGbZhusTeYdvC6cQu71UthiGHKft6Uv2f4XhwbWkwZqpNb4w7Mfwycgqud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c2YA3xKbdQRsABc1euEnHSGi4RQXvsq7gy26itCEnTHcT4Y4B4S1ZGdhQEvSKMSdfx32UxopVgMmFYAXJivD9fg",
  "key1": "52bJ5Ha9tu7gQgLx53pobvzHb6e3q89NpkHwdfhYVEdBtrgRrw9gww1uxBPtnp7Fk7UNqh3rpJEyCp9DFKYEY2eg",
  "key2": "bVZqfAtZrTMwLs5q5AX2Xq8nKsbFyHXvZMUcv65rJkeh6eZNXsXp8k3KcZwgG6D5CMyiA5denwtjch8mdntFD6T",
  "key3": "5UPqmgU7zZUur8nX4A643f1iffmU9amYa8eYVUSKwTWnktjZSSY3vPHgnHSHCwDLDtVnUXWxFuVGQcxgHKGppkFL",
  "key4": "3vWzeyxiWX7eZbqXwzCHEKxQ43XyyGj7bGw4JP65HNL96e89XBPKLdKH6CTDQhmSpr7V7FcTsfTH9AgPLN7RdRVS",
  "key5": "5wimzuzjnK4N9PmFYhgMhy5mvX83der6tL5S98G2xLsmCdjrPJtukK4ruTcowe8TvQEAoTy2rxaEyepH2Cz9YXdw",
  "key6": "475N1N5oDFND6QuEHgqLvkRaSTpTLZNJa7sa6MfCqRgAA4AuQEj2UUZhFEB8uTYquHPukMFoLPFP7Nts5K1F9x17",
  "key7": "57YUHbGuK41KiQY6byFLSwvS6v7yTDU267tfzBrXmqGwLK7VJENLs5zGFrcCkTiyAiFiay2wYtqag1kbShcEXomf",
  "key8": "55PurKXdvhL5uSwX8n3wQVssY5YV66YKPjo6bSpuR58nzjbSxp1U7mcjFyP77dmNXzFfKGxzvoS8jddCaNWXBfMT",
  "key9": "3y5HgfnMshPjWzkuydCqudSv9SxsujhXsjZB9DzyLDF7pPxqWrwB2jMkh5NgeX2eMkMrMMcB7vPt1Yj9myvmzfnm",
  "key10": "pyhbahz5z9V7EKSercYdrUsmGwHQwpqbsWvD9pQRJmgHLwokKk9WVgRLniTz1fU2rwTn14ZaGToAemvfz1yBMnb",
  "key11": "47HeDq1ozmrvcathUUPNzzsQfyo4ZPZfN7mMjTUts8FYrDhCm8UTzmi5kajdx3h4H465uKQchwgDTTBssEsgU1g6",
  "key12": "5GtUYaw49vW5SYytUMNm438eyF9BnppBK1ATHjVtM2NTM35WBMtPfYhJfGvFTbcW2UwoH4EvUd8piPs7RM9feVN8",
  "key13": "3iTzLR2WJoC3s49bpjUeu8i6Les8LkufQdZq8qgA7FC6GKTZoxuzePTXp88vzukKxF8Wocytfz6jeR81L92ayD3q",
  "key14": "uexh56XSNmARTMTPC2TmQjP3CATYDfgcM6BziEr17QFXpUDwbVjyk51JTZReVVTjuhtJBvWCjU7M99PYa9HoZjs",
  "key15": "5xE4irQyZN9cUiL3ff6e9orBnRYfqubiiUaTM4ZzddSkiupWPLFadg6BA9wC9ECFKAHT6NrJb2sJ6RTm5B6GMWrm",
  "key16": "XTGKgVVFAZhvn6YzkoQhjLLm2Gp76UyDfeRL8xJAXxCPvfohGxPMLLHNK39exJ2NAKRAHJjpq5sqhWWJgo9dWCE",
  "key17": "tb4awdxR2C9awaZrwpEspHBbGjnSot3tBsQkasVhwvKuGVRvCxpxDPKc89wodT94nrGaGhqg7obUGrkAcAJi5A1",
  "key18": "JuYqvn4EJrYRZE4tqgXoyRKoxwDWWTLq5uKmYMC9hbTAD5bJExwckZsfxV6midk6dq24CPGKx6EdmwxvyEWkjY8",
  "key19": "51JXje75nHfzMR9cDodvQzF2A5A7X4sTncuT5SRRgefHRDo1xf48sF3XLHrrLz8LuNxULd6FzmmuUvuj2LHFDbSn",
  "key20": "dL58uveNSrP1LZta91RnV3CvupfNX6aBntqGDVi5DYUbDDiyUJTkEQPeL6AdkiPTKsnGdjkmT2t81Hz16MLjfXG",
  "key21": "2SgPMZNU7zGixFrPunovMaR2e5uLhY48fSNjvt7m7CApKKZAYRgPk8RAcv15261YbkyDLoNRzrxMarArB5pqXmeJ",
  "key22": "3CAKTTr2kKhHvzs2UHybnWLjZEgpEhrdrcqAGndaCURwkeqYhEgQ3tgH1q9W3bJm1WzPMvNLU3kbukRTzUZmp1uJ",
  "key23": "3DntFmqMFeXqQjvdWAbBkwEZaEtvF6kpfEqSVvF4KAecLadFn594hvzLrj1YmPSPoYiu9161erPMqrtRJah1WbfJ",
  "key24": "5AsUGNen627TBubHcZZDeH8JFfTByerUcdYUo2tcFfVCBuDS7g2iS3MJQeMAdKUA6vGg7YLuq9KoqRR1atWv2hgy",
  "key25": "2zAjuc3aKCr9HnuHVBPSj8zBJMfyPPHdoeTmc4FEPsCaNGPEPmBtqdo2XXFcKFRByKPt9oTijLQr1ovZam3zxJ1E",
  "key26": "4stMwc6Si6DsVw8ZB7sxjkUWp1VPVrRqCZH9bybLPcCS9hg2aBLriU2wDkgsZ38aTydDrSSogrqkqK8N5smZ5gUu",
  "key27": "5FMqoqPf83jYWtA1t3RTuHPJtFkeUf8qiXtSWRcQs2poF5YDpFcD1A9eBM2vuNurjcP36WX9vHbTSsWwKUbTK3qs",
  "key28": "CTWvBheYKbdd2s2vQhupnN9Bm8LKMtRzcv3CZH8KkottC3HneF8SN2papmgvaykorpByhbZkPvkVMd1eHYCP1J2",
  "key29": "4FUrJXjL2vFTas81uGzyMfjbr2nH7kS4bFXUN5QY3rRKKL75EAweT6oAedsLXTg8fL4DkzJd1W3pqc6M3crYGJaC",
  "key30": "5eegiXd8rb5F7HLi2cR7GqqRrXKm3L2tu5bPjYpgL3a5dTYPQn43o3dLL6ENLerKvWbqpp7zGSEzeundaaSVHRqm",
  "key31": "2pYixKUmyQQ74sxhP5EoLgqqvgjtAwnipCjDryXu9soRQkpNJGKgpJPogCjPhkLbJJ8HetZb7G3CzRyvww8BVRuW",
  "key32": "4MBjvK3JXd7LhyetFSsEs94whpj3zXuLD5MVM6AToDnueLCBsVjtC2TRHdCBQeaBJCdLfrRndoB7Ens1fBtynVG3",
  "key33": "2vVmj5F8nQqPNbv8KjWU9fR5UVaGEqFBvbcisQNtahBo5K35R1mEVfmSDKfL3FDus39G3GbEcnx5yJC3yEWYk1ho",
  "key34": "zvj1JmFXdsoEPNMD5nJEUkP8L9A3z4AW2YEMLz58CWVZUbuqte8MaHgyMxzPwMZ2Ng84PCQqYZLpnWyLzj6tCdR"
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
