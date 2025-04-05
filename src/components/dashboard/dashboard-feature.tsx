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
    "2TyeHxge7BkPXETixDnvZipLa1A2sMdwPTJCTc2EgigwyBi2pCQSWesV1dvhBP3EnfCt7Hje7RWtLQud5kZ99Cot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iqyKAekTHcdFhPPefaqHThwz3Fd2buQt4TayBoCkf4AZLWegzauuRoyntRpdWWZk65omFEysBRxp9ny8D9bNqQw",
  "key1": "2oDC7qKxMMUyKK4GNepqUgnF5LhzPf5p3j1AZ24EDYdbCutoA6DYuocUUNAV6H64rUFs7oqRtirfy23y79iggkN4",
  "key2": "2M9b2H4GrZsCysz1tWJZpVSbziPAVYjZRASspqdcape4if6DvMddqev1PRaKvN1HFmjsUqRYzPowSFmNrzoT9CAq",
  "key3": "5vgbYxTc2Bhnwdz5i2F7qpbtmpJmtTAvyS2YsW8bdmvsy1CEnD1WvAmjrCNxyexfBU7Ajj88PpK5bFUwHWqv9KAk",
  "key4": "wuVZLpCT8qpkHzfGiTxGtperHHsy8undV5mdWm8RiCwSFqy9nqo9FENUky34Hgx1Sn48oJPJZv2gQGzD5B3yvdK",
  "key5": "32XCHsdma6mdUKv7gae5uK6D1Uhnzs22z9YfKwKdTAjs4gsiQosjGPiPSKtbpWyTLr6rj2jeEwpRt7f9GFp6GKFv",
  "key6": "4i3u47uUTEhNHNmhPa24z1jK8uREEdNJ8tqfPghsqHnhc4LHaK2BTHU9K2vcynx5kV264L391u9XLNsvpd5jCXZA",
  "key7": "5JRfxXRpP2tjfZ6i5Mt7DigiqjfBCSHDuh3Qmxo3gemTe3378QDTxf4kD7R7iJ47zB9YpSYYrWyGmaV5T6WY7z99",
  "key8": "3TbAJLVjnToQj7dWcGTEf3q2vz7xR7x2p2BG9scErtHKRfk36hvx358ncDDMEGa3cPuFwjJ9WZoCxCxjRZeiy258",
  "key9": "ADAVLTtbeGEpKDah2rf6j7QaptPtU4X1UfFFSWhAh9qE3VcNDDc613DfZJqYgYU92p8WF4iPvvxZiiEW44k32Gs",
  "key10": "dmhzy95KRajeF3ySzkQhQn5bPEXDCxye2PuZDeEsFtPEhTm96RpJvHAEbrDwbwL5uFakZo72Hhzm9zxq8JN9hj5",
  "key11": "5XPGRFdV8Tw2L3B46JUNEKpExqTYjfEF1sesNJRtYPHwaHLyXeQT95VvvtAe3R9t5SfBYtXziyYm3yE4e12QxqD5",
  "key12": "4mjTFZbvgYTStv14Ce9xAeXDMNge1y2eRsVJ79CCrtvittsy25rts6FhRfTzuxaWBmbwammuKXGR7oc29359BusV",
  "key13": "2W3AshoGoEjwyEYWt7gRofiqYU2NEDP2zZ8YFMAMYxSBNRnVNXu1tXMhvAwXeLdxUuakZckhaZzTPANFgia8Wbhd",
  "key14": "y2ujc6gRoTuFhSJMzdJMqm1eAJKjr9KUuf978BuUjPYsq7z5X4PkArNw49SzDzZ7iHqVQtpVoVzfEvBB79N6fSh",
  "key15": "5EoXga6FDju8keDa5k8mTa8XBYuqtwPJWk2LXLgBVhY7hSi84sWN8ZdQbvoYpX9Tu5WhpfckKu6U1ARxnYpFtar9",
  "key16": "4kCGaDCtB4gHnc6DJqrn2WVyJpqTZMpw1PDbkFpjY9GvXxqBiHTicMb9GB8f6btdbHj23ypSysDCr28Sy6srSqvy",
  "key17": "42rKVYXGHJqFUNymeGkks4gF4UbxKTNMHuD32KZZtxK5dADtnvsS8kccBEEUjDTVgTFQN82fezVgQYSRA2XbW5r8",
  "key18": "3sEHfgtrUE21QQkewYPk72y4N9ULp6RAgdjBPBAjfqxUxPMm9GCL1f6c7oCUfKgGGJP17md2Cmh3n54AcdEuCzX",
  "key19": "2tzrdYV9Fe8Y1WVzsigNxCr7T8x6psqpCzMsBzHrGTjyf2nXzRhLgfRV4wE4BXyz7gX666ay57QUU2XPfUhrkECz",
  "key20": "5AnVXhSPgzPtu3BnrbVs4teB5WTJMn8oLQhd7zx1XfGKoC2wtwQqYAkMtQh8UP4nB5zViFWsrjmE1j1s9NkiTnDW",
  "key21": "4BfSv1nB9K2Fa9dd1pdNioh27gLLySMmkxTcevv8wf5eQCmdwBoRgTd2sWb5zTS3uGwLcuNp76dnbo5HeB576jyX",
  "key22": "35qyKbgXu4p5LW6Aeyj2RgDT93x4Eb45vxhH4GeSDoQazrsrcD6KFgzYDEJgYP4MscomLWyVzMv21mQLjnaXnZ29",
  "key23": "S8xt5WMzG4eVLVrRdV3BJj6HqWmeZkyMXqViFVwbmJWHWxDdtxyyFgcivt1nVvjbdfhE83UBFYvoZXTQTKp7L7u",
  "key24": "uLjjsM6WfjUSxGm45hhfgiDipJDS14QmR7FviYBcPtXFSheKoBtYH2Bg8jLyEzniVVxEFdyvaePsKWwTvcmcb7z",
  "key25": "39inuTvQ4Lja2ACVFKfbM1bTn41zpDcP84JUsc3nU6pbTY6zs9mNkrAvEbV7DuN7gHWX6kUKnsT6QjWxKnfKv7CS",
  "key26": "3YEWcrpsDraBRXxfC4LC6sxcnuE34uYSYFtwLKWG5f8eDREcVspKw6wA2kVAoipimu24VgT3riqpnrbvzvUqfEKY",
  "key27": "5DWrm5CXBgJDKi9Pq3DqfojjPx8b2Nx6iWXokXy9fQ1P35eygL3BVnJKVdhs49GedGQory7MmwULchRCSkKZUxf9",
  "key28": "3YtsbtwWp3xMFrpNHgqrYjutsVYoJQp9fvSFjFgJLxuGUTFRMgRDfamKHgJ4fetdysUgqVAF4t4PTtD4vsi8Q7jp"
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
