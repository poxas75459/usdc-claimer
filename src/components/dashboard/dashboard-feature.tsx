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
    "5kb2Shm5jQsUSLYtAN4PwaDbKGkNHFEqXc7y6omsh8UZT1EVBUhZBZYaCkX6qNQ9h28GFgacJoGXTBnmFpSL6x7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vonUaSEtEgeMDxL7HE5TT5emRzaTJn6xfAKGPJSJKT2xjqBCv6ANVCS4Fcddo13zTRT5aaDvLZ6x3PwuFJWSj5T",
  "key1": "2MVZxtfowhEs8agpEcctynizBse2dKUhgAye9a1K2giZiePhraEMHagQY9pandtPzsh4YVop4GXJ7TfdZk5AaEDv",
  "key2": "4YmAurLGDVmRfpqbu38rq1STydt82aHASuUVTzrcv9A9xMFjQg62JfWdK7FHVALrijAKre5MZLtGYGW4UhiMxRuR",
  "key3": "59HpXhzoSiVjrY76x5DyNEiKDKD6PZ5CNadwJR4E31DqrtDZKXqgQFmnrhb9hVchkBT3kzTjKtgmAjtzHBGGTmJb",
  "key4": "UXYwaNvhekKQ1yQATtpPkVrVgN5DideCsJzKXTD9DfHz9bGndtF4kBpHek7wK4dzuRyoHhMtc5taV5mMAnh5bXD",
  "key5": "3W6XoeGKsh1dR8pVgyyQF5KvCCvrKFhxLEUQr7uQMS3wWbThLrxHjFyS2mQEmnB6K5C4YXgXkFy5qBtqRDmRieJR",
  "key6": "t4ZMoEDeBDRkipFPDMDjL7ztFUSpWuWPLt5wx5STb8n4zKTYMXMLRsr74vKwLXc2ke1n6bTnvpYrZcoRKqWXbgs",
  "key7": "p3LcVnZtTLrpHiF6988PgoTUw9rZAS7UAZjYteySoekY2b4MmwV7ckaKBJQyCBpPz6ign2xXzLMK5q2EN18AdMm",
  "key8": "6oLUHsjAUj8KXVQW8buws15B9UMLKah8qcmJyg2wqQe2GW9PdpbmCQsJUGSo2zMKxWPHMdnoA4JqSDYrHNknyXT",
  "key9": "5MEvpbNVnHM4XoaX4n1Gt3v6LGrojf86CA8g4jGaBxg6bkMgPdXTmgtYyTFyDQ9gdX2mnxTTjngs1ghaYe8hPAv9",
  "key10": "mipPaBPX8RzTWm2K6yJJbtbq26FhasULU5GhsvbkUY8LZvLKFUeKEFuosZMyPoTUijVXgApEUt87E2TEd1tExrX",
  "key11": "4Yv28wSbqcJ1mEeTsjMQgXPpyu8G7mUhyBPCU6AkRJ4k2cvxSExs5GsNhbJ5F4DL1LKAWdHXqct8LwP8uWL4Yaup",
  "key12": "38p5ufRFn8W5z9RgmHQZ162zVrg41B5CutELZK1zRgWJG78MkkuNJhFjousysQfuhvzAXJatfexq6y5L6YxkC8nj",
  "key13": "3fvNAAhi1RaxS27C6Je8pkgeRfoChuyLjAJizeJbs51KzwBqkrED8MEsGKjdmAUbTdTSCRzp5hKgFMRLozMBb4Zq",
  "key14": "5ykQxnkJjW4ubVVVSAdTGXWVoEMLencjzeLwKsFDm6DcRDHYwJRriYXD5ZxemJjBz75Bm7NcB1bqCtZsmTj7bgMc",
  "key15": "KhLEMZP9eKSEFWFzQ5G6kE9RRLVi9goRXiHwd9nYy2vFS6Q1X5UDFSAgsDdnPpcYF1kisMYKBeDQT6goy17fyvY",
  "key16": "5TU34ukRYEdBNwQjkeaeq1GwYbLDd8wHRSCAusSMC2oprwsC9S9uihm4EymFSTdRF3RQprFBHzW1cM71A7Z64qvB",
  "key17": "4tirnWE97Auz48Bs1TquzrhuhNAe3i8XzDRR3wgBkAiyLxoF7RQkzt246SgtUMHv7jonW2Yaq3cjJn1imHtawamR",
  "key18": "4XJQ46amQorpAsEcr45DGnFuP2ttrzYyJCRrCgWh5MyrDsX3JXaPx9JPrhrzP85jXAGwCQZcaGiriZ2VMmhsGPNm",
  "key19": "2ktrznafkyRjwhRrAUhDRNim6jk7M5a5K2b2o6GaGgZiZfyRxEQueq3QSqFJ728fkMPu9eBh6Y9yS41uwQ24FH99",
  "key20": "cYC9P8YzgRTe5voMSoUHrP6qMvbugoyUZH9fzVHBVmTQkiyC1q7sLw9TDum9XnWcbGdSBb6yxVxKca8ZeHWYukG",
  "key21": "5frTHpd9H2PdLhFobYxzKLSEXsgWh4ZU7DcRL49rhhyizXRMVnwXvcZF5HDGGiAZKALijU3CroWfiCrxvx5BwiyY",
  "key22": "5W6DK6WkrL2WAq3Urx3WgCBGpnPR4CHGF7Lk4DBxbGAFK5hA26qWV46kEAdk6THn3Mzk2NPXqz7wa54jNqbWrYqG",
  "key23": "4yC3WbW26xbu1QdP5qNnjB3UeFYYEwrZHYTdqBF7WywCLgE4BRidHxTGJdfiarA3CYm46z6c6TcWfRYyRqYBA9vC",
  "key24": "5EgxG29rifCsmVCb3njKJadRCkicudPRwAYYHDY8Y6Fu7Gc4af7n2Bf4ro9WJDSqSnbWMpD3KwFHH6KeAkkvaF2w",
  "key25": "4K7PtEH8oz1Qx2Qv5ja9YSHH45mdyHn2eqyEsw4MJANbAtH1mgeahExgwYqeuq8DgtVfTyyPZaL8pmfuBT2LU5DD",
  "key26": "4Z92nTgJ6Y74FB3r1ziuosWX4CbrGf8vw4NCm6whFEDkzQcVv3CY55eshUNaqXN9eLCL3LGoNvzkMrQyVzjsjNhn",
  "key27": "ZPuXDrHmXJMFS9gYTSUQ5pvdkyrB3jeS7RqSr5t4pthQwx16Rb3aqzQHhWkPixMQsfWgPdS4xB3pJEEafPgLcZp",
  "key28": "4inDK1t329YUrNcGNrY5Ns5uR3yEiFaRZFUGzoDEfgGS7Qw97AhWUaHFzeb2AbgKYkGqv5FvanazNNHRkSqNuMsQ",
  "key29": "GkurGEFKc9HRJ7dEUmAAxvLFYvubzCrB5vKRKTTr65Jo1u5sSRZscjJmhWQ1wJJ6w3gQoxywT1e6Qqf7AJjwyK9",
  "key30": "3bba2MkjY7y63mgDYLBN1UyxhjRyEY6noAjNBhem3LUur1hgzadNLyqiP197SEgf2vVKz67zd8f7D7fSM1srZ3Ra",
  "key31": "3EP4VdusEH4sAmV1WzdoNnqWEBmfKBCnxPdQkHhJb4Y7jbWKKegpv5sAkg2bfwNUHojP98mzeAUxoY8cb9SdvbH6",
  "key32": "2pVKFQMq4sSQF927ib1oSeLHAAuG6qhSRgt6woiGvy7EaY2m4zABi8tP8jask2dmPTrMLQEyriVeDKRAU3E7cJY4",
  "key33": "2hJY8CrfmLQSNNz5DGPAzh9GXefeFjvVHNzzTMBCCRY4FVEdaZ4EVcuf4jbddaoErnf2Kc8LVREpV5Zb83P5Yc2e",
  "key34": "C7hjerifm5G8X3WDq5y5RDmvGrHw8SmEmAKjdTFtpyB2ZaLLiRCJQNkWeGXtCszEFjAfccuGki5b254u4uYER3z",
  "key35": "4m3pN4bwTvteP1BsRtHLEiATnYtJfAurvJ4EqgMNWs8FjMwiiaT7L8K6HAFzrV8vYs2kq8ULFyRLzFuRA7ho4NKv",
  "key36": "2oaYGkCgER3KUvbEXeG7RvaoqffWmTQL3yU2FTwsVwNffZ6jS1EUopoTCJcu15MUhYJqKN4uFwxM8hjePMyroXKz",
  "key37": "4dj1TV86oKKNVyWS6K5KwVmztjN9cDaPadGtd9Mmn7t7vbRUr4nT7LSbHjMcdJsvPxghTep5j12rLFTww6Fd8Rsv",
  "key38": "21G2A3oNMnUS9rRpbCa3tm2CD65jxwFnLinVyrCUMH4vde3K3wuGqFUCFM1HRZWTP8uK6xJZLYBHTp7qXv9vpzuh",
  "key39": "3W6k31TkJQPoC2HT7cesASkBxZN2bm3EaxnsGdGLtKj99RXNP7toXNux14uSb5Sc1it4YzMZvaWWKeEtf5ZC8dn",
  "key40": "5DgLUMLZMxx9KY3dY6GoV79k2s1LuwBAWJrvt1G6b2ftTxCtwyg6ykgpAQU1Z4GNgPVXXNpJPKDQDkzBjue19zmt",
  "key41": "2A4UuVnuaEUUoSwJkfRxJ9KXNzMz6nqChRSD5j7hQYdEfeswARy2xdD3iHmsXDQikpd876wFwBj3zTMdq7rttjCc",
  "key42": "T34LdN1gMTTmkV9xResNk4HyLm1EkfLcXXPPqsoypdY8QmsQj7itPRSkd4sxqBrxiY2R84CVYhxATmvTHjPMP9x"
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
