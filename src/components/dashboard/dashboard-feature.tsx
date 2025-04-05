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
    "2yfxUM6RDhYWHfzp87vSQg3jLqeVMsDipHR6WqRTowjrgt2tFnYjhtt1Xw76gzBVcDRENSnsTdqWgtaknqBwVfq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8hrvvkRiDcLAt4zwe3TPhNFEm8gtu17Xb6Er49iid6GyLvW9pqiXa9R7C5MHBkT1SFqQ9oX1dfSxaZWaynETKAN",
  "key1": "wmjTuAQShDFee1CfFiWXJKKT6cMmzKbYdZnvXYPK365UwQxFNHR4yAUojJ5jP7E6A6vYrHevBqu44oDKv694NWw",
  "key2": "4DcLLyHXsBbito1beyhcABGGKZWvhqhYBGEXefwRe13HNDnaiirYM83EtUJ53UFueZvYwSqeNVTfWaHhGMsMr4s3",
  "key3": "k6VSYQaPFzhUXu1rN9x8GBq1JLKKKzv5tZNNEDAtAHWKrL6c5B5ksSq5ZLWp9DwbuptzwzMV5vX4ZtNgxqsDHEX",
  "key4": "ZJEdrPPEKRBEXh4mXX9hWkiZ3K7Q8STVxwjCB6nmxiQWN5mDrQZHwHmoVdk2Dj2cKnGGToSPhweewusCc6xRWfn",
  "key5": "mrCuuSWkx5PKUDKGsZsjugWLDBZKhM4PGHQRRKGTVCxxsYyNtrhg1opmPyuqMyH1LVMeRRPodAkxPb6Db9CuqfF",
  "key6": "357SqT84hqxrxxh8EGqckkyp9Ybm7SVENKXvPSEeH5sBDmKH9ar3qTKcJ8UzXbjHYRJP1T4m8t2gaHN4hrZMYmUH",
  "key7": "3FHrVSME9y3nrCkhf7rEDY2g6EBKgDFHfKqVMzwY8weCfDt64PosmJNnr9ADBsbdks2ofnZj2RvtKT4VGzVs6JJL",
  "key8": "5fEAqRb2HaRSijiXhnPg3EW15qCZS3rEZe7joBiCyu33fN7YViR7aMydEt6spE3xfASbTfSeN1SnmKFzaQxZFwSh",
  "key9": "2e2CzmfxXvkkrUxqwsHjemf6pkXnf3BYuWpePEdqg1UMHYuNz3gPD42p35XJeJnHYCUPPAhK33sCvUyhpq5wxJzn",
  "key10": "4CnyVoKtVSkU4yYdfk29mptNZf7yp5ei3Lq9E8ZN9PS1UXHciNwf3kkc3cDhhkkmDqkna7udprYt1dpMz5si7UXA",
  "key11": "xNkQbx8znYVyR7sSscr5pq71PAJFgyEP7UFmxBrr2GUBPvdu5BWn6s6n2xxSghvymQFrAcMePeCiwGomX8j5578",
  "key12": "4BHRY4dq4mS9ff7FNaWyEMXuKFeJACVwcFXserb3oWZ5KgbNFTcDTzFvhv3b19fZBhuAyDXmKWAnXjoYLnHw7rWb",
  "key13": "5REnzE49JUZ4KGfL7wsAFUpsoWrxFXQKtikGQtDTQwRMDBd2vsZFRXMQh18CKqW7p6krhgLhUgY4YZfLBs2k72Dh",
  "key14": "4DYFxcwCAug9dHQVKVMt2cfW8DgCzZXNp5JET3iSVchob7KJMmnSFKGUHMNdMkfsEs5fWhFs9e2Zy41uTmcHdE3z",
  "key15": "4KyxtSPR5inYZECqjCxyorucknAsybeFBwJD1vV37RGR4xkkCV6GMFxn4UTbprmgYMZvtfbLm7s7Ua55MQmLY7fV",
  "key16": "4kp8K7wn2dLQbposTdiP3Ccm4SxEyzskjMNjJWzDZPfrEMyK3wXJMKdf8tH6aGjAtwSNpbbT1ktTr1LUArN9pLp2",
  "key17": "4eEbH5HxcFLgUEcQZyyD83HSzVMTzmtyLXdeuCwC3zuAxqpuZGzyZ5nhaLivGBAQxHnrjwtT8zs6ew4oo4uSe8Z7",
  "key18": "4JzAfNZgsHJMuz5gvt1m8nCPrCXz49WmNSQoSB6ccxuRyjAKeQq91eRq9gopuuQhcBKWYasp4hnQ8ADKG3MVU95s",
  "key19": "3aVP5YxuWqtMoQ82z9rrGHTN7jt7uxfBvrGMndK7TkJ4BDySz3vPLNKjc5cK3YjhCZG2cX22n6EWYEuhx1r7LmcK",
  "key20": "321vV42hZXQ5rM4k7zeqG9G4bHaArdFYNy2rSFm57eXMBcGUDhMuBm41aGTiKq9ctZQLy7ZXdrEEhzqkHtXq995B",
  "key21": "41HSbdDbFWnVW8Rn9burkN7wRquwuUqJrm3HvWBjiMRdTW1J4VQLdFrjUu2JTX1q7Ga2jtgBN5ZH2Jh8jDxkJviZ",
  "key22": "5PtoQGWfFDYPZGDQG6SvrFDePbwCojg4qqeLXGrCAgnyscmwAfe4vXicvodrkdWwtC5AcZStorGN4WZPvgVHY31Y",
  "key23": "5Nn1wUPxNP9757VoTEnSZMdJQbGimVUxiVu7TZLo4YgvQVmxiqb9TWPShjMRyz8J6gh22q1BJkFuUNo4BpRPdCMp",
  "key24": "5byYrWenPGJ9rQgmAFjCKuH47sceTrSHgHxGsLNJ8X4AYgryEMh1vCKgLNnsxnKnSsnZKyvEZbuXrYc1d1GXgGBH",
  "key25": "4JcunkUTsCGDNhpLJ8FejCx7315Afy3KmbBDrJ14iT6WNWxg6piEBZPaWEBrdyfgrDxB94uysmFeLxiigQAHJG9d",
  "key26": "4dzxM3vF8f1ABzyujVdNrHAVZA1UEL5iq8KMDFwDmw1ZqprhsNjz86vSBKoo8LLyZgPmRuGgUb4kPMUAW9D8Bqsh",
  "key27": "3kns4KJ4U4Gm6FGpGW2sPGk1UVoAdR14y5qNqoT56wdE9jMVw9SYmixBYqdccof7QfQ33Ltor36t9U8BRyjkgze1",
  "key28": "2viYqejZkPht46tYycmXmdT7BZMGZX86Jowj9xGXnV56GgCuHDqRriQxn8YkcZ8WR8sEbNdJLFq8jYo22HZxwFAZ",
  "key29": "4eDythmMsi1si5g2BdjDUDBy64jpFaaH33TR3m3sMwcuy5H26JZnuT2bc9kgBaEyupKJs9AWWmYp6vfm2nmFqYtU",
  "key30": "axeXdVMvNSAmuvXUTQgrWFoQfmyfJJCbB4Wj4MskY5cXBLa2vpQeE7dsU4JHYNjoCxqpwQJm9joi5gSkC5CSVSo"
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
