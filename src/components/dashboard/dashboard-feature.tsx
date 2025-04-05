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
    "5Lez94iQVZEjgCsNspjHBnLrjmX7eir5YyJc16iBFmA8TQzJPZTnryttFvAQnfrFmhXWKzZY5oV91vWzUhTDiwVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eeQLFxUoB244McKGWuu1iAexx8zmjbdzrJrTdW5QYZwBPH5keeLmcp7dYbxtXZk77u2EDPq52rvnd59TDkToop6",
  "key1": "4xHvPCp89sLASotLRzHqpCQvcubudNQZ3rw1X56X8UTsgfLHRfFkZRoBbTyoyh8GKso5BHUj9ahLfxioTVNZKNKM",
  "key2": "JA34Y9Ro9P9ezuDkcwHD58qjbJ77b8E6kWK8ckgRcwWBoP7KCV6viya8eyxiTmA39TgCjeVF63yyhmB1EvuxU3R",
  "key3": "j455FZSXp1JokLmzwrSQwfkLUb2d8ywNqMeditXqv63dNkGFBg3QDPedjkgdqzCjMLjVZYTb6A4kKXqKRbxMdFp",
  "key4": "nHn7k1HjGshTLFQNMiUSYc8uQLevTNuyB4YfmZ9JF5Jvehk9qnDCsgvyu4ZfbGhx6hP9DzqbzCDFiMTe2XAe4vs",
  "key5": "3yS1srbiUeui4bP8Gdf2wtfFzFuRFZjp59GZEQxm7DWKmPF7WWHQc9WmWakEfLCVpfFdkUTzvm7ZyzEP2kGLwKv6",
  "key6": "4VXwH6mk27kFiHz23VZyw5UFQU5cMmAewM1jiiJDLLKSft3bH4YuisxQvX1DtxZ2xvadtDoTnDXBvoKGeaEN6GXT",
  "key7": "34hJmQXDspxinWbHutzY5bVMxVKWxSpv79gDZx2JCkqePcJhtpqCmjWPErENaCa48Krdhp9bfECnbq6VaEnJ2VWy",
  "key8": "241GDGQBTMDZ1i6XMD1FoXjZzquqXPDmtSn676Re7FAWryetn2vreu9DGqNXdrKSYJ48mLvXoXTVJ6pkjpEANGJN",
  "key9": "5My1Nb5ZbVtZGgd91Qm4yUaX9dh2iam8wgTnau9DtSK1Gm27yJNpiP3zjKvgnGCUoCa2rayH817UsSLQ5UPwvDYN",
  "key10": "5u1i6UTwMirZDMAJJC6tDHxcxCy6zowAosi8vHQksjzS4cCoUrsPRvhAKjip9tCfrkH7hG5Yy14FwnM41L5CaJLC",
  "key11": "3EKQWn3nNDDzHFzVPU3NBbDgAWimpoJAy3NG1zq4twWMomaJFGv5rcGs9pC3XHTdBKLEXGqJwVQuysJ97urAavWv",
  "key12": "4vajf8pWWjmD1bEnVQoZwPDB16NKxm6DkPnNfZVTi7xQkB9vdmsRzNrQE9hProdzQ2e4cFnL5vYAehu4MZCm8SsN",
  "key13": "3WZcSQBd39rgAMe1F59htFEmmyAZVGSvmuc32ZSU2dGCdpNXfjz4sYbht59gbMNe4fbCAg43FKaDnuV981r8szY5",
  "key14": "5AyE4AfQTFaKbPRE187R9SXSzV4D5VcuRaHNTYfscWdGPXAmYb42HvLA4j2ajnrfDNM96aagC6GyqBfsHbbgtZji",
  "key15": "5viEVAyAU6kkWoS9tF5ZnuSVZGSR5CNyoTrah2MqHc9ss14SpyHhQ1PHYhgTf5W4URegX8SXyXCtSmpBoWGMEwur",
  "key16": "4xMrXDJZGoLVgzf2ufh5KBQXcLF76wqFX5WuDGv9U79qe3sFk2RupJC5NAhaNF9bGf4Sr5eLKS75p75yAMtXMK6Z",
  "key17": "4KQ7N7R4dR6HVYJaQFB8DNYpbtX71RS4zciMikWtPAmXiBTPYgTJ7GD1dFtusTTFCzzUvgpb1MGDST6TiGDjQBTu",
  "key18": "4YQnRiXUAQ7APN9pQ68wJ9Xr16kugCF8jUe6BfHgx3csWbrwUsGgCgejwzKSL9VxNKjNQTbupsQEZ56atdkUzZst",
  "key19": "47ji5Hr1yCsJnWEYJN9TKUq5RxoB1SPvw6zENMUNgUCrYCb9AiqfVuQB7GZzL9uUXZnTwjzDPoVdEZMTNMTpfRbh",
  "key20": "586eejcN9p1VRhoqh32CawLZMLJsX5PTLfZWytAQM7iddwQL6JSYJd3gDHK7UR8UStaDKt51ifDdFzQNJLYShgQP",
  "key21": "2mVJ7jsCZaVhR5VMaSa8onwQdDpeJrzbgxSoSwFNZqZN2JvpceFSdMAdRiZS3dsov2H4yDAgPn1MkDhEugrPb59E",
  "key22": "5RcDLV1HTmbBovxZBtaZfN71jS4fuYVm1Cii2c2tLNwWzE7iBCBHZQTWCQoMBDNR4MpqE5aruezXqT8RrENFVTZK",
  "key23": "NpSZuE76Pnjng5fHsRduE4nxveSPUrMSyfiEZXrXycGtg5m9wLxf28moNjShzm2QQPrxhzqwjCmqNzHb6Cfn2dB",
  "key24": "65eHepA4Cdc4eJTmKTfo3VihkmLFuHF9TJt89wnNZms7aLJDtLSCTNT7Etxzqbr5dEctneDpok7dBzbjYN3SKXJo",
  "key25": "3LfbDUBoijhadupbpAdrHqNvEDAvJeNMAWND9f9bmEXkpCE2hNqmCMzLQP5iP4scQFuwtX6qEBLPE3gCsDL33HSK",
  "key26": "39S2fUQmnFFGtP8aF6a5j9w9dodnhMT4BgfnYw3dWcW3pnjjuspKqSzRwdVjrRerqYKPwe7NCnkboMqcZLW223GJ",
  "key27": "4FjRQRvQ88WWohDgoNge8gfuL7QefTN82rDu112eneN8sw6evWpK7WjaUk6J9C2oy1MKW8xhtN5DLha8eQbECpDS",
  "key28": "3j9VVPBi5YJ7LZSoVY1w3SFGSFvYHH7J5SxGixjKr2GsNS5FGoLUxqLdyFsiwq1nmu5tXMqVYGKX2i8U6G6vcgkA",
  "key29": "5WcLR57LkV2PpnqveU1aDRfkdS7VKdoLgQMCoSYfjBi9CLSd7c3gb28dpe7GsSoAxFsTK9bS2MNLwNTJN5hAEAnP",
  "key30": "2aa4AuMNAoLgWxYBkT8oWM6e5TbL4BMwyXSEGDZobJdzqSyAnY1AGZro6euBTYw6Y2D5GeDnijjEHrMWMcBjVFwG",
  "key31": "3wRfp2qNycD3ECf7R4c9jsusMmqXC4Jjifyn7EqhhHrEMBqQA1UtJEZNTjnYJ2TYvq4RWLHfKqT8iRiksu2vqYjz",
  "key32": "5gph8atotSLaqU5xvujjEqqXX3yUCEi4Z1fhhrCpzdSrXvsNF4pY4cDzCWi6A8Q4JJxaEAkNFXD6arhZfaN2Ln6s",
  "key33": "2TmmjgWf7qk4DZT9gSG43ZBYtnWUzXsGTdMSCrzT2UWdztZzaGHdeedGWyXouQVoXSnqQ9k7GqbfNyLaQzYhDLbd",
  "key34": "3xYHAF41WCY3itfhwYcZB8qhfqSdenCrL7n7LfU5zEQH9W9ZHktLsTaBzGQeXxau2fyTYoRuY2H6CtWrp9ATvCPL",
  "key35": "4BJnLofiLLok4m64SB2BW286xwKGwDv9os6Yn924b2QJbrfYJENzfowCM37pKs43YNgtc5h5wKWhwqn3Ney8siA2",
  "key36": "4JUngV3jjR8PqYX2u5YWz4TAzVURGWHmdAiiGuRLEX4uf5eQEkMqf7cfDVY7FJdyg9WyirSg5ciYJtTUnM5V2W7B",
  "key37": "43FSbWjYsbm8uDKwNFSJmWX2fdvxciiVW7SQrzp327L2so44RqeUDZLYvQCDvX3yJQnh6VDx4ioDL6D7jucRj1uc",
  "key38": "5HEtpAiCWp7nYTUhdLwYpcaQzT48eHCnJVaoV4Qq8gPubrvwq8XeyisX5Q9MkmQzy58Cnb35vfESHkjNMLeaFX8t",
  "key39": "4Ka4a8upv9WuCufVRA8iES7Q94dvbWbaku3jyWPe4T7YVsKfX5qMRtSvGxs2uZyaoU1i929KeCDJUekCkajMRAf5",
  "key40": "5rk5eDVJxHivTFGjQCbAovsYAkSTvxtA1EvqgJuGLmkXDyMmtRuUcPevWTa1XvgYGGD6WwBGFzG5FXHa1TyR7u3Z",
  "key41": "JfpLM9d3iwLs5mwNY7jsq1ZzWuvSdq2HqcXqHUs44HUJ3jtzuMuVcXJpnEyRNFJxy4yAVzPXe91boFcgnkD75HN",
  "key42": "X74N8ANW4onmnq5x9oj8syA8G1fRZoYzE1JksWxJuCDHf19jx2zFWneDBjbZdRhw3xEjykW6EneAS8xCAx6p4yB",
  "key43": "415oasfj1AzqwLZeLBBjBWxM9wrZFeh3TqUAP65MwHHDrz7amE3cwuYqqDTf2x7eVzhMxaJbdjBFxhCV3e9pGTth",
  "key44": "4FWk9oVk3JWspWwxVroraE3UmkhCYEsFMXvPLjBcN4Ya2kuyFPhs35vHJiWBuVmzLnxTb8J8VFwNQ13JWKhRFg15",
  "key45": "29CLbG8CdjG7w6u1yMyGBR6yEtuaebxazzGmdEagaJK3q64R6uL7cqYNJDpbriQXc7twPrGWWzKhodzgqXkJvKN4",
  "key46": "5CXp6sjyiQABcxcLtfgF782D9oFhXPRkLeT7EcjKfVBwjPfLShWPa2jtCQw7DMUop9DYCGoUmFnk8Z1QJRYrKSTB",
  "key47": "3FNKymNpChGB9VxUszK6G6C1MsKe2dQgVKfUsk6FZ8vSXG8T8tTZ9SQ8tyaH8LMbwEPEU9pETHGVMT2uEzLHz6WV",
  "key48": "51N3AW5ytWdbLDMnXEqJBFw3ascimsWjwYKbsPYyz5RxoyZ9NamdLJfRqRpoiqREXyPaKjmUHCXaYRegmtBmsWKF",
  "key49": "3HRLeoZ4B5R4yQFXmtv56ECbsB7y1HLDCPKBDWXhEvu6KogYfv59Zcy7NZWyazM49hfDZLGMBhJsLciXAZfwgaGv"
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
