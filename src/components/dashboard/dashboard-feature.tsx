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
    "4Fuc4aUCc7uijAZvC2ffNVKFvHU28FStqQ1iW8cMWV2DPr5sgRQ8P7uGja1fhmksAChKe3NjJEknKZ6g8qGQruuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aebfAG9Ebuh1WvkKExb964KomUZiFXtj9aidg3tVyZp1kF5pNY5CnHeggWJHsCvtVnkgWgTRNkYXdgk3f5a2eLd",
  "key1": "3czTbGS8WiH9nsMG7jGNEgc66rng2i3iGRGfDFNQHGXtDs1LJxKtxtqdUpaxf4dKeCGVQyguYWssTHpQMgwumugR",
  "key2": "2W41GpipWtqTjWj2cWagLWR2krCu3NYFspw7UWwYJv6RzFmHdFrogMjeRWCWhJhzT7heZetCdbFjk33FSqewUFZ7",
  "key3": "5j4zeKuffQezW6h3dNYAAddS6oeRgi4AUguJW9jevKRenx6NUFrYgHBrLuCtrrkSjdCAUS6A64Qf7w74ofQ8ybjg",
  "key4": "JYV8YFZkeU8b3cAy2L78L7KHtxh7KF7seT7dpqLH46wRWxyxo8JWfWpLD9ttsmvJApLvgc1xE58iCtA9VVD5hZN",
  "key5": "5vAjEzHdZbGHSTs2KMirpt1LYF9aaBApyZyvP1xEVRwjPVs8bJeYP6FtJHhL5HTpGo1AMmyvcRBm5WkjaE2bFmZh",
  "key6": "65r8QS2oXkPFFBQFHDf1EHBbk1nM4eLDUwy93oh4e79rXr5mvvvppJVf6wJtRdmSiuMUEDEtD9tG4ojD8CwFMEV8",
  "key7": "5Q8V8QKFnGdCbbuN6V825mji2TU5YcNK1GMPUK9yvZv5RFjvuwi7Em2DtpyJvBzVYCrD12KFEZBJ2vHAPAoW3UZL",
  "key8": "2BsVjd2ZNNqGrQEeEusWzNuoZHiQN95hj2H2x1MzN3sfh7FCbbvgWR4DiR12744hjthZv2XyZ1VEspsadNC4uteM",
  "key9": "4TC2UoFocYUiS84pVRhqpLdHbjNtNgheiLjTLFVXp4AXgFEB7hczM1QhtidpwSV8TYKVeqWhEciGusazPKiPKuNw",
  "key10": "894UyD46X9PscEAJVoeRtKx3A8kL6Jj27rkvja8y8qE6cUPQPri3KHNCrc4r4LJPAkzYX7T4xdjQ5ffgHZQuxEw",
  "key11": "2LHRV9tVvstrKo8xNkgB8Ldj7aXauknohcV7QT6cDHuD8QBkCixwks7fsZDQMLe68xn1gyXuh7dMdo2Sgu8o96J1",
  "key12": "bWqV8sAT9EWnYCEkAhXpJrV5tYStpKEySBEfuiX3qxn8pVf83cERb2K4NrUQtR4XHyPeszYBmCJTKnYd6SSiFrx",
  "key13": "bWULpZJvF9fAku8AdyXrY4xWUogntBRQMUNXayeuW4RRuF1x8WxD5KMEJ1iJUNms1atbKFrjHsYsoJHQc53BQqB",
  "key14": "47W1m7Q1u5ziM5rscG51CZFHrh4255SekwhFtxvMEyNVxtrn1BFWDk8aP5F9w3DUhuvtBLTm6uVdCT5E81kYFAJw",
  "key15": "4DEukHXFWPXHHRJaYi2v9ygz5JhH8FicC1VnBdcvCGXUDuuQFvAj25d38TuHVuwc5UMGXaatr5y2Eg2JC6MThBoW",
  "key16": "8bgcxBmHGCkDiwVhsN9Kn2ALmYwPdZC2kFZmxt3StaePbjs43tGVsQAJyKxaiCEersvZXvwbbv2Z7w4LAYohoCW",
  "key17": "3pxYK5safSbHHLxiFCsDt2c273T8ijRspMRVia1jMdCJ6haxQfRXYLPAYstNV6BhmPk3qTjpCAVXg9BYyFs8oDDt",
  "key18": "59tcCZv8uxqaFEm3tBEdAouADUnaenQacvngjyEuLdz8V5Akvtc1bkaVG9ztBErGhuSaRDCMpwVXcQFCzYKppY2B",
  "key19": "2DvSzDLVVFuqTRf4YkEjkKB8ErTc3CAk2kKPj3QM9M6M1B5X3PmxqV8veDDP5r1yAU4oDr2FTDL5oAVrme616g2T",
  "key20": "5wfS5kob2JozF1B2TCncNMf6nsPb8UjFLMkVHRRWtVmxJANfwDBYpe5cCZbZENiQdd3UfVaAzQSGocFdmE9dxx1f",
  "key21": "wgKPiG7FtG74KvuvjCUWG8gbqsAaHY4XTGy2fyXrZv7G2WbxEky91H28GwAhK89eoQNQNpGhbrQd1DzTnNTksd8",
  "key22": "nvSob12sLSuMXJVDF1tMXhHALEFPUuTunrFmWLaH3wPUN1hc8eUEURtSJvgCx6aVxAWAJMTwrNe34vuJ44kFBqG",
  "key23": "2c9jmwajBrVqTnciA2Sq8VSa8svBuLPQoP5FJaUwTm51vyMV2Jwsi2AfqHaxhRgn8fV3SdjfHM9BDUb3AJBibCZe",
  "key24": "CsvDibzGWW7wB4j6WmdceK8mCXFvATVdor616WSjidzXjRjUEYzEnTjwmr1UKoLdPt5VeYNB3qXTfLXM8jvVgF6",
  "key25": "5rEyd78wUCWdSBaaT1re34jEJ7EnxuMA7Sh6LTGdJYJiTxKsYRQuQaB16tVh5HLfDvnzxk4fZfowi3kyy4uzgEyb",
  "key26": "2NKNHVFqQarFFQyerTpb37hiWaxBhZevxHjkGTxwxKFykV4MANZBaoBVwy8g5AVBxrEpgcVjUdWFpTCJgLf4ofxc",
  "key27": "CtMnx6wehexgc5p8sACv1iZBxhRSmiK7dT14SkWiPaVnYvEq78c9NGgRkLYCjC7PyEsNc93H7hyVLfkPo3oRi8i",
  "key28": "2hALhS24qKJx69QM2BHhLkxM8d3tUEeqsQsUPYzRQTGvNgdBJNiWcfNNFvaCcTsaobpApoErTgZZG5qUAx3C2HUq",
  "key29": "2JREoo8sZzDYvRGyv2ZDduu6d2164QqbSSHY1G9c4LoZhgSWqJAc3T9JdGKJiuDQBBTbmZtAjTZxE6cEdqLfNZPw",
  "key30": "3HeStDPi2rZtkkB81WinhehDbHSMZasSFvBhkpBZ147BdWjSASepWTTMK2C5EzQaSzJWMUtoZRTc8DUofVRZPgvW",
  "key31": "2vedUAEdQS8p6QauCa7XmMiTHnddwkLkKeiCDHLKWxMUkDTvdrv3HR3Cufpfxdd7poNxUX8x65w3QGepmQS5fLVB",
  "key32": "5ajU56nVLTSAfBjgiCFBKC46zq8s3KpRizskX5vosMBYG5f8XebgaX9W1hz5uEyoEKdpAmhkRsuzLGzGzPHiGMu7",
  "key33": "3JDtYsbEnwsmES27RS9Q3awvF15reZ6MthNT3p8myQsPy6wzVeSGCz1ryx81Hpyi8rT867q92Aa94xH3Emv5T34w",
  "key34": "41nKtm91y1Dbzoom5UZ6ommtyygyPfi5KCFEuD9og1488bzsvqUtkzYzEnuxQYuxcvmrv7oLoceayaWvbN4Z1iEi",
  "key35": "HwcrJYuGpMTHPs6aJD916zySRpgvTqMG1PiDZ1fewdC5yK8VQzyiPb9b7ZY6AucyHFZwNF8gv1Pp15bYUdqwA4A",
  "key36": "2QTzL4nLydatQYE4xPyZzU49qrHgaELz1cyCWcJZc47n277KFN1AV4ms6oJqZjTzTC7JvER71nhghUpGwJZ9pPjq",
  "key37": "cWz6Mvjfgc6tzi81Bgx6usXYfSbgfEFJn6gpWqa5K6UWW4iMXFrX3oMidMnCfJLNsdAyTSUgiouSecMxhCykzoy",
  "key38": "5B39HBZEShodgLLwLZCDB3Z2rU1a5nC6CorhLxY6unxv6azgYH8ccuE5sFCRoJ4roiGhYoDyzLErqt9XvhRH335W",
  "key39": "2S7CZxiF6GJHFoJnCzGpibqTyY9pX27M5z2CBBhUj7azFS3nagiM45ZMQ3L449BLVVbJ83EnEVkrcKFqPf2WreFx",
  "key40": "4aEoSmQ52gbHnB7Z2PyGUCc8ixKiXHat9C5bLYiBt8eV65yYcBKCRQv5rvQ15vEhqJJXBtFXMH3UBf6H7c2BP696",
  "key41": "3XvezwabYHPNxNMR97ynKNQ7GDqcnskJJqEdYNZukKe28dMCSgUqFM9mZeDfTJtYunGXwqk3BJCZHfkboFdCjenR",
  "key42": "2QM3aJBeYa3YDCypo8buAfN7m4Gdm6EzxKGqrNtrJm2afBYpra4hYn7XnWwQaPLaXsdRJ8trfPtGd5LiMpit4NV1",
  "key43": "5fDEKqrcjt4UZYbvLker8yHQGdx8YpQdTLLCL7SDR9dnQqeG7tkoxnaCw8FSuTkWjm3zAPKyBRfiUkyQnBZTmiNq",
  "key44": "5ivTrv17p63PvxuVTP7tZRNjLVEocZXcy1JgSVYFJ8US4Fp1ZbPzR8mLpUN39QyKJDdk9eb3DmdPL9r2UWxR8pE6",
  "key45": "2twc9muKjDBdWjXaBhTKry7D99ArkNKgdVakGeTPQ2WUEWAqfZYzXyaYvn6bcjKFnqjj8Nut21kN2tnShndbhSkw",
  "key46": "2Kji3v8DuKBmmkeamuBQLDG7g351X7fE5sqVtq3XsLYQQX81twq4AB7WoK3Hz1uVTnq6ndc9R8VqCJtBMUsN2Ctr",
  "key47": "4LnLM9HbQb9iQdvnYJ8Nf9b6p5dhtBycAb7h6YzXNBDx5LdAquAxyyVeiqED7MNt6EH56iVpirdT7xvdFugZ1Xb",
  "key48": "35sPxe6CyFgy9fHo76JPJzN8DXvP25uGJgndqphctdiGNPJugvWPDyx2KrMUBubwT4k2BGmwJnw8WqY18vq4oPqY",
  "key49": "4RNtAPSSeLk6q2BVFUp2kZasRXKjhjGD7hzdsM39opDSLBY4ZjNABDd41RZiCpxUbwUjewQjgibxL2VWbGS7pr6W"
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
