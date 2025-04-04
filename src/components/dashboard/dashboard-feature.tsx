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
    "eVqsnzzYKkedDEJXnMEGgWEbfhvQjG7ZDZGkU3ndC1Q3K9bTx7bWgbhdSPMxvQBTdujQ4RLutCDehnobKt3DyE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uhf6z1q33gxvGXk7ictf1gCq4fA92osWQ2SzB3FWUHdQ4xXwsG9xGSZgKDPYAzqo3jBrsR1WtBtZp8B9N48Y9cN",
  "key1": "rxEN6uesya857TdotxcMs1D7R7YcJzoGS38xz6qvQDBJTLwK19PwYt4kix441dK5rmF1pvxp4hDdTjpcTPQWC3s",
  "key2": "4FwY5rUjVx6642NYZGrLVjsMbMp2kurqKNNzMyTqUziisNPfPHDXLxtaUTDQRfchav1466tnT4VsX7mSUcf9Yoj7",
  "key3": "53xax5rkkQzGNrjpV26YkY9oyGJSNf9ia219cVhz9KohQdwJZbNsbhh1XG5wojeqkk9S9BmX95oEdRYHJbpgDnA9",
  "key4": "5FBGwzRgMvrZ8P9zp8yoMhTxAv68Y2JRCqas3TTVPjMcpeT9p4BZK3UARTedoWWF8AT6FzTdL5tSdtn3QS64GJaV",
  "key5": "4H4vLCJ6FxJBA68Mri1mGjAkR2u3GcsyncuMNp4Z8CGJJkyF9DpG4KiJAprjeWPeoaKv5NgP1a6yFCmyzijM5cPd",
  "key6": "5VnpmwMH4ofH1ym5z8rQ2FnUaPWdAnrAGYtauFy7q5NRzdJQA9YQqGY6h2hoSeGsX5uN2VzsgZT2w98WCuiL9Sxy",
  "key7": "5WvQYFyovWYWuQpGteiUnrfvqwpXBpXsRBhCtimtXedya3sgxe3eU66tJzjXUxc425dUZ5EfSsiMMgXXvu3ooaYS",
  "key8": "2hXJAes9ukMNZJLpo8ee1t3DjB2KnzNSEzzoAMxg6ZYCA7D1gC52UUnUFvPvBxAU96n5sv6Wp97NfZ6ocnF2jjcS",
  "key9": "2WLjxWnDA1v54KJivaB21g3rBuHUWkH9qmbcuMomzkZ84HbthZSRiJFjFLmWWhK2fdYeypJenBKqF7mF5GQt1Fre",
  "key10": "28q81Bh3CViwqXXDVGAoRMKTJCTXBrGHirFXnrNbcSYQETfaDgytxoX8wiNa4p1qmcoLxLyqC8bMVJWmwpdNHRN4",
  "key11": "3oZAPi1UJeVYcVUi3kLi8WptASMhEQqi7mHTPuSJ4BY6qKoxmcTQV9Zuhey3JfGW5PmSbN239FgnW4UhYtcyi6zy",
  "key12": "4Z5vKqGwYy5bV3pcRjjE4Vv7eoTrSRGrUdujQ3pbqCQ7AvPNZdcJdfWtfrLKB2CoURjBDMPhy9zUmaZrSx5eSfuk",
  "key13": "2d8VVDXjHJd4nNLJKS3PY77xC1L1x7uFiNLycKWqFzbdunQk9GQdeRge7d9wV9LFJYhqgoV7UPYn7CgMjcCXWBdH",
  "key14": "5w8hoB8zBYbGKmFharGdwEp3QrCpCyysCAnz8xw8CkfNJ2124d9x9NASPseR8LBgT6t5XyLdx8MWWmd114Yhv3MA",
  "key15": "54VKjDGP16ot2sqDx9HoSzTuodZWUZ3SphSYtxic9sR6uMgb1tofvdfp9RetdMiDrurbkcMq7JVVsfNFT6X4fMWm",
  "key16": "4MGCsBuJaAxnpJh8j3G4jFF4a4uYTPxA2D727pGUykXBVLgv4ZoU2LNE4V8gy7cpBhR399gNraas89E8JJC2YZzB",
  "key17": "3rg1uS3iy8pLv1QHM15bLm9gtVwiMMAF1mCDrWbK12oXWc6AbTV3TmWJ4Nqt6frYEyE4iKrAFcxXKWiV1Km2w6ZY",
  "key18": "5oDhsdAAUetdqDe7LvjqN5d9pav1ZSr5dM46oTKLQf3oWy6xAfhXVP1hQ72mhcvhsXYbH7wafCCgtSPJdfb7mMYM",
  "key19": "4JMkWxzLw6bie2GR61aFdqPh3K8vP3xuCvPiQ8p8Uv7caLaDWNaRWPpN5E9qVMCYQVC6tKKxxHihZMVux1yrapzc",
  "key20": "4CdVtNWGgR7C3N3ebxnwot2dzv7A7RDp1Lh21eDc2TreDM2GXp2Y5Ar64oUPHyKA3bPkdvmnUG7k1DDt7kruenrS",
  "key21": "4doZARs8U5RDXi36mHZktQDxmaL48YSFARoxFW3eZT9einLe5URYHoGcofKNjdpatoV14P1sHwYQLmsHvQ7wy7qu",
  "key22": "3KYsxSqQsT2K5yy2DCRZkG87wqx3ytRWQSDy9ogDR4TLkeGapc6EaieAM44hBV4tkkyNSLTaVKaPNqGmmyhPGuoL",
  "key23": "2jBg2WwUKzUmUp7kCvzfUEiJLB64vBfas6efnNMUM4ce9fyeXwWFbnRokG8t4cq3wEKeXUH4hQqsYwvsGc4VPQiQ",
  "key24": "UC3BPwtRUtnuWopZbw4htUDuFvFtbJv7dCk8BqGWw3tJpML5X9jZ6snK97ogEguhLKG6x7H4bAe43pubpm9wUaA",
  "key25": "3K5DPekSHjwAE9DygXUiwiVtAP6rffSGtaFyns1oPQQj9y6Nc8bDA8wqZ7mfSB1Et1HhB3j3FAVsEJFTA1ag9a2j",
  "key26": "4PDJiz19spPiB2Q6CM7S2sa6ALR6DMRBVv9jDNMd2BGbNwV1fwayD9zD1QkGDYvvF6h9NNtfTSwq5MhvfR5wBiLK",
  "key27": "2Sd18QWKTzdwvAstkSRuxbDVMxxp9igAFbKbDoS2chynuWYHjqY1MKZTN2t7jJmKBBKvqi5NLXbGtWieKcSTGLKP",
  "key28": "kxst1bccQ8v7J2rG5pMeW2eY3rMa4KgQyQcEh9Gz6KjAiBb9MgLmdwSaLfaVzMfxdWoqKU8t1TXpeMJBzty8Fw1",
  "key29": "3TXwVKvUG6ppCCE69qtHsPGUwLt1K3WWmpT25VUxymhdz4Z4JXcKoUVAW29bcuPHeHBH9aNEmmJ81FEagc6wGuS5",
  "key30": "mtdSMEo8y6tCQSAnSQaoKQwXRunU3W7hR3aiMWtx9cS3pyipLty4v4WRrtHgNrnsY9parg51pjXfx7WpdE6NUi7"
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
