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
    "tscFvKh5ByY1ut3bgcpRpg1roosmD8tseRamRH6uX5vT7zeAN4oNyvNzJTfG3DBdjkRK6b9jm7Nu9mvBMaxu3kr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MDN2WsaMMQePo2M6qQNvGQnDVg4AikzjUtgixZKXbK6H42jCve7mRk9t5nmiPHjev2n7H9Ais2BVijC2yEBcuEE",
  "key1": "2UEcPm7x3N1Daek7GtiVazLdd7YdvzMBTA7wT92SU7VN73dMqJHG5txiv2QWYKsSvDD1vJ3ZaqGNt7EiyNDKKjGc",
  "key2": "NaUKucTLTt1s5EqXeLHwmqCLV9t96aLkF5vNxVWUyraW2TFm47vcpQG9nSHKWmKg8fErYGAoeRJnYmef2s2YoAb",
  "key3": "3erLYmezHNe3ZTds6Td8Y6gobv8112EWayAyp6L3ReSHbvY7dwvbFu2xdPLZhr1CdLqxep135N5xC5jTkN6yrkGw",
  "key4": "46wK3AUQ2MfE9d2SQAFHDTmTVqcR1CJV9BvdrX8mRv7d3n8m1Tsxas6KaB4xphUQYDFaPCF5qbVR1fPzyRkCd4uB",
  "key5": "45Mhx2Vqt6bq8iUBxJb8ycjkL6K46FTaWLychH7GgUuYuh4wjNrGpcHNrNbVTy2CZ7SZTk65E4AZVkLzog1dVyxX",
  "key6": "5wDpr9SCbrZALDYpFokB2GSrRf51EKXj3YLSMaXykqGxM1JVUkPn1DuyzCEgVLDzJeShDRsjrAjT5ac8YW9fFdFz",
  "key7": "2FbNGfBDzj3jSwASW4vUWndHtftftjVtWnqjUrA9iUfT2biDM5hNHMAUFnAoEGVhfdK7rqwcqe9UpUstcVdDoPQT",
  "key8": "2u8ivDR5wcKZwetTdxjJ5MS7CXs6tddFzh2Fpq821fASaNQnPpVxe26jQRGxuSqrWk5aWD3dz9pvxJ1zVUsf8iPT",
  "key9": "3gTGc6sSKtWjDS1JEsyGMtbiQ5eNzQ9scVLoD7TW2NgFDrKxzHW1iegAQELyj1wDgFxqxso3iJpT4nNYazxG7qKR",
  "key10": "5dkk33wJtXHZgdWpYpz5mkvt3CXyMP7XzXTF8oLi9XTaxFk8uggAP541se4J3gfPqTGzHux8mRtmDVkwBXwnc5CG",
  "key11": "2GUwcGBANaXAQm3Z1gaQV4gLRinwGu4UG9e6fTNJxM5Aar35HknmjeWLh3gYYp3qz4eYtfMJjTcUGQXND8fvjnm5",
  "key12": "2Ui9Wbm4vRMmtxwtWekJAq27iHc8u6NdCBdj36Kog7GvfUR5NiMf9eix7as8YLtrMYF4qJdWjmQo96XKAGWHuzKE",
  "key13": "5BA47bgeVjtQud3S6AJUvGcE8bjASTg9C8Ex9ShLXbteXNtXQHadvP8MCfKyT42wp2h4ahNBEomYjA9Htd19nrAN",
  "key14": "3CG9waFTC5S6FBfaa25XEuJ33tZgjfcCTqRsp8XfpVRoyRKj8xiXHLyC8FWrqP45SQ161t1usiZ8y6htouKYpJzu",
  "key15": "4penG9Kftc4x2TxjHtp47aBrJxTXbxKTZ5SzyJGJTQExZN6o98egJunKABhiizG34ANe76b6k7z8Q86EVMzZheLp",
  "key16": "3WEEcdu6uKjkKGGWArmn4bj7gNcRLWeSdnQFmxTSoRqX2FkXwU7NdutH8AB11bqujcJzE9ifHw64hQihahB98PhT",
  "key17": "5GaywPiF1o9Nbi8gmMERoX2FUSfRqUTtqQV6UCzGKY6XDV31paAaCkbFNGuYNdjvmARjUdJKmepVz2SwAs2aJnLS",
  "key18": "5SW37rKkn28FbjupKREij43t2aoHE4sBStGJ4wfqxjYECGbwU5e27gMuHtDhTNbRaCKMCgBD9PZNC9aD4ttangby",
  "key19": "2gVMBjLk7Lrh8yFB77fMBmULo2vLPAxC6rRzQ6NWfQgy7rdzz3ZKGELrNPNSj21J5c7tMM8qfvk3NoXih2BLxfAY",
  "key20": "3xzYrzSh3JkG5wuS38HL8wsgSXztikJSRXmNBUvTbTHLn8ggHXJpwSgNxkLzZzXnpSZ2dQuocryppBEc55q18pAn",
  "key21": "577pFuZgUggALyGMDjQRJowrqVBVcJ4hyDKhCFPtnqoSKhWwTU3mjaLxYJ5aYkhEi3dFTX4M4vGPxz6Ti7uwziHw",
  "key22": "bZPwViaRAEsAQL1X7EHoxVvkx1o2kgmgfYPtrYEirWiJ7EbSXnGEy5L2mZnkdGe3VSKyqFXC6qGKRMepQzquHcH",
  "key23": "5PwUcs4gZBB5mZi1z8MaoPCDfwV1bnhAEZAmXZnS5SgM3JjYNhnpqh7BQLFNVtFkQGEn2xCiHzZXHw3tqiRJzQU3",
  "key24": "2jKFJcrWsBPv65kB4H26BY24vSChU8E8Pc5qCPS5FGyUcXBuQ17WBaqaQMgnsnabNM7YJzzP5gjiG4ZsfoZUtgXD",
  "key25": "5yDgjEURH6ubytAyTVricoP4kC46ytwb2fgWwykkZLCMUsrqKyiw9jhCaFZaLpWbGUbVX1qyR4Rot1PYria6WBJs",
  "key26": "3NDENrPYPa14YK337E8zp8JfrPrDTRTtpsoVTTpmG2XDiKUoeYbpZEnXikLCQTpMZ7XTA7gnpxAcC2F1SBSpJVEh",
  "key27": "ZhQmjXN3qyQkgMBz6mgHn2uZUYTevKHHgViYk8Scib1A6skPxWsxyjGrFz9Ftph2yAhakiiJ4vXRYK4hMZrjSLa",
  "key28": "3AtBYNqsUuLD2CgfGqT7ZaYwPEDsZssoqoYCKF2UzvNUfqJhTErdYrpFKaXoSLc5ZzC3T8bgiLat38euVCEmvLs9",
  "key29": "3qSjCf1h9ao3Sec34fNRtjAoR8bv4Lch5ojKXHLPoLpNsPyfTc39Pr7iEJrcMDWhVkKfqmgqSwDS75ean5UHCkda",
  "key30": "56s4GFd4z1cA6huEhK5dsaejfebVzC5xBZtuyfS2YPwwDW8VCGYwAtQbfiWzrqx662tdZnwCQmp2FXSZEzKwSGAA",
  "key31": "fP77c1Eo82CzWHs45Ev2sgxHFiz7qZtku7S9F4C1Q4cVH2mET15D793V7VhS1Mx875QtswJtq72xZ629M3yDv5M",
  "key32": "43vTsjamY5FyejCYdNiQuztyaTgHYE5niA82PSPtWamekKsntPXjV7rdjdt4FBLi1aW9WowkxVr6YZFGDz4WkyKK",
  "key33": "4zxDxjYpvwtcBkAUUfFZ3wGyhH11HW5E3fyANCKVgNE8TCjAafvrNRjVQMBqLQ7TwEcCu5wBiAe2wCsgo3vxnep7",
  "key34": "66ZXj2VQjpCxRmdArhjEyw6ktRo596PbYLj3DpPtfh3qU2NAs1NmxquXdSp6mRHxLWLcKM7MRShYxDSZKyCSg8Df",
  "key35": "2x5vugZk1jE5LcCofj3Jeo8mTPeVRheajKCUUm2Z9cC1jtYmCPGm12MZepHASHyDa8f1kKYvLX8DDvi2NtGt8gYs",
  "key36": "ir2wh7msWzYFydtYFZ7uWya94iGVRGAeYBTUEJHaZyV6ZZmuzXxUcNKYTpsrgn6B79GyR5nLc7wHGjNMbCuDBaV",
  "key37": "43LeGAchKvYQpT4xJfRPAvowa8QNV5rARuaFtf2kRdLC8hXeM2kgmuf1eGJEkJ2pdGVaHfbLzKCBGgtqaFZQmotp",
  "key38": "5tFiMUtygvQDspEwcXGH48BAkuYFH84HNGvGmRfgRuhoYH4CV93MZtcmcNGzaMvn73FENT9aUbeUzwVN6HSTuFAt"
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
