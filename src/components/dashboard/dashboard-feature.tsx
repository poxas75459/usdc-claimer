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
    "4Qu9bypjNakcXc6SonMfEjjGcZEDFWHKiEFP5mjY41cCK1oQiDtTm4vX3khSzn7zgYCpzfgqnVdxnSbUiitG6CTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vniJyqdF8ZH9eD2m624MTXYvrvR8iuSN1faEXjB9YusmMjBHwYkxNx9UNiGpaTPmLNjszDxT7SihyLcvyT1CKgy",
  "key1": "uuNqsH542G4w8cGLUocKFfXSkrMd75T13jkSCYrGvXm1phv38YX3GQsFyMZmUxRpEQKTTmrvPHSQiCRk1UfkTH5",
  "key2": "PxAqsM7kJMSuZcvSvJNhAY8Etu99gtCs8NhiLPvCyrRcseSMjVKCLHFBUFBebYxgLPtBCceCmfXwMmbZvTnm3QT",
  "key3": "3nFtyt9WG1s1K8jDNceNmtd8zTcQQ6Ls8ShjCfshx8JBirMjHy2Utc2qR2bUDJFgYZrgD23WL8bR5tmGkTBxLuqS",
  "key4": "5ZQ3GqpKDfrYuSKZawFRo5g6ZK77iq3wqDtxcFVpdSLnJzZEMBJrRUa6nqUYxMkezmW7auuQZRnebXNio8QH1UiU",
  "key5": "3VNJmWu71aPy1H4vECj6qJvsSYawcVjG2QfYH9qvKMRLbsVpVjW5NdPWUSn5Cn91WaVTLkfuBxBeNrbeELHBxhBw",
  "key6": "cobp6Ho3hVKeV5DScPGjKaonaueXtmBrGAUHeBnMPLdtFAcZmxpagFLduxWMWosA2b86n6V9biSR6mUmyHAboYd",
  "key7": "4WzCLxcG1Cm7kYqrFD5P3eQtKiV9oyFhBSLWfzMP6ayMpX7xgBKvQSQSQYQvNC9WKgwbsb2tG17nfNFhKQ35JeLG",
  "key8": "ZS27RLCcFzNT8DvGMumdCYeN1Kk5EswyAAAHW9MmPbBaeQ52Ddui73fRi7a6y3g43oNm8FzTGENQXPfTruaxJar",
  "key9": "4WPMQvZqwjuutSzQ1mrVSZ7ZFu56b2vaFw8SvKShfzc1qGTMWSjaV4tZTB64eCHpNUSLV6hXHcxqBZzRCDuqb9if",
  "key10": "2Ag9S9FfTrG18qBv8b6Gw9chijaF7KKpmuzJuQTrQed8A6RXHqsFxcppygvHgNfVgyRnPTFu6JX6D8fuMdoiPysL",
  "key11": "4aMvrbz8LyTiWyYPe9oyLPcw3TvK5EMFKNyS134Yj88btKrdSS12hJbB2QCGhGKaNCLtzGEDMSuGMqBrYo4waUZi",
  "key12": "4ZZ6g3GNoMsmSNtbiYdkrZL12rDv1L6AWvRYoLkBhPwtTXYkrbReGecVhGqmwPywxLpJx3eXH9w9ffZ2pgj9B5Hb",
  "key13": "2L43CLbMDGx4UAjGzbgLYar15T6Bc53SAg122wVfDZkSo9cVNf1tHPzJu2TQuwCJxDZGjviCJrdPTFyGQwaRWCTH",
  "key14": "3TBJaDHYD5z3ZcdcPWJ1sjfrE6eMhpzEHsDNLiTpJospxdTt4YpAnVLjHsab3WneUoiw6UTUApB2UJRkYV94bBUg",
  "key15": "4fuTJJpBpoVQ9ALeFHP5RSNNAW2qDep3zAedyms5u42w6NFwwfk4aSNV59GfC8GVeQBu2LDAHbfTT6PMD2JNksuJ",
  "key16": "ic5AaZNksXKZXtrn4GW7mYek9nAFBnuaKjNBWC2siwoiHXJWnWGn4Z91hvweu4dnAaPNMBPhmmvVKa9MfKvQCFz",
  "key17": "3h5yso7b6Ap1E5xpSmumjZrJEgihQ9qGFXZu1PvpdXM4uPeeJDRMr1e4gCv8E3UA62a5LY1ZpPfERZimTstQrgUP",
  "key18": "4ab3gehxXfRG3UUniPGGeCXXDhfFLfaq2cJCjJWBonXaEAuzzzRBxvqr6PKvukxNkvSMVBZRvLzDmwhJctTb4ZDD",
  "key19": "32jgDGmU5tND3jtur6uY6R4J2dUGChxWGzFRDWrTRn1Hxj8nZCScHFJ7TdjJzMCppUkWYVnDhfeYxy3VqG6D1ZPT",
  "key20": "21qUJSZVv2tKFj3Yem4WWEusQCggMogEteFmfK3AR8vPiqrbw3W3oqXm5yWRE6zMhRsQmsGZz3tX4Z6PcNKJqXvL",
  "key21": "4b4j28jggpRdrp2BpdAwKwHLdtSMzjHHpuuG1jsjJgiVwdWGw4HnHk96Xu3b9hPa5BHAjnxbqGiHRWyFhwupmn5k",
  "key22": "DN6UV5eVFWc5mevdp1mj19rngKRDTZX7SRMjpUNvfyBEeCvBYzELLL4khzq6qMgSQzGAjkapWbVW4cfRYBWZTyT",
  "key23": "2XfrGUiUXNS3ex2vi9VY4nkPPuRexqgh4S7MeDYZobpCxWwoEMdw2sokdGZZ6usPFFLwRULGzoWvqt17YkrH7E5V",
  "key24": "25j3vwHRErQJUoTrGJp17irpeWxrEu29GdoPQZdZfjDHJvo3eUuBx32utovQw5oR1VVaVdgDREYdroSS1392RDEv",
  "key25": "29cejyEepJmHeuNQttvfoqpyqJHNGewBF98ZxmpBywnsrTEzVCatEz3hLTALFG8zgv4JjNXbP8eSinrVJcUPiSdY",
  "key26": "35VBDLXXQ5xbUfpPERPngWX6kZPMg5P8ZfmxaSabS7vgmZf1zN1h2szgWT5KXJp8K9mKdgrV2e4tRocafhkbcCtk",
  "key27": "KnWmTkC2SErs2bNMfw3AAU8h47hGZJnDwgHVAK9DLuc2X6vYrear38wQQdxpZs2dKNsWozGcusPCZBUWC4MjSe8",
  "key28": "5AnnP4P1j4aVTSz2KfBAyPyh7D2gSszHWjnbhLwGyWcRK4wwtWbCFJrDhyZ1SUoUbUK8v3Uh4bqaLbWWTyqxPa87",
  "key29": "2eTQoVnEthDtbmoUh18YSDrxPHgRWusEYA6EKJwcsJxDXNP1JmcUj6u1pM5A7LJK9Qn5RffsHQmuH3hySxjLiDuV",
  "key30": "3tU8yyAfdk362upLhpwJnxxzm48J36HoSSzrHDw99YdAx7tKwzsU9vAUgiCYhkt9YAC4vZTW8rMdxW97AKxbbSB4",
  "key31": "ancGNdH7yDAgRdTFbgo8o1fpQvydMCWWEXrzoRn3TPkHBdzahkRBABKqpBsn1iLNbL8ecgUcVxgeGTWjLM9ZxuL",
  "key32": "4NKi34Kh46Raba2kuHsevfGwqRPfdotMFggAmqm2VPVU6JjceJuzWRHGvyCweBnJGiKu7Q4c5cKfccg3uZd1Dn28",
  "key33": "NobeYMM6GPtTnbpsFbgRCvhjBtbsKaHdT1kEvFhs27KNVAAxqiCvNz2DPnDTyPewzB77qxvoxu6k2cLb3YEVZ6M",
  "key34": "guK65MV8RVbLak66aWxyeFqwooVw7etQgdJ84nSdifPD7VFwNv4C8z9cmushWjSXihfJnLey25npt6rMYATEib6",
  "key35": "iziDLdPntKUnE3rozoYHbrDmrhvf9wtaP9JFkWeNu7q2sJbjeXCr2GgxQKhUBT3UN9h6iwgaAvNwB6444ehC6AA",
  "key36": "3NswT2m8dbutEaeSXDpPviSV9rTAuZo9Q2B9dv178F2doZw6cuoTmtwNaM3hRLvsFwHLJWqDZNnxtRUT8gBiTXwj",
  "key37": "65X8Kw46fok6mB6GvCxs3sT9ZCKkEP3a4iiwWELe9vo6r6EFrQx1Z5VzWmhn6U5JorxKjLA8zTmrP5JLU2nLjgWa",
  "key38": "5eMv6yfiWRmdWJd25wNXxPVggdsfXQcVCDRJ4qE4wwx6V25pFV2jBVXXyZ32MVjhUEWYMHisY5N46MfmyRMexvNe",
  "key39": "3KbzDnjE66nhJnSYwR4QZNjJcxatAQz2wD6WnDLY5U9sCCZZJDhkVVV2Kn8Doria2v8pHLiwwyhTXAqwNv3DNTqF",
  "key40": "1KsNniXPJBXiUYjh8GpyXATz2EBUJEVWcuDLKVCxGNfPfApQWA6XaGsm1CaBou8b2xw8Qh7rpc48KWPXkpGuFYv"
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
