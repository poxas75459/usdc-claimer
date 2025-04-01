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
    "52KxqrNdTiFBiexg8TDYhcDArkCg4ZspSib8B2aoVfnuL9WbSbaVmjCsvUrExzdbQ4NhvUR243eY3oZHDbcjs4iS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cgDeVzFtqecwYT1k15sTB4Bs3vdvp1sNQsPQ3eh62pMQmiuFBuDvkENRVFrjGBTQCJuqqp8KaUCdPhKnn7TNYme",
  "key1": "ZMhYioRGsD7Yib2YeeWVgUXcmJEFbtAUqAJRYNCpXAZDFVjjuR8nAAPnUHw4xfD819zNoiNa7nwyWKJ4MuZ3vxU",
  "key2": "29MuiSqiEarShRRNgEUqhDbn7AGgMiZiDBnTgkBZDTeLnv5qfJkQwx3bD2dnUoQAhw8ybFFJJMxfAe4Z4V1XScV3",
  "key3": "2B2t4omswqX2reLKJpJnj9S665ajraWQuFCRPZQ9KUi7TEYmsfP5g7yVQTDk6prahscf9EDcXFxaWPLMY38mebtd",
  "key4": "NRsr3GjesUrQWYtueF6kTtaXYwVTJNe8RapZPDGLevttqjFHZBhGZXqTVq7PWRejBnihCxy7hbXVRgBKjWfsnT9",
  "key5": "3g4FF8PScDDJShQfigPq1bnPmB4dte8XLTPENZqZaHWQF6g1JZAkdyMjd5wJLKhfs7W59soUiT3339fig3qPjddb",
  "key6": "4KYK8yW3ebfF7k5Esq25kSTQnjGMaBMNBWJnjTFZE5D88GxiogbeDtL6o4dZPu1kWMiuhmDhVe8B8uKGY3qj9CYR",
  "key7": "4hUhagnhMj8HjTxNHc2xabgWukzoN6XFf83dq1XsxDeG8uMtbnBHPDA9UCM1omYr6qTYfwRdyPnABW6hZ3JRXg1Q",
  "key8": "3LPj6wBH2GofWYXvJ1H6NPzzCGLiubEjY3EVnUDSZQBcQCwG2TJumCaX9mpFDCGhHvPcvQH7gxGQE2yMqk4YpMJe",
  "key9": "sSSLhQ6NZxUvurZd7w36WpFsTcSZDEzu3QmKfgSJZfKC4KSWqkjVhEme2hqmKLBpqfbgJYnxxUyFAnE4Xbapi73",
  "key10": "5ogBC8TcGmn3Ype85VRTRueCH3A7CNFNNWinmkC7BepDSyu6dNyQSnbNZKrS3FSsMXpBcaUQUj4eXUzqMTgKTSK2",
  "key11": "3dfWZVVRZaRiQJC7o7pDbHjouBS9Ejd11aAAQjmGWB1h4t34GuLJHLj9SjxG6GVVh5J8sgeRxG9aEujGakMM2HL8",
  "key12": "31QsyM96mQENTHnxNKKDwYvZgC69kdCEMN1spZUQGyCDLY82z9q3A1arkgy7YgwsYunAWWWq2RQ37LX1ZAVpT5yb",
  "key13": "3WB9YPCoSupLTm9pcssRYeB45cquGLKbgjt2w2RHR4cFkZFCw8zuK1D8nrt2gfJ3nAKpEK5Pi3mm8xYrDGBsztDp",
  "key14": "3J6Xqk7YapfMGgEnVVRTKdAGEgJXhhq6HfmuJ8y4xBGa9nRGX4E4EeGZ1GyYbp85v6oZyVn3j48ZroiAMd8GyYX6",
  "key15": "5kZvE82yz31xi4JMvDuofjo7Sv8muvUTcPpNtU8791F7msRtv5pgH2hYMxazuHm9fbNrxtH1DURHkuTPXxjyEX19",
  "key16": "541NbPDGkGTUyKEH9Q3fgDfXqMrv2UnXvVWYeLhyaVxVJZbmzrZVupnwJs6X2Fkfrf29bqTuAiYAyWttKQfgsKye",
  "key17": "65iQ87VwQbbTPQ1v5VEtYusWdVcZzDvCVB6pjrqvUQ1taKcXazNKTLEg9m6d2uwA7U6hT1AR4sPdpmTpaYfdFtjo",
  "key18": "3bQ2nKY1vGw5bvhYoFh5F8c54nSkD54VeaAGpBAFWQZjqaViKpZxVmoiyKWZZTjUgQMAaZE7m4jPu1zT6zxsBrR9",
  "key19": "epjKY4dR4oM1QaYgXanGfb2JrzkQLy4vgd89UUh2eeCyWLdhAcdXAEpQbySqFFvYN9VHxc99npfAgAVhmAusEjR",
  "key20": "2aUPK3etCb8NDxDLU83zYefKX9qWR8dgvps2iSmxtVnPP8mnbQfT1vv432uFo8HjVti2da76NyChU4eNczx8Gtj4",
  "key21": "BADs6UaTbZAWeXwQgL8VEZpfVAPMi52vnUeXfWP1JF9F2FhowtK8Hi31iRmfj62HDcrs8SHgem5vhdpQtVsFfEz",
  "key22": "5SQfDr9hxHRwmiVfTVJXnqhQiTdRwWwa8yP82GhPy512wgdhxuf2Veo3Wdbwk5kXryFH5i1rjaa7udKQDEW3pmK9",
  "key23": "2wYic9TTv1daXcXX8rLrcTfn8CHDxc38L2UC3nkcUM3Yw4bq9gEoMMj7PtE6iyrg1Q6SmFNPUoUcMimmVv9e1hcv",
  "key24": "4r4rwUMKWqGBQWfHCjSwA27zMx7bmxPDFsNBH7upyf1NFNJMQBrVGMTTX928cALtG3ScgQ1RtAsXpdjfkJDZcnXh"
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
