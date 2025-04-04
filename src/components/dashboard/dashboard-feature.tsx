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
    "78XZbU3nLHFRAek4vurw1d4VM2bJWy1Z3RLdvMxh9mkQ9FYhMUCTZ9UZa2zW52ubkePSwGBx9KspCcXxRCEPTWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2enpmq3RnJL7XmJVpFwc8ujufh77iN4N4qTYSB1tgSdyaAwE8cQNKCA2MmqPYW5AF6As4opUNWPdBuyqDhUWnWGC",
  "key1": "57p8wYLh34VUtE64ZF8SHNiZTEYKNqrXfKpEwLeddM4FGVa2GTVKvHey58btoueBb2shPc7dMNG89xTjCDpLnrDM",
  "key2": "5iwPMDDMsVn6n5tePWwXdA4z4f3AVpjG5kywHoLEjpEPMtjM9BVr3w5uY3isAKq7P8LPH4yar8EsUnjxRf7D4MTL",
  "key3": "kAzASP8e8DUifAyZAmhT9LMirzMygikmrcsKmUzF5BWBy17hpvxg6brWjXaf9MhHbAbKPmxaxbsAndbuY66YTzC",
  "key4": "22tLb3iqbuWTZybosNVnJTXgcXfNfPzngTNs3yDVoiH4RbSUrjLgbYZxELpv7gmAtBWs6n2hQ1HMdgtR8ffC3Wn2",
  "key5": "3yE2wAfbXwYwPkFF3LfiiYmSpKXCPJ3anykJTbVuBCVsfzLuqcdPAMpZ28qw3bAstrTFAc9xdAcJVdXwSimV6Wza",
  "key6": "42D7RbYT8Bu1DPBTR4amdayUNfsVyrKqAA33ugzYhNr8bcY74R2kWL3NLwwbvXhcdesPneRraJ7wEVdicEMVPtrY",
  "key7": "3uV5WpjGG4eYhCiCiuzWegYUg5cN2p65ezKFF3KeNRT8fqNR9BLbqq3fYDxErQYu54rXdKp4NEB7j8fnd9ZDiLFn",
  "key8": "3hVEaGGzMqDYQHNWZkXUB2hZiJACcgNMu89Hv5uWtrMCKQjDBDXw1UnaVaiNrS2KaUXKagqmQuyEmKazvfY4WRyA",
  "key9": "5D64cH9S4YrLAH3F1z4aPvDXzjujvT1VpFkXvh6vj67nZ5MfUSgVUyL7sG22khQ5AfYk4ByuH4He1BfY2aNhqmYW",
  "key10": "4FniuWhfuEsChCNZPA5KiRQJ5Tod3dCiL7Q8wRgXuXwhvdtxU8Q1UmejXKL7vqMCssZJo9D4ffH2AicYfa7KrD1r",
  "key11": "3axxGD1ejhFNg8ZoktcZeqQnYYRK3fRiRPZurRN5nJDQ1AwVw19GxCqMURrsZh4NbbK6Mp4t2WExFw8KDWbFZAjC",
  "key12": "RyxyCa4oFjQWpFV342QmLCxWP1bffxeTobb6Nun7J4rs1TwBsRU4JVhK4h9JD6HKNJzofmNBtTdMcchmho4stuX",
  "key13": "2EcCtNyGXVLtETFm9pzvx612rH1cwaA4y3JhwXurT2ng5cU6hp1xNzWdkmJgDULsKm6XE2qjxXFUqgiad7WLp5uQ",
  "key14": "3CcodY7acV6xQ1xixV8LxLmw9HrPDjEk71CaDnVgUkfydgisRfN8vykge2sdB8KKk45eRE8qTQPFLjXYQkbMwSJT",
  "key15": "2xDWD1frnC77HBk6kZ3Ze2oe544JqX2awM9Kp6sPLL8MGQudqgLZ35GXcUGMWrxyAzeYvvrFunw1Bi4zwVU7rEaw",
  "key16": "39NpeiM1FqRNd8oVV5B8wFoZmQRReoPQcsY7rBxyeLb89mxyQ7ekCzQv65PvWUFbF46KSKEZ6puAH2w8AvUD41Fw",
  "key17": "7ghmx7MDwg7MqQmfNQBRaSdHoYuagnrHLBUaCHxBCLv6hwotLXV8wBXygSUQj38JiUTUju9cujpzjRWsbrXPhqG",
  "key18": "2wmZFeebbWzw6wcwLoczAoHX7259Vm1PedUC6L6rBxwsPQkoSMdwBHkRFmYAt7AeXUNmUUjcXyD1nmbFry8EvhqN",
  "key19": "xQMW5HaHcRJ9BPBaoSn8ZXUxyfeWKqBYFPpe9vcY3nJ7rrTGA7VrrWZrsAMCevHTGXmqSSjnbZJ5CRF7k17ASyy",
  "key20": "5VHHSRKYEsN6Tmn2qkjhmVghD2rWAmMrhsDdtxDfiCFjVua3o5qF7JD55bb8ryXZZhfE8vugXkmApZajjq4UEWuH",
  "key21": "36cqGjxZqKWjy5UM3wdXkYiGGxA3B3WjDPj43nNZiDZDbHnCMhM7NUdePRweZvkMigJ3sxhHAn3KTSzJCeJexUCN",
  "key22": "9TU1CoA2evSH9DnJdWo26aqb59GpJfLqKd1SnF2aJ9oafR7YxHR5DBBXkiYChx2pYXw6foP8wUcbj2oyt6zpWtv",
  "key23": "S65oYKTBrmkySHwa1bS4124i3HUi3RsrfnMSSHYWGiNYCFbpLp9wRrLL4mninG3pQyo7vd5Fesu1esA61B1FyMZ",
  "key24": "3jSj25M9ymoTWkLonm7zuNiPmJ7nmGcs9kSRvokWnV2ArBA1q9ULZrmV52K5wtAkozi7nNaVnyudUGptjX9EREhJ",
  "key25": "46hTVdwaNxF3Q879qu2WnNYQTpfkLfAtTsg1ZmGEgSou1SAJqDhVrjQYnYYH2WdNty6K1bN9VeitjoPgj7SowMVk",
  "key26": "4xVF1nAqLBEgUxdMj5TYFp9L4TmHL5agGTgB1yXfggEQjLf9azCHc7LafwD3AXzCV1nyM3zMW9MWGpPMRkhRWHgk",
  "key27": "58uZrdt6Unv9q8gmC29XCNwgrpqcmkSGDYPpvZ5rwPYCLuwgQ6nGe3EGFivPf5xZsnAAcMnJRDDaCDnKNKPByqVV",
  "key28": "5MKmNLXoS1B2GC3YXrFRc45w5FDX1WV4sZ55vy1gpBuk5oNTAPL6FMYu9zid9BjJgajwdkmd5vkWtmavLkE7HHrT"
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
