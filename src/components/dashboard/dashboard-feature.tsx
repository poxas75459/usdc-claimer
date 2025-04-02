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
    "ao6svrJdWPNGUvehXFBsCbZQQCsG7iDJB31D4z38RyaFsxD3AxWyaC7VTTY6XnB4WXVG5R24t9UySCwrtQXXAee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DmqMHUtVfFWJU59M3fQtsVBP8hq3z4i8PAoZyJUvWUGuxXX5vWdFD2evuXFpUGRFJp5taKsgdoH32TPqyT2Ek6c",
  "key1": "3wVE8ZVHzBzMN4oyPve19wLXuKBHzSZ11QFwSyrGnAhCSd9gohrtNrZowveywGJqtnCAm4sLwQ4CGnZhHFQrzWJZ",
  "key2": "2yVysouxrJgpP5LesTAtr2BmqJF44DKxqt3PqnvJFrFYcerdGZkdymDXR6vY6ghavdfEJfF1HUyfPGSvLGHTh4Fj",
  "key3": "5LLjtAWFHB4yhz23unFQFXHRyE4yLwrvddgu477Tq2ir98Bme6wqYHouop2V25fxmiw6xYicuzHJFNYSGoPxndpH",
  "key4": "mZMeiJthgrGp25WvgaduNFMuj1y6dNqesZfWPtJWW7XPfxQAiCbNHXVGtwrd7qX7EhsSsfXr77o2HhJYhk3CsUU",
  "key5": "314LhTfXarrNwcv4cozY3K9Hf5kpQib9bvTjkN8PMuyGuYtfvAqNXwwjaWVpBkHEULazAvj4KgXmyveumDEgaMVa",
  "key6": "4xHWKnBMnygccWXEEsDstkpnVPUcw5MqHmvMqZcPk5EZuMFEgSF2ZFCfyyp3DtRwTTzjTk8m4fomdaYxsYTDwQvd",
  "key7": "4GgQTfGPg9kJnSudaPVkBiBoSCtkr3CB192CxdCSynPuVQBCruFhfPKafyijfYPPbZdXoZV6sEuxzahxabVnqSym",
  "key8": "3ViRQQh1qZYqJnnDKSbjfuor4RQSqbd1V8m2TAQh1F6tZU3LTRiBsDGEM7SnRf2oVQzMCStNwBdZMEhryBExPdS3",
  "key9": "5xvkCHHqBENb1SVgJJ7FKmzMMBEstLpfjoLVdGAjhmXTzBgCrw3UyjekX2uuNn3HumUgajy32FJCY6DxukXP2NaZ",
  "key10": "2wdMUTA1KCcGd9K1YN33x6U3z24AittvVtJpo9My3buyHqmjsvqRWYmy1eVTbfD3bG76yQr6zDLoaSESUJHdKC4E",
  "key11": "2unTrp9XZ5nTY9Kn5Yvua9ndygTphSPF1y5LAHGd5CjdbpfpgB2DfDyTi1Wz9wBTrSyxALQzqAnU2rUum1jgN4o7",
  "key12": "43bUq1vLKEeqmuKBR9qDjjDTPBCKeoSiufoHAY7kQ21En5DqaR3si1iKChyy2PBQkTKZnp7Nm7CzbtTWwgsuv3Bn",
  "key13": "2Gtci6nymBMLKt5i2YgG8H2hbgZNADGMWbKpdZCoG3D66VUfZWusXYPEzHHorPw5KnqMNHWm7BDJJ2ZEvRRa9SNE",
  "key14": "21stQRwJHcwaACGXodohg4ZBpsr7hCq31LoUYVedsV7bi6vT8tQySD43952Y89maoHXzKkm5garnWSMhFsnZ3Pw8",
  "key15": "59XGqULEQVeN6Q9nF4VWKCT6XxNecwsRg9YnaHohTdchUzrta14sYFCbYUyntbDKGBn75AfUNRtjtNh829SmQcq9",
  "key16": "FURqinbdJ3oWJku7WerrZa794DqbZar6Y7LZRFJE9RLZsZpuhV6hMuUtAZVfkktif7ncN6AcADL1buKPi4kvnaw",
  "key17": "mXRAJXiEfnfu1F2nZyhj8Up1SbchfFddVQy86SGQveZsoiEUGww6S1fd9m5NboViwXBtJiShTw5ozEm1P3atZap",
  "key18": "2h1xp1QynPG4E8ZPScaitZPbeuutYFVv44PbreDeybiad7zVzYB7T41GFavY6Lpfgn3zkwHmb1jdmrcGRx5xJkxG",
  "key19": "4VW7qvLzUjNMkf3XxM3jTWbDS1Kf7iqqJMRQMCqBTRqBD5sPDsoABrbG6LhL4WEvqFLynf9yCE7gQBTKTeXDqMzZ",
  "key20": "2sugF2RWvrWw1KFu5Tq5hkUFpgEyExsfGPmYo2vz2nVsA4CwSdDg7pgi6U2NKZMySaoWqNrXJoXh2voDo3mbvmzQ",
  "key21": "25GtSaaRvXedFLYZ6LWNdAYVgap1S7v7QLxgtKKX8Rk6D7KkfYLdEz2Kvvsw5MksKsGVSbTg5q6NSUUEwEJJySH6",
  "key22": "3KvcjYq5NcJLQDBefbxci6AkKVPcZ1948ZwAyaRcHfSRrZqXyNu7qa246N3Z1fstagH1uNqvRKveMjDiNPPf89GY",
  "key23": "EMA286yb9VrtRrEM4oVM3YE7kVZJ6t8h7FirgEty4e5wqPA2e9BkDpKqNDpLTwuHNiWmy2A9obSKHPhhTXt2GLF",
  "key24": "3UuCyvyZc8tmuqWdFMPW4tJTtXJepW3MnY7DGuDS4a3ebuvs7xjJT8aCYzYycpqoLrR9sEeCbnwrzhqAD8e9cXzm",
  "key25": "4MtP32K53qaK6UMHb2BsBzDcG4r9N7U1kGFx3NQjzGnhfu4EDWsiv2HAwWeCZktsoTYFHDjPuXF3MPNwY95ufoUi"
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
