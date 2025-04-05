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
    "4ADhyegr3Mjwd3gnU4bj67Sht9xcQLYEyF9buNRsXxgY8uCtB1GFqvvw2m5HtaWmTsjPVU8d3HvGTUEZSoMAbaPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CPJ39a49ydiuEgr3G2vZ2HeXpC39gDUXAWWs86SqduPmemRs9Kb1iBU2QhfZ2dJRgzFc4yr6DjqpVqhUFY5Ez4H",
  "key1": "4JCfFFnh5o5vjFJ9twmfdzpk7ZejirnYJ2nMWCV4x5TuYS4YNBw3vv2bfxh7Abt9qdZcMuqqT66qRNMhPoQe8nMm",
  "key2": "42QpUbd2r3EkUzMC92Lz4vwx1iYaH3ihUHJ1LMgRtpBvLsQpKWJYs6fWpbaQrcPV5WwPnbdVxsUVEcMJFRRMxEb2",
  "key3": "2MbZYSWWuPzycktBjdnUEpmgc9g33ZuU4tcnSSR81wyeba92z4iBHnV9BhHMSBpXdVfgTBTYmNarXjQxy77utRKH",
  "key4": "4WqiLGdcMBJHNL9nYdooLZMbhpWBaMTkE61q3GE5g4T3xfYH3GKbRsXN4HJxhHE4Nf9awFkHje1fZhpVwJSetFCk",
  "key5": "4e42NjyVPKimiLzi1PJNr7syum5B597eSPNkyis4MvbAN3ED5MTYweJnkah7yyYQLrU9gSXrpTzmJSwWRPYP4eBm",
  "key6": "31P392wTnLSDZrhybtAnWqtZZGkDW7oaBJQKXbxmNKjjQafVWSSYELfBPbPwzu62qwcgaoLv7YeT9UDtYgpFT5eV",
  "key7": "Za8NSxMSGCfTWxweKzmwisL7hvMyqq1xRMvf5qjVYjtK9CXQUow9R6jii31fLsixX99fvtSZgH91sXxaPsaW12J",
  "key8": "2zs8tpsKGUT1W8RRZsymKYLDMTNWZuob4DbW34zWd5QMfwmHfYd1dRofKjnDbCaUruxqEoP4vYJc9oeTqwupZ7iZ",
  "key9": "yAjmGecWHVZbbbphSAYZFnAGLje1JKnWhSPe36BbK1V9gCuU7Y7KwUn5Kd8DGEn9YB5ife2q64brhgPB84UBunZ",
  "key10": "2G4HtcTrFA3VRzHUndosw8zygVNS6eM7Y4HwgEbXLDRHLwhvyvcbZyhuzYDYZVmRKuLwpxK2vM8JPwRxZPyxjM2c",
  "key11": "2QiNSEjhvsXYpsVbHhXjTvQXgbJQ5DPEVW8QA3bKUxGVEwWp3UCJDkTXGRJWjucuc49aBBshjxVkmVBpDobraTHM",
  "key12": "3Z1VWd6S6LndaZ23sN3v1QgSRZAkK7APEKB72mZrLD2rd53QvGPULN6gXfYJ63mgNucc46CTfzjJX42eDwTsvuDj",
  "key13": "2sGELM6qP3wc4wSfQUH8qEozGiWLpgVdFqdr7MBeKY9oGgb3dPQs6CLqxoVG12Vay7LoBtp8kTdySr33XDzyuom7",
  "key14": "3FLwui2aYHvNP7MZTAtDyc4oeQQU2NLPt14dG2aADJQDqTdV63LY4uR4W5E398i3qFU4PKWnNp8oBqgMhqXsWPNU",
  "key15": "2o3VBinVcYNBAY6jxfpWTHSNDmPmYrQexTy5uT8Ry748CoVLwV7pXqD7cL8J68M2LzRb7UE5CybAg9rNyYEesXCt",
  "key16": "64SXYpKSiQnGFCQQ7LysfQBiWf6G86zgein7MtvcmJcVWFMHxAzHaGh6otfAfP7KGq8wutFC6KwXyyDG2TogiZh3",
  "key17": "xrogtRJaMZUnSww1o72w4K5Uvvjhpc3o372SgbE5vEmtrgKjraVKo7xgY9gwLxVG1v4T4Wvpg4veR2MAna4Xbq6",
  "key18": "5ovdHTWHiua76FUWrT1D67xeXBQDGJ89SrhmnDTS5JMoJtX5YB79x1iT3juGuZTvtNuZbMRv6cUQobaJB2eMXbry",
  "key19": "RakkzrtuFMocHxcueA6Z9vNs3rUYsnR3QfnzTCeS1cmFac5fA82MhnA26NkaYKj4J4SKjv4QgKEbH1fodJ3ULFn",
  "key20": "3YUjkQqc4qgU4qPVDEE2nBrFMt5pGSRjQAP2XYm3Kwa1cTmgqqgMyb4rmav7K1suz99XQSmi1bEcxHtG4LotwYvZ",
  "key21": "3w47kWRZw6tjqHi4BbhHxfNgH4STf3E1PFbYajhbfWnPh77KMRWUf7TxYghKZCSy2ij5492SwKhnqNHB2gNsKvQW",
  "key22": "UeVQoVn6fzoMehDDYrYQEirW3KywSuCfwkHBfufF5APR1qBCcuXJznMvTQoBhxS8VQJAcA78zuiQ5qXjHEWjkig",
  "key23": "5s6NocKAasP6rUdWZ2FcZe8E4Bt1uStXbYrjCj3ZHAX86A4YaPsw37QU9B3qmvvPZ1AtbEZ1tPxF7Jm8AmozQDrS",
  "key24": "3MBhsYpiv92XG2XRLVFbBDmWDYutZNnBPqsQZamoJJAP6EqhLzdneDfqp5GgvALcr4SP568cCpd2qLwKdh7HiuzB",
  "key25": "34WraJvLpVahx1J72eToidMxxzXER5EaVsmFKkBeTfrwWwMwaxiU22juvqgrXV4kWv8eDU3x6EMuaTcMjDu9fmeU",
  "key26": "3HesqeH9UqxvXAUfozuc8KHfkyJSGEy1LcvkVcrSvYKXf5U2GKDV1hVKry1p2gUzGif6ZCLSe4aU2hwtX8eTQLaY",
  "key27": "2bDCJoNtf3fy8NK6mE1SbZDVjCMow9Ssjrih9Aohzn1r9HzSXUcAtKAk2SbuKzPrM1MWm35uTWYhm2TzqsmM9f1W",
  "key28": "2kjuCfTTVzGG5r11pjeAkRbxrXb6tQbJDxraWoegRmZPdLQC9pJ6hcr6fSodkijCvou13aCcLoqWtR4mJGybWZbP",
  "key29": "2FfEgMCFkm1ABxM9wdZSPZ7CVVviCF3Li9b9acEyZWP3tKkT2Y2B1fHb7diRqTZKSxBuPncsmVLSvh3GPfCT4sH8"
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
