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
    "5TLGp84dj17hCBH1gudwjaLgjrV56yL3wxcwenn6cmkXH8addEo2G2wvjxfehBr4sWpvutSkFWS23TS3zKQrKpJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KDJQQSyDm9Bz1M6CjfW5B2dm6wMdCVphpZRFWh78S695NjFfVB4MbE4nADfuPAugrS6jHrk2NHX2s3yNd2P3Psm",
  "key1": "3E1RrMMDiV6fRwF2rKTdLZKxYo6jtCWvrZQwVRkZNEwVgLPGzwZNgVhDQZZiv5A4H8jXDVSNNX1JTdYoJLs2S1Sd",
  "key2": "2p2nZrxri5s8gQq6d1yuh5ywffZhJrQUiAasqft9JMtyBDKKG1wASBwW8fcNqtGr6VAZTykjpuDfhYpTYFLSGMJi",
  "key3": "4Akmt9a2RSADzVH54stRSywoBFTGoUNkAKFtaM1zfv3796cjNaebsG8sdjQa13TBicjkrrciDrBcqP4XEXqMUy1Z",
  "key4": "2ocUrMc3Au6psrTCnJNHj9hEjgVZBqwL8sCQUgrH68EMeQHbCMbuzydWFn51AFK6WvJ7Q3uHHf4CQRGYsv98xHuC",
  "key5": "5y9Sna1ow5rQ2MyiA8wDzS8Q98AvHJPU6XDoU1YL1SDcXuVRL7dtpdc6KUJNurf899AHwHwFbWizZcKb3cgUj4Am",
  "key6": "9DwQaDxmRcU23G1CD89mLjoHZCKX8jkC2TdvreABPzroUjWEgRVtptSpcCCtTZDTcLFUx3537wfY9mKeUsatPWp",
  "key7": "3Eba1JcaGSsuBqNVsoUjgBvAv11iSzdJUNPY1HdaKeWEWCuAc4J5LDG26PKvH1Ti7rAKHtdwXcxXe7uihwWn4REh",
  "key8": "4m6RkkDpZ8XpDGJTZd83Yt9c4n5c2Nx4mgL6EibBiGsyeCYZidrSAY5TqdtCAi1kjC7o9r43cXbqgziNWHZyWWCw",
  "key9": "3xzHnnRES5VzhFCCUkRzSC1PekTibqoJ4efAFE6HmZcztdF9SffA4rtPdpx9S3LdYFFMSaVbWEXusUhpXN47ytq4",
  "key10": "v5WCuseRgxru98K8TrTX8K9B2vK6roQWz9K6wFtHhXXunbnJKqTrj3kC56NRnDuGCqBzxyQb7nYMuo2ZBXRDQtM",
  "key11": "4qbB31XL5ze5siEPAMtyvJgKGMBZSAmnddfpWAbewywHa6PzVf9tmDfdtQ3nJ5r4DBKgBba85uqBUqK4BP9xpbE7",
  "key12": "4y4f9Ghxpk5DdvxpeEZVL6tB9yEAwMBF8sSboeMUqcUhoxLVjtVZb82fHZLCyZ2ChG2E5m2cFpiZSK9xCqpkkjpR",
  "key13": "5stwYjDK2yvifGwwMupMebeQGcrJ78u1xhEW4Cu4QsKRYKWtGdEmmY3XR6E7HzpzUsHwbNSKChA9vencNoNRJBWJ",
  "key14": "FekXJ5WQUiKgC8ojthZUdn8L1BbD3L2exgc9eU3TGzbYqQDGxW5Lad2hTP3czDTTR6TuPVWXXRVUGNhPDCJaMXc",
  "key15": "mNYctLgmD6pi1PZKKu4szKHaFjrWBwD8pC7xxQGHMEyqxaci8BspTU6Ly7xsSAAdZeALRtCamcnHpgUcJDgkD2k",
  "key16": "4FEfgG5X2pbdKBWsYSTDQE5rk4MM9oxG39jkvw2LXurovUcsGhWPaRcCV9u5rTpzAHUbiAY5LijFcqU3RcKByPsG",
  "key17": "4CxxqhovkSyhDTA7yK8cmm8zBK6wdPBVa2ZMHnh4QmpkT2GgptiCc384rrPx55fm3TPXNxJ2kqEc6KrxKiL6UNqc",
  "key18": "4Fnk7HZiy1qy8pYZP2Paso1uTQV9w7Y7omihNgiSdofft1htaZ3qTMcMoFbbi6vq5y2bGusFJdiAdY7oy3dYPPuE",
  "key19": "54YotnsA8sdfA7JEK7rUoA8CqcZovseBpMj7puE2x1tfWpWT4CqftCsdr4VMTNiWEduTs8MedQanzqEHdcU45gEA",
  "key20": "4tsj6kYYfAcT55mrd3XNkYhgPekZKTfHsU9DMdiC2uvpjvUMvicSRo7dJvkpTYNivArsoFCHsGL42kYhes6aA3Fa",
  "key21": "3cb3oyGMLzCVXkuPcYfS7ESABs6bX9WMptkmtGTnd5k2BJG8paS9xxRS4o54sWJxsErXZrGoUHrjQg5LbUBkPp2e",
  "key22": "5wdtmhHn2YmvP2z8HaYBGTg5etJ8BVj6ZDbKQvUPvitmSoB5xvjnUSgmoBYD4RsthKkJTWduTD7tjhmXHdQujnZM",
  "key23": "5YGsgMFjFSVdfVB1aQGco3Q75o8tZ94qCdPYte937Wy8YT5QJ9YWEbKD2E7e8LZcC6q9VrWfxN7EEm8hLpmmRGif",
  "key24": "4cWZVdwtLXKJPAZmZazKMVeGRwbqfFKExpLV81v5UdJWtFWoeK2TQQJx8vQzCVX3EWQbQpnqGV3xNTxA8XmzAyoi",
  "key25": "5gvViYp82JjqsMKhVCpG8mLaSU6DDtsNKeuVSoZdWEDMKEo6boFRqxScYrkHXbMoGwi36ivcfpa8ByJhG7UqpQr8",
  "key26": "21AUQmdfwEr5eb4BxmHj7xJrDsB8Ajg3UNZDLw8hSkZtQDnepVo3118ocvTEUX4JiKHcbERegLrwxk1tJ4Dd2NAe",
  "key27": "8JKXS2ToMjSTGgyXCygq88peaNAYagcqLMqk2CdQ4EdDdgY18WJ1vtXK2AMCqozUfxZ7WyxUbTtx4i4H3azX9HM",
  "key28": "41u4LQDLYm9vSKzTwPG48r1sChDWYbaSgFNjKe1b8Wva6Pq59oAjyTgKR1F8K4YD7ExEDsSZ4jmA54roHceoxBzj",
  "key29": "5R7AmC3UfUujAbq5TkNGXXwVPmrwfsbpjGcaq91hCY7Q6STwSYhWTEXVE3URmDd7T1hstZYTg6hubheqENZ9mBom",
  "key30": "5GAwALMsQ1DBzyQCtmrm6EvaqTCExfGHKxbzr7fJSsmKuwrdidzSSZADNvxdTt5XcCT5fHEHRnsEEQm5RopUCikY",
  "key31": "a3SEhchjgPNFBez1MsXW7t5jwi9w7GnxoCjGL81HfEhsdGawFQYYi28a5ow1hgEgayu8zh1N71Fuq35D5DWdGBB",
  "key32": "4xBjidxoHyZ9MHrriiocEu8YJL3sQ8eiGqgx5Nnr6rwtRKK3tEMXayZhKAYQQXVWYqPYmmZgYe7CwtrgtqCLZqCc",
  "key33": "5tpjASsFDNHpqnA2KYfXkjV1VjAd9tpELvUQTNnsvdf16kKPY1ps7Nc5xahf6DBL7JqziWBFXxve5tPn4umK3oWd",
  "key34": "3qqAChqnkQNJACPfRgybXNdNA2noumxdovHFMxbtgxGSRVrVMADVDumNpHQNogmbif2Ttv3Atj1259qUKaNgiw6y",
  "key35": "SJePxemZRkW4WUVcnEYjTuYBEZ1GtXZjpt8wbXQY4LWenpc9N2xdEvmz9E9xGk4Zi4BgJJuCvGaqwjpd7LCr9Pm",
  "key36": "37uA8toFDEYAJwBtAuz6qjWaP67FLScQgChUyZ2xHKwU392hnfR2n8VGw6AJ9F8s42XFoKZA3wbndXJoRYEdk6QV",
  "key37": "2SWyUfDcgVit26nGi4q6iZJenL3jFSUDLkGMRvdgJoHn1zWBASgRhtcvdKu2QhQau7JdJ21Mjg2rjunStnFNFcd",
  "key38": "5e69FuX8cuUQkMpxDBXpUtEcJFGFbJ8FMG2w248w4SKXYV148KPncHfFnc7ZqgnL6JkSfNeQigsmyHR9xrEPTXTH",
  "key39": "2X6MWRvT3v7tsmzwiMm5Z2XgfnHzjpF8SLAGsuxSWid19VfwiMXKbqzAbWVS74gYe9PWMrXmxEADhwnJhMfqGHVf",
  "key40": "3p4Unofk5CKKd1RrEef4pCQ3KHr3R7veiuF4cKGcXh2Az7m64s3gVUX4JhenbEWepTZJKhAJS5uTCuH4qCyMyWSY",
  "key41": "2cfQve3isPmZDRs2Jd8Sqkr5MgbJvSqZWkQPjrF7mCcccUUQ8DD8SSZ7TfHUaTmQec3CGCx9M4oo1XBPxj5E4P39",
  "key42": "4DFyKMkaQ8bHVbi4oT7s2YxsuaL3F6emcGwdVGyyKtAtLhi9dH3dTRb6MEfCdxgmKBrUpDtKt11UQuznk25qQPtn",
  "key43": "2tQmf6RBvY2QUAww7HzBax2VMk57tpZRAqnEEJYeJoGUNWMaeAxeYpH3bdsJJqbWsHM3rD6ZG8fpAEmoZ7mRDcBT",
  "key44": "5r7yuigc9DmnGmXfENJyafTpWtsdrScqrZfmp2UEYQijNGGM9tjKK6ibm7mecg25J1pH3Efh1bQJAcYE5XvKh1cL",
  "key45": "4oBqcWAXv6pvaG7Ukxtfe83exewifFzNt6KazVZEEi8DMNd1gTrFLsciqY7CpYGPUivrtyRdnPmAJCm5KKYjGJpR"
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
