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
    "4V73AyEaYFnFvfNVKsPpCD2J7pdLmcybN9eUw89fnxoMBDFhKXZLKaAJBNeoFG73U2PgNKn374h59wX2t6vMVsHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JGJde254gQMeYqcM2ak2hyR2xaoLAfuHex8vFPiWyuyykyWkLQTEbWPMPF1JrxqWZwLXZxUME9ujbCdoNtFPezh",
  "key1": "5vYEso6hDpZcBHZeKSAdBqwZj9NojASMtCQ61pSa1YyNfFRsKeHcwyV53GeaYkpyujZnqt2D5CKt2pVTftEeUSff",
  "key2": "5vcSE3NG9BH2nprDHWPDk4Me6Qhv9nobHeFhP9jyHjpe31h6G5epkmMePMUe5TbYV7WurmWz8gA6jF89sGBRSGUB",
  "key3": "U2YtyDwcmnhHN2TpKifw2CNcGa6nQ2eAKmv8A1AV9oM65nNdFqoTff3jxGFurvKKMsSYMjMtCRH8DLgh7icgoBB",
  "key4": "Z96q73aEuuzNszmFUkfES4hus1amCGTgwQifFRgAhAbRoZstzgrovbhGhCLDtvKTP6e1FbspycPDwHmLtor3Ev4",
  "key5": "25TGcsfMomwPbdZjeoa8MHWftAtcZv9WPBse1VUAR4MQpUfA7MWuNx5BnhdqmqDGBhCh4YueaeaEi1tqgnvTS5F5",
  "key6": "5nbjK93ryNXasa8ybpjmZomspzfVWcrRvDqAFnQWkwubkLoZXx4UX7CyGEt8fEHtYExY18Lgt7YZy2zLXN1bpWNX",
  "key7": "2DLATb2UUwPS6nFe7FFCXBVgzRudLbnRF9RmaGosEkMT1n8wPTaiEwLzKDvPRvgEJJViRaq7sSFvKATJSb3BKXsf",
  "key8": "5kNspa4XC87mE3VG3qokBEWmm5VGuYhXzLxwy1e6m9WSH3kVSUtrRdjBU4Tt1ViLj8AAN9b2nqGNRY1gVY7TRyNj",
  "key9": "5BQrCsUvrSLhxTqoPvDR4uniJgi9ex3yx59GNuouNPAvnsbwszApHmfqJAprYLfwFFRXo3MXsDxtarRkSFkFsMvV",
  "key10": "5xbMjpL7Na6PQjUiUxsPYnEQgk1cLLUKBpfqYu2c9uMjwKenvKzXQrr554ZzhAhJZ9rQpSab54p282rRgSErYiNW",
  "key11": "DDFK7LmxVx6EqdK6s2iEubVPVSQ5VKoAv5YjQsvkdJLrP3DLxoiFdebxQyKkZcDbgFYhorP5dwG6T7cFFU6JwcE",
  "key12": "42nJZb6GCvkKyHurxRBCgyyyhDhsM995zUrLqTT4oEMYMGBhMWreHp7RJYxiSQWEYACyurm7V2xkPVtBS74hLUwu",
  "key13": "SAKR3hkZTraAq6BEEw8ihHYSgjjzsYUZYY4LDkUk1nLRFFA8nCs89rK3epdYz9UbVDVV2H9dWHKEKYBia3smNnd",
  "key14": "5gchJSyY6zR6Xwz3zZcMriuE8bjiQV3QE7zoez4sNyXqv63xCHPry8RDydrJY6cV1dj7Luy3bwVPai9H3xDtWvpf",
  "key15": "4VYKHujbg72QoU5h9rNekrHTn8c4gcLukAqx79bXQ8gKJBTA4FpG88boNDfbLfNjCDcXvkuvBgfgAcsBCRtnEqUE",
  "key16": "4BNnfgijVDjsCu7SW733prGKuc4PMVmvTnrHoPiWo3gXTexevwWurhxnfvhNwRYQSpQEBiE6gwfaYEndtGD3DYZ3",
  "key17": "5eFZo2agoXgqm5PgDh7xsYaGDBkC6uTmqWwyrSxkPDAf1B3vPXRocdUKm5FJTPKPipd4oAzyKaAtcdohpa6ik8ND",
  "key18": "3TqDBAs6CGf3ckqzGfszDmiQvXasmAMbHLepYMN3eGk3jEL51FHEEX3zdqeTA5vhr8caExxGC5z3TuchrMaeCauS",
  "key19": "2o8tHReqBjrjS35KTUJ9dDAPMxjKxmwAQY3DkakqrGhLar4VTzTocny8KfpCzTRXokuW6ZWR1exvQXEHiWW2sffU",
  "key20": "4ifYT9vLTEb3GdNfehQCqiMiDdFJMDDUDxKZnwdmeHyvNu3rbNa2KTGeuyjgEjk75JinHhL5fzZin5y4XuKybiuZ",
  "key21": "5JAQjufTKgw36oJL7GcjkawvrHPrWdVJW8b4ZxPysYWKWuDAarmjB5mRMupAnK3Xj4okdvadbjJenSNET54iVdcP",
  "key22": "26cnfE7T1R2A8J3ZEJAzqQRFhJ1P2yGPrayXFZAY3hy5FE4bVCQ1SYnSTCcQ7Yk4eYiGxmRvGoNJmBUYCgHrYkP8",
  "key23": "4wTuqcoikoCpZqp2hEVrB34N9AxRPZ9FSUnLSEAaLFwSL5AFgnSnBLZwCF7nX7vD3MFXhJrRp7UvPH3FncTszmY9",
  "key24": "5QSb9JgigBzBak7dJPRj2FRupz1hGMAED2rHes9ACJcCLBrQPaVp3apiag1wEWiwD7QeKQPHP25qVDETecU9koG3",
  "key25": "2NEgnoonj25sGvxXL36YU3APPnKFEgj2c7N3LwECM3M65BugmKcxgA47PqqiUJY86ExTk7AeG4P5RG4nL3DQky2o",
  "key26": "4PBhy7ZRiSV3nnTX7VryoZkHWMBSLxi4igsciVAU2EnZJDrN6YakTVcnAo32osz2bokTqPBYhY35KbfD3CNw6oCt",
  "key27": "4Ni8RP3zA15Qh8K1s8vh2xpsa3qw7HPzPcnueHmQPRoYzjkb8mChYNS1GjYJ5tGfv9aWYM3WRvDLZJ9eDNAF1GYL",
  "key28": "2LRt79i7yBBbqsa37uaJTNK7T2SUpqFNqLoKEjfSrxW1te3nu9F6XrEPbjkCzNavo7Ps7doJisunXUrr1LHX7ij2",
  "key29": "3pHu4uxzYWRjULBpJv4ewXVNgfSM5UMZasfjh6T3iPSQEux9jZopPZPdJrVRejAwvg83PxMQ1Ty4PTQJrxR9HCXE",
  "key30": "3TfUw6ZSvkyeASi57Z1nknJDQ3KFDjHRDC71BFnF2HV44dAzVN3eAwS34QkLoxh6MUaXjDtDHuzDe7yXJdDAnmTL",
  "key31": "dQLdCZhzhFasTgURxcVXrp5ywmLZaATm2i87T3UxMx9bmKzgTjJCcJir3hCHhPKrhdDo8aUhTv9qF8v9ah5AZM5",
  "key32": "2v18kWvzPPGKnLLXVb9gt6BDZcGR38Byf352RGeW6AwVA3VvnK6h6C1SH5tMTmToLUfF1QLM2Fb3HVwva9Ar5HzV"
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
