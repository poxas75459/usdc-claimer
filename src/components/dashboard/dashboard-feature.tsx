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
    "vkJaJJ5zGwFHfpuhtnPD8uLPWUBokVB4DPTvPwZmfbPqE9geJjyVWVyJnWxS7rizVsbcdFse1TSSkDjDotrFMeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mDDaN4ZqkhXYg8UVPCc4PsZGSFSH6arTbAHwQJqTQgyT317THgtHLj4DKadiFXoBSNYYGgQuB1pcWY98sQUbmyC",
  "key1": "2DbqSLUt9L5XSnV16DUR3i8HV6ZkYrffEEMTWGzSxdNodvTZkEXTp64Arb5qncFu148cvVDeMzsDke58xs5nneev",
  "key2": "2nAWCwbeq3Jrc5QH6oYEX2s3cjeqk51nufcx2yrAjkksYUvzo2MeRusDd5MmaA9wFzv24bj5KC9eN7vGCoA7Hutp",
  "key3": "3p6EePpQSTbGjkmwXDcv55zPg5F2ZwcJUGX4RtBXKLofyjWNXDS1gXVbLtDNXj5DfCoH7vQ1muWbQ3buFuTR3Cmq",
  "key4": "2BhnfT7Bdsoe8xAFtbcJe88B18DWVv6LKn99yXn7PTwCo3BoxpFeYCYTM9EqVrTEFjapqctEGbyQsHJzMEh9MVYe",
  "key5": "QGsakAPM9oXCW2Xj2LS58uEDFWXfSgsd9MQq9g15zT5wZWheWAXAf5KVU3uYRsAJ4XAXjFVMWuk4NPxEuUiF4FQ",
  "key6": "FvLDjk7yB4JgV9pjHcxwkzaEBEnMSGJtrAAeeViMoGYSmUZi6FEa12FQyvXLmfxK1uVMXzqLzUefgNJSiSEt3AT",
  "key7": "5NCyEwgzdb28p49nHfb5E9BMzyCo4gD8ZnucX6gN5e2BncKM9EWsjQQS6vf7h3E6a8fhVvvDiXq63gSxQqtHfMiW",
  "key8": "3sjpciSh7uK6UuoexN7kLmkcX6pDo4Fepx6m2YMFBX5d6aCSS7sr9NeYNHQqv1DH8HMJZx2q7KLViREwGzqVjwHq",
  "key9": "EnoSE6MDEDcRSJJzsuyWhULBEX9MA3e6YJXMwtyHN3K7JT9C3KEoWJ5caRwcaesmtVh15CBufb1BWWRwkTcx4uW",
  "key10": "2HugNstizAHzPFgQbs7wG33VfKjJNgsQasFjHZpSbvAUnCd93ef9UHkDnHDprh213mdx6mie6sohy3SG1s8ZjjNb",
  "key11": "2Tcj6ezadcMWXZqcdS8GKuotxvWLEopxjv4AGJUgAwoXqG9yCEjywVeDrYoBxyyovFXYPc9dZthDW87hR6p1Z6Fj",
  "key12": "4vA1QivsXsmpQfa4Wr2AuxSnM5sU6PUQ1BVgdLZ8rwcVbMbziV5414L9uHivHpXvoWNiKbpnQeWNH22SpMg1vCSY",
  "key13": "HbcVY9d5ZH751i7iuWS8LCJ2cPcLpUi4MgzegtVhuWqzTmyfpVBVcngQrNorkL2mcHYcw1bEh6ciLFzozBXJbUi",
  "key14": "5dHhbV1Bzitat83VreZfGHGznAPza9VTUszAQp7ZdtyuWdoJormSmqTA9fvogyvnB7GhVVUfpHak7AdZzqjF4eEe",
  "key15": "4o7Hde2Z2EevNUVq354PFvsRNxpvtej91fzEoJCZc7sbM5GfmZdTLz4YiMZirgbLS6KCb84uK4DGyDCUpez2WokL",
  "key16": "2GBF5Cp2ZFuoHUAvvYCjee44saE1iLSCBtWs63LpYNVCFqrodGDx7K7HmQmn4V5xgz7XXaDPYT5iBdiWQ9MjCCB8",
  "key17": "4Cjt1m33U6U8GjUn5h22Jqj1UMaYaqa6qm9tbykxmjgh2SiYcD5PciDbuwVgct7CkUvhHuq65Cj1DiAYFpovdBrd",
  "key18": "3d51UGycarDTEfhyzdU12PkF9iFz9FJMDtBbqj3inMgMjxYzsxyrzcZZBwueKJfa9HAJdNRftEWn4F46FkuFWMNS",
  "key19": "42trYywhbG8qNfYUQ4kEQpdCbpmVzVYAYbYb5WMkawi22m3DtiNdfmeuQFnwKbapkzwWmvebwnctroJSrQ6d9441",
  "key20": "YFAG9hiNCWTNHDk73mBiwvvw99QKqAmekA7fYFEWEemScYZSW4a92k2EQd4bX5qVfErFaikcNFEr5PPhzwnwFmx",
  "key21": "2HR6CBp6TnN2sJeDa593x6LzhhwbRkoe1RhGSJxj3uRGzG5WiNZ7amjg8D26Xgu9vtourtRqf6YprsJKA7BhVbSQ",
  "key22": "4VojEqBxczXq8V8b6iqHkLbSx9j2RTMMwU7PtjPEqHMziei6iBp62yxUq9bNH1MWiPF3jJ6h48RNWJnZem8SJLZ8",
  "key23": "33t4vUBQBaHwJpDa2iYxU6noesfJqiUQyavBqsqPHiKcwjUQsoDTbLD2vJjxVveSsUz73ynAn9L4WrJwtYAtgWsB",
  "key24": "RibpvUBPPq8pCEnDFf867KwfoLjd8qZ8aJDHAu1Ep2ZVHEK3s7DgX6imLMRExHtjQMLHt32cSuH9UMFB9zr2WbG",
  "key25": "Aop1UpNfoLFfNPSZT8AQqXuw992PTggtAJ3UXSnwwRtnFAtnDpusttrheU1cXJEp9eSL9A3hpw5UGFD6mReAa58",
  "key26": "5GQLU2hRvmCbr6AExW4cHSU54T9MXxjPMDAkyNQdxfEJ4YY79arYW2XeK3D8HJ37NCNKXgVB3EJhJDJEnVGGd6gd",
  "key27": "dmvq1sHJPurKmonSxzRFJgWeUvuGAU8GvtXFG4MhRi8sJGswQ1RWZTCfko9z6orJWPm6KZAKQJ3HqtsofUnaWZN",
  "key28": "ZEuAz93wKAvTFtSpqKoxwqnfAr9JcLVPoiQEQMmS3mbY8KCmCiTjCExMZDyJV2sCMETAEHKzbcv3bLrCjUMJA6z",
  "key29": "5nCnFB9QRxxJuyiHBgKY78RmPUQW3DGfXJVREUn51yYRc698iRRJs3kvbqRSTPr2Q2LUBfgdhN4PndaFeUB3ZsNJ",
  "key30": "4vdFoxbZd8XD7ecspo58228qw3LX4vvyfwW1PiGNoo5qSjKDMGCk4HcHLmthKijmbTbscTdJLrC17T2eCndZkBp1"
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
