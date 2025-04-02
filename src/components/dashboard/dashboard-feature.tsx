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
    "4tc44jQ25he7ZNUptZQUD93z6rp8tRuaKs5MUtNqoF136tokepEbdV7QMUB3UXx4EM5zv7NdVwr6vpNDeWxiZkUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P76SYduNZ2ohPhMhfS7nVeFvxMYr2sLxFB5BL5mjbpx88FAxQK41grMLk6nS392qniqBS7eFud45cQhQAaDih6Q",
  "key1": "5esC6KPAvsEMERJGNwHwGzrRFG65WQq1EvDKdYR6Aow9usQDf9wB7A9HJBSbEZHB3SP7CugHa4xAqEDvHVuvoeWH",
  "key2": "5sUttjK3uBHaKJPUNgMUZnb3hVzdQchEkY4SsBBE46RA3ahNz8BMitfETxeVgVMAUqoT9buHVHQ4joAGYYsUsYWe",
  "key3": "5maJrm89KFdW4vyfjUpTkbCHUzdLfA5smfZX39g34y7okSEHnjwjYD7yTbg3eDz7ryTD7Q3oRqcuFbQwbs5BSrQd",
  "key4": "5W4qggJb37mDsrWQ9KGtbRfuCsYYNMGKQFmzmG75ZZpWeAHd6VkHiDVxuZK4RqfjvFT5prr95XzKMMbvPmH8TLns",
  "key5": "xr7ach1DpSPU2s4FcMRrnL29tC18794HPQAHEfTwNnxM9qD2CTrrFTsgQQRKV3BU8f9TKVLxGbhtkhVfcB3pP5m",
  "key6": "MbSvsY1SMuU7dTQk8sWkmLLmbeaFteMiexndd41twgu4XcoykmDfGTLhnhnyvUMgyVnTWjcruUSY3NRsjvr6XDE",
  "key7": "3wEvjucBYVYb667rYxyRUp1S1qvWi6GPV9749JYyqjTgZvrMuj7W71zd4e8nimk8MuxBBng4pbqrm4bdTVhSEBWi",
  "key8": "2jptcQucsE41r7YcybRo3ZvCdMLDGF3mMqpqJVLBSoP1as4Wu5gN413syQeSEg7JwkzsYtge7fVjDaPqanzqKJfv",
  "key9": "3fgfmpkzAbxm5FxFZ9EKTVfFKS5Fs5M73eQtUU4JQxYCA4iMzMC7G6e9VAMpXYF4482xGTLg75EQ6FcZzWrRkM29",
  "key10": "3ewuRnHv9dpSuY4TFjTtd4GTpEeJDiEc7Utxi392S64SxrC5HzDdf7SG9797pJSnqu21yn9a5JAtuaJKC6Xpys56",
  "key11": "3K1KghnxZhUTPDFB3UsSDLPEy65w3SAqMCNkxdvQ98KmwKV4UFesP22GjiQYKbqJ8Pm7KZDi5b6sKpjxQjBAvTxu",
  "key12": "3Qnh5XEWkxaeHoUNQgaapp1dwWA27XzD39S46KMDJsVVCEfhoLKdT75MRReAYYD4CD4JUjXCvzqCXTB8EGWz3MCx",
  "key13": "3q2oevAC1BSuntFyYwTCrUjscb5j2MWUPhXasmwEqjRZbLfyHzTUSxqN4iBJjXzHYrB5gXMNgkgwo8yWVsb7uqEY",
  "key14": "22ZhgS24CRS8S72d6uSDXzaXuuwae9Uftgxd5N31NmJE6gXafqCExt6YNTh7AMjNzdmwnBBGcFx7M8RVi1rQovem",
  "key15": "CqpS5bdwNJuz4qKAhoyreNTEmcLefG6nB1CKdKBAjbccahMZHWVyzdjMN3scunymx2XXh6Jjf27SAeArBiXaVi1",
  "key16": "44sWDQo9s93CASnUtXEqyCoBbi3nGN5hmE8N4EEm6StJtBwm6W7oJD36uC2WrhsPsSVjH1y3Cc5rCXa6TJZdntfU",
  "key17": "5k9UFCVKwCcahMHaLiam413EYVTNoHW7zwwpNjouGyyGWkuhZeV63SBCHnnqhJisTiEGWyHWZ1jeKf8Y96t8RJp8",
  "key18": "5VUnbnVzVPk93KDWRyC8f5GfozBhKiM5AFyCdVqbqiR3Qyxg8iH6CtyUoEwXZP4KoLccudsT9JDJtMHcv2DYnK42",
  "key19": "5mBf65yFxLkJAprxhHwZWvWFMQxhBsgzw6Nb4UX1eLf5rTRQCDF1k4tx364LkdXgQVZJnfm1wcsciCMvmbNcR4uP",
  "key20": "4Ti36MpUhnCJnMjGULjLnLKmZFstxeJj3m5upsPeRrhrLCTGubW8DscNQCNUURwx5ZnXFF3tBHbDDXdYZSr7qm7R",
  "key21": "jovZNko4JqzWWFAGKRUkkTgdFJiApmWxkPzkzGPpBGfJ1wkjCCTudVoX5RQfY16KACj974qisNuFQrRjRSnzSuA",
  "key22": "4kKbT3DGX2UYWnsaG4Nif2WA7zx7aA2t9U9EMrsSLzQrXKYKLhPnEMBc5NDp71EsPWY57oBpjNhSfA4A5f3Xkp3y",
  "key23": "4Cano6JwTZeJhajSN1kE2g9uesfvDMP5DmRcDi9cECNquctAhh8dmyGPo1DPYxt1WVMciEM6BtXex3pAcnwfo9Be",
  "key24": "59sY1wnZxmtTG2CLJMresPZeJvWFYGKQQRisfFi7Xmo8gsBhWQTTnMPy4KYwBYJce2N5SviAJaQJ3JLRK4TNn5TJ",
  "key25": "4xupVq5asfpeBQ6v2LeDK1M2xy4ZKSfGJ35zNF95G2HJxwBnu9Ni1XjLkaNwKB3BYTFsHk35sgkNf7tpa7pZFNqT",
  "key26": "6rwbMtreNVqqsst1USdZDwykvNVo99vyJaHegFQZrFxyG3fjRzyvFtTocJvY5SvAPPkLpU9xd4Te2vvZG4BpzEV",
  "key27": "4MEEMe9QknYs8K1fkTiXP6BZ3zMCbw67RBXKwAcAsgKWmWtLtgYQgfAqiFnuuh3JGcpXSVZzcNM69pXadZh1YTHS",
  "key28": "5pc3HgkV4U6PCa1n19g9DhZmuzjnP9FkSvhLZhwa8gv2DsVK69dgnnPSVK8T1X4ygkRR7rmFLXnR7DsApzcbiCYx",
  "key29": "48ZGKhrWDXM4LH5PS4CkmHKgGyQcFuqku2983PrhGj5wUiymFZ7nEk1CcEQxoBGmDbwswtGagGixvZPapmSB92aV"
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
