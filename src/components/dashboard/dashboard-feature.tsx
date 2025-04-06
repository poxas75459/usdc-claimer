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
    "5wbqp7CWFXDmLCfajNjxV6AW5mkNbpASGV3gBXRs8wLL5ycaNorBxXTwWq4xEGkLEbT5RR9UhAUZaNyfXRKo9D5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MPjNqrvaXAtFNjeGbfANJ9h2Du6PBgePuYBYZhfN6nLpvJAVFvv7W9fDbxqQWyM5X9LZdMB8wwrLRcpQiKhTuGb",
  "key1": "3E1m8nANmDiThqtrtHZM3SXHk5K9W5pRNbhTAcyoRUvq17qkVfm7d1rFFGLayzRMonf9SNtRtnCvbddx2vaEcdPJ",
  "key2": "2SgHj39yZDHa4QyYFVULU33iN6y5FK2txYP61q16DearcyNSLAvLfTnkTkKUqAR1Top6tnu48qEg4HRKYXMCALmj",
  "key3": "2bgfLgX7L6fkNNjzMQrgM9oGoa6cGXJjEDgWWv8T9d8rmo44NYPCDa493sMkxJoutvivrm8zstdY8UwWhKmfccAT",
  "key4": "hw4vHmQS3DsSDNPeiejgpUKNoUG3jftaKBKuMkmbn7cT5mUSQTueMcoYZ4xUheLcDm7iMQaYvThT1W3xhruRZ7K",
  "key5": "5HmkWgRw1csX2gSnsdCKJTEsCB1eBH6QC4uEiJ2ed3qFJNDQGnhvDQhNe5ag1WLyCbK2MnnqiDsDpVZ8UfGKBU4t",
  "key6": "XQYCv2NFFuAzzfHVdVPo2Qpj9sUDCfoDm2K6fEZ2LX1sidLuzg19rjjsfh7U2uq6jiRLmp2aqmcdHrFq2fyEQrb",
  "key7": "28nPqAcjrsX1mrCptotrt6hDcBdVcxDzYFsDCsHQhzrKvJAJv1Kx48xyKUmkNxdMX6iu5km2nS5y3iNHHrLtjCXK",
  "key8": "3kf3Y3uhEKdb1EF4raz38ubZq3JS8nxJAaY4miazCw1fBPv7QfmuXwc12KExY5MFPLTFWERuvQsK6c4LtCYavmNC",
  "key9": "Vj4nbwMfCnWHp4UJZHTxmxLmmpWvJ6V4H7ri81bESYHY1jk3vmzXoLCJxysnQWrCTt5jAgsJsod5DSGEWoR656m",
  "key10": "4R3C4RTomR4vdKfoFwWszchwYashrpdsACV3f8mHiMgRCayCx23ko5z3NW2A2jm2pq65FBxzStPBS1VJ6DFpCojt",
  "key11": "53TNjUHd21srhGGg5cyJi45jxVVKSJYLKCHv8rLUedZcrPRoJneuxu5M8FczjwvmFftF64LQE53aicajBkG8ryir",
  "key12": "4eZCoDswV7XPh9RWc4DhsV27Pa64GawJvdJPqXd2BEXvWnZU4iUE3f7PSmMiLbLwaPCwbvhbcNweywfMWMz86yGa",
  "key13": "2ceV7aw5oqMbApQxuWAb25LDFvZFREdxD6KBWH1RZobQxDDJHQCdyTbjJsnqauG3rnVesiQe41UpUz9Ux2PRKG33",
  "key14": "4wFgSBdqUDt82hT2z4bmX4jyoWs8TrP3rfsXFc5pTjptYHpQwpUF4sQqLoJz6dTH4Zcu1qT1hL7xE11vntp7FLUU",
  "key15": "uuHXtEiDg2p6Wn4vLGPYgzXV5vUMS4CHam74aKptewuxAL8kmi3Lr1r7UfwqA5Dzo7afTDDZWcGWkh7doQjonLx",
  "key16": "574iu6BDVZcey7Ej7WQMNYePXEVv7STDD8Hvn9DQTXNAnLjmfiLJWSCB1UoGp1tsYwEyXfySgoFS91QPeDDWj37g",
  "key17": "2TXfJApDVyFx5ruKyDRGThHFrSpksAP9iDQvameHdBNcNytvmGuvZsZZ9pmBJ7dmCoSWtLqtpJLkZBmcuUxo6hkQ",
  "key18": "9uepRmF8WDLxvLEbTGmEo1HF4jm95gb7hi2cpLv3gq3ou3eA1m5YYr7WYpwhRV1h8ujp1UeQso6sCqzrEtcEMc4",
  "key19": "5gqjLkvm7wu3hUvoJmkXTw2NzCskmJHdj4SzE22AWeH8uFcqVZfhveMpggbm3ioqjVtGQuuBLiNZ7C9EHVJ7Ld5i",
  "key20": "5Rnvqrkqf9wCkHf28zSXD1EwW51d1iXgJaVxPbV1DrDR9tT86PwhGXgxP237ddiMGzpo1VbNfPGWqeuSMrCuCgEr",
  "key21": "3mHayngTeFwn5sDhCjXtLXKVgEmtTanHruv33J6YEaLyGcDzLLGJiru8v1uPVvGT6HxP4Nk8Jm6yXicm1CZGL1to",
  "key22": "2bGQzT5q5kH6FuNzTFMPSKQBomzxgi8kvGv3yfSLGdjg3Jr5XR1Du4vuXeMMzExLvb5aTmh3X9BPmK3TyiC2WxzY",
  "key23": "3YxVRxiuAZkpfUK4RM6ZDKvTxgd4ne1esievvXDFAdXbwqGrjW756hUfvjQef4LJkfZKKEcU8JDJzq59GjNu1Yye",
  "key24": "H2zYE5WKxJLDoEv52jYfCzPwiQgJu3BuZiyzwoWAjZK7mpe36s9jDJBTFvcHzDj3nM9HHszaLbJQ3Nbjmstto1F",
  "key25": "4zvcGgPqJUBMmeVxJe72XoVPSpSDPgEFFiZyTNoNRFAaSHUQ4TKpW13156inaFFZ83wp4JHcZxQvNq1F1JY91vNu",
  "key26": "LQJ8pmk75VrLSyLNSyHEYSy2QZwSZWCaSsxXeejVfTAt7FovH39JQPfF1FLyquGCj7VA9e7aYjs2CyusU8tGyeX",
  "key27": "29UxCDJxaUBRb7BvujWPUf8QRbTJbFX8hZMkd3DvtzKxcftGpopneChmQ5Xyy8H8Ym65SRYEmibD6hV8CaXx6U21"
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
