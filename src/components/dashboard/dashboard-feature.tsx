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
    "3MbYKhN4YqkhKGAAZHX8eviSgXxcm75ExcKDNA7HByCMUm4tucqbKuH8xNU41YnrCcCBAdkBmGB6K9JTNbkjXwJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r8tuWvbpj7GmRZahATJB6FtU23Pb1SwWkqDxcnCNqWBsEUmiW2XA69WSBRWHTt9Vddkc4uFmvXER9gqe9vfsv5h",
  "key1": "4xWR6hCGBWSSVbUDJc2CrDpagLtHL1uuDK1biWzqgdVkdvK9xksnEEbMR1uejyoPyeywbueXMVy2pAo3pqkwYTST",
  "key2": "3GPM4L6EpsVntrCZBi2FszfWbcCNNuF2BvYjxAL5ymGrk4mqzGwPfgBnuCzjz4MxWtzJnrPemBhshboxzghyPstH",
  "key3": "5iQZFkHTRJeLReuv6PMsSyzcLGbfNCqzA3fH5YHBsDayhzfwo59MRhupcNtFNN1VgR8S7WyWwESSZThM62Mz51Gd",
  "key4": "2jCp3hUEXJPGymAzgJ8n3FTW47ebtjC3oLjWrA4H2mtCWNE1UuhRg3ND8dUZgNLepnfyfqeNZjijSghTA57amBPJ",
  "key5": "5iHjv31vh9Gp8CsS4SrjYErqiMQ2yvtQdyhfsbvD5vU3UKRqVPHFGgYASvjiGvuoRY78jQguS28wvnxLATUZdUW1",
  "key6": "3iZsbJUQwBJkN14MAqwa7582pEvEQfCkv1TM9EhSCFreus4VGWgPag4Rro1niY23sZcSgGFTiZGYBSTitzXmP1AN",
  "key7": "2cJk8j9bRqAge85Q8TLdfmFt8p9okfD1UUGRHubuj6rR658dD3AccPnTcphiUs9KREgcyoLY6Uww6JNrses4jZpV",
  "key8": "59pmRr6SGrh7mr6xBRq4KxT5Ujdyru25ZfG31KGKgBbM2omGxBCv55TF5nn7vyAEpVm4oYwhQ1Hc9HLwjgyiHuPV",
  "key9": "38ZxjonEJzCo4GMwjWFJBXKEVrw7qdsJb2YmAkuHFiDsZk8QxD4aiy6ZuiN6pdnE6CiZqpjuygQRtHwJFiRXcHgK",
  "key10": "4UA2nzGjWNxWkNetFbMBUcpqA8jJkWkc8m8MCm4Uv6auwzanXtXeVaYmWsu8iQgfPUV24fyqahwedUSvYh1HDhUZ",
  "key11": "2f8U9f5JXUP6DcAPvpSgaWntvEQnZSf3ehy6fj3JyHwCompjxVV9yBzxGsCNtnfETDMRGsxc45JrPvnTYj3zyVFV",
  "key12": "44TZ2eehGuvn6iiHUbNsHSumfYw3wWXvwWyzygVANqpqfkGbzDfAkoRKYn4fw9F7kFVVEDQndkzQPi27D543VZAg",
  "key13": "4ZJ7SzSbviGC56E8ysc6xyfKNtJXCzodPL9PKYcG9LPup7W84f3BkF4Si4XLZqJogCAJNacvXXeWGaw9AQRbaS1W",
  "key14": "2KgDhXvPh7RU5k9V5Qaum9pSB1WtkeVv4tJFZjvU887dfSML3cMorNvmBRxuateMQzwkAhtp1zmQJcq8A2sgXZC5",
  "key15": "3g2bjGhaYJEP65b8EizetBMkTmHmYZtPfgnT46UU7Ps7VGFBEBkiyT6Tpx31PJEHofPT5vnvkyo3Hwa1vdnNFaoV",
  "key16": "2z36GXs87sdAZAVyubBnsg3FB2bH9BMvzLU9qfi6RkyTponTYtKR7ngq5bRJ4F5UMgvRFeavbiVqCmWMZSQQy9sH",
  "key17": "4hHEEVVLLnf6MAeVD1CkyKxLFSr955RG8xBPRWUgyHB2oPXMk18C1r6Nypf5fMZB4CfYyjPq1H4jbbiV74hpVJkk",
  "key18": "4qjQV3PG5E2Xg3fWAvvKxnacCAaRUxcKtXcAPCeQLiKM1ebKT7EK6gToc8Ytq4q2pqngywaKBFhDTvKogKpJaVLx",
  "key19": "23XWrYLmEu6DzX26VuN7aDjee2JutF5cnjLsY8xcLqLDfETABBToAdkjnqwqkvUYwqvhJqb96VMVDL2R1a9e9WYH",
  "key20": "NVZkEuJdpgEtvRACyxYJaAV4jcgSCZ66ymAHmgXmMjtFUnoRnDZqwDKUVjfiS65oNv429BtcoowDrZXNrPAyL77",
  "key21": "4uJqwzD7uZX2KpQCGgJ9eJfA2aXzGh7WQM1G29cqmgpsHpvMWiHW6mcHPqkYDGcWpPcyWerJJpe46eCy7pyFaAVc",
  "key22": "4vBwLpodh3i2xRj8vtcNpisJiQfpWfTGUbLANiBVw5NMKtVU2HTqAN11zo9EayNWZsoTTKfjuqM7DYfgMJSJGpvL",
  "key23": "2k85RvDeeGk5aMpyLRs3xxgoadLLDnNHdFVUYHc9QCWAaXDWser2wS8ABeLFqeqh5LnbDDZ6cAGyFzkNQtDHQLJx",
  "key24": "YLDdhYD4j1uKjYAYzR9ZXBWsepuYxBkfk52jw5wtcn2CKNiWcGrjNtkkWPrjWiwEg4VqcF5bMERH9oWPWM9ubpA",
  "key25": "5RVDE3TWAjF5zqiKpuUh1a94MLC3VmpWdBTqRG741Xztxsf1XgBBnYJJ6JeQtWQPA2bpXMEEEgaFszaMpsex6RS6",
  "key26": "45jdvugVfpf7ApYMkHy1XzaYWwmNwzDV9ogVqPgSGaezAuFYXoW2rby7yWzanF1uqXFUWzRKkXbpH9FvpLcjq1ud",
  "key27": "2gHyDUQVudL8vbapW4KSqFfJ96NPXzMw7gbhQopKX8qGsQvLevbpLM7bSpPJBaw1tB4zNzf9cQxMpexmYYgiRR1V",
  "key28": "5S9L6QqekdwVjSBtUZT1dXxuckAZgj2ANupy2on3epMjByVsUcHDgVahoAsGSPRSzJNDjyG3ztM3BiM2Tgz6phFc",
  "key29": "AJGg6dEPnUQA28Dxy5cT9L2eSbsn236jf5dLkEUJieLEYgmUKHEGLjutD9beVkPMipqoz8SPPo66vboFFgLmxqb",
  "key30": "45TLsktmzaddxgv72xnWidPizoktiSxGiaBMrw119b1aB9sHvZQkBzbwXHQbkkQxCQRDtvxU2PQTa44DxDYxKNmC",
  "key31": "eh748qCzy64keTespzZsS4HAkXNnqgm7BcH5oNcw5QpLj9aEmpjmZHV7KJBHZy1uiAy9vjZgDPQvvB616ffpCGp",
  "key32": "4QQiHD1T3evsxYoaEEZVzQBBvCiitWAzQFXJJy87NeT6QoLAE9mdKXKjMbPiFPtQhBSahXkcgZe9KaLj6rkiMUNq",
  "key33": "4is8wixgddMu5N84eJwyU27XRCvM2kYWgXSBk2vgiQ8mVXdJNZLGWEesd1Ms99EkNLoW7SLmcTM7G3SH9hY3NZXV",
  "key34": "2yBExbv8aLDuBEk3n94JdNFzRMnapYcDMr8uZLpupZx4AyRcARrTEfXeUY8JfwTvrVq5LVhzra3F5Cy1CA9aMy2H",
  "key35": "461G3EN8h5VQ6NLr5rjUxweyvE2HxgQ64yZkb3AekQAFWbf8NmxaXUU9vM43k4UNZxGhiiSYsg7AyTYXy5nbkv3F",
  "key36": "55fQ4cNrFWv5WRZ85rtzdaDYceuWoCwjXK739z3QDFJC8Yt1u6wNz4SmL4S4n85TyZV8Eee6LiLjUNbHM9v2iCk9",
  "key37": "4xeKGg81Ped4brHpxb6MQefZ6K2RQh83C7aoT6H9UAbC4yeC7NkQgyvVSh2zpFmXZjmPQFxpCaPAh75kXyTpKeXj",
  "key38": "21eqMMkJCmP65u5AQm5hfDsXs5zAmNH6LwuZBUFdvyiq741yaSP2Z4RdDKzBtSFiqgiprH6nKteBKxBwsDqEmvi8",
  "key39": "3jskYr1duTVAcHkGNxUMUeDk4tqDzjnyEE35F5KywkxsRvLBUyyZ8UyPeq8gA1b5dQFHzaagpZWpB445TgZb4uJC",
  "key40": "4tZsnBmzjBSESVTq8uuAfA3NNv7JwwEm8mzJ1Wy91c45MUKBxu57VpEj4dz5swj2xxQBCSqPKwFJ6GdvNujMb2VL"
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
