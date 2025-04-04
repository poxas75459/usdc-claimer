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
    "2Ye5nkrMQgYkBHR8g17vBHm1CJo56vnCZ22rTLhobh8WUUucBQHEZcpYgAmpLjViBpuToDrF55EtgpWvoYF13YQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3czAgRmd8oVT9yQbKJcLwjXXrkjD6Pwozn9LgGMstrKJRFcbdoMaMQv3a1BtQkd88XqRSLcA8mjZ4XpCrtttUu7z",
  "key1": "2nZMH2CncynAJ1mDrUGJvfKNunXn9rw1oDTPU4EybvTFSbVHJ11BXHDNUgsY5z76tp7CWMY3MYECCnFnPggPGiBm",
  "key2": "33GsxEwFQFFLjt2LmErFQVT2s4fXLBHSwnCxSewz7qDy9a6oDGCb7vZUq552AswwhgQzoYeJQY9UdkJ2s5oLnkJo",
  "key3": "XLbPwus2deN4VaG4xqaEo2Mt3C2G9pi61tqHzkdPCszpJsGDKGBnddJRXyQQFT6K3Tmq1CfEnNP7eoseAEGDjkV",
  "key4": "5Wv5jPm5KbRQVBNNtnfw83hsnS1F1VH8Xa2MC7GZ5dwSK1NE8FcY4pcXSprU4bzwDwaSB36bSMaPRtPfopjsJHdH",
  "key5": "2ffadcSprboPytNotgXXaaRZVNHCtESgJH7DFjUFA3jstPJs2hLt6Uzw9zFFpF54b3agcvd5H5j14nCfmYbLa98x",
  "key6": "44yKa4LaiopMbBtzsjjzJyUSAhqNzUnE11G2sVpNpik5SUBHY8GivV9TUJZpcR1RvWuyAtutctouKgdnMHkKgfgB",
  "key7": "29wAE1jFEbAebpcPdyW3texLRhm26dTmQX8wd6UocsMkYNpnzAvD7Eqv3GiEQDJDByuMfYNhgsk2bU9HY4ezSEpf",
  "key8": "4SxDuk1EKZH4AnDzeunrQLJr142J8yPsxeMjJpg66SZg9y3GNtpevAYjz4iZx7ZLZaisG14q8bAKjnB2v89jtZrp",
  "key9": "4BTGRtfpisdiJXAP32t2HZR7upXZi86CjtUPUMmQfgpPCYRQoNybZEQAsdnyDHuHgLVFKT5GXmS1AXi2yVpZEdZo",
  "key10": "5phAvK8WCKwGVS3ogMPZfqgkYoZyWYB8U16xHmNj3jFM5KxkZ8QAHFXLU6JxHWFFcmLDmpkpKpPSbXGj996CZkB1",
  "key11": "2piqCca8ZfEYDoqLZ62sSvHkFADTUgFuKxsSBSTHoTDsXzPp7bD5nU4KRch9PLcUP3NQYKhTz3SUfxNpP8tQJ34p",
  "key12": "BU6SzZnDAvt4c7W8r2BD1hd83UnwAzbqLudueq6K8boTUtGBx3ytgjw46BTq81PPbggW4aksx3TU3WHRQqhVC5W",
  "key13": "2LFiqQ6Ujhp6BimW7F7DZZwzS6QKnRxB6tVA94tcTex8sj4QwDYhtoyfRmwZV52F7Rwx5RJ8SRDaRdXdE5BrYgK3",
  "key14": "4cQxmN2wpfQzcmcWzc26AXLcCGwZN8ic5D4N7qZ7joN84cyD1vL6AFJw5ZkFuW6fsCQnYpRuB2L5ap5A3aHnxLko",
  "key15": "3Ruiz28FUm5omJkTrS3j6rqTBcZqSY2XRDjA62fZwCBKoEuGvKKnB5ZuogqSmq2HM13cacuB1SbSB3F3MHhJPq1",
  "key16": "3q4SNeLGtJNuAjb5cBK8sigCufmUXfSojyNd7Uss8KM2uYQLKdWiZKytXoGnvhU1f5k4owL1iwxVvf9D5o1qPqEV",
  "key17": "4aiWib45fVLfc9DCaSMqh5cpHiGmMqW3CXS2x4jehKhraVUxuiYZfKp8B4k7hshrBmnLWgFvEV957nVh7B2rDUu3",
  "key18": "25MCxK5Vni2H4tUF35fUfLWTVDJi1JSSjQCEzTpLLFj9bM4qkZtyPktBayHseNDoAzp8Q5uxeUu6JotBUCtEZoMc",
  "key19": "3U1bRAWsUrmYZVJMRsyseWj9zZa9MvRAgMpPLCguM2LhuZMKULcaD6ZSVSqPC83EJdQNTeRCq9HFgsgegTDFDWR5",
  "key20": "5zM8VfvC31nkyqTtaqgs8RMuxECm8VmSuTRcEZAsJM3zeHEDosUagQPHN16iGc6japQXYh83q4YNgdjdWN3acpV3",
  "key21": "Nt5T887otnxWAoz1jKS1owPPXCcs3M5Qj4UGj2UAzZxyZ36U2uTpfsjZU22ZuyihLRU7jUocpo8etvM6KDPtmQK",
  "key22": "W3pfgpLNnYCpneZMDWbVHXoQwrnbkZd7PDkb6Vwy9a3LHS666AacQdAAevT6LbxffkjYm6KLSg8p9Cdt5sZXARq",
  "key23": "BQQuxfHnc8KEQrPcfgV7WRuuLnoeXkGEQRaJnYP5RUhevLzAu8juU1rSY2iAzdBsMSDqCrcpKHqX7vKjrYPu2qr",
  "key24": "41MMRs6BCJuNLzJE3wgWPG1FNs3qHEiLzAFQ14fwHk7kK411EiLYHS4BKxtYksQZVzr22zYWnDeCso2qJP2Lftjx",
  "key25": "5eb5BZ4eF916WxbL9rupGoSekv1RK6Y1QqnPcWbffq9K5qQy6HVkqP6N9FQS6fHpVtJkb1Dzcb1ED2UqZxSrFK9q",
  "key26": "3SZg7mEQ3ren8Wq9a1hg9zsjb8piLJh5MVVS5w9tRCdXw7RPoK3VUJUrnBGzaXc6tb8xcEk7vofFdF6HDbXYKfE7",
  "key27": "62ks19SujAEMdA5GrLfcuQEATnP1UXxuo9Di2epPvQC6gDLE4gKjJEDg3JSzrWGf13e89svHJQHRXDbdaAs8Vqiy",
  "key28": "2diDZ82FUXGEyM13Gxa6gAd4N4dgtaUqPCzNyQDTa9s885tthvvTa9EkrRFnAL9C5KrViiHWLbwB7cBJqERzCB44",
  "key29": "ZkfkXANseivENYFQTpkMw5Wj9153ED1hiqFrVDF1RjQBHAAb73rwHLw3ii7r9BpQvUeWiTn3iZArjVtMuKhj2Vt",
  "key30": "3LguvrajLM7rb9b92FrsWMkKkHJsHZ1Yy6wr1b3zuDE7gHeRDcWwWzQYfdkBQAVMTPcQgjuRrbfurRkxaLH7uQXY",
  "key31": "rCyobk2mm8hU9Ts55aD2XVLaGaimz3y4x8mmjpHBSwV5J1pUNEn3Hzk9oCN2qSUhnQiz5hsvjwHK6WomNEM3zKw",
  "key32": "tQLcjPxrUKXwqvtJDrAsiJkzAZDbMpLH2m7XFmkPK8TzSkuQx1A4s8bYoUoLb6rY1AdB28aeJGGcCeeWYqD9BeF",
  "key33": "5xCaRpYH5jnXU2bU61acKB1uPSN1RDMQCFeocy94CHe2YAtZnGVP3XLs7tDphQ3aaK93KDVxCEsAnuLn9AMjdP8C",
  "key34": "4EdGSeddJWcGwPAafmf3w8mFB6ZwupqYCaCZNkh42VWgoR6S88Nv7FPDD5PSFK8SScV4Sdjq4PbFE2ijUYeFAFhu",
  "key35": "2woPAT5XGFSn2xNxWnrpdCZasHszfUBDUsSHs9Mv5re3f4VxcUnbACuQNGXPkPUVySHCoNjrCLRZLmXz73uECaWW",
  "key36": "2uTEBErhSyoc2k6xorvE4CvWBYxHJ1s7KirPHfrkaj19esUeBKc4kKsMz7dg6GeUgMsVwjj5vTtnr8rS9NH8pQ6s",
  "key37": "25n7jpkDdqAjijLbtojB6cMEZcTAv1CsQ43zzaT2j9qhxqSe6mHN3PYtWEPi4sexnWYtb3sP5jPQ8E5867SYczko",
  "key38": "3bxYjeaKAjC2ubtD9SgZR2dLaT669JAps2Y1eMXzTCkoE1ExK1Vw81uhwkXQBzAwjZGRQorgkKCG9k1cBBorKV7x",
  "key39": "5jGUuX484aRpsBqeAHQCgvgzXXKijzuqx474ic4vZcut75sytJRVJcQshQysvt1m4thDkfjWJZxN3wbT1LD8ASDn",
  "key40": "KHKiFVh8Vkn7ppyFYy2FBYCjo34NWU37YfJ8jRiWCqXjbY8Ru3gA89GGjQtDBS5MkCRqpdBB22yY5T9wwdAn8Be",
  "key41": "3FJxv4KbHWp371WnuGocaKuhtRrtUJCsXETauh5G6CUdpgzv1Qoh7GS32S6nTA6MDo5HJZQbXDE3hzMiK9Rit7wb",
  "key42": "TzzJ2VBij1gd9whs3kG8gKZB5xDjU4t2oKhdF1uAy8GFwU2dTijeiQ1npJAUCnzKqzEtbHnP7G1pJzna11vm8oL",
  "key43": "3PsN8RebUMyxjgekFiE4LbEuUqH57vH9sT3GPgPQo8dbNCGyXGY4w4zv3kkyobjQS7EsYfWDwSaS4x48Em2Ug4xF",
  "key44": "2pbtXkHjExVgeb4zDFYp9KKBC9iXhgZ98U6zmqgUbWx1kFD1vwPpdGvYFESC6a3jqyWQaEbvTwZCqv8cwRNcMV3x",
  "key45": "2gPhyiLzDBuZVygatYzrc8rHPXrshCcWg2Z9SJYBxHqrCNpEF8io4aS1nEJR9L1y2yuKi3bdArXw5hRwUPNsBPu9"
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
