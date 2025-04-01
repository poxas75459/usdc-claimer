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
    "w8kTvQ1MrngCdfnWT2MKJ5rgqGB5fLygZsqESwaqK8dSbeHZFG9JQ1FjqCmA22kzfTBMcLSPsCGQ8UPHk1TMiJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TonfsZcMknCqEsy6xAtdGpYrg27SdFc5m2S44ZEKxVkocQAcUqa77WTMSMKqdU4uqbUAbSDfaQDwihWYEEPdiSJ",
  "key1": "3RDE61ENFfoANp5dqFMt2ejcTqBpZX3iVPLKGn8UqUKduKHSxGQveAF38hAWPefP1MqwJkjxcxvyyg4KiK6tVarE",
  "key2": "5YTqsgF5UgqgjJCsXGZGDAZGW2GoC2aHgUoC3h2S2a4XVHDZHAk9WPx98VgcgvCDyPKoazD3WVSAFkQjUweH6cMT",
  "key3": "2LaNg6tFKnqzxVGWX1bJNQsYkQ44jzuHahzPNHtbQ26j8vjg5kqLpoMTGnmNgwT6NxAQBZc3xkDhUa3tzqYW94rT",
  "key4": "4PFFHQcwpgPKBXT5V6F2UQm3osK6s8Tp9mm9Ut2ZrtVaaEwRz3yL9MVig9E1c6jepnxyPSaLUHYHuSSsCgEwHzUb",
  "key5": "2rGxumWnpNQGsdM2roY3GTNJpKXZ2AJ6LdPiAkaU7VmWrVSa7YiJHPBpJJPGfxsX6Eh8hae2GXT2uevSu4Htp596",
  "key6": "3eBAw5gKi8SHxEc9PMYj1qymn7wK9rkWAa9yM31xwpAy5ieZyv4EcsfhyiWqJ23UYWWFN1RSwWvqqQviyDRxLNqC",
  "key7": "3oMzWee1WCiaF3kRYs3uxpgUeWQ24Rrykwu39FTdUmU7iTCKwTrRDEznDEyZy9PGN7AYGRM2dmtQqPfFX8PNR2SC",
  "key8": "5EeToSZCpopvCpFjJciSMtYoZ5w47K1BG4MFLEvo4bWdRUgioq6qDYPDTGCAqZPKTgDJeeMCVrpFiv2RuiWdCNL3",
  "key9": "534E2aKVYv3F7BFC7sBVB91PimJFAmrXvPdYfRwpbX8KcED16YET7rpDJJV5SeMxJyU9krEcRUSwLPs8YHPaGSLw",
  "key10": "5W5PxdC97Wo6FFjmcsURgmHaMeWUheAztYGa7abLGR3bzNHkVxc6vmuUtyzYwXcBxQYc6vaPFfNVh3JRtG3ufvr5",
  "key11": "4jetUDoDk5fefGJtNsyEDh1i7kbF22t2b51bf8cb3VcaTSwaJLFxEzigZzjRQUMbnr9YGq7veSQ7b1zLz9LQR1vb",
  "key12": "XhgvtMTk5Cmw4eeSG6ujcmXAUz5EidC5UdtxJWQuqX1dq7A1j8JRsTK7FoTjECkydb7cuKvygYZvMWmp8KQPnLU",
  "key13": "4jdpfBSm6yAQz3cye8nBu7CftinvnPguutRDRexyJNgKTTVueXSYeTThCKXEAtH4dytW8tF2itZzqHpsharuGZse",
  "key14": "o9hx1hTBrvJ8fE1XtP9rQWCVwNQBaGE2jptS6xsCVQPHgx76mxtKmjH3Qiv42RyL8cUzwfJRk6zEMHf4M4Gc1ZL",
  "key15": "37h1PiBTYsHJmAPmJJN2pJKaPGrvfUf276JLpBbVxrtTHpBAmWag53A2PnHHfrAn3fFYHjXJrhbWn5JePgtdPutu",
  "key16": "3eekDUmq33wtr3FZYKaMKMz9sYGwv6Z5CaJvfBACFpiFDnvuAYDC7TigdJJVmYFyRjppga6Ni7fdDZZykoEnShNm",
  "key17": "5ecfhqifBftG6yGZSxpfmj8nPn1As5nHNuzjDBdV6Xh1Crk5srZXrN8XkjaJepjy9YUSXFiH4BsUBwJyRSBGQxbw",
  "key18": "2nxQyjd4J7nwq8PsYqBVhUJYMC4CtWhuoHULux7E7NJBqupd4rWKdJxhnuALrLba1fgUL8cY7FTyL5btz2SLGn76",
  "key19": "2HvTvAU4WsciLJF4fnA4tEgFCoQ9gor4bsP1aZGcf35tiyERjAjqU8qi35NFRs2xyJK1ZXidu5sFixvnsHMhg61b",
  "key20": "4AxTeiREcHb3ueTKvTXBVN7a4J9xf4xzYkYqVJBX6AzKJh7wJTXX22AhQ8Fh3na2VZZhcfhJUQgXeMNM9cXccNvF",
  "key21": "5G6nZX3RZexvBqSFxkdfPURgK2i7xqRucAYY9DmMUGw63J1o6tQn8XVHVcE5rxvMke65yt5kacSLT2DRLJDcW1pt",
  "key22": "3GzwGsJjpW6py4P29f6j88xZUy17K4orwdaePiVt2VwLi6UAdmws1JPuqxhmo9pXWMxspDfwUvWhkA9HBGWvCwJ9",
  "key23": "3zK5B1wFLDoWTrpBWFRGvidusFMF5JfiFXPLk2tg9YXKzhpCDrphMR87rkgKYDNkH1E7QS4yiC8ECGHGr8KKKPog",
  "key24": "3UCo1dGV5uMxBEDqL7fxJpKyToFxgnyyvfZvRJTUyTquX3j9xpcqtHmk5HHEw6NC7ucuxfEb9btNW4ntCaBy7t2U",
  "key25": "5FP8QFRaCPceenGLYkUvsbWEtfCxTiNND4eUDXbksf6uokYENXz3tSSGJvTvLvcKFG6ckqQbd9cqbnm8HQAE8nwn",
  "key26": "2owcaSNVDiRgmghMsbWCCnGfyEXY3NAA7TbNwECjDdNR4XsYhPxiSUX4gEAfdfZ87oxBsHtumTTJAHXVEtssC5iP",
  "key27": "UTrptctrYyRUVonYZ6YUKAeLPiyBCcjj3WYtLkW7bxNwUA5pgvgNcVyi29aDJVuTsM3jQKvzbjnmMSRe6ckKzWC"
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
