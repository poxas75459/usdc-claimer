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
    "5iWzyC5DPcRgB4LpC3Mr6iLxo7uHL5p4zLePLvxgqPqpruzr6Cbu6HyMpLG71uh5s4n51dZRmAiqv4o3FApnEMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zpyyxCE7ciurNtX3FykfmCMsrkAorDAWSuxn36jihxvnyUJeYRV1Y3PG96AEwFQHuhS4RQJGzkcGFqYAiarJUWw",
  "key1": "4K5tmWUCDA6SqE922SZ7m4Cg5BEBCejgKRD2kkhZoTBysMCHYgLQBHviZwgQwchVY4oSsLWk2aFzkmuCQjLQggPQ",
  "key2": "4S9HpmzfyPKG2c5VQhxLnsXZnTUHk5N4g7EkcUwJh8dRHrDeWAADAjhHHjEA5R4A14BKwX4bDALqW64xx3DGFeE9",
  "key3": "3CpVabHB25VMZvWbbW2LqRuW2Kaaz3VvKvrCJ7N8YWPeUVipdkcaQTHPm4yxdphJsViGVE4bE59TtTHGre47V7d4",
  "key4": "43qrAPCfHKiqwrBrcrbaBW1Jr9fZVNipXr9PPocB4ZnqTPntAnPJ1zmZfVq33gmsiwa9wTiyRExq7xeYSFtxTQf3",
  "key5": "59rwH6aYS3dFrxVxjc6CoLKTnWNKrsFyFcHE9VsiyezVgMSXH4vj778yoqYnLMtjPtrZGpkzjgpENu3JgxvpEPqC",
  "key6": "2A12iofQTXtpiLfamQMZM3fm9rRjGrmVrZbbbhQUp44K2dLxjqnDYC8JruPjrHyL4mBmoup2rTU8LCS3ia5pKckH",
  "key7": "V1pBkfXyhbhWFnCYgbXdAdM6kDrXygrLwrYhYYGEZFJfb9RCU2SxcnVKrS7AfbZfqffwdZ4fXgPkWUyeotF6FcF",
  "key8": "4Qqc15S9HMwmoYuev86suW4GufSRKt4m6AybQp26KBZtg7YtX6vk13mbnkwfG7iXMhdny89BLBMs9d6gvVJvsP51",
  "key9": "4pMT5s4jSSZ1okeV51md2v33r5NYfuRRJyLzbweGqamoy4XkTARg3hefnNRTgUtouwAbAYP9vjw4yXrA1uugsaRJ",
  "key10": "5v5rarb6svhUvnbeKWpQg7Qha6t1Qn9AnupmBERTnqmfmhy3gUpfjmB61z3iLcCCDCaVR7iqt6p7deCx7hep1tsv",
  "key11": "4WqaJxcoaCK7sQjCk9EYvKFgPrZyqJvizhXxNnEibM1Dt7HkXVe1wyNGqbkLRbboMDKi9sc3GU48LARu1uLuQJYs",
  "key12": "2AdqJ8dHH64PefKAWs4rTxBKpv8x1ryo9LgEXJTYcSCRcC9VvDnFnh8qaB4mdpNmb8DCrmmTuz9jLYgk5dkX2j5s",
  "key13": "4FjpoSVZeqtF47GSg7wLSgfWWC5XMJL2xZJ8VVJx7NusrWZ7PtCNe4HqcseBUrZHGZXL25V532j1G1CW1zTxrp71",
  "key14": "BnjTJdzivHxCk5Wnijn4djSy4pVkDcntP92p2rYtvg2T1S7tLUpfB1NQd76NHrvAHoFYp3gSFXy42sC2CavA5jZ",
  "key15": "Uciq2mZZrs7kWACjHQSospveeMk4S4g6ia4yCqyfsANHnEFyzcJKHF73b4LnR57Am29iHLrXYi7td7JuYBURESP",
  "key16": "2exKTu84oDbLi8XStDAbpFhXFL97T9i4mUK6rPkbEzUPnTdy7hcuptGdZWfo8pPBgv4Q9HJh1qoPBFv85nqpJ1Mm",
  "key17": "2XFRgRcZfUbAE85fz9dDrzk583ZkXbvYFemSpWZ7WfbnAXFSnKAujATDmDDe24pzFrJ4QW9JKQcfpHTpCjXDrmvA",
  "key18": "oZBQ2fwbs1Jejz7LrY6TC3aXGhZQcMxnVhBCfNVCzoQSudg8acSYYnDkQeUYDBH94qxVx1NQH5EVPbgvvuuWFt6",
  "key19": "2yBjqM4Ruj25T85pVfVyju4gQV1g5Unwdj27vCrn5tGGSYXuzYQR99QpsiJDUwnCH9FYh2o7V1SeEwd1zkVHyjUs",
  "key20": "3tL9hYvcZz4kUsorb34z83yQHw9Xvc6msTChiavPU9bCZVbtxNjCmbzEerWsbWmmyHtdG3rvdNy2dJPTQFr4mXA5",
  "key21": "2etvkxKbQZi4AdxWmCtvMCWbgY2mNmMzJnp3HyFawR5TZEPdaRYGHmRdjvri2xnJBHEQakC8HsivKgquCPbee3J3",
  "key22": "WxkSmz33fxHfiAD11QGYpEwdr7AJBQCefidZcbgtfEsTadhsaBZCZWgWVrKhmZ8Rm4t6XTVHqCqZxmUWTWrRwqP",
  "key23": "2aCrPwXNXfeBxgGE36wRQXa8UJhKRbJqexGiZcUPckPZjMeetwvDDsZYrmt1W3CThqRxp5sK5YCHSM3EMKhp7J2h",
  "key24": "E5gq5WCtkByQHbtCxTt1PyVvVsMJeVoPLA83QpUAZzmcaim4qFcoJ9nFoRbiCJiV48sb2vEHcteavqCF8qnNYTy",
  "key25": "2N43cqESfu4zqfW6aTiARFAjNVzDsiiuSRd9CVfFmdEGRzHuC7iRmLv4DCawhNRjPtGg9VMS12949sWSaJvvSPNW",
  "key26": "5ddD7GZWwqWPENiVNL5WEuz32YNPoiZDw1QqJEDWd5gkBBGcJNncEJpvhMnbGfajw1Sigs225thbEuvbyYW4JiDB",
  "key27": "5A7CDidG2LkSPiK5ZD7sH2CRWtSBWFNtjmYp5ZW85iFY9vfHGuBaw8mFr54rvfKiLkFLzvYcN6VboQuYycnancBh",
  "key28": "317NAy12UZ9T6QbSYxBpHvCBJcwsbb9m5n3oVXB1nH58cLueQTrRr7KmVRejekQg71XJoGmDAkqSBERKDqTTADh4",
  "key29": "kEAWt9MzgRNS5GSda3wiJQvZuDxZzrCkxNuD3mNvLsWNQWzpofdMpNw7dj8indqDVzTr2s7XTxL5KuB6P1DxdjS",
  "key30": "ie8neLrxjy2cejrinzwQAecwNh2wpMcViby8qNM8VdVuZgMqCpCZHvE9JX3BqCYuj8JN8V3xPeVCkxT55BmdKRb",
  "key31": "3vNKhUSYxAaroTfe2kyHKCZe75Wc6R2425vvx4mqUUQSGvDE5EZgcvJsTQUsyCkf5fZNrks7oyt1eNaCHbKbNqAh",
  "key32": "5odatFYthrV7CmPhyoJesotg6Bej8ddfSmExZcqVcS7omDD1ntXhCNhBMgwPjNffjY33tijPzfTfyHm63pHXq39e",
  "key33": "21wYoGhhYVAFquDDENqnAzVagbNpin5VKPRKaPtnnop9AKAzf7bZ8xh3uJraw7Gv75c1S2zh12n59vabQeZT8vzm",
  "key34": "2mpAnR4Rg4AdHn4vU76ukcNNfTiVYE9AyFvmZbBSsC1Khb39dPhyNULXYPtowEUukFkKxNEh7DENpdjDxZcZr2aB"
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
