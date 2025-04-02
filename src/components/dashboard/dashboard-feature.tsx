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
    "2ia73Grg8EJjEGVuWVjdjMiXRVSAGi6dtWvKoAwFdy2h3UM2V9FeV8Hv6xCoX6P8ftZcTFrN8nH5QXkdmuNgsogv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MkvnLT3NqxYY5nCCN1kDQygZHFZLRvBL57gHRTa54Kcg99YDwbw4M4qB7RNtgaHg8mRqTCvB5F6kShKqfHJHTii",
  "key1": "49ydR8krE7U9heiXTSEtDk7fEJgpQX39Gk6Wm4GMyEvgoSuf8dpzYHMPz8CcRyxv6VJrHy3pbYuq38aS6og9LxYc",
  "key2": "2Rc9MQvzSeRAN4o1EMUHVzP82RBmikN9iXqEETzsm6txnsi859NWwv62GxsZ5DSFnsd2NGL89qVjAVSWwRRoPGXS",
  "key3": "8KGRqSmUMd5nhjt184cLRj2dhDhCfZG13NwG1tbLsMsJkBxLqXL1YPTcBxiSUTsd44sZ4TYQkRerYXNjFFVtzCY",
  "key4": "5daffzyC5jiiw3xfqzkoXo3HGQcQsyvjVEnSJiCQW35y2cHzDprTHLEiHrfg6KHk9Dn4PERHH6C2aMp95qcRB8v9",
  "key5": "46hssyhKa1BqLbjbgMnzPsYGYoNkXscXz4hhezpWFudgzsSYeeJ83mG77tUEFaQjDVkdYZDLe7a5KV6VWkSSDiDC",
  "key6": "ahhFeWH7qoqfTnPXVKDumHUW3ZaFbxqJsnAQQVJnLwMKLQhaHiW1YScMwfGWZMeNskm5zK1zzyvMb3pS9bV2xAY",
  "key7": "5ENJYANyYa2Uc1Pf4eq4SNTADU7jrxkhepDLynnn5o1JsRSBFGtEAFV686soz84xdWo2hRUjqm2941V2KtQNuFck",
  "key8": "5UZrM6H3nTP6PC25NFCFhWUXbu7v1DY7rduKpHs4Si3km52A88V5KcnCgLc6vkNVQkYQb4TgVkgY8vY9vZkhzFaE",
  "key9": "2Arv67sM8v9zroqF3vJgr1rtTuG8E3FxoyjSuizoEkjMbyDQ7pgebDVAsqv1NbRfYK8L5vicQfb6TnrV4pwvXw1B",
  "key10": "gEpixZFr1LJ1fhAisVAo2hRVdjFNobX8omaRm9XvpMu1ytpn5Zu4QRrN25QEWqK4xJaiPoXrv9ZDnW1tCwme4Bs",
  "key11": "4UfQiAnYKTMTamr2LU8i3iU6e4kBYagWcyxbBycKZoZyNsErQiWZaaT3mPe9DA9BjJNENpdJGTKks4vqTYxqzrVv",
  "key12": "4Z2mGn9s1kjKEPY161bxw9RhhG2aN17dBVTcogFGu1Povp76zohBv8a62B6d9uWWnzyEiqGLFY7cYtLtws4mZ31p",
  "key13": "34paL5WSjPfeSjUTjmfX39vVPfv3FsDdtRTy7n7nj7bups6EPY1k9au3RXJWkmGEjDbmw13e8amiPRDP6CgpnNV5",
  "key14": "AS187zv2R9xGjTnpA6qBW3Y9MusL8SEdRZkY4VmMUxxCsipxFhCNcW9VDtUMf4FcteGSkLWXdGpF6yrEGttijRq",
  "key15": "Lsy9uZxcrQraK1wRqdFsiFfjGVxZYLHUzheTfBBjAeipuUoGY5MyJYVGvLN3SuJezchX9fZvJJNu9bCyf78aP3s",
  "key16": "4dt9YWZU3VVDU5rjoVEXkVgDtGNANPjqwcP73HDvf3Fe6oX7N7dGWGu9HyTCVoL6o5h1yX9DfnwJu451YaES7doH",
  "key17": "3Sc45MGmQEhibCYxRGt6LXLT6hLSSWPmTSWJBapfVB4vsYXfn6zbArCvRoUuVByHc5N9pkVXxxp5TLBkZ2rK5RN9",
  "key18": "3kQkVbX2htjkXmawEdkDjtqGkCnXJnTEoDWzvQz1W5oLNdQ8FiVABnXhyiq7VXaUeCRQS89xHgW6bREmHtChqYWV",
  "key19": "26WnJEhyQhrB4cP4gzND5R5nRHBVugMZ6nb1NU42gprgoXzKeL5iF1s5zqFS9QDN1TxxCAKiu6w1gecwC8sVYrDb",
  "key20": "4zdMYTVZULTKVFeMSevxrmz948U4W9idMNbfytWzBMco2aiKecvRLpUHd5UxrH3ridNVPu6YX9TzmfmSvnN1jNvz",
  "key21": "4JbKJMAQGrLUfZKPqMdmuxwkqmcpkXq5W1uQTCP8hQhgG58DC4qvMS6pMBodtxszSvH2kYWgMGPJtW1PbxXiQjz7",
  "key22": "4kGCGMpUkibd6xPfg94bMXXhPNT3UWsq9U5KMVNHwAfEsc5TCwaWkemDkbx1rycR3FV4ohHHijYKGBGVLqoLq7SQ",
  "key23": "3Zq2ERWyazxvDMECBB9sbU1H2tG4r9KL9v6PJftEiQEH5FUKkzDoMfhBC914LDoKsN46zckdsNSeTu4jSKWR5AdG",
  "key24": "cCpY6Qzt7qnWo7JSQRihQjhCn4a17RTvJRqYqdKHUdtttvAn3aRPx7BXBydrZjDPgi7Zw1up6bDi1Z8ogDTVvVA",
  "key25": "4XYYqasgL53VPpg4e5D8Wy2Ay7ViskD6jLmKM23J7g13eiUmjSUpctXDcvU4K6qy6JR1kfyA43PWt8iZjfvCNkwv",
  "key26": "4v7xcxjtWkZN4HfNS7Fba42PMmi92nNy8BNtXqk6G9xekp5QzafRWc7c3m7fMfRsiKLzNRvjcpNYBbirBhNiTxSC",
  "key27": "mMH2kd8MKrxVrDDE3nBniWypsCVDZsBJKqfSABtYS6naDv5MRyLVcAnCh9PkG6JFf3q9v7GS4eKfc4BGK6uVqV5",
  "key28": "4VGX7ao6GMTcrHdXPnsEFboeAGtDscqnDVceVs7sR38gtGGUyuw4PA27KKFp4NMD2NDW23VKu6QnzrUNzNB9nDv5",
  "key29": "2s4bRoQYzzwCqPcxYibbTJj7zw11AWTnGVrHtW5qRXZUaJ35Nfs2CgWoN2tM6A9pDnbKurE5TnXE2Jp9JD76rkM8",
  "key30": "3Snn5SFL5NmUniiyQGid42zhVDk8v4DDEZR5x6v9PjeEf6xoWwQM5VosTk3bQaqeQaKy26egnQVAgN5PkgzU7uC",
  "key31": "3CbXsAEvVs9Ug15vu4uSY4JanTvAgfXUGoJnni1iXuo6SAjYXfJcWtJTMTcT3iFiUP88tzijwHPiR2oojgBYqKsH",
  "key32": "51phrFbwzJedidcsmcsdRNRmiQu4vNGVoekchj1RuKrecoTHLKdgyv9Ai3PeS8x7wMet3oPetHrnYRHLU6mgad39",
  "key33": "27dgmLgwaaePJNN7izybWiyymMLZTNVkMmSR3AbuQUguR6uqZwipwSS2TqUTZzV5r5MnUmmNGMqZHMU2hG87aTQd",
  "key34": "2FrY9MY4t8CSWAuB5xGje9NdMHzYEUGjU8xEfvR9UaauGfcFqMKmQxPkFBTYMnaBbDAGc7cMupNPA3XDCU3VorAf"
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
