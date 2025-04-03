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
    "41pxrQLk1JTiJdSaD9X3m73iBJ1Lz4KLqkPgpuSUp62CM5eqVspH8gH7dqCoT5SfznLdyZSJwBiEGX7actFKqQRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mKPATtMgfbWGkDb6Rfs6NAnwBRgHBzr2AV3fzmzuFJAjzWdaZ2QK9QXHgDRgidUUWcNXrDEghdmD1XZWM8kGH9q",
  "key1": "48Lg8uBR8qCtq31RecvV5Jss9nW44zJ9526a36wxP6Yc7WdWYsxgDv9kYFa1ET6ULtdS6WxyKSvHRMv1mujfyfJa",
  "key2": "5ZPVdnxZ9xFi3pwu1YaTfuvvBqSPwmLeTQMM2bkVi818Eh9NL3DPv5JdnCztKH6j1Fab8BUkLRBMD4QZ6XrLU8y",
  "key3": "3uDp8ro2mg4RDbL1xZBNVqtbKFW1aRppGbkd7jotGd71UghXs39ioBNtAgCfE44TvwugsPF8x8ucuAmNetqfV4EA",
  "key4": "5HHUvUVoGJFu1oqYnmxpgsgLRJ7aQ9H2eLYByQy2Xf9uY5JhkGirTGqdKX8AEQNijs5XDriMmES1jrxKiZcHEBdY",
  "key5": "5QteMVcutUYdnbY3t5fyHjQbKB8mn1z4MqpNYGt2FmFiW4Sc1VTya8ZXc6SSuL9emX2R79F18aSpe2ef5tTj3r6T",
  "key6": "4VE5yHKFWcwvNk8Nn8LQG8e7GFDct9mayeBK8TukAwEecuNkvVF1jfTXdZAPt5TnbN4bT315gS9YSyGMnG2R228h",
  "key7": "32YdNTMEx2qqaFbwTySRaDhJj9ELpgLf2Gpv9KFbv5pY5FNWThWy3xSn3K66VAAwqqVeEAucGRo21iXa75VcwXsc",
  "key8": "49gME1n2NJqtzyL3a4fMALEZu6EdssytNevcFrKu8xLjWHrMfSun7P2THNdEHTHpWLCVj55FHGwh7KFtCLzF7sco",
  "key9": "3trgyY22k7VDhdT9pmV7hVCYCnGkHhV2Qm8FHmyNiGvgmFBRAxCbd2cnXyiumB5s5TAFJ3JXJddYWjcJ82ohMjXf",
  "key10": "cuLywJoHYzfgUw82QosAo5fC9L9x3N8j1ny9FGseF8tmR2ebcpChKQVdH5RQN1UY2oL5bttR2aH8uCc4yS6SLZi",
  "key11": "2jVVvT2WJX1p3bwHtRC6pPqgcAdkYcUcu48yaB6JRdDB6wiccuqMcsevRQVnVrhtUSj51YkbDsJxzHvCgdRH7NAy",
  "key12": "TpDXyPm7LhCkV3o13fYZQLKTM1xyyXB9KCxLfEBdGjMK2PETuoTfpKqt6E26iZCqdeGaSD67a784rgtiJcEAr2d",
  "key13": "4zMpYzmkXKbdxygtF3VgjUMzj2qwxDk1U4aw8p6yiCLRdTChZdFuPvHsEikrcZkXXrN8nTAAWwp8P96153zhCjJr",
  "key14": "2Vbp11qpNX573rqjrhkzUm1R7n8ipQKF2SoUh62zCmwe5YrQ5x4P7nSyJJewLpCrAtumUgG2SiogUWRZeQqDUybK",
  "key15": "tyCGBSX6QqcobeW4JZBMuRmcAAQPPoeBaHxJSFZ1QuRvqtgHLcT9xXY6DiEYhccZHZB71CaKXfiGW8nnRnnUW86",
  "key16": "3UDxf4WprcTZvMcQiUZE65yPHbmZepSzU4DMnSbbF2aZuCpRGEnSjuVA17Dto7A4cwX3Y5rcrzBkiK6VmAydicdL",
  "key17": "511cxjn9mPynofFs5GLjMHMTHiZqSJyxqsRFug6ZRbGfP5Ezf7h7q2y2yrULnh4HXXd3ygccDndHEvMQNVwL1qgo",
  "key18": "2E6n6hQEGAeGyt8A7bDntPnajPizF3hMKrT4h1vc4SdJrR5ZhhRZauoKsVijEE9iDy6aLcgE4rZ5uineRYVoQR8s",
  "key19": "5yPFdemJb4Xcpk4YAi9aWPiYhCqhtqs69er7iC54ehFJRhoEGomno2RchRuRxahigG1iSveQmnaAzmrm6euHsL9x",
  "key20": "3y93m2gQBrpjN5exjuxaJSRNWNQCE29RqEQTdJZDL6ZZ4kGokxvFUM4qgyxc8P7fJordNqnhtAFAG4nxRzjMRTJe",
  "key21": "2uVVAj7cDDjipPeS3V8gBAWbiDTZ7qNCFkoWtATP2w43bjzDWQ93ZfceriPjLyAQrvTxtKgxLmwFVVnfNa7tSpB4",
  "key22": "4wPBoWbwBiu6Urv1sU2jXETcX7jPENCH8anPdoi12ymkeZou72u7G1usZyzdQFYY3YMjhBje71kMUzVn9ovxD8Cn",
  "key23": "35Uo4hN4zwksCUEHJ4Sxkg1n4MiY8J8tQYEbhvaaXhEQHibs4aEkaaJjHPs5n2Sj1K6p5R5BsksYzTD7oEaavrBW",
  "key24": "4fXnPQ11wVU9brT2Bu6kmP1WrwU4WcZNnf8Q3JvWdTNP7Lwn2LZt1eqWRazNHWHmn2S7opUvQLb9uBLyWA8g1Lta",
  "key25": "3DeqTqGguPUt2kdvwgjMko6FXadFfkSrUVF3bYfMRV6o7YeDTDc5kT5QPkCZNz6v5WYMsmK9UQfcWtbbGdKxzcAk",
  "key26": "3daDyfsBXJic92jyFsE6rBx4nmGMaNbcLTyNAYqMwyEJsP8QUm5z3Rdu3QqxNUERwpCEVHNP6m9tPKLoCTiYoMsT",
  "key27": "4FoWoo45v354AY9RwaxEN29C9NvYUZLZSdXHXkyhB3fZtSie61UU6tAgBR4YT2N4AuDa58rXnQHqERpeNUpNaDEB",
  "key28": "axYdko9qvwTEs5QrDMFCwfS94mc5K2E4c4NCZ5mi6AC1S4JJk1ux1wpbKy2Aom2aR6Hao9GvZzCuTu4BaSdEszT",
  "key29": "5NHdRzkcSTZNbpAxzi2TR8H9eLtt75FDG8kZaVZ73XSn3CpDFYyge5J1YxEZ4dvVxnPExLUijjXB9B5EJtBo5aSZ",
  "key30": "568nkKEKhKb3tf39gZ4LaeBGLxNBjgco3rj3g5Bz7Bh6sP3bTzNCgJSoZdgFEPe4NNWZMqXdrwAZy5ShN69CQLn9",
  "key31": "5Uk4cLsx5CErRXRposdsDkqEMeFGbGi2JBHpteXdhm87ZdV7Cu1rkuH8FoaP5fKNw7vZvQokdhnwyXN72RmQfYNs",
  "key32": "2oPieRay2UbrRLpTi58guVbE8yDFgwvZLvqZFPstjmRpox54TSd9fJD7XR8fJNeKkbyCuctvFvLaeFpzPGEnX2d7",
  "key33": "2MNBm1vvBAoWKXnSErjF44CXMQBi14LsLqumGrmvr3huGoxLrgVyPXnHod8bUDXZyggvMnmf99kSX2HwsoTibLEv",
  "key34": "4twLVrXJgC6y6cZnV3njEiKDAfjo9Jybu7AjPAJCHz8FiqAR7Emkw1aZ7LHUJf9DrGS5zL4SvLHnf8E2DrWKEjc7",
  "key35": "28iYRFVo69EM64DEkYr1kaFshkfAGpjQSsxZ6xPKTDeFWrYgXo9JjVDUhPuwUbxJDEiXpkHGxBzcTuCx18Yqj5TG",
  "key36": "25UyDyq8MqtG3Mb3s53Ht4PMXJu221HksBPGWkYzPV74cukGp8LmXtRQLBnU9RRzscnXxS9v6gCctgU3UDRCxgY9",
  "key37": "2TSxk7NftQasoP5uPD1mBgxgNj5jrjFD1jm2ZJpvFFR7xaKa9f2hcDhmzkC6MXz9MCuhohg7nEb4s44JyejAtELZ",
  "key38": "n8VFk9cNnvtNKpmqynjjFH8cVBQ86qK8oQzH6P61Y6ps9GCQDN9fVMHSjKHEn1dbJ2mVR2oyzGMCeDPqAyWy7df",
  "key39": "4kdkAPoBW4haRRzNsc6gZ2GEW1L4kvD61x3g8qQte5kxbicAQLcgEgeZVUa4Adi5rb8xXvPB24DtEUDdKFEz561e",
  "key40": "3Bpk2F9rS3o13rH1WLPkgnmj9wbiRXxmxiTnfnUNWEiKYaQ7v391wUP2jwXtzyQf1E4qup12eT6YfXDEVM75RZPk",
  "key41": "2cZNop3NSoimLS4bwPDepJWxKCjYk2pwKDtkEv87AgGDADLBkcpy7T3Xtgm9r4Rrpojnr4MrBNRkXBw6R2KFkoot",
  "key42": "2QRpHnMjKkGqVGMRYTmccFkedMvQCQnNT8k3nHkpEmZf7LbJHRuYgqDGDEmwKjxysWAS33UrPYJiYL6LHaafNWab",
  "key43": "5F59CWEKyipyzb7TDoQJH8KAckqvq3tte2DvYEwDsYbTnzrKqueDajKpNTdtr3MrKhkVdb4MMNy2x9vbPaW4jXgB",
  "key44": "2BvSAfxc4WiQenFN7fJSEdKiQFxsMcVnijUvJT4L2n7ynaPvdNuu9eKUnUBmN2eEtrKUbGgzuXJhM25SUA7kP6yE",
  "key45": "5JQre1qcshzANEZu4bgAynCXcTKYxJSvoEg1993xd7pbQv8G3KQVMvL8yDwxN6tJaoFX2QD1SjWkGDoq4BqnnyJf",
  "key46": "4QQveTr1yW4qvdEtetpv5VP2aVmnR1yHpMSuYHoLhVAsb6FmrmzRPdToU26u8q4KwdX846nfrUcnV6V9atn2UMG9",
  "key47": "3BuqaVrg3KACL23Bk3ozN45iPgF9erwNvA9NigheZEcg5TE5JSuYaE4WaDqymDrsbWC57ZtsvVjEN4Au2fHm4yKv"
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
