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
    "4QgKSuqvBxUPkSDbNHZrEdwhPPPYX7Gk7hyZesNhci5Mgb9kAwnsWpbSWxk9M5Zr9VCaqDJqQ7HGMLmTMyAP1fFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KbbAS9HDBDMjb22tGEMUfkmL2nBxuhcyuRsakTfdWNh19Sfh7KnhrsYX9x1ggbSwSykF13X7gM6bfGgfNAyHUjY",
  "key1": "4MtG3YAzXQfoY7RQPz142GCLNc5tmR1xkwBxNGc71LQ77VvaX1CXr1YQCbv7Kc4HRNBX5ZidWGmeL1opBkgGYmqz",
  "key2": "BUxeDN9E5MqTav6SXETWFN7m4NZQvFFXVtyEjGh7wgVSUMSkZBmvkcde2kCiYHXtxCBSF7syoAuQF4w3KLLnFZw",
  "key3": "4FySfZ68beMpV3kktC9BMkMQT7uwzShQejFnHSZcZ2oGp3zt8ZnzmmkwVW36NhPKq9bxMCw5hJtmBBfBp2a4HCWD",
  "key4": "3MCtrRVQqdZFAFCBmKcix3NU6oVmC2dj6WDwNQadMYt6wrTxCb4MAiQfzxLW5x9xtcVcSXSNesoE1oT3oT1rVoLE",
  "key5": "2QKv7DFVq8KWsNCLVpnUhz7eyvntoQnVRLesmf1UtFGJGLkUbGzch1xpcBYaSUn6D1Qa5515m8EKtfpF1Py9s4oH",
  "key6": "4sKjNBwUEChvMbEoG9w2V7dtdRNVK598Cf9ardxF2SrrTfohSZD5G9Mv1qHG3tN4PxBZmDabdMbU5j3Urx1Y2Gb5",
  "key7": "3FTa5EthTqtQZDdkEdiue7iSAs7MW22qAZXvsynsRuzjGGTDExGGcbSwJFpAP8KyJbeqWekcPRFebtLZS95Ng2sp",
  "key8": "4o9KPDdyXxvLYSAnTNThMr2Q9SrS61rb9vUc5KRxtqdrU96DKRuUxNUzKJMwccnphRUWtXgsjZSeJBJkUJqgMFeW",
  "key9": "33zmDKLuHu47D9tJfwM2yhGHNT7sMTXXTUxgPTWUHXKfQa5WbCsEJpnMe7god1pfDqA1ca9C1gAxBiC1NppdXN6q",
  "key10": "4Kh4a4akZSGsLC6mbHq9sYfmtbnhoXvBkyaQ7KCo6SGJKGQfBbpYxuqSXZpMHUKkLtfqfxmzSiyhen67svEXH5iB",
  "key11": "63mHSxM71ugH8uoB2HwR4dWZEMV1RiUUmnkSGwE5uTMU79hCVP6mdhyJJA5W78d2N1ipQCNeHiiwSRtz1k2bhLWs",
  "key12": "2mvMV4McsKKDCRy7uKv8xchSi7MRbgBNXo9MoJRewQWmrEWXkAb2bLGs8vm49ng3oq4SvgtLwWUtnaqh7PKbqpUt",
  "key13": "RQK8hzKcpM4VdWSEZeyquRymWxs6kaCevaZzNE7FvyBmYTFd4m3BNytWCQPnND4X2C9g3WPfBj1qinGc7QaQWNd",
  "key14": "3jaEKddFk7u8b2kTG4ZNEnQWKZxfjAEWF6wfEHndfsnaCD742qVyftk2qbXHmq2mNCLjVJ2bcGSNkBdLJ8rxpUYf",
  "key15": "kuTNTsxyupZaCE3fJQaayWQQ4Qa6QWUamJtXr7NyQx1XzQwRj8NSPQNY2zHxk8mnXFEirjyxwomJPnLXE4kFB9J",
  "key16": "3pRW3YBW6ReNkwLUSqFMGDhXyWQ9kt2aLGuJR3W9DrZMLLfpf9RD9xXyFXZu8UKk1hg5eY4NHk55QBTbcjY8ei4R",
  "key17": "2UwNoTXH1x4QR7TqYLUSne8e3j5vHkPkEqR6p38KvpguQfzFBy5BdnETu5gZZP1bbA3ATGHZfrnYfWD8qJwLR3N6",
  "key18": "3TivXz4oChJbtN6WxNUmuw3rhpYRvBog5MFF6TxP2J7kFre7KADKaknRtaNogE4fEgu36LmQTaV5zQf4CjLPhcvf",
  "key19": "hy2rEg8hUtdRgMhqyCQDKe7E2eL9iMXR1Qy32sa76c5j8kV9eTujHjkCj9uivoGLtgGtToLyeMgTAeCkc1A5yU2",
  "key20": "4W1rHo37229nPadtJFhWtWDmiiZAHyL4t6c8w32c1ybFSU29ShW2XQefwVNwhSRXH85Q71qUEFZrvajVPFyb6VUt",
  "key21": "Q3irxZ6DomHrnseN6W1kLRgQQruynCQYfk2p6WCon5gnTJuEYJtLaQndwx2aLGVpCi8hGfN1ozg1G3yYbRbjUHC",
  "key22": "Pn2jcRAPDRCj8eSJXHWivz7k3a8pxmj5u4jYrEFS1cckeozs48hCunqVrutS2JZR1tLXoLbjaC4J2Nq7bm5vzg7",
  "key23": "sqd4YD2f5wsirWfsizSbGnDB2PcCWdVTXgdmjXkv8hrqSAvHuic5HXubERAJYd2eLWqfkqtRuVcJ4uhWy1oRuFW",
  "key24": "4ZyDHhM2CATsNMkqo3givbG6Wmbebiu2E1VQgk2DT1TvDsSkikAJxVG8bLbSDMMKnaYrLf1X9dEBX2zrU9yZ1Zab",
  "key25": "2A7Tb9kuXNTgfeCRF8YF3u6rB33x6rop3w5EAyzApnnRm6SNjP4ynyVpfaLGcCZ2hDDjHQfjjjW9hMVyd51vH5my",
  "key26": "2cmVXwoCneyYwzWDvvVK1TFQoR4y45wMneJAPdAYtgxyD7WjH7okDnXtTHFavi6G2AGHdWJnQfaGhBMDY64u9YGW",
  "key27": "5GukW3g2ogPhNoJZSS9V86BYhE2ooRv77eocMzoXDyQPM1S64hswtEZxorZD2ZMdiJ5FZsCpZz82MCxKbmL1CkLv",
  "key28": "3pNBXQuc8y6JKLaWm6wW3SREaNLxYicccdWo9jqZWQ3jzuApkfN88WRF4ZDimjPYufZ9uanMay93bdvMUkTeg1cW",
  "key29": "3NKxGcv7YhxoMP9V2YieYsrAsTJNtvszQfBdyo44qLrQexjaegE9dhVDCui6k93pThkqTxe8U97WKDXpp5jPaF2A",
  "key30": "5Aa6KkuJdNmga51imBDKgyCHXxdkHzva1c2b4XvDNfoBd9fPTvunXCSzxXz8j2sEfenWrwXG5eZ8GEyBkGx8hLXR",
  "key31": "3VkraJAW4HELMjmWDT8ANjF8LgYowRvJzCXThVwLxP41hFAkf21iRTUPcBm9snfUvjb9wheX2cXpzgSodKN2mUdj",
  "key32": "3uT3CFSZD34XgUh8Yh3nTuj7ivehbvV7hYXdr9jMXmN4qFDomj9L1m13u5TjYoNvzpyDYUZjeWiPJ9AShWwmYmfT",
  "key33": "3RPJyWZZE9fYFuDu8YZoGrfKMAffjUG9YdSH6jMKcTWE2kb1kktxUGT8vyxoHBtMjW3hnfgZdxm9C3f9MKumUCPM",
  "key34": "6RUu2MAmqRNP9JpRMYNPeyVpm3Va9DrXKpx5Q7cRZ5gkbEvHUXnzrxiWPaxnGBLz6ii73fxGVp5d5sDhKDhW5cJ",
  "key35": "4LvbtMUMPhDLM3HnEpsBojNkwhz2pX5zYA8jmLLninjGs7uPAnG4GnavitW892vsToGiorTKANqi4ZBWrU5BuFpX",
  "key36": "dDXVt9swgCxhQXZXFtCNAcg4LGszXgBr5MaDCuu1b9MhGYfx81taM5JtqEmZaxsQMG15Nc21hjjQqpN7u1BMpHR",
  "key37": "5rCQr5eDJyrQTo6XriPtiWPgURFkiZ8B5qx8d8asmjLhkXUCLtKr1xseD7PXisjf1c9LMJE4VmcJnZGYKn37fFYY",
  "key38": "EUh4oCAphuwR3hQCWsYE9WQeJY4v2Awa98PH2Gwc15LKLPHhGDoF2vvFUd1ThKP16Smh8a25JDTwznZEx14t6hF",
  "key39": "4njEtCmsuGc99oxz2eZqHcFXuehUACwFz8pJhSGyW4yP8JhaGiPTaV2r5t4BUgWiua8nC5nBLMVmLTVjaQ55LME",
  "key40": "53g8sNMxygiDn4KWEkdvGziTD2vkBngw2uZgCwmZFUsXoaxyJxyeJ4yCUJfhVcjecgCuvoQYkniqcmXkAi4JLUyq",
  "key41": "3Ss9P1nKTtk3D2YMvako6JhVJTtr2z5HpfgdJ9eTWJuTh8fabtPk573nKXoxMVLmefVfDPeNFz3UyNYPFnnATnmV",
  "key42": "2WMdR6TA8LDWdxJeE1cjvYVghZp49zBQ1vVqkU3pZCfa7JvLfZWxUHZhPexMZZKEKwMPkQ3afaNDS7QRNFLt5hXo"
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
