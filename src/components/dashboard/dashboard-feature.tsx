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
    "xTiojM8CjRckwx7uXMoad7jkB8SGeLNoZD6H2KSSZvcHedTBRX3mo1npecBidxBrPc1cDzJV3T1c6qnzTFwTfeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r6gJyRVKVhkbP3qntkrNwCv6yV961L5iCy4HjcRCKu8vGxsNVaK5kH4HCmWUbAUT9KSJcdToRBbpGcobNNWGYjY",
  "key1": "42rHDtPQv7UZYYN5fbJ1EyYz5rSBUnrswTSXHq4HYatxLSQCFUS5ZTZtEQSFuszy9WSaTgDA9YPKpb3r4bzYPGuf",
  "key2": "5X3EFe9Pv1dEYmYUjBhJVan9F83UqRS8t72pXtfrZZx7QZabQ8AyCHW4h59dabZk5nz9jan43h7bXNcW3mKCSach",
  "key3": "VzoUueRjfWcNL55UNZPGveagF98CqyHCY3KCWExFmEiMgMVoajH5bEgwZFH7Q3sZmdreWHhVcxC4Zza4rY5WYyB",
  "key4": "42thFmddnjkUz65r69RVRXk7o7WfuXw2ix56myT66MhGbMCRH7HECGrNr1pbcPCHWXK8KWwH8joqbx7uvfWw1gFz",
  "key5": "PALXQoBokZFF3AbRnzwjDsZb9j99kRLvfif8zD1XnSj8CWsBrtUnDL2mdXjez6J4EDNvSmqER79NQjuLsJ565up",
  "key6": "4J6oechrTu6H76nLUPDNh9zDKoB395Eab8f1xEEEmLsWq337qkPwtLHt2iyXUqwMChLN1SgDj7kp82uyoUHmT964",
  "key7": "44Pq8hspmg3fkrC49jydXQbjBKHNBe8nG9hGrYFaXR4DUsGCJUspeD55WgvVMuPQLzjwwwb2FipKCashahCAxJQk",
  "key8": "6QDYgdcxBRv6PxTerQouapdijpxqysnZBNreLFFkMGThpv9pwTi5cc7EYhLYWe2iu4Lmje3bgTwXuHdmsnzkYqh",
  "key9": "2xKpWoP4eiC5N7Wd3StWrX5rrBGAoHsbU4tWNAN9z323J8UCHmZELeThZccGPwH95kqswVGUrKbpDvKz4QWgkkyG",
  "key10": "1HSZameVw172CCgpbQCAdxsuJeBT622wMSeae1GoGxR3pKSsLj88uSHnA6YSmHFU2Pe5HyV57GaVVUd6L8oCyxT",
  "key11": "5E95sRwvL13ATcFwnS9SHbL17hfk49sSgxJMCfxnYP493RWx1Bzmh3WqoL3NM8LxCnZyNuujCvx3ab5KRkrsnc77",
  "key12": "3BNu2tiiVtoqYyDdDyZjfUsJhTBaNqY8fRpEjabcwJWVZDumCmhuWTM95PDD1jQBWdJPLJmW39D6qFLyQH5wHf8X",
  "key13": "4fd4f4s82LXiaAYMJmcCzL8TRLaj7kENDSeynJmLyjRXBdE7NKNAFVVhkjJzgGFxhBFVFc8kpkdMBppJ8z4ApnMj",
  "key14": "5yAGfAFbnqyvQ7ey2ScKnEE4FU6eF9zToNvhLWhVR6fsuZdyKTBA5eA8SmBq99xvh1HibUPHLFKxbYQ2xmPyvFAM",
  "key15": "4kftpdEH9FCvdVtFPSww8Th8RoUXBF4u1eVbvCED8ZJ3AHn58eUxZXQrCE1gBB6D4HCpPZwXs3N7ETrmg6iTNAWD",
  "key16": "4kxcfApbCsXM6R2sLrKiY3FikXrLqxUDRF7gaWGQvUqyJReb1Hjzjb4VTdZTa7vJayhkeV1iHJXknxGwUArZd8LT",
  "key17": "oDowHhCzL1WUGUmekysp7utyGHhf7gprigtvwY9KBcoVqngHkA5RQSjB9Nm1NAQhiJdCw4qagQFfZee95noRpnf",
  "key18": "kmuGg6JALJyBK1LuSiNB5ncUeQpAc8s5KVdcSW9hYyxHqungD8JnmDyJkNTNcznYWSiMZeYpyiVMTMWC2hXfRVk",
  "key19": "xX7X27CiPhmHvpbkPUMV1Yyoe6BbduJB56o9z2CP7HLQuHQdoNduPB2QpcJxfR1Amn5ftVqTJJLJHr3Uvug1Xzn",
  "key20": "3sf3XkhgwdnYaHBeroJkBYCBSvN4uNL8aGSSyHzbtMFsjZC1xjgDLApHwZf6D8XTY46rEss2bxkqe9ZnjSu3rAq7",
  "key21": "iKGG8s2xHMLr1oAo8GuBn6Ro1ZMtpeHENDtLHrrJAqJa6uJ3Gax9FAcfp1b8kaxxMj8jWN2xc2jLztLDVBdFCCd",
  "key22": "56wXvWeRiPBkBeJPxkRTuJMgP7SuT2Bh8rdUAQ4mqWbx9CjjPjymsAXVYCqpAqbVpTV54BLtBiioLPvEUH45ErCs",
  "key23": "4yXCdyf9LPS49P6U61b6q4uufiiNdaDAAcHXMSKG3wNMuhkyv3tFAwrFWwX8twftnkbLXufuc4pwrMscvyjLHmco",
  "key24": "3TpmFz3pkSxT2pBTaDSvADjTpkToBfa1SMmYvMZcc43HQbh7Wzv4z363Sr57ZBe11ydrvvk7eXr7k7zGZzD2eEDA",
  "key25": "4FJkYSAWhmSpjrbAQLiYpxwmXDpzZ6JEgPzct3iwrGdhJHAM3NWigj5NBZi4JRaTcUkcTxNN8DMSwD5PJnmYH9LU",
  "key26": "4XgryowXLuBTM6ecBtLu14ZDZsakUWchVMR5XjPW8jmVBY9v2GA38cCnX7CqcoaZeoeaJ3sskv4Xmv1ETr8mdvQa",
  "key27": "5GYPVFAF8Yd7hoRxYsX7WE7zpHXAbp4p71U28d9KkgvLKz1HK8mXmtC2jkDn3eFY2hJJfcjWGdQSfhPyLbQg3W7a",
  "key28": "5kwKVLLfz4hvkJhvemnomRT1UFmeDBGw2Q6HcEppw9E49hfyHEZd7Ydq2zcYBo8wnjFHV5RLiBEfnEDF37faK22H",
  "key29": "3xbcj7RVRp6xaYpHc4h1qprgiWKuFq1vgFSVLnSd7adCYCuxSfyfyiPH6GW2UTq4Vht9DMPQA1L48uUaFyVoBioa",
  "key30": "4Qcki6nMvxfYaRi1nwtSUPGE5yE58wuSkMmRMG3XpWXd3UoB5Rp36nXNaSsiQSB9ibeZNJeBkzuVdrZFoGVYjeQi",
  "key31": "MZ6w6Tog499aVdMwmSGR8tNLfj8B6LzdbWimtoUo8sppYMN3E2QU2YtX3NLY4t6rpAqMNMyQNTBBhthAvHwC5aH",
  "key32": "3bWHNBdps3Y3fPHhNdpxMmUWHGDhFWXQgEezdN88rNHH793mAMBLyTq4AZBoiqagwY4mV7sA6z6xruaTqanpRDvb",
  "key33": "kVZDiNzuoVCAWkTFzdu7k4jMeCdNZMAAguDR1CVpQtuzZKx2ZPxMgHB1tmta54vH16xoY3B2KdNWLD6e7x7gGBA",
  "key34": "2AmpnJysgDdD77HX3Wuc5WcknCDba4QqiE53hgcjdYHRXksX1WUHsMTaYkRT3m2DMJgcQ2wj4UvBXPdWy1eJYVqj",
  "key35": "4MgcFBagGZKa8GsynLcW4uzwChtQ5M9qtXCa68uiZdhwBbfAvjovUKbmuJAP1cFdkKAi3FxphzRWBD9Q8x51PowC",
  "key36": "4ugZUv6tdJYUCz2s1aBW4drRxu5KrfKrEWezpU3U2W243CWM874h8fkAvSA8qLo9e5N35x64BJhhsgpQg6WxfiQu",
  "key37": "TJn94BeUngKHR6QqXzahhNHyH3AeYi6y1qnF4WsPTh5AJ73XmcP6Y2VwNeYAcdTqjGzfTvkcVXbm3N6Gi1C5xRp",
  "key38": "2pbgHLMXeVKkKrqa4rBBqiBP6hL1DyKrQUDq9uvyDZEpJBbnXmdx9Rt5DgYQXP49ZvSNq8WNQVWQqzjjBUoSYxSb",
  "key39": "1LaFKTZLnH3UtKZhGzfmmn5eNFjpnzQLpAtyFLpytCuivtX7fPtGGt1qx57uPvUtsHrT6FHUJxQfeiwRgM2HH2G"
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
