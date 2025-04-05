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
    "4YLz3cb26KoDR7B1zAXCkq9u2kdAbxnD3qG3S6PjPDwofzHerVLL9w4m86PEJbyxqGE8i4GmMb58pgR7F7P8J4mU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QboaadL9hdQq98GmTfu5CdCXsXLdF1gUVcLGpLfD43mA8nKRMaqyMWHF9VergXo1PzsYp9HQpQctjYCXRKHx7j5",
  "key1": "55TERU3q5REhHEC2kHkSobkrLQMp2eNDV6iUM4PYGSZ54xc5XGUFMQZftT7emd39P4P1cpsgxQa2pifaL6ytEkm2",
  "key2": "2snZhR9dUU8bPy2W9MoVj5MkQRJBXCtEPbihaYgVwn9GgJJNdqc7jCh6mLj2rcd2Fzq811GeNR1NLYBYdnXyJ2RD",
  "key3": "2FmiAhhF5SL2GH8fcoXHDytZoFEqqQc8pZMaNbiPGb7c7eVLRnxUN1zLVBKmytA1jGwStHMy8i9qSuYsXTJRLvMP",
  "key4": "5kkYPNGdMn9JNU8EY7tHVviHYTpnVsnJtQQSt2qZeSABUyJYYSMtD23BeMa5mhSN1dkfRJXkzSu4gt7Lcbaj9EaC",
  "key5": "55H1DUFXZ77UjACqNDWtsbyWvAuio4UBtpq9dB2cXS8KiPtHKx3DerbJWoLm34stAuQmRP9v7Yrv9yiYGGoWoeyN",
  "key6": "vr6YyQyDJe3woiZ9JAY7n7GwpAbBsU7y3fpaN2QNh16nMqJ9KMk2YfutVGDoMSi3B7UCbe1GiVfKDsgn8psd1gq",
  "key7": "224sQPEY7xEk4pyRB9XDrxdQya6JUbqUnsueJpcrE4L8wFtQPGabFvxadzUGoeVPVZxNoMrQwWnWznZFNqgEgeqg",
  "key8": "3qUuPEAakcox4ijNQkDXGFyAcePiyeHQM1swUd6egrM3XTNK4AbwzSLswNuM2cyubeX1iExjanvz7ARiyXojdW1t",
  "key9": "Xi2NSWbMGUg1DH9W2Lr7vAtw57FbSujpvMumbkGH4siUyxec7jDVVKBy73M5rmaRF3UkjQsjrsjeV58QziVMPNc",
  "key10": "48c1ZvAZ67aGy6ZuqMjdP5LML9JXvQ6jiDLsVFd1DzjTcN6LmqjL9AYVu6wEFAP77au3bPsf4fBmXECrkHRVs9WQ",
  "key11": "47xMfraJVHXn1PMqcx3DCxMKCLFbymGwyABtLgCuc1YPkKMWSWq35ieoBZqmvmPSUoqp2XmoYXsxemfG7AcoTr9J",
  "key12": "CzRdUZkMgfk8wiBM7Ndx17FJin5dQ88sUyYLKDemxbxoGs68k9QEgzyivhSdS8iPJrLWgHbF2mD9D1Vi8ZGHbrV",
  "key13": "5eRUqvNbTLH27KWVpK2o5t8rQgKv4ZhRHHPJaZttv1KCyi21Ck63KcWYRwqMtLRLqYB7cuxsr6vxyXCpKyrCR1Sv",
  "key14": "tSMzx2gxUHozR3iuGvW1THMcBWUECf2b4oEtyy822NdoJoAJfnWYrfXbNvrYZYYGw7yoL14oz9e3P6gbFJPtjng",
  "key15": "5fSpEJDjevgF4MoFEBzgPiduezgLVM26PsWUPECHnYwXdooAGUyNqQML9sy884UHb4MdtKrtM15T81DtKFAQX8VW",
  "key16": "3nDnt1x3PckK5LKYpjpmkb5WrQBS9SQ4giDFWt5MxQ2hY1TEk4aLM69Arw2brSpC8GKvu4QTRHN1K57TaxZEXSQw",
  "key17": "29VXaqmojkzJLHYk7EXXbhpDmwSVz9XCLS75458Z6CkGGAHCyBCtUhcy8xvMeMVBQJZEAxQUswwMA71fAtcMeaBq",
  "key18": "2vGUNtjc4NLKMUM83vFEYyYwTjb6Ks6Gaahj4ak2Kt9uRZLgbuQ2U5ofrkRbAL83Dy4At8Qfnq6CQhXZTR66A2JN",
  "key19": "ssQZCG3y2FKWk65McXg3SLBjj8kmGxK72wDofY8N4uyuTVK1Mba2FsojM1RJpVHicK81LfZfVTfHfirZ4s6ZD8f",
  "key20": "63GBeNn6n7TypcStfbUURiMripMU56KweyYPwm79AoRYyz1xUrr8fy74agkM4XPPU7FmbMrz4e62LityXEdDwqgf",
  "key21": "5teTUmuK61BsqtR1MMRkABMkZALeADw6zfAzxzyu2RKPnbNJguQX87n94yJP6LAQaRKL3DdYNNEHjMtZHLr8NLWY",
  "key22": "CE4JjkXXTYSA1J6xciVxE9pTDQZZimUTHvxcmNxTYrf1hPvsfpJRvaqJpDVtm9xWEjsHUSsQDj8rqxyQyE8uvVp",
  "key23": "28GmANC9GvNCjonf3KuuoZPyowNx6TdGnMrotRdfkgtDfrjT8BQi8E3QadFkGXDgbFjvkj6ucLEvvg59T4kuSNXB",
  "key24": "zpZH6F7Jh6GB2odEASR6aqtf2xpF6nNbV5M6gFLBTzNUKUu7fPkC4nRfTXpmdE46QQcATje1wSTHfo9sMA4CwEZ",
  "key25": "29wWjbmoW72aUSZdNBcVBzVNpDW851nwPRF6ZG32itGH1LhWbsrBhz2y44Xnh1XADavWdaBiKrQ78auxuPDsStB4",
  "key26": "2EapYV6foxiUeHntXyXSYZ6U3pmJJfy8PSWVs5j7pm5knPTiudc1Dcpkk54paBKvV6xrpPDL3om1Ca5GCzLHR3Tf",
  "key27": "54VQxcgQ9xJYeHVE6cqST1WtoHsH3GovVsobdyPwi3QzqWjvQ4CUNMZU6xZ9Cc5rV76dzkcKQe8QZZQ7ZeLhGcLo",
  "key28": "5XRKz3KY57sRufCos3jQCskdcXVJtpGmmLYgDoYhRxAFbEAwPAvCWNkUyATvVtXa1NPUY7TavUeVM9BjMh94Rub2",
  "key29": "eEi6Jb9a2RW9KYpMKbJwaXHwA6DeGPy9kcYywjDnm1YSXpLQEYz2k8syEzpvUpsJajuaiCGadjMDwC5SvNAV419",
  "key30": "38HRU1E5p4UxQCHSRT6VMGEyVY4LfkGZpQQhWv5pJdxN9n7d5DVgGww65H2cpopeneQaXgbdQqAsaDLj3aJ5SYDX",
  "key31": "3qHpSeFPnAkKCrf4wM4mjYweuPAWvX6JxymzNgppSAcGSrSXShtAtTtXHRMSu3nXcY7Zenb3p9rtepjHtvnXUNiw",
  "key32": "4zwMQiBBKysKDn6K98pU44BdugAx9C21Z1uvLHzVoDc8YgCXeeyNpWcz83B43PCr5NTtHmJYVep4VvffMbRZjtnt"
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
