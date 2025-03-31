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
    "66vEqBXCjyemuqvfD3qDztn2iAkMAJUGzsiSw8C3UkRJ1shyEAiFYjj8gnyJn49mT1nZZDk8JmGAotpnLXZo64vR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BUYGvpphTb7vSwQJVco4jpxyi3Euq1FUTQMQygU3M9b1NzuV97ePVHzQscs6Gc9NnTac1HBNci4zuU9BrSXpK9c",
  "key1": "52JEbX7hjk4s5KVBwSupMkekJTzV9zmhsSHHtFZw1WkXGZ6MDq9Ad8seeCbDkdSyiphK9key2EkTyxA6us54PZ7a",
  "key2": "8k8LZcnTpYrBFnCG5jEcarQfBigYjXZnxXDA1VsWnVJjMYE3WAYhPyP6Tyqa57yPds6utGB59vuxnec67UdF3yg",
  "key3": "2kWLP2KZEYCLmuK5Sy2qPy9oNFBjCSwz1RwgyPz4zok2KDXd4uS6ctMxP5j6g3EshSJk2a78QwqysZjxREZfSFy2",
  "key4": "4MvaS4QGVR5RR14RuzH6zM8voGCGvqfw6pz7NdLFqxXmjMv4FCbN5wYDGBBW8v2gTaBBhx7KPYbbgaUPepKUBmgt",
  "key5": "4Ta19iscjX4WsPJKo9Q8TN3YqXRX6JHg2kzV7vEFhaLfJhrVgZe8FtCGASGSsAT8onPJZagNwH3apuBAWEBVLziT",
  "key6": "3HxyxnxFYy9FH4r5cEkaCQoTC49ErQBWgmYHxixRbnc7DP76JZ6m3jsNn9PrMBYTcQZUJDbT2cppCH1QWKHLyQwg",
  "key7": "4NWCT85F2Bq38P2GZ8NEs6JwpXguJ7pJrfvLksdgr1s5oAXupxqMutEvoWJjSf5HoBuRvREBNVchTAAV57UfWqg3",
  "key8": "4Cvf6QxMvkzPSerYo1naYeN2kMzqBm8ducz5cFvuvKQRwWvLgdv78rT8gynJ9xhcs9URKfTUtX4V3HCFXatydYTW",
  "key9": "sJLAwEjpHUWxMdYq5SvvFGqztnpKzZ72MGswbVTV2A93nBTR1jpCWMst4pmPHXSFEc3rvfx6PYhLYFtVs22FTF4",
  "key10": "2czexbyjvNHHiTJxy6i1ur6fYJFyz42nz91WkFcH9njndn1YJ9GkHFAxyUVfxd8FWtRVx6gen2yAYz48wH2WpKn9",
  "key11": "35WhhAbczv9dFSBfitMBPVoHuqS6h5kUXYRLEs9i2CZnyLwaXPEbaRrxAy3LrAJxoTgsYy8e6xFdwB95jdpoWsFk",
  "key12": "3EUk5WxsmaumeQePMBY3bMcoU3YtKMpgsx1rCzjS55EESXs54G4gUhkAqzDZtvwGQvdxdoqjES2pQDoFA1mKqHjR",
  "key13": "43zUYDcU7YbtLWjVs9uDwmAm83CScr3qVLuNeQw8wnYRf7RBUoMSodrXqooh29mYmJYKAv5T6Z4R2U1tpGdLtfUU",
  "key14": "5dAZiGbF5z4eDF83heAwEKS5NdHnj7jjMv1iZi2vv9yT4RvQ9UwJomFPHCxRy9edeVz6HU9s4QwXcf4krEQEzYPV",
  "key15": "3dfX93wVTFtv32mdvvDPJVmu6gMV8MNPoKbqEbfFUvNgiPiv5zQ2k451vVzjSiek92F5meCBkjEqfSYvgPikB5Kc",
  "key16": "5TcaNNtvs7vpdsTWa8YAoTSo6oPx7tzvaDHoZRqAv3N8WYDZHZSbxBKdGEQdQkp588Z44hTFryVirjeq3e4rQeaP",
  "key17": "3xoKnxNWMTiPSiYP9XEkPbeP4XpUCqRHRcLRPUVF1qYW2MNdxrwmafmh62odYMFTbqFWfcFjh9Gccex9Bce36Zd1",
  "key18": "5pgJmcDf2EcC34c7cBsvMRLn6sLuvgSbaANRFtboce8Qsgx7YRx8M7hKFpkVTymTxtsPRsQrztT6H7PzKa7P8BD7",
  "key19": "5kJ6hxEg5CUQi64zmWqirvDvn9SVueu3d9mEzxEN6apyw74akzyNNVtAdgLLDoK7KEoktDfanwnHQ2NPAYkPcEqN",
  "key20": "64JZPWwjbGuUUFMzoUrCHR2bNwDd1YVPfRLUKm1MVK9caHd14f9Cphq6hutBFcYfCMgFqB7knSkwrpbsSmJM7kMp",
  "key21": "4RU552Cs7VLuRG7CZCzWATapTkmFL9FntKmdFnArXgYZq8Kot7KaW9H2oaDpj39aarQdH2NjdDuNZnyjj9udumTH",
  "key22": "3rfC9Aho8aE3wK5oYUiAvS3qV5UcB8jqBjDjPKJsJTbVDYoXY6uUL5K2c5huUu4WGoDzLm4YTCJ1np8dPFdqA67y",
  "key23": "5A1g54x52rgxyu4x5wufu93sFXDG2DUE89jPaiAWvpAn8kjaLm4U1hdPuJxb1G9CNvtfBGJmpcF1aLSPfDiwdYoN",
  "key24": "3yuDYWY9xGzgZxpXWfaEZV4oMdTEJykkmPj7AgeqZV1sNMzgN1on7DgbnipJNtVrEiLP9DBgeCK3AcGtKnq9Fb7",
  "key25": "2MwjbvLR82P7a31t4yCeHfNvFxrKx9JatocZU2biSZ5pDorTs3rbQVjUKN4fjEVtDDW4pxWvAxrtRay3dFMzt5Kw",
  "key26": "2ttXqxSRMu4WDv2GiyGgePZ6BiNMJurTvhrb3vryM31DkaCGbc9HThJQ8fUwjw6GNfRaD41RwZSjUZ5XFBp3RBUe",
  "key27": "55CbpdF57e7LomKvNGDXMMPArSHuYrTYYDueaT2w51kQ76BNH9zDnLCRrsnJb5h8EhfDztesUUtV6KKR8tJJgut5",
  "key28": "5YvR4b9BwVKGvpxd15dzPzJDbqRby7iAjCkyKPdFyxhos5w4PFCnYYUoMxffmRyrScMYkWvZbzsgkhceMf4SP4Tk",
  "key29": "46iUhJd1ME41mNU9c2CSneuyHKyUD41XXa1PynNDptqPt5gxRU72gzfMSCYCvSSR1m5ocigHC4gbywono7tK7e6F",
  "key30": "2tfMSbB4GAyooW7md9Z4AcHqXsyieKTQtSsJtBkNjrAZr3FfNCVv9MmVfgRti9sFZvJwhbauXWgMYGQBiZALk5hn",
  "key31": "3s5pUT8Xp9HkjcTkngeRMMRkhE1M7oaQ2ugnrYA1gdwv2afwSxS9u8rf2iesaJriG6fWxZSDhiTZUjfS2E85isQT"
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
