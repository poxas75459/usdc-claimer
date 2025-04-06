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
    "5hmbbiVhgrz4JAJpMTPyZBhz2P9Gz3BK51hfdT9k7i296efvAUL5XrKifciX4mZZ1Cfs7bZHHE7vN1hfYG9BooSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aBpHwunYLtqVbFE6SaoVd2s24EiMsBbGHt16JC1LuKXVPCZjFFSSALKhpHsEjBpgCv56csb8nY79Y2VkbBjT1HW",
  "key1": "5Li6qkTrFq9nDBqXojShr3Nb2xW6UnAoVeV7RtsRTCv3Cppyk4DCLC9v9sqiekVR2sXNW4xoTjZnc432JL4VdpxA",
  "key2": "2vdTXpgrFy7Zsko5psny5JnYwx7jiNWjpmRyzW9jzHEpZQ8YuiC3hNUuhcnNJWMHubDc3dYKWaYfgcAnBbRvetuT",
  "key3": "2LsJcM9JiH2EWCLdXAwEB3D2wgyZgpkquyM5jDFD6Dqc5a3hq7z2a9sygZ5kdVci3vXBJxLFdtaeMPTNh3ze3hb1",
  "key4": "xDjBivX3ej7pmAjxmx599NKz8aN2kaFjLKXw6pNxQJ3hKcoHjuQ9cRZp2PUyurCqxk8nET7ZgHg62FGcVubuTR6",
  "key5": "4mk6mT1nTEYH5N3syksNUoFQH3rjXUGvm26azecSKty54DkXav1zgd5tNtaqoeS2dHd3gfkFLNxySWw4skB7cHTQ",
  "key6": "C43a5vZ7teiCVUnogMejUp3QzwuuZs5Hk8p6jWbsB7oAtrU2bW7DMYC3pq1xrp6Pnw1iGKdp22Rp4yhZWxurRah",
  "key7": "2jrz8MQAib1Gb6mnC5XwXGdDJ2Twe13dSR7TBCTNxRdGgKbeferPY9ed2mF3e5AKoLyu4ziwAqe5eAnjfwsiqc4h",
  "key8": "nvjbVs1U5P5tC3prvZy4mqa6neGf3LCgcBjoj6BUL1Am82VdTmwU4yTjTYyLopDZeVLd7sTVLfHzAWzM35qf8Tu",
  "key9": "4181Hp4yzYeu4jxobJNGwzEkvzUDEPfirk6PR2zsUHkQ8LNzyh6YbqMdEmfujGBPoK5N5CdjEwf1QKiR2Yjh6Cf2",
  "key10": "26EDbhpq8xNLG4Np1P5NNy8H7KCKDQtDoYUNk1bqjsJmJK6jouPGCiPKyw8RbAHW9ibXADhFy81ZwjG9n1EnwQzz",
  "key11": "3S2jDzM1FfF1WDZ8xiaGbzhfWxbt3zAaamoUKsVauQckWm8auEw34nk7jZiJ28k1kPNv595VdPaSWoZ8weJGLQuM",
  "key12": "4v4J3fuxw9ZkeKSYs2tijTNexwwmx9LUHKr74VCeLTcXouFat2tjL7B2aghYCLKobuPvFTsUPzN6dyfjTXrsY8GN",
  "key13": "5Jkjdf6RtC6kiik5CpAMR94zsHGh8A3GiKMqb7pAkgR4CfYmsEyuARGZZVd57cGjUXf7kZkC4Fv1AptiEqDreitp",
  "key14": "2UNkCni3GFZupqsp6QWnbQivX397kd4QZ3FHbw6KqQ8DRw2w1JrzmDK957WUfgEeg2ARRP6LEk5nCxrf25nmkTfW",
  "key15": "5PuuW1TrKTgApPxoTwFk6Brxgurw6y7uP37rLskFVe5B792ntentRjiGGt2f2moe4ohyd2XeXmTzNg8aDBqL9ke3",
  "key16": "2r9djQsJmHt9xALteygoYnGgWz5EH5ZdCLFXmrGhJ89sF8rzGkGqJmM58Uk2WE5jM2mvb74ivXMfrXn1qTjK2bQY",
  "key17": "4uhFytyMMfNy6kCzdD3pU5rJY1mx6w7FzM74WoJENeSYBke6Ez6XtYsEVhqSZmtvszDEtBijzeWJxi9uVyJFmhJw",
  "key18": "DMoZTKxVY1Hvi6W4X57eCTKKmsfmwn2FunFy4bZqt57Z5RN6a9adRmtgmjsFSdKa3ZWWubfB7tuJky5iSfN3Y7h",
  "key19": "5KTHrmiYb42Vhteij1aVGeoPys4mtzdFVUfSvxc2nsrubMF7a96mS5ZsRqmTzTz9Rw7SJQoz2zvaojRV25reVE3W",
  "key20": "Q9NPsQzkkT9wDcVgVGJD1LT6Zt8ZkZLDf3mvqHkVwTfHVA11YAgij8jYRg9pPGeVfx9x6wP71BCDhmHAfUwQgrZ",
  "key21": "3RtCr8DwY3NwRA5Z7vXfECTdksQfJ35zWex1yKDWVmCZBawrm1m12PMFGvTuyLsnKcoYHv89KoUZYx9GJuVypZpg",
  "key22": "3fKKxhHQrtfxha6EFjS3oKxsWJwXPXZ3jicXazryWyZfDQh17GW8L2iGX3qGKUnka5vWRsWd4R8iwjj838dz4kjg",
  "key23": "2KGhbvtagVU8ZCNe1kZRVzkDHCjarLfzSXUSdxZQ9JBSJroVu9faUVEPfytA1CU6PohytFu2Ho64cyxMhquQ8E6t",
  "key24": "4neKrzSnM36kpcBmEg6Letx9Cw6QMoRkK2JAFRcKRtFCDuVQjJrpvYZph5e4apg4epcVyRQGoxecpDY3QBNJQDS1",
  "key25": "3wdEMnhKByoNjgBPu7VjRctgxZWedK58X9ajEniHLLK77MdWEjHoFMk7Y7Ac3FVmZC2xZYwnvRWmMDnLynbiKou6",
  "key26": "3H6d3Rw7nmbQmMZKi6s5XsBJ2E388wqCdzFoWcAQ81BBbLtQSho8vs4K3L4iXXSiU7Hv7pDWgNqssdVPCpzeQ5XX",
  "key27": "5EgQukL3f1rCi77Dn58hrg5FqU68L52aLjUEMZVRWpC18dS28V4ahdvRRk49PCXn44oPPfvys78YKqUeTCWCy48v",
  "key28": "3xqJNLybHt4Hosr2VZKQEjndZYmFce8yuN2618EA2e1TtBD5ymkxr7pTzGryw8CmfVZSFrKpzA4LGGf4AYNtnFKK",
  "key29": "yB77fR2TEDvmxzcCbPm7nZsKWGVpf8yoyDGchSyUWR4MZaBBJvzapew6HeUYf1NDbi2t2JyC3kJYuf9tWHfJePg",
  "key30": "1SzkUDapJHj37F7J8qKCmkxxSSYioRMR3eE5GZzMnueb4NmQzsgarJZJU5gK2jMWiqrvCY6fYr99bkmbUbDQNud",
  "key31": "3aXehKKfifFm1nytDw3KwM6W56rHxQZMVTXcG89xxwRPZTL2pqYrzgkJV4VHYuZ9gibdhVaKRh3SSEJjGaYnzk6K",
  "key32": "3sStso3SvzVZVHm7t1mRozVNf728gsURwZEsKFb4Pf5VrUDWEyLyvQqtNbHtNYNJFxnLtcCr6FgtRYFyc2e2qjjg"
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
