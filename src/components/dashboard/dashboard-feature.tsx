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
    "2tHHbHmJ72By6wggRppYQ42zDU7eoWVfGADDz6dsMWg2V7xAj3mJJ76SbajLGMW6q8UAr1bDWVinyiQEmTtxi8zN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v1855rHvk3dJgTrZfP4Ktyxh4Dp5bEYK4caGh986f4JUTN93ooayotnX2LZ1Qx2aTRguXFD9EEjvuA6w5bAwjDB",
  "key1": "2oEhrMPvNjgLFS3VrRFVa1QoVA2tU9a18fdTxnrXHaHosXwbiaDfqoTeaTPkb81vyTNRta9gXPQXBM4Kvsbqek9k",
  "key2": "gsuAYmnnNgn9TQaU7xpxvnLPFYWexYkN8Kbqqgxwb8sYdrGyFtLthKGv7zUsy6WhHhmqKqD1sumASZJ9fhQVvf1",
  "key3": "5btA9179sCXBMn9qdm4EeE7FTTEC3E1g5v8AvK7SgwUApU54ckF8oMZmJFmh4U6PL97rSeq9g7mUH3hq8wMMR5j6",
  "key4": "2so6gDvpmuHBfGhMcB8vRsUHTfztgXgaJsLogkTykk24t2D7VqPRTxAo6Mhvy7N4Jh5C8rPSVsTHGXCHZLNjJHq2",
  "key5": "34gLfgHGeL95ubzgCyYwnBukntoeogCyJWfV58gh6YKGSrySBEzUPzoep4F3oBa2i79yQ6K4fywHCEK73snvsWMJ",
  "key6": "2nqk916PB9Cdh68VeB6rVbADmGbJFsCamwLm4MZ3HBED8gRpnr2JUuFU2CaiwtTAfXXZ3GJ6AYnUjQv5LFibdvVj",
  "key7": "5w2fkWTmEZoUuAmbz83EjiEA7SK8x9YLJ8bWGxY7REqtGRsm1RBrHUszTsEKWvdmLpQDwc2zPKRF2N5q4Ay89qu3",
  "key8": "4wxTukDDVcE8sd4dpBveRBQS2DPYBFWw2TL9XDkS5ApqdvkjMjgzFqdhvKgup44bTR5CeDDZf4jjYPk1wnaJBXE4",
  "key9": "4YfMVeU6Sroswy3jNVtmviwh89DQame4BeXR8nhfp7N1TFCC7zLAfG9EDEpMyAsuE6b2R96k9rfn85vyVCva5n5b",
  "key10": "3qhMmTA3UfccyJtw7tZ3RRRYvVe58DA4mdQW6pLnEwoN1QH8HBj5qjLNohgLKwb7dE6vvf5SpWiD8tsNERW6oouP",
  "key11": "5depqC7nS19y7vgsahrrdhCTWKs5g91zZG4QCXJqBjLNveSuucToKhTbqAmq8jTn3aE68Utbc1mY1QkM1WYhZd95",
  "key12": "4LpvWCDShsrtpBU7bUrJrt6D1qHZ9NWS313kZqHcUvDgWrm3KjJisHsFdXoK5Whp6suE3wo1nQVVZ71hogZo4k9h",
  "key13": "5ynndBjEsyy32md5hpSMGverbYU38iJykPNFGy1ECiCWFFcZEaZuqmvgmpUVJbBRUo6wqKtaySXUo4MFGvuzSsJ8",
  "key14": "3kTLGAdFi6bR6Hp2msvSFdhnsGMx3Wezs71L5YfB5gb8NWzf8uHRYMSy3nHQjtHe1KJGjyrcFiMpcorQq2sTsYRr",
  "key15": "CoxR3jpRzbKz2ov7Afbk2BsXJdqKiBsb2UnJQeeyDedfBuSw3kMG1n1Mf6otFfduxPG69XYzAhAHv9gNjHQxrNP",
  "key16": "45jqHvLzBtt3CKCjyJqqhhsZsijYV5YeXyrRvPLnxyYCjAY4QnLfsiMC9gs3BG9fCkUXat6JSdW9JuC6wqycJLni",
  "key17": "3p8F89kLhqo9GcCTvoGxh11L9M3eU1YfryA73VmeEYn9FJ8r5MvTCUYNfPkCCPWsaFbyJHtm4RmfWPuG2oGV3a9z",
  "key18": "3goRxP1M2KeRtVSNt1H8fUU89oTK1bKNGcaESN6TLmchrRJfsp99YeA1xGYP1e4eCADn2Q93Yx9j8JJceqjXV5ot",
  "key19": "5vAcACQ9fuCSUeqsReHntkGxpYur3ZEWFxo9K8nPZsq6wqDRamm3JFeUDWUNgcbBh69555txkf4cgjHFz8vwER8F",
  "key20": "22BaoZDKiBLuexgH8xdcnSadrdoxnmwEh4tExst8scGeeHY32SUQJyNDWv7Sp2BL6LBsb1V5DJNBU7Mo41XbXYwf",
  "key21": "5rvCzzvUk7tvU4WRoUV6oLbMGf4xNkLpA3kjTzhUv4HBYwiKr6VLad6k6Br2iqdhCLTCMUXdnhPWLLVDRHQcoks4",
  "key22": "35YWk5FRPe4gJ6mBJsdSc8hjzNCxejx4nXAu62aogu6P7euuzYHbEihzBwyuwNJ6fCPwc799sb7XQuLjtWP6nhuT",
  "key23": "4bA8mnwcLBo9b4ZKEgSooJZysPUe5GNQR26kQwM5pXyqcHSX2Ba5BNQr2tKRii35MV7KCjyfEJZs3mauaCJUjNBf",
  "key24": "2jn1zJ68m4FNWfMSXQiCoEKw6LvzM9WQ3tiYCceaTtbpHrUVoFQu724G9vVGKAL4uWVvsm3mny6WcdRpFD7N3vPH",
  "key25": "5ChDf2coiKYeTdAofjeVXVkPxhnMEy2QRLCaNYkCcKsDJK1Wz9xgCLQnHuynYK16L6RAzx7uBPiwXddk1urh7xNT",
  "key26": "52pUkZuoW6Fn71kAVZy3PQthgWp3GCTFqA4RjCnGyDFattagdMuLLGsLWxFMrp5u5mfPPePP12X2B1PE5y7X9DLk",
  "key27": "35XRbWyQewF2wMawTJ6mZZjJk9R1u3SeJwDHK22boazmc6AE2DbWvkfVMwRxKqBgw46XvJxvppB2kLtKU5EeT3o7",
  "key28": "enNB1vdf7eBkPWbj39BaUyqzF9UhZCXjHefocsVXwVsMvQYP6tDvZ7S5Zy6tzassKcL8a5cgyMN2aF1U8pheqch",
  "key29": "4J6E6dae8GVXdrr5RPXvYmbDwrN2NT1Xg2vGw6hMXjiD4Jp5bPVK2QQugDXy5KYUTL3qfmmesraHV8QTsCSx2iFs",
  "key30": "315Jbaz9wUoKDTfJerBMDrRExtFSZBJq71gC19i44XsES41v27ggQk71GUGvX4oHoWDsWK5MF979imw4inZeurQg",
  "key31": "3o6WjMxM7x288cuY6F2daJp6YgdAnWx3Va3K2kZH1f4oxhJQfDkrPTX3xk6EUJoMABtYV1oKuhBUe1ic1YVdXcgJ",
  "key32": "4eNbukGM8dmhXrrWnvVj1MMSKRGbQcWHgDzvoeoUrB4CsxyRsmssaQ9v98cgPCRkypw1yc2AHm3SF1kU3oc8LQ9"
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
