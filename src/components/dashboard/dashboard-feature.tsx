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
    "2SNqCN1dFFN5JDoxTzs2qfZUtkJNh6EDbCWpRCFmikPdrx4gqBk6DFRTxM2sCtn3JmdZ5xZWQH3E4WHARCy4M7Ct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hoW7yz4qrvaaVQhXrPCs8KbK1qY4ui8DtN9b8dVzjRXt9xQidBAZn2fVR7khtXd5s1V2Kw5Uod8ys8x4T3fz1Bn",
  "key1": "2Ts72q4G6uieANDYgHymeHMC6jd6RzK4qEXjZu47TsacnoqYyCKVDrzAZpCT7aexVE4KPH6mtZ7DgBe2QHummGYJ",
  "key2": "2o2pJMLuk42mdnh18VwiFEeQLLSDPaWhg2JyeHB2JibRXkLPfvJDYbswSP1ay7rqVAgdnd5WKNSG3Z19HsZAD2ky",
  "key3": "2VYUE7AKbRXG3Pm4obQKtMxxtmBKrZdkReykSdUSKX8gcLxQi36yaBLrLscFWYAWYJfM7ncCW7JVN53uJnsj8rAx",
  "key4": "4HyL7ifgKJNhT1Fv71y8NdAxmssREV7dS3cqnrcki82boun3DzJ9u2K42MUPQQFw31CmViLPQQ81Mh59MQHQ9738",
  "key5": "421B3DEd5pYDEa6euvGVLfhbpCZBmH2KsTLCpyfSgqLiGzcEF1etbGcrSDfPrFJ5pNEm7E4rZYwrBFApPjQKv9c9",
  "key6": "2VvgaN2VTet8fpcvYdK8Vs6V7qBWed4jdqQveNW96n8nicyoj8BVTeJNPi6JYVL48ouRgKBQqP6AMNYRkNjzt2VU",
  "key7": "5pLziJ2o6P8Vk89PhkvFBHmcXFWN8ydS4xVuSjJ9SgeyhNTUurTdtZYgNm3V9KZbWQywNMMu7DKnjAnumVee58g1",
  "key8": "2H8VANXFQPzCtJfEsGAJPz8wAN1gUpBbHWmtpykLjUeNTm7zQdU7tkqjPWNEB6azXquDa56Y72ZNnb7BrGp5W7Zj",
  "key9": "3TCJ8ngHGZ4gLd6DHDMwKdPcqZb7i1TDJ98gpMxw63DDpYhGfaKUjZXZkR7tmXKECibJerVXVLLnHmMicJDqkrJ8",
  "key10": "2o8VdhsB3PKjwr7NEgk3E94QwCyT2rKhW4uMfwBcq45TdTACWnLQ8ZWsbmw5iYycM6tkB9JfQjfhNwtyc9oGmo5U",
  "key11": "392RDS3NLFyUu5XvGbpNKXw178pYtt2DdcJFNSA2MJwxahtwqKLcnZz3Nr6BFYBscGCitWcZNWu8qbAUoR3yCXkC",
  "key12": "5noLFUoUzjs3uU6w7swbzQbcuMLNrTxRT9EDC2BLVr4YNdnoTT77bxo8byrzjXHtEMHwd2u3sfrzmZPm1kUMJnhc",
  "key13": "4s2QDYdMxLrgLVpaTHsFoapUYe7dzbfM9Fy11TxydmTWrUepof6mhJCAyHGUKatWzRV7LtihMqaKk82Qjx84wfQT",
  "key14": "4CRtUzsFxMFmsycQHnCAUPXwcy18AQL5hX9kF29qd8hhCFMKL5GFLhYQxo2Doiidf6jho8Up36Yg3Ai8nwgDnWrH",
  "key15": "5tpXtNWzKu6x6axgeWY9iafaWheo2vkqQD7RMUGgVu7ztqJ8EMocr5oQt52EP17gnALDRJ7SwpyGzKm5VRR4CkAg",
  "key16": "3hKecpKhT4KutDRYr1MWkrHPub3ySMRPd8PXJ63Y4wJJ6PVwjLScZtsA289NpwKh9W1BibUU1vyeBqRuiZAT1dyU",
  "key17": "3rWeJpWmBQNo19HETuguJnJ1xTzEBkAK8MVypwegxXxUP9gWYc4V98FWwr1CqJnYGgaG3VYcPTXosPP27krwmu8T",
  "key18": "5aBHn12M7eQpFqzGM8LW65iVziD5oofyGudp4aZfTgqbWfcdu2ff2gXcdxn77UmCYvZA7UuCRSRQdxuMZpoduDRe",
  "key19": "2oE1LKK3qkpvW4a58r4XdKH4pjRgvezR87tXWJg9fvhgUmPKY84RAfq7qQrzXu2DfRMyKn4iJe9JakUPhmRMp6yi",
  "key20": "5ht8m87KcZDS89g3vjYsijMXwgeBtV8K9AWMpiHeuHRCi4Mq8AGuFYoCJiGpWYck1gzFcpmCieHey63BgboUYTNe",
  "key21": "MhnZbmofJcAHBGXjMwKqboxY2GZegkaRTaXSsvMFctUfCQJ1qvrmYhtiJ5cd8xWvPRScXUXwVEbZx2kUnajvtz9",
  "key22": "3HCAWUFmi2YUtybmvEgxD4vg12Lj5qt5ZjTPzL2VnhQyxsHHxm7ucnX1zau9kEB914jBSF4Ne6hjJRHTKqnaHMus",
  "key23": "4ocnYipPQvvc1i1fFLHR6uvFMYXiu7pN4dRgGJpT2MwhEtFtjwsvMjPYcbWYmccqJVfSTGERSbmJT6eLicQm9qmZ",
  "key24": "5EGukGHsfZ4RUvoCNPgNztzKrfWJb81A3SgETt2s4bLJihxaKMdR41WMwXzeSoKMBToWhmCD766McDQ61tczLhfo",
  "key25": "3T9oUWhr5vJCiptL5fBZJ6DJAgL7toneD6kmq8wp6moaAXbhvJL2ecL8FsytRQFD9wdATRo8RNZYd5aF22bK1TtL",
  "key26": "3RdQrnciUbuVKvx7f1furCM9NTEpNbMkTsUZWJuSBXzysLgPdtpZSnXNubFKFuPhRDF3EnGK7NwJQ48mJ1hQ2tmZ",
  "key27": "qi2BDRsPenSLZaskGPg5QeaAkSzVfb2vaw97jnVqjnPAiqikAp8yiPUdU8f8KTJWYMteM9bztuRAeovADdNSEzS",
  "key28": "67QrdafwMQjVfoVXwEEDCvtSf9thPREnWkHEn4evPLLRJbRH6kwEj5YMf5a5BPfu57Y3svvSCcWkoJhayupjTd8",
  "key29": "5mwvgP6CQPDpeh55G7W6sNK6ztKcpZn7muNJySrBDjZ7tWDaAYMPJaXDrmS7LEj5tTuwbC6rBrU6fWdFdWPm8GiA",
  "key30": "SN65t8UrGJRZX18RzRRD3vRPZ54DGrH9EMKV7raxB4AKP288Q2mmJtGe43eTtbD9S9ACobZajgfmQqoGRSQmxJu",
  "key31": "5hsxRFwTtARhnzwd4fRLwTFR2zAR6qt6Lsf8QCdk6WEaRaUSux4DzR1C7SSf6xXbfotAEKCNZoFxUNn89HDhKYy1",
  "key32": "29KQa5taKoCSaUmrZ4toK3naUKYdvMS5byNwbBg2rogFAhnRhmqhfUKcqV49MEZ36t9eHa9MydjcHzD5VeRa78c4",
  "key33": "38sK9DDiSjPFqUXRV3CTWEdvQ7F5eA8Jfdzm6VXaMm9N6RtRN5yNQMbiSY5ytvW2xcpLGKVRRkKXQHE83UtsDekF",
  "key34": "4PuziNCNzVH2D4SCGhfzjRjriu788WsJvpPon5EdxfF9F8xJtS5EWAkoQoPmFXBfjmohZwKPRhe4ddNCuDKNTe8T",
  "key35": "3haK5BjTz5JYoG2z2GbeNNYDYLsJs2pD3bSPjVqzPRSqd1yaug2ynaf7EpM6vB73ts4gLKqh9msxhk4gjtPV9DDr",
  "key36": "4rpM2Qv6n1ZSVk7V2YAPuBL8uhr4mBwZY8Bx4R8PVqidPqbyQVp252HLQMd3nxKa9MxCY2m3CbZAkLbmBDHNyhEw",
  "key37": "TQoHVha3N4qncrcnNWXn1idtoc435sG7JdbcP1ZhTfZSNeWqetwhiHeBgSHCTTb6A7oRDsrUq46v6SbgbDstW9N",
  "key38": "5oRL7zUXdqZ2NsNv7PwHkb3uFzQZUut7njFRky4hsSPCnecTcnL1geWyTeHHaqaT87CvZhYfEGSMgXjWy4kSKXLB",
  "key39": "3Qkz4csiBGBCR8gDK1VGmaL1zszh2rqKiUQZWKYQcZNP7FH2pYJJ7KkKUm6sUaduQ1CTtc4Xmv3SFp3S8SXHPUSi"
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
