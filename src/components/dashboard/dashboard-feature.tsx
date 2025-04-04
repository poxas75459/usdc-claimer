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
    "3fXzsY5XCnvBiJmhpqJsZc7kaNgqaWBRkSzUupPt5VkpMSfXJZssv1NGcFY3HS4hezoXptcqCUEx4zrKoM7MVe5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eQZgYxppHnSeUu95o7pJZWjvApVKtdfyHP7XwMy5jakbrW1v4ESZkX8TqiCHpdQgXY567Frb15btJrViftHHBhP",
  "key1": "SVZNnqj7EMnmrrGe3Udf971dgZArJdPfFt1KsUDhpCBLxTa4hqsxQ9NoQKGmWfSVGasV81S3je2f7cVd2SwtBqM",
  "key2": "2saLWVw9J7ipu8DsngJ7aLns6m7yMY6E7PCnJGaFfo8zpbEEpu3hkffkW9bkM3h1dFGdQUF2yVG3fvvqS7kT7Y3B",
  "key3": "4qhPwVQAGkc7QgKnzVNk9Biis7kxysHN27iemc8c4aFz3XJPow3qVjK73bo9ze1pTwFYSkmB6eJqH5YPtC2opGfT",
  "key4": "284fX8weMe4z26bhf3PCGRGJVPqGra584Abp7Gb7Hm9Mi8e15kpMbbSegL62ws28Qebic6NfrwDrm7zg3hBQxWVs",
  "key5": "3rmKPGSE2LrWWNCSSfgYEa2a2n5TFyNEDjjjoAeDD68qfbGP172Xw2PpMRNWUehMRJzh4tNpU9kmArR8S8F3TB1s",
  "key6": "4gXRTFgVQK7BzxMSykCTWGApEQmVhMnhb4E4BnYSi2KBGBYEPNJZZkU5aFwgPrCrXErRVwzQxC9gpXrXHBNdR54s",
  "key7": "5rWrPagtPQ8zeUYVgKA8XDerXTSYz8eFa4AHJwCQyEcvLUWFPRvkVCnSzUvW6pknuAy8URxdJdnjaGGramYSs6uY",
  "key8": "3AFZmGZGYz9JCj3RDMDReoeNSzJ6vRuicd1FHQiFqTCUTkQUWdrD3GEWVdv1h7JWNBy85Q94YcLzx5QbLG59oyGT",
  "key9": "5PmJ1VT5ARNVokxHsUZQS8BryqECc4Qvf4C1y1CMotdsULYba4keGDmQ4nDR5E6JszjZVVxCpomD1kziHnsX54oH",
  "key10": "2qmCEkuGsBV2uAPE7BpgeoEXev49RccYrrWAgGkLxWexuWWeF4yKcFcy2i3Aaisquzp8oPx7jjx2bGhySYcpAGk4",
  "key11": "5zKPTrhWawsoJrRQF2qVwJnDkgmbzUsZYgVqAgdZXz3UAzCfskeqs8nWZ2kkT2CQRBcPMmeD5wjWhi3BCbWMTzKj",
  "key12": "3gZhkLESt5pyVRrxqDEksJkV4WGiDCSsaCGpyViWddyd9iQ9Krhi91sp9YztZ1GpzDhh3vhDRHdGN78keG8PnP23",
  "key13": "25bedv2zB4i3JZAueRBboTiKVSemEP8Mdq7BDnqfGkwqm1Go6Usj8iwJcFV1fU8Eu34WoEmkBuJzZLSf8JYTQjMT",
  "key14": "5Cd675JgvNP7X35BYzvMAtrgR1RZjzsimeCxFzr3Cz9F4akS5daqcjRQhiSvTGMEGfNCY4UNsSib8bbySFjVtqeD",
  "key15": "33dLXWbW8or4danrSQvPKgCF6NCEG6dk6aQZuEEjHWhkFa8mNTTMiYJpv4US5AJz8xcw2kLmJdJjFDLoE18d4Vfe",
  "key16": "YZjJ9goXrupU6VxMoHJXSzoCsYv6ZYWnNFDyMNmicyU5SUA2kCBivZVTD9WrZQj1NAvXAAQ2M2Ma63dMNUCw6wF",
  "key17": "2asripn6JAJCenhcbVxxE6LsQmTzdsEaP5cQHqLXSP5PKY9RXVVf82qWndfjbTwd9qtQgiyPWfDjnpSyqg8HD935",
  "key18": "RC8EFtmSdHNXA56XLZJjA5Ad9KWUL7GGW5sQCszaADCX6CHP2LVoYtDxS13cTe9jQUdGri7jxpxHnRii4AMgDdq",
  "key19": "3AzZPHn7BY91eYkL67XecXuQTZ4hr6uYyHjJMmR3Viv96XrRvECry3d2uN47snZd1j3U9Ee1RvMkuGeysrMksQiu",
  "key20": "3B44NjBAG4f9yvtYJTgWSCdPWgxfzCoaeRSM3CgaFVbaUh3NLkrcFVs3gFjQYEzMgJRgskKiY7KeAp2n3dSrpa6R",
  "key21": "P47nqsBPZ4nCgJBv3mFRv3LzsiykMSepkgmG3b9HX9SqPhiT1hhPsiJH26DvD2BusEotdqNZeMsXrNz2EvB3bKN",
  "key22": "4GjDu8JH4pzU1jsLNMTgHY6dMWRGvZagqA17eFxdq41PTyWNfZjgL1t5A8YJr5YWZcZgckeVbumvUn61S6GXtXad",
  "key23": "512TGw9UwWfV59LL6hAGeLUAoBQTAoTrEa7iXTEbBKFGJB5rXQuL2KxXnw1r8TnkyJz9epnnhYx1tQZRhh4unLmZ",
  "key24": "5G7W8ixGEtjYCFdfq6hMkW7kJDv1aQ54GS5j9uKiiMyC5QWemmJqxKaafZKWRZYa6fkWGnG6dFLBMNzYAkRq7s3T",
  "key25": "2r7TVNhgkEov9KdpCD2D7vTh1J7U84axxCUqjwob94o7btdJMTMnrqj1CJjFmHH5X8HqdLXHFv8EXw3GPy6TJxC9",
  "key26": "4tWtSoBkuvwQU86KmjAKjx7fDZq2Uik6QP6QVuyCipf2b5WVQMSyRaY38DdXV2a2Dsv6VuJ8GRCdsGLGnJxXuwcT",
  "key27": "5HPBWDqCpuWjxx1YznY2qozxnydPAeen9HBfU1JYefLqdX1GTA5hdtMMyuZoKmeDyLyc194PhYHMGjvJkHXJsDFC",
  "key28": "5W2VdPEDCCJdEic1HUdek3rN8xTWoGcZBDyjA6DzB7QihrsDLLpL2zz2x4Awwc4P7H2NmEV2j1UZuQDgwuU43U3N"
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
