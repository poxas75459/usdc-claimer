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
    "26k5mSuQ69iQdYE6V8KTiX6gZH2yMvKTAmuxiyXe1E6d7s7pmAW1MtXW3tV3ERgPgEDCWn94gcyT1uZXyCi8DDyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nKq8hmjx3qZ1BztkgEsZ3ZQ65VqMFqn2AAZBr4u4yekUvezuyTBRJwKhUMe5GyvCcSBU8bwFMNB1is7Guv55rd4",
  "key1": "63CPSZTqvuu3rJx4bEopXkBaaCvZgW5n4mLE5CfSwXjyxS5J7Vsv9aWj7dWdbw5HLdDb9NytvNo6DURbqA3fE2k7",
  "key2": "2uxJYk8Da6r9LNH4nAQhZFDTcANvmCNB7wYpwZJ9g18k3LeLevCYK49pnNdmGTLk1u1BynD2EUEnAyMKCCnYfKy7",
  "key3": "dPFtsUcesJ9X6s9FXNf6xujNY6VGeqjRTGotTzkfCokdYzx8jYf88cbabyssAcjZKuTuaVEojvAtqfo4cDeMXbd",
  "key4": "34RbFrJszjWyHTpgTEWVLyAxQa24PiHac915DDHVRaJySBZrJGLaMyfEgoFE4n4yz3AF7Ry3cT3CKHPCawHvUyXB",
  "key5": "2dESpnft3nxJqv1f9cCt8qd6fTQ7SmULoiTtD45f5HoHH5ffMec397GrNBe4jAt7FmuYQ2iVRem8iFxX8cE4MStG",
  "key6": "32r4WZQo26cWHdM2UP6T1tAPnV77wkRjLQ8Q8LXH9xzvoPXDgcnviMLmJWJmXNm818rwqgiXDpTA4VX591bFDbgR",
  "key7": "fQbBa8vCoKLMY7hgLHGiGAbnRVWddXhteHB37mmDMSFyUznYCFZZEorpPDHu7j31fucJq171VDz2j8fDt3rSwLn",
  "key8": "5rKsMKRr7ZTPng618uksR2GzPzWoz5FZiEwosyJuQ9TUtaRKhabYo5ZcFGfEpzvTdSBN1ywcPCiY2ZDesbFA1trS",
  "key9": "2f6GfjzN4RruReehrbRdtc3VFRjiDFwuJvjWnjeRd9VwJVQb3WVec91CheSm3VA7uQmDwXSt2GG4CPwAiRkiufcu",
  "key10": "4cKdfaKC5JEi8YFuaDfyvfdqACHAiRXRMKCT5pHsYMDzoqv1gpTrBD8vR9TtJeppjsiEeAS1X3fsMcsgPuta6DZJ",
  "key11": "DXTSHp9F795yN5bwLsszhFpHX7BUSgnYYSw7k618DEEx31M3XHDjMg9y2iEybMHhnpMXnVgHkfuvDeHYtG1sMBP",
  "key12": "3eiNcAErw1nGd8jSpQrBW4rjkDcpup9SujxKstZRXMJC7ejRQaxy6EmsWKcs2vCHk5z9eZyNUWp7K1aDQ8DVxrqT",
  "key13": "4RQsnVeJXohiEptoedSjuw4YyuVF4K3Rh7GZkbz1cZBL1EW7yWXxogCVZ993CjseTW8bxSgN5micvKJk1JziF7fQ",
  "key14": "58opfounwvKnPUzpRVcfGmPitSHF3quUazQvWD6Z9xyTGF2SqmDE9BcYQeDP64JsUSzyUfxY5tQK5fJUHHdok54z",
  "key15": "gxZoa7biVBkEojakoeWqzryN3GsxzA3hfDtA7LDhd75xKKMkuwLsJBAxajZMVigdX235sANbjV2qrMdJNUnbsKj",
  "key16": "rzEoqgv2KbyrEQnAnd9rUrY9kBBUk8KKf9CKEuu56ZRjBxX9V4nzkSBxrx4j7t5XsP6LfqKoPWWwB2ZaLJuZZLx",
  "key17": "4c72SW9U58VSKRwHZkgfGosPcFnqpru7fJkcc1zxEJHbUnNkmr8sdQht3cSJqV5ZmpWfbhcCXVjpqPS4aMZF1Uq4",
  "key18": "2cYBNi8a8DS33behHv99S4da2hAnDVCXc79QSMQbGCTCBSGUoF3pgEFK9S6qUsNXXFFDK3MZk9jHpnTV7GbWuNL9",
  "key19": "2LotTJYpbmytLyWiv7DZTRsMaQzK9NszETJCFz3B2qhZ2cg6oYvnRv1k6fXNrS15gyZQmoVkry5DYUq5FyM49Mw2",
  "key20": "4Czb5geUbAC4z6cV5Sg6G8hKKUjQqMjPD5r4a9Ev42jGQab2MDpGz8tVcpo9vZx9wpJDEKtSCKUqb8Q79qa6LEV8",
  "key21": "4ThFNA7M173VAdw51UjRqk2DV6YkLsEBo1wsuMXpbGrpznStiQaoCL4zXrh1cmepJbQKBQ1RJQ3CnzWPDuG1Adis",
  "key22": "5MZHosBFGZ8CLkGxqMUy3xT6kGj4Cb1vHeKRkQQkYA6SXszKfjTK2kxLT9uLdetmbyaUyMFiG4bj7noSvvUdB4F3",
  "key23": "5JpSCa7vdEL7JVT7fZ735owTYkbp6bJRr9gNNNixrXNoUU6RxauQPH2ofvxvxke3PT2LHACeAgFfguJj6549ditW",
  "key24": "3E7MnDN1K6b7TnFCH9bzPQH83P97jESxU3jGnv6YjufdtQp3CMBcKDtMcERzmSgYXrs2DjzdJRu7GEi6Qk2uwDHM",
  "key25": "5S1YXk4gTn59SYMp8ToxZSDLNwcsxTRopDgk3Ax1WzbGZRbGSBfyURfcGGwm3wFk3GECecyWopmyE5no7xFBW1Q9",
  "key26": "5exZVtTZyDy3pfpdP4fm6oP4h8n6KwTdM6AtrHTECRyY7uz1gpaUtQrvz163Psda1HmaB3hSLv1Kt4fCi9aiMXF1",
  "key27": "xvHEqcH9Dj8QUAwwmh7VY1XbprhEetHHo9oKgtnqYJ3kTPxA1vK8a3pvduEMauZM4c37FQ678SnmVYe3ShX1VGF",
  "key28": "5QVtVLEF7T5vw6EGw6uF98g6pdwwBDG9h8PHkthZ3bQHeCNLtyGRhbwhLwoufim3LbRjbKJFh64CtXwLsN6yrTKW",
  "key29": "JcqvtKKXKoioM3kpW92ymioPc9Bwouxjir1L9aQx4KzqTa8cfnCF9Jb4crkCmChJurFRJyus8YBzacjkkmDj9Zt",
  "key30": "6Aa3htFjocE1G2iTySaTr7Z1UJTLgScAyzTisEtoMcjrRVx2AAhMhXA6gVNH9giYoLc6goYVUVFiTG5kzdkSiT6",
  "key31": "3Lfr61X1VYb7ZVZ6bPCv5EKzSHxbJ41aipy9uKk9FJGH1PUyVTVE37ArNnVLkfku9sLmRVHojbMd4TiUdihwvxLP",
  "key32": "QmyHG7YxM3LrZmjoGa1ZrXPgqt4hmaenex6tsMRHxUGXk3VW9Cb86CgEeMzu6QRwireFWe73Q1vicUxmAS5Vppd"
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
