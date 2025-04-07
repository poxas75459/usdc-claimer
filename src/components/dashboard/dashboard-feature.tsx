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
    "3pYuPzt72xwK8HKR5SvvHiYAoYqruKnnjMaJYoECVTtdeos4p9i5RVZ5xfb5enZt34874G2QhYHkVNKrNpePRaKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tUkVbABbeJJKNRJirEnNefKFQ5oKkanj7DCSCnkaJPwdsUkDjs7swU8vx5mJxkn9TJbNb86Y5igQzUmwhvEtiFE",
  "key1": "2uYj9xAwqwjUvi3z3oCJypQdHFdXHX7z2w1MXdHV7Ej4P65Snm8VvJGfZeLnV8sT3uDMAG7X9PxeEqfS3yGjob2q",
  "key2": "4AUEud6szgiiHm4RHuE3EGyCLqJLEYKDd1grFBHUf2V5oq19JhBDxzLGXjvyuQTcYVTqK2uNtY4on88gP3onUk9q",
  "key3": "32H6EUCkQHY217cae3KGuCDE8QKTwnDFKd2rcymThCR6guAUyyMTqrjo3ZzAbiX4WEiqRGQco5Wiz99TsL6gWRPS",
  "key4": "3b5Xg4Qp6bTXDVt7Ybubhnd6YNbJ9aX6JJRFqAeCdWDFrpmXnmffrDSoiEVqDDEVpgLexXEbpHycjKwXr7QYYtyA",
  "key5": "64gQDZLh8CP7H4pNPycAVHmmKhv8e6iot8vqqUcSXF7tKX3wq5HCAq6Gc5zMWXCEkXwXKcNBiNZD7eexjryLy9CZ",
  "key6": "3JSLZGYg81R6NZ3EH6TqJeKonqmDZ6XY5JWRbi6ppNRCMEhgH6AMUMg6bZqJdKc9v9tBX3tPuSGebAnGFygYN6kL",
  "key7": "5mi4M3fXUwZPakzjmxNVEKKccA9ea4x6E5GVhr6iXYNKgheibvkZqxukJknxXWpPpK3XgrqeQxvzF8XqsFrWyeL8",
  "key8": "5Z88fQrak5Vsg2hfkeavAa15GQFG3mej1EPzyM55PYUKgp39M9F3bb81qvcUagZHRzErzbKnMcWRsUMRQ9xf1vqQ",
  "key9": "5z1xqzeGh7B98DmXgM3cb7bKXRnBYCC3qxUXsTNarDwK728CPFc9FpbTfWgWAEhKirECZfyxPtryZHAGGzpQb4ug",
  "key10": "5xZ9YR5G84iFM2dPbLgyzK894YY3VoWNju2PMinuqRmD53fbtezj23DPzmUCZGKhM1nwFQqPsvQD2Yy9nGxCV7on",
  "key11": "3Ybfane3ZuBsc4Dv7vBDsaYrDpWP3gX27UkXNdcmFQ3swvvfZByUkpwJYRRHcmxqTMoHhnuyQ1qR6UbFFnQmKPgz",
  "key12": "wmqQFAMw4nRjX4vom1x1DggeSV6qVGcSpxJyY2WRYb1kqMFvgip1kBLwD4jokAm4SX3rxqStZCrGExvJoiMXFHD",
  "key13": "2KyT9PdeiEiuusmZwBGAug1FbhDYqMxcvCkfmEd1sLzAdDK4h6DTFjcEzzEXjPeBJoTwXiH3Liq1wfpkRu54iThL",
  "key14": "3MSmN9DuddoiPiHL2QjXShwzRzHbrCuRSvx5GqELL3GhQF9KrKSQsCMAb29nDXDzHsQHQy5JFoUfEMAWGo1eR8vN",
  "key15": "4wxNCw4HgSK3fgUYdGRa93aLCxGDRiJgv3ofb4iEHRBvoKR6Mfif3DyST6WYu2xwT24XWsDdNPqhXKLqEyApuKVZ",
  "key16": "5nZsTVxGTiPfQDyCh1B74eUj5RWg1CAnXoGPRTxpJr6CozJ5YEpX5vuQEboa8nipN3K7UdvJMZ7CBuHA4KJSK257",
  "key17": "4a7VYiydriWuiXsJZbTrRMgsmonhitAfrkPqRazxprv2Tc1kT9KdLFrGftXsXWESjvd5FLxCjbZuqFRCKYiGRyrj",
  "key18": "4qMDUreGMp92uYAg9z8dr8WATMPw89XByh6mtUJqmdFV8hvvv7Xsevcz6uPzEvtUgDLWHbhv5HrMPFPhDUo5dR1T",
  "key19": "3GRHzKeKUwu8oFKf8onUnMbFkhJBDRH4ik1uTFCU2EEhbWyq9fcKswABCZgLzSwJVeYDW6VLgmVA4iH6ziYsa8va",
  "key20": "3CmuhJ7QSPfCFWZhwgEBA1z6VYe4PMvgbAS7USbVwDBUUq3oN4aFeGsQSRx5BEf5pLSnF5hgeiSiUtoJPWs8R27W",
  "key21": "9qyNkVpsa1jBNStQ7zt3EpT6Cz7AXAt8BMASNPAnFzmZ5K6pV8J9sF5gfkD6p9KJQfy9TfuhYFLikkwh7ePfQ3S",
  "key22": "2FSY4cAfGKtycEfxDgwmMNBATWUjTpimvvyjne9zYKPjpbwDDdLSZrdPaVGGRa3sfCkPPmbEZ2u2CRaPwKiWwGKh",
  "key23": "5BC4ihTWStKq3gRcNqLPDCqiFWTZT87DTVSkr78sTJda93X16REZiJFJ4Q8Jp5YkFzWZQHXroHL5QyodSGvmqgF7",
  "key24": "4AnzCMNBs8i8sbyDZNiiTB4W1zmxZLPxHooeHm1SAXUhnfSxeToRHoRKpV9DbFxd3d9q37FrmjgfhL5F3VxkMZh4",
  "key25": "2na3FgtzkUoEL4tJ12vTB7M6Qs7B83Xc4fAhARqXoFn48Hf9oveABtCdTx3PZtbynAsPouHzHv2FK3hyJAMQ6yxg",
  "key26": "4LXwY7Wqyv5Ts23pnTb4XgkwocRyy8hSVACuAp8BTbMHd2BeDdDQdow4MtsvzbNj8yTJ7LypD6oRYsxTmnHKrrm4",
  "key27": "sA2HMHMck1N7qy9qmFwe6q5eXnftBM2QyAtgZtBy8qRy4aWquPNzyYj2yGjBmamDMK1LMPGi1yRvcNEa7y6ri3j",
  "key28": "5shceTy9Lpsvy3kjW6zLBMmmy96E11LGtspwaL2kMxmEAzgKSmTznieAiV8p8L12yyTkDD7xSBengiS3UWDjDAuR"
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
