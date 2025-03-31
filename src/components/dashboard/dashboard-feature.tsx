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
    "4RShHWsURKUWL8NQr62716derZurXkekpLFdK9EanA2MqUwwXjq1DqF9q86aPpQ1UfSUjvmhWj2C5hCPEgR2Yi6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YAnoNXeRBjeQZ1UMRiQEE7zZ3rNF4U5Qm1GkSumF6i1v3W5wWURwtNsFjAZkorDiW4KA2ztDGz11Q81LrxSQ15G",
  "key1": "moiC1Wp7vDB5H74ziKGfPUVnxpjLFP54TUuHH2t1LUvVWQHYVPcCjpcpDnEee66rtdtsWMVhumyphPtip1RgVWE",
  "key2": "3jneiSGYEJRSrsW28gx2mAiep8EZ4BcAtTD88LtHcqUA3MubX9UiHf9BM4uEPSRcfji3yVCHSte5sFqRtrXfcdub",
  "key3": "3cx9UY43Bj3TT7r69ymgAddddkxsgUMA7Uva3HnrDX9afYZgPaqqRCyL4Cse1V8X6wHBL5VAZBP9a4BiU2fMtvSB",
  "key4": "3D9LfW7cc2A88L8pzZjVUyU2FZ6oTHe9njR6sPXEHHNui4JdyvZAj28NL3DbHN7xhQR4ARb2Y5LZKByJuJq6vDFn",
  "key5": "3ZXxz4mDHY2fZFWfg8Qha17fsSPQ4MV7XUV9V5ESBGGw5wvuTprdCbZg6aJSQgZK3thNg5z7kzz9TLgkYayzRDxp",
  "key6": "4cyc5j4va6UMmLQ9Poq2y5HHeGfFKXB5fcZQCcouyqyLBWyyHfvbXugiuHpPKPxzWZ4X42LfGTp2uhjpqrJhLJxp",
  "key7": "38JfkouyPapMX5BGnGjXMKqUQaPA7uEYeCoNh2RiaoxKL2efUmZ6xexV9T1svAUnMFQC3YCftTrLfpDoMf66RtmU",
  "key8": "3Mg5w4QMdQauFUarurwy1RxbreML2tPfDx19Xn33kt8Ahf5FvTJ7nuSgjDUuB2REFopKqyQNpXzErqRUi3LQXhUx",
  "key9": "4Zvo7vBaoHGiTZBnR87oLyM44gbSvkMLvhf1tDDQWq59TN1GqzyL1TEZpKAZAWP7GonWkWp8483oiUUgxQcKUhEY",
  "key10": "5oMUvuPyk4nA8R7iRtjo4mFEsRhTuXFXZCZGNxPBB2LAGEk7jNczuJrmPPKBmRUFRujNUGCvuxMZr3vQ4APWTDA2",
  "key11": "3MJbREGcComeBXtwoGKmKhYiPoyPcZh6RMUXWr7KD2JCG6TbfieVpsWugVjWtEs6VQZCcjHjq663AzQpDF6ui2d5",
  "key12": "3uJaf2PMYEsBGc2q7L1H1eXa3Unx22WNa79bkRrW6TKGktCQ3SzrQBMHmDKxgm8qmcJcw1YQSJYBcUQTHGqe4fVv",
  "key13": "2gHfj4Gu2NzS8y1r3ZDrdYvXPUYMcVWj7cdQSLbM9coFjACi6C1gJedj62PJLURxLLJ1FcT2wdZksTgQtqwHvGS1",
  "key14": "f7Aq1u4vPELoVWtYjkCeGkoUE5ESf7oAzqjHyDw1hveKgNcB6yx1EbpWwAfgeZJjcWj5yfy6vSjd7nTfaWoPeRR",
  "key15": "2e54qEihiU69e5A55FqKydeuvjghXaihhh4f17w9aiddYJNwQESLWKu1Z78wFfuD24Cv9hHg9D59yAZLJ8sBYUjk",
  "key16": "5Q9N4CsxBSzgQd3QxVnFM3crv1Ku7SoLSAypguhjbqXfmuMGovm1zFG31zBYX2nRQs2VpW31YYRFKhSoSVH1dVU",
  "key17": "4sjmc3ne2t7TgLDd2GftvrPYevEnio2KEG5dj341gW8x3JwbbNGKYdn8a4MyngoapwuqpuAhu4MQf7hCDBUe5yQd",
  "key18": "314SDEZ7pB5cBeeXb1UupvRzNS8Z2MYjoCuFC7ZbjpSHSgZYAGWtzBBQ8QyKzegtyYePdbisVquVx2coegWvRAfD",
  "key19": "29C3iYc397MPA8vwX3dQ4sNwcWXRiGfdiTSzmGWjEuTyDvrM97AYQt1oD5XLYwatT3XD9DvDRdraZtQm1iSbvXws",
  "key20": "2iaJnWyecCEc7y62cvbjn1ehhuF9weMcXZyjC3CpSPMCsLjL2atCXxrJVthF9DV9jEcyNM753NDrLgVSxz2Vbngo",
  "key21": "4tSiSGWDreVWCRxvEzWaRfSM6BKB8BK5wgZkLpBDtAmYbowaFM1yX2aCYZYscaAR4A4ZP4CCGVfJtGYCS1avah4Z",
  "key22": "2Vs2Sq9Z8DxNQzrCTwWVeiQcB3mCjur5295fVUGjTuBXhUgztW9eUCezN3ekoBqhNj5UXjiyz1ZgwsrfR5TEFrZc",
  "key23": "2HcBNjBcdxiP5VV2iBk1wXGSt6ZzUbrS1326pyq6tUKLVadQk8PwVJV6YQNSi2brrfxN6LTue64SYDWE9kFw4T6g",
  "key24": "5YqmexiTDs7WoX2pJBf3EQ3iBQR8zFhBiaAnH5o7tf5utxxrDHXuX9LJd2kZbnSAdfsUddAThUkWTGhsSda8MFUz",
  "key25": "3jSaJfMChJcktYBM4hxU3KjZxJ6sjdUzYUUJh5eBhacHFkQo9p8BoTDn8c89i3hSSf9tFejJhtNmNCjMrJw5vkkn",
  "key26": "2vbnfKpaPUgFPgWi65fcfC9U8fa5yFWnYJgmUoQpWKZKJbjU8d6Fxqwym9ewR57J6c9m7ytb66pHAruDx6Y1i7KY",
  "key27": "5bZndFuNyqCEqPbURwdeBiUbozn9LisvynMk53j4qvtATx2bd6qXvb3JjXycNFVdBVeyD4GF5v2Rw2pgJH2vbWLB",
  "key28": "3uArobho6mg8pKdZaJ8sLf9vgU3JvufnVfc6mBvTWQK3pLkXtSBhLiAznZ4RR5ds9dtENnfGbpnS558Hz7aTKswj",
  "key29": "27kEZFTSvQ652RHaLc4EneWaeVfuJFBejJ6BmZBLqapL83MepJuiCZGhMiHy3xjAsQppfhpF5Nbu2ymxDKmLWtPj",
  "key30": "42Qoordr4LVsNZfNpwiVJvsBT5XNbd5e7gTQUtetm24aumJjuzz7TDv4TgNy5g2TZwh17mRB4S5cmbtHnW6KEVCJ",
  "key31": "214TaVa6rwCwerscwRWLRX8fwA9kZh2g75gGbUPXzDPCmujgNjsE3tXnAYUms68hY2fgX3tinpHGri7pgWYYCY1W",
  "key32": "49M5DhgvdDTCgYSTTXzhZJyXxCf7Ew8TG29Vd8BooTQi7QDViWTdwLZJior3Zi4diVHuhCkpDtxQEUni5QqFB5RJ",
  "key33": "byYsDwmVkiiKVQboCKbzPKdmtxuiKaNs2f4WxXKuRUrbZBWWqrFyP85uJnb4iJxXfrMQ4XBZnt4Yg8rju4cZ4cT",
  "key34": "2uoXDsj5wQGykuRK6pVPognf1zoibc5bAByQgikiAmpDyphMzWF55B3B4o2LcdD6suX9w1RG7GcCr65nmPNYNWAa",
  "key35": "5y7c6nwUamqn6rnJDw4eVnsp1jNSjNBVpC5c4cX9GNafgvco6Eytfq2YouUAmnxb7TeKyfbAJ147TEn5h16813Xo",
  "key36": "1GuS74UnSBXEKxvPn8k6zZB2Q3L85vJ84GZHiWGXkX4UhTb1f8KABohaqxasbnnXLoegs4x4sqmGTyAZVEx6aSS",
  "key37": "3kCMmeiEzpFg16MEWVAYaaJo9sfkBD69gtqqanNxw8EpcFnkpToq4YMyqSYCME1GzU3nnMEvhqgAAbX4zpctgQUD",
  "key38": "3NVCCNZpBzpot9NjFURhwtb8Vt3xrgwKDBfDZiSxuVPuoH5SY9fCMm8gwa2yac9JgZWeSaNAz7C6u996Wp42Jma3",
  "key39": "2JCZtzc3RFHL3wo61VLuHCHNvH18Bw5EXoNU1PeigyuVELWebhSaAwgyVJutbKdUjq2pFQvnfgHGnCSDGXQtko6e",
  "key40": "57nKM2ttPi86ioPQYCXmtXhzozKZCXuQEmQ1YGvZo8mJFKFUMRuwDoCNimLckRB36kyZr4JAsp2X7KPpkKiNP284"
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
