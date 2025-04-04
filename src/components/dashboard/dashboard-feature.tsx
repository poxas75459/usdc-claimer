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
    "5d2ULZ7ZtynUbBPbWFHhqXekpvdNXBBCuBoE6iUGiBkGZLSdBqwP84D5FghmzkmmqEjudRH8PDNL4f68FomiTkNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EkTYodxDH7QnJVqPV4WvyTmkExKvAFBGRn71oU94Tgdx3NgVSgWmMtChgFhMRQPkDdm5dj8aRfr7qmnG8Rb7ePb",
  "key1": "25YXLokx5AeWNYMYxp3Lv3FbzRrnyVBCoxQS6cZ55fA7rMTP3QUmm4s8JXDo5tLry7y5vwV7JxwdwLJSmqeLND5c",
  "key2": "HzNUouqQqbSjdtWijUsgzgiUUStqVFPQWJLUVX3u8A79oBt67iu6wMaWGQ7AnENGubK8AjoFpQDEWhFHdUFZvDW",
  "key3": "3wg4V1bgiPE2awrvkG7upAzbbPqxkfh6XRhWpZvgjG1vMEQRRu2n2Z3cWFDCKGjESDyJNhjnd6xPQoe9yessqQva",
  "key4": "9Ps7FBhEbaf8mSsipa62k8uUmvya5S1sLWDQTLmiRGHNhcPKyDTerYXjkxYdd4okffAUbdeHueE6qJiw77LWvbo",
  "key5": "5fnGLQ7isQS6Nga5Tbjomu7tBDkT6hXMSEuaQDKgqmPyrNALH7VwLU3H5XcxvBVMVceWZaCrR8SxyawKMFGTzLbo",
  "key6": "2tgNgdqB4HfX9oy8HLZoTXHdY6p5SBsAedSFgrsCugF64NZHZqmNZgALvpYEbMYTGRFgUNtKjTuQq2j99hvPDh5Y",
  "key7": "2hj98gkP7TPrg3jDHUg1uUzQLijdNA9GrmWpoyQ7dEg78jUMHSLnuowxD6TzYF2vnFUC9j69mLsMQ897MVnNBrku",
  "key8": "3qgpzZGFNeXvkthg6sy7m7CE2QRHUhHosWtBkmM5PNRa5YGqi3cma4wdRBRv6uTpt64MsgkCRuzi8BaoELgEw4B9",
  "key9": "6VFx8oC3i5eg8HpFzVnFe5PgKSrVXmKeWvDCqqW8mDzxmttBodEuMvozfhEVAFiSTUKDtL4marBE5wcaHVU5PWo",
  "key10": "4xau2s1PekfeSWhNfSkXZj3U4hLN2Uc1oRD5swACEqCL6DJB7f4jsakHyyNpUEvQEubsTGoBKoPTyXPS5j2uSnaP",
  "key11": "4gn54h49jo4Q1XLxfcSyc4YZkMx4rWp9YvDVjpsgyVj8uArRwiqPJWJD7YtZtxsx618bNBujrtN5oFB9FxhAGd8D",
  "key12": "3snqajnaFykgXXFMCnM3BvTMAxC68qhdhHXpxhymDzrwvZppobYpLo26M71KeRWHoqBbHNFtrUxzJ2hJxGr3NcAs",
  "key13": "4yNh83TqafYyDiA9F5Sq6PVjdDa6vJ8KS1NpNNGrP28qMhnZoYU9gPQhikUFGjSJEoaW9s5C2JCH7qoTzdx4J7Tj",
  "key14": "xN9PMv62tSd9z5TdooQJUA8xn5HBRbPnvpVB8QYNhpN3p8DLR7FbWAuqyb7MuPEXZveyo9VUc1x1HWTD4R5BYvh",
  "key15": "jmn7P2sYwTd8UYqGUzHocLuGeemUKfkBrf9Awc3z6CNDZytjzcuXcm3s64M8W7pRhhMcz7ddVGgbELL1LiADhhk",
  "key16": "4AqTBa8Ghk6V3iFF2AtDkUhch9ZennMDhGXfiHHcRGrbaBrU66T3dkkKgR8RadGFsapujJqtLXtAnruKCTGf7dkx",
  "key17": "51ozxEgExZeu1nRs4dEDXcwbt1pi9k3gNthu5ND6KPZ6oRZ5RYwqQoZWZvy3TzMqK79AQyyG1C6FXNNcBP3pEq4y",
  "key18": "5cNvprmR4v4CSUmeF212N27YUr1LkM5EAKFDQ2ZwfPM53uGFUrrkrs1QCcnCnc1jUjGPYQxUKJmnmsWWT3wFgYxJ",
  "key19": "5edmYt8KNXUa3CRrJiwTrr2qZmHTM1vhC59UqNi2oQyEsZUGAz1LqsjcM7z66uEdRS2T9mE35HAkQdd8HwTJA433",
  "key20": "2ECZc6bD8YnCR8PVut7tdPiYJKrnUzLgisFDZREntSHPuch2dTJhhQ3ebVKFaXqZEA9x9PyQjsLcPJi2YSH9mnXh",
  "key21": "3DPi5eKEtb2bAPWxcg7WM9ZhkdBogM69W3hFgxACYW4horEjAesVVji3sUFebkBjGkJ7LuBN3hAm5cXJFYAEzPgb",
  "key22": "4nwb5z5A3awGytHRJqYAZrNQKBfN37g4MUSAgcYpDnEyaVRwo2EynVXZUSqrJUZxbUdQpWnj2RHhUbAT2JdZp44s",
  "key23": "476Fhty5RsNVa7XiSNRNAfBaAqDF9Ww6TLoZUQkzREMBQ5q9KqXjo4MdF872r6eTADD9C49tBbAQ1N1k4s3YXjjk",
  "key24": "45yc8AVTK6AQkrS1d6K51qD5CNBtRmPmTEH4FTCUwfcZoFpvZksQDbWxCtaezv49MgffWpiUsW3EdjJ627c3wixJ",
  "key25": "4jTyTHyf8DQVJGkT9FbP1PLYmeo7aCU4FD9ajEcNSSWT3jWomZToeN5AcBspxu5jsFFVQVWhWtW6NRtRPDTYFZw7",
  "key26": "29xEmtEdBmwjYCX5Z8eZyoujhUeFpBM3ASisesTiW2mteNwxLTrvEsGyC8TNcLXSPDwZGd23CeNbZTS5kpFEpE5h",
  "key27": "43iDjtm2zr5QHRRm2Rie3MrrnMNMsoULp9H71gL2gvEa4XpYVisUEYUsCE35cANGSfZ2EcQogNY5sso4zCyjo7F2",
  "key28": "3Q7ZwsJn4wrcDXsRqoP79ohqiqSj9ccEjY3hsf4anY7QXveutRdZwfoStm3uHQ4jCgs9di7b4x4DqqJthQk35Ge5",
  "key29": "3ku5xU7JZ2fCyJSNX8WccmiSH9qQAQKMcKP4pJb3WmXotsPNH3S9iRDXcrT1tCNqS67n4eLZ7XE86Wpbw2fGWZH5",
  "key30": "5uHTrQ7CHyJ4mS4t5EW7cqUGLvtYqbkK6HHTZBbEALHDPA8syuvTdDaYE3mpqiF71RExVYUQnwFDKvFbquaUQakc",
  "key31": "yR5em3dQ94nsGkvkFahyBcrJdzbzaDn3o75azn53smmdfxuzpSEF8dQ6FzaASHcQHQZ7M8S1rp6QxeKawezqVqr",
  "key32": "4Pn7BWVfrqaTRP74ihr1WQLcSrVcAZyrUvaRzzjbT8pgKQeDksrnwbuqDaWJpXtvSCveQYhwJaW9dwUBUrGaCx4v",
  "key33": "4dA8L5gBaL37PpVcvPKRXb5DzDTgmCpv6VQyBtFGrWDZrtoSCUFD1idXuSBSVCueNtGEkaQxPmm4waRUdupRCdte",
  "key34": "51ZDHp3wmcyuNgCeJCVrnQEcMXBLER32SBaQe1aHSSmKTJDF53e2h84ko677EWW9JLUjU5XwSe7D3A2n9sx346dK",
  "key35": "4bo864dTMRkVMK3CjGY4wcnCNwAWcGu9NLR9yKa19wDDhEmqQD324gHshRZaC3pdTU4MPethVAjTKpa4LV49x7gi"
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
