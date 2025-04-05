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
    "3uFTiSoqecmJubdKSWjzQ4zu5LoTEiqSboknWR7HMs6Fv8iaT39KCChgWuUmEdx5uVnDHUCtXwCFdcSG8ukUjJ9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22tHMkUkaCeqh9FZk6kqvaRdndWDnJuP3Ux48M1Fp3kKgcR9atyQKwdymQ9oXRmYaKJABeys6UT5pmx3B5sQGdQf",
  "key1": "2jkmkPodUz3fcAUdY7X6LXnpk1PsdRGoD7rafirVVfQZH76wjA3Y2fTotB2BiZLNU1YiXuSnG6NL85YkxhoTtU1K",
  "key2": "4ERwML4tgSX4f9F29eRKZh3FkQVkWLb2mA6mRDXYmMvwR8M9PZsrTuB51quy3ix39eTPiRfA6tKXWQpNStPqcg8J",
  "key3": "2Sx1AKCGPEy3LqMV7RUg9dga3hCsLEPPNdwk7G46pq3zvV9CanEuCNBx7rCYzyGM8nwRwh5S2pbvCPJvYzs7GWpD",
  "key4": "2WNzDunCwtAvWtZu436Zq9j8CzSRUTXZBaydQBG6wbq5riUrY6BAE4NaKC6YMw13EBaj4vmZouoxszDdsqGJcdyT",
  "key5": "2tSbx8LcBmvte1ZqQSzm314eiB1zy3nc6tvojya3cJ365vKZ7tv3W8LwENU92v2Y4kykuo4NG3T9CjYjARfN8GgR",
  "key6": "2XMgQYv3CiZLUYdWSu4VMhqezKJib5pcjjwuDSuf8cs5We5Rdbvze8dEKr1djjhGFJdtVyHqrD5ZsBBybPnyKqfn",
  "key7": "5TWVnCo4PV9rn1prwyvYKoa5oNJZSpcdmg5dsmJLcVjhJ4LSoUuR3wVjaRgwqM9p6xrnNFuonz8PFcWKTsBmPmtM",
  "key8": "548SBVWW2enn1px5xBPsmZHLqcNXSU67sk82r8p47zah7KSpS2cDMhE5WCDi7FVTSq29vTmzEyEbPyB2GQGEVfNY",
  "key9": "4aV84PN1tWhaUmEuv4rAxy5qUQWSy263ve8EU3mJCBkQsCEJcLgYZyPkDHRP3KAit7TjjZ7j3ztCdipPFT7Dj6gm",
  "key10": "3PEgLDYryouJVvuM5T5wcWuXiWRJRLaojjpnxPCKg2sv5Spx8nHcZoqfB6L7DtG4o6npwkDisDqYWukPHhjhQd4e",
  "key11": "3y72jfFcZkLNrwbA7yV5MEFYF2uX2EpTzhkbzJmmuXvjcLmwfyjujfDDY3DConQLhHygUe9MNcuhX9qjeG7SfCif",
  "key12": "3PcGGtedUW7ocJT35ZiWNHnkJazrdce6cqxHWMZ6P4iUrFtnquy9JzDRN1WiCHbfoS9vUv6bK3jPvtCPQnqEZnMy",
  "key13": "43DiL3UBGtjhtzpgiSycVvtng766Eu4s1xfAME1jHCVVbhCeBe6REnK1siPVAHm4geT5psLjs6DEe7eZMnnLEaJE",
  "key14": "2Ew1MMuD3ZvN2qbPhzwkVF33EFuTu7E3qrzrm9USzBJM5jQWv8qD6XDCYwdyArBoLudcRbptkPj2RHxK3dTyNdQk",
  "key15": "5NecHPvhFei9JBUPN66c6nJKr1RaVvi38u6EuqDHG8R5ojKgZY9ofPws7GFAkRvDcfifEy4sMxB8raRZXxEJZVtb",
  "key16": "3DGBM5g2hidkGALGvW153HdKbWh4k7z2QYTmJpm2Z7nEFUA9BGS8VaDebWpr2zUxYcUjXMyAjZHR4oeC4cwL1zg",
  "key17": "3v9S9PELEeJaF4crnK74dEdi6pLugRWpUVFRhTHWJpHURDEAdd9iPenDswTii8Yq8NPVvr4ip5MEfDSgrrWyJ9D",
  "key18": "ZiJjSETaegn8nbDp6R8gauhfYGHwpoFoJSnbfregCu1MBozunfWBCaofRpcjhj5S4nxWVLfhsm7Xheuh1rMViiD",
  "key19": "rBcSxi9fMPXuQmG58zyrsoRXayEW68xfZX8CqY8bKgvtMYaLaZgwE5uk8GSuvQYTxea8ENNAdRZnFYXxKbFLQw7",
  "key20": "Bth3dvtVndz9gjWudgwvMsoVx67SVKu31xk6StGCkzKKnAxbj7oDKxjSXZ6DogyVV4n1MkPNB6EmCJXm76YySXj",
  "key21": "5zV65baQsv5UCRpsNf784MEa5kB3wq8mqvKmd47mg7AhSJvczoxp4ijGkR2Y3MsBZjBEMW2spVPbnRxs7ZEZofTk",
  "key22": "2tgaAhrHQeV4DAe6aLHiCvGkvwUQiHNDBXUT9VYCAWy2inA7uKhVyrLXinnk1VSkAeF799Buwx7UxViDgDdM1MAj",
  "key23": "58JhGifbDQ9n1eL16J8YYj7f7ci81uWahXkitUUdudwB1zFuQJxYqVRdFh73t9PL46gm7zePmNn7T3TyTMhwEFWb",
  "key24": "3avgacUFNfaG3iWFrTRPfyrwP3RLpYY4QWmG6X9YjCcJq3xCuDFa93Y5bX5vkJ9NCGgNzGXmH7TpJhKQoYMcmG1w",
  "key25": "4y3AK2VppSMqWEWjQ2xbaxRPLPRBhjbuuyrtVaNdDo2ssCukGQqYi8CPeFets17wSWHHQbnW8tSdnv5itPMow7Zx",
  "key26": "dy6uowFvTSnfsPYSq4Yks9jZBq5CGbqm3jp2epiX3WKWzmwPZyTG3cu9zQLQUACVjS4FqMi8RDaJjxK3dVZHNDg",
  "key27": "4H49gNNWSTuwbV7uPuZarsJEN7TbjDB6pdwEC5at4SHpeapdU8GM2CUpsd3stLf3uK4CXSm9iypLrGkV9cpWZi1p",
  "key28": "3PD5AuUFAzMP6WYZnYXzESq9YVQRG6uf6UmZrEmBAfhGng1CKCgc4i4aaNiteq6DU9veoCGcyhEDYCFwQyVyNgss",
  "key29": "5dVJv8fcJr5EEyTCPWvGWqu8bEpbLXhbBmkxJrSowFH51N6UgJWz9FX8u6dfYTM9pwfqKj2unTRCFvwjGJ4YNe1r",
  "key30": "3jY7zy4xABFRDVkWFAiCKHrPzGqdGqEofZsdqsbnVeERx1EfZQyKfn56hXXgXRvwRWMWKfqyBu9vTdgruxbCyuYr",
  "key31": "46fWAK9uuMyZQhPm99joSpSboL3CaEYxfAuVbQUw4sCiyrAgfRCT7UmhHGVicGE8VwEQzho5c5dt5ENaUwAVUyip",
  "key32": "5npYHTt73vHpJE7zncSsBWUcvxMEacZyUGubkzdakFhzhZ5oy1ReLvTEqs9rJw6UHA2as58xT3tRwCYm6xky5jkw",
  "key33": "3iAAQNA4DkUfRfFKFX74B7MeYsXpkqKT7TWA65aHT2G7r5XqgU5UVfX1RBr3TP4kiDBQ9eM4mAzb8A73nKPKhSTr",
  "key34": "4Zz3QGJ8bhv1DAMRULR9FtJdVdYHtJaRECdUagzrwdqgKeRU9FoF457UyJaSAf7L7kXqnLyWwGKdLX4iTNR9BAoa",
  "key35": "4BVm61QUs245KGKC9ARjnY9Qrg6PAX2mSVc8KKz1qHGLir44WEjeqRvq6d7yjBW1UZpsTe8n74NKNUabjH5kwHRQ",
  "key36": "3z2YEt6StLxaUEJs4of8PeUqNncemRn1a9AgvC2uWvvCmfdEYNag67Y6Ng5HTkuizaRXHScm2rVkB9Dj8Hwp7iMN",
  "key37": "4NxG1u5SJrUGaKM8h3cyGAoNNFunfUiSYZKcUe6K16bwGS91B711aLHa6jGGnWGLgNHetW4qqZLp5eTHZV1z56nc",
  "key38": "5upz1cF9wKrFxE4QyQwSbJSG6D5UpEpqFkxJXH6kGyndkCBwAhNbDXuCHEJhUwRMcu6cdD2D2rBFQNXS9o5LqgJC",
  "key39": "2JwL8xppzaBT2U9N1upMHmd8eMPTS9FPJVSC7axUFKDfgadFg7JnLh9xkEPFMp5xja52A6MPd58UuNBHmMzWQCfX",
  "key40": "56cnG9sLW5HQNQY3LLSCDTEDV9GXgM4mrnb7H2cgQdpxzyrs3ZBWpytE9FSd3eSXHpUcydTZjELNtfjp5LV1id39",
  "key41": "3rZ8MpR2p3JTNLCRr1TVULK6wEQcHQ9dyRHKw1ynbUzcKJ2a4HMSy2j4Kor5oiGfcNEn5JqYQqFvPcT6Ygjyncnx",
  "key42": "5p5f2Qns1yzvo3U17u3KGh8Fzfp6ErTAaZojAid7vUXfTYgNcj5XfphWwbtbxo3BEg9yiML2w96aSAnk9ofnMWbv",
  "key43": "WkFmudp5gvUvB1Sbv7SHSFRRT9oiSbvvg7oXQvybkzUg4jeYUizz3MTr8uZPYfcCwc1hy2RM3UudivRKFMV2AN7",
  "key44": "4SwRMYiLeN9E6rjNg4hsPjvnfyEPUnivQBahhSpohWPfciQpX9t2idF23H7LUtdPnxB5ChJCtDQjZGbjNz1JZZJS",
  "key45": "2LgMxsJcxPsaFbj2atxGGDtimfhb69CbyH4rWSKYqLcSTPTSvDnw7N5ZxUNPM7fuPKxaj9LZwCcV76fQE4LQteQX",
  "key46": "3Qwi518is9DKE7N7XoX6KhnSQu2iuDK5vj31qsz8rUaDtQnE2NkZw4pFT9sDwGWMKprkctKANteE5JxMAGy56UeT",
  "key47": "feEDZXMFatp8S4NvtSyzw3quSzSAzuDYdrZ16W3VtbmXpX9ooYLgNe68ajqedYNrjyGc6yJq2sTMxBgcFxNsMvj",
  "key48": "2z16yn9usXGseDjFBGSrb5zh4tJQtyUuBNE9eScpC1uNCHbLUurDgvuQ6Zt2ceizUheSwP3s8DB5JibubNZjgLgm",
  "key49": "RuM8e8QNpRhbbtrwk7KqD7VmSr5Yh6dBYpjCAZQbAkEx22tieKxqQdafGXwEZaiPs8uKPNipM9JP9NpVSbQX9rq"
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
