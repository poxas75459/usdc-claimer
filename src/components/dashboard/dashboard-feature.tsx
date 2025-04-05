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
    "3p8NB2656pSC1kJVDSbvCNRADCgj7YskMHpgavkpPJdKp3GT4DeHRdx5MfLG4eLyyqy3GuCfijm8Bq7Q9EYmxPVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YjFs4Hwt69tLmB1ZWTSvtFxJZ4nUnineZRnXhn5QjBKfNDVEQDZpZrXZLg7VY3YdgzTJmp37h8VXDpbnVvrD6tk",
  "key1": "2toKsfTDQg3t5djDRzKibE9KCyakkXvNr5SXhqsSPt2CZdynRwpTDjmSzWJmMSTvLMv85EcV6ULKmkydqoanYeCG",
  "key2": "4TDQXRHYe91Cp5f7t5gpKehX66bWX6v6b49UXMSY8Uzkfy87T3Lq3TrQ1GLL1WtXUHyGVYF3miK1enixXGhk7EGj",
  "key3": "getZnHUtwW5SpR6wiMQTjdriaKX9nEc9HGLKgPGnLpJK3r1ZQNpfLxsyFx72ag9gHYoNbhfRhPkfoEhCJFZpkpG",
  "key4": "5Lf3Up6yBFixBRnwopUMnA1EyBYXcorqdzq5canUbdX8xphcidaRqBnV2QnhSCvNUnUjN8D1TpeF1gq3p8d6MV3P",
  "key5": "43ujyx6FqmcXFpw69T6gWxD2jd4CgePVtSUgkkvkxjTLAS7py9D4c13B4VQ6RZjN2qaHJGv6bgbGefcFamfDb9w4",
  "key6": "F6aFvGAA65c8XLD2CQu2ZyyHFoVT1Qjh1oXw7hMKLAdWiESw4UinGhzWYV7nFZpNjwbqXryBRmCjwzQzc4ivy7v",
  "key7": "5Yz8SwZtV8GXCjd6BjopmUwn4JpxQZognD9wUYuoyVDKygmDisJR29ozbVFmetW6qo4Gby3PEMuYiFLUZhJUr5x2",
  "key8": "4SK6LJPshnGRE74jcQNi5T1a67gDsDL62AMKAizWVuKU74jZ44BUeqkPvE4JihokcG6p39wqmaLMcmgD4pN6cr1h",
  "key9": "KHkD9ZSDm9CUWVHT329cRgF3caueYFyBLAcexer3XSVJEWXBtZfcbriX25qR4JknPkx3t5zUzW7mmBBkLGU6Lcv",
  "key10": "4CrqXn52CsByGYgL86kKrsL66bBTtvjQk6czE1NJDWyjvwYxgxhUcYqa5y2BPNeH2upLy36RQTm8QDzPURws5xmV",
  "key11": "h95E7DPVikJVSkEcp1wWxKMbshsyL1YSo4BoqbzbBkDv7SMTm3LLZ7QD4Pi4KFhw6YytoCM65pG5nKrxNYYsTZK",
  "key12": "4ExM69b3pt8xxUtknXQNL2EjzKcAw39FNLCscpQHzS1Zs2S3kjJrJNZ3VoX9m3LchSnyMH568NSNTyh5jrEJTorN",
  "key13": "5KSwhY33q2swMUoQS1zAR4LeGoq4TriUihCaa4ohczwN9X8uXsrPbD5GkVxESY1s3DTH4BsqbUsYNTiFc6JAcman",
  "key14": "4UdvMUt7zJM5nh9miVtoNkGKxzisdGd5DziEoyX6qdRZn8sHhB3vt3nwA3TDCK9rpYWBuBtpAxGTnqaw4t2MnkD3",
  "key15": "4xy5MhjxnTnmSRwYaGFkDyYeP3bC4ZMVoJJtBttkFY7S5UyZQYMeeTZWyST4AP8PvGem994BEmxUjGn8Wm22UKJC",
  "key16": "3ifKQhVRFXRZirSkAHc5VeuFixW8Yi1ZjrVtr7ZQMcxYxiWbwmjBZcCtCjfh6JXtvZu5HfeqCuNrCLtjcyCBC81w",
  "key17": "4X2GEj8E7SH89bfxKV9a7FQrB7asQfHhUUoGChkMb1xDxRjjoQP3MzW9H4zh8TpfHNuZ5fsDH6FWvQxGeskd66KG",
  "key18": "3prFCgmXWq72CPm54hzeE94to6FbihiXbsfszY9ukYuPmfVZaR6sqLdpYY6f4yZ6P9K156BQggsSyGURKDrH7Gwe",
  "key19": "41r6ph63ZTjUjTCSa9RWpjCqTswVMQ5F7M3njQJjJ2372HCZBcCwk9LnceEPaWP4kyzo67mc6RtWYktCvEuztHfG",
  "key20": "4S9gxyVAwLX5JSr7itupU7rTbSok7gTb6EJNor65pt2AM3Fbn3DjUFV4Ys4RVT78RDV7A2eXph4MAJ2Ls2Hopjqm",
  "key21": "2Nv8Lnt2TgeXgybEbVs9paZKMAemGRADuTi8pD1eNTX3AZHAgGcSPoW4t4L6mJUjYNNpacYDmRyhZiGaRebrzRG9",
  "key22": "rvuZcV2KepjMCXpJjvR4mN3yhUUvcLBTdsLmi3nkb3Ma74VEVHCV6PccRRZ31BZhjyFQX3PLh8WZkJHaZ3PwjXN",
  "key23": "53re9j6W6g4EMY3sCKaM9FZaeMSt1bkLkrRrQu42z7BVz4nY7H3j2XcJdMbvgvTvn9FCRxBC9T32TEoLuKAaWqSU",
  "key24": "3yxxB6gG1hgt9R9fymZ6o2Jim7Bv6q7Qnv4wkG3xbGkSFNcPixAUg8tC51X99UHgEtykPuokYH552oV5UYBk5JiX",
  "key25": "3SR4hLUzMXaSvgbBcHSZXUbF9Xeyw6aRdcEQZ5VzxjT6tU4nqWTZnwghary26JriqN9JVh84udix5pjkCmh8aMf",
  "key26": "32BKcZrK7j8vPfo8MtrLVYCndE1yLg6acjcXvQ6o8vEuDzDXR4oowzicSo9BDkyNnaQGVRpcypp7UkPcWjyHx7Lb",
  "key27": "2U7VnWjZnweKXsngPHcsJRz4eiCwNshmkxBDuLzkm1x3hfGkx7sQ6csju43495JFJv6GATzSYFmP6v1fUxmCo5xH",
  "key28": "5NW9kDsiFZw2JjBHprw5BDnharsKejAzhouTY9uCvKfHW5GwQgXLjyn8dYN8eUeBX8dXgFAcboQYaCdp3UR7BxvN"
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
