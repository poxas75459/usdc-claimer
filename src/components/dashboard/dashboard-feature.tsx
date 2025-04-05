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
    "218uhu2f4LEYPnLREfnRE9DZXwYvgGvr6kfmjY2MP9HaE9rnptrnJATYcWLBV5mBibPeNCAj12Jks7WAtQNSjhX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zhWZMuv5rxXTwKjJwuHVTg66QEdHnTNThSUy5WghPhfRw1CKxkD7aodUofi6qK4Eh9DizutGmwwruZjESxcLiv3",
  "key1": "2UEa5uaQM2tbnAcwU628sp6hMm74TsmqmNoy4FsAyZbmw4FJW4HQSRum3uTvWNxL5hMX7nCdUeSqrm6oKHHV5QTT",
  "key2": "52NuJVVSNtwGmctcw4Hmg17YR6wXEmKLEjM7dB1kUTGnYSdfxtMER2n6StgHez6CB1AJ5qsyqCPREsWyzCNTWqDY",
  "key3": "fXBV9XcBnvZZ7EkXPV4WwzRo9BqtZ6BRA6uVRaqzTAnKqHiUKRPYsBZtqasP5Yz37mWJ1jqUXEVX8hwdEhgXodm",
  "key4": "4XrNM5jMEcguAoYPgtNmFX5sY4mAJ5KLKd9Dnn54VjncqczbZaqg8QY4UB5F3MsnzDVZxL9EbFrEAMzpBQK4rBaD",
  "key5": "4VjKgWg6VniWHuSf1J5d8sfYPbucvijvqVubyjLMP51qwdyF6SpMQp8wGGSD2iJdbKcoVQ78k3V8kkZU56w2CzeM",
  "key6": "4U3MK77RELisLa8LoQQnjnwi6s57DuTsXYvWt74EyKXDHB65LMTzDvGmimG9QoEKHFZKxd2dtHyQSBU2kfd1h8Mw",
  "key7": "3xGRaqWkH3oH2wYc9P4imqwzBeibam83i9TxeLuoebYEQQiirXg3vvNX59cxkwxEq6XnQSkvUtJzUq6TW67GKrFg",
  "key8": "2NvCDXEgUFME9CjaSNiLxGWSzzxdMiW1uR9tzcbbqRhbyURyJN6Ua747ZaG8PSYYfWdya24ZTSRxmnZJ9gpaK1KM",
  "key9": "3UhjUZmSDYr3KUrV5CcquEhjRGrrEMUrE81VqDoqojTW9mh2sAPGRSc21xxdqGXQQWfBLojTvNshAjdfBazUS2hU",
  "key10": "2ZuGJcGJRyMQjbDBoghSyKscsyAEyXGQG3wtzKKnpTXBa7FDAvnHvX2W2v7A6aCVna4yqsXpZuHGuNcVDQTp7jzP",
  "key11": "QHJ2q1ZFys3sk7QBLLFA4FswibuwAxFXpzzb2SoXibHJXvWrbFiZBw4VrKMkXJAAqtGbocv7ndSi1ZTxNnZYev3",
  "key12": "5QNmkPjwqoazN9LS5M2eHHYF5PyiPa5cUwBuxa5ydWTQ9DhWFWW815dHPx2rANsPjZQFLoSZaPmgr8mN32ntUBJC",
  "key13": "3oCpSp83q5afWmRewpabjeGW6YHCw3zHQQEZY2A4R1DmSMmb94HuS9R1WEdfioM2dS42brDWf3YWfGteWCfsxGxB",
  "key14": "HZiDgbCoRUpEQL7oTHe7oH8XP3c1fnjQRZbLixPjxbG8aZazpL3MQNRSre7ceX2HtyF9RW8u1fXSMVD9f4vB8an",
  "key15": "2KpspynZeaHojLEPHqJHsdf5nTDRJsA3et3QjjXnrJWqKTkoW5DJ4mdTj28xiDuZy9UBv1pJRDJMxnjYwpswtHce",
  "key16": "3BtEEKkJRNoCTg2baupQzzvPMSmfBoNhUC8yA8xAaxMKhWgFCvKy2eEkHTJopz8maPMGCmv4K2JnY6Rypa6HqKK3",
  "key17": "2qcXUW1fASJe7eYdbhDS6hMGqeJTtDk8LbUevtwRmqNGXDLxJXLyBQbLP16t3GytAGL9YEvMcGC7VMaxBrxzuNV9",
  "key18": "3dM2RvhfVW8gTQx6fr3ptreLLX1pVNwmQpJyWNxzJYHeqnrDWbc9XR7xFFUmNDnK8pLMneqiLFWvNPTWQLKtgEUt",
  "key19": "2cz6Ew1VSrsMYAVvAjhzMc7V8BndcdH2pUfRjW9vwdsS6CWLrA6c1LGh6i1cs8c9NrFLV7oJh3eia1aMxTXWMJ8t",
  "key20": "5iQxfofWx3RmEewbaoFH2DD9iXdnC7tZv6z2GHKKgFo99DwB79SqfRdsUKss2KEkdeGCejk6hZgtDcsMRN9DS3sK",
  "key21": "2JfHHzzLjG1f4icCWNuwhVHCtLAc3w55MqubXxeBbwPcacUHKy8pYFMbtoAWjAMM5NZPqCiEvYCdzbxcfoaNHPiN",
  "key22": "3Uc7fQjSzYCH8fsfmXEkipHABbD5kQCisoWfSLRvESV28YNWhnJMV1ZW4TFKDuvpdoH9weR7zaQrhzsj6kmKVeif",
  "key23": "61YNtXk8S8pZ1UAeMH3bMygcEegcfVkyRdLfFvrQyHdKjDUVfHs3RHySguBfQhThHb4JhX3kh1EARafDiy2zteZJ",
  "key24": "5sLDL1EMq9CdRjJ5fVncJCQdyctXDtM5f2X5Y5fbaVR11wHSKEuUYsoJKZ9WWnqBE6z2Gm16feyyfUWGs87EKEKg",
  "key25": "3TQrcYaGDipHUuxDhZyNVPAWuNqZqACDfik9DscEBRsfBtjRUZs1G4bp3i56E9D4fd3L6r2ZwxJXwV25rYZWHMYB",
  "key26": "kxN6kjLFXsjrdtevV9tkjAVcaWmYUrsHaMD4QUF1aDwQbjx2NoMboHYVivFL8B3sD86TREzoDbH8mw3mQNPvVF2",
  "key27": "5BTXgcPNjTi1iFBkai1P2RWvW2n1LP2g6yk9xPvwENb5Qju6L62k1wHaCfnDNGtwQtmVJRMGXWVEQcMRFeYdVZPs",
  "key28": "52LkYNJjZuKHah8EGWgtAjZj2tNWbuGz3wTmwFgtpD4pVRudyXGu2pjHoaZZTmH5yy7WZ53SFwvpdPy6JCg1Xqgm",
  "key29": "5Btj8KESrNC8XsifegASFtE7HeeAasm2Msba2yFDfCkSTbXiSCfF6sUEKg8cb9pKk5BY8D4toNcLng4Hq3jhDmtZ",
  "key30": "4MJJaF8Zr6Fkpyn8sjCHnr9CDoarYLim1LyfkV7LCEoVNw2fnZQKqRpvDGStEymAC6cJa2NrgAfb9kaZMq3RnEpm",
  "key31": "5uKynUuScsiaxn34wqDLtWrkHDwaHVPf2BRnVFoJUzKJ7zKNWk5AMLogbk7dvwPkL7DkPaj3wga7PFm2FdqDQWgm",
  "key32": "PME6QRv5CT5RybTbwD72Q7mfq8BDRFG2eCQwTovtXZWF9tDkXJWDwZF1yLFkbJUwFdtJJfWZ3b6LG5j4dGHzimz",
  "key33": "2L97u3F6soGFP4WvUe5orwmTNyji9F8qcFoMVUu2mnhugPRx1pAvCTgBbnvfANGaxpmhg6iWQ5mnFmcPgduiMM5n",
  "key34": "2pwNjKf9UnctNDTkkDfGzteTWWcR69vBxtLPdvUxjP7NghVmyVJTc9r82RFBmVmGUuSHr2YnrMwsNc9HNDEqYYwx",
  "key35": "xZhwphZ7mTmeGRfpHmNPhGffVPnZ3wdNcJWSzBBWqhfxR69jgdJUaN9uLcU4PEqgN8EMpFDQUwt48Xj9V3QTdSq",
  "key36": "3AfsEx3pEAn1kgqjLGoeHF4prNdBDAb7wA2tW8XHw7Whud75cJreH1pZWZ1CAofp7rME5NnKVfG435CKoKEkYxxG",
  "key37": "J1AFATCupRuKmRwvc5K5w1HUox4Ugsah6CX5jospaj84ZYqQAqvwx6nA8hL7DTBbMCuEYH8bws4Ah95NrQPZxn9",
  "key38": "3FJxKASLxKJ1MfE51tptoL4uHTJALHiYnLFhdGBMsVVHGR13qxJBu11xLABv7fzEEh69LrfzVkhuBRQr2WEvKfNZ",
  "key39": "5TZsCpdvK7uKswT6ztL2aDpfVcZzJnVERDBbrF9zocY9nD9ikDRJyFj8NsVsTdtVfKLMe1KZWB4MGMrDrqNhbsRG",
  "key40": "2pyXoKcJZRicXvANMc7xV1NBqBivsV1WYvfpWRtzwyvYvQLmqXQ32XiCxW49tiTffdaYjWzxHeFwhpwxiq54XzDS",
  "key41": "4fMUVeFrGg41X514LCjLkQrPt6dTtDsKi4rhmJ13kFfDRKnqdQdhv3Hsy83xMoUgCaT6jaXYpM651tuVMk8VDTC7",
  "key42": "4P7kiDz164wCq7QUbiKc5a2ydUzoWYbX4yUURQ91AcWHFXnyyXcYQy7JPYEWSg6kfZQcwwrcswjbdMy5jo2QTmMV",
  "key43": "uBb1gCDJpKneszcGkP6GASZeFzb9XyURxh5mQg5sCWBuMSDWgqNsbDycZbQidwngKVEL3RHmncc2fWk7Thgryfa",
  "key44": "a4JKxKGajpgDXMX3stbTfTW4ZnvvqWBzmXix3T96KepYxcBMRGWQzvsFq8sgo64L4MnUCMfACsowG3XBeNErtWp",
  "key45": "3ArVUadUJSdJvzM5g88SY44FjbdY5DztWbYVx6LvfMq3PVYXojwwMvdxFtkfC2ebXwCcohGAzZFyfLnexAsrZza",
  "key46": "5wNrhALA1kzAoUjoGwQeCd3RxH9hZwE4VpDt6d4VgPBBNN9doexK364T8kwpHutCxmzKrh5Ks2rxGmk3sq6zcFBj",
  "key47": "64ZMupoLHQceyBLpjYPz7rSbp62MdZm4nqxGrVJkmcoKjfULHvQzGtGpccq9YikNohQTLUNobWTZHcY8YzkdzXyU",
  "key48": "4m2eXaT4rbPV63SqsQm5NqT9K4JEiRHYRNY6psBgCEHLoWceXVdx9ngohXEsCYV77GnutUs79shLFwuQoiVmcwJd"
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
