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
    "49EWuMFX2qkSX487QMyjDNS3f72KyTu6hD8i18ZwyhYAAkHvb4ZCqAFhRcUf5yRenydpXpw3sztNrgNwEsF9sMj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WDMNwnaGKVerZfqMrGkzHTZ2V5VFa6mxfPabJgmuBKseEEeTb4strVuUBKnUoNuSShsjDQHpn5g1ofwqmced1S",
  "key1": "4n1h1g43FMMFjtZFZAG7bLwLBCspiEvmXCNGCo9Q85pasepZQCmam54uebPLUH1YZL3pwmuFjehieFvLM6fx7nLg",
  "key2": "2hetMDLgNUwY2r5iRTxwcaUXZQVxJc2VXq7XesZAjZvJFvKtNabww8BLZg2cQM1yByZ8WF9tGXSMK128rKUA3QpT",
  "key3": "5JFuwtKXzaz2xCsu5cEyyWgmJ3h9rgbQYKeztfkaszKmzFcY7eWE6rPM6A4EoXKE6atD7iPuQaDJHSAuZAVrtmv9",
  "key4": "76RotCeUSFitL6Xg6zEVckZjyaWEbvcLJB73jvnwTvMr74qSmGkMVwLNBZXhc8UCJKziM1kzaMrpDmJNKA8BBB8",
  "key5": "nVERWWTJXz49G12hNc5znoFJpkpYKg4fpjL6XTtDdjBuri7tCYsBUMFyz2iUQ2i3CUX4GXcXQfj9zaKqtL8cLbn",
  "key6": "21Yi3MN6eyYcJoc1guRmnpnczmaA9Hiabb96yTkmpZet2Wq9ckrKSJhsMpqLN2AhYo7NtiCssvPiCX3W3nL1HoyD",
  "key7": "4wYC17Dczq28Pm3KS8QYEywkKbmvdpNF1q1tCdLvrMecmFQWs4tJijWYAXs4VpWcCxQQsdz7XMiyZT4roXyMh2nj",
  "key8": "8nHTs7ayxC8Lw5wuUrvwn4SgKiStJDtjQduUUgJMYA4q8PGkZZ7fQHAZ3PUBaD7wyVLJCeWCKg2rM6986XG2gvG",
  "key9": "3FvM1pwr17u5yTBBDkUBXwwe7gzA1B2bHj46zyAHmPL31HuD5soj2nG6TFfDE274pmMjX8cStVezHJkEKdqnA725",
  "key10": "4zRtQeF9Ea1YejYr9rxSH3SqPjvw16edaS9LHWitWg2qx5y6dPEU96AW3mb141pogSj3KXvPPnsRmGawEKEfhuXB",
  "key11": "4eYYcg9kqcirxHmMwHJFbsqvnTgY5PTHqrtQrzdWrstzHShPaNyCK7pQtGJunfXgCjUoyWecySLQprsXKwJz24k2",
  "key12": "3rcdWvcuSfFfno6gWYQigCkSNFqMAxARyNfKKjR1N1vUcAstcJJkkToausD8uddwFczysB8chtJFuRrNJ26kpF7z",
  "key13": "RVYvp3SZf3ZCPVfTTC8pvuKiUqPfPiw8ZhVQbyiyUtStVYCq6PFnbV8s9dyVGbX7rgzpHZp1hNWsMYN1P1yYgX6",
  "key14": "5h43rxRxsy5DM2seLcYsRcCn5d9G7Vm3muGg3Dr5wqmYDChwq7GuNRUwwEaGBPDqEmSyYvFhdmMCgynJPfCm9QzC",
  "key15": "2XJSxmAjSbBztkPJ7UMyhsJ51uF5otACoufJMDAL7z4ZYxFg342Y79wnx1xpFdT4RjT5g8aNmwszNzLk16yBBHQD",
  "key16": "5GyXmnC6n6LSxbBf28T62CrpKQWXu5d4tcodVG1tLABAccgdXdJeKUEC45rYM48JTQud3nGF37TU3DrsSQv7uYqQ",
  "key17": "3hxZJoACj53qpTz9Ej1qKZBToK2Wd71jQfymSFqZku4X8SQ1fG6fLYQsGHveYBBg69H76gyyEJNdasJrvsTCsiYh",
  "key18": "4gbQvvgoxnHiTNNMsicVYLjE2yR8h86WPCdhu32zN517nDZrG5zP3YVCAfR2ZpcE76uYRZgkCKdukpDzyqa2PN9R",
  "key19": "4pp7kpqXK5uN5XYHYAjoUvJ8oMPe6zqGNouowqVqManRthp7d445UGYPwNKFTPfnvsopM8CfEsBnoNiv964UEnZj",
  "key20": "3ggEhXAMsGP5ZiNvkMvKppyWKvYegux6iAukkV35yjxeM1gXSkdwkV7AN5jp7jRtsBfYCZ5jwiTWc7xuGHYjEgVP",
  "key21": "5WhWQMSbw15cDCBVpKXYTZRqSxERyYK6tk8bfMhA6Xxekp24apsDVjvL2kWwt1Myuvj5rUnoGaFMmC8j5vT9xpnD",
  "key22": "5svRTNSQDun63J2U3fxH9PynBXb2HAWfLFMTruyK7jRgP6BYY1ULDnK9t7MRncsvF1ueSqdzeZYmvyJK26Yu6Pqh",
  "key23": "5s1vsr9ATUBDaD8E7w9zsVxnTPCaFsGBTDHCZc9z3BTa4c3UJ1bLqMYP7Lb3CuEMdfn8h2NcisWx2pgszFHy2cAh",
  "key24": "f66WZSRNKmGCQHtLZZffQtrvEVXdNAxehEFgLfFGjyU17aiNgic585fWbwjAAocF1kWm4mz3CnFBoVFgA5cPd6n",
  "key25": "56FqR11HziqitGS4fRxHgDP6kLX2rEs1qP7dwPnLRWHaxV3w3r5tSpJCscjqKcVzL9f4ma8eNKWfU6GqSGxentmV",
  "key26": "2dTUrKm1nCzshDpBXMB9wjRVhPA9T521w93cpMznL4nMn8teRGtBzkfaEVB8SjooceRW6nAK6vzcCUE1UhuyBXN6",
  "key27": "uMc3FZPfVak5xLV8t8PpsqZufq68mDU2QNAKQrigibjhkcDnT4cVpsaEjeJaZAHZcTTNefXa7HgTfxxXoCmSvcs",
  "key28": "5Jbrgn1Wq7rFq7mKcNH5kKXTDq1nxAStDnmmVwuQ2h6DLHGSWoL421WdmanWyCsdswZA6qXYYBLrEFX9maHdePn3",
  "key29": "PXjBZ9QbovVf5VHnZFnjeN5ysmeHt3cyAKZV9g6RLa686c7XUgTEbmND9nPzqz9SvMXcqyHkAE9dosT8GcerEN6",
  "key30": "2GmBnMXbYntT1qfJritMajSEPvAcss2tA1HA1r2ktGqXkX6d2vNaMxZnW4DL4drR1eDHryDhVAkFeuaSFDTev9TU",
  "key31": "66NL9EokiiYfWMQ4J74wtbC8KAGwuSujfGWBB8vQ8tgEWq4oEdCQc293H8ppERW2C4QWLZprpRhzRV8NM4wsuBe",
  "key32": "2723ySWytgwcjABPYEek5C4z4jrXUvHj3iZMpK2mHQEuxbPgQ3PAENtXmd72szjQ7rXe4syYfSGb5JZNX4oV6TWV",
  "key33": "47SQsBfUCvNfo4J9b6kRvPKrYZ5XFuMhuWoYCESNjodhA53tvwNXxw17RquVreYfViAgReBqhPxYQa7Pi4sGMzAW",
  "key34": "326L3JpY8qhD5bVTqcqiJnxyCXxEZ7dkw4ykqDbimtXYir9sGamtLgDfyLd7mZ9Xp2oA8RCLDrwmDg6q5xcCKezR"
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
