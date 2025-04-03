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
    "4kE2fN9KTPeRUooT6HCmBsPLF2g8JqD1CEMHrmV3V9wvaCQjSkXaY6MGKyMfTs6FcTq73LToj4Gs1XNpo3bBu8kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r7WkbzoDWwH8jByFxzWFJi4he8UrXgVjH3g7BkXC7LC4wo7EM42h3k24AxL7LeWhVcPw1beAJZxbAvHJNbvUtkq",
  "key1": "26ftSszEMudm8ojoHKArpvZaEfRd2Z9DQ2b4pmwewnC84eP63DjZ8Spr1CCPmiqDYSj7boxaqjeSieKU3crwbdNG",
  "key2": "4gHZgpra7yhrTeJiw6hN4X3m9bZ8Rsk5oJhH8NUcqwjYM9FoZcp4ULFAaBDC4oQ2dhrWfrwaWyjF3ZHisssciN35",
  "key3": "2v2MkkZPhSBshysUCAWwgbapnNkEDF91vSZ5mXXDCwjAuiYkxXub9KWGuJ5Hi4A4LrpyXiZNHZmyKQakZ8CbhkK5",
  "key4": "4ZaoH6YhpanzedAFCyj12oEwrpYvULwkTYwzd6Fg3kWd7q53HwFvuv6CgXZ7zLNZQaaZ5sKHsQchEDyQCx1988Gp",
  "key5": "fLSoqwRN3Ly9qcrRt7nqxpYZEtw5jFheeHMbKJRih1g9JTdFtPRrSs9eRn9sbEVY26ZEmFoCToP3ntcP7Q4gviH",
  "key6": "truJxC3NavnheBv1t7xxCUFBBAB65BUTNzhkE19o5J8ND2WP4jtiorqTtvMDxxCowJ9tHEb7mLtMgCitvyXnAEB",
  "key7": "2iaDwjrBVMziTpcUtWX3P17H7gAzn6956vowZGhwBgWkxo6w4X8Qip3mQ4xw2TopkvQrZ1RxPzjYnNJ1xufmyNZm",
  "key8": "2tzBgWCqjuBrANroUHiX6RmUaVenUjmyTp8eUS68qEoq3QN2V1u3f7EQ59XF6bDJys2FDiTYr83XKYMdeeyktiAF",
  "key9": "4FxrYJ4qUAMSZ3RkpDW7Bfd7aDMZSqQ1SoGNThheQ7J9W21YxKq53nbghges9yprvi458BHMi7T3GJGf7quY9VD8",
  "key10": "SiTeyUQPvJ2AZuZavByXCoZyhNh2DjZoKVpTqzargWVo8XDxEKeXtxKjDDHq8ytsL1sAzNro65uFnaZ13khw6pR",
  "key11": "2c2mM3JX7kuLMvfgqK47NjZa69ov5muf9wEnxouP9Tbm6sZT6UuRY9iAFHKBWJJRCkkRetH5tWeMiHGV11S1oC68",
  "key12": "2rsD2M2Witg38uzEnyD63gp9Jxug46uSiJskrDQgWB16uyZsqZpoRb7v1a3dyKqWCbzjEjsGPLweLqP1qpes8FY9",
  "key13": "3vovVVEX7rQkaRpBrc3KwYFDnLi9cED42SYSYqGXWcTQcZViDoSLor7PQs5iqMtgRiaNZAeU6wd43ubjZmMzXgD1",
  "key14": "4M8Taqexnp6CUvAD9icey2UKnK1iwY5kwtNzDuxYgd4ykBHdvqRxiDhUf3VTaPnGMsTWDtQWLZXMKNKD7WXgJtyD",
  "key15": "3EpXM2yssbCYqMhkk6SZ7udyBot4kLQWkoMjjCN4FFB14yAbvGtfA7PX1WVsNKKP5JVHm1MkM8yUC18f3KrcpGxi",
  "key16": "375JNCgMF3PzWyjKVrdZo3tyacNqaGUGq1YvJo6rs3AeFMVXm7sj8og7gtJXQw6WbGesy7676ur5m5ve523a9eTu",
  "key17": "4KBLxecz8HLkRDSMzSKBmFGRqmZbdsyDjsjGN3qLydzLCZjmyrbLiyyPVehTY3dYZab5VAdkYYPzXZgTQG8siuDd",
  "key18": "3L749E3XcJBLxa1cio91o9daWW5Ywf2G2LL224RQTfEuNqNkiMZKmtwGifDvN7DW7uUPNNeetH26Xbugv8zjcLx1",
  "key19": "3ksJxwnjFpeFY871UtAFLB9AqTj67hYkMLoYNEnzg7b9WroFChsfj6ad93ZyRTLbQEjAKoYwsWH9UZyFF6eosnyQ",
  "key20": "5MW4kWfz3J2utTjkURyH6ybqoWyyzh5sAZjMaukqSUi4dX6bXbA3U3NzdcvSFrA2H8o44sKYZrchGUHbb3izSykx",
  "key21": "3n2C8UnGrUzYNKjzmgDiC2bETcahp87BRvb7n7VLiX1gdiS4kYXwD11tP5NNELMUVw2s7WfE9pFLd7dNn2aA9Yc5",
  "key22": "3YfozZkVBM8Ti6yntcyv4TeSXfwDmiiKgqhYARUmNH3uE6qeAefwaF2WDPkBxeNynexHMaLoRY98qTdsu1aG8LLd",
  "key23": "2VEiCtMpZRtBwdqjJ81PnYf9F7CdutSsb7wsXdCRJUiMDZMt2EdwN3NLxrX2mbTZodBSNCFvsM6mjUqpDUGv5B2o",
  "key24": "2GdkcDgB5xTa9JztTHd3R942mJBEMMPqoFeH5XiQ2s14Y7oBjd3PoURYYEk2rpW1CEVbGPt9Gv7VLki3yezjU63X",
  "key25": "29X8TyByLjaXNEKH2Dz6E3zo3WLDz29nmVxqURjBsTXz5E1L9m57retXQnMczsDJPjvmcWhd4tyZkLr5DHobewwP"
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
