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
    "4fpBYDaGot85KnzXMcMvuF4cQUoSCNVr3sV3EtJpZjTUDxBkVLof6Fkp5djf41k6echkMWY4Mx4f5vm21WfC2vij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BaYXZD8t8R7qByQaeNXkQyZy55BLmKWgvWo2brvA7Vry8gBr12CC9sRW48hHbTStmbTkhwkiRHeQhrpBA59SS7X",
  "key1": "4njC9Vx1xnLdVELQ1Xuhxgz37PWMPWussf9wPvZxVahgJb8Ko3Juq3vXEWuktsL2AXQKt7bpxC1CY5QbYkm4dhQA",
  "key2": "bE2i1bU33TLariD5j7GKGGX31UsFo6MLBNi2WoPRs8yLaGxL1x5rHwLeFZXBNG5VtGf4kqJeXH7867VavE3jMT9",
  "key3": "4SoxyZoXgHV6HX8icgU8KxTvogfA2kVMK5M7YADkg1Lnd9wnJXaYeA2XNs5FVxc4ERFeEJuqtigvmR7gaZU4aA8E",
  "key4": "2veP9EcmgcazuA652KcJAmKYumZJs1nEzcqyWufEJc7nWsjxLkLTUM7QDCyvm7GUbYd7dQ43iXMVYc88jew1uDuY",
  "key5": "16wRhLyxUWR7awVnK27QvnoHkTH553ThtHgCo54KsY88349p9zwfUoAcZMMKu3nFynGJTCDWgX9J45CFn1TaviR",
  "key6": "54HZLF3H42PnwyKqEa2wSoaRyAc6sLBb8LTvANKX3ejymj63y8BeUQegT7ViLrtVH43AjWrYxhcUQRf2ct3xcQng",
  "key7": "5rc3KdkaRKAqb7E8rv2apF49zAtbDzTTaRXGzsuVVbLg5r9fz7Tkw5jEc9RGBo93XwrUwuD7qnEsSVWdkeoWnXWj",
  "key8": "2NFv2sMY9RD7gfHfhMhrMgcv2vN2Bac77RoqigUawDyxnhJeiNNt9Tn3PNYyg9AMQBwwmrGEbdNZfwtPN89R2zot",
  "key9": "63S5g19DiL4wCTXuPUYWcJyn6ByGsDzLfS3DA746uEiSsichqod8He5TdNByin4qLTxfQkzC8m2vGjE23SYrZPYQ",
  "key10": "3DSeYyN5s81GMZqomZWCJ2uhQyTQkEQoMe3dj5ZH6apr96nXiJJS9g1Ft3FwscyPiuoYhNsv7BLimpeJDA2imNMX",
  "key11": "3gZpQQjC8t4q5oUsnGnkYtx1oK9876sWaadx5778yjCrXSKjTKmkib2xiJ9DejKSoZorL3kYthjzV6AFjM1c6Mrn",
  "key12": "2KBbxJNo1X62WtF588USv3i1ML3YJRZcktsmR9j8tRG31uT2Cc5oMJZd5ohD1ctUDYL2qQXVrHJ6mFTHvGzW2ijh",
  "key13": "5jfkBpfdGNneQ5b3q25sSfEkR4RixmV8ouzNW83U41yBLes99muUTsaWuqzubCM6piuwZNAZvEDzu8eauacT8rn8",
  "key14": "5t2Edc45Hoa4dW4WLNK5xtxuCNXcihAAGsomAkM4LChC5GfCxaC3Mmt3x3EbVQhHMoEEgtkhAZx5WRuz8anLsZzw",
  "key15": "5XpjrBJTNBQqwhiBn3Me3Rga5h4ey76dWKkWyDg2DSnBVEwDVdLjm24YTpXzRFKQZZKPWKQPwuMVpWRPat8XcXcR",
  "key16": "dvS8TAFvoUWPmthqh7LhJVku1exeHqzRtPGadtYzzJcHxFPY6qwaHZsMh4Y5UKze64W9UwXRmb13ZxvSHPPvdms",
  "key17": "XK9a71VftMddQQBsNwFmz7SxuAC1ApbUYue5zbH45pPrk5nJFTgfDcKAX8YAK92JtPbxHjXa41jszhdEJ7ANcCh",
  "key18": "5B6kkLpuCTakqHWU7yEfJUmsdjhEoTdYR4GDfyTfmCDEK5oLCUtE3vKZFcwby5dBzg4Ly5L78cYMsgMyiDtp2dbT",
  "key19": "tCyyQcT4wbLuBju3gMDd6ih8xyqipRWSjphbcb6fNNHK1iBZYzitAuCQaUw1LcWn9h9KH2j8WKGiQKdASg4Ntbs",
  "key20": "vZqGWXiyeFPukZPyfdSApeBbDXcGehKyu193bq3tSwihdN5auwU9Yp4UEQo7yPHRbVydN9waFib8tRtDNr8tpfR",
  "key21": "2TiqtjiMj2p61qaqcweRpeLHspTU6L975cKiUfuczdVKBpuVr1EUKUSAAStyJwprg9VARsEBuWuXsPNzhCBLtzPS",
  "key22": "46m1JFzQHgbSBBJAQtEYL8wQiWEmhhdUXoUCSbYopc5TryYrXMZftaiNgx3Kq8cTpnvsUNhMLzZihh1A5iUKqr4c",
  "key23": "3ZM4y5pAjN3LdmEKH2ZPovBKpmsK6HtAuyp8E1qrspUqhugk4k8mA7MeUiGUa6T4wsndQJst2YcAdwP8pFPx8sas",
  "key24": "2tTrznBX6XexXQoXtJEYdT8b9GhBsNrwQxx1h6Ys7rPvs874sBSTXLoNiAsv7W83AtPQPhdMGaVNk72rbS7c8jmQ",
  "key25": "5xi7XrLuChkdXYXNjfvXctw3PxwAt5mYVzJvZKsj89H5tEirMaFgT2pLk6wE7GnSndPszSR1jY5Tp8yw5gGc8Z1L",
  "key26": "3X754SyPc297LZtsM1i5RXZFQUhpJwmgh5KY7WzWu9J8HPATXfNKiUv9Wg3LjJo8kDqgPyXqLZ6XT7eE5r98vCcw",
  "key27": "3Y2GjBsAfxKaHr7t1S6sAMkMd4iwx6dEkex5J91Kkd1AJiy1jRpUkKGrgsvzX52h67CpyQx32QiYVVPWSw955u7V",
  "key28": "63hXUn55oeUUHJj7Ev7CHb9D3HEjNobUUitXfiunajq2TVH9Yv6Zvv8HNVXh9jAwM9U4nmsMU6At8M1zheeAh5HJ",
  "key29": "fGJfZGBYG3Ra3nJcYtquDtERhGKVW22RbeCBTYHhjsr7tNevq5kvASQUsiAcXy4fjacWMEZP6r2YEqwQhcVcktj",
  "key30": "5qgeSpyeELyMUZpL9DaBeX6VyaCPCQJ7Vauv2KNfMUrGvZbbStkux2qTJQRPK3USp8oG44nGkMjA5SyfxzHFTp6N",
  "key31": "cK1KtR69m2TTMZiJ5fouxKVcwdvFEBU35fVdqShFY3eDekyWnWTiEPLWAq38aW4YoKHsphKG6okC7EKfkhtWC36",
  "key32": "4f9WuxmFcLXEM6jXh9FvKLJh9ntKS4uZYcwDRmxjJFKNNMHzFGResk4tnnW1wyCSnwQ66BiMG9FExqe2HtX9TJ6u",
  "key33": "5UVM9ZtMG6C411qwmJYL5sqn6wDUxTFSh3VxKJ5mSJAe7ts1wYyJR1EH8mXasYVZWLzLvpEnSeRjazSGaWTwsANc",
  "key34": "QspKPWLCunD3ZAGDWAHyeNGfW26Hhy8oMMb777KdY3MpaZQSiZQPPypMd5om8RC1X3n6CdgMVskrTXBzXjqGDyV",
  "key35": "489p8yeatPn6rdiMTm9SHpc8GAxWoeuCH9EHiyF2o6FquDHSKqYs3JqMCRjTQyX7wv1pxY3aVwuvyvc7rLp67H4N",
  "key36": "2Aryqy5oQvLgRA79GfURiTF52uCiJooHn167FDaTKiUsdCQkbRkRfWv2GRhEJzTs1GWmx9MAp7JYn82WoQLQxptF",
  "key37": "4f9RzmvgsGqoHpS1JfniNKbEC6NP454WfzsL4wrj7KktFgTKKiLht81Tr4AEvSMCEoYnG3i7iaG8WPtBCJ5vycPq",
  "key38": "Z4Aji7nW7XTZcpKjaaZx5vYQYgG3HhvHo3B9AvU4A65SafRKwomyvhq6HJefD6tQMtRZfaDubWNio16QxTNE8bm",
  "key39": "4gzad7yxh1APuqNjZm5PZpYqAdRoPnLRYRFjEkSSSiaoNA3khBghBh2YGkNwKv5Q9zM5nw4Y4kanVxrAoiup8GPt",
  "key40": "2YaCkJ4LM7HNVyubJ3KHbhv88vcn3FsxDA6nBDsw6TZj96B7AUyhjUDu3RdRFspChqjqHZw2uEAg55fDcbDpjhsX",
  "key41": "4Y7C9rYEaPKgDYc7SETszc1iEF4Ppf9sKiwLVfwHHRarqEPSzjKqqZ8rNvam8W8hKaA3P7JhhsbVJfmjGq1CXHED",
  "key42": "4ckUEKZP22GvSAJAA31Tyv49knG6XGPMkmMM2hYa9FHn8gSDkvZcFXdQPZwZEuYk3UcGaxXLp1Hf59A9jaHzeYNb",
  "key43": "Ap8Dtnd27RbF86ARyN14YRrNzieU6izZoX82SXzJcV5jEqrTvnFJg6w37VrQiCc6eZJxeNcEkVyn77LxZbJCueX",
  "key44": "4LqtnXJEB1xxwEfhjYekWq8iq23TgpaipRRuRuuXCEzYJUtmC29cT9CJ8kxJJ1k5RfPmLq3wdTTG686ptTfcrjBM"
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
