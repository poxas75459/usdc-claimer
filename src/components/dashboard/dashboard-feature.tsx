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
    "5j5gYx7sr6Erc4jNMjCqxGfFGjzz5ZPcScETCNjnitUsJnEaUoWJD1u6f3A5obnL1Er6JcaTY7PfwqvU1YxwNXsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "542PDWjAPm6PJ8HcTuQGmT9mXUPfqHiNXjpX9P9dA4kTzMTTsUPt71mBQndAKGQLwE5YdCqozbz72az3ATrAquqy",
  "key1": "yGLijACfFqFEx83eG2NDyoxisRG55ckTyxo7YJMykVYAZiJT5axp4Uygpq9o6fGqqKMYwfJ6HZHyMaJ9V8LjpRr",
  "key2": "4AQypnbCrBKdxtLWDjYupFgbZunXiDDRB43CmF8fqW42jXM2ZTAtowMcbe1jd2zhigvQMEFoXDMxf49t3CiTwHdp",
  "key3": "2oFhCngeKYa82FVef4EBPTC9nQwLmhVTxGwkhjZrVgcSsiS7oSpwEVBp3ELa5Uv1yrjD7nxcnTQQfZrfuzpbwWmf",
  "key4": "3uBWYWUMfNBxBQHKkVYeVGFN7qB4j254Nkm67d4r945qqpMEXxtdJFJEYcEUMd8D7aituPwwH9gKRsqALUFkgNRr",
  "key5": "5D9vamcor9BzBdXUGERmpSHSYhqzQbRfp5VnpuzzsLewtm3aoR12c6MZKQrHUK9AC446MjdoshdHkUtBRLUumUoj",
  "key6": "41oHRmEJrDHcYJaCYkWkPgGQYRiFFMXdhvYEGwXjR5zCMUZG2iYQeY8RER2kySbeLCWHf35BEBYBXnZtVL2mdqst",
  "key7": "45KbTV7cKoAy8mGFwDpYyXNu2gar5qRMnKH58mKW4DAfX1QLtRXuJJKw8eaKrBXBQv7QcMWgkogQqzvdfKAevtJ7",
  "key8": "2hUbET2fVrLMc4XH8aNPxcf9h4SBKN5U6J2V7sxBhCw8zNcQmHTWfuLt9oKNPT9G1q84xBHtKkVpFF7KXXgNorhq",
  "key9": "5WFMpApbwJM1KyU5qaBHbvmPz2McY1pbbWo6atr6SRygk2qvY6FoBi6RRbwvr3Xu72GCynVdGDPo3ocqpiyCdLet",
  "key10": "5dViozrPHuz1dgAY7qV5wi2DWAy6DTxN2HggxwWucwNgbKHMLz9dRx7Hy2iCrigfE8aw9a65BCckJqzk58Drzi3x",
  "key11": "474UrjYK8ByVwDwzS2pmpzHdZKc8VWjajLKrGP9KSB1zUdgTKpRcCwApFiUPfxTGAw8igxSrMT8uK5SuxcYc7VTD",
  "key12": "3pg3x5DYcL4o7bdVMzeg6L5wHvLqEG4tnLwnhwzyQYfnj2ZSHSX24qXpMtX3sTrzAUBQGQkruMVxrUv927PHxu58",
  "key13": "3dMHwbBPDdk5GMMXz9gE8d8ryANMjBdpKrq5V1qnL9vtbGRZg7sPe69PagGW4aAwrYRDN2PpcCdPTEEzp4yWApm7",
  "key14": "3ZDHMaHkWn2AK95GMVceJunKUs8E5Vppvy7Ne7h3cYWsoL7B7oZbqyi2NWe6kttHx8FAUYBY3v28Rv7Bd9KpgfW4",
  "key15": "5oZjPKL2irDShCru9QwFzh43AFuDoHzGodCHf6TVvGTreM3FCQgR3yhvXQRpwXLqWZxHdYpXJzAziUoMqyaaQwqj",
  "key16": "49erELdR818LLLC9jb79HUxTiGnb15mdScjHP5wwcKbWYFK18iZJs1ecPaPGNDUb51rnWDzbmdEjQnV7MbxRHWc2",
  "key17": "4EMixfR8yZgW9Bapcvq88hEdxm7E3y9qB7Y1CioayDr6igw9oEBVd2h7RCqmYHqvtwnHZZTU8ebU4Bfvdvzj3ueW",
  "key18": "53vk7AS1ysH1ZxMLuchXvtsqf3WkDaPQBpCvYAde7ADRmBmgpbZGZ8yquRSRbCapQ9wuLqtHo5cW66JGfLrN3nsX",
  "key19": "73hXpwXFZYRqhgxVgDMHgF41FJagoLGE4YTtfyEzWQR24qEV79YhkevtWPC4LFoW2Y3wk9M2A3q4KnTHPYrREmS",
  "key20": "5wkV9LiGwakhQCfVps4UssaXBLYk2XznYeLkn82eJyyjhF6wjoHW4vMmiZVXU4exiWW9khefRxRVFgsQ1G2Ao7Rt",
  "key21": "4Ljcc7x9NTpjygddcf8aVTXrpRRusrXYh9Csb8nqPdUsU9bJQ8uHQUSSe6K5hadCwL1h5oEKng1WBEg7GoiLgfWJ",
  "key22": "HrNsicPSRWpZ9ax12M66YMi3PrX4DGyG5ueuRdjTTxkvELHsRd1zXZezhgx51JoLM1DPL1XmMa9En12a9p6F2Dz",
  "key23": "4EFFf2HpyN7zY6osuMfyKgK59nXBFQrF5WYv9k8u28qsBcXm5VYtDygfQQZSA1wikbg6zJMmU1s6xyjhzRmKf5rZ",
  "key24": "2dGbLeyoeGEU4GpZygJxJ9v8KJdZzB3XSuQapMF2oECURFSKxWRsLCXjsjfXJZkEtzi5rXFZEWpVL3s4CoQp9dUs",
  "key25": "2XL5nJPrMV3WMcVvpUE4fpZaFVTwiDXvdxCFvyQL8cNhc6gNbKWofC7no146c6SYaoi2ok5pHdFBazue27LZivTE",
  "key26": "3uJaqVxUg2xjm2oh7Y2fVXc8EbSL6uuY3ShvKvZogQ3kRRXqJyRTR9C75u4GxXNu5zjg4uM532QvN8PMK4hNt9j1",
  "key27": "3UsTFp6u6CXtYB8zmegkgQTKJSpFM7YP4ukwgVVxsqryi7PMywCH28zpVX44pVe1B7TWGXiYBuXRXvxU36VrrZRU",
  "key28": "2dBvLqdEmZUJpvPPjH1LPBBGXenhLFroxaxmAXpTVR6YXuffrZaovydynwaf7A9RVr7AonzkqtvkksJKhsPh15DF",
  "key29": "W1zudDyVUgJivqVDHmrd3gFouZAsu7SzAoxUueWBUXPE6LaScoUokXamAdeDKqWVDeHd4Jta74vhMqrx7xxHzkV",
  "key30": "2uUB7iThovrmn946XuGb626tWKgTjQv73uoj1wMVAKZCYSNqpkLT9GcpEb5j3vFGYMV3N2WjwrGdzExM6YPHQn8x",
  "key31": "3HyL82q2vdFPWEwwNfGLTufYLVo55rQYWmnE2nCpnxuGWabNzN5JJJQFL9fhy41srGvMypN4DvPrt9yurTcURzQs",
  "key32": "2addCsHQNgQL4Dj6zgJ8ByAjd63QkudCqbggMHvTqEg4fmp3yWVQsSxmprrjGqQMZpQComqWSpAJkSH2p6RbXFQ1",
  "key33": "3gEzjEqKLZsWmP57W7Dr2AY75LonDAZTajLUGA2jQzAJJQxhupH4g4YD3bGnZcuNZAhJPourf4zgmc7WpXPtwPTf",
  "key34": "4tK1CBzSYfyogHoXTmTYSbijWg2itj777kA5Ax2m1tdGXQ2cRLToB2xBTWDXcgmHt4M5ZebCVYN3hevVN7MKG15y",
  "key35": "5WRkt3xPyxFvhNuDT9eNCdYcmaFxPekHrs2mcf5tiphzzkcQZTQTmFrXwAnN9x8kG6grZZj1phnQr8FXkbAiNPxT",
  "key36": "5utq2uTD4miUdxK5GrdkTsLCbzKJYBuPsnu4YMgtSGFiH79d915XRUeFFgBuvSvewa2apnCPupreHSeEmM3bLZ7y",
  "key37": "2DJu62dVUj5FAkUZmPpT1Cv5RYGJbnFBwjNSEVgUDHwj2LGcJ1DLpBqGPrcNfcE3MgaJAKzLqmWUsXMLwYY5XtGz",
  "key38": "5rfMUCmFshEvsNr4SHGvwK6mCiBWdGNzEgTnsaCSKu4DJzg2g8TZ6Xnepj3JSCzRa4SDAzWDYn1pjZinRaJTFbzX",
  "key39": "37NtxQfM4ZMMjPNC3SF3ggf7Gw7ME7QMZDsrRi4c2L9PFgVLgX22WYiqCQemApDbDH6FM1gzTePPCXkuxurtcvHj",
  "key40": "5o5JK1UUFG6aL2g2xZt8H9m68cnbixuNMDjGS1UXHaoFhXphb2dgBjb7ApXxHGpQsb7ehVNwg4d1JzCj26dyzDVy",
  "key41": "5BKHN1ThNz54S9AcaFKk9qvqa5qD1N6AqpeFb3vMvCx1bm3iirfqMCu9bL2tUURNrCEHfyf3ms5HgP9keVRXKBhV",
  "key42": "39zQ6BxfiRy5MkiaDe971MiREgqbkiRLbF5qoid6fVn3cBJpVF2czD5pasKG7oZB4hrfGdikNoMN133FmaZ8pMjU",
  "key43": "67WGK4ewziE9ohNt7UbNaN8DcTmz5citXQdBW5WeqS1aHnSrpCZuDWckyZgBoPVEbBa6MtagFGNBygiTho78gdoo",
  "key44": "2kipzCRcTcrwJbZbg39VeMREtZKqHXGHbYPD944zWsQkG7W3gLTE2gSboQQxP2C5AaHopDsxyo8PcSpCTtuLWvuQ",
  "key45": "3qQ4hMnDXMWQv2vYWsdYYXpws96R1Z5kLKJZmRPH689Ma3ZTtvo8kzmjpyWEAPud4AiHC59WUJBQAVAQwZz15vc1",
  "key46": "2KYAMzpRt4Z5qRedXHsDmfEQEbzfmTGnM8YPCq1XhS2azioTWd1TF3okDLSSQudGiJsfo7HFrSNaSwfZVJJ1Rcoy",
  "key47": "5T51Paymv62Rz9SnYcAV7hBmnHoA3jGbhw9H6VGG2rTTLKFWscEZWiwvSxzVb4b1UgUdgwgA83AxmEneuTUQZszu",
  "key48": "be1GFhNuWLUFabW6J1ztM47awZiBUMghavbQFxPLzJj2txtUVqL3nzGMpAyv6chfssnCAbJzZwjxHJ4Qir9xkay"
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
