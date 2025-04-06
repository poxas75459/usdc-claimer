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
    "3QyfwW3mP24VesXyaBtonH2DHta6iUjuivm7vJq5VaLNumtN89djk6WAXLTdUNvJ2yfmCktFvZadQGCYkJXmffmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "242DSbw4M5mjKhL7taodvoQ5BRWYi738vYXYKuy4LBBd4WFWrVsh1cExhZ4TC22fpXTa8JB6EqWuNWzRgiy7V4zj",
  "key1": "2PXm7jE9BUfvvQAwhv2Unwh68m7pkusdu3WUg6HXKzfmVmf9kJ5REFfJiT1fEXaJpnajRQUeP8tzdQEUjbQSMwc1",
  "key2": "4EdHjDKXjxn6y96kY3Ns67gLXUswzwp1XiBhM9oU3bskKcvXv6Jr6boDpeYoPKZMpt5rAs8ogpdsNsqRHZ6uWSLw",
  "key3": "4pG3Us99XSjfRQXvpiRVJC6SQ3fgT42LfzQuyXY1MCaHpz5sxxyZ1bGLm7aDwDrGedJcSwK7siQPGyBV7F3NTtXy",
  "key4": "5mSrJzpT5PCgvSu7fXCVY12Lb3s3S8inDssxr8ASkriBDzxkkRMazJUqzRLoZCdrCc6EVNSvGte2eaimFEvvUane",
  "key5": "2PrtDo3M3YTTFjPeLUPjzay2pMtMHSsLcP5YFdJZwMDWLR2K7J4FuDiaA1hxbfgDJsA4M3doFK2x3qTZVrNL38tp",
  "key6": "5izbdu8rcPRR5RQNkU71JNUqJYozr2tNxmQEuQVbrTiBFmD3ttSbi8K8QVayNVf7cqz73zhP1VRMoxWmUPhsCPo2",
  "key7": "5rUrZwbh4PcHhxJ316J1WH9Qhxg3FSu55NDGGP77WikRgoMcrLNbgDavr45a9JuBwJn1PFan537eQkoWXLQ6pBkE",
  "key8": "tAXYDqqTeTW3ApFkQ3Y1qKTvmWmiADkYGMbEJ8NVk8NUfk3Upywg3j4dMfYQhFRH4NEAtERgXEPxLeuLDHnrfRK",
  "key9": "2ffHMSuSqmfAFkHkycx2HtTqid124MUorb7StxwfCCGDyRDN57YMqodvbFP6tGXSSZhgY5SYVmYMKQCJ8ThjBoFu",
  "key10": "3itTyThmYSDFHD1ZrwHDWubZMSc2RUePAASJUnWh4F7jqPuwwUZMkHFNLYxx8bhbpr3uMvkPBXkKkgDMrnULXMhZ",
  "key11": "4EQm2QV6N1hPZKPcrjSVLgF3An9eqTtC9x821SysUfMcFZxZKsY36BsbBtuSHAmgRxVt6yZjrUgjGspkCNL6kTsD",
  "key12": "QRsNbK5QjZ1k59A1yV18i9XXb3oTGPkV3W1btu8ws2hWKHDhSk8rXtFpaMSQb1yW6P7oQfFxswpuiumegWiVFAJ",
  "key13": "3gYvycT8iuD6aoQBpDjMt4AUwr4c4ruWNaB9VvuPL7aCswWnYTeP5eNCc11oKfgkLRqxj4oiFKxkHX8PvLHvQ57c",
  "key14": "4qfySUsfcNGmfGNvZGRLHHsnmQ4ZBNmbRGfebb4QYJLGXQU6sutm1iFX62szjrY437nBQMa65w6sFqbvdRWVNXeP",
  "key15": "578AXGq64rELXGtxoXSMd7WAJxkaS1D4MSKGkHxgaqawUM9tzv1CxkSoAB9u8bd8ANKejonNaK5Z9PCw75uCZ4zy",
  "key16": "5HzBQwYSrRyqU54QLemo1Wr6RKJvcxhRkWNMLcxYhkvzAU9mxUkaotnmrDHWekZVFwfit9WRshz4ts5EAaMvP92d",
  "key17": "4sc87ENoyikuQV56fYNfRNRuANDiTfRn2t6qMpVard99swYZXJi4nhWKuyKtuLqX9r3NV2dfxV9guTJyjYZtcxbA",
  "key18": "4yeY67viaSJyXVNwykK6kqKaSTusMepF1CwchzXsWKEgzQzL88uzR8YiKienT1wzHmFvbHGgSgXWt3VHVyvCFzdb",
  "key19": "3RYir23L1k6UkSQfT1vWAvihtUC9inPt3kJVzavCZHi2EdRfGvvuQHavuJu3yTLWyp7AhKpaVGKTnnqPS2VTWYEu",
  "key20": "W4VKncoqEdTTKGjkr6QMrCvmNasvsmHjwAgeY81tjgYPp2QEg6TyncRqHj6wfeJWYx3qQgDohEuXatJbSZkfKFL",
  "key21": "QhZ3gGMumbkZr4dNYuQVbUxpr7QD4cH5ZdhqakXWd4qat5onGEh1wKjP84WTMx6bPyd6VgtMjMTmiixhfDv1tp7",
  "key22": "2HPKqS76aF4imSDou59CUVhuvc7ov6rGsKtCPLF4KkZbLqRA91Ky9vHGzpgxhW57PqFhx1fj5rFANg5pXbaXd9bD",
  "key23": "262mn4ErNk3Srygad8ZXUf5gMtyr4MEzTToTcLm7fSsKn1u4yExcMfVWKUHvYimKd47a8GCvNXxVjDRqB9wSD34y",
  "key24": "4iJT4dY9fbsFwvm21PiMmLSaCMutMFMy9fNrbx4JsMfJiuhm9DYgnxe2KKUXc7DAxQqG4hjqraQ29VZ8NzKk3Lw2",
  "key25": "Gwp98fo6WbyBVrrvbub8dHvC2LbPgf2VtB1CHxzneEQ6qVyfJ5cf1wFRJLTGYchRGj7129BUQpbnGwHGa27hU3v",
  "key26": "4PSTTb3nfJjKKMPPfNkfwzGXe1zmR19vM9roLWbySRP55kphsQpvc6Pg1tFWfStjfyzwUXW5ej8jqhB4eipq6ndW",
  "key27": "669LJKxffEz1f93tPmsLGp5PjCN2t5kgeGrh6aNGa8eLoiQskuDGZPaba8LBLdordP9ZxmzoMsHyFM8NC4JimLtc",
  "key28": "4RpjH4vGjHMnJdM6ocXFpqjaw2YJpbRqHJ4tk48fRD6JmfQTHdAQjCdGAbL4uqTAkZXkuqwz8tHmpUQpZJkcSm3x",
  "key29": "3SRBm1QRGcMT1BZ1JpqvDGc6pC9BPk2ixZhvmNQiqqRUQaRjVYmTmo8QaJ9PMLFRLhUVH4QEwo97aTF5TEsNPp8K",
  "key30": "N6wP9sDEzqxmgGPcuwCaVkoEgdSPWB6aJjE3VjmtLXYkSTenkt84nVUJBST7qJHjZmCTAdawdCHP7dB5LMdnivN",
  "key31": "56w7UZwuVdVJnsUtf3H271af6FvJc5WZ21KHHtSQjufYDAqpa9PuMNm6EtYWhc1AWcfyddSUGRtTxTs8P86uFBRF",
  "key32": "PaoKPoqEdRvmNtZB9444vRjPPtrrpCyn5XaYcbbGJWb7izZkrwa7CU5KZdxMMn8poJzLtRttxnmgbAbTkTYCkAM",
  "key33": "4F67ajvC2c2WBmd3KzXa3fqGB2E1P6WJBayxzmfZGrnS5j7aFi8aTQm8qfC3qeuvoPPYCcJg23TqrYmQ7S6RXZt5",
  "key34": "415eN2niafCJ9gGyfkAH9LgRrwUYHRB4ZaykmfBaBKxRN2UpYatwCfvsY3h6SaYV5A61oexzWZPa7TmfBX9cE6mR",
  "key35": "PzzcHAHakzcr9N3j7QgcvmNokazrK2rfUKSRhu5ad9JemsGgvSj878uCXXa64r4AxTJUySyUTYJcJgXntbo1YGk"
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
