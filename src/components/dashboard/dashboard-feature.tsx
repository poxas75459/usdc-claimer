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
    "41Jgu4YXsvvJLWHzN9Fk7a8z7n24S4ao8UNktVnB9bboE5gTAHUVHWa5158NQLh7tweyvo7QRTF3CedRk4GijFiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xomptZLKV2E3MFDzAK1mBDfCsNeoBU9LncsbTka9ajNWSXK2AhmDUdZrc6L23aW5BViWkZo2PrBWcb5vbSy98ru",
  "key1": "RwL2BxHNXqeWtkMEDaJiGb1jtTspuimZ3pNJ1UorkdUjUXMVE16siC9fEn8XgRNsrKLoTysVvJTkhu9EcGRP1yW",
  "key2": "c6R4D4equ16ZWVWintLyFYmMstAZQuHHMmLA9mesG3zATqyjh9mcTzZDp6Qu2p5tpQzqdPFt1jtnvd2kxkG7Q4E",
  "key3": "ohqe69ZmNRdAC9bDLxT5kLTJ5bobdr2LCCFqDiNqVoAoce7aSyuZWRASD1NhfzRcyJfj9GxbKTTNeBV4eJKcf3D",
  "key4": "3WaaREfuTVTKGb22CLVJByZQ2nWELvRLziBAVXDH8xYeaqFbHmeGe7Jvv2K9Y1FG3gDeDdDQD9f7w8XueVSbAK8E",
  "key5": "5eqVVh2E3qnV2CSkPhdSrKwzWYYg9qG47CBrF5y67fo4STCMpkq3jWmFno71fgF4Bk2QNoWBC15qjg4CPPHWspyi",
  "key6": "4qK94wupGDWcbuTsUVLvMgGZu9iHUTExLQ5ZZMZJcKUuE2B6CPhn97q7fwqBHYnowdkBGMr5KZjNQKc9FFts5PrU",
  "key7": "5Px8TT9bJ8aVyMxom1GqhEMxjASudre6qEqNzaPkBuJCDpnWuZz9C9qFXSVKTxK4ZWnthNgd2dmg777Nfnwd9Vxv",
  "key8": "3JEsDhuEApsQxzktuEENoJQN84yZ6j2WzA3FRFy2cYLAk4gJR6D7YW9KaCqBK9AE68ZXvUFv1TswrrbUzo12dCur",
  "key9": "5v94W28LBu5pBicCc8vu21CJif6wLNkw8QJhZnoy6apACp8L3yzcb4UjnAdTpUKdHYqLHzKcDgDUL9aF2YfSRe1Z",
  "key10": "5ZaLnodWw9GVnMGy6rMxoG4BxdnYVK1fGnzfyYegPkUw6fpebCRWYnfuiQMJFg2wLVFVpabNXk19RSxsn3B6sU2F",
  "key11": "5XuXTM9W6GzZVYYXpDMB83brRCq3av6vXc3tMi56nUrfm5RPWzZxPmi9TQgzXC821DVKk4h68yPyUZMEwaXPjyeh",
  "key12": "2r6rzhQ1UWkTgYs62zrLorThtZiAqwXrjHUV4ZU3DW3pAEFzpMwApDq3XVNxHsrMxhsvLRuyDq3ThMpge6PuCGym",
  "key13": "35uWEtqEaR7SvcP7RkQ6LrF7nQLWEevAKe7Jt9sEqFZKGRr7VMdiSjHaJFwB5yy41fM7BJUNpLHvvXheH2jc239t",
  "key14": "47rBjaxVxtt3oSRTaEaDCncaNrmWx84N6fBTBt9LDRryibiRHkoSgoFCpriSpLZxYU2FpGu5QUqi8P54pYz1KmcX",
  "key15": "3U1cqc62K4UQxLub6YoNoBKM6X14Cis7eNJdHz3KTw17wJERSVWKHi7zGhb6YzHTrVbeSwWwMNPhXMv1XHLk1Qgi",
  "key16": "34axPRJiNxptrbJX3pWbiMpQHbUSFk9uoxjHjNfwWqixZN8H9J7HyhYCBz4K7v77TNjRAqhDYgUykNRdqEtEX6va",
  "key17": "49mHaRYYqritrQdkH1dyPrmrq2Mn6Fr4Z24MbEU6he4xsc31VPdTNxeM5iDrpCggmkHMd8dLe95WiLwjRuEey8Jg",
  "key18": "3NDdDAqUZpM9njEgKfqmn1CYdRfMo2jiPNH2YDRi8epqJCCizgXB6K88fdC2M3yu6vH3kmXSAwcgynUjTqpwY5Ka",
  "key19": "nPdj3FFctDwyg3YH8ChMrdWCExTGxkAmxW4EeyAuqR7Hy9Ewo3x77mk1ivVgEh3Z9FaDiWs3pSww3XQ6wpjuH1S",
  "key20": "4Ap34vG8CjQDmzi6uesZ3bWUciEG79W5cEbQUuuCb3WBsnNZXCC8Ya8Bo4cP9JdS2wxKTXqtijQwFn6KZNpkkfdm",
  "key21": "xnXTE4wigDQ3PgvQqq8GuC6PeehEoKXzkwQctX3NuW7fQwTkKsRduAuBGtHgTfXB5vuQW99EgJ5cAhBnkTspPZm",
  "key22": "48gLtjgFaAiQbVfsMpahWUDQEynfX3n9iB5HNcoR463GbPP75d1dKTwxisNr8gcH6nPrvrCwTkL2t758wWE2DuZ9",
  "key23": "31grzyU3FfYjVFxAD1XRRWT2bPH29kfZsCCmFiHn3pmX4zVoV3E4soyxTrMAEdcRKqi6z5GgJ6wYxFZwB2Q55wzh",
  "key24": "Cw4TN4wy5KZjwJ6iCXTkhPpQpH3rcktfmK9eQneZXnaDm5bSHmubXsqyuZL6mGsBoVUR6mWMCMUA2CqBuhefABE",
  "key25": "55mN1G6P8qFgy2ZF3V8uhRKY5VUrf8bKW7du643NWtL1NsoggTUwTQzBeYMV1zAWnNYmx5ATQq3roPnVC1Q5u6x3",
  "key26": "fTB5AaHFa764jhedp7MS1uRh3uwm6DwNcGPa3QvoL5sSQRmCYtbSVcQrtRD2Udo1abn223NkUEuR6YDfAMm8xef"
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
