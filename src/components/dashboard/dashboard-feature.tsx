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
    "22RnBagFniKZLowGhshTARcdXvaWptRsWbBPodc1Bvmu7rXQSVN9HRoQE3CsmnbYFs2DX5XYpjJn9jRvHFzMtBFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qFUWp4d8tkGHJD1CWxm3gzttTmQfQsg8fQDbz9kCjzyQKMMa1jeQk4z5sWEiLo6qJSSPWcXF5jfz5wQcEj6yTMF",
  "key1": "67BQTVhP59YS8Qgm5Dq5htdskWDYXr5exQatpUJExNVEAVEHeYz615JdYWEaj3fbxjVu7Xz6cSv2xxDqgurFjFdo",
  "key2": "3qfucZfdJXCguQoqUpEreAkjjvKJ32eZGA1XuJxxvGJy7iRxTUbgoW5MHqtafPXJi5qdyW6qcBfsDQR9hmLiqG1E",
  "key3": "5zG42PmSoaayyJuKrG5a1pq1puhJot8LzHbKr3HBgZX476dbJeEZT5L67X6UKi8563A5o5znFyMAfEJ8SMZfLtCu",
  "key4": "4DTfJiW6qcE6mKoKrdekhhN5MLeD8ZmDohj6gf68MfjkDPCNRaTz91gypp9AKFL9x3hayDZ7168cTmqxgJriCEyk",
  "key5": "21MPCkH6nWLQ29iwJhWXoZ5QT1JspoYJY5u98WjrDcVrA78JGzwt8RgeogsnfCKtd3LfxVEa8gJGyoS3CjFgZLaE",
  "key6": "ouZJ6NXWrCgqMgcALMuz9zmBBCbDSSXjydKXR9uq3TwirFfgX2H8P1LQCpFQeSmDubyRkYkXdc1gbvM4hBHD1mY",
  "key7": "4JsLQ8UwPfQjZ3fbdvnSfvFC651rySrkni1R7gcVxu8ZzU6699gnebudE4FNsiNLUkCLKsuduebdiiV1dgq937kE",
  "key8": "5qzmYqb8kQ3ukREEwFxNnXnMXzH1kuLJYrmpL8XYTfpmxQ9rBsrgMgov3CQqX8JZj8fRscfr7iqgYLWrBhSvxLNs",
  "key9": "2kQeeU7G4jQFdzbAPzdWVQyVvRW3QUHqVDnN6RcERVpSQpWALMSau21XYqLPJWLF6cwLPBSoAW2Ykn6JTs2p6fZM",
  "key10": "62LK1KKSgrdZsPXUqF4CXcEZpDWjpbDMWS3Cu8GUJuPMG23KAuJQkf7Xi6q78h7CzuiUPg1yojQaqhheepGRPJo",
  "key11": "3kN5QzRPBWL2r1s6Jtt3pouBChGQ9cbFkooDQ8bvB8WCKm6VdgwTZj3Lp9xtN2d92PSs2UJ7HRv13m1jqxEh9MYj",
  "key12": "S9F7hwZWWEj7Fa2qcGHm7R9WsorrDhY4HQj13LUvRJDX2uzF6HNapReCqELm33wjqDTWt7MFgdXTs8DiGPR5CjF",
  "key13": "YUpm2ezgxC4S1T1XKf8BDR8t4QjYDmFcFginxYdduvrPnn8YFo9UX2KvCZqX36emuZaQMN7pUWHK4E6aAv7WhTg",
  "key14": "2QeRoNvEUUa8bcjB25GChPC4UgA3Bp42yFCkDcrDUcQfSfh6KqxKBC8BZaNBcZAM61nwiwt2XjrNPVtX3KGVFUJH",
  "key15": "3PufacbfNYD6ZkPLZR73wjJRwLSukeitE7n17sZutycD9w6B6VuDGg2fWVmhDjUxibpBjcAWnC9LCaJHfTBqH3VK",
  "key16": "2zH5EAjzYkAtxyz41k3sqkauxziyMjXgoUesrSCiakr7sezgMN7JcV56dsRCJ9Su1xxk8s5mPypTwvvCpphg9TrM",
  "key17": "59yteeU1jyjwBkhVaJSNu1Y6tAbb9hF1wfgCEnR6d8kAXJ2H2QEkJnBPNep3F6kLmY2G2CvT6QjEiJMPCM1dpovs",
  "key18": "4KzSGZG5kw7XHBSMSNkPBohpJ3meEMk1QcVUvQb8ZuUnkYE8Rswr4n4CDUC9DGVM1Z9SwBkMi6PceixfyMmv4AwK",
  "key19": "3Y5ozrst5y4fRdnEifbov4iYaAeE17Yf7Y1dKwXTqJbCNZqVs6LBazz1yzP5bm3gMyjJXzHCrMgoBLPYRH3EAUGb",
  "key20": "5sJAPKRcaoK1W2K6Ed6KiuN3MQqpif41VgipuNzjgmUSn69hcxRLiM4cAEagFbhLZpQfJEuN1QH4pW8hDrCf7E9M",
  "key21": "NbjEG4VFE62AX2gH9q8e8cUuCNEs87g2dTZQUq3Ao9WHwBSexcva9JH2hBm6Ts1ZjrKY8yLCs5ezmKv9ibCK5mu",
  "key22": "4XYcxSwzwczi5CkUDxPyeuFC6aGL1AS8QEZ4KJhhVdwy1S16NiUPg2vFTdJFXZetG6S322ETt6mi7Po1F9pT3RW8",
  "key23": "3efy2RFVaW7aMzM2SL1WBEqGt1BSKBUZEw5bDYMfdg1WFCze5Ae2Co2HiqLbd1De78e6hwJhdgzYNjw3BbtLs5WC",
  "key24": "4BSpf3xPf2ZD54pTxTXaUHYTouobjWYEZAxF6Qtesx1qr7F1iFkpm95MdpJPmE4dKZoNxk4gW17Juk2n5Q92c9KX",
  "key25": "zyvA1CBAVQGK6h3TsXyxfJmnrprFghH7dLbsxyQY1iC85aUgntR2cpqYEpith92n6KziHukDXV5gj3RQjrQRcrR"
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
