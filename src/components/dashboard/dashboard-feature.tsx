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
    "xYF7dm4zxNxzi9JXB8yt8phRwczxVgVbrZuMX2Wy5h9xtxuGP4k5szW59nvappD6PxmeUDnvp5Mhnz1NpWBQn8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AvR789bKvL84jkwWnqUtgeGZwXWEjSfmXkcGrP6eAoWgdiwYFxsMuju7b1tv5SCR2ET8RREAS3mTVZ4qjgrLjRU",
  "key1": "3HNrhHaLuiTVpa82xcpwfyoXhx5VYExZD9jGAUCkWSxxgCiVFfip9bLye1Nx9mXGYx22tdsRLrATB15Fp7z95EPz",
  "key2": "5j8mF4JF8QTu5JGXUD5JSH5ptz6FNxCwnkz1ZRYqUamddM8KVHE1kQX8G3dFeiAH3jDDnc5AMfTbZ23LE2VU7hpU",
  "key3": "4rJQDCSrF6PyXU5QWDq3gArzQcbvVNdbpHqAJbcM5VZMdirYdX3Sng3qRTgX2TXYFM5pUfUpJt5KJeeMRfMaWZdQ",
  "key4": "5yB5ZUXdtT4b1FYx7YjLvzjKM3SgmvctbWGrcBhJwGtaEsDHgyFPBkCKYDvhRgrLrZ8pPFZTAqR7T7TXrLUapHCb",
  "key5": "3K9iWoMgL81m8F6fx3dmdVEa7Q6qy7gNzNGGWMsKow5qSR51BJY4kWFnHhJyMpe9e4UPGQyNumXLs5RASGEQQPFD",
  "key6": "65vkPdhDRXubXhm2S6AggD8EBF7TqzGgbu3gvmVQm6zXiUwwfQuThAN3SuY5prpRQ7WJSeZHoNfe5U5wKXpEK3pd",
  "key7": "64Lbgbkcanon8Tg3U3DDFUJ9KHDwKafpHMMHCPWGqTyiSgUtWks8qumGgXJ5GQrU5kSxK11fTZy8wJ7b5Q86uAjY",
  "key8": "3nDWNdnoFBHWE1wNxp5A5JRQL5V6icJ9DZYPN1oneWD4snx9v5apuZEsrTmUrkYj4NzxyB5iv68U5rJMNCmGS1wf",
  "key9": "49us8RPyg1YLAejHXXPi3s3HpLtQ79Bpmix1M1Qf6fzHqkoqpZtYu57mQ8WCppJr2PJD4JcevwdyLqTYkZW3b168",
  "key10": "py1yWp8doQn9JLgq7sYSAaWU7R9teAwGjV2mtd8yjhzxRkX4SQ7JekPDLSK2zRb1ctyocArAgi9etWKXjqzZe9E",
  "key11": "2ZnUrq4UkdMfSWod1wt9caCp2RYdecm7KAkmd4rMHAesf9ia4kcTCKeZixLBS48Tj4nEv57usNuaLiGA5CtjtHhn",
  "key12": "3dNBkMnWhhmDLAMMYDHG8jAr4EQnVMgBkoBjyL3F1bu47JgdfTq4FCevuXcgaHoGqt6S2S6sr1EkL1Es45du6Zch",
  "key13": "423mueStoYCc2JhXhxmWCWkDLqZE6D7AcT9JuZZR5YTX7rojSpkUhmHA7TvRhCuCF1GVzBuatwAxP7qThMngU6Pg",
  "key14": "323CykwCZoYQpKQn2gLEB5fPtKpbEbp4VtXUuq7hX82Xi9yH5AwW2Bhgwr1UXiNdshkoywhzERjYSydwD59F14Gn",
  "key15": "4s4iiqtwy4kW43LeK55cBgKvaSkPWFviBxwMBGFcDm4aSgUBHxLTKqN2ku9p2YdHwLgd9MKykButq24kfhjbVy2j",
  "key16": "5FGgoLvvsHk5KYAtWMshroApVNVKjBsxZDySgXtNFSArVCoKE9x9mW2A6vgNLSxd1JYYCCzqeG86SQPxSXWRzSE9",
  "key17": "3CSHQSTd1KCvZe1Z79v2MJK63cYpZXCSqm6uigMHF4DErLDJ4z7dFMMFM6V9uzZZ6ZFgUXfN3JhGPh4jtUswQKwx",
  "key18": "qcnvT94vN9jMd8HDpeKdmDkH2QhDEQmHpk8mqBtoUoQ1h1GdLabBdbutynAtv6PzbqeaLbbqGBQsnirLjt36TXr",
  "key19": "3waCD1cVuzuCAHBNYng8F5Cov9Q7vKqKitfHYpcwJpLBh2qbfSrR3P1qnU7BNGH9cemNkpnaRo4uNhKEW1F65RHo",
  "key20": "4GLQmb6uLLSv4drvuzimVtZkx1jT6qHyDCeDfEyKeCBGi2bpz1JEMm7YX1gCgwfo5tFVaGMHyft6xoYCYTn2aiSe",
  "key21": "22P51QRYTEoxWXGxA3Gjfahks2GFWsZK5H5GGfJqf81kqrfHuWndNQMaweMqHCTQ5uEV1nSB3LXCdMYEsFVYJL3h",
  "key22": "HzSLeMQTWiP5Wd21YAHWEj9VfEBwdEov68rnDKowLVFEktpqAyxoxKm5CY3eMpinEL95Df5MawA59TmZScnmfgp",
  "key23": "3SGkGxZ9TV8sh5TiewiCCEFyc5bw3CXZFW7REPfiykeoZjh4GNUCLM4C9fcVGeQdGXRVYX64rZf91PHjWQGM9Mj7",
  "key24": "329oJpbEW2WzrGTKsd9h6tvUGdsW7gdgGJGM12ebsLdjNUypVigdetQAWcT6odjHthdJuAXn9cgMmECMDWYCNdkE",
  "key25": "4cg77KqWorDAvVdN2PwCRpSAXhcuAjZ3goAEXJVWAS9WFmeHUaBmDvtxbbENNjXXPiuMN3sRfh8JMbF5V8VVS5S2",
  "key26": "4hQ8gaAu3MqQMZrmjDtTACKgCbeakvn6iDi7CawLddWucYaV2b4GcPRXsfs8kNrauR7z2LD3Lt9b8r5JFgzgorPp",
  "key27": "5xxMrZwatBU9vVdrmGqG5gLcSKRKmqggfipqZvf8qwsq4KMzBb2sayVduuSNBocScmdm1P6Ho4TYDVbiYHYPDk5h",
  "key28": "63dtajtJeShGENsL15DykcJzfMctJRtrWzcmgq9guN8FvTkqboEC8GpzktJPGdPhFP6JjRWP4oUczVppu6HbeV2a",
  "key29": "5BCUMy3kx9HuK73oczeQ4ejWEVkjKxJrLVjz854oYJjUNZGcD26UZ4kZkwASP4zvgCcGQcFVPmJ5ofpNvYCDcJAP",
  "key30": "55tuaR3SPQT8guiu8faZ9ZjowqNscPSkYPEAwXY2GDe1zpd3D9u6GyoG6gLoyitzpqRt7K63tHZA6VM1Ywt9439C",
  "key31": "2jHagBD6PfJW49upajTawBYVFPHs26LkQ79yuBLK1QL5L4DM7ND3qA9drdCJutwyCure9Wm3uYX6ZwzWoMcjci4j"
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
