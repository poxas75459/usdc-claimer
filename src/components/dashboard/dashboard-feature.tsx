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
    "AkNB8Kd8XoZouCwiV8Pzrzfu9rfZUAmkpCfheNQ7gHRYpowNs3N7Bht7G4b1AoowaHQeJhC7froH3DK9qPdeZCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XNbrrBNWZbodpS2ZtGe9HuH6AJaLfBUFrt6ExrQBUkmWWWwans1YB2xZ4kyKabpqyUVQDXXVF9iCjjVD5XdCtRh",
  "key1": "4F2rq3yc1ixx6XEetXuFRVYnBkwkdtPmK7mqPiYoQLPPqVaaY2Sgdob4YEMkBQtdZmEkabgxLNhMK6EoeEDjPBe5",
  "key2": "4sPowzoGqH7Jiq7UjM9fMJzptLn8ETudoeyjLvB2PJVSLW4e3ac42SSpcRiwZkNE7BJtck8c1hibZcnbYFtcojhx",
  "key3": "5DKhS6YRAEkJr7QTMoXVhjepom3T3xniiga1XLhZF57VRQP38Jgu1aJUf25nJD5SFHfWSoo4wzrBzXhzb6uodGEx",
  "key4": "4Mu1svfw8343xDZifDDDAUuQWjYfUeqFLf92tqrmRkdTMA3NhEcgTPT4zR43RttcBGmJ5vs5wkjXwspCwvr2a8Hv",
  "key5": "666ybaYeqTYkKRGMvcULF3PCDUwDETs3LdtivmtcjUSG6kkkf2koVyzjXhez1hqo1UTWopUXksjVimzPmMkEbm2H",
  "key6": "nv4kxggbuhBQUPHBZGdqVSraP8DxD9b1Uxj1y469VzF4hDdBexVbBmuyZTCKLddrvc4dNGBZavhseCokVGqbbDF",
  "key7": "5kiJpxcTtfdMSZsWL5wkhMgVHjTS1wYn41dxATb1ZCHyCCrkKPjpTMkpyiVPvqevRuyGxEDcyJTCujB9K41n1QAm",
  "key8": "4V2uaLLu4xHDeaZyS9g6gZdBCFWhbssX5fsprm6zuEPDAEWtxj1t2NRAtf3soxUyjbZaVXtv9hToTwkcwfbuS5xr",
  "key9": "41vmibN7ZgZ5nywjXdXU6v1tN1q4HfL8dsVd17NnpJdg5EEuSveRRV6PgdWpYcMo8CHbKn7S1odW17DDD6bSyEeq",
  "key10": "4rKybLcnr4NZRZnvqRjhAL7HhWCB5k9wKno9HtFyGbVU1mYPBk8JLnTVmaqr7Y1G2TvnX8PZta15aBHPiGnk1kuK",
  "key11": "49QNuhpFVyX9M3STM7KVZdD6bGsjDQcZxQeJHd9xpsycihWM7gn3Bdva1SjJmAFVacgDuGEBxCqXP5b9WArvbP4N",
  "key12": "52N1mEEXzPaiENoj8z5Csq2sWpMZZbap7xdUmvP1qjKuFVa4bjRty72CoKazXfCwVfybzsjAPtz12DxYrt6WsGLu",
  "key13": "3sfoXksVmuBuUtUHXZmbLX32nyLa7fEBQKy74aa4zGYnt6wY8PP1W8Y9PLXqpBqEtDDXMVGNHjdbks17kxK82tYH",
  "key14": "4hSjfjLnLNckycHAJaUMQ71JJQYpnb4Z7owFgrfgtng8hzpfwn6hiSFjqYUFiwLCXcv73r8qoBU9Fthk7YL1HXBD",
  "key15": "5ur7XdnBjoBLt6qiwA7Ya31rM5Tq8k88MYmsrXCscLTYqs5iE1X6eys6kuCfWaB52CXZXVRZnaMFJMo5FdfwpzuP",
  "key16": "2fhzPgVRo1L1Tf3PnJf43oa8r3WLabW7pP5cfHcRKxQiHTGKpgJQqsN35A47MxQaqEJCQgbb3UamKDSrvsQPuCEe",
  "key17": "4otpjXmEVDvLVwuFxXxNSZHFGedhp8w7jHD4xDdXYg5aKemQ2FmdeMnAWTwGrGCWYUy41bjBjorNTdp3zXJWYhPz",
  "key18": "2GdA3eToS9JBju3wgJMPeTRXyewZaU3oRW57NfTkp3SVhuRbG9ptb6iBjJArxDiukmLpxEf4HmqmKmV794zisorT",
  "key19": "46sZ4mNhSkP4DYPcgJSVPAgGdCu2NUzf9QB2hqwqkCnaUXbGYti8nAgPdqAQzrUyZ9XnUT3GdHf4fi88SZVA4ECp",
  "key20": "zm1kQRVdiyZWWGKUZ36FeMEXj9xHogYz5DLPts27WTLPLWBc86xWt8Yn2C5mYewm1obJT9VJq33VRHTmiPaaPQn",
  "key21": "2T6qd6nsaoBst7Lx8apGU1jda6DY4psMVen2r7kfMQYNjdSx869E3Q1WGXrS2V8e98WSeRBQEw29b6bQ3vs77Wee",
  "key22": "4u76JhWNME3Dq9jWd3wzs6stdSHhgVrawQjvVY5c6BKsZSsbnUjuUaKyLrvw75jua8MRMBZfLCrnzgzuUDk7e3qk",
  "key23": "4U6CHijptcDzqfb4CYkJwX5LSxSdsymkXYjj2q6DUr9rfLniP2Fba19GkY5CKrENsgRJ4fAjtWag5D3BVcwBHz18",
  "key24": "3Dcd7G9LAHKvFC58Q8znXPKBaGhgzXi5nJNeVB6GLcsHa64zQpMEggCaxqcsMGbh31QB5ZweNKGmB3ZZVkJJ12pm",
  "key25": "2Php66kPo3gC3z3FdwvLCJsHrNc62v1fwjeF5gwdHCdsET7Gjoq7LSwBi51kZHpyAe2o8qo2nUNomZNt3pUEqNxr",
  "key26": "2kpBVADHNjB9js4jFAopp1Yf8MprYz96qCAzQmwohyo1pki7SiYb1urrvJXWwmcJN4Jp53UWoRFj1Vt7xZeMwCAW",
  "key27": "34kmdYuW6hkGuE3otWZnrZcGGy343poBfQWhicAATnDtYovHs5RwstNzkCWuAevMyRGo6TgDhuSfbh8K71qgc2i5",
  "key28": "2hT23LproDuciFa5UWJ2aziKSUo2bZGuaH31PWKfTPFg1sKq3LW7oCje4kji1RGjRd9pWoobDCaTUF4eZv1maMWd",
  "key29": "36BLnQ5xcTVaCSmG2kAMJPJL7sKkdDpmLYRybd9QanjMjF7GH9auT3SmMrqq5Z9P1qYt2HgsrpAGUPLMEKdP8BLg",
  "key30": "2E3gyWnAxp9gg4K7NeMjRuueHLEAzqkebbLWD5awwB3qpHYjzYYyKqb9QKP39xkZWHdF3Qox2Mfvi7GbGtBm7DJU",
  "key31": "5xqzp7NiyfB87cqBAXYP4A4ADW7mDCdth86yAXgpMjCU4E6EpDAp61CgjJB8BQ2HpG8iiaDo3a1yxYWyk1DyCWtb",
  "key32": "5ToGRAa98yxU9bj1LrvLUHrEeENeepj2CNuwmJNrpNNSUMDH4YArbCG6Bysqi2KvVRpatEchAJGnymZPEYZCuVEp",
  "key33": "44xUtVGjbbzNSc2ctoyBGDedQ4hDECZM3c1iBiE2CeEa9tVFcPo3UoLMp3snug248VJ3U1Ate11472UgU5WTxAhC",
  "key34": "JgT1jv672hdFV9R7TM3YNgDbzd9yDRCD6z7BXRAuVAtHpea3BsF1RkLGJs4KVjTo4Yothn1ZPMUDd5daKy8hnoc",
  "key35": "SDxef2wkVcVbNs6967FqvvjwHr99GJm127JAGEPnYhmGBUM4poynL6dHuLrzkNNbrD79pZZs1j86z6okZct3hju",
  "key36": "34SAG8ony3tiTX1AuqDCavuSD8GPnRZPWh8BKnwKY8pZgaioE7C64HWuNTeMDQrUKnznenPPrHELSYVd3hwHVkaM",
  "key37": "drgChXZ52eGePe9bnir21CbvWGymU3vJ5v5vcdMbSpQcjn5nFpWEw66z4FTZhbF56JMBGGXw3wY8ckvt693eBnR"
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
