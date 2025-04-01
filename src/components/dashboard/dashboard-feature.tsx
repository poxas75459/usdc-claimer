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
    "4MY8sZ2tGQdevWp9EFJRMT8ridEpwCzLHiHHdKKdYtHV5fZ15zYRcGgqUKaBFY2Jv8C2M8w79UeVJtfx5jr8AykW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DW2EYyRs8xuekYU23zm8AejDTrT6uNW1xwYUVexQnNYaa4efHqmR6xNAux61hhcgP7RaxExC8Qqbt2nWhMUBVZY",
  "key1": "3yuaguA9emW2GUEXhdzMxVLkB8Z5y244C97DVCRo9LCB35eFKvPKAEgSAVL4PiEz4yj2whWFD7HrJJrEU7266L4m",
  "key2": "5Wdm3LYsvi4BMaD7b2JJuMjmL1svpG4YNN8NHDDZHzi9DL1V1HPgZZHuCSiUgGUzgK3zJLg3WJNzVuMkGfUQXtZ1",
  "key3": "3yW1UuyZacWJqTNNdfoS5qyzKYA2USeo3pxoYu8d5Bq1kEUhTJzvLQRYaS8j1PcbpDrmCsjRPKQWfw6MW7CZbEkk",
  "key4": "Kh6XDs9XBRwTZnmwA6rD68Hgj3TnZ7bbzRk1oUoQ7y6xxsB6iVDQTwJUfuZN8fP82NqhPKFJKc1mqLwZVbFa6DD",
  "key5": "4ckzKrM84qyZzeqqfxhH6mwg41bE9dgBkqfk444cpXvFpNpKWvtrPB7ErXVNex4vfUPMxvdNM5EnLXvJoK2ke2ye",
  "key6": "2hWjdDErWJeQWKFvi5BvDqvdpUAXDkpeBEnRuxLpSM99SjXAyTB5AJEoFGhbr2dqc2WLbR7BrWfsrBgdykQNp3Am",
  "key7": "5rKic3SbMNJ9HxunQfCNsbvDWXyGgg8Xz1Mh4adXJvZ33GYnfAHD9f8y2JySEAxfATow7vi37R9apQYxFBS3ZxM2",
  "key8": "4ySL2mWzCoCLQtWZHW3WvuUNrDuqX3CUB14y1XKgXdqsh4CF1x9SpLJa3W45JZjFogP6GG7TQTexTyo8fdnV8bjT",
  "key9": "3HkMyaDSpLNZt1jmUDvpV4Wqngzgo1xMQPfJkbCz9cuVXKrSSHa3CneDAes6i8U5cqfxhvB7dxnSx1YTVJYgPHEe",
  "key10": "mLgvB2isW95B1W5etSfc5TsmCJfz3buPUc1tj1GWZFCvaG8xEVo1xEN4zr89jLDvrU4ZFFDeYufjYLYE3ZrSaYW",
  "key11": "46sC8AvbYvKkrtMM3YqY37B5ruvvQHW82UakN78YcJ7PKQxHhrSd2B15c1wk7vY6riubm4KFmNKihUk6sRSYf5iw",
  "key12": "2siKNV23vRtekCVfwybhAGNf2WAmMtJt8eAvGkeB3tqMoehmbjhUZLcWcn6uGswiCrS7zVVAJ33LrE5Yk9TSDs4F",
  "key13": "5wJEiqoBfYxFiwzXUad7mTtqTiCceSn3zYjNq9roq9JkV8kRw2cf2hG5kkgXkLSEJYzZ6XB7yMcNv3i8Moc94VKw",
  "key14": "2o1TK3wsQYL5FkVQiVV8NY3RnB3Wk6nQdxknB2xQzLH8VHUYZw3d6Y23Nj1iq7K6eTUfMpHxMFKRaAEZZwGZzVTJ",
  "key15": "xSMzkX7GDf2u2SWNEokHKQP9G5LkaYRCJUGw61igVcemwVUjfeEn1zaTsGyY6afSHEhGSonbDsC9r61sSG59VCT",
  "key16": "5rji7dz2FYJ6rMXAB3fMTo6dus4jJtqMPNyZ2dVUnjm9Y2psTQctf7aco6Sb386uzokVgNpyHUMvFhE3S3PEHmEY",
  "key17": "2cXkV7qA4geKKYVYQBJuoYd7tKv52mL6hhcnscPuLtuBuFD6WLECQqPWdAj3DKW61GjrM1vFjiJdrJeQ5UPoh2U7",
  "key18": "5PgifdzvkfzUEz76aGhMxk77EPMHN5RuEzSYeV7v1hpcvLNuoLoTsrJizjvUzQDc12EmpP1K1bajKAdCn6Wfb9w3",
  "key19": "3bhK6k1LThZ1DsAqsfsEH6sKPyrmvMTheaQVWxrSRBrfXbBni1dU9MJVAve236TJ5rC5vjma8xbhjfdCmE1gLkHh",
  "key20": "2dmDucsTH33PyD9GPWBywmAVX1ZJyPhZFj6y7etRzPMnySNyWDmferpKUzLmALGxWK6cb51ZJCZnghMj7YUMmLDE",
  "key21": "53Q1UL7EmJ1g5g9UmryMK7UzVXEwZM6fgUKXVhvZTGaSfhw5byt9Eb1eTzD1JbHLnND7ctMQXwXaX7k1Hv3j1eq9",
  "key22": "3MQsed7GJtkLzeC4ySj78ARwn8YyxSFGAwpMojWf4HKXC6HWfCMWFvFeS3FPVk2CWbEzrzcknT1BhpeHs5HD1m7C",
  "key23": "225H4h9eqLcCPTAko5RUwcxnJfeQTQYAwQN9HenPBHTRVS5q19tzprFoAmxeP6NbQdfSp53GvgjCnC6qRLRH55zg",
  "key24": "4pUXScwisvMvWmd6rxMa8mG1VS6JsnQ1gGrV9A44ZXGrc4LeVNVKpcgnZYtZZknSb6wfXtXG86fj9KePrGVCSYmT",
  "key25": "2rS6UNZbVQMDxjUSWfpANCU5wN57ZJSfHWMA2R7smUcoiy6iqoN2f5K23zszEP9QthFVALpipm9fck7NLJr779hq"
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
