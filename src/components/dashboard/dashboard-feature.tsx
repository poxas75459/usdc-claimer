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
    "5XeDMuGEm97Q9v4S3nw3sCrveN4mJ3sU98PgznoBRc2cA1mkpXpfHdNGFdPJ8xRHhEnfdeFGw2r9GWfSHksyGv3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XFyUMgzYEVuVXA9pKkJBM93b5Tj2jv4Q5BGNH4KBwEaAb2YTtYQHfzwnDwTkBBzbBKu3LgFFL4C6XuAL872TjcF",
  "key1": "27D4tQfVRqeXV81cDbqTcNbsy6QWqZA8cWU9onJQ2Lx6nwWEoc8NHmHdtWFHdxbHaHsBoXzRzAPxNcn86gg5ua7b",
  "key2": "2fQGvR2zPtUnQRrz4jK6EBy8bu5Bcj3L7zmtDwErxWSRhqj991G8MUeqdZ6tZaM1hMaKa2FcfUosVURQeRtzTA9F",
  "key3": "5HwCc5Tj5UcMv9Us3oxSpHeFmbHpQy42PYm8L7QfEQAEmKPerfSLXDYdm5XxTnRnM2mR5ziwevtLQ5FdiShb8sPr",
  "key4": "3DN3XUJqTZQaGUtYnbUiZwBCnCwcTbPGkFrZSxLJCmFzAFP4kFM8ye6FCksv4ZYS2QLUJT3wx7Z5Layz5n1mfyqF",
  "key5": "T21WCidZtFfULG79z3LxAf9CAUqCA2n4iXq69FKtG1gLPtxdtCXU4cXniDeWUmMJQZ6tVNreZyxtHxxVAPR1Lb3",
  "key6": "27ah9hav7vkKw2k2u7N1wA3RYTXZJz4knfu55kQvRodYBJw8KAHhRJnDpyHpGn9RWkCciDTGatY2rbWRhk5chNtq",
  "key7": "49Z7X8PCruWPcnr5VLDZmVMau1mXzFcGNDQnZLtg4SSiU35QtPwLLnNqwNz6TkR2DJTK1vRNizz6toMJoss9R9KH",
  "key8": "3Hmae1Yq13RUgaNE86KoH6stAhsu4ZNqbQBuDWNffa5BVeMXRKy5qgw2zXiadbWXecX4Fis1X7iMrwMhgyvd67qq",
  "key9": "CbGAyFYPFmo7UzaUPf8zYAb2mTg94uhrWbhEYYgJrakFUis5beTBUefk3jTAZ8N6JzQvTKvdsQfeymZgCfJXPgY",
  "key10": "3B87z5cvAUTs3ZQzhGoL9cuRa1uYpZRwdnYDdMz2CgE3aZFCV4gwzAVvBSUyXdZbw73W7G8VHcoXvmHsoaenE6Eo",
  "key11": "3tZEeUooQxYEYFjwFyFaGA4wKRqn9ipRMoboJgzVDGcY4XcwVRn7JDsVBbw77mX2bXJ2xgjHDMSt2X3pWdg4FnuN",
  "key12": "5t6xSU8xjaL81S1M1WPta8ALa9ahrXXZ6GwY9Kd9zwMJuCPZAth9BTDLCaEs2Stn4Zec1ZQKQBDKpY8b5d6kKgYx",
  "key13": "5ZL38Rppkop2gJ5e9JK79KaHoNVzpiibrvqXzMwa3fjQ6hLa5vbGHF47kVf3AGMwZm4sTdkqJrEomvHWoQbagrWE",
  "key14": "5yLfneFgRgZWH2ysKayQ4tw2KFLyyAAadcswtSJq5AzTMzkkNS2UiCwC9G6nrUyfTtABy9eaHrmoZ97hDCYmd7zZ",
  "key15": "2xLMqFtT7FhBfd2EhoJkryksV87MSqQZvQPPwXSizfPYbNnsugUXzvRiBQXXoj2y6n8UGSBYEEXKbKqYLQnTJcoC",
  "key16": "4fpsHfjh3uK4x3nHHjiKHeKMzGMdGaKZgnmqbdNfGSKuCknE6rDjqP917afvV9Sd9Kb5ZHsZcgBk587QuXMWpHpn",
  "key17": "4c7iLBfrZuGb5SbyBD5ZQdcP2U1FwLrukkxZny59RBmWYp94YJQmTvbfB8bmvjQxKu92yHUApjoL1zmfvGRBRjmv",
  "key18": "Ti91Ud9rioYuf5Z6oboTSrrTy6k3S3PAniReUCLUtZbtfL156gNUxjxj7hVgdAegDNgmw5T9sjFdaFeDkTrHzaN",
  "key19": "eF4TE4NQDzMmfXh8rQHX3Ya52JvyyRBpkWqzNuKQgWm6PvDfhUGHoRVztF1C4UQSHPoznW4aqfCJjK5rVmzAxR2",
  "key20": "2nRogg7xcXGD841WDqwT6wuxeLJSTpYgMvcRpmRL9YYK1ZyPQKxfNG4M74Kut6gDfyTRVwaTPMzDVNXF5dqRsYgt",
  "key21": "DUn2ugdwGzZWGAcsg7hG4LCCR94gbzKaAWCHHscnpRyTjB9LVrL4C568cpxfR3tsCcXVUYU3aRMwaipbpJgWojF",
  "key22": "5DzrREaGaR7Jh3ehpY1XesMP1e8JZmC9bsitNG3dYR8uvMuAfTCvfGWdYv1QiYsPN3wn6TowhoWduxGdcDiCp9FB",
  "key23": "3xzPSxjstSH8Hp1uQx4gcc2uNpZ6hrLHPSuTbS1qgqfdgHm6MDdSHBGTDr1uErXxj7DtnUBQKXCe3BA485Bu79wC",
  "key24": "2y7LwoTS1LrrCdJmK2kfHqHqNRaEEa5d1s1a4DdUhHhzXicKUDszdWSTgSFmWUtJv9Ydtj4RkxjrmRCRdSSuiwXB"
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
