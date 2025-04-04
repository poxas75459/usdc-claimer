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
    "2NxdJRAbVjFnCrQ5kfZJEo1E3Hi8KJ7E6o8NipBB3RTnXeduRfoE8QrWawhpsFhhZNeEs8xjwhHmDqGPrgQcWJRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fBYHtrqj4quSijV1zL7r9VZX6R66ySb8hXkrisybawegZu6bABnV5CmxQXQLHUS3DJm4eU9tChhZS4bds18TCP",
  "key1": "4c3GfcAozZCfHYQHjBN524aWoNztFTACUpEcnWiVM9yJaQWmGw9pGKKrFXwKjUFHp6cLtPvCBg8Srz4kRBoDw3kZ",
  "key2": "QCfdq5Rm4qxBhSQULXZxqLoEzSdDLZZAQtzV9QnUFQoAv4CsqD6YtkWx7ETfWzmfE1vnDPqKYaCFCFiVPDRiTiG",
  "key3": "4RcCRKXwfpNS12BB9QqFGvEdQ5VRn6Jd3dDxXSB36gzL99bGt3Kw26PdiSQF9setfq6o5QrNsdJZqBc9To8DYkbN",
  "key4": "VuSiE3he1Teb8N6Ecx4N2bzw9rcpy1Eb6CGdq94XpBJ886Z6TYfMyLuP4VpANSUQiPHBTGPXwC1cXDGCq238Wio",
  "key5": "5d2Byq327G695gyoFHXS84M4iGQsdyQPGoZVEZ8uK8zeQvZ1SXRRBH31yLxB95upKJ4awrdZdAo3kQWwrELbTPSf",
  "key6": "2m5k1YvJ5cnUTs5MXMmwrsvF62bTU1z74YzMLDxRuuYrzQMXUSDhMYf1H9Ei5xo1dJvjzQY8qiLUbfNyTVymYsWb",
  "key7": "5sLoENaZTdWbQE1k41o2abNCnmH7HMQ3hAerjR8b373vitYnKMoQB2h5hiscFPLuFGAfvVVQiwS8o6fNCKnCW1dq",
  "key8": "65a85n3iZB6ps6yALJJ3Bd5S3LiJoD9dJwCqKo5b5Ddy5e7gEkM6RTvU3PDNtBm8Q6Ga41KGF4gZTVq7x9Kbap9s",
  "key9": "64339Zd8rdg9VgnMgazhyUywKyxomP6bu7jxiyNWm467VxznNkJSHyKSFFTpP9NFsy1Hd3j7qxzh69s8oRo9n5Yd",
  "key10": "3VkS4E7msfeQTrQFAGH47cEVvJkBjYv3uC9nxy88EwK7DiHkaADDK6ojwhjcVvkCKu2SayvXYsaBC2wmaPUskgsf",
  "key11": "4nTmSdKga91enMj7XUjBNobDCw4Zzytb14ysErySjtusNadAp8FRxgLQC1DZKejLZBi555pK9YuakoALxh41dYwg",
  "key12": "3bGcgirgpNsEKfCarSCkPmkNYGbNLPz6wucMWPKfobHrGp8sWeHz84qK4JABmtMJKhPf9kDAKFQuwiuwq1wgAXaV",
  "key13": "WEB9np8M24nYR5V3cJj49yrbP8AqAMWN3Y5BTz4u843HBJP9DJsL5zQBDZw9VbpC92sUFa7zM7aQD7wmpzFSP7M",
  "key14": "3EK3UhugqFtn11FGYTicwU15MUGnQY9Jd4FLBQ94eqY9btTuRenCZHqUivhvZfibbTh7SiP9rVofsmqK7DM4UqXv",
  "key15": "4NniLgxTV95kLsU17p7qS4hYtMR2PZTXbQ2tJTRjFMUX3KoYULhGTCrbXBkkvmkAjQdJNDnRxYG3e6GjCCHkE9PC",
  "key16": "5PH7ShTmeUAhurZouvP3wkeZFXtfcvHu8FrpcrmbUp7v5K4D9pk9DZWvu8Z6spNa1KhLAFKtNppbrkd9wgwAH5k1",
  "key17": "5EkwEeqkwYuHTMhKBSpgMQ6T9d71uDiTNeF3t5kxQXRdf6Qmf3HwqsXjGakjK1XUvGXpnRmrdbfj5mmrdoQGDidC",
  "key18": "5c8dky1eM7UYaNqd2gzX39BB6bgdjss7qG9rUeXhJTK4Yxd4dcWBy1jXKnmbujefWNz1T3JmvyAGmEUiUvvvE5A7",
  "key19": "2AFwCBdJgvjYwz5xMKqSCvsgnhQfc5dU54m5EpizscdAzUbNhTphYwiaudWp1DasFh8WXBhgeEkSZXdkJNV9dwcx",
  "key20": "3maZAFXz2ZZvVmoJpUfzfSVtLb5Yoy8uBqPpfqY4xouEyGx2oCVWW27kk4dsBXrK5itkEP8waJobMu2FcLajoPJj",
  "key21": "5AC41ynfgGnaBNUaG7uupaR6dMaL4dreZqmJfZwpqeQGpUi13TRnpfVYm4TX9KukgsitXA5GzEY92uk75XsnsKrH",
  "key22": "2ddhMB2BcVfffqaHLw1cgPiAcRBNGKkeiVHENDhC72MWmigG6Wz35qHWtdYKsbBYy5kVs8E7xuW3FKhTk54EWMh6",
  "key23": "2fV4Sx8ZWwLdrEdA9vWhPf3JA7tD5p5W1jFLFwQpHNqGodHUUyF9XHSSNUbv5bkMszuNBVp5r6cVfSpd3poQvwhy",
  "key24": "336meSnyJzrcjpBYncA6ZTAdJVLkH4JGxtsw127fqB4s63sCrJYsrukQ5Ahfd5smyWt1XA2ojYP6FRLT16vWwuuP"
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
