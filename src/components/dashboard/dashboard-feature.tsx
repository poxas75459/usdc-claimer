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
    "3puVdV7KUhfkTQtNqekKVGkTRRSS8yPaprtzRVo2ZrbC8xAMTCfwVMKAc4FdrbWVFp12C48iNJDDomdEMSeSNj2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nFXKhmXQsCCBVis9qrCwh3BVUf6eQL35C4XBoCgHdUqLuWC4GNBfmArHKePGqMDBab1NaaCjCBcCrHHccfy3f1q",
  "key1": "3LoopHmykMnxXD9MSgd9RVhdZHVTL2kYvFX2DDEQf6aiXAow2eooXqQALu5tFSPgJR19H9yKHXA3r7gygAuRYS1V",
  "key2": "4tZr5iQy1KM9Zaa89MmK5aemhwDkB9DZsEEKBngAnFoU3SzoX77nS12W3dsmMhy3Gd2GohTJ7KUpqpKCK2wSmpw",
  "key3": "5zqeGBswdK32yfcGV5M7sJDQKMKRcynGZKLWoJd19KafXu2L1wPg9sDtVisHGAzsR6RcZX5ahS1RU6iEz4NgGpT3",
  "key4": "VZPumiobbQaZjgmTYY3Z3bBzwTwDEob8pM1YSesdoXac6grwJ8GaQ9ZurJf1S2GKc32EFxNWGu5nJK4fHbdncn6",
  "key5": "456yDjy3Nw92zQM8oRyKAgMhpDv7Ns56GStrvAxupcL2LrTbjY7sTvojKJg1joWiNa3JZ6J3dhSraStasKGVnWSq",
  "key6": "4tBTuDbp61S5aC6qxi4rtcRcPyXyYWCiZwteVdWWNTL9BB3LyKWceub91EsqQqhKQWmk9vfcxbTdxVWQsAqVWMqd",
  "key7": "3Q4Xri5j8jDKaNgjxydij7vJ9z1VRcpx6FLMXCY3u3HVRwWN3EV6gcTeJ7xfcvjXa1wJMQ17TZ6ytwn6ikstJV3h",
  "key8": "2TAmy7WMLiUG8qYovLtmknPvrSahUyQj2D8qeDS2Jrh16eN2Rq1Ugd87gFhzHaJqwZcMhHaJ7EP7dG9mRkwFDgzW",
  "key9": "2XGFCZ3J7n5Ab17HAHmm7mSjxgHTuEV7uAMDDEJwLjd5iCGaRJxzGd6KNPQK6vRMJ5Xv7JG72c6X74DmKx7Z2DPa",
  "key10": "52GPZhW6TDTQmpQBEbLUuS26xxEejWz4GCiDS9irHtfcNAbSUcRWaZWHPxCNtSYt1pU9rc5FeL4cA2agJ2y9fgQG",
  "key11": "2pWVLP1jkaskUpJWga1qQVfKRniNnDdXvphzfCuEF3eTdhcpGesKhSjuR5uuNJKX3YWhoZ9XNVtex9iDH1uATzUN",
  "key12": "DD3VEcMDfjvmcjG5A8DE4doGUPqfYGfnnExPkVsf9XWvUNC5iwVnjEFzmJNHwChWuqNaodNGaR6W3zsfbhSgUqm",
  "key13": "49Fw9dhZK97pZUpSki3MovtNEQrZLiUuiW3H6Aqx9XRmWbrKSGPeTSebb7TymBmCG3D4AAshkN9Gca4YdSABn6Af",
  "key14": "2vqRcqvMawnMBEyiEz3zW4uXb7zRuofmyvoFT415PsUje2WF9D9Z76W34eKbm3seBVbS8VGdxEyw2TQ9dz3VeyZY",
  "key15": "3nAbWyMUqYgPrCzjXe21PQ6kSVekRQEN2X6quCKhrNJiA5aC67TWqr9ZLDYvnSseqosVSEy4KcwzNqXJVRCvJ2Qw",
  "key16": "4wCgfgzUffert7UwvjbPK8zoe3s13gzK6mUCLgvPf5eyw73HvrP8zQoP1dhzUKo3NVSt8pq1Y9v7GU4h6MGVTLHx",
  "key17": "4eTEburWxoiN6MBEMADBQUC73WSipMEjLTPjNk5AzVWnqgLuL41R6FhAvvqTv84NaWyXutkPtWksd3E5qvG9dkyw",
  "key18": "3qC74CPB42frmH8oN4G89XSBpoGrxZTNJ21zT1sRf2oi4vFoYw1WY1cBQKYNnjixAJot1rVZKRE1GrmhhSDPcasu",
  "key19": "565H1VEr7oZUhJPDuDMW6MnZifrtddnR5dQ7AiY4C1sLshqSAMpjJde7iU3jtknBw7pMk5TJMo1BQdHkcMXTc1Dk",
  "key20": "2owrrr4R1GPJxWKELsDxvfpFbHdyT19BTDSpMZLPv6fTzveQRznJYGqfFdVQmSzTd7zZAPhAeCyT6BS5WLrDmQvx",
  "key21": "5fsXTCmMGKRmh6dAvFG99VgVpQ68UyACGVNWLD54tpY2yqt7Nr8NipU1YQKmBuv1iRzUq95gUkQ7moGYFyMrvgue",
  "key22": "4aZhYSLGhiNu8mhEjaduf5Es6W9L1PGEH5LDBUuiRGxzmguZ3Cm5oxYhgzAt7DJ5EDRHjqexrLBuNTuhYtqXirbq",
  "key23": "GEc2yWY8yZ4RWnKrHDgfVrA6XiZri7cb8rkvjaWzY89MtGTZrV4h99dmyoiBZ2iJQsit7K3w5pwhS9cG7kukFcb",
  "key24": "3srUBmUjSGDoJBMJfAQEQ5MDt67wEq6pv1MqcGFhrg1t7MTcfEE5gsPQqtufzMAJBpn5tBLYL6oPb5BiSkpVWMJK",
  "key25": "4qPKRM1eSzyFSUDmneVfHY4ZK5U4zNUqTw7J6eSMPq4WbnvheyBYFwEGBSAkrQ63xkBzvXZe2niPogXxsxUwfGyi",
  "key26": "4Z5MBADYcBisGHMH69gxGk9cfPscY1KD9ThBUJN4SESaSEM7Wj3i3vgtmVTDpmSXVE4f8GE4uiFttfH7zbpgDJLc",
  "key27": "66VevoRuNMrS2BPqouibh7qTJrVLbdmZ9a57qs577sErsM5PMWd1SGPmHzNcJWbCFNWW2tQvdvh8QmzGNwpJE6vn",
  "key28": "3DJNc8mfzSyKJbfn6Tk4pJg6cfDZqDwtSsJYnt16BfRKZavJ6cJZi2wKL4kLCYYNpCJbCnaVcr1vtfneEVV7b45d",
  "key29": "3KSSeckNe65gbg18g5SuGb1GxLNRCeNtJNfDyhCgP3HMUC4Aod6USTdTN8hrHL92itcEnMBM8KM6S8Lj1m8PG4Xr",
  "key30": "5RskZQtHgzqxwy79WrHk6FT4GG2bo3m7fEFhDVuhcV2jgvXkP5o6xU9N2MJW8T9ed6ZVssmQQxzDVFX2bhfJJTKC",
  "key31": "2Y2Hh7PadV22Jh9C7qXAnBSRzAjq6T16T29jxt1UL43QqJ2f1tje6nHDNFB6ZvspRqCXBgtKziSt6g4UqVkoGmYp",
  "key32": "4ZqexK9HVj53wQtx9vrGq7Fjrn2kKnVLphVi6oBzJ8pSuHXQ2is1wKNgDTr6iAPSLjysDme9gJ4fPQ66GCU9g824",
  "key33": "5vyDQcEWbg1fU2Zak4bKBkRxkcVMqsQqKFgtYF83mupB7HrgQrbR3wha7hKsNcWSMdig8PwBjo6d1KKGhJyQxY6w",
  "key34": "5MVHQjbnn44s2rxAUnGGfFEy46fNdfQ9XGRGQWWEngG8CqMq7CoSnCHqVMHXqNSsbuze6yKciBwhaHV8YzFBfXNY",
  "key35": "k323yMaLCewgkvYG9gSmxdaA8GomzpnHUuxakCKcYbcEGjPsxS7mr5rBKogBrqcLCr55Ed1fNFWmgGoGe7yGbj1",
  "key36": "2Dirwhuz7mbPMo8968usvfECKi3iUyVm9edFjmAx5rqaAM42hFBG2S3euRQUKDcgRCoKYqxt7GtjYh3jyHAWPyA9",
  "key37": "2YBzVbmHqz7NEKTUQZUHnfwekkoeBodc2PZ6Spfn8qAZLDFRKNdHqm5yC9atWfCuVDJ5489euoR6EQ4Z8JWGahQ7",
  "key38": "34uuMtBfuSaHJJX7bYk3yPo73SUhN15cUQzdVt5EWoTAaSbF9LTGyhSbRUP16hhZaTxzBZATP1SQQ8RmKQamDNtc",
  "key39": "462DSEpqy6pYBSxqHAkd5eaDw1eBHuNFx5qEPGgpcgGRfqoQMheJFqG2E3q1EwDDBAimdYsttrrJxG9RCNthGipg"
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
