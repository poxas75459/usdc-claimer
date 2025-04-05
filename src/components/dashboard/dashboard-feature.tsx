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
    "4ybyvidPNY2MQdmQAvnbKC8RTrAvrgaYnMbAiyibfJjkw3YmfLaQVqoPYUXrSGWthFJvcqrWrLUZq7GNCsC5CJaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "517Npnw29eLv737NqAxEocubQSYThZsYL51ZNR9zmhzy9e8f7ypGBvJchDqYe5EF3MxUPvvyEzrr64q1BoBghADv",
  "key1": "59zwEK45dVBbPVyj79o7Yp446zcdaW9HUmBHtTAnFW8NrUomA7WbzAJv5oGbHZ2w2XLvs9oNjFktAtUJ9mZWizZo",
  "key2": "4i8r4xAxPMHAGsMPzJdEQ4s43Rx7yMEBYMGHaXzMr8wfYXfiDkz2n3SD9SEqigK1HadWjwU8iejgF8TZiYbwUyJ7",
  "key3": "3NUgXWtZSVky3G3VFHntZJ9NQv5cyYmpqThcr8DtD3YkapnPbDFYJkhj6dgybSibGNkLrfnVrSHPHk1E9e47WSvW",
  "key4": "5hfyXa9JVXF8BCpre85fF8mrRuyqDF1Egg9MpKYjq5Td3awHd5usfYb8pS2TtbvFQmMv8a2GUJNQmRagjwnfLLA3",
  "key5": "rR1pUrQWL3akrhArA2uXFyuykreWL6UebwHoZvSU8ZZgVMqGpwgCVbv78Fc7JCaraQSWJUUsKZHtmLbJMR4eQYD",
  "key6": "3es3PW7AziigW3iBspThGzoRBCHUkYXkaaNc1tat7XpGg1yXPNXRzH9HSwJamMTPt7ngnhU1J2rYoWrrK22eQM7o",
  "key7": "1twJCkwQ1Ry2dmq9Dq8WqqypKY9kH6zeqLXLjQvHAVWin1nRoGdrJdatLUZPibKveoPbAjmFzk9c7Tv9AxfiqXv",
  "key8": "2a2cfMUNqESRJs1gyPpFgdykWC2kJPnEBivKW6e2LwonXSetZVKLWTeqorfSeBXXFiwniLusT5qpPD2NLDhFssRk",
  "key9": "H6iU71namQGgRQdm9dWDbUaW95DRCDztADt4RNKEvChWPzdohhp11RKVQ5GuyMitqwfYp5w1yZappaD8RTDrX1x",
  "key10": "Sp1Gc8JykfX2eNuxgR8oFbKwvn39XSrGiwSuwW4WnFGp6XbR4ipvXuwoRbQ1uKNKUW9YDNkVSkSXsncYUTayrF4",
  "key11": "4MYXy8UWGEFpVjR6EVAAuvcYjB7fLtvQjUcgEh4i3qMhFDGvyunB1LSupzSU1o2q9SAMvn4oyAen9JN8uTGGubDg",
  "key12": "5RZeSTG4xf7EsHxSUh2YaNvnwqr3oj3jD5onPqp9Tgzi2Y61UQvqkSRTaLCkY7AAKiw8Ehc4YnVCTD59BFf7wRNA",
  "key13": "6aG3DgQD69EvNNKk8QemR7tcZTQrVHDeDKvooXJgXA4zi9XJoAhZetFDK2fTgWrHQLf1QSVciXe6HmwBftTSXvX",
  "key14": "2SA2xjxHQg3eLK8g7Pr2o8Rd5m2KRkhrV44FPeeKjpuuze974788nQRe8QYmKmdyzqxbfecivqmLTk7RKDJNpewm",
  "key15": "3327Dx2UMVdzrUUhfDMY1rnbDdTrhaudmHkEKr7XME4FmswCeyjrLhAda1SPBG7uYcw6493dJAUE2C2S5heuGfdg",
  "key16": "4xQnjKcMUjP1LK4Y8TfVEn2Jfv9Gu5Nc2V48nKb8EiySR7muvCYmEmdSxqLxbvwh2M1BbHwnG3gEe4xyW3GmSgxv",
  "key17": "4yrv2oVMAt13AcnL4xuFQmpuLhmXVd1rcUwJpx3u8aeYnsNQiK9KUMQYjRomJ3tW5ot4cw7i8DBRLDbQNZ6776bR",
  "key18": "2W1E4dtFoMeCDwJcUyJMszbu6sXCWqwH4EsmQiURuP6UHQJGTDjR9jsakG3sZgZAahfqo2u7A4gjmvQrjAjBTCQc",
  "key19": "hpB5fQe2KMqn4sLP9m6ZdAn5PFyZkjB6QCJHdAbrPNXoNUMkWbsZwZEQEHg2wzQ5nmLxQvdfgVyXEVCECWmybMa",
  "key20": "eC8co6fMSL2nYtjqMPT68bbfv34qrwLqwuGjqKSahuxLVyXoUhL7KvqMrHrVWbm3bErZrYVj6UFu8GDUPociqjo",
  "key21": "5Qz5zMkGXgMserf28211TFc4y5p3vCqRqgSoAPA5sdfn3B2RwoCUMZJFDSkkmJ75tqoWhkftgzo8KRWHyRvyAd9f",
  "key22": "Ai6WrwiNYwEfdqM5x2ea1Vxjw2dM3VU5ny7FbQWYYs8koE7poximdf9jVicB3rkAA4Wr2uCjDD1daLQ4gecumnG",
  "key23": "2zi7nPEfa68AVhHAnFCfGX9E6abCF5DgMLdF1xqMcvZkX5TfrBU8VuF5ehCMZskx5wk6DvW6AdR1H4ErY7tvW5t4",
  "key24": "3EPN67xCsiuw4WrLdqLZRxe9x5zrPBEYJFNZK1NBwfpLiqZT8HZd5sjmJSwbAybdizVB6Se4Wr8tPg7hGeGhH59G",
  "key25": "4zc7PDrowyJZu575RuFmY2AHG9oDAEHAH9VGseiuwofMkHEvbKSRzej7UQeuKTghohLy6VJYH3rFDgmnT7s7sQej",
  "key26": "3CLhTi6fPGPR6hZgcaoFTRWymd9L4msNGYE5JWRf9YBq87gxR9AQQ5ThL8gxqsbCV8FTmRZ7FU9398wJf37HyUKt",
  "key27": "2zr3V4jERuUZCfzX8upHayev33kWFkaxhBbGzmATC8Wx3qo2gikwASw6qbfjqH6VshjxtretosE1doBXfNVW4LBp",
  "key28": "2F75QMuc7dst4g78FNW8jmM1N32A17Rgg76vvNokw6xVugiUTxx3knGkt7FZSSJwEVqNhwVoFnHhUhR8AUvF2a6V",
  "key29": "5KBoqDePn2viTAqLLUqcdmpNNJUfcpj9fpH4BBU61k5nWspG97cnJR4cD3W18CwyuccVTsTqjwmk8LMqk9Jn4hZ9",
  "key30": "XY4WG3bjq9587yCgXPjmoW4aJAYtWHKDaNfEAYefCCyWMS8yDHTwFPB4Rsn3ohCtvjr7mdhn6HLTrigV2MbLSzr",
  "key31": "64id4kFkidnMQ5imCAZMCNyWKWQqeNFkJd6LXbNWkuQuzTjormv253itNAcHpVd8gMS4EZkjTycruU2cDbqvk7ds",
  "key32": "5ZFPhD1KYJwQZpnoPY5KxfT9SwYe4riGjjy6xHcEd6MFKQ7Cbv3s9hQZmEUBTDCUFD7Rokoh1H5LkkrmwUDQ9LEt",
  "key33": "4jEttY5bCKBRveTvjHDtyp1XWxTVKm964xpFT4ySnztPVXRkdDpTXVy5WQKba1WStBPTisyB5iEQ3KjpTdxNzeGe",
  "key34": "5xkDmiEjfa5x11qjwkqPcnqUXnumB3WgfeRynyyRXpnRrnSX5sHnCQvhLiGgCUWpYMcxX9WmZjKkrCiBpvhbFCo7",
  "key35": "3NVbjEmjoTRk9GbpXCVtp1Cgs6sTvDcGLtzQMcpDbNxDpDdrzVsmjXs7j44A3JJCZpxxvkWKDiTHiEiuxeyzdhPC",
  "key36": "2pfYcxg4z9Sj4NPfuZEJ74cdBuYhdkBLdqvaTGU3k33hwaU8kcEtU4t8kiNZSFHjxrwbaAiwug5mLA4S2utXvmKT",
  "key37": "2BwTW8SE1tvMGfyhskmuoQNAToDSLR7Hv8Emyz1bJrTAZit9bNrUFyTafs65LYr2bnbiHyvWsiTEZVLDUfADvPX5",
  "key38": "5pbm57GP3NTTTJa6ERNzQtfJEkE8r1NKPLBrnPmBZWYrmAASYLddTpotmTjoFTmb7WT53bBsUvygz4uRDmdEL8gW",
  "key39": "33S6x32n5TFC1ZeNNCXhVSF69vsQCE7njrGZ9vRwF76Ksxtu7kQcwbZX2taBeGbPSq9Li41kHoufsGe5KAraWR33",
  "key40": "31oYdks1rhLrZXykgw28GymJ1WngNpULZwe2iNP2ZhXQxLdSmomGFcRVUQDUdvv37cXXzCvF5bTvWhThzgKH23LC",
  "key41": "4YKk4REqocgZMgeje5EqH9669LecqJ3e1FXpvpQ4NGfQ1VfLvzVfAz2yGGXvnHdtShwqhnz53zLpbQq7GDfKJga7",
  "key42": "5jbmWHb6bfBrGiGgvTgtgK4omdApF98L73UKrHAsyENVGj4mdPzawrxiZ8BFg9HvxcTiTYwWvGd5x5YzkVcCAMnj",
  "key43": "4UYqXmh2tpGPWUobQPrvWkfn5cZaohGWeYuRjyiwv63nikyVkxZ7qTaLKTSAqeY2fAAnM3tGXMxntBKp7EqHmp1h",
  "key44": "4ynRKXYE2GS1AxRFhXAu8Atq4hguwS3MEivBG98nbfsp4wUmYZp1SquNYLUSt56DHoVQXRSAAmccKDrdVrF9GKi9",
  "key45": "4mrXpvLU5N7zLkbgWr48cUuSB4oiDTD2P3XCkgkqJK5e8KeV8LLXpTY2QnzwRnztxqo9HJoybwkkBYmWNv4XDo2W",
  "key46": "3D2Z4osXsAUb7LLBfbALBSUhPmbcHwi6ZnCRiDVZKWoAQyG3CdiUSD5yH6dynnGTkmhofD2aipWww6g3sPM87hHY",
  "key47": "4r24zG8HcMUsHXtZ1bmiMwa54W82mBpcHzK1LamkBMokcsidXznsXcFinz9ozR92ybR4L5WbDczDmHKhqtXbCA1k"
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
