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
    "3QkH5T5VaEMg5CRsCVXetQ6qr4z5BNcE6ALiDqgrxNSB8vyKRypjX3osZs5zprWJFSUjAg4uxhEk3UbyBKriULsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xFtYR5UxLZGQEoU81Exsd3pqFetRojtga9GiVJzHUBxanx6trpacTPPsuyUKu5AvHKpzSvqLEMsWvU5sFf7kokV",
  "key1": "5NvhGgz8ukZNh1npb3pyz8A3Anju4JMymx1ungBMq65Bi1nGMenKRwc7zUBTZis7o7mBBBCAP6vatrFypWZPqu2x",
  "key2": "5uTnTMFqrt5PZMEd6ky2xusHAoqLhzTwYh8zk5LaYp6hMMYCd3G3C7nnQeWJD12T4LAfxWPikrrCuvqTxm1bTEYT",
  "key3": "hjEVGHaDrh8nJS2E7CeG6TrUFdB3cAcNsNBLq9buPB6Rfsh5JTtRqoKL4h415g9uMQBRC5kdMD9saBHwPYdQM3A",
  "key4": "51oK2tbUGoPSw7L7iYuMjj6A5iTy7oFh6XizpJppYvZAPZw7bdM9MuXiiropEKdCTFZfUTF5bSSATtdvWXf6egty",
  "key5": "4z3xSvudbqYeMufdJN2ir58vzZspRwPEzxnG5cHVn4RNrRsguZp1BzzSN2GDsBfatuuJZndfu5c2bvrQGQbBVBF",
  "key6": "X8xPg3NSCNrgYV8j4fW4LjByw7FpwNBAswz9eM3cwEAnyPjkMCF3H5nVhyShrHK9GtCdFEgLE2de5Es1hvj1hq4",
  "key7": "rjzEuszyGQTHAunuJShjd4P8fvToRYPC1HgVKGJAx9nYpEpeVhSKSoWSiigrQqVxH1VhcKbRuBHPeU5HeqVUVS7",
  "key8": "56nqvawaJDYHoPDuPK37cVDvHwYCAyCKHQ4XG7PWKRi6YXNQfpb5afVsiFfWe7fzRLBGDr1KSKQAwaQJs8ze1JSY",
  "key9": "5chn51V8SaVgXLPkVPRiFfEjrVq4fBPDRvp2E92zjsJcieJAYYePtxBsesCC7FCfqTwLrCttyE8whQ3vGTNT19Dy",
  "key10": "hLrSFVymNDPsCW2yWqdyWGnLZzVdCSNgg3PEj4QdmX1TW3QgAg3Xtpp1Ab8TjurQtgXBVMxWZ1NEdFPsuTqFcqQ",
  "key11": "2q2zsf3GCRsu3X5H3W96usaPrfywKBMNoqaFtMLcMmd2gvuqt9yJxLrDXKTtmUZDZtC51oPhcbwcSuYbKRixWU7K",
  "key12": "8UUxaaVNaAJof6rTVnbKcUaMuD2dtkMo7cQ9CBSkjMvJMAuCY7Sezajmjau6z9b9w89LodQeNVyG8yxTJkx4gc1",
  "key13": "4ZmgaMyQDsW3fLoHA3p522kWtvDhfv4rDSH3dDLWNyyhTiBXaR8nK6JqJm1ayRZFHvznwdFL4m7Fs6devSgWfqHm",
  "key14": "bgHNrCD7z8uA5aEJd1eVgWR1htit6DgbEAFhAUdwP3m5zWZxVXUAb3yK2QKFunW4YHBjvXFc9QSUevvexY3xyif",
  "key15": "5b5qJjVU5w8BFa66wCvhf6tFevfrGnYR6vsNaeop8oTCX712qofjJWCyCAxp5BgEfEnebykMdGRfiEKEg1zZ9viy",
  "key16": "4gSRxoGSK6LBEwTYcrTfbeJmWyGPujv7oPwvmWDSFNPQyuUgHsEGp2gxPm5fjSB62sMKRF2ke5UNhyNAAXYimysE",
  "key17": "5e2GTHwJiuDdFaKet2QHb35wNqw2jFP2AzSdpPeZHK9tzYnuvUFVVdAVE2eGGwbkyMpZyF2US77Xp68YxBoaeKMV",
  "key18": "2AC98zqS5DHE8qZMGPWdh8pt4XjbkWY5bcjcraGNmQGc4b9v1z2rist2T6HqAnYys1NqbFZ7jZsbDfR7U1d1gGgq",
  "key19": "2U9CD4vkHpM2Byq72WrzsBUN9BujFGTpTsRn6KaksmACKxH9TmYK6kGsko9KtFRv1BqJC4Lv9iFVj4vkCVmWREZ5",
  "key20": "5JcS7DDJqSmBJMKtocoGWmBeTcaJ29BBD5bj2LmWKwZCFQyRJM3ikzwAarJgUDrooQ64ukeNFBnmwCDS95rXj5Vw",
  "key21": "66hTCdepjfrF5tTvgaipYqXxwULucP1AJk4bs6BQGnL37HZE6Xhnoribn1eLH1hk5fR7eKPjk3H1E4YCCNfGbQbk",
  "key22": "3xUjGCYEXu6c9pr1hoq9Uw4xzjkUMUYp9xQV12SHddf8FkU9ytZGzB67hwAp44BAGsS2uyg5Tgz374VUqorxmgYg",
  "key23": "566GGdTRtz6sgqNnrSPxB1PqciC92j8BVf7A8kdwVo1iAYN9tPiPqjcpyvP8sPNDYhNg1sWuctk6Z2UWdEaVQSeL",
  "key24": "3GHqXcKokNFuBX22HRmLMAMDp7f9PJwx67dyoQz6ZstoVeMt3KK5YvUnNCLbdSEC6kQfiKRTwVd7aDQL1Yy7C3ff",
  "key25": "4wDRZLcG7dusufXgGfg6uJQM44SriqzKX5jvvcMyuk3t6aqvAG1tQCkkfQ2kZbDeAG8pyW8kVtrxN5aGgqxnnEyQ",
  "key26": "qpycuvuCJ1RZgPRwNJJ8ciWpTMJJBAa9PTguYzgAyWgp8tFPozEAdBZvhhKq6nyG4Xxz6HX544JG2mgAYpUuGLD",
  "key27": "2PpEYYqER1ctCySdpi83QpVhrwAzFV2v6s6RtZJUnspYwFsofVz5NteciKe7Wb31L8t6pYDtU3MG3yX426SE7Gt1",
  "key28": "2xyZ3bx2b2nLEttL76tEvqbjkpNyjwdrD7LKqWo21uvjgKRfKAh9Ym3j8ikazbb3S93AhHtqt2LYte4gFvazYTPH",
  "key29": "3cCEXzRxgvE2C7GaW9DRDZcrsjuFjfaJf7HMsjxRdJPdTbjGtDCyftVifC7nvZjUCgfugGrC7b5qD857ERGAs97d",
  "key30": "F4hqwwRV1M5Bjbro2n5Exxm1rY91RNH7xELFkRHNPZLxWLny6kaM2h5A6ZSPrHx5ej3LPyC5DZn9U3pr8aRsjdP",
  "key31": "wHho9N8VqD9m3xQiKTgTzJyM34CppoH5sHSmNYMEh5f5NZem3WpjA9u1Hcw1GZE2X79MUPfkZ4K2kKJSRNhFeMN",
  "key32": "4VvqJRJD6WpuLFGxyo8myFfLBxbm9nTxfeXoSjafvBBPLic1kWGT5zfeXUc7Byz8beTLdwgmWmFMRMfffCzRZjmG",
  "key33": "5BgJG9ZbtgVBjFEnNZFb5jJ9vtkwgZ2DnBGSfpzSGSCs3SHWY87JaKGKkqmraNCrFpCpCATJ5tt5QxXEe5BA5HqE",
  "key34": "21zvtGTiFywbPawBSgZxH1t24j3AL6vFG8BfDU3sV8SRAaZPyGg8RYxhDyLBLG3SLFoG619MbnCK32dMZpuV57TE",
  "key35": "53WZGkcu9v7Yq1zhNamVfTozqz3bFZVCR6TbBRrPbgoAMWFLFFug3LrDLE1L6c4CkVWSMYC89NeMgEYu4ZDetpKq",
  "key36": "4hSTKWrzJEY5cLZbQduG8s6nYyMCggS5T9kiukiS7FmEo6VHkfQdtNHW2HtijJ5WrcpEWarY9Xo4dfWWzYzTKCFD",
  "key37": "52DsTYyZArXZqEL46nvWJas2R5Bhc3xkEXVeipuARmVr8KamgCd45vKDq98GWYvf3LPwwXp1GRqsvQfQH2U4Ugpx",
  "key38": "3cYXFnZvBWTNXDTkifprSY2LAkYbDhuBrxqJ3gdM5C63w6YLbUVEkhaVuKZj9EVyFaH23sBoN5PqgsLgBGBgGqA4",
  "key39": "5TwT7gt9Tw91FeyJ97y6R9V7jTXnTHTwB4oH4YCRcaTJjNGBxgXa6SGwu4riZ4N2SJC6o1N17o7J7tukuepaN6HE",
  "key40": "5gPbLKovc1KFasKsQLkKitXrKK6sUbeFB58jX9QTX4fieHcU2h1ck2D9HukdQewTZkiPcPHp8Xeta7hHSAqJ2rCw",
  "key41": "4ZkWeJDdeg9VMyiK9Jjiy6J8GuNKGY7sTvxWjXMx715aA8PNzvULZ5Vkm1uGTKBJChx4d3uQMnWGM9Gb5yKJ78DC",
  "key42": "2r9gqcQXr1QZKSsdu71smXhSE1Q9q9cUZc7RvYdNnQ5cTPC3A9gHhDXVBz7JLDdinEPYJ1wizvVrnbZkZbjgSLFp",
  "key43": "2zFCPS8oNspB2ULakabMgTGqtFNCY5zgcAWDQq8LZcBELxTwFvTiZSXPSgyiLvMQm35pTw1AS4RquQdDbkiLyRZ4",
  "key44": "3A1TJ6WiHzEVoxbPNn3DMw3ZWAYviY1tiMje8VTgtHdY6T4xq64FSZMoPm3zxZYtaF2sx5r1xaiMNLKcmGt1SxBi",
  "key45": "4bGzGDETVdRPqpUrwXKMRYSxYyfdYMjLCKaFdWdGnybA1U8HUaVTUrwuYSdcHUyR7gWSxbfXdKy8az5JVGwUkZrs",
  "key46": "5zxzJtzCJP3YdQf6gHTVxinmDBXiFjBYXt3xf27NkEUgVTH2RNHrwiS9e6cGono7LdmECJUCSDAxDMTu9u2rgiRK",
  "key47": "QK2a7uyQeoxQi2eF7bA9cJrz1ydHjmHhDNCKhbG5TyLcwLbgvmT5URbk8KZSLMgpNT12FRreVK9FVDLR4pwV6gi"
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
