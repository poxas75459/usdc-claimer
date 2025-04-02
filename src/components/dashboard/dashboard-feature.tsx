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
    "3NiwqbkbNAfvbEJcnQNxW9yascaKAMnz3LwaKLYyAUwV3hsmgrkZCm1DXvhZ51NXEFpE1NAYQnNJvNdMF4bJgQcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cri1QWrDHWh5X6mje6nQbhLKA3DDMXFUGqbcamyv4dDYtMSEuBtg76fkk1aLWhCENDcG1Lgrmr1eKobYGRyxaRt",
  "key1": "23q3Er6Fo5bfy6rjc7q5iCTuXAKbjvCiFDKmqBD139KSdJ9uUpcGvdPT11Jaj6gjgQXb4k4Fer9vywHtyTqmaK9w",
  "key2": "6pXDu7dJZaU8U2h296WMG9FSxBbPrxkxvmg58kM2ugKA13U3hEW5WyzgRNeefi1Jjd5jVwYMfzXsbBPrvcJzsST",
  "key3": "USgoVABx8mDWp68xrZTrWBzoQuQZVpp61TNYEkbZ7bzohPe7BPZRoZFSgKZcGb2LYuq5mCbSVRZB7aS1JkgwFvq",
  "key4": "5P9GicRpBaQTnSwwCtRdpFTey1TTsuL7mw2rv2x3B8H4mn92ddGfXKCgunHv5nTJnt4JCQVpMhtWpFjfRNbMz5TK",
  "key5": "5UJms6vNorajL5ayGq6gBWj43oFMWBarxUxc3kEq6JbFv37bX8EVcHuvD32mdg7ytH7oi1PnCMwL5wXDRJSVYxab",
  "key6": "2ki5he8YeanLCh3VFedRaiWoSPRrhAywKzN3YTko1KdTBt3ZZjB2pPi3yaYjMRo7ZvmBNoinCkht6Qv5ENaD1hVT",
  "key7": "3jbTxQiRmUVa2r2fLjKBqBkx3yuXFVS96Agiu4xacPN4aPcoYRmLMYgXvyLyU5Jq14SbcYvCDUESD1s3e8UjCgnU",
  "key8": "EVdgDmwPvoWeuNgGUiGSjJhcjDqQmS1NauStFJKw84HZxJs5UcaHjLMi3j15ch7fxGNxoiLUzLe4vxczVsTLs6U",
  "key9": "5uGzDEGut3PTknFJ3YK5sJMTsaB3J7q5Hghbg827kYocNmS2o1g61AvRsX5xZqnnhZ2bZCPL4VdYQ3yqbZsqRBs4",
  "key10": "4SDSVeY13i9R7LDqFoEB2fbLKaZHqLcktJFu91zRfe7eKzA8Z2iuTYdhCjP1BK34JVtmt4Y5wFjpBNRqPFpr2LvL",
  "key11": "5voZZUWt8iqhRuhxfZ2JXBFkBnNvHRYTP7kZf7nL4QBS1MjuHf9RjUtQsgtXoUCoA8NWEtNFxtChw1tpYMmkWcZa",
  "key12": "5o4KsLzLBRHe1ovei82W2htcdP41d3PtaVGR7g3XGCZU89kHLsTQxSMdHUBVdskVFSV5kaoL8xtENuLW8QMXBD94",
  "key13": "67JY6J1DXVUyiJZPE1Nhtt4axM2fVhk9b4jQeTsirzF6bVhFtqufmwWw3tEHAzd8HXiSMQb7xYsSJrXy2fnh6bw8",
  "key14": "465ezY1oY3Nxztjvo5jLpHJAEk6WymvEzhGUmj2SBFve1uc4sck3wAdDRo13n74hFjgagfS2vKaBmeXEpvccYkY6",
  "key15": "54NscGDJGTXfFu4EpCSP1wveuf7SfxEP2L7AXW6xqohebkH3s5CYeaXYHdK4kWjE6nvpLei9bCXfSLhRm58Hc88P",
  "key16": "3Eu94NDrgdeqqzxFYjHm4G6PqW8ws5DtaEwoFwo4fQgyW2sznyu6V9Zi9XtkeXaBpTSpN2sEZQjAv1f5wj4DnpTd",
  "key17": "2EQPn6UFYZ6j8CToq5GpnsKMP1GE6KvzCCr66EWAw9iEe1g8A4zQzz3YUsjVQciXwE5rE73PJX6dqKF5KtisFXVQ",
  "key18": "3YgLQwkjC15tMRGJ4ViKENeDP7w3c5s1LoRPLWN7cniVJZmXGJEkVcXCHmwfrdxMEJdmTK4zx5kpH9UHJGeYEHzm",
  "key19": "PNrLDd2tufe6nFiWwuS7AymqbPiFcDDA1c92XNtPJwb6mNTtPzxV2cZRDTz26DupmZBr2HJB8tZ7TZgJ9ZAGn17",
  "key20": "3QhEioN4ZBuBwnnuZry9gWJUqnpnvcGtv7mjqaHt9Pb6zafR2CjxGCFAYPtQ4UMsaXYwi8xU3zpNnHCdhcuoXmfj",
  "key21": "R9eR4wnqkHfsVDhrMXGao2LxEYPqKopvLhX9cp7wwszFxoTrm3v7fsJ4HvdL9SnU6fHKxBotrR8gr1vn4U2RyDc",
  "key22": "2qUrL87rC6v4f3DJ3w6K3QvJKkQEwdiLq1embDtFMceFwEag4RAPMXPn9Xd6LQCE1dAyGhWCb33JdbjBJf3d6P1p",
  "key23": "42BM9e5it4ggYEENAgo8GgVmiWX4ody2vK3y8jc27Y1Z5Npwn26XW3AYN6k6oWFs4s2weQ991mB9A2GoLUfUTi9j",
  "key24": "2Q1Ny4CrRmNzGbp2KXBuBw9KZurWaLCynzV7UbLALryWFFp8HHfDjsi1gQfrf5juHuyVVLZACqBALirmYvn3iJXH",
  "key25": "5kPfrzmLsQFJchzVLGrqZhqkM9D249qWNng59WqL2ztkxLavHHarKvrWKRAx1PaZ18wDu1FYDt8sxP1jGQ21iY7V"
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
