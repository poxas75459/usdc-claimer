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
    "4cRSZky435cY8LzrpfVigdiek1Ytnybj2wUH9RSujK7XRdnSrP6RA1HsPQ2od2FCkJpRg6wHZpgdNdEyBojXhVuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QBoNXmR6eJCwxrTBfLLxEwkhWpHqcjuV5EQQNWqus7zqHQUoxLgEVp2zJuhoJrHNT7y4EDdCVUwqDXW9RJmVPre",
  "key1": "5TUrrF5Enzz7Wa9558K7Pap133uAXg4ZEXiAAuoD6ppwvUZ5ZxcfGCnV5UH5PyrYioZqZZ56KpGb73NKwYzX2Zhr",
  "key2": "3AT6yLwd9RfCDN9pTthdXFgUtLy8QkjGMq2gG3b5dpywSH3aVyoroS4SxFSBUFg2BLGrhm9DWUYDSA2hcfR7QmbL",
  "key3": "4GSDhCWrEJFDzsrdWVNWFJQx5MyCNAvJeso6ZUE65UjuHyzmqf5pJSB7pEXK5hC8jTvs7vHC2vgATJh76EFQWuDg",
  "key4": "2MkSdDa6huAm46V9bMKZVfgo5VhHrTuKMgP2bJTYcbyzEWENoYze8Geor1krYu2mb7o7nfopgmFrEUiDtHLRuJJw",
  "key5": "65KJXXZ6aKNRbA6V6KDGJgJV9DPpyZA4WA4Kac38F3qY59NvruCRA3n8G7iL44Htvtk6v7SDcjMUwiiBiMvsh2UT",
  "key6": "23uvfiTC7VY5kSGX6Xo2tGnCK5eEXnnFUhhE5D8CMZfuSqh1ESoSfV5uBKrxKGhz2BQro3Ao2JqXtryp13p5QpRx",
  "key7": "3gpVgfXTVSSHyB9X8FV3ueuVZRwFx3wC1gL6ouzaCWEMScQ8E3n4m8TvkwwM34ZXoi6aqLNDBnvtvHN5xoKjdJEG",
  "key8": "iFPPzNNKMbA7dy8PRSzWGVLixmR94CSujMrMh2fmzSM9U5u67iPk1EM3nLpGeFCnW8dYAGTFBTfzsN7gBrNTUZk",
  "key9": "58A8zXpUtgVv6zTRKHB1eXZe8KZYufHgJruyPCMCmnk8qmKgTf7FVtZM5P9hovtDc5wvdop2V45uEaWyH1DEMwaA",
  "key10": "4kaU4YTCyWJbLCfLqpe1mg1A1BdeGnArNrHYXGbnoPXmce7Da5raVDH4qWJgkX4g2KDGsENLbubyUScWL6SQ5ziX",
  "key11": "4UKGwXZ3r5bV8ux76yEakcUdorE9yBKUYW55wjsP9g3Yq7WW2qD9W6ygA7PUsbukRcH3GVAMxyM93YJc47SPHpRS",
  "key12": "5dJCLqfa3DHXcAvrgXJ61WewTPEfvkZQy4sr1ayY3jAyy6qU2jELcbv8NMBrrQwJJbLFWYKgoar1m8LASJ9UEccU",
  "key13": "2hSKwF2asbhoP25HTdGHERsXEZ4WJen1E7LeA13xvLmbVcw7YjkDMUvDzcrA8W4U2ukUtHMcsBdmYNrb9bbFZXEh",
  "key14": "2SJRJQ74YkGKqjJ6PQ7y3Bs5kpqymyZ7QnTU4zE7XiztYjaQCi6QcigcZvEDg5PtWgbtNVCFszQrWVthYguPQdNW",
  "key15": "439nmoLL8pbE5Fk1UxC3kChCcfvVdxtSFYaEaT8hBvud6HDJt679JDCsCrr9xiHQdGW2LmDSEnKeB21u6LexNM3y",
  "key16": "5nEqY8GYEPBiuxUKvUFRa2NcKi7NFZuRiafboocydBy2PZV5HYnzzXJzVNzsqj1SgDDuaZP3uyoH3vPfTPnr4cEU",
  "key17": "2JP39BK5vdkd7EGcCvZrGeekvXsD2U9PTfkkbSEaRcXS2NsNLw7xLbytpgZvzvJY6pi65AKjvCgcwsSVbPKd13d8",
  "key18": "5LK2eNjvRP1wPo8bHS3BnstUYPDK4MtnqVGVPEiPm7b6qeHdRchy8b9vciiA4trZnXPMhcvuYCs4VhPaUs5sFeEQ",
  "key19": "fF2Rzqs5FhRUo9CN9fp9ERHEemW1sRoUB8AWXsgpK83q9pNWQvmdmmsbkwFsxQtW4syRAzaFu4e4xFKUQrnU5Ao",
  "key20": "4vFedMGzCHx5dSFH4m324PZhqeNmU727c9vDKi3jgVhz8Uao3pnk3nqzo4jipJyqr7CDqeeyfcgmpApxxnYeoF5B",
  "key21": "5iJAsfkkMaQs7B8592pJasW6AJKyUWTZ2SfYRd2ReVyChsqGi6g4Lx1fSDJXaQAqqU1a2VP2zx7erD4fi3RMPmnX",
  "key22": "4Y1n8eY3jHpjtS3LwsqRjHNFTYvrgQc4ou3bYdMArM2jbAaZZDVsMBU9khVovTU3gdFMKStNcTwXBuY2C7gKCsh7",
  "key23": "328usKsxRLTBSVnfPBALdw3yYXwLSwjhn1cfk6VGqSGhWsvamNdHDWen16X6g5i4rbSX8VqnqJZGxHPZjaa4tL9D",
  "key24": "5Hf3joMTPC798dVnKrH2gcif691MznwyGEGQecM3WCQhiAUQjSnC4dKgyyhyek5MZAhz3TgDactg6UbFfWMSwqWr",
  "key25": "3FYR3GjWX46MEK5PeMmKjKe4j4m8E6Nm8FKTKVp8HmXEMS3HLk3rU4prsgLDpiwTFdD8X3wUrf7h2HCosEKKaP2a"
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
