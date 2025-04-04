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
    "5MHuTufEaD9zmhNAn5a4GUb1uwakGr9E1xuEiHLAsgTwFJ5JNKaFmuNYcjw22kLbiFSiXVzAerFJBH2dvEZcLQzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ETm5QaNPSEGyXGedCYaaJZT7LyHK5sk63XaASusiMUPfcP3MM8H7XJjdbJwE7dxEFno129GVXxnVFdQUEBRZ99h",
  "key1": "4BvsWymC9efuQRYCx81kZ8tTPHQHYtJCGGgcyxAUrzftdVJ1prLj6tREU9cqGh8E37VCFNYFU47Tz8KJxnuEf69u",
  "key2": "17PBjYkLTzYHF53TF5bJ3Dq6KEZ83J2h4gP4Vxos53PXZNMnMUT3bvyPWn5hkEgBrR3QZkrMxbvD6JffhwNPtAS",
  "key3": "4XpTo18JEXUnrnPvpW9cg5TVPpFoHwtMT4MNdyp59tfAkqresQDe8qeNM9gAb2zCStDJhj2Zuc4RT8qdQVur1Wea",
  "key4": "M6JoNxdViyuVPrDB4wSHFh7F1W1Tq3Wqe96hdLTjMJgV1rcKTsnjxf7hoGhV93mjRXK3jkxUorov8cnU3tvwh73",
  "key5": "275hu7uR1jBcChmE36kwCTcqGkAHYAJf3VvrGw9ee17KxNuH7kqpR33Pqc9S94eh6qhhQUqcgN8QfWJYonnDcVEG",
  "key6": "3bxegVZnZgLTkmSVHHKz653GbVHApxQedKxSXEQPapW1eHH2kjqEsVHb6BVgy4wdA13nyJbgeTQHWWD2B6vaHM8m",
  "key7": "3hvLuwhW8p63BimZgSSKrpGJaw8iCgRFApHACkmESNSLBoVjniSwGqV9BRdz5aRAdZVgV8U1x7TbA769v59yuqcb",
  "key8": "JHv75PNLVYiaj97N59cys4kPpQBKr2gEBUpbZ95XV8eUVrnUt3789FHCjbwpE6nuT4Zbx9XwVd2M1n7WJriGjoN",
  "key9": "2YmQ5E9gYD3erdXFPoB5P6qrAqFRXSX6igD5bT8wBmTXcHqe6jV88VbAaGT3u7z9maUMoYDHBqZjTN8DNJ9HTGtr",
  "key10": "4GNRc1YBFoj5y3sZJrzPnWozfNPEgCJCyx3awe833HnTDvK1gUqxVr8H5odhcufjGmPLGtw26r2KEqHXVVcMffyW",
  "key11": "2VgBK6zk21Poj9AvPwW3guzhW52vpMxY71aHRn39qSa6wNPE5iuR3M6nvwFKiPKgziBjNQ62zqXAW3WFmrUrkvRA",
  "key12": "Loa76deNGK41azisEPr8KDKnkmTQwqUrhf97Sfa6xCsQUV5xEQTUUeWUKvNQzPHbvr8Kt7qUMNzb22UGLjSujGX",
  "key13": "jCxSQPdmgEKYG4Nr51DqgePThoCmhswhzJjAJkqVVbs1nY9rtttgJd1ZdFLMJYNrgkxAReMtnhv1a6Sv1cJEi3H",
  "key14": "27PDTyP7Efx8FjmEwKiJGv1D6SRLUsZnaT9fXTvPyiu8JvPb4hxyQRvRskAkfhgzLTe4q1xxV34m19JKjVVPyRRT",
  "key15": "2JtroUzFNjDdceBFm5U8eMLKHTdXWHAQNsTqxHWQLAP9Z58uw2Mb1B9xWVPRBj3qMkqnBJwHyPZEfmR7VZKU96tR",
  "key16": "2MnXCeen5VoawT5zxm1mWBHkiVq2Z456tH1wgdtLSAXej6rXyMLeRToa6EgmwBrd2VpwBaMMUm4eRHjbh8LDUwUr",
  "key17": "4PpVsku1KUg7cSdAsrd6FiM6qMkK9KkAvM2ZJ6Rx51M5BN9pZQeBcABWwCucS7quSzCsCsRx89Uw4hBKrkQZ1v9a",
  "key18": "3amVwXjwwtyJe4Nx4d8dSBUo7v5n49HxvtnLzTiNsVzCmXvKBcYJRBDmS6VWPxRGSqPHLYPaJgCYCFHmrxLv9uKe",
  "key19": "48NwXPbaYhU2Lp9e3dujZtgu6FZ8uAXpK1pKnxMuBUMG8x2c8GTi99udZvWY3FfSc56WUJ85LvNuixo1R5Vskj32",
  "key20": "2CcRbVBtiU65VotKPMAYtxKmaxT5nxEyv3rPjNiaUvLGsXuf2qJKdbXoYwhoNmYHi2Mi8Gi78b9UNRDgeUVeKfgx",
  "key21": "3x2zaB8ASznF7fZ5YenPVerqEhVoCcZnJabU3cYnyoxNk33GH6E31aPHsMsLiZtoD7m1qdtRJGensRmNTohAUG5X",
  "key22": "44Nqvy1H1vp5nqWD67yW4suabcEUsvfhDfZGQrCVT5DDt5JxYiHbkQVSorUECrsNhj3LmjHpsrk7suffNmD2MQMf",
  "key23": "23itfoTU1rPurXQHWMf3ufYPD65T2QasdK2ygUSVRq7bMxgwQzPHbrxARfpx2KNUpwXXLZQqtptMXLBzJmDRKMtY",
  "key24": "5DsPrxk5M4pZTAK3YbPKWuGr7uthtcuwvK3e9Ab8njfDseSjcsNSwTXmbY74JeKveHUNobEoUipMfWMKRorAEQNT",
  "key25": "5bfYf2PupNtxCqPRT3EzmF1UibkjT5Z16ai1FbE9TEkcKCfs94domUL8YTyNu2iMY1E73w43aS1nYXuDxPU6zKpi",
  "key26": "3CjU7PuwA1DneDKmWzAUgCssB9iGbuYE69DH6BDQhE812USZM1YbL63Y1TTYr5oDA5hiJXCFNWC4tHPvqoounkJr",
  "key27": "4Vm8uBSFq1gDNUV7dGt96i5v97qLR6eiuS3cRG5mPkYWrjgaYyBdxtAhas9q2BmoFJTQ3V4nyZ8aTry3Cuw6dD3X",
  "key28": "5yt84PvUa6gDGRxL8BfsQ4Baj8vHb4ZwqxYLDtwyShsaCjJypFbCnVnqyNaagGcfdwFstewGicmnVr5p8mx21e1c",
  "key29": "31AUkMuAg59brF6CWyYnvuoPfNXFDDPf9ELXvcjMr7HSjmBxUvV8fXeCf2G4zNPJYBHHh5PYFpRXH2vohFyiX4Nx",
  "key30": "5WuKmybDmS6DJsq9iZVmEuy9AaUrJ9A4WLugbi4u7P1Qsuq1T9WpwisZNLtUV8swxgRzpfdv56K3qfWktXcTHbr2",
  "key31": "5tm5wx9ZDeEqBrMAVHzHa7wj7vcGrchDd4G2Yv6CaYJtTCh6ARKHsRSZVpQLEXqEz3srd16uCDgPJBDHBRcPEa5c",
  "key32": "3fQVi3ryU16F7FoKyLJaZ5FR2anti6Eo7EALkKMf729cF9YKfZQ6n8MsPnX3wnUPF4MDqxu9NURAGZRqw4dj9kTx",
  "key33": "3tKqUnTHSP5quc5ZavyRnHd12dryFQTtaDno6nsKPMRwsw4dBVMbqFAAoJdCBbY7Gm53wLKjBv3N6Pywa6tYSBps",
  "key34": "4maHb4RML3rwjP7H3jhxT4L4XjMNEdEcJgAceT4qEYoHc1mU8psyexQRL3Rso1myiVXTVdvCKqkG9qtMuXRH3djV",
  "key35": "3rxq5iVP3tysxUR2z9A1DTFKJWFv1iuvRAP28uzt3ZKq6PLAUGsfy6EaZ2qvBAxecnyKAPdjqbDP5bhKLF4UW95i",
  "key36": "3zDgN7yUUNEJx4eYHnckdzVvUbBUtS9iepXzLv84N51gDniMGQtn7ahJPQhehU6LGJGb5mYYKecnBCJvbGVkwiku",
  "key37": "5YrCN8eWgTfKS7PLC3oLq6QsyFjN91CVdHa7EtzzTuc1Mov5df6twWkmjff7gHmsRkqc58nwUcESAAFsXTpN2PfR",
  "key38": "3MSbP5qgPRwiL5inRbFJhy19C1HvFvMuiWzNpcChUcvh5MVMCzsNpCC8g4cYDvX4QBMqzwt6sAb164z9HVwGZioZ"
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
