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
    "5vjWQoRcyLkB8TdYTnWpHaBgrnidPFJ8KUckVAXfaX4ntw7RbaY4bzAh9zQRhNtm8XLSYTwKG2qTi2byoe8X9YqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UtGRB81WqKp3eVF5PxovkuVtZ7aUAd9kZ915KLXoCFrnAw9FSm3vpBKKe68SUmoAcLrTpEuhcDZn6vrJmcg6DKQ",
  "key1": "2987oALsNP577kxWXzK2gxu1mWPubvRUJNsTPNE26cNyd7hkxh8qtXv1me4DH7puniC63Vxc3qM4g2ZH9UgBKqmR",
  "key2": "2dcVp3LNSSqTxqiVyQddLfvBqXmm2FE4U3oiUWsHaeg1CzLjYExGAEAtEZgDAm8pZ8qgQsoPMZuue7MTCi4EvGqV",
  "key3": "5i3UTYg5AWQ2MknweDtyLymfbjrzkSxqMAxw5KPBa1vqDJCaVdPnXqe7nLaQ3GpbQS9h8dWJLmB5JUUWm2ZbDD6B",
  "key4": "2uxoRygK1uAV2v6g5Pi7V3sySJmdtUA5ySY8jHbXXyZwbfD9wbJgBaLfuRy1hwFyMRbvqznJmBgaczxRLmALwsWA",
  "key5": "5RRPdHCZw2vqdciBG6qavm4TDyvSAYRtsAJtqJsbefFXFP8xQW42TH1UzPVmnZbn9SH3NCcuUVwqavR93P9BPyT7",
  "key6": "3Z7ddFmwDd5EbcESxkWkk52b1kb25w8eUUvhQS8tx8jqzLTsMEGSaY9EgSnVZ2dtHWv9tmhk4dxh1xgm9mYrFAX3",
  "key7": "pnXGRf2ygKzkMF2H6TovERModxYopbzdzcD6YM4ZEJbn12yhzsBbmzE8yD5TN9Ypc92R4AtCMtZmMB6EbsjGtEF",
  "key8": "4zRNcVdthgCPkd5yFc5mX8rsZ3VwLWf84YxHbHHtjWq1EQWgMJmqXUBY3E7PUP5UXb3z19DDUyKVJ5w8w63MG3ns",
  "key9": "5dCfMvYoamPsYAfa71YDAYZzsKct61FyFAWKhXr1pS4v9F97qo1rfns9237krn5MCPyuepnRhnQFcZXbgwXfcKbn",
  "key10": "4P3qriLs4cDyFefryiBfrUE3YCcQuS7KXiiUZpVmBC4Av4nwibA9GjjeJ7coUWrmL6Wabjit3PDzuH2F5xAk2uYR",
  "key11": "2EKQpY4LqmfUzwaKLJaF1vCkydysQjBnVYh9KoWA3z8Vhs7QoY7BaJHUiUYq1C1P1gzJHKXSQge3Pt71jfcSbHPq",
  "key12": "3ECe7hBrvEFVgELRZcijrAEjpCzuijx7ACdcxrGJfZPXYeXGcsy8oeV3NmZWdQX4yyfLe9HWniCqzCFqFix9GfWn",
  "key13": "pUnASWKudYVDJ4WF7X1bSNW3SoU8SrUJ7t5PBWvCgSt1ynSRxjuHEazg5xnG7KnETZqWzYfQybzogB7HRPyxq6i",
  "key14": "4X5S4s1CDTo7ogMoZKrdBcT1ME4BqaEMY5nWCt3yZ57DWzMGN1d92zLZPFdeE9Z7Jak1tTdVngbZyYSCUkZfSXLN",
  "key15": "Vf8wSeXsTKau3ZnqWekLzH4rmv7icWTPxWddTMnA75qdfQ4wnhTw81PqcEzVz4MBymy8p95i1MVKCazPNQDqVur",
  "key16": "3sroJA49FnJzie4KoVU3ar7KH6KcGpDf6CLQzpCM2Y6QymnyfuWgm1wvXcHsM3pCg4QGgHSCZejNKjfa4BS3aK9p",
  "key17": "cg8KLXaTZL9CxoAsYfafHqJrmk1bkTA48ePwULLfpStP1bmY91SExMyk7kSsbSSMVV7CT4rYGo3xztNdT5vwaqM",
  "key18": "KkRt4jFVcx5c7o8tjKfrf83J9xptkYALs6rii4djjpFqgXqh1wK7YCiDsPDCvMKBD4rwQm7ch5VDPwPfbseZey3",
  "key19": "1p5QeTgPGJC57W5QCW3nEG8pJYQYsMSb9x8u1AECFmW9NduzPRu4rD7B5JKTQg3eSA5U1cHiZrmcjSLkuYdG9aS",
  "key20": "3KpdjfA7669oCNuvit8x2GTqGUXrbMdeZZToatrXscucqcy8xqRiagZpezeiktNXWz2tvn45piFHxe2mKHQkEfmf",
  "key21": "qeGTsWATR3Nc8gGp8ECJwsKUm7rtE9gK97YMqZAhUa7bhRYCzfvZhHiZchW7Xn5wuaZTowM5TtQDF5yFb6WD83m",
  "key22": "4T5edoSaJHvFWoKkx7BD4pGYi2mpSaCHcGjsAso8zA8mnRLdSGybkACBqXoLy2Y6SY9fHiMwPvcCJR9crjQy7v43",
  "key23": "4DsVztPovEtvitkGR6xZ1KU32fXx28iN8FDb8Nvww9baJdarVyDds12BPuTSPsnRn7FcgYLamvcoCPQ6KnM2Du3w",
  "key24": "5BEhq9hLCAuYF6aYaq5CR1X2XqEfwJ9h7L3gQ7iRi3qH67G73U7hPpJBrT5kg9qyQBa8GJwV1fatZAsxg6oxGUPx",
  "key25": "3D3MUVAZVzrP9xQdmSCLBvjSsFc1wbyXHsLW4w8DCP15MB9E8VnqN2SAcah6hDNKhr551WTzQVcYomGARvSTSerx",
  "key26": "3dCC5A9MMc94YEJvd89F7gT8D99nHzeFroy2te2RsuJWQZWFG7LLSdYGawMivM9SwPCcvZTfjXJLZEpmsthz5L2k",
  "key27": "4BhaieHeiSWcbaqiTDwp78hnSMS4xxCTpXGj62PQiJB68qP3qsBHRPDtnCjtdawTc2xKTHxuCeXo4C99WJnLMsTR",
  "key28": "4DpDYm29mgW313BNmMiZqLBopMEQtqA1Stf1RoEZdBbJPUz6z8SbqYW2gXg5XPW8namjypyTNB93Hg2HJR121Tth",
  "key29": "L7x5rnVtgdEhYGJoNwby4LhxAJR4G9RitBfM2aTSyD8HcpGnSU79rEXritVL9uGcsoHmnQnfRSUihxHpSP1ecA3",
  "key30": "5q1jtTxffj4KLd5yUnd5MJVwdzXTqrZMwVm2cE7ikwEYJd2qzSNRnrBJ5DvRSiDhQyxxrPfRcNtD9ifff7RPc51m",
  "key31": "4efUK6D1VisYGwrcCnRj3v6c9gwX7tj4dFSHVz9h8eC1KJsQGjZfhF746BFMJVZ9SjCWhLjcU2FdCJH8GNJpQGfX",
  "key32": "aP5Sg5yhpqZwUzNP4osieWFi1VLU1Cfzg2JpBi11Nwz3DxsZiXRhDe2q6Q3vfgXrFw7usMvYBSanxa2zuRyRU8U",
  "key33": "2ViHwzawxyXUJjkSmHBwV3q5Pn5M8JNf5g6oZAq99pQi1vddSSXQiazEZCnFfmX4inHsTqTsV3gPgj1aD4Pk6Ddo",
  "key34": "2rmmn46NjebE2qprfbRxDU1X8BVNexkbnfbKYdvgVF4EyCVCjse5ekwfB9gPmNKV8LRvUYJp6hBkAkWvSUxXTdbS",
  "key35": "5DGpSZ7TFcbGdZKXpYfwoa7ZgGDWQWhrfK1A45hoXYR3r9oecgyfT5WTChsVBz2rVsTRdXkNzcw55znmBPRviYLc",
  "key36": "53jNWmPF4KkE9SxzcmDHNf64b22P6MPQ1ZfqB7gb55kxiCXAZXgba9XTtGEGzznPU9KvpEWUFVNrWXhv7hfBGa9a",
  "key37": "21kact51LLEUtkEhvxgK2rsM1o8LNgw1uL6BcJAiiGWCiJMN7BadPyS5ZKV8Tp65Zk91ot3R4e1Ryh1UTZo5sta3",
  "key38": "3X1UNgBebtXsigG5mUVLwyQP457wTPXVPg7eKjy7GRhzzQ7uXbHSNZaG6kgEFJ5UYxiyMTxYeX42mN12gUGDCszS",
  "key39": "5gxxrZ3whQG9kGNP7XHPyndhfnMXvhKTh7awa2BfnyR8i4UZaNYteNAi1umPfe71UVTUwsPMMUnqymLGfAyjWXw4",
  "key40": "2Q6P1gwwMe7vWCr1Cz1hqmjxJqr6WdqbdEAUL8JfivChYicPjkL21VdHrNLZb4wiTCsbuyBgZNtnigoEPVYtZ7Aq",
  "key41": "4yyrxPWdYkSJMLKvHRA5HcDVqWtQZ4iRqFPdCCp2SZGc9XDyvXHfeipZWApxgjo4H1JZEuFadzK2A6Dtc7rQeMaE",
  "key42": "4pcRSQbhtyZzvhp276stypUCUtMaTPFC5m5abFMaqJ5aBdUbvxpq1X1MXjNnFdt4u9XV7XZB91cs2qUijWyCWBxn",
  "key43": "59fuRcaMwCzTYeMjvpAR7VaTkj83ZB1dMWeBXX14BkKTrnPraLBbwCaTdeDCFejYR75jRHKsnUivrLK1rxsvLZPL",
  "key44": "2XE9MAGKDXSMcRjPrV3waZXZp3KNrWUVJL2FFLJVfxatzw9xCVRWTozCwTGuhoF17ZDb3Mu5FeSZkDd8wBKvfyKg",
  "key45": "4ZerfcSMpP9B52zqDRieAWVcb1myG2fSJLUVQizBVAsibtWhBkEi4pNu7GbPGrXL21XG6r9VDUdjarZu9S2ZPgmi",
  "key46": "4BS86w28sFQkpq6H7U8GnR4Be7eXsYGL9DNuWGZXw4Mc5xCjyDW22jDGYW1mJp6qsRHoLeJ77gMVPRYWd8gjJLZ6"
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
