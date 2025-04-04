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
    "3924bnybEsL4xG1t2BeCZ8o5QWC7Ybdq4jzupH8gC16Dmjq13vjBDDRuKWpGKZxyqvQxKMcsgeR4yxQHasDqgZNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CGc49oVFEzAJLxmfG2a9DwQ63RT3RkqWKurLPKgiXq92tGN9i6o8R9QWKVwSKpTRY6yUzpq89tgKwHwQRdDJBg7",
  "key1": "33Zo4Y6W1k36jnsNkCGVJ5sE7kYqqcKqwpmNuVGsqRmHjmoD841ccUwPxdaETLHTtBJZxgMH7LCF3GEqPdRcraGL",
  "key2": "5q7z7cSyjGcxiW7FQC99AwMLRUzoTbSPxqgj7EZXjcrxKUnTZkpribBXGTEMMzb13qjLfVnuPQbf1bqRmgsP4Q4z",
  "key3": "35dhKYYgrgf21Wbmz9JPaYk1HHun2twZH1BjpE6QPeXVHWan95eryMLvaL7jUE6ig2jkoyaKL5VxpmCpkk1SNFum",
  "key4": "uKzswZB3DUigcRWYiNkvQnGtbnLSjfQHU4cL52JfAv1vsfvdu9wicBBXhf5YuuegDjEdnvwbbpJXSNRj4uiPSs7",
  "key5": "3XkApn6fJWEuosnB2Pk3WTDVdksJhuH77hY5PWLTwC8hN1abDqGHoby9fQav3RYjEwjyPgcyctm8hmTczrGTjPg9",
  "key6": "2y66YUXmKFFkExcSFwwb3UNXCNmDn9G8sadeYhGufGyCVdALUXzmtnJ4efwy6tzHyue73szVoPPtJHTnS121FZe6",
  "key7": "5Ykr6pzDECAQyHdKqRmAXNyeTtcFEw515voRx8FwwJCGDVH7YXF9JNBuLDduG9ZBQe8oicVfiSqRL52p1k26QeDr",
  "key8": "4kEqrrpPNQ815jemd6MnnM4Bx2HQJM9uX7ozLbKmb7MenZL1DY2kn9xJhbydrqK7aS1gKXpPNyhscgC4hadF3FvU",
  "key9": "2E6ZRWZfYZ7G5sYHehJKYou8ZqJvHRumQPz7ASUapwazoF7qAUTn3oWUtR4DpXP55jZSpEHmJMeQpoCF3JpHMe1X",
  "key10": "5fxzC5RGqvK1mvmrnAZjDbKaFmmRa8QP64T82WwsmA49xXdEtCzLCHQ7uqQh24a88ez4wvxzCA1DzKHyFpWmfCQq",
  "key11": "3uDRbGZ99oyottutP5aRRhgaVjT8nKQdhw3hPp1wmVGabrMtY4uyh7cFoC9YcPgADVqC1Kukk2A4i82qqYtd2TFV",
  "key12": "4z8uWBNPZDVmmsRWzcS2854zWZ35UZdzpec6P9K1A16NCJbpKgfYqAWp7zcxU5oWHJzbuihcFsUwJT2HiDsrQysw",
  "key13": "6ReH3FgaRUWsq4BtNKgKLPhBh1UtbLY6J7EkaB3y525Duu1Nf3SQadjBe6Y2Q56ywu4oGx8yta9gPsuC9XZ2nNZ",
  "key14": "4Hn1ZiRtN9hvKfPDvxFt88wbudLguSBeWWtrZtRUJTKsixC1JA92nWpJiCsGZyzH839UCZQWipBEZBbKmsTUXNxs",
  "key15": "5LvxWxQRB9UMxiDLBmrgB3REqDtetW6W4RkRSAWwBbnVaB9hs3TRSzWxwRNYj2ox713JTmKDsVYbYJnEbJk6nbG7",
  "key16": "5aXcbU3FZ3CKs2cpjvwNj9pzBcLhiZEsW8EvzYEhhJrnU497q14HcGKkUu7fb392pV766L7vPy1ZREMvDywYoYj3",
  "key17": "2E7x3XqUYmCNuDM2ZQRgvm81AjcDtswcX3XyZmpFzfM4UchJcQnjqHtpJJUPnGSTzxbkdPHLBocZjE9KgQiw6QkD",
  "key18": "5RbqYBdQxeL3QFQ43ewoYrcHCcrWSoTQ1g2Q5Jei86yw8XfcKPLbXqv9RWZdGLMi5KURqR7ctegowN4zQgN6FTjk",
  "key19": "3wF1dj1KJXERJB58Tr88QPSGD9WBb8RbcQ2ZAGbUZjpyBttz436RhEQtezYpdfjQQtHxFKJZTNPEHLHdVDeZPP9H",
  "key20": "3hK2SvAjRU28scthH4deiLx35RF1uvcpJWsSvHW5N8m7XTeyoSPB2KnKcsgVart5p2UqcMppC2JyFWATsL1vXLZT",
  "key21": "3yB3HiiAH11KboH7fkPpD3oBC5NMa4c5gYUZHAEdnJcTF4dWENi8o7AX9VC6NTss7jCuwA6z5jKrcNQDeHm2gLcY",
  "key22": "5ZxyY9S2p77VNSH68G8QX7MziGwjdWa7athvKJcANWA1cG8pwe2pQJWiymJq8PS7BgCrTG5f4dH4kjRgnzm8dmKW",
  "key23": "48bGP2dGkW5pgw8oSXjJVJoqXpKQTNyaa7tHCup4jTh1vJcx2RaVBgEhE8PGnDQ6E76Ky53QGb3NfiRYgWjRdWi4",
  "key24": "2HqGXCpqQ57zAQpJL5iXG8P9yUArusMzZGSp1fSsEQTPPWgRX6ywREWfeNvfdJEmztH4bMC7NQCiLvxq6YmTGFmK",
  "key25": "5UEyRwJ11YS3WsabWnxx51FGfAuKZuDPNiTij83n8UCfv2i98vsrgq2449jK5BNt4Vfu8cpDWgA9EoTSk4Wev52w",
  "key26": "3H9VatoNYPPFp9RiS2KFenP2gKUuCbvHMtWDsuafsUinxAxzbeuJMUjuh1y9UajtnML6fT6Fezm3Qps1H9tQeezw",
  "key27": "gUBYB49XdANoznbgRN1oiazWQnkzbqTPL1P6PYVgeBAvbWrmQLCrWs9Ba1yL3AEXgV5DsULBMQdiZQcMpNiDqHa",
  "key28": "4PZ3b8PJRfrVS62ymV4AosZJBTkBgiWQtdmoaqSkmFTvxJ8yjcX8aF6735jwT889CqAJw8or9TDZMir1VRuco4BW",
  "key29": "3JcDoP5qmEzWX3JzSqZ8PAQJDP7RnvRf3cQEEmuqtsNat5yso2MELDh3ZAs7CPf2hdZj5QxT5HRo4m4sNAB5GDsY",
  "key30": "2NQuHAu85SMJRDnM4YTLbkuSUhPu2aWGkjrf5wBd8fVqGKtbuyHtTqr1eW2iygu3frcXcqPUaFjudM4WhHnm4jhn",
  "key31": "3eACfT8D8FauC5U7NLD9yE1F8WicXfAspGJycB2xTRAjS6DGnjchxMpPJtFCHRzrQi9pdpr9zGEaujjAvR6efF4X",
  "key32": "3YmGjr2QYwsFT4QhPEsKa4TvAXd2ZtvvZgQSm5vfPxorLjwbTVGLXpsQzsPVZ8NG6vsVGjmVsbKdVxckrH9bPPXy",
  "key33": "5gFnuW3ya4npZntRWfVxNSGKvfCiLrYJyQvX2YEjBoCz7eHDy1HHDnvHtihndwua5JxzgY24LLFvucqaHWRNSbbp",
  "key34": "5GajrsNe3KxkkETk6SQPbUxcFGkVr8Eyp7FTed6rmUu9h5ZBs27qAqqbhJoqQ66EuqJb6td3AtsmBj3NNWRZ8qZ1",
  "key35": "5ZKsLRVvWMzJNMn2zCZVr9qEXDYKMP1wkFERz2UCVKKzrKrNKryMhe1yuMHwCKeFM17Zw5hBtQFABTTo2f28yknm",
  "key36": "3p3aANxB5mDnc96XDzwkPEnSiDBB72EJ2pYBwu2sB99EdUhu8h1TV5zREcfDGXUsU2TvakXhnUaiA24N6fxDPyCB",
  "key37": "3uRD25djs4qe4CjRKAfsNfvpu9WJfAC1QKz1onaaSeQQxySCDp8D4CbEWAXgLeT68cKytebUwjR6R3u39oR8c2G8",
  "key38": "5xrYsBDM9KgehnjXzskjQjP9NiNgne7m4zc5RqK3KBQJob1R7Z93rgKbppbpUKaTAQZk2SJF4JB8bkHbAkPhXWib",
  "key39": "dKQ6biHR9CRaVtJrocPy7z1qJ5GqsbiRjCqsGGauQCCyKWdRqcuf7GvsWB6TaREbjjesrbddmSWHAQVAusovgTk",
  "key40": "3B1Jr5365XG9DBSHE9e4UTQefqRuzx9p678VMij9x7TMRW4g4dysD7rJ1TV8rN3rTyzcJFdnDqxk35FNzmNNKZsQ",
  "key41": "MGX9QQpxQYRYg2A3RUHWgMrqwT4MeqFWvb9YTeqbd2M3iDj12Lw8r3hier2ukPKorPA5DE61JvSw7yw4zow4x2D",
  "key42": "4HwHb8gcFBVp8b9TymhEJp9y46G56L9dtPCMvohHrsyHKuTUXW1DB5khfcnV1s5UQThMWhKCgJKyiEKrjTEBDEyR",
  "key43": "59z2pYoFAN8zqAmticfmBySy7r8uU3X5fnTqLz9zWB7wW67DMpMML1q3MBBTKKchMLuUNaYtdNuhmAEA3opLESjE",
  "key44": "5k7nCTkPHsrcExKQtz543RVvSMdSeQddD2LMDEPXzgnqrTQz6U5RiYA9ppxmvECfzLt9USJ8dwXS2apBGFJnr6uN",
  "key45": "45EzBYEWnSj7zzdoTubhP4VKSCnPE1xZNvMgqDAEhNEokgo2T2W9yqUumQDt2PGoPFJnsPXTgFGYuYkop3uiAYh9",
  "key46": "21jdFnjpA512eFCHiyYAPqKqxX99XKbJqvdBMB5iiazz1P6Qq2cSkd5itjMizaEo8ceRhkgNbwv6PjvgY3M23DaF",
  "key47": "gUXu1Q6gPyBSySMwa54t7vWMAX8gWmZK7db5c4VgJ3wj8ZpGcXNNn5xTgEXvhjDPMaqdop4jUjH194hhz67Lj38",
  "key48": "X4EMsUAwjsKKzyeDcR6jGe86fyTQh3oBLGH1zoRmvCq11RQkWNpnvHhRPR81jcjqKgjnXokDea9YuwqLBWAMc27",
  "key49": "H2VaxrkokCHL6r9EuN6PgomUW4rSJJuL39vUAxYQVVpA5wGrWCWFbe5sHUEZ3hLesS312Xbupyd6QxhHD1H8eCB"
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
