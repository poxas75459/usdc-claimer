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
    "6z1fFq4pxPRGDA91QuSbtY6xnVRqvVX23chLT3JWTHP8ytS3SASQpe5RSsywwhQFVKonb8zyRk6RNFAujUTyai4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aA8F5oTfUktGUmXXrGxY6YftFZfqQBs9UmHfNb2tpfBVz9M8QZAFtpaEqiEBNBJ5WFT8raPiUADmEDCijN3BgKZ",
  "key1": "4TL4pN3usuZHXQBEBPMdLbStZMrMMuyKdkwSViXFCBfPMbUTDyJwKGPQ1QdVn1tFmT9aPUKScJrnEVq3bqYBVtXX",
  "key2": "5SCxDAyyLCxPJsaTpAU67yudJ4h7bATZYkwcuKSRqSsWWBzuGTnQHroDDMre4PnN3n4a8tT3m2tYeLTfRoMemnMg",
  "key3": "3t5VtQ5sQiReZHiyTNXHDoXdTb86nD1rfWXbBRkc3ubhARUrab6reAWKpKgSKfLThguq1vTpApmrLrnyDwPA6ark",
  "key4": "3uPBketiHFwSKTX4AYbhFwViq5AjUxpHRx7oAN38SWBq1xs3Dqe6SBHW86VEoqYVTQwx5kU5BUAmYwAcpxk7jcqM",
  "key5": "3ZJJaBqGZNDvDtfTQHDDYtwbsE621VpVRxiXbzrq1VBoGehZ4fb4mpFixeoGM3hbzLMGLTcafoDT4wZUvHrB1361",
  "key6": "2XCdGwHn82H3GPbuGLQYLpA8gbjBa6RDgvRN85q3zjntWHpNkCtgfxHJQzWLGTeqzxBeoLBKojHXvS8Y6a8gTwrH",
  "key7": "3bwspu7hZaHMQ1rdpYVutPqGYKYWoECLCZ4rYoJnrFizskVkrM4xMbA77rCBJLBpaEkGVk12S2YBostYjEnMuJA6",
  "key8": "3RLQGidLFpK4WdkkvsiGRvbaBh4i6D6Q1X3a5LYtXqX2xFxPsP5c3gfuNxLLWAmmE1y1L4ACSuRx5GA6KYCMRimU",
  "key9": "61Mdgy6bGU8AuSiJ4PTC2aCrqDyuMYxFV5Wajbgi4Jr3UxtURmdNeJA2QwWGMA36qMERmxmLb8bJMevmZ7DqjZcC",
  "key10": "2P2vHZr7GYsHaq7STPicAL5iqEp7DrZo3shwhjECB83nMdQLiynudyP82K8FqPHwXg6cdrWrp3uiQG7TWSi6Q7Qu",
  "key11": "4AbFediwKFVozUiiAMUD8UdHuUZtUQXHdX7WYCH4NDSNzczYYZ2yqkaEWX12o78bQDnDvyaNgmJVxVAiogFHrrQw",
  "key12": "4VKjvVbtBPgce6WrYcGLQLE9sjaJMPoZHg12NQhvdzZonp37gBPCXWM6dKjF4ubHzrcjaz9a2s9THqyMQiehLXzd",
  "key13": "34LxmivpTqeNX82Yg1LsHE1BbJ7ZhB9mLj9ZXuh687LgoK3uXo6ZdApBMpAMwtdqB3eokJ174ekj6Rv17ZDVaL1Y",
  "key14": "3Mz8Pxd2K3jJTau1Cf7Z58q2Xg2kqFh9bHnFNHY4cwM5QErNtXfohxJSNNGvvWQgDjHzVujLFFgXANDatddkCn1Y",
  "key15": "QTP15XK99mjoY89z1BEnoXrGYwoxKzjiZb38K16uD2FGBFRipbu7GgWMti8CWLihWxvq4AfijKT4Rrgof7xRu8o",
  "key16": "4VAdPUayDBh9jPr5pEVkr7pQqoRyDnjFoFyB1EZeMjCdARWfFQx16SN8ZZgFpQtuvcs5RMGuoHi6GD3oPmbN2Zfi",
  "key17": "2oqVtXtNC8nqUtzhWUEJ8WgcPmpdHUPpXWqtWHHg6wzUu5axGsmrWKqdaTzA2bxXpdEbMeo2icckgUf2ftqUf3eh",
  "key18": "3fMowXLwXBP61FXR4eTJAtC8xVHVNEPg7E2XcieNEHeegf3MrUANBkwbVHa9yKEqViPL4vqqhaFfPhvw7yY9yMZz",
  "key19": "JmxAi8xAv1Kv9ktVUxmcZHkb5ryWWFqPaw4oyf5dEkz1zws3wULEDV8CCUDRs71MG47bUTJmhz61EfVCS3uUbnp",
  "key20": "2jbx26zSfgCDqUugS7SVWMygkadmCgUKecrS8z8D4W53HVGKkgengohMzaHdmYgrFQxhzzEQPaNm8rgujqvFYgWA",
  "key21": "8su5SKRUZUgqSaMERKDdVbf8ZTQ32rjZq6Z9Jh76AvAoVeEQSatZ7WzrcXXpK7LiGp7jRGuP8eGRRUYxx2Kzy8Y",
  "key22": "43rgxd1fAiP8rrX23Zbbyw6x7HnwNR7iAKp7miZ6XTU2RSGwVYvmAHkSFYENLt3onqbzw4VsboZtESKhpBm77ZEY",
  "key23": "3Mqekd6iax43YuTVavkAxE64ebLJ7iuVqhwUL3bHnw8Y59k8fd35bDiU63sW3dCkkT8ZdAqxhPp6JUEUYAfJdEAS",
  "key24": "5KRpSuNrPr78M6G6bUx5J2YNPXVS1srBmF1AjueLP3Xkq3d4tME4kbB1cdTjrud85ozX5gZd2zuwW1UWg5n9mCa4",
  "key25": "27Auu7qqDus6jxghxddr2iKZwMmEMnmJktKKBh58V9bdFPcp4CoNUejt8aoZzqjwP77ZR5nSk8SqrBQN8srooQGJ",
  "key26": "2mN4D5ff4iLDFLgTrnRWzrELg9MuKSuwaf8f3EZrMZqU3hSVcHS37h2F6BU2fqEGahajRJcM84mLbWTYLxgqLQFF"
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
