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
    "26GNA6eZHYFDRih1x85jywa7cr8BA985KC45zrewZD727AaTkSZxnf2VApKzXiMf6AncunU3eSpym8En5WNZoqND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L891qrL6uc2VFeiN1LzHuoB5DJVaFEhABF5zgoFfcA1diJBb2Z4dEjXxZG99eFcRBpzMSaJ1VX4ca2v6wVgaku3",
  "key1": "4Fcv29VM6UMa388LMeV6wMcgdngPD6QyhfSZeoWiHjkfvyTj1TmuvHqjpPuaNgpmhYTyV7rfPc5ZREJ6s9x6v6Ct",
  "key2": "328NyGvNFfcAuDr7wnXgPrvSzKuiL6AgwHmNiW8ReFwWbyQkxQgdThFsaPwKN6tD6nnpNjxFwcRJKfUxB7teCBgW",
  "key3": "52o9nzzv1Ce6LkS1koe6ffpcjRzAGdPxLCi3637Tt3WitW6NVgWfcMKmPmyaV4azfdhSJESfs1HtgCaH2P1goBXF",
  "key4": "4ZAkSmFWRVTTkJaRoZvahD443wfudJAUDPLFs5o3UC4VgmRAZcmJFVCfrAEpUbvtNJDqwCsks87vWWMvLADzLJW",
  "key5": "2e2TgELHGMBCCD532xFUUcCtkBtiLKStCXMEYBkb3FjyxGZZFbKruynwT1LWDAae9nuAq3KVYZWWVF79F1wTm9rM",
  "key6": "4ipXT5FhBwpSUUmNR6qMBNWBH5bGPtj9Z4P1PnsftebXSqATpuXGJwqnCM2TVwt5hag3S32xhD6zCaHqrBfgAqy5",
  "key7": "4pKRNMfDUfNqooKH5Jtp66KwdzmksEq5Co2sJZ77ynz6KvSMFVmENeqAVrsnu5YKiBs8okfbv5cgKsaiC92Zjkzt",
  "key8": "2RyQJRQRCAfXyGeDbCoEQbVx9Rf6z8SdtjzHev9LNPXu5reitU6deeWqRVghggrqQqxvX9ydhY9MBgknVQYLw3J4",
  "key9": "39tmG2bAZCM4NocZH87AfJxYVtoK2SPiSceWQdvm8geP7DMvw82VWXa7maNw2w6XmZTuy1wA3FHZ3VBMNoTy6LgJ",
  "key10": "3N9qa3M9KGKZPeiZyCpPAVaVCQJpjZfGV9hq7J5KUUVfTBDbc6ia4CGRcXcdjpufA5tcCPBKXptq1p8dk7mtM7ew",
  "key11": "2VmN1FNcvJz9rZLvQ9cPzVfJdjv72xjKzRL2tewPJMHQkbaWsnp7dqTDr2ZgHTLyaTXLTCa2C1CVAqycN6VX2EoM",
  "key12": "2kB643gcmmfSUp9dMAqnZi6VKrYBZzLQni6CGBM61aTwXVzFY9eR447EZZmaMeqTxjeQMypoyYaz5bHaKDxMJc79",
  "key13": "5hN9mk7Fft76ATFMH29vLy3USnXDqepk5fV833mHWaK9CU72CJgKcJSwN4sC8C9cNVZszmvqDuJptXeo9ruwdNNh",
  "key14": "5bzrf45ZD3WCQc6kk5Ksmhv3XRF55ZDkpT2bYyCsYAHGW4assENfeMfE4nwqSs8X214AURTJDVM2y8xmVGc5dxhC",
  "key15": "WDGDiJjwrFNQ2ZfimGduGc4NfzTFsnwLARCMid28HN28uYQujCWxfEWSJauyaitZejQ4Tr5RkfpTR8NXYyYMJKT",
  "key16": "MDjbfYkeptu4UCqqZLqoa2vKk4Fys3E6sRFQ1hMN8zLzFJEhwi4oUpHYeWpUZsY3pEk2keCuLkGn6A59DWSHvn3",
  "key17": "633eurQh3LbQwzPe98q5dVCdJYGM2TiYHu7A9RmWqe2Y4YER7H6CGxHSogFzf4TKjnaBHg2GbmvdA2UcAfqFGBUr",
  "key18": "2q1Z8MR7j8zqCnV14FRT8RpmHFd6888EgtFxZgiYUP2PgQPgZmZZ1rYFCqYgg9WuPxoxKab9MwGMbqQsrmcUBd11",
  "key19": "4CcwDxQF8kiGNXHYqfzmJ7hyx6nwCNqdXwoWFNyJuUmq85xYJtwbT4pJMjE3syoAuxGxPsa7dV5xSBF8CYBdSUJR",
  "key20": "4ByDPDm4fJExJDi5Y1q7kkP6PEqKLGNvwSKscBXEzE6Hv19vEULpNVqunQnWDH6uZXFfo7CetWkxLFyiV8yTbUcq",
  "key21": "5KhSrJDRKeztnpDmHMuL2nfWt985osHDsPPreMKjR5owJXYjKiFKSn1PqjHuA8sfAsr5eXmadPM9xD1cRE7mReaf",
  "key22": "2DGKkufCboMP6xNMEBGQgDbaqbHAQ5o1UQxftE1QxJ5u5apve8tKo2UEhGkRKjmiWVZiF7iGwhnHqbSKJZSRgmoP",
  "key23": "5W3U2vm5c3yiuAX7ryjg1w3BdiD1pU7HWWjea6Cucswcor7BkSmdc4T8rgpdYRXfYHAZpbKQB37nqmqbbXrszXWJ",
  "key24": "2Q3mTcK5cRFEuSGjGC55RsF7Y6YLQP7GAEyirgWECoeRtdHBMWTNApikbjPQue3FHsFzePV1vkD3YBhAqJXwW9yT",
  "key25": "DV2b9bkcLXtm5UQG7syHKaaoWdutoELZAfZEgT99HrbMoKpCtHkNSMnR6bbnBbBqNdFpFFXVsS6oyLgKbYcEa4w",
  "key26": "EmQGs6FEYKm2a6HtBSqYSkyU1YMtQN832Ynmy9sSTAEMNx7FQ85wgSHdLGRo9FZXiVFcEsBBSGSodPQ3b8dZH9M",
  "key27": "4m5vo9wjPshJYsxK8QysgerqvVwZdqdAPSJyoyB42a2yLJab5MuvEP49NV7bvKteCvcSuU6VpyuuUHAbPfHgq1Nn",
  "key28": "5L6moBvJYECH8HP1fcZL1tRjGt1DENN7W7TLZjcv6ksCNQW977m55cLaa3NBMy4Q4P7Y5eBfW9FcQjb57TNCPhgL",
  "key29": "3sMb2f88jDRWPdi9a68EkuQdawuwKT7DozRD3ej2BuQdp49kHyA34uACQLyKniQLbrf5DED9efi53GFsDbMsGFA3",
  "key30": "2R39JCjiux1Xmg5uBDb2pGZNQdtyxg8s2YAQbdLHH2PhutFVQMmgYBSuGN7U9TSFadCYF3b1EYHEH37ZKys1JfHE",
  "key31": "39rZ5TwE75ytUqirxQXnL6knpTVzBeXqWuhUb8bEXwKrXdb22mqAWXagxa7k7PAXrRvjV11tMDD1CkFEv4ym3AHG",
  "key32": "2s2VTcR5Jf3EE6cu1sAk66caGYsyoB2esJGJfhuD3YSjP8tsQ2xkNTVmHuj8SjxRfDm8jHa7AzvyWzKga6FjhtPs",
  "key33": "SxEEG1HuSNJ5mNr8NbRR7DozbgM3JYhharrAcSxLEAF4rx2u1MXmqX25GU9ozUnvWim3AKrxUDZfzKGkmQZPr8p",
  "key34": "5F2B8tiRSSWyt28RJbmjoBsWXLH93JVe4AhKu6YZn1BRGJa7MUPDjTS92HXLRk9MTeQKoVpEgvK8JHjvZyhuRv8G",
  "key35": "3HhQymAAynC2Gz8qo3qW3xPeKR49sonmQpFMQL8HBZVH7sjDvK4ozxFuvQxPKZ5wZwGf8AbhZmyN7CGfX4KPXJuL",
  "key36": "3CWSmjF2Y92r1jQ57XjSNAijcEatYjDFksKnM9xrTToatgAM7gQuz39yA5vMzANL39ZQGr2HkgdNq4Z73mtmZpKK",
  "key37": "38WF2MBU37REDGvLLRpSmydDZbBuiwVNvTAKaceLQ4PTXbiY73ZFAP15qgy4Rmc7NchXX3RB3Tpa6gga22RKRLCW",
  "key38": "63syEsugDG6j8iK25TptULqfQuvjMT6P75Az7dAM4TzMVXfWDHBxtUjwqb398G1RD5d5W3B9V8WtEN6Q3cLWbRj3",
  "key39": "3HsBbJ4xXe81E6Zs69RvQsPF15qetryDWV69VbGXU797cp3pFHmJGrqE3M9Ym3DdCBBQeMcATH85RsxY6jXE8dha",
  "key40": "5fo3DNyZjbdnuqeL6EY6CVHeqjXZaoSDhGduSbhRdVK6R1Jt1GmpYjoKGrpssjnkx48xCpuAr5CE6VukdGYn6rVs",
  "key41": "k5AushSEaRDGAwhoFxQPuXthnpyTwGeRfa6Ljcq6Ga4vo3JQEPCiircXoMucKRAXJ4ibgciNoVPwTEQpvkAuet3"
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
