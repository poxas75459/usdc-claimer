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
    "3gsBBC5evMQgcRwiaV13U4t9kZvoqg2GBVWG2cYGwUtsoMYCc1TU1Ygy7VBe4dVpEGrt67tfxwqjCZwJ8iGMGeG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iuzzXs8nxYuse36NjrFqEhYFsxX8o8uvWUgJVPo1cwMv3Y1dphjwby3NT1NNqcRiXBabjAnhd1wP4FVLToEQbme",
  "key1": "24cqK36vmmPtgB1tjPnewi2f16h8TWiJAc3dgWraapv7wVg6o6ZCsXomyszgpnRUpT9AgbXbrGSKRMRAuE8Qn9w7",
  "key2": "2pJFUWEamzC9dt6tKvCjptg34uQFoXmwk5HUzvBagHoj1QUtmJX3gXBSaKH2tUg6jNFaNxaj2csYb5wq1UhuMg3n",
  "key3": "3uGasFbr17WrxxJVJLjBNx9Tdh3v3Kxkwzs1Vo8MxoEZDGBPTmyzsfsC5JDFsZKKGpLYHEkFo4nxWPGUaUfhNmqd",
  "key4": "3tLKRB1awvcRXa43tMnaMdWnHdG5YgnfwiJwUZB9MuBMQsyopHEcFb4sjkYJJbefLWbxtK5XALKUxEtXAYSKA6dm",
  "key5": "4mDs6VvfMRrrsfpM2YNVx345cThwoxovsm6qypvyVAeTgdQ1E3LD6qBwQUf6aGMtqNnevKoD8EUFjzJpc35geXy2",
  "key6": "4AnnoXzQjT7okohH7rSHHysXrAPzhhCAYf9DbPqdqyGcWmAjyzX1DFr4gs7TJ1yxYfgrXUAGmJSudjiGKixEWYps",
  "key7": "2DdUdcxesXwcMENdoSqDoueYgeZEn6Q3R6SqZoFVkuocmDy5posHs6TB1uczq2bkomj5DdZMrirwnvkTipoBJ4Cm",
  "key8": "5QGPov3QWmbp8Zf9ETj2wDYNK8QaZhTPYSU6QKzfn1EBH3Sf8Wdu9gjeEX5myLfBN1VqaoCKh9FmfwvvER6NMSBn",
  "key9": "2Y321a7SReQ7TZLr9xAAk5ZVvAg57vnEFS68CJsmaRHyq4BFdQKGdmagqnn9ju3xSbehdPE2pEL9sMMQfZVsDZaF",
  "key10": "44QZHZJyw4uJ7Z2h4deSuoSJ9p4tHCm4r9rTMREtCALoh5g15zMwRzZK6zAny5VR523V71cpEtbe8y6q75uHQXZb",
  "key11": "NFXUapbM26LU4FUFpMRs4WTMBbbJnwqgaZwnoyXhHYgDCJPFqhykyQCWtrF7qPHh4DNfeKMAZcZZ6SDpD42UhKG",
  "key12": "21xNC3BfZkhZLgWWTZPSfGMcFYJyR7deiFCU869bRKjP77rGTUQvjQ3zhBDqkWrvv1FxDo4urSTxBtmyMAh5qh9Z",
  "key13": "R5tjH24wNiTUtCLPN4FRVqREPJqjqCEbLFUNUZ6eTDkTgdtVuiSgRn5sGDuu2AqzSdMMKAqXcXvjjjWD1248JBj",
  "key14": "TYFkWxKyiuhcRcwYbahsFe5mZbCvsgbyMRA7ffmRRp2VLvQijE4oHEpLAUV7B5tT3gPGFKjSZnBhiNxtVQsDhT6",
  "key15": "3HYMiEtqzg1QFn6ugKuLREYMq74M1Apvzo4HZ3wEXMyGfk1itmsku8DyAbvKoXcNJtMbS8MWvFiobhNxaRSmfyVi",
  "key16": "2rMQneKFrGiyYn2Zv4jGBkqa6Wc1uX8hgp92jaAtPWUoqwgj6tbc2PasGUHsCUSmNXpBhb9g4dm9TgwLrqoM5589",
  "key17": "qS6XDTHYQMzsR7zSKPK8wMBwQZT1voXhY6qTWYgym5hpV9mZ2W15t6AjessahoT2WPsQZAW7fABiHLqi6vqHdGi",
  "key18": "3UcFBckJCHYgRvMm7U8NYdFTXj82xsGCLzs8H5Ya9ZoofXqZup5wsrJmQVumcBbdui7Yu6Dw7J58pqaqYTjqWQ7Z",
  "key19": "UpYJiVdPNWUytzSoR7hQasqLbsF9V2T4awFsiG5XbsDRSa1cEskTRJbPBXHhateQsBStWg9EXFnDEQmMdShJCQm",
  "key20": "44o9J8eZJDxuS735qmoB4zNCAUNA6So4FB9ifcsre6i1jtjsfyLyHjU11YyoiqY6Xy3XW1zyr93r95pU7qXnnF2b",
  "key21": "3fGqrNzc87Dzx8bdJVRNqEiRACo3jaswupSqDLgB5tj2Q2WLu67WNoUA9ApxTPhJHLz5enM1isMB92uRBn5o7xNg",
  "key22": "5RAK1WjGDwfeNZpRt2UaYWksLVSqBCuFDRtthZxtGwjTWq6uiRcmCdhwE65yK9rpv1LFaeuL8pNcHxsib2VAPCn1",
  "key23": "2eabYWz7NSz3uVz64one4kCBzGSJZ845ZC9HVVpYD3RxmnCWTLCdM9Drok4V4f21PquPAcPS4sunv3Efvb3fpA6p",
  "key24": "34ztFSq4Yg1dhrfBfwzJvLrpuktH11dvxbo9EZU3ykBQcr26EEEF73y9sPC9VZZu5rfYVP7GV4jLbAspksntunYS",
  "key25": "314W6zgvBEeah8geQWZEQwQNbKhqTz71NY8xHsD2jnPNuuQ5tKmtg6neiL4apwLP4ttNeYZdDts4nhaBoGJKDJEm",
  "key26": "38TtwNuH6afjTSCARj8mYaspbFE74hJsXvg6UN2pmuJhy17KRhB4LiT1fM1fWfonxwEZoCu1b8jyfYqPzqy75ZkC",
  "key27": "BvPdKnQPCs8WeWkW5qAbDGM26PYufEBedDy92DRMt9iqHr62qkQ75Esbo3KNJaoi6eyqMvCZzsWzxcgs6VFcTbr",
  "key28": "5f3mh7VZXV6KU8q8rLMmm9hhEYxMkTVhh9xDXF3xq5XCdLow7f4YV46YAhr7BmvoJamQLV4S9EdVkLNEC1gf63Tk",
  "key29": "4d2Q2ffZjmP46TmvSXoWddVxMCFnVrU733uBikTjo6M1n8BnXvD1g6QQpqhYeipMW21k5UMquyb9JcmwHx6AS3uW",
  "key30": "2sixgs51UsYcS9taZwAmr23WvAyupmdxmKjtwNgkUmDa1ko3giSm5tArjpBugE4tjfQJLDp9kyRRD6QM6X1fe3Rr",
  "key31": "3hoDqwCgSQkwNpvJF2T4usPNqGaiJ8MnasEEFB8s4KJaRXv6XFx2yrPzkVZAispJugPv8zMBDEnkjdfkmRy6bTi4",
  "key32": "Awi4ZETDLDnevpKW57iaL7te1sMdLXTUqVyAAaUa9zimnNxQmayb6FNCpyZtDJPFNh3GfejKWFroDm4R2scr9hP",
  "key33": "3a77vRLgYdrN2NVo4V4fjEC9ASmCwcnfUoEUz3j1mstEaciPanP1AFxPk7UXhvyP71ZPtkFCeShYk6XVpkfJrRwU",
  "key34": "svTYKrz9z98LHVAgMcyetXsKzvSp3GbaNvX7Jna9h7KVSmrpgrFWSHRgDTEzpH7eZ2uDe6h2Hg3CNoEo5ShLG6y",
  "key35": "67JRhT16tGpNAdJgppF9bUPw91Y1cTMzF1n3UZ1QyCEeVfAKVWBiGCAounNpTKsvpwJsBceFwoWL4pBxEj3ykC5i",
  "key36": "hGhGDWnehKQ6bRdz6eV8Fv3hpFbL3CjiBc2esvet78vxRoTnsVvNzmGTxm96Fe2i5dPRfc1y7iu2Qc1UbufeAJM",
  "key37": "49vuEkjPasaZgejW5gGtXsqdPHwsr4WFMcBNoYVYmzsocCs2SbyG7WPEekqHufsmRX3P8wYfT2E9uyFh4sjqRwNY",
  "key38": "3vQ1qhuAsgfuuvmzW7GBAgBkYbECSdXUZebZUEhZaAhYfssG42Qv71W11ZVRGAqXL3aSqH1i2bQQPM3JHLA1Vxvb",
  "key39": "3VTufrqqD4JVmFBHe1ijboWg4DhtWsKKT31D4fSvJwpq7v83mgWHxras2WeK5BJ79X3UVjhpe3XJzSdW17BesFVX",
  "key40": "5x24iFr9kcwmXQLxSGoo6nH8KnPWVSqGJNxfzoVut4LWdUDBZmoVHJDy8J81WDVMqFCr7Kf5ggr5zMt67h1kxZJT",
  "key41": "32C9ubsbg6VxkYJEGniMTwFjKeFVd651BhRPg934DSFoSUCf5pegxENKMGbimv37TjvkWBd2v4dG6rfdJQZjEzRq",
  "key42": "25nXNBehTAXkGWzLTj8CPn5u2aKyhtU6ovnt5BzHTw4BPtU36ttWAZdcnBBvKX5oR7BVaKW8zgcLcqx3JrgwJt8G",
  "key43": "3UtM9g6eVW9wiXxx4drr32S8zh5XHYCiJTx57CP6NjJZaYTL16pXhzqLrS5nxkukK5KY5tenQHxTLb3VDBfMAFAX",
  "key44": "4YtstuqRDq2wNwUiHBTN81bSkNJEj4ydCtmrDtzfCxjH4nrPCPRVXFJvMX1Rpt2opW2Hkpskm2u8ZgwMpqfZkTN6"
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
