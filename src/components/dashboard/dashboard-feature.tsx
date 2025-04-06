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
    "4oaGogGMG9yciwyQrfQUYU3sQZWiYkvsZorjK49vFzzr7wxtvps8UW9rLSzyc6uiQxekjYfvRnGhPXonMXocQNvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M1RmGbZ65WEUrnDnzg4fHEs5bpZGH1HwB4ANXFD2Mjp8CEVyFZeLdndANwV4hN7je1KN3hffLEfBmwTTMQcS4Xf",
  "key1": "4bAXesN19c86bC2vKe9eYFZ9y5n1eJpQbv3oPuoLB4pBQKbqBggEyC52G49qBZywQN9txnKzuDNicTdXUhdhq5Gi",
  "key2": "4r9L4yXUUgVgivw8MNUpGdQ3t4Kms9T4pBF3Mw4AU3L5ftEDg1KTdACYJKve3c6sH2syskyUVBmYAYo2yT65p7CU",
  "key3": "y2RqZ9UB2YA3WCmv6iySwes7wVNEJ1nQBvV5cNc5dFpRjwTpbF1fKKwzCxKL92ByjRjTgwvaRndAMp7Adizy9Es",
  "key4": "5aNCMHyCvX4AZDRfx55nRseLJsDyMfhkiqujYJUVZY2LFp55dMJQvU9z2HTa1CFwqRdMiRzWYqcT7Pfr65tToxPr",
  "key5": "4R3jSkbrW7r4jzoCLAKrtpshhxFA3PXuEtFrQ1X7NqoFS1T1hRxkGfjTHz7ULSxxsMT3Lkp3RiGefc3Mg6PdJ39j",
  "key6": "roKAVHQReiK3PVNj2shVFoPr3K1STxPFekaEG1Hbnt26NtMYuMcKYFdDvn5txLRrTgi8dkwc1BqJwGceApVNDEn",
  "key7": "5SsQ7reFcNdHrNyrDhKqBUQJd5KtavJMpyr6FV22Y8mB9eq9sLYw9Nw1vctM4bbEvVJfTq6CaduM6wh6vFx5MH9H",
  "key8": "3qzz32WLy59D5eAjZGb6sMeiJD3Hnb3Rw7Ckam54vWdcDnZDMK3eHbdP6L3G8zpCGoHTZynruSbHYU9N4D9oR57r",
  "key9": "5HVv8YtqdzkfVcmCLwRaCn9TnEf3KQMTTQeZedhgYgnaFpiXtdhRaESjtUgEkVGp6UgAWP1oXUzMRb7AYjv78SDK",
  "key10": "5UEc8LJ5RkiJDKgLinKBME2y6zw2L1bDLkDf76HdM7xeYyGH5eDVKnAaKygfDtporbfAekBueaF761BdMw5bzkpk",
  "key11": "3FYDgaMrkW9adLY2UhKZvCkwDkbBsrdx4aWCWb7rUReqR2bXtpeNw2mdbFdfVbXSQpx8PBMNQZWJaDsXD35m4TTu",
  "key12": "2F2d9wvwkyKGLXuovJifdrA69A42wnV1AjmMKnGcfgtCCEWkiFZnk1YvzBHb5eZKXPpe6Kk7JPESwSLC4WtxmQqF",
  "key13": "4u1W2xgfrLG8tH5YQgb8DSsKK6ZBWgBCr2BA81XcQMYSX53btD3YtfgtUTvjH5cjjqNeMRHrKazEbYT9GJgum4BC",
  "key14": "2dk6jJj1597XbiGjvhkVvojifJLMtr4R424R86N2M5oMxH5VzigEjDbX4GNBkJsYw493UGfsErwsrmSewNdXsS8p",
  "key15": "5QqrKK7Zxic8LGB3Z2BZfeawL2sCV93nySgW5QsZju58E2BpgVVh8ATfD83P3deP998gMADNxx7211g7X1DicwaC",
  "key16": "2w7xdeybwMMPPE3VoTw2Q9X2sKB3ngiBbc41pvXpshDY6vAxbemDz5ZwruVs24EkvBKYTCX7AFbPhJ9fY9yjos6B",
  "key17": "DcVAtu79oZsyzz2t1FmigESgj9WrwtGie8WZeF98RNAayLBXXNjMzBzjDwA19foUek2CUHQGyPp9LZWJ3Qxw41G",
  "key18": "4rm48UL9FRVuXcoeFTAQn5jY1gagB67rTXAu8eAu372Zk9PhCgKGtRyjLV8U9t4EogYprazQAvAM7bRShptQsBt6",
  "key19": "5xEhT3q5ESeVzJCnkRjz2gXusqQbR3Vdcx4GatGNrYh1j8PjYKocYniSw2eHh9uDX8vcuncmWWYHejnks6U3ZXhm",
  "key20": "3XrEYWd8mwSbvFXePRbvhLmfHY5KXJzt8qFRZKZWhBPRxuqHeWpm2Gx2ymYrhoBbFwvXYwwexWtrw5pEXQ7ovZX1",
  "key21": "3rzoSu4LM87VtjbZ9GyxiwasXMLnQdQxZ9Dzq63VssZ4u2bEXVzL7zVztZfwqzHUfWACkVyq2NmGibjFkKAsATT3",
  "key22": "21iwLzkW2QQ4HLZkbMia7QSyyjkAQjyXmgucciS6yEbvoG3QtkijYAVVRgNiVCoCQvCjbKUuJTU2G6Ds9WES8kng",
  "key23": "HfPzoAwcetExEXTGPNU7cSg7VkcfM9pJUtNQqL9KZ9ji7nhCAeYLffStnFfXyXFUBw1WMVWNML4DLHvLRxTko9u",
  "key24": "67CUsU1gu18E4U8hfLLL3Wu5Gisy5V15Zce4Lf7sJEA4fbub72L9xA9NdxefrNoR9vHUKeNbV7VPb1n346njSE1V",
  "key25": "3U1jZW5zpgvK39Wwpw4vAyBVwNMwWjC8yZMFVMp46BxSSruA4T7PekUZ2kLPc6wNgLKHpdPwmPbPJo6R2xPbhzMS",
  "key26": "3F7kCnp9DEKZGQJXPuEYVjhaRUysHCrQHTAToSwwWMHxVN5wBuPR7rJztWEaoKW4gJKYkgbdGhz3RgGDD52XCsd8",
  "key27": "5F8oTJaEhr2KdN3Ri27MbnJKJPNmuV3eQtYivSPnZTpPJJSR3nDqzcPtM3525QZrALumDrNnLM8seeWv4bLJZN4B",
  "key28": "35cby1nHZkMRnLDmZGoxmo4kghAijWUUuSZVR5fGEHT2ipvaT6WSfaoAGK1rRTosYH7E4NgCbF8HjaFqqZqdMqkN",
  "key29": "2S2WCyizTUqFpsDHLKKf8AJJcBVVQAVMdvUfV13m4pUV19Wa4smSdf7DYLtRA4YPh2ZdQjNBUCFZkspX6AufP3Rn"
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
