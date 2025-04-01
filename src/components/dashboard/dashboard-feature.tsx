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
    "4Vcjuv2Q4eySeXVwcu85Qe12X4XfKb2qgk7MS6BJTSJUpL7ydHRn9fum7eMKcofbQrdz7iADr3pjqTdQZM7xtZP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LZJQfZ3A2n6jckdFiDBcjXdWtb6nm22j41RTrXx3aixkvbJaF6uB5qZeGccPdxqK5kFsNZ2Wu2YU1GCz6ekQfzU",
  "key1": "3tQoQgL34ko8k7Ns5deopqPp2dHTbPwudLU2ftuefxEfENLYXgTkaq6yfE3fGds1NsAsqzseKyzFy8KEwydw9hgu",
  "key2": "36jaRWssD5oNxAbgBM5psTj2zzKzRYEzwx1KxzEgG8uXkz885knvZxhNLkQZEHUGJ4GVRHMsyLAQvHviLYJCcKsy",
  "key3": "4w7mUGuHigv1qKwVBEqMUQC7asXh9pD7GK6S5bzoCUJMjCs4H3AEr5KdX2RJQNS38YrtbhKx1LFYZNBjazvGGh2H",
  "key4": "23zGY37grwh7zHdEBupcX32CAottb2DHZNVqExNFnBU5qEa5uKnia54GcwKBsmVycqSzSKwW96Xb1KwNVibbBa71",
  "key5": "27JY5JTtzsRiLwTfcnTTBfxkDkAstH3vDyrtkfY4numMgfjar8pqMUDzS4ZCHJfQTs5Q6S6HTWAQAPdEXzrxeJvA",
  "key6": "2gx86ua6rzngQCzHe4TC8NumamnGqehHYCGantNpUYYpiiRiFuhp2w9EjmeFmes8dth6UvbphQTS7JmaaEdhCqH1",
  "key7": "38iCrGazNtEJsnbTaFgt5Mug3qmjyUtL8LJQBchrQzXda9X5x4LHTBmQQjNWfsGqVf2uVTAVPfFA8BL28poLQZbt",
  "key8": "4fuMGwysHCgJ1jAgvMMeUsJkPVTvHkhVxtLFEby3941ArvZ1WUSxP5KUS8WvzYC6sNFgqjNHZmb75YrA8VPNv1vt",
  "key9": "2GHxsUvcqozRkofvhYLmtnPVaYTtCYXjpSodvcS95q8anLjdy5uvrzsZQEySgQ5GeNxygwH8b52fZGqMQnUhgb4P",
  "key10": "4AgQhZvApEpQfqQqRx6eR7SaxYjWGTGhx25FSR8EGowW844nt4cN2JtBSd33WGgyiZPXH26TojUrik8uTrj4uw2c",
  "key11": "TNKBowUPumcu6RxcxyBy5EMxXbcGdeZsyoRvNwqDj1FnkCxCNfqC6rLnvtC74TWtzkoYmh9jFvHD3fKDcqj43Vs",
  "key12": "2JnaAkkuVGYK9rXtgWspxpXs5ygnDMXnMVmRcPuRTaM3pvdc94RiLCXeZHh8yATKEoxPGuMmP1hRJLCzv7M9DZGD",
  "key13": "3sdP5DYtXCBfZBsE5HZW9gyvqRG2iFofVCRdAL4vVmH8YoYSqeG3WCJUx6BqhfEHoVdtY7SyrXQBTip4U1uLbuN9",
  "key14": "2haXdQD5qzdApXPS2ytoXK1Hs7i2KRqfAwzQ4nkhPCPY65WQwoKMJC5Tk5kjBKEX8BsCT5KuYb1AXU7rxFt7acsp",
  "key15": "57ZoWPYoiFLkBzT3DZzbnDQfabjcvTd865tRD5hXoq7TG8LJB51SpHmnwZ8TbueWmxXaWrmc2PWGsZSmQtan8XYf",
  "key16": "2FVCC5NTM5CJVorBPw4mHywMMkLCse2JG39u6Keewkam7uZAh1x7aSzeQgEP3AuT37DWDLTjz5HDyq6NfTmJDR14",
  "key17": "45ZS7moRbCgmtxm1UejxWkmemfCVW9erVwo3De4ojNw27hWyGxKRBGXvCog1G5zuFLiyrHANPN6gBZi3S6L7wV9J",
  "key18": "52t9o9gov1mCKukxwHg7pHtFwjWEP97bcVokaGfgBYvGY3MbFsrhU3HmwGWwmBUVxEb4qV59fqdHj37VKHaP2gfd",
  "key19": "5G8rJwfDXvme4AyF8jEhyZcFuoP6ZvWC8Cte1ywgNaRTv5cx3EBmcvhKughvdZtESWvMgzv8UYHaDdPPzEARQLvm",
  "key20": "gjLJDFhZBe2at1tQP8tTCM6siyt45iDGTAGy167qgGnEXMpiBrSMujLLaT9wxRbUAXX64rFAr1JNzBuYWKTU3oZ",
  "key21": "3yLrEN8XaiSpUBbSLSVZXS6BUqqaeSWmNv2pX4VHif7VyBsqCgfwitn8DRw3XB6Tqey4ZvsvKM4gvgbLhc5V1j11",
  "key22": "39nqTypnRjKKVwZXTQyrinQXsSCkZGxtPa1xSAtxo3aQpFLttE2GNnc7msro8Gni6vK1fcwKK7QEdCWsARcLWG2y",
  "key23": "4LwuBVbWWGnZrySqrVsQrvF56ydjsvqFwQ7QgY1cQ59mBQVWJt5KcktAgfSPyatuJZon9hc3LybpeoAM14KPnGN9",
  "key24": "2dPnfmp73E79jJkJuP5NBW35HhbtirXUE3vrqAwokrxQpCe1TAKNTZczYm6mt7haqbXLjsLSBkXELeF4pR7Ea6eD",
  "key25": "4iekDN3GtyBhALJeYQyniPq9SgJfda864unyWK7mNLBv8vNDMedjiCXwaazCUnZqoG7spKiMPYGxt8yabxdGtt8a",
  "key26": "3LKLBJTY8k4LsiEZpAH119vkzGLHcyQC6YUAdR3Zpx1ScqEFrYkrcpYWxVXY3dQ2mAMq5qT1Lmae9WoMycFPeJEh",
  "key27": "vhJFzLt9dfYwvTda3yhexH7WjhJf2veYZBPdLzk15bVyN3mF4zdBQHaRTooprRawLYm4Xd3bRYJAeKtnT5euh2E",
  "key28": "2fAYY3tqo8kh6BgNEDZETaRbaddJbVyBQh7xhc4oV9FqT6LyEwrKkLUXrKFXuNmFUUcBAoATiJa5C5gwqukBt3FJ",
  "key29": "4uFpj8PeLQ4ZjMEYHWAfEuejNJgXEUPCjg3nrWaJjvJ3NruuFmQMMbPuC5iRHGk6uBUdPKEnx2j1BktLqz6uE21M",
  "key30": "2RhjcRtQDh6tkW7Z2mfCFxB7srojjZ6EPbiRQGGQM5xbTafxNYWkJHRVjzk8Hk3CFE2QZMbxJLTFUQrUPWyYXbAg",
  "key31": "3a9y239N2jQHR4nYat7jaP39KwsLuptfzRZRGWqijxaU4WpgH9EVctadFvQHFip8G3vXKs6GbGHquGRrsKaqHpoT",
  "key32": "5HuExYEdtr9HhiiSrY3jtwYVzeg6APEf7RqtbYsyyQjp1RH7zHoARe7aeFPVwHcuL45BZR2fJaWLdfb8wgqTqc8e",
  "key33": "kiHUox3D79pEB3zJ8TaFh4izH7AfD9yCSxeevVef4EiRpLbyBqStn4JBXmr4ydP8ZdFTGoEKPXickujizMG6rZ1",
  "key34": "3sNkG4QHder453BdsVUf7z2dSQKy45T6Ft6qDdQWxrX6xqeumbGzsufradjB72pvxPxikiZtYMAfZewEf6gTdvPz",
  "key35": "5shxgZaETaJQnST29mGJqCRuDyU8rfB2SYxrcnbuv9DUhWMLdNtPGzxXj1JStp8Gyx7YjLVbFLh4Sp6AUrEVfmbf",
  "key36": "43JaBqsZjunxhk87DkyFyKj7EbiXj8bJJF8aoKtBoVqobjq6xK76f7g6QzxNt5m8NXjyzr1xdVtqawiS63CmYWdR",
  "key37": "nt4HeBMAqUceJMs2KE8mxC4eYqYxDVF9TjMR85e736R5aumJ2AMvUsPD8ii1fWy4AYuqrv1w2Z3NcRouRPx8Cpj",
  "key38": "52K4bbZmRgq83gBke92qpubzWQsQzLLBQudP7ae3jf4MrQnsakE4PmqsozVhxgVWjMiZQci8ER2dp7c8e1m9fG9k",
  "key39": "3gwqiAoSkDqc8fFLYqypJSZjkPEsTRyDrNP5vSbQok8R1GqLMAskEV4nrUGDa2qXTjExTEoDTfCuZ7bCAwustQmT",
  "key40": "2qmDtveBXEFxq1gCnCyKgMvGte4P4T3dS9ppo7f73DinahLB7dtWdecy74rQQ6zhn9S6D8ssAPrt2NYnQrtr6DKf",
  "key41": "5uMraYsGR1AxZ3fcTgfKnMvdcJFkU1ypY5TLrkFyyHYJvfQ3JTjWPeEZw2EtVsMWv6RgbtmkgtSXNGhGmCpNoxvJ",
  "key42": "5XGvYGAzkFNVgnqFAVkBoqKsppH9sd1JJWq7ASEiDvMmLHJ1uAmGuKdQZRVmhRanQknHpbX1ftrrzThUjTWX3tuz",
  "key43": "3m2QVv8SzngAtkwxHJR6kMc771EaGWJBEYxJbTAQjRDGjddpTLTLEgQCZ9uoXbcU6oGJSy62dgDVoVaKuUZxHAsH",
  "key44": "usKCND4DcgyDvviHWUgLkjEfrc7Vp5GzzEzT2UT2nXiHckgEsQeVZtZxj4GDq4T3qKJ9hobk77yYBbJER6q5zUo",
  "key45": "2WhZDh6oqwHGxNcTyvECm3iiGH4Sowz1ErHQZ8YKyRQavCKmGACgUdtGayjSFbm7fCjvk9ChEbRU6VNwzwVKe12P",
  "key46": "3Q66xtb8ECFCgwVZ9yikhiUQmfzMPGLRmJWPuSsU52xRgN2Lm1KMPx8AGUPuaH6z18VjXwn4BWe5URboVPMxDGuK",
  "key47": "2MFiuXRq4QQKnkZmGC6LbMd1DdPg5We37hJJ1hirvFN2n4hmF2o6wyPduWDPkpY9CSqd8SB5ZYC6pzhHEJ7GQ6am"
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
