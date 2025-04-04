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
    "57uEnVr3Avbn1HAhq26xbKYPiw26aZZ3cUn5dqeFZ3wBpNXbc5ZSiYCvY88CvHv3N9GCunRPZJr5TjwSdiheZWmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qa96aTmmyBVi4JxGgBfqndPB925vLwfQsUmaWrkMLc65EfjmRZShDHHd8zjjDjB9xwdM7uiiSaF3yCditjLY7c5",
  "key1": "3hVh96kDQAuVPR5vwBbJ7ToMzvUPZJPQ2jbxxpg8EooNLxfoCaSRpG57dhL51vDpc9Qh33Bw3peKQRskyPzomtNA",
  "key2": "65TCj2aK3ahrFnDZbPPquTdG6FvkyzYaHd88fMLAdWLWVQpWSQiTMKXzngXMeUQ2tPNGoCfCgyVKvKcvnUJizSaR",
  "key3": "2ErU8smB2Ea8meiST2rLz7WxaFemB7tKHG92HRvcqMTeYvDT9m8eT6UnjfLmke7oJevE4xFZzk2AodBaab3nzd3M",
  "key4": "5Hm1zGEJ5XDULWFpgo3dMeB5pHSU3vcqfxhQwiUMjBjwfJyP4mSpR27b43fAZSTvC1zJQiRR915hEkJp5DtC9Svw",
  "key5": "LencHa46XM1pGui4jAEQXgphLRgdbrrmBBLkx52Ch2qc866KWggNkhvcnV4cC1eB68Y6Q2nciJe9tkyLwAkXB1r",
  "key6": "4kjo1SoJeeXFaMuGCc4FTGrTQZs5EkEnwLsA9ocYiQ4eKessVeF8TTCFFWYaKQG8tUTvhSVnywfst4KbxFYZD4Sz",
  "key7": "5QQWhVsc7P5frLTzE8WUNWzAJCikvKBBouqwtiDyY36ASsA5UFG54wWpbbxjgdsWovuL9VyQSi1ZDPe5xt4o7ULL",
  "key8": "2jcc6Qcooq1RUfam4Miat6uz3Ju5PpZnThYawJQnYymUpyX7J9vtKBGpMvEmsVKDPiR7gmZDxEg2DTnLJwqrBCNy",
  "key9": "24dP2QvT5YyyuymTqi5DJSkcqNs1o4Fmo6pD8Ba6oe1XFB2zdwE9KojYTyVBwCuBP2cy1k4gRSt9CMY4wm4hr1Hp",
  "key10": "2qisuFKWVVx4vU9THA2WX4oo3KiLGjYrPA2oi8NQXVKZSYxd8EePB6MFG9s2dsbyYUPkmfpVLwgbPBQ33BAveN4q",
  "key11": "jVVQ8rsUZTKdbyBvfkuXAVxugsLyfkFr3LxUsQ6jdLRqTMdxH38RKe6FVcXV76fUJ1vnbqQvgCouqHbkJ54Ljh3",
  "key12": "2oSznCLXc7gEfCDrp4q6w1JXWUexis6Qk2SXuBGKVBzNGsZwbfacMfSXTzAYFtN796E918XPrSthKNZMt6rLXsoV",
  "key13": "1c41syxx6BpGzA3tGYbfpE4MKt7yy7i7TXoQZNzSmAaUSJ38ndrgXaUF6xNdjErxX7ZuctbmQLa6gKob6Z7xcDU",
  "key14": "3owLQRLYwGW924cQ6ZmVniYDa1C1d9VW85rGwzTxvhiP57k35y1pVS6vvhNc9gitsRdktGoZn73WoVeE73g64iJh",
  "key15": "62Z7wgSUGgC9nDD33BxZPSWzT78xvCdcTirDhW9ojafup8xCzZWufHyN4FBWdUTcwusLsKTr42ozja8fD8g81HcC",
  "key16": "5X4YhGNzHi77o2fBtQptsg3zosgqGCcRLsQqMqSphREK5wos4mFkJhfqBhTG3KnjAmLRU85zrzR5vxppgvVHBDW8",
  "key17": "81Z6hfzCg5v7S2yVk35EMfcizxo1fZESFA14heEYxmyxLnUtVj5nxwmaPzDxDmvfBdpQmV6HRACRQAxAeUaLPJ3",
  "key18": "2KXgcVKqVTjSyFLBRcrfdWVAosnfTMyWj2T6KULSTDzNBCQFgHUshUCpfDAPGuW3DiZzjT6RZDDmV7wtfw4AtEKu",
  "key19": "5SNFR4RyDZ54fc9tdbPPkijTzfkz6C4mzZboG1CKmbR1E7TNUKt5t9jKG5ueQ15LycXpn5z2RLy9XABRyjGNhGtB",
  "key20": "EMPFQaqgVGN3oHZYngRfpfNcY3C6qXpG8gDaR8nskniZFjjiHMnjZT6WpsSASyZo6dTH3gPPewkDjSYd5u8UQNa",
  "key21": "3U4gZqjc2hK6zYUcirs2J3nLFVkbmtwb9kthv8NChnH5LSbtvQeDERfKwuuouUUq5dwXoKEA5bWqwU3Ki11q3b3y",
  "key22": "3BgNpk6qD98BTs6trnPEkXVyHAX94hVqoSJHqVYeGGJpZTJioke3ZpSnuXTHa2E6RsAgnroqq7iwZeMYF4zGRPHt",
  "key23": "4jotnyNsSeXHJGaBoGUNvhiaT7L3kLDLaiy4AWPFSf1hFS81A17gQyXwzTeCwj3oiYYEwdpZEMLzFsMoG4MH5eGn",
  "key24": "2HZn3mvLtLgvSBh3CEZ4VfG9EAKUQdGetPVzdGNMXUfXEFwazWyvojN9ZhEwqRafxe4YJ4gqXbqMDKuRVWuosX1G",
  "key25": "3ZWMPDJ3kNrRtiiuxU5JR3La5kjebnU1D1oTJQML7eY13ABZazeeM5ZJ6wsremX8K7Peo6TJ8XduTy4ZFMNugqrY",
  "key26": "4ktPMRRsS8vwX6eNgkJVSnCsnv71bQsAjMxJm51kicr15Xs8VwD6sMGijDtrHmuufd4XGRQe5arYPbGZTzVAp6aJ",
  "key27": "2mBFGwWyBam5MNFNYCtKMLChtqBh36iTQiLCNpg5UEJxm56SJ6BsUn1yrtK1PXM3dcRAQQZ8zt94abVHS7nXfSE8",
  "key28": "2GSmLT3Gcm216m6w3fbH65jzdPHP2NvpFxqPTspKWFt41SAS68fmzhMSeu6UtEHBTPTxeUS3MJu1kHdLK8w45YvH",
  "key29": "5PsjTqeMMUmwaUGD94oXtTCMLnUDQPE5rxhoCwRWor2oGPBHNCTiugwHKN1xd81UN7GpCiheSSHRcD1f256suoWD",
  "key30": "5SsEx6hrKYYmTWKNKA6ikamz8GgyKNfdJn5fxGMqUr4J5tYF1aofs8JrxwaRkmDGHMYUEa3YatziH4NixhVUFK44",
  "key31": "63NvLoxPv3ccfxfEbRFsBPrww3A6frk4jgAgS4xdpkp5E8Xcqeh7LQcuXXmWiLj2j4xrmBgaGomsnJ2RQDGwqQUu",
  "key32": "3EsHAC1b767W7UmyooaXsbXZxM6FHmae1bawmhVqHKGjUSYapoDGcVhq37F7WUitp3TJz3XkQxqeEEnCghvSa61S",
  "key33": "LTYRXPPJ4i9C1bDgAC3mGoJ2ycTZBVwPUu9bggHASmFnCtW3oV9ZR1n3R3pufRvBc3XAni1k1m83uf7qRz54ubU",
  "key34": "QgzhqxdQAeVDUYKobWppsbJ4vYEJbNZrutcQ9YpvnJeqeDQEYjciDwRAK6g3SnBuE9onGARhcyZoEnJtdGJFMLY",
  "key35": "4T8zkagusDRfCy3YKhJ8BFonK5gRAXYRaRAdpxriXWdpPTqKSBB1rQoGg45Yrv3GYT1Y3Bjf66ASb5Aip5iWmBx8",
  "key36": "4t8m5MuHi662MH8NnAJnwgMPYce1g9kzk2sZin6FECvPUf6xDASt2xzKLMjGR1Wcm9xA8mfjPmnisVs26HYbKyzx",
  "key37": "5z4jnxSCSrjRANawrkmUBj5wGZCjrdba6nCnadHZ78SYZNkUStZ7qgR115Xjh6usUGJ53BcmaMPjuQuW8Vy4aHf",
  "key38": "GRFiSMdtsSrMi9WFKm6KyYXWfMBh255C4eYcbqhnT3wcLNhTMTz5Dhye51QApWc9j3q7sVgQTYcaFgZuW4uGK6W",
  "key39": "4YW11W4aqP79Uf5exJqy5ZHdbygPArRDchxiiQvtU93gJ2RfAs4CHgAZYB2hxnEhWyoSyRXZkmMnTgABzrJPRCWV",
  "key40": "4CErRZdXuRidc7Jn1aeMEgqajF99qg53xtToDrZobrWsSQACxFnJHffcnMk4wCoQB8iGvhG16yFzjSmZtK2NTtMN",
  "key41": "4q6swuahQemeU7aXYHnGHPqLSF6Xq8icK3jv5N3SGGBUas6gCZHQng3MgSyqYbqPjWNJs9hzjtb6XuzQ9Aka7JaE",
  "key42": "3d6LMQpJgZFHmAE9MkxG3KMA7Moj2QWDyQNbSJydu9ordFsZz3sMR1udCeaXeU6zTQ8A2UNUxU1y8LEtHn2doeKW",
  "key43": "5w581svLTxm64Mz56B6KUzWWwEscCBWwDuLVtZ22VvmyLqBK2oJa39iikTQJieXgFAGe6UFtYVVUXWrYbCCxV6oM",
  "key44": "5VCj1tRL25VvVtJ5CjhhkQpb66giUGsThCvFMwCAyBSdPMF7q5PUSg7oANKUKnWMfFQDFZvxE927oJZGaDqdQkZZ",
  "key45": "3qBK5iYheDEbaD1o4fvugmGpAarSWEcC7MDxSpZqWam2k2Zt6hkXfZuoYou4WXrQRuYDELosEQ24Ej3kJyDwthV8"
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
