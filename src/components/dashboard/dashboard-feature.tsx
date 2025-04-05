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
    "2Wvdewpkyxa9KhWXE2iXKNSETJvpivrUvKRBGZZ2dtkdSeeC4j5XCnMXaaVMiChAMUsiznaXV9Q3FKnjCRLFD1cB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V9UT9MXNa8n9GX1knE4u3ehGZEPPQiB7GfTjqiMtEkV9ErbeJKjL1qXBoBtN2cTFcBqpp8XHyrzPsUnLTco14xx",
  "key1": "4Hky4o7S2KrTsHZwp8q7qjG7f9epMgcwhW7UEGZ8Cs5ftFhXayg3A8JFD7kajhH9uMVN1WdHh88ZEk43qqx7AVH6",
  "key2": "2aeM6B2pF7ZxBp8ooWzyc4xufmPfD36rDSSvMMJcy1SUGFHLyad26qAWoRmmYoReuJpcKG2skhmmTCbucDodne7o",
  "key3": "4W4ZSnGcnbWGCtUsmm7z5diPCax3NXscs2Fk8mBoR5ue7buRzqUNjd9PtLqFYpEJahDykphMUsJ6gcmrJv7vaizC",
  "key4": "3KRKNTLJhHk2iFmb7j9hMqu8pEnrWetUwC1fWMqkMvhy9kPfwQwWfe4PGZ2NjBPtyELZUpBhsUV2QcHXr3kvavXe",
  "key5": "46XMvTJSgKsYFif6vykyFBKKCx1PhniuhQcYUrVVfw5QpnJv2khs9qdGSo7KtRALS6C7pf6HVVw3r6bi2EJGWDXh",
  "key6": "JKrB3CbF71x4BL5zamo5SoZPdLdXCVtAjPT3gQhqizpiYU3AUEUtUU4rH1yYpaisx11Q1s9ERKECQLuFA4nWzEr",
  "key7": "vHdp22SPQDq42B8mxYB6x8AAMd53hqnaF46Uv3thseZdFiCtQTZuA5irjN1Psk424fQpveqD7pGHyv9NVroAsX4",
  "key8": "4w5boHsj8pGTqCBUF5bDJ5iosjTuZ6CpobWDGtwFzq7ZWgXhwBb42ZFw6iaRDKjQhThagN8yzAYmVUFzNStsa24y",
  "key9": "5bioArcuwrTdq5gHCmqNYqt2RVEY5V2o8n2ZNokq4tWwNFbUYLiBZxgc1kVLFa281n6NwF3CFJH58XEQQjiCP1ch",
  "key10": "4hGf1U3aMuZP2uTqjFp1mmWj4YrMPE8nC5D73TSiwAaFm5WxXdSFBY6KH45SLoWojwWqGW1Dc6ahagPPGSoy39hq",
  "key11": "3dUB7F5V65TJpMLMnqrkTM1JWDZC2jd4XfuTsuYPRD3sLFCA2CAKva4Q43hjmRK7nkzHBs291zCVryqtu2yQWhbX",
  "key12": "64fAus5pmjegcZH6TvSt8fZcUSHAfGRpCDT6QnduKohuCMLGfeiXTd3Z95GKg4MA73uR2v55sEJBQMEHWDXb8TKu",
  "key13": "1r6x2hF1MZ72XqnyVVeXihFg9bzsJfugX1jZQSsBZaHPeGYTFUFnxkPxk46yvKV6wzhapoc9dBvVzEibxLAaEsn",
  "key14": "3GNmk64kmp1CXWNGCJswCtuAkX8QDbRFmDiJmX6fF6oZNPByGLSBZsCzusqBSRKPsoGjt31z6ibJGjvWy1R7yWD7",
  "key15": "5GbqK3bejdkEwhNtDPKc6ziVXzaHn1WeLB1T2Dbn5AbNEEWzA9zxZwRT2LoRrNtidYvj7Wv32miQfhpe1dhTAzZZ",
  "key16": "5Ryb9Vy2oPN9iSXk8vRqZsw5NZEa8HN8mZFxKowYzXkNnc3DwpX6iowaVy9hEuvedCibEsLCkkC3ceD3AjiYCFea",
  "key17": "5aC39ygQC173EfaqPAStYgqspr9B6pdg7731cDRC4eWcJ75HNijh5SBnhnQaibKDzGWewYRDccFZ2wtbT6B9VsgS",
  "key18": "5Xg3meZ855DarmZEgy4nKtc5cWd3tNKnLuTQQu6mpFLaEd4dAsYSYyMgmcuMPtMH5SLBW3FoYE7br86hGZWEiZVB",
  "key19": "5ofJSPFC2QNxAC8gWQX73kSU3kvnMfcfjZWWbDZofqHzKWmWgEiwVDAhmyVb7knkCRkwLdrKGgDXs9uQJP6JERe6",
  "key20": "58jJCCgL11Bjf92ZPisJ4YiTHWxqqba2dKHZyXdUSbmeJJntTAJoqbvaKtBieUH9ZcZFFWjTAgA1foKKU2eqxFCY",
  "key21": "47h3NTcRDuhZ8ssPMdgTzCkLZV8mK9233ixgB6ixTLvjaqQgdh3HFzinEBBW6kHo5eR4tQjSWRsfGx6xgH8cUHqT",
  "key22": "265dSVkZxBX1Ax45mfqvWkDhwa3yaZiB18cJA7L7AoHMoo9c5s31uhdriTrUhgV6kSThDeGdLcXNtL2sVAhgyQ5K",
  "key23": "2NcJEWkrmWoJGtopAdbtnu5gPDauHx21PmFyTyGTMKbwJqhGCMLsBALzTVqUxE83eLPWT3hevqdWUaGiNusizL1q",
  "key24": "4uYa9ohydk8NcGVbv5Ai2rjPmCLnwwF7ReWYBurXMMkiY42vd3sdexZnwZrpfvRzkba5nxMUQhRD1RZapYKVJS3W",
  "key25": "2ZcEXgvRUFu6j5sgPXxGtLX8pfQPq7ttazuJkTHRdtwjpGBu7TC5UMoa1phnj6Q2PvJVe1ojeSMJDCprFUe5LM8q",
  "key26": "5KbM7wHmX9UukHPLKQKELVaXfeM6fTxbziM9LF16AjinxESeDmKBLGihvakG6TE1LKkZPyF22t9cq5rhBEHBBMQi",
  "key27": "348NMzwhyfccfbbRAgRZLsQ5f3o8XMSJ97jgWU2BmYfbTiY5YjE5vEZyKCJkL24pNDhABGqS9jUrTCtJkeynxeXF",
  "key28": "3eNeji5eYfbHddsadmgTHK2ra4Yex3q1s1EBk1yqu1y9EZrQBJYxS88Ad652iW2U3h6xPUW44mPA4opQ5ify3gmU",
  "key29": "eNo3oAk7mpL2hcc7KcEfPTR3Jyq6N6efZu7QFzxxSLgnHREBcYQjfiVCPeWHyZndo1zsZDmQRxGXcQ1xxJ3uaNa",
  "key30": "4D7717rXpLtbBQhbDEZvADr2XP5ZBzExsP9MBXmvQ9GTSD1xr8jxkC8v1NtMQ5pjwBuQK1HckWKZDjXogynepRJP",
  "key31": "4NhrbPuKvyqR9bphNrGDZm4dyX3fQz93x8ibqSyMgdgK8cnG5Rx4iH9Es7Ag6JZwFLUJvJhPMo6eEz9gYgKzpBXi",
  "key32": "2MRgjehTuNE4fZEVH4xRoRRSDfxSLBhNcsxQXDuD5gf85eRHyk2wQPWBnfGUAm77HAkSFDb3eYPveTJp7i93igFY",
  "key33": "4w1K51kxHCu2ibunvVhnGnveTB7CKXxvCJ24pW4Ht6x1V2mCs7VVMkBT8JSDMrcJixsoGi8tMU4yiTJ96MUoUSVk",
  "key34": "3ZueVAAng5ocT8thuDbKmekCnUoqXmqbFFJJjUuucmu8Wr9rbpFfQRLeNN3YpeuRTKDSLkMneCm8KSEvBGZPKyBf",
  "key35": "gH1T7Bqh9DWHAcJZwABRmmnjyAd73X37GYcxKuLbSNgTkG92QSEd9BK5dCu5oJH146NtwAHGvAsj54BDfPRRztL"
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
