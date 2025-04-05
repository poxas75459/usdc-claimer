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
    "3vdDTWxUdXY8Xr5kFkyTUNMa35y8vF85JpkqNZ8arfezpSnDej3q3hQckgijtQLTLcwizGbY5FnimtRgdwLdyv5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SuAWd31x8o4kcMTUxV3Q6ZNhWiHpEzxxUNqiT8xPHynHmfmRUcnLVuQ7LzXVN47jpbrnVWvPjMfJWRe99AumBZ3",
  "key1": "5Hr5zsVajNABiXv858SbXxFsBrLeDoqBGb8Vv37ev7AzBvDNMwpt7wBYtmvQiqKqxJrEoJLeHXF7WwadwYuxz6MH",
  "key2": "hVRY8BZCkd4v8RM5udCaiPcRxE4kDcaHbzzwL7boedkwd2errmTjdRcwPKdoDQhKWHyKheZJHWXXQ7Yi4fRcASk",
  "key3": "2j9cnMJyGVXj6vTo6jVGPiKSJiijW5uY2QC7dBzdpwJP7BLusDVefpezPRDe9Gg38uGwDmgQDWJX8dPMMT7E59ry",
  "key4": "3eoy8LaJcRg3UjxGQvBLhJifCWBn2LcVVH3vWdZ7GTRdztXTZfNi2wfMqY6A6dajDMSoWPiPAenpGALbH82mmfWc",
  "key5": "VcEEF3f88M67hH4g9zDr5E3zUziHmXxyiL7hXV3wvJaiKG1BmWMB7MhTatiJscyHicXD4NawpPC2ZaTTM7cn8AR",
  "key6": "4QAq2TrVwmzHUVjFv3vNW8GDP4DzJfvfzN7AKEXYyiYAkn8L8YM39gtyg9otWuQ3f3hfcMSPEFqaqxwnQC7DtH5L",
  "key7": "2ybvXA539Hb353MuWqMgLGyfAEHSG8TYepWUQyrBFQU4aorFn6kNAUYGZBTEVEKYTBQ4xmKtsztDHk3dmA5BXSX5",
  "key8": "3ooNFoZAgXR9EvZiYmpvVAeDBYHimtspVWWQRXAXTJjcxLfjHDoYiwBMbQiTAhQ4H3TbhwJEgnhouaXuEJ81J42c",
  "key9": "57hRP9RiqmP2Gumxc4J7ULDaHwZt3vC6Yuhf2YmgcQqoakPtsJLSi4BpwWH9wyWfcCLdPCuDFFy1uRmjqWSNTCuR",
  "key10": "5xwGvLD9XKjs1PauMFo9jQzv4boFTuw6zcxXViPKccSmEgyzyfFtszJxcJjHpriqKDtjctVstNo47cMUF7W4qPLk",
  "key11": "5JjM2U458YCRLad9Pe8TjWaY7bzaGYvyKZyWFcKm2RLsca5fd3ZB4Q7pnxkLhBZKditc9sJjHQb8fPdEmXb9364e",
  "key12": "63XNUXQkKHz5Vy6NJyLFagp6Vz4FLTVkNtRi6JAV6reyEXt8bxKMPNj9gdcjVqJgtJe7V2ULp1NnJUPaHpacVQEJ",
  "key13": "mF3TvK4EVzcjbsoLkuap9seMrVuctMje5VB92Nr65j2DPdUu26QK1JcinR5UAWDTxbVASN2Z8NbaqAK9FMCsLXf",
  "key14": "4RnGsMLK3LKCwcrbXCesx2KWpixEhSMWj9CTwP5GQxQSMi5pKsf5BV4chu9yH57Xj1yZc5HApEmdAFLKHy2h8X4T",
  "key15": "3kJmgD9N5aiaCBU4LXcoukxkPHthdHRQdRKUg1TV6cNMx2FiP4S5cPM6oubRdjtBeF8R2xtDPd5mmfWVaaGfH6qg",
  "key16": "43W2Y9goTVdS6rXuV8PAUR53xVkte8WThvkEz4z8xyN3ErqboSxQ26wuFnXRAYdGJeyotNRgAyUunkjq6Bzn77SF",
  "key17": "4L7R2RvHUXxeYSBm9gYumKxn3FgSZoHxk7ZrciEuepzUzvFNH9toi8AetpzfNojA1hsJcAQE8uTT2MG5azu4vHW8",
  "key18": "5xkHW29Geopb6Ye5HUGbH3Vsmfe2TUSnADxqC6BeW5HGVsS2VaFAdxecXYrBy3BHQJgU9Ra73GBCjuTTB36d26zB",
  "key19": "oesKcy3sZam7Pgz52J5McRajsBt1SmJWXKsE5YcX1bWQM9bMpR42bEKPPaNmAJNmN4i7en4tghR4f7yhStUbf7M",
  "key20": "RPEvCKJ7fJ1VyYn4CkFa8fBUGsSnr5s7obi8HpDT9r4EyucUiTNufTS6qohTAGAFDUUfuZT7AAEKNsYg4AxCh56",
  "key21": "3TBf34QSyfziETVf49M8KEmPC2JjiFbMoKNjjE9rDzXJkKRjpHmhqJQUkoq6N2E6MPXLVtRCp1gPXAvVhd88ABUG",
  "key22": "2kCPSYjWaRE2eFGkh7fqpeY64QYLRrSunQ7yjDH7b8LdFkB9NSCADVrPHn1SMVqmmXBvfzbh6yaUBspvgux7uoJE",
  "key23": "2gVUnLwwVJ8jcvkBtDcTnF1GG32q7qZ6QteQuos3p2GQj4AVWJZTifFjeCEmXuLxXZiE1uwqKbH4YxCbUqmiKroe",
  "key24": "3ftiLEYamjzfDHtaa9zNEuj5PkKTxnMwZdMyC3vmMGY4P9T22PFqVV8bcVxCMrNzX5KpRsjahBkXKJsNqX1kXt26",
  "key25": "2GZD2HiL4UwfhW17WiDThStPjssnULnHSzQHD5jfCvphAirQrgPBfDkx1qP95grJoaCV9hQwA6dRioekbGwTpoU6",
  "key26": "2sJsvizYXgzR7of94UZ7UFDrwevSZ44C7UTwM94vSAT8TZEE76Lp2QmapT3PvAajTBCmBT2B42dFyHGcbe6rSVai",
  "key27": "55t154w1Zxf6jXYCSXY3iJcrVf3e2WkjKSV5Dmi6PZfkfyareduDMqz947XkDou8JsZ85m7LXZ9s8qdhMajHuAQ7",
  "key28": "DeXjKwuVrB1Te2tB7qE3q73gfDcv6nQgZVUppTXA7md4SjLhDwkp5JdpbMBV1otEcyXYASqXGGgKvAaTQgoSNti",
  "key29": "57KKN5UuATp4MeYjqusLhYvfmcR4KJaLwqwzVo89ZugUqz3SuS3KC4buPSK2Pe67zoP9QS3wX3XQ5Ep3NXnxhohQ",
  "key30": "4aJut9K6BwhRQ8uVZUMDyZgZhsqgf4R4nMkxhWtKQiRBgWDegfQfVbPvHY3TE4TLzG572B5MQQkDeFV8yo74LNfA",
  "key31": "3JaRckWf3ysTbELDAfEEmFeaaKnsrh5Ertc5yVXzZT6v145NHvJZQ87k6UqeTmFG3ZEPYNsGLrrhTx9hungXhoki",
  "key32": "3HKHNevSpjPcy5HsF8KraiNAv5o5uDkYPcsv1fcEuvi1seihgqi7khSfGWd4ux8FMqfDJp4FPHpyDwptRnsXCLZt"
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
