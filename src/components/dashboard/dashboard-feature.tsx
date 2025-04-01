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
    "yTdsuHrrJt6k7eLVbLSHkHDs16L1gju9yoaSJ1cUpphwyJP8uxTz4dvhEcHzR6h7DpQhiZYBygKF3dTNGTuAeG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PBGJwwJk6LKnK7WiBqT1wk6fH8uWM7s2j3E1b3giEN8PYMqLj4mteHe6ZdZcgp7sXqqLXo8HeJac9cmz9TsqXM3",
  "key1": "554emBfwyJkGE14831jnooPLYbVt3oSA7D1f4YH2iibYRSh9x3Z62eGc95umudLbgcPCUzcVaC1mCJaWogfPAdej",
  "key2": "VAaxVDpBxW8P32HP4TWsCgG9MteAVnkyZpPYekLZnvLSn8SSBrjRhoRmhNU48tHqQq1ENWzbczRSqxJoEDxWrjY",
  "key3": "3nTkSW2xRQM4tE6GWzb2WGD7NuYrXp8McrWiLBQ2KyCEzgK3r1HwzpvygqmQyJW7gbBuDwNufrXRXhARftvTLm8g",
  "key4": "5nQgkuQV63ZLoE6M4psWgdY6sXo7S7YkDrRyL72qt1oJ2zyjnwevg1JjbmueTcexRQAKGhCk1keTRBEfvpLBybA2",
  "key5": "34SG9CWN5K6Ng4TE9FkushALpVkXAtNWUJmnFHkCHF7JxFmGjgrX6Ua15kSgbqYHABjCicF2NLyxRQnK9TDEfZab",
  "key6": "yJHFUNbiSCZ126YoYXSeCbThsy3VENni4bvHmVCypcjcgd4qPEzSUXARQ2YENHTjizRYu9q4a8joJ4n9q7j6d4Z",
  "key7": "2EMsmnxuytCBmoVVYBnADjaUH8cATgNBHrYd6WAX1jT86bSg1stkCwekXWK6LKcApcmTnAouqRKtougAhyFcJbUB",
  "key8": "pHehzMXGZi7n2CrGoQdhk44WdJL8V2YziYyFinEKhYobPaqDATKPFjXMzbBsko7ThtrkrdLQMDLzbgEW6bi8AkR",
  "key9": "5GY9o2rrNtAu59amoCHebWujmPtW2yX1naQbwscPioEwePr2WEShFesc1qSFcV9NUYQ7EQaWNd15PZL2pa7LG34p",
  "key10": "3hgkBreov7igHKxQhcx6xsKZ8sJdp5yTe3xm2P4PCqdtsKSGuUA2qDVB9MPAwCaoAG3q4dKyx5t5XyzgAecGU6ee",
  "key11": "4dZrJ3ubFrfJCK6de1sbTBvjzAwMRThuxmov2QXb5jNdp1fme9RDGr3qghEF5mcWKL4mn1YpeXi9UW6PgaCrmCQS",
  "key12": "3YnswyjuS9hxosKfpwZ4DSKYbbuagNp3d7CpqnJJHc23x91JU3eRcgChE9fgYGSkLSSEvfRQpU1kSVgHa3qYKbhm",
  "key13": "494RmJZEKyuWDjM6FUQzqk42heR7QYof9RzPCwQVdU5ad8RobPSfpL8HCEBs2qRWCAsAXa87oZ2ZsYjt8wJs3aLr",
  "key14": "2xPeHDkEkigKSVpdu6QEJ2xnkjFddRdehvDccoGMUsCWTetq72RSs1eu2MNduqFrndS6NTHK7t6tzs748XFri1RS",
  "key15": "4Z3ZE9tiXmAMrJ2Cc4AWMVLLc3d9YqCoYByPAxrUc77xP6ZihTz9PLF4pbv5nd25GqibbU3fbYv3HzqFQG3uH4gT",
  "key16": "4nbru3hGpx52TNtcDgaSHeSvHbK3sWjWdnQg3aD3viiP7ks7DausTXuKRcF4ZWCvuWF65WJXpbERRErD7aQWmbWp",
  "key17": "61m3hfXGy1ajLjd1p97wNW7iJ9Yw96zo3zV7KBctEFGx9fbX5oqcdff4YswNh7Jxbcur9nvoM1dcWvmgrUtrHXTH",
  "key18": "21pWepJ8TPxovC4zvkgKyPxvoMFzVFgHUuprBV4YuN8tAxQXyQWzWkQYtKsTduHX4L2vkZX7w8AnQRAkKUNqf6Zy",
  "key19": "rE6yhheA4B8SdBaSM25ApoNHWr3jDkkThuU5yMWFDkj4rNWmnEzaUsinUPpryE76yF1o8EfC7hNQ9hTqH7TFdU5",
  "key20": "3AaGvoYfN8iqtLGxe5TFA7esZxxLDPNxgZgHqecWr2ZwG3ounLyCDBPudc5aFw2hUyASfZvd56TAeWEdB3GDe3fh",
  "key21": "3fQRFhVZPdsC2T2qmog6AhAnUSUfqAexCaCKTdcWzumzHyhG6tBGCVy18FopGTKpFBuRL3csSMveK2cYynVi9RVf",
  "key22": "5ukeeACHgfhnSRZ35voKsW9MJaRRfTRf38mqtpb8EkKCUPHhdzQ7eNDTajjXXZt2u9y7cBEKFFbreahzAFgdzSHm",
  "key23": "gs414rKESbM1nSoaMuBSYB73FaTtF9mJsbko892FzGVxmf1EPScZKK375ko12TQhXMXzESboBAXK4aZrH82BEwD",
  "key24": "rSh6gh4gaF8rgH6pFcVs9n5kj6oDuVsHgqgobdKz1BX75R3FN1dN5UWR5JpnrE86eXWb7mCHQ5RUKijPepx1kfd",
  "key25": "5u8yBoGhFKe97E8sDnuzNDqEeo38UkaAda3aY7KjWV3T3f2xyGBVWwMsaeQEVi1KRa4DUSLFVje6HqZwQhk1PnWG",
  "key26": "5e8tVwf7PFEzb1vktm7FAbJaq3bwKLWA2L6YkPpdvV55YssZCiLw29WhDkgt9CKoxEM4eKQy7nfTRs1YE1o9SW2U",
  "key27": "3N1uMWBKVfq8xvCa7XhPCSCMfaUPZxaKb1JtSw8u1R1KN91AZCG2GbhodprykrBUzbyfQeCKeNpt8J4J9WCYrE5E",
  "key28": "4YEFQDiK1x3xFgKDGSB9wYsKguZL92PaANooEgEnX6WtVNMZDpx7NYpJjjCJGLRgdgewFdWr5KEvPuHB8GXtX5JF",
  "key29": "51d2bar4HUdU43Pprn1BwfapkATxGeVSthQt5aHzX8nTTkjpnEmsreEPJKQipEj2XCPPA6ZHdgppAHXJsrdaoW6X",
  "key30": "j2ajEXCFby2NL5daomTm27DQP9N5yawnaiT3Tu9qEr4WYGRh7V4Vo5NDfKcSU5T4dtZhLSGLkRwCYALpbo9r8a8",
  "key31": "5GGfrqNEhYwWP79Ate6HNaw5PLhFqDtrnSbgxn2pU7pH9L4ZsWKsmbsfCFgC82yiJyaJGfA39ou6omUbev7LgB7T"
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
