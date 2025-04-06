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
    "5LNAC6FLQXXkzWWkfqTCVjG7mzDAEinEvSgPSr4P3jEAGL8iGPsKgjBLMazVd4geaFHWM3WadojhQQbcXjMpoRJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JCLSMSmpztatapmco7AiqZuy2dtFxFQtc1Kt5Z1vmaTaYvcPSoxJdN6PVj4DyEy6kh92L4CNPNN4u66TP7Mw7iM",
  "key1": "51sicDqLZyNEvsA5SjhWnX55iCBjFDVhxwq15XrBP9eq643WFjKk4nfSiWwJFeYt2GbWTiHSpg8FN9xMLSupd2eM",
  "key2": "2GDSHfE5ynVXPUeETn2WCshYVQuh9iJbSwfm82be35SR1Qn9hpWmYZUPyqzrPC85JZjNo1BfnKMXZ4wdfvU9Hpe7",
  "key3": "5WMbgjgkH1yAsXcsLkxEniVs5PiL9GDUziPxxjhGM7TPDyRxie7Y5AEukk8GQiYk53UxkAic11CTQ1uNq4m3ufrk",
  "key4": "3rPy2hvUq9seTsvACby9sgfChmW8ad22UexJsHkEgF8Vjb1KLTHVj4GLugd99bFY5ioo6vL1y6BJ8ExLGpAqt2qX",
  "key5": "4hn6RjswAeuWLmjzFVARg1U3UheJAJgGbqHtrGSmKWE7r7mCvysX5qGqnoZPsNAmVVkRhttU1FgYJRA4cxvnG198",
  "key6": "9quaMJ6oi738JZZRfybGJce4G9xPCMSa7HZpmmoY4ji5cvA1iYWgZNXyCuBiVB75UqXnoDsJCRPcQjZVPEcirLQ",
  "key7": "4uaazPmfNLxxuTQ1u7XpQUVjjWmDTfBuegLrGWreegvh785gn9H2bxzAawuEhpquW1qFHWUYXmgjBqT3PHKCwb4m",
  "key8": "29gWbkVkbKo5YvmS1mUrCJ6gsQr4Tv71Hpu2EQPnxKDmvBbBrFgAGQjR7xgRBiihPdG4HMH2xgYAXUoEpYcxaYiL",
  "key9": "aEfHfLNdiQQdzGa4oLARR1AwKFcME7BT1CGrp2fHKFugkK9eAZuXvWCJc77vbjgz676Jbzvbi3xK9XfZaPgXTJi",
  "key10": "2C9VY5j7udq396uWViieAdbgZUQbapX6SKvb9LST8y8u7QTtTZJpi7HL87bJwH6DtzHRPneeQaioTnn3bXNfDjdm",
  "key11": "3W7A7nMkmQJeVFnvKKUkKQDnYtakdrfmrJqAHywyXMBFd3fbWU16eNehQiBxUkjkkjLh2J51pjFxz36RWNtx9xye",
  "key12": "38N8Ab5aTZ9K5qTL2eeLpvDoimH17k4Rko6jd7RvXLJoNuwhzUbgZoSP3J37LDsNhRtVrNg8Px38VXtCpzBWqypJ",
  "key13": "398V6yhD6CeK7LwhEd9oStkidv6mKTJEoUxgaVsrQzj52Cqs6356WEaT2isQkzgCdRmmpbjaefkAqWw4SrpYuxo5",
  "key14": "5KjbGEDDoufcWogHdJ7cdaakwcLg7ytomoK52EUXPqM7tqj9qBjLUYSszChdjbXgY6iMrT9SjMLFhUDixa1LPAfx",
  "key15": "4Hcrgzo8ofT4GVVYqqhgDRBf58fyT44Bpx28uHc3j5ru4qpPDpAy3WG53K6L3s8LEzNx9mEqcHVdV2WCMDUTwiPK",
  "key16": "3NPPvTZ45YaRpWfEJy7Jj9TZUvSCjVThZgcXpf5hQY6XHx5CmaLYfXyKtkb6aVuVtSUtuBz61QGE397GEfmeScLY",
  "key17": "3epH876HBz4v8yS963hkznhYC1YrQiXqrDukyeRc61eRWRPxHci7vEuwtCmxhMLvsey5VDXNXMZeofs5sQddJnMe",
  "key18": "31KVXVHdtk4Hfm8FjzeDZzDAq93vBbhMAVuvJLjm3GZnNxEhYfuW9s9XwquopWsHWfzAihMVtqHLCiTNCRronq7S",
  "key19": "4ND1kXdW71sCoy1jo8Pra7r4RG8dbMmhdZL7HS7XToCMVeQNPwemUgW65A7p1XM7Fbn81WxnLA6pKSFdWNPdMCh9",
  "key20": "2xhWLgrr1J2S6tw3kdEmLR5Z2Jfix5QR312g54yMS5ajt6CcmMUo1hczgTFNTfJ1HUboVtP6aCTSdwf9xbVsymTH",
  "key21": "4evV9c6CUwunp4ZGVp51Cd7ATBU6gqgR4QaM2eUZAZzcGkyWHGyDdgFh9STWYRVRqyPS6gRck8EyvMPoLXFoAeUB",
  "key22": "2G4ZsefQ5QKgJ9pmXKxm7brHCHiRTYsaHo6LqtF3Zu78U5SdRSszUfmTdtAsf3aMUqqy3JveWSFoJiKCC9tJLs7L",
  "key23": "3Fj4QsEdhroxbXyBHV6Xzjd2UC9eMMgK1DN9en5VnzFvsBT7y7yRvwin6QfjHX1t4eUSmuqPXnj8f7nqj3iWgnZj",
  "key24": "283m9hRn4vuJGQQX5jj581sRU4fmXuBwcWiKZWwby3p7nUj5YzJB3RWBTkhgiY59Qx5xt8YiBRJAQHMJDZM1gHNP",
  "key25": "57g6ysgFDWVRgfvsYuEVXuCiMuregMSr3XJVH1z1t4ZHjREaN5eSQ4fAR1KdxXoZk5HWVzCFJUbD5gbv29bgd1pD",
  "key26": "247CBwPTJQPYv8S9CEU1fYJQQz6NjSmuBLLbPTEoFh5zaxq8q9i36wYM4osDh85LpWE6CujKj8jWa65Gkctpky1n",
  "key27": "5G8qu96AQPezq62KVDyrmGDqkMehirM8p1BtfCmr96nYqPa4nq4xy1UsJw3scG1MRqh7JdYvLWvEez2sr8YexyTj",
  "key28": "2j2XoLiuuwNtFSC6kdi1BmexyXfNbsaQQbbAKtQRzLxRoeYSyR4t1v2bj2WavMAU9XDiknBw33dnvTqbzsrkpfjr",
  "key29": "4E3A6U8RyfaEnCY3738wngGqaMSdmcu4L73YzhfstpzuueCkXpKBWMtkLLgQwXwMMdMmL2Kex2JpWe6YxJyAQKWh",
  "key30": "fDPYtwyWfq2z6T5DoskbkSdcp76MVUSzeUV498Z8JJk6qQSjGs2MJMsr3VT7DVuJepJWLWWWzeATiBq8QQ5kmsJ",
  "key31": "5QPJX2vGHjjGdjcTfHTaFi96wjFE9HstS7oTYzkZ7yq84hZWCRdPp7NBqqyzdFij8ExdZMxKobaoxA1GBX5vYxC9",
  "key32": "mYgNWo8yVqyuMi2JLSkKiRBLpYtiFygQotSkf2DBEPu7g5miZTKopGM3vBsanfJ7oimBQ3qLDooQyangUMaTyCB",
  "key33": "651RMRbGHzXukHkFdqSwBrTFkW1ZrqFNL1foe7D5vbqdfwxu7wvZLzad7FkdRmydKbZkZbBJUVS5H7N1tCCSgdt7",
  "key34": "5GAf7xz8C5NrTFt7Rx18RL8R5uYxSt6ZKttFGk4a6dNtwhhFZjT2h9JmGDqjSUcM9ZXSHVYTwvhwbk95Dw6Xydhd",
  "key35": "5K8ZtDF1rG7DD3WmXDY7z1NQJEpCwfDSWBf6V4HzKj6ByPQiiuEb1BTXzpY14MHQ6WhTDgePqotERuFKErwkCfUT",
  "key36": "5UDpmjaxYKxEMAFToZo4zn1L1hfZMrpXrDiKknoMAbjAPbUJJCYj3dPA6MKJgkpsRYntNVBLmKLmYFmyLkaW2NPo",
  "key37": "2qk7C9kVB2Z7GMkGyskGMwypjRvjsc1pccKDUHPjPnkBjMpiEMuTh5EVbME3cbVjwFyAkgCbq4whZMAFeW3G5qp"
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
