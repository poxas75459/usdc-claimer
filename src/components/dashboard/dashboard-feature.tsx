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
    "3YEN6umWunjwbm1C9pFveqK2CFfJvs8gxPXvumFG7EihKW7pFj8sBWxQsNuSsBCQRSAnnSRsTgLiGzWRG4ohqWEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HmkreTeG3DmWsqDuRzStAaAGMesMskAtgQFSKrpaqEthpfFHUfQ1EirbkvLha7UfkNZFeTt7GPBJqL8MsYQ2bgu",
  "key1": "8gAQ54j7yZHqfzCqKKXusV4Q2kDubA9fkNEUyhdxbBapt8FEf1fagg2h4sBB6wMhhGdRVWWEDf2REXJBUuCJLwT",
  "key2": "2jRWn13BGRWJGwq5pheXWumAdJMUm43Q8rHA9Mjdw4j4uKrw3tqb8yb3aBjGX6gbNYw2ctSwxMRs3noxmRLgdJ9i",
  "key3": "5HqHsTYGHTVRbMj2hq8rj3eh4Kbmu7nRDySyTTXfnLHp4BEDBWFP4cqjrTmP2YtmKv6HKcTa6kDdHeugM42Js2yE",
  "key4": "4neF7E3x5EdjDRsKAM5B3Zo1oypXN4QwF4pwbHYoW7G8MNE6BTe8C1AVTrsF4Vo4YE6iQgzE745aUi5zNGFQmGZV",
  "key5": "62HfXyhaEDTTB5MKwkvN4rNE6gRFamqECD4p7qTC3tpb63LWF1V22LhdpKhD6TmdhuqQpsrm8vH3rHpG7rZjqqLP",
  "key6": "JLKYWLPdAJZYGbwwPFjsHpYfPnQNqFJbKbWp7K5AXiF8aE4qMbVXySt5GgA2XfxLXsFtVyjyt6AAb3U8FmJNnCa",
  "key7": "2e3zesURKA5kLBU27mprrPckXUMYV8a8GWmUDh8XhRMRzdbXpZP5EnxiG2hs6rjCMr6DmxVG85Gxkp14esRPW8MA",
  "key8": "37NfwffjENqBECkYoSHKg5g5s62bAnQSi7xTthyaHEXevG1ho6Vd9TcQXasrr7mtFrAqnjxPHxVjnA53quCujXyP",
  "key9": "5SieR1D5wWTC3aJHCkEyN8R5HjbCHSgtwTHxiZH3YSd7tyiFQ5rLEd66gkBCMf4h2k6uhX3Y9MQvopjdZRSjxb66",
  "key10": "5JFrnaetVreykDsfeDpj5ewnHdit51UmJ1R1pgV4T3CKaMUJgR682teZK9zm2S2oTNPaEbAtbYBGkx3jwuwx664Q",
  "key11": "5ZCdRA9PTHLYj5G5qxY3r4qXuFbUuLDKZon55SYiAhrwQ3HxYhgVJJ4BQFK2FXC5Nkh2fach1KDGvyfXysgCXkQ2",
  "key12": "csH3wCbiynhddyNC77VXUgnqtbTR19wJ6Q5JogqrX48jcwmnLowaDeoHErsaDXrXHekPbyrpB7GdhtYLUpubokB",
  "key13": "S3tcdPyP5QdvW8oDgGMQy7T7uATGb69C3h9cGcobjeHtVVztd9qpkKqw837unJh2qBE7Th6iuEYniU2y1jnYv1w",
  "key14": "3tryv3Sj7oyFA1WsLbo2ARKM9dqraNa7mJzBDaJN6yAfBsTZcHDUVkwMGtVCGtj7KGQbAo6QgcUmccTPUo6Ad86Y",
  "key15": "3jqkdt7TL3LB9THB133NceK1rf37bXfG9SmvzRjFSnfTPnhWXDLGrr8yvFwPU8UXDooN25kZiYVK1U9fr8gzLTXZ",
  "key16": "4t3kP7QBniDg15yzrEjPj9VXJGnd1LNSWpEUiTgJgMKMcVMTX4ag4Go6ci3ssraN7Hhd3nJNVMjVMvfQxyLquguo",
  "key17": "5PtEBbwfQwhFRJJP65GefpHjnvVUm7trzfP71isUhTaKuw53fQpCMhw6G1GNoZWMF5AsAW1PpJWhqVg6hVCb1EMU",
  "key18": "446UwQLvgTiWxmTrcJbJM3mnKPtJi4dP36HNFSrEKjM62JCeKVWyanKS7aELazb5HcLwk33q4FYMUd8dkAR9wx2u",
  "key19": "3bKLNqTGCYDu85SBYqgGHcMTQbcEHzmezSyXcsYfyA2EdYqwNBkc7VHtdpkjaZ7cHaQCsNsxq39HDq7ioiBcQ8Ew",
  "key20": "2cCQBRPkGu8fwgX8g1tSJwrwsP3GV5twhKkf1DN5UTNTqqjDXtP3pEVMG4tiDZd3KrnfYG7LTBp4AfndxWApB73w",
  "key21": "4Qg9QwGDJPJLwNDc59LJ61R6G3dkzXh73ves81tjRwQo98gPtAL5M6Etw7JASyKZXGGpj3QabSHZGmqvFSRXhv2V",
  "key22": "3BTeYNxaP27BLKmyW2uADLzuHWtweNEwe6i4S1TzHdvER8muoYNGS7bFSp1V6sF6umUQqDfXiqaLZkUQZjnHKMTf",
  "key23": "3BH6bTHzLUt46YezK9t7GcKvhmZ7Y4qgGb4hFP5KyZDBMKJWD9UZUQ8G9a7vUMT2mCTH4EgCuKcaAtwZtLozisTT",
  "key24": "49WHKgxJcH2N2Qz2d5DAXEZwFK4Bm3pE6jrFobWUXo7NzNpNjBJEEpTYWXruvDa7LNmDY1EhhVQ1vTuoBJKCCu64"
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
