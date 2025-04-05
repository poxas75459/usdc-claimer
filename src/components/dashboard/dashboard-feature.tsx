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
    "2d4un1CtgrRJjgrxrYsiBRXchMoG8ih7nSyCHaKfwXfdcwjnFFbfh2DfH4NnMu5H2ETKbiyJjnFp9H9rK6rBEZvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64kjKCEQGiLWW65rW7cfRtJmj4PQGDWGY8DyGSZAvvnoHuMuPLhZbwapWQUC9z3y9d7Zbvhm61K2NSWmtbDipVvM",
  "key1": "2Y8vCXCPtkk2r3fTHMj69F88dgAeRFtLY5g5b8agjGUaCFPqEY4BM1M2ykP1MYinJ43xxBDXsw51eoqfSLwGzboo",
  "key2": "beYetLMyitXEji6kWFoPw9vRMXeKvCChtkZVpdw4BTpbp7eUFX3xEmHemDbD1MsfpWwnY56Jp5ri2zY7g9Dt3Lj",
  "key3": "Dv7WXWJAVBJsEjKfj2cykirWVxypLgjRRswA3R6AaJGNBTYRDcPu4ENrhvUr9MQyw6k7QkGjqWdvN6HjRDpi1k7",
  "key4": "2k8ycg4AaLkVtKAoXXAsoNb2RqDmSdbM1M5prX65LVzYTWG5seHc9Jn1nurEdUzsvGnwpSwBeV2oHu2LyiBda4Df",
  "key5": "4PeAshNc8vnTMAyFYeCiezqQbCJ3Wfn5PL6CcWvKJ35dJXYodV12gGpWTGY98rkfExQBkU8Hrqn7wkdb5duLqa64",
  "key6": "r44QkgAJyMdiuMiambuYKWZDLtTRFMLF49BhR2kMjR2VNJXi7D2qfJDu2oPbiqP2hhDMMPNnUNKBpV2b3QyNc6G",
  "key7": "2J55GCXPkAagizp6PPU6wPRu8aVsXm2hnP38biv7X29isK6KWTW8goFxtLH19uhz5R92Crbe4CBEYvdcLQ3VSBjP",
  "key8": "78drrjrrDoDGF9sZA8zNmA4phqV55YRzf19iHirfk4J5fNqSyqzyBXVgmrQpfiQkiVxxSD6UWXuALwFYaFozS5u",
  "key9": "HJkNSM6xvqGcF43pjn1jWajAqivxyFudjYW4zG2eGMf2tVsLzio45Hr46Yg7VUMvmgrLW6AuhLFAbCdp1ueuk1K",
  "key10": "5X6WXC6WpHXJDYy9RW1ze2WKYFgAb2w88hw8rBdFpQSGrJrg6hUFYRhqRzeY7PbnpE1C3VtjujTULWJzStDV1iwo",
  "key11": "Jb4KpoS3Ah85EBxBs2dSVfuG7smejBNM3R8rpTSiekZdBKruC8TLCTkHdLFDkjGqmh7pKEYRcyvj18j9TPLSwDP",
  "key12": "4NGCKCCe8yb5dJZ7Ugg9mM2RyTNXB6tL28VGC5BotXNh5P375jsmQXuR3cUNxEHg7ujR57p8aFazFVWeCFNJHqJ7",
  "key13": "55yjnyswngcKk7pAvHUE5DP2cKmyCxnjbe34DeX7ZJ623vQZHRpNqiGaLDb9oV12DYYJXpiPay9TsRxWBGuRrBBx",
  "key14": "2RAuCB3xKZhAkzA1LwVr4jm1fZfGKXrWPpXkbFhA6e5auBNCKUv2i5PsJuo9iuT2E8Zq4uZv1bc7d2NCQCQzeiZy",
  "key15": "3D9YvErXGu8zYzTWtehMJS67knc7pZyeZUrgLxkycjEXmrHnyaea1tUBYMw6vskcPUoUgpvF9QSmrEQ3ZP9RJSYH",
  "key16": "3Dqa4TqsQrxxXDFDhYRsg4wendWB47U5hLUTaAK4juMG9cewREFdxYdz93Ny5DrREmXDiFm59hfgKZ6ThqB99f3c",
  "key17": "5CivmmwhKJbgCh56BhjcWFUHXdDxWtUnnuG5hiBJ5r2Ksw7BsR9HuptPZE9QbENbh4JHs2JaPyPNE15ZhqaXNnve",
  "key18": "31VaKU4v5Z7qj6GFfKp3zsnivtMzMdFKiYCcGUtyHo4AqmDqtyy5JfwT6GjCECX3Tjnq9evcyk8SdpeFS1sxMrYe",
  "key19": "5HmFGmmEXDeeYyZPu14E4wvTDDwEfviq8GhdyDFunJLUo7X6eSmYCvnAEiUQeSbczGGyVg3MiVUTcoqfxNut2DXN",
  "key20": "yKZ21A1QwDJm4L2aLenMkx8DPiT2dqAWJ2XZ8gS7eDTJVeBbSbWhFmUiWGpXJSnS5b9NSqKbjtP9WT9P5MrNV7C",
  "key21": "XePPWiaeudAjSSvhk8oby6icy5KccbxXXE641azmqQgTQdnbv5CoohcPBUVowBJjtgEkwRLLSJDm9o8cfb9MXxL",
  "key22": "387XoQ239nP7ayzkszN9yM9nQ27j8XLuZL7rms9epqPyMN7KVAPnCcTTpwE8B3qTZXLxwZYyMGB7XDn9ds6dVGpe",
  "key23": "3GcuBywBsmdUHyB9xMsCggCajnj1j3xrLTY4sYckdJv8fk4yizbNchpg2gdNgyjLhCUg4eRAW78AVeQtvzLWwm78",
  "key24": "4b2xDvEU2jn67dxe3totxS4gYyvbW2nkkkRKZMQeCcEF2eB9Lfw7vFD2kMmC775Fj4n81vQ8J7AGVJGW8MLSRDi4",
  "key25": "62cos8LVHkMoZ3ynoCWD3DcAUg6zWq1EBZkVjip2ecJM5MqxpQqawZGgxncGTEWcp9MiPMtTN3GUZise4ccx8ZWm",
  "key26": "31Yrbhi1fbRV8op96Qt3e9qLomqRaPy6dvcMvWDLR4SUhNcnMfXYxJYHpMQZcDAcbyvd9WthpukmFLSLw9wTspw8",
  "key27": "5mvFaBW45jb9ESkPToAC2zC7zyYQaFHWE2eBvoouSrHd9jXtiq7AMHVncQUocgNc357T5vD3LS2BnBn9CVsNsiU2",
  "key28": "2AqpWP11UygPG2Rhksv5sjjmtSZZPdeCJWpMWp7sThZm5SwGSG6dfw2mqBKQ2H4SDgwR7w4TBQt5c9R489M9Jyzk",
  "key29": "5277svhJLAP8pC8ec6hhe65bwkeapR29KHMBpeMgtt9pNu4CG86UjnHEpwSceCQ2Zkvo6XFSaKyx7YKRNrJZvmxE",
  "key30": "3aF5Qa4DxmX4gzEvDfLNsXKDA5hYbcBJVd4GuopTZUSMpKL4HC1QWfU2aE5mNykb2JuDxedWTDiD59LJixJqiSXc"
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
