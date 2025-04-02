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
    "5d6feeoFEBKbpfhSnX6eKAvippUzbafxaEdAxu252G1pwrjS9Y5CYCMXj4VNQhFxkwZNej9rK6r4SvUc65kfhVsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j52irDx7gntXqHtxEHChwCpXuxgwzHEcW8X73DDv1S9bRTcXp1LzK96R6gEYBnCT1Ha2S8dX2jhAFaeQdnJiwv4",
  "key1": "38AyH3su93k9Z8ZpYs8UFtvqof9M1dLbAmBPag6qi5cyW2c17RR4obt5neUB6uRjDwiktrSwUmi66muQyXBiFXKZ",
  "key2": "cTHi5bbL31jLCAEYG4mLfAgsZGZGyjPxsRb7wsew7uX4MaEbogHYoLSKUay8X377ws2BSrWGd9JVqfHNfdX2N5F",
  "key3": "3gXdv5rKuyYottYwzdpnZebVs7avbRfBxj9qZE6GtrtnGNGE9m1BVpqnsKNMcdamJHGQrXvXCBnReq5VmGiNwuhX",
  "key4": "2vqFEfv2bfxCLhLmUVDW75BZJuYCjDy4zt1ZLojRj8J9vuHarTwffmqd9PngdVr3ai8htD17yBr3AMg1FcMRQKVm",
  "key5": "BrSg7j3PMTYZ3dMHazVu7LDE5ESBH4kPdtfFb1E5Sss9JemKbd5bhyb6tfCcxiaq2b7cMh2mR7ntBLTyhxA4RAy",
  "key6": "2CPqk11nQ3hK17HyZDsNYhY3vjKz6vDeGKY2j5nEc61PshyeFw8VUXjEKhwcQs2dxERHSi32iiY5VDQ29Zj14CPd",
  "key7": "hgDXnB71dk17TrgBQNADgQygY5SwF3sENsgsCBSaVANyMcxiFd5Nd7WJG5rJfACrZwdrSH9cEh8j32DYTsLrokD",
  "key8": "4zc3tQrCLgStn1PktGy2SXe3Am7NtJv23yLG8tqgnNPtaHS9V8zjqa2U1UCxstdWD8kXEu9H8zhvBeXHnEV8QMV",
  "key9": "2FH8onhQVAEAjA1q4iYFSZcrD4ZRfoZnieRXbo4fvPVkP1yst8mp35SzwpnWFg2KVc1htBXSeAhAr1Ng6znu6hnu",
  "key10": "pvk2xx2JxGtWwAW2S7dGrXdXmkHiHr23U2AibXNySYefNFHaRwPy92ZLJVQ29CLVv9BsviS3HdhsZdL8x9qfWVS",
  "key11": "3qwr8MBchxGwvMLXf1xgHioqWxxf11Jj2Y7th28SfvABD7Lo6RScu5qCXURkJJGmoPWuXKGo822xUC2JRmPgkTyV",
  "key12": "4Nm4CxK8tActn7Dd6pVkwmirtmPaN9EAKHtc6yXg12aHa94fAtUkgsdRnpmNM45DVELXoyVKf35HVXbFDMcAvX9k",
  "key13": "259SbBqM5zdjaGGjg6crCk1cXv61p7kyU82tUcvNZUiG5DTjpoZjUc86UbHESP6dbd7iQMciMXNjYeb2n1m2bBKE",
  "key14": "4Kz3crh53eZ54jMGyydXTrDS5XcErY6E6XoqDYWgoJ4mvnsgnd5m1eKWhHgQdBdtcrno7T99DF5e4d2DRNT8Bw3C",
  "key15": "5ATUPfcy77L9SHUxm4UGSJXzqefUBuzByJmga74dEYuf4Qrfk8PTerKTShk45x8a2jTUF2vyqdAsxMawCPbAmbo3",
  "key16": "h6NtFGuByErw3iDSUemFQZpAmcF6vBvK53M5iR3rfHTxrM7wYM9ccJpNEyDDKVGR5AFKV7vnNyrAw7DmyzvrFRV",
  "key17": "4Vyutcy1p8Y6NA2vw3Ruih7dS3fbN5ADWN67WhYGdSdu9jso6d6kmzYDW5hd8u1JhfaqH9pvyrJgxoZAMxE3cYiq",
  "key18": "4cNAjw6L79D4pGUTfQPf41o5ox7kAtHqdiKYq7ugUZPABnEQbDe7A8UMwyw5ngBgyWsBdAbwRYEYdeCaUEVy4zDk",
  "key19": "4fJ79zetkeWuNWDYBvC9vGMjCoGUmymU6bDQa2aqhYsxeUrZPm7HjCyouUFncfFoiGNVajgm1jnkETK4b5pGRAWj",
  "key20": "28oTUYDEfhUVfUFtjDSsUCbbH4xTZphosDebWEZ9kBx1TtRQ7E3YQKykLtDfa9ngwabDxD9PDjyXqE6CQ9urFbgc",
  "key21": "3LZgyUFyxWjJi7kYSBVRL6fLvLYx3VaEr5icWt9FkpFHeHsPMWq6JcfFNaw1WgAgRR4BnK5f9c6uUfEqezFNmKdC",
  "key22": "3tYhXUHAubCZaTqmd4pW89hn5hPoJE7JCe7FcAeTw1XzHRmmNboRavffHxtYzDhFNGjQh2BaXAEyYFkDPGNqtXf1",
  "key23": "sbGG2ebB4aQNJxLWwsaXecyVMGZdeFrWs4or2sFshSqYHaknYdi2FsRK5UKMZTphugWxaDfm8igP1kQfRbC5CgQ",
  "key24": "5h1edX9y2Yv96WQ8LmzhudMD6ww9DTsFFHdBU4gzYk9ib4EgEN7PmRFstDrUHcGE4juuiFD5rtQHMY19XjJ5KLX9",
  "key25": "4rJsmF3sLPtpiU6QhCz7wT8w7xZPWwkfy9Y6erd4sG14rm1qJdCw6DaiMnZZdiPni8eRT12ULWKZCMkUCgHfbsvR",
  "key26": "2sWiwYdmWMMGCrQ43E579xm3kkg1CE1GMvG4qYbjLhQKtDqsn6NeBAiGoj2nHspiVGTgPNUUWVWvAPdnR1K2Cp24",
  "key27": "2128Si5mpbA6PLeL2in74CwTT4v7GNUuXWHqYjzzLo9rXAXSP29peERMc2erFBoHTs4qkcYyNftKZGui1TZGCWav",
  "key28": "5arGWYq5mdXgkihSMf4xCCX9gkPc3sPg7ZeEwhBbzrh3bUaFtktcGkAAQGiaBRifm8R1enf7UWehLWMWNvB2gWaz",
  "key29": "5cEu3zCWmP2uj7tCCJx9L8v62821WXg7M5UGF5STnCwQ6xjtT4iTbJ2HGapf6sEw4Va5jvapwew3ADHCrf362PeL",
  "key30": "3zh98ZR71TNc6rYRHyaYZW5BA1Th65Z4KtyGLshCSxcMg8X6QaiN7meG1z7JLBR2Ug4rBgip3kumXnKej7eDjgfF",
  "key31": "3YMyhn5ZnRrDFtazYPn2rhPQBXGAYTigMBx6wf2bY1MY3kiagqNzNNfhXDvgsE2bb5M3vkQSGJYpzrWLDVRSdY5q",
  "key32": "35mf76YtJcnDVSak9vocEEFcDTuMjMbrMQqDbAqkDtfxCmoGC9Lk4SEfKGSaVmntWzciEa93n2TqfaipSL8aTH75",
  "key33": "UDhCvpyDLv9ugD4d6oKB2GBUx42PeaSPioBKb16Xein8NkVFnqHVDt3mtEdbGE4XUGpXetXYzJhVkZJMPAd9km2",
  "key34": "4xVPTj6zDoaujgQwGrBHvPZns4Fi54ks2XMcpkndVF5b5srVbMjUd4gmUoPjgAnVrM9TVSD5L65A4k6b4PoS6T4Z",
  "key35": "3bTku9srwhzaYjweB6mC292QQrhhMPj8fG5TDCBHbk8yXHkaWvPLQjEAhgQCVnGajxetLpizGnF3d1LCMw6Mbco7",
  "key36": "3N51ac2mFtY336rwVU1vJXPX5434PxXJS2hAkGat8UB8DTVpKbgNbhEZJ6xkx7Ar53KY2C1Uz4JWtP1GSSnkLs6D",
  "key37": "39uP3X15FSf2EZYUZjtQTiiEXBGiz7dkyheGkJFKLAXc4mHVeSw7GMCahu41LN6WVq8w3zs7SKczvJcf2m3ZmTwC",
  "key38": "4hoQEQBhpECSowV7eetGWg9hG1Vqq5yok7hF8Nd3kWqB85eSSctxVd9fUUPxSavsVVTubtrRm2PKfaFDUo5y4APW",
  "key39": "44uUaauNnHxckgBqPuDdr7TvHUV4PhnBxfJXzBTS5RPbwNqbEcTjPM8RoNpnnxwUQzwgDhqkFLU71r4gY9b3Q6Nw",
  "key40": "3CWP6oY8UcRxmvG5hCd6uJnQ5h6kTQiQ9jRMP8Kkfnxx5TXGZ2cE3kBkaJN4as494WEkxYeH9UeRkSEsB4ng59CK",
  "key41": "4JPtdFhseNfX4HxAQLVbLPSz81ZZnjmMvxpaWfZEvHv2hzaJTps6bDV6pi4jEBrnpUU5e9EyMnQomfCaiEHMXBPk",
  "key42": "2eHUNYjofmp6bpUZ9d9JCho4PuKdiKxdx19VEvrKC2Uu2REzsKp1iv521UDKVgASYvrXacc89EPLQEKGjeDLZ9vK",
  "key43": "66n19eQuwTchhDrXiVe2Dg283bzJoZ7wLmPbRVzNUzreKJ7RXYcfWvMf2h7q66nG8ybQDpgx1mWdu9PNTH4YwCw9",
  "key44": "5TfCA8Bv2zFqcAyi9vuuAwXNurnHuVt1VfM9eELDWudUjHTkHYMfg1WRWLJqVisYmxVMmwTmkRcFhCT4MHjrdKxH"
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
