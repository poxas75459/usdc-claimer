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
    "5tGj9SyxSwBx6v5Ky8mqvoHaibeC1xXGowGKNYEyF7FeUsGWXNVXRJQbz86fzrNe3uCV5xHXHo8XV9zZkvEsfsU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mens1BxCKyaArBPEgQyfKfDid87cKsUhjR8MkVvexeEcbpnA4vkdmiHF9EhjwfbYVf4HdZUbRZkrTwmBB3BCfAG",
  "key1": "anKeCGmCFGwEAJHcptEtbrn3WiUExqQ1EU5enm26xvJmWNHcm4ns7eVqtrirRyy4i7bjaKv6poAZkngwVAA6anN",
  "key2": "27dah5GZ6fTVucB9DmceyYWtBDMDvuxJPEaMkuhc3MSZSyx5bcBbfBeoikjbUowJCMxXgcAichQKG9pFfTRTxy5o",
  "key3": "3ravPnSiQVoAceUrfMM3rW1i8NqGSbQW43sZeUpdYUZABwz85w5vGEZWukzA7JC7ihuYPrsRGJSw7cFPa4GFB5rF",
  "key4": "5WSZHb29fGN235FRhYyYxoRPZjdfjJ2wmHaMRpNJ4DjL4i3g3SSzv8T482nk2V7iFJoC9UbxW9cQAGXEgxYMZBrT",
  "key5": "5Mnjh29TABq6KcnTRT9zKEt4XS3DBH7CtQEhQn3JnEF9iP6hbERAjhHiyaTYuTWDjYjqJfjhtceX9Qer4Tgy2AC2",
  "key6": "5sfjf3JzFPQKyfMUq5n8PFS9p3gAXnHBoyxVD3ZEKATwmwcCiKiZPuFMW552puqPE8fTNsbbFUh1u5bWM1wQBBnJ",
  "key7": "2oLAvy3Niz7YQ8E66rg5Z9nAJAxobJfbChTX5sFz44NSHwPxzWyWQV8gfuhgdZVNwAFVE3rEPGThe2UGwwGGqg9c",
  "key8": "4X21ukc22xwkre4thXnLGeSxEGw86pN6osaURWRmC4N4oP59seGSjiZ2grZLp1dKVof7TvxxnBF2oTkckh5vEwax",
  "key9": "4PWyBLhGVSrvtM81kuz3btQAQsuXaVvpJp8s5F1ksUTrVUM9kbsSdUEmendHqabjwLX1zuvysYASuNioSfLCv4aL",
  "key10": "2YPEMRKoXe257BHNvb56gtysZvMMTvoywS2zhk92oo52wwo7MdrWDJsS8pcQa42oq9qUHwMffTmR6uG4jDTm9p14",
  "key11": "2vk9mvvg4teoiosi2joivBx9e8qcdxcwoJFjzNzRhVHHKx3cokybUDp6Cnr1v2RM3AqEqYkZktUhTt3yqUeY5FMm",
  "key12": "42aLeqaCTwuoFAVUPv5x9sww8fuy4HK31tDirPgCHRstnywFVa4a51ueBUkKb57jUWN4iZ2Jhmj9g5qhyRZYYi7H",
  "key13": "52vPaDEBgmfdJCz4JiYkh4uptroufNSHjpBKWxKCkubBvc7nxbc42xhyzL2ekgfrLQZ4MEFim1R5eY6B1qc7cEJh",
  "key14": "K9UmgNNgdK7v4aySsX6NiFzhPkeJGXdNfTa7y2aw2pY2XnP2Qy5M6KSzD1kn4tbuJjK9k7v45dGfZipf1FDpu7f",
  "key15": "3CCPFa8bJsQ55ZpKqyEmbrQxhjPTooW2LtiaKKs3WEi22DaQoV6YfNae64Jda5rJ2f9QCgzbo5vmTXpvkjMFGPiR",
  "key16": "KhpHWGFG9ZHHfGsyeGDF9eZugAJVj8tRZohb7ke9m8KHwR3V2LiYwc8GycYa8rZmDmDXtm3X52FAFHzSKWAhHEx",
  "key17": "42PVCYyffiZCBnFeKF1mKsmLwHtQHqeAHJZPXL2RCJHXi7jb9ekrYAaSXqdK5m9sgi7jhnQaespF3PyWurP71B73",
  "key18": "Hk4NJ1YLwJqMKjmqppan1ZjY32MXhAQbXdcjEHMen8eRkgNigyRoS9aCKpezyv6cTf3pzzRoRUTP9xBUSBjUoL4",
  "key19": "5CT2YZ8kdXQB3CTytyyRXUgVeQQ5fCFchdYtzyrYLWFcGUxqdLCFwdkuAyQKuy6K83FhZPxFvkXYvypCEwNMhG6o",
  "key20": "6LXEFsdUbipyoMHfhShVA7yGiXvbDTCdBMKoVTtD5KTVj54msRzVjRefuCX5Yx6vbydL86Eh7N2GQeYSPFGGMtx",
  "key21": "5Fn3tCHaoRCfRHBsNY4vrB35ekAHXznLGViBFNhnUyJzNPf19JZCMcTxLSCehKSPEw5cNyqjoyydC6cff4Giyww9",
  "key22": "2JvsCtVLuoASniubkGH7yrEmCjU8G9Ch3QpT2RTcbu87Cn4LfLEnY7xzndvZvhDEtgbQdswPCfMfjg58zzZzCGKL",
  "key23": "5So5R7PPT8454ku6DqPtuutreSuQNzd2dEb5rxv6roFnsoBfnSrAeaYQut1aDemhs9n383MSgMj7aGWRXjzB41HP",
  "key24": "t72JQwBLkq9wGmrfd5w2epX38A45yk4epEbrBaqRtri7LrUjrZi8GZtHe88j9QU52zFmWn3iPVmZ1XELXPneVKQ",
  "key25": "jG7eNtX9E7sYpRnGtqRRFHBW8VEzCJhaER4MgVFWvPeW8qnuhMUoCeSgaWqm82up4vwFz3z6JFBfEnCZjggCPAJ",
  "key26": "5MBoEy1vTkKHozkhJrCweKxvJS9bz9UM2GhRrByhmQnz6Apbi3nwvoVjgYEZcPGeXfe4ewgdRALC3R8ADEKM1mWw",
  "key27": "ux4ZSvo8MHjKZKQciChDYERo8YnZuw6avbFBRZZqsK74jNo2RTjFXhbpGAPdWkxyngj1eVRsfrJEX8ftYPmYsMX",
  "key28": "3vCEAuDTM6Ts9NbaQM84ymSCTfmtGFzCb7a6ZpbxzgnFpUfBV7PKDoHWS7TdUGUMJpH8B48YyvYoT5caMVBXJzsV",
  "key29": "3PYnCp6pfF2c7PL61xhttUjqgyUB5HgqghXuWYe3ffNg5CptkinhtQh5v6LVxdioyDRjptktcyTa31qHAdYDNidS",
  "key30": "4XowVHWyNdCqsnc2c6Z2MuwUckXs7BY2HLQbMDrei4XsccH46ZyzksX7LEE6nseQvg7gKtxGuFVGfrKaqkvBoEZo",
  "key31": "2h3TGE1FPCC7GLyYTcXoVKmf2HuTVkxDsZyv8FFwyPLyVDFkPaNQqsGSNyuVqDhBnEKdvdqCQBHGsxUGsSJAeUt3",
  "key32": "5cCfywbGwuuStXvD4ZQ68dSQxapxXyaDLUqBWv9fqxUmBT7BRmedrA1C1Vp3kfF1vcoMJKE6Hqjm9zRWtVoySorN",
  "key33": "5ogteKiipCLTXZNVxVYnxzNKzDZphePoqZAxcm5DF7ZLBqbSzJMBmGyjYFHD5kewMNmfcM8n3RzS8Nuh7xo2uxzt",
  "key34": "54sTdJ97RwPj1UuYw3FNDsNzMm9k2wYh4fR8nosxBWVxYxrR9uxkcn861ZGGuzqh2EQHT59TbxWgF4rPXwu6pJfm",
  "key35": "2VpkHwnLU4qRhMq3xQt2NPer1CFu4gbMrMrsmNSZ3aHVxWH2WSjT8Acfci6SQFbS8nAUMk2xnWKd8QYGW2281wC7",
  "key36": "3hzikmmRez25KDKGqnPxSfMP4ZCDNUc5gF9gwRzeZNDowRobL5TpeuBUneFPv1izD6mpFJBYPwafrd4YJ1t1WSq1",
  "key37": "3R4nivgS6LPc1G3SwiwWFFP5d7C9wr4BWM1vfjUnZRGG5DdthfprwwySJGivoak4VVZtfExBg7bF6PZBXLopgpKp",
  "key38": "5wKfyJJwHEJNNBuxgCT8uD953uXocqUrdFh9fsP3EA6TB16syGSbEzwP1AeLSqRpeahf5Ca761bbFh8HUnGT2YGZ",
  "key39": "5VXqKqXjRQqqEwpjRwUtYthGWrxf774D3vtXZqFnfuG8iAz5u8fcQh3vuPUsAUqZCw4nwFEhqDrmM3K6ZRjXfMFj",
  "key40": "2yuYhVrgsbdnfmEGgJLoobuZynJmNJEXWEisXEWf8jvpHC63poVC8Tj6hmhR8y3sDsvJxSw3wEFQuGLrhDqn15zK",
  "key41": "4sSYL6h2dNJaw8BA1mdwQ6ttTxSjPhpMR8rrnvc3ZmQ1zG747w7PjinjBs9hMkHWGc36tMRWAZompHsZrTc9CqyC"
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
