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
    "2YWjwbEZKaoC8KxbcAmXNLUU2E4HzWqFcpXXSZ8XDk7BPYdGqxjGDkhUc2spWSkMYtui8thnxe8YHoM7ApLfHiDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tL1dteaL1WsVsK7Kwy4N3u4yEyNVQSqgLgN5mAozotN38a1MShXpqsrTSw7MmhK35TXRQowETWPa5tpw2RCYWSX",
  "key1": "5q35h9FWDNNmhWHCCEvqZEk49hAFXfEhegwhQuW6NFabc6eMMK4WEcVvbgFZzxQZVqSk7mCgK6vhJndno6LvAWo1",
  "key2": "2aZemQkqSD9qoCazhJBGUhP9mnH8GLFtB2t2FgmdMPqiWWQo64BTj9mwcoYPBbPjZjkEe8H3Q8fU8JiBxSzbSg3U",
  "key3": "3na7owFWkNezT4FETUS6X5L96gX3LX9FwNua9QfVku34kudWyUTFvFqjrpC9KGSgDRGvBBWn1ZppmnD1kTpsuKCP",
  "key4": "3tAjNUQqxrxHvMHrFQKucxZWpEg1ov3oxLPBipzdqs1abAEfLL5YFD7ZhjfoBEpABpdDxm3Zqthtf1qiTQKs4LZS",
  "key5": "5txqDJAUQWTanHGVyeyyxymRnPSqhGACmcrih9MpnT73cpymLUp8ZfQX4ugTe3YFxKQkPBLrHU3oh7kBFosZffGj",
  "key6": "4LcPKRoLLSByTGspLp7EToDDN6RtGVzBkevehKkhXXvFiB7TAA5SRfTeoRAX6owsperQaBJ3LxaLaTKZWvvwqhxg",
  "key7": "47CxREp2biJtFxDcuFsPQ9jTUcsiZ2FtsC9yPvP4toMwxqWGJSgJynJpwNcsE6sBhAL7WPRvftQyAFEWrTEu5VbZ",
  "key8": "nDSFeqfvr4vXoknT91m2J4q8tUTztgSNPQRFuwEV9fMXyQURgaALKShWHnELxDSfBYWWVy2t7geYDHekQzzDj9i",
  "key9": "4JT2zRurNMYXLraWwQnyTQNAGXbWwUWYQyGNihiy4j7RypU1jd9sE68Wd9tBkzTVJcHyHdv52GujK2qqRWPpPD8N",
  "key10": "zQyXySgPShJMD6PVgTyB8g7jWaWzdikWoVt2c2DoEBSwf8oVZYxhY3NVLdm8RzhnE6Mhfi53wysQnygaNwVa3jZ",
  "key11": "4MFWrvFZG53AhoMrTY8tmegjQCvfYvhQABfYrYGqNtD3io4tVkh1EEFUsnTCDyuaRWkN6ZHKcCp2h5X2tdMLrSBY",
  "key12": "5xufuGnZFzRwSpHnofuqUgp4hRD7CGi3euNNMmMoLHiudCLhfaaKhA5EYXZvyL2BTJXdddekFjfRAboYh1gEJ7D1",
  "key13": "y39LEpwo3EWxEZAmB9u8JYy1M2XHCaXzBuy1ScUJcoJUGrq9eP1Lm8y1JeufDXue6x8JSh6w2dCikvBu5CTdi51",
  "key14": "3RmjvXTXurXV2cCqPmcU4b5CesSRZDNHN6fbStP7VTgb4XtmZz2J3JRc7oFB1vtKDHZM5usw8AkPDkPn7tkb1HnK",
  "key15": "dtCX2t2eWFLqec61uckfXJd5aaTvwF1swPeUNorgkamsR8zasBVjaXKnWuMqAV8srZMyuoPV4ubobqzkNDpxnTd",
  "key16": "4Vw7xksC57zb9xapXzLTqDs42jhHY1BT6EXDQGfRgPXo9pT8ooFoCuFGC2mdRVMfHZBcAg33xLZde1mBxfBeCxbg",
  "key17": "2s9zKmnRnZbDNPDmjSy5QbteTcHgKvozYJYjqNg6HFxHxS8A6zqCawx7MLpAxNdTxw8n2fG89dsGkXFzV6mVJrE5",
  "key18": "636GAwf33Z51vmb8Hj2MaaLZj5327ZoJj6pHuXjSs5pecq9FFuAZoDMSgkn2w4SzkwMSJs4gJR6P9tjPbAsfoGvc",
  "key19": "2DWpbFXLz4NMj9CT71eYmHJFGSma1zSpscuvktFGtd8oiZmXmHBuJq9WC5tym3GzYRwixFPxBgfjaFtgCbm2hKXP",
  "key20": "45J69Fu3tXXYa2WpbRh2c8wPdZUukx4FWvRLsQeNXb4KhduZmLiXPD3NQojgpHBoyHbQLCMoPnWgR49u4g9iZBZF",
  "key21": "3i6gGqz5jGN4feANrqbMnDaLjCBawK6hD255BubiTpM91DQbC9HJdE5MbgjyVKW7pWAcpjsFUFcfJJRh8bZ1XVnf",
  "key22": "kscfugvqX19YRwxPjijBm2NoTaaZymdB2Mrt8A5jKvQGaV9KhcLkjsZ1yXCJMLM2fAsi5mf3mkxuihPWoCHEXYf",
  "key23": "5yYLMmAVhQhYLi2JHpfE4KZag522TTfbuGhzi6WFETpeqYMJm3xMiHKKGm1WtF8W6PkMGpoQW1bVHLfpCiXCPMEg",
  "key24": "26hvC8rQYehXSQYWVekVcZNohw9v9HrmbxiFhyQNAsMuNLr6y97BbVS9oEsdQ3Z3iVndVENHDxjTxoBJdnJvzjsb",
  "key25": "4xTWwRwLFcR6BG3AMYbVHbqnnTYeuhKjNaS6qnieVyuT2h42ksL3527rFycanccEbvvysbKoBrb8wLSW2U3Kz7vp"
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
