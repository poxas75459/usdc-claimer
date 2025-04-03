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
    "3qPHEbBGTGWxToxEC6zfNLio3ZM95mnFAHMobBoZUCpoWEJZv6YPuU1dkK5d1sPtdMR1iXDinwre55Bwtue1Djt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XoTCKw2MDuaA98sRvfyb5cVwvMwiN9DrGSGmSqZuiBpJ1MbeaCJ48mUnHAQrSL1MVPDeeKhWL2nGoc76ZS7nT9S",
  "key1": "2fzYDuNk3D6NZpve26SMZtEV644phDeB5sMg6chFJqKpfAPWe9Nwdjx6QceGiZJBNWGftxf5r7HQcd84ykehSnwz",
  "key2": "X4wXbTkFTD5m7A11pWgHiQAmdeMaCZVXNGhCWqtnJnuLgpMH5neKyLYyc8e2HuQ1GmaNVsbfKXibaVUtwHzSx1h",
  "key3": "2Ujr9xbbSL7VcwjCwcn6Xb4YcUD4zV2xzDjkYM4jRMY99Rkv8H5LYg4HLkfauqfxtC3aJYdvUzPoekJn1Td7MTZ5",
  "key4": "26hrqjgX3ppDr6hSEeM3hCLJ8MjNfyeDDiBk3WJUKXkmCSGP8zHZShtE8ohLvTtMDm4SRpXQpDLvp99P7Jnt5Dn3",
  "key5": "W6RCHHVCRvTGPMPjx8m4vPfXp5XB2sBRkPTabfJhgt5QHCRX7dUZ9FKnbXjpb27YCKeeUmiBoSNaJFwEcBBrv4i",
  "key6": "4XUd5BbF15XuHyy8fEiXbmvhTwBq79FwjVTqmRfqhd3MWxWcLuYJvwwjZyhXppb2Wsavu3NqckfDbUMvtqJ82Baj",
  "key7": "ZkXPP99fRkyHr9DeERqxmJUuG3tRCB9oHsNKyKA2jxGKiQUWo7neDRtbdfMLFNqEKqk4RTtFQnpkPBT35DJsKsf",
  "key8": "5fy1ayQmFLN6zNbLLXeZKetYWsyzUEUHMbTW4jtRGNDS5BhknLVZ2V4cVTqPbWVr2iDis6eKiTSXg6pTEPqhPPVR",
  "key9": "eTsbH1GbBm7PS2CfSZWBs35PbQjrd78HBt7Jgfvv9beuGAMdKmDrNPrBpaeZnBxiU4Zt4Xzn2YHqgwWW41GUAF5",
  "key10": "2Dfet1Z8mLr1EHoxQ64C9E3aGHjudGhankEzdWZZz6facp2PBCYRUdjMmKPD9HT1ynE7VgSM8r8GXnkk3jjH9vMT",
  "key11": "pYBZKDShVX3EvUa5tWBFiN6Kwqt8ZhD8RLak3LrW2kCLxFJLd7ZHN1kqwajtDR5fy6oQqmLt1iejBon66SGeYvr",
  "key12": "67SxMJfVicwLoVuPmHUAf7MLgSNzDzRgFQKqmgh7zkt7E6RYf3k6GNpAS6fRh7Zgj6shEDr7YJxcyZqJgW3bmgfk",
  "key13": "5EQ8Ux1v8BhUW6uhtoKgQvR4khUsBkUYksygnK6afVQ7pHxSu9sfEtp6FniRrGLSBY8azf2MuzeiS72EAt5gdY4C",
  "key14": "3BSvpDSMig6K3ENtSngWex83yZoQGcwLxYRyhhpss6RH2hYKeGCnyqfF9t9P7tFNMrPLaMNcpvNKxXVF1Bv6tcXH",
  "key15": "2eCec6jt5LhZerWtpiDk84HCKcFqeTeEqxsBmnn4FwxjHzxHMKeNv9mkkWTALXwqW78tFfp8bj27xuTGkc7GZJnB",
  "key16": "34hAM7dH9ueuT6E1DhCQBZmYxc8mq9BwGjzj8AwmdjtBqCLXNLGPAE9ieTq4v2PppzxrkP4NVtNuYyCceSiLynfQ",
  "key17": "4i9vS2XcdfwzKJUiuYyQaa79xCpmomzJ8nVF2NxKs1QqKF5GyDaT34RaVuaMCTvTxHunLANyH1HaBoYtjBGgVPEj",
  "key18": "21rxdyjuydr8Y8PuM7FgGT7WmrMgUmdomSPWPGKuYEM4vTPeKn8o56W8qAF6H34Rx4EXL8ZUMudjsbXm3WbLWdeY",
  "key19": "4PZQXBeC1vvk2QSWP8Kh3rVAWDh2PfyLYY4mQpAkSipwsHYgi7TjuSCYmHQhEwAXvRkXS1xWgZmbjzngCYRNxK7M",
  "key20": "3L4jC1vT6dYwLd3UVjB6dV1dpgpvPE9hzDtm6keSGwxPuQTuF6F2hJATWmuBtcLB2LnpR4wK595Rj6JjJyxL5St8",
  "key21": "3GCkSk4E8XN4xMF1cNe6NiwyEe6WobTH7yqcv7RKSiMvuGwaPjPp6qxnAfg21CFrV16mZwVXathNvaYpQAhGLKR1",
  "key22": "4sJ4pZhjrWLRNEvN5NNXFn9FeCS4nAY36a8GTznM2pJA39jb61L8aEJD2ozHywonzLgc9uBY7sg3Fo91grNvrvj7",
  "key23": "2rYDufDLzVaHk3garxLJTqmXJrgPeL5eN3Y8T22qzhv7NUi6WaDR83QATstxj35Dd2JJam1RLCTY5jaG3WRdCx64",
  "key24": "5YAwZiVGe3k1n8DyG7w8AZXHUMdbBTc2DJ3ercUC924hnU8SiCE1jPx4XN9xmNkpFSjfJi4JEGVbM2gF9qUXDXyC",
  "key25": "4DXzTyAjxwFfRH9M5dyNzDLMmpL9n4oPDhS6ymUbyaFioiruuxp7FnfyEA39LWadyKewzDvabpdXDK2GjEei9Yqb",
  "key26": "3kao2EtMaTWbm1jg4YoTbibezJLEp3RTyvDNkr96HyFc7GEhN21oRMbHSTUEdXZkfSmA8ozPmZ1qwDjAucwpiN5i",
  "key27": "5ncwTbjU3j8wx9YcmUpgE4Yj5E5C5xq9F3sTvDaeDQPecea3BJ3TMxixpACLL4chj7QAAzjNB4doPvzUtQHEH9sb",
  "key28": "4bwuPLHZNiGt799WfS6BW81H1s9xTuw2SLYYQkMoJqhcr6gNAY3TzFr4HTDswjGcTMxUmc1jXSAMGcVK9L2LnM7P",
  "key29": "46ynYUxahjXXjJf4FWnHGKCjZPYGkYhRFHCctg5R9Q1FMBexUFV1HmjkAKYRcHTrVwiqhFYjCcpiPEEdoxnU4c8v",
  "key30": "3t76Pzb9q7wtFNFsBmFmoBbz5FqvrgrdudinLAXfabtBzXDBsY4nhRz7nCkZoKkUgfo29omu98E3jbFrwFt7Yuer",
  "key31": "3q1PRfdYFeX31sY8ytEoFsnW8HS1533W8JuEo132BAKmJT17D4jJnt69q89J41nRzDrE1UmbvkD8KJgSWnuqFvSe",
  "key32": "S5Sk11iUmg4Pw1a1rH8XqPjvtxQ1XSNUTvhbhCe75Cy2yZNM7q15JXwvTBHHMHFLdbt5VrQfxEYLeNdBPgWfowJ",
  "key33": "3uExKyYgSp6qvETvwqxiLyMbAUFrE18h7w4QWcdutncxtoMi6sG1dBNJaPkqFLnZNbRbwAckg3QnHPDt5PRkxTig",
  "key34": "6393xfPyFmbh5tTFrp42CbCZmS6xNdByqF459JTAg5cSPToWEsT8USE6gpFtB5feub8C6CQGr7sQVsyFjP44sPDd",
  "key35": "YSma4buZQDMwaLjNo6DmuvCcNfuiGeTSHcttxmBdTqgYyyZpQEjxA5GzmqyLg4YtcCLEM88Lo1AvKEqy2WD1WxB",
  "key36": "hCPdhDbpxZSZ4kgjymMiWqndonDeKYYMgN5MJU5ukNqvKrTNsA47zqwhgdJ4teGKsDZiSeUuiQPakP74R2qnKah"
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
