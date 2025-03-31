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
    "5Fz5Cyer6H3eFLnxVnKp3gAxcJpui8XeV5gSuyMPbMGJHqGtM3QdtnUrqCf5EdpFbGYm2N3m6nteeYfKNjzeRwgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pGSCSb7GYkQDcsUhvfNvhbB4gX76k5N7GMhPGL72rRGctHD6S75d2D2AYsewH9xWzZ4U1YaD4bo2Tdm8ioKS2YP",
  "key1": "2QwGc5SAdvquD1j8upUkisU16dyqPWBgDYaX6opDFK2q4NMBsXU1tfPTU4utiobjCNFzYwSq3PTBVEvZmRk2XGsZ",
  "key2": "4Ff5GLbkmv1uLeEzQd7HyLMXcFWoqUpu84wGvcowgjy133bGVzvs3xagchKQbsQEnXdwTRtRRnXAy5oe7UxrFSvw",
  "key3": "2H3MW75xpmawa9qAe6WeuS6iyn9BczZ91jbC4HAhR77sKMWSdMagXHN34hMmR1GWQwQenajNCiGU93y6SVX5kB8L",
  "key4": "wiJy9Cw9a197hLgfJwUfAnXf18CWVSVsusSHu9ZB3EDGkPBxCLsU8gbvkjc4WMnB41bwoW1wYEYRuQoxs9G5Na7",
  "key5": "HYnKMgxBskqn5bGErbweqVavUr9tywTjxNTjxigGhiuBegNQeWzYoptHC7bgYFcyfEqomhts3CrQFa1FFdx2sHe",
  "key6": "41SJFxAZN8Ub4m9grjvCmGRAsH9HGbKyh2e936yADnM6HosurKuyfbq2vmBfJ99QZgomGgq9nbpKsPkd7yPTggMc",
  "key7": "57RkGYeSEWUn6WbtrZH4agBStfxF5ZmBcMgA5XTnBnEaH58cnggJAp3SSd3BvJcyK5FoEaT7kBBuDgMEBGBXhiTG",
  "key8": "58bNmn2Yy41JK6FGZhjJKDGEov9Lp35rfn6nReTfjN7YSMPKb6p3AXVxCq9TQLuxFcXhHfBqvJSj8PKw7qeM7cbm",
  "key9": "oRPDaXJsWiGuUQHdQMCs1Cmit4hsNFJ14HCfrdW2tnpWi226oB8yYK1JD1SvUbpAsLVCwyhTDreYhTSPcoFyv8F",
  "key10": "4bsKEmmpidf4PmGBVWh75uM4FvTwBequR97zTUPLCrG1Qmabuo55bcCnehuazJ5ygDQpo8frER543kXk3iHQuwyq",
  "key11": "2NemHqZ6Bn86gTDQG4P6EtcAQptA5SEWSfiyoJppH2iMPq7CxRSaf4RWbDRPn4VWB5piVeeiPBouQw2BkEEeDFo1",
  "key12": "5J7otEmJoc5FRHFyy4wJZWzusxaPfFTMeNvLVXA32DNBq1dLtA95TzhrvswEUynPykZgSDnyHsqJnFyVW5jFd9VB",
  "key13": "4v7q7NBVCGtuEEeZL9VcRFh7wgFePMsiMXwcuKYVsxWvQyJGKaBbYjR6HXjHJweGJ45Pp4dzfpQgxWwDKwKsAShH",
  "key14": "5gwyh5MYwZtxGQUmad47QcKNBhJrbbxaTRFJtJnYDsdyomByeewToFxYdtzAJ11VqGhwPfVjdKQ56xaBpJzBEMNs",
  "key15": "61vWZVNkUqN3kmwUBFtoHsMznbgqyN7JQ4avTfFm2Ffr589xjWYZ23EkwaxHEXATb1ykcSv6Lh5T7Shoapss9Kic",
  "key16": "3RWn8bn7TNtkMCAGwheZVkMeFBwNHyXVJ66Gzwrr1djZjD9bjpu7vBEucGZ7cLSHyQtf73kajs2jGpVFYiEh5nsC",
  "key17": "2a9g4xZpTWQvX68grzMfh4Wn264V4G6cBtBPye14vZFRztMTq2MvC4ExFBogqgZ5m2xDGRgr5nj3h9xfY9wAG1Gw",
  "key18": "5BH9c5j3vkcq2aHVde3mg7DdRLwoyAT1U8KBc75iGdZ1DKXsZ8F6QxKCr8CzjKrCvYnxxp53BzPLFeRiBrDiUr7S",
  "key19": "uEQvu3KPMsR5AwkqwTWC8ofZi6BsEVsz7MMVn4bkMPBJvmjDqK21urnKfPe1HRvqK6WgCtiB1xZazoFp5pqqv6p",
  "key20": "2bYbSkSUzMaJAwr4ZS3HXgVhfrrJ6QEMsjGZjU9vcv3YH58puwTwPtMwa3BuWYU79vQxfkzNcV92bdx4guwQc2dc",
  "key21": "4QqV5shwqx4oKG8McXfVKZG5oFM8Ckw4Jt7wMreQhjhdTtAQUUzYpCW3ed4SkcfPEWgMBfTv1qZvZHVMiddbzKzr",
  "key22": "ED8HJuovh7M5KKyMgMt9ZgGJAC8ZuE7yM66TMYnQND4jExQXxc4xDav7aeiRuwty1sHxgJdus4tnjmsv9AKvsSS",
  "key23": "52ciAF2Jvcj4QKYJb8E2rco4sVkfRUaHZHYGvAGX5pR1gznDnWV1Gt2RZxHyLnhi5sQBu4nevsvU75trGVAZzPAw",
  "key24": "4fJTWnbBhzfvKVZ318ovMru8i7FTUDw9Gg6Md8yei9LYgasBn3s23Uiie4VDEKVSzKMZ5zXEQCXZLp5ayoKSE2q1",
  "key25": "tGA7bEfujKTD4nJZDBASuDNbcbhXpAFcCbWXGifgHmbC9EZoPRKXStghU2iB18j1vDjK24jnCyr4PvyP4Shfzxa"
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
