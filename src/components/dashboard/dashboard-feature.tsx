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
    "2HEVWRoH2REoVf9sbUXVnpcN8iK3SeSiCbiNWYLLg3aKzDzv8QXyfZxmbP1CAwYVyfvrUUTw6e1xsMYkZrjHg1A2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f2bN7FZVfqG4L2DT21VtwyDXCngpKPTPQwTn1gsUgju6cwdPXqhoB9DgUabMbaJBEcWT9xaDvWqLJQEQjRJoR7z",
  "key1": "5MLsXiwPnmS9afAwevrLr1R1Fic4bdcXYeiAJqu7SToLMKVg86DvszU48JyMJJZL8KMuPKivsJSWkrxVoMFvDNMN",
  "key2": "3GSxgJ8xuTTFghzPabJkBEChALLmHgd2tURtBMmmXc6Sz2zEm5WM6Vx7M5opF4qaeNepGHgK1889wZJuWhyHrU2B",
  "key3": "3MDZGCTo33DHNwtvGPRwgrKNg1yxZYq6nwc2D3NentiTxTaAXFZx5Gh5cDMcDSbXtJotUfN1jAYNyffGuHdafnwB",
  "key4": "4vfcbixXjWxu86umjSZNskHsLThsvpWSjs3FQSw9cfgixRWiGyFbWKC2nFPfBa5C5edhVgBYq61raDFyXnYT87n",
  "key5": "4K5UpzNKCVp9QqcUQoPGJLHLfcG3imMU1fXkoqTut4pPKMGZDa9YWPZ2SEGLTsoyYC1xeiA9LGRwikbR73g22PMX",
  "key6": "4vpcv7J6geu8H6T5w5vQgi26q4AkLwxkA8zAAWnhzVEu8ioAW2PjZnpvFkoCirC3cjRJYfWH758dGAytcwhHoz2D",
  "key7": "8t8iB1C2JLAfBWmSDBgPSZ6JCoe49d7mUf7XS6uo21sjHdEGQz826w65Y1Q3pdKyY1s2rEC62t5L5SFnxW6i1VP",
  "key8": "5Aqo2fJoY1Qv8dRitHYWSgfaSk4vxgvjPBpTUtPXznHW2DMJmM3TVxNNWGPq97TDLZFhsHggHsNr5EfFq6Z6CEde",
  "key9": "4tNLiLqu5qiy8S9gHwPyqs4qtRiaqEtVuhan8mdcue3jabmX89ccUD7cGq1z9zVpVPLyuEKJcbJZfsxoWSJwRbk",
  "key10": "4p1z6hU9JtAX3CGfG3GJy2GXzAwFzUDc24jPwYX3Xrv94QHF2adTx9fkHhceFTbvjJ9H7q1XN3JgH8vkULyk974V",
  "key11": "kfJoSnGX7VQw9SUfmEzdRm7rbsrvvod5bwV2Pn524hw16F6JtVEGvTqpKMEv2KuLDbBu3EVjhsK99c1JzK8Rm6K",
  "key12": "63WYtn9cbGbxHJVYNH5mkCYjc9HrosMBS9uNYNSrdGF5YTnz9yjKdWtoAUYv4HW6rjZMd4Gt8YBfmGPgoxDivdLz",
  "key13": "2T4CnfahLrQAfeHgxp2b2Ueg9Q5nLjBtjnjSFdPKJHFQdJNvraQ255MAff5Zi1m9MJB2bmhGaDVgN2YMDF8ASqHZ",
  "key14": "2mVB6xvkvdCWGbpsthnJTUeKywNKSE1JbBzQuXge3qMv1g1FK1UteBBK2W3SGVcZvzEpMDmB7joKmnqTsEinBnnw",
  "key15": "4uCed1AEXXKokpGXtN23vaCcyzPoDMFuJFcY6RTidKivKuLTtbTsefAsVLbSrcgfLuUhiCq3fzZuwA6WasyxBviy",
  "key16": "2DfHpwp837bsEKdxcyY7pJ9K1Lu6LVmCHcsesAZKMBARWC3YLCrhc5rQELr97qSpfci9gQSBHLrhEksGQ7AuKkfz",
  "key17": "8pWqvEdhp5b9HJBBSYGWt7T4s2CcsvrPhUF2haBhdw8TSCm3h6qNiyJme8Lhba3jxVqQ7eZZACpXbcYaC7KxjSf",
  "key18": "GsKoxmr6DYhpDuzqvUTbNmJuvkFjA4zZ3UHshkthsUn86Y82yWQ33g5WTpPXVTgryTfPdEBywpTzzc5TC1LX38r",
  "key19": "65uxWN8nzsFZSHQqixmT4aMQmoCZqKishjCNYRBMioyEPDMEgcMa3akEjrb1Qqd73Z4THTFPjb1sYhZ3AfSVJPsM",
  "key20": "4qnMpbgEzzcDLtUmaBzJq7Jth3QtbXBRTGSqP1XAwLxYnogcsgLsyzzJ6so7zKJmzcuhzxcWT2SGZBsA8GYRnSwh",
  "key21": "ACGxh9tiCyUiGc5rFLGA48JNaZedZXzdHZfLGsro442pbRdx9Uc2Eokno4oXE7HsB9WMKuTK7fkbvDmRu77a2rh",
  "key22": "2V4P1HctmKFxzp3g6j7TzCW8ybtNWvo7HF3bMgDiNUky6BCBEStxSJwfCeK4BVx9wYGnHX44WLZeqV87dDBBg7oW",
  "key23": "3NcnTUbbhNnxECbP2SSrMvTBiBjZo5vE3J3gUN5sNsiJZax43Ew1gnc7mHqBpthp3DE2x58ig8kHVGQZCDheKapT",
  "key24": "3kG5NFSoK3H8MitX2jB2RPwqRPkbGjEB89DZKGtrAkeG2CCfB6KWBeZGxaCYctbdtjwHaT6Gpj3GNPmyinZnDvv7",
  "key25": "4PzwPxPXC3DJZEnQZP48D7bkGaz3ViyXKnVvVjZJfXc1FJDGBXYnYSqdPXy7fMw3Ber9Q2FoCmhTK3FfaNnQfJPL",
  "key26": "3QH3YWq8FMbdc1r7tt918QgbkF34A7wD7Sv2WmsduH71tFYqQ94n8wSVGWCAKNZV3jAr7431TbLnBowXAJhfCPgj",
  "key27": "4VfEkhQ9gbFHoGuTWSdvmLsScKEoqtFJYDU2JWp3unXzrUZMmTuzyivNbsRhEkzTy5JeKqtBooXgHgSNtwRFP2pR",
  "key28": "5gPzXru43VZugDnxKLK2N4CGj8exPBjfxZ1ZMSwWkBUT6ePccYQWnTS9sWHRM25Qrvg83T6gLRg5ufvMnWvHjnUZ",
  "key29": "52nh29nYVi1NCar5gwvrBsgGTuxx8MSsJ4yHVNnkGCmH8sEPxAN2HCYtqezDGgH8k6Zn3chgZ1jyaoGvG6WFGsn8",
  "key30": "364H3R9WgJfChPbDQzbG2QH9RsYFGw7YM1cmXk2F7CfzEQLMytQLqU58pm8cLiuJJJgu9qNLkZmxzNGYEVRDNo17",
  "key31": "58TrPwYe2q13cyh35vP1HEMrQv5vBkoCUZiVeFFipFWgM1DgnM4347khaMnakmN9YKJPXuQe28xfV1pppE6Q9yX4",
  "key32": "56D9crucpYo8PWHkJpNwyqXbWF4pTEJHR486zp6LNcSf7yJSd9VLVfVWxNA12CgzDXkDvwUord5CQuHjajzUNBVY",
  "key33": "55vS1vu2sbmpSoqfRrPd7332jCNNY5iRDVP2XyeRZh1XXxY6xHUnNKyhTeBmVr3d7SXZZ5qSjTR1DjYnpFGHv3Hz",
  "key34": "4y3jhYsWCbBiEmG5Wp98yZbKcdSuDh5C5Nq93exkoQFn8RWysn9QGGCSHSYupxi9F3Y6D2cE7ZaJsQhhXzmEPeES",
  "key35": "bKbNWmCgua8P7t76278xygs5nEVPQdns77VMpb4FkebuJsmuKJyjTdCj1nzakMyRPR8Y5cKqSC2DsHmKqNyq4bY",
  "key36": "4zyhW98vfaSb6J6rB5tmHhMjHDWTYLzpfKp8oHdho9Y6pNvD772ZEpvrhJsXLrFfAtTKzgvc6BggaZF1y4sf9Mx9",
  "key37": "4h6TgSDDTDMRh2sjJxdM8Ra8nJ7feoaNNdGsN9Gd6Qi1VEfg3a2WekpYi27Ak457LQ1Psuoj2rT1GWbRjwBdHqCh"
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
