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
    "3DsgDhYVJCttDL59TYw8Pw5TYTBZSgzDFisyAqyS3K7uh5Qm3gtyLBYZLbMZ3UoXYbzpW2p32s7GiDhNJ66D8Pps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4squZPCp6wzuqr2GXMstukVj7sFVXo2x43Bzp1fvme1EHbngiBtSGnTzLAUThvoGDVYzrUfe4XPWDDwKUKctCuRP",
  "key1": "3jQURSqwdGuiARZ9EnAhTURuh5FDLKfrQuXHxLqYv6WapTrXTsxYp9dxgZ7YuR8hc7rf8BzeMczAnhizeHQAN7us",
  "key2": "2X8snsLLqgEJr6ox32yGjLokchKX7HnZMn9mLKb6GGonKQfPMz4gd3CTVrGqSyT4DXmXSxHSb75euSkugbv3ZjFU",
  "key3": "36o7X5JfXiAAA3eLSeqhipm5zJ8Fowrg6CAg48ZTiANPFyKJTCjxTvX8S6QzpECsgD4dCxv9aQHRyrtUnFGd4bch",
  "key4": "4cW3ct9anJxCkgVnWe4M4d7o61BK6aDz8UA6H5EgL1cbzeRfbdadrbHbssHX6sux4569zJPETBtfLj6wdLVA7BF3",
  "key5": "iVHyvHfFdQvyP7bPdntFXUeFokBakmq421sWQ6an98m8VioFpZwdi3bSm7r2D8RYkNNnN16G2mG4a2rLFrDJBUt",
  "key6": "5JVwNHgZqSpeZ5XEoZPSxCdXhtuc8ixrvK4rLEgF9cMwQgiG8hfWrPmJHvjPwQj8hanC2Dqtu7y24FcUaKRYAe9o",
  "key7": "45BkRX5vy4gDWkmVbZT5voZ9VcjVY5s8W5kpwjDBr6KiYQU1R7GFBBFrVpD7PyUmLBjhhmggNfqPtjq7kDJcB5yB",
  "key8": "3GyTF8a8sMuoGsHG3fJQ12Qmb2e2bct8hdSk52Pq2xL5ek8grXnpt8QMiKKBioXwRwxghqawXNSHQWwPiFinEXDb",
  "key9": "2WbW6nYrDieCen1KL3xtVzJd3dksVLmCZ79MxT2Av5gbmTi5GcNB93Gwwf6WXzta1jtXrK9Dn9zojse4gkAcwSNb",
  "key10": "3rc67tF64iZuMTRVw4wq7aLvF1ZK6Lmn8K2ZHz7mWZsszuhwQVPLDRhEW4uKfC8ietGLixZAj4wqWLt9tNbLekJv",
  "key11": "4kumBYkPgkMg9VuTV5496YhFyYWhnLEAdhF1BHYi8uJAJnMvAi2Rjgy1uZrZGV89utdE7sUeJNAnhiTS5S8KWsDD",
  "key12": "2rPxTGYKSvjcUoTXa6iuDBRUCMrwv7rJAqGpHDbnweNxnQJkMuBtyqFwGYx95kWFkf96NpqVvns84g63yaws9sb5",
  "key13": "3fpPzihqPVN4fpAHC4pf2znKyRnyHynHGTQcA8McfWUk9BUDYWbCbmUf4pifXNkJHCh89Cjesv8B49k7deffxQaQ",
  "key14": "HbgmNi1v2K9fPaC7BEu5TG2NHW2JRa9tC9ru7GTPcVPXf43W1UU8EvHgKnpLmgsAq3JsjYApyvA7YEK3YKs16Cc",
  "key15": "622UXGwHXWHXJBkvJyewgcHSwDNbhXVEhT1HSvFy8CNmjKrCVb1tieak5DiGDoiQCXivNDp73boMQApVCa9Vz2DN",
  "key16": "L6TUFo5FofTWvw2ToKVGEUv8dy36W3FrtS1YaGEz8qRqW6rXs8qtWZM7zf4j41SYYRTr8oCQUn4zsxqih1sv5k1",
  "key17": "42AbgAi5rDo8rFYtbEfHpBTscqGmRp4gz9igEzFCfG8zgNrqtPNqiGcjCPdM4jouJMpEH9ZDze38foFEc5yy4duu",
  "key18": "4F6zYJLu64if87pakzsAtJ1QdUPJpVoECVqL6iDN9Nn8a6T4d2rZm3sNR3qRGVGe3NPw95qm9FPbKnnbdq4WP4Nc",
  "key19": "3AztvUTeL6kJtrVCbReR61HZ5gwRaU36F8BN9aqmDfm2oCPPZwvEG8U1F6xcbkoUW46aeXjRDCauyAhB2kzk9GF8",
  "key20": "WYEMEXhEXJMaNCdejR7Btp9ryZu3oQ9mp8cKNmhhbAP1ceFu4cqzmMXTW7R8NeayDyFnyC1fme49YsGxHbCsV9f",
  "key21": "5vRULvrx8BfWSyAzEwr6gtWz4G9ctWTdHZeRo1LGxVN3g6HXdQjURcwH6QbfUVTJBvdZBPdhs1Z5vF3G6wspXVVT",
  "key22": "5osHd3bvPR6gVBU7wasWJLW1SLbdwYB8zCZmWacNUVv792umBNFoKDZmkAevpWzCEXpoM9BS8wFNFvZT9SFVLu38",
  "key23": "291Q4pnHRNPqAeMYR8fx18oxuDFW9SnqT1yH3L7zZxH7JS9cAY3iRTJhwcBf9eZxFdDeyiWqDS53BK4BT4kW7xUk",
  "key24": "4jHegFFNtBmDuohYgXxywRYteqfzrGbFmwCjgAu1uhzwfGtJSx4e2LBUfu9jS3B8NN1kdNoVgv8aaokBhDMfVmA2",
  "key25": "5x7RLG5ASsDsa74NgysVoqZpkrY3zPYRuxVmDGMSb22vg7WJcK5ew4Zdj4wwCx2qhPezMK1AufEeJ7CVWMnDU2x1",
  "key26": "3LHbP513mrBnZ3oyVnUcZFJRR2DwEcEP5JdwUGzSxzmGrLT2Eo6Dkm6TND91erLMhVJ3j8dsw2yF2ZcW1n842Dfx",
  "key27": "5XBRi9d42zRomSKkwQ5vR9GB5qhBpMrKRnoFkNCxsHZ8DL4uAmqeqTtMXJPHWTWQXWhqhBXTCRKNnsf8CMmqFcbd",
  "key28": "2fwVwssVdWjLqmLmb2ao74qHSgMPTRuWmRUp6WYPFtCqtNvhybHneM9rFKJSAH3Hrb9qr5ho4ccyDxeSMDpCmDzj",
  "key29": "2Dqw3aBtJGQPjJi7H2rsHsHTPXvJMsVpyXnLXMrF9oMSPupSWpMNeNTmfeNGfvyv5TfSdiVJrB2YFsTCH6TMo74n",
  "key30": "25xsBCXJ3iP6itqWnBoEnQHHEtUfwe2rRawXXpNzxrzBP29wTUbAJ4TsgpNi1iEs9gpex6PX8FcBXLCyWvAJ6HiA",
  "key31": "r944LFy9cSNqVS7MKGDniCNWBh6pAQczFop6STZCd5YWKTT9n3ub7TC4iPVXnr8ggaPPstznf4qS6P7HYeFfSkk",
  "key32": "48ogTJ5EJiRZhxq8mNkitCs1mnwib1hvVep1Sjd5pubyaVfWtim3siS4z2c3im3Ch1tqxrEgnYFDD6d4x2L7LGxw",
  "key33": "4aVn9LUW5nnpLrNj8p6M4Qtkwt24yqUXH1NDa4rvNY1Cur9uKxug17ebiSx6qSq2c1hrH88kAmr2vQDHBcEFAzPX",
  "key34": "6RtYW4FCHrzbHqCnyvh2gzkzfox2aJrFqQSqjNN5uoApBcUUW3AvB8KFxRyrUmsAczt2gNo3pEGvPy1uCEodTJh",
  "key35": "Fa7KjMsUKoy95NAMXZ3UANPea4SgqWdhjSyon3BVGnqtwqtduPYPTPMt48Ju1pzoVACqTJo5CXEgCJry557cpe8",
  "key36": "q5QkYGsWhnGbxV7PggK21R4u4HaPb2jwTi1mN6rE7edgdQAGiPwciC4XFFHS2XjoUKMUNdMr9dUquUpcsASPFxK",
  "key37": "2ypcZDZA2jMsv3VdWvY336KU2vhU5nm75RmLLQ2JWJ4fdUo4q9Bv5h9eZTAq89ZvhLiqzpvXa9EjTg8wV2m3SAwK",
  "key38": "3RfqC3EpGVWDCFkQKY3d4v1pCSPVeYtK1wNYsfbePmJ5BePEe7EWFwBDvpo93UnW36LRmeKnNsuTwsiTP5kbPNaX",
  "key39": "3oa7CoGX5pjDBxEAGPjwJnEEXdVyGEMMSRZ72zbvbpvZ2obiCZjN1BqntWMskij9yaqerTmNw44BzZdhQ1QuEHe2",
  "key40": "58xVQfpUbCJwrhZoaB88TJemyAyCWvF7BwE2D7NPFUf3kLPmtmXdXVBReX1i9csUpKJLkqKmRiSHfjckaXMceLCJ",
  "key41": "3xSkje5qRqi2nQfomoLTcJKzqSKmMKkoaEhgXRKafBxVL2dJDm9gYKH6n9nvUrY76zTqox1jSzYGHTLCCKwMFg9Q",
  "key42": "5t9WJjsuuLbQMeqdei8pZpQ1vfJHeVZcfuRjinjNSfkqLDWPRJh5gXTeYUNCwApYf8shvo3HH6wMesV1CzvqoR68",
  "key43": "7SNGPhDK5jjvHMMVB3n6ZzazHhwjL5Wppggp4dgFLqCQzX73Xj721aniTDVojeqgmv32f463jfHyHFyAvrg822m",
  "key44": "5dkMFJwd2sxsdi9YwukHxZz5M7URqst3guCM9keQ84NTSrusdaedcEuLzmjiVcmDEzEGEURxFAjqcSeBSLAon5UN",
  "key45": "4pobMy3qv1LN5ouSyJb961rZHXxJUNsqpDTmUkHaE2r4udCdVSPWqYtgWEHmXonQpB5psG7H8mNCyYgw33UvUHaa",
  "key46": "5sHrUi8F49io7ceLD9113aSyZKTN2yjoKGRRmVdX4ZdRHhbtXnXFQpbTfqQzqaaVhi4wq2hqrnpB911utC8NL9Y5",
  "key47": "2xt4QpRBh5PEzGmCYuWEunR6XtS5BMSQ7m7UUjUdrVY5b1T77tvCPofgUvv6owir2WEdS9Lm1iDCKtogxTPusaSS"
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
