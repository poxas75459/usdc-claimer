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
    "3UNf1h9YPi87781MXZqoqhviGWne5UYTRDBndsB2K3uiUdSsWknejN1DeCnAZMK4E5gMkXo2QTJfTYVSNRMZmPXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mqqckqciq68SwGXCZUPCmq9hdu4xB1DbydV3ZGzAPRc1fCFPkx5ZeknckZRAgH9ZPSbuP81Cx5fCrWVQYZUod6C",
  "key1": "NeGMZ7w9N5og2puGGmy7u9PtRj1BQ6yreoS6bJMZuzSudBCbhBz7Gkk3CsKH4kE6wRsYiTtA25mZoSEbgnkn1Xd",
  "key2": "2iPXf8eifaCej24UtPrNKxYbqLBhADpocnKpB9tbJaHJWSEhLXwQiGWK9AhcC8Ss1DvkHnFuYriaqUNGyKbHbVvf",
  "key3": "2EKDs2ZFMGkwXNFirmp7LG6g38HRo2RfPGEELJoKUX9g4sm9YFKxsgfFxkUphc3hLLPouVyB6FZERqkECk9CTmFL",
  "key4": "79nUkLZxcJ3msSLtdKwuQr8hV7PcWMBkyHDXEM4zvM9E8mnBixq85XfSXXn9uud96wGCsi7a4CGT7qaGEHheLE2",
  "key5": "2F6x5zdJqUcLsiZQ4ye5fwWSVys3gUJsQBu3wBgU3rE571x6afv69sVxuuHYZaXnqLzkTZytQMmuBb7i7gb7Bmi8",
  "key6": "2c2J9myKmWBPwM9u8Usa8sj6Ayy4NEyKc5Tp77yxnoByjStXfsjVUJch8FzHVFVK9MHqdLYoHkFhfrbfqhgBym9q",
  "key7": "47p1WzPErQhRaQ141YH83RKbFNjN11JWn5S88KqhRcbHgfrxP9VXVju9y7rJ2BhPiRMdWrDEkbLvubwdNPVJMPMA",
  "key8": "5SAYSupjebgGQwpknUazaF5xwmEnHKWiy881QZ5E8jnJMD1Ai79Ncnhxy2Z7wcnRefagWUowxJkUv7b6q1JLhTat",
  "key9": "H2i2L1pCsbZAP46MUB1LCuB7dRx2yHdQfUNAFcnkD99DetBkoJR5uL1yXjfgd3mDUokVHd8MVjqPXWonaJxXJJt",
  "key10": "5qVvo2cn7rTMLuGMSoePri5cGxQXJz3gRwb3PwArpnTGaPvG1ss5MGARFM8QBenyLVTCJTBwBZbKVDsuLWeFaJwS",
  "key11": "3gYzDMr65UWzZs7SNQ5ktyiDWTX1zH5BtZSWM9M4PY7rdnuF2TxDQs1LqypzcZUeM1xEapARKsoN5m6sZBGgmaqD",
  "key12": "2ugH8NW17UHohpKRv5sxR75FKHWWcLfyYcrCR35TxMxy278JZSvhTyt2nc9D5BVsT7gX6B98ZuFb4F746p86rUDH",
  "key13": "4hqw9oCVjQkoEE6sfZw8aoV8QpnR3KpzmVF9Lxbd162vE6YrKhaDW472CRRqVeUEiREY1gy9Vkr4RubAxwKQH44i",
  "key14": "3E1eBTvvC8Pm3BJw7xvVQcyuHdL5sqLdbNWFgQnRTdKnybX9Soee2REmfZwVy85NdakReFozMSyhUYvN9yKgfwwM",
  "key15": "4DDdGJgMK71iFf1uP441ejXe5xeqD5pUYqRRUafkC3gti57dYZapY8UrdijUE3mqdvrWNiZukJFto5rvGbjdF6b5",
  "key16": "5pD2gHEFs6ETQ1gEGjwcqSLD65pyYwwm6gTrA9YGaS2qPUTiEtZXJBWgAZ3SgRs8DM53E77HZ28Amc8UKroS7h4Y",
  "key17": "3WHSuReN98DrebEJZMcnGGxC15rEssQZ7MfTdn8UeeTpU5MogdpkfKJaxCgSipzGAjWfAi4PKQRqyJbMsMTYB3pr",
  "key18": "2vahiYmxydSSUtHHUhyC63ANrgQoaJRKt7zBuysCKQEqabDKXvnxZtNjho7K24wZjtLKeQRSpGAUYzKXgAmtGQZj",
  "key19": "2xAHCqEA44J6tDWLBEYXyoZN1zWYR7yEGRz2g5hGUGHGGXYvgLCohDzPiWHosN55V4Mex35PVbDkYpehomK91KdE",
  "key20": "3zKHeBC41kwJt547XMLnScJckiYpToCzaf8sPEVtJtFk4j3roaQZUxNYmLmvz2T9AjEwXYEdUYDcLqLw97j5ZChy",
  "key21": "4o4TSpZdicnwK7bu3SPV6KvnWvJ9f53GiPC2tyCuUYjU7TMis7W83Bdq9uc2TMrUHTHnPCcFnZcvRfma8TEPqoAs",
  "key22": "2X1dJ8vcpERKPNg8Z1G1i53RxeKBue7UszowddTZULEJUaaJNif9MoyvNQfGYUZxtLYvFYRu4XeJG7NUgfB2UnKi",
  "key23": "4vw9kneWmsttokNfLPc9MMiRDVWFUiZjEBJDSV8ZvgYjRGV5EjxGppnEBpZSyGdXKPKpr9RtXR6EQy65wtCbUcud",
  "key24": "4Rj1UEG4kshX2kfmt7MCsqV94PqemSDHrXsfouzCrWAMvQgoRYZKt5sC8CYspgtrwt2KiMBmy3a6vdZhjFyYETBq",
  "key25": "8f5vz2CgKTesig7UKQs2b14eVnHUisp8D8rcYJXyJNsHByMvMdNnvXhTQXuncYS2LpHVU6KA8ksVaBCEKezBJEw",
  "key26": "67RWZwhMGapZjCsrjuYCtkNpeGAiFeCmMTMKnhJnELQhUFi52E4cK2Rd8ya2jEaC2GxjhbEpHtdGKjX6bJgJhPBt",
  "key27": "2uSyZ5PBN1x5sHvYczrPS2U8stZLpFnLCf2GLhNpLazCs7rEoBH4sq3LfJ3VGcnidQNZE8ZqV35XE2DLvqjB8FAq",
  "key28": "4QBShzS2G2dXU7NS7hDnGycMsaWkYwmi1oHQMr7uj321vt3W1A8DeN7gVEjPG5bbQceFHUmqpJiAfT9KEeQ52cWz",
  "key29": "5CeLGhNJ8M8JuB9qq79awfevAZ9c64yh9FzY1PjbLkYcLv9cRW79GMymuTWqCEGSzs1rwXhUT22FmnpmoDGGgBR4",
  "key30": "5obYp6e1xafoSMCkK9zLCKMrfbkjpMGNv66tT1FkhE6bYFMYfpTrfdPMhSuVxETRRnzAgshFAsxv2zm4QitJhAMB",
  "key31": "46DJpMuWXDmUgvsiiM9ZTq8YpVdgSKGxQFwyQkfKDNdhkFz2gKnyhR8aQos8ZyLR8y4Fn94ipVZ6FkgKJJdyuwBE",
  "key32": "3nubb1qgdi235X9N4SU9v9wFx4dLxZA31P34BvGxp8Qqa86nL24JttM1J5FE7ZjHUY3nda48DQcCvwjpeNSqXht3",
  "key33": "CZmWSn4AJgTareadWL9UoMm6iPHHhdXoBUcVTxyxB2en6TKhSN38MFM4ufbFcwJBF6554simPeWmcVhaANapGf7",
  "key34": "4m7SeJuwfTT1TWJLpJGNYudZqwfFHmrfgXRuS6G92UDYQUG61qqBb9dUz9auGC4HN94i1kxE43U3rBCxxWuRGH6i",
  "key35": "3pFS8ophYKTXCDVr7WhujrfssJYoGRuEmCUJB2yFdiuNX7ERJ9gvrXvucnphytHvmGFYBVJQtpSmA6pHP6BBviZN",
  "key36": "2kEsh1MbWT1sRbEuJRChThvhJJQ466Wqba1B75HVr5AKtjVkrwpe5SaZFkTef3Vhr1tFXaiFUiFyc7gMZ3AWvNQY",
  "key37": "AYDSvmsBY54yoDvCoUXSvx4vGm6Fa5jESKi7KPVmrGShvEezFXt7eVj45qKpbAfEZ9igkqaCDMvrLius98sbnr4",
  "key38": "36G6Nc4gwb5boP4DC2reitB45j4mgizxqBJHmxbVekAKE9C698R6duFjHjHnz8DceQbbRqW23BJ1a72GM7XgkrqW",
  "key39": "fG8M66hkHtFE1PwgwDbmKwFpGZtPCyVhzgG5PSTWtkvuUkmPJA4Ecp3jVb49yEm2c7CMHhg3vhVDgTEm6xwE6ei",
  "key40": "2gbM4ZrDmqk3Ktzhfg6ZpvVc7aiyYXAJUpZrxUDCzTnGp3ZW8zKe32JC3p87Vsj1SjomJ6ze7apKq2NxZsVJUAFf",
  "key41": "5k1Ped3kmPyGmXpDSVT71hDKBz29mrGam6B36Zp5rPxjRDaWJ6qvxV9vofTyZEAeLiwdWPfVodobfitqNfphznmR",
  "key42": "5Lobgiu9y4BpCRdrg7aianR9z5Mt9duVb59tQ4GocTe1mjYgAWsJarcFeU7xgwTbKb4FRtBWh7vsH7ULwWtqEKgf",
  "key43": "5psgnHPymNyMbW57HUu3Sh9HMz8Bj6VcYzsLPxCtmNXqJC65XeD7LBagPmb64wJBo7AihDpA75s7EmAtYuEvy9VD",
  "key44": "4f2avZfBGUA8mvEMYaQye19mYyFBMh5WuaLaSGgnJgLYNx6kuJLks4bCjUSTsQhpjHXN5ASuZ8MQTVtX17ZiP9Ww",
  "key45": "5NH4GCN3MjrdjiEQWG6fvB95G4SxQw5P5JX4GXy5YstJbEBbTAMjFom76Powga7MaEetNBg1xh25aPUJDWtYFe9L",
  "key46": "3QwZYN55xEP96Hi2B55MGDGX3Mfb13QM54u2hhmtKApoyucDPTe3KUvHnwMn8mPgnwE4cXc6bZJD3UjR8KPQ8mwq",
  "key47": "4TdsPU28H2bQU4V2SKyWF1FU5wWD217CRmT7Qfc22VJyzDYunxReUDpJTk5oBQtbuDrA1E3PXbrbxYS3jScCCPX"
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
