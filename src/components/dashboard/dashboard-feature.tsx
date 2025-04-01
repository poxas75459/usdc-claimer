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
    "2yb5EFsB58r4ELE2MRjFSnUz2drT4gyV9TbdMu1KhJJ4YbVPR1ceFN1n29tgNVFMQSqUDMc9sc66VbuAhXW29KVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vF6zPX4Jbby8ZZEj9fK4pgfbtx2P1BZqstcUJXhkPv5QvUNeo1oJ3HW3StpJQi7eQ2UwoQYc3QS7BcLAf2suiZW",
  "key1": "5C5FKDe5Gatw4ed8ni1VbhjmTHnW5PaXi1hQ6n4mg9UqFeAtQKDVb3NqAtHDbL5KscDdQi6hLcwgYji84QSpAJqM",
  "key2": "wyNPexbkSUtQeLtHGGej9UFKD1vngYTP6WWiNoFabcnL7FMunGc5WFbhjaZbY5u5gSsDKPKjz4PRbGhbSVSmc9B",
  "key3": "5dj9zudJUC9T4wVTZhKanYPhyJgLXpafHx3VMWk2AyT7qRhyiMxe1BbVkXfUNXB1PkxkTwtgQ2BRiRc4J2XaEbUL",
  "key4": "2JCSubepYi9f46L8pE3nZDFbLqCDvNbpzJJTcjay3fBFCSChLAzDq1jBusVTYZCkv8BT1PxdVzhdo4qtNGkP1ihv",
  "key5": "4Rmue6F5s6JCnZxeSpyiWPMCJS19Ec6CPAoCSL9CbGKb27sQ76nBfju4fctZAQRhGPjauc9Gou7KBjyKHE3M9uNC",
  "key6": "4WKRFdReHujvcj443FxgYGwsx7DgKjPyr7EoBzcgvV16NAC4a1oZb17gkj1Uh3ffnp9ENKVQSpm7RypTvBizr5CD",
  "key7": "2cfJjxBeDMSPQif64QrD7EBGhznNYvzA3p7RdvHvC8ydXdZiW3Y3QZNNC6doo4koQ8jjNf6w99RGy4BBrASegxLY",
  "key8": "5RVBDq4HKLsrTqq6pktX9kasPvv22UfEqj9CMHpgCyiS65AJYKxEQ9GaHbbLHbGFQGjqq3PYwdj9WLSgiUvH42DK",
  "key9": "62zSQo3w7VFSfzukDKexXGQfs63m6pUpqac1hLbaKEhwopbAVVknoeHqbDRsv3aC4huFZRydJB7RcjfMWua7u3SQ",
  "key10": "574z3zcVxrTpGEQhNemvZgCNf5WFKLyef9jTEGtkdfH2rBHqjzkQpG7kS5qyV3gCPoSG7iZPnhcAVhBt8TsQX2Ay",
  "key11": "3HQTfHmpzZhUcWPS39dp5vQTkzgrURjneXMsUDbQsgeUYWoU1dTLXaabu1Eaw1aSEQ23FFNoc17YYhP82LG98dY9",
  "key12": "2UbeWzV5CFkpvgVCWXk7xXM9rePNAhytUeoBLSCQvdyoZNLdM5qN8XTdeX8q8g4nT3Fz8R4ZnndMQ27aivdjNpuz",
  "key13": "2rUDFLM6dD69gzwyDvYuih9Ai6knALEuBpmBfrvcCL1jMpSqQT7MWYHiyXpiTmzc8mUfzN2A7y5vGyrJzuac8fxo",
  "key14": "4pdvXALAGvoATLi4Eg36M8c8Ljd6TZKUK6QB6UnLvmQM6qavCJ17sfmrHZGHHNH283aZXJM8UsyP7GTPpqeNLr2g",
  "key15": "5VkJ5UGeStwVKaCPG4QcgfzhB7N6FobvAomSP7MJtFhMtQyuox7YoyeZFfrQ1xAXJQY5mrCVMs9d1xeS5vH4SUs5",
  "key16": "3AaQVMEZpaPK3gn2gxAfvKYZYy7W3bnwGR2eT4JZk7xRJNB8mn5Jn3vaQMZzUG5sRw7QNmoQd8HFL6Wh2dXKHgaM",
  "key17": "4QcEsLNz12jizGrY51ezqMQKKJyXxqzWoMoWGjHdcMCdF5KoqQBtqMeBN8H8mMh9gxo4wyktpGnq1LWDrAzvU1uZ",
  "key18": "5dDWP3TTVcw4tF8ksFkuhZdhfCiFbBmEhhBQUq3jr2Un9LoFbsQax8Wj9HkXXwECsfPJxPyQfMhDTiBi49fTVnRG",
  "key19": "2XUVfCbDqdAHm4sszMLPFuc4gbq7EZCywpKY5x1fASEGrZe5Vjs9ob61DQGfJAB15cAS3T47Ncv7hVYyn3kpC28M",
  "key20": "4GvdtDSjMVoezWaeiuo1KtWc84ZMMpw7SighSScehecFAo8qGN4RKiHmi1WuymcTLAWiQuLZTzeMyb3KndKemYfm",
  "key21": "2fDpBShZmSEu4Dv5a5y8A2ZuUUtTZ8mP9geNtGHMDaMsN9BPGsiZhiaV961piE5MMW8YjtgKZRQomojsEGJDRxGB",
  "key22": "2JFtyuchNCbPYPJsL5DqnYyd2eCHsT9DaFLUynPyxX2M7NyybeFFtmpTnJv8DpTZbp5VBDPG13bLn98dJPENCXku",
  "key23": "4nBaEboWAmrzMC2zeKeGx85C7zJ4ug1qVQ9JAE6jfXpye6jyRrAYzUJEbBdAtPSF1kUVfAh3LVE32iUdoNMREex7",
  "key24": "227UeqZqWXpvwuYpC2w9pF1DVwLw75QpE9NCWUezEgEoGjYLsYAnWYzGVCeVTe4qUXsob64ijREBPJc4ERvGyBxK",
  "key25": "4WCKXiyQBnVMpjr6dsoLXM3BhB6a6M4d9guLr9fRbu1Yo5MtXN2tNevUWiJiAiJDqUBEbBpvJLMZ4Dy82VV5MFXU",
  "key26": "2YTt97gfjHN91XV9KC5HojKzgvdGbrqmAMxrCM7wd8HdwjeAdVurgPGhdtrsHi9qwvhkhk9h5tm5Fzfs7vwXAseh",
  "key27": "2LdqLBaNcTwgWj5kuGcgLorqq8NHJ8xdws7WQ7TF9HBksH2u1zVFjHJBK8zRrtvqvzgnR1Ck3WhX4LWnPcJfFYdT",
  "key28": "2UAMG7TeCtKkGbVuRKPQBbuuboq5yPDUvjgEFKpJnxP2fm4w4Sc7d8BghccT4TSpd5g56RNUZEzntQFFYbxnNKjA",
  "key29": "2YQjWxp1PEbuLsSpuK8J6mD4czM6VQz6KNGX51pGvWAfF2wW1EmTXmkkyausjqgympkJXfkgSev3V7iaCgigdq48",
  "key30": "TAqUxpRHtG5sxnakK9JfQbc8ihRvYaGNwEBBKQNWSoJUa65bPagQa4kgPsGxzhBWAj9pytMLJxkDMWk5uL3ESSr",
  "key31": "5H7KH3PTe5J2EEr5KrTCDpq9PyA2kVdgkHXDVTjC4STMSCwh2EYuPn4F7Lr6QgXdMVjfUKNacKoXAQAxaxKL3WiV"
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
