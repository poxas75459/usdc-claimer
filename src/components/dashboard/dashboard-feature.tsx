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
    "S5v25UYT5At3gRL8ZECADvtRUDg8zYZiRQGQSZcBFgzbe5Xn463YndGW57eSiAB4hgMPCVvkhPQSrCNcKF3MG5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nrDWSCv8zcU2Eqb2esndX2rVpCYHtovbTRcjPeRHwNYXnL21stBPWydB8B5kXW9m5GoAxEZ3S2Ds3wttwm5TWjZ",
  "key1": "3BCvE1f5pMtwmjBi3aFCMsgLvyQtGq71RswDGG2CTPA8vgHGHNN6YDi7VNxJVeGjXrgkWfcmiSAJRcoh3e4fasHH",
  "key2": "3NwvQxhdvCtFPH4H6gJFAQaBMVuW74bi7PRJDmsZ3cfgPSxAMU33gFyw4U9cxmTCXBodmGmKeYu2T3C4dCWaKM9b",
  "key3": "4SPQgAXkHz2xDV8TMt9tfgfaB3mw3hxLqy5NL2zbET3ee5sEYqw6qmnLHa3iuN5SJp88Gydgb6KjypX3QW7nyaQ",
  "key4": "2mQk5yLUc8so2EAW4oHPpqo73JCYGLWT93YrXw4HeVDSBVYGHNoZK8WnokxqmmgnYRAY5RDmLDnkSHe6EtuRdHM2",
  "key5": "4Z7asQpvjpwk9ri2DF53BHq5PkJ81mTDw2gZPvcEpXhPcvBFsdtzVtRFx5Xci44XtBM8DNHNFZG7aT3JfoQZ4hho",
  "key6": "5nmqmrTX8Bw7YVnEu9CaLgpChV4pmHc7gUNnxnotT4BskrBqPZaJQCpGwAGGPxgCrPww3cnZxotmazfyb2GH5hYz",
  "key7": "2WrG6qmkN26fNwZrypSVfSVGmoPcPLtwLMVwSp9VjeNbJhXYQ5avNAPbQyWYEpmtiJB55JQnrpVrFrH48jQwakdY",
  "key8": "5kvrCgg3GbQFBcXALPimjh2mrsqtir382NY9resq67gqQXzJEVgYtqdkbLjwqMJ7X3fHibueCXEW13KADjhykL29",
  "key9": "5zXrfbTmac5w7WfNvmQJu7vaTVbE6FJJ6z2oRzhJgZbncFbowEBunh1SF9CiNBh5VoWigNeEZBiVhyhjECxEe75t",
  "key10": "5RHwCBuEEF2uBbDMekYS2Z7F3SvwKaBW4UbSJqWWZbKVat9CbpDYNKS7KZiFD9TvnQNuWgvnpjkUhozTKBCN2BR1",
  "key11": "51EoqjDHntSx4fvia9Jbn9mTQpLqX45DC1GdqhoRqwVPKz2C6tB12ysGSJfaWPVcSX93wYqm9nk5xXRQ6kFpKnQb",
  "key12": "4W7VpP3HFZ1pd2d78WxeqK6HzGxYVxMpaDMgeEavTQpz3yNX3hyscJxXjTmnJwaYQXmdT2DkAn3y1otr4qpimSUi",
  "key13": "4jo52aFHVXpCvhuhZGWjq9tW7sooafCPL2i2cPAtRzQncf4fRMAXGsJtuSs3PLaCgBjSbjLeY6fHrkKMwArEoVRk",
  "key14": "5Ec6RF1ds93gYQiqyUf9FPrAarFenESaEg5U2br1p4LtYe7aytacvZyubA7rjQUTGFn1oGhzBhgtKxFE1rnihUnj",
  "key15": "3hHrwRyMvHdF3K4Va2pAWQiy4Bt7VxtU2wn19P3c9FWanQfby7D4Q2xcA5BeEKC8XbzaevV3zx1NRKkfnKV9E95",
  "key16": "Tobzaw8BoGp8sagkG5xoUNECDwFekEjDkvFNzEig3rNsExvK9pvtjoHrqpCzbDFbqSBkMzkG5yK2VMKmLpaqkiB",
  "key17": "4EeJu5vv3iXS2xtC8dTxktCjEx1FHQsvCTnKKsz8C3gBwjD2f2pAfTiKgssBdaAVQxz8LSDgRJgcCsBQwDQ1XDKv",
  "key18": "2JkwS4aMfFmcWYpZqcJAmXD7tSfdAt6Bxt4V3vkT1sFW2m656WnH1Bo12rZbXojQDJt1ceJQfmwoTeSVQRZZfqZJ",
  "key19": "2pk3DgUEJ2CGUMfw1Hkdm4cFHAMCzTSdse6dxLArZkmKzzzd7McuUCfgRivqKmihqwrnhHJUHZzLK938FJK4ap1E",
  "key20": "5QNUxhgmFbUuRuzt4KeGCqpJGgsNMwrNbyghWNtgpnhrsezAMCd8ztEoJzpXXbwfBg2twcH5FHHjT8RUmThxjtti",
  "key21": "eL2k2h2SYsWugVsu36vvEv8Cbe5Bd9aLj7SG4S7HNQV5GDTApEjs64DXqcWa5LygP8q9nyoyCBdq5i3DUzg5jwt",
  "key22": "315H62SNL3K9ygfTeqn2KyzDTawRhhRUMFYb71dnAuQcrBTsxFh3WckraMrVow6PY2B6RAv6eQ3kqwma4oxYgfak",
  "key23": "4EdUtLjUP49LPRjLJt98HRg23hXsrKDJoxZP28BWzXpZEY28inFt7Xuw9AVAqJkjW8DoXHpE37cjBXwGJTY3tEuW",
  "key24": "4pSJ2y8mnqTNC3ZMPFYepDcvD5fy2pU1Sm4Bt2qiggfzjJgEN5DJcC7wda3VWDYCmeX87SuPVd8Xb7GyUfy9NgnK",
  "key25": "j63YTJhFJKDxqp6Uc7xjKcCVVSN4Tcgi2zXsGDtaTNt3EecXHNLCVV66PZHWquqmJMEn2HiJC37eW9FvY1z5cyz",
  "key26": "4A1pFhSNX4m4CKSqqrcA7n4vUojKBzvmwvnKW5VbNxmxgTRFCWBFHDDRLpKemJ9aMLhmjxQ1CnxRJxyJPfrYcVHt",
  "key27": "2WENXwcfPHya6whZK4dhdRcm4MGDpjBUK1LwDWrhWpvHgM898gdrLJwtkg5JTkrPAbWsyYpHVUdCpMi9vZAwLAYr",
  "key28": "5J8HX1UGN1XLQU8T475v9ccZFfWY7d7SEqeCCfPystwFYSvXQbNgHRiwrd8E9cWqN5wwkFDmtJrpJdSGnXh8i921",
  "key29": "47hzC3oK2GZFS58jtQgWE5YkWKCoApYV8BhfmLdxGy6ZcWSJERjv33SFtHDUAdwD8cG6GdcbMZBc7xMxrex37awk",
  "key30": "5YapLVfJ6w9yU1ZeW8B9FAE8s3WQvjKLsQjLYJhoFje5jcW3iXbxbgHSRkLeAeXLzgxoZ1WNdTPZHE4Mvx5eQwUh",
  "key31": "3SR86xQbR75PxF6nLfWey3ZQYintKaeR4TxVYDYJo3mE9pY2DHNh4SxbRzYyaQEaD2T83do9jQ6LeSUM83w27yW2",
  "key32": "3645wyTtbwWbsihfv4hisG4hh9UyeEJnCCH3pUqqt18y3f5CdhtrQEdNttXuaFa5bRDATD1FAq6fjXG8CtxXxVP",
  "key33": "nLV3UAxpEnsZDi3CSWfe6QMgjBfeSg6RsVy41fm86EJ2HQEm6MMr9fkMnJoiEeNVMZC4bKJB6PJH5jN6g5ZqBjc",
  "key34": "66YWbjxPZ3684A9SthJjFmqmY1VQKxrLwT8QvsLm7Gt8r3uwdd5DPF1HgiDdwMvfH8QBFG5UqpxM6s2iFHe2jxbM",
  "key35": "PQenz2bSR94m4Do6ah3PgdRBgJTa7CBLdZEmxcYNEFaH9enYgdvNh4iKK6KMZQ3JqDRyd7LsBV2YAqhHYMHQ4n9",
  "key36": "3VMSSfWsq616akHhbtk4V66FHQcqYETYbZU2Q5AHaTX3tK83oepY25LabJGjCE7tSDvtQ7FSR4yvX2dQ7PLvAbFC",
  "key37": "N97tFZZJqu3CPEVM9HDRKSD7D749qdT1Q8zjF7Z3sEnXvoA6rtMthDYS64vo79GBENQnxJ7XpN6NSSgcWjqFzAp",
  "key38": "2t4aybtCRz8Y22ShVbWMGxTaRKpj5NtmEx4tvVGTC1aijiJRPUqd8LrF3ssMwYRYuMTY7PhwCqEsb9XmYJfweGuP"
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
