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
    "2PXVm8LbntmZvj2swT8Hmjp926srmX8cRTGRSoCxyU31XULjYPq5wjt4h3s5koSoLS86avjzDY3PwVpfqr1Zfqkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PhxyGTvQTas6D52Ts4crqKqMLtc7E3HhtdMqdkYCcw43Zpsw8ZCQRbphRFFRi7M96fDG8tVPyyJBopu22LKpBmc",
  "key1": "2E2GoHtbeiT6DKFQkTU6fNuXwLXEFUvL8XCUU5LN6Z7GAuo8UsGhvaUAni483JAGAkhFiwwJW4RCfecEEw2EWfR6",
  "key2": "3QnMk87e8Th81xgxYfyt5hnBqypTKX3fg87HB3tcS8LXWHRUnp1qsxtnRZdvqcUUA96xDxhCcttp63jbV4SiZvWM",
  "key3": "D2L4FQGpu4B7gttctkdXR4B8cpUP6vZECtKDNAZwBYARavoKbtarZVs3usPFSGHkVQvtDN7wyBp1EG6GNe2vQi2",
  "key4": "m3mZ16nvxiYAwJfZRe92sg8g4MiZNcfrKko9xX1F19xH2K894SEmQgkUNHXU343KZkmF5TYfpMGLc1fC8BoAeUN",
  "key5": "5KddgLYNzC8CogUf5UfWEjNzZL6FZvbJ6rU8hrLMvqr48BmAekvJjkh1egdVg8hWY2KySu7Z2z8EJuxBpo63ZK2s",
  "key6": "47bMWK7bnxdREHjADsQcvi9nAXutC7vUXHBSHrmdBWcksJ9NnHy1FYJjui4BzynQeK4SUCFWs75SmRbt6M3nxiCG",
  "key7": "2zNrvzVqCXBb2CZ55HhV8ojDjBqTo1zXqrHBb3a9szxZRU2h1yFWLSJPRkZm3UGS1Yr76ZqCFPsYT1S9TFHRCDDj",
  "key8": "2dr89rw5P7dZFbM8NGrZCKPY8syr9sepk3nKbz6rrZ7mMGzPDQJduaiXF2Ef8tax2TrNyE76McJXgJsk6WyWw8eM",
  "key9": "5gCfL6bf18PddVuTksdBXSYRty4hRAPiCZxqCRquk44uE2ferzJ1UFYhKNDRPneTqMBropF2UMx5ycZfK2ciqS1s",
  "key10": "487J5pGPrnMq5F3JbXM4EbdM9WumerTjUzkqx6G6xBiqAXvU1sLHv48GUjNV9oHVXRs9mZZTa83VsBKH9UhgLbHi",
  "key11": "5L6ee6EG1mSibSp4Miy197EhvptWWQqCcKGb9Rwzw7RM252Xm4UB28fB4AfiGHoM5ufXYejYykXt7NAC4SkDCMNw",
  "key12": "2iD1hJ5PYP5ks3JhaTyUM9oZkVK8YcTVaQmtfHNEtGjC9dNMPotjfGDHZXQed6r8rmoSLVgNNCCMFucqeFFmwciw",
  "key13": "uXZmcY6b3dXcgpdgjZcWZRr2k6rrTerykdmCfmYTDKra5MjQrTMoo1WLTuRb6YCuA8mmfECrZyueajE9yzhtmro",
  "key14": "3gF11f9R3wZEEEzEsPnnGRbRGTEJwoSNq3wbcpJLcPFWEguBt6E1n6qRby83xQZQA1eiCgS42qkZUZ8hxXw4qV6W",
  "key15": "2JZwMNt1EkQL4uLSm6YvPnaLWfMXB6h1RPUKxzvtn7xzZ9835PmWwkdcmmnpmywiobiY7VWYbfk4Y7Qs2CoSyrtp",
  "key16": "2oDKgrry9g9app7VNqWPNUGSrdaBS8coWTq6uok2RDAkVCRUUhiSeA1QJCm4T2akdhy4bT7fvAenQcZcBQCiJvy",
  "key17": "2cx1Giba4qgcUusb7F69xo7qW7wBSH2ucSbRSNsNmtc5444D3Xnq2mUyA4XGX4HWXN3HtdLjxAAUL5a3iY8o5Uoq",
  "key18": "2xBk49BWYttLXSvQWufdTEfzr3U5sujJvVSCCXUrTCfrtdVNRVQNX5FEzjQkte5QXofXSxkNBUhVrMJCfmFxLt8W",
  "key19": "4ManWEeLYVtUQdbc5UmuBj1QrJhe6YCG2mmeHqtA9YMMGgWCL54HN4rssahWFPnHaV8SriHktZfisvSHp2pYsrSY",
  "key20": "3Yp5akoFtTYkj3PqjEbrePbu2vwoMqe4GyeVakQLQ3jph3evWwJH5ToAjCHBNuqmYFVazGvbWDj8tagmf9DUZHVc",
  "key21": "4hHfGhQK2D9zrc7buZtxf9sh1U1W9fGYnCPwnQfiNRYTBEwAmRFZt9FUAGJ4ARoXb3PsCAFN2yAs5TeCkC54BL8v",
  "key22": "GWeFMq9WYfjKpJRcaHaovruTXmwU8L4DEWf6oDZomRKkvRXg51VDyd22hkLxQPbrW3bgtHr7XecXdabv6gv5sqj",
  "key23": "4aBCGjay4y9w6mXF4Rq7KAGNXaWniKUVsNc7z6EFSgQSvgdfDKuCbgDib9oR7LK5VYKYcYQLFEkf5U63FRDtoeCB",
  "key24": "3VKcFpKwPBcPemGpx6vtwabKLuYuEdQwCb3HCAYrekAczMwV6kYb2gikUeqYYNC3gjGkjZ2qMUz4a1FD7nFFR63z",
  "key25": "39gVSh4Cc85mDtXXg8SrHegs5JxaFwCTuc1mL37f9YdXCpjidPfNRfvk8gXJoRhttmuVZSfc9N3cwwXcqsTP44zJ",
  "key26": "3y89yRBTjLdxBG2LQbBJY56f6X9k8sTJ6U43BBYe8vd8ds2SsSeJBLewJaP4eJDy9myZmyv3GSpqgD9bhFzhchBi",
  "key27": "5htE58pahpwuGH1ybe7qLn5mpjMdwwbocDQcEa1aGDfCTLZrJoDSzVUEXQtdZDxBUtr6yZgDtGB8AHF9N7cwJAcm",
  "key28": "pE7ZXUnYwT5xkqz3EEvN2VChQoG3dbkxqt374cG4kZsCwMJ4BXJSC6bYt46NWX7jdbHTBeNrdRTrBNeJhUcdnyX",
  "key29": "3GbqWRXqMz6U3Mreqny7t1StZK1pGmP4awpukr249x53QTWQJtynhMeeyRCQz5tun4tgDxWhS6JCDxacP1ynnM5N",
  "key30": "rkM3HN4tatcN4cLXsBFX6CGNn6wRjT5MBeqA13BM4dKDwGhXoqXuxZgufU4rRckXLfwN6x3qhKbEX5JcTUeHP2g",
  "key31": "44jB2SRPfDfiZYAB7XMs67xz2xaY4emXCk2rNw1bUSuh219N7j6ShE5WMVv2SJNccv2ho7GvDKNp6pSN9Sa6ySY6"
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
