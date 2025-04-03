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
    "63ZNMH4EuY7KTZqv48pFywCpNCS7XhB6aGRodk1kE8GJF4SshZxUvyotpA6dcX9nsmsxxPrzkAFJBHf1ZjjDaKak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wo9DhYEEHuPt2WxnzovX6Dx5vtY8XiWrX7LrVthkW373fVbYb1639hMzUbVNyzqPfGRALnna1vvBVhsXXK72ACB",
  "key1": "4CCStXrapeKFA1cG4tv8MJVJXwWevc7sR9wenrr5fvb9rYvkLa8kAANAS5bfDRQpjWvrJs144mfdHVnomTn5KmDE",
  "key2": "3GRsN9A356LVT9R5juFmEz3sVFevV6SkDYZWMyARzfGopz5ty2rH5uR5PLSfmrsrn9KMkr3ZnEH9z5oZh6bAazLb",
  "key3": "5kofs5HZGT7EugYE9tDEWq5Rsq2rhGfq8GXun4niuanLF9xtM1LUMRNN3xyutr86pSG1zcm4RPuKRQiGDwZNeLJE",
  "key4": "46hT4Gxhwi5xKxXvoDe5VZ5u7g8WQUwZtSBEfzb4sPoPVgi62c2iYKMKHF3eF2NLAQ7WdriTPdfDMdUqY3BhZWf8",
  "key5": "5hdhidTzouCCv6yYQcQwMbRJFvNEw99m84LAjLxMod64wTE341o73FCQ22oNLn6kiwqupiX4vAHuMSMRYm7Pf2Ue",
  "key6": "4SQYaNyhix8pDBq6S45yxuS6vA8uNMcCNfskwmMcx5HiRJQWzDh4sV1Ds394Gm2KSGykUFSct9SBLVoixNzK2pS6",
  "key7": "3mcaSaAacARd8311ntvrvCGNpVgfhAj32WCMWVSdmuhBpjMuJC4ckhoHqjp8k4H5oYXggay71p4CT2A5TwvKTHGB",
  "key8": "2NWr8iewAD1eBJVXB4xpAVQ5pqoUTWmST1vTzMbxeCa7inJJh7damkXBVCmqKPZgXR3S6HiZLvvCDL72yKbKTix6",
  "key9": "5pgyuYraWUxz4Dx73JsaJr8XrZVsqUMnDaGw613N212hfsSTPmu5eETdD1JuWV67pUSu8PqpJ4KN754qyyCeSJVi",
  "key10": "LTGRh1z7ykArMjNMzWXQr8zL1HCjwBTfCoVnKCx6UiyQgSH27RU2q3pPX8mcdLZpSxVcWQ14DKhJQk21TKrZRjv",
  "key11": "46PEm9DV6bxnvEbyqafyUMcB1pBk59pe6QiSL6s4yY5gjKPzFxMVDkQAMCUw4TA8UFzSHUgxS74gpEo2Q3EpawcH",
  "key12": "4FuJke2hZT7CurD7FTpvDJX6VkMHgD9BRSVeTrCBXrfg1SW8FmbBXyiJFRkGKTRbJLou1UqS4ssHae6nxMbBUk2X",
  "key13": "3Kd3LUzarRnGbfQVRUknYKXU6RF4uFbEJama8Ft3HHhvkkaAMtKgVNfrD22wfvmbwd6aJGR71Ywj9iyC4u2dzXZ9",
  "key14": "287onYPwezjxJTxPhoV5XqKTTt18Du55ydvgYJhNqB8ow4bJvX8ZaqPXcFPa21jkDoKAuJRZUpeaw628G2RKBVaf",
  "key15": "2qYsQXfNjctr58traHPMQeDBTyzXtkV1gNX67u6AisyNyB7hp8voTQD4jKEADi38gdreb7WRN6GgT3DQcb96voAG",
  "key16": "2JUzrBKTwahxcJzoGgiAMUYKjoep4x3FJsHV1gDxAEGiYHpc9mPWm9M3VTDi9Uvdvi17CndftpxZ8cDq8b9kpdmi",
  "key17": "23PDQhZYLyi9JPWtvVjgwSLyfTaBpcRx8Sq2jAb5vyAtQh3rxc1jmPdVaqyxt7wzWL4ikqUJj91v4R3xocgcV86a",
  "key18": "2eGawovMbCbC8PRHTko3iUkoQ7uSBcQweCwGzVvHHP9BuM9aJ9tayZU6MEeHY2DhdPTA974nMeypQ25qGsH3vdqQ",
  "key19": "25VA1aSWLAGxDKQGupz9H9X2NjkGc4ZoWNYRd9J39pZJnBCrETeLB8RNZw68vVmas8dxktzTfogvWKzRdvrX8dCQ",
  "key20": "wFxfBGJm9JqS8yyJnkuucqf2e2T13PZGAW7HgTxTdtkYcLsEswVWRERMS5M4TJWNzi971xMxZZge41aBor5AFQE",
  "key21": "4LDvcBLeeMgCFwEuQwGg9T8mcBFBzPhaDUxJMdqk3Xsina1AThW7TspSsyKDbPoLWtcbQMoJv7bu96iuJNFtZpsi",
  "key22": "3FS4yQyMsmNoXeDviSUnCoacq7SKUdQmAbqaJGGKNYcixPRjnW64HBu5NbwCrRfZYi94jXFr1BdagqkGXwFUHrfx",
  "key23": "NxEBzgDVJpEEX6N3A4cLEfamkAfkp7hE3T3RzC8cdJvRE2g5fZmARYutbP79UUw4it2CPp4pQEbj6Ef3e5XWQ2V",
  "key24": "37k1nFjMheVjcn9iJFzcPMPFaXyQHVRrVsUDEPxRMyuefmjSieLx8QMapPEKQWHdNBkYWxbFRkExuevqW9yW1HwQ",
  "key25": "56cqbeSzQVtJyJHh1Uyj52FdB4PqwXMguNxhVs5iuhdThUueecsPRkNGMB6jLy3qdBZWw3iZiB4v6XDUwETwmyir",
  "key26": "431j4hxKEZRUkvBDwg32XZNR2K5TQw6iJbCqSD1gHneg8W8cLGXHe8THcsZ4jZTZwwiEa5vn1ajfX3psHoJjHSm2",
  "key27": "tAf9272E1gfHLQQdekYqSWNBC2QHcDaJSPEgPKzCYtfr91qWdQbzw3k7jvWQPAuCtYprE3PwQjq2cbGagCkHt5e",
  "key28": "4xZGXNK1PEdgdJQ2C53eLTMJvDe8UtH8e3kobNefpeGDtyiFjQCshrZtQZDmCmTrnR7DsrvWyhTFVrE7S9tMhn9E",
  "key29": "2amfTesErLkTp8tgwQgmAZHKsbwd7Ne7PKv1kUC4p5Exz5MXWTLrgZH7DWwbeD66NR7WLTLLgsCga9QfM1RC6ofP",
  "key30": "45tpdQrof5SnXJrcuo3JZoHmUMf6wAcMb5TQ2CFK1LghMZWRF5jwDBS8CrrxtBmUNy8ayob8KkVUtmMgfbugTUbh",
  "key31": "2YmbEo6QqDrBQWdhBBwSobwWsD29VzyKg7AVjFPLYzaHgSRjdK6pYwny8X1avgJhNFeDT7XnANUTKhnyEG7Qb21B",
  "key32": "58WbGTRNUNhwCTyXpYqLUZwb9YwHt3E1Ae8W6T6bici7Aki2sUenB28fvTQ9cghTZG79zn1p7e898MTt3x2sycSE",
  "key33": "5Nqvsej4opg629ZnGXsTn9FC1hna23wEGnACtyEr5AdDyGJb8mjN8fKowxxzYUVANm9yFUCB6tnPxEqZGB4XFxnv",
  "key34": "2EUsgve8ZBsB8wwQ5eYG6TUkunBvLoEhzyb6Jd3i56KjPwy6j8PqejJWpjyUYmTEFZXTdQfCEuHodxMTg5REqti3",
  "key35": "4hhduPZdQwoCytedut9SothggY81Ypq1J5F2nWabXXX6QbyQHj2KAfYm5fcXVHUHPoYqn1n5Tox5AABW8wS7maP2",
  "key36": "4n4e9JxL6rnNEyS5LqkR8nKGz1qX74Hfe4Cpy6qEZfqPB9ztDPSpiwRr4YZWb9y6XPbAvJCahFzUPo9hfsWRSyxi",
  "key37": "5YLGm829F9gAGkcdrYXwiNpEgXLSvoL4gkkMdi7ayFAz22iQGFBXTSJyCDq3HFkVHDKkPyrYcTHRURLytEwuUYC8",
  "key38": "3CrC89C5gBnt7UUthhLTaxwv9sCqkEm28HgjZZDzGrMKbSDy22mFGWyJeirFFG3jk3MgHJUujSvPo62do3iTsPRU",
  "key39": "3BF66jSV2hPLXZq7YFsuHSBmmBd6xL6TMsHSsiYMGAeDtwx96GtLQyQ514ebgH3gprrCuSM1Gfiif2nNXn3GvnQ7",
  "key40": "22He1PXibU31jGVZQKZ3pCPomMPVgH76Phs7CL2FLTFaGzf3JKGnVZ9fD9RVoaDR5MD429cCaV7i3JGUiFCbNGou",
  "key41": "2Mtd8PSrcpNE5aFg5bNNX1kkps6mTLE4z2Xdeq8g2po23YRVxqaTn7S2uGB6REf2ooQMEJYfamqvRy19VA4MCBE9",
  "key42": "5SLYKCY6vBgZReCgstRMM6AcAiyNaJmbTnEknZx7GVLqRMqqaqYeVysqbT9aSyW45SRXNgFTdhuPexKyuRYeumWA",
  "key43": "5uuzam9L7vhQbgv5jSMDuKLuhu2TKPMhvYB9izVk79DvfNHGBssz5rZDKkDdFLKjGDZwJWn7ucTHwNdwemF4CwwS",
  "key44": "zs7Y77PYe2GdgoSSLZ3pfoMbaaCkraQkKHk59u1YeqSUAiu78zff4T7wpUw9poKgHS46bgwrCW3avbP5yjwATCF",
  "key45": "2oiJqthqVjZWHCxQtwsdzVYxun5NjmZhAevRyHvPWctUFDnvjARC53Lp8S4Yq7M7sQmKBUyqKAYbQ9dQNjhKUpx1",
  "key46": "3PR5SMvRRfyPXp8x3kJfG2Xi4WD4tjmccz2WozU82kYmxruC7DuVpJZkREEdUK1brj4rCQr9qkwW9vDTNcgQr6JZ",
  "key47": "3gBe48qw2NczAFTJPjiALiWvDhSbnc2LY7oLaim1JKZ5Djz2b3VPhC2QzwrHyvxAqELcuYzw8CWr9oJ1pdX9BPhq"
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
