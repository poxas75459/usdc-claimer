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
    "3BAMugH6DH6Wc89uXKixqm5D74W5Mb37q3ZwV6DM3qamsrF5L6CE1pQBYh9M4KjeN3q39xoHoZe4PJ1nvcvgeeQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LvS9mrG9tnu9LeyCakCQG56Z9RBBwPhB5sqvyb9nGuJBEWRDKBeCQ14R68mxmM2rzwNrWuQVHHivHavXsgTi38X",
  "key1": "5iGeaZ6ZSbLB2FaHoSZ1gwe8KUP8vzdFSLPhfxq2KVDK5mFf38F32RhPhX6aTJNPuL1u3hjgCvCCq8B9VuD5Q3ka",
  "key2": "NHk85Qqwfgk8jHoBzDgn9J6erbKX5AVkumZwweVoVsoJmgsGmvbf9LoShh1u1xQUp1kqZKCZvgUp31cSSByCUtB",
  "key3": "4sSEoWKh7hYaQL3NZfWQhMkxc7CrVy9TyPcdCo89xQJ7RM3peoEKKhKcSZ8CA4NM8hbseGEJ1sriVRn5Q917PLw1",
  "key4": "YmR1hd9CrZjQDftJ54CH8r1878sFK1cTmL4WEBSRHyB6v3gmiwyPQFbMJRYXdKd8AnkyxsUChVsJRoevfgMbHMe",
  "key5": "qC4pdnGUUxUC2oo4rBQark8x4hCNHfyG4MsYRrbjqf8C3aJE7dB7hKXt59EpRqUggrGuvbewbKWX4K4ZZ87vLvm",
  "key6": "4jVxZLgEbvfESo37LMNtwTDQg4GdmM6sah9jemcMW5BA1XnL7LV1kCuSimaaWHoB7HFCEnRGgxvDYVX1jHs4ddhT",
  "key7": "B44ActtigxQqQ3EAij4SKpqHMG9SimZdQc2FfKZV2NnPEGZJgu35xNPrJTeCsKMv9gCiViaKNvnZJyN81YEsQ4k",
  "key8": "3JxfLRCZ2qJvXDBiBbvUBuvoXXkgvSap4kj7ij3shJ44EbherqLYR4fKfWiHARfS6uoaCmoqzroHcp9khc6PYgFn",
  "key9": "3bjkKufF9SirCDDF7FBjsLTpTDT7hPnwCkpRHEPpczMTbz28D8cTzs6yqvLSPdwcgtvyz33aUjSx54niAgQcddQG",
  "key10": "4xbm6GikE5YLShJCtNA6iuNh87UQX5aJXRmj6atxKYhqRzEGjEK4cdtPCuvvPRxP2rLNAE6fc3MsJxuRZfjS79db",
  "key11": "2qit7zf3U11P186wWy9zG7hPUvqhytexykptYHBSCyF7gSn3UDuxMzBDvxgo8zyaDCc1Nsa4K1RPFVaMH3TtwzNa",
  "key12": "brUqSmebosSUMMW7Lu6mDJKgSSDmZvjGR4Sk6opi9WZbRx9TgiGwMHMvnx7Eq4VBp2YgEw5QYymRbNCYNM2Vdkr",
  "key13": "3CfQdXdfy3JBmBXn5gA7qZqJobBdcd5iokimSc33xTPqgsSiPDkdUnBi2eVc5NkguskjWkH94ZZNuFFLMSrKyZkh",
  "key14": "7aWTHpqxvRSzNC1hBy3Qco2j1gwUFoKPJh7EwY23UPfxx58GYrWVz1dFTWGohLkDzmv5hgt8hLR7YpQ2uMvKK4G",
  "key15": "3zQhuDW8PngykEomUveo4WZ9DpfgoTFAJMEHdTQJ7zrcWTvs7M2Uq4h9UdMbifcswmGMTSzfktE1THvxBp8hVXy",
  "key16": "2xFNPM5WpPaHKgfQ8n3qfqGNafkctfVP5M7r7HhhvkMj1ABaoNjBAsAts2e1BXvz8S8inBtaL2dt25WxJ1zp4mn4",
  "key17": "5e2TmcPnveBnfMSkNaPAx9NKY2qRHsPZDLMMjQkaLU2bXf1QoteCHL89z8ZdYPEU2m4ZJc3dNkxV1iZoNavwWyvp",
  "key18": "5SfX4Gs4dmAWsES8k9NE3ecAKz9VBJH6y6rS75yjrgHaF4Gxpw1yHJXQ7by3VDGV3Zq36jNqDiu4Dk7histTQJyf",
  "key19": "49VVXtUSix22ixhN8tzPqcrfkWYNX2nk2KpLQJ25CoPMa4kpMdWQe4G76keVpKKE7mTsxsEFrQF6qAzfgAJ2qwuY",
  "key20": "BCNMFGjKKVbMF4X7WMj9DdrneSHiGuxUM9MErrHBGvYaEXoCtMFufj7FjxWzbyR3vszzZGh3YohpaRk4GzEuMZb",
  "key21": "2ZMNVzzemYkiwdDxThn2BLRME94G1mKb3xtRcQpD11qaVCGR83Mdr3uXRwj9ZGP9qghX8zxu1DNmaNkS5tFjsyoj",
  "key22": "3HcEjsXyu7qr3sk2KHDeRwiK92hoFSgLJvLsw6AKHmseKfujZTgwaQHBjvcvPjSSRdMVGXFpGZ1Bnj6C7GYx2am1",
  "key23": "2NA5ahAFXcwXVbBud9v2qa9XW9Td4gf8GYPmaJtuyfWUWz4KJgDvWTNvayDn2PZhG4NkSXhnH16ju9seEyLg53LQ",
  "key24": "2EtSNKKkqEkyQG7bp2p9Zz4rrwkbVfqhjoQzAhEoMhjNtYzXxtF8uySxguZNCEUvE18fACvQWxxsJ5dHSEcM4gEn",
  "key25": "4oKkEAoLnKywdvPwNdhMEZSdie2FvVMQrrt33uzsMooLPwbYZVpuVsELq96LqtQREyM4nxehEquimRDnN7mBBvEC",
  "key26": "2B56FLZA7YE9n2LC9SMa9hqEr1sNqNmeffLdwvWtCJ8iBsfsjnXye98QP1xknsComYFDuBEa5eYQppzDr8VLq7eF",
  "key27": "irBZppe6ysshxAwNRET6aL6kgZKLctMWJqA8TJvgRJCQDdrDkhFzwikNNrkE71VnvCKcWd3jRdcZpH6k5x4LdnF",
  "key28": "3mnzhQaJio69cfrYvGMQARNuemq2TSr2xb5htecMpcSVNJTmy4LUQfbnhfi44RvujcxkBHnwVmrA1umWLvx1RnRk",
  "key29": "2yJh8AhM6yWwLLAJk36VgFB5xFsmgMxhroZmRBBvpBiWF7WhsMRyho7YWHFdg326oP75uLBYznvX8fHvCxKH5ttT",
  "key30": "3Dv8Wm5NHaXWPTuUuiQcqjz2DppL5y4U68PQms2biUZFeh8xhwV4mK98HVHxQEXN14NK4iu3V2sQTfx49CUY3DP4",
  "key31": "5aZrN5rLiyzEogqBo3gb35FZvpLpi7ynmfgFZcs7MSiwG3mV6xyqZkncysWvW9PSZN3GgM3ap13EMTxtV8vcRK7k",
  "key32": "4TyVnNzQ7rHNguiM7WmE2TQDQa2FiKKknwEhx98fUi33hPjaz53e9aFtHvMq2dgX7xECRdDLVCKdcx4v1AYpJurr",
  "key33": "4P8hVoXA84iBaf2khZN7R8Nt2GQNUwvwZ6oameiM1MCbqrTiPAjS6j6RHA5Cvp4r2MYM2BAZG3YiDygmBqHhmVVa",
  "key34": "3PYe3AgB3KYXiig7tZLXXTXTx8UsUmiazcEXuWRkQarPFuNm7bV5cpsqQuZgZZU9EfWPgvTnKcAdxuduNwPczQJY",
  "key35": "3W5wgPstS3TXrMHGQ8HaSNceBvqjc7npYnC8QNFPHmy7JvLEHnEz121teXuyg7XhFJFLD8zYjVP432qaKtFiJbhJ",
  "key36": "5m4s9shPFBrQ9nN49wyWwvhf1Wuev9CyHjNLHzV6HfjxR1GFYoAA5A51Q6DBztKWmqSCoew8UC2TM8Df44GXgKCU",
  "key37": "AuoVGXwPeniDhY9veC5HWqu4Y9QjpXh9ohnhCm3br5prdpeuUEt2Q9sFbCMdEiKyt5c2nUWVkSLLLBVS6zhFQwv",
  "key38": "5QGhxPsBkFhHRWyr5QJcDgjV1mVkjZqgQiPh84pvQcHSm3DyDb3S56NZttTKZ3KCmQhwqhQvBUuhpXWw2osytkr",
  "key39": "5qrA8MFy3BSxykVqhfviYHtuk8SAovpjtjkSDjbhn2KQfrQpDirJMEerNTExtXCCb1NHBYuBsNJuCiQheXMP3WRU",
  "key40": "2JQ8RmqqpBUNDcFcjrnpcPLEDVSYb5pEP8FgXiMV5vGEFCT7BDkJdRRT6uDgsYHQPfX2CzmFEc8Pr33ywstFNnCY",
  "key41": "5cNJCokZoyyuEw3xS2qryazmaH9CNspiaomwQMNJjuX1EVJQeEjEnig5NSBZUkBq52qgjP2T3GyrTjrxUfgioucy",
  "key42": "5beQeDvsqvaVa7xpTShG6CGkqTWWdNtAgmpKANF9sRW2dARXAWtLaPbL6YZv22sctKpuLedppvrDjFvDjgjGgJCs",
  "key43": "4PqfCvByt6QxQkp6FmMff6WsTyzznueYwtwa8fQ3LnchoFRvyPLsV7BPyfgJzUiw1AY8bGTRUMVRD7HMXVJkcWEK",
  "key44": "3NjrdxDhc6fmzbLmanzXsFzXaVvJaa1pZaMsvEAKv6P7Q9jPmLCVHoptLD97zM5cm185kvYCtAEuWJgSSDnD9nW9",
  "key45": "5BT5YyoUwzjv4MDTaneEZroxydkvm4T8ZCmJkodrExwP63jxsTNTtTABTfWTApfrCo4yktG4m9uDwAY13zmXiNyw",
  "key46": "2PhcWSi6NyaokouFxU8mjmDd4apEPjBaW73QFTSgfaxAmJWQPviZKDDjV56QbojNeB7k8qeGy1YbkTJMvxVJqhVH",
  "key47": "2nrs7NiKEJv7Q3kkpG1Mx2RyS5M39Mkt7x2A1141sVPQuCPCTXtowCqtFh3SA5h3WGsomMv5DKY3RRA2jU1SZ59B",
  "key48": "5jysyqScD2ecPvQL6uonGAqy5xPmgm1oYyU18ACxmuYsb2r62yhTb5yWSXPgAScWe5V8dXDYLszCQxvyP3GTzHbK"
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
