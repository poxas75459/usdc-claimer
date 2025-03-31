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
    "4E9e4rg3QmpSHwp3DcLCSAsZrDbLMhNutC6Z4qk2Tu2jmCd6cRk69Aa5FtKb1KTNexFPpuWmB4k9topaUZ3LCsvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4erca6kubdvQWkyxDk2YSukyRBnrXscZX2fZRewv3VvnpyjfEqPLZLGzmxM2cPEtwYW8r9n2o8eWL3fi4L7mDa1m",
  "key1": "3UajnsoUb4EaKEqVibXZxv4baxqXKkJbg7ckxekLh1dNXC9XGyGcDyP4XscArmDoK97UAGT151ZDirpLoLSr7oHB",
  "key2": "DSkxcjKRbocCombBEku48iaLsfZVgkEKmMkactisKKKyh59BH8wGqZV9fkhBZCDTU2d3c25PTStkeF1n1qJ4mZL",
  "key3": "kvhmnfmBHyRxESPdLZ948c6XhxLdSMpqPDCeGxmpyWZUG8c1EVMFGWpLivbcHdh1AghwGxrMZrJfSqKpebnwFGo",
  "key4": "3FKxoWs236cHZn1cqf2xrXQHnS58dYzA8tLiTYGYN6sRARDer2PznKqquUF37EFLkSUjwzmq5UzLbEsJYMjxdF7G",
  "key5": "zQk6etPR5fL1KZJY6Sn3F2p8ByCxzv6rt8seDaPaVVSM9hxtQZGrz5i999S3QKksTAPZegGZ8PrqkXyhhYVXA3Z",
  "key6": "4TTym3o8qvZM6S6uAPZ3xAds7aNjTrVzmx9Gq8z3RWFJntLA7Rqbwn8pNdg9ip1eRTxRnFveKK9BUzYBwHabMcGh",
  "key7": "2usawNhhnQgcAc3KbYtH9FBE2JQPqPPbofZxMV4cXPM9LSVMnsXtQUgVhsG6h6LVyMCQjkjwoQwSHJYECA1V5FWT",
  "key8": "4f8WJRRXptUyX6QaoP9HHrhvHNJ2eDThwdGCVyvHRsi3pzkTPC8omPHPsdBxUr9KZWdoRXu8NJcRhB7eaycpA3MD",
  "key9": "6gFkF2juWEu5qq5ECzU2RtGwKC54mikTpqKg95vgPqTYHGFWsL9GJ5w6DpQpBV5TVURtBo9xwpapqrgHswbgdeZ",
  "key10": "ujGH67Uuovd7qZzZdUUW1ri1kR8ma9HDBw9jA6WrVmiBmGEhsFspi1kNPrrmjJQYFRm4E4NEWwberKih7iftcUN",
  "key11": "3v1x61pxcwuj2UciuexDEueXdYh2R54YFNm9faeGhDkytYrXzrvwWJeZYKsEhivyFPmYHbNLRZsKttbuL2X1giQN",
  "key12": "41oH1Xvo71hD9DCGtAMK6fGDFMitT3henS6MKPsEKzsMmucLcV7e22gEnP4mBTYJ2sUjmgCcJnoFtTQD6VFNE6d6",
  "key13": "3rTWTuw6UfdyoHWgVkwC8gsJafyQ1Ra7MJrV6DaLA4LkU5TdLd8bhPtfuvnvpB4Enq3QHPdYm88ATmRcGbN7Uu5P",
  "key14": "4uRpMRMW1vBP2wCT814KBty9D5CiZ3eda2pH5pNxVErYBPEv4ZEczLvJYhEPge1HywHejW7MNNJza87Qgbg5k1z",
  "key15": "2EpFroUuNR8synkWKmNhbvirWqgNcA1VpjxuS9hWyoNvsDU79PDe94rybu7hifUD7MSSgEptWoi7fTGdrCMx1SHZ",
  "key16": "5yGinB4Yqb4JjmN1NHduvewtbxDijFFBmrfsVb8jGkADwhi8Vq3fPvtGzbGJYAS2X11eXkQTX2PiHxkG2CdNK3RS",
  "key17": "47pdhqFgEicM35LB9ByVyBeSnQkadMgn5Bg7tyZj1Q9f7KQNjyWrEDarfiYWhv6xhYpSEEa5K76wf4GVJhuWwJ7W",
  "key18": "28iyeVLiZxp2h8pperA9sHavswuv5ydpt87VhRf1MfxmnNP9aLEewRYLswqjoJj27PEfbZRoM45zngrBpVntaB2B",
  "key19": "4DF4tnwKmHsktPr4W1uqArDbt5tVmKmVsWPVeWKVPbSk8iNiPqtaBjdp5HWfQXwkWNwC11cPq6ZarGigScg34BdJ",
  "key20": "5ZMLK6AUK9vZ3MNHBw8dUjQV3Q329nama7uNRuwP1RvXhGJSENQiEEPxuMTKPSUyHiiXkxLCSzVfWjJ6Zyfr9pfZ",
  "key21": "4NzjwpoiQCb31tQRAnL7ZsvuC8hqAjNdnBydpbm7BZMJB9HGQgmzgftVkJuQ6KPpZJBUPPe7eoX2XuW7fHWuamHH",
  "key22": "449ynS2Ekoqa7ToyraB3BZ9YhNPYhRtGaaYTb5TKbaEAYtmzeKmRTw3P2DtnZMZW5iqxD4ByZ1vRnpCw3LyLNEjb",
  "key23": "2MHG1P3wjxuNFgVtQ47MgSerhbeKWTNYCY6hhqPgVbFBhf5DDYMNedqBeJ7yYnvDCU8sSWJWgyjbvfniqANTjpma",
  "key24": "2frj44t7Yy8cHwxG7CpKaskdo8LMJJUjTAoSAbNNFb3iwkrb2EM2sgzHfQFPTuewHghJTMKDckuGu5pQvZJHgZyE",
  "key25": "5bPzkUcbu2fVSUf7x4rSQGweZuKTADSARgHq4NDHSBajV5z5vfQSaKEmEKKLbcGP9hwpb4aE1nvYmK8yS2WRrCnD",
  "key26": "57ZDXfgjvyziY9rbKt8TeLQwfvJzRKnsMtVuuLTKqJ61VJNNi6t9tCMEHBMTtn2p24kMNxfj9yPm7VaBFkqvruei",
  "key27": "4GUh7ozvcHcJbNRPW7rG3hyepXx4nDXD8fKoPFhAu4UnpjEaZ1PpX7QaBXLXLNc3dsSk2HnqX2ktcHg2muEZuRjL",
  "key28": "4ouihv7PVqvcJ3kuwDm2EWjFZ6rmFj7QRK6cyNryXoUYkXUFTgpRYvawYKaZCLnF71GDNawWeYiBzLDBHHFBpDDe",
  "key29": "5GCpsU4UPZdo5ZRKns7WWL4gv1XAdQ2BdF7ZpmUV9E4brRfRjEXcYdQemU7F2izj93F61p8PsbFPVWvXTaXoPHej",
  "key30": "AMbzGPX6yZxu93oAKWCacSpHrcoVedU644NKgFAKjrDBZQbv93MvEkGNHwV621A7RYccythkA5njENQdJuAakum",
  "key31": "2yoHMnLx2XhcMEyJHJuQVCKYJRMcjtKLq5aZ1qtiWP2PDWJDaUHu4FVBN3KcNZtNcQZ97fvA47BzsVA1FKN9av6b",
  "key32": "4pVx84FYuAER9LnpRHCqsMMZfLU6ofeBfvWRyC2SBNxuwR9WwamdBJfKBAgxEF2mGGrjmTdvGG7znzseuwhbwsGd",
  "key33": "3LDgzV9ZmkX6pEtwiVeHpBtzJ19spphAQUfJk9xAyRTax9UvnLE9VHVH55zmVEeq7ueZcCxRFG1fRG375udFUg3R",
  "key34": "4kGbKasG6LtsQF1PFYM56c253VPA1VZ6VD82XYGa8gCnzwYqTnvaVWvbz264rJZgW6q8xVtHdgCQVwvjGKPKdN5X",
  "key35": "3XN5NVWnQLfLZ1MwgYpiCKJpqSpxyAzz1C9UT5HZTWySjiRxkF923VrEHCUmc3FNe6vnyWgPefH3YshFnTs8XWf1",
  "key36": "beQ8JwgcLZE1247znQt8h76AeegJHZX5NBa49bDupegaRvWJTLCR5Wd9n7Ka9XggGAjqGZsAHXHh8JsEpFGiNBk",
  "key37": "2qegibp55u2ADbjLAetqrc2JrPbWVmcDPzeiuhiwAntHGhqGTxNyFRAwTHBUyxGkkDZhYEVz7oXAWhYF5Yx5stwz",
  "key38": "4TEGkuW9tGGdZtu9g6B2YRCDUpdqZyXQr1mWxJXfyADxfaWbzBqxKhfZR9WurAxy6J9cANou2bay4hQMdYjboyNw",
  "key39": "4PgLzMXRfCm8RD9mFzdv9adph8FBbb7kvVxxnxG1aEW7YA1bbQjNyV5viCkQqp48MzDFEEUkpGry5KywjKoMBxY3",
  "key40": "3hAEaxqaLNfRBwnhM4xenWzYyLnMLjNpSfawJk1QXVbnySzdHANKAjMrFD7p6b1sh2wzbhXhiTi3k7eUob5ZHaQ7",
  "key41": "4R2ZCeQDzJseW8kUp2AbmXe31DFbNKq6oPnpNvUJkoPn9u9WoCmPaeam9GnL1UN4Mwsvdn49PTL82hstSNGpyH9r",
  "key42": "5k9CRbw6FwzwPgsrrZLFCtnQ6zAGZRa6K9JSBtnYkZqM4F4zYoSyeR8oT2YR7CwziYnNnESLz63cxGdyvYeAqJRd",
  "key43": "4NxzfF2oJbGkS9zKqWTZmntfrfBKPdiVQ2UYKAPxpp3TDqUxm4aoYpJAMR4hnS7iSKfRki65n1pJzsWDHP4MpexP",
  "key44": "2mivbPFxuk1QnxPKUidnyRpz5McyKmVDjJzWC4ZRvyt6szSB2J6AyZ5VUKHaBCpBvfppksSEC55SZc15aabsdZD5"
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
