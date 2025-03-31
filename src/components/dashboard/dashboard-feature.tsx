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
    "42L2MGjtEUiQPKYxRHPpd7EabsuqnTXHjtVzC1mUNHpVGMwVhV2Ts653wSHe9WRqW6iWLF1Sbaa2cQHg2TyXimmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eEhh5mxQwgWUybxm7eJgE7rz7PVPvuF26yQusLWaCZM8XVaJbdfdWbiRdLtqt3X5AS2H7UU66QkmdkWK6o9Vtth",
  "key1": "448kMNWqgsX5Gz41yj5hkSJZgmGETxZBR1jy83wMxAqvgMbpk8MKz2f2ppDXU26t5DmYpftJ3fCw3RousC9Az6k9",
  "key2": "3GbUc1CiGRa94R1T4HyM3VkbS3Uy13ffNmKkvcGUdY3DCWxAAR4ny8gmFn53WLUYYZuAGBZ5LMZcwjTs4JJsiM8w",
  "key3": "48kQNLVavM5tukXb2CNAB9dzNrxG4E1uCYQ8RpoZTvpBy4XgQ56Tme4CDTV4NMQbjLAeTKJC513sQDL1EDPqFyD",
  "key4": "3qpgTEVSogMzFkk76nGRgzCeez7YGAq56FzyhfeK472usoCTotytJk1auC8BwhNQZu4B3doW3eK9yp6VbPr7M4tA",
  "key5": "55oUHGEMzdibFWCT8jafeaRVE9tUfzVdEdb19WGUWws1N9GwHXjXwuATWv3FyvPa4LjMNGtjfxqq2VdXCFd493wq",
  "key6": "2oJQoRjuEumo7y62RNjJYm4TCPaU8tL2QDZiTtXtqWqsZGy6zSiPBg7x2mtaF2BCUo9rvtjieXmhzLamt1m2J7mv",
  "key7": "4rQG3cXGmtBxwnpU6wnLvtPvyaTtCcLNZwaRpju8AXthjdR52wXugRs9HLBXuRMBsho4Rqn6CvMAok81uxN4Efng",
  "key8": "2ba9N2pXPDbFWrAWSCkujbNEuacfYBJHNKtrkw7Dv4RnZwXPX253484mWMvmHJH5fWzf4qrJMMdsEUbdjprR8Ktv",
  "key9": "31Q1d3TMrv1fZj2JRfuNprW2TKiWXUDvkVRbR42m2eHxCrCMCjAgoXWxgVMcPNm3RhUsn8DqHxiEf1aN4Vgd7LUF",
  "key10": "5HNRHe9TYjccaqebibZxaFMHbJ8uXFL5W1sSTFKFT38FkEvNgZyE87XzEDw8C2AkyE827YuJQYQVTwmpE3Y7emT3",
  "key11": "49e1j1QDTzDzog7x2xvBsBXhsVyh47bGQHczYL2xtFGWSMUyxc5c2H5XEm6Bi7tXqiVSnkp4ymkToXiDUdnPqsFR",
  "key12": "4jXwNSW6GXy6BgbvzjrZ8uWiMMZDDRRn34bdRbqUGJsk13NC7F98MhDAKCsKnXmpM5G3VzHUDTgmc7Hfu3WencN5",
  "key13": "2wNTx7REX3LvQ6pMQH22U2EvPGYz6nCvvtWbkjrVUpryfAiooS391tmav1qRUmb7em1hHwuTjcS4koZKRF4gR2bU",
  "key14": "4rNbg1Xqra7vdnbpfTzRP6jad5X2ANXjBqihuszEnob6ysgmwKiUUVGqkzc7EPvQ9Dw9PDRXAmfyDaoBFecZBct4",
  "key15": "5f9uX422xsP9QqHhHz4XdbFWwsA3iRrx4nqYYe9dF59PfTTF4xaqdxAnJt4AnzdsmmFrZTwQuK3kWkPYE17JauyH",
  "key16": "qHkXLCn8JmzU1tAjyioajsbdSEsfZNnKiT9itqZCTGFMafjL9M5CbWQQKDoResr9NFmbMHbuheEU4FQQF8aLHFe",
  "key17": "4ew84yCdjr2LUCFpJmLsLuXPiSo1N6gRBpDyr8XtqPKQE3LzksUnfW8rsJCrdCmhds5PyPh7UCp2DCa4tTYcp4SW",
  "key18": "5FWMQBuEKoWgrFkrBSh17pJSUMvEVBJ2CTwnpMBXYVqdJtQQFmuomEmALirTw1TDqh7HQaSyRiqwPqcRukgvBp5b",
  "key19": "5kYkrv3N8ypb28EDZY3aaueVEGosPKUwmd9uZxoRa5HoyVdXuXjYNrLoaTztNxoYrkfynvnQmSGFfciGhewXJS5C",
  "key20": "3VamG2x3koL7i4qACekRvHfJ29zs3JkxyKZfUaW28NoTdFo8xAYUBXSifbq91cFK2hFv9zgx6ApkqqVbGMbPNiku",
  "key21": "2FBFxMe8EdMqCMDSG8FBVBmsJJK8LcxGyaYvf5jW5CrEZPA7Fx1Bxo2TcVk9evNfzABEsN5ZAZX5KJxAcxVfTZGK",
  "key22": "43YqDcfLBiy6M1d62XH9rvzXVsDJFt4Mqm7xkCznYVeHQkx6SXvScaMKVyNjTbnmJbgsjWKwki5twwY81DJjEfku",
  "key23": "5a9Qjndz36AJxgRyyEe1Mf9kUm3xovr6ytSFAaLaJiXkf97xT7546R5M851uP5gTniyxPJBmxNdtz86s3CyBy2hn",
  "key24": "3FmCp6n7DCqqArYah5HJLuZGcVdpCaopDAgDurxY3NneUmfjRswq5puVdmD24d8ozWiwQcob33jq1zjkNmqAopmx",
  "key25": "5QkScwz9mJnvZRRVETuVuoLLKwoeBMKzYTyhzovZfdBg9UrqzFzNtfnfinEsuNaZK4FgBDod6cndYQqQaEoDEPhR",
  "key26": "4ditNpZwWQA9xnzGJmAZaRgGuAmFH9GbkrNUkRKqP1WtU49V86dBwQ3LKX439hF5n5WeBdetTZXXQdhzgXkhFbpR",
  "key27": "5z6pSiHbyiEse98wvCLvHJGN17de14w8g8fBFrsLB8kwkC6mQjGnREPDRhvP9tXtW8ZsvsScaLr3tCqjpXKtcksc",
  "key28": "4aFjBavV2ybshRso8bejfhxc5JeysJuLCRRypmcU1DYYvyhafRoyCE7p37hkv8vc7KpgMEwkn3jDa4Wxk958mwAA",
  "key29": "4i4eCtAr8yktRPHenmnCKUnB4UmWSU7supgoAf38VoBtX2yyoMuiw4kfu5bnfhzeDrd8C1ojV6VKrACyBqF4xZ2K",
  "key30": "kGVgxsL2nUZpiGK9ssRzrHnVRs2g8sCU2fWSPsKBavAzN77c9pjywELE96ZRnrsEsYpdPkCVXRkwkiNNTMQxf7a",
  "key31": "5KrJaanpMNJBSeRrW8R1vwpP3QgeqqaPbnCM7GNNRYFv2zsMoHEBWfS4PjexiMtrYRUPE2mNsDtuzfEpvATfdvQs",
  "key32": "2tVRDgqt1RYFvmLywDbNEMAfuDiyEHf99cZLt6JZJF9xdm1iEYBN9mf8cw7stKUwU7Gt5t9Zp8Ysh62nUJgSVhqt",
  "key33": "4UoYzEZ2fSLf6VgaqAoT6KRChisAmPryH9fcw593x6w3TNaSk6uXkdaDuvuu1kLvwdQhqRSuHSWEvP2v7QtJHGQb",
  "key34": "378TLPDVbAmtVcCQzxMGns4EKcVa3icULatrvET3mhKBsfcMbevDL8xotxAXeG8rqERv9k1dDBMk2pjTZwC7WiP5",
  "key35": "5XRY4E5NWfhZu7MMCJEhWjbexsGErFuH8pCavNtK4UhR3zSpjqfggYt246mCP3RWUhofKM1YoE39BtuukWWBCngU",
  "key36": "2Jf8TBMj6p7qPeaz2oZwb6VmcF7496YpfNHwU5Qp1dzoqHd3L5EZriHEYJbbd9wnEVvfX2Z3sC8tZxNgKavi7D6q",
  "key37": "3tbAZLZijuyrQwb5sXSjnCp3QFVQnz9iy29rMbBnFi9kfgE19EREhJQBLF576reovdEbisjUpLJ1BtXguR8BQMHY",
  "key38": "42dHvNXr3UNKyefLvpBwc1i7KSXvSPNkSok1mHZRbGnqjAFJPPrFMQdgU7MqasrmNQRR5QNiLTDgDVzpzdCXwS5L",
  "key39": "5Y5EmJrcFvWW5hZNdhDRNmfShRF6VF6tvLWjDcQRZZ9KHr8oERPSYMuTQQhFmEDCdkbs4pHKmtr1FzWJ8MxZqLq5"
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
