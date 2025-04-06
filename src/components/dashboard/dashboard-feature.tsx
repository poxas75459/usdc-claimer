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
    "4TvNeGn6aHuzQDgaRYQcoHAZWc64PhceopdxXRzEGc2cMCA9UKq6jWGcWFx18bwm4BPj62WroyYmb166aGA1btJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y5rTJkwxFJAG9KbKXJAxdmSqEngUrZ78vEnt8RmCg43HuG6HFk9kuS2Ak6hqxJ8FgSE3xNCtEa8MvcxMvLGHCh5",
  "key1": "HiGKgq8GVWq2j8xXfNvB9kqZ1yJyYaG9ExXzK5LC6rryrLfWJdfThdAFwtBAk6zF81BukviRD6WFreXvxWapeCE",
  "key2": "67nhKwKeXLfF1ZD4ULr6Cq4DoR8QMxHDKdTwNdEhLg5BNMEddhZ9nSDhDqf1H5BSiuB2U5dCLuKXtXe21dgRNdiK",
  "key3": "5xFWqJMU58c3LYFmgFeQ2UEuU59nJkGtv2BGMyeGdErtbe62tPmXw9CnWNSTRLzPaAEEqK23z4ASJbajRPMmYR2K",
  "key4": "9QieRmkr1EeQUuZucJdeEr2Ukwxp2MKwMiJmsnNcRx3MKWDwhUR7xh79mfkn1GiPcsnivWBFucyU6WaZZNJvx8K",
  "key5": "5Lv3UAyxeWBbNuKB3mzi5qDtUk46taDqL15y4DFR1j89j4Qqzw7dnRtcSJzKdPdyBQcZ2Wka5ThoG5so7SAP5aBs",
  "key6": "2YbptxHmdvBQX8j7kYbTsfQJQwhVprvuPxtMPVs1pa75nDwGKdQfV78DJQwhr3xYYz88k2hwJ4aY8SPabySYwAVn",
  "key7": "3QuLqugHYyVbLJhxqFUA26CXSPEtZfbEzcTb8GdhTnWKUjMCZsyRLgc2MUQFXeeroyomJN9n9nVcnby1qAUG4r2Z",
  "key8": "4NKumjvnksBewrPBfkdCjzeFkjrTL8XgkPawRABrvGknyAeaSi6mXCUh2Uyp3K3gV331BhMHewrU4Ucc2cvLgCcq",
  "key9": "3TSQXBvNjrkCSrxs9JsMC2JCc9oYEL9QBzPWmx4JDmbgjWPj7vhhY7gF8CRaf8CJPYVo1JhLDCPAwMQXaczybeB4",
  "key10": "27xc4aU1tsFz39ntAmau9eA583rqejzesFL6uU9gx4f5MUUiKhaVqb9utmSoh36uooRUXbHFKenu9mtsXF8qHb3k",
  "key11": "4w3QBhsgeENbHZ8TS8ueDnzst4JW5FB8rHrmvwhXnDwWd5PwkZ8eDavmVB2qRfcLTSDBd23y2nyQQcBVvSundmP9",
  "key12": "o458RSvjvaqJ5nNLQYcaYkqaALPTgXW5YqPqCtbeLYNipnvVN5TBzHdURfGhe3ikpXNPyYApqEGBiXWZK3BntEp",
  "key13": "LbCVgMXpn53iekMQRHs4hfRXaLZgoKFyKmmWjm97myqh9hJEk97vyB9KDxGiN422GTUtseGLmjf6RmaGjyof8UH",
  "key14": "2JFpo8dieT95hBDtABU6z12W2UuqSjTBVBbEqYBxiBwGxUHrseSi2c4r3pVQpA6tpBvouZjx8bLKXkmUgvjCGQC8",
  "key15": "3zibG52Vf5bVPCSooidoJv8iRzR4Y95AdSPzKGEzfDwRs1F9ijBKfvmWoHUU1NHC9AyNDk3N72WB7ySStemyvkT3",
  "key16": "2c85PJCmwdQYy5B2eNeNuPGnk3wVzy7cUp5xAMz5ggdPPoCjCpKXzmtK3pbRErqCTmxpQDeHmZM6heiAnKaAHGCb",
  "key17": "4d4jqt44X81bPH5jqfb5KaDZJ9eqnnf21beBPXfgS9XrqZAqHJ3NT8ys9HfCMVYds41GeJtAq7SivpBzqBAdn2M",
  "key18": "28t5Cn1A2H8buc9CfDZmH8SxqVh4FppFhGtb34fVP1yE2qtNAXegkf7AuZ8ttSkFQZtumfn616XBVBxa41DpPtzY",
  "key19": "5jajVASJ7DBSkduUMZx4LMRAm8MUCDLyWUDmXg1vEogJbsoUveaNtqKWM1JgzFzjzXKDbP3Rpa3md2eh1CBEm2hC",
  "key20": "5EPTJ6bXV3z6wM9fC3c6Gmb5czydE79TCMmZ29XMh9x5u9Vn7MbERwCCBjEqZjFJuu3RJoeb9R4XdB7UAviWYsZr",
  "key21": "4BJByE5KE2WANEunwztNemP4S6pno8i351XhFdg5iFoHpAiYmAq5dnwA3jD27uj2ytXbz7cVK6xvJbmggdt2H9Jx",
  "key22": "3yXLPgYdeLpN5XbUbF6jDjAEn4z1FbzAEJYTTVUPZfXQnuwd7uybvzizR79Y38BvVyqSZniVXn9tvxjNhwsdUxpD",
  "key23": "3jufUSeD46rJR5CJSDhCHzafiBCKToccKsKYuJ9bBj5S3k6fVr7AVMy74Dbr64bGLa5iy5csboo4n5TwbFiM65i9",
  "key24": "4ajBJ5qKXu5o3A9MsnmnHHV9AK3S4bqYDjuDdzQ1DdN1rVS8tssShPNcezHEcvxT53Gwoi1E4WUhWopfgZQyNRTd",
  "key25": "5NeQFTVyc1zAHwme55g1N1f8ZwUHkZrJ2vx3hmvGigUuqcWru4Fw3QEhAK5w5zNb8F67fpmzMERnh4q64d2C1H2i",
  "key26": "44gAFQF3tsYCEFeqAQPk4JLJWoVboLt8Qx76e34PQfxPkTehPjBtrMJzdAVnCXNUDXD7dvV89fM2mPN1cNtRh22y",
  "key27": "382iXWeAB1LZv9SrfCDe1VGHKHnQJDf3GsY9L4PGLX4jquDBPz6SmxjX9jxaoMq99nR7pb3ThdVFyHL1vvcH7Zcr",
  "key28": "4Ap2W9R5MHprPmjuwz4g1bFevtPAv98n6TeqMH3XHF3jAj9crsgdnWPLfxx7MUEkXfqLLW8u2h2yqQ5ydHxxaRXZ",
  "key29": "3FjUbsN7HEpShKHVis7mvAVpgBN691haMKW1jFkmo3Gu8qq8btgxrXEa26Ah81SAAwaAffxd9T5EEsvVZE6iQGeH",
  "key30": "32ZZzRawZx6VmnK5Pu2Y76ZYtkMLJgWghzQ8RUZZhSFXDeRSTPJN1jkDxsUXCTvdnDbCnviMdM782PG13vasCoUb",
  "key31": "4kYAwGBWwpwY2N8sPJ7CYvG9dJztHiV98rNAKyThDbmciUnHzmUYzQozNmC8NizDy3jSFkC77YiGu491DeR28uai",
  "key32": "38y6LxuTJSeeCnJwkN3UrUnCVoVyjgCGrgGanaWfXUP4Ym8CzDMcFXFdAtdrmFcGk6Kbe9GjayTrQTFPJwe6MnPu",
  "key33": "4EEDDH1JwSFX4pnRQnfqf1iS6Ai2MGyTisgcDSDVYtZwmsdAWeTTfDnVwSDdGAyXLkVUhiQn9R6nK6KDw5dbbVsJ",
  "key34": "5vsLTQ9km5dyFLNasuywtVsHwWgftvoHtmUJKxMBTe5RqhopbwB6kGdjDiAynxgudT76TV1j71QdqL9JMh2B65La",
  "key35": "42iwUQi8RwDmbKUD4KoN5iK9759TjHi7t2mr1FQCA8LLV6cLCnvE7XTpmAgWytMxpGfCF2caseUuxHV51qvEVUQH",
  "key36": "4J38gVysUgez3f84itawKVnHWBibatgfCtEgoNkp4Xa43PxnbwsvbAhHheXNiwUXPDKQijPs2fr1biVTbc6vEKbF",
  "key37": "5GwvSaYEK5QfCo12cNAecAykQvYMZgxeN1aVvUaaUeiVJmeoGceGFWkowBos56rsRRdRya2cjDB31Tc2rUgpLCCy",
  "key38": "TSCPm9pGWaQJnRHT61nGdDVEhcwT59C66XhCSNMovxzcxKvUTCahKE8U7G1GeLYH4LG2vESQ7z2ZYFcf6VVP9bH",
  "key39": "4B3epaQudMJHFHBNvDCxpq6tvhLx9pGNf5CZt6TawLs2BXSXb9dDSBt8x3kwNH6eqtVhxEx1FDMfrpXiLyR7pKzU",
  "key40": "54o9sq4DV6d3BMkWpj6UVXc4cEjJWXiBtTe3SHvKJwWAuRgBN6FJ4rJxA52qpE6RCM3n1BFu7jsCXnvRSrmEqZ5e",
  "key41": "2u2cLRZrLJqKHASfaevNK5wFVhi5ZteC1UfXnBisi4K4BskSUHXpeXeCiJZSFHy7ferQKCBDqBdqGxq4HYY1GCzG",
  "key42": "4ctFHK7aoQr12zMdyvPPMT82UBK97gDckyWUDruM3DiaPXLWyRPXtouCcPJF4iGUD87faHeuvrgoWZETq1fxnN3T",
  "key43": "3R3xKQCvACFxRyV4aS5R2jzmqGBuQHvM59dMFVUWEuUUZ4Wa2GphtFGyF29TsGFTzAmYZD6Yq5bCMf4dHT7U8Gfa",
  "key44": "2pFb5CwQabi28JH9FzJfjwFCzDxmCw8F6cTr2M3TDdnwtKkizYkUNZZdaQByP2bX9F5bTBVY89hshhN9ufLfH2K7",
  "key45": "4jVivs61NNUJMGXR936NfJGgnTbKNGJyJUhshKhv92FhtHuWR9Et85d6hQhcjBNs7aU9EokcnFCgk6CQmzgx5nri",
  "key46": "2fpJ4KFnhme58J1Aasx8s6HMsqZj15PSqr26mTUHpNZQYuaNRruQeTeeRuMTXCmHQNPHf6AxQeMEzy4AWZPLUwRK",
  "key47": "4dyzmJ574KKtrV8VcwF7tuw7NeGnWH31V2bRADZZrVNDBE3TJ7RBwhdgEnRLvj2JCUrzUzorGKbVA8bD2K1rwQQZ",
  "key48": "5MvQu6FAPJYikjUS4NLcYaL1Y2VUCyn8hesMBPEYnKwJxAK1cBrpBbDrfKALeoVHg2naXPYD79U7nNyhzPpioDks",
  "key49": "2467hg5ntcN8kKy5ewUgXPiVsxAvQpSwfDWh1edfnaYeyq8QM42VaJatCtaC973YHX8qJ4C88tKB9H9d22QWc8te"
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
