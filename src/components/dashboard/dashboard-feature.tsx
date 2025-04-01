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
    "5LYigPo6GLHqTNPLfMvdzUxQb17FXWszXtQKTSns4kTFTvkw5LBpsAi19tBEgfvGfczuhRmdanRYXP7ffwpb66mz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jCAQADDqUwZ4viioMTTdC3vbvbc2UgyUJpGGTE2HDWcd5JyPFb1wV2mQ7897eaeg8Cm92MB1oXUoXWdkd24Mk4e",
  "key1": "mLz8SyDF4gqd5gXdQRE6ZakeZFiPTAQcvQp3LG3ecDoGB3ThzZXVfkyG8kf9LWBDUt8QU8x4DaYmdi1SDffvfi9",
  "key2": "27RPFfxbtWDSyXLaZm7aUvQ3XpE3d6d7iy1F5tAEzFjtJG9rs6D5BZjG3YuZSBdm5foeuNM1zHFD7GyYeaVRxkm1",
  "key3": "3DfxLjz4eJEPjCkjkZnXUq5XaTPb6bodyW7Ny9Bt6Ef3DiFLEdnQSvg8HJ8Si4v5sq3D4fhkt6uDwVp6Zh7UdEDS",
  "key4": "5i5M56PJo1xpmYZ53fyXUvi2WK25rrEuBFLsxrwBtLUufyh3eV2cgcNZyRAnWDQ8LnaiJVcoufMfvsTWy4jfDawv",
  "key5": "3mfQMoc9VVpYG6NCfANEpMVKg6omfhVorisz8musbpFvs2aBGHsmmtseZoHF1qdoFpkLs7u7HS48dCZdgYtaBrvc",
  "key6": "eUY9AKsbZduX3DpY9Maito9BSzxnRoeHX1W6J4C4djV7azpgVRkwQGh8y8oA86ia2hR3zAGRofrPNH2EReS6TfZ",
  "key7": "3cjagnMjsz2YoNCjuXKzrcPByHxVEb7FGVhfbJ1pJWBkKyYuHi5jRgtE6C3jaiUM4BjeFC1d7T29WKf88pQyhZDH",
  "key8": "2RpF1zauRRTGwK3HpQqBoMAvioJ8oQMGHw1HUnW7JyJvH7nCg9p9jr9YxaHcgmFQv3Nz5u8H91CWiLG5VNBoxdRB",
  "key9": "eWJ5Lcv3v6PDwc4YqdDVt1N2TrpmA59tmkSZ32dUKNSbgBQvTkx2jUDXz4eiMQ6cfMafHgwnD9GVMWXCyD5Gjnm",
  "key10": "fwRUy7mxjV2jVxyYBY3RiRY8wxfmP2dN3QSwGnpbbxzAVtEzt2WFQ61oknAPjnwbVormN2WzDnXYMq5aFLXvotf",
  "key11": "5djahvnoYSiqwNaMeJGDRF3pc2T2w2se5JykUtyA27q6KgpDMGqRQ3jQXXzk3izWYgKbsYQ5j7TnUfr6ZdvREeCV",
  "key12": "3pXi8YptLyGEF49UXaEaYgG3a9GNSnMm37uYTLqFDmX3ws7uN5EUDmBEzfthUG2jnzCxW1hu4Xwbvq4zfaWGYL4Z",
  "key13": "2j32JcSz8GqBxUdK2YpnP84fzYcV2PkBsD3FCkD5KorW8B6xxfMPH3c97JKNcj976zbJMxcBz9CucqNbJ3x2G8U1",
  "key14": "4SPTEcPcZZhhk1VFgnLccChpyv4n5RmvLbG3Ba9jRjQCgxFXEZhfsqDFwVxRtbrFsRYpmRPBXBm8WpnzK5mbfmtC",
  "key15": "55CeSArKXfp9Mq6teF49vXkknqboiG8stwfXcYMMvZJtrcTK3yh64Jn7hRsauDcMSabLAffhgWhSMcw86cBPV8D5",
  "key16": "41irN2gNNCRMgS56akjn58N5sEwtnvNbmgV1ygzJr1gAUs5iMNbXQNnqqAL4t895y4S3217yrP5ENEWoCKGtVFFn",
  "key17": "2SW6V9Kc9LKfXPpEV4snF2ttkedXg5QhaYLFjyYGhbes3Xoo3vCZJBtMLRh1CvBtJprGYyBbUQnn1QDxnq1Y3bNo",
  "key18": "33td8WHCis6aACTUDLqCLHFCr3SaeQgccxJiCf3qDcmZc68gEG29aMZxe1ZrTgVAuknr6cXmJkP8KugDCW8eHJDL",
  "key19": "2BeyDsgLaBmSVAhX2z9kkMKXLaKjtWu51JAKwmg2uYbGRui3v8jfhnwC4DhLCn8vciy1CNtNp2K3XFDdLvD7iAnY",
  "key20": "3TcRU33Adhyb9xFd3wqVVzSzENhR4N1c4yBXzzS2oNMuwTv438D3L2kikkWrWNEtLBT7w34do1uz833NfUR2rpWW",
  "key21": "56rmqpj8pbdKgcy9AMT1bE9STmReeCpFmhWsThyBoamfTx7kpKPHsYBydoq1sPzrQyA3GnzoZXq4KMsRjGrztuoc",
  "key22": "bqd9MDSEEfAfeDRddWuRJNz24m6r4u6rx5wU7qpc4scd52ACrefcFsEobhrNyNVcGQRaHjMtQtSndLuktvH9Ba7",
  "key23": "2DuV7vLnhfkUudpqicXKu3uJcitivM3QtX9HyXkHeYsUFNnE2hKiuMX4DSXBrYTTQZH6Z8TRtgkbNG9miQnDPfRX",
  "key24": "SyAaDPwJjj4hsLrNewVpRhQmcZHhSxxYEH4TBK77n7SRNSQ5x2pgobGXbGvZCsZqiZyfmvdfPyvUX9rtVb1bejq",
  "key25": "637uA1eVmzcd9FYESGQktwKuibkPejT1k6R8gdzSKre1YyprJGgSF5YFDp8cPm3gXJjDAd5JASc9S2hvnWdFr17o"
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
