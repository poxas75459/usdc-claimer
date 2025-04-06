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
    "3jrZgGmG9mBs6DrRSm17r1LtQVne4TRKbYN7mCkd8oriMuBXYuwa4PZiDSCzU54zMPTXJZ3Qgk4BYsy4nthNcjtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mkpqgXFbGLtAYuVEmX7bCRejk56CGbpWcm4tAz9EUp6B3WE1wWZ6de8egLcyAr1PAjzCqDs9ngUhXtXZoxiwN6j",
  "key1": "3F7EbS1Maa3CbysweF5cr9GfLkC4R4uByf1vs9EDkJob2iSn5n1Wb2DStbdRW4YEHxAUr1y2udMJGY7zpqermuGg",
  "key2": "4LhsoAFp1QW4Uu9cWwKnBpt1DJUdxyBpQBB16pp3rRzjz3rZioSymzwQ1VAnGMg9rx7n1vBgBhguUAa7pX6Jmzsq",
  "key3": "2MHYpXFPYB9vBHk8wX5vuN44R7BrrFnQ1mMXUuDns9NpKnRGKLh6ePvLk4NheH7oCFTVFjcDkKZ3ugVd33v28VZ2",
  "key4": "2Ytw52cb78JK4H45sqH5k6jxuaBCeoozuAqcuFLikSmaBPWCZ6kGsc9ytNQwruLQAKehFRX8Gq7T3Fj3ExiL4z1p",
  "key5": "H6kVQsPh27e4yzdwsX64Ax6nM9Ue71msV3avcaLHjhmezwvYiETauUqL2jqwGwzLLk1UUKiPdGUfcfqnCjPTwTT",
  "key6": "4Am5rSLnUqj85sYNBdzqtPWCUxRs9cmrNXANrWbTnYoNJGHwC2kiJmS5NUDGHTxYd2FxgxNivXpFK2ZpFbgNJzrK",
  "key7": "61X5S5YhJzNCwt5V9Xx4aLyVjKjnbdDvo4oRKBj7ZqcaC9erurVSvWm8LucsMugDbKBbeQoUgXkmdLnZASuZu4oz",
  "key8": "33MqyKNPhaZsdWfHnrpePc1tyftHncmhCM8mmDgxwBEWGUW8sZip8E7WoSEG9FKjE6jdLFgWUYuSXebjFjTy5nY7",
  "key9": "4hJaz8yyvnJ9kmZ1R1B3RznyY71Nm94EJ2AHLTTfi8HzwzE4N8MFMFVM6HvBd23gyDf2qYwKaVgL9kjS3fQyEGdi",
  "key10": "3diocSWLn5AanAvM3qxUugf9znGS8koAxYNHiNoByQQLk9BccGCTw8w55cLTgBFKWiYYyPERfPPb4C3CjNAokBwf",
  "key11": "5SK1agx9EYHp9sfeQQB4wdptwWLEk9M9gMkP2TUYQafxgXVowdSKU5c5kCPyZ9rXLsFR57DyXrHhoeXEy2i7S98z",
  "key12": "4tpMbUtdYUd8yg5xytd7msifbhHyPp3R2aFBVfJ11tUZ3HrFVDhkqmoVZBSL1N8WHcE1Bgsn1wZDsDTYoP1XDHqp",
  "key13": "4Y2pGtwxr1KZg7DPntJbrVGYRrCEmQ6U8aPxAGpygtUYAjzrK6djJK7KQhvKvpt8nyAd8fDnkXTq1gvh1osyUaNa",
  "key14": "N7uoae3qzqe3XZBRmoJuiyCrqb3bMbAFpVHEWfGpaDb3Si39Y2BSaRUPJnFj44tvNV3UZb7XXxMxFrrHUu7GNEn",
  "key15": "4tA5paBrTjV3mLnse3sFfKe5d4qUFzrtm9xQeuRPBmQmy9f3mcP54oJUmhJCdGjXQonPKGgnCxBQgJjhGK3cWtuz",
  "key16": "2qDnmK1Xybo1ARSsrDhD1k2nSc2Jx3GnwG41WvQ3fAnfpsm41yJeb3TzxkERRFWgTFJBwJBJvp6EdetqLeLuSZL6",
  "key17": "3CR52ueu7bVXgM9yrLnYGjLkXx9vPAbBraXaUmWnDfBGNs3RN3Vr8M95nK7JnDqcYNYVJyhmBU2PhGXmz6Wn44AH",
  "key18": "vcKPSpR4AaM4UFTvtKiFmyhyFdPWtoNcTekor95MyFrLCunXvFPmqBTBpfpcFy38vDuMLVX9j6v2TuK2VeXXXou",
  "key19": "4WhfvymDRcrhv3BsvSiqYWjRrd3MkEjL26gPjwC94oaKs3ZY7Qr7wsF4NJk9wN4fkjsAdBaPNRs8tH1kagtdRJuA",
  "key20": "2fX11tcGEpombVJpBwD6Jo8D5yPjHN731R1YvK7r73ZewgHivrqSh2i1Rw23G4T8oUZcJuwQUCsGUWcCzPBQWqTh",
  "key21": "2sUhqyVjcVMXFJgMgAVLdnXBZgHY5CtoQDtmFoThwzVZs2AbKdPdHBR8GjmftnBwm4NXibrMY85bPEBjX9pmJR7f",
  "key22": "iFkkQTxzeVhhpnrAKgPtibWNZr2DFnEpu4sBpuq8RZQ3UVKck8ey2KidMzGdCGd71MpFx9CyMcKdVbgBXKySWnx",
  "key23": "21oLoibPgiHp3THL729Tu8rzVQDXZru1ojbEfzZv77ysJCBgp1v2PNkbMpYUAZLZPoG4wzfhLgxmhMmLBEaDtzsx",
  "key24": "PswS6gRoJL6q9PxhZMHVEypKyL5H6hPD9fd8cM197FvqmAbo2oEh5EqXsRH9eRncF7dhzzTvmk4LRBh38jj98zC",
  "key25": "5X6LHbrjK9uwWGsgaYBoyi7V4YYbjfNiP8KtiwNHrEjQ75HnWzfPQYhhxjPnttXZUbBMYMpTco5Kks29aRW2Aibw",
  "key26": "xMn4mMk5FFtqtVSDwZMhcG3KnL4XVoz4Ub5DwSactoAQUSGxiC2neWTrbvWNDeEXKQ8164xkw6EE1T3KqpkMkZh",
  "key27": "2cXEY1G65Y5nEZmnUNBihJKQRRczVQA6k3kFV1faB6kqqWQ7HAZ1CwHp8vj6HYJYDjiFAQJ7xs2fVUanikhPraed",
  "key28": "2QMnY8YDY9Y2yJsHsEG5czGiwy533iK736FmH5D7Rdy8ZJGBheSNJuFpibQafH7Rc87Mb5iD3kJ2xo24zBhAhaGE",
  "key29": "3kCujDDbTsXfityvG5jhUeVA455fpXfTc4QjdXGJmjD7Vt6mHfwS91FpSWLZH9F3Vwjq4N1kMFBomVtTFfMg9ygz",
  "key30": "FRaveXNT55uttwDMG85M89HdP3vj5zTwj82Aj7zQSDgJXyDJbQf8wAJXJYTTfGkbEZCuZubazoGXHYwUrFSSpkx",
  "key31": "3Dxwy4Db5PrgTdVUoT3PrrSvv3E3pxNN5dXVUmRdNWhqx17yzAw6SEiCsVwctCa2wUBTMgkDydqjNYE3pK8udwNK",
  "key32": "4gwHauNuFSdKKAaWSyLon37QEPiwyyp7bsjbJHhXQfM2JZdZPtmbevppcGkyTZ2f4CLVXKbQPMYqqk394iWcxYqH",
  "key33": "5Ch42anLqM4Ffj2eva9XkbH2jhMwwJ7EvwwgArwb6SfoeMNLkmnq5fEvw33mAP3psSgpTCspZSFDby3kjScD3UB1",
  "key34": "4cTqyJW9WmUfFqjf2hEB5T5BRX2MyNV751y4ifLPcDsLroGfQLAsC5ZhFFkXSv36SQhgAgBYvob1PsdMzMFPJoXQ",
  "key35": "5GkxcVDpUxv7apK2SryrPDy4PZxUEPRkcD6Fj1g1QBo4NCGna9wMELUwvgB2UsnGq3rN1PTaB6KQeS3FcQJcrG7J",
  "key36": "4REnphCoFmaxiWpjuCUjdYRvjUs5Yehk8d7UkagAxVpffRJfvyhk1Hq6jcc4pzxR6c53SnDoXupKJdzjZGAJxVqh",
  "key37": "2bhnGUgStrgd6pSWUm4bXMpVNsxC85TZF7ADpQta3RUBkRgvFoLdxg32vacdapUZsWtXxnhwpbs6mUddCtAtoMEj",
  "key38": "3tNxnKuZnCyFMvM1uURpqLDiPdg9YFNxMuqLTiqzfknbr2FhcRVFPZzgEXKq5j98mFytf46s24wkFGSRNV3V4GwR",
  "key39": "5edJrfRQeshE7BezTHzQHjFJYsH2kL8e9nS6mGJuF4DnnR24U9mKukK2nyiuB7VBERoZBzBhzsaKANKmPfAAbmCf",
  "key40": "267tqLvcUKzEeXJ4qiozgqAn3qanAPe3Mg2CGakmCmgMPwofzR3vvBATvbPASMzZ2jKc9mnHw7XRUQKF3jB4MqDo",
  "key41": "54MQrqxmy5ijuFyg9rrVXRARSx4VCjvjxdK2Tvp7KxnQwB6MoZWP3qw548H9eDpNeCqEGpWrtXTjky2hcdm6bVBs",
  "key42": "48sS3A8iupMwDPSH2g9zkU2xFgpXWj2ttDhwrrFiX2YpbsM6G4eWjMkgPWcBQhyNgqN5zjoQrXmgLS6xs74VurXo",
  "key43": "57iEDEWRs5dQ54AZi856gYgpb2wvECDpLNbeJ36sEJrxKskveRiEASj1QMGs8p5bPVdaEZ3pWMPPM18FTp7HtaBp",
  "key44": "2MjYfVH7RH6yVBv3ibh9CprCBJXTK3b8ud88fGozRo3Zam9mjxwA2Rks7sAb5C6UvJeEKgtTe9DrPFyjCAPP2yog"
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
