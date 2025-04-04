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
    "2rXU9woVKe1T3BAec6hSQukHVWhVPJvehZqMZTqL3WwABW8h7iguKwqWvWBwXYvFWhsSCm8jR1VEpDSuAVB2Vfkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UfmNcEoypP9KNe2JipU6HPD3AyMoUvtmuuFHAEMY6SR8XiAFLGwUFSudoek1X2HvjDRiKuhiEXRH1gSzzrxaZ1F",
  "key1": "2x3T7idHRadHXsKTxBKLFKMTKvf34npCZrrEyvktEdcCa3e1mBgHXv5Si4b6g4F3ZqF3GwGv2291nVkum5MLYZaQ",
  "key2": "ek3iEfyHSuFkLkfzt1hY2r6DE5xkP4HzV2Qq7SpC5HEWgAV9AxegUqfpvWaERyaHeg7TaXUSxrPumPUmfZuGyXx",
  "key3": "48wVeuLgRJyR37fyoTZnkrgBtWqLtfnAyCckc3eEmbtP4vEmenUJAsgU5kMgQJajSJSfAYG4iJX55EiV8RVUhB2S",
  "key4": "3n4pY2wVuJAud6vujVGLVfjo12CLY4Ng3MW29GxvysHZuPv3JR9zYr6F4jqQxKnaE4hHDoDGWadh41m1SvA1T7qa",
  "key5": "44QxGEgXDMLBSxHCDkJHcRxCgchi2ad39F2qSfFw2CHHMCRxC6bVbA4LdChZxcaAbT2EP1RYuTXvK4VfJxoFsB3X",
  "key6": "4JmafTRULcu2XvUaxJfKLvt2RCHWpWWJhdnKsAqgr5Nrqc53WxymC7YxcuBiswAWG43ptHxwzM6EHWxMmur1mMde",
  "key7": "3prfG1PzuagtXL2NdBrVvPnF1p8MBX9BnW4Kj7Ajaor63HCBBJgMZWDuwaaypjFwogkrih84KhZSqJk37mwr4Rka",
  "key8": "26PKPpp8xPtgLSnyFsBK9cP7SSXx27hNraXgJk9qDekv3psE2VBf4C3P15SSEyyVydPRLeyYwZjA9KbEhxe3gz5f",
  "key9": "5Qzs7YLb8fVezCFF9gcuDK3pJb1QsazAd4SXVuiwQgrK2rEKZ9S93mLqT9HZafaQvGzCmZKRWqfJyaDVoB4VJeUP",
  "key10": "2i4iwz5KdC87ZVZvyZG9vAQJF5L7RcjZ2HJPb42cebm2PZyuawQjz3wKeoVtMvBdPcZ1fKmhPYRyZbbHCtm3JB7F",
  "key11": "4eE3c2DEAQqm3ivQZVSyqCHm3VUXFfLyZqJzeyCkQ9Rjz4npDfPxCG9srktF1GxqJDpPQKWpP8LNud9TwGgfPRU8",
  "key12": "jZSi8wjPnVGUdVjxxF7mQfVxbXufrHPMyZKc3R21N3ZHCzePyt9wHkG2nTRCHewXbeLyxp8fhzk5kAVpwvKMHoR",
  "key13": "dWEpefLMwuGu5ns5jXztTN2ybWgtNvy8m9scgY7ebNW2BWd2HXPWc4FDvcwCe9cANmSvDdceM2YgJKvxBTXW5qE",
  "key14": "2PnTmjCosU3hzLwZCgc6hRovbEaQLzd6ukbKihGg8pRRHimUiVKZiQqjuK26C6g6HeypkMYL7Pu1di6KZAZxvgGj",
  "key15": "2qrgoo7JyKTrGRsYifFaQGFc9Nu55uu97sLYqv7gheZ7TMf7MVFYKqmQPpayNR76K1qPookMDWLhqwnxbmwmWKtD",
  "key16": "52KhYkD9FSqUeA7FYZ5XS6ZBa636wk6oa9u22NnJ7USdzUfK9ztTSFYGcRV15rvubvv5RvSrVgvt2apSfkGeAYpo",
  "key17": "3pErPS82HeRdAsWD7dbFqTEsaGgPuCzFzSwkgzX7UWQnpG4SUGfwq2XaZk96t23z1VNwLM32TFGKkFNZ6FGwjC2A",
  "key18": "3LcfmDw6jbwsdoWsGavSbhTCeQHASF69RnFQ3XhNCAERFvrp5aANw3yQA6thVHnfu4nLZFJ3dfFQvFBdP1dWuZ1x",
  "key19": "5PUZvLH4eXxkfHnkcokguJvgfDUSegcC8AnzpTLUGLkmXEGjjZ5awVBNH7cdq1snXhWDfFSnHvqZ6nFV341jZiVH",
  "key20": "XAggWM45kZT34U6ECZ9oQQ54cfU9grNKNvy5L2QYhSUfYgWVxxuHwDfTS1Aa9nYMVmWwfEQFk8ifVNCzrLibjhp",
  "key21": "2zokWgNcbgNvEEBsrTgZvjnfnCv8pQJjCnDwGSHtpBDzm4hfKRHpNmRyxaU7jr3aNZkpZhzJSb4yxYumPoRYLcsp",
  "key22": "4gUVAw7J1G548SSok4SHo16qkZ6kpmJeyr89rHAzcNjoWNHrR18rGAT4JWLUXr2W5ahXUuN1m4ekGZ3syTH9q1Mv",
  "key23": "4o8uzbciCJz2nmFRS3emWR3fqBW5EHgbaZZz55YuhL9YxXcowYtAFDAgCtiayYifqtdXv4F2Ep8xUQMHFAhahgsw",
  "key24": "5qPo9EWYPbCxSrAixoBZCmJvngs2DGtNAqr9LswaoDDuxTapf4nyLu455fRXCKkkAHVeMoSvRiDTKNrprHHUNwVo",
  "key25": "4NQt7qnyhf7TxMoyz7QUoRTvFsX9cFGp5Dv5C2voK2Uwyg76cN58Y7N9xKDkDmcE3zwkqGdAyEAg3nq5EPgk5P4t",
  "key26": "4N5Cr5eyBt957gHdCLVA6zttaM4hdj4adHMGsah1xT12w8N4ak8fxbkX68uA9DX9kcGjaPYXrgsYuGbiHCCMxkTo",
  "key27": "4iZQtxLTXVgHfxuwgVfsKAwKbyBAdPfv5dLrdukaL1RQK9kCuAnwj5krU3gvg766ophdu95H2eLNcbRdJtnLksFF",
  "key28": "64hQe9x4Xw3zCH4xJqGpLnBju687hVW7BaV9AggjhXucsxvwhUx4yV8rHbkXa71XCZZCA9QSrmoLSJFhsFijhzpM",
  "key29": "CwiG2taXeFzgqgrUcY32139wkE7bmUpi2R7n2MvtB6xFfPVCHzbpUF2S9KXMzdTFFj8KWLAc8srRk8ZXp1VPZQN"
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
