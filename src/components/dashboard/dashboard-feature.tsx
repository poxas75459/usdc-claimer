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
    "3of2P8JC4Fxn8PDBw8XHg2wkEQPMgDjrbrHLH8okkyeAtGv9nd3DTY7Aodw59VKQ53tjxZeySgZbvyF4afbMPxAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uR1FyHmrBTkshP5sBDNBAahu8DevSmFvakEr1QkM4vJCnLaJYS1KngACZfvtQdpWTpPKjoiXfAJaNJroLwwhqEL",
  "key1": "4k8J4ceCp7GgWZPqx6VnpLDo5sweiEef8mowdmvcYfWAq2jztPNTZfzo9mGgEPQ4voV9Ukq1xneLc28b8GyKqbcL",
  "key2": "3XHuHp1VKb6StT7LXcrGa6RRkx2fzXvuGs8PAHtq2hbhUowvkAxGX3m7hzJN5JAUPK8f9ewfAuENx49ZaE4zWr6N",
  "key3": "hjBWxMwdF8ir18VxmQX9XXzBXxYFj2g3PjEGb2J7aS3CsU2pgFcteaZn8qTrK9gu6ZX2hBWByzm7ddq7evjwjfk",
  "key4": "2gA1wBn1erVUqJtqz8mcYDAf89ujpKetqvENqh1YyiM31zMfJHjDNpDVKWvYoDCFnQHha1RnVud6waLW4tY7FGPu",
  "key5": "3JR8jFXNAavQxDmikta14aNQnMsZWK2b3N685Rn6CMKJ3i9jErxjXZmBBMMowLphw2bsdFX3uRZpNM1kLPMakCoU",
  "key6": "5Uc7LJqHJkfWv4Mm5EDJ46Qfgtsq3g6AzdjrFZQtPazpDfdzRWzzAVpav5QyS9oFkoAMddMJh9sfyirqHEuYM8iN",
  "key7": "4H4RrjMGUeikY4dSC6oQMz6jR3PGhPh2iveX9HzULiYLQbjM3Gh3QwbEsBTzo8dvhuQKXmsxC9ETntZ8nFaGMC8P",
  "key8": "6urJGNUEFYeHzzzLyEHMmUgHX9v7GwfkHHtvYF6wMozDDg8DooeixuuvtRnEyN6xrGMhNS7JUqzjHyW7fr7BM8J",
  "key9": "4ACUNB8dVvAUmZaWuSkPLE2G7Puq4ydcS6KzhkW2kkEQT6fQKWWcaRM7Psfb2yaJGTAHf19y34yjbBFFgxYubWUg",
  "key10": "33PC8T6MxPTQQ6j8PQSeurARHGKzFfxJ6q3bFqZqLWzjTJvAdAXaumf5HJYK2M9Cz3Jj3me7bAQ6uj4vNpBGbv9S",
  "key11": "2M259LfM2s7dYkYZG1iN1VJrxXhYzqMPzaQfbdR7DdW14Qb2xJdkv8oZXhaKnA22GKh9znPZs5LMpP4f1znhTocf",
  "key12": "2qjHWCfngjcaz4MVB3fjLNa3sR1pBkrwrLaQjqXjZzYxA1TkvgnbAKA3UEGJ95cj7AVtXTojBUZvcqTeVi7nsDkz",
  "key13": "5yAjLMF4q1wAtkkdqiYRDwxqorByggufGuphthCfDm9mfSaG4cBDpSs6Wue2RNAeoSQiH2d2iuJhG13FQkoeT7C",
  "key14": "5sKm1cEby7oQ2BihQ4J3mkrbrSAbKCAxtccnVuWTZHUzDDMLnZmbUpiCpY87Zboxu1wERzaDKPBabE2WtQa9TNu5",
  "key15": "wfKohgBMdtN2v5J8bxeERSAHcYbUWTgUrhHLrTC4eUTndUD6wsYboEKEbteP19XtWcS5byQwVZX4tP7Yj4ZN6h3",
  "key16": "4Vas2nMbVEsuXfYebiYmhAL9h36GrQLjytAmJMfM8pJHsmf6UXx9LjQu1KcRmADJpigijjfS8WEJkZ6jQ6wKq8Ss",
  "key17": "2qrLWSodbaG7KHGtCyYonBzF2qtKfNTcbmaSybAWEnM12dGdm4j23Gjesr7sdmDVrBgk3Wwjeo1gzpWsSJubz9LZ",
  "key18": "42Sh7zs9ZboEuR5DRNZ2tzD3ZsSzTYaXHneySuPNHCwNciWFtio7JNZ2wXi1aun6aX1B6AZtdbN2m58s8RdPHmZ2",
  "key19": "1T5XXiA3QHvuCPRcHRMP3JxV3DjZAm7gDhy3KuKdSHdWEsgmGmnp89Ls1YX77bhmBGRDTQeyG6bNUEuZLvysUTU",
  "key20": "31B8qfaW97cDqzH2ry7irz8FHaSYNFw5FwMnzYoWhwdYsAjSLqgUeYSh9eRBKXx7US1YPVDJiGBfwgMoSH3EpB9",
  "key21": "5LMfvbxruwnp62tJgHpxzzYW3G3W6TMxVXEobV7tanAEHiNaX98ck2UoVRtL7xYyhjRgXKU31V8WgeBfkKUkPZxH",
  "key22": "3q2EEs39KJSjPMQvPHWpAyv9ZcBPFrHqtpvCBMfEAodnRWRBq5MtooPnDN4GGFGBwQ62za3SBNCvqbaFNnJzvovS",
  "key23": "Gzo4KcfF4U4E11nY9ZuRsf6MqmcYgZK43zB8Ynca5NwytQ8AFPx2RbDjwTwvJ6NJ8NATqGjaGEmCnZRqMe4kQZX",
  "key24": "5HGD4YjktRpDBZ41kNKN2GM4SJ1GDj8rYZdQVZv6G6BXNCCvyzwUJD5dPcvzPK7NjCARVsG8Kvgi2PMjTg4RqexE",
  "key25": "5Zma6ug8PZq2qMEkScwPNpm8zVo9Zxt7FrC3Spb4U4aTMVfG3Hm4KCpPyvwAo1mzUn78hMbVSmjYEXe3Vw58Mj23",
  "key26": "u4bo8cpgkA5vkPLtBaue1KmzrRkxyGQJFWXkR5yn95rFnfWWtuTpZkAMZFwwKitX7zqgn2jsYptWxBgyPSKPGnB",
  "key27": "2jUgQFZ56a2wcyeGUeGaPJs8RaAMTNvVigRWZvjxMekgoaj597LhczrQvAz5NaMkp2fpJkLisa8m6SHfB3RTvCuf",
  "key28": "2pLHBTCAvfPsGnd3hKhqobSwTLaKNCXE5QkxhhhwfdadLWKEF3ZKZqecxYT11xHvuVAvZPKM1RQamGc8DSKf5j56",
  "key29": "42YuKWHvHTrD3q8HBGNHiNHsjKzQHGnXuaD4aCQYaCyFpnbzNq1mrXkbKKnicytp7427RG5f9q2A3rdYvNihAVzy",
  "key30": "qLdFBEwXBQ6VyF1e93j2PvD4Bcbqns6b6kUSyinD4L3W9PSBGUkKNXD2y4SJbpGt6PSiXqCAqByWQYWC9c7QeL8",
  "key31": "5rMWFQcatHx1UyR5ZGLx8SehcZt8YTyv2HX5rDo9voS62yXc2LBnAdF8FpwDQeSie5BizLF7959JxBG2EyTCfmgT",
  "key32": "5s3YUw8ULyACAA86FfD9Yi9L9QN9s2wcVE4jFk9LXg84BhcspPTVAdcRmpCAp3ga8LLNqznPLBWdE126WJBwDhvV",
  "key33": "416bRM8X9eUSJPZwdMxB2hHkTqp4NGZxrci7utedxWde92iLiHuRYWBHgVdvWeh5PVZybFGA6cjUMHcdjnGyE2YM",
  "key34": "3UC6SnVEVFf7ZEoCFhPZHnT8mcmCjeVaUDiDpytcaEsrwBiKfDtXmmYMF8KKxKefts947hhqfS7ekss62ktkmWZj",
  "key35": "4bAStM5Hzq29oeWPGZubMhLvSb7kki9MD5dP6eDmd8irH2yVniiyBMVr3VeFfuuGWrwk6DRuX2DHWmvF5J25WFp4",
  "key36": "3hiHchcW461YUdvDc1S2J1gsmNPxNpjBX8taRDa8KnQN2KAyJGq4qfsximH2yYudsqnb1fWSZGqyB5nwgNMtHkda",
  "key37": "3cgn7fptuhvQbtvEtc2Se2sTY41rvPhToLXS3XqJFueEednwdf4Hj13kkKtDZABUA3XRwB8P2mKFkexzF2BBT3qH",
  "key38": "3mPDLxDE3ipNuB9UtrMsbf56j8eaLsyPKtyvtEALURsvzUf2YXz59J5ruLcgFybSuBt1X8v5fyUs1jjWzsrts6yz",
  "key39": "3AYDt85cN5NbwPQ3SYn1oPn9ajfo3Yhf3Pan4zhmBoTHqofJJaVeyyGwLBXcGj8K14XRnsJGEfB1EAjhS7t1sshQ",
  "key40": "2vujaJ7vxNzG5RPcitmDz633NiV2krhCmU85Y9FPEZo3QNh7bayT2mXKBnne1itv4fF7J3VByg1iQNWT38uuT1XR",
  "key41": "5JBU2iquZagMMLyvNU1Dxusuv5VsvAQuJVeAUtMCuFQKaXJnXU525ksSw5Exj3gLPW3FPLJPSrnDW779LkpENW2n"
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
