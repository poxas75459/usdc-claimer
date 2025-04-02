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
    "532ASCbAG7y5JQuvq7wXekr85HdQRFXgV8FLdXpsMnaT3hp7JRPtoo4CRnyeen63mxDxAwisdUCRcFktncJppVUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QQkLhdJzZaUSUwibyPgFu6CzqaU6T38qyC1w2Mu97Ahvys4KD1bCUBeMJhcPWubojKPVkEQd1fsmPYahNNdGotL",
  "key1": "4SavP2NXTNua75P9X5hPpaXihSjKpG2iUwM1VZRjxp1CxnGsD5NHVkGQXvb1qawtYPKQUuKp7R8WENSekJDMAMDt",
  "key2": "2Gwyqc8CgEg3Yme3VyHZLiKVLQDC4H3U62Guf9PAdFxHjRr3XxEUHcy9A6WCSUXXtLN4HWUS2KGM9gnLFH4qjBZC",
  "key3": "5XyH5TuAYPDBgNrs2dzWiQgsTTdw3mcmsAHKGrLAzCvsKkfBV31LRi2MogCsMPd5aMFKspbECHKxPfLgQDDVkUhT",
  "key4": "5MCE9YG17HyHp2t1ntpLbDmmoQCcKLfNNNeBX28qHZLveXSyUrjdPWos7BUADobVF4JhihCNLjddMUZm4NJr59f5",
  "key5": "tGxAaLhGMDaU5iBVrmatepTy78oGz2i7jLozy4c6DXsDD2N8CgWuaqda6WdFwVu7TSBk2dXz6qPm6pfcm1aCj4S",
  "key6": "4UvvC5LvzX6krE6MctupRNyaDxrtpKdh8QvCnRE5JMJR9dHuFKVtgeiEBRVjFrJPeEdgQFvojBMpwQhuWonEgVXE",
  "key7": "58F23JuQ4PorEzcTWAkPVtv1G7LLePY9TXTaqaWafVXC9WZPvdENV1ohLdJE3D9WpqzqAB5s7buaYAd4MnmpMHaa",
  "key8": "3nHsTkSExiY7b1vnTy5Ba7eXhDNvYqQsqZtJcMKCh5yJc44MRwUocegxHkYtHixsxSsKQXNQMMDNoiVg8eP7TjN9",
  "key9": "2e84PyQE1XumsQUg89u2XqHLrJU1kLnYynA7eCiMGLFuwxsKeZsp4E1y5A1TxmMxFU6vtJiCGqR7u5thCeV6Fzb7",
  "key10": "2zQTZnw9N2c16K7Z3BicHMryMBWVHcNdSHT62ZeA4NtLQCQbvbrb7iKhdkz382kWdpuK2BmMLdWaxXYzpBaHeUgM",
  "key11": "378j6XXVyRpxeB5G8FRE5e1szX1as8xHnpTyemXjJsY8d3GqJ5LP4HM52xUavx1GycUDZ48CscMTB3kWUVjoouxL",
  "key12": "jDLCwqZU6vfRCvy4ehxPd4YR2bFcf8gj2z8x1ziEj2aQSqRfy3sHzDRTGppF3dNZ9UduwwNT8mxKU6dMpdbxbzN",
  "key13": "McFKTQHxV8i5r56ags7kBhPGguAfyuTjtBP7mutu5VPbdJYbB3Y4HebV4ykcmXqxNTmErsJDwjyM1D2C5wwvfht",
  "key14": "59px64j7NaEMk3nnoMrXpLZiLFGEQ4AccR4nGLjLiUv78ffsz3xBuBaFSNCRaeTRXEEsrdrSVgkY5UaAmjcQH5H3",
  "key15": "3FX1tLqNskshcfTjT89KezZY3fqym6nLFKy2iJHcSWeMJWF71pG2CsNNZuWZcbHRczfdLZ2fPCeGPMJXDU93d3Xt",
  "key16": "46xKMy6kzcUU7XRCtaRoLDWQWKfTfrykiQ3eKPociL7AanpbV1hgDDvC74Qx816yKHYPVW5t9DyCdZ7ZugTLsn4V",
  "key17": "58AQjMAcmyZg3RXMrQpjrGKhVVNTQYQZwHpDwX6Demtzksji8uTvoGwJVUD5kiULH65EmVkxUUVBuPNszZrXGCD7",
  "key18": "3Y8tWYYnnZxRifdvc1sEQxNDQUqnHEMwQWRd3eVZN6usvbagYb91c8M9yx2PgJuuK31gpGUQZgWq2YRUGxrWfPyt",
  "key19": "3Q6qqVKtbuk3WzZLoEFmUKsw3tzoungFiozSQuGjyZZgj6LCn7LdSeh9pYFixWjunJZRWU99JkSvJhbR5LsMhQVt",
  "key20": "2soQ9JEnzBgdL9gfogzSGG7VTYLvVdJgdKzgbpegLTTKmuX1adTD1SkbMAD4uCEqJFXEZfZHF8jC34Ue8pMcFBnk",
  "key21": "2nehNZWVfMSEhPSmhCFJxUCnxsx1C56gTdEjho1RLUZj4u3qEfrbLy28BViZd9Ngtdz9PoWiWYCM9d2avXo3gdsb",
  "key22": "jpmnh8HUcowj4PxSiLpdWa2VaAF5AaEZoSWowfvnxLJ54tRmCzppcvGPLF1EXipoWMbNXMwULtSZ3tokDLPzaT6",
  "key23": "3KTHiN9JEsMVWUE1G7sZjgJvoAzgiahFM1PheZxiHHfYQc9UVGDwPwwb7xSPmQDcwTNzjWsE1M92q3xxVjWL29g4",
  "key24": "53KnBuRiV5VoaXYGVi8STpTaTyqmk3rDrooxt2487frk6VBh4Qf8dARgPVKk45CLp5QUdqE35w7f8kZxVM48Asik",
  "key25": "4AQhwWzNLsGpTDrZdVJQbfHCsGwUYFJpHcqBPx77NVNEp7L3v2ZNKbGgXjhzuDCohsVXMv5ujBUQLJ4fd9ZrABNC",
  "key26": "5t7L84ZhrAQq9x3cvBZGuMHVRhm6PdsAnDZAc9c9jdBLmL5nsvsbJtKDd4aGEjHaugML41tsDAGhPNqqiH8sLibw",
  "key27": "5nwPJJdTYYdHbvQbP3pES8rks8a4CrHC1meQWCoozM6CJaDWvXWtY5T1okipMYaTszHTooqe75rsDCx5X7vDBo1i",
  "key28": "3FvTeakxPvr9dpoRLD4xGMrKjFdc4RDxxD4frCrf21LkcwtG8Z47UcBUdnEyLaMUMrB6PrvnNK7gxkkwC2LqbCa3",
  "key29": "4kn9YZhF9v6fXwLzGm5CispXAWeo1HcsWpM7xAaXgKgck2fDwib7YKwGEF5TNyoxgheBprDaz5ax6rF5rhZtE3r5",
  "key30": "4TrJjFaPoQ5K5Kafr8Z9pEeLwrtVoLXaqL6tQaSfNVcWDvXhJBowSirCvackTwSc9w4jubrwqfnENY22vRebHDTH",
  "key31": "5EY3f6UeWM4XaYmzbbtW1usqtuTRZdfCggYbd4E3m8Xn3W4Sba8zQJdNJ5dSPiZF73Mv9zQxASrmdK2cHnE4DM3e",
  "key32": "52dTFg3Vm2Sm5rJVmsEEooiArc2afTX1tYKxjxXPVDvBza8rFP9A85u6LVgqPJ2DZng5d9e37UH7oVuS8UPriu6y"
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
