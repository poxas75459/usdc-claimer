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
    "3C3yA9rDLxypUV1bUgSsDhBw8g9qjFFDucPcGa3aznwkdgzBwowQeKxpTLTjMWnHhfSCugHivEmmbjdWUTs3uVaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GeMYnBHmoRn8Z1HD74xA8Rxg2JbNHds9KyLa2QqZT4ffVbyRobyTFKWuDVriWZtXfDAokysAaMBxryapgCcHqjN",
  "key1": "3xT6Y9f33DA35GQxDs6iM9xSme23JjGBrxn8qSd7bn3drKdLd8itSWpPpyA6q1WGjRkaRoDuQyRAj6x1YJZ7XgHH",
  "key2": "43mryvJaxvQp1KyxNnkv14oEFnyQDwgmmuqZ6ozJXnZFDzSPM7xe586u3TKY9aEf2s3vunAQHfxBLo1yQbz1X1un",
  "key3": "5JCAQEow9RsWCAKVRmHfMXu6kTsnspXKUdyiXwJjgnmqc6ivo2r7mkJAFPzcxSVCA3ZUxW2QCMDtjDA4YqgBJGFw",
  "key4": "2nhx6uiupp8BdgvQicRdmFVjzGqVgXdVH2bzzAwvK3KctNRsoUZUvDkoSVggdrQjAnWbiPJCHy7FXW91RzqahLp5",
  "key5": "K9kMWUys438e1f1RdoPyNiLFuGmroJp9c4DZHprNVtRbxw3ghfoiwJdWa59Q4PvA5DffgqxnAD5E2HGRvMCxt7q",
  "key6": "3CRs3YgEueV9mQbmrCLwXREwWqJ5vnC9neV8pnJnVXXUJ2r3doLthpFJgVBj1XvhJLACy3Kg5bNg1J7hGQ72S16X",
  "key7": "4EUAugjJDDRzf4kPmM6yS17e6hycYK9yRDR14VTtzvMn2LwW3xWni9LqrJzez7LztXaqu2LMUBU1KnavfAae3zCC",
  "key8": "4pL1hEvzWmWHcuTTm8CrjmtH73tcRGrKxmNupjvug3gdb6wBXZkZnFF5wxtWPuSvaVWJNmbWFHLpm987U37vvhiC",
  "key9": "GC6oDTXrXBbfJKVTCKjBGML8HqQwr6vD69ecNf1kE63He26H5vK4pbDDnxpdsGa2CJquSY3U6mKUL3d6xGVBo69",
  "key10": "4fRyJs25NugCtNeSaEFAx8NaEHTD4g3xBm78wgyiGaYeou37WC54r2EV5kmEoeoGJEKhK4b8zf9ZLwxkHvVH9SxB",
  "key11": "2cYQoAeD88xaLVUyKcNK3tJ8jwmBuFQDq3DMQrz65QYMucoKHTBn4MJWauYwDqkzQwNh4hLPKTfeWx6JjeYbboVc",
  "key12": "2hYs79eDNEGG8aMT74ixjzUt3FRRpwSJQrDXfP4w1sP7x5XoYWtSFDjUZBicwuYS8wB9WvAqcSCCHj8r1zrgLrvw",
  "key13": "5pYvkoRcXNZydX97ykFmwwtLXCUudyux6f62g7ePiByLNz4ortYeGzmzGxvr2DQQkB5kP7hKQUDZ4MrWj3DWVaQy",
  "key14": "2YGQceny3VdTsDbEVSNGyWZo37XhMwU8VXtLcyuEZ9MKNrfKYEQ2m4eMgAgx6LK91XqQPe7DzQUsxb81mUrxVrAh",
  "key15": "5f1mPaFJ53R7XYxRiPwiADCkrtMT8GMxP2jLrdJ5ZX8rH3yN7p4JDFoYYGJEUPkSUG2xSnA4zmmpx6j47RAE9zcg",
  "key16": "325yx9sw3v6n6uy7YhBw4nn27gAwNiKoxcC36jxpQr6PjtGvtvYEupTVb26odULwh4eRTQTTaiiwVHoSL3FeavwM",
  "key17": "3g5XiEPq7oS3DL4Wy9WgBD5RUE5GyrznPW5byD6ZfNQVfPZ7aE5u7mbULgYT17hkbwtdcx5zHa2kJRgC7sJCx1rb",
  "key18": "4UoYXd2fga7XrL7RSTgLf9bnHPuKeMftBG1TdnAkr6TakkcMKRKSNED17LbEidZibPA1yhocFKEBCtAqmW4jypSD",
  "key19": "25XFcMXCKSosSbzD61MM3RoAGUdYTcmXtPUSQ8BNpARPbMFwsCRgzq6aVQRdabbGk5MzKQvzMLkXTwpEooZiqRJd",
  "key20": "5aU2XEc6dtEvZfs3XMw93RGxCe7Cu6f1eX2ezyeDHYTeXGZEo9ULHSezVRGFsz7tJN3WdbdTRTNKswgHKocskJQj",
  "key21": "2SQdoTsn1kDCdKn1xgByiiKWyh3k9RYea9NSLXB9UkG6n12kMLiwdG2tVpgXCbfQNgBvR4KTwQ3Vqr8NuxhkEuib",
  "key22": "3QzeRgFDwWiHyHmcBfQnekbXGwM1dfDqACoDtwgYeLo5uSxLyXoBqHKbZyYHcnJdcrS8XLMUnh1ZQWerESyvXdkG",
  "key23": "5NUhASKCr1nrAgdtNmpGBC1e4Qi6mMZUkLnp5cm8ufXpmVobq7Bgk4ThfX8qdseozAKX942DoGbjAoWh6RuDjhjf",
  "key24": "b71HiGSN5zDhA7kUSMGt7Q8pgUCmrgRq4UzqXnpPeYGn68ShgLmNnTSntNWpCPN8CUmoChcWHNLZBR199iTRaV2",
  "key25": "uWMyDCkce5Sr9SKhYf2aoPN65UsDvmxD3xAUM2pAA4xdvoitb7dNSe6sPKwJkgAsa9CjN59o8eLCkBWaJV9PVrn",
  "key26": "445Lw1ukDNeuaYF2rgoG3ofs7U4o96Y29uNzAmhphLX2FvkM79EuTXtg8YPgZGhit43XQS6hBimuUJALTWQ4i6PR",
  "key27": "pkuw6P8cDsCq45gHEmiZVyhaQQXnPnJ72AVbG5pGqmsU8jo4vvheqvtEJ7ar3V6hEBEZc2xfFXZpA4c4Ur7gXPd",
  "key28": "QYkL3H644iQYbguPGZfcwnGdcsDdsBndS6u8XRpqtV3A6FeUNYnaDNyeaVKfnHqiBympTxEbdd7oovGk7zuYYh1",
  "key29": "gXA69CuKdn2E5uzdWnWntkyrEPp9eHMUWkei1ARq6krY8P5uKimk5vR9Vm5QV3gc8C9qbEjZxYurVKAuu6pDXEK",
  "key30": "AuvrqD3rTCAN2XPvv5QqDrDSWC8pieBtSZ2esuTfUDxWfmMHuXZ5yighQY3zkunxnVMQUaEYqXQYp9bogHHSbPh",
  "key31": "3Tg9TQRaeyRgtGw6oKFCEKvS44cEvD4yXJzThvQDHC1avAU8v13G4fnR2mRLHiomT6GtRT16vRx1fniU6K25SjFM"
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
