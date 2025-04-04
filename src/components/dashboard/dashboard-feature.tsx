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
    "3PYynhr2QXCSpWiCTq1P94fMsM4irEe6DtJz1mSoMV2TuPhXqSScYi3DsB6EAgsHBrq5QuwEXkvXd3mz9SP6SCRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ncbGuuef9B9gF6cvJaarENR6Lq7fQRtFtHLAChvmqvPhY6dJ7XYWZP9ET458adTPUoyohCbXpEEBCgyCYxFWdGv",
  "key1": "4bxv2KNysQVeToxgEUCqMt7bcxv4q9ZQzQTns5gGXvXupPpidvzKm1465A6YtVXehUX2B4pDTyttDafsLeegRjNk",
  "key2": "3CmYySg74KNmXHbrssT6N7e3CK77uJmC17FLr5hG9LcjZvBjBdmnXynbz7YZXBaWkFkxDbAWYZhoiu1ntw9ezfvb",
  "key3": "3LtrYXJsdSUKbT2TCHURM8uPqMoUhKQWxTtA3p9M7VrE5nV8LZHyCGgiwqaRfjwYPcVLabtG72r8xWAhmnJq53Ka",
  "key4": "3P25k9fASgpTs9VyDNNrPL9t4W1uxnW3yuwFBxAedjU792hsbPXaLau4uFgeZfTsVc1hGdz6eZtUedYQVMuXD7in",
  "key5": "4JfaaC9qNVspVGPPfu2DayJRDDv3fhDMRiAaVNzDPpkyYYqBQcGBmuqUKnXvNYBXwjNKB8BciAx8vd9z9Bo2aK8e",
  "key6": "4bVB669bH9UkZgeH7zKuF5Z2SWQz1vT1XbfdsDmbntggqo1zPNTLbT1AmfkhZg2N2HfLyvDqwJzaiuERSZPyrqFU",
  "key7": "2MZxWMeZCisG8xXsGTpTqzKQKKfTQ9YTpRKDrNmCgM7qt7GAiFY5dgKQjr2eETv2o9Uang4hPjFtJDhakaagbjbc",
  "key8": "mGM8EFDk2AP8eHkNCCxEPiBC5ULR8XxU6g6cxf3spWwgMbUHH2V4WfaEMZkGDDysd1cNgb9Zu97ErCprjpTu8WX",
  "key9": "ZrJay9KnPh2DTjb7NgnepY1fh2fuyEBaATBpFu7keHwJa4QFYzvhjZRhp3tHiRqzzhsQWxKDPhWGk9x4tE9qU2R",
  "key10": "3dd5VJAV8TfhGAfK95LhWoZqJNDpuwR6KukGueTFddjXZohLsyJuyWmTBeeUDkqN7ChUdanFr3b8sk1gbsEZwzjY",
  "key11": "5uF2yXY4a27Ji4TE37KzV9Kk7QJ1Qx38jo2kBS6PdupvuPJMZaWEUABYwADKVjWZ3mrK7ByCJKZB4G2gEgh8EXzM",
  "key12": "2DF2pzjegScy9tKN4TmuKx7R8gPLit4knYJWUmhHjhc9W2UHjQjPjuvJowLZp64f5ugepd9ZnyyazxKpxBkpsDPc",
  "key13": "3rX7YDSoz4mDRdJHRGqH9K2e7C3HhX7Dx6KVq9SNn488KfogNN6ASYz6bkt4UhDSxgMyNM2YD6grv9BaTJCR2tJp",
  "key14": "bh8Gemv3MksWkGUTiL7C5GgKM3UdcysFCgGFX3gUtjD5g9xH2PH9rk1gTCPm6XkEc8TjDAU5XvsZDttis6CfRn3",
  "key15": "3rmpxe5rVXugdhpdSeo79Ubx63oMvxvreBkNoMppCPrEVG2gxt6Yuj4Kxw2PNetgYeH3osNXJ5fvcb2daDHHo3iW",
  "key16": "52vAW9omvXknhpQjTHGpAoyf4gB6c2pJapNJPnwJJqMHHpBBBoynTYQ8zCR3xHzaZJBVm2oqvSfcGq5vBe45mWeA",
  "key17": "5LiNgs1UhqPNxu3kiKfDktssUQjkRer7TaWBEJRTf8Un2WSXdYojUnjPa7HReKzws1JNZDKBhAtNsnnFwhJe2VkT",
  "key18": "5SqEWQZPhFTtSJZC9juAzanQFmY6MHttt3oAMWpfhzXGUjfjKNLAB4keGJ4ckQHkjNQeyYpNRdN1NdtNL951oQWq",
  "key19": "4rkNYki4BTigp2bx2GZ9Jkwff5deAGL6Ddb1Q7hH1DTYAkkVbV9CsdNHLXDvkKmuiZF5tq6mz2CSSyUNqhynsx9s",
  "key20": "3NQd2meCi9d8dw6aKVpfyZcSfZvkN1tQThsVmJNx7cZbkoExob232THEHpJgASLUkjMfVZc1fXGgcf11QC9X1sud",
  "key21": "9tkQZGKjctiRcfyBHkbdvkGgLjRK68rHDDqqjbthtD6GxUqtYvnEEzokw4MvkjNDnG4eG67AX1nEsmBzM8cM28f",
  "key22": "2phtCT1U4rdsSqGpDCNemCsKuJ2EfbiijzrdsT6YLzyXp6q48dquJ7SfbDSUZxPuoYakogSrTdTc3Rg15eR75wxa",
  "key23": "4QzMWZGr3FEu3tgro2Z7xdV8qmCm25UzSmCZCpJTkNaoym6rVASz8LmcqqkPkCUnr13pt6KW4cVCmoJ7MEpeBZSv",
  "key24": "24oqCyu1ReiuTkukA3oUpCzEZyMBiLCwFwYFqhttThsA1RyS2rirAKqWiPDpmzBKkoQbhnQCf8UNqCrhPQ6WUzHJ",
  "key25": "2i3nG16dzVnB2XmTraCPNtGVjQ836TdijyZfs6f7JCD4nieuRu6CYumMxHGnMsgBdz5megvyZd7TBo7m4YisRWrd",
  "key26": "5whmNW1F9NF1NrKXMB1A3vCDARNvSTJexKrSBBTTWbmwtybU7TccwGtL2YTwgbfXdV9HaWHywmXx3QtQMga1Ccbg",
  "key27": "3oeMFnJZMYwF5by4CcgbLUAU81PhRmtQoZyqVG2wYsV7ZmXDz96YgZSZdAEgLUMrZt1qTxDvFpMHeEsnqukc1jYz",
  "key28": "3Jh3Gs67soFX8h7KCQGcamzZC6YLrccBFU254Z41sAT5ManHhZwgo8gbAKECo8Jk6cQsKph4GT9Neyn2X83T5zAh",
  "key29": "4CFQ59PNktmDsXjc5QynkWXqcKKWF6tLRMNRh2SY3HmFHCgtjg6bZCcpX17oYtkhDSumvYAZf4Zd4C6HT9on6Gsm",
  "key30": "BgXqkyeXGpbEQ2h7LgJWQTJApE4h7815bZZcBxqmGeXVnL9zwhcbumbfoC6SyTwsPEsNLrYM4aSiomfYZHuqyeR",
  "key31": "2V1MLebrCsT5HhqRwFSLEvT9X2Z3wTvxT6h44AUvCi8ZCdx86oBqRQj6ghU3p3KkjvAWDpPBidkjMKY4NFKAYwwQ",
  "key32": "4b4BXAMjfT6cLj3UdwJviCwPwvWbPtRoTydTfwDWfQLCBQdbQBRM64QddjEYjucY94Xjm5r7WYcBYbvarRThbHWk",
  "key33": "55N815fcTf3jFCii7XXUieCLioxTY5m9pNuw4f9guCbLkCA8PjbNeMn6ySBzfa5LpRV6TEPv2chYv95Tw68Qkebv"
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
