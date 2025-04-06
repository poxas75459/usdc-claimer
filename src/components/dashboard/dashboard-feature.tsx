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
    "54MfdWQPa4vRpjghSZHhCZiJKd94k7Cvrs1FRATPSDZnqZqvCSY5LKqz1bSuH8yKMJ9dYK4HqmAWJY72QahrJ2TF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KBzzeVFhFUMcLZAwndE1pee9iN3vgssZuCV1fGzbdn6mNbHmR9FeCDek2DonUk3t24S5y5KnSjmiSLHTcxBdqjN",
  "key1": "4tPTaEoFbFhfb3r4r9EckHL2TmkYRjnDmFhkaFJpjPLSNRni9A6ikt1QH6qcueZW69DMAH9twaP2DY3YjxHGEvpV",
  "key2": "4Q7EGgzF3stDhcTMdbeXyo6t7JoQMPxjG1LKrLWpT4PFrXCpeNYkbmncfLNDGhoJF8KqHV2pSMc75JwbRyXwF4CZ",
  "key3": "2LQ9jZ8kT3UPkoLvmVJJfNjtotEQdZjexvL9pVFNvkfK9vympdQK5dvg6hMAMtvmzx5BcqEvXjJu7Znw5DdGmTeo",
  "key4": "4npFUoHmTRMWwdRUYKQmVLXjAsE4GMkp3JszYHW65ZmKHhrHspNYf5eaSy3PRXxzWc5ouhV2sWWxrvnopzo34c74",
  "key5": "f1BgW6jfDyhWzmrJXiuiKRKG2y8bXvgvcYDMZ3hEMNgmTPjjtoBNTWfeW23AG1JEiWLsmdVt9ZE85gJTB7uKkqu",
  "key6": "vPE1TahWzwSQWibxJnAdddXohRQ1o75ZJE7BBMaHMMYvyKVKZzVdmKHj9W5BAgwKFcnDdSx2ARqNrQ22XaXdudi",
  "key7": "3oTHFwdyjvdYco5EDqxGLY7eoXNWR9C7p1gY3oavU1TfzAfvEBH4vGdKDsBuC8E2F1grGMKHoKwjsaJekXvgVGc2",
  "key8": "41DpMEyitUupPZDYcuJeTrvuAEz47bWCkfJwKBXY4voxzeX9okEk3LtTLYsnbdcwjjbkuwAHMz7k4SfTp7rzUtpm",
  "key9": "3v1ehCedPdsztG7SHueerzM1viDgUQ74mugY1uSHznATJoCjSKoWzkTq3TBZ3NkVyYqiXi9HugBXmTNkxu4UvVFH",
  "key10": "23ymo7hMvTFtg71r26UfzhHw7iyP2ERa1hMe3PQCCYHCTFHkbSAhc2MFNJcFKHL614tkxVyfxZBXBZLYsg2JebvR",
  "key11": "4eMdceHbcMun7zYXAoar91wHYtNkEJVBVuY6DQTRreAkVKP2xmfiYKkUXWr1nnjdzEuszQrTPnBHL8v6fqjgQFmH",
  "key12": "3ENmdWrcxF4EpWEn6uojFbupqNKi9h1DrPeDVmip3d717EwoPQyAdyhiFnvNpLdRg1ncRNSTUbWt2hVEwHUM476m",
  "key13": "2DkQmmjVodo8Tmka4XVQg2xbkSwhrhycT3TMmb6cSiwMwc9mV3ftX2fCgMrcFNbXP4S42Yb6AKqeQtxbQ4wGSK98",
  "key14": "39ouLXSCfDAH8qtv5n1UZbkyUK2edVrbaFnBksMshADQVcyD7Xb3m9At14xGaNnGNLTvqX3Gwjzznx1Bhd5qoEfu",
  "key15": "WbP82Q7XZnYrik1De64i21sx1CWZ3zzWXZLyAU57r4RpTWfSJA6znxzbNz76ZP2GhtjUVs6FiSAeznhZgbFCjcR",
  "key16": "nUpoKdP5sYvE5yB1huDccLy2y26GWJSPaKnTzgjDAEej15ZAYpBckfd8QvxP83swycpp2YLcDzcLwFY2B8P9k3C",
  "key17": "q69dC9DTXcbsVYGxR26oqk3y1HdtH8bWi8QPdcso7zDdpobHRCAviNd2AqSeet5CcaMCSkjGVduoSb97mzHiPok",
  "key18": "2mJRtRYGDdGZZACKn6W5Zmbwe5QGF1SjQbPgQNvUnV4fQWiVnFe3LHqrfw3EoYksZACPHRbWdEeXzMfaLb2AeYAR",
  "key19": "5U5PZyt8mRnFcJd1Grunjuu8Kk4xnjL6QZ5TNAvxFJibqUBJn5ysQe9t8WwgqRvQ65TdVkh8Xm65XnkYcYqp1nfj",
  "key20": "48wpSBr7y4qjApJUtmphApPx99aMFcPQGtfRmuM3nwiDnWeqLY4f3Ygxqh82i2yDwarQu22nctki1Yh9rAuymeJi",
  "key21": "4VcczT6pA6cFnrGAgDgbGf9RpCw785iEaDNtQCfaqPB2NizZWxejhELAEJhep5LaTTJKJifBmshaGTUcdKmk1ZoD",
  "key22": "26tHxv1n5dErQBaBRZWhTfyf8Wqb9tPee19LMx372nMnURzUV4NJWCiHKotzfrUWgzwPbdrk9JNDENNfAuZQUhcx",
  "key23": "2wKL2NpsmbLyZij8fwghUFauPjY1NBkQxd2fnfMoNW8BuRCiYHMwnpvSDneM1qAgXRwtoksbNrxAacEHuHLYhdt2",
  "key24": "2ExiNcwTdTnFaCNQmMpQouMBL79ZU4zV3VknThjNx4xaC5MEUfUGW13y2KVEzMnxbmxteuuzgr24ouPkR8g5VL1t",
  "key25": "3WhhcTCLJMYXaN9xyEh5SxtCo9KbBSYfdsAjJhuXCoohfKJdDCrdfFT29LZkkyZG85zNyvMRB4UKdKYykKzKksk3",
  "key26": "4LepXvdM63Xc8Sn5yogpyL4zgwDgwg3TeBBNbNTq8SYnHfcGngRriv8iBaKfXfTU5ycfnkkw1K37HRv4JyMGszkS",
  "key27": "4pmjSKgVP1HU16mG95m9JAn5dUNuAonTXq3NwgF8M1f97Kj5cFUurRWjdmoYTFXwWimNRsNqi32MF8bGRGCsHci3",
  "key28": "3tbLhq1WDSSBREb7zq6ePkFC8ruNusSd4jvtTywCSJkrFfngfQQuYuayfgYqobPRytuLUsowvn4Hu1u8UZWoqi4c",
  "key29": "ZniaRPHtDFJpnLC8KieUg1w9KLCVnyse9jiyDS3ZjjyFmhBH3aR4yjJkcYSfKun1MdHxsnGemaD9sadbz9e4h1P",
  "key30": "5RQJvE6KJyrtsy6HGbtCed4QYkLHfoxqQ2vRwSQagmPCbRmnjGEsUSzAvm9LSrQzdCfpK4ZAsyuemEw9xh14VVKy",
  "key31": "42oFABHctMcvKNt56H4Zzod2ReoNVhQmPCgWSaaTrS9MmoogW2oFTHSxGp1dgK7Mr9fPUYHQ1FAerUnXSxLNSats",
  "key32": "4CuDpkU4tux7kFNqSZTwJdwJAh9bHH61JMz2MErMa1kYdqMSKgkh1WYTyN5TYocZfB6UQNRECAbSuqMXwAFnXBMs",
  "key33": "4LU6YRPsjhDYWbqjXQqXeokbRhwRgGJtSvuzT8WJNnWHvWVzrY5MS3SYrSP4kstDvNhy2dmwu2vKoEk5be9nur9Z",
  "key34": "2WVhSvjJk1AUN8VqTPpDxCNvfceutaYazLEhqtcBH3g2Yb8JvjcFwu54X9HqrS28ku6B9kfgjYNYcxUPiYySg9od",
  "key35": "avCDuK935AyTKoc3rh5GZakADmEntN6ZVDx2Zrt7zT3nwEg5Zwi3inLRZxc31tEtPf8UoYzfmumk7S9hMAKtub8",
  "key36": "4TVRtravy5Ncf6TvvEoSGMtvhzFDr1b5cPopHXnByZ1ReQ2juPt5wqzQ782x1ar6qTJ2tbhVRHTMNDzC1tuvyT7C"
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
