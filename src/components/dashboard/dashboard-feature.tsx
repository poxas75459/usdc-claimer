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
    "5auyTMnKGjBRqCU6okBjEEqnykUVQYGjAfLFAGL47uVQ6SuShrm6LuMDqCQnjBx2cBdGwg2q9fr5PgEFXi77wo1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dRKbn6zhYrjsxLMFqnGjx5p3XtANtVp4GMXAXYwnAEaKUqqiT5redttdrbvXzC9ekcAY3FzimHw7fq2pdoca9of",
  "key1": "2SQ2GMQ4sCT9JdDputL9ZwGGqmXk18AAXHkhNScL53JmZwmRT4R7Uozv2ZzLKcj6BNfXnit6tUsapV9ttFVNUNvR",
  "key2": "wRVLM9kdS89xzWtxQcJ2gHQHzeK9dmXFnSQTaLT6QbcDVj7pspipcpBkkCswxD9NLR5F58ZQLX5F1adzosGSeDe",
  "key3": "21fs2KucvgeCtYJuLRsSqUcmShNrfoAVwims5T37U4Kdy35Lif6hYvNQMHdCEP4gTENjDCYtiSVoEFKMpc9wqy7o",
  "key4": "5TyS6NpCJ4KAVQ7jKHjZqE6BWrL6qy9qwNrP9ghXwJLtnyNoz7rpxDv2jJ6G8yu6ea2rZyrcbaHYNDHGmL4ettwF",
  "key5": "2mY62YMP5SiVdz1dYyi5kS5os36XqhxEGakQfrcQ7DL9QYshC5gm5j6cf1LSVkgPFZSRJbRgs4th353PhmEB1D2k",
  "key6": "5e4BSv8Yi32wwWPpET4rhUm8CPrQLt7KehWnYJrETiHMGPHJGfeVArazYdj2EZsnb8LKQpZ6bjBDweWEb2X8YmBN",
  "key7": "3ZRTpabBrWUd4nJpeKePFVDPbVS5kzTA379PTTfwUurUu32Hx6CYZs96wM1ijkL91pqbktb7i7Sv4GJfA2NdvTPH",
  "key8": "33VqEZ4T1G8UfJUQuPbWDwafWg1YiK9fb6YoupX9kF8Zzwx2zeZEVRBad5cJCrBpKuxNdfcekMPfMpGGSLFzy2LK",
  "key9": "2Nd6uDjyGSDEMFS4rY17QG6b6CKYGRUdmSaAXzNgdFbfn3Bocd3Scg3Ye8hudLQRXZxspjeacgsDtasm8QyFN4pv",
  "key10": "216Hz2xfYaszBoo74zLTwzQupxaxNyroNuNrt3rbsfjiygU6bVXbfYzMLfXoxHcvRUVt1qKx33AVJB3vfnjktD9r",
  "key11": "KykqW9za1SFkmxNhfTaNjqCPZZQnXyqDzt6pE8pNp84x8qYtUQGEzR4vt4MdLZHPkx1CADVuSUnySEmDk4eYTc8",
  "key12": "46W6CA1XXWnrU8pYx9vhe2aj5k14bkEosk58JfdmeraDzi5NX7d23CWGBfvF3JzcoHu1LzmPgMJy8bn7XkmmKn1T",
  "key13": "ABmEnxZaQphpve1QaEV3rLzu8wSvUbtDErTB1jegiaopqeiwxb1KtSZL8XfS17WdBEaM3ZzVsKTNxREjsVEXdny",
  "key14": "5c8oaUd1ag5RHWfZt2SsCxAZWiDdGBS2dj8ttwaac5DtN6uMyEdcSBeZnmDBLUkDhhVLdViNvi1ZqmTR6ZqqFjLz",
  "key15": "5phQQZSrArNgtafUpzYymvBawPREx2maRnpHet9X9BXTpU8hWaGuewi7YuFtc71zqHYtE1grGUVmM9HsCvNrCfnJ",
  "key16": "u59uJ39CgdRyd1m2zTojB2JRqG8d2cEMmsgjz3snZVcEsyz9t1F18RrCeSQHyPyre82GKMGxvPZBBRAEH28zi4f",
  "key17": "3XM9aekCV8iMNhefWN4VL5DNh7fiWbum31K4BWcw1vMDrPRoM2E1qqPxi42UQXkASgdE5xHchu2sKNsN5Vb6ygfp",
  "key18": "2XAWjQhQdvZHZEXdLHLiYL2sp7VCtqnLDZkvsVe9EoYnTZa3dhWhLH9T6dQGL8nM2Nu3dCGNewSWA2TyogbjYSJS",
  "key19": "2sFqA1LDZ7kaBKcoicCcRSFfNPkMR1efWvBgh4hfpNjUJuJLzZWmewFaAJZaWjuP5etMSZShH2J9ePAMxHNtnCcA",
  "key20": "i4H7k67u9ZV4koJ8dtM4mk4C6ptq5vJhz4iYYQocNZmgHqqX3NgysKvnNr93VMgB3LEqMQufrrujuV7gsZ7ztha",
  "key21": "5VmciYuiXLSYWJoCFfHAGpUy1eUs7DJpSGzB1uEJdwmHEa3BbBsDSmyDRzroU3zNbfvcAHdY6RAsr663MbsVQUq5",
  "key22": "2CAGfAK1PwhRNNJdNiD58n47HWSvdDyyFEsoGEN5vdymkNPRmm42mHVBGoL3tBbmxG3sPCvbf8iFCVE59qZp9iXM",
  "key23": "2uMjDFqARsxNCmZxaan84nCsjpyTbXMxF33e9N7HWZvX2jVdaq3XUJ1gj7xsUnBcvzsxyoMGN1UE8iNZuWUTbd3X",
  "key24": "3vrLgLwYe8B4Mg8mwFRqEwCgQf3Q7fvgqvb3zNaoKrfCuV7goUbSpXvmVr1G7aCEwxbPb1Wpr9GwHJm3j41jPHRv",
  "key25": "37gE4xt6RZMCKSmsWEBoEiBQLSwe9MtxkSg9vZkYLpCkSxfQ6Bmw1Cy1kpm7GuDinAnm425Dv6UoZDLmCwQmXAQD",
  "key26": "3yGYUDTNySs869fsfGjmkbHFCrnqmn5Pkb5owixni3T5A9JYT1NXREb71vMgBNALumUTGski8ZcstLTz3Ry3UDS2",
  "key27": "3hTXSKEPYer8Bt9JAJdRjtKBqmaGVdBzpStiRNXGJmfsSvVZz3v5PeqrKdn23BZE43uZao3xoDHQpMNJ2VukwZ3S",
  "key28": "ErbBZxPPri393Tq7wN15qPiA9Pq1RKWpDgATbRYg7jTxBY4XxtYygWHAzHjoGdMEHPMrSPss5z2LcVoxBfgfVno"
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
