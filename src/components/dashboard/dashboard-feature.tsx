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
    "2Dn6pjKaSyXnXEoDzF1XbQxJ1qKyR7RKLK9JCX2tKW9J1L5qACy7RP2J2cbDxaWF8Qqg2Fw3uYfzipEu8rE9rsbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GxoTYGxkKpgCqz2sn7Nf1MCAxvjujKu7b1hSaxaUTim3EHc9fV4SNNYwvEHq2rgLYR2qb8uzgz6867X7ck2irjf",
  "key1": "4ccMsfvcnapjbcvzjynERbmiv4fWFmzzLD8DNxNGSQchbx7zbpr1kTJHT1GaoVugLw6EsEzFrLCeUqWMn9VCCzME",
  "key2": "43yY8zSRaaaL7BAhDnQ12ZkiBEe3rwvCzXotU4qSFa7gBJWCP5SFGfYDL9ydBqYNhgJ18bsXbSutT7ucug5cd3te",
  "key3": "4M63woQGtE2T5WKbyRXcLdVvJxATe3zKN6VCcSGnAXwmr2fM81N9fipZMhan3Zj7ZaiPN45G2CioHp5QPG84UdbP",
  "key4": "4UPLGDEBHFnMZ8FoEkK92XYs6asCPMnfsNEiZNEe4QFncVy4MXhspURbBUg6HeMdmgvdwyEPb4SVrfkzdffeLXRk",
  "key5": "282AQYazHbsghFpqnR2yQnEEt6VQk9FrJ7yLNPvU4DKaViXCCKiv6jpmohBQrfTYCRkAX9HYJGeg1GtN6iPfkzaT",
  "key6": "4CSmjhy7e3UswAuLx2LBWwX2DZPT3N2nVi6f9gwUawtE1caAxWFdUkhBCVj2J5MEcbnCjuDua913pnUotRqq6inu",
  "key7": "61inGQYHxJXoW187MbsSsidawJ4PczY4tH1WoNo88LqBjwtenXmwKjStfvqPCNpqrt8ADssgsvuSWQTvjpCtKzKg",
  "key8": "3w1Fwyzwfi1mYPc6ATm6Q2rSXTK3ThBpje6o9fJCjt4gGmfsN4n8mffBVLowX2Qkty7N2nftk2aFDRk4VTHmcMEY",
  "key9": "66Q55waQSL55JacUhA9NpwvFuCTsftub2H4wL48GkUHgwsvSuA97oNdd2j79tvf7zkfMJ6ZPRBYkSjwNuRDxB7sP",
  "key10": "aBVxeTcSQGKfyjH1oWhTJPreMHVpuxJySHDxWmSS8CoUJwDqKFanzmwkcrutYgwTSw3sy2Zo9VRjzH1YgKCieEL",
  "key11": "2Pv5U3JUz2qykpujQehZreWwkppVHpVzZKzUEtEnd1QkDbzc9hyaC4tmVCsqRpKUqybcRzFbjsL3GtcqP5m3a2J5",
  "key12": "29V6uwfEwPYehyJnrGPx5emWngdxLqpwjfHtshUaQwqkVvJAQx7mpc9s8Sm4eaWrKzyLbh1ZpyuivXGDBpbxTzeN",
  "key13": "Sv2t4JRLsaMbmUvt3qy9RdPc2Bi9dbYEnQ6fs4nNV2HrQN5Mcdm3H1y6yjrSzpCDTiDxRiTwmxLAd4dTEenmkmK",
  "key14": "3iViiaMK2pFU4GY5fRHSWdDyHgjvBFES9xHVv1hcZ6FfGsDeYa7AywsyRvwasbcfSKLUUxExjvbDAB3q1BpQ7rNP",
  "key15": "26Ch6mTHEuoCpuCt9R9h35xvLH3AKTStpysqDjbG63bQHw2s8aD2xYUSpHzBRdwuUGdhfCVeeoiMUgieHnA24sBW",
  "key16": "2x4VqfWqiZx6XmTy5EVdmijJaaQa4PsHhLbxN3kfz8to7QJXgEqqvAYekp7eUtQRuiPa9XT4Vu542ETEMDZRh7ng",
  "key17": "5RpQns4BYStgWNjAXygVXL4fWMARAHSCWchXxeWAqU4HZeivMqz7g3ZbuZSvVRJTaRyQC97Prwngb2asxQe3W5SE",
  "key18": "2eR7SPAXKXk4zXREANPBMEtzabBzHM5eqAQ6eegsypaV6scpG6imhg6H9uhUw5exhVtoLCGXay12oAhZYePagp1e",
  "key19": "2o6Y8KLv7GVGtUSydPqVWLaDPV67o8YwwkGy1byhyryMop1eRagWdxzbjAZCbXHRLCX1JmtMgGUMkbFY7aa6x4wZ",
  "key20": "hELU9ajzgZXCqpXPgivXfTsLr4bzYfYcueRJ2y2CV46pJPKeKtyM4gPQudLhEx1tuTqiSYsjTjcgBCayYF88AsD",
  "key21": "5TxoPrxgot8XbcKUQqzc1AywqJE4ZM7q8dmnjt2Sxh1QgcB5xAszjd8SZ3ad7HiUniv35GZz8KpnNLndv2qGUohC",
  "key22": "5qhkSeZsTLGe5tUZq7HNwoaPUh21cZfy7KDXSkdbfXefP3d1NZ6uChhqtanSoDDmUmQyWRwQxBrPkwt3YuYX7Gkd",
  "key23": "2fZWL3m3MQSX7jWF46GFPGFi67WomBQypQyA8kWa61XioS1qohBn4JdtDTkMLvdAHVDtJG4HVgZ4BiyzabK8L7ih",
  "key24": "7ksLvVhfn9HnbbVHPyteKbDEgGVKhuWnMQRkL2KpeYk95T95bceZdfmTWkUjAUN2SBKdMdrqNekj3De86kmNpZ9",
  "key25": "3QEubpkXSfzUn6Dp94F7jAYEPcp8xLJ9s64wUpdpLY47bP3rSpkkFdUwWr7VJakTYPmsnGjGMoozU23LJaZVzE1q",
  "key26": "4d4Qsur7moRrZ9s5xYSv2x1yuyrLwRtfm5TMutVgZfD3TBmy8BCS8o5c2tRZd5EXc9vsDSCgKnZtaVVX5aYnUcQa",
  "key27": "wipdchYKdYBEnc4Bv7TUJrjWmvRJxZqronw9i5qPXLY8JPkMEcY3J7MG9BLsCSjYff16ZRYBZKaAKvXT8DkHqYk",
  "key28": "5o7VtRg62nQKxh3s8RhvGzd3twwgTGwXEYJWJYGuxJqqyivJHfPMyucxRnNTzJqEzt8EaYbbphzZegHeWYUwtss7",
  "key29": "5kdk3phk8eUjY3LvcmNLprFq8ssbzDRKhszhNeqpSV9E1Eh95WJqQRLgqUscKvCGeMCTtt6r9FUtRpnZKtUGL4QB",
  "key30": "5tpmneNmLLCx2bffwyaw73MyJVcDHgvmhyeXbfi6hq8YX3guGCQ41uT9CNUdw8bSC5L643dsdo8bhJp2QcVSUGp3",
  "key31": "63dRX3L5KkzayidvztecAJnovxvRXCtw6ALbHTkS1a9y1AwB5oi2wdAsCSiHG9sPzKXsdRfSb4G6dn9eNna9hC2B",
  "key32": "3FhRTcZgMvYwuhjhydPo6jAheQeR2si6WRfMeoF1TYUBpqCfDAVtggYPUUDEPYBWYDandf63S4sC4nTKgko6qdRe",
  "key33": "2ZAQSiiMJbMipezxpwpEC9P4HCZTWmDtHV4nmtaRPULTzxZfugHFEyqadGxKg6D8AhXiGyPKpwNDyyc5Ks1JFtS8",
  "key34": "DpEdLo1zzxmjaY8exVjr4odHo5QmxmvE7KtiUsWFxh7sXmDfuwpS4981m2MPDWSSAHmWMo29KnAhxEwr77kLXbV",
  "key35": "MZTGh52d2jsnctn78aVjGG7SGpcLhoJPKXondfVYHnpC6hneeSeWwV5auqNkh8Q1B4de7r4eQmXWBvrfwfAS7rQ",
  "key36": "4p463inLZ4tuYbgCTYwPoq6iyi7shzFhKt11hAWCmas8GEcY9LCTPSxPN1nCbPGdVrbAbJwDP3CNTEbyVY6Ckssp",
  "key37": "kKiZDtpy4Ne8jd17HcNRJxR9teCmN6ygShtDQBhqacYU6ZhhGjt4biMoZQ6mTPrViqEEq24aRbPdWJsa4p46ru9",
  "key38": "2TKc9iGwESoEwWPdYurk4TNNuPzMn1PeY7GY5FYirrZ6WBv83SuTPV2wEfGLp5xFQ79KhLCKX7dfTba9rcxaz3fx",
  "key39": "2BmUXxsUhmcfuQ6DGQ8TUvCZkxJvZQ9RdgqVdwxx91k5XG6v4URsoHZn2T2r46MXmwowxTtJsK2CooekASn5z6BM"
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
