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
    "4mqE3sA5i2Mh5UvLdoRSWWZfxESDsG2SyGQusEFFPi2LMYkXskCW2xq5tUeUNpusUtBYwwPYmVorV26QoQbAXF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41xh8A5FV6f2J6iyMGStb1K5tgze4mMWzEj4e1xvhLy9fdp4Eic7Z1HADRU1TK83iM8Z99ig59vDKQpQ9YHhWvzE",
  "key1": "3FVSj5Qdm26K5rjrd6bshHCa3LHw7DJ3DBqtM93MxfzPeyYZ8hRMprCokRgc1ESk6FjVnjraeAsAat8EzcdW33eX",
  "key2": "3VtCTM8GwZNV2oLJonVRETZaboU6A4oViNZr2c3ppa1q6eLKwT6whJWap6jFkhwvJwqhjEY7efMVj1WoTVQvf9jw",
  "key3": "2S2SFg7PXfZWW98kANFLNhh6ofnJfpehFVJPuQWPUoeNDXJ8yqXXWEDNwwedjX8BRZ1scCQ7xicCbCAA9qbLFpKe",
  "key4": "3dSCiGuV3o5QiV4VgJsB4VJGVX3cxPDS6H5Kuf5jQTQkkj4VjR4V3xCR1ZDFCG7FSGyaBUNgRZEhAax6UaHjXaCu",
  "key5": "3yrhfBRGZjBFw6efm7UbYiL44axYmCXdy6pqTucBmkxjxs6EwHyGReBiw5MoQXJLcgf8aHBTN4ozvxbzdREZZGRU",
  "key6": "2FZSR9W2tZ84WqCQYing8djngR9dxLwo8fZNSfEB3fbh9F3YTeJjBpnrAWMoZSuLnQ35pj6E11TpodZteirsW6ZD",
  "key7": "2Pz2re94WC6NCJVSyQi3gMXj9vBchQJsNpW8SdLj3uJHkeHwnCQX6WoTZGb3AgGjcfCY6heAKMyaU9HXpgGtxVee",
  "key8": "4JConvmRkb2QPPxK5zYzr1gizU1CpC6hUiaDnSwUAaFUSLHgw9sccPaGEqCUDUEbfUHezqyx2ChhA5jgS9TjRGVt",
  "key9": "4mJr1gXHjyxKXC8AcuwheAL9NQteUXHno7Ey8eYGDFsTsf4s9NEvYpBhdARqrPZ38bii6iNVJyemu4XzVmfBTFEF",
  "key10": "4wgsDRo681hzhwvb2bmc1SwbKdff4ssEzvJXKuYjL3ys1Y86JxAeQS2Rpdxqo1UHewVcKmqz4n7JGKCrTw5KhLjx",
  "key11": "2A3aCnpv4upnyxMwct1oQWHzivwoKVat4oj3b43PrvtzZcDUeyt7PxcXndLiVieHi7WUXANLzpXM68rtzohDvBhZ",
  "key12": "QpiCDf6sTrzqRKcdcfvpApoPtVr7xoNNnAzTaoZZeBfWJFQ5qrUjSYuqTaxnMqqWhHTEb9wDSNjJnYu5Br4r5Qq",
  "key13": "4iZqR5XHUFQ5KT7iRajgdL7sE51W33juftDEEk1ENq99LuW6RwLstX8Jdsv58uE74g5nRaVachb79tSq1ACVvUFX",
  "key14": "5QDWuiix4TCR3ebg9wQ6ki4YQoNAX1wdneV5d85XAQUEnDHonXffbLAMxYPY2ALLKKaZGQiGQSkKY6yzBT1VG2uq",
  "key15": "4zsFGbiyR3JoXp92ay9Yagz5fNdbbLvYSryp6o4ax8JaFxFJUfWto2yrrPiFxiYaLf4LrSZKdLgDHrAYY3dAQzxo",
  "key16": "4JmsZK5LF9zeyaHnjYDR17bwfc6jTktQEn5cRpEgseuZEKy2BzsM8cVW9Hg9fxLWhbYUbm5XjBUsDf9GwUUYJbgx",
  "key17": "4RmxgEWL9oXCzCEH6CaHfQJXx1HWUW3JB6XagBwpsUHBrokssfUKM73ieGgpRAb3kJttxWtYfb7v9dfMaHU4jsyC",
  "key18": "5oKo8QBRi12FFspecJMsDTrHs8uz6nys1gRGXa4s6G3ELYK1brReVNEP1kKvqsx3pLLnGQkTBTAy9E5z3H51uh3Z",
  "key19": "2qp5DxwpmozCmVUa7MdXiVh3N5xTYKT4EJkBxGeyaQZ92FT2XGgrXh8MUvU1w7zm6vvnqsdkFYfEDQHuSDZxbEDa",
  "key20": "zLb9ctxnTB6QR22GqCQ6f6UYs6Qm7zdmpeeNfPawZovQRtkCDST5BSnLexvo2ExNG5eCUQnGzzFCYEnE5m2m8m1",
  "key21": "4jUFCv8tY7FsMtQ42VsnCRLLPbSnwneZRkQa6nvn51sPKDTkZZyc9jRdXwSNDbnkQtGdt4jxrtMTxaTbGXWGZrHv",
  "key22": "4YwnMv7VBCQi9H5itBBZFTg5TKgCo4jKoF7eGFbyf59UfvP7FUPbNRMcKtj4dttUVxNjTaLJZxgJ1eUpnTtoh4xP",
  "key23": "373CHSePxEeK3PWRqNLNWnU2YpxruZyNeC9oARZF2bsd5xyT4XTa8AWA2iFASAiS6UEnZ7cde6DyXn4a9NbXmZcD",
  "key24": "4DtnxKMYxYphbeqniBgVuW1BTptDWpun7eosfDNBf5z8ExZj9HP13b85XUP1kZbNCTwdKPQrz6XjgiSjHKmZFfnA",
  "key25": "3EMyPHLuyj48ZPBYXvMBurNY6B47d8K3B3LjWAH1iPxPMox8eLQa5G9DWstrfDCxJZKf8cfPWqrbt15235QV5EpZ",
  "key26": "3ZjFUEix95LxAm5aVCZUVMqBB3ZhWDUHwLPdUC3PaHELanadXXkZRXZLwGuEGB8enE6GRNAUCh9E893w1xgYvuNB",
  "key27": "5jJAAUbLDdsMFLNYrDTxS3EXxydyCU1USSU8NGPgboSDdkjcEacATZvo2sByLpZ5TzhNsYc5PVHFySTaM9RGP7MQ",
  "key28": "43r3bN5HoYeRhghxo7kkLaMockgguxh4Xq4MykXDtKHi9BwMd7xc6RmLrMxrAqzHBatf9w6eNnM7x3cRJGe7NEo5",
  "key29": "3EwuvpQ9Qk8bQHP5Enph2s2wqPnPqjsAHpiR8h2rnoXQRrXhq5pnSPYufMi1xWmGnA9vQWSgETAo9stuNVoCVJBg",
  "key30": "4dKjkiwGvDngTPWU2Taf5jRSRiDvP3JJUEJCaqq8eP5koHTV6LznBXzwGHywThm6hF2RLmPTijeyX8vrL8kjL4x1",
  "key31": "44MMBPragqK9TzWmCQ4YLjbaFPFLTHqV3hpvF2dxos149byQCRDmqT5r7sRgW7GLxd3bviMZRDsZ5EmvR3rUBKkq",
  "key32": "3nKnaW38xwS2P6CgGqA94GDNPbSY5LFs3v3kmdQoPLjwVD5mLPaLX2vHb2to4Fvw7w6ytbg9u422dYUzt8NDQ3mB",
  "key33": "4BLFXVvMycr1C92u1Nq5SjnphKboUUdZeV16KF29KsHicckDNRZpeTRFJYSofNjrxxShrCX6iATCer35Wzsaezfp",
  "key34": "N6ojRfdUPn4TXZWUcmddh5Nyi9DyoKJPiee8yoWG1yheVQRN5nrDPjS2iXSxhVtGEybrR6zGPEFViEKAEDNsUWn",
  "key35": "52YahnZFK61qbhnUxS8QEPCGSoSKo2sm3FUgyuFcR7Nn2SgAYCviytnByxao6Zguz21j6pdnRQxfVbeRjePiuqbx",
  "key36": "3yKyJq4ZG3QmgFuBYt3giqZ6mUZobnKNbBYXnBVfGDuBcuUmsftgWCiNszb1z3CXSZuMZdNLmvkMyfgr3zjGkukN",
  "key37": "5Ymx6mjzP6AP6cyTw23LZSCT2WcmuQiQjfguN5gwVrWFyYXdDW7z5aJa4Jafknqe1eaJN6Lfw9K71dukTZh5J8Nq",
  "key38": "m5aj4cTcs9bwkF5m9nMboTUbfREmzDWwg5wumvJKjP9Q27Ftfi8EnMwDnJy7ejsaGY2kDHDSuQnWDenkzdQyKWm",
  "key39": "ToqPDRmG9HezuC8f4ribbnjW7s6cFhAgYaMWJnGx67Wc36VZF5USJTP52smcuzE68mGuszxMAJ6A8rpGDwxZNP1",
  "key40": "4kVPFXwcz8TPenSr3j5yG98GzMDbjDzXevkVUTNT1SzWT89y7iDFF8syGrtRr5dCX9Fh3qUKj6uNG5d8a5B4CwJA",
  "key41": "jhtTsJgxLm66ttRjEHCELAJDE4MdKMvg9UDQVipnotSoHLR1kkQ9d9kBRzLM5torFbBNcMWfJaba1svJKG1YU9M"
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
