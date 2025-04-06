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
    "omCSGDDpLUDsh2iDZcxf81qyd7XTDA8GoGbdauscBuPktUNBQ9bSUBD9BiWwDDe1yjEe9iBw1LPNtLoeGCzusdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RtTxuYUMTdV8NKeArZwokJ4d9H1GG7yTd7mRuzZJwPxZySskQ3nTX28fpa38owJwdkAiRMGkSSJi5bQuZNytPE5",
  "key1": "3fNK1xvoFfsLh1riDATgQ4gMzmD7YicLmrQgBVurhTqQafdkX1FiYxXKhzQ4RRLHtWi8HBEaWj5YwkarrbayXACn",
  "key2": "3FkePUzzn5zwmQC6aruEjLX8PRdSjq3UHFnzrEwVuxKpAvnd3GTPbc9axQwbKiATAtLkZbwaUYiDnZnySgmFBUKG",
  "key3": "63CbkHRy2i32GokqHH2qV9smiZGXjvJ5hMRs2QemoKhcQaR7t95Q6q4RtEuZp6kX4643oxEM6iwugRAabtu1zYZ7",
  "key4": "5Z8GCx3SqQE331TGGQXUj1ER7g2DywwaUsidTw2da5db9ehLEHT9CsGTu1xBVNVxiskh4njnhscZ6fugqqwFB5VK",
  "key5": "3RhY1bBMNexRU4M8EF5pqSnsg9qvaPRWX7DkaPBCTXz5H2numh4tSu3SGVC1FEjGHDBzu2tq9zqNGqEYLBw8FJxc",
  "key6": "4JQVbxzjSZgods2GRp3a8oMNXbR8GAjNAUYr1W7LSt7Ukmn3XhVNy4RgwtHcfsDjcqZcCft2BCL8PmiT95CWEtuc",
  "key7": "4Y7fEg63WXCXh8bgDfQvL7UzxvbkbQLzYboKBLcXZQRSq9GY29mt4CyMcaaFUJabBV27C1qCZyteHnCXxywc8TJ",
  "key8": "5LNHa2WpPagj711V8GLVWxBuU6Rp5Kut52FW9jywxNHiVt4UEMjwh9DQmcA4uPFMzUmorDsS5ifMipKKHLuA2Khj",
  "key9": "31oaWA2x6TruynxQmqmT752RYM2ffK4A8g4JiYMzGBaUP4uzyKGAttffrnjBaogpEoRDLfDhqWJa8fjz5CZVFiTs",
  "key10": "2Xxd4sXezHKKn953qvYbBmERYEiMqAsNiwnnonhRurEyiPZHnKpiGETExbfWezFGKoTSjuojK7TvHz6NYpna9GxX",
  "key11": "a7W8d83ENGWmSy4MWPGPZomJXDurWra5HmffiWBR1VTBuP4grEeg1z9qbgz5se9QGqnGuurTnz1cgygzq5SEtJc",
  "key12": "31PafsgBfjwXXpce9BZQG3Wf7jo3jLLeUbMLKt6syVmpuz3qjMM4rBjiWMdZfCBF3Ee7PsdBWkZEn16vkfqpRs7t",
  "key13": "3jiwF5UodxHdyF6zMM7wa3kvYQgNLNKtKz3Pnyv326p4jKfbSjeCQsbFHNbtmpbkMNvPStx8MpKKTRvTjveUNDV8",
  "key14": "5GEBJgKQ9JGpQvoG2anDDwnet5Tr8xME2KYMDr6duCR4qYgudc1Tm9esXg2TCTtjZ8ooZzeBKhGoHAae3M9D28iR",
  "key15": "36SMnoeU5ca91FXh7vqtSz8L96A2NkK1MoHtsMpRmoYURSZZ5sMN1Kz2Cj33upGxjfhzsRspvcTt3fyZNZydst8X",
  "key16": "4ZiAwtiSXR7hMC2isdW3qUAnAwVGmNxNRZwmbwuqntfTY5HF6TgrmPUFhpF2tEcN4YkGdNwEogX5GzZokva16Dir",
  "key17": "24YVmRXzqoCaXYLYUJAhffuGMbhgpZVCgiXqXU6y3p65tqNaRYzmXJW2RUP5Pmo8V85kVcRPM4p6wCMEBL1WhaXV",
  "key18": "2J5BJWco9QceyYX9b3ZPnr5ZymzWD3bfdj1GHc1BgxTKXJzsvpcUTXZfPZbMy33WcvfmgFiXnE4j4ve9bmw1BAR2",
  "key19": "uTkpv3xbVmwEfQhYwUzqZX3hre4U2AtZQdiWzEisjBtnk57BqM7SKsbj68Gmt9kVmUserRzYBBrVGBxFDF6dL3x",
  "key20": "5L3MhsoVLaFWczPhLvsRc9UqJ49jYGkWrtqUHVjdN7Y6dkjvWoXunjDbeVpnSktjLLXJrhKjePaepLpxeogxD3Fk",
  "key21": "34pZ1ojRcM3yQPojCrPL14CAXf6QyT1JSoMEFTNcewmdf7jnr8rPJa81k3yBdzC9o5BuTeXgpezzupMzQHcdb7bu",
  "key22": "3XMfYReG9kD5koQRr8cA6XRcjyHV2yKoQ9dUZ9LLPVSFxU2SjKYrQoG5fufSpfQuFTY27KfdPkdHDu3Pz5AZU1QL",
  "key23": "3P5S21scjhi3VHvxJLCCTyYTmvgwBbTC1mEajW9YGJqwhBKdpfpgTSvxeB18cM67ezJyaLQz435rS3whzWM7JsQg",
  "key24": "48j7Cw9THbADBQ5rfk8RFGbcVmHfLNRXMgDzbxSneQBdqi4wPYhNKryFtsRugk7ZHqf82NBZ8X9JPEvMrQoJvuV9",
  "key25": "2yunsvx71i147qTm5CdPyqad4xLT6XdWzMhnTybekrjh7RVHJgPcv526EHYw4pUduXFSwrByHXNdNycXGER9oE7n",
  "key26": "5kc2finFov2WaeshdNv6fpXtFfUusgzXbNRERYzxBRZ1hnyY9uJPBdRGv7CNR3iYiQV8hbREp8jRTDn3GBWv2TJF",
  "key27": "4GgGm6T5WaB3oPYCKFpvvRFqLwdNyj5ExgMvRECFWLE8foWuD1MmpbYvCfhb2NeJQ2GFmZUYck3PrGjVaKVSPNMR",
  "key28": "4iWJbW5Cd3cF2P4RL7hP2uxTPgkgs9pL9duqdPE8rzREmTcDtug6EfK7hSVTvdz6BqrPuALTSgzFkkkwS8HcqQmJ",
  "key29": "55ocEyiQT2vER6cGXRz6Hw6HoX3C65b2MghEbuvkrkFezL4mxtg9Y8VATSA8Wt7XApbMZ2jWTQso5aUCuNCubSRq",
  "key30": "631jP6garzoFob9ZmLyPBBHMKQwzBkZxH6eZiwFaw6LeXjCedt9QX3sy8NThouVSwxaEWNp2oJZMFRtXQ26qsE4T",
  "key31": "VDPKP7jPB7K7gYugckMMVkHzELebFbWBAMMJYrFEFPTtuSfcwmUE2LLzn1TCKkJEmfFbtNP6gJbJnk8N6Yqn12A",
  "key32": "39CyvNh5ofFTwa6YDEuTx8rVmy6zenkLrvbjkAkrCZunKqwAnHpbayhHPxfoRv1WbjSbmHPSS3XUfwua98RU64UX",
  "key33": "4P9NMmMcvCWESReGrzRaNn1GvkVsS5gCBFULXmNpaKNHNd43nd3cNvrnjRN8jLf8h3kVsusodWwdPMbAEuDLsWNd",
  "key34": "4hMZuiVSreFZceGXgY9gNw7egQYRP9Rd14ATS8yK18rrgjs9dcT7STRaYftkKJcfQkRgFcGG5oHgWmMMaVbtHQ7S",
  "key35": "srXaHvA3ZBP7b7UetiNorUq6AHuQXViA8SFaKkTAYEvLJka4w532ryEBcSpHmMbERS6rG2JVDgAoeacS1SuKTp2",
  "key36": "2yok2GCh6a3w6xqvtRYNct952hfNVA4zxVaWBU3MUXbVoHiKWHHwiiEfRraiZGNwHSDMSMrwVVbi6WhmdkWdjih2"
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
