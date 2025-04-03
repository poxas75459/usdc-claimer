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
    "3QQKuDMGeqKxhG14HecX2k2i9fjJgyZisYYFxSjwG5dY9AjnRh43LENZsV92SdF8aiAbbfEzQBJNBT1xAkHcr3ub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MW1UfzQ2XYPHrnEGf1aBcM7wknvMTSunknjyWHFsKPe8nztjTMMvVDFwE2bvgZkALxjnnFsr4WGLs6XFnf3iZgT",
  "key1": "Zvssovd7xijgAG1EPAceXWpZUEsEtXtQgWwsroWUBt8T5MC7LN1V3CkCn14HQifuxikdEQGFkV9XfJPxDHrkKnV",
  "key2": "5bG2x4xCX7EZwyQva9NjZiXsZS4sznR56sGMQJBhD8meekUfECriWz4cAgZoxxraNxXKsskjBBZTJyw63QVWXHe2",
  "key3": "4y2wki3VEVsysR2G5qdgqbVzSjAUafpbu4cdsuGqV4vBBy7C1rqxg34AWJh9ciG1et5gzkb9Heztp8Rw2ddjMSGW",
  "key4": "537oDDdYn9mruNyD8w79Mw3KtB4EmZrh1Vew7U3bM2VwmmVeS3NBXX9oPnHSYJLypy8rQnDhe4GMFiku7wX975G7",
  "key5": "5kfhmShmd2RB1CruVSi6WK2oADWb54dnfcNtB2PEuMrBrBHppJyZvzVozjSU5yDhaiyZWMadZWNrGchNzJbDy5pV",
  "key6": "E3Ft2JnqWEN57cjzVsxurqtHyAbEHYrhcfDMG34DPShDoVPku3pBxLk6zdP3UkEGa9SFKyGxoR8Zs3omHfp53LL",
  "key7": "631oQ6r2RYAut6tDWE35eitnZm5MpbncZ8eU3NawpsiDftNwzobQxpszxrr3YHDapCky8vRrm7SoQyeExoBdbaeX",
  "key8": "661KU34EYn8mB9uYo9nEko25C2AqsNd2UyaFavHDfv49qH3Nw9pn9pqjsixjPS1QmGy3vWrxAtt9ynxhYwmKeDmo",
  "key9": "2rzku3dH3HBup3GYSukDkWvzigwpko5k4nHqe9sSgXEjokxAukz3ZW4cLjGcGg833pftzz3PPN4pLAB9BiaWCrN6",
  "key10": "2Y18hxcutsExyjhHNr6GjFLGCo91T1RZkpN1K7QFURYxMrfRuuqhNkbFRZViRyyt7ZkpNPYWxYG7B4WDMaBba8og",
  "key11": "4KJayj4pXmuXk4C8mvbz5Dax1J4UovqyHfk2CBhNwcbb99nDWhhrD8483rketd96ZCrjG2uya83ew6Nxhws2NU3u",
  "key12": "4RCaA1nzPYwT8SSriGjCP8nBdMSJ9HCq4sL1LxEyC8QZRHPKaqnjnYbhTXPriKZRM57ofefe6raQAfLfx8YFDRP5",
  "key13": "3pDTCF5oLdb6CzDBnzut2fwkQ9E7aiwaB2jmrPPeap5dyfCegHNhv8X3EXAMFJxtX9v7x2XjMx2jSGQyU4HYBjLa",
  "key14": "2HMw6gksZjc6Y5NTWMaEGthBvyLED4hDGpyGk7XDiCrAehEBnc2HAWhEqurL4iKuD1WDt6grny2BJkRHBc8SM8Ph",
  "key15": "2KB34X3NJP57TSnkHbA5f8VRhSVbFb3V5YPf1w6hrdzQgA69xhTTzLwaVMSndGsJxNPPkCCtf9VpXiG6dC1CrSuX",
  "key16": "52UHqYoeETiY7XPBFWG1QKU2uMjecUYnosgGmDHNHZ5C2uP2ZnyDN1qX1jMUcwXpRFMRYeaWsUPKLBdauTi3UFfx",
  "key17": "4qa7NJ6RhnLEZ8iDyhMWs7Q3YVM3y23hJMQzLHaRh3NEi2i2k4MdXtcsFm7PKHLY95rk87HoAbztDsTVJgpJFA1G",
  "key18": "2cd7p5dd5AuvsMFG51JUxmcg7RQ68qDorxLhJQ8mj8yfWSmGieWZnxmR9rEEeCoYysDdotsTzzAX92u7mqdDvM7P",
  "key19": "5pf2AZLFb12FawmLd3ctiSoVk82T4QaSHuqxQN7mZuZHsRMHBq6CfYUNoFRCo647csnDMtyiJmFXGr8BNXpoxUgd",
  "key20": "2tKpy2EPFhGUzcQkFQYLguGndaWEUY6zonCeAbPQXLL3x8EZyHwEg8QJ8y2aWAnTAgsm3QxubZJHVSsi4Av9KDbB",
  "key21": "5rVTDcdHyT4AzSS7jmnmhbJGjKkNsu7SFSzatXTotq2cjStKPoTUs6meiXVkYmmchYjS1vLbVdyLE8seWratAnDC",
  "key22": "4eC6RtQLqqCruzj51598DdAm9HPzdhkZVJ6nUoSLc2qe2iu6fPcu7pdp1eobhSa589EW19voH5uprKY3LzgcQoEY",
  "key23": "52naUFHM45AKHpzjBUAUZgdLUd5LXgZUnWYcbXhRYhZ5xd1QuWkSfHBJQTiHf1MQL9z1VVFnPzomJudTRkkD4V26",
  "key24": "4z2MjjDxV9N7416bp567kS79H5oV98dST1ZxcnLqbg6PRLyHaNa21QKaMi4C9bAdKWuvk9v6kdUwAiLeiTRbywyh",
  "key25": "3UoHjqKgQX6FKTuG47uNFMVPDmESpVKbYHyrsDCEz9tKboHnPE7tRzHDe4vdwc4VCA4cKuSJTuAfGcn3oA3NoWLH",
  "key26": "4ud5d4AMkUPBqdhMWP2AWuPTyDD9hsVSjBmmkVFBw1LyQ4rZhZCm2AjwAQPdyR6KxkyobBgJZchrsVPQD4j1T8m4",
  "key27": "ePxmKXZgKpjJY1xa95gk4CUogpdJuVirGwXTqQGPNgRBVuMRYj6Boj6AFyehVGYBFt1hjcxRLvSXaLbt9J4UnAy",
  "key28": "3o247TJfBGZzUerpfwKZzu1vRJCsGZJwZrAU3aSvf8qGwF8qkuKuwmZ4M49cUGTLjvY4FoEcbq4agkegXrcQX2Ax",
  "key29": "21Gencq4nbgZ9B1kNzNpHdgKZzcMtXtmW6JA9cbKonCkaEz4RxHkvjPb7hZDrzLSjCtYdrWVHw5ZsH28NYSUUQB3",
  "key30": "51NQ2SkjTY3BQbQaVVzXw92sqaMTEFx7eL4mzEmbWTWacpPALkVcimey8jKMMXzq24N3w5hdib48qHLtpxS8M6nY",
  "key31": "BKzmwBrXg21syba2iZPHrK5x5TfhJChbaqZuxKe2Bnt7eJmmSfUUXDGdfZFpgZn6Bcm8XAcJ41imAUHacDALKXc",
  "key32": "66QBbgNeuueJLo4g3YLW26ySYhgaYS5dRQ2FMpVsmV96MujRUSfT4AFZK5PX7MA5WUWyHyNX7JU2vaG9ZAXU3d29",
  "key33": "2XHiJ1fGVS9vNofQ6BcvB77qve5dgfDW6CjwJUVxHkwPZwmfKSe2ZxDSDBCT3ssJpQ1ikhxNvDbVXBkhEpKNaPKX"
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
