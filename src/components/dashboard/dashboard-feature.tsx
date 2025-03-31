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
    "3KepXoNL39UDz35jaQeVzXsa7rmFdRzAVwQ8QZdbYAYeX6NMCWGivqL4evGHwVYCo8Wv5M2n1FdCXSXQhor6uVRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LmRjFdk3XpiUGMk6dENgaH8A6EMfLRD85VagGdHfxf67Qxqt1C6Q3prGACmwgPjE1DunzhcZ6oWf8gWBi2J6c2",
  "key1": "3HHJaByT4T3ioRRT8wUop6WvWrF9xU6wGRoEBKXivNbcdJHn5JE8ApACkUnJVtv6oP7cqWfUjexYwwKgirawMwso",
  "key2": "4oXSKFVhATexk9QG6CZGY84dtnhebPq2wgoiEmau9qcTtb5KCsCYhN4VwfCWM3kwBohmZqZuhaQLoCDiPpVcPaHz",
  "key3": "HS6gKjZg1FJF9ATH5oDzJzLnvuj7aHhgutyiqm9iZX6u61je42Q6HyYiuewfB8DMCEiCVwZokZAxniNw6RCr3bs",
  "key4": "3K3XZxLNzTP8zoThCNmLKJKwCefytTHDpPwhCmbDpv9W9kKJS14c6RMhdvzDUV2ZtYEAqSLqhJBxAwaxv5nGyBR4",
  "key5": "4TxYNS321sgpRLdJSLtmkxxQskSy1fSg4kWbevkDDCFgn89jwn4JxSFgmzSNCkdrYe2fSbVU12CRXQyzj6Jz1Zho",
  "key6": "2Tsojr7itFK4dyqxuA9TSxG4r7pprP1mZp44ADdzHV2KiXF7wP25NxxYcvMzNwLTqjfirVetazikeTBJruBbv9Zn",
  "key7": "3LAiJDKn967EgDSry7WNNX7YjdbiPTRsc28ojqP2YFfDysL5KVZf95QDAgax6neLndPXvDz96oU89FoEeqz17dmV",
  "key8": "2LaAVJU21CjQmrp6dkBfGQUena4qXKrDz1FhNN5renhN15TbsprUmN3AiaSxRfEcGYVCfhVkdwr2ncRrSPjdu8k5",
  "key9": "44ZE6ydKtaktirZFhvEENemMSrzHajwUqqUZW6Mvz1LDdYLDk7NMDNjTo9412k4e3hd7TtfhrbbmdcHY6CFyzAmv",
  "key10": "2vjqScJLatTTAsF4pZL5xXwxWYau5D1n2f8xwKTs3EFQrKj4BcT1kiKZBJKT2V5xtB2vt6gG54xogn8U5SoQb8Pr",
  "key11": "qM92x9ZscChC2EJYXSdTuk9kvNmdu2Z3JeGhJmLcD3pwCfQYzUPTTtnfCJyi8awP4MAFrGZAi38gJ3GgMD4JSPV",
  "key12": "3dHCyaoL1U4XnCmGjyiFD7hNuXcEKS5qSfsY3z7ESL1vJsYj4kQah6CGqANqVXZf7odDmBtopnbUunW8AbzK6S5z",
  "key13": "2qjMUYET3Je9NeBX92tDuTeDuUieaAiFAvLMAjbkZbEaBpZ4eo27wq8AqtM3fR7JSnxuitokWCE1jwL1PKiYfzAP",
  "key14": "4roui3pSqWdbrkGxdJSKXRohwohQiVWQ9yV7iFCTTEFGvThYQLb1CHZmCgU4DWFgJieZvKggfi1iuB8iV1dL81Zs",
  "key15": "2Qjj6UBTMYn12EQ3mtJYSvuhesFmQ72RKwuG8ZcpuEbgvcC25U9Z7irwjGhyUZsxiuJa8bQbBMsKF2AKJX8VpaHq",
  "key16": "2jEnL5A4kANMoS7UvernfiF6uUpMN8YeQxpame7hFMpVvSz5vdmsnLujJWLNHt7aXccreTaTuc9YiQpYPQvAPtux",
  "key17": "3GrxykrayF3j4kDr7fRe87p3ktquWvV8nj1ow3WTJgRCY34FHVx9gHD5M4Y5fFbcWgqnpKwwGk6Tgk4DKYa3ix93",
  "key18": "E3mWvPxjEHWrNjLeGKwJAbx989n4Sm5EJK8ufYX3oKFaGfFxYvGBoqEBoZViUkDy5sjJuydbuGcJQb4rMCBhLBK",
  "key19": "3AuMdoGw2jFkZCijc5SYgTnqY73FvkrQfaECfWRpZLeB4pgsMt9kqa3nnaTw7QubKsWuRcGmZ9CRdnQz1s8zxoQW",
  "key20": "2QQoZP3bLpMA4QkgBQ8vzonp7BtjvQXFB3iP159Caue6jJer2N8qNPsLTxB89WHyn55aP2YEL7pDEbwuxXqQEwEc",
  "key21": "5fNoXzww964qbL4Td9TZ4zxpdspMnWMVKk25vM3GPPr94uJ86cQ9xKiGTCTEZq614irQqmWo4bH5tR3GjsVrUqCd",
  "key22": "uf9Sc6eFBFojHBSZELC9TuyqaNRSgNgUS8h3ngmLcjpmtykk77Cz8Z7TtEgsjgRRhZKtf397mWoq7zv7TtQSuiJ",
  "key23": "zHiT9J4WMMSnGNmMh61R2b49f2qbQRM2CjWfAR2zFUCCJFDPrKXQujPWdL4SrCEM3CguCC1gGPaHmU3tiZWzJvo",
  "key24": "3udsFEAgjp97d2wm8ApJCYbVJk3pstPy3FvZczsDeGfmW12BQMcJFiekpH9Xd2VGqmajyR4N7Uae9B7HS1BbVsNo",
  "key25": "3P5ZYdxv6wvd8Vkgzw7FEjy7Y1TDiks5UK79FKpddfaYDAX1Cy9UzRmKB8Ex4VWXoY8ABbbvwouLyqh5A5fpKRAj",
  "key26": "624SWaMziVMwyQP8J5LjpTaDL3AqboaFfMSRXExBVchfrG7ct2vxRq56f1fjYFteNEdnyEx4fsUFe2VLF1JqYdDt",
  "key27": "4SGbAxFGEcQAw4zBzwHUNUhdKYVpicxwvEUDeZ3feygRrcYX9eRxohsfKWYPRxiNHCn8vb9fPMgvD7UySHWE58EF",
  "key28": "2AjESFEuAvu5HaPr9QJakrdCUtKCKKhXcMFJA6t1xLemfzU3hj7qLvSkU6iMbCCr58z9UKfHjQq5KxVLEPzFCKYY",
  "key29": "5u2pMyqoAvp2N1cHJBzmJMjDsFPp6ufDPytaR9qyUyVWsEQAJ9pswwu4PxWFfxjuHdwpM2YFGQqU1UMmhiHEqfZz",
  "key30": "4FKhWPH1KDg1vekwBvDPAKQ7b9EZ3Y477kAEsx1YzuFg37aves22iCN4tyCpCnFxYfCaJ1RAgX5zmPtUorw3SAdQ",
  "key31": "2dTKd3xa1Z2fvappqdCdnwtn4VjcmoCKE9oeYdqreuGSHFXfSWg2Z5MXtao47LyMdmz6JDASe8PECgkiYxZcKzDg",
  "key32": "wdAEJibiHnGcAF5mzFfMdRw8tAzRh7aNGj93BxmfaZkvLoU5TGjpfn8c5Qo8uB7RCYfdNwycGwddq6SWciBJrh1",
  "key33": "4Vy1oXGWbEuWgjxdT1JczB8qXE9gV2Gq9mNt2a825kwkd4t6MVWpeDZrE5bq4JNrmi1CcU4PkYwuRTPZGqPYxvGx",
  "key34": "2r71ybFWxq82m6FGBWk2MjL7xo7LbX2agRB4bdLCD7v1xwLbXQRAan4tknaBniHSav7jBhss8RpQm3zRtZk91B1H",
  "key35": "52x9jKTSu4389aaDwCUGtiBWTwpcPSjbqqv2XB3mouLbzHAprEBWDkMDWJqMFuU1t84Y6vYrRDiSJiCVSvG8d4Gd",
  "key36": "4n9qR5YJJyf5Yq8xENce6Cyq7uJX3AXJcsSxqrFvM7CLQoc1KDkH6Bnzz3gy8aABs7qxz4afNUcPVPYvvaEHd3Se",
  "key37": "5A4pc59t4mUZLAhqGiF1ABazWp3wC8JeTx2898arYt81Fspe5hzgsCkQh79owm2p9THdsV8NpUgVQDQvZ7S86GKc",
  "key38": "245nvgFQLZXwUqiZswNjBAZaL7HNXRHVCMD9CYhFT4m38T3iVZYmQbPNp1hKkv1csM1nNx6s9uoH2MVS9JZLEUHV",
  "key39": "2zHnfRs99HM9rPWpjKD2Sd7v5g782ufMf4vesWrBLcd6mZZjX9raVnd7f599z55JujS6aMJ6ZdPsz2HQWEJstyz8",
  "key40": "35KLgoAg2n2TRcqRQit6yonLdvWBvXy6rNcf7XkDVBJCa8y7Md44ZfVdyFmUsjppJXioUw3QvEnDBQUeW2wbjGmZ",
  "key41": "5SBGP5ZBUEfDLWBnAh8fm2ru3mBptnEvGXhads573uPWdrjzxi8dapikWdSzt27NLNbok6ULJLgfQa5oGtFbUKzE",
  "key42": "5GZpoQ8i1FpiSRr3WfXw7213kJ3Uio4dzvDajnUAvJQi8sYveCdtWYvBcAMHY3LYcVwHxQdWxFxKrAppqGWq4y9V",
  "key43": "4srECycBu34g1asTqRYtNRn1hKpyY4tN876wEo2FsRfMFRfTXtdiazhBVgUtAZ2d5JBjFzFKymS1AV8LADemmfGf",
  "key44": "6MkHEhXiwM2zm7VFASf8URdtzZXNLGGmrRqmaZSJyBTJMUYVSJhZ3hpHJdNXBqmtFBewgMvg7gwiAD425JsVkWk",
  "key45": "65qXxKQwhmGmnGtUkhP5TnKEeMf5iGSi44ME7mgT5UVzvrJYjLSHBtcxELxu4fEuz2Zb5T2LwPwGbd9JeVf7Mazz",
  "key46": "3yQuGBK9XKXQ9EDvTb4ePqzAxZTvzrEzRYBRhz2VevLpCKewjgqRJX88BtSHbQMwY8BbV8zyAkSK5hMAdcFQrsbr"
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
