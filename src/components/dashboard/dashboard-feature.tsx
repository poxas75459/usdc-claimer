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
    "2ZXtKZGBwM8kJiM45kzuDWaz4itChgc51dwXa9jwJcfgunk8SodKwvyhhL6s94bS33kxbZi1fT5XLqkDDxZahVJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z94zaCBnhQgRuej9Npu7CRmpy9xoM2PENVdyqDX7pUEKvr4ju3owSLxbrRiA3zxyWtuVK8jf9RUdM4cPxehsFXN",
  "key1": "2mW75PTZttZUoBBiyT7DoAv7YMCXYasVxWZXTsx3AUtc8fbxWJ3BuUP9faNKMQCUwn5A23tV2meuDLp3fwie4JpU",
  "key2": "33TQqdYF235DGpLGeS2NNs8HdQMxpfEMBUkFYwzC1KfoJ8H2NskMa8L6Fs23XYwyC997whL9Cn51Sw535J2ZrecG",
  "key3": "4GqfrKAw4ham9htAfKeRs7oqZ2BX2DaAzGybcWLxyvroiLduhH6wGbfJ1hkGVhLqLk4Q3ixniZqrfKearmDzs3iw",
  "key4": "5YnFPmoCc6S5LjdX61pWhJUJpRpweNMpi2hHvcrtH14kFnkeUr5ZVWJp2CEGrkQLvyAZdGYARFdfepBcchQweSZx",
  "key5": "5eag4fNoNeBUgtAKWAriZM3YWGGeD9JaBtkxnwo7MLB8xZp1ktpsbESV53bbQg2ocqokCR6YPCoqjL6J9bRtZML7",
  "key6": "4E4tbRLUXzmivPAiw7ArDDF4rSzPS4ja7uY8FRZzchjtgaj39JHHRRi2p918UxR9r9djSvv29WW7TYL476VxjmkJ",
  "key7": "2W3mzMufAPpagPCD1ySEqMXwhpeZmZt27dREhC4UPL48EM7U4WNxBD663UMwqdMVSA1vGKNBA7HXkNvkqfYEZdNu",
  "key8": "32JgXDo1yz7U8i76WCiKicCEv3HQ4LLccAsuj9wu1Tdge5bydFARrptJkXUg2S65XLgVXg8R1pggF4aK1LUHvTQX",
  "key9": "3z5hvTRyB6KYoQ5gvVWzzeJvKQB5P5AYNsFUPfsgkCQXJnkiqVxarhpHHRgtV2QQy9yAx7NXg82kPY1zP4CWPrhw",
  "key10": "3gGq2XDfSHFNu4tFqpfX8RaHU3Jkf8khmTKGDx2bQD9RdgeKbQrpwKrvQ8THcAxUhk7CZWMAiz4NHfzXNitvppyw",
  "key11": "5c19uveHrs7GWL9MDS4zBLKugURYo5BJT37rifyAn2WVuDzi4bUWEFnpvECJJXRgXprG5o48k5QkdFJURGksrHpU",
  "key12": "2WThJGKW3CZCzi9fPqVJeX6StZLM4XfS9Qtp8Nbi9y7d1tKDNfs2aaxR5Kn7HXcyEt58Aij626rksspbay3qMfj8",
  "key13": "4d362dpZkTvQcX9QtYSeqjpAEBX35A3ddF8MaCCpN7f6nMo7kPP43hB9QVqyJbj22fyW8YFR26To5WDTfGF1VPxo",
  "key14": "2AASxJNTKbejbGvjzB8M5jDmh8ZZ5NBA2HjfUJP8PDoQ6coAFo2J2NyufmNuBCv2Z7tZRMX7LnA8uyxJvE6B3Z3p",
  "key15": "21R8TSXWcpRGHwDN7ieKFz7WfshcriB9zbowL7Aazmt3wrXNCHw8qDzGZPC1UBfBwky7VDX4SsZSoMgafRhstrTL",
  "key16": "5Fe1SaXFvzfwA3bFJ6TdBuN8AqQEb61tpTAmLrZ1UtRYZxjnLUqrAgTUdEo4s699zBRWsKfJAWwYWS6afuJ4VMWw",
  "key17": "4UkHrFsUxNSiUSvnYFNBLLjwy784ojMGQPAAwWtMTywQq5XUYT9KByDKiVWyK5VAgkiJfCYjNzanQ31H2XRNKShs",
  "key18": "3fqoD42PawYXEFR1psZvukXEZtobn2SyKRYiC4S9pVNUynNnHvNJYu96VnLnJ2P1EM427cGDk8PFr9qN7KZFVYVg",
  "key19": "irjrKdRjgvS6EMrHnXp4qune3EEReCnqif2PLY8VPy9724rzznw7DbKLdBMiVYAmksqAUUhrYRLeVhC5WaCCvCf",
  "key20": "556cxtwYfvrtNpUATu5o6fc6B8Jdz2BCLWTLxhhJba51zDecKEeRmWP9fb4Rfaa2UgkuMEAmEHXTXMMjMjhtovKy",
  "key21": "5GZNJdFcKLzZ1mgfSh3BuQTccupPy9aakhpxEd5sda5f5pQzgkuCXT48bqsNnB136zXhaRy4jhfLhoPDzpZm6hKj",
  "key22": "2RrXyB4Ws6qGDhTVBc8NyxYWy4cpZKSqYBBk6g2pT3yC2FVujeg7qakDQtD9QyyR1rYmCBd3WG3HJ6iC527B9S5H",
  "key23": "3qva6dpKhM6Bex4AKofSs6uY1PQcQaWEALUo5zDJdwSF6437J9opK2wrSbfAKGMQ4wQcza5Y7i7YriHePKciMsBR",
  "key24": "JYf9szbrYo9hRabf7f3uLBd3A8UsmDKoPyay6ZE26YpGkbkrn5CcxNFuMSERasZ7ZEbpygZPtwBpoxK7uywyGs1",
  "key25": "2FpCuEqbkVvmv4Pm3NaEnurYsVkKSLQJdmrfG1VQjqJdbvc4q7dTg5iHKzymEQdnHR73MFwo3XMnhHrRv4rEsetQ",
  "key26": "4p2pud87VrLDQ2BC6WsFrqJMCDTgGjBD31Rov3KLQN9wTWNFrTwJmiWaaeW61kNzX2rKH8ecKGnDpw3NAcMXAn2M",
  "key27": "CQGWBbmBSutSDHkDh2hKaxCTXxh1dF36KiWb7Z1w35bNdRXo9eyRwyAsccAwqcbv9XBUTHgB8pDTGrRPRGTF9qr",
  "key28": "2mjtUSU91AfAj6UYSEuWwG4QNAi5RjwehsxjXdyByRhNpmCcALseZuAyeA63yHTzGxTveXH1LBdgC2TBbss4okRb",
  "key29": "36xq7SKHRRMGxty8g3jwM8cA3Pd7zNQoZNkFxH8BZxEN3BjANbFGTysz4L9Ss1dPvXou3ZN7d51HmBHVxrTZrRBx",
  "key30": "3U2qS3scsmdxpRok28NYZ1TqRGKArfFsMyfi9Ke9NYwx6zHyAzRqL485KHzLoiNbnfqx1G1ymKWs1bZYdm26DfTb"
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
