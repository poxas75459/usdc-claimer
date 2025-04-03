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
    "5chsTRQpoShzzb6SNEXDyCWMsZCe6u69xqJL3ASKnRGZFYzxVEWBdCJ7HwEybvtuzb4aZJcR99gN1kjaHnRNKAk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KJafXsdo3L9os39txFSpZXTERG5kukHNPDBi45aNHLbHbFhVaFKECEQLJvsSsjXT7zdYyGVfoAZqn1ZAyRXw4Eo",
  "key1": "2Me5hGhpPcz2Nn3Lbr3gVF6ywDPhwyHBsFJxSNnembp541cwa9oLMpsSbYkovWEmstJdyMABfX2JbtFqaf12M17D",
  "key2": "2SZKMpGCkjRjqj4hiPQXgpJrL2Wk1VTpaptYpzTjt8QLAedV3pV1YbEx81nr8zbs1tjWU3AZergvgbGEiX52UmUF",
  "key3": "34mFSyq6zx1bxJMwvQzBynFtMbWcVnQXD7Po3C8NoZYtBfZimkbaUedvQ3qH9K4AvvSb16dnGkYYdqK8RWXTsLAo",
  "key4": "55MeGTE8tbqRZqvN8uPzuL7Eoy75DE3FkTMNs2BJCDT35VSZgJcucqqSM6aAyEVNVxTAK8BMPWz2xN8gKpYg1ccD",
  "key5": "4WGBeURA7i1o9yWxf1dJ3u48o9x1CBnUBsqkz8MKmg9ZVU6p7GFA4jpHjjA1SB6jkVQMzXrbEk5hUnGv9dgmxkQQ",
  "key6": "JFLY9LaK4VVq6TubnE6FKiydqVkweH1AVrQqeUThNLDB4RNnD13pxK83sKsRwMa266KBMWVnvtNPew7buPHWG11",
  "key7": "3ZSvT5LRSVseHYqdc1yDDh8Kxqc2HqRFhY6yktPXvJ3vFhq1XePTigxnenAT1iwduyVJEVKPNx69xbRB9C2tMt2F",
  "key8": "48Dw3oq6TaRnskHgZMr56Uv3j7ChZTXhgmtCHyLmqKNuFKN21ciZL47sFLPBa7mg7HGV6D8aypTf7FeFjA4jnDKV",
  "key9": "2LCG65KqsPT7jW13yZWwzLohBgcd7QW6UeYPt8JhoTT8wK9bULDSHoG1MdjdyjXorVYSgmi8KtbqToVJsekhBeaK",
  "key10": "3PthraJQvYwKedF5VEq7kQh8vubqC9QMGuJjwZwYwTvV1vnWRDvqunSk18UgaMiiyxc3K4hsxrkMQYDo5ZxL1kB6",
  "key11": "4jcGamMvLy11LkiXmY6FngsV1Z6kCvyuf1239JA4pfrCx4VBSTUd7mmSB7MCBFGoAgLVtfPePSmaBqF8LMwuC6Sv",
  "key12": "8YzpArtM1YoV4FbMRMoKpZHMWoVwgqbuvQAzBSoR1YJmW8gJ2E7HgFsRoXi4NuwtjDCMr2YCATZs53ZqQtGaK3y",
  "key13": "3cni188e6bnH81HC2FQZCUjuHeL8H6fuRKHL48WJETxvvjS4snn3QjMycHoSZuWWCTiB8qAJr5LpbPPATWURAs64",
  "key14": "rmQFyGFpb3TnxPKmXNPERdqXsEGbNisKKZdp2T9GRQ7rV31HQhpFYw5zmQdBJNDyC4vbHQFdhUs58MXDt528H2S",
  "key15": "2NaTaN4bydA6EgXYshdZtaUGiTFcx2SiPVHJM5XGJfXxBxnV3po7RrTqNiS5NnyFCupcbS5Hpxpo4HR3awJvjQpm",
  "key16": "3cFigEV6Y1KrH9EiTspC2AUmh33RWztHFon5yfpSjjeWTCwCYLeezETGD57FQL6mdv2W2KqfoxFV1nrU9QdyD9Tj",
  "key17": "2pzbyKDmDVUG3nmZBCXxDzL2yRK6YaTrFus8yiPJWQtztZ7JAkE3jZBHDKnXzvtVQHVDs4JF8V6qyXaXyLEpzdZb",
  "key18": "2dHp4rxox1GWkyRuLdFEUCwZyT75pnjrZa5emdAeR3bQtERvw5Ar1ZdrVrKS2foxXTruFvDGbMvon8692dkDaF9j",
  "key19": "5h3RKFSxBBTthLxRh6cFMEPFiTjYk4gUwfZD4tCbL2AHNzDdhTaJWQqbfCDL1ojpnBQobT6qUbYX7oPno4Z4SdYn",
  "key20": "5kJaMHiVTjuqzXAiK2FRqTeKJcGwsWXuk7XhPFxP3HhrP7zi4ur5yXTUPcKemMe9gkKxbc5VHx3uCZGtULvUannV",
  "key21": "3bfXH9Bq8nDrptTPQ2sK6qWDyPQcXkAKDXCajFkMTDDCfGQjZcLqQnTtjwKYUeeqarsNaZ298j9ohYiX8ddjx2Bj",
  "key22": "3ZAAkQrh14yrjj2JcdreF43pAKv8t9LDCEu9iNbGXVT1hyJfzH4aoB7etkzhhNKUKK2msFXbuSpZzP4c1aZ8EhbV",
  "key23": "2z9tDa24BXjkQWwEHQZevpnPUq1B3ynJXDTWosVGNtyNWxp9EucSEzoFT3pNVie8tCZAitLWEqDxkyQSYiuuGc4z",
  "key24": "3FtSrfxATBveoMuVqB1eLWDtDZefpyc8LApCsKjghpSFLybfq8gK9pWbHy52JDZM8oWSXd3h1zQK5FMZUnPQoANK",
  "key25": "4ofTa8QFbSN4iqkdKPjdHXafLLNEZ26VfZoNYBDBuBNTDKB1Go1jdcQ5i2dSuVom3BpY13cGw7tT58keNg6zvzxN",
  "key26": "4E2Q91QxYZTRwAAgbEkEnu6MRX9gqAvTsa643TTC82Jkg1EXrJpovz4HM1LNf65ioDXfQKEkuEk8Pnk1TwpA5ifK",
  "key27": "5bWktLUxAPFbYWHHdYUbrKi6DL9LwXFunmwmz4Bhg7kfLBz7E25jjJUiUmGsH7DoaWFbp4RMtZfBxBxw6Ax3NLqN",
  "key28": "4t6okuZHoCr4z9tN31jkdxjR9e9afwsAs3SXPNPreS5n9XFP3qXf13CnmzbXDwYyMXzsxJdC7ixhkoUYmg9ifbk",
  "key29": "4NHCE9Dk7JN8PWTwXewk8XSUCmrkTi3YGaeKRRrJmUQeTr2SXsvCvEkWA4kMaKLdmAADt8BNxrBAb1dfVVgVN3N7",
  "key30": "y4GVpmmWjrJXg466H466CgkkcQSfdtfW7g26xKtXFYxFhdpeqZb54weT52T9J91KpU9SkkjhFUghFjsxdzcipLT",
  "key31": "4x4jnVApKY4ypRLtEDMvgN2auy9Gx67t4R7ASH8iLkYQBK9v38bW7RGkENnoz8XW24vR6gvUDYyighui6EmAgA8L",
  "key32": "2txcAUQ6hhFZS3BAyjD51kJWRB4RNuZhdfp82B2gfV4Ehme11pbDZnZQEJ1ovzgFbeTdZURofh8v4ASAHvwVQ6A8",
  "key33": "4NCNso4YqXdVBQJgNJCaz4d9Nq9cQpLiwfYFy8vU5ne1PEEAQhxzTiQMDoP3RUFpX9DUrhYKwXiEMHHMx6dxFSXY",
  "key34": "48FRUk4Avkvu9CWhjkRGyPLrH9DENtcVFHjfrRQdk2f8izmkL97CTKeESe3KqRLJrMHmjf9XQnw7VUrCaPZsQeBg",
  "key35": "3WcFvk7ZGyAFFRqkBp49JEtAf8u5PWvp2YHboGSsCu7xHxX1gscN8MtrWmdXthzhmTm8f1KabHbM9BXZ4iZDEztw"
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
