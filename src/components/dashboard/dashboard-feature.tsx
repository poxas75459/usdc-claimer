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
    "2dMaAThT1wP1mGEWEDxGJcRQ97mrMyPt5frEnTNUDD5c33k2VGpKuSh8wP59cgRBgT9yGxTGR9yX8VEWpoSTJDTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "77vosoX3z3hJhFpwcKAZDvngbxFTow2mTNLvRovr6K1BRd8wf26gDUh8viQuCGrnvHwUhe6si66WuZjsSTR4zEB",
  "key1": "5FhAsfk3irzr5ViMUKktMpLfWywNUdj3RscYWkT2y1KFhKcd7ztRdDrEgdFUjX5dzP49HX7BLN4csawkNDxheSXu",
  "key2": "2wkn7PSVfntSav1Zncy8vBDKruPp9cQfVfxYnMfqBASkWYY1fD2YY63pkX3RdDQHVJNEiCfML4oyJn3cEpEEUb1b",
  "key3": "5GCABH7RDYgYoiXSLYBFWPZJY4UBPLGY2znv4JB8xtfwjhqxbvzvi64wopTGe3wwTDKdn2Hj5qNB2B2tJWg4bVMw",
  "key4": "2pXitJQWtbZJDn96aYLFwxWXgZwdHRAMJ66iqPFzMuEUjqBeXS21U18G9GG5EQaANG4RNLMoRt3JMEtkggVxbvYc",
  "key5": "2mofXTD6bJDsXE3sdbxmaH8diMcBU317qzp1xqBefo9VCYJVJcDo2pARngErzCC9yNZ1HbnrLF1HQDexKEtXr9jo",
  "key6": "2q5M1wmgUoJamYRSuCyv2RR5Nj5SbrHDTR8txHVs2PpDLVnwUbNDQA7hTzsBeaTmMtCtWgQzyzPW49NkCtvjsSzK",
  "key7": "5i8DfHR9qgbKcDbva2FBoG2ho2wDYcnM7tzL7sWDb9HduMMYtfsSX6o6VzVxG1dm9YwJJhpCsCPC8P8vmoi6xb2Y",
  "key8": "3TRpFofDdUF3AoQrC63bQH1DnDVz3sSGxPy2WT63DKRgB3KLYMGG3M6sWvriTD1MbSZjBg8j1d37jpAAUMfXq9PS",
  "key9": "3BVD83uPz5DNYr72LM6dgQPadD6hfgrzDjSckmw2DMQb1is1EHuZn5rvec6WUen6itC4bbSSyjZxUzG9dyXJUHMQ",
  "key10": "5uRuxcc2KsReV4otaSf1dpNjqY87JL22p32DmBrumu9HahTskXdMDh6T84tAWSKivpyMkTe7MaFzjqKeu35YcrAT",
  "key11": "3kyGwRJTDfrUiYuhQtFCm43AxUVArm3HAmFGfYTf61HgTybDD39nrqzrmVbzhWzDVgcHcuxYy2ZvN8mNUqwHhrqc",
  "key12": "4aFnFRDFLU43Vq3qgs5MJVxHjpX3B1ctantQPWDcD6SJ5b76FXThFHodnfPs2SyJkGSE9nuBgWCcjCoMBS3RxoDm",
  "key13": "3ryitpCVNhWWneLu9kXx2nVHZc65PnLcKTmBKhXueAdzS2be7sSk2oFJN4MCgREJgj6u7B6P2qB4pmpQBTmjVyei",
  "key14": "4a9THqDJxZuUjVbuLysptNiTAbPsj7QwTzeREQgsydCgLHGNS3W1NizUbgpSDPtokYPqF2cBPba5o5s4ck7aQmpz",
  "key15": "H5oxf2X7h81zbkyoXnwT4MEFRWgRzTCq8Wkc3y5dA6omRLTL1UveZPNiRrzubMCceCDQzRf8kC54aTAAASvpXvY",
  "key16": "2QyLjFrZgPzVsW55mvRgVTHTVS64m2SyoTwj7bWSzwi6Uyg52qhpVyfyM4pTd1JzfXrxTLSV8EmFiBH1GoGpurnK",
  "key17": "2AtsieTitCWzE2eiPK6PTka9UfnmEPybHGNh5oSBo9LNBbLEiGJ6pVmDv8exCmqGN2QYqkEXsY7BBKS75QZfKine",
  "key18": "3JBcL37jri2WwUFY6sbpgK4Y3piVnJ2TsoEqLBekkoB7pNbwp37NCLN2tEbQW4axkqQCYHtyKk94D1sp4iR2LQyR",
  "key19": "5xBRFSKfFzCLxyCrvhWoU5cHoJtQgoPo4pCVFgFnwrfGdamGXms4WK4eqUSDNANCgsZ7x9mDkY51TtKv7f3U9D1W",
  "key20": "JLj1oPJrviMB3JYAkXTDeVpXbtKn3Zudk7kHzbkVwRcG3MJHDurpvTgsKXvichMcuXywTbaUxYCkW4v2ExVkLPA",
  "key21": "2ACaDdAvYVqQdmnfk7qPW2pvoZgvjU6uiQ1e9uNtXAfxSjocU6FmLTup3tHmdAX4vfLZjukTXTV4DU7w6pAJjmvF",
  "key22": "4Qec4dqyAMcmTEqobNvfcqqYmSZbC9GX4UqnHWcnp4yPhVxoVAUMdEWRQywDzXQUggyA4vfMUvqjLSWRgDjSBMGR",
  "key23": "34arAEbERR41o8cgHBseL9bsNSqYFRx9urUdtXnqwcpLouMB4GqQ9FaxVVNrvWusjSFYh7UQ9XV9JdKVD1EpQY4H",
  "key24": "2MwMEboUgmcV8zSeLjRpYcnsWgbhnh4ZqiUbmQZnuQpmPTipCx7JDvifmLaBuDV1AA9KsfoGkwCsouWWR8g78GUH",
  "key25": "5v1zD25an6Jcw7HX49eS2S3iESDnWJSC33jRzr3zzK3xXf7PFP3TVTBh5cftxEDZ8JLgjtHzkzbxZPWvhvXhoZ79",
  "key26": "62HxJDdqFMcSj7v4xFW3mbMHScuUJWbQ3nSpeLDhNkgFvSEpmGPAakThsz8Jbh2bwx5TemzypJax93YDFAjqqvaa",
  "key27": "3os8TARo676jQ5WQHmhiwXtGojBv3vqhpCfACvAygxK2UKnqdjevbZ9xbc4VA3Ly4LtNy9LUcsnUkfUohxyCQfLV",
  "key28": "65MFrRGxpEDhHJeC66CAWov4hEN5fjNSkEHFfVKqBRYAJSm8isbHmuZyVpffSBdtHMneX8MXsKq61QuctZCDmCyD",
  "key29": "5uoFtjyYQHCqKA9NqwkZA35UE4ba6w37viP91Mfc7i6G1D6uzY9yy7f6mrVSnv3uSa5v5s1BpXPmvGPL7FX2wC7G",
  "key30": "4dzGcUr8wikU3oc3RJLRE8goosG7TFLvi6YyeG42sF6pdb9g3AYPn1NQzUDywYV9yTfPC8Yia3tyaNNpBWxM2Lkc",
  "key31": "4oahJwLX83w6DQJHity8PmgBg2mdV6NSTajakTb8vUbH51WBUH1cQWDwRvGY3HKptvivwjCamxsXDnZYSpL4ja5T",
  "key32": "61AsJE6B1FQCCGJawyJc187mErLyB5yZKjQQ7go3u1FCSTrEgEhgB4uw4XrBuVEs7jnUSyP54dWTz2w8tFV4WE2b",
  "key33": "2sW19PuxpNUqsGtfwA2F5HrYo2oWEGPnqqmy28QfQ5E69je5eK7i69qcmhCw4jy9Pj1FsJ4JdSSE9Zz9t8XxsbyK",
  "key34": "5WjL23hk9PkZRev8WjYxfN7NZQHbDGaZTZ3bUbUvsLvDyfVMeD2wftPbuASMHRz3WtQHhAhWRv36AtJyPhpgGSWj"
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
