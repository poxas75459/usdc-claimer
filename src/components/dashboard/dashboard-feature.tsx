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
    "25Wzov9SwqPwu79b7y5vkGwZvzH1NkBS3ptSE71iFmQXQBPMW8MH123LrGsjQ6g7RNkNcgzj5uER1tVk3DKrABuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kvo1Ju344Ldd3pDXA5wrvHL1k4beRXYhf8dssbZr2JTrkxkmSwngHnszKrYKaw31HmsKqET4mArthgM1Eutmnam",
  "key1": "4WU65pn65CzRwCmLHpmA3sf4oj3DrrjGMcQeVkuuTyPXiFY2ajw6P9jjRPwyJPnc9MaPZwc3FwrGgnXyA3Ghh5yZ",
  "key2": "2MYmnM2Vh7LRLNGJdTyyYKkvxd5zEQFMfLDcceTnryfVuc4rtPitmg8zz3R5PCk5ka1hhyfssTzfaiN4RKjiRfRF",
  "key3": "3EKT8YoE8VC6Mh9p2Dof9vu7h94ZewvBaWVMvwhErrcwfqCsWRRMEr4bAvWsXtTJygGxqc4he6XnxSjF4XrrAVW1",
  "key4": "mCHt9vmVFPV5H2SW1JgsA6NxCUpg1atWZcJfUspm6J9878GyCWFMBQR4CtknBT6Hzi1F3sNM2rNp3ontUxeHhvN",
  "key5": "2mZLBXtMRkwA2AthBKDuXq5FTvEhwbosthWVLHWq6SzXz3e4fqjHbsLL2ZsbRzYbwdptCqeV3wmKWBet1ToY3tGv",
  "key6": "4xvQhLJmbJ2p7yDnmADrkfNfwh3zayU4cvWLTcare9qoKbmN2RjNUdiAAWv5SHBN4En9J9Dd9DUNp4f5FqAwGxjc",
  "key7": "5413oJvhw9jn8x7BGL4xbikEYyM5iA8N967xZTPyB5JgcfH1ccsR2FRftBiPfYz9YYb5tAdiMuiuQtMggCo742cv",
  "key8": "pFB9baGNw3YBcK3cQhduW2ZC4HLzPvxSwXA9oc73YJ6vWHdn4cRtowAbKFs4QhcSYvnmZAs8Cf5vpF71gsS5DHx",
  "key9": "3RypXd3EStmfSZt1RqbaDCXApt77AoXmZSBTUCRi41djKcsE65JuCj8XCSZGZEEdn7bBfVDiKu9RSZ9YuZ7RxCUi",
  "key10": "nQEdTSwLPyREJDa4TmkmfEdSxjFw6T4z4ACDtvs2G2jshbSt9QBnWDMmtJJjwAKdP7Ue3KMxZXsTxZVpc9f1QhE",
  "key11": "3N7acyUqPSVSH3NAHbv2ayT3DNGmbvMaypsdx6rNW3C7xfiYsJj6n7DeFDj3kzMMmuCFmDFEVenQdsa6EaJzTzxN",
  "key12": "2b8LnJaPduyy3GDbq1uU6NP7gHmrADTWkMzAdKN3wbQ1R4s4HaVyUSJ8jwu7xLp8VgY8hY6HNQ8k5QhLKePiBnEB",
  "key13": "5Yk5Vr161Gcmzcs4PrYyXAEuVu3U4d4pBdLiQ77YN884N4iygxbu21NzF8J8ZNL1XRFaTZn4pkXdKeyX9fQgM4NX",
  "key14": "4hCjcMtRWsq5AsaGrQ5CqGb87zCy2cQdUcwwmz7rHLgQSJwaUXkJVgS3qsUYw4qANTHTQkvqrr1Q3vYryTH4XFJF",
  "key15": "2ptXrDQfGhUpTbMxuxSDx95cPhg44ALk1fF2echkwwif7CvPBYeKukncukYzH4hVtUiKFQrrJT336Y3J2kLGkhTV",
  "key16": "4jFhCFMb1XmffEuqA17VG27o9WW7RLfTc4xqMDZ7aD7YRMP117pJTn1UctA3gn4H3eZiRG69LEiKGycv4mmVd3RN",
  "key17": "2bq4Hs4bgWpAYoQhrHZ4MRZwqCnYF9exHKktgSiDPaZWySKqMU6zGGNQHfBTRLP9MoFFfAx4u4trUCXTiyrDgd8V",
  "key18": "2j6jad2D1XioadiJ5x6rLPTpmeSeLjDFoAtFRzDwbwgxD8rvQqikZnV2azJpSAQ3FemPRD55zofNLAPwi2FXYEjf",
  "key19": "2Tg2G1V7rana1vVXTkwkS23evAY7SGTnX3r3xEC9tyvZASL2t2721mY2cJW86WufrNsJb43RvGFZTtaa29hWgFFH",
  "key20": "ciN1e4ihdqWNZTNagbiXS34a3EF8ki5jcGqfT9zWTfwJ8r7s8r1HH1QQ6UBasu9DUrBHPa7a4wvwRLcQPR41hCT",
  "key21": "3cdXE11w3hdR6Ked14q8LuxgmREYqxNrE4iXPEtwr63gS7r9jLCdRrm71wcD6mdMcX4gzEo5sWXn5fEZeqLT5mti",
  "key22": "3zq3FpPNgiJWwcQJxWBKG9s6SyHZgwXT5y9pkjARf4KQ31LrBLR1c4c23D72msY7gB6iHxA7RiYF2XQ287kgGVW2",
  "key23": "4V84eDZML6kcwJW29HASD1iqTjieGo8zDv2piRqxeS3MRVerc3xrtHharc4QgS1pKC3LeEnYpMwPzw6TJUT33JKC",
  "key24": "5SMcU6QerfHjEN73sF2rG9ci3CJDWASRXBH7LNRxqEReNfHGoRFox3a1cfiWi2trFs2JhGgdRiLHR4Tf2BJwU7wY",
  "key25": "5fF1Uk3gosXPcs6ZPf8ETikwnFk9MscK19YmpF3CLRRo9AFazw39Tp5tjsvdeL7hyKyMM33L9zE6P3dvSdD9pjob",
  "key26": "5mdLRxX3MmmVCuJhE8NsfbavFoYtRtfj88L3DbFY6WWZhP6yoi7jxgiLqFcRLBjoXG5RpWwEYY9zoBYMEDPSB4yZ",
  "key27": "24YXkRmRuEpQ1cHBRjgy4n5AwAKf5PkGbMdZUNNYBV2mSHTat2ukemQSbXbCyScZN3JkABLuo7bGLn6u9FuZVWJz",
  "key28": "4FXWSpeQbAUgBx9BoK6F3n6ZFMQhn9po1xqiNzG25v2cai1mUVpFEHu24Q7KHhpVzw6X13bWRtGtgiwT5DACiXgi"
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
