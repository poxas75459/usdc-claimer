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
    "GhT2WmuLmwEKNZ3Y5RJsaXfNLnFTn8x3Evagq6zG4gUrKWzxJYTEsYP75SpiVWRgrGZT2M6DZMR2zn3GU96bEBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48hWScpFQAvDjqmvvieT26QdTLXtUJV5WsE3PNd1A4HLgQ3L3XEjYsWrGQwYtRER2UENMxktZbh9yDktoMN5YcuW",
  "key1": "59GyEDPiLTTowMk6dNPFuMsp5MmYcPSeGQQr9N3QeFKLxQ5GSurshbvgTcrjZf1pmzTWJH1P6T6Dm9F3V66zHfMs",
  "key2": "2PP1qF386bcgCPhx8oDjLbuLeXLeYuYUPvDCxLGFy5xhmf6qUrN4oSKoB4Z8sTFcTmz42e5sKNAGaozjE5FVZREe",
  "key3": "2Rx2a6qyUx4f69GncVZk1Auf1jXo9QzkJMifZ2qBBBqm4KVA1dLLSnMgygL6ihSarWWo4m3tqhtuBE1bPkEnxchb",
  "key4": "5eV3mzyru5z7CAuYeCYdCxgaCYrGCMRK5NAPyYBNwzWHWW2mxoYrkDi3vGqWWTHFGQWUHeRDgkot4semzmao82Ub",
  "key5": "3nDXTKpN6h4gds7Hi6YPBMcrLPoBRD65tM17NTEqYj9UfdMbwo4o33vsNtbhwpvgW6a71EX63kndeyfAM8oLrDYp",
  "key6": "5yW6DQwLXRfvbqkpegZLyEGcx9Q4oU9TetMjwC7Daj28o7XEVJDdh6DChi5m2FrACHNyoAtBRKH1xC44asAXUExm",
  "key7": "3EPk4suZQ65PRKSE7FzKpfYoRFhx8J78woTdqANEKxd3DH8yKTc3EpEwSWc1y8EtNHSao2qrLzbKwJ7dY8czdZVe",
  "key8": "3USbACYsXWc6cCn7x74Z1MxKFhE4az2anpTVDGkV2wjhznBLzqMEAgyPxKDotQXjeYFLUMxxPuBdQHHEuktnA9sV",
  "key9": "4SacKjEvDHycqroCyWygLhJgCYvctMKx7osGSvjsLP4XFdphKL8jSvJB5EysENmzBADY4FaVFuudxKxaJbvGKdQz",
  "key10": "oGNTRhfSTtXBA7CpEYjpYVKu279undFitdwbxrU7KGeb7p4xaXPGSwAcapHiUUuBveUJpqmbuqcAmZgusK1ScBQ",
  "key11": "4FB3pEgdjceGNiz84fx7kVEmDbefBc3vhsaDS3VU45bPZE3h47wpkekXjmiVRjT3kBiJ6wDaWfRoVGBcJuy7RZUq",
  "key12": "2Pyn3QDUZfZrwUmJYA1g9XaaoUEYW8mAZYFx9C7Kb5qQDLaTbyGz8Qaih4PBCQPgopihzULESQ6s1HvY1DQ5z4c1",
  "key13": "4ZVSYqJJDDfPAi4VGeg2iWx2PESbhPv2DCZ8tHX1t2jsZGgPc5JtuXNY1sKzfKXC9fRqaai3TfUxYXwMNMBe5Nqr",
  "key14": "4AG1H4oRnomo4SKY9n53fqfh2Va6Eejg6WaqHXDYSTCYPxvYvo2WsJ27e1jAdnVpmkty2Yjk5udGY3uVcranR4Wz",
  "key15": "2Bfa8K5JpqPgEfUwaALAN6xTxHU7YTt8UWp55NjeD8d5jFdTpgxtknLZh437vNFFEeCLS2PZXE35YpfvJ4bFtYPz",
  "key16": "5xV4J9sHSAdX5MaS7GBQmEY19XwaPUame4gnXH9QvgmfN4DXKaKqA7W7A7eSrWzhHE6R7XKZGt55MFq7SKoKkkwg",
  "key17": "4RkBshg4fxpM92cxQZRLaXEq6kB85DsMe9VfD4GbTfUHWc7jA5y6AJxXxa5jcGGMan26UEDCi4Se74JYUt82PJtc",
  "key18": "3MAujsoTbeMu1mWxjDqCYLEYomyxbjjpTmNpchCLkRfVs7z8ENnTTZ9EknxWyn3j682gmbtzYi2chbsv1V4J6tsm",
  "key19": "5ckctYxmQSzn9WS9xeGbvqcF8jPasU1SBGD2MwjgHZUJB7dTnk3zujJfhZnXJ1rABZFP5C4wnniPrWgJg18CnSVm",
  "key20": "5GS4GnSF5wwFs2TioeuoqzJ6C28BeQwbffmFVka9BkJeTTpDCqBujG7J3C8Ax5qq9WrqNkEdyWxLwFfx5KHWrk6Y",
  "key21": "oWUsVH5RcjumoNbf578Kp7Uu9NGemVoeQGfuW38zanGURGYLVTNYWF9ozDXjJHZBMKMwmoEqivMiP5Z5cbLXffw",
  "key22": "3yNKeMihJ3g7ZcrsXCTL7kLkMb6PFWDY5wg88RSvVrLjDfKdSeKow5rVWv6uEQjcnBVxSJJDj3rLFqdo4CSfwqR5",
  "key23": "48nksEEYxMP8FT3eguczBPjgvuysDBWTSG5SoN7UBw3xuTPH5Yd6ZERHP2TdV8Pd1J7THmeVVxgPruecxixgo5zj",
  "key24": "5o1bNhUNXNNHPgyRx9jwTPtECri8VBorjMvgdGUEGUTCj5bf4WoxeFLdAdtMosK5qayCayS4eT1LmYv3WMLNC3fK",
  "key25": "51nrM9pCRt3Bd3JzoWbZiEF1LPgh4oLfskgUUpHat4jZ9sRYXhWe99Ph2ccS6PyMUFUqMMAcEUguARTLVhExp7Yk",
  "key26": "2M2myVuJyzg38edy6YPt5ZSURMyT19tXwrqeATBfaYHT5DdMcd2i9YLC9V5ve6MfCw7ZQkc9XbeaGve5JJxAJshW",
  "key27": "3NivFbxUeW7MubC9pHtD3wZRvh3dGLbFMCTbSGhThyULY7wKqhJFSsZfwUSTY7MTTQdYN8uP3Kf4MYcd33Ep9AvX",
  "key28": "wm6KYwQmmxbPpwmLhJbEmhsGbcg8Da9JmLKp6AX6J2bt3iayct2CMCfRoRkpowPywJyNdQc9NdrzTUaLqsyQUER",
  "key29": "556Z4fDadHaCDwjAKwNuooWFyQtdDWkjjZxy1Yzt1tqWpevCfszQPJNsfdRXVvMAZ8K3fsni9rfngYRCpXx7tkLx",
  "key30": "4nu6qf86xgopdnZwomdiLpYrjca8rgYAkQTCKL5vLgAiBTQUjnBhYbisi3CW4mZmZduGBwgPeLavTZrG511tCocz",
  "key31": "7i3rji1gSLRzbGTCmpfjwmvm8FaRRYTthNUKFQTijadF9x2sSN3aczYtNvfEKCrjJvaCrbrvfEkKdXGADE9P6Mf",
  "key32": "51taETfSyxsEpnFRu31tDynVmcDhuzsGkhw8GsADpJsE4swvW6XXJ8hKbd6w8qYiRF35Bi8BSWsDhx9gebLtAb5n"
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
