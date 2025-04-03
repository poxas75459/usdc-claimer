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
    "2sJQ5DFzWxTWmhBF6WejT6PCD3sf8LgQcEQLF2b9TCdnTkoKWEBzepWU9bmjStcb7KYtXNUdZKCJQQ9CZsTiZraC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3udBtT7japgvLwkQa44nnb7Z4EEHZxn6iMsxEKXrVvJ9n4sDv7wQbEEdGy1LaC43AnTpPnqa251dA6nyc2fgxQGG",
  "key1": "5ZQWjXD2PQqPpYXmHWbtoK8p7UV26hgBrrBnS9ygrQFcUd1KKywu2ZbWFN5ZTCgW15r8vnFKST8iX5agZ1pWFBSK",
  "key2": "2vk73g2mZXyN1yAFKeLFgJGzXMFx1xDYek72CGCG8SGSBDo27rkp5m5YQKvMbzLXeS3e4yFa9t5mHDM2oStSu4iD",
  "key3": "DNV5rytD5JQqCX6Kext5yCQivYdqPQvC3vY3V7Fi3nXtSVwUvqWwGV6f3EQLd4jA6HxxnjFEzL2JA8UuAjsbiBA",
  "key4": "53aA4e59HfSQsbZCQmgzu8rKDUAasbRxoU3LNaZW4d8TmwLVDmvTW4crWuGD3gmXsQCG8RqyTgn21FTdc4TueAY6",
  "key5": "2NBPRpg7gKnzuwC4qU5D8BMRAjvfRSM7u4AfdkNBkr2DmWoGwdeX4Smwk5WimCgXSiPknzi5DKhXfzm3fBUzeUf1",
  "key6": "4uf7ApF1Wh6N12CLWgAXngiNjLmJqgtTb9fXdkDjRuCBoY8nA56NyASZojoCYzwVoK3B82viXGdfXpBn6xfVWWP4",
  "key7": "5K3CP7jhrhQytR1UmwSUwzpqQsWZ46i67WKuC4Dh32D3FYi2TYVoALXBLMz3Jiin6MegoTpLfeyvoF7zKZnNyL2z",
  "key8": "2uuFAiA9ThtGx63KpD1ZQ9a5RkPLEvAPJmsvU3WpN122VVdxski9aBN9e7aCYcQRyX9fUsPe7LetEVcGNf5QgBc1",
  "key9": "5sJRQwc7Vg1XpAmV973ZRrT1NksHfWhUAMvCpLnuo4ACNbH4XSA7TD1Xv4Vg4U71cz9M2YwigiWoBSNnn5VGBi9Z",
  "key10": "4eXFbbvCaeim3ZKGVQwN3aPnoe4AL8syrE7k5ZptVQymE4pTc3nwwBNJeSZHigmEDJD92xoBJrQD9aoEWrqGZNMd",
  "key11": "3y8yGFNCdV8rRCegu3gV8REAPDQs8LmSGFziQ58WHW8CKaQKayKKhcj697xDzynreTJixXjaNZw6dPhvZZXcNsZZ",
  "key12": "LfqY6eddCPEAJuuvhUZ4UJzisednMJxBLoQoxbSzAebRabm3a5cy6W5Twxp6zbLmzGwM6xcKyg64gUGEdCgQijJ",
  "key13": "2d2cPXry9je7qqWXkss6DciknYw9PQzZroWQ3piigsTBmKGW6r3oWD4f31WGdhByuegFVJxLg8JibEbxqeUTRoFE",
  "key14": "21Y8BPANXTxxw7rdhXvzYasnbL3mSYbGkuhsYz8uG6y23wN7SmsMjJQRGTiqLzvP29sLmout7mZaPAUEZHhiPEnd",
  "key15": "5Ho39e1rzqDFuoBNiLcs12bcmpgNS46Q1dsm3mHRJF8ETbdURSBiXaLweyH6qh1YFcLTiC4cHdGzEWqc8BWiDtuY",
  "key16": "47qZ4XXKHXQycc9RjBSeBarLC719qBEqrTwvp12QNXtCoHmQEGcPKQkVLLdKoED6Sahip9mMxiH9RcXxka2Bcshj",
  "key17": "2eFejcDbc2dW8CRtnVnUm2F9Y1qDQDTLMm2kYozC6rYZmoTpz54Vn7FFHEmM7RiYZ9UF7J6M7SFBHZv9sjyutSri",
  "key18": "23t12o7TGPpXEdvQFUqyvv7UtTZbmK4EeGbAbXZ5MKNstaQ2XPyCnKueEv2m5LR9Td7HjpD54hThELppuAjqWrpe",
  "key19": "3iEeSGyzU8yWXHSSwWRzqSyX5v2Ndw571MYfgaMfRQ34bEXe89mJRUUguvcR5FyJZ7zV5RERqJvWEK5LSkCGSAhM",
  "key20": "2CeHUwqBjqgqnWBeX8dyoJQPMFHY5Xt3cAqi1ryfaHakKCcWNUcBKg6oK4yPu9rjBS1UiwhwAhw5ustcVqCBfHLa",
  "key21": "uYNzWsaYxw85fQ7uMZXSYX2hPBvPigBhaPqEKSJGqSiNH5zpQxvhrZkNtQCmDDqXG53uvDJEhUkn3gJrzf1pe3y",
  "key22": "nFn8C3Zq7inBvJPJwfiDbFLCUkxHus7GkB6r6x7rMfwZ8eTnyrPvEdEiYbjrSQEcAE2WMt9UcQeZU95LKC86MXE",
  "key23": "4f4N7QtTMhW32yA2DRRTXb7Rdk4PX3wA88mBafw7rLbFmyZVKSNEdhiAiMffG36Tr7qzK72RS2pmGmJvVq8x7YYX",
  "key24": "3VKeCiu8399pagXqxRmjewAmuTC5jeZDdv9Jw6s1BobU58sewrGEEnD8uNMqUtS2JTeNFVJCS72Q52YVsD4aRxCi",
  "key25": "1TySKQxNaZP2cn5WKtyzHkecDNCecEBgf7qSzL5pM9fjhyGhp9rwZWvATPPMsfGLEAoqw4j2CMs3GNiTdVJeNHv",
  "key26": "5yARc6XDK7ecF7hhM3M8ceinHgK1HWMqVsrLw6tWtLLbgBcfQ3ffWwdd5EpKBfHD6jEPrX4u6oGx3je92JSwJLs7",
  "key27": "3EPccuwLY2zwtEbzSxK6vdZfQrAWFK2YB2GdcsvdNPuaurN3KEia9LQK9S7gvmnyWDUJELQRWJDqqmMqoaZNdwwE",
  "key28": "5pvVDqNNDutqdz4Tctyf5VvuVHmgTYHA8V93pdMTjFNHLGSdmNZLb2MisdZK4d2GV3xPhWjoAmAgBvqa1BNBnPzN",
  "key29": "39mekRhp31ejFY2whNqtj4uRMDUKSPsUQX8Y1AjhR8xP3ag1pTEAV5bakm8m4NiJRx89MSbB9kHSfP7wye2maMRD",
  "key30": "3qF7GHkWtBD7E74Cqs4wuL2jd5RVNZH1iWGkHDi1vH6JQbyGx4nnMhjxj8upATEAmAFrfXndUgTUMhG6AqqpuvMc",
  "key31": "41a2rWKDimVx4THjmjL7CT2YER6PJdB8vQZSiZHfdq6ET4bxLH5FXhRBibziLmaYDfTsJ3zCM7eT1JAiC1RvgZca",
  "key32": "4FCC3j7PwHgVJURacmDEFrKZmbyrjxp8D8RyhDL7oDcpkzwgYBAwE5s2TCXZM4yEVhLCwgCmKTJB9dkjFDUiRtzM",
  "key33": "5hmwMYjzrJ8Qh4GdRRF5VVv4bv1su3AJCH45LUpr4mRfQyEW3fT9n9fQoGW7Nt3JUednG9HTSLPerU2QtYLRygR5",
  "key34": "5hoXiZ4TKLssRXVJc5ZHV9VmWrkeh4UxphDQnDsSjgMMnLYkmqTstXfTem6vMw6TzdCsX4Zyyq8GTUKwEzab1yHX",
  "key35": "3MvXLJFJ9nNQQcK8LE5BJo1JrXSnrUDm7YvUNo5vC95tiv4FHjPSNcUsSzj6Xc2hmqZ9r7PExjRG86bgk9yoGY7F",
  "key36": "36zW5LK32RXaZ92YZgK7qALU16BvYnJCXeyY8mJ66Bb4GGnVRZFRJxrD4ZuSP2imXksFg5hhkraJvMx5hwMtuwm8",
  "key37": "cgFUznc4yat9UHFDppbFyCqRy8yvcQYhCPc3oMDUEkC1uppSQe2PC7oecqxSXVsJ8ofDpDW2fytecmQ6PGQfPQu"
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
