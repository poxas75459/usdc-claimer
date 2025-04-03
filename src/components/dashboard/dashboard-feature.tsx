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
    "62w22uoWzgTQakC57nvued6npBEX1Pes4dmW472agoyHX49vqQ6Hu2NwFxugTFWiT6PrGRfaPhX1XnrWQmLgeKsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u2x1VDj9pRmJqqSr1xcPK6UVpNgcKbdaAEvUoMdQUTGcvxwYGoPDM6Z1P5ea3Ze4PZF6ECPQSkXnxhzhYuz661g",
  "key1": "3UwoDZZUctUkQ3yzXWpmsnpAj7hSmkGk5ZbnsEHojD4uddqhNJjt5EAMxcJnUqYHisBHVA4MgoKaooAy6K4A3Y9B",
  "key2": "azFwxS4PLefmMxE2Cv3FpwZiBq6BgmLmLVBPqLpPFQ7u3JyLcuFuD1YATC1PGv9VyErEf9Bghef7Hd27f61vDSV",
  "key3": "4B8QLo6mkeYK199yQYkrjACrYfWxkuoFiBqvQLdtVqz4A47q23PHhxrMLhpXS7DwuWUabpaJysx5KmvXTsVZg4Me",
  "key4": "5AaN7DRtUwAXarpb8ry9D1m6JxLzwmruz4GJjXHdTANNPz3pjmmCu3iBJH2fDiqstAS6FZLUBsMWyzYPN9136sn9",
  "key5": "hfMywQSPV3rvZRJHKBz1LQZK1DFXxJSHQzUyEcxUXiKZ7UFR19ZZEmNnTUjiS6q6JRiAwgvQAGFBbn7xeNRStN7",
  "key6": "2TdtSUEQb5kQnMokF6jdeh23fhiQsTJDUWFuaWbHcaFyDrJFfnfoWGUDxWuVMAStyQ6gByCdQnZcSX6vjDAYvMkQ",
  "key7": "56rfyftDpQcVNCPBkUwHdG9NRcnVfSfqWSfkmjrN9Kwtr2RRFGNhGuVjLcPYwP5PxeQMLdarUL5vzznZ2yNh3JFB",
  "key8": "427EXqpbrkAhZTB4CnBpuv9jxvrkbyQMZp3Ut9LN2MSwxiZFTPx84RdBfE94pTRrZncx2BSi3SVwpk7Wbdo9crKG",
  "key9": "EfaNAPoSWonFcfJvueEyVz3WQqAYF6tGkNP8yVmDfeoMEk9wxtzv55S94uB8B2am4CZ4afioz8iBvSAVnr9s4ST",
  "key10": "5jrrsiD9Q1XmQEidT6Pt8eUhu4Sm3TsjJJVnsRns7GAxp7WitCfjXeswME8gEuSie7UhbtiMmaAyTL6kBrA1JghF",
  "key11": "3SjwM9YNoxMQhW4NdDQJVQMjNL8TgzPceZxYc8nVCc613euJSFh2Nnceq5M1sXVSztStzURsys7WHpq8UwEUHd9q",
  "key12": "2AAbeoPg2CuGGGD6FSHbgAJASnifKh4u7QJNMCpNF6L6JXbPg8gzTamE7btrRX2PrFUuyERnZ9Gt3pamsoaa8chy",
  "key13": "99oYsVyE1P3eH4B6WYoUCCnhKSmo1F7kkoDQvHMBcttCp22z9VbzzP9872QApHaSAPEXY6fZj52TcL2dJDed3iY",
  "key14": "3PwDaiHao6PZ499SW15U2LEcjmzDnKXAP1AbWtFMUxxRt8GMNbvbn17D3dGj2pf7QRYkfsPXonMKad8AYRM4XkLQ",
  "key15": "46HzACtfn1wqnbpTkzoXTHgoCD5UibvY8Y3gk7DcdF3wCq2kDJGoYqLgwNqff41FHJwvYy725neRcRjkMvLx5Pps",
  "key16": "9LAKc85ht52cfanytATgRFowbVGmhJTKWzkQNthqgc6gX6ydpB3FWkAnLWe5MiFfScTotxbZCAW6MwwAZ3YFSqt",
  "key17": "3wLHXU4CLfRmnoXZjPpMgQ8BCczp6CBquHfWSwe3R4duTM1SdabbVHSV8qvSvF1AEPJZw8zHhHfrFAraiZnSVfn1",
  "key18": "4rXgdFdjHADAwQyzuSZJGAKvtsnoQQ8dgitPM3ZpowFms43J7yTpETqcJqzQU7h9MVCRR2rHtr6thVPHphZvJp9r",
  "key19": "3ATkh5oGxMzUPnkfeAxskCZtAxH1BYPCoNhE7mbcyRZNQudk2cLnHi78Yg2beHzuNNxgENeucASnN1JU6yogq4ZM",
  "key20": "3McDbRoiWfssJMWf4LEN1BQ7bWibs5cNBqvsUiHBAGrouQD7g83LMNHxfbAWvPtfjtpFCapePLoS8nArV773jWHQ",
  "key21": "3zowZjTGmAjYDU3MAHhzopc7jMuN8hoAFxgg2QXDu92gooqeLGqyqa4FnNkLPw4URgXLKem9aVMwyXf1FbwZEDqT",
  "key22": "4TrB847gdwpRBthrWoUaSAXyGkfCkpb8Yv9CEQLxNXpXybywwKey8Dm7aF5e6LpchRcKC71dt8qnGBEARc9ozTEm",
  "key23": "1EZtt7NEP2YhCuq1huzY4cW9E4jU58h2QLoiNAKf9dS1fEskTVFsyzqSoiruEWiAHT14pu1Gn98BDQN4HeqZix1",
  "key24": "3x37vWhXpXukaqPR9koL5CCBakEAYFLZx8rawoGHuTWLcGHqXqg2qbuwnqspvmso6B1RPtkRgAH9bakD21a3pcWR",
  "key25": "38ng5a4tJnwgrMo5ehofenGKgvQcRW9k6inQeMBJRXueGkoXqr38qw3CYkhBBWJpLDitj7Bg2eRK3NE8v4TyeFNL",
  "key26": "61gFWky8hRswUSPWLFhZiN56THDxgvNQCWd7hYbib98T4n5tY8t9HJKeUyayn1KSKywHRY9sr9myCQuKa2GtYaZx",
  "key27": "5nxjypL1FXpui1WN4Hf6PCqyBxoDkzmwehcZeTXYRnWdt2TEpHbbuEoAXbRs56XRiTnEzrS8rt2vpCbTfhVSvHNh",
  "key28": "5SaiHA2UCx2VHQPucXKfmtPZGNH9KNKtaMisorLxCx9DUGjxXircFirpkkP3TNztJkerp64LVoNdW5crNrRYfeAr",
  "key29": "4nMJngw4iDjicDQEL3AfDAQiAFesNf495oUri2SgyideA1WcdRZypwXYCapxBAh3Tii6hYS2tjZqBoPpaDV8cLDV",
  "key30": "5WPRQJj68wwdZvJ1QdorLWDyof4jxbmNmZwcRsRE3Bt8Z5ifwxou1zGdtUrqRUSoL7exA1PT37upRXx4Mhw9R9bD",
  "key31": "43wLD1Z8kFufA66fu95Zp1BKuKRVmpvDMUQVZRFbqojssCGSwUvcRoYpoxgsZM1wa4fxDzykBu64CufbMRs66W9J",
  "key32": "fbyqU4su49eSXJcfEeTMJHU9iiBRHiHEXmLn3W3exZrJJViKVAumtnhH9EL1YBzsNXi5dEtLdYGTw3LazrWbSQL",
  "key33": "2YVd6kiTaNj6hN7apJpLYPoDzW5Unc2tiN6koQ1vkUfzA5ZaxrLeBU2qkTwUFdpJUEfZ4rGRpA9G5fRfJbD4s73y",
  "key34": "29BeEZNdfmUjwQ1aGHH8p9ozt6ud7RmDHrqwk4XNU32a3cLE3mtonKcm3zbwaKV2kGerPaGdXUW714RBU4HuxqLo",
  "key35": "4sd4dLEq7wvgQHM8UbHvP4FzC4yjH5DrWsWdbikbFxdSNMT7VtcNh4gnym2rkXJQmrL5yroooch725UGdbB7Qu9w",
  "key36": "5gEvBGiCqLhFRc8dzxKZjChZ1F7pEyr3jmqqAMMPhYZd1HiE9CSMZvhaKKsKN4PzsPfmkRUw9W5jMQGKTa22FVGq",
  "key37": "2BTBUmejVBv6q1ReF2f2fGYTcej7wdv3AYaATEqHKRSndrzYJKr1Ps6gyg47kWEKBPUVdGmZS4WqA8c3dPoorTgm",
  "key38": "5SyipdS388KLziYDURniw2bwyh9CvuTvvZ7mcRbpjLHs6Qf4qDkQLjNSUGRRVV37AHX44inPmmxaQ1DFdmpTGGW",
  "key39": "HrKymsisfYEfyRkE9XjFQJ34BGJ7EN4mXFKoBYtJ4KDu7imzrbcvouu1hRQDcQiHeor6wbivczEzpHGji2gCyFG",
  "key40": "44aivTM3EPn1JRt82Gnu3Mg9de3anBzfdabryy9VqENFebonTZgvKbVZM246neGbDPuT25UQfNfWdNPsZnWWWMgy",
  "key41": "YMoebsiZt1CN1twNVZ5WvDqaQm5dUasEfu6xMKWwDUTpRGN3osu6au3QtQFdnnHDcFbaWN55MZ8j1EqnvKxPY7y"
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
