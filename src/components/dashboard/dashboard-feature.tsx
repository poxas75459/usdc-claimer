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
    "66SJ6rwHHMTwa4FA9TrU32vpwCwuEW5wT4WbuAH5t81Guw3j7TNsUYDnJYuCk9tr9SifqfTNuihL6Ehz2YdwrGaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dXUSGo8LySMeZuMPqXRYTe7U91ErSy8YjFqa9jypv2qXaZ6L4jVftuLAVWTT8SgheFTSbPtPsD4oVZrWqFKryUK",
  "key1": "t4W6edGPm42vaACj2aWmMM9QtiXqGRp7vK2rsChNJnwR2g1FXHyfVBMwaUMYpBUYZaV51KTvaAw7WBDQUwiaVHE",
  "key2": "3gw77zuxovhAT2ZLY5P6xhEkR9QHs7SQAyzMKHwLKwXkMNFJQj2tyPrqcUTx3s5egKtMAzLiNRQjt6QjuVtN9AmP",
  "key3": "3pJyiB1CgnduAiG4RnSLUYiSkmbAUGTxEaCTCfiXKV6UgfZxA5qdoYPZ8Eq3mEnhYWgDHRfpzjFTud9xzmwzGWfq",
  "key4": "5w4yrdXNLQMZ16CCnmBh2YgcSDTKNxc9bDZNP7BJ7QSDVk8kCpn8YNxaLmKUvBQqa6HQBNLHRQTVQDT84Ldd8SJY",
  "key5": "59VDvug3nXNuSfNpwjXLAqrWtftqsYyZgoqrw7xE6VjaZokRVLbmWWvQ75Y13UipmjisTV9vUT6ix3HQncXUYQjf",
  "key6": "2srgD9XcLDNrVSGPQJTkuW73w4zMshVMXVhM17eAohkTKYpiqeNuEan5ubkKSTN7sJsimTU5aBGJ1QHit5biZsTu",
  "key7": "5tUGUTexfxMb5YgpeMaxGkpc9GUDgmToZp1ytgaJ7BtGQMECTo15YLcVPApinvzEpWL8iZzxrhdrT1ENu1cKiHhS",
  "key8": "2kJTnVBDduN1ZKKFs4v7JWhrj5DwJNGU6bquKMwxkXwFsCq4P97oASAHgYQ3cYyxTFi5uWgbEPsXskXLHFkoD8nE",
  "key9": "4W3jHaNecihSNUg3cVq9mW9TQaMAuQH1WRmZR1ebi1MTNzGX5YuV26544khUXgQ5gnRrxovJc7mUrJWzi8KvUDV9",
  "key10": "mfiecT4ZG86NhkSRmXYrWuRhSozPoQMXZ1x2cBDGUhNWx7VbwL4oqXVrNHGG1k64XQuNkNXwzcDLq3XohX3zCVK",
  "key11": "udxEhbnn4WMvUKeGHsi7eJMyR7KtAm1QQXp4jAiB9KLLh1wVLX7Z1Dozuf4JvdTCuFVpBoNNzWGNbxpJxGRRBFg",
  "key12": "5CKdkTo8F2fk38RjTxxzrr2SJMHgTjmHoLY2sews2bmzMsS9W7hu2BxkRDKDQLFnXR4kdVprahqCW3MFMAJdz3WJ",
  "key13": "4gMm2uJVqHWxnurWaG9gsEyPkmpxEAn6RTrx8oGBEshefALHyhYGvjwPSWACc3ZqdZ5QJUsWyWQDeXAKAtMkD3k9",
  "key14": "42brDAjzVP9FrKN8WNsF9r2mZGjboxef19mny4mohZ8nSUMjosLSfixno1ht9N63gNcTjVHBJ1NjjroyHsCvzvfJ",
  "key15": "59sDP4gcwMR5eH3Rz2oveBKMvVXDkhv4n9k7eveFu5PtieW7M9445g3MGghPhNMqVVeSFyL3BuJhfei1goypYPvv",
  "key16": "3KV93iHWbtXde4qsubrr1LesGUBUQQvF98bcvBeHngo2A3cCnms79t8CEw9sGcpp42epie8E8ig62WhjKaV7SGEW",
  "key17": "4z3GjnstgZ6Zk5vnqkxqyWft31JdoSRuZVjSFhLudiU7598iRyipQduYqeokGqxeobACNQGgYWjr9XFBKFCHWQiQ",
  "key18": "3kfBG4jYcaCfp3abcv2MJNV8vjg1HuGc5WXF9dinMUYyf2DK3w1dbtkyKC6oTekA7BxrdKSivg1XVytLfxgHFzKv",
  "key19": "mb8PP4WPjsgbGezChcC94rwVpoLNXidEYVMbVxidsMRD7ikhQamhE6rY6hG6ynFRbzeV1e3YAcG7amTNCdTvc22",
  "key20": "5UDJn5ZbadXLRcoX2y1TXc91eDZ9YSMPioaxxH9AY9pznEuqAUtu9Lg11TGKGqbYyKY5HLVRA5eTdAiYAeoixfSq",
  "key21": "3s4FwU5cxzXX8V9LeG9kivYQtAJh52zLCce493CpPC6N1Ppbfp57whnaY1Rh6JXiT5DW13E3tV19ahX1FnfCov9E",
  "key22": "2qPXmdNJfH3oQ4GVTxh56PYfMKBjynhztvPtDHhW2hz58nPfy6mvnXMg65ukGY9CnA1L8v8k9CS2cuEfFMrHSF5a",
  "key23": "34P6FkjyZMx8Gg8Fh5MB2tQe75d6FdsdyytPtZNJY75GyDtYK9CWXKnrmcTvpxyPNHaUuigXUVSwWXwhfaDyhr6B",
  "key24": "2je1tzmkZx2fyxP5YnCgqvSwe5WSPzZF8UtFekLHdNpqSu4eThX3XD7xvxxwLZhyMUh6W6WGHQWr4JHQxbSs5LEA",
  "key25": "3CpEpb63qLPbSTC9JvhsPWAQadC8iUUWQVRv9poNJqKnxA19y5bNAfqVUjXShzWezDuW1tVcx28xVwKtPobnYyE7"
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
