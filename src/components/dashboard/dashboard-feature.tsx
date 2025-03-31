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
    "5rbhEdsmebnornoVwKKQExs1vnvRmq1XRcYK5bTwiGw2Cdp4hbSuvxfTEQqGuQnUZ1rsot5DZYxaLfC15ynGmDsk"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2YSrrFTikf1n4dmW5xQBwrmgqNcgHeYXMSbsGEqphQPWTvXDSuxX8TtcGkRuDMsVJFTMNWC3swEgBZuP3zoyWQEc",
  "decoyKey1": "26sAfX6hxn4eXyXWrRuhkJFpy8LUT81kWgMgWmCPhcpEukcqf2QMjUTfWNid8K1DnHRhWQg1YjWJVYAtBC8yVPyX",
  "decoyKey2": "5K8WtQvQhFicnbsBoKdNUk7KpinwpPshyu1DEDuk9F7HvKxxYjmJd7XZVHdxY9PHREcC5xPkH6ZtPkMCAjaQQPje",
  "decoyKey3": "3eMV6U71yD1wn7NcsMRuMKvXSdvEEwo5HJKRYB1tnSSv5Mm7h5mQNjr13QPzxX19qRRMwDpZSxvY2me9y4jtMVeU",
  "decoyKey4": "2JjjZ61eY7VkdiD7QrcpKnZMFV2vwRQrihHCXdhyz7eAS4iFXsHVX7muzXABqv8YGKiJyxKUKzuxPVpxvRK9JnJA",
  "decoyKey5": "NDjun2GrvbtMpuTwBAMmhj9d6KDQg6xKtADugbRNsAh7HiwSXXVZ9tY4rXRDiGMVpRdwSEhgknVx2AKwQGrPvfT",
  "decoyKey6": "Gmigb4kS9Ei8jE5dJCoQvKVV9AKmiwiC1xPhvgVTjsyTb5vWt5g1jL9zcrUifYvS1Y3w3pztw2i2eopSqeA6TdR",
  "decoyKey7": "4XUCAteNB43rCXzMhyMJ9CzjDCrtbqgkhTVtVchC6iPNkjV3RAYP8niXCAtQvhGY2Q7dahb8EzkEhj8xXvKCbzMy",
  "decoyKey8": "5q1g6TEwMpNep5XzCJJfQfCQx7E9fdUpUqV3ZUG53dEgCVvoVXyJsLbocwJUeFxqyytX3qy9GzQ2HZnRMFBGSJ3T",
  "decoyKey9": "4uSxzmHkxnp1orahNi7yCfAgUmifGgiCnw7wVvSYJdjnHwffM8BjsuRwHCGazjgwUqhSvCLTiSKfTMEHH7M8uVr4",
  "decoyKey10": "3SaeqQ8VRmCbRQ4cmV1TcdwquFbZG5yg1vDq8vMMc8w4F3cXJ8xHbq6UN5syZEuiL6z9BEYYJWEqNJw9SWsLw4Gd",
  "decoyKey11": "3uzS3ZH3axNJMTYUyxZw6SmFaJwa5JjRZCrPxuBqT3z8ff1cmF6GxsMLTg2T2sjqiQF5SbSqHHiCSmhQU8r5VWAo",
  "decoyKey12": "5wbgTYoCvuRgoghUM8vFRiMgRJg2reLZdVeFT877pM6p8xxNUHDW98hojz1Wxq6g1YnCmXk3NN9UuEJuSgo536tw",
  "decoyKey13": "24Mgun2ANK6YYrJZQTejZNhs8dzvazWnuhv5LztGsJdDs9AXPBrxKwX44HfVxy2VQHGVdkTH9oPaG4711ADQL2SV",
  "decoyKey14": "Ch3qJzk14yHWVCSp8CVVUCURrDmi3ZfxYrvqT4cVDNqZJGAGi2bVA3oYSBs4oA6T8E92ADT9nCj4NmyeeEFfjRW",
  "decoyKey15": "4RMCbWxKkjNqVPX86c9CGKAr71yXHCf9iVHwhmwUZcJZ2QrDpt4zGmS2NRdoEN8qDLz7xNHAaF5gnM5U1wuc5Z5e",
  "decoyKey16": "4P4mLa2HBUdWxKqze6BB7FCfCog9NznDYnBDDCgZjbULEUL9fgbvUZz78dZdavKqnnBbbvBqh4uPq7SSZq4HWrGi",
  "decoyKey17": "4kWsHEoyzu1hZQ1pPZkRj46sYqm1tktfoHiA2gAvU6f9dN8AjZxqPqjdqsdmKbVuVB7iPw91BBuLjWR6rVHcZFs5",
  "decoyKey18": "3BvyhMwyYpJGcjzvn2kKGWo2GxSFjvGfe6SWzWnbzt1fJ2DdLsWYFDQQixoF5Pmjm6rCqhJmV9X4iaWehanvx1WH",
  "decoyKey19": "Fp5KTcx6co3o8bD9xCA5pVx8Eji7XUEMYdraLdn1U5BTVBdjHbQjF36YnfUKzRmBN1Ru631iT6E7uqRxB5nxGWc",
  "decoyKey20": "BCh7NPxAfWop8DVmgtzJuTVAANbw9caAE4RhfyNNVy5vSW6GWXK1137yGvatPdLco7WC3XH5ckbmK6RCdnxHxi2",
  "decoyKey21": "5aLJUMyqAmE8cE3aodYKczb1jWsR2EJ2nmp2bzivxjk8BwGCagDsoFFvZd8LYRxd8uT1exAv5su6hf5K2MPS8Fnk",
  "decoyKey22": "38aLgs5Gq5SCLoqaUNR9TSTwPd3eEZzYmwsecuJb5YRCYixb54RRBmNLx7X5q5GWFyomTevDLzLY33Ug1qtFg55T",
  "decoyKey23": "2RfWTH926jdffRi3sevqYUNwjni1w22QT8w4kmPT8cPK6T5WetWrA7R2s4fWYVBuyg4eaNtnLBFcPMuMfAiMVhvS",
  "decoyKey24": "y9cz6Qn8ieKBuQ6dfZyzsjCbLuaxKQ6xuQkratC6Q9Ek8yQWXhrZ2jAZk9vgJhhLqXe8iUvCSSybX1ft6gWoojE",
  "decoyKey25": "2PgfDxW1U1TZd2iEYYNUyrNxTp9UZPMUB2XT6Ve3eYpfN9vNoMngdedTnQvUS3TrPpmvpHVqNZDar2EP5uTrrx1N",
  "decoyKey26": "gTFJnhQwmtdTj8xVYiH65sUoqYT343KfJWrWHGVxpCbv5VyecdKntKUGQAmRcsYjQXPF5YRitCUsgjeeEBWpTKU",
  "decoyKey27": "4GqLFzvi3M6FrH3xwznCWv5TUpdsKt28QeA44nm8kLYUtDaWYGtkzxjtfUVyNXqTpAskbkCrqBCYdEsfNGg3nZVc",
  "decoyKey28": "UAAHaEq9EoRr7jrfGnuzJRPaEGdx6RzEWAML4S6wGrDYif3nMZ5ph1Cw2jbedZ2fiYj1QFh361eZ5ikUmk2WoxC",
  "decoyKey29": "31Bnk5XxQVnMV1VkgNgurS9BScdgsViH6wXwW9qCDcyxgSHor44xJCEBkpL7Tw28dFCNb6ceGdTZ57P1GtVtbToN",
  "decoyKey30": "2jyBEmDDMucUnbm8GpmtRcBMU5ZGtwKF1L7Cg8RsD8LRw7nP8QpSbYGvEXV6ZzXQL5obRoX8Y3onY9WJx6FiGXyY",
  "decoyKey31": "67W4fB6GPWHQcHKQvmGAi4VyFQc6nmZXkeGw4JK3jctyoixL5VMReEi3Di45T9rHfMg5ZEpcZerpC3fFzEAfnrr7",
  "decoyKey32": "4yTDLYS2rpbWgU6u4fhTKu4K6iofkoFGEqePubL9SLK5aUGCVYPcc5wGYrHv6wNcyCP2B5SHniRPR77JSdutGHJN",
  "decoyKey33": "53ex3KU2jMYmuFMt7iTGgDcrtu8qTsLYMmP4caJAbmZNGrMJHN7JcU9E76PHTPd9LyE8gyspP326zXZk7xgqBy8i",
  "decoyKey34": "5cqLv2QfFU7WqZabBY8zW36LprNXh5xxdHh9AeiVRbvGuYFou5Far5TiTZgcnfKiedhp3TiYgEx5gu2M9b7BGNUJ",
  "decoyKey35": "2JHsLC4hemcqxe5oHzSmoqEMQPcB4bWpEqapL4txEg7YLxCnK9VGmzUT9ELpngZsdSGqSfiuxzFSVyTSAdok1Lgq",
  "decoyKey36": "8smLxnMa9t4GZvgzomvUMNWZrVvi3RN7UD4nx4HDcejJTFWT6ga7LioYnJQvNobt4jMZnt19ZUYNUKpVFfz3KPn",
  "decoyKey37": "5vBBxzqLSwgHHPs8VkTd9m9MTYKM69sZztRdepnyWRhwBtutZCYPSeyDB5W9zAzeaotCJUkjXdpByAwDDjuskqxW",
  "decoyKey38": "2sfebSXNHqFSSGtqVs3yH5A6sB9hxJDiCtkEMPp44nnNNwCskt37SVxNgFG7PDqznNjGQo9xN86aeE8oRQKbL6Y2",
  "decoyKey39": "5rhpoTdtNSrVGFnXGhyByQ1veb5N4PyBXTPShMSZtWmjPVJidiCEGYVzkrSRumK7pBMvz6gBY6AVvqZVG6p43MP3",
  "decoyKey40": "2zVu1mhqt3VvFyH2HrvZixHXho8v1jz2RkNTrxDjFuR7QrJ7hZMfU91jrfnhfoNj2WQQMgEzuwo4zc4abBhs5Jmu",
  "decoyKey41": "31cthZzhyCH6XyP6YrpeBdY3k7RtBbqjzYrrjNqVabxwsRsQBMfxpsbS9qvwNRDYS8b9kda9JPFnnAdH5XtfeiLf",
  "decoyKey42": "48U3BYqC6tGWcyrJXFnw8FohT7NF2iPmgbkMoxPL8LcNVK1TN5w8hdLh7EthTzZuHRfSWvkRtuppADaNmwJwx5Pe",
  "decoyKey43": "2iTiLvVhQXG6WrEUKyhXHvXB3w4NU3cSB3svydK9dM4tBxSkLj48FV1a3JZsdVKSxEqFJSbZVs1GHh1eRiLPJtdE",
  "decoyKey44": "385kq2wTftfrsGjLQzPvvA9K3p8EYpmijEbX7RUnjUnDyUWr6zJLvc4RBmuFTCdieALRWuNiAfoAZ34ZnHJKT8wE",
  "decoyKey45": "K8y4jVc48RsnLacXGbiXr8xvpyeXqMWX1Sy8UBogZMN9huG3xAcbWDBp9xf15FsTRbCXjXBfdt2Qt5csVan1vSq",
  "decoyKey46": "3EzaSCS6nJ2uoWraaa14xN5pBTM39fY67VT6vjNVcBU6SS1Bwt7pnieSCte8ByCoD7U6QorxmUgxssrwx7bUzUij",
  "decoyKey47": "4DnCujUT8ryNJMZTvxsgtZ5GXMLFk9GdTb7m8eDRTGLrXiVpms244RQagmJjALsQProJ8acNaPKfrR1hbJGdD2x7",
  "decoyKey48": "mombKgMtsQBeEFWjo2LYvYkH9ssmxRnzFoi2x1Mfr1W9szNE93B2RBTviDKwb52YCj5sFjAPFi25J4jGm6yCGEx",
  "decoyKey49": "qWgkxBcKtDV7WS6xwLNSAaXzYC5idWyxGch6cpzeYFhqPYUjFXzLo9aDtTEm1JHHoSAJJpXqECjb9TmhSU88qk6"
};
// DECOY_KEYS_END
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