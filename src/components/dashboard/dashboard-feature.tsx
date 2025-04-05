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
    "4EgBWKWbR23SFXnSjExjkFw7NMbxX71XznNGuzbZuMpikxvtryXZTSg8wKK7XSkXRo9gQEZKu372GCZUdgdZTiKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33AqVahhg3AqzohkFwpRQVxaNfmkvJqCw11Xg5eqaDQaLkt1WjnrhSScgkFeXTtfgR7GtEtbQCmxM1zK1oecyonJ",
  "key1": "39kEj7ZNwrWKC9apdyT3CtbM1nR6SoTsYaxbhp1Sn9qfE4JpbnzncBRpK122Xe7PPQvEjSey5diW8K6NCe2qPwMM",
  "key2": "3QNJewJGcneUwfJ73BTAYH3v35XJAn7ojtwcZHUNBa6tUYo9hQth5YcfD6T48qY3KpM4Zk1LuFYzXK9f3udXLHi3",
  "key3": "3gixje6PQpPsrXsv6gpxv9jFYfnBgmwUdowNqJuQu8LBDYgCJP5rDGH9qYkW9113ctXDukTag2Fvq9TGdwCCm423",
  "key4": "4Gv7fPbHpTq9t18ZQxkg72CgP8ZAMNFgu9KVAQPvs9E9QjogLSesXWbZFGK254n7gUGLgUBRnsAxx3GEeSS777HD",
  "key5": "5TwyYLV1iW3oeMeuzGcdX4tEeVP356oz17TcLhtmxFvFYNPsoKM7hAtxFfduomXNPTDZsuK7S7ZkjbYkCQF68BmJ",
  "key6": "2iFJ3xPVRSXT5toNnYwnsEQrbZFptkLYgRsWJbrUWEoBYN9tMuExg8zknXjKEHPJ2HZ7JeWyyJdr4wdhfTdz4TTV",
  "key7": "gCGLgZUXNVke8PjiuTp11vDKtppecZ3tAx1yzkyE5eGWunzxz5LAs2u33RNQu9ze7tx59iPasS7xPRTMZ8e8Krw",
  "key8": "sN11fJdH1eVT17fGHYTu4zKmFehVnPCJxhzkyFjrgqP7BNLsNC2SjBDYCZQdKJHzowbD7EGETVXnZLLcpcjDzDR",
  "key9": "61jWU6nR4dFKQWKjFu682zXNoBT3BJGsQuPXhMuLyorskZfnpv6Tw6k679s8uyj9MRKADwWYtqveSLmimpEZwVcr",
  "key10": "3mYQBWabKpgrcmXxLCsRQM829qr6dU5WysedXN5U3bZ9E4Qu9aJEd7Ry2ngYzvJ1F3dCVRFEGKxQmnPu6ETZ2feb",
  "key11": "3VAq69WewohD1vYi9PmGQn9kVTkMKnWQwNjB27YjaPjjAnsrmJ9SUPE6eQaaoHCcU9uJxF3tNg1voRcrCTf3SALp",
  "key12": "65ZBHyURXATawvb5cbdQvFNbCAZmXaryQvdLYMyY2WZfXWuSQS4wBgYAPTjVBU69YXUoydnfmXeqYxj1QbtDbSEH",
  "key13": "3MC8wv5GP5syLU67GctVyqvWCE3UxfPQTbQEzfhZzqJ2a3W5rrpSELhiRKPkxW4s5qzajZtucg5GhYPNvcN9afZ8",
  "key14": "BrvFMbbwQnnf9ZzFk1cMdEucD1bp3zdpDtCJvVYWa4ChqzHLDcQKC5NpDWvAYtMvEcSHPzhBUoEFAd3xRMQo7Tc",
  "key15": "xZ2dmDbfpY8pihACEkmnd9zBgVxqj4UsNL4JoMjpxtDLUiCauBipvwPZfupmLzPz3ACesdAfYnaRHsJNK4Z9Zd9",
  "key16": "4fa9wwzZKeXpp9KTDEkWWnTdSzcmsETze6eUzPXdB7dfQX442fFMHiBxmSzquy6rcVtv7jhBdS7CGvTzcHbrcRLh",
  "key17": "3L4kce2r5qZrd6ejykXkxNYmiNraGXSgn3m3woNbmC4Ms6MFcuV7ehJzCAYWmaoYCA29aGTJd5behu6BdT9wHRYF",
  "key18": "61TArM3BJq79PhQWa3vrDe1Ft8kGzu4GaohvH7gp5rEiURbgpL5LHxLqhx2fTmsgHbt14DqFHQFhdkLJhogTgYvB",
  "key19": "3brDtTxfrnsazG3s2a4uWQqmHKnCBT3Ei9NdAwm6wD5vms81BCfBSVaD2i8M2WNrYbo8t7CaMJp39NAvBzix3ALg",
  "key20": "5MDBbb3As67piDM8pazNaej8DXYyigz4Px6t3ELAmpaM2QiSVdUptECGqpregcfKSzcLTf8jPDsHhr14wugAxTzh",
  "key21": "5dGNKf4fDqfqLKs9S3sK2zhrnBaYXiHkWEUSGbCV9vsFMNmiQBx5gKaBRiWk44DbBtNgY4oGYiNbbZBA19xdoteZ",
  "key22": "3w2kKTz9HwbFLwcKe2PVSuXue7tFsNSTe2cNL623AUTBjWdGfsCYTTiGtB1r7iKGiWt2dxCf1j4RTR9KEYanZzBj",
  "key23": "5anoWkZ4HnnVrQ73gxieZ7vB6698Lo2BzKDa8moqPcxrZ9sdh9wgqRBn2ok2Bjv2tiWc8Kb3eMDt6LbNpPSrpTA3",
  "key24": "4GrG9kuLEf9QEPWc5NPby98rikyswiSTyLKF1bsWbCPR4dERtp33wPCshYVcfJHpL5UCmjonMxBz87CDDxkZTAQF",
  "key25": "4u8kY8LFsRwSmwzhsR12vErXgzPqyJxFMVBSwGjYK7fNdvuNQrjkWcYWxi1XBERMpFFivSr4vyB2BB5Dd7rjrK3p",
  "key26": "4qAc1z5CSY18C5cbqSCz6Tz2zFaATRb6ck7drpLUZ6rLqSmvMaQv7Y1trn2EEiZV2giLyiCjB6s6V87kZWmYYp35",
  "key27": "5TcDp33G7RhgoKZnyPE1KjMyWoNHrmqpSXBpcPWNamsvarEEapheAswXSW8LhAPLSqQF7gPEqCEXq6NGjW1GsUvW",
  "key28": "4XefC4SgnyN7DX9kib2EgEhvpbkApUKjHu5bSMmiuqQ7uGRfZehshyzMYCeHfqrjGZeX9iNc6SdKHqR9zMsSB2PA",
  "key29": "2B8rL3BuUxWr9ce7ZLjpHqmZ1x6aWPtqcRPzGW8K4vQGZuXeKoYTZrEAyjcvFWGKpRPRUFFq5exyjEz2ccRcSq8p",
  "key30": "5sxoKWtjBXsLzMHYzCkpiNQmEt7jVg6hJHJozZk5MopdScGnUuMfnQNJqnd95foafW41dNNkh8NiTnSf9FpUAhiS",
  "key31": "39ZbRaRukNvNdDuhGqYwvKEhkytRzbDyt5sKUxcYTGeKNinmRBC31aCHEkeAo3juqyDYmC2X4QT27QCiSU1nytuT",
  "key32": "4L7RcppGXu4j91NbfSeuoX1Dv5AbYDX8o6nYcfzdDrTzxT8Cpj4XMuyUUKmTFatQXmHQhNPpCZqZRhYgwhsicoPc",
  "key33": "5F62ci6vursqrZHinyf7gEvFWmhaNJVCGqqzUJBnbiGHSkvKLuQiR3nYvETLXK3fv5rmKHb2s51skPHRzqMyjZ2W",
  "key34": "57ihyGq4q3hrYiHms7SqbApDFKehoVQWa7vSchBqpQuaWAEZR4gxdVNnPu5QYaCtQcWuRSP4LruqPYFqtmvmS26n",
  "key35": "419AdwFjE924PfH5NhGJU7M8ntQcPf5u2GT91ZPwujkWJcP28fPJyB6GXUnG4LbjsUPBkwdqnH2ZKEvzFqPVwcGw",
  "key36": "gtZJa8jdF4oo7LgqRApTxfDMoUnEfFN1jjXHsE88XZYmVNLXQmhYBAG3nvnwZPMrmj4Q52KcNaVFhNJ6tUtVSN8",
  "key37": "Ppwm8yRGJ7a47aN6QkuGeTqZ5oHUnQVvskYJc82PLypV4cVZR4yN7LTMj3fg388Xvt28ssP42QzUbTGLYh417aH",
  "key38": "4id94aWueA1xo2pP73ZFP5yYm3F3jbaT5NPZZPXjDRZSjyDPWseb9UoXbi9R4FdghrXaNQRaPZ92RbFD1No9aoxG",
  "key39": "4otAoc5i3o5Bkv29i7p18ENAvzYDbaXgtat7cStC9uzcSHuwBuVETNswDs1uxm8xwgtDf2g9vo7xg5e1bUZXqcDi"
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
