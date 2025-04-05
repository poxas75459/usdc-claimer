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
    "4mNFUUHyCaSb9XSybkbMiboZBQfuCb7KUBt1WSo5muxQZG7xhEXdXjUSbL5MPvSRUV6GEvdyWtWuVyvcCSg1Dz35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jC6tS4hVW93Ep5nHwpTL3xU14g1bXebg1fpLxu5jsPdpyJHQQ6GrPmfW8zKwZDssjpVkgxG14T43iCwgWRXY4VK",
  "key1": "42K7J4rczFJ97wvpxPhknMCfDSXgL7Vsy85Gyb6GyMEEzxPxfAByRfD793wQCE1jD9Te9Z9DTCjbYPwJC6EW7LmH",
  "key2": "cWsDv5y8bGirNyvcTefT9UKmS2U58VPfbF15yQ31XHGHYiBeLEa7uueriHHRNiMAQ5t3ndCgy7QVm6DpwJY5frF",
  "key3": "kijDPgYLCPZntjT8TrqJTDgmmg18Ja4k5BeABneWQACotgnVk8h3ENChmmZ3DABHn4C92vhZsBfxsMKjFF1bR8H",
  "key4": "4LXC79LBgwSiSCoWRpEXDsUXosYBazwSWrvpwZNrdBSkrLWN4u5ycUAvzy1kg3Ru4BtmqQwTREXqXiMeTr5aM9FZ",
  "key5": "4eU64GXvpDXjudUaqi48pQbXSEPwqQMcdBN8Ao4nBnDNrxBVwtvj78p8HHwprEaz9SyuRiJrcudeqghX1HV1K2BX",
  "key6": "2cBHFiczwC2FvuAReFHxWdxnptY6ScyaN88vHVS1o8bLc4gTNZd3VZ2R9dydeZHMdMkGnX8CBiLpi6w8X14J6P9k",
  "key7": "56ByQFUx2vfEokmScTPqv6voQLncda2bnLSgzTwTkuustaxQ77uDG6Ae2MCMq8Djzun8deHUq69bCkTXTo9Ufb1b",
  "key8": "5EcEh1aP3t6bb5zo3chyqTJC8f4ikP9piwtcQvJxwTkCPQT1eXx1cTH3E5ULc9bXFRTyYKnQeSnzCotnWmADB5We",
  "key9": "45ZLhNQy1a4wUpJdC91staWiLJVWgWqVDgbRJGJu1jkqcJ4ZWgKUayWvAsQ1moW8GXxktzoJkYKV6ExG2kp2g4FA",
  "key10": "2rtPKrP8rcGaLTEkGzS9kPaTAcuLFDz6tumFHhijR3FmnqXG6MWsHVm7BTShHvs6LTsHYV7SCYXSxPD7ZHV744Wy",
  "key11": "3YLzqjzEQKz86DUm1i8aQZ4DoEkdAzQoaXGqrKRUCxK7gKtcc4m8ARUtG8Nmuv7QUnGzog3fW2Ss7b7tm1ip9xJG",
  "key12": "22JjmPLg3iCTEUC3u59H4Y5QAvcw8AZkcxmGoBy9EJrWDXhH2AxL9UHQmEUKq8gwGt14fB8dPM52euEDBYpAHCT2",
  "key13": "5yfvqoTr9w1czFiG8naJU5hDErouqzKzVyReaKjQWwSN4ndQoZLZJ9BrvAbd2AEFFfVHkPtXUbvGjcqAgp9ouZP6",
  "key14": "5QUEDrD79NxLsv6xjrfZkvXi5XAPLerrEmpT5Uhg3rA4LV7coSMLGQUnSBX9SbN16mKifRvCurCV3zzdqoWYszPi",
  "key15": "37X9uCng5oTA3ZsizMxtcSfgE8WYzPKvugZJGM5jfZP1nSSMziWusPR6pHVuZWQm4cZBTycQ3ncpBzZ4Xo2ioSzq",
  "key16": "5mkrthdTkgj4LUL9VvfKP5C4cZZ4ZT5kvSSxmtKxrZwwtn3bbmndB23QNASMA7S1cj86345poJgsT8CjZdL6aqFZ",
  "key17": "2xnQ7sQU92RUDidatVPWsGXJmLDeRUT1cKzY7KmfzdNyCoreMpwTyZd1hKX6FTAcQHRmTQ7BvtK8RSn7u1uGuaTd",
  "key18": "4RDrqQSTU11B3you7L1yp3GZtDz9V9iKAe3jKX3mi6BdahjX3BKrgm1ZapKUmpAibmEPAKo4xGMhKmf7xmpy2hp2",
  "key19": "2vxwr6W81DLDibzkKRNoKpfLB4sAM6LSHrwFeXQcqXLZaJ3eNYssBCwNgYvsNdn76oggZUexnDxLDkXtjEL8nrgP",
  "key20": "4xopwubhWx2kcdNxrxKq3DSLNkgF1g5c8njPx4rvFEN2AqyRmrWdRhvNHF5mMLPhXE7JrGhYHSGGvVQL2QHSqeb5",
  "key21": "5DyuzWHom6c38in4gaA6NTCcViURjP1pyxfgMgCAmwN2pDwWgfeuFAZJKkumhWUb3nPUUKFh6mvrDKfZTtRFxWRu",
  "key22": "2Pivu2jt4iJssDUr4Y5BRDSVKY53w3Rg5wZbNFvnPv4ZcwXWFJZR5VEthWsrQT2HMnJzCLBgdQY4ph3ouKYfs5ED",
  "key23": "2Tz3aL2cLmipkvg6irgTpudAqiVufy6qM6GX1eLjawAWHLXQuPqPQZ1nGLPfakCVAYHpnpz95pWHT3fSa1C11ZJE",
  "key24": "3kigKTAJeSnriv5uvr3Ap5jsYyLandaMvwdxwiTeDGfLwCP3VGUj1rBs19eGVMHyxKd3BYUG4k4b6odR1Up8752t",
  "key25": "4G7AcgYaHDZSVc4b3ZHrSN69SpboKSJKEMQKdmuY85c2oNoBL1sDuZ7cVJEBP67nUw2ntD6JVUpANgGepyKtVjpF",
  "key26": "5Jm9Szf3kruKwY7Hbfhh7kufWP9NDWYZUAJQfPXJTFR4z61Zc1uEXJwwJw2TaxnrqLsPXbDf4wkcQSRAHHCZ5iKt",
  "key27": "3jTsLS49eTPjdUWJs3ErzAB1Fw6PJcEXLWM85cKafGG8DZn1eLPHncurK2gLwbTXSbTuZLpjv92o1EUkGANmy9P",
  "key28": "5KjRD8PUmkcqH4oypA3bxMMA66nBD2ndTiH9QZEsiDJh3fEPm75xfta14WCUip4kwg8VjXhzGiHh49wC2tkKjP3Y",
  "key29": "KECcAw8rcggLLAX6f5GHPMrk76RFcJzAFwQw72EaNRj2RkRGEs3jukUaeB4dmD1E46bQSsKZiHYUsTJWacpauUr",
  "key30": "3Ac4V45dsL54A1bVNXxzbQ9xHYT268jwPS91oqv8JkhvD4NpV4E1SLXiSNHcGZHCvE3irxaSWjpyCp9Wm1wkHJHQ",
  "key31": "3tDEeTPZHdVXaDsPaDtqmcjinQ5jf4DbfmWCzNFNYLyCTsekx63o7c3mXkVw6Vd9bxQnTpELcNzepx2GL49LbX9M",
  "key32": "2esf4fbhYLRbLipAj1YUEjnzMi3jqXpsAMLn7qSV9LRU96146eeKArRsHkccBUYTkxZifcH64WvF6n9yxMhHpqAg"
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
