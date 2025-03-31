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
    "5hbHQB9iKmDZSfTgjhYMy19eQ6jLZ6GMhfUhjiasXQrcw9ZqLbQPBBUjDt7xCj5cwJRrZsRXeHprmDvNdDPJr8Yv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zatwtvRYvoAmZte52gxGaFPNRerLdmXH2ePwtaQfMTHh2SQH43zrMHoypaTjEuxX2L3Dp1inPDPbZSGfWDLABf5",
  "key1": "2qmMKw95xNnYFnr9jCpWmudpee7SqLSeFf8gFo1VF1f9z8ygk5CtfADvmRXH2ViXGgmzGeG33aZYprYNDBSL8VYN",
  "key2": "3L87YzabfGtJpvn98xb2Xqz4iFskjqNm87Hgmv7U24dvzB8j47fbrUD6oBDwbBLCWpLtACEhQSMCtG7Q6LoCP5da",
  "key3": "25WTRdsp8kMsLYxEcyxRdVpXyYYfEoaRNnGjMYtuEB8rXjEQ1JhHRGFfom3TGqjMpVMznSddJaN5mz5rZagzd2Zz",
  "key4": "61kS2bfKv2WWgXhgnZbPFetFFq5yarPhzR6yrqfhpS1R1JyN69CmuUxDrQZE13NXpZtd6m8kywLd7pgMk4a9oq9A",
  "key5": "kGoSwzTbr7LukufmxN7uC3edLPz98f2ssEDuWsbfN8qHuqEfLtTPKMejtbqgxkZNUPEe3nLAXYsC3em4HU5H13t",
  "key6": "52Qae3Q6X4wv1Jx4F9wvmNv8UDh59GqdZMeJMPR6gGGXyaJSk9QGipLVBVznigMMokxqM1oYpnqGbWsdJatetmG5",
  "key7": "3764yoMXujbzVUNNRy4BzxjuCPeaXyhbcr7MnZGrFLDHNg67xEe9YjM3vdvoTqbytaPkX5qQbVT449x36WSLR3S",
  "key8": "31LCTRbzF3vEpRThqM219YHjrinBRNp7Q2Tp4f5ZU5BLe3NWPpQnGvwuTKJbDWL6YMvvsGgTj1KubK5utnUTd4ET",
  "key9": "4TuzWxK9oH6nbAuu1R3hcBfSeTRj9bcrCifhtDmtjXPsRQvNETaAqDeX1gPRhoD4bfSGm9Txm3CrWyems7nYpQDe",
  "key10": "VbPyZUYxsrnkf6QCDbXh8FkU5piz2QVB3iVNxtihnpxkZYZ4ETcRp474RPU8cr1NuoL8hDjL1622FKnueVWTczR",
  "key11": "5uq2T8cvntvr6irrMtpmD5FAdKNKjnjSFcgTZcNzaAusQZ63nZTiZKzF49BUKqP64PoiD8k8YnDQi2XXEteUpWDe",
  "key12": "3Xz1KjiC4qF9BtcbuLqxkJdhuHeLy5uLCvy48PkMhsDGJk1sNTbomWCTa13TQ37pFZ2XVRM6o115ATQg2zVGRkMR",
  "key13": "fMQUTWudZUPBGPvZAEp5VQWaNFHWt4EJAtiTgzdJCER63sRRznBjxdqxa6yeYUT5crCXXeT1RjPF53xMWdXUrR8",
  "key14": "5HtiqVMUyJcMghLj4gsLJFvN36n3TPUpG6nLduN9BCGk6XjVBxepmKdd3DbA4FiuBFN2rUF5hiZUqBEmFpz24b9i",
  "key15": "3aHZkXPwQZrTHTfnFPCgVB2uMyD4ta8teQugYZnpcZUAAASD3xUPkDAQ92KSPbAfVHnKC7BGTv8jt9oiSVpmtLoQ",
  "key16": "3iAS66zDEyFFigiyE7VkwzUF4aB4MEsXAnDi4NX7HA4dg2EPRaKXqyjiMP1LVrrKvtKNJbkicTZ6Pg3z6E4UvpBe",
  "key17": "265rfrBK9frcgVGasaBvArSVgc6TQtWaGXm84EFYq9Jvoa4menzLukFS69R75GT4o18tmX21t1ATZxck9YQeMxh7",
  "key18": "3GvhjJAqNDJ4nbDJJ3VFKL4i2LUNEDjaWMp9EZrYDJU9aURuX3wPUkzSWpo64o1MdcdqJGjXERkNY84EmQbZyUPd",
  "key19": "4H13UUCpvCJtT5MeWCUHLpaeuU2KvyA6EbrLxbBXXUd1xPWJnEE9JKdhqLH69TT5gmqbU5CQHdryWQ1cZiGy5rmY",
  "key20": "2TuGvY5qYC3y2qgY3ihyCQha2T2dmyp1StUBMdDB19jEc4Hecuyf4Rg7mPMi8zd4f6P4NAdUoM7e4nUS46GiAG28",
  "key21": "4ehbkm7F3Jd6EFBh9xVUmiCBMhmWRW3pfUWvsmfvgbkoc17TVss9P6C4qiii1DABXqrdbo21rnnp1CyQRByXogtR",
  "key22": "4rBXPx6KAQZd3HUEH1GG1y1i4CQAbZzejgzUkezRi4vpe1XqCvZJWdV9NgbJ5jhVMwXJL2BdZSDu7xJBj3b4UApy",
  "key23": "3yo64xrBXAHydzUB3495pgHVDBrdnBN8WyFmQqpqt3gZV3PEipsfC3fcmcrHcENeQR6hXY2168GsJ49Gw8C5pnh5",
  "key24": "3YF66NQzmicSGVCu7qAARKFFhd8vN5DoebcTi8g12TiHGUbGgDR9zp12zk5dxLwXZ7YuWeZwiYw1VkWTddW7xjQS",
  "key25": "3U1qm4c65zXpqrJUHT7skKXWoDqDeiULrAPDtLGWVMpkjPsAmC9u6MmbYVbQ2nbniEKGqaXGdKqvMh7d49v5w7B1",
  "key26": "5YMC7MJ2NMq8KK5qjgucDf9Qx4GcBgZut8eZf8wH5bACt8QDtSQhmjW3nFNCfWbZUvMsuPfEd62S9oJmi6jfhKHg",
  "key27": "UhT8CGtM5Qyw1Y9jzdxhqH8JQfDUmV2GtCw2SBzYq5EuMtAB6Qg9GL8w2wABjRcNj7MYJ8JmtGExHt2J1MLBp8i",
  "key28": "3Zny6KpKR9iCFrF5e5197fXgCXGN7THgJZ3biNWZnj3EhhYibCtj9xPCvsw9ZrNwaEcwimYD74wFom7SeQUZ9zvR",
  "key29": "3E3r1BRVZoNq964eMq1fPG3nW76J3zq5EubYF2TpyHPdwutjfNy8LEVbDivuSthDPq1wkmfFjmptDgA5mKH9RHBu",
  "key30": "eiZze5Vegbhd2fWMJ9eqQQVtwWrJdGPj8e7hFYSDPsheJAANrP9Dvf53hCNyUZ4PmExdsCD2PLjPrYJAdxFfYc9",
  "key31": "2EsmEWdsbmPJN6QJ6pApS5KEigyxSU3QcWw22vgWyTrZumZybiE7FESJQdD1ABK78gV6yGBx4Dhyr4pMFLuMPB4A",
  "key32": "3ZqtJFwdoWzUi2pJKXLxpq2A8XroMuwqwQF3FMFz9TvA64Hdq59uzFuPaQ1yARZ3dKeMD2Q1dSA3WKHLhJcjtGHk",
  "key33": "5wKVpg8dRUGSBdFYyPSx9y8whnL6zWTQEujHnsUZFymdCW2kfoshaAVehwvuvdWr6vbdaGYth9YHitUryHEzqvvC",
  "key34": "4kq5NBKLA2V4ozwMsVZemy4eBFEVsBw1rUUSMv6T3ufxZUtJxqv95pFjb5JNqTFpGU2kRdN5kAdyRFdQwBBYs2bV"
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
