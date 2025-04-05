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
    "5nPxNGzb8afxuEiLxjLRZK53pt61bAuTBK9ighEgg6zvEAieiDm6EdfMCdPvi9FPL4DfJiewKKZbx5CkTepJqRi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LF16fUzeeqejJUr9u8HUt5tK1oS6oygGMudamvdiXzibMsbMvNDAu24JgcpmyVggD4GHfC9g6LU5W4EDFDwmva4",
  "key1": "5qDmNoyVPo4iqXSa4QN3SJCp1voj75iRJ9C9bQ63A5GhritJx6h9gZA4PXZoaKGyXwuFaKLVkdsvFo83jpfixHv2",
  "key2": "5BaJ5zgK7cBSVMrSbcaKgVbmq41rMzgHyv6LpgnX3wagzk5iFrduJjBnYdhYictVd79TkvCd71U21nZvMSmarfJR",
  "key3": "4bYazHeiV9mNrLsjoTbTL3WjdCWd8AAXgdvVhyj6upUpN98e6UTyk9aQ8BaeFhLimCFcZ66G2jAvqXFPSRuPQoQE",
  "key4": "2jJ7hcv7f4TpV3KLrkCkQx3k7Uhkq8DTyjb1CsASQxeCaw1wxiF8Ar4849W35adxXfyqbz9vXH19hXezWQrmTqde",
  "key5": "4QBk9s8R4tFKcrnKALQZWpaaWeWEntSJagEtRNzuTMb2FZ9XqP4x3xuADTLQeBZYrA3WcAeM9D29hMwK2perWg1S",
  "key6": "4EE8iCtQSNDcKMqV9jrmzsuYJgZoea9De3RGdSjxtzXrZpBQBxzkaVGyKiYGZrhNgDE2rSHjSecHr8PD4W2Zn3Yr",
  "key7": "31Xt5fvQf75Eu5Y2cieBo4TuQZT9GiYqDWzY8VysGCefJ51KN4HQbMhY3HksjxhHPotWTdBTJvmmkvFamYQTjDqq",
  "key8": "tCfXyydWXYrRHZdtv3smCjhXXEYnCgt2avFkLPbjHLeHTdonSJ1ccMK4ygosWY1PcEZwcHhjVZWYFyvkcsq9qhy",
  "key9": "5MLxSMDvdwXjZNoovtSW2yTjPrUEHjavGb9RAAa3SXBft2x4CY4269DwT665Y4rcm3B2i4cXKy2kqmvzX1vb7dDW",
  "key10": "2pJzBxUkTn7vbsBm8UrCTLsj7aaMmWmgH5SD34Cc7VjtPgqtGR77KP4ApTSKnu9eZ2UyndhW3EuRPvqzbCbdGhqE",
  "key11": "5VqAa1ymM39osTz4pk6PtVCucn85unh1CA3sEg6YvUEFTUxYbbEZHgE1RFwapqys6REETcqdgXrMkkRdajte7MK5",
  "key12": "2m9fGoWZqPn5bVLBorpK6KyVm1ZzqLBnZtxsad1Y4mRS4NhnW6FpXfzu2vYwK25kgPkqa1UneS1D6ddeR57vXmBk",
  "key13": "4VAcsuqVTsmcKum2zmJwhDznx6vVkcx6tW4sbUHVR1CeynPWRQKpkAbtXFepAwuLYbVukUMZrKhFfqppEgsy1eqg",
  "key14": "z5TgM18UvAxhAYVj8U4NmeJFFhmQfbsYkaZdviBmtgHHyR4EKQYg5yrKSoEFyvL5qJwhdTYC29AhdZsBuQCpaUA",
  "key15": "VMWyfqaEPkxcPj8Qjw61omGAKdNXBSTeaY5Q69yw1zaWqZ8DDVvj7BcPVyTYnews2btyShKJC5mcoEGBCozJ8ow",
  "key16": "2v33r4cbN88TkeXx99dd2RCCsJkuLqWHB2RtiL3nEQtARrRNz7mr7o6Y87fxyG5rtfE5cDyEsgojGG8uQG5TFhFc",
  "key17": "4SquYHiZP3CWeSMgpu9phcmtUWrBYzhZQgUuLH49UtXWb8uBTZVy9uj5ab6Bw4f3cpSb5GMu8zn6H1vAdowcesq4",
  "key18": "3AWSEJWypdJ9PcHmCny7EwbMS3xn9ftkDVeJ8pUM56yi4pC21zySyZV2FkCgYzi2QzeM2aXbSDmW7g97tqgPESuV",
  "key19": "3YLVDifygBGCWbjYPxG7E99Gc45MDZV6f215QPexKbFZ2aaEgCFtuV64187AsuvG5vRNxrEw939jdhu5JzzgvKVm",
  "key20": "43yv4x3ooC1d7wFidRidoC35BsDg7mLdWKtDYERVetaL4JCR9SSMrSNsE27ztuWohmZ3c4NwpAMeskDkMdDTKTwn",
  "key21": "ehxuESU5kzmnfAtPnbAxBd59a72KUmPU8GqvdHSrVQqTdCcAY6BqTPb5izYWW8wwv1DTJW74R3vyAiAt5au9nBr",
  "key22": "3tF6ffYmiXFK2mhRkoe92s5dhNBDCgTZwttvSFcVziQMRHBQoQr5avSvvsfVNkmaQFzj7RAcK1S2MeJPXKEt8y6o",
  "key23": "7DhFb7QCMQbwbyU5fRVDPJTQxYaaaPEsXur2ps7UuGXBZ9tXxRkrMAomFS6zFfGnCcHxUnio9urDeJpwXXuf5tN",
  "key24": "4tzx4t7QzPGNMf3bgkY5wWMsTAQ5SBW47nT4uZDVrtbLFkrBBxJoBFcRcXV3MyjC6kggiohLTRWbhHh7xByb6okS",
  "key25": "5cfRcFmfCTGQJoPKqgNRdRRPzMZuS2mqaidjVLAAci347tqJxjYpHBtymEUqt22oxPpRenuqz8kTosv4NTa1q3Xb",
  "key26": "2WSiunn6QWe4at9r4JhXTSSMMD4rG3UN1Bzo9UruQqj3Gr7ZkWYCFWqqBspq1oS2go9gkuYMzLnFtN4XTDPMixxt"
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
