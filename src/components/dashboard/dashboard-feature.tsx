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
    "2J9FM1vpMuMyu4tttSJVobU1wr4jDLaKVvWLT8Ac5gwZknjgsB3VCBsjss9rHxDPNwZuH8GJugkYfGsHYEUVVL31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n2g5Us6un6ZUa6C9gzUoUxsLDc33oJU6GW6NQc1vRyQsaH1683CVkgBKboTDhAoaivefhm5hyEWVXn6azctAMFB",
  "key1": "5KbzCUxF4KC3Ahaz2jFfjpRdZM6tEHWfQGY7dwM6z6V2rx32Y9NX7WfSfHMVtqNcnQ96dQ8sEceFMGqxjcePinhV",
  "key2": "4F9rsvPz4txoUA2gKYwstjrsBUzRQYswE7kgCi3s41NdD1sCEcGtyj7EbyxXq6tsRrQdpy1HqtFF7E1ZeNGUsTtQ",
  "key3": "45pAtNsArrHbUwe8AT8Ezsj6Pi8SJmabGkF8ynu13R7u2w9UDvsmJYmf9m4n9vPJpfynnmQrcc2kb5xdA967GNYv",
  "key4": "V1Fn7uVVzMnBGG7NNwj8s5NWfsxTwTZKDoEDFxUXgYrS3tRFJCEDEt5pNWrHZLQFcf3yaai5ZrJ98d1AvnMNVV8",
  "key5": "538VQgxnRtsppHuyH2fctz1DxoBdVgEvNUiQczqrazzctbEkj6Ro6R2TkBVUfueGK7T3HrYEhBErDaszpCgZifPA",
  "key6": "63agaSYRkrrAL1x4w2Un4MgM3ZxiAgWHgbc92Hb61JUv2gRcZiMiKnAvnu7nic4MfQMAvhSJkCWGVBKKFgfnSk2b",
  "key7": "24kJGh8yLpvJVafAdm4L8ygjbNNVsWdZDLgyS5sFYAcQbBpB81QM7GpCh98FpjBPj5xo2SR5MCUjuQ1NYYyuRMCg",
  "key8": "2sndXiJaXDSqFMWrMnmJEN2BtfCaLtxLf38cZ4jnUsJJS2QJNdG5S6Pyi1HdjRPX8HHYhFWgTQxavQuEkatoHGpb",
  "key9": "sNHaPhHY1nGxs3n9yvWGcMyAEPYCNi1q2umy1vB8uM4icrYFQD88tbBpG71X4UZfVE76WmBpGf7o4ckmYXpBZ2z",
  "key10": "2UhXCxDc96sZtovb8WekLxiz8egVjVGr4AKCbA61hwW3GJCGXbXoPLkVVBre3t1Cgh5EgZaqx9ieFdFBLS2aAq2i",
  "key11": "5pTKvnU6QcdMeaQkSRsYsigxKCcqSq5HsRauYoDumrnMtkXo9wTWHQYcGXErXpDQZZr6xjtGnNpqzA3uhNDVswNM",
  "key12": "24LjQaAsBVDXt23woTV7Y5QLMeJMneUGqys2nDp3ULbzeuPWBpDKUUaWkcAH6mpmidan9VC8cWpPbqNbgTwBrJbQ",
  "key13": "HVTsnnjfPhLCJ8gtjqjHGSPUiBzupqijMtoFm9LKoFVy2pCTbbtGN9nePwAeMdBpDsPzUkdLVP4pbRaz2hqLQ2J",
  "key14": "5QNR52GB35TUqwT1WJnsqauCAsJGjNyn62i3mMHvYuvKSQtyb4yczb3DHMFiFF6NPAf821kHLwgtML4y7ZcgK9Sq",
  "key15": "3rn9gQuKoLEUN9641wkFXy2QGaaCb59Pe1xo2ZZTfW58DejhUf5Fte29UuJKpdmwv1quHFTVxb3nhR8UAvkcxWur",
  "key16": "rqHhtQoWHjJiR7u3Ss49JesgPDE9q2J6aH5zTaFp4kLvnNchYwZ94wFojiobDhbbsyfUZJvAdt8LErnTJ37M4px",
  "key17": "2mkmLrKyc6Fuv7QYkipuRLTnLPttXJumnXxHurWrXVNwG4x7v8tkvp6YQZX8tjkM5231zMB8oJuAxj4sC5bFc1wK",
  "key18": "4Vu9mFGXFKJA5S9QZkCEhYmbXiy7vf6PfCmYLbYqyCKd4VTHdwGxdUZ8MLf6NfTiVyrNMsEv5Sb3sKANAhZT6LP1",
  "key19": "4Ut6hE6XZ4hqU4Tm1kmU9opdUNqCJXLiN28NmfaeHXUgCCf3VdGvhYM8vgr1SvgwQQQgqe2KkB6GKGXqpWNWw8TE",
  "key20": "2JE2YjbPbaPB85u3pppTXnjUx351XkuuqAdNUSivwtD6aFKm9zoazZFk4nZdDQ6H4EtAm2Sk9zpkozfYxLTEmewV",
  "key21": "5nUNKmNiMEFYaWZYAangFR6SziXxVX85Xrn81tPBNsnTCD5EgnKrWCkVAykK7M8tbFoi9ZRydhREUdue6cXipyH6",
  "key22": "5spHPwcyC9cSbMFb8PrQkChem72BRDMAuwG1QRFkJ16HZ5EAho3qkVcnks9MoaCqP6EjPCXQiKuUNf6gxuJwD6it",
  "key23": "2yDUNNTQD5FgmAPp43wY15Ms2GB3Eo14JpQuWEVpgrfZh8hmVwt4ZrkReQ8cQSdfxHKmSLDKh6VNcKv8nP5fUvph",
  "key24": "5W4tAAwStmA3HsE9U5pRGE1RW9rnrDQRXDJyDQekDv4RmPeFp4UXbLajgd15qaSRZVktgEudLHnYSHg7yQC4MnbE",
  "key25": "KBJqVtr5o8j4bqwe1zXkryWYkaSpqujTJgQ6D3AHz43K4faQybkQ9heS5G8DAFnn198hKt5hJR3tABMjiw3g2nh",
  "key26": "2K1Tn9qBZzeHa1AAAuKGwG2bLYMS3AQoNH6g5UwhG43apTE8wkhfY8tApantsZKphhPyF8a6XvJhUwyzpqoDcPb7",
  "key27": "4a7CgdfQUTJVvKiYnn8fMDnxmMkALrxANJu92z7RCf9doELG41Ppt4Zpu1Quv2WGqcdqefH3mDLfoCXbVmHGVzsN",
  "key28": "2cxz6Zi6EgdgP8K3K9stTgwFusseTfRo7hQcm4VXwRu82BUWKqhRjMm132aVZnsEVxn3KCGbc5XSh2G9QMQxVX3h",
  "key29": "4PcfZjrEtZo24rVkwHHQk4jgbiqxx1uSbGL3NzqcfRuS95aCW7sDJ4ferwYkzdDUHKEwcm4oTWYv6HHrfzP4seAU",
  "key30": "3jxntieL6hLq7LVEAWPoiFjZnWVBEt7fXC1aCsRrVNjHvbE8yxdgnSXcJKRqTM894xSRbNXQmHExh2hq6Vdjgww6",
  "key31": "5ZPdWnA1fsjb5EFAYaAtsGTaKWWVvgnmHnPD53sWaWuSS4c6CtWktjnkwKF2kbdRVrVA1f6WjWohDGcvpnoTm9Bb",
  "key32": "rr7YcamscpcfENZ1aaT1sLrXtHzFW3HCA5989syF7gocjK7qib8X22B4QdwKSzNbooe14NM9rRqzVgn1jvFq8yY",
  "key33": "4YLxrLS3N36Mav2e7CuJNSVV3o4RzVV53hYfLVeMTx73VXmA7p6LtN92pA3vwmkZsr69W5QqtB6EvrGQjMwvoUem",
  "key34": "xG2WnZQJBGYyqgDYYAa6f88dRHAya6uYywHoYXz7yZo3UKUrpMWiJs4NR8TfqHp1jMtmw56Yii7GASmcY2XVNVH",
  "key35": "9CR6u6Ph6sYxpFn1zhQeYJVjWJwtjDMPgByuqeDsXtYLEomuEQMxdz94ms6XKb3YqzWPcHyUF4UsNbE3ZdSyRqa",
  "key36": "2zNWbUCdNpvaHGpDrs8aRFMje3TcqVABHEzugNxwjjSykRbBZxBTXLDkegh8xcuaorWqHVPYTpVPPPKuWpWd7Jbp",
  "key37": "661mXodgNnDbos5pfSq1GdmsJBo7DGsEs14wSPKL1ajLEzRZT1TNHrs6duQqbiVPAUDagxuWamsgV9BmxBAZS8Rw",
  "key38": "a2LAPDSyinGqBjEBHmgJ1zgjeg3gfskkopQCyiynAsWe2KkJj9VRiHuCD5g778MeZjDBsM8rZ826vuYNgqXmRUZ",
  "key39": "5e1T1XuCuB3kwS88zFVafS6QyMRBmPV5c2WmSxsvrUCSo456YQTGbD8V9UwPXzFfCLFge9WLHKPhKkaBYsGjKjWA",
  "key40": "4GDQu5Td3V4XrjNMWrV3wTjN55Sgp4u5qTCnWHRtJmnB5DbDcpcWTqaDZv7SMNQHfNasCRo1QXJyBsiPje2WZ6jB",
  "key41": "5TTxE6hGRNp384X8DfVKAEhkNwkbcQtvHaYZLMW3uHLi2Y5TxC3BJCXzEonLCXQxXYRnqJkJs2YuAG1EKqzDAXVj",
  "key42": "4GbdunVQH6cwo4WVKrH15S6A7BsqK1ZACvWJ88c522FFMwR3Gbxm5YCFbvYT6cyUCzw45Z6MnYZ2sdGQ8uwc1sVJ",
  "key43": "2ev4zNjN8TaA9ZRMrdseXTr8j7jN8e1gxvcm967Kpino65vNKNaeewzh4WB9mCyJ4r7eLxksZMDkiaUdk1oyzAvN",
  "key44": "23T1AWMNuQVY97gB5DHqCJkvi7XSN5spyHKJCMMk6axwanUdJC21ceqtz225ZuMonT95Yur4sew2mJsQvtgyBbYh",
  "key45": "2X8MMc6BcsLsMFfWx9VnvAskYAupZ4Jt1yAevPNGKLY5rTWzYgFskZ62njNuUJ84FLpUJUaZYCBgNrtivXA5zFjH",
  "key46": "5eptqzEwAjBCxpQtuuQRcaqtjuSwvg3BDqGduFCVqv1cqHQCiA3EDY7aaeysYVdR4T6AkjBnwGTeo3Cz6w9pgoxf"
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
