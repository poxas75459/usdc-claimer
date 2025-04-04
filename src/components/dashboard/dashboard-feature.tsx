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
    "BDvqBgQck53TUAswYeHF7StQXtE3PvqP9ymLwSdHsWZj9nQ84LnxgdscwoTsctmtfDicQfZoiyKmfkLmpbe6MPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XUc6LoW9iWdrPWzs6hgFGjk5FGX4ZUWDkuN6KozHERme1wHeEUhRuatjArRoBdjU1KwQMXY6JqebUd1ciFRB5Qn",
  "key1": "5WA7bydK4P2GYQgDBQVkvuQSm7qVGs1dAQk3zJH39LmeHJqvmCqc3GAsNY1he8gQytm2xUcCwmTyk5AvYcqpGLRS",
  "key2": "294hZuNvH1r8q1o5x4Y7QFRRx559tkuDLAoQpUSVJBjkghGQv8EQqFJDPAu76ubWqTPx2dqYSoHz7txZ8UzjzXiA",
  "key3": "3gEbNLohfw9RqVUKGeD15z6mwZR3YwHLHsabCVkGBwdc5ArTQR6J1g4SvLGu92r4RyvqZEn31XZf4dMTaUMVMkux",
  "key4": "NZ3VjxuNMUgzrUBRi5fkd5mVrKdFiDatL9sAKWSjCrrrKwHSt1EATnRMGnob42P3JSG1CrK2PJYha9KB2DfQ9Us",
  "key5": "2g7sHc7fLetpCnNsytCXyUZfMuTeUHgxEgn8w2vckno5MKYxzB2NY2yV9FHehAz7FiY9VqyDSKaujgjFiUJ2YJhJ",
  "key6": "5sTVskweKqaBoZJ5u8JAckEcm8xTQ18x4teNsPD7XKvDFCCGidkBZJZY1Pkt2nyJHCgJcjHU6SvLTDfzv6ZraqJD",
  "key7": "5kJkfdk151SdSBE5bH52xLzrms3ConCa3XTXzRojJv4VZ9skNsk5CSp4h6zdiMHbfo3t9yfpTaxfDk7MXpbhvbC6",
  "key8": "4nQ9PTZ1t2aULhm4XWwrWpDibUxXt7tECRkcnyPCYKfJ4wh2ktR2m8ezVmnXgUke2gSr3qpuW3DtZr5E2SvvZDNX",
  "key9": "2ywvjVdFQ3xVouAzXapV5MDFudwnRpypiR4WyFieVpJaYb4Ppgph5FKktsPCtHf8EL63g1uGmZKgvwrTdk85R1yf",
  "key10": "S9CUyvZKeyiKkQ3Te6BkYF37jj8BMmfdhR1RewuQt5XTwZwMvA7j5gRXsthjHjS21QkJx1bKfhFJo4VnbBBZzP6",
  "key11": "67nyCq3uqzMZL5T32nAGzuSXdbL1DdvaVMazHKzKUD91ZbcLQEGd3UgrSKmBxbczQvj8cGnEfwFF4sBgdDLdbvYk",
  "key12": "3amqZEKEsxyaYGT87tajN7XJJeC1Pkkqm4U4tNj2CKKCabGisbPGzt7ziJ75iLGksTHSVcuZjJxwVmBFv7g7NnGC",
  "key13": "5JvsmwL6sko7KsHgaushvoRxVZrHnft5GfVqBCjvMdnJYdCqNZGfGiurVyFhtHohGsvNw7W96sgp8wGZKu94WVvx",
  "key14": "3oWGwAGGgrbUMBtzxvXEYBGM3wD73mYo9VsZ7yAfXmuxiRiVj7pzbvam9ztHoj66WC51XEsZUCvuX7NePUAqv4jD",
  "key15": "3HNe4XnYue3hT4NP3DawqbVyS3XpkZTBkyWwVwCmtSZs6MRJPDkoejtWRSVGCa2gUoUfdkZSoLNajmT5TBV8z1qa",
  "key16": "2AeRw9stxVafvmW3uYBZgjZG8iGeSirLMCiemTH6x6FGRdTVmyeTUSvwmByVuDc5UDfA1xr5XckgFeNFGGsA1yqG",
  "key17": "rd17Qo2EQWmuZakfqDd4kANvgZf8FWQAW6vWCvp6pbrYxwsWxCJqKvab2a8xoWQJgnwQWLD7w4QXDVR9V1Z6AMu",
  "key18": "2Py1MvNWK64vTsDQCT3jZoTWJk4cVCMarZkR7feikS27yKqFYtR25shmBmjEdd4sXpyG1T1Zk1Spuv4RfKnsbeXr",
  "key19": "NX2zZHW9dQ4aNQoEoKjovBX1Qona3BDiQaVdCBTErpy4ghyWvZKgdwyfnxp2BSsRKLiuMc4Ab9VGYFCbBEmWtov",
  "key20": "5mrzQSoh1ettASjjKdE8C4Q9bNT3e9cKj46natjXKHmnr9qHa1fxsGVkJWyMg4zSg2qKHhVoeEidSiRKLsReQM4N",
  "key21": "3MytRbPm9rJKToZTiHJZE83Ej5xD8L2qXi4C8EqVzEXJVh1dcfFSLskyCP2QqxTCHHG7pAnjZ2eYHKvjRVVqZPuq",
  "key22": "3ppSD6NSfm8QLJTssd5ZVoiPkSAzGodPeSoE6v4B2H9N9ZtVTS78C8yjYhuGD96H7BfLNkpMNLW6CKgjiSPwJDkU",
  "key23": "ABYvoxkk41sgBnrRuTTf2e4BRKa3Q11Q1QeKRTnsWpforYXUXfpMBp8LdQWpeXGwjJKWRwAeHN2HsYUdmaAdo9W",
  "key24": "Xq7en7geTPQEeUsYVw2wUNWp612eBz39zKuF5frJ9dCACWUDpKYbd1H6ywMrsnYUkHdAxLheb512rr5wmZDGGD2",
  "key25": "2finKLADsQnJ2dP3fTEhbfbFHS3dYXzNn2K61jGne6K5pUnELgUQUZ62i1tQg2bCZnQ1M9SRDv17g6k7Q4e1XiSt",
  "key26": "bMQ9va2zeuVrAnYZhqAegpH12Af2E1gC4BDw2T4AVbR4bcajzkurTuuovoWwLcMLopRhXNpLc5t9yb3dLJYWczs",
  "key27": "aNmpyYnaYwPZiBD1b2uzLV5ikAgWXar7todh5Ez3Uzzbzn9iP87LGSxqZANjst62RWkhYFfL7yMS2jnpP1t8gPV",
  "key28": "4kVhyDovC45YmF9JajoLiuZddmN8SBcF7G9qBof4vsuB829oXaswGTAANCgPbqLdXKaazPYwJSg3Q8ZBj3d21dDL",
  "key29": "MBVqeUdmNCq3wuRGSRRjbfR9cDdYfnMTLisNDxXi39rfi2zMvfjYXbNyC8Sb2Jt1Bwmn64HtFfAasoUYMuPqGSN",
  "key30": "2Y6oiSapS8VMB3G5WcTwiXoMWHTkr5p6XC3ySSzC1E2qjWE6f3MHuoehVFyT9sqeQVrpcoHStTqg8Ne4H4NojrsG",
  "key31": "Lj3CmnDhSvAuW43vBHmHZa7mS8AT3VEtCj6YyRdA59e7UmwGgHzkc8wTCTMZdJr5LHXCS18xcjbnqJwt1MmDDTN",
  "key32": "2LnKj4ZY7vE2m4C3wV2cnXqSWQPuWA3dSuzhSCmpYkBTC3ob6icRw6cfAQss4rufg2vQXq21o4Pm4yPV7t9aKuim",
  "key33": "3A42C1xxGP3UJnNwHXu2N8WqJGCYrLaERUgonbuyv44UXJjFCgCBsyL3ERHcm3epGYVqSLxhxkH1HNkVHPE98wuJ",
  "key34": "46W2dbSeAXuQpAoHAXfnYr2go7gPM37vp8tNHeAFNfmaMKxZshSFcqdCswwrMAwRBeyZNBKaw2tBaf6fVUsZ1Gxq",
  "key35": "3AHmJjdWMUYG1sNqyWvZGh1QRYkFu2EH2MmrjJh4DuFwg2Zkqwg8D6pC37wFMC1ULnD5v5cr8VmP62WK6gaAeJP2",
  "key36": "2Se5zKXCcA8ku85L9jPLSu7Wfbwfg6xw3hr8GotyYvgy3S9LnZQZyiEyyu4GsKG7wf5J2EfiAKjosZZKe4vHsGez",
  "key37": "5quXC7YZjsRnWqemBTws46ycSWQnD2A5JF9LD7uo3TdsH19ecHggUSKJcAn1f33XPQKAAYQJRQrXV7yMm4fhbt2Y"
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
