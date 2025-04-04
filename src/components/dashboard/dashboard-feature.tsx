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
    "3dur6tYH1XycsXtSoMqHHaSN98oKGoQCdT2PaRnVXfz4iXjTGi8SY8o74oWWmTaQm7HnUifE1HL6Z2ejskACNE54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xZk4tqKQbPcR6ixZevo7vW9UXn11bkqUK82HKNjHQDVVn9KNhpN2xx5xnoWSkxp9Hu4eFw7CVZsbj4Aig6K8wvg",
  "key1": "4Anc7GXc4DByxXcvWF5fWnwtr3aevEkXgULASGxx9194adkijJ5xq8naYy2vzQyJXDRBeq3ZsRoYSewXNyKKMA2M",
  "key2": "9T6a5e2ki5A46EFYNL9CE18473hYBwMAy8H7YrRMPMinUWfsdyV9x63UfmDicAgKTx3YVG4PNm9qQU9K9m4AzSC",
  "key3": "4A8tREkmXQPRFEkpvY6Vj3V1HUekAoFwq8zdAibBxECKn7vczFsjSfujB4f3FBefULhENkqggVdgnT4VyHnkyC1i",
  "key4": "5CuxnKEofKGmACUiBek48ypKBjeNuCNNN5gj7KPUJHc2rUxYbRZbMWnDpkf4tcrVjoXvzVGfbHTZG2Cqm6qdTBPX",
  "key5": "663RF5yWEPmXc5nrHtgSMBDiBCDQw7Xp9JFT51TxoDGkxNs5yPgr2aQtkB6FGfkmqrrBw87hCVqmtZpLKFHd2Kh8",
  "key6": "2V9DnRsVG666Qf3vDxzTNS6zaK9Sb8TUkNb27ozW7DGc6Abkdh47P74irGDVvMP3rAUpSY24Jm4wwL7otUNZoaxD",
  "key7": "31mospQsLxpGTPCeqv8bYiZSu7YLqe47p2gwY7YfUCkc6HU4gH3FhPbxpPsSinKfbHjC1ysKLQktjmitjnp4hiZ2",
  "key8": "4Lk1qSMdFTxNqfzCZaguvbMDYqHutVoz9QRSZyGLTGt32axt2LcUVvLh135j6mgaAjyjfFKzPhhbX5ScL9NAiz9S",
  "key9": "21rWKE62fgTG9HE7gd6gbXrDjX3v5PiTVporBReTUk43n9cbFzvkXW5prnPNUjHtCUftjquqfxpkJR6SvcmgatKj",
  "key10": "J98b7bfTJmEMsY31AvZVVDMUfQsoMhgytfvfq19F5fnqJyyhWNS5kEHQz7kcxAPjCnxNW1uQN8owUk89urybUHq",
  "key11": "5eNKoFH4F2N6VvMNFaUDBLZ8WgPAHK3JzgDhtBvPB9bMrMLFxfLEsfRqYUC3f6vUNGCtBkfecNtJWzzogbF4e9Vm",
  "key12": "2GVtYX5YoJxQM5DYr6r5mHVATpGvnAvfsLmG6FKfE25qVbjrSf1RiqRosvrMwzWbwh4j4VCL6CLGqRKs8bVN2GBk",
  "key13": "2M7CqjGPQeSAnVJCav1XeJrGB5xs9sbVnsDeaaFDHKiCfeS7dz9JrJRHqh5YKxmMzDfPT4cUrF3EUdjWbYytQ6yQ",
  "key14": "51VMFc3omGfagQ4wznu88fqzScvFi2Y9tDX665Yv5YXK3krQTKFheEXF2J3KxN2h46BNNp2MmjN6f7BP2UtJLDpD",
  "key15": "34iSeEFLnbi8Y7kq9hDBfUD6xmnKyfQdLFHsNL4hMGVWvgL923fiRMgapRGw93HVTtNMSqrPKqbs1CHugp1Dkden",
  "key16": "UKQcmVhAsbFbUcV6hqKupFaKtwvKAHL6xAveSZC3HAqYNnmX5AuQTEigPtEbSSGWidPMpdSfXSCXpY6QNfC8XZw",
  "key17": "5pNyy8st1weapFxWLb68AAkZPeFDmWcNE8CUeYX3ZErrVTq2LPKjp324G55bZeZ4Z1b5Cwmwpbmch9nyEJ4J4j4o",
  "key18": "4hG9VbErQ4f71p8QVmZBg3RUkEiYeXvYHbeiSvJN4gofnra1LjAmuSLL5S5ccFfXHG48r5xaTRceeiuqzQj6RmKT",
  "key19": "3ARSJxyE7r7MbgFycBhGuUwfYRe6VS17KRA8ucdvpZeyHFBvMacBRDuixvgY3yJZ41Ubdgx9UySJoaZbW1PS3m8Z",
  "key20": "5Z6kdhAT6xcaLfYjDiBS3nk37k9uPrwFrFoUkvA9eFybFsutkcNidUhCuWM2C71Dm1iEB1PixisFnqTVyxPoxGMk",
  "key21": "3vhPuxp3XVTkhpjrv2jYcpeE5gksL31x6gaf6T6NkFHQ6EQNrZeBW3yxBpC7LGRJ3oQtqfFcNMLJZEn4VL4kRuUf",
  "key22": "5bKC5QiJZ1jvokythihax4KR5YTNjPwar154LJsobq47zHpHygbvvDUGnSptoT1i7M1DdtjTcckadVE1199fmmww",
  "key23": "5iew5k8PsuWkZGbpm7ih2KnKXR5YXZFpjcRapq2es1TeCyacq2Hk6iQVZmgUrEA7QUHei64AchDFbfYXSfkUgXER",
  "key24": "4EmEXZgGVd9k2tDfEqSpRjaNYQnXNR2Uzqhn27oCXXod2SNGhLc6H3S817QEZc6ycaDtLyk7UxJeEvwkxwwEYFX8",
  "key25": "2M7WrfGVsUXdN2YKQWm7pWjU1dM95hvVdMg7ugBnURNonDjARHPXdQMzm16KFVT4W1wnXCbdNQ1qzoz2kEemTN2A",
  "key26": "66gurpW64WVYJx5wtPMpggrN5tywAXAy16gnG53NZZ1hARZ4hRu5gaPV83MgMMstUhSX1JDrhcXXZnE1GAX8FXAr",
  "key27": "DQeeomiHtCKEeFcXRvPRsqGd4rGsBqAv6dkUHqgnVsXmGjdM6FhXrj4a1E9d1hWDP7yF9nnxHdqirkhE4USDuAx",
  "key28": "61yPJ2g6bwAy7KzwvynFrish1JNA7pYWEvyndcB9MxofZd2X8KfsGXPv8CoraDQamrfa5v9G5Z58zGZNdiLWc3jX",
  "key29": "2VXhsbyGCLEdZqw6CCSk5NhXR9DbSVWv9HpvAqJryhSt9Xv6AMuBxgY6kK4zco9NWjjcazhJKXymB8gNWYsxiJ2E",
  "key30": "2M7nRtKpnZLzqJefYwCAESeTym4zGLtBWBf2Q8wkEQXXrws6EYTZkz5mj2mu7rLfTnWRYoPt6Z7BiWFRUi95pUHd",
  "key31": "4oXQ3BEe9Gn1S72huCAGRFP39xWa3zdr32u615JKNFEcF79sD5psHRiCsBLPFiUTMDm2qnVdruTKBDCtif1iPxDF",
  "key32": "5yDmPQ2NrY9KPbKcDQ5ZkkJsBVKgPWmZay7BrJE2ENysJn7vKQJcv78oJUqD2jkGBBqurQPzsvK9rv3AyQtkADQR",
  "key33": "6hT1d7AKMmgWkXfFfbnv4LThRUXJJCT6g5kdKzx9iLy6KdQUyyyWGa7mVs2coVKyz4UgkQpCDzAKWdt4QFg4qph",
  "key34": "3X7MBgph6PENySHWDnL3w5AJ3Be6BxqNav2t8oAifuMiWHd1paGRDEbubCMqkEZT4eS3D7feSkBbTsuwM5oXTYyt"
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
