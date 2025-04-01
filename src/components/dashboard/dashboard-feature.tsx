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
    "5CEFuF65ep3bTqoR7FEQEr6JvabTuisaJAchJ3XRCEu2YAxWdAi3B5Dbsvs1T964WhFe3Dpf1Rior6WaX4YihNpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hG4YuQXyMrdAiGuwPCWpLFYszrYbZ3kMQPkXaVB4eP1NnfCLhyBoXLSQW3WjCtkeB9brtjzb5U5Faiqd9QJqVKo",
  "key1": "4cMGC8Yvq52q79CQWgXvJZhFRNuCTeFHEoWVS12fKzU9UdGsKfFKgJNfoj6oAQYyAYztrwv53kxHEj4SUteTQwrx",
  "key2": "5vkSJQfoVh2XavT84PopbUfVDFGyDgcjH5gAowxWCXuZLx7ktCZ7Mer8EvcyLPPzRjjQdfLokN9qpE4WPEchfDrB",
  "key3": "65HsrXCgTvL5NNPuZCVM22xSBcgCJGqG8qzDYBwFwGCrAi71AegrV7Vgfjoe2bfgZiwqkmhwPg7Jmh8wvHPCHYks",
  "key4": "5WYe3Bn2kjiWZGgDYLVwPPSvEjB4YBeYG9PNExFU9iV4WUYdWR31pCwFkFpJiRfDHQpafw7TCKYqx7Ro13cDMCst",
  "key5": "4Lpz77dFMSvwwp2EZ1fbf3tGNPVspSWLizcL4Ws89YnJ3tCUoSeQZ6C8Co5YeFMxYdwfXZqoF4s5ou6P8QTA4vZt",
  "key6": "5WpJ68F1T8YTfEYNXhnAXM25TcEnq143rdLmAhZGs1NEY4JL4G9Z6bAuX3U9vVVZDtTeD3iuyfppKskuTX2ZHefu",
  "key7": "3vzmbpFPNtDdCfkDNLG24oeQd5EwoA5LL2BJpPF57yySXJcHjticwppqvogXmqo4KxAuoLLfsozywm2ypwG3RV14",
  "key8": "31hYToAxmvQ1AbhZuEpueb81CEEoAtL9sq9xWPBedSjGVakLEM4MwnGGnDbdQNpUX5JATy4zdkZr5MLjvqDBChV2",
  "key9": "4ByKJULWqQ1tS3J11fahywitgFTCpWnZZS8jGpV2c2S2fipjybWJA8EBF81qxrFfNM1mqJiNwWjAHmD58Rbfxek",
  "key10": "2imgYCUGRqmk8oQBhmM6MpjqD1e8VhjhhXAVD8fJx5t5oe7fghJsjMAS69yCWu82KAWYiDkUB8XjzAyyVEmBCpfW",
  "key11": "5BNipvik44zeywwKQue8NXfrZN2np1q29dy8MjTnRzcBjDi75EXcHE4djgw6HV7nEjidzCHMaopoXkjFddHdMmSj",
  "key12": "2AFPDqn2QjkeSUW6syuaSMcCjQh32RiNZ6St7q3v1EaR8JR28tUumBWtCnmGCq4HndX6wx4NsBgsiXgbzVfo3JXx",
  "key13": "3DtJYqSELwDcw6GsN42zVd6xeUQ2YqEF1Giqak4fYx5DdDs69Aeor6eQCZybtUNGtkeL7QNy8yK2FjfVv3ETcMKe",
  "key14": "4w461oX5mhPRFd73AfefRyrP2SxeD5neB6aqq5nZG5z4KJ4hW3Nn2vowmS5nVYu2gShUd7mBJRwpGaSf8MtQRY12",
  "key15": "4nU8ffyi8RMNzjRQtiHxm12tPYyBFHHRg1s7G9YyxiZSyQrkCu4fLFSSYPG6wsQpgPk8BWT6yjfUUcZQ5jLURwk2",
  "key16": "64u621PiVViMmBGWuhFgga4FNyHzxuyMSvcU6R5BTFzMxMRVkqdQxSKU9BHaXdNwBWKWyHfJroXMhxBtMWDEpVsm",
  "key17": "54TSXPDphgz7QScC9z5Spx9xC3roWJQ3hmnBR33abLErKG4FE9VYLk2JGKz5d8JDHFoRUDgapn27k3ciXVCuSZ4i",
  "key18": "3WKBrEXGnYJKHeLHsvF4amskynunAAXXg9mv9MkZp4dSZLqnKTQHxjVjUiJptPfkR4zC3MmpxHgGS7nM9HfhAEv1",
  "key19": "3w7eppy5anH4xWHbXHw3M6RSV5NVETcPRgPoiX29JqphGaknfUbeW4tJScihfSBMJ36Xgrgcf49xd2Hcf7YKDz18",
  "key20": "X5NBZESX29BJWRYaV38Lkyk7Cc3c9pYBKDj8W7UBdCyCCwDwENxrMJfpHxpEbivpv7gtcZm6q4ByzDLPbVrdLqt",
  "key21": "pPTNGsGwViK9YU4Z8gr7z8g3hco4geaDtmkxRPsjb5Da2cuNtx2kHUzZahcMY49CkdBptVEABGyhj36iPzrQo7u",
  "key22": "2H2pjuMe5s6YBXi2e7M4fvbPWpWwkGbYN7kvP8E1RyGW7d1KYjheCvbraJZQJmEvguAXAVJF1BZimQqbu1ig79Q6",
  "key23": "63SJweYDA7SiW9dyrbAxymdkhV6gX9CTw2YkkSXEAkTio7mgVQbKwnQNWerxYBy4AJAvjhDjTJ4gL1XZwz24PbQL",
  "key24": "5yRxHJMauFpaddsz4ux7YzbKqHgTHkhdMk8dZJshTcFPADbDEuPecFXrg6xyC6jT8xzNu5iDBkoJHR8f4JchcTwS",
  "key25": "4Ffr5yett8mLuNPPCJm96rn2PfTgp7tjdCJniMn9Qbvrna8P7vT1CXh6yYNw2AF2TfyUKgijG58X5t99A3rasgVF",
  "key26": "4dUFzAXyGNWD4pEiovab4JHShGqpo4xVkLkZHLNNLbaGZ83tHinBskCKHDiT2MMFQzXk6SwsKU2nZiZewCDs9czw",
  "key27": "43pVWu7k1W9RkgDfeAVKNH6LZBaCjN6oC9DGVW1zCVYbewqcZZd8gsyFmt2bKpnAX3soHtUognfZHo6uH9gk45Ag",
  "key28": "oXphYg9qQ7NVfzV68YHhV3XanjHJw1mmGTt9W3dfi9cRGVJCmcXdaeeUp6tuLe1oKq3M35kAvHfGFSm11g5zNuj",
  "key29": "3hpFtMJbMYUX77atHTeNGB6Y8sZuFVrdb9XRByFAyKTDc1fvrhj5BuFPMW3yut3HB5mfqtDsvjQeoVQ9ef66zAfa",
  "key30": "L4VeG6Ee9cutTCZvBtFaqL4ZXP8ddHVg5wPHpUcjZekJDpMVcpRwavfei8Cu6x6tHx7HzvKTRm86oZeqdqNcgzC",
  "key31": "66hy2sN2PMeUWziBBDKfvMvr7Dkq9o1ivZtgmu5UZEsXN4R5thszkLbztKNFKJQvwn2tNnh22LVx8YmkBnbmnzaw",
  "key32": "BPbyyRyCZSwtQoC2SCvjNKaGPJUtYZJB4ouur4vdkmfoeoqNYSbUU7HXPThdaHFgbGiqL5UDXUzKadBK2ocooHx",
  "key33": "2E52x68Ums5xXBDKYnYqfTMFroxuDYJUBw5TTzXaKwA22Ewd5LnoVzug1JpEw6d5gcrh8BDC91nW2RT2PXL9Tb6R",
  "key34": "2Q7KVteMWFNBGVjpyZtQgLhrsai51ZGoUQC2JBMkUjmQPt9C62P1UHxtzkPiQic8HmD2UJdfRpVrHySMd3SZG9w3",
  "key35": "rKADSTVQroLaGQPc11uRBBSHvav93P2mjNGZDLRDiPgp9t7rgF8rRiH8MLLXbSRkLZLB8jS2yikNzCCWr9seBj8",
  "key36": "5b4GfW2dNeyt16g44KnZSPt7wRgdJbVuhc3ZrQgTkqT2YCaxsLoRLDrxnpfHrEPVS5UwmTLf8FXQfgxsXMTcXFwB",
  "key37": "61c7UUJdHZt8drYp1iq2YKxvQumvMZqpWAk22c81brztbLP6yii2tHDXhYhPYSN1vqfKRtKU9UhP9bhYBekKWtjm",
  "key38": "37xvqShZiAuEeb8Gg99BEmxCFA4LttzzuAnsgPgUWDvoebPJaggufb7dmdjdLuGkBqpasLBctUPF5KzEhiX3zXoM",
  "key39": "65vmXfMJK2uodDuJtG1VqqmFDBAUyBwsp79AJxsUpSztn85GTVZWSPC2AbGS4y4SRSnKkqvhwUohTgdHZeQp1ARK",
  "key40": "3W4oNPar7aU3eGVpurfA4pR5JsavtyZvf6kakVHebqJDE4GPzcqqQERxqQG4RRHxSKqmFqr1PE1kq65scYz8QZeV",
  "key41": "2HQ5XLb7q2BAK4hr5KZyreQACc4bAtMabVEdMZq6Cwd971AresZDK62b5DsXLvFUCrpW1hDe6CwpcPqUQtP5ZAt6"
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
