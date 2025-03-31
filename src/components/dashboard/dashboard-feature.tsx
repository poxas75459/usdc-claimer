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
    "5Dqy7jJ4ckr22phj1GLvwL696CAZ1ztMCLbgzmKF8aokgLNQVJQqnksXmZmwfBktY9wWWpJHMZd4gAfHjizBQc5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37sAwWVjkgzE8Hqrtm7BLSX6CbQyzxCDiFF9NdapMAaWxcBPQX7oFfitahqNbyeHbsGgUVooHgtv62AMmyjuGf2W",
  "key1": "B9vbUcLF2aPmfBf8rHpTJ1XDchivrWH1hn6jZKJYMAhMHQ2DMvyTfQtZBYHo1Dj4i7zt6Fx3jzTxd3xJV1tydfZ",
  "key2": "3SqPEw1SLRDjRSGqieGdqsMp2sf2qJAgcNwqPXkHyGDDN7iBAnSaHjkigFjry6Tc86mz8th5GajiVqhRR2h3de64",
  "key3": "328g7etSmR6x7CL9nRsqYrye6Fh3JjWyPmnUbbyACtMjLK7bbCt8bqBYBtoaR4h6n8Ce5j3gAWNGNs3G3n2WEYsd",
  "key4": "26jkfj2QDraDNhdKDNMqQ1aWNNSg2xBTUJuBp38puSPdwguBhh2NkESpjxeeyJPkbvHRvN7oLTuZZh5rV248sPyW",
  "key5": "5X9ReHqntcpcpMVnDCrDeebDP5GLy5DrFG1rPt9MKpxptqjrq5FTsdd4RK7wtd6mCYMmtuYWTo16s2D84vPb7SmV",
  "key6": "3Hkeb3R64tR1JMWFbu5oKexGEkZ8d77ec2mgkPqUypKqMTejjqkFd3zaBTYsL33fvdAGErTwnRhnuRRYmdfBp9so",
  "key7": "2bXMKrGb5qYtKnHTFee1wZHaJ3FRsbQRjVsS4MysLWcFvZJLNS9hB8Pr8zdMeRgkiRkRamoKVLFuumDSqXAD9ges",
  "key8": "ntBtV3cC6Mf611f6Qni63fdwfRav5LWAyWqZcejMSBxmKALhugxDDCnF22poPxruRuXAPq9i3P3vkFaujp9wKmq",
  "key9": "HRSzbZQnDWC8v8SBCgHiSh8vMgQHSHaQK1SBTpDy1yv2tvsqDomkZRz6wZ628hbPnCFEnSPN2PbKatXXFNWevx1",
  "key10": "2R9jAwvvxGgb8n2Cf6FcexzE359iCmDGqHGYvER2jFijTJUpne21cb3a8aAcsNZgdGymevJQuXBGpQmGUaLbpkxD",
  "key11": "8pMgjAVu5dxEsJkHyhGKHYiUwLAZjoqG6pBsLQ5QoJDSZEXqD1K28fsZVDpLXAWhyNTkhtvASeQUSb4efDJ2N2T",
  "key12": "2FmMYT21qpagdXdQsyn3m88yvBpiuP9XSk4y4rtWtQVoC1WjPGKBcL5z9UHEAyYVPsfAFrrm8pmX3DPHxi32WPKL",
  "key13": "9kYXeyqgxvfopDAwAGSqMjPV3YdU3MLKAD2ThJ12yAczWusjtft6o4wdY4v9RAfZfZfF5KtYfTWcRWE2izfqHdj",
  "key14": "hXHA8y9qEaqGHsfsEMpULZD6un7tX4E67HZLLXRYhtPR5XmiNLY5fQr5ZjVEAJs1CPXyXMTixowmHRPpLSWcjLT",
  "key15": "38ZAfWSvnDYwTSBAga98rSuWhC6R9cmYFXLMetHyGCgcWniMww1oicV4BNHxKcM1z7774vWuZSk11s1uXP9Tx4jd",
  "key16": "52kPL4RExF7y9yMoxTSHxUGs4Rb6FXHS8SAfk7dZ3S2qafze66yKm1BbYSpGSyBAtcYKpXKtmJub5eCdhX7DyzW7",
  "key17": "waHEMo2hZacAweHpYHGwVGrWQGR3nzF3HbBxo1XgXBAywmfrNXSqgGE8LMNqxAqtuC1EVSrAdFf4RnprbFXGK6M",
  "key18": "5J3N69RtRJ8zcVECpRQQnxzFZ7SKWU4WxAQ3PYVYHkDgQHrAF3aXoHtyMDiBLTMiA8c7MV8aJ6EJRtpYGUqdwLpy",
  "key19": "Q1gkg4z9MT8i38zVXWER79EFBrq9qLdp6TM1LTHM8nHFuU6M9S5wM5tSFFTrYDDoXDACu5ki8E6FY1eRWWGBVrn",
  "key20": "MiopanWfdLdh9NqBtUMxNhJ2RyTbdm8jjA1pUp7DQ5rHAFqNyrnSRASGLy9u3QVxVwRSvJNU87ptRBKBRKuZcAA",
  "key21": "2knELQSDvUpKP978R3vo9qGSLmr3k54cgu4y2ivVb9y5BVzMq7D4kUNcFjRxF3F7vEweesY6UFNvDyYcJy33Eba9",
  "key22": "2qM3CTmQfi9CzZN2vnSwHTku4QJ3ndedei6zm4MtpWbrHSvJKQnr39JbuFaBV9TNjg78F8nyj8eMMHx2QvxYSJnY",
  "key23": "56mJEchnyEw5ACYmQQjQqjJnpqzHvUGUfQpsRydz4c9hZvo7tvxUr7cRG19j94vZGwCPbzR9QqYXKGMsfmpKkYom",
  "key24": "2nuSu6NFGGPtufgWnU8ZaUHpE5bAdQNiSoZf6uTiPWZzBVr8B6GpQhS5b7PyEozqQaiioVj98B9rJLGqeUaGpMPJ"
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
