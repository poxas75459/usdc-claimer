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
    "35Tg9DgojV6XhMTVFYbhkqHmaPkr9MB514h9JmPrBWFR6bbwud5F5Kc4N3jBu3evmLjTUkEZCXbgnLPirdXbjmih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eezc518vD1KZ4YJ3kKv8mTVRvMFt22DD8s48jMMQCDbShH9oLWwkdo9fA7xWnSbJGqCtW3Fs6xyNJxJUYNCAX4K",
  "key1": "3fqQTsx8igS2GkJBWqayEJFYx785z8nkL18URUcD2nU6Gga8fNg3jW89SsdDfbvdsJ5573g6ibRxRMoRbeJ3rkj2",
  "key2": "2m6LrQwmB6nT8RLkwFvcU5rkPK5sw6JUn1Q1vMwpsKeQQYeS2vFrhnvJdszBcLL59mRyqdfCkuURZayu1dgXiaad",
  "key3": "5YasULg3KZw24yWMFxdRRs343bTm9oWyMGAFi2Z8M8BxzBvsSCaw6UiWkakAkM1mrkdr4mV6fohGVhASJdzdngbu",
  "key4": "2ATiaK1RDttGhNzwbKUwYb7QTHSyEUbXYPX9iiq1dAz56QYHTZ1JshHr2RY8ZpXk2NjjvrScx5oA3sbHSit9qfzc",
  "key5": "3Z8WtJeimHVhrvNfAbyRsbAUDpPdB75ZuRbR4ofBe5NvzBQ2xFhdxXKFSEoAmrQRBfrAvQQ9DDXzuRCGBBbP72p9",
  "key6": "36caw92SCFdGmszPbiCXSbvU1LTESatvaUNtvKhvBzcyXLVJzJ8g5ZzdDYaocnAPGqAPeHNkmXerDhZjiQu4RFYP",
  "key7": "5WZxVmonaWtdfANKZsn6XrHS9quTHK9wfgSp3b4yRbB32Nj31XqMdPMwTbPihXFzTsJ2s6nhi9iq9oYAhKfMFzEL",
  "key8": "4Z2cchpg5uwKkBwqQRNj1syY9tUJZvC7NicoxQL1yXsi64KYvSH8gZoK9Gi9hy2ZjFyvfUcXneHQqhoHzVfJm9SN",
  "key9": "voGJBTKXriZ3beJurApn5Py3gHNRSYtZZgYfTFVDnNWaZdyrsDTq576UZtTL5ZuJb4v5HEkywegy6zRyPe5TkT8",
  "key10": "4WUvvcTo6Hru9NzCKZhvg9mx3pmsi2RQgd3tjW4Mye1ry1usoAY9vGGiofy2bPLKH96vMskYpQfMgdGiWjHgRdHJ",
  "key11": "2snY9f9W7c1RYAuPXWr8Ue5KJ9wbJ9ZeCXbJE9AkU2QcmZ5tAscZ2nBRE2qepgKusXAvtUfdxo9kgDd81F9e1PyH",
  "key12": "3SfSjTLUmUudcqnBrUK6V6F6GL9gEz2Sp7wk4kHfFYsjvVk2ouonap88MbQx89kMXyXp1A3n7ntvF97228gZa3eg",
  "key13": "3inCghKo67TxHDFuN2ipE6VPZF5Rso43wN6kZfGLCHwUPYQEg8sZoFjHAPt8kv2ZJTzCUvKk8txLzTR4VbUXHZyB",
  "key14": "PufUVfzD74oQwoavkJ6VwbCStWsDnWTPkWLh7MzSSHUjJNFejYD1kQVEAEwN465MNZJqLkTTJaAoqWaF1ANtCBJ",
  "key15": "5ea3Xbm26SdcPxYLX4FGWTwiyzTWRnwB9WPcYqLnNCh3daEGwXgvhbvihAGaEbgX4QoNDsHb9DdECtAQi5ntzt6G",
  "key16": "551twn5YdH9yesa7bHonXcErajfjNXWWBixGdvusGNgtsZq5SjMNstspqNMF1zTt54uaQLJC43h7Vd7nJuUMnf34",
  "key17": "2dqWWb8bGVHRNGf5HNXSBJLh3mRiLEX1iQ5pEkFEWF54QbWVEJuTuFZhBPr9yNg3J1ryDq1nUz7TWmq4jJJVdeHc",
  "key18": "3xvSsF2nYqytRp5G9XJiBB8aPiRqJbrHggv4Lscj6WbFAf3FoaWNa4n3hg3VavK5oxjRCJdUAAcukmscS9RUwHze",
  "key19": "2QC7emSAptTGbqvxyiUTf1RqjzpbsNdD9KSc32zxru6vzaTAHsbz1ijcfuj8y9MKDrmxXKLahxj7xGB4p5Eggjjc",
  "key20": "4oy9MBM1YBFUwkb3c92Q7YNYugx56nTDp43YYb8h2bq1fWny91jePusUNKgxvjdAvNmavygJq3M1Pa1zsYrAKLLd",
  "key21": "TgXQofV6ZCtihwHBBpAL1bq1Z3dsvL94999JESeeV8ZZDGD8bmSHiPBBuRMAEqVpYzqHwq9pGAxBUdyjWCZfC1v",
  "key22": "sLP8YZWjZK6dd49ok5wpMR8tiEAd3juzKP3bmXKAyG6kpMJrinaX8wZXhi6HFBkpN1WxcohEnDH5G3dnZJbX8Jt",
  "key23": "3eUKR7bryN9fknemadF4UwrkQBzyfwmVqFwAhYEmriFh4sNTa5wEfHqHbhCaCmawcb8jrGqXjgQoFvZ6yfUq6dds",
  "key24": "3ZRxdjUE7goxgXnVoNWT3pPQM6WX8r2kKfbQyNseJFXj1PAmDTipSVXUNowQJmRp6v2nYxzGSsoLdA6n4DupEr9x",
  "key25": "3TjRx81qubhS3ZD7sSt1QPbxPuueJAR44j7a5QB8RBzmFhtL56HkQEnsvNpX6keKHmxU52SFgrtrw95d7zAYRXuL",
  "key26": "JRL5DTW5AfLm3ajD52e6WRPafHr6QA23PhkeTEosr8ihAyjTSCKDw97wZuCYc4w1bKMy7vj2bnqR85ZDiyg2ngE",
  "key27": "5p7LDHSmT5VRATfARfF4cfpDZNZU3qSs8AJThLJWvfFCVE5UPW5jzVtcvocVjXMAkeJ5EvHV8dvinNxqy2jicFzv"
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
