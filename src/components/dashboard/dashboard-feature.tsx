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
    "67YJc6GqL1PL4scceVj44uJQcJXSb2PZhhj9zqRqfbrFYdvaj2eZYWbBYdXXtWE5nMdD3svD2up5fq2aMGHfKTxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cfcoUSk39aBfofVYdf7jMc9ZtULYk7d55B5mRLRWozuxUxm3YwfoF9sQXDFbSWz8UtS3gnBFST3bwvpSFSAXn7b",
  "key1": "4QfK9yFXGvZbUqv7ao44zLuNqSQQhAgjns1kuvkcbFUCHT9hJNdo6ukj9tYZvNo4xCYPV7VXeZBBhW21pFFTXaF9",
  "key2": "2eJKs9FsGtRDSkeugWhExT3GVBx7bKjfsbWyG6wUzPaEmAGzugRCrre1fgmFbNfm4q3ZtRoXSWTrDSx8WMLHqBei",
  "key3": "329FyQX715amRov7gpu5DmhD96z5Wvb2AwKDXnvNkb4MBy6U9UjHMiHm8XcpsfUBh9tvCAWGp7Qvp2Yx1CLK5Fan",
  "key4": "3vV3ivtNp2LneqJc1dYJYpnpNYGxamZX4Hpnh2E2ioXyABkxCrDrwexhNhfkEbEUQHRFoWJSWVi3LgrRLH8Qqcdb",
  "key5": "TzM9dJFVMbrUjyp2rH3V7wTimZfaRc6ozk9PbKWuSyiMnH73p7ADGkUbmdt3CEvoe1rULMAg4vgQK73EQRbGJSJ",
  "key6": "4ALqLf8cSp9f4F9WH97BaHgcQzNWweh9urjrdPT2yJSUV1WyWtFG8dpNU5rTV1WqHB3duraYxZyLvYzKaeULkkwH",
  "key7": "5x67aBfNfJ2FaJvDneox3mRFrusW3Nau9GMVhe4G5B5pcUDkyaENhfW74azXAue72KEUzcr363mdTiVZmcVirYem",
  "key8": "5Cf6U52PSzdax13HgPooWR4tv5Wicr1MHhULbfmYzwk4VzcAKV3ABoxHBDvCst6Lj6QW1mu8QjavrUjJdp6cx7fh",
  "key9": "4JuimiFmwHMvSK3qXYPA2f3XUSmvkbmW6LqcreVax96Bes6rEn3fYjKM7QSdgu2QoKB9n7WjeCBgpKK8SXZYjBug",
  "key10": "5xDJwh5NBAP58VZrHvASxLqJDDaCJ77Fa365zsK8eHCVvymruXovvz4b5Jov2Sr3dG3qedEQQDVsCEuJhttrS3VM",
  "key11": "5TLr1SjsvG93vtNe53Z6CnqDCwNwrsBGszLzE6nRbDMoPT1znmBDe354oFHK5rrC9WdF3ijW2qSG5RVhj6HLJnWv",
  "key12": "2LsXWwRxiQQJfHzuDWf3NpZGaZiULdSAB6MBWFj61dcQUpwc1p3huwLAZEbxs8vNQWoo7mX6mU524AcwUWHYtGKX",
  "key13": "344VdPE7387vbUTwtUjciy75doGWeEmvXiP5SCUGF5YL91b6ZuMyHTToLSiSHcKMbude7WqFoYqzhVkSc6aYJUhL",
  "key14": "4yHFaFTEAan4HUoEBF3eYFwcL1prmGRPmxYqGWHFj7PgD5Tw6UbgxFEys3Gnd9CKivkvAweuVhn2Zc5LsAZ82Rnh",
  "key15": "5PajqcmDzFjf18C22DcwusFFNNMzDNcJnYffcvrXzbJAd5jD34CfptT2BSgVcVdPeA3yKUwTzpiez7k9fr6cKeCf",
  "key16": "6pngWyoXSvQ6RiF36EqYa2GaFeSyNJ3uU1kuXBoV85EqTis9EdhAcb2KbDHuWVXjFYPoVWGmutf74VZ4EKEQn5U",
  "key17": "27kRH94GqSeCrZtEFn4g7mekW7v2ypCyTKL7QQkHNpXttAvwhTHzfNL6mAD8x4yjntPH3Koi7HRFSZMJgPo1tbUQ",
  "key18": "UE7fQnTSCg9b8RikHtoj2Xe7LVWDPBv6vxoyHp6kw24B15XF3KrggiSvFw32c2JEbcuCCKsaCj1i2QMh64qpQuD",
  "key19": "5wtQt91N5dkL3caoQv9s4vej6ikti77RtTHtfbehd5efA4ksZ79iRztNUXNtMBUn65wmm672tg2R7zGvGyDcMRxh",
  "key20": "66NZgtu7rhczDxvfwVuZqst3X7pPRSBaoBKzZHyZnb5yWr93owNxvi5Azh4Z9dTWFYB5XFMmBWkbFuCTbbCuRVap",
  "key21": "49RNbck4snnLnjwohQpETdC5nt62uDbYSXVHnMXjCRLsYcT6HWFi7AnpepDNjS7SsH58EoniCeLrmcbfLGosq7EK",
  "key22": "5bCNzE7o4unKzHRm8shsW6h8xaaM9aca4b9biGMQ9jwaFQeudDH8Z129UqxRBDq4UyR93kLgAyyXDSR7vGwrfhG8",
  "key23": "5z81MVZzjmbX5r7AAfjwLFmhz8SUKyFWwS8YYF8kPJb3wXTr1VRHfsNf5L3NbtFr7so6fr8JCdZL6MEECun2tpzB",
  "key24": "37vii9vttrVVRSgCvfQfDebG6DozT3WKkwnX7QEXT2jYftdFEiTwpV3gPMJH2zSwEgrLmCVxr9E2sxLZ2rhyh3FH",
  "key25": "2x1PaYG83SgXGyZaFKTFUBoRWnVuEnou5A5CMrzyZ91JqsTCchTrBqRbRywMHcpmKFgUFzUHPjiUBYfEf6nWW7Wa",
  "key26": "5tWtnngJDFYRqcnkwocxtiNGcaRcfr1pccSCU54PwPbz1j9rrYKRVe3XjsVzcjYzrATstT5MftzDzjKifvhGQxaw",
  "key27": "7qKTTKAY47vMKkfzXpgMpkoSx5MKFpPr2iSP67kAcTxnuRvVfCXtyrrK4E1Y7aMpuwcWi7L8jk7oDTc7YmQ72cd",
  "key28": "2aGoPfDdLnVDVouajLiRPUD7iR27H6HESWDZYNtsoGGFS3i9pqs8Vk8NRFKkL8LHG1XngjGWvxC2DrwttzgxuEeR",
  "key29": "5a4A1JQZUNPcwiqRgGG5NyoLAsN9Apst5nVjRoKRpcJrwrqbqw7Vc7xR8Gmqqv648boDecJ9dZzopPoPCZbBYhzv",
  "key30": "2crzzAL5KNhksdn43UJKLzmtj2YAZCqoC9Tti57GimaX6iBa1edEW9uodfXvGKDtRtEMyYsf5bE5V7dzooQBKRPF",
  "key31": "4cp4UgF4WBh6y27WP3jXJQakNd3fCUKR6JHjWDVdocT9ubedMiaQfBHCw14uLm8FQbA6GgvUi1JLLn9xXYKxzEtW",
  "key32": "4aW4x9SaVnDPn9z8d7GH1fHHa6oXkNEagEweoF9AvZTDvT7aAMdg4upKYgZexNiRX2oX2QBRF6PQiZJLLjW7yntv",
  "key33": "4QfmjNozo5uvoSYLLzNYyeWrvcXi3ePXJyFcxKkxUrarufYsXtSjBp4vnHBKRiVj1qdXBsgixv6wSvK5QQAhqogC",
  "key34": "2BGZ2iPJEze7aLKmoRu4ikE52wcEnfu4spe1mtRX1j7kv5c894KQK5x8FrwbWpcwjfa7GmKPcXbVGUTnEgdvnqrS",
  "key35": "3fwiDzT7n3Ju7grjGs9De6VT8RfqnG5oSMuCq3giZc4z3cHdSzHZUZYzSymMKtPfUGxhRm3RhJ2aerZMN5SrGKGo",
  "key36": "4MjkFviMijimUNQxzuUVeRFanBr8XRaHwK5BMqYmu2awfPGWTQrSi1ddaLw9d1MBAHT4XtvDYufoiGA3aYdpbyya",
  "key37": "eQwincAKjSdVBNBRiyD1JUmC4oJo7fqSC5btght9ugAjY9AZyacdnJ2G4LchHKpr5QQY1V6KucUCmZ6ohud6WPq",
  "key38": "2D4suvjos9LbqXNmvfmCpp5HBL977iEHDBRQTxPqTx7FcSoaJHHEByhbu3Fe1qfMU7hTnN18Hy3frnQtkm6Wm1iH",
  "key39": "QSsSkbRV2M6Y1KENZkt8Q5djE6NCiwSd8nsJprXD7hBRZUyg16YJMewqp4pNtKftmDsa5JDXPmbKLd3cj6sBL6e",
  "key40": "5ajkLyrnYsPfkz7cLkHqxuZVLDTa6pyWVbsq4K6YhS5axYugerN9V53vwSn9DPK1Cssqj8PA8zf77h1pQ1v38tNh",
  "key41": "JxDTovuW7WQ5CBJVAPY2LmvD8RPyJZicKW4sKrHvRBCw7GjhUTLQmUDTsNoZfMa1YFmSBNM13KNF3P1TCgf2ocS",
  "key42": "2Q8SejwHpVkebbodwcUEQRtUAZ2X8phUetaLkGWQPuTUeL4WrFP9Q4cg41gMbgAJz51tuE55MrBT9ykxr4G6mYMM",
  "key43": "2TcVrKdxB6b674efGhQ3aYkrhnEXTsqFH1QPyCa3x1kRCNTSRs2eprHSLyMkRh8ZbXPpkruNMu6xdpkHhGbv5nwR",
  "key44": "5nh9DwmQCw34SF9MwkFDHYYUNocp476qx3bKWZkqcWHunJAsV7ikgynjHHVM6wYVPZ8qHggYVggLzYBAHDE62HJ9",
  "key45": "2coX34LmxqEjrzhx8wWq5unJBuLmgd1PgUFpfiBuzYFkKUsj98JUnNX9prYQJntiAqbsJKVGvHuTbfPbaLaAaTAt"
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
