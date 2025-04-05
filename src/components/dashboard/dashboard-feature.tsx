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
    "3bHy1JfDdLT5abRs3dAw1bjFv19qBoJRUTeDrRucvwnDpBjmUuC6vpEZPrN3hqTQsxpRdVTCyBVXL37vAmBGnqhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KBWUbJQiTFkMiR5Gk7ytpVYR25C1691k1r3kUHtw98ihH8NKw8woFbfWTKdFhhaBxfjZbLfiVP5G2Be6TbqwKaB",
  "key1": "4wGVjj5a1cVYEQW9jZGtK8baR5rDVHYmLiDWaXJoB38isV9Mjp7G1QkxybZGPQqJpbJvNELXxz9W6MjFSy62T5N2",
  "key2": "451jaxq1Gw3Md9u6ns7aGBEN39ZQzB5LxJvyn8tYHnypRsKuTMMvTsrcJxW6jQxDjpJSNAuVFiGJsoYHF8gJnC78",
  "key3": "2NLpmAEqWneQQWexUu1hrtpn7HW4NmiDJbWQ2zyDumzZifW1p77WpcYDNPmWT4XMadFwBRZbL2NcEomEjfdQA22S",
  "key4": "AzNvbBjMxQWjkUVu4McJNhAiqymU2vZUWJPamUsAzTUgcxUTUrD4bKjYdyTWAdxzxz4itkHmQ7Q49bEbQpAD8v9",
  "key5": "3jDEjxV22W7pkGjrzCCEndcQZp6KPie9fGYZgYBSKz1ULsdc14EjxQFgUQuG491yLoVRxHVjacChq166fnL7P3t9",
  "key6": "4A31qPvsuNPQ5HwvWNxZv3V6wa7q3wukrmUiFe7Bk8zhBbZhMb9MTC11Li1SbYA58qRGk9Pkt3NSAoPUPV1VrH4U",
  "key7": "2V73U7wwCCkMm9sg9c1Y8r4vcHQC5WwPvXewsLDBaUBVFqDWw7971pm52RXh4bGWDYDKsukjFxgjCuKe8ESysABA",
  "key8": "4EfSAj4WAJdqKi3656m8XsrZSyawvSzJ6ZM41rnWx6Mk8y6RURfYE8pvu9MzkHsk39pFfNWDxVGjWDrkJ4PjRMFe",
  "key9": "3dHKKoccF78QGZr7HaoFe2xdmU7mwZDivG6TsJNLpBrbo67VM6ksXEe5BEGBSZH2rf3jPhestQLEMcArXEtaGsRN",
  "key10": "4t9pZDoBvRK4zJUaeu3NaZFeQdu5QtX7z63fYE92qHaQZ36icCYDGtoAmWLYCirQEmtY3Jmb2r9B8B9WZfQrWKpx",
  "key11": "3Rx8W1euGnH3j7bpBFvMkq3GV92PdzfgmupHKfLjFqKwqQDdvZXrEeg3WqYrihbW42ZX6rvybw8xovChHLW7mtFL",
  "key12": "3Q7GH7fbXinfUy3iSrY5UPq9zEHqTXB4AzsJ4XpCQMMxMya7uUxGaWTkzzPPbYEHk5UPs2o9dBfAWB5sNHGUsaf1",
  "key13": "222yASHF4FH8rBfAyKaNFejiNWb58eckUowqkYVppbnhcsLam7AdPoifWyFZQeHBgw5WdWqRg8sxkphXDfVNt6TV",
  "key14": "22k6js8sb86xk2ZfumUaAxwFoPoFyQyZsBqdkgYdzs5YtvyyfJmYxJYVm1rJE2vkJEDoxb16oi4BNRgey946PiCw",
  "key15": "2vwQBgv93fR1x7babzryQuNGUrF48L1fbhcqZ8q1VnngZLSo8T8y2atb8YvX4pki9DmgRY768dmPbhXu5HRZiQis",
  "key16": "s5ep2nCHB1fNqG8jUVq4yrPbHzWEbsStee5b1kibRAqaV1kngi8uJuGANfcQj88qwHAEP12nQBfd2uZ3qq8PXxv",
  "key17": "2u5PGW7HGx53XLVjDNtp1JQFKDtExJYa77zmyfLVHVmPQRUDzAbXCgAszgK3L1oYskweb2Ttr35BaJ2TgNqvvkWN",
  "key18": "3sUt3K4b1iYGFym6XBJqx3RUgbGrk1Jfc6TydMrnG5bZsddvRNDX8YC1NQceWggqDTDHgGRiSMUoa5LKgeGpJpwb",
  "key19": "U5jQHj7GnZ65GDYAR3dVsHt47AsJbaGxXvef1ejeujRnceHhLf3WFCa3a4iTtfBfUMcEaX8WuhBvg5HCy71vVap",
  "key20": "5zs6rxA6SmQw4VyFTJUJgtbBEEHQ72hmctbRwfs41QXSPZXRiC5CKj8g8Tac8A72in6Qs36jtMoRgZ1CdTPjEqRX",
  "key21": "5BFtvBKXAJnJ8sAZB4MqgbpCv1uDyZUp2kS2poF961EWxdRcXVW44QkADjffdp8iU4rxPXeMvLsNyQE8uWdTRn2B",
  "key22": "4FR16oNEHCTqFRsiyYS6R2CFdUZMLCPyzjCtSy2EKXh7DPoWTGzmPnYuBNYdC1p67xExw6GCSrgiPemzF8fCDh8c",
  "key23": "2PGJoAoZotSRSHwUmy1QGBsQtqkQobHDUVgmoXKa9AAsiohfjFuPuWE5ZT3rmM1QsMCaPZG5gV3K9E2J6SuxRcX6",
  "key24": "5T9TtykSLKirb5TAzMsir1uFhAGLvQE2AHJx8jqx344o1DhMja2Lq5jTjf65dUZ6EXpV8cRnck5KnGsWF6Avs6kc",
  "key25": "4LNy5wHBpkL9eboYHGAHQLB28VYRKu9hCi4u56U7pnUS6hwzUb3M77m33Zc3F2pFUyTiLKQ8XgYs8TSawEZvS5wD",
  "key26": "5wvzj7HYHRLMSfNKSrN4WgWignSFugurpzYGB4dbGHsWiTQLGW7ett5jk7boXMof6uH7jH8My2QL6yr6nFDo7zb4",
  "key27": "5LQMMPWdZabwEnHQJ1Ak1jGVbjCTCEAxDPMhE2h25HCKW8aDy7rzpAcoMx6huJF1iELFbgxhGGH9RDaekStEBedk",
  "key28": "5YAGbYyHbeTVzPtHF4K5BBzHnNF8Z6VnNY2PYXSkGuEJShJEQHaVfCV7ykVQ2dfTJfD6XQjWRQAsBpqXF3WXGuN9",
  "key29": "2TXxL5NZ1ZS3KdvWuHCt1Jd76Dm9wa1B9y1HQinw9o7nd8V7FquhqWXxrRBnykJ28ePjku6Rc6NdXh8NeQCRxPiY",
  "key30": "2NxjWozT5P5TstF7X9yVLgZgR9P7AY46jizajTp19LkVQBVN8nTc9FDL2d63YHee9vqginU9VcR85HhZtEbSwESL",
  "key31": "2QZq3hUcaHRD9K1xMUu2DoEEAAzUFPyAjkRSTAUfQvLbH6T6JsPcPP9DkjT11UFqUm3GPoxQ3HNgbbfVRRTnkpjS",
  "key32": "3iGZasQQ64gjamyeoC8tngHeE4EW4HiY8ivzxWsPQrKMFQrZEEPcwgdgjjEtFqCo8NWX3uC1tMndVpEMy5fWELkN",
  "key33": "W8qmPUkCmr3xRWwRgudb8DHhhoZM6rAb1f5cupND7DQQNLmHtMSvJszz2pRUsJb5euU5KHuxA56gtmgQSueusK5",
  "key34": "2YLXn8WURrRNzG83ZF3jdLJo9qm6eJURAe5bPbH6Av5hDtUJEr1p7gGSZKHCcfrY7yJR1m8UhMYjyJx9EWXN7NUJ"
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
