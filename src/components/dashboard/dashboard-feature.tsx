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
    "51EHZdbo64NEFd81zoL3gEU3P9sMhB2nk4khtnme4wH2UhDpGqf1F1m7DRnf4djRfJCgLFG9tXut5YqhSYcrQqRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bmVrdCEkKmFC3UYtu2oWh1h3sw3f7NWrKNnjai2M3s4v5BTfxV51Kdre7ngiBE7v4f338SxjEp9pM4eN7DtBHey",
  "key1": "az87pYgVjvf1P2j3idPuuy3FQuYiRkF4t1cmDFX1AM2w9NrVhxaynv2b81wdmJ81Lm1DF72ato58KA8YokWk2BM",
  "key2": "4nPPUHc6bqfMkxzxRjzqMLDX9aWtusHbQLhXCKbconqHRYzPFX6DonqMcYUUXp7if4EBTs5UpXssXHRQ7RwV4gAC",
  "key3": "4fUnCiBBxo4rSB9FYcGasuJagtxiZhdGFJxot4CEwb4j8dvbupxzKffdciTqWscwmX7TcKLHr1noqDL7nfhRq317",
  "key4": "4XxmSgRd8ZZXAAdQJ54ZrKWsts3oig2atd7xFoTZvYaScTEJVmkuopEKZR5DMrfiuFhw73bdKJL3YhU5sfZiPyPd",
  "key5": "4nUBUfdWRQqz22bm1RSfLXeTkya2PJWELct9KTK4mxznckavAumwpJmHWT7KEhqZsJaRW58ffWJ16GSyV1z7VT7i",
  "key6": "4bJ5G2oFTDRiaC7KSxxpGgpvsVVq5919dgEWfurVUuzGaH7dxUqfkGc2cG1QGLsGLWqrXC8rf4g2iEnZ3dQdvNa9",
  "key7": "YDbfuFFGFSbm628rGM1ZaDiHYeAZo4H6i59j9a82fzk4j94WYdbwUpdG1FuV7Z5mr9SoYTAJgRyRVso6HH1smbX",
  "key8": "36AHc66enBqCfC5S6V1Mihjy5xWK1BH6hHox4tShsf6d6m4khpDt51eX7ix8UJaaCGsa89Qi5k5BHnmxxvjHSzz3",
  "key9": "4rpfJcm2KrWmdzEViXmaCzbTCtjgTME6aWGYYgVUreHfWJWs64UtM57uNcM9ncE3jYSm7kbJEChpj37SeiqWge2u",
  "key10": "3YvAtrZoem1WkwfwCysNZZjqQCERMKoRNuT7oSm7ckHDaR1mELTPHjowesBPUjRHJsn1toAxkr9vfwBb57CENzev",
  "key11": "tRm83zqEAKk1a1rT4Zaf4bA5bsF9m9kdbeHdPXwxCWaPGQDfxEPScEe5g4yKMZCS8jKwdJGc2XBwnhNVHvMJ18V",
  "key12": "T22Yi8gt4n79TsPrZS6NmfTaxC8XDJCahezZ7nxcWmKB1s234R7C5rr7oevBskZBefwEaWz4oPmmRePgSujU53y",
  "key13": "CESKExS44a5R88DyhakLFgKKtxZw1evcpN9Xpqj5ghh2DwWtooJoSw22rcJTQ39HPftw5jDBfAWCbE14YDNYax8",
  "key14": "BrFqRLR12eqXhXLCfThHNXjaDjAYPWCLT5bgViC5FXV9Sam4sPdxx4C2bG5kn5V2fHmCvuYxS4RWHkGF9BWcEyM",
  "key15": "5hbDd4G9wdD3v3Q4inGSK81JTRLAH5g9LzCjSH3kxdWuvwE6g7rio3EJNx7pdSh34oFaor91VThAHRmMBD2F8R5F",
  "key16": "3ZjN989eJjkeY4b91QZcaeKVMk1m1BNzfRCgJXjeHRLfBeWnPD2sYHK4jSDs4amqy4dR91SEdhK6ZPhCzkqiVoEH",
  "key17": "2b9AxRJBBi6gkRaVWfZJQo3x9Q7ERd58fHjXMZKcBv2B9QdqzaAmiBPbuf3JuKb1Nvu5q4PcB1EZ4q6Z5gagZnKv",
  "key18": "rx8Q3C1BET2j6hvzifJBFNqZu6cPNaKdc1R9Dm6gsoDeNQ5dPqq7dFP2uBdu3tK85RF9TL1adDXU8AKHCwSiNRD",
  "key19": "GEUypwcAEFEj9jx5mcBXGeBiFJvKaK9nic6p8EWWqTmUHP5P4AGM4gnkbcof5nddzGdSmZGQeahbkPVtqmGVaUc",
  "key20": "5VCEvBTeFCru2Ar6E9DwVzVG7h4fWvwduKVGE4zZRdg5wUfVGzEQriLRvaJcjTQdBxCgGpCadgDBqE5inUBPMqNr",
  "key21": "3TAFWhUQLqK6pMG8Qhc8LdRRBwAXApbupNaZLR37QwwGx8NfHUypRtgyXG6GoSNza6RXmQzBuULNyadD4wyTqU6E",
  "key22": "2weq1LSAVw8jTwLfV6GWPTgjpdQsCP9m9RsaoBHvrgh7Zrc7Qr8CkNQ2DsXAyQzEiUruNzmwJvz9PBdt2AB84r9m",
  "key23": "7StC2zRrMGRzxzAd5BitBFeTE2DkYBZyJquaw6B6kHnyzx4xxse8KhSxuNTBrR3S7ePqKHjzq98JxEb89FYggTm",
  "key24": "2RU9WMyNpsQZ3ZUEetCmK2PJnhRtiuLjz93yKW77dH2XY2Dki14pJ3b9kXwnh9pxM7Y61kCyPjjPqnHwGSRbJEb1",
  "key25": "xy8ohUVy4PjY4tWhJM9Z7R2ZwXC4wh5zwouSEEEfsztWHCtKiiSmBEe45VZssjo4QvB4Z8t2CVnprYvux4VVoh7",
  "key26": "3WbL5ohrGHJARBoGYnzbAancFs5KNGbmy2ESX3CrLB2AzPUJK1sj8F4HtrZd4njnH4qQStFH77hGTU5ov13r5QAn",
  "key27": "Zj14SztLeGznCBaHLjWrJYiuHQUMSBFAEgdw5621VnKpyyYuQpFL2acqCHpN82f1LZ3S1rxXbGsDW5fj7JX8RNR",
  "key28": "4UVneKqcSym6X9d56Ga3ZfFhZBjtH4haHYpguMRG6cvG5X1DoiuZ8R2yzaGNVnCzdy1mZXjwUna8hLv7iysJSEDk",
  "key29": "2uh5mCkqmf34tNQJwPTEnrSdRqnhL5fkEod4AVUcHm3z9CJR8eAjmv76SEYwZWsUHnwd1VXHgE3SzvB8oKPkUEvP",
  "key30": "4TLCZPF253xSbCHws3MsB3e9pRZZGHECjJL6MbZVV1uycoojroXQHQ25my9dZJprqhSaNA4FEmGPKHuK3Vejw5bx",
  "key31": "2z5SQcyrRCs1tp63GTRwFLmtHutMbRtM22PrgUe1sx9kK9rMNZQE2b2HEyD8K8ASYmqmYnbRKXk79BiYEGBe1bmU",
  "key32": "2iGzV7jba87CQ4GJ7oABEFmGHgPsZXwe4N7AgZpMztRtFSJP8QpuKdcBsRrHnt5xwK8cGnLk3naevZutFov8sMAZ",
  "key33": "3Xhxyy7TEWxup3E4o2juQsrWUg8rpd3ccaCAFKSfwNwfX1uwhPKrYnoA9JKWaLtiXuKRtp8GNhEBHzLFbpN4aoYW",
  "key34": "5pmt5bNHqKxqumr6mAwifXdD57wVUrWB5YvwJoEV6aGuFTcD5N5oVcj3fCobMBpTQZPxDB1WmK4FjN2Y1cRtsEmY",
  "key35": "UoB3VqJefXdyAt12idc672kyqXMP2gHbFEoRPFGv7kYSYBzSUhbg53W2EbrYj1XMx9qgTMfjGcRHUxUXQP1vBxy",
  "key36": "5SckX7J524sFiuzGfJA7jDjXFQThd6f4qHmDM4wfR1JDYTmrWH8j6a3zunNimuv7XwoK5v9Q34iv53De1Wa2Maqc",
  "key37": "2mABWTjuQfDqE9wfeUHLYnLKYjDjrrTZLssvzztWENm41xitcpWbX7TDdMzNpuXRDM6wFwyzdqZV2RsmfkZwRui6",
  "key38": "4fF1VL1S5HstTVozxCKJ1J4fzRgpN2XTB8H7BjaShERhc99X1Nyv7tQafFkY2DTBzMvmPtU1ho1n9qcq7DvAoPVw",
  "key39": "4m22EScwW9AGgAbFzFUe4mchd3zecUPzH1K3wSSuyftkYeQfCJfW1hj4hhEfXJ7kxPsyUd2woUUfh9QqVPxxViiK",
  "key40": "4SMy54Ln591TBG36RFMgmWC4GGSQRjBafMZUPqQDxzWd8bnh6uUbppH6JJAZNGpNd8BbffZnqVSr2m3bbTX5NBGb",
  "key41": "3zCj1y2itGsadY4WjDpYZqq2Zpo3ktuPwrCEMkyGYJbmZXQfdYEM1YNE8aVk2bwdwXJm2uW7SxvJo2EBS9JrGZ3K",
  "key42": "2XWMMz6drwQUsrXLZjSkt4VPzBYEsan4aKyu6FKRtVCm8mF9PAxC9r7aUT8sGNhTs21TC4ShxL57vL2Zafj8SddP",
  "key43": "25ib78GTTZD8Y5qY9w45C4yki4bDajETPj58gRdmDSvzFYUNcZoEZ3uefhAVBUb2G2xzo3qNKr18rxBz2B5UTbc7",
  "key44": "62qda1Kq6avYxZhEPDfveCZ43XJtMevVoDd3CfBs87TykznA4sKwmakrgYjmJLeZeNySi3TdZyy9cxzV7DALF4wo",
  "key45": "55Y1eukRbLCipXMPeRb5NpfUA47Sxq4Grumw1toyvkuENVQQG2rBcRCroe3Qoy96XHa6JyUZjh1pjQ2or1Cxiv16"
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
