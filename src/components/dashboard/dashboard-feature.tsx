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
    "2QvisvCsJQNyo6JHFwVoPXZNFdv5if7QXjZZrQJD588g2uJSYtAhmHRZCu5PhvZuCn3u5ZbPssFsMBa4fx2Xgfhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hUEFeTJqbRi46Bq6S62PVe5YM8GA6cxArcyrNiQPH3sCpCpLh9TY7ktSxzvDS5veF2gvvA3CoHT8k9JPApxFV1U",
  "key1": "5MJMm13bSuiGGFYkFQNwLx6BUPDuFrwS1Akx9QGukxZAmyHyz98Xr35UXeprDFgUTqkpiJKJh7HZj62afMCY2kir",
  "key2": "5yQTU572SiRD21rj2e9XWLZ5sKX1VSjvWz5Vfa2ub2QSmxy66GsY4tBbPNGTvKnbRRAfSd1uFRRQYzbBRBmx26tK",
  "key3": "2WJjCMRtczEoPspvKN4tvTayFhMMBUA6MAPRMJLiExzyzmBR9ijsUwup225ry68nSFy1vojjBibd4bJbazoCeWMf",
  "key4": "R5C1p9s4FnEkiYg1H1CQeK7uoGQK9uVdyN4JA2JoEaBjC1Eh8cY99HQ5rEoVi6qNX3dfR7F9vuyKhsUctzNeFxc",
  "key5": "4cv1kGYg8fJ1K8VhTPVQMmAcK1VUj2QoyDKrDbvM8u8zc3QCUfJTuV8hNGH4CPfouUz5BZur8WKH3rzWqH5zr4Ed",
  "key6": "5jDGKcfbJCVW1zWkycSYfeddepcDxoDamETcGL491cvTbShVTnSzzTbcpwGWHvCSbPrMHLE4rgidwW2g3yPgu1Ep",
  "key7": "2nvmzMt1rti7RkX5kFVRs1KQmKt9dYpYdX3nqij726cDH8jpcqJvWhqEftGZyXuqaCLTWnVtxfZWmkPsUGXiQPrU",
  "key8": "5AYMs8egrmJAMKbyS1voEVWAwy9W9kinUCG8yosZwiMpeuvVjXNfGoX8m4xbBbqurQQRoGgAHMTBJ8Lpbmz8y1zS",
  "key9": "57urVCSKXh3Q218sN7k6F4eioz5vVHtMchPG6N5tVk46mkxrDehYKftkYGJqsptxHPaKb5N852trkxaMGVPeySsX",
  "key10": "5goGWiNmzBjWxjyfXdj6NP6eZt4DvLgDgZ5p6LsQp9RwdrWFctpkfp8sQv8ApnVsXCKmdboAbxnaqzJcEJ3kiHpN",
  "key11": "48zgeaqbVGbJ7bg4A2cv5taVhnSDPFHMyyNngcVsPbYgkEnA8k6wTDReezUuuFCYHSz11TDBKRaPwKvtytzWrEKp",
  "key12": "38YnLdxkjRqgR8Fcticg9gUfmUT4Yva4A2gdMBMJX6e3Q87Pkw8kV25Y4RcRjBXvsjcwf7GZonpGMaiTAxk1V2Aj",
  "key13": "wReNWyBLm33QsK882xxj4e3UG9nK5kBFtRApM7x1mB4gv5kFxwx1E3UWCnKBZefrtwUGAvwVDAP6uzQkcuPGoTu",
  "key14": "2mBUPK9Y8Vx883svbAsD4AUHniiR9PppC44KMwpBTacVAdrG5wbJFoD3rQbaMeam2Wadze66VwLjR37xvRp7AGYt",
  "key15": "4RuWBb4MTczWkMHFM2iSTQ4FLPJhM9Ngykn8WfV7Md4ZcmLKZX4iSBCyyhKyTHwGCYo9RQStcrPLC7NNEBx1PKob",
  "key16": "53QMCGhVAspehRw4Q5gz8BmhSkRuj5E8hiKmttKdRD1wNcgbfNaZHPBY5ayCb7ri5uUHNyZyxR5uLAW4JmyxNXbi",
  "key17": "5njbgiiPv2xUTZ4LbBAUkcMiSN1B29P2gbDKA515bARHpgSAA2QynErYaacQPJi1oi1wSHaN1SvC75GK3SkEpdpX",
  "key18": "3Pu95HF5SWaQurBva8HocEBgkCJp37T8eRuzgiVtec3RooSPvP5QaM3QfLVuRRAtuueJXJJt7DzHndTsxXK5o1yt",
  "key19": "2Q5JtpEaqWqr3GKHBmowytrPj9DAPP5kecFDwtBL7uhNT5GBuBaLVyM7X4wEzqjTA9W85Gbxk38tua5sRH5xD9ZL",
  "key20": "nU7anxFGQawBrbqNcWN6uy5jcJVKafFFCL2s3xmBZH381mxSK4sXD24vnjyJbxbDAJ7R5tLn8r3pG7eSF8oMgpH",
  "key21": "4oEiKrusqG3FdLWmpzoTUX7uSMBzryUnyAebYVos3kVZMYRJF67irB9ZGP78bw3JFrYZ9Yxpm5KwCcVroAdPhz1E",
  "key22": "2jShBdEH5qTd6eG1wakJdB1qG4N8XuhZYVPmcfiewomR7YgKLpok2xWsfpX9pWZvaibTe6CeAQvLtpF5LL7rQ5uQ",
  "key23": "FGRWp72LxvckukTUkUd8FZp1KYJfjuGRwxf62gpaq5SzGPAA68aZsKDopeaCX1SHzsixadjpXyABtw4TJUKnPJL",
  "key24": "2qoSjecc83XgwKR7d8CjNffHMqC2KWgcFaDToo2f77bVVKce5NDevH5JNbC9Q3FSXaX7mACrQ9BaPjG7Cp6rMXcq",
  "key25": "4j6Fv6k46FNuJdoQc87EoBZWzK7gYREvc1e9qeiQZDDWxjEnHmNp8ZVxDbDZioV4E4iYpv75bLdqNxAPbmru8789",
  "key26": "4zMEJ15ksMAyiR4BxrXGKNYYoqLDrHMWabDBz49wVePTarAjCeK7Dq4YqMCX8E3sRxV8FN45SKojLJQx2HcGqtyM",
  "key27": "3pDNDxp4MPK97aFJUDw3y6mr63uDhBSjPhbvuqDMUzYGhCbEwxY5qHjUA1jBdtTBojEMYWprUWYtn2tD1MezDUk3",
  "key28": "F8fQSkt6KApz13MX9JKMCRpEu8cVYoXFcxsig5phukN6eDTth9nmEZhupzx26PNaKi7Vb4fpYjCi4n6L96Ymyo4",
  "key29": "ZxhKx59huk3shDrmeGK1bYt2W3R4VFJBUV6KcoS8EheHLUkfS9beJZepwSsCMfEy84zLnA68XeGVX5Z4WAQWBNn",
  "key30": "2MkgwxNCpDFQqAhfvvsSaE6GyD49SHQqkzNMfSodHomyUujYXkjEEu9HaK4B9GtnYjgk2HVNiTRjjVHg4hjYavUg",
  "key31": "jMLWrYLKsuvZnV7xaQMmu1SPHPZ3S95EZmRkdtEFJixpkTRybRzfiPfMDTFT93WUfHMMN6WHPbdihkSFfsXUNoD",
  "key32": "86tRcFWah8f8urj9RzSd5p9Y3qhj4NCj4h5bCrKc1riwWEXbRNDuewBV1F8oAxR715Z6t49x1rPMz1kchg8eRaM",
  "key33": "5VGhLAoVBmnjuQJC5AJdLMfJWCLo7L6cM3L4EGxqZLyMZSw2dsK5C9ubgJDTboJ4A7ve9L4CLSYxe2uGR6jQdKsx"
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
