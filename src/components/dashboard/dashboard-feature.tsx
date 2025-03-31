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
    "3p7GLmC5eJzadToWFyRrjWtBuQG78bymUdBf27f5GPWmojFurweaNYV5tfha2UtQHDL4hvuWBzeJQAaG48cdV75b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QPJzgiKEi7ZrCqYPduu5C4ykRe4jRxuwZ8uqBPptTxoVYJPP5TyZSVR9LetMnWh5hDdhbA6cckSzbcLz7b1jfxx",
  "key1": "5BnXar8ZyBsypPNm1vBP1wygiqP3FBzYjJTj33LfrewJPZUgxRsBinosh18SmxWd2ijdx9mf2ns7JjCW5iJ518Wt",
  "key2": "QHmXwDFiuUngdHVT7XPJ7NRLcksHt1Np5jzmCPfhEhHkEkHeKPVDQAA7YLYeLaxU5vZb7j1Re1uZzTKuSVwn4ez",
  "key3": "fLmoDnZxJcpW1Xts6xdseobJVhYcWABmLZSZrB9uUkjEZVa7CedJ2cNZjH8zvCCmYAdsWxghrYoakvAjsZ8F5r7",
  "key4": "44NP5dSVgH5drBvQZpfAD7W3ipehL513C9evWobRqqypwMK9Pq5QXQiVYbppRZckjLome7jmzsbEp55x6qhvgsRs",
  "key5": "5BiTrn1Zw4wYBBLEnoaq5EdWDR43TyqftBjVF2uaP3TaBHbh3mqCQgPj47WWoazFzx1LgBrra3ku8CxCDQ9cJBX2",
  "key6": "5orvPYhhpEhdAXcVgVau83Hgx7U5YfpNGLUeTQUpPBfargpmvG1XEap3Bku1Wxqb1dfTUuoDb9GdK36eHQBmF65X",
  "key7": "47VRjrztJjHyVvT6wAbQCWeWiEbwcrbXmoqnEFNTFTZMLedfwHrSs6SuN14brWhppuLBLrHPHsJAdrKVEoSUFWGw",
  "key8": "3PPNGsk23nVwo5KJgHFVP2e6vHBwkpzQfKjgJF9n2JkMe8EF67KrSuE6pyxeFVt24d3U82vT797xFs1sMGjL9evn",
  "key9": "3mxN9tHnnpirauSYAxtHdA3vnfTzjjPYGjEAjwx4W83N6puS8d7hzva7cyihtUA6XqHwpJ5WHNAD9B98VuyErRN2",
  "key10": "23bBi1HWFUrBtgeCdctTcsQHb6uedz7YVwMDRMHBXbyjwWmDh4gM9Urob7ekzX3nxX33QiNo5QkG2NoZ2xYZDx5t",
  "key11": "2qRzEQ21ppxNrHVyhV828jiMfsj7poTMAELqyksqwcV2aPw7cJNmqSB5mTtpbLRBW32ujSVsNPa9fzgiscwfBRz6",
  "key12": "tP649y5XeNpGMmqJczFveS4EWcVoSmYYFkVwbEvnx4je8yyjYuovzKarQNe15aUaaEQqPK9zJzeLVJt7YYxKwqV",
  "key13": "24ZNotma8wNEP79G6qLiEfTpdHRhA3qtbqgqTK3zLqercVGEDmfqPhdJLDSVYX4A45mi64XHXj3zY2TosvEgdrGS",
  "key14": "4X6T7tfP4CPAUoR8M3Fep7XfpsDR1k2Dfw4giBPMHykWuvH1zMzV5J1M1Xnv7T1PFaTaCr38Y57WEALmDZGgqDnv",
  "key15": "LhuZ7wnhCrH11kQgjb7iz67YZjz6SmhzzoYvkTUYHUn1ZAnYyS5ggP8875wmKhaoLxoicXjYvuVGM6ZM2Kq68dt",
  "key16": "zYuSpxqiLV2uZke6CANLyCbaUifD5ekHckbPDqiVx62Tz9zuBTa8iGDjqu1qCyUrTBakpfempQW3CL3BupwtpU4",
  "key17": "5HxZKkjhdaNN3hkWZpZzCxYcS1XL2iB92d68qm7LDhQJDKWJK6pfRmY3BP1geNDbQ2KcSRL4EfM38UM52r6hN7hf",
  "key18": "5u9JGe1pU5591eMwbqdkrVyAsBhQF7xNSPWcXNu6jguq9MotNCxsfU8QYNuxj1cDcgf2Ea5YxXTjAevpjvRpRcHb",
  "key19": "2PGuaBiCSDgGH2jV5ntARpmeQbYkb1fwdVrkvwfYhoLby7EHny6BZx46jTC8ZbUXW6qEyzq1NH5Kq5py7UrjgkLG",
  "key20": "2Y94xX34bJ1XrRhHPiJmpLg4qAR4GunoUNhXaRmNXdkvA3zAbWpfGHzpEY5eX5xAGf6WEAxdgb7ZZJX1srKDDMJn",
  "key21": "3DEpSsj4KzUtyuvJHC5A4N1fpbMReo2takCUgqTwy8vCHKm1XdE1vxeC5Dk8nyA32hi3fH9d3qchYYkqusm3F2e7",
  "key22": "Z8qa4mvPS5h6kJJkk746JotVF4diXUpzBrhQFiAfs2R46NcczkxLYDhpZqTVdQHFA3QVoX1pvUMh7b8Rv94cb11",
  "key23": "4Hb6DwcsoowkPtqfLKy2v2LgQRLAopYqFJHviizVLTxLPLFRrq9RKru5Bn2NtJFSHq5pBZcbMUmnDGuK8sii2vDd",
  "key24": "3i2Nf4tJYNozQamD61mADMZGax85bTgDXNJoMWAeD6crP3gzYQ1nB8ojvEiWtcDffLiE35yK4eNJsxNZpXhcoo4t",
  "key25": "4aWRpfAZn2H7eVG8Pz3ZiUDkG5BspEXaewHBXevNuBYCe4BU9Jt17TxauN8rBT4E5C5gZgqDQtqXunnBokYAaqSk",
  "key26": "5vijo159iA5yYK7AwLHXGSqwwxgoszGDqno5QPVYaUoDfiz6yRCSnYVTCCGDaQVzySSRJdunZuws9Ai92aq2H6qz",
  "key27": "CpWW1j25ikUTzN7UsUdrJfww7jqH3iZ9jQC7aUDrvsWmeynqG82GPFBomFegLSYf87bkoJki5Ft957F9Yx1CbDC",
  "key28": "azism6mEs1pSgKEkrLNw2v9gXXaxyMJ524NKMwDgMzMKazSsx5TSyXZsKBTD9CrZnE5GTkqjZTZYFEnZ4729VS1",
  "key29": "2r2GNVMTTYezvKM7SvQcpYTsEKV5VP7G1KCaBQAMJmQmyBVt8sg7vAxupfRiNPjNd2f77HsLSGj9zpQq7f7CTHTv",
  "key30": "4RQ29bNtvz8UVi79kTGvGn9GSgMhXhE53jMiFsz8aGE6nb9SLdx9qEkCs3nVPHRACxPjQAbVxAZsfmgy9ybE9K4w",
  "key31": "4bqVAUz5eBYPddw93MjoTdHUhozo4uRxL54GfCbKZVSkwxVeJJx62tbPtEPhzhhd1qgwZi3XuvFcdy5Z4RoQvxU3",
  "key32": "5DsYLe7NoA6bZf4QgssH9ns5Rgu1wZXPpyAQnUT1JeBrM27ZQfiKiZccN6ASrt4m2hTkq8vqwvy3Tc3k13zHy82v",
  "key33": "3Wpkmjo4LBTLUrpZguBikT2BPwjiEV2LJSS5v2JabkaG8jNtbeQnRa9bZF2nYqrktyiYZwqdBe9t1FBs6NoQJuWh",
  "key34": "SW7WWTbWxGkmZ1SqixjhmJKAt1jLkykKT6UqoSyzT94ExnDziHi2vX1Lz9rLuJafvXzi1juy3Rq3qijYtm9t4Lo",
  "key35": "4VKaa1MzetiXFjQjHwNmczN3NekWMxkouBNCwSmiemvGwUiB2jKgu36JahuahiApv63xrqPGwmbdLkXMfbS1hwY8",
  "key36": "5N2ErdqvtWcctTEFCng1QLNWBZhCTg5QiuNGRBtzZ87Amgrrvh4CbLLjtUoJ3jhs966ULQeVBas8DsoGWPn8Fdvi",
  "key37": "51vRry2Aags7KDmJEJhpNFueddb5q2F8U4EA9BAiheVDf5jokgH8qTw194HM7FiwtUap7i6CjFWxkUveiGC22Qfn",
  "key38": "mHEvzkQEZXK93Gn1ef9AM8b6GVd63aXXt6gq7hcdq3JqHcAp7XNKviD73cy2s5KyEvy8vQvauHq6m1cw965h3zs",
  "key39": "2gM85jkCK1eDh56nYUawXRToQGczSYfzHT6kbjEcutzDgt2CgQatYoM2aFthjnz3nW4tjdaPkajdEVsKrAgyb1vU",
  "key40": "51T4wK9mRipJuV36mqgoxeSJfcyPJvLZzENyqAtBgqnsHcTTr7JG9austEw9BPNwes6o91TVboNEb86WFj3uTmAk",
  "key41": "3cj7o1XTYLSAb2ddzD4Ey6AscqyS9jSuW52NUigfxSZwLdMT24EkJGTSXJdHk2fFoFyZDkVwVFs2XuK4oPzWM3He",
  "key42": "5sERj2kaqjKc4yJeuEVPHtpsSoERNG4Hosin824TkkTTcKYBLW8R9eMKWHfexiXkS36pp8jsKecuN767x5xuDVbo"
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
