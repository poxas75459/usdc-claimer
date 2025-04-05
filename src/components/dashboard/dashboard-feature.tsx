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
    "5b4rg3VbTAQQpNC6pMuuvS7kRtNtzro2WTbDT4nVYemGez5rLXMANBMyiFf7qFBT1neGk5s4mYTCiwcSKzTJWQxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ydHZsi7zFdUwgXT5qwmkd9cBxLr4cHsn3fiPAgHbc6yjuLoF4hEd2TwLHuucdxqpLgujAm5NbBFvLDtHccZSds4",
  "key1": "567wQ8Mdjo8WNUMoKkpVrNnabb2Jpaj67oqAUb5Vz8ty3wSdJJP56xWjKtbxPMZeWyh8FpF2DeSdT9RWY4cLd1ui",
  "key2": "26cFb9EVfpaedg6YS7P4mttW3x1soyUqtvbNGxahbjGNV4frEnieCbpm3CK3eAZd97ChwNSSa37mULXEs1EgBvpo",
  "key3": "3fFLswos9H3BkXD3DQhUKZPV6EcGxQBxdHcvRSJ7bMgJVpxWY2mq4ydNR2n2rUEBd9rUqXq1knVQMJ7ZkGQQ2jha",
  "key4": "BLuLk6oG2Z7U7LBNyGuNv5BHNZxAj9iWVm1vKV2DLL3murphQVVFV58Yh8vagW78qXne9R1d6x1SGFwgVjg2vPD",
  "key5": "qFeVsp4gsqbRfULPsu1CbZ2J3QAksts5uJDQjne37KEHkTXRxe6DiqujL38SjqGiQ637oZKW5ywZrCpExk7AJJS",
  "key6": "5tXcyFLNw5XHFMsytPBJcfipSziuVpmbHzzGUeKpzvJ5jgEtDuSpM24RqoSFDT3ZRNbkHibbioXyt1F1UgWdhm9R",
  "key7": "5ErBekow3mmtpVviV6EecUt3hG9npH1H8gq9dTgEWriAgCzbo2kr72xytQfGUBDWPUnGkkDvBddngSAbGT8Zd6HV",
  "key8": "2tmQ7fUjsabSFJ5zTHhvP9ko1cW2qPqidKji83uCjGfz4SqEDrMv75PfCa9FKCUrPDopWjf2RgBBpLyraGD4aTbq",
  "key9": "D2BDg76M42BthYjL3UMabqx6L1XbUjMAXusQsCsdtPN7vW9F9nq1EuqLCvvBRxpvB269bciK1e1qu8E2ZfCHCfb",
  "key10": "4ZcFi8yH95WdPpNxyruA4oWw8gZkm1txt7YxTkrQvruq26pf9Vufh1NwLER7VuYGnneHRzeANZ2dF5MLpjGc7rKL",
  "key11": "4SJVtMHNzxxVc5TXUdDEy4Ljrp1eMXWyn8YMFEimFiPpVpTj3oiiXmCHpGfHxjJ2pUMZ686FifFCLuHxfSA3HtUP",
  "key12": "4V4bk14kpWi2QnP92hqLiHsJahwMa8xqJi7jWK8JVLxfUrb3C1YUTdL3CktxciixbAVmcWdFV9mxp5eLzpVaWZKj",
  "key13": "4frf7qjyvcEPTGoL6vCg1dLezcnuEYkRxnDudSQzMmZAKtccJKtAap6bqdULUSJS1bSPo76E4wn3W7sCBRLr99vd",
  "key14": "4nPw8gdnXLZaDCz226G6rxchjQRTgeLUeF5kxQRWRiEZP8MFHASoa7zHf7Y9VKThvHFoLMyC5XXX2Cmn3SDFuRg9",
  "key15": "5XxBYR11qPm94321Ut8TcvB9EFTHarCxPiWn61oyPFHHefrS7DDhjQFgqNmmdFbFMbDAamQmUVe7PuSyEppHu1ar",
  "key16": "3qbWXFcpcB2HB8LUzezVnqn78gq27jSwQcnbwhi6TScnSD71xx1AqHYZNyunwMRMqG3epaYpGkLNskdV4p4Wcy4K",
  "key17": "3fmx4uJEusDEPx8dqs9q8i7Vmz8APgGrJxpXQrz73H3YXCcSawumaxoeAKzDSxqaq9f2CksweoX6gkvVfQupP4fG",
  "key18": "5w8FxhuVQB8yDqZtfP5bFGvmjzQ4MkYS4A4ALzmxYceEmR82hQfKFq6A3XnuqJaCqMf7Rda4ZrsVD2afgNRdyqpT",
  "key19": "5qxc1t5aBpkDjcnaq3J2AVKgDqCWb1vPUJMRxJ6XAKDQ4YTLJxE8XN7SCUZWt7oPK4XFtT3GZRmZnXSYkmb6LG6Y",
  "key20": "CG9kjAHk26iJSKSbHy7MXqp1UnoCEeDryfUbKLP9H4xfPK4TsVwicc2hsHkPUQWBL4LsYVpDciWPLipw1ed7hsx",
  "key21": "5fpKuicBUBsUZULowrGAeCNw8vjc4QVqC5dNcYN6q89kCSerjVbXFQFSgZJywCY7GEhVqbgt5ekFujMxWrrua3Vy",
  "key22": "5kH63jukCaptjX1bW4hSJXtNb6Qx5fSKh8A4fN7QaZU8jDxSnfXtZhKcMEmGo717iW3kR5B6RFcicaFsVowajAn7",
  "key23": "4YveQSwXmVy2WnXYAvXDYxe8KvWZ1KFApCCZex1UVKoSQPasL8Fmo5QSmzDtA8E79exzckrAsnzZ2q7TSAn1qRzx",
  "key24": "Rn7T2MvBH54BLomrEDyH9kw4CqXCtVsFcSsX5ch41ghSaSRYE5ZvusdtNEvkTAmVvsHYssFNoMXdhTh5LkzhpBc",
  "key25": "2HxUzQ3cJHi22JH7bVjvogfCrSeLeaRPV4q5yzrXAed8XSxizZX73S1C5u1NNxQYcJSm5bUeyurMmP359rpfryL2",
  "key26": "k6cBUVPm9y85LHAU5Cuhu62zafucfw8chsXEzuG83zqFE4t8JuZDfmrJX6cAWkA1ZxaaQLuqsrjYitd7r3zadMs",
  "key27": "4RiaUJWe3oz3jFUNeCeyKADwquKwbqt5KWnvcQgPRDJB4cVb8BTdTYbqxGU8MrDpgnnyYQLe9Snx6kAE9dGraTTc",
  "key28": "5iKJpyygGRxrX9EFBHKMXmCtQEGSKusGcv5i1azDJfS8CqDadL2ni2thVwB2oJNzGVdD7TFZyry3mU1XbJ6baapf",
  "key29": "toAUuYY5NQX8iJtZ4SzWnDkEseDmv2vC6Zo9DhzDqRne11MYSa6Va4se1uVtFuAakC3g3biKDDX7v1fgwXLUNp3",
  "key30": "2QZoGLpB7q9R9JZ7N19Vrx92qtqX2BcsDjPZ6gnCXKSggxLgA7W1m7s8AGGWSXVtkikKR6pfjhwRNgm5BDf6TzeB",
  "key31": "48sZsvGDE2h6agUt9ahyg87V753KDidTGrxx6C7bMno6zeygb2R8J7QUqKymSUuX8djJFnLiF681oHN5EkWnmMdS",
  "key32": "5GvHRHeqmKGKUDyooV7VeHKrdF9yPiaaSNHxRjBJkmbsRtX1UTdXqgBSTFf6haY7Roeu7ubPXTB8MsbMDF79f2Mj",
  "key33": "5doCVbiBytkgk9UwB5uCNhCVusr1mHjRd7gRKKW1hbkdx8jWSdpXTY4g7t5Lqah2GCh78PDaeULtuZEPtope9iNK",
  "key34": "24ZTZzH2NVQeEZDcpQJajiGjb3N1TmvozzGyuBGDYxdAgfFZAdfpFx42qZ24rw7iL4q6zEEZ4dqwBZ7CrvUzT2Ko",
  "key35": "4mYC2acQirZvCFgM9Wap32cBDshEXEk5Y4nhqHPoeopBHRGw48xcAExeuh75ZxdHXzSVuGcUq23aFQdBS8aVgiKg"
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
