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
    "4FB4xRPkcjMBkRrQzpR5BDaCJy91xXTFaWea6JA5dSBqkVyCJDKkTxSrcRB6pbZJwQnJnmZUamasAZFewmvhRbrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z44URJyV8m3z39W9XVUY63uVLWuZ1fRcfMQhhbLRs9c85JzHi2XNMnvxGX9sEE1LSJpt9ynn1yAhmW5pdLKHyMq",
  "key1": "4cMPvk9oHK4LMhY1D7hw4TKwJRY2Ykw1zcJPfLhk7Tm1nrAaGotVqjcXh1qPKDCqTZsX2z93UcD3g5XsZEsDff5N",
  "key2": "29fjuie69FtUe5fSw6duZUwvS3Lr6sfXkRxqy3d9XTiiBnT7p8wBqUgSonW7zQzH5gG7yis7LngNa4yn5Xf6LgcA",
  "key3": "3TDdisDv8pvx5vgzSgnsWTiVW3wgxeKR7y7oY8FmiUeRzsKnYd56Fesq9MAugoGzmbmb7PHaJBrT7oFb9G8NZVpa",
  "key4": "4R7k5y9XdqtMShT21indBPTfa1BdqD2vY65o8XzuQWmTnEbkTyqtPmL6odAC5XksgaYZSnBiAxAEcmCmyCbmw9A6",
  "key5": "2KJDjTDebKPdtwYAcw2yYF1CNeeYbLgdaUDRSdux678iFtcxV25Uy1ndYkvLwGLs2PdTe77wqhfAAUeD3SQc848e",
  "key6": "4Y8d17aMQGKK6aFDVVtWaEUuPL1EBUcnDoANqzp1r3sLb62mmZbfNg3NH1tQyZPeTXKiZBaxEpr7E7ZTSNN2MmD3",
  "key7": "AAgdj3RLp5dywCmo3SWJ1TYkLSbLSR9C1yK6p5C1Et5QcauiQbyUJCDZVb6QMwb62tH84RD9qPVuwLk9tXij2hH",
  "key8": "4hjJjGqGHYcQEVscN7qdkCCnzz5C2ZkgEjYWWtN9dmZxoLJTDQPuaoxJvAWc4k7MMzP1xeMKbzLBUDH5A8Vz3XUA",
  "key9": "4ryb2pCkTtZZ21dEBaniNuPcZZyvgTbw2g8oHwSQaf1oRTGNGDEHXasMLy4eDaDYr4H4514Lubn1HjqszowMxQEh",
  "key10": "28idqtwNqPUo21aaQCVv5bQYRT8GPyiKZSyASVQC4NYuwSH5Z7K5tw1NQd8eAzLrdUDT6fBwRgsZeqQMUv4b2ydr",
  "key11": "2DwsJLvooPSVnybKVXSRb8mLzbLCFy2VHpvQ3kJWxQAjydD4HP7DzUsqnDSTg7CjvNJfAeATZuo43owwFeBgJ2ge",
  "key12": "3sPz6kxmxrsWHfWzR6fq78JKK6uPiB7ZaRzz63Atd1yB6Me6g47G9bUR2SvuUao1GofFNPmNmHgQMzwpj2fpsXCF",
  "key13": "21vSVkmzgeqMVei7yNbcjAEB2GbcE7ZFTpVxuq244J8DAWL7NdySGMj5LtRxQpp3WrumFSdZURa8ENaYc7GETygZ",
  "key14": "2SBEphxrzJ2HnvMqt5W7yF3GWiG4ao3tC3quPvtaeoVyGkNPJkJCYJF6AdFpCzeqi8Jt7hdcJsNsMBdGQTkCJfgM",
  "key15": "3LYTPsLBWcdA32efQfPXmT1tY2HX2PgiD8wMoWacYYT5kSBJw2NQ4BTacEa18VqV2jHBaNh3SPtmHE5kiSUc3gS2",
  "key16": "2cyzaWKqoPeg7k5hvTnkrkad5QgRgPwz3p5knNRbwmwPDDyXKvAVjaGjEv9PEztgHTyNoE8LS3EcUm7X8hutoXXj",
  "key17": "62XhabPLyVH8XWYuRtaqwCxDA167VCRYNdfQ8wWxpq5m5PFMw3DBgJFKYQ6thCWwQkDfisjj7uvs38WebghUEqBK",
  "key18": "3RhKtU9KpCw73x531ZarNJssoF7TT3PvbWaVnLoFiNH5mjEGGBXGUEQAdvTuJ93hcuWQ8mn7Fa5oHGq1pt35fDVs",
  "key19": "3wg2vJDe2oWw8fXKMHY2siMahrFA2eTNkJDsP8u9ij1wT1PRsrekonPMncZX34JVmSCJW9aDEVcc8orSiAf5szRf",
  "key20": "5FKUk88V3iqd1ZxJSxmvuAVN3gvZfkctuXs3jt7TXtjeSTJE65EexLCYw2bfpCnrXWoPFYRejm5pF9KC8GH21snE",
  "key21": "JYWLujCgnpdvz67XKGvpdXHLpyk4hF611iLrNE6SngqjzJEa4NFBegniNr6MJ1U1p1RewhJ3SAHRhhJA9Hc1zuP",
  "key22": "4Y8PLS9rPU5dDd6aeS8cGTnU5kcrsz79axsMZZL2DiAsuiigwdAUwcLRJvocz7nWzjm1LpYpUHeiauFRhZNUyDbr",
  "key23": "4h7Qm3RvcpTNbsQ6bjj7GNQTNaVnYMGGZTxgroDsSfZ74T372UrWzLdrZ4i2RG1QTo4BZX4iAxwp2rpfhzVzznKc",
  "key24": "3tY7fGL96mMqP97C2XZjXwisZkMn7YSttm9YnV6spn3LN6Uu1ZLRQwcmm5xk9VWzGMRkoC8Dq9fCSeCZkNdmqjR5",
  "key25": "2WyT8RT8JVBuydrrSVQE7yiwQhp5LBptniRx3dcWmMyXq7GWuBJmAehnn95DLwALpmoXzZS77hL2XkGEzQcPQVgC",
  "key26": "3NNEHdBogZSciCHzFd6MZAHSq8KRXjT8S68ZcY1bGViLbxDcmSpErptWk3MBSy4iHFGbUZ5J7revWYdnXj66fdD2",
  "key27": "Y5ABC5vyCDp2HrU6zKY7a3s2YHMgQCkBkizdUA1Ye8oqGdJNKjxsbiBnjuguBDoEFAUnxteGgsynn4LtQThEtYY",
  "key28": "2VXdwt1T5qGzYj3eb84yLjvMnE64H5FmEoc2cPEqxgxhoupp9zMLZGcwYJ7oECLsDRtQwUUdtFSwFmkKStDJyu3D",
  "key29": "41fC6yg3mxnCRW4iKsVDY3S6RkLbvwPRgxmMXDPoL8K6cfmBEVuKq4oGu9n5aZnSqbopoDhKS7f8MbE7Vk9Wu1fp",
  "key30": "54m2dH6rjFe43zNjQNwdakP7HD84KqWdFRv9s7ZqWwCSC5YogTfvGbCS9P4i5LLeaWht7YFWEvwUa3YtGXw3Hrh8",
  "key31": "5DQrFW4AdKpDfJLyuGWtRMXhid7VMc5Ax3oJ1vRuQpE2ASoeA4YmVy467XPh3W4fAFR1TuqxpNWRr3V53QAsVo3n",
  "key32": "2rerthfkBGQGmrs89t3mMqkDWPoh4qLmkxqweN1We4CCbP5MPgvmPpy8tX5iH3NnH4z58uAc67sTigYSsyWNgr4V",
  "key33": "hN5UhQuBV68NXUGry6V4PEQFWhuNHpW6ENp3qVjVecdoUWUu3pQE8VbM98QB8vLFSouJCnZdVutBCrfebrgJZhG",
  "key34": "vxbY9gtAy8otRew979a16CraVrWoBzRTf3GwGrMUhDN8wya27qxYuanTTGdnJ2otTJ4kYhihBcJ6PxjPeLKN4Th",
  "key35": "2QTbDMjbAdWsWMAfp5tYQnUqW3eaZV7X59S2qFWFMTpspHz696oL22fP4A9vy9pwDEtQBMSybduPMvfw1kDKYQmh",
  "key36": "3noN8oReXwCk1tF8pnaCozVzusLLdsgirVHUTETAtDazNCGVHkoggcmmmeGNj6mTZgjcKpetzZ3m9asfbMSE9jZN",
  "key37": "2cWnXXJyyRgXwfnNyy8shJmzxbBtSGhXtixQS2DGMEnDJcU21SR44QQK9ikuNhJ6UssVeaW3VRagPtxahfRyEhk5",
  "key38": "2ecaeYBakbFU2LeireY2r9n4aDRzqVCeiDvnpjEUxPEffmN2pgGmVUgHeipziMUuhakdHq85Nou8gG4X6QZQ2N4w",
  "key39": "5aCECFrWbNjbC2jetPHfW4hefJUkW78sqr3XVLEnfEC4qhLXYFfPgCVKHPuHZqHbEbi1KhVGkEi61thajdeqJxg7",
  "key40": "2BXDKDDziSND2BALWZNvLHcVMgpexhdWBqbpxGVS7uAXxHBiDQM6oQVheqTms4sFCgwGU74MTRQycNAURT7JBBRT",
  "key41": "xsyrBnYVVhw8Qnd2daDeTpHyKGdeLHijSSmFjGLre6GMHAKrjsvLMGeNjGcHexEwhiGnHtPHSEXhCsKaa1oM4wP",
  "key42": "2SUeiMkVai9G4HiJGnhgEMNSFwAFTQQvf3K1utyTGLVUBUdZJ6EWmriAHxN9S9GNjDV73bJTFbVt4vhUsy6FRuKS",
  "key43": "2NtqtiEZY2J26TSAGXC62vKAqiMJkHXWsZhMRjF6be9EhJqpceFyPRDhHPu88BFZ8X9zevZ77pEvY5Kqh5qkQHgi",
  "key44": "24rcQQjaPeaz4n3sUVkTwuTmymSEk45z6mk9Byh5idFS5HF8tsEByvFv7CZUPuBrCtUGDjxPV5Zm8QPtkTM9RWyD",
  "key45": "4xF7wRFV7VzFtUb5cUUTh3TzvCrbaVBrVhf5vbKpCdb8AdpyGAuyoUE84rT58e3G9MWmpXGXvfM9F1Br4eWiRZu",
  "key46": "EmJGou6tWe5LWgcKcsJdLV7wAQqG2nE3EGugY2nD5FLc9dvMDksKuMNdDahHyg915WEvjGiULPiL5zDUrN1h6Rk"
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
