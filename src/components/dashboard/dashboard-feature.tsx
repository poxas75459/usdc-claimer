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
    "3czbVfjFwHn8xjNm6wvX5Ae8ZwYxKpc5mL5XvP4SwnPBLcdi6ePHtUtSrXj5G7dDq5PnVWhuVGYZG4h2J7U4wzox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5shBMqkd32wavs1nV9EpDPqVV2wsWNaqAeh2mV8JyWvsjNfi4UJcWLPGZVYVcQ65xiR2ZbBDgz8kry3Wwua6NZ3P",
  "key1": "5u6TgSpAgUjHyCEKzdJvH429y6PHMaiKkc8swKWP6F78aXBT3efvdrTgF6D58w755h77ZggR5YUcxtCinBZNzNhi",
  "key2": "53nwtMwSfd4iBpGxD2PKp25QG2f9bPzztwGNR31qV8va49gJtV7yr55T1182ZuARpdHKyNvY5j3kpK9tD7W2Lsxv",
  "key3": "KnppKwVERqrXPBDAewq9x4bdJgpK3ULWxzxfivYwZhGKPL8tEJw5XstqBL7NuKKfJyp15hxiGG1QBBeUpd77cbi",
  "key4": "5AWSKsGKhDYKU5NQLWT7QVuzixRcrtS5etCDeNNwXDyTPEvGSz48QM1f7DdWTwDKQn7P1veVeH7gBuF5MD84KpE6",
  "key5": "4kXSY9P6FT9gFpAUVu2x2PiaEGkV89aniH7gXz5gttmVAfS8jE3DiSFcGRs7t9oPPoicLkdWcbFxGgSFQFQpat35",
  "key6": "FzqgGsdS3GPdHmXbTom9bZJ6psp17b1nTjcV8kYk5GPh1qao8BUESsWQ2PADmbwAmMRNPUdG1Kc3ajBbaSWruz3",
  "key7": "tXueXu9sH1zQoZBj6tS1a673bQ53azdZUxuYLprJ91d88Gg4WudGcfweK5ft1DXNMEeZfhikvdmS8yzz7aSrHEj",
  "key8": "4eEXPywZkezrXZdH7z1gDvhR1KXNcBJqfVvSasfLURSBdfiR3bAhVaBaefyfdwz3pmnNwp3Kuzyv9mFR33C11wkf",
  "key9": "3ts52A3Ag4iSLAAT8LcZQXzmGk53yFJi9iM3Ldr6H83VTt75s3WcorkbGUrRsBajG24NgSh6BxBT45ZodeAj21gt",
  "key10": "3hPj51D6Jx361HnkrxSbG4jzZqfWPbYrXNGRMv8jjzHSCJezZKUKwRrtf32E4A7ZYHcnAYhzF2JyCSKF6p3HdGZL",
  "key11": "3x2iHByv9rVdAshT4xBMJ9XiBHDabU7C349ZPztJbxYgEDS476uxqgjJyd1Qa3cyTfVrAs2byXGYy7Eg2yohhfCw",
  "key12": "2vAuJCaawHGmW24Y1SzFZ1VuVGcm6ngWfPR92Q8NW8pWc2MYq7uKpqh9mkdfjYMbkka2yQ2tPmWSC4FTDj2aoMS4",
  "key13": "3vnBM4JvibAKCw1Xcq5nMtXqbAUzGcfBi1P3DqQ8pdHnJXbvW7cKKTS2qhzr7ZmvgopgUziiVd8G9d5sLaDHKbEV",
  "key14": "43LjZyJJGVWREVAYJkDSazjpTVf66EzyfBzddoHq6cfh62poZriCdHhdqiyiXbJYVg1zp3RXBmJT9nSoc5HgDtSg",
  "key15": "5qNE8UMteKASzQph9oGB5bQobS4z6zCHqxx4FVbf6uiiA94jgyGLudKjRf7DGkxyhameauN8vEApVHYmcBBPTNpP",
  "key16": "32UCm7r2SejtgXbyJ122LKsrqr8owNUokfGABJy4ryxTr1cPfSMa9GaNNP7H1XmUH2jGtaVV5t3JNCYWcra1GK4d",
  "key17": "hcAb3NDGu71LRt6UaJbi1E3ftPRATzsVsWiKbmPtmNaCHLtwRAt1aCzFTJfhK5j83T2VGYPhfEsQzqZBVGETngB",
  "key18": "WYWhccYi4sA18An8SpsUDxXQmneBQ9yEkfinF61cK3qMhwzKLTqoxpzPMgXMbPpr5xnToQ9bDgFfnVATiv4im8a",
  "key19": "3ix7kmT2MeFBis5iLd3f5E3NBsJZ4sobiDVBUrCNc8zkVKVmE846694NKXZBhm6pofZuiYC94SHYeqnM4kAyh5u7",
  "key20": "3496FnrEkCTXdxrhNk5L98xTNbMuL17EHXXHNEbedVaUcMsokA7sE4ryESdBgDugsMg8JGvfQ8XkU8n6icqMrRwa",
  "key21": "2JeA4o9ZEGtRysz94EKxrNuGr8EMFKbTTB4xyMN9UgqhZjAVCEBxFdCoDck2qQ9pwTW42mGL1GFD7PP1wvA8MBtj",
  "key22": "4jvpYK4phejpBUz8ik2ayRrsBfw1khTbNcQxEkGoGa34qu2vfvnD5i74kSjbwCxn7rUp3jt8S8UdT6WJ9K46NfbP",
  "key23": "3a8xsNqGmet7bxzhZzEecrP7wZVsP8m1BczeH5HChbC5nTkPFt2ftN8DhCJb7q9tNYc8WNvtPJydjCmBbXVkpf84",
  "key24": "HCtzwErTUJ4FZNKfPrEZfH21jnSh1TEFAe57BJmwagGEs9WsSxtNW8ZVpKRyGZvQB3u7VZ8X2vzDSeM87DybHoY",
  "key25": "31iN9hoyAJnfPUBrQpf6VTd3Ke5YdaZkDeByPY6PA89Acx4kdgitm4SPcP1kRcD4PcGn2MdRKwWWUKiu5yci5g1d",
  "key26": "4DtzsqW7fcWysqDLcoLfe14ks5RQSivdnJjRVL2s8UBVHp3VL2ajsytVYbuggrcvLf5pGpUWssTQ29yQbWmsq5eS",
  "key27": "21dRZb8xdhzJx8j1V69NuMbe5Hu3jzt44UZSzWHcLetxomYtjcWsvwTpxPRcw8c4nhmymQ4X1dTjTtz87Vz8NBGX",
  "key28": "3wabZsc7UswHQcSpQqs11QPzLWsxjSn1dPpo6LgUJRD27DgAtpZ4NK43YTyQpXhx4tvtCe67wdrHiDjNPYwUSUMu",
  "key29": "3uKvP6NrcPVuz7n4K9shvocRewHG5b6xFp6kWxhmSc6U284CUM36fDA7TsKZq35FsLrDM88JufUTysxKd2Dd7uK8",
  "key30": "cA322T8g9uR8F11zRLD728uap3eX4SHdCBwjX4rMxHmi7xMVnxEj8Aob7Q9teTwKcYinKPtQtVW4WmtJB71Ky9o",
  "key31": "53agCyXPu6eF32c9AqLfq8pEBLhAU8gJTs7JgzzvbQH2mm6P5j3bUWTgSFox9uZLbR6GSqz4j2HbSuXDRbTxrxzd",
  "key32": "2uwqgTLB9huq18cdjE93mmnJwvdTaVM4FfNVKz9SskfyyLUG8vU13AAdNe6g3DxfYC96nobQnBPcrPeaPdu6PuCA",
  "key33": "3uFsx9ZzfEpQuYpBmdFcScbsi9xrVv6pY1rjU9VeFsXajaMR958YKn7ebcfr7XeXjJ8MmgeUmPJfQJbFuoycGsS3",
  "key34": "5tJvUa7qhwhEccjkP5niXdST3H4YxezCHDKsQ87wqUnJnF9eirvj8JXGUB3TLgYFPbNLovpwcwiLQ6BMdafYGdci",
  "key35": "5oswZnrNHx6Af8vKsdAQe6cHuNcLBcXBFJwrA2kr7B27ryGY4ri8y4v1EfL8pbZAzia4eQCNBKfxa42u6Nj4UwPh",
  "key36": "2KAudq2btdnf8keLgYH1JtWJ1Yd1HxcgFJjEMjf6cvKeTvxCnznfGfqGGwWuUUDzqJH8QeXkAyLPPXZnToBdq57p",
  "key37": "5mcvcQVW61FumBZSxr8nZoesw36xDvZfYVdiQmxWv9BehAxHKhunRSEDPT2agomZNn268AkYCxMbgCPeb8JngMMX",
  "key38": "4CQefQehtJV9SJxf8wv275cGxTrpsTH8mY12iFaLTy9QodDhFa6RKXgEpMtvzBJcSvDnn67Z4HGLacQ5gas2BfTq",
  "key39": "3nW5AWEmnSbkvxXwkMPAVzZUFrxzp5P4Zrx56RBAsLETps6e6KcMMmLgbRYdNBQrRGTtUwzbVD1tuPcBuRsjADxW",
  "key40": "2VAbWUUMq2AD2c4H8bB2gVuDfU9itLLj24ain7huhhfuJuw675mrWFzkYZ6frBS5dUP3pGEWmZEZARR2bsuxRUDo"
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
