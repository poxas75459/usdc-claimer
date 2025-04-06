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
    "hfKcmkA6PKggJd7xNbTDH6V9BBv6pmStxFzEQ3JdYK9Fy63Znqb3dXsPsm9Ey8W7D1NLKqUju4FZHv8nZzhWMsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WEGWazFMe3YCZD6rWJqiqqLmuoz32kAWQk6J2ig5Ho3k3iv3pA9gvyfP9hiFWrQT1ZNKe6KKgqkCaZCpoGqBhD4",
  "key1": "5oez9DjRkyps2rhTf4NFmwiShTPhWLE1foXBvxyNSFVpSQYAvkK38D6qE7gNQo68QaykJSLQJfjeVHf1KPFPsiaD",
  "key2": "NdbbPpANFqUM41sKxjVHHx6WzStdiFEQvr9xx2Y4DonGK9yHCy86gBH9kg7MZMUWauVzA7B5uAAYVN4uZtcFMjg",
  "key3": "2VgZEPvvtnUjA7pMASwrj99dRvZznQPXRwqYSoWv6ZJYXPhqsBy4ST1pSWspXVne41zy7Q31BhRsDsQQYzjf5dFr",
  "key4": "5ctb4r1ZtZQfkpwLGLYaS8KZYuCcRBd5ER5LfYKZrjHfBP7pFo9NALVSYGUjsX267nGxPJRP3GjJ5nTmXn7aMKtP",
  "key5": "48mHCDpNZ8TMZLprATuv7UAKqbjox1AwQZ1WUBbdrKfdorCtD1rB8NMfqQxmXXqH3YRXHfLspgERTiBE5XZv5nyE",
  "key6": "2rEkfxShQXwLXd8hVmCyPBV2vy6yG7ntFnm6Cfypy6ByoerbZ8mQAmzR8nRS9RcyzyWzSsw3kaH25m5NHZvojqc9",
  "key7": "2onv1QuZyDTD8qEw4YvfvyfmjSCoWU6wCxLZxeMEew4D8beZ7X3V4UqxRm861of5eQsyRb3Pid1n1oRUf21kDQE5",
  "key8": "kBSdaJcpLf9mErEgACCBWJn9U8sG2zke62HcJmTg6zw5N2vvf5Nu8Wg7gX1gHaqd4YBDE3Qbs7BiCXZZdgHym2B",
  "key9": "EmiaVLELAoiW8RjKnWYsThcMLYoob3kMDKvSUyvVFMjM61D1xkcMMo1vmYKCZGLRVbQhtU1VkMZjg4iBptEXPo9",
  "key10": "39SfCEhxsJgYnsMFXKg8iPEsvymfTpPUbpXXX3fjbSGHFJYkfUzNAuiKJzcq6DaJZkUjEHB9pLrS8JXmdpYtheHs",
  "key11": "4u9oK2LxqmhFxQptWizT9vLbg5bUijtxqNRcLrVAa6KMjrATjxot5Ejcjiokcva1uhGaYvp8NAF9ijytSrpPAp5f",
  "key12": "3BQYMbC8QSR5HC2ebtVJCYo9xMTdNmr6tmbuWNLVrj4K54PMNs64jN5nKqdZbgj6ZT4m1KiSES2mDA3sh4XnwpgT",
  "key13": "4dQ5g2LdGeSPpysXdWjtz98bv9u7GY8BNu9RYXh6xgvamYXpBM5MzG8RnVxCQmiJtT7kJMpCy1fScYXwNynwsBkq",
  "key14": "2XpbDfKhJdu5WuC72svyymrtXeHT4PJRwFuVVALVrtVz1xmuhHt1tSWBM2nxnDdw3ir9U78MfcMzrwTPMGrej7MQ",
  "key15": "361qYezeXZKjr1oscnjJzq5L1nKjdYEcaRK2xTAGY2uvbJCWNa3oid59sLGfKUnxmq6CwBqadTrJq4EWkMfUMJW3",
  "key16": "2tU2EXLhCesAeLsJqMTZkTPNtqEVVhU7Qpx8P36ax5XQHTDqnjUL6ZAS8EFMYWxxSK2P27jRSEYjBw5h9wobp8Rk",
  "key17": "2eBM79HB1fiqsAP5TeCwx8NvBzUaZK1iYfAoF8W5L7Ev73bvhyUiU2MyhvXMWDw1ntLro9QaQQZtQNB8cPPvkqUx",
  "key18": "4MYkZMsUBG2PEDF3MhtV1q1aePN9x64okHodKJM63aGimg9hrbA1FuqCwdoeX7qWKbDo7uwqyz5GW52sJUvTXy9g",
  "key19": "5qLV7yz1BcFTrSLJGBpSo8d4kD26FDxNR8RRxU7ryrxFtmRy5MEqjgtzpCe2qUBqkiAjQsRBzTTbZTkjzKwAnKgk",
  "key20": "2ajbKjqd7dRaehmHfPHGUWCF6ddE7Yy13hDnFRfYK15aw2hdpbJnPzveUioDkYfyPtPAJnSteRWad1f7kisRphQ2",
  "key21": "XvMnpquffYJYRRtCat5MGSgUgKyU1wQGxDyQECnYHinPewMoTXNhFvDBEw35P4DX29knJ1qM7GpPAnxaqyujwgu",
  "key22": "GH1jXLy1mF1vxMz9viSzUkHvQLN5uzqwYvc2rqT1qEdRcePQZ1pY4e2EptND7NXt5GouoDptdymLAN46n6WhqhK",
  "key23": "3ZZ36fRAQcmd4PwxN6NgepbhK42ShJqabsqrucNyPhz7q7ZpudFQugDvmdSLRAkezX8Ddqs6MdgD9pt36EPMipgE",
  "key24": "4JR4rU8SohfgvrA7wW38hKH6vFmN9ratvC6bLWUbfZ8ghCXSpFgx2322dKKdoH82NmdVVy4eCYdedFCoikwLSZSK"
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
