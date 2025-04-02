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
    "2DrWU22hdiGUVDpsLzUNRMNRMC75qzuKt3H5RzdZrCyqQRB8zQnLNrBzLftkwL6d3TPqiqvJ8YFxXiBrwAsMW55y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PodbrxTPuorGAE8FpxTsp1BiR9u6nD9vr4HxqDnWktDp9tGqzk8NoEDWn1tB5mmaox8kZZRmqbrUxB4h41ahyAW",
  "key1": "38y1xPq8aEspDuFWXfdnbKQgDkWgEv4xsGtaNPiqcCW3eimgTdktrvS6f3Gie5RtT4LYDFrp8hJvqRKRyzUh1qqx",
  "key2": "5s8BjwHGqjAyySPN3UBPSb4SKXh49wP7J2VYJFcPPapUobezMJDHGCjmbTeB9NYpGRanMEGqbKUQCGkBV1jF6btY",
  "key3": "3W26qa67VCNWSaL6BYad6ziFb9QumwytbBZZnZwixYjj5tJiJtcNFFaziPq7Ca4gwX1JPgApPWcZLUTdh5kQEjJf",
  "key4": "4jvLKUuJ3cx81qfzD5S7BojmMYKxfQnAASahe95Ut1VQee4ewA5byPd7L6Jt8Mw1Wvv3sBtjhfr58cq3Kep6zTnR",
  "key5": "3zhp2B9fY1abKGfdjeqeBxcqyjQ3efzbutJdd4TZ7bViuUFguu28eEWdsDN7SBdS2ftW4CkPKezrVRmdgvY6pZPt",
  "key6": "YUktLqsmxQ58goo1P8Y1sb3SVpWZAhpQmzYVuHoG9pxjvec8QrJHqNYu7QkZNKQCVW5YVMw1x4GNxzZ6e91rYXP",
  "key7": "5y4GtJmNMVSPNXLcwQcWDqaMVcoE34ScYm3AKHfGvJCP1QtivHxA5xVbsQKaPATMyTfiiayPSNbSZdRBi7v1Vdku",
  "key8": "3RjKaTgiMH4rHpqtCKTr4ZxvsEwKCM2idzpfEQ3TSr2LA5VgxsdJsKwAgiQQUX1XszvPg7rs8pt5x8dMMEismM6N",
  "key9": "5GePdVMArg32AEMmuhhk1mvFAKHLqhaYmMxg8XHc3qoMMVo3aJDHU3eep1CPE1QDZTgdm5E6rsPxwUZk1RZTZKoa",
  "key10": "2c7QNPGne3gATzrbhcneuxi57Yt9YJE9Zv3xHJZ5bWwrgXfCF6EXUBpthCLvGBXi2F5TJWm94Y8TD6iavoDLQrEh",
  "key11": "jrFqqoJRxUo5jS2Z3JcYWzMJPj8dKu3ZP7HSEiJEoNZH19L2AscYfZq7wV6DaCma15XrBrpzbw4YhRYPT5ZdkA1",
  "key12": "3N5KoiQ15VRe6FK4pSUiGAFRrHRDnhDbnW8GFuyTJuYQKVGcpimGGsNk1HQq5ZmvpiyUJxErWGbmVkMFSaXr66CH",
  "key13": "7viYAbxmENw5WK9cXsPLz7cgYZcaq72DSuHsbabw7A3VHy6wNgp2MEGJgjye8GHVdQrgFJ2MnooBARtngbBfJzH",
  "key14": "3YEETGGNEA7397wDmKTq5jr9J9gbjerPhaPMciFhmHvio34GssKah21raHHjm17GTwNCBkvVeNkGdLCSTxRSLeMF",
  "key15": "5ish1LwZiQVghen3wQZpWz7X1FN4jnrQYdWHFN3H4HtkM4cRm4SetrXNWThcgguWGqU7HR1six9KMxC9B4TCYBkF",
  "key16": "2UVgKaziRFphb3mrW91AVa25ZVv9MW2VQAcpjoji3zwsRyHmowT8WGEdKbSd81UfFMJ4urdmxCncG1AoVAm1P5wk",
  "key17": "3a7bmamCbYkNUg3a7v8JuGPWVNbbk3fZA3pxK9D1kpgDwaVUAn9FLFGMXAk2xPoVavjZHCE6yvL11z4AEMxXcUf6",
  "key18": "4tPxERnQqUy6C9nWwDKRJZaGsocswPDpRKPccTDj8JiQMoLCUHtMq3AEVJvZ76ECNnmcHNVMs8ZHciNxB2tCWytt",
  "key19": "4rcmtMgxA85ckMrPRLiVkJQPHuisT7q2uiY3pVybMv8NnqkRfR8dmDsvzsx6u1Q8DvpjzZozhrJ7Fk82YUpdkBxU",
  "key20": "3H61ag3VTwgScwBPxJmRJuQTkAc6JrzCgL4mf4tuedfShpr9dgRg5rZdcLu8bTDwomFBM7V6EdTCpPb6M2VSvLsq",
  "key21": "26T3WRJWdj8d796xcHZr7tsByk8HJaB7KeYuRpZPfyrdMtLnwFCMPjJGSfWDrG2FKZmmK4vFKcT65rU6fUep1gUt",
  "key22": "2rujDtb5mqmh3YMMN8QNkvHhNz3W3Dvd86Y6cUCizxpjaNY6TfprD4PXo6Ayyc2DrH7PAu3q3WhhGRvcGyjfnY1B",
  "key23": "4bFzpitCcjoCarLJd2BSZrujTryEvZcXR1uzxV6eh7E2n3ziWzJee2wMN1Rsb9pycjHr7hk8ubnSKWFXzostaWmS",
  "key24": "e5fNB8t5cKmJJPsWatFyEvFmRoUKDcvm7NEBPendUR8qXZusKrJXeqdK6WiCbFDX4dmN5yttv12qBZwjSVJTwwK",
  "key25": "2nCpy8A746DMMMj6KJxnbZsdQfcKiHukSp8FRuHjrnHn98DEXDEaHHGfR3C1Q9N7RF9YbiCHRRGvEMvnFTHssUed",
  "key26": "267AxrJdphzS3fpzU19FNGmnykCmnWKAvmSEQymxLeoqAZmKxgeSKeostMKL6zqcCRjus2tsZf14U5qouetpKmUQ",
  "key27": "2ZRpq23YNDFVKXDSrxQUTKSNzZ2J4UyxskJqrjnvpStnya1VnCpXrpicGYZu1XR6YdQLvnRZ3MvRD8eLwwWCFyQb",
  "key28": "5L46zEQj8wsUuD4aSdFPAPsoQhC9ZREw3HbmtPWyCgHtHczBLor5Pc7aK4xF4KchoX7bwfCQrHJBnCiNHzvc99pw",
  "key29": "2n6YUD2K7Xvfq6ygqpwg5XXUtBTDubEJYEJizrro6KvHPATL4SmYidyCTRxVnFXyrDtfiKba6SyKzu7fnj1xUNgT",
  "key30": "5aWj6wRAqCV7Vz6iySJ1yGUUK1gP1ohqBVTiwVXqXEyTF6Two1JPrFk47ZCNAxAxnW74s6AukmDMnAintketV7Xn",
  "key31": "Y6z1bczdiA61NU9BZnivAHEJ3wFWa3Hji4YQ66KUAKQen9mqtKF48tvHacqynrvg9YFJdMiFSnkm6d6Ww7orok6",
  "key32": "2t9sjpT2t4M5st1es3QhBMRhbgvMTfCTS7gmhnUaDeUGNJUNnfdFboW8Uj64j5HkAVETzXB1AAgyHYeiBQFLcGhE",
  "key33": "3kAMD5ArXEPr17wDZ7QTyzjfQnNki1yyHJoUwM1MCUo19E7EtwRUb5Jxx2fwtvEuyjsocvquo7gMUY1Qq8dMfjBM",
  "key34": "5YN9dmNbKsujxus1AqoQCeerFQGzc7AejAXV6Uwg91Z1NXwiEuLaHd66fbV4tDbstT8B2piNKw3cZRAyRg5Hs1cf",
  "key35": "3mh7CVZJ2Ujg9Gjb6PQawxuMqtTpncddeGT8KNkyAEr1znWtYyZ41oqDnpbEimA1hVJ6oab898BnBztgAftm6kqw",
  "key36": "45VSk2KTH1JawzVwvu7mM8o1dZ4YSi4geYEiyjH74gJMGYiZ5dELo2m3vRaThGUpdrxfFn94YSmNcMU9Rzf5vhbZ",
  "key37": "2d4qZzMjn4czUhazfcyKP7iFJZquJXBUTAboUwNabt4W4xhHAEzQ2M4JvGidMFQduvC3fivt7m7tVyY16aWxFBvF",
  "key38": "5YE8uadeBVTZXuJowrQ9XDha9w9edS11Q8xp7cyJk1Bitqgf7t4k54tjJsqNYSrxuaNXGHBvv2gniSTAhEZBWWTK",
  "key39": "qornVrYnvCbHLBKN6fdCryqFcihuiTZa8DQP6kyVvLtciFXHLQbg4BftR6ucvM8zz9Dt5VfiZHaDttq35eKeHjG",
  "key40": "43vVmKh6tXYnLBBZXV9GV6jFxoUKGDSktV4wAhtH9GySX4DYNuQM2jkZunaGZAKgwXPUFJDEPxeHGptssimx27Dv",
  "key41": "2ELc2H9vETFMFRtr4sJNLwgq3tcrpKj4P3xhE6gFpdu2PjgyaBQDctE8yGNkgG145Y2AkYiAhp3DjNoWqL3MVXPw",
  "key42": "3GFjrQGmd4714rUe5vrqSZjKW13J7Mygrr2XDXPongskDpzyXugBLJDCJcm7tL2sCbjg92wGoPmhReucyHbgqVwM",
  "key43": "3SEnz3vqLsN592GRYTMLTUH1aTk2cHFriUMm1upoCQt3th4BgCQBURLfDGLJ8MjFhcRuft7YkA79D2xi3riaHzdo",
  "key44": "4YjTKWANFfkQ1n1zeCREbiWhDNi33zMWYxriNQKaPqdHxd1RRkTGEeyq9zPsWLYukGDM7hzJTurSxGzAbmKGzWHJ",
  "key45": "CexxiEGARFueXicaFyc6PSziACbs1SNimojZ1t4jxVBTaNKJkfCroP1LCYdER2pjkiMEJ11ba2XvDiaQ6HJwek8",
  "key46": "5pNAgz9UEsSH3GQFzNgBV16wenoBrKPdferbUzjtV7R4zS5KhM3PUFs4tVDBxGGwwMk4w75j2k3mxoKNu8wcpiT",
  "key47": "5XZmDvMFog6DiYNUAj9qHtQvwAEbmY3L6Ffx6L3BU3pCuz5FVqGJw2kVzFCXk3xYxtbghBXCzR3VKXFdD1HFUBzM"
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
