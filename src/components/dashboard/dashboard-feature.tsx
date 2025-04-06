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
    "2LbawVGEC7sjJoSyJ3rFDg895J2MqEGASwsNP6ZfLyp1LSw1HmU8wiTFKasCrYuQyGvXkSYKz53FcjWEjLj8VjQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uavWUK7iqqZFJ597VHfoAH4WFd2Y3iyxV2ApgB4nvJ1zzNTquc5bTuWQNzJF1taviDjpJy1r3K1i4T4ow69HiU",
  "key1": "4rN4AkHCNgFqCFhKKNeBtyE7Jux1AvVN3D6fhA5BhTLj5f9nJzoxL7udWaWkkjhDejoQU7pZuw4cYRv2xnKesZwM",
  "key2": "5e94DXJ6cLK5BD1wedEx1p1xhYf6NTx4AfoqF23AAfWCzuuN8GBKaxjoDuPy5wgFzzEkc3Y6ha29jep3Ho1GVmRU",
  "key3": "66x18ZG5xmSnyngQgBVVf95YwUns8ftxG3vbdVEdzP62GvJCD3tsNfPjan4tCWfLvXma2oVWqnxqWWsGVMS9MTen",
  "key4": "4MsWwq2DYfYeESUusVnZTMKN7AWMqthbFZzMaEUjP7qEvppEVCijBYcwwQeaxWG5LLfScU7HfKR4WUFdiW62QwnT",
  "key5": "2fXBgqYp78HQoMt7d6MQsDshD9452ec3aghZCxEHcNEe3vU7MB5Gu79t7s5pTmggbxCQpuYdcN3LSNTf3izkKdpq",
  "key6": "n9EBXxcSovi894GYqS8ZF1UamZoX6F3iqMFWepM1nQM9iPuUMSshWx31JvVzPqmQVD2W92zTTuK6zXLtdDqtxnC",
  "key7": "5ABn4xZjXJ8gP3rRZEFVLXAp7ueXEf5iKQJGf4yFvoTmYbD5ES19GrumvChtXRzuFdGrX56L6TFmmENTJoAmaqKW",
  "key8": "uet6gw8aRuCKPZ8oR7WU1bcPz7Uzw43cc8jgmYo88Z6vK7upTjjAK5rYdXgmEvxoKgVnGg8gWs7iEGvemxoHnr3",
  "key9": "2yxA6biLPBjyspNC7588udDunKNvUBbruAHn7kfFDNdWzjDLmjzkkPf7wzfWGZatcy5jdgcbtcMmTHaAfrHpQLMc",
  "key10": "3GGeRFwDUDHpZKFHGgABgbWyN5a2teSDXzpQDqZUquntHMzTyqYqpzHoyV69U2yZTUgEbWo3EkCVrhAFy8VVADui",
  "key11": "3C2Lafzc6CWam44AaWqc7sQbdMEQV9iUgP3wpccReCjk97rZGbQEHVgDfDRbxWoPRax1TgNn5RwjsgdHs72AHLQ3",
  "key12": "4VYCbwN4btCpwbY9YTF17m6x6dkrR8USJmtaBbwNConKiSAQHyZbi6KL4vc3kAkwRbrKvVPcBFJ2SLkXpgApvnM2",
  "key13": "59jYBHgUadjy1mHiQncTZd9wW8kaiEs5r2yLxBvRyuUaEPxqk8qmvwDWEvLps5W1DeDGqdnuX1RvHsU7o7cVEbdF",
  "key14": "23D7xpqaXThYyXmQi4LgETMEL8rhUPkhyukkMF8n6yp3oBUhC1o6qto4gvqY1iXyb2s2jhUYMiNXxDwMU98F6fiq",
  "key15": "ZJyVwnH55Etwgcpo4TJyK4kcp9KTnkrz82xWzqvso2Vnh6RHjsB88TVjJqm1DxcH3TrbTdN3zy3FJ8pyVmEhrtz",
  "key16": "34ssg3A45iyMACFZTrmVePjuV3A7WnksKzFG7WTqbC7wcpeEMK3NHCCBLKY5qyCYFMfKDHiUkcCCtwixL6LU4ckk",
  "key17": "2ipaRQjyYmv74Q7pmEHey3RX7Wpt1qfGhVy1kbFQNPDwrQjetg5ganoFHdSwKDxewxgaCsFpQnpsHyeYuZS5hJz3",
  "key18": "2L3aADU9vgj6oHDrDfACW1UpJDQ66sfZNBYEZ7drzvykDr2ofk98r4yD7QBh7n7sVAPdqsqvJNhL1t1noAvtSnQK",
  "key19": "5H7zTThvVGwTKPd2Ts8LmBA1LPPg2eFiJB9dWy1cRu4gqtDLKtfsxDnLWX3oNEZL95Ee59rkXJq3Ers5SvxiNarD",
  "key20": "5JFiJGzdjUTSFW96a8H5tmJEAbpRaQS7bA5qbtt87s598iAQ1xMPdAQzS7uWaBjdbT4d7Em5D4969RPD8AeLXxoi",
  "key21": "3zxHd4qWntEzeS2PekJy2sgycak7foD3CKb1V8skCN5hLLBLu5vdnZaVghQTbz6x1vFiHtoVMsafXvZaTJrvpgE9",
  "key22": "5WEKDmWqMdTmMHdrdmQimm35H6syUMvy8wu65gpSVMoHdUm4pjoNK87zY2CV4RC6yy259cVC18vEsByPLW67sdRz",
  "key23": "2FXKpTpEUW6WXWKgeWvxvfStSbJ6q1ME7gryUjF6Thgbgxx9QhBuxiLJ5hRshne7FpJzjuAP7936u9gbgEgoE8ku",
  "key24": "35y3diLo68TrkWKsSq9NZgZAi8Wgoc5NdphNznB7tVWzJgqK7jFDvb4AHmogaLjbrJSUoo8RodeHeLvj1KLQ5rWw",
  "key25": "49FgETtJeJJ6hVwggyuyVZjiBmjX97RFnTkBvudoUfyJniPKKd8TUWGXfwr2PF4cw5oa8a5C5YpnxLjHCdSL1L1"
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
