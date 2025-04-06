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
    "3kcCTSyy7tCbf5nGUjZUdDFagoxTWYmHUkkLpfm5JWLUsqM4Ey19xBfjPbjrkXUULms8q42WTXnTGbSuidKArvEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rmJE3BSj6RSJ5ZWCB4RNUR1qJ4YdnD1KGz9Ucauxx53UZFWym3AMc713eTkmbRNPjPFxRbBm9QoQgKW9962b81L",
  "key1": "mCkWBLNdUqKDzKiW4Msf1Fo5hbYPbw6TaMDBKyhZyMFLqe95sjwmSzC2sxAoS2yh9XhHdnQr1tSoXmHSyPdgb6y",
  "key2": "Hs9nDrTehenruM3DbRPd9NWeEwDtAHiQW6YFMQZFMSSzD7LwGH64dWozKwHTfvui3ULAQ3iyizWJubkfMgh7cRp",
  "key3": "4Poh3EtmQcQJC8eo48FcjrU6qBvpnMqW1nosrApnNNUrMukgQCFbvkWCgCcQdNi43jfSu6MqEpYKJFLHPnaXmcUH",
  "key4": "3ZhtTG7JovaL3ypkSxLo8VV5h9ycCPXGUp6p9auj3xMqkCwyxv3wSMQtfWqRdSWVjZArDcrdP942U649RmpZWPTX",
  "key5": "4HGgcPckXLWYcQs9z59JkowNbqd83E1ffB7iRGWRYkdebujNsmJuAPiVKBADfppG47SmCwQSmDawrMkGPXwVoVud",
  "key6": "2Mhp24p1hPGtgjtnLot3SdbT8Y1MvxDqpgVRWDCEwz21nxuVJMMhzqHtmq7nmihoMaNQmBiBd27hn96wxJcChjy6",
  "key7": "439riTk2Ygu7GUdvvfW6zBhE68qrvqQQ3H42id3uggyYDDWQgj13Z2DctYw5YwUDDmE1dVcw9S67bjKe4v1DBUah",
  "key8": "5FzDs39DzR7hrYTqvzgDN8ZaMysuRCsEUg6hbyv9UNYsMdEPSHT6kTyhKNNMwJGS7TBRCbbUTuaz5fTwgpXPanA6",
  "key9": "55RmnVCzjamJkjycnCpfUy48TLdF6gQREi8WWLdVwjcxCcYFGD8rHNy244Zavfywcrjmq4vvvtKosgZM5cdyAoQh",
  "key10": "63ytNggVXCQwfUiurYuoJKTkny5Vzp8XHpuC6YKWJQpMhebWQzLGT4X7oSKU31uq68AhnywCVyzSsYcYFQr4A9yC",
  "key11": "28eAHyoyy19SHva51a9jWid1u4tr4WLoKdFmxq2guXnJg1sPKPLb11FinY1Gn1RvkZVUSMT5pXBAYMP9GDzjUHcA",
  "key12": "5TR29s5XTcpthHSbLNq3xrr5fDqkqGWxg2kTK45Kz4qJUQM2o2qfJJaKY5eJkNXADrXZKXtDvm1CKdzJgQukKLuo",
  "key13": "2V2uhVcyA1XPabfW9KS2h8xg5Y9i8dWDBmPwVBQmVwjrSunLWjWD2qRLX3cCzkkGUvfiM7acaZVv66b7sEjdSZVF",
  "key14": "oDDgjxJerjjy4ABE3PG5zYeWFi1tosTaFCbQDpYG4mbF7HQVNdXstdvHfHeJcHoFH2joQpzDahVA3h1pPfDdGpX",
  "key15": "228USC7XTbqrpHwQsSXopr5YMkmVNa5s4pWvUo4C9eW1rLDM4NDaZbhkCFKiBWFtmgVTwbcfrZaXJdHezTbV13EL",
  "key16": "63fYg1UVM7NC89fE2dhzuSqTmHKZgyjY2wiisf2oGnUm2BMnJH4f5np31MpuqLLzDdeuu6WRUXGuJj5NVc3UEb6e",
  "key17": "4aFSviu87aUjoGHptBdsVALiiwCGPxfmQArSWHEY7UQisU5MMW5AxMZ9nqTB7f1Zx3HAFq53kquXKqtNoQbGS3kG",
  "key18": "4eDhdSTKbNP2iqmvbGCLpG82xWNnoJfsVkD9c7dUrP8ehfVRTKjkB7Aoz3pMWXtkn95EpoxdNMbK56P67ho4BneP",
  "key19": "4XevWrcTribMWJqRNK96Z8dkBqqekCjiqcHsGiSksg2aKD8w7PYM8dp4Dq9oGcbvWSEFCbXWUZUP8mfkoN9FnpTd",
  "key20": "61YuiDFPCUe7vCjsMvzE3gddB3WwjYN6sMX4RUi5KWKn5xSiyxZgKTMKSEw5p3R2LDfoQAUE1J4qqLDKBSnuS41s",
  "key21": "2q65u2Wa9x5NNAggD4To6KkbqB6bzbUtKmpibQudPyF4fPuJZ5wJBti8JbtoDuHuoQKYHfXqgRvJuR2tc4FMc6sR",
  "key22": "4NQqi8ZoQPVmXPW8i46qqXFNvGtr8Sh8jFrsDscEy9Jv1J4bmaC97sWhBxTytXnNShezKCtwGi2yGvEcKn88fhNt",
  "key23": "zYiCjJR2hxu9jcKAxBxHp1DPxNsq75wVq1V78obT9arrUVWtT5fWQigVQRFDdTqh7STni44MJGWsPVeZ3XD7gLJ",
  "key24": "faBgxPE8A3L6VXjES7y755NDEPaZxEK4A8v4Hns7xZQR36oNYzq8PeRsNpQ3mvcn2qnMYQVEfkknYzdzU1DS1md",
  "key25": "2KXNVskV7RK6a4zH3KUMSLm48aYooMBVt3resqzCMunr4pSwtn4pTnum2gQC4gAq1B65t5ci8R9yndv2WHUE9VaG",
  "key26": "5PXkKdqVLaZAdEmShm4P5i4VkDZAzj8EziY3yDhYoBLbLLTjfP9A2zwLVF2e5KpbP9TpQhy671ZfjJyZVBhSvaMY",
  "key27": "5dX9C32uCWdRXxp8tv2TqLvbxz8e5AtXLiryXvHRwAyiRCVzjXiefgjEnySJMokFs27afTghQrSCjMvvDj3g9Vnb",
  "key28": "vKgBGCzNRxivx2qrmDKSY8HZaAavHXevVqVsZJ1SwBZVqtBK7r3pnu8cu3zTeyuxhhnPTZGtCkBejdmthinSePa",
  "key29": "5zst5kTfgCYfyqJLwohKB8v4U6n3d5Ejzw25KbgtdCcps59w3Hw98DzRh9nrxZRrqcRau3boxTW55ZGT3Z9EQ5Ab",
  "key30": "5zovi5x1Q8xCxuo2U1f4GRL82xY2GCDToCTLDH3yBenV37oQNkdG3kjP4zJLnHk7br6UPfmJg36SCYZ23Hm1A2mW",
  "key31": "2et3ErgEeUcmc8aAi2gKsdqKkD1QXckNnv4yfr9KvYL2Kb7CQYp45ZF1L3BU7tMwWagNmBPtK2P3Zryitimb6fQv",
  "key32": "5VVf2nxDqWg3hvsQCqXUReXPWgksyvAuYRqNgacw4SAtGAS7fSsGV31mcLtS7F9GfbrUa8fNZHiCFe2RT2dmvv8M",
  "key33": "2yo1u4y7b5Ep2ZNbD1wQkaJV5Z3KEXRBFaVNGJTNsWgF1N4YcsoRUX7m3hoGA8xmmUgo5ry4KmVsKR4XWjxaQNU9",
  "key34": "2TNtLsN3dbexQ1GkvdryqCjT1Vq5D8w3mf3Smuo6d9kRowZ3Nq2vRmZayTskvuB3wrdazEYy9ZK2BwCktjhGbD2R",
  "key35": "4LjsjGg1PcPijFEWF2cXupAbBKeb4Vi8d8NEc8gnVJQsYLJPNqGhskMGySDnsseR9RtJYZ5fXzX2NkwuAUgLj5y3",
  "key36": "1cp9bSjhgPBhJxEUy7SAAWHaNuGmtVvnJqKTcbmKRwoUFb3kTr99sY2PgbFaunTrj97C2q63siac6F744SRCfEY",
  "key37": "4Mz45Mdp8WPAU4ihkoaB8vaA1FPcSDCsC1tX8MBbQyHCBwFQ5F7UrXYxoBR6FJgsdLfcYyAUGx9XPyJbcFAmnis2",
  "key38": "mRrWBMFYe9cBWedr1vJ3PqrgMi7WkSqbpbxeFWUrugh8U48Ss6AZWdAhzov1xRJxnvaAUqrRjngoBGPChgjNUdP",
  "key39": "2F3SN15sDT2CbWmDmMkCVvPtdJ3kjAgZUZNCqAwox15hN7F224NUKrr3KEj2iw5jKRvc13R6aK9AJzmnbutbYsb1",
  "key40": "3GL8V5LTVwo9jmpoT57oJ2ha7P8wYnXATka9tVzwmWojvzU2awcE6DpY4VyhTMrHjDK12ndCfDThSv7jGRLvEeEq",
  "key41": "2XMBs4j8Ued3fxiKuCgfk3Zts8cGz9RsqaLJbJpr7ZpoYji6nJtBewQAziRmjxH2MLXdeA58G6fKXYJMSpLer1c6",
  "key42": "ZBGk8qWvXXyGsvz7rehf7HU53R8AP1YcPjq39XsrzSuyJ1VH9TUSkb7SLMmHuUQz3y98xM7q64xmpyyvyZr9fCC",
  "key43": "3kC1fg8QNWCbW1is9z2jAsSDpq37yogFhLHkYBFgLwTYuytK1Q2qSuok3NnkAUwZtiVLiUMwXss7qaam8dJk3moK",
  "key44": "2csqeUmektjjURrD71AtP34UKhHEY2KzLa3K5Ke6DNYUeFX82giJD57PGGX99aT8tFGpPE9UPqfidAZ5g9zCvJgp"
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
