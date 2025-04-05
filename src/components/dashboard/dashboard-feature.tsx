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
    "4dNn1f6oeyGghASvUbgPzZ1pA5MceCoQZxJRR5RTLp8KLJ9gyAfThn9xcPCmdCzDKtb2Lvj7X8HFNy8dzLiMMKkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qL5pchDmcNcLtAr9AdetdtfsnqYqgULdW6NeKzH24eDbHq7FgZyoGrkjxCUQfjw6zjgcrAiPdZti6pt9u7S9xSF",
  "key1": "33UyZH92hJVzFtdTYbPLbUp1HvaFXfSYPG2UWYB5Sjj52zdM6Hm9Vo47BohTfghMKUJXzzc2JzVeFhNRoiLrYWrX",
  "key2": "3KTJgBrrBzYLZdupEwgR4R5SXxjGjY2uSXQWhp8Hq6xeDK3h8iWw3gneGFmTEVeJw5BDFnk1fAU57b8mCF34nnbv",
  "key3": "4pYtfeALUF6kc4Phpfi9rhbYU7iEJwLfFgxgVkoqzM4vrbTfvp44aXjr5m7Xa3gEn3Er53bzzpiVhuJLAefZtSpt",
  "key4": "5mt4kS8zgnhGt2kZCSEc9JsGbzXUnTyLNtnBgVqLdjiWLqbjGcneTKsnv84PqqoJxWQNU9AQxSdmwQ6LCLw5iAzp",
  "key5": "5uV7gTpVLFUBJY4xSsm3LJRsBmPiPiYufei8G7ebaSZvTuWJY5S15ZdnEvXBAekyXZ9WL7s6V3VsnJPHpJPGyWuk",
  "key6": "3NEsHfkJYyvqhUobKW4tvgMEJFqZVA7QAntAxFN7Ut7mc3v5sgZJCb2sH2zJCqoeb4SiiThegx9NWe6ARLRKUfXV",
  "key7": "3mahzaBh5hnRkN72oZFkxkmqnDr9Bw7CPKcAtKptyo7nZu1omTcJy4s5N3j9Zv3SfT6qGKSRUzkmLZscTUXzCf56",
  "key8": "2YbmyrNXFHfCZ9L1o5KfZmAdpxc6SJ9YU4T1SNZ8icezpK6ir2pu5XDFdQPKpuVCtxsF3Axo53tu7fNz5b6ezLth",
  "key9": "5biCjvKjUDTa9PWvKXnuaYvaCitEuR4BZSswroNrwVT3kb6LjrU7w96U3m56BP97u6k392kuotUgjC6B57EEsnRC",
  "key10": "DfNGVYbAb8gUwr196SYvcbnAzdZRckHD8ocDyFLpADUVrzrpCWDVHupXJy1HsHXUrBpDQkyP5AobSuzEUKeMqBQ",
  "key11": "4ZbVMNftNVs62TH52TVut8v2upFKF38dsR3M5YcHBvFNQ1KSFcW7gJ6sBzoYtSFRr2DB6WmrJHQDo7oPg1MHTfcP",
  "key12": "3pyNVG2yd5zEoqWAbcB6KSyX7qKfgzPH2G3qEuoqaEeYdVCXLGXUjD9wxtB5Hopmrtn2TyE94dNCVqwM6QNfqyCG",
  "key13": "XFjoR9Udu6oty5LtAMCZdfzNEqVLKLuqYbk7J9dbrK4qanR3fsY4rUCa74L65bi5UYDmSgCobmviWgjZYvot9dK",
  "key14": "2ztp3BbEiRoNZfsXdD37sbYxXkLKZduKsbmrqmhvqj2Eq32u6nonts4kunmTioHTw6359frnfuRWeF4YXDfhRcB7",
  "key15": "4dV5DQj3bnivPku6m9hrkwdzgLxyE4Kgf24kAhdsYzc4K54n7Hy3RvuLMas6cirHbn5bSeefZht6mEV7zAD7VQmp",
  "key16": "24ZbbFaoF5m5HyyfNeTY3gsWjqnY1Y8xkRPBRekyaT75mXuzVhZwE7y2enuqB2eXbhFJDkjHYqjDAsHGY2WHrYs1",
  "key17": "1Z7qGXAEDfEiLkWb2pkvAS6g4kYVThre18qoyznukXmk8qw8p8BmGuipfaArGeK7RpShNP2N4dniPaEPyRuZM2X",
  "key18": "4Y61arb59oWpo12zy4tSbe7fqbZPMXtv1hV1Zzx6GZXeUTRZvw2wMrjWEM1f7zjoUcdaFXS9BKroVnkRQpGXUex6",
  "key19": "JkDmtyFFCd11aZowTtfcHUsSawGdjaqqXjYdv2oqLonaJWBKTk62HmL3wzRsrQAk51yyhkdcqxPPxNF5m7xH8Ct",
  "key20": "5FBmNHLJkNo2SSRo4yZTWKZ1ZAMaSiqhEFhwYwud8aoJMo7Y3BMBiQKKPCpxFKfSJiEhWKDWJGL3BY2gMqmCTTPf",
  "key21": "4RVQNe6pZkiPGta5bmakPCPiHzBYqDSQpZzqV9z4Ue9GhYAodGAKt4pHMmY5Sy3284aWAGjAqDEuWoiZR7GDnKVi",
  "key22": "3S2CoQvP2RK3MhPHCAFk9AZ7fnjE25jxn5GagZu9khVkoTjU3GP615CAFDFZGGBka4kavxoHLsqbrZHD4JfZ47bs",
  "key23": "27ggmCAbGBALmGaewdQjZBZQehDCFWH5sM8t7uJ2Trnf7vogWdSQJE7kXdq3m7ty42M5yktx1cSdapYS2wKg4ZB1",
  "key24": "2sa7mMCAJyU4APrM97HsvozxHaogyDanAZqiiqM5s3UJRMMTXJzTbWxEy9ohxwYzDRZq7HLcGqN7fhp3dyAzDiVk",
  "key25": "3qkPxX9yufpGxwbLVGZkiuDmSXx56jQF4fkvmtkcfnibvohoKVbJSMDNUT63gZ4pGfzAHumakgnhcjq5XszWGjj",
  "key26": "4X3rJ4SfbNJ518ZiTFqBNEyWKvRzd9sAEnr21PKt2sWS7EuE6sZE6tKtguvy1E8k2gtiQffk1dSXU14PtVu2Nbry",
  "key27": "51NZbrxpDWJ6QsCB4zuskGmV4DPswi3ZzaLpbp4ux2gQABZb4i2ohMMGvuKYcSDBQn1A889HBzrLwsnnvt8BULda",
  "key28": "5Q51HYBJETMqKdcPmYqzpzEdMQfLC1vv4Fw3cRY37tWjimPngRfpRXwjdtzDPcVjx2fBDPjnnf7saZ58mAqERu3H",
  "key29": "3NLHNkAJEAB1ZVCdhAAYY3SYdJ1FnHbehScLV5Sw8uWETkGM1ws3Ne7sarrTg8AsCbzvXpxVdAtCPSw6JSRrKmBd",
  "key30": "62Gi9by934T9hoKtnP3iAbznEH1VC26WqzUMYEna4PD7J422pohNfRuiCho1Z5MGUJicR4bPooQmCX9czX24Togv",
  "key31": "sw1yGxG1y95zpz2QAz4FVzbjJMGpFfZp8eij7FKQe1YTXwP2bAtGVvHo1svvZBsasxS5fF52wasM7V8QFzqnJxg",
  "key32": "LpnnSyNfyUs9xezk41w7uioAdnQqmWRPY7oPNwh8MMygQ48Up9dSxwbDuhuJjRzvwGaUW8d8MVzsBUcRQU2PGfJ",
  "key33": "2SY8GpTMeXPVX2jcDNivG5QF8bqzBSZh8b6Ec3gk7w6rJ5MbqvJ4K1Fi8WtReAYbcTssVLJoAdLQkcjFVN9NbgQD",
  "key34": "3ejXUxfexmhFWTHjywv3uPiFXmE8KYSsMRZjBMRPQ6qkts257M3Q9muLgYNRwtEZc89iMdm46tanVE4VLDVtns6m",
  "key35": "4rckzZcLBbmi11S6MqxV6j2rfMwv38Ce6hNzfZENPbsghJ4cPNyAyzETQDyutLL2VtsUbdzYxfo8Qs157rzs1fWa",
  "key36": "536fbbXg1G6a4oVwrPcQak1eD7wHwMRT1GmA17QHyUNtxvjYS5kPeDE69EiuBoPKczf1AxFP1Gj5n9VtUjwVLRrg",
  "key37": "338SreDnC4cU1Z2pdeHem1LAFNcbYzYeBcEGVeVMgPKmMq3Zcg88WHp29wQre9Gau51JTphYNKSuS863kFaeWRYu",
  "key38": "3exVAsFCCemGunAnZVnEi7na8Z7eCL93X8aid4HNKYTKdJAP88LEQFwqJggaJ2XYSRx6gi7DGudCqauHSQ9rAkNZ",
  "key39": "2xesJSpv2bHHbKb155jWVN7QUwDW2p99YSVbUTZKfEwmWrEWqLzUx3yrQ7PezDdD7hQDBJHtzU5DJhMZ83CWMydU",
  "key40": "2isnSwabzQSS3BALzacHhLK7YT69suqJ3jmKdA7uhuHnBviKkhR8BioEBp2Rin3CzbSGLqvG91MFnjSTjGZm5E1m",
  "key41": "37aAaCutiQMmaRfwSEGSq35ZpNJsGA4Rt7QSjWwcd9EoGuUH7sxPV8FgTkN3kCddbnGnsLXgRQbmx9mExaV38bMX",
  "key42": "3j93HUjBtMUrFr7SvoknMekrvBwzBq88cHhuVkdGXMe5EWu7gpJsYxRqZzL1nsXkKN5Hci9rSeL1ErZfabg1V6ff"
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
