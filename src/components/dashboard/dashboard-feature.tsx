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
    "4PZeK5EcbFxfza74bhDnxDmKmfoymuuLEWGbE5SgQm3NbVbzxvihSPRik6rDYBrFFhpRVG5BX7FwdbT7YbEUeT5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66AHhbvk6XMoq4i59FwsUDchGaRzJk2RniEiTiw1nqhEf95DhMm7gLxX2CxK6TXinRCGBUexFjyLFK45Vo4sLe6C",
  "key1": "5Z7Bxy7oDUuGwpavtcRjeypNMQSaB75itQ4hZUsg3qMGcyYQEkF9pUxHuAx8hgALHttF99vxW7s7wqjqJM454Ace",
  "key2": "4k2WqET3YHm5b5wnQ9Qr6fajQjLHJwoA8GpFYJhH6WuZr6B6TYNjJG8XqknWF7xnTN1WsxeG3xR4miqgSe3UEXMG",
  "key3": "5gmoC9Kk6HpkU7NJzqH83QkYu28N8JwuHJi1Fn1D2jGydfQrh14fbeBCZUkxC1SdNAHjJJkTc6jwDEuPsrgFtVno",
  "key4": "4DgLX6EXqvBUnDDbEy5c3b5aJaJ4ntB6YZfWHBr17JwodrezXcJnxdR3bDRD6x6RSvk1wi7WQMKMdcSpxmPU65QB",
  "key5": "5w4iU9AXZQW2yZ9iBn2yKSkWiwQXLTFPUDDD4WzVkrsPuYvPkH1bKcraVMh8s2cqNeTgmh5STSK4sFGpi5eoZpVv",
  "key6": "4jRWVnYwXPXLjmXWPEo2snJn9o3qTUgSbXibpiVuyDmmJnEB9Yjjor43fVMf58wPuQKX5qV3nwM64TRJde4exo9y",
  "key7": "DtjFmUrhyoKcLTGgT8zr9UQtieciKwzi856cuSgD7LjgLRrZ5h5o5GsHVQi9iL9mKJqQPcAzoMJpctz7r3oGbwg",
  "key8": "4AZUFK1QdytLqwUxpuDcYgtgU1ePRDFdKVxNG3aEJjbouE3tRUG6T3sp7Pot2VDjKQu4jY1kEvJUT2tg7yAEpxPP",
  "key9": "5RGw5vZSuuX5FnT4zhVvQGxEABNqV6jQgVCAB9fxgqmAQJDEDLwLSLiNi7247mm3LpGvNRFLbW5nX3ScxHXARLo8",
  "key10": "41hWXHjviu4FA66EeK29yPiM38iHLQp7rmBY6ooVfH1Tp6S6BZ6m9UEcBb7eZjf7VMpoc1JWpcdhy3bNDjiGWmAd",
  "key11": "2Q47nS2d1jF9JyxphVPbLy4sEfRD9C3WHbKLoAWNmMnCYs1MP6sxxmtTfdfSKHeuzLdEzYTASuvn9rPYCkKL9TKL",
  "key12": "5CfV4CR7TW1qSMku7ux7GWjX33mwajaGzFf9tf8FRexMrm1vcScz3ui8tyGCZzNrYNgTbR7mZENPpTkpmVCGWMEM",
  "key13": "5BycsPSnzCG9WqLQiW4yUSFDbLfNKTxz46vwvg354thZx9toMVcArgv2fLUrPgMfg2jGanbSGMF4AmpkdTWxX7Hp",
  "key14": "3T2bysZpqxwjq6B38tqhrZbTSR4cbFGNQrC8dWCfpHxZGDSphZhnhxefpAHCFiooyJ2ej1U5ZmcpzQJ3z9SupSxo",
  "key15": "4dSQhW28zCmVFEqWjPSc5KHiEcAhnPDPvZCGgwJTygqGjSN3YoxW6RSFhSDygq22Q9GWs44PbfSTjE28gY1Ghdnz",
  "key16": "4gBZacFacDf2G9y54xhrroSb4EX9fZcMNXPzVj7jtwsMqQD2YWdFYBT9kT9YNu5a9XAXgWnMiwpw2Rbxw22dXFCd",
  "key17": "66Kdm4K2S5GxRtTRJ4GBgsvfGXt3ZDkFwXErYbcH3G51ApBLifEtiMcXjto55kvxrBqXgMCi411TR1Th8NyH4Jed",
  "key18": "2hZJQKqtzvFm359pm4uCYD9ujKFnsYWv9n5rCRTnEpMrdWvSTKPLimctBqtKrrMH3waqnKpoNXp2JT5pm1xAVRiX",
  "key19": "5HgwB4s3zcXC6mssmWMyHxBfoSRDZr9hoHZ1aZ2E78eBSsp4MNMNcgZFKfF3MtzXHYZm4aTzhEQN3vD15JGekGU9",
  "key20": "5TbNTeGmsge5xUniJNjEDKGXje5UoQ8HVEUA5RN5JXwRQymMANwz1AuATck2rWUYAbgNHx521r7tXZxXG9iY2SLf",
  "key21": "jHKLeBZrxNXR4QyAZr8YRNAwj4XHnyr6V6uhR7wboEBt673zELVU1KL8XJd1pjGwtdgcxD3CBuVBNJp5299VtNL",
  "key22": "2cgVXurxGBdSYjTFfg9qq4YFFu2gYQpChkJSX5fr9DRtzEjgX8YjTdYAPEKHmjvgAU8DsUfEeQUK2927tKa2wERo",
  "key23": "3thXYYFyMJBgq8hCddbBH5KZQmYQPZZjtRwbrwAVKzupEuMpsw7gz1kxnhQoGb6f8WUEb6Mt1NqdkmhaKYX7sY8T",
  "key24": "2UKYsM1qLCZE1is9NRWuP5Sxzo9aqPj25enE3XR6QsHBXn3CpmhdNe8VhYtiqQogL2CLYxQzbzzPaiJzq4UBiDaE",
  "key25": "414debrTiMGuWYNjiHbRH7w6z7aWavUbARPh3N8FA6R56Z6HNd23pgXj1pq7j4i8nrWRrzRbqJHg5ZrsvpKviuYw",
  "key26": "XVRWyGEQDwDg3FLSG9hyP4A6xsfo9QMFf2wLHXSxVgHv62ZdZqLp4aGvjrxmQgt5t3WKYANHcHtKYrzjyspu9oZ",
  "key27": "2XkkRKvu7CbZBqibHVujTNgz2X1dY7HTKGHhmLnuZNfcrpoNo8TBoaacAkPNMgrWAcaZ13EQhs2rBSnJgHV2o5q8",
  "key28": "2e5vev5TwAtMufBAEdym41nyn1Zrjcz5SGBuFhFgcTkptadcpwcCiffyjWtEAe3ZpcXt9R7oGMZUYCtizhogrhZj",
  "key29": "413rCSobuQY6JghzzDrHr1etkBsqXdBc7L6EgJ6CbATGiE3xQpxoqepMfAh4VSL3RTQSxYQPxsDpD8ArMvZJsLyM",
  "key30": "Vf6mtuh4Y3JvKnpLwrugXQaPBfi6TB5YcL4nCFr4S4VJmtnXBf8s847zAMmuNXfHLptUvKLcxbPjE1UqB8nfZbL",
  "key31": "2AmavX4sodAu5Kv7E8iECEZdcaCEWUvNSbEhWp7HTdDYy6Cbdf6DLRd3JKXiAPQtWwmgcx5pq6ontkrfBVw76Lx2",
  "key32": "592wbbWaXm9SNgvLmLGrYW1GUtKsLsUQsVyiWGBFHjg37rDxLeTYWjLW5FyZjThiNQQ3EBV8ZFikqZav3oT9qrgS",
  "key33": "46MyYekZ7iSGzGRnwpZq6StwHxMJYQBiMCnxvQS3KLRUH3DC7dN6RCor3HckmTvrSmGaBSBRMAxnHbQo96YZjfL7",
  "key34": "4Sg4GbuX8UKJqo3qZM46h6oqpwQcvpR3fSEQ83bXaRX4p99Mqv1jN3W4v783TT5pH7kv6xcQ4TeGUJ7CQzCtWng1",
  "key35": "365KZD3SGGQLs9WnaGEWx9YzC3UvKyuRjykVG8tSt4GHvPZJeZPdNsgsmkNkKaZke4SQrzKj4HroMS6A87PXTPsE",
  "key36": "Jc3K2L4HhtqP1YbHgwkEZuCQe8cXdBJtKTM9x6Q9TScYSTcYRqTHGGgG95HGfPA1RVmKjFENGGEahrg7eoxLrJU",
  "key37": "cYdtfMySSj8W2AZvgNhCa92DRV7jofKgbru7QaF5CHsS3AefjL6mp5zptqd6EPYQWoNv4XZgnRnLvBWoamocfyv",
  "key38": "85k74CHTv3JcsFJrmYLCmQGe9g7rj2z4NE7UGPmxcdUQqKRiuy138MAEE31NLyj7euVnfLkR1oABbC77HVPpfSa",
  "key39": "qXLMFudYq4oaQeZEDMkN1XbyLM9jin2nCyXeMxoSt25rx3L5fdR8nYk85Yp7R9SMTtNdSsZGtELro62fvDjf8Aw",
  "key40": "4s2oUdWKidgXsAj2TVpZXku9gRmAMjvSZNqkXpPLKaTFLbMfQ1quQXwVaTR9VzitYKTsA5nVvonaQ4UMT5bVQ8Vy",
  "key41": "5xcP1KzxreEC64wNxqfN5hqGLvViJPhUv9T3hqq4FLucx93mo8MQGejmymTzYfGj2YDhzKP2eqHhQJCaQxe9YwVS",
  "key42": "5GxUkM2uFpdZXh5Tcgj9xzW7qTknk6zsahFjpwkbwedn2kuVvwXP2hDeWnxkX2nTHJuqLGoNFocqtvFzgp9qCyNH",
  "key43": "4Py1GVU7Rn1f1Rn5y9J2V1ZnMFLXws1C3DfD9B832yKmY6ua8D2UcdNV4Fs3aaxUwhD2eirUFkCsHkkAAtiLxUgM",
  "key44": "5ReV9mJHe3spYwz5A476EBXHhWtqpNxcEgGxbPFatFdP2g48QRTotpLWQPz69VX7TmPL6BnzCTX325ZK6ETKpGgz",
  "key45": "4W8Lm9dNWXTXFbFEG5ZiPVZjHnmj1p1EsyZu9Pu5gTwYqwqGoTG93mQoV1L4eFfLKM4QWAcomYwmN5UFbtLYXvJ1",
  "key46": "39LiJFStMDmHWNBsEkMZpnuPwNhxnRdd58rmv6aEjCPKW8bByzEgRCxaQQ5QcK5fxNw3bBuKDTnbc3dUZyFJ2qaU",
  "key47": "5eqho2nFMyc6hFF3vdSXwG2ZVFNA1JMiif3MAfc8iKAkyWTPVH3BQUEJR7e1D2t4Nbj2yvAjkKVEkC7Zf4SNZXZk"
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
