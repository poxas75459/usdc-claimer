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
    "4aNB5XTAxKnGLoVfsq1LdPvdajhPA2g6QhdViKHN2ibKm2TpC64QM3XYb7Mufb2K6PmgMgdS2inp7Mx72ADpVtB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FUSrhzAyvsWpZagYUXq4TX3cLhHPxV3QUkfoDajFjGvkg8KC9uQbDD1UpdpLnsDUenV9pbbNmqNVpEqXZZZ3QG6",
  "key1": "4J9nzopnU3usxcJYcJvhHJhnhmgbxczNWUYfhpWVudLq3BfCybrkqMyGQE3XAKYrxZ34UaMRFCcMDy715AuTapiw",
  "key2": "5FWNqeEQc5p6z9s2iLbqHGjq8nWUqavofiwYvgBCa63bjcvSFkKZS1ypz7g7zyB4vS6dfFEtpkpqWsqTPqLEfMP9",
  "key3": "4JF7CvKHkBFrtLYYDHM9Q8QtVHZ5mDQi9ykrLsAinfBGu5AN6hiK3D7fgrAgYCfZEHNFEeBq26Ds4bmwbBKR2x5q",
  "key4": "fomNvWMr4txZ79csFv1d95fNG3uCGxB2zYJXn8vcSHJeFNP3JoJx49Tvk9PHGq2wS7jKGDsPHrFntzDvoVYLtcn",
  "key5": "49FCxqy4PYaFt3CzqLJLCn2XuWyWyXL5cKyU3i9a5idfFD9n3eV4JYqVWJ6fUNMrfkCqWejPZh58TjfaRC8HbWFx",
  "key6": "2wuhEmoRrKNnFh5o9NKhboMBhQbfe6KWN9sQJV438NdB3iHHocvyKbb2jWF42Cez4sC4tVt8WBDLP8MRSM2EqdXe",
  "key7": "49DFxTnzX55bXTi7UastwS7uJopAkweQ7mZTh9TE7rUDuZ78B7KtbUyNG6miQtWKiVW5iJAyyiLWm1Z9hFeKnEPn",
  "key8": "67AvAdJBa22AMqewxnbi6eo6kJvbT8rokTszqwtx9hgKYYwxwa3pe1GBWXCHwdkhkfDJ82xSvaz1yMfmJdmazUsQ",
  "key9": "4HzS3ddwXLSDuJDCWmNcmsGDJ1iBgTbv891cMZUEeaN1dpbDaEXN8Tz9Sn1Qx4crcmGNeMxQsvZfqKmT43dWBzGq",
  "key10": "2ydikA9GSGsTevJmJa2LYUZrfBGwZXRE6qR1EVsJj7kFHwYCwjZ9w4rBiR9VauiiBYBJ1pHVN5EpzQE3rhvwaVc3",
  "key11": "BMhqSnpZBPZbNrurjURCTy6KkSZj7EnALXHoeTya1zahPoCd5cBRvVrM7cvkd18VrnnhX5A3cRy69BERAPUuD4W",
  "key12": "3uRZjo8dhPruZ2HH6yiAzwPUyJbZNJBPoz5t9yhRBppcaEWNaoABH9eE6toYhV22P3GGnSRGrsfQuLg9J86BqDcB",
  "key13": "5eqNqMRTbhuyLVrRK4hKtcfpV9hjEWXWdCDjVP43Y9QC3qmyp7BhPREnWUvbi1qWYHZufcS3ZjELZ1xTpWwErNvZ",
  "key14": "ijguDndJQx9VMJPWTnVmPh6njhFK6mBKyeegZRqD3AGyJ39sXgP6HmPTrBhXPCuApjFJKVBwHMkymKiybpNeoHq",
  "key15": "3MVsDNCubUE2WKaJkawoUXU2jTY982XuwJbi4LWdnY71372zkppFuH2gANAAtqoFjjJoUmHcqxygpHonN9AyMtKU",
  "key16": "3GJjpfHKE3ufZYPCTzVGKG1XhJzgk3ZuWP7JwsSecfCjWB7fNLr1Mw52zBYUJGA2TEGJZKtEH4LmayUANP9aBuw1",
  "key17": "3dZZ7bf4TsaYVbQ69riK7HWhFpY53HxY29SWQoxU92DJfQCsit1hvSsxekV5fiJGKtchadoNTzfmtosRPU28EuUh",
  "key18": "26ygfpQK9sjxpqH3szmN3h31pfpXZKZQxpVugr5ArdKtsoRqbpvcTnzEYTNdrPaQtQjtQNmZQnrpzkRK2wK5hxnq",
  "key19": "4YRPpBeLtYc5GhqyybvKRGFUHgDe3bsEvLrVSB1Ts7uMrUW7RVc9TYycwB48sbofz4t4Uqcwem719hVPNg9xQQ8d",
  "key20": "2PwjNUF35nnFaGEvGUm1uRibnfBSYKvDJZ7R8AraTqkFysHmKeM3oJP33dTfdLwUvfpt6bq2RW2oU5rTerVr9jdn",
  "key21": "5V61XovbnTFEtd2apN6BpY8V1iBMCvdjadb7EjYyKAFyMUUkMWUfStuey2EfhPJr36u2HcogpPLiLHXYKbZRrzkY",
  "key22": "5ykKrNebV3B2nYD13YKg8Kw9pBdAUUcph3omKgPjU2TEFTd9sHs5veAX6XEhqtoRY1nNR8AmGfQqKK84moxHUBjj",
  "key23": "483YgRkT85xFXf6ozpqwRNvRMsG6R74FX8bYrLGQTA6KD385n4SAHYbTvogFvNrc7MWHvquNfsVmnKAzCui2aek5",
  "key24": "3v9uERJQqAYV2bHg6LpZnxzbCQtfiwv3iwzHG7wyYH881TPiyHS6fbPSRb66dR1ZbaWeQsHcSqfwFLVaaEwgnNKw",
  "key25": "2NDBWsZCjuQnF1EewUSkEuPVYrfMEdvRDotfcxwoDChnrRFiVxovN5pbUZ6RG3GdYTMGoRR2XgzH4NdzozTX6aYW",
  "key26": "FsBkJrqtUn9rpPxt5LW2vi7RA7PJcbDp6hdtvKMWRnchHrgNa6KzDk8Vug6ALZv2UGYYJ3weW4HA28cPDru1mhn",
  "key27": "3KESDL9GqkmGDj9N92hQv76LCLpSj6PU8VG83ATzZwWpr5BdznjFvvGMAwC3RxdqLMpBiaZk5kaAsWcTkWdv4hQE",
  "key28": "31toNTSvUZAoH7eFnNNrrB11tzyLEs4QCB66UmHSiL6bkdTtk8T1M8vprpKYGWqcqrfhcXUfX5oHdbVxZTMhbsFS",
  "key29": "jZsE4Ze6RzrZQJBj6rMNzjvtSg7RSPKVfVbM5JSU53DBEPYYehHg2tgisxmLjpTv67Rx2Kq6JVbXzrJTCSbzcaF",
  "key30": "4xyTpxMTKZQcJegZbcnGfZMiBYoAksVxpRVDGi6SbwrBoBAcvgtZzSSByJ8fMo16sEjzfURy9ZASkz3TEfaQLnEf",
  "key31": "4BkNkzbxWL8ckinmfVvzSg969MMW7PCPrx4qHubGriobdhY6nh7fFRMUqPJ7nQ27yAgy1otPBPdRm1U29X4CMP4G",
  "key32": "5qahJpyuBE2sBPf191DVLn8RUz6Y8TT68JhUxo347pojoYMaGHvZDbE7xU4vX1fXQkQvTN7AMCEEBPedJEjvVALh",
  "key33": "36PMjk8L3ohVhwkLFwHH2LkTXhARqBQxTfmSD5VkZ6t6sSiayxCVYB77qWyQiqYo2ckmGaUerstc24d7Dp9nmkbT",
  "key34": "3YFnKL4HwcQY6NarQVxXyUwEvETcoUjtsWdnEs4pYmcS61YvHYQBDqxYmUDd6dM1TsnVPU791ZFehUgnruHpKYcu",
  "key35": "5K1aLaU2BrgHi369CpJK9STWQcTzNBu9LS9MXyWQAU4K5aTxxnqq51gzNPvTD8GUjJiX63mENRxvHMyexrKoASSP",
  "key36": "2GRbwAyLjqg4jQxpLWKwujHipHVMT5yDcp7C2D917phe7kMfzG67DCvC8jUizwmZ3VWJbyYoWnsQ3RFuxMLW5Tag",
  "key37": "5pGUKMEFs3By3FQigvbMwgn4WeUqYPzwGgzr5qCYdumfRVLydsC3g8iaru9eZWCLkqYcofnGyStg4ZgfjbsefRjX",
  "key38": "2UQHHTY58x22jfexAXL7KJGdejUjx5kmYemaFPPt41QDjt9besQ2WChm8hzDCcuzNSQaeNpo2WTcwYH1NieSbbyJ",
  "key39": "3MS6Tqg4jgYtKwtTFsE3rHFUFJZ25vxtfz5FJ5WRjcK116BAEF4y2Erv9MPqrJzU2uWsELK6FYaR7jk8teTReNwD",
  "key40": "5EDkcLGxCYtJBJQyaNrb6fte753fKdbGXBTW2VwnV3ahb5qKhqVxE9DwB3PCN9ix4pshdhu2zpzfVoVqU1RdDJH3",
  "key41": "r2mLY2K7BsBuFoJubwSv8UwzAdmWs3CqyU52Kqh1KqvhDwMHfvXFnZo77oeoG8FvW9cRTbU57xKhBnoqqsUafXk",
  "key42": "2d9Gvnf8BFmK56hpxDJCztYWacymBUYw4EJi6VHToF3ZxvkZj4EKc1ZyTnWDtuxQKtwn7tnqQsp4kE5KUbXNB5Y7",
  "key43": "2Sh9FafJBpL5yGqdxsPi1SYoF1gr1LPADB6aPf32Aj5QK2sbjZG2Fu2sP5FK6gjxC51Z6LF3JuNxSrADRH4g7yS3",
  "key44": "5PegHbVg3zC5TL5YZdWKBLyVumaZ8F26C8yDXorKVqGfCnnvnWTsSkFNCtYgvMbZUmaSbsawBhR4zqkBgkAfxNNG",
  "key45": "4vVPy2tesSc5SnS4eK8gwUYgwcRwgPLn9WpHoKsToBZGLyCjGMZ2MzM36zmnv4djatMmuiFgJ5hikfbjRcSqGteK",
  "key46": "5JQtbzQjjtyTsiRaUhcTWQjdzjyMnzTP3FBczc7PcFPknsrFzDuesoYqHoifP9SFUB2M1Z4RQMEpCNdR1rpCmvQa",
  "key47": "2HArMKUEo34Ze36E3Np1Euo3zedsTiwLKFRcSaJ9xojNy9fgxff3TbaDx172wA8vzeM8zLNaj8H78poKPLTQCR4X",
  "key48": "5sYgCUe6UYnBNSnSNe7BSaCZmdKaJzqDbuW6fSMh1ehoWNbBCWohp7ckUbDfzuqoJdU6xPgLRU2sLozey7SXJDfM"
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
