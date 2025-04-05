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
    "R1aUekCBLyjQGzSVbQVHq4G1KtBWVnEgTVKdPF1wwXrRUWXrEMvr1ci2RqhkAy7pCtpxR89WPeybrknQb2wv8Hh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3StUFVVh6kQBMJWq8Gaej2TwqNCvzFq1o4FPwxfFnp92hjzodwTcFaZz3yC368hwZbC3pqHyCWnpnmNjJdw3tDet",
  "key1": "4CVrCSrorP3HDKhtU5iwvUA6SiVfMPtkVY2ZVigX5PboS2H15MAfVKfqn2ZGYWQfHxbqhjn4hJ6JzukR2iSVvJ6F",
  "key2": "KDuQ97biLQSgVGJgt4sPUyF52r8qYR2w3tTy5cUAimQyXH7jTc9VcQAv3MwJmbLXCKeFbnMsS76TcCawwkZn7Ya",
  "key3": "4PD8yRYpNt3uEY9xrz11i48HNAkfZEWPuBe2s1Bvje6baUhzXN9v2db6ZkmHbDf7g4qAKTARJaZix3zsHaF8nY7s",
  "key4": "2mJAnyoygrg7yCKeHk3R2qsk7i2pzfKYEXTxo8VFTGE9hmG7eDig6M6FNkiKfsaxXvFLZLCoV46eZrTU4Wu9WeAL",
  "key5": "4LmFqsW6ZtWSkZD5tEC6poo6NAvy5uAc2wyUqanSZtwGqaSqvZVHUmTdzjy63XbKLA9mbR5R677dXJBLzTtNrVBt",
  "key6": "39gJj993nstUaczZ6zP8FChcr5t44GFfQo5Mdo4pc1bQnyAksWQ4mzt1K6n1fvJMns7j2aPF1AvgPWDTAUg3PKp5",
  "key7": "YpypnBBt4FHwTWA4UKt56uZppMFYz1oGj4C81CfDxqWMUzmwL9oNiQKVW2T3JUADMV74Po1LBR9HuHKGv56nbj3",
  "key8": "2Z5RHNZc4XkNP9ge4k5kb51ERWPtD71prhvPz4ZBesVrXyLocdeKRgS5imzpRzzVbh4LvZ6jBrGMvGpQHmdazETA",
  "key9": "5hrfNSCvXtZZcXnjMH87f2FNvGaBTz8UBEgcMSh484A4qp68hBCat5BEWqfvJh5SZnWpWH1H6VQGvRP9cKQhWAeY",
  "key10": "2eGXiks9iEojaUn6hQgAkDsvyqg5z3K2XTah2BJEspekPCQrtCTb1psZms65qjZoS2zLJ9MFYweuuZkeu2w8H58f",
  "key11": "1MWhWpcChmJ2E7ihwqXGRLPmhjrdYpKZpmmiBGk2uiwuwsp6jDfpwJNEkAciLaWqqs3wWPwL2PXi2CAvmyQDZRw",
  "key12": "3QKjE6AC6y9CL1HzWJdn5zyMteZb4KniYMbQoL4uNrwbPFhhgjo8zvPtSzTmko6zMS2DFemt4Tx6AbU8LHcPCZjn",
  "key13": "41jQBLfMf2rzZTKmuVMktUGpvJepg8Cejn75BNXEP7dzjDBJjGjAMAV7GozujMLiKD4TDHmNCYAWwnAzbeGCQFn4",
  "key14": "24ho2RoztbW2bwV8D2t7fvzPHHrPuY8ADFGEkpZYbygLzbs3ciHxwJEKRRexmvsWQjvimbxVRSDy9vVta4VtDXwc",
  "key15": "49grhoZSJMPD4kc2RPhWkWdTU1rJkeVyP2fU3BiRmVMGde3J5GF4yy8ruWcW8ZejxnE7tyVnFZ8Q7sksyUeN4q67",
  "key16": "4gxUXtxbu1anieADkRqhV9fmSMKuWYoc1EKaeaWmR5dmrbmCw2ueGJqvNJdtbUpPKgiYACR5bq5A68uc2TyAEWJu",
  "key17": "3zbSXcmvoUckVMXAh9x4m4qjywGJnzB1mML85VKWWuuzit4gh2Xw758YrKQkALVsbdkudSzyH2mBwWrMjSxYfvep",
  "key18": "5rwcBCxiysMfT18jCy1Wp1tnYvZEakeF7mHRRt3EXENs863cTJBrH9zZr5roJjue5qzCjSVY797UT63FEeadH7iK",
  "key19": "5eonkURKSsdAmdJTa6jiocTdQNBDwppbaKfLS2HvcaZxPANtRmHYmF57yscqcNtgwUFHNM3KmQcNoRrrakru5xDn",
  "key20": "2CsE4PTTp2PByRag44WnPSRjMeCjnCPjUkj59deAkjRR99NokSkYcGPRWgaeTB36XUgMRrazP5VJ48oWdX8a5hz3",
  "key21": "53C1fr7UHAve9n44jZ6FdTiRQxVgDx8Fpoksi7b3qGWA8P8yKT3jUbTWDMkL46mswynnKm4GeakLPBBRMDq8cDLL",
  "key22": "2KokFqs6XvpX7BEJHVhdafvvxZE4z6TFTqtsieuQ2ZcgMiZPjVoo5v5A2zxeEHZNe1emyKMGUeVmSpcQ6taLiBHt",
  "key23": "263pU6np1Fau5eVY6KkGnxjneHuGuQqJYNcWzCwmFVnJLQ2pNAurrW6PvMp92wt9j79WzsLoWdWP494cVos3zik1",
  "key24": "3aWDnxDXfKkhWdMvuEwaKoX2XwgUPG6AiHCe2Z2gAgBMNKDormDeDdy7d9hUh9n8Gwoz5ria43h7fcagkFYYD9Wh",
  "key25": "4ZCEdc6fiRXSRaPHwgZFsUjrVsUUig2gaRp5XdyVRH8bQeY1wmELTtB9PNib6phPEJNpwx52uqpj6CrNnmG5V81e",
  "key26": "2z77pVpye6at6RisE4JCpvoX1KAzESpCp3MsYVYE9HCFHM8RG18Wc1zPGEAuEn6JgGPytoFdNYWqVRPa8HM2bmdx",
  "key27": "AaUtyfrHkJo8eT7A9rDwijUzrdrseHiFex6mDkNWnxxC8LLqbSG6uad4kFWEwZmUM5C7GfGw4T4HAzL9kQfoAsV",
  "key28": "32z9PE6KeuFgW3gnr6xpfNcrUD62eTQPjkJqMXbdSuit4SFxWyY8zuR9d2P18bFC1yHuuoPjsRAMv1PLGDeeueEn",
  "key29": "SxcukLR95jgFFcFgnPStkZr4HYEeekXSG93m5EuXuhUYEANgy8K3LxY1Z7uZbXURNzEpgqs1obMFaiRmfp6xeVe",
  "key30": "4vyFmwU7ryME2PwS6pEF1JdQW6GQowYpB6c9KEsLXUnXAe8T1FqMtThNATmNJ3d6e2PNPVnWWLEt7b9Lgix68VZ1",
  "key31": "43HMhhGTQZqLnHNhWSVMMNptoGxZkgui3i7QWRMCjFP4a7DReNT2wER9GMpB1vvw5ABtjHMSh8gfyFdMsFzwYcGt",
  "key32": "3KNNGtxBKjJCDbh79tNj9qNuN7E11MBbQG75XD2GMujhBYF9yksHHcrAAMw1VprAD3Fzyg1BA2oMExvV5HeXPuUU",
  "key33": "5P1wqe5pEDYtEjwaY9DkYvQvVQFBaKXBZ2oKhaott8u1MZkXxBWxr5tY6YeJ1xzrPmFsXaUMF2RM1THo1bXTwuXu",
  "key34": "2ak6sZ2SV54ZufUi4PubHVNAy9dm9kMoV6un5dtHb4dZWKGPoxUZ4E3juG6sJ3Tf1DyiJVtzey1zVgTo3PdGgFCe",
  "key35": "49FdcV6nKoVviiMH1JeNz6S3hGYhPA6G1cP31YbYgm5H7FJRYfVr5wjWk2qf9zaF7ZtYEEJfmuH3u26bhkpTdNVu"
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
