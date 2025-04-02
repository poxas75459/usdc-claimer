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
    "2AC6iP6V6G3pH8ovubJ3SrgeDiXHrTMA3t3CLeEdBZLXPMJi4CwBqL7M33VCC6FxUpwxRwu6CXQ8eSYz5PZKVTkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dEFXawAnoBPP9H3PPeSueREtiF87pmUpvdWekAbbyCfJVUShQgFqjQZ2DRUC6ketKYMczfExxzwBBFTQ2gMPeen",
  "key1": "58Nr4x27iW73vNiB8NTnJcAsqkhcKQWropMxs2WBuy9mUT4rTJsYgnF59YMgi5zBox2ZitfNiY2fVTDvX3UYj9KZ",
  "key2": "3ouATN66DxRYiFvgKNj8Q25GZ7RVWRNRdbtvN7LwjpN2WNiWcQcNvhiNoGNndQoQ82bX38Ebh825YGHRT2nvQCCC",
  "key3": "ESR4cJpNJUJcSNsUjzzhtvGrKXz6kabgJthd99RzJ8g2NnSGcNqfovadutnvQuEbfRq99Epk9QUcXP3mRJ2oMxd",
  "key4": "5KYVk2QkDVJuWnjbUeFeMWV2eQSaTMBpj2gDAVBEisRdgVcQsCWwe4zyLrDcCzMPGmTPS9ZH9YhXqs1pWo6BrWAy",
  "key5": "3w7y9UVgxyzhTeeDBaTy31isQCc5DvguibdWV3KbN7maiz1qrqBn8jgdwbUsAjePnbAsWdCahQPfj9Vsi1b5RbJa",
  "key6": "4rvhJM4dfzxT9yDAGUTSaeGotapE1FTpUbs1JWbEXVKPtuKD2SVf4MZTb4sftTzpjwTYHPKRyt844t1eZt9gWb7o",
  "key7": "mtiTPHArpCJf7dJC5NtgfPQcAbVxrZrdeFfahMZnDEvEvBNPZkPUQaskaBvCr85x6bSNGRJAVE5wys2SYX9958d",
  "key8": "56FpwyxyG41MR1AUbzTABjL953PaxeSgEirhyqWepQVyVWDn1n73KRqUtHCTGuc7WpfRZWx9UN9FBNXQMmYFHrn5",
  "key9": "4hmmSsySzVrPN4MBcrVhxe3jSUR2cuP8UwEfJDGW5Xht5sbuuxc23bZjaJnYb79rXYGVbvbUbMJ3ytbowiMxYRGx",
  "key10": "5yybwUuwNstbHRqWK2TqPpuk6xRYbRXTamRUYZaxZp7A5AnGBK5NKPEHwQfHU5m6ukPPNw4VQBrLjUiUDxnV73jE",
  "key11": "5YQxLYqupLkvPYd8wKaoVX9CYM4HuVv9Zgb3VJE2HZXLFYjiJrbfi2fPQWWtQyPVHQCEvboYcJ6GpewESs21qq3z",
  "key12": "3inc2crveD8bqSkkp16yXjJcxxwTnCBem7tFkx72a4YWAV3hfX8FF7CTURzRwXyK3qP1dqY7NfSxsxfvtHRATYGq",
  "key13": "4T4pNdzNQqi43b22s8E5w59eNazGnBfXQv1AiqrkifHzHVTtGXx4XbCwBenP74tvAUm4uYsqpgCxNPhsDZQyj38C",
  "key14": "3joVg1kPZgZUotzh7kjy6g5HBTE5rkrbMX85FVqD84yeeWwGJBn7x5RUFeBFWyKvMUUhnGq5CP1XsbxRnV5Wp6oJ",
  "key15": "2hXkmgkVSDe3oWZWdGgAsUDE7HPwfDEpRGJG8RE6FjxNGcteFNvrpR5kSuXKCZgvB5ggTo5TuNnAo771X6sf7Qu6",
  "key16": "388FLkLopRcpwcQqbiCf4GEb26bN3ufrs5RgxYuhW134oRFADKzLxGYrxh5MFrhneQHy8wg8xghn8g3k7U4pedet",
  "key17": "3DbY3Aa5uiASzM9Du1ydwetjtcENgdfYLPZTu3Y6W82VVaqjpxosVGc6EcFC517BNX2DfCC95Nra7T55sf7bAhst",
  "key18": "2xYcR9XVcHRHPcC45pBN7AwqAtmNp4LoZvs8hAARNLiZqnPVUCgQDELhwCKjMafr9SSgC12FjHNd99i3FMQ8qgiL",
  "key19": "2KmzWNN9bShHxCrbDb7yL66EabjCwm8VhiQCg2iaSQvyHRDKFnn9AA43SEbrQc5hhbuFhzrrChqqW3ukCQJRyEH1",
  "key20": "4KK3HAqroPaAUKQrinRbWZ6SmVST8d2deZvSYAZ1qZZLHMev1QDEfUonH36ySRt8HtH1zhp4tdQRYR6E9Hw9vH8w",
  "key21": "4GDfvdMBjqhggm6C7k5bfQXCUpvYRgmFxd77yLEaTrJkMuU2abzkosJwtHu1yF4xv42SKLFHDhaC2q1kSiAtxF3f",
  "key22": "4angbLBoVa9VPhK8DguxfL3sbdppoRB59pkj7Z5hzJiEoH9FkyLivoFZBoi4PVW7Yesyc7tFtA5kmF7sS1X3oPKv",
  "key23": "4s7jfXogjZGz8PvN5JHqBg9DCFamdVFrUDBGvzLCo9ieMfvYvFaJCeRECtpCrGd9q92Nih6EckZjmG684G4tKckb",
  "key24": "2L9UT68GvCkqFqd6uUVyXoqAnAfVghFUjzVPq3khrnRKVJzBUS2uHZjd9fDQTtaAmLJCH8ERcCWJVvKswXizKbBX",
  "key25": "5SzYdpQc1LG1V6TYHPd3efxwFkyHKbN7XyTeii3p8znYJzFfkbmWy5cSYfQwCmB2QfkmVLcfGUkh7st2ApbyfnAE",
  "key26": "2g5bX8sGxm9FdwKgCv9GKejy2U9ibGPui4dgRU8tnGNC32idgTR7zMn2dAA2eQRhpoaNHi5UNNdwQcjwUoXXvMD1",
  "key27": "5q4ErwHTRKaKFwe1gL72yUC64oysprfGQ4W8FvaGUbeCZczFPJvGNuvP9LTrFct6D4vG2QDYgNKkEc6Mh7yietE1",
  "key28": "YHBitxQxkWzgczonr5MpoFQW3CWPME7VeXp2dJCtFmHKkW1a3bbELYFPz1Hipen2iu11eRmnM4gvJPmKDgB5z3B",
  "key29": "4ZA8KrrPgWFC3iWRnMt1LA7gVDNd9hnXGS4s49bMBaMRkybDnjmRDYaZSz6XcycdtYnWP5zhs5xZtvG1vK5hfa1v",
  "key30": "5FYm6K9dxeXjbQJYoYsb7TpqiVacNdT9EuLa22afsEcUE9EjccwBH3kpsaft3PZGR8y6XR2EQTGfajPVysdj9VNJ",
  "key31": "5Jh2NaenQ7B8Je6Xze6tVU6uojTChZq4aZgKFD9rSMvJ9PB2CTs4ZFpm8vRb9j3W7gjSgyuZ88Pm6iWZJ27YGGR3"
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
