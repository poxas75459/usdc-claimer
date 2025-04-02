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
    "4TmpnVWvyMZLnp9TA9qgBHghgEtqvPimS6RpmBSwXLUEE3J3UZbhGNB3um4gMcmrBXjZpKiqhV3dGbyAAuY21QiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gjSSH5dyrbBZBB3Hasm9mrwVBxLZezw457LV5dKNyznsNuSCrDvnjGYCuFarP71BRrpdU2bMYzWFLYEibJdViVx",
  "key1": "2SyjUQJSFb15aqMgyqF5KB9okQtsQeE1FV2uvqvfiJmi4Lta3LyUs1AriJc2ZmKnRvDmyrn8gqrGzAexQt9f8TyZ",
  "key2": "26znTrtut9Zyxmghr4zunVYyxZ7SaoSWv1cUXvsNynjfr2gwHZGKi9DWqpALGm94sdS5R8rSsrfrv4axuQ7ASkSm",
  "key3": "2nmhJwzF6zy2G6Za94TvQPvpS5fcLc3EjcVdnFCKCaGgiYVFjFmxTLDDRQfi4JvQYrVCgYiWzRaJiHsaiC29Pq12",
  "key4": "3CPbKxtKqeRXHWWkDH4NNy3ApfUcQc4H8FjojgShctaFYswh9QnguNAE6dw2F6SjA33WHBXqn4qSNfY6yhRAJJ7C",
  "key5": "2qwKJBr3SXk4uRmJZthfAfb9v55asThHkiF2MAHLwm5sHkZz5mhy4iQMV2UdzQYUXNKq6y6M1wYDmr8B3UWsCvQy",
  "key6": "3cg1AQcaoqCSBMoB3zqymWb8sNpZqbDJLNYJ5o6AMdZUB6u7GwYVbasge5hGQ1SRJRe77rNE31KNiLuKV8bYA4kE",
  "key7": "LJzvCTrYHFZuwq76iUobwUMXS5wb3aqCUknpq3sjQtfiTY1AMtXWkUqSDBVBSuNdomy8xN6EBXJMWJAVzLTEiue",
  "key8": "AQ4QcVZWktjhkhtc2gZPYW35yy3S4kaKSJDuJxyVTPb9mita9quqsVaFGSf9UNtFruDxVdk7h8tUio262ALDvRF",
  "key9": "5xcGqoF25TfJg45Z93mwJW2w4SzNTtC5JPt3zoEKf31eKzVKvrJ3w91ZZLRhv8evQUrDLtBD9YjXDQP4noiL85x2",
  "key10": "4CeeEgdzkHqcB1PYQmpMHXLECf7FAuz672faVioLGX99JvPQRPoa5dQwb1iwJtCdDp7PindDisjjWgAhPxF9jQWu",
  "key11": "4641412uWV3zbFjyHG2zTvPBzTrqqkfNTwTnxGtkDZo3E17iRkkcpSbSpt5FLwet2eYSyfKG4r2YjtDftj2ARGfc",
  "key12": "2YmBhqswkWLX2q6EeNTaMdLpQ7dZdRFBo4znuAsFgm92zJMYrqwrMZhBsN95LwFZYEeAQDgXZJ9GXJ1g9W4NmhLn",
  "key13": "2oBi4umwG62Tzs8huRETyYydWR2an9uo4JPcn9sUraaEfBLA7Bqn9TApUcxM2BKAFjF1f84ifTTy9y6uhRS1CAAk",
  "key14": "2eKHykFjZRETkyZjaULmiBgfEyGLyaD1iMTkFxfdpufk4fUtNgkdXSY1cW6k4GXw8H1KVxtiT9MTupaveTHtV4du",
  "key15": "64kh2ksavHKh5jCxycRE9kbWJECmDzR383rTGk6E64zUae7YDpYFYpkTyAoTZbkRjAZHexHACJQDtnKK1ueDEYCW",
  "key16": "2B5TmKZrAYd6L9kvDYt9xnYeZEZqkdEtNVUAjuPJzH6xHrLEqjHd7tSJrxhwz7cjPuPrQvw1RJRq3XhncwcFNDWB",
  "key17": "2dJW2wMeRzwT3fkZWvFYdJTAogo7VPWhfB6u3qmvGi6JhSLUDmL8yNMKgSTD2ZeVfuTbBRd46tzTX1P1yEJYYCpL",
  "key18": "2jucKYnQtbQPFSqokQGb11f2SNmyrtzpR3bwYLCEfJU16cUnvtof4NpYGHyxJRvb1DG1oXecZSczLfjZNpr49hN9",
  "key19": "u7EQ21Bxfp2y2oBY9Piamws8kTpLAYyQq1pSEhoe7Wt2ZF4AfVCYTBcRBm6P1cRpQpfDQrVMAocTRUDxiKcC4Yq",
  "key20": "9AcDoEQ7u2raPAzLxswMzxUDgPtkj9H44YcnnqcwV1GbbQg3AbBJRkhteWfYDHKm6QvpyBcwj6bPh9XxRm2DGF8",
  "key21": "4eRVwTPgKpgVGKR9URNQsrm9chMcJGWdRxWiLieRZzhhUEX9H48h6rR2tyv1TUuDCvy4eJMCP1q4cgBt5aHTp5J2",
  "key22": "5KuHTw37hLC1jXQXqZHL5erjgE2gB68r51Cm2Wfu9sbgMdqLaDDNfCDw9GjSGMEPLBgHkJmtbGW4dZg4aK2Sx3q1",
  "key23": "2gXbNT6qJegfxr8TSQV6tH6drDhRcZw8725DxSWaZAdf5H3K7EgwjyMM7gHZZGSAsRr7WZ7G7KPjRXJpxZ2Nqb2P",
  "key24": "a1s81TJh6BG46SxG2ivwJCMWXd1UQcCkVDdSda22P6ETdZpzS3Z38hhLZ3aJD3HSgADAWEf3fvJcSWL2E8Yvmcb",
  "key25": "4D1EsrHgtW8RGd3BRKXwperqV3U3nqa68Mddt8veWfSRKjHBWfdMsq23MaPutHCFhKi44cRAnWyqeWw5oML61SQ3",
  "key26": "3XTbeTVn995tVdtvZbCWgDN5jyjonxvg4fkKamJwrXKowW55xCtZYLmq1BRiHPiYduWTfatTXzPoZvjr5nXGaPBg",
  "key27": "3nHTKBDEvVAL7QvWx6oa7tWVbMTQjZwxrdigqDxt5BKYftVKEmYPVRx1x3dSExQCCEa5Rr68H8B6H6orMQajtnQU",
  "key28": "4Eh9mEcxFgsqAL8BVqAUPtftinMhGgTeMeQb8zYieBu4d2gdaxb8vBKjVp2rZzYCeaWw9VAG6Tqa7DVHsLkDJvHp",
  "key29": "3wcWQLLxB7ToTCaufiocNBbgYu8y1PDWufJ155EHPiz1YEH9rX67eZ1MgEvrEp5pYMQktgRzVhsZawcaLnn3orqv",
  "key30": "4CG2Ds2bPiM9zixYQA3S7XQPUxaJokbLidS4gFrNQNMyNKv2NB7MuE5DFE2RZGZdz444YZMe43imySjvvSCAbWcU",
  "key31": "4qtzd2SSbZ9cW1hLsjzRHvvGY8y7jwH5TtGuQXtA55LZChf7gcu2EnLiJhCAxV64NdzQpvepEH48EqqtQekBvfmK",
  "key32": "V2rnRaC4B9wb8dXfNngxZUtQZBfbz2uBsKcoTdaCYzufuWYBwGDnfiskAHVtMbZsD8WzcknSodkwJfFtZh1RjQC",
  "key33": "31ecwZitVzyr1z2eWdLsxprFtck6b1SAnr9NkEX2UUiU3cbFLiztzDyMt5jR3RUPfLmezktxmgpvs53Cy6Q1BJB7",
  "key34": "468b5zpKdi2jQcuGkjk4mpz7eX5go1ieEKkDdidbQ1iMYNQ5YZ917twidZktn29Pa8c9csyrWcUMChZxgT7S4uuY",
  "key35": "3eJ6Hf8eSFUC2RD1VNbDkNcb2chQcQK2n5RxbVg3NbCZRjpJnCRkaXoMbyAmBfhq9pqyrYh3vVgGqqzJAMUumfia",
  "key36": "5qD4gnMwdn7ffxhaZNNdhot34QqDb2q7FMAjmbCq77veKd8AKZg2D7mvqa5sJu8fc9FLKm6YhCvpZ9a2hG6tM2uC"
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
