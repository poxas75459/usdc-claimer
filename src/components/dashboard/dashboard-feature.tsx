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
    "mSv63MYt2bXtXWJxP1wGSMAajMewHmzfcXwcLpbZbUM7P9eoeodtQ1WTMFeRD4HpgvcdcHfK3gPWksV1Dz6mKTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HzyMN6WZsnxh5HqSbTaZLSk7D9p115kr3hGkkGt1eVMxnrxLTxVVbVU5BK523H49A1YgfoXbVUvRKHHoAr1t37H",
  "key1": "52pDcPvF3mEmC3yT6fSvF7YYaequKNyr7PvgUyx888Q9qzAvkP6XhfULKRoEQLRLLXmFuuGTdxepjPMaA5xq7JnW",
  "key2": "3U9AbHNpp7c9Ai37tUxXYDn9gpQBNmzCg5oxiTFVM7dQjF4vbThbVoAh9JxZeaMeHRufWfYXFUntv5RRcTV6hQXA",
  "key3": "4DcVqtu1cMjNAMYcfNWhr3XAGMayqsfpvqtZpuhjio7fT4q87myYabfiJ6FAU34waKu214EKMd4JgV7tNjKSkkRo",
  "key4": "HuJUQiZkimX4kiMPjWTcMNcm1RKwcNCbSHhWGEqe8xbDEzbTvb82DGjdzTjjzmApqsqeVEHtsTrrbJXMFJwvmqB",
  "key5": "3XzyJ2dezF1gygCcvTHLbsgWV3PZUMAZEUHeK2dfJAkM8Wt8s6TWoGuHoz3CNTfotUL7pxaL1tQgUQeAvFhorYMm",
  "key6": "4gXTJ3BTZxDAEyHn4Cik7w1mdCMxTJSfT7NHjd3Q189vP1vCEpd3GcwWhv5QU4Kbg8a4uBVAySWRJ4gDz5wjUaCZ",
  "key7": "5P9NLNjRkoCjWi6f3QGuRx99qHyjMinPcN1aD9gyLxNH7D7Zsj3jucvyZgMc7RTJCtQcLcSy2izAjRVkQGh8QJXB",
  "key8": "5wPEajQNbUkLUTXCCSP94bLDfh383FWPA6rB6TZyCDdF1JiM9WowcH26KzbhQ8pC8qWqBv4ovn4ZXAfxBYtDFWH6",
  "key9": "5xr1RwjhQrUQdtQCpjsuNEdXUr4TudMk3pfLZNrmo73Wifn6iySYGX13Wd8nUJHbbvdDpbU2dr6GmkZ5vegMeBV9",
  "key10": "2WucarJkir84LaBkkhEKwW234PEtwWW1ukyiSKbAJdqjGRTqgeXZrsaXz9QoVD2Q3D7eEK2kN2z6oYFVafoQZGE5",
  "key11": "3iDhgB3oXxT2Z9Td1x3B1rZD6g81Evd2rHMQGTFXqkJfQ5br8LkHo6moUkDS47eLZisqYW7irxmFkfJu2faCLAV4",
  "key12": "2raQkNAeMHNpWRFVX4TbbqnvM9ya6h8zqZpse4QThkgR9sEukywEGDQipmUEmzBGvf5FDEpWZeTNNK6S32242od2",
  "key13": "2rpyjBhaGc4BNPSVBQjBS5fFnHGWRUBYJ1L7pZUGi1e1KfFXKuUZZ2cGp2Et6cyzykStRrqD2GPg9raZMkYRnXjj",
  "key14": "rVhBzo8Vu3QSditG8mCfd4z9yWDsmmvbKrRSgonrfM4Br82iZDRxDWa3PnCZVYU2H6mNmjSXtdM1EQ7cBKaeriz",
  "key15": "4pyhhiDynJEcw16ZiZGfEH25roiH3r9kMkb1LUNkK517VFU5eNwgMcrPhuYxRu6s76U9s3zKT1zacQyfBRLx4VnT",
  "key16": "2y9kk3idCVbdBxdpWJvNYX3p3XiEdrddVA2EEz7mK3obHGz8LzueUhLNC3wYciKMgQr4gBwHrasbX5bjgAWNyzvb",
  "key17": "5gTBKBcvCJpBxPtZtfqTgYYihcFtZa2dL5vgnZmS1DN88a1rvMxZW86C1fQKEKQoDRy9icWgFjnKBdhyck7suxZy",
  "key18": "5nkMJjJfrwEoUfXEiU2eCpD386mYQXYTvtFGcUmRoSZgmZjcZbtwrGKYTcWtrh8VHErUGetrHWweg32hBycMExi",
  "key19": "5kYn8YhCpupQeBGei34zcsfSh9dqCSygDrnz4ZaKFKdz1Jwc9tbzkHzLFUQRj6LKT8T7efw2vhMdvQgoVNifaiT7",
  "key20": "3Xwm18KG13prGNYRA2z3A8koJgq9PduHunCNXTqEKzaBqr4bLb5dKcEMv8Y37mDoKu2RxXLCncEgumhkk2XoXW87",
  "key21": "4Pp3E6HEoPYyJXMVZCa6X2gcy6UWuT9q1MWBC7Kuh5UE2Waf9kauomrGKHhrjfSTFTHEyyuKYdgPMNSR6o6Hkw2a",
  "key22": "5LTPh8xcxBvo5hizqVv1R4bZT8pZ2SmCLSMxi117WDgH8iuyvs8gG5SD7mbj9L15SAgjtg7emFPPz2pJTAD4KbM3",
  "key23": "DvQGpbRVfGKfeBwPGTRerF4k8nYeHCHE33WSybghr9X8w6xA2H1vjp8s4XJeJRRjB6PGtMa9PnocDsSTEpc1GNv",
  "key24": "4oYJTxcWEDn2Hr2kBzpmr12YGjcwDBH3Hb3m63Ki8Hg9Voov4dVPd1tVxAVg5M1HkwKvtF56zcrwQJWdAM7w4MUV",
  "key25": "23Ub16LK7xXs4b3WoNKD5ZqPoExh3SvcdtTeMPw19wttwovzvymq1pgEptttWGodGNLNGYQake4h1LdhbL6aUkMn",
  "key26": "3JdNiBdcZQL1y49dqHJterydeCHmhvmHenAt8g4xv1xCaByMRzRNSUweCxURMisYNSfP5QndQDpzhdpaFGUc5s8v",
  "key27": "2hDF8rzuT7vWBgcqvLYDYnJkGot2xfdH2tQixu6h1oPbhQiGTFH1CYXKTYWXbcPRz9hUwCX3GNN9EAJKWWvMuVex",
  "key28": "22dBtBgBg4K9nwhAsVt91ofTaMrRcoStM77RWWaXAc5w6wAFb2ZGEDRmM6bT7SZ7rKXpjqwX5mfKCMkjh1vSXkHP"
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
