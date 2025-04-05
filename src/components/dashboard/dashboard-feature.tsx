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
    "4UWdfWUQ21Phz2AW5SoPTBcGkBFYyz8gV9VHEYe1UPoPiaLjNX5xwya9a4aMDPQMUD4RqtsfXbtuNyhW3N7JHXX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bEKppFpQ8TSBtYAvbG9BRWatcAjbfKp2RN8HU9m7F5pbaDeXbUKcKQ6Ey6zUXCxkFGRu1pxthmeeRkoxh8XxuQi",
  "key1": "229GAqtUnWtEVmFFJ6oPkNLMFdmkzcDrF2DyCHUNcCLTzQhsnurcFJwVGYefahoJMn8jGJFNxrKGBZjZ1p8PjLPV",
  "key2": "3c2Nk1ZwfXVa5fYkVHxTzjAQS5VNaB7jgiEfW6rNRvGToFuA6vM8otHTTBnBjkyX9eRkT81YAgQ6Dm7KoAgQMQK9",
  "key3": "xtaTwMJHXCqfwy7QWHVQT5GPQSzxkaerv5G4s2h84uinNWGfphidiSkuVmRNeJANiAD2nvTgReUppLqGUdSTMuc",
  "key4": "3mTp7VTnZGRsgunVoWG15bdiM9DFk5iJuT2GcESyqGdocma26MR6ZBojB2Saz7yJir4kqjs5GzeMxx8T4jB5Rzc1",
  "key5": "3nmQwJC3qHMTNnpk8WgmBw14SxZANmJK1qFjwt4Ygc9jQ3oWKEyCwg2EeA7EZqPvbA3HHq6rQoAUz2yvrWYtTYvD",
  "key6": "3Lyvz7QRGb76LwqoFyggDZqad1U2aszBYwaeRV1CKDN9RxaW5JRCCe8AiFPNENg2CZBpC7GbNJCcvyuD3TvZ6aGv",
  "key7": "3cFRZCYcxojVmdqBgdH8nnw3C85rBVJoMbLNcSXXGHHebYMvnW6g638XzemFj2yciF2sqCURZods3zi6fTfY484v",
  "key8": "7dHMERuZ5NU9cy5Pm3TKoo53zJKKn2yZrotgziFVzSpP7Cqwixk972n1Y8FaKMNetKbi4U4LkZDEYyanJwVQfLD",
  "key9": "58LCkznkQBtM2BrSiEPxte8ppdwJrbg94hJxifroUExJZ5Xbf1tBRpMxedUzozgkiLvqqrU2WRh5sxrASZcUyW1P",
  "key10": "2TmdANCVQkEUga2c4oatmrK4RFfkLXgib56oQXP8uMehBDtfRfDovuXoeKeSVDets1YTemPzp27qMM4nsV3Aem5W",
  "key11": "3S8BW98c7wuZEYveWZf6CeNqdwRZrhLQ1uxZLhnS2YroAP6dJzBtZ4E5x31AWAjgmdzMvFupE5mExvfHbKLnwNWA",
  "key12": "338bGAFHycMGFCYZ9x5n9riviQg223PkCVrsLXUhc2TxvJiBopTRAS62SrPAfm5RDp72HNmHTurgaY1c3s1TYi4f",
  "key13": "2bpyJSC8pAxnxoJ98gSX7QGFEp7G8MR7aDWHAHVna5PpfD2jmPQuJNDmH63eABW5BtRm3tLA9mvDV9hqky9nSP23",
  "key14": "THq9u2vVNPonqF2ZW9XKfGAFZPpZLcJXBmSSX5SSBJvTQE3RfXFXaWRcTGU29n4c6gZ2ubPwopWAaE1ucCj82F6",
  "key15": "3QrYj2fEEPuo14wvEGCjdr5LS3wo647914vw5HBw2WyVVkLUmFd2ugbJ1AkLXJ1VsjfuFKW2ufEmSk3u3Arvck8T",
  "key16": "3zP5oBiBhdp8g8SKnR1GpehY4eFrnTaLPQfGEAWeYi5ASSfcWqvofJe3AcEHWgbFbuMUacgemrzWAEuYTaYUH8Lo",
  "key17": "HEdYyzYEomMwNxzBuzYN1DKyZkZjTaedzYwwXE5RhfRzANqsR3zUZXqdkWYkTgcuhRCzp53p9U5JGhtoBN7gCbc",
  "key18": "4bjRNEDLMfPx2bzoWTffDNuixjjQA8Xf2oCHZYnrR8ks4mo8UmQ89r9ex76CGPpQNNNVqWW7BxW79btxPv2Sz78V",
  "key19": "4JoEDYZJ9ctHvvhb6R8FZwuTDLJXM1iWRVheaCUYJxtv9PPbnZ5o3KN7tZtDuRzkThbQNnZqKgCmJMCzhRFBFEZy",
  "key20": "3w7uUzuQVnZdpMMsqdGcGGCzC7kT4je4bfNBb96aRXTyTa28TYsECcMtkiB1wwpmHdc4o8jvb1EvFDzu6NcqbwxA",
  "key21": "2yYZ7ApV1QoN6uZwmebHBf3w5uZwLmBXGV3FNNqACCrB8Nf9NmjYsH6ujvM5ufqe5ZiciGW7b4s38pUm7mmpUgUw",
  "key22": "5QmuZSR5WWQExaSux4cXxFyjY8VCa8FzwWkj4qP68XwEHyjZV3xxC6zwjNPfPtDYxSS2TaveVbPeVJdFKKBQHMai",
  "key23": "5bonLtxfm3f7BKAgQaXrQZbBK8bcpKpWSeoTYAGVCrJ2Hg3k8SAFdWXLuo6Mk1AeQU82VKEYw3svS72B27cUSXG2",
  "key24": "5nkBk69yuHJswkF1jeUqyZxkZ4eSomqUzyZRbaiwRBf81g3vQEvLciNtZrf1KZGJpRHhaY426Z2aDh29h2tmbGBM",
  "key25": "2fJTFQrsCS9eJw8xU5z9JdbJDEn16e5zWNYFthvUgD4bsq9YiRhcWTEmQAKimBeVcnbu7Q7wcgwrMrZ3BUfaw1qB",
  "key26": "3QdVMz2ePxd5CJpiyvTMWpCSSDqAvPsHcfvpTAE4JzvgdVsc9pUw3vQXUXbL5NRiZ5NSNhKn5wkb7RyNQCM6iqB1",
  "key27": "5CZwcA7mmtTJs6N9WPFCGXKkQr26TvdwUKbF4ch5DT1VtCsimm1SZhRBapyYANLBgqRLzRj51frYbsYMtyRkAA4o",
  "key28": "LC8AAafrBmZBVLxuANMatTDMpGoYLrhvMo6vm342KrXgZpr5MXXXGxgaPrZqDWhZSCci2QYvrvRCuTYUQEJyiUU",
  "key29": "Wp37f5Uo728iHLD5iNuNJ2xgUPxTNbs9wECgV1dfniMc9UsWEmnqLpnEqGTYn16gZraCGrNPCfTqzLkzaZpyxHw",
  "key30": "6599Egd9zGwYHZA8rjLY5Cj2jhT5QQK1jvPDvXJZxn4UKwat3KMCBmKeZAwgPN6kdmTSVhBvynV4QnnYrm7agwvh",
  "key31": "3eJP2DsQGVJciYnD1JgmSU8CsutT3BSTnzCVZewqZi3k5hC1V1yRW4kPqZHALgP8eEzsCL127VNHtFQMn5xri57b",
  "key32": "q76WqkUaWE6tVfWvsdQ4tHBZPWbWUN7RuXfrQZ1GA1eQEXMr6LyDXzNAp2Vnn9vMnWtGemkaH71P7n5zn9cA3g2",
  "key33": "2QVzmjqbgr9iAhPmf3T9EcZHQqEkgmcee1UXAoR4rorKVmsKe1mVPe9AURY3xt3ebYCwNUGqpYyjUocqA42JsDPP",
  "key34": "4LEtmx6MYtgBc8YYiaAxmhSzqP1kTB3yXGboDoEDtAtSr4FNDastLjWWd5uqutCnWBDHVkZT6EFLx9uLs3ZNdirC",
  "key35": "5DCnYkhFukjjb9Nhc4TRMn4embnaqQP9KLbBLc4fpvDLnSCPrtwwKLcHjtXXRZpz32kcTwYWWk2PymxC8HVCdw51",
  "key36": "2GNbDXXYA4Tg4tPAdT2FtTaasc8qCBjiPxykV7toXv2S8Hg9suuwSKYvnVdMq2n8U9jCVQgzDLM5MsuuQprNqXgs",
  "key37": "4vATnKnG8PD2qDAdc3zHf7fAhJvGtRhJPcRHebELzQv3wgcMU9wvArBfS5tddVpj6cXMoSLg4kV3kHz73NT5ajiW",
  "key38": "2v9dXbnFyu4SKtZYZ1rNBZ8Y6dgbLZn2uqek9Sj4xhTSY3Y7r31q7LyEv6zTrtVzagUCPp4cEAdzTq4mCSe8onNm",
  "key39": "5CnxgwwFxZPpJBFnCdBpisYxPsGWHWCTrepx3XHHQsmmdhc8qUpPeWc2AkP2x6R8JgnCw5GPn7z8y5ExP1dmdRRf",
  "key40": "66E8GHZG2eKAZCJmMg9sHEEZVCFTYZjgydqDjWbXdwyVfYkH9pgfUDjitjNHZib1GUFDv9eaz6kA52yeVVvoHg2H",
  "key41": "4gDzMXrweWxvKdog9264mbSoY8AAQBiEtEYchPkaxeqVH8i2WAP5W2GYLjvH6MCWm6P2cB3NnhHrdWzphvS2aEe9",
  "key42": "3Yeem3AtQiyftK5fjomrUzthhJjwwRraw8rmcBXSaXtcGMuyum3fNARCVSQws6ttZ3mGevNQpXiEEQnGo7NhYQHp",
  "key43": "5CiZwtLcxsz8WXdUHg346nbpw7xu4aq96ivHUX7VQEWPQNajFRzvwUCEZwB748KFZDaAnY334Wc5WVja18guWvPu",
  "key44": "4xmcztUfaQChN8X8H8iASSAwSUwkf8CxLAo5Vri8SVe6ZCd9epdZ2Tzb8TW1CjBcY5fXdn5gtRDQqExpS3PvzcS5",
  "key45": "791eJjJg2YXS1Phbx6F4JEGeBdEKaYhD6t7qrs3QbcVSCS42dFXNrkNcBixGpbmZ8TCFfX1G99Z6TCFp2iBRuy9"
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
