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
    "45CadQCtFC5NxpbqQ1bBdgqnQs3Crs7MTCp2m1QmF8H7qyfeYyKc2nKKx7JJ9bmY5hLxgNPAJtCncgf3Pga2uL5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mbrud4ETDVB7GPvACfvkQ3gCU9DX5vCTWqzSjHJA8LU8wnhB2ezft5nWzwFy5hZTS1t5ks3fsnwzSp4RAFjdEe1",
  "key1": "4xbKJae3AuVkiMkHMQcpySUoVunbU9DdPwPbQ71PWUMhSFJH187ZqPhR3ewU2H5PUcwDDgr6Z4cGJoieX7P22PKW",
  "key2": "3xV37VzotRmRceuD4ahrMBjoeR5QzVUoLpDu1QpabZ7xgCaLTYg1bS1YUq97JL1E6q7cmP7oXQd9xv2iWtgQSJBG",
  "key3": "3wpksPLjGWFrRPZ4GdnxEGVv3RFmvv5iKeeBEnuW6tqV1USkT7w8vRVdpvsMTCUeQuSYFnbmuYaiGLnZfgfvUFGW",
  "key4": "4taEVdSvMUjq19GM9pHJoK6dTmziYFSp9whGDN3nKuS22rLDrjFWRewYRAKar25uzCvCDsXtsu1qywrAjw82M7jv",
  "key5": "54ab7exZroTRELorXh9h9iyweFoe88rngzuKYJRdWhRFvRcn7kXQur8pdUaeLqKiGpSqCp4TpjTHngNAQLoNzhNw",
  "key6": "48XenLbwkLNhWCxKMxt6jx1bhHN2eW6HHkYDFhwZCtqHJBMq8vryYMgyjrQFXu8ovRFcYPLj5u8uNi32YpSXuBAU",
  "key7": "2i1jP5XmZaHLa4Smdrw84LRwzuB1U6dXaVeU7zdxKVAm8HuSxzsykSUHm6rYpefbfjQvZ8Hg82r9vaSjKesmuNgu",
  "key8": "6FKmknyisG1XNT92xhEzoN6dLoNWX9nUKuKPzX9NQNW7Ksa1dexqJDFMtSRQ1dfB6oWcv8wAkZa5a9u722WwmVk",
  "key9": "39Ay4M3D81cf17BgmmtxdVWynxW8Pa4gEDaMkijSaSZAH6WqGo2QRW74CS7XZm3d5MbXSLUZb9XcQPvpUYziRSmL",
  "key10": "47DX1tXfzccE7kB8fC9wBP2XHmRDsPCJ9L2hC1hWVpxThnAeCDDjEUj2dydtrvJq8JyoQ8TGTc4KwwtLrqfythva",
  "key11": "4hiqKtq5HRvijc6eTPRKNdEMc9Txzhtn13J1FAMi2jg8V3ArQJAu9Drn4KA75VJK6gnT6y727uzhXFjKMBKvf7TL",
  "key12": "4tyWpS9Sph1GjTCunnuUCvPjvuxwegCjvhT6N2afR6V4UxoXDEaKnNrcKFaRyZZ5s7hF1uNLzjGmojxRak6LSZva",
  "key13": "2G1kdGBypuiffaHc3kiaMBtkWAY9PPTwUUZ39eMciEL2z2R3ZvojGBDdQMJ7J8zjCGLkLhqc8WK7M6QjvtE9Bgv9",
  "key14": "S2X9EY1tX15UqcogJVHFcyWuQ76dkggnR2vW1psm5zyht9UwhL7MCZVXwY6CVcwCgrotKSifycoGwf538h9AuHu",
  "key15": "4gmcpRuayhsSmEaaeYjFhuG4PEZSeSyeeuBm58zdiAVkZqqy9cai7aLZccXQ3yVB2V8rR5iAipPG5ZoQTw48QN1J",
  "key16": "4MQVuQWXijzroUBEe6CdxWctJcKTfPp2hrZzwsMBuZTGQttJU5GQaifxsee8q2kpcLNALpkRmY7oc9rFCCPBLAsg",
  "key17": "5xfvAznVn5ZpgKKfwcQDKYB3ZQakxnYBi9HgtjfFovxW9RF8zWJFUKR3GPxmDJUzSTZev1VEdn7jMGQ4as5FFivz",
  "key18": "2RowcBWRQWuwSP1Qn3PaCRjqBpDhzMDYNk8zM3RfHDk8QvG7rpzpJX7gscj9wYPZBxDHpczAh7uQSgK656EZBz1o",
  "key19": "5gk6NdX9EHdxGryAihyMvgCc3g4vy3Ao9KJQ7XzifEggyJNpgjxtQQhZ6uw9KvozqB9pKXLbmcAxEVBGWxiCkwQS",
  "key20": "2gk2RcXR6WaH6z8DNqBFZPSvtvYBqpBtCFTHaBb2yBTEdERiWsdB4fUMtjKHx7bnLrgUcNCQ85hTiw9d4yx4gtxz",
  "key21": "4PMuMkKnCvbq9ZSDrTTxmr5jYagxZz2aomiKvAnwaDHumQsEeSMgMUF494sDfqrbqWS7LhkPyPX5R9954rPP8YCc",
  "key22": "3fnysy6bo31NMiVzqPL8WVp7LewZDsxi18Q2AYPDpek83ntXLvuUrKR7HZgh8FBbp8fXLwRa9kFjW6UKH6dYoXbx",
  "key23": "4CtAAZmzx389huMvzvhk8h5aosWWJS6MCH7Am4o3w3NmKHWyJPJZLHbtFocUAd1GymLnKD6iCsBGWL3DaP3JivuC",
  "key24": "4MV89gtfDSyS6FfPTgJsTvivJBPZyeKLGANxNbw5KRgZjopEJpihQNnx4dUT5eGHBct82WLxMbZz1i5wVnaRQXZr",
  "key25": "2vLcSTThqbaMkcCzWKBtoK7dvH8M2RGXiqh3B2hbBsxRxWnJnCFpBNPRjDFPvK96N2D2GnYzaHkKipanEfqQjPWC",
  "key26": "3bkDtaJ1in4AgcVuppWHRWDASDZriUYqWny1CoNBqSE7nkWmDFfb4AZcD8frAY6MCDWM9hQZwVFtxMUY9DPUaX3N",
  "key27": "5sPfSVJ6MTFXVyjVaJLr6z3ucqWp6iCL2qCWFVNkhH6TYAHT6Jx5rAJexoAJ7SNj27zYcLHgcqGSAeRDTTU38kgb",
  "key28": "5mX7unjx6ouZLUqDAdh42fdJJ66gryhz5qqosoMPh12sRty59BmLNLb7GTj4P8b3HbT78J843bggLyVsnmrqzcVj",
  "key29": "46qdyTjjdpFFNL6nfbif8inyQ65LRwwdSiaWhv2eNnCPscW4zJHECpjU4euuob1vVA7Erh5LBELrbxfm3RgcEVHP",
  "key30": "5eQos9v3WXNReGwLmMWga4Ek1LHx39XeFWTTqf5gcY1CQ4TEjzKvy3XwpZPxSVCcRW3g1qD5zXATzEX8k6yCp4S9",
  "key31": "SeUG4rrp8vErb2rXfN5gjZ9Wwk3PeM4UXzAiS7ZhjmcG2gBLyVCMavrEsjJKHR3XNMs9AZio21gY3j5mqRPwSqd",
  "key32": "3ZpeskT4TbhkizV2B5i2RHcXX3F3AUKH1rcpNsz1o6ZhenNHfFv3D38TwknKvCyrwbcaT6z4PKDe743edEfMXxKp",
  "key33": "XCT1ZTQWKYNLpZZQ6i9Yq5tTskdnhuxjLDK6frtcCbmr5S4GQyiyALnvUPfNtuTxXdtc5CxSj8oHJ1iSX4qgFwj",
  "key34": "4n2Uzju7pfatQ5rLnkBfb37ajvi369NEzzq2pJnpC82FERFt3vvYqjNUts9FDevXx2bfuR5refjRX5BCadYGHNPC",
  "key35": "5jXyDPTAnDLceDpvUip7g9FWijJ1HsViBJBsijLR7fm4AN85aQiChMHwoEXNE6MvRiGZBbjjBMmRueyRw2CvguwX",
  "key36": "37fkfpA5s5ZV2cr6aKBydpU7aevzpzDdSaWXwkbDX6f3AyheAkDYf9YyPdUSnUxwfCqpEZQZqtVexAeiKvG24fSS",
  "key37": "5TAR9XA1qQTxZfsbKcRFSRvCyKe9x3PbQLFqvTLUXoqnZEtkSybYMqsFL5ZM2LnPNaHXsFqdL4S2hoNpvyNLWMfc",
  "key38": "3yU4s5Wwzpirt9PBoswsNy6nKcaWRivUZGPi36Pu8x6McbEDnbmk741y3vU8tskWqaFeajK6AsRiL7dyUSS19Xwm",
  "key39": "56vBQ5x9Ef3KgScoW5VLKoFSmVRjdqmZkHyAea29v1MvURyMioaoAzG1Jw9ggz45dVXaiJ6HBJbnq5A7YSHPeP9p",
  "key40": "2ssW3enyU99FdCUMusj8uFNLPENhrShHxjimmHQbpDFVmUwqjm8WXcbh7QQxCqShkmanwJXUWpPg8g8suqjrWAwr",
  "key41": "628ZbWbZGM6p6rx9k9K9D8ZxLTETwoQ1Ae1i5w9SBeWtiHVKCRotwSm6HkdL76iwGoZNYywt4M9DYSz4rMo48Ayw",
  "key42": "24v2QxMDLKiHLur9Lm5zvgz5f1PY3tQkqozZRupfgCnpteEfmGdJAhps6vCniLBeEErk14ifDhddxwStpvVSsDEt",
  "key43": "4F5MZqJz8m7ZsmHnF6RiVaEEEBBieme4s6zcswSzFKAjYWKyP3Kcr8P2Ba4JJiFC2fKygYiS3DybYzqyBheW56UZ",
  "key44": "67oNSUQ9gEu2ajPEuQtbAc51RcaW4q1riY1n12H3kkgGjpNpWmou9PvhTffKLMemZTEksi7GoQKJJCigVrSJQ28c",
  "key45": "s5euxtqdHfbFZNHecNPnMr3hqjiRU3oCiq3uhMrCHjRjUX3xzsz9cx3WAGh3BvJpziquAyMaFTnwxQ1Fmv749bq",
  "key46": "5R9AS9YETDZfVZJL23iHxbjD1cBEuv4q5aGDKKcynFgSeA7HtFjjz9Y2kz12JPWNKj1UPn2X8XGV5rWgdA3afGNb",
  "key47": "5WtEjK3bEYkxcwewhDQcyf11spgDm8PamHh2TjPoDWTTV3aeRi4F2VBfjRSJw2aS1kY7duTxQDmgVBWBTj7BDjJA",
  "key48": "2NQV4RPtkevL2Gu5GfKftRwLU8YrnTEMcvMes5XfJxfgjuv66J2dxncU7mFhD5k5kZ3H8Nvyj7vw1BpN91m7C5WU"
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
