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
    "4EdjwokCArw5ytjm5BTbDysyXVfBoB2QJVpcAmk3inhV8jCe15MreuYR68TGstBLzFKEbRRmg8zM5b7hCUxsgh9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3beZLqw79ghbrUq1hByeUd8A1Umqcy3jWa54Ga6imfQzYG5pZV6p4MY8YxCvNJS2a3Bd6VK5AySWjsKDPZew8w75",
  "key1": "5LMzpEaRj4veewhLMdoWhq9inJw68ZWW2UoFqyY9TpnAGYuJ4ydeQ1f3USLpAm7Pad8nt8G94iXooVHBy78MUkte",
  "key2": "yRCEMT3mvUYzVWxdsV4sukTWARFYKLtZsxqfVDNgBgYbzyFSUxQQgHLaKgpY5mDgFWhPYaWSX3yeSr3eh163Spq",
  "key3": "2kMLuQtFEy8QDK27UHspUehNuC2GB24Sh6M76UeTaDxtQEBGYjekCoL3QZCaGtf3A3njGsNFazpME5xbVaj7ZLPC",
  "key4": "4U8649WM2gFYpAVdT3z54UHhMzjTnWbBppz8gjGoPcQ4e9nEoh1oeyyogbKtcHuPrYnsLkSSmfYmKooTfXbqhd7j",
  "key5": "5fsCdgaahyWXCrB8t2Kt6uxbHrScwuwk9DrSuu2V1EmwT5ep9dJM7WkqfZ7R4aD5d7uqwhxZJriuHYGHoA5Z9La6",
  "key6": "42ee91VAMaSfPG5q1nMxqGuxX6Y7gUmXLocZdFEJdwkpTNBZ9rza6EE7npobVKJEgHrznPCjeXQbts6WdK76Zyyy",
  "key7": "2Yj44yqUZFqGLQUXW4mHJ7YamuGfSA6DFJ3LUxnUQjEU4jpyWC1RHFkbeioXF13PvPDSgtADQ8zj3v6EqKModMPH",
  "key8": "3tgE2uxKQvjYGEiyyywFKaV31NsAj7HYs7mGwAAqQ84cMwqx97C5QHjWY5hHHhg68v5sg8crZDYj2RLV5YSUP1zs",
  "key9": "3LySXW4nLseWaknQKVr96oPZLCKyVvtnatvPtuFFkwoyDWmnhnm2Y4XmJZtRG1eBdFP47DJxA5YbUTpZq6q2cm7h",
  "key10": "4gTBjRCsQwKXZa2yLmMUHUiDBJh6HVweDoLaHLjXfDgmEct7YKvvGyVswzeBGGyvGuKfXshquUqVVYraTbSRYbgE",
  "key11": "rewWGViUdQJFdj4XnwtZHzFPi8caccHZpgFTh1vEhFjJZadtDZY7RXfNQr2u9JbuxRVNc5yzRdKzFSuG9F24BKR",
  "key12": "33TWBte21QTqjaQWGeE4uYZwQMCimaAZtqkJms6ibjXHc5NnbRQo8QEfTdvTsdPSrYZCWLoUhzEJ1rgasqyksTPh",
  "key13": "44HVmFZcJwTPxpEy1KGqX2SU8FiLBnEZ7CaUruhdjsMjSKN8UiMWCNrBLUy2uKfbp7wt7YFE87F9PYoDbvahTE1h",
  "key14": "3UzzBLm8B1bhWA77Xq5DXEyR94p67xmnDEBx1prfkS7tmEMBfpYtYFjSuaWq8hzJCBSuqdz6yQ1hji6qpTvzgYBh",
  "key15": "4jzzgkAdncQFMZy2wRrcUUGWHdM9R6Ybvkq4rwMXq27FD4byC3YCTAG8B2myiDbmYqKq67wKTrXCNMTUcVJQyG94",
  "key16": "2xaxVeSY3kkT2idSXEL96irWesq9Lg9AkUFUNgUpnSW2au3UyDJQhgSu9METi49cg1Zo1Nh3iRGPbq4ypsNnXVqZ",
  "key17": "3WTmrWyyofNPdxFFGTqtaTx6A1JfKZt69EFBEmMvixCe8qa89rZuosFXM2GLmUxXM4jShHRXhzRwLNxb85WMVmaV",
  "key18": "26aP1BExD4cfPbLuYvdpE9UAhiYGLyCHkK8WaPTr7G2gi3xrsgUhMA7giMVb8Yb6pTzGSEoxTSt7z37LUtqHqJxQ",
  "key19": "59R7BJfqRiQugg7JsNLbtK4F6GVkmzRbn2TNXfTJdzEVVgPFFGcaL674EvZyRw3eMRUsjZ3uUpRwv71zFFJd36ch",
  "key20": "5mSp7jF7HK5jVjh9UQuEdz2Q5dn5g8A6bLFEWhK3xwTaYSMkudqJKXDbe3KBoQJ8mpHEL3fbCDEGdLZtp3ef4JQ9",
  "key21": "3G5LfeivAGRiGJhfKwVzSRdinj31MKTjXyknkWd5TEuDCdyKetnNMG3gQ2JigDdYwU9BPHdqxfJ85t7ZeBYksAbD",
  "key22": "5P7tYLEL7f35bwt3cCEDxcMCPryD8LWrbA7vXET3Xvn2Zugu2cxWvgexp8x3P7dsVGmabgE4nF3bMfrVR9KQ2xqJ",
  "key23": "4w42Qtt3vVm7BfodTahBNiqKccV23QPKRu5U68eAiqHeGZUhFJRrq9usgiXJpCNxQ6oESL5zUcHssNsy8Np16F9Q",
  "key24": "5YJBg3eiodZ9aYMpr2aNX69w7P2vRH5HcQs2xoJFd9sAd1kTCsZXvYzLJ45R7R6f7o8S6xdQMytn4q3zdcogqghg",
  "key25": "krjA2WYbLeSugT68VqgqfVaFzKadaNWtDRKrvvctb1SiZCFKA2u6FCbE1st18SsgZuB5HuG2vJdiCMq2FFRsMrH",
  "key26": "4mgpH58Uy66bMSum5udSbTE8EKjwrZFGjwrhEj5DkkhTRAUuxMA2QrfoMdrg3BxiXEfcHofVST8Uf8Tf3Zk3WQSj",
  "key27": "2nD7ke1fGHGmH9sSqBJvVDTTjV79iLksAU56xETdf5y9C4Qvx166XTdZLz524fK3AvYy2NbUrtx33m3FXnNchzMD",
  "key28": "248sAg5CCGfoCBD4ocAq8QGsmZ8uNZ8z1zYHGRRtFKdRX6gV7AgnqEGAN92DUy5vE9RKAf2DBtxGtoMHxc1MdMt9",
  "key29": "kzkaRB7ebKywkas1PvmrX5hzpUAzxC2DSBzahAkQjCuAAEwkKafhsN6PcLhP7TKH5Zt5dgRurPFu6Ycvk3feYmB",
  "key30": "596JRZm3hE2M8cm25txrQwSEbSJ5GSoNnE18hQA3YYLRHNPbJwfQV2koCpPqu3pG7Vt4A1yknPGGMsgVsRCScuMF"
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
