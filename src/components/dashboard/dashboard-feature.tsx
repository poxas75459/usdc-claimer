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
    "4gvYr4PkX56V1LpQUNaq5Zq48upgTf1NcUNdB5jG8oH3pCoqPNnTYqdj4itWfpryuo2Yhsnso868ks7fsTyBkrHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f64EtXRVcsrX72NiAgV7RYGMKw1FMEntKU1re6enG5P23x7DYZ2wUCptkTxwrna9PjvTZWL5xaG9Ch5W9uR4vez",
  "key1": "2ZuMB7tC8ttNTy27S4EqNBiqSPXronoV3h1Wxi7tEwgocBNgxYVteDucwGhVDyKb8UeivXzpgABx3NQk7EinYPob",
  "key2": "4ZpUnkNoSTv3nWNWaKZ4MM2pYTpgJMTf6WHcupEjZ5UHpsn29ZKi6QH8XZPQTJ3AiR8jMzSuGSKMTpgx6x7UWKs9",
  "key3": "2fM8Ni1jpJYv7CHkMU22X6WDCNvfh7w68ijM9Rs4ryXZE41d6Pf2cp4fFuau8ZEcsxAZe7d67Z1eTdXbycBGVCg5",
  "key4": "4wrdBJQDtF5SxAJxKwzFreuALp1fMBxqFnpL4LUi9B5v3VAPvSRt3fvLAq4QBAtEn9egB1hsz3UjRBQFygj5Ezvt",
  "key5": "42Swu1eHtMmS1EwR4dB2PkbH4fRoRid3Mbm9brgxz5u9DRqcWGNEqDD5RPsjeXFgyWTRokygdJJ2eZEpJCKn9NhQ",
  "key6": "4kDHw5EiDuTjnoErRQXELBziE827MTvmb2fBU5XBPDMay2fwpvTkyJJ5bvJv9cP7xZxF1cxCStNns9bAAd319m4c",
  "key7": "2yB3R1qHSgWN2WQD1dQTyx3nQMQeknAWjm75HByS2G4FAX7vhnw8fLoHPkEE1sJgtmWjvhYphoAVokRk1CKagqPs",
  "key8": "5k4DwHPwWQRLEGyvTChKTmEevSByCBsEZ4GWujGQq4ZUyJRZ8uLvtEqxLF5XQmbQb4wRq3A9gherBoVeLVeNhMeQ",
  "key9": "21PCdKF22pBCuiDTnBM3x992YwAw6hVJqsqeyJj7gYCBXzGFypi62sxxK24iTKEk9PzWXHPYhryiq8NF6nKDLfL6",
  "key10": "2fPPgErGSySWTdpxbTxE75zJ1KJAmSkBN6NvE7a1nCk3hVHPQMcp8HBKn4YeGQjN9h73P4fEBegyfhmQfcmcvykT",
  "key11": "uoYQHQQGLhx4hCgYFwyq2ybxbFFD3ivNxkXhJoEtyhKT3xm6D1XZpmBDUcVukZKCTmySoE9WJejmdZouis9SXQM",
  "key12": "3YH84Pz1CviexaTSfenC4kQRUcQkgsFfEVW4GgG58bq8tQPCBjPmNyJYwoPZoiPLaU6Gh48QSypxLdZ4KYq1J22H",
  "key13": "31cAXzu3ttYzg4FcJizYTiGJetAEM3p8zFnHH56rBkYemwenn77KeLXiBQo7QG7uFxbWJN2J8oJm1T6CEoUimnt4",
  "key14": "4ampj2x9yp97fEt2R5Gzr3wftrjV4Dewg1urqJvrvvUZvK57PZCkW6PoHA4XskZcGiE6GsAoPgZiPtLnTB59ss8H",
  "key15": "3ebHyVRoFY6Lb8jA4RWMtWgRaPfW7AvKFLMAjcsJ1DneHnxy2kNtLWktTWfSkDju3HmVySewgSs7Rtgxo7UPXFND",
  "key16": "52m2Q2eKa2uwchwcNwPjehRE3Qkib1DvgVARAxo5A4uX2BTYpiPgMYESQ1iZRzZeEHV1Vew5jwoKi9okUQVZs8xy",
  "key17": "3acKzpgg5FpZWcsRRBbKaHY5B2fP9XGUNc5i1ZxaiSF4pQDyqcSwzv1xrc6Ckrc2mLtiNeErSfJpVkDf4RX7rMmN",
  "key18": "4SRPHbCrGYY1wWTaaz1NfQ6baES5VAoeHkR2gH3hWX735d5juEX5TtTcmGdGB7izp84na2J5Q4iXjg8MzTC2S1rf",
  "key19": "4wLWj13BwxYGHWGJCCRH3EbqFYHe5mUginPD5MqaRV7KoVwz2S5YXRSrkwtZjvCELhtB31tbD33Mcn3jUyZQZgdD",
  "key20": "4JYJpxZt2qmMHdpuae573fRHt1Mrk8h2GYVNhuHmg33aRupownqN9hrn4R42KAnMhG9Q6u5EyYriHi96Cta69awU",
  "key21": "UmFx1g4j82zXLcVLHCKM1sXSoAE6EoksMY3oq2phqci1dEbRxSMyv4E2x4AJnGHDySPE5WF5NeWKqp4oK3Vw1g5",
  "key22": "2eBkJ1ozuhyqkw5zwE94kEDsqtP7TnXZKUdtQadUBjnzwF6motdccsAmVz6SidmvqrC8nBF3Q8D1442Q3pHuFH4H",
  "key23": "2ovkM3gvG1KWF2ZLPwFjRZc5YViQYrDNrBng9TRbRpUTHFgynxhpkuvGLKWENp24jPZXc5vyogxbKnoyxABYpVCW",
  "key24": "4eQJsC6ny2LEjvaaEV3R8Ti7GakQBsjXTUEXMJ4Fo2Wbt3HEryagLeCDjNsQsHWWsMeLwJyyxSJRMbggWUm9392T",
  "key25": "5u1UnNbr6ATPtQxz19cf9i789utdd1Wt5dDb1P8pnKiSCM2c1QLVyywMZdcmPkUji9H4zHe8KHXfgbgqjMZij1eG",
  "key26": "2JuFMaebP8dYJRTYcwJazTGBAzmHiuQBn9vcWnKVpPoHRd1QrF6iemaaj1SXVViLWELvgt2h8PwtcTyaSEN6Q9ti",
  "key27": "5gwYkNTDqUi6xWQJAH1DQnUSXNw1TvkajQusoor3mA4kBkbvvniuX5YCGnAX1irVwCK4PkshzYDyB3RFReMcqrYr",
  "key28": "2UcJMxsXuD3zvqCSeAGZPvSMzEXeKR8XXZCayjUW213myMm1gHhF98LGyhFy2E1BWzx9SdzXw3HJif3YY4mrgMeB",
  "key29": "3PSDYKreBL2ZtLR8vsdSnEJRGkgczpcvhhZXjtLojcqy2zqvXvmMhREQPiQ86nnA7H4TkE5LWa1noNJpvhQczFKn",
  "key30": "6731WZS8VhGL6K9HxXtuqumL64W5jK9X8H6woZiCXmTh38NxbyoAnMCVbwU3LXPdhiAELa5ptR97kbVeQS15kMB5"
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
