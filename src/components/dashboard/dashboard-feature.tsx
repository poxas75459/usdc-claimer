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
    "3tige4qp3KcViNJYTxMCytyRJ2fgdyLPwMfYuyceNjMck8BFgvpYrkD19tLqUNHCBwu2PyWb2JNq7veJkoPDbNBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hmT1NSiuzTJA4CiGcfGMit3XMCAA9y3szzPkKfJ4nGfyqkSZqczSGweEjcRiNEWFYDowFLwY4iXTmBzqwBaxrUT",
  "key1": "doBpXx2EMqA6QzARJmabzroVxkWhoj2yC5zAKSxsSy5716datFfZUQT6TxEPdzmcHrbfEirX9WDdReyCqVEkUpu",
  "key2": "24zzLSXHDE29ZS3JDMsffZN925bRuL2p6S6aHNDMBv6JVnEBGTFBnu6GQvdrJvSoaXjHxsk6sDqfahWbSdzppNt3",
  "key3": "3daDYFzkcc2d4sRfxRtyv4zzbRqLQ26cSpQaNbQnwzLM44XfV5YMQRwuoNjmRnt9oF7U6hyZpJWFLDpdtZ6avDqA",
  "key4": "3wTQKTzaFFujqXGZMpUSmxct6aHCutjYT2bvSW7oLY9tcqZohQisBzGtBqJA7Q1mqV2EhZZcpmkm6TXW6FYpxswu",
  "key5": "3uX6yh3m6ghNwuvnKugWF7LZBsYyqWHCa6ZYgm6B8t2mmFuWpkrFT9cstU9iLNMWg9AoWKGtz9MfSL9wpXk8bJJZ",
  "key6": "PBv6xmSu1NuB2f3jrfunVrJSn4WZtjqqkKwcoQoJ2PLJevjA9Qk9wY8bbDHdGcqeNNiEma41QejAa714UUXKdad",
  "key7": "3vioEeE7JF1Ws7mgipoBssRf4nb5DkeVedQeZDpEJwRiY99E9UZNZbhqv1riHyJepsv13QRJegjiWce7k3tJV9c7",
  "key8": "Fmx9NkLdSSNXiXSRv9uWS7STrqSgBQSBMiu2gjcZqTPGKCtA4F6mtKywu3T5HJyZyjby4Vjs3xR2VhPeTAKJQKc",
  "key9": "PtsLZ5u9rBV5p5KYkkKbAnkjpVC7VcMGcmUp8m2U6y6dgn9GEUVMiGRhxDw6WgY7hHhsfkFss59tjpTw9BVryTv",
  "key10": "25zbfEkf1wb9FKjynegVPxnHTw8vEzCMjh64QvnzJoQsNSpA8ZvpwJfxLXqNjC7kwPQ67ayiChApqUsepEAsTBPB",
  "key11": "3CgfC5uqux9SeVpfqLCj4UQjvYRPFc4VRcXPe3WRTYck7kvJFEVAwVLgPYs2GHvoNzkU34ssuWeHWSXUp46n7C1x",
  "key12": "2ioTdfPixURmtPZcZomysE6X7C8Lvct7YjwvRUhF5vVauojW87eKoNxR6EqU2GJQmBpEijj4hh4EULFEZGMNR2iY",
  "key13": "5KdxeVUY1jQskYKwqVB1jBSo16UXcseKKuXok41NeF53AParb1kiSsMXsZ4XnoBgJEM2LdHoZYGkZAzdUP3P58bh",
  "key14": "2Z3HAvv9QRT7e7PE2BA7bo2LjfqvwZpphnNwCscbicR3TKdtJFkU6S89YAENHgpWK99kX99vog63B7uhspF92Cao",
  "key15": "2xrq5AjeTt9v3xb3TZkLjS2NFn3dxY6gd45v8omruAH1RNaTykxjxV7UvvnLWomcTToS5c5nFHNBuEEjyiwmdWd3",
  "key16": "4fjZxJAv9p3N9BGzrYQVqG32Xqn7sLEsbRj26jQkTpRRhm3hFqhq9w9EHxRkWN87X4RdLQoxhCUvqd8zQGPSPubH",
  "key17": "6RvqSssaqSVSkNyUPUXbgziRVZufX9n7kCmGZUbbVdUmM6iqsYSsgyGCumTZjh9uf7mBsaS7pkULMxGWZ3E4Azx",
  "key18": "3VVZC1PdUEgbvbVE6oL69GixZAfNxp48x212fV9PVsj4xUJFFqxEJ1qXxjGMPh4ecsynvS431eCUqQZc3TbzDmNL",
  "key19": "4gojgYqdkBbRE4px9ymeTRgv4UMi7jabKCfsmHQSAS97Pcp6pv72zQmjVXzXjDpT3joYKwknFRhqtLbuBfQuP7PW",
  "key20": "9upu4sFa2j6eKv1cvB6S4qAcwiz9nPDWesn5rtxWyMxd9fxZ96FfDV27Gsqtv2igkE3DsZtNoDMV89EmBnga5cZ",
  "key21": "4ENGHveYMcCtEab7qQ94ykJD41SAp6UXCCwCb44ErkxQaJmxvK5WCKHpR4gkTwwFnS1L9JzFo1y4Zzkqi49EHndv",
  "key22": "37nhcnm5XfDhyshG6fzLEkfsD2CDH67YvKRcTG9SX5PyCNRs5AtnYqqrQ9TJsxs76ud3psJpcGZqjsZDsHa5qRXv",
  "key23": "3wgioJ7J5STR7DuCn3NjAwLezEtBWr7TFk5WofDuXha7mxHBmdaXxen54Pq8nd7Vxq3mCrJUKEDntxRvwLyKXz1Q",
  "key24": "42JPkwhV5cvi718Damp4ieKEWHBqsjuVgD8gvhMzkPpJDCqSAQR7JeA3ggDP7jLbGnxsmpbbq8MX9qRh4sji7xjj",
  "key25": "61NgcdzQPqKcPa3peSMPtYXam425BGxHhQc5NhuyaTVHh2SuTbChmJ5STsHrrY4dU1aiDPqxH3jo5ZKqUgpq1G1z",
  "key26": "3EWdHZ5HNUKVPz8B5PvvE7P2sBPZwbS1s8YfjLBsPDfFse3oVtHya9iD75j1MyJBGR2JhDkHMPj9SkKQLMGe1uFs",
  "key27": "5pW4fCnerATGwmzq9DkZPtxiR3iHLVv6Gem6caFyPUM4srnjwNGpxxGE338fdYQHiMTa9tV9GiSzHRiERH2SbEac",
  "key28": "32j3BP5yjK3iSdQdUHszosWK6VZjqb5xzN79JtECHEspUtywdZSjzAzu5UXsM2R1yGjqmGkamhk5gRiWsQECRXyt",
  "key29": "3C9owfsZuWHp5cc1rhKNpkbU22oy3nqpEeFgDtps1vegPDTwB2ytTi6DUoR6BrCAUZL7fHssXQW4P44N4bU2UtHP",
  "key30": "CYoY4xkH7UJJGg9eKUracRvcW84AXRQtgjJfekaxTWbTpBHUYYQiV2KexHCwKztYFJGizKgy8eQiEPDnYQMGa7q",
  "key31": "3asj1kTURXbcEfKA83w6SYGGA7Tu6jJ2XFwMoMsLPETdQasXwxVqaUSebHpDoLCDdwyY5pHPeuPB78d86Cpt1CPB",
  "key32": "5iqhwQx3gMgvUZub6Xoz8nzZCyZVZPfaPs7e9xoNfP2FGeJtwWhsL4xgwcTV4XV7rxSHAPMS3dedBtifQ1hcEcA2",
  "key33": "3Rzm4wh2zH4CusxiNMntjhjQZnpD6aDymcXxMLfT5UKnwqQ5jhsG9pGF7g61YpTqAoEZWqjdYDmBseS7uYsR4QYr",
  "key34": "46HRhpo6LRGWiznNuR5K8GyGfzbUsAAkrufzxpLBNNzR224MxTr74fGSCGb48PzAqNC8hx16hVFHPxt9mbzdvbST",
  "key35": "4vQ4B6GqyUXoVtb1VJqH4n6h76y3mPXuVy32gqfkj9SHc4VhdEQVbPCHKZrPsBu3yVFDyVjjK3PXPfw2iBELLJ9d",
  "key36": "QZeeU66ZcumkMuwMYsX1tbLGdj1YLt4BhRoPKBjc7iJdkxE5LrJEbuH7yXhjVqdBR3qw3bvS8HeXKvTro5q2ZXR",
  "key37": "3XyG6YnMzw1gy2kVchvxQkFX5M6aYWi1APzJqK41vMcocbRaL3FGEst4g3jPgAVJwTtSU1fseyccGPcXRfUSdQLX",
  "key38": "4FZjcpHXELmGNSunjkFfMjdamnFRz2BTHsZTdtA7Tbk52miZaU38Naa27b1LrWsDhNag6CEq4xwebm3pBT6BUDin",
  "key39": "2PeXC27aapYMSgJNydoqupdHSpgFfYbeT75jTt8WL5zkvHjwgdwBZXNxUT66KdSw7F6741iwsMms9BuF9Ze4a1vE",
  "key40": "2M1NRZsemftoYW9LusRZPDEJuCYMH77UYxqAYXUjBzyPMeXH1WEv6LsDKgJzToZSaswbpMk4vHXHaykyMLcaoZYS",
  "key41": "uNopU4ap7JjdPvR7gukFgbbVtGYD3Qn3SnCFh7FgPd27YhoZN6RVi7fL6Y5o8JjUr1qf7VkGocfe6jFZBqYmchY",
  "key42": "4KE9aGCSyKFeAWAVXR4zTHq4YHgGU6BTYGptFifzuz5Gfm6UJS5afdAqLRSqLHQMbXAc9v5RLTZKdgg3Ak1jzV72",
  "key43": "2pxPYVYFKkUGHcesRwFYWJ4fUAB1Rm7n3BmibGDgpSqMjWPs4RiLtTEdnxcDWYMd2tgmAkqBnp4dgnKVWDwk74Y9",
  "key44": "28M34rdwrCZHmGJZsyLk1wmsTTuoGurebP1JNaziJA5sScv6Qo4P9bfH7TycuySwzXxdMks9toKd3bDoC2GtDv7X",
  "key45": "37wYSf7ezLVQcEDoMyibCHVHMJMdFC3mt1nzBCRpsR8t58kQx5zWj9mD77wYkV9Cv2eKMFxHzBfmpW2qcXneWTag",
  "key46": "3pZ8XfafoiKEgBv71iEffSBvsHRuRBEMM2N4kNKwW2zDJPGFNkaw16SpY3ojnZwirpkjnLL8SFgUq4G6VJNDxWGn",
  "key47": "4vi6Jr3qqdWZnTtVmM87YSgeSUeD5Zb15PMFhPya7jRe2AanHKAjvTXxH6j524RbpRZuMAQXuuiWX9tXQAhJxtXz",
  "key48": "5iZTG5T7Ni5WEW1mi1pM5XowexKknhcdc5DpaF6P6UpSJUpiNS5uUYcrFe5HipotCT9CMnnWHGaWYoYSYBM9fGxs"
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
