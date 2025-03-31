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
    "3VMPP7VvDxhKiJMkRK1ZMSspcTw2SDf6jx3cn1i49LrDzWQXJWt4fHnAgDkseJxFzRuustH4M6r36Vp4KxpqXfrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h8FouiGJwBYSD9hWs5Wr5Hdm18cRsSCbEtd4DHWVnowv5MQjLHzhZG5VibtXfvCKaFEMDCizEqcQFmYuma7QLdi",
  "key1": "isU2y724hy5GHXdHVQfEJrvCzRroASyWoMy8SZPyc1w9ghKSKDCHw6Mtq5mQGNN7mcAtnHU1KRtTCbVy2f6pz9K",
  "key2": "TNPWj21K1evCQdxCWZ43h3bJhkcPNnFvQ1w2YtCbmepii9PwyhceZgL9gnYiTKP3o121oDKVdMTVfaxTdz6z9js",
  "key3": "4DyDpp9ivJhwZbVEmZ2vpoNNYVraMTCZfbmjk95nZinvXLTGfc5zCS6SiMag2wYWGxdAvYWDqfjHDMJshJ4oRShf",
  "key4": "4Jt478giKFDDdjxtjwDgS5L7v2vLfE9aFEdnZyptPmVQDy8dBS6vxw3nWPvTHq9YvHVkn4GPhWGVPb91eALb3sUv",
  "key5": "4uuUHTfgkjjoR7BwP2iN9PMDN7VErV22JK7rTBKSmf3wVWGtNSsmcdCtJ7qcPQWokJEpcAJAx4MUVC4Uct1XVx3D",
  "key6": "5kzv9EszKAcaNXSH25kFigRbg92ffHgsscXpxB4cmjoCTwykzdjLvw3Ne7XMTj1nHriG27nhYxNf3yW6kWe1Sqoa",
  "key7": "3Ga6CK1jnkanyJVHV7dWQdgmZZDUAMHadt7Au1RinUrWR2byEV96MY1bGfGEoPPQQC73nt2vUfQpVWEhEWoPGY5X",
  "key8": "2CCiXkrfMHst1NBfzXo8kY6unirKcW25NMrHVFSnjj8BDDLGtfy89j2RXwPNGBXT59fRVmYMvxAxrPTFYC9rD9R7",
  "key9": "5KKppEfrxGNN3J2f1uUoD1JBkEXCDedbF6kJ9wVrnRdkxtJdUVCT5yrD7FMCuHkLBwekBeUB8swQYiypjsDAFRvL",
  "key10": "4kFbdq3kFE63afq8oFC9Rn7vnXqYvbAXgR6RZyGQ9uQuPnGPTnGKWs7rBYYsxiypw2twmtVxickJrpLbFx9ZxZAr",
  "key11": "FZWGSbEE3jNeYdc1EVex4vigqxDbifMUDhxBTyBZxU9vEUqmS8Tq9Q7wBuu8kQ6QoK6NaeLJjXfUTm4T47QcVvC",
  "key12": "4viCXJL6UutCNPff9JBy4mwYRWqKZf1BeVQqv9EbxWe2K1zECFrkT1iWpWHNBT2DfTEKM7me98kd2Z69e6dtvJYT",
  "key13": "3WB6o93iaQSsLmA3sRyxgCawG6hd5asgLGWHacNDSJeSfhDtiEUhd5vqbySg2g1RYRnMNzuMtSiqqRtX1uYRfnfs",
  "key14": "3fuSn6uK1H7EhPwt3ntCRCEDeFnn1adKDCPxrfRGBcPNXAgu3ihYux5jfiAsT9VNrYJpyiE1ksGUvLdYySrQSsH2",
  "key15": "wM2xFZHg3TCoFiAZKTTRoRcfN9ozGSpikEQ1TTJCpSdzUqVgz2vaGowfyHFdguxdqdE3uinBnByVh9CN7VMpkF8",
  "key16": "5QfAVybEyLBHqLoi8QXoSzcvBnJFzkSR6ZQaFNLVN2f1Q1Ey8j8NMpm4TGkvdjzVRf7LMdQF99dM6LhfSAXxL3Ld",
  "key17": "2id69HKNXCAybcfEcz7tk1yce7DPzH3wLKr4iV9EMNGh75DQCwyuZQNqFmZQB9cnzuoBMkBL5fX8SdmxCrsNoZqU",
  "key18": "5kkguo5BfykpQPjKRMxc7cnaXpFjVKXTTokbmcDkdkC2yFwsL6Tqa8iJRU55BGpGbxQ1QXqwFzB5wSG5W5smZZ9n",
  "key19": "5hp94EKybB41bSrPEeSJPUKzFenAiCkuwNfKhkYxzW4nU9ZxKLpvEkCEGwCzYAnb2SEvRCivWZXhfrMgoVdpY6eu",
  "key20": "2ombdgmuRFtpet1ZM8zhHNH1HBGGXM9dj4Qmc9zmVgUkhjN4z7ZPxtaUkGbjW6eE8VjXkHMVhLyNXPbvvb39QmnK",
  "key21": "6qF6wYBYwW8jPscY8R6xxJ6iutQ95xjRUJiceAQRDKGcXY5d9kNLBA3cdMngBpVomgvm3KCHTHjqNJjngtg7sDp",
  "key22": "3nB8uSdLvqMLei2ufCp4goYDKQs2uBKHnoUpcArtS121o5wy16qp7qFjJ1Vzgnh6VdHdWGWXB91ZBn79uux2JoGL",
  "key23": "5nWvymMbUd4Quc9tv3rHCj3v5YxVVSnT6q2FdsDHcM81MiHAhu5jZcWJnxzkFjdZhyh8DpdGjvjuXM5rni5Ac7Fb",
  "key24": "28m9iT672JtMiXPpR3fYS9Lkz83Y2kUsXgJGaehU5MAeoNnjBKrdTi858CLhUMhtxR5sfkPxe9uUFdz927awXK6J",
  "key25": "Ats31M8eKgBCNqo7dd1vVDzowqR8zEMPpbts7fAuQs89rvT7z6kMNMofEYk4ZeugZcoqKMJ6XiV5yKehrQju6LZ",
  "key26": "3nXS1tGaDVEWBKErd1m5kQtNuCDDhV2wWhtKqKVjdnoepB4jVorxiPGkN2NRpWHKGEidKuNkSGYHagBmx5gTWkLu",
  "key27": "4W314MbtRvLgFuTPsJQ4xYsDCDwC1Q2ScdWvDDWHeGdtLFCZRx934oswGPkFQPH39NLoNCQqfEYYtUvCL2xgFUDT",
  "key28": "3tZMm7q1PscnUGSeqSR2kLgAGz4qWBqeDYB4ytgMNi3QW9BCR83Aaeb5JhW3ZoEuVGqrwaPoxqVTcyXgkXiAWmd3",
  "key29": "2HvgecuK6D3X18yxLo8e4cdSnS6hYCmRY8BUXJfnJgnQBLexbMEuFadfjLPNjTmFvT3FSoBvCoNjTEbxFgZSD8hL",
  "key30": "2eNq1oLbK5KCFZ1ymG5B6BymMF13FPa4MUjdcfBXQcenP95kcwHQ7fVrgxbG1PQLTb1tyVW2p7eD2RzJwM4azFVm",
  "key31": "64UsHYXSJfPMhjHktQHGisdePdY17Gwra638ZGrnDu8ZaqcN7p9ckmsZrCiKwapmLnsSbk7MSuaPsSmxpBc1465w",
  "key32": "3zSMSrFhBM9jEZnc9bq6eMXPWW42QUTQuJ2RFwGhC37MuejCPYgSd5CYZPPPyQ41h2mpUy8Sc8fffSK3F5pRUuRJ",
  "key33": "4GQvFcbhiRE7F86ZGt2H9mC3zrgFocoZkfQ15UmyPFbq12S8DQWhWmEAQnbfn2NMpuddCUceMp83yGZEMW6fWAhf",
  "key34": "42tarc9AhP64Hq8Mx73P293ni1DLUQSF11NyCByrA7jrMM8sNMnnMfxLUSeM59xKYm1KP2wH1RGyW1CzbKCy8Cn"
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
