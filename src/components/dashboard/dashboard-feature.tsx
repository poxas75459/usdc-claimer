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
    "4Va2wgbwLruTsay7yP2SxvzKQzu8oTyV6pWyCypgU47YiXmM1Ga8ViviEXWAv8mrNVvovrfvTLA8gqNBh5JvKPmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61dRH76RL3XysKxKM7Den9N3wKRrhZRWYb7obsrpjB6yc1fzC2dQXE56vDdVmfLiSqj4MnvpZdPrQoWgkCoGZPWZ",
  "key1": "4XXEnLQQKuAfXm48mf6dtpvXsAnDG7Xuikf27NwL79keLCYeHo9R8jkAxUgm7Fab575VB5NrXPoKicCkoDAnHhoh",
  "key2": "3TAT9G8CfGkNX2EKZFpsqSYWsihtHDdZvurNKqxAiiv2FPWrDcwse1vCaXJYhXEMRgivLGnE3y4FrHxSvnmcXqzF",
  "key3": "3Qyc2gjUJkXAC3EzAj7gvY6rmzuDQTJZaYkf8HTtJ1g9QVSKhaJCfHQrbDdWdx2zpj4aEiK6LRZp993WBGMztacF",
  "key4": "22geKaUAKnsR8QcGaVe6e5ucnuQuB1UA9sZ99Zj9tWMQkj43WTiyzenEiDREMpDmvDdsKqqnvdTME9ofCQbY5HBA",
  "key5": "2Y3yu2QVJhtamgg6AbY6yjvYc4vzGrCu3VgbRxqfQ3JgW5SFTF1M8r2znELTopEiYL6Qxf2s3xSoMeFvA3xoFcd1",
  "key6": "3L7M1RbLrVRBFeXBPvWSVoSE86jYhMRrd3HvTN9Vi818pHwgfa6txXugHZDbBPMLPF29btHEbSqkTcZrxFY2cLpC",
  "key7": "2KCRPtgGmTgFZ19mm9w6y4Rej7CYMLUDCutJ87LvRnbowNoXQLdeQoy4Wqa9SKdWY2Uyxi6AZymdYeFAMqwKDnJ9",
  "key8": "4EFRbxEv5iCJJgK6EHRTMxhjpkjSzHvjDFn6H9xmtvYBsudD3uVCFpUFvdPeyouRXD2rMPhXtJ6HBX9SuyjbakrP",
  "key9": "4x8q3ziDkFStWwk6TyR2gMyZZnPeN2Y4F2mYnG6u7XwKmTDhUApEegaQkuEnnGcqr6LzpcmgsGdbTE1cQFFvTy3q",
  "key10": "2tPqQ51R7BHNYcoZ3n1JVF42vnKFsdsrkm3zgREvTHM1ZFkmTyp7kH9ff5jtphXYavD2HDzj7yFEieHFiLRtSAYx",
  "key11": "4588RHeP1tVLawxDR5CqH5jab7ZGUSWJfiGGzydffZaGmhNjyJ55XFQZCbE87RwncqbFQLKKsVLBprsgC2r82oZp",
  "key12": "5bahDv1k3hcX4MCf8M7cxSGehzaFNMawDcxtnU8Q91TCHJpr8Cntb2qZVZoBhMh8bryqDT4Woy9oMj1U8kU6xmG2",
  "key13": "3CL9TxovAtQqKVyrX7471THCzasmAD59i46oyXudKmAMRdri6xLvfsiXkDXptwzkiPetg8UqWRfQjbVGep5MXXc4",
  "key14": "3Dfr2pFDvzgwMyYxmysF8Vc9oJyWaBjiATU9182uFxR2sX4SUnQePsnwULcgHRhX3XESTRPjoiDu4Cznh1r9YHtF",
  "key15": "VUoXAoxJU6K3JbYWchb7SgexFSmckksMUdkjx6y6VFvYkCeQrzafb3coeb9HKd2Xp5bHh9nmugHSJH56KeNByS7",
  "key16": "yiXCK7aAY5yqW99Ka2iHUzfRfBuKwzbt3HwJC3VdXkBSnvYL8ZrLSDeMpxVHyNuitD7SDmd1Z6DySqfqg68TxNT",
  "key17": "5brkJhc2AjXzh4GaNg78LZD8EeuACBSuaapNnNM5JxMovrURsiWQQW1HJPK2g3HfWhPwWFymCzWFkm11MvaCNeB1",
  "key18": "2y7qdvupkcDCnpXrNPgMyLUsUYdtF8STrw7JWJMcbCPavp8eg63Vcgo3pBqNUq9cW7N92sF5GZN3mq22Uk1LoJ2H",
  "key19": "4xz2qHoQgxoU3YTF8YZUp4G1pFkYddxfDFxMqrLGSi7mXgwDV2ttm4aMv188px1tDqMa2RLhKYbmWaaggz1wcxfN",
  "key20": "4stqcmGMXEVsTAsc8kcTg9nGCPUpxTQaB9jU4dZfx2xj6xbsSpWdLQ4kQuX3oE7QJZQ2yNyX7T86iTnfyBBAEzJU",
  "key21": "5Vpza1j6KTu9e79GhkCi3GN6bd5nUDeTmEhP57EN7a1qu9Dn8NPCFvwnmwG5gcQRNnsQRhjNbNbEddkyvJMrrn9X",
  "key22": "2sYe1ev6d6ebZUoMpotmteeokXGoeaytFBFpziofE59JasW5wboUxZJmfsp4rGKQ5RY1igpbqHBnatoT6L7JoSqt",
  "key23": "S1gfRtXaeXrqcmYkuRjcM8i96V7QrSA2XbvBjmNM2L9CEk52BbZyouCcC3LVY1jthjJhQNnr4wwDaQtmZCunsKJ",
  "key24": "2Y9dLakjWq3ruQx2rpio9pK6Nj2CggYHhgLX6zeEiZdReTTWJPhskhws2dmQPm55H4Pd4QELPCWhozLCMChnnZAq",
  "key25": "3XwqMfvYgqPMsToieTnwekR8fpZmTfnfLMfzjBV6L5iR4GTDpmNc9hLHHKZKYppCo6VySMQV7cZA9kmDKACqWqpM",
  "key26": "3S8WeU9fyCK7SmTg2nPoN6ft7DPR4GMgnEuPYxAJETBEfnYmPV8Jy9w6NzF3SjJp6fzhH7Uq37aqB2cEsbSE3ZEi",
  "key27": "44wH1k5W3daDyEaWXoqQAMk8y6atnFijdWEejKVHwBH5Gm6ayuQFuE84tkUWwc5nwfEDGn844S7gn1cgxpc9Lj2C",
  "key28": "zFjcFYbL32mPeVisTTbfugD14a9iKkjLFFpjbZiRHww2xYoyWf845MavfMXDFr9BR5n12kYvek8ww2oyEtPtixs",
  "key29": "4gTuQFEHw48ZzpP5ZoEc8LWbGE8VKHUbC47dyESgSG1QqTkUewxTAmsaNGs7ZXn5MLdZRzCVwjXcaesAp4js2YQd",
  "key30": "5HJb9yKSj8TwsnyMZdfRbs8Md3QHz2ohyPJLfUBomLeFzwBKdE429n18iVkohty3y3PgHVtk6BJNBbBzJdgnpA5v",
  "key31": "2oVxCcwL1Cpn3j3AqaM8a7FkmxLrBfCC7MYrJueohectbhNCkFL2ZiVVi3ZCXqYNYi7mW9puhAapjoW51WDJcKPT",
  "key32": "4NEeyeUvQLGGeBbaekbChQN5HEirENBMN5YwCKvm1QZ99n4Qf491ipCZ6dSc8fa5KM2f5RAW8C9g1pFzvT2JXstC",
  "key33": "5mVF4zJiw6mjA1QUEwpcXjwmeFQfGVTENSttYkKv2wwKx8aTrtz6cAy2yfj3pK6VYJLEJtuDNHmoFPz73MeetqPA",
  "key34": "5ZFA5SuBY6yXHQ64A7efhHzFDgLEhEqKbL3KEKcDd6GTG5Zk1AtLfVmwfXqXSNuSD1i32WpK8G519SthEQTimYx3",
  "key35": "2zYLkdjkHshev5zg6PvHHsAi8SfzDmPmK3UNPYfQsrhP6jgB8pgJi4ufFLPuYYgBy9yRk9T9dfuNcAjnp2Bfk2wx",
  "key36": "3Pn5TssZsbPAw9tut5UXqRjM6iPVeAbyDqkZhJtk4XzVzUWLLbKe7F4axLGYxgTJ3gDBrmpNNJVJUESBqX8BqNCG",
  "key37": "2pemmBosFboFPefpcuxEx8fyDzPQyU53nmBAztu8iTN8BeYAkzWmGjRqox7patXtxVYUW85CkCnaYLd9vn6yWYC8",
  "key38": "ws6xQfcRrhMAWUtUUwzte8HHm7WFuqee6tHMiX9d3wanYEXSrVEwYNFPgUszdbExmkz9tbRxvXmdxN6r3y2vCh4",
  "key39": "2osrsFyGtakyqhEVVBGsdV2JYxxR4R9vrr4iTX7KzpW7iJ5VTtLCZcc29bDbt7CenNzvet8gScPuYzcHTKs5FGoh",
  "key40": "2y1eJfUQ8AdSsmRqhNxLkTaruu3tkSaXFgBRG4e7WMDdJvTKrBPpcXxoUucCKtiVwH5HW577NHxQY18cwrESVdUq",
  "key41": "A7WvirXB7FqpxDkVeGPStHYGQeoY8MoRKVUvSAAsy8CMHsdB7D6LfbqMd9ke7QtW2TFbSeYvz4e2aNoko99acGB",
  "key42": "3R6deKVRh6izUrkemKaXZKaTkTsXviN1M8MUPK1rgjU97uBBA5GnajKVLSQaZPDMSfMC8efqXB8fsZF2XHX5PKFo",
  "key43": "64PNrjMeYeQNzPbQCRZZxeNYyQZBK7yfPJaiy6kcC4wcfnPMYvgDh7fsKzzPK6nWB1DYCS45JeYcxavdwi8J6gNM",
  "key44": "5xtPCv6D9sbEwFpSVxxEUcMqoZJQSYVESZ7rK8xjV1zQx3EcG4fF1bTiqQZqUkAfqqy8voREBdxj24NvWeRqRU1Q",
  "key45": "3B25v7xtnU3u2ADRJ5D1MvGQMSzJYzFEJmZoTArwAscU1E8yw8FuMVSZRFwEqjYLAGx1rEUPsse6eTFtQ81icXV6",
  "key46": "5HRwEupEansmfCGAzRBxWhg7ye35sGoNJDW2NxkG8MmHXxBhweDdSJ755Smu1DQBrgoPhB6JRHrQ1XdSouSSa5Yy"
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
